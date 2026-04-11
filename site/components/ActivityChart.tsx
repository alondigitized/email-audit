import type { AuditSummary } from "@/lib/types";

const DAYS = 30;

function startOfUtcDay(d: Date): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

function formatLabel(d: Date): string {
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function ActivityChart({ audits }: { audits: AuditSummary[] }) {
  const today = startOfUtcDay(new Date());
  const start = new Date(today);
  start.setUTCDate(start.getUTCDate() - (DAYS - 1));

  const counts: { date: Date; count: number }[] = [];
  for (let i = 0; i < DAYS; i++) {
    const d = new Date(start);
    d.setUTCDate(d.getUTCDate() + i);
    counts.push({ date: d, count: 0 });
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
    if (idx >= 0 && idx < DAYS) counts[idx].count += 1;
  }

  const total = counts.reduce((s, c) => s + c.count, 0);
  const max = counts.reduce((m, c) => Math.max(m, c.count), 0);

  const barWidth = 14;
  const barGap = 6;
  const barStep = barWidth + barGap;
  const chartHeight = 120;
  const chartTop = 16;
  const chartBottom = chartTop + chartHeight;
  const width = DAYS * barStep;
  const height = chartBottom + 24;

  const labelIndices = [0, Math.floor(DAYS / 2), DAYS - 1];

  return (
    <div className="bg-white border border-[var(--color-line)] rounded-2xl p-6 mb-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <div className="flex justify-between items-baseline gap-3 flex-wrap mb-3">
        <h2 className="text-base font-semibold m-0">Email activity</h2>
        <div className="text-muted text-xs">
          {total} emails · last {DAYS} days · peak {max}/day
        </div>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
      >
        <line
          x1={0}
          y1={chartBottom}
          x2={width}
          y2={chartBottom}
          stroke="#e5e7eb"
          strokeWidth={1}
        />
        {counts.map(({ date, count }, i) => {
          const h = max ? (count / max) * chartHeight : 0;
          const x = i * barStep;
          const y = chartBottom - h;
          const iso = date.toISOString().slice(0, 10);
          return (
            <rect
              key={iso}
              x={x}
              y={y}
              width={barWidth}
              height={h}
              rx={3}
              fill="#111827"
            >
              <title>{`${iso}: ${count} email${count === 1 ? "" : "s"}`}</title>
            </rect>
          );
        })}
        {labelIndices.map((idx) => {
          const d = counts[idx].date;
          const x = idx * barStep + barWidth / 2;
          return (
            <text
              key={idx}
              x={x}
              y={chartBottom + 16}
              textAnchor="middle"
              fontSize={11}
              fill="#6b7280"
            >
              {formatLabel(d)}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
