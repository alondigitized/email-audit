# openclaw-walker — Architecture

A single-glance map of **this setup**: the openclaw-walker runtime at
`~/.openclaw-walker/`, the workspace subprojects that live inside it, and every
external service they touch.

## Quick start for a new Claude session

Working directory is always `~/.openclaw-walker/workspace/`. The repo deploys to
**https://etell.app** (prod; also reachable at `https://email-audit-weld.vercel.app`),
gated by Auth.js v5 magic-link — allowlist-only, no self-signup.

**The live site is the Next.js app in `site/`.** Anything that should appear on
the live site must change `site/`. Common pitfall: there is no static site
generator anymore — the only build system is `next build`, run by Vercel after
each push to `main`.

**The audit pipeline writes to `site/`, doesn't live in it.** Two LaunchAgent
daemons produce the content:

| Producer | Lives in | Triggers | What it makes |
|---|---|---|---|
| `email-monitor` | `email-monitor/` | every 3 min poll | reviews of marketing emails from `walker@agentmail.to` |
| `site-monitor` | `site-monitor/` | daily 06:00 UTC | Playwright site-journey reviews on Skechers.com |

Both share `audit-pipeline/`:

- `audit-pipeline/extract.mjs` — converts raw artifacts → `audit-data.json` (used only by email-monitor; site-monitor builds its own in JS). Ported from Python in foundation P5.
- `audit-pipeline/publish.mjs` — shared DB writer (`upsertAuditRow`) + media-key helpers.
- `audit-pipeline/media.mjs` — R2 upload with retry.
- `audit-pipeline/vault-writer.mjs` — writes per-persona vault markdown + embedding.
- `audit-pipeline/published-audits.json` — daemon-local manifest (gitignored).

After producing `audit-data.json`, the daemons upload media to R2, upsert the
audit into Postgres (`audit` table), write a vault markdown note, and
`git push vaults/` to main. The live site reads audits from Postgres on
request — Vercel does NOT redeploy on each new audit.

**To change daemon code, you must restart its LaunchAgent** — both daemons run
in-memory until restarted. See `email-monitor/CLAUDE.md` and
`site-monitor/CLAUDE.md` for restart commands and per-daemon details.

**The `site/` Next.js app is also unusual** — see `site/AGENTS.md` (Next.js 16 with
Turbopack and breaking changes from training-data conventions).

**End-to-end pipeline test:** `cd email-monitor && node verify-pipeline.mjs` —
sends a mock email through the full flow, verifies it appears on the live site,
then cleans up. Takes ~80 seconds when healthy.


## Diagram

```mermaid
flowchart LR
  %% ================= EXTERNAL =================
  subgraph EXT["🌐 External"]
    direction TB
    USER(("👤 User"))
    TGAPI["Telegram<br/>Bot API"]
    CODEX["openai-codex<br/>GPT-5.4 (OAuth)"]
    AGMAIL["AgentMail<br/>walker@agentmail.to"]
    SKX["Skechers.com"]
    CLAUDE["Claude<br/>sonnet · high effort"]
    GH["GitHub<br/>origin/main"]
    VRCL["Vercel<br/>etell.app"]
    CHROME["Chrome<br/>CDP :18795<br/>profile: my-chrome"]
  end

  %% ================= RUNTIME =================
  subgraph RT["🦾 ~/.openclaw-walker (runtime)"]
    direction TB

    CFG["openclaw.json<br/>(+ .bak rotations)"]
    CLI["openclaw CLI<br/>bash · zsh · fish · ps1 completions"]

    subgraph GW["Gateway :18792 — HTTP + WS, token auth"]
      HTTP["HTTP / WebSocket<br/>ACP endpoints"]
      CANVAS["Canvas host<br/>/__openclaw__/canvas/"]
    end

    subgraph IDP["Identity & Pairing"]
      DEVJSON["identity/<br/>device.json — Ed25519<br/>device-auth.json — operator token"]
      PAIR["devices/<br/>paired.json · pending.json<br/>probe + control-ui"]
    end

    subgraph AGENT["Agent Engine"]
      AUTH["agents/main/agent/<br/>auth-profiles.json · models.json"]
      SESS["agents/main/sessions/<br/>*.jsonl + sessions.json"]
    end

    subgraph CHAN["Channels"]
      TGIN["Telegram adapter<br/>update-offset · command-hash"]
      DQ[["delivery-queue/<br/>(+ failed/ DLQ)"]]
      MED[("media/inbound/<br/>jpg · mp4 · ogg + .txt transcripts")]
    end

    MEMDB[("memory/main.sqlite")]
    CRON["cron/jobs.json"]
    LOGS["logs/<br/>gateway.log · gateway.err.log<br/>config-audit.jsonl · config-health.json"]
  end

  %% ================= WORKSPACE =================
  subgraph WS["📂 ~/.openclaw-walker/workspace — git repo"]
    direction TB

    subgraph HOMEDOCS["Agent 'home' files"]
      HOME["AGENTS.md · SOUL.md<br/>IDENTITY.md · USER.md<br/>TOOLS.md · HEARTBEAT.md"]
      WMEM["memory/<br/>YYYY-MM-DD.md · MEMORY.md"]
    end

    subgraph EM["email-monitor/ — LaunchAgent com.walker.agentmail-monitor · polls every 3 min"]
      EMDAEMON["index.mjs<br/>poll · process · publish"]
      EMSTATE["state.json<br/>processed · inFlight · failed"]
      QA["qa_checks.py"]
      RENDER["scripts/<br/>Swift screenshot renderer"]
    end

    subgraph SM["site-monitor/ — LaunchAgent ai.openclaw.walker.site-review · daily 06:00 UTC"]
      SMDAEMON["site-review.mjs<br/>Playwright 9-step journey"]
      PERSONA["personas/walker.json"]
      COOK["cookies/walker-skechers.json"]
      HIST["history/walker-latest.json<br/>prior-day score"]
    end

    subgraph EA["audit-pipeline/ — shared by both monitors"]
      GENSITE["extract.mjs<br/>(raw artifacts → audit-data.json)"]
      MANIFEST["published-audits.json<br/>(daemon-local manifest, gitignored)"]
      PUBLISH["publish.mjs<br/>upsert into Postgres audit table"]
      MEDIA["media.mjs<br/>upload to R2"]
      VAULT["vault-writer.mjs<br/>persona markdown + pgvector embed"]
    end

    REPORTS[("reports/<br/>email-artifacts/<br/>site-artifacts/")]

    subgraph SITE["site/ — Next.js, deployed to Vercel"]
      NEXT["Next.js app<br/>lib/audits.ts reads from Neon audit table<br/>lib/storage/r2.ts signs R2 URLs at render"]
    end
  end

  %% ============ CHAT FLOW ============
  USER -- "messages" --> TGAPI
  TGAPI -- "getUpdates" --> TGIN
  TGIN --> HTTP
  HTTP --> SESS
  SESS <--> AUTH
  AUTH -- "completion" --> CODEX
  CODEX -- "tokens" --> AUTH
  SESS --> DQ
  DQ -- "sendMessage" --> TGAPI
  TGAPI -- "delivers" --> USER

  TGIN -. "attachments" .-> MED
  SESS -. "reads" .-> MED

  %% ============ CONTROL PLANE ============
  HTTP <--> DEVJSON
  HTTP <--> PAIR
  CLI <--> HTTP
  CFG --> HTTP
  HTTP --> LOGS

  %% ============ AGENT PERSISTENCE ============
  SESS <--> MEMDB
  SESS <--> WMEM
  SESS -. "reads each session" .-> HOME
  CRON --> SESS
  HOME -. "heartbeat loop" .-> SESS

  %% ============ CANVAS + BROWSER ============
  SESS -- "writes HTML" --> CANVAS
  SESS -- "CDP" --> CHROME

  %% ============ EMAIL-MONITOR PIPELINE ============
  AGMAIL -- "poll — pageToken / after=lastSuccess" --> EMDAEMON
  EMDAEMON <--> EMSTATE
  EMDAEMON -- "html · txt · webview" --> REPORTS
  EMDAEMON --> RENDER
  EMDAEMON --> QA
  RENDER -- "email-webview-render.png" --> REPORTS
  QA -- "qa-report.json" --> REPORTS
  EMDAEMON -- "content review from screenshot<br/>technical review from HTML+QA" --> CLAUDE
  CLAUDE -- "review.txt" --> EMDAEMON
  EMDAEMON --> MANIFEST
  EMDAEMON --> GENSITE
  GENSITE -- "audit-data.json" --> REPORTS
  EMDAEMON -- "sync audit.json + render.png" --> NEXT
  EMDAEMON -- "git push main" --> GH
  GH -- "webhook" --> VRCL
  VRCL -- "deploy" --> NEXT

  %% ============ SITE-MONITOR PIPELINE ============
  SMDAEMON -- "Playwright — CDP :9222 / stealth fallback" --> SKX
  SMDAEMON --> PERSONA
  SMDAEMON <--> COOK
  SMDAEMON <--> HIST
  SMDAEMON -- "screenshots · metrics · axe · errors" --> REPORTS
  SMDAEMON -- "content + technical review<br/>(+ prior-day score)" --> CLAUDE
  CLAUDE -- "review.txt" --> SMDAEMON
  SMDAEMON --> MANIFEST
  SMDAEMON --> GENSITE
  SMDAEMON -- "sync audits" --> NEXT
  SMDAEMON -- "git push main" --> GH

  %% ============ STYLING ============
  classDef ext fill:#fef3c7,stroke:#f59e0b,color:#78350f;
  classDef rt  fill:#dbeafe,stroke:#3b82f6,color:#1e3a8a;
  classDef ws  fill:#dcfce7,stroke:#22c55e,color:#14532d;
  class USER,TGAPI,CODEX,AGMAIL,SKX,CLAUDE,GH,VRCL,CHROME ext;
  class HTTP,CANVAS,DEVJSON,PAIR,AUTH,SESS,TGIN,DQ,MED,MEMDB,CRON,LOGS,CLI,CFG rt;
  class HOME,WMEM,EMDAEMON,EMSTATE,QA,RENDER,SMDAEMON,PERSONA,COOK,HIST,GENSITE,MANIFEST,REPORTS,NEXT ws;
```

## Legend

| Color | Zone | What lives here |
|---|---|---|
| 🟡 Amber | **External** | Services and actors outside this machine (or outside the openclaw process tree) |
| 🔵 Blue | **Runtime** | Everything under `~/.openclaw-walker/` that the openclaw process manages |
| 🟢 Green | **Workspace** | Everything under `~/.openclaw-walker/workspace/` — the agent's gitted "home" and its subprojects |

Shape conventions:

- `(( circle ))` — human actor
- `[ box ]` — process, adapter, or config file
- `([ cylinder ])` — datastore (sqlite, file collections)
- `[[ queue ]]` — queue with a DLQ

Line conventions:

- Solid arrow — primary request/response flow
- Dotted arrow — out-of-band read or loose coupling

## Notable facts (not obvious from the diagram)

- **Gateway is local-only.** Binds to `127.0.0.1:18792`, token auth from
  `openclaw.json` (`gateway.auth.token`). Remote URL is the same loopback —
  there is no public endpoint.
- **Two paired devices** in `devices/paired.json`:
  - `openclaw-probe` (clientMode `probe`) — full operator scopes:
    `admin · read · write · approvals · pairing`.
  - `openclaw-control-ui` (clientMode `webchat`) — scoped down to
    `admin · approvals · pairing` only.
- **Telegram channel policy**: DM `open`, group `allowlist`, `allowFrom: "*"`.
  Streaming mode `partial`. Bot token lives in `openclaw.json` under
  `channels.telegram.botToken`.
- **Two different LLMs in one setup** — this is the thing that catches you off
  guard:
  - The **walker agent** (the thing you chat with on Telegram) runs on
    `openai-codex/gpt-5.4` via OAuth.
  - The **monitor daemons** (`email-monitor`, `site-monitor`) call **Claude
    sonnet** at `high` effort for their reviews. They don't go through the
    gateway or the agent engine at all.
- **Monitor daemons are independent of the gateway.** Both run as user
  LaunchAgents (`~/Library/LaunchAgents/com.walker.agentmail-monitor.plist`,
  `~/Library/LaunchAgents/ai.openclaw.walker.site-review.plist`). If you stop
  the openclaw gateway, they keep running. They share data with the gateway
  only via the filesystem (`workspace/reports/`, `workspace/audit-pipeline/`,
  `workspace/site/content/`).
- **`cron/jobs.json` is currently empty** (`{"version":1,"jobs":[]}`). Periodic
  behavior today is: LaunchAgents for the two monitor daemons, plus the
  heartbeat loop described in `workspace/AGENTS.md` / `workspace/HEARTBEAT.md`
  for conversational check-ins.
- **Canvas host** serves any HTML the agent drops into
  `~/.openclaw-walker/canvas/` at
  `http://127.0.0.1:18792/__openclaw__/canvas/`.
- **Browser skill** uses an existing Chrome session at
  `http://127.0.0.1:18795` (profile `my-chrome`) — that's a real Chrome with
  user cookies, not a headless one.
- **Media attachments** from Telegram land in `media/inbound/`. Voice notes
  already have a `.ogg.txt` transcript written alongside the audio by whatever
  transcription step runs in the ingest path.
- **Email-monitor publishing is Postgres-driven.** Each processed email upserts
  into the Neon `audit` table, uploads media to R2, and writes a vault
  markdown note. Only the vault commit goes to git; Vercel does NOT
  redeploy on each new audit (the site reads from the DB on request).
- **Site-monitor is idempotent per day.** It checks
  `audit-pipeline/published-audits.json` (daemon-local) for today's slug before
  running; won't double-publish if relaunched.
- **The site is gated** server-side by Auth.js v5 magic-link in `site/auth.ts`;
  `site/proxy.ts` enforces the session on every request. Allowlist-only (no
  self-signup).

## Source files this was derived from

If any of this gets stale, these are the files to re-read when refreshing the
diagram:

- Runtime config / identity:
  - `openclaw.json` (+ `.bak` rotations)
  - `identity/device.json`, `identity/device-auth.json`
  - `devices/paired.json`, `devices/pending.json`
  - `cron/jobs.json`
- Agent home docs:
  - `workspace/AGENTS.md`, `workspace/HEARTBEAT.md`
  - `workspace/SOUL.md`, `workspace/IDENTITY.md`, `workspace/USER.md`,
    `workspace/TOOLS.md`
- Subproject CLAUDE.md files:
  - `workspace/email-monitor/CLAUDE.md`
  - `workspace/site-monitor/CLAUDE.md`
  - `workspace/site/CLAUDE.md`
- CLI surface:
  - `completions/openclaw.bash` (full subcommand tree)
