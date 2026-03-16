# Walker Email Monitor

Polls AgentMail for inbound email on `walker@agentmail.to`, runs automated QA checks, generates a Claude-powered audit review, produces a PDF report, publishes to the audit site (GitHub Pages), and delivers results via Telegram.

## Pipeline

For each new message, the service executes these steps in order:

1. **Poll AgentMail** for new messages via `client.inboxes.messages.list` (HTTP polling)
2. **Save artifacts** — JSON, HTML, plain text, extracted URLs, webview URL to `reports/email-artifacts/<slug>/`
3. **Run QA checks** — `qa_checks.py` performs automated link, rendering, personalization, and compliance checks
4. **Generate review** — `claude -p --model sonnet --effort high` produces a structured audit review (QA findings are included in the prompt)
5. **Send review text to Telegram** via `openclaw message send`
6. **Render webview screenshot** — Swift script (`render_web_url.swift`) captures the hosted email, if a webview URL is available
7. **Generate PDF report** — `generate_review_pdf.py` (ReportLab) combines the review, artifacts, screenshot, and QA findings into a one-page PDF
8. **Update manifest** — appends entry to `published-audits.json`
9. **Publish audit site** — `generate_site.py` regenerates static HTML, then git push to GitHub Pages repo at `/tmp/email-audit`
10. **Send PDF to Telegram** via `openclaw message send --media`
11. **Mark message as processed** in `state.json`

## Files

| File | Purpose |
|------|---------|
| `index.mjs` | Main polling service |
| `qa_checks.py` | Automated QA checks (links, rendering, personalization, compliance) |
| `generate_review_pdf.py` | PDF report generator (ReportLab) |
| `state.json` | Tracks processed, in-flight, and failed message IDs |
| `.env` | Local secrets and config (not committed) |
| `package.json` | Node.js dependencies (agentmail, dotenv) |
| `logs/monitor.log` | Runtime log |
| `com.walker.agentmail-monitor.plist` | macOS launchd service definition |

## Configuration

Key environment variables (set in `.env`):

| Variable | Required | Default |
|----------|----------|---------|
| `AGENTMAIL_API_KEY` | Yes | — |
| `TELEGRAM_TARGET` | Yes | — |
| `GH_TOKEN` | Yes (for publish) | — |
| `CLAUDE_MODEL` | No | `sonnet` |
| `CLAUDE_EFFORT` | No | `high` |
| `POLL_INTERVAL_MS` | No | `15000` |
| `STARTUP_LOOKBACK` | No | `10` |
| `INBOX_ID` | No | `walker@agentmail.to` |
| `CLAUDE_BIN` | No | `/Users/alontsang/.local/bin/claude` |

## State Management

`state.json` maintains three arrays:

- **processedMessageIds** — successfully completed (capped at last 1000)
- **inFlightMessageIds** — currently being processed
- **failedMessageIds** — errored out; will not auto-retry

To reprocess a failed message, manually remove its ID from `failedMessageIds` in `state.json`.

## Run

```bash
cd workspace/email-monitor && node index.mjs
```

Requires `npm install` (Node.js deps) and `pip install reportlab` (PDF generation).
