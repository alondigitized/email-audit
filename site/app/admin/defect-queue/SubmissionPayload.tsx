"use client";

import { useState } from "react";

export type ReportFields = {
  location: string;
  url: string;
  area: string;
  device: string;
  browser: string;
  urgency: string;
  reporterEmail: string;
  description: string;
  businessImpact: string | null;
  expected: string | null;
  observed: string | null;
  reproSteps: string[];
  elements: {
    selector?: string;
    src?: string;
    location?: string;
    snippet?: string;
    note?: string;
  }[];
};

/**
 * Composes the whole finding into the one block of prose that goes in the
 * form's "Describe the issue" field.
 *
 * The form has a single free-text field, so everything that makes a report
 * actionable — impact, the specific offending elements, expected vs observed,
 * repro — has to be folded into it. Named elements come first after the
 * summary because "which ones?" is the first question anyone receiving this
 * will ask.
 */
function composeIssueText(f: ReportFields): string {
  const parts: string[] = [f.description.trim()];

  if (f.businessImpact) {
    parts.push(`\nBUSINESS IMPACT\n${f.businessImpact.trim()}`);
  }

  if (f.elements.length) {
    const lines = f.elements.map((e, i) => {
      const bits = [
        e.selector ? `selector: ${e.selector}` : null,
        e.src ? `src: ${e.src}` : null,
        e.location ? `location: ${e.location}` : null,
        e.note ? `note: ${e.note}` : null,
      ].filter(Boolean);
      return `${i + 1}. ${bits.join("  |  ")}${e.snippet ? `\n   ${e.snippet}` : ""}`;
    });
    parts.push(`\nAFFECTED ELEMENTS (${f.elements.length})\n${lines.join("\n")}`);
  }

  if (f.expected || f.observed) {
    parts.push(
      `\nEXPECTED\n${f.expected ?? "—"}\n\nOBSERVED\n${f.observed ?? "—"}`
    );
  }

  if (f.reproSteps.length) {
    parts.push(
      `\nSTEPS TO REPRODUCE\n${f.reproSteps.map((s, i) => `${i + 1}. ${s}`).join("\n")}`
    );
  }

  parts.push(`\nURL\n${f.url}`);
  return parts.join("\n");
}

export function SubmissionPayload({ fields }: { fields: ReportFields }) {
  const [copied, setCopied] = useState<string | null>(null);

  const issueText = composeIssueText(fields);
  const dropdowns: [string, string][] = [
    ["Location", fields.location],
    ["Area of Site", fields.area],
    ["Device", fields.device],
    ["Browser", fields.browser],
    ["Urgency", fields.urgency],
    ["Your email address", fields.reporterEmail],
  ];

  async function copy(key: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 1400);
    } catch {
      /* clipboard blocked — the text is selectable in the box below */
    }
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
        <p className="text-[11px] text-muted">
          Paste into <span className="font-medium">Describe the issue</span>,
          then set the dropdowns below and attach the screenshot.
        </p>
        <button
          type="button"
          onClick={() => copy("__issue", issueText)}
          className="px-2.5 py-1 bg-gray-900 text-white rounded-lg text-[11px] font-medium hover:bg-gray-700"
        >
          {copied === "__issue" ? "Copied ✓" : "Copy issue text"}
        </button>
      </div>

      <textarea
        readOnly
        value={issueText}
        rows={Math.min(20, issueText.split("\n").length + 1)}
        onFocus={(e) => e.currentTarget.select()}
        className="w-full text-[11px] font-mono border border-gray-200 rounded-lg p-2 bg-white mb-3"
      />

      <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
        <p className="text-[11px] text-muted">Dropdown / field values</p>
        <button
          type="button"
          onClick={() =>
            copy(
              "__all",
              dropdowns.map(([k, v]) => `${k}: ${v || "—"}`).join("\n") +
                `\n\nDescribe the issue:\n${issueText}`
            )
          }
          className="px-2.5 py-1 border border-gray-300 rounded-lg text-[11px] hover:bg-white"
        >
          {copied === "__all" ? "Copied ✓" : "Copy everything"}
        </button>
      </div>

      <dl className="text-xs space-y-1">
        {dropdowns.map(([k, v]) => (
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
