"use client";

import { useState } from "react";

export function ReferralLinkRow({ link }: { link: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <input
        readOnly
        value={link}
        onFocus={(e) => e.currentTarget.select()}
        className="flex-1 py-2 px-3 border border-gray-200 rounded-lg text-xs font-mono"
      />
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(link);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
          } catch {
            // ignore — no clipboard permission
          }
        }}
        className="px-3 py-2 bg-accent text-white rounded-lg text-xs font-semibold whitespace-nowrap"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
