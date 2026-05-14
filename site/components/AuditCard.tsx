import Link from "next/link";
import type { AuditSummary } from "@/lib/types";
import { QaBadge } from "./QaBadge";
import { LikelihoodPill } from "./LikelihoodPill";
import { scoreLabels } from "@/lib/score-labels";

// Parse "7/10" → 7. Returns null when score isn't in that shape so the
// pill render gates cleanly on a numeric score.
function parseScore(score: string): number | null {
  const m = score.match(/^\s*(\d+(?:\.\d+)?)\s*\/\s*10/);
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? n : null;
}

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
  const businessScore = parseScore(audit.score);

  return (
    <Link
      href={`/audits/${audit.slug}`}
      className="block bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-sm no-underline text-ink transition-[border-color,box-shadow] duration-150 hover:border-slate-400 hover:shadow-md overflow-hidden"
    >
      <div className="text-[17px] font-bold leading-snug mb-2.5 [overflow-wrap:anywhere]">
        {audit.subject}
      </div>

      {/* Three-up score row \u2014 Business impact + funnel-step pills, same
          shape across email + web so the listing scans consistently.
          Falls back gracefully when funnel scores are missing on older
          rows. */}
      <div className="flex flex-wrap items-center gap-2 mb-2.5">
        {businessScore !== null ? (
          <LikelihoodPill
            label={labels.business}
            compactLabel="BI"
            score={businessScore}
            compact
          />
        ) : (
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded border text-[11px] font-semibold bg-gray-100 text-gray-700 border-gray-200">
            <span className="opacity-70">BI</span>
            <span className="tabular-nums">\u2014</span>
          </span>
        )}
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
      </div>

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
        {audit.type === "inventory" && (
          <span className="inline-block px-1.5 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-700">
            Inventory
          </span>
        )}
        <span>{audit.from_display_name}</span>
        <span className="text-line">&middot;</span>
        <span>{datetime}</span>
        <span className="ml-auto">
          <QaBadge summary={audit.qa_summary} />
        </span>
      </span>
    </Link>
  );
}
