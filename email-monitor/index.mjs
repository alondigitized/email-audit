import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';
import { execFile } from 'child_process';
import { promisify } from 'util';
import dotenv from 'dotenv';
import { AgentMailClient } from 'agentmail';
import { writeVaultNote } from '../audit-pipeline/vault-writer.mjs';
import { putMedia, auditMediaKey, mediaConfigured } from '../audit-pipeline/media.mjs';
import { auditDataSchema } from '../site/lib/schema/audit.mjs';
import {
  upsertAuditRow,
  upsertAutoConfirm,
  upsertExperienceAndReaction,
  dbConfigured,
} from '../audit-pipeline/publish.mjs';
import { extractAll } from '../audit-pipeline/extract.mjs';
import { scheduleEngagement } from '../audit-pipeline/engagement.mjs';
import { runAutoConfirm } from '../audit-pipeline/auto-confirm.mjs';
import { mirrorReflectionsToVault } from '../audit-pipeline/mirror-reflections.mjs';
import { mirrorSynthesesToVault } from '../audit-pipeline/mirror-syntheses.mjs';
import {
  listIndustryPersonasForBrand,
  publishIndustryReaction,
  flattenPersonaProfileForPrompt,
  getCategoryContextForIndustryPersona,
  getBrandHistoryForPersona,
  registrableDomain,
} from '../audit-pipeline/industry-fanout.mjs';
import { generateAndPublishAudio } from '../audit-pipeline/audio-publish.mjs';

const execFileAsync = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const API_KEY = process.env.AGENTMAIL_API_KEY;
const POLL_INTERVAL_MS = Number(process.env.POLL_INTERVAL_MS || 15000);
const STATE_PATH = path.join(__dirname, 'state.json');
const INBOXES_CONFIG_PATH = path.join(__dirname, 'inboxes.json');
const LOG_DIR = path.join(__dirname, 'logs');
const LOG_PATH = path.join(LOG_DIR, 'monitor.log');

// Multi-inbox config. Source order:
//   1. DB — every persona with profile.agentmail.inbox_address set
//      (authoritative after the persona-management refactor). Adding a
//      persona in /admin/personas requires a daemon restart to pick up.
//   2. inboxes.json file — legacy; kept as a fallback so the daemon boots
//      when DATABASE_URL isn't set locally.
//   3. Single-inbox env — ultimate fallback.
async function loadInboxes() {
  try {
    const { loadInboxMap } = await import(
      '../audit-pipeline/persona-profile.mjs'
    );
    const fromDb = await loadInboxMap();
    if (fromDb.length > 0) return fromDb;
  } catch (err) {
    console.warn('loadInboxes: DB map unavailable,', String(err).slice(0, 200));
  }
  if (fs.existsSync(INBOXES_CONFIG_PATH)) {
    try {
      const cfg = JSON.parse(fs.readFileSync(INBOXES_CONFIG_PATH, 'utf8'));
      if (Array.isArray(cfg) && cfg.length > 0) return cfg;
    } catch {
      /* fall through */
    }
  }
  const single = process.env.INBOX_ID || 'walker@agentmail.to';
  return [{ inbox: single, persona: process.env.PERSONA || 'walker' }];
}
const INBOXES = await loadInboxes();
const REPORTS_DIR = path.join(path.dirname(__dirname), 'reports');
const PIPELINE_DIR = path.join(path.dirname(__dirname), 'audit-pipeline');
const SITE_MANIFEST = path.join(PIPELINE_DIR, 'published-audits.json');
const ARTIFACTS_DIR = path.join(REPORTS_DIR, 'email-artifacts');
const RENDER_SWIFT = path.join(path.dirname(__dirname), 'scripts', 'render_web_url.swift');
const QA_SCRIPT = path.join(__dirname, 'qa_checks.py');
const MAX_RETRIES = 3;
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'sonnet';
const CLAUDE_EFFORT = process.env.CLAUDE_EFFORT || 'high';

if (!API_KEY) throw new Error('Missing AGENTMAIL_API_KEY');

fs.mkdirSync(LOG_DIR, { recursive: true });

// Strip secrets from any string before it hits stdout or the log file.
// Belt-and-suspenders: redact known env-var values AND known token shapes.
const SECRET_ENV_VARS = ['GH_TOKEN', 'AGENTMAIL_API_KEY', 'ANTHROPIC_API_KEY', 'CLAUDE_API_KEY'];
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

function emptyInboxState() {
  return {
    processedMessageIds: [],
    inFlightMessageIds: [],
    failedMessageIds: [],
    retryCounts: {},
    lastPollAt: null,
    lastSuccessAt: null,
  };
}

// Load multi-inbox state, migrating the legacy flat schema if needed.
function loadState() {
  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
  } catch {
    return { inboxes: {} };
  }

  // Already multi-inbox?
  if (parsed && typeof parsed.inboxes === 'object' && parsed.inboxes !== null) {
    return parsed;
  }

  // Legacy flat schema — wrap under the first configured inbox.
  if (parsed && Array.isArray(parsed.processedMessageIds)) {
    const firstInbox = INBOXES[0]?.inbox || 'walker@agentmail.to';
    return {
      inboxes: {
        [firstInbox]: {
          processedMessageIds: parsed.processedMessageIds,
          inFlightMessageIds: parsed.inFlightMessageIds || [],
          failedMessageIds: parsed.failedMessageIds || [],
          retryCounts: parsed.retryCounts || {},
          lastPollAt: parsed.lastPollAt || null,
          lastSuccessAt: parsed.lastSuccessAt || null,
        },
      },
    };
  }

  return { inboxes: {} };
}

function saveState(state) {
  const trimmed = { inboxes: {} };
  for (const [inboxId, s] of Object.entries(state.inboxes || {})) {
    trimmed.inboxes[inboxId] = {
      processedMessageIds: Array.from(new Set(s.processedMessageIds || [])).slice(-1000),
      inFlightMessageIds: Array.from(new Set(s.inFlightMessageIds || [])).slice(-1000),
      failedMessageIds: Array.from(new Set(s.failedMessageIds || [])).slice(-1000),
      retryCounts: s.retryCounts || {},
      lastPollAt: s.lastPollAt || null,
      lastSuccessAt: s.lastSuccessAt || null,
    };
  }
  fs.writeFileSync(STATE_PATH, JSON.stringify(trimmed, null, 2));
}

// Returns the mutable per-inbox state slice, creating it if missing.
function inboxStateFor(state, inboxId) {
  state.inboxes = state.inboxes || {};
  if (!state.inboxes[inboxId]) state.inboxes[inboxId] = emptyInboxState();
  return state.inboxes[inboxId];
}

function seen(inboxState, id) {
  return inboxState.processedMessageIds.includes(id);
}

function failed(inboxState, id) {
  return (inboxState.failedMessageIds || []).includes(id);
}

function markFailed(state, inboxId, id) {
  const s = inboxStateFor(state, inboxId);
  s.failedMessageIds = [...(s.failedMessageIds || []), id];
  s.inFlightMessageIds = (s.inFlightMessageIds || []).filter((x) => x !== id);
  saveState(state);
}

function markSeen(state, inboxId, id) {
  const s = inboxStateFor(state, inboxId);
  if (!seen(s, id)) {
    s.processedMessageIds.push(id);
    s.inFlightMessageIds = (s.inFlightMessageIds || []).filter((x) => x !== id);
    s.lastSuccessAt = new Date().toISOString();
    saveState(state);
  }
}

function inFlight(inboxState, id) {
  return (inboxState.inFlightMessageIds || []).includes(id);
}

function markInFlight(state, inboxId, id) {
  const s = inboxStateFor(state, inboxId);
  if (!inFlight(s, id)) {
    s.inFlightMessageIds = [...(s.inFlightMessageIds || []), id];
    saveState(state);
  }
}

function shorten(text, max = 2400) {
  if (!text) return '';
  const clean = String(text).replace(/\s+/g, ' ').trim();
  return clean.length > max ? clean.slice(0, max - 1) + '…' : clean;
}

function slugify(text) {
  return String(text || 'email-review')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'email-review';
}

// Guarantee the saved HTML declares UTF-8 before WKWebView renders it.
// Many senders (HOKA, Crocs, …) ship a broken `<meta content="...charset=utf-8" />`
// without `http-equiv`, which browsers ignore — the page falls back to
// Latin-1 and every `&nbsp;` (UTF-8 bytes 0xC2 0xA0) renders as a stray
// `Â` before the space. Injecting a valid `<meta charset="utf-8">` first in
// <head> overrides whatever the sender shipped.
function ensureUtf8Charset(html) {
  if (!html) return html;
  const metaTag = '<meta charset="utf-8">';
  if (/<head[^>]*>/i.test(html)) {
    return html.replace(/<head[^>]*>/i, (m) => `${m}${metaTag}`);
  }
  if (/<html[^>]*>/i.test(html)) {
    return html.replace(
      /<html[^>]*>/i,
      (m) => `${m}<head>${metaTag}</head>`,
    );
  }
  return `<!doctype html><html><head>${metaTag}</head><body>${html}</body></html>`;
}

function dateSlug(iso) {
  // Coerce Date / number / string into a YYYY-MM-DD prefix. The legacy
  // AgentMail path always passed an ISO string; the email_message path
  // passes Date objects from neon's mode:'date'. String(<Date>) is
  // "Sun Apr 26 ..." which sliced to 10 = "Sun Apr 26" (spaces!) and
  // breaks downstream filesystem paths.
  const d = iso instanceof Date ? iso : iso ? new Date(iso) : new Date();
  return d.toISOString().slice(0, 10);
}

async function generateReview(message, { images = [], label = 'review' } = {}) {
  const args = [
    '-p',
    '--model', CLAUDE_MODEL,
    '--effort', CLAUDE_EFFORT,
    '--no-session-persistence',
    '--permission-mode', 'bypassPermissions',
  ];
  // Add directory access for any image files so Claude can read them
  const addedDirs = new Set();
  for (const img of images) {
    const dir = path.dirname(img);
    if (!addedDirs.has(dir)) {
      args.push('--add-dir', dir);
      addedDirs.add(dir);
    }
  }
  try {
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
      child.stdout.on('data', (d) => { out += d; });
      child.stderr.on('data', (d) => { err += d; });
      child.on('close', (code) => {
        if (code !== 0) reject(Object.assign(new Error(`claude exited with code ${code}`), { stdout: out, stderr: err }));
        else resolve({ stdout: out, stderr: err });
      });
      child.on('error', reject);
    });
    if (stderr?.trim()) log(`claude ${label} stderr`, { stderr: stderr.trim().slice(0, 1000) });
    const review = stdout.trim();
    if (!review) throw new Error(`claude returned empty ${label}`);
    return review;
  } catch (err) {
    log(`claude ${label} failed`, { error: String(err), stdout: err.stdout?.slice?.(0, 1000), stderr: err.stderr?.slice?.(0, 1000) });
    throw err;
  }
}

// Cache persona identity JSONs from site-monitor/personas/ so each email
// review is written in that specific persona's voice. Falls back to a
// generic reviewer prompt if the persona file can't be loaded.
const PERSONA_CACHE = new Map();
async function loadPersona(slug) {
  if (!slug) return null;
  if (PERSONA_CACHE.has(slug)) return PERSONA_CACHE.get(slug);

  // Path 1: legacy filesystem JSON (walker, martha, calvin-haze) —
  // hand-curated identity files used pre-DB.
  try {
    const p = path.join(
      path.dirname(__dirname),
      'site-monitor',
      'personas',
      `${slug}.json`,
    );
    const data = JSON.parse(fs.readFileSync(p, 'utf8'));
    PERSONA_CACHE.set(slug, data);
    return data;
  } catch {}

  // Path 2: DB lookup — every persona seeded via /admin/personas/new or
  // the wizard lives in the persona table with profile.identity. Reshape
  // to the same flat keys buildContentPrompt expects (name, age,
  // generation, gender, style, shopping_habits, tech_comfort,
  // focus_areas) so the prompt builder doesn't care about the source.
  try {
    const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
    if (!url) {
      PERSONA_CACHE.set(slug, null);
      return null;
    }
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(url);
    const rows = await sql`SELECT name, profile FROM persona WHERE slug = ${slug} LIMIT 1`;
    const r = rows[0];
    if (!r?.profile?.identity) {
      PERSONA_CACHE.set(slug, null);
      return null;
    }
    const id = r.profile.identity;
    const data = {
      slug,
      name: r.name ?? id.name,
      age: id.age,
      generation: id.generation,
      gender: id.gender,
      style: id.style,
      shopping_habits: id.shopping_habits,
      tech_comfort: id.tech_comfort,
      focus_areas: id.focus_areas ?? [],
      site: r.profile.journey?.site ?? null,
      search_term: r.profile.journey?.search_term ?? null,
      category_path: r.profile.journey?.category_path ?? [],
    };
    PERSONA_CACHE.set(slug, data);
    return data;
  } catch (err) {
    log('loadPersona DB fallback failed', { slug, err: String(err).slice(0, 200) });
    PERSONA_CACHE.set(slug, null);
    return null;
  }
}

function buildContentPrompt(
  msg,
  screenshotPath,
  persona = null,
  categoryContext = null,
  brandHistoryContext = null
) {
  const from = msg.from_ || msg.from || '';
  const subject = msg.subject || '(no subject)';
  const preview = msg.preview || '';

  // Persona preamble — matches site-monitor's style so the review is written
  // from a specific person's perspective, not a generic reviewer's.
  const personaPreamble = persona
    ? [
        `You are ${persona.name}, a ${persona.age}-year-old ${persona.generation} ${String(persona.gender || '').toLowerCase()}.`,
        `${persona.style}. ${persona.shopping_habits}. ${persona.tech_comfort}.`,
        '',
        'You just opened this marketing email in your personal inbox. Review it from YOUR perspective — your voice, your priorities, your buying habits. Write in first person. What caught your eye? What felt irrelevant or annoying? Would you click? Would you forward it to a friend?',
        '',
        'The attached image is a screenshot of the email exactly as it rendered in your inbox. Base your review on what you SEE in the rendered image — not on HTML source code.',
        '',
      ]
    : [
        'You are reviewing a marketing email as it appears to the recipient.',
        'The attached image is a screenshot of the fully rendered email exactly as it would appear in an inbox.',
        'Base your entire review on what you SEE in the rendered image — not on HTML source code.',
        '',
      ];

  const personaLens = persona
    ? [
        '',
        'Evaluate from your persona perspective:',
        `- Does this feel targeted at someone like you (${persona.age}, ${persona.generation}, ${String(persona.gender || '').toLowerCase()})?`,
        Array.isArray(persona.focus_areas) && persona.focus_areas.length
          ? `- Is ${persona.focus_areas.join(', ')} content present or missing?`
          : null,
        `- Is text readable without zooming? Are tap targets reasonable for you on a phone?`,
        '- Does the offer or call-to-action match how you actually shop?',
        '- Did the sender treat you like a known customer, or a stranger?',
        '',
      ].filter(Boolean)
    : [];

  // Brand-history block — used on BOTH brand and industry paths. The
  // persona's most-recent reads of the SAME brand let the prompt notice
  // cadence ("third cart-abandon this week"), repeated creative ("same
  // hero as Tuesday"), and escalating discounts the way a real
  // subscriber would. Pass [] to skip.
  const brandHistoryBlock =
    Array.isArray(brandHistoryContext) && brandHistoryContext.length > 0
      ? [
          '',
          '── BRAND HISTORY — recent emails from this brand you have audited ──',
          'Most-recent first. Notice cadence, repeated creative, escalating',
          "offers, or beats the brand keeps hitting. Reference at least one",
          'specific prior send by date or subject when relevant — that is',
          'what a real subscriber would do.',
          '',
          ...brandHistoryContext.map((c) => {
            const d = c.received_at
              ? new Date(c.received_at).toISOString().slice(0, 10)
              : '';
            const score = c.score ? ` · ${c.score}/10` : '';
            const take = c.take ? ` — ${c.take}` : '';
            return `- ${d} · "${c.subject}"${score}${take}`;
          }),
          '── END BRAND HISTORY ──',
        ]
      : [];

  // Industry-persona only: a compact list of the persona's most recent
  // audits across OTHER brands in the category. Passing this in turns
  // the review from "this email in isolation" into "this email vs. its
  // category peers", which is what an industry critic is supposed to
  // produce. Brand personas pass categoryContext=null and the block
  // collapses to nothing.
  const categoryBlock =
    Array.isArray(categoryContext) && categoryContext.length > 0
      ? [
          '',
          '── CATEGORY CONTEXT — your recent reads on other brands ──',
          'These are the most recent emails YOU audited from competitors',
          'in this category. Use them as concrete reference points — name',
          'specific brands by name in your review, compare directly, and',
          "credit who's doing it better or worse on the same beats.",
          '',
          ...categoryContext.map((c) => {
            const score = c.score ? ` · scored ${c.score}/10` : '';
            const take = c.take ? ` — ${c.take}` : '';
            return `- **${c.brand}**: "${c.subject}"${score}${take}`;
          }),
          '── END CATEGORY CONTEXT ──',
          '',
          'In your review, weave in at least 2-3 specific competitor',
          'comparisons by name. Examples: "Sephora opens cleaner than',
          'this", "Ulta would have buried the offer below the fold",',
          '"this is the third time this month Crocs ran the same hero".',
          'Make the comparisons land — vague "competitors do this better"',
          'is not enough.',
        ]
      : [];

  const parts = [
    ...personaPreamble,
    '── SCORING RUBRIC ──────────────────────────────────────────────',
    'Every numeric score below uses the same observable-signal method:',
    'start at 1, then add 1 point for each criterion that is TRUE based',
    'on what you can SEE in the rendered email. Cap at 10. Cite specific',
    'signals in the rationale. Do NOT score by gut — score by checklist.',
    '',
    '**Business Impact Score (1-10)** — how well this email targets a',
    'person like YOU. Add 1 per signal:',
    '- Subject or hero copy explicitly references your persona\'s focus area',
    '- Sender is a brand you recognize / are subscribed to',
    '- One concrete offer is visible (specific %/$ off, free-shipping, BOGO)',
    '- Primary CTA is unambiguous (clear button copy + visible button)',
    '- Visual hierarchy is clear — the eye lands on the offer/hero first',
    '- No render bugs (no overlapping text, broken images, lorem-ipsum, layout breakage)',
    '- Demographic signals match your persona (age/gender/style of models)',
    '- Email reflects current campaign / season (not stale promo language)',
    '- Loyalty / member benefits visible if you are a member',
    '- Offer feels honest (no buried fine print, exclusionary language, bait-and-switch)',
    '',
    '**Open Likelihood (1-10)** — how likely YOU would open from the inbox',
    "based on subject + preview + sender. Add 1 per signal:",
    '- Sender display name is recognizable',
    '- Subject is concrete (specific offer, product, urgency)',
    '- Subject is relevant to your persona\'s focus area',
    '- Preview text complements (does NOT repeat) the subject',
    '- Preview text is real copy (not "view in browser" / unsubscribe junk)',
    '- Subject is under ~50 chars (mobile-friendly)',
    '- No spam signals (ALL CAPS, !!! exclamations, "FREE!!!" stacking)',
    '- Personalization or segmentation hints (your name, your category)',
    '- Time-bounded urgency that feels credible',
    '- Cadence feels right (not the 4th near-identical promo this week)',
    '',
    '**Click Likelihood (1-10)** — assuming you opened, how likely YOU',
    'would click a CTA in the body. Add 1 per signal:',
    '- Hero offer is visible without scrolling on mobile',
    '- Primary CTA is in YOUR category / focus area',
    '- CTA copy is specific (a verb + a noun, not "Discover")',
    '- Offer reduces price OR has loyalty member pricing',
    '- Offer is time-bounded with credible deadline',
    '- One specific product / hero linked (not just to homepage)',
    '- Product detail you care about (sizing, fit, availability, ingredients, etc.) is visible',
    '- Reviews or social proof visible',
    '- Brand voice is consistent and trusted',
    '- No friction — no "view in browser" first, no broken-image gaps',
    '',
    'Be honest about scores. Most everyday promotional emails land 3-6.',
    'Reserve 8+ for genuinely targeted, well-executed sends. Score 9 or 10',
    'means almost every signal above is present.',
    '── END RUBRIC ──────────────────────────────────────────────────',
    '',
    'Use this exact review structure. Sections 1-4 are PROSE / bullets for',
    'a reader on their commute (audio-friendly). Sections 5-9 are STRUCTURED',
    'DATA for cross-audit aggregation — be precise, no extra prose.',
    '',
    '## 1. Overview',
    persona
      ? "Two or three short paragraphs, first person. Lead with your gut reaction; end with a clear judgement (would you click? forward to a friend? mark as read?). Punchy and opinionated. Don't repeat the subject line back; assume the reader sees it on the page."
      : 'Two or three short paragraphs, opinionated. Lead with the strongest read; end with a clear judgement. No fluff.',
    '',
    '## 2. What worked',
    persona
      ? 'Bulleted list of specific wins from the rendered image — hero copy, offer clarity, demographic signals that matched you, trust cues, layout decisions. Each bullet a short sentence in your voice. 2-5 items.'
      : 'Bulleted list of specific wins observable in the render. Each bullet a short sentence. 2-5 items.',
    '',
    "## 3. What didn't",
    persona
      ? 'Bulleted list of specific misses — friction, irrelevance, broken hierarchy, mismatched offer, demographic signals that pushed you away. Each bullet a short sentence in your voice. 2-5 items. If genuinely nothing missed, say so in one line rather than padding.'
      : 'Bulleted list of specific misses observable in the render. Each bullet a short sentence. 2-5 items.',
    '',
    "## 4. What I'd change",
    'Ordered, concrete rewrite suggestions — most-impactful first. Lead with whatever single change would lift this email the most. Include the alt subject lines and alt preheaders in this section as called-out lines:',
    '   - **Subject Alt A:** `<alternative phrasing for A/B test>`',
    '   - **Subject Alt B:** `<second alternative>`',
    '   - **Preheader Alt A:** `<rewritten preheader>`',
    '   - **Preheader Alt B:** `<second alternative>`',
    'Recommendations over root-cause theory. Each item should be something a marketer could ship next send.',
    '',
    '## 5. Business Impact Score (1-10)',
    'Apply the Business Impact rubric above. Write `**X/10**` on its own line, then a sub-bullet listing the rubric criteria that were TRUE. Score must equal 1 + the count.',
    '',
    '## 6. Open Likelihood (persona-grounded)',
    'Apply the Open Likelihood rubric. Layout exactly:',
    '   - **Score:** `X/10`',
    '   - **Signals counted:** name each rubric criterion that was TRUE.',
    '   - **Rationale:** 1-2 sentences calling out the strongest signals.',
    '',
    '## 7. Click-Through Likelihood (persona-grounded)',
    'Apply the Click Likelihood rubric. Layout exactly:',
    '   - **Score:** `X/10`',
    '   - **Signals counted:** name each rubric criterion that was TRUE.',
    '   - **Rationale:** 1-2 sentences — what pulled you toward the click or away from it.',
    '',
    '## 8. Subject',
    'Compact, structured block (no prose) so the dashboard can aggregate across many emails:',
    '   - **Subject:** `<verbatim subject line>`',
    '   - **Length:** <char count>',
    '   - **Scores (1-10):** Clarity `X`, Curiosity `X`, Personalization `X`, Urgency `X`, Specificity `X`',
    '   Honest scores — most subject lines are 4-7. Reserve 8+ for genuinely excellent.',
    '',
    '## 9. Preview',
    'Compact, structured block (no prose). The preview text is what inbox clients show next to the subject line.',
    '   - **Preview:** `<verbatim preview text; write "(none / leaking junk)" if missing or obviously unintended>`',
    '   - **Length:** <char count>',
    '   - **Scores (1-10):** Complements subject `X`, Specificity `X`, Clarity `X`, Inbox-fit `X`',
    '   Score Inbox-fit low (1-4) when the preheader repeats the subject word-for-word, is truncated junk, or is the unsubscribe/view-in-browser text. Deliverability is NOT materially affected by preheader — do not claim it is.',
    '',
    'Style requirements:',
    persona
      ? '- Sections 1-4: first person ("I", "me") — this is YOUR reaction.'
      : '- Sections 1-4: direct, opinionated, no hedging.',
    persona
      ? '- Voice must match your persona\'s age, generation, and shopping habits — a 34-year-old mom does not sound like a 62-year-old retiree.'
      : '- Opinionated with substance.',
    '- Only flag visual bugs you can actually see in the screenshot (broken images, overlapping text, empty fields, etc.)',
    '- Do NOT speculate about HTML issues, merge tokens, or code-level problems you cannot see',
    ...personaLens,
    ...brandHistoryBlock,
    ...categoryBlock,
    `From: ${from}`,
    `Subject: ${subject}`,
    preview ? `Preview: ${shorten(preview, 500)}` : '',
    '',
    `IMPORTANT: Before writing your review, use the Read tool to view the screenshot at: ${screenshotPath}`,
    'Base your review entirely on what you see in that rendered image.',
  ];
  return parts.filter(Boolean).join('\n');
}

function buildTechnicalPrompt(msg, qaContext = '') {
  const from = msg.from_ || msg.from || '';
  const subject = msg.subject || '(no subject)';
  const text = msg.extracted_text || msg.text || '';
  const html = msg.extracted_html || msg.html || '';
  const body = shorten(html || text, 6000);
  const parts = [
    'You are performing a TECHNICAL audit of a marketing email.',
    'Focus exclusively on code-level and infrastructure issues found in the HTML source and automated QA checks.',
    'Do NOT comment on visual design, messaging, branding, or marketing strategy — a separate content review handles that.',
    '',
    'Use this exact review structure:',
    '1. Technical Summary (1-2 sentences)',
    '2. Link & Tracking Issues',
    '3. Rendering & Accessibility',
    '4. Personalization & Merge Tokens',
    '5. Compliance (CAN-SPAM, unsubscribe, authentication headers)',
    '6. Email-to-Site Continuity (UTM params, landing page alignment)',
    '7. Recommendations',
    '',
    'Style requirements:',
    '- Concise, factual, evidence-based',
    '- Only flag real issues confirmed by HTML source or QA data',
    '- Include specific URLs, selectors, or header values as evidence',
    '- If no issues in a category, say "No issues found" — do not fabricate problems',
    '',
    `From: ${from}`,
    `Subject: ${subject}`,
    '',
    'HTML Source (truncated):',
    body || '(no body available)',
  ];
  if (qaContext) {
    parts.push('', qaContext);
  }
  return parts.filter(Boolean).join('\n');
}

function mergeReviews(contentReview, technicalReview) {
  return [
    contentReview,
    '',
    '---',
    '',
    '## Technical Audit',
    '',
    technicalReview,
  ].join('\n');
}

// Fan out the brand audit to any active industry personas matching the
// brand's tenant + industry. For each, regenerate a content review with
// the industry persona's voice, reuse the (persona-agnostic) technical
// review, and persist via publishIndustryReaction.
//
// Best-effort per industry persona — one persona's failure doesn't block
// the others. Skips silently if the brand persona has no matching industry
// personas (the common case during rollout).
async function fanoutIndustryAudits({
  brandPersonaSlug,
  brandAuditSlug,
  fullMessage,
  qaReport,
  rendered,
  technicalReview,
  artifactDir,
  messageId,
}) {
  const matches = await listIndustryPersonasForBrand(brandPersonaSlug);
  if (matches.length === 0) return;

  const repoRoot = path.dirname(__dirname);

  for (const persona of matches) {
    const flat = flattenPersonaProfileForPrompt(
      persona.slug,
      persona.name,
      persona.profile
    );
    if (!flat) {
      log('industry fanout skipped (no identity)', {
        slug: brandAuditSlug,
        industry: persona.slug,
      });
      continue;
    }

    // Extract the brand domain once and reuse for both context fetches.
    const fanoutBrandDomain = (() => {
      const fromAddr = String(fullMessage.from_ || fullMessage.from || '');
      const m =
        fromAddr.match(/[<\s]([^<>\s@]+@([^<>\s]+))[>\s]?$/) ||
        fromAddr.match(/^([^<>\s@]+@([^<>\s]+))$/);
      return m ? m[2].toLowerCase().replace(/[>\s].*$/, '') : null;
    })();

    // Cross-brand category context — recent reads from OTHER brands
    // in the same industry.
    let categoryContext = [];
    try {
      categoryContext = await getCategoryContextForIndustryPersona({
        industryPersonaSlug: persona.slug,
        excludeBrandDomain: fanoutBrandDomain,
        limit: 8,
      });
    } catch (err) {
      log('industry fanout: category context fetch failed (non-fatal)', {
        industry: persona.slug,
        error: String(err).slice(0, 200),
      });
    }

    // Same-brand history for the industry persona too — they've seen
    // many sends from THIS brand and should notice cadence + repeated
    // creative alongside cross-brand comparisons.
    let brandHistoryContext = [];
    try {
      if (fanoutBrandDomain) {
        brandHistoryContext = await getBrandHistoryForPersona({
          personaSlug: persona.slug,
          brandDomain: fanoutBrandDomain,
          excludeMessageId: messageId,
          limit: 4,
        });
      }
    } catch (err) {
      log('industry fanout: brand history fetch failed (non-fatal)', {
        industry: persona.slug,
        error: String(err).slice(0, 200),
      });
    }

    try {
      let contentReview = '';
      if (rendered) {
        contentReview = await generateReview(
          buildContentPrompt(
            fullMessage,
            rendered,
            flat,
            categoryContext,
            brandHistoryContext
          ),
          { images: [rendered], label: `industry-${persona.short ?? persona.slug}` }
        );
      } else {
        log('industry fanout: no screenshot, technical-only', {
          slug: brandAuditSlug,
          industry: persona.slug,
        });
      }
      const merged = contentReview
        ? mergeReviews(contentReview, technicalReview)
        : technicalReview;

      const result = await publishIndustryReaction({
        brandPersonaSlug,
        brandAuditSlug,
        industryPersona: persona,
        reviewText: merged,
        qaReport,
        msg: fullMessage,
        artifactDir,
        messageId,
        repoRoot,
      });
      log('industry fanout published', {
        brand: brandPersonaSlug,
        brandSlug: brandAuditSlug,
        industry: persona.slug,
        auditSlug: result.auditSlug,
      });
    } catch (err) {
      log('industry fanout: persona failed (non-fatal)', {
        brand: brandPersonaSlug,
        brandSlug: brandAuditSlug,
        industry: persona.slug,
        error: String(err).slice(0, 500),
      });
    }
  }
}

async function saveArtifacts(msg) {
  fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });
  const slug = `${dateSlug(msg.created_at)}-${slugify(msg.subject)}`;
  let dir = path.join(ARTIFACTS_DIR, slug);
  if (fs.existsSync(dir)) {
    const idSlug = slugify((msg.messageId || msg.message_id || '').replace(/[@<>]/g, '-')).slice(0, 24);
    dir = path.join(ARTIFACTS_DIR, `${slug}-${idSlug}`);
  }
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'message.json'), JSON.stringify(msg, null, 2));
  fs.writeFileSync(
    path.join(dir, 'message.html'),
    ensureUtf8Charset(msg.html || msg.extracted_html || ''),
    'utf8',
  );
  fs.writeFileSync(path.join(dir, 'message.txt'), msg.text || msg.extracted_text || '', 'utf8');
  const combined = `${msg.html || msg.extracted_html || ''}\n${msg.text || msg.extracted_text || ''}`;
  const urls = Array.from(new Set((combined.match(/https?:\/\/[^\s"'<>]+/g) || [])));
  const webview = urls.find((u) => u.includes('view.emails.skechers.com')) || '';
  fs.writeFileSync(path.join(dir, 'urls.txt'), urls.join('\n'), 'utf8');
  fs.writeFileSync(path.join(dir, 'webview-url.txt'), webview, 'utf8');
  return { dir, slug: path.basename(dir), webview };
}

async function renderWebview(artifacts) {
  if (!fs.existsSync(RENDER_SWIFT)) return null;
  const out = path.join(artifacts.dir, 'email-webview-render.png');
  // Prefer webview URL; fall back to local message.html for emails without one
  const source = artifacts.webview || path.join(artifacts.dir, 'message.html');
  if (!artifacts.webview && !fs.existsSync(source)) return null;
  await execFileAsync('swift', [RENDER_SWIFT, source, out], { maxBuffer: 1024 * 1024 * 20, timeout: 120000 });
  return out;
}

async function runQaChecks(artifacts) {
  try {
    const { stdout, stderr } = await execFileAsync('python3', [QA_SCRIPT, artifacts.dir], {
      maxBuffer: 1024 * 1024 * 5,
      timeout: 120000,
    });
    if (stderr?.trim()) log('qa stderr', { stderr: stderr.trim().slice(0, 500) });
    const reportPath = stdout.trim();
    if (reportPath && fs.existsSync(reportPath)) {
      return JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    }
    return null;
  } catch (err) {
    log('qa checks failed (non-fatal)', { error: String(err).slice(0, 500) });
    return null;
  }
}

function buildQaSummaryForPrompt(qaReport) {
  if (!qaReport) return '';
  const lines = ['', '---', 'AUTOMATED QA FINDINGS (from programmatic checks):'];
  for (const [cat, data] of Object.entries(qaReport.categories || {})) {
    const issues = (data.checks || []).filter((c) => c.status !== 'pass');
    if (!issues.length) continue;
    lines.push(`\n${cat.replace(/_/g, ' ').toUpperCase()}:`);
    for (const c of issues) {
      const icon = c.status === 'fail' ? 'FAIL' : 'WARN';
      const urlNote = c.url ? ` | URL: ${c.url}` : '';
      lines.push(`  [${icon}] ${c.label}: ${c.detail}${urlNote}`);
    }
  }
  const s = qaReport.summary || {};
  lines.push(`\nSummary: ${s.overall_pass_rate || '?'} pass rate, ${s.total_issues || 0} issue(s), ${s.total_warnings || 0} warning(s)`);
  lines.push('Incorporate relevant findings into your review, especially in Evidence > Bugs/friction and Recommendations.');
  return lines.join('\n');
}

function updatePublishedManifest(entry) {
  const existing = fs.existsSync(SITE_MANIFEST) ? JSON.parse(fs.readFileSync(SITE_MANIFEST, 'utf8')) : [];
  const filtered = existing.filter((x) => x.messageId !== entry.messageId);
  filtered.push(entry);
  fs.writeFileSync(SITE_MANIFEST, JSON.stringify(filtered, null, 2));
}

// Phase 4 of the foundation refactor: Postgres is the canonical store for
// audit data; the site reads from it. This function publishes the single
// audit we just processed (no manifest scan) — uploads media, upserts the
// DB row, writes the persona vault note, and git-pushes only the vault
// markdown. Filesystem audit.json / index.json / manifest.json are runtime
// artifacts, gitignored.
async function publishSite({ slug, persona, artifactDir, messageId = null, rawKey = null }) {
  if (!slug || !artifactDir) {
    throw new Error('publishSite requires { slug, persona, artifactDir }');
  }

  // Phase 1: Node extractor builds audit-data.json from raw artifacts
  // (email audits only — site journeys write their own in site-monitor).
  // Ported from extract_audit_data.py in P5; byte-identical output.
  await extractAll();

  const repoRoot = path.dirname(__dirname);

  if (!fs.existsSync(artifactDir)) {
    log('publishSite: artifactDir missing, skipping', { slug, artifactDir });
    return;
  }

  // Upload render.png to R2 so we can embed its key in the audit payload.
  const srcPng = path.join(artifactDir, 'email-webview-render.png');
  let renderKey = null;
  if (fs.existsSync(srcPng) && mediaConfigured()) {
    try {
      renderKey = await putMedia({
        filePath: srcPng,
        key: auditMediaKey(slug, 'render.png'),
        contentType: 'image/png',
      });
    } catch (err) {
      log('R2 upload failed', { slug, error: err.message });
    }
  }

  const srcAudit = path.join(artifactDir, 'audit-data.json');
  if (!fs.existsSync(srcAudit)) {
    log('publishSite: no artifact audit-data.json', { slug });
    return;
  }
  const data = JSON.parse(fs.readFileSync(srcAudit, 'utf8'));
  if (renderKey) {
    data.assets = data.assets ?? {};
    data.assets.render_image_key = renderKey;
  }
  // Validate before persisting. Schema drift should fail one audit loudly
  // rather than silently ship a malformed record into the DB.
  auditDataSchema.parse(data);

  // Persist the merged shape back to the artifact so rerun-audit works.
  fs.writeFileSync(srcAudit, JSON.stringify(data, null, 2));

  if (!dbConfigured()) {
    log('DATABASE_URL not set — publish finished without DB upsert', { slug });
    return;
  }
  await upsertAuditRow({ slug, data });

  // V3 dual-write: also split the row into experience + reaction during
  // the XR-C window. Captures the reactionId so the embed step can
  // mirror into reaction_embedding alongside the legacy audit_embedding
  // write. Best-effort — a failure here logs but doesn't undo the audit
  // upsert above (the legacy site read path still works on audit).
  let reactionId = null;
  try {
    const r = await upsertExperienceAndReaction({ slug, data, messageId, rawKey });
    reactionId = r.reactionId;
  } catch (err) {
    log('experience+reaction dual-write failed (non-fatal)', {
      slug,
      error: err instanceof Error ? err.message : String(err),
    });
  }

  // Phase 1b: double-opt-in auto-confirm. Detect/extract/click happens
  // off the cached message body so we don't refetch from R2. Best-effort —
  // failures here are visible to the user via the audit page badge but
  // don't block any downstream step.
  try {
    const subject = data?.email?.subject ?? '';
    const htmlPath = path.join(artifactDir, 'message.html');
    const textPath = path.join(artifactDir, 'message.txt');
    const html = fs.existsSync(htmlPath) ? fs.readFileSync(htmlPath, 'utf8') : '';
    const text = fs.existsSync(textPath) ? fs.readFileSync(textPath, 'utf8') : '';
    const result = await runAutoConfirm({ subject, html, text });
    if (result) {
      data.auto_confirm = result;
      try {
        await upsertAutoConfirm({ slug, autoConfirm: result });
      } catch (err) {
        log('auto-confirm DB writeback failed', { slug, error: String(err).slice(0, 200) });
      }
      // Also re-write the artifact so rerun-audit picks up the new field.
      fs.writeFileSync(srcAudit, JSON.stringify(data, null, 2));
      log('auto-confirm', {
        slug,
        success: result.success,
        http: result.http_status,
        url: (result.url ?? '').slice(0, 120),
      });
    }
  } catch (err) {
    log('auto-confirm step failed (non-fatal)', {
      slug,
      error: err instanceof Error ? err.message : String(err),
    });
  }

  // Phase 2: persona brain vault note + embedding. Wrapped because vault
  // writes should never block the critical path (the DB write is what
  // the user-facing site reads).
  try {
    await writeVaultNote({
      auditData: data,
      personaSlug: persona,
      repoRoot,
      reactionId,
    });
  } catch (err) {
    log('vault write failed (non-fatal)', { slug, error: err.message });
  }

  // Phase 2b: engagement simulation. Pixel-fire + occasional CTA click
  // a few minutes later, to keep the persona's address off ESP graymail
  // suppression lists. Fire-and-forget — uses setTimeout internally so
  // it doesn't block this poll's progression.
  try {
    const htmlPath = path.join(artifactDir, 'message.html');
    const html = fs.existsSync(htmlPath)
      ? fs.readFileSync(htmlPath, 'utf8')
      : '';
    const brandDomain =
      data?.email?.from?.match(/@([^>\s]+)/)?.[1]?.toLowerCase() ?? null;
    scheduleEngagement({ html, brandDomain, slug });
  } catch (err) {
    log('engagement schedule failed (non-fatal)', { slug, error: err.message });
  }

  // Phase 3: git push the vault markdown — to the `vault-notes` BRANCH, via
  // a dedicated worktree, never to main.
  //
  // Why: this daemon produced 62 vault commits on main in one day, and every
  // push to main creates deployment attempts on BOTH connected Vercel
  // projects; even attempts the ignoreCommand cancels count against the
  // daily deployment quota. On 2026-08-20 that rate-limited the production
  // project for 24h and blocked real code deploys. vercel.json now sets
  // git.deploymentEnabled['vault-notes']=false, so pushes to that branch
  // create NO deployments at all.
  //
  // The worktree (.vault-push/, gitignored) also means the daemon no longer
  // runs `git pull --rebase` inside the main working checkout — it can't
  // race a human's (or agent's) in-progress work anymore.
  const ghToken = process.env.GH_TOKEN || '';
  if (!ghToken) {
    log('GH_TOKEN not set — skipping vault push', { slug });
    return;
  }
  const pushCmd = [
    `cd "${repoRoot}"`,
    // one-time, idempotent: materialize the worktree on the vault-notes branch
    `[ -d .vault-push/.git ] || git worktree add .vault-push vault-notes 2>/dev/null || (git fetch origin vault-notes && git worktree add .vault-push vault-notes)`,
    `cd .vault-push`,
    `git pull --rebase origin vault-notes 2>/dev/null || true`,
    // vaults/ in the main checkout is the source of truth; mirror it in
    `rsync -a --delete "${repoRoot}/vaults/" vaults/`,
    `git add vaults`,
    `git diff --cached --quiet && echo NO_CHANGES || (git commit -m "vault: update note for ${slug}" && git push origin vault-notes)`,
  ].join(' && ');
  await execFileAsync('/bin/zsh', ['-lc', pushCmd], {
    maxBuffer: 1024 * 1024 * 50,
    env: { ...process.env, GH_TOKEN: ghToken },
  });
}

async function fetchAllMessages(client, inboxId, inboxState) {
  const all = [];
  let pageToken;
  do {
    const response = await client.inboxes.messages.list(inboxId, { limit: 50, pageToken });
    const messages = response.messages || [];
    all.push(...messages);
    // Stop paginating once every message on this page is already known
    const allKnown = messages.length > 0 && messages.every((m) => {
      const id = m.messageId || m.message_id;
      return seen(inboxState, id) || failed(inboxState, id);
    });
    if (allKnown) break;
    pageToken = response.nextPageToken;
  } while (pageToken);
  return all;
}

async function fetchNewMessages(client, inboxId, after) {
  const opts = { limit: 50 };
  if (after) opts.after = new Date(after);
  const response = await client.inboxes.messages.list(inboxId, opts);
  return response.messages || [];
}

async function fetchMessage(client, inboxId, messageId) {
  return client.inboxes.messages.get(inboxId, messageId);
}

async function processMessage(client, state, inboxId, persona, message, source = 'unknown') {
  const inboxState = inboxStateFor(state, inboxId);
  const id = message.messageId || message.message_id;
  if (!id) {
    log('skipping message without id', { inbox: inboxId, source });
    return;
  }
  if (seen(inboxState, id)) {
    log('duplicate skipped', { id, inbox: inboxId, source });
    return;
  }
  if (failed(inboxState, id)) {
    const retryCount = (inboxState.retryCounts || {})[id] || 0;
    if (retryCount >= MAX_RETRIES) {
      log('max retries exceeded; skipping', { id, inbox: inboxId, source, retries: retryCount });
      return;
    }
    inboxState.failedMessageIds = (inboxState.failedMessageIds || []).filter((x) => x !== id);
    log('retrying previously failed message', { id, inbox: inboxId, source, attempt: retryCount + 1 });
  }
  if (inFlight(inboxState, id)) {
    log('already in flight; skipping duplicate work', { id, inbox: inboxId, source });
    return;
  }

  markInFlight(state, inboxId, id);

  try {
    let fullMessage = message;
    try {
      fullMessage = await fetchMessage(client, inboxId, id);
    } catch (err) {
      log('failed to hydrate full message; using event/list payload', { id, inbox: inboxId, source, error: String(err) });
    }

    log('processing message', {
      id,
      inbox: inboxId,
      persona,
      source,
      from: fullMessage.from_ || fullMessage.from,
      subject: fullMessage.subject,
      created_at: fullMessage.created_at,
    });

    // Phase D — flip any pending subscription_jobs row for this persona+brand
    // to manual_done. Best-effort; does nothing if no matching row. Done
    // before review work so a failure here can't lose the signal.
    try {
      const fromAddr = String(
        fullMessage.from_ || fullMessage.from || ''
      ).toLowerCase();
      const at = fromAddr.lastIndexOf('@');
      if (at >= 0) {
        const fromDomain = fromAddr.slice(at + 1).replace(/[>\s].*$/, '');
        if (fromDomain) {
          const { noteSubscriptionConfirmed } = await import(
            '../audit-pipeline/persona-profile.mjs'
          );
          await noteSubscriptionConfirmed(persona, fromDomain);
        }
      }
    } catch (err) {
      log('noteSubscriptionConfirmed failed (non-fatal)', { id, error: String(err).slice(0, 200) });
    }

    const artifacts = await saveArtifacts(fullMessage);

    // Step 1: Render screenshot + run QA checks in parallel (both needed before reviews)
    const [rendered, qaReport] = await Promise.all([
      renderWebview(artifacts),
      runQaChecks(artifacts),
    ]);
    const qaContext = buildQaSummaryForPrompt(qaReport);

    // Pull the persona's recent reads from THIS brand so the prompt
    // can notice cadence, repeated creative, escalating discounts —
    // the things a real subscriber's brain remembers. Best-effort.
    let brandHistoryContext = [];
    try {
      const fromAddr = String(fullMessage.from_ || fullMessage.from || '');
      const m =
        fromAddr.match(/[<\s]([^<>\s@]+@([^<>\s]+))[>\s]?$/) ||
        fromAddr.match(/^([^<>\s@]+@([^<>\s]+))$/);
      const brandDomain = m
        ? m[2].toLowerCase().replace(/[>\s].*$/, '')
        : null;
      if (brandDomain) {
        brandHistoryContext = await getBrandHistoryForPersona({
          personaSlug: persona,
          brandDomain,
          excludeMessageId:
            fullMessage.messageId || fullMessage.message_id || null,
          limit: 6,
        });
      }
    } catch (err) {
      log('brand history fetch failed (non-fatal)', {
        id,
        persona,
        error: String(err).slice(0, 200),
      });
    }

    // Step 2: Run content + technical reviews in parallel
    let contentReview, technicalReview;
    if (rendered) {
      // Both agents run concurrently: content reviews the screenshot, technical reviews HTML.
      // Content review gets the persona identity so the voice matches the inbox's owner.
      const personaIdentity = await loadPersona(persona);
      [contentReview, technicalReview] = await Promise.all([
        generateReview(
          buildContentPrompt(
            fullMessage,
            rendered,
            personaIdentity,
            null, // categoryContext — industry-only
            brandHistoryContext
          ),
          { images: [rendered], label: 'content-review' }
        ),
        generateReview(buildTechnicalPrompt(fullMessage, qaContext), { label: 'technical-review' }),
      ]);
    } else {
      // No screenshot available — technical review only, content gets HTML fallback
      log('no screenshot available; running technical-only review', { id });
      technicalReview = await generateReview(buildTechnicalPrompt(fullMessage, qaContext), { label: 'technical-review' });
      contentReview = '';
    }
    const reviewText = contentReview
      ? mergeReviews(contentReview, technicalReview)
      : technicalReview;

    // Save review text to disk
    fs.writeFileSync(path.join(artifacts.dir, 'review.txt'), reviewText, 'utf8');

    // Publish to site — this is the critical path
    updatePublishedManifest({
      messageId: id,
      subject: fullMessage.subject,
      artifactDir: artifacts.dir,
      slug: artifacts.slug,
      persona,
    });
    let published = false;
    try {
      await publishSite({
        slug: artifacts.slug,
        persona,
        artifactDir: artifacts.dir,
        messageId: fullMessage.messageId || fullMessage.message_id || null,
      });
      published = true;
    } catch (err) {
      log('site publish failed (non-fatal)', { id, inbox: inboxId, error: String(err).slice(0, 500) });
    }

    if (published) {
      // Audio generation runs BEFORE industry fanout so the brand audit
      // has its MP3 ready quickly; fanout audio is generated per
      // industry persona inside fanoutIndustryAudits.
      try {
        const auditDataPath = path.join(artifacts.dir, 'audit-data.json');
        if (fs.existsSync(auditDataPath)) {
          const data = JSON.parse(fs.readFileSync(auditDataPath, 'utf8'));
          await generateAndPublishAudio({
            slug: artifacts.slug,
            persona,
            sections: data.review?.sections ?? {},
            email: data.email ?? {},
            artifactDir: artifacts.dir,
          });
        }
      } catch (err) {
        log('audio generation failed (non-fatal)', {
          id,
          inbox: inboxId,
          persona,
          error: String(err).slice(0, 500),
        });
      }

      try {
        await fanoutIndustryAudits({
          brandPersonaSlug: persona,
          brandAuditSlug: artifacts.slug,
          fullMessage,
          qaReport,
          rendered,
          technicalReview,
          artifactDir: artifacts.dir,
          messageId: fullMessage.messageId || fullMessage.message_id || null,
        });
      } catch (err) {
        log('industry fanout failed (non-fatal)', {
          id,
          inbox: inboxId,
          persona,
          error: String(err).slice(0, 500),
        });
      }
    }

    markSeen(state, inboxId, id);
    log('message completed', { id, inbox: inboxId, persona, source, slug: artifacts.slug, rendered: !!rendered, published });
  } catch (err) {
    inboxState.retryCounts = inboxState.retryCounts || {};
    inboxState.retryCounts[id] = (inboxState.retryCounts[id] || 0) + 1;
    markFailed(state, inboxId, id);
    log('message failed', { id, inbox: inboxId, persona, source, attempt: inboxState.retryCounts[id], maxRetries: MAX_RETRIES, error: String(err) });
  }
}

// ─── Cloudflare-routed email_message consumer ─────────────────────────────
//
// Personas with @etell.app inboxes (everything created post-CF migration —
// rae-l, sarah-l, future tenant forks) get their mail via Cloudflare Email
// Routing → Worker → /api/email/inbound → email_message table. This loop
// is the daemon-side consumer.
//
// Idempotency: dedup is via the email_message.processed_at column, not
// state.json. The DB is the source of truth — the daemon can crash and
// restart without losing track. We also don't track retries here; a
// poison-pill row will retry every poll cycle. If that becomes painful,
// add an `attempts` column.
//
// Per-row flow mirrors processMessage but builds the AgentMail-shaped
// `msg` from the row (no fetchMessage round-trip needed since the body
// is already in Postgres).

async function processCloudflareEmail(row) {
  const id = row.id;
  const personaSlug = row.persona_slug;
  // Build a synthetic AgentMail-shaped message for saveArtifacts and the
  // prompt builders. They only read .created_at, .subject, .html, .text,
  // .from / .from_, and .messageId / .message_id.
  const msg = {
    messageId: row.message_id || `db-${id}`,
    message_id: row.message_id || `db-${id}`,
    created_at: row.received_at,
    subject: row.subject || '(no subject)',
    html: row.html || '',
    text: row.text_body || '',
    from: row.from_address,
    from_: row.from_address,
  };

  log('processing email_message', {
    id,
    persona: personaSlug,
    from: row.from_address,
    subject: msg.subject,
  });

  try {
    // Best-effort: flip any pending subscription_jobs row for this
    // persona+brand to manual_done. Same pattern as the AgentMail flow.
    try {
      const fromAddr = String(row.from_address || '').toLowerCase();
      const at = fromAddr.lastIndexOf('@');
      if (at >= 0) {
        const fromDomain = fromAddr.slice(at + 1).replace(/[>\s].*$/, '');
        if (fromDomain) {
          const { noteSubscriptionConfirmed } = await import(
            '../audit-pipeline/persona-profile.mjs'
          );
          await noteSubscriptionConfirmed(personaSlug, fromDomain);
        }
      }
    } catch (err) {
      log('noteSubscriptionConfirmed failed (non-fatal)', {
        id,
        error: String(err).slice(0, 200),
      });
    }

    const artifacts = await saveArtifacts(msg);

    const [rendered, qaReport] = await Promise.all([
      renderWebview(artifacts),
      runQaChecks(artifacts),
    ]);
    const qaContext = buildQaSummaryForPrompt(qaReport);

    // Brand history for the Cloudflare-routed brand persona path —
    // same purpose as the AgentMail path above.
    let brandHistoryContext = [];
    try {
      const fromAddr = String(msg.from_ || msg.from || '');
      const m =
        fromAddr.match(/[<\s]([^<>\s@]+@([^<>\s]+))[>\s]?$/) ||
        fromAddr.match(/^([^<>\s@]+@([^<>\s]+))$/);
      const brandDomain = m
        ? m[2].toLowerCase().replace(/[>\s].*$/, '')
        : null;
      if (brandDomain) {
        brandHistoryContext = await getBrandHistoryForPersona({
          personaSlug,
          brandDomain,
          excludeMessageId: row.message_id || null,
          limit: 6,
        });
      }
    } catch (err) {
      log('brand history fetch failed (non-fatal)', {
        id,
        persona: personaSlug,
        error: String(err).slice(0, 200),
      });
    }

    let contentReview, technicalReview;
    if (rendered) {
      const personaIdentity = await loadPersona(personaSlug);
      [contentReview, technicalReview] = await Promise.all([
        generateReview(
          buildContentPrompt(
            msg,
            rendered,
            personaIdentity,
            null,
            brandHistoryContext
          ),
          { images: [rendered], label: 'content-review' }
        ),
        generateReview(buildTechnicalPrompt(msg, qaContext), {
          label: 'technical-review',
        }),
      ]);
    } else {
      log('no screenshot available; running technical-only review', { id });
      technicalReview = await generateReview(
        buildTechnicalPrompt(msg, qaContext),
        { label: 'technical-review' }
      );
      contentReview = '';
    }
    const reviewText = contentReview
      ? mergeReviews(contentReview, technicalReview)
      : technicalReview;
    fs.writeFileSync(path.join(artifacts.dir, 'review.txt'), reviewText, 'utf8');

    // extractAll() iterates audit-pipeline/published-audits.json — entries
    // not in the manifest get skipped silently and audit-data.json never
    // lands, which makes publishSite a no-op. Mirror the AgentMail flow:
    // register the artifact in the manifest BEFORE publishSite runs.
    updatePublishedManifest({
      messageId: msg.messageId,
      subject: msg.subject,
      artifactDir: artifacts.dir,
      slug: artifacts.slug,
      persona: personaSlug,
    });

    let published = false;
    try {
      await publishSite({
        slug: artifacts.slug,
        persona: personaSlug,
        artifactDir: artifacts.dir,
        // The Cloudflare-fed path threads message_id + raw_key through so
        // experience.message_id / .raw_key carry the same identifiers as
        // the source email_message row, eliminating the historic
        // duplicate-data problem (the two tables stored the same email
        // with no FK linking them).
        messageId: row.message_id || null,
        rawKey: row.raw_key || null,
      });
      published = true;
    } catch (err) {
      log('site publish failed (non-fatal)', {
        id,
        error: String(err).slice(0, 500),
      });
    }

    if (published) {
      try {
        const auditDataPath = path.join(artifacts.dir, 'audit-data.json');
        if (fs.existsSync(auditDataPath)) {
          const data = JSON.parse(fs.readFileSync(auditDataPath, 'utf8'));
          await generateAndPublishAudio({
            slug: artifacts.slug,
            persona: personaSlug,
            sections: data.review?.sections ?? {},
            email: data.email ?? {},
            artifactDir: artifacts.dir,
          });
        }
      } catch (err) {
        log('audio generation failed (non-fatal)', {
          id,
          persona: personaSlug,
          error: String(err).slice(0, 500),
        });
      }

      try {
        await fanoutIndustryAudits({
          brandPersonaSlug: personaSlug,
          brandAuditSlug: artifacts.slug,
          fullMessage: msg,
          qaReport,
          rendered,
          technicalReview,
          artifactDir: artifacts.dir,
          messageId: row.message_id || null,
        });
      } catch (err) {
        log('industry fanout failed (non-fatal)', {
          id,
          persona: personaSlug,
          error: String(err).slice(0, 500),
        });
      }
    }

    const { markEmailMessageProcessed } = await import(
      '../audit-pipeline/email-message-queue.mjs'
    );
    await markEmailMessageProcessed(id, artifacts.slug);
    log('email_message completed', {
      id,
      persona: personaSlug,
      slug: artifacts.slug,
      rendered: !!rendered,
      published,
    });
  } catch (err) {
    // Leave processed_at NULL so the next poll retries. Verbose-log for
    // ops visibility; persistent failures will scream every poll cycle.
    log('email_message failed', {
      id,
      persona: personaSlug,
      error: String(err).slice(0, 500),
    });
  }
}

async function pollCloudflareEmails() {
  try {
    const { loadUnprocessedEmailMessages } = await import(
      '../audit-pipeline/email-message-queue.mjs'
    );
    const rows = await loadUnprocessedEmailMessages(20);
    if (rows.length === 0) return;
    log('cloudflare poll', { unprocessed: rows.length });
    for (const r of rows) {
      await processCloudflareEmail(r);
    }
  } catch (err) {
    log('cloudflare poll failed', { error: String(err).slice(0, 500) });
  }
}

async function pollInbox(client, state, inboxId, persona, reason = 'poll') {
  const inboxState = inboxStateFor(state, inboxId);
  // Startup: paginate all messages to catch anything missed during downtime
  // Interval: only fetch messages newer than last success
  const messages = reason === 'startup'
    ? await fetchAllMessages(client, inboxId, inboxState)
    : await fetchNewMessages(client, inboxId, inboxState.lastSuccessAt);
  const ordered = [...messages].sort((a, b) => new Date(a.created_at || a.timestamp || 0) - new Date(b.created_at || b.timestamp || 0));
  for (const msg of ordered) {
    await processMessage(client, state, inboxId, persona, msg, reason);
  }
  inboxState.lastPollAt = new Date().toISOString();
  saveState(state);
  log('poll complete', { inbox: inboxId, persona, reason, scanned: ordered.length, lastPollAt: inboxState.lastPollAt });
}

async function pollOnce(client, state, reason = 'poll') {
  for (const { inbox, persona } of INBOXES) {
    try {
      await pollInbox(client, state, inbox, persona, reason);
    } catch (err) {
      log('inbox poll failed', { inbox, persona, reason, error: String(err), stack: err?.stack });
    }
  }
  // Cloudflare-routed personas (@etell.app) — drains email_message table.
  // Runs after AgentMail in case a single poll has work in both ingress
  // paths; sequential keeps Claude review concurrency bounded.
  await pollCloudflareEmails();

  // Mirror any new chat_reflection / persona_synthesis rows to the
  // persona vault. Vercel crons write the DB rows; the daemon owns the
  // vault file write because Vercel functions can't commit to git.
  // Best-effort — vault sync failures don't block the next poll.
  const repoRoot = path.dirname(__dirname);
  try {
    const r = await mirrorReflectionsToVault(repoRoot);
    if (r.processed > 0) {
      log('reflections mirrored to vault', { count: r.written.length, total: r.processed });
    }
  } catch (err) {
    log('reflections mirror failed (non-fatal)', { error: String(err).slice(0, 300) });
  }
  try {
    const r = await mirrorSynthesesToVault(repoRoot);
    if (r.processed > 0) {
      log('syntheses mirrored to vault', { count: r.written.length, total: r.processed });
    }
  } catch (err) {
    log('syntheses mirror failed (non-fatal)', { error: String(err).slice(0, 300) });
  }
}

async function main() {
  const client = new AgentMailClient({ apiKey: API_KEY });
  const state = loadState();
  let pollTimer = null;
  let pollInFlight = false;

  const safePoll = async (reason) => {
    if (pollInFlight) {
      log('poll skipped; already running', { reason });
      return;
    }
    pollInFlight = true;
    try {
      await pollOnce(client, state, reason);
    } catch (err) {
      log('poll error', { error: String(err), stack: err?.stack, reason });
    } finally {
      pollInFlight = false;
    }
  };

  // Clear stale in-flight messages from previous run — per inbox
  let cleared = 0;
  for (const { inbox } of INBOXES) {
    const s = inboxStateFor(state, inbox);
    if (s.inFlightMessageIds.length > 0) {
      cleared += s.inFlightMessageIds.length;
      s.inFlightMessageIds = [];
    }
  }
  if (cleared > 0) {
    log('cleared stale in-flight messages from previous run', { count: cleared });
    saveState(state);
  }

  log('monitor mode', { mode: 'polling', intervalMs: POLL_INTERVAL_MS, inboxes: INBOXES.map((i) => i.inbox) });
  await safePoll('startup');

  pollTimer = setInterval(() => {
    safePoll('interval');
  }, POLL_INTERVAL_MS);

  const shutdown = () => {
    if (pollTimer) clearInterval(pollTimer);
    process.exit(0);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

main().catch((err) => {
  log('fatal', { error: String(err), stack: err?.stack });
  process.exit(1);
});
