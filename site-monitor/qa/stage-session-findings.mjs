#!/usr/bin/env node
/**
 * Stage findings from the 2026-08-11 secret-shopper session into the queue at
 * status='verified' (awaiting the human approve click — principle #1).
 *
 * Both are OBSERVATIONAL: they are read off the rendered page and the document
 * head, needing no interaction to succeed, so they are immune to the bot flag.
 *
 *   node site-monitor/qa/stage-session-findings.mjs           # dry run
 *   node site-monitor/qa/stage-session-findings.mjs --apply
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { neon } from '../../audit-pipeline/node_modules/@neondatabase/serverless/index.mjs';
import { putMedia, mediaConfigured } from '../../audit-pipeline/media.mjs';
import { getTenantId, dedupeKey } from '../../audit-pipeline/defects.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });
dotenv.config({ path: path.join(__dirname, '..', '..', 'email-monitor', '.env') });
const APPLY = process.argv.includes('--apply');
const sql = neon(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);
const EV = '/private/tmp/claude-501/-Users-alontsang--openclaw-walker/9a653e24-86af-4206-bee2-3631dba477b7/scratchpad/evidence';

const findings = [
  {
    defectType: 'missing_h1', area: 'PLP', urgency: 'Medium',
    url: 'https://www.skechers.com/men/',
    description:
      'The three top-level category landing pages do not carry a descriptive H1. /kids/ has NO <h1> element at all (its most prominent heading is an <h3> "BACK-TO-SCHOOL SALE"). /men/ and /women/ each have exactly one <h1>, but it is a promotional text block reading "Up to 40% OFF Select Styles", rendered roughly 1,600px down the page inside a marketing component (section.b-text_block) rather than in the page-header slot. That same string is also the H1 of /sale/, so three separate pages share one identical, non-descriptive H1. The correct pattern already exists one level deeper — /men/shoes/ renders <h1>Men\'s Shoes</h1> in the page-header slot (div.c-search-header), as do /women/shoes/ and /work/ — which shows this is an oversight on the landing pages, not a deliberate design choice.',
    businessImpact:
      'H1 is a primary on-page relevance signal, and these landing pages are the highest-authority entry points for the two biggest category terms on the site. "Up to 40% OFF Select Styles" tells a search engine nothing about men\'s or women\'s footwear, and duplicating one promotional string across /men/, /women/ and /sale/ dilutes the relevance of all three while /kids/ offers no H1 signal at all. For screen-reader users navigating by heading, these pages give no page-level orientation — a WCAG 2.4.6 (Headings and Labels) and 1.3.1 (Info and Relationships) concern.',
    expected: 'Each top-level category landing page carries a unique descriptive H1 in the page-header slot (e.g. "Men\'s Shoes", "Women\'s Shoes", "Kids\' Shoes"), matching the pattern already used on /men/shoes/.',
    observed: '/kids/ h1 count = 0. /men/ and /women/ h1 = "Up to 40% OFF Select Styles" (y≈1619, inside section.b-text_block). /sale/ h1 = the same string. /men/shoes/ h1 = "Men\'s Shoes" (correct, in div.c-search-header).',
    reproSteps: [
      'Open https://www.skechers.com/men/ and inspect the document for h1 elements — the only one is the promo block "Up to 40% OFF Select Styles", about 1,600px down the page',
      'Repeat on https://www.skechers.com/women/ — identical H1 text',
      'Repeat on https://www.skechers.com/sale/ — identical H1 text again',
      'Open https://www.skechers.com/kids/ — there is no h1 element on the page at all',
      'Compare with https://www.skechers.com/men/shoes/, which correctly renders <h1>Men\'s Shoes</h1> in the page header',
    ],
    affectedElements: [
      { selector: 'section.b-text_block > div.b-text_block-content > h1', location: 'https://www.skechers.com/men/', note: 'H1 is promo copy "Up to 40% OFF Select Styles" at y≈1619' },
      { selector: 'section.b-text_block > div.b-text_block-content > h1', location: 'https://www.skechers.com/women/', note: 'same promo string as /men/ and /sale/' },
      { selector: '(no h1 element present)', location: 'https://www.skechers.com/kids/', note: 'h1 count = 0; first heading is an h3' },
      { selector: 'h1.c-search-header__about__title', location: 'https://www.skechers.com/men/shoes/', note: 'CORRECT pattern for comparison — "Men\'s Shoes"' },
    ],
    shots: [
      ['10-men-h1-is-promo.png', '/men/ — the page\'s only <h1> is a promo banner 1,600px down the page (ringed)'],
      ['14-kids-no-h1-at-all.png', '/kids/ — no <h1> element exists anywhere on the page'],
      ['13-mens-shoes-h1-correct.png', '/men/shoes/ — the correct pattern: descriptive <h1> in the page header'],
    ],
  },
  {
    defectType: 'missing_title', area: 'Homepage', urgency: 'Medium',
    url: 'https://www.skechers.com/definitely-not-a-real-page-xyz/',
    description:
      'The site-wide error page renders with a completely empty <title> element — the browser tab shows no text at all. The page body itself is well built ("Sorry! We can not find the page you are looking for...", with a graphic and a "Recommended For You" carousel), so only the document title is missing. Separately, that page is served with HTTP status 410 Gone rather than 404 Not Found, and it does so for URLs that never existed — verified with a randomly invented path as well as two guessed URLs. NOTE: the intake form has no Area option for a site-wide error page; "Homepage" is used as the closest available bucket. Worth flagging to the form owner.',
    businessImpact:
      'An empty <title> is a WCAG 2.4.2 (Page Titled) Level A failure: screen-reader users get no announcement of what page they landed on, and any user with several tabs open sees a blank tab. Returning 410 Gone instead of 404 for URLs that never existed is a stronger signal to search engines — 410 asserts the resource was deliberately and permanently removed, which encourages faster de-indexing and forfeits the recovery grace a 404 allows for mistyped or stale inbound links.',
    expected: 'The error page has a descriptive <title> (e.g. "Page Not Found | SKECHERS"), and URLs that never existed return HTTP 404.',
    observed: 'document.title is "" (length 0) on the error page; HTTP status is 410 for /definitely-not-a-real-page-xyz/ and for every other unrecognised path tested.',
    reproSteps: [
      'Visit https://www.skechers.com/definitely-not-a-real-page-xyz/ (any invented path works)',
      'Observe the browser tab — it is blank; the page has no title text',
      'Confirm in devtools that document.title is an empty string',
      'Check the Network tab: the response status is 410 Gone, not 404 Not Found',
    ],
    affectedElements: [
      { selector: 'head > title', location: 'site-wide error page', note: 'empty string, length 0' },
      { selector: 'HTTP response status', location: 'any unrecognised URL', note: '410 Gone returned where 404 Not Found is expected' },
    ],
    shots: [['03-error-410-empty-title.png', 'Error page renders correctly but serves HTTP 410 with an empty <title> — the browser tab is blank']],
  },
];

const tenantId = APPLY ? await getTenantId('skechers') : null;
for (const f of findings) {
  console.log(`${APPLY ? 'STAGING' : 'would stage'}: [${f.urgency}] ${f.defectType} — ${f.description.slice(0, 72)}...`);
  if (!APPLY) continue;
  const dk = dedupeKey({ personaSlug: 'secret-shopper', area: f.area, url: f.url, defectType: f.defectType });
  const dup = await sql`SELECT status FROM defect WHERE dedupe_key=${dk} AND status IN ('verified','approved','submitted') LIMIT 1`;
  if (dup.length) { console.log(`  already in queue (${dup[0].status}); skipping`); continue; }

  const evidence = [];
  for (const [file, caption] of f.shots) {
    const key = `qa/session-2026-08-11/${file}`;
    if (mediaConfigured()) {
      try { await putMedia({ filePath: path.join(EV, file), key }); }
      catch (e) { console.log('  upload failed', file, String(e).slice(0, 60)); }
    }
    evidence.push({ r2Key: key, localPath: path.join(EV, file), caption, takenAt: new Date().toISOString() });
  }
  await sql`
    INSERT INTO defect (
      tenant_id, persona_slug, location, url, area, description, device, browser,
      urgency, reporter_email, evidence, category, defect_type, expected, observed,
      repro_steps, affected_elements, business_impact, confidence, dedupe_key,
      evidence_class, provenance, status
    ) VALUES (
      ${tenantId}, 'secret-shopper', 'Desktop Site', ${f.url}, ${f.area},
      ${f.description}, 'Mac Laptop', 'Chrome', ${f.urgency}, 'alondigitized@gmail.com',
      ${JSON.stringify(evidence)}::jsonb, 'seo', ${f.defectType}, ${f.expected}, ${f.observed},
      ${JSON.stringify(f.reproSteps)}::jsonb, ${JSON.stringify(f.affectedElements)}::jsonb,
      ${f.businessImpact}, 0.95, ${dk}, 'observational', 'clean', 'verified'
    )`;
  console.log(`  queued with ${evidence.length} screenshot(s) — awaiting your approve click`);
}
console.log(APPLY ? '\nreview at /admin/defect-queue' : '\nDRY RUN — pass --apply');
