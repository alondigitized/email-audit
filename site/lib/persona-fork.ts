import { eq } from "drizzle-orm";
import { db, personas, personaTemplates } from "@/lib/db/client";
import {
  personaProfileSchema,
  type PersonaProfile,
} from "@/lib/schema/persona";
import { generateInboxAddress } from "@/lib/inbox";
import type { PersonaProposal } from "@/lib/onboarding/research-prompt";

// Fork a curated persona_template into a tenant-scoped persona row. Reads
// the template's profile, deep-clones it (so future template edits don't
// leak to the fork or vice versa), applies caller overrides, generates a
// Cloudflare-routed inbox at <fork-slug>@etell.app, and inserts the row.
//
// Fork-slug naming: <template-slug>-<tenant-slug>. On collision (very
// unlikely — would mean re-fork from same tenant), append a 4-char random
// suffix and retry up to 3 times.
//
// Read-shared/write-isolated semantics: the fork carries `template_slug`
// pointing back at its source. lib/personas-db.ts expandReadableSlugs uses
// that to OR-match audits/embeddings against [forkSlug, templateSlug] on
// reads. Writes (new audits, chat threads, email messages) only land at
// forkSlug, never at the template slug.

export type ForkOverrides = {
  // Identity overrides — admin-supplied edits before forking. Unset fields
  // fall back to the template's value.
  name?: string;
  age?: number;
  generation?: string;
  gender?: string;
  style?: string;
  shopping_habits?: string;
  tech_comfort?: string;
  focus_areas?: string[];
  // Daemon journey overrides. The template ships with sane defaults
  // (Walker's defaults point at a generic athletic-shoes search), but the
  // tenant typically wants to point the journey at their OWN site +
  // chosen competitor, so these are usually all set.
  journeySite?: string;
  searchTerm?: string;
  categoryPath?: string[];
};

export type ForkResult = {
  personaId: string;
  personaSlug: string;
  profile: PersonaProfile;
  inboxAddress: string;
};

const SUFFIX_ALPHABET = "abcdefghijkmnpqrstuvwxyz23456789";
function randomSuffix(n: number): string {
  let out = "";
  for (let i = 0; i < n; i++) {
    out += SUFFIX_ALPHABET[Math.floor(Math.random() * SUFFIX_ALPHABET.length)];
  }
  return out;
}

async function pickAvailableSlug(base: string): Promise<string> {
  for (let attempt = 0; attempt < 4; attempt++) {
    const candidate = attempt === 0 ? base : `${base}-${randomSuffix(4)}`;
    const [existing] = await db
      .select({ id: personas.id })
      .from(personas)
      .where(eq(personas.slug, candidate))
      .limit(1);
    if (!existing) return candidate;
  }
  // Astronomically unlikely; surface as a hard error rather than risk
  // silently overwriting a legitimate persona.
  throw new Error(`fork: could not allocate slug after 4 tries (base=${base})`);
}

export async function forkTemplateForTenant(args: {
  templateSlug: string;
  tenantId: string;
  tenantSlug: string;
  overrides: ForkOverrides;
}): Promise<ForkResult> {
  const [tpl] = await db
    .select({
      slug: personaTemplates.slug,
      name: personaTemplates.name,
      short: personaTemplates.short,
      profile: personaTemplates.profile,
      isActive: personaTemplates.isActive,
    })
    .from(personaTemplates)
    .where(eq(personaTemplates.slug, args.templateSlug))
    .limit(1);
  if (!tpl) throw new Error(`fork: template '${args.templateSlug}' not found`);
  if (!tpl.isActive) throw new Error(`fork: template '${args.templateSlug}' is inactive`);
  if (!tpl.profile) throw new Error(`fork: template '${args.templateSlug}' has no profile`);

  const o = args.overrides;
  const baseSlug = `${tpl.slug}-${args.tenantSlug}`;
  const forkSlug = await pickAvailableSlug(baseSlug);
  const inbox = generateInboxAddress(forkSlug);

  // Deep-clone the template profile then layer overrides on top. Use
  // structuredClone so nested arrays/objects don't share references.
  const cloned: PersonaProfile = structuredClone(tpl.profile);

  const merged: PersonaProfile = personaProfileSchema.parse({
    schema_version: 1,
    identity: {
      name: o.name ?? cloned.identity.name,
      age: o.age ?? cloned.identity.age,
      generation: o.generation ?? cloned.identity.generation,
      gender: o.gender ?? cloned.identity.gender,
      style: o.style ?? cloned.identity.style,
      shopping_habits: o.shopping_habits ?? cloned.identity.shopping_habits,
      tech_comfort: o.tech_comfort ?? cloned.identity.tech_comfort,
      focus_areas: o.focus_areas ?? cloned.identity.focus_areas,
    },
    journey: {
      site: o.journeySite ?? cloned.journey.site,
      search_term: o.searchTerm ?? cloned.journey.search_term,
      category_path: o.categoryPath ?? cloned.journey.category_path,
      credentials_env_prefix: cloned.journey.credentials_env_prefix ?? null,
      // Targets are template-curated journey waypoints; forks inherit them
      // until/unless the tenant edits in admin.
      targets: cloned.journey.targets ?? [],
    },
    agentmail: {
      // Field name kept for backward compat; value is the Cloudflare-routed
      // <fork-slug>@etell.app, not an AgentMail-managed inbox.
      inbox_address: inbox.inbox_address,
      inbox_id: inbox.inbox_id,
      provisioned_at: inbox.provisioned_at,
    },
    onboarding: cloned.onboarding ?? {},
    color: cloned.color ?? null,
    notes: cloned.notes ?? null,
    status: "active",
  });

  const [inserted] = await db
    .insert(personas)
    .values({
      slug: forkSlug,
      name: o.name ?? tpl.name,
      short: tpl.short,
      profile: merged,
      tenantId: args.tenantId,
      templateSlug: tpl.slug,
    })
    .returning({ id: personas.id });

  return {
    personaId: inserted.id,
    personaSlug: forkSlug,
    profile: merged,
    inboxAddress: inbox.inbox_address,
  };
}

// Public-funnel persona creation: no template, no fork. The wizard's research
// step generates 3 fresh PersonaProposals via the LLM, the user picks one
// (and optionally edits identity), and this helper writes the row directly.
//
// `templateSlug: null` is the IP-isolation signal — `expandReadableSlugs`
// won't OR-match anything, so the persona's brain is genuinely empty on day 1
// (matches the v3 design lock: forks/personas accumulate reactions only from
// new mail, never inherit a template's voice).
//
// Slug shape mirrors the fork helper: <name-stem>-<tenant-slug>. The
// per-tenant suffix prevents global slug collisions when two tenants generate
// personas with similar names.

function slugifyName(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 24) || "persona"
  );
}

export async function createTenantPersonaFromProposal(args: {
  tenantId: string;
  tenantSlug: string;
  proposal: PersonaProposal;
  ownDomain: string;
}): Promise<ForkResult> {
  const p = args.proposal;
  const baseSlug = `${slugifyName(p.name)}-${args.tenantSlug}`;
  const slug = await pickAvailableSlug(baseSlug);
  const inbox = generateInboxAddress(slug);

  const journeySite = args.ownDomain.startsWith("http")
    ? args.ownDomain
    : `https://${args.ownDomain}`;

  const profile: PersonaProfile = personaProfileSchema.parse({
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
      site: journeySite,
      search_term: p.search_term,
      category_path: p.category_path,
      credentials_env_prefix: null,
      targets: [],
    },
    agentmail: {
      inbox_address: inbox.inbox_address,
      inbox_id: inbox.inbox_id,
      provisioned_at: inbox.provisioned_at,
    },
    onboarding: {},
    color: null,
    notes: null,
    status: "active",
  });

  const short = p.name.split(/\s+/)[0] ?? slug;
  const [inserted] = await db
    .insert(personas)
    .values({
      slug,
      name: p.name,
      short,
      profile,
      tenantId: args.tenantId,
      templateSlug: null,
    })
    .returning({ id: personas.id });

  return {
    personaId: inserted.id,
    personaSlug: slug,
    profile,
    inboxAddress: inbox.inbox_address,
  };
}
