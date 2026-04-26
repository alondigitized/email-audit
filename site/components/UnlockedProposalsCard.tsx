import { eq } from "drizzle-orm";
import { z } from "zod";
import { currentUser } from "@/lib/dal";
import { db, tenants } from "@/lib/db/client";
import { PersonaProposalSchema } from "@/lib/onboarding/research-prompt";

// Surfaces the 2 personas the user did *not* pick during the wizard. Stored
// as `tenants.onboarding_research.unlocked_proposals`. This is the natural
// upgrade hook — "you already saw who else makes sense for your brand;
// upgrade to bring them online too."
//
// Renders nothing when there are no unlocked proposals (admins, tenants who
// joined via the admin wizard, locked tenants, etc.).
export async function UnlockedProposalsCard() {
  const user = await currentUser();
  if (!user || !user.tenantId || user.isAdmin) return null;

  const [t] = await db
    .select({ research: tenants.onboardingResearch })
    .from(tenants)
    .where(eq(tenants.id, user.tenantId))
    .limit(1);
  const proposals = z
    .array(PersonaProposalSchema)
    .safeParse(t?.research?.unlocked_proposals ?? []);
  if (!proposals.success || proposals.data.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-sky-50 to-white border border-sky-200 rounded-2xl p-5 mt-8">
      <div className="text-xs uppercase tracking-wide text-sky-700 font-medium mb-2">
        Unlock with Pro
      </div>
      <h3 className="text-lg font-bold mb-2">
        {proposals.data.length} more {proposals.data.length === 1 ? "persona" : "personas"} we proposed for you
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
        {proposals.data.slice(0, 2).map((p, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-3 opacity-90"
          >
            <div className="text-sm font-semibold">{p.name}</div>
            <div className="text-xs text-muted mb-1">
              {p.age} · {p.generation}
            </div>
            <p className="text-xs text-muted line-clamp-2">{p.rationale}</p>
          </div>
        ))}
      </div>
      <a
        href="/upgrade"
        className="text-xs text-sky-700 underline font-semibold"
      >
        Upgrade to bring them online →
      </a>
    </div>
  );
}
