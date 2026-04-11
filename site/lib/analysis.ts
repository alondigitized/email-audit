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

export function getAnalysisIndex(): AnalysisSummary[] {
  if (!fs.existsSync(ANALYSIS_DIR)) return [];
  const entries = fs
    .readdirSync(ANALYSIS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory());

  const reports: AnalysisSummary[] = [];
  for (const e of entries) {
    const reportPath = path.join(ANALYSIS_DIR, e.name, "report.json");
    if (!fs.existsSync(reportPath)) continue;
    const data = JSON.parse(fs.readFileSync(reportPath, "utf-8")) as AnalysisReport;
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

export function getAnalysisBySlug(slug: string): AnalysisReport | null {
  const p = path.join(ANALYSIS_DIR, slug, "report.json");
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf-8")) as AnalysisReport;
}

export function getAllAnalysisSlugs(): string[] {
  return getAnalysisIndex().map((r) => r.slug);
}
