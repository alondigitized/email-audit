// Best-effort push cache-invalidation. After a LIVE producer publishes an
// audit, tell the site to bust the cached reads for that persona + slug so the
// new audit appears immediately instead of waiting for the site's 10-min
// time-based backstop (see site/app/api/revalidate/route.ts and the
// unstable_cache reads in site/lib/{audits,personas-db}.ts).
//
// Gated on REVALIDATE_SITE_ON_PUBLISH so that backfills, one-shot scripts, and
// local/test runs — which reuse audit-pipeline/publish.mjs — never spam the
// endpoint. Only the live daemon .env files set the flag. Also no-ops if the
// site URL/secret aren't configured. Fire-and-forget: never awaited by the
// write path, errors are swallowed, and a short timeout guards against a hung
// endpoint so audit throughput is untouched.

const ENABLED = /^(1|true|yes|on)$/i.test(
  process.env.REVALIDATE_SITE_ON_PUBLISH ?? ""
);

export function pingRevalidate(tags) {
  if (!ENABLED) return;
  const base = process.env.SITE_BASE_URL;
  const secret = process.env.CRON_SECRET;
  const list = Array.isArray(tags)
    ? tags.filter((t) => typeof t === "string" && t.length > 0)
    : [];
  if (!base || !secret || list.length === 0) return;

  const url = `${base.replace(/\/$/, "")}/api/revalidate`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${secret}`,
    },
    body: JSON.stringify({ tags: list }),
    signal: controller.signal,
  })
    .catch(() => {})
    .finally(() => clearTimeout(timer));
}
