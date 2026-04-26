import { eq, desc, sql, count } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { db, tenants, users, personas, audits } from "@/lib/db/client";

export const dynamic = "force-dynamic";
export const metadata = { title: "Tenants · admin · etell" };

type Row = {
  id: string;
  slug: string;
  emailDomain: string | null;
  plan: "waitlisted" | "free" | "pro" | "banned";
  tierStartedAt: Date | null;
  tierExpiresAt: Date | null;
  createdAt: Date;
  memberCount: number;
  personaCount: number;
  auditCount: number;
  lastAuditAt: Date | null;
};

async function loadTenants(): Promise<Row[]> {
  const tenantRows = await db
    .select({
      id: tenants.id,
      slug: tenants.slug,
      emailDomain: tenants.emailDomain,
      plan: tenants.plan,
      tierStartedAt: tenants.tierStartedAt,
      tierExpiresAt: tenants.tierExpiresAt,
      createdAt: tenants.createdAt,
    })
    .from(tenants)
    .orderBy(desc(tenants.createdAt));
  if (tenantRows.length === 0) return [];

  // Member counts.
  const memberCounts = await db
    .select({ tenantId: users.tenantId, n: count() })
    .from(users)
    .groupBy(users.tenantId);
  const memberMap = new Map<string, number>();
  for (const m of memberCounts) {
    if (m.tenantId) memberMap.set(m.tenantId, Number(m.n));
  }

  // Persona counts.
  const personaCounts = await db
    .select({ tenantId: personas.tenantId, n: count() })
    .from(personas)
    .groupBy(personas.tenantId);
  const personaMap = new Map<string, number>();
  for (const p of personaCounts) {
    if (p.tenantId) personaMap.set(p.tenantId, Number(p.n));
  }

  // Audit count + last audit per tenant in one round trip. Drizzle's
  // raw sql<Date>``max(...)`` returns whatever the driver gives back,
  // which for the neon-http driver is an ISO string — coerce to Date so
  // downstream fmtDate() can call .getTime() on it.
  const auditAgg = await db
    .select({
      tenantId: audits.tenantId,
      n: count(),
      last: sql<string | Date>`max(${audits.timestamp})`,
    })
    .from(audits)
    .groupBy(audits.tenantId);
  const auditMap = new Map<string, { n: number; last: Date | null }>();
  for (const a of auditAgg) {
    if (!a.tenantId) continue;
    const last =
      a.last instanceof Date
        ? a.last
        : a.last
          ? new Date(a.last)
          : null;
    auditMap.set(a.tenantId, { n: Number(a.n), last });
  }

  return tenantRows.map((t) => ({
    id: t.id,
    slug: t.slug,
    emailDomain: t.emailDomain,
    plan: t.plan,
    tierStartedAt: t.tierStartedAt,
    tierExpiresAt: t.tierExpiresAt,
    createdAt: t.createdAt,
    memberCount: memberMap.get(t.id) ?? 0,
    personaCount: personaMap.get(t.id) ?? 0,
    auditCount: auditMap.get(t.id)?.n ?? 0,
    lastAuditAt: auditMap.get(t.id)?.last ?? null,
  }));
}

function planPill(plan: Row["plan"]): { label: string; cls: string } {
  switch (plan) {
    case "waitlisted":
      return { label: "Waitlisted", cls: "bg-amber-100 text-amber-800" };
    case "free":
      return { label: "Free", cls: "bg-sky-100 text-sky-800" };
    case "pro":
      return { label: "Pro", cls: "bg-emerald-100 text-emerald-800" };
    case "banned":
      return { label: "Banned", cls: "bg-rose-100 text-rose-900" };
  }
}

function asDate(d: Date | string | null | undefined): Date | null {
  if (!d) return null;
  if (d instanceof Date) return d;
  const parsed = new Date(d);
  return isNaN(parsed.getTime()) ? null : parsed;
}

function daysLeft(t: Row): string {
  if (t.plan === "pro") return "∞";
  const exp = asDate(t.tierExpiresAt);
  if (!exp) return "—";
  const d = Math.ceil((exp.getTime() - Date.now()) / 86400000);
  if (d < 0) return `${-d}d ago`;
  return `${d}d`;
}

function fmtDate(raw: Date | string | null | undefined): string {
  const d = asDate(raw);
  if (!d) return "—";
  const ms = Date.now() - d.getTime();
  const min = Math.floor(ms / 60000);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 48) return `${hr}h ago`;
  return `${Math.floor(hr / 24)}d ago`;
}

export default async function TenantsPage() {
  await requireAdmin();
  const rows = await loadTenants();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
      <div className="mb-6 flex items-baseline justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold mb-1">Tenants</h1>
          <p className="text-muted text-sm">
            {rows.length} {rows.length === 1 ? "tenant" : "tenants"}. Tap one
            to manage plan, tier, and members.
          </p>
        </div>
        <a
          href="/admin/waitlist"
          className="text-sm font-semibold text-sky-700 hover:text-sky-900 underline whitespace-nowrap"
        >
          Waitlist →
        </a>
      </div>

      {rows.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-muted text-sm">
          No tenants. Public signups will populate this.
        </div>
      ) : (
        <>
          {/* Mobile: card list */}
          <div className="md:hidden space-y-2">
            {rows.map((r) => {
              const pill = planPill(r.plan);
              return (
                <a
                  key={r.id}
                  href={`/admin/tenants/${r.id}`}
                  className="block bg-white border border-gray-200 rounded-2xl p-4 active:bg-gray-50"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <div className="font-semibold truncate">
                      {r.emailDomain ?? r.slug}
                    </div>
                    <span
                      className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded whitespace-nowrap ${pill.cls}`}
                    >
                      {pill.label}
                    </span>
                  </div>
                  <div className="text-xs text-muted font-mono mb-2">
                    {r.slug}
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs text-center">
                    <Stat label="Days" value={daysLeft(r)} />
                    <Stat label="Members" value={String(r.memberCount)} />
                    <Stat label="Personas" value={String(r.personaCount)} />
                    <Stat label="Audits" value={String(r.auditCount)} />
                  </div>
                  <div className="mt-2 text-[11px] text-muted">
                    Last audit: {fmtDate(r.lastAuditAt)} · Created: {fmtDate(r.createdAt)}
                  </div>
                </a>
              );
            })}
          </div>

          {/* Desktop: full table */}
          <div className="hidden md:block bg-white border border-gray-200 rounded-2xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Domain</th>
                  <th className="px-4 py-3 font-medium">Slug</th>
                  <th className="px-4 py-3 font-medium">Plan</th>
                  <th className="px-4 py-3 font-medium">Days left</th>
                  <th className="px-4 py-3 font-medium">Members</th>
                  <th className="px-4 py-3 font-medium">Personas</th>
                  <th className="px-4 py-3 font-medium">Audits</th>
                  <th className="px-4 py-3 font-medium">Last audit</th>
                  <th className="px-4 py-3 font-medium">Created</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const pill = planPill(r.plan);
                  return (
                    <tr
                      key={r.id}
                      className="border-t border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-medium">
                        <a
                          href={`/admin/tenants/${r.id}`}
                          className="text-sky-700 hover:underline"
                        >
                          {r.emailDomain ?? (
                            <span className="italic text-muted">—</span>
                          )}
                        </a>
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-muted">
                        {r.slug}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${pill.cls}`}
                        >
                          {pill.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">{daysLeft(r)}</td>
                      <td className="px-4 py-3 text-center">{r.memberCount}</td>
                      <td className="px-4 py-3 text-center">{r.personaCount}</td>
                      <td className="px-4 py-3 text-center">{r.auditCount}</td>
                      <td className="px-4 py-3 text-muted">
                        {fmtDate(r.lastAuditAt)}
                      </td>
                      <td className="px-4 py-3 text-muted">
                        {fmtDate(r.createdAt)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-lg py-1.5">
      <div className="text-[9px] uppercase tracking-wide text-muted">
        {label}
      </div>
      <div className="font-mono">{value}</div>
    </div>
  );
}
