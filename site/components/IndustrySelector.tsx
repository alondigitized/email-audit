"use client";

import { useMemo } from "react";
import type { AuditSummary } from "@/lib/types";
import { FilterCombobox } from "./FilterCombobox";

// Industry filter. The audit list query joins persona.industry +
// persona_template.industry via COALESCE so every audit row has a
// single industry tag (or null for legacy rows that predate the
// audit-types refactor). Sits in the filter row between channel and
// persona — picking an industry narrows the persona + brand dropdowns
// to that category, same faceted-pool pattern.

interface Props {
  audits: AuditSummary[];
  selected: string | null;
  onSelect: (key: string | null) => void;
}

export function IndustrySelector({ audits, selected, onSelect }: Props) {
  const options = useMemo(() => {
    const counts = new Map<string, number>();
    for (const a of audits) {
      if (!a.industry) continue;
      counts.set(a.industry, (counts.get(a.industry) ?? 0) + 1);
    }
    return [...counts.entries()]
      .map(([key, count]) => ({
        key,
        // Display as the raw industry slug — these are already
        // short, lowercase, hyphenated (e.g. "home-furniture",
        // "travel-booking"). Keep them lowercase so they read as
        // category tags, not titles.
        label: key,
        count,
      }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }, [audits]);

  // Hide the filter entirely when there are no industry-tagged audits
  // in scope (e.g. all-legacy view) so we don't surface dead chrome.
  if (options.length === 0) return null;

  return (
    <FilterCombobox
      filterLabel="Industry"
      allLabel="All industries"
      options={options}
      selected={selected}
      onSelect={onSelect}
    />
  );
}

export function auditMatchesIndustry(
  audit: AuditSummary,
  industry: string | null
): boolean {
  if (!industry) return true;
  return audit.industry === industry;
}
