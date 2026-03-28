import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAuditBySlug, getAllSlugs } from "@/lib/audits";
import { splitReview } from "@/lib/types";
import { ReviewContent } from "@/components/ReviewContent";
import { QaCard } from "@/components/QaCard";
import { ScoreBadge } from "@/components/ScoreBadge";
import { TabNav } from "@/components/TabNav";

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

function TwoColLayout({
  left,
  right,
  hasImage,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  hasImage: boolean;
}) {
  return (
    <div
      className={
        hasImage
          ? "grid grid-cols-[1.25fr_.9fr] gap-5 max-md:grid-cols-1"
          : ""
      }
    >
      {left}
      {hasImage && right}
    </div>
  );
}

function EmailImage({ slug }: { slug: string }) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/audits/${slug}/render.png`}
        alt="Email webview render"
        className="w-full border border-gray-200 rounded-2xl"
      />
    </div>
  );
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
  const { content, technical } = splitReview(review.raw_markdown);

  return (
    <>
      <p className="mb-4">
        <Link href="/" className="text-ink no-underline hover:underline">
          &larr; Back to all reviews
        </Link>
      </p>

      {/* Hero */}
      <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm mb-5">
        <div className="text-muted text-sm">Skechers Experience Review</div>
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

      <TabNav
        tabs={[
          {
            id: "content",
            label: "Content Review",
            content: (
              <TwoColLayout
                hasImage={hasImage}
                left={
                  <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
                    <ReviewContent markdown={content} />
                  </div>
                }
                right={<EmailImage slug={slug} />}
              />
            ),
          },
          {
            id: "technical",
            label: "Technical",
            content: (
              <div className="flex flex-col gap-5">
                <TwoColLayout
                  hasImage={hasImage}
                  left={
                    technical ? (
                      <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
                        <ReviewContent markdown={technical} />
                      </div>
                    ) : (
                      <div />
                    )
                  }
                  right={<EmailImage slug={slug} />}
                />
                <QaCard qa={qa} />
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
