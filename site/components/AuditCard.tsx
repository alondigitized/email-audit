import Link from "next/link";
import type { AuditSummary } from "@/lib/types";
import { PERSONA_BY_SLUG } from "@/lib/personas";
import { ScoreBadge } from "./ScoreBadge";
import { QaBadge } from "./QaBadge";
import { LikelihoodPill } from "./LikelihoodPill";

// Per-persona pill colors. Each persona gets a distinct hue so a quick scan
// of the list makes "whose audit is this?" obvious. Unknown personas fall
// back to a neutral gray.
const PERSONA_PILL: Record<string, string> = {
  walker: "bg-sky-50 text-sky-800 ring-sky-200",
  martha: "bg-rose-50 text-rose-800 ring-rose-200",
};
const PERSONA_PILL_DEFAULT = "bg-gray-100 text-gray-700 ring-gray-200";

function PersonaPill({ slug }: { slug: string }) {
  const meta = PERSONA_BY_SLUG[slug];
  const label = meta?.short ?? slug.charAt(0).toUpperCase() + slug.slice(1);
  const classes = PERSONA_PILL[slug] ?? PERSONA_PILL_DEFAULT;
  return (
    <span
      className={`inline-block px-1.5 py-0.5 rounded text-[11px] font-semibold ring-1 ring-inset ${classes}`}
      title={meta?.name ?? slug}
    >
      {label}
    </span>
  );
}

export function AuditCard({ audit }: { audit: AuditSummary }) {
  const datetime = audit.timestamp_iso
    ? new Date(audit.timestamp_iso).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
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
        {audit.persona && <PersonaPill slug={audit.persona} />}
        {audit.type === "site" && (
          <span className="inline-block px-1.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-700">
            Journey
          </span>
        )}
        <span>{audit.from_display_name}</span>
        <span className="text-line">&middot;</span>
        <span>{datetime}</span>
        {typeof audit.open_likelihood === "number" && (
          <LikelihoodPill label="Open" score={audit.open_likelihood} compact />
        )}
        {typeof audit.click_likelihood === "number" && (
          <LikelihoodPill label="Click" score={audit.click_likelihood} compact />
        )}
        <span className="ml-auto">
          <QaBadge summary={audit.qa_summary} />
        </span>
      </span>
    </Link>
  );
}
