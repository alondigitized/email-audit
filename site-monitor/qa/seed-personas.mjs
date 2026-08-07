#!/usr/bin/env node
/**
 * Seed the QA secret-shopper squad into the `persona` table.
 *
 * Idempotent: re-running updates name/short/profile in place rather than
 * inserting duplicates. Personas land in the `skechers` tenant (alongside
 * evelyn-w) with kind='brand', which is what the existing read paths and
 * the /brands/skechers dashboard filter on.
 *
 * Usage:
 *   node site-monitor/qa/seed-personas.mjs            # dry run
 *   node site-monitor/qa/seed-personas.mjs --apply
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { neon } from '../../audit-pipeline/node_modules/@neondatabase/serverless/index.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });
dotenv.config({ path: path.join(__dirname, '..', '..', 'email-monitor', '.env') });

const APPLY = process.argv.includes('--apply');
const defs = JSON.parse(fs.readFileSync(path.join(__dirname, 'personas.json'), 'utf8'));
const shared = defs._shared;

const url = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;
if (!url) {
  console.error('DATABASE_URL not set');
  process.exit(1);
}
const sql = neon(url);

const tenant = await sql`SELECT id FROM tenant WHERE slug = ${shared.tenant} LIMIT 1`;
if (!tenant.length) {
  console.error(`tenant '${shared.tenant}' not found`);
  process.exit(1);
}
const tenantId = tenant[0].id;
console.log(`tenant ${shared.tenant} = ${tenantId}\n`);

for (const [slug, d] of Object.entries(defs)) {
  if (slug.startsWith('_')) continue;

  // `profile` is the same jsonb shape the review prompts already read from.
  const profile = {
    name: d.displayName,
    role: 'QA secret shopper',
    lens: d.lens,
    character: d.character,
    brief: d.brief,
    ignores: d.ignores,
    category: d.category,
    areas: d.areas,
    site: shared.site,
    from_address: d.fromAddress,
    urgency_rubric: shared._urgency_rubric,
  };

  const existing = await sql`SELECT slug FROM persona WHERE slug = ${slug} LIMIT 1`;
  const verb = existing.length ? 'update' : 'insert';
  console.log(`  ${verb.padEnd(6)} ${slug.padEnd(12)} ${d.displayName.padEnd(14)} [${d.category}]`);

  if (!APPLY) continue;

  if (existing.length) {
    await sql`
      UPDATE persona
      SET name = ${d.displayName}, short = ${d.displayName.split(' ')[0]},
          profile = ${JSON.stringify(profile)}::jsonb, tenant_id = ${tenantId}
      WHERE slug = ${slug}`;
  } else {
    await sql`
      INSERT INTO persona (slug, name, short, profile, tenant_id, kind)
      VALUES (${slug}, ${d.displayName}, ${d.displayName.split(' ')[0]},
              ${JSON.stringify(profile)}::jsonb, ${tenantId}, 'brand')`;
  }
}

console.log(APPLY ? '\napplied.' : '\nDRY RUN — pass --apply to write.');
