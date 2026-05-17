"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export interface FilterOption {
  key: string;
  label: string;
  count: number;
}

interface Props {
  // Label shown next to the trigger pill ("Brand", "Persona", …).
  filterLabel: string;
  // Placeholder shown in the trigger pill when nothing is selected.
  allLabel?: string;
  options: FilterOption[];
  selected: string | null;
  onSelect: (key: string | null) => void;
}

// Searchable combobox shared by the brand + persona filters on the audit
// list. Pill-style trigger that opens a panel with a search input + a
// scrollable list of options sorted by audit count desc, each row showing
// its count. Closes on outside-click or Escape; auto-focuses the search
// input on open. Long lists are capped at 200 displayed results.
export function FilterCombobox({
  filterLabel,
  allLabel,
  options,
  selected,
  onSelect,
}: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? options.filter((o) => o.label.toLowerCase().includes(q))
      : options;
    return list.slice(0, 200);
  }, [options, query]);

  const selectedLabel = selected
    ? options.find((o) => o.key === selected)?.label ?? selected
    : null;
  const totalAudits = useMemo(
    () => options.reduce((sum, o) => sum + o.count, 0),
    [options]
  );

  if (options.length === 0) return null;
  const placeholder = allLabel ?? `All ${filterLabel.toLowerCase()}s`;

  return (
    <div className="flex items-center gap-2">
      {/* The uppercase WHEN/CHANNEL/INDUSTRY/PERSONA/BRAND labels are
          useful on desktop but eat vertical space on mobile (each filter
          ends up on its own row). Hide them below sm: so the pills wrap
          inline as chips; the pill itself already shows "All <thing>"
          when nothing is selected. */}
      <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wide text-muted">
        {filterLabel}
      </span>
      <div className="relative" ref={containerRef}>
        <button
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
            selected
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {selectedLabel ? (
            <>
              <span className="max-w-[16ch] truncate">{selectedLabel}</span>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(null);
                  setQuery("");
                }}
                className="text-white/80 hover:text-white"
                aria-label={`Clear ${filterLabel.toLowerCase()} filter`}
                role="button"
              >
                ✕
              </span>
            </>
          ) : (
            <>
              <span>{placeholder}</span>
              <span className="text-muted text-xs font-normal">
                ({options.length})
              </span>
            </>
          )}
          <span className="text-xs opacity-70">▾</span>
        </button>

        {open && (
          <div className="absolute z-20 mt-2 w-80 max-w-[calc(100vw-2rem)] bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <div className="px-3 pt-3 pb-2 border-b border-gray-100">
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${options.length} ${filterLabel.toLowerCase()}${
                  options.length === 1 ? "" : "s"
                }…`}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-400"
              />
              <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted">
                <span>{totalAudits} audits total</span>
                {selected && (
                  <button
                    onClick={() => {
                      onSelect(null);
                      setQuery("");
                      setOpen(false);
                    }}
                    className="text-sky-700 hover:text-sky-900 underline"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
            <ul className="max-h-72 overflow-y-auto py-1">
              {filtered.length === 0 ? (
                <li className="px-3 py-3 text-sm text-muted">No matches.</li>
              ) : (
                filtered.map((o) => {
                  const isSelected = o.key === selected;
                  return (
                    <li key={o.key}>
                      <button
                        onClick={() => {
                          onSelect(o.key);
                          setQuery("");
                          setOpen(false);
                        }}
                        className={`w-full flex items-center justify-between gap-3 px-3 py-2 text-sm text-left ${
                          isSelected
                            ? "bg-gray-900 text-white"
                            : "hover:bg-gray-50 text-gray-800"
                        }`}
                      >
                        <span className="truncate">{o.label}</span>
                        <span
                          className={`shrink-0 text-xs tabular-nums ${
                            isSelected ? "text-white/80" : "text-muted"
                          }`}
                        >
                          {o.count}
                        </span>
                      </button>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
