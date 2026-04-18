#!/usr/bin/env node
// One-shot: embed every existing audit into Neon's audit_embedding table.
// Safe to re-run (upsert-based); skips embeddings that already exist and
// match the same indexed_text. Rate-limited to be polite to Voyage.

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { neon } from '@neondatabase/serverless';
import { buildIndexedText, embed, upsertAuditEmbedding } from './embed.mjs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');
const CONTENT = path.join(REPO, 'site', 'content', 'audits');
const INDEX_PATH = path.join(CONTENT, 'index.json');

// Local Ollama has no rate limit, but spacing avoids saturating the GPU and
// keeps the laptop usable. Set to 0 if you want to hammer it.
const DELAY_MS = Number(process.env.EMBED_DELAY_MS ?? 50);

async function main() {
  const dbUrl = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!dbUrl) {
    console.error('DATABASE_URL_UNPOOLED or DATABASE_URL required; aborting.');
    process.exit(1);
  }
  const sql = neon(dbUrl);
  console.log(`Using embeddings endpoint: ${process.env.LLM_BASE_URL ?? 'http://localhost:11434/v1'}`);
  console.log(`Using model: ${process.env.LLM_EMBED_MODEL ?? 'mxbai-embed-large'}`);

  const existing = await sql`SELECT audit_slug, indexed_text FROM audit_embedding`;
  const existingMap = new Map(existing.map((r) => [r.audit_slug, r.indexed_text]));

  const index = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'));
  // Oldest first so interrupted runs resume sensibly.
  const sorted = [...index].sort((a, b) =>
    (a.timestamp_iso ?? '').localeCompare(b.timestamp_iso ?? ''),
  );

  let embedded = 0;
  let skipped = 0;
  let failed = 0;
  for (let i = 0; i < sorted.length; i++) {
    const entry = sorted[i];
    if (!entry.persona) {
      skipped++;
      continue;
    }
    const auditPath = path.join(CONTENT, entry.slug, 'audit.json');
    if (!fs.existsSync(auditPath)) {
      skipped++;
      continue;
    }
    const audit = JSON.parse(fs.readFileSync(auditPath, 'utf8'));
    const indexedText = buildIndexedText(audit, entry.persona);
    if (existingMap.get(entry.slug) === indexedText) {
      skipped++;
      continue;
    }
    try {
      const vec = await embed(indexedText);
      await upsertAuditEmbedding({
        auditSlug: entry.slug,
        persona: entry.persona,
        indexedText,
        embedding: vec,
      });
      embedded++;
      if (embedded % 25 === 0) {
        console.log(`... ${embedded} embedded (${i + 1}/${sorted.length})`);
      }
    } catch (err) {
      console.error(`fail   ${entry.slug}: ${err.message.slice(0, 200)}`);
      failed++;
    }
    await new Promise((r) => setTimeout(r, DELAY_MS));
  }
  console.log(
    `\ndone. ${embedded} embedded, ${skipped} skipped (already current), ${failed} failed.`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
