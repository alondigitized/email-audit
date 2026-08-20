---
slug: 2026-08-20-site-journey-walker
type: site
date: 2026-08-20
persona: walker
score: "1/10"
previous_score: "1/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-1, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 1/10 (prev 1/10) · **Type:** Site journey · **2026-08-20**
## Full review
## 1. Executive Summary

I made it from the homepage all the way to the checkout doorstep and the door was locked twice. Browsing was fine — nav, product page, even the search results loaded — but the two moments that actually matter for a sale, logging in and viewing my cart, both failed outright. Tapping the account icon did nothing (I was left staring at the same homepage), and after "adding" a shoe to my cart, the cart page rendered as a blank white screen. I never even got confirmation the shoe was added — the cart badge stayed at "0" the whole trip. For a guy who just wants to find a cushioned slip-on and pay for it without a fuss, this is a dead end.

## 2. Business Impact Score (1-10)

**1/10** — same as yesterday, no meaningful change. Browsing and product discovery work, but both conversion-critical steps (account login, cart) are non-functional. A shopper cannot complete a purchase or verify their cart contents based on what was captured here.

## 3. What's Working

- Homepage hero banners are big, clear, and readable without zooming — good use of large product photography.
- The "Men" flyout menu is well organized: Shoes, Shop by Activity, Comfort Technologies, Collections — labels are plain English, no jargon.
- Men's Shoes category page smartly leads with "Hands Free Slip-Ins" and "Walking Shoes" tiles right up top — that's exactly what I'm shopping for.
- Product detail page has a big, clear price, star rating with review count, and a large product photo I could actually see the cushioning on.
- Size grid on the PDP is big-thumb friendly — properly sized buttons, not tiny text links.
- Search does return a large result set (1,506) for "comfort shoes," so the index isn't empty.

## 4. What's Weak

- **Login is broken.** Tapping the account icon produced no visible change — same homepage before and after. I have no way to sign in on my phone, which means no order history, no saved size, nothing personalized.
- **Cart is broken.** After "adding to cart," the View Cart step rendered a completely blank white page. No items, no error, no "your cart is empty" message — just nothing. That's the moment I'd give up and close the app.
- **Add to Cart likely never completed.** The screenshot right before checkout shows a red "Please select a size" warning still active, and the cart icon shows "0" in every single screenshot across the whole journey, including after checkout. It doesn't look like the shoe was ever actually added.
- **Search relevance skews wrong gender.** I searched "comfort shoes" as a guy who'd just been browsing men's shoes, and the top two results were women's styles ("Contour Foam - Cozy Fit," "Skechers Slip-ins: Glide-Step" both labeled Women's). That's not personalized to what I was just doing.
- No visible "added to cart" confirmation toast or feedback anywhere in the flow — even if the add had worked, I wouldn't have known.

## 5. Recommendations

1. Fix the account/login tap target so it actually opens a sign-in screen — this is table stakes and currently doesn't work at all.
2. Fix the cart page rendering — a blank white screen after checkout is a hard stop for any shopper, and today it would have cost you this sale.
3. Enforce size selection before allowing "Add to Cart" to be tapped (or show a clear inline error and keep the user on the PDP) rather than silently failing while the cart badge stays at zero.
4. Add a lightweight "Added to cart ✓" confirmation so shoppers get feedback the action worked.
5. Weight search results toward the shopper's recent browsing context (I'd just been in Men's Shoes) or at minimum let me filter search results by gender up front.

## 6. Bottom Line

Skechers has the bones of a decent mobile shopping experience — good photography, sensible categories, a PDP that speaks my language (cushioning, comfort, clear price). But none of that matters when I can't log in and can't see my cart. Today, on my phone, I could window-shop but I could not buy. That's a 1/10 experience for anyone actually trying to check out, unchanged from yesterday.

## 7. Evidence

**Step 1 — Homepage:** Clean layout, big rotating hero images (Slip-ins, Workout Walker, Arch Fit tabs), a "25% off Apparel & Bags" promo bar up top. Text is large and readable without zooming. Easy on a phone. No personalization visible yet — generic homepage, which is expected pre-login.

**Step 2 — Dismiss Popups:** Screen is identical to Step 1 — no popup appeared to dismiss, or the dismiss action had no visible effect. Not a big deal on its own, but worth flagging that nothing changed here.

**Step 3 — Log In:** Screen is again identical to the homepage. Tapping the account icon did not open a login form, modal, or new page. This is a real problem — as a shopper who wants my order history and saved sizes, I have no way in. Friction: total blocker. No personalization possible without this working.

**Step 4 — Men category:** A slide-out menu opened cleanly with "MEN" header and clear sections — Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories. Chevron arrows make it obvious these expand further. Good touch target size, easy to tap on a phone.

**Step 5 — Men > Shoes:** Landed on "Men's Shoes" with three well-photographed category shortcuts right at the top: Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers — exactly the comfort-first framing I care about. 735 results, filter/sort bar present and thumb-reachable. A "Free pickup at [Set Location]" toggle is a nice touch for locating a store near me.

**Step 6 — Product detail:** Skechers Slip-ins: Aero Burst, $165.00, 4-star rating from 141 reviews, big clean product shot. One friction point: an "Excluded from promotions" notice sits right under the price — clashes with the 25% off banner I just saw sitewide, which feels like a bait-and-switch to a price-conscious shopper like me.

**Step 7 — Add to Cart:** Size grid (7.0–14.0) is large and tappable — good for my eyes and thumbs. But a red "Please select a size" warning is showing, meaning the size wasn't actually chosen before the Add to Cart button (shown highlighted/focused) was tapped. This looks like the automation — and potentially a real user — could easily tap Add to Cart without registering a size.

**Step 8 — View Cart:** Completely blank white screen. No header, no items, no empty-cart messaging, nothing. This is the single worst moment in the journey — a shopper ready to check out hits a dead page.

**Step 9 — Search "comfort shoes":** 1,506 results returned, page loads fine with filter/sort controls. But the top two results shown are women's shoes (Contour Foam - Cozy Fit at $75, Skechers Slip-ins: Glide-Step at $85) — despite my whole session being in Men's. Doesn't feel personalized to what I was just browsing.

---

## Technical Audit

## Technical Summary
The journey traversed 8 steps (Homepage → Log In → Men category → Men > Shoes → PDP → Add to Cart → View Cart → Search). Server-rendered pages (Homepage, Log In, Men category) show TTFB in the 442–446ms range; the remaining steps (25–119ms) are client-side/AJAX transitions typical of a Salesforce Commerce Cloud (SFRA) storefront with a heavy third-party tag layer. The most significant finding is repeated 429 (rate-limited) responses from the site's own bot-detection fingerprinting endpoint and, more critically, from the `/cart/` endpoint itself.

## Accessibility
16 axe violations across 3 sampled pages, 2 critical, 3 serious:
- **Critical — `button-name`, `aria-required-parent`** (Homepage): unlabeled buttons and ARIA roles used without required parent roles will break for screen reader users.
- **Serious — `link-name`** (Homepage): links with no discernible text/label.
- **Serious — `document-title`, `html-has-lang`** (View Cart): the cart view is missing a non-empty `<title>` and the `lang` attribute is absent, despite both being present on other pages (`<html lang="en">` in the HTML samples) — indicates the cart is rendered through a different template/AJAX path that drops these attributes.
- **Moderate — `landmark-no-duplicate-main`, `landmark-unique`, `landmark-main-is-top-level`, `landmark-complementary-is-top-level`, `landmark-one-main`**: duplicate/nested `<main>` and `aside`/complementary landmarks on Homepage, View Cart, and Search — consistent with third-party widgets (e.g., Stylitics, Pulse Insights, Bazaarvoice) injecting their own landmark roles into the DOM.
- **Moderate — `page-has-heading-one`** (Homepage, View Cart, Search): no level-one heading present.
- **Minor — `aria-allowed-role`** (Homepage, Search): invalid role values on elements.

## SEO
- View Cart lacks a `<title>` element and `lang` attribute — both are indexing/rendering signals; a missing title is a direct SEO defect even though cart pages are typically noindexed, it should be verified this URL is excluded via robots meta or robots.txt.
- No `<h1>` detected on Homepage or Search results — heading hierarchy affects content understanding by crawlers.
- Homepage `<head>` is dominated by ~20 synchronous/async third-party tag-manager and pixel scripts (GTM, TikTok, Monetate, Quantum Metric, Bing, Impact, PulseInsights, etc.) loaded before/alongside core content — this doesn't block indexing directly but inflates render cost search engines account for in Core Web Vitals-based ranking signals (see Performance).

## Performance
- TTFB is acceptable across the board (all steps <450ms; most client-transition steps <120ms).
- LCP and CLS were not captured in this run (`?ms`) — cannot assess actual paint/layout-shift metrics; re-run with a tool that captures these before drawing performance conclusions.
- The cart endpoint (`https://www.skechers.com/cart/`) returned a **429** during the View Cart step — a rate-limited/throttled response on a transactional page is a functional performance risk (potential failed cart loads under normal traffic), not just a latency concern.
- The Kasada bot-mitigation fingerprint endpoint (`/fp?x-kpsdk-v=...`) was throttled with 429 four times in this single session — the client-side fingerprinting script is retrying aggressively and getting self-rate-limited, adding wasted network requests on every navigation.

## Mobile Optimization
- `--vh: 6.64px` inline custom property on `<html>` indicates a JS-based viewport-height fix (common workaround for mobile browser chrome resizing) — functioning as expected, no defect evident from the HTML sample.
- Webfont loading via `webfontloader.js` (cdnjs) blocks font-swap classes (`wf-mulish-*-active`) being applied to `<html>`, which can contribute to FOUT/CLS on slower mobile connections — cannot confirm impact without CLS data (see Performance).
- No mobile-specific markup defects observed in the HTML samples provided.

## Console & Network Errors
- **429 × 5**: repeated rate-limiting on the Kasada fingerprint endpoint (`/fp?x-kpsdk-v=j-1.2.697`) and once on `/cart/` — see Performance.
- **CORS failure**: `https://web-assets.stylitics.com/style.css` blocked by CORS policy (missing `Access-Control-Allow-Origin`), followed by `net::ERR_FAILED` — the Stylitics outfit-recommendation widget's stylesheet fails to load cross-origin, likely leaving that widget unstyled or non-functional on affected pages.
- **Summarizer API warnings** ("Unsupported Summarizer API languages…"): these originate from the browser's built-in on-device AI API (Chrome), not site code — not actionable by the site team.

## Recommendations
1. Fix `document-title` and `html-has-lang` on the View Cart view — confirm whether cart is server-rendered or AJAX-fetched and ensure the base template attributes persist.
2. Resolve duplicate/nested `<main>` and landmark roles — audit third-party widget injection points (Stylitics, Bazaarvoice, Pulse Insights) for improper ARIA landmark usage.
3. Add accessible names to unlabeled buttons/links flagged by `button-name`/`link-name`, and add a single `<h1>` to Homepage and Search results.
4. Investigate the Kasada fingerprinting endpoint's retry/backoff logic — it's generating repeated 429s per session, and confirm the 429 on `/cart/` isn't affecting real users' ability to load their cart.
5. Fix CORS headers on `web-assets.stylitics.com/style.css` or self-host the stylesheet.
6. Re-run the audit with LCP/CLS capture enabled — current data set has no paint/layout-shift metrics to validate Performance or Mobile Optimization further.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

