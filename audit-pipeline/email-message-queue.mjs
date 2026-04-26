// Reads the cloudflare-routed inbound queue. The Cloudflare Worker drops
// each *@etell.app email into the email_message Postgres table via
// /api/email/inbound; this module is the daemon-side consumer.
//
// Independent of the legacy AgentMail polling — different ingress, same
// downstream audit pipeline. Personas with @agentmail.to inboxes still
// poll AgentMail directly; personas with @etell.app inboxes show up here.
//
// Env contract: DATABASE_URL_UNPOOLED preferred (the daemon can hold a
// long connection); falls back to DATABASE_URL.

import { neon } from '@neondatabase/serverless';

function dbUrl() {
  return process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL ?? '';
}

// Ordered ascending by received_at so older messages get processed first.
// Cap at `limit` per call to bound a single poll's latency — a backlog of
// 100 emails would otherwise take an hour of Claude review work.
export async function loadUnprocessedEmailMessages(limit = 20) {
  const u = dbUrl();
  if (!u) return [];
  const sql = neon(u);
  return sql`
    SELECT id, persona_slug, tenant_id, to_address, from_address, from_domain,
           subject, message_id, html, text_body, raw_key, received_at
    FROM email_message
    WHERE processed_at IS NULL
    ORDER BY received_at ASC
    LIMIT ${limit}
  `;
}

// Stamp processed_at + audit_slug on success. Idempotent: a row that's
// already been marked is unaffected (the WHERE clause excludes it from
// future loads).
export async function markEmailMessageProcessed(id, auditSlug) {
  const u = dbUrl();
  if (!u) return;
  const sql = neon(u);
  await sql`
    UPDATE email_message
    SET processed_at = NOW(), audit_slug = ${auditSlug}
    WHERE id = ${id}
  `;
}
