import type { InventoryAudit } from "@/lib/schema/audit";
import {
  InventoryCoverageMatrix,
  InventoryVariantMatrix,
  parseStyleSku,
} from "./InventoryHeatmap";

type Inventory = InventoryAudit;

type Row = {
  plp: string;
  styleRank: number;
  styleName: string;
  styleUrl: string;
  color: string;
  width: string | null;
  available: number;
  total: number;
  pct: number;
  missingSizes: string[];
  pdpUrl: string | null;
  screenshotKey: string | null;
  screenshotUrl: string | null;
};

function flattenRows(
  inventory: Inventory,
  signedScreenshotUrls: Record<string, string>
): Row[] {
  const rows: Row[] = [];
  for (const plp of inventory.plps) {
    if (plp.error) continue;
    for (const style of plp.styles) {
      for (const v of style.variants) {
        const missing = v.sizes.filter((s) => !s.available).map((s) => s.size);
        rows.push({
          plp: plp.category,
          styleRank: style.rank,
          styleName: style.name,
          styleUrl: style.url,
          color: v.color,
          width: v.width ?? null,
          available: v.available_count,
          total: v.total_count,
          pct: v.total_count > 0 ? v.available_count / v.total_count : 0,
          missingSizes: missing,
          pdpUrl: v.pdp_url ?? null,
          screenshotKey: v.pdp_screenshot_key ?? null,
          screenshotUrl: v.pdp_screenshot_key
            ? signedScreenshotUrls[v.pdp_screenshot_key] ?? null
            : null,
        });
      }
    }
  }
  return rows;
}

function pctClass(pct: number): string {
  if (pct >= 0.8) return "bg-emerald-50 text-emerald-800 border-emerald-200";
  if (pct >= 0.6) return "bg-amber-50 text-amber-800 border-amber-200";
  return "bg-rose-50 text-rose-800 border-rose-200";
}

// Variant-detail block used inside the consolidated single-page
// inventory layout. Drops the redundant "X variants across Y
// categories" header line — the totals already render in the
// coverage-matrix card above this block. Includes the per-variant ×
// size heatmap, then the existing mobile cards / desktop table.
export function InventoryVariantDetail({
  inventory,
  signedScreenshotUrls,
  csvUrl,
}: {
  inventory: Inventory;
  signedScreenshotUrls: Record<string, string>;
  csvUrl: string | null;
}) {
  const rows = flattenRows(inventory, signedScreenshotUrls);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-sm font-semibold m-0">Variant detail</h3>
        {csvUrl && (
          <a
            href={csvUrl}
            className="text-sm font-medium text-sky-700 hover:text-sky-900 underline"
          >
            Download spreadsheet (CSV)
          </a>
        )}
      </div>

      <div className="mb-6">
        <InventoryVariantMatrix inventory={inventory} />
      </div>

      <h4 className="text-xs uppercase tracking-wide text-muted mb-3 mt-2">
        Every variant — click a row for the PDP screenshot
      </h4>

      {/* Mobile: stacked cards */}
      <ul className="sm:hidden flex flex-col gap-3">
        {rows.map((r, i) => (
          <li
            key={i}
            className="bg-white border border-gray-200 rounded-2xl p-4"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wide text-muted">
                  {r.plp}{" "}
                  <span className="normal-case font-semibold text-gray-700">
                    · position #{r.styleRank}
                  </span>
                </div>
                <a
                  href={r.styleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-sm break-words text-sky-700 underline"
                >
                  {r.styleName}
                </a>
                <div className="text-xs text-muted mt-0.5">
                  <span className="font-mono">
                    {parseStyleSku(r.pdpUrl) ?? `#${r.styleRank}`}
                  </span>{" "}
                  · {r.color}
                  {r.width ? ` · ${r.width}` : ""}
                </div>
              </div>
              <span
                className={`shrink-0 inline-flex items-baseline gap-1 px-2 py-1 rounded-lg text-xs font-semibold tabular-nums border ${pctClass(r.pct)}`}
              >
                {r.available}/{r.total}
                <span className="text-[10px] font-normal opacity-80">
                  {(r.pct * 100).toFixed(0)}%
                </span>
              </span>
            </div>
            {r.missingSizes.length > 0 && (
              <div className="text-[11px] text-rose-700 mb-2 break-words">
                missing: {r.missingSizes.join(", ")}
              </div>
            )}
            {r.screenshotUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <a href={r.screenshotUrl} target="_blank" rel="noreferrer">
                <img
                  src={r.screenshotUrl}
                  alt={`${r.styleName} ${r.color}${r.width ? " " + r.width : ""}`}
                  className="w-full rounded-xl border border-gray-200"
                  loading="lazy"
                />
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop: table */}
      <div className="hidden sm:block bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-muted">
            <tr>
              <th className="px-3 py-2 font-medium">Category</th>
              <th className="px-3 py-2 font-medium text-right">Pos.</th>
              <th className="px-3 py-2 font-medium">Style</th>
              <th className="px-3 py-2 font-medium">Color</th>
              <th className="px-3 py-2 font-medium">Width</th>
              <th className="px-3 py-2 font-medium text-right">Avail / Total</th>
              <th className="px-3 py-2 font-medium">Missing</th>
              <th className="px-3 py-2 font-medium">Proof</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-gray-100 align-top">
                <td className="px-3 py-2 text-muted whitespace-nowrap">
                  {r.plp}
                </td>
                <td
                  className="px-3 py-2 text-right font-semibold tabular-nums whitespace-nowrap"
                  title={`Merchandised position #${r.styleRank} in ${r.plp}`}
                >
                  #{r.styleRank}
                </td>
                <td className="px-3 py-2">
                  <a
                    href={r.styleUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-700 underline"
                  >
                    {r.styleName}
                  </a>
                  <div className="text-[11px] text-muted font-mono">
                    {parseStyleSku(r.pdpUrl) ?? `#${r.styleRank}`}
                  </div>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">{r.color}</td>
                <td className="px-3 py-2 text-muted whitespace-nowrap">
                  {r.width ?? "—"}
                </td>
                <td className="px-3 py-2 text-right">
                  <span
                    className={`inline-flex items-baseline gap-1 px-2 py-0.5 rounded-md text-xs font-semibold tabular-nums border ${pctClass(r.pct)}`}
                  >
                    {r.available}/{r.total}
                    <span className="text-[10px] font-normal opacity-80">
                      {(r.pct * 100).toFixed(0)}%
                    </span>
                  </span>
                </td>
                <td className="px-3 py-2 text-xs text-rose-700 break-words max-w-[260px]">
                  {r.missingSizes.length === 0
                    ? "—"
                    : r.missingSizes.join(", ")}
                </td>
                <td className="px-3 py-2">
                  {r.screenshotUrl ? (
                    <a
                      href={r.screenshotUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-sky-700 underline"
                    >
                      view
                    </a>
                  ) : (
                    <span className="text-xs text-muted">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Legacy export — kept so any external import path still resolves. The
// consolidated layout in AuditBody calls InventoryVariantDetail directly
// and stacks the coverage matrix in its own card above.
export function InventoryPane(props: {
  inventory: Inventory;
  signedScreenshotUrls: Record<string, string>;
  csvUrl: string | null;
}) {
  return (
    <div>
      <InventoryCoverageMatrix inventory={props.inventory} totals />
      <div className="mt-6">
        <InventoryVariantDetail {...props} />
      </div>
    </div>
  );
}
