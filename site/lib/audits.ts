import fs from "fs";
import path from "path";
import type { AuditData, AuditSummary } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "audits");

// Internal: unfiltered reads from disk. Do NOT call these from request-handling
// code — they leak content across personas. Use the *ForUser variants.
function readIndex(): AuditSummary[] {
  const indexPath = path.join(CONTENT_DIR, "index.json");
  if (!fs.existsSync(indexPath)) return [];
  return JSON.parse(fs.readFileSync(indexPath, "utf-8")) as AuditSummary[];
}

function readOne(slug: string): AuditData | null {
  const auditPath = path.join(CONTENT_DIR, slug, "audit.json");
  if (!fs.existsSync(auditPath)) return null;
  return JSON.parse(fs.readFileSync(auditPath, "utf-8")) as AuditData;
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
