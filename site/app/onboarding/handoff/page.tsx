import { redirect } from "next/navigation";
import { eq, desc } from "drizzle-orm";
import { loadOnboardingState } from "@/lib/onboarding/state";
import { db, laptopProvisioningJobs } from "@/lib/db/client";

export const dynamic = "force-dynamic";
export const metadata = { title: "All set · etell" };

export default async function HandoffPage() {
  const state = await loadOnboardingState();
  if (!state.personaSlug) redirect("/onboarding");

  const [job] = await db
    .select({
      status: laptopProvisioningJobs.status,
      createdAt: laptopProvisioningJobs.createdAt,
    })
    .from(laptopProvisioningJobs)
    .where(eq(laptopProvisioningJobs.personaSlug, state.personaSlug))
    .orderBy(desc(laptopProvisioningJobs.createdAt))
    .limit(1);

  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <div className="inline-block mb-6 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium tracking-wide uppercase">
        Persona created
      </div>
      <h1 className="text-3xl font-bold mb-3">
        {state.personaSlug} is being prepped
      </h1>
      <p className="text-muted text-base max-w-md mx-auto mb-8">
        We&apos;ve provisioned their inbox and queued the laptop bootstrap. Brand
        emails start arriving within hours; the first site audit runs on the
        next scheduled sweep (Saturday morning) and you&apos;ll see it in the
        dashboard. Email audits land continuously as the brand sends them.
      </p>
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 max-w-md mx-auto text-left text-xs text-amber-900 mb-8">
        <strong>Heads-up:</strong> for the first 7 days nothing visible may
        happen until brand emails arrive in the persona&apos;s inbox. The brain
        is accumulating in the background — your dashboard will fill in as
        emails are received and audited.
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-5 max-w-md mx-auto text-left text-sm space-y-2">
        <Row label="Persona" value={state.personaSlug} />
        <Row
          label="Competitor"
          value={state.tenant.competitorTarget?.name ?? "—"}
        />
        <Row
          label="Laptop queue"
          value={job?.status ?? "queued"}
        />
        <Row label="Plan" value={`${state.tenant.plan} (14 days)`} />
      </div>
      <div className="mt-10">
        <a
          href="/chat"
          className="inline-block px-5 py-2.5 bg-accent text-white font-semibold rounded-xl text-[15px]"
        >
          Go to your dashboard →
        </a>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-muted text-xs uppercase tracking-wide">{label}</span>
      <span className="font-mono text-xs">{value}</span>
    </div>
  );
}
