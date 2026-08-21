#!/usr/bin/env node
/**
 * Ivy Inventory — Skechers women's-shoes inventory + sizing audit.
 *
 * Walks every PLP listed in categories.json, captures the top-20 product
 * tiles per PLP (DOM order = merchandised order), navigates to each PDP,
 * and records per-color size availability. Captures one screenshot per
 * (style, color) for proof. Generates a first-person POV narrative via
 * the local research model (Ivy's secret-shopper voice). Publishes:
 *   - an `audit` row (type='site') with the structured inventory blob
 *     under data.inventory plus the narrative under review.raw_markdown
 *   - the `experience` + `reaction` v3 split via upsertExperienceAndReaction
 *   - a vault markdown note at vaults/ivy-inventory/audits/{slug}.md
 *   - per-(style, color) PDP screenshots in R2 under audits/{slug}/...
 *
 * Usage:
 *   node site-monitor/inventory/audit.mjs                  # full run
 *   node site-monitor/inventory/audit.mjs --max-plps 1     # smoke test
 *   node site-monitor/inventory/audit.mjs --max-styles 5   # smoke test
 *   node site-monitor/inventory/audit.mjs --dry-run        # no DB / no R2
 *
 * The Kasada bypass is the same as site-review.mjs: prefer connectOverCDP
 * to a real Chrome on port 9222; fall back to playwright-extra+stealth.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { chromium as playwrightChromium, devices } from 'playwright';
import { chromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

import { putMedia, mediaConfigured } from '../../audit-pipeline/media.mjs';
import { reapStrayPages, releaseBrowser } from '../../audit-pipeline/browser-hygiene.mjs';
import { upsertAuditRow, upsertExperienceAndReaction, dbConfigured } from '../../audit-pipeline/publish.mjs';
import { writeVaultNote } from '../../audit-pipeline/vault-writer.mjs';
import { generateNarrative } from './narrative.mjs';
import { weightedCoverage } from '../../site/lib/schema/size-demand.mjs';

chromium.use(StealthPlugin());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(path.dirname(__dirname), '.env') });

const REPO_ROOT = path.dirname(path.dirname(__dirname));
const PERSONAS_PATH = path.join(__dirname, 'personas.json');
const ARTIFACTS_BASE = path.join(REPO_ROOT, 'reports', 'inventory-audits');
const LOG_DIR = path.join(__dirname, '..', 'logs');

fs.mkdirSync(ARTIFACTS_BASE, { recursive: true });
fs.mkdirSync(LOG_DIR, { recursive: true });

// CLI flags
const argv = process.argv.slice(2);
function flag(name) { return argv.includes(name); }
function arg(name, dflt) {
  const i = argv.indexOf(name);
  return i >= 0 && i + 1 < argv.length ? argv[i + 1] : dflt;
}
const PERSONA_SLUG = arg('--persona', 'ivy-inventory');
const MAX_PLPS = Number(arg('--max-plps', '0')) || null;       // null = all
const MAX_STYLES = Number(arg('--max-styles', '12'));
const MAX_COLORS = Number(arg('--max-colors', '0')) || null;   // null = all
const MAX_WIDTHS = Number(arg('--max-widths', '0')) || null;   // null = all
const DRY_RUN = flag('--dry-run');
const HEADLESS_FALLBACK = !flag('--no-headless-fallback');

const PERSONAS = JSON.parse(fs.readFileSync(PERSONAS_PATH, 'utf8'));
const PERSONA = PERSONAS[PERSONA_SLUG];
if (!PERSONA) {
  console.error(`unknown persona '${PERSONA_SLUG}' — known: ${Object.keys(PERSONAS).join(', ')}`);
  process.exit(64);
}
const CATEGORIES_PATH = path.join(__dirname, PERSONA.categoriesFile);
const LOG_PATH = path.join(LOG_DIR, `${PERSONA_SLUG}.log`);

function log(msg, extra = null) {
  const ts = new Date().toISOString();
  const line = extra ? `${ts} ${msg} ${JSON.stringify(extra)}` : `${ts} ${msg}`;
  console.log(line);
  fs.appendFileSync(LOG_PATH, line + '\n');
}

function todayUtcSlug() {
  return new Date().toISOString().slice(0, 10);
}

// Skechers selectors. Mirror the ones already in site-review.mjs so the two
// scripts stay in sync if the brand redesigns:
//   - product tiles: a.c-product-tile-V2__title (PLP V2)
//   - size buttons: .c-size-selector button (PDP)
const SEL_PRODUCT_TILES = [
  'a.c-product-tile-V2__title',
  'a.c-product-tile-V2__body-elements-anchor-wrapper',
  'a.c-product-tile__title',
].join(', ');

// PDP color swatches. Skechers exposes color variants as buttons (NOT
// anchors) — clicking re-renders sizes in place via an AJAX variation
// call. We read the data-style-id + aria-label, then click to load.
const SEL_COLOR_SWATCHES = 'button.button-select-color, button.js-color-attr-selector';

// PDP size buttons. Each variant is a `<button class="button-select-size
// js-attr-selector">` containing a `<span data-attr-value="7.0">`. The
// button gets the modifier `c-product-attributes__item__selector--unselectable`
// when that size is out of stock.
const SEL_SIZE_BUTTONS = 'button.button-select-size';
const SEL_WIDTH_BUTTONS = 'button.button-select-width';
const SIZE_UNAVAILABLE_CLASS = 'c-product-attributes__item__selector--unselectable';

const NAV_TIMEOUT_MS = 30000;
const STEP_DELAY_MS = 1500;
const PDP_SETTLE_MS = 2500;

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

async function dismissPopups(page) {
  // Best-effort: Skechers shows email/SMS modals + a region picker. Try the
  // common close-button selectors and ignore failures.
  const closers = [
    'button[aria-label="Close"]',
    'button[aria-label="close"]',
    '.c-modal-close',
    '.modal-close',
    'button.close',
    '[data-dismiss="modal"]',
  ];
  for (const sel of closers) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.isVisible({ timeout: 800 })) {
        await btn.click({ timeout: 1500 }).catch(() => {});
        await delay(300);
      }
    } catch {}
  }
}

async function openBrowser() {
  const cdpPort = process.env.CHROME_DEBUG_PORT || '9222';
  try {
    const browser = await playwrightChromium.connectOverCDP(`http://localhost:${cdpPort}`);
    log('connected to real Chrome via CDP');
    // Reap tabs orphaned by a previous crashed run BEFORE opening our own.
    await reapStrayPages(browser);
    const existing = browser.contexts()[0] || null;
    const context = existing || (await browser.newContext({ ...devices['iPhone 14'], bypassCSP: true }));
    return { browser, context, real: true, createdContext: existing ? null : context };
  } catch (err) {
    log('CDP connect failed; falling back to stealth chromium', { err: String(err).slice(0, 160) });
    if (!HEADLESS_FALLBACK) throw err;
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ ...devices['iPhone 14'], bypassCSP: true });
    return { browser, context, real: false, createdContext: context };
  }
}

function collectTiles(page) {
  return page.evaluate((SEL) => {
    const out = [];
    for (const a of document.querySelectorAll(SEL)) {
      if (a.closest('[class*=recently],[class*=recommend],[class*=einstein],[class*=you-may],[class*=similar]')) continue;
      out.push({
        href: a.getAttribute('href') || '',
        name: (a.textContent || '').trim().replace(/\s+/g, ' '),
        inGrid: !!a.closest('.product-grid, .js-product-tile-container') &&
          !a.closest('[class*=splide],[class*=carousel]'),
      });
    }
    return out;
  }, SEL_PRODUCT_TILES);
}

async function scrapePlpTopStyles(page, plp) {
  log(`PLP load ${plp.url}`);
  await page.goto(plp.url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT_MS });
  await delay(STEP_DELAY_MS);
  await dismissPopups(page);

  // Lazy-load tiles: scroll a bit so the top-N are hydrated.
  for (let i = 0; i < 4; i++) {
    await page.evaluate(() => window.scrollBy(0, 800));
    await delay(400);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(400);

  // DOM order != merchandised order when the page mixes modules. Two cases
  // discovered live on /women/shoes/work-and-safety/ (a CMS landing page
  // with NO classic grid, only merchandised carousels — a boys' promo tile
  // was recorded as "position #1" of a women's category for three straight
  // weekly audits):
  //   1. Session carousels (Recently Viewed / recommendations) are noise —
  //      always excluded; their contents depend on OUR browsing history.
  //   2. When a real product grid exists, rank ONLY grid tiles. When the
  //      page is carousel-only, carousel order IS the merchandised order —
  //      keep it, but record the layout so the narrative can say so.
  let tileInfo = await collectTiles(page);
  if (tileInfo.length === 0) {
    // CMS landing pages hydrate their carousels noticeably slower than
    // grid PLPs render. One patient retry before declaring the page empty.
    await delay(8000);
    for (let i = 0; i < 5; i++) { await page.evaluate(() => window.scrollBy(0, 700)); await delay(700); }
    tileInfo = await collectTiles(page);
  }
  if (tileInfo.length === 0) {
    const dbg = await page.evaluate(() => ({ url: location.href.slice(0, 90), title: document.title.slice(0, 50), body: (document.body?.innerText || '').length, anyTile: document.querySelectorAll('[class*=product-tile]').length })).catch((e) => ({ err: String(e).slice(0, 80) }));
    log('ZERO TILES debug', dbg);
  }
  const gridTiles = tileInfo.filter((t) => t.inGrid);
  const layout = gridTiles.length > 0 ? 'grid' : 'carousel';
  if (tileInfo.length === 0) {
    // Not a scrape failure to hide: the page has no auditable product grid
    // (e.g. a CMS landing built ONLY of Einstein personalized-recommendation
    // carousels — /women/shoes/work-and-safety/ was exactly this, and three
    // weekly audits ranked its personalized tiles as merchandised positions).
    throw new Error('no auditable product grid — page contains only personalized recommendation modules');
  }
  const ranked = layout === 'grid' ? gridTiles : tileInfo;
  log(`PLP ${plp.name} — ${tileInfo.length} tiles (${gridTiles.length} in grid) layout=${layout}`);

  const styles = [];
  const seenHrefs = new Set();
  for (let i = 0; i < ranked.length && styles.length < MAX_STYLES; i++) {
    const href = ranked[i].href;
    if (!href) continue;
    const absUrl = href.startsWith('http') ? href : `https://www.skechers.com${href}`;
    // Strip color-variant query params so we get one row per style.
    const norm = absUrl.split(/[?#]/)[0];
    if (seenHrefs.has(norm)) continue;
    seenHrefs.add(norm);
    let name = ranked[i].name;
    // Tile anchors sometimes wrap an image-only span; fall back to slug.
    if (!name) {
      const slug = norm.split('/').filter(Boolean).pop() ?? '';
      name = slug.replace(/-/g, ' ').replace(/\.html$/, '');
    }
    styles.push({ rank: styles.length + 1, name: name.slice(0, 120), url: absUrl });
  }
  return { styles, layout };
}

async function scrapePdp(page, style, slug, plpSlug) {
  log(`PDP ${style.url}`);
  await page.goto(style.url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT_MS });
  await delay(PDP_SETTLE_MS);
  await dismissPopups(page);

  // Discover color buttons (data-style-id + aria-label) and width buttons
  // (data-attr-value="medium"|"wide"|"narrow"). Both can be missing —
  // fall back to a synthetic "Default" entry so single-color/single-width
  // styles still produce one variant row.
  let swatches = await readSwatches(page);
  if (swatches.length === 0) {
    swatches = [{ styleId: null, name: 'Default', selected: true }];
  }
  if (MAX_COLORS) swatches = swatches.slice(0, MAX_COLORS);

  const variants = [];
  let variantIdx = 0;
  for (const sw of swatches) {
    if (!sw.selected && sw.styleId) {
      try {
        await page.locator(`button[data-style-id="${sw.styleId}"]`).first().click({ timeout: 5000 });
        await page.waitForFunction(
          (id) => {
            const sel = document.querySelector('button.button-select-color.selected');
            return sel?.getAttribute('data-style-id') === id;
          },
          sw.styleId,
          { timeout: 5000 }
        ).catch(() => {});
        await delay(800);
      } catch (err) {
        log('color switch failed', { styleId: sw.styleId, err: String(err).slice(0, 160) });
        continue;
      }
    }

    let widths = await readWidths(page);
    if (widths.length === 0) {
      widths = [{ value: null, name: null, selected: true }];
    }
    if (MAX_WIDTHS) widths = widths.slice(0, MAX_WIDTHS);

    for (const w of widths) {
      // When the PDP only ships one width, whatever it is is already the
      // active one — no need to click. Avoids a noisy "no button matched"
      // log on extra-wide-only men's styles where readWidths can't tell
      // a single-option button is "selected".
      const onlyOne = widths.length === 1;
      if (w.value && !w.selected && !onlyOne) {
        // The clickable target is the wrapping <button>, but the value
        // attribute lives on data-pdp-attr-value (lowercased) and/or the
        // inner span. Walk the buttons in evaluate() so we don't have to
        // chase Playwright's CSS selector quoting rules.
        const clicked = await page.evaluate((value) => {
          const buttons = document.querySelectorAll('button.button-select-width');
          for (const b of buttons) {
            const v =
              b.getAttribute('data-pdp-attr-value') ??
              b.querySelector('span[data-attr-value]')?.getAttribute('data-attr-value') ??
              '';
            if (v && v.toLowerCase() === value.toLowerCase()) {
              b.click();
              return true;
            }
          }
          return false;
        }, w.value).catch(() => false);
        if (!clicked) {
          log('width switch failed (no button matched)', { width: w.value });
          continue;
        }
        await page.waitForFunction(
          (v) => {
            const sel = document.querySelector('button.button-select-width.selected, button.button-select-width.c-product-attributes__item__selector--selected');
            const got =
              sel?.getAttribute('data-pdp-attr-value') ??
              sel?.querySelector('span[data-attr-value]')?.getAttribute('data-attr-value');
            return got && got.toLowerCase() === v.toLowerCase();
          },
          w.value,
          { timeout: 4000 }
        ).catch(() => {});
        await delay(500);
      }
      const sizes = await readSizes(page);
      const screenshotKey = await capturePdpProof(page, slug, plpSlug, style.rank, variantIdx);
      const available = sizes.filter((s) => s.available).length;
      variants.push({
        color: sw.name,
        width: w.name,
        pdp_url: page.url(),
        pdp_screenshot_key: screenshotKey,
        sizes,
        available_count: available,
        total_count: sizes.length,
      });
      variantIdx++;
    }
  }
  return variants;
}

async function readSwatches(page) {
  try {
    const handles = await page.locator(SEL_COLOR_SWATCHES).all();
    const seen = new Set();
    const out = [];
    for (const h of handles) {
      const styleId = await h.getAttribute('data-style-id').catch(() => null);
      if (!styleId) continue;
      if (seen.has(styleId)) continue;
      seen.add(styleId);
      const aria = (await h.getAttribute('aria-label').catch(() => '')) ?? '';
      const name = aria.replace(/^select color\s*/i, '').trim() || styleId;
      const cls = (await h.getAttribute('class').catch(() => '')) ?? '';
      out.push({ styleId, name: name.slice(0, 60), selected: /\bselected\b/.test(cls) });
    }
    return out;
  } catch {
    return [];
  }
}

async function readWidths(page) {
  // Width buttons mirror the size-button pattern: a wrapping <button> with
  // an inner <span data-attr-value="medium">. Pull both the value (used to
  // re-click in another iteration) and a human-readable label.
  return await page.evaluate((sel) => {
    const out = [];
    const seen = new Set();
    document.querySelectorAll(sel).forEach((b) => {
      const span = b.querySelector('span[data-attr-value]');
      const v = (span?.getAttribute('data-attr-value') ?? '').trim();
      if (!v) return;
      if (seen.has(v.toLowerCase())) return;
      seen.add(v.toLowerCase());
      const cls = b.getAttribute('class') ?? '';
      const aria = b.getAttribute('aria-label') ?? '';
      const text = (span.textContent ?? '').trim();
      const label = text || aria.replace(/^select (width\s*)?/i, '').trim() || v;
      out.push({
        value: v,
        name: label.slice(0, 30),
        selected: /\bselected\b/.test(cls),
      });
    });
    return out;
  }, SEL_WIDTH_BUTTONS);
}

async function readSizes(page) {
  try {
    await page.locator(SEL_SIZE_BUTTONS).first().scrollIntoViewIfNeeded({ timeout: 3000 });
  } catch {}
  await delay(300);

  // Pull the buttons + their unavailable-class flag in one DOM round-trip
  // — Playwright's per-locator getAttribute calls add up fast on a 15-PLP
  // run.
  const raw = await page.evaluate((sel) => {
    const out = [];
    const seen = new Set();
    const nodes = document.querySelectorAll(sel);
    nodes.forEach((b) => {
      const span = b.querySelector('span[data-attr-value]');
      const v = span?.getAttribute('data-attr-value')?.trim() ?? '';
      if (!v) return;
      if (seen.has(v)) return;
      seen.add(v);
      const cls = b.getAttribute('class') ?? '';
      const unavailable =
        cls.includes('c-product-attributes__item__selector--unselectable') ||
        b.hasAttribute('disabled') ||
        b.getAttribute('aria-disabled') === 'true';
      out.push({ size: v.slice(0, 12), available: !unavailable });
    });
    return out;
  }, SEL_SIZE_BUTTONS);
  return raw;
}

// Full-page capture of the PLP itself — the day's assortment as evidence.
// The heatmap says "this is what coverage looked like"; this screenshot is
// the primary source a human can check it against. JPEG: assortment pages
// run 5-9k px tall and PNG would be several MB per category.
async function capturePlpAssortment(page, slug, plpSlug) {
  const fname = `${plpSlug}-plp-assortment.jpg`;
  const localDir = path.join(ARTIFACTS_BASE, slug);
  fs.mkdirSync(localDir, { recursive: true });
  const localPath = path.join(localDir, fname);
  try {
    // Walk the full grid first so lazy-loaded tile images hydrate before
    // the capture — otherwise the bottom half of the evidence is gray boxes.
    await page.evaluate(async () => {
      const step = 900;
      for (let y = 0; y < document.body.scrollHeight && y < 14000; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 250));
      }
      window.scrollTo(0, 0);
    });
    await delay(800);
    await page.screenshot({ path: localPath, fullPage: true, type: 'jpeg', quality: 70 });
  } catch (err) {
    log('PLP assortment screenshot failed', { fname, err: String(err).slice(0, 160) });
    return null;
  }
  if (DRY_RUN || !mediaConfigured()) return null;
  const key = `audits/${slug}/${fname}`;
  try {
    await putMedia({ filePath: localPath, key, contentType: 'image/jpeg' });
    return key;
  } catch (err) {
    log('R2 upload failed', { key, err: String(err).slice(0, 160) });
    return null;
  }
}

async function capturePdpProof(page, slug, plpSlug, rank, colorIdx) {
  const fname = `${plpSlug}-rank${String(rank).padStart(2, '0')}-color${colorIdx}.png`;
  const localDir = path.join(ARTIFACTS_BASE, slug);
  fs.mkdirSync(localDir, { recursive: true });
  const localPath = path.join(localDir, fname);
  try {
    // The screenshot IS the evidence for this variant's size availability —
    // it must SHOW the size grid. A blind viewport capture at whatever
    // scroll position the swatch click left behind often framed only the
    // hero image. Scroll the size selector to the center of the viewport,
    // ring it red so the reader's eye lands on the claim being proven, and
    // fall back to a full-page capture if the grid can't be located.
    const gridVisible = await page.evaluate((sel) => {
      document.querySelectorAll('.__inv_ring').forEach((e) => e.remove());
      const first = document.querySelector(sel);
      if (!first) return false;
      // Ring the whole size block (all buttons), not just the first one.
      const btns = [...document.querySelectorAll(sel)];
      const container = first.closest('[class*=product-attributes], [class*=size-selector], fieldset') ?? first.parentElement;
      (container ?? first).scrollIntoView({ block: 'center' });
      // Templates ship a hidden zero-rect duplicate button at (0,0); one of
      // those in the box union drags the ring offscreen. Visible boxes only.
      const boxes = btns.map((b) => b.getBoundingClientRect())
        .filter((r) => r.width > 2 && r.height > 2);
      if (boxes.length === 0) return false;
      const top = Math.min(...boxes.map((b) => b.top));
      const left = Math.min(...boxes.map((b) => b.left));
      const right = Math.max(...boxes.map((b) => b.right));
      const bottom = Math.max(...boxes.map((b) => b.bottom));
      if (!(right > left && bottom > top)) return false;
      const d = document.createElement('div');
      d.className = '__inv_ring';
      Object.assign(d.style, {
        position: 'fixed', left: `${left - 8}px`, top: `${top - 8}px`,
        width: `${right - left + 16}px`, height: `${bottom - top + 16}px`,
        border: '3px solid #e11d48', borderRadius: '6px',
        zIndex: 2147483647, pointerEvents: 'none',
      });
      document.body.appendChild(d);
      return true;
    }, SEL_SIZE_BUTTONS).catch(() => false);
    await delay(700); // let the scroll settle before framing the shot
    await page.screenshot({ path: localPath, fullPage: !gridVisible });
    await page.evaluate(() =>
      document.querySelectorAll('.__inv_ring').forEach((e) => e.remove())
    ).catch(() => {});
    if (!gridVisible) log('size grid not located — captured full page as fallback', { fname });
  } catch (err) {
    log('screenshot failed', { fname, err: String(err).slice(0, 160) });
    return null;
  }
  if (DRY_RUN || !mediaConfigured()) return null;
  const key = `audits/${slug}/${fname}`;
  try {
    await putMedia({ filePath: localPath, key, contentType: 'image/png' });
    return key;
  } catch (err) {
    log('R2 upload failed', { key, err: String(err).slice(0, 160) });
    return null;
  }
}

function plpSlugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// CSV-quote a single field. Wraps in double-quotes when the value contains a
// comma, quote, or newline; doubles any embedded quotes per RFC 4180.
function csvCell(v) {
  if (v === null || v === undefined) return '';
  const s = String(v);
  if (/[",\r\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function buildCsv(plps) {
  const header = [
    'plp', 'plp_url',
    'style_rank', 'style_name', 'style_url',
    'color', 'width', 'pdp_url',
    'size', 'available',
    'pdp_screenshot_key',
  ];
  const rows = [header.join(',')];
  for (const p of plps) {
    if (p.error) {
      rows.push([p.category, p.url, '', `PLP failed: ${p.error}`, '', '', '', '', '', '', ''].map(csvCell).join(','));
      continue;
    }
    for (const s of p.styles) {
      if (!s.variants || s.variants.length === 0) {
        rows.push([
          p.category, p.url, s.rank, s.name, s.url,
          '', '', '', '', '', '',
        ].map(csvCell).join(','));
        continue;
      }
      for (const v of s.variants) {
        if (!v.sizes || v.sizes.length === 0) {
          rows.push([
            p.category, p.url, s.rank, s.name, s.url,
            v.color ?? '', v.width ?? '', v.pdp_url ?? '',
            '', '', v.pdp_screenshot_key ?? '',
          ].map(csvCell).join(','));
          continue;
        }
        for (const sz of v.sizes) {
          rows.push([
            p.category, p.url, s.rank, s.name, s.url,
            v.color ?? '', v.width ?? '', v.pdp_url ?? '',
            sz.size, sz.available ? 'true' : 'false',
            v.pdp_screenshot_key ?? '',
          ].map(csvCell).join(','));
        }
      }
    }
  }
  return rows.join('\n') + '\n';
}

// Headline summary — one line at the top of the narrative. The
// per-category breakdown previously rendered here as a markdown
// table is now drawn as a visual heatmap by the audit detail page
// (InventoryCoverageMatrix), so the producer no longer ships the
// table to avoid duplication.
function buildSummaryTable(_plps, totals) {
  const pct = (totals.avg_size_coverage * 100).toFixed(1);
  return [
    '## Inventory summary',
    '',
    `**${totals.styles} styles · ${totals.variants} (color, width) variants · ${pct}% avg size coverage**`,
    '',
  ].join('\n');
}

async function uploadCsv(slug, csv) {
  if (DRY_RUN || !mediaConfigured()) return null;
  const key = `audits/${slug}/inventory.csv`;
  const tmpPath = path.join(ARTIFACTS_BASE, slug, 'inventory.csv');
  fs.mkdirSync(path.dirname(tmpPath), { recursive: true });
  fs.writeFileSync(tmpPath, csv);
  try {
    await putMedia({ filePath: tmpPath, key, contentType: 'text/csv' });
    return key;
  } catch (err) {
    log('CSV upload failed', { key, err: String(err).slice(0, 160) });
    return null;
  }
}

const SIZE_PROFILE = PERSONA.sizeProfile ?? 'unknown';

function summarize(plps) {
  let weightedSum = 0;
  let styles = 0;
  let variants = 0;
  let coverageSum = 0;
  let coverageDenom = 0;
  let plpsAudited = 0;
  let plpsFailed = 0;
  for (const p of plps) {
    if (p.error) { plpsFailed++; continue; }
    plpsAudited++;
    for (const s of p.styles) {
      styles++;
      for (const v of s.variants) {
        variants++;
        if (v.total_count > 0) {
          coverageSum += v.available_count / v.total_count;
          coverageDenom++;
          // Demand-weighted: a missing gut size (mens 9-11, womens 7-9)
          // costs far more than a missing tail size. This is the number
          // the score and the narrative rank by.
          weightedSum += weightedCoverage(v.sizes, SIZE_PROFILE);
        }
      }
    }
  }
  return {
    plps_audited: plpsAudited,
    plps_failed: plpsFailed,
    styles,
    variants,
    avg_size_coverage: coverageDenom > 0 ? coverageSum / coverageDenom : 0,
    weighted_size_coverage: coverageDenom > 0 ? weightedSum / coverageDenom : 0,
    size_profile: SIZE_PROFILE,
  };
}

async function main() {
  const slug = `${todayUtcSlug()}-${PERSONA.auditSlugSuffix}`;
  log(`run start slug=${slug} persona=${PERSONA_SLUG}`, { dryRun: DRY_RUN, maxPlps: MAX_PLPS, maxStyles: MAX_STYLES, maxColors: MAX_COLORS });

  const allPlps = JSON.parse(fs.readFileSync(CATEGORIES_PATH, 'utf8'));
  const plps = MAX_PLPS ? allPlps.slice(0, MAX_PLPS) : allPlps;

  const { browser, context, real, createdContext } = await openBrowser();
  const page = await context.newPage();
  if (!real) {
    await page.setViewportSize({ width: devices['iPhone 14'].viewport.width, height: devices['iPhone 14'].viewport.height });
  }

  const results = [];
  try {
  for (const plp of plps) {
    try {
      const { styles, layout } = await scrapePlpTopStyles(page, plp);
      // Capture the assortment NOW — the page is still on the PLP; the PDP
      // loop below navigates away.
      const plpScreenshotKey = await capturePlpAssortment(page, slug, plpSlugify(plp.name));
      const enriched = [];
      for (const style of styles) {
        try {
          const variants = await scrapePdp(page, style, slug, plpSlugify(plp.name));
          enriched.push({ ...style, variants });
        } catch (err) {
          log('PDP failed', { url: style.url, err: String(err).slice(0, 200) });
          enriched.push({ ...style, variants: [] });
        }
      }
      // page_layout: 'grid' = ranks are true grid order; 'carousel' = the
      // page is a CMS landing built of merchandised carousels — positions
      // are carousel order and may include off-gender featured tiles.
      results.push({ category: plp.name, url: plp.url, page_layout: layout, plp_screenshot_key: plpScreenshotKey, styles: enriched });
    } catch (err) {
      log('PLP failed', { plp: plp.name, err: String(err).slice(0, 200) });
      results.push({ category: plp.name, url: plp.url, styles: [], error: String(err).slice(0, 200) });
    }
  }

  } finally {
    // Close OUR page (and context if we created one) before disconnecting —
    // on the shared CDP Chrome a disconnect alone leaves the tab alive, and
    // leaked Skechers tabs each hold a renderer process until the Mac mini
    // runs out of memory. finally: an error mid-scrape must not leak either.
    await releaseBrowser({ browser, page, contexts: [createdContext], viaCdp: real });
  }

  const totals = summarize(results);
  log('run summary', totals);

  // Narrative — secret-shopper report in the persona's voice.
  let narrative;
  try {
    narrative = await generateNarrative({
      plps: results,
      totals,
      scope: PERSONA.scope,
      displayName: PERSONA.displayName,
      sizeProfile: SIZE_PROFILE,
    });
  } catch (err) {
    log('narrative generation failed', { err: String(err).slice(0, 200) });
    narrative = buildFallbackNarrative(results, totals);
  }

  // Detail spreadsheet (CSV) + inline summary table. The CSV is uploaded
  // to R2 alongside the screenshots; the audit detail page mints a signed
  // URL from `inventory.csv_key`. The summary table is prepended to the
  // narrative so it surfaces at the top of the Content Review tab.
  const csv = buildCsv(results);
  const csvKey = await uploadCsv(slug, csv);
  log('csv built', { rows: csv.split('\n').length - 1, csvKey });
  const summaryTable = buildSummaryTable(results, totals);
  narrative = `${summaryTable}\n${narrative}`;

  // Score on DEMAND-WEIGHTED coverage: full tails must not mask a
  // hollowed-out core. Falls back to raw when the profile is unknown
  // (weighted degrades to raw in that case anyway).
  const score = `${Math.round(totals.weighted_size_coverage * 10)}/10`;
  const now = new Date();
  const auditData = {
    schema_version: 1,
    slug,
    // First-class type so refactors of email/site audit IA can't
    // silently skip the inventory branch. See
    // site/lib/schema/audit-types.md for the audit type contract.
    type: 'inventory',
    persona: PERSONA_SLUG,
    email: {
      subject: `${PERSONA.subjectPrefix} · ${todayUtcSlug()}`,
      preheader: null,
      from: PERSONA.fromAddress,
      from_display_name: PERSONA.displayName,
      timestamp_iso: now.toISOString(),
      date_formatted: now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC',
    },
    review: {
      score,
      raw_markdown: narrative,
      sections: {},
    },
    qa: null,
    assets: {
      render_image: null,
      pdf: null,
      webview_url: PERSONA.auditWebviewUrl,
    },
    inventory: {
      site: PERSONA.site,
      scope: PERSONA.scope.replace(/^Skechers\s+/i, ''),
      size_profile: SIZE_PROFILE,
      plps: results,
      totals,
      csv_key: csvKey,
    },
  };

  // Write a local artifact regardless of dry-run.
  const localJsonPath = path.join(ARTIFACTS_BASE, slug, 'audit-data.json');
  fs.mkdirSync(path.dirname(localJsonPath), { recursive: true });
  fs.writeFileSync(localJsonPath, JSON.stringify(auditData, null, 2));
  log(`wrote ${localJsonPath}`);

  if (DRY_RUN) {
    log('dry-run — skipping DB upsert + vault note');
    return;
  }

  let reactionId = null;
  if (dbConfigured()) {
    await upsertAuditRow({ slug, data: auditData });
    // Keep the reaction id: without it the embed step can only write the
    // legacy audit_embedding table, which chat retrieval does NOT read —
    // inventory audits were invisible to persona chat because this id was
    // dropped here.
    const r = await upsertExperienceAndReaction({ slug, data: auditData });
    reactionId = r.reactionId;
    log('audit row + experience + reaction upserted');
  } else {
    log('DB not configured — skipping upsert');
  }

  await writeVaultNote({ auditData, personaSlug: PERSONA_SLUG, repoRoot: REPO_ROOT, reactionId });
  log('vault note written');
  log('run complete');
}

// Fallback when the LLM call fails. Mirrors the v2 narrative shape
// (three H3 sections, no score line) so the renderer behaves the same
// way whether Ollama answered or not.
function buildFallbackNarrative(plps, totals) {
  // Find the worst-coverage category as the fallback priority gap.
  let worst = null;
  for (const p of plps) {
    if (p.error) continue;
    let cov = 0;
    let denom = 0;
    for (const s of p.styles) {
      for (const x of s.variants) {
        if (x.total_count > 0) {
          cov += x.available_count / x.total_count;
          denom++;
        }
      }
    }
    const pct = denom > 0 ? cov / denom : 0;
    if (!worst || pct < worst.pct) worst = { category: p.category, pct };
  }

  const lines = [
    '### Coverage read',
    '',
    `Narrative generation failed; falling back to a flat summary. Coverage averages ${(totals.avg_size_coverage * 100).toFixed(1)}% across ${totals.styles} styles in ${totals.plps_audited} categories.`,
    '',
    '### Worst offenders',
    '',
    worst
      ? `- **${worst.category}** is the thinnest category at ${(worst.pct * 100).toFixed(0)}% size coverage. See the matrix above for the exact size gaps.`
      : '- No category-level data available.',
    '',
    '### What to restock',
    '',
    '- Refer to the matrix above and the variant detail card below for restock priorities.',
  ];
  return lines.join('\n');
}

main().catch((err) => {
  console.error(err);
  log('FATAL', { err: String(err).slice(0, 400) });
  process.exit(1);
});
