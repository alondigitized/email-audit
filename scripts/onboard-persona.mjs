#!/usr/bin/env node
// One-command laptop bootstrap for a persona. Replaces the previous
// scripts/persona-bootstrap-export.mjs (which only generated files) with a
// full orchestrator that also edits .env, captures cookies, installs the
// LaunchAgent, restarts email-monitor, and runs a dry-run site-review.
//
// Status for every step is reported back to persona.last_status in Neon
// via audit-pipeline/persona-profile.mjs → the admin UI polls this during
// Phase C's handoff wizard so the operator can watch progress live.
//
// Usage:
//   node scripts/onboard-persona.mjs <slug>
//
// Flags:
//   --password <p>   non-interactive; otherwise prompts via readline
//   --skip-cookies   skip cookie capture (re-runs where cookies are fresh)
//   --skip-smoke     skip the dry-run site-review at the end
//   --force          re-do every step even if state looks fresh
//
// Requires DATABASE_URL_UNPOOLED (or DATABASE_URL) so the script can read
// the DB profile + report status back. Fails loud if missing.

import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import url from 'node:url';
import { spawn } from 'node:child_process';
import { neon } from '@neondatabase/serverless';
import {
  reportOnboardingStep,
  reportCookiesCaptured,
} from '../audit-pipeline/persona-profile.mjs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');

// ─── CLI args ──────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const slug = args.find((a) => !a.startsWith('--'));
const passwordArg = argVal('--password');
const skipCookies = args.includes('--skip-cookies');
const skipSmoke = args.includes('--skip-smoke');
const force = args.includes('--force');

function argVal(name) {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
}

if (!slug) {
  console.error('Usage: node scripts/onboard-persona.mjs <slug> [--password <p>] [--skip-cookies] [--skip-smoke] [--force]');
  process.exit(1);
}

// ─── Tiny helpers ──────────────────────────────────────────────────────────

const COLORS = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function c(color, s) {
  return `${COLORS[color] || ''}${s}${COLORS.reset}`;
}

function step(label) {
  console.log(`\n${c('cyan', '▶')} ${label}`);
}

function ok(msg) {
  console.log(`  ${c('green', '✓')} ${msg}`);
}

function warn(msg) {
  console.log(`  ${c('yellow', '!')} ${msg}`);
}

function fail(msg) {
  console.log(`  ${c('red', '✗')} ${msg}`);
}

function skip(msg) {
  console.log(`  ${c('dim', '—')} ${msg}`);
}

async function report(key, status, detail) {
  await reportOnboardingStep(slug, key, status, detail);
}

function promptPassword() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: true,
    });
    // Mute echo by overriding the output write during password prompt.
    const origWrite = process.stdout.write.bind(process.stdout);
    let muted = false;
    rl.question(`Retailer password for ${slug}: `, (answer) => {
      process.stdout.write = origWrite;
      rl.close();
      process.stdout.write('\n');
      resolve(answer);
    });
    rl._writeToOutput = (s) => {
      if (muted && s !== '\r\n' && s !== '\n') return;
      origWrite(s);
    };
    muted = true;
  });
}

function runCmd(cmd, cmdArgs, opts = {}) {
  return new Promise((resolve) => {
    const p = spawn(cmd, cmdArgs, {
      stdio: 'inherit',
      ...opts,
    });
    p.on('exit', (code) => resolve(code ?? 1));
    p.on('error', (err) => {
      console.error(err);
      resolve(1);
    });
  });
}

// ─── DB profile load ───────────────────────────────────────────────────────

step(`Loading persona '${slug}' from Neon`);
const dbUrl = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
if (!dbUrl) {
  fail('DATABASE_URL_UNPOOLED or DATABASE_URL not set in env');
  process.exit(1);
}
const sql = neon(dbUrl);
const rows = await sql`SELECT slug, name, profile FROM persona WHERE slug = ${slug} LIMIT 1`;
if (rows.length === 0) {
  fail(`persona '${slug}' not found in DB — create it in /admin/personas/new first`);
  process.exit(1);
}
const { profile } = rows[0];
if (!profile) {
  fail(`persona '${slug}' has no profile yet — save identity in admin first`);
  process.exit(1);
}
const envPrefix = profile.journey?.credentials_env_prefix || `PERSONA_${slug.toUpperCase()}`;
const inbox = profile.agentmail?.inbox_address || `${slug}@agentmail.to`;
ok(`profile loaded · envPrefix=${envPrefix} · inbox=${inbox}`);

// ─── 1. Regenerate filesystem artifacts (JSON + vault README + plist) ─────
// These used to be in persona-bootstrap-export.mjs. Inlined here as the
// first step so subsequent steps can depend on them being on disk.

step('Generating filesystem artifacts');

const id = profile.identity || {};
const j = profile.journey || {};

// 1a. site-monitor/personas/{slug}.json — legacy daemon fallback
const legacyJson = {
  name: id.name,
  age: id.age,
  generation: id.generation,
  gender: id.gender,
  style: id.style,
  shopping_habits: id.shopping_habits,
  tech_comfort: id.tech_comfort,
  focus_areas: id.focus_areas ?? [],
  search_term: j.search_term ?? '',
  category_path: j.category_path ?? [],
  site: j.site ?? '',
  credentials_env_prefix: j.credentials_env_prefix ?? '',
  targets: j.targets ?? [],
};
const legacyPath = path.join(REPO, 'site-monitor', 'personas', `${slug}.json`);
fs.mkdirSync(path.dirname(legacyPath), { recursive: true });
fs.writeFileSync(legacyPath, JSON.stringify(legacyJson, null, 2) + '\n');
ok(`wrote ${path.relative(REPO, legacyPath)}`);

// 1b. vaults/{slug}/README.md
const gender = String(id.gender || 'other').toLowerCase();
const categoryPath = (j.category_path ?? []).join(' > ');
const readme = `---
slug: ${slug}
name: ${id.name}
age: ${id.age}
generation: ${id.generation}
gender: ${id.gender}
---

# ${id.name}

${id.age} · ${id.generation} · ${gender} — ${id.style}

## Focus areas
${(id.focus_areas ?? []).map((f) => `- ${f}`).join('\n')}

## Shopping habits
${id.shopping_habits}

## Tech comfort
${id.tech_comfort}

## Journey hints
- Primary search term: \`${j.search_term ?? ''}\`
- Category path: ${categoryPath || '—'}
- Site: ${j.site ?? '—'}

${profile.notes ? `\n## Notes\n${profile.notes}\n` : ''}---

Auto-generated by scripts/onboard-persona.mjs from the DB profile.
`;
const vaultDir = path.join(REPO, 'vaults', slug);
const readmePath = path.join(vaultDir, 'README.md');
fs.mkdirSync(vaultDir, { recursive: true });
fs.mkdirSync(path.join(vaultDir, 'audits'), { recursive: true });
fs.writeFileSync(readmePath, readme);
ok(`wrote ${path.relative(REPO, readmePath)}`);

// 1c. LaunchAgent plist. Weekend-only schedule by default (Sat + Sun).
const launchdDir = path.join(REPO, 'site-monitor', 'launchd');
fs.mkdirSync(launchdDir, { recursive: true });
const plistPath = path.join(launchdDir, `ai.openclaw.${slug}.site-review.plist`);
const plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>ai.openclaw.${slug}.site-review</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/bin/env</string>
    <string>bash</string>
    <string>-c</string>
    <string>cd ${REPO}/site-monitor &amp;&amp; /opt/homebrew/bin/node site-review.mjs --persona ${slug} &gt;&gt; logs/site-review.log 2&gt;&amp;1</string>
  </array>
  <key>StartCalendarInterval</key>
  <array>
    <dict><key>Weekday</key><integer>6</integer><key>Hour</key><integer>6</integer><key>Minute</key><integer>0</integer></dict>
    <dict><key>Weekday</key><integer>0</integer><key>Hour</key><integer>6</integer><key>Minute</key><integer>0</integer></dict>
  </array>
  <key>RunAtLoad</key><false/>
  <key>StandardErrorPath</key><string>${REPO}/site-monitor/logs/${slug}-site-review-stderr.log</string>
  <key>StandardOutPath</key><string>${REPO}/site-monitor/logs/${slug}-site-review-stdout.log</string>
</dict>
</plist>
`;
fs.writeFileSync(plistPath, plist);
ok(`wrote ${path.relative(REPO, plistPath)}`);
await report('artifacts', 'done', 'JSON + README + plist generated');

// ─── 2. Write credentials to site-monitor/.env ─────────────────────────────

step('Updating site-monitor/.env');

const envPath = path.join(REPO, 'site-monitor', '.env');
let envText = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
const emailKey = `${envPrefix}_EMAIL`;
const passwordKey = `${envPrefix}_PASSWORD`;
const hasEmail = new RegExp(`^${emailKey}=`, 'm').test(envText);
const hasPassword = new RegExp(`^${passwordKey}=`, 'm').test(envText);

if (hasEmail && hasPassword && !force) {
  skip(`${emailKey} + ${passwordKey} already in .env (use --force to overwrite)`);
  await report('env', 'done', 'keys already present');
} else {
  let password = passwordArg;
  if (!password) {
    password = await promptPassword();
  }
  if (!password || password.length < 4) {
    fail('empty/short password — aborting before writing .env');
    await report('env', 'failed', 'no password provided');
    process.exit(1);
  }

  // Back up the old .env before modifying — one blast radius mistake shouldn't
  // wipe the operator's real credentials.
  if (envText) {
    fs.writeFileSync(`${envPath}.backup`, envText);
  }

  const upsert = (text, key, value) => {
    const line = `${key}=${value}`;
    return new RegExp(`^${key}=.*$`, 'm').test(text)
      ? text.replace(new RegExp(`^${key}=.*$`, 'm'), line)
      : text + (text.endsWith('\n') || text === '' ? '' : '\n') + line + '\n';
  };
  envText = upsert(envText, emailKey, inbox);
  envText = upsert(envText, passwordKey, password);
  fs.writeFileSync(envPath, envText);
  ok(`wrote ${emailKey} + ${passwordKey} (backup at .env.backup)`);
  await report('env', 'done', `${emailKey} + ${passwordKey} written`);
}

// ─── 3. Cookie capture ─────────────────────────────────────────────────────

step('Capturing login cookies');

const cookiePath = path.join(REPO, 'site-monitor', 'cookies', `${slug}-skechers.json`);
const cookieStatusPath = path.join(REPO, 'site-monitor', 'cookies', `${slug}-status.json`);
let cookiesFresh = false;
if (fs.existsSync(cookiePath) && !force) {
  const age = (Date.now() - fs.statSync(cookiePath).mtimeMs) / 86_400_000;
  if (age < 30) {
    skip(`cookies at ${path.relative(REPO, cookiePath)} are ${age.toFixed(1)}d old — fresh`);
    cookiesFresh = true;
  }
}

if (!cookiesFresh && !skipCookies) {
  const code = await runCmd('node', ['save-cookies.mjs', '--persona', slug], {
    cwd: path.join(REPO, 'site-monitor'),
  });
  if (code !== 0) {
    fail(`save-cookies.mjs exited ${code}`);
    await report('cookies', 'failed', `save-cookies exit ${code}`);
    process.exit(1);
  }
  if (fs.existsSync(cookieStatusPath)) {
    const statusJson = JSON.parse(fs.readFileSync(cookieStatusPath, 'utf8'));
    ok(`captured ${statusJson.session_cookie_count} cookies at ${statusJson.captured_at}`);
    await reportCookiesCaptured(slug, statusJson.captured_at, statusJson.session_cookie_count);
    await report('cookies', 'done', `${statusJson.session_cookie_count} cookies captured`);
  } else {
    warn('save-cookies.mjs completed but wrote no status file');
    await report('cookies', 'done', 'completed without status file');
  }
} else if (skipCookies) {
  skip('skipping cookie capture (--skip-cookies)');
  await report('cookies', 'done', 'skipped by flag');
} else {
  await report('cookies', 'done', 'already fresh');
}

// ─── 4. Install LaunchAgent ────────────────────────────────────────────────

step('Installing LaunchAgent');

const homeLaunchd = path.join(process.env.HOME || '', 'Library', 'LaunchAgents');
const installedPlist = path.join(homeLaunchd, `ai.openclaw.${slug}.site-review.plist`);
fs.mkdirSync(homeLaunchd, { recursive: true });
fs.copyFileSync(plistPath, installedPlist);
ok(`copied plist to ${installedPlist}`);

// bootout first (idempotent — "service not loaded" is fine to ignore)
await runCmd('launchctl', ['bootout', `gui/${process.getuid()}`, installedPlist]).catch(() => {});
const bsCode = await runCmd('launchctl', ['bootstrap', `gui/${process.getuid()}`, installedPlist]);
if (bsCode !== 0) {
  fail(`launchctl bootstrap exited ${bsCode}`);
  await report('launchagent', 'failed', `bootstrap exit ${bsCode}`);
} else {
  ok('LaunchAgent bootstrapped (weekend Sat+Sun 06:00 UTC by default)');
  await report('launchagent', 'done', 'bootstrapped');
}

// ─── 5. Restart email-monitor so it polls the new inbox ────────────────────

step('Restarting email-monitor');
const emailPlist = path.join(homeLaunchd, 'com.walker.agentmail-monitor.plist');
if (fs.existsSync(emailPlist)) {
  await runCmd('launchctl', ['bootout', `gui/${process.getuid()}`, emailPlist]).catch(() => {});
  const code = await runCmd('launchctl', ['bootstrap', `gui/${process.getuid()}`, emailPlist]);
  if (code === 0) {
    ok('email-monitor restarted');
    await report('daemon', 'done', 'email-monitor bootstrapped');
  } else {
    warn(`email-monitor bootstrap exit ${code}`);
    await report('daemon', 'failed', `bootstrap exit ${code}`);
  }
} else {
  skip(`email-monitor plist not at ${emailPlist} — install it manually if you poll email`);
  await report('daemon', 'done', 'not installed');
}

// ─── 6. Dry-run smoke test ─────────────────────────────────────────────────

if (!skipSmoke) {
  step('Running dry-run site-review smoke test');
  const code = await runCmd('node', ['site-review.mjs', '--persona', slug, '--dry-run'], {
    cwd: path.join(REPO, 'site-monitor'),
  });
  if (code === 0) {
    ok('dry-run site-review completed');
    await report('smoke', 'done', 'dry-run passed');
  } else {
    warn(`dry-run site-review exited ${code} — check site-monitor/logs/site-review.log`);
    await report('smoke', 'failed', `exit ${code}`);
  }
} else {
  skip('skipping smoke test (--skip-smoke)');
  await report('smoke', 'done', 'skipped by flag');
}

// ─── Done ──────────────────────────────────────────────────────────────────

console.log('');
console.log(c('green', '✓ Onboarding complete.'));
console.log('  Admin UI: https://www.etell.app/admin/personas/' + slug);
console.log('  Next run: Saturday 06:00 UTC (or whatever your plist schedule says).');
