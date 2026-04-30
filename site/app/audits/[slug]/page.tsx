import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAuditBySlugForUser } from "@/lib/audits";
import { requireUser } from "@/lib/dal";
import { recordPageView } from "@/lib/analytics";
import { splitReview } from "@/lib/types";
import type { JourneyStep, PerfStep, AuditData } from "@/lib/types";
import { ReviewContent } from "@/components/ReviewContent";
import { QaCard } from "@/components/QaCard";
import { ScoreBadge } from "@/components/ScoreBadge";
import { LikelihoodPill } from "@/components/LikelihoodPill";
import { TabNav } from "@/components/TabNav";
import { signGetUrl, r2IsConfigured } from "@/lib/storage/r2";

// S7: per-user filtering means we can't statically pre-render slugs.
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const user = await requireUser();
  const audit = await getAuditBySlugForUser(slug, user.personas);
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

// Shared layout for both tab panes. Site journeys get a 2-col grid with
// a step gallery on the right; email audits get the TwoColLayout with
// the hero image. `markdown === null` is the "technical tab, no extra
// content" case — renders an empty placeholder so the grid columns stay
// aligned.
function ReviewPane({
  markdown,
  isSiteJourney,
  hasImage,
  heroUrl,
  webviewUrl,
  journeySteps,
  stepUrls,
}: {
  markdown: string | null;
  isSiteJourney: boolean;
  hasImage: boolean;
  heroUrl: string | null;
  webviewUrl: string | null | undefined;
  journeySteps: JourneyStep[];
  stepUrls: Record<number, string | null>;
}) {
  const card = markdown ? (
    <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
      <ReviewContent markdown={markdown} />
    </div>
  ) : (
    <div />
  );

  if (isSiteJourney) {
    return (
      <div className="grid grid-cols-[1.25fr_.9fr] gap-5 max-md:grid-cols-1">
        {card}
        <JourneyGallery steps={journeySteps} stepUrls={stepUrls} />
      </div>
    );
  }
  return (
    <TwoColLayout
      hasImage={hasImage}
      left={card}
      right={<EmailImage imageUrl={heroUrl} webviewUrl={webviewUrl} />}
    />
  );
}

/**
 * Resolve an audit's image to a URL. Prefers an R2 signed URL when a key
 * is present on the audit; otherwise falls back to the legacy
 * /images/audits/{slug}/... path still served from the repo. The proxy
 * gate on that path will keep working during the migration window.
 */
async function resolveImageUrl(
  slug: string,
  r2Key: string | null | undefined,
  legacyFilename: string | null | undefined,
): Promise<string | null> {
  if (r2Key && r2IsConfigured()) {
    try {
      return await signGetUrl(r2Key, 900);
    } catch {
      // Fall through to legacy.
    }
  }
  if (legacyFilename) {
    return `/images/audits/${slug}/${legacyFilename}`;
  }
  return null;
}

async function resolveAllImageUrls(audit: AuditData) {
  const heroKey = audit.assets.render_image_key ?? null;
  const heroLegacy = audit.assets.render_image ? "render.png" : null;
  const heroUrl = await resolveImageUrl(audit.slug, heroKey, heroLegacy);
  const stepUrls: Record<number, string | null> = {};
  const steps = audit.assets.journey_steps ?? [];
  await Promise.all(
    steps.map(async (s) => {
      stepUrls[s.step] = await resolveImageUrl(
        audit.slug,
        s.viewport_screenshot_key,
        s.viewport_screenshot,
      );
    }),
  );
  return { heroUrl, stepUrls };
}

function EmailImage({ imageUrl, webviewUrl }: { imageUrl: string | null; webviewUrl?: string | null }) {
  if (!imageUrl) return null;
  return (
    <div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
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

function JourneyGallery({
  steps,
  stepUrls,
}: {
  steps: JourneyStep[];
  stepUrls: Record<number, string | null>;
}) {
  return (
    <div className="flex flex-col gap-6">
      {steps
        .filter((s) => s.viewport_screenshot || s.viewport_screenshot_key)
        .map((step) => {
          const url = stepUrls[step.step];
          if (!url) return null;
          return (
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
                src={url}
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
          );
        })}
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
  const user = await requireUser();
  const audit = await getAuditBySlugForUser(slug, user.personas);
  if (!audit) notFound();
  await recordPageView({
    userId: user.id,
    isAdmin: user.isAdmin,
    kind: "audit",
    path: `/audits/${slug}`,
  });

  const { email, review, qa, assets } = audit;
  const isSiteJourney = audit.type === "site";
  const hasImage = !!(assets.render_image || assets.render_image_key);
  const journeySteps = assets.journey_steps || [];
  const perfSteps = audit.performance?.steps || [];
  const { content, technical } = splitReview(review.raw_markdown);

  // Resolve R2 signed URLs for every image on this page in one pass. If R2
  // isn't configured (local dev without keys), falls through to legacy paths.
  const { heroUrl, stepUrls } = await resolveAllImageUrls(audit);

  // Inventory audits (Ivy) ship a sidecar CSV with one row per (PLP, style,
  // color, width, size). When the audit row carries `inventory.csv_key`,
  // mint a short-lived signed URL so the user can download the raw data.
  let inventoryCsvUrl: string | null = null;
  const inventoryCsvKey = audit.inventory?.csv_key ?? null;
  if (inventoryCsvKey && r2IsConfigured()) {
    try {
      inventoryCsvUrl = await signGetUrl(inventoryCsvKey, 900);
    } catch {
      inventoryCsvUrl = null;
    }
  }

  const heroLabel = isSiteJourney
    ? `${email.from_display_name} Site Journey`
    : "Email Experience Intelligence";
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
        <h1 className="text-xl font-bold mt-1 mb-1 break-words">{email.subject}</h1>
        {!isSiteJourney && email.preheader && (
          <p className="text-muted text-sm mt-0 mb-3 italic break-words">
            {email.preheader}
          </p>
        )}
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
          {inventoryCsvUrl && (
            <div className="flex gap-3 items-center">
              <span className="text-muted font-semibold whitespace-nowrap w-20 shrink-0">Detail</span>
              <a
                href={inventoryCsvUrl}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-700 hover:text-sky-900 underline"
              >
                Download spreadsheet (CSV)
              </a>
            </div>
          )}
        </div>
        {!isSiteJourney && review.predictions && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
            {review.predictions.open_likelihood && (
              <LikelihoodPill
                label="Open"
                score={review.predictions.open_likelihood.score}
                rationale={review.predictions.open_likelihood.rationale}
              />
            )}
            {review.predictions.click_likelihood && (
              <LikelihoodPill
                label="Click"
                score={review.predictions.click_likelihood.score}
                rationale={review.predictions.click_likelihood.rationale}
              />
            )}
          </div>
        )}
      </div>

      <TabNav
        tabs={[
          {
            id: "content",
            label: "Content Review",
            content: (
              <ReviewPane
                markdown={content}
                isSiteJourney={isSiteJourney}
                hasImage={hasImage}
                heroUrl={heroUrl}
                webviewUrl={assets.webview_url}
                journeySteps={journeySteps}
                stepUrls={stepUrls}
              />
            ),
          },
          {
            id: "technical",
            label: "Technical",
            content: (
              <div className="flex flex-col gap-5">
                <ReviewPane
                  markdown={technical}
                  isSiteJourney={isSiteJourney}
                  hasImage={hasImage}
                  heroUrl={heroUrl}
                  webviewUrl={assets.webview_url}
                  journeySteps={journeySteps}
                  stepUrls={stepUrls}
                />
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
