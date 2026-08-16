---
slug: 2026-08-16-site-journey-walker
type: site
date: 2026-08-16
persona: walker
score: "2/10"
previous_score: "3/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 3/10) · **Type:** Site journey · **2026-08-16**
## Full review
## 1. Executive Summary

I made it from the homepage through search, but this walk-through has two dealbreakers: my "Log In" tap did nothing visible — three screenshots in a row (Homepage, Dismiss Popups, Log In) are pixel-identical, so I have no idea if I'm actually signed in — and the View Cart page is a **blank white screen**. I tapped Add to Cart on a shoe I never even picked a size for, so nothing landed in my bag (badge still reads "0" in the search screenshot), and then the cart page itself rendered nothing at all. For a 62-year-old trying to buy a pair of walking shoes on my phone, that's the whole errand falling apart at the finish line.

## 2. Business Impact Score (1-10)

**2/10** — down from yesterday's 3/10. The browse-and-filter experience (Men > Shoes, product page) is genuinely decent, but a shopper who can't confirm their cart has an item in it will not complete a purchase. A checkout funnel that dead-ends on a blank page is as bad as the site being down.

## 3. What's Working

- **Hands-Free Slip-ins are front and center.** The homepage nav bar (Slip-ins / Workout Walker / Arch Fit) and the Men menu both surface "Hands Free Slip-ins" without digging — exactly what I'm shopping for.
- **Fit filters are big, tappable pills.** Wide Fit / Extra Wide Fit / Medium Fit on the category page are large blue buttons — easy to hit with a thumb, no squinting.
- **Product page is clean and readable.** Price, star rating, review count, and the "Hands Free Slip-ins" badge are all legible without zooming. Size grid (7.0–14.0) is well-spaced for tapping.
- **The Add to Cart button itself** is large, high-contrast, and sits where my thumb naturally rests at the bottom of the screen.

## 4. What's Weak

- **The cart page is blank.** Step 8 is a completely empty white screen — no error, no "your cart is empty" message, nothing. This is a hard stop for a purchase.
- **Login is a no-op (or invisible).** Homepage → Dismiss Popups → Log In produced three identical screenshots. Either the login control didn't respond to a tap, or whatever happened left no visible trace. I have no confirmation I'm signed in anywhere in this journey.
- **No personalization anywhere.** Header icon stays a generic silhouette the whole way through; no name, no "Welcome back," no tailored recommendations. If I am logged in, the site gives zero acknowledgment of it.
- **Add to Cart didn't actually add anything.** The product screenshot shows "Please select a size" still flagged in red — I never picked a size, so the cart stayed empty (confirmed by the "0" badge still showing on the Search results page).
- **Search results aren't gender-matched.** I searched "comfort shoes" while browsing Men's — Slip-ins came back Women's product cards first (Contour Foam - Cozy Fit, Women's; Glide-Step, Women's). For a guy shopping the men's aisle, that's a mismatch that makes me second-guess whether the search even knows what I was just looking at.
- **Men flyout menu is a little busy.** "Shoes" has its own submenu arrow, but then "Hands Free Slip-ins," "Wide Fit," "Extra Wide Fit" repeat below as flat links with no header separating them from the category list above — took me a second look to realize those were a second grouping.

## 5. Recommendations

1. **Fix the cart render — top priority.** A blank cart page after Add to Cart is a checkout-killing bug, not a nice-to-have fix.
2. **Make login state visible.** Show my name or "Hi, Walker" somewhere in the header once logged in, and make sure the login control actually opens a form (my screenshots suggest it may not be firing at all).
3. **Fix the size-required flow so Add to Cart either blocks cleanly with a size picker prompt, or better yet, auto-scrolls/highlights the size row** instead of letting the button be tapped without a size and quietly failing.
4. **Gender-match search results** to browsing context, or at least let me filter Men/Women on the results page without extra taps.
5. **Group the Men flyout menu** with a visible label ("Quick Links" or divider) above Hands Free Slip-ins / Wide Fit / Extra Wide Fit so it doesn't read as a continuation of the category list.

## 6. Bottom Line

Browsing feels built for me — big buttons, right products up front, readable text. But I can't tell if I'm logged in, and I can't actually see what's in my cart. Yesterday's 3/10 was already rough; today's blank cart page makes this a walk I'd have abandoned in person, phone in pocket, straight to the DSW down the street.

## 7. Evidence

**Step 1 — Homepage:** Clean hero banner, "Up to 40% Off Summer Styles," clear top nav with search/account/cart/menu icons. Text and icons are a good size for a phone. No personalization visible — generic promo banner, not tailored to me.

**Step 2 — Dismiss Popups:** Identical to Step 1. Either no popup appeared or the dismiss action left the page unchanged — nothing to report because nothing visibly happened.

**Step 3 — Log In:** Identical to Steps 1 and 2. I expected a login form or account panel; instead the homepage is unchanged. This is a real friction point — I'd assume the tap didn't register and try again, or give up.

**Step 4 — Men category:** Slide-out menu with Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories, then Hands Free Slip-ins / Wide Fit / Extra Wide Fit below. Readable, decent spacing, though the second group isn't visually separated from the first — mild confusion about whether those are subcategories of "Shoes" or standalone shortcuts.

**Step 5 — Men > Shoes (Hands Free Slip-ins):** 321 results, big Wide/Extra Wide/Medium Fit filter pills, "Free pickup" toggle, Filter/Sort controls. Two cushioned-looking sneakers shown with color swatches and a quick-add basket icon. Easy to scan and tap on a phone.

**Step 6 — Product detail:** Skechers Slip-ins: Skech-Gel, $105, 6 reviews/4-star rating, "Hands Free Slip-ins" logo badge right on the image. Relevant and easy to read — this is the kind of shoe I'm looking for.

**Step 7 — Add to Cart:** Size grid 7.0–14.0, QTY selector, shipping/pickup info, big "Add to Cart" button. But a red "Please select a size" warning is showing — no size was actually chosen before the tap, so the add likely failed silently.

**Step 8 — View Cart:** Completely blank white page. No cart contents, no empty-cart message, nothing. This is broken.

**Step 9 — Search "comfort shoes":** 1,514 results returned, but top two are Women's shoes (Contour Foam - Cozy Fit $75, Skechers Slip-ins Glide-Step $85) despite my whole session being in the Men's section. Cart badge still shows "0," confirming the earlier Add to Cart never went through.

---

## Technical Audit

## Technical Summary

Mobile journey through skechers.com (homepage → login → category → PLP → PDP → cart → search) was captured across 8 steps. The site is built on Salesforce Commerce Cloud (Demandware) with a heavy third-party tag stack (30+ async scripts: GTM, Monetate, TikTok, Snapchat, Bing, Taboola, Impact, Quantum Metric, PulseInsights, etc.) loaded on every page. The dominant technical issues are: a bot-mitigation/fingerprinting endpoint (`x-kpsdk`) returning `429` repeatedly, a `403` on a Bazaarvoice product-data call, and a cluster of ARIA/landmark violations concentrated on the homepage. Server response times (TTFB) are good on SPA-style category/PDP/cart transitions but elevated on full document loads.

## Accessibility

17 axe violations, 2 rated critical:

- **Critical — `button-name`** (Homepage): one or more buttons have no discernible accessible name (icon-only buttons missing `aria-label`/text), unusable via screen reader.
- **Critical — `aria-required-parent`** (Homepage): elements carry ARIA roles that require a specific parent role/container which is absent — likely a custom widget (carousel, menu, or tab component) with incomplete role wiring.
- **Serious — `document-title`, `html-has-lang`** (View Cart): the cart view is missing (or has an empty) `<title>` and the `<html>` lacks a `lang` attribute — both baseline WCAG 4.1.1/3.1.1 requirements, indicating the cart renders in a document context that skips the standard SSR head boilerplate present on other pages.
- **Moderate — landmark cluster** (Homepage, Search, and partially View Cart): `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `landmark-complementary-is-top-level`, `landmark-one-main`, `region`, `heading-order`, `page-has-heading-one` — indicates duplicated/nested `<main>` and `<aside>` elements (likely from third-party injected widgets or a component library rendering redundant landmarks) and content not wrapped in any landmark region.
- **Minor — `aria-allowed-role`** (Homepage, Search): a non-semantic element is assigned an ARIA role invalid for its tag.

Pattern: the homepage carries the largest and most severe violation count; View Cart and Search inherit a subset, suggesting a shared header/layout component with the landmark and title/lang issues, plus page-specific widget issues on top.

## SEO

- View Cart's missing `<title>` and missing `lang` attribute (see Accessibility) are also SEO-relevant — an untitled, unlabeled document if it were ever indexed or shared.
- `heading-order` violation on Homepage indicates a broken heading hierarchy (e.g., skipping from H1 to H3), which can dilute topical signal for crawlers.
- No canonical/meta/structured-data issues were observable from the truncated HTML samples provided; a full `<head>` capture would be needed to assess canonical tags, meta descriptions, and structured data (Product/Offer schema) on PDP.

## Performance

Web Vitals capture was incomplete — LCP and CLS were not recorded for any step (`LCP=?ms`, `CLS=?`), so no rendering-performance or layout-stability conclusions can be drawn from this run. TTFB data only:

| Step | TTFB |
|---|---|
| Homepage | 383ms |
| Log In | 480ms |
| Men category | 480ms |
| Men > Shoes | 25ms |
| Product detail | 30ms |
| Add to Cart | 30ms |
| View Cart | 120ms |
| Search | 121ms |

Full document loads (Homepage, Log In, Men category) show 383–480ms TTFB, consistent with server-rendered Demandware responses plus tag-manager-driven personalization (Monetate). Subsequent in-session navigations (Men > Shoes, PDP, Add to Cart) drop to 25–30ms, indicating client-side/XHR-driven transitions after initial load — expected for an SPA-like PLP/PDP flow. Cart and Search sit in between (120–121ms), likely partial SSR or cached API responses.

**Gap:** LCP/CLS instrumentation did not fire on any step — investigate whether the measurement tool's `PerformanceObserver` was blocked (e.g., by CSP, or by the page's own event listeners such as the `unload`-based cleanup script visible in the homepage HTML) before drawing conclusions about paint or shift performance.

## Mobile Optimization

- The homepage sets `--vh: 6.64px` as an inline custom property, indicating a JS-based viewport-height fix (common workaround for mobile browser chrome). This is a functional pattern but adds a layout-thrashing risk if recalculated on every scroll/resize without debouncing — not verifiable from the static HTML alone.
- 30+ third-party scripts are loaded `async` (non-blocking), which avoids render-blocking on mobile, but the sheer count increases mobile CPU/battery load, connection contention, and main-thread parse/execution time on lower-end devices — a likely contributor to any LCP degradation once vitals are captured.
- No `viewport` meta tag was visible in the truncated `<head>` samples; this could not be confirmed as present or absent from the given excerpts and should be checked directly.

## Console & Network Errors

- **429 (rate limited) ×4** on `https://www.skechers.com/.../fp?x-kpsdk-v=j-1.2.661` — a Kasada (or similar) bot-detection fingerprinting endpoint. Repeated 429s mid-session suggest the client is being rate-limited by its own bot-mitigation layer during normal navigation, which risks false-positive CAPTCHA/challenge triggers for real mobile users on slower connections or during rapid navigation.
- **429** on `https://www.skechers.com/cart/` — the cart page itself was rate-limited at least once, a more direct UX risk (failed cart load).
- **403** on `BazaarvoiceProductData-GetProduct?pid=test` — a literal `pid=test` query parameter reaching production, returning 403. This looks like a leftover/hardcoded test product ID in a client-side reviews-widget call, now correctly rejected by Bazaarvoice but indicating dead/debug code shipped to production.
- **Permissions policy violation: `unload is not allowed`** (repeated) — a script (visible in the homepage HTML, the `app:JsLoaded` cleanup listener) or a third-party tag is attempting to register an `unload` handler, which is blocked by the page's Permissions-Policy. Non-fatal but indicates a legacy pattern (unload-based cleanup/beaconing) that should migrate to `pagehide`/`visibilitychange`.
- **Unsupported Summarizer API languages** (repeated) — a third-party script is invoking the browser's built-in Summarizer API (Chrome's on-device AI API) with an unsupported language, causing the call to abort. Not user-impacting but is wasted/failing code executing on every page load.

## Recommendations

1. Fix the two critical accessibility issues first: add accessible names to all icon-only buttons on the homepage, and correct the ARIA parent/child role structure for the flagged widget.
2. Add `<title>` and `lang="en"` to the View Cart document — check whether cart renders through a different template/route than other pages, since it's missing baseline `<head>` elements present elsewhere.
3. Deduplicate/normalize landmark regions (`<main>`, `<aside>`) across Homepage, Search, and Cart — likely a shared layout component issue affecting multiple routes.
4. Investigate the repeated `429`s from the `x-kpsdk` fingerprinting endpoint, especially the one hitting `/cart/` directly — determine if legitimate mobile traffic is being throttled by the bot-mitigation vendor and tune thresholds if so.
5. Remove the hardcoded `pid=test` Bazaarvoice call from production code — it's dead debug code causing a 403 on every relevant page load.
6. Replace the `unload` event listener with `pagehide`/`visibilitychange` to comply with the site's own Permissions-Policy and stop the console violations.
7. Re-run vitals capture with LCP/CLS instrumentation verified functional (check for CSP or listener conflicts blocking `PerformanceObserver`) — current data can't support any rendering-performance conclusions.
8. Audit the async third-party script count (30+ on a single page load) for mobile CPU/battery impact; consolidate or lazy-load non-critical tags (e.g., consolidate under GTM triggers instead of separate hardcoded `<script>` tags).
## Recent history

- [[2026-08-15-site-journey-walker]] — 3/10 (2026-08-15)
- [[2026-08-14-site-journey-walker]] — 3/10 (2026-08-14)
- [[2026-08-13-site-journey-walker]] — 3/10 (2026-08-13)

