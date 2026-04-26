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
