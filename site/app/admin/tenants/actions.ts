"use server";

import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db, tenants, users, personas, tenantPersonaGrants } from "@/lib/db/client";
import { requireAdmin } from "@/lib/dal";
import { addDays, MAX_TIER_DAYS } from "@/lib/tenant-approval";
import {
  sendWaitlistApprovedEmail,
  sendWaitlistConfirmEmail,
} from "@/lib/email-tenant";

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

// Add a member to an existing tenant by email. Skips signup-flow gates
// (free-domain blocklist, rate limit) since this is admin-driven.
//
// On a free/pro tenant, fires the magic-link landing email so the new
// member can sign in immediately. On a waitlisted tenant, fires the
// "you're on the list" email so they know they're queued.
//
// Refuses to insert duplicates (returns ok with already=true).
const EmailSchema = z.string().trim().toLowerCase().email().max(254);

export async function addMemberToTenantAction(
  fd: FormData
): Promise<AdminActionResult & { already?: boolean }> {
  await requireAdmin();
  const tenantId = String(fd.get("tenantId") ?? "");
  const emailParsed = EmailSchema.safeParse(fd.get("email"));
  if (!isUuid(tenantId)) return { ok: false, error: "Bad tenantId." };
  if (!emailParsed.success) {
    return {
      ok: false,
      error: emailParsed.error.issues[0]?.message ?? "Invalid email",
    };
  }
  const email = emailParsed.data;

  const [t] = await db
    .select({ id: tenants.id, plan: tenants.plan })
    .from(tenants)
    .where(eq(tenants.id, tenantId))
    .limit(1);
  if (!t) return { ok: false, error: "Tenant not found." };

  // If the user already exists (any tenant), refuse — moving users between
  // tenants is a separate operation we haven't built yet.
  const [existing] = await db
    .select({ id: users.id, tenantId: users.tenantId })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  if (existing) {
    if (existing.tenantId === tenantId) {
      return { ok: true, already: true };
    }
    return {
      ok: false,
      error: `${email} is already in another tenant. Tenant transfers aren't supported in v1.`,
    };
  }

  await db.insert(users).values({ email, tenantId });

  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ??
    process.env.AUTH_URL ??
    "https://etell.app";
  try {
    if (t.plan === "free" || t.plan === "pro") {
      await sendWaitlistApprovedEmail({
        to: email,
        loginUrl: `${baseUrl.replace(/\/$/, "")}/login`,
        daysFree: 14,
      });
    } else if (t.plan === "waitlisted") {
      // Surface the domain on the queue email — pull it from the user's
      // email since we may not have the tenant's email_domain populated
      // for legacy tenants like 'alon'.
      const at = email.lastIndexOf("@");
      const domain = at >= 0 ? email.slice(at + 1) : "your company";
      await sendWaitlistConfirmEmail({ to: email, companyDomain: domain });
    }
    // 'banned' tenants don't email — we silently still inserted.
  } catch (err) {
    console.warn("addMemberToTenantAction: email send failed:", err);
  }

  revalidatePath(`/admin/tenants/${tenantId}`);
  return { ok: true };
}

// Remove a member. Safeguards:
// - Cannot remove an admin user.
// - Cannot remove the last member of a tenant (would orphan the tenant —
//   admin should ban or change plan first).
// - Cannot remove yourself.
export async function removeMemberFromTenantAction(
  fd: FormData
): Promise<AdminActionResult> {
  const actor = await requireAdmin();
  const tenantId = String(fd.get("tenantId") ?? "");
  const userId = String(fd.get("userId") ?? "");
  if (!isUuid(tenantId)) return { ok: false, error: "Bad tenantId." };
  if (!userId) return { ok: false, error: "Bad userId." };

  if (userId === actor.id) {
    return { ok: false, error: "Refusing to remove yourself." };
  }

  const [target] = await db
    .select({ id: users.id, isAdmin: users.isAdmin, tenantId: users.tenantId })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  if (!target) return { ok: false, error: "User not found." };
  if (target.tenantId !== tenantId) {
    return { ok: false, error: "User is not in this tenant." };
  }
  if (target.isAdmin) {
    return { ok: false, error: "Refusing to remove an admin user." };
  }

  // Last-member guard.
  const memberCount = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.tenantId, tenantId));
  if (memberCount.length <= 1) {
    return {
      ok: false,
      error: "Refusing to remove the last member. Ban the tenant instead.",
    };
  }

  await db.delete(users).where(eq(users.id, userId));
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

export async function addMemberFormAction(fd: FormData): Promise<void> {
  const r = await addMemberToTenantAction(fd);
  if (!r.ok) console.warn("addMemberFormAction:", r.error);
}

export async function removeMemberFormAction(fd: FormData): Promise<void> {
  const r = await removeMemberFromTenantAction(fd);
  if (!r.ok) console.warn("removeMemberFormAction:", r.error);
}

// Persona grants — admin grants a tenant read-only access to a persona
// owned by a different tenant. Used when a brand-specific persona was
// forked under the founder tenant ('alon') and we want to give the
// brand's own tenant visibility into it (e.g. Kohl's reads
// `rosie-coupon-kohls`).
const SlugSchema = z.string().regex(/^[a-z0-9-]+$/).max(64);

export async function grantPersonaToTenantAction(
  fd: FormData
): Promise<AdminActionResult> {
  const admin = await requireAdmin();
  const tenantId = String(fd.get("tenantId") ?? "");
  if (!isUuid(tenantId)) return { ok: false, error: "Bad tenantId." };
  const slugParsed = SlugSchema.safeParse(fd.get("personaSlug"));
  if (!slugParsed.success) return { ok: false, error: "Bad persona slug." };
  const personaSlug = slugParsed.data;

  const [persona] = await db
    .select({ slug: personas.slug, tenantId: personas.tenantId })
    .from(personas)
    .where(eq(personas.slug, personaSlug))
    .limit(1);
  if (!persona) {
    return { ok: false, error: `Persona "${personaSlug}" not found.` };
  }
  // Guard against the obvious mistake of granting a persona to the same
  // tenant that already owns it — would be a noop but the UI shouldn't
  // suggest the persona is shared when it isn't.
  if (persona.tenantId === tenantId) {
    return {
      ok: false,
      error: "That persona is already owned by this tenant — no grant needed.",
    };
  }

  await db
    .insert(tenantPersonaGrants)
    .values({
      tenantId,
      personaSlug,
      mode: "read",
      grantedBy: admin.id,
    })
    .onConflictDoNothing();
  revalidatePath(`/admin/tenants/${tenantId}`);
  return { ok: true };
}

export async function revokePersonaGrantAction(
  fd: FormData
): Promise<AdminActionResult> {
  await requireAdmin();
  const tenantId = String(fd.get("tenantId") ?? "");
  if (!isUuid(tenantId)) return { ok: false, error: "Bad tenantId." };
  const slugParsed = SlugSchema.safeParse(fd.get("personaSlug"));
  if (!slugParsed.success) return { ok: false, error: "Bad persona slug." };
  await db
    .delete(tenantPersonaGrants)
    .where(
      and(
        eq(tenantPersonaGrants.tenantId, tenantId),
        eq(tenantPersonaGrants.personaSlug, slugParsed.data)
      )
    );
  revalidatePath(`/admin/tenants/${tenantId}`);
  return { ok: true };
}

export async function grantPersonaFormAction(fd: FormData): Promise<void> {
  const r = await grantPersonaToTenantAction(fd);
  if (!r.ok) console.warn("grantPersonaFormAction:", r.error);
}

export async function revokePersonaGrantFormAction(fd: FormData): Promise<void> {
  const r = await revokePersonaGrantAction(fd);
  if (!r.ok) console.warn("revokePersonaGrantFormAction:", r.error);
}

