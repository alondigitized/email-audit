import { cache } from "react";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { db, appFlag, users } from "./db/client";

// Central registry of toggleable apps. Adding a new app = adding a row here
// + inserting a row in `app_flag`. The admin UI renders a toggle per entry.
export type AppKey = "chat";

export type AppDef = {
  key: AppKey;
  name: string;
  description: string;
  path: string;
  defaultEnabled: boolean;
};

export const APPS: AppDef[] = [
  {
    key: "chat",
    name: "Chat",
    description: "Talk to your personas, grounded in their vault memory.",
    path: "/chat",
    defaultEnabled: false,
  },
];

export type AppFlagState = {
  key: AppKey;
  enabled: boolean;
  updatedAt: Date | null;
  updatedBy: string | null;
  updatedByEmail: string | null;
  def: AppDef;
};

// Per-request cache so a page + its TopNav don't hit the DB twice.
const loadAllFlags = cache(async (): Promise<AppFlagState[]> => {
  const rows = await db
    .select({
      key: appFlag.key,
      enabled: appFlag.enabled,
      updatedAt: appFlag.updatedAt,
      updatedBy: appFlag.updatedBy,
      updatedByEmail: users.email,
    })
    .from(appFlag)
    .leftJoin(users, eq(users.id, appFlag.updatedBy));
  const rowByKey = new Map(rows.map((r) => [r.key, r]));
  return APPS.map((def) => {
    const row = rowByKey.get(def.key);
    return {
      key: def.key,
      enabled: row?.enabled ?? def.defaultEnabled,
      updatedAt: row?.updatedAt ?? null,
      updatedBy: row?.updatedBy ?? null,
      updatedByEmail: row?.updatedByEmail ?? null,
      def,
    };
  });
});

export async function getAppFlags(): Promise<AppFlagState[]> {
  return loadAllFlags();
}

export async function isAppEnabled(key: AppKey): Promise<boolean> {
  const flags = await loadAllFlags();
  return flags.find((f) => f.key === key)?.enabled ?? false;
}

/**
 * Gate a route or API handler on an app flag. Returns notFound() when the
 * app is disabled, matching requireAdmin semantics — we don't leak app
 * existence to non-admins. Admin override: bypass the flag check so admins
 * can always validate a disabled app before flipping the public switch.
 */
export async function requireAppEnabled(
  key: AppKey,
  opts: { isAdmin?: boolean } = {}
): Promise<void> {
  if (opts.isAdmin) return;
  const on = await isAppEnabled(key);
  if (!on) notFound();
}
