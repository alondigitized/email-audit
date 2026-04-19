// Writes a single Obsidian-compatible markdown note for a completed audit
// into the persona's brain vault at vaults/{persona}/audits/{slug}.md.
//
// Pure and idempotent: if the file already exists it is overwritten with the
// latest shape. No dependencies on Auth.js, Vercel, or the Next.js app — this
// runs inside the email-monitor and site-monitor daemons on the user's
// laptop, and from the one-shot backfill script.

import fs from 'node:fs';
import path from 'node:path';
import { embedAndStoreAudit } from './embed.mjs';
import { listAuditSummariesForPersona, dbConfigured } from './publish.mjs';

/**
 * @param {object} args
 * @param {object} args.auditData     The same shape the site renders (see site/lib/types.ts AuditData).
 * @param {string} args.personaSlug   'walker' | 'martha' | ...
 * @param {string} args.repoRoot      Absolute path to the repo root (parent of vaults/).
 * @param {string|null} [args.previousScore]  Optional, for site journeys — from site-monitor/history.
 * @param {object[]} [args.siteIndex] Optional list of AuditSummary rows for the persona. Used to
 *                                    compute "Recent history" wikilinks. If omitted, the writer
 *                                    queries Postgres for the persona's audits directly.
 */
export async function writeVaultNote({
  auditData,
  personaSlug,
  repoRoot,
  previousScore = null,
  siteIndex = null,
}) {
  if (!auditData || !auditData.slug) {
    throw new Error('writeVaultNote: auditData.slug required');
  }
  if (!personaSlug) {
    throw new Error('writeVaultNote: personaSlug required');
  }

  const vaultDir = path.join(repoRoot, 'vaults', personaSlug, 'audits');
  fs.mkdirSync(vaultDir, { recursive: true });

  const index = siteIndex ?? (await readSiteIndex(repoRoot, personaSlug));
  const recentHistory = pickRecentHistory(index, auditData, personaSlug);

  const md = buildMarkdown(auditData, personaSlug, previousScore, recentHistory);
  const dest = path.join(vaultDir, `${auditData.slug}.md`);
  fs.writeFileSync(dest, md);

  // Best-effort embedding for semantic retrieval in the chat API. Never
  // blocks the vault write — a missing VOYAGE_API_KEY, network blip, or DB
  // hiccup just leaves the row unwritten; it can be backfilled later.
  embedAndStoreAudit({ audit: auditData, personaSlug }).catch((err) => {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`embed skipped for ${auditData.slug}: ${msg.slice(0, 200)}`);
  });

  return dest;
}

// ---------------------------------------------------------------------------

// Audits live in Postgres (foundation P3). If DATABASE_URL isn't set —
// local dev without creds — return [] so "Recent history" renders empty
// rather than crashing the vault write. The filesystem fallback is gone
// because site/content/audits/index.json isn't produced anymore.
async function readSiteIndex(_repoRoot, personaSlug) {
  if (!dbConfigured()) return [];
  try {
    return await listAuditSummariesForPersona(personaSlug, 100);
  } catch (err) {
    console.warn(`readSiteIndex: DB query failed: ${err.message}`);
    return [];
  }
}

function pickRecentHistory(index, current, personaSlug) {
  const type = current.type ?? 'email';
  const slug = current.slug;
  const ts = current.email?.timestamp_iso ?? null;
  return index
    .filter((e) => e.persona === personaSlug && (e.type ?? 'email') === type)
    .filter((e) => e.slug !== slug)
    .filter((e) => !ts || !e.timestamp_iso || e.timestamp_iso < ts)
    .sort((a, b) => (b.timestamp_iso ?? '').localeCompare(a.timestamp_iso ?? ''))
    .slice(0, 3);
}

function buildMarkdown(audit, personaSlug, previousScore, recentHistory) {
  const date = (audit.email?.timestamp_iso ?? '').slice(0, 10);
  const subject = audit.email?.subject ?? '(untitled)';
  const sender = audit.email?.from_display_name ?? audit.email?.from ?? '';
  const type = audit.type ?? 'email';
  const score = audit.review?.score ?? '—';
  const scoreNum = Number((score.match(/^(\d+(?:\.\d+)?)/) ?? [])[1] ?? NaN);
  const tags = [];
  if (type === 'email') tags.push('email');
  if (type === 'site') tags.push('site-journey');
  if (Number.isFinite(scoreNum)) tags.push(`score-${Math.round(scoreNum)}`);
  if (sender) tags.push(`sender/${slugify(sender)}`);

  const front = [
    '---',
    `slug: ${audit.slug}`,
    `type: ${type}`,
    `date: ${date}`,
    `persona: ${personaSlug}`,
    `score: "${score}"`,
    previousScore ? `previous_score: "${previousScore}"` : null,
    sender ? `sender: ${yamlString(sender)}` : null,
    `subject: ${yamlString(subject)}`,
    `tags: [${tags.join(', ')}]`,
    '---',
    '',
  ]
    .filter((l) => l !== null)
    .join('\n');

  const scoreLine = previousScore
    ? `**Score:** ${score} (prev ${previousScore}) · **Type:** ${typeLabel(type)} · **${date}**`
    : `**Score:** ${score} · **Type:** ${typeLabel(type)} · **${date}**`;

  const body = [
    `# ${subject}`,
    '',
    scoreLine,
    '',
    renderSections(audit),
    '## Full review',
    '',
    (audit.review?.raw_markdown ?? '').trim(),
    '',
    renderRecentHistory(recentHistory),
  ]
    .filter(Boolean)
    .join('\n');

  return `${front}${body}\n`;
}

function renderSections(audit) {
  const s = audit.review?.sections ?? {};
  const lines = [];
  const blocks = [
    ['Executive summary', s.executive_summary],
    ["What's working", s.whats_working],
    ["What's weak", s.whats_weak],
    ['Recommendations', s.recommendations],
  ];
  for (const [title, items] of blocks) {
    if (!Array.isArray(items) || items.length === 0) continue;
    lines.push(`## ${title}`);
    lines.push('');
    for (const item of items) {
      const trimmed = String(item).trim();
      if (!trimmed) continue;
      // Section entries sometimes already start with "- ".
      lines.push(trimmed.startsWith('-') ? trimmed : `- ${trimmed}`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

function renderRecentHistory(recent) {
  if (!recent || recent.length === 0) return '';
  const lines = ['## Recent history', ''];
  for (const e of recent) {
    const d = (e.timestamp_iso ?? '').slice(0, 10);
    const sc = e.score ?? '—';
    lines.push(`- [[${e.slug}]] — ${sc}${d ? ` (${d})` : ''}`);
  }
  lines.push('');
  return lines.join('\n');
}

function typeLabel(type) {
  if (type === 'site') return 'Site journey';
  return 'Email audit';
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
}

function yamlString(s) {
  // Quote YAML scalars that might contain colons/quotes/hash chars.
  if (!/[:#"'\n]/.test(s)) return s;
  return `"${String(s).replace(/"/g, '\\"')}"`;
}
