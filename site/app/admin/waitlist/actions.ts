"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db, tenants, users } from "@/lib/db/client";
import { requireAdmin } from "@/lib/dal";
import { extractDomain } from "@/lib/free-domains";
import {
  sendWaitlistApprovedEmail,
  sendReferralCreditEmail,
} from "@/lib/email-tenant";

export type AdminActionResult = { ok: true } | { ok: false; error: string };

const FREE_DAYS = 14;
const REFERRAL_DAYS = 7;
const MAX_TIER_DAYS = 28;
const MAX_REFERRALS_CREDITED = 2;

function nanoid(n: number): string {
  const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
  const buf = crypto.getRandomValues(new Uint8Array(n));
  let out = "";
  for (let i = 0; i < n; i++) out += alphabet[buf[i] % alphabet.length];
  return out;
}

function addDays(d: Date, days: number): Date {
  const next = new Date(d);
  next.setDate(next.getDate() + days);
  return next;
}

export async function approveTenantAction(
  fd: FormData
): Promise<AdminActionResult> {
  await requireAdmin();
  const tenantId = String(fd.get("tenantId") ?? "");
  if (!/^[0-9a-f-]{36}$/i.test(tenantId)) {
    return { ok: false, error: "Bad tenantId." };
  }

  const [t] = await db
    .select({
      id: tenants.id,
      plan: tenants.plan,
      referredByTenantId: tenants.referredByTenantId,
    })
    .from(tenants)
    .where(eq(tenants.id, tenantId))
    .limit(1);
  if (!t) return { ok: false, error: "Tenant not found." };
  if (t.plan !== "waitlisted") {
    return { ok: false, error: `Tenant already ${t.plan}.` };
  }

  // The waitlisted user (one user per tenant in v1).
  const [u] = await db
    .select({ id: users.id, email: users.email })
    .from(users)
    .where(eq(users.tenantId, tenantId))
    .limit(1);
  if (!u) return { ok: false, error: "No user attached to this tenant." };

  const now = new Date();
  const tierExpires = addDays(now, FREE_DAYS);
  const code = nanoid(8);

  await db
    .update(tenants)
    .set({
      plan: "free",
      tierStartedAt: now,
      tierExpiresAt: tierExpires,
      referralCode: code,
    })
    .where(eq(tenants.id, tenantId));

  // Referral credit — applied at approval, not signup, so spam emails on the
  // waitlist never extend a referrer's window. Cap: 2 credits per referrer
  // (= +14d on top of the base 14d = 28d max, which matches the plan).
  if (t.referredByTenantId) {
    const [referrer] = await db
      .select({
        id: tenants.id,
        tierStartedAt: tenants.tierStartedAt,
        tierExpiresAt: tenants.tierExpiresAt,
        referralsMade: tenants.referralsMade,
        plan: tenants.plan,
      })
      .from(tenants)
      .where(eq(tenants.id, t.referredByTenantId))
      .limit(1);

    if (
      referrer &&
      referrer.plan === "free" &&
      referrer.referralsMade < MAX_REFERRALS_CREDITED &&
      referrer.tierStartedAt &&
      referrer.tierExpiresAt
    ) {
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

      const [referrerUser] = await db
        .select({ email: users.email })
        .from(users)
        .where(eq(users.tenantId, referrer.id))
        .limit(1);
      const refereeDomain = extractDomain(u.email) ?? "a coworker";
      const daysLeft = Math.max(
        0,
        Math.ceil((newExpires.getTime() - now.getTime()) / 86400000)
      );
      if (referrerUser?.email) {
        try {
          await sendReferralCreditEmail({
            to: referrerUser.email,
            newDaysLeft: daysLeft,
            refereeDomain,
          });
        } catch (err) {
          console.warn("referral-credit email failed:", err);
        }
      }
    }
  }

  // Approval email — directs the user to /login where Auth.js issues a magic
  // link. We don't pre-mint a token here; the existing magic-link flow handles
  // single-use + 10-min TTL.
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ??
    process.env.AUTH_URL ??
    "https://etell.app";
  try {
    await sendWaitlistApprovedEmail({
      to: u.email,
      loginUrl: `${baseUrl.replace(/\/$/, "")}/login`,
      daysFree: FREE_DAYS,
    });
  } catch (err) {
    console.warn("waitlist approve email failed:", err);
  }

  revalidatePath("/admin/waitlist");
  revalidatePath("/admin");
  return { ok: true };
}

// Form-action variant — Next 16 form actions must return void/Promise<void>.
// Logs errors server-side (admin can also retry from the queue).
export async function approveTenantFormAction(fd: FormData): Promise<void> {
  const r = await approveTenantAction(fd);
  if (!r.ok) console.warn("approveTenantFormAction:", r.error);
}

export async function denyTenantFormAction(fd: FormData): Promise<void> {
  const r = await denyTenantAction(fd);
  if (!r.ok) console.warn("denyTenantFormAction:", r.error);
}

export async function denyTenantAction(
  fd: FormData
): Promise<AdminActionResult> {
  await requireAdmin();
  const tenantId = String(fd.get("tenantId") ?? "");
  if (!/^[0-9a-f-]{36}$/i.test(tenantId)) {
    return { ok: false, error: "Bad tenantId." };
  }
  // Soft-delete by flipping to 'banned' — preserves the row for audit.
  await db
    .update(tenants)
    .set({ plan: "banned" })
    .where(eq(tenants.id, tenantId));
  revalidatePath("/admin/waitlist");
  return { ok: true };
}
