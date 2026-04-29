/**
 * Backfill the visible RFC822 From: header into Cloudflare-fed rows that
 * captured the SMTP envelope-from instead.
 *
 * Why: cloudflare-email-worker/src/index.ts originally passed Cloudflare's
 * `message.from` (envelope-from / Return-Path) through to /api/email/inbound.
 * ESPs use VERP-style return paths (`bounce-<id>@bounce.<domain>`), so
 * audits and the activity chart displayed the bounce subdomain instead of
 * the friendly sender. The Worker now uses the visible From via
 * postal-mime; this script rewrites historical rows so the UI is consistent.
 *
 * Tables touched (idempotent — only when the stored value still looks like
 * an envelope-from):
 *   - experience.email_data.{from, from_display_name}     ← v3 source of truth
 *   - experience.brand_domain                              ← chart legend key
 *   - experience.raw_key + .message_id                     ← link to source
 *   - email_message.from_address, .from_domain             ← legacy
 *   - audit.data.email.{from, from_display_name}           ← legacy JSON
 *
 * Anchor: experience rows that match an email_message row by persona_slug
 * + received_at proximity (within 60s). The audit-pipeline historically
 * never populated experience.raw_key / .message_id, so timestamp-proximity
 * is the only reliable join. After this backfill, those columns are
 * populated, so future runs can join cleanly on raw_key.
 *
 * Usage:
 *   cd site
 *   node --env-file=.env.local scripts/backfill-from-address.mjs           # dry run
 *   node --env-file=.env.local scripts/backfill-from-address.mjs --confirm
 */

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";

const confirm = process.argv.includes("--confirm");
const limitArg = process.argv.find((a) => a.startsWith("--limit="));
const LIMIT = limitArg ? parseInt(limitArg.split("=")[1], 10) : null;
// experience↔email_message timestamp tolerance. Daemon publish ran within
// minutes of the inbound webhook in practice; widen if you need to.
const MATCH_WINDOW_SECONDS = 60;

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});
const Bucket = process.env.R2_BUCKET;

const db = drizzle(
  neon(process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL)
);

function extractFromHeader(eml) {
  const headerEnd =
    eml.indexOf("\r\n\r\n") !== -1
      ? eml.indexOf("\r\n\r\n")
      : eml.indexOf("\n\n");
  const headers = headerEnd > 0 ? eml.slice(0, headerEnd) : eml;
  const m = headers.match(/^From:\s*([^\r\n]+(?:\r?\n[ \t][^\r\n]+)*)/im);
  return m ? m[1].replace(/\r?\n[ \t]+/g, " ").trim() : null;
}

function extractAddress(s) {
  const m = s.match(/<([^>]+)>/);
  return (m ? m[1] : s).trim();
}

function parseDisplayName(fromAddr) {
  if (!fromAddr) return "Unknown";
  const m = fromAddr.match(/^"?([^"<]+)"?\s*</);
  return m ? m[1].trim() : fromAddr;
}

async function fetchEml(rawKey) {
  const got = await s3.send(new GetObjectCommand({ Bucket, Key: rawKey }));
  const buf = Buffer.from(await got.Body.transformToByteArray());
  return buf.toString("utf8");
}

function looksLikeEnvelopeFrom(s) {
  if (!s) return false;
  return !s.includes("<");
}

async function main() {
  console.log(
    `mode: ${confirm ? "EXECUTE" : "dry-run"}${LIMIT ? ` · limit=${LIMIT}` : ""}\n`
  );

  // Anchor on experience rows whose stored from-line still looks broken
  // AND that have a matching email_message within MATCH_WINDOW_SECONDS
  // (i.e. were Cloudflare-fed, not AgentMail-fed). AgentMail rows
  // legitimately store bare addresses like `walker@agentmail.to` without
  // angle brackets — including them in the scan would create false
  // "no R2 source" noise.
  const expRows = await db.execute(sql`
    SELECT
      e.id              AS exp_id,
      e.persona_slug    AS persona_slug,
      e.received_at     AS received_at,
      e.email_data->>'from'               AS exp_from,
      e.email_data->>'from_display_name'  AS exp_display
    FROM experience e
    WHERE
      (e.email_data->>'from' IS NULL
       OR e.email_data->>'from' NOT LIKE '%<%')
      AND EXISTS (
        SELECT 1 FROM email_message m
        WHERE m.persona_slug = e.persona_slug
          AND m.raw_key IS NOT NULL
          AND ABS(EXTRACT(EPOCH FROM (m.received_at - e.received_at))) <= ${MATCH_WINDOW_SECONDS}
      )
    ORDER BY e.received_at DESC
    ${LIMIT ? sql`LIMIT ${LIMIT}` : sql``}
  `);

  let inspected = 0;
  let needsUpdate = 0;
  let experienceUpdated = 0;
  let emailMessageUpdated = 0;
  let auditUpdated = 0;
  const failures = [];

  for (const row of expRows.rows) {
    inspected++;
    const fromValue = row.exp_from ?? row.exp_display;
    if (!looksLikeEnvelopeFrom(fromValue)) continue;

    // Find the matching email_message row by persona + timestamp window.
    // Prefer the row whose received_at is closest to the experience's.
    const msgRows = await db.execute(sql`
      SELECT id, raw_key, message_id, received_at
      FROM email_message
      WHERE persona_slug = ${row.persona_slug}
        AND raw_key IS NOT NULL
        AND ABS(EXTRACT(EPOCH FROM (received_at - ${row.received_at}::timestamptz))) <= ${MATCH_WINDOW_SECONDS}
      ORDER BY ABS(EXTRACT(EPOCH FROM (received_at - ${row.received_at}::timestamptz))) ASC
      LIMIT 1
    `);
    const msg = msgRows.rows[0];
    if (!msg) {
      failures.push({
        id: row.exp_id,
        reason: `no email_message within ±${MATCH_WINDOW_SECONDS}s of ${row.received_at}`,
      });
      continue;
    }

    let eml;
    try {
      eml = await fetchEml(msg.raw_key);
    } catch (err) {
      failures.push({
        id: row.exp_id,
        rawKey: msg.raw_key,
        reason: `r2 fetch: ${String(err).slice(0, 120)}`,
      });
      continue;
    }
    const newFrom = extractFromHeader(eml);
    if (!newFrom) {
      failures.push({
        id: row.exp_id,
        rawKey: msg.raw_key,
        reason: "no From header",
      });
      continue;
    }
    if (newFrom === row.exp_from) continue;

    needsUpdate++;
    const newDisplay = parseDisplayName(newFrom);
    const newAddr = extractAddress(newFrom).toLowerCase();
    const at = newAddr.lastIndexOf("@");
    const newDomain = at >= 0 ? newAddr.slice(at + 1) : "unknown";

    console.log(
      `${row.persona_slug}/${String(row.exp_id).slice(0, 8)}  ${String(fromValue).slice(0, 50)}  →  ${newFrom.slice(0, 60)}`
    );

    if (!confirm) continue;

    // 1. experience: rewrite email_data + brand_domain. Also populate
    //    raw_key + message_id so future joins skip the timestamp dance.
    const expRes = await db.execute(sql`
      UPDATE experience
      SET email_data = jsonb_set(
                         jsonb_set(
                           COALESCE(email_data, '{}'::jsonb),
                           '{from}',
                           ${JSON.stringify(newFrom)}::jsonb
                         ),
                         '{from_display_name}',
                         ${JSON.stringify(newDisplay)}::jsonb
                       ),
          brand_domain = ${newDomain},
          raw_key = COALESCE(raw_key, ${msg.raw_key}),
          message_id = COALESCE(message_id, ${msg.message_id}),
          updated_at = NOW()
      WHERE id = ${row.exp_id}
    `);
    if ((expRes.rowCount ?? 0) > 0) experienceUpdated++;

    // 2. email_message: rewrite from_address + from_domain.
    const msgRes = await db.execute(sql`
      UPDATE email_message
      SET from_address = ${newFrom}, from_domain = ${newDomain}
      WHERE id = ${msg.id}
    `);
    emailMessageUpdated += msgRes.rowCount ?? 0;

    // 3. audit: rewrite legacy data.email.{from, from_display_name} for
    //    rows whose JSON still has the old value. Best-effort.
    const auditRes = await db.execute(sql`
      UPDATE audit
      SET data = jsonb_set(
                   jsonb_set(data, '{email,from}', ${JSON.stringify(newFrom)}::jsonb),
                   '{email,from_display_name}',
                   ${JSON.stringify(newDisplay)}::jsonb
                 ),
          updated_at = NOW()
      WHERE persona = ${row.persona_slug}
        AND type = 'email'
        AND (
          data->'email'->>'from' = ${row.exp_from ?? ""}
          OR data->'email'->>'from_display_name' = ${row.exp_display ?? ""}
        )
    `);
    auditUpdated += auditRes.rowCount ?? 0;
  }

  console.log(
    `\nsummary: inspected=${inspected} needsUpdate=${needsUpdate} ` +
      `experience=${experienceUpdated} email_message=${emailMessageUpdated} ` +
      `audit=${auditUpdated} failures=${failures.length}`
  );
  if (failures.length) {
    console.log("first few failures:");
    for (const f of failures.slice(0, 5)) {
      console.log(" ", f.id, f.rawKey ?? "—", "—", f.reason);
    }
  }
  if (!confirm) console.log("\n(dry run — pass --confirm to execute)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
