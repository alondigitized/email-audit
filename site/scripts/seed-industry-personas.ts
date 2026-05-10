/**
 * Seed industry-kind persona templates and fork them into the admin
 * tenant. Industry personas are cross-brand "category critic" lenses
 * that have NO inbox of their own — the producer fans out a parallel
 * audit to them whenever a same-tenant brand persona's email lands.
 *
 * Source data: site/scripts/industry-personas.json — one entry per
 * industry tag.
 *
 * Idempotent: re-running upserts the templates and skips any
 * (tenantId, templateSlug) pair that already has a fork.
 *
 * Flags:
 *   --templates-only   Stop after upserting persona_template rows.
 *   --confirm          Required to write rows. Without it, prints the
 *                      plan and exits.
 *
 * Usage:
 *   cd site && tsx --env-file=.env.local scripts/seed-industry-personas.ts --confirm
 */

import fs from "node:fs";
import path from "node:path";
import { eq, and, sql as dsql } from "drizzle-orm";
import { db } from "../lib/db/client";
import { users, personas, personaTemplates } from "../lib/db/schema";
import { personaProfileSchema } from "../lib/schema/persona";
import { createHash } from "node:crypto";

const ADMIN_EMAIL = "alondigitized@gmail.com";

type Entry = {
  industry: string;
  templateSlug: string;
  name: string;
  short: string;
  age: number;
  generation: string;
  gender: string;
  style: string;
  shopping_habits: string;
  tech_comfort: string;
  focus_areas: string[];
};

function readEntries(): Entry[] {
  const file = path.join(__dirname, "industry-personas.json");
  return JSON.parse(fs.readFileSync(file, "utf8")) as Entry[];
}

function buildIndustryProfile(e: Entry) {
  return personaProfileSchema.parse({
    schema_version: 1,
    identity: {
      name: e.name,
      age: e.age,
      generation: e.generation,
      gender: e.gender,
      style: e.style,
      shopping_habits: e.shopping_habits,
      tech_comfort: e.tech_comfort,
      focus_areas: e.focus_areas,
    },
    // Industry personas have no journey config — they don't browse
    // sites. The producer fan-out only consumes brand-persona emails.
    journey: {
      site: null,
      search_term: null,
      category_path: [],
      credentials_env_prefix: null,
      targets: [],
    },
    // No inbox. Mirrors persona-template's empty agentmail block.
    agentmail: { inbox_address: "", inbox_id: "", provisioned_at: "" },
    onboarding: {},
    color: null,
    notes: null,
    status: "active",
  });
}

async function upsertTemplate(e: Entry): Promise<"inserted" | "updated"> {
  const profile = buildIndustryProfile(e);
  const [existing] = await db
    .select({ slug: personaTemplates.slug })
    .from(personaTemplates)
    .where(eq(personaTemplates.slug, e.templateSlug))
    .limit(1);
  if (existing) {
    await db
      .update(personaTemplates)
      .set({
        name: e.name,
        short: e.short,
        industry: e.industry,
        kind: "industry",
        profile,
        isActive: true,
      })
      .where(eq(personaTemplates.slug, e.templateSlug));
    return "updated";
  }
  await db.insert(personaTemplates).values({
    slug: e.templateSlug,
    name: e.name,
    short: e.short,
    industry: e.industry,
    kind: "industry",
    profile,
    isActive: true,
  });
  return "inserted";
}

// Mirrors persona-fork tenantHash: 5 chars of base32-ish derived from
// tenant.id sha256. Same alphabet as forkTemplateForTenant so industry
// fork slugs visually match the brand-persona fork slugs in the same
// tenant (e.g. -fap6e for Alon).
const SUFFIX_ALPHABET = "abcdefghijkmnpqrstuvwxyz23456789";
function tenantHash(tenantId: string, length = 5): string {
  const buf = createHash("sha256").update(tenantId).digest();
  let out = "";
  for (let i = 0; i < length; i++) {
    out += SUFFIX_ALPHABET[buf[i] % SUFFIX_ALPHABET.length];
  }
  return out;
}

async function findExistingFork(args: {
  tenantId: string;
  templateSlug: string;
}): Promise<string | null> {
  const [row] = await db
    .select({ slug: personas.slug })
    .from(personas)
    .where(
      and(
        eq(personas.tenantId, args.tenantId),
        eq(personas.templateSlug, args.templateSlug)
      )
    )
    .limit(1);
  return row?.slug ?? null;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const confirmed = args.has("--confirm");
  const templatesOnly = args.has("--templates-only");

  const entries = readEntries();
  console.log(`loaded ${entries.length} industry persona entries`);

  if (!confirmed) {
    console.log("\nDRY RUN — pass --confirm to write rows.\n");
    for (const e of entries) {
      console.log(
        `  · ${e.templateSlug.padEnd(36)} ${e.industry.padEnd(20)} ${e.name}`
      );
    }
    return;
  }

  const [admin] = await db
    .select({ id: users.id, tenantId: users.tenantId })
    .from(users)
    .where(eq(users.email, ADMIN_EMAIL))
    .limit(1);
  if (!admin) throw new Error(`admin user ${ADMIN_EMAIL} not found`);
  if (!admin.tenantId)
    throw new Error(`admin user ${ADMIN_EMAIL} has no tenant_id`);
  const tenantId = admin.tenantId;
  const suffix = tenantHash(tenantId);

  let templatesInserted = 0;
  let templatesUpdated = 0;
  for (const e of entries) {
    const r = await upsertTemplate(e);
    if (r === "inserted") templatesInserted++;
    else templatesUpdated++;
  }
  console.log(
    `templates: ${templatesInserted} inserted, ${templatesUpdated} updated`
  );

  if (templatesOnly) return;

  let forksCreated = 0;
  let forksReused = 0;
  for (const e of entries) {
    const existing = await findExistingFork({
      tenantId,
      templateSlug: e.templateSlug,
    });
    if (existing) {
      forksReused++;
      continue;
    }

    const forkSlug = `${e.templateSlug}-${suffix}`;
    // Direct insert — no inbox provisioning (industry personas don't
    // own AgentMail inboxes). kind='industry' + industry tag are the
    // producer fan-out match keys.
    const profile = buildIndustryProfile(e);
    await db.insert(personas).values({
      slug: forkSlug,
      name: e.name,
      short: e.short,
      profile,
      tenantId,
      templateSlug: e.templateSlug,
      kind: "industry",
      industry: e.industry,
    });
    forksCreated++;
    console.log(`  forked ${e.templateSlug} -> ${forkSlug}`);
  }

  console.log(`\nforks: ${forksCreated} created, ${forksReused} reused`);

  // Sanity: count active industry personas matching brands present in
  // the tenant. Helps spot industries with 0 brand subscribers (the
  // fan-out will be a no-op there until you seed a brand persona).
  const matrix = await db.execute(dsql`
    SELECT
      ip.industry,
      ip.slug AS industry_slug,
      COUNT(bp.slug) AS brand_count
    FROM persona ip
    LEFT JOIN persona_template t ON t.industry = ip.industry AND t.kind = 'brand'
    LEFT JOIN persona bp ON bp.template_slug = t.slug AND bp.tenant_id = ip.tenant_id
    WHERE ip.kind = 'industry' AND ip.tenant_id = ${tenantId}
    GROUP BY ip.industry, ip.slug
    ORDER BY ip.industry
  `);
  console.log(`\nfan-out matrix (industries × brand-persona count):`);
  for (const r of matrix.rows ?? []) {
    console.log(
      `  · ${String(r.industry).padEnd(22)} ${String(r.brand_count).padStart(2)} brands  -> ${r.industry_slug}`
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
