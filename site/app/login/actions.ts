"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { and, eq, gte, sql } from "drizzle-orm";
import { signIn } from "@/auth";
import { createHash } from "node:crypto";
import { db, signInRateLimit } from "@/lib/db/client";

// S10: strict email validation.
const EmailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email()
  .max(254);

// S2 (no enumeration): always return the same shape regardless of outcome.
// Server-side logs (S13) record hashed email + ip + outcome for observability.
export type SigninResult = { ok: true };

// Rate-limit caps, 10-min rolling window.
//   - Per email:  defeat "email bomb one specific allowlisted user" attacks
//   - Per IP:     defeat "spray across many emails to burn Resend quota"
// Counts track every attempt regardless of outcome — failed/invalid/bounced
// all burn the budget, so attackers can't cheaply probe for valid emails.
const RATE_WINDOW_MINUTES = 10;
const MAX_PER_EMAIL = 3;
const MAX_PER_IP = 10;

async function checkAndRecordRateLimit(
  emailHash: string,
  ip: string
): Promise<{ limited: false } | { limited: true; reason: string }> {
  const cutoff = new Date(Date.now() - RATE_WINDOW_MINUTES * 60 * 1000);

  const [emailCount, ipCount] = await Promise.all([
    db
      .select({ n: sql<number>`count(*)::int` })
      .from(signInRateLimit)
      .where(
        and(
          eq(signInRateLimit.keyType, "email"),
          eq(signInRateLimit.keyValue, emailHash),
          gte(signInRateLimit.ts, cutoff)
        )
      ),
    db
      .select({ n: sql<number>`count(*)::int` })
      .from(signInRateLimit)
      .where(
        and(
          eq(signInRateLimit.keyType, "ip"),
          eq(signInRateLimit.keyValue, ip),
          gte(signInRateLimit.ts, cutoff)
        )
      ),
  ]);

  const n_email = Number(emailCount[0]?.n ?? 0);
  const n_ip = Number(ipCount[0]?.n ?? 0);

  if (n_email >= MAX_PER_EMAIL) return { limited: true, reason: "email" };
  if (n_ip >= MAX_PER_IP) return { limited: true, reason: "ip" };

  // Record both keys before the send. Insert-then-check would race; this
  // order means a burst might briefly exceed the cap by 1-2 requests, which
  // is acceptable for a 10-min window.
  await db.insert(signInRateLimit).values([
    { keyType: "email", keyValue: emailHash },
    { keyType: "ip", keyValue: ip },
  ]);

  return { limited: false };
}

export async function requestMagicLink(
  _prev: unknown,
  formData: FormData
): Promise<SigninResult> {
  const raw = formData.get("email");
  const parsed = EmailSchema.safeParse(raw);

  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    hdrs.get("x-real-ip") ??
    "unknown";

  if (!parsed.success) {
    logSigninAttempt({ emailHash: null, ip, outcome: "invalid_email" });
    return { ok: true };
  }
  const email = parsed.data;
  const emailHash = sha256(email);

  // Rate limit: never leak the outcome (same { ok: true } return). The
  // ledger still records hashed email + ip so the log-view can surface
  // abuse patterns without storing PII.
  const rate = await checkAndRecordRateLimit(emailHash, ip);
  if (rate.limited) {
    logSigninAttempt({
      emailHash,
      ip,
      outcome: `rate_limited:${rate.reason}`,
    });
    return { ok: true };
  }

  try {
    await signIn("resend", {
      email,
      redirect: false,
      redirectTo: "/",
    });
    logSigninAttempt({ emailHash, ip, outcome: "sent" });
  } catch (err) {
    // Auth.js throws "AccessDenied" when signIn callback returns false
    // (S2 allowlist reject). Swallow — user sees the same "check your email".
    const msg = err instanceof Error ? err.message : String(err);
    logSigninAttempt({
      emailHash,
      ip,
      outcome: msg.includes("AccessDenied") ? "not_allowlisted" : "error",
    });
  }

  return { ok: true };
}

function sha256(v: string): string {
  return createHash("sha256").update(v).digest("hex");
}

// S13: structured log, no PII.
function logSigninAttempt(args: {
  emailHash: string | null;
  ip: string;
  outcome: string;
}) {
  console.log(
    JSON.stringify({
      evt: "signin_attempt",
      ts: Date.now(),
      emailHash: args.emailHash,
      ip: args.ip,
      outcome: args.outcome,
    })
  );
}
