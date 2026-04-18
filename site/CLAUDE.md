@AGENTS.md

# Site (Next.js on Vercel)

Frontend for email audit reviews at `email-audit-weld.vercel.app`.

## Data flow

Content is NOT managed here — it's written by the email-monitor daemon:
- `content/audits/index.json` — sorted list of all audits (read at build time by `lib/audits.ts`)
- `content/audits/{slug}/audit.json` — individual audit data
- `public/images/audits/{slug}/render.png` — email screenshots

Pushes to `main` auto-deploy via Vercel. The email-monitor commits and pushes after each processed email.

## Password gate

The site is behind a client-side password gate (SHA-256 hash in sessionStorage). See `components/Gate.tsx`.
