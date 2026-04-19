"use client";

// Mobile-friendly variant of UserRow. The desktop table has 10 columns,
// which can't fit on a phone; on small screens we render each user as a
// vertically-stacked card with the same actions available. page.tsx shows
// one or the other based on the md breakpoint.

import { useState, useTransition } from "react";
import {
  grantPersonaAction,
  revokePersonaAction,
  removeUserAction,
  toggleUserAppAccessAction,
} from "./actions";

type Row = {
  id: string;
  email: string;
  createdAt: string;
  verified: boolean;
  lastSignInAt: string;
  signInCount30d: number;
  viewCount30d: number;
  timeToVerifyHours: number | null;
  personas: string[];
  apps: string[];
  isAdmin: boolean;
};

const APP_LABELS: Record<string, string> = { chat: "Chat" };
const ALL_APP_KEYS = ["chat"] as const;

function fmtTtv(hours: number | null): string {
  if (hours === null) return "—";
  if (hours < 1) return "<1h";
  if (hours < 48) return `${hours}h`;
  return `${Math.round(hours / 24)}d`;
}

export function UserCard({
  row,
  allPersonaSlugs,
}: {
  row: Row;
  allPersonaSlugs: string[];
}) {
  const [isPending, startTransition] = useTransition();
  const [grantSlug, setGrantSlug] = useState("");
  const ungranted = allPersonaSlugs.filter((s) => !row.personas.includes(s));

  return (
    <div className="border-t border-gray-100 px-4 py-4 first:border-t-0">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="min-w-0 flex-1">
          <div className="font-medium break-all text-sm flex items-center flex-wrap gap-2">
            {row.email}
            {row.isAdmin && (
              <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-gray-900 text-white">
                admin
              </span>
            )}
            {row.verified ? (
              <span className="inline-block px-1.5 py-0.5 rounded text-[10px] bg-green-100 text-green-700">
                verified
              </span>
            ) : (
              <span className="inline-block px-1.5 py-0.5 rounded text-[10px] bg-gray-100 text-gray-600">
                pending
              </span>
            )}
          </div>
          <div className="text-[11px] text-muted mt-0.5">
            added {row.createdAt} · last sign-in {row.lastSignInAt} · TTV{" "}
            {fmtTtv(row.timeToVerifyHours)}
          </div>
          <div className="text-[11px] text-muted mt-0.5 tabular-nums">
            {row.signInCount30d} sign-ins · {row.viewCount30d} views (30d)
          </div>
        </div>
        {!row.isAdmin && (
          <form
            action={(fd) => {
              if (!confirm(`Remove ${row.email}?`)) return;
              startTransition(() => {
                removeUserAction(fd);
              });
            }}
          >
            <input type="hidden" name="userId" value={row.id} />
            <button
              type="submit"
              disabled={isPending}
              className="text-xs text-red-600 hover:underline whitespace-nowrap"
            >
              remove
            </button>
          </form>
        )}
      </div>

      {/* Personas */}
      <div className="mt-3">
        <div className="text-[10px] uppercase tracking-wide text-muted font-semibold mb-1">
          Personas
        </div>
        <div className="flex flex-wrap gap-1 items-center">
          {row.personas.map((p) => (
            <form
              key={p}
              action={(fd) => {
                startTransition(() => {
                  revokePersonaAction(fd);
                });
              }}
              className="inline-flex"
            >
              <input type="hidden" name="userId" value={row.id} />
              <input type="hidden" name="persona" value={p} />
              <button
                type="submit"
                disabled={isPending}
                className="group inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-700 text-xs"
                title="Revoke persona"
              >
                {p}
                <span className="opacity-50 group-hover:opacity-100">×</span>
              </button>
            </form>
          ))}
          {ungranted.length > 0 && (
            <form
              action={(fd) => {
                startTransition(() => {
                  grantPersonaAction(fd);
                  setGrantSlug("");
                });
              }}
              className="inline-flex gap-1 items-center"
            >
              <input type="hidden" name="userId" value={row.id} />
              <select
                name="persona"
                value={grantSlug}
                onChange={(e) => setGrantSlug(e.target.value)}
                className="text-xs py-1 px-2 border border-gray-200 rounded bg-white"
              >
                <option value="">+ grant…</option>
                {ungranted.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {grantSlug && (
                <button
                  type="submit"
                  disabled={isPending}
                  className="text-xs px-2 py-1 bg-gray-900 text-white rounded"
                >
                  grant
                </button>
              )}
            </form>
          )}
          {row.personas.length === 0 && ungranted.length === 0 && (
            <span className="text-xs text-muted">—</span>
          )}
        </div>
      </div>

      {/* Apps */}
      <div className="mt-3">
        <div className="text-[10px] uppercase tracking-wide text-muted font-semibold mb-1">
          Apps
        </div>
        <div className="flex flex-wrap gap-1 items-center">
          {ALL_APP_KEYS.map((k) => {
            const granted = row.isAdmin || row.apps.includes(k);
            const nextEnable = row.apps.includes(k) ? "0" : "1";
            return (
              <form
                key={k}
                action={(fd) => {
                  startTransition(() => {
                    toggleUserAppAccessAction(fd);
                  });
                }}
                className="inline-flex"
              >
                <input type="hidden" name="userId" value={row.id} />
                <input type="hidden" name="appKey" value={k} />
                <input type="hidden" name="enable" value={nextEnable} />
                <button
                  type="submit"
                  disabled={isPending || row.isAdmin}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ring-1 ring-inset ${
                    granted
                      ? row.isAdmin
                        ? "bg-gray-900 text-white ring-gray-900 opacity-70 cursor-not-allowed"
                        : "bg-sky-50 text-sky-800 ring-sky-200 hover:bg-red-50 hover:text-red-700 hover:ring-red-200"
                      : "bg-white text-gray-500 ring-gray-200 hover:bg-gray-900 hover:text-white hover:ring-gray-900"
                  }`}
                >
                  {APP_LABELS[k] ?? k}
                  {granted && !row.isAdmin && (
                    <span className="opacity-60">×</span>
                  )}
                </button>
              </form>
            );
          })}
        </div>
      </div>
    </div>
  );
}
