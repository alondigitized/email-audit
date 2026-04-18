"use server";

import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import { createHash, randomUUID } from "node:crypto";
import { eq } from "drizzle-orm";
import {
  db,
  users,
  sessions,
  verificationTokens,
  signInEvents,
} from "@/lib/db/client";

const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;

// Mimic Auth.js v5 Email provider's token hashing exactly: the raw token
// is concatenated with AUTH_SECRET and SHA-256 hashed before DB storage.
// Our server action bypasses the Auth.js callback so we must match its
// algorithm here, otherwise the lookup misses.
function authjsTokenHash(raw: string): string {
  const secret = process.env.AUTH_SECRET ?? "";
  return createHash("sha256").update(`${raw}${secret}`).digest("hex");
}
const sha256 = (raw: string) =>
  createHash("sha256").update(raw).digest("hex");

export async function completeSignIn(formData: FormData) {
  const rawToken = formData.get("token");
  const identifierRaw = formData.get("email");
  if (typeof rawToken !== "string" || typeof identifierRaw !== "string") {
    redirect("/login?error=Verification");
  }
  const identifier = identifierRaw.toLowerCase().trim();

  // Delete-returning matches Auth.js's hashing so we consume the same row
  // Auth.js would have consumed if we'd gone through /api/auth/callback/resend.
  const hashed = authjsTokenHash(rawToken);
  const rows = await db
    .delete(verificationTokens)
    .where(eq(verificationTokens.token, hashed))
    .returning({
      identifier: verificationTokens.identifier,
      expires: verificationTokens.expires,
    });
  const row = rows.find((r) => r.identifier === identifier);
  console.log(
    JSON.stringify({
      evt: "completeSignIn:tokenLookup",
      hashedPrefix: hashed.slice(0, 6),
      rowsDeleted: rows.length,
      matched: !!row,
    })
  );
  if (!row) {
    redirect("/login?error=Verification");
  }
  if (row.expires.getTime() < Date.now()) {
    redirect("/login?error=Verification");
  }

  const userRow = await db.query.users.findFirst({
    where: eq(users.email, identifier),
    columns: { id: true },
  });
  if (!userRow) {
    redirect("/login?error=AccessDenied");
  }

  const now = new Date();
  await db
    .update(users)
    .set({ emailVerified: now, lastSignInAt: now })
    .where(eq(users.id, userRow.id));

  let ipHash: string | null = null;
  try {
    const h = await headers();
    const ip =
      h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      h.get("x-real-ip") ??
      null;
    ipHash = ip ? sha256(ip) : null;
  } catch {}
  await db.insert(signInEvents).values({ userId: userRow.id, ipHash });

  const sessionToken = randomUUID();
  const expires = new Date(Date.now() + SESSION_TTL_MS);
  await db.insert(sessions).values({
    sessionToken,
    userId: userRow.id,
    expires,
  });

  const isProd = process.env.NODE_ENV === "production";
  const cookieName = isProd
    ? "__Secure-authjs.session-token"
    : "authjs.session-token";
  (await cookies()).set(cookieName, sessionToken, {
    httpOnly: true,
    secure: isProd,
    sameSite: "lax",
    expires,
    path: "/",
  });

  redirect("/");
}
