import { and, eq, isNull } from "drizzle-orm";
import { db, auditShareTokens, reactions, experiences } from "./db/client";
import { auditDataSchema, type AuditData } from "./schema/audit";

function logDrift(where: string, slug: string, error: unknown) {
  console.warn(`[audit-drift:${where}] slug=${slug}`, error);
}

// 24 chars from a 64-symbol alphabet ≈ 144 bits of entropy. Far more than
// the practical lower bound for unguessable URL tokens (88 bits / Stripe-
// style). Avoid look-alikes (0/O, 1/l/I) so users hand-typing or
// transcribing don't get confused.
const ALPHABET = "abcdefghjkmnpqrstuvwxyz23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

function newToken(length = 24): string {
  // crypto.getRandomValues is available in Node 19+ globals and the edge
  // runtime — both targets here.
  const buf = new Uint8Array(length);
  crypto.getRandomValues(buf);
  let out = "";
  for (let i = 0; i < length; i++) {
    out += ALPHABET[buf[i] % ALPHABET.length];
  }
  return out;
}

// Mint (or reuse) a share token for an audit. Idempotent per (audit, user)
// while the token is unrevoked: clicking "Copy share link" twice on the
// same audit returns the same URL.
export async function mintShareTokenForAudit(args: {
  auditSlug: string;
  userId: string;
}): Promise<string> {
  const existing = await db
    .select({ token: auditShareTokens.token })
    .from(auditShareTokens)
    .where(
      and(
        eq(auditShareTokens.auditSlug, args.auditSlug),
        eq(auditShareTokens.createdBy, args.userId),
        isNull(auditShareTokens.revokedAt)
      )
    )
    .limit(1);
  if (existing[0]) return existing[0].token;

  const token = newToken();
  await db.insert(auditShareTokens).values({
    token,
    auditSlug: args.auditSlug,
    createdBy: args.userId,
  });
  return token;
}

// Public lookup: token → audit data, no persona ACL. Returns null if the
// token doesn't exist, is revoked, or the underlying audit has been
// deleted (FK cascade handles deletion, so a missing join just means the
// audit is gone).
export async function getAuditByShareToken(
  token: string
): Promise<AuditData | null> {
  const rows = await db
    .select({
      slug: reactions.slug,
      type: experiences.type,
      reactionPersona: reactions.personaSlug,
      reviewData: reactions.reviewData,
      emailData: experiences.emailData,
      qaFindings: experiences.qaFindings,
      assets: experiences.assets,
      performance: experiences.performance,
      inventory: experiences.inventory,
      autoConfirm: experiences.autoConfirm,
    })
    .from(auditShareTokens)
    .innerJoin(reactions, eq(reactions.slug, auditShareTokens.auditSlug))
    .innerJoin(experiences, eq(experiences.id, reactions.experienceId))
    .where(
      and(
        eq(auditShareTokens.token, token),
        isNull(auditShareTokens.revokedAt)
      )
    )
    .limit(1);
  if (rows.length === 0) return null;
  const row = rows[0];
  const candidate = {
    schema_version: 1,
    slug: row.slug,
    type: row.type,
    persona: row.reactionPersona,
    email: row.emailData ?? {},
    review: row.reviewData ?? {},
    qa: row.qaFindings ?? null,
    assets: row.assets ?? {},
    ...(row.performance ? { performance: row.performance } : {}),
    ...(row.inventory ? { inventory: row.inventory } : {}),
    ...(row.autoConfirm ? { auto_confirm: row.autoConfirm } : {}),
  };
  const parsed = auditDataSchema.safeParse(candidate);
  if (!parsed.success) {
    logDrift("share", row.slug, parsed.error);
    return null;
  }
  return parsed.data;
}
