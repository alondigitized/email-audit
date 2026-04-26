import { redirect } from "next/navigation";
import { inArray, eq, and, sql } from "drizzle-orm";
import { z } from "zod";
import { loadOnboardingState } from "@/lib/onboarding/state";
import { CompetitorProposalSchema } from "@/lib/onboarding/research-prompt";
import { db, personaTemplates, audits } from "@/lib/db/client";
import { commitPickerAction, regenerateResearchAction } from "../actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Pick a persona · etell" };

export default async function PickerPage() {
  const state = await loadOnboardingState();
  if (state.personaSlug) redirect("/chat");
  const r = state.tenant.research;
  if (!r?.industry || !r?.competitors) redirect("/onboarding");

  const slugs = r.available_template_slugs ?? [];
  if (slugs.length === 0) redirect("/onboarding/concierge");

  const competitors = z.array(CompetitorProposalSchema).safeParse(r.competitors);
  if (!competitors.success) redirect("/onboarding?error=corrupt");

  const recCompetitor = r.recommended_competitor_idx ?? 0;

  // Fetch templates + their accumulated audit counts. The audit count is
  // surfaced as a credibility line ("400 audits curated") so the picker
  // doesn't feel like a sterile form.
  const [templates, auditCounts] = await Promise.all([
    db
      .select({
        slug: personaTemplates.slug,
        name: personaTemplates.name,
        short: personaTemplates.short,
        profile: personaTemplates.profile,
      })
      .from(personaTemplates)
      .where(
        and(
          inArray(personaTemplates.slug, slugs),
          eq(personaTemplates.isActive, true)
        )
      ),
    db
      .select({
        persona: audits.persona,
        n: sql<number>`count(*)::int`,
      })
      .from(audits)
      .where(inArray(audits.persona, slugs))
      .groupBy(audits.persona),
  ]);

  if (templates.length === 0) redirect("/onboarding/concierge");

  const auditCountBySlug = new Map(auditCounts.map((c) => [c.persona, c.n]));

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="mb-3 px-3 py-1 inline-block rounded-full bg-sky-50 text-sky-700 text-xs font-medium tracking-wide uppercase">
        Step 2 of 3
      </div>
      <h1 className="text-3xl font-bold mb-2">Pick your persona &amp; competitor</h1>
      <p className="text-muted text-sm mb-1">
        Industry: <strong>{r.industry}</strong>
        {r.industry_confidence === "low" && (
          <span className="ml-2 text-amber-700">
            (low confidence — flag us if this is wrong)
          </span>
        )}
      </p>
      <p className="text-muted text-sm mb-8">
        These personas are curated by our team and have months of accumulated
        reviews behind them. Your fork inherits all that history immediately.
      </p>

      <form action={commitPickerAction} id="picker-form">
        <SectionLabel>Personas</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {templates.map((t, i) => {
            const id = t.profile?.identity;
            const auditCount = auditCountBySlug.get(t.slug) ?? 0;
            return (
              <label
                key={t.slug}
                htmlFor={`template-${t.slug}`}
                className="block bg-white border-2 border-gray-200 has-[:checked]:border-sky-500 rounded-2xl p-4 cursor-pointer transition-colors"
              >
                <input
                  id={`template-${t.slug}`}
                  type="radio"
                  name="template_slug"
                  value={t.slug}
                  defaultChecked={i === 0}
                  className="sr-only"
                  required
                />
                <div className="flex items-baseline justify-between mb-1">
                  <div className="font-semibold text-base">{t.name}</div>
                  {i === 0 && (
                    <span className="text-[10px] uppercase tracking-wide bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded">
                      ★ Recommended
                    </span>
                  )}
                </div>
                {id && (
                  <div className="text-xs text-muted mb-2">
                    {id.age} · {id.generation} · {id.gender}
                  </div>
                )}
                {id?.style && (
                  <p className="text-sm mb-2 line-clamp-3">{id.style}</p>
                )}
                {id?.focus_areas && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {id.focus_areas.slice(0, 4).map((f) => (
                      <span
                        key={f}
                        className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                )}
                <div className="text-[11px] text-muted italic">
                  {auditCount > 0
                    ? `${auditCount.toLocaleString()} audit${auditCount === 1 ? "" : "s"} curated`
                    : "Fresh persona — your fork starts the brain"}
                </div>
              </label>
            );
          })}
        </div>

        <SectionLabel>Competitor to benchmark against</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          {competitors.data.map((c, i) => (
            <label
              key={i}
              htmlFor={`competitor-${i}`}
              className="block bg-white border-2 border-gray-200 has-[:checked]:border-sky-500 rounded-2xl p-4 cursor-pointer transition-colors"
            >
              <input
                id={`competitor-${i}`}
                type="radio"
                name="competitor_idx"
                value={i}
                defaultChecked={i === recCompetitor}
                className="sr-only"
              />
              <div className="flex items-baseline justify-between mb-1">
                <div className="font-semibold text-base">{c.name}</div>
                {i === recCompetitor && (
                  <span className="text-[10px] uppercase tracking-wide bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded">
                    ★ Recommended
                  </span>
                )}
              </div>
              <div className="text-xs font-mono text-muted mb-2">{c.domain}</div>
              <p className="text-sm line-clamp-2">{c.rationale}</p>
            </label>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="px-5 py-2.5 bg-accent text-white font-semibold rounded-xl text-[15px]"
          >
            Continue →
          </button>
        </div>
      </form>

      <form action={regenerateResearchAction} className="mt-10">
        <button
          type="submit"
          className="text-xs text-muted underline hover:text-sky-700"
        >
          Don&apos;t love these? Re-run step 1 →
        </button>
      </form>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-wide text-muted font-medium mb-2">
      {children}
    </div>
  );
}
