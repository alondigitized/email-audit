---
slug: 2026-09-11-site-journey-walker
type: site
date: 2026-09-11
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-09-11**
## Full review
## 1. Executive Summary

I came in wanting one thing: a slip-on, cushioned, arch-supported shoe I could order without a headache. I found it — the GO 3D Arch Fit clog looked right up my alley — but the site never let me finish. Login did nothing when I tapped it, "Add to Cart" threw an error instead of adding anything, and when I asked to view my cart I got a blank white screen. Search worked and actually returned relevant comfort shoes, which is the one bright spot. But if I can't log in, can't add to cart cleanly, and can't see my cart at all, none of the rest matters.

## 2. Business Impact Score (1-10)

**2/10** — unchanged from yesterday. The browsing experience (menu, category pages, product page, search) is genuinely decent, but the transactional core — login, add-to-cart, cart — is broken across the board. A site that can't reliably show me my own cart isn't going to sell me shoes, no matter how good the product photos are.

## 3. What's Working

- **Category structure for Men > Shoes** surfaces exactly what I'm after: "Hands Free Slip-Ins," "Walking Shoes," and "Athletic Sneakers" as the first three tiles. Somebody on that team understands guys like me.
- **The Arch Fit clog product itself** — 3D Arch Fit, slip-on, $80 — is a strong match to my comfort/arch-support priorities.
- **Search for "comfort shoes"** returned genuinely relevant results (GO WALK Joy slip-in, Max Cushioning Elite 3) with prices and color swatches visible up front.
- **Hamburger menu** is well-organized with clear back/close controls and decently sized tap targets.

## 4. What's Weak

- **Login is a dead end.** Tapping the login icon produced no visible change at all — same homepage, same "0" cart badge. Either nothing happened or I landed somewhere invisible. I never got a sign-in form.
- **Add to Cart failed.** I got a red "Please select a size" warning instead of a shoe in my cart. Fine as validation, except the journey never got past it — so the "cart" step that followed had nothing to show.
- **Cart page is completely blank.** A white screen, no header, no items, nothing. This is the step where I'd expect to review my order and check out — instead it looks like the page didn't load at all.
- **Zero personalization anywhere.** Despite this being a "logged in" journey, every homepage screenshot (steps 1-3) is pixel-identical — same hero banner, same "0" in the cart, no name, no recommended items, nothing that suggests the site knows who I am.
- **Search results mix in women's items** ("Max Cushioning Elite 3, Women's") without me asking for that — a small thing, but when I search "comfort shoes" as a guy who just browsed Men's Shoes, I'd expect that context carried forward.
- **Top banner text is tiny and dense** ("Extra 20% OFF Sale Styles Use Code EXTRA20 details") — the kind of small-print clutter that makes me squint on my phone.
- **Only 1 review** on the Arch Fit clog — not enough for me to trust I'm not the guinea pig.

## 5. Recommendations

1. **Fix the cart page rendering** — top priority. A blank white page at checkout is a hard stop on every single transaction.
2. **Fix or properly implement login** — right now it's indistinguishable from broken. If it's a modal that failed to trigger, that's a bug; if it silently does nothing, that's worse.
3. **Guide me to select a size before I hit Add to Cart**, or at minimum make the error message impossible to miss (not a small red line under a size grid).
4. **Personalize the logged-in experience** — even something basic like "Welcome back" or a saved size defaulting on product pages would go a long way for someone like me who doesn't want to re-enter everything each visit.
5. **Keep gender context in search** — if I've been browsing Men's, don't surface Women's results first.
6. **Bulk up review counts/social proof** on comfort-tech products like Arch Fit before pushing them so hard in navigation.

## 6. Bottom Line

The site knows what I want to see — hands-free, walking, arch support — and shows it to me. But it can't get me from "I found the shoe" to "I bought the shoe," and that's the whole ballgame. Browsing experience: solid. Transaction experience: broken. Score stays flat at 2/10 versus yesterday — no improvement, and the blank cart page is as bad a failure as I've seen in this journey.

## 7. Evidence

**Step 1 — Homepage:** Clean hero banner with a lifestyle photo of a couple in casual shoes, sale banner up top, hamburger/search/account/cart icons all visible. Readable, uncluttered. Top promo text is small but the rest is fine on a phone screen.

**Step 2 — Dismiss Popups:** No popup appeared — screen is identical to step 1. Either there was nothing to dismiss, or a popup never rendered. Not a problem in itself, but worth confirming intentional.

**Step 3 — Log In:** Screen is byte-for-byte the same as steps 1 and 2. Tapping the account icon produced no visible change — no login form, no modal, no navigation. This reads as broken. No personalization signal anywhere (cart badge still "0").

**Step 4 — Men category:** Slide-out menu opened cleanly with Back/close controls, "MEN" header, and a well-spaced list: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories. Each row has a clear chevron and generous tap height — easy to use one-handed. Thumbnail product previews start to appear below. Good touch-target sizing for older hands.

**Step 5 — Men > Shoes:** Landed on Men's Shoes with three big, well-photographed subcategory tiles right at the top: Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers — exactly my shopping intent, front and center. 751 results with Filter/Sort controls visible and easy to tap. This is the strongest screen in the journey for my persona.

**Step 6 — Product detail:** GO 3D Arch Fit - 3D AirNex Clog, $80, marked "Unisex," 5-star rating but only 1 review. Large, clear product photo of a white mesh clog. Wishlist heart and star rating both visible without scrolling. Good price/product clarity, but thin trust signal with just one review.

**Step 7 — Add to Cart:** Size grid (M4/W5.5 through M14/W15.5) is large and easy to tap, plus a size chart link. But a red warning — "Please select a size" — shows the Add to Cart attempt failed because no size was chosen first. The "Add to Cart" button itself is prominent (good contrast, full width), but the flow broke here rather than confirming an item was added.

**Step 8 — View Cart:** Completely blank white screen. No header, no nav, no items, no error message — just empty. This is a critical failure; there's no way to know if anything's in the cart or how to recover.

**Step 9 — Search "comfort shoes":** 1,533 results returned, with two solid, relevant picks up top: a black slip-in ($85, marked Women's with color swatches) and the Max Cushioning Elite 3 ($78.99–$105, Women's). Layout is clean — price, name, color options all visible without tapping in. Relevant to my "comfort" intent, though gender labeling suggests results aren't filtered to what I'd been browsing (Men's).

---

## Technical Audit

## Technical Summary
The mobile journey through skechers.com surfaces backend rate-limiting on bot-mitigation endpoints, a third-party CORS misconfiguration, and multiple accessibility structural violations (duplicate landmarks, missing document metadata). Core page TTFB is acceptable (59–468ms range), but LCP/CLS were not captured for any step, leaving rendering performance unverified.

## Accessibility
18 axe violations across 3 of 8 steps, including 2 critical and 3 serious:
- **Critical**: `button-name` and `aria-required-parent` on Homepage — buttons without discernible text and ARIA roles used outside required parent containers will break screen reader navigation.
- **Serious**: `link-name` (Homepage) — links with no accessible name. `document-title` and `html-has-lang` (View Cart) — the cart page is missing a `<title>` and `lang` attribute entirely, a distinct HTML document from the SPA shell rendered elsewhere.
- **Moderate**: Repeated landmark violations (`landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `landmark-complementary-is-top-level`, `region`) on both Homepage and Search — indicates duplicated `<main>`/`<aside>` regions, likely from a third-party widget (Stylitics or a personalization script) injecting nested landmarks. View Cart also lacks any `<h1>` (`page-has-heading-one`) and a `main` landmark (`landmark-one-main`).
- **Minor**: `aria-allowed-role` on Homepage and Search — invalid role attribute values.

The View Cart page's missing title/lang/heading suggests it may be served as a distinct document (possibly outside the SPA framework or via an iframe) rather than inheriting the shell's `<html lang="en">`.

## SEO
Not directly assessed (no meta tag/canonical data captured), but the View Cart page's missing `<title>` (confirmed via axe `document-title`) is also an SEO defect — an untitled document indexed or shared will show no page title. No other SEO-specific data available from this audit.

## Performance
- TTFB is healthy across all steps: Homepage 468ms, Log In 445ms, Men category 445ms, dropping to 59–134ms for Men > Shoes, Product Detail, Add to Cart, View Cart, and Search — consistent with cached/CDN-served subsequent navigations after initial SSR.
- **LCP and CLS were not recorded for any of the 8 steps.** This is a data-collection gap, not a confirmed absence of issues — the audit cannot make a performance determination on rendering stability or perceived load speed without this data.
- The homepage loads 20+ synchronous/async third-party scripts (TikTok, Snapchat, Reddit, Taboola, Facebook, Bing, Monetate, Quantum Metric, Pulse Insights, GTM, go2sdk, Impact, CreativeCDN, Brightspot, Nextdoor, WebFont Loader) before/alongside primary content — this volume of render-blocking-adjacent third-party JS is a strong candidate root cause for any LCP delay, pending the missing metric.

## Mobile Optimization
No mobile-specific rendering data (viewport meta, touch target sizing, responsive breakpoints) was captured in this audit. Cannot make a determination — flag for follow-up with a dedicated mobile-viewport capture pass.

## Console & Network Errors
- **429 rate limiting**: 5 of 6 network errors are `429` responses from a Kasada/PerimeterX-style bot-detection fingerprint endpoint (`/fp?x-kpsdk-v=...`) plus a 429 directly on `/cart/`. Repeated 429s on the cart endpoint during a normal single-session mobile walkthrough indicates either overly aggressive bot-mitigation thresholds or a client-side retry loop hammering the fingerprint endpoint — both degrade real user experience on the cart, a revenue-critical path.
- **CORS failure**: `web-assets.stylitics.com/style.css` blocked by CORS policy (missing `Access-Control-Allow-Origin`) — the Stylitics outfit-recommendation widget's stylesheet fails to load cross-origin, likely causing unstyled/broken widget rendering on affected pages.
- **Chrome Summarizer API errors**: 4 repeated "Unsupported Summarizer API languages" console errors — a script is invoking the browser's built-in AI Summarizer API with unsupported locale parameters; functionally harmless to the page but indicates unvetted/experimental API usage shipping to production.
- `net::ERR_FAILED` correlates with the CORS-blocked stylesheet request.

## Recommendations
1. Investigate the cart-path 429s (fingerprint endpoint + `/cart/`) — determine if bot-mitigation thresholds are misfiring on legitimate mobile sessions; a false-positive block on `/cart/` risks blocking real checkouts.
2. Fix the Stylitics CORS misconfiguration by ensuring `web-assets.stylitics.com` sends proper `Access-Control-Allow-Origin` headers, or self-host/proxy the stylesheet.
3. Remediate critical/serious a11y issues first: add discernible text to unlabeled buttons and links (Homepage), and ensure the View Cart document has a `<title>`, `lang` attribute, and `<h1>` — check whether it's rendered as a separate document from the SPA shell.
4. Deduplicate landmark regions (`main`, `aside`) on Homepage and Search — audit third-party widget markup for nested landmark roles.
5. Remove or gate the Summarizer API call behind a supported-language check to eliminate console noise.
6. Re-run the audit with LCP/CLS instrumentation enabled (e.g., web-vitals library or CDP `PerformanceObserver` capture) — this data is currently missing for all 8 steps and is required to assess actual rendering performance and layout stability.
7. Capture mobile-specific signals (viewport meta tag, tap target sizes) in a follow-up pass — none were collected here.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

