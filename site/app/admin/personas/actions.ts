"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq, sql as dsql } from "drizzle-orm";
import { z } from "zod";
import { requireAdmin } from "@/lib/dal";
import { db, personas, audits } from "@/lib/db/client";
import {
  personaProfileSchema,
  type PersonaProfile,
} from "@/lib/schema/persona";
import { provisionInbox } from "@/lib/agentmail";

export type ActionResult =
  | { ok: true; slug?: string }
  | { ok: false; error: string };

const SlugSchema = z
  .string()
  .trim()
  .regex(/^[a-z0-9-]+$/, "Slug may only contain lowercase letters, digits, and hyphens")
  .min(2)
  .max(64);

// Form parsing helpers — FormData values are all strings, so we coerce
// carefully. Empty strings become null/undefined where optional.
function s(fd: FormData, key: string): string | undefined {
  const v = fd.get(key);
  if (typeof v !== "string") return undefined;
  const t = v.trim();
  return t.length === 0 ? undefined : t;
}
function n(fd: FormData, key: string): number | undefined {
  const v = s(fd, key);
  if (v === undefined) return undefined;
  const parsed = Number(v);
  return Number.isFinite(parsed) ? parsed : undefined;
}
function list(fd: FormData, key: string): string[] {
  const v = s(fd, key);
  if (!v) return [];
  return v
    .split(/[\n,]/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

function buildProfileFromForm(
  fd: FormData,
  existing: PersonaProfile | null
): PersonaProfile {
  const draft: PersonaProfile = {
    schema_version: existing?.schema_version ?? 1,
    identity: {
      name: s(fd, "name") ?? existing?.identity.name ?? "",
      age: n(fd, "age") ?? existing?.identity.age ?? 30,
      generation:
        s(fd, "generation") ?? existing?.identity.generation ?? "Millennial",
      gender: s(fd, "gender") ?? existing?.identity.gender ?? "Other",
      style: s(fd, "style") ?? existing?.identity.style ?? "",
      shopping_habits:
        s(fd, "shopping_habits") ?? existing?.identity.shopping_habits ?? "",
      tech_comfort:
        s(fd, "tech_comfort") ?? existing?.identity.tech_comfort ?? "",
      focus_areas: fd.has("focus_areas")
        ? list(fd, "focus_areas")
        : existing?.identity.focus_areas ?? [],
    },
    journey: {
      site: s(fd, "site") ?? existing?.journey.site ?? null,
      search_term: s(fd, "search_term") ?? existing?.journey.search_term ?? null,
      category_path: fd.has("category_path")
        ? list(fd, "category_path")
        : existing?.journey.category_path ?? [],
      credentials_env_prefix:
        s(fd, "credentials_env_prefix") ??
        existing?.journey.credentials_env_prefix ??
        null,
    },
    agentmail: existing?.agentmail ?? {
      inbox_address: null,
      inbox_id: null,
      provisioned_at: null,
    },
    onboarding: existing?.onboarding ?? {},
    color: s(fd, "color") ?? existing?.color ?? null,
    notes: s(fd, "notes") ?? existing?.notes ?? null,
  };
  // Inbox address is editable too (manual entry or provisioned later).
  const inbox = s(fd, "inbox_address");
  if (inbox !== undefined) {
    draft.agentmail = {
      ...draft.agentmail,
      inbox_address: inbox,
    };
  }
  return personaProfileSchema.parse(draft);
}

// ─── Create ────────────────────────────────────────────────────────────────

export async function createPersonaAction(
  fd: FormData
): Promise<ActionResult> {
  await requireAdmin();

  const slugParsed = SlugSchema.safeParse(fd.get("slug"));
  if (!slugParsed.success) {
    return { ok: false, error: slugParsed.error.issues[0]?.message ?? "Invalid slug." };
  }
  const slug = slugParsed.data;

  const existing = await db
    .select({ id: personas.id })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  if (existing.length > 0) {
    return { ok: false, error: `Persona "${slug}" already exists.` };
  }

  let profile: PersonaProfile;
  try {
    profile = buildProfileFromForm(fd, null);
  } catch (err) {
    const msg =
      err instanceof z.ZodError
        ? err.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ")
        : String(err);
    return { ok: false, error: msg };
  }

  const name = s(fd, "name") ?? slug;
  const short = s(fd, "short") ?? name.split(/\s+/)[0] ?? slug;

  await db.insert(personas).values({ slug, name, short, profile });

  revalidatePath("/admin/personas");
  revalidatePath("/admin");
  return { ok: true, slug };
}

// ─── Update ────────────────────────────────────────────────────────────────

export async function upsertPersonaAction(
  fd: FormData
): Promise<ActionResult> {
  await requireAdmin();

  const slugParsed = SlugSchema.safeParse(fd.get("slug"));
  if (!slugParsed.success) {
    return { ok: false, error: "Invalid slug." };
  }
  const slug = slugParsed.data;

  const existingRow = await db
    .select({
      id: personas.id,
      name: personas.name,
      short: personas.short,
      profile: personas.profile,
    })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  if (existingRow.length === 0) {
    return { ok: false, error: `Persona "${slug}" not found.` };
  }
  const row = existingRow[0];

  let profile: PersonaProfile;
  try {
    profile = buildProfileFromForm(fd, row.profile ?? null);
  } catch (err) {
    const msg =
      err instanceof z.ZodError
        ? err.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ")
        : String(err);
    return { ok: false, error: msg };
  }

  const name = s(fd, "name") ?? row.name;
  const short = s(fd, "short") ?? row.short;

  await db
    .update(personas)
    .set({ name, short, profile })
    .where(eq(personas.id, row.id));

  revalidatePath("/admin/personas");
  revalidatePath(`/admin/personas/${slug}`);
  revalidatePath("/admin");
  revalidatePath(`/chat/${slug}`);
  return { ok: true, slug };
}

// ─── Delete (guard-railed) ─────────────────────────────────────────────────

export async function deletePersonaAction(
  fd: FormData
): Promise<ActionResult> {
  await requireAdmin();

  const slugParsed = SlugSchema.safeParse(fd.get("slug"));
  if (!slugParsed.success) return { ok: false, error: "Invalid slug." };
  const slug = slugParsed.data;

  const [auditCountRow] = await db
    .select({ n: dsql<number>`count(*)::int` })
    .from(audits)
    .where(eq(audits.persona, slug));
  const count = Number(auditCountRow?.n ?? 0);
  if (count > 0) {
    return {
      ok: false,
      error: `Can't delete "${slug}" — ${count} audits still reference it. Reassign or remove audits first.`,
    };
  }

  await db.delete(personas).where(eq(personas.slug, slug));
  revalidatePath("/admin/personas");
  revalidatePath("/admin");
  return { ok: true };
}

// ─── Onboarding checklist state ────────────────────────────────────────────

export async function setChecklistItemAction(
  fd: FormData
): Promise<ActionResult> {
  await requireAdmin();

  const slugParsed = SlugSchema.safeParse(fd.get("slug"));
  if (!slugParsed.success) return { ok: false, error: "Invalid slug." };
  const slug = slugParsed.data;
  const key = s(fd, "key");
  const status = s(fd, "status");
  if (!key || !status) return { ok: false, error: "Missing key or status." };
  if (!["pending", "done", "skipped"].includes(status)) {
    return { ok: false, error: "Invalid status." };
  }

  const row = await db
    .select({ id: personas.id, profile: personas.profile })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  if (row.length === 0) return { ok: false, error: "Persona not found." };

  const current = row[0].profile;
  if (!current) {
    return {
      ok: false,
      error: "Persona has no profile; edit identity first.",
    };
  }
  const next: PersonaProfile = {
    ...current,
    onboarding: {
      ...current.onboarding,
      [key]: status as "pending" | "done" | "skipped",
    },
  };
  personaProfileSchema.parse(next);
  await db
    .update(personas)
    .set({ profile: next })
    .where(eq(personas.id, row[0].id));

  revalidatePath(`/admin/personas/${slug}`);
  return { ok: true };
}

// ─── AgentMail provisioning ────────────────────────────────────────────────

export async function provisionInboxAction(
  fd: FormData
): Promise<ActionResult> {
  await requireAdmin();
  const slugParsed = SlugSchema.safeParse(fd.get("slug"));
  if (!slugParsed.success) return { ok: false, error: "Invalid slug." };
  const slug = slugParsed.data;

  const row = await db
    .select({
      id: personas.id,
      name: personas.name,
      profile: personas.profile,
    })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  if (row.length === 0) return { ok: false, error: "Persona not found." };
  const current = row[0].profile;
  if (!current) {
    return { ok: false, error: "Persona has no profile yet — save identity first." };
  }
  if (current.agentmail.inbox_id) {
    return {
      ok: false,
      error: `Inbox already provisioned: ${current.agentmail.inbox_address ?? current.agentmail.inbox_id}`,
    };
  }

  let result;
  try {
    result = await provisionInbox({ slug, displayName: row[0].name });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: `AgentMail API: ${msg.slice(0, 300)}` };
  }

  const next: PersonaProfile = {
    ...current,
    agentmail: {
      inbox_id: result.inbox_id,
      inbox_address: result.inbox_address,
      provisioned_at: new Date().toISOString(),
    },
  };
  personaProfileSchema.parse(next);
  await db
    .update(personas)
    .set({ profile: next })
    .where(eq(personas.id, row[0].id));

  revalidatePath(`/admin/personas/${slug}`);
  return { ok: true, slug };
}

export async function provisionInboxAndRefresh(fd: FormData) {
  const res = await provisionInboxAction(fd);
  const slug = (fd.get("slug") as string) || "";
  if (!res.ok) {
    redirect(
      `/admin/personas/${slug}?error=${encodeURIComponent(res.error)}`
    );
  }
  redirect(`/admin/personas/${slug}?saved=1`);
}

// ─── Convenience wrappers that redirect (for form action={...}) ───────────

export async function createPersonaAndRedirect(fd: FormData) {
  const res = await createPersonaAction(fd);
  if (!res.ok) {
    // Encode error into a search param so the form page can display it.
    redirect(`/admin/personas/new?error=${encodeURIComponent(res.error)}`);
  }
  redirect(`/admin/personas/${res.slug}`);
}

export async function upsertPersonaAndRedirect(fd: FormData) {
  const res = await upsertPersonaAction(fd);
  if (!res.ok) {
    const slug = (fd.get("slug") as string) || "";
    redirect(
      `/admin/personas/${slug}?error=${encodeURIComponent(res.error)}`
    );
  }
  redirect(`/admin/personas/${res.slug}?saved=1`);
}

// Form-action-friendly void wrappers. The <form action={…}> attribute on
// Next's server-action form component expects Promise<void>, so these
// swallow the ActionResult and redirect with the outcome encoded in
// search params for the page to display.

export async function deletePersonaAndRedirect(fd: FormData) {
  const res = await deletePersonaAction(fd);
  if (!res.ok) {
    const slug = (fd.get("slug") as string) || "";
    redirect(
      `/admin/personas/${slug}?error=${encodeURIComponent(res.error)}`
    );
  }
  redirect("/admin/personas");
}

export async function setChecklistItemAndRefresh(fd: FormData) {
  await setChecklistItemAction(fd);
  const slug = (fd.get("slug") as string) || "";
  // Redirect to same page so the server component re-reads and the
  // status pill reflects the new state.
  redirect(`/admin/personas/${slug}`);
}
