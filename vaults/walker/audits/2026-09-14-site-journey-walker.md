---
slug: 2026-09-14-site-journey-walker
type: site
date: 2026-09-14
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-09-14**
## Full review
## 1. Executive Summary

Same trip, same wall. I went looking for a comfortable, hands-free walking shoe, found one I liked, and then hit two dead ends: I couldn't log in, and after "adding to cart" the cart page showed me nothing at all — just a blank white screen. Browsing is fine, even good in spots (the Men's Shoes category page and the "comfort shoes" search are genuinely well done), but a store I can't log into and can't check out of isn't a store I can buy from on my phone.

## 2. Business Impact Score (1-10)

**2/10** — unchanged from yesterday's 2/10. Both purchase-blocking issues from yesterday (broken cart page, non-functional login) are still present, confirmed by the same network evidence: the `/cart/` request itself returned HTTP 429 during this run too.

## 3. What's Working
- Men's Shoes category page: big, clear comfort-sorted tiles (Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers)
- Men flyout menu: clean, thumb-friendly rows
- Product detail page: "HANDS FREE Slip-ins" badge front and center, plus reviews shown this time (166) where yesterday's PDP had none
- Size grid: large, clear, sold-out sizes struck through
- Search for "comfort shoes": relevant results with visible prices and swatches

## 4. What's Weak
- **Cart still completely broken** — blank white page, and the `/cart/` request itself got HTTP 429'd by the site's bot-detection layer
- **Login still a dead end** — Steps 1–3 pixel-identical again
- Cart badge never updates off "0," no add-to-cart confirmation
- Both "comfort shoes" search results labeled "Women's" — a relevance miss
- $165 shoe still "Excluded from promotions" under a blaring 20%-off banner
- No arch-support detail or cross-brand comparison content on the PDP

## 5. Recommendations
1. Fix the cart page (P0) — likely the Kasada bot-protection layer rate-limiting the `/cart/` route itself
2. Fix/re-verify the Log In tap target on mobile
3. Add visible add-to-cart confirmation (toast + badge update)
4. Stop banner-advertising discounts on excluded products
5. Tune search gender relevance
6. Surface arch-support specs and reviews higher on the PDP

## 6. Bottom Line

No regression, no fix — this is a stuck score. Browsing (category nav, PDP, search) remains solid and comfort-focused, but sign-in and checkout are both still broken, and the cart page is being blocked by the site's own bot-detection layer. **Score holds at 2/10.**

Full evidence-by-step writeup saved to `reports/site-artifacts/2026-09-14-site-journey-walker/review.txt`.

---

## Technical Audit

## Technical Summary

Mobile audit across 8 steps of the skechers.com shopping journey (Homepage → Login → Men category → Men>Shoes → PDP → Add to Cart → View Cart → Search). Site runs on Salesforce Commerce Cloud (demandware.static asset paths) with Kasada bot-protection (`kpsdk` fingerprinting) and a heavy third-party tag stack (10+ analytics/ad pixels loaded per page). Two categories of hard defects found: (1) the cart page fails basic HTML document requirements (no `<title>`, no `lang`, no `<main>`/H1), and (2) the bot-protection fingerprinting endpoint is returning 429 (rate-limited) repeatedly, including once against `/cart/` itself.

## Accessibility

18 axe violations, concentrated on Homepage (10), View Cart (4), and Search (4).

- **Critical — Homepage:** `button-name` (buttons with no discernible text/label) and `aria-required-parent` (ARIA role used without its required parent role) will break screen-reader operation of interactive controls.
- **Serious — Homepage:** `link-name` — links with no accessible text.
- **Serious — View Cart:** `document-title` (empty `<title>`) and `html-has-lang` (missing `lang` attribute) — notable because the Homepage/Login/Category HTML samples all correctly carry `lang="en"`, indicating the cart view is served/rendered through a different template or fragment that skips the shared `<head>` boilerplate.
- **Moderate — repeated across Homepage/Search:** `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `landmark-complementary-is-top-level`, `region` (content not contained in a landmark), `heading-order`. Pattern indicates duplicated/nested landmark regions, likely from a third-party widget (see Stylitics, below) injecting its own `<main>`/`aside` into the DOM.
- **Moderate — View Cart:** `landmark-one-main`, `page-has-heading-one` — no H1 on the page.
- **Minor:** `aria-allowed-role` on Homepage and Search (invalid role value on an element).

## SEO

- View Cart's missing `<title>` and `lang` attribute are also indexing/rendering hygiene issues, though this route is typically non-indexable so impact is low if `noindex` is set — not confirmed in the samples provided.
- Duplicate/non-top-level `<main>` landmarks (Homepage, Search) can confuse crawlers' content-extraction heuristics in addition to being an a11y defect.
- No canonical tags, meta description, or structured data were captured in the truncated HTML samples — recommend re-running with full `<head>` capture to assess.

## Performance

TTFB by step: Homepage 430ms, Login 429ms, Men category 429ms, Men>Shoes 35ms, PDP 26ms, Add to Cart 26ms, View Cart 122ms, Search 25ms.

- The ~430ms TTFB on Homepage/Login/Men-category vs. <40ms on deeper pages is a significant, consistent split — the first three requests are likely hitting page-cache misses or SSR/personalization middleware (Monetate, GTM-gated content) that the later, cached category/PDP responses skip.
- **LCP and CLS were not captured for any step** — this is a measurement gap, not a confirmed absence of issues. Given the volume of async third-party scripts and the Stylitics widget injecting CSS at runtime (see below), layout shift risk is plausible and should be re-measured with a tool that captures paint timing (e.g., Lighthouse/CrUX trace) before ruling it out.
- Each page loads 20+ third-party scripts (TikTok, Snapchat, Pinterest, Reddit, Taboola, Bing, Meta, Nextdoor, Monetate, Quantum Metric, PulseInsights, 3x GTM containers, Tune/Go2SDK, Impact). This is a substantial network/main-thread tax on mobile devices, independent of any single script's failure.

## Mobile Optimization

- Homepage sets an inline `--vh` custom property (`style="--vh: 6.64px"`), a standard workaround for mobile viewport-height inconsistency — implemented correctly, no issue.
- No mobile-specific rendering defects observed in the provided samples beyond the accessibility/landmark issues above, which affect touch and assistive-tech users equally.
- Third-party script volume (noted above) disproportionately affects mobile due to constrained CPU/network — treat as a mobile performance risk pending LCP/CLS data.

## Console & Network Errors

- **429 (rate limited), 5 occurrences:** repeated hits to the Kasada bot-detection fingerprint endpoint (`/…/fp?x-kpsdk-v=…`), plus one 429 directly on `https://www.skechers.com/cart/`. A 429 on the cart route itself is a functional risk, not just telemetry noise — if bot-protection is throttling legitimate mobile sessions during checkout, this can block real users from viewing their cart.
- **CORS failure:** `web-assets.stylitics.com/style.css` blocked by CORS policy (missing `Access-Control-Allow-Origin`), resulting in `net::ERR_FAILED`. This is the outfit-builder/styling widget's stylesheet failing to load — likely also the source of the duplicate/orphaned landmark regions flagged in Accessibility, since the widget may still inject its markup without its intended styles.
- **"Unsupported Summarizer API languages" (4x):** originates from a Chrome built-in AI API (`Summarizer`) being invoked with an unsupported language — either the browser's experimental AI features or a page script probing for the API. Not blocking, but indicates either an experimental Chrome flag active in the test environment or a script calling this API without a language guard.

## Recommendations

1. Fix View Cart's document-level HTML: add `<title>`, `lang="en"`, a single `<main>` landmark, and an H1 — likely a template/fragment gap specific to the cart route.
2. Fix Homepage `button-name`/`link-name` violations by adding accessible text (`aria-label` or visible text) to icon-only buttons/links; audit `aria-required-parent` usage to correct role nesting.
3. Investigate the duplicate/non-top-level `main`/`complementary` landmarks — check whether the Stylitics widget (or another injected third-party component) is inserting a second `<main>`/`<aside>`; fix the Stylitics CORS header issue at the source (`web-assets.stylitics.com`) or self-host the asset.
4. Investigate why the Kasada fingerprint endpoint and `/cart/` are returning 429 — confirm rate-limit thresholds aren't clipping legitimate mobile traffic, especially at checkout.
5. Re-run the audit with LCP/CLS capture enabled (current run has no paint-timing data) before concluding there's no layout-shift or render-timing issue, given the scale of injected third-party content.
6. Investigate the 400ms+ TTFB gap on Homepage/Login/Category vs. sub-40ms on deeper pages — check cache-hit rates and personalization middleware (Monetate) on those routes.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

