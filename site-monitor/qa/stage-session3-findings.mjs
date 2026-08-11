#!/usr/bin/env node
/**
 * Findings from the 310-engagement secret-shopper session (2026-08-12).
 * Staged at status='verified' — the approve click stays human (principle #1).
 *
 * Both are OBSERVATIONAL (read off the rendered page + computed styles), so
 * neither depends on an interaction succeeding and neither is affected by the
 * bot flag.
 *
 *   node site-monitor/qa/stage-session3-findings.mjs           # dry run
 *   node site-monitor/qa/stage-session3-findings.mjs --apply
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
    defectType: 'duplicate_h1', area: 'PDP', urgency: 'Medium',
    url: 'https://www.skechers.com/skechers-slip-ins-go-walk-workout-walker/217196_OLV.html',
    description:
      'Every product page renders TWO visible <h1> elements: the product name, and a second one reading "Review Snapshot" injected by the third-party reviews widget further down the page. Verified on 6 of 6 product pages sampled across different styles — the product name differs each time, the "Review Snapshot" H1 is identical, which identifies the reviews component as the source. The same pattern is worse on /m/promo/, which renders FOUR visible H1s ("25% OFF Kids Styles", "Up to 40% OFF Select Styles", "25% OFF Apparel", "DOWNLOAD OUR APP!"). Note: hidden responsive duplicates were excluded — only H1s that actually render were counted, so this is not a markup-variant artifact (the homepage and cart pages each have extra H1s in the DOM, but only one visible, and are NOT reported here).',
    businessImpact:
      'Product pages are the highest-commercial-value pages on the site, and the H1 is a primary relevance signal for the product name. A second page-level heading reading "Review Snapshot" competes with the product name for that signal on every single PDP in the catalog. For screen-reader users navigating by heading level, "Review Snapshot" is announced as a second top-level page heading, implying the page has two subjects.',
    expected: 'Each page renders exactly one visible <h1> — the product name on a PDP. Section headings inside a widget should be <h2> or lower.',
    observed: '6/6 sampled PDPs render 2 visible H1s: the product name plus "Review Snapshot". /m/promo/ renders 4 visible H1s.',
    reproSteps: [
      'Open any product page, e.g. /skechers-slip-ins-go-walk-workout-walker/217196_OLV.html',
      'Scroll down past the product details until the reviews section mounts',
      'Inspect the page for h1 elements — there are two rendered: the product name and "Review Snapshot"',
      'Repeat on any other PDP: the product name changes, "Review Snapshot" stays',
      'Open /m/promo/ for a worse case — four visible H1s on one page',
    ],
    affectedElements: [
      { selector: 'h1 (product name)', location: 'PDP, top of page', note: 'correct — this should be the only H1' },
      { selector: 'h1 "Review Snapshot"', location: 'PDP, reviews widget', note: 'injected second H1 on every PDP' },
      { selector: 'h1 ×4', location: 'https://www.skechers.com/m/promo/', note: '"25% OFF Kids Styles", "Up to 40% OFF Select Styles", "25% OFF Apparel", "DOWNLOAD OUR APP!"' },
    ],
    shots: [
      ['31-pdp-review-snapshot-h1.png', 'PDP — the reviews widget renders "Review Snapshot" as a second <h1> (ringed)'],
      ['32-promo-four-h1.png', '/m/promo/ — four visible <h1> elements on a single page, each ringed and numbered'],
    ],
  },
  {
    defectType: 'focus_order', area: 'Homepage', urgency: 'Medium',
    url: 'https://www.skechers.com/',
    description:
      'Keyboard focus is invisible on links across the site. Tabbing through the page moves focus normally, but the focused link is styled identically to every other link — no outline, no underline, no colour or background change, and no box-shadow. Measured across three page types: homepage 0 of 25 tab stops showed any focus indicator; PLP 8 of 33; PDP 2 of 29. Every indicator that DOES appear is on a Bootstrap form control (a filter button or a text input, showing a blue box-shadow rgba(0,99,186,0.25)); across all three pages, 0 of the 63 <a> elements reached by tabbing showed any indicator. Computed style on focused links is outline-style: none with an outline-width of 3px still declared, which reads as a deliberate outline reset. NOTE: the intake form has no defect type for focus VISIBILITY — "focus_order" is the closest available bucket; this is WCAG 2.4.7 Focus Visible, not a focus-order problem. Worth flagging to the form owner.',
    businessImpact:
      'This is a WCAG 2.4.7 Focus Visible (Level AA) failure on the primary navigation of every page. Any shopper who navigates by keyboard — motor-impairment users, screen-magnifier users, and power users alike — cannot tell which link they are on, making the header, footer and product grids effectively unusable without a mouse. That the site already renders a clear blue focus ring on its Bootstrap form controls shows the capability exists and the link styling is an oversight rather than a design decision, which also makes it a cheap fix.',
    expected: 'Every focusable element, including links, shows a clearly visible focus indicator when reached by keyboard — as the site already does for filter buttons and text inputs.',
    observed: 'Homepage 0/25 tab stops with an indicator; PLP 8/33 (all form controls); PDP 2/29 (a text input and a checkbox). 0 of 63 sampled links showed any indicator. Focused links compute to outline-style:none, box-shadow:none, no background change, no ::before/::after content.',
    reproSteps: [
      'Open https://www.skechers.com/ and click once on a blank area of the page',
      'Press Tab repeatedly to move through the header links (Orders & Returns, Stores, Support, Wishlist, Login)',
      'Observe that no link changes appearance when focused — there is no way to see where you are',
      'Continue tabbing onto a PLP filter button (e.g. WIDTH on /men/shoes/) — a blue focus ring DOES appear, showing the contrast',
    ],
    affectedElements: [
      { selector: 'a (all links, site-wide)', location: 'header, footer, product grid, on every page', note: '0 of 63 sampled links show a focus indicator; computed outline-style:none' },
      { selector: 'button.title.btn.text-left', location: 'PLP filter sections', note: 'CORRECT for comparison — shows box-shadow rgba(0,99,186,0.25) on focus' },
    ],
    shots: [['22-focus-no-indicator.png', 'Keyboard focus is on the "Stores" link (annotated) — it renders identically to its unfocused neighbours']],
  },
];

const tenantId = APPLY ? await getTenantId('skechers') : null;
for (const f of findings) {
  console.log(`${APPLY ? 'STAGING' : 'would stage'}: [${f.urgency}] ${f.defectType} — ${f.description.slice(0, 70)}...`);
  if (!APPLY) continue;
  const dk = dedupeKey({ personaSlug: 'secret-shopper', area: f.area, url: f.url, defectType: f.defectType });
  const dup = await sql`SELECT status FROM defect WHERE dedupe_key=${dk} AND status IN ('verified','approved','submitted') LIMIT 1`;
  if (dup.length) { console.log(`  already in queue (${dup[0].status}); skipping`); continue; }
  const evidence = [];
  for (const [file, caption] of f.shots) {
    const key = `qa/session3-2026-08-12/${file}`;
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
      ${JSON.stringify(evidence)}::jsonb, ${f.defectType === 'focus_order' ? 'accessibility' : 'seo'},
      ${f.defectType}, ${f.expected}, ${f.observed},
      ${JSON.stringify(f.reproSteps)}::jsonb, ${JSON.stringify(f.affectedElements)}::jsonb,
      ${f.businessImpact}, 0.95, ${dk}, 'observational', 'clean', 'verified'
    )`;
  console.log(`  queued with ${evidence.length} screenshot(s)`);
}
console.log(APPLY ? '\nreview at /admin/defect-queue' : '\nDRY RUN — pass --apply');
