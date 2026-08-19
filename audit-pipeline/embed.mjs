// Persona-scoped embedding store. One row per audit in Neon's
// audit_embedding table (pgvector column, 1024 dims). Used by the chat API
// to retrieve relevant past experiences for a persona at reply time.
//
// Talks to any OpenAI-compatible embeddings endpoint via env:
//   LLM_BASE_URL     — e.g. http://localhost:11434/v1 for Ollama
//   LLM_API_KEY      — Ollama ignores this; set a dummy like "ollama"
//   LLM_EMBED_MODEL  — e.g. mxbai-embed-large (1024 dims)
//
// Default model outputs 1024 dims to match the schema. If you swap to a
// different-dim model, you MUST also alter audit_embedding.embedding and
// re-run the backfill.

import { neon } from '@neondatabase/serverless';

const DEFAULT_BASE_URL = 'http://localhost:11434/v1';
const DEFAULT_MODEL = 'mxbai-embed-large';
const EXPECTED_DIMS = 1024;

function cfg() {
  return {
    baseUrl: process.env.LLM_BASE_URL ?? DEFAULT_BASE_URL,
    apiKey: process.env.LLM_API_KEY ?? 'ollama',
    model: process.env.LLM_EMBED_MODEL ?? DEFAULT_MODEL,
  };
}

/**
 * Assemble a compact "indexed text" from an audit.json for embedding.
 * Includes the fields a persona is most likely to reason about when
 * answering a question: subject, sender, score, persona tag, exec summary,
 * what's-weak bullets, and a truncated head of the raw review.
 */
export function buildIndexedText(audit, personaSlug) {
  const email = audit?.email ?? {};
  const review = audit?.review ?? {};
  const sections = review.sections ?? {};
  const date = (email.timestamp_iso ?? '').slice(0, 10);
  const type = audit?.type ?? 'email';
  const typeLabel = type === 'site' ? 'Site journey' : 'Email audit';

  const parts = [
    `Persona: ${personaSlug}`,
    `Type: ${typeLabel}`,
    `Date: ${date}`,
    `Subject: ${email.subject ?? ''}`,
    `Sender: ${email.from_display_name ?? email.from ?? ''}`,
    `Score: ${review.score ?? ''}`,
  ];

  const pushBlock = (label, items) => {
    if (!Array.isArray(items) || items.length === 0) return;
    parts.push(`\n${label}:`);
    for (const item of items) {
      const s = String(item).trim();
      if (s) parts.push(s.startsWith('-') ? s : `- ${s}`);
    }
  };
  pushBlock('Executive summary', sections.executive_summary);
  pushBlock("What's weak", sections.whats_weak);
  pushBlock('Recommendations', sections.recommendations);

  const hasSections =
    (sections.executive_summary?.length ?? 0) +
      (sections.whats_weak?.length ?? 0) +
      (sections.recommendations?.length ?? 0) >
    0;
  if (!hasSections && review.raw_markdown) {
    parts.push('\nReview:');
    parts.push(String(review.raw_markdown).slice(0, 800));
  }

  // mxbai-embed-large has a 512-token context (~1800-2000 chars). 1800 was
  // the original cap but ~1% of inputs (dense markdown, multi-byte chars)
  // still tripped the 400 "input length exceeds the context length" error.
  // 1500 leaves a margin without hurting recall meaningfully.
  const MAX_CHARS = 1500;
  return parts.join('\n').slice(0, MAX_CHARS);
}

/**
 * Embed text via the configured OpenAI-compatible endpoint. Returns a
 * number[] of EXPECTED_DIMS length. Throws on protocol failure.
 */
export async function embed(text) {
  const { baseUrl, apiKey, model } = cfg();
  const res = await fetch(`${baseUrl}/embeddings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ model, input: text }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`embeddings ${res.status}: ${body.slice(0, 300)}`);
  }
  const data = await res.json();
  const vec = data?.data?.[0]?.embedding;
  if (!Array.isArray(vec)) {
    throw new Error('embeddings endpoint returned unexpected shape');
  }
  if (vec.length !== EXPECTED_DIMS) {
    throw new Error(
      `embedding dim ${vec.length} != schema ${EXPECTED_DIMS} (model ${model}). Alter audit_embedding.embedding or switch model.`,
    );
  }
  return vec;
}

/**
 * Upsert an embedding row for an audit. Idempotent.
 */
export async function upsertAuditEmbedding({
  auditSlug,
  persona,
  indexedText,
  embedding,
}) {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL_UNPOOLED or DATABASE_URL required');
  const sql = neon(url);
  const literal = `[${embedding.join(',')}]`;
  await sql`
    INSERT INTO audit_embedding (audit_slug, persona, indexed_text, embedding)
    VALUES (${auditSlug}, ${persona}, ${indexedText}, ${literal}::vector)
    ON CONFLICT (audit_slug) DO UPDATE SET
      persona = EXCLUDED.persona,
      indexed_text = EXCLUDED.indexed_text,
      embedding = EXCLUDED.embedding,
      created_at = NOW()
  `;
}

/**
 * End-to-end: build indexed text, embed, upsert. Returns gracefully if the
 * endpoint isn't reachable (e.g. Ollama not running) so the pipeline keeps
 * publishing audits even when the local model is down.
 *
 * V3 dual-write: when `reactionId` is provided, ALSO upserts the
 * reaction_embedding row. The audit_embedding write stays during the
 * 7-day legacy retention window post-XR-F.
 */
// Embed-step retry policy: 3 attempts, 2s/4s back-off. Most embed
// failures are "Ollama just loaded the chat model and embed is queued"
// or transient Tailscale-Funnel hiccups — both clear up in seconds.
// Without retries here, ~1% of audits silently land without embeddings
// and never enter chat retrieval until a manual backfill.
const EMBED_RETRY_DELAYS_MS = [0, 2_000, 4_000];

async function embedWithRetry(text) {
  let lastErr;
  for (let i = 0; i < EMBED_RETRY_DELAYS_MS.length; i++) {
    if (EMBED_RETRY_DELAYS_MS[i] > 0)
      await new Promise((r) => setTimeout(r, EMBED_RETRY_DELAYS_MS[i]));
    try {
      return await embed(text);
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr;
}

export async function embedAndStoreAudit({ audit, personaSlug, reactionId = null }) {
  try {
    const text = buildIndexedText(audit, personaSlug);
    const vec = await embedWithRetry(text);
    // reaction_embedding is the PRIMARY store (chat retrieval reads it).
    // It was the "mirror" during the XR-C dual-write window; roles flipped
    // when legacy writes were gated off (2026-08-19) — audit_embedding has
    // no readers and each row is paid for twice on Neon.
    if (reactionId) {
      const { upsertReactionEmbedding } = await import('./publish.mjs');
      await upsertReactionEmbedding({
        reactionId,
        persona: personaSlug,
        indexedText: text,
        embedding: vec,
      });
    }
    // Legacy audit_embedding write — also the fallback when a caller has no
    // reactionId, so an embedding always lands somewhere backfillable.
    if (process.env.LEGACY_AUDIT_WRITES === '1' || !reactionId) {
      await upsertAuditEmbedding({
        auditSlug: audit.slug,
        persona: personaSlug,
        indexedText: text,
        embedding: vec,
      });
    }
    return { embedded: true };
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    // Surface loudly — silent failure is what created the 362-row
    // embedding backlog. Caller may still swallow, but at least the
    // log line shows up for monitoring.
    console.error(
      `embedAndStoreAudit: PERMANENT FAIL for ${audit?.slug ?? 'unknown'} (${personaSlug}) after retries: ${reason.slice(0, 200)}`,
    );
    return { embedded: false, reason };
  }
}

export async function deleteAuditEmbedding(auditSlug) {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) return;
  const sql = neon(url);
  await sql`DELETE FROM audit_embedding WHERE audit_slug = ${auditSlug}`;
}
