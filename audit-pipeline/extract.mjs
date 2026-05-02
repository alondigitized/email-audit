// Port of extract_audit_data.py to JS. Reads the local manifest, walks
// each entry's artifactDir, and writes audit-data.json by parsing
// message.json, review.txt, and qa-report.json. Consumed by daemons
// before the DB upsert.
//
// Pure stdlib: fs, path, node's Date. No deps. One file, one call:
//   import { extractAll } from './extract.mjs';
//   await extractAll();              // uses default manifest path
//   await extractAll({ manifest });   // pass an array directly
//
// qa_checks.py is still invoked as a subprocess — that port is a
// separate, larger piece of work (HTTP + cheerio + rate limiting).

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const DEFAULT_MANIFEST = path.join(__dirname, 'published-audits.json');

function loadJson(p) {
  if (!fs.existsSync(p)) return null;
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch { return null; }
}

function readFileSafe(p) {
  if (!fs.existsSync(p)) return '';
  try { return fs.readFileSync(p, 'utf8'); }
  catch { return ''; }
}

// Matches "**6 / 10**" or bare "6/10" — same behavior as the Python version.
export function extractScore(reviewText) {
  const bold = reviewText.match(/\*\*(\d+(?:\.\d+)?)\s*\/\s*10\*\*/);
  if (bold) return `${bold[1]}/10`;
  const plain = reviewText.match(/(\d+(?:\.\d+)?)\s*\/\s*10/);
  if (plain) return `${plain[1]}/10`;
  return '\u2014'; // em-dash for "no score"
}

function parseTimestamp(msg) {
  const ts = msg?.timestamp || msg?.created_at || '';
  if (!ts) return null;
  // Accept "Z" suffix, which JS Date handles natively.
  const d = new Date(ts);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function parseDisplayName(fromAddr) {
  if (!fromAddr) return 'Unknown';
  const m = fromAddr.match(/^"?([^"<]+)"?\s*</);
  return m ? m[1].trim() : fromAddr;
}

// Extract the email's preview/preheader text — what inbox clients show
// next to the subject line. Tries two strategies:
//   1. Dedicated hidden preheader element (display:none / font-size:0 /
//      mso-hide:all / color:transparent) near the top of the body. This
//      is the deliberate preheader — what the sender intended.
//   2. Fall back to the first visible text in the body, capped at 200
//      chars — this is what Gmail/iOS will actually render if nothing
//      dedicated exists, i.e. the "accidental" preheader (often ugly).
// Returns null if neither yields non-empty text.
export function extractPreheader(html) {
  if (!html || typeof html !== 'string') return null;

  const decode = (s) =>
    s
      .replace(/&nbsp;|&zwnj;|&zwj;|&#8203;/gi, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ')
      .trim();

  // 1. Hidden preheader span/div. Match common patterns.
  const hiddenRe =
    /<(div|span|td|tr|table|p)\b[^>]*style\s*=\s*["'][^"']*(display\s*:\s*none|font-size\s*:\s*0|mso-hide\s*:\s*all|color\s*:\s*transparent|max-height\s*:\s*0|opacity\s*:\s*0)[^"']*["'][^>]*>([\s\S]*?)<\/\1>/i;
  const m = html.match(hiddenRe);
  if (m) {
    const text = decode(m[3].replace(/<[^>]+>/g, ''));
    if (text && text.length <= 400) return text;
  }

  // 2. First visible text fallback.
  const visible = decode(
    html
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<[^>]+>/g, ' ')
  );
  if (!visible) return null;
  return visible.slice(0, 200);
}

function stripPreamble(reviewText) {
  const stripped = reviewText.replace(/^\s+/, '');
  if (!stripped) return reviewText;
  // Already clean — starts with a heading, a WALKER tag, or a leading
  // divider (a decoration, not tool preamble). Without the `---` check
  // we'd eat section 1 on any review whose first line happens to be a
  // horizontal rule — e.g. Claude's "---\n\n## 1. Executive Summary"
  // pattern.
  if (
    stripped.startsWith('**WALKER') ||
    stripped.startsWith('##') ||
    stripped.startsWith('---')
  ) {
    return reviewText;
  }
  const idx = reviewText.indexOf('\n---\n');
  if (idx !== -1) return reviewText.slice(idx + 5);
  return reviewText;
}

// Maps headings in review.txt to their canonical section key. Keys are
// normalized (trim, lowercase, trailing colon removed, leading "#/number"
// stripped). Supports both straight and curly apostrophes.
const SECTION_HEADINGS = new Map([
  ['executive summary', 'executive_summary'],
  ['business impact score', 'business_impact_score'],
  ['business impact', 'business_impact_score'],
  ["what's working", 'whats_working'],
  ['what\u2019s working', 'whats_working'],
  ['what works', 'whats_working'],
  ["what's weak", 'whats_weak'],
  ['what\u2019s weak', 'whats_weak'],
  ['what is weak', 'whats_weak'],
  ['bottom line', 'bottom_line'],
  ['subject line analysis', 'subject_line'],
  ['subject line', 'subject_line'],
  ['subject', 'subject_line'],
  ['preview text analysis', 'preview_text'],
  ['preview text', 'preview_text'],
  ['preheader analysis', 'preview_text'],
  ['preheader', 'preview_text'],
  ['preheader text', 'preview_text'],
  ['open likelihood', 'open_likelihood'],
  ['open likelihood (persona-grounded)', 'open_likelihood'],
  ['open rate likelihood', 'open_likelihood'],
  ['click-through likelihood', 'click_likelihood'],
  ['click through likelihood', 'click_likelihood'],
  ['click-through likelihood (persona-grounded)', 'click_likelihood'],
  ['click likelihood', 'click_likelihood'],
  ['evidence', 'evidence'],
  ['evidence & analysis', 'evidence'],
  ['evidence and analysis', 'evidence'],
  // Homepage-audit aliases. Same shape as email sections (hero ≈
  // subject, above-fold ≈ preview, visit-engagement ≈ open, conversion
  // ≈ click) so /audits rendering, embeddings, and predictions reuse
  // the same downstream pipeline.
  ['hero analysis', 'subject_line'],
  ['hero & above-the-fold analysis', 'subject_line'],
  ['hero and above-the-fold analysis', 'subject_line'],
  ['hero & above the fold analysis', 'subject_line'],
  ['above-the-fold analysis', 'subject_line'],
  ['above the fold analysis', 'subject_line'],
  ['promotional & urgency cues', 'preview_text'],
  ['promotional and urgency cues', 'preview_text'],
  ['urgency cues', 'preview_text'],
  ['promotional cues', 'preview_text'],
  ['visit-engagement likelihood', 'open_likelihood'],
  ['visit engagement likelihood', 'open_likelihood'],
  ['visit-engagement likelihood (persona-grounded)', 'open_likelihood'],
  ['scroll likelihood', 'open_likelihood'],
  ['conversion likelihood', 'click_likelihood'],
  ['conversion likelihood (persona-grounded)', 'click_likelihood'],
]);

export function parseReviewSections(reviewText) {
  const sections = {
    executive_summary: [],
    business_impact_score: [],
    whats_working: [],
    whats_weak: [],
    recommendations: [],
    bottom_line: [],
    subject_line: [],
    preview_text: [],
    open_likelihood: [],
    click_likelihood: [],
    evidence: [],
  };
  let current = 'executive_summary';

  for (const raw of reviewText.split('\n')) {
    const line = raw.trim();
    if (!line || line === '---') continue;
    if (line.startsWith('**WALKER AUDIT') || line.startsWith('*Received:')) continue;

    const cleaned = line
      .replace(/^#{1,3}\s*\d*\.?\s*/, '')
      .trim()
      .toLowerCase()
      .replace(/:$/, '');

    const mapped = SECTION_HEADINGS.get(cleaned);
    if (mapped) { current = mapped; continue; }
    if (cleaned.startsWith('recommendation')) { current = 'recommendations'; continue; }

    // Skip bare heading lines that weren't matched above.
    if (/^#{1,3}\s/.test(line)) continue;

    sections[current].push(line);
  }

  return sections;
}

// Parse a likelihood section's bullets into { score, rationale }. Expects
// the reviewer to emit "**Score:** X/10" and "**Rationale:** ..." bullets,
// but tolerates minor formatting drift (colons, backticks, whitespace).
// Returns null when no score can be found.
export function parsePredictionBlock(bullets) {
  if (!Array.isArray(bullets) || bullets.length === 0) return null;
  const joined = bullets.join(' ');
  const scoreMatch = joined.match(/score[^0-9]*?(\d+(?:\.\d+)?)\s*\/\s*10/i);
  if (!scoreMatch) return null;
  const score = Number(scoreMatch[1]);
  if (!Number.isFinite(score) || score < 1 || score > 10) return null;

  // Rationale: everything after "Rationale:" up to the next bullet marker
  // ("- " or "*") that introduces a new labelled block, or end of string.
  // Strip markdown decoration and keep under 400 chars for tooltip fit.
  const ratMatch = joined.match(
    /rationale[^:]*:\s*([^]*?)(?:\s*[-*]\s+\*\*[A-Z]|$)/i
  );
  const rationale = (ratMatch ? ratMatch[1] : '')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 400);
  return { score, rationale };
}

export function parsePredictions(sections) {
  const open = parsePredictionBlock(sections?.open_likelihood);
  const click = parsePredictionBlock(sections?.click_likelihood);
  if (!open && !click) return null;
  const out = {};
  if (open) out.open_likelihood = open;
  if (click) out.click_likelihood = click;
  return out;
}

function formatDate(d) {
  if (!d) return 'Unknown';
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  const hours = String(d.getUTCHours()).padStart(2, '0');
  const minutes = String(d.getUTCMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes} UTC`;
}

// Match Python's datetime.isoformat() — "2026-03-12T05:17:05+00:00".
// Date.toISOString() would give ".000Z" which is semantically equivalent
// but visibly different from historical audits; avoid the churn.
function toPyIsoFormat(d) {
  const pad = (n) => String(n).padStart(2, '0');
  return (
    `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}` +
    `T${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}+00:00`
  );
}

export function buildAuditData({ entry, msg, reviewText, qaReport, slug }) {
  const fromAddr = msg?.from_ || msg?.from || 'Unknown';
  const dt = parseTimestamp(msg);
  const cleanedReview = stripPreamble(reviewText);
  const artifactDir = entry?.artifactDir || '';
  const renderExists = fs.existsSync(path.join(artifactDir, 'email-webview-render.png'));
  const pdfPath = entry?.pdfPath || '';
  const pdfExists = !!pdfPath && fs.existsSync(pdfPath);
  const webviewUrl = readFileSafe(path.join(artifactDir, 'webview-url.txt')).trim();
  const htmlSource =
    readFileSafe(path.join(artifactDir, 'message.html')) ||
    msg?.extracted_html ||
    msg?.html ||
    '';
  const preheader = extractPreheader(htmlSource);

  return {
    schema_version: 1,
    slug,
    type: 'email',
    persona: entry?.persona ?? null,
    email: {
      subject: msg?.subject || 'Untitled',
      preheader: preheader || null,
      from: fromAddr,
      from_display_name: parseDisplayName(fromAddr),
      timestamp_iso: dt ? toPyIsoFormat(dt) : null,
      date_formatted: formatDate(dt),
    },
    review: (() => {
      const sections = parseReviewSections(cleanedReview);
      const predictions = parsePredictions(sections);
      return {
        score: extractScore(reviewText),
        raw_markdown: cleanedReview,
        sections,
        ...(predictions ? { predictions } : {}),
      };
    })(),
    qa: qaReport,
    assets: {
      render_image: renderExists ? `${slug}-email-webview-render.png` : null,
      pdf: pdfExists ? `${slug}-review.pdf` : null,
      webview_url: webviewUrl || null,
    },
  };
}

function isStale(auditDataPath, artifactDir) {
  if (!fs.existsSync(auditDataPath)) return true;
  const adMtime = fs.statSync(auditDataPath).mtimeMs;
  for (const name of ['message.json', 'review.txt', 'qa-report.json']) {
    const src = path.join(artifactDir, name);
    if (fs.existsSync(src) && fs.statSync(src).mtimeMs > adMtime) return true;
  }
  return false;
}

/**
 * For each email manifest entry, produce audit-data.json from raw
 * artifacts. Site-journey entries (no message.json) are skipped —
 * site-monitor builds its own audit-data.json directly in JS.
 */
export async function extractAll({ manifest, manifestPath } = {}) {
  const loaded = manifest ?? loadJson(manifestPath ?? DEFAULT_MANIFEST);
  if (!loaded) {
    throw new Error(`No manifest found at ${manifestPath ?? DEFAULT_MANIFEST}`);
  }

  let written = 0;
  for (const entry of loaded) {
    const slug = entry?.slug || '';
    const artifactDir = entry?.artifactDir || '';
    if (!artifactDir || !fs.existsSync(artifactDir)) continue;

    const msgPath = path.join(artifactDir, 'message.json');
    if (!fs.existsSync(msgPath)) continue;

    const auditDataPath = path.join(artifactDir, 'audit-data.json');
    if (!isStale(auditDataPath, artifactDir)) continue;

    const msg = loadJson(msgPath) || {};
    const reviewText = readFileSafe(path.join(artifactDir, 'review.txt'));
    const qaReport = loadJson(path.join(artifactDir, 'qa-report.json'));

    const data = buildAuditData({ entry, msg, reviewText, qaReport, slug });
    fs.writeFileSync(auditDataPath, JSON.stringify(data, null, 2));
    written++;
  }
  return { written, total: loaded.length };
}

// CLI entry point — preserves the Python version's command-line behavior.
const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  extractAll()
    .then(({ written, total }) => {
      console.log(`Extracted audit-data.json for ${written} entries (out of ${total} total)`);
    })
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
}
