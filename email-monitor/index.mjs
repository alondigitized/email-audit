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
const RENDER_SWIFT = path.join(REPORTS_DIR, 'email-artifacts', 'render_web_url.swift');
const PDF_SCRIPT = path.join(__dirname, 'generate_review_pdf.py');
const CODEX_MODEL = process.env.CODEX_MODEL || 'gpt-5-codex';
const CODEX_REASONING = process.env.CODEX_REASONING || 'high';

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
  const outputPath = path.join(__dirname, 'tmp-review.txt');
  const args = [
    'exec',
    '-m', CODEX_MODEL,
    '-c', `model_reasoning_effort=\"${CODEX_REASONING}\"`,
    '--skip-git-repo-check',
    '--output-last-message', outputPath,
    message,
  ];
  try {
    const { stdout, stderr } = await execFileAsync('codex', args, {
      cwd: path.dirname(__dirname),
      maxBuffer: 1024 * 1024 * 20,
      env: { ...process.env },
    });
    if (stdout?.trim()) log('codex stdout', { stdout: stdout.trim().slice(0, 1000) });
    if (stderr?.trim()) log('codex stderr', { stderr: stderr.trim().slice(0, 1000) });
    const review = fs.readFileSync(outputPath, 'utf8').trim();
    return review;
  } catch (err) {
    log('codex review failed', { error: String(err), stdout: err.stdout?.slice?.(0, 1000), stderr: err.stderr?.slice?.(0, 1000) });
    await sendTelegramText(`Walker email monitor caught a new message but review generation failed.\n\nFrom: ${message.match(/From: (.*)/)?.[1] || ''}\nSubject: ${message.match(/Subject: (.*)/)?.[1] || ''}`);
    throw err;
  }
}

function buildPromptFromMessage(msg) {
  const from = msg.from_ || msg.from || '';
  const subject = msg.subject || '(no subject)';
  const preview = msg.preview || '';
  const text = msg.extracted_text || msg.text || '';
  const html = msg.extracted_html || msg.html || '';
  const body = shorten(text || html || preview, 6000);
  return [
    'A new Skechers email arrived for review.',
    'Review it as Walker using the established format and preferences in this session.',
    'Medium length. Executive summary first, evidence after. Include a 1-10 business impact score.',
    'Focus on discoverability, UX, email-to-site continuity, bugs/friction, ease of use, and what should change.',
    'If this is clearly not a Skechers marketing/experience email, say so directly and briefly.',
    '',
    `Inbox: ${INBOX_ID}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    preview ? `Preview: ${shorten(preview, 500)}` : '',
    '',
    'Body:',
    body || '(no body available)',
  ].filter(Boolean).join('\n');
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

async function generatePdf(artifacts, reviewText) {
  const reviewPath = path.join(artifacts.dir, 'review.txt');
  fs.writeFileSync(reviewPath, reviewText, 'utf8');
  const outPdf = path.join(REPORTS_DIR, `${artifacts.slug}-review.pdf`);
  await execFileAsync('python3', [PDF_SCRIPT, reviewPath, artifacts.dir, outPdf], { maxBuffer: 1024 * 1024 * 20 });
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
cp -R ${SITE_DIR}/* ${tmpRepo}/
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

    const reviewText = await generateReview(buildPromptFromMessage(fullMessage));
    await sendTelegramText(reviewText);
    const artifacts = await saveArtifacts(fullMessage);
    const rendered = await renderWebview(artifacts);
    const pdfPath = await generatePdf(artifacts, reviewText || buildPromptFromMessage(fullMessage));
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
