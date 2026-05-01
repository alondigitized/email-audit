// Double-opt-in auto-confirm. Most brand newsletters send a "confirm
// your email" message after signup; without clicking through, the persona
// gets dropped from the list. This module:
//   1. detects whether an inbound email is a confirmation message
//   2. extracts the primary "I'M IN" / "Confirm" CTA URL from the body
//   3. fetches that URL and reports the result
//
// Result is stored on the audit row (data.auto_confirm) so the audit
// detail page can show "Auto-confirmed at HH:MM" alongside the URL,
// keeping the user in the loop while removing the manual click.
//
// Risk surface is small: persona inboxes only receive mail from brands
// they've explicitly subscribed to, so following a confirmation link is
// the obvious intent. Still, we restrict to https only, no localhost,
// and a 10-second timeout.

const FETCH_TIMEOUT_MS = 10_000;
const UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 ' +
  '(KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

// Subject patterns that look like a DOI ask. Case-insensitive.
const SUBJECT_PATTERNS = [
  /\bconfirm(?:ation)?\b.*\b(?:email|address|subscription|sign[\-\s]?up)\b/i,
  /\bverify\b.*\b(?:email|address)\b/i,
  /\bdouble[\-\s]?opt[\-\s]?in\b/i,
  /\baction\s+required\b.*\bconfirm\b/i,
  /\b(?:complete|finish)\b.*\b(?:sign[\-\s]?up|subscription|registration)\b/i,
  /\b(?:please\s+)?confirm\b.*\bsubscription\b/i,
  /\byou'?re\s+almost\s+(?:there|in)\b/i,
  /\bone\s+more\s+step\b/i,
  /\bopt\s+in\b/i,
];

// Anchor text patterns that denote the primary confirm CTA. Ordered by
// specificity — most specific first.
const CTA_TEXT_PATTERNS = [
  /\bi'?m\s+in!?\b/i,
  /\bconfirm\s+(?:your\s+)?(?:email|subscription|sign[\-\s]?up)\b/i,
  /\bverify\s+(?:your\s+)?(?:email|address)\b/i,
  /\bcomplete\s+(?:my\s+)?(?:sign[\-\s]?up|subscription|registration)\b/i,
  /\byes,?\s*(?:add|sign|count)\s+me\s+(?:in|up)\b/i,
  /\bclick\s+(?:here\s+)?to\s+confirm\b/i,
  /\bopt\s+in\b/i,
  /\bconfirm\b/i,
  /\bverify\b/i,
];

// URL fragment patterns that suggest a confirmation endpoint, used as a
// last-resort fallback when no anchor text matches.
const URL_PATH_PATTERNS = [
  /\/(?:doi|double[\-_]?opt[\-_]?in)[\-_/]?confirm/i,
  /\/(?:confirm|verify)[\-_/](?:email|subscription|sign[\-_]?up|address)/i,
  /\/(?:opt[\-_]?in|subscribe[\-_]?confirm)/i,
  /\/cms\/doi[\-_]?confirmation/i,
  /[?&](?:confirm|opt[\-_]?in|verify)=[^&]+/i,
];

// Strip RFC2045 quoted-printable encoding: soft line breaks (=\r\n) and
// hex escapes (=3D → '='). Email bodies arrive QP-encoded by default;
// the URL we extract is otherwise unusable.
export function decodeQuotedPrintable(input) {
  if (!input) return '';
  return input
    .replace(/=\r?\n/g, '')
    .replace(/=([0-9A-Fa-f]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
}

export function detectConfirmationEmail({ subject, html, text }) {
  const subj = String(subject ?? '');
  if (!subj) return false;
  for (const re of SUBJECT_PATTERNS) {
    if (re.test(subj)) return true;
  }
  // Subject didn't match — fall back to body keywords as a soft signal.
  // Only fires when both an anchor-text match AND a URL pattern match
  // exist, to avoid false positives on promotional emails that happen
  // to mention "confirm" in passing.
  const body = decodeQuotedPrintable(html ?? text ?? '');
  if (!body) return false;
  const hasCtaText = CTA_TEXT_PATTERNS.some((re) => re.test(body));
  const hasCtaUrl = URL_PATH_PATTERNS.some((re) => re.test(body));
  return hasCtaText && hasCtaUrl;
}

// Find every <a href="..."> + visible-text pair in the (decoded) HTML.
// Cheap regex parse — DOMParser is nicer but we want this module zero-dep.
function extractAnchors(html) {
  const out = [];
  const re = /<a\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const href = m[1].trim();
    const innerText = m[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (href && /^https?:\/\//i.test(href)) {
      out.push({ href, text: innerText });
    }
  }
  return out;
}

export function extractConfirmationUrl({ html, text }) {
  const decodedHtml = decodeQuotedPrintable(html ?? '');
  const anchors = extractAnchors(decodedHtml);

  // Pass 1 — anchor whose visible text matches a known CTA phrase. Most
  // accurate signal; "I'M IN!" is unambiguous.
  for (const re of CTA_TEXT_PATTERNS) {
    const hit = anchors.find((a) => re.test(a.text));
    if (hit) return hit.href;
  }

  // Pass 2 — anchor whose URL path looks like a DOI endpoint.
  for (const re of URL_PATH_PATTERNS) {
    const hit = anchors.find((a) => re.test(a.href));
    if (hit) return hit.href;
  }

  // Pass 3 — same URL-path scan against the plain text body (covers
  // text-only emails or HTML that hides the URL outside an <a>).
  const decodedText = decodeQuotedPrintable(text ?? '');
  const urlMatches = decodedText.match(/https?:\/\/[^\s"<>)]+/g) ?? [];
  for (const re of URL_PATH_PATTERNS) {
    const hit = urlMatches.find((u) => re.test(u));
    if (hit) return hit;
  }

  return null;
}

function safeUrl(u) {
  try {
    const parsed = new URL(u);
    if (parsed.protocol !== 'https:') return null;
    if (parsed.hostname === 'localhost' || /^[\d.]+$/.test(parsed.hostname)) return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

export async function clickConfirmation(rawUrl) {
  const url = safeUrl(rawUrl);
  const attemptedAt = new Date().toISOString();
  if (!url) {
    return {
      url: rawUrl,
      attempted_at: attemptedAt,
      http_status: null,
      success: false,
      error: 'rejected unsafe URL (non-https or local)',
    };
  }
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), FETCH_TIMEOUT_MS);
  try {
    const r = await fetch(url, {
      method: 'GET',
      headers: { 'User-Agent': UA, Accept: 'text/html' },
      redirect: 'follow',
      signal: ctl.signal,
    });
    return {
      url,
      attempted_at: attemptedAt,
      http_status: r.status,
      success: r.status >= 200 && r.status < 400,
      error: null,
    };
  } catch (err) {
    return {
      url,
      attempted_at: attemptedAt,
      http_status: null,
      success: false,
      error: (err instanceof Error ? err.message : String(err)).slice(0, 200),
    };
  } finally {
    clearTimeout(timer);
  }
}

// Full pipeline: detect → extract → click. Returns the auto_confirm shape
// to attach to the audit row, or null when this isn't a confirmation
// email at all (no auto_confirm field is written in that case).
export async function runAutoConfirm({ subject, html, text }) {
  if (!detectConfirmationEmail({ subject, html, text })) return null;
  const url = extractConfirmationUrl({ html, text });
  if (!url) {
    return {
      url: '',
      attempted_at: new Date().toISOString(),
      http_status: null,
      success: false,
      error: 'detected as confirmation email but no CTA URL found',
    };
  }
  return await clickConfirmation(url);
}
