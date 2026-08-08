#!/usr/bin/env node
/**
 * Agentic secret-shopper journey.
 *
 * Replaces the fixed-route sweep. Each persona starts on the homepage with a
 * shopping goal and navigates by choosing from the interactive elements
 * actually rendered — no predefined routes, no hardcoded selectors. The pages
 * it reaches, and the Area each maps to, are discovered.
 *
 * Why this matters beyond fidelity: the previous passive sweep gave the
 * functional lens nothing to find (Quinn returned 0 findings on every route),
 * because a dead control, an empty search result or a broken filter only
 * exists if you actually interact. Every step here records what observably
 * changed, so those become reportable.
 *
 * Transactional actions are blocked by the runner, not the prompt — see
 * navigator.mjs. The shopper looks; it never orders, registers or submits
 * personal data.
 *
 * Usage:
 *   node site-monitor/qa/journey.mjs --persona quinn-qa
 *   node site-monitor/qa/journey.mjs --dry-run
 *   node site-monitor/qa/journey.mjs --max-steps 8
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { chromium as playwrightChromium, devices } from 'playwright';
import { chromium as stealthChromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import AxeBuilder from '@axe-core/playwright';

import { putMedia, mediaConfigured } from '../../audit-pipeline/media.mjs';
import { upsertExperienceAndReaction } from '../../audit-pipeline/publish.mjs';
import {
  insertCandidateDefects,
  getTenantId,
  dedupeKey,
  DEFECT_AREAS,
  DEFECT_URGENCIES,
  DEFECT_TYPES,
} from '../../audit-pipeline/defects.mjs';
import {
  listInteractables,
  performAction,
  inferArea,
  dismissOverlays,
  installPopupBlocker,
} from './navigator.mjs';
import { captureProof, clearHighlights, selectorsFor } from './evidence.mjs';
import { insertOpportunities } from '../../audit-pipeline/opportunities.mjs';
import { resolveBrandSlug } from '../../audit-pipeline/brands.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });
dotenv.config({ path: path.join(__dirname, '..', '..', 'email-monitor', '.env') });

const DRY = process.argv.includes('--dry-run');
const argOf = (f) => {
  const i = process.argv.indexOf(f);
  return i === -1 ? null : process.argv[i + 1];
};
const ONLY = argOf('--persona');
const ALLOW_STEALTH = process.argv.includes('--allow-stealth');
// 'desktop' (default) or 'mobile'. Mobile runs an iPhone-emulated context in
// the same real Chrome — the Mobile Site is a different rendering surface and
// 40% of the intake program's own findings, so it gets its own Location.
const LOCATION = argOf('--location') === 'mobile' ? 'mobile' : 'desktop';
// Named cookie jar from site-monitor/cookies/{name}.json — enables logged-in
// journeys (MyAccount / Loyalty Dashboard areas).
const COOKIES = argOf('--cookies');
// One-off goal override, e.g. a member-account review. Applies to every
// persona selected, so pair with --persona.
const GOAL_OVERRIDE = argOf('--goal');

const CLAUDE_BIN = process.env.CLAUDE_BIN || '/Users/alontsang/.local/bin/claude';
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'sonnet';
const CLAUDE_EFFORT = process.env.CLAUDE_EFFORT || 'medium';

const defs = JSON.parse(fs.readFileSync(path.join(__dirname, 'personas.json'), 'utf8'));
const SHARED = defs._shared;
const MAX_STEPS = Number(argOf('--max-steps') || 0) || SHARED.max_steps || 14;
const ARTIFACT_ROOT = path.join(__dirname, '..', '..', 'reports', 'qa-artifacts');

const log = (m, e) =>
  console.log(`[${new Date().toISOString()}] ${m}${e ? ' ' + JSON.stringify(e) : ''}`);

function runClaude(prompt, imagePath, timeoutMs = 180000) {
  const args = [
    '-p', '--model', CLAUDE_MODEL, '--effort', CLAUDE_EFFORT,
    '--no-session-persistence', '--permission-mode', 'bypassPermissions',
  ];
  if (imagePath) args.push('--add-dir', path.dirname(imagePath));
  return new Promise((resolve, reject) => {
    const child = execFile(CLAUDE_BIN, args, {
      cwd: path.join(__dirname, '..', '..'),
      maxBuffer: 1024 * 1024 * 20,
      timeout: timeoutMs,
      env: { ...process.env },
    });
    let out = '', err = '';
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { err += d; });
    child.on('close', (c) =>
      c === 0 ? resolve(out.trim()) : reject(new Error(`claude exited ${c}: ${err.slice(0, 160)}`))
    );
    child.on('error', reject);
    child.stdin.write(imagePath ? `${prompt}\n\nScreenshot: ${imagePath}\n` : prompt);
    child.stdin.end();
  });
}

function parseJson(raw, expectArray = false) {
  let t = raw.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) t = fence[1].trim();
  const o = expectArray ? ['[', ']'] : ['{', '}'];
  const s = t.indexOf(o[0]), e = t.lastIndexOf(o[1]);
  if (s === -1 || e === -1) return expectArray ? [] : null;
  try { return JSON.parse(t.slice(s, e + 1)); } catch { return expectArray ? [] : null; }
}

// ── the shopper's next move ───────────────────────────────────────────────

function buildNavPrompt(persona, goal, state, interactables, history) {
  return [
    `You are ${persona.displayName}, a retail secret shopper on skechers.com.`,
    `Character: ${persona.character}`,
    '',
    `YOUR GOAL: ${goal}`,
    '',
    `Step ${state.step} of ${MAX_STEPS}. Current page: ${state.url}`,
    `Page title: ${state.title}`,
    `This page looks like: ${state.area}`,
    '',
    'WHAT YOU DID SO FAR:',
    history.length ? history.map((h, i) => `${i + 1}. ${h}`).join('\n') : '(nothing yet — you just arrived)',
    '',
    'WHAT YOU CAN INTERACT WITH RIGHT NOW:',
    interactables
      .map((e) => `[${e.ref}] ${e.kind}: "${e.label}"${e.href ? ` -> ${e.href.slice(0, 70)}` : ''}`)
      .join('\n') || '(nothing actionable found)',
    '',
    'Pick ONE next action that a real shopper pursuing your goal would take.',
    'Prefer making progress toward the goal over wandering. Do not revisit a',
    'page you have already seen unless you have a reason.',
    '',
    'Order-placing, account-creation and signup actions are blocked and are not',
    'listed — do not look for them. Stop before any real purchase.',
    '',
    'Respond with ONLY JSON:',
    '{',
    '  "kind": "click" | "type" | "scroll" | "done",',
    '  "ref": <index from the list above, omit for scroll/done>,',
    '  "text": "<only for type>",',
    '  "why": "one short sentence — what you expect to happen"',
    '}',
    'Use "done" if the goal is met or nothing useful remains.',
  ].join('\n');
}

// ── evidence at the current page ──────────────────────────────────────────

async function captureHere(page, artifactDir, stepNum, area, consoleErrors, networkErrors) {
  const shot = path.join(artifactDir, `step-${String(stepNum).padStart(2, '0')}.png`);
  await page.screenshot({ path: shot, fullPage: false }).catch(() => {});

  let axeViolations = [];
  try {
    const res = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
    axeViolations = (res.violations || [])
      .filter((v) => ['serious', 'critical'].includes(v.impact))
      .map((v) => ({
        id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length,
        targets: v.nodes.slice(0, 10).map((n) => ({
          selector: Array.isArray(n.target) ? n.target.join(' ') : String(n.target ?? ''),
          snippet: (n.html ?? '').slice(0, 200),
        })),
      }));
  } catch { /* non-fatal */ }

  const head = await page.evaluate(() => {
    const q = (s) => document.querySelector(s);
    return {
      title: document.title || null,
      metaDescription: q('meta[name="description"]')?.getAttribute('content') ?? null,
      canonical: q('link[rel="canonical"]')?.getAttribute('href') ?? null,
      h1s: Array.from(document.querySelectorAll('h1')).map((h) => h.innerText.trim().slice(0, 120)),
      structuredDataTypes: Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .map((s) => { try { return JSON.parse(s.textContent)['@type']; } catch { return 'INVALID_JSON'; } }),
      imgsMissingAlt: Array.from(document.querySelectorAll('img')).filter((i) => !i.hasAttribute('alt')).length,
      imgTotal: document.querySelectorAll('img').length,
      imgsMissingAltDetail: Array.from(document.querySelectorAll('img'))
        .filter((i) => !i.hasAttribute('alt')).slice(0, 12)
        .map((i) => {
          let sel = 'img';
          if (i.id) sel = `img#${i.id}`;
          else if (typeof i.className === 'string' && i.className.trim()) {
            sel = `img.${i.className.trim().split(/\s+/).slice(0, 2).join('.')}`;
          }
          const link = i.closest('a');
          return {
            src: (i.getAttribute('src') || i.getAttribute('data-src') || '').slice(0, 400),
            selector: sel,
            location: (i.closest('section,header,footer,nav')?.tagName || 'body').toLowerCase(),
            linkedTo: link ? (link.getAttribute('href') || '').slice(0, 140) : null,
          };
        }),
      resultCount: (document.body.innerText.match(/([\d,]+)\s+(?:results?|items?|styles?|products?)/i) || [])[1] || null,
      emptyState: /no results|0 results|couldn't find|did not match|no products/i.test(document.body.innerText),
    };
  }).catch(() => ({}));

  const visibleText = await page
    .evaluate(() => document.body.innerText.replace(/\n{3,}/g, '\n\n').slice(0, 5000))
    .catch(() => '');

  return {
    step: stepNum,
    url: page.url(),
    area,
    screenshotPath: fs.existsSync(shot) ? shot : null,
    head, axeViolations, visibleText,
    consoleErrors: consoleErrors.slice(-15),
    networkErrors: networkErrors.slice(-15),
  };
}

function buildElementCatalog(steps, actedOn = []) {
  const cat = [];
  // Controls the shopper actually operated. Only those where our automation
  // succeeded — an element we failed to drive proves nothing about the site.
  for (const a of actedOn) {
    if (a.automationFailed) continue;
    cat.push({
      kind: a.kind,
      selector: a.href ? `a[href="${String(a.href).replace(/"/g, '\\"')}"]` : undefined,
      location: `step ${a.step} (${a.area}) — control labelled "${a.label}"`,
      note: a.changed === false
        ? 'clicked successfully but the page did not change'
        : 'operated during the journey',
    });
  }
  for (const s of steps) {
    for (const img of s.head?.imgsMissingAltDetail ?? []) {
      cat.push({
        kind: 'img-missing-alt', selector: img.selector, src: img.src,
        location: `step ${s.step} (${s.area}) — ${img.location}`,
        note: img.linkedTo ? `links to ${img.linkedTo}` : undefined,
      });
    }
    for (const v of s.axeViolations ?? []) {
      for (const t of v.targets ?? []) {
        cat.push({
          kind: `axe:${v.id}`, selector: t.selector, snippet: t.snippet,
          location: `step ${s.step} (${s.area}) — ${v.help}`, note: `${v.impact} impact`,
        });
      }
    }
  }
  return cat.slice(0, 40);
}

// ── the lens, applied to the whole journey ────────────────────────────────

function buildFindingsPrompt(persona, goal, steps, actionLog, catalog) {
  return [
    `You are ${persona.displayName}. Lens: ${persona.lens}`,
    `Brief: ${persona.brief}`,
    `Not yours: ${persona.ignores}`,
    '',
    `You just shopped skechers.com with this goal: ${goal}`,
    '',
    '=== WHAT HAPPENED, STEP BY STEP ===',
    actionLog.join('\n'),
    '',
    '=== PAGES YOU SAW ===',
    steps.map((s) => [
      `--- step ${s.step}: ${s.area} — ${s.url}`,
      `title: ${s.head?.title ?? ''}`,
      `h1s: ${JSON.stringify(s.head?.h1s ?? [])}`,
      `canonical: ${s.head?.canonical ?? 'absent'} | metaDesc: ${s.head?.metaDescription ? 'present' : 'absent'}`,
      `structuredData: ${JSON.stringify(s.head?.structuredDataTypes ?? [])}`,
      `imgsMissingAlt: ${s.head?.imgsMissingAlt ?? 0}/${s.head?.imgTotal ?? 0}`,
      `resultCount: ${s.head?.resultCount ?? 'n/a'} | emptyState: ${s.head?.emptyState}`,
      `axe serious/critical: ${(s.axeViolations ?? []).length}`,
      `console errors: ${(s.consoleErrors ?? []).length} | network errors: ${(s.networkErrors ?? []).length}`,
      (s.consoleErrors ?? []).slice(0, 3).join('\n'),
      (s.networkErrors ?? []).slice(0, 3).join('\n'),
      `text: ${(s.visibleText ?? '').slice(0, 1200)}`,
    ].filter(Boolean).join('\n')).join('\n\n'),
    '',
    '=== ELEMENT CATALOG (reference by index) ===',
    catalog.map((e, i) =>
      `[${i}] ${e.kind} | ${e.selector ?? ''}${e.src ? ' | src=' + e.src : ''}${e.location ? ' | ' + e.location : ''}${e.note ? ' | ' + e.note : ''}`
    ).join('\n') || '(none)',
    '',
    '=== HOW TO REPORT ===',
    'Selecting a size, colour or width updates the page IN PLACE — it does not',
    'navigate. A step that reports DOM changes did work correctly. Only a step',
    'that explicitly says "NO navigation and NO DOM change at all" is a',
    'dead-control candidate, and even then say so cautiously.',
    '',
    COOKIES
      ? 'You are supposed to be LOGGED IN via a saved session. If the site shows\n' +
        'you as logged out, OUR saved session has expired — that is our problem,\n' +
        'not a Skechers defect. Never report being logged out as a finding.'
      : '',
    '',
    'HTTP 429 (Too Many Requests) is rate limiting caused by OUR automated',
    'traffic, not a defect a shopper would hit. Never report a 429 as a site',
    'fault, and never cite one as evidence for another finding.',
    '',
    'Any step marked "OUR TOOLING could not drive this element" is a limitation',
    'of our own automation, not a Skechers defect. Never report those. Only a',
    'step where the click SUCCEEDED and the page genuinely did not change is a',
    'dead control.',
    '',
    'These go to a real Skechers team that receives roughly fifteen reports in',
    'total, filed by four named humans. A wrong or trivial report costs real',
    'credibility. An empty list is a good outcome.',
    '',
    'You experienced this journey — report what actually obstructed or misled',
    'you, not a generic audit. If a control did nothing when you clicked it, or',
    'a search returned nothing useful, that is exactly what to report.',
    '',
    'A count is not a bug report. Name specific elements via',
    'affected_element_refs (indices above). Do NOT retype selectors or URLs.',
    'Every finding needs a concrete business impact — no generic filler.',
    '',
    'Respond with ONLY a JSON array. Each element:',
    '{',
    '  "description": "specific, self-contained, actionable",',
    '  "business_impact": "who is affected and what it costs",',
    '  "affected_element_refs": [0, 3],',
    '  "step": <which journey step this was seen on>,',
    '  "expected": "...", "observed": "...",',
    `  "urgency": one of ${JSON.stringify(DEFECT_URGENCIES)},`,
    '  "urgency_rationale": "...",',
    '  "repro_steps": ["the click path a person would follow"],',
    '  "confidence": 0.0-1.0,',
    `  "defect_type": EXACTLY one of ${JSON.stringify(DEFECT_TYPES)}`,
    '}',
    'Return [] if nothing in this journey is worth a Skechers engineer\'s time.',
  ].join('\n');
}

/**
 * The persona's account of its own shopping trip, in markdown. This is what
 * renders on the audit page and gets shared — so it has to read as a walk,
 * not a database dump.
 */
function buildNarrative(persona, steps, actionLog, rows) {
  const lines = [
    `**${persona.displayName}** — ${persona.lens}`,
    '',
    `**Goal:** ${persona.goal ?? '(none set)'}`,
    '',
    `Walked ${steps.length} step(s) across ${new Set(steps.map((s) => s.area)).size} area(s): ` +
      `${[...new Set(steps.map((s) => s.area))].join(', ')}.`,
    '',
    '## The walk',
    '',
    ...actionLog.map((a) => a.split('\n').map((l, i) => (i ? '  ' + l.trim() : '- ' + l.trim())).join('\n')),
    '',
    '## What I found',
    '',
  ];
  if (!rows.length) {
    lines.push('Nothing worth a Skechers engineer\'s time on this journey.');
  } else {
    for (const r of rows) {
      lines.push(`### ${r.urgency} · ${r.defectType} · ${r.area}`);
      lines.push('');
      lines.push(r.description);
      if (r.businessImpact) lines.push('', `**Business impact:** ${r.businessImpact}`);
      if (r.affectedElements?.length) {
        lines.push('', `**Affected elements (${r.affectedElements.length}):**`);
        r.affectedElements.slice(0, 8).forEach((e, i) =>
          lines.push(`${i + 1}. \`${e.selector ?? e.src ?? '?'}\`${e.location ? ` — ${e.location}` : ''}`)
        );
      }
      lines.push('', `<${r.url}>`, '');
    }
  }
  return lines.join('\n');
}

/** 10 = clean walk; each finding costs more the more urgent it is. */
function scoreFor(rows) {
  const cost = rows.reduce(
    (a, r) => a + (r.urgency === 'High' ? 3 : r.urgency === 'Medium' ? 1.5 : 0.5),
    0
  );
  return `${Math.max(1, Math.round(10 - cost))}/10`;
}

/**
 * Lens prompt for opportunity-output personas (merchandiser, marketer).
 * They hunt revenue left on the table, not defects — so the output is
 * opportunity theses for the brand board, not defect rows for the queue.
 */
function buildOpportunityPrompt(persona, goal, steps, actionLog) {
  return [
    `You are ${persona.displayName}. ${persona.character}`,
    `Lens: ${persona.lens}`,
    `Brief: ${persona.brief}`,
    `Not yours: ${persona.ignores}`,
    '',
    `You just walked Skechers.com with this goal: ${goal}`,
    '',
    '=== WHAT YOU DID, STEP BY STEP ===',
    actionLog.join('\n'),
    '',
    '=== PAGES YOU SAW ===',
    steps.map((st) => [
      `--- step ${st.step}: ${st.area} — ${st.url}`,
      `title: ${st.head?.title ?? ''}`,
      `h1s: ${JSON.stringify(st.head?.h1s ?? [])}`,
      `text: ${(st.visibleText ?? '').slice(0, 1500)}`,
    ].join('\n')).join('\n\n'),
    '',
    '=== HOW TO REPORT ===',
    'Propose 2-5 OPPORTUNITIES: improvements a merchandising/marketing leader',
    'would actually fund. Each must rest on something you specifically saw on',
    'this walk (cite the step), state a concrete business impact, and be',
    'actionable within a quarter. Fewer, stronger. No generic best-practice',
    'filler ("add urgency") unless you saw the specific gap.',
    '',
    'Respond with ONLY a JSON array:',
    '{',
    '  "title": "short, specific",',
    '  "thesis": "what you observed and what changing it unlocks",',
    '  "impact": "who is affected and what it is plausibly worth",',
    `  "category": "${persona.category}",`,
    '  "confidence": 0.0-1.0,',
    '  "step": <journey step where you saw it>,',
    '  "stats": ["specific observations from the walk supporting this"]',
    '}',
    'Return [] if the walk genuinely surfaced nothing worth funding.',
  ].join('\n');
}

// ── run ───────────────────────────────────────────────────────────────────

/**
 * Real Chrome over CDP, or refuse to run.
 *
 * Stealth Chromium gets silently degraded by Kasada on protected paths: an
 * entire run reported "Add to Cart is unresponsive" and "the size selector is
 * dead" as High-urgency defects. Re-tested in real Chrome, that same PDP
 * returns 200 with Add to Cart present and enabled — the controls were fine,
 * we were being blocked.
 *
 * Falling back silently means a whole run can look like findings when it is
 * really bot detection, so --allow-stealth has to be asked for explicitly and
 * the findings from such a run should be treated as suspect.
 */
async function openBrowser() {
  const cdpUrl = process.env.CDP_URL || 'http://127.0.0.1:9222';
  try {
    const b = await playwrightChromium.connectOverCDP(cdpUrl, { timeout: 8000 });
    log('connected to real Chrome over CDP', { cdpUrl });
    return { browser: b, viaCdp: true };
  } catch (err) {
    if (!ALLOW_STEALTH) {
      log('FATAL: real Chrome not reachable over CDP', { cdpUrl });
      log('Start it with:');
      log('  open -na "Google Chrome" --args --remote-debugging-port=9222 \\');
      log('    --user-data-dir=/tmp/chrome-qa-profile --no-first-run');
      log('Stealth Chromium is blocked on protected paths (cart, checkout) and');
      log('reports that blocking as site defects. Pass --allow-stealth to override.');
      throw new Error('real Chrome required — see log above');
    }
    log('WARNING: falling back to stealth chromium — protected paths may be blocked');
    log('WARNING: treat any dead-control or empty-page finding from this run as suspect');
    stealthChromium.use(StealthPlugin());
    return { browser: await stealthChromium.launch({ headless: true }), viaCdp: false };
  }
}

const personas = Object.entries(defs).filter(
  ([slug]) => !slug.startsWith('_') && (!ONLY || slug === ONLY)
);
if (!personas.length) { console.error('no personas matched'); process.exit(1); }

const runSlug = `${new Date().toISOString().slice(0, 10)}-qa-journey${LOCATION === 'mobile' ? '-mobile' : ''}${COOKIES ? '-member' : ''}`;
const tenantId = DRY ? null : await getTenantId(SHARED.tenant);
let grand = { inserted: 0, skippedDuplicate: 0, invalid: 0, proposed: 0 };

for (const [slug, personaBase] of personas) {
  const persona = GOAL_OVERRIDE ? { ...personaBase, goal: GOAL_OVERRIDE } : personaBase;
  const artifactDir = path.join(ARTIFACT_ROOT, runSlug, slug);
  fs.mkdirSync(artifactDir, { recursive: true });
  log('journey start', { persona: slug, goal: persona.goal?.slice(0, 70) });

  const { browser, viaCdp } = await openBrowser();
  // Mobile emulation and cookie injection both need a context we own; the
  // shared default context keeps desktop runs on the user's warm profile.
  const needOwnContext = LOCATION === 'mobile' || !!COOKIES;
  const context = needOwnContext
    ? await browser.newContext(
        LOCATION === 'mobile'
          ? { ...devices['iPhone 13'] }
          : { viewport: { width: 1440, height: 900 } }
      )
    : viaCdp
      ? (browser.contexts()[0] ?? (await browser.newContext()))
      : await browser.newContext({ viewport: { width: 1440, height: 900 } });
  await installPopupBlocker(context);

  if (COOKIES) {
    const jar = path.join(__dirname, '..', 'cookies', `${COOKIES}.json`);
    try {
      const cookies = JSON.parse(fs.readFileSync(jar, 'utf8'));
      await context.addCookies(cookies);
      log('cookies loaded', { jar: COOKIES, count: cookies.length });
    } catch (err) {
      log('FATAL: cookie jar unusable', { jar, error: String(err).slice(0, 120) });
      throw new Error('cookie jar unusable — refresh with save-cookies.mjs');
    }
  }
  const page = await context.newPage();

  const consoleErrors = [], networkErrors = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text().slice(0, 240)); });
  page.on('requestfailed', (r) => networkErrors.push(`FAILED ${r.url().slice(0, 130)}`));
  page.on('response', (r) => { if (r.status() >= 400) networkErrors.push(`${r.status()} ${r.url().slice(0, 130)}`); });

  const steps = [], actionLog = [], history = [];
  const actedOn = [];
  const repeats = new Map();
  try {
    await page.goto(SHARED.start_url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(3500);
    await dismissOverlays(page);

    for (let step = 1; step <= MAX_STEPS; step++) {
      const area = await inferArea(page);
      const cap = await captureHere(page, artifactDir, step, area, consoleErrors, networkErrors);
      steps.push(cap);

      const interactables = await listInteractables(page);
      const state = { step, url: page.url(), title: cap.head?.title ?? '', area };

      let action;
      try {
        action = parseJson(
          await runClaude(buildNavPrompt(persona, persona.goal, state, interactables, history), cap.screenshotPath, 120000)
        );
      } catch (err) {
        log('  nav decision failed; ending journey', { error: String(err).slice(0, 110) });
        break;
      }
      if (!action || action.kind === 'done') {
        actionLog.push(`step ${step}: [${area}] ${page.url()} — shopper stopped (${action?.why ?? 'goal met'})`);
        break;
      }

      const res = await performAction(page, action, interactables);
      const outcome = res.ok
        ? (res.navigated
            ? `navigated to ${res.after.url}`
            : res.mutations > 12
              ? `stayed on the page; the control updated it in place (${res.mutations} DOM changes) — normal behaviour, NOT a defect`
              : res.mutations > 2
                ? `stayed on the page with only minor DOM activity (${res.mutations} changes) — inconclusive, do not report`
                : 'clicked successfully but produced NO navigation and NO DOM change at all')
        : res.automationFailed
          ? `OUR TOOLING could not drive this element (${res.reason}). This is a limitation of our automation, NOT a site defect — ignore it when reporting.`
          : res.reason;
      const desc =
        `step ${step}: [${area}] ${state.url}\n` +
        `  action: ${action.kind}${action.ref !== undefined ? ` "${interactables[action.ref]?.label ?? '?'}"` : ''}` +
        `${action.text ? ` text="${action.text}"` : ''} — expected: ${action.why ?? ''}\n` +
        `  result: ${outcome}`;
      actionLog.push(desc);
      // Interaction findings (dead control, broken filter) need to name the
      // control that misbehaved. The catalog only held images and axe nodes,
      // so Quinn's dead-control finding was rejected by the validator for
      // citing no elements — it had nothing it *could* cite.
      const t = interactables[action.ref];
      if (t && action.kind === 'click') {
        actedOn.push({
          kind: res.ok && !res.changed ? 'control-no-effect' : 'control',
          label: t.label,
          href: t.href,
          step,
          area,
          url: state.url,
          changed: res.ok ? !!res.changed : null,
          automationFailed: !!res.automationFailed,
        });
      }

      const sig = `${action.kind}:${interactables[action.ref]?.label ?? action.text ?? 'scroll'}`;
      history.push(
        `${action.kind} "${interactables[action.ref]?.label ?? action.text ?? 'scroll'}" -> ${res.ok ? (res.changed ? res.after.url : 'no change') : 'could not operate'}`
      );
      // An early run clicked the same nav link eight times because a failed
      // action left the page identical and the model kept re-choosing it.
      repeats.set(sig, (repeats.get(sig) ?? 0) + 1);
      if ((repeats.get(sig) ?? 0) >= 3) {
        actionLog.push(`  (tried "${sig}" 3 times without progress — moving on)`);
        history.push(`NOTE: "${sig}" has failed repeatedly. Do not choose it again; try a different route to the goal.`);
      }
      log(`  step ${step}`, { area, action: action.kind, label: interactables[action.ref]?.label?.slice(0, 40), changed: res.changed ?? null });

      if (!res.ok && res.reason?.startsWith('blocked')) {
        actionLog.push('  (runner blocked a transactional action — shopper stopped there)');
      }
    }
  } catch (err) {
    log('journey error', { persona: slug, error: String(err).slice(0, 200) });
  }

  await page.close().catch(() => {});
  if (!viaCdp) await browser.close().catch(() => {});

  if (!steps.length) { log('no steps captured; skipping lens', { persona: slug }); continue; }

  const catalog = buildElementCatalog(steps, actedOn);

  if (persona.output === 'opportunities') {
    let opps = [];
    try {
      opps = parseJson(
        await runClaude(buildOpportunityPrompt(persona, persona.goal, steps, actionLog), steps[0].screenshotPath, 300000),
        true
      );
    } catch (err) {
      log('opportunity lens failed', { persona: slug, error: String(err).slice(0, 160) });
      continue;
    }
    log('opportunity findings', { persona: slug, steps: steps.length, proposed: opps.length });

    // Upload step screenshots + publish the walk as a shareable audit first,
    // so evidence rows can point at a real experience.
    if (!DRY && mediaConfigured()) {
      for (const st of steps) {
        if (!st.screenshotPath) continue;
        const key = `qa/${runSlug}/${slug}/${path.basename(st.screenshotPath)}`;
        try { await putMedia({ filePath: st.screenshotPath, key }); st.r2Key = key; }
        catch (err) { log('step upload failed', { step: st.step, error: String(err).slice(0, 100) }); }
      }
    }
    let expId = null;
    const auditSlug = `${runSlug}-${slug}`;
    if (!DRY) {
      try {
        const narrative = [
          `**${persona.displayName}** — ${persona.lens}`,
          '', `**Goal:** ${persona.goal}`, '',
          '## The walk', '',
          ...actionLog.map((a) => '- ' + a.split('\n')[0]),
          '', '## Opportunities', '',
          ...(opps.length
            ? opps.flatMap((o) => [`### ${o.title}`, '', String(o.thesis ?? ''), '',
                o.impact ? `**Impact:** ${o.impact}` : '', ''])
            : ['Nothing worth funding surfaced on this walk.']),
        ].filter((l) => l !== null).join('\n');
        const pub = await upsertExperienceAndReaction({
          slug: auditSlug,
          data: {
            schema_version: 1, slug: auditSlug, type: 'qa', persona: slug,
            email: {
              subject: `${persona.category === 'merchandising' ? 'Merch walk' : 'Marketing walk'} · ${persona.displayName} · ${opps.length} opportunit${opps.length === 1 ? 'y' : 'ies'}`,
              preheader: persona.goal?.slice(0, 140) ?? null,
              from: persona.fromAddress, from_display_name: persona.displayName,
              timestamp_iso: new Date().toISOString(),
              date_formatted: new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC',
            },
            // Schema requires a string score. Opportunity walks aren't
            // defect-scored; a clean walk with funded ideas reads as strong.
            review: { score: `${Math.max(1, 10 - opps.length)}/10`, raw_markdown: narrative, sections: {} },
            qa: null,
            assets: { render_image: null, render_image_key: steps[0]?.r2Key ?? null, pdf: null, webview_url: steps[0]?.url ?? SHARED.start_url },
            qa_journey: {
              goal: persona.goal ?? '', defect_count: 0,
              steps: steps.map((st) => ({ step: st.step, area: st.area, url: st.url, screenshot_key: st.r2Key ?? null })),
            },
          },
        });
        expId = pub?.experienceId ?? null;
        log('published audit', { slug: auditSlug, experienceId: !!expId });
      } catch (err) {
        log('audit publish failed (non-fatal)', { error: String(err).slice(0, 200) });
      }
    }

    const brandSlug = (await resolveBrandSlug(steps[0]?.url ?? SHARED.start_url).catch(() => null)) ?? 'skechers';
    const rows = opps.map((o) => ({
      brandSlug,
      title: o.title, thesis: o.thesis, impact: o.impact,
      category: persona.category,
      confidence: typeof o.confidence === 'number' ? o.confidence : null,
      metrics: {},
      createdBy: slug,
      evidence: [
        ...(expId ? [{ experienceId: expId, note: `journey ${auditSlug}, step ${o.step ?? '?'}` }] : []),
        ...((o.stats ?? []).slice(0, 8).map((st) => ({ note: String(st) }))),
      ],
    }));

    if (DRY) {
      rows.forEach((r) => log('  would propose', { title: r.title.slice(0, 70), conf: r.confidence }));
    } else {
      const res = await insertOpportunities(rows);
      log('opportunities filed', { ...res, board: `/brands/${brandSlug}` });
    }
    continue; // opportunity personas never enter the defect pipeline
  }

  let proposed = [];
  try {
    proposed = parseJson(
      await runClaude(
        buildFindingsPrompt(persona, persona.goal, steps, actionLog, catalog),
        steps[0].screenshotPath,
        300000
      ),
      true
    );
  } catch (err) {
    log('lens failed', { persona: slug, error: String(err).slice(0, 160) });
    continue;
  }
  grand.proposed += proposed.length;
  log('journey findings', { persona: slug, steps: steps.length, proposed: proposed.length });

  // ── proof pass ──────────────────────────────────────────────────────────
  // A screenshot of the page a defect lives on is not proof — the offer
  // drawer sits below the fold, so "evidence" for four missing-alt banners
  // was a picture of the hero carousel. Re-open each page, find the actual
  // elements, ring them in red and frame the shot on them.
  const proofBrowser = await openBrowser();
  const proofCtx = proofBrowser.viaCdp
    ? (proofBrowser.browser.contexts()[0] ?? (await proofBrowser.browser.newContext()))
    : await proofBrowser.browser.newContext({ viewport: { width: 1440, height: 900 } });
  await installPopupBlocker(proofCtx);
  const proofPage = await proofCtx.newPage();

  const rows = [];
  for (const [pi, p] of proposed.entries()) {
    const stepIdx = Number(p.step) - 1;
    const src = steps[stepIdx] ?? steps[steps.length - 1];
    const els = (Array.isArray(p.affected_element_refs) ? p.affected_element_refs : [])
      .map((i) => catalog[Number(i)])
      .filter(Boolean)
      .slice(0, 20);

    let evidence = [];
    const proofPath = path.join(artifactDir, `proof-${String(pi + 1).padStart(2, '0')}.png`);
    let proof = { matched: 0, framed: false };
    try {
      proof = await captureProof(proofPage, {
        url: src.url,
        selectors: selectorsFor(els),
        outPath: proofPath,
      });
      await clearHighlights(proofPage);
    } catch (err) {
      log('  proof capture failed', { error: String(err).slice(0, 110) });
    }

    // Fall back to the journey screenshot only if we couldn't locate anything,
    // and say so in the caption rather than passing it off as proof.
    const usePath = fs.existsSync(proofPath) ? proofPath : src.screenshotPath;
    if (usePath) {
      const key = `qa/${runSlug}/${slug}/${path.basename(usePath)}`;
      if (!DRY && mediaConfigured()) {
        await putMedia({ filePath: usePath, key }).catch((e) =>
          log('evidence upload failed', { error: String(e).slice(0, 110) })
        );
      }
      evidence = [{
        r2Key: key,
        localPath: usePath,
        caption: proof.matched
          ? `${src.area} — ${proof.matched} affected element(s) highlighted in red`
          : `${src.area} — could not locate the elements to highlight; page view only`,
        takenAt: new Date().toISOString(),
      }];
    }
    log('  proof', { finding: pi + 1, highlighted: proof.matched, framed: !!proof.framed });
    const defectType = DEFECT_TYPES.includes(p.defect_type) ? p.defect_type : 'other';
    const area = DEFECT_AREAS.includes(src.area) ? src.area : 'Off-site';
    rows.push({
      personaSlug: slug, category: persona.category,
      location: LOCATION === 'mobile' ? 'Mobile Site' : SHARED.location,
      device: LOCATION === 'mobile' ? 'iPhone' : SHARED.device,
      browser: SHARED.browser,
      reporterEmail: persona.fromAddress,
      area, url: src.url,
      description: String(p.description ?? '').slice(0, 2000),
      businessImpact: p.business_impact ?? null,
      affectedElements: els,
      expected: p.expected ?? null, observed: p.observed ?? null,
      urgency: DEFECT_URGENCIES.includes(p.urgency) ? p.urgency : 'Low',
      urgencyRationale: p.urgency_rationale ?? null,
      reproSteps: Array.isArray(p.repro_steps) ? p.repro_steps.slice(0, 10) : [],
      confidence: typeof p.confidence === 'number' ? p.confidence : null,
      defectType,
      evidence,
      dedupeKey: dedupeKey({
        personaSlug: slug, area, url: src.url, defectType,
        location: LOCATION === 'mobile' ? 'Mobile Site' : 'Desktop Site',
      }),
    });
  }

  await proofPage.close().catch(() => {});
  if (!proofBrowser.viaCdp) await proofBrowser.browser.close().catch(() => {});

  if (DRY) {
    rows.forEach((r) => log('  would file', { urgency: r.urgency, type: r.defectType, desc: r.description.slice(0, 80) }));
    fs.writeFileSync(path.join(artifactDir, 'journey.json'), JSON.stringify({ actionLog, steps: steps.map((s) => ({ step: s.step, area: s.area, url: s.url })) }, null, 2));
    continue;
  }

  // Upload the step screenshots so the published audit can show the walk.
  if (!DRY && mediaConfigured()) {
    for (const st of steps) {
      if (!st.screenshotPath) continue;
      const key = `qa/${runSlug}/${slug}/${path.basename(st.screenshotPath)}`;
      try {
        await putMedia({ filePath: st.screenshotPath, key });
        st.r2Key = key;
      } catch (err) {
        log('step upload failed', { step: st.step, error: String(err).slice(0, 110) });
      }
    }
  }

  // ── publish the journey as an experience + reaction ─────────────────────
  // Findings shouldn't live only in the admin queue: publishing the walk as a
  // type='qa' audit puts it in the same homepage listing as email and site
  // audits, and reactions.slug is what the share-token feature keys on — so
  // a QA journey becomes shareable with no extra plumbing.
  let experienceId = null;
  const auditSlug = `${runSlug}-${slug}`;
  try {
    const narrative = buildNarrative(persona, steps, actionLog, rows);
    const pub = await upsertExperienceAndReaction({
      slug: auditSlug,
      data: {
        schema_version: 1,
        slug: auditSlug,
        type: 'qa',
        persona: slug,
        email: {
          subject: `QA journey${LOCATION === 'mobile' ? ' (mobile)' : ''}${COOKIES ? ' (member)' : ''} · ${persona.displayName} · ${steps.length} steps, ${rows.length} finding(s)`,
          preheader: persona.goal?.slice(0, 140) ?? null,
          from: persona.fromAddress,
          from_display_name: persona.displayName,
          timestamp_iso: new Date().toISOString(),
          date_formatted: new Date().toISOString().replace('T', ' ').slice(0, 19) + ' UTC',
        },
        review: { score: scoreFor(rows), raw_markdown: narrative, sections: {} },
        qa: null,
        assets: {
          render_image: null,
          render_image_key: steps[0]?.r2Key ?? null,
          pdf: null,
          webview_url: steps[0]?.url ?? SHARED.start_url,
        },
        qa_journey: {
          goal: persona.goal ?? '',
          defect_count: rows.length,
          steps: steps.map((st) => ({
            step: st.step,
            area: st.area,
            url: st.url,
            screenshot_key: st.r2Key ?? null,
          })),
        },
      },
    });
    experienceId = pub?.experienceId ?? null;
    log('published audit', { slug: auditSlug, experienceId: !!experienceId });
  } catch (err) {
    log('audit publish failed (non-fatal)', { error: String(err).slice(0, 220) });
  }

  const res = await insertCandidateDefects(rows, { tenantId, experienceId });
  grand.inserted += res.inserted;
  grand.skippedDuplicate += res.skippedDuplicate;
  grand.invalid += res.skippedInvalid.length;
  res.skippedInvalid.forEach((s) => log('  rejected by validator', { errors: s.errors, desc: s.defect.description?.slice(0, 60) }));
  fs.writeFileSync(path.join(artifactDir, 'journey.json'), JSON.stringify({ actionLog, steps: steps.map((s) => ({ step: s.step, area: s.area, url: s.url })) }, null, 2));
}

log('journeys complete', grand);
log('next: node site-monitor/qa/verify.mjs --apply && node site-monitor/qa/adjudicate.mjs --apply');
// The CDP connection keeps the event loop alive after all work is done — a
// finished journey hung for 23 further minutes until the orchestrator's
// timeout killed it. All writes are awaited above; exit explicitly.
process.exit(0);
