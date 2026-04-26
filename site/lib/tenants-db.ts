import { cache } from "react";
import { eq } from "drizzle-orm";
import { db, tenants, users } from "./db/client";

export type TenantRecord = {
  id: string;
  slug: string;
  name: string;
  plan: "waitlisted" | "free" | "pro" | "banned";
  tierStartedAt: Date | null;
  tierExpiresAt: Date | null;
  referralCode: string | null;
  referredByTenantId: string | null;
  referralsMade: number;
};

export const getTenantById = cache(
  async (tenantId: string): Promise<TenantRecord | null> => {
    const rows = await db
      .select({
        id: tenants.id,
        slug: tenants.slug,
        name: tenants.name,
        plan: tenants.plan,
        tierStartedAt: tenants.tierStartedAt,
        tierExpiresAt: tenants.tierExpiresAt,
        referralCode: tenants.referralCode,
        referredByTenantId: tenants.referredByTenantId,
        referralsMade: tenants.referralsMade,
      })
      .from(tenants)
      .where(eq(tenants.id, tenantId))
      .limit(1);
    return rows[0] ?? null;
  }
);

export const getTenantForUser = cache(
  async (userId: string): Promise<TenantRecord | null> => {
    const rows = await db
      .select({ tenantId: users.tenantId })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);
    const tid = rows[0]?.tenantId;
    if (!tid) return null;
    return getTenantById(tid);
  }
);
