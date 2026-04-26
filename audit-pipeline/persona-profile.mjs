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
    // Multi-target journey config (optional). Site-monitor reads this to
    // build a journey with multiple shopping intents in one run — Martha
    // shopping for her 5yo girl AND 9yo boy, for example.
    targets: Array.isArray(j.targets) ? j.targets : [],
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
 * Report an onboarding step's status back to the DB. Used by
 * scripts/onboard-persona.mjs after each laptop-side step (.env write,
 * cookie capture, LaunchAgent install, etc.) so the admin UI's wizard
 * can live-poll progress. Best-effort — logs and returns on DB failure
 * so the bootstrap keeps going even if Neon is down.
 *
 * @param {string} slug
 * @param {string} key — free-form identifier ("env", "cookies", "plist", ...)
 * @param {"pending"|"done"|"failed"} status
 * @param {string} [detail] — one-line summary surfaced in the UI
 */
export async function reportOnboardingStep(slug, key, status, detail) {
  const u = dbUrl();
  if (!u) return;
  try {
    const sql = neon(u);
    const rows = await sql`SELECT last_status FROM persona WHERE slug = ${slug} LIMIT 1`;
    if (rows.length === 0) return;
    const current = rows[0].last_status || {};
    const nextOnboarding = {
      ...(current.onboarding || {}),
      [key]: {
        status,
        at: new Date().toISOString(),
        ...(detail ? { detail } : {}),
      },
    };
    const next = { ...current, onboarding: nextOnboarding };
    await sql`UPDATE persona SET last_status = ${next}::jsonb WHERE slug = ${slug}`;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`reportOnboardingStep: DB write failed for ${slug}/${key}: ${msg.slice(0, 200)}`);
  }
}

/**
 * Phase D — flip a subscription_jobs row from manual_pending → manual_done
 * when the persona's inbox receives the brand's first email. The email-
 * monitor caller passes the audit's persona slug + the From-domain it just
 * delivered. Best-effort; missing rows are just no-ops.
 *
 * Brand domains can include subdomains (newsletter.skechers.com); we match
 * on the registrable suffix being a substring of brand_domain or vice versa
 * so "skechers.com" matches "marketing.skechers.com".
 *
 * @param {string} personaSlug
 * @param {string} fromDomain — the email's From-domain (lowercased)
 */
export async function noteSubscriptionConfirmed(personaSlug, fromDomain) {
  const u = dbUrl();
  if (!u || !personaSlug || !fromDomain) return;
  try {
    const sql = neon(u);
    const lower = String(fromDomain).toLowerCase().trim();
    // Match either direction: brand_domain is a suffix of fromDomain (subdomain
    // case) or fromDomain is a suffix of brand_domain (rare; e.g. apex match).
    await sql`
      UPDATE subscription_job
      SET status = 'manual_done', updated_at = NOW()
      WHERE persona_slug = ${personaSlug}
        AND status IN ('queued', 'manual_pending', 'auto_succeeded')
        AND (
          ${lower} LIKE '%' || brand_domain
          OR brand_domain LIKE '%' || ${lower}
        )
    `;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`noteSubscriptionConfirmed: ${personaSlug} ${fromDomain}: ${msg.slice(0, 200)}`);
  }
}

/**
 * Record a cookies-captured timestamp on the persona row. Called by
 * onboard-persona.mjs after save-cookies.mjs completes successfully.
 */
export async function reportCookiesCaptured(slug, ts, count) {
  const u = dbUrl();
  if (!u) return;
  try {
    const sql = neon(u);
    const rows = await sql`SELECT last_status FROM persona WHERE slug = ${slug} LIMIT 1`;
    if (rows.length === 0) return;
    const current = rows[0].last_status || {};
    const next = {
      ...current,
      last_cookies_at: ts,
      cookies_count: count,
    };
    await sql`UPDATE persona SET last_status = ${next}::jsonb WHERE slug = ${slug}`;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`reportCookiesCaptured: DB write failed for ${slug}: ${msg.slice(0, 200)}`);
  }
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
        AND (profile->'agentmail'->>'inbox_address') LIKE '%@agentmail.to'
    `;
    // Cloudflare-routed personas (addresses ending in @etell.app or anything
    // other than @agentmail.to) deliver via the Worker → /api/email/inbound
    // → email_message table pipeline. They are intentionally excluded here
    // so the email-monitor daemon doesn't try to poll AgentMail for an
    // inbox that doesn't exist on AgentMail.
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
