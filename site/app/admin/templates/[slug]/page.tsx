import { eq, and, count } from "drizzle-orm";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import {
  db,
  personaTemplates,
  personas,
  reactions,
  tenants,
} from "@/lib/db/client";
import { toggleTemplateActiveAction } from "../actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Template · admin · etell" };

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await requireAdmin();
  const { slug } = await params;

  const [tpl] = await db
    .select({
      slug: personaTemplates.slug,
      name: personaTemplates.name,
      short: personaTemplates.short,
      industry: personaTemplates.industry,
      profile: personaTemplates.profile,
      isActive: personaTemplates.isActive,
      createdAt: personaTemplates.createdAt,
    })
    .from(personaTemplates)
    .where(eq(personaTemplates.slug, slug))
    .limit(1);
  if (!tpl) notFound();

  const [forks, auditAgg] = await Promise.all([
    db
      .select({
        slug: personas.slug,
        name: personas.name,
        tenantSlug: tenants.slug,
        tenantPlan: tenants.plan,
      })
      .from(personas)
      .leftJoin(tenants, eq(personas.tenantId, tenants.id))
      .where(eq(personas.templateSlug, slug)),
    db
      .select({ n: count() })
      .from(reactions)
      .where(eq(reactions.personaSlug, slug)),
  ]);

  const auditCount = Number(auditAgg[0]?.n ?? 0);
  const id = tpl.profile?.identity;

  return (
    <>
      <div className="mb-5 py-6">
        <Link
          href="/admin/templates"
          className="text-xs text-sky-700 hover:text-sky-900 underline"
        >
          ← Templates
        </Link>
        <div className="flex items-baseline justify-between gap-4 flex-wrap mt-1">
          <div>
            <h1 className="text-2xl font-bold mb-1">{tpl.name}</h1>
            <div className="text-sm text-muted">
              <code className="font-mono">{tpl.slug}</code> ·{" "}
              <span className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">
                {tpl.industry}
              </span>{" "}
              ·{" "}
              {tpl.isActive ? (
                <span className="text-emerald-700 font-medium">Active</span>
              ) : (
                <span className="text-gray-500">Hidden</span>
              )}
            </div>
          </div>
          <form action={toggleTemplateActiveAction}>
            <input type="hidden" name="slug" value={tpl.slug} />
            <input
              type="hidden"
              name="next"
              value={tpl.isActive ? "0" : "1"}
            />
            <button
              type="submit"
              className="text-xs underline text-muted hover:text-sky-700"
            >
              {tpl.isActive ? "Hide from picker" : "Show in picker"}
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <Stat label="Forks" value={forks.length} />
        <Stat label="Audits accumulated" value={auditCount} />
        <Stat label="Created" value={tpl.createdAt.toLocaleDateString()} />
      </div>

      {id && (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
          <h2 className="text-base font-semibold mb-3">Identity</h2>
          <dl className="space-y-2 text-sm">
            <Row label="Age" value={`${id.age} (${id.generation})`} />
            <Row label="Gender" value={id.gender} />
            <Row label="Style" value={id.style} />
            <Row label="Shopping habits" value={id.shopping_habits} />
            <Row label="Tech comfort" value={id.tech_comfort} />
            <Row
              label="Focus areas"
              value={(id.focus_areas ?? []).join(", ")}
            />
          </dl>
          <p className="text-xs text-muted mt-4">
            Edit the canonical template identity at{" "}
            <Link
              href={`/admin/personas/${tpl.slug}`}
              className="underline hover:text-sky-700"
            >
              /admin/personas/{tpl.slug}
            </Link>{" "}
            (the persona row in Alon&apos;s tenant carries the source-of-truth
            profile until the v2 admin/templates editor lands).
          </p>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="text-base font-semibold">
            Forks ({forks.length})
          </h2>
        </div>
        {forks.length === 0 ? (
          <div className="p-6 text-sm text-muted">
            No tenant has forked this template yet.
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted">
                <th className="px-5 py-3">Persona slug</th>
                <th className="py-3">Tenant</th>
                <th className="py-3">Plan</th>
              </tr>
            </thead>
            <tbody>
              {forks.map((f) => (
                <tr key={f.slug} className="border-t border-gray-100">
                  <td className="px-5 py-3">
                    <Link
                      href={`/admin/personas/${f.slug}`}
                      className="font-mono text-sky-700 hover:underline"
                    >
                      {f.slug}
                    </Link>
                    <div className="text-xs text-muted">{f.name}</div>
                  </td>
                  <td className="py-3 text-xs font-mono text-muted">
                    {f.tenantSlug ?? "—"}
                  </td>
                  <td className="py-3 text-xs">{f.tenantPlan ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-muted">{label}</div>
      <div className="text-2xl font-bold mt-1 tabular-nums">{value}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <dt className="w-32 text-xs uppercase tracking-wide text-muted shrink-0 pt-0.5">
        {label}
      </dt>
      <dd className="flex-1">{value}</dd>
    </div>
  );
}
