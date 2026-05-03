import { sql as drizzleSql } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { db } from "@/lib/db/client";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const metadata = { title: "Email health · etell admin" };

export default async function EmailHealthPage() {
  await requireAdmin();

  // Subscription job statuses (count by status across all tenants).
  const subStatusRows = await db.execute(drizzleSql`
    SELECT status, COUNT(*)::int AS n
    FROM subscription_job
    GROUP BY status
    ORDER BY n DESC
  `);

  // email_message: unprocessed backlog + last-24h volume.
  const emailMsgRows = await db.execute(drizzleSql`
    SELECT
      COUNT(*) FILTER (WHERE processed_at IS NULL)::int      AS unprocessed,
      COUNT(*) FILTER (WHERE processed_at IS NOT NULL)::int  AS processed,
      COUNT(*) FILTER (WHERE received_at > NOW() - INTERVAL '24 hours')::int AS last_24h,
      COUNT(*) FILTER (WHERE received_at > NOW() - INTERVAL '7 days')::int   AS last_7d
    FROM email_message
  `);
  const em = emailMsgRows.rows[0] as
    | { unprocessed: number; processed: number; last_24h: number; last_7d: number }
    | undefined;

  // Per-persona audit volume (last 7 days).
  const personaActivityRows = await db.execute(drizzleSql`
    SELECT
      p.slug          AS slug,
      p.name          AS name,
      COUNT(r.id)::int AS reactions_total,
      COUNT(r.id) FILTER (WHERE r.created_at > NOW() - INTERVAL '7 days')::int AS reactions_7d,
      COUNT(r.id) FILTER (WHERE r.created_at > NOW() - INTERVAL '24 hours')::int AS reactions_24h
    FROM persona p
    LEFT JOIN reaction r ON r.persona_slug = p.slug
    GROUP BY p.slug, p.name
    ORDER BY reactions_7d DESC, reactions_total DESC
  `);

  // Most-recent unprocessed email_messages — what's stuck.
  const stuckRows = await db.execute(drizzleSql`
    SELECT id, persona_slug, from_address, subject, received_at,
           EXTRACT(EPOCH FROM (NOW() - received_at))::int AS age_seconds
    FROM email_message
    WHERE processed_at IS NULL
    ORDER BY received_at DESC
    LIMIT 10
  `);

  // Reflection counts per persona (Stage C). Useful to see the brain
  // growing from chat.
  const reflectionRows = await db.execute(drizzleSql`
    SELECT persona_slug, COUNT(*)::int AS n
    FROM chat_reflection
    GROUP BY persona_slug
    ORDER BY n DESC
  `);

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Email health</h1>
        <p className="text-muted text-sm">
          Pipeline status across personas. Refresh for live numbers.
        </p>
      </div>

      <Section title="Subscription jobs">
        <Grid items={subStatusRows.rows.map((r) => ({
          label: String(r.status),
          value: String(r.n),
          tone: jobTone(String(r.status)),
        }))} />
      </Section>

      <Section title="Inbound email_message">
        <Grid items={[
          { label: "Unprocessed", value: String(em?.unprocessed ?? 0), tone: (em?.unprocessed ?? 0) > 0 ? "warn" : "ok" },
          { label: "Processed (total)", value: String(em?.processed ?? 0), tone: "ok" },
          { label: "Last 24h", value: String(em?.last_24h ?? 0), tone: "neutral" },
          { label: "Last 7d", value: String(em?.last_7d ?? 0), tone: "neutral" },
        ]} />
      </Section>

      {stuckRows.rows.length > 0 && (
        <Section title="Stuck (unprocessed) inbound">
          {/* Mobile: stacked cards */}
          <ul className="sm:hidden flex flex-col gap-3">
            {stuckRows.rows.map((r) => (
              <li key={String(r.id)} className="border border-gray-200 rounded-xl p-3">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span className="font-mono text-[11px] text-muted">{formatAge(Number(r.age_seconds))}</span>
                  <span className="font-mono text-[11px] text-muted break-all">{String(r.persona_slug)}</span>
                </div>
                <div className="text-xs text-muted break-all mb-0.5">{String(r.from_address ?? "")}</div>
                <div className="text-sm break-words">{String(r.subject ?? "")}</div>
              </li>
            ))}
          </ul>
          {/* Desktop: table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase text-muted">
                <tr>
                  <th className="py-1.5 pr-4">Age</th>
                  <th className="py-1.5 pr-4">Persona</th>
                  <th className="py-1.5 pr-4">From</th>
                  <th className="py-1.5">Subject</th>
                </tr>
              </thead>
              <tbody>
                {stuckRows.rows.map((r) => (
                  <tr key={String(r.id)} className="border-t border-gray-100">
                    <td className="py-1.5 pr-4 font-mono text-xs">{formatAge(Number(r.age_seconds))}</td>
                    <td className="py-1.5 pr-4 font-mono text-xs">{String(r.persona_slug)}</td>
                    <td className="py-1.5 pr-4 text-xs">{String(r.from_address ?? "").slice(0, 40)}</td>
                    <td className="py-1.5 text-xs">{String(r.subject ?? "").slice(0, 60)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      <Section title="Persona reaction volume">
        <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-xs uppercase text-muted">
            <tr>
              <th className="py-1.5 pr-4">Persona</th>
              <th className="py-1.5 pr-4 text-right">Total</th>
              <th className="py-1.5 pr-4 text-right">7d</th>
              <th className="py-1.5 text-right">24h</th>
            </tr>
          </thead>
          <tbody>
            {personaActivityRows.rows.map((r) => (
              <tr key={String(r.slug)} className="border-t border-gray-100">
                <td className="py-1.5 pr-4">
                  <Link href={`/chat/${r.slug}`} className="text-sky-700 hover:underline">
                    {String(r.name)}
                  </Link>
                  <span className="ml-2 text-xs text-muted font-mono">{String(r.slug)}</span>
                </td>
                <td className="py-1.5 pr-4 text-right tabular-nums">{String(r.reactions_total)}</td>
                <td className="py-1.5 pr-4 text-right tabular-nums">{String(r.reactions_7d)}</td>
                <td className="py-1.5 text-right tabular-nums">{String(r.reactions_24h)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </Section>

      {reflectionRows.rows.length > 0 && (
        <Section title="Chat reflections (Stage C)">
          <Grid items={reflectionRows.rows.map((r) => ({
            label: String(r.persona_slug),
            value: String(r.n),
            tone: "neutral",
          }))} />
        </Section>
      )}
    </div>
  );
}

type Tone = "ok" | "warn" | "fail" | "neutral";

function jobTone(status: string): Tone {
  if (status === "auto_succeeded" || status === "manual_done") return "ok";
  if (status === "manual_pending" || status === "running" || status === "queued") return "warn";
  if (status === "failed") return "fail";
  return "neutral";
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xs uppercase tracking-wide text-muted font-medium mb-3">
        {title}
      </h2>
      <div className="bg-white border border-gray-200 rounded-2xl p-5">{children}</div>
    </section>
  );
}

function Grid({ items }: { items: Array<{ label: string; value: string; tone: Tone }> }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map((it) => (
        <div key={it.label} className={`rounded-xl px-3 py-2 ${toneClass(it.tone)}`}>
          <div className="text-xs uppercase tracking-wide text-muted">{it.label}</div>
          <div className="text-xl font-semibold tabular-nums">{it.value}</div>
        </div>
      ))}
    </div>
  );
}

function toneClass(tone: Tone): string {
  switch (tone) {
    case "ok":
      return "bg-emerald-50 border border-emerald-200";
    case "warn":
      return "bg-amber-50 border border-amber-200";
    case "fail":
      return "bg-rose-50 border border-rose-200";
    default:
      return "bg-gray-50 border border-gray-200";
  }
}

function formatAge(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
  return `${Math.floor(seconds / 86400)}d`;
}
