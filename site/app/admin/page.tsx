import { requireAdmin } from "@/lib/dal";
import {
  getAdoptionSummary,
  getAdminUserRows,
  getAllPersonaSlugs,
} from "./queries";
import { InviteForm } from "./InviteForm";
import { UserRow } from "./UserRow";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin · Experience Review",
};

function fmtDate(d: Date | null): string {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function AdminPage() {
  await requireAdmin();
  const [summary, rows, personaSlugs] = await Promise.all([
    getAdoptionSummary(),
    getAdminUserRows(),
    getAllPersonaSlugs(),
  ]);

  const verifiedPct =
    summary.totalInvited > 0
      ? Math.round((summary.totalVerified / summary.totalInvited) * 100)
      : 0;

  return (
    <>
      <div className="mb-5 py-6">
        <h1 className="text-2xl font-bold mt-1 mb-2">Admin</h1>
        <p className="text-muted text-sm max-w-xl">
          Manage the invite allowlist, grant persona access, and track
          adoption.
        </p>
      </div>

      {/* Adoption summary */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        <Stat label="Invited" value={summary.totalInvited} />
        <Stat
          label="Verified"
          value={summary.totalVerified}
          hint={`${verifiedPct}%`}
        />
        <Stat label="Active 7d" value={summary.activeLast7d} />
        <Stat label="Active 30d" value={summary.activeLast30d} />
        <Stat label="Sign-ins 30d" value={summary.totalSignIns30d} />
      </div>

      {/* Invite form */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm mb-6">
        <h2 className="text-base font-semibold mb-3">Invite a user</h2>
        <InviteForm personaSlugs={personaSlugs} />
      </div>

      {/* Users */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200 flex items-baseline justify-between">
          <h2 className="text-base font-semibold">Users</h2>
          <span className="text-xs text-muted">{rows.length} total</span>
        </div>
        {rows.length === 0 ? (
          <div className="p-6 text-sm text-muted">No users yet.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted">
                <th className="px-5 py-3">Email</th>
                <th className="py-3">Added</th>
                <th className="py-3">Verified</th>
                <th className="py-3">Last sign-in</th>
                <th className="py-3">30d</th>
                <th className="py-3">Personas</th>
                <th className="py-3 pr-5"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((u) => (
                <UserRow
                  key={u.id}
                  row={{
                    id: u.id,
                    email: u.email,
                    createdAt: fmtDate(u.createdAt),
                    verified: !!u.emailVerified,
                    lastSignInAt: fmtDate(u.lastSignInAt),
                    signInCount30d: u.signInCount30d,
                    personas: u.personas,
                    isAdmin: u.isAdmin,
                  }}
                  allPersonaSlugs={personaSlugs}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: number | string;
  hint?: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-muted">{label}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
      {hint && <div className="text-xs text-muted mt-0.5">{hint}</div>}
    </div>
  );
}
