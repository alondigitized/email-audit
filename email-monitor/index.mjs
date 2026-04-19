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
import { upsertAuditRow, dbConfigured } from '../audit-pipeline/publish.mjs';

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

// Multi-inbox config. Prefer inboxes.json (array of { inbox, persona }).
// Fall back to legacy INBOX_ID env var for single-inbox deployments.
function loadInboxes() {
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
const INBOXES = loadInboxes();
const REPORTS_DIR = path.join(path.dirname(__dirname), 'reports');
const PIPELINE_DIR = path.join(path.dirname(__dirname), 'audit-pipeline');
const SITE_MANIFEST = path.join(PIPELINE_DIR, 'published-audits.json');
const EXTRACT_SCRIPT = path.join(PIPELINE_DIR, 'extract_audit_data.py');
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

function dateSlug(iso) {
  return String(iso || new Date().toISOString()).slice(0, 10);
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
function loadPersona(slug) {
  if (!slug) return null;
  if (PERSONA_CACHE.has(slug)) return PERSONA_CACHE.get(slug);
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
  } catch {
    PERSONA_CACHE.set(slug, null);
    return null;
  }
}

function buildContentPrompt(msg, screenshotPath, persona = null) {
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

  const parts = [
    ...personaPreamble,
    'Use this exact review structure:',
    '1. Executive Summary',
    '2. Business Impact Score (1-10)',
    "3. What's Working",
    "4. What's Weak",
    '5. Recommendations',
    '6. Bottom Line',
    '7. Subject Line Analysis',
    '   Format this section as a compact, structured block so it can be aggregated across many emails. Use exactly this layout:',
    '   - **Subject:** `<verbatim subject line>`',
    '   - **Length:** <char count>',
    '   - **Scores (1-10):** Clarity `X`, Curiosity `X`, Personalization `X`, Urgency `X`, Specificity `X`',
    '   - **Strengths:** one or two short bullets',
    '   - **Weaknesses:** one or two short bullets',
    '   - **Alt A:** `<alternative phrasing for A/B test>`',
    '   - **Alt B:** `<alternative phrasing for A/B test>`',
    '   Be honest about the scores — most subject lines are 4-7, not 9-10. Reserve high scores for genuinely excellent lines.',
    '8. Evidence',
    '   - Overall purpose of the email',
    '   - Hero / primary value proposition',
    '   - Membership / benefits section',
    '   - Product discoverability / recommendation modules',
    '   - Utility / secondary modules',
    '   - Bugs / friction / clarity issues (only what is VISIBLE in the render)',
    '',
    'Style requirements:',
    '- Medium length',
    '- Executive summary first, evidence after',
    persona
      ? '- Write in first person ("I", "me") — this is YOUR reaction'
      : '- Direct and objective',
    persona
      ? '- Your voice should match your persona\'s age, generation, and shopping habits — a 34-year-old mom does not sound like a 62-year-old retiree'
      : '- Opinionated with substance',
    '- Recommendations over root-cause theory',
    '- Cover the visible structure of the email, including what major modules are present and whether they help or dilute the experience',
    '- Only flag visual bugs you can actually see in the screenshot (broken images, overlapping text, empty fields, etc.)',
    '- Do NOT speculate about HTML issues, merge tokens, or code-level problems you cannot see',
    ...personaLens,
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
  fs.writeFileSync(path.join(dir, 'message.html'), msg.html || msg.extracted_html || '', 'utf8');
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

function buildIndexEntriesFromManifest(manifest, siteContent, siteImages) {
  return manifest
    .map((entry) => {
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
        has_image:
          !!ad.assets?.render_image_key ||
          fs.existsSync(path.join(siteImages, entry.slug, 'render.png')),
        type: ad.type || 'email',
        persona: ad.persona || entry.persona || null,
      };
    })
    .filter(Boolean)
    .sort((a, b) => (b.timestamp_iso || '').localeCompare(a.timestamp_iso || ''));
}

async function publishSite() {
  // Phase 1: Extract audit-data.json from raw artifacts
  await execFileAsync('python3', [EXTRACT_SCRIPT], { cwd: path.dirname(__dirname), maxBuffer: 1024 * 1024 * 20 });

  // Phase 2: Sync content to Next.js site directory for Vercel deploy
  const repoRoot = path.dirname(__dirname);
  const siteContent = path.join(repoRoot, 'site', 'content', 'audits');
  const siteImages = path.join(repoRoot, 'site', 'public', 'images', 'audits');
  const manifest = JSON.parse(fs.readFileSync(SITE_MANIFEST, 'utf8'));

  for (const entry of manifest) {
    const slug = entry.slug;
    const artifactDir = entry.artifactDir;
    if (!artifactDir || !fs.existsSync(artifactDir)) continue;

    // Upload render.png to R2 first so we can embed the key in audit.json.
    // Falls through gracefully when R2 isn't configured (local dev without
    // keys) — site still renders via the legacy /images/audits/ path.
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
        console.warn(`R2 upload failed for ${slug}/render.png:`, err.message);
      }
    }

    // Copy audit.json — after injecting the render_image_key so the file we
    // publish reflects where the image actually lives.
    const srcAudit = path.join(artifactDir, 'audit-data.json');
    if (fs.existsSync(srcAudit)) {
      const destDir = path.join(siteContent, slug);
      fs.mkdirSync(destDir, { recursive: true });
      const data = JSON.parse(fs.readFileSync(srcAudit, 'utf8'));
      if (renderKey) {
        data.assets = data.assets ?? {};
        data.assets.render_image_key = renderKey;
      }
      // Historic site-journey audits have R2 keys only in the dest audit.json
      // (backfilled once). Their artifact audit-data.json predates the R2
      // schema, so without this merge every publishSite pass would strip
      // the keys again.
      const destPath = path.join(destDir, 'audit.json');
      if (fs.existsSync(destPath)) {
        try {
          const existing = JSON.parse(fs.readFileSync(destPath, 'utf8'));
          data.assets = data.assets ?? {};
          if (!data.assets.render_image_key && existing.assets?.render_image_key) {
            data.assets.render_image_key = existing.assets.render_image_key;
          }
          if (
            Array.isArray(existing.assets?.journey_steps) &&
            Array.isArray(data.assets.journey_steps)
          ) {
            const prevByStep = new Map(
              existing.assets.journey_steps.map((s) => [s.step, s]),
            );
            for (const step of data.assets.journey_steps) {
              const prev = prevByStep.get(step.step);
              if (!prev) continue;
              if (!step.viewport_screenshot_key && prev.viewport_screenshot_key) {
                step.viewport_screenshot_key = prev.viewport_screenshot_key;
              }
              if (!step.fullpage_screenshot_key && prev.fullpage_screenshot_key) {
                step.fullpage_screenshot_key = prev.fullpage_screenshot_key;
              }
            }
          }
        } catch {
          /* ignore merge errors — fall through to plain write */
        }
      }
      // Validate before writing. Producer-side parse throws on shape
      // drift — better to fail one audit loudly than ship a malformed
      // record that the site silently drops downstream.
      try {
        auditDataSchema.parse(data);
      } catch (err) {
        log('audit.json schema drift — skipping publish', {
          slug,
          issues: (err?.issues || []).slice(0, 5),
        });
        continue;
      }
      fs.writeFileSync(destPath, JSON.stringify(data, null, 2));
      // Also write the updated shape back to the artifact so rerun-audit works
      // and subsequent publishSite passes don't need to re-merge.
      fs.writeFileSync(srcAudit, JSON.stringify(data, null, 2));

      // Dual-write to Postgres (Phase 2 of the foundation refactor). The
      // filesystem copy above is still the consumer-facing source of truth
      // until Phase 3 flips the site. DB upsert is non-fatal here — if it
      // fails (no creds, network blip), the filesystem write is still good.
      if (dbConfigured()) {
        try {
          await upsertAuditRow({ slug, data });
        } catch (err) {
          log('db upsert failed (non-fatal dual-write)', {
            slug,
            error: String(err).slice(0, 300),
          });
        }
      }
    }
  }

  // Build index.json for the Next.js site
  const indexEntries = buildIndexEntriesFromManifest(manifest, siteContent, siteImages);
  fs.writeFileSync(path.join(siteContent, 'index.json'), JSON.stringify(indexEntries, null, 2));

  // Phase 2b: Write each audit's markdown note into the persona brain vault.
  // Wraps in try/catch because vault writes must never block the site publish —
  // the user-facing product is the Vercel site, the vault is a back-office artifact.
  for (const entry of manifest) {
    const auditPath = path.join(siteContent, entry.slug, 'audit.json');
    if (!fs.existsSync(auditPath)) continue;
    const persona = entry.persona;
    if (!persona) continue;
    try {
      const auditData = JSON.parse(fs.readFileSync(auditPath, 'utf8'));
      writeVaultNote({
        auditData,
        personaSlug: persona,
        repoRoot,
        siteIndex: indexEntries,
      });
    } catch (err) {
      console.warn(`vault write failed for ${entry.slug}:`, err.message);
    }
  }

  // Phase 3: Git push to main (triggers Vercel deploy)
  const ghToken = process.env.GH_TOKEN || '';
  if (!ghToken) throw new Error('Missing GH_TOKEN for git publish');

  // Images no longer published via git — they live in R2 now. Only text
  // content (audit.json, manifest, vaults) needs to be committed.
  const pushMain = `cd "${repoRoot}" && git pull --rebase origin main 2>/dev/null; git add site/content site/public/pdfs audit-pipeline/published-audits.json vaults && git diff --cached --quiet && echo NO_CHANGES || (git commit -m "Update audit content" && git push origin main)`;
  await execFileAsync('/bin/zsh', ['-lc', pushMain], { maxBuffer: 1024 * 1024 * 50, env: { ...process.env, GH_TOKEN: ghToken } });
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

    const artifacts = await saveArtifacts(fullMessage);

    // Step 1: Render screenshot + run QA checks in parallel (both needed before reviews)
    const [rendered, qaReport] = await Promise.all([
      renderWebview(artifacts),
      runQaChecks(artifacts),
    ]);
    const qaContext = buildQaSummaryForPrompt(qaReport);

    // Step 2: Run content + technical reviews in parallel
    let contentReview, technicalReview;
    if (rendered) {
      // Both agents run concurrently: content reviews the screenshot, technical reviews HTML.
      // Content review gets the persona identity so the voice matches the inbox's owner.
      const personaIdentity = loadPersona(persona);
      [contentReview, technicalReview] = await Promise.all([
        generateReview(buildContentPrompt(fullMessage, rendered, personaIdentity), { images: [rendered], label: 'content-review' }),
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
      await publishSite();
      published = true;
    } catch (err) {
      log('site publish failed (non-fatal)', { id, inbox: inboxId, error: String(err).slice(0, 500) });
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
