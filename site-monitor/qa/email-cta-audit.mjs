#!/usr/bin/env node
/**
 * Email-CTA landing audit — the "Off-site" weapon.
 *
 * STATUS: NOT PRODUCTION-READY. Skechers serves the live site under its ESP
 * tracking host (click.emails.skechers.com), keeping URL path "/" for every
 * CTA, so landings can't be told apart or deduped by URL — needs content-
 * based landing identity (which PLP/product actually rendered). Do NOT wire
 * into the daily automation until that's built; it would false-positive.
 *
 * We hold the brand's actual email sends (50+/month for Skechers). Every CTA
 * in those emails is a journey the brand PAID to trigger: if the landing page
 * 404s, contradicts the promo, or dumps the shopper somewhere generic, that
 * is money burned at the highest-intent moment. This audits the email→site
 * seam that neither a pure email tool nor a pure site tool can see —
 * and feeds the intake program's "Off-site" area (20% of their findings).
 *
 * Per audited CTA: open in REAL Chrome, capture landing (status, redirects,
 * render, promo text), then ask the lens to compare against what the email
 * promised. Findings land in the same defect pipeline (verify/adjudicate/
 * queue) with area='Off-site'.
 *
 *   node site-monitor/qa/email-cta-audit.mjs --brand skechers            # dry run
 *   node site-monitor/qa/email-cta-audit.mjs --brand skechers --apply
 *   node site-monitor/qa/email-cta-audit.mjs --brand skechers --days 7 --max-ctas 8 --apply
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { chromium as playwrightChromium } from 'playwright';
import { neon } from '../../audit-pipeline/node_modules/@neondatabase/serverless/index.mjs';

import { putMedia, mediaConfigured } from '../../audit-pipeline/media.mjs';
import {
  insertCandidateDefects,
  getTenantId,
  dedupeKey,
  DEFECT_URGENCIES,
  DEFECT_TYPES,
} from '../../audit-pipeline/defects.mjs';
import { installPopupBlocker, dismissOverlays } from './navigator.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });
dotenv.config({ path: path.join(__dirname, '..', '..', 'email-monitor', '.env') });

const argOf = (f) => {
  const i = process.argv.indexOf(f);
  return i === -1 ? null : process.argv[i + 1];
};
const BRAND = argOf('--brand') || 'skechers';
const DAYS = Number(argOf('--days') || 7);
const MAX_CTAS = Number(argOf('--max-ctas') || 8);
const APPLY = process.argv.includes('--apply');
const CLAUDE_BIN = process.env.CLAUDE_BIN || '/Users/alontsang/.local/bin/claude';
const PERSONA = 'cora-qa'; // promo/copy integrity is Cora's lens

const sql = neon(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);
const log = (m, e) => console.log(`[${new Date().toISOString()}] ${m}${e ? ' ' + JSON.stringify(e) : ''}`);
const ARTIFACTS = path.join(__dirname, '..', '..', 'reports', 'email-artifacts');

// ── 1. pick recent campaigns and their CTAs ───────────────────────────────

const emails = await sql`
  SELECT rc.slug, e.email_data->>'subject' subject, e.email_data->>'preheader' preheader,
         e.received_at
  FROM experience e JOIN reaction rc ON rc.experience_id = e.id
  WHERE e.brand_slug = ${BRAND} AND e.type = 'email'
    AND e.received_at > now() - (${DAYS} || ' days')::interval
  ORDER BY e.received_at DESC LIMIT 30`;
log('recent emails', { brand: BRAND, days: DAYS, found: emails.length });

// CTA extraction from the on-disk artifact (urls.txt is the full scrape; the
// message.html anchors give us labels). Reuse the materiality idea from
// qa_checks: prefer labelled, non-boilerplate links.
const BOILER = /unsub|privacy|terms|preference|view.*browser|facebook|instagram|twitter|tiktok|youtube|apple\.com|play\.google/i;

function ctasFor(slug, subject) {
  const dir = path.join(ARTIFACTS, slug);
  const html = path.join(dir, 'message.html');
  if (!fs.existsSync(html)) return [];
  const body = fs.readFileSync(html, 'utf8');
  const out = [];
  const re = /<a\s[^>]*href="(https?:\/\/[^"]+)"[^>]*>([\s\S]{0,400}?)<\/a>/gi;
  let m;
  while ((m = re.exec(body)) && out.length < 40) {
    const href = m[1];
    if (BOILER.test(href)) continue;
    const inner = m[2];
    const label =
      inner.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80) ||
      (inner.match(/alt="([^"]{3,80})"/i) || [])[1] || '';
    if (BOILER.test(label)) continue;
    out.push({ href, label, emailSlug: slug, subject });
  }
  // Dedupe by href, prefer entries that have a human label.
  const seen = new Map();
  for (const c of out) {
    if (!seen.has(c.href) || (!seen.get(c.href).label && c.label)) seen.set(c.href, c);
  }
  return [...seen.values()];
}

const allCtas = [];
for (const e of emails) {
  for (const c of ctasFor(e.slug, e.subject)) {
    allCtas.push({ ...c, preheader: e.preheader });
  }
}
// One CTA per destination across the window; newest email wins.
//
// Skechers routes every CTA through Attentive click-tracking
// (skechers.attentivemail.com/ls/click?upn=…) — 38 links per email sharing
// ONE path, differing only in query. Path-keyed dedupe collapsed an entire
// email to a single candidate, so tracking hosts key by full href instead;
// the true dedupe happens after redirect, on the landing URL.
const TRACKING_HOST = /attentivemail|\/ls\/click|click\.|links\.|trk\.|emltrk/i;
const byDest = new Map();
for (const c of allCtas) {
  try {
    const u = new URL(c.href);
    const key = TRACKING_HOST.test(u.hostname + u.pathname)
      ? c.href
      : u.origin + u.pathname;
    if (!byDest.has(key) || (!byDest.get(key).label && c.label)) byDest.set(key, c);
  } catch { /* skip malformed */ }
}
// Visit more candidates than we intend to audit — tracking links resolve to
// overlapping landings and we drop duplicates after the redirect.
const ctas = [...byDest.values()].slice(0, MAX_CTAS * 3);
log('CTAs selected', { candidates: byDest.size, visiting: ctas.length, auditTarget: MAX_CTAS });
if (!ctas.length) { console.log('nothing to audit'); process.exit(0); }

// ── 2. visit each landing in real Chrome ──────────────────────────────────

const browser = await playwrightChromium
  .connectOverCDP(process.env.CDP_URL || 'http://127.0.0.1:9222', { timeout: 8000 })
  .catch(() => {
    console.error('FATAL: real Chrome required (see qa/journey.mjs header)');
    process.exit(1);
  });
const context = browser.contexts()[0] ?? (await browser.newContext());
await installPopupBlocker(context);
const page = await context.newPage();

const runSlug = `${new Date().toISOString().slice(0, 10)}-email-cta-${BRAND}`;
const artifactDir = path.join(__dirname, '..', '..', 'reports', 'qa-artifacts', runSlug);
fs.mkdirSync(artifactDir, { recursive: true });

const visits = [];
const seenLandings = new Set();
for (const [i, cta] of ctas.entries()) {
  if (visits.filter((v) => !v.duplicate).length >= MAX_CTAS) break;
  const redirects = [];
  let status = null;
  try {
    page.removeAllListeners('response');
    page.on('response', (r) => {
      if ([301, 302, 307, 308].includes(r.status())) redirects.push(r.url().slice(0, 140));
    });
    const resp = await page.goto(cta.href, { waitUntil: 'domcontentloaded', timeout: 45000 });
    status = resp?.status() ?? null;
  } catch (err) {
    visits.push({ ...cta, status: null, error: String(err).slice(0, 140) });
    continue;
  }
  // Attentive/ESP links chain through click.emails.skechers.com with a JS
  // redirect — domcontentloaded fires on the tracker page, not the landing.
  // Wait for the hostname to leave tracking territory (or time out, which is
  // itself a finding: a shopper stuck on a blank redirect page).
  let settled = false;
  for (let w = 0; w < 14; w++) {
    await page.waitForTimeout(1000);
    const host = (() => { try { return new URL(page.url()).hostname; } catch { return ''; } })();
    if (host && !TRACKING_HOST.test(host)) { settled = true; break; }
  }
  await page.waitForTimeout(2500);
  await dismissOverlays(page);

  const shot = path.join(artifactDir, `cta-${String(i + 1).padStart(2, '0')}.png`);
  await page.screenshot({ path: shot, fullPage: false }).catch(() => {});

  const landing = await page.evaluate(() => ({
    finalUrl: location.href,
    title: document.title.slice(0, 100),
    h1s: Array.from(document.querySelectorAll('h1')).map((h) => h.innerText.trim().slice(0, 100)),
    promoText: Array.from(document.querySelectorAll('[class*="promo"], [class*="banner"], [class*="sale"], h1, h2'))
      .map((e) => e.innerText.trim()).filter((t) => t && t.length < 200).slice(0, 10),
    productCount: document.querySelectorAll('[class*="product-tile"], [data-pid]').length,
    emptyState: /no results|0 results|not found|no longer available|couldn't find/i.test(document.body.innerText),
    bodyText: document.body.innerText.replace(/\n{3,}/g, '\n').slice(0, 2500),
  })).catch(() => ({}));

  // Same landing already audited via a different tracking wrapper? Skip it.
  let landingKey = '';
  try {
    const lu = new URL(landing.finalUrl ?? cta.href);
    landingKey = lu.origin + lu.pathname;
  } catch { landingKey = cta.href; }
  const duplicate = seenLandings.has(landingKey);
  seenLandings.add(landingKey);

  visits.push({
    ...cta, status, duplicate, settled,
    redirects: redirects.length,
    screenshotPath: fs.existsSync(shot) ? shot : null,
    landing,
  });
  log(`  visited ${i + 1}`, { status, dup: duplicate, label: cta.label.slice(0, 36), landed: landingKey.slice(0, 60) });
}
await page.close().catch(() => {});

// ── 3. the lens: does the landing honor the email? ────────────────────────

const prompt = [
  `You are Cora Copy, a retail secret shopper auditing the seam between a`,
  `brand's marketing EMAILS and the landing pages their calls-to-action open.`,
  `The brand paid to send every one of these emails; a click is the highest-`,
  `intent moment a shopper has. Report cases where the landing experience`,
  `breaks the promise the email made.`,
  '',
  `Report ONLY what the evidence shows: 4xx/5xx landings, empty result grids,`,
  `promo/price mismatch between email promise and landing content, expired`,
  `offers still linked, CTAs dumping to a generic page unrelated to the promo.`,
  `NOT yours: styling opinions, slow-feeling pages, anything you cannot cite.`,
  `HTTP 429 is our own rate limiting — never report it.`,
  '',
  `An empty list is a fine outcome. These reports go to a real team; a wrong`,
  `one costs more than none.`,
  '',
  '=== AUDITED CTAS ===',
  ...visits.filter((v) => !v.duplicate).map((v, i) => [
    `--- CTA ${i + 1}: from email "${v.subject}"`,
    v.preheader ? `email preheader: ${v.preheader}` : '',
    `link label: "${v.label || '(image link)'}"`,
    `target: ${v.href}`,
    v.error
      ? `RESULT: navigation error — ${v.error}`
      : [
          `landed: HTTP ${v.status}, ${v.redirects} redirects -> ${v.landing?.finalUrl ?? '?'}`,
          `title: ${v.landing?.title ?? ''}`,
          `h1s: ${JSON.stringify(v.landing?.h1s ?? [])}`,
          `promo text on page: ${JSON.stringify((v.landing?.promoText ?? []).slice(0, 6))}`,
          `product tiles: ${v.landing?.productCount ?? '?'} | empty-state: ${v.landing?.emptyState}`,
          `page text: ${(v.landing?.bodyText ?? '').slice(0, 900)}`,
        ].join('\n'),
  ].filter(Boolean).join('\n')),
  '',
  'Respond with ONLY a JSON array. Each element:',
  '{',
  '  "cta": <CTA number>,',
  '  "description": "specific, self-contained, actionable",',
  '  "business_impact": "who is affected and what it costs",',
  '  "expected": "...", "observed": "...",',
  `  "urgency": one of ${JSON.stringify(DEFECT_URGENCIES)},`,
  '  "urgency_rationale": "...",',
  '  "repro_steps": ["open email <subject>", "click <label>", "..."],',
  '  "confidence": 0.0-1.0,',
  `  "defect_type": EXACTLY one of ${JSON.stringify(DEFECT_TYPES)}`,
  '}',
].join('\n');

const raw = await new Promise((resolve, reject) => {
  const child = execFile(CLAUDE_BIN,
    ['-p', '--model', process.env.CLAUDE_MODEL || 'sonnet', '--effort', 'medium',
     '--no-session-persistence', '--permission-mode', 'bypassPermissions'],
    { cwd: path.join(__dirname, '..', '..'), maxBuffer: 1024 * 1024 * 20, timeout: 300000, env: { ...process.env } },
    (err, stdout) => (err ? reject(err) : resolve(stdout.trim())));
  child.stdin.write(prompt);
  child.stdin.end();
});

let proposed = [];
{
  let t = raw;
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) t = fence[1];
  const s = t.indexOf('['), e = t.lastIndexOf(']');
  if (s !== -1 && e !== -1) { try { proposed = JSON.parse(t.slice(s, e + 1)); } catch { /* empty */ } }
}
log('lens result', { proposed: proposed.length });

// ── 4. file candidates ────────────────────────────────────────────────────
const tenantId = APPLY ? await getTenantId('skechers') : null;
const audited = visits.filter((v) => !v.duplicate);
const rows = [];
for (const p of proposed) {
  const v = audited[Number(p.cta) - 1];
  if (!v) continue;
  let evidence = [];
  if (v.screenshotPath) {
    const key = `qa/${runSlug}/${path.basename(v.screenshotPath)}`;
    if (APPLY && mediaConfigured()) {
      await putMedia({ filePath: v.screenshotPath, key }).catch((e) => log('upload failed', { error: String(e).slice(0, 100) }));
    }
    evidence = [{ r2Key: key, localPath: v.screenshotPath, caption: `Landing for "${v.label}" from "${v.subject}"`, takenAt: new Date().toISOString() }];
  }
  const defectType = DEFECT_TYPES.includes(p.defect_type) ? p.defect_type : 'other';
  rows.push({
    personaSlug: PERSONA, category: 'copy',
    location: 'Desktop Site', device: 'Mac Laptop', browser: 'Chrome',
    reporterEmail: 'cora-qa@etell.app',
    area: 'Off-site', url: v.href,
    description: String(p.description ?? '').slice(0, 2000),
    businessImpact: p.business_impact ?? null,
    affectedElements: [{ selector: `email CTA "${v.label}"`, src: v.href, location: `email: ${v.subject}` }],
    expected: p.expected ?? null, observed: p.observed ?? null,
    urgency: DEFECT_URGENCIES.includes(p.urgency) ? p.urgency : 'Low',
    urgencyRationale: p.urgency_rationale ?? null,
    reproSteps: Array.isArray(p.repro_steps) ? p.repro_steps.slice(0, 10) : [],
    confidence: typeof p.confidence === 'number' ? p.confidence : null,
    defectType, evidence,
    dedupeKey: dedupeKey({ personaSlug: PERSONA, area: 'Off-site', url: v.href, defectType }),
  });
}

if (!APPLY) {
  rows.forEach((r) => log('  would file', { urgency: r.urgency, type: r.defectType, desc: r.description.slice(0, 90) }));
  log('DRY RUN — pass --apply to file');
} else {
  const res = await insertCandidateDefects(rows, { tenantId });
  log('filed', res);
  log('next: verify.mjs --apply && adjudicate.mjs --apply');
}
