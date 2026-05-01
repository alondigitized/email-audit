"use client";

import { useMemo } from "react";
import type { AuditSummary } from "@/lib/types";
import { FilterCombobox } from "./FilterCombobox";

// Presets cover the common slices ("what showed up this week?") without
// the cost of a calendar widget. `days` is the lookback window from now
// (inclusive of today).
export const DATE_RANGE_PRESETS = [
  { key: "today", label: "Today", days: 1 },
  { key: "7d", label: "Last 7 days", days: 7 },
  { key: "30d", label: "Last 30 days", days: 30 },
  { key: "90d", label: "Last 90 days", days: 90 },
] as const;

export type DateRangeKey = (typeof DATE_RANGE_PRESETS)[number]["key"];

// Pure helper exported for the audit-list filter hook in HomeContent.
// Returns true when `audit` falls inside the range; null/empty range
// always returns true (i.e. "all time").
export function auditMatchesRange(
  audit: AuditSummary,
  rangeKey: string | null
): boolean {
  if (!rangeKey) return true;
  const preset = DATE_RANGE_PRESETS.find((p) => p.key === rangeKey);
  if (!preset) return true;
  const t = audit.timestamp_iso ? new Date(audit.timestamp_iso).getTime() : 0;
  if (!Number.isFinite(t) || t === 0) return false;
  const cutoff = Date.now() - preset.days * 86_400_000;
  return t >= cutoff;
}

interface Props {
  audits: AuditSummary[];
  selected: string | null;
  onSelect: (key: string | null) => void;
}

export function DateRangeSelector({ audits, selected, onSelect }: Props) {
  // Per-preset count is "how many audits would show if I picked this" —
  // overlapping ranges (today ⊂ 7d ⊂ 30d) just get the wider count.
  const options = useMemo(() => {
    return DATE_RANGE_PRESETS.map((p) => ({
      key: p.key,
      label: p.label,
      count: audits.filter((a) => auditMatchesRange(a, p.key)).length,
    }));
  }, [audits]);

  return (
    <FilterCombobox
      filterLabel="When"
      allLabel="Any time"
      options={options}
      selected={selected}
      onSelect={onSelect}
    />
  );
}
