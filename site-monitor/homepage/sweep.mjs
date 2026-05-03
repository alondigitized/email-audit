#!/usr/bin/env node
/**
 * Daily homepage snapshot sweep for every active persona.
 *
 * Walker's existing site-review.mjs runs a 9-step journey on a single
 * brand. This script does the simpler thing across MANY brands: pulls
 * every active persona from the DB, navigates to each persona's
 * `profile.journey.site` homepage, takes a screenshot, asks Claude
 * (via the openclaw-aware CLI used by site-review) to write a
 * first-person reaction in the persona's voice, and publishes the
 * result as a `type='site'` audit.
 *
 * The point: every brand-specific persona (Sage Prime/Amazon, Holly
 * Saver/Walmart, …) builds a daily understanding of what their brand
 * is showcasing on the front door. Cumulative across days = a brain
 * the persona can be asked questions against ("Sage, what was Amazon
 * pushing on Tuesday?").
 *
 * Usage:
 *   node site-monitor/homepage/sweep.mjs                    # all personas
 *   node site-monitor/homepage/sweep.mjs --persona walker   # one persona
 *   node site-monitor/homepage/sweep.mjs --limit 5          # smoke test
 *   node site-monitor/homepage/sweep.mjs --dry-run          # no DB / no R2
 *
 * Cost / time: ~50s/persona × 50+ personas = ~45 min/day. Claude
 * Sonnet @ ~$0.02/review × 50 = ~$1/day.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { chromium as playwrightChromium, devices } from 'playwright';
import { chromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

import { putMedia, auditMediaKey, mediaConfigured } from '../../audit-pipeline/media.mjs';
import {
  upsertAuditRow,
  upsertExperienceAndReaction,
  listActivePersonasWithSite,
  dbConfigured,
} from '../../audit-pipeline/publish.mjs';
import { writeVaultNote } from '../../audit-pipeline/vault-writer.mjs';
import {
  parseReviewSections,
  parsePredictions,
} from '../../audit-pipeline/extract.mjs';

chromium.use(StealthPlugin());
const execFileAsync = promisify(execFile);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tiny .env loader — same pattern as backfill-auto-confirm so we don't
// pull in dotenv (audit-pipeline doesn't ship one).
function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return;
  const txt = fs.readFileSync(filePath, 'utf8');
  for (const line of txt.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const m = trimmed.match(/^([A-Z0-9_]+)\s*=\s*(.*)$/i);
    if (!m) continue;
    let val = m[2];
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (process.env[m[1]] === undefined) process.env[m[1]] = val;
  }
}
loadEnv(path.join(__dirname, '..', '.env'));
loadEnv(path.join(__dirname, '..', '..', 'site-monitor', '.env'));

const REPO_ROOT = path.dirname(path.dirname(__dirname));
const ARTIFACTS_BASE = path.join(REPO_ROOT, 'reports', 'homepage-sweeps');
const LOG_DIR = path.join(__dirname, '..', 'logs');
const LOG_PATH = path.join(LOG_DIR, 'homepage-sweep.log');
fs.mkdirSync(ARTIFACTS_BASE, { recursive: true });
fs.mkdirSync(LOG_DIR, { recursive: true });

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const arg = (n, d) => {
  const i = argv.indexOf(n);
  return i >= 0 && i + 1 < argv.length ? argv[i + 1] : d;
};
const PERSONA_FILTER = arg('--persona', null);
const LIMIT = Number(arg('--limit', '0')) || null;
const DRY_RUN = flag('--dry-run');

const NAV_TIMEOUT_MS = 30_000;
const PAGE_SETTLE_MS = 3_500;
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'sonnet';
const CLAUDE_EFFORT = process.env.CLAUDE_EFFORT || 'medium';
const CLAUDE_BIN = process.env.CLAUDE_BIN || '/Users/alontsang/.local/bin/claude';

function log(msg, extra = null) {
  const ts = new Date().toISOString();
  const line = extra ? `${ts} ${msg} ${JSON.stringify(extra)}` : `${ts} ${msg}`;
  console.log(line);
  fs.appendFileSync(LOG_PATH, line + '\n');
}

function todayUtcSlug() {
  return new Date().toISOString().slice(0, 10);
}

function brandSlugify(domain) {
  return domain.replace(/^https?:\/\//, '').replace(/\/$/, '').replace(/[^a-z0-9.-]+/gi, '-').toLowerCase();
}

async function openBrowser() {
  const port = process.env.CHROME_DEBUG_PORT || '9222';
  try {
    const b = await playwrightChromium.connectOverCDP(`http://localhost:${port}`);
    log('connected to real Chrome via CDP');
    return { browser: b, real: true };
  } catch (err) {
    log('CDP unavailable, falling back to stealth chromium', { err: String(err).slice(0, 160) });
    const b = await chromium.launch({ headless: true });
    return { browser: b, real: false };
  }
}

async function dismissPopups(page) {
  // Best-effort: most retailer homepages throw a region picker, email
  // signup, cookies banner, and / or location modal. Try a handful of
  // common close selectors and ignore failures.
  const closers = [
    'button[aria-label="Close" i]',
    'button[aria-label="close" i]',
    'button[aria-label="Dismiss" i]',
    'button[aria-label*="reject" i]',
    'button[aria-label*="accept" i]',
    'button[id*="onetrust-accept" i]',
    'button[id*="onetrust-reject" i]',
    'button.close',
    '.modal-close',
    '[data-dismiss="modal"]',
  ];
  for (const sel of closers) {
    try {
      const btn = page.locator(sel).first();
      if (await btn.isVisible({ timeout: 600 })) {
        await btn.click({ timeout: 1200 }).catch(() => {});
        await new Promise((r) => setTimeout(r, 250));
      }
    } catch {}
  }
}

function buildPrompt(persona, brandHostname, screenshotPath) {
  const id = persona.profile?.identity ?? {};
  const personaPreamble = [
    `You are ${persona.name}.`,
    id.age ? `Age: ${id.age}.` : '',
    id.generation ? `Generation: ${id.generation}.` : '',
    id.gender ? `Gender: ${id.gender}.` : '',
    id.style ? `Style: ${id.style}` : '',
    id.shopping_habits ? `Shopping habits: ${id.shopping_habits}` : '',
    id.tech_comfort ? `Tech comfort: ${id.tech_comfort}.` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return [
    personaPreamble,
    '',
    `You just opened ${brandHostname} on your phone. The screenshot of what you see is at this absolute path:`,
    '',
    screenshotPath,
    '',
    'IMPORTANT: Use the Read tool to view the screenshot above BEFORE writing your review. Do not describe the homepage from memory or guess — only describe what is visible in the image.',
    '',
    '── SCORING RUBRIC ──────────────────────────────────────────────',
    'Every numeric score below uses the same observable-signal method:',
    'start at 1, then add 1 point for each criterion that is TRUE based on',
    'what you can SEE in the screenshot. Cap at 10. Cite specific signals',
    'in the rationale. Do NOT score by gut — score by checklist.',
    '',
    '**Business Impact Score (1-10)** — how well this homepage targets a',
    'person like YOU. Add 1 per signal:',
    '- Hero copy or imagery explicitly speaks to your persona (focus area, age, generation, lifestyle)',
    '- A returning-shopper hook is visible (loyalty/member CTA, recently-viewed, rewards balance)',
    '- One concrete offer is visible above the fold (specific %/$ off, free-shipping threshold)',
    '- One unmistakable primary CTA is visible above the fold (button copy + visible button)',
    '- Visual hierarchy is clear — the eye knows where to land first',
    '- No render bugs (no overlapping text, broken images, placeholder lorem-ipsum, layout breakage)',
    '- Demographic signals match your persona (no "20-something runners" if you are 60+ comfort)',
    '- Page reflects current campaign / season (not stale "Summer Sale" in fall)',
    '- Loyalty / membership benefits visible without scrolling',
    '- Offer feels honest (no buried fine print, exclusionary language, bait-and-switch)',
    '',
    '**Engagement Likelihood (1-10)** — how likely YOU would scroll past',
    'the first screen / tap a category / interact (vs. bounce). Add 1 per:',
    '- Hero relates to YOUR shopping focus area',
    '- Visible navigation makes it easy to reach your category in 1 tap',
    "- A category or product image catches the eye for what YOU shop",
    "- A promo banner offers something YOU'd actually use",
    '- The page renders cleanly (no obvious perf issues, no cumulative layout shift)',
    '- Imagery includes someone like you (age / style / situation)',
    '- Copy register matches your reading style (not too techy, not too cute)',
    '- Trust signals visible (review counts, badges, free returns, etc.)',
    '- New-arrivals or "what\'s hot" rail is visible in your category',
    '- No dark patterns / forced modals making you want to bounce',
    '',
    '**Conversion Likelihood (1-10)** — assuming you engaged, how likely',
    'YOU would tap a CTA / add to cart / sign up. Add 1 per:',
    '- Primary CTA is in YOUR category (Men\'s Shoes if you are Walker, etc.)',
    '- CTA copy is unambiguous ("Shop Slip-ins", not "Discover")',
    '- Active offer reduces price OR has loyalty member pricing',
    '- Offer is time-bounded with a credible deadline',
    '- Free-shipping threshold is visible AND reachable for typical AOV',
    '- A specific product page is one tap away (not buried in nav)',
    '- Sizing / fit info is visible or one tap away (relevant for footwear)',
    '- Returns / exchanges policy is mentioned',
    '- Reviews or ratings visible on featured products',
    '- Trust signals at checkout depth (secure-checkout, pay-later, etc.)',
    '',
    'Be honest about scores. Most homepages land 4-7. Reserve 8+ for',
    'genuinely targeted experiences with multiple signals. A score of 9 or',
    '10 means almost every signal above is present.',
    '── END RUBRIC ──────────────────────────────────────────────────',
    '',
    'Use this EXACT markdown structure. Each numbered heading must appear verbatim — do not rename, append subtitles, or merge headings. The headings drive downstream parsing.',
    '',
    '## 1. Executive Summary',
    'Two or three sentences in your voice — top-level reaction to the homepage as a whole. What kind of brand does this look like to you, and what is it pushing right now?',
    '',
    '## 2. Business Impact Score (1-10)',
    'Apply the rubric above. On the line below, write only `**X/10**`. In a sub-bullet, list the specific signals from the rubric you counted (e.g. "+ hero matches focus area, + concrete offer, + clear CTA, + loyalty hook visible — score 5"). The rationale must reference rubric criteria, not vibes.',
    '',
    "## 3. What's Working",
    'Short bullet list. Each bullet names a specific element on the page (the urgency timer, the comfort-tech hero, the loyalty CTA, etc.) and why it lands for someone like you.',
    '',
    "## 4. What's Weak",
    'Short bullet list. Each bullet names a specific element and why it falls flat or feels off-target.',
    '',
    '## 5. Recommendations',
    'Two-to-four bullets, concrete and visual ("swap the runway hero for a lifestyle shot"), not vague ("be more on-brand"). Recommendations the brand could ship next week.',
    '',
    '## 6. Bottom Line',
    'One sentence: would you keep browsing, leave, or convert? In your voice.',
    '',
    '## 7. Hero & Above-the-Fold Analysis',
    'Compact structured block, this exact layout:',
    '- **Hero copy (verbatim):** `<the headline / hero text exactly as it appears>`',
    '- **Hero image:** <one-line description — model, product, or lifestyle scene>',
    '- **Primary CTA:** `<verbatim button text>` — visible above the fold? yes/no',
    '- **Scores (1-10):** Clarity `X`, Relevance to you `X`, Visual hierarchy `X`, On-brand `X`',
    '- **Strengths:** one or two short bullets',
    '- **Weaknesses:** one or two short bullets',
    '',
    '## 8. Promotional & Urgency Cues',
    'Compact block listing every offer / countdown / banner you can see:',
    '- **Active promos:** comma-separated list (e.g. "BOGO 50%, Free shipping over $50, 25% off rewards")',
    '- **Urgency / scarcity:** countdown timers, "ends today", limited-stock copy',
    '- **Loyalty hooks:** rewards-program callouts, member-pricing badges',
    '- **Honesty check:** anything that feels manipulative, exclusionary, or buried in fine print',
    '',
    '## 9. Engagement Likelihood',
    "Apply the Engagement rubric above. You're already on the homepage — score whether YOU would scroll/interact (vs. bounce). Use the SAME bulleted-tally format as Business Impact: one bullet per criterion with + or − and a short note. Then the score line.",
    '- + or − Hero relates to my focus area: <short note>',
    '- + or − Easy to reach my category: <short note>',
    '- + or − Eye-catching imagery in my category: <short note>',
    '- + or − Promo banner I would use: <short note>',
    '- + or − Page renders cleanly: <short note>',
    '- + or − Imagery includes someone like me: <short note>',
    '- + or − Copy register matches mine: <short note>',
    '- + or − Trust signals visible: <short note>',
    '- + or − New / hot rail in my category: <short note>',
    '- + or − No dark patterns: <short note>',
    '- **Score:** `X/10` — should equal 1 + count of "+" bullets above.',
    '- **Rationale:** 1-2 sentences calling out the strongest signal.',
    '',
    '## 10. Conversion Likelihood',
    'Apply the Conversion rubric above. Assuming you engaged, score whether YOU would tap a CTA / cart / sign up. Same bulleted-tally format.',
    '- + or − CTA in my category: <short note>',
    '- + or − Unambiguous CTA copy: <short note>',
    '- + or − Active price reduction or member pricing: <short note>',
    '- + or − Time-bounded credible deadline: <short note>',
    '- + or − Reachable free-shipping threshold: <short note>',
    '- + or − Specific product page one tap away: <short note>',
    '- + or − Sizing / fit info accessible: <short note>',
    '- + or − Returns / exchanges mentioned: <short note>',
    '- + or − Reviews / ratings visible: <short note>',
    '- + or − Trust / security signals: <short note>',
    '- **Score:** `X/10` — should equal 1 + count of "+" bullets.',
    '- **Rationale:** 1-2 sentences — what pulled you toward action or away from it.',
    '',
    '## 11. Evidence',
    'Bullet list of every distinct module visible on the homepage (in scroll order):',
    '- Hero / primary value prop',
    '- Featured categories',
    '- Promotional banners or strips',
    '- Loyalty / rewards section',
    '- Editorial / lifestyle modules',
    '- New-arrivals or best-seller rails',
    '- Footer credibility (reviews, awards, policies)',
    '- Bugs / friction / clarity issues that are VISIBLE in the screenshot',
    '',
    'Style requirements:',
    '- First person ("I", "me", "my") — this is YOUR reaction.',
    "- Voice matches your persona's age, generation, and shopping habits — a 34-year-old mom does not sound like a 62-year-old retiree.",
    '- Specific over generic. Quote real text and name real elements you can see.',
    '- Recommendations over root-cause theory.',
    '- Only flag visual bugs you can actually see — do not speculate about HTML, JS, or anything off-screen.',
  ].join('\n');
}

async function generateClaudeReview(prompt, screenshotPath) {
  const args = [
    '-p',
    '--model', CLAUDE_MODEL,
    '--effort', CLAUDE_EFFORT,
    '--no-session-persistence',
    '--permission-mode', 'bypassPermissions',
    '--add-dir', path.dirname(screenshotPath),
  ];
  const child = execFile(CLAUDE_BIN, args, {
    cwd: REPO_ROOT,
    maxBuffer: 1024 * 1024 * 20,
    timeout: 600_000,
  });
  child.stdin.write(prompt);
  child.stdin.end();
  const { stdout } = await new Promise((resolve, reject) => {
    let out = '', err = '';
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { err += d; });
    child.on('close', (code) => {
      if (code !== 0) reject(new Error(`claude exited ${code}: ${err.slice(0, 400)}`));
      else resolve({ stdout: out, stderr: err });
    });
  });
  return stdout.trim();
}

function extractScore(text) {
  const m = text.match(/\*\*\s*(\d+(?:\.\d+)?)\s*\/\s*10\s*\*\*/);
  if (m) return `${m[1]}/10`;
  const m2 = text.match(/(\d+(?:\.\d+)?)\s*\/\s*10/);
  if (m2) return `${m2[1]}/10`;
  return '--/10';
}

async function auditPersonaHomepage(browser, persona, real) {
  const t0 = Date.now();
  const url = persona.site;
  const hostname = (() => { try { return new URL(url).hostname; } catch { return url; } })();
  const slug = `${todayUtcSlug()}-homepage-${brandSlugify(hostname)}-${persona.slug}`;
  const artifactDir = path.join(ARTIFACTS_BASE, slug);
  fs.mkdirSync(artifactDir, { recursive: true });

  const device = devices['iPhone 14'];
  const context = real
    ? browser.contexts()[0] || (await browser.newContext({ ...device, bypassCSP: true }))
    : await browser.newContext({ ...device, bypassCSP: true });
  const page = await context.newPage();
  if (!real) {
    await page.setViewportSize({ width: device.viewport.width, height: device.viewport.height });
  }

  log(`navigate ${persona.slug} → ${url}`);
  let navError = null;
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT_MS });
  } catch (err) {
    navError = String(err).slice(0, 200);
    log('nav failed', { persona: persona.slug, err: navError });
  }
  await new Promise((r) => setTimeout(r, PAGE_SETTLE_MS));
  await dismissPopups(page);
  await new Promise((r) => setTimeout(r, 500));

  // Two screenshots: viewport for Claude (above-fold focus, small),
  // fullpage for the audit-page proof block. Both upload to R2;
  // render_image_key points at fullpage so the audit detail page
  // shows the whole homepage as proof.
  const viewportPath = path.join(artifactDir, 'homepage-viewport.png');
  const fullpagePath = path.join(artifactDir, 'homepage-fullpage.png');
  try {
    await page.screenshot({ path: viewportPath, fullPage: false });
  } catch (err) {
    log('viewport screenshot failed', { persona: persona.slug, err: String(err).slice(0, 200) });
  }
  try {
    await page.screenshot({ path: fullpagePath, fullPage: true });
  } catch (err) {
    log('fullpage screenshot failed', { persona: persona.slug, err: String(err).slice(0, 200) });
  }

  // Cleanup the per-persona context unless we're using the real Chrome
  // default context (closing it would kill the user's Chrome session).
  if (!real) await context.close().catch(() => {});

  // Fall back across screenshots if either capture failed.
  const reviewPath = fs.existsSync(viewportPath)
    ? viewportPath
    : fs.existsSync(fullpagePath)
      ? fullpagePath
      : null;
  const proofPath = fs.existsSync(fullpagePath) ? fullpagePath : viewportPath;
  if (navError && !reviewPath) {
    log('skipping persona — no screenshot to review', { persona: persona.slug });
    return { ok: false, persona: persona.slug, error: navError };
  }

  const prompt = buildPrompt(persona, hostname, reviewPath);
  let review;
  try {
    review = await generateClaudeReview(prompt, reviewPath);
  } catch (err) {
    log('claude review failed', { persona: persona.slug, err: String(err).slice(0, 200) });
    return { ok: false, persona: persona.slug, error: 'claude failed' };
  }

  const score = extractScore(review);
  const now = new Date();
  // Parse the structured-markdown review into typed sections + per-
  // section predictions, same shape as email audits. Powers
  // /audits/{slug} rendering, vault note structuring, embedding
  // search, and any aggregate analytics over time.
  const sections = parseReviewSections(review);
  const predictions = parsePredictions(sections);
  const auditData = {
    schema_version: 1,
    slug,
    type: 'site',
    persona: persona.slug,
    email: {
      subject: `Homepage snapshot · ${hostname} · ${todayUtcSlug()}`,
      preheader: null,
      from: hostname,
      from_display_name: hostname,
      timestamp_iso: now.toISOString(),
      date_formatted: now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC',
    },
    review: {
      score,
      raw_markdown: review,
      sections,
      predictions,
    },
    qa: null,
    assets: {
      render_image: null,
      pdf: null,
      webview_url: url,
    },
  };

  // R2 upload — fullpage as the canonical proof, viewport as a
  // sidecar (handy if we ever want to render an above-the-fold preview
  // inside the audit page).
  if (!DRY_RUN && mediaConfigured()) {
    if (fs.existsSync(fullpagePath)) {
      try {
        const key = await putMedia({
          filePath: fullpagePath,
          key: auditMediaKey(slug, 'homepage-fullpage.png'),
          contentType: 'image/png',
        });
        auditData.assets.render_image_key = key;
      } catch (err) {
        log('R2 fullpage upload failed', { persona: persona.slug, err: String(err).slice(0, 200) });
      }
    }
    if (fs.existsSync(viewportPath)) {
      try {
        await putMedia({
          filePath: viewportPath,
          key: auditMediaKey(slug, 'homepage-viewport.png'),
          contentType: 'image/png',
        });
      } catch (err) {
        log('R2 viewport upload failed', { persona: persona.slug, err: String(err).slice(0, 200) });
      }
    }
    // If fullpage failed but viewport succeeded, fall back so the audit
    // page still has something to show as proof.
    if (!auditData.assets.render_image_key && fs.existsSync(viewportPath)) {
      auditData.assets.render_image_key = auditMediaKey(slug, 'homepage-viewport.png');
    }
  }

  fs.writeFileSync(
    path.join(artifactDir, 'audit-data.json'),
    JSON.stringify(auditData, null, 2)
  );

  if (DRY_RUN || !dbConfigured()) {
    log('dry-run / no DB — skipping upsert', { persona: persona.slug });
    return { ok: true, persona: persona.slug, slug, score, ms: Date.now() - t0 };
  }

  await upsertAuditRow({ slug, data: auditData });
  await upsertExperienceAndReaction({ slug, data: auditData });
  try {
    await writeVaultNote({
      auditData,
      personaSlug: persona.slug,
      repoRoot: REPO_ROOT,
    });
  } catch (err) {
    log('vault write failed', { persona: persona.slug, err: String(err).slice(0, 200) });
  }
  return { ok: true, persona: persona.slug, slug, score, ms: Date.now() - t0 };
}

async function main() {
  log(`sweep start`, { dryRun: DRY_RUN, personaFilter: PERSONA_FILTER, limit: LIMIT });
  let personas = await listActivePersonasWithSite();
  if (PERSONA_FILTER) personas = personas.filter((p) => p.slug === PERSONA_FILTER);
  if (LIMIT) personas = personas.slice(0, LIMIT);
  log(`personas to audit: ${personas.length}`);

  const { browser, real } = await openBrowser();
  const results = [];
  for (const p of personas) {
    try {
      const r = await auditPersonaHomepage(browser, p, real);
      results.push(r);
      log('done', r);
    } catch (err) {
      log('persona failed', { persona: p.slug, err: String(err).slice(0, 200) });
      results.push({ ok: false, persona: p.slug, error: String(err).slice(0, 200) });
    }
  }
  if (!real) await browser.close().catch(() => {});

  const ok = results.filter((r) => r.ok).length;
  const fail = results.length - ok;
  log(`sweep done — ok=${ok} fail=${fail}`);
}

main().catch((err) => {
  console.error(err);
  log('FATAL', { err: String(err).slice(0, 400) });
  process.exit(1);
});
