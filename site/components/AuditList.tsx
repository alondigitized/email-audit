"use client";

import { useState } from "react";
import type { AuditSummary } from "@/lib/types";
import { localDateKey } from "@/lib/dates";
import { AuditCard } from "./AuditCard";

/** Group audits by local YYYY-MM-DD, preserving sort order. */
function groupByDate(audits: AuditSummary[]) {
  const groups: { date: string; label: string; audits: AuditSummary[] }[] = [];
  const seen = new Map<string, number>();

  for (const audit of audits) {
    const iso = audit.timestamp_iso;
    const d = iso ? new Date(iso) : null;
    const dateKey = d ? localDateKey(d) : "unknown";
    const label = d
      ? d.toLocaleDateString("en-US", {
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

interface AuditListProps {
  audits: AuditSummary[];
  filterDate?: string | null;
  onClearFilter?: () => void;
}

export function AuditList({ audits, filterDate, onClearFilter }: AuditListProps) {
  const visibleAudits = filterDate
    ? audits.filter((a) => {
        if (!a.timestamp_iso) return false;
        return localDateKey(new Date(a.timestamp_iso)) === filterDate;
      })
    : audits;
  const allGroups = groupByDate(visibleAudits);
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

  const safePage = filterDate ? 0 : page;
  const totalPages = pages.length;
  const groups = pages[safePage] || [];

  return (
    <>
      {filterDate && (
        <div className="flex items-center justify-between gap-3 mb-4 px-4 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-line)] text-sm">
          <span className="text-muted">
            Showing <strong className="text-ink">{visibleAudits.length}</strong>{" "}
            email{visibleAudits.length === 1 ? "" : "s"} for{" "}
            <strong className="text-ink">{filterDate}</strong>
          </span>
          <button
            onClick={onClearFilter}
            className="text-xs px-3 py-1 rounded-lg border border-gray-200 bg-white hover:border-gray-400 transition-colors"
          >
            Clear filter
          </button>
        </div>
      )}
      {groups.length === 0 && filterDate && (
        <div className="text-muted text-sm px-4 py-6 text-center">
          No emails on this date.
        </div>
      )}
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

      {!filterDate && totalPages > 1 && (
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
