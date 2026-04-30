/**
 * Seed Ivy Inventory — the secret-shopper persona that runs Skechers
 * inventory/sizing audits. Idempotent: re-running upserts the template
 * row + persona row + template_slug self-reference.
 *
 * Pattern matches scripts/promote-personas-to-templates.ts:
 *   - persona_template row (etell.app IP)
 *   - persona row in founder tenant ('alon') with same slug
 *   - persona.template_slug = 'ivy-inventory' (self-reference)
 *   - inbox at ivy-inventory@etell.app via generateInboxAddress
 *
 * Usage:
 *   cd site && npx tsx --env-file=.env.local scripts/seed-ivy-inventory.ts
 */

import { eq } from "drizzle-orm";
import { db } from "../lib/db/client";
import { personas, personaTemplates, tenants } from "../lib/db/schema";
import { personaProfileSchema } from "../lib/schema/persona";
import { generateInboxAddress } from "../lib/inbox";

const SLUG = "ivy-inventory";
const FOUNDER_TENANT_SLUG = "alon";

const IDENTITY = {
  name: "Ivy Inventory",
  short: "Ivy",
  age: 42,
  generation: "Gen X",
  gender: "Female",
  // Voice: hired secret shopper / retail auditor. Methodical, professional,
  // observant. Reports in clipboard-and-checklist tone — does NOT gush, does
  // NOT get excited about deals, does NOT speak as a customer. Counts, tallies,
  // reports. The opposite of Walker's customer-archetype voice.
  style:
    "I'm a hired retail auditor — independent contractor, not a customer. I do not gush, I do not get excited about deals. I count, I tally, I report. My job is to walk every shelf of a brand's catalog and tell my client what's actually in stock.",
  shopping_habits:
    "Daily systematic walk of category pages, top-20 styles per category. Note size coverage per color, flag stockouts, capture proof.",
  tech_comfort: "High",
  focus_areas: [
    "size coverage",
    "color availability",
    "stockouts",
    "merchandised order",
    "PLP-to-PDP gaps",
  ],
};

const JOURNEY = {
  site: "https://www.skechers.com/",
  search_term: "women's shoes",
  category_path: ["women", "shoes"],
};

async function main() {
  const [tenant] = await db
    .select({ id: tenants.id, slug: tenants.slug })
    .from(tenants)
    .where(eq(tenants.slug, FOUNDER_TENANT_SLUG))
    .limit(1);
  if (!tenant)
    throw new Error(`founder tenant '${FOUNDER_TENANT_SLUG}' not found`);

  const inbox = generateInboxAddress(SLUG);
  const profile = personaProfileSchema.parse({
    schema_version: 1,
    identity: IDENTITY,
    journey: {
      site: JOURNEY.site,
      search_term: JOURNEY.search_term,
      category_path: JOURNEY.category_path,
      credentials_env_prefix: null,
      targets: [],
    },
    agentmail: {
      inbox_address: inbox.inbox_address,
      inbox_id: inbox.inbox_id,
      provisioned_at: inbox.provisioned_at,
    },
    onboarding: {},
    color: "#a855f7",
    notes:
      "Hired secret-shopper persona. Runs scheduled inventory audits against retailer PLPs and reports size coverage per (style, color).",
    status: "active",
  });

  // Upsert persona_template row.
  const [existingTpl] = await db
    .select({ slug: personaTemplates.slug })
    .from(personaTemplates)
    .where(eq(personaTemplates.slug, SLUG))
    .limit(1);
  if (existingTpl) {
    await db
      .update(personaTemplates)
      .set({
        name: IDENTITY.name,
        short: IDENTITY.short,
        industry: "footwear",
        profile,
        isActive: true,
      })
      .where(eq(personaTemplates.slug, SLUG));
    console.log(`template ${SLUG} updated`);
  } else {
    await db.insert(personaTemplates).values({
      slug: SLUG,
      name: IDENTITY.name,
      short: IDENTITY.short,
      industry: "footwear",
      profile,
      isActive: true,
    });
    console.log(`template ${SLUG} inserted`);
  }

  // Upsert persona row (in founder tenant, with template_slug = self).
  const [existingPersona] = await db
    .select({ id: personas.id, templateSlug: personas.templateSlug })
    .from(personas)
    .where(eq(personas.slug, SLUG))
    .limit(1);
  if (existingPersona) {
    await db
      .update(personas)
      .set({
        name: IDENTITY.name,
        short: IDENTITY.short,
        profile,
        tenantId: tenant.id,
        templateSlug: SLUG,
      })
      .where(eq(personas.id, existingPersona.id));
    console.log(`persona ${SLUG} updated (id=${existingPersona.id})`);
  } else {
    const [inserted] = await db
      .insert(personas)
      .values({
        slug: SLUG,
        name: IDENTITY.name,
        short: IDENTITY.short,
        profile,
        tenantId: tenant.id,
        templateSlug: SLUG,
      })
      .returning({ id: personas.id });
    console.log(`persona ${SLUG} inserted (id=${inserted.id})`);
  }

  console.log(`\ninbox: ${inbox.inbox_address}`);
  console.log(`done.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
