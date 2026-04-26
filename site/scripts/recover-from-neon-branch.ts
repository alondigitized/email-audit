/**
 * Recovery script. Pulls the rows my reset-test-tenant.ts deletion nuked
 * from a Neon PITR branch and re-inserts them into the live branch.
 *
 * Prerequisites:
 *   - neonctl branch create --parent main --timestamp <pre-deletion>
 *   - That branch's connection string in NEON_RECOVERY_URL env var
 *
 * Usage:
 *   cd site && \
 *     NEON_RECOVERY_URL='postgresql://.../recovery-branch' \
 *     tsx --env-file=.env.local scripts/recover-from-neon-branch.ts
 *
 * Strategy:
 *   1. Connect to BOTH the recovery branch (read) and the live branch (write).
 *   2. For each table that lost rows (persona, audit, audit_embedding,
 *      userPersona, chat_thread, chat_message, user, sessions), select all
 *      rows from the recovery branch that DON'T already exist in live.
 *   3. INSERT them into live.
 *   4. Skip any rows that were touched by the wider feature work (Phase A
 *      schema changes are already on both branches; tenant_id columns exist
 *      on the recovery branch too).
 *
 * Idempotent — safe to re-run; uses ON CONFLICT DO NOTHING semantics where
 * possible.
 */

import { neon } from "@neondatabase/serverless";

const TARGET_EMAIL = "alan.tsang@skechers.com";

async function main() {
  const liveUrl = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  const recoveryUrl = process.env.NEON_RECOVERY_URL;
  if (!liveUrl) throw new Error("DATABASE_URL_UNPOOLED missing for live");
  if (!recoveryUrl) throw new Error("NEON_RECOVERY_URL missing");

  const live = neon(liveUrl);
  const rec = neon(recoveryUrl);

  // ── 1. user row (alan.tsang@skechers.com) ──────────────────────────────
  console.log("\n[user]");
  const lostUsers = await rec`SELECT * FROM "user" WHERE email = ${TARGET_EMAIL}`;
  console.log(`  recovery has ${lostUsers.length} user(s)`);
  for (const u of lostUsers) {
    await live`
      INSERT INTO "user" (id, name, email, "emailVerified", image, "createdAt", "isAdmin", "lastSignInAt", tenant_id)
      VALUES (${u.id}, ${u.name}, ${u.email}, ${u.emailVerified}, ${u.image}, ${u.createdAt}, ${u.isAdmin}, ${u.lastSignInAt}, ${u.tenant_id})
      ON CONFLICT (email) DO NOTHING
    `;
  }
  const liveUser = await live`SELECT id FROM "user" WHERE email = ${TARGET_EMAIL}`;
  console.log(`  live now has ${liveUser.length} user(s) for ${TARGET_EMAIL}`);

  // ── 2. persona rows ────────────────────────────────────────────────────
  console.log("\n[persona]");
  const lostPersonas = await rec`SELECT * FROM persona`;
  const livePersonas = await live`SELECT slug FROM persona`;
  const liveSlugs = new Set(livePersonas.map((r) => r.slug));
  let inserted = 0;
  for (const p of lostPersonas) {
    if (liveSlugs.has(p.slug)) continue;
    await live`
      INSERT INTO persona (id, slug, name, short, "createdAt", profile, last_status, tenant_id)
      VALUES (${p.id}, ${p.slug}, ${p.name}, ${p.short}, ${p.createdAt}, ${p.profile}::jsonb, ${p.last_status}::jsonb, ${p.tenant_id})
      ON CONFLICT (id) DO NOTHING
    `;
    inserted++;
  }
  console.log(`  inserted ${inserted} persona row(s)`);

  // ── 3. userPersona grants ──────────────────────────────────────────────
  console.log("\n[userPersona]");
  const lostGrants = await rec`SELECT * FROM "userPersona"`;
  const liveGrants = await live`SELECT "userId", "personaId" FROM "userPersona"`;
  const liveGrantKey = new Set(liveGrants.map((r) => `${r.userId}|${r.personaId}`));
  let g = 0;
  for (const r of lostGrants) {
    const key = `${r.userId}|${r.personaId}`;
    if (liveGrantKey.has(key)) continue;
    await live`
      INSERT INTO "userPersona" ("userId", "personaId", role, "grantedAt")
      VALUES (${r.userId}, ${r.personaId}, ${r.role}, ${r.grantedAt})
      ON CONFLICT DO NOTHING
    `;
    g++;
  }
  console.log(`  inserted ${g} grant(s)`);

  // ── 4. chat_thread rows ────────────────────────────────────────────────
  console.log("\n[chat_thread]");
  const lostThreads = await rec`SELECT * FROM chat_thread`;
  const liveThreads = await live`SELECT id FROM chat_thread`;
  const liveThreadIds = new Set(liveThreads.map((r) => r.id));
  let t = 0;
  for (const r of lostThreads) {
    if (liveThreadIds.has(r.id)) continue;
    await live`
      INSERT INTO chat_thread (id, user_id, persona_slug, title, created_at, updated_at, tenant_id)
      VALUES (${r.id}, ${r.user_id}, ${r.persona_slug}, ${r.title}, ${r.created_at}, ${r.updated_at}, ${r.tenant_id})
      ON CONFLICT (id) DO NOTHING
    `;
    t++;
  }
  console.log(`  inserted ${t} thread(s)`);

  // ── 5. chat_message rows ───────────────────────────────────────────────
  console.log("\n[chat_message]");
  const lostMessages = await rec`SELECT * FROM chat_message`;
  const liveMessages = await live`SELECT id FROM chat_message`;
  const liveMsgIds = new Set(liveMessages.map((r) => r.id));
  let m = 0;
  for (const r of lostMessages) {
    if (liveMsgIds.has(r.id)) continue;
    await live`
      INSERT INTO chat_message (id, thread_id, role, content, retrieved_slugs, created_at)
      VALUES (${r.id}, ${r.thread_id}, ${r.role}, ${r.content}, ${r.retrieved_slugs}, ${r.created_at})
      ON CONFLICT (id) DO NOTHING
    `;
    m++;
  }
  console.log(`  inserted ${m} message(s)`);

  // ── 6. audit rows ──────────────────────────────────────────────────────
  console.log("\n[audit]");
  const lostAudits = await rec`SELECT * FROM audit`;
  const liveAudits = await live`SELECT slug FROM audit`;
  const liveAuditSlugs = new Set(liveAudits.map((r) => r.slug));
  let a = 0;
  for (const r of lostAudits) {
    if (liveAuditSlugs.has(r.slug)) continue;
    await live`
      INSERT INTO audit (slug, persona, type, "timestamp", score, data, media_keys, created_at, updated_at, tenant_id)
      VALUES (${r.slug}, ${r.persona}, ${r.type}, ${r.timestamp}, ${r.score}, ${r.data}::jsonb, ${r.media_keys}::jsonb, ${r.created_at}, ${r.updated_at}, ${r.tenant_id})
      ON CONFLICT (slug) DO NOTHING
    `;
    a++;
  }
  console.log(`  inserted ${a} audit(s)`);

  // ── 7. audit_embedding rows ────────────────────────────────────────────
  console.log("\n[audit_embedding]");
  const lostEmb = await rec`SELECT * FROM audit_embedding`;
  const liveEmb = await live`SELECT audit_slug FROM audit_embedding`;
  const liveEmbSlugs = new Set(liveEmb.map((r) => r.audit_slug));
  let e = 0;
  for (const r of lostEmb) {
    if (liveEmbSlugs.has(r.audit_slug)) continue;
    await live`
      INSERT INTO audit_embedding (audit_slug, persona, indexed_text, embedding, created_at)
      VALUES (${r.audit_slug}, ${r.persona}, ${r.indexed_text}, ${r.embedding}, ${r.created_at})
      ON CONFLICT (audit_slug) DO NOTHING
    `;
    e++;
  }
  console.log(`  inserted ${e} embedding(s)`);

  // ── 8. session rows ────────────────────────────────────────────────────
  // Sessions are short-lived (30d); restoring them lets Alon stay logged in.
  console.log("\n[session]");
  const lostSessions = await rec`SELECT * FROM session`;
  let s = 0;
  for (const r of lostSessions) {
    try {
      await live`
        INSERT INTO session ("sessionToken", "userId", expires)
        VALUES (${r.sessionToken}, ${r.userId}, ${r.expires})
        ON CONFLICT ("sessionToken") DO NOTHING
      `;
      s++;
    } catch {
      // Session userId might be missing if the user wasn't restored. Skip.
    }
  }
  console.log(`  inserted ${s} session(s)`);

  console.log("\n✅ recovery done. verify counts:");
  const [{ n: aCount }] = await live`SELECT count(*)::int as n FROM audit`;
  const [{ n: pCount }] = await live`SELECT count(*)::int as n FROM persona`;
  const [{ n: eCount }] = await live`SELECT count(*)::int as n FROM audit_embedding`;
  console.log(`  audit: ${aCount}  persona: ${pCount}  audit_embedding: ${eCount}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
