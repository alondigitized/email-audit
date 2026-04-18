import { sql, gte, count, countDistinct } from "drizzle-orm";
import { db, users, personas, userPersonas, signInEvents } from "@/lib/db/client";

export type AdminUserRow = {
  id: string;
  email: string;
  createdAt: Date;
  emailVerified: Date | null;
  lastSignInAt: Date | null;
  isAdmin: boolean;
  signInCount30d: number;
  personas: string[];
};

export type AdoptionSummary = {
  totalInvited: number;
  totalVerified: number;
  activeLast7d: number;
  activeLast30d: number;
  totalSignIns30d: number;
};

export async function getAdoptionSummary(): Promise<AdoptionSummary> {
  const days = (n: number) => new Date(Date.now() - n * 24 * 60 * 60 * 1000);

  const [invited] = await db.select({ n: count() }).from(users);
  const [verified] = await db
    .select({ n: count() })
    .from(users)
    .where(sql`${users.emailVerified} is not null`);

  const [active7] = await db
    .select({ n: countDistinct(signInEvents.userId) })
    .from(signInEvents)
    .where(gte(signInEvents.ts, days(7)));
  const [active30] = await db
    .select({ n: countDistinct(signInEvents.userId) })
    .from(signInEvents)
    .where(gte(signInEvents.ts, days(30)));
  const [totalEvents30] = await db
    .select({ n: count() })
    .from(signInEvents)
    .where(gte(signInEvents.ts, days(30)));

  return {
    totalInvited: Number(invited?.n ?? 0),
    totalVerified: Number(verified?.n ?? 0),
    activeLast7d: Number(active7?.n ?? 0),
    activeLast30d: Number(active30?.n ?? 0),
    totalSignIns30d: Number(totalEvents30?.n ?? 0),
  };
}

export async function getAdminUserRows(): Promise<AdminUserRow[]> {
  const thirtyAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const base = await db
    .select({
      id: users.id,
      email: users.email,
      createdAt: users.createdAt,
      emailVerified: users.emailVerified,
      lastSignInAt: users.lastSignInAt,
      isAdmin: users.isAdmin,
    })
    .from(users)
    .orderBy(sql`${users.createdAt} desc`);

  const grants = await db
    .select({ userId: userPersonas.userId, slug: personas.slug })
    .from(userPersonas)
    .innerJoin(personas, sql`${userPersonas.personaId} = ${personas.id}`);

  const byUser = new Map<string, string[]>();
  for (const g of grants) {
    const arr = byUser.get(g.userId) ?? [];
    arr.push(g.slug);
    byUser.set(g.userId, arr);
  }

  const events = await db
    .select({
      userId: signInEvents.userId,
      n: count(),
    })
    .from(signInEvents)
    .where(gte(signInEvents.ts, thirtyAgo))
    .groupBy(signInEvents.userId);

  const countByUser = new Map<string, number>();
  for (const e of events) countByUser.set(e.userId, Number(e.n));

  return base.map((u) => ({
    ...u,
    signInCount30d: countByUser.get(u.id) ?? 0,
    personas: (byUser.get(u.id) ?? []).sort(),
  }));
}

export async function getAllPersonaSlugs(): Promise<string[]> {
  const rows = await db
    .select({ slug: personas.slug })
    .from(personas)
    .orderBy(personas.slug);
  return rows.map((r) => r.slug);
}
