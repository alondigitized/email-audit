// One-shot: regenerate the persona narrative for every existing
// inventory audit using the v2 prompt (three H3 sections, no score
// line). Reuses the audit row's inventory blob — no re-scrape,
// no Claude, no per-row cost (Ollama local).
//
// Usage:
//   node site-monitor/inventory/regen-narrative.mjs           # dry run
//   node site-monitor/inventory/regen-narrative.mjs --confirm

import fs from 'node:fs';
import path from 'node:path';
import { neon } from '/Users/alontsang/.openclaw-walker/workspace/audit-pipeline/node_modules/@neondatabase/serverless/index.mjs';
import { generateNarrative } from './narrative.mjs';

const REPO_ROOT = '/Users/alontsang/.openclaw-walker/workspace';

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
loadEnv(path.join(REPO_ROOT, 'site-monitor', '.env'));
loadEnv(path.join(REPO_ROOT, 'site', '.env.local'));

const sql = neon(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);
const confirmed = process.argv.includes('--confirm');

// Pull every inventory audit. Keep the inventory blob, the persona's
// display name (resolved from the slug below), and the audit timestamp
// for logging.
const rows = await sql`
  SELECT a.slug,
         a.persona,
         a.data->'inventory'->'scope' AS scope,
         a.data->'inventory'->'totals' AS totals,
         a.data->'inventory'->'plps' AS plps,
         p.name AS persona_name
  FROM audit a
  LEFT JOIN persona p ON p.slug = a.persona
  WHERE a.type = 'inventory'
  ORDER BY a.timestamp DESC`;

console.log(`${rows.length} inventory audits to regen`);

if (!confirmed) {
  for (const r of rows) console.log(`  · ${r.slug}  (${r.persona_name ?? r.persona})`);
  console.log('\nDRY RUN — pass --confirm to write.');
  process.exit(0);
}

let ok = 0;
let failed = 0;

for (const r of rows) {
  try {
    const narrative = await generateNarrative({
      scope: typeof r.scope === 'string' ? r.scope : (r.scope?.value ?? 'inventory'),
      totals: r.totals,
      plps: r.plps,
      displayName: r.persona_name ?? r.persona,
    });

    // Re-prepend the headline summary line the renderer expects to strip
    // ("## Inventory summary\n\n**N styles · ...**") so stripInventorySummary
    // continues to behave the same as for new audits.
    const t = r.totals;
    const pct = (Number(t.avg_size_coverage) * 100).toFixed(1);
    const summary = [
      '## Inventory summary',
      '',
      `**${t.styles} styles · ${t.variants} (color, width) variants · ${pct}% avg size coverage**`,
      '',
    ].join('\n');
    const fullMd = `${summary}\n${narrative}`;

    // Update audit.data.review.raw_markdown
    await sql`
      UPDATE audit
      SET data = jsonb_set(data, '{review,raw_markdown}', to_jsonb(${fullMd}::text)),
          updated_at = NOW()
      WHERE slug = ${r.slug}`;

    // Mirror into reaction.review_data.raw_markdown
    await sql`
      UPDATE reaction
      SET review_data = jsonb_set(review_data, '{raw_markdown}', to_jsonb(${fullMd}::text)),
          updated_at = NOW()
      WHERE slug = ${r.slug}`;

    console.log(`  ✓ ${r.slug}`);
    ok++;
  } catch (err) {
    console.error(`  ✗ ${r.slug}: ${err.message.slice(0, 200)}`);
    failed++;
  }
}

console.log(`\ndone: ${ok} regenerated, ${failed} failed`);
