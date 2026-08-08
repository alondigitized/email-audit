// Single source of truth for score labels across the app. The audit
// data layer keeps the same field names everywhere (`open_likelihood`,
// `click_likelihood`) — these are routing keys, not user-visible
// language. The presentation layer reads `audit.type` and renders
// channel-appropriate labels via this helper.
//
// Email      → "Open"     / "Click"      (compact: "O"  / "Cl")
// Site/Web   → "Engage"   / "Conversion" (compact: "E"  / "Cv")
// Inventory  → "Discover" / "Pick"       (compact: "D"  / "P")
// QA         → "Findable" / "Usable"     (compact: "F"  / "U")
//
// "Engage" replaces "Visit" because the persona is already on the
// homepage — the question is whether they scroll or interact, not
// whether they show up. Conversion = clicked a CTA, added to cart,
// signed up, etc.
//
// Inventory has its own funnel because the persona is a secret-shopper
// scanning a category page (Discover = did they find a style worth
// considering) then a PDP (Pick = was the size/color they need
// available). open_likelihood / click_likelihood are usually null on
// inventory audits since the producer doesn't emit predictions — but
// the labels are wired so that any predictions a future inventory
// prompt does write get sensible labels.
//
// Business impact / overall is the same across all channels — it's the
// 1-10 number that already lives in `review.score`.

// QA is a secret-shopper journey hunting defects, so its funnel asks whether
// the shopper could FIND what they came for and then USE the page to act on
// it — the two things a defect actually breaks.
export type AuditChannel =
  | "email"
  | "site"
  | "inventory"
  | "qa"
  | undefined
  | null;

export type ScoreLabels = {
  // Pretty label for the 1-10 score badge ("Business impact" everywhere).
  business: string;
  // Funnel-step labels (full + short for compact pills).
  firstStep: string;
  firstStepShort: string;
  secondStep: string;
  secondStepShort: string;
};

export function scoreLabels(channel: AuditChannel): ScoreLabels {
  if (channel === "qa") {
    return {
      business: "Business impact",
      firstStep: "Findable",
      firstStepShort: "F",
      secondStep: "Usable",
      secondStepShort: "U",
    };
  }
  if (channel === "inventory") {
    return {
      business: "Business impact",
      firstStep: "Discover",
      firstStepShort: "D",
      secondStep: "Pick",
      secondStepShort: "P",
    };
  }
  if (channel === "site") {
    return {
      business: "Business impact",
      firstStep: "Engage",
      firstStepShort: "E",
      secondStep: "Conversion",
      secondStepShort: "Cv",
    };
  }
  return {
    business: "Business impact",
    firstStep: "Open",
    firstStepShort: "O",
    secondStep: "Click",
    secondStepShort: "Cl",
  };
}
