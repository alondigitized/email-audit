"use client";

import { useMemo, useState } from "react";
import type { AuditSummary } from "@/lib/types";
import { ActivityChart } from "./ActivityChart";
import { AuditList } from "./AuditList";
import { PersonaSelector } from "./PersonaSelector";
import { BrandSelector } from "./BrandSelector";

// Brand identity comes from the audit row's `from_display_name` (e.g.
// "Skechers"). Some senders share a display name across orgs (rare),
// so we key options on the lowercased label — close enough for filtering
// without joining on the experience.brand_domain column.
function brandKey(label: string): string {
  return label.trim().toLowerCase();
}

export function HomeContent({ audits }: { audits: AuditSummary[] }) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // Persona options for the combobox: keyed on slug, sorted by audit
  // count desc (matches BrandSelector). Each row already carries
  // persona_name after the audits query resolves them.
  const availablePersonas = useMemo(() => {
    const counts = new Map<string, { label: string; count: number }>();
    for (const a of audits) {
      if (!a.persona) continue;
      const existing = counts.get(a.persona);
      if (existing) {
        existing.count += 1;
      } else {
        counts.set(a.persona, {
          label: a.persona_name ?? a.persona,
          count: 1,
        });
      }
    }
    return [...counts.entries()]
      .map(([key, v]) => ({ key, label: v.label, count: v.count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }, [audits]);

  // Persona scope applies first — when a persona is picked, the brand
  // dropdown only lists brands that persona has audited.
  const personaScopedAudits = useMemo(() => {
    if (!selectedPersona) return audits;
    return audits.filter((a) => a.persona === selectedPersona);
  }, [audits, selectedPersona]);

  const availableBrands = useMemo(() => {
    const counts = new Map<string, { label: string; count: number }>();
    for (const a of personaScopedAudits) {
      const label = a.from_display_name?.trim();
      if (!label) continue;
      const key = brandKey(label);
      const existing = counts.get(key);
      if (existing) {
        existing.count += 1;
      } else {
        counts.set(key, { label, count: 1 });
      }
    }
    return [...counts.entries()]
      .map(([key, v]) => ({ key, label: v.label, count: v.count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  }, [personaScopedAudits]);

  // Reset brand if the active selection isn't in the scoped list anymore
  // (happens when the user picks a persona that hasn't audited that brand).
  const visibleAudits = useMemo(() => {
    let list = personaScopedAudits;
    if (selectedBrand) {
      list = list.filter(
        (a) => brandKey(a.from_display_name ?? "") === selectedBrand
      );
    }
    return list;
  }, [personaScopedAudits, selectedBrand]);

  return (
    <>
      <PersonaSelector
        personas={availablePersonas}
        selected={selectedPersona}
        onSelect={(slug) => {
          setSelectedPersona(slug);
          setSelectedBrand(null);
          setSelectedDate(null);
        }}
      />
      <BrandSelector
        brands={availableBrands}
        selected={selectedBrand}
        onSelect={(key) => {
          setSelectedBrand(key);
          setSelectedDate(null);
        }}
      />
      <ActivityChart
        audits={visibleAudits}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
      <AuditList
        audits={visibleAudits}
        filterDate={selectedDate}
        onClearFilter={() => setSelectedDate(null)}
      />
    </>
  );
}
