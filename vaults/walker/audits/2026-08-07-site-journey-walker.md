---
slug: 2026-08-07-site-journey-walker
type: site
date: 2026-08-07
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-08-07**
## Full review
## 1. Executive Summary

I went shopping for a slip-on sneaker on my phone during lunch, and I never actually got to finish anything. The Men's slip-in category page and product page look clean, but the trip broke down hard at the two steps that matter most: logging in and checking my cart. Tapping the account icon didn't take me to a login screen at all — it popped open the Men's menu instead. Then when I tried to add the Britto shoe to my cart, the site threw an error message right on the page ("there was a problem on our end"), and when I went to look at my cart, I got a completely blank white screen. No header, no shoe, nothing. That's not a shopping experience, that's a dead end.

## 2. Business Impact Score (1-10)

**2/10** — flat with yesterday's 2/10, no real improvement. If anything the blank cart page is worse than a bug I can at least understand — it's a total whiteout at the exact moment I'm ready to buy.

## 3. What's Working

- The Men's mega-menu (Shoes, Shop by Activity, Comfort Technologies, Wide/Extra Wide Fit) is laid out in big, plain rows I can tap without squinting.
- The "Hands Free Slip-ins" category page is exactly what I was looking for — filter pills for Wide Fit / Extra Wide Fit / Medium Fit are big blue buttons, easy to hit with a thumb.
- Product photos are large and load clearly, and the price ($90) is in big bold type I can read without my readers.
- Text size throughout is generous — I didn't have to pinch-zoom anywhere.

## 4. What's Weak

- **Login is broken.** Tapping the person icon should get me to sign in — instead it opened the Men's category flyout. I never saw a login form once in this whole trip.
- **Add to Cart threw an error.** Right on the product page: "Sorry, there was a problem on our end! Please refresh your browser and try adding to cart again." Combined with "Only 1 left in stock," that's a gut-punch — I think I might lose the shoe.
- **Cart page is blank.** Totally white screen, no content at all. If I really did have a problem adding to cart, this confirms it — there's nothing to check out with.
- **Search ignored what I was just browsing.** I'd just spent the whole session in Men's shoes, but searching "comfort shoes" served me Women's shoes as the top two results.
- **Homepage content isn't for me.** Two young models in oversized streetwear, a "Kids Styles 25% off" banner, and a "Skechers x Care Bears" collab banner — none of that speaks to a 62-year-old guy who wants a cushioned, slip-on walking shoe.
- **Thin trust signal.** The featured Britto product only has 2 reviews — not enough for me to trust the fit or comfort claims on a $90 shoe.
- **No arch support / cushioning callouts visible** anywhere in the parts of the product page I could see — just a logo badge that says "Hands Free Slip-ins," no actual comfort tech explanation.

## 5. Recommendations

1. Fix the account icon so it actually opens a login/sign-in screen, not the Men's menu.
2. Fix the Add to Cart server error — this is a hard revenue blocker.
3. Fix the blank cart page — I should always see what's in my cart, even if it's empty.
4. Make search context-aware: if I've been browsing Men's, don't lead with Women's results for the same query.
5. Put comfort/cushioning/arch-support messaging directly on the PDP above the fold — that's the whole reason I'm shopping this brand.
6. Swap out promos that don't apply to me (kids, Care Bears) for something relevant to a comfort-shopping adult male, or at least don't lead with them.

## 6. Bottom Line

Nice-looking menus don't matter if I can't log in or check out. This visit, I couldn't do either. Until the cart and login actually work, this is a browsing site, not a store, for someone like me.

## 7. Evidence

**Step 1 — Homepage.** Clean header, big Skechers logo, search/account/cart/menu icons all a good tap size. Top banner: "25% Off Kids Styles" — not for me. Below that, "Up to 40% off Select Styles." Nav pills for Slip-ins/Aero Burst/Arch Fit/BOBS are legible. Big hero image of two young models in an urban photoshoot — stylish, but doesn't say "comfort dad shoe" to me at all. No personalization, cart shows 0. Easy to read, nothing hard to tap, but visually it's aimed at a much younger shopper.

**Step 2 — Dismiss Popups.** No popup actually appeared to dismiss — the page just looks like the homepage again, except the promo banner rotated to "Skechers x Care Bears: SHOP NOW." Same hero image. Nothing changed for me functionally.

**Step 3 — Log In.** This is where it went wrong. Instead of a sign-in form, I got the "MEN" flyout menu (Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories, plus quick links for Hands Free Slip-ins/Wide Fit/Extra Wide Fit). The menu itself is easy to read and tap, but I never got logged in, so nothing after this point could be personalized to me.

**Step 4 — Men category.** Same menu as above — big rows, clear back/close buttons top corners. Good touch targets, but this is really a continuation of the broken login step, not a distinct destination.

**Step 5 — Men > Shoes (Hands Free Slip-ins).** Breadcrumb "Men > Shoes," headline "Hands Free Slip-ins," filter pills for fit width, a free-pickup toggle, Filter/Sort bar, "329 results." Two-column grid with clear photos and color swatches. This page nails what I came for — slip-on comfort shoes, easy to browse on a phone.

**Step 6 — Product detail.** "Skechers Slip-ins Britto: UNO – Britto Landscape," $90.00, 5 stars from only 2 reviews, "Add to Wishlist" heart icon, "Excluded from promotions" flagged in orange. The shoe itself is a wild multicolor artist-collab pattern — fun, but not what I'd picture as a comfort walking shoe, and there's no visible cushioning/arch-support copy on this part of the page.

**Step 7 — Add to Cart.** Size selector shows 11.0 picked, "Only 1 left in stock" warning, and directly below it a red error: "Sorry, there was a problem on our end! Please refresh your browser and try adding to cart again." QTY dropdown, Ship It/Free Pickup radios, a Skechers Plus membership pitch, and a glowing "Add to Cart" button — but the error suggests my click didn't actually work.

**Step 8 — View Cart.** Completely blank white screen. No header, no logo, no product, nothing. Given the error in Step 7, this looks like the item never made it into my cart and the cart page itself failed to render anything at all.

**Step 9 — Search "comfort shoes".** Header says "comfort shoes" with 1,490 results. First two products shown are both labeled "Women's" — Contour Foam Cozy Fit ($75) and Relaxed Fit Glide-Step Comfort ($48.99–$65) — despite my entire session being in Men's. Not personalized to what I was just looking at.

---

## Technical Audit

## Technical Summary

Mobile journey audit across 8 steps (Homepage → Log In → Men category → Men > Shoes → PDP → Add to Cart → View Cart → Search). TTFB was captured for all steps and is generally healthy (26–382ms). LCP and CLS were not captured in this run — Core Web Vitals cannot be assessed from the available data. 16 axe violations were found (1 critical, 4 serious/moderate mix), concentrated on the Homepage, View Cart, and Search results pages. 10 console errors and 8 distinct network failures were logged, dominated by repeated 429s against a bot-detection/fingerprinting endpoint and one blocked third-party stylesheet.

## Accessibility

- **Homepage (8 violations):** `aria-required-parent` is flagged **critical** — an element with an ARIA role requiring a specific parent role is not properly contained, which will break assistive-tech traversal. Multiple landmark issues (`landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `landmark-complementary-is-top-level`, `region`) indicate more than one `<main>`/duplicate landmark regions and content not wrapped in a landmark — consistent with multiple third-party widgets injecting their own `role="main"`/`role="complementary"` containers into the DOM. `heading-order` indicates a non-sequential heading hierarchy (e.g., skipping from h1 to h3).
- **View Cart (4 violations, serious):** `document-title` — empty/missing `<title>`; `html-has-lang` — missing `lang` attribute on this document (inconsistent with the `<html lang="en">` seen on other pages, suggesting this page may render via a different template/AJAX-refresh path that doesn't inherit the shell's `<head>`); `landmark-one-main` and `page-has-heading-one` — no `<main>` landmark or `<h1>` present.
- **Search results (4 violations):** Same landmark/region pattern as Homepage (`landmark-complementary-is-top-level`, `landmark-unique`, `region`) plus `aria-allowed-role`, again pointing to third-party injected markup with invalid/duplicate ARIA roles.

## SEO

- The missing `<title>` on View Cart (see `document-title` above) is a dual accessibility/SEO defect — cart pages are typically noindexed, but if this template is shared with any indexable page it would ship without a title tag.
- No canonical tag, meta description, or robots directive data was captured in this run; SEO coverage here is limited to what axe surfaced. Recommend a dedicated crawl/Lighthouse SEO pass for full coverage.

## Performance

- TTFB is fast on statically-served/cached routes (Homepage, Men>Shoes, PDP, Add to Cart, Search: 26–29ms) but jumps to 382ms on both Log In and Men category — identical values across two otherwise-unrelated steps is worth confirming isn't a measurement artifact (e.g., both hitting the same upstream/session-validation call).
- **LCP and CLS were not captured** for any step — this run cannot speak to Core Web Vitals pass/fail. This is an instrumentation gap, not a "no issues found" result.
- The HTML source shows a large synchronous/async third-party script surface loaded on every page: GTM, Monetate (custom.js + entry.js), Quantum Metric, TikTok Pixel, Google Ads/Analytics destinations, Bing, Snapchat, Reddit, Facebook, Pinterest, Impact, CreativeCDN, Taboola, stape, PulseInsights, Bazaarvoice, WebFontLoader, Tune/go2sdk. Even marked `async`, this volume of tag-manager-orchestrated scripts is a common driver of long tasks and delayed LCP/INP, and is consistent with the repeated 429/403 network failures below (several of these vendors are rate-limiting or rejecting requests).

## Mobile Optimization

- `style="--vh: 6.64...px"` on `<html>` indicates a JS-computed viewport-height custom property (standard workaround for mobile browser chrome/`100vh` inconsistencies) — functioning as expected, no issue found.
- Insufficient data was captured on responsive meta viewport tag, tap-target sizing, or mobile-specific asset delivery (srcset/picture) to make a determination — not included in the HTML samples provided.

## Console & Network Errors

- **429 (Too Many Requests) — repeated 5x** on `https://www.skechers.com/149e9513.../fp?x-kpsdk-v=j-1.2.616`. The `kpsdk` parameter identifies this as a Kasada bot-mitigation fingerprint endpoint. It is being rate-limited during a normal navigation sequence (including on `Cart-AddProduct` and `/cart/`), which risks false-positive bot flagging or degraded checkout behavior for real users on shared IPs, corporate NAT, or during traffic spikes.
- **403 (Forbidden)** on `BazaarvoiceProductData-GetProduct?pid=test` — the literal `pid=test` query value strongly suggests a hardcoded/placeholder product ID left in a code path (rather than the actual SKU being interpolated), which will 403/fail for any real product too if this pattern is systemic.
- **CORS policy block** on `web-assets.stylitics.com/style.css` — missing `Access-Control-Allow-Origin` header prevents this stylesheet from loading cross-origin, likely producing an unstyled/broken Stylitics outfit-recommendation widget.
- **net::ERR_FAILED** — one request failed outright (correlates with the CORS-blocked stylesheet above).
- **429 on `Cart-AddProduct`** — the add-to-cart AJAX endpoint itself was rate-limited during this run, a functional risk beyond the bot-detection noise.

## Recommendations

1. Instrument LCP/CLS capture (Lighthouse CI or field RUM) — current data can't validate Core Web Vitals.
2. Fix the critical `aria-required-parent` violation and consolidate duplicate `main`/landmark roles on the Homepage, likely originating from third-party widget markup injected outside the app's own landmark structure.
3. Investigate why the View Cart template ships without `<title>`, `lang`, `<main>`, or an `<h1>` — check whether it's rendered via a different code path (e.g., partial AJAX refresh) than the rest of the site shell.
4. Review Kasada (`kpsdk`) rate-limit thresholds — 429s on the fingerprinting endpoint during add-to-cart/checkout are a functional risk, not just noise.
5. Remove/replace the hardcoded `pid=test` query value in the Bazaarvoice product-data call.
6. Fix CORS headers on `web-assets.stylitics.com/style.css` or self-host/proxy the asset.
7. Given the volume of third-party tags, audit for consolidation or lazy-loading below-the-fold vendors to reduce main-thread contention once LCP/INP instrumentation is in place.
## Recent history

- [[2026-08-06-site-journey-walker]] — 2/10 (2026-08-06)
- [[2026-08-05-site-journey-walker]] — 2/10 (2026-08-05)
- [[2026-08-04-site-journey-walker]] — 3/10 (2026-08-04)

