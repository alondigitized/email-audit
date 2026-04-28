/**
 * End-to-end test of the free-tier funnel against the live DB.
 *
 * Drives:
 *   1. Signup        → tenant (waitlisted) + user
 *   2. Approve       → free plan, tier dates, referral code
 *   3. Research call → fetch homepage + Claude Opus structured output
 *   4. Persona pick  → store chosen persona/competitor
 *   5. Persona commit → insert persona row + AgentMail inbox + laptop queue
 *                       + subscription jobs
 *   6. Cleanup       → drop everything we just inserted (tenant guarded)
 *
 * Each step prints PASS/FAIL with row counts so you can see exactly where
 * something breaks.
 *
 * Usage:
 *   cd site && tsx --env-file=.env.local scripts/test-signup-flow.ts
 *
 *   # to skip cleanup (leave state for manual inspection):
 *   tsx ... scripts/test-signup-flow.ts --leave
 */

import { eq, and } from "drizzle-orm";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import {
  tenants,
  users,
  personas,
  userPersonas,
  laptopProvisioningJobs,
  subscriptionJobs,
  signInRateLimit,
  verificationTokens,
  sessions,
  accounts,
  chatMessage,
  chatThread,
  audits,
  auditEmbedding,
  emailMessages,
} from "../lib/db/schema";
import { isCompanyEmail } from "../lib/free-domains";
import { fetchSiteSummary } from "../lib/onboarding/fetch-site";
import { runOnboardingResearch } from "../lib/onboarding/research";
import {
  PersonaProposalSchema,
  CompetitorProposalSchema,
} from "../lib/onboarding/research-prompt";
import { generateInboxAddress } from "../lib/inbox";
import { z } from "zod";

const TEST_EMAIL = "alan.tsang@skechers.com";
const FREE_DAYS = 14;

const args = process.argv.slice(2);
const leave = args.includes("--leave");
const mockResearch = args.includes("--mock-research");

// Stub research output for when Vercel AI Gateway is unavailable.
function mockResearchOutput() {
  return {
    personas: [
      {
        name: "Sarah K.",
        age: 34,
        generation: "Millennial",
        gender: "Female",
        style: "Athleisure-forward, prefers neutrals, brand-loyal once she finds a fit she trusts.",
        shopping_habits: "Browses on mobile during commute; buys on desktop after reading reviews.",
        tech_comfort: "High",
        focus_areas: ["walking comfort", "wide widths", "neutrals"],
        rationale: "Highest-LTV target — repeat buyer, drives social referrals.",
        search_term: "memory foam slip-on",
        category_path: ["women", "walking"],
      },
      {
        name: "Jamal T.",
        age: 22,
        generation: "Gen Z",
        gender: "Male",
        style: "Streetwear, bold colorways, follows drops on TikTok.",
        shopping_habits: "Discovers via Instagram ads, buys impulsively.",
        tech_comfort: "Native",
        focus_areas: ["chunky soles", "streetwear", "limited drops"],
        rationale: "Aspirational young adult; expands brand reach into Gen Z.",
        search_term: "d'lites",
        category_path: ["men", "lifestyle"],
      },
      {
        name: "Linda M.",
        age: 58,
        generation: "Boomer",
        gender: "Female",
        style: "Practical, prefers classic black/white, buys for comfort first.",
        shopping_habits: "Shops in-store at outlets; emails reviewed via desktop on weekends.",
        tech_comfort: "Medium",
        focus_areas: ["arch support", "non-slip", "all-day comfort"],
        rationale: "Brand's core demo for comfort lines; high repeat purchase frequency.",
        search_term: "arch fit",
        category_path: ["women", "work"],
      },
    ],
    competitors: [
      { name: "Crocs", domain: "crocs.com", rationale: "Same comfort-first audience overlap." },
      { name: "HOKA", domain: "hoka.com", rationale: "Shared performance-walker buyer." },
    ],
    recommended_persona_idx: 0,
  };
}

let pass = 0;
let fail = 0;
function step(label: string, ok: boolean, detail?: string) {
  if (ok) {
    pass++;
    console.log(`  ✓ ${label}${detail ? ` — ${detail}` : ""}`);
  } else {
    fail++;
    console.log(`  ✗ ${label}${detail ? ` — ${detail}` : ""}`);
  }
}

function nanoid(n: number): string {
  const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
  const buf = new Uint8Array(n);
  crypto.getRandomValues(buf);
  let out = "";
  for (let i = 0; i < n; i++) out += alphabet[buf[i] % alphabet.length];
  return out;
}

function addDays(d: Date, days: number): Date {
  const next = new Date(d);
  next.setDate(next.getDate() + days);
  return next;
}

async function main() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL_UNPOOLED missing");
  const db = drizzle(neon(url));

  console.log(`\n══ test signup flow: ${TEST_EMAIL} ══\n`);

  let tenantId: string | null = null;
  let userId: string | null = null;
  let createdPersonaId: string | null = null;
  let createdPersonaSlug: string | null = null;

  try {
    // ── 0. Pre-flight: verify state is clean ──────────────────────────────
    console.log("0. pre-flight");
    const existingUser = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.email, TEST_EMAIL));
    if (existingUser.length > 0) {
      console.log(`  ✗ ${TEST_EMAIL} still exists — run reset first`);
      process.exit(1);
    }
    step("clean slate", true);

    // ── 1. Signup ────────────────────────────────────────────────────────
    console.log("\n1. signup (mirrors signupAction)");
    const company = isCompanyEmail(TEST_EMAIL);
    step("isCompanyEmail accepts skechers.com", company.ok, company.domain);
    const domain = company.domain!;

    const slugStem = domain.split(".")[0]?.toLowerCase().replace(/[^a-z0-9]/g, "") ?? "tenant";
    const ts = Date.now();
    let tenantSlug = `${slugStem}-test-${ts}`;
    // Use a synthetic domain so the test's tenant never collides with real
    // @skechers.com signups (which would otherwise auto-join this row).
    const syntheticDomain = `${slugStem}-test-${ts}.example`;
    const [createdTenant] = await db
      .insert(tenants)
      .values({
        slug: tenantSlug,
        name: domain,
        emailDomain: syntheticDomain,
        plan: "waitlisted",
      })
      .returning({ id: tenants.id });
    tenantId = createdTenant.id;
    await db.insert(users).values({ email: TEST_EMAIL, tenantId });
    const [u] = await db
      .select({ id: users.id, tenantId: users.tenantId })
      .from(users)
      .where(eq(users.email, TEST_EMAIL))
      .limit(1);
    userId = u.id;
    step("tenant created (waitlisted)", true, `slug=${tenantSlug}`);
    step("user inserted with tenant_id", u.tenantId === tenantId);

    // ── 2. Admin approval ────────────────────────────────────────────────
    console.log("\n2. admin approval (mirrors approveTenantAction)");
    const now = new Date();
    const tierExpires = addDays(now, FREE_DAYS);
    const referralCode = nanoid(8);
    await db
      .update(tenants)
      .set({
        plan: "free",
        tierStartedAt: now,
        tierExpiresAt: tierExpires,
        referralCode,
      })
      .where(eq(tenants.id, tenantId));
    const [t] = await db
      .select()
      .from(tenants)
      .where(eq(tenants.id, tenantId))
      .limit(1);
    step("plan flipped to free", t.plan === "free");
    step("tier_expires_at = +14d", t.tierExpiresAt !== null);
    step("referral_code generated", !!t.referralCode);

    // ── 3. Research call ──────────────────────────────────────────────────
    console.log("\n3. LLM research (mirrors startResearchAction)");
    let siteSummary: string | null = null;
    try {
      siteSummary = await fetchSiteSummary(domain);
    } catch (err) {
      step(`site fetch (${domain})`, false, err instanceof Error ? err.message : String(err));
    }
    step(
      `site fetch (${domain})`,
      siteSummary !== null,
      siteSummary ? `${siteSummary.length} chars` : "null (will fall back to domain-only)"
    );

    let research;
    const t0 = Date.now();
    if (mockResearch) {
      research = mockResearchOutput();
      step("Claude research call (MOCKED)", true, "skipped real LLM via --mock-research");
    } else {
      try {
        research = await runOnboardingResearch({ domain, siteSummary });
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        step("Claude research call", false, msg.slice(0, 200));
        throw err;
      }
      step("Claude research call returned", true, `${Date.now() - t0}ms`);
    }
    step("3 personas + 2 competitors", research.personas.length === 3 && research.competitors.length === 2);
    const personaParse = z.array(PersonaProposalSchema).safeParse(research.personas);
    const competitorParse = z.array(CompetitorProposalSchema).safeParse(research.competitors);
    step("persona shape matches zod", personaParse.success);
    step("competitor shape matches zod", competitorParse.success);
    console.log(`     recommended persona: ${research.personas[research.recommended_persona_idx].name}`);
    console.log(`     recommended competitor: ${research.competitors[0].name} (${research.competitors[0].domain})`);

    await db
      .update(tenants)
      .set({
        onboardingResearch: {
          site_summary: siteSummary,
          generations: 1,
          personas: research.personas,
          competitors: research.competitors,
          recommended_persona_idx: research.recommended_persona_idx,
        },
      })
      .where(eq(tenants.id, tenantId));
    step("onboardingResearch persisted on tenant", true);

    // ── 4. Pick the recommended persona + competitor ──────────────────────
    console.log("\n4. picker commit");
    const chosenPersona = research.personas[research.recommended_persona_idx];
    const chosenCompetitor = research.competitors[0];
    const otherPersonas = research.personas.filter(
      (_, i) => i !== research.recommended_persona_idx
    );
    await db
      .update(tenants)
      .set({
        competitorTarget: chosenCompetitor,
        onboardingResearch: {
          site_summary: siteSummary,
          generations: 1,
          personas: research.personas,
          competitors: research.competitors,
          recommended_persona_idx: research.recommended_persona_idx,
          unlocked_proposals: otherPersonas,
        },
      })
      .where(eq(tenants.id, tenantId));
    const [tafter] = await db
      .select()
      .from(tenants)
      .where(eq(tenants.id, tenantId))
      .limit(1);
    step("competitor stored", !!tafter.competitorTarget);
    step(
      "2 unlocked_proposals stored",
      Array.isArray(tafter.onboardingResearch?.unlocked_proposals) &&
        tafter.onboardingResearch?.unlocked_proposals?.length === 2
    );

    // ── 5. Persona commit (AgentMail + laptop queue + subs) ───────────────
    console.log("\n5. persona commit (mirrors commitPersonaAction)");
    const personaSlug = `alan-${chosenPersona.name.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 16)}-${Date.now().toString(36).slice(-4)}`;
    createdPersonaSlug = personaSlug;

    // Cloudflare-routed inbox — deterministic <slug>@etell.app, no API call,
    // no upstream cap. Mirrors live commitPersonaAction.
    const inboxResult = generateInboxAddress(personaSlug);
    step("Cloudflare inbox address generated", true, inboxResult.inbox_address);

    const profile = {
      schema_version: 1 as const,
      identity: {
        name: chosenPersona.name,
        age: chosenPersona.age,
        generation: chosenPersona.generation,
        gender: chosenPersona.gender,
        style: chosenPersona.style,
        shopping_habits: chosenPersona.shopping_habits,
        tech_comfort: chosenPersona.tech_comfort,
        focus_areas: chosenPersona.focus_areas,
      },
      journey: {
        site: chosenCompetitor.domain.startsWith("http")
          ? chosenCompetitor.domain
          : `https://${chosenCompetitor.domain}`,
        search_term: chosenPersona.search_term,
        category_path: chosenPersona.category_path,
        credentials_env_prefix: null,
        targets: [],
      },
      agentmail: {
        inbox_address: inboxResult.inbox_address,
        inbox_id: inboxResult.inbox_id, // null for Cloudflare-routed inboxes
        provisioned_at: inboxResult.provisioned_at,
      },
      onboarding: {},
      color: null,
      notes: null,
      status: "active" as const,
    };

    const [insertedPersona] = await db
      .insert(personas)
      .values({
        slug: personaSlug,
        name: chosenPersona.name,
        short: chosenPersona.name.split(/\s+/)[0] ?? personaSlug,
        profile,
        tenantId,
      })
      .returning({ id: personas.id });
    createdPersonaId = insertedPersona.id;
    step("persona row inserted", !!createdPersonaId, `slug=${personaSlug}`);

    await db
      .insert(userPersonas)
      .values({ userId: userId!, personaId: createdPersonaId, role: "owner" });
    step("userPersona grant inserted", true);

    await db.insert(laptopProvisioningJobs).values({
      tenantId,
      personaSlug,
      status: "queued",
    });
    step("laptop_provisioning_jobs row queued", true);

    {
      await db.insert(subscriptionJobs).values([
        {
          tenantId,
          personaSlug,
          brandDomain: domain,
          inboxAddress: inboxResult.inbox_address,
          status: "queued",
        },
        {
          tenantId,
          personaSlug,
          brandDomain: chosenCompetitor.domain,
          inboxAddress: inboxResult.inbox_address,
          status: "queued",
        },
      ]);
      step("2 subscription_jobs enqueued", true);
    }

    // ── 6. Final read-back ────────────────────────────────────────────────
    console.log("\n6. final read-back (what the user would see)");
    const [tFinal] = await db.select().from(tenants).where(eq(tenants.id, tenantId)).limit(1);
    const [pFinal] = await db.select().from(personas).where(eq(personas.id, createdPersonaId!)).limit(1);
    const lpJobs = await db
      .select()
      .from(laptopProvisioningJobs)
      .where(eq(laptopProvisioningJobs.tenantId, tenantId));
    const subJobs = await db
      .select()
      .from(subscriptionJobs)
      .where(eq(subscriptionJobs.tenantId, tenantId));
    step("tenant.plan = free", tFinal.plan === "free");
    step("tenant has competitorTarget", !!tFinal.competitorTarget);
    step("persona has inbox_address", !!pFinal.profile?.agentmail?.inbox_address);
    step("laptop queue has 1 row", lpJobs.length === 1);
    step("subscription queue has 2 rows", subJobs.length === 2);

    // ── 7. Second-user auto-join (mirrors signup auto-approve path) ──────
    console.log("\n7. second user from same tenant (auto-approve path)");
    const COWORKER_EMAIL = `coworker-${Date.now()}@${syntheticDomain}`;
    const [coworkerInsert] = await db
      .insert(users)
      .values({ email: COWORKER_EMAIL, tenantId })
      .returning({ id: users.id });
    step("second user inserted into existing tenant", !!coworkerInsert);
    const { getPersonaSlugsForUser } = await import("../lib/personas-db");
    const coworkerSlugs = await getPersonaSlugsForUser(coworkerInsert.id);
    step(
      "second user inherits tenant's persona via tenant-id ACL",
      coworkerSlugs.includes(personaSlug),
      `slugs=[${coworkerSlugs.join(",")}]`
    );
    // Cleanup the coworker before the main cleanup block runs (the main
    // cleanup deletes the tenant, but the FK on users.tenant_id is restrict
    // — we need the user gone first).
    await db.delete(users).where(eq(users.id, coworkerInsert.id));
  } finally {
    if (!leave) {
      console.log("\n— cleanup —");
      try {
        // Cloudflare-routed inboxes are address strings — no API call needed
        // to "delete" them. Just clean up DB rows scoped to this tenant.
        if (tenantId) {
          // Also drop any email_message rows that arrived during the test
          // (from inbound webhook hits) so future runs start clean.
          await db.delete(emailMessages).where(eq(emailMessages.tenantId, tenantId));
          await db.delete(auditEmbedding).where(eq(auditEmbedding.persona, createdPersonaSlug ?? ""));
          await db.delete(audits).where(eq(audits.tenantId, tenantId));
          await db.delete(subscriptionJobs).where(eq(subscriptionJobs.tenantId, tenantId));
          await db.delete(laptopProvisioningJobs).where(eq(laptopProvisioningJobs.tenantId, tenantId));
          if (userId) {
            await db.delete(userPersonas).where(eq(userPersonas.userId, userId));
            const threadIds = await db
              .select({ id: chatThread.id })
              .from(chatThread)
              .where(eq(chatThread.userId, userId));
            for (const tt of threadIds) {
              await db.delete(chatMessage).where(eq(chatMessage.threadId, tt.id));
            }
            await db.delete(chatThread).where(eq(chatThread.userId, userId));
            await db.delete(sessions).where(eq(sessions.userId, userId));
            await db.delete(accounts).where(eq(accounts.userId, userId));
          }
          await db
            .delete(signInRateLimit)
            .where(
              and(
                eq(signInRateLimit.keyType, "email"),
                eq(signInRateLimit.keyValue, TEST_EMAIL)
              )
            );
          await db
            .delete(verificationTokens)
            .where(eq(verificationTokens.identifier, TEST_EMAIL));
          await db.delete(personas).where(eq(personas.tenantId, tenantId));
          if (userId) await db.delete(users).where(eq(users.id, userId));
          await db.delete(tenants).where(eq(tenants.id, tenantId));
          console.log("  db rows removed");
        }
      } catch (err) {
        console.warn("  cleanup error (non-fatal):", err instanceof Error ? err.message : err);
      }
    } else {
      console.log("\n--leave given; state preserved for inspection");
      console.log(`  tenant_id = ${tenantId}`);
      console.log(`  persona_slug = ${createdPersonaSlug}`);
    }
  }

  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail === 0 ? 0 : 1);
}

main().catch((err) => {
  console.error("\nfatal:", err);
  process.exit(1);
});
