import { redirect } from "next/navigation";
import { requireUser } from "@/lib/dal";
import { getTenantState } from "@/lib/tenant";
import { ReferralLinkRow } from "./ReferralLinkRow";

export const dynamic = "force-dynamic";
export const metadata = { title: "Refer a coworker · etell" };

export default async function ReferPage() {
  const user = await requireUser();
  if (!user.tenantId) redirect("/login");
  const state = await getTenantState(user.tenantId, user.isAdmin);
  if (!state || !state.referralCode) {
    redirect("/chat");
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://etell.app";
  const link = `${baseUrl.replace(/\/$/, "")}/r/${state.referralCode}`;

  return (
    <div className="max-w-xl mx-auto py-12">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Refer a coworker</h1>
        <p className="text-muted text-sm">
          Each successful referral adds <strong>7 days</strong> to your free
          window (capped at 28 days total). Credit applies when they&apos;re
          approved off the waitlist.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
        <div className="text-xs uppercase tracking-wide text-muted mb-1">
          Your link
        </div>
        <ReferralLinkRow link={link} />
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-5 text-sm space-y-2">
        <Row label="Referrals credited" value={`${state.referralsMade} / 2`} />
        <Row
          label="Days remaining"
          value={state.daysLeft !== null ? `${state.daysLeft}` : "unlimited"}
        />
        <Row label="Plan" value={state.plan} />
      </div>

      {state.referralsMade >= 2 && (
        <div className="mt-6 text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-3">
          You&apos;ve hit the referral cap (28 days max). Upgrade to keep
          building beyond that.
        </div>
      )}

      <div className="mt-10">
        <a href="/chat" className="text-sm underline text-muted">
          ← Back to dashboard
        </a>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted text-xs uppercase tracking-wide">{label}</span>
      <span className="font-mono text-xs">{value}</span>
    </div>
  );
}
