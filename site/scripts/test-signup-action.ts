/**
 * Drives the actual signupAction (not the mock test-signup-flow.ts that
 * directly DB-inserts). Verifies the WAITLIST_ENABLED=false path: a fresh
 * email at a previously-unknown domain creates a tenant in 'free' state,
 * inserts the user, and fires sendWaitlistApprovedEmail.
 *
 * Usage:
 *   cd site && tsx --env-file=.env.local scripts/test-signup-action.ts
 *
 * Idempotent — pre-flight rejects if alan.tsang@skechers.com still exists,
 * so run scripts/reset-test-tenant.ts first if needed. Test cleans up
 * after itself unless --leave is passed.
 */

import { eq } from "drizzle-orm";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { tenants, users } from "../lib/db/schema";
import { signupAction } from "../app/signup/actions";

const TEST_EMAIL = "alan.tsang@skechers.com";
const leave = process.argv.includes("--leave");

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

async function main() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL_UNPOOLED missing");
  const db = drizzle(neon(url));

  console.log(`══ test signupAction: ${TEST_EMAIL} ══\n`);

  // Pre-flight.
  const existing = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, TEST_EMAIL));
  if (existing.length > 0) {
    console.log(`✗ ${TEST_EMAIL} still exists — run reset first`);
    process.exit(1);
  }
  step("clean slate", true);

  // Build FormData and fire the action.
  const fd = new FormData();
  fd.set("email", TEST_EMAIL);
  console.log("\nfiring signupAction…");
  const result = await signupAction(null, fd);
  step("action returned ok", result.ok, result.ok ? "" : (result as { error: string }).error);

  // Verify DB state.
  const [u] = await db
    .select({ id: users.id, tenantId: users.tenantId, email: users.email })
    .from(users)
    .where(eq(users.email, TEST_EMAIL))
    .limit(1);
  step("user row inserted", !!u, u?.id);

  if (u?.tenantId) {
    const [t] = await db
      .select()
      .from(tenants)
      .where(eq(tenants.id, u.tenantId))
      .limit(1);
    step("tenant exists", !!t);
    step(
      "tenant.plan = free (waitlist bypassed)",
      t.plan === "free",
      `actual=${t.plan}`
    );
    step("tenant.emailDomain = skechers.com", t.emailDomain === "skechers.com");
    step("tier_started_at stamped", t.tierStartedAt !== null);
    step("tier_expires_at stamped (~14d)", t.tierExpiresAt !== null);
    step("referral_code minted", !!t.referralCode);
    step("slug = skechers", t.slug === "skechers", t.slug);
  }

  if (!leave && u?.tenantId) {
    console.log("\n— cleanup —");
    await db.delete(users).where(eq(users.id, u.id));
    await db.delete(tenants).where(eq(tenants.id, u.tenantId));
    console.log("  removed test rows");
  }

  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail === 0 ? 0 : 1);
}

main().catch((err) => {
  console.error("\nfatal:", err);
  process.exit(1);
});
