import Link from "next/link";
import type { AuditSummary } from "@/lib/types";
import { ScoreBadge } from "./ScoreBadge";
import { QaBadge } from "./QaBadge";
import { LikelihoodPill } from "./LikelihoodPill";
import { scoreLabels } from "@/lib/score-labels";

// Persona pill colored by the DB-resolved color (profile.color or slug-hash
// fallback, computed in lib/audits.ts at query time). Inline styles so the
// Tailwind build doesn't need to know every possible color.
function PersonaPill({
  slug,
  label,
  color,
  title,
}: {
  slug: string;
  label: string;
  color: string;
  title: string;
}) {
  return (
    <span
      className="inline-block px-1.5 py-0.5 rounded text-[11px] font-semibold ring-1 ring-inset"
      style={{
        color,
        backgroundColor: `${color}14`, // ~8% alpha wash
        boxShadow: `inset 0 0 0 1px ${color}33`,
      }}
      title={title}
      data-persona={slug}
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
  const labels = scoreLabels(audit.type);

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
        {audit.persona && (
          <PersonaPill
            slug={audit.persona}
            label={
              audit.persona_short ??
              audit.persona.charAt(0).toUpperCase() + audit.persona.slice(1)
            }
            color={audit.persona_color ?? "#6b7280"}
            title={audit.persona_name ?? audit.persona}
          />
        )}
        {audit.type === "site" && (
          <span className="inline-block px-1.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-700">
            Web
          </span>
        )}
        <span>{audit.from_display_name}</span>
        <span className="text-line">&middot;</span>
        <span>{datetime}</span>
        {typeof audit.open_likelihood === "number" && (
          <LikelihoodPill
            label={labels.firstStep}
            compactLabel={labels.firstStepShort}
            score={audit.open_likelihood}
            compact
          />
        )}
        {typeof audit.click_likelihood === "number" && (
          <LikelihoodPill
            label={labels.secondStep}
            compactLabel={labels.secondStepShort}
            score={audit.click_likelihood}
            compact
          />
        )}
        <span className="ml-auto">
          <QaBadge summary={audit.qa_summary} />
        </span>
      </span>
    </Link>
  );
}
