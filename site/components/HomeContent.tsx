"use client";

import { useState } from "react";
import type { AuditSummary } from "@/lib/types";
import { ActivityChart } from "./ActivityChart";
import { AuditList } from "./AuditList";

export function HomeContent({ audits }: { audits: AuditSummary[] }) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <>
      <ActivityChart
        audits={audits}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
      <AuditList
        audits={audits}
        filterDate={selectedDate}
        onClearFilter={() => setSelectedDate(null)}
      />
    </>
  );
}
