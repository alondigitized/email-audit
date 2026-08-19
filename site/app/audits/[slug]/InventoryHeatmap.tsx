import type { InventoryAudit } from "@/lib/schema/audit";

type Variant = InventoryAudit["plps"][number]["styles"][number]["variants"][number];

// Skechers PDP URLs end in `<style-number>_<color-code>.html`, e.g.
// /dlites---spring-bloom/150553_PNK.html. We parse that into "150553 PNK"
// so the heatmap row labels match what the brand's PDP shows under
// "Style #:". Falls back to null on URLs that don't follow the pattern
// (Skechers promo / redirect URLs) — caller drops back to rank.
export function parseStyleSku(pdpUrl: string | null | undefined): string | null {
  if (!pdpUrl) return null;
  try {
    const u = new URL(pdpUrl);
    const last = (u.pathname.split("/").filter(Boolean).pop() ?? "").replace(
      /\.html?$/i,
      ""
    );
    if (!/^[0-9A-Za-z]+_[0-9A-Za-z]+$/.test(last)) return null;
    return last.replace("_", " ");
  } catch {
    return null;
  }
}

// Sort sizes numerically by their leading float — handles "5", "5.0", "5.5",
// "10.5", "13" correctly. Non-numeric labels (e.g. "Medium" — shouldn't be
// here after the size/width split, but defensive) sort to the end.
function sortSizes(sizes: string[]): string[] {
  return [...sizes].sort((a, b) => {
    const fa = parseFloat(a);
    const fb = parseFloat(b);
    if (isFinite(fa) && isFinite(fb)) return fa - fb;
    if (isFinite(fa)) return -1;
    if (isFinite(fb)) return 1;
    return a.localeCompare(b);
  });
}

// Coverage → discrete bucket → Tailwind class. Five buckets is enough to
// see voids without overwhelming the palette; named tones (rose / amber /
// emerald) ramp the same direction the rest of the audit page uses.
function coverageClass(pct: number, hasData: boolean): string {
  if (!hasData) return "bg-gray-100";
  if (pct >= 0.8) return "bg-emerald-500";
  if (pct >= 0.6) return "bg-emerald-300";
  if (pct >= 0.4) return "bg-amber-300";
  if (pct >= 0.2) return "bg-rose-300";
  return "bg-rose-500";
}

function binaryClass(state: "available" | "unavailable" | "missing"): string {
  if (state === "available") return "bg-emerald-500";
  if (state === "unavailable") return "bg-rose-500";
  return "bg-gray-200";
}

type AggCell = { available: number; total: number };

function buildAggregate(
  inventory: InventoryAudit,
  sizeAxis: string[]
): { plps: string[]; cells: Map<string, Map<string, AggCell>> } {
  const cells = new Map<string, Map<string, AggCell>>();
  const plps: string[] = [];
  for (const plp of inventory.plps) {
    if (plp.error) continue;
    plps.push(plp.category);
    const sizeMap = new Map<string, AggCell>();
    for (const sz of sizeAxis) sizeMap.set(sz, { available: 0, total: 0 });
    for (const style of plp.styles) {
      for (const v of style.variants) {
        for (const s of v.sizes) {
          const cell = sizeMap.get(s.size);
          if (!cell) continue;
          cell.total += 1;
          if (s.available) cell.available += 1;
        }
      }
    }
    cells.set(plp.category, sizeMap);
  }
  return { plps, cells };
}

type DetailRow = {
  plp: string;
  styleRank: number;
  styleName: string;
  color: string;
  width: string | null;
  variant: Variant;
};

function buildDetailRows(inventory: InventoryAudit): DetailRow[] {
  const out: DetailRow[] = [];
  for (const plp of inventory.plps) {
    if (plp.error) continue;
    for (const style of plp.styles) {
      for (const v of style.variants) {
        out.push({
          plp: plp.category,
          styleRank: style.rank,
          styleName: style.name,
          color: v.color,
          width: v.width ?? null,
          variant: v,
        });
      }
    }
  }
  return out;
}

// Canonical size axis used by both heatmap views — extracted so callers
// can render the category and variant matrices independently.
function sizeAxisOf(inventory: InventoryAudit): string[] {
  const seen = new Set<string>();
  for (const plp of inventory.plps) {
    if (plp.error) continue;
    for (const style of plp.styles) {
      for (const v of style.variants) {
        for (const s of v.sizes) seen.add(s.size);
      }
    }
  }
  return sortSizes([...seen]);
}

// Category × size visual replacement for the markdown "Inventory summary"
// table. Renders alone (no surrounding chrome) so the same component
// works at the top of Content Review and inside the Variants tab.
export function InventoryCoverageMatrix({
  inventory,
  totals,
}: {
  inventory: InventoryAudit;
  // Render the headline "N styles · N variants · X% coverage" line above
  // the matrix. Off in the Variants tab where the same numbers appear in
  // the surrounding header copy.
  totals?: boolean;
}) {
  const sizeAxis = sizeAxisOf(inventory);
  if (sizeAxis.length === 0) return null;
  const { plps, cells } = buildAggregate(inventory, sizeAxis);
  const t = inventory.totals;
  const pct = (t.avg_size_coverage * 100).toFixed(0);

  return (
    <section>
      <h3 className="text-sm font-semibold mb-1">
        Coverage by category × size
      </h3>
      {totals && (
        <p className="text-xs mb-2">
          <span className="font-semibold tabular-nums">{t.styles}</span>{" "}
          styles ·{" "}
          <span className="font-semibold tabular-nums">{t.variants}</span>{" "}
          (color, width) variants ·{" "}
          <span className="font-semibold tabular-nums">{pct}%</span> avg size
          coverage
        </p>
      )}
      <p className="text-xs text-muted mb-3">
        Each cell = % of variants in that category where the size is in
        stock. Vertical bands = sizes that are dead across the catalog;
        horizontal bands = categories that are thin everywhere.
      </p>
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <table className="text-[10px] border-separate border-spacing-0.5">
          <thead>
            <tr>
              <th className="text-right pr-2 font-normal text-muted whitespace-nowrap"></th>
              {sizeAxis.map((s) => (
                <th
                  key={s}
                  className="text-center font-normal text-muted whitespace-nowrap w-7"
                >
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {plps.map((plp) => {
              const sizeMap = cells.get(plp)!;
              return (
                <tr key={plp}>
                  <td className="text-right pr-2 font-medium text-gray-800 whitespace-nowrap text-xs">
                    {plp}
                  </td>
                  {sizeAxis.map((sz) => {
                    const c = sizeMap.get(sz)!;
                    const has = c.total > 0;
                    const pct = has ? c.available / c.total : 0;
                    const label = has
                      ? `${plp} · ${sz}: ${c.available}/${c.total} (${(pct * 100).toFixed(0)}%)`
                      : `${plp} · ${sz}: not offered`;
                    return (
                      <td
                        key={sz}
                        title={label}
                        className={`w-7 h-6 rounded-[3px] ${coverageClass(pct, has)}`}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Legend />
    </section>
  );
}

// Per-variant × size grid, extracted so the consolidated single-page
// inventory layout can drop it inside the variant-detail block without
// duplicating the category × size matrix above it.
export function InventoryVariantMatrix({
  inventory,
}: {
  inventory: InventoryAudit;
}) {
  const sizeAxis = sizeAxisOf(inventory);
  if (sizeAxis.length === 0) return null;
  const detail = buildDetailRows(inventory);

  return (
    <section>
      <h3 className="text-sm font-semibold mb-1">
        Coverage by variant × size
      </h3>
      <p className="text-xs text-muted mb-3">
        One row per (style, color, width). Green = in stock, rose = out of
        stock, gray = size not offered for this variant.
      </p>
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <table className="text-[10px] border-separate border-spacing-0.5">
          <thead>
            <tr>
              <th className="text-right pr-2 font-normal text-muted whitespace-nowrap"></th>
              {sizeAxis.map((s) => (
                <th
                  key={s}
                  className="text-center font-normal text-muted whitespace-nowrap w-5"
                >
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {detail.map((row, i) => {
              const sizeStateMap = new Map<string, "available" | "unavailable">();
              for (const s of row.variant.sizes) {
                sizeStateMap.set(
                  s.size,
                  s.available ? "available" : "unavailable"
                );
              }
              const label = `${row.plp} #${row.styleRank} · ${row.styleName} · ${row.color}${row.width ? " · " + row.width : ""}`;
              return (
                <tr key={i}>
                  <td
                    className="text-right pr-2 text-[10px] text-gray-700 whitespace-nowrap max-w-[260px] overflow-hidden text-ellipsis"
                    title={label}
                  >
                    {(() => {
                      const sku = parseStyleSku(row.variant.pdp_url);
                      return (
                        <>
                          <span className="font-semibold tabular-nums">
                            #{row.styleRank}
                          </span>{" "}
                          <span className="font-mono text-muted">
                            {sku ?? ""}
                          </span>{" "}
                          <span className="font-medium">{row.color}</span>
                          {row.width ? (
                            <span className="text-muted"> {row.width}</span>
                          ) : null}
                        </>
                      );
                    })()}
                  </td>
                  {sizeAxis.map((sz) => {
                    const state = sizeStateMap.get(sz) ?? "missing";
                    const cellLabel = `${label} · ${sz}: ${state}`;
                    return (
                      <td
                        key={sz}
                        title={cellLabel}
                        className={`w-5 h-3.5 rounded-[2px] ${binaryClass(state)}`}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// Legacy combined view — both matrices stacked. Preserved for any
// caller that still composes it; new code should reach for the two
// extracted exports directly so callers control spacing.
export function InventoryHeatmap({ inventory }: { inventory: InventoryAudit }) {
  const sizeAxis = sizeAxisOf(inventory);
  if (sizeAxis.length === 0) return null;
  return (
    <div className="mb-6 space-y-6">
      <InventoryCoverageMatrix inventory={inventory} />
      <InventoryVariantMatrix inventory={inventory} />
    </div>
  );
}

function Legend() {
  const buckets: { label: string; cls: string }[] = [
    { label: "0–20%", cls: "bg-rose-500" },
    { label: "20–40%", cls: "bg-rose-300" },
    { label: "40–60%", cls: "bg-amber-300" },
    { label: "60–80%", cls: "bg-emerald-300" },
    { label: "80–100%", cls: "bg-emerald-500" },
    { label: "n/a", cls: "bg-gray-100" },
  ];
  return (
    <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-muted">
      {buckets.map((b) => (
        <span key={b.label} className="inline-flex items-center gap-1">
          <span className={`inline-block w-3 h-3 rounded-[2px] ${b.cls}`} />
          {b.label}
        </span>
      ))}
    </div>
  );
}
