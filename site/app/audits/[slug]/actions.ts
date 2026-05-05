"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { db, reactions, personas } from "@/lib/db/client";
import { requireUser } from "@/lib/dal";
import { getAuditBySlugForUser } from "@/lib/audits";
import { personaProfileSchema } from "@/lib/schema/persona";
import { generateRewrites } from "@/lib/rewrites";
import { mintShareTokenForAudit } from "@/lib/share";

export type ActionResult = { ok: true } | { ok: false; error: string };

export type ShareLinkResult =
  | { ok: true; url: string }
  | { ok: false; error: string };

// Mint a public share URL for an audit. Idempotent — repeated calls
// return the same URL until the token is revoked. Caller must own the
// persona that the audit belongs to.
export async function createShareLinkAction(
  formData: FormData
): Promise<ShareLinkResult> {
  const user = await requireUser();
  const slug = String(formData.get("slug") ?? "");
  if (!slug) return { ok: false, error: "Missing slug." };

  const audit = await getAuditBySlugForUser(slug, user.personas);
  if (!audit) return { ok: false, error: "Audit not found." };

  const token = await mintShareTokenForAudit({
    auditSlug: slug,
    userId: user.id,
  });
  // Build an absolute URL from the inbound request so both dev and
  // prod produce a working link without env config.
  const h = await headers();
  const proto = h.get("x-forwarded-proto") ?? "https";
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "etell.app";
  const url = `${proto}://${host}/share/${token}`;
  return { ok: true, url };
}

// Fire the persona-voiced rewrite generator for one audit and persist
// the result on `reaction.rewrites`. Idempotent — re-running overwrites
// the previous set so the operator can regenerate freely.
export async function requestRewritesAction(
  formData: FormData
): Promise<ActionResult> {
  const user = await requireUser();
  const slug = String(formData.get("slug") ?? "");
  if (!slug) return { ok: false, error: "Missing slug." };

  const audit = await getAuditBySlugForUser(slug, user.personas);
  if (!audit) return { ok: false, error: "Audit not found." };
  if (!audit.persona) return { ok: false, error: "Audit has no persona." };

  const [pRow] = await db
    .select({ profile: personas.profile })
    .from(personas)
    .where(eq(personas.slug, audit.persona))
    .limit(1);
  if (!pRow?.profile) return { ok: false, error: "Persona profile not found." };
  const profileParsed = personaProfileSchema.safeParse(pRow.profile);
  if (!profileParsed.success) {
    return { ok: false, error: "Persona profile failed to parse." };
  }

  let rewrites;
  try {
    rewrites = await generateRewrites({ audit, persona: profileParsed.data });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: `LLM call failed: ${msg.slice(0, 200)}` };
  }

  await db
    .update(reactions)
    .set({ rewrites, updatedAt: new Date() })
    .where(eq(reactions.slug, slug));
  revalidatePath(`/audits/${slug}`);
  return { ok: true };
}
