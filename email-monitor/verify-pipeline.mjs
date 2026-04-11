/**
 * End-to-end pipeline verification.
 * Sends a mock email, waits for the monitor to process it,
 * then confirms the audit appears on the live Vercel site.
 *
 * Usage: node verify-pipeline.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { AgentMailClient } from 'agentmail';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

const API_KEY = process.env.AGENTMAIL_API_KEY;
const INBOX_ID = process.env.INBOX_ID || 'walker@agentmail.to';
const STATE_PATH = path.join(__dirname, 'state.json');
const SITE_URL = process.env.SITE_BASE_URL || 'https://email-audit-weld.vercel.app';
const REPO_ROOT = path.dirname(__dirname);
const SITE_MANIFEST = path.join(REPO_ROOT, 'email-audit', 'published-audits.json');
const SITE_GENERATOR = path.join(REPO_ROOT, 'email-audit', 'generate_site.py');
const SITE_CONTENT = path.join(REPO_ROOT, 'site', 'content', 'audits');
const SITE_IMAGES = path.join(REPO_ROOT, 'site', 'public', 'images', 'audits');

const PROCESS_TIMEOUT_MS = 10 * 60 * 1000; // 10 min
const PROCESS_POLL_MS = 15_000;             // 15s
const DEPLOY_TIMEOUT_MS = 5 * 60 * 1000;   // 5 min
const DEPLOY_POLL_MS = 30_000;              // 30s

if (!API_KEY) { console.error('[FAIL] Missing AGENTMAIL_API_KEY in .env'); process.exit(1); }

function elapsed(start) { return ((Date.now() - start) / 1000).toFixed(0); }

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function readState() {
  try { return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8')); }
  catch { return null; }
}

async function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

// --- Step 1: Send mock email ---
async function sendMockEmail(client) {
  const ts = new Date().toISOString().slice(0, 16).replace('T', ' ');
  const subject = `[Verify] Pipeline Test ${ts}`;
  const html = `<h1>Pipeline Verification</h1>
<p>Automated end-to-end test sent at ${new Date().toISOString()}.</p>
<p>This email verifies that the audit pipeline is operational.</p>`;

  const response = await client.inboxes.messages.send(INBOX_ID, {
    to: INBOX_ID,
    subject,
    html,
    text: `Pipeline Verification. Automated test sent at ${new Date().toISOString()}.`,
  });

  const messageId = response.messageId;
  const dateStr = new Date().toISOString().slice(0, 10);
  const expectedSlug = `${dateStr}-${slugify(subject)}`;

  return { messageId, subject, expectedSlug };
}

// --- Step 2: Wait for monitor to process ---
async function waitForProcessing(messageId) {
  const deadline = Date.now() + PROCESS_TIMEOUT_MS;
  while (Date.now() < deadline) {
    const state = readState();
    if (!state) { await sleep(PROCESS_POLL_MS); continue; }

    if ((state.processedMessageIds || []).includes(messageId)) {
      return 'processed';
    }
    if ((state.failedMessageIds || []).includes(messageId)) {
      const retries = (state.retryCounts || {})[messageId] || 0;
      return `failed (attempt ${retries})`;
    }
    await sleep(PROCESS_POLL_MS);
  }
  return 'timeout';
}

// --- Step 3: Wait for Vercel deploy ---
async function waitForDeploy(slug) {
  const url = `${SITE_URL}/audits/${slug}`;
  const deadline = Date.now() + DEPLOY_TIMEOUT_MS;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
      if (res.status === 200) return { ok: true, url };
    } catch { /* network error, retry */ }
    await sleep(DEPLOY_POLL_MS);
  }
  return { ok: false, url };
}

// --- Step 4: Cleanup ---
async function cleanup(slug, messageId) {
  const { execFile } = await import('child_process');
  const { promisify } = await import('util');
  const execFileAsync = promisify(execFile);

  // Remove from manifest
  const manifest = JSON.parse(fs.readFileSync(SITE_MANIFEST, 'utf8'));
  const filtered = manifest.filter((e) => e.slug !== slug);
  fs.writeFileSync(SITE_MANIFEST, JSON.stringify(filtered, null, 2));

  // Remove site content and images
  const contentDir = path.join(SITE_CONTENT, slug);
  const imageDir = path.join(SITE_IMAGES, slug);
  if (fs.existsSync(contentDir)) fs.rmSync(contentDir, { recursive: true });
  if (fs.existsSync(imageDir)) fs.rmSync(imageDir, { recursive: true });

  // Remove audit HTML page
  const auditHtml = path.join(REPO_ROOT, 'email-audit', 'audits', `${slug}.html`);
  if (fs.existsSync(auditHtml)) fs.unlinkSync(auditHtml);

  // Regenerate site (rebuilds index.html and index.json)
  await execFileAsync('python3', [SITE_GENERATOR], { cwd: REPO_ROOT, maxBuffer: 1024 * 1024 * 20 });

  // Rebuild index.json for Next.js
  const siteIdx = JSON.parse(fs.readFileSync(path.join(SITE_CONTENT, 'index.json'), 'utf8'));
  const cleanIdx = siteIdx.filter((e) => e.slug !== slug);
  fs.writeFileSync(path.join(SITE_CONTENT, 'index.json'), JSON.stringify(cleanIdx, null, 2));

  // Git push cleanup
  const ghToken = process.env.GH_TOKEN || '';
  if (ghToken) {
    const cmd = `cd "${REPO_ROOT}" && git add site/content site/public/images/audits email-audit/published-audits.json email-audit/index.html email-audit/audits/ && git diff --cached --quiet && echo NO_CHANGES || (git commit -m "Clean up pipeline verification test" && git push origin main)`;
    await execFileAsync('/bin/zsh', ['-lc', cmd], { maxBuffer: 1024 * 1024 * 50, env: { ...process.env, GH_TOKEN: ghToken } });
  }

  // Remove from state.json processedMessageIds
  const state = readState();
  if (state) {
    state.processedMessageIds = (state.processedMessageIds || []).filter((id) => id !== messageId);
    delete (state.retryCounts || {})[messageId];
    fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
  }

  // Remove artifacts
  const artifactsDir = path.join(REPO_ROOT, 'reports', 'email-artifacts');
  if (fs.existsSync(artifactsDir)) {
    for (const dir of fs.readdirSync(artifactsDir)) {
      if (dir.startsWith(slug)) {
        fs.rmSync(path.join(artifactsDir, dir), { recursive: true });
      }
    }
  }
}

// --- Main ---
async function main() {
  const totalStart = Date.now();
  const client = new AgentMailClient({ apiKey: API_KEY });

  // Check monitor is running
  const state = readState();
  if (!state) {
    console.error('[FAIL] Cannot read state.json — is the monitor running?');
    process.exit(1);
  }

  // Step 1: Send
  console.log('Sending mock email...');
  const { messageId, subject, expectedSlug } = await sendMockEmail(client);
  console.log(`[PASS] Email sent (messageId: ${messageId})`);
  console.log(`       Subject: ${subject}`);
  console.log(`       Expected slug: ${expectedSlug}`);

  // Step 2: Process
  console.log('Waiting for monitor to process...');
  const processStart = Date.now();
  const processResult = await waitForProcessing(messageId);
  if (processResult === 'processed') {
    console.log(`[PASS] Monitor processed in ${elapsed(processStart)}s`);
  } else if (processResult === 'timeout') {
    console.error(`[FAIL] Monitor did not process within ${PROCESS_TIMEOUT_MS / 1000}s`);
    console.error('       Check: tail -20 email-monitor/logs/monitor.log');
    process.exit(1);
  } else {
    console.error(`[FAIL] Monitor marked message as ${processResult}`);
    console.error('       Check: tail -20 email-monitor/logs/monitor.log');
    process.exit(1);
  }

  // Step 3: Deploy
  console.log('Waiting for Vercel deploy...');
  const deployStart = Date.now();
  const { ok, url } = await waitForDeploy(expectedSlug);
  if (ok) {
    console.log(`[PASS] Vercel deployed in ${elapsed(deployStart)}s`);
    console.log(`[PASS] Detail page loads: ${url}`);
  } else {
    console.error(`[FAIL] Detail page not available within ${DEPLOY_TIMEOUT_MS / 1000}s`);
    console.error(`       URL: ${url}`);
    console.error('       The monitor may have processed it but Vercel build may have failed.');
    process.exit(1);
  }

  console.log(`\n✓ Pipeline verified end-to-end (total: ${elapsed(totalStart)}s)`);

  // Step 4: Cleanup
  console.log('\nCleaning up test artifacts...');
  try {
    await cleanup(expectedSlug, messageId);
    console.log('[DONE] Test entry removed from manifest, site, and state');
  } catch (err) {
    console.error(`[WARN] Cleanup failed: ${err.message}`);
    console.error('       Test entry may still be visible on the site.');
  }
}

main().catch((err) => {
  console.error(`[FAIL] Unexpected error: ${err.message}`);
  process.exit(1);
});
