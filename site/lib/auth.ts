import { createHmac } from "crypto";

const AUTH_HASH = process.env.AUTH_HASH ?? "";
const AUTH_SECRET = process.env.AUTH_SECRET ?? "dev-secret";
const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export async function verifyPassword(password: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashHex = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex === AUTH_HASH;
}

export function createToken(): string {
  const payload = JSON.stringify({ ts: Date.now() });
  const sig = createHmac("sha256", AUTH_SECRET)
    .update(payload)
    .digest("base64url");
  const payloadB64 = Buffer.from(payload).toString("base64url");
  return `${payloadB64}.${sig}`;
}

export function verifyToken(token: string): boolean {
  const [payloadB64, sig] = token.split(".");
  if (!payloadB64 || !sig) return false;

  const expected = createHmac("sha256", AUTH_SECRET)
    .update(Buffer.from(payloadB64, "base64url").toString())
    .digest("base64url");
  if (sig !== expected) return false;

  try {
    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString());
    return Date.now() - payload.ts < TOKEN_TTL_MS;
  } catch {
    return false;
  }
}
