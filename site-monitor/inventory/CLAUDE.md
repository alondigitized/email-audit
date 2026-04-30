# Ivy Inventory — Skechers women's-shoes audit

Recurring inventory + size-coverage audit. Walks every PLP listed in `categories.json`, captures the top-20 product tiles per PLP (DOM order = merchandised order), navigates each PDP, records per-color size availability + a PDP screenshot.

## How it runs

- **LaunchAgent**: `ai.openclaw.ivy-inventory` (plist in `../launchd/`)
- **Schedule**: Weekly, Mondays 13:00 UTC (off-peak; full run is 60–90 min)
- **Command**: `node site-monitor/inventory/audit.mjs`

## Browser strategy

Same as `site-review.mjs`:
1. Try `connectOverCDP` to `localhost:9222` — uses real Chrome (carries the persona's manually-curated Kasada-passing fingerprint).
2. Fallback: `playwright-extra` + stealth plugin headless.

## Output

Per run (`slug = YYYY-MM-DD-skechers-womens-inventory`):
- `audit` row, type=`site`, with the structured inventory blob under `data.inventory`.
- `experience` + `reaction` rows via `upsertExperienceAndReaction`.
- Vault note at `vaults/ivy-inventory/audits/{slug}.md`.
- Per-(style, color) PDP screenshots in R2 at `audits/{slug}/{plp}-rank{NN}-color{N}.png`.
- Local artifact dump at `reports/inventory-audits/{slug}/` (audit-data.json + screenshots).

## Narrative

After the scrape, `narrative.mjs` calls the local chat model (Ollama via `LLM_BASE_URL`) with an Ivy-voice system prompt. The completion lands in `data.review.raw_markdown` so it shows up in the audit detail page. Voice rules are enforced in the prompt — no customer gushing, no marketing copy.

## Manual run

```bash
# Smoke test against a single PLP, 5 styles, 1 color each, no DB writes
node site-monitor/inventory/audit.mjs --max-plps 1 --max-styles 5 --max-colors 1 --dry-run

# Full run (all 15 PLPs × 20 styles × all colors)
node site-monitor/inventory/audit.mjs
```

## Selectors

Mirror `site-review.mjs` so they don't drift:
- Product tiles (PLP): `a.c-product-tile-V2__title, a.c-product-tile-V2__body-elements-anchor-wrapper, a.c-product-tile__title`
- Color swatches (PDP): `a.c-product-detail__attr-swatch, a.swatch-circle, a[data-attr-color], .c-color-swatches a`
- Size buttons (PDP): `.c-size-selector button, .c-product-detail__sizes button, button[data-attr-value]`

If Skechers redesigns, update both files in lockstep.
