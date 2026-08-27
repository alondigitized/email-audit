---
slug: 2026-08-27-site-journey-walker
type: site
date: 2026-08-27
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-08-27**
## Full review
## 1. Executive Summary

I went to buy a pair of those slip-in shoes I keep seeing in my email, and I couldn't get all the way through it. The site looks nice enough on my phone — big pictures, decent buttons on the menu — but when I got to my cart to check what I'd picked out, the screen just went blank. White. Nothing. That's the whole point of shopping online — seeing what's in your basket before you pay — and it flat-out didn't work. I also never actually got logged in, even though I tapped "Log In." Two of my nine steps just didn't do what they were supposed to.

## 2. Business Impact Score (1-10)

**2/10** — unchanged from yesterday, and that's being generous. A blank cart page is a hard stop on revenue, not a rough edge. Everything upstream of it (browsing, product page, even the "Hands Free Slip-Ins" callout that's exactly my thing) works fine, but if I can't see my cart, I'm not buying today. I'd probably just close the app and go to DSW.

## 3. What's Working

- The Men > Shoes menu is genuinely easy to tap through — big rows, clear labels, arrows telling you there's more underneath. No squinting needed.
- The Men's Shoes landing page leads with "Hands Free Slip-Ins" and "Walking Shoes" tiles right up top — that's speaking directly to what I actually want.
- The product page for the Slip-ins Contour Foam shoe is well laid out: price, 20% off code, 4.5 stars from 97 people, and a "Hands Free Slip-ins" badge right on the photo. That builds trust fast.
- Size and width selectors on the product page are big, clearly labeled buttons — my thumbs didn't have any trouble with those.

## 4. What's Weak

- **The cart page is a blank white screen.** Nothing loads. This is the most important page in the whole purchase and it's broken.
- **Logging in did nothing.** After tapping "Log In," the screen looks identical to the homepage — still says "Login" in the header, cart still shows 0. I have no idea if I'm signed in or not, and there's zero personalization anywhere after that step — no "Welcome back," no name, nothing.
- **Add to Cart didn't actually add anything.** The header cart count stayed at "0" the whole time, and the screen shows red warnings "Please select a width" and "Please select a size" — meaning my attempt to add the shoe got blocked, silently, with no shoe in the cart.
- Search for "comfort shoes" gave me women's shoes first (a "Relaxed Fit" flat and a women's GO WALK). I'm a man who was just browsing men's shoes — if I'm logged in, the site should know that.

## 5. Recommendations

1. Fix the cart page rendering — this is a P0 bug, not a nice-to-have. Nothing else matters if the basket doesn't load.
2. Make login actually visibly work — show my name or "Welcome back" somewhere so I know it took.
3. Once logged in, weight search and browse results toward my gender and recent category (I was just in Men's Shoes — don't show me women's flats first).
4. Add-to-cart should either scroll me to the missing width/size field with a clear nudge, or make the default selections smarter, so I'm not stuck on a validation error I have to hunt for.

## 6. Bottom Line

Same score as yesterday: 2 out of 10. The parts of the site aimed at guys like me — hands-free slip-ins, arch support callouts, big tappable menus — are genuinely good. But a shopping site that can't show me my own cart or confirm I'm logged in isn't a shopping site I can use. Fix the plumbing before worrying about anything else.

## 7. Evidence

**Step 1 — Homepage:** Clean layout, top banner "20% OFF Top Sellers," clear nav row (search, account, cart, menu). A big Aeroburst running-shoe hero image dominates the fold — not really speaking to a walking/comfort guy like me, but readable and not cluttered. No personalization visible; I'm anonymous.

**Step 2 — Dismiss Popups:** Screenshot is identical to the homepage — no popup was visible to dismiss, or it closed instantly. No friction either way, but nothing to report as "working" here either since there's no evidence a popup existed.

**Step 3 — Log In:** Identical to the homepage again — still says "Login" in the top bar, cart still at 0. Whatever tap or flow was supposed to log me in, it didn't visibly happen. On a phone this is confusing — I'd tap it again, maybe twice, wondering if it registered at all. Not personalized because it never logged in.

**Step 4 — Men category:** A slide-out menu opened with "MEN" at top, a back arrow, and rows for Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories. Each row is a full-width tap target — easy for my thumb, easy to read. This is one of the better pieces of the whole journey.

**Step 5 — Men > Shoes:** "Men's Shoes" header with three photo tiles: Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers — directly on-target for me. Below that, a toggle for "Free pickup at [location]," then Filter/Sort controls and "753 results." Text is a little small on the filter bar but not a dealbreaker.

**Step 6 — Product detail:** Skechers Slip-ins: Contour Foam - Cozy Fit, $88.00, "Limited Time 20% Off," 4.5 stars/97 reviews, "Add to Wishlist" heart icon, and a "Hands Free Slip-ins" badge on the shoe photo. This page does a good job building confidence — price, social proof, and the comfort tech are all visible without scrolling much.

**Step 7 — Add to Cart:** Width buttons (Medium/Wide) and a full size grid (7.0–13.0) are large and easy to tap. But both fields show red warning text — "Please select a width" and "Please select a size" — meaning the Add to Cart tap fired before a size/width was chosen, so nothing actually got added. Cart badge in the header still reads 0.

**Step 8 — View Cart:** Completely blank white screen. No header, no items, no error message, nothing. This is a full page failure — if I hit this on my phone I'd assume the site crashed and give up.

**Step 9 — Search "comfort shoes":** 1,528 results returned instantly, which is good coverage. But the top two results are a women's "Relaxed Fit: New Cool" flat ($65) and a women's "GO WALK Arch Fit 2.0" ($85) — despite my whole session being in Men's Shoes. No sign the search knows who I am or what I was just browsing.

---

## Technical Audit

## Technical Summary
Audit covered 8 steps of a mobile journey through skechers.com (Homepage → Log In → Men category → Men > Shoes → PDP → Add to Cart → View Cart → Search). TTFB was healthy throughout (66ms–390ms), but LCP/CLS were not captured for any step, leaving a gap in the render-performance picture. The most significant findings are repeated HTTP 429 responses from a bot-detection/fingerprinting endpoint (including one on `/cart/` itself), a CORS-blocked third-party stylesheet, and cart/search pages missing baseline accessibility landmarks (including a missing `<title>` on View Cart).

## Accessibility
18 axe violations total, 2 critical, 3 serious, 11 moderate, 2 minor.
- **Critical:** `button-name` and `aria-required-parent` on Homepage — buttons without discernible text and ARIA roles used without required parent roles will break screen-reader navigation.
- **Serious:** `link-name` (Homepage) — links with no accessible name. `document-title` and `html-has-lang` (View Cart) — the cart page has no `<title>` and no `lang` attribute on `<html>`, which breaks screen reader language handling and browser tab identification.
- **Moderate:** Landmark structure issues recur across Homepage, View Cart, and Search (`landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-one-main`, `landmark-unique`, `landmark-complementary-is-top-level`, `region`) — indicates duplicated/nested `<main>` and `<aside>` elements, likely from third-party widget injection (see Console errors). `heading-order` and `page-has-heading-one` show broken heading hierarchy on Homepage and View Cart.
- **Minor:** `aria-allowed-role` on Homepage and Search — invalid role values on elements.

## SEO
- View Cart is missing a `<title>` element (`document-title` violation) — this page will show a blank or fallback title in search results and browser history.
- View Cart is missing `lang` on `<html>` — affects language-targeted indexing/rendering.
- Duplicate/non-top-level `<main>` landmarks (Homepage, View Cart, Search) indicate malformed or duplicated DOM structure, which can confuse content extraction by crawlers as well as assistive tech.
- No canonical/meta data issues surfaced in the provided HTML samples beyond the above; full `<head>` was truncated so meta tag review is incomplete.

## Performance
- TTFB is strong across all steps (390ms Homepage down to 62–150ms on deeper pages), suggesting effective edge/CDN caching or SSR optimization for HTML delivery.
- **LCP and CLS were not captured for any step** — no performance verdict can be given on render speed or layout stability. This is a measurement gap, not a confirmed pass; recommend re-running with a tool that captures Web Vitals via PerformanceObserver (e.g., Lighthouse or web-vitals.js injection) before drawing conclusions.
- Homepage HTML shows a heavy synchronous/async third-party script payload (TikTok, Snapchat, Pinterest, Taboola, Quantum Metric, Monetate, Bing, GTM, Reddit, Impact, CreativeCDN, Bloomreach, PulseInsights, go2sdk, WebFontLoader — 20+ distinct third-party origins) loaded on every page. Even as `async`, this volume of third-party JS is a likely contributor to poor LCP/INP that isn't visible in TTFB and should be validated once LCP data is collected.

## Mobile Optimization
- No mobile-specific viewport, touch-target, or responsive-layout defects are present in the data provided (HTML `<head>` was truncated before viewport meta tag; cannot confirm one way or the other).
- The CORS-blocked Stylitics stylesheet (see below) would degrade any mobile styling/widget dependent on it, but this is a cross-cutting network issue, not mobile-specific.
- No issues found beyond what's covered in other sections given the available data.

## Console & Network Errors
- **429 Too Many Requests** (5 occurrences) on a Kasada bot-detection/fingerprinting endpoint (`.../fp?x-kpsdk-v=...`), plus a **429 on `/cart/`** itself. Rate-limiting on the cart route is a functional risk — repeated 429s here can degrade or block checkout flow, not just analytics.
- **CORS policy block**: `https://web-assets.stylitics.com/style.css` blocked from origin `https://www.skechers.com` — missing `Access-Control-Allow-Origin` header on the Stylitics response causes `net::ERR_FAILED` and the stylesheet fails to load entirely.
- **Unsupported Summarizer API languages** (4 occurrences) — repeated warnings from a Chrome built-in AI API (Summarizer) being invoked with unsupported language parameters. This aborts the API call each time; likely from a third-party script probing browser AI capabilities without proper language negotiation.

## Recommendations
1. Investigate the 429 on `/cart/` and repeated 429s on the Kasada fingerprinting endpoint — determine if this is client-side over-polling or server-side rate-limit misconfiguration, since it touches the cart route directly.
2. Add `Access-Control-Allow-Origin` to the Stylitics stylesheet response, or self-host/proxy the asset, to stop the CORS failure and restore the dependent styling.
3. Fix View Cart's missing `<title>` and `<html lang>` attributes — both are serious axe violations with direct SEO and accessibility impact.
4. Resolve duplicate/non-top-level `<main>` and `<aside>` landmarks on Homepage, View Cart, and Search — likely caused by third-party widget markup injected outside the primary DOM structure.
5. Add discernible accessible names to unlabeled buttons and links on Homepage (critical/serious violations).
6. Re-run the audit with LCP/CLS capture enabled to close the current Web Vitals gap before making performance claims.
7. Investigate the source of the repeated Summarizer API calls with unsupported languages — identify and either remove or correctly configure the script triggering it.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

