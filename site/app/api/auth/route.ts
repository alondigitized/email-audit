import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, createToken } from "@/lib/auth";

// Temporary debug endpoint — remove after verifying
export async function GET() {
  const hash = process.env.AUTH_HASH ?? "(unset)";
  const secretSet = process.env.AUTH_SECRET ? "yes" : "no";
  return NextResponse.json({
    hash_prefix: hash.slice(0, 8),
    hash_length: hash.length,
    secret_set: secretSet,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const password = body?.password;

  if (!password || !(await verifyPassword(password))) {
    return NextResponse.json({ error: "Incorrect" }, { status: 401 });
  }

  const token = await createToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set("_auth", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/",
  });
  return response;
}
