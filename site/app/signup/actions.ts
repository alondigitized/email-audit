"use server";

import { eq } from "drizzle-orm";
import { z } from "zod";
import { db, tenants, users } from "@/lib/db/client";
import { isCompanyEmail, extractTenantDomain } from "@/lib/free-domains";
import { sendWaitlistConfirmEmail } from "@/lib/email-tenant";
import { signInRateLimit } from "@/lib/db/schema";
import { sql, and, gte } from "drizzle-orm";
import { redirect } from "next/navigation";
import {
  approveWaitlistedTenant,
  creditReferrer,
  createSessionForUser,
  nanoid,
  addDays,
  FREE_DAYS,
} from "@/lib/tenant-approval";

// Master kill-switch for waitlist gating. Default OFF (every signup is
// auto-approved). Set WAITLIST_ENABLED=true on Vercel to re-enable the
// admin-approval queue. The /admin/waitlist UI still works either way —
// it just never sees rows when this is off.
const WAITLIST_ENABLED = process.env.WAITLIST_ENABLED === "true";

export type SignupResult = { ok: true } | { ok: false; error: string };

const EmailSchema = z.string().trim().email().max(254);
const RefSchema = z.string().regex(/^[A-Za-z0-9_-]{4,16}$/).optional();

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
  // Tenant slug is human-readable; uniqueness is enforced separately by
  // the email_domain column. "skechers.com" → "skechers".
  const stem = domain.split(".")[0]?.toLowerCase().replace(/[^a-z0-9]/g, "") ?? "tenant";
  return stem.slice(0, 24) || "tenant";
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
  const domain = extractTenantDomain(email);
  if (!domain) {
    return { ok: false, error: "Could not parse a domain from that email." };
  }

  const refRaw = fd.get("ref");
  const refParsed =
    typeof refRaw === "string" ? RefSchema.safeParse(refRaw) : null;
  const refCode = refParsed?.success ? refParsed.data : null;

  if (await tooManyAttempts(email)) {
    return {
      ok: false,
      error: "Too many signup attempts. Try again in an hour.",
    };
  }
  await recordAttempt(email);

  // Idempotent on email: re-submit just re-triggers the appropriate email
  // for whichever state their tenant is currently in.
  const existingUser = await db
    .select({ id: users.id, tenantId: users.tenantId })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  if (existingUser.length > 0) {
    try {
      await sendWaitlistConfirmEmail({ to: email, companyDomain: domain });
    } catch {
      // best-effort
    }
    return { ok: true };
  }

  // Resolve the referrer's tenant_id (if any).
  let referredByTenantId: string | null = null;
  if (refCode) {
    const ref = await db
      .select({ id: tenants.id })
      .from(tenants)
      .where(eq(tenants.referralCode, refCode))
      .limit(1);
    referredByTenantId = ref[0]?.id ?? null;
  }

  // Look up an existing tenant for this domain. If found, attach the user
  // to it; otherwise create a fresh waitlisted tenant.
  let tenantRow = (
    await db
      .select({
        id: tenants.id,
        plan: tenants.plan,
        referredByTenantId: tenants.referredByTenantId,
      })
      .from(tenants)
      .where(eq(tenants.emailDomain, domain))
      .limit(1)
  )[0];

  if (tenantRow?.plan === "banned") {
    // Don't leak that the domain is banned. Return the same generic
    // success that any other signup would. No user row inserted.
    return { ok: true };
  }

  let tenantId: string;
  let tenantState: "fresh" | "existing-waitlisted" | "auto-approve";

  // Plan to stamp on a freshly-created tenant. With waitlist disabled
  // (default), every new tenant is born free with full tier dates so the
  // signing-in user gets a working magic link immediately.
  const initialPlan: "waitlisted" | "free" = WAITLIST_ENABLED ? "waitlisted" : "free";
  const now = new Date();
  const initialTierStart = WAITLIST_ENABLED ? null : now;
  const initialTierExpires = WAITLIST_ENABLED ? null : addDays(now, FREE_DAYS);
  const initialReferralCode = WAITLIST_ENABLED ? null : nanoid(8);

  if (!tenantRow) {
    // First signup from this domain — create the tenant.
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
    try {
      const [created] = await db
        .insert(tenants)
        .values({
          slug,
          name: domain,
          emailDomain: domain,
          plan: initialPlan,
          tierStartedAt: initialTierStart,
          tierExpiresAt: initialTierExpires,
          referralCode: initialReferralCode,
          referredByTenantId,
        })
        .returning({ id: tenants.id });
      tenantId = created.id;
      tenantState = WAITLIST_ENABLED ? "fresh" : "auto-approve";
    } catch {
      // Race: another concurrent signup just created the tenant. Re-fetch.
      const [refetched] = await db
        .select({ id: tenants.id, plan: tenants.plan })
        .from(tenants)
        .where(eq(tenants.emailDomain, domain))
        .limit(1);
      if (!refetched) {
        return {
          ok: false,
          error: "Could not register tenant; please try again.",
        };
      }
      tenantId = refetched.id;
      tenantRow = {
        id: refetched.id,
        plan: refetched.plan,
        referredByTenantId: null,
      };
      tenantState =
        tenantRow.plan === "waitlisted" ? "existing-waitlisted" : "auto-approve";
    }
  } else if (tenantRow.plan === "waitlisted") {
    tenantId = tenantRow.id;
    if (!WAITLIST_ENABLED) {
      // Legacy waitlisted tenant from before the flag flip — auto-approve
      // it now so this user (and any prior waitlisted members) get magic
      // links immediately.
      try {
        await approveWaitlistedTenant(tenantId);
      } catch (err) {
        console.warn("auto-approve of legacy waitlisted tenant failed:", err);
      }
      tenantState = "auto-approve";
    } else {
      tenantState = "existing-waitlisted";
    }
  } else {
    // 'free' or 'pro' — already approved tenant. Auto-approve path.
    tenantId = tenantRow.id;
    tenantState = "auto-approve";
  }

  // Insert the user attached to the tenant. (auth.ts signIn callback gates
  // on tenant.plan, so users on a waitlisted tenant simply can't request a
  // magic link until the tenant is approved.)
  const [insertedUser] = await db
    .insert(users)
    .values({ email, tenantId })
    .returning({ id: users.id });

  if (tenantState === "fresh" || tenantState === "existing-waitlisted") {
    // Waitlist mode is on AND this user is queueing. Send the confirm email
    // and stop here — they'll get a magic link when admin approves the
    // tenant. Don't auto-create a session; their plan is 'waitlisted' and
    // dashboard access is gated.
    try {
      await sendWaitlistConfirmEmail({ to: email, companyDomain: domain });
    } catch (err) {
      console.warn("waitlist confirm email failed:", err);
    }
    return { ok: true };
  }

  // tenantState === "auto-approve" — tenant is on free/pro. Skip the
  // magic-link round-trip entirely: create a session row + cookie now,
  // then redirect to /onboarding so the user lands on the wizard
  // immediately.
  await createSessionForUser(insertedUser.id);

  // Apply referral credit (cross-domain or same-domain). Best-effort.
  if (referredByTenantId) {
    try {
      await creditReferrer(referredByTenantId, email);
    } catch (err) {
      console.warn("creditReferrer failed:", err);
    }
  }

  // Use Next.js redirect; this throws a redirect signal the client
  // follows. The form's success state is bypassed.
  redirect("/onboarding");
}
