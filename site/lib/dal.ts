import { redirect, notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";
import { db, users, userAppAccess } from "./db/client";
import { getPersonaSlugsForUser } from "./personas-db";
import { getTenantForUser, type TenantRecord } from "./tenants-db";

export type CurrentUser = {
  id: string;
  email: string;
  name: string | null;
  personas: string[];
  isAdmin: boolean;
  apps: string[]; // app keys this user has access to (admin bypasses this)
  tenantId: string | null;
};

async function loadIsAdmin(userId: string): Promise<boolean> {
  const row = await db
    .select({ isAdmin: users.isAdmin })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  return row[0]?.isAdmin ?? false;
}

async function loadTenantId(userId: string): Promise<string | null> {
  const row = await db
    .select({ tenantId: users.tenantId })
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);
  return row[0]?.tenantId ?? null;
}

async function loadAppKeys(userId: string): Promise<string[]> {
  const rows = await db
    .select({ appKey: userAppAccess.appKey })
    .from(userAppAccess)
    .where(eq(userAppAccess.userId, userId));
  return rows.map((r) => r.appKey);
}

// S7: every route handler / server component that touches data must call this.
// Proxy enforcement is optimistic; this is the authoritative check.
export async function requireUser(): Promise<CurrentUser> {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) {
    redirect("/login");
  }
  const [personas, isAdmin, apps, tenantId] = await Promise.all([
    getPersonaSlugsForUser(session.user.id),
    loadIsAdmin(session.user.id),
    loadAppKeys(session.user.id),
    loadTenantId(session.user.id),
  ]);
  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name ?? null,
    personas,
    isAdmin,
    apps,
    tenantId,
  };
}

export async function currentUser(): Promise<CurrentUser | null> {
  const session = await auth();
  if (!session?.user?.id || !session.user.email) return null;
  const [personas, isAdmin, apps, tenantId] = await Promise.all([
    getPersonaSlugsForUser(session.user.id),
    loadIsAdmin(session.user.id),
    loadAppKeys(session.user.id),
    loadTenantId(session.user.id),
  ]);
  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name ?? null,
    personas,
    isAdmin,
    apps,
    tenantId,
  };
}

export async function requireAdmin(): Promise<CurrentUser> {
  const user = await requireUser();
  if (!user.isAdmin) {
    // S7: non-admins get a 404, not a 403 — don't leak the route's existence.
    notFound();
  }
  return user;
}

// Returns the logged-in user's tenant. Redirects if no session, 404s if the
// user has no tenant_id (should be impossible post-Phase-B signup). Every
// persona/audit/chat read path calls this and filters its query by the
// returned tenant.id (admin reads bypass via requireAdmin instead).
export async function requireTenant(): Promise<{
  user: CurrentUser;
  tenant: TenantRecord;
}> {
  const user = await requireUser();
  if (!user.tenantId) notFound();
  const tenant = await getTenantForUser(user.id);
  if (!tenant) notFound();
  return { user, tenant };
}
