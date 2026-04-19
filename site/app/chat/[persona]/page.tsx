import { notFound } from "next/navigation";
import { requireUser } from "@/lib/dal";
import { requireAppEnabled } from "@/lib/apps";
import { PERSONA_BY_SLUG } from "@/lib/personas";
import { listThreads, getThread, listMessages } from "@/lib/chat/threads";
import { getAuditMemoryCount } from "@/lib/chat/retrieve";
import { ChatClient } from "./ChatClient";
import { ThreadList } from "./ThreadList";

export const dynamic = "force-dynamic";

type Search = { [key: string]: string | string[] | undefined };

export default async function ChatPage({
  params,
  searchParams,
}: {
  params: Promise<{ persona: string }>;
  searchParams: Promise<Search>;
}) {
  const { persona: personaSlug } = await params;
  const user = await requireUser();
  await requireAppEnabled("chat", {
    isAdmin: user.isAdmin,
    userApps: user.apps,
  });

  if (!user.isAdmin && !user.personas.includes(personaSlug)) {
    notFound();
  }
  const meta = PERSONA_BY_SLUG[personaSlug];
  if (!meta) notFound();

  const sp = await searchParams;
  const rawThreadId = typeof sp.thread === "string" ? sp.thread : null;

  const [threads, auditCount] = await Promise.all([
    listThreads(user.id, personaSlug),
    getAuditMemoryCount(personaSlug),
  ]);

  // Resolve thread: requested or none (start a fresh conversation).
  let threadId: string | null = null;
  let initialMessages: {
    id: string;
    role: "user" | "assistant";
    content: string;
    retrievedSlugs: string[] | null;
  }[] = [];
  if (rawThreadId) {
    const t = await getThread(rawThreadId, user.id);
    if (t && t.personaSlug === personaSlug) {
      threadId = t.id;
      const msgs = await listMessages(t.id);
      initialMessages = msgs
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({
          id: m.id,
          role: m.role as "user" | "assistant",
          content: m.content,
          retrievedSlugs: m.retrievedSlugs,
        }));
    }
  }

  // Mobile layout: show one pane at a time based on whether a thread is
  // active — a 260px sidebar next to the chat makes the chat unreadable
  // on phones. Desktop keeps the two-column side-by-side.
  const listVisibilityClass = threadId ? "hidden md:block" : "block";
  const chatVisibilityClass = threadId ? "block" : "hidden md:block";

  return (
    <div className="md:grid md:grid-cols-[260px_1fr] md:gap-4 h-[calc(100dvh-180px)] min-h-[500px]">
      <div className={`${listVisibilityClass} h-full`}>
        <ThreadList
          personaSlug={personaSlug}
          activeThreadId={threadId}
          threads={threads.map((t) => ({
            id: t.id,
            title: t.title,
            updatedAt: t.updatedAt.toISOString(),
          }))}
        />
      </div>
      <div className={`${chatVisibilityClass} h-full`}>
        <ChatClient
          // Remount when the active thread changes so useChat picks up the
          // new initialMessages — without this, navigating between threads
          // leaves the chat pane showing the first thread's state forever.
          key={threadId ?? "new"}
          personaSlug={personaSlug}
          personaName={meta.name}
          auditCount={auditCount}
          threadId={threadId}
          threadTitle={threadId ? (threads.find((t) => t.id === threadId)?.title ?? null) : null}
          initialMessages={initialMessages}
        />
      </div>
    </div>
  );
}
