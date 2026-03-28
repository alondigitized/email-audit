import Link from "next/link";
import type { AuditSummary } from "@/lib/types";
import { ScoreBadge } from "./ScoreBadge";
import { QaBadge } from "./QaBadge";

export function AuditCard({ audit }: { audit: AuditSummary }) {
  const date = audit.timestamp_iso
    ? new Date(audit.timestamp_iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "\u2014";

  return (
    <Link
      href={`/audits/${audit.slug}`}
      className="block bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-sm no-underline text-ink transition-[border-color,box-shadow] duration-150 hover:border-slate-400 hover:shadow-md overflow-hidden"
    >
      <span className="flex items-start justify-between gap-4 mb-2.5">
        <span className="text-[17px] font-bold leading-snug flex-1 min-w-0 [overflow-wrap:anywhere]">
          {audit.subject}
        </span>
        <ScoreBadge score={audit.score} />
      </span>
      <span className="flex flex-wrap gap-2 items-center text-[13px] text-muted">
        <span>{audit.from_display_name}</span>
        <span className="text-line">&middot;</span>
        <span>{date}</span>
        <span className="ml-auto">
          <QaBadge summary={audit.qa_summary} />
        </span>
      </span>
    </Link>
  );
}
