// Producer-side DB writer for QA defects.
//
// The QA secret-shopper squad (site-monitor/qa/) files *candidate* defects
// here. Nothing in this module submits anything to Skechers — filing into
// the "See Something? SAY Something!" Smartsheet form is a deliberate human
// step in /admin/defect-queue. This module only records what was found.
//
// The controlled vocabularies below mirror that form's dropdowns exactly
// (captured 2026-08-07). They are duplicated from site/lib/db/schema.ts
// because this side of the codebase is plain .mjs with no TS import path;
// keep the two in sync — schema.ts is the source of truth.

import { createHash } from 'node:crypto';
import { neon } from '@neondatabase/serverless';

export const DEFECT_LOCATIONS = ['Desktop Site', 'Mobile Site', 'Mobile App'];

export const DEFECT_AREAS = [
  'Off-site',
  'Site search',
  'Homepage',
  'PLP',
  'PDP',
  'Cart',
  'Checkout',
  'MyAccount / Order History',
  'Loyalty Dashboard',
  'Social (off-site)',
];

export const DEFECT_DEVICES = [
  'iPhone',
  'Android Phone',
  'Other smartphone',
  'Mac Laptop',
  'Mac Desktop',
  'Windows PC',
  'Chromebook',
  'Other',
];

export const DEFECT_BROWSERS = ['Chrome', 'Mac OS Sonoma'];

// Mirror of DEFECT_TYPES in site/lib/db/schema.ts — keep in sync.
// Constrained on purpose: these drive the dedupe fingerprint, and free text
// there is what made the first implementation duplicate on every sweep.
export const DEFECT_TYPES = [
  'zero_results', 'http_error', 'broken_link', 'dead_control', 'console_error',
  'filter_wrong_results', 'image_not_loading',
  'typo', 'grammar', 'placeholder_text', 'truncated_text',
  'promo_price_mismatch', 'inconsistent_naming', 'stale_promo',
  'missing_title', 'title_length', 'missing_meta_description',
  'missing_canonical', 'wrong_canonical', 'missing_h1', 'duplicate_h1',
  'missing_structured_data', 'invalid_structured_data', 'missing_alt',
  'noindex_unexpected', 'broken_hreflang',
  'axe_violation', 'contrast', 'keyboard_trap', 'focus_order',
  'missing_form_label', 'slow_lcp', 'layout_shift',
  'other',
];
export const DEFECT_URGENCIES = ['High', 'Medium', 'Low'];
export const DEFECT_CATEGORIES = [
  'functional',
  'copy',
  'seo',
  'accessibility',
  'performance',
];

function db() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL_UNPOOLED or DATABASE_URL required');
  return neon(url);
}

export function dbConfigured() {
  return Boolean(process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL);
}

export async function getTenantId(slug) {
  const sql = db();
  const rows = await sql`SELECT id FROM tenant WHERE slug = ${slug} LIMIT 1`;
  return rows[0]?.id ?? null;
}

/**
 * Stable fingerprint for a defect class.
 *
 * The first version of this hashed a free-text "signature" the model emitted
 * per finding. That did not work: the model phrases the same defect
 * differently every run ("multiple-h1" / "h1-duplicate"), so identical
 * findings produced different keys and duplicated on every sweep. Verified
 * empirically — two sweeps of one page produced four rows.
 *
 * The fingerprint now uses only values from fixed vocabularies:
 * persona + area + normalised URL path + defectType. Nothing model-authored
 * enters the hash. The URL is reduced to its path with trailing ids
 * collapsed, so the same fault on many product pages folds into one class.
 */
export function dedupeKey({ personaSlug, area, url, defectType }) {
  let urlPath = '';
  try {
    urlPath = new URL(url).pathname.replace(/\/\d[\w-]*$/, '/:id').replace(/\/$/, '') || '/';
  } catch {
    urlPath = String(url || '');
  }
  const basis = [personaSlug, area, urlPath, defectType || 'other'].join('|');
  return createHash('sha1').update(basis).digest('hex').slice(0, 20);
}

/**
 * Reject anything the intake form would refuse, before it ever reaches a
 * human reviewer. Returns an array of problems; empty means filable.
 *
 * The screenshot rule is not ours either — the form marks the upload
 * required, so an evidence-free defect is structurally unfilable.
 */
export function validateDefect(d) {
  const errs = [];
  if (!DEFECT_LOCATIONS.includes(d.location)) errs.push(`location: ${d.location}`);
  if (!DEFECT_AREAS.includes(d.area)) errs.push(`area: ${d.area}`);
  if (!DEFECT_URGENCIES.includes(d.urgency)) errs.push(`urgency: ${d.urgency}`);
  if (!DEFECT_CATEGORIES.includes(d.category)) errs.push(`category: ${d.category}`);
  if (d.device && !DEFECT_DEVICES.includes(d.device)) errs.push(`device: ${d.device}`);
  if (d.browser && !DEFECT_BROWSERS.includes(d.browser)) errs.push(`browser: ${d.browser}`);
  if (!d.url || !/^https?:\/\//.test(d.url)) errs.push('url must be absolute');
  if (!d.description || d.description.trim().length < 20) {
    errs.push('description too short to be actionable');
  }
  if (!Array.isArray(d.evidence) || d.evidence.length === 0) {
    errs.push('at least one screenshot is required by the intake form');
  }
  if (d.defectType && !DEFECT_TYPES.includes(d.defectType)) {
    errs.push(`defectType: ${d.defectType}`);
  }
  return errs;
}

/**
 * Insert candidate defects, skipping any whose dedupe_key already exists in a
 * state that means "we already dealt with this" — submitted, rejected or
 * suppressed. Re-reporting a known issue is the fastest way to lose standing
 * with the team receiving these, so the guard is deliberately broad.
 *
 * Returns { inserted, skippedDuplicate, skippedInvalid: [{defect, errors}] }.
 */
export async function insertCandidateDefects(rows, { tenantId, experienceId } = {}) {
  const sql = db();
  const out = { inserted: 0, skippedDuplicate: 0, skippedInvalid: [] };
  if (!rows?.length) return out;

  for (const d of rows) {
    const errors = validateDefect(d);
    if (errors.length) {
      out.skippedInvalid.push({ defect: d, errors });
      continue;
    }

    const key =
      d.dedupeKey ||
      dedupeKey({
        personaSlug: d.personaSlug,
        area: d.area,
        url: d.url,
        defectType: d.defectType,
      });

    const seen = await sql`
      SELECT 1 FROM defect
      WHERE dedupe_key = ${key}
        AND status IN ('submitted', 'rejected', 'suppressed', 'candidate', 'verified', 'approved')
      LIMIT 1`;
    if (seen.length) {
      out.skippedDuplicate += 1;
      continue;
    }

    await sql`
      INSERT INTO defect (
        tenant_id, persona_slug, experience_id,
        location, url, area, description, device, browser, urgency,
        reporter_email, evidence, category, defect_type, expected, observed,
        repro_steps, urgency_rationale, confidence, dedupe_key, status
      ) VALUES (
        ${tenantId ?? null}, ${d.personaSlug}, ${experienceId ?? null},
        ${d.location}, ${d.url}, ${d.area}, ${d.description},
        ${d.device ?? null}, ${d.browser ?? null}, ${d.urgency},
        ${d.reporterEmail ?? null}, ${JSON.stringify(d.evidence)}::jsonb,
        ${d.category}, ${d.defectType ?? 'other'}, ${d.expected ?? null},
        ${d.observed ?? null},
        ${JSON.stringify(d.reproSteps ?? [])}::jsonb,
        ${d.urgencyRationale ?? null}, ${d.confidence ?? null},
        ${key}, 'candidate'
      )`;
    out.inserted += 1;
  }
  return out;
}

/** Candidates awaiting the refutation pass. */
export async function loadUnverifiedDefects(limit = 50) {
  const sql = db();
  return sql`
    SELECT id, persona_slug, url, area, category, description, expected,
           observed, repro_steps, urgency
    FROM defect
    WHERE status = 'candidate'
    ORDER BY created_at ASC
    LIMIT ${limit}`;
}

/**
 * Record the outcome of the independent re-test. A candidate that could not
 * be reproduced goes to 'refuted' and never reaches human triage — this is
 * the main defence against spending your review time (and your credibility)
 * on flaky findings.
 */
export async function recordVerification(id, verification) {
  const sql = db();
  // 'unverifiable' survives to human review: it means we had no re-check
  // strategy for the claim, not that the claim is false. Refuting those
  // would silently discard true findings. Everything else that failed to
  // reproduce cleanly — including partial/flaky reproduction — is refuted.
  const status =
    verification.verdict === 'reproduced' || verification.verdict === 'unverifiable'
      ? 'verified'
      : 'refuted';
  await sql`
    UPDATE defect
    SET status = ${status}::defect_status,
        verification = ${JSON.stringify(verification)}::jsonb,
        verified_at = NOW(),
        updated_at = NOW()
    WHERE id = ${id}`;
  return status;
}
