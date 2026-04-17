import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

// Next.js 16 Proxy (formerly middleware). Runs on Node.js runtime, so the
// DB-backed Auth.js session check is safe here. S7: this is the optimistic
// gate only; every route handler / server component that touches data must
// re-check via lib/dal.ts requireUser().

const PUBLIC_PREFIXES = [
  "/login",
  "/api/auth/", // Auth.js catch-all
  "/_next/static",
  "/_next/image",
];

const PUBLIC_EXACT = new Set(["/favicon.ico", "/api/auth"]);

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
