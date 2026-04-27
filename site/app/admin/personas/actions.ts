"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq, sql as dsql } from "drizzle-orm";
import { z } from "zod";
import { requireAdmin } from "@/lib/dal";
import { db, personas, reactions, personaTemplates } from "@/lib/db/client";
import {
  personaProfileSchema,
  type PersonaProfile,
} from "@/lib/schema/persona";
import { provisionInbox } from "@/lib/agentmail";
import { journeyUrls } from "@/lib/journey-preview";
import type { PersonaLastStatus } from "@/lib/db/schema";

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
      // Targets preserve through form edits (the form doesn't expose them
      // yet — they're added directly to the DB for now, editable via the
      // Admin UI once we add a journey-targets sub-editor).
      targets: existing?.journey.targets ?? [],
    },
    agentmail: existing?.agentmail ?? {
      inbox_address: null,
      inbox_id: null,
      provisioned_at: null,
    },
    onboarding: existing?.onboarding ?? {},
    color: s(fd, "color") ?? existing?.color ?? null,
    notes: s(fd, "notes") ?? existing?.notes ?? null,
    status: existing?.status ?? "active",
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
  const admin = await requireAdmin();

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

  await db
    .insert(personas)
    .values({ slug, name, short, profile, tenantId: admin.tenantId ?? null });

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

  // Fire-and-forget URL validation. Runs AFTER the save returns so a
  // flaky retailer doesn't block the admin's form submit. Results land
  // in persona.last_status.url_validation and surface as warnings on
  // the next load. Silently tolerates network errors.
  validateAndStoreJourneyUrls(slug, profile).catch((err) =>
    console.warn(`[url-validation] ${slug} skipped:`, err)
  );

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
    .from(reactions)
    .where(eq(reactions.personaSlug, slug));
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

// ─── Promote-to-template ───────────────────────────────────────────────────
//
// Lifts a tenant-scoped persona into a platform-level persona_template.
// The persona row stays put — only its `template_slug` flips to its own
// slug (Walker-style self-reference) so existing audits/embeddings/email/
// chat continue to read-merge through the template after future forks.
//
// Idempotent: re-running on an already-promoted persona is a no-op (the
// template row exists, the self-reference is already stamped).
//
// industry is the only field the admin needs to provide — everything else
// (name, profile, last_status) is copied from the persona row.

const PromoteSchema = z.object({
  slug: SlugSchema,
  industry: z
    .string()
    .trim()
    .min(2)
    .max(60)
    .regex(/^[a-z][a-z0-9-]*$/, "lowercase + hyphens, e.g. 'athleisure'"),
});

export async function promotePersonaToTemplateAction(
  fd: FormData
): Promise<void> {
  await requireAdmin();
  const parsed = PromoteSchema.safeParse({
    slug: String(fd.get("slug") ?? ""),
    industry: String(fd.get("industry") ?? ""),
  });
  if (!parsed.success) {
    const slug = String(fd.get("slug") ?? "");
    const msg = parsed.error.issues[0]?.message ?? "Invalid input";
    redirect(`/admin/personas/${slug}?error=${encodeURIComponent(msg)}`);
  }
  const { slug, industry } = parsed.data;

  const [persona] = await db
    .select({
      slug: personas.slug,
      name: personas.name,
      short: personas.short,
      profile: personas.profile,
      lastStatus: personas.lastStatus,
      templateSlug: personas.templateSlug,
    })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  if (!persona) {
    redirect(`/admin/personas?error=${encodeURIComponent("persona not found")}`);
  }
  if (!persona.profile) {
    redirect(
      `/admin/personas/${slug}?error=${encodeURIComponent("persona has no profile to promote")}`
    );
  }

  // Upsert template row (idempotent on slug).
  const [existingTemplate] = await db
    .select({ slug: personaTemplates.slug })
    .from(personaTemplates)
    .where(eq(personaTemplates.slug, slug))
    .limit(1);
  if (!existingTemplate) {
    await db.insert(personaTemplates).values({
      slug: persona.slug,
      name: persona.name,
      short: persona.short,
      industry,
      profile: persona.profile,
      lastStatus: persona.lastStatus,
      isActive: true,
    });
  } else {
    // Template existed already — just sync industry + isActive (don't clobber
    // a hand-tuned profile on the template side).
    await db
      .update(personaTemplates)
      .set({ industry, isActive: true })
      .where(eq(personaTemplates.slug, slug));
  }

  // Stamp persona.template_slug if not already pointing somewhere.
  if (!persona.templateSlug) {
    await db
      .update(personas)
      .set({ templateSlug: slug })
      .where(eq(personas.slug, slug));
  }

  revalidatePath("/admin/personas");
  revalidatePath(`/admin/personas/${slug}`);
  revalidatePath("/admin/templates");
  redirect(`/admin/templates/${slug}`);
}

// ─── Journey URL validation ────────────────────────────────────────────────
//
// Runs asynchronously after every upsert. HEAD each category URL the
// journey will visit and record the HTTP status in last_status.url_validation.
// We use HEAD because retailers rate-limit GET more aggressively, and a
// mobile User-Agent because bot protection often 4xx's curl/node
// defaults (Kasada on Skechers returned 410 to our first probe). Timeout
// per URL: 3s so a flaky retailer can't stall the admin's form for long.

const VALIDATION_TIMEOUT_MS = 3000;
const VALIDATION_UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15";

async function headUrl(url: string): Promise<number | "error"> {
  try {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), VALIDATION_TIMEOUT_MS);
    const res = await fetch(url, {
      method: "HEAD",
      redirect: "manual",
      headers: { "User-Agent": VALIDATION_UA },
      signal: controller.signal,
    });
    clearTimeout(t);
    return res.status;
  } catch {
    return "error";
  }
}

async function validateAndStoreJourneyUrls(
  slug: string,
  profile: PersonaProfile
): Promise<void> {
  const journeyShape = {
    site: profile.journey.site ?? null,
    search_term: profile.journey.search_term ?? null,
    category_path: profile.journey.category_path ?? [],
    targets: profile.journey.targets ?? [],
  };
  const urls = journeyUrls(journeyShape);
  if (urls.length === 0) return;

  const results = await Promise.all(
    urls.map(async ({ stepId, url }) => {
      const status = await headUrl(url);
      return { step_id: stepId, url, status };
    })
  );

  const row = await db
    .select({ id: personas.id, lastStatus: personas.lastStatus })
    .from(personas)
    .where(eq(personas.slug, slug))
    .limit(1);
  if (row.length === 0) return;

  const nextStatus: PersonaLastStatus = {
    ...(row[0].lastStatus ?? {}),
    url_validation: { at: new Date().toISOString(), results },
  };
  await db
    .update(personas)
    .set({ lastStatus: nextStatus })
    .where(eq(personas.id, row[0].id));
}
