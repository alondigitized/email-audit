"use server";

import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
  db,
  personas,
  tenants,
  userPersonas,
  laptopProvisioningJobs,
  subscriptionJobs,
} from "@/lib/db/client";
import type { PersonaProfile } from "@/lib/schema/persona";
import { personaProfileSchema } from "@/lib/schema/persona";
import { loadOnboardingState, getUserDomain } from "@/lib/onboarding/state";
import { fetchSiteSummary } from "@/lib/onboarding/fetch-site";
import { runOnboardingResearch } from "@/lib/onboarding/research";
import {
  PersonaProposalSchema,
  CompetitorProposalSchema,
} from "@/lib/onboarding/research-prompt";
import { provisionInbox } from "@/lib/agentmail";
import { reportOnboardingStep } from "@/lib/persona-status";
import { enqueueSubscriptionJob } from "@/lib/subscriptions/queue";
import { tryAutoSubscribeJob } from "@/lib/subscriptions/auto";
import { getUserDomain as getActorDomain } from "@/lib/onboarding/state";

const MAX_GENERATIONS = 3;

// Step 1 — fire research. Idempotent: if research already exists on the
// tenant, returns it. Otherwise scrapes the homepage and calls the LLM.
export async function startResearchAction(): Promise<{
  ok: true;
} | {
  ok: false;
  error: string;
}> {
  const state = await loadOnboardingState();
  const research = state.tenant.research ?? {};
  const generations = research.generations ?? 0;

  if (research.personas && research.competitors) {
    // Already done.
    return { ok: true };
  }
  if (generations >= MAX_GENERATIONS) {
    return {
      ok: false,
      error:
        "You've used all your research generations. Pick from the existing proposals or contact support.",
    };
  }

  const domain = await getUserDomain();
  if (!domain) return { ok: false, error: "Could not resolve your company domain." };

  const siteSummary = await fetchSiteSummary(domain);

  let result;
  try {
    result = await runOnboardingResearch({ domain, siteSummary });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: `Research failed: ${msg.slice(0, 200)}` };
  }

  await db
    .update(tenants)
    .set({
      onboardingResearch: {
        site_summary: siteSummary ?? null,
        generations: generations + 1,
        personas: result.personas,
        competitors: result.competitors,
        recommended_persona_idx: result.recommended_persona_idx,
        recommended_competitor_idx: result.recommended_competitor_idx,
      },
    })
    .where(eq(tenants.id, state.tenant.id));

  return { ok: true };
}

// "Generate again" — wipes prior persona/competitor proposals and re-runs.
// Counter on the tenant prevents abuse.
export async function regenerateResearchAction(): Promise<void> {
  const state = await loadOnboardingState();
  await db
    .update(tenants)
    .set({
      onboardingResearch: {
        site_summary: state.tenant.research?.site_summary ?? null,
        generations: state.tenant.research?.generations ?? 0,
        // Clear prior proposals so startResearchAction re-runs.
        personas: undefined,
        competitors: undefined,
      },
    })
    .where(eq(tenants.id, state.tenant.id));
  await startResearchAction();
  redirect("/onboarding/picker");
}

const PickerInputSchema = z.object({
  persona_idx: z.number().int().min(0).max(2),
  competitor_idx: z.number().int().min(0).max(4),
});

// Step 2 — user picked a persona + competitor. Stash the choices, kick to
// the edit step which renders the chosen persona pre-filled.
export async function commitPickerAction(fd: FormData): Promise<void> {
  const state = await loadOnboardingState();
  const r = state.tenant.research;
  if (!r?.personas || !r.competitors) redirect("/onboarding");

  const parsed = PickerInputSchema.safeParse({
    persona_idx: Number(fd.get("persona_idx")),
    competitor_idx: Number(fd.get("competitor_idx")),
  });
  if (!parsed.success) redirect("/onboarding/picker?error=invalid");

  const { persona_idx, competitor_idx } = parsed.data;
  const personasArr = z.array(PersonaProposalSchema).safeParse(r.personas);
  const competitorsArr = z.array(CompetitorProposalSchema).safeParse(
    r.competitors
  );
  if (!personasArr.success || !competitorsArr.success) {
    redirect("/onboarding?error=corrupt");
  }
  const chosenPersona = personasArr.data[persona_idx];
  const chosenCompetitor = competitorsArr.data[competitor_idx];
  const otherPersonas = personasArr.data.filter((_, i) => i !== persona_idx);

  await db
    .update(tenants)
    .set({
      onboardingResearch: {
        ...r,
        recommended_persona_idx: persona_idx,
        recommended_competitor_idx: competitor_idx,
        unlocked_proposals: otherPersonas,
      },
      competitorTarget: chosenCompetitor,
    })
    .where(eq(tenants.id, state.tenant.id));

  // Stash the chosen persona's proposal directly on the research blob — the
  // edit step reads from `recommended_persona_idx` to find it.
  redirect("/onboarding/edit");
}

const SlugSchema = z
  .string()
  .min(2)
  .max(40)
  .regex(/^[a-z][a-z0-9-]*$/, "lowercase letters, digits, and hyphens; start with a letter");

const EditInputSchema = z.object({
  slug: SlugSchema,
  name: z.string().min(1).max(80),
  age: z.number().int().min(18).max(95),
  generation: z.string().min(1).max(40),
  gender: z.string().min(1).max(40),
  style: z.string().min(1).max(400),
  shopping_habits: z.string().min(1).max(600),
  tech_comfort: z.string().min(1).max(300),
  focus_areas: z.array(z.string().min(1).max(60)).min(1).max(8),
  search_term: z.string().min(1).max(80),
  category_path: z.array(z.string().min(1).max(40)).min(1).max(4),
});

// Step 3 — commit the persona row, provision the inbox, queue the laptop job.
export async function commitPersonaAction(fd: FormData): Promise<void> {
  const state = await loadOnboardingState();
  if (!state.tenant.competitorTarget) redirect("/onboarding/picker");
  const research = state.tenant.research;
  if (!research?.personas) redirect("/onboarding");

  const parsed = EditInputSchema.safeParse({
    slug: String(fd.get("slug") ?? ""),
    name: String(fd.get("name") ?? ""),
    age: Number(fd.get("age") ?? 0),
    generation: String(fd.get("generation") ?? ""),
    gender: String(fd.get("gender") ?? ""),
    style: String(fd.get("style") ?? ""),
    shopping_habits: String(fd.get("shopping_habits") ?? ""),
    tech_comfort: String(fd.get("tech_comfort") ?? ""),
    focus_areas: String(fd.get("focus_areas") ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    search_term: String(fd.get("search_term") ?? ""),
    category_path: String(fd.get("category_path") ?? "")
      .split("/")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean),
  });
  if (!parsed.success) {
    redirect(
      `/onboarding/edit?error=${encodeURIComponent(parsed.error.issues[0]?.message ?? "Invalid input")}`
    );
  }
  const v = parsed.data;

  // Slug uniqueness — if collision, append the tenant slug.
  let slug = v.slug;
  const existing = await db
    .select({ id: personas.id })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  if (existing.length > 0) slug = `${slug}-${state.tenant.slug}`;

  // Build the canonical PersonaProfile.
  let inbox: { inbox_address: string; inbox_id: string } | null = null;
  try {
    const r = await provisionInbox({
      slug,
      displayName: v.name,
    });
    inbox = {
      inbox_address: r.inbox_address,
      inbox_id: r.inbox_id,
    };
  } catch (err) {
    console.warn("AgentMail provisioning failed during onboarding:", err);
    // Non-fatal — admin can re-provision later. The persona row commits
    // either way so the user sees forward progress.
  }

  const profile: PersonaProfile = personaProfileSchema.parse({
    schema_version: 1,
    identity: {
      name: v.name,
      age: v.age,
      generation: v.generation,
      gender: v.gender,
      style: v.style,
      shopping_habits: v.shopping_habits,
      tech_comfort: v.tech_comfort,
      focus_areas: v.focus_areas,
    },
    journey: {
      site: state.tenant.competitorTarget.domain.startsWith("http")
        ? state.tenant.competitorTarget.domain
        : `https://${state.tenant.competitorTarget.domain}`,
      search_term: v.search_term,
      category_path: v.category_path,
      credentials_env_prefix: null,
      targets: [],
    },
    agentmail: {
      inbox_address: inbox?.inbox_address ?? null,
      inbox_id: inbox?.inbox_id ?? null,
      provisioned_at: inbox ? new Date().toISOString() : null,
    },
    onboarding: {},
    color: null,
    notes: null,
    status: "active",
  });

  const [insertedPersona] = await db
    .insert(personas)
    .values({
      slug,
      name: v.name,
      short: v.name.split(/\s+/)[0] ?? slug,
      profile,
      tenantId: state.tenant.id,
    })
    .returning({ id: personas.id });

  // Grant the user access via the existing ACL table — keeps /chat & audit
  // gates working without bypasses.
  await db
    .insert(userPersonas)
    .values({
      userId: state.user.id,
      personaId: insertedPersona.id,
      role: "owner",
    })
    .onConflictDoNothing();

  // Queue the laptop bootstrap.
  await db.insert(laptopProvisioningJobs).values({
    tenantId: state.tenant.id,
    personaSlug: slug,
    status: "queued",
  });

  // Phase D: enqueue subscription jobs for both the user's company and the
  // chosen competitor. Best-effort auto-subscribe runs immediately; failures
  // fall through to /admin/subscriptions for manual handling.
  if (inbox?.inbox_address) {
    const userDomain = await getActorDomain();
    const ownDomain = userDomain ?? state.tenant.name;
    const competitorDomain = state.tenant.competitorTarget.domain;
    const targets = [
      { brandDomain: ownDomain, label: "company" },
      { brandDomain: competitorDomain, label: "competitor" },
    ];
    for (const t of targets) {
      try {
        await enqueueSubscriptionJob({
          tenantId: state.tenant.id,
          personaSlug: slug,
          brandDomain: t.brandDomain,
          inboxAddress: inbox.inbox_address,
        });
      } catch (err) {
        console.warn(`subscription enqueue failed (${t.label}):`, err);
      }
    }
    // Fire-and-forget the auto-subscribe attempts. We don't await the
    // results — the wizard should redirect quickly. Failures land in the
    // manual queue.
    void (async () => {
      try {
        const queued = await db
          .select({ id: subscriptionJobs.id })
          .from(subscriptionJobs)
          .where(eq(subscriptionJobs.personaSlug, slug));
        for (const q of queued) {
          await tryAutoSubscribeJob(q.id);
        }
      } catch (err) {
        console.warn("auto-subscribe sweep failed:", err);
      }
    })();
  }

  // Stamp onboarding step so the dashboard can show "Provisioning…".
  await reportOnboardingStep(slug, "wizard", "done", "queued for laptop bootstrap");

  revalidatePath("/onboarding/handoff");
  redirect("/onboarding/handoff");
}
