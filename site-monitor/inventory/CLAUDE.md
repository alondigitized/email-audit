# Inventory audits — Skechers women's + men's shoes

Persona-driven inventory + size-coverage scraper. One script
(`audit.mjs`) drives multiple personas via `personas.json`. Each
persona has a categories file and writes its own audit row + vault
note + R2 screenshots + sidecar CSV.

## Personas

| Slug | Display | Scope | Categories file | Schedule |
|---|---|---|---|---|
| `ivy-inventory` | Ivy Inventory | Skechers women's shoes | `categories-womens.json` | Mondays 13:00 UTC |
| `ida-inventory` | Ida Inventory | Skechers girls' shoes | `categories-girls.json` | Tuesdays 13:00 UTC |
| `ian-inventory` | Ian Inventory | Skechers men's shoes | `categories-mens.json` | Wednesdays 13:00 UTC |
| `ike-inventory` | Ike Inventory | Skechers boys' shoes | `categories-boys.json` | Thursdays 13:00 UTC |
| `iris-inventory` | Iris Inventory | Skechers women's sale footwear (bargain hunter) | `categories-sale.json` | Fridays 13:00 UTC |
| `irwin-inventory` | Irwin Inventory | Skechers men's sale footwear (bargain hunter) | `categories-sale-mens.json` | Saturdays 13:00 UTC |
| `izzy-inventory` | Izzy Inventory | Skechers girls' sale footwear (bargain hunter) | `categories-sale-girls.json` | Sundays 13:00 UTC |
| `iggy-inventory` | Iggy Inventory | Skechers boys' sale footwear (bargain hunter) | `categories-sale-boys.json` | Sundays 18:00 UTC |

The four sale personas use SFCC refinement URLs (`prefn1=gender&prefv1=…`
plus `prefn2=productLine&prefv2=FOOTWEAR`) because /sale/ has no linked
gender subcategories — the pretty paths (/sale/mens/) render the same
unfiltered PLP. Footwear-only keeps each audit in a single size system
(the heatmap renders one grid per size system either way). Verified
counts at setup: women 533, men 277, girls 45, boys 46 vs 1,102 unfiltered.

Personas are staggered across weekdays so the Mac mini isn't running
two ~25-min Playwright jobs at once. To add another persona, append
to `personas.json`, drop in a categories file, seed the persona
(`scripts/seed-{slug}.ts`), and add a launchd plist.

## How a run works

1. Load persona config from `personas.json`.
2. Load PLP list from the persona's categories file.
3. Connect to Chrome via CDP on port 9222 (Kasada bypass) or fall back
   to playwright-extra + stealth.
4. For each PLP: scrape the top-N product tile anchors (default 3).
5. For each PDP: enumerate color swatches, then per color enumerate
   width buttons; each (color, width) combo becomes a variant row.
6. For each variant: scrape size buttons, capture a screenshot of the
   PDP, upload it to R2 at `audits/{slug}/{plp}-rank{NN}-color{N}.png`.
7. Build a CSV (one row per (PLP, style, color, width, size)) and
   upload to `audits/{slug}/inventory.csv`.
8. Generate a first-person POV narrative via the local chat model
   (Ollama, `LLM_CHAT_MODEL`) using the persona's display name.
9. Prepend a markdown summary table to the narrative.
10. Upsert the audit row + experience + reaction; write the vault
    markdown note.

## Output per run

- Slug shape: `{date}-{persona.auditSlugSuffix}` (e.g.
  `2026-04-30-skechers-womens-inventory`).
- DB: `audit` row, `experience` row (with `inventory` jsonb column),
  `reaction` row, embedding.
- R2: per-(color, width) PDP screenshots + `inventory.csv` sidecar.
- Vault: `vaults/{persona}/audits/{slug}.md`.
- Local artifacts: `reports/inventory-audits/{slug}/audit-data.json`
  + screenshots + CSV.

## Browser strategy

Same as `site-review.mjs`: prefer real Chrome on `localhost:9222`
(carries the manually-curated Kasada-passing fingerprint), fall back
to headless stealth chromium.

## Bootstrap (one-time, on Mac mini)

```bash
cp site-monitor/launchd/ai.openclaw.ivy-inventory.plist ~/Library/LaunchAgents/
cp site-monitor/launchd/ai.openclaw.ian-inventory.plist ~/Library/LaunchAgents/
launchctl bootstrap gui/$UID ~/Library/LaunchAgents/ai.openclaw.ivy-inventory.plist
launchctl bootstrap gui/$UID ~/Library/LaunchAgents/ai.openclaw.ian-inventory.plist
```

## Manual run

```bash
# Ivy (women's)
node site-monitor/inventory/audit.mjs

# Ian (men's)
node site-monitor/inventory/audit.mjs --persona ian-inventory

# Smoke test
node site-monitor/inventory/audit.mjs --persona ian-inventory \
  --max-plps 1 --max-styles 2 --max-colors 1 --dry-run
```

## Selectors (Skechers, mirror site-review.mjs)

- Product tiles (PLP): `a.c-product-tile-V2__title, a.c-product-tile-V2__body-elements-anchor-wrapper, a.c-product-tile__title`
- Color swatches (PDP): `button.button-select-color`, `button.js-color-attr-selector`
- Width buttons (PDP): `button.button-select-width`
- Size buttons (PDP): `button.button-select-size`
- Unavailable modifier class: `c-product-attributes__item__selector--unselectable`

If Skechers redesigns, update both `site-review.mjs` and this script
in lockstep.
