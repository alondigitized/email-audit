import fs from "fs";
import path from "path";

const ANALYSIS_DIR = path.join(process.cwd(), "content", "analysis");

export interface AnalysisBrand {
  name: string;
  audit_slug?: string;
  offer?: string;
  code?: string | null;
}

export interface AnalysisReport {
  schema_version: number;
  slug: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  date_iso: string;
  summary: string;
  // Personas allowed to see this report. Absent/empty = admin-only.
  personas?: string[];
  brands_analyzed?: AnalysisBrand[];
  content_markdown: string;
}

export interface AnalysisSummary {
  slug: string;
  title: string;
  subtitle?: string;
  kicker?: string;
  date_iso: string;
  summary: string;
}

// True when the user's personas overlap with the report's, or when the
// caller is admin. Reports with no `personas` field stay admin-only so a
// producer that forgets to tag a report doesn't leak it cross-persona.
function allowed(
  reportPersonas: string[] | undefined,
  userPersonas: string[],
  isAdmin: boolean,
): boolean {
  if (isAdmin) return true;
  if (!reportPersonas || reportPersonas.length === 0) return false;
  const allowedSet = new Set(reportPersonas);
  return userPersonas.some((p) => allowedSet.has(p));
}

export function getAnalysisIndexForUser(
  userPersonas: string[],
  isAdmin: boolean,
): AnalysisSummary[] {
  if (!fs.existsSync(ANALYSIS_DIR)) return [];
  const entries = fs
    .readdirSync(ANALYSIS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory());

  const reports: AnalysisSummary[] = [];
  for (const e of entries) {
    const reportPath = path.join(ANALYSIS_DIR, e.name, "report.json");
    if (!fs.existsSync(reportPath)) continue;
    const data = JSON.parse(fs.readFileSync(reportPath, "utf-8")) as AnalysisReport;
    if (!allowed(data.personas, userPersonas, isAdmin)) continue;
    reports.push({
      slug: data.slug,
      title: data.title,
      subtitle: data.subtitle,
      kicker: data.kicker,
      date_iso: data.date_iso,
      summary: data.summary,
    });
  }
  return reports.sort((a, b) => (b.date_iso || "").localeCompare(a.date_iso || ""));
}

export function getAnalysisBySlugForUser(
  slug: string,
  userPersonas: string[],
  isAdmin: boolean,
): AnalysisReport | null {
  const p = path.join(ANALYSIS_DIR, slug, "report.json");
  if (!fs.existsSync(p)) return null;
  const data = JSON.parse(fs.readFileSync(p, "utf-8")) as AnalysisReport;
  if (!allowed(data.personas, userPersonas, isAdmin)) return null;
  return data;
}
