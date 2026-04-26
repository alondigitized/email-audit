/**
 * One-shot: promote walker / martha / calvin-haze from "personas tied to
 * Alon's tenant" into "platform-level templates AND persona instances that
 * point at those templates."
 *
 * After this script:
 * - persona_template.walker / .martha / .calvin-haze exist (etell.app IP)
 * - persona.walker / .martha / .calvin-haze still exist with the same
 *   slug + tenant_id (Alon's), but now declare template_slug = same-slug
 * - All audits/email_messages/chat_threads keyed on the persona slug stay
 *   readable by Alon (tenant-scoped) AND by any future fork via the read-
 *   merge helper that OR-matches on [persona.slug, persona.template_slug].
 *
 * Idempotent: re-running upserts the template + only updates the persona
 * row if template_slug isn't already set.
 *
 * Usage:
 *   cd site && tsx --env-file=.env.local scripts/promote-personas-to-templates.ts
 */

import { eq } from "drizzle-orm";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { personas, personaTemplates } from "../lib/db/schema";

const PROMOTIONS = [
  { slug: "walker", industry: "footwear" },
  { slug: "martha", industry: "footwear" },
  { slug: "calvin-haze", industry: "footwear" },
];

async function main() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL_UNPOOLED missing");
  const db = drizzle(neon(url));

  for (const { slug, industry } of PROMOTIONS) {
    const [p] = await db
      .select()
      .from(personas)
      .where(eq(personas.slug, slug))
      .limit(1);
    if (!p) {
      console.log(`skip ${slug} — no source persona row`);
      continue;
    }

    // Upsert the template row.
    const [existingTemplate] = await db
      .select({ slug: personaTemplates.slug })
      .from(personaTemplates)
      .where(eq(personaTemplates.slug, slug))
      .limit(1);
    if (existingTemplate) {
      console.log(`template ${slug} already exists`);
    } else {
      await db.insert(personaTemplates).values({
        slug: p.slug,
        name: p.name,
        short: p.short,
        industry,
        profile: p.profile,
        lastStatus: p.lastStatus,
        isActive: true,
      });
      console.log(`inserted template ${slug} (industry=${industry})`);
    }

    // Stamp template_slug on the persona row if not set.
    if (p.templateSlug) {
      console.log(`persona ${slug} already declares template_slug=${p.templateSlug}`);
    } else {
      await db
        .update(personas)
        .set({ templateSlug: slug })
        .where(eq(personas.id, p.id));
      console.log(`stamped persona ${slug}.template_slug = ${slug}`);
    }
  }

  // Sanity counts.
  const tCount = await db.select({ slug: personaTemplates.slug }).from(personaTemplates);
  const pWithTemplate = await db
    .select({ slug: personas.slug, ts: personas.templateSlug })
    .from(personas);
  console.log(`\ndone.`);
  console.log(`  templates: ${tCount.length} (${tCount.map((r) => r.slug).join(", ")})`);
  console.log(
    `  personas with template_slug: ${pWithTemplate.filter((p) => p.ts).length}/${pWithTemplate.length}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
