/**
 * Seed the invite-only allowlist. Each row in `users` IS the allowlist —
 * pre-creating rows lets the signIn callback (S2) gate magic-link sends.
 *
 * Usage:
 *   cd site && npm run db:seed
 *
 * Reads DATABASE_URL_UNPOOLED (or DATABASE_URL) from .env.local. When run
 * locally with a `vercel env pull` for the feat branch, this writes to the
 * per-branch Neon DB, NOT production.
 *
 * To run against prod (cutover only): DATABASE_URL_UNPOOLED=<prod> npm run db:seed.
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { users } from "../lib/db/schema";

const EMAILS = [
  // Seed owner — always present.
  "alondigitized@gmail.com",
  // Add invited emails below. Safe to re-run; upsert is idempotent.
];

async function main() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL_UNPOOLED or DATABASE_URL must be set");
  }
  const sql = neon(url);
  const db = drizzle(sql);

  for (const raw of EMAILS) {
    const email = raw.toLowerCase().trim();
    const existing = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    if (existing.length > 0) {
      console.log(`skip   ${email} (already present)`);
      continue;
    }
    await db.insert(users).values({ email });
    console.log(`insert ${email}`);
  }
  console.log("done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
