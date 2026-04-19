#!/usr/bin/env node
// One-shot: populate vaults/{persona}/audits/{slug}.md for every audit in
// Postgres. Safe to re-run — writeVaultNote overwrites atomically.
//
// Source of truth is the `audit` table. Assumes DATABASE_URL is set.
// Walks personas independently so each persona's vault gets a "Recent
// history" index scoped to its own audits.

import path from 'node:path';
import url from 'node:url';
import { neon } from '@neondatabase/serverless';
import { writeVaultNote } from './vault-writer.mjs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');

async function main() {
  const dbUrl = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!dbUrl) {
    console.error('DATABASE_URL or DATABASE_URL_UNPOOLED required');
    process.exit(1);
  }
  const sql = neon(dbUrl);

  // Oldest first so each note's "Recent history" points only at already-
  // written predecessors.
  const rows = await sql`
    SELECT slug, persona, data FROM audit
    ORDER BY timestamp ASC
  `;
  console.log(`backfilling ${rows.length} vault notes`);

  let wrote = 0;
  let skipped = 0;
  let failed = 0;
  for (const row of rows) {
    if (!row.persona) { skipped++; continue; }
    try {
      await writeVaultNote({
        auditData: row.data,
        personaSlug: row.persona,
        repoRoot: REPO,
      });
      wrote++;
      if (wrote % 50 === 0) console.log(`... ${wrote}/${rows.length}`);
    } catch (err) {
      console.error(`fail   ${row.slug}: ${err.message}`);
      failed++;
    }
  }
  console.log(`\ndone. ${wrote} written, ${skipped} skipped, ${failed} failed.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
