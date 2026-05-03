import { sql as drizzleSql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { db, brandBlocklist } from "@/lib/db/client";

export const dynamic = "force-dynamic";
export const metadata = { title: "Brand blocklist · etell admin" };

async function addEntry(formData: FormData) {
  "use server";
  const admin = await requireAdmin();
  const domain = String(formData.get("domain") ?? "")
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "");
  const reason = String(formData.get("reason") ?? "").trim() || null;
  if (!domain || !/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domain)) {
    return;
  }
  await db.execute(drizzleSql`
    INSERT INTO brand_blocklist (domain, reason, added_by)
    VALUES (${domain}, ${reason}, ${admin.id})
    ON CONFLICT (domain) DO UPDATE SET
      reason = EXCLUDED.reason,
      added_by = EXCLUDED.added_by,
      created_at = NOW()
  `);
  revalidatePath("/admin/brand-blocklist");
}

async function removeEntry(formData: FormData) {
  "use server";
  await requireAdmin();
  const domain = String(formData.get("domain") ?? "").trim().toLowerCase();
  if (!domain) return;
  await db.execute(drizzleSql`
    DELETE FROM brand_blocklist WHERE domain = ${domain}
  `);
  revalidatePath("/admin/brand-blocklist");
}

export default async function BrandBlocklistPage() {
  await requireAdmin();

  const rows = await db
    .select({
      domain: brandBlocklist.domain,
      reason: brandBlocklist.reason,
      createdAt: brandBlocklist.createdAt,
    })
    .from(brandBlocklist)
    .orderBy(brandBlocklist.createdAt);

  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Brand blocklist</h1>
        <p className="text-muted text-sm max-w-xl">
          Domains here are refused by{" "}
          <code className="font-mono text-xs bg-gray-100 px-1 rounded">
            enqueueSubscriptionJob
          </code>
          . When a brand contacts us asking to be removed (per /terms §6),
          add the apex domain. Substring match — adding{" "}
          <code className="font-mono">brand.com</code> blocks{" "}
          <code className="font-mono">em.brand.com</code> and any other ESP
          subdomain off the same brand.
        </p>
      </div>

      <form
        action={addEntry}
        className="mb-8 bg-white border border-gray-200 rounded-2xl p-5 space-y-3"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="text-xs">
            <span className="block uppercase tracking-wide text-muted mb-1">
              Domain
            </span>
            <input
              name="domain"
              required
              placeholder="example.com"
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono outline-none focus:border-sky-500"
            />
          </label>
          <label className="text-xs">
            <span className="block uppercase tracking-wide text-muted mb-1">
              Reason (optional)
            </span>
            <input
              name="reason"
              placeholder="legal request 2026-04-29"
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-sky-500"
            />
          </label>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded-xl"
        >
          Add to blocklist
        </button>
      </form>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-xs uppercase text-muted">
            <tr>
              <th className="py-2 px-4">Domain</th>
              <th className="py-2 px-4">Reason</th>
              <th className="py-2 px-4">Added</th>
              <th className="py-2 px-4 text-right"></th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-6 text-center text-muted text-sm">
                  No blocked brands yet.
                </td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.domain} className="border-t border-gray-100">
                  <td className="py-2 px-4 font-mono">{r.domain}</td>
                  <td className="py-2 px-4 text-xs text-muted">
                    {r.reason ?? "—"}
                  </td>
                  <td className="py-2 px-4 text-xs text-muted">
                    {r.createdAt?.toISOString().slice(0, 10)}
                  </td>
                  <td className="py-2 px-4 text-right">
                    <form action={removeEntry}>
                      <input type="hidden" name="domain" value={r.domain} />
                      <button
                        type="submit"
                        className="text-xs text-rose-700 hover:text-rose-900 underline"
                      >
                        Remove
                      </button>
                    </form>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
