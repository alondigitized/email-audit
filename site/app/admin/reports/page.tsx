import Link from "next/link";
import { sql as drizzleSql } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { db } from "@/lib/db/client";

// Counters page — totals + by-type breakdowns for personas and audits.
// Server-rendered on every request via dynamic; cheap aggregate queries
// (six SQL roundtrips, all COUNT-only) so it stays fresh without caching.

export const dynamic = "force-dynamic";

async function pull() {
  // Personas — overall + by kind
  const personaByKindRows = await db.execute<{
    kind: string;
    n: number;
  }>(drizzleSql`
    SELECT kind, COUNT(*)::int AS n FROM persona GROUP BY kind ORDER BY kind
  `);
  const personasByKind = (personaByKindRows.rows ?? []) as Array<{
    kind: string;
    n: number;
  }>;

  // Audits — overall + by type (data.type is the legacy field; audit.type
  // is the typed column added in PR #141 and backfilled).
  const auditByTypeRows = await db.execute<{ type: string; n: number }>(drizzleSql`
    SELECT type, COUNT(*)::int AS n FROM audit GROUP BY type ORDER BY type
  `);
  const auditsByType = (auditByTypeRows.rows ?? []) as Array<{
    type: string;
    n: number;
  }>;

  // Audits per persona (top 8 by count) — useful for quick spot-checks
  // of who's accumulating.
  const auditsPerPersonaRows = await db.execute<{
    persona: string;
    n: number;
  }>(drizzleSql`
    SELECT persona, COUNT(*)::int AS n
    FROM audit
    WHERE persona IS NOT NULL
    GROUP BY persona
    ORDER BY n DESC
    LIMIT 8
  `);
  const topPersonas = (auditsPerPersonaRows.rows ?? []) as Array<{
    persona: string;
    n: number;
  }>;

  // Audio + brand-domain coverage signals (mentioned in earlier
  // egress / podcast discussions — useful at-a-glance numbers).
  const audioRow = await db.execute<{ n: number }>(drizzleSql`
    SELECT COUNT(*)::int AS n FROM reaction
    WHERE review_data->'audio'->>'key' IS NOT NULL
  `);
  const totalReactionsRow = await db.execute<{ n: number }>(drizzleSql`
    SELECT COUNT(*)::int AS n FROM reaction
  `);
  const distinctDomainsRow = await db.execute<{ n: number }>(drizzleSql`
    SELECT COUNT(DISTINCT brand_domain)::int AS n
    FROM experience WHERE brand_domain IS NOT NULL
  `);

  const audioCount =
    ((audioRow.rows ?? []) as Array<{ n: number }>)[0]?.n ?? 0;
  const reactionsTotal =
    ((totalReactionsRow.rows ?? []) as Array<{ n: number }>)[0]?.n ?? 0;
  const distinctDomains =
    ((distinctDomainsRow.rows ?? []) as Array<{ n: number }>)[0]?.n ?? 0;

  return {
    personasByKind,
    auditsByType,
    topPersonas,
    audioCount,
    reactionsTotal,
    distinctDomains,
  };
}

export default async function AdminReportsPage() {
  await requireAdmin();
  const data = await pull();

  const personaTotal = data.personasByKind.reduce((s, r) => s + r.n, 0);
  const auditTotal = data.auditsByType.reduce((s, r) => s + r.n, 0);

  return (
    <div className="mb-10 space-y-6">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold">Reports</h1>
          <p className="text-sm text-muted mt-1">
            Live counts. Refresh the page for fresh numbers — no caching.
          </p>
        </div>
        <Link
          href="/admin"
          className="text-sm text-muted hover:text-ink underline"
        >
          ← Admin home
        </Link>
      </div>

      <section>
        <SectionLabel>Personas by kind</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat label="Total" value={personaTotal} />
          {data.personasByKind.map((r) => (
            <Stat key={r.kind} label={r.kind} value={r.n} />
          ))}
        </div>
      </section>

      <section>
        <SectionLabel>Audits by type</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat label="Total" value={auditTotal} />
          {data.auditsByType.map((r) => (
            <Stat key={r.type} label={r.type} value={r.n} />
          ))}
        </div>
      </section>

      <section>
        <SectionLabel>Signals</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Stat
            label="Audits with audio"
            value={data.audioCount}
            hint={`of ${data.reactionsTotal} reactions`}
          />
          <Stat
            label="Distinct brand domains"
            value={data.distinctDomains}
            hint="senders the personas have seen"
          />
        </div>
      </section>

      <section>
        <SectionLabel>Top personas by audit count</SectionLabel>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm divide-y divide-gray-100">
          {data.topPersonas.map((r) => (
            <div
              key={r.persona}
              className="flex items-center justify-between px-4 py-2.5"
            >
              <Link
                href={`/admin/personas/${r.persona}`}
                className="text-sm font-mono text-sky-700 hover:text-sky-900"
              >
                {r.persona}
              </Link>
              <span className="text-sm font-semibold tabular-nums">{r.n}</span>
            </div>
          ))}
          {data.topPersonas.length === 0 && (
            <div className="px-4 py-3 text-sm text-muted">No audits yet.</div>
          )}
        </div>
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: number | string;
  hint?: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-muted">{label}</div>
      <div className="text-2xl font-bold mt-1 tabular-nums">{value}</div>
      {hint && <div className="text-xs text-muted mt-0.5">{hint}</div>}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-wide text-muted font-semibold mb-2">
      {children}
    </div>
  );
}
