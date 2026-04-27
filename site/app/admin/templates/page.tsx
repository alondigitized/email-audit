import { eq, count, inArray, asc } from "drizzle-orm";
import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import {
  db,
  personaTemplates,
  personas,
  reactions,
} from "@/lib/db/client";
import { toggleTemplateActiveAction } from "./actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Persona templates · admin · etell" };

type Row = {
  slug: string;
  name: string;
  short: string;
  industry: string;
  isActive: boolean;
  forkCount: number;
  auditCount: number;
};

async function loadTemplates(): Promise<Row[]> {
  const tplRows = await db
    .select({
      slug: personaTemplates.slug,
      name: personaTemplates.name,
      short: personaTemplates.short,
      industry: personaTemplates.industry,
      isActive: personaTemplates.isActive,
    })
    .from(personaTemplates)
    .orderBy(asc(personaTemplates.industry), asc(personaTemplates.slug));
  if (tplRows.length === 0) return [];

  const slugs = tplRows.map((r) => r.slug);
  const [forkAgg, auditAgg] = await Promise.all([
    db
      .select({ slug: personas.templateSlug, n: count() })
      .from(personas)
      .where(inArray(personas.templateSlug, slugs))
      .groupBy(personas.templateSlug),
    db
      .select({ slug: reactions.personaSlug, n: count() })
      .from(reactions)
      .where(inArray(reactions.personaSlug, slugs))
      .groupBy(reactions.personaSlug),
  ]);

  const forkMap = new Map(forkAgg.map((r) => [r.slug ?? "", Number(r.n)]));
  const auditMap = new Map(auditAgg.map((r) => [r.slug, Number(r.n)]));

  return tplRows.map((r) => ({
    slug: r.slug,
    name: r.name,
    short: r.short,
    industry: r.industry,
    isActive: r.isActive,
    forkCount: forkMap.get(r.slug) ?? 0,
    auditCount: auditMap.get(r.slug) ?? 0,
  }));
}

export default async function TemplatesAdminPage() {
  await requireAdmin();
  const rows = await loadTemplates();

  return (
    <>
      <div className="mb-5 py-6">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <div>
            <Link
              href="/admin"
              className="text-xs text-sky-700 hover:text-sky-900 underline"
            >
              ← Admin
            </Link>
            <h1 className="text-2xl font-bold mt-1 mb-2">Persona templates</h1>
            <p className="text-muted text-sm max-w-2xl">
              Curated personas. Tenants fork these at signup.
              Inactive templates stay readable to existing forks but disappear
              from the wizard&apos;s picker.
            </p>
          </div>
          <Link
            href="/admin/template-requests"
            className="text-sm font-semibold text-sky-700 hover:text-sky-900 underline"
          >
            Concierge queue →
          </Link>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        {rows.length === 0 ? (
          <div className="p-6 text-sm text-muted">
            No templates yet. Run{" "}
            <code className="text-xs bg-gray-100 px-1 rounded">
              tsx site/scripts/promote-personas-to-templates.ts
            </code>{" "}
            to seed walker / martha / calvin-haze.
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted">
                <th className="px-5 py-3">Slug</th>
                <th className="py-3">Industry</th>
                <th className="py-3">Forks</th>
                <th className="py-3">Audits</th>
                <th className="py-3">Status</th>
                <th className="py-3 pr-5"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.slug} className="border-t border-gray-100">
                  <td className="px-5 py-3">
                    <Link
                      href={`/admin/templates/${r.slug}`}
                      className="font-mono font-medium text-sky-700 hover:underline"
                    >
                      {r.slug}
                    </Link>
                    <div className="text-xs text-muted">{r.name}</div>
                  </td>
                  <td className="py-3">
                    <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                      {r.industry}
                    </span>
                  </td>
                  <td className="py-3 tabular-nums">{r.forkCount}</td>
                  <td className="py-3 tabular-nums">{r.auditCount}</td>
                  <td className="py-3">
                    {r.isActive ? (
                      <span className="text-xs text-emerald-700 font-medium">
                        Active
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">Hidden</span>
                    )}
                  </td>
                  <td className="py-3 pr-5 text-right">
                    <form action={toggleTemplateActiveAction}>
                      <input type="hidden" name="slug" value={r.slug} />
                      <input
                        type="hidden"
                        name="next"
                        value={r.isActive ? "0" : "1"}
                      />
                      <button
                        type="submit"
                        className="text-xs underline text-muted hover:text-sky-700"
                      >
                        {r.isActive ? "Hide from picker" : "Show in picker"}
                      </button>
                    </form>
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
