"use client";

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

const DAYS = 14;

// Observable 10 palette — used by Observable Plot and modern D3.
const SENDER_COLORS = {
  Skechers: "#4269d0",
  adidas: "#efb118",
  "Famous Footwear": "#ff725c",
  "Shoe Carnival": "#3ca951",
  DSW: "#a463f2",
  Other: "#9498a0",
} as const;

type SenderBucket = keyof typeof SENDER_COLORS;
const SENDER_ORDER: SenderBucket[] = [
  "Skechers",
  "adidas",
  "Famous Footwear",
  "Shoe Carnival",
  "DSW",
  "Other",
];

type DayBucket = {
  date: string;
  label: string;
} & Record<SenderBucket, number>;

function startOfUtcDay(d: Date): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

function bucketSender(name: string): SenderBucket {
  const n = (name || "").toLowerCase();
  if (n.includes("skechers")) return "Skechers";
  if (n.includes("adidas")) return "adidas";
  if (n.includes("famous footwear")) return "Famous Footwear";
  if (n.includes("shoe carnival")) return "Shoe Carnival";
  if (n.includes("dsw")) return "DSW";
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
    const row = {
      date: d.toISOString().slice(0, 10),
      label: d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      }),
    } as DayBucket;
    for (const s of SENDER_ORDER) row[s] = 0;
    out.push(row);
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

interface Props {
  audits: AuditSummary[];
  selectedDate: string | null;
  onSelectDate: (date: string | null) => void;
}

function dayTotal(d: DayBucket): number {
  let sum = 0;
  for (const s of SENDER_ORDER) sum += d[s];
  return sum;
}

export function ActivityChart({ audits, selectedDate, onSelectDate }: Props) {
  const data = buildData(audits);
  const total = data.reduce((s, d) => s + dayTotal(d), 0);
  const peak = data.reduce((m, d) => Math.max(m, dayTotal(d)), 0);
  const totalsBySender = SENDER_ORDER.reduce(
    (acc, s) => {
      acc[s] = data.reduce((sum, d) => sum + d[s], 0);
      return acc;
    },
    {} as Record<SenderBucket, number>
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
              interval={1}
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
            {SENDER_ORDER.map((sender, i) => (
              <Bar
                key={sender}
                dataKey={sender}
                stackId="a"
                fill={SENDER_COLORS[sender]}
                cursor="pointer"
                onClick={handleBarClick}
                radius={i === SENDER_ORDER.length - 1 ? [3, 3, 0, 0] : [0, 0, 0, 0]}
              >
                {data.map((d) => (
                  <Cell
                    key={d.date}
                    fill={fillForBar(d.date, SENDER_COLORS[sender])}
                  />
                ))}
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
