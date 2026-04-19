"use client";

import { useEffect, useRef } from "react";
import { completeSignIn } from "./actions";

export function AutoSignInForm({
  token,
  email,
}: {
  token: string;
  email: string;
}) {
  const formRef = useRef<HTMLFormElement | null>(null);

  // JS auto-submit: a real user's browser runs this and signs in instantly;
  // email link prefetchers (Safe Links, Gmail scanner, antivirus gateways)
  // don't execute JS, so the token stays unused until the human clicks.
  useEffect(() => {
    formRef.current?.requestSubmit();
  }, []);

  return (
    <form action={completeSignIn} ref={formRef}>
      <input type="hidden" name="token" value={token} />
      <input type="hidden" name="email" value={email} />
      <button
        type="submit"
        className="w-full py-2.5 bg-accent text-white border-none rounded-xl text-[15px] cursor-pointer"
      >
        Sign in as {email}
      </button>
    </form>
  );
}
