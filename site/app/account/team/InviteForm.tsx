"use client";

import { useActionState } from "react";
import { inviteTeammateAction, type ActionResult } from "./actions";

const initialState: ActionResult | null = null;

export function InviteForm() {
  const [state, formAction, pending] = useActionState<ActionResult | null, FormData>(
    async (_prev, fd) => inviteTeammateAction(fd),
    initialState
  );
  return (
    <form action={formAction} className="flex flex-col sm:flex-row gap-2 mb-2">
      <input
        type="email"
        name="email"
        required
        placeholder="teammate@yourcompany.com"
        className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-gray-400"
      />
      <button
        type="submit"
        disabled={pending}
        className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 disabled:opacity-50"
      >
        {pending ? "Inviting…" : "Invite"}
      </button>
      {state && !state.ok && (
        <span className="text-xs text-rose-700 self-center">{state.error}</span>
      )}
      {state?.ok && (
        <span className="text-xs text-emerald-700 self-center">Invite sent.</span>
      )}
    </form>
  );
}
