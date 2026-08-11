#!/usr/bin/env node
/**
 * The one finding that survived verification from the 1040-engagement mobile
 * session. Staged at status='verified' — the approve click stays human.
 *
 * Location = "Mobile Site", which is 40% of the intake program's own findings
 * and where we have filed nothing so far.
 *
 *   node site-monitor/qa/stage-mobile-finding.mjs           # dry run
 *   node site-monitor/qa/stage-mobile-finding.mjs --apply
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

const f = {
  defectType: 'other', area: 'Homepage', location: 'Mobile Site', urgency: 'Medium',
  url: 'https://www.skechers.com/',
  description:
    'On a first (cold) visit from a phone, an email-capture interstitial reading "Unlock 20% OFF" covers the ENTIRE mobile viewport — the full 390x844 screen — before the shopper sees any product content. It is not merely large: the site sets body overflow to "hidden" while it is open, so the page cannot be scrolled at all underneath it. Verified by attempting a 700px thumb flick: scrollY was 0 before and 0 after, and the before/after screenshots are byte-identical. ' +
  'The only way past it is a small X in the very top-right corner of the screen, positioned on the grey scrim OUTSIDE the modal panel — the hardest area of a 390px-wide phone for a one-handed thumb to reach. The panel itself offers only an email field and a CONTINUE button, so the dismiss affordance is both the smallest and the least reachable element on screen. ' +
  'Reproduced on a genuinely cold session (browser cookies cleared immediately before loading), which is exactly the state a first-time visitor arrives in — and the state a warm-session audit never exercises.',
  businessImpact:
    'This is the first thing a new mobile shopper sees, and it blocks 100% of the content until dismissed. Google\'s mobile guidance explicitly treats an interstitial that covers the main content immediately on arrival as an intrusive interstitial, which is a documented negative ranking signal for mobile search — so the cost is paid twice, once in bounce rate and once in organic visibility. Mobile is also where most first-touch traffic lands, making this the highest-volume first impression the brand makes. The reachability of the close control compounds it: a shopper who cannot quickly find or reach the X is far more likely to abandon than to sign up.',
  expected:
    'A promotional email capture on mobile appears as a partial overlay (a bottom sheet or banner) that leaves content visible and scrollable, or appears after the shopper has engaged with the page — with a close control that is comfortably thumb-reachable and at least 24x24 CSS px (WCAG 2.5.8).',
  observed:
    'Cold mobile visit to the homepage renders a full-viewport (390x844) "Unlock 20% OFF" interstitial. document.body overflow computes to "hidden"; a 700px touch flick leaves scrollY at 0 and produces a byte-identical screenshot. Dismissal requires a small X at the top-right corner, outside the modal panel.',
  reproSteps: [
    'On a phone (or a 390x844 mobile emulation), clear cookies for skechers.com so the visit is genuinely a first visit',
    'Load https://www.skechers.com/',
    'Observe the "Unlock 20% OFF" panel covering the entire screen before any product content is visible',
    'Try to scroll with a thumb flick — the page does not move (body overflow is "hidden")',
    'Note the only dismiss control is a small X in the top-right corner, on the scrim outside the panel',
  ],
  affectedElements: [
    { selector: 'full-viewport fixed email-capture interstitial', location: 'homepage, cold mobile visit', note: 'covers 390x844; body overflow:hidden blocks scrolling' },
    { selector: 'close "X" control', location: 'top-right corner, on the scrim outside the panel', note: 'smallest and least thumb-reachable element on screen' },
  ],
  shots: [
    ['80-mobile-cold-interstitial.png', 'Cold mobile visit — the interstitial covers the entire 390x844 viewport; close X is the small mark at top-right'],
    ['81-mobile-cold-after-flick.png', 'After a 700px thumb flick — byte-identical to the previous frame, proving scrolling is blocked'],
  ],
};

const tenantId = APPLY ? await getTenantId('skechers') : null;
console.log(`${APPLY ? 'STAGING' : 'would stage'}: [${f.urgency}] ${f.location} — ${f.description.slice(0, 76)}...`);
if (APPLY) {
  const dk = dedupeKey({ personaSlug: 'secret-shopper', area: f.area, url: f.url, defectType: f.defectType, location: f.location });
  const dup = await sql`SELECT status FROM defect WHERE dedupe_key=${dk} AND status IN ('verified','approved','submitted') LIMIT 1`;
  if (dup.length) { console.log(`  already in queue (${dup[0].status}); skipping`); }
  else {
    const evidence = [];
    for (const [file, caption] of f.shots) {
      const key = `qa/session5-mobile/${file}`;
      if (mediaConfigured()) { try { await putMedia({ filePath: path.join(EV, file), key }); } catch (e) { console.log('  upload failed', file, String(e).slice(0, 55)); } }
      evidence.push({ r2Key: key, localPath: path.join(EV, file), caption, takenAt: new Date().toISOString() });
    }
    await sql`
      INSERT INTO defect (
        tenant_id, persona_slug, location, url, area, description, device, browser,
        urgency, reporter_email, evidence, category, defect_type, expected, observed,
        repro_steps, affected_elements, business_impact, confidence, dedupe_key,
        evidence_class, provenance, status
      ) VALUES (
        ${tenantId}, 'secret-shopper', ${f.location}, ${f.url}, ${f.area},
        ${f.description}, 'iPhone', 'Chrome', ${f.urgency}, 'alondigitized@gmail.com',
        ${JSON.stringify(evidence)}::jsonb, 'functional', ${f.defectType}, ${f.expected}, ${f.observed},
        ${JSON.stringify(f.reproSteps)}::jsonb, ${JSON.stringify(f.affectedElements)}::jsonb,
        ${f.businessImpact}, 0.96, ${dk}, 'observational', 'clean', 'verified'
      )`;
    console.log(`  queued with ${evidence.length} screenshots — Location "Mobile Site"`);
  }
}
console.log(APPLY ? '\nreview at /admin/defect-queue' : '\nDRY RUN — pass --apply');
