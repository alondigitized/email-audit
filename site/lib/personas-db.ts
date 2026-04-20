import { cache } from "react";
import { eq, asc } from "drizzle-orm";
import { db, personas, userPersonas } from "./db/client";
import {
  safeParsePersonaProfile,
  type PersonaProfile,
} from "./schema/persona";

// Per-request cache (React cache). Each server request hydrates once.
export const getPersonaSlugsForUser = cache(
  async (userId: string): Promise<string[]> => {
    const rows = await db
      .select({ slug: personas.slug })
      .from(userPersonas)
      .innerJoin(personas, eq(userPersonas.personaId, personas.id))
      .where(eq(userPersonas.userId, userId));
    return rows.map((r) => r.slug);
  }
);

export type PersonaRecord = {
  id: string;
  slug: string;
  name: string;
  short: string;
  profile: PersonaProfile | null;
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
export const getAllPersonas = cache(async (): Promise<PersonaRecord[]> => {
  const rows = await db
    .select({
      id: personas.id,
      slug: personas.slug,
      name: personas.name,
      short: personas.short,
      profile: personas.profile,
    })
    .from(personas)
    .orderBy(asc(personas.slug));
  return rows.map((r) => ({
    id: r.id,
    slug: r.slug,
    name: r.name,
    short: r.short,
    profile: parseMaybeProfile(r.slug, r.profile),
  }));
});

// Single persona by slug. Returns null if the slug doesn't exist.
export const getPersonaBySlug = cache(
  async (slug: string): Promise<PersonaRecord | null> => {
    const rows = await db
      .select({
        id: personas.id,
        slug: personas.slug,
        name: personas.name,
        short: personas.short,
        profile: personas.profile,
      })
      .from(personas)
      .where(eq(personas.slug, slug))
      .limit(1);
    if (rows.length === 0) return null;
    const r = rows[0];
    return {
      id: r.id,
      slug: r.slug,
      name: r.name,
      short: r.short,
      profile: parseMaybeProfile(r.slug, r.profile),
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
