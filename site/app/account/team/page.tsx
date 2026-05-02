import { notFound } from "next/navigation";
import { requireTenant } from "@/lib/dal";
import { getTenantRole, listTeamMembers, canRemoveMember } from "@/lib/team";
import { InviteForm } from "./InviteForm";
import {
  removeTeammateFormAction,
  transferOwnershipFormAction,
} from "./actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "Team · etell" };

function fmtRelative(d: Date | null): string {
  if (!d) return "never";
  const ms = Date.now() - d.getTime();
  const days = Math.floor(ms / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "1d ago";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

export default async function TeamPage() {
  const { user, tenant } = await requireTenant();
  const myRole = await getTenantRole(user.id, tenant.id);
  if (!myRole) notFound();
  const members = await listTeamMembers(tenant.id);
  const isOwner = myRole === "owner";

  return (
    <div className="max-w-3xl mx-auto py-6 sm:py-8 px-4 sm:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Team</h1>
        <p className="text-muted text-sm">
          {isOwner
            ? `Manage who has access to the ${tenant.slug} workspace. Owners can invite teammates, remove them, and transfer ownership. Tenants must always have at least one owner.`
            : `People with access to the ${tenant.slug} workspace. Reach out to an owner to add or remove someone.`}
        </p>
      </div>

      {isOwner && (
        <div className="mb-6 bg-white border border-gray-200 rounded-2xl p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted mb-2">
            Invite a teammate
          </div>
          <InviteForm />
          <p className="text-[11px] text-muted">
            They&apos;ll be added to <strong>{tenant.slug}</strong> as a member.
            They can sign in with their email; they get the same data access
            you do.
          </p>
        </div>
      )}

      {/* Mobile cards */}
      <ul className="sm:hidden flex flex-col gap-3">
        {await Promise.all(
          members.map(async (m) => {
            const removeGuard = await canRemoveMember({
              actorUserId: user.id,
              targetUserId: m.userId,
              tenantId: tenant.id,
            });
            const isMe = m.userId === user.id;
            return (
              <li
                key={m.userId}
                className="bg-white border border-gray-200 rounded-2xl p-4"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="min-w-0">
                    <div className="font-semibold break-all">
                      {m.email}
                      {isMe && (
                        <span className="ml-1 text-[10px] uppercase tracking-wide text-muted">
                          (you)
                        </span>
                      )}
                    </div>
                    {m.name && <div className="text-xs text-muted">{m.name}</div>}
                  </div>
                  <span
                    className={`shrink-0 text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${
                      m.role === "owner"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {m.role}
                  </span>
                </div>
                <div className="text-xs text-muted">
                  Last sign-in {fmtRelative(m.lastSignInAt)} · joined{" "}
                  {fmtRelative(m.joinedAt)}
                </div>
                {isOwner && !isMe && (
                  <div className="mt-3 flex gap-2 flex-wrap">
                    {m.role === "member" && (
                      <form action={transferOwnershipFormAction}>
                        <input type="hidden" name="userId" value={m.userId} />
                        <button
                          type="submit"
                          className="px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-medium"
                        >
                          Transfer ownership
                        </button>
                      </form>
                    )}
                    {removeGuard.ok && (
                      <form action={removeTeammateFormAction}>
                        <input type="hidden" name="userId" value={m.userId} />
                        <button
                          type="submit"
                          className="px-3 py-1.5 bg-rose-50 text-rose-800 border border-rose-200 rounded-lg text-xs font-medium"
                        >
                          Remove
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </li>
            );
          })
        )}
      </ul>

      {/* Desktop table */}
      <div className="hidden sm:block bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Last sign-in</th>
              <th className="px-4 py-3 font-medium">Joined</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {await Promise.all(
              members.map(async (m) => {
                const removeGuard = await canRemoveMember({
                  actorUserId: user.id,
                  targetUserId: m.userId,
                  tenantId: tenant.id,
                });
                const isMe = m.userId === user.id;
                return (
                  <tr key={m.userId} className="border-t border-gray-100 align-top">
                    <td className="px-4 py-3">
                      <div className="font-medium">
                        {m.email}
                        {isMe && (
                          <span className="ml-1 text-[10px] uppercase tracking-wide text-muted">
                            (you)
                          </span>
                        )}
                      </div>
                      {m.name && <div className="text-xs text-muted">{m.name}</div>}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${
                          m.role === "owner"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {m.role}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted text-xs">
                      {fmtRelative(m.lastSignInAt)}
                    </td>
                    <td className="px-4 py-3 text-muted text-xs">
                      {fmtRelative(m.joinedAt)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {isOwner && !isMe ? (
                        <div className="inline-flex flex-wrap gap-2 justify-end">
                          {m.role === "member" && (
                            <form action={transferOwnershipFormAction}>
                              <input type="hidden" name="userId" value={m.userId} />
                              <button
                                type="submit"
                                className="px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-medium"
                              >
                                Transfer
                              </button>
                            </form>
                          )}
                          {removeGuard.ok && (
                            <form action={removeTeammateFormAction}>
                              <input type="hidden" name="userId" value={m.userId} />
                              <button
                                type="submit"
                                className="px-3 py-1.5 bg-rose-50 text-rose-800 border border-rose-200 rounded-lg text-xs font-medium"
                              >
                                Remove
                              </button>
                            </form>
                          )}
                        </div>
                      ) : (
                        <span className="text-xs text-muted">—</span>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
