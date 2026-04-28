"use client";

import { useState } from "react";
import type {
  PersonaProposal,
  CompetitorProposal,
} from "@/lib/onboarding/research-prompt";
import { commitPersonaAction, regenerateResearchAction } from "../actions";

type Props = {
  personas: PersonaProposal[];
  competitors: CompetitorProposal[];
  recommendedIdx: number;
  ownDomain: string;
};

export function ReviewForm({
  personas,
  competitors,
  recommendedIdx,
  ownDomain,
}: Props) {
  const [selectedIdx, setSelectedIdx] = useState(recommendedIdx);
  const [submitting, setSubmitting] = useState(false);
  const selected = personas[selectedIdx];

  return (
    <form
      action={commitPersonaAction}
      onSubmit={() => setSubmitting(true)}
      className="space-y-10"
    >
      <input type="hidden" name="persona_idx" value={selectedIdx} />

      <section>
        <SectionLabel>Pick a persona</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {personas.map((p, i) => (
            <label
              key={i}
              className={`block bg-white border-2 rounded-2xl p-4 cursor-pointer transition-colors ${
                selectedIdx === i
                  ? "border-sky-500"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="persona_radio"
                value={i}
                checked={selectedIdx === i}
                onChange={() => setSelectedIdx(i)}
                className="sr-only"
              />
              <div className="flex items-baseline justify-between mb-1">
                <div className="font-semibold text-base">{p.name}</div>
                {i === recommendedIdx && (
                  <span className="text-[10px] uppercase tracking-wide bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded">
                    ★ Recommended
                  </span>
                )}
              </div>
              <div className="text-xs text-muted mb-2">
                {p.age} · {p.generation} · {p.gender}
              </div>
              <p className="text-sm mb-2 line-clamp-3">{p.style}</p>
              <div className="flex flex-wrap gap-1">
                {p.focus_areas.slice(0, 4).map((f) => (
                  <span
                    key={f}
                    className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-muted italic mt-2 line-clamp-2">
                {p.rationale}
              </p>
            </label>
          ))}
        </div>
      </section>

      <section>
        <SectionLabel>Fine-tune identity</SectionLabel>
        <div
          key={selectedIdx}
          className="bg-white border border-gray-200 rounded-2xl p-5 space-y-4"
        >
          <div className="grid grid-cols-2 gap-3">
            <Field label="Name" htmlFor="name">
              <input
                id="name"
                name="name"
                defaultValue={selected.name}
                className={inputClass}
                required
                maxLength={80}
              />
            </Field>
            <Field label="Age" htmlFor="age">
              <input
                id="age"
                name="age"
                type="number"
                defaultValue={selected.age}
                min={18}
                max={95}
                className={inputClass}
                required
              />
            </Field>
            <Field label="Generation" htmlFor="generation">
              <input
                id="generation"
                name="generation"
                defaultValue={selected.generation}
                className={inputClass}
                required
              />
            </Field>
            <Field label="Gender" htmlFor="gender">
              <input
                id="gender"
                name="gender"
                defaultValue={selected.gender}
                className={inputClass}
                required
              />
            </Field>
          </div>
          <Field label="Style" htmlFor="style">
            <textarea
              id="style"
              name="style"
              defaultValue={selected.style}
              rows={2}
              className={inputClass}
              required
            />
          </Field>
          <Field label="Shopping habits" htmlFor="shopping_habits">
            <textarea
              id="shopping_habits"
              name="shopping_habits"
              defaultValue={selected.shopping_habits}
              rows={3}
              className={inputClass}
              required
            />
          </Field>
          <Field label="Tech comfort" htmlFor="tech_comfort">
            <input
              id="tech_comfort"
              name="tech_comfort"
              defaultValue={selected.tech_comfort}
              className={inputClass}
              required
            />
          </Field>
          <Field
            label="Focus areas"
            htmlFor="focus_areas"
            hint="Comma-separated"
          >
            <input
              id="focus_areas"
              name="focus_areas"
              defaultValue={selected.focus_areas.join(", ")}
              className={inputClass}
              required
            />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Search term" htmlFor="search_term">
              <input
                id="search_term"
                name="search_term"
                defaultValue={selected.search_term}
                className={inputClass}
                required
              />
            </Field>
            <Field
              label="Category path"
              htmlFor="category_path"
              hint="Slash-separated"
            >
              <input
                id="category_path"
                name="category_path"
                defaultValue={selected.category_path.join("/")}
                className={inputClass}
                required
              />
            </Field>
          </div>
        </div>
      </section>

      <section>
        <SectionLabel>Subscribe persona inbox</SectionLabel>
        <p className="text-xs text-muted mb-3">
          We&apos;ll enroll the persona&apos;s inbox in each checked email
          program. Auto-subscribe is best-effort — you&apos;ll see status on
          the next page and can finish anything we couldn&apos;t do
          automatically.
        </p>
        <div className="space-y-2">
          <BrandCheckbox
            name="subscribe_own"
            label={ownDomain}
            sublabel="Your brand"
            rationale="See what your customers actually receive."
            defaultChecked
          />
          {competitors.map((c, i) => (
            <BrandCheckbox
              key={i}
              name={`subscribe_comp_${i}`}
              label={c.name}
              sublabel={c.domain}
              rationale={c.rationale}
              defaultChecked
            />
          ))}
        </div>
      </section>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="px-5 py-2.5 bg-accent text-white font-semibold rounded-xl text-[15px] disabled:opacity-50"
        >
          {submitting ? "Bootstrapping…" : "Continue →"}
        </button>
        <span className="text-xs text-muted">
          {submitting
            ? "Subscribing inboxes (~5–10s)…"
            : "Takes about 10 seconds."}
        </span>
      </div>

      <RegenerateLink />
    </form>
  );
}

function RegenerateLink() {
  return (
    <form action={regenerateResearchAction} className="pt-2">
      <button
        type="submit"
        className="text-xs text-muted underline hover:text-sky-700"
      >
        Don&apos;t love these? Re-run research →
      </button>
    </form>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-wide text-muted font-medium mb-3">
      {children}
    </div>
  );
}

const inputClass =
  "w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500";

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-xs font-medium text-gray-700 mb-1"
      >
        {label}
        {hint && <span className="ml-1 text-muted font-normal">— {hint}</span>}
      </label>
      {children}
    </div>
  );
}

function BrandCheckbox({
  name,
  label,
  sublabel,
  rationale,
  defaultChecked,
}: {
  name: string;
  label: string;
  sublabel: string;
  rationale: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="flex items-start gap-3 bg-white border border-gray-200 rounded-2xl p-4 cursor-pointer has-[:checked]:border-sky-500 transition-colors">
      <input
        type="checkbox"
        name={name}
        value="1"
        defaultChecked={defaultChecked}
        className="mt-1 h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
      />
      <div>
        <div className="flex items-baseline gap-2">
          <span className="font-semibold text-sm">{label}</span>
          <span className="text-xs font-mono text-muted">{sublabel}</span>
        </div>
        <p className="text-xs text-muted line-clamp-2 mt-0.5">{rationale}</p>
      </div>
    </label>
  );
}
