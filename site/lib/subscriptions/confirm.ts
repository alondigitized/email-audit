import { eq, desc } from "drizzle-orm";
import { db, subscriptionJobs } from "@/lib/db/client";

// Auto-confirm Klaviyo double-opt-in subscriptions when the confirmation
// email lands at one of our persona inboxes. Klaviyo's per-list double
// opt-in is a single GET on a token-bearing URL — no session, no cookies,
// no JS. Following the link from server-side fetch is sufficient.
//
// Without this step, our `auto_succeeded` rows are misleading: the brand
// has accepted the email but won't send marketing until the recipient
// clicks the confirm link. By the time the daemon would render the
// confirmation email as just-another-audit, the link is sitting unclicked.
//
// Detection is intentionally conservative — we want false negatives over
// false positives. A non-Klaviyo email that happens to mention "confirm
// subscription" will simply not match and fall through to the audit
// pipeline as usual.

const FETCH_TIMEOUT_MS = 8000;
const UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 " +
  "(KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";

// Tier 1 — Klaviyo's confirm URL pattern. Confirm links live on the
// kmail-lists domain regardless of which brand sent the email; the
// click-tracker links (klaviyomail.com/c/...) redirect there with
// `redirect: follow`.
const KLAVIYO_CONFIRM_URL_RE =
  /https?:\/\/manage\.kmail-lists\.com\/subscriptions\/(?:confirm|optin)[^"\s>'<)]+/i;

// Klaviyo sender shapes. Brand-side senders (e.g. `noreply@glossier.com`)
// get rewritten to klaviyomail.com / kmail.io domains for the confirm flow.
const KLAVIYO_SENDER_RE = /(klaviyomail\.com|klmail\.com|kmail-lists\.com|kmail\.io)/i;

// Tier 2 — generic ESP confirmations (Salesforce Marketing Cloud, Listrak,
// Bloomreach, etc.). Subject must be unambiguously a confirm prompt AND we
// need an anchor whose VISIBLE TEXT matches confirm/verify (so we don't
// click "unsubscribe" or "manage preferences" by accident).
const STRICT_CONFIRM_SUBJECT_RE =
  /(confirm\s+(?:your\s+)?(?:email|subscription)|verify\s+(?:your\s+)?email|action\s+required.*confirm|please\s+confirm\s+(?:your\s+)?(?:email|subscription))/i;

// Anchor text that signals an active confirm CTA. Conservative — only
// short, unambiguous phrases.
const CONFIRM_ANCHOR_TEXT_RE = /^(?:confirm(?:\s+(?:email|subscription|now|here|my\s+email))?|verify(?:\s+(?:email|now))?|activate(?:\s+(?:account|email|subscription))?|opt[-\s]?in)$/i;

// Anchor text we must NOT click even if other heuristics match.
const NEGATIVE_ANCHOR_TEXT_RE = /(unsub|preference|view\s+(?:this|in)\b|browser|manage|update\s+profile|forward|tell\s+a\s+friend)/i;

// Loose subject hint kept for log clarity ("we saw something confirm-shaped").
const SUBJECT_RE =
  /(confirm.*subscri|subscri.*confirm|please\s+confirm|verify.*email|opt[-\s]?in|confirm\s+your)/i;

export type ConfirmResult =
  | { confirmed: true; url: string }
  | { confirmed: false; reason: string };

function decodeHtmlEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#x2F;/g, "/")
    .replace(/&#47;/g, "/")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
}

// Tier 1 — Klaviyo. Strict; requires a kmail-lists URL in the HTML AND
// either a Klaviyo-routed sender or a confirm-y subject.
function findKlaviyoConfirmUrl(args: {
  fromAddress: string;
  subject: string | null;
  html: string;
}): string | null {
  const senderHint = KLAVIYO_SENDER_RE.test(args.fromAddress);
  const subjectHint = SUBJECT_RE.test(args.subject ?? "");
  const m = args.html.match(KLAVIYO_CONFIRM_URL_RE);
  if (!m) return null;
  if (!(senderHint || subjectHint)) return null;
  return decodeHtmlEntities(m[0]);
}

// Tier 2 — generic ESP confirms. Subject must unambiguously prompt a
// confirm/verify, AND we find an anchor whose visible text is one of a
// short whitelist (confirm / verify / activate / opt-in). The anchor's
// href is whatever the brand wrapped it in (Salesforce click-tracker,
// Listrak, etc.) — we just GET it and follow redirects.
function findGenericConfirmAnchor(args: {
  subject: string | null;
  html: string;
}): string | null {
  if (!STRICT_CONFIRM_SUBJECT_RE.test(args.subject ?? "")) return null;
  const anchorRe = /<a\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  for (const m of args.html.matchAll(anchorRe)) {
    const href = m[1];
    if (!/^https?:\/\//i.test(href)) continue;
    const text = m[2]
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (!text) continue;
    if (NEGATIVE_ANCHOR_TEXT_RE.test(text)) continue;
    if (CONFIRM_ANCHOR_TEXT_RE.test(text)) {
      return decodeHtmlEntities(href);
    }
  }
  return null;
}

export function looksLikeConfirmEmail(args: {
  fromAddress: string;
  subject: string | null;
  html: string | null;
}): boolean {
  if (!args.html) return false;
  if (findKlaviyoConfirmUrl({ ...args, html: args.html })) return true;
  if (findGenericConfirmAnchor({ ...args, html: args.html })) return true;
  return false;
}

export function extractConfirmUrl(args: {
  fromAddress: string;
  subject: string | null;
  html: string;
}): string | null {
  return (
    findKlaviyoConfirmUrl(args) ?? findGenericConfirmAnchor(args)
  );
}

export async function tryConfirmSubscription(args: {
  fromAddress: string;
  fromDomain: string;
  toAddress: string;
  subject: string | null;
  html: string | null;
}): Promise<ConfirmResult> {
  if (!args.html) return { confirmed: false, reason: "no html body" };
  const url = extractConfirmUrl({
    fromAddress: args.fromAddress,
    subject: args.subject,
    html: args.html,
  });
  if (!url) return { confirmed: false, reason: "not a confirm email" };

  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: { "User-Agent": UA, Accept: "text/html" },
      redirect: "follow",
      signal: ctl.signal,
    });
    if (!res.ok) {
      return { confirmed: false, reason: `confirm GET returned ${res.status}` };
    }
    // Try to flip the matching subscription_jobs row from auto_succeeded
    // (which today means "registered, awaiting opt-in") to manual_done.
    // Match heuristic: same persona inbox + most-recent job whose
    // brand_domain is contained in the from-domain (e.g. confirm email
    // arrives from `marketing.glossier.com`, job exists at
    // `glossier.com`). Fail-soft: an unmatched confirm email is still a
    // success — we did follow the link.
    await markJobConfirmed(args.toAddress, args.fromDomain).catch((err) => {
      console.warn(`[confirm] markJobConfirmed failed: ${err}`);
    });
    return { confirmed: true, url };
  } catch (err) {
    return {
      confirmed: false,
      reason: err instanceof Error ? err.message : String(err),
    };
  } finally {
    clearTimeout(timer);
  }
}

async function markJobConfirmed(
  toAddress: string,
  fromDomain: string
): Promise<void> {
  // Find the most recent matching job for this persona inbox where the
  // job's brandDomain is a substring of fromDomain (catches subdomain
  // shapes like `email.glossier.com` → `glossier.com`).
  const jobs = await db
    .select({
      id: subscriptionJobs.id,
      brandDomain: subscriptionJobs.brandDomain,
      status: subscriptionJobs.status,
    })
    .from(subscriptionJobs)
    .where(eq(subscriptionJobs.inboxAddress, toAddress.toLowerCase()))
    .orderBy(desc(subscriptionJobs.updatedAt));
  const match = jobs.find((j) =>
    fromDomain.toLowerCase().endsWith(j.brandDomain.toLowerCase())
  );
  if (!match) return;
  await db
    .update(subscriptionJobs)
    .set({
      status: "manual_done",
      lastError: "double opt-in confirmed by auto-confirm",
      updatedAt: new Date(),
    })
    .where(eq(subscriptionJobs.id, match.id));
}

