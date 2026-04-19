import { getAuditIndexForUser } from "@/lib/audits";
import { requireUser } from "@/lib/dal";
import { HomeContent } from "@/components/HomeContent";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await requireUser();
  const audits = await getAuditIndexForUser(user.personas);

  return (
    <>
      <p className="text-muted text-sm mb-5">
        Reviews of marketing emails and website visits.
      </p>
      <HomeContent audits={audits} />
    </>
  );
}
