// Demand-weighted size coverage.
//
// A missing men's 10 and a missing men's 16 are not the same finding: size
// demand is a bell curve, and the "gut" sizes carry most of the sales
// volume. Raw avg_size_coverage treats every size equally, which lets a
// full tail (14/15/16 in stock) mask a hollowed-out core. These weights
// skew coverage — and the heatmap that displays it — toward what is
// actually worth money on the shelf.
//
// Shared source of truth: imported by the site (heatmap, variant tables)
// AND by site-monitor/inventory/audit.mjs (totals, score, narrative
// prompt), same pattern as audit.mjs zod schemas.
//
// Weights are approximations of US retail sell-through by size (mens peak
// ~10, womens ~8, apparel peaks M/L). They don't need to be exact to be
// useful — they need to rank a size-10 hole above a size-16 hole.

// Persona slug → size profile. Lets the UI weight LEGACY audits that were
// published before size_profile landed in the inventory blob.
const SLUG_PROFILE = [
  [/ivy|iris/, 'womens'],
  [/ian|irwin/, 'mens'],
  [/ida|izzy/, 'girls'],
  [/ike|iggy/, 'boys'],
];

export function profileForPersona(personaSlug) {
  for (const [re, profile] of SLUG_PROFILE) {
    if (re.test(personaSlug ?? '')) return profile;
  }
  return 'unknown';
}

function gaussian(x, mean, sd) {
  return Math.exp(-((x - mean) ** 2) / (2 * sd * sd));
}

// Apparel demand by ordered size. M/L are the fat middle.
const ALPHA_WEIGHT = {
  XXS: 0.3, XS: 0.55, S: 0.85, M: 1.0, L: 1.0, XL: 0.8,
  XXL: 0.55, '2XL': 0.55, XXXL: 0.35, '3XL': 0.35, '4XL': 0.25,
};

// Kids shoe sizing wraps: little-kid 10.5–13.5 then big-kid 1–7. Both
// bands sell; the extremes (toddler <10.5, youth 6.5–7) taper.
function kidsWeight(n) {
  if (n >= 10.5) return n >= 12 ? 1.0 : 0.85;  // little kid, 12–13.5 peak
  if (n >= 1 && n <= 4) return 1.0;             // grade school peak
  if (n <= 6) return 0.8;
  return 0.6;                                    // youth 6.5–7 tail
}

/**
 * Demand weight for one size label under a profile. Returns 0..1.
 * Unknown profiles (or unparseable labels) weight 1 — no skew, so the
 * math degrades to the old unweighted coverage rather than guessing.
 */
export function sizeDemandWeight(size, profile) {
  const s = String(size ?? '').trim();
  if (!s) return 1;
  const upper = s.toUpperCase();
  if (upper in ALPHA_WEIGHT) return ALPHA_WEIGHT[upper];

  // Unified "M 9 / W 10.5" — weight by the men's number on a mens curve.
  const uni = upper.match(/M\s*(\d+(?:\.\d+)?)\s*\/\s*W/);
  if (uni) return Math.max(0.15, gaussian(parseFloat(uni[1]), 10, 2.0));

  const n = parseFloat(s);
  if (!isFinite(n)) return 1;
  switch (profile) {
    case 'mens':
      // peak 10, sd 1.9 → 8=0.57 9=0.87 10=1 11=0.87 12=0.57 13=0.29 14=0.11 16=0.007
      return Math.max(0.05, gaussian(n, 10, 1.9));
    case 'womens':
      // peak 8, sd 1.6 → 6=0.46 7=0.82 8=1 9=0.82 10=0.46 11=0.17 12=0.04
      return Math.max(0.05, gaussian(n, 8, 1.6));
    case 'girls':
    case 'boys':
      return kidsWeight(n);
    default:
      return 1;
  }
}

/** A size is "core" when it carries ≥70% of peak demand — the gut of the
 * bell. The UI bolds these columns; missing-size lists lead with them. */
export function isCoreSize(size, profile) {
  return sizeDemandWeight(size, profile) >= 0.7;
}

/**
 * Resolve the effective profile for ONE variant from its own size run.
 * Gender-scoped PLPs are not gender-pure: a Little Kid style (style code
 * suffix L, sizes 1-3.5) was found at position #1 of the women's Work &
 * Safety PLP, and unisex John Deere styles run 5.0-16.0 on men's pages.
 * Weighting a kids run on the womens curve calls its PEAK sizes a deep
 * tail — so when the run is unmistakably kids (max numeric size <= 7 on
 * an adult profile), switch that variant to the kids curve.
 */
export function resolveProfile(sizes, profile) {
  if (profile !== 'mens' && profile !== 'womens') return profile;
  const nums = (sizes ?? [])
    .map((s) => parseFloat(typeof s === 'string' ? s : s?.size))
    .filter((n) => isFinite(n));
  if (nums.length === 0) return profile;
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  if (max <= 7 && min <= 3.5) return profile === 'mens' ? 'boys' : 'girls';
  return profile;
}

/**
 * Demand-weighted coverage for one variant's size list
 * ([{size, available}]) → 0..1. Weighted fraction of demand that is
 * actually buyable: losing size 10 costs ~9× losing size 13.
 * Applies resolveProfile per variant, so an off-profile kids product on
 * an adult PLP is judged on the kids curve rather than as all-tail.
 */
export function weightedCoverage(sizes, profile) {
  const eff = resolveProfile(sizes, profile);
  let num = 0, den = 0;
  for (const s of sizes ?? []) {
    const w = sizeDemandWeight(s.size, eff);
    den += w;
    if (s.available) num += w;
  }
  return den > 0 ? num / den : 0;
}

/** Sort a list of size labels by demand, highest first — for "missing
 * sizes" displays, so the reader sees the expensive holes first. */
export function sortByDemand(sizes, profile) {
  return [...sizes].sort(
    (a, b) => sizeDemandWeight(b, profile) - sizeDemandWeight(a, profile)
  );
}
