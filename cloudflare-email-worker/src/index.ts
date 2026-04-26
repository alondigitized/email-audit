/**
 * Cloudflare Email Worker — etell-inbound.
 *
 * Bound to the catch-all rule for *@etell.app (configured in Cloudflare's
 * Email Routing dashboard). Every email arriving at the domain triggers
 * `email()` here. The Worker parses the raw email with postal-mime and
 * POSTs the structured payload to the site's /api/email/inbound endpoint.
 *
 * Env vars (set via `wrangler secret put` or in the Cloudflare dashboard):
 *   INBOUND_WEBHOOK_URL    e.g. https://www.etell.app/api/email/inbound
 *   INBOUND_WEBHOOK_SECRET shared with the Vercel deploy's env var of the
 *                          same name. Bearer-format Authorization header.
 *
 * Failure handling:
 *   - 2xx from the site: ack the email (Cloudflare considers it delivered).
 *   - non-2xx: call message.setReject() so Cloudflare retries / bounces.
 *     Avoids silent loss when the site is down.
 */

import PostalMime from "postal-mime";

interface Env {
  INBOUND_WEBHOOK_URL: string;
  INBOUND_WEBHOOK_SECRET: string;
}

export default {
  async email(message: ForwardableEmailMessage, env: Env): Promise<void> {
    let parsed;
    try {
      parsed = await PostalMime.parse(message.raw);
    } catch (err) {
      // If we can't parse the email, fall back to bare metadata so we at
      // least record receipt. The site-side handler will get null html/text.
      console.warn("postal-mime parse failed:", err);
      parsed = { subject: "", html: "", text: "" } as {
        subject?: string;
        html?: string;
        text?: string;
      };
    }

    const payload = {
      to: message.to,
      from: message.from,
      messageId: message.headers.get("message-id"),
      subject: parsed.subject ?? message.headers.get("subject") ?? null,
      html: parsed.html ?? null,
      text: parsed.text ?? null,
      receivedAt: new Date().toISOString(),
    };

    let res: Response;
    try {
      res = await fetch(env.INBOUND_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.INBOUND_WEBHOOK_SECRET}`,
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      message.setReject(`webhook fetch failed: ${msg.slice(0, 200)}`);
      return;
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      message.setReject(
        `webhook returned ${res.status}: ${text.slice(0, 200)}`
      );
      return;
    }
    // 2xx — message accepted by the site. Cloudflare's reception is final.
  },
};
