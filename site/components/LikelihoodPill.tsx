// Persona-grounded funnel sub-score. 1-10 reaction score from the
// reviewer, displayed as a pill. Not a probability — see
// audit-pipeline/extract.mjs parsePredictions for the honest framing.

function colorFor(score: number): string {
  if (score >= 8) return "bg-emerald-50 text-emerald-800 border-emerald-200";
  if (score >= 6) return "bg-sky-50 text-sky-800 border-sky-200";
  if (score >= 4) return "bg-amber-50 text-amber-900 border-amber-200";
  return "bg-rose-50 text-rose-800 border-rose-200";
}

export function LikelihoodPill({
  label,
  compactLabel,
  score,
  rationale,
  compact = false,
}: {
  label: string;
  // Override the compact-mode label (default = first letter of label).
  // Lets "Conversion" render as "Cv" instead of colliding with "Click"
  // → "C" on the email side.
  compactLabel?: string;
  score: number;
  rationale?: string;
  compact?: boolean;
}) {
  const rounded = Math.round(score * 10) / 10;
  if (compact) {
    return (
      <span
        title={rationale || `${label} ${rounded}/10`}
        className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded border text-[11px] font-semibold ${colorFor(score)}`}
      >
        <span className="opacity-70">{compactLabel ?? label.charAt(0)}</span>
        <span className="tabular-nums">{rounded}</span>
      </span>
    );
  }
  return (
    <span
      title={rationale || undefined}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${colorFor(score)}`}
    >
      <span className="uppercase tracking-wide text-[10px] font-semibold opacity-70">
        {label}
      </span>
      <span className="tabular-nums">{rounded}/10</span>
    </span>
  );
}
