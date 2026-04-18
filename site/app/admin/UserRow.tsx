"use client";

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

export function UserRow({
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
    <tr className="border-t border-gray-100 hover:bg-gray-50 align-top">
      <td className="px-5 py-3 font-medium break-all">
        {row.email}
        {row.isAdmin && (
          <span className="ml-2 inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-gray-900 text-white align-middle">
            admin
          </span>
        )}
      </td>
      <td className="py-3 text-xs text-muted whitespace-nowrap">{row.createdAt}</td>
      <td className="py-3 text-xs whitespace-nowrap">
        {row.verified ? (
          <span className="text-green-700">yes</span>
        ) : (
          <span className="text-muted">pending</span>
        )}
      </td>
      <td className="py-3 text-xs text-muted tabular-nums whitespace-nowrap">
        {fmtTtv(row.timeToVerifyHours)}
      </td>
      <td className="py-3 text-xs text-muted whitespace-nowrap">
        {row.lastSignInAt}
      </td>
      <td className="py-3 text-xs tabular-nums">{row.signInCount30d}</td>
      <td className="py-3 text-xs tabular-nums">{row.viewCount30d}</td>
      <td className="py-3 text-xs">
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
                className="group inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-700 text-[11px]"
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
                className="text-[11px] py-0.5 px-1 border border-gray-200 rounded bg-white"
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
                  className="text-[11px] px-2 py-0.5 bg-gray-900 text-white rounded"
                >
                  grant
                </button>
              )}
            </form>
          )}
        </div>
      </td>
      <td className="py-3 text-xs">
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
                  title={
                    row.isAdmin
                      ? "Admins always have access"
                      : granted
                        ? `Revoke ${APP_LABELS[k] ?? k}`
                        : `Grant ${APP_LABELS[k] ?? k}`
                  }
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] ring-1 ring-inset ${
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
      </td>
      <td className="py-3 pr-5 text-right whitespace-nowrap">
        {!row.isAdmin && (
          <form
            action={(fd) => {
              if (!confirm(`Remove ${row.email}?`)) return;
              startTransition(() => {
                removeUserAction(fd);
              });
            }}
            className="inline"
          >
            <input type="hidden" name="userId" value={row.id} />
            <button
              type="submit"
              disabled={isPending}
              className="text-xs text-red-600 hover:underline"
            >
              remove
            </button>
          </form>
        )}
      </td>
    </tr>
  );
}
