import Link from "next/link";
import { getAnalysisIndexForUser } from "@/lib/analysis";
import { requireUser } from "@/lib/dal";

export default async function AnalysisIndex() {
  const user = await requireUser();
  const reports = getAnalysisIndexForUser(user.personas, user.isAdmin);

  return (
    <>
      <div className="mb-5 py-6">
        <h1 className="text-2xl font-bold mt-1 mb-2">Ad-hoc Analysis</h1>
        <p className="text-muted text-sm max-w-xl">
          Standalone analyses that go beyond per-email scoring — comparative studies,
          strategic reviews, and one-off investigations into specific moments in the
          customer experience.
        </p>
      </div>

      {reports.length === 0 ? (
        <div className="text-muted text-sm p-8 text-center bg-white border border-[var(--color-line)] rounded-2xl">
          No analyses yet.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {reports.map((r) => (
            <Link
              key={r.slug}
              href={`/analysis/${r.slug}`}
              className="block bg-white border border-gray-200 rounded-2xl px-6 py-5 shadow-sm no-underline text-ink hover:border-gray-400 hover:shadow-md transition-all"
            >
              {r.kicker && (
                <div className="text-xs font-semibold uppercase tracking-wide text-muted mb-1">
                  {r.kicker}
                </div>
              )}
              <h2 className="text-lg font-bold mb-1">{r.title}</h2>
              {r.subtitle && (
                <div className="text-sm text-muted mb-2">{r.subtitle}</div>
              )}
              <p className="text-sm text-ink/80 leading-relaxed">{r.summary}</p>
              <div className="text-xs text-muted mt-3">
                {new Date(r.date_iso).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
