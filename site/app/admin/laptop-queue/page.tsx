import { eq, desc } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { db, laptopProvisioningJobs, tenants, users } from "@/lib/db/client";
import { claimJobFormAction, markDoneFormAction } from "./actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Laptop queue · admin · etell" };

type Row = {
  id: string;
  personaSlug: string;
  tenantSlug: string;
  ownerEmail: string;
  status: string;
  createdAt: Date;
  claimedAt: Date | null;
};

async function loadQueue(): Promise<Row[]> {
  const rows = await db
    .select({
      id: laptopProvisioningJobs.id,
      personaSlug: laptopProvisioningJobs.personaSlug,
      tenantSlug: tenants.slug,
      ownerEmail: users.email,
      status: laptopProvisioningJobs.status,
      createdAt: laptopProvisioningJobs.createdAt,
      claimedAt: laptopProvisioningJobs.claimedAt,
    })
    .from(laptopProvisioningJobs)
    .innerJoin(tenants, eq(tenants.id, laptopProvisioningJobs.tenantId))
    .innerJoin(users, eq(users.tenantId, tenants.id))
    .orderBy(desc(laptopProvisioningJobs.createdAt));
  return rows.map((r) => ({ ...r, claimedAt: r.claimedAt ?? null }));
}

function statusPill(status: string): { label: string; cls: string } {
  if (status === "queued") return { label: "Queued", cls: "bg-amber-100 text-amber-800" };
  if (status === "running") return { label: "Running", cls: "bg-sky-100 text-sky-800" };
  if (status === "done") return { label: "Done", cls: "bg-emerald-100 text-emerald-800" };
  return { label: status, cls: "bg-rose-100 text-rose-800" };
}

export default async function LaptopQueuePage() {
  await requireAdmin();
  const rows = await loadQueue();

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Laptop queue</h1>
        <p className="text-muted text-sm">
          {rows.filter((r) => r.status === "queued").length} pending. Claim a
          job to get the copy-paste bootstrap command.
        </p>
      </div>

      {rows.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-muted text-sm">
          Queue is empty.
        </div>
      ) : (
        <>
        {/* Mobile: stacked cards */}
        <ul className="sm:hidden flex flex-col gap-3">
          {rows.map((r) => {
            const pill = statusPill(r.status);
            return (
              <li key={r.id} className="bg-white border border-gray-200 rounded-2xl p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="font-mono text-xs font-semibold break-all">
                    {r.personaSlug}
                  </div>
                  <span
                    className={`shrink-0 text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${pill.cls}`}
                  >
                    {pill.label}
                  </span>
                </div>
                <dl className="text-xs space-y-1 mb-2">
                  <div className="flex gap-2">
                    <dt className="text-muted w-14 shrink-0">Tenant</dt>
                    <dd className="font-mono break-all">{r.tenantSlug}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-muted w-14 shrink-0">Owner</dt>
                    <dd className="font-mono break-all">{r.ownerEmail}</dd>
                  </div>
                </dl>
                {r.status === "queued" && (
                  <code className="block mb-2 text-[11px] bg-gray-900 text-gray-100 px-2 py-1 rounded break-all">
                    node scripts/onboard-persona.mjs {r.personaSlug}
                  </code>
                )}
                <div className="flex gap-2 flex-wrap">
                  {r.status === "queued" && (
                    <form action={claimJobFormAction} className="flex-1">
                      <input type="hidden" name="jobId" value={r.id} />
                      <button
                        type="submit"
                        className="w-full px-3 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium"
                      >
                        Claim
                      </button>
                    </form>
                  )}
                  {(r.status === "running" || r.status === "queued") && (
                    <form action={markDoneFormAction} className="flex-1">
                      <input type="hidden" name="jobId" value={r.id} />
                      <button
                        type="submit"
                        className="w-full px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium"
                      >
                        Mark done
                      </button>
                    </form>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        {/* Desktop: table */}
        <div className="hidden sm:block bg-white border border-gray-200 rounded-2xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Persona</th>
                <th className="px-4 py-3 font-medium">Tenant</th>
                <th className="px-4 py-3 font-medium">Owner</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const pill = statusPill(r.status);
                return (
                  <tr key={r.id} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3">
                      <div className="font-mono text-xs font-semibold">
                        {r.personaSlug}
                      </div>
                      {r.status === "queued" && (
                        <code className="block mt-1 text-[11px] bg-gray-900 text-gray-100 px-2 py-1 rounded">
                          node scripts/onboard-persona.mjs {r.personaSlug}
                        </code>
                      )}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted">
                      {r.tenantSlug}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs">{r.ownerEmail}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${pill.cls}`}
                      >
                        {pill.label}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {r.status === "queued" && (
                        <form action={claimJobFormAction} className="inline-block mr-2">
                          <input type="hidden" name="jobId" value={r.id} />
                          <button
                            type="submit"
                            className="px-3 py-1.5 bg-sky-600 text-white rounded-lg text-xs font-medium hover:bg-sky-700"
                          >
                            Claim
                          </button>
                        </form>
                      )}
                      {(r.status === "running" || r.status === "queued") && (
                        <form action={markDoneFormAction} className="inline-block">
                          <input type="hidden" name="jobId" value={r.id} />
                          <button
                            type="submit"
                            className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-medium hover:bg-emerald-700"
                          >
                            Mark done
                          </button>
                        </form>
                      )}
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
