"use client";

import { useTransition } from "react";
import { toggleAppAction } from "./actions";

type FlagView = {
  key: string;
  name: string;
  description: string;
  enabled: boolean;
  updatedAt: string;
  updatedByEmail: string | null;
};

export function AppsSection({ flags }: { flags: FlagView[] }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-200">
        <h2 className="text-base font-semibold">Apps</h2>
        <p className="text-xs text-muted mt-0.5">
          Toggle user-facing apps on or off. Admins can always access disabled
          apps for testing.
        </p>
      </div>
      <div className="divide-y divide-gray-100">
        {flags.map((f) => (
          <div
            key={f.key}
            className="flex items-center gap-4 px-5 py-4"
          >
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold text-ink">{f.name}</span>
                <span
                  className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                    f.enabled
                      ? "bg-green-50 text-green-800 ring-1 ring-green-200 ring-inset"
                      : "bg-gray-100 text-gray-600 ring-1 ring-gray-200 ring-inset"
                  }`}
                >
                  {f.enabled ? "ON" : "OFF"}
                </span>
              </div>
              <div className="text-xs text-muted mt-0.5">{f.description}</div>
              {f.updatedByEmail && (
                <div className="text-[11px] text-muted mt-1">
                  Last changed {f.updatedAt} by {f.updatedByEmail}
                </div>
              )}
            </div>
            <form
              action={(fd) =>
                startTransition(() => {
                  toggleAppAction(fd);
                })
              }
              className="flex-none"
            >
              <input type="hidden" name="key" value={f.key} />
              <input type="hidden" name="enabled" value={f.enabled ? "0" : "1"} />
              <button
                type="submit"
                disabled={isPending}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold ring-1 ring-inset transition-colors ${
                  f.enabled
                    ? "bg-white text-red-700 ring-red-200 hover:bg-red-50"
                    : "bg-gray-900 text-white ring-gray-900 hover:bg-gray-800"
                } disabled:opacity-50`}
              >
                {f.enabled ? "Turn off" : "Turn on"}
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
