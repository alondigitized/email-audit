"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { createChatThreadAction, renameThreadAction } from "@/app/chat/actions";

type InitialMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  retrievedSlugs: string[] | null;
};

type Props = {
  personaSlug: string;
  personaName: string;
  auditCount: number;
  threadId: string | null;
  threadTitle: string | null;
  initialMessages: InitialMessage[];
};

function toUIMessages(initial: InitialMessage[]) {
  return initial.map((m) => ({
    id: m.id,
    role: m.role,
    parts: [{ type: "text" as const, text: m.content }],
    // retrievedSlugs not part of UIMessage shape; we render from initial pass only.
  }));
}

export function ChatClient({
  personaSlug,
  personaName,
  auditCount,
  threadId: initialThreadId,
  threadTitle: initialThreadTitle,
  initialMessages,
}: Props) {
  const router = useRouter();
  const [threadId, setThreadId] = useState<string | null>(initialThreadId);
  const [threadTitle, setThreadTitle] = useState<string | null>(
    initialThreadTitle
  );
  const [editingTitle, setEditingTitle] = useState(false);
  const [titleDraft, setTitleDraft] = useState("");
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Keep local title in sync when navigating between threads.
  useEffect(() => {
    setThreadTitle(initialThreadTitle);
    setEditingTitle(false);
  }, [initialThreadId, initialThreadTitle]);

  // Map of message id -> retrieved slugs, populated from initialMessages and
  // from stream response headers (not currently exposed — we keep it as a
  // nice-to-have for initial messages only).
  const sourcesById = Object.fromEntries(
    initialMessages
      .filter((m) => m.role === "assistant" && m.retrievedSlugs?.length)
      .map((m) => [m.id, m.retrievedSlugs!])
  );

  const threadIdRef = useRef<string | null>(threadId);
  useEffect(() => {
    threadIdRef.current = threadId;
  }, [threadId]);

  const { messages, sendMessage, status, error, setMessages } = useChat({
    messages: toUIMessages(initialMessages),
    transport: new DefaultChatTransport({
      api: "/api/chat",
      prepareSendMessagesRequest: ({ messages: msgs, body }) => ({
        body: {
          personaSlug,
          threadId: threadIdRef.current,
          messages: msgs,
          ...body,
        },
      }),
    }),
    onFinish: () => {
      // Refresh server component (sidebar thread list) in the background.
      router.refresh();
    },
  });

  // Autoscroll to bottom on new messages.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages.length, status]);

  const isStreaming = status === "submitted" || status === "streaming";

  const submit = useCallback(async () => {
    const text = input.trim();
    if (!text || isStreaming) return;
    setInput("");

    // Pre-create the thread on first message so the URL and threadId are
    // known up-front — avoids relying on response headers that the AI SDK
    // v5 useChat hook no longer exposes.
    if (!threadIdRef.current) {
      const result = await createChatThreadAction(personaSlug);
      if (!result.ok) {
        // Surface as a normal error — useChat's error state is tied to its
        // own request; this is a pre-flight failure, so just alert().
        alert(result.error);
        return;
      }
      threadIdRef.current = result.threadId;
      setThreadId(result.threadId);
      window.history.replaceState(
        {},
        "",
        `/chat/${personaSlug}?thread=${result.threadId}`
      );
    }
    sendMessage({ text });
  }, [input, isStreaming, sendMessage, personaSlug]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            {/* Mobile-only back link — on desktop the ThreadList is always
                visible alongside, so no back button needed there. */}
            <Link
              href={`/chat/${personaSlug}`}
              className="md:hidden text-muted hover:text-ink text-sm whitespace-nowrap"
              aria-label="Back to threads"
            >
              &larr;
            </Link>
            <span className="text-base font-semibold">{personaName}</span>
            {threadId && (
              <span className="text-muted">·</span>
            )}
            {threadId && editingTitle ? (
              <form
                className="flex-1 flex items-center gap-1"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const draft = titleDraft.trim();
                  if (!draft || !threadId) {
                    setEditingTitle(false);
                    return;
                  }
                  const res = await renameThreadAction(threadId, draft);
                  if (res.ok) {
                    setThreadTitle(res.title);
                    router.refresh();
                  } else {
                    alert(res.error);
                  }
                  setEditingTitle(false);
                }}
              >
                <input
                  autoFocus
                  value={titleDraft}
                  onChange={(e) => setTitleDraft(e.target.value)}
                  onBlur={() => setEditingTitle(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setEditingTitle(false);
                  }}
                  className="flex-1 bg-white border border-gray-300 rounded-md px-2 py-0.5 text-sm outline-none focus:border-gray-500"
                  placeholder="Thread title"
                  maxLength={120}
                />
              </form>
            ) : (
              threadId && (
                <button
                  type="button"
                  onClick={() => {
                    setTitleDraft(threadTitle ?? "");
                    setEditingTitle(true);
                  }}
                  className="text-sm text-muted hover:text-ink truncate text-left"
                  title="Rename thread"
                >
                  {threadTitle ?? "Untitled"}
                </button>
              )
            )}
          </div>
          <div className="text-xs text-muted">
            Remembers {auditCount.toLocaleString()} audit
            {auditCount === 1 ? "" : "s"}
          </div>
        </div>
        {messages.length > 0 && (
          <button
            onClick={() => {
              setMessages([]);
              setThreadId(null);
              setThreadTitle(null);
              setEditingTitle(false);
              threadIdRef.current = null;
              window.history.replaceState({}, "", `/chat/${personaSlug}`);
              router.refresh();
            }}
            className="text-xs text-muted hover:text-ink underline whitespace-nowrap"
          >
            New thread
          </button>
        )}
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-5 py-5 space-y-5"
      >
        {isEmpty ? (
          <EmptyState personaName={personaName} />
        ) : (
          messages.map((m) => (
            <MessageBubble
              key={m.id}
              role={m.role as "user" | "assistant"}
              text={
                m.parts
                  ?.filter((p) => p.type === "text")
                  .map((p) => ("text" in p ? p.text : ""))
                  .join("") ?? ""
              }
              sources={sourcesById[m.id] ?? null}
            />
          ))
        )}
        {isStreaming && messages[messages.length - 1]?.role === "user" && (
          <div className="text-sm text-muted italic">
            {personaName} is thinking…
          </div>
        )}
        {error && (
          <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
            Something went wrong. {error.message}
          </div>
        )}
      </div>

      {/* Composer */}
      <div className="border-t border-gray-200 px-5 py-3 bg-white">
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Ask ${personaName} anything…`}
            rows={1}
            disabled={isStreaming}
            className="flex-1 resize-none rounded-xl border border-gray-200 px-3 py-2 text-base md:text-sm outline-none focus:border-gray-400 disabled:opacity-60 max-h-32"
            style={{ minHeight: "40px" }}
          />
          <button
            onClick={submit}
            disabled={!input.trim() || isStreaming}
            className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-semibold disabled:opacity-40"
          >
            Send
          </button>
        </div>
        <div className="text-[11px] text-muted mt-1.5">
          Enter to send · Shift+Enter for newline
        </div>
      </div>
    </div>
  );
}

function EmptyState({ personaName }: { personaName: string }) {
  const prompts = [
    `What's the worst email you've seen this year?`,
    `What do you wish Skechers did better?`,
    `Tell me about a time the site frustrated you.`,
  ];
  return (
    <div className="max-w-lg mx-auto py-6 text-center">
      <div className="text-base font-semibold mb-1">
        You haven&apos;t talked to {personaName} yet.
      </div>
      <div className="text-sm text-muted mb-4">Try asking:</div>
      <div className="flex flex-col gap-2">
        {prompts.map((p) => (
          <div
            key={p}
            className="text-sm text-muted italic border border-dashed border-gray-200 rounded-xl px-3 py-2"
          >
            “{p}”
          </div>
        ))}
      </div>
    </div>
  );
}

function MessageBubble({
  role,
  text,
  sources,
}: {
  role: "user" | "assistant";
  text: string;
  sources: string[] | null;
}) {
  const [showSources, setShowSources] = useState(false);
  const isUser = role === "user";
  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
          isUser
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-ink"
        }`}
      >
        {isUser ? (
          <div className="whitespace-pre-wrap">{text}</div>
        ) : (
          <div className="prose prose-sm max-w-none prose-p:my-2 prose-ul:my-2 prose-li:my-0.5 prose-a:text-sky-700 prose-a:underline prose-a:decoration-sky-300 hover:prose-a:decoration-sky-600">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // Safely render links. Internal /audits/{slug} links use
                // Next.js routing (client-side nav, prefetch). External
                // links are escaped to plain text — the persona should only
                // ever surface audit URLs, so any absolute link is suspect.
                a: ({ href, children }) => {
                  if (typeof href !== "string") return <>{children}</>;
                  const isAuditLink = /^\/audits\/[a-z0-9-]+\/?$/i.test(href);
                  if (isAuditLink) {
                    return (
                      <Link
                        href={href}
                        prefetch={false}
                        className="text-sky-700 hover:text-sky-900"
                      >
                        {children}
                      </Link>
                    );
                  }
                  return <>{children}</>;
                },
              }}
            >
              {text}
            </ReactMarkdown>
          </div>
        )}
        {!isUser && sources && sources.length > 0 && (
          <div className="mt-3 pt-2 border-t border-gray-200/70">
            <button
              onClick={() => setShowSources((s) => !s)}
              className="text-xs text-muted hover:text-ink"
            >
              {showSources ? "Hide" : "Show"} sources ({sources.length})
            </button>
            {showSources && (
              <ul className="mt-1.5 text-xs space-y-0.5">
                {sources.map((s) => (
                  <li key={s}>
                    <a
                      className="text-sky-700 hover:text-sky-900 underline decoration-sky-300 hover:decoration-sky-600 break-all"
                      href={`/audits/${s}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
