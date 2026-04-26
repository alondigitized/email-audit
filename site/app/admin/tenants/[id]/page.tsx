import { notFound } from "next/navigation";
import { eq, asc, desc } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { db, tenants, users, personas, audits } from "@/lib/db/client";
import {
  changeTenantPlanFormAction,
  extendTenantTierFormAction,
} from "../actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Tenant · admin · etell" };

function fmtDate(d: Date | null): string {
  if (!d) return "—";
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function daysLeft(plan: string, expires: Date | null): string {
  if (plan === "pro") return "∞ (Pro)";
  if (!expires) return "—";
  const d = Math.ceil((expires.getTime() - Date.now()) / 86400000);
  if (d < 0) return `expired ${-d}d ago`;
  return `${d} days`;
}

export default async function TenantDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) notFound();

  const [t] = await db
    .select()
    .from(tenants)
    .where(eq(tenants.id, id))
    .limit(1);
  if (!t) notFound();

  const memberRows = await db
    .select({
      id: users.id,
      email: users.email,
      isAdmin: users.isAdmin,
      lastSignInAt: users.lastSignInAt,
      createdAt: users.createdAt,
    })
    .from(users)
    .where(eq(users.tenantId, id))
    .orderBy(asc(users.createdAt));

  const personaRows = await db
    .select({
      id: personas.id,
      slug: personas.slug,
      name: personas.name,
      createdAt: personas.createdAt,
    })
    .from(personas)
    .where(eq(personas.tenantId, id))
    .orderBy(asc(personas.slug));

  const recentAudits = await db
    .select({
      slug: audits.slug,
      type: audits.type,
      timestamp: audits.timestamp,
      score: audits.score,
    })
    .from(audits)
    .where(eq(audits.tenantId, id))
    .orderBy(desc(audits.timestamp))
    .limit(10);

  const planOptions = ["waitlisted", "free", "pro", "banned"] as const;

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-6">
        <div className="text-xs text-muted">
          <a href="/admin/tenants" className="hover:underline">
            ← All tenants
          </a>
        </div>
        <h1 className="text-2xl font-bold mt-1">{t.emailDomain ?? t.slug}</h1>
        <div className="text-xs text-muted font-mono mt-1">
          {t.id} · slug={t.slug}
        </div>
      </div>

      {/* State + actions */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="text-xs uppercase tracking-wide text-muted mb-3">
            Current state
          </div>
          <Row label="Plan" value={t.plan} />
          <Row label="Email domain" value={t.emailDomain ?? "—"} />
          <Row label="Tier started" value={fmtDate(t.tierStartedAt)} />
          <Row label="Tier expires" value={fmtDate(t.tierExpiresAt)} />
          <Row label="Days left" value={daysLeft(t.plan, t.tierExpiresAt)} />
          <Row label="Referrals made" value={String(t.referralsMade)} />
          <Row label="Referral code" value={t.referralCode ?? "—"} />
          <Row label="Created" value={fmtDate(t.createdAt)} />
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="text-xs uppercase tracking-wide text-muted mb-3">
            Lifecycle actions
          </div>

          {/* Change plan */}
          <form action={changeTenantPlanFormAction} className="mb-4">
            <input type="hidden" name="tenantId" value={t.id} />
            <label
              htmlFor="plan"
              className="block text-xs font-medium mb-1"
            >
              Change plan
            </label>
            <div className="flex gap-2">
              <select
                id="plan"
                name="plan"
                defaultValue={t.plan}
                className="flex-1 py-1.5 px-2 border border-gray-200 rounded-lg text-sm"
              >
                {planOptions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="px-3 py-1.5 bg-accent text-white rounded-lg text-xs font-semibold"
              >
                Apply
              </button>
            </div>
            <p className="text-[10px] text-muted mt-1">
              free → pro clears expiry. waitlisted → free stamps a fresh 14d
              window if none exists.
            </p>
          </form>

          {/* Extend tier */}
          {t.plan === "free" && (
            <form action={extendTenantTierFormAction}>
              <input type="hidden" name="tenantId" value={t.id} />
              <label
                htmlFor="days"
                className="block text-xs font-medium mb-1"
              >
                Extend tier (days)
              </label>
              <div className="flex gap-2">
                <input
                  id="days"
                  name="days"
                  type="number"
                  defaultValue={7}
                  min={1}
                  max={90}
                  className="flex-1 py-1.5 px-2 border border-gray-200 rounded-lg text-sm"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-semibold"
                >
                  Add
                </button>
              </div>
              <p className="text-[10px] text-muted mt-1">
                Capped at 28d total from start. To go beyond, switch to Pro.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Members */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
        <div className="text-xs uppercase tracking-wide text-muted mb-3">
          Members ({memberRows.length})
        </div>
        {memberRows.length === 0 ? (
          <div className="text-sm text-muted">No users attached.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="text-xs text-muted text-left">
              <tr>
                <th className="font-medium pb-2">Email</th>
                <th className="font-medium pb-2">Role</th>
                <th className="font-medium pb-2">Joined</th>
                <th className="font-medium pb-2">Last sign-in</th>
              </tr>
            </thead>
            <tbody>
              {memberRows.map((m) => (
                <tr key={m.id} className="border-t border-gray-100">
                  <td className="py-2 font-mono text-xs">{m.email}</td>
                  <td className="py-2 text-xs">
                    {m.isAdmin ? (
                      <span className="bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded text-[10px]">
                        admin
                      </span>
                    ) : (
                      "member"
                    )}
                  </td>
                  <td className="py-2 text-xs text-muted">
                    {fmtDate(m.createdAt)}
                  </td>
                  <td className="py-2 text-xs text-muted">
                    {fmtDate(m.lastSignInAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Personas */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
        <div className="text-xs uppercase tracking-wide text-muted mb-3">
          Personas ({personaRows.length})
        </div>
        {personaRows.length === 0 ? (
          <div className="text-sm text-muted">No personas yet.</div>
        ) : (
          <ul className="text-sm space-y-1">
            {personaRows.map((p) => (
              <li key={p.id}>
                <a
                  href={`/admin/personas/${p.slug}`}
                  className="text-sky-700 hover:underline font-mono text-xs"
                >
                  {p.slug}
                </a>{" "}
                <span className="text-muted">— {p.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Recent audits */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <div className="text-xs uppercase tracking-wide text-muted mb-3">
          Recent audits (last 10)
        </div>
        {recentAudits.length === 0 ? (
          <div className="text-sm text-muted">No audits yet.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="text-xs text-muted text-left">
              <tr>
                <th className="font-medium pb-2">Slug</th>
                <th className="font-medium pb-2">Type</th>
                <th className="font-medium pb-2">Score</th>
                <th className="font-medium pb-2">When</th>
              </tr>
            </thead>
            <tbody>
              {recentAudits.map((a) => (
                <tr key={a.slug} className="border-t border-gray-100">
                  <td className="py-2 font-mono text-xs">
                    <a
                      href={`/audits/${a.slug}`}
                      className="text-sky-700 hover:underline"
                    >
                      {a.slug}
                    </a>
                  </td>
                  <td className="py-2 text-xs">{a.type}</td>
                  <td className="py-2 text-xs">{a.score ?? "—"}</td>
                  <td className="py-2 text-xs text-muted">
                    {fmtDate(a.timestamp)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm py-1.5 border-b border-gray-50 last:border-b-0">
      <span className="text-muted text-xs uppercase tracking-wide">{label}</span>
      <span className="font-mono text-xs">{value}</span>
    </div>
  );
}
