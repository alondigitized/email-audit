"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { AuditSummary } from "@/lib/types";
import { localDateKey, startOfLocalDay } from "@/lib/dates";
import {
  INDUSTRY_COLOR,
  INDUSTRY_ORDER,
  type Industry,
  brandKeyOf,
  industryOf,
} from "@/lib/industry";

const DEFAULT_DAYS = 14;
const MAX_BRAND_BUCKETS = 5;
const OTHER_BUCKET = "Other";

// Brand-mode coloring. The tenant's own brand always gets a fixed
// "ownership" emerald so a customer glancing at their dashboard sees
// "my green vs their colors" instantly. Competitors take the rest of
// the palette in stable order.
const OWN_BRAND_COLOR = "#10b981";
const COMPETITOR_PALETTE = [
  "#4269d0",
  "#efb118",
  "#ff725c",
  "#a463f2",
  "#9c6b4e",
];
const OTHER_COLOR = "#9498a0";

type DayBucket = {
  date: string;
  label: string;
  [bucket: string]: string | number;
};

// Pick the industries that actually appear in the window so the legend
// doesn't show empty buckets. Order is canonical (INDUSTRY_ORDER) so
// color-to-industry stays stable across renders even when a bucket
// drops in/out as filters change.
// Brand mode bucket: the tenant's own brand (always present in the
// legend even when there are zero audits this window, so the legend
// doesn't disappear when a tenant filters down to a competitor) plus
// up to MAX_BRAND_BUCKETS competitor brands by frequency, plus
// "Other". Order in the returned array drives stacking order in the
// chart and color assignment.
type BrandBucket = {
  key: string;
  label: string;
  color: string;
  isOwn: boolean;
};

function pickBrands(
  audits: AuditSummary[],
  days: number,
  channel: string | null,
  ownBrand: { key: string; label: string }
): BrandBucket[] {
  const today = startOfLocalDay(new Date());
  const start = new Date(today);
  start.setDate(start.getDate() - (days - 1));

  // Tally each canonical brand key in window. Keep the prettiest display
  // name we see for each key so the legend reads "Skechers" not "skechers".
  const counts = new Map<string, number>();
  const labels = new Map<string, string>();
  for (const a of audits) {
    if (channel && (a.type ?? "email") !== channel) continue;
    if (!a.timestamp_iso) continue;
    const ts = new Date(a.timestamp_iso);
    if (Number.isNaN(ts.getTime())) continue;
    if (ts < start) continue;
    const raw = (a.from_display_name ?? "").trim();
    if (!raw) continue;
    const key = brandKeyOf(raw);
    if (!key) continue;
    counts.set(key, (counts.get(key) ?? 0) + 1);
    // Prefer human-cased labels over URL-form ones — pick the shortest
    // candidate that isn't all-caps.
    const prev = labels.get(key);
    if (
      !prev ||
      (raw.length < prev.length && raw.toUpperCase() !== raw) ||
      (prev.toUpperCase() === prev && raw.toUpperCase() !== raw)
    ) {
      labels.set(key, raw);
    }
  }

  const competitors = [...counts.entries()]
    .filter(([k]) => k !== ownBrand.key)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, MAX_BRAND_BUCKETS)
    .map(([k]) => k);

  const buckets: BrandBucket[] = [
    {
      key: ownBrand.key,
      label: ownBrand.label,
      color: OWN_BRAND_COLOR,
      isOwn: true,
    },
    ...competitors.map((k, i) => ({
      key: k,
      label: labels.get(k) ?? k,
      color: COMPETITOR_PALETTE[i % COMPETITOR_PALETTE.length],
      isOwn: false,
    })),
    { key: OTHER_BUCKET, label: OTHER_BUCKET, color: OTHER_COLOR, isOwn: false },
  ];
  return buckets;
}

function buildBrandData(
  audits: AuditSummary[],
  buckets: BrandBucket[],
  days: number,
  channel: string | null
): DayBucket[] {
  const known = new Set(buckets.map((b) => b.key));
  const today = startOfLocalDay(new Date());
  const start = new Date(today);
  start.setDate(start.getDate() - (days - 1));

  const indexByKey = new Map<string, number>();
  const out: DayBucket[] = [];
  for (let i = 0; i < days; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    const key = localDateKey(d);
    const row: DayBucket = {
      date: key,
      label: d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    };
    for (const b of buckets) row[b.key] = 0;
    indexByKey.set(key, out.length);
    out.push(row);
  }

  for (const a of audits) {
    if (channel && (a.type ?? "email") !== channel) continue;
    if (!a.timestamp_iso) continue;
    const ts = new Date(a.timestamp_iso);
    if (Number.isNaN(ts.getTime())) continue;
    const idx = indexByKey.get(localDateKey(ts));
    if (idx === undefined) continue;
    const k = brandKeyOf(a.from_display_name);
    const bucket = known.has(k) ? k : OTHER_BUCKET;
    out[idx][bucket] = (out[idx][bucket] as number) + 1;
  }

  return out;
}

function pickIndustries(
  audits: AuditSummary[],
  days: number,
  channel: string | null
): Industry[] {
  const today = startOfLocalDay(new Date());
  const start = new Date(today);
  start.setDate(start.getDate() - (days - 1));

  const present = new Set<Industry>();
  for (const a of audits) {
    if (channel && (a.type ?? "email") !== channel) continue;
    if (!a.timestamp_iso) continue;
    const ts = new Date(a.timestamp_iso);
    if (Number.isNaN(ts.getTime())) continue;
    if (ts < start) continue;
    present.add(industryOf(a.from_display_name));
  }
  return INDUSTRY_ORDER.filter((i) => present.has(i));
}

function buildData(
  audits: AuditSummary[],
  industries: Industry[],
  days: number,
  channel: string | null
): DayBucket[] {
  const known = new Set(industries);
  const today = startOfLocalDay(new Date());
  const start = new Date(today);
  start.setDate(start.getDate() - (days - 1));

  const indexByKey = new Map<string, number>();
  const out: DayBucket[] = [];
  for (let i = 0; i < days; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    const key = localDateKey(d);
    const row: DayBucket = {
      date: key,
      label: d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    };
    for (const ind of industries) row[ind] = 0;
    indexByKey.set(key, out.length);
    out.push(row);
  }

  for (const a of audits) {
    if (channel && (a.type ?? "email") !== channel) continue;
    if (!a.timestamp_iso) continue;
    const ts = new Date(a.timestamp_iso);
    if (Number.isNaN(ts.getTime())) continue;
    const idx = indexByKey.get(localDateKey(ts));
    if (idx === undefined) continue;
    const ind = industryOf(a.from_display_name);
    if (!known.has(ind)) continue;
    out[idx][ind] = (out[idx][ind] as number) + 1;
  }

  return out;
}

interface Props {
  audits: AuditSummary[];
  selectedDate: string | null;
  onSelectDate: (date: string | null) => void;
  // Window size in days for the chart's x-axis. Driven by the date-range
  // filter on HomeContent so picking "Last 30 days" widens the chart to
  // match. Falls back to the legacy 14-day default when unset.
  days?: number;
  // Channel filter — null/undefined means all surfaces (email + site).
  // 'email' or 'site' restricts to that channel.
  channel?: string | null;
  // "industry" stacks by macro industry bucket (founder tenant view, where
  // the persona corpus spans many sectors). "brand" stacks by individual
  // brand with the tenant's own brand pinned to a fixed emerald — better
  // for customer tenants whose visibility is "self + 2-3 competitors", all
  // in the same industry. Defaults to "industry".
  mode?: "industry" | "brand";
  // Required for `mode="brand"`. `key` must be the canonical form (see
  // brandKeyOf in lib/industry.ts) so it matches what `from_display_name`
  // canonicalizes to in the audit rows.
  ownBrand?: { key: string; label: string };
}

// Label density: ~10-14 visible ticks across the axis regardless of
// the window size, otherwise 90-day windows render an unreadable wall
// of overlapping labels.
function tickInterval(days: number): number | "preserveStartEnd" {
  if (days <= 14) return 1;
  if (days <= 30) return 2;
  if (days <= 60) return 4;
  if (days <= 90) return 6;
  return "preserveStartEnd";
}

function windowLabel(days: number): string {
  if (days === 1) return "today";
  return `last ${days} days`;
}

type ChartBucket = { key: string; label: string; color: string };

function dayTotal(d: DayBucket, buckets: ChartBucket[]): number {
  let sum = 0;
  for (const b of buckets) sum += d[b.key] as number;
  return sum;
}

export function ActivityChart({
  audits,
  selectedDate,
  onSelectDate,
  days = DEFAULT_DAYS,
  channel = null,
  mode = "industry",
  ownBrand,
}: Props) {
  // Recharts' ResponsiveContainer measures its parent in a layout effect.
  // During SSR the parent has no dimensions, which emits a width(-1)/height(-1)
  // warning and briefly renders an empty chart. Gate the chart on hydration
  // so the parent has a real layout before recharts tries to measure it.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Brand mode requires ownBrand; if a caller forgets it, fall back to
  // industry mode rather than crashing.
  const effectiveMode = mode === "brand" && ownBrand ? "brand" : "industry";

  const buckets: ChartBucket[] =
    effectiveMode === "brand" && ownBrand
      ? pickBrands(audits, days, channel, ownBrand)
      : pickIndustries(audits, days, channel).map((ind) => ({
          key: ind,
          label: ind,
          color: INDUSTRY_COLOR[ind],
        }));
  const data =
    effectiveMode === "brand" && ownBrand
      ? buildBrandData(audits, buckets as BrandBucket[], days, channel)
      : buildData(
          audits,
          buckets.map((b) => b.key) as Industry[],
          days,
          channel
        );
  const total = data.reduce((s, d) => s + dayTotal(d, buckets), 0);
  const peak = data.reduce(
    (m, d) => Math.max(m, dayTotal(d, buckets)),
    0
  );
  const totalsByBucket = buckets.reduce(
    (acc, b) => {
      acc[b.key] = data.reduce((sum, d) => sum + (d[b.key] as number), 0);
      return acc;
    },
    {} as Record<string, number>
  );

  function handleBarClick(data: unknown) {
    const clicked = (data as { date?: string } | null)?.date;
    if (!clicked) return;
    onSelectDate(clicked === selectedDate ? null : clicked);
  }

  function fillForBar(date: string, base: string): string {
    if (!selectedDate) return base;
    return date === selectedDate ? base : `${base}55`;
  }

  return (
    <div className="bg-white border border-[var(--color-line)] rounded-2xl p-6 mb-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <div className="flex justify-between items-baseline gap-3 flex-wrap mb-3">
        <h2 className="text-base font-semibold m-0">
          {channel === "email"
            ? "Email activity"
            : channel === "site"
              ? "Web activity"
              : "Experience activity"}
        </h2>
        <div className="text-muted text-xs">
          {total}{" "}
          {channel === "email"
            ? "emails"
            : channel === "site"
              ? "site visits"
              : "experiences"}{" "}
          · {windowLabel(days)} · peak {peak}/day
        </div>
      </div>
      <div style={{ width: "100%", height: 220 }}>
        {mounted ? (
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11, fill: "#6b7280" }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
              interval={tickInterval(days)}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#6b7280" }}
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
              width={36}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.04)" }}
              wrapperStyle={{ zIndex: 50, pointerEvents: "none" }}
              contentStyle={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                fontSize: 12,
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: 12, paddingTop: 4 }}
              iconType="square"
              formatter={(value: string) => {
                const bucket = buckets.find((b) => b.key === value);
                const label = bucket?.label ?? value;
                const n = totalsByBucket[value] ?? 0;
                return `${label} (${n})`;
              }}
            />
            {buckets.map((b, i) => (
              <Bar
                key={b.key}
                dataKey={b.key}
                stackId="a"
                fill={b.color}
                cursor="pointer"
                onClick={handleBarClick}
                radius={i === buckets.length - 1 ? [3, 3, 0, 0] : [0, 0, 0, 0]}
              >
                {data.map((d) => (
                  <Cell
                    key={d.date}
                    fill={fillForBar(d.date, b.color)}
                  />
                ))}
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
        ) : null}
      </div>
    </div>
  );
}
