#!/usr/bin/env node
/**
 * Refutation pass over candidate defects.
 *
 * Every candidate is independently re-tested before any human sees it. The
 * bar is deliberately asymmetric: a defect must reproduce to survive, and
 * anything inconclusive is refuted. Transient 500s, A/B variants, cold-cache
 * timing and one-off network blips die here instead of costing review time —
 * and, more importantly, instead of being filed to Skechers and turning out
 * to be nothing.
 *
 * Only defects that reproduce reach status='verified', which is the single
 * status the admin queue lets you approve from.
 *
 * Usage:
 *   node site-monitor/qa/verify.mjs             # dry run
 *   node site-monitor/qa/verify.mjs --apply
 *   node site-monitor/qa/verify.mjs --runs 3
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { chromium as playwrightChromium } from 'playwright';
import { chromium as stealthChromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import AxeBuilder from '@axe-core/playwright';

import {
  loadUnverifiedDefects,
  recordVerification,
} from '../../audit-pipeline/defects.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });
dotenv.config({ path: path.join(__dirname, '..', '..', 'email-monitor', '.env') });

const APPLY = process.argv.includes('--apply');
const argOf = (f) => {
  const i = process.argv.indexOf(f);
  return i === -1 ? null : process.argv[i + 1];
};
const RUNS = Number(argOf('--runs') || 2);

function log(m, e) {
  console.log(`[${new Date().toISOString()}] ${m}${e ? ' ' + JSON.stringify(e) : ''}`);
}

async function openBrowser() {
  try {
    const b = await playwrightChromium.connectOverCDP(process.env.CDP_URL || 'http://127.0.0.1:9222', { timeout: 5000 });
    const { reapStrayPages } = await import('../../audit-pipeline/browser-hygiene.mjs');
    await reapStrayPages(b);
    return { browser: b, viaCdp: true };
  } catch {
    stealthChromium.use(StealthPlugin());
    return { browser: await stealthChromium.launch({ headless: true }), viaCdp: false };
  }
}

/**
 * Re-observe the page and decide whether the original claim still holds.
 *
 * This is intentionally evidence-based rather than LLM-based: we re-check the
 * concrete signal the defect's category depends on. An LLM asked "is this
 * still broken?" tends to agree with itself; a fresh HTTP status or a fresh
 * axe run does not.
 */
async function reproduces(page, d) {
  const errors = [];
  page.removeAllListeners('response');
  page.on('response', (r) => {
    // 429 is rate limiting, and we are the ones hammering the site — a
    // sweep plus a two-run re-test from one IP trips it easily. Counting it
    // as defect evidence produced a High-urgency "the cart page is broken"
    // finding that we had caused ourselves. Never treat it as a site fault.
    if (r.status() >= 400 && r.status() !== 429) {
      errors.push(`${r.status()} ${r.url().slice(0, 120)}`);
    }
  });

  let status = null;
  try {
    const resp = await page.goto(d.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    status = resp?.status() ?? null;
  } catch {
    return { hit: false, note: 'navigation failed on re-test' };
  }
  await page.waitForTimeout(3500);

  if (status === 429) {
    return {
      unverifiable: true,
      note: 'page returned 429 (rate limited) on re-test — most likely our own traffic, not a site fault',
    };
  }
  if (status && status >= 400) {
    return { hit: true, note: `page returned ${status} on re-test` };
  }

  switch (d.category) {
    case 'seo': {
      const head = await page.evaluate(() => {
        const q = (s) => document.querySelector(s);
        return {
          title: document.title || '',
          canonical: q('link[rel="canonical"]')?.getAttribute('href') ?? null,
          metaDescription: q('meta[name="description"]')?.getAttribute('content') ?? null,
          h1: document.querySelectorAll('h1').length,
          ld: document.querySelectorAll('script[type="application/ld+json"]').length,
          imgsMissingAlt: Array.from(document.querySelectorAll('img')).filter((i) => !i.hasAttribute('alt')).length,
          imgTotal: document.querySelectorAll('img').length,
        };
      });
      // A "missing X" claim reproduces only if X is still missing.
      const txt = `${d.description} ${d.observed ?? ''}`.toLowerCase();
      if (txt.includes('canonical')) return { hit: !head.canonical, note: `canonical=${head.canonical ?? 'absent'}` };
      if (txt.includes('meta description')) return { hit: !head.metaDescription, note: `metaDescription=${head.metaDescription ? 'present' : 'absent'}` };
      if (txt.includes('structured data') || txt.includes('schema')) return { hit: head.ld === 0, note: `ld+json blocks=${head.ld}` };
      if (txt.includes('h1')) return { hit: head.h1 !== 1, note: `h1 count=${head.h1}` };
      if (txt.includes('alt')) {
        return {
          hit: head.imgsMissingAlt > 0,
          note: `${head.imgsMissingAlt}/${head.imgTotal} images missing alt on re-test`,
        };
      }
      if (txt.includes('title')) return { hit: !head.title, note: `title="${head.title.slice(0, 60)}"` };
      return { unverifiable: true, note: 'no re-check strategy for this SEO claim' };
    }

    case 'accessibility': {
      try {
        const res = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
        const serious = (res.violations || []).filter((v) => ['serious', 'critical'].includes(v.impact));
        return { hit: serious.length > 0, note: `${serious.length} serious/critical axe violations on re-test` };
      } catch {
        return { hit: false, note: 'axe failed on re-test' };
      }
    }

    case 'functional': {
      const zeroResults = await page
        .evaluate(() => /no results|0 results|couldn't find|did not match/i.test(document.body.innerText))
        .catch(() => false);
      const txt = `${d.description} ${d.observed ?? ''}`.toLowerCase();
      if (txt.includes('zero result') || txt.includes('no result')) {
        return { hit: zeroResults, note: zeroResults ? 'still a zero-results page' : 'results present on re-test' };
      }
      // A dead-control claim is about one specific control. We do not re-drive
      // controls here, so we cannot confirm or deny it — and confirming it via
      // "some unrelated request 4xx'd" is not verification, it is coincidence.
      // Two dead_control findings were marked verified purely because a 429
      // fired on the same page load.
      if (/dead|unresponsive|no visible|nothing happen|did not (change|respond)/i.test(txt)) {
        return {
          unverifiable: true,
          note: 'dead-control claims are not re-driven by the verifier — needs human judgement',
        };
      }
      if (errors.length) return { hit: true, note: `${errors.length} 4xx/5xx on re-test: ${errors[0]}` };
      return { hit: false, note: 'no failing request or empty state on re-test' };
    }

    case 'copy': {
      // Copy claims quote page text; if the quoted string is gone, the claim
      // no longer holds (promo rotated, typo fixed).
      const body = await page.evaluate(() => document.body.innerText).catch(() => '');
      const quoted = (d.observed || d.description || '').match(/"([^"]{6,80})"/);
      // No quoted string means we have no way to check it — that is not the
      // same as the claim being false, so don't refute it. Same reasoning as
      // the SEO branch: silently dropping unverifiable findings hollows out
      // the sweep without anyone noticing.
      if (!quoted) return { unverifiable: true, note: 'no quoted string to re-check' };
      const present = body.toLowerCase().includes(quoted[1].toLowerCase());
      return { hit: present, note: present ? `still shows "${quoted[1].slice(0, 40)}"` : 'quoted text no longer on page' };
    }

    default:
      // e.g. performance claims — no deterministic re-check implemented yet.
      return { unverifiable: true, note: `no re-test strategy for category ${d.category}` };
  }
}

const candidates = await loadUnverifiedDefects(50);
log('candidates to verify', { count: candidates.length, runs: RUNS, apply: APPLY });
if (!candidates.length) process.exit(0);

const { browser, viaCdp } = await openBrowser();
const context = viaCdp ? (browser.contexts()[0] ?? (await browser.newContext())) : await browser.newContext();
const page = await context.newPage();

let verified = 0, refuted = 0;
try {
for (const d of candidates) {
  let hits = 0;
  let unverifiable = 0;
  const notes = [];
  for (let i = 0; i < RUNS; i++) {
    const r = await reproduces(page, d);
    if (r.hit) hits += 1;
    if (r.unverifiable) unverifiable += 1;
    notes.push(r.note);
    await page.waitForTimeout(1500);
  }

  // Must reproduce on every run. Partial reproduction is exactly the flaky
  // signal we're filtering out, so it counts as inconclusive → refuted.
  //
  // 'unverifiable' is deliberately NOT a refutation: it means this verifier
  // has no strategy for the claim, not that the claim is false. Silently
  // dropping true findings because we lack a check would quietly hollow out
  // the whole sweep, so those go through to a human, clearly flagged. The
  // human is the gate before anything reaches Skechers either way.
  const verdict =
    unverifiable === RUNS
      ? 'unverifiable'
      : hits === RUNS
        ? 'reproduced'
        : hits === 0
          ? 'not_reproduced'
          : 'inconclusive';
  const verification = {
    attemptedAt: new Date().toISOString(),
    runs: RUNS,
    reproduced: hits,
    verdict,
    notes: [...new Set(notes)].join('; ').slice(0, 500),
  };

  const survives = verdict === 'reproduced' || verdict === 'unverifiable';
  const tag = verdict === 'reproduced' ? 'VERIFIED  ' : verdict === 'unverifiable' ? 'UNCHECKED ' : 'refuted   ';
  log(`  ${tag}${d.persona_slug} ${hits}/${RUNS}`, {
    url: String(d.url).slice(0, 70),
    note: verification.notes.slice(0, 90),
  });

  if (APPLY) {
    const status = await recordVerification(d.id, verification);
    status === 'verified' ? verified++ : refuted++;
  } else {
    survives ? verified++ : refuted++;
  }
}

} finally {
  // Never leak the tab into the shared CDP Chrome — even when a re-test
  // throws. verify.mjs previously hung 30 min on the 08-10 nightly run;
  // a hang that gets killed must not also leave a renderer behind.
  const { releaseBrowser } = await import('../../audit-pipeline/browser-hygiene.mjs');
  await releaseBrowser({ browser, page, viaCdp });
}

log('verification complete', { verified, refuted, applied: APPLY });
if (!APPLY) log('DRY RUN — pass --apply to write verdicts.');
