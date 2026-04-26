import { NextResponse } from "next/server";
import { generateText, embed } from "ai";
import { requireUser } from "@/lib/dal";
import { chatModel, embeddingModel } from "@/lib/chat/provider";

// Pre-warm the local Ollama models so the first real chat doesn't pay the
// model-load tax on top of the Vercel function cold start.
//
// Why: the cold-start cascade for the first chat goes:
//   1. Vercel function cold start (~1s)
//   2. Ollama embedding model load (mxbai-embed-large, ~5–15s)
//   3. pgvector retrieval (<100ms)
//   4. Ollama chat model load (qwen2.5:14b, ~10–30s)
//   5. First token streamed back
// Stacked, that's 15–50s of dead air on the first message — long enough
// that some clients give up. Hitting both models with a 1-token prompt
// before the user types collapses the cascade to near-zero by the time
// they hit Send.
//
// Called by ChatClient on mount (client-side useEffect → fire-and-forget
// fetch). Idempotent. Auth-required. Cost: one tiny Ollama generate +
// one embedding per chat-page load — negligible on local infra.

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST() {
  const user = await requireUser().catch(() => null);
  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const t0 = Date.now();
  // Run both warmups in parallel; embedding is usually faster but we wait
  // on the slowest. Errors swallowed — warmup is best-effort.
  const [chatRes, embedRes] = await Promise.allSettled([
    generateText({
      model: chatModel(),
      prompt: "ok",
      maxOutputTokens: 4,
    }),
    embed({
      model: embeddingModel(),
      value: "ok",
    }),
  ]);

  return NextResponse.json({
    ok: true,
    ms: Date.now() - t0,
    chat: chatRes.status,
    embed: embedRes.status,
  });
}

// Lightweight GET so ops can verify the endpoint is reachable without
// hitting the model. Returns config status only.
export async function GET() {
  const user = await requireUser().catch(() => null);
  if (!user) return new NextResponse("Unauthorized", { status: 401 });
  return NextResponse.json({ ok: true, route: "/api/chat/warmup" });
}
