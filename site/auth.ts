import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import Resend from "next-auth/providers/resend";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { createHash } from "node:crypto";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import {
  db,
  users,
  accounts,
  sessions,
  verificationTokens,
  signInEvents,
} from "@/lib/db/client";
import { sendMagicLinkEmail } from "@/lib/email-magic-link";

// S1: hash verification tokens at rest. The raw token is what we email;
// the DB only ever stores its SHA-256 hash. On callback, we hash the incoming
// token and look it up. DB leak -> tokens cannot be replayed.
const hashToken = (raw: string) =>
  createHash("sha256").update(raw).digest("hex");

const baseAdapter = DrizzleAdapter(db, {
  usersTable: users,
  accountsTable: accounts,
  sessionsTable: sessions,
  verificationTokensTable: verificationTokens,
});

const adapter: typeof baseAdapter = {
  ...baseAdapter,
  async createVerificationToken(token) {
    if (!baseAdapter.createVerificationToken) {
      throw new Error("adapter.createVerificationToken missing");
    }
    await db
      .delete(verificationTokens)
      .where(eq(verificationTokens.identifier, token.identifier));
    const raw = token.token;
    const hashed = hashToken(raw);
    console.log(
      JSON.stringify({
        evt: "createVerificationToken",
        identifier: token.identifier,
        rawPrefix: raw.slice(0, 6),
        hashedPrefix: hashed.slice(0, 6),
        expires: token.expires,
      })
    );
    return baseAdapter.createVerificationToken({
      ...token,
      token: hashed,
    });
  },
  async useVerificationToken(params) {
    if (!baseAdapter.useVerificationToken) {
      throw new Error("adapter.useVerificationToken missing");
    }
    const row = await baseAdapter.useVerificationToken({
      identifier: params.identifier,
      token: hashToken(params.token),
    });
    if (!row) return null;
    // Return the raw token to Auth.js so downstream identity-matching works;
    // the DB row (which had the hash) has already been consumed.
    return { ...row, token: params.token };
  },
  // S2: block auto-creation of users. Only pre-seeded allowlist rows exist.
  async createUser() {
    throw new Error("createUser disabled: users must be pre-provisioned");
  },
};

export const config: NextAuthConfig = {
  adapter,
  providers: [
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: process.env.AUTH_EMAIL_FROM ?? "onboarding@resend.dev",
      // S1: 10-minute TTL (Auth.js default is 24h).
      maxAge: 10 * 60,
      async sendVerificationRequest({ identifier, url, provider }) {
        // url is the Auth.js callback: ...//api/auth/callback/resend?token=X&...
        // Rewrite to our two-step verify page so link scanners that prefetch
        // URLs in emails can't burn the token before the user clicks.
        const parsed = new URL(url);
        const token = parsed.searchParams.get("token") ?? "";
        const verifyUrl = new URL("/auth/verify", parsed.origin);
        verifyUrl.searchParams.set("token", token);
        verifyUrl.searchParams.set("email", identifier);
        await sendMagicLinkEmail({
          to: identifier,
          url: verifyUrl.toString(),
          expiresInMinutes: 10,
          from: provider.from ?? "onboarding@resend.dev",
          apiKey: provider.apiKey as string,
        });
      },
    }),
  ],
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // S4: 30-day absolute
    updateAge: 7 * 24 * 60 * 60, // S4: 7-day idle
  },
  // S5: trust Vercel-injected host headers; client-supplied Host is stripped.
  trustHost: true,
  pages: {
    signIn: "/login",
    verifyRequest: "/login?sent=1",
    error: "/login",
  },
  callbacks: {
    // S2: invite-only allowlist. When Auth.js is about to send a magic link
    // (verificationRequest === true), look up the email in the users table.
    // If not present, return false -> Resend send is skipped.
    async signIn({ user, email }) {
      if (email?.verificationRequest) {
        const addr = user.email?.toLowerCase().trim();
        if (!addr) return false;
        const existing = await db.query.users.findFirst({
          where: eq(users.email, addr),
          columns: { id: true },
        });
        return !!existing;
      }
      return true;
    },
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  events: {
    // S13: one row per successful sign-in. ipHash only, never raw IP.
    async signIn({ user }) {
      if (!user?.id) return;
      let ipHash: string | null = null;
      try {
        const h = await headers();
        const ip =
          h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
          h.get("x-real-ip") ??
          null;
        ipHash = ip ? createHash("sha256").update(ip).digest("hex") : null;
      } catch {
        // headers() unavailable outside of a request context — best effort.
      }
      await db.insert(signInEvents).values({ userId: user.id, ipHash });
      await db
        .update(users)
        .set({ lastSignInAt: new Date() })
        .where(eq(users.id, user.id));
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
