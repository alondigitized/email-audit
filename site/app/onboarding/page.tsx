import { redirect } from "next/navigation";
import { loadOnboardingState, getUserDomain } from "@/lib/onboarding/state";
import { ResearchTrigger } from "./ResearchTrigger";

export const dynamic = "force-dynamic";
export const metadata = { title: "Onboarding · etell" };

export default async function OnboardingLanding() {
  const state = await loadOnboardingState();

  // Already past the wizard.
  if (state.personaSlug) redirect("/chat");
  // Research already done — go straight to picker.
  if (
    state.tenant.research?.personas &&
    state.tenant.research?.competitors
  ) {
    redirect("/onboarding/picker");
  }

  const domain = await getUserDomain();

  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <div className="inline-block mb-6 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-medium tracking-wide uppercase">
        Step 1 of 3
      </div>
      <h1 className="text-3xl font-bold mb-3">
        Researching {domain ?? "your company"}…
      </h1>
      <p className="text-muted text-base max-w-md mx-auto mb-10">
        We&apos;re reading your homepage and proposing 3 personas + 5
        competitors. Hang tight — this takes about 20 seconds.
      </p>
      <ResearchTrigger />
    </div>
  );
}
