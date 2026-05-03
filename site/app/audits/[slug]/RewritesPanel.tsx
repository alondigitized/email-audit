"use client";

import { useActionState, useState } from "react";
import { requestRewritesAction, type ActionResult } from "./actions";

type Alt = {
  dimension: "subject" | "preheader" | "hero" | "cta";
  text: string;
  predicted_score: number;
  rationale: string;
};

type Rewrites = {
  generated_at: string;
  channel: "email" | "site";
  baseline_score: number | null;
  alternatives: Alt[];
} | null;

const DIMENSION_LABEL: Record<Alt["dimension"], string> = {
  subject: "Subject line",
  preheader: "Preview text",
  hero: "Hero copy",
  cta: "CTA button",
};

const DIMENSION_HINT: Record<Alt["dimension"], string> = {
  subject: "≤55 chars · the inbox-side opener",
  preheader: "≤90 chars · the line under the subject",
  hero: "≤120 chars · the headline above the fold",
  cta: "≤22 chars · the button copy",
};

function pillClass(score: number): string {
  if (score >= 8) return "bg-emerald-50 text-emerald-800 border-emerald-200";
  if (score >= 6) return "bg-sky-50 text-sky-800 border-sky-200";
  if (score >= 4) return "bg-amber-50 text-amber-900 border-amber-200";
  return "bg-rose-50 text-rose-800 border-rose-200";
}

function fmtRelative(iso: string): string {
  const ms = Date.now() - new Date(iso).getTime();
  if (!Number.isFinite(ms)) return iso;
  const m = Math.floor(ms / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m} min ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

export function RewritesPanel({
  slug,
  personaName,
  rewrites,
}: {
  slug: string;
  personaName: string;
  rewrites: Rewrites;
}) {
  const [state, formAction, pending] = useActionState<ActionResult | null, FormData>(
    async (_prev, fd) => requestRewritesAction(fd),
    null
  );
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 1500);
    } catch {}
  }

  // Group alternatives by dimension so each section renders together.
  const grouped = (rewrites?.alternatives ?? []).reduce<Record<string, Alt[]>>(
    (acc, a) => {
      (acc[a.dimension] ??= []).push(a);
      return acc;
    },
    {}
  );
  const dims = Object.keys(grouped) as Alt["dimension"][];
  // Render groups in the canonical order (subject → preheader → hero → cta).
  const order: Alt["dimension"][] = ["subject", "preheader", "hero", "cta"];
  dims.sort((a, b) => order.indexOf(a) - order.indexOf(b));

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
        <div>
          <h3 className="text-base font-semibold m-0">
            Rewrites in {personaName}&apos;s voice
          </h3>
          <p className="text-xs text-muted mt-1 max-w-xl">
            Click below to ask {personaName} for alternatives that score
            higher under their own rubric. Useful right after a test send —
            land on this page, generate rewrites, paste the best ones into
            your ESP. Re-runs overwrite the previous set.
          </p>
        </div>
        <form action={formAction}>
          <input type="hidden" name="slug" value={slug} />
          <button
            type="submit"
            disabled={pending}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-700 disabled:opacity-50"
          >
            {pending
              ? "Generating…"
              : rewrites
                ? `Regenerate`
                : `Ask ${personaName} to rewrite`}
          </button>
        </form>
      </div>

      {state && !state.ok && (
        <div className="mb-3 px-3 py-2 rounded-lg bg-rose-50 text-rose-800 border border-rose-200 text-xs">
          {state.error}
        </div>
      )}

      {!rewrites && (
        <div className="text-sm text-muted py-6 text-center border border-dashed border-gray-200 rounded-xl">
          No rewrites yet. Generation takes ~5 seconds.
        </div>
      )}

      {rewrites && (
        <>
          <div className="mb-4 text-[11px] text-muted">
            Generated {fmtRelative(rewrites.generated_at)}
            {rewrites.baseline_score !== null && (
              <>
                {" "}
                · baseline score{" "}
                <span className="tabular-nums font-semibold">
                  {rewrites.baseline_score}/10
                </span>
              </>
            )}
            {" "}· {rewrites.alternatives.length} alternatives
          </div>
          <div className="flex flex-col gap-5">
            {dims.map((dim) => (
              <section key={dim}>
                <div className="flex items-baseline gap-2 mb-2">
                  <h4 className="text-sm font-semibold m-0">
                    {DIMENSION_LABEL[dim]}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wide text-muted">
                    {DIMENSION_HINT[dim]}
                  </span>
                </div>
                <ul className="flex flex-col gap-2">
                  {grouped[dim].map((a, i) => {
                    const key = `${dim}-${i}`;
                    return (
                      <li
                        key={key}
                        className="border border-gray-200 rounded-xl p-3"
                      >
                        <div className="flex items-start justify-between gap-3 mb-1.5">
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium break-words">
                              {a.text}
                            </div>
                          </div>
                          <span
                            className={`shrink-0 inline-flex items-baseline gap-1 px-2 py-0.5 rounded-md text-xs font-semibold tabular-nums border ${pillClass(a.predicted_score)}`}
                          >
                            {a.predicted_score}
                            <span className="text-[10px] font-normal opacity-80">
                              /10
                            </span>
                          </span>
                        </div>
                        <p className="text-xs text-muted mb-2 break-words">
                          {a.rationale}
                        </p>
                        <button
                          onClick={() => copy(a.text, key)}
                          className="text-[11px] text-sky-700 hover:text-sky-900 underline"
                        >
                          {copied === key ? "Copied" : "Copy"}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
