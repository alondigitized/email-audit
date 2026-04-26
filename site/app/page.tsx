import { redirect } from "next/navigation";
import { getAuditIndexForUser } from "@/lib/audits";
import { requireUser } from "@/lib/dal";
import { HomeContent } from "@/components/HomeContent";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await requireUser();

  // Send freshly-signed-in members of a personaless tenant straight to the
  // onboarding wizard. Admins still see the audit feed by default. This is
  // the first thing a non-admin user sees post-magic-link.
  if (!user.isAdmin && user.personas.length === 0) {
    redirect("/onboarding");
  }

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
