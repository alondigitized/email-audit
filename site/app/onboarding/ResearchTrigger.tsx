"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { startResearchAction } from "./actions";

// Simulated phase ticker. The actual research call is a single ~60–120s
// LLM round-trip with no streamed progress; we don't have real-time
// telemetry to drive this. Phases are time-bucketed so the UI feels
// alive without lying about the underlying work.
const PHASES = [
  { atMs: 0, label: "Reading your homepage" },
  { atMs: 12_000, label: "Mapping who shops with you" },
  { atMs: 30_000, label: "Drafting persona profiles" },
  { atMs: 60_000, label: "Ranking competitor brands" },
  { atMs: 90_000, label: "Polishing the recommendations" },
  { atMs: 130_000, label: "Almost there — wrapping up" },
];

function pickPhase(elapsedMs: number): number {
  let idx = 0;
  for (let i = 0; i < PHASES.length; i++) {
    if (elapsedMs >= PHASES[i].atMs) idx = i;
  }
  return idx;
}

export function ResearchTrigger() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const startedAtRef = useRef<number>(Date.now());

  useEffect(() => {
    let mounted = true;
    startedAtRef.current = Date.now();

    (async () => {
      const r = await startResearchAction();
      if (!mounted) return;
      if (r.ok) {
        router.replace("/onboarding/picker");
      } else {
        setError(r.error);
      }
    })();

    const tick = setInterval(() => {
      if (!mounted) return;
      setElapsed(Date.now() - startedAtRef.current);
    }, 500);

    return () => {
      mounted = false;
      clearInterval(tick);
    };
  }, [router]);

  if (error) {
    return (
      <div className="max-w-md mx-auto text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
        <strong>Research failed.</strong> {error}
        <div className="mt-2">
          <a href="/onboarding" className="underline">
            Try again
          </a>
        </div>
      </div>
    );
  }

  const phaseIdx = pickPhase(elapsed);
  const seconds = Math.floor(elapsed / 1000);

  return (
    <div className="max-w-md mx-auto">
      {/* Big spinner */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-sky-500 animate-spin" />
        </div>
      </div>

      {/* Current phase */}
      <div className="text-center mb-6">
        <div key={phaseIdx} className="text-base font-semibold">
          {PHASES[phaseIdx].label}
          <span className="inline-block ml-1 animate-pulse">…</span>
        </div>
        <div className="text-xs text-muted mt-1 tabular-nums">
          {seconds}s elapsed · usually finishes within 90–120s
        </div>
      </div>

      {/* Phase pills */}
      <div className="flex justify-between gap-1">
        {PHASES.slice(0, 5).map((p, i) => {
          const reached = phaseIdx >= i;
          const active = phaseIdx === i;
          return (
            <div
              key={p.atMs}
              className={`flex-1 h-1.5 rounded-full transition-colors ${
                active
                  ? "bg-sky-500 animate-pulse"
                  : reached
                    ? "bg-sky-300"
                    : "bg-gray-200"
              }`}
              aria-label={p.label}
            />
          );
        })}
      </div>

      {/* Reassurance footer */}
      <p className="mt-6 text-xs text-muted text-center">
        Don&apos;t close this tab — we&apos;ll redirect you to pick a persona
        the moment research finishes.
      </p>
    </div>
  );
}
