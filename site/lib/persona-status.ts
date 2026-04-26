import { eq, sql } from "drizzle-orm";
import { db, personas } from "./db/client";

// Server-side helper to upsert a single onboarding step on
// persona.last_status.onboarding[key]. Mirrors the daemon's
// audit-pipeline/persona-profile.mjs reportOnboardingStep so the wizard's
// "queued for laptop bootstrap" status appears in the same place the laptop
// orchestrator's per-step states live. Best-effort — DB hiccups don't break
// the wizard flow.
export async function reportOnboardingStep(
  slug: string,
  key: string,
  status: "pending" | "done" | "failed",
  detail?: string
): Promise<void> {
  try {
    const rows = await db
      .select({ lastStatus: personas.lastStatus })
      .from(personas)
      .where(eq(personas.slug, slug))
      .limit(1);
    if (rows.length === 0) return;
    const current = (rows[0].lastStatus ?? {}) as Record<string, unknown>;
    const onboarding =
      ((current.onboarding as Record<string, unknown>) ?? {}) as Record<
        string,
        unknown
      >;
    const next = {
      ...current,
      onboarding: {
        ...onboarding,
        [key]: {
          status,
          at: new Date().toISOString(),
          ...(detail ? { detail } : {}),
        },
      },
    };
    await db
      .update(personas)
      .set({ lastStatus: sql`${JSON.stringify(next)}::jsonb` })
      .where(eq(personas.slug, slug));
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(
      `reportOnboardingStep: DB write failed for ${slug}/${key}: ${msg.slice(0, 200)}`
    );
  }
}
