// Persona-scoped embedding store. One row per audit in Neon's
// audit_embedding table (pgvector column, 1024 dims). Used by the chat API
// to retrieve relevant past experiences for a persona at reply time.
//
// Uses Voyage AI's voyage-3-large model (Anthropic's recommended retrieval
// partner). Small, pure module — imported by vault-writer.mjs (live path)
// and backfill-embeddings.mjs (one-shot).

import { neon } from '@neondatabase/serverless';

const VOYAGE_URL = 'https://api.voyageai.com/v1/embeddings';
const VOYAGE_MODEL = 'voyage-3-large';
const VOYAGE_DIMS = 1024;

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

  // If sections are empty (site journeys mostly), fall back to the raw review head.
  const hasSections =
    (sections.executive_summary?.length ?? 0) +
      (sections.whats_weak?.length ?? 0) +
      (sections.recommendations?.length ?? 0) >
    0;
  if (!hasSections && review.raw_markdown) {
    parts.push('\nReview:');
    parts.push(String(review.raw_markdown).slice(0, 1400));
  }

  return parts.join('\n').slice(0, 8000); // hard cap to control token cost
}

/**
 * Embed a single text via Voyage. Returns a 1024-length Float32Array.
 * Throws if VOYAGE_API_KEY isn't set or the API returns non-200.
 */
export async function embed(text) {
  const apiKey = process.env.VOYAGE_API_KEY;
  if (!apiKey) throw new Error('VOYAGE_API_KEY is not set');
  const res = await fetch(VOYAGE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      input: [text],
      model: VOYAGE_MODEL,
      input_type: 'document',
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Voyage ${res.status}: ${body.slice(0, 300)}`);
  }
  const data = await res.json();
  const vec = data?.data?.[0]?.embedding;
  if (!Array.isArray(vec) || vec.length !== VOYAGE_DIMS) {
    throw new Error(`Voyage returned unexpected shape (len=${vec?.length ?? '?'})`);
  }
  return vec;
}

/**
 * Embed query text for retrieval (uses input_type=query). Same shape.
 */
export async function embedQuery(text) {
  const apiKey = process.env.VOYAGE_API_KEY;
  if (!apiKey) throw new Error('VOYAGE_API_KEY is not set');
  const res = await fetch(VOYAGE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      input: [text],
      model: VOYAGE_MODEL,
      input_type: 'query',
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Voyage ${res.status}: ${body.slice(0, 300)}`);
  }
  const data = await res.json();
  return data.data[0].embedding;
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
  // pgvector accepts the literal string `[0.1,0.2,...]`
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
 * End-to-end: build indexed text from audit json, embed via Voyage, upsert.
 * Returns { embedded: true } on success, { embedded: false, reason } on
 * graceful skip (missing key). Throws on hard errors.
 */
export async function embedAndStoreAudit({ audit, personaSlug }) {
  if (!process.env.VOYAGE_API_KEY) {
    return { embedded: false, reason: 'no_voyage_key' };
  }
  const text = buildIndexedText(audit, personaSlug);
  const vec = await embed(text);
  await upsertAuditEmbedding({
    auditSlug: audit.slug,
    persona: personaSlug,
    indexedText: text,
    embedding: vec,
  });
  return { embedded: true };
}

/**
 * Delete the embedding for a slug (used by verify-pipeline cleanup and
 * future audit-revocation flows).
 */
export async function deleteAuditEmbedding(auditSlug) {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) return;
  const sql = neon(url);
  await sql`DELETE FROM audit_embedding WHERE audit_slug = ${auditSlug}`;
}
