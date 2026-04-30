import { generateText, embed } from "ai";
import { sql as drizzleSql } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { chatModel, embeddingModel } from "./provider";
import { eq } from "drizzle-orm";
import { personas } from "@/lib/db/client";

// At least this many reactions for a (persona, brand) pair before a
// synthesis is worth writing. Below this the persona has too thin a
// view to form a coherent POV.
const MIN_REACTIONS_FOR_SYNTHESIS = 5;

// Cap how much reaction prose we feed the summarizer per brand. Each
// review averages ~3000 chars; 30 reactions × 3000 chars = 90k chars.
const MAX_REACTION_INPUT_CHARS = 90_000;

export type SynthesisResult = {
  personaSlug: string;
  brandDomain: string;
  status: "synthesized" | "skipped" | "failed";
  reason?: string;
};

/**
 * Find (persona, brand) pairs that need a fresh synthesis: enough
 * reactions to be worth writing AND either no existing synthesis or
 * the synthesis is stale (covers fewer reactions than currently exist).
 */
async function findStaleSyntheses(limit = 10): Promise<
  Array<{
    personaSlug: string;
    brandDomain: string;
    tenantId: string | null;
    reactionCount: number;
    coverage: number;
  }>
> {
  const rows = await db.execute(drizzleSql`
    SELECT r.persona_slug      AS persona_slug,
           lower(e.brand_domain) AS brand_domain,
           r.tenant_id          AS tenant_id,
           COUNT(*)::int        AS reaction_count,
           COALESCE(MAX(ps.reaction_count), 0)::int AS coverage
    FROM reaction r
    JOIN experience e ON e.id = r.experience_id
    LEFT JOIN persona_synthesis ps
      ON ps.persona_slug = r.persona_slug
      AND ps.brand_domain = lower(e.brand_domain)
    WHERE e.brand_domain IS NOT NULL
    GROUP BY r.persona_slug, lower(e.brand_domain), r.tenant_id
    HAVING COUNT(*) >= ${MIN_REACTIONS_FOR_SYNTHESIS}
       AND COUNT(*) > COALESCE(MAX(ps.reaction_count), 0)
    ORDER BY (COUNT(*) - COALESCE(MAX(ps.reaction_count), 0)) DESC
    LIMIT ${limit}
  `);
  return rows.rows.map((r) => ({
    personaSlug: r.persona_slug as string,
    brandDomain: r.brand_domain as string,
    tenantId: (r.tenant_id as string | null) ?? null,
    reactionCount: Number(r.reaction_count),
    coverage: Number(r.coverage),
  }));
}

async function loadPersonaName(slug: string): Promise<string> {
  const [p] = await db
    .select({ name: personas.name })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  return p?.name ?? slug;
}

async function loadReactionsForBrand(
  personaSlug: string,
  brandDomain: string
): Promise<{
  reactions: Array<{ slug: string; received_at: Date; raw_markdown: string }>;
  newest: Date | null;
}> {
  const rows = await db.execute(drizzleSql`
    SELECT r.slug                                AS slug,
           e.received_at                         AS received_at,
           COALESCE(r.review_data->>'raw_markdown', '') AS raw_markdown
    FROM reaction r
    JOIN experience e ON e.id = r.experience_id
    WHERE r.persona_slug = ${personaSlug}
      AND lower(e.brand_domain) = ${brandDomain}
    ORDER BY e.received_at ASC
  `);
  const reactions = (rows.rows ?? []).map((r) => ({
    slug: r.slug as string,
    received_at: new Date(r.received_at as string),
    raw_markdown: String(r.raw_markdown ?? ""),
  }));
  const newest =
    reactions.length > 0 ? reactions[reactions.length - 1].received_at : null;
  return { reactions, newest };
}

function buildSynthesisPrompt(
  personaName: string,
  brandLabel: string,
  reactions: Array<{ slug: string; received_at: Date; raw_markdown: string }>
): string {
  const dateRange = reactions.length
    ? `${reactions[0].received_at.toISOString().slice(0, 10)} → ${reactions[reactions.length - 1].received_at.toISOString().slice(0, 10)}`
    : "—";
  const transcripts = reactions
    .map(
      (r, i) =>
        `--- Review ${i + 1} (${r.received_at.toISOString().slice(0, 10)}, ${r.slug}) ---\n${r.raw_markdown.trim()}`
    )
    .join("\n\n")
    .slice(0, MAX_REACTION_INPUT_CHARS);

  return `You are ${personaName}. Below are your own past reviews of emails from ${brandLabel} (${dateRange}, ${reactions.length} reviews). Write a synthesis — your refined point of view on this brand after seeing them all.

Goals:
- Speak as YOURSELF, in first person ("I", "my"). Not a third-party report.
- Identify the patterns: what does this brand consistently get right? Where do they keep tripping? What annoys you across multiple emails?
- Reference specific moments where useful, but the synthesis should feel like a refined POV, not a list of summaries.
- Be honest about your taste — don't both-sides everything. If you're tired of their templates, say so.
- 3-5 short paragraphs. No bullet lists. No markdown headings.

Output exactly two sections separated by a single blank line:

1. A 5-9 word title naming your POV (no quotes, no trailing punctuation).
2. The synthesis prose itself.

YOUR REVIEWS:
${transcripts}`;
}

function splitTitleAndBody(text: string): { title: string; body: string } {
  const trimmed = text.trim();
  const blank = trimmed.indexOf("\n\n");
  if (blank === -1) {
    const nl = trimmed.indexOf("\n");
    if (nl === -1) return { title: trimmed.slice(0, 120), body: trimmed };
    return {
      title: trimmed.slice(0, nl).trim().slice(0, 120),
      body: trimmed.slice(nl + 1).trim(),
    };
  }
  const title = trimmed
    .slice(0, blank)
    .replace(/^["'`]+|["'`]+$/g, "")
    .replace(/\.+$/, "")
    .trim()
    .slice(0, 120);
  const body = trimmed.slice(blank + 2).trim();
  return { title, body };
}

function brandLabel(brandDomain: string): string {
  const stripped = brandDomain
    .replace(
      /^(em|emails|email|mail|mailer|news|newsletter|track|click|links|bounce)\./i,
      ""
    )
    .replace(/\.[^.]+$/, "");
  if (!stripped) return brandDomain;
  return stripped.charAt(0).toUpperCase() + stripped.slice(1);
}

export async function synthesizeForBrand(args: {
  personaSlug: string;
  brandDomain: string;
  tenantId: string | null;
}): Promise<SynthesisResult> {
  const { personaSlug, brandDomain, tenantId } = args;
  const { reactions, newest } = await loadReactionsForBrand(
    personaSlug,
    brandDomain
  );
  if (reactions.length < MIN_REACTIONS_FOR_SYNTHESIS) {
    return {
      personaSlug,
      brandDomain,
      status: "skipped",
      reason: `${reactions.length} reactions < ${MIN_REACTIONS_FOR_SYNTHESIS}`,
    };
  }

  const personaName = await loadPersonaName(personaSlug);
  const prompt = buildSynthesisPrompt(personaName, brandLabel(brandDomain), reactions);

  let raw: string;
  try {
    const result = await generateText({
      model: chatModel(),
      prompt,
      temperature: 0.4,
      maxOutputTokens: 1200,
    });
    raw = result.text;
  } catch (err) {
    return {
      personaSlug,
      brandDomain,
      status: "failed",
      reason: `summarize: ${err instanceof Error ? err.message : String(err)}`,
    };
  }
  const { title, body } = splitTitleAndBody(raw);
  if (!body) {
    return {
      personaSlug,
      brandDomain,
      status: "failed",
      reason: "empty synthesis body",
    };
  }

  const embedText =
    `Synthesis — ${personaName} on ${brandLabel(brandDomain)}\n\n${title}\n\n${body}`.slice(
      0,
      1500
    );
  let embedding: number[];
  try {
    const r = await embed({ model: embeddingModel(), value: embedText });
    embedding = r.embedding;
  } catch (err) {
    return {
      personaSlug,
      brandDomain,
      status: "failed",
      reason: `embed: ${err instanceof Error ? err.message : String(err)}`,
    };
  }

  const literal = `[${embedding.join(",")}]`;
  await db.execute(drizzleSql`
    INSERT INTO persona_synthesis
      (persona_slug, brand_domain, tenant_id, title, summary, embedding,
       reaction_count, through_received_at, created_at, updated_at)
    VALUES
      (${personaSlug}, ${brandDomain}, ${tenantId}, ${title}, ${body},
       ${literal}::vector, ${reactions.length}, ${newest?.toISOString() ?? null},
       NOW(), NOW())
    ON CONFLICT (persona_slug, brand_domain) DO UPDATE SET
      tenant_id = EXCLUDED.tenant_id,
      title = EXCLUDED.title,
      summary = EXCLUDED.summary,
      embedding = EXCLUDED.embedding,
      reaction_count = EXCLUDED.reaction_count,
      through_received_at = EXCLUDED.through_received_at,
      vault_synced_at = NULL,
      updated_at = NOW()
  `);

  return { personaSlug, brandDomain, status: "synthesized" };
}

export async function runStaleSyntheses(batch = 5): Promise<SynthesisResult[]> {
  const stale = await findStaleSyntheses(batch);
  const out: SynthesisResult[] = [];
  for (const s of stale) {
    try {
      out.push(
        await synthesizeForBrand({
          personaSlug: s.personaSlug,
          brandDomain: s.brandDomain,
          tenantId: s.tenantId,
        })
      );
    } catch (err) {
      out.push({
        personaSlug: s.personaSlug,
        brandDomain: s.brandDomain,
        status: "failed",
        reason: err instanceof Error ? err.message : String(err),
      });
    }
  }
  return out;
}
