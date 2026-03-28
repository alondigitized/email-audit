"use client";

import { useState } from "react";
import type { QaReport, QaCheck, QaBusinessGroup } from "@/lib/types";

const GROUP_ORDER: QaBusinessGroup[] = [
  "broken_experience",
  "compliance",
  "deliverability",
  "info",
];

const GROUP_LABELS: Record<QaBusinessGroup, string> = {
  broken_experience: "Broken Experience",
  compliance: "Compliance",
  deliverability: "Deliverability",
  info: "Info",
};

/** Map old category names to new business-impact groups by check_id */
const CHECK_TO_GROUP: Record<string, QaBusinessGroup> = {
  // Broken Experience
  link_4xx: "broken_experience",
  link_5xx: "broken_experience",
  link_error: "broken_experience",
  link_redirect_loop: "broken_experience",
  link_doubled_domain: "broken_experience",
  link_malformed: "broken_experience",
  link_many_redirects: "broken_experience",
  links_none: "broken_experience",
  links_ok: "broken_experience",
  merge_raw_token: "broken_experience",
  merge_empty_greeting: "broken_experience",
  merge_doubled_domain: "broken_experience",
  personalization_ok: "broken_experience",
  // Compliance
  canspam_address: "compliance",
  canspam_address_missing: "compliance",
  body_unsub_link: "compliance",
  body_unsub_text: "compliance",
  body_unsub_missing: "compliance",
  header_list_unsub: "compliance",
  header_list_unsub_missing: "compliance",
  header_list_unsub_invalid: "compliance",
  header_one_click: "compliance",
  header_one_click_missing: "compliance",
  // Deliverability
  auth_results: "deliverability",
  auth_results_missing: "deliverability",
  text_fallback_empty: "deliverability",
  text_mostly_urls: "deliverability",
  rendering_ok: "deliverability",
  // Info
  img_http: "info",
  img_missing_alt: "info",
  link_tracking_skipped: "info",
  link_tracking_expired: "info",
  link_inconclusive: "info",
  link_rate_limited: "info", // legacy check_id
};

function classifyChecks(
  categories: Record<string, { checks: QaCheck[] }>
): Record<QaBusinessGroup, QaCheck[]> {
  const groups: Record<QaBusinessGroup, QaCheck[]> = {
    broken_experience: [],
    compliance: [],
    deliverability: [],
    info: [],
  };

  // If categories already use new names, use them directly
  const catNames = Object.keys(categories);
  const isNewFormat = catNames.some(
    (n) => n === "broken_experience" || n === "deliverability"
  );

  if (isNewFormat) {
    for (const [catName, catData] of Object.entries(categories)) {
      const group = catName as QaBusinessGroup;
      if (groups[group]) {
        groups[group].push(...catData.checks);
      }
    }
  } else {
    // Legacy format: reclassify by check_id
    for (const catData of Object.values(categories)) {
      for (const check of catData.checks) {
        const group = CHECK_TO_GROUP[check.check_id] ?? "info";
        groups[group].push(check);
      }
    }
  }

  return groups;
}

function StatusIcon({ status }: { status: string }) {
  if (status === "fail")
    return <span className="text-red-600">{"\u2718"}</span>;
  if (status === "warn")
    return <span className="text-amber-600">{"\u26a0"}</span>;
  if (status === "info")
    return <span className="text-blue-500">{"\u2139"}</span>;
  return <span className="text-green-600">{"\u2714"}</span>;
}

function CheckTable({ checks }: { checks: QaCheck[] }) {
  return (
    <div className="overflow-x-auto -mx-2">
      <table className="w-full border-collapse text-[13px] min-w-0">
        <tbody>
          {checks.map((check, i) => (
            <tr key={i}>
              <td className="w-7 text-center py-1.5 px-2 border-b border-gray-200 align-top shrink-0">
                <StatusIcon status={check.status} />
              </td>
              <td className="py-1.5 px-2 border-b border-gray-200 align-top max-md:hidden">
                {check.label}
              </td>
              <td className="py-1.5 px-2 border-b border-gray-200 align-top break-words">
                <span className="md:hidden font-medium">{check.label}: </span>
                {check.detail}
                {check.url && (
                  <>
                    <br />
                    <span className="text-muted text-[11px] break-all">
                      {check.url}
                    </span>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function QaCard({ qa }: { qa: QaReport | null }) {
  const [showInfo, setShowInfo] = useState(false);

  if (!qa) return null;

  const { summary, categories } = qa;
  const groups = classifyChecks(categories);

  return (
    <div className="bg-white border border-gray-200 rounded-[20px] p-6 shadow-sm">
      <h2 className="mt-0 mb-2.5">Automated QA</h2>
      <div className="flex gap-4 flex-wrap mb-3.5 text-sm font-semibold">
        <span>
          Pass rate: <strong>{summary.overall_pass_rate}</strong>
        </span>
        <span className="text-red-600">Issues: {summary.total_issues}</span>
        <span className="text-amber-600">
          Warnings: {summary.total_warnings}
        </span>
      </div>

      {GROUP_ORDER.filter((g) => g !== "info").map((groupName) => {
        const checks = groups[groupName];
        const nonPass = checks.filter((c) => c.status !== "pass");
        if (nonPass.length === 0) return null;

        return (
          <div key={groupName} className="mt-3">
            <h3 className="text-[13px] uppercase text-muted tracking-wide mb-1.5">
              {GROUP_LABELS[groupName]}
            </h3>
            <CheckTable checks={nonPass} />
          </div>
        );
      })}

      {/* Info section — collapsed by default */}
      {groups.info.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="text-[13px] text-muted hover:text-gray-700 transition-colors"
          >
            {showInfo ? "Hide" : "Show"} {groups.info.length} info item
            {groups.info.length !== 1 ? "s" : ""}
            <span className="ml-1">{showInfo ? "\u25b4" : "\u25be"}</span>
          </button>
          {showInfo && (
            <div className="mt-2">
              <CheckTable checks={groups.info} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
