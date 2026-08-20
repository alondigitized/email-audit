#!/usr/bin/env node
/**
 * Daily Site Experience Journey — Playwright-based site review.
 *
 * Runs a persona's journey through skechers.com on a mobile device,
 * capturing screenshots, HTML, console/network errors, accessibility
 * violations, and performance metrics at each step. Then generates a
 * holistic Claude review from the persona's perspective and publishes
 * the result to the Experience Intelligence site.
 *
 * Usage:
 *   node site-review.mjs                  # defaults to walker
 *   node site-review.mjs --persona maya   # run as a different persona
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFile } from 'child_process';
import { promisify } from 'util';
import { chromium as playwrightChromium, devices } from 'playwright';
import { chromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import AxeBuilder from '@axe-core/playwright';

// Apply stealth patches — makes Playwright look like a real Chrome browser
chromium.use(StealthPlugin());
import dotenv from 'dotenv';
import { writeVaultNote } from '../audit-pipeline/vault-writer.mjs';
import { putMedia, auditMediaKey, mediaConfigured } from '../audit-pipeline/media.mjs';
import { reapStrayPages, releaseBrowser } from '../audit-pipeline/browser-hygiene.mjs';
import { auditDataSchema } from '../site/lib/schema/audit.mjs';
import {
  upsertAuditRow,
  upsertExperienceAndReaction,
  dbConfigured,
} from '../audit-pipeline/publish.mjs';
import { extractAll } from '../audit-pipeline/extract.mjs';

const execFileAsync = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const PERSONA_NAME = process.argv.includes('--persona')
  ? process.argv[process.argv.indexOf('--persona') + 1]
  : 'walker';

// --dry-run: walk the journey but skip mutating steps (add_to_cart,
// view_cart). Used by onboard-persona.mjs as a smoke test after
// installing a new persona — catches Kasada blocks, missing cookies,
// broken selectors BEFORE Saturday's real run. Also skips publishing
// the audit to the DB + vault so we don't pollute review history.
const DRY_RUN = process.argv.includes('--dry-run');

const PIPELINE_DIR = path.join(path.dirname(__dirname), 'audit-pipeline');
const SITE_MANIFEST = path.join(PIPELINE_DIR, 'published-audits.json');
const ARTIFACTS_BASE = path.join(path.dirname(__dirname), 'reports', 'site-artifacts');
const HISTORY_DIR = path.join(__dirname, 'history');
const LOG_DIR = path.join(__dirname, 'logs');
const LOG_PATH = path.join(LOG_DIR, 'site-review.log');

const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'sonnet';
const CLAUDE_EFFORT = process.env.CLAUDE_EFFORT || 'high';
const OPENCLAW_PROFILE = process.env.OPENCLAW_PROFILE || 'walker';
const OPENCLAW_CONFIG_PATH = process.env.OPENCLAW_CONFIG_PATH || '/Users/alontsang/.openclaw-walker/openclaw.json';
const OPENCLAW_STATE_DIR = process.env.OPENCLAW_STATE_DIR || '/Users/alontsang/.openclaw-walker';
const SITE_BASE_URL = process.env.SITE_BASE_URL || 'https://email-audit-git-main-alons-projects-c876f5a6.vercel.app';
const GH_TOKEN = process.env.GH_TOKEN || '';

fs.mkdirSync(LOG_DIR, { recursive: true });
fs.mkdirSync(HISTORY_DIR, { recursive: true });
fs.mkdirSync(ARTIFACTS_BASE, { recursive: true });

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

// Strip secrets from any string before it hits stdout or the log file.
// Belt-and-suspenders: redact known env-var values AND known token shapes.
const SECRET_ENV_VARS = ['GH_TOKEN', 'SKECHERS_PASSWORD', 'ANTHROPIC_API_KEY', 'CLAUDE_API_KEY'];
const SECRET_PATTERNS = [
  [/gh[poursb]_[A-Za-z0-9_]{20,}/g, '<GH_TOKEN_REDACTED>'],
  [/github_pat_[A-Za-z0-9_]{20,}/g, '<GH_PAT_REDACTED>'],
  [/sk-ant-[A-Za-z0-9_-]{20,}/g, '<ANTHROPIC_KEY_REDACTED>'],
  [/(https?:\/\/)[^/\s:@]+:[^/\s@]+@/g, '$1<credentials_redacted>@'],
];

function sanitize(s) {
  if (typeof s !== 'string') return s;
  let out = s;
  for (const k of SECRET_ENV_VARS) {
    const v = process.env[k];
    if (v && v.length >= 8) out = out.split(v).join(`<${k}_REDACTED>`);
  }
  for (const [re, sub] of SECRET_PATTERNS) out = out.replace(re, sub);
  return out;
}

function log(message, extra) {
  const raw = `[${new Date().toISOString()}] ${message}${extra ? ` ${JSON.stringify(extra)}` : ''}`;
  const line = sanitize(raw);
  console.log(line);
  fs.appendFileSync(LOG_PATH, line + '\n');
}

function todaySlug() {
  return new Date().toISOString().slice(0, 10);
}

async function loadPersona(name) {
  // DB-first (authoritative after the persona-management refactor).
  // Falls back to the legacy site-monitor/personas/{slug}.json if the
  // DB has no profile yet or DATABASE_URL isn't set on this host.
  const { loadPersonaProfile } = await import(
    '../audit-pipeline/persona-profile.mjs'
  );
  const profile = await loadPersonaProfile(name);
  if (profile) return profile;
  const p = path.join(__dirname, 'personas', `${name}.json`);
  if (!fs.existsSync(p)) throw new Error(`Persona not found: ${p}`);
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function getCredentials(persona) {
  const prefix = persona.credentials_env_prefix || 'SKECHERS';
  const email = process.env[`${prefix}_EMAIL`];
  const password = process.env[`${prefix}_PASSWORD`];
  if (!email || !password) throw new Error(`Missing ${prefix}_EMAIL or ${prefix}_PASSWORD in .env`);
  return { email, password };
}

function shorten(s, max = 6000) {
  return s.length > max ? s.slice(0, max) + '\n... (truncated)' : s;
}

// ---------------------------------------------------------------------------
// Playwright Journey
// ---------------------------------------------------------------------------

// Journey step builder lives in site/lib/journey-preview.mjs as the
// single source of truth — the admin UI preview pane and the CI smoke
// test (scripts/verify-journey.mjs) import the same function, so we
// can't drift between what the daemon plans and what the operator sees.
import {
  buildJourneySteps,
  MUTATING_STEP_ACTIONS,
} from '../site/lib/journey-preview.mjs';

async function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function randomInt(nExclusive) {
  return Math.floor(Math.random() * nExclusive);
}

async function captureStep(page, stepNum, stepId, artifactDir) {
  const prefix = `step-${String(stepNum).padStart(2, '0')}-${stepId}`;
  // Viewport screenshot (what user sees)
  await page.screenshot({ path: path.join(artifactDir, `${prefix}-viewport.png`) });
  // Full-page screenshot (proof)
  await page.screenshot({ path: path.join(artifactDir, `${prefix}-fullpage.png`), fullPage: true });
  // Rendered HTML
  const html = await page.content();
  fs.writeFileSync(path.join(artifactDir, `${prefix}.html`), html, 'utf8');
  return { viewportScreenshot: `${prefix}-viewport.png`, fullpageScreenshot: `${prefix}-fullpage.png`, url: page.url() };
}

async function runAxe(page) {
  try {
    const results = await new AxeBuilder({ page }).analyze();
    return results.violations || [];
  } catch (err) {
    log('axe-core failed (non-fatal)', { error: String(err).slice(0, 500) });
    return [];
  }
}

async function capturePerformance(page) {
  try {
    return await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0];
      const paint = performance.getEntriesByType('paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint');
      const cls = performance.getEntriesByType('layout-shift');
      return {
        ttfb_ms: nav ? Math.round(nav.responseStart - nav.requestStart) : null,
        lcp_ms: lcp.length ? Math.round(lcp[lcp.length - 1].startTime) : null,
        cls: cls.length ? Math.round(cls.reduce((sum, e) => sum + (e.hadRecentInput ? 0 : e.value), 0) * 1000) / 1000 : null,
      };
    });
  } catch {
    return { ttfb_ms: null, lcp_ms: null, cls: null };
  }
}

async function dismissPopups(page) {
  // Try multiple rounds — Skechers stacks popups
  for (let round = 0; round < 3; round++) {
    let dismissed = false;
    const selectors = [
      // Skechers-specific modal close button
      'button.js-modal-close',
      'button.close[aria-label="close"]',
      // Cookie banners
      'button:has-text("Accept")',
      'button:has-text("Accept All")',
      'button:has-text("Got it")',
      '[id*="cookie"] button',
      '[class*="cookie"] button',
      // Newsletter modals
      '[class*="modal"] button[class*="close"]',
      '[class*="modal"] [aria-label="Close"]',
      'button[aria-label="Close"]',
      '[class*="popup"] button[class*="close"]',
      // Generic overlays
      '[class*="overlay"] button[class*="close"]',
      // Skechers "Give Feedback" tab — not a blocker but can interfere
    ];
    for (const sel of selectors) {
      try {
        const el = page.locator(sel).first();
        if (await el.isVisible({ timeout: 1000 })) {
          await el.click();
          await delay(500);
          dismissed = true;
        }
      } catch { /* not found, continue */ }
    }
    if (!dismissed) break;
    await delay(500);
  }
}

async function runJourney(persona, credentials, artifactDir) {
  const device = devices['iPhone 14'];
  const consoleErrors = [];
  const networkErrors = [];
  const steps = [];
  let allAxeViolations = [];

  // Connect to real Chrome if available (bypasses Kasada), else launch Playwright's Chromium
  let browser, context, usingRealChrome = false;
  const CHROME_DEBUG_PORT = process.env.CHROME_DEBUG_PORT || '9222';
  try {
    const cdpUrl = `http://localhost:${CHROME_DEBUG_PORT}`;
    browser = await playwrightChromium.connectOverCDP(cdpUrl);
    // Reap tabs orphaned by previous crashed runs on the shared Chrome.
    await reapStrayPages(browser);
    // Use Chrome's default context (carries real fingerprint + cookies)
    context = browser.contexts()[0] || await browser.newContext({ ...device, bypassCSP: true });
    usingRealChrome = true;
    log('Connected to real Chrome via CDP (using default context)');
  } catch {
    log('No real Chrome found, launching Playwright Chromium');
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext({ ...device, bypassCSP: true });
  }

  const page = await context.newPage();
  // Everything below runs inside try/finally: on the shared CDP Chrome a
  // disconnect without page.close() leaves this tab (and its renderer
  // process) alive forever — the memory leak compounds nightly.
  try {

  // Set mobile viewport even when using Chrome's default context
  await page.setViewportSize({ width: device.viewport.width, height: device.viewport.height });

  // Capture console errors and network failures
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push({ text: msg.text(), url: page.url() });
    }
  });
  page.on('response', response => {
    if (response.status() >= 400) {
      networkErrors.push({ url: response.url(), status: response.status(), pageUrl: page.url() });
    }
  });

  const journeySteps = buildJourneySteps(persona);
  log('Journey plan', { totalSteps: journeySteps.length });

  let stepNum = 0;

  for (const step of journeySteps) {
    stepNum++;
    // Dry-run: walk the journey for visibility (screenshots still captured)
    // but skip actions that mutate state on the retailer side or would
    // require a valid product selector to work. The point is to catch
    // navigation + Kasada + login regressions, not to exercise checkout.
    if (DRY_RUN && MUTATING_STEP_ACTIONS.has(step.action)) {
      log(`Step ${stepNum}: ${step.label} [dry-run skip]`);
      steps.push({ step: stepNum, id: step.id, label: step.label, url: '', status: 'skipped', error: null, perf: null });
      continue;
    }
    log(`Step ${stepNum}: ${step.label}`);
    const stepResult = { step: stepNum, id: step.id, label: step.label, url: '', status: 'ok', error: null, perf: null };

    try {
      switch (step.action) {
        case 'navigate':
          await page.goto(persona.site, { waitUntil: 'domcontentloaded', timeout: 30000 });
          await delay(2000);
          break;

        case 'dismiss_popups':
          await dismissPopups(page);
          break;

        case 'login': {
          // Try loading saved cookies first (from manual login session)
          const cookiePath = path.join(__dirname, 'cookies', `${PERSONA_NAME}-skechers.json`);
          if (fs.existsSync(cookiePath)) {
            try {
              const cookies = JSON.parse(fs.readFileSync(cookiePath, 'utf8'));
              await context.addCookies(cookies);
              await page.goto(persona.site, { waitUntil: 'domcontentloaded', timeout: 30000 });
              await delay(2000);
              await dismissPopups(page);
              log('Loaded saved login cookies');
            } catch (err) {
              log('Failed to load saved cookies', { error: String(err).slice(0, 200) });
            }
          } else {
            // No saved cookies — try form login via hamburger nav
            try {
              const hamburger = page.locator('#mobile-menu-button, button.navbar-toggler').first();
              await hamburger.click({ timeout: 5000 }).catch(() => {});
              await delay(1500);
              const loginLink = page.locator('a:has-text("Log in")').first();
              await loginLink.click({ timeout: 5000 });
              await page.waitForLoadState('domcontentloaded');
              await delay(3000);
              await dismissPopups(page);
              await page.waitForSelector('input[type="password"]', { timeout: 15000 });
              await delay(1000);
              const emailInput = page.locator('#login-form-email, form input[type="email"]').first();
              const passInput = page.locator('input[type="password"]').first();
              await emailInput.fill(credentials.email);
              await delay(300);
              await passInput.fill(credentials.password);
              await delay(500);
              const submitBtn = page.locator('form:has(input[type="password"]) button').first();
              await submitBtn.click();
              await page.waitForLoadState('domcontentloaded');
              await delay(3000);
              // Save cookies for next run
              const cookies = await context.cookies();
              fs.mkdirSync(path.join(__dirname, 'cookies'), { recursive: true });
              fs.writeFileSync(cookiePath, JSON.stringify(cookies, null, 2));
              log('Login successful — saved cookies for future runs');
              await dismissPopups(page);
            } catch (loginErr) {
              log('Login failed — continuing as logged-out user', { error: String(loginErr).slice(0, 200) });
              await page.goto(persona.site, { waitUntil: 'domcontentloaded', timeout: 15000 });
              await delay(2000);
              await dismissPopups(page);
            }
          }
          break;
        }

        case 'nav_direct': {
          // Used by multi-target journeys — direct nav to a full joined
          // URL path like "kids/girls/shoes" without simulating the
          // hamburger drilldown. Robust to category-menu shuffles.
          const p = String(step.nav_path || '').replace(/^\/+|\/+$/g, '');
          if (!p) throw new Error('nav_direct: empty nav_path');
          await page.goto(`${persona.site}/${p}/`, {
            waitUntil: 'domcontentloaded',
            timeout: 30000,
          });
          await page.waitForLoadState('domcontentloaded');
          await delay(2000);
          await dismissPopups(page);
          break;
        }

        case 'nav_category': {
          const catId = String(step.nav_top || step.target || '').toLowerCase();
          if (!catId) throw new Error('nav_category: no target category');
          try {
            // Try interactive: hamburger menu → category link
            const hamburger = page.locator('#mobile-menu-button, button.navbar-toggler').first();
            await hamburger.click({ timeout: 5000 });
            await delay(1500);
            const catLink = page.locator(`#${catId}, a[href="/${catId}/"]`).first();
            await catLink.click({ timeout: 5000 });
          } catch {
            // Fallback: navigate directly
            log('Hamburger nav failed, using direct URL');
            await page.goto(`${persona.site}/${catId}/`, { waitUntil: 'domcontentloaded', timeout: 30000 });
          }
          await page.waitForLoadState('domcontentloaded');
          await delay(2000);
          await dismissPopups(page);
          break;
        }

        case 'nav_subcategory': {
          // On mobile, after clicking the top category, the subcategory
          // link might be visible or we navigate directly. Top comes from
          // the step (so multi-target journeys can traverse different
          // top-level categories within one run — Girls>Shoes then
          // Boys>Shoes).
          const top = String(step.nav_top || (persona.category_path && persona.category_path[0]) || '').toLowerCase();
          const sub = String(step.nav_sub || step.target || '').toLowerCase();
          if (!top || !sub) throw new Error('nav_subcategory: missing nav_top or nav_sub');
          const subLink = page.locator(`a[href*="/${top}/${sub}/"]`).first();
          try {
            await subLink.click({ timeout: 5000 });
          } catch {
            await page.goto(`${persona.site}/${top}/${sub}/`, { waitUntil: 'domcontentloaded', timeout: 30000 });
          }
          await page.waitForLoadState('domcontentloaded');
          await delay(2000);
          await dismissPopups(page);
          break;
        }

        case 'first_product': {
          // Skechers V2 product tiles — pick a random one from the top 24
          // (one mobile scroll's worth) so the daily journey covers varied
          // products instead of always viewing the top-merchandised one.
          const productTiles = page.locator('a.c-product-tile-V2__title, a.c-product-tile-V2__body-elements-anchor-wrapper, a.c-product-tile__title');
          const count = await productTiles.count();
          const pool = Math.min(count, 24);

          if (pool === 0) {
            throw new Error('No product tiles found on category page');
          }

          // Retry up to 3 times with different random products if PDP load fails
          let lastErr = null;
          const triedIndexes = new Set();
          for (let attempt = 0; attempt < 3; attempt++) {
            let idx = randomInt(pool);
            // Avoid re-picking the same index on retry
            let guard = 0;
            while (triedIndexes.has(idx) && guard < 10 && triedIndexes.size < pool) {
              idx = randomInt(pool);
              guard++;
            }
            triedIndexes.add(idx);
            log(`Selecting product`, { idx, poolSize: pool, attempt: attempt + 1 });
            try {
              await productTiles.nth(idx).click({ timeout: 10000 });
              await page.waitForLoadState('domcontentloaded');
              await delay(2000);
              await dismissPopups(page);
              lastErr = null;
              break;
            } catch (err) {
              lastErr = err;
              log(`Product index failed, retrying with different product`, { idx, error: String(err).slice(0, 200) });
              // Navigate back to the category list for the next attempt
              await page.goBack({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => {});
              await delay(1000);
            }
          }
          if (lastErr) throw lastErr;
          break;
        }

        case 'add_to_cart': {
          // Select a size first (Skechers uses .c-size-selector buttons)
          const sizeBtn = page.locator('.c-size-selector button:not([disabled]):not(.unavailable), button[data-attr-value]:not([disabled])').first();
          if (await sizeBtn.isVisible({ timeout: 3000 })) {
            await sizeBtn.click();
            await delay(500);
          }
          // Add to cart
          const addBtn = page.locator('button.add-to-cart, button:has-text("Add to Cart"), button:has-text("ADD TO CART")').first();
          await addBtn.click({ timeout: 10000 });
          await delay(3000);
          await dismissPopups(page);
          break;
        }

        case 'view_cart': {
          // Click cart icon via JS
          try {
            await page.locator('#minicart-link, a[href*="/cart"]').first().evaluate(el => el.click());
          } catch {
            await page.goto(`${persona.site}/cart/`, { waitUntil: 'domcontentloaded', timeout: 30000 });
          }
          // Wait for Kasada challenge to resolve
          try {
            await page.waitForSelector('.cart-page, .cart-empty, #cart-items, [class*="cart"]', { timeout: 15000 });
          } catch {
            log('Cart page may be blocked by bot protection');
          }
          await delay(2000);
          await dismissPopups(page);
          break;
        }

        case 'search': {
          // Navigate to search results directly via URL. Query comes from
          // the step (so multi-target journeys search for the first
          // target's term) and falls back to persona.search_term.
          const q = step.search_term || persona.search_term || '';
          if (!q) throw new Error('search: no query term');
          const searchUrl = `${persona.site}/search?q=${encodeURIComponent(q)}`;
          await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
          await delay(2000);
          await dismissPopups(page);
          break;
        }
      }

      // Capture artifacts for this step
      const captured = await captureStep(page, stepNum, step.id, artifactDir);
      stepResult.url = captured.url;
      stepResult.viewportScreenshot = captured.viewportScreenshot;
      stepResult.fullpageScreenshot = captured.fullpageScreenshot;

      // Performance metrics (skip for popup dismissal step)
      if (step.action !== 'dismiss_popups') {
        stepResult.perf = await capturePerformance(page);
      }

      // Axe accessibility (on key pages only)
      if (['homepage', 'mens-shoes', 'product', 'cart', 'search'].includes(step.id)) {
        const violations = await runAxe(page);
        allAxeViolations.push(...violations.map(v => ({ ...v, page: step.label, url: stepResult.url })));
      }

    } catch (err) {
      stepResult.status = 'failed';
      stepResult.error = String(err).slice(0, 500);
      log(`Step ${stepNum} failed`, { step: step.label, error: stepResult.error });
      // Capture error state
      try {
        const captured = await captureStep(page, stepNum, step.id, artifactDir);
        stepResult.url = captured.url;
        stepResult.viewportScreenshot = captured.viewportScreenshot;
        stepResult.fullpageScreenshot = captured.fullpageScreenshot;
      } catch { /* can't capture, continue */ }
      // Recover: navigate back to site root so next step starts clean
      try {
        await page.goto(persona.site, { waitUntil: 'domcontentloaded', timeout: 15000 });
        await delay(2000);
        await dismissPopups(page);
      } catch { /* recovery failed, continue anyway */ }
    }

    steps.push(stepResult);
    // Human-like delay between steps — wider range (1.5-4.5s) so the
    // journey reads as a thoughtful person browsing, not a script pacing
    // through a checklist. Reduces bot-detection signals as well.
    await delay(1500 + Math.random() * 3000);
  }

  } finally {
    await releaseBrowser({ browser, page, viaCdp: usingRealChrome });
  }

  // Save collected data
  fs.writeFileSync(path.join(artifactDir, 'console-errors.json'), JSON.stringify(consoleErrors, null, 2));
  fs.writeFileSync(path.join(artifactDir, 'network-errors.json'), JSON.stringify(networkErrors, null, 2));
  fs.writeFileSync(path.join(artifactDir, 'axe-violations.json'), JSON.stringify(allAxeViolations, null, 2));
  fs.writeFileSync(path.join(artifactDir, 'performance-metrics.json'), JSON.stringify(
    steps.filter(s => s.perf).map(s => ({ step: s.step, label: s.label, url: s.url, ...s.perf })),
    null, 2
  ));

  return { steps, consoleErrors, networkErrors, axeViolations: allAxeViolations };
}

// ---------------------------------------------------------------------------
// Claude Review Generation
// ---------------------------------------------------------------------------

function openclawExec(commandArgs, maxBuffer = 1024 * 1024 * 10) {
  return execFileAsync('openclaw', ['--profile', OPENCLAW_PROFILE, ...commandArgs], {
    maxBuffer,
    env: { ...process.env, OPENCLAW_PROFILE, OPENCLAW_CONFIG_PATH, OPENCLAW_STATE_DIR },
  });
}

async function generateReview(message, { images = [], label = 'review' } = {}) {
  const args = ['-p', '--model', CLAUDE_MODEL, '--effort', CLAUDE_EFFORT, '--no-session-persistence', '--permission-mode', 'bypassPermissions'];
  const addedDirs = new Set();
  for (const img of images) {
    const dir = path.dirname(img);
    if (!addedDirs.has(dir)) { args.push('--add-dir', dir); addedDirs.add(dir); }
  }
  const claudeBin = process.env.CLAUDE_BIN || '/Users/alontsang/.local/bin/claude';
  const child = execFile(claudeBin, args, {
    cwd: path.dirname(__dirname),
    maxBuffer: 1024 * 1024 * 20,
    timeout: 600000,
    env: { ...process.env },
  });
  child.stdin.write(message);
  child.stdin.end();
  const { stdout, stderr } = await new Promise((resolve, reject) => {
    let out = '', err = '';
    child.stdout.on('data', d => { out += d; });
    child.stderr.on('data', d => { err += d; });
    child.on('close', code => {
      if (code !== 0) reject(Object.assign(new Error(`claude exited with code ${code}`), { stdout: out, stderr: err }));
      else resolve({ stdout: out, stderr: err });
    });
    child.on('error', reject);
  });
  if (stderr?.trim()) log(`claude ${label} stderr`, { stderr: stderr.trim().slice(0, 1000) });
  const review = stdout.trim();
  if (!review) throw new Error(`claude returned empty ${label}`);
  return review;
}

function buildContentPrompt(persona, steps, artifactDir) {
  const viewportImages = steps
    .filter(s => s.viewportScreenshot)
    .map(s => `- Step ${s.step} (${s.label}): ${path.join(artifactDir, s.viewportScreenshot)}`);

  const targets = Array.isArray(persona.targets) ? persona.targets : [];
  const targetPreamble =
    targets.length > 1
      ? [
          '',
          'In this session you were shopping for MULTIPLE people in one visit:',
          ...targets.map((t) => `  - ${t.label}`),
          'The journey walks through each shopping target in order. When reviewing each step, call out WHOM that step was about (the 5yo girl, the 9yo boy, etc.) and whether the site made it easy to find the right products for that person.',
        ]
      : [];

  return [
    `You are ${persona.name}, a ${persona.age}-year-old ${persona.generation} ${persona.gender.toLowerCase()}.`,
    `${persona.style}. ${persona.shopping_habits}. ${persona.tech_comfort}.`,
    '',
    `You just walked through skechers.com on your phone. Review the ENTIRE journey from YOUR perspective.`,
    'The attached images are mobile screenshots of each step — review what you SEE, not code.',
    ...targetPreamble,
    '',
    'Your journey steps:',
    ...steps.map(s => `  ${s.step}. ${s.label}: ${s.url || '(failed)'}${s.status === 'failed' ? ` [FAILED: ${s.error}]` : ''}`),
    '',
    'Use this exact review structure:',
    '## 1. Executive Summary',
    '## 2. Business Impact Score (1-10)',
    "## 3. What's Working",
    "## 4. What's Weak",
    '## 5. Recommendations',
    '## 6. Bottom Line',
    '## 7. Evidence',
    '   For each step in the journey, describe:',
    '   - What you saw on screen',
    '   - Whether it was easy to use on a phone',
    '   - Any friction, confusion, or delight',
    '   - Whether the experience felt personalized to you',
    '',
    'Evaluate from your persona perspective:',
    `- Would a ${persona.age}-year-old find this navigation intuitive?`,
    '- Are touch targets large enough for comfortable tapping?',
    '- Is text readable without zooming?',
    `- Is ${persona.focus_areas.join(', ')} content prominently featured?`,
    '- Does the logged-in experience feel personalized?',
    '- Did the cart work correctly?',
    `- Did search for "${persona.search_term}" return relevant results?`,
    '',
    'IMPORTANT: Use the Read tool to view each screenshot before writing your review:',
    ...viewportImages,
  ].join('\n');
}

function buildTechnicalPrompt(steps, artifactDir, consoleErrors, networkErrors, axeViolations, perfMetrics) {
  const htmlSamples = steps
    .filter(s => s.id !== 'popups' && s.status === 'ok')
    .slice(0, 3) // homepage, product, search — most important
    .map(s => {
      const htmlPath = path.join(artifactDir, `step-${String(s.step).padStart(2, '0')}-${s.id}.html`);
      if (!fs.existsSync(htmlPath)) return '';
      return `--- ${s.label} (${s.url}) ---\n${shorten(fs.readFileSync(htmlPath, 'utf8'), 4000)}`;
    })
    .filter(Boolean)
    .join('\n\n');

  const parts = [
    'You are performing a TECHNICAL audit of a mobile site journey through skechers.com.',
    'Focus on code-level and infrastructure issues. Do NOT comment on visual design or marketing.',
    '',
    'Use this exact structure:',
    '## Technical Summary',
    '## Accessibility',
    '## SEO',
    '## Performance',
    '## Mobile Optimization',
    '## Console & Network Errors',
    '## Recommendations',
    '',
    'Style: concise, factual, evidence-based. If no issues in a category, say "No issues found."',
  ];

  if (perfMetrics.length) {
    parts.push('', 'PERFORMANCE METRICS (Web Vitals per step):');
    for (const m of perfMetrics) {
      parts.push(`  ${m.label}: TTFB=${m.ttfb_ms ?? '?'}ms, LCP=${m.lcp_ms ?? '?'}ms, CLS=${m.cls ?? '?'}`);
    }
  }

  if (axeViolations.length) {
    parts.push('', `AXE ACCESSIBILITY VIOLATIONS (${axeViolations.length} total):`);
    for (const v of axeViolations.slice(0, 20)) {
      parts.push(`  [${v.impact}] ${v.id}: ${v.description} (${v.page})`);
    }
    if (axeViolations.length > 20) parts.push(`  ... and ${axeViolations.length - 20} more`);
  }

  if (consoleErrors.length) {
    parts.push('', `CONSOLE ERRORS (${consoleErrors.length}):`);
    for (const e of consoleErrors.slice(0, 10)) {
      parts.push(`  ${e.text.slice(0, 200)}`);
    }
  }

  if (networkErrors.length) {
    parts.push('', `NETWORK ERRORS (${networkErrors.length}):`);
    for (const e of networkErrors.slice(0, 10)) {
      parts.push(`  ${e.status} ${e.url.slice(0, 200)}`);
    }
  }

  if (htmlSamples) {
    parts.push('', 'HTML SOURCE SAMPLES (truncated):', htmlSamples);
  }

  return parts.join('\n');
}

// ---------------------------------------------------------------------------
// Publishing
// ---------------------------------------------------------------------------

function buildAuditData(persona, slug, steps, reviewText, score, consoleErrors, networkErrors, axeViolations) {
  const now = new Date();
  const journeySteps = steps.map(s => ({
    step: s.step,
    label: s.label,
    viewport_screenshot: s.viewportScreenshot || null,
    fullpage_screenshot: s.fullpageScreenshot || null,
    url: s.url || '',
    status: s.status,
  }));

  // Build QA from console/network errors and axe violations
  const qaChecks = [];
  for (const e of consoleErrors.slice(0, 20)) {
    qaChecks.push({ check_id: 'console_error', status: 'warn', label: 'Console error', detail: e.text.slice(0, 200), url: e.url });
  }
  for (const e of networkErrors.slice(0, 20)) {
    qaChecks.push({ check_id: `network_${e.status}`, status: e.status >= 500 ? 'fail' : 'warn', label: `HTTP ${e.status}`, detail: `Failed request`, url: e.url });
  }
  for (const v of axeViolations.slice(0, 20)) {
    qaChecks.push({ check_id: `axe_${v.id}`, status: v.impact === 'critical' ? 'fail' : 'warn', label: v.id, detail: `${v.description} (${v.page})` });
  }

  const totalIssues = qaChecks.filter(c => c.status === 'fail').length;
  const totalWarnings = qaChecks.filter(c => c.status === 'warn').length;
  const totalChecks = qaChecks.length;
  const passRate = totalChecks > 0 ? `${Math.round(((totalChecks - totalIssues - totalWarnings) / Math.max(totalChecks, 1)) * 100)}%` : '100%';

  const perfSteps = JSON.parse(fs.readFileSync(path.join(ARTIFACTS_BASE, slug, 'performance-metrics.json'), 'utf8'));

  return {
    schema_version: 1,
    slug,
    type: 'site',
    persona: PERSONA_NAME,
    email: {
      subject: `Daily Journey: ${persona.name} on ${new URL(persona.site).hostname}`,
      from: persona.site,
      from_display_name: new URL(persona.site).hostname,
      timestamp_iso: now.toISOString(),
      date_formatted: now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC',
    },
    review: {
      score: score || '--/10',
      raw_markdown: reviewText,
      sections: {},
    },
    qa: {
      summary: { overall_pass_rate: passRate, total_checks: totalChecks, total_issues: totalIssues, total_warnings: totalWarnings },
      categories: {
        broken_experience: { passed: 0, warned: 0, failed: 0, checks: qaChecks.filter(c => c.check_id.startsWith('network_')) },
        accessibility: { passed: 0, warned: 0, failed: 0, checks: qaChecks.filter(c => c.check_id.startsWith('axe_')) },
        info: { passed: 0, warned: 0, failed: 0, checks: qaChecks.filter(c => c.check_id === 'console_error') },
      },
    },
    assets: {
      render_image: steps[0]?.viewportScreenshot || null,
      pdf: null,
      webview_url: persona.site,
      journey_steps: journeySteps,
    },
    performance: {
      steps: perfSteps,
    },
  };
}

function extractScore(reviewText) {
  const m = reviewText.match(/\*\*(\d+(?:\.\d+)?)\s*\/\s*10\*\*/);
  if (m) return m[1] + '/10';
  const m2 = reviewText.match(/(\d+(?:\.\d+)?)\s*\/\s*10/);
  if (m2) return m2[1] + '/10';
  return '--/10';
}

function updatePublishedManifest(entry) {
  const existing = fs.existsSync(SITE_MANIFEST) ? JSON.parse(fs.readFileSync(SITE_MANIFEST, 'utf8')) : [];
  const filtered = existing.filter(x => x.slug !== entry.slug);
  filtered.push(entry);
  fs.writeFileSync(SITE_MANIFEST, JSON.stringify(filtered, null, 2));
}

async function publishSite(slug, artifactDir, previousSummary = null) {
  // Phase 1: Re-extract audit-data.json for email entries (no-op for this
  // site-journey — the JS builder above already wrote our audit-data.json).
  // Ported from extract_audit_data.py in P5.
  await extractAll();

  const repoRoot = path.dirname(__dirname);

  // Upload all step screenshots to R2, track the keys so we can stamp
  // them into audit.json. Falls through gracefully if R2 isn't configured.
  const r2Enabled = mediaConfigured();
  const stepKeys = {}; // viewport_screenshot filename -> R2 key
  let renderImageKey = null;
  const pngFiles = r2Enabled
    ? fs.readdirSync(artifactDir).filter((f) => f.endsWith('.png'))
    : [];
  for (const f of pngFiles) {
    try {
      const key = await putMedia({
        filePath: path.join(artifactDir, f),
        key: auditMediaKey(slug, f),
        contentType: 'image/png',
      });
      stepKeys[f] = key;
      if (f.includes('step-01') && f.includes('viewport')) {
        // The hero render that the index card uses — upload once more under
        // the canonical 'render.png' key so cross-links match email audits.
        renderImageKey = await putMedia({
          filePath: path.join(artifactDir, f),
          key: auditMediaKey(slug, 'render.png'),
          contentType: 'image/png',
        });
      }
    } catch (err) {
      log('R2 upload failed (non-fatal)', { file: f, error: String(err).slice(0, 200) });
    }
  }

  // Read the artifact audit-data.json (built in JS earlier in this run),
  // inject R2 keys, validate, then upsert to Postgres. Site reads from
  // the DB (Phase 3 of the foundation refactor).
  const srcAudit = path.join(artifactDir, 'audit-data.json');
  if (!fs.existsSync(srcAudit)) {
    throw new Error(`publishSite: no audit-data.json at ${srcAudit}`);
  }
  const data = JSON.parse(fs.readFileSync(srcAudit, 'utf8'));
  data.assets = data.assets ?? {};
  if (renderImageKey) data.assets.render_image_key = renderImageKey;
  if (Array.isArray(data.assets.journey_steps)) {
    for (const step of data.assets.journey_steps) {
      if (step.viewport_screenshot && stepKeys[step.viewport_screenshot]) {
        step.viewport_screenshot_key = stepKeys[step.viewport_screenshot];
      }
      if (step.fullpage_screenshot && stepKeys[step.fullpage_screenshot]) {
        step.fullpage_screenshot_key = stepKeys[step.fullpage_screenshot];
      }
    }
  }
  // Fail loud on schema drift — one bad run beats shipping a broken audit.
  auditDataSchema.parse(data);

  // Persist the merged shape back to the artifact so rerun works later.
  fs.writeFileSync(srcAudit, JSON.stringify(data, null, 2));

  if (!dbConfigured()) {
    throw new Error('DATABASE_URL required — audit data has no canonical store otherwise');
  }
  await upsertAuditRow({ slug, data });

  // V3 dual-write: split the row into experience + reaction during the
  // XR-C window. Returns reactionId so the embed step can mirror into
  // reaction_embedding alongside audit_embedding.
  let reactionId = null;
  try {
    const r = await upsertExperienceAndReaction({ slug, data });
    reactionId = r.reactionId;
  } catch (err) {
    log('experience+reaction dual-write failed (non-fatal)', {
      error: err instanceof Error ? err.message : String(err),
    });
  }

  // Persona brain vault note + embedding. Non-fatal — the DB write above
  // is what the user-facing site reads.
  try {
    if (data.persona) {
      await writeVaultNote({
        auditData: data,
        personaSlug: data.persona,
        repoRoot,
        previousScore: previousSummary?.score ?? null,
        reactionId,
      });
    }
  } catch (err) {
    log('Vault write failed (non-fatal)', { error: String(err).slice(0, 300) });
  }

  // Git push the vault markdown only. Audit content lives in Postgres, so
  // Vercel doesn't need to redeploy when a new audit lands — it picks up
  // the new row on the next request.
  if (!GH_TOKEN) { log('No GH_TOKEN — skipping vault push'); return; }
  const pushCmd = `cd "${repoRoot}" && git pull --rebase origin main 2>/dev/null; git add vaults && git diff --cached --quiet && echo NO_CHANGES || (git commit -m "vault: site journey ${slug}" && git push origin main)`;
  await execFileAsync('/bin/zsh', ['-lc', pushCmd], { maxBuffer: 1024 * 1024 * 50, env: { ...process.env, GH_TOKEN } });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const persona = await loadPersona(PERSONA_NAME);
  const credentials = getCredentials(persona);
  const slug = `${todaySlug()}-site-journey-${PERSONA_NAME}`;
  const artifactDir = path.join(ARTIFACTS_BASE, slug);

  log('Starting site journey', { persona: PERSONA_NAME, slug, site: persona.site });

  // Idempotency check
  const manifest = fs.existsSync(SITE_MANIFEST) ? JSON.parse(fs.readFileSync(SITE_MANIFEST, 'utf8')) : [];
  if (manifest.some(e => e.slug === slug)) {
    if (process.env.FORCE) {
      log('Journey already published today — re-running anyway (FORCE=1)', { slug });
    } else {
      log('Journey already published today — skipping', { slug });
      return;
    }
  }

  fs.mkdirSync(artifactDir, { recursive: true });

  // Step 1: Run Playwright journey
  const { steps, consoleErrors, networkErrors, axeViolations } = await runJourney(persona, credentials, artifactDir);
  log('Journey complete', { steps: steps.length, errors: consoleErrors.length, networkErrors: networkErrors.length, axeViolations: axeViolations.length });

  // Load previous day's summary for regression context
  const historyPath = path.join(HISTORY_DIR, `${PERSONA_NAME}-latest.json`);
  const previousSummary = fs.existsSync(historyPath) ? JSON.parse(fs.readFileSync(historyPath, 'utf8')) : null;

  // Step 2: Generate reviews
  const viewportImages = steps.filter(s => s.viewportScreenshot).map(s => path.join(artifactDir, s.viewportScreenshot));
  const perfMetrics = JSON.parse(fs.readFileSync(path.join(artifactDir, 'performance-metrics.json'), 'utf8'));

  let contentPrompt = buildContentPrompt(persona, steps, artifactDir);
  if (previousSummary) {
    contentPrompt += `\n\nYESTERDAY'S SCORE: ${previousSummary.score}\nNote any regressions or improvements compared to yesterday.`;
  }

  const technicalPrompt = buildTechnicalPrompt(steps, artifactDir, consoleErrors, networkErrors, axeViolations, perfMetrics);

  log('Generating content review...');
  const contentReview = await generateReview(contentPrompt, { images: viewportImages, label: 'content-review' });

  log('Generating technical review...');
  const technicalReview = await generateReview(technicalPrompt, { label: 'technical-review' });

  const reviewText = [contentReview, '', '---', '', '## Technical Audit', '', technicalReview].join('\n');
  fs.writeFileSync(path.join(artifactDir, 'review.txt'), reviewText, 'utf8');

  const score = extractScore(reviewText);

  // Step 3: Build audit data and publish
  const auditData = buildAuditData(persona, slug, steps, reviewText, score, consoleErrors, networkErrors, axeViolations);
  fs.writeFileSync(path.join(artifactDir, 'audit-data.json'), JSON.stringify(auditData, null, 2));

  updatePublishedManifest({
    messageId: slug,
    subject: auditData.email.subject,
    artifactDir,
    pdfPath: '',
    slug,
  });

  let published = false;
  if (DRY_RUN) {
    log('Dry-run: skipping publish (R2 upload + DB upsert + vault write + git push)');
  } else {
    try {
      await publishSite(slug, artifactDir, previousSummary);
      published = true;
    } catch (err) {
      log('Site publish failed (non-fatal)', { error: String(err).slice(0, 500) });
    }
  }

  // Save today's summary for tomorrow's regression detection
  fs.writeFileSync(historyPath, JSON.stringify({
    date: todaySlug(),
    score,
    steps: steps.map(s => ({ label: s.label, status: s.status, perf: s.perf })),
  }, null, 2));

  log('Site journey complete', { slug, score, published, steps: steps.length });
}

main().catch(err => {
  log('Fatal error', { error: String(err), stack: err?.stack });
  process.exit(1);
});
