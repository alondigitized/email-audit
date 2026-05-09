// Industry-persona fan-out for inbound emails.
//
// Brand personas (kind='brand') own AgentMail inboxes and produce one
// audit per incoming email. Industry personas (kind='industry') do NOT
// own inboxes — they're cross-brand lenses scoped to a tenant + industry
// tag. After a brand persona's email lands and publishSite() finishes,
// this module:
//
//   1. Lists all active industry personas matching the brand persona's
//      tenant + industry (via persona_template.industry).
//   2. Per industry persona, the daemon regenerates a new content review
//      (industry voice) + reuses the technical review (persona-agnostic),
//      then calls publishIndustryReaction() here to:
//         - write a new audit row (legacy `audit` table) for the
//           industry persona,
//         - insert a new `reaction` pointing at the brand's already-
//           created `experience` row (1 experience per inbox event,
//           N reactions across personas — the v3 design),
//         - write a vault note under vaults/{industry-slug}/audits/.
//
// Best-effort: failures here log and continue. The brand audit is
// already durable before fanout runs.

import fs from 'fs';
import path from 'path';
import { neon } from '@neondatabase/serverless';
import { auditDataSchema } from '../site/lib/schema/audit.mjs';
import { buildAuditData } from './extract.mjs';
import { extractMediaKeys, parseScore } from './publish.mjs';
import { writeVaultNote } from './vault-writer.mjs';

function db() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL_UNPOOLED or DATABASE_URL required');
  return neon(url);
}

/**
 * For a brand persona slug, return the list of active industry personas
 * that should fan-out audit this email. Match key:
 *
 *   industry_persona.tenant_id == brand_persona.tenant_id
 *   industry_persona.industry   == brand_persona.template.industry
 *
 * Returns [] when:
 *   - brand persona row missing
 *   - brand persona has no template_slug (legacy direct persona)
 *   - no active industry personas in that tenant+industry
 */
export async function listIndustryPersonasForBrand(brandPersonaSlug) {
  if (!brandPersonaSlug) return [];
  const sql = db();
  const rows = await sql`
    SELECT ip.slug, ip.name, ip.short, ip.profile, ip.industry, ip.tenant_id
    FROM persona ip
    JOIN persona bp ON bp.slug = ${brandPersonaSlug}
    JOIN persona_template t ON t.slug = bp.template_slug
    WHERE ip.kind = 'industry'
      AND ip.tenant_id = bp.tenant_id
      AND ip.industry = t.industry
      AND COALESCE((ip.profile->>'status'), 'active') <> 'draft'
  `;
  return rows.map((r) => ({
    slug: r.slug,
    name: r.name,
    short: r.short,
    industry: r.industry,
    tenantId: r.tenant_id,
    profile: r.profile,
  }));
}

/**
 * Reshape a persona DB row's profile into the flat shape buildContentPrompt
 * in email-monitor expects (mirrors loadPersona's path-2 reshaping).
 */
export function flattenPersonaProfileForPrompt(slug, name, profile) {
  if (!profile?.identity) return null;
  const id = profile.identity;
  return {
    slug,
    name: name ?? id.name,
    age: id.age,
    generation: id.generation,
    gender: id.gender,
    style: id.style,
    shopping_habits: id.shopping_habits,
    tech_comfort: id.tech_comfort,
    focus_areas: id.focus_areas ?? [],
    site: profile.journey?.site ?? null,
    search_term: profile.journey?.search_term ?? null,
    category_path: profile.journey?.category_path ?? [],
  };
}

/**
 * Mint a stable per-fan-out slug from the brand audit slug + the
 * industry persona's short label. Determinism matters: re-running the
 * fanout for the same email + same industry persona must hit the same
 * slug so upserts are idempotent and we don't pile up duplicate rows.
 *
 *   2026-05-08-fresh-friday-deals-inside  +  ines-counter-fap6e
 *   ->  2026-05-08-fresh-friday-deals-inside--ines-counter-fap6e
 */
export function industryReactionSlug(brandAuditSlug, industryPersonaSlug) {
  return `${brandAuditSlug}--${industryPersonaSlug}`;
}

/**
 * Persist an industry persona's reaction to an email the brand already
 * audited. Writes:
 *
 *   1. Legacy `audit` row (full audit-data) keyed at industryReactionSlug.
 *   2. New `reaction` row pointing at the brand's existing `experience`
 *      via message_id lookup. If no experience match (rare — race or
 *      legacy AgentMail audit without message_id), falls back to creating
 *      a sibling experience scoped to the industry persona.
 *   3. Vault note under vaults/{industry-slug}/audits/{slug}.md.
 *
 * Idempotent: re-running on the same (brand-slug, industry-persona) pair
 * upserts the audit row and updates the reaction's review_data in place.
 *
 * Returns { auditSlug, reactionId } on success.
 *
 * Throws on hard failures so the daemon's per-fanout try/catch can log
 * without failing the whole brand pipeline.
 */
export async function publishIndustryReaction({
  brandPersonaSlug,
  brandAuditSlug,
  industryPersona, // { slug, name, short, industry, tenantId, profile }
  reviewText, // full merged industry review (content + technical)
  qaReport,
  msg,
  artifactDir,
  messageId = null,
  repoRoot,
}) {
  if (!brandPersonaSlug || !brandAuditSlug || !industryPersona?.slug) {
    throw new Error('publishIndustryReaction: missing required args');
  }
  if (!reviewText) {
    throw new Error('publishIndustryReaction: empty review text');
  }

  const auditSlug = industryReactionSlug(brandAuditSlug, industryPersona.slug);

  // Build audit-data with the industry persona stamped as `persona`.
  // entry.artifactDir lets buildAuditData find render.png / webview-url.txt
  // alongside the brand's artifacts. The render image is shared (same email).
  const data = buildAuditData({
    entry: { persona: industryPersona.slug, artifactDir },
    msg,
    reviewText,
    qaReport,
    slug: auditSlug,
  });

  // Carry the brand's render_image_key forward so the share/audit page
  // doesn't 404 on the screenshot. The brand audit already uploaded the
  // PNG to R2 under its own slug; reuse that key (R2 reads are global).
  // We don't re-upload — same bytes, same key.
  try {
    const sql = db();
    const brandRow = await sql`
      SELECT media_keys FROM audit WHERE slug = ${brandAuditSlug} LIMIT 1
    `;
    const brandRender = brandRow[0]?.media_keys?.render;
    if (brandRender) {
      data.assets = data.assets ?? {};
      data.assets.render_image_key = brandRender;
    }
  } catch (err) {
    console.warn('industry-fanout: brand render key lookup failed', String(err).slice(0, 200));
  }

  auditDataSchema.parse(data);

  // Persist alongside the brand artifact for re-run support / debugging.
  // File name shape: audit-data--<industry-slug>.json (so the brand's
  // canonical audit-data.json stays untouched).
  if (artifactDir && fs.existsSync(artifactDir)) {
    const sidecarPath = path.join(
      artifactDir,
      `audit-data--${industryPersona.slug}.json`
    );
    fs.writeFileSync(sidecarPath, JSON.stringify(data, null, 2));
  }

  const sql = db();
  const score = parseScore(data.review?.score);
  const mediaKeys = extractMediaKeys(data);
  const tenantId = industryPersona.tenantId ?? null;
  const timestamp = data.email?.timestamp_iso;
  if (!timestamp) {
    throw new Error(`industry-fanout: ${auditSlug} missing email.timestamp_iso`);
  }

  // 1) Legacy audit row — idempotent on slug.
  await sql`
    INSERT INTO audit (slug, persona, type, timestamp, score, data, media_keys, tenant_id, updated_at)
    VALUES (${auditSlug}, ${industryPersona.slug}, 'email', ${timestamp}, ${score},
            ${JSON.stringify(data)}::jsonb, ${JSON.stringify(mediaKeys)}::jsonb, ${tenantId}, NOW())
    ON CONFLICT (slug) DO UPDATE SET
      persona = EXCLUDED.persona,
      type = EXCLUDED.type,
      timestamp = EXCLUDED.timestamp,
      score = EXCLUDED.score,
      data = EXCLUDED.data,
      media_keys = EXCLUDED.media_keys,
      tenant_id = EXCLUDED.tenant_id,
      updated_at = NOW()
  `;

  // 2) Reaction pointing at the brand's existing experience. Lookup by
  // (persona_slug=brand, message_id) — the most reliable join key. Fall
  // back to (persona_slug=brand, slug=brandAuditSlug) by joining through
  // the brand's reaction row when message_id is NULL (legacy AgentMail).
  let experienceId = null;
  if (messageId) {
    const expRows = await sql`
      SELECT id FROM experience
      WHERE persona_slug = ${brandPersonaSlug} AND message_id = ${messageId}
      ORDER BY received_at DESC LIMIT 1
    `;
    experienceId = expRows[0]?.id ?? null;
  }
  if (!experienceId) {
    const fallback = await sql`
      SELECT e.id FROM experience e
      JOIN reaction r ON r.experience_id = e.id
      WHERE r.slug = ${brandAuditSlug}
      LIMIT 1
    `;
    experienceId = fallback[0]?.id ?? null;
  }

  // Last resort — no brand experience to attach to. Insert a sibling
  // experience scoped to the industry persona so the reaction has a
  // valid FK target. Mirrors upsertExperienceAndReaction's INSERT branch.
  if (!experienceId) {
    const fromAddr = String(msg?.from_ || msg?.from || '');
    let brandDomain = null;
    const m =
      fromAddr.match(/[<\s]([^<>\s@]+@([^<>\s]+))[>\s]?$/) ||
      fromAddr.match(/^([^<>\s@]+@([^<>\s]+))$/);
    if (m) brandDomain = m[2].toLowerCase().replace(/[>\s].*$/, '');
    const ins = await sql`
      INSERT INTO experience
        (persona_slug, tenant_id, type, brand_domain, message_id, received_at,
         email_data, qa_findings, assets)
      VALUES
        (${industryPersona.slug}, ${tenantId}, 'email', ${brandDomain}, ${messageId}, ${timestamp},
         ${JSON.stringify(data.email ?? {})}::jsonb,
         ${JSON.stringify(data.qa ?? null)}::jsonb,
         ${JSON.stringify(data.assets ?? {})}::jsonb)
      RETURNING id
    `;
    experienceId = ins[0].id;
  }

  // Upsert reaction by slug. ON CONFLICT (slug) keeps the reaction.id
  // stable across re-runs so reaction_embedding stays attached.
  const reactionUpsert = await sql`
    INSERT INTO reaction
      (experience_id, persona_slug, slug, score, review_data, tenant_id)
    VALUES
      (${experienceId}, ${industryPersona.slug}, ${auditSlug}, ${score},
       ${JSON.stringify(data.review ?? {})}::jsonb, ${tenantId})
    ON CONFLICT (slug) DO UPDATE SET
      experience_id = EXCLUDED.experience_id,
      persona_slug = EXCLUDED.persona_slug,
      score = EXCLUDED.score,
      review_data = EXCLUDED.review_data,
      tenant_id = EXCLUDED.tenant_id,
      updated_at = NOW()
    RETURNING id
  `;
  const reactionId = reactionUpsert[0]?.id ?? null;

  // 3) Vault note. Best-effort — failures here are logged but not thrown,
  // matching the brand pipeline's vault-write semantics.
  if (repoRoot) {
    try {
      await writeVaultNote({
        auditData: data,
        personaSlug: industryPersona.slug,
        repoRoot,
        reactionId,
      });
    } catch (err) {
      console.warn('industry-fanout: vault write failed', String(err).slice(0, 200));
    }
  }

  return { auditSlug, reactionId };
}
