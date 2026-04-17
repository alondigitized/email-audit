/**
 * Grant a persona to a user by email.
 *
 * Usage:
 *   npm run db:grant -- --email <email> --persona <slug>
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq, and } from "drizzle-orm";
import { users, personas, userPersonas } from "../lib/db/schema";

function parseArgs(argv: string[]): { email?: string; persona?: string } {
  const out: { email?: string; persona?: string } = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--email") out.email = argv[++i];
    else if (argv[i] === "--persona") out.persona = argv[++i];
  }
  return out;
}

async function main() {
  const { email, persona } = parseArgs(process.argv.slice(2));
  if (!email || !persona) {
    console.error("usage: npm run db:grant -- --email <e> --persona <slug>");
    process.exit(1);
  }
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL_UNPOOLED or DATABASE_URL must be set");
  const db = drizzle(neon(url));

  const normalized = email.toLowerCase().trim();
  const user = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, normalized))
    .limit(1);
  if (user.length === 0) {
    console.error(`user not found: ${normalized}`);
    process.exit(1);
  }
  const p = await db
    .select({ id: personas.id })
    .from(personas)
    .where(eq(personas.slug, persona))
    .limit(1);
  if (p.length === 0) {
    console.error(`persona not found: ${persona}`);
    process.exit(1);
  }

  const existing = await db
    .select()
    .from(userPersonas)
    .where(
      and(
        eq(userPersonas.userId, user[0].id),
        eq(userPersonas.personaId, p[0].id)
      )
    )
    .limit(1);
  if (existing.length > 0) {
    console.log(`already granted: ${normalized} -> ${persona}`);
    return;
  }
  await db
    .insert(userPersonas)
    .values({ userId: user[0].id, personaId: p[0].id });
  console.log(`granted: ${normalized} -> ${persona}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
