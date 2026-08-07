#!/usr/bin/env node
/**
 * Insert a couple of clearly-labelled FIXTURE defects so the admin queue can
 * be exercised before the real sweep exists. These are not real findings.
 *
 *   node site-monitor/qa/seed-fixture-defects.mjs --apply
 *   node site-monitor/qa/seed-fixture-defects.mjs --clean   # remove them
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { neon } from '../../audit-pipeline/node_modules/@neondatabase/serverless/index.mjs';
import {
  insertCandidateDefects,
  recordVerification,
  getTenantId,
} from '../../audit-pipeline/defects.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });
dotenv.config({ path: path.join(__dirname, '..', '..', 'email-monitor', '.env') });

const APPLY = process.argv.includes('--apply');
const CLEAN = process.argv.includes('--clean');
const sql = neon(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);

if (CLEAN) {
  const r = await sql`DELETE FROM defect WHERE description LIKE '[FIXTURE]%' RETURNING id`;
  console.log(`removed ${r.length} fixture defect(s)`);
  process.exit(0);
}

const tenantId = await getTenantId('skechers');

const rows = [
  {
    personaSlug: 'quinn-qa',
    category: 'functional',
    location: 'Desktop Site',
    area: 'Site search',
    url: 'https://www.skechers.com/search?q=slip%20ins',
    description:
      '[FIXTURE] Searching "slip ins" returns zero results, while "slip-ins" returns 200+. The unhyphenated spelling is the one used in Skechers marketing copy and email subject lines, so shoppers arriving from a campaign hit an empty state.',
    expected: 'Search normalises the hyphen and returns the Slip-ins range.',
    observed: 'Zero-results page with no suggested correction.',
    reproSteps: [
      'Open https://www.skechers.com',
      'Type "slip ins" into site search and submit',
      'Observe the zero-results page',
    ],
    urgency: 'High',
    urgencyRationale: 'Dead end on a core merchandising term used in live campaigns.',
    device: 'Mac Laptop',
    browser: 'Chrome',
    reporterEmail: 'quinn-qa@etell.app',
    confidence: 0.9,
    signature: 'zero-results:slip ins',
    evidence: [
      { r2Key: 'qa/fixture/search-zero-results.png', caption: 'Zero results for "slip ins"' },
    ],
  },
  {
    personaSlug: 'cora-qa',
    category: 'copy',
    location: 'Desktop Site',
    area: 'PDP',
    url: 'https://www.skechers.com/men/shoes/',
    description:
      '[FIXTURE] PDP badge reads "Extra 30% off" while the price block shows a 20% reduction against the list price. The two figures contradict each other on the same screen.',
    expected: 'Promotional badge matches the discount actually applied at the price block.',
    observed: 'Badge claims 30%; price math works out to 20%.',
    reproSteps: ['Open any promoted men\'s shoe PDP', 'Compare the badge against the strike-through price'],
    urgency: 'Medium',
    urgencyRationale: 'Damages price trust but does not block purchase.',
    device: 'Mac Laptop',
    browser: 'Chrome',
    reporterEmail: 'cora-qa@etell.app',
    confidence: 0.72,
    signature: 'promo-mismatch:badge-vs-price',
    evidence: [{ r2Key: 'qa/fixture/promo-mismatch.png', caption: 'Badge vs price block' }],
  },
];

if (!APPLY) {
  console.log('DRY RUN — would insert:');
  rows.forEach((r) => console.log(`  ${r.personaSlug.padEnd(10)} ${r.urgency.padEnd(6)} ${r.area}`));
  console.log('\npass --apply to write, --clean to remove.');
  process.exit(0);
}

const res = await insertCandidateDefects(rows, { tenantId });
console.log('insert result:', JSON.stringify(res, null, 1));

// Put one through the refutation pass so the queue shows both states.
const cand = await sql`
  SELECT id, persona_slug FROM defect
  WHERE status='candidate' AND description LIKE '[FIXTURE]%'
  ORDER BY created_at ASC`;
if (cand.length) {
  const status = await recordVerification(cand[0].id, {
    attemptedAt: new Date().toISOString(),
    runs: 3,
    reproduced: 3,
    verdict: 'reproduced',
    notes: 'Reproduced on 3/3 independent loads',
  });
  console.log(`verified ${cand[0].persona_slug} -> ${status}`);
}
console.log('\ndone. Visit /admin/defect-queue');
