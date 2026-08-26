/**
 * Walk recent email_message rows and run tryConfirmSubscription on each.
 * Useful for:
 *  - Backfilling after the auto-confirm route hook ships (catches any
 *    confirmation email that already arrived but never had its link
 *    followed).
 *  - Re-running for a specific persona (--persona=<slug>) when debugging.
 *
 * Idempotent: GET-ing a Klaviyo confirm URL twice is a no-op.
 *
 * Usage:
 *   cd site && npx tsx --env-file=.env.local scripts/confirm-pending-subs.ts
 *   cd site && ... scripts/confirm-pending-subs.ts --persona=rae-l
 *   cd site && ... scripts/confirm-pending-subs.ts --hours=72
 */

import { eq, gte, and, desc } from "drizzle-orm";
import { db, emailMessages } from "@/lib/db/client";
import { tryConfirmSubscription } from "@/lib/subscriptions/confirm";

type Args = { personaSlug?: string; hoursBack: number };

function parseArgs(argv: string[]): Args {
  const out: Args = { hoursBack: 72 };
  for (const a of argv) {
    if (a.startsWith("--persona=")) out.personaSlug = a.slice("--persona=".length);
    else if (a.startsWith("--hours=")) out.hoursBack = Number(a.slice("--hours=".length));
    else if (a === "--help" || a === "-h") {
      console.log(`Usage: scripts/confirm-pending-subs.ts [--persona=SLUG] [--hours=N]`);
      process.exit(0);
    }
  }
  return out;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const since = new Date(Date.now() - args.hoursBack * 3600 * 1000);
  const where = args.personaSlug
    ? and(
        eq(emailMessages.personaSlug, args.personaSlug),
        gte(emailMessages.receivedAt, since)
      )
    : gte(emailMessages.receivedAt, since);
  const rows = await db
    .select({
      id: emailMessages.id,
      personaSlug: emailMessages.personaSlug,
      toAddress: emailMessages.toAddress,
      fromAddress: emailMessages.fromAddress,
      fromDomain: emailMessages.fromDomain,
      subject: emailMessages.subject,
      html: emailMessages.html,
      receivedAt: emailMessages.receivedAt,
    })
    .from(emailMessages)
    .where(where)
    .orderBy(desc(emailMessages.receivedAt))
    .limit(500);

  console.log(`scanning ${rows.length} email_message rows since ${since.toISOString()}${args.personaSlug ? ` for persona='${args.personaSlug}'` : ""}\n`);

  let confirmed = 0;
  let skippedNonConfirm = 0;
  let skippedOther = 0;
  for (const r of rows) {
    const result = await tryConfirmSubscription({
      fromAddress: r.fromAddress,
      fromDomain: r.fromDomain,
      toAddress: r.toAddress,
      subject: r.subject,
      html: r.html,
    });
    if (result.confirmed) {
      console.log(`  ✓ ${r.personaSlug}/${r.fromDomain} → ${result.url.slice(0, 80)}`);
      confirmed++;
    } else if (result.reason === "not a confirm email") {
      skippedNonConfirm++;
    } else {
      console.log(`  ✗ ${r.personaSlug}/${r.fromDomain}: ${result.reason} (subject=${(r.subject ?? "").slice(0, 60)})`);
      skippedOther++;
    }
  }
  console.log(`\nconfirmed: ${confirmed}`);
  console.log(`skipped (not a confirm email): ${skippedNonConfirm}`);
  console.log(`skipped (other reason): ${skippedOther}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
