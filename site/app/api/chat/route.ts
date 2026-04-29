import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { z } from "zod";
import { requireUser } from "@/lib/dal";
import { requireAppEnabled } from "@/lib/apps";
import {
  retrieveRelevantAudits,
  loadPersonaIdentity,
  getAuditMemoryCount,
} from "@/lib/chat/retrieve";
import { buildSystemPrompt, buildTitlePrompt } from "@/lib/chat/prompt";
import { chatModel, titleModel } from "@/lib/chat/provider";
import {
  createThread,
  getThread,
  appendMessage,
  setThreadTitle,
  listMessages,
  userAboveRateLimit,
} from "@/lib/chat/threads";

export const runtime = "nodejs";
// 300s ceiling (Vercel Pro) — covers cold starts on larger local models
// (14B+) where first-token + generation + tunneling can exceed 60s.
export const maxDuration = 300;

const BodySchema = z.object({
  personaSlug: z.string().regex(/^[a-z0-9-]+$/).max(64),
  threadId: z.string().uuid().optional(),
  messages: z.array(
    z.object({
      id: z.string().optional(),
      role: z.enum(["user", "assistant", "system"]),
      parts: z
        .array(
          z.object({
            type: z.string(),
            text: z.string().optional(),
          })
        )
        .optional(),
      content: z.string().optional(),
    })
  ),
});

function extractText(m: { parts?: { type: string; text?: string }[]; content?: string }): string {
  if (typeof m.content === "string" && m.content.length) return m.content;
  if (Array.isArray(m.parts)) {
    return m.parts
      .filter((p) => p.type === "text" && typeof p.text === "string")
      .map((p) => p.text)
      .join("");
  }
  return "";
}

export async function POST(req: Request) {
  const user = await requireUser();
  await requireAppEnabled("chat", {
    isAdmin: user.isAdmin,
    userApps: user.apps,
  });

  const json = await req.json().catch(() => ({}));
  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return new Response("Bad request", { status: 400 });
  }
  const { personaSlug, messages } = parsed.data;
  let { threadId } = parsed.data;

  // Ownership: admins can chat with anyone; users only with personas they own.
  if (!user.isAdmin && !user.personas.includes(personaSlug)) {
    return new Response("Not found", { status: 404 });
  }

  // Simple DB-backed rate limit.
  if (await userAboveRateLimit(user.id)) {
    return new Response(
      JSON.stringify({ error: "Rate limit — slow down a bit." }),
      { status: 429, headers: { "content-type": "application/json" } }
    );
  }

  // Thread: resume or create.
  if (threadId) {
    const existing = await getThread(threadId, user.id);
    if (!existing || existing.personaSlug !== personaSlug) {
      return new Response("Not found", { status: 404 });
    }
  } else {
    threadId = await createThread(user.id, personaSlug, user.tenantId);
  }

  const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
  const query = lastUserMsg ? extractText(lastUserMsg) : "";
  if (!query.trim()) {
    return new Response("Empty message", { status: 400 });
  }

  // Retrieval + system prompt. Total memory count goes into the prompt's
  // STATS block so the persona can answer "how many audits?" without
  // mistaking the retrieved subset for the total.
  const [retrieved, identity, totalMemoryCount] = await Promise.all([
    retrieveRelevantAudits(personaSlug, query).catch(() => []),
    loadPersonaIdentity(personaSlug),
    getAuditMemoryCount(personaSlug).catch(() => 0),
  ]);
  const system = buildSystemPrompt(identity, retrieved, totalMemoryCount);

  // Persist the user's new message BEFORE streaming so a dropped response
  // still leaves the thread consistent.
  await appendMessage({
    threadId,
    role: "user",
    content: query,
  });

  // Stream via the configured OpenAI-compatible provider (Ollama by default).
  const result = await streamText({
    model: chatModel(),
    system,
    messages: convertToModelMessages(messages as UIMessage[]),
    onFinish: async ({ text }) => {
      await appendMessage({
        threadId: threadId!,
        role: "assistant",
        content: text,
        retrievedSlugs: retrieved.map((r) => r.slug),
      });

      // First exchange? Generate a thread title in the background.
      const existingMessages = await listMessages(threadId!);
      if (existingMessages.length === 2) {
        try {
          const { text: title } = await streamTextSimple(
            buildTitlePrompt(query)
          );
          const clean = title.trim().replace(/^["'`]+|["'`]+$/g, "").slice(0, 80);
          if (clean) await setThreadTitle(threadId!, clean);
        } catch {
          // Title is cosmetic; swallow failures.
        }
      }
    },
  });

  const response = result.toUIMessageStreamResponse();
  // Surface the thread ID so the client can rehydrate the URL on first turn.
  response.headers.set("X-Chat-Thread-Id", threadId);
  return response;
}

// Thin wrapper for the background title call. streamText returns a stream;
// we collect the full text before returning.
async function streamTextSimple(prompt: string): Promise<{ text: string }> {
  const result = await streamText({
    model: titleModel(),
    prompt,
  });
  let text = "";
  for await (const chunk of result.textStream) {
    text += chunk;
  }
  return { text };
}
