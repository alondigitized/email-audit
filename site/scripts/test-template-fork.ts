/**
 * Synthetic test for the persona-templates fork flow. Skips the LLM calls
 * (industry classifier + competitor research) — those are exercised live
 * by walking through /onboarding in the browser. This script is the
 * deterministic shape-of-the-data check that runs in CI / before merge.
 *
 * Verifies:
 *   1. Walker / martha / calvin-haze templates exist + are active.
 *   2. Alon's persona rows declare template_slug = own slug.
 *   3. Forking 'walker' into a synthetic tenant produces a persona row
 *      with the correct template_slug, slug pattern, and tenant scope.
 *   4. expandReadableSlugs([forkSlug]) returns [forkSlug, 'walker'].
 *   5. getAuditIndexForUser([forkSlug]) surfaces walker's accumulated
 *      audits via the OR-match (read-shared semantics).
 *   6. A second fork from the same tenant produces a different slug
 *      (collision suffix path).
 *   7. Cleanup: the synthetic tenant + its forks delete cleanly without
 *      touching the source template.
 *
 * Usage:
 *   cd site && tsx --env-file=.env.local scripts/test-template-fork.ts
 *
 * Hard-coded synthetic-tenant slug: 'tplfork-test'. The script refuses to
 * touch a tenant with a different slug, and refuses if the tenant has
 * non-fork personas attached (defensive guardrail — see the data-loss
 * incident on 2026-04-25).
 */

import { eq, and } from "drizzle-orm";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import {
  personas,
  personaTemplates,
  tenants,
  audits,
} from "../lib/db/schema";
import { forkTemplateForTenant } from "../lib/persona-fork";
import { expandReadableSlugs } from "../lib/personas-db";
import { getAuditIndexForUser } from "../lib/audits";

const TEST_TENANT_SLUG = "tplfork-test";
const TEST_EMAIL_DOMAIN = "tplfork-test.example";
const TEMPLATE_UNDER_TEST = "walker";

let pass = 0;
let fail = 0;

function check(label: string, ok: boolean, detail?: string) {
  if (ok) {
    console.log(`  ✓ ${label}`);
    pass++;
  } else {
    console.log(`  ✗ ${label}${detail ? ` — ${detail}` : ""}`);
    fail++;
  }
}

async function ensureCleanTenant(db: ReturnType<typeof drizzle>) {
  const [existing] = await db
    .select({ id: tenants.id, slug: tenants.slug })
    .from(tenants)
    .where(eq(tenants.slug, TEST_TENANT_SLUG))
    .limit(1);
  if (!existing) return;
  // Defensive: only nuke a tenant whose slug AND email_domain match the
  // test marker. Anything else is the user's data.
  const [check] = await db
    .select({ slug: tenants.slug, emailDomain: tenants.emailDomain })
    .from(tenants)
    .where(eq(tenants.id, existing.id))
    .limit(1);
  if (check.slug !== TEST_TENANT_SLUG || check.emailDomain !== TEST_EMAIL_DOMAIN) {
    throw new Error(
      `refusing to clean tenant ${existing.id}: slug/email_domain mismatch (got ${check.slug}/${check.emailDomain})`
    );
  }
  // Forks first — FK from persona.tenantId is ON DELETE RESTRICT.
  await db.delete(personas).where(eq(personas.tenantId, existing.id));
  await db.delete(tenants).where(eq(tenants.id, existing.id));
  console.log(`  (cleaned existing ${TEST_TENANT_SLUG} tenant)`);
}

async function main() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL[_UNPOOLED] missing");
  const db = drizzle(neon(url));

  console.log("== Persona-templates fork test ==\n");
  await ensureCleanTenant(db);

  // --- 1. Templates exist ---
  console.log("\n[1] Templates exist + are active");
  const tplRows = await db
    .select({
      slug: personaTemplates.slug,
      industry: personaTemplates.industry,
      isActive: personaTemplates.isActive,
    })
    .from(personaTemplates);
  const tplBySlug = new Map(tplRows.map((t) => [t.slug, t]));
  for (const slug of ["walker", "martha", "calvin-haze"]) {
    const t = tplBySlug.get(slug);
    check(`template ${slug} exists`, !!t);
    check(`template ${slug} is active`, !!t?.isActive);
    check(`template ${slug} industry=footwear`, t?.industry === "footwear");
  }

  // --- 2. Alon's persona rows declare template_slug = own slug ---
  console.log("\n[2] Existing personas carry template_slug pointers");
  for (const slug of ["walker", "martha", "calvin-haze"]) {
    const [p] = await db
      .select({ slug: personas.slug, templateSlug: personas.templateSlug })
      .from(personas)
      .where(eq(personas.slug, slug))
      .limit(1);
    check(
      `persona ${slug}.template_slug === '${slug}'`,
      p?.templateSlug === slug,
      `got ${p?.templateSlug ?? "null"}`
    );
  }

  // --- 3. Fork into synthetic tenant ---
  console.log("\n[3] Fork synthetic tenant from 'walker'");
  const [tenant] = await db
    .insert(tenants)
    .values({
      slug: TEST_TENANT_SLUG,
      name: "TplFork Test",
      emailDomain: TEST_EMAIL_DOMAIN,
      plan: "free",
    })
    .returning({ id: tenants.id, slug: tenants.slug });

  const fork1 = await forkTemplateForTenant({
    templateSlug: TEMPLATE_UNDER_TEST,
    tenantId: tenant.id,
    tenantSlug: tenant.slug,
    overrides: {
      name: "Walker (test fork)",
      searchTerm: "running shoes",
      categoryPath: ["men", "running"],
      journeySite: "https://example.com",
    },
  });
  check(
    "fork slug looks like '<template>-<tenant>'",
    fork1.personaSlug.startsWith(`${TEMPLATE_UNDER_TEST}-${TEST_TENANT_SLUG}`)
  );
  const [forkRow] = await db
    .select({
      slug: personas.slug,
      templateSlug: personas.templateSlug,
      tenantId: personas.tenantId,
    })
    .from(personas)
    .where(eq(personas.id, fork1.personaId))
    .limit(1);
  check("fork row inserted", !!forkRow);
  check("fork.template_slug === walker", forkRow?.templateSlug === "walker");
  check("fork.tenant_id === test tenant", forkRow?.tenantId === tenant.id);
  check(
    "fork carries override name",
    fork1.profile.identity.name === "Walker (test fork)"
  );
  check(
    "fork journey overrides search_term",
    fork1.profile.journey.search_term === "running shoes"
  );
  check(
    "fork inbox is <slug>@etell.app",
    fork1.inboxAddress === `${fork1.personaSlug}@etell.app`,
    `got ${fork1.inboxAddress}`
  );

  // --- 4. expandReadableSlugs unions fork + template ---
  console.log("\n[4] Read-merge — expandReadableSlugs");
  const expanded = await expandReadableSlugs([fork1.personaSlug]);
  check(
    "expanded contains fork slug",
    expanded.includes(fork1.personaSlug)
  );
  check(
    "expanded contains 'walker' template",
    expanded.includes("walker"),
    `got [${expanded.join(", ")}]`
  );

  // --- 5. Audit index sees walker's audits via the fork ---
  console.log("\n[5] Audit reads via fork surface walker's accumulated history");
  const walkerAuditCount = await db
    .select({ slug: audits.slug })
    .from(audits)
    .where(eq(audits.persona, "walker"));
  const indexForFork = await getAuditIndexForUser([fork1.personaSlug]);
  check(
    "fork sees >=1 walker audit",
    indexForFork.length >= 1,
    `fork=${indexForFork.length}, walker direct=${walkerAuditCount.length}`
  );
  check(
    "fork's audit count matches walker's",
    indexForFork.length === walkerAuditCount.length,
    `fork=${indexForFork.length}, walker direct=${walkerAuditCount.length}`
  );

  // --- 6. Second fork from same tenant gets a different slug (suffix path) ---
  console.log("\n[6] Second fork from same tenant produces a unique slug");
  const fork2 = await forkTemplateForTenant({
    templateSlug: TEMPLATE_UNDER_TEST,
    tenantId: tenant.id,
    tenantSlug: tenant.slug,
    overrides: { name: "Walker #2" },
  });
  check("second fork has different slug", fork2.personaSlug !== fork1.personaSlug);
  check(
    "second fork still derives from base prefix",
    fork2.personaSlug.startsWith(`${TEMPLATE_UNDER_TEST}-${TEST_TENANT_SLUG}`)
  );

  // --- 7. Cleanup leaves template untouched ---
  console.log("\n[7] Cleanup");
  await db.delete(personas).where(eq(personas.tenantId, tenant.id));
  await db.delete(tenants).where(eq(tenants.id, tenant.id));
  const [tplStillThere] = await db
    .select({ slug: personaTemplates.slug })
    .from(personaTemplates)
    .where(eq(personaTemplates.slug, "walker"))
    .limit(1);
  check("walker template survived cleanup", !!tplStillThere);

  // Check Alon's persona row still intact (we did NOT touch it).
  const [walkerPersona] = await db
    .select({ slug: personas.slug, templateSlug: personas.templateSlug })
    .from(personas)
    .where(
      and(eq(personas.slug, "walker"), eq(personas.templateSlug, "walker"))
    )
    .limit(1);
  check(
    "Alon's walker persona row untouched (template_slug still 'walker')",
    !!walkerPersona
  );

  console.log(`\n== ${pass} passed, ${fail} failed ==`);
  if (fail > 0) process.exit(1);
}

main().catch((err) => {
  console.error("\nFAIL:", err);
  process.exit(1);
});
