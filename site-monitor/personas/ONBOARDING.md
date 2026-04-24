# Persona Onboarding Runbook

**Entry point: `/admin/personas` on the site.** Create personas and edit
existing ones through the web UI; this file documents the laptop-side
steps the UI can't automate.

## Current roster

| Slug | Name | Status |
|---|---|---|
| `walker` | Walker Miles (62M, comfort) | ✅ active |
| `martha` | Martha Stroll (34F, young parent) | 🚧 pending credentials |

Personas are stored in the Neon `persona` table with a JSONB `profile`
column that carries the full identity card + daemon journey config +
onboarding checklist state. Filesystem JSON (`site-monitor/personas/{slug}.json`)
and vault README (`vaults/{slug}/README.md`) are auto-generated mirrors.

## Adding a persona — end-to-end

### Web (automated — `/admin/personas/new`)

1. **Define the identity.** Fill out the form: slug, name, age, generation,
   gender, style, shopping habits, tech comfort, focus areas.
2. **Define the daemon journey.** Site URL, search term, category path,
   credentials env prefix. Email-only personas can leave these blank.
3. **Pick an accent color.** Used on audit cards and persona pills.
4. **Click "Create persona."** Writes the DB row.
5. **Provision the AgentMail inbox.** Checklist step 1 — clicking
   "Provision inbox" calls the AgentMail API and stores the inbox id +
   address on the profile. Requires `AGENTMAIL_API_KEY` on Vercel.

### Laptop (manual — run on the daemon host)

Once the web side is done, open a terminal on the laptop that runs
email-monitor and site-review:

```
cd /path/to/openclaw-walker/workspace
node scripts/onboard-persona.mjs <slug>
```

That generates everything the daemons still read from disk:

- `site-monitor/personas/{slug}.json` — legacy daemon fallback
- `vaults/{slug}/README.md` — Obsidian identity card (auto-regenerable)
- `site-monitor/launchd/ai.openclaw.{slug}.site-review.plist` — LaunchAgent
- Prints the `.env` keys, cookie-capture command, LaunchAgent install,
  and daemon-restart commands you need next

Then do the 4 genuinely-manual steps:

1. **Retailer account signup** — create accounts on each brand site using
   `{slug}@agentmail.to`. CAPTCHAs prevent automation; this stays manual.
2. **Credentials in `.env`** — paste the two `{PREFIX}_EMAIL` / `_PASSWORD`
   keys the script prints into `site-monitor/.env`.
3. **Cookie capture** — `cd site-monitor && node save-cookies.mjs --persona <slug>`
   launches Chrome for a one-time login; cookies are saved for future runs.
4. **Subscribe to brand email lists** — visit retailer footer forms,
   subscribe with `{slug}@agentmail.to`. Still CAPTCHA-gated.

### Activate

```
cp site-monitor/launchd/ai.openclaw.<slug>.site-review.plist ~/Library/LaunchAgents/
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/ai.openclaw.<slug>.site-review.plist

launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/com.walker.agentmail-monitor.plist
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.walker.agentmail-monitor.plist
```

Daemon will re-read persona list from Neon, start polling the new inbox,
and run the site-review at the staggered start time in the plist.

### Smoke test

```
cd site-monitor && node site-review.mjs --persona <slug>
```

Should produce:
- New artifact directory `reports/site-artifacts/{today}-site-journey-<slug>/`
- New row in Postgres `audit` table with `persona = '<slug>'`
- R2 objects under `audits/{slug}/` (step screenshots + `render.png`)
- Vault markdown at `vaults/<slug>/audits/{slug}.md`
- The live site renders the new audit on next request

## Why some steps can't be automated from Vercel

- **Retailer accounts + brand subscriptions** — CAPTCHAs and brand ToS.
- **Cookie capture** — real Chrome login, needs the laptop's browser.
- **`.env` credentials** — laptop-local file; web can print the keys but
  can't write to the laptop's filesystem.
- **LaunchAgent install + daemon restart** — macOS `launchctl` is laptop-local.

The bootstrap script narrows the laptop-side gap to four commands; every
other step is now a click or two in `/admin/personas`.
