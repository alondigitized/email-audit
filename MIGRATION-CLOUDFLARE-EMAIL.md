# Migrating persona inboxes from AgentMail to Cloudflare Email Routing

We're replacing AgentMail (3-inbox cap on current plan, per-inbox API
provisioning) with Cloudflare Email Routing + a Worker (no cap, $0,
catch-all delivery to `*@etell.app`).

This migration is split into three deploys to keep blast radius small:

1. **DNS + Worker** (this PR) — DNS to Cloudflare, Email Routing on, Worker
   posting to `/api/email/inbound`. Existing AgentMail keeps running in
   parallel; nothing in prod changes for Walker / Martha / Calvin yet.
2. **New signups use Cloudflare** — wizard's `commitPersonaAction` already
   uses `generateInboxAddress()` (this PR). First public signup gets
   `<slug>@etell.app` automatically.
3. **Migrate existing personas** (follow-up PR) — daemon (`email-monitor`)
   reads from `email_message` table instead of polling AgentMail. Walker /
   Martha / Calvin profiles updated to `<slug>@etell.app`. AgentMail
   inboxes deleted, SDK + env var removed.

## Phase 1 — DNS to Cloudflare (you, ~30 min + propagation)

The registrar stays Vercel; only DNS service moves.

1. **Snapshot current DNS at Vercel.** Vercel → Domains → `etell.app` →
   copy every record (A/AAAA/CNAME/TXT/MX/NS) into a local note. Pay
   attention to:
   - Vercel's apex A/AAAA records.
   - `www` CNAME to the Vercel deploy.
   - Any TXT records for Resend (SPF, DKIM, DMARC). These keep magic-link
     emails out of spam.
   - Anything for the Tailscale Funnel exposing your local Ollama (chat
     models for Phase C wizard research).

2. **Add `etell.app` to Cloudflare** at https://dash.cloudflare.com → Add
   site. Pick the Free plan. Cloudflare auto-imports records from public
   DNS. Compare against your snapshot — manually add anything missing.

3. **Update nameservers at Vercel.** Vercel → Domains → `etell.app` →
   Nameservers → "Use custom nameservers" → paste the two NS values
   Cloudflare gave you (e.g. `ada.ns.cloudflare.com`).

4. **Verify propagation.** `dig NS etell.app` should return Cloudflare's
   nameservers. Typically 5–60 minutes; can be up to 24h.

5. **Test outbound mail still works.** Send yourself a magic link via
   `/login`; it should land in your inbox, not spam. If SPF/DKIM are
   misaligned, fix the TXT records on the Cloudflare side before moving on.

## Phase 2 — Email Routing in Cloudflare (you, ~10 min)

1. Cloudflare dashboard → `etell.app` zone → **Email** → **Email Routing**
   → Enable.
2. Cloudflare auto-creates the MX records (`mx.cloudflare.email` etc).
   Don't reject them.
3. **Routing rules** → **Catch-all** → action: **Send to a Worker**. Save
   the rule with a placeholder Worker; we'll deploy the real Worker next.

## Phase 3 — Deploy the Worker (you, ~15 min)

The Worker source lives at `cloudflare-email-worker/`.

```bash
cd cloudflare-email-worker
npm install
npx wrangler login                          # one-time OAuth
npx wrangler secret put INBOUND_WEBHOOK_URL  # value: https://www.etell.app/api/email/inbound
npx wrangler secret put INBOUND_WEBHOOK_SECRET  # generate with: openssl rand -hex 32
npm run deploy
```

Then back in the Cloudflare dashboard: **Email Routing → Catch-all →
Action: Send to a Worker → choose `etell-inbound`** → Save.

## Phase 4 — Set the matching secret on Vercel (you, ~2 min)

The site needs the same `INBOUND_WEBHOOK_SECRET` to verify the Worker's
Authorization header.

```bash
cd site
vercel env add INBOUND_WEBHOOK_SECRET production
# paste the same hex value you used for the Worker
vercel env add INBOUND_WEBHOOK_SECRET preview
# paste the same value
```

Trigger a redeploy so the new env is picked up:

```bash
git commit --allow-empty -m "redeploy: pick up INBOUND_WEBHOOK_SECRET"
git push
```

## Phase 5 — Smoke test (you + me, ~5 min)

1. From any normal email account, send a test message to
   `synthetic-test@etell.app`.
2. Watch the Worker logs: `npx wrangler tail` (in `cloudflare-email-worker/`).
3. Watch the site's inbound endpoint: Vercel dashboard → Functions tab →
   `api/email/inbound` → recent invocations. Should see a 200 with
   `{ ok: true, dropped: true }` (no persona maps to that recipient yet).
4. Check the DB: nothing inserted into `email_message` because there's no
   matching persona. That's expected.

To do an end-to-end test with a real persona:

```bash
cd site
# clean state
npx tsx --env-file=.env.local scripts/reset-test-tenant.ts -- alan.tsang@skechers.com --confirm

# create a fresh persona via the wizard at /signup, OR drive it programmatically:
npx tsx --env-file=.env.local scripts/test-signup-flow.ts --leave
# (--leave preserves state so you can email the persona's inbox)

# send a test email to the persona's address — find it in the script output
# under "persona has agentmail.inbox_id" line, value will be something like
# alan-emily-t-xxxx@etell.app

# observe email_message row arrived:
node --env-file=.env.local -e "
  const { neon } = require('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL_UNPOOLED);
  sql\`SELECT to_address, subject, received_at FROM email_message ORDER BY received_at DESC LIMIT 5\`.then(r => console.log(r));
"
```

## Phase 6 — Daemon refactor (follow-up PR, deferred)

Currently `email-monitor/index.mjs` polls AgentMail. After this PR's
landing pad is verified, we'll:

- Replace the AgentMail polling loop with a Postgres poll on
  `email_message WHERE processed_at IS NULL`.
- Migrate Walker / Martha / Calvin profiles from `<slug>@agentmail.to` to
  `<slug>@etell.app`. Brand newsletter subscriptions on the AgentMail
  addresses can stay during the cutover; we'll let them age out.
- Delete AgentMail SDK from `package.json`, `lib/agentmail.ts`,
  `AGENTMAIL_API_KEY` env var.

That work doesn't ship in this PR — keeps the cutover surface manageable.

## Failure modes + recovery

- **Nameserver change breaks www.etell.app.** Cloudflare's CDN is on by
  default for the apex record, which can cause cert problems with Vercel.
  Fix: in Cloudflare DNS, set the apex/www records to "DNS only" (gray
  cloud, not orange) so traffic still flows direct to Vercel.
- **Magic-link emails go to spam after migration.** SPF/DKIM/DMARC TXT
  records didn't copy over. Re-add them in Cloudflare DNS. Test with
  https://www.mail-tester.com.
- **Worker returns 401.** `INBOUND_WEBHOOK_SECRET` mismatch between
  Worker and site. Re-set both to the same value.
- **Worker times out.** Cloudflare Workers have a 30s wall-clock budget.
  Unlikely to be hit by a single small email, but possible for
  multi-megabyte HTML attachments. The site's response should be fast (<1s).
