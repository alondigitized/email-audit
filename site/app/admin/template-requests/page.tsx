import { eq, desc, asc } from "drizzle-orm";
import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import {
  db,
  templateRequests,
  tenants,
  personaTemplates,
} from "@/lib/db/client";
import {
  fulfillTemplateRequestAction,
  rejectTemplateRequestAction,
} from "../templates/actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Template requests · admin · etell" };

type Search = { [key: string]: string | string[] | undefined };

type RequestRow = {
  id: string;
  tenantSlug: string | null;
  tenantPlan: string | null;
  industry: string;
  brandDomain: string;
  status: "queued" | "building" | "shipped" | "rejected";
  requestedAt: Date;
  shippedAt: Date | null;
  fulfilledTemplateSlug: string | null;
};

async function loadRequests(): Promise<RequestRow[]> {
  const rows = await db
    .select({
      id: templateRequests.id,
      tenantSlug: tenants.slug,
      tenantPlan: tenants.plan,
      industry: templateRequests.requestedIndustry,
      brandDomain: templateRequests.brandDomain,
      status: templateRequests.status,
      requestedAt: templateRequests.requestedAt,
      shippedAt: templateRequests.shippedAt,
      fulfilledTemplateSlug: templateRequests.fulfilledTemplateSlug,
    })
    .from(templateRequests)
    .leftJoin(tenants, eq(templateRequests.tenantId, tenants.id))
    .orderBy(desc(templateRequests.requestedAt));
  return rows.map((r) => ({
    ...r,
    tenantSlug: r.tenantSlug ?? null,
    tenantPlan: r.tenantPlan ?? null,
  }));
}

async function loadActiveTemplates(): Promise<
  { slug: string; industry: string }[]
> {
  return db
    .select({
      slug: personaTemplates.slug,
      industry: personaTemplates.industry,
    })
    .from(personaTemplates)
    .where(eq(personaTemplates.isActive, true))
    .orderBy(asc(personaTemplates.industry), asc(personaTemplates.slug));
}

function fmtDate(d: Date | null): string {
  if (!d) return "—";
  return new Date(d).toLocaleString();
}

function statusPill(status: RequestRow["status"]): React.ReactNode {
  const cls: Record<RequestRow["status"], string> = {
    queued: "bg-amber-100 text-amber-800",
    building: "bg-sky-100 text-sky-800",
    shipped: "bg-emerald-100 text-emerald-800",
    rejected: "bg-gray-100 text-gray-600",
  };
  return (
    <span className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${cls[status]}`}>
      {status}
    </span>
  );
}

export default async function TemplateRequestsPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  await requireAdmin();
  const [rows, activeTemplates] = await Promise.all([
    loadRequests(),
    loadActiveTemplates(),
  ]);

  const sp = await searchParams;
  const flash =
    sp?.ok === "shipped"
      ? "Request marked shipped + persona forked for the requesting tenant."
      : null;
  const error = typeof sp?.error === "string" ? sp.error : null;

  return (
    <>
      <div className="mb-5 py-6">
        <Link
          href="/admin"
          className="text-xs text-sky-700 hover:text-sky-900 underline"
        >
          ← Admin
        </Link>
        <div className="flex items-baseline justify-between gap-4 flex-wrap mt-1">
          <div>
            <h1 className="text-2xl font-bold mb-2">Template requests</h1>
            <p className="text-muted text-sm max-w-2xl">
              Concierge queue. Tenants that signed up at an industry without a
              curated template land here. Build the template (currently via{" "}
              <code className="text-xs bg-gray-100 px-1 rounded">
                tsx site/scripts/promote-personas-to-templates.ts
              </code>{" "}
              or by promoting an existing persona), then come back and ship.
            </p>
          </div>
          <Link
            href="/admin/templates"
            className="text-sm font-semibold text-sky-700 hover:text-sky-900 underline"
          >
            All templates →
          </Link>
        </div>
      </div>

      {flash && (
        <div className="mb-4 text-sm text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2">
          {flash}
        </div>
      )}
      {error && (
        <div className="mb-4 text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
          {error}
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        {rows.length === 0 ? (
          <div className="p-6 text-sm text-muted">No requests yet.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted">
                <th className="px-5 py-3">Industry</th>
                <th className="py-3">Tenant</th>
                <th className="py-3">Brand</th>
                <th className="py-3">Status</th>
                <th className="py-3">Requested</th>
                <th className="py-3 pr-5"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-t border-gray-100 align-top">
                  <td className="px-5 py-3">
                    <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                      {r.industry}
                    </code>
                  </td>
                  <td className="py-3 text-xs font-mono text-muted">
                    {r.tenantSlug ?? "—"}
                    <div className="text-[10px]">{r.tenantPlan ?? ""}</div>
                  </td>
                  <td className="py-3 text-xs">{r.brandDomain}</td>
                  <td className="py-3">{statusPill(r.status)}</td>
                  <td className="py-3 text-xs text-muted">
                    {fmtDate(r.requestedAt)}
                    {r.status === "shipped" && r.fulfilledTemplateSlug && (
                      <div className="text-[10px] text-emerald-700">
                        → {r.fulfilledTemplateSlug}
                      </div>
                    )}
                  </td>
                  <td className="py-3 pr-5 text-right">
                    {r.status === "queued" && (
                      <div className="flex flex-col gap-1.5 items-end">
                        <form
                          action={fulfillTemplateRequestAction}
                          className="flex gap-1.5"
                        >
                          <input type="hidden" name="requestId" value={r.id} />
                          <select
                            name="templateSlug"
                            defaultValue=""
                            required
                            className="text-xs border border-gray-200 rounded px-2 py-1"
                          >
                            <option value="" disabled>
                              Pick template…
                            </option>
                            {activeTemplates.map((t) => (
                              <option key={t.slug} value={t.slug}>
                                {t.slug} ({t.industry})
                              </option>
                            ))}
                          </select>
                          <button
                            type="submit"
                            className="text-xs px-2 py-1 bg-emerald-600 text-white rounded font-medium"
                          >
                            Ship
                          </button>
                        </form>
                        <form action={rejectTemplateRequestAction}>
                          <input type="hidden" name="requestId" value={r.id} />
                          <button
                            type="submit"
                            className="text-xs underline text-muted hover:text-amber-700"
                          >
                            Reject
                          </button>
                        </form>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
