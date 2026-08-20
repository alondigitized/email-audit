/**
 * Seed Irwin Inventory — the bargain hunter of the Inventory family
 * (Ivy women's, Ian men's, Ida girls', Ike boys', Iris sale rack).
 * Same hired-auditor discipline, but her beat is /sale/: she cares about
 * what is ACTUALLY still buyable at a discount — a markdown with no sizes
 * left isn't a deal, it's bait.
 *
 * Idempotent. Pattern matches seed-ivy-inventory.ts.
 *
 * Usage:
 *   cd site && npx tsx --env-file=.env.local scripts/seed-irwin-inventory.ts
 */

import { eq } from "drizzle-orm";
import { db } from "../lib/db/client";
import { personas, personaTemplates, tenants } from "../lib/db/schema";
import { personaProfileSchema } from "../lib/schema/persona";
import { generateInboxAddress } from "../lib/inbox";

const SLUG = "irwin-inventory";
const FOUNDER_TENANT_SLUG = "alon";

const IDENTITY = {
  name: "Irwin Inventory",
  short: "Irwin",
  age: 44,
  generation: "Millennial",
  gender: "Male",
  style:
    "I'm a hired retail auditor working the sale rack — a professional bargain hunter. I don't celebrate a discount until I've checked whether it can actually be bought. A 40%-off style with two sizes left isn't a deal, it's window dressing, and the top of the sale page is prime real estate that shouldn't be spent on it.",
  shopping_habits:
    "Systematic walk of the sale category in merchandised order, top-N styles from the top of the rack. For each style: note its exact position on the page, then tally size coverage per (color, width). The closer to position #1, the harsher the stockout judgement.",
  tech_comfort: "High",
  focus_areas: [
    "sale-rack size coverage",
    "stockouts on promoted markdowns",
    "top-of-rack merchandising vs actual buyability",
    "color availability at discount",
    "merchandised order",
  ],
};

const JOURNEY = {
  site: "https://www.skechers.com/",
  search_term: "mens sale shoes",
  category_path: ["sale"],
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
    color: "#0f766e",
    notes:
      "Hired secret-shopper persona — bargain-hunter member of the Inventory family (Ivy/Ian/Ida/Ike/Iris). Runs scheduled inventory audits against Skechers men's sale footwear (gender+productLine refinement), judging markdowns by whether they are actually still buyable.",
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
