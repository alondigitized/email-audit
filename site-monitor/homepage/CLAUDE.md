# Homepage Sweep

Daily snapshot of every active persona's brand homepage. One audit row
per (persona, day) — the persona accumulates a daily understanding of
what their brand is showcasing on the front door.

## How it differs from `site-review.mjs`

| | `site-review.mjs` | `homepage/sweep.mjs` |
|---|---|---|
| Personas | One at a time (Walker / Martha / Calvin) | All active personas in one run |
| Surface | 9-step journey (homepage → category → PDP → cart → search) | Homepage only |
| Brand-specific selectors | Yes (Skechers DOM) | No — generic |
| Login | Yes (cookies, fallback to creds) | No |
| Performance metrics | Yes | No |
| QA checks | Yes | No |
| Cost / time per persona | ~5 min, ~$0.10 | ~50s, ~$0.02 |

The two scripts coexist. Walker still runs the full Skechers journey
daily via `ai.openclaw.walker.site-review`; this sweep also audits
his homepage as part of the cross-persona pass.

## Schedule

- LaunchAgent: `ai.openclaw.homepage-sweep`
- Daily at 11:00 UTC (off-peak; 50 personas × ~50s ≈ 45 min).

## Usage

```bash
# Full sweep (all active personas)
node site-monitor/homepage/sweep.mjs

# One persona — useful for debugging selectors or prompt
node site-monitor/homepage/sweep.mjs --persona walker

# Smoke test — first 3 personas, no DB / no R2 writes
node site-monitor/homepage/sweep.mjs --limit 3 --dry-run
```

## What lands per audit

- Slug: `{date}-homepage-{brand-host}-{persona-slug}`
- Type: `site`
- `data.email.subject` = `"Homepage snapshot · {host} · {date}"`
- `data.review.raw_markdown` = persona's first-person reaction (3-4
  paragraphs, ends with `**X/10**` score line)
- `data.assets.render_image_key` = R2 key for the homepage screenshot
- `data.assets.webview_url` = the homepage URL
- Vault note at `vaults/{persona}/audits/{slug}.md`

## Browser strategy

Same as site-review: prefer `connectOverCDP` to a real Chrome on
`localhost:9222` (clean fingerprint, evades most bot management),
fall back to playwright-extra + stealth headless when CDP isn't
available.

## Known limits

- No login state on competitor brands → personalized hero modules
  may differ from what real customers see.
- Popups vary wildly across brands; the dismiss list is best-effort
  and won't catch everything. A persona reaction with a giant modal
  in the screenshot is still useful — it's accurately reflecting
  the visitor experience.
- Vision-capable model required — uses Claude Sonnet via the local
  CLI (`CLAUDE_BIN`). Switching to a local vision model later (qwen2-vl,
  llava-next) would drop the per-audit cost to ~$0.
