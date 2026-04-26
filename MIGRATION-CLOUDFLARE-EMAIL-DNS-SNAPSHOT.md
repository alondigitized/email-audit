# DNS snapshot — etell.app (pre-Cloudflare migration)

Captured 2026-04-26 from Vercel DNS + public resolver.

## Records to verify Cloudflare imported correctly

### Apex (etell.app)
- **A** records: `64.29.17.65`, `216.198.79.65`
- **CAA** records:
  - `0 issue "pki.goog"`
  - `0 issue "sectigo.com"`
  - `0 issue "letsencrypt.org"`
- **NS** (current): `ns1.vercel-dns.com.`, `ns2.vercel-dns.com.` — these will be replaced by Cloudflare's after step 4

### www
- **A** records: `64.29.17.65`, `216.198.79.1`
- *(or potentially CNAME to the Vercel deploy alias — verify after import)*

### Wildcard (`*.etell.app`)
- **CNAME**/ALIAS: `cname.vercel-dns-017.com.`
- *(this serves preview deploys at `email-audit-git-*.vercel.app` aliases)*

### Resend (CRITICAL — magic-link deliverability depends on these)
- **TXT** at `resend._domainkey.etell.app`: starts with `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5yNMgkyugehD8FA5vulVhisN2ESlWB+lln3MJaM+T4ECtb8/n1HiwrK4hpPczzKTh10r9sZN0x2nLcauARshZiLLPdqQKJqCPeksWCaMM551oxsVHjYCJuMC6ZdyfSJ5YqJS5EMsBsF3yMtrEqh4cpPS7uM6gWXQDBrRzi0UjmwIDAQAB`
- **TXT** at `send.etell.app`: `v=spf1 include:amazonses.com ~all`
- **MX** at `send.etell.app`: `10 feedback-smtp.us-east-1.amazonses.com.`

### Cloudflare will ADD (don't remove these later)

When you enable Email Routing, Cloudflare will create MX records pointing
at its inbound mail servers (something like `mailclient.cloudflare.email`,
`isaac.cloudflare.email`, `linda.cloudflare.email`). These are required
for `*@etell.app` inbound to work. Don't reject them.

### Cloudflare proxy setting

For the Vercel deploys to keep getting valid TLS certs, make sure the
apex (`@`), `www`, and `*` records are set to **DNS only** (gray cloud)
in Cloudflare — NOT proxied (orange cloud). Vercel handles the cert
itself; Cloudflare's proxy would interfere.

## Sanity check after switching nameservers

```bash
# nameservers should resolve to Cloudflare
dig NS etell.app +short
# expected: <prefix>.ns.cloudflare.com (two values)

# apex still points at Vercel IPs
dig A etell.app +short
# expected: 64.29.17.65, 216.198.79.65

# DKIM still resolves
dig TXT resend._domainkey.etell.app +short
# expected: starts with "p=MIGfMA0GCSqGSIb3..."

# SPF still resolves
dig TXT send.etell.app +short
# expected: "v=spf1 include:amazonses.com ~all"

# Magic-link smoke test
# Send yourself a /login link from https://www.etell.app/login. Should
# arrive in inbox (not spam). If spam: SPF/DKIM didn't migrate cleanly.
```
