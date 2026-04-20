import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import { getPersonaBySlug, personaColor } from "@/lib/personas-db";
import { PersonaForm } from "../PersonaForm";
import { ChecklistSection } from "../ChecklistSection";
import {
  upsertPersonaAndRedirect,
  deletePersonaAndRedirect,
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

      <PersonaForm
        mode="edit"
        action={upsertPersonaAndRedirect}
        slug={persona.slug}
        name={persona.name}
        short={persona.short}
        profile={persona.profile}
        error={error}
        saved={saved}
      />

      {persona.profile && (
        <ChecklistSection slug={persona.slug} profile={persona.profile} />
      )}

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
