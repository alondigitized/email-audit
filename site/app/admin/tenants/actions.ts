"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db, tenants } from "@/lib/db/client";
import { requireAdmin } from "@/lib/dal";
import { addDays, MAX_TIER_DAYS } from "@/lib/tenant-approval";

export type AdminActionResult = { ok: true } | { ok: false; error: string };

const VALID_PLANS = new Set(["waitlisted", "free", "pro", "banned"] as const);
type Plan = "waitlisted" | "free" | "pro" | "banned";

function isUuid(s: string): boolean {
  return /^[0-9a-f-]{36}$/i.test(s);
}

// Change a tenant's plan. The proxy + auth gate read tenant.plan on every
// request, so this propagates immediately on the next page load.
//
// Special-cases:
// - When moving INTO 'free', stamp tier dates if missing (so a tenant that
//   was banned before being approved gets a clean 14-day window).
// - When moving INTO 'pro', clear tier_expires_at (NULL = unlimited).
// - When moving OUT of 'free' to 'banned', preserve tier dates so a future
//   unban doesn't reset their clock.
export async function changeTenantPlanAction(
  fd: FormData
): Promise<AdminActionResult> {
  await requireAdmin();
  const tenantId = String(fd.get("tenantId") ?? "");
  const planRaw = String(fd.get("plan") ?? "");
  if (!isUuid(tenantId)) return { ok: false, error: "Bad tenantId." };
  if (!VALID_PLANS.has(planRaw as Plan)) {
    return { ok: false, error: `Bad plan: ${planRaw}` };
  }
  const plan = planRaw as Plan;

  const [t] = await db
    .select({
      tierStartedAt: tenants.tierStartedAt,
      tierExpiresAt: tenants.tierExpiresAt,
    })
    .from(tenants)
    .where(eq(tenants.id, tenantId))
    .limit(1);
  if (!t) return { ok: false, error: "Tenant not found." };

  const update: {
    plan: Plan;
    tierStartedAt?: Date | null;
    tierExpiresAt?: Date | null;
  } = { plan };

  if (plan === "free" && !t.tierStartedAt) {
    update.tierStartedAt = new Date();
    update.tierExpiresAt = addDays(new Date(), 14);
  } else if (plan === "pro") {
    // Pro is unlimited — clear expiry. Keep tierStartedAt for audit.
    update.tierExpiresAt = null;
  }

  await db.update(tenants).set(update).where(eq(tenants.id, tenantId));
  revalidatePath(`/admin/tenants`);
  revalidatePath(`/admin/tenants/${tenantId}`);
  return { ok: true };
}

// Extend a tenant's tier_expires_at by N days. Capped at the standard
// 28-day total from tier_started_at (matches the referral cap). To go
// beyond the cap, change plan to 'pro' instead.
export async function extendTenantTierAction(
  fd: FormData
): Promise<AdminActionResult> {
  await requireAdmin();
  const tenantId = String(fd.get("tenantId") ?? "");
  const daysRaw = Number(fd.get("days") ?? 0);
  if (!isUuid(tenantId)) return { ok: false, error: "Bad tenantId." };
  if (!Number.isFinite(daysRaw) || daysRaw < 1 || daysRaw > 90) {
    return { ok: false, error: "days must be between 1 and 90" };
  }

  const [t] = await db
    .select({
      plan: tenants.plan,
      tierStartedAt: tenants.tierStartedAt,
      tierExpiresAt: tenants.tierExpiresAt,
    })
    .from(tenants)
    .where(eq(tenants.id, tenantId))
    .limit(1);
  if (!t) return { ok: false, error: "Tenant not found." };
  if (t.plan !== "free")
    return { ok: false, error: `Plan must be free; current=${t.plan}` };
  if (!t.tierStartedAt || !t.tierExpiresAt)
    return { ok: false, error: "Tenant missing tier dates." };

  const cap = addDays(t.tierStartedAt, MAX_TIER_DAYS);
  const candidate = addDays(t.tierExpiresAt, daysRaw);
  const newExpires = candidate > cap ? cap : candidate;

  await db
    .update(tenants)
    .set({ tierExpiresAt: newExpires })
    .where(eq(tenants.id, tenantId));
  revalidatePath(`/admin/tenants`);
  revalidatePath(`/admin/tenants/${tenantId}`);
  return { ok: true };
}

// Form-action variants — Next 16 form actions must return void/Promise<void>.
export async function changeTenantPlanFormAction(
  fd: FormData
): Promise<void> {
  const r = await changeTenantPlanAction(fd);
  if (!r.ok) console.warn("changeTenantPlanFormAction:", r.error);
}

export async function extendTenantTierFormAction(
  fd: FormData
): Promise<void> {
  const r = await extendTenantTierAction(fd);
  if (!r.ok) console.warn("extendTenantTierFormAction:", r.error);
}
