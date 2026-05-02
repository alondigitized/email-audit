import { and, asc, desc, eq, ne } from "drizzle-orm";
import { notFound } from "next/navigation";
import { db, tenantMembers, users } from "@/lib/db/client";
import { requireTenant } from "@/lib/dal";

export type TenantRole = "owner" | "member";

export type TeamMember = {
  userId: string;
  email: string;
  name: string | null;
  role: TenantRole;
  joinedAt: Date;
  // Last sign-in helps owners spot dormant accounts; null = never signed in.
  lastSignInAt: Date | null;
};

// Resolve the caller's role inside a specific tenant. Returns null when
// the user has no membership row (which today shouldn't happen post-
// backfill — but we treat it as "no permissions" rather than throwing).
export async function getTenantRole(
  userId: string,
  tenantId: string
): Promise<TenantRole | null> {
  const [row] = await db
    .select({ role: tenantMembers.role })
    .from(tenantMembers)
    .where(
      and(
        eq(tenantMembers.userId, userId),
        eq(tenantMembers.tenantId, tenantId)
      )
    )
    .limit(1);
  return row?.role ?? null;
}

// Page guard: caller must be an owner of their own tenant. Mirrors
// requireAdmin's "404 not 403" stance — non-owners shouldn't even know
// the route exists. Wraps requireTenant so the caller gets the same
// `{ user, tenant }` shape that the rest of the app uses.
export async function requireTenantOwner() {
  const ctx = await requireTenant();
  const role = await getTenantRole(ctx.user.id, ctx.tenant.id);
  if (role !== "owner") notFound();
  return ctx;
}

export async function listTeamMembers(tenantId: string): Promise<TeamMember[]> {
  const rows = await db
    .select({
      userId: users.id,
      email: users.email,
      name: users.name,
      role: tenantMembers.role,
      joinedAt: tenantMembers.createdAt,
      lastSignInAt: users.lastSignInAt,
    })
    .from(tenantMembers)
    .innerJoin(users, eq(users.id, tenantMembers.userId))
    .where(eq(tenantMembers.tenantId, tenantId))
    .orderBy(desc(tenantMembers.role), asc(users.email));
  return rows.map((r) => ({
    userId: r.userId,
    email: r.email,
    name: r.name,
    role: r.role,
    joinedAt: r.joinedAt,
    lastSignInAt: r.lastSignInAt,
  }));
}

// "Can the actor remove the target?" — guard used by both the action
// and the UI render path. Rules:
//   - Actor must be an owner of the same tenant.
//   - Actor cannot remove themselves (transfer first).
//   - If the target is an owner, there must be at least one OTHER owner
//     after the removal (no orphaned tenants).
export async function canRemoveMember(args: {
  actorUserId: string;
  targetUserId: string;
  tenantId: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  if (args.actorUserId === args.targetUserId) {
    return { ok: false, error: "Transfer ownership before removing yourself." };
  }
  const actorRole = await getTenantRole(args.actorUserId, args.tenantId);
  if (actorRole !== "owner") return { ok: false, error: "Only owners can remove teammates." };
  const targetRole = await getTenantRole(args.targetUserId, args.tenantId);
  if (!targetRole) return { ok: false, error: "Member not found." };
  if (targetRole === "owner") {
    const otherOwners = await db
      .select({ userId: tenantMembers.userId })
      .from(tenantMembers)
      .where(
        and(
          eq(tenantMembers.tenantId, args.tenantId),
          eq(tenantMembers.role, "owner"),
          ne(tenantMembers.userId, args.targetUserId)
        )
      )
      .limit(1);
    if (otherOwners.length === 0) {
      return { ok: false, error: "Tenant must have at least one owner." };
    }
  }
  return { ok: true };
}
