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
  // Persona-specific starter prompts shown on the empty state.
  // Server-composed from brand label + identity focus areas so each
  // persona's empty-state reads like questions you'd actually ask them.
  starterPrompts: string[];
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
  starterPrompts,
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
  // Optimistic bubble shown during the createChatThreadAction round-trip on
  // a fresh thread — without this, the textarea clears and nothing appears
  // for 200-1500ms while the server action runs, which reads as "my message
  // disappeared." Cleared as soon as useChat picks up the canonical bubble.
  const [pendingText, setPendingText] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // One-shot auto-retry on transient stream-aborted failures. The Vercel
  // function returns 200 + SSE headers; the LLM stream sometimes drops
  // before the first chunk reaches the browser (idle gateway, brief Funnel
  // hiccup, etc.). useChat surfaces that as a "Load failed" error toast.
  // We retry the SAME user text once, silently, before showing the error.
  const lastSentTextRef = useRef<string | null>(null);
  const retryAttemptedRef = useRef(false);

  // Keep local title in sync when navigating between threads.
  useEffect(() => {
    setThreadTitle(initialThreadTitle);
    setEditingTitle(false);
  }, [initialThreadId, initialThreadTitle]);

  // Inter-thread navigation: when the user clicks a different thread in
  // the sidebar, page.tsx re-renders with a new initialThreadId +
  // initialMessages. Since the ChatClient is keyed stably per persona
  // (no remount), we sync useChat's internal state here.
  //
  // Skip the reset when initialThreadId === threadIdRef.current — that
  // happens after the first send commits a fresh thread and Next.js
  // refreshes the URL: the in-memory useChat already has the user msg
  // and is streaming the assistant, and we don't want to wipe that.

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

  // (companion to the comment above — placed here so we have access to
  // setMessages from the useChat hook below.)

  // Pre-warm the local LLM on mount so the first user message doesn't pay
  // the model-load cold-start tax. Fire-and-forget; failures are silent
  // (the real chat call still works, just slower on first turn).
  useEffect(() => {
    const ctl = new AbortController();
    fetch("/api/chat/warmup", {
      method: "POST",
      signal: ctl.signal,
      headers: { "Content-Type": "application/json" },
    }).catch(() => {});
    return () => ctl.abort();
  }, [personaSlug]);

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
      // Successful turn — clear the retry budget so the next turn gets
      // its own one-shot.
      retryAttemptedRef.current = false;
      // Refresh server component (sidebar thread list) in the background.
      router.refresh();
    },
  });

  // Inter-thread navigation reset (see comment above threadIdRef block).
  // initialMessages excluded from deps on purpose — its reference changes
  // every render; we only want to act on real thread transitions.
  useEffect(() => {
    if (initialThreadId !== threadIdRef.current) {
      setMessages(toUIMessages(initialMessages));
      threadIdRef.current = initialThreadId;
      setThreadId(initialThreadId);
      setPendingText(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialThreadId, setMessages]);

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
      // Render the user bubble optimistically so the typed message doesn't
      // vanish during the action round-trip. Cleared after sendMessage
      // adds the canonical bubble to useChat's `messages`.
      setPendingText(text);
      const result = await createChatThreadAction(personaSlug);
      if (!result.ok) {
        setPendingText(null);
        // Restore the user's text so they can retry without retyping.
        setInput(text);
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
    lastSentTextRef.current = text;
    retryAttemptedRef.current = false;
    sendMessage({ text });
  }, [input, isStreaming, sendMessage, personaSlug]);

  // One-shot auto-retry: if useChat surfaces an error AND we haven't
  // already retried this turn AND we know what was sent, fire it again.
  // 4xx is the user's fault (auth/permission/rate-limit) — surface those
  // immediately. 5xx + network errors are the transient class worth
  // retrying.
  useEffect(() => {
    if (!error) return;
    if (retryAttemptedRef.current) return;
    if (!lastSentTextRef.current) return;
    const msg = (error.message ?? "").toLowerCase();
    const looksClient = /\b(unauthorized|forbidden|rate.?limit|too many requests|400|401|403|404|429)\b/.test(
      msg
    );
    if (looksClient) return;
    retryAttemptedRef.current = true;
    const text = lastSentTextRef.current;
    // Tiny delay so React applies the error → clear-error transition
    // cleanly before we re-fire. Otherwise the model occasionally double-
    // submits inside the same render pass.
    const t = window.setTimeout(() => {
      sendMessage({ text });
    }, 350);
    return () => window.clearTimeout(t);
  }, [error, sendMessage]);

  // Clear the optimistic bubble once useChat has picked up the canonical
  // user message. Without this the optimistic and the real bubble would
  // briefly stack.
  useEffect(() => {
    if (pendingText !== null && messages.length > 0) {
      setPendingText(null);
    }
  }, [messages.length, pendingText]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const isEmpty = messages.length === 0 && pendingText === null;

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
          <EmptyState personaName={personaName} prompts={starterPrompts} />
        ) : (
          <>
            {messages.map((m) => (
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
            ))}
            {pendingText !== null && messages.length === 0 && (
              <MessageBubble role="user" text={pendingText} sources={null} />
            )}
          </>
        )}
        {(isStreaming && messages[messages.length - 1]?.role === "user") ||
        (pendingText !== null && messages.length === 0) ? (
          <TypingIndicator personaName={personaName} />
        ) : null}
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

function TypingIndicator({ personaName }: { personaName: string }) {
  return (
    <div className="flex justify-start" aria-live="polite">
      <div className="flex items-center gap-2 bg-gray-100 text-ink rounded-2xl px-4 py-3">
        <span className="sr-only">{personaName} is thinking</span>
        <span className="flex gap-1" aria-hidden="true">
          <span
            className="block h-2 w-2 rounded-full bg-gray-500/70 animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="block h-2 w-2 rounded-full bg-gray-500/70 animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="block h-2 w-2 rounded-full bg-gray-500/70 animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </span>
        <span className="text-xs text-muted">
          {personaName} is thinking…
        </span>
      </div>
    </div>
  );
}

function EmptyState({
  personaName,
  prompts,
}: {
  personaName: string;
  // Server-composed persona-specific prompts. May be empty if generation
  // hit an unexpected gap; fall back to a single generic line.
  prompts: string[];
}) {
  const lines =
    prompts.length > 0
      ? prompts
      : [`What's the worst marketing email you've seen this year?`];
  return (
    <div className="max-w-lg mx-auto py-6 text-center">
      <div className="text-base font-semibold mb-1">
        You haven&apos;t talked to {personaName} yet.
      </div>
      <div className="text-sm text-muted mb-4">Try asking:</div>
      <div className="flex flex-col gap-2">
        {lines.map((p) => (
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
        className={`max-w-[85%] min-w-0 rounded-2xl px-4 py-3 text-sm break-words [overflow-wrap:anywhere] ${
          isUser
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-ink"
        }`}
      >
        {isUser ? (
          <div className="whitespace-pre-wrap">{text}</div>
        ) : (
          <div className="prose prose-sm max-w-none prose-p:my-2 prose-ul:my-2 prose-li:my-0.5 prose-a:text-sky-700 prose-a:underline prose-a:decoration-sky-300 hover:prose-a:decoration-sky-600 prose-pre:whitespace-pre-wrap prose-pre:break-words prose-code:break-words">
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
