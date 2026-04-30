import { inArray, desc, eq, and } from "drizzle-orm";
import { db, experiences, reactions } from "@/lib/db/client";
import {
  auditDataSchema,
  type AuditData,
  type AuditSummary,
} from "@/lib/schema/audit";
import {
  getAllPersonas,
  personaColor,
  type PersonaRecord,
} from "@/lib/personas-db";

// V3 read path: reactions are the unit of display, joined to their
// experience for the brand-side context (subject, render, qa).
//
// Read semantics:
//   - reactions are persona-OWNED — a fork only sees its own. No
//     expandReadableSlugs() expansion here. Walker's accumulated
//     reviews stay private to the walker persona row in Alon's tenant;
//     a walker-skechers fork sees zero of them (fresh slate by design).
//   - experiences are persona-SHARED via template_slug, but they only
//     surface to the user through their own reactions today. Inherited
//     experiences without a reaction are not shown on /audits in v1.
//
// To keep the entire downstream UI stack stable, this module
// reconstructs an `AuditData`-shaped object from the joined rows. The
// `toSummary` mapping below and every consumer in app/audits/* keep
// working unchanged. Once the legacy `audit` table drops in XR-F+7
// days, callers should migrate to the new reaction-first shapes.

function logDrift(where: string, slug: string, error: unknown) {
  const dev = process.env.NODE_ENV !== "production";
  const ctx = `[schema-drift] ${where} slug=${slug}`;
  if (dev) {
    console.warn(ctx, error);
  } else {
    const message =
      error && typeof error === "object" && "issues" in error
        ? (
            error as { issues: Array<{ path: unknown[]; code: string }> }
          ).issues
            .map((i) => i.path.join(".") + ":" + i.code)
            .slice(0, 3)
            .join(",")
        : String(error);
    console.warn(ctx, message);
  }
}

// Reconstruct the legacy AuditData blob from a (reaction, experience)
// join. Keeps toSummary() and the audit-detail page working unchanged.
function joinedRowToAuditData(row: {
  slug: string;
  type: string;
  reactionPersona: string;
  reviewData: unknown;
  emailData: unknown;
  qaFindings: unknown;
  assets: unknown;
  performance: unknown;
  inventory?: unknown;
}): AuditData | null {
  const candidate = {
    schema_version: 1,
    slug: row.slug,
    type: row.type,
    persona: row.reactionPersona,
    email: row.emailData ?? {},
    review: row.reviewData ?? {},
    qa: row.qaFindings ?? null,
    assets: row.assets ?? {},
    ...(row.performance ? { performance: row.performance } : {}),
    ...(row.inventory ? { inventory: row.inventory } : {}),
  };
  const parsed = auditDataSchema.safeParse(candidate);
  if (!parsed.success) {
    logDrift("join", row.slug, parsed.error);
    return null;
  }
  return parsed.data;
}

function toSummary(
  data: AuditData,
  personaBySlug: Map<string, PersonaRecord>
): AuditSummary {
  const persona = data.persona ? personaBySlug.get(data.persona) : undefined;
  return {
    slug: data.slug,
    subject: data.email.subject,
    from_display_name: data.email.from_display_name,
    timestamp_iso: data.email.timestamp_iso,
    score: data.review.score,
    qa_summary: data.qa?.summary ?? null,
    has_image: !!data.assets.render_image_key || !!data.assets.render_image,
    type: data.type,
    persona: data.persona,
    persona_name: persona?.name ?? null,
    persona_short: persona?.short ?? null,
    persona_color: data.persona
      ? personaColor(data.persona, persona?.profile ?? null)
      : null,
    open_likelihood: data.review.predictions?.open_likelihood?.score ?? null,
    click_likelihood: data.review.predictions?.click_likelihood?.score ?? null,
  };
}

export async function getAuditIndexForUser(
  personaSlugs: string[]
): Promise<AuditSummary[]> {
  if (personaSlugs.length === 0) return [];
  const [rows, allPersonas] = await Promise.all([
    db
      .select({
        slug: reactions.slug,
        type: experiences.type,
        reactionPersona: reactions.personaSlug,
        reviewData: reactions.reviewData,
        emailData: experiences.emailData,
        qaFindings: experiences.qaFindings,
        assets: experiences.assets,
        performance: experiences.performance,
        receivedAt: experiences.receivedAt,
      })
      .from(reactions)
      .innerJoin(experiences, eq(experiences.id, reactions.experienceId))
      .where(inArray(reactions.personaSlug, personaSlugs))
      .orderBy(desc(experiences.receivedAt)),
    getAllPersonas(),
  ]);
  const personaBySlug = new Map(allPersonas.map((p) => [p.slug, p]));
  const out: AuditSummary[] = [];
  for (const r of rows) {
    const data = joinedRowToAuditData(r);
    if (data) out.push(toSummary(data, personaBySlug));
  }
  return out;
}

export async function getAuditBySlugForUser(
  slug: string,
  personaSlugs: string[]
): Promise<AuditData | null> {
  if (personaSlugs.length === 0) return null;
  const rows = await db
    .select({
      slug: reactions.slug,
      type: experiences.type,
      reactionPersona: reactions.personaSlug,
      reviewData: reactions.reviewData,
      emailData: experiences.emailData,
      qaFindings: experiences.qaFindings,
      assets: experiences.assets,
      performance: experiences.performance,
      inventory: experiences.inventory,
    })
    .from(reactions)
    .innerJoin(experiences, eq(experiences.id, reactions.experienceId))
    .where(
      and(eq(reactions.slug, slug), inArray(reactions.personaSlug, personaSlugs))
    )
    .limit(1);
  if (rows.length === 0) return null;
  return joinedRowToAuditData(rows[0]);
}
