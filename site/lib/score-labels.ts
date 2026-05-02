// Single source of truth for score labels across the app. The audit
// data layer keeps the same field names everywhere (`open_likelihood`,
// `click_likelihood`) — these are routing keys, not user-visible
// language. The presentation layer reads `audit.type` and renders
// channel-appropriate labels via this helper.
//
// Email      → "Open"  / "Click"      (compact: "O" / "C")
// Site/Web   → "Visit" / "Conversion" (compact: "V" / "C")
//
// Business impact / overall is the same across both channels — it's the
// 1-10 number that already lives in `review.score`.

export type AuditChannel = "email" | "site" | undefined | null;

export type ScoreLabels = {
  // Pretty label for the 1-10 score badge ("Business impact" everywhere).
  business: string;
  // Funnel-step labels (full + 1-letter short for compact pills).
  firstStep: string;
  firstStepShort: string;
  secondStep: string;
  secondStepShort: string;
};

export function scoreLabels(channel: AuditChannel): ScoreLabels {
  if (channel === "site") {
    return {
      business: "Business impact",
      firstStep: "Visit",
      firstStepShort: "V",
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
