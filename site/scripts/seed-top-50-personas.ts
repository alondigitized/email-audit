/**
 * Seed 50 retailer-flavored persona templates, fork each into the admin's
 * tenant, and (optionally) enqueue a subscription_job so the new persona's
 * inbox starts receiving the retailer's emails.
 *
 * Source data: site/scripts/top-50-retailers.json — one entry per retailer
 * with templateSlug + identity + journey fields. Each entry maps to:
 *   1. an upsert into persona_template (the platform catalog row), and
 *   2. a fork into Alon's admin tenant via forkTemplateForTenant() (creates
 *      the live persona row with a Cloudflare-routed inbox), and
 *   3. one subscription_job enqueued at <persona-slug, retailer-domain>.
 *
 * Idempotent: re-running upserts the templates and skips any (tenantId,
 * templateSlug) pair that already has a fork. Subscription jobs are skipped
 * when an open job already exists for the same (personaSlug, brandDomain).
 *
 * Flags:
 *   --templates-only   Stop after upserting persona_template rows.
 *   --no-subscribe     Fork personas but don't enqueue subscription jobs.
 *   --confirm          Required to actually write rows. Without it the
 *                      script prints the plan and exits.
 *
 * Usage:
 *   cd site && tsx --env-file=.env.local scripts/seed-top-50-personas.ts --confirm
 */

import fs from "node:fs";
import path from "node:path";
import { eq, and } from "drizzle-orm";
import { db } from "../lib/db/client";
import {
  users,
  personas,
  personaTemplates,
  subscriptionJobs,
} from "../lib/db/schema";
import { forkTemplateForTenant } from "../lib/persona-fork";
import { enqueueSubscriptionJob } from "../lib/subscriptions/queue";
import { personaProfileSchema } from "../lib/schema/persona";

const ADMIN_EMAIL = "alondigitized@gmail.com";

type Entry = {
  retailer: string;
  templateSlug: string;
  industry: string;
  brandDomain: string;
  homepage: string;
  name: string;
  short: string;
  age: number;
  generation: string;
  gender: string;
  style: string;
  shopping_habits: string;
  tech_comfort: string;
  focus_areas: string[];
  search_term: string;
  category_path: string[];
};

function readEntries(): Entry[] {
  const file = path.join(__dirname, "top-50-retailers.json");
  const raw = fs.readFileSync(file, "utf8");
  return JSON.parse(raw) as Entry[];
}

function buildTemplateProfile(e: Entry) {
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
    journey: {
      site: e.homepage,
      search_term: e.search_term,
      category_path: e.category_path,
      credentials_env_prefix: null,
      targets: [],
    },
    // Templates don't have inboxes; fork-time minting fills these.
    agentmail: {
      inbox_address: "",
      inbox_id: "",
      provisioned_at: "",
    },
    onboarding: {},
    color: null,
    notes: null,
    status: "active",
  });
}

async function upsertTemplate(e: Entry): Promise<"inserted" | "updated"> {
  const profile = buildTemplateProfile(e);
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
    profile,
    isActive: true,
  });
  return "inserted";
}

async function findExistingFork(args: {
  tenantId: string;
  templateSlug: string;
}): Promise<{ slug: string; inboxAddress: string } | null> {
  const [row] = await db
    .select({ slug: personas.slug, profile: personas.profile })
    .from(personas)
    .where(
      and(
        eq(personas.tenantId, args.tenantId),
        eq(personas.templateSlug, args.templateSlug)
      )
    )
    .limit(1);
  if (!row) return null;
  return {
    slug: row.slug,
    inboxAddress: row.profile?.agentmail?.inbox_address ?? "",
  };
}

async function findOpenSubscriptionJob(args: {
  personaSlug: string;
  brandDomain: string;
}): Promise<boolean> {
  const [row] = await db
    .select({ id: subscriptionJobs.id })
    .from(subscriptionJobs)
    .where(
      and(
        eq(subscriptionJobs.personaSlug, args.personaSlug),
        eq(subscriptionJobs.brandDomain, args.brandDomain)
      )
    )
    .limit(1);
  return !!row;
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const confirmed = args.has("--confirm");
  const templatesOnly = args.has("--templates-only");
  const noSubscribe = args.has("--no-subscribe");

  const entries = readEntries();
  console.log(`loaded ${entries.length} retailer entries`);

  if (!confirmed) {
    console.log("\nDRY RUN — pass --confirm to write rows.\n");
    for (const e of entries) {
      console.log(
        `  · ${e.templateSlug.padEnd(30)} ${e.brandDomain.padEnd(28)} ${e.name}`
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
  if (!admin.tenantId) throw new Error(`admin user ${ADMIN_EMAIL} has no tenant_id`);
  const tenantId = admin.tenantId;

  // Per-tenant slug suffix uses tenantId only, but forkTemplateForTenant
  // takes a tenantSlug for symmetry with the wizard call site. Use "alon"
  // here — it doesn't appear in the persona slug (tenantHash does).
  const tenantSlug = "alon";

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
  let jobsEnqueued = 0;
  let jobsSkippedExisting = 0;
  let jobsSkippedBlocklist = 0;

  for (const e of entries) {
    const existing = await findExistingFork({
      tenantId,
      templateSlug: e.templateSlug,
    });
    let personaSlug: string;
    let inboxAddress: string;
    if (existing) {
      personaSlug = existing.slug;
      inboxAddress = existing.inboxAddress;
      forksReused++;
    } else {
      const fork = await forkTemplateForTenant({
        templateSlug: e.templateSlug,
        tenantId,
        tenantSlug,
        overrides: {
          journeySite: e.homepage,
          searchTerm: e.search_term,
          categoryPath: e.category_path,
        },
      });
      personaSlug = fork.personaSlug;
      inboxAddress = fork.inboxAddress;
      forksCreated++;
      console.log(`  forked ${e.templateSlug} -> ${personaSlug}`);
    }

    if (noSubscribe) continue;
    if (!inboxAddress) {
      console.warn(`  skip subscribe for ${personaSlug} — no inbox`);
      continue;
    }

    if (await findOpenSubscriptionJob({ personaSlug, brandDomain: e.brandDomain })) {
      jobsSkippedExisting++;
      continue;
    }
    const jobId = await enqueueSubscriptionJob({
      tenantId,
      personaSlug,
      brandDomain: e.brandDomain,
      inboxAddress,
    });
    if (jobId) jobsEnqueued++;
    else jobsSkippedBlocklist++;
  }

  console.log(
    `\nforks: ${forksCreated} created, ${forksReused} reused\n` +
      `jobs:  ${jobsEnqueued} enqueued, ${jobsSkippedExisting} already-pending, ${jobsSkippedBlocklist} blocklisted`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
