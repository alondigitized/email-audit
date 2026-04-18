import fs from "node:fs";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

// How many audits we retrieve per turn. Tuned for Sonnet's context budget —
// 8 × ~800 tokens = ~6.5K tokens of retrieved memory, leaving plenty of room
// for identity card + conversation history + response.
export const RETRIEVAL_K = 8;

export type RetrievedAudit = {
  slug: string;
  snippet: string;
  score: number; // cosine distance; lower is more similar
};

const VOYAGE_URL = "https://api.voyageai.com/v1/embeddings";
const VOYAGE_MODEL = "voyage-3-large";

async function embedQuery(text: string): Promise<number[]> {
  const key = process.env.VOYAGE_API_KEY;
  if (!key) throw new Error("VOYAGE_API_KEY not set");
  const res = await fetch(VOYAGE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      input: [text],
      model: VOYAGE_MODEL,
      input_type: "query",
    }),
  });
  if (!res.ok) {
    throw new Error(`Voyage query embed failed: ${res.status}`);
  }
  const data = await res.json();
  return data.data[0].embedding;
}

/**
 * Retrieve the top-K audits most relevant to a query, scoped to one persona.
 * Uses pgvector cosine distance. Snippets are built from the indexed_text
 * we stored at pipeline time — no filesystem reads at chat time, so the
 * API stays fast and stateless.
 */
export async function retrieveRelevantAudits(
  personaSlug: string,
  query: string,
  k = RETRIEVAL_K
): Promise<RetrievedAudit[]> {
  const url = process.env.DATABASE_URL ?? process.env.DATABASE_URL_UNPOOLED;
  if (!url) throw new Error("DATABASE_URL not set");
  const sql = neon(url);
  const queryVec = await embedQuery(query);
  const literal = `[${queryVec.join(",")}]`;
  const rows = (await sql`
    SELECT audit_slug, indexed_text,
           (embedding <=> ${literal}::vector) AS distance
    FROM audit_embedding
    WHERE persona = ${personaSlug}
    ORDER BY embedding <=> ${literal}::vector
    LIMIT ${k}
  `) as Array<{ audit_slug: string; indexed_text: string; distance: number }>;

  return rows.map((r) => ({
    slug: r.audit_slug,
    snippet: r.indexed_text,
    score: Number(r.distance),
  }));
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
 * Load the persona identity card from the vault README. Falls back to the
 * site-monitor JSON profile if the vault file is missing. Cached by slug
 * because identity rarely changes mid-request.
 */
const identityCache = new Map<string, string>();
export function loadPersonaIdentity(personaSlug: string): string {
  if (identityCache.has(personaSlug)) {
    return identityCache.get(personaSlug)!;
  }
  const repoRoot = path.resolve(process.cwd(), "..");
  const readmePath = path.join(repoRoot, "vaults", personaSlug, "README.md");
  const jsonPath = path.join(
    repoRoot,
    "site-monitor",
    "personas",
    `${personaSlug}.json`
  );
  let identity = "";
  if (fs.existsSync(readmePath)) {
    identity = fs.readFileSync(readmePath, "utf8");
  } else if (fs.existsSync(jsonPath)) {
    const j = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    identity = [
      `Name: ${j.name}`,
      `Age: ${j.age}, ${j.generation}, ${j.gender}`,
      `Style: ${j.style}`,
      `Shopping habits: ${j.shopping_habits}`,
      `Tech comfort: ${j.tech_comfort}`,
      `Focus areas: ${(j.focus_areas ?? []).join(", ")}`,
    ].join("\n");
  } else {
    identity = `Persona slug: ${personaSlug} (identity card not found)`;
  }
  identityCache.set(personaSlug, identity);
  return identity;
}
