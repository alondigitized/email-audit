import { notFound } from "next/navigation";
import { requireUser } from "@/lib/dal";
import { requireAppEnabled } from "@/lib/apps";
import { getPersonaBySlug } from "@/lib/personas-db";
import { listThreads, getThread, listMessages } from "@/lib/chat/threads";
import { getAuditMemoryCount } from "@/lib/chat/retrieve";
import { getChatStarterPrompts } from "@/lib/chat/starters";
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
  const meta = user.isAdmin
    ? await getPersonaBySlug(personaSlug)
    : await getPersonaBySlug(personaSlug, { tenantId: user.tenantId });
  if (!meta) notFound();

  const sp = await searchParams;
  const rawThreadId = typeof sp.thread === "string" ? sp.thread : null;
  const composeMode = sp.compose === "1";

  const [threads, auditCount, starterPrompts] = await Promise.all([
    listThreads(user.id, personaSlug),
    getAuditMemoryCount(personaSlug),
    getChatStarterPrompts(meta),
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

  // Mobile layout: show one pane at a time. Chat view wins when a thread
  // is active OR the user tapped "+ New thread" (?compose=1) — otherwise
  // they'd stay stuck on the thread list with no way to reach the input.
  // Desktop keeps both panes side-by-side.
  const inChatView = !!threadId || composeMode;
  const listVisibilityClass = inChatView ? "hidden md:block" : "block";
  const chatVisibilityClass = inChatView ? "block" : "hidden md:block";

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
          // Stable per-persona key. Inter-thread switching is handled
          // inside ChatClient via an effect on initialThreadId — keying
          // by threadId here would remount the component when
          // commitChatThread → replaceState → router.refresh() updates
          // the URL after the first send, wiping useChat's in-memory
          // state and the user's just-sent bubble.
          key={personaSlug}
          personaSlug={personaSlug}
          personaName={meta.name}
          auditCount={auditCount}
          starterPrompts={starterPrompts}
          threadId={threadId}
          threadTitle={threadId ? (threads.find((t) => t.id === threadId)?.title ?? null) : null}
          initialMessages={initialMessages}
        />
      </div>
    </div>
  );
}
