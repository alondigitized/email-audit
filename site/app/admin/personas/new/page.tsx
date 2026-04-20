import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { PersonaForm } from "../PersonaForm";
import { createPersonaAndRedirect } from "../actions";

export const dynamic = "force-dynamic";

type Search = { [key: string]: string | string[] | undefined };

export default async function NewPersonaPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  await requireAdmin();
  const sp = await searchParams;
  const error = typeof sp.error === "string" ? sp.error : undefined;

  return (
    <div className="mb-10 space-y-5">
      <div className="flex items-center gap-3 text-sm text-muted">
        <Link href="/admin/personas" className="underline">
          Personas
        </Link>
        <span>/</span>
        <span>New</span>
      </div>
      <h1 className="text-2xl font-bold">Create a persona</h1>
      <p className="text-sm text-muted max-w-2xl">
        Fill out the identity and daemon config. Laptop-bound steps
        (retailer accounts, cookie capture, LaunchAgent install) show up as
        a checklist after you save.
      </p>
      <PersonaForm
        mode="create"
        action={createPersonaAndRedirect}
        error={error}
      />
    </div>
  );
}
