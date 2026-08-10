---
slug: 2026-08-10-site-journey-walker
type: site
date: 2026-08-10
persona: walker
score: "2/10"
previous_score: "3/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 3/10) · **Type:** Site journey · **2026-08-10**
## Full review
## 1. Executive Summary

I walked through Skechers on my phone start to finish — homepage, Men's shoes, a slip-in sneaker I liked, tried to add it to my cart, and searched "comfort shoes." The shopping itself starts fine: clean layout, big readable type, an obvious "Hands Free Slip-ins" category that speaks right to what I'm looking for. But the trip falls apart exactly where it counts — I could never actually get a shoe in my cart, the cart page came back completely blank, and nothing about the site remembered or reflected that I was supposedly logged in. For a guy who just wants to find a cushioned slip-on and buy it without a hassle, this is where I'd give up and go check Hoka or just drive to DSW.

## 2. Business Impact Score (1-10)

**2/10** — down from yesterday's 3/10. The browsing/discovery layer is fine, but the transaction layer is broken: add-to-cart didn't register, the cart page rendered blank/white, and the cart badge stayed at "0" all the way through search. A shopper who can't get an item into a working cart doesn't convert, full stop.

## 3. What's Working

- **Homepage nav pills** (Slip-ins, Workout Walker, Arch Fit) put my exact interests front and center — no digging required.
- **"Hands Free Slip-ins" category** exists as a first-class men's category with a clear breadcrumb (Men > Shoes) and 327 results — that's the kind of direct path I want.
- **Fit filters** (Wide Fit / Extra Wide Fit / Medium Fit) are big, tappable buttons right at the top of the category page — genuinely useful for my feet, and easy to hit with a thumb.
- **Product page** is uncluttered: price, star rating, review count, and a big product photo without a wall of marketing copy.
- **Size grid** on the PDP is large and evenly spaced — no squinting or fat-fingering the wrong size.

## 4. What's Weak

- **Login appears to have done nothing.** The screenshot after "Log In" is pixel-identical to the homepage before it — same account icon, same cart badge at 0. If I signed in, I have no evidence of it, and nothing on the site looks personalized afterward.
- **Add to Cart silently failed.** The product page was still showing "Please select a size" with a red warning icon *at the same time* the flow was supposedly adding it to the cart. No size had been picked, so nothing should have — and apparently didn't — get added.
- **Cart page is a blank white screen.** Step 8 is completely empty — no header, no item, no "your cart is empty" message, nothing. That's not a UX friction point, that's a broken page.
- **Cart badge never updates.** It reads "0" from the homepage all the way through the search results page, confirming the add-to-cart never went through.
- **Search results ignore context.** I searched "comfort shoes" while deep in a Men's browsing session, and the top two results are both labeled "Women's." For a men's shopper, that's a miss — and it doesn't feel personalized in the slightest.
- **No arch support or cushioning detail visible without scrolling.** The product page shows name, stars, and price, but nothing about arch support, foam type, or cushioning tech above the fold — the stuff that actually decides whether I buy.

## 5. Recommendations

1. **Fix the cart rendering bug first.** A blank cart page is a hard stop for every shopper, not just me — this is the single highest-priority fix.
2. **Block "Add to Cart" clearly until a size is picked**, and make sure the button doesn't fire an add when validation fails — right now it looks like the request may be going through broken or not at all.
3. **Make login state visible.** Show my name or "Hi, Walker" somewhere after I log in — right now I can't tell if I'm signed in, which kills any trust in a personalized experience.
4. **Filter search by browsing gender/context** — if I've been in Men's the whole session, lead search results with men's product matches.
5. **Surface arch support / cushioning tech on the product page above the fold** — a one-line badge like "Arch Fit cushioning" next to the price would answer my #1 question before I scroll.

## 6. Bottom Line

I can find the shoe I want in two taps, which is more than I can say for a lot of sites. But I can't buy it — the cart is broken, my login doesn't seem to register, and search doesn't know I'm shopping for men's shoes. Discovery is a B+, checkout is an F, and checkout is the only part of this trip that actually makes them money.

## 7. Evidence

**Step 1 — Homepage:** Clean blue header, search/account/cart/menu icons all visible and reasonably sized, promo banner up top, big lifestyle photography below. Text is readable without zooming. No personalization visible — generic "Kids Styles" promo banner despite being a men's shopper. Easy enough to use one-handed.

**Step 2 — Dismiss Popups:** Screenshot is identical to Step 1 — no popup appeared to dismiss, or the dismissal had no visible effect. Not a problem in itself, but worth flagging since it means I can't confirm popup-handling works.

**Step 3 — Log In:** Screenshot is again identical to the homepage — same account icon (no name, no avatar), same "0" cart badge. If I actually logged in here, there's zero visible confirmation. This is where "does the logged-in experience feel personalized" fails outright — I can't tell I'm logged in at all.

**Step 4 — Men category:** A slide-out menu opened cleanly with MEN at the top and clear rows: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories, plus quick links for Hands Free Slip-ins, Wide Fit, Extra Wide Fit. Good-sized tap targets, readable text, logical grouping. This is the best screen in the whole journey for someone like me.

**Step 5 — Men > Shoes (Hands Free Slip-ins):** Breadcrumb (Men > Shoes) and page title ("Hands Free Slip-ins") orient me immediately. Fit filter buttons are large and easy to tap. 327 results shown, with two products visible above the fold, thumbnail color swatches, and a small cart-add icon on each tile. No visible cushioning/arch-support callouts on the tiles themselves, though.

**Step 6 — Product detail:** "Skechers Slip-ins: Skech-Gel," $105.00, 4.5 stars from 6 reviews, "Add to Wishlist" link, large product photo, left/right arrows for more images. No arch support or foam-cushioning description visible without scrolling — for a comfort-first shopper like me, that's exactly the content I want up top and it's missing.

**Step 7 — Add to Cart:** Size grid (7.0–14.0) is large and easy to tap. But the screen shows a red "Please select a size" warning at the same moment this was meant to represent adding to cart — meaning no size was chosen and the add likely failed. Cart badge still reads 0 in the header. This is the first sign the transaction flow is broken.

**Step 8 — View Cart:** Completely blank white screen — no header, no product, no empty-cart messaging, nothing rendered. This is a hard failure, not friction. If this happened to me, I'd assume the site crashed and close the app.

**Step 9 — Search "comfort shoes":** 1,504 results returned, so search itself functions. But the top two results are both women's shoes ("Contour Foam - Cozy Fit Pure Comfort," "Skechers Slip-ins: Glide-Step Comfort - Soft Power"), despite my entire session being in Men's. Not relevant to me, and not personalized to my browsing context at all. Cart badge is still "0," confirming the add-to-cart from Step 7 never went through.

---

## Technical Audit

## Technical Summary

Audit covers an 8-step mobile journey (Homepage → Log In → Men category → Men > Shoes → Product Detail → Add to Cart → View Cart → Search) on skechers.com (Salesforce Commerce Cloud / SFRA storefront). Findings span accessibility (17 axe violations), SEO metadata gaps on the cart page, elevated TTFB on two steps, a hardcoded test parameter reaching a production API, and rate-limiting (429) on a bot-detection endpoint. LCP and CLS were not captured for any step — see Performance.

## Accessibility

17 axe-core violations across 3 of 8 steps (Homepage, View Cart, Search).

**Critical (2, Homepage)**
- `aria-required-parent` — elements with roles requiring specific parent roles are not properly contained.
- `button-name` — one or more `<button>` elements have no accessible name (icon-only buttons without `aria-label`/text).

**Serious (2, View Cart)**
- `document-title` — page has no non-empty `<title>`.
- `html-has-lang` — `<html>` element missing `lang` attribute (present on Homepage/Log In/Men category per HTML samples, absent on Cart — suggests Cart renders through a different template or client-side overlay that doesn't inherit the base document head).

**Moderate (11)**
- `heading-order` (Homepage) — heading levels skip/out of sequence.
- `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `landmark-complementary-is-top-level` (Homepage, and complementary/unique repeat on Search) — duplicated/nested `<main>` and `aside`/complementary landmarks, likely from third-party widget markup (Bazaarvoice, Stylitics, personalization modules) injecting competing landmark roles.
- `region` (Homepage, Search) — content exists outside any landmark region.
- `landmark-one-main`, `page-has-heading-one` (View Cart) — no `<main>` landmark and no `<h1>` on the cart page.

**Minor (2)**
- `aria-allowed-role` (Homepage, Search) — role attribute used on an element type that doesn't permit it.

Pattern: the cart page (View Cart) is missing baseline document structure (title, lang, main, h1) that other steps have — indicates it's served by a distinct render path.

## SEO

- **Missing `<title>` on View Cart** — non-indexable/unlabeled page in browser history, bookmarks, and any crawler that reaches it.
- **Missing `html lang` on View Cart** — affects language detection for search engines and translation tooling on that step only; all other sampled pages correctly declare `lang="en"`.
- **No `<h1>` on View Cart** — no primary heading for on-page content hierarchy signal.
- Homepage/Log In/Men category HTML heads are dominated by ~20+ synchronous-order `<script async>` tags before any meaningful content markup is visible in the sampled source — not a direct ranking issue, but worth flagging alongside the render-blocking discussion below.

No other title/meta/canonical issues observed in the truncated samples for the remaining steps.

## Performance

| Step | TTFB | LCP | CLS |
|---|---|---|---|
| Homepage | 23ms | not captured | not captured |
| Log In | 388ms | not captured | not captured |
| Men category | 388ms | not captured | not captured |
| Men > Shoes | 26ms | not captured | not captured |
| Product detail | 29ms | not captured | not captured |
| Add to Cart | 29ms | not captured | not captured |
| View Cart | 119ms | not captured | not captured |
| Search | 28ms | not captured | not captured |

- **TTFB outliers**: Log In and Men category both measured 388ms vs. <30ms for most other steps — roughly 13–17x slower. Both are likely dynamically rendered/personalized responses (auth state check, category facet computation) rather than cached/static responses.
- **View Cart TTFB (119ms)** is also elevated relative to the PDP/Add-to-Cart/Search baseline (~26-29ms), consistent with a cart-session lookup.
- **LCP/CLS not recorded for any step** — this is an instrumentation gap in the capture, not a confirmed site issue. Given the volume of third-party scripts and the CORS-blocked stylesheet (see Console/Network below), CLS risk is plausible but unverified; re-run with Web Vitals capture enabled before drawing conclusions.

## Mobile Optimization

- Homepage/Log In/Men category head markup loads **20+ third-party scripts** (TikTok, Snapchat, Reddit Ads, Meta Pixel, Bing, Google Tag Manager x2 (`gtm.js` + `gtag/destination` x2), Quantum Metric, Monetate x2, Pulse Insights, Impact, Taboola, CreativeCDN, Brightspot/`brsrvr`, Yahoo `ytc.js` x2, WebFontLoader, Tune) marked `async`, but the sheer count adds parse/execution and main-thread contention that disproportionately affects lower-power mobile CPUs.
- `<html style="--vh: 6.64...px">` is set inline, indicating a JS-computed viewport-height custom property (a common workaround for mobile browser chrome/URL-bar resizing). This runs before/during first paint and is a candidate layout-shift source if it recalculates after initial render — cannot confirm without CLS data.
- Font loading uses WebFontLoader with `wf-*-active` classes appended to `<html>` (FOUT/FOIT swap pattern) — standard but worth checking against `font-display` for mobile-specific latency.
- No viewport `<meta>` tag or responsive markup was visible in the truncated `<head>` samples to confirm mobile viewport configuration; sample truncation limits verification — recommend inspecting full `<head>` source directly.

## Console & Network Errors

- **429 (rate limited), ×4** on `https://www.skechers.com/149e9513.../fp?x-kpsdk-v=j-1.2.616` — this is a Kasada bot-mitigation fingerprinting endpoint. Repeated 429s mid-session suggest either the automated crawl tripped bot-detection throttling, or real users can hit this under normal load — worth confirming this isn't degrading checkout/cart flows for legitimate mobile traffic.
- **429** on `https://www.skechers.com/cart/` itself — the cart page request was rate-limited, which is more concerning than the fingerprint endpoint since it's user-facing.
- **403 (CORS blocked)**: `https://web-assets.stylitics.com/style.css` — missing `Access-Control-Allow-Origin` header for a cross-origin stylesheet request from `www.skechers.com`. The stylesheet fails to load, so any Stylitics-widget styling depending on it will be unstyled/broken.
- **403**: `.../BazaarvoiceProductData-GetProduct?pid=test` — the query parameter `pid=test` is a literal placeholder/test product ID reaching a production API endpoint. This points to hardcoded test/debug code (or an unset dynamic value defaulting to `"test"`) shipping in production, causing a guaranteed failed request on whichever page triggers it.
- **Summarizer API warnings, ×4** ("Unsupported Summarizer API languages") — the page (or an injected third-party script) calls the experimental Chrome `Summarizer` built-in AI API without checking supported-language capability first, causing the call to abort. Not user-visible but indicates unguarded feature-detection for an experimental browser API.

## Recommendations

1. Fix View Cart page template to include `<title>`, `html lang="en"`, one `<main>` landmark, and an `<h1>` — closes 2 serious + 2 moderate violations in one template fix.
2. Add accessible names (`aria-label` or visible text) to unlabeled buttons on Homepage (critical `button-name`); audit for the specific icon-only controls involved.
3. Fix ARIA landmark nesting/duplication on Homepage and Search — likely caused by third-party widget markup (Bazaarvoice/Stylitics/personalization) injecting its own `<main>`/`aside`/`complementary` roles; wrap or reclassify those regions.
4. Remove or gate the hardcoded `pid=test` parameter in the Bazaarvoice `GetProduct` call — identify the calling code path and replace with the actual product ID or remove the debug call from production.
5. Add `Access-Control-Allow-Origin` on the Stylitics `style.css` response (or self-host/proxy it) to stop the CORS failure and restore intended styling.
6. Investigate the 429s on the Kasada fingerprint endpoint and on `/cart/` — confirm whether legitimate mobile sessions are being throttled, and whether crawl/monitoring traffic needs allowlisting.
7. Re-run capture with LCP/CLS instrumentation enabled — current data set has no Web Vitals beyond TTFB, which blocks any real performance verdict.
8. Investigate the 388ms TTFB on Log In and Men category (vs. <30ms elsewhere) — check for uncached/personalized server-side rendering on these two routes specifically.
9. Guard the `Summarizer` API call behind a language-support capability check before invoking it, to eliminate the repeated console errors.
## Recent history

- [[2026-08-09-site-journey-walker]] — 3/10 (2026-08-09)
- [[2026-08-08-site-journey-walker]] — 2/10 (2026-08-08)
- [[2026-08-07-homepage-www.skechers.com-walker]] — 6/10 (2026-08-07)

