import { redirect } from "next/navigation";
import { loadOnboardingState } from "@/lib/onboarding/state";
import { PersonaProposalSchema } from "@/lib/onboarding/research-prompt";
import { z } from "zod";
import { commitPersonaAction } from "../actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit your persona · etell" };

type Search = { [key: string]: string | string[] | undefined };

function suggestedSlug(name: string): string {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 24);
  return base || "persona";
}

export default async function EditPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const state = await loadOnboardingState();
  if (state.personaSlug) redirect("/chat");
  if (!state.tenant.competitorTarget) redirect("/onboarding/picker");
  const r = state.tenant.research;
  if (!r?.personas || r.recommended_persona_idx === undefined) {
    redirect("/onboarding/picker");
  }

  const personas = z.array(PersonaProposalSchema).safeParse(r.personas);
  if (!personas.success) redirect("/onboarding?error=corrupt");
  const chosen = personas.data[r.recommended_persona_idx];
  const competitor = state.tenant.competitorTarget;

  const sp = await searchParams;
  const error = typeof sp?.error === "string" ? sp.error : null;

  const initialSlug = suggestedSlug(chosen.name);

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="mb-3 px-3 py-1 inline-block rounded-full bg-sky-50 text-sky-700 text-xs font-medium tracking-wide uppercase">
        Step 3 of 3
      </div>
      <h1 className="text-3xl font-bold mb-2">Make {chosen.name} yours</h1>
      <p className="text-muted text-sm mb-2">
        Tweak anything you want. We&apos;ll create their inbox and start their
        brain after you submit.
      </p>
      <p className="text-xs text-muted mb-6">
        Benchmarking against <strong>{competitor.name}</strong> ({competitor.domain})
      </p>

      {error && (
        <div className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-4">
          {error}
        </div>
      )}

      <form action={commitPersonaAction} className="space-y-5 bg-white border border-gray-200 rounded-2xl p-6">
        <Field label="URL handle (slug)" htmlFor="slug" hint="lowercase letters, digits, hyphens">
          <input
            id="slug"
            name="slug"
            defaultValue={initialSlug}
            required
            pattern="[a-z][a-z0-9-]{1,39}"
            className="w-full py-2 px-3 border border-gray-200 rounded-lg text-sm font-mono"
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Name" htmlFor="name">
            <input
              id="name"
              name="name"
              defaultValue={chosen.name}
              required
              className="w-full py-2 px-3 border border-gray-200 rounded-lg text-sm"
            />
          </Field>
          <Field label="Age" htmlFor="age">
            <input
              id="age"
              name="age"
              type="number"
              defaultValue={chosen.age}
              required
              min={18}
              max={95}
              className="w-full py-2 px-3 border border-gray-200 rounded-lg text-sm"
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Generation" htmlFor="generation">
            <input
              id="generation"
              name="generation"
              defaultValue={chosen.generation}
              required
              className="w-full py-2 px-3 border border-gray-200 rounded-lg text-sm"
            />
          </Field>
          <Field label="Gender" htmlFor="gender">
            <input
              id="gender"
              name="gender"
              defaultValue={chosen.gender}
              required
              className="w-full py-2 px-3 border border-gray-200 rounded-lg text-sm"
            />
          </Field>
        </div>

        <Field label="Style — how they look / present" htmlFor="style">
          <textarea
            id="style"
            name="style"
            defaultValue={chosen.style}
            required
            rows={2}
            className="w-full py-2 px-3 border border-gray-200 rounded-lg text-sm"
          />
        </Field>

        <Field label="Shopping habits" htmlFor="shopping_habits">
          <textarea
            id="shopping_habits"
            name="shopping_habits"
            defaultValue={chosen.shopping_habits}
            required
            rows={3}
            className="w-full py-2 px-3 border border-gray-200 rounded-lg text-sm"
          />
        </Field>

        <Field label="Tech comfort" htmlFor="tech_comfort">
          <input
            id="tech_comfort"
            name="tech_comfort"
            defaultValue={chosen.tech_comfort}
            required
            className="w-full py-2 px-3 border border-gray-200 rounded-lg text-sm"
          />
        </Field>

        <Field
          label="Focus areas (comma-separated)"
          htmlFor="focus_areas"
          hint="What this persona actively cares about"
        >
          <input
            id="focus_areas"
            name="focus_areas"
            defaultValue={chosen.focus_areas.join(", ")}
            required
            className="w-full py-2 px-3 border border-gray-200 rounded-lg text-sm"
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field
            label="Default search"
            htmlFor="search_term"
            hint="What they'd type into the brand's search bar"
          >
            <input
              id="search_term"
              name="search_term"
              defaultValue={chosen.search_term}
              required
              className="w-full py-2 px-3 border border-gray-200 rounded-lg text-sm"
            />
          </Field>
          <Field
            label="Category path"
            htmlFor="category_path"
            hint="Slash-separated nav, e.g. women/running"
          >
            <input
              id="category_path"
              name="category_path"
              defaultValue={chosen.category_path.join("/")}
              required
              className="w-full py-2 px-3 border border-gray-200 rounded-lg text-sm font-mono"
            />
          </Field>
        </div>

        <div className="pt-3">
          <button
            type="submit"
            className="px-5 py-2.5 bg-accent text-white font-semibold rounded-xl text-[15px]"
          >
            Create my persona →
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium mb-1">
        {label}
      </label>
      {hint && <div className="text-xs text-muted mb-1">{hint}</div>}
      {children}
    </div>
  );
}
