import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAuditBySlug, getAllSlugs } from "@/lib/audits";
import { ReviewContent } from "@/components/ReviewContent";
import { QaCard } from "@/components/QaCard";
import { ScoreBadge } from "@/components/ScoreBadge";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const audit = getAuditBySlug(slug);
  return { title: audit?.email.subject ?? "Audit" };
}

export default async function AuditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const audit = getAuditBySlug(slug);
  if (!audit) notFound();

  const { email, review, qa, assets } = audit;
  const hasImage = !!assets.render_image;

  return (
    <>
      <p className="mb-4">
        <Link href="/" className="text-ink no-underline hover:underline">
          &larr; Back to all audits
        </Link>
      </p>

      {/* Hero */}
      <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm mb-5">
        <div className="text-muted text-sm">Skechers Email Audit</div>
        <h1 className="text-xl font-bold mt-1 mb-3">{email.subject}</h1>
        <table className="mt-3.5">
          <tbody>
            <tr>
              <td className="text-muted font-semibold whitespace-nowrap w-20 py-1 pr-3 text-sm">
                From
              </td>
              <td className="py-1 text-sm">{email.from}</td>
            </tr>
            <tr>
              <td className="text-muted font-semibold whitespace-nowrap w-20 py-1 pr-3 text-sm">
                Received
              </td>
              <td className="py-1 text-sm">{email.date_formatted}</td>
            </tr>
            <tr>
              <td className="text-muted font-semibold whitespace-nowrap w-20 py-1 pr-3 text-sm">
                Score
              </td>
              <td className="py-1">
                <ScoreBadge score={review.score} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Content: 2-col when image exists */}
      <div
        className={
          hasImage
            ? "grid grid-cols-[1.25fr_.9fr] gap-5 max-md:grid-cols-1"
            : ""
        }
      >
        <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
          <ReviewContent markdown={review.raw_markdown} />
        </div>
        {hasImage && (
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/audits/${slug}/render.png`}
              alt="Email webview render"
              className="w-full border border-gray-200 rounded-2xl"
            />
          </div>
        )}
      </div>

      <QaCard qa={qa} />
    </>
  );
}
