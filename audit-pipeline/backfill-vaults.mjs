#!/usr/bin/env node
// One-shot: populate vaults/{persona}/audits/{slug}.md for every audit that
// already lives in site/content/audits/. Safe to re-run — writeVaultNote
// overwrites atomically.

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { writeVaultNote } from './vault-writer.mjs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const CONTENT = path.join(REPO, 'site', 'content', 'audits');
const INDEX = path.join(CONTENT, 'index.json');

function main() {
  if (!fs.existsSync(INDEX)) {
    console.error(`no index.json at ${INDEX}`);
    process.exit(1);
  }
  const index = JSON.parse(fs.readFileSync(INDEX, 'utf8'));
  // Oldest first so each note's "Recent history" points only at already-written predecessors.
  const sorted = [...index].sort((a, b) =>
    (a.timestamp_iso ?? '').localeCompare(b.timestamp_iso ?? ''),
  );

  let wrote = 0;
  let skipped = 0;
  let failed = 0;
  for (const entry of sorted) {
    if (!entry.persona) {
      console.log(`skip   ${entry.slug} (no persona)`);
      skipped++;
      continue;
    }
    const auditPath = path.join(CONTENT, entry.slug, 'audit.json');
    if (!fs.existsSync(auditPath)) {
      console.log(`skip   ${entry.slug} (no audit.json)`);
      skipped++;
      continue;
    }
    try {
      const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'));
      writeVaultNote({
        auditData: audit,
        personaSlug: entry.persona,
        repoRoot: REPO,
        siteIndex: index,
      });
      wrote++;
      if (wrote % 50 === 0) console.log(`... ${wrote} written`);
    } catch (err) {
      console.error(`fail   ${entry.slug}: ${err.message}`);
      failed++;
    }
  }
  console.log(`\ndone. ${wrote} written, ${skipped} skipped, ${failed} failed.`);
}

main();
