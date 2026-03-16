# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

This is the OpenClaw state directory for **Walker**, an AI agent persona that acts as a secret shopper / digital auditor for Skechers US. Walker monitors inbound emails via AgentMail, reviews them, generates PDF audit reports, publishes an HTML audit site, and delivers results via Telegram. The agent is configured through OpenClaw and communicates on behalf of Alan Tsang (VP Global Digital Platforms, Skechers).

## Directory Layout

- `openclaw.json` — OpenClaw configuration (gateway, Telegram channel, auth, agent defaults)
- `workspace/` — the agent's working directory (git-tracked)
  - `SOUL.md` / `IDENTITY.md` / `USER.md` / `AGENTS.md` / `TOOLS.md` — agent persona, operating rules, and user context
  - `HEARTBEAT.md` — periodic heartbeat task checklist
  - `email-monitor/` — Node.js polling service that watches AgentMail for new emails
  - `email-audit/` — Python-based static site generator for published audit pages
  - `reports/` — generated PDF reports and `email-artifacts/` subdirectories per email
  - `skills/` — agent skills (e.g. `local-transcription/` for Whisper-based transcription)
  - `memory/` — daily memory notes (`YYYY-MM-DD.md`)
- `agents/main/` — agent session state
- `telegram/` — Telegram bot polling state
- `completions/` — shell completion scripts
- `identity/` — device identity JSON
- `logs/` — gateway and config audit logs
- `media/inbound/` — inbound media files
- `memory/main.sqlite` — persistent memory store
- `delivery-queue/` — message delivery queue

## Key Components

### Email Monitor (`workspace/email-monitor/`)

A Node.js service that polls AgentMail (HTTP) for new emails to `walker@agentmail.to`. For each new message it:
1. Saves email artifacts (HTML, text, JSON, URLs, webview URL)
2. Runs automated QA checks via `qa_checks.py` (links, rendering, personalization, compliance)
3. Generates a review via `claude -p` (Claude sonnet, high effort) — QA findings are included in the prompt
4. Sends the review text to Telegram via `openclaw message send`
5. Renders the email web-view as a screenshot via a Swift script
6. Generates a PDF report via `generate_review_pdf.py` (ReportLab, includes QA findings)
7. Updates `published-audits.json` manifest + publishes audit site via `generate_site.py` + git push
8. Sends the PDF to Telegram

**Run:** `cd workspace/email-monitor && node index.mjs`
**Env:** Requires `.env` with `AGENTMAIL_API_KEY`, `TELEGRAM_TARGET`, `GH_TOKEN`; optional `CLAUDE_MODEL`, `CLAUDE_EFFORT`, `POLL_INTERVAL_MS`, `STARTUP_LOOKBACK`
**State:** `state.json` tracks processed/in-flight/failed message IDs
**Deps:** `npm install` (agentmail, dotenv); `pip install reportlab` for PDF generation

### PDF Generator (`workspace/email-monitor/generate_review_pdf.py`)

Python script using ReportLab. Parses the review text into structured sections (executive summary, score, working/weak/recommendations/evidence/bottom line), combines with email artifacts and webview screenshot, outputs a one-page PDF.

**Run:** `python3 generate_review_pdf.py <review.txt> <artifacts-dir> <output.pdf>`
**Requires:** `reportlab` (`pip install reportlab`)

### Audit Site Generator (`workspace/email-audit/generate_site.py`)

Python script that reads `published-audits.json`, parses each review, and generates a static HTML index + per-audit detail pages. Output goes to `workspace/email-audit/` (index.html, audits/, assets/).

**Run:** `python3 workspace/email-audit/generate_site.py` (from workspace dir)

### Swift Renderers (`workspace/reports/email-artifacts/`)

- `render_web_url.swift` — screenshots a hosted email web-view URL
- `render_email.swift` — renders raw HTML email

### Local Transcription Skill (`workspace/skills/local-transcription/`)

Whisper-based local audio/video transcription. Uses `scripts/transcribe.py`.

**Run:** `python3 skills/local-transcription/scripts/transcribe.py /path/to/audio.ogg`

## OpenClaw CLI Patterns

Commands are invoked through the `openclaw` CLI with `--profile walker`:

```bash
openclaw --profile walker message send --channel telegram --target <target> --message "text"
openclaw --profile walker message send --channel telegram --target <target> --media /path/to/file
openclaw --profile walker agent <subcommand>
```

Config path: `~/.openclaw-walker/openclaw.json`
State dir: `~/.openclaw-walker/`

## Review Structure (Walker's Standard Format)

Every Skechers email review follows this structure:
1. Executive Summary
2. Business Impact Score (1-10)
3. What's Working
4. What's Weak
5. Recommendations
6. Bottom Line
7. Evidence (purpose, hero/value prop, membership, product discoverability, utility modules, email-to-site continuity, bugs/friction)

Both the PDF generator and site generator parse reviews expecting these section headers.

## Important Conventions

- Agent persona files (`SOUL.md`, `IDENTITY.md`, `USER.md`) define Walker's voice and audit scope — changes should be discussed with Alan
- `AGENTS.md` defines operating rules: session startup sequence, memory management, heartbeat behavior, group chat etiquette
- `TOOLS.md` contains the reporting SOP and environment-specific notes
- Reports use slug-based naming: `YYYY-MM-DD-<slugified-subject>-review.pdf`
- Email artifacts are saved per-message in `reports/email-artifacts/<slug>/` with message.json, message.html, message.txt, urls.txt, webview-url.txt
- The audit site is published via git push to a separate repo at `/tmp/email-audit`
- Use `trash` over `rm` for deletions (per AGENTS.md red lines)
