import { requireAdmin } from "@/lib/dal";
import { getAppFlags } from "@/lib/apps";
import {
  getAdoptionSummary,
  getAdminUserRows,
  getAllPersonaSlugs,
} from "./queries";
import { InviteForm } from "./InviteForm";
import { UserRow } from "./UserRow";
import { UserCard } from "./UserCard";
import { AppsSection } from "./AppsSection";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin · etell",
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
  const [summary, rows, personaSlugs, flags] = await Promise.all([
    getAdoptionSummary(),
    getAdminUserRows(),
    getAllPersonaSlugs(),
    getAppFlags(),
  ]);
  const flagViews = flags.map((f) => ({
    key: f.key,
    name: f.def.name,
    description: f.def.description,
    enabled: f.enabled,
    updatedAt: f.updatedAt ? fmtDate(f.updatedAt) : "—",
    updatedByEmail: f.updatedByEmail,
  }));

  const verifiedPct =
    summary.totalInvited > 0
      ? Math.round((summary.totalVerified / summary.totalInvited) * 100)
      : 0;

  return (
    <>
      <div className="mb-5 py-6">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h1 className="text-2xl font-bold mt-1 mb-2">Admin</h1>
          <nav className="flex flex-wrap gap-x-4 gap-y-2">
            {[
              ["/admin/reports", "Reports"],
              ["/admin/tenants", "Tenants"],
              ["/admin/waitlist", "Waitlist"],
              ["/admin/laptop-queue", "Laptop queue"],
              ["/admin/defect-queue", "Defect queue"],
              ["/admin/subscriptions", "Subscriptions"],
              ["/admin/email-health", "Email health"],
              ["/admin/brand-blocklist", "Brand blocklist"],
              ["/admin/personas", "Manage personas"],
              ["/admin/templates", "Templates"],
              ["/admin/template-requests", "Template requests"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-sky-700 hover:text-sky-900 underline whitespace-nowrap"
              >
                {label} →
              </a>
            ))}
          </nav>
        </div>
        <p className="text-muted text-sm max-w-xl">
          Manage the invite allowlist, grant persona access, and track
          adoption.
        </p>
      </div>

      {/* Adoption — who's in */}
      <SectionLabel>Adoption</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        <Stat label="Invited" value={summary.totalInvited} />
        <Stat
          label="Verified"
          value={summary.totalVerified}
          hint={`${verifiedPct}%`}
        />
        <Stat
          label="Dormant invites"
          value={summary.dormantInvites}
          hint="invited >7d ago, never verified"
        />
        <Stat
          label="Admins"
          value={rows.filter((r) => r.isAdmin).length}
        />
      </div>

      {/* Activity — who's using it */}
      <SectionLabel>Activity (last 30 days)</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        <Stat label="Active 7d" value={summary.activeLast7d} />
        <Stat label="Active 30d" value={summary.activeLast30d} />
        <Stat
          label="Sign-ins"
          value={summary.totalSignIns30d}
          hint={`${summary.avgSignInsPerActive30d}/user avg`}
        />
        <Stat label="Audit views" value={summary.audits30d} />
        <Stat label="Analysis views" value={summary.analyses30d} />
      </div>

      {/* Invite form */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm mb-6">
        <h2 className="text-base font-semibold mb-3">Invite a user</h2>
        <InviteForm personaSlugs={personaSlugs} />
      </div>

      {/* Apps */}
      <div className="mb-6">
        <AppsSection flags={flagViews} />
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
          <>
            {/* Desktop — table with all columns */}
            <div className="hidden md:block">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-muted">
                    <th className="px-5 py-3">Email</th>
                    <th className="py-3">Added</th>
                    <th className="py-3">Verified</th>
                    <th className="py-3" title="Hours between invite and first sign-in">TTV</th>
                    <th className="py-3">Last sign-in</th>
                    <th className="py-3" title="Sign-ins in the last 30 days">Sign-ins 30d</th>
                    <th className="py-3" title="Content views in the last 30 days">Views 30d</th>
                    <th className="py-3">Personas</th>
                    <th className="py-3">Apps</th>
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
                        viewCount30d: u.viewCount30d,
                        timeToVerifyHours: u.timeToVerifyHours,
                        personas: u.personas,
                        apps: u.apps,
                        isAdmin: u.isAdmin,
                      }}
                      allPersonaSlugs={personaSlugs}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile — stacked cards */}
            <div className="md:hidden">
              {rows.map((u) => (
                <UserCard
                  key={u.id}
                  row={{
                    id: u.id,
                    email: u.email,
                    createdAt: fmtDate(u.createdAt),
                    verified: !!u.emailVerified,
                    lastSignInAt: fmtDate(u.lastSignInAt),
                    signInCount30d: u.signInCount30d,
                    viewCount30d: u.viewCount30d,
                    timeToVerifyHours: u.timeToVerifyHours,
                    personas: u.personas,
                    apps: u.apps,
                    isAdmin: u.isAdmin,
                  }}
                  allPersonaSlugs={personaSlugs}
                />
              ))}
            </div>
          </>
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-wide text-muted font-semibold mb-2">
      {children}
    </div>
  );
}
