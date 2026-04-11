/**
 * Reruns the two-agent audit (content + technical) for a given artifact directory.
 * Usage: node rerun-audit.mjs <artifactDir> <slug>
 */
import fs from 'fs';
import path from 'path';
import { execFile } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

const CLAUDE_MODEL = process.env.CLAUDE_MODEL || 'sonnet';
const CLAUDE_EFFORT = process.env.CLAUDE_EFFORT || 'high';
const CLAUDE_BIN = process.env.CLAUDE_BIN || '/Users/alontsang/.local/bin/claude';
const REPORTS_DIR = path.join(path.dirname(__dirname), 'reports');
const PDF_SCRIPT = path.join(__dirname, 'generate_review_pdf.py');
const SITE_DIR = path.join(path.dirname(__dirname), 'email-audit');
const SITE_GENERATOR = path.join(SITE_DIR, 'generate_site.py');

function shorten(s, n) { return s.length > n ? s.slice(0, n) + '…' : s; }

async function runClaude(prompt, { images = [], label = 'review' } = {}) {
  const args = ['-p', '--model', CLAUDE_MODEL, '--effort', CLAUDE_EFFORT, '--no-session-persistence', '--permission-mode', 'bypassPermissions'];
  const addedDirs = new Set();
  for (const img of images) {
    const dir = path.dirname(img);
    if (!addedDirs.has(dir)) { args.push('--add-dir', dir); addedDirs.add(dir); }
  }
  const child = execFile(CLAUDE_BIN, args, { cwd: path.dirname(__dirname), maxBuffer: 1024 * 1024 * 20, timeout: 600000, env: { ...process.env } });
  child.stdin.write(prompt);
  child.stdin.end();
  const { stdout, stderr } = await new Promise((resolve, reject) => {
    let out = '', err = '';
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { err += d; });
    child.on('close', (code) => code !== 0 ? reject(new Error(`claude ${label} exited ${code}: ${err}`)) : resolve({ stdout: out, stderr: err }));
    child.on('error', reject);
  });
  if (stderr?.trim()) console.error(`[${label}] stderr:`, stderr.trim().slice(0, 500));
  return stdout.trim();
}

async function rerunAudit(artifactDir, slug) {
  console.log(`\n=== Rerunning audit: ${slug} ===`);

  const msg = JSON.parse(fs.readFileSync(path.join(artifactDir, 'message.json'), 'utf8'));
  const screenshot = path.join(artifactDir, 'email-webview-render.png');
  const qaReportPath = path.join(artifactDir, 'qa-report.json');
  const from = msg.from_ || msg.from || '';
  const subject = msg.subject || '(no subject)';
  const preview = msg.preview || '';
  const html = msg.extracted_html || msg.html || '';
  const text = msg.extracted_text || msg.text || '';

  // Build QA context
  let qaContext = '';
  if (fs.existsSync(qaReportPath)) {
    const qaReport = JSON.parse(fs.readFileSync(qaReportPath, 'utf8'));
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
    lines.push('Incorporate relevant findings into your review, especially in Recommendations.');
    qaContext = lines.join('\n');
  }

  // Content prompt
  const contentPrompt = [
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
    `IMPORTANT: Before writing your review, use the Read tool to view the screenshot at: ${screenshot}`,
    'Base your review entirely on what you see in that rendered image.',
  ].filter(Boolean).join('\n');

  // Technical prompt
  const technicalPrompt = [
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
    shorten(html || text || '(no body)', 6000),
    qaContext,
  ].filter(Boolean).join('\n');

  // Run both in parallel
  console.log('  Running content + technical agents in parallel...');
  const [contentReview, technicalReview] = await Promise.all([
    runClaude(contentPrompt, { images: [screenshot], label: `content-${slug}` }),
    runClaude(technicalPrompt, { label: `technical-${slug}` }),
  ]);

  const merged = [contentReview, '', '---', '', '## Technical Audit', '', technicalReview].join('\n');

  // Save review
  const reviewPath = path.join(artifactDir, 'review.txt');
  fs.writeFileSync(reviewPath, merged, 'utf8');
  console.log(`  Saved review.txt (${merged.length} chars)`);

  // Regenerate PDF
  const pdfPath = path.join(REPORTS_DIR, `${slug}-review.pdf`);
  const pdfArgs = [PDF_SCRIPT, reviewPath, artifactDir, pdfPath];
  if (fs.existsSync(qaReportPath)) pdfArgs.push('--qa-report', qaReportPath);
  await execFileAsync('python3', pdfArgs, { maxBuffer: 1024 * 1024 * 20 });
  console.log(`  Regenerated PDF: ${pdfPath}`);

  // Delete stale audit-data.json so generate_site.py re-extracts
  const auditDataPath = path.join(artifactDir, 'audit-data.json');
  if (fs.existsSync(auditDataPath)) fs.unlinkSync(auditDataPath);

  return merged;
}

// --- Main ---
const audits = [
  {
    dir: '/Users/alontsang/.openclaw-walker/workspace/reports/email-artifacts/2026-03-16-tell-us-more-about-you',
    slug: '2026-03-16-tell-us-more-about-you',
  },
  {
    dir: '/Users/alontsang/.openclaw-walker/workspace/reports/email-artifacts/2026-03-20-more-skechers-plus-benefits-are-waiting-0accb379-8335-41ad-9cd0-',
    slug: '2026-03-20-more-skechers-plus-benefits-are-waiting',
  },
];

for (const a of audits) {
  await rerunAudit(a.dir, a.slug);
}

// Regenerate site (re-extracts audit-data.json + HTML pages)
console.log('\nRegenerating site...');
await execFileAsync('python3', [SITE_GENERATOR], { cwd: path.dirname(__dirname), maxBuffer: 1024 * 1024 * 20 });
console.log('Done.');
