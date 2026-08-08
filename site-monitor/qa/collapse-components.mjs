#!/usr/bin/env node
/**
 * Backfill component_key on existing defects and collapse cross-page copies.
 *
 * Global nav, the offer drawer and the country-selector modal render on every
 * page, so the URL-scoped dedupe key filed the same bug once per page — the
 * first full sweep produced 12 rows for 4 real issues. This folds those into
 * one row each, recording the extra pages in also_seen_on so the surviving
 * report reads "site-wide, also on N pages" instead of vanishing.
 *
 * Keeps the oldest row of each component group; suppresses the rest with a
 * reason, so nothing is deleted and the collapse is auditable.
 *
 *   node site-monitor/qa/collapse-components.mjs           # dry run
 *   node site-monitor/qa/collapse-components.mjs --apply
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { neon } from '../../audit-pipeline/node_modules/@neondatabase/serverless/index.mjs';
import { componentKey } from '../../audit-pipeline/defects.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });
dotenv.config({ path: path.join(__dirname, '..', '..', 'email-monitor', '.env') });

const APPLY = process.argv.includes('--apply');
const sql = neon(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);

const rows = await sql`
  SELECT id, url, defect_type, description, affected_elements, persona_slug,
         status, also_seen_on, created_at
  FROM defect
  WHERE status IN ('candidate', 'verified', 'approved')
  ORDER BY created_at ASC`;

const groups = new Map();
for (const r of rows) {
  const k = componentKey({
    defectType: r.defect_type,
    affectedElements: r.affected_elements,
    description: r.description,
  });
  if (!groups.has(k)) groups.set(k, []);
  groups.get(k).push(r);
}

let collapsed = 0;
for (const [k, members] of groups) {
  const [keep, ...dupes] = members;
  const extraUrls = [
    ...new Set(dupes.map((d) => d.url).filter((u) => u !== keep.url)),
  ];

  console.log(
    `${dupes.length ? '▸' : ' '} ${k}  ${keep.defect_type.padEnd(22)} keep=${keep.persona_slug} ` +
      `${dupes.length ? `collapsing ${dupes.length} (+${extraUrls.length} urls)` : ''}`
  );
  if (dupes.length) {
    console.log(`     ${keep.description.slice(0, 100)}`);
    extraUrls.forEach((u) => console.log(`     also on: ${u}`));
  }

  if (!APPLY) continue;

  await sql`
    UPDATE defect
    SET component_key = ${k},
        also_seen_on = ${JSON.stringify([...(keep.also_seen_on ?? []), ...extraUrls])}::jsonb,
        updated_at = NOW()
    WHERE id = ${keep.id}`;

  for (const d of dupes) {
    await sql`
      UPDATE defect
      SET status = 'suppressed', component_key = ${k},
          reviewed_by = 'component-collapse',
          reviewed_at = NOW(),
          review_note = ${'Same component as ' + keep.id + ' — collapsed to one finding'},
          updated_at = NOW()
      WHERE id = ${d.id}`;
    collapsed += 1;
  }
}

console.log(
  `\n${groups.size} distinct components across ${rows.length} rows; ` +
    `${collapsed} collapsed.${APPLY ? '' : '  DRY RUN — pass --apply.'}`
);
