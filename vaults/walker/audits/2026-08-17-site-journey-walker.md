---
slug: 2026-08-17-site-journey-walker
type: site
date: 2026-08-17
persona: walker
score: "3/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-3, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 3/10 (prev 2/10) · **Type:** Site journey · **2026-08-17**
## Full review
## 1. Executive Summary

Walker made it from the homepage into the exact shoe category he cares about — Hands Free Slip-ins with Wide Fit filters — and the product page itself was a good match for his needs (Arch Fit 3.0, slip-in, $115, wide/extra-wide sizing). But the trip fell apart at the two moments that matter most: the login step never visibly did anything, and after struggling with size selection, the cart page loaded completely blank. He never actually got a shoe in his cart, and the site never once acknowledged he'd logged in. Search for "comfort shoes" also handed him women's shoes first, which isn't what a man typing that phrase expects to see up top.

## 2. Business Impact Score (1-10)

**3/10** — up marginally from yesterday's 2/10. The men's shoe browsing path (menu → Hands Free Slip-ins → PDP) is legitimately solid and on-persona now. But this is still a site where the login button does nothing visible, the cart page renders blank, and add-to-cart can't complete without picking a size first — any one of these is enough to lose a 62-year-old shopper who isn't going to debug a broken web page. A blank cart is arguably worse for trust than yesterday's failure mode, since it looks like the site crashed.

## 3. What's Working

- **Category structure for his needs**: the hamburger menu surfaces "Hands Free Slip-ins," "Wide Fit," and "Extra Wide Fit" as top-level MEN links — exactly the vocabulary Walker uses.
- **PLP filters match his shopping criteria**: Wide Fit / Extra Wide Fit / Medium Fit pills sit right at the top of the Hands Free Slip-ins listing, no digging required.
- **PDP is comfort-forward**: "Arch Fit 3.0," the Hands Free Slip-ins badge, and a big clear product photo are all above the fold — no scrolling needed to know this is a slip-on with arch support.
- **Text and touch targets** on the menu and PLP are large and legible without zooming — good for his eyes and thumbs.

## 4. What's Weak

- **Login is a dead end**: tapping Log In produced a screen pixel-identical to the homepage. No form, no confirmation, nothing. Walker has no idea whether he's logged in or not.
- **Cart page is blank white**: after Add to Cart, the cart screen shows nothing — no header, no items, no "your cart is empty" message. This reads as a broken site, not an empty cart.
- **Add to Cart can't complete size-free**: the PDP correctly blocks with "Please select a size," but the flow as captured never got past that, and the cart badge stayed at 0 throughout. There's no forgiving default or nudge to help him pick a size fast.
- **Search relevance skews female for a male shopper**: "comfort shoes" surfaces two Women's products first. For Walker, that's an immediate signal the search doesn't know who he is.
- **Price-vs-quality context is absent**: $115, "Excluded from promotions" — no comparison to Hoka/Brooks/New Balance, no explanation of why arch support at this price beats the DSW clearance aisle.
- **Zero personalization anywhere in the journey**, despite a login step being explicitly walked.

## 5. Recommendations

1. Fix the login flow so tapping it visibly opens a sign-in form or shows a signed-in state — right now it's functionally invisible.
2. Fix the blank cart page — this is a checkout-blocking bug, not a polish issue.
3. Add a lightweight "select a size to continue" scroll-to/highlight so first-time mobile shoppers don't stall at Add to Cart.
4. Bias "comfort shoes" search toward the shopper's known/inferred gender, or at minimum interleave men's and women's results instead of leading with women's.
5. Add a short comparison callout on the PDP or PLP ("vs. Hoka/Brooks arch support") — this is Walker's core decision driver and it's nowhere in the funnel.

## 6. Bottom Line

The men's browsing path finally speaks Walker's language — hands-free, wide fit, arch support are all front and center. But a shopper can't buy a shoe here: login is silent, the cart is blank, and search doesn't know he's shopping for himself. Until the cart renders and login gives visible feedback, none of the good PLP/PDP work converts.

## 7. Evidence

**Step 1 — Homepage**: Banner promo ("Up to 40% off Summer Styles"), 25% off apparel/bags callout, three category tiles (Slip-ins, Workout Walker, Arch Fit) with lifestyle photography. Clean, large nav icons (search, account, cart, hamburger menu). Easy to scan on a phone, text readable without zooming. Nothing personalized — generic promo banner, cart badge at 0.

**Step 2 — Dismiss Popups**: Screen is pixel-identical to Step 1 — no popup appeared to dismiss. Neutral for Walker (no annoying interstitial), but also means this step demonstrated nothing.

**Step 3 — Log In**: Screen is again identical to the homepage — no login form, no modal, no state change of any kind, cart still at 0. From Walker's perspective, tapping the account icon did nothing. This is a hard failure for a persona who explicitly cross-checks "trusts a brand more when the email matches what he saw scrolling" — there's no account state to even anchor that trust in.

**Step 4 — Men category**: Slide-out menu with MEN header, clear rows (Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories) plus direct shortcuts to Hands Free Slip-ins, Wide Fit, Extra Wide Fit below the fold of the menu. Large tap targets, good spacing, easy for a 62-year-old thumb. Chevrons clearly indicate expandable rows. This is the strongest screen in the journey.

**Step 5 — Men > Shoes (Hands Free Slip-ins)**: Breadcrumb (Men > Shoes), page title "Hands Free Slip-ins," three fit-filter pills (Wide/Extra Wide/Medium Fit) in bold blue, a "Free pickup at [location]" toggle, Filter/Sort controls, "320 results," and a two-column product grid with quick-add cart icons on each thumbnail. Very on-target for Walker's comfort-first, wide-fit-aware shopping style. Easy to tap and scan.

**Step 6 — Product detail**: "Skechers Slip-ins: Arch Fit 3.0 – Kaliver," $115.00, no reviews yet, "Excluded from promotions" flagged clearly, Hands Free Slip-ins badge graphic, large product photo with swipe arrows. Straightforward and readable, but no price-vs-competitor context and no visible size chart engagement yet.

**Step 7 — Add to Cart**: Size grid (7.0–14.0) in a clean 5-column layout, red "Please select a size" warning shown (no size was selected), QTY dropdown, Ship It / Check in-store availability sections, and a large dark "Add to Cart" button. Good touch-target size, but the flow stalls here — no size chosen, so nothing was actually added (cart badge stayed at 0 into the next step).

**Step 8 — View Cart**: Completely blank white screen — no header, no nav, no "cart is empty" message, nothing. This looks like a crash to a non-technical shopper and is the single worst moment in the journey. Not personalized because there's nothing rendered at all.

**Step 9 — Search "comfort shoes"**: 1,517 results returned (relevant in volume), Filter/Sort controls present, but the first two results shown are Women's shoes (Contour Foam Cozy Fit Pure Comfort, $75; Skechers Slip-ins Glide-Step Comfort Soft Power, $85). For Walker searching as a man, leading with women's product doesn't feel personalized or relevant to his intent.

---

## Technical Audit

## Technical Summary

The mobile journey through skechers.com surfaces four categories of code-level issues: (1) a bot-mitigation service (Kasada, identified via `x-kpsdk-v` param) intermittently returning `429` on its fingerprinting endpoint, including once on the `/cart/` page itself; (2) a malformed/leftover API call requesting a literal test product ID that returns `403`; (3) DOM structure defects (duplicate/non-top-level landmarks, missing `<title>`/`lang` on the cart page) that affect both accessibility and SEO; (4) LCP/CLS were not capturable for any step, indicating a Web Vitals instrumentation gap in the current audit tooling rather than a site defect — flagged for the record but not scored.

## Accessibility

18 axe violations across 3 pages (Homepage, View Cart, Search).

**Homepage (10 violations)**
- `[critical]` `button-name` — one or more buttons have no discernible text (icon-only buttons missing `aria-label`).
- `[critical]` `aria-required-parent` — an ARIA role is used outside its required parent role context.
- `[serious]` `link-name` — links present with no accessible name.
- `[moderate]` `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `landmark-complementary-is-top-level` — multiple/nested `<main>` and `<aside>`/complementary landmarks, likely from third-party widgets (chat, personalization, reviews) injecting their own landmark roles into the DOM.
- `[moderate]` `heading-order` — heading levels skip/are out of sequence.
- `[moderate]` `region` — content exists outside any landmark.
- `[minor]` `aria-allowed-role` — an element has a `role` not valid for its tag.

**View Cart (4 violations, all structural)**
- `[serious]` `document-title` — page has no `<title>`. This is a client-side-rendered cart state that never sets `document.title`.
- `[serious]` `html-has-lang` — `<html>` lacks a `lang` attribute on this route/state.
- `[moderate]` `landmark-one-main` — no `<main>` landmark present.
- `[moderate]` `page-has-heading-one` — no `<h1>` on the page.

**Search "comfort shoes" (4 violations)**
- `[minor]` `aria-allowed-role`, `[moderate]` `landmark-complementary-is-top-level`, `landmark-unique`, `region` — same landmark-nesting pattern as Homepage, consistent with a shared header/layout component that duplicates landmark roles.

The View Cart findings are the most severe from a compliance standpoint (WCAG 2.4.2, 3.1.1) since they indicate the cart view is not rendering full document metadata — consistent with it being reached via client-side navigation/AJAX rather than a full page load.

## SEO

- Missing `<title>` and `<html lang>` on the View Cart state (see Accessibility) is also an SEO defect — any crawler or share/preview mechanism landing on this state gets no title and no language signal.
- Missing `<h1>` on View Cart — no primary heading for that document state.
- Duplicate/non-unique landmark regions (Homepage, Search) don't directly affect SEO but indicate templating/component duplication worth auditing for duplicate structured data or duplicated content blocks.
- No canonical, meta description, or structured-data issues were captured in the provided data — not evaluated here.

## Performance

TTFB by step:
| Step | TTFB |
|---|---|
| Homepage | 379ms |
| Log In | 440ms |
| Men category | 440ms |
| Men > Shoes | 23ms |
| Product detail | 26ms |
| Add to Cart | 26ms |
| View Cart | 285ms |
| Search | 28ms |

- Homepage/Log In/Men category TTFB (379–440ms) is materially higher than the sub-30ms figures on later steps, consistent with full SSR page loads (SFCC/Demandware) vs. subsequent steps served from cache or client-rendered transitions.
- LCP and CLS were not captured for any step (all `?ms`) — the audit tooling did not record paint/layout-shift timing. This should be treated as an instrumentation gap, not a measured "no issues" result; re-run with a Web Vitals collector (e.g. `web-vitals` library or Lighthouse) to get real LCP/CLS numbers before drawing conclusions.
- The page issues 20+ third-party `async` script tags before/alongside first paint (GTM, TikTok, Snapchat, Reddit, Taboola, Quantum Metric, Monetate, Impact, Bazaarvoice, PulseInsights, WebFontLoader, etc.). This volume of third-party JS is a plausible contributor to elevated TTFB-adjacent load and to the repeated `429`s below, though it doesn't affect TTFB (server-side) directly.
- Repeated `429` responses on the Kasada bot-detection fingerprint endpoint (`/fp?x-kpsdk-v=...`) mean that request is being retried multiple times per session, adding redundant network load on every page in the funnel.

## Mobile Optimization

- The page sets a custom CSS variable `--vh: 6.64px` on `<html>` via inline style — a common workaround for mobile viewport-height (`100vh`) inconsistencies caused by mobile browser chrome. Confirms a JS-based viewport-height fix is in place; verify it's recalculated on orientation change/resize, not just on load.
- No responsive meta-viewport or breakpoint-specific defects were observable in the truncated HTML provided.
- The same landmark-duplication defects noted in Accessibility apply equally on mobile viewports since they're DOM-structural, not CSS/layout-driven.

## Console & Network Errors

**25 console errors**, dominated by 3 repeating patterns:
- `429` resource load failures (matches network errors below).
- `Permissions policy violation: unload is not allowed in this document.` — code somewhere in the page or a third-party script still attaches an `unload` event listener, which is blocked by the browser's Permissions Policy. This should be tracked down and replaced with `pagehide`/`visibilitychange`.
- `Unsupported Summarizer API languages were specified, and the request was aborted.` — a script (likely a third-party AI/personalization tag) is calling the browser's built-in Summarizer API with an unsupported language argument, causing the call to abort. Non-fatal but indicates dead/misconfigured code shipping to production.

**7 network errors:**
- `429` ×5 on `https://www.skechers.com/149e9513.../2d206a39.../fp?x-kpsdk-v=j-1.2.661` — Kasada bot-mitigation fingerprint endpoint, including one occurrence on `/cart/` itself. Repeated 429s on a security/bot-check endpoint mid-session is worth investigating: either the automated audit traffic is being rate-limited as suspected bot activity (expected behavior, not a site bug) or real users on slower connections could hit the same throttling.
- `403` on `.../BazaarvoiceProductData-GetProduct?pid=test` — a request is being made with a literal, non-substituted `pid=test` parameter. This reads as a hardcoded/placeholder product ID that shipped to production, guaranteeing a failed reviews-widget request on whatever page fires it.

## Recommendations

1. Add `aria-label`/accessible text to icon-only buttons and links flagged by `button-name`/`link-name` (Homepage).
2. Fix landmark nesting: ensure only one top-level `<main>`, move duplicated `<aside>`/complementary regions to top level or remove redundant ones, likely originating from a third-party widget's injected markup.
3. On the View Cart route/state, ensure `document.title`, `<html lang="en">`, an `<h1>`, and a `<main>` landmark are set even when the cart is rendered via client-side navigation rather than a full page load.
4. Correct heading order on the Homepage so levels don't skip.
5. Find and fix the hardcoded `pid=test` parameter in the Bazaarvoice product-review request — trace which component fires it and pass the real product ID.
6. Replace any remaining `unload` event listeners with `pagehide`/`visibilitychange` to eliminate the Permissions Policy violations.
7. Remove or gate the Summarizer API call behind a supported-language check to stop the aborted-request console errors.
8. Re-instrument the audit to capture real LCP/CLS (current run returned no values for any step) before drawing performance conclusions beyond TTFB.
9. Investigate whether the Kasada `429`s reflect audit-tool traffic being flagged as bot activity vs. a throttling threshold real users could hit, particularly since one occurred on `/cart/`.
## Recent history

- [[2026-08-16-site-journey-walker]] — 2/10 (2026-08-16)
- [[2026-08-15-site-journey-walker]] — 3/10 (2026-08-15)
- [[2026-08-14-site-journey-walker]] — 3/10 (2026-08-14)

