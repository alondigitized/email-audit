#!/usr/bin/env node
/**
 * Daily QA contest run — the "win the contest" orchestrator.
 *
 * Runs the full pipeline unattended overnight so a fresh, deduped, verified,
 * human-ready queue is waiting each morning:
 *
 *   journeys (rotating persona × surface) -> verify -> adjudicate
 *
 * Coverage is rotated by day-of-year so we hit different surfaces on
 * successive days instead of re-auditing the homepage forever, and so the
 * location-aware dedupe keeps surfacing genuinely new findings (a defect on
 * Mobile Site is distinct from the same defect on Desktop).
 *
 * Requires real Chrome on CDP (journeys refuse stealth). This script does not
 * launch Chrome — the LaunchAgent wrapper does, so a login session persists.
 *
 *   node site-monitor/qa/daily.mjs            # today's rotation, dry run
 *   node site-monitor/qa/daily.mjs --apply
 *   node site-monitor/qa/daily.mjs --apply --day 3   # force a rotation slot
 */
import path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const argOf = (f) => {
  const i = process.argv.indexOf(f);
  return i === -1 ? null : process.argv[i + 1];
};
const APPLY = process.argv.includes('--apply');

// Day index drives rotation. Passed in (LaunchAgent can't compute dates
// deterministically for us) or derived from today.
const forcedDay = argOf('--day');
const dayIndex =
  forcedDay != null
    ? Number(forcedDay)
    : Math.floor(Date.now() / 86400000); // days since epoch — monotonic

const log = (m, e) => console.log(`[${new Date().toISOString()}] ${m}${e ? ' ' + JSON.stringify(e) : ''}`);

// Rotation plan. Each slot is one journey invocation. Desktop and mobile of
// the same persona are different surfaces (location-aware dedupe treats them
// separately), so both earn their place. The full squad cycles across days.
const PERSONAS = ['quinn-qa', 'cora-qa', 'sergio-qa', 'ada-qa'];
const SURFACES = [
  { location: 'desktop', label: 'desktop' },
  { location: 'mobile', label: 'mobile' },
];

// Two journeys per night: one persona on desktop, a different one on mobile.
// Over 4 days every persona is seen on both surfaces without ever running
// the whole squad in one sitting (which would take ~40 min and hammer one IP).
const slot = ((dayIndex % PERSONAS.length) + PERSONAS.length) % PERSONAS.length;
const plan = [
  { persona: PERSONAS[slot], surface: SURFACES[0] },
  { persona: PERSONAS[(slot + 1) % PERSONAS.length], surface: SURFACES[1] },
  // Dedicated mobile-first shopper every night. preferredLocation makes
  // journey.mjs run her on a phone; the desktop rotation above still covers
  // the emulated-mobile surface for the functional/copy/etc lenses.
  { persona: 'priya-mobile', surface: SURFACES[0] },
];

// Opportunity walks (merchandiser / marketer) join once a week each, on
// different days. Their output feeds the /brands board, not the defect
// queue, and the title-similarity guard in insertOpportunities keeps
// repeat walks from flooding it — but weekly is still the right cadence:
// merchandising and campaigns change week to week, not day to day.
const wd = ((dayIndex % 7) + 7) % 7;
if (wd === 2) plan.push({ persona: 'maya-merch', surface: SURFACES[0] });
if (wd === 5) plan.push({ persona: 'marco-marketing', surface: SURFACES[0] });

log('daily plan', { dayIndex, apply: APPLY, runs: plan.map((p) => `${p.persona}/${p.surface.label}`) });

function run(script, args, timeoutMs = 1800000) {
  return new Promise((resolve) => {
    const child = execFile(
      '/opt/homebrew/bin/node',
      [path.join(__dirname, script), ...args],
      { cwd: path.join(__dirname, '..', '..'), maxBuffer: 1024 * 1024 * 40, timeout: timeoutMs, env: { ...process.env } },
      (err, stdout, stderr) => {
        const tail = (stdout || '').trim().split('\n').slice(-3).join(' | ');
        if (err) log(`  ${script} exited nonzero`, { code: err.code, tail: tail.slice(0, 300), stderr: (stderr || '').slice(0, 200) });
        else log(`  ${script} ok`, { tail: tail.slice(0, 300) });
        resolve(!err);
      }
    );
    child.on('error', () => resolve(false));
  });
}

// ── journeys ───────────────────────────────────────────────────────────────
for (const { persona, surface } of plan) {
  log(`journey: ${persona} on ${surface.label}`);
  const args = ['--persona', persona, '--max-steps', '16'];
  if (surface.location === 'mobile') args.push('--location', 'mobile');
  if (APPLY) {
    await run('journey.mjs', args);
  } else {
    await run('journey.mjs', ['--dry-run', ...args]);
  }
}

// ── verify + adjudicate (only meaningful when we actually filed) ────────────
if (APPLY) {
  log('verify pass');
  await run('verify.mjs', ['--apply', '--runs', '2']);
  log('adjudicate pass');
  await run('adjudicate.mjs', ['--apply']);
} else {
  log('DRY RUN — skipping verify/adjudicate (nothing filed)');
}

log('daily run complete — review at /admin/defect-queue');
