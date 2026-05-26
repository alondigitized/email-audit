import { inArray, desc, eq, and, sql as drizzleSql } from "drizzle-orm";
import {
  db,
  experiences,
  reactions,
  personas,
  personaTemplates,
} from "@/lib/db/client";
import {
  auditDataSchema,
  qaSummarySchema,
  type AuditData,
  type AuditSummary,
} from "@/lib/schema/audit";
import { getAllPersonas, personaColor } from "@/lib/personas-db";

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
  autoConfirm?: unknown;
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
    ...(row.autoConfirm ? { auto_confirm: row.autoConfirm } : {}),
  };
  const parsed = auditDataSchema.safeParse(candidate);
  if (!parsed.success) {
    logDrift("join", row.slug, parsed.error);
    return null;
  }
  return parsed.data;
}

// Build a persona-slug → industry map. Combines:
//   - persona.industry (set on industry-kind personas directly)
//   - persona_template.industry (fallback for brand-kind personas)
// via COALESCE so each persona has a single industry tag for filter UI.
async function loadIndustryBySlug(): Promise<Map<string, string>> {
  const rows = await db
    .select({
      slug: personas.slug,
      industry: personas.industry,
      templateIndustry: personaTemplates.industry,
    })
    .from(personas)
    .leftJoin(
      personaTemplates,
      eq(personaTemplates.slug, personas.templateSlug)
    );
  const out = new Map<string, string>();
  for (const r of rows) {
    const ind = r.industry ?? r.templateIndustry ?? null;
    if (ind) out.set(r.slug, ind);
  }
  return out;
}

// Hard cap on the audit-index payload. The neon serverless HTTP driver
// returns 507 once a single response crosses ~10 MB, and the unbounded
// SELECT below — even with sub-path projection — can blow past that as
// the audit count keeps growing. 2000 rows comfortably covers the
// chart's 90-day window and the visible list; anything older is still
// reachable via direct /audits/<slug> links. Bump this only after
// confirming the projected row size stays small.
const AUDIT_INDEX_ROW_LIMIT = 2000;

// Audit-list read path. Projects ONLY the JSONB sub-paths the audit
// list UI consumes (subject, from, timestamp, score, qa.summary,
// has-image flag, prediction scores) instead of pulling the whole
// review_data / email_data / qa_findings / assets blobs. Cuts the
// over-the-wire payload by ~50-100× and keeps us well under Neon's
// HTTP-driver response size ceiling.
//
// AuditData reconstruction is intentionally skipped here — that path
// is only needed by the detail page (getAuditBySlugForUser) which
// reads one row at a time.
export async function getAuditIndexForUser(
  personaSlugs: string[]
): Promise<AuditSummary[]> {
  if (personaSlugs.length === 0) return [];
  const [rows, allPersonas, industryBySlug] = await Promise.all([
    db
      .select({
        slug: reactions.slug,
        type: experiences.type,
        persona: reactions.personaSlug,
        subject: drizzleSql<string | null>`${experiences.emailData}->>'subject'`,
        fromDisplayName: drizzleSql<
          string | null
        >`${experiences.emailData}->>'from_display_name'`,
        timestampIso: drizzleSql<
          string | null
        >`${experiences.emailData}->>'timestamp_iso'`,
        score: drizzleSql<
          string | null
        >`${reactions.reviewData}->>'score'`,
        qaSummary: drizzleSql<
          unknown
        >`${experiences.qaFindings}->'summary'`,
        renderImageKey: drizzleSql<
          string | null
        >`${experiences.assets}->>'render_image_key'`,
        renderImage: drizzleSql<
          string | null
        >`${experiences.assets}->>'render_image'`,
        openLikelihood: drizzleSql<
          number | null
        >`(${reactions.reviewData}->'predictions'->'open_likelihood'->>'score')::int`,
        clickLikelihood: drizzleSql<
          number | null
        >`(${reactions.reviewData}->'predictions'->'click_likelihood'->>'score')::int`,
      })
      .from(reactions)
      .innerJoin(experiences, eq(experiences.id, reactions.experienceId))
      .where(inArray(reactions.personaSlug, personaSlugs))
      .orderBy(desc(experiences.receivedAt))
      .limit(AUDIT_INDEX_ROW_LIMIT),
    getAllPersonas(),
    loadIndustryBySlug(),
  ]);
  const personaBySlug = new Map(allPersonas.map((p) => [p.slug, p]));
  const out: AuditSummary[] = [];
  for (const r of rows) {
    // qa.summary is the only nested JSONB we still surface. Validate
    // it loosely; drop the field if the shape is unexpected rather
    // than fail the whole row.
    const qa = r.qaSummary
      ? qaSummarySchema.safeParse(r.qaSummary)
      : null;
    const persona = r.persona ? personaBySlug.get(r.persona) : undefined;
    out.push({
      slug: r.slug,
      // The producer always writes subject / from_display_name; treat
      // missing values defensively so a malformed row degrades to
      // "Untitled" instead of crashing the page.
      subject: r.subject ?? "(no subject)",
      from_display_name: r.fromDisplayName ?? "",
      timestamp_iso: r.timestampIso ?? null,
      score: r.score ?? "",
      qa_summary: qa && qa.success ? qa.data : null,
      has_image: !!(r.renderImageKey || r.renderImage),
      // experience.type is a text column; the producer constrains it
      // to the audit-type enum on write. Cast through unknown so we
      // don't drop legitimate rows for a string-vs-enum nominal mismatch.
      type: r.type as AuditSummary["type"],
      persona: r.persona,
      persona_name: persona?.name ?? null,
      persona_short: persona?.short ?? null,
      persona_color: r.persona
        ? personaColor(r.persona, persona?.profile ?? null)
        : null,
      persona_kind: persona?.kind ?? null,
      industry: r.persona ? industryBySlug.get(r.persona) ?? null : null,
      open_likelihood:
        r.openLikelihood == null ? null : Number(r.openLikelihood),
      click_likelihood:
        r.clickLikelihood == null ? null : Number(r.clickLikelihood),
    });
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
      autoConfirm: experiences.autoConfirm,
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
