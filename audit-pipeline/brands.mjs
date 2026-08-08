// Brand entity resolution.
//
// Turns any observed host — an email sender (emails.skechers.com,
// msgs.skechers.com), a journey URL (www.skechers.com/men/shoes/) — into one
// canonical brand slug, so experiences from every channel join on the same
// entity. Before this, "Skechers" existed only as scattered strings and the
// cross-channel join returned nothing.
//
// Resolution = collapse host to apex domain, look up brands.domains. Unknown
// apexes can be auto-registered (backfill/seeding) or left null (ingest
// default — we don't want a typo'd sender minting a brand entity).

import { neon } from '@neondatabase/serverless';

function db() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL_UNPOOLED or DATABASE_URL required');
  return neon(url);
}

// Second-level public suffixes we're likely to meet. Not a full PSL — the
// corpus is overwhelmingly .com — but keeps co.uk-style apexes correct.
const SECOND_LEVEL_TLDS = new Set([
  'co.uk', 'org.uk', 'ac.uk', 'com.au', 'net.au', 'co.nz', 'co.jp',
  'com.br', 'com.mx', 'co.in', 'com.sg', 'com.hk',
]);

/** emails.skechers.com → skechers.com; https://www.skechers.com/x → skechers.com */
export function apexOf(hostOrUrl) {
  if (!hostOrUrl) return null;
  let host = String(hostOrUrl).toLowerCase().trim();
  if (host.includes('://')) {
    try { host = new URL(host).hostname; } catch { return null; }
  }
  host = host.replace(/^www\./, '').replace(/\.$/, '');
  const parts = host.split('.');
  if (parts.length < 2) return null;
  const lastTwo = parts.slice(-2).join('.');
  if (SECOND_LEVEL_TLDS.has(lastTwo) && parts.length >= 3) {
    return parts.slice(-3).join('.');
  }
  return lastTwo;
}

/** skechers.com → skechers; crateandbarrel.com → crateandbarrel */
export function slugFromApex(apex) {
  return apex ? apex.split('.')[0].replace(/[^a-z0-9-]/g, '') : null;
}

/** skechers → Skechers (display default; curate real casing later). */
export function nameFromApex(apex) {
  const s = slugFromApex(apex);
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : null;
}

// Domain → slug cache. Brands change rarely; producers stamp thousands of
// rows. Refreshed at most once per TTL.
let _cache = null;
let _cacheAt = 0;
const CACHE_TTL_MS = 5 * 60 * 1000;

async function domainMap() {
  if (_cache && Date.now() - _cacheAt < CACHE_TTL_MS) return _cache;
  const sql = db();
  const rows = await sql`SELECT slug, domains FROM brand`;
  const map = new Map();
  for (const r of rows) {
    for (const d of r.domains ?? []) map.set(d, r.slug);
  }
  _cache = map;
  _cacheAt = Date.now();
  return map;
}

export function invalidateBrandCache() {
  _cache = null;
}

/**
 * Resolve a host/URL to a brand slug, or null if no brand owns that apex.
 * Never creates brands — ingest paths must not mint entities from typos or
 * one-off senders. Use ensureBrand for deliberate registration.
 */
export async function resolveBrandSlug(hostOrUrl) {
  const apex = apexOf(hostOrUrl);
  if (!apex) return null;
  const map = await domainMap();
  return map.get(apex) ?? null;
}

/**
 * Register (or extend) a brand for an apex domain. Idempotent: an apex
 * already owned by a brand returns that brand; a new apex whose derived slug
 * exists gets appended to that brand's domains (msgs.skechers.com arriving
 * after skechers.com is the same brand, but so is a second apex like
 * skx.com if its slug is made to match).
 */
export async function ensureBrand(hostOrUrl, { name } = {}) {
  const apex = apexOf(hostOrUrl);
  if (!apex) return null;
  const sql = db();
  const existing = await resolveBrandSlug(apex);
  if (existing) return existing;

  const slug = slugFromApex(apex);
  if (!slug) return null;
  const bySlug = await sql`SELECT slug, domains FROM brand WHERE slug = ${slug} LIMIT 1`;
  if (bySlug.length) {
    const domains = [...new Set([...(bySlug[0].domains ?? []), apex])];
    await sql`UPDATE brand SET domains = ${JSON.stringify(domains)}::jsonb WHERE slug = ${slug}`;
  } else {
    await sql`
      INSERT INTO brand (slug, name, domains)
      VALUES (${slug}, ${name ?? nameFromApex(apex)}, ${JSON.stringify([apex])}::jsonb)
      ON CONFLICT (slug) DO NOTHING`;
  }
  invalidateBrandCache();
  return slug;
}
