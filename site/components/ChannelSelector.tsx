"use client";

import { useMemo } from "react";
import type { AuditSummary } from "@/lib/types";
import { FilterCombobox } from "./FilterCombobox";

// Channel = the surface the audit was captured from. Audit row's `type`
// is 'email' (inbox-delivered) or 'site' (daemon journey / homepage
// snapshot / inventory walk). UI label maps:
//   email → "Email"
//   site  → "Web"
// Internal values stay aligned with the DB so filter math stays simple.
export const CHANNELS = [
  { key: "email", label: "Email" },
  { key: "site", label: "Web" },
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
    return CHANNELS.map((c) => ({
      key: c.key,
      label: c.label,
      count: audits.filter((a) => auditMatchesChannel(a, c.key)).length,
    }));
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
