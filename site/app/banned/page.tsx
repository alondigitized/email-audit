export const dynamic = "force-dynamic";
export const metadata = { title: "Account closed · etell" };

export default function BannedPage() {
  return (
    <div className="max-w-xl mx-auto py-20 text-center">
      <h1 className="text-3xl font-bold mb-3">This account is closed.</h1>
      <p className="text-muted text-sm max-w-sm mx-auto mb-8">
        If you think this is a mistake, email{" "}
        <a className="underline" href="mailto:alon@etell.app">
          alon@etell.app
        </a>{" "}
        and we&apos;ll take a look.
      </p>
      <a href="/api/auth/signout" className="text-xs underline text-muted">
        Sign out
      </a>
    </div>
  );
}
