#!/usr/bin/env node
// Smoke test for the site-monitor journey builder. Imports buildJourneySteps
// from site-review.mjs and runs it against every persona JSON on disk. Fails
// loud on any runtime error or impossible shape (empty step list, missing
// nav_path on nav_direct steps, etc.) — catches the exact regression that
// shipped as a stray rawTargets reference.
//
// Usage (local or in a pre-push hook):
//
//   node scripts/verify-journey.mjs
//
// Exits 0 if every persona produces a sane journey, 1 otherwise.

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const PERSONA_DIR = path.join(REPO, 'site-monitor', 'personas');

// Pull the builder out of the monitor script without running the daemon.
// site-review.mjs has side-effectful top-level code (env reads, Playwright
// import), so a plain `import()` would crash. We source-extract the
// function instead — ugly but sufficient for a smoke test.
const SRC = fs.readFileSync(
  path.join(REPO, 'site-monitor', 'site-review.mjs'),
  'utf8'
);

function extractFn(name) {
  const startMarker = `function ${name}(`;
  const start = SRC.indexOf(startMarker);
  if (start < 0) throw new Error(`function ${name} not found`);
  // Walk braces to find the end of the function body.
  let depth = 0;
  let inFn = false;
  for (let i = start; i < SRC.length; i++) {
    if (SRC[i] === '{') {
      depth++;
      inFn = true;
    } else if (SRC[i] === '}') {
      depth--;
      if (inFn && depth === 0) return SRC.slice(start, i + 1);
    }
  }
  throw new Error(`function ${name} body did not close`);
}

const slugifyLabelSrc = extractFn('slugifyLabel');
const buildJourneyStepsSrc = extractFn('buildJourneySteps');

const eval2 = eval;
const slugifyLabel = eval2(`(${slugifyLabelSrc.replace('function slugifyLabel', 'function')})`);
const buildJourneySteps = eval2(
  `(function(slugifyLabel){ return ${buildJourneyStepsSrc.replace('function buildJourneySteps', 'function')}; })`
)(slugifyLabel);

// ─── Assertions ────────────────────────────────────────────────────────────

const errors = [];
function fail(slug, msg) {
  errors.push({ slug, msg });
}

function checkJourney(slug, persona, steps) {
  if (!Array.isArray(steps) || steps.length === 0) {
    return fail(slug, 'journey produced zero steps');
  }
  const ids = steps.map((s) => s.id);
  for (const required of ['homepage', 'popups', 'login', 'add-to-cart', 'cart', 'search']) {
    if (!ids.includes(required)) {
      fail(slug, `missing required step id: ${required}`);
    }
  }
  const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (duplicates.length) {
    fail(slug, `duplicate step ids: ${[...new Set(duplicates)].join(', ')}`);
  }
  for (const step of steps) {
    if (!step.id) fail(slug, 'step missing id');
    if (!step.label) fail(slug, `step ${step.id} missing label`);
    if (!step.action) fail(slug, `step ${step.id} missing action`);
    if (step.action === 'nav_direct' && !step.nav_path) {
      fail(slug, `step ${step.id} is nav_direct but has empty nav_path`);
    }
    if (step.action === 'nav_category' && !step.nav_top) {
      fail(slug, `step ${step.id} is nav_category but has no nav_top`);
    }
    if (step.action === 'nav_subcategory' && (!step.nav_top || !step.nav_sub)) {
      fail(slug, `step ${step.id} is nav_subcategory but missing nav_top/nav_sub`);
    }
    if (step.action === 'search' && !(step.search_term || persona.search_term)) {
      fail(slug, `step ${step.id} is search but no resolvable query term`);
    }
  }
}

// ─── Run ───────────────────────────────────────────────────────────────────

const files = fs
  .readdirSync(PERSONA_DIR)
  .filter((f) => f.endsWith('.json'));

if (files.length === 0) {
  console.error('no persona JSONs found — nothing to verify');
  process.exit(1);
}

for (const f of files) {
  const slug = f.replace(/\.json$/, '');
  let persona;
  try {
    persona = JSON.parse(fs.readFileSync(path.join(PERSONA_DIR, f), 'utf8'));
  } catch (err) {
    fail(slug, `invalid JSON: ${err.message}`);
    continue;
  }
  let steps;
  try {
    steps = buildJourneySteps(persona);
  } catch (err) {
    fail(slug, `buildJourneySteps threw: ${err.message}`);
    continue;
  }
  checkJourney(slug, persona, steps);
  if (!errors.some((e) => e.slug === slug)) {
    console.log(`ok   ${slug.padEnd(14)} — ${steps.length} steps`);
  }
}

if (errors.length) {
  console.error('');
  console.error(`FAIL — ${errors.length} issue(s):`);
  for (const e of errors) console.error(`  [${e.slug}] ${e.msg}`);
  process.exit(1);
}
console.log(`\ndone. ${files.length} persona(s) verified.`);
