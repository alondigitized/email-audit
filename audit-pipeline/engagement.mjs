/**
 * Engagement simulation. Solves the "graymail suppression" problem:
 * ESPs (Klaviyo, Braze, Sailthru, etc.) reduce send frequency or stop
 * sending entirely after 30-90 days of zero engagement (no opens, no
 * clicks). A persona inbox that purely receives but never engages will
 * eventually go dark regardless of which mailbox provider it's on.
 *
 * Strategy per email:
 *   1. Parse the rendered HTML for tracking pixels — `<img>` tags whose
 *      src belongs to common ESP tracking domains. GET each one with a
 *      browser-shaped User-Agent and the persona's address as a query
 *      hint when present. This counts as an "open" in the ESP's
 *      analytics.
 *   2. With 1/N probability, also follow the primary CTA link. Pick
 *      the first non-unsubscribe link that points at the brand's own
 *      domain (heuristic: highest-frequency link). HEAD only — we don't
 *      need the body, just the click event.
 *   3. Insert a small randomized delay (30-300s) before each fetch so a
 *      mass batch doesn't look like a bot.
 *
 * Best-effort throughout — failures don't block audit publishing. The
 * goal is enough engagement signal to stay off suppression lists, not
 * 100% capture.
 */

const ESP_PIXEL_HOST_HINTS = [
  "track",
  "open",
  "tracking",
  "click",
  "links",
  "trk",
  "mailtrack",
  "mlsend",
  "klclick",
  "sendgrid",
  "mailgun",
  "postmarkapp",
  "amazonses",
  "et.email",
  "rs6.net",
  "pe.email",
];

const USER_AGENTS = [
  // Apple Mail (macOS) — the most ESP-trusted UA.
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
  // Apple Mail (iOS).
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  // Gmail (web).
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
];

const CLICK_PROBABILITY = 0.2; // 1 in 5 emails gets a CTA click.
const MIN_DELAY_MS = 30_000;
const MAX_DELAY_MS = 300_000;
const FETCH_TIMEOUT_MS = 10_000;

function pickUserAgent() {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
}

function randomDelayMs() {
  return (
    MIN_DELAY_MS + Math.floor(Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS))
  );
}

function looksLikePixel(src) {
  if (!src) return false;
  const lower = src.toLowerCase();
  if (!lower.startsWith("http")) return false;
  // Most ESP tracking pixels live on a subdomain like track.brand.com
  // or links.email.brand.com, OR include "open"/"track" in the path.
  for (const h of ESP_PIXEL_HOST_HINTS) {
    if (lower.includes(h)) return true;
  }
  // Tiny image (1x1) — common pixel signature in path/query.
  if (/[?&#](w|width|h|height)=1\b/.test(lower)) return true;
  return false;
}

function isUnsubscribeLink(href) {
  const l = (href ?? "").toLowerCase();
  return /unsub|opt[-_]?out|preferences|manage/.test(l);
}

function extractPixelUrls(html) {
  const urls = new Set();
  const imgRe = /<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/gi;
  let m;
  while ((m = imgRe.exec(html)) !== null) {
    if (looksLikePixel(m[1])) urls.add(m[1]);
  }
  return [...urls];
}

function pickCtaLink(html, brandDomain) {
  const re = /<a\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/gi;
  const counts = new Map();
  let m;
  while ((m = re.exec(html)) !== null) {
    const href = m[1];
    if (!href.startsWith("http")) continue;
    if (isUnsubscribeLink(href)) continue;
    if (brandDomain && !href.toLowerCase().includes(brandDomain.toLowerCase()))
      continue;
    counts.set(href, (counts.get(href) ?? 0) + 1);
  }
  if (counts.size === 0) return null;
  // Most-frequent link wins — heuristic for the primary CTA.
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
}

async function fetchWithTimeout(url, opts) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetch(url, { ...opts, signal: ctl.signal });
  } finally {
    clearTimeout(t);
  }
}

async function fireOpen(url, ua, refererBrand) {
  try {
    const res = await fetchWithTimeout(url, {
      method: "GET",
      redirect: "follow",
      headers: {
        "User-Agent": ua,
        Accept: "image/webp,image/png,image/svg+xml,image/*,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        Referer: refererBrand ? `https://${refererBrand}/` : undefined,
      },
    });
    return { url, status: res.status, ok: res.ok };
  } catch (err) {
    return {
      url,
      status: 0,
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

async function fireClick(url, ua, refererBrand) {
  try {
    const res = await fetchWithTimeout(url, {
      method: "GET",
      redirect: "follow",
      headers: {
        "User-Agent": ua,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        Referer: refererBrand ? `https://${refererBrand}/` : undefined,
      },
    });
    return { url, status: res.status, ok: res.ok };
  } catch (err) {
    return {
      url,
      status: 0,
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

/**
 * Run engagement for a single email's rendered HTML. Returns a small
 * report so the caller (email-monitor) can log what happened.
 *
 * Schedules itself off-thread via setTimeout — the caller is not blocked.
 */
export function scheduleEngagement({ html, brandDomain, slug }) {
  if (!html) return;
  const pixels = extractPixelUrls(html);
  const ctaUrl = Math.random() < CLICK_PROBABILITY
    ? pickCtaLink(html, brandDomain)
    : null;
  if (pixels.length === 0 && !ctaUrl) return;

  const ua = pickUserAgent();
  const delay = randomDelayMs();

  setTimeout(async () => {
    const opens = [];
    for (const px of pixels.slice(0, 5)) {
      // Cap to 5 — emails sometimes have many tracking pixels, no need
      // to fire all of them.
      const r = await fireOpen(px, ua, brandDomain);
      opens.push(r);
      // Tiny gap between pixels so they don't appear as a single burst.
      await new Promise((r) => setTimeout(r, 800 + Math.random() * 1500));
    }
    let click = null;
    if (ctaUrl) {
      // Stagger the click 5-30s after the opens — humans don't click
      // instantly on opening.
      await new Promise((r) =>
        setTimeout(r, 5_000 + Math.random() * 25_000)
      );
      click = await fireClick(ctaUrl, ua, brandDomain);
    }
    console.log(
      `engagement[${slug}]: opens=${opens.filter((o) => o.ok).length}/${opens.length}` +
        (click ? ` click=${click.ok ? "ok" : `${click.status}`}` : ` click=skipped`)
    );
  }, delay).unref?.();
}
