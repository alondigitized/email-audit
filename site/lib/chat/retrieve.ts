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

// When a persona's reaction corpus is at or below this threshold, the chat
// route skips RAG entirely and stuffs every memory into the prompt. At
// ~MAX_SNIPPET_CHARS per memory and 40 memories, that's roughly 100-160k
// chars ≈ 25-40k tokens — comfortable headroom inside qwen2.5:14b's 128k
// window for identity + conversation + the reply itself. Above this,
// retrieval falls back to the top-K semantic + recency hybrid below.
export const STUFF_ALL_THRESHOLD = 40;

// Per-memory snippet cap. Chat retrieval used to use only the 1800-char
// indexed_text (the embedding source). We now hydrate from the full
// review markdown stored in `reaction.review_data.raw_markdown` — the same
// content the persona's vault note carries. Capped here so a stuff-all
// prompt with 40 memories stays under ~160k chars.
const MAX_SNIPPET_CHARS = 4000;

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

  // V3: retrieval grounds in the requesting persona's OWN reactions
  // only. Walker's accumulated reviews never ground a fork's chat, even
  // when the fork inherits the experience corpus — the fork's persona
  // has its own voice and answering as Walker would be misleading.
  // No expandReadableSlugs() — read-isolated.
  //
  // We pull `review_data->>'raw_markdown'` alongside `indexed_text` — the
  // raw markdown is the full review the persona wrote (same content as
  // the Obsidian vault note). It's much richer than the 1800-char
  // indexed_text and gives the persona real context to reason over at
  // chat time.
  const [semantic, recent] = (await Promise.all([
    sql`
      SELECT r.slug AS audit_slug,
             re.indexed_text,
             r.review_data->>'raw_markdown' AS raw_markdown,
             (re.embedding <=> ${literal}::vector) AS distance
      FROM reaction_embedding re
      JOIN reaction r ON r.id = re.reaction_id
      WHERE re.persona = ${personaSlug}
      ORDER BY re.embedding <=> ${literal}::vector
      LIMIT ${kSemantic}
    `,
    sql`
      SELECT r.slug AS audit_slug,
             re.indexed_text,
             r.review_data->>'raw_markdown' AS raw_markdown,
             (re.embedding <=> ${literal}::vector) AS distance
      FROM reaction_embedding re
      JOIN reaction r ON r.id = re.reaction_id
      JOIN experience e ON e.id = r.experience_id
      WHERE re.persona = ${personaSlug}
      ORDER BY e.received_at DESC
      LIMIT ${kRecent}
    `,
  ])) as Array<
    Array<{
      audit_slug: string;
      indexed_text: string;
      raw_markdown: string | null;
      distance: number;
    }>
  >;

  const seen = new Set<string>();
  const merged: RetrievedAudit[] = [];
  for (const r of [...semantic, ...recent]) {
    if (seen.has(r.audit_slug)) continue;
    seen.add(r.audit_slug);
    merged.push({
      slug: r.audit_slug,
      snippet: pickSnippet(r.raw_markdown, r.indexed_text),
      score: Number(r.distance),
    });
  }
  return merged;
}

// Prefer the rich review markdown (same content as the Obsidian vault
// note) over the compressed indexed_text. Falls back to indexed_text when
// raw_markdown is missing — pre-v3 reactions or any audit whose review
// pipeline didn't carry the full markdown forward.
function pickSnippet(
  rawMarkdown: string | null,
  indexedText: string
): string {
  const source = (rawMarkdown ?? "").trim() || indexedText;
  return source.slice(0, MAX_SNIPPET_CHARS);
}

/**
 * Stuff-all variant: skip retrieval entirely, return every reaction the
 * persona has authored, ordered most-recent-first. Used when the
 * corpus is small enough to fit in context (see STUFF_ALL_THRESHOLD).
 *
 * Walks `reaction` directly — does NOT go through `reaction_embedding` —
 * so a reaction without an embedding (pre-v3 row, embed step crashed)
 * still lands in the persona's memory. The chat is grounded by reading
 * the full review markdown, which doesn't depend on embeddings at all.
 */
export async function retrieveAllAudits(
  personaSlug: string
): Promise<RetrievedAudit[]> {
  const url = process.env.DATABASE_URL ?? process.env.DATABASE_URL_UNPOOLED;
  if (!url) throw new Error("DATABASE_URL not set");
  const sql = neon(url);
  const rows = (await sql`
    SELECT r.slug AS audit_slug,
           r.review_data->>'raw_markdown' AS raw_markdown
    FROM reaction r
    JOIN experience e ON e.id = r.experience_id
    WHERE r.persona_slug = ${personaSlug}
    ORDER BY e.received_at DESC
  `) as Array<{ audit_slug: string; raw_markdown: string | null }>;
  return rows.map((r) => ({
    slug: r.audit_slug,
    snippet: pickSnippet(r.raw_markdown, ""),
    // Score is irrelevant in stuff-all mode — kept for type compatibility.
    score: 0,
  }));
}

/**
 * Count how many experiences a persona remembers — surfaced as the
 * "Remembers N audits" indicator in the chat header AND as the STATS
 * total in the system prompt.
 *
 * Counts `reaction` rows (every review the persona has written), NOT
 * `reaction_embedding` rows. A reaction without an embedding is still a
 * memory: stuff-all retrieval reads the review markdown directly, and
 * the embedding-backed top-K path will pick it up the moment the daemon
 * (re)embeds. Counting reactions makes "memory" align with "reviewed."
 */
export async function getAuditMemoryCount(personaSlug: string): Promise<number> {
  const url = process.env.DATABASE_URL ?? process.env.DATABASE_URL_UNPOOLED;
  if (!url) return 0;
  const sql = neon(url);
  const rows = (await sql`
    SELECT COUNT(*)::int AS n FROM reaction WHERE persona_slug = ${personaSlug}
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
