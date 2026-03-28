#!/usr/bin/env node
/**
 * Daily Site Experience Journey — Playwright-based site review.
 *
 * Runs a persona's journey through skechers.com on a mobile device,
 * capturing screenshots, HTML, console/network errors, accessibility
 * violations, and performance metrics at each step. Then generates a
 * holistic Claude review from the persona's perspective and publishes
 * the result to the Experience Review site.
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

const SITE_DIR = path.join(path.dirname(__dirname), 'email-audit');
const SITE_MANIFEST = path.join(SITE_DIR, 'published-audits.json');
const SITE_GENERATOR = path.join(SITE_DIR, 'generate_site.py');
const ARTIFACTS_BASE = path.join(path.dirname(__dirname), 'reports', 'site-artifacts');
const HISTORY_DIR = path.join(__dirname, 'history');
const LOG_DIR = path.join(__dirname, 'logs');
const LOG_PATH = path.join(LOG_DIR, 'site-review.log');

const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'sonnet';
const CLAUDE_EFFORT = process.env.CLAUDE_EFFORT || 'high';
const OPENCLAW_PROFILE = process.env.OPENCLAW_PROFILE || 'walker';
const OPENCLAW_CONFIG_PATH = process.env.OPENCLAW_CONFIG_PATH || '/Users/alontsang/.openclaw-walker/openclaw.json';
const OPENCLAW_STATE_DIR = process.env.OPENCLAW_STATE_DIR || '/Users/alontsang/.openclaw-walker';
const TELEGRAM_TARGET = process.env.TELEGRAM_TARGET;
const SITE_BASE_URL = process.env.SITE_BASE_URL || 'https://email-audit-git-main-alons-projects-c876f5a6.vercel.app';
const GH_TOKEN = process.env.GH_TOKEN || '';

fs.mkdirSync(LOG_DIR, { recursive: true });
fs.mkdirSync(HISTORY_DIR, { recursive: true });
fs.mkdirSync(ARTIFACTS_BASE, { recursive: true });

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function log(message, extra) {
  const line = `[${new Date().toISOString()}] ${message}${extra ? ` ${JSON.stringify(extra)}` : ''}`;
  console.log(line);
  fs.appendFileSync(LOG_PATH, line + '\n');
}

function todaySlug() {
  return new Date().toISOString().slice(0, 10);
}

function loadPersona(name) {
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

const JOURNEY_STEPS = [
  { id: 'homepage',       label: 'Homepage',         action: 'navigate' },
  { id: 'popups',         label: 'Dismiss Popups',   action: 'dismiss_popups' },
  { id: 'login',          label: 'Log In',           action: 'login' },
  { id: 'mens-category',  label: "Men's Category",   action: 'nav_category', target: 'Men' },
  { id: 'mens-shoes',     label: "Men's Shoes",      action: 'nav_subcategory', target: 'Shoes' },
  { id: 'product',        label: 'View Product',     action: 'first_product' },
  { id: 'add-to-cart',    label: 'Add to Cart',      action: 'add_to_cart' },
  { id: 'cart',           label: 'View Cart',        action: 'view_cart' },
  { id: 'search',         label: 'Search',           action: 'search' },
];

async function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
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

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    ...device,
    // Stealth: override webdriver detection
    bypassCSP: true,
  });

  // Remove navigator.webdriver flag
  await context.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
  });

  const page = await context.newPage();

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

  let stepNum = 0;

  for (const step of JOURNEY_STEPS) {
    stepNum++;
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
          // Navigate to login via JS click on account icon
          try {
            await page.locator('#utility-login').evaluate(el => el.click());
          } catch {
            await page.goto(`${persona.site}/login/`, { waitUntil: 'domcontentloaded', timeout: 30000 });
          }
          // Wait for Kasada bot challenge to resolve (up to 15 seconds)
          try {
            await page.waitForSelector('#login-form-email, input[name="loginEmail"], form[action*="login"]', { timeout: 15000 });
            await delay(1000);
            await dismissPopups(page);
            const emailInput = page.locator('#login-form-email, input[name="loginEmail"]').first();
            const passInput = page.locator('#login-form-password, input[name="loginPassword"], input[type="password"]').first();
            await emailInput.fill(credentials.email);
            await delay(300);
            await passInput.fill(credentials.password);
            await delay(500);
            const submitBtn = page.locator('button[type="submit"]:has-text("Log In"), button[type="submit"]:has-text("Sign In"), form button[type="submit"]').first();
            await submitBtn.click();
            await page.waitForLoadState('domcontentloaded');
            await delay(3000);
            await dismissPopups(page);
          } catch (loginErr) {
            log('Login blocked by bot protection — continuing as logged-out user', { error: String(loginErr).slice(0, 200) });
            // Navigate back to homepage so subsequent steps work
            await page.goto(persona.site, { waitUntil: 'domcontentloaded', timeout: 15000 });
            await delay(2000);
            await dismissPopups(page);
          }
          break;
        }

        case 'nav_category': {
          const catId = step.target.toLowerCase();
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
          // On mobile, after clicking Men, shoes might be in a submenu or we navigate directly
          const subLink = page.locator(`a[href*="/${persona.category_path[0].toLowerCase()}/${step.target.toLowerCase()}/"]`).first();
          try {
            await subLink.click({ timeout: 5000 });
          } catch {
            // Fallback: navigate directly
            await page.goto(`${persona.site}/${persona.category_path[0].toLowerCase()}/${step.target.toLowerCase()}/`, { waitUntil: 'domcontentloaded', timeout: 30000 });
          }
          await page.waitForLoadState('domcontentloaded');
          await delay(2000);
          await dismissPopups(page);
          break;
        }

        case 'first_product': {
          // Skechers V2 product tiles
          const productLink = page.locator('a.c-product-tile-V2__title, a.c-product-tile-V2__body-elements-anchor-wrapper, a.c-product-tile__title').first();
          await productLink.click({ timeout: 10000 });
          await page.waitForLoadState('domcontentloaded');
          await delay(2000);
          await dismissPopups(page);
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
          // Navigate to search results directly via URL
          const searchUrl = `${persona.site}/search?q=${encodeURIComponent(persona.search_term)}`;
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
    // Human-like delay between steps
    await delay(1000 + Math.random() * 1000);
  }

  await browser.close();

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

async function sendTelegramText(text) {
  if (!TELEGRAM_TARGET) return;
  const args = ['message', 'send', '--channel', 'telegram', '--target', TELEGRAM_TARGET, '--message', text];
  await openclawExec(args, 1024 * 1024 * 5);
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

  return [
    `You are ${persona.name}, a ${persona.age}-year-old ${persona.generation} ${persona.gender.toLowerCase()}.`,
    `${persona.style}. ${persona.shopping_habits}. ${persona.tech_comfort}.`,
    '',
    `You just walked through skechers.com on your phone. Review the ENTIRE journey from YOUR perspective.`,
    'The attached images are mobile screenshots of each step — review what you SEE, not code.',
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

async function publishSite(slug, artifactDir) {
  // Phase 1: Run generator (produces audit-data.json for email entries + this one)
  await execFileAsync('python3', [SITE_GENERATOR], { cwd: path.dirname(__dirname), maxBuffer: 1024 * 1024 * 20 });

  // Phase 2: Sync this audit to Next.js site
  const repoRoot = path.dirname(__dirname);
  const siteContent = path.join(repoRoot, 'site', 'content', 'audits');
  const siteImages = path.join(repoRoot, 'site', 'public', 'images', 'audits');

  // Copy audit.json
  const srcAudit = path.join(artifactDir, 'audit-data.json');
  if (fs.existsSync(srcAudit)) {
    const destDir = path.join(siteContent, slug);
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(srcAudit, path.join(destDir, 'audit.json'));
  }

  // Copy primary render image
  const primaryImg = fs.readdirSync(artifactDir).find(f => f.includes('step-01') && f.includes('viewport'));
  if (primaryImg) {
    const destImgDir = path.join(siteImages, slug);
    fs.mkdirSync(destImgDir, { recursive: true });
    fs.copyFileSync(path.join(artifactDir, primaryImg), path.join(destImgDir, 'render.png'));
  }

  // Copy all step screenshots
  for (const f of fs.readdirSync(artifactDir).filter(f => f.endsWith('.png'))) {
    const destImgDir = path.join(siteImages, slug);
    fs.mkdirSync(destImgDir, { recursive: true });
    fs.copyFileSync(path.join(artifactDir, f), path.join(destImgDir, f));
  }

  // Rebuild index.json
  const manifest = JSON.parse(fs.readFileSync(SITE_MANIFEST, 'utf8'));
  const indexEntries = manifest
    .map(entry => {
      const auditPath = path.join(siteContent, entry.slug, 'audit.json');
      if (!fs.existsSync(auditPath)) return null;
      const ad = JSON.parse(fs.readFileSync(auditPath, 'utf8'));
      return {
        slug: ad.slug,
        subject: ad.email.subject,
        from_display_name: ad.email.from_display_name,
        timestamp_iso: ad.email.timestamp_iso,
        score: ad.review.score,
        qa_summary: ad.qa?.summary || null,
        has_image: fs.existsSync(path.join(siteImages, entry.slug, 'render.png')),
        type: ad.type || 'email',
        persona: ad.persona || null,
      };
    })
    .filter(Boolean)
    .sort((a, b) => (b.timestamp_iso || '').localeCompare(a.timestamp_iso || ''));
  fs.writeFileSync(path.join(siteContent, 'index.json'), JSON.stringify(indexEntries, null, 2));

  // Phase 3: Git push
  if (!GH_TOKEN) { log('No GH_TOKEN — skipping git push'); return; }
  const pushCmd = `cd "${repoRoot}" && git add site/content site/public/images/audits && git diff --cached --quiet && echo NO_CHANGES || (git commit -m "Add site journey: ${slug}" && git push origin main)`;
  await execFileAsync('/bin/zsh', ['-lc', pushCmd], { maxBuffer: 1024 * 1024 * 50, env: { ...process.env, GH_TOKEN } });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const persona = loadPersona(PERSONA_NAME);
  const credentials = getCredentials(persona);
  const slug = `${todaySlug()}-site-journey-${PERSONA_NAME}`;
  const artifactDir = path.join(ARTIFACTS_BASE, slug);

  log('Starting site journey', { persona: PERSONA_NAME, slug, site: persona.site });

  // Idempotency check
  const manifest = fs.existsSync(SITE_MANIFEST) ? JSON.parse(fs.readFileSync(SITE_MANIFEST, 'utf8')) : [];
  if (manifest.some(e => e.slug === slug)) {
    log('Journey already published today — skipping', { slug });
    return;
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
  try {
    await publishSite(slug, artifactDir);
    published = true;
  } catch (err) {
    log('Site publish failed (non-fatal)', { error: String(err).slice(0, 500) });
  }

  // Save today's summary for tomorrow's regression detection
  fs.writeFileSync(historyPath, JSON.stringify({
    date: todaySlug(),
    score,
    steps: steps.map(s => ({ label: s.label, status: s.status, perf: s.perf })),
  }, null, 2));

  // Step 4: Telegram notification
  const detailUrl = `${SITE_BASE_URL}/audits/${slug}`;
  try {
    await sendTelegramText(`Site Journey: ${persona.name} on ${new URL(persona.site).hostname}\nScore: ${score}\n${detailUrl}`);
  } catch (err) {
    log('Telegram notification failed (non-fatal)', { error: String(err).slice(0, 500) });
  }

  log('Site journey complete', { slug, score, published, steps: steps.length });
}

main().catch(err => {
  log('Fatal error', { error: String(err), stack: err?.stack });
  process.exit(1);
});
