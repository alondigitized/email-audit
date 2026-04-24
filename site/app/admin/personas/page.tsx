import Link from "next/link";
import { sql as dsql } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { getAllPersonas, personaColor } from "@/lib/personas-db";
import { db, audits } from "@/lib/db/client";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Personas · Admin · etell",
};

async function getAuditCountsBySlug(): Promise<Map<string, number>> {
  const rows = await db
    .select({
      persona: audits.persona,
      n: dsql<number>`count(*)::int`,
    })
    .from(audits)
    .groupBy(audits.persona);
  const out = new Map<string, number>();
  for (const r of rows) out.set(r.persona, Number(r.n));
  return out;
}

function daysAgo(iso: string | null | undefined): number | null {
  if (!iso) return null;
  const t = new Date(iso).getTime();
  if (!Number.isFinite(t)) return null;
  return Math.floor((Date.now() - t) / 86_400_000);
}

function relativeLabel(d: number | null): string {
  if (d === null) return "—";
  if (d <= 0) return "today";
  if (d === 1) return "1d ago";
  return `${d}d ago`;
}

export default async function AdminPersonasPage() {
  await requireAdmin();
  const [personas, auditCounts] = await Promise.all([
    getAllPersonas({ includeDrafts: true }),
    getAuditCountsBySlug(),
  ]);

  return (
    <div className="mb-10">
      <div className="flex items-baseline justify-between mb-5">
        <div>
          <h1 className="text-2xl font-bold mb-1">Personas</h1>
          <p className="text-muted text-sm">
            Manage who etell audits emails and sites as.
          </p>
        </div>
        <Link
          href="/admin/personas/new"
          className="bg-gray-900 text-white text-sm font-semibold px-3 py-2 rounded-xl no-underline whitespace-nowrap"
        >
          + New persona
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200 text-muted text-xs uppercase tracking-wide">
            <tr>
              <th className="text-left px-4 py-2 font-semibold">Persona</th>
              <th className="text-left px-4 py-2 font-semibold hidden sm:table-cell">
                Age · Gen
              </th>
              <th className="text-left px-4 py-2 font-semibold hidden lg:table-cell">
                Inbox
              </th>
              <th className="text-left px-4 py-2 font-semibold">Last audit</th>
              <th className="text-left px-4 py-2 font-semibold hidden md:table-cell">
                Cookies
              </th>
              <th className="text-left px-4 py-2 font-semibold">URLs</th>
              <th className="text-right px-4 py-2 font-semibold">Audits</th>
              <th className="px-4 py-2" />
            </tr>
          </thead>
          <tbody>
            {personas.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-muted">
                  No personas yet.{" "}
                  <Link href="/admin/personas/new" className="underline">
                    Create one
                  </Link>
                  .
                </td>
              </tr>
            ) : (
              personas.map((p) => {
                const color = personaColor(p.slug, p.profile);
                const count = auditCounts.get(p.slug) ?? 0;
                const inbox = p.profile?.agentmail.inbox_address ?? null;
                const age = p.profile?.identity.age ?? null;
                const gen = p.profile?.identity.generation ?? null;

                const s = p.lastStatus;
                const lastAuditDays = daysAgo(s?.last_audit_at ?? null);
                const cookiesDays = daysAgo(s?.last_cookies_at ?? null);
                const cookiesClass =
                  cookiesDays === null
                    ? "text-rose-700"
                    : cookiesDays > 30
                      ? "text-rose-700"
                      : cookiesDays > 14
                        ? "text-amber-700"
                        : "text-emerald-700";
                const urlResults = s?.url_validation?.results ?? [];
                const urlBad = urlResults.filter(
                  (r) =>
                    r.status === "error" ||
                    (typeof r.status === "number" && r.status >= 400)
                ).length;
                const urlOk = urlResults.filter(
                  (r) =>
                    typeof r.status === "number" &&
                    r.status >= 200 &&
                    r.status < 400
                ).length;
                const urlBadge =
                  urlResults.length === 0
                    ? { label: "—", cls: "text-muted" }
                    : urlBad > 0
                      ? {
                          label: `${urlBad} bad`,
                          cls: "bg-rose-50 text-rose-800 border-rose-200 border px-1.5 py-0.5 rounded text-[11px] font-semibold",
                        }
                      : {
                          label: `${urlOk} ok`,
                          cls: "bg-emerald-50 text-emerald-800 border-emerald-200 border px-1.5 py-0.5 rounded text-[11px] font-semibold",
                        };

                return (
                  <tr
                    key={p.slug}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="inline-block w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: color }}
                          aria-hidden
                        />
                        <div className="min-w-0">
                          <div className="font-semibold truncate flex items-center gap-2">
                            <span>{p.name}</span>
                            {p.profile?.status === "draft" && (
                              <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                                DRAFT
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-muted truncate">
                            {p.slug}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell text-muted">
                      {age ? `${age} · ${gen ?? "—"}` : "—"}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell text-muted truncate max-w-[180px]">
                      {inbox ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-muted">
                      {s?.last_audit_at ? (
                        <div>
                          <div>{relativeLabel(lastAuditDays)}</div>
                          {s.last_audit_score && (
                            <div className="text-[11px]">
                              score {s.last_audit_score}
                            </div>
                          )}
                        </div>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td
                      className={`px-4 py-3 hidden md:table-cell ${cookiesClass}`}
                    >
                      {relativeLabel(cookiesDays)}
                    </td>
                    <td className="px-4 py-3">
                      <span className={urlBadge.cls}>{urlBadge.label}</span>
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums">
                      {count.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link
                        href={
                          p.profile?.status === "draft"
                            ? `/admin/personas/new/${p.slug}/identity`
                            : `/admin/personas/${p.slug}`
                        }
                        className="text-sky-700 hover:text-sky-900 underline text-xs font-semibold"
                      >
                        {p.profile?.status === "draft" ? "Resume →" : "Edit"}
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
