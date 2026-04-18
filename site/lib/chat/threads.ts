import { eq, and, desc, asc, count, gte } from "drizzle-orm";
import {
  db,
  chatThread,
  chatMessage,
} from "@/lib/db/client";

export type ThreadSummary = {
  id: string;
  title: string | null;
  personaSlug: string;
  updatedAt: Date;
};

export type MessageRow = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  retrievedSlugs: string[] | null;
  createdAt: Date;
};

export async function listThreads(
  userId: string,
  personaSlug: string
): Promise<ThreadSummary[]> {
  const rows = await db
    .select({
      id: chatThread.id,
      title: chatThread.title,
      personaSlug: chatThread.personaSlug,
      updatedAt: chatThread.updatedAt,
    })
    .from(chatThread)
    .where(
      and(
        eq(chatThread.userId, userId),
        eq(chatThread.personaSlug, personaSlug)
      )
    )
    .orderBy(desc(chatThread.updatedAt));
  return rows;
}

export async function getThread(
  threadId: string,
  userId: string
): Promise<{ id: string; personaSlug: string; title: string | null } | null> {
  const rows = await db
    .select({
      id: chatThread.id,
      personaSlug: chatThread.personaSlug,
      title: chatThread.title,
      userId: chatThread.userId,
    })
    .from(chatThread)
    .where(eq(chatThread.id, threadId))
    .limit(1);
  const row = rows[0];
  if (!row || row.userId !== userId) return null;
  return { id: row.id, personaSlug: row.personaSlug, title: row.title };
}

export async function listMessages(threadId: string): Promise<MessageRow[]> {
  const rows = await db
    .select({
      id: chatMessage.id,
      role: chatMessage.role,
      content: chatMessage.content,
      retrievedSlugs: chatMessage.retrievedSlugs,
      createdAt: chatMessage.createdAt,
    })
    .from(chatMessage)
    .where(eq(chatMessage.threadId, threadId))
    .orderBy(asc(chatMessage.createdAt));
  return rows as MessageRow[];
}

export async function createThread(
  userId: string,
  personaSlug: string
): Promise<string> {
  const [row] = await db
    .insert(chatThread)
    .values({ userId, personaSlug })
    .returning({ id: chatThread.id });
  return row.id;
}

export async function appendMessage(args: {
  threadId: string;
  role: "user" | "assistant" | "system";
  content: string;
  retrievedSlugs?: string[];
}): Promise<string> {
  const [row] = await db
    .insert(chatMessage)
    .values({
      threadId: args.threadId,
      role: args.role,
      content: args.content,
      retrievedSlugs: args.retrievedSlugs ?? null,
    })
    .returning({ id: chatMessage.id });
  await db
    .update(chatThread)
    .set({ updatedAt: new Date() })
    .where(eq(chatThread.id, args.threadId));
  return row.id;
}

export async function setThreadTitle(threadId: string, title: string) {
  await db
    .update(chatThread)
    .set({ title })
    .where(eq(chatThread.id, threadId));
}

/**
 * DB-backed rate limit: count this user's assistant-reply-producing messages
 * over the last 10 minutes. We use Upstash elsewhere in the plan but this
 * keeps the chat API free of another runtime dep and ties the limit to the
 * same DB the app owns.
 */
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 20;
export async function userAboveRateLimit(userId: string): Promise<boolean> {
  const since = new Date(Date.now() - RATE_WINDOW_MS);
  const rows = await db
    .select({ n: count() })
    .from(chatMessage)
    .innerJoin(chatThread, eq(chatThread.id, chatMessage.threadId))
    .where(
      and(
        eq(chatThread.userId, userId),
        eq(chatMessage.role, "user"),
        gte(chatMessage.createdAt, since)
      )
    );
  return Number(rows[0]?.n ?? 0) >= RATE_MAX;
}
