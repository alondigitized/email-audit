// Industry buckets for the activity chart.
//
// Display names from `audit.data.email.from_display_name` are messy:
// "Skechers", "SKECHERS", "skechers.com", "www.skechers.com", "SKECHERS PLUS",
// "Crate & Kids SALE", etc. We normalize hard, then match the canonical brand
// to a curated industry bucket. Anything we can't classify falls into "Other".

const BRAND_TO_INDUSTRY: Record<string, Industry> = {
  // Footwear & Athletic
  skechers: "Footwear & Athletic",
  hoka: "Footwear & Athletic",
  crocs: "Footwear & Athletic",
  nike: "Footwear & Athletic",
  adidas: "Footwear & Athletic",
  newbalance: "Footwear & Athletic",
  lululemon: "Footwear & Athletic",
  shoecarnival: "Footwear & Athletic",
  dsw: "Footwear & Athletic",
  famousfootwear: "Footwear & Athletic",
  zappos: "Footwear & Athletic",
  dickssportinggoods: "Footwear & Athletic",
  rei: "Footwear & Athletic",
  birkenstock: "Footwear & Athletic",

  // Apparel & Fashion
  zara: "Apparel & Fashion",
  hm: "Apparel & Fashion",
  forever21: "Apparel & Fashion",
  asos: "Apparel & Fashion",
  shein: "Apparel & Fashion",
  anthropologie: "Apparel & Fashion",
  oldnavy: "Apparel & Fashion",
  gap: "Apparel & Fashion",
  carters: "Apparel & Fashion",
  victoriassecret: "Apparel & Fashion",
  nordstrom: "Apparel & Fashion",

  // Beauty & Personal Care
  sephora: "Beauty & Personal Care",
  ulta: "Beauty & Personal Care",
  sallybeauty: "Beauty & Personal Care",
  glossier: "Beauty & Personal Care",
  lush: "Beauty & Personal Care",
  bathandbodyworks: "Beauty & Personal Care",

  // Home & Living
  wayfair: "Home & Living",
  crateandbarrel: "Home & Living",
  cratekids: "Home & Living",
  potterybarn: "Home & Living",
  williamssonoma: "Home & Living",

  // Big-Box & Marketplaces
  amazon: "Big-Box & Marketplaces",
  walmart: "Big-Box & Marketplaces",
  costco: "Big-Box & Marketplaces",
  target: "Big-Box & Marketplaces",
  ebay: "Big-Box & Marketplaces",
  etsy: "Big-Box & Marketplaces",
  temu: "Big-Box & Marketplaces",

  // Department Stores
  macys: "Department Stores",
  kohls: "Department Stores",
  saksfifthavenue: "Department Stores",
  qvc: "Department Stores",

  // Hardware & Auto
  homedepot: "Hardware & Auto",
  lowes: "Hardware & Auto",
  autozone: "Hardware & Auto",
  tractorsupply: "Hardware & Auto",

  // Tech & Electronics
  apple: "Tech & Electronics",
  bestbuy: "Tech & Electronics",
  dell: "Tech & Electronics",
  hp: "Tech & Electronics",
  newegg: "Tech & Electronics",
  staples: "Tech & Electronics",

  // Pets, Pharmacy & Specialty
  chewy: "Pets & Specialty",
  petsmart: "Pets & Specialty",
  cvs: "Pets & Specialty",
  walgreens: "Pets & Specialty",
  gnc: "Pets & Specialty",
  flowers1800: "Pets & Specialty",
  kroger: "Pets & Specialty",
};

export type Industry =
  | "Footwear & Athletic"
  | "Apparel & Fashion"
  | "Beauty & Personal Care"
  | "Home & Living"
  | "Big-Box & Marketplaces"
  | "Department Stores"
  | "Hardware & Auto"
  | "Tech & Electronics"
  | "Pets & Specialty"
  | "Other";

// Display order in the legend. Footwear first because Walker (the
// reference persona) is shoe-heavy; "Other" sinks to the bottom.
export const INDUSTRY_ORDER: Industry[] = [
  "Footwear & Athletic",
  "Apparel & Fashion",
  "Beauty & Personal Care",
  "Home & Living",
  "Big-Box & Marketplaces",
  "Department Stores",
  "Hardware & Auto",
  "Tech & Electronics",
  "Pets & Specialty",
  "Other",
];

// Tableau-ish palette tuned for distinguishability at small bar widths.
// "Other" gets a neutral gray so the long tail visually fades.
export const INDUSTRY_COLOR: Record<Industry, string> = {
  "Footwear & Athletic": "#4269d0",
  "Apparel & Fashion": "#ff725c",
  "Beauty & Personal Care": "#a463f2",
  "Home & Living": "#6cc5b0",
  "Big-Box & Marketplaces": "#efb118",
  "Department Stores": "#3ca951",
  "Hardware & Auto": "#9c6b4e",
  "Tech & Electronics": "#97bbf5",
  "Pets & Specialty": "#ff8ab7",
  Other: "#9498a0",
};

// Strip TLD suffixes, www., punctuation, and trailing marketing tokens
// ("plus", "stores", "sale", "rewards") so "SKECHERS PLUS" and
// "www.skechers.com" both resolve to "skechers". Exported for the
// brand-mode chart so the stacking key matches what the industry map
// is keyed on.
export function brandKeyOf(name: string | null | undefined): string {
  if (!name) return "";
  return canonicalize(name);
}

function canonicalize(name: string): string {
  let s = name.toLowerCase().trim();
  s = s.replace(/^https?:\/\//, "");
  s = s.replace(/^www\d*\./, "");
  // Trim TLD: drop ".com" / ".org" / ".net" suffix anywhere.
  s = s.replace(/\.(com|net|org|us|co)(\b|\/.*)/g, "");
  // Drop typographic apostrophes/quotes and ampersands and punctuation.
  s = s.replace(/[''`"&|/]/g, "");
  // Drop trailing marketing modifiers.
  s = s.replace(
    /\b(plus|stores|sale|sales|rewards|offers|beauty insider|home improvement|friends family|1[- ]?day only|welcome)\b/g,
    ""
  );
  // Collapse to alnum.
  s = s.replace(/[^a-z0-9]/g, "");
  // Specific aliases for tricky brands.
  if (s === "hm" || s === "hm2" || s === "h" + "m") return "hm";
  if (s.startsWith("18") && s.includes("flowers")) return "flowers1800";
  if (s.startsWith("crateandbarrel") || s === "cratebarrel") return "crateandbarrel";
  if (s.startsWith("cratekids") || s.startsWith("cratekidskidss")) return "cratekids";
  return s;
}

export function industryOf(displayName: string | null | undefined): Industry {
  if (!displayName) return "Other";
  const key = canonicalize(displayName);
  if (!key) return "Other";
  if (BRAND_TO_INDUSTRY[key]) return BRAND_TO_INDUSTRY[key];
  // Fallback: substring scan against known brand keys for compound names
  // like "Lowe's Home Improvement" → "lowes" or "Sephora Beauty Insider".
  for (const brand of Object.keys(BRAND_TO_INDUSTRY)) {
    if (key.includes(brand)) return BRAND_TO_INDUSTRY[brand];
  }
  return "Other";
}
