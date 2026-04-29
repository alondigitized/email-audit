import { NextRequest, NextResponse } from "next/server";
import { reflectRipeThreads } from "@/lib/chat/reflect";

// Vercel Cron entry. Picks up settled chat threads (no activity for
// ~30 min) and writes a first-person reflection note to chat_reflection
// for each. The note's embedding is surfaced alongside reaction
// embeddings during chat retrieval — so the persona's own conversations
// become a memory it can recall in future chats.
//
// Schedule: every 30 min (matches the settle window — gives at most one
// reflection per thread per cron tick once the thread goes quiet).
//
// Auth: Vercel sets the Authorization header to `Bearer ${CRON_SECRET}`
// for cron invocations. We accept that OR a manual hit with the same
// secret, so an admin can re-fire the job during incident triage.

export const runtime = "nodejs";
export const maxDuration = 300;

export async function GET(req: NextRequest) {
  const expected = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization") ?? "";
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "CRON_SECRET not set on this deploy" },
      { status: 500 }
    );
  }
  if (auth !== `Bearer ${expected}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const t0 = Date.now();
  const results = await reflectRipeThreads();
  return NextResponse.json({
    ok: true,
    ms: Date.now() - t0,
    count: results.length,
    results,
  });
}
