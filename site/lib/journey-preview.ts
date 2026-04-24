// TS re-export of the journey-preview helper. Canonical source lives in
// .mjs so the daemon (site-monitor/site-review.mjs) can import it at
// runtime without a build step.

import {
  buildJourneySteps as _buildJourneySteps,
  slugifyLabel as _slugifyLabel,
  journeyUrls as _journeyUrls,
  MUTATING_STEP_ACTIONS as _MUTATING,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore — resolved at runtime; tsconfig allowJs covers .mjs imports
} from "./journey-preview.mjs";

export type JourneyTarget = {
  label: string;
  search_term?: string | null;
  category_path?: string[];
};

export type JourneyPersona = {
  site?: string | null;
  search_term?: string | null;
  category_path?: string[];
  targets?: JourneyTarget[];
};

export type JourneyStep = {
  id: string;
  label: string;
  action:
    | "navigate"
    | "dismiss_popups"
    | "login"
    | "nav_direct"
    | "nav_category"
    | "nav_subcategory"
    | "first_product"
    | "add_to_cart"
    | "view_cart"
    | "search";
  nav_path?: string;
  nav_top?: string;
  nav_sub?: string;
  search_term?: string;
};

// The .mjs uses looser JSDoc types (no explicit null). Cast via unknown so
// the TS-side types permit null (which runtime tolerates — see the `|| ''`
// fallbacks inside buildJourneySteps).
export const buildJourneySteps = _buildJourneySteps as unknown as (
  p: JourneyPersona
) => JourneyStep[];
export const slugifyLabel = _slugifyLabel as unknown as (s: string) => string;
export const journeyUrls = _journeyUrls as unknown as (
  p: JourneyPersona
) => Array<{ stepId: string; url: string }>;
export const MUTATING_STEP_ACTIONS = _MUTATING as unknown as Set<string>;
