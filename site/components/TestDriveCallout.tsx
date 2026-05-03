"use client";

import { useEffect, useState } from "react";

type PersonaInbox = {
  slug: string;
  name: string;
  short: string;
  inbox: string;
};

const DISMISS_KEY = "etell.test-drive-callout.dismissed";

// Surface the "send a draft to a persona inbox to get a pre-flight audit"
// workflow. This already works end-to-end — emails sent to the persona's
// @etell.app / @agentmail.to address get ingested by the email-monitor
// daemon and produce a full scored audit at /audits within ~3 minutes.
// The feature was just invisible. This banner makes it discoverable.
export function TestDriveCallout({ personas }: { personas: PersonaInbox[] }) {
  const [dismissed, setDismissed] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    setHydrated(true);
    if (typeof window !== "undefined") {
      setDismissed(window.localStorage.getItem(DISMISS_KEY) === "1");
    }
  }, []);

  if (!hydrated || dismissed || personas.length === 0) return null;

  function dismiss() {
    setDismissed(true);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, "1");
    }
  }

  async function copy(addr: string) {
    try {
      await navigator.clipboard.writeText(addr);
      setCopied(addr);
      setTimeout(() => setCopied((c) => (c === addr ? null : c)), 1500);
    } catch {}
  }

  return (
    <div className="mb-5 rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 sm:px-5 sm:py-4">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <h3 className="text-sm font-semibold text-sky-900 mb-0.5">
            Test-drive a draft before you send it
          </h3>
          <p className="text-[13px] text-sky-900/80 leading-snug">
            Send your draft email to any persona&apos;s inbox below. A scored
            audit lands here within ~3 minutes — same rubric, same{" "}
            <a href="/scoring" className="underline">
              first-person review
            </a>{" "}
            you see for sent campaigns.
          </p>
        </div>
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="shrink-0 text-sky-700/60 hover:text-sky-900 text-lg leading-none"
        >
          ×
        </button>
      </div>
      <ul className="flex flex-wrap gap-1.5">
        {personas.slice(0, 8).map((p) => (
          <li key={p.slug}>
            <button
              onClick={() => copy(p.inbox)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-white border border-sky-200 hover:border-sky-400 transition-colors"
              title={`Copy ${p.name}'s inbox`}
            >
              <span className="text-sky-700 font-semibold">
                {p.short ?? p.name}
              </span>
              <span className="font-mono text-[11px] text-gray-700 break-all">
                {p.inbox}
              </span>
              <span className="text-[10px] uppercase tracking-wide text-emerald-700 ml-1">
                {copied === p.inbox ? "copied" : "copy"}
              </span>
            </button>
          </li>
        ))}
        {personas.length > 8 && (
          <li className="text-[11px] text-sky-900/70 self-center">
            + {personas.length - 8} more on persona detail pages
          </li>
        )}
      </ul>
    </div>
  );
}
