import { eq, desc, inArray } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { db, subscriptionJobs, tenants } from "@/lib/db/client";
import { markJobDoneFormAction, retryJobFormAction } from "./actions";

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
    .orderBy(desc(subscriptionJobs.createdAt));
  return rows;
}

function statusPill(status: string): { label: string; cls: string } {
  switch (status) {
    case "queued":
      return { label: "Queued", cls: "bg-amber-100 text-amber-800" };
    case "auto_succeeded":
      return { label: "Auto ✓", cls: "bg-emerald-100 text-emerald-800" };
    case "manual_pending":
      return { label: "Manual pending", cls: "bg-rose-100 text-rose-800" };
    case "manual_done":
      return { label: "Manual ✓", cls: "bg-emerald-100 text-emerald-800" };
    case "failed":
      return { label: "Failed", cls: "bg-rose-100 text-rose-900" };
    default:
      return { label: status, cls: "bg-gray-100 text-gray-700" };
  }
}

export default async function SubscriptionsPage() {
  await requireAdmin();
  const rows = await loadJobs();
  const pending = rows.filter((r) => r.status === "manual_pending").length;

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Subscriptions queue</h1>
        <p className="text-muted text-sm">
          {pending} jobs need a human. Open the brand&apos;s newsletter form,
          paste the inbox address, hit submit, click <strong>Mark done</strong>.
          Email-monitor flips rows automatically when the welcome email lands.
        </p>
      </div>

      {rows.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-muted text-sm">
          No subscription jobs yet.
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Brand</th>
                <th className="px-4 py-3 font-medium">Persona</th>
                <th className="px-4 py-3 font-medium">Inbox</th>
                <th className="px-4 py-3 font-medium">Tenant</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Attempts</th>
                <th className="px-4 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const pill = statusPill(r.status);
                const subUrl = `https://${r.brandDomain}/`;
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
                    <td className="px-4 py-3 text-xs text-muted">{r.attempts}</td>
                    <td className="px-4 py-3">
                      {(r.status === "manual_pending" ||
                        r.status === "queued" ||
                        r.status === "failed") && (
                        <form action={markJobDoneFormAction} className="inline-block mr-2">
                          <input type="hidden" name="jobId" value={r.id} />
                          <button
                            type="submit"
                            className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-medium hover:bg-emerald-700"
                          >
                            Mark done
                          </button>
                        </form>
                      )}
                      {(r.status === "manual_pending" ||
                        r.status === "failed") && (
                        <form action={retryJobFormAction} className="inline-block">
                          <input type="hidden" name="jobId" value={r.id} />
                          <button
                            type="submit"
                            className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-200"
                          >
                            Retry auto
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
      )}
    </div>
  );
}
