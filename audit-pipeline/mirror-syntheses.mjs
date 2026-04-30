/**
 * Mirror persona_synthesis rows to vaults/{persona}/syntheses/{brand}.md
 * markdown notes. Same shape as mirror-reflections.mjs — Vercel writes
 * the DB row, the daemon owns the vault file because Vercel functions
 * can't commit to git.
 *
 * One file per (persona, brand). Re-runs overwrite when synthesis
 * regenerates (cron resets vault_synced_at to NULL on update).
 */

import fs from "node:fs";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

function dbUrl() {
  return process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL ?? "";
}

function safeFilename(brand) {
  return String(brand)
    .toLowerCase()
    .replace(/[^a-z0-9.-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function frontmatter(row) {
  return [
    "---",
    "kind: synthesis",
    `persona: ${row.persona_slug}`,
    `brand: ${row.brand_domain}`,
    `reactions: ${row.reaction_count}`,
    row.through_received_at
      ? `through: ${new Date(row.through_received_at).toISOString()}`
      : "through: null",
    `created_at: ${new Date(row.created_at).toISOString()}`,
    `updated_at: ${new Date(row.updated_at).toISOString()}`,
    "---",
  ].join("\n");
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

export async function mirrorSynthesesToVault(repoRoot) {
  const url = dbUrl();
  if (!url) return { processed: 0, written: [] };
  const sql = neon(url);
  const rows = await sql`
    SELECT persona_slug,
           brand_domain,
           title,
           summary,
           reaction_count,
           through_received_at,
           created_at,
           updated_at
    FROM persona_synthesis
    WHERE vault_synced_at IS NULL
       OR updated_at > vault_synced_at
    ORDER BY updated_at ASC
  `;
  if (rows.length === 0) return { processed: 0, written: [] };

  const written = [];
  for (const row of rows) {
    const dir = path.join(repoRoot, "vaults", row.persona_slug, "syntheses");
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `${safeFilename(row.brand_domain)}.md`);
    try {
      fs.writeFileSync(file, buildNote(row), "utf8");
      await sql`
        UPDATE persona_synthesis
        SET vault_synced_at = NOW()
        WHERE persona_slug = ${row.persona_slug}
          AND brand_domain = ${row.brand_domain}
      `;
      written.push({ persona: row.persona_slug, file: path.relative(repoRoot, file) });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(
        `mirror-syntheses: failed to write ${file}: ${msg.slice(0, 160)}`
      );
    }
  }
  return { processed: rows.length, written };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const repoRoot = path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    ".."
  );
  mirrorSynthesesToVault(repoRoot).then((r) => {
    console.log(`mirrored ${r.written.length}/${r.processed} synthesis(es)`);
    for (const w of r.written) console.log(`  · ${w.persona}/${w.file}`);
  });
}
