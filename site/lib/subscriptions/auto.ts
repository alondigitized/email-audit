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

  const klaviyo = detectKlaviyoListId(html);
  if (klaviyo) {
    const ok = await postKlaviyo(klaviyo, inboxAddress);
    if (ok)
      return {
        outcome: "auto_succeeded",
        error: undefined,
      };
    return {
      outcome: "manual_pending",
      error: `klaviyo POST failed for list ${klaviyo}`,
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

// Klaviyo embeds either an iframe or a `<script src="...klaviyo.com/...">` tag
// that includes the company's account ID. The list ID is harder to detect from
// pure HTML; many sites POST to /klaviyo/api/v3/subscribe with the public
// company_id. For v1 we only attempt the simple Klaviyo legacy ajax form
// shape (`a` parameter) when we can read the company_id off the page.
function detectKlaviyoListId(html: string): string | null {
  const m = html.match(/static\.klaviyo\.com\/onsite\/js\/([A-Za-z0-9]+)/);
  return m ? m[1] : null;
}

async function postKlaviyo(
  companyId: string,
  email: string
): Promise<boolean> {
  // Klaviyo's public legacy ajax endpoint for newsletter subscribe. Many
  // brands route their generic "Subscribe to our newsletter" form here.
  // If the brand uses a custom list, this won't subscribe to it; the welcome
  // email check in email-monitor flips the row even for that case (since most
  // brands send *something* upon any signup).
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
        g: "",
      }).toString(),
    });
    if (!res.ok) return false;
    const text = await res.text();
    // Klaviyo returns {"success":true,...}. Cheap match avoids the JSON parse
    // overhead and accepts pretty-printed responses.
    return /"success"\s*:\s*true/i.test(text);
  } catch {
    return false;
  }
}
