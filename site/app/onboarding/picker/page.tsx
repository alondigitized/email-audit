import { redirect } from "next/navigation";
import { loadOnboardingState } from "@/lib/onboarding/state";
import {
  PersonaProposalSchema,
  CompetitorProposalSchema,
} from "@/lib/onboarding/research-prompt";
import { z } from "zod";
import { commitPickerAction, regenerateResearchAction } from "../actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Pick a persona · etell" };

export default async function PickerPage() {
  const state = await loadOnboardingState();
  if (state.personaSlug) redirect("/chat");
  const r = state.tenant.research;
  if (!r?.personas || !r?.competitors) redirect("/onboarding");

  const personas = z.array(PersonaProposalSchema).safeParse(r.personas);
  const competitors = z.array(CompetitorProposalSchema).safeParse(r.competitors);
  if (!personas.success || !competitors.success) redirect("/onboarding?error=corrupt");

  const recPersona = r.recommended_persona_idx ?? 0;
  const recCompetitor = r.recommended_competitor_idx ?? 0;

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="mb-3 px-3 py-1 inline-block rounded-full bg-sky-50 text-sky-700 text-xs font-medium tracking-wide uppercase">
        Step 2 of 3
      </div>
      <h1 className="text-3xl font-bold mb-2">Pick your persona &amp; competitor</h1>
      <p className="text-muted text-sm mb-8">
        We propose 3 personas — pick the one that mirrors your highest-leverage
        customer. The other two unlock with upgrade. Pick a competitor whose
        emails you want benchmarked alongside yours.
      </p>

      <form action={commitPickerAction} id="picker-form">
        <SectionLabel>Personas</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {personas.data.map((p, i) => (
            <label
              key={i}
              htmlFor={`persona-${i}`}
              className="block bg-white border-2 border-gray-200 has-[:checked]:border-sky-500 rounded-2xl p-4 cursor-pointer transition-colors"
            >
              <input
                id={`persona-${i}`}
                type="radio"
                name="persona_idx"
                value={i}
                defaultChecked={i === recPersona}
                className="sr-only"
              />
              <div className="flex items-baseline justify-between mb-1">
                <div className="font-semibold text-base">{p.name}</div>
                {i === recPersona && (
                  <span className="text-[10px] uppercase tracking-wide bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded">
                    ★ Recommended
                  </span>
                )}
              </div>
              <div className="text-xs text-muted mb-2">
                {p.age} · {p.generation} · {p.gender}
              </div>
              <p className="text-sm mb-2 line-clamp-2">{p.style}</p>
              <p className="text-xs text-muted italic mb-2 line-clamp-3">
                {p.rationale}
              </p>
              <div className="flex flex-wrap gap-1">
                {p.focus_areas.slice(0, 4).map((f) => (
                  <span
                    key={f}
                    className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </label>
          ))}
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
          Don&apos;t love these? Generate a new set →
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
