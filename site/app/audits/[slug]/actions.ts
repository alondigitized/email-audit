"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db, reactions, personas } from "@/lib/db/client";
import { requireUser } from "@/lib/dal";
import { getAuditBySlugForUser } from "@/lib/audits";
import { personaProfileSchema } from "@/lib/schema/persona";
import { generateRewrites } from "@/lib/rewrites";

export type ActionResult = { ok: true } | { ok: false; error: string };

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
