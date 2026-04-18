import { completeSignIn } from "./actions";

export const dynamic = "force-dynamic";

type Search = { [key: string]: string | string[] | undefined };

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const sp = await searchParams;
  const token = typeof sp.token === "string" ? sp.token : "";
  const email = typeof sp.email === "string" ? sp.email : "";

  const valid = token.length > 0 && email.length > 0;

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white border border-gray-200 rounded-[20px] p-10 max-w-[380px] w-[90%] text-center shadow-sm">
        <h2 className="mt-0 mb-2 text-ink">Experience Intelligence</h2>
        {valid ? (
          <>
            <p className="text-muted text-sm mb-5">
              Click to finish signing in as{" "}
              <span className="text-ink font-medium">{email}</span>.
            </p>
            <form action={completeSignIn}>
              <input type="hidden" name="token" value={token} />
              <input type="hidden" name="email" value={email} />
              <button
                type="submit"
                className="w-full py-2.5 bg-accent text-white border-none rounded-xl text-[15px] cursor-pointer"
              >
                Sign in
              </button>
            </form>
            <p className="text-xs text-muted mt-4">
              Links expire after 10 minutes and can only be used once.
            </p>
          </>
        ) : (
          <>
            <p className="text-muted text-sm mb-5">
              This link is missing information. Please request a new sign-in
              link.
            </p>
            <a
              href="/login"
              className="inline-block w-full py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold no-underline"
            >
              Back to sign in
            </a>
          </>
        )}
      </div>
    </div>
  );
}
