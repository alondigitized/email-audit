import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

// Next.js 16 Proxy (formerly middleware). Runs on Node.js runtime, so the
// DB-backed Auth.js session check is safe here.

const PUBLIC_PREFIXES = [
  "/login",
  "/auth/verify", // two-step magic-link confirm page
  "/api/auth/", // Auth.js catch-all
  "/_next/static",
  "/_next/image",
];

const PUBLIC_EXACT = new Set(["/favicon.ico"]);

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

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
