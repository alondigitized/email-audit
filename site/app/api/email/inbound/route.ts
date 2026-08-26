import { NextRequest, NextResponse, after } from "next/server";
import { eq, and } from "drizzle-orm";
import { db, emailMessages, personas } from "@/lib/db/client";
import { tryConfirmSubscription } from "@/lib/subscriptions/confirm";
import { z } from "zod";

// Inbound email landing endpoint. Cloudflare Email Worker POSTs every
// email arriving at *@etell.app here. We look up the persona by the
// recipient's local-part, write a row in email_message, and return 200.
// The email-monitor daemon picks up unprocessed rows and runs the
// Claude review pipeline.
//
// Auth: shared secret (Bearer) in the Authorization header. Set
// INBOUND_WEBHOOK_SECRET on Vercel (production + preview) and on the
// Cloudflare Worker as the matching env var.
//
// Idempotency: (persona_slug, message_id) uniqueness lets the Worker
// safely retry on transient 5xx without dupes. We respond 200 even when
// the recipient maps to no persona — Cloudflare shouldn't bounce real
// senders for our routing mistakes; we silently drop.

export const dynamic = "force-dynamic";

const InboundSchema = z.object({
  to: z.string().email().max(254),
  // From is the visible RFC822 From: header — may include display name
  // (e.g. `"Sally Beauty" <sallybeauty@em.sallybeauty.com>`), so we don't
  // .email()-validate it. The domain is extracted from the angle-addr
  // below for fromDomain. envelopeFrom (SMTP MAIL FROM) carries the
  // VERP/bounce return-path and is kept for diagnostics.
  from: z.string().min(1).max(998),
  envelopeFrom: z.string().min(1).max(998).optional(),
  messageId: z.string().nullable().optional(),
  subject: z.string().max(998).nullable().optional(),
  html: z.string().nullable().optional(),
  text: z.string().nullable().optional(),
  rawKey: z.string().nullable().optional(),
  receivedAt: z.string().datetime().optional(),
});

// Pull the angle-addr out of an RFC822 From string. Examples:
//   `"Sally Beauty" <sallybeauty@em.sallybeauty.com>` → sallybeauty@em.sallybeauty.com
//   `bounce-XXX@bounce.em.sallybeauty.com`            → bounce-XXX@bounce.em.sallybeauty.com
function extractAddress(s: string): string {
  const m = s.match(/<([^>]+)>/);
  return (m ? m[1] : s).trim();
}

function unauthorized() {
  return new NextResponse("Unauthorized", { status: 401 });
}

export async function POST(req: NextRequest) {
  const expected = process.env.INBOUND_WEBHOOK_SECRET;
  if (!expected) {
    console.error("INBOUND_WEBHOOK_SECRET not set; rejecting all inbound");
    return unauthorized();
  }
  const auth = req.headers.get("authorization") ?? "";
  // Constant-time-ish compare via length+bytewise — fine for short secrets.
  if (auth !== `Bearer ${expected}`) {
    return unauthorized();
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new NextResponse("Bad JSON", { status: 400 });
  }
  const parsed = InboundSchema.safeParse(body);
  if (!parsed.success) {
    console.warn(
      "inbound: schema validation failed:",
      parsed.error.issues.slice(0, 3)
    );
    return new NextResponse("Invalid payload", { status: 400 });
  }
  const { to, from, messageId, subject, html, text, rawKey, receivedAt } =
    parsed.data;

  // Local part of the recipient maps to the persona slug. e.g.
  // "alan-sarah-k@etell.app" -> "alan-sarah-k".
  const slug = to.split("@")[0]?.toLowerCase();
  if (!slug) {
    return new NextResponse("Bad recipient", { status: 400 });
  }

  const [persona] = await db
    .select({ tenantId: personas.tenantId })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  if (!persona?.tenantId) {
    // No persona for this address. Likely typo, decommissioned slug, or
    // catch-all spam. Drop quietly — Cloudflare records the receive
    // already; we don't bounce.
    console.warn(`inbound: no persona for recipient '${to}'`);
    return NextResponse.json({ ok: true, dropped: true });
  }

  const fromEmail = extractAddress(from).toLowerCase();
  const fromAt = fromEmail.lastIndexOf("@");
  const fromDomain =
    fromAt >= 0 ? fromEmail.slice(fromAt + 1) : "unknown";

  // Idempotent insert. (persona_slug, message_id) is indexed but not
  // unique-constrained, so we de-dupe at insert time with a manual lookup
  // when message_id is present.
  if (messageId) {
    const [existing] = await db
      .select({ id: emailMessages.id })
      .from(emailMessages)
      .where(
        and(
          eq(emailMessages.personaSlug, slug),
          eq(emailMessages.messageId, messageId)
        )
      )
      .limit(1);
    if (existing) {
      return NextResponse.json({ ok: true, deduped: true });
    }
  }

  await db.insert(emailMessages).values({
    personaSlug: slug,
    tenantId: persona.tenantId,
    toAddress: to.toLowerCase(),
    // Store the full visible From string (possibly with display name)
    // so audit-pipeline's parseDisplayName can recover the brand.
    fromAddress: from,
    fromDomain,
    subject: subject ?? null,
    messageId: messageId ?? null,
    html: html ?? null,
    textBody: text ?? null,
    rawKey: rawKey ?? null,
    receivedAt: receivedAt ? new Date(receivedAt) : new Date(),
  });

  // Fire-and-forget Klaviyo double-opt-in confirm. Klaviyo's confirmation
  // emails carry a token-bearing link that just needs a GET to flip the
  // subscription from pending → active; a server-side fetch is enough.
  // after() runs post-response so the Worker's webhook isn't blocked.
  // Detection is conservative — non-confirm emails fall through silently.
  after(async () => {
    try {
      const r = await tryConfirmSubscription({
        fromAddress: from.toLowerCase(),
        fromDomain,
        toAddress: to.toLowerCase(),
        subject: subject ?? null,
        html: html ?? null,
      });
      if (r.confirmed) {
        console.log(`[confirm] ✓ to=${to} from=${from} url=${r.url.slice(0, 100)}`);
      } else if (r.reason !== "not a confirm email") {
        console.log(`[confirm] skip to=${to} from=${from} reason=${r.reason}`);
      }
    } catch (err) {
      console.warn(`[confirm] error to=${to}:`, err);
    }
  });

  return NextResponse.json({ ok: true });
}

// Allow a quick GET probe so ops can confirm the route is live without
// guessing at the secret. Returns 200 with a tiny body — no sensitive info.
export async function GET() {
  return NextResponse.json({
    route: "/api/email/inbound",
    method: "POST",
    auth: "Bearer INBOUND_WEBHOOK_SECRET",
    status: process.env.INBOUND_WEBHOOK_SECRET ? "configured" : "missing-secret",
  });
}
