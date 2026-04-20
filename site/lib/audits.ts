import { inArray, desc, eq, and } from "drizzle-orm";
import { db, audits } from "@/lib/db/client";
import {
  auditDataSchema,
  type AuditData,
  type AuditSummary,
} from "@/lib/schema/audit";

// Phase 3 of the foundation refactor: the site reads audits from Postgres
// instead of the filesystem. Dual-write from the daemons keeps the
// filesystem copy (content/audits/) up to date too, until Phase 4 deletes
// it. Per-persona filtering happens in SQL so callers can't forget it.

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

// Derive the card-sized summary from the full audit payload. Matches the
// legacy index.json shape so downstream components stay unchanged.
function toSummary(data: AuditData): AuditSummary {
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
    open_likelihood: data.review.predictions?.open_likelihood?.score ?? null,
    click_likelihood: data.review.predictions?.click_likelihood?.score ?? null,
  };
}

export async function getAuditIndexForUser(
  personaSlugs: string[]
): Promise<AuditSummary[]> {
  if (personaSlugs.length === 0) return [];
  const rows = await db
    .select({ slug: audits.slug, data: audits.data })
    .from(audits)
    .where(inArray(audits.persona, personaSlugs))
    .orderBy(desc(audits.timestamp));
  const out: AuditSummary[] = [];
  for (const r of rows) {
    const parsed = auditDataSchema.safeParse(r.data);
    if (parsed.success) {
      out.push(toSummary(parsed.data));
    } else {
      logDrift("index", r.slug, parsed.error);
    }
  }
  return out;
}

export async function getAuditBySlugForUser(
  slug: string,
  personaSlugs: string[]
): Promise<AuditData | null> {
  if (personaSlugs.length === 0) return null;
  const rows = await db
    .select({ data: audits.data })
    .from(audits)
    .where(and(eq(audits.slug, slug), inArray(audits.persona, personaSlugs)))
    .limit(1);
  if (rows.length === 0) return null;
  const parsed = auditDataSchema.safeParse(rows[0].data);
  if (!parsed.success) {
    logDrift("detail", slug, parsed.error);
    return null;
  }
  return parsed.data;
}
