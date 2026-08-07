"use client";

import { useState } from "react";

/**
 * Renders an approved defect as the exact field set of the Skechers
 * "See Something? SAY Something!" intake form, so filing is copy-paste
 * rather than retyping. Field names and order match the live form.
 *
 * Per-field copy buttons exist because the form is a series of separate
 * inputs and dropdowns — one blob of text would just have to be pulled
 * apart again by hand.
 */
export function SubmissionPayload({
  payload,
}: {
  payload: Record<string, string>;
}) {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(key: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 1200);
    } catch {
      /* clipboard blocked — the value is visible and selectable anyway */
    }
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
      <p className="text-[11px] text-muted mb-2">
        Form payload — attach the evidence screenshot above (the form requires
        at least one).
      </p>
      <dl className="text-xs space-y-1">
        {Object.entries(payload).map(([k, v]) => (
          <div key={k} className="flex gap-2 items-start">
            <dt className="text-muted w-36 shrink-0">{k}</dt>
            <dd className="flex-1 break-all font-mono">{v || "—"}</dd>
            {v && (
              <button
                type="button"
                onClick={() => copy(k, v)}
                className="shrink-0 text-[10px] px-1.5 py-0.5 rounded border border-gray-300 hover:bg-white"
              >
                {copied === k ? "copied" : "copy"}
              </button>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
