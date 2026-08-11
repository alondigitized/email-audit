#!/usr/bin/env node
/**
 * The 1038-engagement sweep snapshotted 208 pages, which turned two narrow
 * findings into site-wide ones. Update the queued reports in place rather than
 * filing new ones — three overlapping heading reports would read as noise to a
 * four-person intake team, and volume is a credibility risk in its own right.
 *
 *   node site-monitor/qa/expand-h1-findings.mjs           # dry run
 *   node site-monitor/qa/expand-h1-findings.mjs --apply
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { neon } from '../../audit-pipeline/node_modules/@neondatabase/serverless/index.mjs';
import { putMedia, mediaConfigured } from '../../audit-pipeline/media.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });
dotenv.config({ path: path.join(__dirname, '..', '..', 'email-monitor', '.env') });
const APPLY = process.argv.includes('--apply');
const sql = neon(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);
const EV = '/private/tmp/claude-501/-Users-alontsang--openclaw-walker/9a653e24-86af-4206-bee2-3631dba477b7/scratchpad/evidence';

const NO_H1 = ['/kids/', '/men/shoes/slippers/', '/shoe-finder/', '/back-to-school-guide/',
  '/back-to-school-guide/back-to-school-styles/', '/collaborations/care-bears/',
  '/collaborations/care-bears/care-bears-collection/', '/collaborations/britto/britto-plp/',
  '/dlites-330/', '/m/promo-details/', '/do-not-share-or-sell-my-personal-information/', '/countries.html'];

const missingDesc =
  'Twelve pages render NO <h1> element at all. Confirmed individually against the live site (12 of 12), after a sweep of 208 pages. The affected pages span every content type — a top-level category landing page (/kids/), a product listing page (/men/shoes/slippers/, whose first heading is "Recently Viewed", a utility module), brand collaboration pages (/collaborations/care-bears/, /collaborations/britto/britto-plp/), seasonal guides (/back-to-school-guide/), and utility pages (/m/promo-details/, /countries.html, /do-not-share-or-sell-my-personal-information/). ' +
  'Separately, /men/ and /women/ DO have exactly one H1, but it is a promotional text block reading "Up to 40% OFF Select Styles" positioned roughly 1,600px down the page — the same string /sale/ uses, so three pages share one non-descriptive H1. ' +
  'The correct pattern is already in place elsewhere and was used as a control: /men/shoes/, /women/shoes/ and /work/ each render exactly one descriptive H1 ("Men\'s Shoes", "Women\'s Shoes", "Work") in the page-header slot. That a sibling PLP one level deeper does it correctly while /men/shoes/slippers/ does not shows this is an oversight rather than a design choice.\n\n' +
  'Pages with no H1:\n' + NO_H1.map((p) => `  • ${p}`).join('\n');

const dupDesc =
  'Fifty pages render more than one VISIBLE <h1>. The dominant case is product pages: 45 PDPs each render the product name plus a second H1 reading "Review Snapshot", injected by the third-party reviews widget. The product name differs on every page while "Review Snapshot" is identical, which identifies the reviews component as the source, and makes this systematic across the catalog rather than a one-off. ' +
  'Five non-product pages are also affected: /basketball/ and /m/promo/ render FOUR visible H1s each, and /clothing/accessories/ ("SUNGLASSES", "WATCHES"), /login/ and /m/skechers-plus/ render two. ' +
  'Hidden responsive duplicates were deliberately excluded from this count — the homepage and cart pages each carry extra H1 elements in the DOM but render only one, and are NOT reported here, so this is not a markup-variant artifact.';

const rows = [
  { type: 'missing_h1', desc: missingDesc,
    observed: '12 of 12 sampled pages confirmed with zero <h1> elements; control pages /men/shoes/, /women/shoes/ and /work/ each have exactly one descriptive H1.',
    impact: 'H1 is a primary on-page relevance signal, and the affected set includes the /kids/ category landing page and a men\'s product listing page — high-authority commercial entry points. A PLP whose first heading is "Recently Viewed" gives search engines nothing to rank the page on. For screen-reader users, who commonly navigate by pulling up a list of headings, these pages offer no page-level orientation at all: WCAG 2.4.6 (Headings and Labels) and 1.3.1 (Info and Relationships).',
    alsoSeen: NO_H1,
    shots: [['40-slippers-no-h1.png', '/men/shoes/slippers/ — a product listing page with no <h1>; first heading is "Recently Viewed"'],
            ['41-mens-shoes-has-h1.png', '/men/shoes/ — the correct pattern one level up, descriptive <h1> ringed']] },
  { type: 'duplicate_h1', desc: dupDesc,
    observed: '50 pages with >1 visible H1: 45 PDPs (product name + "Review Snapshot"), plus /basketball/ (4), /m/promo/ (4), /clothing/accessories/ (2), /login/ (2), /m/skechers-plus/ (2).',
    impact: 'Product pages are the highest-commercial-value pages on the site and their H1 should be the product name. A second page-level heading reading "Review Snapshot" competes with the product name for that signal across the entire catalog. On /basketball/ and /m/promo/, four competing H1s leave no single subject for the page. For screen-reader users each extra H1 is announced as another top-level heading, implying the page has several subjects.',
    alsoSeen: ['/basketball/', '/m/promo/', '/clothing/accessories/', '/login/', '/m/skechers-plus/'],
    shots: [] },
];

for (const r of rows) {
  const cur = await sql`SELECT id, status, jsonb_array_length(evidence) ev FROM defect
    WHERE defect_type=${r.type} AND persona_slug='secret-shopper' AND status IN ('verified','approved') LIMIT 1`;
  if (!cur.length) { console.log(`no queued ${r.type} row found; skipping`); continue; }
  console.log(`${APPLY ? 'UPDATING' : 'would update'} ${r.type} (id=${cur[0].id}, status=${cur[0].status}, ${cur[0].ev} shots) -> scope ${r.alsoSeen.length} pages`);
  if (!APPLY) continue;

  let evSql = null;
  if (r.shots.length) {
    const add = [];
    for (const [file, caption] of r.shots) {
      const key = `qa/session4-2026-08-13/${file}`;
      if (mediaConfigured()) { try { await putMedia({ filePath: path.join(EV, file), key }); } catch (e) { console.log('  upload failed', file, String(e).slice(0, 50)); } }
      add.push({ r2Key: key, localPath: path.join(EV, file), caption, takenAt: new Date().toISOString() });
    }
    evSql = JSON.stringify(add);
  }
  await sql`UPDATE defect SET
      description=${r.desc}, observed=${r.observed}, business_impact=${r.impact},
      also_seen_on=${JSON.stringify(r.alsoSeen)}::jsonb,
      evidence = CASE WHEN ${evSql}::text IS NULL THEN evidence ELSE evidence || ${evSql ?? '[]'}::jsonb END
    WHERE id=${cur[0].id}`;
  console.log(`  updated${evSql ? ` (+${r.shots.length} screenshots)` : ''}`);
}
console.log(APPLY ? '\nreview at /admin/defect-queue' : '\nDRY RUN — pass --apply');
