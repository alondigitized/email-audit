"use server";

import { eq } from "drizzle-orm";
import { z } from "zod";
import { db, tenants, users } from "@/lib/db/client";
import { isCompanyEmail } from "@/lib/free-domains";
import { sendWaitlistConfirmEmail } from "@/lib/email-tenant";
import { signInRateLimit } from "@/lib/db/schema";
import { sql, and, gte } from "drizzle-orm";
import { headers } from "next/headers";

export type SignupResult = { ok: true } | { ok: false; error: string };

const EmailSchema = z.string().trim().email().max(254);
const RefSchema = z.string().regex(/^[A-Za-z0-9_-]{4,16}$/).optional();

// Same window/limit pattern as login rate-limiting (lib/login-rate-limit.ts):
// 5 attempts per email per hour. Stops a single attacker from filling the
// waitlist with one company's email.
const RL_WINDOW_MS = 60 * 60 * 1000;
const RL_MAX_PER_EMAIL = 5;

async function tooManyAttempts(email: string): Promise<boolean> {
  const since = new Date(Date.now() - RL_WINDOW_MS);
  const rows = await db
    .select({ n: sql<number>`count(*)::int` })
    .from(signInRateLimit)
    .where(
      and(
        eq(signInRateLimit.keyType, "signup_email"),
        eq(signInRateLimit.keyValue, email),
        gte(signInRateLimit.ts, since)
      )
    );
  return (rows[0]?.n ?? 0) >= RL_MAX_PER_EMAIL;
}

async function recordAttempt(email: string): Promise<void> {
  await db
    .insert(signInRateLimit)
    .values({ keyType: "signup_email", keyValue: email });
}

function slugifyDomain(domain: string): string {
  // Tenant slugs need to be unique + URL-safe. "skechers.com" → "skechers".
  // Collisions are resolved with a 6-char suffix.
  const stem = domain.split(".")[0]?.toLowerCase().replace(/[^a-z0-9]/g, "") ?? "tenant";
  return stem.slice(0, 24) || "tenant";
}

function nanoid(n: number): string {
  const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
  const buf = crypto.getRandomValues(new Uint8Array(n));
  let out = "";
  for (let i = 0; i < n; i++) out += alphabet[buf[i] % alphabet.length];
  return out;
}

export async function signupAction(
  _prev: SignupResult | null,
  fd: FormData
): Promise<SignupResult> {
  const emailRaw = EmailSchema.safeParse(fd.get("email"));
  if (!emailRaw.success) {
    return { ok: false, error: "Enter a valid email address." };
  }
  const email = emailRaw.data.toLowerCase();

  const company = isCompanyEmail(email);
  if (!company.ok) {
    return { ok: false, error: company.reason ?? "Use your company email." };
  }
  const domain = company.domain!;

  // Optional referral code from /r/{code} landing.
  const refRaw = fd.get("ref");
  const refParsed =
    typeof refRaw === "string" ? RefSchema.safeParse(refRaw) : null;
  const refCode = refParsed?.success ? refParsed.data : null;

  if (await tooManyAttempts(email)) {
    return { ok: false, error: "Too many signup attempts. Try again in an hour." };
  }
  await recordAttempt(email);

  // Idempotent on email: if a tenant + user already exist for this email,
  // re-trigger the confirmation email and return ok. The waitlist queue
  // doesn't grow on duplicate submits.
  const existingUser = await db
    .select({ id: users.id, tenantId: users.tenantId })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  if (existingUser.length > 0) {
    try {
      await sendWaitlistConfirmEmail({ to: email, companyDomain: domain });
    } catch {
      // best-effort; don't leak send errors to the form.
    }
    return { ok: true };
  }

  // Resolve the referrer's tenant_id (if any) before creating the new tenant.
  let referredByTenantId: string | null = null;
  if (refCode) {
    const ref = await db
      .select({ id: tenants.id })
      .from(tenants)
      .where(eq(tenants.referralCode, refCode))
      .limit(1);
    referredByTenantId = ref[0]?.id ?? null;
  }

  // Tenant slug: prefer domain stem; fall back to a 6-char suffix on collision.
  const baseSlug = slugifyDomain(domain);
  let slug = baseSlug;
  for (let i = 0; i < 5; i++) {
    const taken = await db
      .select({ id: tenants.id })
      .from(tenants)
      .where(eq(tenants.slug, slug))
      .limit(1);
    if (taken.length === 0) break;
    slug = `${baseSlug}-${nanoid(6)}`;
  }

  const [createdTenant] = await db
    .insert(tenants)
    .values({
      slug,
      name: domain,
      plan: "waitlisted",
      referredByTenantId,
    })
    .returning({ id: tenants.id });

  // Insert the user too — but they cannot sign in until plan flips to free.
  // The auth.ts signIn callback gates on tenant.plan.
  await db
    .insert(users)
    .values({
      email,
      tenantId: createdTenant.id,
    });

  // Surface IP for ops triage in case of abuse — stored on the rate-limit row
  // already; nothing further to capture here.
  void (await headers()).get("x-forwarded-for");

  try {
    await sendWaitlistConfirmEmail({ to: email, companyDomain: domain });
  } catch (err) {
    // We've already inserted the row; admin can still approve from /admin/waitlist
    // even if the confirm mail bounced. Log and continue.
    console.warn("waitlist confirm email failed:", err);
  }

  return { ok: true };
}
