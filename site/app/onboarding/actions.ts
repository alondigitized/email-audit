"use server";

import { eq, and } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
  db,
  personas,
  personaTemplates,
  templateRequests,
  tenants,
  laptopProvisioningJobs,
  subscriptionJobs,
} from "@/lib/db/client";
import { loadOnboardingState, getUserDomain } from "@/lib/onboarding/state";
import { fetchSiteSummary } from "@/lib/onboarding/fetch-site";
import { classifyIndustry } from "@/lib/onboarding/classify-industry";
import { runCompetitorResearch } from "@/lib/onboarding/competitor-research";
import { CompetitorProposalSchema } from "@/lib/onboarding/research-prompt";
import { forkTemplateForTenant } from "@/lib/persona-fork";
import { reportOnboardingStep } from "@/lib/persona-status";
import { enqueueSubscriptionJob } from "@/lib/subscriptions/queue";
import { tryAutoSubscribeJob } from "@/lib/subscriptions/auto";

const MAX_GENERATIONS = 3;

// Step 1 — classify industry + research competitors. ~30s typical, vs the
// legacy 90-120s for full persona research. Persona generation is gone:
// the picker reads curated rows from `persona_template` filtered by the
// classified industry. If no templates match, the action signals the
// caller to route to /onboarding/concierge instead.
export async function startWizardStep1Action(): Promise<
  | { ok: true; route: "/onboarding/picker" | "/onboarding/concierge" }
  | { ok: false; error: string }
> {
  const state = await loadOnboardingState();
  const research = state.tenant.research ?? {};
  const generations = research.generations ?? 0;

  // Already past step 1 — shortcut to wherever the existing data lands.
  if (research.industry && research.competitors) {
    const route = await deriveStep1Route(research.industry);
    return { ok: true, route };
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

  let classification;
  let competitors;
  try {
    [classification, competitors] = await Promise.all([
      classifyIndustry({ domain, siteSummary }),
      runCompetitorResearch({ domain, siteSummary }),
    ]);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: `Step 1 failed: ${msg.slice(0, 200)}` };
  }

  const matchedSlugs = await listActiveTemplateSlugsForIndustry(classification.industry);

  await db
    .update(tenants)
    .set({
      onboardingResearch: {
        site_summary: siteSummary ?? null,
        generations: generations + 1,
        industry: classification.industry,
        industry_confidence: classification.confidence,
        industry_alternates: classification.alternates,
        available_template_slugs: matchedSlugs,
        competitors: competitors.competitors,
        recommended_competitor_idx: competitors.recommended_competitor_idx,
      },
    })
    .where(eq(tenants.id, state.tenant.id));

  return { ok: true, route: matchedSlugs.length > 0 ? "/onboarding/picker" : "/onboarding/concierge" };
}

async function deriveStep1Route(
  industry: string
): Promise<"/onboarding/picker" | "/onboarding/concierge"> {
  const slugs = await listActiveTemplateSlugsForIndustry(industry);
  return slugs.length > 0 ? "/onboarding/picker" : "/onboarding/concierge";
}

async function listActiveTemplateSlugsForIndustry(industry: string): Promise<string[]> {
  const rows = await db
    .select({ slug: personaTemplates.slug })
    .from(personaTemplates)
    .where(
      and(
        eq(personaTemplates.industry, industry),
        eq(personaTemplates.isActive, true)
      )
    );
  return rows.map((r) => r.slug);
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
  redirect("/onboarding/picker");
}

const PickerInputSchema = z.object({
  template_slug: z
    .string()
    .min(2)
    .max(60)
    .regex(/^[a-z][a-z0-9-]*$/, "invalid template slug"),
  competitor_idx: z.number().int().min(0).max(4),
});

// Step 2 — user picked a template + competitor. Stash both, redirect to edit.
export async function commitPickerAction(fd: FormData): Promise<void> {
  const state = await loadOnboardingState();
  const r = state.tenant.research;
  if (!r?.industry || !r.competitors) redirect("/onboarding");

  const parsed = PickerInputSchema.safeParse({
    template_slug: String(fd.get("template_slug") ?? ""),
    competitor_idx: Number(fd.get("competitor_idx")),
  });
  if (!parsed.success) redirect("/onboarding/picker?error=invalid");

  const { template_slug, competitor_idx } = parsed.data;

  // Verify the template is in this tenant's snapshot (defends against the
  // user POSTing a slug that wasn't surfaced to them — e.g. another industry's
  // template).
  if (!(r.available_template_slugs ?? []).includes(template_slug)) {
    redirect("/onboarding/picker?error=invalid-template");
  }

  const competitorsArr = z.array(CompetitorProposalSchema).safeParse(r.competitors);
  if (!competitorsArr.success) redirect("/onboarding?error=corrupt");
  const chosenCompetitor = competitorsArr.data[competitor_idx];

  await db
    .update(tenants)
    .set({
      onboardingResearch: {
        ...r,
        chosen_template_slug: template_slug,
        recommended_competitor_idx: competitor_idx,
      },
      competitorTarget: chosenCompetitor,
    })
    .where(eq(tenants.id, state.tenant.id));

  redirect("/onboarding/edit");
}

const SlugSchema = z
  .string()
  .min(2)
  .max(60)
  .regex(
    /^[a-z][a-z0-9-]*$/,
    "lowercase letters, digits, and hyphens; start with a letter"
  );

const EditInputSchema = z.object({
  // Everything optional — the fork helper falls back to the template's
  // values when a field is missing. The form submits the full set today
  // but we keep this tolerant for future "skip-edit" UX.
  slug: SlugSchema.optional(),
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

// Step 3 — fork the chosen template into a tenant-scoped persona, queue
// laptop bootstrap + brand subscriptions.
export async function commitPersonaAction(fd: FormData): Promise<void> {
  const state = await loadOnboardingState();
  if (!state.tenant.competitorTarget) redirect("/onboarding/picker");
  const research = state.tenant.research;
  if (!research?.chosen_template_slug) redirect("/onboarding/picker");

  const parsed = EditInputSchema.safeParse({
    slug: fd.get("slug") ? String(fd.get("slug")) : undefined,
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

  const competitor = state.tenant.competitorTarget;
  const journeySite = competitor.domain.startsWith("http")
    ? competitor.domain
    : `https://${competitor.domain}`;

  let fork;
  try {
    fork = await forkTemplateForTenant({
      templateSlug: research.chosen_template_slug,
      tenantId: state.tenant.id,
      tenantSlug: state.tenant.slug,
      overrides: {
        name: v.name,
        age: v.age,
        generation: v.generation,
        gender: v.gender,
        style: v.style,
        shopping_habits: v.shopping_habits,
        tech_comfort: v.tech_comfort,
        focus_areas: v.focus_areas,
        journeySite,
        searchTerm: v.search_term,
        categoryPath: v.category_path,
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    redirect(`/onboarding/edit?error=${encodeURIComponent(msg.slice(0, 200))}`);
  }

  // Persona access is via tenant membership — every user under tenantId
  // has read/chat access. No userPersonas grant needed.

  await db.insert(laptopProvisioningJobs).values({
    tenantId: state.tenant.id,
    personaSlug: fork.personaSlug,
    status: "queued",
  });

  // Phase D — enqueue subscription jobs for both the user's company and the
  // chosen competitor. Best-effort auto-subscribe runs immediately; failures
  // fall through to /admin/subscriptions for manual handling.
  if (fork.inboxAddress) {
    const userDomain = await getUserDomain();
    const ownDomain = userDomain ?? state.tenant.name;
    const competitorDomain = competitor.domain;
    const targets = [
      { brandDomain: ownDomain, label: "company" },
      { brandDomain: competitorDomain, label: "competitor" },
    ];
    for (const t of targets) {
      try {
        await enqueueSubscriptionJob({
          tenantId: state.tenant.id,
          personaSlug: fork.personaSlug,
          brandDomain: t.brandDomain,
          inboxAddress: fork.inboxAddress,
        });
      } catch (err) {
        console.warn(`subscription enqueue failed (${t.label}):`, err);
      }
    }
    void (async () => {
      try {
        const queued = await db
          .select({ id: subscriptionJobs.id })
          .from(subscriptionJobs)
          .where(eq(subscriptionJobs.personaSlug, fork.personaSlug));
        for (const q of queued) {
          await tryAutoSubscribeJob(q.id);
        }
      } catch (err) {
        console.warn("auto-subscribe sweep failed:", err);
      }
    })();
  }

  await reportOnboardingStep(
    fork.personaSlug,
    "wizard",
    "done",
    `forked from template ${research.chosen_template_slug}; queued for laptop bootstrap`
  );

  revalidatePath("/onboarding/handoff");
  redirect("/onboarding/handoff");
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
