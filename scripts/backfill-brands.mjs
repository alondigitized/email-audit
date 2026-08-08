#!/usr/bin/env node
/**
 * One-off: seed the brand table from observed data and stamp brand_slug on
 * every experience, so cross-channel brand views work for history, not just
 * new rows.
 *
 *   node scripts/backfill-brands.mjs           # dry run
 *   node scripts/backfill-brands.mjs --apply
 *
 * Resolution per experience type:
 *   email               sender apex (brand_domain)
 *   site/inventory/qa   journey URL apex (assets.webview_url)
 *
 * Persona OBSERVES edge: set only where a persona is demonstrably
 * single-brand — >=80% of its email volume from one apex, or a non-email
 * persona whose journeys all target one apex. Multi-brand inboxes (walker,
 * rae-l) stay NULL by design; their rows resolve individually.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from '../site-monitor/node_modules/dotenv/lib/main.js';
import { neon } from '../audit-pipeline/node_modules/@neondatabase/serverless/index.mjs';
import { apexOf, slugFromApex, nameFromApex } from '../audit-pipeline/brands.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', 'email-monitor', '.env') });

const APPLY = process.argv.includes('--apply');
const sql = neon(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);

// ── 1. collect every apex we've ever observed ─────────────────────────────
const senderRows = await sql`
  SELECT brand_domain d, count(*)::int c FROM experience
  WHERE brand_domain IS NOT NULL GROUP BY 1`;
const urlRows = await sql`
  SELECT assets->>'webview_url' d, count(*)::int c FROM experience
  WHERE type IN ('site','inventory','qa') AND assets->>'webview_url' IS NOT NULL GROUP BY 1`;

const apexCounts = new Map();
for (const r of [...senderRows, ...urlRows]) {
  const apex = apexOf(r.d);
  if (!apex) continue;
  apexCounts.set(apex, (apexCounts.get(apex) ?? 0) + r.c);
}

// Group apexes by derived slug — emails.skechers.com and www.skechers.com
// both collapse to skechers.com, but a brand with two genuine apexes whose
// first labels match (rare) also folds here.
const bySlug = new Map();
for (const [apex, count] of apexCounts) {
  const slug = slugFromApex(apex);
  if (!slug) continue;
  if (!bySlug.has(slug)) bySlug.set(slug, { domains: [], count: 0 });
  const b = bySlug.get(slug);
  b.domains.push(apex);
  b.count += count;
}

console.log(`observed ${apexCounts.size} apex domains -> ${bySlug.size} brands`);
const top = [...bySlug.entries()].sort((a, b) => b[1].count - a[1].count).slice(0, 8);
top.forEach(([slug, b]) => console.log(`  ${slug.padEnd(18)} ${String(b.count).padStart(5)}  [${b.domains.join(', ')}]`));

// ── 2. write brands ───────────────────────────────────────────────────────
if (APPLY) {
  for (const [slug, b] of bySlug) {
    await sql`
      INSERT INTO brand (slug, name, domains)
      VALUES (${slug}, ${nameFromApex(b.domains[0])}, ${JSON.stringify([...new Set(b.domains)])}::jsonb)
      ON CONFLICT (slug) DO UPDATE SET
        domains = (
          SELECT jsonb_agg(DISTINCT x) FROM jsonb_array_elements_text(brand.domains || EXCLUDED.domains) x
        )`;
  }
  console.log(`brands upserted: ${bySlug.size}`);
}

// ── 3. stamp experiences ──────────────────────────────────────────────────
// Set-based updates: resolve in JS, apply per (apex -> slug) group.
const apexToSlug = new Map();
for (const [slug, b] of bySlug) for (const d of b.domains) apexToSlug.set(d, slug);

let emailStamped = 0, urlStamped = 0;
if (APPLY) {
  for (const [apex, slug] of apexToSlug) {
    // email rows: brand_domain is a host; match host == apex or *.apex
    const r1 = await sql`
      UPDATE experience SET brand_slug = ${slug}
      WHERE brand_slug IS NULL AND brand_domain IS NOT NULL
        AND (brand_domain = ${apex} OR brand_domain LIKE ${'%.' + apex})
      RETURNING id`;
    emailStamped += r1.length;
    // journey rows: webview_url contains the apex host
    const r2 = await sql`
      UPDATE experience SET brand_slug = ${slug}
      WHERE brand_slug IS NULL AND type IN ('site','inventory','qa')
        AND (assets->>'webview_url' ~* ${'//(www\\.)?([a-z0-9-]+\\.)*' + apex.replace('.', '\\.') + '(/|$)'})
      RETURNING id`;
    urlStamped += r2.length;
  }
  console.log(`experiences stamped: email=${emailStamped} journey=${urlStamped}`);
  const left = await sql`SELECT type, count(*)::int c FROM experience WHERE brand_slug IS NULL GROUP BY 1`;
  console.log('unresolved:', left.map((x) => `${x.type}=${x.c}`).join(' ') || '(none)');
}

// ── 4. persona OBSERVES edge for single-brand personas ────────────────────
const personaMix = await sql`
  SELECT persona_slug, brand_slug, count(*)::int c
  FROM experience WHERE brand_slug IS NOT NULL
  GROUP BY 1, 2`;
const perPersona = new Map();
for (const r of personaMix) {
  if (!perPersona.has(r.persona_slug)) perPersona.set(r.persona_slug, []);
  perPersona.get(r.persona_slug).push(r);
}
let observes = 0;
for (const [persona, mix] of perPersona) {
  const total = mix.reduce((a, m) => a + m.c, 0);
  const topBrand = mix.sort((a, b) => b.c - a.c)[0];
  if (total >= 3 && topBrand.c / total >= 0.8) {
    observes += 1;
    if (APPLY) {
      await sql`UPDATE persona SET brand_slug = ${topBrand.brand_slug} WHERE slug = ${persona}`;
    }
  }
}
console.log(`single-brand personas (>=80% one brand): ${observes}`);

if (!APPLY) console.log('\nDRY RUN — pass --apply to write.');
