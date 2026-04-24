import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createDraftAndRedirect } from "./wizard-actions";

export const dynamic = "force-dynamic";

type Search = { [key: string]: string | string[] | undefined };

export default async function NewPersonaWizardEntry({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  await requireAdmin();
  const sp = await searchParams;
  const error = typeof sp.error === "string" ? sp.error : undefined;

  return (
    <div className="mb-10 space-y-5 max-w-xl">
      <div className="flex items-center gap-3 text-sm text-muted">
        <Link href="/admin/personas" className="underline">
          Personas
        </Link>
        <span>/</span>
        <span>New</span>
      </div>
      <h1 className="text-2xl font-bold">Create a persona</h1>
      <p className="text-sm text-muted">
        Pick a slug to start. The wizard will walk you through identity,
        journey config, inbox provisioning, and the laptop handoff.
      </p>

      {error && (
        <div className="rounded-xl px-4 py-3 text-sm bg-rose-50 border border-rose-200 text-rose-800">
          {error}
        </div>
      )}

      <form action={createDraftAndRedirect} className="space-y-3">
        <label className="block">
          <span className="text-xs font-semibold text-muted">Slug</span>
          <input
            type="text"
            name="slug"
            required
            pattern="[a-z0-9\-]{2,64}"
            placeholder="e.g. testbot"
            autoFocus
            className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-500"
          />
          <span className="block text-[11px] font-normal text-muted mt-1">
            Lowercase letters, digits, and hyphens. Becomes the URL and the
            AgentMail inbox local-part. Can&apos;t change after create.
          </span>
        </label>
        <div className="flex gap-3 pt-1">
          <button
            type="submit"
            className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-xl"
          >
            Start wizard →
          </button>
          <Link
            href="/admin/personas"
            className="text-sm text-muted hover:text-ink underline self-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
