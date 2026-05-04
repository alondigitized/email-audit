import { redirect } from "next/navigation";
import { eq, inArray } from "drizzle-orm";
import { getAuditIndexForUser } from "@/lib/audits";
import { requireUser } from "@/lib/dal";
import { db, personas, tenants } from "@/lib/db/client";
import { HomeContent } from "@/components/HomeContent";
import { TestDriveCallout } from "@/components/TestDriveCallout";
import { brandKeyOf } from "@/lib/industry";

// Founder tenant slug — admin/multi-persona corpus that spans every
// industry. Anyone else is a customer tenant whose chart should color
// by brand (own vs competitors), not by industry bucket.
const FOUNDER_TENANT_SLUG = "alon";

// Pretty-case "skechers.com" → "Skechers". The audit display names use
// a mix of cases ("SKECHERS", "www.skechers.com"); the legend reads
// nicer with title case.
function brandLabelFromDomain(domain: string): string {
  const apex = domain.replace(/^https?:\/\//, "").replace(/^www\./, "").split(".")[0] ?? domain;
  return apex.charAt(0).toUpperCase() + apex.slice(1);
}

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

  // Founder tenant gets the industry-bucketed chart; customer tenants
  // get brand-bucketed with their own brand pinned to emerald. Lookup
  // is one row, cached per request via React 19 fetch cache.
  let chartMode: "industry" | "brand" = "industry";
  let ownBrand: { key: string; label: string } | undefined;
  if (user.tenantId) {
    const rows = await db
      .select({ slug: tenants.slug, emailDomain: tenants.emailDomain })
      .from(tenants)
      .where(eq(tenants.id, user.tenantId))
      .limit(1);
    const t = rows[0];
    if (t && t.slug !== FOUNDER_TENANT_SLUG && t.emailDomain) {
      const key = brandKeyOf(t.emailDomain);
      if (key) {
        chartMode = "brand";
        ownBrand = { key, label: brandLabelFromDomain(t.emailDomain) };
      }
    }
  }

  return (
    <>
      <p className="text-muted text-sm mb-5">
        Reviews of marketing emails and website visits.
      </p>
      <TestDriveCallout personas={personaInboxes} />
      <HomeContent audits={audits} chartMode={chartMode} ownBrand={ownBrand} />
    </>
  );
}
