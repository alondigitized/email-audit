import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";
import { db, users, tenants } from "@/lib/db/client";
import { deriveTenantState } from "@/lib/tenant";

// Next.js 16 Proxy (formerly middleware). Runs on Node.js runtime, so the
// DB-backed Auth.js session check is safe here.

const PUBLIC_PREFIXES = [
  "/login",
  "/signup",
  "/r/", // referral landing pages
  "/waitlist-status",
  "/auth/verify", // two-step magic-link confirm page
  "/api/auth/", // Auth.js catch-all
  "/api/email/inbound", // Cloudflare Email Worker webhook (Bearer-auth only)
  "/_next/static",
  "/_next/image",
];

const PUBLIC_EXACT = new Set(["/favicon.ico"]);

// Locked tenants can still see these — every other route redirects to /locked.
// /api/auth/ stays open through the public-prefix list above so signout works.
const LOCK_BYPASS_PREFIXES = [
  "/locked",
  "/refer",
  "/upgrade",
  "/account",
];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_EXACT.has(pathname)) return NextResponse.next();
  for (const p of PUBLIC_PREFIXES) {
    if (pathname.startsWith(p)) return NextResponse.next();
  }

  const session = await auth();
  if (!session?.user?.id) {
    const url = new URL("/login", request.url);
    return NextResponse.redirect(url);
  }

  // Tier lock: free-tier expired tenants only see /locked, /refer, /upgrade.
  // Admin and pro plans bypass. Single LEFT JOIN keeps this to one query
  // per request (admins and tenantless rows still pay one query, but it's
  // the smallest necessary check).
  const userId = session.user.id;
  const [row] = await db
    .select({
      isAdmin: users.isAdmin,
      tenantId: tenants.id,
      tenantSlug: tenants.slug,
      plan: tenants.plan,
      tierExpiresAt: tenants.tierExpiresAt,
      referralsMade: tenants.referralsMade,
      referralCode: tenants.referralCode,
    })
    .from(users)
    .leftJoin(tenants, eq(tenants.id, users.tenantId))
    .where(eq(users.id, userId))
    .limit(1);

  if (row && !row.isAdmin && row.tenantId && row.plan) {
    // Banned tenants get their own page — separate from /locked so the copy
    // doesn't muddle "your trial ended" with "your account is closed".
    if (row.plan === "banned" && !pathname.startsWith("/banned")) {
      return NextResponse.redirect(new URL("/banned", request.url));
    }
    const state = deriveTenantState({
      id: row.tenantId,
      slug: row.tenantSlug ?? "",
      plan: row.plan,
      tierExpiresAt: row.tierExpiresAt,
      referralsMade: row.referralsMade ?? 0,
      referralCode: row.referralCode,
      isAdmin: false,
    });
    if (
      state.locked &&
      !LOCK_BYPASS_PREFIXES.some((p) => pathname.startsWith(p))
    ) {
      return NextResponse.redirect(new URL("/locked", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
