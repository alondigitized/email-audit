// Free / consumer email domains. Public signup rejects these — etell.app is
// "company email only" so the LLM research wizard has a domain to look up.
// Not exhaustive; consumer domains keep shifting. The check is also done
// client-side for instant feedback. Always re-check server-side because
// client-side validation can be bypassed.
const FREE_EMAIL_DOMAINS = new Set<string>([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "yahoo.ca",
  "yahoo.co.jp",
  "ymail.com",
  "rocketmail.com",
  "outlook.com",
  "hotmail.com",
  "hotmail.co.uk",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "aim.com",
  "protonmail.com",
  "proton.me",
  "pm.me",
  "gmx.com",
  "gmx.de",
  "gmx.net",
  "mail.ru",
  "yandex.com",
  "yandex.ru",
  "qq.com",
  "163.com",
  "126.com",
  "sina.com",
  "sina.cn",
  "fastmail.com",
  "fastmail.fm",
  "tutanota.com",
  "zoho.com",
  "duck.com",
  "duckduckgo.com",
]);

export function extractDomain(email: string): string | null {
  const lower = email.toLowerCase().trim();
  const at = lower.lastIndexOf("@");
  if (at < 0 || at === lower.length - 1) return null;
  return lower.slice(at + 1);
}

export function isFreeEmailDomain(domain: string): boolean {
  return FREE_EMAIL_DOMAINS.has(domain.toLowerCase().trim());
}

export function isCompanyEmail(email: string): {
  ok: boolean;
  domain?: string;
  reason?: string;
} {
  const domain = extractDomain(email);
  if (!domain) return { ok: false, reason: "Not a valid email address." };
  if (!domain.includes(".")) return { ok: false, reason: "Domain looks malformed." };
  if (isFreeEmailDomain(domain))
    return {
      ok: false,
      domain,
      reason: "Use your company email — free providers (gmail, etc.) aren't supported.",
    };
  return { ok: true, domain };
}

// Returns the canonical email domain we use as the tenant key.
//
// - Lowercases.
// - Strips RFC 5233 plus-aliases ("alan+test@skechers.com" → "alan@skechers.com")
//   before extracting the domain. The alias is ignored entirely for tenant
//   matching since two messages from the same person can wear different
//   plus-aliases yet belong to the same company.
// - Does NOT collapse subdomains. "us.skechers.com" stays distinct from
//   "skechers.com" in v1; merging is a manual operational task.
//
// Returns null when the input doesn't have a usable @host part.
export function extractTenantDomain(email: string): string | null {
  const lower = String(email ?? "").toLowerCase().trim();
  const at = lower.lastIndexOf("@");
  if (at < 0 || at === lower.length - 1) return null;
  // Strip plus-alias from local part (we don't actually store the local
  // part here, but stripping mirrors the canonicalization most mail
  // servers apply when bouncing/aliasing).
  const localRaw = lower.slice(0, at);
  const local = localRaw.split("+")[0] ?? localRaw;
  void local; // kept intentionally — future per-user normalization may use it.
  const domain = lower.slice(at + 1);
  if (!domain.includes(".")) return null;
  return domain;
}
