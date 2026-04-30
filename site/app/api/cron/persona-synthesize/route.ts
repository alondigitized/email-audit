import { NextRequest, NextResponse } from "next/server";
import { runStaleSyntheses } from "@/lib/chat/synthesize";

// Stage D — cross-audit synthesis cron. Picks (persona, brand) pairs
// where the reaction count has grown past the last summary's coverage,
// builds a fresh first-person POV note via the chat model, embeds, and
// upserts into persona_synthesis.
//
// Schedule: once a day at 04:17 UTC (off-peak, after the daily audit
// volume settles). One pass writes ~5 fresh syntheses; a backlog
// resolves over a few days.

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
  const results = await runStaleSyntheses();
  return NextResponse.json({
    ok: true,
    ms: Date.now() - t0,
    count: results.length,
    results,
  });
}
