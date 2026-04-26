/**
 * Phase A backfill: every existing user/persona/chat_thread/audit row gets
 * stamped with Alon's tenant_id. Idempotent — re-running is a no-op once
 * every row points at the tenant.
 *
 * Usage:
 *   cd site && tsx --env-file=.env.local scripts/backfill-tenant.ts
 *
 * Run after 0009_add_tenants migration applies. The follow-up NOT NULL
 * migration only ships once this script has been run on every Neon branch
 * (preview + prod).
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq, isNull, sql } from "drizzle-orm";
import {
  tenants,
  users,
  personas,
  chatThread,
  audits,
} from "../lib/db/schema";

const ALON_SLUG = "alon";
const ALON_NAME = "Alon (founder tenant)";
const ALON_EMAIL = "alondigitized@gmail.com";

async function main() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url)
    throw new Error("DATABASE_URL_UNPOOLED or DATABASE_URL must be set");
  const db = drizzle(neon(url));

  // 1. Upsert the founder tenant. Pro plan, no expiry — Alon has full access.
  const existing = await db
    .select({ id: tenants.id })
    .from(tenants)
    .where(eq(tenants.slug, ALON_SLUG))
    .limit(1);

  let tenantId: string;
  if (existing.length > 0) {
    tenantId = existing[0].id;
    console.log(`tenant '${ALON_SLUG}' exists → ${tenantId}`);
  } else {
    const inserted = await db
      .insert(tenants)
      .values({
        slug: ALON_SLUG,
        name: ALON_NAME,
        plan: "pro",
        tierStartedAt: new Date(),
        tierExpiresAt: null,
      })
      .returning({ id: tenants.id });
    tenantId = inserted[0].id;
    console.log(`inserted tenant '${ALON_SLUG}' → ${tenantId}`);
  }

  // 2. Backfill users.tenant_id. All existing users belong to Alon's tenant
  //    (we are still pre-public-signup at this point).
  const userResult = await db
    .update(users)
    .set({ tenantId })
    .where(isNull(users.tenantId))
    .returning({ email: users.email });
  console.log(`users.tenant_id stamped: ${userResult.length} rows`);

  // 3. Backfill personas.tenant_id. Every legacy persona is Alon's.
  const personaResult = await db
    .update(personas)
    .set({ tenantId })
    .where(isNull(personas.tenantId))
    .returning({ slug: personas.slug });
  console.log(
    `personas.tenant_id stamped: ${personaResult.length} rows ` +
      `[${personaResult.map((r) => r.slug).join(", ")}]`
  );

  // 4. Backfill chat_thread.tenant_id by joining users.tenant_id.
  const chatResult = await db.execute(sql`
    UPDATE chat_thread
    SET tenant_id = "user".tenant_id
    FROM "user"
    WHERE chat_thread.user_id = "user".id AND chat_thread.tenant_id IS NULL
  `);
  console.log(`chat_thread.tenant_id stamped: ${chatResult.rowCount ?? 0} rows`);

  // 5. Backfill audit.tenant_id by joining persona.tenant_id (audit.persona is
  //    the slug). Old audits all map to Alon's tenant.
  const auditResult = await db.execute(sql`
    UPDATE audit
    SET tenant_id = persona.tenant_id
    FROM persona
    WHERE audit.persona = persona.slug AND audit.tenant_id IS NULL
  `);
  console.log(`audit.tenant_id stamped: ${auditResult.rowCount ?? 0} rows`);

  // 6. Sanity counts: any remaining NULLs would block the follow-up NOT NULL
  //    migration. Print them so the human running the script sees a clean state.
  const nullCounts = await db.execute(sql`
    SELECT
      (SELECT count(*) FROM "user" WHERE tenant_id IS NULL) AS users,
      (SELECT count(*) FROM persona WHERE tenant_id IS NULL) AS personas,
      (SELECT count(*) FROM chat_thread WHERE tenant_id IS NULL) AS chat_threads,
      (SELECT count(*) FROM audit WHERE tenant_id IS NULL) AS audits
  `);
  console.log("remaining NULLs:", nullCounts.rows[0]);
  void ALON_EMAIL; // reserved for future linkage; suppresses unused-var warning

  console.log("done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
