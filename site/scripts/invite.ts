/**
 * Allowlist management CLI.
 *
 * Usage:
 *   npm run invite -- add <email> [--persona <slug>]
 *   npm run invite -- list
 *   npm run invite -- remove <email>
 *
 * The `user` table IS the allowlist. A row's presence grants sign-in
 * permission; its absence blocks the magic-link flow (S2 in the plan).
 * `--persona` additionally grants a persona on the same invocation.
 *
 * Examples:
 *   npm run invite -- add new.person@example.com
 *   npm run invite -- add new.person@example.com --persona walker
 *   npm run invite -- list
 *   npm run invite -- remove old.person@example.com
 */

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq, and } from "drizzle-orm";
import { users, personas, userPersonas, sessions } from "../lib/db/schema";

type Cmd = "add" | "list" | "remove" | "help";

type ParsedAdd = { cmd: "add"; email: string; persona?: string };
type ParsedList = { cmd: "list" };
type ParsedRemove = { cmd: "remove"; email: string };
type ParsedHelp = { cmd: "help"; reason?: string };
type Parsed = ParsedAdd | ParsedList | ParsedRemove | ParsedHelp;

function parse(argv: string[]): Parsed {
  const [sub, ...rest] = argv;
  if (!sub || sub === "help" || sub === "--help" || sub === "-h") {
    return { cmd: "help" };
  }
  if (sub === "list") return { cmd: "list" };

  if (sub === "add") {
    const email = rest[0] && !rest[0].startsWith("--") ? rest[0] : undefined;
    if (!email) return { cmd: "help", reason: "add: email required" };
    const pIdx = rest.indexOf("--persona");
    const persona = pIdx >= 0 ? rest[pIdx + 1] : undefined;
    if (pIdx >= 0 && !persona) {
      return { cmd: "help", reason: "add: --persona needs a value" };
    }
    return { cmd: "add", email, persona };
  }

  if (sub === "remove") {
    const email = rest[0];
    if (!email) return { cmd: "help", reason: "remove: email required" };
    return { cmd: "remove", email };
  }

  return { cmd: "help", reason: `unknown command: ${sub}` };
}

function printHelp(reason?: string) {
  if (reason) console.error(`error: ${reason}\n`);
  console.error(
    `usage:
  npm run invite -- add <email> [--persona <slug>]
  npm run invite -- list
  npm run invite -- remove <email>
`
  );
}

function normalize(email: string): string {
  return email.toLowerCase().trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

async function main() {
  const parsed = parse(process.argv.slice(2));
  if (parsed.cmd === "help") {
    printHelp(parsed.reason);
    process.exit(parsed.reason ? 1 : 0);
  }

  const url = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL;
  if (!url) {
    console.error("DATABASE_URL_UNPOOLED or DATABASE_URL must be set");
    process.exit(1);
  }
  const db = drizzle(neon(url));

  if (parsed.cmd === "list") {
    const rows = await db
      .select({
        email: users.email,
        createdAt: users.createdAt,
        verified: users.emailVerified,
      })
      .from(users)
      .orderBy(users.createdAt);

    if (rows.length === 0) {
      console.log("(allowlist empty)");
      return;
    }

    // Fetch persona grants in one query, group in JS.
    const grants = await db
      .select({
        email: users.email,
        slug: personas.slug,
      })
      .from(userPersonas)
      .innerJoin(users, eq(userPersonas.userId, users.id))
      .innerJoin(personas, eq(userPersonas.personaId, personas.id));

    const bySlug = new Map<string, string[]>();
    for (const g of grants) {
      const arr = bySlug.get(g.email) ?? [];
      arr.push(g.slug);
      bySlug.set(g.email, arr);
    }

    console.log(
      `email                                    verified   personas`
    );
    console.log(
      `------                                   --------   --------`
    );
    for (const r of rows) {
      const v = r.verified ? "yes" : "no ";
      const p = (bySlug.get(r.email) ?? []).sort().join(", ") || "-";
      console.log(`${r.email.padEnd(40)} ${v.padEnd(10)} ${p}`);
    }
    console.log(`\n${rows.length} total`);
    return;
  }

  if (parsed.cmd === "add") {
    const email = normalize(parsed.email);
    if (!isValidEmail(email)) {
      console.error(`invalid email: ${email}`);
      process.exit(1);
    }

    const existing = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    let userId: string;
    if (existing.length > 0) {
      userId = existing[0].id;
      console.log(`skip   ${email} (already allowlisted)`);
    } else {
      const [inserted] = await db
        .insert(users)
        .values({ email })
        .returning({ id: users.id });
      userId = inserted.id;
      console.log(`added  ${email}`);
    }

    if (parsed.persona) {
      const personaRow = await db
        .select({ id: personas.id, slug: personas.slug })
        .from(personas)
        .where(eq(personas.slug, parsed.persona))
        .limit(1);
      if (personaRow.length === 0) {
        console.error(`persona not found: ${parsed.persona}`);
        process.exit(1);
      }
      const alreadyGranted = await db
        .select({ userId: userPersonas.userId })
        .from(userPersonas)
        .where(
          and(
            eq(userPersonas.userId, userId),
            eq(userPersonas.personaId, personaRow[0].id)
          )
        )
        .limit(1);
      if (alreadyGranted.length > 0) {
        console.log(`skip   grant ${email} -> ${parsed.persona}`);
      } else {
        await db.insert(userPersonas).values({
          userId,
          personaId: personaRow[0].id,
        });
        console.log(`grant  ${email} -> ${parsed.persona}`);
      }
    }
    return;
  }

  if (parsed.cmd === "remove") {
    const email = normalize(parsed.email);
    const existing = await db
      .select({ id: users.id })
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    if (existing.length === 0) {
      console.log(`skip   ${email} (not allowlisted)`);
      return;
    }
    // Cascade: sessions + userPersonas FK on delete cascade.
    await db.delete(users).where(eq(users.id, existing[0].id));
    console.log(`removed ${email}`);
    // Defense-in-depth: explicitly drop any lingering sessions
    // (should be cascaded but not relying on it).
    await db.delete(sessions).where(eq(sessions.userId, existing[0].id));
    return;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
