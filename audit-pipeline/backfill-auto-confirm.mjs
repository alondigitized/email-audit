#!/usr/bin/env node
/**
 * One-shot: walk every email-type audit row that has a raw .eml in R2,
 * detect/extract/click any double-opt-in confirmation it carries, and
 * stamp the result onto the experience + audit rows.
 *
 * Idempotent — re-running re-clicks anything that previously failed
 * (success rows are skipped via --skip-successful, default true).
 *
 * Usage:
 *   node audit-pipeline/backfill-auto-confirm.mjs                # all candidates
 *   node audit-pipeline/backfill-auto-confirm.mjs --persona X    # filter to one persona
 *   node audit-pipeline/backfill-auto-confirm.mjs --limit 5      # cap
 *   node audit-pipeline/backfill-auto-confirm.mjs --include-successful
 *   node audit-pipeline/backfill-auto-confirm.mjs --dry-run      # detect + extract only, no click
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { neon } from '@neondatabase/serverless';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { runAutoConfirm, detectConfirmationEmail, extractConfirmationUrl } from './auto-confirm.mjs';
import { upsertAutoConfirm } from './publish.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tiny .env loader (no dotenv dep — audit-pipeline doesn't ship one).
// Reads KEY=VALUE lines, strips surrounding quotes, ignores blanks/comments.
function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return;
  const txt = fs.readFileSync(filePath, 'utf8');
  for (const line of txt.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const m = trimmed.match(/^([A-Z0-9_]+)\s*=\s*(.*)$/i);
    if (!m) continue;
    let val = m[2];
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (process.env[m[1]] === undefined) process.env[m[1]] = val;
  }
}
loadEnv(path.join(__dirname, '..', 'site-monitor', '.env'));
loadEnv(path.join(__dirname, '..', 'email-monitor', '.env'));

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(n);
const arg = (n, dflt) => {
  const i = argv.indexOf(n);
  return i >= 0 && i + 1 < argv.length ? argv[i + 1] : dflt;
};

const PERSONA_FILTER = arg('--persona', null);
const LIMIT = Number(arg('--limit', '0')) || null;
const SKIP_SUCCESSFUL = !flag('--include-successful');
const DRY_RUN = flag('--dry-run');

function db() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL[_UNPOOLED] required');
  return neon(url);
}

let s3Client;
function r2() {
  if (s3Client) return s3Client;
  const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY } = process.env;
  if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
    throw new Error('R2 credentials missing');
  }
  s3Client = new S3Client({
    region: 'auto',
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY },
  });
  return s3Client;
}

async function fetchRawEml(rawKey) {
  const r = await r2().send(
    new GetObjectCommand({ Bucket: process.env.R2_BUCKET, Key: rawKey })
  );
  return await r.Body.transformToString();
}

// Tiny .eml splitter: returns { subject, html, text }. Hands the whole
// body to runAutoConfirm — regex extractors don't care about MIME
// boundaries; they operate on the raw bytes which is fine for QP-
// encoded HTML inline.
function parseEml(raw) {
  const idxCRLF = raw.indexOf('\r\n\r\n');
  const idxLF = raw.indexOf('\n\n');
  const headerEnd =
    idxCRLF !== -1 && (idxLF === -1 || idxCRLF < idxLF) ? idxCRLF : idxLF;
  const headers = headerEnd >= 0 ? raw.slice(0, headerEnd) : raw;
  // Capture Subject: line plus any RFC-822 continuation (next line that
  // starts with whitespace).
  const m = headers.match(
    /^Subject:[ \t]*([^\r\n]+(?:\r?\n[ \t]+[^\r\n]+)*)/im
  );
  let subject = m ? m[1].replace(/\r?\n[ \t]+/g, ' ').trim() : '';
  // Decode RFC 2047 encoded-words (=?utf-8?Q?...?= or =?utf-8?B?...?=).
  subject = subject.replace(/=\?[^?]+\?[QqBb]\?[^?]*\?=/g, (enc) => {
    const parts = enc.match(/=\?([^?]+)\?([QqBb])\?([^?]*)\?=/);
    if (!parts) return enc;
    const [, , encoding, payload] = parts;
    if (encoding === 'B' || encoding === 'b') {
      try { return Buffer.from(payload, 'base64').toString('utf8'); } catch { return enc; }
    }
    // Q-encoding — like QP but underscore = space.
    return payload
      .replace(/_/g, ' ')
      .replace(/=([0-9A-Fa-f]{2})/g, (_, h) =>
        String.fromCharCode(parseInt(h, 16))
      );
  });
  const body = headerEnd >= 0 ? raw.slice(headerEnd + (raw[headerEnd] === '\r' ? 4 : 2)) : '';
  return { subject, html: body, text: body };
}

async function main() {
  const sql = db();
  // Candidate rows: every audit whose experience has a raw_key (we have
  // the .eml to scan) and (when SKIP_SUCCESSFUL) auto_confirm is null
  // or unsuccessful.
  // Build incrementally — neon's tagged-template SQL doesn't allow empty
  // fragments to be interpolated. Pull a generous candidate set, then
  // filter persona / limit in JS.
  let candidates = SKIP_SUCCESSFUL
    ? await sql`
        SELECT a.slug, a.persona, e.raw_key, e.auto_confirm
        FROM audit a
        JOIN reaction r ON r.slug = a.slug
        JOIN experience e ON e.id = r.experience_id
        WHERE a.type = 'email'
          AND e.raw_key IS NOT NULL
          AND (e.auto_confirm IS NULL OR (e.auto_confirm->>'success')::boolean = false)
        ORDER BY a.timestamp DESC
      `
    : await sql`
        SELECT a.slug, a.persona, e.raw_key, e.auto_confirm
        FROM audit a
        JOIN reaction r ON r.slug = a.slug
        JOIN experience e ON e.id = r.experience_id
        WHERE a.type = 'email'
          AND e.raw_key IS NOT NULL
        ORDER BY a.timestamp DESC
      `;
  if (PERSONA_FILTER) {
    candidates = candidates.filter((r) => r.persona === PERSONA_FILTER);
  }
  const rows = LIMIT ? candidates.slice(0, LIMIT) : candidates;
  console.log(`scanning ${rows.length} candidate audit(s)`);

  let detected = 0;
  let clicked = 0;
  let succeeded = 0;
  let failed = 0;

  for (const row of rows) {
    let raw;
    try {
      raw = await fetchRawEml(row.raw_key);
    } catch (err) {
      console.warn(`  skip ${row.slug} — R2 fetch failed: ${String(err).slice(0, 160)}`);
      continue;
    }
    const { subject, html, text } = parseEml(raw);
    if (!detectConfirmationEmail({ subject, html, text })) {
      if (DRY_RUN) console.log(`  [dry] ${row.slug} :: subject=\"${subject.slice(0,60)}\" not detected`);
      continue;
    }
    detected++;

    if (DRY_RUN) {
      const url = extractConfirmationUrl({ html, text });
      console.log(`  [dry] ${row.slug} :: ${url ?? '(no url)'}`);
      continue;
    }
    const result = await runAutoConfirm({ subject, html, text });
    if (!result) continue;
    clicked++;
    if (result.success) succeeded++; else failed++;
    try {
      await upsertAutoConfirm({ slug: row.slug, autoConfirm: result });
    } catch (err) {
      console.warn(`  DB writeback failed for ${row.slug}: ${String(err).slice(0, 160)}`);
    }
    console.log(
      `  ${result.success ? '✓' : '✗'} ${row.slug} :: HTTP ${result.http_status ?? '—'} :: ${(result.url ?? '').slice(0, 120)}`
    );
  }

  console.log(
    `\nsummary: scanned=${rows.length} detected=${detected} clicked=${clicked} succeeded=${succeeded} failed=${failed}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
