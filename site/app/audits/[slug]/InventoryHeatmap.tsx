import type { InventoryAudit } from "@/lib/schema/audit";
import { sizeDemandWeight, isCoreSize, weightedCoverage } from "@/lib/schema/size-demand.mjs";

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

// ── Size systems ─────────────────────────────────────────────────────────
//
// A mixed audit (Iris's sale rack: men's shoes + women's shoes + apparel)
// carries THREE incompatible size vocabularies. A single unioned axis
// renders shoe-size columns on apparel rows and XS–3XL columns on shoe
// rows — sizes that don't exist for those products — so the matrices are
// built per system and rendered as separate grids.
//
// Also fixes a latent sort bug: parseFloat("3XL") === 3, so apparel 2XL/3XL
// previously sorted in among the numeric shoe sizes.
export type SizeSystem = "numeric" | "alpha" | "unified";

export function sizeSystemOf(size: string): SizeSystem {
  const s = size.trim();
  if (/^\d+X/i.test(s)) return "alpha"; // 2XL / 3XL before the numeric test
  if (/^\d+(\.\d+)?$/.test(s)) return "numeric";
  if (/M\s*\d/i.test(s) && /W\s*\d/i.test(s)) return "unified"; // "M 4 / W 5.5"
  return "alpha"; // XS / S / M / L / XL / XXL …
}

// Demand profile for weighting. New audits carry size_profile; legacy rows
// are inferred from the scope string ("women's shoes", "boys' sale ...").
export function demandProfileOf(inventory: InventoryAudit): string {
  const sp = (inventory as { size_profile?: string }).size_profile;
  if (sp) return sp;
  const scope = (inventory.scope ?? "").toLowerCase();
  if (/women/.test(scope)) return "womens";
  if (/\bmen/.test(scope)) return "mens";
  if (/girl/.test(scope)) return "girls";
  if (/boy/.test(scope)) return "boys";
  return "unknown";
}

const SYSTEM_LABEL: Record<SizeSystem, string> = {
  numeric: "Shoe sizes",
  alpha: "Apparel sizes",
  unified: "Unisex sizes (M / W)",
};

// Canonical apparel ordering — localeCompare puts 3XL before XS.
const ALPHA_ORDER = [
  "XXS", "XS", "S", "M", "L", "XL", "XXL", "2XL", "XXXL", "3XL", "4XL",
];

function sortSizes(sizes: string[]): string[] {
  return [...sizes].sort((a, b) => {
    const sysA = sizeSystemOf(a);
    const sysB = sizeSystemOf(b);
    if (sysA !== sysB) return sysA.localeCompare(sysB);
    if (sysA === "alpha") {
      const ia = ALPHA_ORDER.indexOf(a.trim().toUpperCase());
      const ib = ALPHA_ORDER.indexOf(b.trim().toUpperCase());
      if (ia !== -1 && ib !== -1) return ia - ib;
      if (ia !== -1) return -1;
      if (ib !== -1) return 1;
      return a.localeCompare(b);
    }
    const fa = parseFloat(a);
    const fb = parseFloat(b);
    if (isFinite(fa) && isFinite(fb)) return fa - fb;
    return a.localeCompare(b);
  });
}

// Coverage → 10% buckets → color. Ten steps needs a real ramp, not
// Tailwind's named shades: rose (bad) through amber into emerald (good),
// same direction the rest of the audit page uses. Index = floor(pct*10).
const COVERAGE_RAMP = [
  "#be123c", // 0–10%   rose-700
  "#e11d48", // 10–20%  rose-600
  "#f43f5e", // 20–30%  rose-500
  "#fb7185", // 30–40%  rose-400
  "#fda4af", // 40–50%  rose-300
  "#fcd34d", // 50–60%  amber-300
  "#fbbf24", // 60–70%  amber-400
  "#bef264", // 70–80%  lime-300
  "#6ee7b7", // 80–90%  emerald-300
  "#10b981", // 90–100% emerald-500
];

function coverageColor(pct: number, hasData: boolean): string {
  if (!hasData) return "#f3f4f6"; // gray-100
  const idx = Math.min(9, Math.max(0, Math.floor(pct * 10)));
  return COVERAGE_RAMP[idx];
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

// Canonical size axes used by both heatmap views, ONE PER SIZE SYSTEM.
// Returned in a stable order (numeric shoes first, then apparel, then
// unified) so mixed audits render predictably; single-system audits
// (ivy/ian/ida/ike) yield exactly one axis and render as before.
function sizeAxesOf(
  inventory: InventoryAudit
): { system: SizeSystem; axis: string[] }[] {
  const bySystem = new Map<SizeSystem, Set<string>>();
  for (const plp of inventory.plps) {
    if (plp.error) continue;
    for (const style of plp.styles) {
      for (const v of style.variants) {
        for (const s of v.sizes) {
          const sys = sizeSystemOf(s.size);
          if (!bySystem.has(sys)) bySystem.set(sys, new Set());
          bySystem.get(sys)!.add(s.size);
        }
      }
    }
  }
  const order: SizeSystem[] = ["numeric", "alpha", "unified"];
  return order
    .filter((sys) => bySystem.has(sys))
    .map((sys) => ({ system: sys, axis: sortSizes([...bySystem.get(sys)!]) }));
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
  const axes = sizeAxesOf(inventory);
  if (axes.length === 0) return null;
  const profile = demandProfileOf(inventory);
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
      {axes.map(({ system, axis }) => {
        const { plps, cells } = buildAggregate(inventory, axis);
        // Only categories that actually sell in this size system — a
        // category with zero data here would render an all-gray row of
        // sizes its products never carried.
        const activePlps = plps.filter((plp) =>
          [...cells.get(plp)!.values()].some((c) => c.total > 0)
        );
        if (activePlps.length === 0) return null;
        return (
          <div key={system} className="mb-3">
            {axes.length > 1 && (
              <div className="text-[11px] uppercase tracking-wide text-muted mb-1">
                {SYSTEM_LABEL[system]}
              </div>
            )}
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="text-[10px] border-separate border-spacing-0.5">
                <thead>
                  <DemandHeader axis={axis} profile={profile} cellW="w-7" />
                </thead>
                <tbody>
                  {activePlps.map((plp) => {
                    const sizeMap = cells.get(plp)!;
                    // Demand-weighted coverage for the category: what
                    // fraction of the MARKET's demand is actually buyable.
                    let wNum = 0, wDen = 0;
                    for (const sz of axis) {
                      const c = sizeMap.get(sz)!;
                      if (c.total === 0) continue;
                      const w = sizeDemandWeight(sz, profile) as number;
                      wDen += w;
                      wNum += w * (c.available / c.total);
                    }
                    const wPct = wDen > 0 ? Math.round((wNum / wDen) * 100) : null;
                    return (
                      <tr key={plp}>
                        <td className="text-right pr-2 font-medium text-gray-800 whitespace-nowrap text-xs">
                          {plp}
                          {wPct !== null && (
                            <span
                              className="ml-1 font-semibold tabular-nums text-sky-700"
                              title="Demand-weighted coverage — % of market demand that is in stock"
                            >
                              {wPct}%
                            </span>
                          )}
                        </td>
                        {axis.map((sz) => {
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
                              className="w-7 h-6 rounded-[3px]"
                              style={{ backgroundColor: coverageColor(pct, has) }}
                            />
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
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
  const axes = sizeAxesOf(inventory);
  if (axes.length === 0) return null;
  const profile = demandProfileOf(inventory);
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
      {axes.map(({ system, axis }) => {
        // A variant renders only under the size system its own size run
        // belongs to — a women's sandal must not carry men's 14–16 columns,
        // and apparel must not carry shoe-size columns at all.
        const rows = detail.filter((row) =>
          row.variant.sizes.length > 0 &&
          sizeSystemOf(row.variant.sizes[0].size) === system
        );
        if (rows.length === 0) return null;
        return (
          <div key={system} className="mb-3">
            {axes.length > 1 && (
              <div className="text-[11px] uppercase tracking-wide text-muted mb-1">
                {SYSTEM_LABEL[system]}
              </div>
            )}
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="text-[10px] border-separate border-spacing-0.5">
                <thead>
                  <DemandHeader axis={axis} profile={profile} cellW="w-5" />
                </thead>
                <tbody>
                  {rows.map((row, i) => {
                    const sizeStateMap = new Map<
                      string,
                      "available" | "unavailable"
                    >();
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
                        {axis.map((sz) => {
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
          </div>
        );
      })}
    </section>
  );
}

// Legacy combined view — both matrices stacked. Preserved for any
// caller that still composes it; new code should reach for the two
// extracted exports directly so callers control spacing.
export function InventoryHeatmap({ inventory }: { inventory: InventoryAudit }) {
  if (sizeAxesOf(inventory).length === 0) return null;
  return (
    <div className="mb-6 space-y-6">
      <InventoryCoverageMatrix inventory={inventory} />
      <InventoryVariantMatrix inventory={inventory} />
    </div>
  );
}

// Header block for one size axis: a demand-curve bar row (taller bar =
// more of the market wears that size) above the size labels, with the
// core "gut" sizes bolded. Makes the bell curve visible so a red cell
// under a tall bar reads as the emergency it is.
function DemandHeader({ axis, profile, cellW }: { axis: string[]; profile: string; cellW: string }) {
  return (
    <>
      <tr>
        <th className="text-right pr-2 align-bottom font-normal text-[9px] text-muted whitespace-nowrap">
          demand
        </th>
        {axis.map((s) => {
          const w = sizeDemandWeight(s, profile) as number;
          return (
            <th key={s} className={`${cellW} align-bottom`} title={`${s}: ~${Math.round(w * 100)}% of peak demand`}>
              <div
                className={`mx-auto w-2/3 rounded-t-[2px] ${w >= 0.7 ? "bg-sky-500" : "bg-sky-200"}`}
                style={{ height: `${Math.max(2, Math.round(w * 18))}px` }}
              />
            </th>
          );
        })}
      </tr>
      <tr>
        <th className="text-right pr-2 font-normal text-muted whitespace-nowrap"></th>
        {axis.map((s) => (
          <th
            key={s}
            className={`text-center whitespace-nowrap ${cellW} ${
              isCoreSize(s, profile) ? "font-bold text-gray-900" : "font-normal text-muted"
            }`}
          >
            {s}
          </th>
        ))}
      </tr>
    </>
  );
}

function Legend() {
  return (
    <div className="mt-2 flex flex-wrap items-center gap-4 text-[11px] text-muted">
      <span className="inline-flex items-center gap-1.5">
        0%
        <span className="inline-flex overflow-hidden rounded-[3px]">
          {COVERAGE_RAMP.map((c, i) => (
            <span
              key={c}
              className="inline-block w-4 h-3"
              style={{ backgroundColor: c }}
              title={`${i * 10}–${(i + 1) * 10}%`}
            />
          ))}
        </span>
        100%
      </span>
      <span className="inline-flex items-center gap-1">
        <span
          className="inline-block w-3 h-3 rounded-[2px]"
          style={{ backgroundColor: "#f3f4f6" }}
        />
        n/a
      </span>
    </div>
  );
}
