// Producer-side DB writer for audits. Phase 2 of the foundation refactor:
// both daemons call upsertAuditRow() after their existing filesystem write
// so Postgres carries a mirror of site/content/audits/{slug}/audit.json.
// Phase 3 flips the site to read from Postgres; Phase 4 deletes the
// filesystem copy. Until then, this is the dual-write seam.

import { neon } from '@neondatabase/serverless';
import { auditDataSchema } from '../site/lib/schema/audit.mjs';

function db() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL_UNPOOLED or DATABASE_URL required');
  return neon(url);
}

/**
 * Parse "6/10" → 6. Returns null when the score isn't in that shape so the
 * caller (typed numeric column) can store null cleanly.
 */
export function parseScore(scoreStr) {
  if (typeof scoreStr !== 'string') return null;
  const m = scoreStr.match(/^\s*(-?\d+(?:\.\d+)?)\s*\//);
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}

/**
 * Pull the R2 object keys out of an audit payload into a compact catalog.
 * { render: "...", steps: [{ step, viewport, fullpage }, ...] }
 */
export function extractMediaKeys(data) {
  const assets = data?.assets ?? {};
  const out = {};
  if (assets.render_image_key) out.render = assets.render_image_key;
  if (Array.isArray(assets.journey_steps)) {
    const steps = [];
    for (const s of assets.journey_steps) {
      if (!s) continue;
      const entry = { step: s.step };
      if (s.viewport_screenshot_key) entry.viewport = s.viewport_screenshot_key;
      if (s.fullpage_screenshot_key) entry.fullpage = s.fullpage_screenshot_key;
      if (entry.viewport || entry.fullpage) steps.push(entry);
    }
    if (steps.length) out.steps = steps;
  }
  return out;
}

/**
 * UPSERT a single audit row. Idempotent — repeated calls on the same slug
 * replace data/media_keys/score/timestamp and bump updated_at. Caller
 * should have zod-validated `data` already; this re-parses defensively.
 */
export async function upsertAuditRow({ slug, data }) {
  const parsed = auditDataSchema.parse(data);
  const persona = parsed.persona ?? null;
  if (!persona) {
    throw new Error(`audit ${slug} missing persona — cannot upsert`);
  }
  const type = parsed.type ?? 'email';
  const timestamp = parsed.email?.timestamp_iso;
  if (!timestamp) {
    throw new Error(`audit ${slug} missing email.timestamp_iso — cannot upsert`);
  }
  const score = parseScore(parsed.review?.score);
  const mediaKeys = extractMediaKeys(parsed);

  const sql = db();
  await sql`
    INSERT INTO audit (slug, persona, type, timestamp, score, data, media_keys, updated_at)
    VALUES (${slug}, ${persona}, ${type}, ${timestamp}, ${score},
            ${JSON.stringify(parsed)}::jsonb, ${JSON.stringify(mediaKeys)}::jsonb, NOW())
    ON CONFLICT (slug) DO UPDATE SET
      persona = EXCLUDED.persona,
      type = EXCLUDED.type,
      timestamp = EXCLUDED.timestamp,
      score = EXCLUDED.score,
      data = EXCLUDED.data,
      media_keys = EXCLUDED.media_keys,
      updated_at = NOW()
  `;
}

/**
 * Delete an audit row. Used by verify-pipeline cleanup so mock audits
 * don't linger in the DB across test runs.
 */
export async function deleteAuditRow(slug) {
  const sql = db();
  await sql`DELETE FROM audit WHERE slug = ${slug}`;
}

/**
 * Summaries for a persona's audits, newest first. Used by the vault-writer
 * to pick "recent history" wikilinks. Shape matches AuditSummary.
 */
export async function listAuditSummariesForPersona(personaSlug, limit = 100) {
  const sql = db();
  const rows = await sql`
    SELECT data FROM audit
    WHERE persona = ${personaSlug}
    ORDER BY timestamp DESC
    LIMIT ${limit}
  `;
  return rows.map((r) => {
    const d = r.data;
    return {
      slug: d.slug,
      subject: d.email?.subject ?? '',
      from_display_name: d.email?.from_display_name ?? '',
      timestamp_iso: d.email?.timestamp_iso ?? null,
      score: d.review?.score ?? '',
      qa_summary: d.qa?.summary ?? null,
      has_image: !!d.assets?.render_image_key,
      type: d.type ?? 'email',
      persona: d.persona ?? null,
    };
  });
}

/**
 * True when DATABASE_URL is present. Callers (daemons today) use this to
 * skip DB writes gracefully in local dev without DB creds — the filesystem
 * publish path still works on its own during dual-write.
 */
export function dbConfigured() {
  return !!(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);
}
