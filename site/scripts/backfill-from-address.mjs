/**
 * Backfill `email_message.from_address` + `from_domain` and `audit.data.email.{from,
 * from_display_name}` for Cloudflare-fed rows that captured the SMTP envelope-
 * from instead of the visible RFC822 From: header.
 *
 * Why: cloudflare-email-worker/src/index.ts originally passed `message.from`
 * (envelope-from) through to /api/email/inbound. ESPs use VERP-style return
 * paths (`bounce-<id>@bounce.<domain>`), so audit cards displayed the bounce
 * subdomain instead of the friendly sender. The Worker now uses the visible
 * From header from postal-mime; this backfill rewrites historical rows so
 * the UI is consistent.
 *
 * Strategy: any `email_message` row with `raw_key IS NOT NULL` was Cloudflare-
 * fed. Pull the .eml from R2, regex out the From: header, update the row +
 * any linked audit. Skip rows whose from_address already looks correct
 * (contains a `<...>` angle-addr, meaning it was set with display+addr).
 *
 * Usage:
 *   cd site
 *   node --env-file=.env.local scripts/backfill-from-address.mjs           # dry run
 *   node --env-file=.env.local scripts/backfill-from-address.mjs --confirm
 */

import {
  S3Client,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";

const confirm = process.argv.includes("--confirm");
const limitArg = process.argv.find((a) => a.startsWith("--limit="));
const LIMIT = limitArg ? parseInt(limitArg.split("=")[1], 10) : null;

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

// Pull the visible From: header out of a raw .eml. Handles continuation
// lines (RFC 5322 §2.2.3 — header values may span lines if continuation
// lines start with WSP).
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

// Heuristic: a from_address that DOESN'T contain `<` AND has a known
// VERP-shaped pattern is a likely-broken envelope-from. We update *all*
// raw_key rows defensively (not just bounce.* ones), since the underlying
// bug was using envelope-from for every Cloudflare-fed row.
function looksLikeEnvelopeFrom(s) {
  if (!s) return false;
  if (s.includes("<")) return false; // already has display name
  return true;
}

async function main() {
  console.log(`mode: ${confirm ? "EXECUTE" : "dry-run"}${LIMIT ? ` · limit=${LIMIT}` : ""}\n`);

  const rows = await db.execute(sql`
    SELECT id, persona_slug, raw_key, from_address, from_domain
    FROM email_message
    WHERE raw_key IS NOT NULL
    ORDER BY received_at DESC
    ${LIMIT ? sql`LIMIT ${LIMIT}` : sql``}
  `);

  let inspected = 0;
  let needsUpdate = 0;
  let updated = 0;
  let auditTouched = 0;
  const failures = [];

  for (const row of rows.rows) {
    inspected++;
    if (!looksLikeEnvelopeFrom(row.from_address)) continue;

    let eml;
    try {
      eml = await fetchEml(row.raw_key);
    } catch (err) {
      failures.push({
        id: row.id,
        rawKey: row.raw_key,
        reason: `r2 fetch: ${String(err).slice(0, 120)}`,
      });
      continue;
    }
    const newFrom = extractFromHeader(eml);
    if (!newFrom) {
      failures.push({
        id: row.id,
        rawKey: row.raw_key,
        reason: "no From header",
      });
      continue;
    }
    if (newFrom === row.from_address) continue;

    needsUpdate++;
    const newAddr = extractAddress(newFrom).toLowerCase();
    const at = newAddr.lastIndexOf("@");
    const newDomain = at >= 0 ? newAddr.slice(at + 1) : "unknown";

    console.log(
      `${row.persona_slug}/${String(row.id).slice(0, 8)}  ${row.from_address.slice(0, 50)}  →  ${newFrom.slice(0, 60)}`
    );

    if (!confirm) continue;

    await db.execute(sql`
      UPDATE email_message
      SET from_address = ${newFrom}, from_domain = ${newDomain}
      WHERE id = ${row.id}
    `);
    updated++;

    // Find audits derived from this email. Audit slug typically encodes
    // the email; we cross-reference by audit.data.email matching the
    // message_id or by the timestamp window. Simplest reliable join:
    // `audit.data.email.from = OLD from_address` AND persona match.
    const auditUpdate = await db.execute(sql`
      UPDATE audit
      SET data = jsonb_set(
                   jsonb_set(data, '{email,from}', ${JSON.stringify(newFrom)}::jsonb),
                   '{email,from_display_name}',
                   ${JSON.stringify(parseDisplayName(newFrom))}::jsonb
                 ),
          updated_at = NOW()
      WHERE persona = ${row.persona_slug}
        AND type = 'email'
        AND data->'email'->>'from' = ${row.from_address}
    `);
    auditTouched += auditUpdate.rowCount ?? 0;
  }

  console.log(
    `\nsummary: inspected=${inspected} needsUpdate=${needsUpdate} updated=${updated} auditsTouched=${auditTouched} failures=${failures.length}`
  );
  if (failures.length) {
    console.log("first few failures:");
    for (const f of failures.slice(0, 5)) {
      console.log(" ", f.id, f.rawKey, "—", f.reason);
    }
  }
  if (!confirm) console.log("\n(dry run — pass --confirm to execute)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
