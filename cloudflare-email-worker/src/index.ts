/**
 * Cloudflare Email Worker — etell-inbound.
 *
 * Bound to the catch-all rule for *@etell.app (configured in Cloudflare's
 * Email Routing dashboard). Every email arriving at the domain triggers
 * `email()` here. The Worker:
 *   1. Reads the raw RFC822 message into memory once.
 *   2. Uploads it to R2 under `email-raw/{slug}/{ts}-{msgIdHash}.eml` so
 *      we can re-derive headers / preheader / attachments later without
 *      waiting for new mail.
 *   3. Parses the buffer with postal-mime to extract structured fields.
 *   4. POSTs the parsed payload (including the R2 key) to /api/email/inbound.
 *
 * Failure handling:
 *   - R2 upload failure: log + continue without rawKey. Don't reject the
 *     email — the audit pipeline runs off the parsed html/text in Postgres,
 *     not the archive.
 *   - 2xx from the site: ack the email.
 *   - non-2xx: call message.setReject() so Cloudflare retries / bounces.
 *     Avoids silent loss when the site is down.
 */

import PostalMime from "postal-mime";

interface Env {
  INBOUND_WEBHOOK_URL: string;
  INBOUND_WEBHOOK_SECRET: string;
  EMAIL_RAW: R2Bucket;
}

// Sanitize a string for use inside an R2 key segment. Keeps lowercase
// alphanumerics + a few safe chars; replaces anything else with '-'.
// Caps length to keep keys reasonable.
function sanitizeKeySegment(s: string, maxLen = 64): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, maxLen);
}

// Short, stable-ish hash for messageId (or anything else) so R2 keys stay
// compact. Not cryptographic — just collision-resistant enough for keying.
async function shortHash(input: string): Promise<string> {
  const enc = new TextEncoder().encode(input);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  const bytes = new Uint8Array(buf);
  let hex = "";
  for (let i = 0; i < 6; i++) {
    hex += bytes[i].toString(16).padStart(2, "0");
  }
  return hex;
}

async function streamToArrayBuffer(stream: ReadableStream): Promise<ArrayBuffer> {
  // The Workers runtime exposes Response which buffers a stream cleanly.
  return new Response(stream).arrayBuffer();
}

export default {
  async email(message: ForwardableEmailMessage, env: Env): Promise<void> {
    // 1. Drain the raw stream once. postal-mime reads from it too, and
    // streams can only be consumed once.
    let rawBuf: ArrayBuffer;
    try {
      rawBuf = await streamToArrayBuffer(message.raw);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      message.setReject(`failed to read raw stream: ${msg.slice(0, 200)}`);
      return;
    }

    // 2. Best-effort R2 archive. Key shape:
    //   email-raw/{slug}/{ISO-with-millis}-{msgIdHash}.eml
    // slug is the local part of message.to (matches /api/email/inbound's
    // routing rule). When messageId is absent we substitute random bytes
    // so concurrent receipts don't collide.
    const slugRaw = message.to.split("@")[0] ?? "unknown";
    const slug = sanitizeKeySegment(slugRaw, 48);
    const ts = new Date().toISOString().replace(/[:.]/g, "-");
    const messageId = message.headers.get("message-id");
    const idTag = messageId
      ? await shortHash(messageId)
      : Math.random().toString(36).slice(2, 14);
    const rawKey = `email-raw/${slug}/${ts}-${idTag}.eml`;

    let archivedKey: string | null = null;
    try {
      await env.EMAIL_RAW.put(rawKey, rawBuf, {
        httpMetadata: {
          contentType: "message/rfc822",
        },
        customMetadata: {
          to: message.to,
          from: message.from,
          // R2 caps each customMetadata value at 2KB; truncate defensively.
          subject: (message.headers.get("subject") ?? "").slice(0, 256),
          messageId: (messageId ?? "").slice(0, 256),
        },
      });
      archivedKey = rawKey;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(`R2 archive failed for ${rawKey}: ${msg.slice(0, 200)}`);
      // Continue without archive — the parsed payload in Postgres still
      // unblocks the audit pipeline.
    }

    // 3. Parse for the structured payload. Pass the buffer (not the
    // already-consumed stream) so postal-mime works.
    let parsed: {
      subject?: string;
      html?: string;
      text?: string;
      from?: { address?: string; name?: string };
    };
    try {
      parsed = await PostalMime.parse(rawBuf);
    } catch (err) {
      console.warn("postal-mime parse failed:", err);
      parsed = { subject: "", html: "", text: "" };
    }

    // Prefer the visible RFC822 From: header (e.g. "Sally Beauty
    // <sallybeauty@em.sallybeauty.com>") over Cloudflare's `message.from`,
    // which exposes the SMTP envelope-from / Return-Path. ESPs use VERP-
    // style envelope-froms (`bounce-<encoded-id>@bounce.<domain>`) for
    // bounce attribution; surfacing those in the audit UI is misleading
    // because users see "bounce.em.sallybeauty.com" instead of the brand
    // they actually received mail from. Fall back to envelope-from if the
    // visible From is somehow missing.
    const visibleFrom = parsed.from?.name
      ? `"${parsed.from.name}" <${parsed.from.address ?? message.from}>`
      : parsed.from?.address ?? message.from;

    const payload = {
      to: message.to,
      from: visibleFrom,
      envelopeFrom: message.from,
      messageId,
      subject: parsed.subject ?? message.headers.get("subject") ?? null,
      html: parsed.html ?? null,
      text: parsed.text ?? null,
      rawKey: archivedKey,
      receivedAt: new Date().toISOString(),
    };

    // 4. POST to the site.
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
    const body = await res.text().catch(() => "");
    console.log(
      `inbound: to=${message.to} from=${message.from} subj=${(payload.subject ?? "").slice(0, 60)} raw=${archivedKey ?? "skipped"} → ${res.status} ${body.slice(0, 80)}`
    );
  },
};
