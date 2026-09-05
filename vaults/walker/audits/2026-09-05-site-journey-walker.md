---
slug: 2026-09-05-site-journey-walker
type: site
date: 2026-09-05
persona: walker
score: "2/10"
previous_score: "3/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 3/10) · **Type:** Site journey · **2026-09-05**
## Full review
## 1. Executive Summary

Well, I made it from the homepage into the cart, sort of, and then the cart just... wasn't there. Blank white screen where my shoe should've been. That's the kind of thing that makes me put the phone down and go check my email instead. Good news: the Men's Shoes browse and search actually understand what I'm looking for — "Hands Free Slip-Ins," "Walking Shoes," "Cozy Fit Cozy Easy" all showed up unprompted. Bad news: I couldn't log in (nothing happened), and I couldn't actually see what was in my cart after adding something. For a fella my age who wants to get in, find a comfortable shoe, and get out, that broken cart is a dealbreaker.

## 2. Business Impact Score (1-10)

**2/10.** A blank cart page after "adding to cart" is about as bad as it gets — that's the moment I'm supposed to pull out my wallet, and instead I get nothing. Compared to yesterday's 3/10, this feels like a step backward if the cart used to at least render something. Even if it was already broken yesterday, it clearly hasn't been fixed, and that's the single biggest thing standing between me and a sale.

## 3. What's Working

- The Men's Shoes category page leads with exactly the language I care about: "Hands Free Slip-Ins," "Walking Shoes," "Athletic Sneakers" with pictures right up top.
- Search for "comfort shoes" pulled real, relevant results — Go Walk Joy, Max Cushioning Elite 3 — with prices right there, no hunting.
- The hamburger menu drawer for Men is laid out simply: Shoes, Shop by Activity, Comfort Technologies, Collections. Big rows, easy to tap with my thumb.
- Size selector on the product page uses big square buttons (7.0 through 13.0) — no tiny dropdown to squint at.
- "Free pickup at Set Location" toggle is a nice touch if I want to try something on before buying.

## 4. What's Weak

- **The cart is broken.** After tapping Add to Cart, the "View Cart" page is a completely blank white screen. Nothing. Not even a "your cart is empty" message.
- **Login didn't do anything.** Tapping to log in just left me on the same homepage — no form, no modal, nothing happened. So there's zero chance of a personalized experience later in the trip.
- Cart icon stayed at "0" the whole time, even in the Add to Cart screenshot — I couldn't tell if my shoe ever actually got added before things went blank.
- The $165 pair I looked at was "Excluded from promotions" — right after the site plastered "20% OFF SITEWIDE" banners on every single page. That feels like bait and switch to an old guy who takes banners at face value.
- Search results for "comfort shoes" led with two women's shoes even though I'd just been browsing Men's Shoes. If the site's going to remember anything about me, that'd be the moment.
- 740 results on the Men's Shoes page with no default sort toward comfort/arch-support technologies — that's a lot of scrolling for someone who just wants "the cushioned one."

## 5. Recommendations

1. Fix the cart page rendering — this is a full-stop revenue blocker, top priority above anything else here.
2. Make sure Add to Cart actually confirms (badge count updates, a toast, something) before sending me anywhere.
3. Fix the login entry point so tapping it actually opens a sign-in form.
4. Either honor the sitewide sale banner on every product or stop showing the banner on pages where it doesn't apply — don't show me 20% OFF SITEWIDE right above a shoe that's excluded.
5. Bias search/browse results toward my recent category (Men's) when I haven't specified gender.

## 6. Bottom Line

I got as far as picking out a shoe I liked, and then the site lost me right at the register. That's not a "the copy could be better" problem, that's a "I'm closing the app" problem. Fix the cart and login first — the parts of the site that actually talk to me about comfort and cushioning are already pretty good.

## 7. Evidence

**Step 1 — Homepage:** Labor Day Sale banner front and center, "20% OFF SITEWIDE" for Plus Members, quick links for Slip-ins/Arch Fit/Max Cushioning right under the nav. Easy to read, nothing to zoom for. Felt generic, not personalized — just a standard promo homepage.

**Step 2 — Dismiss Popups:** No popup actually appeared to dismiss in this screenshot — page looks the same as the homepage, just the secondary promo line changed to "25% off Apparel & Bags." If there was a cookie banner or app-download nag, it wasn't visible here, so I can't say whether it was easy to close.

**Step 3 — Log In:** Screen is identical to the homepage — nothing happened when I tried to log in. No modal, no form. On a phone that's confusing; I'd assume the tap didn't register and either give up or tap it three more times.

**Step 4 — Men category:** A slide-out drawer opened with big, clearly labeled rows (Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories) and thumbnail shoe images starting to load at the bottom. Touch targets are plenty big, chevrons make it obvious these expand further. Easy to use one-handed.

**Step 5 — Men > Shoes:** Landed on "Men's Shoes" with three big photo tiles up top — Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers — exactly my vocabulary. A "Free pickup at Set Location" toggle and Filter/Sort bar sit above 740 results. Good start, but 740 is a lot to scroll through without a "sort by cushioning" shortcut.

**Step 6 — Product detail:** Skechers Slip-ins: Aero Burst - Glow in the Dark, $165.00, no reviews yet, heart/wishlist icon. Orange "Excluded from promotions" warning right under the price — deflating right after all those 20%-off banners. Photo is clear, swipe arrows are easy to find.

**Step 7 — Add to Cart:** Clean size grid (7.0–13.0), a red "Please select a size" prompt, QTY dropdown, shipping/pickup info icons, and a highlighted blue Add to Cart button. Usable and clear — but the cart badge in the header still reads "0," so it's unclear whether the add actually completed.

**Step 8 — View Cart:** Completely blank white page. No header, no items, no error message, nothing. This is the trip's dead end — whatever I put in my cart, I can't see it or check out.

**Step 9 — Search "comfort shoes":** 1,520 results, led by "Skechers Slip-ins: Go Walk Joy - Cozy Fit Cozy Easy" ($85, Women's) and "Max Cushioning Elite 3" ($78.99–$105, Women's). Relevant to the comfort keyword, good prices shown up front, color swatches visible — but both top results are women's shoes despite my whole session being in Men's. Not personalized to what I'd just been browsing.

---

## Technical Audit

## Technical Summary

The journey spans a server-rendered Salesforce Commerce Cloud (Demandware) storefront (`/on/demandware.static/Sites-USSkechers-Site/...`). Each step (Homepage, Log In, Men category) returns full-page HTML with near-identical `<head>` payloads rather than SPA-style partial updates, indicating full navigations/reloads at each step. The three post-navigation steps (Men > Shoes, Product detail, Add to Cart) all report TTFB=35ms, well below the other steps — this is more consistent with cached/AJAX fragment responses than fresh document loads and should be verified against actual navigation timing rather than treated at face value. LCP and CLS were not captured for any step, so Core Web Vitals cannot be assessed from this run. The site is also being actively rate-limited (HTTP 429) by its own bot-mitigation layer (Kasada `fp` endpoint) during the session, including on `/cart/` itself.

## Accessibility

17 axe violations across 3 of 8 audited pages (Homepage, View Cart, Search).

- **Critical:** `aria-required-parent` on Homepage — an ARIA role is used without its required parent role, which breaks assistive-tech traversal of that widget.
- **Serious:** `link-name` (Homepage) — one or more links have no accessible/discernible text, making them unusable via screen reader.
- **Serious:** `document-title` and `html-has-lang` on View Cart — the cart view/document is missing a non-empty `<title>` and a `lang` attribute. Notable because the sampled HTML for other steps does carry `lang="en"`, suggesting the cart is rendered in a separate document context (e.g., iframe/flyout) that doesn't inherit the parent page's attributes.
- **Moderate (landmark cluster):** `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `landmark-complementary-is-top-level`, `region`, `landmark-one-main` recur on Homepage, Search, and View Cart — pointing to duplicated/nested `<main>` and `<aside>` regions (likely from third-party widgets/modals injecting their own landmark roles) and un-landmarked content.
- **Moderate:** `heading-order` (Homepage) and `page-has-heading-one` (View Cart) — heading hierarchy is non-sequential on the homepage, and the cart page has no `<h1>`.
- **Minor:** `aria-allowed-role` (Homepage, Search) — role attributes used on elements that don't permit them.

## SEO

- View Cart failing `document-title` and `html-has-lang` is a direct SEO defect on top of accessibility impact — missing/duplicate titles and missing `lang` affect indexing and localization signals for that view.
- Duplicate/non-top-level `<main>` landmarks (Homepage, Search) can confuse content-extraction heuristics search crawlers use to identify primary content.
- No canonical/meta data was provided in the truncated HTML samples to assess further; cannot confirm meta description, canonical tag, or structured data presence from the given evidence.

## Performance

- TTFB: Homepage 621ms is the highest in the journey; Log In/Men category both 424ms despite sharing the same URL as Homepage (`https://www.skechers.com/`) — this suggests these "steps" did not produce distinct document navigations, which should be confirmed before drawing conclusions about their load performance.
- Men > Shoes, Product detail, and Add to Cart all report TTFB=35ms — anomalously fast for full navigations on this stack; likely reflects fragment/XHR responses rather than document loads. Flag as a measurement gap rather than a genuine 35ms server response.
- LCP and CLS: not captured for any of the 8 steps. No Core Web Vitals conclusions can be drawn from this data set — this is a gap in the audit instrumentation, not a finding about the site.
- The captured `<head>` markup shows a large number of synchronous/async third-party scripts (GTM x2, TikTok, Snapchat, Reddit, Taboola, Impact, Bing, Quantum Metric, Monetate x2, PulseInsights, WebFont Loader, stape.io) loaded on every page in the journey. This tag volume is a plausible contributor to the elevated Homepage TTFB/main-thread contention, though it wasn't isolated in this run.
- Stylitics stylesheet (`web-assets.stylitics.com/style.css`) failed to load due to a CORS policy block (see Console & Network Errors) — any outfit/styling widget dependent on it will render unstyled or fail silently.

## Mobile Optimization

- Viewport meta tag, responsive breakpoints, and touch-target sizing cannot be confirmed from the truncated HTML samples provided — not visible in the given excerpt.
- WebFont Loader (`cdnjs.cloudflare.com/.../webfontloader.js`) is loaded async but blocks application of custom fonts (`wf-*` classes toggle post-load per the `<html>` class list) — on slower mobile connections this produces a flash of unstyled/fallback text, and combined with the uncaptured CLS metric, layout shift risk from font swap can't be ruled out.
- The Kasada bot-detection fingerprint request (`/fp?x-kpsdk-v=...`) returned 429 four times in this session. On mobile networks with higher latency/retry rates, repeated fingerprint failures can delay or block gated actions (login, cart) that depend on that challenge completing.
- No mobile-specific errors (viewport, tap-target, orientation) appeared in the axe results, but axe does not fully assess responsive layout — this should not be read as a clean bill of health for mobile layout specifically.

## Console & Network Errors

- **429 (rate limited), 5 occurrences:** `/149e9513.../fp?x-kpsdk-v=j-1.2.728` (Kasada bot-mitigation fingerprint endpoint) — repeated failures during a single session suggest the client is being throttled by the site's own bot-detection layer, possibly due to request frequency from the audit tooling itself or an overly aggressive rate limit.
- **429, 1 occurrence:** `/cart/` — the cart page endpoint itself was rate-limited, which is more concerning since it's a first-party, user-facing route rather than a background telemetry call.
- **CORS block:** `web-assets.stylitics.com/style.css` blocked by CORS policy (missing `Access-Control-Allow-Origin` for `www.skechers.com`) — this is a third-party misconfiguration on Stylitics' side breaking a first-party page dependency.
- **net::ERR_FAILED, 1 occurrence:** consistent with the CORS-blocked stylesheet request above.
- **Summarizer API warnings (4x):** originate from the browser's built-in Chrome Summarizer API being invoked with unsupported languages. This is Chrome/extension-side noise, not a site defect, but its repeated presence indicates something on the page (or the audit browser profile) is calling this API — worth confirming it isn't first-party code before dismissing.

## Recommendations

1. Investigate why the Kasada `/fp` fingerprint endpoint and `/cart/` are returning 429s within a normal browsing session — if genuine users are hitting this, it can block checkout; if it's audit-tooling request volume, rate-limit thresholds should be reviewed for legitimate automated QA traffic.
2. Fix the Stylitics CORS configuration so `style.css` loads correctly, or self-host/proxy the stylesheet.
3. Add a `lang` attribute and non-empty `<title>` to the View Cart document/frame; add a single `<h1>` to that view.
4. Resolve the ARIA/landmark violations (duplicate `main`, non-top-level `aside`, disallowed roles) likely introduced by third-party widget markup on Homepage and Search.
5. Fix the missing accessible link text (`link-name`, Homepage) and correct heading order.
6. Re-run this audit capturing LCP/CLS explicitly (e.g., via Performance Observer or Lighthouse) — Core Web Vitals could not be evaluated from this data set, which is the most significant instrumentation gap here.
7. Verify whether "Log In" and "Men category" steps actually navigated (they share Homepage's URL and TTFB pattern) and whether "Men > Shoes / Product detail / Add to Cart" TTFB=35ms reflects real document loads or cached fragments, before using these numbers for performance conclusions.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

