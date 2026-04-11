"use client";

import { useMemo, useState } from "react";
import type { AuditSummary } from "@/lib/types";
import { ActivityChart } from "./ActivityChart";
import { AuditList } from "./AuditList";
import { PersonaSelector } from "./PersonaSelector";

export function HomeContent({ audits }: { audits: AuditSummary[] }) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

  const availablePersonas = useMemo(() => {
    const set = new Set<string>();
    for (const a of audits) if (a.persona) set.add(a.persona);
    return Array.from(set).sort();
  }, [audits]);

  const visibleAudits = useMemo(() => {
    if (!selectedPersona) return audits;
    return audits.filter((a) => a.persona === selectedPersona);
  }, [audits, selectedPersona]);

  return (
    <>
      <PersonaSelector
        available={availablePersonas}
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
