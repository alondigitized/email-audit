// Canonical list of industry tags used by persona_template.industry,
// personas.industry (for kind='industry'), and the producer fan-out match.
//
// Source of truth is the actual values in persona_template.industry; this
// list mirrors them so the admin form can offer autocomplete and so a typo
// at create time is more obvious. New industries can be added here as the
// catalog grows; the DB column is plain text so unknown values still
// persist (this list is advisory, not enforced).

export const KNOWN_INDUSTRIES = [
  "apparel",
  "apparel-dtc",
  "apparel-home",
  "athletic-apparel",
  "auto-parts",
  "baby",
  "beauty",
  "books",
  "children-apparel",
  "crafts",
  "department-store",
  "electronics",
  "eyewear",
  "fast-fashion",
  "footwear",
  "general",
  "gifting",
  "grocery",
  "handmade-marketplace",
  "home-cooking",
  "home-furniture",
  "home-improvement",
  "intimates",
  "jewelry",
  "luxury-fashion",
  "marketplace",
  "mattress",
  "meal-kit",
  "office-supplies",
  "outdoor",
  "personal-care",
  "pet",
  "pharmacy-drugstore",
  "rural-farm",
  "sporting-goods",
  "subscription-box",
  "toys",
  "tv-shopping",
  "ultra-cheap-marketplace",
  "ultra-fast-fashion",
  "wellness",
  "wholesale",
  "wine-spirits",
] as const;

export type KnownIndustry = (typeof KNOWN_INDUSTRIES)[number];
