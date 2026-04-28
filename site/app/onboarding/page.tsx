import { redirect } from "next/navigation";
import { loadOnboardingState, getUserDomain } from "@/lib/onboarding/state";
import { ResearchTrigger } from "./ResearchTrigger";

export const dynamic = "force-dynamic";
export const metadata = { title: "Onboarding · etell" };

export default async function OnboardingLanding() {
  const state = await loadOnboardingState();

  // Already past the wizard.
  if (state.personaSlug) redirect("/chat");
  // Research already done — go straight to review.
  if (state.tenant.research?.personas && state.tenant.research?.competitors) {
    redirect("/onboarding/review");
  }

  const domain = await getUserDomain();

  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <h1 className="text-3xl font-bold mb-3">
        Sizing up {domain ?? "your company"}…
      </h1>
      <p className="text-muted text-base max-w-md mx-auto mb-10">
        We&apos;re profiling your customers and picking 2 competitors to
        benchmark against. Usually finishes in about 30 seconds.
      </p>
      <ResearchTrigger />
    </div>
  );
}
