"use client";

import { useState } from "react";
import type { AuditSummary } from "@/lib/types";
import { AuditCard } from "./AuditCard";

/** Group audits by date string (YYYY-MM-DD), preserving sort order. */
function groupByDate(audits: AuditSummary[]) {
  const groups: { date: string; label: string; audits: AuditSummary[] }[] = [];
  const seen = new Map<string, number>();

  for (const audit of audits) {
    const iso = audit.timestamp_iso;
    const dateKey = iso ? iso.slice(0, 10) : "unknown";
    const label = iso
      ? new Date(iso).toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : "Unknown date";

    const idx = seen.get(dateKey);
    if (idx !== undefined) {
      groups[idx].audits.push(audit);
    } else {
      seen.set(dateKey, groups.length);
      groups.push({ date: dateKey, label, audits: [audit] });
    }
  }

  return groups;
}

const PAGE_SIZE = 10;

export function AuditList({ audits }: { audits: AuditSummary[] }) {
  const allGroups = groupByDate(audits);
  const [page, setPage] = useState(0);

  // Paginate by accumulating date groups until we hit PAGE_SIZE items
  const pages: { date: string; label: string; audits: AuditSummary[] }[][] =
    [];
  let current: typeof pages[0] = [];
  let count = 0;

  for (const group of allGroups) {
    // If adding this group would exceed PAGE_SIZE and we already have items,
    // start a new page — but always include at least one group per page
    if (count > 0 && count + group.audits.length > PAGE_SIZE) {
      pages.push(current);
      current = [];
      count = 0;
    }
    current.push(group);
    count += group.audits.length;
  }
  if (current.length > 0) pages.push(current);

  const totalPages = pages.length;
  const groups = pages[page] || [];

  return (
    <>
      {groups.map((group) => (
        <div key={group.date} className="mb-6">
          <h2 className="text-sm font-semibold text-muted mb-3">
            {group.label}
          </h2>
          <div className="flex flex-col gap-3">
            {group.audits.map((audit) => (
              <AuditCard key={audit.slug} audit={audit} />
            ))}
          </div>
        </div>
      ))}

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 text-sm">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-4 py-2 rounded-lg border border-gray-200 bg-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-gray-400 transition-colors"
          >
            &larr; Newer
          </button>
          <span className="text-muted">
            Page {page + 1} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="px-4 py-2 rounded-lg border border-gray-200 bg-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-gray-400 transition-colors"
          >
            Older &rarr;
          </button>
        </div>
      )}
    </>
  );
}
