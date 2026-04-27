/**
 * One-shot backfill for the v3 experience/reaction split.
 *
 * For every existing `audit` row, produce:
 *   1. one `experience` row (brand-side facts: email metadata, qa,
 *      assets, performance, type)
 *   2. one `reaction` row (persona-side: score, review_data, slug)
 *
 * For every existing `audit_embedding` row, produce:
 *   1. one `reaction_embedding` row pointing at the matching reaction
 *      (matched via reaction.slug = audit.slug = audit_embedding.audit_slug)
 *
 * The legacy `audit` and `audit_embedding` tables stay UNTOUCHED — they
 * remain the live read path until XR-D flips the site over. Idempotent:
 * re-running skips slugs that already have a reaction.
 *
 * Usage:
 *   cd site && npx tsx --env-file=.env.local scripts/backfill-experience-reaction.ts
 *   cd site && ... --confirm                  # apply (default is dry-run)
 *   cd site && ... --persona=walker --confirm # scope to one persona
 *   cd site && ... --limit=10 --confirm       # process N rows then stop
 *
 * Safety:
 *   - Dry-run by default; --confirm required for any insert
 *   - Idempotent: existing reaction.slug skipped without error
 *   - No DELETE anywhere — additive only
 *   - Failures on a single row don't abort the batch (they log + skip)
 */

import { eq, asc } from "drizzle-orm";
import {
  db,
  audits,
  auditEmbedding,
  experiences,
  reactions,
  reactionEmbedding,
} from "@/lib/db/client";

type Args = {
  confirm: boolean;
  persona?: string;
  limit?: number;
  embeddingsOnly: boolean;
};

function parseArgs(argv: string[]): Args {
  const out: Args = { confirm: false, embeddingsOnly: false };
  for (const a of argv) {
    if (a === "--confirm") out.confirm = true;
    else if (a === "--embeddings-only") out.embeddingsOnly = true;
    else if (a.startsWith("--persona=")) out.persona = a.slice("--persona=".length);
    else if (a.startsWith("--limit=")) out.limit = Number(a.slice("--limit=".length));
    else if (a === "--help" || a === "-h") {
      console.log(`Usage: scripts/backfill-experience-reaction.ts [--persona=SLUG] [--limit=N] [--embeddings-only] [--confirm]`);
      process.exit(0);
    }
  }
  return out;
}

function brandDomainFromFrom(from: string | null | undefined): string | null {
  if (!from) return null;
  // "Brand <noreply@brand.com>" or "noreply@brand.com" or just "brand.com"
  const m = from.match(/[<\s]([^<>\s@]+@([^<>\s]+))[>\s]?$/) || from.match(/^([^<>\s@]+@([^<>\s]+))$/);
  if (m) {
    return m[2].toLowerCase().replace(/[>\s].*$/, "");
  }
  return null;
}

function deriveType(audit: { type: string | null }): "email" | "site" {
  return audit.type === "site" ? "site" : "email";
}

async function backfillAudits(args: Args): Promise<{ written: number; skipped: number }> {
  let written = 0;
  let skipped = 0;

  let q = db
    .select({
      slug: audits.slug,
      persona: audits.persona,
      type: audits.type,
      timestamp: audits.timestamp,
      score: audits.score,
      data: audits.data,
      tenant_id: audits.tenantId,
    })
    .from(audits)
    .orderBy(asc(audits.timestamp))
    .$dynamic();
  if (args.persona) q = q.where(eq(audits.persona, args.persona));
  if (args.limit) q = q.limit(args.limit);
  const rows = await q;

  console.log(`audits to process: ${rows.length}`);

  for (const a of rows) {
    try {
      // Idempotency: if a reaction already exists at this slug, skip.
      const [existing] = await db
        .select({ id: reactions.id })
        .from(reactions)
        .where(eq(reactions.slug, a.slug))
        .limit(1);
      if (existing) {
        skipped++;
        continue;
      }

      const data = (a.data ?? {}) as {
        email?: Record<string, unknown>;
        review?: Record<string, unknown>;
        qa?: Record<string, unknown> | null;
        assets?: Record<string, unknown>;
        performance?: Record<string, unknown>;
      };
      const email = data.email ?? {};
      const review = data.review ?? {};
      const qa = data.qa ?? null;
      const assets = data.assets ?? {};
      const performance = data.performance ?? null;

      const brandDomain = brandDomainFromFrom(email.from as string | undefined);

      if (!args.confirm) {
        console.log(`  ✎ ${a.slug.padEnd(60)} persona=${a.persona} brand=${brandDomain ?? "—"}`);
        written++;
        continue;
      }

      const [exp] = await db
        .insert(experiences)
        .values({
          personaSlug: a.persona,
          tenantId: a.tenant_id,
          type: deriveType(a),
          brandDomain,
          messageId: null,
          receivedAt: a.timestamp,
          emailData: email,
          qaFindings: qa,
          assets,
          performance,
          rawKey: null,
        })
        .returning({ id: experiences.id });

      await db.insert(reactions).values({
        experienceId: exp.id,
        personaSlug: a.persona,
        slug: a.slug,
        score: a.score,
        reviewData: review,
        tenantId: a.tenant_id,
      });

      written++;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(`  ✗ ${a.slug}: ${msg.slice(0, 200)}`);
    }
  }
  return { written, skipped };
}

async function backfillEmbeddings(args: Args): Promise<{ written: number; skipped: number }> {
  let written = 0;
  let skipped = 0;

  // Walk audit_embedding rows and find the matching reaction by slug.
  const rows = await db
    .select({
      auditSlug: auditEmbedding.auditSlug,
      persona: auditEmbedding.persona,
      indexedText: auditEmbedding.indexedText,
      embedding: auditEmbedding.embedding,
    })
    .from(auditEmbedding);
  console.log(`audit_embedding rows: ${rows.length}`);

  for (const e of rows) {
    try {
      // Find the reaction at this slug.
      const [r] = await db
        .select({ id: reactions.id })
        .from(reactions)
        .where(eq(reactions.slug, e.auditSlug))
        .limit(1);
      if (!r) {
        // Reaction doesn't exist yet — backfill audits first.
        skipped++;
        continue;
      }

      // Idempotency: skip if already exists.
      const [existing] = await db
        .select({ reactionId: reactionEmbedding.reactionId })
        .from(reactionEmbedding)
        .where(eq(reactionEmbedding.reactionId, r.id))
        .limit(1);
      if (existing) {
        skipped++;
        continue;
      }

      if (!args.confirm) {
        written++;
        continue;
      }

      await db.insert(reactionEmbedding).values({
        reactionId: r.id,
        persona: e.persona,
        indexedText: e.indexedText,
        embedding: e.embedding,
      });
      written++;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(`  ✗ embedding for ${e.auditSlug}: ${msg.slice(0, 200)}`);
    }
  }
  return { written, skipped };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  console.log(
    `mode: ${args.confirm ? "CONFIRM (writing)" : "dry-run"}${args.persona ? ` persona=${args.persona}` : ""}${args.limit ? ` limit=${args.limit}` : ""}\n`
  );

  if (!args.embeddingsOnly) {
    console.log("== audit → experience + reaction ==");
    const r = await backfillAudits(args);
    console.log(`audit backfill: ${r.written} written, ${r.skipped} skipped (already had reactions)\n`);
  }

  console.log("== audit_embedding → reaction_embedding ==");
  const e = await backfillEmbeddings(args);
  console.log(`embedding backfill: ${e.written} written, ${e.skipped} skipped`);

  if (!args.confirm) {
    console.log("\n[DRY RUN] Re-run with --confirm to actually insert.");
  } else {
    console.log("\nDone. The audit + audit_embedding tables are untouched and remain the live read path until XR-D.");
  }
}

main().catch((err) => {
  console.error("\nFAIL:", err);
  process.exit(1);
});
