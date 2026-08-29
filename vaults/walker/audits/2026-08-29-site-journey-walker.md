---
slug: 2026-08-29-site-journey-walker
type: site
date: 2026-08-29
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-08-29**
## Full review
## 1. Executive Summary

I did what I always do — pull it up on my phone, try to buy a pair of shoes without a headache. Browsing worked fine right up until I actually tried to check my cart. I tapped "Add to Cart," picked nothing (couldn't, actually — more on that below), and when I went to look at my cart, the screen was just... blank. White. Nothing. That's the moment a real shopper like me closes the tab and walks into a DSW instead.

## 2. Business Impact Score (1-10)

**2/10** — Same as yesterday, no change. A broken cart page is a hard stop on any purchase. Everything upstream of it (browsing, product page) is serviceable, but it doesn't matter if the finish line isn't there.

## 3. What's Working

- Homepage is clean, big readable text, and the "20% OFF" banner is impossible to miss (in a good way — I know there's a deal).
- The hamburger "MEN" menu opens into a big, clearly labeled list (Shoes, Shop by Activity, Comfort Technologies) with generous tap targets — I didn't fat-finger the wrong link once.
- The Men's Shoes category page leads with sub-categories I actually care about: "Hands Free Slip-Ins," "Walking Shoes," "Athletic Sneakers." That's speaking my language.
- The Slip-ins Contour Foam product page is well laid out: price, rating, reviews, a "Hands Free Slip-ins" badge, clean product photo I can swipe through.
- Search for "comfort shoes" returned genuinely relevant results — cushioned walking shoes, arch fit, sale pricing shown with strikethrough. That part felt like it understood what I typed.

## 4. What's Weak

- **Cart is broken.** Step 8 is a completely blank white page. No items, no error, nothing. After "adding to cart" the cart icon still shows "0" in the search screenshot too — so I genuinely don't know if my shoe is in there or not.
- **"Log In" did nothing.** The screenshot for the Log In step is pixel-identical to the homepage — no modal, no form, nothing opened. If I can't find my saved info or reorder my usual size, I'm starting from scratch every time.
- **Add to Cart required me to pick a Width AND a Size first**, and it flagged both as errors in red ("Please select a width" / "Please select a size") before I'd even touched anything — that's a jarring, alarming way to greet a new visitor.
- Nothing on the homepage or shoe page does the comfort-brand comparison math I actually want (how does this stack up vs. a Hoka or a New Balance on cushioning/price) — I have to leave the site to figure that out myself.
- Nothing here felt "logged in" or personalized to me — I never actually got logged in, so no surprise there, but there's also no visible personalization for a repeat browser (no "recently viewed," no size memory).

## 5. Recommendations

1. **Fix the cart page immediately.** A blank white screen after add-to-cart is a revenue-killing bug, not a design nitpick. This should be priority zero.
2. **Fix the Log In tap** — it should open a modal or navigate to a login form, not silently do nothing.
3. Confirm cart state visually — update that cart badge count the moment an item is added, so shoppers like me aren't left guessing.
4. Add a lightweight comfort/fit comparison module on product pages ("how this compares to similar cushioned shoes") — this is the exact kind of content that gets me to buy instead of bounce to Hoka's site.
5. Consider pre-selecting or defaulting width to "Medium" so first-time visitors aren't hit with two red error messages before they've done anything wrong.

## 6. Bottom Line

Browsing and product discovery are honestly pretty good — better than a lot of sites I use. But I can't buy a shoe I can't put in a working cart, and I can't log in to save my size. Until those two things are fixed, this is a browse-only site for me, and I'll finish the purchase somewhere else. **No change from yesterday's 2/10** — the cart bug appears to still be present.

## 7. Evidence

**Step 1 — Homepage:** Clean layout, big Skechers logo, "20% OFF Top Sellers" banner up top, "AERO BURST" hero image with a diagonal lineup of shoes. Text is large and legible without zooming. Easy on a phone. No personalization visible (makes sense, not logged in yet).

**Step 2 — Dismiss Popups:** Screenshot is identical to Step 1 — no popup appeared to dismiss, or it was already gone. No friction either way, but also nothing to note as an improvement.

**Step 3 — Log In:** Screen is identical to homepage again. Tapping "Log In" did not open a login form, modal, or navigate anywhere visible. This is confusing — as someone who wants to check a saved size or past order, hitting a dead end here is a real drop-off point.

**Step 4 — Men category:** A slide-out menu opened cleanly with "MEN" at top, a back arrow and close X (both easy to tap), and a vertical list: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories. Thumbnail images at the bottom hint at featured shoes. Very intuitive — this is the kind of big, chunky navigation I like.

**Step 5 — Men > Shoes:** "Men's Shoes" header, three photo tiles for "Hands Free Slip-Ins," "Walking Shoes," "Athletic Sneakers" — exactly the categories that matter to me. A "Free pickup at [location]" toggle, Filter/Sort bar, and "750 results" count. Feels organized, not overwhelming.

**Step 6 — Product detail:** Skechers Slip-ins Contour Foam - Cozy Fit, $88.00, "Limited Time 20% Off," 110 reviews at 4-something stars, a "Hands Free Slip-ins" badge, and a large product photo with swipe arrows. This is a well-built product page for someone like me — slip-on comfort is called out clearly.

**Step 7 — Add to Cart:** Width selector (Medium/Wide) and Size grid (7.0–13.0) shown, but both are flagged with red warning triangles ("Please select a width" / "Please select a size") right out of the gate — before I've interacted with anything. A bit alarming for a first impression, like I already did something wrong. "Add to Cart" button is big, blue, and easy to tap though.

**Step 8 — View Cart:** Completely blank white screen. No header, no items, no error message, nothing. This is the critical failure point — I have no way to know if my shoe made it into the cart, and no way to check out.

**Step 9 — Search "comfort shoes":** Returned 1,527 results, leading with "Max Cushioning Endeavour - Ardena" ($63.99, marked down from $85) and "GO WALK Arch Fit 2.0 - Cassy" ($85.00), both with color swatches and "Also in Wide" tags. Relevant, comfort-focused results — this part worked well. Cart icon still shows "0" here, reinforcing that my earlier add-to-cart likely never registered.

---

## Technical Audit

## Technical Summary

Audit covers 8 steps of a mobile journey through skechers.com (Homepage → Log In → Men category → Men > Shoes → PDP → Add to Cart → View Cart → Search). Key findings: (1) a bot-detection/fingerprinting endpoint (Kasada `/fp`) is returning `429` repeatedly, including once against `/cart/` itself; (2) the View Cart page is missing `<title>`, `lang`, and an `<h1>`/main landmark per axe; (3) homepage has critical ARIA/landmark violations from duplicate/nested `main` regions; (4) LCP and CLS were not captured for any step; (5) every page loads 20+ third-party marketing/analytics scripts synchronously in `<head>` prior to app JS.

## Accessibility

18 axe violations across 3 of 8 scanned pages (Men > Shoes, PDP, Add to Cart returned none in the provided data).

**Homepage (9 violations)**
- `button-name` (serious) — buttons without discernible text
- `link-name` (serious) — links without discernible text
- `aria-required-parent` (critical) — ARIA role used without required parent role container
- `aria-allowed-role` (minor) — invalid `role` value on an element
- `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique` (moderate) — multiple/nested `<main>` or duplicate landmark roles in the DOM
- `landmark-complementary-is-top-level` (moderate) — `aside`/complementary role nested inside another landmark
- `heading-order` (moderate) — heading levels skip/out of sequence
- `region` (moderate) — content exists outside any landmark

**View Cart (4 violations, all serious/moderate)**
- `document-title` (serious) — empty or missing `<title>`
- `html-has-lang` (serious) — `<html>` missing `lang` attribute (present on other scanned pages per HTML sample, so this appears specific to the cart view/template)
- `landmark-one-main` (moderate) — no `<main>` landmark present
- `page-has-heading-one` (moderate) — no `<h1>` on page

**Search "comfort shoes" (4 violations)**
- `aria-allowed-role` (minor), `landmark-complementary-is-top-level` (moderate), `landmark-unique` (moderate), `region` (moderate) — same landmark/ARIA structural pattern as homepage

The landmark/ARIA pattern (duplicate `main`, misplaced `aside`, content outside landmarks) recurring on both Homepage and Search suggests a shared layout template issue rather than isolated page bugs.

## SEO

- View Cart failing `document-title` and `html-has-lang` is a direct SEO defect on that template — missing title text and language declaration affect indexability and language targeting for any crawlable cart-adjacent URL.
- `page-has-heading-one` failure on View Cart means no `<h1>` is present for that document.
- Homepage's duplicate/non-top-level `main` landmarks indicate malformed document structure that can also confuse crawlers' content extraction, not just assistive tech.
- No canonical, meta description, or structured-data issues were evidenced in the (truncated) HTML samples provided — not assessed.

## Performance

| Step | TTFB | LCP | CLS |
|---|---|---|---|
| Homepage | 410ms | not captured | not captured |
| Log In | 416ms | not captured | not captured |
| Men category | 416ms | not captured | not captured |
| Men > Shoes | 30ms | not captured | not captured |
| Product detail | 49ms | not captured | not captured |
| Add to Cart | 49ms | not captured | not captured |
| View Cart | 316ms | not captured | not captured |
| Search | 30ms | not captured | not captured |

- TTFB is acceptable (<450ms) on all steps; content-page navigations (Men > Shoes, PDP, Add to Cart, Search) are sub-50ms, likely served from cache/CDN, while entry pages (Homepage, Log In, Men category, View Cart) sit at 300–420ms.
- LCP and CLS were not captured for any of the 8 steps — this is an instrumentation gap, not a confirmed absence of issues. Cannot assess actual paint or layout-shift performance from this data.
- HTML samples show 25+ third-party scripts (TikTok, Snapchat, Pinterest, Facebook, Reddit, Taboola, Bing, Monetate ×2, Quantum Metric, Impact, PulseInsights, GTM, Google Ads destinations ×2, WebFontLoader, etc.) all injected in `<head>`, most `async` but several using non-standard `vice-managed-src` attributes (a tag-manager wrapper pattern) rather than native `src`. This volume of head-injected third-party JS is a common driver of TBT/INP degradation even when marked async, and correlates with the CORS and rate-limit errors observed below.

## Mobile Optimization

- `<html>` carries an inline `style="--vh: 6.64...px"` set via JS on every page — a common workaround for mobile browsers' unreliable `100vh` unit. This is evidence the site depends on JS-computed viewport height rather than modern CSS viewport units (`dvh`/`svh`), which is a risk for layout shift/jank during mobile browser chrome show/hide.
- No `<meta name="viewport">` tag was visible in the provided (truncated) HTML samples — not confirmed present or absent; recommend explicit verification since it wasn't captured in the snippet.
- No other mobile-specific defects (touch target sizing, responsive breakpoints) were evidenced in the data provided.

## Console & Network Errors

**14 console errors / 6 network errors**, dominated by two distinct issues:

1. **Bot-detection endpoint rate-limiting (429)** — `https://www.skechers.com/.../fp?x-kpsdk-v=j-1.2.726` (Kasada client-side fingerprinting) returned `429` four times, and `https://www.skechers.com/cart/` itself returned `429` once. A `429` on the cart URL during a normal automated browsing session indicates the site's bot-mitigation layer is throttling/blocking legitimate-looking traffic on a transactional page, which is a functional risk for real mobile users triggering the same heuristics (rapid navigation, headless-adjacent signals, etc.).
2. **CORS-blocked stylesheet** — `https://web-assets.stylitics.com/style.css?base=grid&theme=skechers...` blocked by CORS policy from origin `https://www.skechers.com`, followed by `net::ERR_FAILED`. This is a third-party (Stylitics outfit-recommendation widget) misconfiguration — the resource is being requested in a mode requiring CORS headers the third party isn't sending, so its stylesheet fails to load entirely.
3. **"Unsupported Summarizer API languages"** (×4) — errors from Chrome's built-in on-device Summarizer API being invoked with an unsupported language parameter. This is a browser-level API call failing, not a network resource; likely triggered by a third-party script (e.g., one of the marketing/analytics tags) probing for Chrome's built-in AI APIs.

## Recommendations

1. Investigate why the Kasada bot-mitigation fingerprint endpoint is returning `429` on repeated calls, and specifically why `/cart/` itself returned `429` — this can block or degrade checkout for real users and should be treated as high priority.
2. Fix the View Cart template: add a non-empty `<title>`, `lang` attribute on `<html>`, and an `<h1>`/`<main>` landmark — four axe violations (2 serious, 2 moderate) trace to this single page.
3. Resolve the homepage/search landmark structure: eliminate duplicate/nested `<main>` elements, ensure `aside`/complementary regions are top-level, and wrap orphaned content in landmarks — this fixes 6 of the 9 homepage violations and mirrors the search page's 3 violations, suggesting one shared-template fix addresses both.
4. Add accessible names to the flagged buttons and links (`button-name`, `link-name`) and correct the invalid `aria-allowed-role`/`aria-required-parent` usage on the homepage.
5. Fix the Stylitics CORS/stylesheet failure — coordinate with the vendor on proper CORS headers or switch to a non-credentialed fetch mode for `web-assets.stylitics.com`.
6. Instrument LCP and CLS collection (both returned null in this audit) — without them, real-user paint and layout-stability performance cannot be assessed at all.
7. Audit third-party script load: 25+ marketing/analytics tags are injected head-of-document on every page load; consider consolidating through the tag manager with deferred/lazy loading for non-critical pixels to reduce main-thread contention on mobile.
8. Confirm a proper `<meta name="viewport">` is present and consider migrating the `--vh` JS-computed custom property to native CSS `dvh`/`svh` units to reduce reliance on JS-driven viewport-height recalculation on mobile.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

