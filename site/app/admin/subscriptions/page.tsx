import { eq, inArray, asc, sql } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { db, subscriptionJobs, tenants, experiences } from "@/lib/db/client";
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
  lastSeenAt: Date | null;
  emailsFromBrand: number;
};

async function loadJobs(): Promise<Row[]> {
  // `queued` and `auto_succeeded` are legacy values from the auto-subscribe
  // era — kept in the inArray so historical rows still render. New jobs land
  // at `manual_pending` directly.
  //
  // Two correlated subqueries surface "is this subscription actually
  // delivering mail" — the most useful audit signal once a subscription
  // is marked done. subscription_job.brand_domain stores the root
  // (skechers.com); experience.brand_domain stores the full sender
  // subdomain (emails.skechers.com). Match by suffix.
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
      lastSeenAt: sql<Date | null>`(
        SELECT MAX(${experiences.receivedAt})
        FROM ${experiences}
        WHERE ${experiences.personaSlug} = ${subscriptionJobs.personaSlug}
          AND ${experiences.brandDomain} LIKE '%' || ${subscriptionJobs.brandDomain}
          AND ${experiences.type} = 'email'
      )`,
      emailsFromBrand: sql<number>`COALESCE((
        SELECT COUNT(*)::int
        FROM ${experiences}
        WHERE ${experiences.personaSlug} = ${subscriptionJobs.personaSlug}
          AND ${experiences.brandDomain} LIKE '%' || ${subscriptionJobs.brandDomain}
          AND ${experiences.type} = 'email'
      ), 0)`,
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

// Render the "Mail flowing?" cell — what an admin auditing
// subscriptions actually wants to see at a glance:
//   • green pill + relative date when mail arrived recently
//   • amber when mail has been seen but is going stale (>14d)
//   • red when the subscription is marked done but nothing has
//     arrived since (or worse, never arrived)
//   • gray "—" before the subscription is even done
function freshnessCell(args: {
  status: string;
  lastSeenAt: Date | null;
  emailsFromBrand: number;
}): { label: string; sub: string | null; cls: string } {
  const { status, lastSeenAt, emailsFromBrand } = args;
  const subscribed = status === "manual_done" || status === "auto_succeeded";
  if (!subscribed && emailsFromBrand === 0) {
    return { label: "—", sub: null, cls: "text-muted" };
  }
  if (lastSeenAt) {
    const days = Math.floor(
      (Date.now() - new Date(lastSeenAt).getTime()) / 86_400_000
    );
    const sub = `${emailsFromBrand} email${emailsFromBrand === 1 ? "" : "s"}`;
    if (days <= 7) {
      return {
        label: days <= 0 ? "today" : `${days}d ago`,
        sub,
        cls: "bg-emerald-50 text-emerald-800 border-emerald-200 border px-1.5 py-0.5 rounded text-[11px] font-semibold",
      };
    }
    if (days <= 21) {
      return {
        label: `${days}d ago`,
        sub,
        cls: "bg-amber-50 text-amber-800 border-amber-200 border px-1.5 py-0.5 rounded text-[11px] font-semibold",
      };
    }
    return {
      label: `${days}d ago`,
      sub,
      cls: "bg-rose-50 text-rose-800 border-rose-200 border px-1.5 py-0.5 rounded text-[11px] font-semibold",
    };
  }
  // Subscribed but no mail ever — likely a bad subscription
  return {
    label: "no mail yet",
    sub: null,
    cls: "bg-rose-50 text-rose-800 border-rose-200 border px-1.5 py-0.5 rounded text-[11px] font-semibold",
  };
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
                    <div className="flex gap-2 items-baseline">
                      <dt className="text-muted w-16 shrink-0">Mail</dt>
                      <dd>
                        {(() => {
                          const f = freshnessCell({
                            status: r.status,
                            lastSeenAt: r.lastSeenAt,
                            emailsFromBrand: r.emailsFromBrand,
                          });
                          return (
                            <span className="inline-flex items-baseline gap-1.5">
                              <span className={f.cls}>{f.label}</span>
                              {f.sub && (
                                <span className="text-muted text-[11px]">
                                  · {f.sub}
                                </span>
                              )}
                            </span>
                          );
                        })()}
                      </dd>
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
                  <th className="px-4 py-3 font-medium">Mail flowing?</th>
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
                        {(() => {
                          const f = freshnessCell({
                            status: r.status,
                            lastSeenAt: r.lastSeenAt,
                            emailsFromBrand: r.emailsFromBrand,
                          });
                          return (
                            <div className="flex flex-col gap-0.5">
                              <span className={f.cls}>{f.label}</span>
                              {f.sub && (
                                <span className="text-[11px] text-muted">
                                  {f.sub}
                                </span>
                              )}
                            </div>
                          );
                        })()}
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
