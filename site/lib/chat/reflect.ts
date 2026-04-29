import { generateText, embed } from "ai";
import { eq, sql as drizzleSql } from "drizzle-orm";
import {
  db,
  chatThread,
  chatMessage,
  personas,
} from "@/lib/db/client";
import { chatModel, embeddingModel } from "./provider";

// How long after the last message a thread is considered "settled" and
// ready for reflection. 30 min covers the common case where a user
// closes the tab and doesn't come back, while leaving room for them to
// resume mid-conversation without us prematurely sealing the summary.
const SETTLE_MINUTES = 30;

// Minimum messages before a thread is worth reflecting on. A 1-turn
// thread ("hi" → "hello") doesn't have enough substance.
const MIN_MESSAGES_FOR_REFLECTION = 4;

// Cap thread transcript length sent to the summarizer. Long threads
// stay coherent; the summary just covers more ground.
const MAX_TRANSCRIPT_CHARS = 24_000;

export type ReflectionResult = {
  threadId: string;
  status: "reflected" | "skipped" | "failed";
  reason?: string;
};

/**
 * Find threads ripe for reflection: settled (no activity for
 * SETTLE_MINUTES), have at least MIN_MESSAGES_FOR_REFLECTION turns,
 * and either (a) no existing reflection or (b) message count grew past
 * the previous reflection's coverage.
 */
export async function findThreadsToReflect(limit = 10): Promise<
  Array<{
    threadId: string;
    personaSlug: string;
    tenantId: string | null;
    messageCount: number;
    lastReflectedThrough: number;
  }>
> {
  const cutoff = new Date(Date.now() - SETTLE_MINUTES * 60_000);
  const rows = await db.execute(drizzleSql`
    SELECT
      t.id            AS thread_id,
      t.persona_slug  AS persona_slug,
      t.tenant_id     AS tenant_id,
      COUNT(m.id)     AS message_count,
      COALESCE(MAX(m.created_at), t.updated_at) AS last_activity,
      COALESCE(r.reflected_through_message_count, 0) AS last_reflected_through
    FROM chat_thread t
    LEFT JOIN chat_message m ON m.thread_id = t.id
    LEFT JOIN chat_reflection r ON r.thread_id = t.id
    GROUP BY t.id, r.reflected_through_message_count
    HAVING
      COUNT(m.id) >= ${MIN_MESSAGES_FOR_REFLECTION}
      AND COALESCE(MAX(m.created_at), t.updated_at) < ${cutoff}
      AND COUNT(m.id) > COALESCE(r.reflected_through_message_count, 0)
    ORDER BY COALESCE(MAX(m.created_at), t.updated_at) DESC
    LIMIT ${limit}
  `);
  return rows.rows.map((r) => ({
    threadId: r.thread_id as string,
    personaSlug: r.persona_slug as string,
    tenantId: (r.tenant_id as string | null) ?? null,
    messageCount: Number(r.message_count),
    lastReflectedThrough: Number(r.last_reflected_through ?? 0),
  }));
}

function buildSummaryPrompt(
  personaName: string,
  transcript: string
): string {
  return `You are ${personaName}. Below is a conversation you just had with someone who asked you about your experiences with brand emails. Write a short first-person reflection on this conversation — the kind of note you'd jot in your own journal afterward.

Goals of the reflection:
- Capture what was discussed and what you concluded or felt.
- Mention any specific brands, emails, or experiences that came up.
- Stay in YOUR voice — first person ("I", "me", "my"), no third-person narration.
- 2-4 short paragraphs. No headings. No bullet lists.
- Don't say "in this conversation" or "the user asked" — write as if reflecting on the experience itself, not narrating the meta-event of the chat.

Output exactly two sections, separated by a single blank line:

1. A 4-8 word title (no quotes, no punctuation at the end), capturing what stuck with you.
2. The reflection prose itself.

CONVERSATION:
${transcript}`;
}

function formatTranscript(
  msgs: Array<{ role: string; content: string }>
): string {
  const lines: string[] = [];
  for (const m of msgs) {
    if (m.role !== "user" && m.role !== "assistant") continue;
    const speaker = m.role === "user" ? "User" : "Me";
    lines.push(`${speaker}: ${m.content.trim()}`);
  }
  return lines.join("\n\n").slice(0, MAX_TRANSCRIPT_CHARS);
}

function splitTitleAndBody(text: string): { title: string; body: string } {
  const trimmed = text.trim();
  const firstBlank = trimmed.indexOf("\n\n");
  if (firstBlank === -1) {
    // Fallback: split on first newline; whole thing is the body.
    const firstNl = trimmed.indexOf("\n");
    if (firstNl === -1) return { title: trimmed.slice(0, 80), body: trimmed };
    return {
      title: trimmed.slice(0, firstNl).trim().slice(0, 120),
      body: trimmed.slice(firstNl + 1).trim(),
    };
  }
  const title = trimmed
    .slice(0, firstBlank)
    .replace(/^["'`]+|["'`]+$/g, "")
    .replace(/\.+$/, "")
    .trim()
    .slice(0, 120);
  const body = trimmed.slice(firstBlank + 2).trim();
  return { title, body };
}

async function loadPersonaName(slug: string): Promise<string> {
  const [p] = await db
    .select({ name: personas.name })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  return p?.name ?? slug;
}

export async function reflectOnThread(threadId: string): Promise<ReflectionResult> {
  const [t] = await db
    .select({
      id: chatThread.id,
      personaSlug: chatThread.personaSlug,
      tenantId: chatThread.tenantId,
    })
    .from(chatThread)
    .where(eq(chatThread.id, threadId))
    .limit(1);
  if (!t) return { threadId, status: "skipped", reason: "thread not found" };

  const messages = await db
    .select({ role: chatMessage.role, content: chatMessage.content })
    .from(chatMessage)
    .where(eq(chatMessage.threadId, threadId))
    .orderBy(chatMessage.createdAt);
  if (messages.length < MIN_MESSAGES_FOR_REFLECTION) {
    return { threadId, status: "skipped", reason: "too few messages" };
  }

  const personaName = await loadPersonaName(t.personaSlug);
  const transcript = formatTranscript(messages);
  const prompt = buildSummaryPrompt(personaName, transcript);

  let raw: string;
  try {
    const result = await generateText({
      model: chatModel(),
      prompt,
      temperature: 0.4,
      maxOutputTokens: 800,
    });
    raw = result.text;
  } catch (err) {
    return {
      threadId,
      status: "failed",
      reason: `summarize: ${err instanceof Error ? err.message : String(err)}`,
    };
  }

  const { title, body } = splitTitleAndBody(raw);
  if (!body) return { threadId, status: "failed", reason: "empty summary body" };

  // Embed the title + body so the chat retrieval can pick up the
  // reflection alongside reactions on a relevant query.
  const embedText = `Reflection — ${title}\n\n${body}`.slice(0, 1500);
  let embedding: number[];
  try {
    const r = await embed({ model: embeddingModel(), value: embedText });
    embedding = r.embedding;
  } catch (err) {
    return {
      threadId,
      status: "failed",
      reason: `embed: ${err instanceof Error ? err.message : String(err)}`,
    };
  }

  const literal = `[${embedding.join(",")}]`;
  await db.execute(drizzleSql`
    INSERT INTO chat_reflection
      (thread_id, persona_slug, tenant_id, title, summary, embedding,
       reflected_through_message_count, created_at, updated_at)
    VALUES
      (${threadId}, ${t.personaSlug}, ${t.tenantId}, ${title}, ${body},
       ${literal}::vector, ${messages.length}, NOW(), NOW())
    ON CONFLICT (thread_id) DO UPDATE SET
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      embedding = EXCLUDED.embedding,
      reflected_through_message_count = EXCLUDED.reflected_through_message_count,
      updated_at = NOW()
  `);

  return { threadId, status: "reflected" };
}

/**
 * Run reflection across every ripe thread. Used by the cron route. Caps
 * the batch size so a long backlog doesn't time out a single invocation.
 */
export async function reflectRipeThreads(batch = 5): Promise<ReflectionResult[]> {
  const ripe = await findThreadsToReflect(batch);
  const results: ReflectionResult[] = [];
  for (const r of ripe) {
    try {
      results.push(await reflectOnThread(r.threadId));
    } catch (err) {
      results.push({
        threadId: r.threadId,
        status: "failed",
        reason: err instanceof Error ? err.message : String(err),
      });
    }
  }
  return results;
}
