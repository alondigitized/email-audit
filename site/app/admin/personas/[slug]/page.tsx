import Link from "next/link";
import { notFound } from "next/navigation";
import { desc, eq } from "drizzle-orm";
import { requireAdmin } from "@/lib/dal";
import { getPersonaBySlug, personaColor } from "@/lib/personas-db";
import {
  db,
  reactions,
  experiences,
  personaTemplates,
} from "@/lib/db/client";
import { PersonaForm } from "../PersonaForm";
import { ChecklistSection } from "../ChecklistSection";
import {
  upsertPersonaAndRedirect,
  deletePersonaAndRedirect,
  promotePersonaToTemplateAction,
} from "../actions";

export const dynamic = "force-dynamic";

type Search = { [key: string]: string | string[] | undefined };

export default async function EditPersonaPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Search>;
}) {
  await requireAdmin();
  const { slug } = await params;
  const sp = await searchParams;
  const persona = await getPersonaBySlug(slug);
  if (!persona) notFound();

  const error = typeof sp.error === "string" ? sp.error : undefined;
  const saved = sp.saved === "1";
  const color = personaColor(persona.slug, persona.profile);

  // Recent audits for the status panel — last 5, either email or site.
  const recentAudits = await db
    .select({
      slug: reactions.slug,
      type: experiences.type,
      timestamp: experiences.receivedAt,
      score: reactions.score,
    })
    .from(reactions)
    .innerJoin(experiences, eq(experiences.id, reactions.experienceId))
    .where(eq(reactions.personaSlug, persona.slug))
    .orderBy(desc(experiences.receivedAt))
    .limit(5);

  // Template state. If a row exists in persona_template at the same slug,
  // this persona is curated platform IP. Otherwise, it's tenant-only.
  const [templateRow] = await db
    .select({
      slug: personaTemplates.slug,
      industry: personaTemplates.industry,
      isActive: personaTemplates.isActive,
    })
    .from(personaTemplates)
    .where(eq(personaTemplates.slug, persona.slug))
    .limit(1);
  const isTemplate = !!templateRow;

  return (
    <div className="mb-10 space-y-5">
      <div className="flex items-center gap-3 text-sm text-muted">
        <Link href="/admin/personas" className="underline">
          Personas
        </Link>
        <span>/</span>
        <span>{persona.name}</span>
      </div>

      <div className="flex items-center gap-3">
        <span
          className="inline-block w-4 h-4 rounded-full flex-shrink-0"
          style={{ backgroundColor: color }}
          aria-hidden
        />
        <h1 className="text-2xl font-bold">{persona.name}</h1>
      </div>

      <StatusPanel
        slug={persona.slug}
        lastStatus={persona.lastStatus}
        recentAudits={recentAudits.map((a) => ({
          slug: a.slug,
          type: (a.type ?? "email") as "email" | "site",
          timestamp: a.timestamp,
          score: a.score ?? null,
        }))}
      />

      <PersonaForm
        mode="edit"
        action={upsertPersonaAndRedirect}
        slug={persona.slug}
        name={persona.name}
        short={persona.short}
        profile={persona.profile}
        lastStatus={persona.lastStatus}
        kind={persona.kind}
        industry={persona.industry}
        error={error}
        saved={saved}
      />

      {persona.profile && (
        <ChecklistSection slug={persona.slug} profile={persona.profile} />
      )}

      <TemplatePanel
        slug={persona.slug}
        isTemplate={isTemplate}
        industry={templateRow?.industry ?? null}
        templateActive={templateRow?.isActive ?? null}
      />

      <section className="bg-white border border-rose-200 rounded-2xl p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-rose-800 uppercase tracking-wide mb-1">
          Danger zone
        </h2>
        <p className="text-xs text-muted mb-3">
          Delete this persona. Blocked if any audits still reference the slug.
        </p>
        <form action={deletePersonaAndRedirect}>
          <input type="hidden" name="slug" value={persona.slug} />
          <button
            type="submit"
            className="text-sm font-semibold px-3 py-1.5 rounded-xl border border-rose-300 text-rose-800 hover:bg-rose-50"
          >
            Delete persona
          </button>
        </form>
      </section>
    </div>
  );
}

// ─── Template panel ────────────────────────────────────────────────────────
//
// Surfaces whether this persona is also a curated platform template, and
// offers a one-click "promote" form when it isn't. Promotion lifts the
// persona's profile into persona_template + stamps template_slug = own
// slug (the Walker self-reference pattern). After promotion, future tenant
// signups in this industry can pick this persona from the wizard.

function TemplatePanel({
  slug,
  isTemplate,
  industry,
  templateActive,
}: {
  slug: string;
  isTemplate: boolean;
  industry: string | null;
  templateActive: boolean | null;
}) {
  if (isTemplate) {
    return (
      <section className="bg-white border border-emerald-200 rounded-2xl p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-emerald-800 uppercase tracking-wide mb-1">
          Template
        </h2>
        <p className="text-sm">
          This persona is a curated platform template
          {industry && (
            <>
              {" "}
              under industry{" "}
              <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                {industry}
              </code>
            </>
          )}
          .{" "}
          {templateActive
            ? "Tenants can fork it from /onboarding."
            : "Hidden from the wizard picker (existing forks unaffected)."}
        </p>
        <div className="mt-3 text-xs">
          <Link
            href={`/admin/templates/${slug}`}
            className="underline text-sky-700 hover:text-sky-900"
          >
            Open template detail →
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-white border border-sky-200 rounded-2xl p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-sky-800 uppercase tracking-wide mb-1">
        Promote to template
      </h2>
      <p className="text-xs text-muted mb-3">
        Lift this persona into the platform-level template library so future
        tenants can fork it. The persona row stays put; reads keep working.
      </p>
      <form
        action={promotePersonaToTemplateAction}
        className="flex items-end gap-2 flex-wrap"
      >
        <input type="hidden" name="slug" value={slug} />
        <div>
          <label
            htmlFor={`industry-${slug}`}
            className="block text-xs uppercase tracking-wide text-muted mb-1"
          >
            Industry tag
          </label>
          <input
            id={`industry-${slug}`}
            name="industry"
            placeholder="footwear"
            required
            pattern="[a-z][a-z0-9-]*"
            className="py-1.5 px-3 border border-gray-200 rounded-lg text-sm font-mono"
          />
        </div>
        <button
          type="submit"
          className="text-sm font-semibold px-3 py-1.5 rounded-xl bg-sky-600 text-white"
        >
          Promote
        </button>
      </form>
    </section>
  );
}

// ─── Status panel ──────────────────────────────────────────────────────────
//
// Quick visual summary of whether this persona is alive and well. Pulls
// from persona.last_status (written by daemons + onboarding script) plus
// the most recent audits. Fills the "did Saturday's run pass?" gap so
// you don't have to grep logs.

function StatusPanel({
  slug,
  lastStatus,
  recentAudits,
}: {
  slug: string;
  lastStatus: { last_audit_at?: string | null; last_cookies_at?: string | null; url_validation?: { at: string; results: Array<{ step_id: string; url: string; status: number | "error" }> } | null } | null;
  recentAudits: Array<{
    slug: string;
    type: "email" | "site";
    timestamp: Date;
    score: string | null;
  }>;
}) {
  const cookies = lastStatus?.last_cookies_at ?? null;
  const cookiesDays = cookies
    ? Math.floor((Date.now() - new Date(cookies).getTime()) / 86_400_000)
    : null;
  const cookiesCls =
    cookiesDays === null
      ? "text-rose-700"
      : cookiesDays > 30
        ? "text-rose-700"
        : cookiesDays > 14
          ? "text-amber-700"
          : "text-emerald-700";

  const validation = lastStatus?.url_validation ?? null;
  const bad = (validation?.results ?? []).filter(
    (r) =>
      r.status === "error" ||
      (typeof r.status === "number" && r.status >= 400)
  );

  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      <h2 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
        Status
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <div className="text-xs text-muted uppercase tracking-wide mb-1">
            Recent audits
          </div>
          {recentAudits.length === 0 ? (
            <div className="text-muted">None yet.</div>
          ) : (
            <ul className="space-y-1">
              {recentAudits.map((a) => (
                <li key={a.slug} className="flex items-center gap-2 text-[13px]">
                  <span
                    className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold border ${
                      a.type === "site"
                        ? "bg-sky-50 text-sky-800 border-sky-200"
                        : "bg-gray-100 text-gray-700 border-gray-200"
                    }`}
                  >
                    {a.type}
                  </span>
                  <span className="tabular-nums text-muted w-14">
                    {a.score ?? "—"}
                  </span>
                  <Link
                    href={`/audits/${a.slug}`}
                    className="text-sky-700 hover:text-sky-900 underline truncate"
                  >
                    {a.slug}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <div className="text-xs text-muted uppercase tracking-wide mb-1">
            Cookies
          </div>
          <div className={`text-[13px] ${cookiesCls}`}>
            {cookies
              ? cookiesDays === 0
                ? "refreshed today"
                : cookiesDays === 1
                  ? "refreshed 1 day ago"
                  : `refreshed ${cookiesDays} days ago`
              : "never captured"}
          </div>
          <div className="text-[11px] text-muted mt-1">
            Re-capture via <code className="px-1 rounded bg-gray-100">node save-cookies.mjs --persona {slug}</code> on laptop.
          </div>
        </div>
        <div>
          <div className="text-xs text-muted uppercase tracking-wide mb-1">
            URL validation
          </div>
          {validation ? (
            <>
              <div
                className={`text-[13px] ${bad.length > 0 ? "text-rose-700" : "text-emerald-700"}`}
              >
                {bad.length > 0
                  ? `${bad.length} URL${bad.length === 1 ? "" : "s"} failing`
                  : "all URLs 2xx/3xx"}
              </div>
              <div className="text-[11px] text-muted mt-1">
                Last checked {new Date(validation.at).toLocaleString()}
              </div>
            </>
          ) : (
            <div className="text-[13px] text-muted">Not checked yet.</div>
          )}
        </div>
      </div>
    </section>
  );
}
