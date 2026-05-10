/**
 * One-shot backfill: warm up industry personas with audits over historical
 * brand-persona emails. The producer fan-out (email-monitor/index.mjs)
 * only triggers for NEW emails landing post-deploy — without this script,
 * a freshly seeded industry persona has zero audits.
 *
 * For each industry persona in the admin tenant:
 *   1. Find brand experiences in same tenant + matching industry that
 *      don't already have a reaction from this industry persona.
 *   2. Bound to --limit N most-recent experiences per industry persona.
 *   3. For each, locate the source artifact dir on disk (where the
 *      brand audit's screenshot + message.json live), regenerate a
 *      content review with the industry persona's voice, reuse the
 *      brand's technical review, and persist via publishIndustryReaction.
 *
 * Usage:
 *   node audit-pipeline/backfill-industry-fanout.mjs --confirm --limit 5
 *
 * Without --confirm prints a plan and exits. Default --limit is 3 to
 * keep the first run cheap.
 */

import fs from 'fs';
import path from 'path';
import { execFile } from 'child_process';
import { fileURLToPath } from 'url';
import { neon } from '@neondatabase/serverless';
import {
  publishIndustryReaction,
  flattenPersonaProfileForPrompt,
} from './industry-fanout.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.dirname(__dirname);

// Load env from email-monitor/.env (where DATABASE_URL + CLAUDE_BIN live).
// Tiny inline parser so this script doesn't require dotenv from any
// particular package root.
function loadEnvFile(p) {
  if (!fs.existsSync(p)) return;
  const raw = fs.readFileSync(p, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (!m) continue;
    let v = m[2];
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    if (process.env[m[1]] === undefined) process.env[m[1]] = v;
  }
}
loadEnvFile(path.join(REPO_ROOT, 'email-monitor', '.env'));
loadEnvFile(path.join(REPO_ROOT, 'site', '.env.local'));

const ARTIFACTS_DIR = path.join(REPO_ROOT, 'reports', 'email-artifacts');
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'sonnet';
const CLAUDE_EFFORT = process.env.CLAUDE_EFFORT || 'high';
const CLAUDE_BIN = process.env.CLAUDE_BIN || '/Users/alontsang/.local/bin/claude';
const ADMIN_EMAIL = 'alondigitized@gmail.com';

function db() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL_UNPOOLED or DATABASE_URL required');
  return neon(url);
}

// Inline copy of email-monitor/index.mjs::generateReview. Kept inline so
// running this backfill doesn't require touching the daemon.
async function generateReview(message, { images = [], label = 'review' } = {}) {
  const args = [
    '-p',
    '--model',
    CLAUDE_MODEL,
    '--effort',
    CLAUDE_EFFORT,
    '--no-session-persistence',
    '--permission-mode',
    'bypassPermissions',
  ];
  const addedDirs = new Set();
  for (const img of images) {
    const dir = path.dirname(img);
    if (!addedDirs.has(dir)) {
      args.push('--add-dir', dir);
      addedDirs.add(dir);
    }
  }
  const child = execFile(CLAUDE_BIN, args, {
    cwd: REPO_ROOT,
    maxBuffer: 1024 * 1024 * 20,
    timeout: 600000,
    env: { ...process.env },
  });
  child.stdin.write(message);
  child.stdin.end();
  const { stdout, stderr } = await new Promise((resolve, reject) => {
    let out = '',
      err = '';
    child.stdout.on('data', (d) => {
      out += d;
    });
    child.stderr.on('data', (d) => {
      err += d;
    });
    child.on('close', (code) => {
      if (code !== 0)
        reject(
          Object.assign(new Error(`claude exited ${code}`), {
            stdout: out,
            stderr: err,
          })
        );
      else resolve({ stdout: out, stderr: err });
    });
    child.on('error', reject);
  });
  if (stderr?.trim()) console.warn(`[${label}] stderr:`, stderr.trim().slice(0, 500));
  const review = stdout.trim();
  if (!review) throw new Error(`claude returned empty ${label}`);
  return review;
}

// Inline copy of buildContentPrompt's persona-grounded shape. Kept tight
// — the rubric is identical to the daemon's so backfill audits are
// directly comparable to live ones. If you change the live prompt,
// re-paste here.
function buildContentPrompt(msg, persona) {
  const from = msg.from_ || msg.from || '';
  const subject = msg.subject || '(no subject)';
  const preheader = msg.preview || '';
  const personaPreamble = [
    `You are ${persona.name}, a ${persona.age}-year-old ${persona.generation} ${String(persona.gender || '').toLowerCase()}.`,
    `${persona.style}. ${persona.shopping_habits}. ${persona.tech_comfort}.`,
    '',
    'You just opened this marketing email in your personal inbox. You are a CROSS-BRAND industry critic — you compare this brand against the others in the same category and notice patterns. Review it from YOUR perspective: your voice, your priorities, your industry-spanning vantage point. Write in first person. What caught your eye? Where does this brand land vs. its competitors in the category?',
    '',
    'The attached image is a screenshot of the email exactly as it rendered in your inbox. Base your review on what you SEE in the rendered image — not on HTML source.',
    '',
  ];
  return [
    ...personaPreamble,
    `From: ${from}`,
    `Subject: ${subject}`,
    preheader ? `Preheader: ${preheader}` : null,
    '',
    'Use this exact review structure. Sections 1-3 are PROSE for a reader',
    'on their commute. Sections 4-8 are STRUCTURED DATA — be precise, no extra prose.',
    '',
    '## 1. Take',
    'Two or three short paragraphs, first person. Lead with your gut reaction. End with a clear judgement. As an industry critic, your judgement is comparison-aware — where does this brand land vs. its category right now?',
    '',
    '## 2. What stood out',
    'One prose block, first person. Interleave wins and misses — what pulled you toward this email and what pushed you away. Be specific about what you SEE. Comparison is welcome — call out competitors who do this better or worse.',
    '',
    "## 3. What I'd change",
    'Ordered, concrete rewrite suggestions — most-impactful first. Include alts as called-out lines:',
    '   - **Subject Alt A:** `<phrasing>`',
    '   - **Subject Alt B:** `<phrasing>`',
    '   - **Preheader Alt A:** `<phrasing>`',
    '   - **Preheader Alt B:** `<phrasing>`',
    '',
    '## 4. Business Impact Score (1-10)',
    '`**X/10**` on its own line, then a sub-bullet of rubric criteria TRUE. Score = 1 + count.',
    '',
    '## 5. Open Likelihood (persona-grounded)',
    '   - **Score:** `X/10`',
    '   - **Signals counted:** name each rubric criterion TRUE.',
    '   - **Rationale:** 1-2 sentences.',
    '',
    '## 6. Click-Through Likelihood (persona-grounded)',
    '   - **Score:** `X/10`',
    '   - **Signals counted:** name each rubric criterion TRUE.',
    '   - **Rationale:** 1-2 sentences.',
    '',
    '## 7. Subject',
    '   - **Subject:** `<verbatim>`',
    '   - **Length:** <char count>',
    '   - **Scores (1-10):** Clarity `X`, Curiosity `X`, Personalization `X`, Urgency `X`, Specificity `X`',
    '',
    '## 8. Preview',
    '   - **Preview:** `<verbatim or "(none / leaking junk)">`',
    '   - **Length:** <char count>',
    '   - **Scores (1-10):** Complements `X`, Specificity `X`, Clarity `X`, Inbox-fit `X`',
    '',
    '── SCORING RUBRIC ──',
    'Business Impact (1-10): start at 1, +1 per signal: subject/hero references your category interests; sender recognized; concrete offer visible; clear CTA; visual hierarchy; no render bugs; demographic match; current campaign; loyalty visible; honest fine print.',
    '',
    'Style: first-person, opinionated, comparison-aware. Recommendations over root-cause theory.',
  ]
    .filter(Boolean)
    .join('\n');
}

async function main() {
  const args = process.argv.slice(2);
  const confirmed = args.includes('--confirm');
  const limitIdx = args.findIndex((a) => a === '--limit');
  const limit =
    limitIdx >= 0 ? Number(args[limitIdx + 1]) || 3 : 3;
  const onlyIndustry = (() => {
    const i = args.findIndex((a) => a === '--industry');
    return i >= 0 ? args[i + 1] : null;
  })();

  const sql = db();
  const [admin] = await sql`SELECT tenant_id FROM "user" WHERE email = ${ADMIN_EMAIL} LIMIT 1`;
  if (!admin?.tenant_id) throw new Error(`admin ${ADMIN_EMAIL} has no tenant_id`);
  const tenantId = admin.tenant_id;

  const industryPersonas = onlyIndustry
    ? await sql`
        SELECT slug, name, short, profile, industry
        FROM persona
        WHERE kind = 'industry' AND tenant_id = ${tenantId}
          AND industry = ${onlyIndustry}
        ORDER BY industry
      `
    : await sql`
        SELECT slug, name, short, profile, industry
        FROM persona
        WHERE kind = 'industry' AND tenant_id = ${tenantId}
        ORDER BY industry
      `;

  console.log(`backfill plan: ${industryPersonas.length} industry persona(s), limit=${limit}/persona, model=${CLAUDE_MODEL}`);

  // For each industry persona, list candidate brand experiences not yet
  // covered by this persona's reaction.
  const plan = [];
  for (const ip of industryPersonas) {
    const experiences = await sql`
      SELECT e.id AS experience_id, e.message_id, e.received_at,
             e.email_data, e.qa_findings,
             bp.slug AS brand_slug,
             a.slug AS brand_audit_slug
      FROM experience e
      JOIN persona bp ON bp.slug = e.persona_slug
      JOIN persona_template t ON t.slug = bp.template_slug
      LEFT JOIN reaction r
        ON r.experience_id = e.id AND r.persona_slug = ${ip.slug}
      JOIN reaction br ON br.experience_id = e.id AND br.persona_slug = bp.slug
      JOIN audit a ON a.slug = br.slug
      WHERE bp.kind = 'brand'
        AND bp.tenant_id = ${tenantId}
        AND t.industry = ${ip.industry}
        AND r.id IS NULL
        AND e.type = 'email'
      ORDER BY e.received_at DESC
      LIMIT ${limit}
    `;
    plan.push({ ip, experiences });
    console.log(`  · ${ip.industry.padEnd(22)} ${ip.slug.padEnd(40)} ${experiences.length} candidate(s)`);
  }

  if (!confirmed) {
    console.log('\nDRY RUN — pass --confirm to actually call Claude + insert audits.');
    return;
  }

  let total = 0;
  let succeeded = 0;
  let failed = 0;

  for (const { ip, experiences } of plan) {
    const flat = flattenPersonaProfileForPrompt(ip.slug, ip.name, ip.profile);
    if (!flat) {
      console.warn(`skip ${ip.slug}: no identity in profile`);
      continue;
    }

    for (const exp of experiences) {
      total++;
      const brandAuditSlug = exp.brand_audit_slug;
      const artifactDir = path.join(ARTIFACTS_DIR, brandAuditSlug);
      const screenshot = path.join(artifactDir, 'email-webview-render.png');
      const messageJson = path.join(artifactDir, 'message.json');
      const reviewTxt = path.join(artifactDir, 'review.txt');

      if (!fs.existsSync(messageJson)) {
        console.warn(`skip ${brandAuditSlug}: no message.json on disk`);
        failed++;
        continue;
      }
      const msg = JSON.parse(fs.readFileSync(messageJson, 'utf8'));

      // Reuse the brand's existing technical review section if present.
      // The daemon's mergeReviews glues content + '## Technical Audit' +
      // technical. Split on that marker.
      let technicalReview = '';
      if (fs.existsSync(reviewTxt)) {
        const full = fs.readFileSync(reviewTxt, 'utf8');
        const idx = full.indexOf('## Technical Audit');
        if (idx >= 0) {
          technicalReview = full.slice(idx + '## Technical Audit'.length).trim();
        }
      }

      try {
        console.log(
          `\n[${total}] ${ip.slug} <- ${brandAuditSlug}`
        );
        const images = fs.existsSync(screenshot) ? [screenshot] : [];
        const contentReview = await generateReview(buildContentPrompt(msg, flat), {
          images,
          label: `industry-${ip.short ?? ip.slug}`,
        });
        const merged = technicalReview
          ? `${contentReview}\n\n---\n\n## Technical Audit\n\n${technicalReview}`
          : contentReview;

        const result = await publishIndustryReaction({
          brandPersonaSlug: exp.brand_slug,
          brandAuditSlug,
          industryPersona: {
            slug: ip.slug,
            name: ip.name,
            short: ip.short,
            industry: ip.industry,
            tenantId,
            profile: ip.profile,
          },
          reviewText: merged,
          qaReport: exp.qa_findings,
          msg,
          artifactDir,
          messageId: exp.message_id ?? null,
          repoRoot: REPO_ROOT,
        });
        console.log(`  -> ${result.auditSlug}`);
        succeeded++;
      } catch (err) {
        console.error(
          `  ! failed:`,
          err instanceof Error ? err.message : String(err)
        );
        failed++;
      }
    }
  }

  console.log(
    `\nbackfill complete: ${succeeded}/${total} succeeded, ${failed} failed`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
