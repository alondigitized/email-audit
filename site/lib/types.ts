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

// Inventory audits prepend a "## Inventory summary" markdown block to
// the persona narrative. On the audit detail page the visual heatmap
// supersedes the block, so strip it before render — but only the
// block: keep everything that follows (the persona's prose narrative
// often does NOT start with a heading, so we can't use the next-##
// heading as the terminator without eating the narrative).
//
// The block is exactly:
//   ## Inventory summary
//   <blank line>
//   **<totals headline>**         (optional)
//   <blank line>
//   | Category | ... |             (optional, old audits only)
//   |---|---:|...|
//   | <row> |                      (zero+ data rows)
//   <trailing blank line>
//
// We match that shape and replace it with empty. Anything after — the
// narrative — is preserved as-is.
export function stripInventorySummary(content: string): string {
  return content
    .replace(
      /^[\s\n]*##\s+Inventory summary\s*\n+(?:\*\*[^\n]*\*\*\s*\n+)?(?:\|[^\n]*\n+)*/,
      ""
    )
    .trim();
}
