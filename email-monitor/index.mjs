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
  const args = [
    'message', 'send',
    '--channel', 'telegram',
    '--target', TELEGRAM_TARGET,
    '--message', text,
  ];
  const { stdout, stderr } = await openclawExec(args, 1024 * 1024 * 5);
  if (stdout?.trim()) log('telegram send stdout', { stdout: stdout.trim().slice(0, 1000) });
  if (stderr?.trim()) log('telegram send stderr', { stderr: stderr.trim().slice(0, 1000) });
}

async function generateReview(message) {
  const args = [
    '-p',
    '--model', CLAUDE_MODEL,
    '--effort', CLAUDE_EFFORT,
    '--no-session-persistence',
    message,
  ];
  try {
    const claudeBin = process.env.CLAUDE_BIN || '/Users/alontsang/.local/bin/claude';
    const { stdout, stderr } = await execFileAsync(claudeBin, args, {
      cwd: path.dirname(__dirname),
      maxBuffer: 1024 * 1024 * 20,
      env: { ...process.env },
    });
    if (stderr?.trim()) log('claude stderr', { stderr: stderr.trim().slice(0, 1000) });
    const review = stdout.trim();
    if (!review) throw new Error('claude returned empty review');
    return review;
  } catch (err) {
    log('claude review failed', { error: String(err), stdout: err.stdout?.slice?.(0, 1000), stderr: err.stderr?.slice?.(0, 1000) });
    await sendTelegramText(`Walker email monitor caught a new message but review generation failed.\n\nFrom: ${message.match(/From: (.*)/)?.[1] || ''}\nSubject: ${message.match(/Subject: (.*)/)?.[1] || ''}`);
    throw err;
  }
}

function buildPromptFromMessage(msg, qaContext = '') {
  const from = msg.from_ || msg.from || '';
  const subject = msg.subject || '(no subject)';
  const preview = msg.preview || '';
  const text = msg.extracted_text || msg.text || '';
  const html = msg.extracted_html || msg.html || '';
  const body = shorten(text || html || preview, 6000);
  const parts = [
    'A new Skechers email arrived for review.',
    'Review it as Walker using the established format and preferences in this session.',
    'Important: this audit must be comprehensive, not overly narrow. Cover the whole email structure, not just one issue.',
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
    '   - Email-to-site continuity',
    '   - Bugs / friction / clarity issues',
    '',
    'Style requirements:',
    '- Medium length',
    '- Executive summary first, evidence after',
    '- Direct and objective',
    '- Opinionated with substance',
    '- Recommendations over root-cause theory',
    '- Cover the visible structure of the email, including what major modules are present and whether they help or dilute the experience',
    '- If this is clearly not a Skechers marketing/experience email, say so directly and briefly',
    '',
    `Inbox: ${INBOX_ID}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    preview ? `Preview: ${shorten(preview, 500)}` : '',
    '',
    'Body:',
    body || '(no body available)',
  ];
  if (qaContext) {
    parts.push('', qaContext);
  }
  return parts.filter(Boolean).join('\n');
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
  if (!artifacts.webview || !fs.existsSync(RENDER_SWIFT)) return null;
  const out = path.join(artifacts.dir, 'email-webview-render.png');
  await execFileAsync('swift', [RENDER_SWIFT, artifacts.webview, out], { maxBuffer: 1024 * 1024 * 20 });
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
  await execFileAsync('python3', [SITE_GENERATOR], { cwd: path.dirname(__dirname), maxBuffer: 1024 * 1024 * 20 });
  const ghToken = process.env.GH_TOKEN || '';
  if (!ghToken) throw new Error('Missing GH_TOKEN for git publish');
  const tmpRepo = '/tmp/email-audit';
  const cmd = `set -e
cd ${tmpRepo}
git pull --ff-only
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
rsync -a --exclude=generate_site.py --exclude=published-audits.json ${SITE_DIR}/ ${tmpRepo}/
git add .
if git diff --cached --quiet; then echo NO_CHANGES; exit 0; fi
git commit -m "Publish latest Skechers email audit"
git push origin HEAD:main`;
  await execFileAsync('/bin/zsh', ['-lc', cmd], { maxBuffer: 1024 * 1024 * 50, env: { ...process.env, GH_TOKEN: ghToken } });
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
    const qaReport = await runQaChecks(artifacts);
    const qaContext = buildQaSummaryForPrompt(qaReport);
    const reviewText = await generateReview(buildPromptFromMessage(fullMessage, qaContext));
    await sendTelegramText(reviewText);
    const rendered = await renderWebview(artifacts);
    const qaReportPath = path.join(artifacts.dir, 'qa-report.json');
    const pdfPath = await generatePdf(artifacts, reviewText || buildPromptFromMessage(fullMessage), qaReportPath);
    updatePublishedManifest({
      messageId: id,
      subject: fullMessage.subject,
      artifactDir: artifacts.dir,
      pdfPath,
      slug: artifacts.slug,
    });
    await publishSite();
    await sendPdf(pdfPath, path.basename(pdfPath), `Automated one-pager PDF for: ${fullMessage.subject}`);
    markSeen(state, id);
    log('message completed', { id, source, pdfPath, rendered: !!rendered, published: true });
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
