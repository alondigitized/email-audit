"use client";

import { useMemo, useState } from "react";
import type { AuditSummary } from "@/lib/types";
import { ActivityChart } from "./ActivityChart";
import { AuditList } from "./AuditList";
import { PersonaSelector } from "./PersonaSelector";

export function HomeContent({ audits }: { audits: AuditSummary[] }) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

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

  const visibleAudits = useMemo(() => {
    if (!selectedPersona) return audits;
    return audits.filter((a) => a.persona === selectedPersona);
  }, [audits, selectedPersona]);

  return (
    <>
      <PersonaSelector
        personas={availablePersonas}
        selected={selectedPersona}
        onSelect={(slug) => {
          setSelectedPersona(slug);
          // Clear date filter when switching personas — otherwise stale filters confuse
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
