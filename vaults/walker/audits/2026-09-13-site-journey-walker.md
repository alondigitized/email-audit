---
slug: 2026-09-13-site-journey-walker
type: site
date: 2026-09-13
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-09-13**
## Full review
## 1. Executive Summary

I went in wanting a comfortable, hands-free walking shoe I could add to my cart and pay for without a fuss. I got a decent shoe-browsing experience and a dead end at checkout. The cart page loaded completely blank after I tapped "Add to Cart" — just a white screen, nothing to look at, no confirmation, no way to know if my shoe was even in there. That's the whole ballgame for an online store, and it failed. On top of that, tapping "Log In" did nothing I could see — no form, no modal, the screen never changed. Popups dismissal was the same story: nothing to dismiss, so I can't tell if that flow works either.

## 2. Business Impact Score (1-10)

**2/10** — unchanged from yesterday's 2/10. Browsing (category, PDP, search) is genuinely fine and even a little pleasant, but a shopper cannot complete a purchase or log into their account based on what I saw. A broken cart page is a hard stop — I'd bounce to Amazon or DSW right here.

## 3. What's Working

- The Men's Shoes category page (step 5) is clean, with big tappable tiles for "Hands Free Slip-Ins," "Walking Shoes," "Athletic Sneakers" — that's exactly the kind of comfort-first sorting I want, no digging required.
- The hamburger/Men flyout menu (step 4) is well organized with clear chevron-arrow rows — Shoes, Shop by Activity, Comfort Technologies, Collections. Big enough text, easy thumb targets.
- Product detail page (step 6) has a big clear product photo, price, and a plain-English name. Zoom wasn't needed to read anything.
- Search for "comfort shoes" (step 9) actually returned comfort-relevant shoes — a slip-in "Cozy Fit" model and a "Max Cushioning Elite 3" — with visible price ranges and color swatches. That's a real win; it understood what I meant.
- Size grid on the Add to Cart screen (step 7) is large and easy to tap, with sold-out sizes clearly struck through.

## 4. What's Weak

- **Cart is completely broken.** Step 8 is a blank white page — no items, no subtotal, no checkout button, nothing. This is the single biggest problem in the whole journey.
- **Login appears non-functional.** Steps 1–3 (Homepage, Dismiss Popups, Log In) are pixel-identical. Tapping the account icon didn't produce a login form, modal, or any visible change. As someone who wants my past orders and saved sizes remembered, this is a dead end.
- **No popup to dismiss** — can't tell if that's a good sign (no annoying popup) or a bad one (my dismiss tap silently failed along with everything else). Given the login result, I suspect taps just aren't registering navigation.
- $165 shoe is "Excluded from promotions" with a "20% OFF Sale Styles" banner blaring at the top of every single page — that's the kind of bait-and-switch that makes me feel like the discount banner is decoration, not a real offer.
- No reviews shown on the product I looked at — for a $165 purchase, I want to see what other guys my age thought of the fit and arch support before I buy.
- Nothing on the PDP or category pages addresses arch support or comparison-shopping directly (e.g., "how does this compare to Hoka/Brooks cushioning") — I'm left to guess.

## 5. Recommendations

1. **Fix the cart page immediately.** A blank white screen after Add to Cart is a checkout-killer, not a cosmetic bug — treat as P0.
2. **Fix or re-test the Log In tap target.** If it's a modal that's failing to render, or a link that's failing to navigate, that needs verification on real devices, not just desktop.
3. Add visible cart confirmation (a slide-in "Added to cart!" toast or badge count update) so shoppers know the tap worked before they even go to the cart page.
4. Don't advertise a sitewide 20% off banner on a page for the exact product that's excluded from it — either scope the banner or make exclusions less jarring.
5. Surface arch-support / cushioning detail and reviews higher on the PDP for comfort-first shoppers like me.

## 6. Bottom Line

Browsing feels better than it did yesterday, but browsing was never the problem — completing a purchase is, and that's worse than broken, it's invisible (blank page, no error, no explanation). I can't log in and I can't check out. Score holds at 2/10 because the one thing that actually matters — buying the shoe — still doesn't work.

## 7. Evidence

**Step 1 — Homepage:** Clean hero banner with a lifestyle photo (couple walking in casual sneakers), top nav with search/account/cart icons and a hamburger menu, "Extra 20% Off" promo banner up top, quick-filter chips (Slip-ins, Wide Fit, Arch Fit, Max Cushion) just below the fold trigger. Text is readable without zooming. Cart badge shows "0." Felt like a normal store homepage, not personalized to me in any way since I wasn't logged in yet.

**Step 2 — Dismiss Popups:** Identical screenshot to Step 1 — no popup appeared to dismiss. Either there was no popup (fine) or the dismiss interaction silently did nothing and the screenshot is just the unchanged homepage (concerning, given what came next).

**Step 3 — Log In:** Identical screenshot to Steps 1 and 2. No login form, modal, or page change appeared. This is a real problem — tapping the account icon should get me to a sign-in screen, and it didn't visibly happen. No personalization possible if I can't even get to the login screen.

**Step 4 — Men category:** A slide-out panel from the hamburger menu labeled "MEN" with rows for Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories, each with a right chevron. Large text, generous row height, easy to tap with a thumb. Two product thumbnails peek at the bottom. Straightforward and intuitive — no confusion here.

**Step 5 — Men > Shoes:** "Men's Shoes" header with three big square category tiles: Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers — directly relevant to my comfort priorities. Below that, a "Free pickup at [Set Location]" toggle, Filter/Sort bar, and "763 results" count. Good information scent, nothing hidden behind small text. This is the strongest screen of the whole journey.

**Step 6 — Product detail:** "Skechers Slip-ins: Aero Burst - Glow in the Dark," $165.00, flagged "Excluded from promotions," no reviews yet, a heart/wishlist icon, and a large product photo of a black-and-neon-green running shoe. Price felt steep for a shoe with zero reviews and no promo eligibility — that combination would make me hesitate and go compare on Hoka's site instead.

**Step 7 — Add to Cart:** Size grid (7.0–14.0), sizes 12.5 and 14.0 shown crossed out as unavailable, a QTY dropdown, shipping/pickup info blocks, and a big blue "Add to Cart" button — all comfortably sized for a thumb. A red "Please select a size" warning was already showing, meaning the flow requires picking a size first, which is reasonable, though the cart badge still read "0" here, giving no feedback that anything was queued.

**Step 8 — View Cart:** Totally blank white page. No header, no nav, no product line item, no subtotal, no checkout button — nothing rendered at all. This is a full breakdown of the purchase path and the most serious issue found.

**Step 9 — Search "comfort shoes":** Search results header showed `"comfort shoes"` with "1,545 results," a Filter/Sort bar, and two relevant product cards — a Slip-ins Go Walk Joy "Cozy Fit" ($85.00) and a Max Cushioning Elite 3 ($78.99–$105.00) with color swatches. Genuinely useful and on-target for what I typed — this part of the site understood my intent well.

---

## Technical Audit

## Technical Summary
Journey spans 8 steps on skechers.com (SFCC/Demandware storefront). Full-page loads (Homepage, Log In, Men category) report TTFB 410–436ms; deeper steps (PLP, PDP, Add to Cart, View Cart, Search) report TTFB 25–140ms, too low to be genuine cold server responses — these are likely client-side/SPA-style transitions rather than fresh navigations, so they shouldn't be compared directly against the earlier TTFB figures. LCP and CLS were not captured for any step. Every page loads a large stack of synchronous/async third-party scripts in `<head>` (10+ ad/analytics pixels plus 3 separate GTM/gtag destinations). A bot-detection/fingerprinting endpoint (Kasada, `x-kpsdk`) returned HTTP 429 four times, including once against `/cart/` itself. 18 axe violations were found across Homepage, View Cart, and Search.

## Accessibility
- **Critical (Homepage):** `button-name` — buttons without discernible text; `aria-required-parent` — ARIA role used without required parent role context.
- **Serious:** `link-name` (Homepage) — links without discernible text; `document-title`, `html-has-lang` (View Cart) — cart page missing `<title>` and `lang` attribute.
- **Moderate:** `heading-order`, `landmark-main-is-top-level`, `landmark-complementary-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `region` (Homepage); `landmark-one-main`, `page-has-heading-one` (View Cart); `landmark-complementary-is-top-level`, `landmark-unique`, `region` (Search).
- **Minor:** `aria-allowed-role` (Homepage, Search).

The View Cart failures (`document-title`, `html-has-lang`, `landmark-one-main`, `page-has-heading-one`) together suggest the cart renders without a standard document shell — check whether it's served as a fragment or client-rendered view missing normal head/landmark structure.

## SEO
- View Cart lacks a `<title>` element and `html lang` attribute (from axe results) — both are baseline crawl/indexing signals; this page will not surface a real title in search results or browser tabs/history.
- `heading-order` violations on Homepage indicate a broken heading hierarchy, which weakens topical signal for crawlers.
- Homepage/category HTML samples show dozens of third-party script tags injected before/around core content markup — this bloats the HTML crawlers must parse and can affect render-based indexing (Googlebot's rendering budget) even though it doesn't block raw HTML delivery.
- Full `<head>` metadata (canonical, meta description) wasn't present in the truncated samples provided — cannot assess; flagging as a blind spot rather than a finding.

## Performance
- TTFB is reasonable (410–436ms) on Homepage/Login/Category but not fast for an SSR storefront.
- TTFB of 25–30ms on PLP/PDP/Add to Cart/Search is implausible for a fresh origin response — verify measurement methodology (hard reload vs. in-app transition) before using these figures for capacity/latency conclusions.
- LCP and CLS are unmeasured for all 8 steps — a complete Core Web Vitals gap; no compliance determination is currently possible.
- Third-party script payload (TikTok, Snapchat, Reddit, Facebook, Bing, Taboola, Nextdoor, Pinterest, Yahoo, 3x GTM/gtag destinations, 2x Monetate, Quantum Metric, Impact, CreativeCDN, Brightcove trk, PulseInsights, Go2/Tune) loads on every page and is a likely contributor to main-thread contention, particularly on mobile CPUs (affects INP).
- Repeated 429s on the Kasada fingerprint endpoint indicate wasted round-trips/retries that add load-time overhead when they occur mid-session.

## Mobile Optimization
- The homepage `<html>` element carries an inline `style="--vh: 6.64px"` set via JS — a common workaround for the mobile `100vh` viewport bug. This makes correct sizing dependent on JS execution rather than native CSS (`dvh`/`svh` units), which is both a maintenance smell and a CLS risk if the JS runs after initial paint.
- No CLS data was captured to confirm actual shift, but the JS-driven viewport-height pattern is a known contributor and should be validated with real field data.
- The third-party script volume disproportionately affects mobile devices given CPU/network constraints relative to desktop.

## Console & Network Errors
- **4x HTTP 429** on `https://www.skechers.com/.../fp?x-kpsdk-v=...` — Kasada bot-detection fingerprinting endpoint being rate-limited during normal browsing.
- **1x HTTP 429** on `https://www.skechers.com/cart/` itself — the cart page load was rate-limited by the same protection layer, a functional risk, not just a background call.
- **4x** "Unsupported Summarizer API languages" — a page/extension script is calling Chrome's built-in Summarizer API with an unsupported locale argument, causing the call to abort each time.
- **CORS blocked:** `https://web-assets.stylitics.com/style.css?base=grid&theme=skechers...` — no `Access-Control-Allow-Origin` header, so the stylesheet fails to load on `www.skechers.com`, correlating with the `net::ERR_FAILED` entry. This will break whatever Stylitics-powered widget (outfit/styling module) depends on it.

## Recommendations
1. Instrument real LCP/CLS collection (web-vitals JS, RUM, or CrUX) — currently a total blind spot for Core Web Vitals.
2. Re-verify the TTFB capture method for PLP/PDP/Cart/Search steps; 25–30ms readings suggest these aren't cold hard-navigation measurements.
3. Fix the Stylitics stylesheet CORS configuration (add proper `Access-Control-Allow-Origin`) or self-host/proxy the asset so the widget renders.
4. Review Kasada (`x-kpsdk`) rate-limit thresholds — legitimate traffic triggered 429s including on the cart page load itself, risking false-positive blocking of real shoppers.
5. Fix homepage critical/serious axe issues: add `aria-label`/text to icon-only buttons and links, correct misapplied ARIA roles, deduplicate/flatten `main`/`complementary` landmarks.
6. Add `<title>`, `html lang`, a single `<main>` landmark, and an `h1` to the View Cart page.
7. Correct heading order and wrap orphaned content in landmarks (`region` violations) on Homepage and Search results.
8. Audit and consolidate third-party tags — reduce redundant GTM/gtag destinations and defer/lazy-load non-critical trackers to cut mobile main-thread blocking.
9. Replace the JS-computed `--vh` custom property with native CSS `dvh`/`svh` units to remove the JS dependency for mobile viewport sizing.
10. Guard the Summarizer API call with a supported-language check before invoking it, to eliminate the repeated console errors.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

