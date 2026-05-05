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

// Inventory audits prepend a "## Inventory summary" markdown block (the
// header line, an optional bold totals line, and a category × size
// table). On the audit detail page we replace that with a visual
// heatmap, so strip the block from the markdown before render. The
// fence is delimited by the next heading or end-of-string.
//
// Only matches the literal heading the producer uses ("## Inventory
// summary"), so non-inventory reviews pass through untouched.
export function stripInventorySummary(content: string): string {
  const startIdx = content.indexOf("## Inventory summary");
  if (startIdx === -1) return content;
  const after = content.slice(startIdx + 1);
  const nextHeadingRel = after.search(/\n##\s/);
  const endIdx =
    nextHeadingRel === -1
      ? content.length
      : startIdx + 1 + nextHeadingRel + 1; // keep the leading newline of next heading
  return (
    content.slice(0, startIdx).trimEnd() +
    (endIdx < content.length ? "\n\n" + content.slice(endIdx).trimStart() : "")
  ).trim();
}
