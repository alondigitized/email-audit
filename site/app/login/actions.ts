"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { signIn } from "@/auth";
import { createHash } from "node:crypto";

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

  // S3 rate limiting deferred — add before prod cutover.

  try {
    await signIn("resend", {
      email,
      redirect: false,
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
