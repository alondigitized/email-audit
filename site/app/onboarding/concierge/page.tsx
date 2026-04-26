import { redirect } from "next/navigation";
import { eq, and, desc } from "drizzle-orm";
import { loadOnboardingState, getUserDomain } from "@/lib/onboarding/state";
import { db, templateRequests } from "@/lib/db/client";
import { requestTemplateAction } from "../actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "We're prepping your persona · etell" };

type Search = { [key: string]: string | string[] | undefined };

export default async function ConciergePage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const state = await loadOnboardingState();
  if (state.personaSlug) redirect("/chat");
  const r = state.tenant.research;
  if (!r?.industry) redirect("/onboarding");

  const sp = await searchParams;
  const filed = sp?.filed === "1";
  const domain = (await getUserDomain()) ?? state.tenant.name;

  // Show whether a request is already on file for this industry.
  const [existing] = await db
    .select({
      id: templateRequests.id,
      status: templateRequests.status,
      requestedAt: templateRequests.requestedAt,
    })
    .from(templateRequests)
    .where(
      and(
        eq(templateRequests.tenantId, state.tenant.id),
        eq(templateRequests.requestedIndustry, r.industry)
      )
    )
    .orderBy(desc(templateRequests.requestedAt))
    .limit(1);

  return (
    <div className="max-w-2xl mx-auto py-16">
      <div className="inline-block mb-6 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-medium tracking-wide uppercase">
        Custom persona prep
      </div>
      <h1 className="text-3xl font-bold mb-3">
        We don&apos;t have a curated persona for {r.industry} yet.
      </h1>
      <p className="text-muted text-base mb-6">
        Our personas aren&apos;t generic — they&apos;re hand-tuned and arrive
        with months of accumulated reviews. We build them industry by industry.
        Tell us to prep one for{" "}
        <strong className="text-gray-900">{r.industry}</strong> and we&apos;ll
        email you the moment it&apos;s ready (usually within 24 hours).
      </p>

      {(filed || existing) && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 mb-6 text-sm">
          <div className="font-medium text-emerald-900">
            You&apos;re on the list.
          </div>
          <div className="text-emerald-800 text-xs mt-1">
            We&apos;re prepping a persona for {r.industry} (requested at{" "}
            {existing?.requestedAt
              ? new Date(existing.requestedAt).toLocaleString()
              : "just now"}
            , status: {existing?.status ?? "queued"}). We&apos;ll email{" "}
            {state.user.email} when it&apos;s ready.
          </div>
        </div>
      )}

      {!filed && !existing && (
        <form action={requestTemplateAction}>
          <button
            type="submit"
            className="px-5 py-2.5 bg-accent text-white font-semibold rounded-xl text-[15px]"
          >
            Build a {r.industry} persona for {domain} →
          </button>
        </form>
      )}

      {r.industry_alternates && r.industry_alternates.length > 0 && (
        <div className="mt-10 text-xs text-muted">
          <div className="uppercase tracking-wide font-medium mb-1">
            Or — were we close on the industry?
          </div>
          <div>
            We also considered: {r.industry_alternates.join(", ")}. Reply to your
            sign-up email if any of those are a better fit.
          </div>
        </div>
      )}

      <div className="mt-10 text-xs text-muted">
        <a href="/onboarding" className="underline hover:text-sky-700">
          ← Re-run step 1
        </a>
      </div>
    </div>
  );
}
