"use client";

import { useState } from "react";

export function CopyInboxButton({
  address,
  compact = false,
}: {
  address: string;
  compact?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // older browsers / iOS quirks — selection fallback
      const el = document.createElement("textarea");
      el.value = address;
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // give up — user can long-press to copy
      }
      document.body.removeChild(el);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={
        compact
          ? "inline-flex items-center gap-2 text-xs font-mono bg-white border border-gray-300 rounded px-2 py-1 hover:border-sky-500 transition-colors"
          : "inline-flex items-center gap-3 text-sm font-mono bg-white border border-gray-300 rounded-lg px-3 py-2 hover:border-sky-500 transition-colors"
      }
    >
      <span className="select-all">{address}</span>
      <span
        className={`text-[10px] uppercase tracking-wide ${
          copied ? "text-emerald-600" : "text-muted"
        }`}
      >
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
