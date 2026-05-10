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
  "apparel-home",
  "athletic-apparel",
  "auto-parts",
  "beauty",
  "children-apparel",
  "department-store",
  "electronics",
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
  "luxury-fashion",
  "marketplace",
  "office-supplies",
  "outdoor",
  "personal-care",
  "pet",
  "pharmacy-drugstore",
  "rural-farm",
  "sporting-goods",
  "tv-shopping",
  "ultra-cheap-marketplace",
  "ultra-fast-fashion",
  "wellness",
  "wholesale",
] as const;

export type KnownIndustry = (typeof KNOWN_INDUSTRIES)[number];
