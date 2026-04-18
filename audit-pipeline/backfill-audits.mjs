#!/usr/bin/env node
// One-shot backfill: read every site/content/audits/{slug}/audit.json on
// disk, zod-validate, upsert into the `audit` table. Safe to re-run —
// upserts by slug. Phase 2 of the foundation refactor.
//
// Usage:
//   DATABASE_URL=...  node backfill-audits.mjs
//   DATABASE_URL=...  node backfill-audits.mjs --dry
//
// --dry prints what would change without writing (validates + counts).

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { upsertAuditRow, dbConfigured } from './publish.mjs';
import { auditDataSchema } from './audit-schema.mjs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const CONTENT = path.join(REPO, 'site', 'content', 'audits');

async function main() {
  const dry = process.argv.includes('--dry');
  if (!dry && !dbConfigured()) {
    console.error('DATABASE_URL (or DATABASE_URL_UNPOOLED) required unless --dry');
    process.exit(1);
  }
  if (!fs.existsSync(CONTENT)) {
    console.error(`No ${CONTENT} directory — nothing to backfill`);
    process.exit(1);
  }

  const slugs = fs
    .readdirSync(CONTENT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  let ok = 0;
  let invalid = 0;
  let failed = 0;
  const invalidSlugs = [];

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const p = path.join(CONTENT, slug, 'audit.json');
    if (!fs.existsSync(p)) continue;

    let data;
    try {
      data = JSON.parse(fs.readFileSync(p, 'utf8'));
    } catch (err) {
      failed++;
      console.error(`parse fail  ${slug}: ${err.message}`);
      continue;
    }

    const parsed = auditDataSchema.safeParse(data);
    if (!parsed.success) {
      invalid++;
      invalidSlugs.push(slug);
      const codes = parsed.error.issues
        .map((iss) => iss.path.join('.') + ':' + iss.code)
        .slice(0, 3)
        .join(',');
      console.error(`invalid     ${slug}: ${codes}`);
      continue;
    }

    if (dry) {
      ok++;
      continue;
    }

    try {
      await upsertAuditRow({ slug, data: parsed.data });
      ok++;
    } catch (err) {
      failed++;
      console.error(`upsert fail ${slug}: ${String(err).slice(0, 200)}`);
    }

    if ((i + 1) % 50 === 0) {
      console.log(`... ${i + 1}/${slugs.length} processed (${ok} ok)`);
    }
  }

  console.log(
    `\ndone. ${ok} upserted, ${invalid} invalid (schema drift), ${failed} failed.`,
  );
  if (invalidSlugs.length) {
    console.log('invalid slugs (first 10):', invalidSlugs.slice(0, 10));
  }
  if (failed || invalid) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
