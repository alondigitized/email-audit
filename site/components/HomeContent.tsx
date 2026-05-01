"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { AuditSummary } from "@/lib/types";
import { ActivityChart } from "./ActivityChart";
import { AuditList } from "./AuditList";
import { PersonaSelector } from "./PersonaSelector";
import { BrandSelector } from "./BrandSelector";
import {
  DateRangeSelector,
  auditMatchesRange,
  DATE_RANGE_PRESETS,
} from "./DateRangeSelector";

// Brand identity comes from the audit row's `from_display_name` (e.g.
// "Skechers"). Some senders share a display name across orgs (rare),
// so we key options on the lowercased label — close enough for filtering
// without joining on the experience.brand_domain column.
function brandKey(label: string): string {
  return label.trim().toLowerCase();
}

// URL params used to persist filter state across the list → detail →
// back navigation. Short keys (r/p/b/d) keep the URL short. Empty/null
// values are dropped from the URL so the default state is `/`.
const PARAM_RANGE = "r";
const PARAM_PERSONA = "p";
const PARAM_BRAND = "b";
const PARAM_DAY = "d";

export function HomeContent({ audits }: { audits: AuditSummary[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Filter hierarchy: range → persona → brand → specific day. Each level
  // narrows the set the next operates on, so the dropdown counts always
  // reflect what's actually pickable. Initial values come from the URL
  // so back-navigation from /audits/<slug> restores the previous view.
  const [selectedRange, setSelectedRange] = useState<string | null>(
    () => searchParams.get(PARAM_RANGE)
  );
  const [selectedPersona, setSelectedPersona] = useState<string | null>(
    () => searchParams.get(PARAM_PERSONA)
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    () => searchParams.get(PARAM_BRAND)
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(
    () => searchParams.get(PARAM_DAY)
  );

  // Mirror filter state into the URL via replace (no history entry per
  // change — back from /audits/<slug> still lands here, but we don't
  // accumulate one entry per dropdown click). scroll:false avoids
  // jumping the page when the user picks a filter further down.
  useEffect(() => {
    const next = new URLSearchParams();
    if (selectedRange) next.set(PARAM_RANGE, selectedRange);
    if (selectedPersona) next.set(PARAM_PERSONA, selectedPersona);
    if (selectedBrand) next.set(PARAM_BRAND, selectedBrand);
    if (selectedDate) next.set(PARAM_DAY, selectedDate);
    const qs = next.toString();
    const target = qs ? `${pathname}?${qs}` : pathname;
    const current =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    if (target !== current) router.replace(target, { scroll: false });
  }, [
    selectedRange,
    selectedPersona,
    selectedBrand,
    selectedDate,
    pathname,
    router,
    searchParams,
  ]);

  const rangeScopedAudits = useMemo(() => {
    if (!selectedRange) return audits;
    return audits.filter((a) => auditMatchesRange(a, selectedRange));
  }, [audits, selectedRange]);

  // Faceted scoping: each filter's dropdown options reflect "what's
  // pickable given every OTHER active filter". So picking brand=DSW
  // narrows the persona dropdown to only personas with DSW audits, and
  // vice-versa. The visible list applies both.
  //
  // Range sits above the facets — it always narrows everything below.
  const personaPool = useMemo(() => {
    if (!selectedBrand) return rangeScopedAudits;
    return rangeScopedAudits.filter(
      (a) => brandKey(a.from_display_name ?? "") === selectedBrand
    );
  }, [rangeScopedAudits, selectedBrand]);

  const brandPool = useMemo(() => {
    if (!selectedPersona) return rangeScopedAudits;
    return rangeScopedAudits.filter((a) => a.persona === selectedPersona);
  }, [rangeScopedAudits, selectedPersona]);

  const availablePersonas = useMemo(() => {
    const counts = new Map<string, { label: string; count: number }>();
    for (const a of personaPool) {
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
  }, [personaPool]);

  const availableBrands = useMemo(() => {
    const counts = new Map<string, { label: string; count: number }>();
    for (const a of brandPool) {
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
  }, [brandPool]);

  const visibleAudits = useMemo(() => {
    let list = rangeScopedAudits;
    if (selectedPersona) list = list.filter((a) => a.persona === selectedPersona);
    if (selectedBrand) {
      list = list.filter(
        (a) => brandKey(a.from_display_name ?? "") === selectedBrand
      );
    }
    return list;
  }, [rangeScopedAudits, selectedPersona, selectedBrand]);

  return (
    <>
      {/* Filters live on a single wrap-aware row. Mobile stacks the pills
          vertically; desktop fits all three side-by-side. gap-x is tighter
          than gap-y so the row reads as a unit. */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-4">
        <DateRangeSelector
          audits={audits}
          selected={selectedRange}
          onSelect={(key) => {
            setSelectedRange(key);
            setSelectedPersona(null);
            setSelectedBrand(null);
            setSelectedDate(null);
          }}
        />
        <PersonaSelector
          personas={availablePersonas}
          selected={selectedPersona}
          onSelect={(slug) => {
            setSelectedPersona(slug);
            // Persona + brand are siblings; don't clear the other side.
            // The dropdowns auto-narrow to keep the remaining selection
            // valid. Day filter clears since the chart re-buckets.
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
      </div>
      <ActivityChart
        audits={visibleAudits}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        days={
          selectedRange
            ? DATE_RANGE_PRESETS.find((p) => p.key === selectedRange)?.days
            : undefined
        }
      />
      <AuditList
        audits={visibleAudits}
        filterDate={selectedDate}
        onClearFilter={() => setSelectedDate(null)}
      />
    </>
  );
}
