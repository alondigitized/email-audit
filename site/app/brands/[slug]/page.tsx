import { notFound } from "next/navigation";
import { desc, eq, sql as raw } from "drizzle-orm";
import {
  db,
  brands,
  opportunities,
  opportunityEvidence,
  experiences,
  reactions,
  defects,
} from "@/lib/db/client";
import { requireAdmin } from "@/lib/dal";
import { setOpportunityStatusAction } from "./actions";

// Admin-only in v1: the board aggregates cross-tenant signals and is the
// working surface for deciding what a brand gets shown. Sharing a single
// opportunity outward can reuse the share-token pattern later.
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: `${slug} · opportunities · etell` };
}

type EvidenceRow = {
  kind: string;
  note: string | null;
  auditSlug: string | null;
  defectDescription: string | null;
  defectUrgency: string | null;
};

async function loadBoard(slug: string) {
  const brand = await db
    .select()
    .from(brands)
    .where(eq(brands.slug, slug))
    .limit(1);
  if (!brand.length) return null;

  const coverage = await db
    .select({
      type: experiences.type,
      n: raw<number>`count(*)::int`,
      avg: raw<string | null>`round(avg(${reactions.score}), 1)::text`,
    })
    .from(experiences)
    .leftJoin(reactions, eq(reactions.experienceId, experiences.id))
    .where(eq(experiences.brandSlug, slug))
    .groupBy(experiences.type)
    .orderBy(desc(raw`count(*)`));

  const opps = await db
    .select()
    .from(opportunities)
    .where(eq(opportunities.brandSlug, slug))
    .orderBy(desc(opportunities.createdAt));

  const evidence = new Map<string, EvidenceRow[]>();
  for (const o of opps) {
    const rows = await db
      .select({
        kind: opportunityEvidence.kind,
        note: opportunityEvidence.note,
        auditSlug: reactions.slug,
        defectDescription: defects.description,
        defectUrgency: defects.urgency,
      })
      .from(opportunityEvidence)
      .leftJoin(
        reactions,
        eq(reactions.experienceId, opportunityEvidence.experienceId)
      )
      .leftJoin(defects, eq(defects.id, opportunityEvidence.defectId))
      .where(eq(opportunityEvidence.opportunityId, o.id));
    evidence.set(o.id, rows);
  }

  return { brand: brand[0], coverage, opps, evidence };
}

const STATUS_CLS: Record<string, string> = {
  hypothesis: "bg-amber-100 text-amber-800",
  validated: "bg-sky-100 text-sky-800",
  presented: "bg-indigo-100 text-indigo-800",
  accepted: "bg-emerald-100 text-emerald-800",
  dismissed: "bg-slate-100 text-slate-500",
};

const NEXT_ACTIONS: Record<string, { to: string; label: string; cls: string }[]> = {
  hypothesis: [
    { to: "validated", label: "Validate", cls: "bg-sky-600 hover:bg-sky-700" },
    { to: "dismissed", label: "Dismiss", cls: "bg-slate-500 hover:bg-slate-600" },
  ],
  validated: [
    { to: "presented", label: "Mark presented", cls: "bg-indigo-600 hover:bg-indigo-700" },
    { to: "dismissed", label: "Dismiss", cls: "bg-slate-500 hover:bg-slate-600" },
  ],
  presented: [
    { to: "accepted", label: "Brand accepted", cls: "bg-emerald-600 hover:bg-emerald-700" },
    { to: "dismissed", label: "Dismiss", cls: "bg-slate-500 hover:bg-slate-600" },
  ],
  accepted: [],
  dismissed: [{ to: "hypothesis", label: "Reopen", cls: "bg-amber-600 hover:bg-amber-700" }],
};

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await requireAdmin();
  const { slug } = await params;
  const board = await loadBoard(slug);
  if (!board) notFound();
  const { brand, coverage, opps, evidence } = board;

  const active = opps.filter((o) => o.status !== "dismissed");
  const dismissed = opps.filter((o) => o.status === "dismissed");

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">{brand.name}</h1>
        <p className="text-muted text-sm mb-3">
          Opportunity board — evidence-backed theses synthesized from every
          channel. Nothing here is shown to the brand until you promote it.
        </p>
        <div className="flex gap-2 flex-wrap">
          {coverage.map((c) => (
            <span
              key={c.type}
              className="text-xs px-2 py-1 rounded-lg bg-gray-100 text-gray-700"
            >
              {c.type}: <span className="font-semibold">{c.n}</span>
              {c.avg ? ` · avg ${c.avg}` : ""}
            </span>
          ))}
          {(brand.domains ?? []).map((d) => (
            <span key={d} className="text-xs px-2 py-1 rounded-lg bg-gray-50 text-muted font-mono">
              {d}
            </span>
          ))}
        </div>
      </div>

      {opps.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-muted text-sm">
          No opportunities yet. Run:{" "}
          <code className="bg-gray-900 text-gray-100 px-2 py-0.5 rounded">
            node scripts/synthesize-opportunities.mjs --brand {slug} --apply
          </code>
        </div>
      ) : (
        <ul className="flex flex-col gap-4">
          {[...active, ...dismissed].map((o) => {
            const ev = evidence.get(o.id) ?? [];
            const stats = ev.filter((e) => e.kind === "stat");
            const exps = ev.filter((e) => e.kind === "experience" && e.auditSlug);
            const defs = ev.filter((e) => e.kind === "defect" && e.defectDescription);
            return (
              <li key={o.id} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${STATUS_CLS[o.status] ?? ""}`}
                    >
                      {o.status}
                    </span>
                    {o.category && (
                      <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-gray-100 text-gray-700">
                        {o.category}
                      </span>
                    )}
                    {o.confidence && (
                      <span className="text-[11px] text-muted">
                        confidence {Number(o.confidence).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                <h2 className="text-base font-semibold mb-1">{o.title}</h2>
                <p className="text-sm mb-2">{o.thesis}</p>
                {o.impact && (
                  <p className="text-xs mb-3 border-l-2 border-amber-300 pl-2">
                    <span className="text-muted">Impact — </span>
                    {o.impact}
                  </p>
                )}

                {stats.length > 0 && (
                  <ul className="text-xs text-muted list-disc ml-4 mb-2 space-y-0.5">
                    {stats.map((s, i) => (
                      <li key={i}>{s.note}</li>
                    ))}
                  </ul>
                )}

                {(exps.length > 0 || defs.length > 0) && (
                  <details className="text-xs mb-3">
                    <summary className="cursor-pointer text-muted">
                      Evidence ({exps.length + defs.length})
                    </summary>
                    <ul className="ml-4 mt-1 space-y-1">
                      {exps.map((e, i) => (
                        <li key={`e${i}`}>
                          <a
                            href={`/audits/${e.auditSlug}`}
                            className="text-sky-700 hover:underline font-mono break-all"
                          >
                            {e.auditSlug}
                          </a>
                        </li>
                      ))}
                      {defs.map((d, i) => (
                        <li key={`d${i}`} className="text-muted">
                          <span className="text-[10px] uppercase mr-1">
                            {d.defectUrgency} defect
                          </span>
                          {d.defectDescription?.slice(0, 140)}
                        </li>
                      ))}
                    </ul>
                  </details>
                )}

                {o.reviewNote && (
                  <p className="text-[11px] text-muted mb-2">
                    Note: {o.reviewNote} — {o.reviewedBy}
                  </p>
                )}

                {(NEXT_ACTIONS[o.status] ?? []).length > 0 && (
                  <form
                    action={setOpportunityStatusAction}
                    className="flex gap-2 items-center flex-wrap border-t border-gray-100 pt-3"
                  >
                    <input type="hidden" name="id" value={o.id} />
                    <input
                      name="note"
                      placeholder="Note (optional)"
                      className="flex-1 min-w-[160px] text-xs border border-gray-200 rounded-lg px-2 py-1.5"
                    />
                    {NEXT_ACTIONS[o.status].map((a) => (
                      <button
                        key={a.to}
                        type="submit"
                        name="to"
                        value={a.to}
                        className={`px-3 py-1.5 text-white rounded-lg text-xs font-medium ${a.cls}`}
                      >
                        {a.label}
                      </button>
                    ))}
                  </form>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
