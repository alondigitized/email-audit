import { eq, inArray, asc, sql } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { db, subscriptionJobs, tenants } from "@/lib/db/client";
import { markJobDoneFormAction } from "./actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Subscriptions · admin · etell" };

type Row = {
  id: string;
  tenantSlug: string;
  personaSlug: string;
  brandDomain: string;
  inboxAddress: string;
  status: string;
  attempts: number;
  lastError: string | null;
  createdAt: Date;
};

async function loadJobs(): Promise<Row[]> {
  // `queued` and `auto_succeeded` are legacy values from the auto-subscribe
  // era — kept in the inArray so historical rows still render. New jobs land
  // at `manual_pending` directly.
  const rows = await db
    .select({
      id: subscriptionJobs.id,
      tenantSlug: tenants.slug,
      personaSlug: subscriptionJobs.personaSlug,
      brandDomain: subscriptionJobs.brandDomain,
      inboxAddress: subscriptionJobs.inboxAddress,
      status: subscriptionJobs.status,
      attempts: subscriptionJobs.attempts,
      lastError: subscriptionJobs.lastError,
      createdAt: subscriptionJobs.createdAt,
    })
    .from(subscriptionJobs)
    .innerJoin(tenants, eq(tenants.id, subscriptionJobs.tenantId))
    .where(
      inArray(subscriptionJobs.status, [
        "queued",
        "manual_pending",
        "auto_succeeded",
        "manual_done",
        "failed",
      ])
    )
    // Action items at the top; subscribed rows sink to the bottom.
    // Within each group sort by brand domain alphabetically so the
    // queue is predictable to scan rather than churn-ordered.
    .orderBy(
      sql`CASE
        WHEN ${subscriptionJobs.status} IN ('queued','manual_pending') THEN 0
        WHEN ${subscriptionJobs.status} = 'failed' THEN 1
        WHEN ${subscriptionJobs.status} IN ('manual_done','auto_succeeded') THEN 2
        ELSE 3
      END`,
      asc(subscriptionJobs.brandDomain)
    );
  return rows;
}

function statusPill(status: string): { label: string; cls: string } {
  switch (status) {
    case "queued":
    case "manual_pending":
      return { label: "Needs signup", cls: "bg-rose-100 text-rose-800" };
    case "auto_succeeded":
    case "manual_done":
      return { label: "Subscribed", cls: "bg-emerald-100 text-emerald-800" };
    case "failed":
      return { label: "Failed", cls: "bg-rose-100 text-rose-900" };
    default:
      return { label: status, cls: "bg-gray-100 text-gray-700" };
  }
}

export default async function SubscriptionsPage() {
  await requireAdmin();
  const rows = await loadJobs();
  const needsSignup = rows.filter(
    (r) => r.status === "manual_pending" || r.status === "queued"
  ).length;

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-8 px-4 sm:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Subscriptions queue</h1>
        <p className="text-muted text-sm">
          {needsSignup} jobs need a human. Open the brand&apos;s newsletter
          form, paste the inbox address, hit submit, click{" "}
          <strong>Mark done</strong>. Email-monitor flips rows automatically
          when the welcome email lands.
        </p>
      </div>

      {rows.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-muted text-sm">
          No subscription jobs yet.
        </div>
      ) : (
        <>
          {/* Mobile: stacked cards */}
          <ul className="sm:hidden flex flex-col gap-3">
            {rows.map((r) => {
              const pill = statusPill(r.status);
              const subUrl = `https://${r.brandDomain}/`;
              const showMarkDone =
                r.status === "manual_pending" ||
                r.status === "queued" ||
                r.status === "failed";
              return (
                <li
                  key={r.id}
                  className="bg-white border border-gray-200 rounded-2xl p-4"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <a
                      href={subUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-sky-700 underline break-all"
                    >
                      {r.brandDomain}
                    </a>
                    <span
                      className={`shrink-0 text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${pill.cls}`}
                    >
                      {pill.label}
                    </span>
                  </div>
                  <dl className="text-xs space-y-1">
                    <div className="flex gap-2">
                      <dt className="text-muted w-16 shrink-0">Persona</dt>
                      <dd className="font-mono break-all">{r.personaSlug}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-muted w-16 shrink-0">Inbox</dt>
                      <dd className="font-mono break-all">{r.inboxAddress}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-muted w-16 shrink-0">Tenant</dt>
                      <dd className="font-mono text-muted">{r.tenantSlug}</dd>
                    </div>
                  </dl>
                  {r.lastError && (
                    <div className="mt-2 text-[11px] text-rose-700 italic break-words">
                      {r.lastError.slice(0, 160)}
                    </div>
                  )}
                  {showMarkDone && (
                    <form action={markJobDoneFormAction} className="mt-3">
                      <input type="hidden" name="jobId" value={r.id} />
                      <button
                        type="submit"
                        className="w-full px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700"
                      >
                        Mark done
                      </button>
                    </form>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop: table */}
          <div className="hidden sm:block bg-white border border-gray-200 rounded-2xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Brand</th>
                  <th className="px-4 py-3 font-medium">Persona</th>
                  <th className="px-4 py-3 font-medium">Inbox</th>
                  <th className="px-4 py-3 font-medium">Tenant</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const pill = statusPill(r.status);
                  const subUrl = `https://${r.brandDomain}/`;
                  const showMarkDone =
                    r.status === "manual_pending" ||
                    r.status === "queued" ||
                    r.status === "failed";
                  return (
                    <tr key={r.id} className="border-t border-gray-100 align-top">
                      <td className="px-4 py-3">
                        <a
                          href={subUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-sky-700 underline"
                        >
                          {r.brandDomain}
                        </a>
                        {r.lastError && (
                          <div className="mt-1 text-[11px] text-rose-700 italic">
                            {r.lastError.slice(0, 90)}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">{r.personaSlug}</td>
                      <td className="px-4 py-3 font-mono text-xs">
                        {r.inboxAddress}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-muted">
                        {r.tenantSlug}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${pill.cls}`}
                        >
                          {pill.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {showMarkDone && (
                          <form action={markJobDoneFormAction} className="inline-block">
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
