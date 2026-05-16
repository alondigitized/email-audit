"use client";

import { useState } from "react";

// Single-click "copy this inbox address" affordance. Used inline next
// to each subscription row's email — admins paste it into the brand's
// newsletter form, hit submit, then click Mark done. Saves the
// double-click-to-select dance.

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // Fallback: select the text so the user can ⌘-C themselves.
      const range = document.createRange();
      const node = document.getElementById(`copy-${email}`);
      if (node) {
        range.selectNodeContents(node);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title={copied ? "Copied!" : "Copy address"}
      className="inline-flex items-center gap-1.5 group max-w-full"
    >
      <span
        id={`copy-${email}`}
        className="font-mono text-xs break-all text-left"
      >
        {email}
      </span>
      <span
        className={`shrink-0 inline-block text-[10px] uppercase tracking-wide px-1 py-0.5 rounded border ${
          copied
            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
            : "bg-gray-50 text-muted border-gray-200 group-hover:bg-gray-100 group-hover:text-gray-700"
        }`}
        aria-hidden
      >
        {copied ? "✓ copied" : "copy"}
      </span>
    </button>
  );
}
