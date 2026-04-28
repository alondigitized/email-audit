"use client";

import { useFormStatus } from "react-dom";
import { useActionState, useState } from "react";
import { signupAction, type SignupResult } from "./actions";

function SubmitButton({ disabled }: { disabled?: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className="w-full py-2.5 bg-accent text-white border-none rounded-xl text-[15px] cursor-pointer disabled:opacity-50"
    >
      {pending ? "Submitting…" : "Get on the waitlist"}
    </button>
  );
}

// Hardcoded snapshot of the server-side blocklist — same set, but lighter
// (just the popular ones) for instant client-side feedback. Server enforces
// the full list, so any miss here is caught on submit.
const FREE_DOMAIN_HINTS = new Set([
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "protonmail.com",
  "proton.me",
  "aol.com",
]);

function clientCheck(email: string): string | null {
  const at = email.lastIndexOf("@");
  if (at < 0 || at === email.length - 1) return null; // let server complain
  const domain = email.slice(at + 1).toLowerCase().trim();
  if (FREE_DOMAIN_HINTS.has(domain)) {
    return "Use your company email — free providers (gmail, etc.) aren't supported.";
  }
  return null;
}

export default function SignupForm({ refCode }: { refCode: string | null }) {
  const [state, formAction] = useActionState<SignupResult | null, FormData>(
    signupAction,
    null
  );
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const clientError = clientCheck(email);

  if (state?.ok) {
    return (
      <div className="text-sm text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-3">
        <strong>You&apos;re on the list.</strong> We&apos;ll send a sign-in link
        the moment we approve you. Check your inbox.
      </div>
    );
  }

  const errorCopy =
    (state && !state.ok ? state.error : null) ?? clientError ?? null;

  return (
    <form action={formAction}>
      {errorCopy && (
        <div className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-3">
          {errorCopy}
        </div>
      )}
      {refCode ? <input type="hidden" name="ref" value={refCode} /> : null}
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        required
        autoComplete="email"
        autoFocus
        className="w-full py-2.5 px-3.5 border border-gray-200 rounded-xl text-[15px] mb-3 outline-none"
      />
      <label className="flex items-start gap-2 text-xs text-muted mb-3 cursor-pointer">
        <input
          type="checkbox"
          name="agreed_terms"
          value="1"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          required
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-accent focus:ring-2 focus:ring-accent"
        />
        <span>
          I agree to the{" "}
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-ink"
          >
            Terms of Use
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-ink"
          >
            Privacy Policy
          </a>
          .
        </span>
      </label>
      <SubmitButton disabled={!agreed} />
    </form>
  );
}
