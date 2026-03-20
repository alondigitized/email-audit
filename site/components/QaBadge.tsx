import type { QaSummary } from "@/lib/types";

export function QaBadge({ summary }: { summary: QaSummary | null }) {
  if (!summary) return null;

  const { total_issues: issues, total_warnings: warnings } = summary;

  if (issues === 0 && warnings === 0) {
    return (
      <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-600">
        All pass
      </span>
    );
  }

  const parts: string[] = [];
  if (issues === 1) parts.push("1 issue");
  else if (issues > 1) parts.push(`${issues} issues`);
  if (warnings === 1) parts.push("1 warn");
  else if (warnings > 1) parts.push(`${warnings} warn`);

  const cls = issues > 0 ? "bg-red-50 text-red-600" : "bg-green-100 text-green-600";

  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${cls}`}>
      {parts.join(", ")}
    </span>
  );
}
