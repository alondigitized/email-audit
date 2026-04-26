"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { startWizardStep1Action } from "./actions";

// Simulated phase ticker. The action is two parallel LLM calls (industry
// classifier ~10s, competitor research ~30s) with no streamed progress;
// phases are time-bucketed so the UI feels alive without lying about the
// work. Total expected time ~30s, half the previous flow.
const PHASES = [
  { atMs: 0, label: "Reading your homepage" },
  { atMs: 4_000, label: "Classifying your industry" },
  { atMs: 12_000, label: "Scanning competitors" },
  { atMs: 22_000, label: "Matching curated personas" },
  { atMs: 32_000, label: "Almost there — wrapping up" },
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
      const r = await startWizardStep1Action();
      if (!mounted) return;
      if (r.ok) {
        router.replace(r.route);
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
        <strong>Step 1 failed.</strong> {error}
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
          {seconds}s elapsed · usually finishes within 30s
        </div>
      </div>

      {/* Phase pills */}
      <div className="flex justify-between gap-1">
        {PHASES.slice(0, 4).map((p, i) => {
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
        Don&apos;t close this tab — we&apos;ll redirect you the moment we&apos;re ready.
      </p>
    </div>
  );
}
