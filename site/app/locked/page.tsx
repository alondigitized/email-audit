import { redirect } from "next/navigation";
import { requireUser } from "@/lib/dal";
import { getTenantState, countAuditsSince } from "@/lib/tenant";

export const dynamic = "force-dynamic";
export const metadata = { title: "Trial ended · etell" };

function fmtDate(d: Date): string {
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function LockedPage() {
  const user = await requireUser();
  if (!user.tenantId) redirect("/login");
  const state = await getTenantState(user.tenantId, user.isAdmin);
  if (!state) redirect("/login");
  if (!state.locked) redirect("/chat");

  const auditsSince =
    state.expiresAt !== null
      ? await countAuditsSince(state.id, state.expiresAt)
      : 0;

  return (
    <div className="max-w-xl mx-auto py-16 text-center">
      <div className="inline-block mb-6 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-medium tracking-wide uppercase">
        Trial ended
      </div>
      <h1 className="text-3xl font-bold mb-3">
        Your free window closed{" "}
        {state.expiresAt ? `on ${fmtDate(state.expiresAt)}` : ""}.
      </h1>
      <p className="text-muted text-base mb-8">
        We kept your persona running while you were away.
        <br />
        <strong>{auditsSince}</strong> new audit
        {auditsSince === 1 ? "" : "s"} have landed since the lock — your brain
        kept getting smarter.
      </p>
      <div className="flex justify-center gap-3 mb-10">
        {state.canRefer && (
          <a
            href="/refer"
            className="px-5 py-2.5 bg-accent text-white font-semibold rounded-xl text-[15px]"
          >
            Refer a coworker (+7 days)
          </a>
        )}
        <a
          href="/upgrade"
          className={`px-5 py-2.5 font-semibold rounded-xl text-[15px] ${
            state.canRefer
              ? "border border-gray-300 text-ink"
              : "bg-accent text-white"
          }`}
        >
          Upgrade to Pro
        </a>
      </div>
      {!state.canRefer && (
        <p className="text-xs text-muted mb-6">
          You&apos;ve maxed out referrals. Upgrade to keep building.
        </p>
      )}
      <a href="/api/auth/signout" className="text-xs text-muted underline">
        Sign out
      </a>
    </div>
  );
}
