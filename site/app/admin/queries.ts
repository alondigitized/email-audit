import { sql, gte, count, countDistinct, eq } from "drizzle-orm";
import {
  db,
  users,
  personas,
  userPersonas,
  signInEvents,
  pageViews,
  userAppAccess,
} from "@/lib/db/client";

export type AdminUserRow = {
  id: string;
  email: string;
  createdAt: Date;
  emailVerified: Date | null;
  lastSignInAt: Date | null;
  isAdmin: boolean;
  signInCount30d: number;
  viewCount30d: number;
  timeToVerifyHours: number | null;
  personas: string[];
  apps: string[];
};

export type AdoptionSummary = {
  totalInvited: number;
  totalVerified: number;
  activeLast7d: number;
  activeLast30d: number;
  totalSignIns30d: number;
  avgSignInsPerActive30d: number;
  audits30d: number;
  analyses30d: number;
  dormantInvites: number; // invited > 7d ago, never verified
};

const days = (n: number) => new Date(Date.now() - n * 24 * 60 * 60 * 1000);

export async function getAdoptionSummary(): Promise<AdoptionSummary> {
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

  const [dormant] = await db
    .select({ n: count() })
    .from(users)
    .where(
      sql`${users.emailVerified} is null and ${users.createdAt} < ${days(7)}`
    );

  const [audits30] = await db
    .select({ n: count() })
    .from(pageViews)
    .where(sql`${pageViews.kind} = 'audit' and ${pageViews.ts} >= ${days(30)}`);
  const [analyses30] = await db
    .select({ n: count() })
    .from(pageViews)
    .where(
      sql`${pageViews.kind} = 'analysis' and ${pageViews.ts} >= ${days(30)}`
    );

  const activeN = Number(active30?.n ?? 0);
  const signInsN = Number(totalEvents30?.n ?? 0);
  const avg = activeN > 0 ? signInsN / activeN : 0;

  return {
    totalInvited: Number(invited?.n ?? 0),
    totalVerified: Number(verified?.n ?? 0),
    activeLast7d: Number(active7?.n ?? 0),
    activeLast30d: activeN,
    totalSignIns30d: signInsN,
    avgSignInsPerActive30d: Math.round(avg * 10) / 10,
    audits30d: Number(audits30?.n ?? 0),
    analyses30d: Number(analyses30?.n ?? 0),
    dormantInvites: Number(dormant?.n ?? 0),
  };
}

export async function getAdminUserRows(): Promise<AdminUserRow[]> {
  const thirtyAgo = days(30);

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
    .innerJoin(personas, eq(userPersonas.personaId, personas.id));

  const appGrants = await db
    .select({ userId: userAppAccess.userId, appKey: userAppAccess.appKey })
    .from(userAppAccess);
  const appsByUser = new Map<string, string[]>();
  for (const a of appGrants) {
    const arr = appsByUser.get(a.userId) ?? [];
    arr.push(a.appKey);
    appsByUser.set(a.userId, arr);
  }

  const byUser = new Map<string, string[]>();
  for (const g of grants) {
    const arr = byUser.get(g.userId) ?? [];
    arr.push(g.slug);
    byUser.set(g.userId, arr);
  }

  const signInCounts = await db
    .select({ userId: signInEvents.userId, n: count() })
    .from(signInEvents)
    .where(gte(signInEvents.ts, thirtyAgo))
    .groupBy(signInEvents.userId);
  const signInCountByUser = new Map<string, number>();
  for (const e of signInCounts) signInCountByUser.set(e.userId, Number(e.n));

  const viewCounts = await db
    .select({ userId: pageViews.userId, n: count() })
    .from(pageViews)
    .where(gte(pageViews.ts, thirtyAgo))
    .groupBy(pageViews.userId);
  const viewCountByUser = new Map<string, number>();
  for (const e of viewCounts) viewCountByUser.set(e.userId, Number(e.n));

  return base.map((u) => {
    const ttv =
      u.emailVerified && u.createdAt
        ? Math.max(
            0,
            Math.round(
              (u.emailVerified.getTime() - u.createdAt.getTime()) /
                (60 * 60 * 1000)
            )
          )
        : null;
    return {
      ...u,
      signInCount30d: signInCountByUser.get(u.id) ?? 0,
      viewCount30d: viewCountByUser.get(u.id) ?? 0,
      timeToVerifyHours: ttv,
      personas: (byUser.get(u.id) ?? []).sort(),
      apps: (appsByUser.get(u.id) ?? []).sort(),
    };
  });
}

export async function getAllPersonaSlugs(): Promise<string[]> {
  const rows = await db
    .select({ slug: personas.slug })
    .from(personas)
    .orderBy(personas.slug);
  return rows.map((r) => r.slug);
}
