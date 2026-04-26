// Shared mutation helpers for tenant approval + referral credit.
//
// Two paths land here:
//   1. /admin/waitlist → approveTenantAction → approveWaitlistedTenant().
//      First user from a previously-unknown email domain. Admin reviews
//      and clicks Approve; tenant flips waitlisted → free.
//   2. /signup → signupAction (auto-approve branch) → approveWaitlistedTenant
//      called inline. Subsequent user at an existing free/pro tenant; their
//      tenant is already past the gate, but we still flip them through the
//      same code so the email + magic-link UX is identical.
//
// Both paths funnel referral credit through creditReferrer() so a referrer
// gets +7d (capped at 28d, max 2 credits) regardless of which path approved
// the referee.

import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { db, tenants, users, sessions } from "./db/client";
import {
  sendWaitlistApprovedEmail,
  sendReferralCreditEmail,
} from "./email-tenant";

export const FREE_DAYS = 14;
export const REFERRAL_DAYS = 7;
export const MAX_TIER_DAYS = 28;
export const MAX_REFERRALS_CREDITED = 2;

export function nanoid(n: number): string {
  const alphabet =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
  const buf = crypto.getRandomValues(new Uint8Array(n));
  let out = "";
  for (let i = 0; i < n; i++) out += alphabet[buf[i] % alphabet.length];
  return out;
}

export function addDays(d: Date, days: number): Date {
  const next = new Date(d);
  next.setDate(next.getDate() + days);
  return next;
}

function loginUrl(): string {
  const base =
    process.env.NEXT_PUBLIC_APP_URL ??
    process.env.AUTH_URL ??
    "https://etell.app";
  return `${base.replace(/\/$/, "")}/login`;
}

// Creates a database-backed Auth.js session for a user and writes the
// matching cookie. Bypasses the magic-link round-trip — used by the
// signup auto-sign-in path so prospects land on the wizard immediately.
//
// Cookie name + shape mirror Auth.js's DrizzleAdapter session setup
// (sessionToken PK, userId FK, expires). On HTTPS the cookie name picks
// up the __Secure- prefix which Auth.js's auth() helper requires; on
// http localhost dev it's plain "authjs.session-token".
//
// NOTE: this skips email verification — anyone who can post to /signup
// can claim a session for any company email. With WAITLIST_ENABLED=false
// that's already the security posture (no admin gate either). When
// re-enabling waitlisting later, also gate this helper on plan != 'waitlisted'.
const SESSION_DAYS = 30;

export async function createSessionForUser(userId: string): Promise<string> {
  const sessionToken = nanoid(48); // 48 alphabet chars = ~285 bits entropy
  const expires = addDays(new Date(), SESSION_DAYS);

  await db.insert(sessions).values({ sessionToken, userId, expires });

  // Cookie-setting requires a Next.js request context. CLI scripts that
  // exercise this helper for DB-state testing (scripts/test-signup-action.ts)
  // call it without one — swallow the error so the session row still gets
  // created and the script can verify it.
  try {
    const useSecure = process.env.NODE_ENV === "production";
    const cookieName = useSecure
      ? "__Secure-authjs.session-token"
      : "authjs.session-token";
    const c = await cookies();
    c.set(cookieName, sessionToken, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      secure: useSecure,
      expires,
    });
  } catch {
    // Outside a request context — the session row is created either way,
    // a real HTTP signupAction call will set the cookie correctly.
  }

  return sessionToken;
}

// Flip a waitlisted tenant to free + stamp tier dates + mint referral code +
// email every user attached to the tenant. Idempotent on already-approved
// tenants — returns { alreadyApproved: true } without re-emailing.
//
// Emails ALL users at the tenant (not just one) so a slow burst of signups
// before approval still gets every member their magic-link landing page.
export async function approveWaitlistedTenant(
  tenantId: string
): Promise<{
  approved: boolean;
  alreadyApproved?: boolean;
  emailedCount?: number;
  refereeEmail?: string;
}> {
  const [t] = await db
    .select({
      id: tenants.id,
      plan: tenants.plan,
      referredByTenantId: tenants.referredByTenantId,
    })
    .from(tenants)
    .where(eq(tenants.id, tenantId))
    .limit(1);
  if (!t) throw new Error("Tenant not found");
  if (t.plan === "banned") {
    return { approved: false };
  }
  if (t.plan !== "waitlisted") {
    return { approved: false, alreadyApproved: true };
  }

  const now = new Date();
  await db
    .update(tenants)
    .set({
      plan: "free",
      tierStartedAt: now,
      tierExpiresAt: addDays(now, FREE_DAYS),
      referralCode: nanoid(8),
    })
    .where(eq(tenants.id, tenantId));

  const memberRows = await db
    .select({ email: users.email })
    .from(users)
    .where(eq(users.tenantId, tenantId));

  let emailedCount = 0;
  for (const m of memberRows) {
    try {
      await sendWaitlistApprovedEmail({
        to: m.email,
        loginUrl: loginUrl(),
        daysFree: FREE_DAYS,
      });
      emailedCount++;
    } catch (err) {
      console.warn("approveWaitlistedTenant: email failed for", m.email, err);
    }
  }

  // Apply referral credit (best-effort).
  if (t.referredByTenantId) {
    const refereeEmail = memberRows[0]?.email ?? "";
    try {
      await creditReferrer(t.referredByTenantId, refereeEmail);
    } catch (err) {
      console.warn("creditReferrer failed:", err);
    }
  }

  return { approved: true, emailedCount };
}

// Apply referral credit to the referrer's tenant. Caps:
//   - referrer.plan must be 'free' (don't extend pro/admin tenants)
//   - referrer.referralsMade < MAX_REFERRALS_CREDITED
//   - new tier_expires_at clamped at tier_started_at + MAX_TIER_DAYS
// Sends an email to the referrer if a credit was applied.
//
// Note on same-domain referrals: if referrer tenant == referee tenant
// (everyone joining via the same /r/ link from inside one company), we
// still credit. The math is a wash (you're crediting your own clock) but
// the user wants it to feel like an adoption signal.
export async function creditReferrer(
  referrerTenantId: string,
  refereeEmail: string
): Promise<{ credited: boolean; reason?: string; newDaysLeft?: number }> {
  const [referrer] = await db
    .select({
      id: tenants.id,
      tierStartedAt: tenants.tierStartedAt,
      tierExpiresAt: tenants.tierExpiresAt,
      referralsMade: tenants.referralsMade,
      plan: tenants.plan,
    })
    .from(tenants)
    .where(eq(tenants.id, referrerTenantId))
    .limit(1);
  if (!referrer) return { credited: false, reason: "referrer not found" };
  if (referrer.plan !== "free")
    return { credited: false, reason: `plan=${referrer.plan}` };
  if (referrer.referralsMade >= MAX_REFERRALS_CREDITED)
    return { credited: false, reason: "cap reached" };
  if (!referrer.tierStartedAt || !referrer.tierExpiresAt)
    return { credited: false, reason: "missing tier dates" };

  const cap = addDays(referrer.tierStartedAt, MAX_TIER_DAYS);
  const candidate = addDays(referrer.tierExpiresAt, REFERRAL_DAYS);
  const newExpires = candidate > cap ? cap : candidate;

  await db
    .update(tenants)
    .set({
      tierExpiresAt: newExpires,
      referralsMade: referrer.referralsMade + 1,
    })
    .where(eq(tenants.id, referrer.id));

  const newDaysLeft = Math.max(
    0,
    Math.ceil((newExpires.getTime() - Date.now()) / 86400000)
  );

  // Email the referrer (best-effort). Use first user attached to referrer's
  // tenant — in v1 that's typically the only user; multi-user tenants
  // notify the founding member.
  const refereeDomain =
    refereeEmail.includes("@") ? refereeEmail.split("@").pop() ?? "a coworker" : "a coworker";
  const [referrerUser] = await db
    .select({ email: users.email })
    .from(users)
    .where(eq(users.tenantId, referrer.id))
    .limit(1);
  if (referrerUser?.email) {
    try {
      await sendReferralCreditEmail({
        to: referrerUser.email,
        newDaysLeft,
        refereeDomain,
      });
    } catch (err) {
      console.warn("sendReferralCreditEmail failed:", err);
    }
  }

  return { credited: true, newDaysLeft };
}
