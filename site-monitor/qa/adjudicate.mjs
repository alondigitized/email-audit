#!/usr/bin/env node
/**
 * Adversarial adjudicator — the second opinion before a human sees anything.
 *
 * verify.mjs answers "is this still happening?" by re-observing the page. It
 * is deliberately deterministic, so it cannot answer a different and equally
 * important question: "is this actually worth filing?" A finding can be
 * perfectly reproducible and still be trivia, a misreading of the evidence,
 * an overstated urgency, or something we already reported last week in
 * different words.
 *
 * This agent is prompted to REJECT. It only lets a finding through if it
 * would defend it to the Skechers team receiving it. It also does semantic
 * duplicate detection against open defects on the same page, which catches
 * what the deterministic dedupe_key cannot — two genuinely different
 * defect_types describing one underlying problem.
 *
 * Runs on status='verified' rows. Survivors stay 'verified' (and reach the
 * queue); the rest are moved to 'rejected' with the reason recorded, so a
 * human can audit what the machine threw away.
 *
 * Usage:
 *   node site-monitor/qa/adjudicate.mjs             # dry run
 *   node site-monitor/qa/adjudicate.mjs --apply
 */
import path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { neon } from '../../audit-pipeline/node_modules/@neondatabase/serverless/index.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });
dotenv.config({ path: path.join(__dirname, '..', '..', 'email-monitor', '.env') });

const APPLY = process.argv.includes('--apply');
const CLAUDE_BIN = process.env.CLAUDE_BIN || '/Users/alontsang/.local/bin/claude';
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'sonnet';
const CLAUDE_EFFORT = process.env.CLAUDE_EFFORT || 'medium';

const sql = neon(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);

function log(m, e) {
  console.log(`[${new Date().toISOString()}] ${m}${e ? ' ' + JSON.stringify(e) : ''}`);
}

function runClaude(prompt) {
  const args = [
    '-p', '--model', CLAUDE_MODEL, '--effort', CLAUDE_EFFORT,
    '--no-session-persistence', '--permission-mode', 'bypassPermissions',
  ];
  return new Promise((resolve, reject) => {
    const child = execFile(CLAUDE_BIN, args, {
      cwd: path.join(__dirname, '..', '..'),
      maxBuffer: 1024 * 1024 * 10,
      timeout: 180000,
      env: { ...process.env },
    });
    let out = '', err = '';
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { err += d; });
    child.on('close', (c) =>
      c === 0 ? resolve(out.trim()) : reject(new Error(`claude exited ${c}: ${err.slice(0, 200)}`))
    );
    child.on('error', reject);
    child.stdin.write(prompt);
    child.stdin.end();
  });
}

function parseJson(raw) {
  let t = raw.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) t = fence[1].trim();
  const s = t.indexOf('{'), e = t.lastIndexOf('}');
  if (s === -1 || e === -1) return null;
  try { return JSON.parse(t.slice(s, e + 1)); } catch { return null; }
}

function buildPrompt(d, priors) {
  return [
    'You are the quality gate for a QA program that files site defects to a real',
    'retailer. The receiving team is four people who have logged about fifteen',
    'reports in total. Every weak or duplicate report we send costs the program',
    'standing that took months to build.',
    '',
    'Your job is to REJECT. Approve a finding only if you would personally defend',
    'it to that team. When genuinely unsure, reject — a missed defect costs us',
    'one sweep; a bad one costs us credibility.',
    '',
    '=== FINDING UNDER REVIEW ===',
    `Lens/persona: ${d.persona_slug} (${d.category})`,
    `Defect type: ${d.defect_type}`,
    `Area: ${d.area}`,
    `URL: ${d.url}`,
    `Urgency claimed: ${d.urgency}`,
    `Urgency rationale: ${d.urgency_rationale ?? '(none given)'}`,
    `Description: ${d.description}`,
    `Expected: ${d.expected ?? '(none)'}`,
    `Observed: ${d.observed ?? '(none)'}`,
    `Repro steps: ${JSON.stringify(d.repro_steps ?? [])}`,
    `Independent re-test: ${JSON.stringify(d.verification ?? {})}`,
    '',
    '=== ALREADY OPEN OR ALREADY FILED FOR THIS PAGE ===',
    priors.length
      ? priors.map((p) => `- [${p.status}] (${p.defect_type}) ${p.description}`).join('\n')
      : '(none)',
    '',
    '=== REJECT IF ===',
    '- It is technically true but not a defect a retailer would act on',
    '  (e.g. a stylistic choice, an intentional design decision, a trivial nit).',
    '- The description overstates or misreads the evidence in the re-test.',
    '- It describes the same underlying problem as something already listed above,',
    '  even if the defect_type or wording differs → verdict "duplicate".',
    '- The urgency is inflated relative to real shopper impact.',
    '- It is unfalsifiable, vague, or not actionable by an engineer.',
    '',
    'Respond with ONLY JSON, no prose:',
    '{',
    '  "verdict": "file" | "reject" | "duplicate",',
    '  "reason": "one sentence, specific",',
    '  "duplicate_of": "quote the prior item it duplicates, or null",',
    '  "urgency_suggested": "High" | "Medium" | "Low"',
    '}',
  ].join('\n');
}

const rows = await sql`
  SELECT id, persona_slug, category, defect_type, area, url, urgency,
         urgency_rationale, description, expected, observed, repro_steps,
         verification
  FROM defect
  WHERE status = 'verified' AND adjudication IS NULL
  ORDER BY created_at ASC
  LIMIT 50`;

log('to adjudicate', { count: rows.length, apply: APPLY });
if (!rows.length) process.exit(0);

let filed = 0, rejected = 0, dupes = 0;

for (const d of rows) {
  // Prior art for this page: anything already accepted or already dealt with.
  // Deliberately includes rejected/suppressed so the agent can spot that we
  // already decided this class isn't worth filing.
  const priors = await sql`
    SELECT description, status, defect_type FROM defect
    WHERE url = ${d.url} AND id <> ${d.id}
      AND status IN ('approved', 'submitted', 'rejected', 'suppressed', 'verified')
    ORDER BY created_at DESC LIMIT 15`;

  let res;
  try {
    res = parseJson(await runClaude(buildPrompt(d, priors)));
  } catch (err) {
    log('  adjudicator failed (leaving for human)', { id: d.id, error: String(err).slice(0, 140) });
    continue;
  }
  if (!res?.verdict) {
    log('  unparseable verdict (leaving for human)', { id: d.id });
    continue;
  }

  const adjudication = {
    reviewedAt: new Date().toISOString(),
    verdict: res.verdict,
    reason: String(res.reason ?? '').slice(0, 500),
    ...(res.duplicate_of ? { duplicateOf: String(res.duplicate_of).slice(0, 300) } : {}),
    ...(res.urgency_suggested ? { urgencySuggested: res.urgency_suggested } : {}),
  };

  const tag = res.verdict === 'file' ? 'FILE     ' : res.verdict === 'duplicate' ? 'DUPLICATE' : 'REJECT   ';
  log(`  ${tag} ${d.persona_slug} (${d.defect_type})`, { reason: adjudication.reason.slice(0, 110) });

  if (res.verdict === 'file') filed++;
  else if (res.verdict === 'duplicate') dupes++;
  else rejected++;

  if (!APPLY) continue;

  if (res.verdict === 'file') {
    // Stays 'verified' so the human queue picks it up; record the second
    // opinion, and adopt a de-escalated urgency if the agent argued for one.
    const lower = { High: 3, Medium: 2, Low: 1 };
    const adopt =
      res.urgency_suggested && lower[res.urgency_suggested] < lower[d.urgency]
        ? res.urgency_suggested
        : d.urgency;
    await sql`
      UPDATE defect
      SET adjudication = ${JSON.stringify(adjudication)}::jsonb,
          urgency = ${adopt}, updated_at = NOW()
      WHERE id = ${d.id}`;
  } else {
    await sql`
      UPDATE defect
      SET status = ${res.verdict === 'duplicate' ? 'suppressed' : 'rejected'}::defect_status,
          adjudication = ${JSON.stringify(adjudication)}::jsonb,
          reviewed_by = 'adjudicator',
          reviewed_at = NOW(), updated_at = NOW()
      WHERE id = ${d.id}`;
  }
}

log('adjudication complete', { filed, rejected, duplicates: dupes, applied: APPLY });
if (!APPLY) log('DRY RUN — pass --apply to write verdicts.');
