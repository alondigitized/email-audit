import { eq as drizzleEq } from "drizzle-orm";
import { db, reactions, personas as personasTable } from "@/lib/db/client";
import type { AuditData, JourneyStep, PerfStep } from "@/lib/types";
import { splitReview, stripInventorySummary } from "@/lib/types";
import type { ReviewSections } from "@/lib/schema/audit";
import { signGetUrl, r2IsConfigured } from "@/lib/storage/r2";
import { ReviewContent } from "@/components/ReviewContent";
import { QaCard } from "@/components/QaCard";
import { ScoreBadge } from "@/components/ScoreBadge";
import { LikelihoodPill } from "@/components/LikelihoodPill";
import { scoreLabels } from "@/lib/score-labels";
import { TabNav } from "@/components/TabNav";
import { CollapsibleReview } from "./CollapsibleReview";
import { RewritesPanel } from "./RewritesPanel";
import { InventoryVariantDetail } from "./InventoryPane";
import { InventoryCoverageMatrix } from "./InventoryHeatmap";

// Body of the audit detail page — everything below the back-link / share
// row. Used by both the authed `/audits/[slug]` route and the public
// `/share/[token]` route. The two callers differ only in:
//   - which fetch path produced `audit` (persona ACL vs share token)
//   - the surrounding chrome (back link + share button vs static logo)
//   - whether the persona-private "Rewrites" tab is exposed
//
// All of the per-page DB lookups (rewrites, persona display name) and
// signed-URL minting live here so the two routes stay thin.

async function resolveImageUrl(
  slug: string,
  r2Key: string | null | undefined,
  legacyFilename: string | null | undefined
): Promise<string | null> {
  if (r2Key && r2IsConfigured()) {
    try {
      return await signGetUrl(r2Key, 900);
    } catch {
      // fall through
    }
  }
  if (legacyFilename) return `/images/audits/${slug}/${legacyFilename}`;
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
        s.viewport_screenshot
      );
    })
  );
  return { heroUrl, stepUrls };
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
          ? "grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-5 max-md:grid-cols-1"
          : ""
      }
    >
      {left}
      {hasImage && right}
    </div>
  );
}

function ReviewPane({
  markdown,
  sections,
  channel,
  isSiteJourney,
  hasImage,
  heroUrl,
  webviewUrl,
  journeySteps,
  stepUrls,
}: {
  markdown: string | null;
  sections?: ReviewSections | null;
  channel?: "email" | "site" | "inventory" | "qa" | null;
  isSiteJourney: boolean;
  hasImage: boolean;
  heroUrl: string | null;
  webviewUrl: string | null | undefined;
  journeySteps: JourneyStep[];
  stepUrls: Record<number, string | null>;
}) {
  const hasStructuredSections =
    !!sections &&
    Object.values(sections).some((v) => Array.isArray(v) && v.length > 0);
  const card = hasStructuredSections && sections ? (
    <CollapsibleReview sections={sections} channel={channel ?? null} />
  ) : markdown ? (
    <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
      <ReviewContent markdown={markdown} />
    </div>
  ) : (
    <div />
  );

  if (isSiteJourney) {
    // Single-hero homepage audit (no per-step gallery). Render side-by-
    // side like email audits — review on the left, captured homepage
    // screenshot on the right — so behavior matches user expectations
    // across audit types on desktop.
    if (journeySteps.length === 0) {
      const hero = heroUrl ? (
        <div className="bg-white border border-gray-200 rounded-[20px] p-3 shadow-sm">
          <div className="text-[11px] uppercase tracking-wide text-muted px-2 py-1">
            Proof — homepage as captured
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroUrl}
            alt="Homepage screenshot captured at audit time"
            className="w-full rounded-2xl border border-gray-100"
          />
          {webviewUrl && (
            <a
              href={webviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm text-muted mt-2 hover:text-ink transition-colors"
            >
              Open live site &rarr;
            </a>
          )}
        </div>
      ) : null;
      return <TwoColLayout hasImage={!!heroUrl} left={card} right={hero} />;
    }
    return (
      <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-5 max-md:grid-cols-1">
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

function EmailImage({
  imageUrl,
  webviewUrl,
}: {
  imageUrl: string | null;
  webviewUrl?: string | null;
}) {
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
            <div
              key={step.step}
              className="bg-white border border-gray-200 rounded-[20px] p-4 shadow-sm overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-xs font-bold text-muted shrink-0">
                  {step.step}
                </span>
                <span className="font-semibold text-sm">{step.label}</span>
                {step.status === "failed" && (
                  <span className="text-xs text-red-600 font-semibold">
                    Failed
                  </span>
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
                <td className="py-2 pr-4 tabular-nums">
                  {s.ttfb_ms != null ? `${s.ttfb_ms}ms` : "--"}
                </td>
                <td className="py-2 pr-4 tabular-nums">
                  {s.lcp_ms != null ? `${s.lcp_ms}ms` : "--"}
                </td>
                <td className="py-2 tabular-nums">
                  {s.cls != null ? s.cls : "--"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function AuditBody({
  audit,
  showRewrites,
}: {
  audit: AuditData;
  // The Rewrites tab fires a server action that mutates persona-private
  // state — only show on the authed route.
  showRewrites: boolean;
}) {
  const { email, review, qa, assets } = audit;
  // "Site Journey" is the hero label/chrome treatment used for both
  // homepage-walkthrough audits (type='site') and inventory audits
  // (type='inventory') because both came from a Playwright session
  // rather than an inbox-delivered email. Distinct downstream logic
  // (matrix, variant detail, CSV) keys off `audit.inventory` instead
  // of the type flag.
  const isSiteJourney =
    audit.type === "site" || audit.type === "inventory";
  const hasImage = !!(assets.render_image || assets.render_image_key);
  const journeySteps = assets.journey_steps || [];
  const perfSteps = audit.performance?.steps || [];
  const split = splitReview(review.raw_markdown);
  // For inventory audits, the producer prepends a markdown summary
  // table. We replace it with the visual coverage matrix below, so
  // strip the textual block out of the rendered content.
  const content = audit.inventory
    ? stripInventorySummary(split.content)
    : split.content;
  const technical = split.technical;

  const { heroUrl, stepUrls } = await resolveAllImageUrls(audit);

  // Sign the audio MP3 url like screenshots. Signed for 1 hour — the
  // page-level cache + the browser <audio> element both tolerate that
  // window better than the 15-min default.
  const audioMeta = review.audio ?? null;
  let audioUrl: string | null = null;
  if (audioMeta?.key && r2IsConfigured()) {
    try {
      audioUrl = await signGetUrl(audioMeta.key, 3600);
    } catch {
      audioUrl = null;
    }
  }

  const [rewriteRow] = showRewrites
    ? await db
        .select({ rewrites: reactions.rewrites })
        .from(reactions)
        .where(drizzleEq(reactions.slug, audit.slug))
        .limit(1)
    : [];
  const rewrites = (rewriteRow?.rewrites ?? null) as
    | React.ComponentProps<typeof RewritesPanel>["rewrites"]
    | null;
  // Pull persona display data unconditionally when the audit has a
  // persona — the hero card always shows name + identity chips, and the
  // RewritesPanel separately needs the short name for its CTA copy.
  let personaDisplayName = audit.persona ?? "the persona";
  let personaIdentity: {
    name: string;
    short: string | null;
    kind: "brand" | "industry";
    age: number | null;
    generation: string | null;
    gender: string | null;
    style: string | null;
  } | null = null;
  if (audit.persona) {
    const [pr] = await db
      .select({
        short: personasTable.short,
        name: personasTable.name,
        profile: personasTable.profile,
        kind: personasTable.kind,
      })
      .from(personasTable)
      .where(drizzleEq(personasTable.slug, audit.persona))
      .limit(1);
    if (pr) {
      personaDisplayName = pr.short ?? pr.name ?? audit.persona;
      const identity = pr.profile?.identity;
      personaIdentity = {
        name: pr.name,
        short: pr.short ?? null,
        kind: pr.kind,
        age: identity?.age ?? null,
        generation: identity?.generation ?? null,
        gender: identity?.gender ?? null,
        style: identity?.style ?? null,
      };
    }
  }

  let inventoryCsvUrl: string | null = null;
  const inventoryCsvKey = audit.inventory?.csv_key ?? null;
  const variantScreenshotUrls: Record<string, string> = {};
  if (audit.inventory && r2IsConfigured()) {
    if (inventoryCsvKey) {
      try {
        inventoryCsvUrl = await signGetUrl(inventoryCsvKey, 900);
      } catch {
        inventoryCsvUrl = null;
      }
    }
    const keys = new Set<string>();
    for (const plp of audit.inventory.plps) {
      if (plp.plp_screenshot_key) keys.add(plp.plp_screenshot_key);
      for (const style of plp.styles) {
        for (const v of style.variants) {
          if (v.pdp_screenshot_key) keys.add(v.pdp_screenshot_key);
        }
      }
    }
    await Promise.all(
      [...keys].map(async (key) => {
        try {
          variantScreenshotUrls[key] = await signGetUrl(key, 900);
        } catch {}
      })
    );
  }

  const heroLabel = isSiteJourney
    ? `${email.from_display_name} Site Journey`
    : "Email Experience Intelligence";
  const fromLabel = isSiteJourney ? "Site" : "From";

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm mb-5 overflow-hidden">
        <div className="text-muted text-sm flex items-center gap-2">
          {heroLabel}
          {isSiteJourney && (
            <span className="inline-block px-1.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-700">
              Journey
            </span>
          )}
        </div>
        <h1 className="text-xl font-bold mt-1 mb-1 break-words">
          {email.subject}
        </h1>
        {!isSiteJourney && email.preheader && (
          <p className="text-muted text-sm mt-0 mb-3 italic break-words">
            {email.preheader}
          </p>
        )}
        <div className="mt-3.5 flex flex-col gap-1 text-sm">
          <div className="flex gap-3">
            <span className="text-muted font-semibold whitespace-nowrap w-20 shrink-0">
              {fromLabel}
            </span>
            <span className="break-words min-w-0">{email.from}</span>
          </div>
          <div className="flex gap-3">
            <span className="text-muted font-semibold whitespace-nowrap w-20 shrink-0">
              {isSiteJourney ? "Captured" : "Received"}
            </span>
            <span>{email.date_formatted}</span>
          </div>
          {audit.persona && (
            <div className="flex gap-3">
              <span className="text-muted font-semibold whitespace-nowrap w-20 shrink-0">
                Persona
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="font-semibold text-gray-900">
                    {personaIdentity?.name ?? personaDisplayName}
                  </span>
                  {personaIdentity?.kind && (
                    <span
                      className={`inline-block px-1.5 py-0.5 rounded text-[11px] font-semibold ${
                        personaIdentity.kind === "industry"
                          ? "bg-purple-50 text-purple-700"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {personaIdentity.kind === "industry"
                        ? "Industry"
                        : "Brand"}
                    </span>
                  )}
                  {personaIdentity &&
                    [
                      personaIdentity.age ? `${personaIdentity.age}` : null,
                      personaIdentity.gender,
                      personaIdentity.generation,
                    ]
                      .filter(Boolean)
                      .map((chip, i) => (
                        <span
                          key={i}
                          className="text-xs text-muted whitespace-nowrap"
                        >
                          {i === 0 ? "" : "·"} {chip}
                        </span>
                      ))}
                </div>
                {personaIdentity?.style && (
                  <p className="text-xs text-muted mt-0.5 break-words">
                    {personaIdentity.style}
                  </p>
                )}
              </div>
            </div>
          )}
          <div className="flex gap-3 items-center">
            <span className="text-muted font-semibold whitespace-nowrap w-20 shrink-0">
              Score
            </span>
            <ScoreBadge score={review.score} />
          </div>
          {inventoryCsvUrl && (
            <div className="flex gap-3 items-center">
              <span className="text-muted font-semibold whitespace-nowrap w-20 shrink-0">
                Detail
              </span>
              <a
                href={inventoryCsvUrl}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-700 hover:text-sky-900 underline"
              >
                Download spreadsheet (CSV)
              </a>
            </div>
          )}
          {audit.auto_confirm && (
            <div className="flex gap-3 items-start">
              <span className="text-muted font-semibold whitespace-nowrap w-20 shrink-0">
                Confirm
              </span>
              <div className="flex-1 min-w-0">
                {audit.auto_confirm.success ? (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    ✓ auto-confirmed
                    {typeof audit.auto_confirm.http_status === "number" && (
                      <span className="font-normal opacity-80">
                        HTTP {audit.auto_confirm.http_status}
                      </span>
                    )}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200">
                    ✗ auto-confirm failed
                    {typeof audit.auto_confirm.http_status === "number" && (
                      <span className="font-normal opacity-80">
                        HTTP {audit.auto_confirm.http_status}
                      </span>
                    )}
                  </span>
                )}
                {audit.auto_confirm.url && (
                  <a
                    href={audit.auto_confirm.url}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 text-xs text-sky-700 hover:text-sky-900 underline break-all"
                  >
                    open link
                  </a>
                )}
                {audit.auto_confirm.error && (
                  <div className="mt-1 text-[11px] text-rose-700 italic break-words">
                    {audit.auto_confirm.error}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {review.predictions &&
          (() => {
            const labels = scoreLabels(audit.type);
            return (
              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                {review.predictions.open_likelihood && (
                  <LikelihoodPill
                    label={labels.firstStep}
                    score={review.predictions.open_likelihood.score}
                    rationale={review.predictions.open_likelihood.rationale}
                  />
                )}
                {review.predictions.click_likelihood && (
                  <LikelihoodPill
                    label={labels.secondStep}
                    score={review.predictions.click_likelihood.score}
                    rationale={review.predictions.click_likelihood.rationale}
                  />
                )}
              </div>
            );
          })()}
      </div>

      {audioUrl && audioMeta && (
        <div className="bg-white border border-gray-200 rounded-[20px] p-4 shadow-sm mb-5">
          <div className="flex items-baseline justify-between gap-3 mb-1">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted">
              Listen
            </div>
            <div className="text-[11px] text-muted tabular-nums">
              {Math.floor(audioMeta.duration_sec / 60)}:
              {String(audioMeta.duration_sec % 60).padStart(2, "0")}
            </div>
          </div>
          <audio controls preload="none" src={audioUrl} className="w-full">
            Your browser doesn't support inline audio.
          </audio>
        </div>
      )}

      {audit.inventory ? (
        // Single-page layout for inventory audits — no tabs. The
        // content is linear (matrix → narrative → variant detail) and
        // tab-flipping was hiding the relationship between the persona's
        // take and the underlying data. Rewrites + Technical have no
        // surface here so they're omitted.
        <div className="flex flex-col gap-5">
          <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm overflow-hidden">
            <InventoryCoverageMatrix inventory={audit.inventory} totals />
          </div>
          {content && (
            <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
              <ReviewContent markdown={content} />
            </div>
          )}
          <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm overflow-hidden">
            <InventoryVariantDetail
              inventory={audit.inventory}
              signedScreenshotUrls={variantScreenshotUrls}
              csvUrl={inventoryCsvUrl}
            />
          </div>
        </div>
      ) : (
        <TabNav
          tabs={[
            {
              id: "content",
              label: "Content Review",
              content: (
                <ReviewPane
                  markdown={content}
                  sections={review.sections as ReviewSections}
                  channel={audit.type ?? "email"}
                  isSiteJourney={isSiteJourney}
                  hasImage={hasImage}
                  heroUrl={heroUrl}
                  webviewUrl={assets.webview_url}
                  journeySteps={journeySteps}
                  stepUrls={stepUrls}
                />
              ),
            },
            ...(showRewrites && audit.persona
              ? [
                  {
                    id: "rewrites",
                    label: rewrites
                      ? `Rewrites (${rewrites.alternatives.length})`
                      : "Rewrites",
                    content: (
                      <RewritesPanel
                        slug={audit.slug}
                        personaName={personaDisplayName}
                        rewrites={rewrites}
                      />
                    ),
                  },
                ]
              : []),
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
      )}
    </>
  );
}
