# Site Monitor

Daily autonomous site journey audits. Runs a persona-driven Playwright journey through Skechers.com, captures screenshots/metrics/errors, generates AI reviews, and publishes to the same Vercel site as email audits.

## How it runs

- **LaunchAgent**: `ai.openclaw.walker.site-review` (`~/Library/LaunchAgents/`)
- **Schedule**: Daily at 6:00 AM UTC
- **Command**: `node site-review.mjs --persona walker`
- **Idempotent**: checks `audit-pipeline/published-audits.json` for today's slug before running — won't duplicate

## Journey (9 steps)

```
Homepage -> Dismiss Popups -> Login -> Men's Category -> Men's Shoes
  -> View Product -> Add to Cart -> View Cart -> Search ("slip in")
```

Each step captures: viewport screenshot, fullpage screenshot, HTML, and optionally accessibility scans (axe-core), performance metrics (TTFB/LCP/CLS), console errors, and network errors.

## Browser strategy

1. **Primary**: connect to real Chrome via CDP (port 9222) to bypass Kasada bot protection
2. **Fallback**: launch Playwright Chromium with stealth plugin
3. **Session**: loads saved cookies from `cookies/walker-skechers.json`; falls back to form login with credentials from `.env`

## Review generation

Two parallel Claude reviews (same as email monitor):
- **Content review**: persona perspective + all viewport screenshots — evaluates UX, friction, delight
- **Technical review**: HTML samples + performance metrics + axe violations + console/network errors

Previous day's score is embedded in the prompt for **regression detection**.

## Publishing

Same pipeline as email-monitor (see `email-monitor/CLAUDE.md`):
1. Build `audit-data.json` directly in JS (no Python extractor — site journeys have no `message.json`)
2. Update `audit-pipeline/published-audits.json` manifest
3. Run `audit-pipeline/extract_audit_data.py` — refreshes audit-data.json for any newly-processed *email* entries (skips site entries)
4. Sync this audit's `audit-data.json` + screenshots to `site/content/audits/` and `site/public/images/audits/`
5. Git push to `main` (triggers Vercel deploy)

Audits appear on the site with `type: "site"` (vs `type: "email"` for email audits).

## Personas

Defined in `personas/{name}.json`. Currently only `walker`:
- Walker Miles, 62, male, Skechers Plus member
- Browses Men's, prefers comfort tech and Slip-ins, price-conscious
- Search term: "slip in", category path: Men > Shoes

## Key files

| File | Purpose |
|------|---------|
| `site-review.mjs` | Main orchestrator (journey + review + publish) |
| `save-cookies.mjs` | Manual helper to refresh login cookies |
| `personas/walker.json` | Persona definition |
| `cookies/walker-skechers.json` | Saved browser session |
| `history/walker-latest.json` | Previous day's score for regression tracking |
| `.env` | Credentials, model config, tokens |
| `logs/site-review.log` | Execution log |

## Config (`.env`)

| Variable | Purpose |
|----------|---------|
| `SKECHERS_EMAIL` / `SKECHERS_PASSWORD` | Login credentials |
| `CLAUDE_MODEL` / `CLAUDE_EFFORT` | Review model config |
| `GH_TOKEN` | GitHub PAT for git push |

## Artifacts

Stored in `reports/site-artifacts/{date}-site-journey-{persona}/`:
- `step-{NN}-{id}-viewport.png` / `step-{NN}-{id}-fullpage.png`
- `step-{NN}-{id}.html`
- `console-errors.json`, `network-errors.json`
- `axe-violations.json`, `performance-metrics.json`
- `review.txt`, `audit-data.json`

## Debugging

```bash
# Check if running
ps aux | grep site-review

# Logs
tail -f site-monitor/logs/site-review.log

# Manual run
cd site-monitor && node site-review.mjs --persona walker

# Refresh cookies (launches Chrome for manual login)
node save-cookies.mjs walker
```
