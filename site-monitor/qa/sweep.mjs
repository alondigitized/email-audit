#!/usr/bin/env node
/**
 * QA secret-shopper sweep for skechers.com.
 *
 * Each persona in personas.json owns one lens (functional / copy / seo /
 * accessibility). For every route we capture hard evidence — screenshot,
 * console + network errors, axe violations, SEO head signals, visible text —
 * then ask that persona's lens to turn the evidence into *candidate* defects.
 *
 * Nothing here submits anything to Skechers. Candidates land in the `defect`
 * table at status='candidate' and are only reviewable after verify.mjs has
 * independently reproduced them. Filing is a human step in
 * /admin/defect-queue.
 *
 * Usage:
 *   node site-monitor/qa/sweep.mjs                     # all personas
 *   node site-monitor/qa/sweep.mjs --persona quinn-qa
 *   node site-monitor/qa/sweep.mjs --dry-run           # no DB, no R2
 *   node site-monitor/qa/sweep.mjs --max-routes 2
 *
 * Kasada bypass mirrors site-review.mjs: prefer connectOverCDP to a real
 * Chrome on :9222, fall back to playwright-extra + stealth.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { chromium as playwrightChromium } from 'playwright';
import { chromium as stealthChromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import AxeBuilder from '@axe-core/playwright';

import { putMedia, mediaConfigured } from '../../audit-pipeline/media.mjs';
import {
  insertCandidateDefects,
  getTenantId,
  dedupeKey,
  DEFECT_AREAS,
  DEFECT_URGENCIES,
  DEFECT_TYPES,
} from '../../audit-pipeline/defects.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });
dotenv.config({ path: path.join(__dirname, '..', '..', 'email-monitor', '.env') });

const DRY = process.argv.includes('--dry-run');
const argOf = (flag) => {
  const i = process.argv.indexOf(flag);
  return i === -1 ? null : process.argv[i + 1];
};
const ONLY = argOf('--persona');
const MAX_ROUTES = Number(argOf('--max-routes') || 0) || Infinity;

const CLAUDE_BIN = process.env.CLAUDE_BIN || '/Users/alontsang/.local/bin/claude';
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'sonnet';
const CLAUDE_EFFORT = process.env.CLAUDE_EFFORT || 'medium';

const defs = JSON.parse(fs.readFileSync(path.join(__dirname, 'personas.json'), 'utf8'));
const SHARED = defs._shared;
const ARTIFACT_ROOT = path.join(__dirname, '..', '..', 'reports', 'qa-artifacts');

function log(msg, extra) {
  const line = `[${new Date().toISOString()}] ${msg}${extra ? ' ' + JSON.stringify(extra) : ''}`;
  console.log(line);
}

function todaySlug() {
  return new Date().toISOString().slice(0, 10);
}

// ── browser ───────────────────────────────────────────────────────────────

async function openBrowser() {
  const cdpUrl = process.env.CDP_URL || 'http://127.0.0.1:9222';
  try {
    const b = await playwrightChromium.connectOverCDP(cdpUrl, { timeout: 5000 });
    log('connected to real Chrome over CDP', { cdpUrl });
    return { browser: b, viaCdp: true };
  } catch {
    log('CDP unavailable; falling back to stealth chromium');
    stealthChromium.use(StealthPlugin());
    const b = await stealthChromium.launch({ headless: true });
    return { browser: b, viaCdp: false };
  }
}

// ── evidence capture ──────────────────────────────────────────────────────

/**
 * Everything a lens could need to justify a defect, gathered in one visit so
 * the four personas share a single page load per route.
 */
async function captureRoute(page, route, artifactDir) {
  const consoleErrors = [];
  const networkErrors = [];
  page.on('console', (m) => {
    if (m.type() === 'error') consoleErrors.push(m.text().slice(0, 300));
  });
  page.on('requestfailed', (r) => {
    networkErrors.push(`${r.method()} ${r.url().slice(0, 160)} — ${r.failure()?.errorText ?? 'failed'}`);
  });
  page.on('response', (r) => {
    if (r.status() >= 400) networkErrors.push(`${r.status()} ${r.url().slice(0, 160)}`);
  });

  const started = Date.now();
  let httpStatus = null;
  try {
    const resp = await page.goto(route.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    httpStatus = resp?.status() ?? null;
  } catch (err) {
    log('navigation failed', { url: route.url, error: String(err).slice(0, 200) });
  }
  await page.waitForTimeout(4000);

  const shotName = `${route.area.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-${route.idx}.png`;
  const shotPath = path.join(artifactDir, shotName);
  try {
    await page.screenshot({ path: shotPath, fullPage: false });
  } catch (err) {
    log('screenshot failed', { url: route.url, error: String(err).slice(0, 160) });
  }

  let axeViolations = [];
  try {
    const res = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    axeViolations = (res.violations || [])
      .filter((v) => ['serious', 'critical'].includes(v.impact))
      .map((v) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        nodes: v.nodes.length,
        sample: v.nodes[0]?.html?.slice(0, 160) ?? '',
      }));
  } catch (err) {
    log('axe failed (non-fatal)', { error: String(err).slice(0, 160) });
  }

  const head = await page
    .evaluate(() => {
      const q = (s) => document.querySelector(s);
      const ld = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .map((s) => {
          try {
            return JSON.parse(s.textContent)['@type'];
          } catch {
            return 'INVALID_JSON';
          }
        });
      return {
        title: document.title || null,
        titleLen: (document.title || '').length,
        metaDescription: q('meta[name="description"]')?.getAttribute('content') ?? null,
        canonical: q('link[rel="canonical"]')?.getAttribute('href') ?? null,
        robots: q('meta[name="robots"]')?.getAttribute('content') ?? null,
        h1s: Array.from(document.querySelectorAll('h1')).map((h) => h.innerText.trim().slice(0, 120)),
        structuredDataTypes: ld,
        imgsMissingAlt: Array.from(document.querySelectorAll('img')).filter((i) => !i.hasAttribute('alt')).length,
        imgTotal: document.querySelectorAll('img').length,
      };
    })
    .catch(() => ({}));

  const perf = await page
    .evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0];
      const lcp = performance.getEntriesByType('largest-contentful-paint').pop();
      return {
        ttfbMs: nav ? Math.round(nav.responseStart) : null,
        domContentLoadedMs: nav ? Math.round(nav.domContentLoadedEventEnd) : null,
        lcpMs: lcp ? Math.round(lcp.startTime) : null,
      };
    })
    .catch(() => ({}));

  const visibleText = await page
    .evaluate(() => document.body.innerText.replace(/\n{3,}/g, '\n\n').slice(0, 6000))
    .catch(() => '');

  const resultCount = await page
    .evaluate(() => {
      const t = document.body.innerText;
      const m = t.match(/([\d,]+)\s+(?:results?|items?|styles?|products?)/i);
      return m ? m[1] : null;
    })
    .catch(() => null);

  return {
    ...route,
    httpStatus,
    loadMs: Date.now() - started,
    screenshotPath: fs.existsSync(shotPath) ? shotPath : null,
    consoleErrors: consoleErrors.slice(0, 25),
    networkErrors: networkErrors.slice(0, 25),
    axeViolations,
    head,
    perf,
    resultCount,
    visibleText,
  };
}

// ── the lens ──────────────────────────────────────────────────────────────

function buildPrompt(persona, capture) {
  return [
    `You are ${persona.displayName}, a retail secret shopper doing quality assurance on skechers.com.`,
    `Character: ${persona.character}`,
    `Your lens: ${persona.lens}`,
    `Your brief: ${persona.brief}`,
    `Explicitly NOT yours: ${persona.ignores}`,
    '',
    'You are reviewing ONE page. Report only defects your lens owns.',
    '',
    '=== PAGE ===',
    `URL: ${capture.url}`,
    `Area of Site: ${capture.area}`,
    `HTTP status: ${capture.httpStatus}`,
    `Load time: ${capture.loadMs}ms`,
    capture.resultCount ? `Result count shown: ${capture.resultCount}` : '',
    '',
    '=== HEAD / SEO SIGNALS ===',
    JSON.stringify(capture.head, null, 1),
    '',
    '=== PERFORMANCE ===',
    JSON.stringify(capture.perf, null, 1),
    '',
    `=== CONSOLE ERRORS (${capture.consoleErrors.length}) ===`,
    capture.consoleErrors.join('\n') || '(none)',
    '',
    `=== NETWORK ERRORS (${capture.networkErrors.length}) ===`,
    capture.networkErrors.join('\n') || '(none)',
    '',
    `=== AXE VIOLATIONS, serious/critical only (${capture.axeViolations.length}) ===`,
    JSON.stringify(capture.axeViolations, null, 1),
    '',
    '=== VISIBLE TEXT ===',
    capture.visibleText,
    '',
    '=== HOW TO REPORT ===',
    'These go to a real Skechers team that receives roughly fifteen reports in total,',
    'filed by four named humans. A wrong or trivial report costs real credibility.',
    'Report NOTHING unless the evidence above supports it. An empty list is a good',
    'outcome. Never speculate about pages you cannot see, and never report something',
    'your lens does not own.',
    '',
    `Urgency rubric: ${JSON.stringify(SHARED._urgency_rubric)}`,
    '',
    'Respond with ONLY a JSON array (no prose, no code fence). Each element:',
    '{',
    '  "description": "one specific, self-contained sentence a Skechers engineer could act on",',
    '  "expected": "what should happen",',
    '  "observed": "what actually happened, citing the evidence above",',
    `  "urgency": one of ${JSON.stringify(DEFECT_URGENCIES)},`,
    '  "urgency_rationale": "why that urgency under the rubric",',
    '  "repro_steps": ["step 1", "step 2"],',
    '  "confidence": 0.0-1.0,',
    `  "defect_type": EXACTLY one of ${JSON.stringify(DEFECT_TYPES)}`,
    '}',
    '',
    'defect_type must come from that list verbatim — it is how we recognise a',
    'defect we have already reported. Do not invent a value. Use "other" only',
    'when nothing fits. Report each distinct defect_type at most once per page.',
    'Return [] if this page is clean under your lens.',
  ]
    .filter(Boolean)
    .join('\n');
}

function runClaude(prompt, imagePath, label) {
  const args = [
    '-p',
    '--model', CLAUDE_MODEL,
    '--effort', CLAUDE_EFFORT,
    '--no-session-persistence',
    '--permission-mode', 'bypassPermissions',
  ];
  if (imagePath) args.push('--add-dir', path.dirname(imagePath));

  return new Promise((resolve, reject) => {
    const child = execFile(CLAUDE_BIN, args, {
      cwd: path.join(__dirname, '..', '..'),
      maxBuffer: 1024 * 1024 * 20,
      timeout: 300000,
      env: { ...process.env },
    });
    let out = '', err = '';
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { err += d; });
    child.on('close', (code) => {
      if (code !== 0) {
        reject(Object.assign(new Error(`claude ${label} exited ${code}`), { stdout: out, stderr: err }));
      } else resolve(out.trim());
    });
    child.on('error', reject);
    child.stdin.write(imagePath ? `${prompt}\n\nScreenshot: ${imagePath}\n` : prompt);
    child.stdin.end();
  });
}

/** Tolerate a stray code fence or leading prose around the JSON array. */
function parseDefectJson(raw) {
  let t = raw.trim();
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) t = fence[1].trim();
  const start = t.indexOf('[');
  const end = t.lastIndexOf(']');
  if (start === -1 || end === -1) return [];
  try {
    const arr = JSON.parse(t.slice(start, end + 1));
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

// ── main ──────────────────────────────────────────────────────────────────

async function resolveRoutes(page) {
  const routes = [];
  let idx = 0;
  for (const r of SHARED.routes) {
    if (routes.length >= MAX_ROUTES) break;
    let url;
    if (r.path.startsWith('__first_product_from__:')) {
      // PDP URLs aren't stable, so discover one from a PLP each run.
      const plp = SHARED.site + r.path.split(':')[1];
      try {
        await page.goto(plp, { waitUntil: 'domcontentloaded', timeout: 60000 });
        await page.waitForTimeout(3000);
        url = await page.evaluate(() => {
          const a = document.querySelector('a[href*="/style/"], a[href*="/product/"]');
          return a ? new URL(a.getAttribute('href'), location.origin).href : null;
        });
      } catch { url = null; }
      if (!url) { log('could not resolve a PDP; skipping', { from: plp }); continue; }
    } else {
      url = SHARED.site.replace(/\/$/, '') + r.path;
    }
    routes.push({ area: r.area, url, idx: idx++ });
  }
  return routes;
}

const personas = Object.entries(defs).filter(
  ([slug]) => !slug.startsWith('_') && (!ONLY || slug === ONLY)
);
if (!personas.length) {
  console.error(`no personas matched${ONLY ? ` --persona ${ONLY}` : ''}`);
  process.exit(1);
}

const runSlug = `${todaySlug()}-qa-sweep`;
const artifactDir = path.join(ARTIFACT_ROOT, runSlug);
fs.mkdirSync(artifactDir, { recursive: true });
log('sweep starting', { personas: personas.map(([s]) => s), dryRun: DRY, artifactDir });

const { browser, viaCdp } = await openBrowser();
const context = viaCdp
  ? (browser.contexts()[0] ?? (await browser.newContext()))
  : await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const routes = await resolveRoutes(page);
log('routes resolved', { count: routes.length });

const captures = [];
for (const route of routes) {
  log('capturing', { area: route.area, url: route.url });
  captures.push(await captureRoute(page, route, artifactDir));
}

await page.close().catch(() => {});
if (!viaCdp) await browser.close().catch(() => {});

const tenantId = DRY ? null : await getTenantId(SHARED.tenant);
let totals = { inserted: 0, skippedDuplicate: 0, invalid: 0, proposed: 0 };

for (const [slug, persona] of personas) {
  const mine = captures.filter((c) => persona.areas.includes(c.area));
  for (const capture of mine) {
    let raw;
    try {
      raw = await runClaude(buildPrompt(persona, capture), capture.screenshotPath, `${slug}:${capture.area}`);
    } catch (err) {
      log('lens failed (non-fatal)', { persona: slug, area: capture.area, error: String(err).slice(0, 200) });
      continue;
    }
    const proposed = parseDefectJson(raw);
    totals.proposed += proposed.length;
    log('lens result', { persona: slug, area: capture.area, proposed: proposed.length });
    if (!proposed.length) continue;

    // Evidence is mandatory — the intake form requires a screenshot, so a
    // capture without one can't produce a filable defect.
    let evidence = [];
    if (capture.screenshotPath) {
      const key = `qa/${runSlug}/${slug}/${path.basename(capture.screenshotPath)}`;
      if (!DRY && mediaConfigured()) {
        try {
          await putMedia({ filePath: capture.screenshotPath, key });
        } catch (err) {
          log('evidence upload failed', { key, error: String(err).slice(0, 160) });
        }
      }
      evidence = [{
        r2Key: key,
        localPath: capture.screenshotPath,
        caption: `${capture.area} — ${capture.url}`,
        takenAt: new Date().toISOString(),
      }];
    }

    const rows = proposed.map((p) => ({
      personaSlug: slug,
      category: persona.category,
      location: SHARED.location,
      device: SHARED.device,
      browser: SHARED.browser,
      reporterEmail: persona.fromAddress,
      area: DEFECT_AREAS.includes(capture.area) ? capture.area : 'Off-site',
      url: capture.url,
      description: String(p.description ?? '').slice(0, 2000),
      expected: p.expected ?? null,
      observed: p.observed ?? null,
      urgency: DEFECT_URGENCIES.includes(p.urgency) ? p.urgency : 'Low',
      urgencyRationale: p.urgency_rationale ?? null,
      reproSteps: Array.isArray(p.repro_steps) ? p.repro_steps.slice(0, 10) : [],
      confidence: typeof p.confidence === 'number' ? p.confidence : null,
      // Anything the model invented outside the fixed list collapses to
      // 'other' rather than silently becoming its own dedupe class.
      defectType: DEFECT_TYPES.includes(p.defect_type) ? p.defect_type : 'other',
      evidence,
      dedupeKey: dedupeKey({
        personaSlug: slug,
        area: capture.area,
        url: capture.url,
        defectType: DEFECT_TYPES.includes(p.defect_type) ? p.defect_type : 'other',
      }),
    }));

    if (DRY) {
      rows.forEach((r) => log('  would file', { urgency: r.urgency, desc: r.description.slice(0, 90) }));
      continue;
    }

    const res = await insertCandidateDefects(rows, { tenantId });
    totals.inserted += res.inserted;
    totals.skippedDuplicate += res.skippedDuplicate;
    totals.invalid += res.skippedInvalid.length;
    res.skippedInvalid.forEach((s) =>
      log('  rejected by validator', { errors: s.errors, desc: s.defect.description?.slice(0, 70) })
    );
  }
}

log('sweep complete', totals);
log('next: node site-monitor/qa/verify.mjs --apply   (re-tests candidates before human review)');
