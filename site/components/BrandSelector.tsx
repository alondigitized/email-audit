"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface BrandOption {
  key: string;
  label: string;
  count: number;
}

interface Props {
  brands: BrandOption[];
  selected: string | null;
  onSelect: (key: string | null) => void;
}

// Searchable combobox for the brand filter. Persona selector renders as a
// row of pills because there are 4-6 of those total; the brand list runs
// 50-200+, so a flat pill row would dominate the page. Instead: a single
// trigger button that opens a panel with a search input + scrollable list
// of brand pills with audit counts.
//
// Closes on outside-click or Escape. Search is plain substring match on
// the brand label; sorted by audit count desc so the most-active brands
// stay on top regardless of query.
export function BrandSelector({ brands, selected, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Outside-click + Escape to close.
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

  // Focus the search input when the panel opens.
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? brands.filter((b) => b.label.toLowerCase().includes(q))
      : brands;
    return list.slice(0, 200);
  }, [brands, query]);

  const selectedLabel = selected
    ? brands.find((b) => b.key === selected)?.label ?? selected
    : null;
  const totalAudits = useMemo(
    () => brands.reduce((sum, b) => sum + b.count, 0),
    [brands]
  );

  if (brands.length === 0) return null;

  return (
    <div className="flex items-center gap-2 mb-4 flex-wrap">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted">
        Brand
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
                aria-label="Clear brand filter"
                role="button"
              >
                ✕
              </span>
            </>
          ) : (
            <>
              <span>All brands</span>
              <span className="text-muted text-xs font-normal">
                ({brands.length})
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
                placeholder={`Search ${brands.length} brands…`}
                className="w-full px-3 py-2 text-sm rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-400"
              />
              <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted">
                <span>{totalAudits} audits across all brands</span>
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
                filtered.map((b) => {
                  const isSelected = b.key === selected;
                  return (
                    <li key={b.key}>
                      <button
                        onClick={() => {
                          onSelect(b.key);
                          setQuery("");
                          setOpen(false);
                        }}
                        className={`w-full flex items-center justify-between gap-3 px-3 py-2 text-sm text-left ${
                          isSelected
                            ? "bg-gray-900 text-white"
                            : "hover:bg-gray-50 text-gray-800"
                        }`}
                      >
                        <span className="truncate">{b.label}</span>
                        <span
                          className={`shrink-0 text-xs tabular-nums ${
                            isSelected ? "text-white/80" : "text-muted"
                          }`}
                        >
                          {b.count}
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
