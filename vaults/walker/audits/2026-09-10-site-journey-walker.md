---
slug: 2026-09-10-site-journey-walker
type: site
date: 2026-09-10
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-09-10**
## Full review
## 1. Executive Summary

I set out to do what I always do — see if Skechers has something for tired feet, maybe grab a pair of slides for around the house. The category browsing part was fine, even pleasant. But the minute I got to checkout, the wheels came off: the site let me try to add a slide to my cart without picking a size, and then when I tapped the cart icon, I got a blank white screen. Nothing. No error, no "your cart is empty," just white. That's the kind of thing that makes me put the phone down and go check my email instead.

## 2. Business Impact Score (1-10)

**2/10** — flat with yesterday's 2/10, no meaningful improvement. Browsing and search are genuinely decent, but the cart — the one step that actually makes them money — is broken or at least broke for me. A shopper my age doesn't retry a blank screen three times. We assume something's wrong with our phone, or the store, and we leave.

## 3. What's Working

- The hamburger "Men" menu is clean — one column, clear labels (Shoes, Shop by Activity, Comfort Technologies, Collections), decent-sized tap targets with chevrons so I know they're tappable.
- The Men's Shoes landing page leads with exactly what I care about: "Hands Free Slip-Ins," "Walking Shoes," "Athletic Sneakers" — big photo tiles, easy to tap, no guessing.
- Product naming calls out "Arch Fit" right in the title, which is the one phrase I actually look for.
- Search for "comfort shoes" returned genuinely relevant stuff — a Slip-ins Go Walk and a Max Cushioning model, with prices shown up front.
- The top banner keeps "Slip-ins / Wide Fit / Arch Fit" visible on every page, so the comfort story is at least consistent.

## 4. What's Weak

- **Cart is broken.** After "adding to cart," the cart page rendered as a totally blank white screen. That's not a minor bug to me — that looks like the store crashed.
- **Add to Cart didn't actually work.** The size grid showed a "Please select a size" warning, and the cart icon stayed at "0" through the rest of the trip, including after I searched. So whatever button got tapped, nothing landed in my cart.
- **Login went nowhere.** I tapped to log in and the screen looked identical to the homepage — no sign-in form, no "welcome back," nothing. I still have no idea if I'm logged in or if my saved size/wishlist would even show up.
- **No personalization anywhere.** Same generic hero banner start to finish. If I'm a repeat customer, the site gave zero sign of remembering that.
- Only 1 review on the product I looked at, and it's 3 stars — not exactly reassuring when I'm about to spend $70 sight unseen.
- No price-vs-comfort comparison content, nothing telling me why this beats a Hoka or a New Balance at the same price. I have to already be sold on Skechers to buy here.

## 5. Recommendations

1. **Fix the cart page** — a blank screen is a lost sale, full stop. Even an empty cart needs to say "Your cart is empty" in big letters.
2. **Block add-to-cart clearly, not silently** — if a size is required, make that impossible to miss (I clearly missed it, and so might a lot of folks with my eyesight).
3. **Make login visibly do something** — a confirmation, a name, a "Hi Walker" — anything that shows me I'm signed in.
4. **Surface more reviews or a review summary** higher up — one review isn't enough to build trust on a $70 purchase.
5. **Add a simple comfort-tech comparison or FAQ** ("Arch Fit vs. other brands") near the product page — I cross-shop, and nothing here tries to close that gap.

## 6. Bottom Line

The store knows how to talk to me on the way in — the category pages and search are speaking my language. But it falls apart exactly where it counts: I couldn't reliably get a shoe into my cart, and the cart page itself looked broken. Until that's fixed, none of the good browsing work matters — I never get to pay.

## 7. Evidence

**Step 1 — Homepage:** Clean layout, big Skechers logo, comfort-technology terms (Slip-ins, Wide Fit, Arch Fit) right up top under the promo banner. Text is readable without zooming. Lifestyle photo is pleasant but doesn't scream "comfort/cushioning" specifically. No personalization — looks like a first-time-visitor homepage.

**Step 2 — Dismiss Popups:** Screen identical to Step 1. Either there were no popups to dismiss, or the dismissal wasn't captured — either way, nothing changed on screen, no friction but no confirmation either.

**Step 3 — Log In:** Screen still identical to the homepage — no login form, no modal, no "welcome back" state appeared. As a 62-year-old who wants confirmation things worked, this is confusing: did I log in or not? No personalization is visible anywhere downstream, so functionally it seems login never happened.

**Step 4 — Men category:** A slide-out menu opened with big, single-column list items (Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories). Text is large, spacing between rows is generous — easy to tap accurately with a thumb. This is the most "designed for me" screen in the whole trip.

**Step 5 — Men > Shoes:** Good category landing — three big tiles for Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers, directly matching what I shop for. Filter/Sort controls sit at a comfortable tap size. 746 results shown, free pickup toggle present. No friction here.

**Step 6 — Product detail:** GO 3D Arch Fit Horizon slide, $70, shown with a large product photo. Only "1 Review," 3-star average — not confidence-building for a first-time buyer of an unfamiliar style. "Arch Fit" naming is a plus for me specifically. It's a slide/sandal, not a walking shoe, which is a bit of a mismatch if the goal was showing me a comfort walking shoe.

**Step 7 — Add to Cart:** Size grid is clear, with unavailable half-sizes visibly grayed and crossed out — good, no wasted taps on out-of-stock sizes. But a red "Please select a size" warning shows, meaning the add-to-cart attempt was blocked. The warning text is small and easy to miss for someone scanning quickly.

**Step 8 — View Cart:** Completely blank white screen. Nothing rendered — no header, no "empty cart" message, no products. This is the single worst moment of the trip; it reads as the site being broken, not just an empty cart.

**Step 9 — Search "comfort shoes":** 1,520 results, and the top two are genuinely on-target: a Slip-ins Go Walk ($85) and a Max Cushioning Elite 3 ($78.99–$105) with color swatches and pricing visible without a tap. Cart icon still reads "0," confirming nothing from Step 7 ever actually made it into the cart.

---

## Technical Audit

## Technical Summary

Mobile journey through skechers.com (Homepage → Log In → Men category → Men > Shoes → PDP → Add to Cart → View Cart → Search) surfaces three categories of code-level defect: unresolved ARIA/landmark structure issues repeated across multiple templates, a bot-detection/rate-limiting layer (Kasada `kpsdk`) throttling the cart endpoint itself, and a third-party stylesheet blocked by CORS on product pages. TTFB is inconsistent across the funnel (520ms → 63ms), suggesting some templates are served dynamically/personalized while deeper commerce pages hit cache. LCP and CLS were not captured in this run — flagged as a data gap, not a "no issues" result.

## Accessibility

18 axe-core violations, concentrated on Homepage (10), View Cart (4), and Search (4):

- **Critical**: `button-name` (Homepage) — buttons without discernible text, unusable for screen reader users. `aria-required-parent` (Homepage) — ARIA roles used without required parent role container.
- **Serious**: `link-name` (Homepage) — links with no accessible text. `document-title` and `html-has-lang` (View Cart) — the cart page is missing a `<title>` and the root `<html>` lacks a `lang` attribute, despite the Homepage/Log In/Men category HTML samples showing `lang="en"` correctly set. This indicates the cart template is served through a different rendering path than the rest of the site.
- **Moderate**: repeated landmark violations (`landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `landmark-complementary-is-top-level`, `region`) on Homepage and Search — indicates nested/duplicated `<main>` and `<aside>` elements, likely from third-party widget injection (Stylitics, PulseInsights, Monetate) landing inside the primary landmark structure rather than outside it. `heading-order` (Homepage) and `page-has-heading-one` (View Cart) — heading hierarchy is non-sequential and the cart page has no H1.
- **Minor**: `aria-allowed-role` (Homepage, Search) — role attributes applied to elements that don't support them.

The View Cart page failing `document-title`/`html-has-lang`/`landmark-one-main` together is the standout finding — this is a distinct, less-instrumented template than the rest of the funnel.

## SEO

- View Cart's missing `<title>` is both an accessibility and SEO defect — any crawler or share surface hitting this URL state gets no page title.
- `html-has-lang` missing on View Cart also affects language targeting for that page state.
- Duplicate/non-unique `<main>` landmarks (Homepage, Search) indicate malformed document outline, which can affect how search engines parse primary content vs. injected widget content.
- Homepage/category HTML shows heavy async third-party tag loading (20+ scripts: GTM ×2 instances, gtag destinations ×2, TikTok, Snapchat, Reddit, Taboola, Bing, Pinterest, Nextdoor, Monetate, Quantum Metric, PulseInsights) ahead of/interleaved with core content — not itself an SEO blocker since these are async, but worth noting for crawl-budget/render-blocking review.

## Performance

| Step | TTFB |
|---|---|
| Homepage | 520ms |
| Log In | 423ms |
| Men category | 423ms |
| Men > Shoes | 65ms |
| Product detail | 63ms |
| Add to Cart | 63ms |
| View Cart | 134ms |
| Search | 61ms |

- TTFB is 6-8x higher on Homepage/Log In/Men category (423-520ms) than on Men>Shoes/PDP/Add to Cart/Search (61-65ms). This split lines up with the presence of the SFCC personalization/tag stack (Monetate `se.monetate.net` custom.js, `demandware.static` prod bundle) on the higher-TTFB templates — consistent with server-side personalization or session-state computation adding backend latency on those specific pages.
- LCP and CLS were not collected in this run for any step — cannot assess visual load completion or layout stability. This should be re-run with a Web Vitals capture (e.g., PerformanceObserver or Lighthouse) before drawing conclusions on perceived load speed.
- Homepage/Log In/Men category load 20+ async third-party scripts (ads pixels, analytics, personalization, testing tools) each requiring separate DNS/TLS/connection setup — this is a plausible contributor to LCP/TBT even though not measured directly here.

## Mobile Optimization

- The homepage HTML sets `style="--vh: 6.640000000000001px;"` on `<html>` — a JS-computed CSS custom property, the standard workaround for mobile browser `100vh` viewport inconsistencies. This confirms mobile-specific viewport handling exists, but it depends on JS execution completing before layout-dependent elements paint, which is a common source of CLS on mobile if the property is set late (unverified here since CLS wasn't captured — recommend confirming with real CLS data).
- No mobile-specific meta viewport tag or responsive markers were visible in the truncated HTML samples provided; full `<head>` was not captured for this audit and should be checked separately.

## Console & Network Errors

- **429 (Too Many Requests) — 5 occurrences**, all against `x-kpsdk-v` endpoints (Kasada bot-mitigation fingerprinting/challenge service) plus one directly against `https://www.skechers.com/cart/`. The cart page itself returning 429 is a functional risk: if Kasada rate-limits legitimate traffic during the cart step, it can block checkout for real users, not just bots.
- **CORS failure**: `web-assets.stylitics.com/style.css` blocked — "No 'Access-Control-Allow-Origin' header," followed by `net::ERR_FAILED`. This breaks the Stylitics outfit/styling widget's CSS on product pages.
- **"Unsupported Summarizer API languages"** (×4) — the page (or an injected script) is invoking Chrome's experimental on-device Summarizer API with unsupported language parameters, causing repeated aborted calls. Not user-facing, but it's a real console error being thrown on every page load.

## Recommendations

1. Fix View Cart's missing `<title>` and `lang` attribute, and add a top-level `<main>` + single H1 — this template diverges from the rest of the site's document structure and should be audited for why.
2. Investigate the Kasada 429s hitting `/cart/` directly — confirm rate-limit thresholds aren't catching normal mobile session behavior (e.g., retries, double-taps) before checkout.
3. Fix the Stylitics CORS misconfiguration (`Access-Control-Allow-Origin` missing) so its stylesheet loads on product pages.
4. Resolve duplicate/non-top-level `<main>`/`<aside>` landmarks on Homepage and Search — likely caused by third-party widget markup (Monetate/PulseInsights/Stylitics) injecting into the primary landmark instead of alongside it.
5. Add discernible text/labels to unnamed buttons and links on the Homepage (`button-name`, `link-name` — critical/serious).
6. Re-run this audit with LCP/CLS instrumentation (currently unmeasured) to correlate the 423-520ms TTFB pages with actual paint/stability impact before prioritizing backend latency work.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

