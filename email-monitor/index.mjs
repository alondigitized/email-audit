import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';
import { execFile } from 'child_process';
import { promisify } from 'util';
import dotenv from 'dotenv';
import { AgentMailClient } from 'agentmail';

const execFileAsync = promisify(execFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const API_KEY = process.env.AGENTMAIL_API_KEY;
const INBOX_ID = process.env.INBOX_ID || 'walker@agentmail.to';
const TELEGRAM_TARGET = process.env.TELEGRAM_TARGET;
const OPENCLAW_AGENT_ID = process.env.OPENCLAW_AGENT_ID || 'main';
const OPENCLAW_PROFILE = process.env.OPENCLAW_PROFILE || 'walker';
const OPENCLAW_CONFIG_PATH = process.env.OPENCLAW_CONFIG_PATH || '/Users/alontsang/.openclaw-walker/openclaw.json';
const OPENCLAW_STATE_DIR = process.env.OPENCLAW_STATE_DIR || '/Users/alontsang/.openclaw-walker';
const SITE_BASE_URL = process.env.SITE_BASE_URL || 'https://email-audit-git-main-alons-projects-c876f5a6.vercel.app';
const POLL_INTERVAL_MS = Number(process.env.POLL_INTERVAL_MS || 15000);
const STARTUP_LOOKBACK = Number(process.env.STARTUP_LOOKBACK || 10);
const STATE_PATH = path.join(__dirname, 'state.json');
const LOG_DIR = path.join(__dirname, 'logs');
const LOG_PATH = path.join(LOG_DIR, 'monitor.log');
const REPORTS_DIR = path.join(path.dirname(__dirname), 'reports');
const SITE_DIR = path.join(path.dirname(__dirname), 'email-audit');
const SITE_MANIFEST = path.join(SITE_DIR, 'published-audits.json');
const SITE_GENERATOR = path.join(SITE_DIR, 'generate_site.py');
const ARTIFACTS_DIR = path.join(REPORTS_DIR, 'email-artifacts');
const RENDER_SWIFT = path.join(path.dirname(__dirname), 'scripts', 'render_web_url.swift');
const PDF_SCRIPT = path.join(__dirname, 'generate_review_pdf.py');
const QA_SCRIPT = path.join(__dirname, 'qa_checks.py');
const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'sonnet';
const CLAUDE_EFFORT = process.env.CLAUDE_EFFORT || 'high';

if (!API_KEY) throw new Error('Missing AGENTMAIL_API_KEY');
if (!TELEGRAM_TARGET) throw new Error('Missing TELEGRAM_TARGET');

fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message, extra) {
  const line = `[${new Date().toISOString()}] ${message}${extra ? ` ${JSON.stringify(extra)}` : ''}`;
  console.log(line);
  fs.appendFileSync(LOG_PATH, line + '\n');
}

function loadState() {
  try {
    const parsed = JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
    return {
      processedMessageIds: Array.isArray(parsed.processedMessageIds) ? parsed.processedMessageIds : [],
      inFlightMessageIds: Array.isArray(parsed.inFlightMessageIds) ? parsed.inFlightMessageIds : [],
      failedMessageIds: Array.isArray(parsed.failedMessageIds) ? parsed.failedMessageIds : [],
      lastPollAt: parsed.lastPollAt || null,
    };
  } catch {
    return { processedMessageIds: [], inFlightMessageIds: [], failedMessageIds: [], lastPollAt: null };
  }
}

function saveState(state) {
  const trimmed = {
    processedMessageIds: Array.from(new Set(state.processedMessageIds)).slice(-1000),
    inFlightMessageIds: Array.from(new Set(state.inFlightMessageIds || [])).slice(-1000),
    failedMessageIds: Array.from(new Set(state.failedMessageIds || [])).slice(-1000),
    lastPollAt: state.lastPollAt || null,
  };
  fs.writeFileSync(STATE_PATH, JSON.stringify(trimmed, null, 2));
}

function seen(state, id) {
  return state.processedMessageIds.includes(id);
}

function failed(state, id) {
  return (state.failedMessageIds || []).includes(id);
}

function markFailed(state, id) {
  state.failedMessageIds = [...(state.failedMessageIds || []), id];
  state.inFlightMessageIds = (state.inFlightMessageIds || []).filter((x) => x !== id);
  saveState(state);
}

function markSeen(state, id) {
  if (!seen(state, id)) {
    state.processedMessageIds.push(id);
    state.inFlightMessageIds = (state.inFlightMessageIds || []).filter((x) => x !== id);
    saveState(state);
  }
}

function inFlight(state, id) {
  return (state.inFlightMessageIds || []).includes(id);
}

function markInFlight(state, id) {
  if (!inFlight(state, id)) {
    state.inFlightMessageIds = [...(state.inFlightMessageIds || []), id];
    saveState(state);
  }
}

function clearInFlight(state, id) {
  state.inFlightMessageIds = (state.inFlightMessageIds || []).filter((x) => x !== id);
  saveState(state);
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

async function sendPdf(pathToPdf, filename, caption) {
  const args = [
    'message', 'send',
    '--channel', 'telegram',
    '--target', TELEGRAM_TARGET,
    '--message', caption,
    '--media', pathToPdf,
  ];
  const { stdout, stderr } = await openclawExec(args, 1024 * 1024 * 10);
  if (stdout?.trim()) log('pdf send stdout', { stdout: stdout.trim().slice(0, 1000) });
  if (stderr?.trim()) log('pdf send stderr', { stderr: stderr.trim().slice(0, 1000) });
}

function openclawExec(commandArgs, maxBuffer = 1024 * 1024 * 10) {
  return execFileAsync('openclaw', ['--profile', OPENCLAW_PROFILE, ...commandArgs], {
    maxBuffer,
    env: {
      ...process.env,
      OPENCLAW_PROFILE,
      OPENCLAW_CONFIG_PATH,
      OPENCLAW_STATE_DIR,
    },
  });
}

async function sendTelegramText(text) {
  const MAX_LEN = 4000;
  const chunks = [];
  let remaining = text;
  while (remaining.length > 0) {
    if (remaining.length <= MAX_LEN) {
      chunks.push(remaining);
      break;
    }
    let cut = remaining.lastIndexOf('\n', MAX_LEN);
    if (cut < MAX_LEN * 0.5) cut = MAX_LEN;
    chunks.push(remaining.slice(0, cut));
    remaining = remaining.slice(cut).replace(/^\n+/, '');
  }
  for (const chunk of chunks) {
    const args = [
      'message', 'send',
      '--channel', 'telegram',
      '--target', TELEGRAM_TARGET,
      '--message', chunk,
    ];
    const { stdout, stderr } = await openclawExec(args, 1024 * 1024 * 5);
    if (stdout?.trim()) log('telegram send stdout', { stdout: stdout.trim().slice(0, 1000) });
    if (stderr?.trim()) log('telegram send stderr', { stderr: stderr.trim().slice(0, 1000) });
  }
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

function buildContentPrompt(msg, screenshotPath) {
  const from = msg.from_ || msg.from || '';
  const subject = msg.subject || '(no subject)';
  const preview = msg.preview || '';
  const parts = [
    'You are reviewing a marketing email as it appears to the recipient.',
    'The attached image is a screenshot of the fully rendered email exactly as it would appear in an inbox.',
    'Base your entire review on what you SEE in the rendered image — not on HTML source code.',
    '',
    'Use this exact review structure:',
    '1. Executive Summary',
    '2. Business Impact Score (1-10)',
    "3. What's Working",
    "4. What's Weak",
    '5. Recommendations',
    '6. Bottom Line',
    '7. Evidence',
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
    '- Direct and objective',
    '- Opinionated with substance',
    '- Recommendations over root-cause theory',
    '- Cover the visible structure of the email, including what major modules are present and whether they help or dilute the experience',
    '- Only flag visual bugs you can actually see in the screenshot (broken images, overlapping text, empty fields, etc.)',
    '- Do NOT speculate about HTML issues, merge tokens, or code-level problems you cannot see',
    '',
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
  return { dir, slug, webview };
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

async function generatePdf(artifacts, reviewText, qaReportPath) {
  const reviewPath = path.join(artifacts.dir, 'review.txt');
  fs.writeFileSync(reviewPath, reviewText, 'utf8');
  const outPdf = path.join(REPORTS_DIR, `${artifacts.slug}-review.pdf`);
  const args = [PDF_SCRIPT, reviewPath, artifacts.dir, outPdf];
  if (qaReportPath && fs.existsSync(qaReportPath)) {
    args.push('--qa-report', qaReportPath);
  }
  await execFileAsync('python3', args, { maxBuffer: 1024 * 1024 * 20 });
  return outPdf;
}

function updatePublishedManifest(entry) {
  const existing = fs.existsSync(SITE_MANIFEST) ? JSON.parse(fs.readFileSync(SITE_MANIFEST, 'utf8')) : [];
  const filtered = existing.filter((x) => x.messageId !== entry.messageId);
  filtered.push(entry);
  fs.writeFileSync(SITE_MANIFEST, JSON.stringify(filtered, null, 2));
}

async function publishSite() {
  // Phase 1: Run legacy generator (produces audit-data.json + gh-pages site)
  await execFileAsync('python3', [SITE_GENERATOR], { cwd: path.dirname(__dirname), maxBuffer: 1024 * 1024 * 20 });

  // Phase 2: Sync content to Next.js site directory for Vercel deploy
  const repoRoot = path.dirname(__dirname);
  const siteContent = path.join(repoRoot, 'site', 'content', 'audits');
  const siteImages = path.join(repoRoot, 'site', 'public', 'images', 'audits');
  const sitePdfs = path.join(repoRoot, 'site', 'public', 'pdfs');
  const manifest = JSON.parse(fs.readFileSync(SITE_MANIFEST, 'utf8'));

  for (const entry of manifest) {
    const slug = entry.slug;
    const artifactDir = entry.artifactDir;
    if (!artifactDir || !fs.existsSync(artifactDir)) continue;

    // Copy audit.json
    const srcAudit = path.join(artifactDir, 'audit-data.json');
    if (fs.existsSync(srcAudit)) {
      const destDir = path.join(siteContent, slug);
      fs.mkdirSync(destDir, { recursive: true });
      fs.copyFileSync(srcAudit, path.join(destDir, 'audit.json'));
    }

    // Copy render.png
    const srcPng = path.join(artifactDir, 'email-webview-render.png');
    if (fs.existsSync(srcPng)) {
      const destImgDir = path.join(siteImages, slug);
      fs.mkdirSync(destImgDir, { recursive: true });
      fs.copyFileSync(srcPng, path.join(destImgDir, 'render.png'));
    }

    // Copy PDF
    if (entry.pdfPath && fs.existsSync(entry.pdfPath)) {
      fs.mkdirSync(sitePdfs, { recursive: true });
      fs.copyFileSync(entry.pdfPath, path.join(sitePdfs, `${slug}-review.pdf`));
    }
  }

  // Build index.json for the Next.js site
  const indexEntries = manifest
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
        has_image: fs.existsSync(path.join(siteImages, entry.slug, 'render.png')),
        type: ad.type || 'email',
        persona: ad.persona || null,
      };
    })
    .filter(Boolean)
    .sort((a, b) => (b.timestamp_iso || '').localeCompare(a.timestamp_iso || ''));
  fs.writeFileSync(path.join(siteContent, 'index.json'), JSON.stringify(indexEntries, null, 2));

  // Phase 3: Git push (triggers both gh-pages legacy + Vercel deploy on main)
  const ghToken = process.env.GH_TOKEN || '';
  if (!ghToken) throw new Error('Missing GH_TOKEN for git publish');

  // Push site/ content to main (triggers Vercel)
  const pushMain = `cd "${repoRoot}" && git add site/content site/public/images/audits site/public/pdfs && git diff --cached --quiet && echo NO_CHANGES || (git commit -m "Update audit content" && git push origin main)`;
  await execFileAsync('/bin/zsh', ['-lc', pushMain], { maxBuffer: 1024 * 1024 * 50, env: { ...process.env, GH_TOKEN: ghToken } });

  // Legacy gh-pages publish
  const tmpRepo = '/tmp/email-audit';
  const repoUrl = `https://x-access-token:${ghToken}@github.com/alondigitized/email-audit.git`;
  const pushGhPages = `set -e
if [ ! -d ${tmpRepo}/.git ]; then
  git clone --branch gh-pages ${repoUrl} ${tmpRepo} 2>/dev/null || {
    git clone ${repoUrl} ${tmpRepo}
    cd ${tmpRepo}
    git checkout --orphan gh-pages
    git rm -rf . 2>/dev/null || true
    git commit --allow-empty -m "Initialize gh-pages"
    git push origin gh-pages
  }
fi
cd ${tmpRepo}
git checkout gh-pages
git pull origin gh-pages --ff-only 2>/dev/null || true
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
rsync -a --exclude=generate_site.py --exclude=published-audits.json ${SITE_DIR}/ ${tmpRepo}/
git add .
if git diff --cached --quiet; then echo NO_CHANGES; exit 0; fi
git commit -m "Publish latest Skechers email audit"
git push origin gh-pages`;
  await execFileAsync('/bin/zsh', ['-lc', pushGhPages], { maxBuffer: 1024 * 1024 * 50, env: { ...process.env, GH_TOKEN: ghToken } });
}

async function fetchMessages(client, limit = STARTUP_LOOKBACK) {
  const response = await client.inboxes.messages.list(INBOX_ID, { limit });
  return response.messages || [];
}

async function fetchMessage(client, messageId) {
  return client.inboxes.messages.get(INBOX_ID, messageId);
}

async function processMessage(client, state, message, source = 'unknown') {
  const id = message.messageId || message.message_id;
  if (!id) {
    log('skipping message without id', { source });
    return;
  }
  if (seen(state, id)) {
    log('duplicate skipped', { id, source });
    return;
  }
  if (failed(state, id)) {
    log('failed previously; skipping automatic retry', { id, source });
    return;
  }
  if (inFlight(state, id)) {
    log('already in flight; skipping duplicate work', { id, source });
    return;
  }

  markInFlight(state, id);

  try {
    let fullMessage = message;
    try {
      fullMessage = await fetchMessage(client, id);
    } catch (err) {
      log('failed to hydrate full message; using event/list payload', { id, source, error: String(err) });
    }

    log('processing message', {
      id,
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
      // Both agents run concurrently: content reviews the screenshot, technical reviews HTML
      [contentReview, technicalReview] = await Promise.all([
        generateReview(buildContentPrompt(fullMessage, rendered), { images: [rendered], label: 'content-review' }),
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
      pdfPath: '',
      slug: artifacts.slug,
    });
    let published = false;
    try {
      await publishSite();
      published = true;
    } catch (err) {
      log('site publish failed (non-fatal)', { id, error: String(err).slice(0, 500) });
    }

    // Send Telegram notification with link to detail page
    const detailUrl = `${SITE_BASE_URL}/audits/${artifacts.slug}`;
    try {
      await sendTelegramText(`New review: ${fullMessage.subject}\n${detailUrl}`);
    } catch (err) {
      log('telegram notification failed (non-fatal)', { id, error: String(err).slice(0, 500) });
    }
    markSeen(state, id);
    log('message completed', { id, source, slug: artifacts.slug, rendered: !!rendered, published });
  } catch (err) {
    markFailed(state, id);
    log('message failed; marked failed and will not auto-retry', { id, source, error: String(err) });
    throw err;
  }
}

async function pollOnce(client, state, reason = 'poll') {
  const messages = await fetchMessages(client, STARTUP_LOOKBACK);
  const ordered = [...messages].sort((a, b) => new Date(a.created_at || a.timestamp || 0) - new Date(b.created_at || b.timestamp || 0));
  for (const msg of ordered) {
    await processMessage(client, state, msg, reason);
  }
  state.lastPollAt = new Date().toISOString();
  saveState(state);
  log('poll complete', { reason, scanned: ordered.length, lastPollAt: state.lastPollAt });
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

  log('monitor mode', { mode: 'polling', intervalMs: POLL_INTERVAL_MS, inbox: INBOX_ID });
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
