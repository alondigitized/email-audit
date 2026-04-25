import { redirect } from "next/navigation";
import { eq, and } from "drizzle-orm";
import { db, personas, tenants, users } from "@/lib/db/client";
import { requireUser } from "@/lib/dal";
import type { TenantOnboardingResearch } from "@/lib/db/schema";

// Resolves where the logged-in user is in the public-wizard funnel and
// returns a packed snapshot. Each /onboarding/{step} page calls this and
// redirects if the user is on the wrong step. Admins (Alon) should not see
// this funnel — they live in /admin/personas/new.

export type OnboardingState = {
  tenant: {
    id: string;
    slug: string;
    plan: "waitlisted" | "free" | "pro" | "banned";
    name: string;
    research: TenantOnboardingResearch | null;
    competitorTarget: { name: string; domain: string; rationale: string } | null;
  };
  user: {
    id: string;
    email: string;
    isAdmin: boolean;
  };
  // Slug of the wizard's primary persona (one per tenant on free tier).
  // Null until /onboarding/edit commits the row.
  personaSlug: string | null;
};

export async function loadOnboardingState(): Promise<OnboardingState> {
  const u = await requireUser();
  if (u.isAdmin) {
    // Admins go through the admin wizard, not this public funnel.
    redirect("/admin/personas/new");
  }
  if (!u.tenantId) redirect("/login");

  const [t] = await db
    .select({
      id: tenants.id,
      slug: tenants.slug,
      plan: tenants.plan,
      name: tenants.name,
      research: tenants.onboardingResearch,
      competitorTarget: tenants.competitorTarget,
    })
    .from(tenants)
    .where(eq(tenants.id, u.tenantId))
    .limit(1);
  if (!t) redirect("/login");
  if (t.plan === "waitlisted" || t.plan === "banned") {
    redirect("/login?error=AccessDenied");
  }

  // Tenant's primary persona, if it exists yet.
  const [p] = await db
    .select({ slug: personas.slug })
    .from(personas)
    .where(eq(personas.tenantId, t.id))
    .limit(1);

  return {
    tenant: {
      id: t.id,
      slug: t.slug,
      plan: t.plan,
      name: t.name,
      research: (t.research ?? null) as TenantOnboardingResearch | null,
      competitorTarget:
        (t.competitorTarget as
          | { name: string; domain: string; rationale: string }
          | null) ?? null,
    },
    user: { id: u.id, email: u.email, isAdmin: u.isAdmin },
    personaSlug: p?.slug ?? null,
  };
}

// Convenience: derive the user's company domain from their email. Used by
// the research step (we don't store domain separately on tenants, since the
// email is the canonical anchor).
export async function getUserDomain(): Promise<string | null> {
  const u = await requireUser();
  if (!u.tenantId) return null;
  const [row] = await db
    .select({ email: users.email })
    .from(users)
    .where(and(eq(users.id, u.id)))
    .limit(1);
  if (!row?.email) return null;
  const at = row.email.lastIndexOf("@");
  if (at < 0) return null;
  return row.email.slice(at + 1).toLowerCase();
}
