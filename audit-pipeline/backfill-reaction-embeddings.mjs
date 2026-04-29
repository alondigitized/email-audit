#!/usr/bin/env node
/**
 * Backfill `reaction_embedding` rows for any reactions that don't have one.
 *
 * Why: pre-v3 reactions were never embedded; some post-v3 reactions slipped
 * through if `embedAndStoreAudit` failed (Ollama down, transient timeout)
 * and the daemon didn't retry. The chat retriever only sees reactions
 * whose embeddings exist, so missing rows = invisible memories.
 *
 * What: walks `reaction LEFT JOIN reaction_embedding`, picks rows with a
 * NULL embedding, rebuilds indexed_text from `reaction.review_data` +
 * `experience.email_data` (no filesystem reads — DB-only), embeds, inserts.
 *
 * Idempotent. Safe to re-run.
 *
 * Usage:
 *   node --env-file=site/.env.local audit-pipeline/backfill-reaction-embeddings.mjs           # dry-run
 *   node --env-file=site/.env.local audit-pipeline/backfill-reaction-embeddings.mjs --confirm
 */

import { neon } from "@neondatabase/serverless";
import { buildIndexedText, embed } from "./embed.mjs";

const confirm = process.argv.includes("--confirm");
const limitArg = process.argv.find((a) => a.startsWith("--limit="));
const LIMIT = limitArg ? parseInt(limitArg.split("=")[1], 10) : null;
const DELAY_MS = Number(process.env.EMBED_DELAY_MS ?? 50);

async function main() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) {
    console.error("DATABASE_URL_UNPOOLED or DATABASE_URL required");
    process.exit(1);
  }
  const sql = neon(url);

  console.log(
    `mode: ${confirm ? "EXECUTE" : "dry-run"}${LIMIT ? ` · limit=${LIMIT}` : ""}`
  );
  console.log(
    `embed endpoint: ${process.env.LLM_BASE_URL ?? "http://localhost:11434/v1"}`
  );
  console.log(
    `embed model: ${process.env.LLM_EMBED_MODEL ?? "mxbai-embed-large"}\n`
  );

  // Pick reactions whose persona has no embedding row pointing at this
  // reaction id. Pull review_data + experience.email_data so we can
  // rebuild indexed_text exactly as embed.mjs/buildIndexedText expects
  // (audit-data shaped: { email, review, type, slug }).
  // Neon's tagged-template builder doesn't compose `sql\`\`` cleanly when
  // we want the LIMIT clause to be optional. Build the query in two
  // shapes; both go through the same parameterized template.
  const allRows = await sql`
    SELECT r.id              AS reaction_id,
           r.slug             AS slug,
           r.persona_slug     AS persona,
           r.review_data      AS review_data,
           e.type             AS type,
           e.email_data       AS email_data
    FROM reaction r
    LEFT JOIN reaction_embedding re ON re.reaction_id = r.id
    JOIN experience e ON e.id = r.experience_id
    WHERE re.reaction_id IS NULL
    ORDER BY r.created_at ASC
  `;
  const rows = LIMIT ? allRows.slice(0, LIMIT) : allRows;

  console.log(`found ${rows.length} reaction(s) without an embedding\n`);
  if (rows.length === 0) {
    console.log("nothing to do.");
    return;
  }

  let embedded = 0;
  let failed = 0;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const audit = {
      slug: row.slug,
      type: row.type ?? "email",
      email: row.email_data ?? {},
      review: row.review_data ?? {},
    };
    const text = buildIndexedText(audit, row.persona);
    if (!text || text.length < 40) {
      console.warn(
        `skip   ${row.slug} (${row.persona}) — empty/short indexed_text`
      );
      failed++;
      continue;
    }
    if (!confirm) {
      console.log(
        `would embed   ${row.slug} (${row.persona}) — ${text.length} chars`
      );
      embedded++;
      continue;
    }
    try {
      const vec = await embed(text);
      const literal = `[${vec.join(",")}]`;
      await sql`
        INSERT INTO reaction_embedding
          (reaction_id, persona, indexed_text, embedding)
        VALUES
          (${row.reaction_id}, ${row.persona}, ${text}, ${literal}::vector)
        ON CONFLICT (reaction_id) DO UPDATE SET
          indexed_text = EXCLUDED.indexed_text,
          embedding    = EXCLUDED.embedding,
          persona      = EXCLUDED.persona
      `;
      embedded++;
      if (embedded % 10 === 0)
        console.log(`... ${embedded} embedded (${i + 1}/${rows.length})`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`fail   ${row.slug}: ${msg.slice(0, 200)}`);
      failed++;
    }
    if (DELAY_MS > 0) await new Promise((r) => setTimeout(r, DELAY_MS));
  }

  console.log(
    `\ndone. ${embedded} ${confirm ? "embedded" : "would be embedded"}, ${failed} failed.`
  );
  if (!confirm) console.log("(dry run — pass --confirm to execute)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
