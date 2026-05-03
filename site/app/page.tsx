import { redirect } from "next/navigation";
import { inArray } from "drizzle-orm";
import { getAuditIndexForUser } from "@/lib/audits";
import { requireUser } from "@/lib/dal";
import { db, personas } from "@/lib/db/client";
import { HomeContent } from "@/components/HomeContent";
import { TestDriveCallout } from "@/components/TestDriveCallout";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await requireUser();

  // Send freshly-signed-in members of a personaless tenant straight to the
  // onboarding wizard. Admins still see the audit feed by default. This is
  // the first thing a non-admin user sees post-magic-link.
  if (!user.isAdmin && user.personas.length === 0) {
    redirect("/onboarding");
  }

  // Pull inbox addresses for the user's accessible personas so the
  // test-drive callout can show the addresses inline. Limited to the
  // user's `personas` (already includes cross-tenant grants via
  // getPersonaSlugsForUser) so admins seeing all tenants don't get a
  // 60-row banner.
  const personaInboxes = user.personas.length
    ? await db
        .select({
          slug: personas.slug,
          name: personas.name,
          short: personas.short,
          profile: personas.profile,
        })
        .from(personas)
        .where(inArray(personas.slug, user.personas))
        .then((rows) =>
          rows
            .map((r) => ({
              slug: r.slug,
              name: r.name,
              short: r.short,
              inbox: r.profile?.agentmail?.inbox_address ?? "",
            }))
            .filter((p) => p.inbox)
        )
    : [];

  const audits = await getAuditIndexForUser(user.personas);

  return (
    <>
      <p className="text-muted text-sm mb-5">
        Reviews of marketing emails and website visits.
      </p>
      <TestDriveCallout personas={personaInboxes} />
      <HomeContent audits={audits} />
    </>
  );
}
