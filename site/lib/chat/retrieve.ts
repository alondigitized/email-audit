import fs from "node:fs";
import path from "node:path";
import { embed } from "ai";
import { neon } from "@neondatabase/serverless";
import { embeddingModel } from "./provider";
import { getPersonaBySlug } from "@/lib/personas-db";

// How many audits we retrieve per turn. 6 semantic + 4 recent = up to 10
// rows (usually fewer after dedupe) × ~800 tokens = ~8K tokens of retrieved
// memory, plenty of headroom for identity + conversation + reply.
export const RETRIEVAL_K_SEMANTIC = 6;
export const RETRIEVAL_K_RECENT = 4;
export const RETRIEVAL_K = RETRIEVAL_K_SEMANTIC + RETRIEVAL_K_RECENT;

export type RetrievedAudit = {
  slug: string;
  snippet: string;
  score: number; // cosine distance; lower is more similar
};

async function embedQuery(text: string): Promise<number[]> {
  const { embedding } = await embed({
    model: embeddingModel(),
    value: text,
  });
  return embedding;
}

/**
 * Retrieve audits to ground the persona's reply, scoped to one persona.
 * Hybrid: top-K by cosine similarity AND the most-recent N audits by
 * audit.timestamp, unioned and deduped. The recency half is what makes
 * questions like "what's the latest?" or "what did you get on April 19?"
 * work — plain cosine similarity against 1800-char indexed_text barely
 * weighs a date string, so new audits would otherwise lose the ranking
 * race to older, richer text. Snippets are the pipeline-time indexed_text.
 */
export async function retrieveRelevantAudits(
  personaSlug: string,
  query: string,
  kSemantic = RETRIEVAL_K_SEMANTIC,
  kRecent = RETRIEVAL_K_RECENT
): Promise<RetrievedAudit[]> {
  const url = process.env.DATABASE_URL ?? process.env.DATABASE_URL_UNPOOLED;
  if (!url) throw new Error("DATABASE_URL not set");
  const sql = neon(url);
  const queryVec = await embedQuery(query);
  const literal = `[${queryVec.join(",")}]`;

  const [semantic, recent] = (await Promise.all([
    sql`
      SELECT audit_slug, indexed_text,
             (embedding <=> ${literal}::vector) AS distance
      FROM audit_embedding
      WHERE persona = ${personaSlug}
      ORDER BY embedding <=> ${literal}::vector
      LIMIT ${kSemantic}
    `,
    sql`
      SELECT ae.audit_slug, ae.indexed_text,
             (ae.embedding <=> ${literal}::vector) AS distance
      FROM audit_embedding ae
      JOIN audit a ON a.slug = ae.audit_slug
      WHERE ae.persona = ${personaSlug}
      ORDER BY a.timestamp DESC
      LIMIT ${kRecent}
    `,
  ])) as Array<Array<{ audit_slug: string; indexed_text: string; distance: number }>>;

  const seen = new Set<string>();
  const merged: RetrievedAudit[] = [];
  for (const r of [...semantic, ...recent]) {
    if (seen.has(r.audit_slug)) continue;
    seen.add(r.audit_slug);
    merged.push({
      slug: r.audit_slug,
      snippet: r.indexed_text,
      score: Number(r.distance),
    });
  }
  return merged;
}

/**
 * Count how many audits are embedded for a persona — surfaced in the UI
 * as a "knows X audits" indicator.
 */
export async function getAuditMemoryCount(personaSlug: string): Promise<number> {
  const url = process.env.DATABASE_URL ?? process.env.DATABASE_URL_UNPOOLED;
  if (!url) return 0;
  const sql = neon(url);
  const rows = (await sql`
    SELECT COUNT(*)::int AS n FROM audit_embedding WHERE persona = ${personaSlug}
  `) as Array<{ n: number }>;
  return Number(rows[0]?.n ?? 0);
}

/**
 * Load the persona identity card.
 *
 * Source-of-truth order:
 *   1. DB `persona.profile` (admin-editable through `/admin/personas`)
 *   2. Vault README at `vaults/{slug}/README.md` (legacy / Obsidian mirror)
 *   3. `site-monitor/personas/{slug}.json` (original file format)
 *   4. Minimal fallback so the chat doesn't crash on an unknown slug
 *
 * Returns a plain-text multi-line block suitable for concatenation into
 * the persona's system prompt. Not cached across requests — the admin UI
 * needs edits to reflect on the next chat turn.
 */
export async function loadPersonaIdentity(personaSlug: string): Promise<string> {
  // 1. DB profile
  try {
    const rec = await getPersonaBySlug(personaSlug);
    if (rec?.profile) {
      const p = rec.profile;
      const id = p.identity;
      const lines = [
        `Name: ${id.name}`,
        `Age: ${id.age}, ${id.generation}, ${id.gender}`,
        `Style: ${id.style}`,
        `Shopping habits: ${id.shopping_habits}`,
        `Tech comfort: ${id.tech_comfort}`,
        `Focus areas: ${(id.focus_areas ?? []).join(", ")}`,
      ];
      if (p.notes && p.notes.trim()) {
        lines.push("", p.notes.trim());
      }
      return lines.join("\n");
    }
  } catch (err) {
    console.warn(`[persona-identity] DB lookup failed for ${personaSlug}:`, err);
  }

  // 2–3. Filesystem fallbacks (legacy personas with no profile yet).
  const repoRoot = path.resolve(process.cwd(), "..");
  const readmePath = path.join(repoRoot, "vaults", personaSlug, "README.md");
  const jsonPath = path.join(
    repoRoot,
    "site-monitor",
    "personas",
    `${personaSlug}.json`
  );
  if (fs.existsSync(readmePath)) {
    return fs.readFileSync(readmePath, "utf8");
  }
  if (fs.existsSync(jsonPath)) {
    const j = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    return [
      `Name: ${j.name}`,
      `Age: ${j.age}, ${j.generation}, ${j.gender}`,
      `Style: ${j.style}`,
      `Shopping habits: ${j.shopping_habits}`,
      `Tech comfort: ${j.tech_comfort}`,
      `Focus areas: ${(j.focus_areas ?? []).join(", ")}`,
    ].join("\n");
  }
  return `Persona slug: ${personaSlug} (identity card not found)`;
}
