/**
 * One-shot backfill: merge the legacy site-monitor/personas/{slug}.json
 * identity + journey config into persona.profile JSONB for every existing
 * persona row. Safe to re-run (idempotent: updates every row with the
 * latest merged shape).
 *
 * Usage:
 *   cd site && DATABASE_URL_UNPOOLED=... npx tsx scripts/backfill-persona-profiles.ts
 *
 * Run after the 0006_add_persona_profile migration is applied.
 */

import fs from "node:fs";
import path from "node:path";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { personas } from "../lib/db/schema";
import {
  personaProfileSchema,
  type PersonaProfile,
} from "../lib/schema/persona";

const REPO = path.resolve(__dirname, "..", "..");
const PERSONA_JSON_DIR = path.join(REPO, "site-monitor", "personas");
const INBOXES_PATH = path.join(REPO, "email-monitor", "inboxes.json");

function loadInboxMap(): Map<string, string> {
  const out = new Map<string, string>();
  if (!fs.existsSync(INBOXES_PATH)) return out;
  try {
    const raw = JSON.parse(fs.readFileSync(INBOXES_PATH, "utf8")) as Array<{
      inbox: string;
      persona: string;
    }>;
    for (const entry of raw) {
      if (entry.persona && entry.inbox) out.set(entry.persona, entry.inbox);
    }
  } catch {
    // tolerate malformed; backfill still succeeds without inbox bindings
  }
  return out;
}

// Deterministic color palette — stable assignment by slug at backfill time.
// Matches the Observable 10 hues used elsewhere so the pills feel cohesive.
const PALETTE = [
  "#4269d0", // sky blue
  "#ff725c", // coral
  "#efb118", // amber
  "#3ca951", // emerald
  "#a463f2", // violet
  "#6cc5b0", // teal
];

function colorForSlug(slug: string, alreadyUsed: Set<string>): string {
  // Prefer a palette color that hasn't been assigned yet; fall back to a
  // hash-derived pick so new personas still get distinct colors.
  for (const c of PALETTE) {
    if (!alreadyUsed.has(c)) {
      alreadyUsed.add(c);
      return c;
    }
  }
  let hash = 0;
  for (let i = 0; i < slug.length; i++)
    hash = (hash * 31 + slug.charCodeAt(i)) | 0;
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

function loadPersonaJson(slug: string): Record<string, unknown> | null {
  const p = path.join(PERSONA_JSON_DIR, `${slug}.json`);
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function buildProfile(
  slug: string,
  json: Record<string, unknown> | null,
  color: string,
  inboxAddress: string | null
): PersonaProfile {
  const get = <T,>(key: string, fallback: T): T =>
    (json && (json[key] as T)) ?? fallback;

  const profile: PersonaProfile = {
    schema_version: 1,
    identity: {
      name: get("name", slug),
      age: get<number>("age", 30),
      generation: get("generation", "Millennial"),
      gender: get("gender", "Other"),
      style: get("style", ""),
      shopping_habits: get("shopping_habits", ""),
      tech_comfort: get("tech_comfort", ""),
      focus_areas: get<string[]>("focus_areas", []),
    },
    journey: {
      site: (json?.site as string) ?? null,
      search_term: (json?.search_term as string) ?? null,
      category_path: get<string[]>("category_path", []),
      credentials_env_prefix: (json?.credentials_env_prefix as string) ?? null,
    },
    agentmail: {
      // Address comes from email-monitor/inboxes.json at backfill time,
      // so the daemon's DB-driven inbox map keeps working without any
      // manual data entry. inbox_id (AgentMail's internal ID) remains
      // null until the admin UI calls the AgentMail API in Phase 4.
      inbox_address: inboxAddress,
      inbox_id: null,
      provisioned_at: inboxAddress ? new Date().toISOString() : null,
    },
    onboarding: {},
    color,
    notes: null,
  };

  // Validate against zod — fails loud if a legacy JSON is malformed.
  return personaProfileSchema.parse(profile);
}

async function main() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url)
    throw new Error("DATABASE_URL_UNPOOLED or DATABASE_URL must be set");
  const db = drizzle(neon(url));

  const rows = await db
    .select({ id: personas.id, slug: personas.slug, name: personas.name })
    .from(personas);

  if (rows.length === 0) {
    console.log("no persona rows to backfill — run seed-personas first.");
    return;
  }

  const usedColors = new Set<string>();
  const inboxMap = loadInboxMap();
  for (const r of rows) {
    const json = loadPersonaJson(r.slug);
    if (!json) {
      console.log(`skip ${r.slug} — no site-monitor/personas/${r.slug}.json`);
      continue;
    }
    const color = colorForSlug(r.slug, usedColors);
    const inboxAddress = inboxMap.get(r.slug) ?? null;
    const profile = buildProfile(r.slug, json, color, inboxAddress);
    await db
      .update(personas)
      .set({ profile })
      .where(eq(personas.id, r.id));
    console.log(
      `wrote ${r.slug.padEnd(12)} color=${color} focus_areas=${profile.identity.focus_areas.length} site=${profile.journey.site ?? "-"} inbox=${inboxAddress ?? "-"}`
    );
  }

  console.log("done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
