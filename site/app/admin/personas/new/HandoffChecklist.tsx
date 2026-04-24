"use client";

import { useEffect, useState } from "react";
import type { PersonaLastStatus } from "@/lib/db/schema";

// Live checklist for the wizard's handoff step. Polls
// /api/admin/personas/<slug>/status every 3s while the page is open and
// flips each step's state from grey → emerald as the laptop bootstrap
// script reports in. Status writes happen in
// audit-pipeline/persona-profile.mjs reportOnboardingStep.

const STEP_ORDER: Array<{ key: string; label: string }> = [
  { key: "artifacts", label: "Filesystem artifacts (JSON, README, plist)" },
  { key: "env", label: ".env credentials written" },
  { key: "cookies", label: "Login cookies captured" },
  { key: "launchagent", label: "LaunchAgent installed" },
  { key: "daemon", label: "email-monitor restarted" },
  { key: "smoke", label: "Dry-run site-review smoke test" },
];

type StepState = "pending" | "done" | "failed";

export function HandoffChecklist({
  slug,
  initialStatus,
}: {
  slug: string;
  initialStatus: PersonaLastStatus | null;
}) {
  const [status, setStatus] = useState<PersonaLastStatus | null>(initialStatus);

  useEffect(() => {
    let alive = true;
    const tick = async () => {
      try {
        const res = await fetch(`/api/admin/personas/${slug}/status`, {
          cache: "no-store",
        });
        if (!res.ok) return;
        const next = (await res.json()) as PersonaLastStatus;
        if (alive) setStatus(next);
      } catch {
        // transient — next tick retries
      }
    };
    const handle = setInterval(tick, 3000);
    tick(); // initial
    return () => {
      alive = false;
      clearInterval(handle);
    };
  }, [slug]);

  const onboarding = status?.onboarding ?? {};
  const allDone = STEP_ORDER.every((s) => onboarding[s.key]?.status === "done");

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
        Handoff progress
      </h3>
      <ul className="space-y-2 text-sm">
        {STEP_ORDER.map(({ key, label }) => {
          const entry = onboarding[key];
          const state = (entry?.status ?? "pending") as StepState;
          const icon =
            state === "done" ? "✓" : state === "failed" ? "✗" : "○";
          const cls =
            state === "done"
              ? "text-emerald-700"
              : state === "failed"
                ? "text-rose-700"
                : "text-muted";
          return (
            <li key={key} className={`flex items-start gap-2 ${cls}`}>
              <span className="inline-block w-4 text-center">{icon}</span>
              <div className="flex-1 min-w-0">
                <div>{label}</div>
                {entry?.detail && (
                  <div className="text-[11px] opacity-80">{entry.detail}</div>
                )}
                {entry?.at && (
                  <div className="text-[11px] opacity-60">
                    {new Date(entry.at).toLocaleTimeString()}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      {allDone && (
        <p className="text-xs text-emerald-700 mt-3 font-semibold">
          All steps reported. You can click &quot;Mark active &amp; finish&quot; below.
        </p>
      )}
      {!allDone && Object.keys(onboarding).length === 0 && (
        <p className="text-xs text-muted mt-3">
          Waiting for the laptop script to report its first step. Polls every 3s.
        </p>
      )}
    </div>
  );
}
