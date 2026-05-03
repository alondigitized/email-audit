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

// Display order (canonical) and channel-aware labels. The narrative
// data layer keeps neutral keys (subject_line, open_likelihood, etc.)
// so we route through scoreLabels to surface the right user-facing
// labels per channel.
function sectionsForChannel(channel: AuditChannel) {
  const l = scoreLabels(channel);
  if (channel === "site") {
    return [
      { key: "executive_summary" as SectionKey, label: "Executive summary" },
      { key: "business_impact_score" as SectionKey, label: "Business impact score" },
      { key: "whats_working" as SectionKey, label: "What's working" },
      { key: "whats_weak" as SectionKey, label: "What's weak" },
      { key: "recommendations" as SectionKey, label: "Recommendations" },
      { key: "bottom_line" as SectionKey, label: "Bottom line" },
      { key: "subject_line" as SectionKey, label: "Hero & above-the-fold" },
      { key: "preview_text" as SectionKey, label: "Promo & urgency cues" },
      { key: "open_likelihood" as SectionKey, label: `${l.firstStep} likelihood` },
      { key: "click_likelihood" as SectionKey, label: `${l.secondStep} likelihood` },
      { key: "evidence" as SectionKey, label: "Evidence" },
    ];
  }
  return [
    { key: "executive_summary" as SectionKey, label: "Executive summary" },
    { key: "business_impact_score" as SectionKey, label: "Business impact score" },
    { key: "whats_working" as SectionKey, label: "What's working" },
    { key: "whats_weak" as SectionKey, label: "What's weak" },
    { key: "recommendations" as SectionKey, label: "Recommendations" },
    { key: "bottom_line" as SectionKey, label: "Bottom line" },
    { key: "subject_line" as SectionKey, label: "Subject line analysis" },
    { key: "preview_text" as SectionKey, label: "Preview text analysis" },
    { key: "open_likelihood" as SectionKey, label: `${l.firstStep} likelihood` },
    { key: "click_likelihood" as SectionKey, label: `${l.secondStep} likelihood` },
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
    key === "evidence"
  ) {
    const bullets = lines.filter((l) => /^[-*]\s/.test(l)).length;
    return `${bullets} ${bullets === 1 ? "point" : "points"}`;
  }

  // Default: first non-bullet, non-heading line; trim hard.
  const first = lines.find((l) => l && !/^[-*]\s/.test(l) && !/^#/.test(l));
  if (!first) return "";
  return first
    .replace(/[*`]/g, "")
    .trim()
    .slice(0, 110);
}

// Default-open: executive summary + bottom line are short enough that
// expanding by default is friendlier than yet another click.
const DEFAULT_OPEN: SectionKey[] = ["executive_summary", "bottom_line"];

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
