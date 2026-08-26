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
import { ChannelSelector, auditMatchesChannel } from "./ChannelSelector";
import { IndustrySelector, auditMatchesIndustry } from "./IndustrySelector";

// Brand identity comes from the audit row's `from_display_name` (e.g.
// "Skechers"). Some senders share a display name across orgs (rare),
// so we key options on the lowercased label — close enough for filtering
// without joining on the experience.brand_domain column.
function brandKey(label: string): string {
  return label.trim().toLowerCase();
}

// URL params used to persist filter state across the list → detail →
// back navigation. Short keys (r/c/p/b/d) keep the URL short. Empty/null
// values are dropped from the URL so the default state is `/`.
const PARAM_RANGE = "r";
const PARAM_CHANNEL = "c";
const PARAM_INDUSTRY = "i";
const PARAM_PERSONA = "p";
const PARAM_BRAND = "b";
const PARAM_DAY = "d";

export function HomeContent({
  audits,
  chartMode = "industry",
  ownBrand,
}: {
  audits: AuditSummary[];
  chartMode?: "industry" | "brand";
  ownBrand?: { key: string; label: string };
}) {
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
  const [selectedChannel, setSelectedChannel] = useState<string | null>(
    () => searchParams.get(PARAM_CHANNEL)
  );
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(
    () => searchParams.get(PARAM_INDUSTRY)
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
    if (selectedChannel) next.set(PARAM_CHANNEL, selectedChannel);
    if (selectedIndustry) next.set(PARAM_INDUSTRY, selectedIndustry);
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
    selectedChannel,
    selectedIndustry,
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

  // Channel sits with range at the top of the hierarchy — both narrow
  // the universe before facets (persona/brand) start carving it up.
  const channelScopedAudits = useMemo(() => {
    if (!selectedChannel) return rangeScopedAudits;
    return rangeScopedAudits.filter((a) =>
      auditMatchesChannel(a, selectedChannel)
    );
  }, [rangeScopedAudits, selectedChannel]);

  // Industry narrows further before persona + brand facet. Picking
  // "beauty" trims persona / brand dropdowns to just the personas
  // and brands tagged in beauty.
  const industryScopedAudits = useMemo(() => {
    if (!selectedIndustry) return channelScopedAudits;
    return channelScopedAudits.filter((a) =>
      auditMatchesIndustry(a, selectedIndustry)
    );
  }, [channelScopedAudits, selectedIndustry]);

  // Faceted scoping: each filter's dropdown options reflect "what's
  // pickable given every OTHER active filter". So picking brand=DSW
  // narrows the persona dropdown to only personas with DSW audits, and
  // vice-versa. The visible list applies both.
  const personaPool = useMemo(() => {
    if (!selectedBrand) return industryScopedAudits;
    return industryScopedAudits.filter(
      (a) => brandKey(a.from_display_name ?? "") === selectedBrand
    );
  }, [industryScopedAudits, selectedBrand]);

  const brandPool = useMemo(() => {
    if (!selectedPersona) return industryScopedAudits;
    return industryScopedAudits.filter((a) => a.persona === selectedPersona);
  }, [industryScopedAudits, selectedPersona]);

  const availablePersonas = useMemo(() => {
    // Track industry + kind alongside the count so the dropdown can
    // show "{industry} · Brand|Industry" beneath each persona label.
    // Walker is the one persona with mixed-industry audits (he ate the
    // pre-industry seed inbox); for him the sublabel falls back to just
    // the kind. Industry from the audit row already takes the
    // persona.industry → template.industry COALESCE on the server.
    const counts = new Map<
      string,
      {
        label: string;
        count: number;
        kind: "brand" | "industry" | null;
        industries: Set<string>;
      }
    >();
    for (const a of personaPool) {
      if (!a.persona) continue;
      const existing = counts.get(a.persona);
      if (existing) {
        existing.count += 1;
        if (a.industry) existing.industries.add(a.industry);
      } else {
        counts.set(a.persona, {
          label: a.persona_name ?? a.persona,
          count: 1,
          kind: a.persona_kind ?? null,
          industries: new Set(a.industry ? [a.industry] : []),
        });
      }
    }
    return [...counts.entries()]
      .map(([key, v]) => {
        const kindLabel =
          v.kind === "industry"
            ? "Industry"
            : v.kind === "brand"
            ? "Brand"
            : null;
        const industry =
          v.industries.size === 1
            ? [...v.industries][0]
            : v.industries.size > 1
            ? "mixed"
            : null;
        const parts = [industry, kindLabel].filter(Boolean) as string[];
        return {
          key,
          label: v.label,
          sublabel: parts.length > 0 ? parts.join(" · ") : undefined,
          count: v.count,
        };
      })
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
    let list = industryScopedAudits;
    if (selectedPersona) list = list.filter((a) => a.persona === selectedPersona);
    if (selectedBrand) {
      list = list.filter(
        (a) => brandKey(a.from_display_name ?? "") === selectedBrand
      );
    }
    return list;
  }, [industryScopedAudits, selectedPersona, selectedBrand]);

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
        <ChannelSelector
          audits={rangeScopedAudits}
          selected={selectedChannel}
          onSelect={(key) => {
            setSelectedChannel(key);
            setSelectedDate(null);
          }}
        />
        <IndustrySelector
          audits={channelScopedAudits}
          selected={selectedIndustry}
          onSelect={(key) => {
            setSelectedIndustry(key);
            // Persona + brand may not survive an industry change;
            // clear them so the dropdowns repopulate from the new
            // category scope.
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
        channel={selectedChannel}
        days={
          selectedRange
            ? DATE_RANGE_PRESETS.find((p) => p.key === selectedRange)?.days
            : undefined
        }
        mode={chartMode}
        ownBrand={ownBrand}
      />
      <AuditList
        audits={visibleAudits}
        filterDate={selectedDate}
        onClearFilter={() => setSelectedDate(null)}
      />
    </>
  );
}
