"use client";

import type { PersonaMeta } from "@/lib/personas";

interface Props {
  personas: PersonaMeta[];
  selected: string | null;
  onSelect: (slug: string | null) => void;
}

export function PersonaSelector({ personas: metas, selected, onSelect }: Props) {
  // Hide the selector entirely if there's 0 or 1 persona — no choice to make
  if (metas.length <= 1) return null;

  return (
    <div className="flex items-center gap-2 mb-4 flex-wrap">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted">
        Persona
      </span>
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
          selected === null
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        All
      </button>
      {metas.map((m) => (
        <button
          key={m.slug}
          onClick={() => onSelect(m.slug)}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
            selected === m.slug
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {m.name}
        </button>
      ))}
    </div>
  );
}
