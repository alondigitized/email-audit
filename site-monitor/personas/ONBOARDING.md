# Persona Onboarding Runbook

This file documents the steps to add a new persona to the experience-review system. Used manually for now; will be codified into `scripts/onboard-persona.mjs` once the pattern is stable.

## Current roster

| Slug | Name | Status |
|---|---|---|
| `walker` | Walker Miles (62M, comfort) | ✅ active |
| `martha` | Martha Stroll (34F, young parent) | 🚧 pending credentials |

## Adding a persona: manual checklist

The following steps are the ones **I can't automate yet** — each requires real-world action (creating accounts, logging in, etc.). Everything else is already wired in code.

### 1. Persona definition (automated)

File: `site-monitor/personas/{slug}.json`. Already exists for Martha. Tells the site-monitor what journey to run and what persona voice to use in reviews.

### 2. AgentMail inbox (manual, 2 min)

Create a new inbox in the AgentMail console: **`{slug}@agentmail.to`**.

- Martha's target: `martha.stroll@agentmail.to`
- Log in to the AgentMail dashboard
- Create inbox, note the address
- No forwarding rules needed — email-monitor polls via API

### 3. Retailer account(s) (manual, 2–5 min per brand)

For each brand you want the persona to shop, create a real account on the brand's site using the persona's AgentMail address as the signup email.

- Martha's primary brand: Skechers
- Go to skechers.com, create account, email = `martha.stroll@agentmail.to`
- Use a strong generated password and save it (you'll paste it into `.env` next)
- Confirm the email (verification link lands in Martha's AgentMail inbox)

*Why manual: Kasada + CAPTCHAs on brand signup flows resist automation, and automating it would violate brand ToS. This is the one hard manual step per persona.*

### 4. Credentials into `.env` (manual, 30 sec)

Add to `site-monitor/.env`:

```
SKECHERS_MARTHA_EMAIL=martha.stroll@agentmail.to
SKECHERS_MARTHA_PASSWORD=<generated-password>
```

The env var prefix matches `credentials_env_prefix` in `martha.json` (currently `SKECHERS_MARTHA`). Add a new prefix per brand if Martha shops multiple sites.

### 5. Email-monitor config (automated, 10 sec)

Add the new inbox to `email-monitor/inboxes.json`:

```json
[
  { "inbox": "walker@agentmail.to", "persona": "walker" },
  { "inbox": "martha.stroll@agentmail.to", "persona": "martha" }
]
```

Then restart the daemon:

```
launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/com.walker.agentmail-monitor.plist
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.walker.agentmail-monitor.plist
```

The daemon now polls both inboxes on the same interval, publishes each email with its `persona` tag, and the site UI filters by persona automatically.

### 6. Capture login cookies (manual, 2 min)

```
cd site-monitor
node save-cookies.mjs --persona martha
```

This launches your real Chrome with a fresh profile. Log in as Martha on skechers.com. The script saves cookies to `site-monitor/cookies/martha-skechers.json`. You only do this once per persona per brand — cookies refresh periodically on each scheduled run.

### 7. Subscribe Martha to brand email lists (manual, 5–10 min)

Visit each brand's footer signup form (or popup) and subscribe using `martha.stroll@agentmail.to`:

- skechers.com
- adidas.com
- famousfootwear.com
- shoecarnival.com
- dsw.com
- (add more as interesting)

Double-opt-in confirmation emails will land in Martha's AgentMail inbox and get picked up automatically on the daemon's next poll.

*Why manual: subscription forms have CAPTCHAs and rate limits. Could be Playwright-automated in a future sprint — this is the top candidate for the first automation pass since it's the most repetitive.*

### 8. Install the site-review LaunchAgent (automated, 30 sec)

```
cp site-monitor/launchd/ai.openclaw.martha.site-review.plist ~/Library/LaunchAgents/
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/ai.openclaw.martha.site-review.plist
```

Martha's site-review will run daily at 06:30 UTC (Walker runs at 06:00 UTC, staggered to avoid contending for the real Chrome instance).

### 9. Smoke test (automated, ~5 min)

Manually trigger Martha's site-review to confirm everything works:

```
cd site-monitor
node site-review.mjs --persona martha
```

Should produce:
- New artifact directory `reports/site-artifacts/{today}-site-journey-martha/`
- Updated `audit-pipeline/published-audits.json` (daemon-local, gitignored)
- New row in Postgres `audit` table with `persona = 'martha'`
- R2 objects under `audits/{slug}/` (step screenshots + `render.png`)
- Vault markdown at `vaults/martha/audits/{slug}.md`; `vaults/` git-pushed to main
- The live site renders the new Martha audit on next request (no Vercel redeploy needed)

### 10. Wait for emails (passive, 1–3 days)

Brands typically send:
- Welcome email within 1 hour
- 20% off reminder within 24 hours
- First promo within 3 days

Once Martha has her first welcome email through the full pipeline, the first cross-persona comparative analysis becomes possible: **"How does Skechers treat Walker vs. Martha?"**

---

## Automation roadmap (what gets scripted next)

Ranked by pain-per-persona:

1. **Subscribe to brand email lists** (step 7) — 5-10 min of manual clicking per persona, highest ROI to automate
2. **AgentMail inbox creation** (step 2) — 2 min but AgentMail has an API, trivial to script
3. **Credentials prompt + env write** (step 4) — fold into the same CLI script
4. **LaunchAgent install** (step 8) — script-assisted; already templated
5. **Retailer account creation** (step 3) — unlikely to automate safely; the only truly manual step

Target: `node scripts/onboard-persona.mjs martha` walks through all steps, pausing only for retailer signup and Chrome login.
