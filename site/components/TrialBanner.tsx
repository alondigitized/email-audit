import { currentUser } from "@/lib/dal";
import { getTenantState } from "@/lib/tenant";

// Slim banner pinned above the main app while a tenant is on the free plan.
// Goes amber at ≤5 days, red at ≤2 days. Hidden for admins, pro tenants,
// and unauthed visitors. Renders nothing when not applicable so it can sit
// at the top of any layout without conditional wrappers.
export async function TrialBanner() {
  const user = await currentUser();
  if (!user || !user.tenantId || user.isAdmin) return null;
  const state = await getTenantState(user.tenantId, false);
  if (!state || state.plan !== "free" || state.daysLeft === null) return null;

  const days = state.daysLeft;
  let cls = "bg-sky-50 text-sky-900 border-sky-200";
  if (days <= 2) cls = "bg-rose-50 text-rose-900 border-rose-200";
  else if (days <= 5) cls = "bg-amber-50 text-amber-900 border-amber-200";

  return (
    <div className={`border-b ${cls} text-xs`}>
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
        <span>
          {days === 0 ? (
            <strong>Trial ends today.</strong>
          ) : (
            <>
              <strong>{days} day{days === 1 ? "" : "s"} left</strong> in your
              free trial.
            </>
          )}{" "}
          {state.canRefer
            ? "Refer a coworker for +7 days."
            : "Cap reached — upgrade to keep going."}
        </span>
        <span className="flex gap-3 whitespace-nowrap">
          {state.canRefer && (
            <a href="/refer" className="underline font-semibold">
              Refer →
            </a>
          )}
          <a href="/upgrade" className="underline font-semibold">
            Upgrade →
          </a>
        </span>
      </div>
    </div>
  );
}
