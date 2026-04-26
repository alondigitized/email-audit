"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { requireUser } from "@/lib/dal";
import { isAppEnabled } from "@/lib/apps";
import { db, chatThread } from "@/lib/db/client";
import { createThread, getThread } from "@/lib/chat/threads";

const PersonaSlugSchema = z.string().regex(/^[a-z0-9-]+$/).max(64);
const ThreadIdSchema = z.string().uuid();
const TitleSchema = z.string().trim().min(1).max(120);

type Ok<T> = { ok: true } & T;
type Err = { ok: false; error: string };

async function gateUser() {
  const user = await requireUser();
  if (!user.isAdmin) {
    const enabled = await isAppEnabled("chat");
    if (!enabled || !user.apps.includes("chat")) {
      return { ok: false as const, error: "Chat is not available to you." };
    }
  }
  return { ok: true as const, user };
}

/**
 * Create a new chat thread. Returns the new thread id so the client can
 * update its URL and include the id in subsequent streaming calls.
 */
export async function createChatThreadAction(
  personaSlug: string
): Promise<Ok<{ threadId: string }> | Err> {
  const gate = await gateUser();
  if (!gate.ok) return gate;
  const slug = PersonaSlugSchema.safeParse(personaSlug);
  if (!slug.success) return { ok: false, error: "Bad persona slug." };
  if (!gate.user.isAdmin && !gate.user.personas.includes(slug.data)) {
    return { ok: false, error: "Not your persona." };
  }
  const id = await createThread(gate.user.id, slug.data, gate.user.tenantId);
  revalidatePath(`/chat/${slug.data}`);
  return { ok: true, threadId: id };
}

/**
 * Rename a thread. The user must own it. Title is trimmed and capped at
 * 120 chars; empty titles are rejected (caller can delete instead).
 */
export async function renameThreadAction(
  threadId: string,
  rawTitle: string
): Promise<Ok<{ title: string }> | Err> {
  const gate = await gateUser();
  if (!gate.ok) return gate;
  const idParsed = ThreadIdSchema.safeParse(threadId);
  if (!idParsed.success) return { ok: false, error: "Bad thread id." };
  const titleParsed = TitleSchema.safeParse(rawTitle);
  if (!titleParsed.success) return { ok: false, error: "Title is empty or too long." };
  const t = await getThread(idParsed.data, gate.user.id);
  if (!t) return { ok: false, error: "Thread not found." };
  await db
    .update(chatThread)
    .set({ title: titleParsed.data })
    .where(eq(chatThread.id, idParsed.data));
  revalidatePath(`/chat/${t.personaSlug}`);
  return { ok: true, title: titleParsed.data };
}
