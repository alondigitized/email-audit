import fs from "fs";
import path from "path";
import {
  auditDataSchema,
  auditSummarySchema,
  type AuditData,
  type AuditSummary,
} from "@/lib/schema/audit";

const CONTENT_DIR = path.join(process.cwd(), "content", "audits");

// One-shot boundary logger. Zod error details printed in dev; only the
// slug + issue summary in prod so we don't flood logs. Drift = silent
// degradation before this landed; now we surface it at the read edge.
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

// Internal: unfiltered reads from disk. Do NOT call these from request-handling
// code — they leak content across personas. Use the *ForUser variants.
function readIndex(): AuditSummary[] {
  const indexPath = path.join(CONTENT_DIR, "index.json");
  if (!fs.existsSync(indexPath)) return [];
  const raw = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
  if (!Array.isArray(raw)) return [];
  const out: AuditSummary[] = [];
  for (const entry of raw) {
    const r = auditSummarySchema.safeParse(entry);
    if (r.success) {
      out.push(r.data);
    } else {
      logDrift("index", String(entry?.slug ?? "<no-slug>"), r.error);
    }
  }
  return out;
}

function readOne(slug: string): AuditData | null {
  const auditPath = path.join(CONTENT_DIR, slug, "audit.json");
  if (!fs.existsSync(auditPath)) return null;
  const raw = JSON.parse(fs.readFileSync(auditPath, "utf-8"));
  const r = auditDataSchema.safeParse(raw);
  if (!r.success) {
    logDrift("detail", slug, r.error);
    return null;
  }
  return r.data;
}

// S7: filter by user's persona slugs in the same call. Audits without a
// persona field are treated as invisible by default (legacy unkeyed content
// should be tagged before it's reachable per-user).
export function getAuditIndexForUser(personaSlugs: string[]): AuditSummary[] {
  if (personaSlugs.length === 0) return [];
  const allowed = new Set(personaSlugs);
  return readIndex().filter((a) => !!a.persona && allowed.has(a.persona));
}

export function getAuditBySlugForUser(
  slug: string,
  personaSlugs: string[]
): AuditData | null {
  if (personaSlugs.length === 0) return null;
  const audit = readOne(slug);
  if (!audit) return null;
  if (!audit.persona || !personaSlugs.includes(audit.persona)) return null;
  return audit;
}
