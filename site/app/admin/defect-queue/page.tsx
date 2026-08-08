import { desc, inArray } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { db, defects } from "@/lib/db/client";
import type {
  DefectEvidence,
  DefectVerification,
  DefectAdjudication,
  DefectElement,
} from "@/lib/db/schema";
import { signGetUrl, r2IsConfigured } from "@/lib/storage/r2";
import {
  approveDefectAction,
  rejectDefectAction,
  suppressDefectAction,
  markSubmittedAction,
  unapproveDefectAction,
} from "./actions";
import { SubmissionPayload } from "./SubmissionPayload";

export const dynamic = "force-dynamic";
export const metadata = { title: "Defect queue · admin · etell" };

// Only these reach the reviewer. 'candidate' is shown read-only so you can
// see what the refutation pass is still chewing on; 'refuted' is hidden
// entirely — the whole point is that it never costs you attention.
const VISIBLE = ["verified", "approved", "candidate", "submitted"] as const;

type Row = typeof defects.$inferSelect & { evidenceUrls: string[] };

async function loadQueue(): Promise<Row[]> {
  const rows = await db
    .select()
    .from(defects)
    .where(inArray(defects.status, [...VISIBLE]))
    .orderBy(desc(defects.createdAt))
    .limit(200);

  const canSign = r2IsConfigured();
  return Promise.all(
    rows.map(async (r) => {
      const ev = (r.evidence ?? []) as DefectEvidence[];
      const evidenceUrls = canSign
        ? await Promise.all(
            ev.filter((e) => e?.r2Key).map((e) => signGetUrl(e.r2Key, 3600))
          )
        : [];
      return { ...r, evidenceUrls };
    })
  );
}

const URGENCY_CLS: Record<string, string> = {
  High: "bg-rose-100 text-rose-800",
  Medium: "bg-amber-100 text-amber-800",
  Low: "bg-slate-100 text-slate-700",
};

const URGENCY_RANK: Record<string, number> = { High: 0, Medium: 1, Low: 2 };

function DefectCard({ d }: { d: Row }) {
  const repro = (d.reproSteps ?? []) as string[];
  const v = d.verification as DefectVerification | null;
  const adj = d.adjudication as DefectAdjudication | null;
  const els = (d.affectedElements ?? []) as DefectElement[];

  return (
    <li className="bg-white border border-gray-200 rounded-2xl p-5">
      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span
              className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${
                URGENCY_CLS[d.urgency] ?? "bg-slate-100 text-slate-700"
              }`}
            >
              {d.urgency}
            </span>
            <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800">
              {d.area}
            </span>
            <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-gray-100 text-gray-700">
              {d.category}
            </span>
            {d.defectType && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-50 text-gray-600 border border-gray-200">
                {d.defectType}
              </span>
            )}
            <span className="font-mono text-[11px] text-muted">{d.personaSlug}</span>
          </div>
          <a
            href={d.url}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-sky-700 hover:underline break-all"
          >
            {d.url}
          </a>
        </div>
        <span className="shrink-0 text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
          {d.status}
        </span>
      </div>

      <p className="text-sm mb-3">{d.description}</p>

      {d.businessImpact && (
        <div className="text-xs mb-3 border-l-2 border-amber-300 pl-2">
          <span className="text-muted">Business impact — </span>
          {d.businessImpact}
        </div>
      )}

      {els.length > 0 && (
        <details className="text-xs mb-3" open={els.length <= 6}>
          <summary className="cursor-pointer text-muted">
            Affected elements ({els.length})
          </summary>
          <ol className="list-decimal ml-4 mt-1 space-y-1">
            {els.map((e, i) => (
              <li key={i} className="font-mono text-[11px] break-all">
                {e.selector && <span className="text-sky-800">{e.selector}</span>}
                {e.src && <span className="text-muted"> · {e.src}</span>}
                {e.location && <span className="text-muted"> · {e.location}</span>}
                {e.note && <span className="text-muted"> · {e.note}</span>}
              </li>
            ))}
          </ol>
        </details>
      )}

      {(d.expected || d.observed) && (
        <dl className="text-xs mb-3 space-y-1">
          {d.expected && (
            <div className="flex gap-2">
              <dt className="text-muted w-16 shrink-0">Expected</dt>
              <dd>{d.expected}</dd>
            </div>
          )}
          {d.observed && (
            <div className="flex gap-2">
              <dt className="text-muted w-16 shrink-0">Observed</dt>
              <dd>{d.observed}</dd>
            </div>
          )}
        </dl>
      )}

      {repro.length > 0 && (
        <ol className="text-xs text-muted list-decimal ml-4 mb-3 space-y-0.5">
          {repro.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      )}

      {v && (
        <p className="text-[11px] text-muted mb-1">
          Re-tested {v.runs}× · reproduced {v.reproduced}× ·{" "}
          <span className={v.verdict === "reproduced" ? "text-emerald-700" : ""}>
            {v.verdict}
          </span>
          {v.notes ? ` · ${v.notes}` : ""}
          {v.verdict === "unverifiable" && (
            <span className="text-amber-700">
              {" "}
              — no automated re-check exists for this claim; judge it yourself.
            </span>
          )}
        </p>
      )}

      {adj && (
        <p className="text-[11px] text-muted mb-3">
          Adjudicator: <span className="font-medium">{adj.verdict}</span> —{" "}
          {adj.reason}
          {adj.urgencySuggested && adj.urgencySuggested !== d.urgency
            ? ` (suggested ${adj.urgencySuggested})`
            : ""}
        </p>
      )}

      {d.evidenceUrls.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-3">
          {d.evidenceUrls.map((u, i) => (
            <a key={i} href={u} target="_blank" rel="noreferrer">
              {/* Signed R2 URLs expire and vary per request — next/image
                  would try to optimize a URL that's dead by cache time. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={u}
                alt={`evidence ${i + 1}`}
                className="h-28 w-auto rounded border border-gray-200"
              />
            </a>
          ))}
        </div>
      )}
      {d.evidenceUrls.length === 0 && (
        <p className="text-[11px] text-rose-700 mb-3">
          No evidence screenshot — the intake form requires one, so this cannot be filed as-is.
        </p>
      )}

      {d.status === "verified" && (
        <form action={approveDefectAction} className="border-t border-gray-100 pt-3 mt-1">
          <input type="hidden" name="defectId" value={d.id} />
          <label className="block text-[11px] text-muted mb-1">
            Description (edit before filing if the wording needs tightening)
          </label>
          <textarea
            name="description"
            defaultValue={d.description}
            rows={3}
            className="w-full text-xs border border-gray-200 rounded-lg p-2 mb-2"
          />
          <div className="flex gap-2 items-center flex-wrap">
            <select
              name="urgency"
              defaultValue={d.urgency}
              className="text-xs border border-gray-200 rounded-lg px-2 py-1.5"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <input
              name="reviewNote"
              placeholder="Review note (optional)"
              className="flex-1 min-w-[160px] text-xs border border-gray-200 rounded-lg px-2 py-1.5"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-medium hover:bg-emerald-700"
              disabled={d.evidenceUrls.length === 0}
            >
              Approve for filing
            </button>
            <button
              type="submit"
              formAction={rejectDefectAction}
              className="px-3 py-1.5 bg-rose-600 text-white rounded-lg text-xs font-medium hover:bg-rose-700"
            >
              Reject
            </button>
            <button
              type="submit"
              formAction={suppressDefectAction}
              className="px-3 py-1.5 bg-slate-600 text-white rounded-lg text-xs font-medium hover:bg-slate-700"
              title="Reject this and stop every future sweep re-filing the same class"
            >
              Suppress class
            </button>
          </div>
        </form>
      )}

      {d.status === "approved" && (
        <div className="border-t border-gray-100 pt-3 mt-1">
          <SubmissionPayload
            fields={{
              location: d.location,
              url: d.url,
              area: d.area,
              device: d.device ?? "",
              browser: d.browser ?? "",
              urgency: d.urgency,
              reporterEmail: d.reporterEmail ?? "",
              description: d.description,
              businessImpact: d.businessImpact,
              expected: d.expected,
              observed: d.observed,
              reproSteps: repro,
              elements: els,
            }}
          />
          <form action={markSubmittedAction} className="flex gap-2 items-center flex-wrap mt-3">
            <input type="hidden" name="defectId" value={d.id} />
            <input
              name="submissionRef"
              placeholder="Row / confirmation ref (optional)"
              className="flex-1 min-w-[160px] text-xs border border-gray-200 rounded-lg px-2 py-1.5"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-sky-600 text-white rounded-lg text-xs font-medium hover:bg-sky-700"
            >
              Mark filed
            </button>
            <button
              type="submit"
              formAction={unapproveDefectAction}
              className="px-3 py-1.5 bg-gray-200 text-gray-800 rounded-lg text-xs font-medium hover:bg-gray-300"
            >
              Send back
            </button>
          </form>
        </div>
      )}

      {d.status === "submitted" && d.submittedAt && (
        <p className="text-[11px] text-muted border-t border-gray-100 pt-3 mt-1">
          Filed {d.submittedAt.toISOString().slice(0, 16).replace("T", " ")}
          {d.submissionRef ? ` · ref ${d.submissionRef}` : ""}
        </p>
      )}

      {d.status === "candidate" && (
        <p className="text-[11px] text-muted border-t border-gray-100 pt-3 mt-1">
          Awaiting the refutation pass — not reviewable until it has been independently re-tested.
        </p>
      )}
    </li>
  );
}

function Section({
  title,
  hint,
  items,
}: {
  title: string;
  hint: string;
  items: Row[];
}) {
  if (items.length === 0) return null;
  return (
    <section className="mb-8">
      <h2 className="text-sm font-semibold mb-1">
        {title} <span className="text-muted font-normal">({items.length})</span>
      </h2>
      <p className="text-xs text-muted mb-3">{hint}</p>
      <ul className="flex flex-col gap-3">
        {items.map((d) => (
          <DefectCard key={d.id} d={d} />
        ))}
      </ul>
    </section>
  );
}

export default async function DefectQueuePage() {
  await requireAdmin();
  const rows = await loadQueue();

  const verified = rows
    .filter((r) => r.status === "verified")
    .sort(
      (a, b) => (URGENCY_RANK[a.urgency] ?? 9) - (URGENCY_RANK[b.urgency] ?? 9)
    );
  const approved = rows.filter((r) => r.status === "approved");
  const candidates = rows.filter((r) => r.status === "candidate");
  const submitted = rows.filter((r) => r.status === "submitted").slice(0, 20);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Defect queue</h1>
        <p className="text-muted text-sm">
          QA squad findings for skechers.com. Nothing is filed automatically —
          the{" "}
          <a
            href="https://app.smartsheet.com/b/form/019f866ae4c67ff897b2bbdfb7bd76b6"
            target="_blank"
            rel="noreferrer"
            className="text-sky-700 hover:underline"
          >
            See Something? SAY Something! form
          </a>{" "}
          is reCAPTCHA-protected and filed by hand. Approve here, then copy the
          payload into the form.
        </p>
      </div>

      {rows.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-muted text-sm">
          Queue is empty. Run a QA sweep to populate it.
        </div>
      ) : (
        <>
          <Section
            title="Ready to review"
            hint="Survived the refutation pass. Highest urgency first."
            items={verified}
          />
          <Section
            title="Approved — file these"
            hint="Copy each payload into the Smartsheet form, attach the evidence screenshot, then mark it filed."
            items={approved}
          />
          <Section
            title="Awaiting verification"
            hint="Found by a sweep, not yet independently re-tested."
            items={candidates}
          />
          <Section title="Recently filed" hint="Last 20." items={submitted} />
        </>
      )}
    </div>
  );
}
