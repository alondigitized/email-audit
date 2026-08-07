# Email Monitor

Autonomous daemon that polls an AgentMail inbox, generates AI reviews of marketing emails, and publishes them to a Next.js site on Vercel.

## How it runs

- **LaunchAgent**: `com.walker.agentmail-monitor` (`~/Library/LaunchAgents/`)
- **Process**: `node index.mjs` — runs continuously, polls every 3 minutes
- **Restart**: `launchctl bootout gui/$(id -u) ~/Library/LaunchAgents/com.walker.agentmail-monitor.plist && launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.walker.agentmail-monitor.plist`
- **After code changes, you MUST restart the daemon** — it runs the in-memory version until restarted

## Pipeline (per email)

```
AgentMail inbox (walker@agentmail.to, martha.stroll@agentmail.to, ...)
  -> Save artifacts (HTML, text, URLs, webview URL)
  -> Screenshot (Swift) + QA checks (Python qa_checks.py) [parallel]
  -> Content review (Claude, from screenshot) + Technical review (Claude, HTML+QA) [parallel]
  -> Merge reviews into review.txt
  -> Update audit-pipeline/published-audits.json (gitignored runtime state)
  -> extractAll() (audit-pipeline/extract.mjs — produces audit-data.json per artifact)
  -> Upload render.png to R2 (audit-pipeline/media.mjs, 3-try backoff)
  -> Upsert audit row into Postgres (audit-pipeline/publish.mjs)
  -> Write persona vault markdown (vaults/{persona}/audits/{slug}.md)
  -> git push vaults/ to main   (vault markdown only — site reads from DB)
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
| `CLAUDE_EFFORT` | Claude effort level | `high` (set to `medium` in `.env`) |
| `GH_TOKEN` | GitHub PAT for git push | — |
| `QA_LINK_MAX_PROBE` | Max links probed per email, after materiality ranking | `12` |
| `QA_LINK_BUDGET_S` | Wall-clock budget for link probing | `70` |
| `QA_DOMAIN_DELAY` | Seconds between requests to the same host | `2.0` |
| `QA_PROBE_WORKERS` | Parallel probe workers (same-host still serialized) | `4` |

### Link probing is materiality-ranked

`qa_checks.py` probes only the links a reader would plausibly click, ranked by
CTA anchor text, button styling, repetition and document position. Footer/utility
and social links are deprioritized; an unsubscribe link always keeps one slot
because a broken unsubscribe is a compliance problem.

This replaced probing up to 50 regex-scraped URLs (image srcs, CSS urls, pixels)
through a single worker at 4s/request — arithmetically ~225s against the caller's
120s timeout, so **QA timed out on every email and the entire report was
discarded**, which also meant the technical review ran without any QA findings.
Probing is now time-boxed: exceeding `QA_LINK_BUDGET_S` reports the remainder as
`info` (neither pass nor fail) instead of losing the report.

## Artifacts

Each processed email gets a directory in `reports/email-artifacts/{date}-{slug}/`:

- `message.json` — raw API response
- `message.html` / `message.txt` — email body
- `email-webview-render.png` — screenshot of rendered email
- `qa-report.json` — automated QA results
- `review.txt` — merged content + technical review
- `audit-data.json` — structured data extracted by `audit-pipeline/extract.mjs`

## Publishing

The live site is the Next.js app in `site/` (deployed to Vercel at `etell.app`). Publishing flow (post-foundation-refactor):

1. `extractAll()` (audit-pipeline/extract.mjs) parses each artifact's `review.txt` + `qa-report.json` into `audit-data.json` inside the artifact dir.
2. `publishSite({slug, persona, artifactDir})` in `index.mjs`:
   - Uploads `render.png` to R2 (`audits/{slug}/render.png`).
   - Validates `audit-data.json` against the shared zod schema (`site/lib/schema/audit.mjs`).
   - Upserts the row into the Postgres `audit` table via `audit-pipeline/publish.mjs`.
   - Writes the persona vault note (`vaults/{persona}/audits/{slug}.md`) + best-effort embedding.
   - `git push vaults/` — vault markdown is the only thing going to git. Vercel doesn't redeploy on new audits; site reads from Postgres on request.
3. Site reads audits via Drizzle in `site/lib/audits.ts`; R2 keys are resolved to short-lived signed URLs at render time.

**Shared with site-monitor:** `audit-pipeline/{extract,publish,media,vault-writer}.mjs`. Site journeys build their own `audit-data.json` directly in JS (no extract needed).

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
