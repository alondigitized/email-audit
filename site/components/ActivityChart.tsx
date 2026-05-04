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
  industryOf,
} from "@/lib/industry";

const DEFAULT_DAYS = 14;

type DayBucket = {
  date: string;
  label: string;
  [industry: string]: string | number;
};

// Pick the industries that actually appear in the window so the legend
// doesn't show empty buckets. Order is canonical (INDUSTRY_ORDER) so
// color-to-industry stays stable across renders even when a bucket
// drops in/out as filters change.
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

function dayTotal(d: DayBucket, industries: Industry[]): number {
  let sum = 0;
  for (const ind of industries) sum += d[ind] as number;
  return sum;
}

export function ActivityChart({
  audits,
  selectedDate,
  onSelectDate,
  days = DEFAULT_DAYS,
  channel = null,
}: Props) {
  // Recharts' ResponsiveContainer measures its parent in a layout effect.
  // During SSR the parent has no dimensions, which emits a width(-1)/height(-1)
  // warning and briefly renders an empty chart. Gate the chart on hydration
  // so the parent has a real layout before recharts tries to measure it.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const industries = pickIndustries(audits, days, channel);
  const data = buildData(audits, industries, days, channel);
  const total = data.reduce((s, d) => s + dayTotal(d, industries), 0);
  const peak = data.reduce(
    (m, d) => Math.max(m, dayTotal(d, industries)),
    0
  );
  const totalsByIndustry = industries.reduce(
    (acc, ind) => {
      acc[ind] = data.reduce((sum, d) => sum + (d[ind] as number), 0);
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
                const n = totalsByIndustry[value] ?? 0;
                return `${value} (${n})`;
              }}
            />
            {industries.map((ind, i) => (
              <Bar
                key={ind}
                dataKey={ind}
                stackId="a"
                fill={INDUSTRY_COLOR[ind]}
                cursor="pointer"
                onClick={handleBarClick}
                radius={i === industries.length - 1 ? [3, 3, 0, 0] : [0, 0, 0, 0]}
              >
                {data.map((d) => (
                  <Cell
                    key={d.date}
                    fill={fillForBar(d.date, INDUSTRY_COLOR[ind])}
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
