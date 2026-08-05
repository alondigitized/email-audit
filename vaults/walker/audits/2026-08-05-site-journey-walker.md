---
slug: 2026-08-05-site-journey-walker
type: site
date: 2026-08-05
persona: walker
score: "2/10"
previous_score: "3/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 3/10) · **Type:** Site journey · **2026-08-05**
## Full review
## 1. Executive Summary

I walked through skechers.com on my phone like I always do — browse Men's, find a slip-on with arch support, throw it in the cart, maybe search around for other options. The category browsing and product page held up fine: clean layout, readable text, a "Hands Free Slip-ins" section that's exactly my speed. But two things stopped me cold: the "Log In" step never actually showed me a login screen (it dumped me into the same Men's menu I'd already seen), and the cart page came up **completely blank** — no header, no items, nothing. That's a broken shopping trip, not a friction point.

## 2. Business Impact Score (1-10)

**2/10** — down from yesterday's 3/10. A blank cart page is a hard stop on revenue; I couldn't have finished this purchase if I tried. Combine that with a login flow that appears to go nowhere and a comfort-shoe search that leads with women's product, and this visit would have ended with me closing the app and driving to a DSW instead.

## 3. What's Working

- No popup or cookie banner slowed me down getting into the site — one less thing to squint at and dismiss.
- The Men > Shoes > "Hands Free Slip-ins" path is a real, well-organized category page with Wide Fit / Extra Wide Fit / Medium Fit filters right up top — that's exactly the kind of foot-shape accommodation I look for at 62.
- Product page text is large and readable without zooming: price, product name, and the "Hands Free Slip-ins" badge are all easy to spot at a glance.
- The Add to Cart screen has a big, clearly labeled size grid and a sticky blue Add to Cart button — good touch target size for my thumbs.
- 326 results in that slip-ins category tells me they've actually built out this line, not just a marketing banner.

## 4. What's Weak

- **Login goes nowhere.** Tapping to log in landed me on the exact same "MEN" flyout menu as the men's-category step — not a sign-in form. I never got logged in, so nothing after that point could be personalized to me.
- **Cart page is blank.** After adding an item, "View Cart" loaded a totally empty white screen — no nav bar, no item, no total, nothing to tap. That's the step where money changes hands, and it didn't render at all.
- The Add to Cart screen showed a red "Please select a size" warning still active — easy to miss that I hadn't locked in a size before whatever happened next.
- The $115 Kaliver has **zero reviews**, and the page explicitly told me it's "Excluded from promotions" — while two different sitewide sales banners were dangling 25% and 40% off above it. That's a trust ding for a guy who cross-shops on price-vs-quality.
- Search for "comfort shoes" led with two **women's** shoes ($75, $48.99–$65) even though I'd been squarely in Men's the whole session. No gender-aware ranking, no memory of where I'd been browsing.

## 5. Recommendations

1. Fix the cart rendering bug immediately — this is a checkout-blocking defect, not a polish item.
2. Fix or re-route the login tap so it actually opens a sign-in form; right now it silently fails into an unrelated menu.
3. Bias search results toward the shopper's recent browsing context (Men's) or at minimum interleave men's results on page one for gender-neutral queries like "comfort shoes."
4. Either include the Kaliver in the active promotions or don't advertise "up to 40% off" so prominently on a page that excludes the shoe I'm looking at.
5. Add real customer reviews (or a placeholder like "be the first") on high-price comfort styles — no-review $115 shoes read as untested to me.

## 6. Bottom Line

The bones of comfort-shoe shopping are here — good filtering, readable product pages, a real hands-free/slip-in line — but the transaction itself is broken. A blank cart and a login that doesn't log you in aren't UX nitpicks, they're the difference between a sale and a bounce. I'd have left the site at step 8 without buying anything.

## 7. Evidence

**Step 1 — Homepage:** Blue "25% OFF Kids Styles" banner up top, then a "Limited Time Only! Up to 40% off Select Styles" strip, quick links for Slip-ins / Aero Burst / Arch Fit / BOBS, and a large lifestyle photo of two twenty-something models. Easy enough to scan, text is large, but nothing here speaks to me directly — the models and vibe skew younger. Cart shows 0, no personalization visible.

**Step 2 — Dismiss Popups:** Identical to step 1 except the promo strip swapped to "Skechers x Care Bears: Shop Now." No popup was actually visible to dismiss — good, nothing blocked my view, but it also means this step didn't test anything.

**Step 3 — Log In:** This is where it went sideways. Instead of a sign-in screen, I got the "MEN" flyout menu (Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories, plus Hands Free Slip-ins / Wide Fit / Extra Wide Fit shortcuts). No email field, no password field, no "Sign In" button anywhere. I never actually logged in.

**Step 4 — Men category:** Same flyout menu as step 3, functionally. Big, tappable rows with clear labels — this part is genuinely easy to navigate on a phone, generous spacing between items.

**Step 5 — Men > Shoes (Hands Free Slip-ins):** Breadcrumb "Men > Shoes," clear "Hands Free Slip-ins" header, Wide/Extra Wide/Medium Fit filter pills, free-pickup toggle, Filter/Sort bar, "326 results," and a two-column grid of shoes with color swatches. This is the strongest screen in the journey — relevant to my comfort priorities and easy to scan on a small screen.

**Step 6 — Product detail:** "Skechers Slip-ins: Arch Fit 3.0 - Kaliver," Men's, $115.00, no star reviews, "Add to Wishlist" heart, an orange "Excluded from promotions" warning, and a full-width product photo with swipe arrows. Readable and uncluttered, but the no-reviews/excluded-from-promo combo undercuts confidence right where I'm deciding whether to buy.

**Step 7 — Add to Cart:** Size grid 7.0–14.0 in a clean 5-per-row layout, QTY dropdown, shipping vs. in-store pickup options, and a large sticky "Add to Cart" button. A red "Please select a size" warning is still showing — meaning the flow either requires a size before the button will work or the state wasn't clearly resolved before moving on. Touch targets here are good.

**Step 8 — View Cart:** Blank white page. No header, no nav, no cart contents, no error message — just empty space top to bottom. This is a full breakdown; there's nothing on this screen to interact with.

**Step 9 — Search "comfort shoes":** Header confirms the query and "1,482 results," with Filter/Sort controls. But the first two products shown are both labeled Women's — "Contour Foam - Cozy Fit Pure Comfort" ($75.00) and "Relaxed Fit: Glide-Step Comfort" ($48.99–$65.00). After a whole session in Men's, seeing women's shoes lead the results feels like the site forgot who I am and what I was just looking at.

---

## Technical Audit

## Technical Summary

The captured journey spans 8 steps on `www.skechers.com` (SFCC/Demandware-hosted, Salesforce Commerce Cloud). Two steps — **Log In** and **Men category** — returned HTML nearly identical to the Homepage sample and retained the URL `https://www.skechers.com/`, with TTFB both at 394ms (vs. 21–25ms on every other step). This indicates these interactions render as client-side overlays/mega-menus rather than full navigations, or the automated step failed to reach a distinct URL before capture — worth confirming against the raw navigation trace. Bot-mitigation (Kasada `fp` fingerprint endpoint) returned repeated 429s during the session, and one Bazaarvoice API call used a literal `pid=test` placeholder that received a 403, suggesting either a test artifact reaching production or an unhandled fallback ID.

## Accessibility
16 axe violations detected, concentrated on Homepage (8), View Cart (4), and Search (4):
- **Critical**: `aria-required-parent` on Homepage — an ARIA role is used without its required parent role, which breaks assistive-tech tree construction.
- **Serious**: `document-title` and `html-has-lang` both missing on **View Cart** — the cart page/state either lacks a `<title>` or renders without inheriting the `lang="en"` attribute present elsewhere.
- **Moderate**: duplicate/non-top-level landmarks (`landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `landmark-complementary-is-top-level`) on Homepage and Search, plus `landmark-one-main` and `page-has-heading-one` missing on View Cart, and `region` (content outside landmarks) on Homepage and Search. This pattern points to nested/duplicated `<main>`/`<aside>` regions, likely from third-party widget injection (Bazaarvoice, Stylitics) not scoped inside a landmark.
- **Minor**: `aria-allowed-role` on Homepage and Search — an element uses a `role` invalid for its tag.

## SEO
- View Cart missing `<title>` and `lang` attribute is a crawlability/indexing defect in addition to an accessibility one — any cart-state URL that gets indexed will show no title in search results.
- Duplicate/multiple `<main>` landmarks (Homepage, Search) can confuse content-extraction heuristics used by search engines and reader modes.
- No other structural SEO issues (canonical tags, meta description, etc.) surfaced in the provided data — not fully assessed from the truncated HTML samples.

## Performance
- TTFB is low (21–25ms) on Homepage, Men > Shoes, Product detail, Add to Cart, and Search — consistent with edge/CDN-cached SSR.
- TTFB spikes to 394ms on Log In and Men category (15–19x the other steps), correlating with the steps that did not produce a distinct URL/HTML (see Technical Summary) — likely an uncached origin render rather than a CDN hit.
- View Cart TTFB = 120ms, moderately elevated versus other steps, consistent with cart being session-specific/non-cacheable.
- **LCP and CLS were not captured for any step** — these fields are blank across all 8 steps. This is a gap in the current audit instrumentation, not a "no issues" result; Core Web Vitals cannot be assessed from this data.

## Mobile Optimization
- Page sets a `--vh` custom property inline (`style="--vh: 6.640000000000001px"`), the standard JS workaround for mobile viewport-height (`100vh`) inconsistencies — functioning as intended, no defect evident.
- The `<head>` loads a large number of synchronous/async third-party tags (Google Tag Manager, TikTok Pixel, Snapchat, Meta/Facebook, Reddit, Taboola, Bing, Quantum Metric, Monetate x2, Pulse Insights, Impact, Stape, CreativeCDN, Bourbon/brsrvr, Go2SDK) — roughly 20+ third-party scripts on page load. On mobile connections this is the most likely contributor to render delay and to the missing/degraded LCP, and compounds the elevated TTFB on the Log In/Men category steps.
- Bot-mitigation challenge requests (Kasada `x-kpsdk-v` fingerprinting) were rate-limited (429) repeatedly during the mobile session, which can delay or block page interactivity if the challenge blocks a critical rendering path.

## Console & Network Errors
- **429 (Too Many Requests) x5** against the Kasada fingerprint endpoint (`/{uuid}/{uuid}/fp?x-kpsdk-v=...`), including one against `/cart/` itself — bot-protection throttling is firing during normal mobile browsing, not just abusive traffic.
- **403** on `BazaarvoiceProductData-GetProduct?pid=test` — a hardcoded/placeholder `pid=test` query parameter reaching the live Bazaarvoice integration, rejected by the API. Indicates either leftover debug code or an unhandled empty/invalid product ID fallback in the reviews widget.
- **CORS failure**: `web-assets.stylitics.com/style.css` blocked — missing `Access-Control-Allow-Origin` header on the Stylitics stylesheet response, causing the outfit-recommendation widget's CSS to fail to load.
- **net::ERR_FAILED** on one resource, likely the same blocked Stylitics request.

## Recommendations
1. Fix `document-title` and `html-has-lang` on the View Cart page/state — both are cheap, high-severity fixes.
2. Resolve the `aria-required-parent` critical violation on Homepage; audit for nested/duplicate `<main>`/`<aside>` landmarks likely introduced by third-party widget markup (Bazaarvoice/Stylitics) and scope them correctly.
3. Configure CORS headers on `web-assets.stylitics.com` (or proxy the stylesheet) to stop the blocked cross-origin load.
4. Remove or guard the `pid=test` placeholder reaching the Bazaarvoice API in production.
5. Investigate Kasada 429s during normal mobile navigation — confirm the bot-challenge threshold isn't throttling legitimate mobile sessions, especially on `/cart/`.
6. Re-run the audit capturing LCP/CLS per step; current data cannot support a Web Vitals verdict.
7. Confirm whether Log In and Men category are intended overlay/menu interactions or a navigation capture defect, given both return homepage-identical HTML and a 15–19x TTFB spike relative to other steps.
8. Consider deferring/lazy-loading non-critical third-party marketing tags (of ~20+ loaded) to reduce mobile main-thread contention, particularly ahead of LCP.
## Recent history

- [[2026-08-04-site-journey-walker]] — 3/10 (2026-08-04)
- [[2026-07-24-homepage-www.skechers.com-walker]] — 6/10 (2026-07-24)
- [[2026-07-24-site-journey-walker]] — 4/10 (2026-07-24)

