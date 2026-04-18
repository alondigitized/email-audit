"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { inviteUserAction, type ActionResult } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="py-2 px-4 bg-gray-900 text-white rounded-xl text-sm font-semibold disabled:opacity-50"
    >
      {pending ? "Inviting…" : "Invite"}
    </button>
  );
}

export function InviteForm({ personaSlugs }: { personaSlugs: string[] }) {
  const [state, formAction] = useActionState<ActionResult | null, FormData>(
    async (_prev, fd) => inviteUserAction(fd),
    null
  );

  return (
    <form action={formAction} className="flex flex-wrap gap-2 items-center">
      <input
        type="email"
        name="email"
        placeholder="email@example.com"
        required
        autoComplete="off"
        className="flex-1 min-w-[240px] py-2 px-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-gray-400"
      />
      <select
        name="persona"
        defaultValue=""
        className="py-2 px-3 border border-gray-200 rounded-xl text-sm bg-white"
      >
        <option value="">No persona</option>
        {personaSlugs.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <SubmitButton />
      {state && !state.ok && (
        <div className="w-full text-xs text-red-600">{state.error}</div>
      )}
      {state && state.ok && (
        <div className="w-full text-xs text-green-700">Invited.</div>
      )}
    </form>
  );
}
