import { AutoSignInForm } from "./AutoSignInForm";

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
      <div className="bg-white border border-gray-200 rounded-[20px] p-8 max-w-[380px] w-[90%] text-center shadow-sm">
        {valid ? (
          <>
            <p className="text-muted text-sm mb-4">Signing you in…</p>
            <AutoSignInForm token={token} email={email} />
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
