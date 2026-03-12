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
const POLL_INTERVAL_MS = Number(process.env.POLL_INTERVAL_MS || 15000);
const STARTUP_LOOKBACK = Number(process.env.STARTUP_LOOKBACK || 10);
const STATE_PATH = path.join(__dirname, 'state.json');
const LOG_DIR = path.join(__dirname, 'logs');
const LOG_PATH = path.join(LOG_DIR, 'monitor.log');

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
      lastPollAt: parsed.lastPollAt || null,
    };
  } catch {
    return { processedMessageIds: [], inFlightMessageIds: [], lastPollAt: null };
  }
}

function saveState(state) {
  const trimmed = {
    processedMessageIds: Array.from(new Set(state.processedMessageIds)).slice(-1000),
    inFlightMessageIds: Array.from(new Set(state.inFlightMessageIds || [])).slice(-1000),
    lastPollAt: state.lastPollAt || null,
  };
  fs.writeFileSync(STATE_PATH, JSON.stringify(trimmed, null, 2));
}

function seen(state, id) {
  return state.processedMessageIds.includes(id);
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

async function sendTelegramFallback(text) {
  const args = [
    'message', 'send',
    '--channel', 'telegram',
    '--target', TELEGRAM_TARGET,
    '--message', text,
  ];
  const { stdout, stderr } = await execFileAsync('openclaw', args, { maxBuffer: 1024 * 1024 * 5 });
  if (stdout?.trim()) log('telegram fallback stdout', { stdout: stdout.trim().slice(0, 1000) });
  if (stderr?.trim()) log('telegram fallback stderr', { stderr: stderr.trim().slice(0, 1000) });
}

async function sendToWalker(message) {
  const args = [
    'agent',
    '--agent', OPENCLAW_AGENT_ID,
    '--message', message,
    '--deliver',
    '--reply-channel', 'telegram',
    '--reply-to', TELEGRAM_TARGET,
    '--timeout', '600',
  ];
  try {
    const { stdout, stderr } = await execFileAsync('openclaw', args, { maxBuffer: 1024 * 1024 * 10 });
    if (stdout?.trim()) log('openclaw agent stdout', { stdout: stdout.trim().slice(0, 1000) });
    if (stderr?.trim()) log('openclaw agent stderr', { stderr: stderr.trim().slice(0, 1000) });
  } catch (err) {
    log('openclaw agent failed', { error: String(err), stdout: err.stdout?.slice?.(0, 1000), stderr: err.stderr?.slice?.(0, 1000) });
    await sendTelegramFallback(`Walker email monitor caught a new message but the agent handoff failed.\n\nFrom: ${message.match(/From: (.*)/)?.[1] || ''}\nSubject: ${message.match(/Subject: (.*)/)?.[1] || ''}\n\nI need to inspect the handoff path.`);
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

    await sendToWalker(buildPromptFromMessage(fullMessage));
    markSeen(state, id);
    log('message completed', { id, source });
  } catch (err) {
    clearInFlight(state, id);
    log('message failed; will retry on next poll', { id, source, error: String(err) });
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
