import { cache } from "react";
import { eq, asc, inArray } from "drizzle-orm";
import { db, personas, users, tenantPersonaGrants } from "./db/client";
import type { PersonaLastStatus } from "./db/schema";
import {
  safeParsePersonaProfile,
  type PersonaProfile,
} from "./schema/persona";

// Read-shared, write-isolated forking. Given persona slugs, returns the
// SAME slugs PLUS each one's template_slug (when set and different).
// Reads against any of the returned slugs surface the union of:
// - the tenant's own forked-persona writes (audits, chats, emails) AND
// - the source template's accumulated brain (curated by etell.app).
//
// Writes are unaffected — daemons stamp `audit.persona = forkSlug`, the
// fork's own slug. Templates accumulate their brain via etell.app's own
// reference accounts (Alon's tenant for now). See docs in lib/db/schema.ts
// on the `personaTemplates` and `personas.templateSlug` columns.
//
// Idempotent for old/non-forked personas: if templateSlug is null or
// equals the persona's own slug (Walker's self-reference after the
// promote-to-templates migration), the input set is returned unchanged.
export const expandReadableSlugs = cache(
  async (personaSlugs: string[]): Promise<string[]> => {
    if (personaSlugs.length === 0) return [];
    const rows = await db
      .select({
        slug: personas.slug,
        templateSlug: personas.templateSlug,
      })
      .from(personas)
      .where(inArray(personas.slug, personaSlugs));
    const out = new Set<string>(personaSlugs);
    for (const r of rows) {
      if (r.templateSlug && r.templateSlug !== r.slug) {
        out.add(r.templateSlug);
      }
    }
    return Array.from(out);
  }
);

// Per-request cache (React cache). Each server request hydrates once.
//
// Two sources are unioned:
//   1. Personas owned by the user's tenant (the legacy path).
//   2. Personas granted to the user's tenant via tenant_persona_grant
//      (cross-tenant read-only access; e.g. Kohl's tenant gets a grant
//      to read Rosie Coupon, which is owned by Alon's founder tenant).
//
// Admin call sites should not use this helper — admins have cross-
// tenant visibility via getAllPersonas() unfiltered. The legacy
// userPersonas join table is not consulted; ownership lives entirely
// at the tenant level now.
export const getPersonaSlugsForUser = cache(
  async (userId: string): Promise<string[]> => {
    const ownedRows = await db
      .select({ slug: personas.slug })
      .from(personas)
      .innerJoin(users, eq(users.tenantId, personas.tenantId))
      .where(eq(users.id, userId));
    const grantedRows = await db
      .select({ slug: tenantPersonaGrants.personaSlug })
      .from(tenantPersonaGrants)
      .innerJoin(users, eq(users.tenantId, tenantPersonaGrants.tenantId))
      .where(eq(users.id, userId));
    const set = new Set<string>();
    for (const r of ownedRows) set.add(r.slug);
    for (const r of grantedRows) set.add(r.slug);
    return Array.from(set);
  }
);

export type PersonaRecord = {
  id: string;
  slug: string;
  name: string;
  short: string;
  profile: PersonaProfile | null;
  lastStatus: PersonaLastStatus | null;
  tenantId: string | null;
};

function logDrift(slug: string, err: unknown) {
  console.warn(`[persona-profile drift] slug=${slug}`, err);
}

function parseMaybeProfile(
  slug: string,
  raw: unknown
): PersonaProfile | null {
  if (!raw) return null;
  const r = safeParsePersonaProfile(raw) as
    | { ok: true; data: PersonaProfile }
    | { ok: false; error: unknown };
  if (!r.ok) {
    logDrift(slug, r.error);
    return null;
  }
  return r.data;
}

// All personas, ordered by slug. Cached per-request so repeat calls inside
// one server render don't round-trip.
//
// Drafts (profile.status === 'draft') are excluded by default — wizard-in-
// progress personas shouldn't leak into /chat/{slug} or audit filters.
// Admin surfaces (/admin/personas list) pass `{ includeDrafts: true }`
// to see them.
//
// Pass `tenantId` to scope to a single tenant's personas (the user-facing
// case). Omit it for admin/ops cross-tenant views.
export async function getAllPersonas(opts?: {
  includeDrafts?: boolean;
  tenantId?: string | null;
}): Promise<PersonaRecord[]> {
  const all = await getAllPersonasInternal();
  let filtered = all;
  if (opts?.tenantId) {
    filtered = filtered.filter((p) => p.tenantId === opts.tenantId);
  }
  if (!opts?.includeDrafts) {
    filtered = filtered.filter((p) => (p.profile?.status ?? "active") !== "draft");
  }
  return filtered;
}

const getAllPersonasInternal = cache(async (): Promise<PersonaRecord[]> => {
  const rows = await db
    .select({
      id: personas.id,
      slug: personas.slug,
      name: personas.name,
      short: personas.short,
      profile: personas.profile,
      lastStatus: personas.lastStatus,
      tenantId: personas.tenantId,
    })
    .from(personas)
    .orderBy(asc(personas.slug));
  return rows.map((r) => ({
    id: r.id,
    slug: r.slug,
    name: r.name,
    short: r.short,
    profile: parseMaybeProfile(r.slug, r.profile),
    lastStatus: r.lastStatus ?? null,
    tenantId: r.tenantId ?? null,
  }));
});

// Single persona by slug. Returns null if the slug doesn't exist OR if
// `tenantId` is provided and doesn't match. Admin call sites omit tenantId
// to bypass the filter.
export const getPersonaBySlug = cache(
  async (
    slug: string,
    opts?: { tenantId?: string | null }
  ): Promise<PersonaRecord | null> => {
    const rows = await db
      .select({
        id: personas.id,
        slug: personas.slug,
        name: personas.name,
        short: personas.short,
        profile: personas.profile,
        lastStatus: personas.lastStatus,
        tenantId: personas.tenantId,
      })
      .from(personas)
      .where(eq(personas.slug, slug))
      .limit(1);
    if (rows.length === 0) return null;
    const r = rows[0];
    if (opts?.tenantId && r.tenantId !== opts.tenantId) return null;
    return {
      id: r.id,
      slug: r.slug,
      name: r.name,
      short: r.short,
      profile: parseMaybeProfile(r.slug, r.profile),
      lastStatus: r.lastStatus ?? null,
      tenantId: r.tenantId ?? null,
    };
  }
);

// Deterministic persona pill color from slug. Used when a persona row has
// no profile.color set yet (legacy / freshly created). Matches the Observable
// 10 hue palette the backfill script assigns so colors stay cohesive.
const FALLBACK_PALETTE = [
  "#4269d0",
  "#ff725c",
  "#efb118",
  "#3ca951",
  "#a463f2",
  "#6cc5b0",
];

export function personaColor(slug: string, profile: PersonaProfile | null): string {
  if (profile?.color) return profile.color;
  let hash = 0;
  for (let i = 0; i < slug.length; i++)
    hash = (hash * 31 + slug.charCodeAt(i)) | 0;
  return FALLBACK_PALETTE[Math.abs(hash) % FALLBACK_PALETTE.length];
}
