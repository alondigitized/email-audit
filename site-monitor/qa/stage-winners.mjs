#!/usr/bin/env node
/**
 * Stage the human-confirmed contest winners directly into the defect queue as
 * 'approved' (file-ready). These were verified by a manual secret-shopper walk,
 * not the machine, so they skip candidate/verify — a human already stood behind
 * each one, with a screenshot. provenance='clean', evidenceClass='observational'.
 *
 *   node site-monitor/qa/stage-winners.mjs            # dry run
 *   node site-monitor/qa/stage-winners.mjs --apply
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
const SHOTS = '/private/tmp/claude-501/-Users-alontsang--openclaw-walker/9a653e24-86af-4206-bee2-3631dba477b7/scratchpad/mreview';

const winners = [
  {
    defectType: 'typo',
    location: 'Desktop Site', area: 'Homepage', urgency: 'Low',
    description:
      "In the global country/region selector (reachable from the header flag on every page), Germany's native-language name is misspelled \"Deuschland\" — it should be \"Deutschland\" (missing the T). It is the only misspelled entry among ~40 correctly localized country names (Österreich, Danmark, España, Türkiye, etc.).",
    businessImpact:
      'A visible spelling error in the brand’s own name for a market erodes trust and looks unpolished to any German-speaking visitor; it is a trivial one-character fix with outsized credibility cost.',
    expected: 'Germany renders as "Deutschland".',
    observed: 'Germany renders as "Deuschland" — the lone typo among correctly localized neighbors.',
    reproSteps: ['Open skechers.com', 'Click the country flag (top-right) to open "Please choose a location"', 'Scroll to Europe/Middle East → Germany', 'Note the native name reads "Deuschland"'],
    affectedElements: [{ selector: 'country selector · Germany entry', location: 'global location modal', note: 'native name label' }],
    shot: '40-deuschland-render.png',
  },
  {
    defectType: 'promo_price_mismatch',
    location: 'Desktop Site', area: 'PDP', urgency: 'Medium',
    description:
      'Product pages never show the sitewide promotional discount as a price. The site advertises "25% off" / "up to 40% off" across banners, but PDPs display only full price with no strikethrough or sale price (discount is "applied at cart"). Confirmed across 92 of 92 sampled PDPs. Meanwhile the Sale section shows markdowns correctly (e.g. $75.00 struck through beside $55.99), proving the capability exists and is simply withheld on promo products.',
    businessImpact:
      'Shoppers comparing against competitors cannot see the real price until checkout, suppressing conversion at the decision moment; the inconsistency (sale rack shows savings, promo PDPs hide them) also undermines price trust across the funnel.',
    expected: 'A promoted PDP shows the discounted price (or the applied promo) on the page, as the Sale rack already does.',
    observed: 'Promoted PDPs show only full price; 92/92 sampled had no strikethrough/sale price. Sale PDPs show strikethrough + red sale price correctly.',
    reproSteps: ['Open any promoted product PDP (e.g. a men’s GO WALK at $105)', 'Note no strikethrough or sale price despite the 25%/40% banners', 'Compare to any /sale/ product tile, which shows ~$75 struck through beside ~$55.99'],
    affectedElements: [{ selector: 'PDP price block', location: 'product page, all promoted styles', note: 'no strikethrough/sale price; discount only "applied at cart"' }],
    shot: '28-sale-prices.png',
  },
  {
    defectType: 'filter_wrong_results',
    location: 'Desktop Site', area: 'PDP', urgency: 'Medium',
    // NOTE: evidenceClass forced observational + provenance clean because a
    // human confirmed the rendered result; it is not a bot-flag artifact.
    evidenceClass: 'observational', provenance: 'clean',
    description:
      'On a PDP, selecting a different color silently strands the shopper on far fewer sizes with no forewarning. On the GO WALK Arch Fit 2.0 - Percy, the Navy/Gray colorway offers the full size run (7.5–12); switching to the Charcoal swatch collapses the available sizes to only 8.5 and 9.5 and changes the price to a confusing range ("$79.99 – $105.00"). The swatches give no advance signal of limited size availability.',
    businessImpact:
      'A shopper who chooses a color then discovers their size is unavailable is a lost sale that could be prevented by surfacing size availability (or low-stock) on the swatch itself; the un-explained price range compounds the confusion.',
    expected: 'Swatches indicate limited size availability before selection, or the shopper is guided to an in-stock color/size.',
    observed: 'Selecting Charcoal reduced sizes from 7.5–12 to only 8.5 and 9.5 with no warning; price became a "$79.99–$105.00" range.',
    reproSteps: ['Open the GO WALK Arch Fit 2.0 - Percy PDP', 'Confirm the Navy/Gray color shows sizes 7.5–12', 'Click the Charcoal swatch', 'Note sizes collapse to only 8.5 and 9.5 and the price becomes a range'],
    affectedElements: [{ selector: 'PDP color swatches → size grid', location: 'product page', note: 'color change strands shopper on 2 sizes with no forewarning' }],
    shot: 's23-color-3.png',
  },
];

const tenantId = APPLY ? await getTenantId('skechers') : null;

for (const w of winners) {
  let evidence = [];
  const localPath = path.join(SHOTS, w.shot);
  const key = `qa/staged-winners/${w.shot}`;
  if (APPLY && mediaConfigured()) {
    try { await putMedia({ filePath: localPath, key }); } catch (e) { console.log('upload failed', w.shot, String(e).slice(0, 80)); }
  }
  evidence = [{ r2Key: key, localPath, caption: `${w.area} — human-verified secret-shopper finding`, takenAt: new Date().toISOString() }];

  const dk = dedupeKey({ personaSlug: 'alon-human', area: w.area, url: 'https://www.skechers.com/', defectType: w.defectType });
  console.log(`${APPLY ? 'FILING' : 'would file'}: [${w.urgency}] ${w.defectType} — ${w.description.slice(0, 70)}...`);
  if (!APPLY) continue;

  // Skip if an identical class is already approved/submitted.
  const dup = await sql`SELECT 1 FROM defect WHERE dedupe_key=${dk} AND status IN ('approved','submitted') LIMIT 1`;
  if (dup.length) { console.log('  already staged; skipping'); continue; }

  await sql`
    INSERT INTO defect (
      tenant_id, persona_slug, location, url, area, description, device, browser,
      urgency, reporter_email, evidence, category, defect_type, expected, observed,
      repro_steps, affected_elements, business_impact, confidence, dedupe_key,
      evidence_class, provenance, status, reviewed_by, reviewed_at
    ) VALUES (
      ${tenantId}, 'alon-human', ${w.location}, 'https://www.skechers.com/', ${w.area},
      ${w.description}, 'Mac Laptop', 'Chrome', ${w.urgency}, 'alondigitized@gmail.com',
      ${JSON.stringify(evidence)}::jsonb, 'copy', ${w.defectType}, ${w.expected}, ${w.observed},
      ${JSON.stringify(w.reproSteps)}::jsonb, ${JSON.stringify(w.affectedElements)}::jsonb,
      ${w.businessImpact}, 0.98, ${dk},
      ${w.evidenceClass ?? 'observational'}, ${w.provenance ?? 'clean'},
      'approved', 'human-secret-shopper', NOW()
    )`;
  console.log('  filed as approved (file-ready)');
}
console.log(APPLY ? '\ndone — review/file at /admin/defect-queue' : '\nDRY RUN — pass --apply');
