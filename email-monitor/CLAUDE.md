# Email Monitor

Autonomous daemon that polls an AgentMail inbox, generates AI reviews of marketing emails, and publishes them to a Next.js site on Vercel.

## How it runs

- **LaunchAgent**: `com.walker.agentmail-monitor` (`~/Library/LaunchAgents/`)
- **Process**: `node index.mjs` — runs continuously, polls every 3 minutes
- **Restart**: `launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/com.walker.agentmail-monitor.plist && launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.walker.agentmail-monitor.plist`
- **After code changes, you MUST restart the daemon** — it runs the in-memory version until restarted

## Pipeline (per email)

```
AgentMail inbox (walker@agentmail.to)
  -> Save artifacts (HTML, text, URLs, webview URL)
  -> Screenshot (Swift) + QA checks (Python) [parallel]
  -> Content review (Claude, from screenshot) + Technical review (Claude, from HTML+QA) [parallel]
  -> Merge reviews into review.txt
  -> Update audit-pipeline/published-audits.json manifest
  -> Run audit-pipeline/extract_audit_data.py (produces audit-data.json per artifact)
  -> Sync audit-data.json + render.png to site/content/audits/{slug}/
  -> git push main (triggers Vercel deploy of site/)
  -> Mark as processed in state.json
```

## Polling strategy

- **Startup**: paginates ALL messages in inbox via `pageToken` to catch anything missed during downtime. Stops paginating once a full page of already-known messages is reached.
- **Interval**: uses `after: lastSuccessAt` to only fetch messages newer than the last successful processing. Efficient — usually 0-2 messages.

## Error handling

- **Retry**: failed messages get up to `MAX_RETRIES` (3) attempts before permanent failure. Retry count tracked per message in `state.retryCounts`.
- **No re-throw**: a failed message does NOT abort the rest of the poll batch.
- **Non-fatal steps**: screenshot rendering, QA checks, and site publish are wrapped in try/catch. Only the Claude review step is fatal.
- **Stale in-flight cleanup**: on startup, any messages left in `inFlightMessageIds` from a previous crash are cleared for reprocessing.

## State (`state.json`)

```json
{
  "processedMessageIds": ["<msg-id>", ...],
  "inFlightMessageIds": [],
  "failedMessageIds": ["<msg-id>", ...],
  "retryCounts": { "<msg-id>": 2 },
  "lastPollAt": "ISO timestamp",
  "lastSuccessAt": "ISO timestamp"
}
```

## Key files

| File | Purpose |
|------|---------|
| `index.mjs` | Main daemon — polling, processing, publishing |
| `qa_checks.py` | Automated QA (links, accessibility, compliance) |
| `rerun-audit.mjs` | Manual re-run of review for a specific artifact dir |
| `state.json` | Deduplication and retry state |
| `.env` | API keys, polling interval, model config |
| `logs/monitor.log` | Application log (timestamped JSON) |

## Config (`.env`)

| Variable | Purpose | Default |
|----------|---------|---------|
| `AGENTMAIL_API_KEY` | AgentMail API key (required) | — |
| `INBOX_ID` | Inbox to poll | `walker@agentmail.to` |
| `POLL_INTERVAL_MS` | Polling interval in ms | `180000` (3 min) |
| `CLAUDE_MODEL` | Model for reviews | `sonnet` |
| `CLAUDE_EFFORT` | Claude effort level | `high` |
| `GH_TOKEN` | GitHub PAT for git push | — |

## Artifacts

Each processed email gets a directory in `reports/email-artifacts/{date}-{slug}/`:

- `message.json` — raw API response
- `message.html` / `message.txt` — email body
- `email-webview-render.png` — screenshot of rendered email
- `qa-report.json` — automated QA results
- `review.txt` — merged content + technical review
- `audit-data.json` — structured data extracted by `generate_site.py`

## Publishing

The live site is the Next.js app in `site/` (deployed to Vercel at `email-audit-weld.vercel.app`). Publishing flow:

1. `audit-pipeline/extract_audit_data.py` reads `audit-pipeline/published-audits.json`, parses each entry's `review.txt` + `qa-report.json`, and writes `audit-data.json` into the artifact directory.
2. `publishSite()` in `index.mjs` copies each `audit-data.json` → `site/content/audits/{slug}/audit.json` and `email-webview-render.png` → `site/public/images/audits/{slug}/render.png`, then rebuilds `site/content/audits/index.json`.
3. Git push to `main` triggers a Vercel deploy. The site reads only from `site/content/audits/` and `site/public/images/audits/` — no other state.

**Shared with site-monitor:** the manifest and extractor in `audit-pipeline/` are also used by `site-monitor/site-review.mjs`. Site-journey entries skip the Python extractor (site-monitor builds its own `audit-data.json` directly in JS).

## Debugging

```bash
# Check if running
ps aux | grep index.mjs

# Live logs
tail -f email-monitor/logs/monitor.log

# Recent completions
grep "message completed" logs/monitor.log | tail -10

# Recent failures
grep "message failed" logs/monitor.log | tail -10

# Current state
python3 -c "import json; s=json.load(open('state.json')); print(f'Processed: {len(s[\"processedMessageIds\"])}, Failed: {len(s[\"failedMessageIds\"])}, InFlight: {len(s[\"inFlightMessageIds\"])}')"
```
