import LoginForm from "./LoginForm";

type Search = { [key: string]: string | string[] | undefined };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const sp = await searchParams;
  const sent = sp?.sent === "1";

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white border border-gray-200 rounded-[20px] p-10 max-w-[360px] w-[90%] text-center shadow-sm">
        <h2 className="mt-0 mb-2 text-ink">Experience Review</h2>
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
