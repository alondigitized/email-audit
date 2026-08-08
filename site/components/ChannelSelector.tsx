"use client";

import { useMemo } from "react";
import type { AuditSummary } from "@/lib/types";
import { FilterCombobox } from "./FilterCombobox";

// Channel = the surface the audit was captured from, mapping 1:1 to the
// audit row's `type`. UI label maps:
//   email     → "Email"
//   site      → "Web"
//   inventory → "Inventory"
//   qa        → "QA"
// Internal values stay aligned with the DB so filter math stays simple.
//
// Every audit type must appear here. When only email/site were listed,
// inventory audits matched no option at all and were reachable only under
// "All channels" — so a whole audit type was effectively unfilterable.
// Adding a type to auditTypeSchema means adding it here too.
export const CHANNELS = [
  { key: "email", label: "Email" },
  { key: "site", label: "Web" },
  { key: "inventory", label: "Inventory" },
  { key: "qa", label: "QA" },
] as const;

export type ChannelKey = (typeof CHANNELS)[number]["key"];

export function auditMatchesChannel(
  audit: AuditSummary,
  channel: string | null
): boolean {
  if (!channel) return true;
  return (audit.type ?? "email") === channel;
}

interface Props {
  audits: AuditSummary[];
  selected: string | null;
  onSelect: (key: string | null) => void;
}

export function ChannelSelector({ audits, selected, onSelect }: Props) {
  const options = useMemo(() => {
    // Drop channels with nothing in them, matching the faceted behaviour of
    // the other selectors — picking an option that yields an empty list is
    // just a dead end.
    return CHANNELS.map((c) => ({
      key: c.key,
      label: c.label,
      count: audits.filter((a) => auditMatchesChannel(a, c.key)).length,
    })).filter((o) => o.count > 0);
  }, [audits]);
  return (
    <FilterCombobox
      filterLabel="Channel"
      allLabel="All channels"
      options={options}
      selected={selected}
      onSelect={onSelect}
    />
  );
}
