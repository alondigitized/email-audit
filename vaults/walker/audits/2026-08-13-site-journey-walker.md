---
slug: 2026-08-13-site-journey-walker
type: site
date: 2026-08-13
persona: walker
score: "3/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-3, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 3/10 (prev 2/10) · **Type:** Site journey · **2026-08-13**
## Full review
## 1. Executive Summary

Walker's trip through Skechers mobile started fine — the homepage led straight into Slip-ins/Wide Fit content that actually speaks to him — but the two moments that matter most for a 62-year-old repeat shopper both broke: **Log In never opened a login screen**, and **View Cart rendered a completely blank white page**. Add to Cart also stalled on an unhandled "please select a size" validation instead of completing. He can browse Skechers just fine on his phone. He cannot log in, and he cannot see what's in his cart. For a comfort shopper who cross-shops five brands and won't hesitate to bounce to DSW, those two failures are enough to end the session empty-handed.

## 2. Business Impact Score (1-10)

**3/10** — up marginally from yesterday's 2/10 thanks to genuinely strong Men's/Slip-ins/Wide-Fit category content, but the score stays in "broken" territory because the two transaction-critical steps (login, cart) failed outright, same as they likely did yesterday.

## 3. What's Working

- Homepage nav pills (Slip-ins, Workout Walker, Arch Fit) put Walker's exact shopping mode one tap away, no digging required.
- The Men flyout menu surfaces "Hands Free Slip-ins," "Wide Fit," and "Extra Wide Fit" as direct shortcuts below the category tree — this is exactly the content a comfort-first shopper wants and it's hard to miss.
- Product listing page pre-filtered to Hands Free Slip-ins with Wide/Extra Wide/Medium Fit filter pills visible immediately, plus a "Free pickup" toggle.
- Product detail page (Slip-ins: Contour Foam – Cozy Fit Ohtro, $88, 5 stars/25 reviews) is clean, price and rating are above the fold, no clutter.
- Size grid and QTY selector on the cart-add step are large, well-spaced touch targets — easy to tap with a 62-year-old thumb, no zooming needed.

## 4. What's Weak

- **Login is a dead end.** Tapping Log In produced no visible change — same header, same homepage, no form, no "Hi Walker" anywhere downstream. If it silently failed or needs a second tap that isn't obvious, that's a real barrier for someone who isn't going to poke around hunting for it.
- **Cart page is blank.** Step 8 is a fully white screen — no items, no "your cart is empty" message, nothing. Whether this is a render failure or genuinely empty cart, showing a blank page with zero feedback is a trust-breaker at the worst possible moment in the funnel.
- **Add to Cart didn't complete.** The captured state shows a red "Please select a size" warning still active rather than a confirmed add — cart badge stayed at 0 straight through. Size selection should be enforced before the button is even tappable, or at minimum the error should be impossible to miss and resolve in one tap.
- **Zero personalization anywhere.** No name, no "welcome back," no tailored recs based on the Men's Slip-ins browsing he just did — the header icon and banner never change from a first-time-visitor state.
- **Search ignores context.** Searching "comfort shoes" surfaced Women's products first even though every prior step was Men's browsing — no gender or category memory carried into search.
- The top promo banner ("25% off Kids Styles") is irrelevant to Walker and eats prime real estate on every single screen of a 9-step journey.

## 5. Recommendations

1. Fix the Log In flow first — verify the tap target actually opens a modal/page on mobile; instrument it so a silent failure like this can't ship again.
2. Fix the blank cart page — this is likely the single biggest revenue leak in the journey; a shopper who adds nothing to look at will assume the site is broken and leave.
3. Disable/gray out "Add to Cart" until a size is picked, or auto-scroll and highlight the size grid on first tap, so the action always resolves to a clear state.
4. Once logged in, personalize the header and homepage (name, recently viewed Men's Slip-ins, reorder shortcuts) — right now logging in changes nothing visible.
5. Weight search results toward the shopper's recent category (Men's) instead of showing Women's items first for a gender-neutral query like "comfort shoes."
6. Swap the persistent Kids-styles banner for something relevant to the session (e.g., the Slip-ins/Wide Fit promo already used in the nav) on Men's-category sessions.

## 6. Bottom Line

The browsing half of this experience is genuinely well-tuned to Walker — Slip-ins and Wide Fit are surfaced fast and often. But a comfort shopper who can't log in and can't see his cart isn't converting; he's opening the Skechers app or DSW instead. This needs the login and cart bugs fixed before any of the good category work pays off. Roughly flat versus yesterday's 2/10 — better content, same core breakage.

## 7. Evidence

**Step 1 — Homepage:** Clean layout, top banner (Kids 25% off) + secondary promo banner (40% off select styles), then three nav pills: Slip-ins, Workout Walker, Arch Fit, then a lifestyle hero image. Easy to scan on phone, no zoom needed. Slip-ins pill is a genuine draw for Walker. Not personalized — generic first-visit state, no sign of prior visits.

**Step 2 — Dismiss Popups:** Screenshot identical to Step 1 — no popup was visible to dismiss in this capture, or it was already gone. No friction observed, but also nothing to confirm the dismiss action actually did anything.

**Step 3 — Log In:** Screenshot is identical to Steps 1–2 — no login form, modal, or account page appeared. This is the first hard failure: from Walker's perspective, tapping "Log In" did nothing. He'd likely assume the site glitched and either retry once or give up on signing in, which kills any chance of a personalized or saved-info checkout later.

**Step 4 — Men category:** Slide-out flyout menu, MEN header, clear list: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories, then direct shortcuts to Hands Free Slip-ins, Wide Fit, Extra Wide Fit. Large tap targets, good contrast, easy one-thumb use. This is the most on-persona screen in the whole journey.

**Step 5 — Men > Shoes (Hands Free Slip-ins):** Breadcrumb (Men > Shoes), page title "Hands Free Slip-ins," three fit-filter buttons (Wide/Extra Wide/Medium), a store-pickup toggle, Filter/Sort controls, 328 results, first two products shown with color swatches and quick-add icons. Very usable, very on-topic — no hunting required to land in his exact shopping mode.

**Step 6 — Product detail:** "Skechers Slip-ins: Contour Foam - Cozy Fit Ohtro," Men's, 5-star/25 reviews, $88.00, large clean product photo, Hands Free Slip-ins badge, wishlist heart icon, swipe arrows for more images. Text is legible without zoom, price and rating up top where Walker will see them immediately. No comparison-to-other-brands content and no visible cushioning/arch-support callout on this view — a comfort shopper doing price-vs-quality math has to scroll further to find that.

**Step 7 — Add to Cart:** Size grid (6.5–13.0) with generously sized tap targets, QTY dropdown, shipping/pickup info blocks, then "Add to Cart" button. A red "Please select a size" warning is showing — the add action was blocked, and the header cart badge still reads 0. This reads as an incomplete/failed add rather than a successful one.

**Step 8 — View Cart:** Completely blank white screen — no header, no items, no empty-cart message, nothing. This is a critical break in the funnel; whatever state the cart is in, showing nothing at all is the worst possible outcome for user trust.

**Step 9 — Search "comfort shoes":** 1,511 results returned (search itself works and the term is understood), but the first two results shown are Women's shoes ("Contour Foam - Cozy Fit Pure Comfort," "Slip-ins: Glide-Step Comfort - Soft Power") despite Walker's entire session being Men's-focused. Filter/Sort controls present and easy to tap. Relevant to "comfort" as a concept, but not personalized to his gender/category context.

---

## Technical Audit

## Technical Summary
Mobile journey across 8 steps on skechers.com (Salesforce Commerce Cloud / Demandware storefront) surfaced three categories of code-level issues: a heavy third-party script payload on every page load, DOM/landmark structure violations causing 16 axe failures, and repeated 429 rate-limiting on a bot-detection fingerprinting endpoint that fired on nearly every navigation. No blocking JS errors were observed; console/network issues were dominated by third-party tag noise rather than first-party application bugs.

## Accessibility
16 violations detected (2 critical, 2 serious, 9 moderate, 3 minor):
- **Critical — Homepage**: `button-name` (icon/interactive buttons with no accessible label) and `aria-required-parent` (ARIA role used outside its required parent role, e.g. a menu/listitem role without its container).
- **Serious — View Cart**: `document-title` (empty/missing `<title>`) and `html-has-lang` (missing `lang` attribute) — notably the `<html lang="en">` attribute present on other steps' HTML samples is absent on the cart step, suggesting the cart view is served from a different template/render path that skips this.
- **Moderate — Homepage, View Cart, Search**: duplicate/non-top-level `main` and `complementary` landmarks (`landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-complementary-is-top-level`, `landmark-unique`), missing `main` landmark and no `<h1>` on View Cart, and unlandmarked content regions (`region`) on Homepage and Search.
- **Minor**: `aria-allowed-role` on Homepage and Search — an element assigned an ARIA role invalid for its tag.

Pattern: the View Cart page appears to be a structurally different/incomplete template (missing title, lang, main landmark, h1) versus the rest of the site, and the landmark duplication issues recur across templates, suggesting a shared component (nav/aside) that renders landmark roles more than once in the DOM.

## SEO
- View Cart is missing a `<title>` element and has no `<h1>`, which will degrade indexing/snippet quality if this URL is ever crawlable (also flagged under Accessibility).
- Homepage/category/PDP samples all correctly set `<html lang="en">`; View Cart does not — a crawlability/internationalization signal gap specific to that template.
- Duplicate `main` landmarks (also an SEO signal issue for content hierarchy) appear on Homepage and Search.
- Could not evaluate canonical tags, meta description, robots directives, or structured data — not present in the truncated `<head>` samples provided.

## Performance
- TTFB was healthy across server-rendered steps (351–392ms for Homepage, Log In, Men category, Men > Shoes) and very fast on client-rendered/cached steps (26ms for Product detail and Add to Cart, 121ms for View Cart, 29ms for Search) — consistent with Demandware caching PDP/cart fragments differently from category pages.
- LCP and CLS were not captured for any step (all reported as `?`) — the audit tooling did not record these Web Vitals; recommend re-running with a Vitals observer since TTFB alone doesn't indicate render performance.
- Every page loads a large number of synchronous/async third-party tags (GTM, TikTok, Snapchat, Pinterest, Reddit, Taboola, Bing, Quantum Metric, Monetate x2, Pulse Insights, Impact, CreativeCDN, WebFont Loader, Bazaarvoice, plus a Kasada bot-detection script) before/alongside first-party JS — this is a likely contributor to render-blocking and main-thread contention even though it isn't reflected in TTFB.

## Mobile Optimization
- The homepage sets an inline `style="--vh: 6.64...px"` custom property on `<html>`, indicating a JS-based viewport-height polyfill (common workaround for mobile browser chrome resizing `100vh`). This implies native `vh` units are unreliable in this layout and JS must run before layout stabilizes, which can contribute to layout shift on slow connections — consistent with the missing CLS data being worth re-verifying.
- Viewport meta tag, responsive image `srcset`, and touch-target sizing could not be verified from the truncated HTML samples provided.

## Console & Network Errors
- **429 (4 occurrences)**: repeated rate-limiting on `…/fp?x-kpsdk-v=…` — a Kasada bot-detection fingerprinting endpoint — hit on Homepage, PDP, and View Cart. Repeated 429s on a security/bot-check endpoint during normal navigation suggest overly aggressive client-side polling or retry logic in that script, which could degrade UX if it ever blocks legitimate traffic.
- **429 on `/cart/`**: the cart page itself returned a 429 at some point in the flow — worth confirming this didn't affect cart state/UI, since it's a first-party route rather than a third-party script.
- **403 on Bazaarvoice `GetProduct?pid=test`**: expected failure — `pid=test` is a placeholder/test product ID, not a real SKU, so the 403 is likely a non-issue from real user traffic but indicates a hardcoded/test value present in a live request path.
- **Permissions policy violations ("unload is not allowed")**: multiple third-party scripts are attempting to register `unload` listeners, which is deprecated and blocked by the page's Permissions Policy — no functional impact but indicates outdated third-party tag code.
- **Unsupported Summarizer API language errors**: a script (likely one of the AI/analytics tags) is calling the experimental Chrome `Summarizer` API with unsupported language parameters, causing the call to abort. Not user-facing, but noisy console pollution from third-party code.

## Recommendations
1. Fix the View Cart template to include a non-empty `<title>`, `<html lang="en">`, a `main` landmark, and an `<h1>` — it's structurally inconsistent with other templates on the site.
2. Resolve duplicate/non-top-level `main` and `complementary` landmarks site-wide (likely a shared header/nav/aside component rendering roles redundantly) and audit icon-only buttons for accessible names to fix the critical `button-name` violation.
3. Re-run the audit capturing LCP/CLS via a proper Web Vitals observer — TTFB alone doesn't confirm real render performance, and the `--vh` JS-driven viewport hack is a plausible CLS source worth measuring directly.
4. Investigate the Kasada bot-detection script's retry/backoff behavior — 4 separate 429s in a single session is excessive for a fingerprinting call and may be misconfigured or unnecessarily chatty.
5. Confirm the 429 on `/cart/` (first-party route) is not a real availability issue distinct from the third-party fingerprinting 429s.
6. Audit and update/remove third-party tags using deprecated `unload` listeners and misconfigured experimental browser APIs (Summarizer) to reduce console noise and Permissions Policy violations.
## Recent history

- [[2026-08-12-site-journey-walker]] — 2/10 (2026-08-12)
- [[2026-08-11-site-journey-walker]] — 2/10 (2026-08-11)
- [[2026-08-10-site-journey-walker]] — 2/10 (2026-08-10)

