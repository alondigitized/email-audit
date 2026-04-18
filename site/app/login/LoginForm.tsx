"use client";

import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { requestMagicLink, type SigninResult } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-2.5 bg-accent text-white border-none rounded-xl text-[15px] cursor-pointer disabled:opacity-50"
    >
      {pending ? "Sending..." : "Send sign-in link"}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useActionState<SigninResult | null, FormData>(
    requestMagicLink,
    null
  );
  const router = useRouter();

  useEffect(() => {
    if (state?.ok) {
      router.replace("/login?sent=1");
    }
  }, [state, router]);

  return (
    <form action={formAction}>
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        required
        autoComplete="email"
        autoFocus
        className="w-full py-2.5 px-3.5 border border-gray-200 rounded-xl text-[15px] mb-3 outline-none"
      />
      <SubmitButton />
    </form>
  );
}
