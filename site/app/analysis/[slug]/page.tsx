import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAnalysisBySlugForUser } from "@/lib/analysis";
import { requireUser } from "@/lib/dal";
import { recordPageView } from "@/lib/analytics";

export const dynamic = "force-dynamic";

export default async function AnalysisDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const user = await requireUser();
  const report = getAnalysisBySlugForUser(slug, user.personas, user.isAdmin);
  if (!report) notFound();
  await recordPageView({
    userId: user.id,
    isAdmin: user.isAdmin,
    kind: "analysis",
    path: `/analysis/${slug}`,
  });

  return (
    <>
      <div className="mb-4">
        <Link
          href="/analysis"
          className="text-sm text-muted hover:text-ink"
        >
          &larr; All analyses
        </Link>
      </div>
      <div className="mb-6">
        {report.kicker && (
          <div className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
            {report.kicker}
          </div>
        )}
        <h1 className="text-2xl font-bold mb-1">{report.title}</h1>
        {report.subtitle && (
          <div className="text-sm text-muted mb-3">{report.subtitle}</div>
        )}
        <div className="text-xs text-muted">
          {new Date(report.date_iso).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
      </div>
      <article className="bg-white border border-[var(--color-line)] rounded-2xl p-6 md:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.03)] overflow-hidden">
        <div className="text-sm text-ink/80 mb-5 pb-5 border-b border-[var(--color-line)] leading-relaxed">
          {report.summary}
        </div>
        <div className="prose prose-sm max-w-none overflow-hidden prose-headings:mt-6 prose-headings:mb-3 prose-h2:text-lg prose-h2:font-bold prose-h3:text-base prose-h3:font-semibold prose-p:my-3 prose-li:my-1 prose-ul:my-3 prose-table:text-xs prose-table:my-4 prose-th:bg-gray-50 prose-td:align-top prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {report.content_markdown}
          </ReactMarkdown>
        </div>
      </article>
    </>
  );
}
