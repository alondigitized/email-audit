const AUTH_HASH = process.env.AUTH_HASH ?? "";
const AUTH_SECRET = process.env.AUTH_SECRET ?? "dev-secret";
const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function toBase64url(buf: ArrayBuffer): string {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function fromBase64url(s: string): string {
  const padded = s + "=".repeat((4 - (s.length % 4)) % 4);
  return atob(padded.replace(/-/g, "+").replace(/_/g, "/"));
}

async function hmacSign(data: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(AUTH_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return toBase64url(sig);
}

export async function verifyPassword(password: string): Promise<boolean> {
  const data = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashHex = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex === AUTH_HASH;
}

export async function createToken(): Promise<string> {
  const payload = JSON.stringify({ ts: Date.now() });
  const payloadB64 = toBase64url(new TextEncoder().encode(payload).buffer as ArrayBuffer);
  const sig = await hmacSign(payload);
  return `${payloadB64}.${sig}`;
}

export async function verifyToken(token: string): Promise<boolean> {
  const [payloadB64, sig] = token.split(".");
  if (!payloadB64 || !sig) return false;

  const payloadStr = fromBase64url(payloadB64);
  const expected = await hmacSign(payloadStr);
  if (sig !== expected) return false;

  try {
    const payload = JSON.parse(payloadStr);
    return Date.now() - payload.ts < TOKEN_TTL_MS;
  } catch {
    return false;
  }
}
