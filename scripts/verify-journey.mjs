#!/usr/bin/env node
// Smoke test for the journey step builder. Imports the shared
// site/lib/journey-preview.mjs (same function the daemon and admin UI
// use) and runs it against every persona JSON on disk. Fails loud on
// any runtime error or impossible step shape.
//
//   node scripts/verify-journey.mjs
//
// Exits 0 if every persona produces a sane journey, 1 otherwise.

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import { buildJourneySteps } from '../site/lib/journey-preview.mjs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const PERSONA_DIR = path.join(REPO, 'site-monitor', 'personas');

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
