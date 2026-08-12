---
slug: 2026-08-12-site-journey-walker
type: site
date: 2026-08-12
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-08-12**
## Full review
## 1. Executive Summary

I tried to do what I always do — look for something comfortable, hands-free, put it in my cart — and the site stopped me twice. I couldn't log in, and when I got a shoe picked out and hit Add to Cart, the cart page loaded up completely blank. Nothing. No shoe, no total, no checkout button. For a guy who just wants to buy a pair of shoes on his lunch break, that's a dealbreaker. The parts of the site that did work — the Men's menu, the Hands Free Slip-ins category, the search — were actually pretty decent and clearly built with comfort shoppers like me in mind. But none of that matters if I can't get to checkout.

## 2. Business Impact Score (1-10)

**2/10** — Same as yesterday. No improvement, and arguably worse: yesterday's issues, whatever they were, at least let the persona get further. Today the cart itself is a blank white page. A shopper who can't view or complete a cart doesn't buy shoes, full stop, no matter how nice the product pages look.

## 3. What's Working

- The hamburger "Men" menu is clean and readable, with big enough tap targets — Shoes, Shop by Activity, Comfort Technologies, and helpful shortcuts right at the bottom for **Hands Free Slip-ins**, **Wide Fit**, and **Extra Wide Fit**. That's exactly what I'm looking for, front and center.
- The Hands Free Slip-ins category page has filter chips for Wide Fit / Extra Wide Fit / Medium Fit right up top — no digging required.
- The product page for the Arch Fit D'Lites 330 is simple: one shoe, clear price ($110), star rating, and a slip-ins badge. No clutter.
- Search for "comfort shoes" actually returned comfort-relevant results (Contour Foam Cozy Fit, Slip-ins Glide-Step Comfort) — the search engine understands what I'm asking for, even if it showed me women's shoes first.

## 4. What's Weak

- **Log In did nothing.** I tapped it and the screen never changed — same homepage, before and after. No login form, no modal, nothing happened as far as I could see.
- **The cart page is broken — totally blank.** After adding an item, "View Cart" loaded a pure white page with nothing on it. No shoe, no price, no way to check out. This is the single biggest problem on the whole site.
- Add to Cart required picking a size first, with a "Please select a size" warning — reasonable, but the screenshot shows the cart badge still stuck at 0 even after going through the motion.
- The product only has 7 reviews and a middling 3-star average showing right at the top — not exactly reassuring when I'm about to spend $110.
- Search results led with women's shoes for a plain "comfort shoes" query — I'm shopping as a man, and it made me scroll to find something for me.

## 5. Recommendations

1. **Fix the cart page immediately.** A blank cart page is a full stop on every single purchase — this should be treated as a site-down emergency, not a minor bug.
2. **Fix or clearly diagnose the Log In flow.** If tapping Log In does nothing visible, customers will assume the site is broken and bail.
3. Add sort/filter to search results so gender-relevant results (Men's) surface first when there's a logged-in or inferred gender signal, or at least offer an obvious Men's/Women's toggle right at the top of results.
4. Show more reviews or a "hundreds of reviews across similar styles" callout — 7 reviews on a flagship comfort shoe looks thin and hurts trust.
5. After confirming the size-selection error, make sure the cart badge updates immediately and correctly so I know my item was actually saved.

## 6. Bottom Line

I found the shoe I wanted, in the size I wanted, in about four taps — genuinely good work on the front half of the journey. But then the cart just... didn't show up. I would have closed the app right there and driven to a DSW instead. A comfort shopper doesn't have patience for a broken checkout — my time's worth more than that.

## 7. Evidence

**Step 1 — Homepage:** Clean, mobile-friendly header with search, account, and cart icons. Promo banners ("25% Off Kids," "Up to 40% Off") stack at top, big hero imagery below. Text is readable without zooming, nav icons are a comfortable tap size. No personalization visible — I'm not logged in yet, and nothing here suggests the site knows who I am.

**Step 2 — Dismiss Popups:** Identical screenshot to the homepage — no popup ever appeared to dismiss. Not a problem for me personally (one less thing to tap through), but it means this step didn't actually test anything.

**Step 3 — Log In:** Screen is identical to the homepage again. I tapped Log In and nothing visibly changed — no login form, no modal, no redirect. On a phone, if I tap a button and nothing happens, I assume I mis-tapped or the site froze. This is a real point of confusion and, per the network logs, the page was getting rate-limited (429 errors) in the background, which likely explains the silent failure.

**Step 4 — Men category:** The slide-out Men's menu is well organized — Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories, plus direct shortcuts to Hands Free Slip-ins, Wide Fit, and Extra Wide Fit. Text is large, spacing is generous, easy to tap without missing. This felt like it was built for exactly what I need.

**Step 5 — Men > Shoes (Hands Free Slip-ins):** Breadcrumb (Men > Shoes) at top, category title, and fit filter chips (Wide Fit, Extra Wide Fit, Medium Fit) immediately visible. 329 results with a two-column product grid, images clear, quick-add icons on each shoe. Easy to scan on a phone.

**Step 6 — Product detail:** Skechers Slip-ins: Arch Fit D'Lites 330, $110, 3-star rating from 7 reviews, big clean product photo with swipe arrows. Simple and readable, though the low review count gave me pause before committing to buy.

**Step 7 — Add to Cart:** Size grid (8.0–13.0) with clear touch targets, a "Please select a size" warning shown, quantity dropdown, and a prominent blue Add to Cart button. Functionally fine and easy to use, but the cart icon at top still shows "0" — unclear if my add actually registered.

**Step 8 — View Cart:** Completely blank white screen. No product, no price, no checkout button, nothing. This is the point where I would have given up and left the site. The underlying data confirms it — the cart page returned a 429 (rate limited/blocked) error, so it never actually loaded my cart.

**Step 9 — Search "comfort shoes":** Returned 1,506 results with relevant products (Contour Foam Cozy Fit, Slip-ins Glide-Step Comfort), prices clearly shown, clean two-column layout. Search understood my intent, but the top results were women's shoes, which isn't personalized to me as a men's shopper.

---

## Technical Audit

## Technical Summary
The audit surfaced 16 axe-core accessibility violations concentrated on the Homepage, View Cart, and Search pages; 15 console errors dominated by repeated HTTP 429 responses from a bot-detection/fingerprinting endpoint; a CORS-blocked third-party stylesheet; and a 403 on a product-data API call. TTFB was healthy on the initial page loads (386–426ms) but dropped to near-zero (25–35ms) on later steps in the funnel, consistent with client-side/PJAX navigation rather than full server round-trips — LCP and CLS were not captured in this run, so paint and layout-stability findings cannot be reported.

## Accessibility
- **Homepage (8 violations):** 2 critical — `button-name` (buttons without discernible/accessible text) and `aria-required-parent` (ARIA roles used without required parent context); 5 moderate — duplicate/non-top-level `main` and `complementary` landmarks, non-unique landmarks, and content not contained in a landmark region; 1 minor — invalid `role` value (`aria-allowed-role`).
- **View Cart (4 violations):** 2 serious — missing `<title>` element and missing `lang` attribute on the `<html>` element; 2 moderate — no `main` landmark and no level-one heading on the page.
- **Search results ("comfort shoes") (4 violations):** 1 minor `aria-allowed-role`; 3 moderate — non-top-level `complementary` landmark, duplicate landmarks, content outside landmark regions.
- Category, product detail, and add-to-cart steps: No issues found in this scan.

## SEO
- View Cart page is missing a `<title>` element — this is a critical on-page SEO defect in addition to an accessibility one, since it affects browser tab labeling, search-result snippets, and social sharing.
- View Cart's `<html>` tag is missing `lang`, which can affect language-targeted indexing and screen-reader/translation behavior.
- Homepage and category pages ship `<html lang="en" class="g-local-en_US ...">` consistently, so locale signaling is otherwise present sitewide.
- Page markup on sampled pages is dominated by a large number of synchronously-injected third-party analytics/marketing scripts (GTM, TikTok, Snapchat, Pinterest, Reddit, Taboola, Monetate, Quantum Metric, etc.) ahead of primary content in the `<head>` — this doesn't block indexing directly but is worth flagging under Performance below since it competes for main-thread time during initial render.

## Performance
- TTFB for the first three funnel steps (Homepage 386ms, Log In 426ms, Men category 426ms) is within acceptable range for a server-rendered commerce page.
- TTFB collapses to 25–35ms from "Men > Shoes" onward (Shoes 27ms, PDP 25ms, Add to Cart 25ms, Search 35ms), with View Cart at 142ms. This pattern strongly suggests these steps are client-side transitions/XHR-backed updates rather than fresh document loads — real server-rendered TTFB for those routes was not captured by this methodology and should be re-measured with a hard navigation (or via a Navigation Timing / Lighthouse run) if server-render latency for those pages is a concern.
- LCP and CLS were not captured in this run (all reported as `?`) — no visual-stability or paint-timing conclusions can be drawn. Recommend re-running the audit with Web Vitals instrumentation (e.g., `web-vitals` library or Lighthouse/CrUX) attached to get real LCP/CLS values, particularly for the Homepage and PDP where third-party script volume is high.

## Mobile Optimization
- No mobile-specific layout, viewport, or touch-target defects were captured in the supplied data (no DOM/CSS diffing against a mobile viewport was included in this dataset).
- The one indirect mobile-relevant signal is the CSS custom property `--vh: 6.64px` set inline on `<html>`, indicating the site uses a JS-computed viewport-height polyfill (common for mobile browser chrome/URL-bar resizing). No functional issue observed, but it's a dependency on JS execution completing before viewport-relative units render correctly — worth confirming it doesn't cause a flash of incorrectly-sized layout on slow connections.

## Console & Network Errors
- **HTTP 429 (4 occurrences)** on `www.skechers.com/.../fp?x-kpsdk-v=...` — this is a Kasada bot-mitigation fingerprinting endpoint being rate-limited during the session. Repeated 429s here can indicate the anti-bot layer is throttling the automated test client itself, and in production could similarly throttle real users on shared IPs/proxies or during traffic spikes, potentially interfering with checkout-adjacent flows.
- **HTTP 429** on `www.skechers.com/cart/` — the cart page itself returned a rate-limit response during the run; if this occurs for real shoppers it would block cart access entirely.
- **HTTP 403** on `BazaarvoiceProductData-GetProduct?pid=test` — the `pid=test` query value suggests this may be a non-representative/placeholder request (possibly injected by test tooling or a stale reference on the page) rather than a real product lookup; recommend confirming this call is not firing with an invalid `pid` for real users.
- **CORS blocked (403)** on `web-assets.stylitics.com/style.css` — missing `Access-Control-Allow-Origin` header on a cross-origin stylesheet fetch from `www.skechers.com`. This will silently fail to apply Stylitics-related styling (likely an outfit/style-recommendation widget) with no visible error to the user beyond degraded styling for that component.
- **"Unsupported Summarizer API languages" (4 occurrences)** — these originate from the browser's built-in Summarizer/Writer AI API (Chrome's on-device AI), not from Skechers' own code; likely triggered by a browser extension or the test harness's browser build rather than a site defect. Recommend excluding from future reports unless reproduced in a clean browser profile.

## Recommendations
1. Fix the 2 critical Homepage a11y violations first: add accessible names to all icon/interactive buttons, and correct ARIA role nesting so roles requiring a parent context (e.g., listitem without list) are properly contained.
2. Add a `<title>` and `lang="en"` attribute to the View Cart document — currently the cart page appears to be rendered without standard document metadata, which is both an SEO and accessibility gap.
3. Consolidate duplicate/non-top-level `main` and `complementary` landmarks on Homepage and Search so screen-reader users get a single, predictable page structure; wrap remaining stray content in a landmark region.
4. Investigate the repeated 429s from the Kasada fingerprinting endpoint and on `/cart/` — confirm rate-limit thresholds aren't being hit by legitimate traffic patterns (e.g., shared corporate/mobile-carrier IPs), since a 429 on cart access is a direct conversion blocker.
5. Fix the CORS configuration on `web-assets.stylitics.com` (add proper `Access-Control-Allow-Origin`) or switch to a same-origin proxy for that stylesheet so the styling isn't silently dropped.
6. Re-run this audit with real Web Vitals instrumentation to capture LCP/CLS, and separately measure true server TTFB for the SPA-style routes (Shoes, PDP, Add to Cart, Search) via hard navigation, since the current sub-30ms figures for those steps likely reflect client-side transitions rather than server response time.
## Recent history

- [[2026-08-11-site-journey-walker]] — 2/10 (2026-08-11)
- [[2026-08-10-site-journey-walker]] — 2/10 (2026-08-10)
- [[2026-08-09-site-journey-walker]] — 3/10 (2026-08-09)

