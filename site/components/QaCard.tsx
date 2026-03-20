import type { QaReport } from "@/lib/types";

export function QaCard({ qa }: { qa: QaReport | null }) {
  if (!qa) return null;

  const { summary, categories } = qa;

  return (
    <div className="bg-white border border-gray-200 rounded-[20px] p-6 mt-5 shadow-sm">
      <h2 className="mt-0 mb-2.5">Automated QA</h2>
      <div className="flex gap-4 flex-wrap mb-3.5 text-sm font-semibold">
        <span>
          Pass rate: <strong>{summary.overall_pass_rate}</strong>
        </span>
        <span className="text-red-600">Issues: {summary.total_issues}</span>
        <span className="text-amber-600">
          Warnings: {summary.total_warnings}
        </span>
      </div>

      {Object.entries(categories).map(([catName, catData]) => {
        const nonPass = catData.checks.filter((c) => c.status !== "pass");
        if (nonPass.length === 0) return null;

        const label = catName.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

        return (
          <div key={catName} className="mt-3">
            <h3 className="text-[13px] uppercase text-muted tracking-wide mb-1.5">
              {label}
            </h3>
            <table className="w-full border-collapse text-[13px]">
              <tbody>
                {nonPass.map((check, i) => (
                  <tr key={i}>
                    <td className="w-7 text-center py-1.5 px-2 border-b border-gray-200 align-top">
                      <span
                        className={
                          check.status === "fail"
                            ? "text-red-600"
                            : "text-amber-600"
                        }
                      >
                        {check.status === "fail" ? "\u2718" : "\u26a0"}
                      </span>
                    </td>
                    <td className="py-1.5 px-2 border-b border-gray-200 align-top">
                      {check.label}
                    </td>
                    <td className="py-1.5 px-2 border-b border-gray-200 align-top">
                      {check.detail}
                      {check.url && (
                        <>
                          <br />
                          <span className="text-muted text-[11px] break-all">
                            {check.url}
                          </span>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
