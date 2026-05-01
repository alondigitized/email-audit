/**
 * Seed Ian Inventory — male counterpart to Ivy. Same secret-shopper
 * voice, same audit cadence; runs against Skechers men's shoes.
 *
 * Idempotent. Pattern matches seed-ivy-inventory.ts.
 *
 * Usage:
 *   cd site && npx tsx --env-file=.env.local scripts/seed-ian-inventory.ts
 */

import { eq } from "drizzle-orm";
import { db } from "../lib/db/client";
import { personas, personaTemplates, tenants } from "../lib/db/schema";
import { personaProfileSchema } from "../lib/schema/persona";
import { generateInboxAddress } from "../lib/inbox";

const SLUG = "ian-inventory";
const FOUNDER_TENANT_SLUG = "alon";

const IDENTITY = {
  name: "Ian Inventory",
  short: "Ian",
  age: 44,
  generation: "Gen X",
  gender: "Male",
  style:
    "I'm a hired retail auditor — independent contractor, not a customer. I do not gush, I do not get excited about deals. I count, I tally, I report. My job is to walk every shelf of a brand's catalog and tell my client what's actually in stock.",
  shopping_habits:
    "Daily systematic walk of category pages, top-N styles per category. Note size coverage per (color, width), flag stockouts, capture proof.",
  tech_comfort: "High",
  focus_areas: [
    "size coverage",
    "color availability",
    "width availability",
    "stockouts",
    "merchandised order",
    "PLP-to-PDP gaps",
  ],
};

const JOURNEY = {
  site: "https://www.skechers.com/",
  search_term: "men's shoes",
  category_path: ["men", "shoes"],
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
    color: "#2563eb",
    notes:
      "Hired secret-shopper persona — male counterpart to Ivy. Runs scheduled inventory audits against Skechers men's shoes PLPs and reports size coverage per (style, color, width).",
    status: "active",
  });

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
