"use server";

import { revalidatePath } from "next/cache";
import { eq, and } from "drizzle-orm";
import { z } from "zod";
import { requireAdmin } from "@/lib/dal";
import {
  db,
  users,
  personas,
  userPersonas,
  sessions,
  appFlag,
  userAppAccess,
} from "@/lib/db/client";
import { APPS, type AppKey } from "@/lib/apps";

const EmailSchema = z.string().trim().toLowerCase().email().max(254);
const SlugSchema = z.string().regex(/^[a-z0-9-]+$/).max(64);

export type ActionResult = { ok: true } | { ok: false; error: string };

export async function inviteUserAction(formData: FormData): Promise<ActionResult> {
  await requireAdmin();

  const emailParsed = EmailSchema.safeParse(formData.get("email"));
  if (!emailParsed.success) return { ok: false, error: "Invalid email." };
  const email = emailParsed.data;

  const rawSlug = formData.get("persona");
  const personaSlug =
    typeof rawSlug === "string" && rawSlug.length > 0
      ? SlugSchema.safeParse(rawSlug)
      : null;
  if (personaSlug && !personaSlug.success) {
    return { ok: false, error: "Invalid persona slug." };
  }

  const existing = await db
    .select({ id: users.id })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  let userId: string;
  if (existing.length > 0) {
    userId = existing[0].id;
  } else {
    const [inserted] = await db
      .insert(users)
      .values({ email })
      .returning({ id: users.id });
    userId = inserted.id;
  }

  if (personaSlug?.success) {
    const persona = await db
      .select({ id: personas.id })
      .from(personas)
      .where(eq(personas.slug, personaSlug.data))
      .limit(1);
    if (persona.length === 0) {
      return { ok: false, error: `Persona "${personaSlug.data}" not found.` };
    }
    const already = await db
      .select({ userId: userPersonas.userId })
      .from(userPersonas)
      .where(
        and(
          eq(userPersonas.userId, userId),
          eq(userPersonas.personaId, persona[0].id)
        )
      )
      .limit(1);
    if (already.length === 0) {
      await db
        .insert(userPersonas)
        .values({ userId, personaId: persona[0].id });
    }
  }

  revalidatePath("/admin");
  return { ok: true };
}

export async function removeUserAction(formData: FormData): Promise<ActionResult> {
  const admin = await requireAdmin();
  const userId = formData.get("userId");
  if (typeof userId !== "string" || !userId) {
    return { ok: false, error: "Missing userId." };
  }
  if (userId === admin.id) {
    return { ok: false, error: "Cannot remove your own admin account." };
  }
  await db.delete(sessions).where(eq(sessions.userId, userId));
  await db.delete(users).where(eq(users.id, userId));
  revalidatePath("/admin");
  return { ok: true };
}

export async function grantPersonaAction(formData: FormData): Promise<ActionResult> {
  await requireAdmin();
  const userId = formData.get("userId");
  const slug = SlugSchema.safeParse(formData.get("persona"));
  if (typeof userId !== "string" || !userId || !slug.success) {
    return { ok: false, error: "Missing userId or persona." };
  }
  const persona = await db
    .select({ id: personas.id })
    .from(personas)
    .where(eq(personas.slug, slug.data))
    .limit(1);
  if (persona.length === 0) {
    return { ok: false, error: `Persona "${slug.data}" not found.` };
  }
  const already = await db
    .select({ userId: userPersonas.userId })
    .from(userPersonas)
    .where(
      and(
        eq(userPersonas.userId, userId),
        eq(userPersonas.personaId, persona[0].id)
      )
    )
    .limit(1);
  if (already.length === 0) {
    await db.insert(userPersonas).values({ userId, personaId: persona[0].id });
  }
  revalidatePath("/admin");
  return { ok: true };
}

export async function revokePersonaAction(formData: FormData): Promise<ActionResult> {
  await requireAdmin();
  const userId = formData.get("userId");
  const slug = SlugSchema.safeParse(formData.get("persona"));
  if (typeof userId !== "string" || !userId || !slug.success) {
    return { ok: false, error: "Missing userId or persona." };
  }
  const persona = await db
    .select({ id: personas.id })
    .from(personas)
    .where(eq(personas.slug, slug.data))
    .limit(1);
  if (persona.length === 0) return { ok: true };
  await db
    .delete(userPersonas)
    .where(
      and(
        eq(userPersonas.userId, userId),
        eq(userPersonas.personaId, persona[0].id)
      )
    );
  revalidatePath("/admin");
  return { ok: true };
}

const APP_KEYS = APPS.map((a) => a.key) as [AppKey, ...AppKey[]];
const AppKeySchema = z.enum(APP_KEYS);

// Chat thread actions moved to site/app/chat/actions.ts to keep chat
// concerns co-located with the chat routes.

export async function toggleAppAction(formData: FormData): Promise<ActionResult> {
  const admin = await requireAdmin();
  const keyParsed = AppKeySchema.safeParse(formData.get("key"));
  if (!keyParsed.success) {
    return { ok: false, error: "Unknown app." };
  }
  const enabled = formData.get("enabled") === "1";
  await db
    .insert(appFlag)
    .values({ key: keyParsed.data, enabled, updatedBy: admin.id })
    .onConflictDoUpdate({
      target: appFlag.key,
      set: { enabled, updatedBy: admin.id, updatedAt: new Date() },
    });
  revalidatePath("/admin");
  revalidatePath("/");
  return { ok: true };
}

// Grant or revoke per-user access to an app.
export async function toggleUserAppAccessAction(
  formData: FormData
): Promise<ActionResult> {
  const admin = await requireAdmin();
  const keyParsed = AppKeySchema.safeParse(formData.get("appKey"));
  const userId = formData.get("userId");
  const enable = formData.get("enable") === "1";
  if (!keyParsed.success || typeof userId !== "string" || !userId) {
    return { ok: false, error: "Bad input." };
  }
  if (enable) {
    await db
      .insert(userAppAccess)
      .values({ userId, appKey: keyParsed.data, grantedBy: admin.id })
      .onConflictDoNothing();
  } else {
    await db
      .delete(userAppAccess)
      .where(
        and(
          eq(userAppAccess.userId, userId),
          eq(userAppAccess.appKey, keyParsed.data)
        )
      );
  }
  revalidatePath("/admin");
  revalidatePath("/");
  return { ok: true };
}
