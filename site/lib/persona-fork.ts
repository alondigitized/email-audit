import { createHash } from "node:crypto";
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

// Deterministic per-tenant suffix derived from tenant.id. Encoded in the
// same base32-ish alphabet as randomSuffix so the visual style matches.
//
// Why hash instead of tenant slug: embedding the tenant's brand name in
// the inbox local-part (e.g. `diana-t-skechers@etell.app`) would let ESPs
// detect the cross-brand context when the persona subscribes to a
// competitor's email program and either suppress the subscription or
// send altered content.
//
// Why hash instead of pure random: deterministic, so every persona for the
// same tenant carries the same tenant tag — useful for support / debugging
// (you can tell at a glance which slugs belong to which tenant) without
// leaking the brand name.
//
// 5 chars of 32-symbol alphabet ≈ 24 bits ≈ 16M values. Collisions across
// tenants are rare; collisions within a tenant + same persona name are
// handled by the random fallback in pickAvailableSlug.
function tenantHash(tenantId: string, length = 5): string {
  const buf = createHash("sha256").update(tenantId).digest();
  let out = "";
  for (let i = 0; i < length; i++) {
    out += SUFFIX_ALPHABET[buf[i] % SUFFIX_ALPHABET.length];
  }
  return out;
}

async function pickAvailableSlug(base: string): Promise<string> {
  for (let attempt = 0; attempt < 5; attempt++) {
    // First attempt: deterministic base. On collision, append random
    // entropy to disambiguate (same tenant + same persona name twice,
    // or rare cross-tenant hash collision with same persona name).
    const candidate = attempt === 0 ? base : `${base}-${randomSuffix(4)}`;
    const [existing] = await db
      .select({ id: personas.id })
      .from(personas)
      .where(eq(personas.slug, candidate))
      .limit(1);
    if (!existing) return candidate;
  }
  throw new Error(`fork: could not allocate slug after 5 tries (base=${base})`);
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
  // <template-slug>-<tenant-hash> instead of <template-slug>-<tenant-slug>
  // so brands the fork subscribes to can't read the tenant brand from the
  // inbox local-part. See tenantHash for the rationale.
  const forkSlug = await pickAvailableSlug(
    `${tpl.slug}-${tenantHash(args.tenantId)}`
  );
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
// Slug shape: <name-stem>-<tenant-hash>. The tenant tag is a deterministic
// short hash of tenant.id (see tenantHash) instead of the tenant slug,
// because the inbox subscribes to brand email programs (own + competitors)
// and embedding the tenant brand name (e.g. `diana-t-skechers@etell.app`)
// lets the competitor's ESP detect the cross-brand context and either
// block the signup or send altered content. The hash keeps slugs grouped
// by tenant for debugging without leaking the brand.

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
  /** Retained for symmetry with forkTemplateForTenant; unused in slug
   *  generation now that we don't leak tenancy into the inbox local-part. */
  tenantSlug: string;
  proposal: PersonaProposal;
  ownDomain: string;
}): Promise<ForkResult> {
  const p = args.proposal;
  const slug = await pickAvailableSlug(
    `${slugifyName(p.name)}-${tenantHash(args.tenantId)}`
  );
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
