"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { requireAdmin } from "@/lib/dal";
import { db, personas } from "@/lib/db/client";
import {
  personaProfileSchema,
  type PersonaProfile,
} from "@/lib/schema/persona";

const SlugSchema = z
  .string()
  .trim()
  .regex(/^[a-z0-9-]+$/, "Slug may only contain lowercase letters, digits, and hyphens")
  .min(2)
  .max(64);

// Blank-profile template for a fresh draft. Identity fields start empty
// but present so personaProfileSchema.parse doesn't reject — the wizard's
// identity step is the first to fill them in.
function blankProfile(slug: string): PersonaProfile {
  return {
    schema_version: 1,
    identity: {
      name: slug,
      age: 30,
      generation: "Millennial",
      gender: "Other",
      style: "",
      shopping_habits: "",
      tech_comfort: "",
      focus_areas: [],
    },
    journey: {
      site: null,
      search_term: null,
      category_path: [],
      credentials_env_prefix: null,
      targets: [],
    },
    agentmail: {
      inbox_address: null,
      inbox_id: null,
      provisioned_at: null,
    },
    onboarding: {},
    color: null,
    notes: null,
    status: "draft",
  };
}

// ─── Step 0 — create draft row ─────────────────────────────────────────────

export async function createDraftAndRedirect(fd: FormData) {
  const admin = await requireAdmin();

  const slugParsed = SlugSchema.safeParse(fd.get("slug"));
  if (!slugParsed.success) {
    redirect(
      `/admin/personas/new?error=${encodeURIComponent(slugParsed.error.issues[0]?.message ?? "Invalid slug")}`
    );
  }
  const slug = slugParsed.data;

  const existing = await db
    .select({ id: personas.id, profile: personas.profile })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);

  if (existing.length > 0) {
    const isDraft = existing[0].profile?.status === "draft";
    if (isDraft) {
      // Resume the draft.
      redirect(`/admin/personas/new/${slug}/identity`);
    }
    redirect(
      `/admin/personas/new?error=${encodeURIComponent(`Slug "${slug}" is already active. Pick a different one.`)}`
    );
  }

  // Create draft. Insert, then grant admin access so the ACL exists.
  // tenant_id stamped from the actor's tenant — admin-created personas live
  // in Alon's tenant; public-wizard personas (Phase C) inherit the
  // signed-up user's tenant via a parallel action.
  const profile = personaProfileSchema.parse(blankProfile(slug));
  const [inserted] = await db
    .insert(personas)
    .values({
      slug,
      name: slug,
      short: slug,
      profile,
      tenantId: admin.tenantId ?? null,
    })
    .returning({ id: personas.id });

  // Persona access is via tenant membership now — every user in the
  // admin's tenant sees this draft. No userPersonas grant needed.
  void inserted;

  revalidatePath("/admin/personas");
  redirect(`/admin/personas/new/${slug}/identity`);
}

// ─── Shared: load draft, merge step's patch into profile ───────────────────

async function applyPatch(
  slug: string,
  patch: (current: PersonaProfile) => PersonaProfile
) {
  const row = await db
    .select({ id: personas.id, profile: personas.profile, name: personas.name, short: personas.short })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  if (row.length === 0) {
    redirect(`/admin/personas/new?error=${encodeURIComponent(`Persona "${slug}" not found — start again`)}`);
  }
  const current = row[0].profile;
  if (!current) {
    redirect(`/admin/personas/new?error=${encodeURIComponent(`Persona "${slug}" has no profile — start again`)}`);
  }
  const next = personaProfileSchema.parse(patch(current));
  return { rowId: row[0].id, next, currentName: row[0].name, currentShort: row[0].short };
}

function s(fd: FormData, key: string): string | undefined {
  const v = fd.get(key);
  if (typeof v !== "string") return undefined;
  const t = v.trim();
  return t.length === 0 ? undefined : t;
}
function n(fd: FormData, key: string): number | undefined {
  const v = s(fd, key);
  if (v === undefined) return undefined;
  const x = Number(v);
  return Number.isFinite(x) ? x : undefined;
}
function list(fd: FormData, key: string): string[] {
  const v = s(fd, key);
  if (!v) return [];
  return v
    .split(/[\n,]/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

// ─── Step 1 — save identity ────────────────────────────────────────────────

export async function saveIdentityAndAdvance(fd: FormData) {
  await requireAdmin();
  const slug = String(fd.get("slug") || "");
  if (!slug) redirect("/admin/personas/new");

  const { rowId, next, currentName, currentShort } = await applyPatch(slug, (p) => ({
    ...p,
    identity: {
      name: s(fd, "name") ?? p.identity.name,
      age: n(fd, "age") ?? p.identity.age,
      generation: s(fd, "generation") ?? p.identity.generation,
      gender: s(fd, "gender") ?? p.identity.gender,
      style: s(fd, "style") ?? p.identity.style,
      shopping_habits: s(fd, "shopping_habits") ?? p.identity.shopping_habits,
      tech_comfort: s(fd, "tech_comfort") ?? p.identity.tech_comfort,
      focus_areas: fd.has("focus_areas") ? list(fd, "focus_areas") : p.identity.focus_areas,
    },
    notes: s(fd, "notes") ?? p.notes ?? null,
    color: s(fd, "color") ?? p.color ?? null,
  }));

  // Update name/short on the table too, from identity.
  const newName = next.identity.name || currentName;
  const newShort = s(fd, "short") ?? currentShort ?? (newName.split(/\s+/)[0] ?? slug);

  await db
    .update(personas)
    .set({ name: newName, short: newShort, profile: next })
    .where(eq(personas.id, rowId));

  revalidatePath(`/admin/personas/new/${slug}/identity`);
  redirect(`/admin/personas/new/${slug}/journey`);
}

// ─── Step 2 — save journey ────────────────────────────────────────────────

export async function saveJourneyAndAdvance(fd: FormData) {
  await requireAdmin();
  const slug = String(fd.get("slug") || "");
  if (!slug) redirect("/admin/personas/new");

  // Targets JSON is POSTed as a hidden field populated by a small client
  // editor; parse defensively.
  let targets: Array<{ label: string; search_term?: string | null; category_path: string[] }> = [];
  const rawTargets = fd.get("targets_json");
  if (typeof rawTargets === "string" && rawTargets.trim()) {
    try {
      const parsed = JSON.parse(rawTargets);
      if (Array.isArray(parsed)) {
        targets = parsed
          .filter((t) => t && typeof t.label === "string")
          .map((t) => ({
            label: String(t.label),
            search_term: t.search_term ? String(t.search_term) : null,
            category_path: Array.isArray(t.category_path)
              ? t.category_path.map((x: unknown) => String(x))
              : [],
          }));
      }
    } catch {
      // fall through — persisted targets will be empty
    }
  }

  const { rowId, next } = await applyPatch(slug, (p) => ({
    ...p,
    journey: {
      site: s(fd, "site") ?? p.journey.site ?? null,
      search_term: s(fd, "search_term") ?? p.journey.search_term ?? null,
      category_path: fd.has("category_path") ? list(fd, "category_path") : p.journey.category_path,
      credentials_env_prefix:
        s(fd, "credentials_env_prefix") ?? p.journey.credentials_env_prefix ?? null,
      targets,
    },
  }));

  await db.update(personas).set({ profile: next }).where(eq(personas.id, rowId));
  revalidatePath(`/admin/personas/new/${slug}/journey`);
  redirect(`/admin/personas/new/${slug}/inbox`);
}

// ─── Step 3 — advance past inbox (provisioning uses existing action) ──────

export async function advanceToHandoff(fd: FormData) {
  await requireAdmin();
  const slug = String(fd.get("slug") || "");
  if (!slug) redirect("/admin/personas/new");
  redirect(`/admin/personas/new/${slug}/handoff`);
}

// ─── Step 4 — finalize (flip draft → active) ───────────────────────────────

export async function finalizeAndRedirect(fd: FormData) {
  await requireAdmin();
  const slug = String(fd.get("slug") || "");
  if (!slug) redirect("/admin/personas/new");

  const { rowId, next } = await applyPatch(slug, (p) => ({ ...p, status: "active" }));
  await db.update(personas).set({ profile: next }).where(eq(personas.id, rowId));

  revalidatePath("/admin/personas");
  revalidatePath(`/admin/personas/${slug}`);
  redirect(`/admin/personas/${slug}`);
}

// ─── Delete draft (abandon wizard) ────────────────────────────────────────

export async function abandonDraftAndRedirect(fd: FormData) {
  await requireAdmin();
  const slug = String(fd.get("slug") || "");
  if (!slug) redirect("/admin/personas");

  const row = await db
    .select({ id: personas.id, profile: personas.profile })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  // Only delete if it's still a draft — never nuke an active persona
  // from the wizard cleanup path.
  if (row.length > 0 && row[0].profile?.status === "draft") {
    await db.delete(personas).where(eq(personas.id, row[0].id));
  }
  revalidatePath("/admin/personas");
  redirect("/admin/personas");
}
