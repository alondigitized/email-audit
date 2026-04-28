"use server";

import { eq, and } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
  db,
  templateRequests,
  tenants,
  laptopProvisioningJobs,
  subscriptionJobs,
  personas,
} from "@/lib/db/client";
import { requireUser } from "@/lib/dal";
import { loadOnboardingState, getUserDomain } from "@/lib/onboarding/state";
import { fetchSiteSummary } from "@/lib/onboarding/fetch-site";
import { runOnboardingResearch } from "@/lib/onboarding/research";
import {
  PersonaProposalSchema,
  CompetitorProposalSchema,
} from "@/lib/onboarding/research-prompt";
import { createTenantPersonaFromProposal } from "@/lib/persona-fork";
import { reportOnboardingStep } from "@/lib/persona-status";
import { enqueueSubscriptionJob } from "@/lib/subscriptions/queue";
import { tryAutoSubscribeJob } from "@/lib/subscriptions/auto";

const MAX_GENERATIONS = 3;

// Step 1 — single combined research call returning 3 persona proposals + 2
// competitors + which persona is recommended. ~30s typical against the local
// research model. Drops the legacy industry-classifier + template lookup
// path: the public funnel no longer touches `persona_template` (admin still
// uses templates directly via /admin/personas/new).
export async function startWizardStep1Action(): Promise<
  | { ok: true; route: "/onboarding/review" }
  | { ok: false; error: string }
> {
  const state = await loadOnboardingState();
  const research = state.tenant.research ?? {};
  const generations = research.generations ?? 0;

  // Already past step 1 — go straight to review.
  if (research.personas && research.competitors) {
    return { ok: true, route: "/onboarding/review" };
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
      },
    })
    .where(eq(tenants.id, state.tenant.id));

  return { ok: true, route: "/onboarding/review" };
}

// "Generate again" — wipes prior step-1 outputs and re-runs.
export async function regenerateResearchAction(): Promise<void> {
  const state = await loadOnboardingState();
  await db
    .update(tenants)
    .set({
      onboardingResearch: {
        site_summary: state.tenant.research?.site_summary ?? null,
        generations: state.tenant.research?.generations ?? 0,
      },
    })
    .where(eq(tenants.id, state.tenant.id));
  await startWizardStep1Action();
  redirect("/onboarding/review");
}

const EditInputSchema = z.object({
  persona_idx: z.number().int().min(0).max(2),
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
  subscribe_own: z.boolean(),
  subscribe_comp_0: z.boolean(),
  subscribe_comp_1: z.boolean(),
});

// Step 2 — combined commit: create the tenant persona directly from the
// chosen LLM-generated proposal (no template fork) and enqueue subscription
// jobs for each checked brand. Auto-subscribe runs synchronously (≤5s with
// Promise.allSettled) so the bootstrap dashboard renders with real status.
export async function commitPersonaAction(fd: FormData): Promise<void> {
  const state = await loadOnboardingState();
  const research = state.tenant.research;
  if (!research?.personas || !research.competitors) redirect("/onboarding");

  const personasArr = z.array(PersonaProposalSchema).safeParse(research.personas);
  const competitorsArr = z
    .array(CompetitorProposalSchema)
    .safeParse(research.competitors);
  if (!personasArr.success || !competitorsArr.success) {
    redirect("/onboarding?error=corrupt");
  }

  const parsed = EditInputSchema.safeParse({
    persona_idx: Number(fd.get("persona_idx") ?? -1),
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
    subscribe_own: fd.get("subscribe_own") === "1",
    subscribe_comp_0: fd.get("subscribe_comp_0") === "1",
    subscribe_comp_1: fd.get("subscribe_comp_1") === "1",
  });
  if (!parsed.success) {
    redirect(
      `/onboarding/review?error=${encodeURIComponent(parsed.error.issues[0]?.message ?? "Invalid input")}`
    );
  }
  const v = parsed.data;

  const ownDomain = (await getUserDomain()) ?? state.tenant.name;

  // Build the post-edit proposal: start from the persona the user picked,
  // overlay the form-edit fields. Fields the user didn't change just round-
  // trip the LLM's original proposal.
  const proposal = {
    ...personasArr.data[v.persona_idx],
    name: v.name,
    age: v.age,
    generation: v.generation,
    gender: v.gender,
    style: v.style,
    shopping_habits: v.shopping_habits,
    tech_comfort: v.tech_comfort,
    focus_areas: v.focus_areas,
    search_term: v.search_term,
    category_path: v.category_path,
  };

  let created;
  try {
    created = await createTenantPersonaFromProposal({
      tenantId: state.tenant.id,
      tenantSlug: state.tenant.slug,
      proposal,
      ownDomain,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    redirect(`/onboarding/review?error=${encodeURIComponent(msg.slice(0, 200))}`);
  }

  // Persona access is via tenant membership — no userPersonas grant needed.

  // Keep laptop_provisioning_jobs enqueue: site-audit pipeline is dormant
  // for now (PR #33) but the row is cheap and re-enabling site audits later
  // shouldn't require a wizard rev.
  await db.insert(laptopProvisioningJobs).values({
    tenantId: state.tenant.id,
    personaSlug: created.personaSlug,
    status: "queued",
  });

  // Subscriptions — enqueue rows for each toggled brand, then await all
  // auto-subscribe attempts in parallel. ~5s worst case (FETCH_TIMEOUT_MS).
  const targets: { brandDomain: string }[] = [];
  if (v.subscribe_own) targets.push({ brandDomain: ownDomain });
  if (v.subscribe_comp_0 && competitorsArr.data[0]) {
    targets.push({ brandDomain: competitorsArr.data[0].domain });
  }
  if (v.subscribe_comp_1 && competitorsArr.data[1]) {
    targets.push({ brandDomain: competitorsArr.data[1].domain });
  }
  // Dedupe by domain in case the user's own brand matches a competitor.
  const seen = new Set<string>();
  const uniqueTargets = targets.filter((t) => {
    if (seen.has(t.brandDomain)) return false;
    seen.add(t.brandDomain);
    return true;
  });

  if (created.inboxAddress && uniqueTargets.length > 0) {
    const jobIds: string[] = [];
    for (const t of uniqueTargets) {
      try {
        const id = await enqueueSubscriptionJob({
          tenantId: state.tenant.id,
          personaSlug: created.personaSlug,
          brandDomain: t.brandDomain,
          inboxAddress: created.inboxAddress,
        });
        if (id) jobIds.push(id);
      } catch (err) {
        console.warn(`subscription enqueue failed (${t.brandDomain}):`, err);
      }
    }
    await Promise.allSettled(jobIds.map((id) => tryAutoSubscribeJob(id)));
  }

  await reportOnboardingStep(
    created.personaSlug,
    "wizard",
    "done",
    `created from LLM proposal; ${uniqueTargets.length} brand(s) queued for subscription`
  );

  revalidatePath("/onboarding/handoff");
  redirect("/onboarding/handoff");
}

// Bootstrap dashboard — public flip of a subscription_job to manual_done.
// Mirrors `markJobDoneFormAction` in /admin/subscriptions but gates on
// persona ownership (the job's persona belongs to the caller's tenant)
// rather than admin status, so a tenant member who manually subscribed on
// a brand's site can mark the row done themselves.
function isUuid(s: string): boolean {
  return /^[0-9a-f-]{36}$/i.test(s);
}
export async function markBootstrapJobDoneAction(fd: FormData): Promise<void> {
  const user = await requireUser();
  const jobId = String(fd.get("jobId") ?? "");
  if (!isUuid(jobId)) return;

  // Ownership: the job's persona must belong to the caller's tenant.
  const [job] = await db
    .select({
      id: subscriptionJobs.id,
      personaSlug: subscriptionJobs.personaSlug,
    })
    .from(subscriptionJobs)
    .where(eq(subscriptionJobs.id, jobId))
    .limit(1);
  if (!job) return;
  const [p] = await db
    .select({ tenantId: personas.tenantId })
    .from(personas)
    .where(eq(personas.slug, job.personaSlug))
    .limit(1);
  if (!p || p.tenantId !== user.tenantId) return;

  await db
    .update(subscriptionJobs)
    .set({ status: "manual_done", updatedAt: new Date() })
    .where(eq(subscriptionJobs.id, jobId));
  revalidatePath("/onboarding/handoff");
}

// Concierge route — file a template_request and stay parked. Admin sees
// the queue at /admin/template-requests, builds the template, fires
// "Mark shipped" which re-forks the new template for the requesting tenant.
export async function requestTemplateAction(): Promise<void> {
  const state = await loadOnboardingState();
  const r = state.tenant.research;
  if (!r?.industry) redirect("/onboarding");

  const domain = (await getUserDomain()) ?? state.tenant.name;

  // Idempotent: one queued request per tenant+industry. Re-clicking the
  // button shouldn't pile up rows.
  const existing = await db
    .select({ id: templateRequests.id })
    .from(templateRequests)
    .where(
      and(
        eq(templateRequests.tenantId, state.tenant.id),
        eq(templateRequests.requestedIndustry, r.industry),
        eq(templateRequests.status, "queued")
      )
    )
    .limit(1);
  if (existing.length === 0) {
    await db.insert(templateRequests).values({
      tenantId: state.tenant.id,
      requestedIndustry: r.industry,
      brandDomain: domain,
    });
  }

  redirect("/onboarding/concierge?filed=1");
}
