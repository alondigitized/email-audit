// One-shot: republish artifact dirs that have a review.txt but no
// corresponding row in the `audit` table. Happens when the daemon's
// publishSite() throws (e.g. DB over quota) — markSeen() runs anyway,
// so the message is "completed" with on-disk artifacts but no DB row.
//
// This script reuses the existing audit-data.json on disk; it does NOT
// re-run Claude. R2 upload of render.png is best-effort. Vault note
// rewrite is also best-effort.
//
// Usage:
//   node audit-pipeline/catchup-orphan-artifacts.mjs --confirm

import fs from 'node:fs';
import path from 'node:path';
import { neon } from '@neondatabase/serverless';
import { auditDataSchema } from '../site/lib/schema/audit.mjs';
import { upsertAuditRow, upsertExperienceAndReaction } from './publish.mjs';
import {
  putMedia,
  auditMediaKey,
  mediaConfigured,
} from './media.mjs';
import { writeVaultNote } from './vault-writer.mjs';

const REPO_ROOT = '/Users/alontsang/.openclaw-walker/workspace';
const ARTIFACTS = path.join(REPO_ROOT, 'reports', 'email-artifacts');

function loadEnv(p) {
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!m) continue;
    let v = m[2];
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    if (process.env[m[1]] === undefined) process.env[m[1]] = v;
  }
}
loadEnv(path.join(REPO_ROOT, 'email-monitor', '.env'));
loadEnv(path.join(REPO_ROOT, 'site', '.env.local'));

const sql = neon(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);
const confirmed = process.argv.includes('--confirm');

const dirs = fs.readdirSync(ARTIFACTS).filter((d) =>
  fs.existsSync(path.join(ARTIFACTS, d, 'review.txt'))
);
const knownRows = await sql`SELECT slug FROM audit`;
const known = new Set(knownRows.map((r) => r.slug));
const orphans = dirs.filter((d) => !known.has(d));
console.log(`orphans: ${orphans.length}`);

if (!confirmed) {
  console.log('DRY RUN — pass --confirm to republish.');
  for (const o of orphans) console.log(`  · ${o}`);
  process.exit(0);
}

let ok = 0;
let skipped = 0;
let failed = 0;

for (const slug of orphans) {
  const dir = path.join(ARTIFACTS, slug);
  const auditDataPath = path.join(dir, 'audit-data.json');
  if (!fs.existsSync(auditDataPath)) {
    console.warn(`skip ${slug}: no audit-data.json`);
    skipped++;
    continue;
  }
  const data = JSON.parse(fs.readFileSync(auditDataPath, 'utf8'));

  // Re-upload render.png to R2 if it's on disk and not already keyed
  const renderSrc = path.join(dir, 'email-webview-render.png');
  if (mediaConfigured() && fs.existsSync(renderSrc) && !data.assets?.render_image_key) {
    try {
      const key = await putMedia({
        filePath: renderSrc,
        key: auditMediaKey(slug, 'render.png'),
        contentType: 'image/png',
      });
      data.assets = data.assets ?? {};
      data.assets.render_image_key = key;
    } catch (err) {
      console.warn(`r2 reupload failed for ${slug}: ${err.message.slice(0, 200)}`);
    }
  }

  try {
    auditDataSchema.parse(data);
    await upsertAuditRow({ slug, data });
    await upsertExperienceAndReaction({ slug, data });
    try {
      await writeVaultNote({
        auditData: data,
        personaSlug: data.persona,
        repoRoot: REPO_ROOT,
      });
    } catch (err) {
      console.warn(`vault write failed for ${slug}: ${err.message.slice(0, 200)}`);
    }
    console.log(`  ✓ ${slug}`);
    ok++;
  } catch (err) {
    console.error(`  ✗ ${slug}: ${err.message.slice(0, 300)}`);
    failed++;
  }
}

console.log(`\ndone: ${ok} republished, ${skipped} skipped, ${failed} failed`);
