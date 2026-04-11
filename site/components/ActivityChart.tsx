"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { AuditSummary } from "@/lib/types";

const DAYS = 30;

const SENDER_COLORS = {
  Skechers: "#c8102e",
  adidas: "#1e40af",
  Other: "#9ca3af",
} as const;

type SenderBucket = keyof typeof SENDER_COLORS;

interface DayBucket {
  date: string;
  label: string;
  Skechers: number;
  adidas: number;
  Other: number;
}

function startOfUtcDay(d: Date): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

function bucketSender(name: string): SenderBucket {
  const n = (name || "").toLowerCase();
  if (n.includes("skechers")) return "Skechers";
  if (n.includes("adidas")) return "adidas";
  return "Other";
}

function buildData(audits: AuditSummary[]): DayBucket[] {
  const today = startOfUtcDay(new Date());
  const start = new Date(today);
  start.setUTCDate(start.getUTCDate() - (DAYS - 1));

  const out: DayBucket[] = [];
  for (let i = 0; i < DAYS; i++) {
    const d = new Date(start);
    d.setUTCDate(d.getUTCDate() + i);
    out.push({
      date: d.toISOString().slice(0, 10),
      label: d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      }),
      Skechers: 0,
      adidas: 0,
      Other: 0,
    });
  }

  for (const a of audits) {
    if (a.type && a.type !== "email") continue;
    if (!a.timestamp_iso) continue;
    const ts = new Date(a.timestamp_iso);
    if (Number.isNaN(ts.getTime())) continue;
    const day = startOfUtcDay(ts);
    const idx = Math.round(
      (day.getTime() - start.getTime()) / (24 * 60 * 60 * 1000)
    );
    if (idx < 0 || idx >= DAYS) continue;
    out[idx][bucketSender(a.from_display_name)] += 1;
  }

  return out;
}

export function ActivityChart({ audits }: { audits: AuditSummary[] }) {
  const data = buildData(audits);
  const total = data.reduce(
    (s, d) => s + d.Skechers + d.adidas + d.Other,
    0
  );
  const peak = data.reduce(
    (m, d) => Math.max(m, d.Skechers + d.adidas + d.Other),
    0
  );
  const totalsBySender = {
    Skechers: data.reduce((s, d) => s + d.Skechers, 0),
    adidas: data.reduce((s, d) => s + d.adidas, 0),
    Other: data.reduce((s, d) => s + d.Other, 0),
  };

  return (
    <div className="bg-white border border-[var(--color-line)] rounded-2xl p-6 mb-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <div className="flex justify-between items-baseline gap-3 flex-wrap mb-3">
        <h2 className="text-base font-semibold m-0">Email activity</h2>
        <div className="text-muted text-xs">
          {total} emails · last {DAYS} days · peak {peak}/day
        </div>
      </div>
      <div style={{ width: "100%", height: 220 }}>
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
              interval={4}
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
                const n = totalsBySender[value as SenderBucket] ?? 0;
                return `${value} (${n})`;
              }}
            />
            <Bar
              dataKey="Skechers"
              stackId="a"
              fill={SENDER_COLORS.Skechers}
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="adidas"
              stackId="a"
              fill={SENDER_COLORS.adidas}
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="Other"
              stackId="a"
              fill={SENDER_COLORS.Other}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
