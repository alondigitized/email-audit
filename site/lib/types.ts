// Re-exports the audit schema types so existing imports (`from "@/lib/types"`)
// keep working. New code should prefer `@/lib/schema/audit` directly.
// Consumer-only utilities (splitReview, QaBusinessGroup) still live here.

export type {
  AuditData,
  AuditSummary,
  AuditType,
  JourneyStep,
  PerfStep,
  QaCategory,
  QaCheck,
  QaReport,
  QaSummary,
  ReviewSections,
} from "@/lib/schema/audit";

export type QaBusinessGroup =
  | "broken_experience"
  | "compliance"
  | "deliverability"
  | "accessibility"
  | "info";

export interface SplitReview {
  content: string;
  technical: string | null;
}

const TECH_MARKER = "## Technical Audit";

export function splitReview(rawMarkdown: string): SplitReview {
  const idx = rawMarkdown.indexOf(TECH_MARKER);
  if (idx === -1) {
    return { content: rawMarkdown, technical: null };
  }
  return {
    content: rawMarkdown.slice(0, idx).trimEnd(),
    technical: rawMarkdown.slice(idx),
  };
}
