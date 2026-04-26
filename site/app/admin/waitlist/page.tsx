import { eq, asc } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { db, tenants, users } from "@/lib/db/client";
import { extractDomain } from "@/lib/free-domains";
import { approveTenantFormAction, denyTenantFormAction } from "./actions";

export const dynamic = "force-dynamic";

export const metadata = { title: "Waitlist · admin · etell" };

type Row = {
  tenantId: string;
  tenantSlug: string;
  email: string;
  domain: string;
  createdAt: Date;
  referredBy: string | null;
};

async function loadWaitlist(): Promise<Row[]> {
  const rows = await db
    .select({
      tenantId: tenants.id,
      tenantSlug: tenants.slug,
      email: users.email,
      createdAt: tenants.createdAt,
      referredBy: tenants.referredByTenantId,
    })
    .from(tenants)
    .innerJoin(users, eq(users.tenantId, tenants.id))
    .where(eq(tenants.plan, "waitlisted"))
    .orderBy(asc(tenants.createdAt));
  return rows.map((r) => ({
    tenantId: r.tenantId,
    tenantSlug: r.tenantSlug,
    email: r.email,
    domain: extractDomain(r.email) ?? "—",
    createdAt: r.createdAt,
    referredBy: r.referredBy ?? null,
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

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Waitlist</h1>
        <p className="text-muted text-sm">
          {rows.length} pending {rows.length === 1 ? "request" : "requests"}.
          Approve to flip the tenant to <code>free</code> for 14 days and email
          a sign-in link.
        </p>
      </div>

      {rows.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-muted text-sm">
          No pending sign-ups. The waitlist is clean.
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Domain</th>
                <th className="px-4 py-3 font-medium">Tenant</th>
                <th className="px-4 py-3 font-medium">Age</th>
                <th className="px-4 py-3 font-medium">Referral</th>
                <th className="px-4 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.tenantId} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-mono text-xs">{r.email}</td>
                  <td className="px-4 py-3">{r.domain}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">
                    {r.tenantSlug}
                  </td>
                  <td className="px-4 py-3 text-muted">{fmtAge(r.createdAt)}</td>
                  <td className="px-4 py-3 text-muted">
                    {r.referredBy ? "✓ via /r" : "—"}
                  </td>
                  <td className="px-4 py-3 text-right">
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
      )}
    </div>
  );
}
