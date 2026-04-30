/**
 * Mirror chat_reflection rows to vaults/{persona}/reflections/{date}-{thread-id}.md
 * markdown notes. Runs from the email-monitor daemon (the Mac mini —
 * Vercel functions can't commit to git).
 *
 * The DB row is the runtime memory the chat retrieves. The vault note
 * is the persona's IP / brain trail in Obsidian. Same content, two
 * audiences.
 *
 * Picks up reflections where vault_synced_at IS NULL, writes the note,
 * stamps the timestamp. Idempotent — re-running is safe.
 */

import fs from "node:fs";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

const SLUG_DATE_RE = /^(\d{4}-\d{2}-\d{2})/;

function dbUrl() {
  return process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL ?? "";
}

function dateKeyFromTimestamp(ts) {
  const d = ts instanceof Date ? ts : new Date(ts);
  if (Number.isNaN(d.getTime())) return new Date().toISOString().slice(0, 10);
  return d.toISOString().slice(0, 10);
}

function noteFilename(personaSlug, threadId, createdAt) {
  // YYYY-MM-DD-<threadId>.md keeps notes ordered chronologically when
  // the vault is browsed in Obsidian's file pane. Thread id is the
  // disambiguator (we get one reflection per thread).
  const date = dateKeyFromTimestamp(createdAt);
  return `${date}-${threadId}.md`;
}

function frontmatter(row) {
  const lines = [
    "---",
    `kind: reflection`,
    `persona: ${row.persona_slug}`,
    `thread_id: ${row.thread_id}`,
    `messages: ${row.reflected_through_message_count}`,
    `created_at: ${new Date(row.created_at).toISOString()}`,
    `updated_at: ${new Date(row.updated_at).toISOString()}`,
    "---",
  ];
  return lines.join("\n");
}

function buildNote(row) {
  return [
    frontmatter(row),
    "",
    `# ${row.title}`,
    "",
    String(row.summary).trim(),
    "",
  ].join("\n");
}

/**
 * Walk un-mirrored reflections, write their vault files, stamp
 * vault_synced_at. Returns the per-row results so the caller can log.
 */
export async function mirrorReflectionsToVault(repoRoot) {
  const url = dbUrl();
  if (!url) return { processed: 0, written: [] };
  const sql = neon(url);
  const rows = await sql`
    SELECT thread_id::text AS thread_id,
           persona_slug,
           title,
           summary,
           reflected_through_message_count,
           created_at,
           updated_at
    FROM chat_reflection
    WHERE vault_synced_at IS NULL
       OR updated_at > vault_synced_at
    ORDER BY updated_at ASC
  `;
  if (rows.length === 0) return { processed: 0, written: [] };

  const written = [];
  for (const row of rows) {
    const dir = path.join(
      repoRoot,
      "vaults",
      row.persona_slug,
      "reflections"
    );
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, noteFilename(row.persona_slug, row.thread_id, row.created_at));
    try {
      fs.writeFileSync(file, buildNote(row), "utf8");
      await sql`
        UPDATE chat_reflection
        SET vault_synced_at = NOW()
        WHERE thread_id = ${row.thread_id}
      `;
      written.push({ persona: row.persona_slug, file: path.relative(repoRoot, file) });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(
        `mirror-reflections: failed to write ${file}: ${msg.slice(0, 160)}`
      );
    }
  }
  return { processed: rows.length, written };
}

// Tiny self-running mode for ad-hoc invocation:
//   node audit-pipeline/mirror-reflections.mjs
if (import.meta.url === `file://${process.argv[1]}`) {
  const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
  mirrorReflectionsToVault(repoRoot).then((r) => {
    console.log(`mirrored ${r.written.length}/${r.processed} reflection(s)`);
    for (const w of r.written) console.log(`  · ${w.persona}/${w.file}`);
  });
}

// SLUG_DATE_RE is exported for tests that want to verify date prefixes.
export { SLUG_DATE_RE };
