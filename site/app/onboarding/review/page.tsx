import { redirect } from "next/navigation";
import { z } from "zod";
import { loadOnboardingState, getUserDomain } from "@/lib/onboarding/state";
import {
  PersonaProposalSchema,
  CompetitorProposalSchema,
} from "@/lib/onboarding/research-prompt";
import { ReviewForm } from "./ReviewForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Review your bootstrap · etell" };

export default async function ReviewPage({
  searchParams,
}: {
  searchParams?: Promise<{ error?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  const state = await loadOnboardingState();
  if (state.personaSlug) redirect("/chat");
  const r = state.tenant.research;
  if (!r?.personas || !r?.competitors) redirect("/onboarding");

  const personasParse = z.array(PersonaProposalSchema).safeParse(r.personas);
  const competitorsParse = z
    .array(CompetitorProposalSchema)
    .safeParse(r.competitors);
  if (!personasParse.success || !competitorsParse.success) {
    redirect("/onboarding?error=corrupt");
  }
  const personas = personasParse.data;
  const competitors = competitorsParse.data;
  const recommendedIdx = Math.max(
    0,
    Math.min(personas.length - 1, r.recommended_persona_idx ?? 0)
  );

  const ownDomain = (await getUserDomain()) ?? state.tenant.name;

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-2">Review your bootstrap</h1>
      <p className="text-muted text-sm mb-8 max-w-xl">
        Pick which persona will represent {ownDomain}. They&apos;ll review every
        email and site experience you put in front of them, scoring it from
        their own perspective. Pick the email programs to enroll, fine-tune
        their identity below, and we&apos;ll start auditing.
      </p>

      {sp.error && (
        <div className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-4">
          {sp.error}
        </div>
      )}

      <ReviewForm
        personas={personas}
        competitors={competitors}
        recommendedIdx={recommendedIdx}
        ownDomain={ownDomain}
      />
    </div>
  );
}
