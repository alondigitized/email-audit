import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, createToken } from "@/lib/auth";

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
