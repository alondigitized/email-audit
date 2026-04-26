import { eq } from "drizzle-orm";
import { db, subscriptionJobs } from "@/lib/db/client";

// Best-effort auto-subscribe to a brand's email newsletter. Most retailers
// hide their signup form behind Klaviyo or Bloomreach; we look for the
// embedded form action URL on the homepage and POST against it. Failures
// flip the row to 'manual_pending' so the admin queue can take over.
//
// This is a hot path for waste-of-time stealth engineering — keep it dumb,
// keep it fast, keep failures cheap. Do not add Playwright. Do not add proxy
// rotation. The manual queue is the path.

const FETCH_TIMEOUT_MS = 5000;
const UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 " +
  "(KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";

type Outcome = "auto_succeeded" | "manual_pending" | "failed";

export async function tryAutoSubscribeJob(jobId: string): Promise<Outcome> {
  const [job] = await db
    .select()
    .from(subscriptionJobs)
    .where(eq(subscriptionJobs.id, jobId))
    .limit(1);
  if (!job) return "failed";
  const result = await tryAutoSubscribe(job.brandDomain, job.inboxAddress);
  await db
    .update(subscriptionJobs)
    .set({
      status: result.outcome,
      attempts: (job.attempts ?? 0) + 1,
      lastError: result.error ?? null,
      updatedAt: new Date(),
    })
    .where(eq(subscriptionJobs.id, jobId));
  return result.outcome;
}

export async function tryAutoSubscribe(
  brandDomain: string,
  inboxAddress: string
): Promise<{ outcome: Outcome; error?: string }> {
  const homepage = `https://${brandDomain}/`;
  let html: string;
  try {
    html = await fetchHomepage(homepage);
  } catch (err) {
    return {
      outcome: "manual_pending",
      error: `homepage fetch: ${err instanceof Error ? err.message : String(err)}`.slice(0, 200),
    };
  }

  const companyId = detectKlaviyoCompanyId(html);
  if (companyId) {
    const listId = detectKlaviyoListId(html);
    if (!listId) {
      // Klaviyo's legacy ajax endpoint requires a real list ID — empty
      // 'g' returns "List does not exist." If a brand JS-renders their
      // form, the list ID isn't reachable from a curl and we can't
      // subscribe without it. Fall through to manual.
      return {
        outcome: "manual_pending",
        error: `klaviyo company ${companyId} found but no list_id in HTML`,
      };
    }
    const ok = await postKlaviyo(companyId, listId, inboxAddress);
    if (ok)
      return {
        outcome: "auto_succeeded",
        error: undefined,
      };
    return {
      outcome: "manual_pending",
      error: `klaviyo POST failed (company ${companyId} list ${listId})`,
    };
  }

  // No recognized form — fall through to manual.
  return { outcome: "manual_pending", error: "no recognized form on homepage" };
}

async function fetchHomepage(url: string): Promise<string> {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), FETCH_TIMEOUT_MS);
  try {
    const r = await fetch(url, {
      method: "GET",
      headers: { "User-Agent": UA, Accept: "text/html" },
      signal: ctl.signal,
      redirect: "follow",
    });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.text();
  } finally {
    clearTimeout(timer);
  }
}

// Klaviyo embeds a `<script src="...klaviyo.com/onsite/js/<companyId>/klaviyo.js">`
// tag (any klaviyo.com subdomain — `static.`, `www.`, or just `klaviyo.com`).
// The hardcoded `klaviyo.js` tail distinguishes the real script src from
// Shopify-block references like `.../onsite/js/klaviyo` (literal token, not
// a company id).
function detectKlaviyoCompanyId(html: string): string | null {
  const m = html.match(/klaviyo\.com\/onsite\/js\/([A-Za-z0-9]+)\/klaviyo\.js/);
  return m ? m[1] : null;
}

// Klaviyo list IDs are 6-char alphanumeric, surfaced in HTML when a brand
// inlines their newsletter list reference for popups / embedded forms.
// Common shapes (in priority order):
//   data-list="V9TWRD"  data-list-id="V9TWRD"  list_id: 'V9TWRD'
//   klaviyoNewsletterId = 'V9TWRD'   klaviyoListId='V9TWRD'
//   "g":"V9TWRD"        ?g=V9TWRD
// Returns the FIRST match — picking the wrong list (e.g. an SMS-only list)
// usually still produces a "subscribe accepted" response from Klaviyo, and
// the welcome-email check downstream fills in any gap.
function detectKlaviyoListId(html: string): string | null {
  const patterns = [
    /klaviyoNewsletterId\s*[=:]\s*['"]([A-Za-z0-9]{4,8})['"]/,
    /klaviyoListId\s*[=:]\s*['"]([A-Za-z0-9]{4,8})['"]/,
    /["']?list_?id["']?\s*[:=]\s*['"]([A-Za-z0-9]{4,8})['"]/,
    /data-list(?:-id)?\s*=\s*["']([A-Za-z0-9]{4,8})["']/,
    /[?&]g=([A-Za-z0-9]{4,8})\b/,
    /["']g["']\s*:\s*["']([A-Za-z0-9]{4,8})["']/,
  ];
  for (const p of patterns) {
    const m = html.match(p);
    if (m) return m[1];
  }
  return null;
}

async function postKlaviyo(
  companyId: string,
  listId: string,
  email: string
): Promise<boolean> {
  // Klaviyo's public legacy ajax endpoint. `a` = company, `g` = list. If
  // the brand has double-opt-in on the list, response is success:true with
  // is_subscribed:false (user receives a confirm email at the inbox we
  // provided; clicking it completes the subscribe). For our purposes any
  // success:true counts as auto_succeeded — the confirmation email lands
  // in the persona's Cloudflare-routed inbox just like a welcome email.
  try {
    const res = await fetch("https://manage.kmail-lists.com/ajax/subscriptions/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        "User-Agent": UA,
      },
      body: new URLSearchParams({
        a: companyId,
        email,
        g: listId,
      }).toString(),
    });
    if (!res.ok) return false;
    const text = await res.text();
    return /"success"\s*:\s*true/i.test(text);
  } catch {
    return false;
  }
}
