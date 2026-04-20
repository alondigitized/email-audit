/**
 * Seed the persona registry and grant both personas to the admin email.
 * Source of truth: site/lib/personas.ts.
 *
 * Usage: cd site && npm run db:seed-personas
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq, and } from "drizzle-orm";
import { users, personas, userPersonas } from "../lib/db/schema";

// Inline the initial roster here — this script is an idempotent bootstrap
// for fresh environments. Ongoing persona management happens through the
// admin UI (/admin/personas), which writes profile JSONB alongside the
// thin metadata columns.
const PERSONAS = [
  { slug: "walker", name: "Walker Miles", short: "Walker" },
  { slug: "martha", name: "Martha Stroll", short: "Martha" },
];

const ADMIN_EMAIL = "alondigitized@gmail.com";

async function main() {
  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL_UNPOOLED or DATABASE_URL must be set");
  const db = drizzle(neon(url));

  const admin = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, ADMIN_EMAIL))
    .limit(1);
  if (admin.length === 0) {
    throw new Error(`Admin user ${ADMIN_EMAIL} not found — run db:seed first`);
  }
  const adminId = admin[0].id;

  for (const p of PERSONAS) {
    const existing = await db
      .select({ id: personas.id })
      .from(personas)
      .where(eq(personas.slug, p.slug))
      .limit(1);

    let personaId: string;
    if (existing.length > 0) {
      personaId = existing[0].id;
      console.log(`persona skip   ${p.slug} (already present)`);
    } else {
      const [inserted] = await db
        .insert(personas)
        .values({ slug: p.slug, name: p.name, short: p.short })
        .returning({ id: personas.id });
      personaId = inserted.id;
      console.log(`persona insert ${p.slug}`);
    }

    const grant = await db
      .select()
      .from(userPersonas)
      .where(
        and(
          eq(userPersonas.userId, adminId),
          eq(userPersonas.personaId, personaId)
        )
      )
      .limit(1);
    if (grant.length > 0) {
      console.log(`grant   skip   ${ADMIN_EMAIL} -> ${p.slug}`);
    } else {
      await db.insert(userPersonas).values({ userId: adminId, personaId });
      console.log(`grant   insert ${ADMIN_EMAIL} -> ${p.slug}`);
    }
  }

  console.log("done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
