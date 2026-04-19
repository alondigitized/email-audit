import { getAuditIndexForUser } from "@/lib/audits";
import { requireUser } from "@/lib/dal";
import { HomeContent } from "@/components/HomeContent";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await requireUser();
  const audits = await getAuditIndexForUser(user.personas);

  return (
    <>
      <div className="mb-5 py-6">
        <h1 className="text-4xl font-semibold tracking-tight mt-1 mb-1 leading-none">
          etell
        </h1>
        <div className="text-muted text-xs uppercase tracking-[0.18em] mb-3">
          Experience Intelligence
        </div>
        <p className="text-muted text-sm max-w-xl">
          AI-powered reviews of brand experiences — from marketing emails to
          website visits. Each review scores creative quality, technical health,
          accessibility, and deliverability, with actionable recommendations and
          automated QA results.
        </p>
      </div>
      <HomeContent audits={audits} />
    </>
  );
}
