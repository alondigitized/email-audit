// Producer-side DB writer for audits. Phase 2 of the foundation refactor:
// both daemons call upsertAuditRow() after their existing filesystem write
// so Postgres carries a mirror of site/content/audits/{slug}/audit.json.
// Phase 3 flips the site to read from Postgres; Phase 4 deletes the
// filesystem copy. Until then, this is the dual-write seam.

import { neon } from '@neondatabase/serverless';
import { auditDataSchema } from '../site/lib/schema/audit.mjs';
import { resolveBrandSlug } from './brands.mjs';
import { pingRevalidate } from './revalidate.mjs';

function db() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL_UNPOOLED or DATABASE_URL required');
  return neon(url);
}

/**
 * Parse "6/10" → 6. Returns null when the score isn't in that shape so the
 * caller (typed numeric column) can store null cleanly.
 */
export function parseScore(scoreStr) {
  if (typeof scoreStr !== 'string') return null;
  const m = scoreStr.match(/^\s*(-?\d+(?:\.\d+)?)\s*\//);
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}

/**
 * Pull the R2 object keys out of an audit payload into a compact catalog.
 * { render: "...", steps: [{ step, viewport, fullpage }, ...] }
 */
export function extractMediaKeys(data) {
  const assets = data?.assets ?? {};
  const out = {};
  if (assets.render_image_key) out.render = assets.render_image_key;
  if (Array.isArray(assets.journey_steps)) {
    const steps = [];
    for (const s of assets.journey_steps) {
      if (!s) continue;
      const entry = { step: s.step };
      if (s.viewport_screenshot_key) entry.viewport = s.viewport_screenshot_key;
      if (s.fullpage_screenshot_key) entry.fullpage = s.fullpage_screenshot_key;
      if (entry.viewport || entry.fullpage) steps.push(entry);
    }
    if (steps.length) out.steps = steps;
  }
  return out;
}

/**
 * UPSERT a single audit row. Idempotent — repeated calls on the same slug
 * replace data/media_keys/score/timestamp and bump updated_at. Caller
 * should have zod-validated `data` already; this re-parses defensively.
 */
export async function upsertAuditRow({ slug, data }) {
  const parsed = auditDataSchema.parse(data);
  const persona = parsed.persona ?? null;
  if (!persona) {
    throw new Error(`audit ${slug} missing persona — cannot upsert`);
  }
  const type = parsed.type ?? 'email';
  const timestamp = parsed.email?.timestamp_iso;
  if (!timestamp) {
    throw new Error(`audit ${slug} missing email.timestamp_iso — cannot upsert`);
  }
  const score = parseScore(parsed.review?.score);
  const mediaKeys = extractMediaKeys(parsed);

  const sql = db();
  // Resolve the persona's tenant_id inline via a scalar subquery so the
  // audit row carries it without a separate read round trip. Tenant-scoped
  // reads (lib/audits.ts) filter on tenant_id; missing it would hide the
  // row from its own tenant. The subquery yields NULL for dev/test setups
  // where the persona row hasn't been backfilled yet — same as before.
  await sql`
    INSERT INTO audit (slug, persona, type, timestamp, score, data, media_keys, tenant_id, updated_at)
    VALUES (${slug}, ${persona}, ${type}, ${timestamp}, ${score},
            ${JSON.stringify(parsed)}::jsonb, ${JSON.stringify(mediaKeys)}::jsonb,
            (SELECT tenant_id FROM persona WHERE slug = ${persona} LIMIT 1), NOW())
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

  // Writeback last-audit status so the admin UI shows "last audit 2 days
  // ago, score 7/10" without having to scan the audit table. Best-effort:
  // persona might not exist yet (extremely rare race), and the whole
  // status column is JSONB so shape changes can evolve without migration.
  // Single merge UPDATE — `||` shallow-merges the patch over existing keys
  // (right side wins), matching the old { ...current, ...next } read-modify-
  // write without the extra SELECT. Affects 0 rows if the persona is absent.
  try {
    const statusPatch = {
      last_audit_at: new Date().toISOString(),
      last_audit_slug: slug,
      last_audit_score: parsed.review?.score ?? null,
      last_journey_status: 'ok',
    };
    await sql`
      UPDATE persona
      SET last_status = COALESCE(last_status, '{}'::jsonb) || ${JSON.stringify(statusPatch)}::jsonb
      WHERE slug = ${persona}
    `;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`upsertAuditRow: persona.last_status writeback failed for ${slug}: ${msg.slice(0, 200)}`);
  }
}

/**
 * Delete an audit row. Used by verify-pipeline cleanup so mock audits
 * don't linger in the DB across test runs.
 */
export async function deleteAuditRow(slug) {
  const sql = db();
  await sql`DELETE FROM audit WHERE slug = ${slug}`;
}

/**
 * V3 dual-write companion to upsertAuditRow. Splits the same data into
 * one experience row (brand-side) + one reaction row (persona-side).
 * Returns the reaction.id so the embedder can attach reaction_embedding.
 *
 * Shipped during XR-C (dual-write window). Once XR-D flips the site to
 * read from these new tables and XR-F retires audit, this becomes the
 * sole writer. Idempotent on slug — repeated calls on the same audit
 * slug update the matching reaction + experience.
 *
 * messageId is best-effort — present for Cloudflare-routed inbound
 * email_message rows, NULL for legacy AgentMail polling and site-
 * journey audits. The partial unique index on
 * (persona_slug, message_id WHERE NOT NULL) dedups Cloudflare retries
 * without blocking legacy NULL rows.
 */
export async function upsertExperienceAndReaction({
  slug,
  data,
  messageId = null,
  rawKey = null,
}) {
  const parsed = auditDataSchema.parse(data);
  const persona = parsed.persona ?? null;
  if (!persona) {
    throw new Error(`reaction ${slug} missing persona — cannot upsert`);
  }
  const type = parsed.type ?? 'email';
  const timestamp = parsed.email?.timestamp_iso;
  if (!timestamp) {
    throw new Error(`reaction ${slug} missing email.timestamp_iso — cannot upsert`);
  }
  const score = parseScore(parsed.review?.score);

  // Brand-domain extraction matches the backfill heuristic — email.from
  // is "Brand <noreply@brand.com>" or just "noreply@brand.com".
  let brandDomain = null;
  const from = parsed.email?.from;
  if (from) {
    const m =
      from.match(/[<\s]([^<>\s@]+@([^<>\s]+))[>\s]?$/) ||
      from.match(/^([^<>\s@]+@([^<>\s]+))$/);
    if (m) brandDomain = m[2].toLowerCase().replace(/[>\s].*$/, '');
  }

  const sql = db();

  // Resolve the brand entity at write time so cross-channel brand views
  // include this row immediately: email via sender apex, site/inventory/qa
  // via the journey URL. resolveBrandSlug never mints brands — an unknown
  // sender stays NULL rather than a typo becoming an entity.
  let brandSlug = null;
  try {
    brandSlug =
      (await resolveBrandSlug(brandDomain)) ??
      (await resolveBrandSlug(parsed.assets?.webview_url));
  } catch (err) {
    console.warn(`brand resolution failed for ${slug}: ${String(err).slice(0, 120)}`);
  }

  // tenant_id is resolved inline via a scalar subquery on persona.slug in
  // each write below — no separate read round trip. Yields NULL when the
  // persona row isn't backfilled yet, matching the prior behaviour.
  //
  // Upsert experience by slug-derived key. The reaction holds the slug
  // (URL-friendly identifier); the experience is a 1-1 partner of the
  // reaction during this transition. Once a reaction starts re-reacting
  // to inherited experiences (post-v1), this 1-1 relationship breaks
  // and we'd dedup by (persona_slug, message_id) instead.
  //
  // Strategy: UPDATE the existing reaction's experience if one exists,
  // else INSERT a new experience and link via reaction.experience_id.
  // The decision SELECT also returns the reaction id so the success path
  // needs no trailing lookup; the INSERT path uses RETURNING instead.
  const existing = await sql`SELECT id, experience_id FROM reaction WHERE slug = ${slug} LIMIT 1`;

  let experienceId;
  let reactionId;
  if (existing.length > 0) {
    experienceId = existing[0].experience_id;
    reactionId = existing[0].id;
    await sql`
      UPDATE experience SET
        persona_slug = ${persona},
        tenant_id = (SELECT tenant_id FROM persona WHERE slug = ${persona} LIMIT 1),
        type = ${type},
        brand_domain = ${brandDomain},
        brand_slug = COALESCE(${brandSlug}, experience.brand_slug),
        message_id = ${messageId},
        raw_key = ${rawKey},
        received_at = ${timestamp},
        email_data = ${JSON.stringify(parsed.email ?? {})}::jsonb,
        qa_findings = ${JSON.stringify(parsed.qa ?? null)}::jsonb,
        assets = ${JSON.stringify(parsed.assets ?? {})}::jsonb,
        performance = ${JSON.stringify(parsed.performance ?? null)}::jsonb,
        inventory = ${JSON.stringify(parsed.inventory ?? null)}::jsonb,
        auto_confirm = COALESCE(${JSON.stringify(parsed.auto_confirm ?? null)}::jsonb, experience.auto_confirm),
        updated_at = NOW()
      WHERE id = ${experienceId}
    `;
    await sql`
      UPDATE reaction SET
        persona_slug = ${persona},
        tenant_id = (SELECT tenant_id FROM persona WHERE slug = ${persona} LIMIT 1),
        score = ${score},
        review_data = ${JSON.stringify(parsed.review ?? {})}::jsonb,
        updated_at = NOW()
      WHERE slug = ${slug}
    `;
  } else {
    const expRows = await sql`
      INSERT INTO experience
        (persona_slug, tenant_id, type, brand_domain, brand_slug, message_id, raw_key, received_at,
         email_data, qa_findings, assets, performance, inventory, auto_confirm)
      VALUES
        (${persona}, (SELECT tenant_id FROM persona WHERE slug = ${persona} LIMIT 1),
         ${type}, ${brandDomain}, ${brandSlug}, ${messageId}, ${rawKey}, ${timestamp},
         ${JSON.stringify(parsed.email ?? {})}::jsonb,
         ${JSON.stringify(parsed.qa ?? null)}::jsonb,
         ${JSON.stringify(parsed.assets ?? {})}::jsonb,
         ${JSON.stringify(parsed.performance ?? null)}::jsonb,
         ${JSON.stringify(parsed.inventory ?? null)}::jsonb,
         ${JSON.stringify(parsed.auto_confirm ?? null)}::jsonb)
      RETURNING id
    `;
    experienceId = expRows[0].id;
    const rxRows = await sql`
      INSERT INTO reaction
        (experience_id, persona_slug, slug, score, review_data, tenant_id)
      VALUES
        (${experienceId}, ${persona}, ${slug}, ${score},
         ${JSON.stringify(parsed.review ?? {})}::jsonb,
         (SELECT tenant_id FROM persona WHERE slug = ${persona} LIMIT 1))
      RETURNING id
    `;
    reactionId = rxRows[0]?.id ?? null;
  }

  // Best-effort: bust the site's per-persona audit-index cache and this
  // slug's detail cache so the new/updated audit shows up immediately.
  // No-op unless a live daemon set REVALIDATE_SITE_ON_PUBLISH. Fire-and-
  // forget — never awaited, so it can't slow or fail the write path.
  pingRevalidate([`audit-index:${persona}`, `audit:${slug}`]);

  return { reactionId: reactionId ?? null, experienceId };
}

/**
 * List every active persona that has a homepage configured. Used by the
 * homepage-sweep daemon. Filtering on JSON `profile.status` tolerates
 * legacy rows where `status` is missing (treat as active).
 */
/**
 * Active personas the homepage-sweep daemon should walk through.
 *
 * Inclusion rules:
 *   - profile.status is 'active' (or missing — legacy rows default to active)
 *   - profile.journey.site is a valid URL
 *   - profile.audit_kinds includes 'site' (or audit_kinds missing — legacy
 *     rows default to ['email', 'site'] for back-compat)
 *
 * The audit_kinds opt-out is what keeps inventory-producer personas
 * (ivy/ian/ida/ike-inventory) — which carry journey.site so the
 * inventory daemon's Playwright can reach skechers.com — out of the
 * homepage sweep. See site/lib/schema/persona.mjs::personaAuditKindSchema
 * and site/lib/schema/audit-types.md for the full contract.
 */
export async function listActivePersonasWithSite() {
  const sql = db();
  const rows = await sql`
    SELECT slug, name, short, profile
    FROM persona
    WHERE profile->>'status' = 'active'
       OR profile->>'status' IS NULL
    ORDER BY slug
  `;
  return rows
    .map((r) => ({
      slug: r.slug,
      name: r.name,
      short: r.short,
      profile: r.profile,
      site: r.profile?.journey?.site ?? null,
    }))
    .filter((p) => p.site && /^https?:\/\//.test(p.site))
    .filter((p) => {
      const kinds = p.profile?.audit_kinds;
      // Missing audit_kinds = legacy persona → default to email+site for
      // back-compat (existing brand personas keep getting homepage audits
      // without an explicit field).
      if (!Array.isArray(kinds)) return true;
      return kinds.includes('site');
    });
}

/**
 * Stamp the auto_confirm result onto an existing experience + the legacy
 * audit row by slug. Used by the email-monitor post-publish hook and the
 * one-shot backfill script. Idempotent — overwrites on each call.
 */
export async function upsertAutoConfirm({ slug, autoConfirm }) {
  const sql = db();
  const blob = JSON.stringify(autoConfirm ?? null);
  // Update the legacy audit.data->auto_confirm so re-renders out of the
  // legacy table see the same shape, then the experience column for v3.
  await sql`
    UPDATE audit
    SET data = jsonb_set(data, '{auto_confirm}', ${blob}::jsonb, true),
        updated_at = NOW()
    WHERE slug = ${slug}
  `;
  await sql`
    UPDATE experience e
    SET auto_confirm = ${blob}::jsonb,
        updated_at = NOW()
    FROM reaction r
    WHERE r.experience_id = e.id AND r.slug = ${slug}
  `;
}

/**
 * Upsert a reaction_embedding row. Mirrors the audit_embedding writer in
 * audit-pipeline/embed.mjs but keys on reaction_id instead of audit_slug.
 * Called from the embed step alongside the legacy audit_embedding write
 * so retrieval can flip from one to the other in XR-D without a daemon
 * restart.
 */
export async function upsertReactionEmbedding({ reactionId, persona, indexedText, embedding }) {
  if (!reactionId) return;
  const sql = db();
  // pgvector's `vector` type wants a '[a,b,c]' string literal — same
  // shape as audit_embedding's writer.
  const literal = `[${embedding.join(',')}]`;
  await sql`
    INSERT INTO reaction_embedding (reaction_id, persona, indexed_text, embedding)
    VALUES (${reactionId}, ${persona}, ${indexedText}, ${literal}::vector)
    ON CONFLICT (reaction_id) DO UPDATE SET
      persona = EXCLUDED.persona,
      indexed_text = EXCLUDED.indexed_text,
      embedding = EXCLUDED.embedding
  `;
}

/**
 * Summaries for a persona's audits, newest first. Used by the vault-writer
 * to pick "recent history" wikilinks. Shape matches AuditSummary.
 */
export async function listAuditSummariesForPersona(personaSlug, limit = 100) {
  const sql = db();
  const rows = await sql`
    SELECT data FROM audit
    WHERE persona = ${personaSlug}
    ORDER BY timestamp DESC
    LIMIT ${limit}
  `;
  return rows.map((r) => {
    const d = r.data;
    return {
      slug: d.slug,
      subject: d.email?.subject ?? '',
      from_display_name: d.email?.from_display_name ?? '',
      timestamp_iso: d.email?.timestamp_iso ?? null,
      score: d.review?.score ?? '',
      qa_summary: d.qa?.summary ?? null,
      has_image: !!d.assets?.render_image_key,
      type: d.type ?? 'email',
      persona: d.persona ?? null,
    };
  });
}

/**
 * True when DATABASE_URL is present. Callers (daemons today) use this to
 * skip DB writes gracefully in local dev without DB creds — the filesystem
 * publish path still works on its own during dual-write.
 */
export function dbConfigured() {
  return !!(process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL);
}
