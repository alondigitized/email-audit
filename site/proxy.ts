import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { auth } from "@/auth";
import { getPersonaSlugsForUser } from "@/lib/personas-db";

// Next.js 16 Proxy (formerly middleware). Runs on Node.js runtime, so the
// DB-backed Auth.js session check is safe here, as is disk I/O.
//
// S7/S8: /images/audits/{slug}/... is served statically from /public by
// Next.js. We can't put those files behind a route handler because Vercel
// would bundle all 285 slug dirs into the serverless function and blow the
// 300 MB size limit. Instead we gate access here in the Proxy: check session
// + verify the user owns the audit's persona before letting the static
// asset response through. Slug-path attempts by unauthorised users 404.

const PUBLIC_PREFIXES = [
  "/login",
  "/api/auth/", // Auth.js catch-all
  "/_next/static",
  "/_next/image",
];

const PUBLIC_EXACT = new Set(["/favicon.ico", "/api/auth"]);

const CONTENT_DIR = path.join(process.cwd(), "content", "audits");

// Cheap persona lookup for an audit: read only the `persona` field from
// audit.json rather than the whole record. Returns null if the audit
// doesn't exist or has no persona.
function auditPersona(slug: string): string | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const p = path.join(CONTENT_DIR, slug, "audit.json");
  if (!fs.existsSync(p)) return null;
  try {
    const data = JSON.parse(fs.readFileSync(p, "utf-8")) as { persona?: string };
    return data.persona ?? null;
  } catch {
    return null;
  }
}

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

  // S7/S8: persona check for audit screenshot requests.
  const imageMatch = pathname.match(/^\/images\/audits\/([^\/]+)\//);
  if (imageMatch) {
    const slug = imageMatch[1];
    const persona = auditPersona(slug);
    if (!persona) return new NextResponse("Not found", { status: 404 });
    const userPersonas = await getPersonaSlugsForUser(session.user.id);
    if (!userPersonas.includes(persona)) {
      return new NextResponse("Not found", { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
