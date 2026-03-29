#!/usr/bin/env node
/**
 * Manual login helper — launches your REAL Chrome browser to skechers.com/login/,
 * lets you log in manually, then saves the cookies for automated runs.
 *
 * Usage: node save-cookies.mjs [--persona walker]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const persona = process.argv.includes('--persona')
  ? process.argv[process.argv.indexOf('--persona') + 1]
  : 'walker';

const personaConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'personas', `${persona}.json`), 'utf8'));
const CHROME_PORT = 9333;
const PROFILE_DIR = `/tmp/walker-login-${Date.now()}`;

async function main() {
  console.log('Launching Chrome...\n');

  // Launch real Chrome with a temp profile and remote debugging
  const chromeCmd = `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --remote-debugging-port=${CHROME_PORT} --user-data-dir="${PROFILE_DIR}" --no-first-run "${personaConfig.site}/login/" &`;
  execSync(chromeCmd, { shell: true, stdio: 'ignore' });

  // Wait for Chrome to start
  await new Promise(r => setTimeout(r, 3000));

  console.log('Chrome is open at skechers.com/login/');
  console.log('Please log in manually with Walker\'s credentials.');
  console.log('\nPress Enter here when you are logged in...\n');

  // Wait for user to press Enter
  await new Promise(resolve => {
    process.stdin.resume();
    process.stdin.once('data', resolve);
  });

  // Connect to Chrome and grab cookies
  const browser = await chromium.connectOverCDP(`http://localhost:${CHROME_PORT}`);
  const contexts = browser.contexts();
  let allCookies = [];
  for (const ctx of contexts) {
    const cookies = await ctx.cookies();
    allCookies.push(...cookies);
  }

  // Save cookies
  const cookieDir = path.join(__dirname, 'cookies');
  fs.mkdirSync(cookieDir, { recursive: true });
  const cookiePath = path.join(cookieDir, `${persona}-skechers.json`);
  fs.writeFileSync(cookiePath, JSON.stringify(allCookies, null, 2));

  console.log(`Saved ${allCookies.length} cookies to ${cookiePath}`);

  await browser.close();

  // Clean up temp profile
  try { fs.rmSync(PROFILE_DIR, { recursive: true }); } catch {}
}

main().catch(console.error);
