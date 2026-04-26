import fs from "node:fs";
import path from "node:path";
import { eq } from "drizzle-orm";
import {
  db,
  personas,
  personaTemplates,
  subscriptionJobs,
  tenants,
} from "@/lib/db/client";
import {
  personaProfileSchema,
  type PersonaProfile,
} from "@/lib/schema/persona";
import { generateInboxAddress } from "@/lib/inbox";
import { enqueueSubscriptionJob } from "@/lib/subscriptions/queue";
import { tryAutoSubscribeJob } from "@/lib/subscriptions/auto";
import {
  generateTemplatePersona,
  type TemplatePersona,
} from "./generate-persona";
import {
  generateBrandList,
  type TemplateBrandList,
} from "./generate-brands";

// Founder tenant slug — the template-source persona row lives here so the
// daemon's audit pipeline can write into it. Every template follows the
// walker/martha/calvin pattern: persona row in Alon's tenant, persona
// _template row at the same slug, persona.template_slug = own slug.
const FOUNDER_TENANT_SLUG = "alon";

// Vault path is repo-relative — the script runs from inside site/, so
// we walk up one to reach the workspace root.
function vaultDir(repoRoot: string, slug: string): string {
  return path.join(repoRoot, "vaults", slug);
}

export type CreateTemplateInput = {
  industry: string;
  archetypeHint?: string | null;
  // Optional override — when set, we skip the persona LLM call and use this.
  // Lets a curator hand-author the persona JSON for cases where the LLM's
  // output isn't quite right.
  overridePersona?: TemplatePersona;
  // Optional override for the brand list (same reasoning).
  overrideBrands?: TemplateBrandList;
  // When true, do everything except DB writes + filesystem writes +
  // subscription enqueues. Returns the proposed persona + brand list so
  // the caller can sanity-check before committing.
  dryRun?: boolean;
};

export type CreateTemplateOutput = {
  dryRun: boolean;
  persona: TemplatePersona;
  brands: TemplateBrandList;
  // Populated only on a real (non-dry) run:
  personaId?: string;
  inboxAddress?: string;
  vaultReadmePath?: string;
  subscriptions?: Array<{
    brandDomain: string;
    jobId: string;
    outcome: "auto_succeeded" | "manual_pending" | "failed";
  }>;
};

async function findFounderTenant(): Promise<{ id: string; slug: string }> {
  const [t] = await db
    .select({ id: tenants.id, slug: tenants.slug })
    .from(tenants)
    .where(eq(tenants.slug, FOUNDER_TENANT_SLUG))
    .limit(1);
  if (!t) {
    throw new Error(
      `founder tenant '${FOUNDER_TENANT_SLUG}' not found — cannot place template-source persona`
    );
  }
  return t;
}

async function assertSlugAvailable(slug: string): Promise<void> {
  const [existingPersona] = await db
    .select({ id: personas.id })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  if (existingPersona) {
    throw new Error(`slug '${slug}' already exists in personas — pick a different slug`);
  }
  const [existingTemplate] = await db
    .select({ slug: personaTemplates.slug })
    .from(personaTemplates)
    .where(eq(personaTemplates.slug, slug))
    .limit(1);
  if (existingTemplate) {
    throw new Error(`slug '${slug}' already exists in persona_template`);
  }
}

function buildProfile(
  p: TemplatePersona,
  inboxAddress: string,
  inboxProvisionedAt: string
): PersonaProfile {
  return personaProfileSchema.parse({
    schema_version: 1,
    identity: {
      name: p.name,
      age: p.age,
      generation: p.generation,
      gender: p.gender,
      style: p.style,
      shopping_habits: p.shopping_habits,
      tech_comfort: p.tech_comfort,
      focus_areas: p.focus_areas,
    },
    journey: {
      site: null,
      search_term: p.journey_search_term,
      category_path: p.journey_category_path,
      credentials_env_prefix: null,
      targets: [],
    },
    agentmail: {
      inbox_address: inboxAddress,
      inbox_id: null,
      provisioned_at: inboxProvisionedAt,
    },
    onboarding: {},
    color: null,
    notes: p.rationale,
    status: "active",
  });
}

function vaultReadmeContent(p: TemplatePersona, industry: string): string {
  return `---
slug: ${p.slug}
name: ${p.name}
industry: ${industry}
generation: ${p.generation}
age: ${p.age}
gender: ${p.gender}
template: true
---

# ${p.name}

${p.rationale}

## Style

${p.style}

## Shopping habits

${p.shopping_habits}

## Tech comfort

${p.tech_comfort}

## Focus areas

${p.focus_areas.map((f) => `- ${f}`).join("\n")}

## Default journey seed

- search: \`${p.journey_search_term}\`
- category: \`${p.journey_category_path.join("/")}\`
`;
}

export async function createTemplate(
  input: CreateTemplateInput
): Promise<CreateTemplateOutput> {
  // 1. Generate (or accept) the persona.
  const persona =
    input.overridePersona ??
    (await generateTemplatePersona({
      industry: input.industry,
      archetypeHint: input.archetypeHint ?? null,
    }));

  // 2. Generate (or accept) the brand list.
  const brands =
    input.overrideBrands ??
    (await generateBrandList({
      industry: input.industry,
      personaName: persona.name,
      personaSummary: `${persona.age} ${persona.generation} ${persona.gender}; ${persona.style}; shopping: ${persona.shopping_habits}`,
    }));

  if (input.dryRun) {
    return { dryRun: true, persona, brands };
  }

  // 3. Validate slug is available.
  await assertSlugAvailable(persona.slug);

  // 4. Place persona row in founder tenant + provision inbox.
  const tenant = await findFounderTenant();
  const inbox = generateInboxAddress(persona.slug);
  const profile = buildProfile(persona, inbox.inbox_address, inbox.provisioned_at);

  const [insertedPersona] = await db
    .insert(personas)
    .values({
      slug: persona.slug,
      name: persona.name,
      short: persona.short,
      profile,
      tenantId: tenant.id,
      // template_slug self-reference will be stamped after the template
      // row exists (FK requires it).
    })
    .returning({ id: personas.id });

  // 5. Insert the persona_template row with the same slug + profile.
  await db.insert(personaTemplates).values({
    slug: persona.slug,
    name: persona.name,
    short: persona.short,
    industry: input.industry,
    profile,
    isActive: true,
  });

  // 6. Stamp template_slug self-reference on the persona row.
  await db
    .update(personas)
    .set({ templateSlug: persona.slug })
    .where(eq(personas.id, insertedPersona.id));

  // 7. Seed the vault README (Alon-side curation surface). Repo root is
  // two levels up from `site/lib/template-creation/` when running via
  // tsx from site/.
  const repoRoot = path.resolve(process.cwd(), "..");
  const dir = vaultDir(repoRoot, persona.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.mkdirSync(path.join(dir, "audits"), { recursive: true });
  const readmePath = path.join(dir, "README.md");
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, vaultReadmeContent(persona, input.industry));
  }

  // 8. Enqueue brand subscription jobs.
  for (const b of brands.brands) {
    await enqueueSubscriptionJob({
      tenantId: tenant.id,
      personaSlug: persona.slug,
      brandDomain: b.domain,
      inboxAddress: inbox.inbox_address,
    });
  }

  // 9. Sweep the queued jobs through tryAutoSubscribeJob. Sequential to
  // be polite to the brand homepages we're scraping.
  const queuedJobs = await db
    .select({ id: subscriptionJobs.id, brandDomain: subscriptionJobs.brandDomain })
    .from(subscriptionJobs)
    .where(eq(subscriptionJobs.personaSlug, persona.slug));
  const subResults: CreateTemplateOutput["subscriptions"] = [];
  for (const job of queuedJobs) {
    let outcome: "auto_succeeded" | "manual_pending" | "failed" = "failed";
    try {
      outcome = await tryAutoSubscribeJob(job.id);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(`auto-subscribe failed for ${job.brandDomain}: ${msg.slice(0, 200)}`);
    }
    subResults.push({ brandDomain: job.brandDomain, jobId: job.id, outcome });
  }

  return {
    dryRun: false,
    persona,
    brands,
    personaId: insertedPersona.id,
    inboxAddress: inbox.inbox_address,
    vaultReadmePath: readmePath,
    subscriptions: subResults,
  };
}
