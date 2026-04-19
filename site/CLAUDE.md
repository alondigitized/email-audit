@AGENTS.md

# Site (Next.js 16 on Vercel)

Multi-tenant experience-intelligence frontend at **etell.app** (Vercel prod; also deployed at `email-audit-weld.vercel.app`).

## Data flow

Audit content is stored in Postgres (Neon) as of the foundation refactor:

- `audit` table — slug PK, persona, type, timestamp, score, data JSONB, media_keys JSONB. Written by the daemons (email-monitor, site-monitor) via `audit-pipeline/publish.mjs`. Read by `site/lib/audits.ts` through Drizzle, persona-filtered.
- R2 (Cloudflare) — screenshots. Keys live in `audit.data.assets.*_key`; the site mints 15-min signed URLs at render time via `site/lib/storage/r2.ts`.
- `site/content/analysis/{slug}/report.json` — ad-hoc analysis reports (still filesystem, persona-gated via `personas` field on the report).
- `vaults/{persona}/audits/{slug}.md` — persona brain markdown (git-tracked, read by Obsidian, embedded for chat retrieval).

New audits land via a daemon DB insert; Vercel does NOT redeploy on each one (the site reads fresh on request). Deploys only fire for code changes.

## Auth

- Auth.js v5 magic-link login, database session strategy, 30-day absolute + 7-day idle.
- Allowlist-only; `site/auth.ts` disables adapter auto-create.
- `proxy.ts` gates every request behind an authenticated session.
- Per-persona ACL via `userPersona` table; admin bypass via `user.isAdmin`.

## Key libs

| Path | Role |
|---|---|
| `lib/audits.ts` | Drizzle queries against `audit` table, persona-filtered, zod-validated on read |
| `lib/schema/audit.{mjs,ts}` | Canonical zod schema (shared with producer daemons) |
| `lib/db/schema.ts` | Drizzle schema |
| `lib/dal.ts` | `requireUser`, `requireAdmin` |
| `lib/personas-db.ts` | Persona CRUD |
| `lib/chat/` | Chat retrieval (pgvector top-K), thread CRUD, prompt assembly |
| `lib/storage/r2.ts` | R2 S3 client + signed URL helper |
| `lib/analysis.ts` | Filesystem-backed analysis reports, persona-gated |
| `lib/analytics.ts` | Page view + sign-in event recording |

## Schema migrations

Drizzle. Add to `lib/db/schema.ts`, run `npx drizzle-kit generate` to produce SQL in `drizzle/`. Apply with `DATABASE_URL=... npx drizzle-kit migrate`. Migrate the preview Neon branch first, then prod.
