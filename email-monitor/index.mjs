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
const OPENCLAW_SESSION_ID = process.env.OPENCLAW_SESSION_ID || 'agent:main:main';
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
    return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
  } catch {
    return { processedMessageIds: [] };
  }
}

function saveState(state) {
  const trimmed = {
    processedMessageIds: Array.from(new Set(state.processedMessageIds)).slice(-500),
  };
  fs.writeFileSync(STATE_PATH, JSON.stringify(trimmed, null, 2));
}

function seen(state, id) {
  return state.processedMessageIds.includes(id);
}

function markSeen(state, id) {
  state.processedMessageIds.push(id);
  saveState(state);
}

function shorten(text, max = 2400) {
  if (!text) return '';
  const clean = String(text).replace(/\s+/g, ' ').trim();
  return clean.length > max ? clean.slice(0, max - 1) + '…' : clean;
}

async function sendToWalker(message) {
  const args = [
    'agent',
    '--session-id', OPENCLAW_SESSION_ID,
    '--message',
    message,
    '--deliver',
    '--reply-channel', 'telegram',
    '--reply-to', TELEGRAM_TARGET,
    '--timeout', '600'
  ];
  const { stdout, stderr } = await execFileAsync('openclaw', args, { maxBuffer: 1024 * 1024 * 10 });
  if (stdout?.trim()) log('openclaw agent stdout', { stdout: stdout.trim().slice(0, 1000) });
  if (stderr?.trim()) log('openclaw agent stderr', { stderr: stderr.trim().slice(0, 1000) });
}

function buildPrompt(event) {
  const msg = event.message || {};
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

async function main() {
  const client = new AgentMailClient({ apiKey: API_KEY });
  const state = loadState();
  let socket;

  const connect = async () => {
    log('connecting', { inbox: INBOX_ID });
    socket = await client.websockets.connect();

    socket.on('open', () => {
      log('socket open');
      socket.sendSubscribe({ type: 'subscribe', inboxIds: [INBOX_ID], eventTypes: ['message.received'] });
    });

    socket.on('message', async (event) => {
      try {
        if (event.type === 'subscribed') {
          log('subscribed', event);
          return;
        }
        if (event.type !== 'message_received') return;
        const id = event.message?.messageId || event.message?.message_id;
        if (!id) {
          log('message_received without id');
          return;
        }
        if (seen(state, id)) {
          log('duplicate skipped', { id });
          return;
        }
        markSeen(state, id);
        log('new message', { id, from: event.message?.from_ || event.message?.from, subject: event.message?.subject });
        await sendToWalker(buildPrompt(event));
      } catch (err) {
        log('processing error', { error: String(err), stack: err?.stack });
      }
    });

    socket.on('close', (event) => {
      log('socket close', { code: event?.code, reason: event?.reason });
      setTimeout(connect, 5000);
    });

    socket.on('error', (error) => {
      log('socket error', { error: String(error) });
    });
  };

  await connect();
}

main().catch((err) => {
  log('fatal', { error: String(err), stack: err?.stack });
  process.exit(1);
});
