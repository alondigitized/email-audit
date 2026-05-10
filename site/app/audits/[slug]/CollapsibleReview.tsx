import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ReviewSections } from "@/lib/schema/audit";
import type { AuditChannel } from "@/lib/score-labels";
import { scoreLabels } from "@/lib/score-labels";

// Collapsible accordion view of an audit's review sections. Replaces the
// long flowing markdown blob with a stack of <details> blocks: header
// shows the section name + a one-line preview (score pill, count, or
// trimmed first line); body unfolds the full markdown content. Native
// <details> for a11y + zero-JS expand/collapse.

type SectionKey = keyof ReviewSections;

// Display order (canonical) and channel-aware labels.
//
// V2 IA (audit-ia-refactor 2026-05-10) — the producer prompt now writes
// "Take" / "What stood out" / "What I'd change" instead of the older
// Executive Summary / What's Working / What's Weak / Bottom Line / Evidence
// stack. Both v1 and v2 audits share the same `executive_summary` and
// `recommendations` keys (the producer rebrand re-headed the prose, not
// the storage), so labels here read v2 terminology while legacy `bottom_line`
// + `whats_working` + `whats_weak` + `evidence` still render when present.
function sectionsForChannel(channel: AuditChannel) {
  const l = scoreLabels(channel);
  const subjectLabel =
    channel === "site" ? "Hero & above-the-fold" : "Subject";
  const previewLabel =
    channel === "site" ? "Promo & urgency cues" : "Preview";
  return [
    { key: "executive_summary" as SectionKey, label: "Take" },
    { key: "stood_out" as SectionKey, label: "What stood out" },
    // Legacy v1 split — only render when present (v2 audits leave these empty).
    { key: "whats_working" as SectionKey, label: "What's working" },
    { key: "whats_weak" as SectionKey, label: "What's weak" },
    { key: "recommendations" as SectionKey, label: "What I'd change" },
    { key: "business_impact_score" as SectionKey, label: "Business impact score" },
    { key: "open_likelihood" as SectionKey, label: `${l.firstStep} likelihood` },
    { key: "click_likelihood" as SectionKey, label: `${l.secondStep} likelihood` },
    { key: "subject_line" as SectionKey, label: subjectLabel },
    { key: "preview_text" as SectionKey, label: previewLabel },
    // Legacy v1 closers — render when present.
    { key: "bottom_line" as SectionKey, label: "Bottom line" },
    { key: "evidence" as SectionKey, label: "Evidence" },
  ];
}

// One-line preview shown next to the section title in the collapsed
// state. Tries hard not to be a hash of the whole content — instead
// extracts the most informative single fragment per section type.
function previewFor(key: SectionKey, lines: string[]): string {
  if (lines.length === 0) return "";
  const joined = lines.join(" ");

  if (key === "business_impact_score") {
    const m = joined.match(/\*\*\s*(\d+(?:\.\d+)?)\s*\/\s*10\s*\*\*/);
    if (m) return `${m[1]}/10`;
  }
  if (key === "open_likelihood" || key === "click_likelihood") {
    const m = joined.match(/score[^0-9]*?(\d+(?:\.\d+)?)\s*\/\s*10/i);
    if (m) return `${m[1]}/10`;
  }
  if (
    key === "whats_working" ||
    key === "whats_weak" ||
    key === "recommendations" ||
    key === "evidence" ||
    key === "stood_out"
  ) {
    const bullets = lines.filter((l) => /^[-*]\s/.test(l)).length;
    if (bullets > 0) return `${bullets} ${bullets === 1 ? "point" : "points"}`;
    // V2 stood_out / take are prose, not bullets — fall through to the
    // first-line preview below so the chip says something useful.
  }

  // Default: first non-bullet, non-heading line; trim hard.
  const first = lines.find((l) => l && !/^[-*]\s/.test(l) && !/^#/.test(l));
  if (!first) return "";
  return first
    .replace(/[*`]/g, "")
    .trim()
    .slice(0, 110);
}

// Default-open: the persona's prose sections — Take + What stood out +
// What I'd change. Bottom line stays open for legacy audits where Take
// is shorter. Score blocks stay collapsed (they're skim-only, dense data).
const DEFAULT_OPEN: SectionKey[] = [
  "executive_summary",
  "stood_out",
  "recommendations",
  "bottom_line",
];

export function CollapsibleReview({
  sections,
  channel,
}: {
  sections: ReviewSections;
  channel: AuditChannel;
}) {
  const order = sectionsForChannel(channel);

  return (
    <div className="flex flex-col gap-2">
      {order.map(({ key, label }) => {
        const lines = (sections[key] ?? []) as string[];
        if (lines.length === 0) return null;
        const preview = previewFor(key, lines);
        const body = lines.join("\n");
        const isScore =
          key === "business_impact_score" ||
          key === "open_likelihood" ||
          key === "click_likelihood";

        return (
          <details
            key={key}
            open={DEFAULT_OPEN.includes(key)}
            className="group bg-white border border-gray-200 rounded-2xl"
          >
            <summary className="flex items-center justify-between gap-3 px-4 py-3 cursor-pointer list-none select-none rounded-2xl group-open:rounded-b-none">
              <div className="flex items-baseline gap-3 min-w-0">
                <span className="text-sm font-semibold text-gray-900">
                  {label}
                </span>
                {preview && (
                  <span
                    className={
                      isScore
                        ? "shrink-0 inline-flex items-baseline gap-1 px-2 py-0.5 rounded-md text-xs font-semibold tabular-nums bg-gray-100 text-gray-800"
                        : "text-xs text-muted truncate"
                    }
                  >
                    {preview}
                  </span>
                )}
              </div>
              <span
                aria-hidden
                className="shrink-0 text-gray-400 group-open:rotate-90 transition-transform text-sm"
              >
                ›
              </span>
            </summary>
            <div className="px-4 pb-4 prose prose-sm max-w-none overflow-hidden prose-headings:mt-3 prose-headings:mb-1.5 prose-h2:text-sm prose-h3:text-sm prose-p:my-2 prose-li:my-0.5 prose-ul:my-1.5">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
            </div>
          </details>
        );
      })}
    </div>
  );
}
