import fs from "fs";
import path from "path";
import type { AuditData, AuditSummary } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "audits");

export function getAuditIndex(): AuditSummary[] {
  const indexPath = path.join(CONTENT_DIR, "index.json");
  const data = fs.readFileSync(indexPath, "utf-8");
  return JSON.parse(data);
}

export function getAuditBySlug(slug: string): AuditData | null {
  const auditPath = path.join(CONTENT_DIR, slug, "audit.json");
  if (!fs.existsSync(auditPath)) return null;
  const data = fs.readFileSync(auditPath, "utf-8");
  return JSON.parse(data);
}

export function getAllSlugs(): string[] {
  return getAuditIndex().map((a) => a.slug);
}
