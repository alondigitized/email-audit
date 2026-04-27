import { eq, and, gte, count } from "drizzle-orm";
import { db, tenants, reactions } from "./db/client";

export type TenantState = {
  id: string;
  slug: string;
  plan: "waitlisted" | "free" | "pro" | "banned";
  expiresAt: Date | null;
  daysLeft: number | null; // null when expiresAt is null (pro / unlimited)
  locked: boolean;
  referralsMade: number;
  referralCode: string | null;
  canRefer: boolean; // false once 2 referrals have been credited
};

const MAX_REFERRALS_CREDITED = 2;

export function deriveTenantState(args: {
  id: string;
  slug: string;
  plan: "waitlisted" | "free" | "pro" | "banned";
  tierExpiresAt: Date | null;
  referralsMade: number;
  referralCode: string | null;
  isAdmin?: boolean;
}): TenantState {
  // Admins are never locked. They live cross-tenant for ops.
  if (args.isAdmin) {
    return {
      id: args.id,
      slug: args.slug,
      plan: args.plan,
      expiresAt: args.tierExpiresAt,
      daysLeft: null,
      locked: false,
      referralsMade: args.referralsMade,
      referralCode: args.referralCode,
      canRefer: false,
    };
  }

  const now = Date.now();
  const expMs = args.tierExpiresAt?.getTime() ?? null;
  const daysLeft =
    expMs !== null ? Math.max(0, Math.ceil((expMs - now) / 86400000)) : null;

  let locked = false;
  if (args.plan === "waitlisted" || args.plan === "banned") locked = true;
  else if (args.plan === "free" && expMs !== null && expMs <= now) locked = true;

  return {
    id: args.id,
    slug: args.slug,
    plan: args.plan,
    expiresAt: args.tierExpiresAt,
    daysLeft,
    locked,
    referralsMade: args.referralsMade,
    referralCode: args.referralCode,
    canRefer:
      args.plan === "free" && args.referralsMade < MAX_REFERRALS_CREDITED,
  };
}

export async function getTenantState(
  tenantId: string,
  isAdmin: boolean = false
): Promise<TenantState | null> {
  const [t] = await db
    .select({
      id: tenants.id,
      slug: tenants.slug,
      plan: tenants.plan,
      tierExpiresAt: tenants.tierExpiresAt,
      referralsMade: tenants.referralsMade,
      referralCode: tenants.referralCode,
    })
    .from(tenants)
    .where(eq(tenants.id, tenantId))
    .limit(1);
  if (!t) return null;
  return deriveTenantState({ ...t, isAdmin });
}

// "Audits since lock" — used on /locked to prove the persona kept working.
// V3: counts reactions (the persona-attributed unit) stamped after the
// tier expired. Same semantic, just on the new table.
export async function countAuditsSince(
  tenantId: string,
  since: Date
): Promise<number> {
  const [row] = await db
    .select({ n: count() })
    .from(reactions)
    .where(
      and(eq(reactions.tenantId, tenantId), gte(reactions.createdAt, since))
    );
  return Number(row?.n ?? 0);
}
