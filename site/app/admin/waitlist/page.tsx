import { eq, asc } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { db, tenants, users } from "@/lib/db/client";
import { approveTenantFormAction, denyTenantFormAction } from "./actions";

export const dynamic = "force-dynamic";

export const metadata = { title: "Waitlist · admin · etell" };

// One row per waitlisted tenant. Multiple users at the same domain (e.g.
// two coworkers signed up before approval) collapse into one tenant row;
// approve once and everyone in that tenant gets a magic-link email.
type TenantRow = {
  tenantId: string;
  tenantSlug: string;
  domain: string | null;
  createdAt: Date;
  referredBy: string | null;
  members: { email: string; createdAt: Date }[];
};

async function loadWaitlist(): Promise<TenantRow[]> {
  const tenantRows = await db
    .select({
      id: tenants.id,
      slug: tenants.slug,
      emailDomain: tenants.emailDomain,
      createdAt: tenants.createdAt,
      referredBy: tenants.referredByTenantId,
    })
    .from(tenants)
    .where(eq(tenants.plan, "waitlisted"))
    .orderBy(asc(tenants.createdAt));

  if (tenantRows.length === 0) return [];

  // Pull all members for each waitlisted tenant in one round trip.
  const userRows = await db
    .select({
      email: users.email,
      tenantId: users.tenantId,
      createdAt: users.createdAt,
    })
    .from(users);
  const membersByTenant = new Map<string, { email: string; createdAt: Date }[]>();
  for (const u of userRows) {
    if (!u.tenantId) continue;
    const arr = membersByTenant.get(u.tenantId) ?? [];
    arr.push({ email: u.email, createdAt: u.createdAt });
    membersByTenant.set(u.tenantId, arr);
  }

  return tenantRows.map((t) => ({
    tenantId: t.id,
    tenantSlug: t.slug,
    domain: t.emailDomain ?? null,
    createdAt: t.createdAt,
    referredBy: t.referredBy ?? null,
    members: (membersByTenant.get(t.id) ?? []).sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
    ),
  }));
}

function fmtAge(d: Date): string {
  const ms = Date.now() - d.getTime();
  const min = Math.floor(ms / 60000);
  if (min < 60) return `${min}m`;
  const hr = Math.floor(min / 60);
  if (hr < 48) return `${hr}h`;
  return `${Math.floor(hr / 24)}d`;
}

export default async function WaitlistPage() {
  await requireAdmin();
  const rows = await loadWaitlist();
  const totalUsers = rows.reduce((a, t) => a + t.members.length, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 md:py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Waitlist</h1>
        <p className="text-muted text-sm">
          {rows.length} pending {rows.length === 1 ? "company" : "companies"}{" "}
          ({totalUsers} {totalUsers === 1 ? "user" : "users"}). Approving a
          company flips it to <code>free</code> for 14 days and emails a
          sign-in link to <strong>every</strong> queued member.
        </p>
      </div>

      {rows.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-muted text-sm">
          No pending sign-ups. The waitlist is clean.
        </div>
      ) : (
        <>
          {/* Mobile: stacked cards */}
          <div className="md:hidden space-y-3">
            {rows.map((r) => (
              <div
                key={r.tenantId}
                className="bg-white border border-gray-200 rounded-2xl p-4"
              >
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <div className="font-semibold truncate">
                    {r.domain ?? "—"}
                  </div>
                  <span className="text-[10px] uppercase tracking-wide text-muted whitespace-nowrap">
                    {fmtAge(r.createdAt)} · {r.referredBy ? "ref ✓" : "no ref"}
                  </span>
                </div>
                <div className="text-[11px] text-muted font-mono mb-2">
                  {r.tenantSlug}
                </div>
                <div className="text-xs font-mono mb-3 space-y-0.5">
                  {r.members.length === 0 ? (
                    <span className="text-muted italic">no users yet</span>
                  ) : (
                    r.members.map((m) => (
                      <div key={m.email} className="break-all">
                        {m.email}
                      </div>
                    ))
                  )}
                </div>
                <div className="flex gap-2">
                  <form
                    action={approveTenantFormAction}
                    className="flex-1"
                  >
                    <input type="hidden" name="tenantId" value={r.tenantId} />
                    <button
                      type="submit"
                      className="w-full px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700"
                    >
                      Approve
                    </button>
                  </form>
                  <form
                    action={denyTenantFormAction}
                    className="flex-1"
                  >
                    <input type="hidden" name="tenantId" value={r.tenantId} />
                    <button
                      type="submit"
                      className="w-full px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200"
                    >
                      Deny
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: full table */}
          <div className="hidden md:block bg-white border border-gray-200 rounded-2xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Domain</th>
                  <th className="px-4 py-3 font-medium">Members</th>
                  <th className="px-4 py-3 font-medium">Tenant</th>
                  <th className="px-4 py-3 font-medium">Age</th>
                  <th className="px-4 py-3 font-medium">Referral</th>
                  <th className="px-4 py-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.tenantId} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3 font-medium">{r.domain ?? "—"}</td>
                    <td className="px-4 py-3 font-mono text-xs">
                      {r.members.length === 0 ? (
                        <span className="text-muted italic">no users yet</span>
                      ) : (
                        <div className="space-y-0.5">
                          {r.members.map((m) => (
                            <div key={m.email}>{m.email}</div>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted">
                      {r.tenantSlug}
                    </td>
                    <td className="px-4 py-3 text-muted">{fmtAge(r.createdAt)}</td>
                    <td className="px-4 py-3 text-muted">
                      {r.referredBy ? "✓ via /r" : "—"}
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <form
                        action={approveTenantFormAction}
                        className="inline-block mr-2"
                      >
                        <input type="hidden" name="tenantId" value={r.tenantId} />
                        <button
                          type="submit"
                          className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-medium hover:bg-emerald-700"
                        >
                          Approve
                        </button>
                      </form>
                      <form action={denyTenantFormAction} className="inline-block">
                        <input type="hidden" name="tenantId" value={r.tenantId} />
                        <button
                          type="submit"
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-200"
                        >
                          Deny
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
