// Canonical site-journey step builder. Source of truth for *both* the
// daemon (site-monitor/site-review.mjs) and the admin UI (journey preview
// pane + scripts/verify-journey.mjs).
//
// Pure function of a persona's (flattened) journey config. No DB reads,
// no filesystem. Safe to import from any runtime — browser, server
// component, or Node CLI.
//
// Written in .mjs so site-monitor's ESM import from `../site/lib/...`
// resolves at runtime without a TypeScript build step.

export function slugifyLabel(s) {
  return (
    String(s || 'shop')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 40) || 'shop'
  );
}

/**
 * Build the ordered list of journey steps for a persona.
 *
 * Multi-target personas (persona.targets non-empty array) get one
 * direct-URL nav + one product-detail step per target. Single-target
 * personas (Walker-style, empty targets) keep the legacy 2-step
 * hamburger-drilldown to preserve menu-screenshot artifacts.
 *
 * @param {{
 *   site?: string,
 *   search_term?: string,
 *   category_path?: string[],
 *   targets?: Array<{
 *     label: string,
 *     search_term?: string,
 *     category_path?: string[]
 *   }>
 * }} persona
 * @returns {Array<{
 *   id: string,
 *   label: string,
 *   action: string,
 *   nav_path?: string,
 *   nav_top?: string,
 *   nav_sub?: string,
 *   search_term?: string
 * }>}
 */
export function buildJourneySteps(persona) {
  const p = persona || {};
  const explicitTargets =
    Array.isArray(p.targets) && p.targets.length > 0 ? p.targets : null;

  const steps = [
    { id: 'homepage', label: 'Homepage', action: 'navigate' },
    { id: 'popups', label: 'Dismiss Popups', action: 'dismiss_popups' },
    { id: 'login', label: 'Log In', action: 'login' },
  ];

  if (explicitTargets) {
    for (const t of explicitTargets) {
      const slug = slugifyLabel(t.label);
      const navPath = (t.category_path || [])
        .map((s) => String(s).toLowerCase())
        .join('/');
      steps.push({
        id: `${slug}-category`,
        label: `${t.label}: /${navPath}/`,
        action: 'nav_direct',
        nav_path: navPath,
      });
      steps.push({
        id: `${slug}-product`,
        label: `${t.label}: product detail`,
        action: 'first_product',
      });
    }
  } else {
    const path = p.category_path || [];
    const top = path[0];
    const sub = path[1];
    const slug = slugifyLabel(path[0] || 'shop');
    if (top) {
      steps.push({
        id: `${slug}-category`,
        label: `${top} category`,
        action: 'nav_category',
        nav_top: top,
      });
    }
    if (sub) {
      steps.push({
        id: `${slug}-shoes`,
        label: `${top ?? ''} > ${sub}`,
        action: 'nav_subcategory',
        nav_top: top,
        nav_sub: sub,
      });
    }
    steps.push({
      id: `${slug}-product`,
      label: 'Product detail',
      action: 'first_product',
    });
  }

  const firstSearch =
    (explicitTargets &&
      explicitTargets[0] &&
      explicitTargets[0].search_term) ||
    p.search_term ||
    '';
  steps.push({ id: 'add-to-cart', label: 'Add to Cart', action: 'add_to_cart' });
  steps.push({ id: 'cart', label: 'View Cart', action: 'view_cart' });
  steps.push({
    id: 'search',
    label: `Search "${firstSearch}"`,
    action: 'search',
    search_term: firstSearch,
  });

  return steps;
}

/**
 * Which steps are mutating and should be skipped in a --dry-run?
 */
export const MUTATING_STEP_ACTIONS = new Set(['add_to_cart', 'view_cart']);

/**
 * Collect every category URL a journey would hit. Used by the admin UI's
 * pre-save HEAD validator so the server can warn on 4xx before shipping
 * config that'll blow up on the next scheduled run.
 */
export function journeyUrls(persona) {
  const site = (persona && persona.site) || '';
  if (!site) return [];
  const steps = buildJourneySteps(persona);
  const urls = [];
  for (const s of steps) {
    if (s.action === 'nav_direct' && s.nav_path) {
      urls.push({ stepId: s.id, url: `${site.replace(/\/$/, '')}/${s.nav_path}/` });
    } else if (s.action === 'nav_category' && s.nav_top) {
      urls.push({
        stepId: s.id,
        url: `${site.replace(/\/$/, '')}/${String(s.nav_top).toLowerCase()}/`,
      });
    } else if (s.action === 'nav_subcategory' && s.nav_top && s.nav_sub) {
      urls.push({
        stepId: s.id,
        url: `${site.replace(/\/$/, '')}/${String(s.nav_top).toLowerCase()}/${String(s.nav_sub).toLowerCase()}/`,
      });
    }
  }
  return urls;
}
