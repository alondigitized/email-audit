// Single source of truth for score labels across the app. The audit
// data layer keeps the same field names everywhere (`open_likelihood`,
// `click_likelihood`) — these are routing keys, not user-visible
// language. The presentation layer reads `audit.type` and renders
// channel-appropriate labels via this helper.
//
// Email      → "Open"   / "Click"      (compact: "O" / "Cl")
// Site/Web   → "Engage" / "Conversion" (compact: "E" / "Cv")
//
// "Engage" replaces "Visit" because the persona is already on the
// homepage — the question is whether they scroll or interact, not
// whether they show up. Conversion = clicked a CTA, added to cart,
// signed up, etc.
//
// Business impact / overall is the same across both channels — it's the
// 1-10 number that already lives in `review.score`.

export type AuditChannel = "email" | "site" | undefined | null;

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
