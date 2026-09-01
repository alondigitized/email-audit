---
slug: 2026-09-01-site-journey-walker
type: site
date: 2026-09-01
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-09-01**
## Full review
## 1. Executive Summary

I picked up my phone wanting a pair of hands-free, cushioned clogs, and Skechers.com let me down at two of the most important moments: it never actually logged me in, and when I tried to look at my cart, the screen went completely blank. I found a shoe I liked — the GO 3D Arch Fit clog — but I couldn't get it into a cart I could see, and I never got the "welcome back, Walker" treatment a returning customer should get. Search worked fine and actually surfaced relevant comfort shoes, which is the one bright spot.

## 2. Business Impact Score (1-10)

**2/10** — unchanged from yesterday. A blank cart page is a dead stop for revenue: if I can't see what's in my cart, I'm not checking out on my phone. Combined with a login button that visibly does nothing, this isn't a "friction" issue, it's a "close the app and call my daughter to order it for me" issue.

## 3. What's Working

- **Hamburger menu (Men category)** is clean, with big, thumb-friendly rows (Shoes, Shop by Activity, Comfort Technologies, Collections) and readable text — no squinting needed.
- **Category page for Men's Shoes** leads with exactly what I care about: "Hands Free Slip-Ins" and "Walking Shoes" as the first two tiles. Someone on that team understands my kind of shopper.
- **Product detail page** is simple and legible: clear price ($90), star rating, member-discount callout, big product photo. I know what I'm looking at.
- **Search for "comfort shoes"** returned genuinely relevant results — slip-ins and Max Cushioning sneakers, with prices and a markdown ($85 → $63.99) right up front. This is the kind of price-vs-quality signal I actually shop by.
- The 20%-off banner staying pinned across every page is a nice consistent touch — I always know the deal is still active.

## 4. What's Weak

- **Log In did nothing.** I tapped the login icon and the screen is pixel-for-pixel identical to the homepage — no modal, no form, no navigation. As far as I could tell, nothing happened.
- **View Cart is a blank white page.** After trying to add the clog to my cart, tapping the cart icon loaded nothing — no items, no "your cart is empty," no header, nothing at all.
- **Add to Cart triggered a validation error I hadn't been warned about.** I got to the size-selection screen and it already showed "Please select a size" in red before I'd done anything wrong — confusing sequencing.
- Cart icon stayed at "0" the entire time, so I have no idea if my clog ever actually got added.
- No comparison content anywhere in this path against Hoka, Brooks, or New Balance — I have to leave the site to do that math myself.
- Nothing in the experience felt personalized. Since login never worked, there was no name, no order history, no "welcome back" — I browsed as a total stranger the whole way through, cart and all.

## 5. Recommendations

1. **Fix the cart page rendering bug immediately** — a blank screen at the exact moment someone is ready to buy is the single most expensive bug on this list.
2. **Fix or clearly gate the login button** — if it opens a modal, make sure it renders; if it requires a separate flow, give some visible feedback (spinner, redirect) so I know the tap registered.
3. **Reorder the size-selection flow** so the "please select a size" warning appears only after a failed add-to-cart attempt, not before I've interacted with anything.
4. **Add a lightweight comparison or "why Arch Fit vs. other cushioned brands" module** on product pages — I'm actively cross-shopping Hoka and New Balance in my head anyway.
5. Once login is fixed, use it — show recently viewed items, past sizes, or reorder shortcuts so it's worth logging in at all.

## 6. Bottom Line

Skechers knows how to talk to a 62-year-old comfort shopper — the menu, the category tiles, and the search results all speak my language. But none of that matters if I can't log in and can't see my cart. Until those two things are fixed, this app can get me interested but can't get me to check out.

## 7. Evidence

**Step 1 — Homepage:** Clean hero banner, big Skechers logo top-left, clear promo banner ("20% OFF Regular Priced Items... Applied at Cart"), and a "Slip-ins / Arch Fit / Max Cushioning" category strip right under the header. Text is large and readable without zooming. Easy to use on a phone. No personalization — generic lifestyle photo, no name or "welcome back."

**Step 2 — Dismiss Popups:** Only change visible is the promo banner text shifting to "25% off Apparel." No popup or overlay was actually present to dismiss in this screenshot — so nothing to react to, which is fine, but also means I can't confirm a popup-dismiss actually happened.

**Step 3 — Log In:** Identical to the homepage screenshot — no modal, no login form, no navigation change. Tapping the login icon appears to have done nothing. This is a hard blocker: as a repeat shopper, I expect a login screen or at least some visual response, and I got neither. Zero personalization possible from here on.

**Step 4 — Men category:** Slide-out menu opened correctly with a "Back" and close (X) control top of screen. Rows are large, well-spaced, and easy to tap: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories. This part felt genuinely built for someone like me — simple, uncluttered, big text.

**Step 5 — Men > Shoes:** Landed on "Men's Shoes" with three big tiles up top: Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers — directly hitting my comfort/hands-free priorities. "Free pickup at [location]" toggle and Filter/Sort bar are visible and thumb-sized. 739 results shown, felt relevant and not overwhelming yet.

**Step 6 — Product detail:** GO 3D Arch Fit - 3D AirNex Clog, $90, 5-star (1 review), "Members Get 20% Off! Applied at Cart" messaging front and center, big clean product photo with swipe arrows. Easy to read, no zooming needed. No comparison-to-other-brands content, no cushioning/arch-support detail copy visible in this view.

**Step 7 — Add to Cart:** Size grid (M4/W5.5 through M14/W15.5) is well-sized for tapping, but a red "Please select a size" warning is already showing before any size was picked, along with a QTY selector and a highlighted blue "Add to Cart" button. Confusing sequence — felt like I'd done something wrong before I'd done anything at all.

**Step 8 — View Cart:** Completely blank white screen. No header, no items, no empty-cart message, nothing. This is a full breakdown — I have no way to know whether my clog is in the cart or verify what I'm about to buy.

**Step 9 — Search "comfort shoes":** Worked well. Returned "1,500 results" with two relevant products up top — Skechers Slip-Ins GO WALK Joy ($85, "Also in Wide") and Max Cushioning Endeavour ($85 → $63.99, "Also in Wide"). Prices, discounts, and wide-width availability all visible without tapping in — genuinely useful for my price-vs-quality comparison habit.

---

## Technical Audit

## Technical Summary

The journey traverses a Salesforce Commerce Cloud (SFCC/Demandware) storefront (`demandware.static` asset paths, `Sites-USSkechers-Site`) instrumented with a heavy third-party tag stack (GTM, Monetate, Quantum Metric, TikTok, Snapchat, Reddit, Taboola, Bing, Impact, Bazaarvoice/`brsrvr`, Pulse Insights) loaded largely via `async`/`vice-managed-src` script injection. Kasada bot-mitigation (`x-kpsdk-v` fingerprint endpoint) is active and returned repeated 429s during the session. Two categories of defects stand out: (1) SPA-style client-side routing produces pages with missing `<title>`, missing `lang`, and no landmark structure (View Cart), and (2) a bot-detection/rate-limiting subsystem is throttling the session's own client, which risks false-positive blocking of real mobile users.

## Accessibility

17 axe violations across 3 of 8 steps (Homepage, View Cart, Search).

- **Critical:** `aria-required-parent` (Homepage) — ARIA role used without its required parent role context; assistive tech will misreport structure.
- **Serious:** `link-name` (Homepage) — icon-only links without accessible text (untraversable by screen reader).
- **Serious:** `document-title`, `html-has-lang` (View Cart) — the cart view renders without a `<title>` or `lang` attribute, indicating this route is served/rendered outside the standard document shell (likely a fragment or SPA state not going through full SSR head injection).
- **Moderate:** Landmark violations repeated across Homepage and Search (`landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `landmark-complementary-is-top-level`, `region`, `page-has-heading-one`, `heading-order`) — indicates duplicated/nested `<main>` and `<aside>` regions, likely from third-party widget markup (Pulse Insights survey overlay, personalization modules) injecting competing landmarks into the DOM rather than confined containers.
- **Minor:** `aria-allowed-role` on Homepage and Search — role attribute misapplied to an element type that doesn't support it.

Pattern: violations cluster on pages where third-party scripts inject DOM (survey widgets, personalization) and on the cart, which appears to skip normal document head rendering.

## SEO

- View Cart is missing `<title>` and `lang` (see Accessibility) — both are direct on-page SEO signals; a crawlable cart URL without these is a defect regardless of whether cart is meant to be indexed (in which case it should be `noindex`ed with a proper head, not headless).
- Homepage/Log In/Men category HTML heads are dominated by ~20 synchronous-priority `async` third-party tag `<script>` tags before any apparent content signal — this doesn't block indexing but does compete for crawl/render budget in Googlebot's rendering queue.
- No canonical, meta description, or structured data visible in the truncated samples provided — cannot confirm presence/absence from the given excerpts; flagged as needing direct verification rather than inferred as missing.

## Performance

- TTFB is acceptable on full document loads: Homepage 517ms, Log In 455ms, Men category 455ms, View Cart 303ms.
- Men > Shoes, Product detail, Add to Cart, and Search all report TTFB in the 25–26ms range — too fast for a server round trip, indicating these steps are client-side (SPA/XHR-driven) transitions reusing the already-loaded document rather than fresh navigations. This makes TTFB not a meaningful metric for those steps; **LCP/CLS should have been captured client-side (e.g., via PerformanceObserver) instead of relying on navigation timing**, and their absence here is a measurement gap, not a "no issues" result.
- LCP and CLS are unpopulated (`?`) for every single step. This is a data collection failure in the audit tooling, not a site finding — the report cannot make a substantiated Core Web Vitals claim without this data and should not be read as "vitals are fine."

## Mobile Optimization

- Cannot assess responsive layout, tap-target sizing, or viewport-specific rendering from the data provided (no viewport meta, no visual/layout data supplied). No code-level mobile-specific defect confirmed from the HTML excerpts.
- The Kasada fingerprint challenge (`/fp?x-kpsdk-v=...`) returning 429 mid-session is a mobile-relevant risk: aggressive bot mitigation that throttles legitimate sessions disproportionately affects mobile users on shared IPs/carrier NAT, who are more likely to trip rate limits than desktop users on residential IPs.

## Console & Network Errors

- **429 (rate-limited), Kasada fingerprint endpoint** `/…/fp?x-kpsdk-v=j-1.2.728` — fired repeatedly (5 occurrences) across Men category, product, and cart steps, including once against `/cart/` itself. Bot-detection is throttling the client during a normal single-session shopping flow, which is a false-positive risk on cart-critical requests.
- **403 (Forbidden), Pulse Insights survey** `survey.pulseinsights.com/serve` — occurred 3 times (once per subsequent pageview_count), a survey widget being blocked mid-session, likely a CORS/referrer or quota rejection from the third-party vendor. Non-blocking to core commerce flow but indicates a misconfigured or rate-limited integration.
- **"Unsupported Summarizer API languages"** — this is a Chrome built-in AI API (`Summarizer`) warning generated by the browser/extension environment, not application code; not a site defect.
- No 4xx/5xx errors observed on core commerce endpoints (PDP, add-to-cart, search) themselves — errors are confined to third-party/anti-bot infrastructure.

## Recommendations

1. Fix View Cart's missing `<title>` and `lang` attribute — audit whether cart renders through the standard SSR template; if it's a client-rendered fragment, ensure head metadata is set on route change.
2. Contain third-party widget markup (Pulse Insights, personalization overlays) to prevent it from injecting duplicate/nested `main`/`aside` landmarks into the primary document — wrap injected widgets in `role="region"`/shadow DOM or non-landmark containers.
3. Audit icon-only links flagged by `link-name` and add `aria-label`/visually-hidden text.
4. Investigate Kasada rate-limiting thresholds — a single-session flow triggering repeated 429s on its own fingerprint calls (including one against `/cart/`) suggests thresholds may be miscalibrated for legitimate mobile traffic patterns; coordinate with the bot-mitigation vendor.
5. Re-run the audit with real LCP/CLS capture (PerformanceObserver-based, not navigation-timing-only) — current Web Vitals data is unusable for 7 of 8 steps and 100% of LCP/CLS values.
6. Investigate the Pulse Insights 403s — check API key/quota/referrer allowlist for the `survey.pulseinsights.com` integration.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

