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

  // Derive persona metas from the audits themselves — each row already
  // carries persona_name / persona_short after the audits query resolves
  // them. Avoids needing a separate persona registry in this client tree.
  const availablePersonas = useMemo(() => {
    const bySlug = new Map<
      string,
      { slug: string; name: string; short: string }
    >();
    for (const a of audits) {
      if (!a.persona) continue;
      if (bySlug.has(a.persona)) continue;
      bySlug.set(a.persona, {
        slug: a.persona,
        name: a.persona_name ?? a.persona,
        short: a.persona_short ?? a.persona,
      });
    }
    return Array.from(bySlug.values()).sort((a, b) =>
      a.slug.localeCompare(b.slug)
    );
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
