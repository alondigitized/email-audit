import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";
import { currentUser } from "@/lib/dal";

type Search = { [key: string]: string | string[] | undefined };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const sp = await searchParams;
  const sent = sp?.sent === "1";
  const error = typeof sp?.error === "string" ? sp.error : null;

  // If already signed in, don't show the login form — punt to the app.
  const user = await currentUser();
  if (user) redirect("/");

  // Map Auth.js error codes to friendlier copy. "Verification" is what fires
  // when a magic link is clicked twice (single-use by design) or after it
  // expires (10 min).
  const errorCopy = (() => {
    if (!error) return null;
    if (error === "Verification") {
      return "That sign-in link was already used or has expired. Magic links can only be clicked once. Request a new one below.";
    }
    if (error === "AccessDenied") {
      return "That email isn't on the invite list. Reach out if you think that's wrong.";
    }
    return "Something went wrong signing you in. Try again.";
  })();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white border border-gray-200 rounded-[20px] p-10 max-w-[360px] w-[90%] text-center shadow-sm">
        <h2 className="mt-0 mb-2 text-ink">Experience Intelligence</h2>
        {sent ? (
          <>
            <p className="text-muted text-sm mb-5">
              If that email is on the allowlist, a sign-in link is on its way.
              Check your inbox.
            </p>
            <a
              href="/login"
              className="text-accent text-sm underline"
            >
              Send another link
            </a>
          </>
        ) : (
          <>
            {errorCopy && (
              <div className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-4">
                {errorCopy}
              </div>
            )}
            <p className="text-muted text-sm mb-5">
              Enter your email to get a sign-in link.
            </p>
            <LoginForm />
          </>
        )}
      </div>
    </div>
  );
}
