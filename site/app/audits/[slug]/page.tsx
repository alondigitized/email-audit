import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAuditBySlug, getAllSlugs } from "@/lib/audits";
import { splitReview } from "@/lib/types";
import type { JourneyStep, PerfStep } from "@/lib/types";
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

function EmailImage({ slug, webviewUrl }: { slug: string; webviewUrl?: string | null }) {
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/audits/${slug}/render.png`}
        alt="Email webview render"
        className="w-full border border-gray-200 rounded-2xl"
      />
      {webviewUrl && (
        <a
          href={webviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-sm text-muted mt-2 hover:text-ink transition-colors"
        >
          View original email &rarr;
        </a>
      )}
    </div>
  );
}

function JourneyGallery({ slug, steps }: { slug: string; steps: JourneyStep[] }) {
  return (
    <div className="flex flex-col gap-6">
      {steps.filter(s => s.viewport_screenshot).map((step) => (
        <div key={step.step} className="bg-white border border-gray-200 rounded-[20px] p-4 shadow-sm overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-xs font-bold text-muted shrink-0">
              {step.step}
            </span>
            <span className="font-semibold text-sm">{step.label}</span>
            {step.status === "failed" && (
              <span className="text-xs text-red-600 font-semibold">Failed</span>
            )}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/audits/${slug}/${step.viewport_screenshot}`}
            alt={`Step ${step.step}: ${step.label}`}
            className="w-full border border-gray-200 rounded-xl"
          />
          {step.url && (
            <a
              href={step.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs text-muted mt-2 hover:text-ink transition-colors truncate"
            >
              {step.url}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

function PerfTable({ steps }: { steps: PerfStep[] }) {
  if (!steps.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm overflow-hidden">
      <h2 className="mt-0 mb-3 text-base font-bold">Performance Metrics</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-xs text-muted uppercase tracking-wide">
              <th className="py-2 pr-4">Step</th>
              <th className="py-2 pr-4">TTFB</th>
              <th className="py-2 pr-4">LCP</th>
              <th className="py-2">CLS</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((s) => (
              <tr key={s.step} className="border-t border-gray-100">
                <td className="py-2 pr-4 font-medium">{s.label}</td>
                <td className="py-2 pr-4 tabular-nums">{s.ttfb_ms != null ? `${s.ttfb_ms}ms` : "--"}</td>
                <td className="py-2 pr-4 tabular-nums">{s.lcp_ms != null ? `${s.lcp_ms}ms` : "--"}</td>
                <td className="py-2 tabular-nums">{s.cls != null ? s.cls : "--"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
  const isSiteJourney = audit.type === "site";
  const hasImage = !!assets.render_image;
  const journeySteps = assets.journey_steps || [];
  const perfSteps = audit.performance?.steps || [];
  const { content, technical } = splitReview(review.raw_markdown);

  const heroLabel = isSiteJourney
    ? `${email.from_display_name} Site Journey`
    : "Skechers Experience Review";
  const fromLabel = isSiteJourney ? "Site" : "From";

  return (
    <>
      <p className="mb-4">
        <Link href="/" className="text-ink no-underline hover:underline">
          &larr; Back to all reviews
        </Link>
      </p>

      {/* Hero */}
      <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm mb-5 overflow-hidden">
        <div className="text-muted text-sm flex items-center gap-2">
          {heroLabel}
          {isSiteJourney && (
            <span className="inline-block px-1.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-700">
              Journey
            </span>
          )}
        </div>
        <h1 className="text-xl font-bold mt-1 mb-3 break-words">{email.subject}</h1>
        <div className="mt-3.5 flex flex-col gap-1 text-sm">
          <div className="flex gap-3">
            <span className="text-muted font-semibold whitespace-nowrap w-20 shrink-0">{fromLabel}</span>
            <span className="break-words min-w-0">{email.from}</span>
          </div>
          <div className="flex gap-3">
            <span className="text-muted font-semibold whitespace-nowrap w-20 shrink-0">{isSiteJourney ? "Captured" : "Received"}</span>
            <span>{email.date_formatted}</span>
          </div>
          {audit.persona && (
            <div className="flex gap-3">
              <span className="text-muted font-semibold whitespace-nowrap w-20 shrink-0">Persona</span>
              <span className="capitalize">{audit.persona}</span>
            </div>
          )}
          <div className="flex gap-3 items-center">
            <span className="text-muted font-semibold whitespace-nowrap w-20 shrink-0">Score</span>
            <ScoreBadge score={review.score} />
          </div>
        </div>
      </div>

      <TabNav
        tabs={[
          {
            id: "content",
            label: "Content Review",
            content: isSiteJourney ? (
              <div className="grid grid-cols-[1.25fr_.9fr] gap-5 max-md:grid-cols-1">
                <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
                  <ReviewContent markdown={content} />
                </div>
                <JourneyGallery slug={slug} steps={journeySteps} />
              </div>
            ) : (
              <TwoColLayout
                hasImage={hasImage}
                left={
                  <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
                    <ReviewContent markdown={content} />
                  </div>
                }
                right={<EmailImage slug={slug} webviewUrl={assets.webview_url} />}
              />
            ),
          },
          {
            id: "technical",
            label: "Technical",
            content: (
              <div className="flex flex-col gap-5">
                {isSiteJourney ? (
                  <div className="grid grid-cols-[1.25fr_.9fr] gap-5 max-md:grid-cols-1">
                    {technical ? (
                      <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
                        <ReviewContent markdown={technical} />
                      </div>
                    ) : (
                      <div />
                    )}
                    <JourneyGallery slug={slug} steps={journeySteps} />
                  </div>
                ) : (
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
                    right={<EmailImage slug={slug} webviewUrl={assets.webview_url} />}
                  />
                )}
                {perfSteps.length > 0 && <PerfTable steps={perfSteps} />}
                <QaCard qa={qa} />
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
