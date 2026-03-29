#!/usr/bin/env node
/**
 * Manual login helper — opens a real browser, lets you log in manually,
 * then saves the cookies for automated runs.
 *
 * Usage: node save-cookies.mjs [--persona walker]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const persona = process.argv.includes('--persona')
  ? process.argv[process.argv.indexOf('--persona') + 1]
  : 'walker';

const personaConfig = JSON.parse(fs.readFileSync(path.join(__dirname, 'personas', `${persona}.json`), 'utf8'));

async function main() {
  console.log(`Opening ${personaConfig.site}/login/ — please log in manually.`);
  console.log('Press Enter in this terminal when you are logged in.\n');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(`${personaConfig.site}/login/`, { waitUntil: 'domcontentloaded' });

  // Wait for user to press Enter
  await new Promise(resolve => {
    process.stdin.resume();
    process.stdin.once('data', resolve);
  });

  const cookies = await context.cookies();
  const cookieDir = path.join(__dirname, 'cookies');
  fs.mkdirSync(cookieDir, { recursive: true });
  const cookiePath = path.join(cookieDir, `${persona}-skechers.json`);
  fs.writeFileSync(cookiePath, JSON.stringify(cookies, null, 2));

  console.log(`Saved ${cookies.length} cookies to ${cookiePath}`);
  await browser.close();
}

main().catch(console.error);
