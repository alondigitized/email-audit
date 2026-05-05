"use client";

import { useState, useTransition } from "react";
import { createShareLinkAction } from "./actions";

// Idempotent share-link button. First click mints (or returns the
// existing) token; the URL stays in local state for the rest of the
// session so subsequent clicks just re-copy without another round-trip.
export function ShareButton({ slug }: { slug: string }) {
  const [pending, startTransition] = useTransition();
  const [url, setUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function fetchAndCopy() {
    setError(null);
    startTransition(async () => {
      let resolved = url;
      if (!resolved) {
        const fd = new FormData();
        fd.append("slug", slug);
        const res = await createShareLinkAction(fd);
        if (!res.ok) {
          setError(res.error);
          return;
        }
        resolved = res.url;
        setUrl(resolved);
      }
      try {
        await navigator.clipboard.writeText(resolved);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch {
        // Clipboard write blocked (rare — non-secure context). Fall
        // back to revealing the URL inline so the user can long-press
        // / right-click to copy themselves.
      }
    });
  }

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={fetchAndCopy}
        disabled={pending}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg disabled:opacity-50"
      >
        {pending
          ? "Generating…"
          : copied
            ? "Link copied"
            : url
              ? "Copy link again"
              : "Copy share link"}
      </button>
      {url && (
        <code className="text-[11px] text-muted truncate max-w-[260px]">
          {url}
        </code>
      )}
      {error && (
        <span className="text-[11px] text-rose-700">{error}</span>
      )}
    </div>
  );
}
