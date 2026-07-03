import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

// Push cache-invalidation endpoint. The audit producers (email-monitor,
// site-monitor, ...) write audits directly to Postgres, out of the site
// process, so they can't call revalidateTag() themselves. After a write they
// POST here with the cache tags to bust (e.g. `audit-index:<persona>`,
// `audit:<slug>`), giving near-instant freshness instead of waiting for the
// 10-min time-based backstop on those `unstable_cache` reads.
//
// Auth mirrors the cron routes: a shared CRON_SECRET bearer token. See
// audit-pipeline/revalidate.mjs for the caller.

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const expected = process.env.CRON_SECRET;
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "CRON_SECRET not set on this deploy" },
      { status: 500 }
    );
  }
  const auth = req.headers.get("authorization") ?? "";
  if (auth !== `Bearer ${expected}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  let body: { tags?: unknown } = {};
  try {
    body = await req.json();
  } catch {
    // fall through to the empty-tags check
  }
  const tags = Array.isArray(body.tags)
    ? body.tags.filter((t): t is string => typeof t === "string" && t.length > 0)
    : [];
  if (tags.length === 0) {
    return NextResponse.json(
      { ok: false, error: "no tags provided" },
      { status: 400 }
    );
  }

  // revalidateTag(tag, profile) — stale-while-revalidate. Allowed in Route
  // Handlers (updateTag is Server-Action-only). 'max' = longest stale window;
  // the next request serves stale while fresh regenerates in the background,
  // so the new audit appears within ~a request of the daemon's ping. Busts the
  // `unstable_cache` entries tagged the same way in site/lib/{audits,personas-db}.ts.
  for (const tag of tags) revalidateTag(tag, "max");
  return NextResponse.json({ ok: true, revalidated: tags });
}
