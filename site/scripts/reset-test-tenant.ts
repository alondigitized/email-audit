/**
 * Reset DB state for a single test email so you can repeat the
 * signup → approve → wizard flow.
 *
 * Usage:
 *   # dry run (default — shows what would happen)
 *   npm run test:reset-tenant alan.tsang@skechers.com
 *
 *   # actually delete
 *   npm run test:reset-tenant -- alan.tsang@skechers.com --confirm
 *
 * SAFETY RULES (these protect against the data-loss bug from the v1):
 *   1. ALON_EMAIL is hard-refused.
 *   2. Admin users are hard-refused.
 *   3. The script never deletes a tenant unless ALL of:
 *        - the target user is the only user in the tenant
 *        - the tenant was created within the last 30 days
 *        - the tenant has ≤ 1 persona
 *      Otherwise it removes only the user-specific surface (grants,
 *      sessions, threads, account, tokens, rate-limit) and leaves the
 *      tenant + its personas + audits ALONE.
 *   4. AgentMail inboxes are only deleted for personas the script is
 *      actually removing.
 *   5. Default mode is dry-run; --confirm is required for any DELETE.
 */

import { eq, and, or, lt } from "drizzle-orm";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import {
  tenants,
  users,
  personas,
  userPersonas,
  chatThread,
  chatMessage,
  audits,
  auditEmbedding,
  laptopProvisioningJobs,
  subscriptionJobs,
  signInRateLimit,
  verificationTokens,
  sessions,
  accounts,
} from "../lib/db/schema";
import { AgentMailClient } from "agentmail";

const ALON_EMAIL = "alondigitized@gmail.com";

const args = process.argv.slice(2).filter(Boolean);
const confirm = args.includes("--confirm");
const positional = args.filter((a) => !a.startsWith("--"));
const TARGET_EMAIL = (positional[0] ?? "alan.tsang@skechers.com").toLowerCase().trim();

if (TARGET_EMAIL === ALON_EMAIL.toLowerCase()) {
  console.error(`refusing to reset ${ALON_EMAIL} (admin email)`);
  process.exit(2);
}

type Plan = {
  email: string;
  // The user-specific surface — always safe to delete.
  userId: string | null;
  grants: number;
  sessions: number;
  accounts: number;
  threads: { id: string; messageCount: number }[];
  rateLimit: number;
  verificationTokens: number;
  // Tenant-level — only deleted if guards pass.
  tenant: {
    id: string;
    slug: string;
    plan: string;
    createdAt: Date;
    userCount: number;
    personaCount: number;
    auditCount: number;
  } | null;
  tenantSafeToDelete: boolean;
  tenantBlockReason?: string;
  personasInTenant: { id: string; slug: string; inboxId: string | null }[];
};

async function buildPlan(db: ReturnType<typeof drizzle>): Promise<Plan> {
  const userRow = await db
    .select({
      id: users.id,
      tenantId: users.tenantId,
      isAdmin: users.isAdmin,
    })
    .from(users)
    .where(eq(users.email, TARGET_EMAIL))
    .limit(1);
  const u = userRow[0] ?? null;

  if (u?.isAdmin) {
    throw new Error(
      `${TARGET_EMAIL} is an admin user — refusing to reset.`
    );
  }

  const plan: Plan = {
    email: TARGET_EMAIL,
    userId: u?.id ?? null,
    grants: 0,
    sessions: 0,
    accounts: 0,
    threads: [],
    rateLimit: 0,
    verificationTokens: 0,
    tenant: null,
    tenantSafeToDelete: false,
    personasInTenant: [],
  };

  if (u) {
    const [g, s, a] = await Promise.all([
      db.select({ x: userPersonas.userId }).from(userPersonas).where(eq(userPersonas.userId, u.id)),
      db.select({ x: sessions.sessionToken }).from(sessions).where(eq(sessions.userId, u.id)),
      db.select({ x: accounts.providerAccountId }).from(accounts).where(eq(accounts.userId, u.id)),
    ]);
    plan.grants = g.length;
    plan.sessions = s.length;
    plan.accounts = a.length;
    const threadRows = await db
      .select({ id: chatThread.id })
      .from(chatThread)
      .where(eq(chatThread.userId, u.id));
    for (const t of threadRows) {
      const mc = await db
        .select({ x: chatMessage.id })
        .from(chatMessage)
        .where(eq(chatMessage.threadId, t.id));
      plan.threads.push({ id: t.id, messageCount: mc.length });
    }
  }

  const rl = await db
    .select({ id: signInRateLimit.id })
    .from(signInRateLimit)
    .where(
      or(
        and(
          eq(signInRateLimit.keyType, "email"),
          eq(signInRateLimit.keyValue, TARGET_EMAIL)
        ),
        and(
          eq(signInRateLimit.keyType, "signup_email"),
          eq(signInRateLimit.keyValue, TARGET_EMAIL)
        )
      )
    );
  plan.rateLimit = rl.length;

  const vt = await db
    .select({ x: verificationTokens.token })
    .from(verificationTokens)
    .where(eq(verificationTokens.identifier, TARGET_EMAIL));
  plan.verificationTokens = vt.length;

  if (u?.tenantId) {
    const [tr] = await db
      .select({
        id: tenants.id,
        slug: tenants.slug,
        plan: tenants.plan,
        createdAt: tenants.createdAt,
      })
      .from(tenants)
      .where(eq(tenants.id, u.tenantId))
      .limit(1);
    if (tr) {
      const userCountRows = await db
        .select({ id: users.id })
        .from(users)
        .where(eq(users.tenantId, tr.id));
      const personaRows = await db
        .select({
          id: personas.id,
          slug: personas.slug,
          profile: personas.profile,
        })
        .from(personas)
        .where(eq(personas.tenantId, tr.id));
      const auditRows = await db
        .select({ slug: audits.slug })
        .from(audits)
        .where(eq(audits.tenantId, tr.id));

      plan.tenant = {
        id: tr.id,
        slug: tr.slug,
        plan: tr.plan,
        createdAt: tr.createdAt,
        userCount: userCountRows.length,
        personaCount: personaRows.length,
        auditCount: auditRows.length,
      };
      plan.personasInTenant = personaRows.map((p) => ({
        id: p.id,
        slug: p.slug,
        inboxId:
          (p.profile?.agentmail?.inbox_id as string | null | undefined) ??
          null,
      }));

      // Guards.
      const ageMs = Date.now() - tr.createdAt.getTime();
      const within30d = ageMs <= 30 * 86400_000;
      const onlyOwner = userCountRows.length === 1 && userCountRows[0].id === u.id;
      const fewPersonas = personaRows.length <= 1;

      if (!onlyOwner) {
        plan.tenantBlockReason = `tenant has ${userCountRows.length} users (target is one of them); refusing to delete the tenant`;
      } else if (!within30d) {
        plan.tenantBlockReason = `tenant is ${Math.round(ageMs / 86400_000)} days old (>30d); refusing to delete the tenant`;
      } else if (!fewPersonas) {
        plan.tenantBlockReason = `tenant owns ${personaRows.length} personas (>1); refusing to delete the tenant`;
      } else {
        plan.tenantSafeToDelete = true;
      }
    }
  }

  return plan;
}

function printPlan(p: Plan) {
  console.log(`reset target: ${p.email}\n`);
  if (p.userId) {
    console.log(`user row found: id=${p.userId}`);
    console.log(`  → ${p.grants} grant(s), ${p.sessions} session(s), ${p.accounts} account(s)`);
    console.log(`  → ${p.threads.length} chat thread(s) with ${p.threads.reduce((a, t) => a + t.messageCount, 0)} message(s)`);
    console.log(`  → ${p.verificationTokens} pending verification token(s), ${p.rateLimit} rate-limit row(s)`);
  } else {
    console.log(`no user row found for ${p.email}`);
  }
  if (p.tenant) {
    console.log(`\ntenant: ${p.tenant.slug} (${p.tenant.plan}, ${p.tenant.userCount} user(s), ${p.tenant.personaCount} persona(s), ${p.tenant.auditCount} audit(s))`);
    if (p.tenantSafeToDelete) {
      console.log("  ✓ tenant passes guards → would be DELETED with its personas + audits + jobs");
      console.log("  personas to remove:", p.personasInTenant.map((x) => x.slug).join(", ") || "(none)");
    } else {
      console.log(`  ✗ ${p.tenantBlockReason}`);
      console.log("  → tenant + personas + audits will be LEFT UNTOUCHED");
    }
  }
}

async function deleteAgentMailInbox(inboxId: string): Promise<boolean> {
  const apiKey = process.env.AGENTMAIL_API_KEY;
  if (!apiKey) return false;
  try {
    const client = new AgentMailClient({ apiKey });
    await client.inboxes.delete(inboxId);
    return true;
  } catch {
    return false;
  }
}

async function execute(db: ReturnType<typeof drizzle>, p: Plan) {
  // 1. User-specific surface (always safe).
  if (p.userId) {
    for (const t of p.threads) {
      await db.delete(chatMessage).where(eq(chatMessage.threadId, t.id));
    }
    await db.delete(chatThread).where(eq(chatThread.userId, p.userId));
    await db.delete(userPersonas).where(eq(userPersonas.userId, p.userId));
    await db.delete(sessions).where(eq(sessions.userId, p.userId));
    await db.delete(accounts).where(eq(accounts.userId, p.userId));
    console.log(`  removed user-scoped rows for ${p.userId}`);
  }
  await db
    .delete(signInRateLimit)
    .where(
      or(
        and(
          eq(signInRateLimit.keyType, "email"),
          eq(signInRateLimit.keyValue, p.email)
        ),
        and(
          eq(signInRateLimit.keyType, "signup_email"),
          eq(signInRateLimit.keyValue, p.email)
        )
      )
    );
  await db
    .delete(verificationTokens)
    .where(eq(verificationTokens.identifier, p.email));
  console.log("  removed rate-limit + verification token rows");

  // 2. Tenant — only if guards passed.
  if (p.tenant && p.tenantSafeToDelete) {
    for (const persona of p.personasInTenant) {
      if (persona.inboxId) {
        const ok = await deleteAgentMailInbox(persona.inboxId);
        console.log(`  agentmail.delete(${persona.inboxId}) → ${ok ? "ok" : "skipped/failed"}`);
      }
    }
    await db
      .delete(auditEmbedding)
      .where(
        or(...p.personasInTenant.map((x) => eq(auditEmbedding.persona, x.slug)))
      );
    await db
      .delete(audits)
      .where(eq(audits.tenantId, p.tenant.id));
    await db
      .delete(laptopProvisioningJobs)
      .where(eq(laptopProvisioningJobs.tenantId, p.tenant.id));
    await db
      .delete(subscriptionJobs)
      .where(eq(subscriptionJobs.tenantId, p.tenant.id));
    await db
      .delete(personas)
      .where(eq(personas.tenantId, p.tenant.id));
    // User row must drop before the tenant (FK restrict).
    if (p.userId) {
      await db.delete(users).where(eq(users.id, p.userId));
    }
    await db.delete(tenants).where(eq(tenants.id, p.tenant.id));
    console.log("  removed tenant + its personas/audits/embeddings/jobs/user");
  } else {
    // Just drop the user row; leave the tenant alone.
    if (p.userId) {
      await db.delete(users).where(eq(users.id, p.userId));
      console.log("  removed user row (tenant left intact)");
    }
  }
  void lt; // (kept import; unused in current code but useful for future age guards)
}

async function main() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL_UNPOOLED or DATABASE_URL must be set");
  const db = drizzle(neon(url));

  const p = await buildPlan(db);
  printPlan(p);

  if (!confirm) {
    console.log("\n(dry run — pass --confirm to actually delete)");
    return;
  }

  console.log("\n--confirm given, executing…");
  await execute(db, p);
  console.log("\ndone. you can now sign up at /signup with the same email.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
