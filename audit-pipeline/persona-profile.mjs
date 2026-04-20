// Shared daemon-side persona profile loader. Both email-monitor and
// site-monitor import this to avoid talking to `site-monitor/personas/
// {slug}.json` directly — DB is authoritative as of the persona-management
// refactor.
//
// Env contract: reads DATABASE_URL_UNPOOLED or DATABASE_URL (same as the
// other pipeline helpers). Falls back to the legacy JSON file when neither
// is set (local dev without Neon creds).

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { neon } from '@neondatabase/serverless';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const LEGACY_JSON_DIR = path.join(REPO_ROOT, 'site-monitor', 'personas');

function dbUrl() {
  return process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL ?? '';
}

function readLegacyJson(slug) {
  const p = path.join(LEGACY_JSON_DIR, `${slug}.json`);
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return null;
  }
}

// Translate the DB profile shape back to the flat legacy JSON shape the
// daemons already read. Keeps the call sites identical — they just swap
// `readFileSync` for `loadPersonaProfile`.
function profileToLegacyShape(profile) {
  const id = profile.identity || {};
  const j = profile.journey || {};
  return {
    name: id.name,
    age: id.age,
    generation: id.generation,
    gender: id.gender,
    style: id.style,
    shopping_habits: id.shopping_habits,
    tech_comfort: id.tech_comfort,
    focus_areas: id.focus_areas ?? [],
    search_term: j.search_term ?? '',
    category_path: j.category_path ?? [],
    site: j.site ?? '',
    credentials_env_prefix: j.credentials_env_prefix ?? '',
  };
}

/**
 * Load a persona's profile in the flat legacy JSON shape. Tries DB first,
 * falls back to the filesystem JSON, returns null if neither resolves.
 */
export async function loadPersonaProfile(slug) {
  const u = dbUrl();
  if (u) {
    try {
      const sql = neon(u);
      const rows = await sql`SELECT profile FROM persona WHERE slug = ${slug} LIMIT 1`;
      if (rows.length > 0 && rows[0].profile) {
        return profileToLegacyShape(rows[0].profile);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(`persona-profile: DB lookup failed for ${slug}: ${msg.slice(0, 200)}`);
    }
  }
  return readLegacyJson(slug);
}

/**
 * Fetch the inbox→persona map from the DB. Shape matches the legacy
 * `email-monitor/inboxes.json` file: Array<{ inbox: string, persona: string }>.
 * Returns an empty array when the DB isn't reachable or no personas have
 * an inbox address set.
 */
export async function loadInboxMap() {
  const u = dbUrl();
  if (!u) return [];
  try {
    const sql = neon(u);
    const rows = await sql`
      SELECT slug, profile
      FROM persona
      WHERE profile IS NOT NULL
        AND (profile->'agentmail'->>'inbox_address') IS NOT NULL
    `;
    return rows
      .map((r) => ({
        inbox: r.profile?.agentmail?.inbox_address,
        persona: r.slug,
      }))
      .filter((e) => e.inbox);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`persona-profile: inbox map DB lookup failed: ${msg.slice(0, 200)}`);
    return [];
  }
}
