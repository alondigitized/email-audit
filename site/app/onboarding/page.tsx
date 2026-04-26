import { redirect } from "next/navigation";
import { loadOnboardingState, getUserDomain } from "@/lib/onboarding/state";
import { ResearchTrigger } from "./ResearchTrigger";

export const dynamic = "force-dynamic";
export const metadata = { title: "Onboarding · etell" };

export default async function OnboardingLanding() {
  const state = await loadOnboardingState();

  // Already past the wizard.
  if (state.personaSlug) redirect("/chat");
  // Step 1 already done — skip ahead. Routing to picker vs concierge happens
  // in ResearchTrigger / startWizardStep1Action; no need to duplicate the
  // template lookup here.
  if (state.tenant.research?.industry && state.tenant.research?.competitors) {
    redirect("/onboarding/picker");
  }

  const domain = await getUserDomain();

  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <div className="inline-block mb-6 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-medium tracking-wide uppercase">
        Step 1 of 3
      </div>
      <h1 className="text-3xl font-bold mb-3">
        Sizing up {domain ?? "your company"}…
      </h1>
      <p className="text-muted text-base max-w-md mx-auto mb-10">
        We&apos;re classifying your industry and pulling 5 close competitors so
        we can match you to a curated persona. Usually finishes in about
        20&ndash;30 seconds.
      </p>
      <ResearchTrigger />
    </div>
  );
}
