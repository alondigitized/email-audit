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

// Thirty-day session, matching auth.ts config.
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const hashToken = (raw: string) =>
  createHash("sha256").update(raw).digest("hex");

// Server action invoked by the /auth/verify page's POST button. Does what
// Auth.js's /api/auth/callback/resend would have done, but gated on a real
// user-initiated POST — so enterprise link scanners that prefetch the GET
// URL in the email can't burn the token.
export async function completeSignIn(formData: FormData) {
  const rawToken = formData.get("token");
  const identifierRaw = formData.get("email");
  if (typeof rawToken !== "string" || typeof identifierRaw !== "string") {
    redirect("/login?error=Verification");
  }
  const identifier = identifierRaw.toLowerCase().trim();

  // Consume the verification token atomically (lookup by hashed form,
  // then delete). Using a transaction-like pattern via delete-returning.
  const hashed = hashToken(rawToken);
  const rows = await db
    .delete(verificationTokens)
    .where(eq(verificationTokens.token, hashed))
    .returning({
      identifier: verificationTokens.identifier,
      expires: verificationTokens.expires,
    });
  const row = rows.find((r) => r.identifier === identifier);
  if (!row) {
    redirect("/login?error=Verification");
  }
  if (row.expires.getTime() < Date.now()) {
    redirect("/login?error=Verification");
  }

  // Fetch the user — must exist (S2: no auto-creation).
  const userRow = await db.query.users.findFirst({
    where: eq(users.email, identifier),
    columns: { id: true },
  });
  if (!userRow) {
    redirect("/login?error=AccessDenied");
  }

  const now = new Date();

  // Mark email verified if not already, for parity with Auth.js's flow.
  await db
    .update(users)
    .set({ emailVerified: now, lastSignInAt: now })
    .where(eq(users.id, userRow.id));

  // Log the sign-in event (S13: hashed IP only).
  let ipHash: string | null = null;
  try {
    const h = await headers();
    const ip =
      h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      h.get("x-real-ip") ??
      null;
    ipHash = ip ? hashToken(ip) : null;
  } catch {}
  await db.insert(signInEvents).values({ userId: userRow.id, ipHash });

  // Create a session row + set the Auth.js-compatible session cookie.
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
