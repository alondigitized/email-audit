---
slug: 2026-08-31-site-journey-walker
type: site
date: 2026-08-31
persona: walker
score: "2/10"
previous_score: "3/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 3/10) · **Type:** Site journey · **2026-08-31**
## Full review
## 1. Executive Summary

I went in ready to buy — I found a hands-free slip-in shoe I liked, picked it out, hit "Add to Cart" — and then the site handed me a blank white screen where my cart should be. No cart, no confirmation, no way to check out. That's the whole story today: a decent browse experience wrapped around a checkout path that doesn't work. I also couldn't tell if "Log In" did anything at all — the screen after tapping it looked identical to the homepage.

## 2. Business Impact Score (1-10)

**2/10.** A shopper who successfully found the right shoe, right price, and tapped "Add to Cart" hit a dead end at the cart page. That's about as close to a sale as it gets before losing it entirely. This is a **regression** from yesterday's 3/10 — yesterday's experience was weak, but at least the core steps rendered something.

## 3. What's Working

- The **hamburger "MEN" flyout menu** (Step 4) is genuinely well organized — Shoes, Shop by Activity, Comfort Technologies, Collections all laid out with clear chevrons. Easy to tap, easy to scan.
- **Men's Shoes category page** leads with exactly what I care about: "Hands Free Slip-Ins" and "Walking Shoes" as the first two tiles. Someone on this team understands their comfort-first customer.
- The **product page** for the Slip-ins Contour Foam shoe is clean — big product photo, star rating with review count, clear price, and it's genuinely the right kind of shoe for me (hands-free, cushioned).
- **Search results for "comfort shoes"** actually delivered — Max Cushioning and GO Walk Arch Fit shoes, with real sale pricing shown ($85.00 → $63.99). This is the one place I can actually see the price-vs-quality math without hunting for a promo code.

## 4. What's Weak

- **Cart page is a blank white screen.** After tapping Add to Cart, viewing the cart shows nothing — no items, no total, no error message, just white space. This is a hard stop for anyone trying to buy.
- **Cart icon still shows "0"** even after Add to Cart was tapped, so I genuinely don't know if my shoe made it into the cart at all.
- **Login appears to do nothing.** The screenshot after tapping "Log In" is pixel-identical to the homepage — no login form, no modal, nothing. If I'm a loyalty member trying to see my saved size or points, I have no way to get there.
- **Popup dismissal step also shows no change** from the homepage — either there was nothing to dismiss, or a popup appeared and vanished too fast to matter. Hard to tell which, and that ambiguity itself is a bad sign for reliability.
- The **size selector flags "Please select a size" as a standing warning**, visible before I've even tried to add anything, which reads like a residual error state rather than a helpful prompt.
- The **20%-off code (UPGRADE)** shows up as a banner and a redemption instruction on the product page, but never as an actual struck-through price like the search results page does. I have to do the math myself, or worse, guess whether the code even applied.
- No sign of a **cross-brand comparison** anywhere in this journey (Hoka, Brooks, New Balance) — not expected on a brand's own site, but worth naming since it's part of how I actually shop.

## 5. Recommendations

1. **Fix the cart page immediately.** A blank screen after Add to Cart is a revenue-killing bug, not a polish issue. This should be the #1 priority before anything else on this list.
2. **Confirm Add to Cart actually adds the item** — the cart badge staying at "0" suggests the action may be silently failing even before the blank-page issue.
3. **Make Login functional and visible** — either open a modal or navigate to a login page with clear on-screen confirmation that something happened.
4. Carry the **"$85.00 → $63.99" struck-through pricing pattern** from search results onto every product detail page, so the discount is visible without a promo code.
5. Clear the **stale "Please select a size" warning** so it only appears after an actual failed attempt to add to cart.

## 6. Bottom Line

I liked what I found — the right shoe, at a real discount, easy enough to reach through the menu. But I couldn't buy it. When my cart came up blank, I would have just closed the tab and gone to Amazon or called it a day. A site that can't show me my own cart isn't ready for my money, no matter how good the shoe listing looks.

## 7. Evidence

**Step 1 — Homepage:** Blue promo banner ("20% OFF Top Sellers, Code: UPGRADE"), search/account/cart/menu icons up top, a running-focused hero banner ("AEROBURST — Designed to Cut Through the Wind") with athletic models mid-stride. Text is legible without zooming, icons are a fair tap size. Friction: the hero image is built for a runner, not someone like me looking for a slip-on walking shoe — doesn't feel personalized to a comfort shopper.

**Step 2 — Dismiss Popups:** Screen is identical to Step 1. Either no popup appeared, or it was gone before I could see it. No friction encountered, but also no confirmation anything happened.

**Step 3 — Log In:** Screen is again identical to the homepage — no login form, modal, or account page appeared. If I actually tapped "Login" expecting to see my saved sizes or rewards balance, nothing happened. This felt broken.

**Step 4 — Men category:** A slide-out flyout menu with "MEN" at the top, "Back" and close (X) controls, and a clean list: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories, each with a right-facing arrow. Easy to read, easy to tap, no confusion.

**Step 5 — Men > Shoes:** "Men's Shoes" header, three image tiles up top (Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers) — directly relevant to what I'm shopping for. "738 results," a free-pickup toggle, filter and sort controls below. Good use of screen space, nothing crowded.

**Step 6 — Product detail:** "Skechers Slip-ins: Contour Foam - Cozy Fit Ohtro," $88.00, "Limited Time 20% Off! Use Code: UPGRADE," 4.5-star rating with 56 reviews, large product photo with swipe arrows. Felt like the right shoe for me. Minor friction: the discount requires typing in a code rather than showing a final price.

**Step 7 — Add to Cart:** Size grid (6.5–13.0), a "Please select a size" warning already showing, quantity dropdown, shipping/pickup info, and a large blue "Add to Cart" button — good touch target, easy to hit with a thumb. But the cart icon at top still reads "0," so I'm not confident the tap registered.

**Step 8 — View Cart:** Completely blank white page. No header, no items, no error text — nothing. This is a full breakdown of the shopping flow at the most critical moment.

**Step 9 — Search "comfort shoes":** Returned "1,500 results" with relevant products — Max Cushioning Endeavour ($85.00 → $63.99) and GO Walk Arch Fit 2.0 ($85.00), color swatches, "Also in Wide" tags. This page did the price math for me and felt the most trustworthy of the whole journey — a shame the cart couldn't follow through on it.

---

## Technical Audit

## Technical Summary
Mobile journey through 8 steps (homepage → login → category → subcategory → PDP → cart add → cart view → search) surfaced 18 axe violations, 14 console errors, and 6 network errors, concentrated on the homepage, cart, and search results templates. Root causes cluster into three areas: ARIA/landmark structure on the homepage, missing document metadata on the cart page, and third-party script failures (bot-detection rate limiting, a broken CORS stylesheet request).

## Accessibility
18 violations across 3 of 8 steps (Homepage, View Cart, Search):
- **Critical (2, Homepage):** `button-name` — buttons without discernible text; `aria-required-parent` — ARIA role used outside its required parent role context.
- **Serious (2):** `link-name` (Homepage) — links without discernible text; `document-title` (View Cart) — cart page has no `<title>`.
- **Serious (1):** `html-has-lang` (View Cart) — cart page's `<html>` lacks a `lang` attribute, unlike the other sampled pages which set `lang="en"`.
- **Moderate (11):** repeated landmark issues — `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-one-main`, `landmark-unique`, `landmark-complementary-is-top-level` (x2), `region` (x2), `heading-order`, `page-has-heading-one`.
- **Minor (2):** `aria-allowed-role` (Homepage, Search) — invalid `role` value for the element type.

Log In, Men category, Men > Shoes, Product detail, Add to Cart steps: no violations reported.

## SEO
- View Cart page is missing both `<title>` and `<html lang>` — both are indexing/accessibility-relevant metadata gaps on a page that should otherwise be indexable.
- The "Log In" and "Men category" steps resolve to the identical URL as the Homepage (`https://www.skechers.com/`), indicating these views render as client-side overlays/modals rather than distinct routes. This means these states are not independently crawlable or deep-linkable.
- Duplicate/non-unique landmark regions (flagged under Accessibility) also degrade how assistive tech and some crawlers parse page structure.

## Performance
LCP and CLS were not captured in this pass (instrumentation gap — no values returned for any step), so no Core Web Vitals verdict can be given. TTFB by step:

| Step | TTFB |
|---|---|
| Homepage | 422ms |
| Log In | 403ms |
| Men category | 403ms |
| Men > Shoes | 30ms |
| Product detail | 29ms |
| Add to Cart | 29ms |
| View Cart | 117ms |
| Search | 77ms |

Homepage, Log In, and Men category TTFB (400ms+) are notably higher than the subsequent steps (29–117ms), consistent with those three being full/initial document loads versus client-rendered transitions for the rest. No LCP/CLS data means layout-shift and paint-timing issues cannot be ruled in or out from this data — flagged as a measurement gap, not a clean bill of health.

## Mobile Optimization
- Page markup sets an inline `--vh` custom property (`style="--vh: 6.64px"`) on `<html>`, a common JS-computed viewport-height fix for the iOS 100vh bug. This makes correct viewport sizing dependent on JS execution completing before layout — a potential source of shift/mis-sizing if that script runs late or fails, though not directly observable from the provided samples.
- No `<meta name="viewport">` tag is visible in the truncated HTML samples provided; this is inconclusive (samples are cut off partway through `<head>`) rather than a confirmed omission — recommend verifying directly.

## Console & Network Errors
- **429 (rate-limited), 5 occurrences:** `https://www.skechers.com/.../fp?x-kpsdk-v=...` — a Kasada (`kpsdk`) bot-detection fingerprinting endpoint, plus one 429 on `/cart/` itself. Repeated 429s against the fingerprinting endpoint during a single normal session suggest the anti-bot layer is rate-limiting legitimate traffic, and the cart page load itself being 429'd is a functional failure risk on that step.
- **CORS failure:** `web-assets.stylitics.com/style.css` blocked — missing `Access-Control-Allow-Origin` header on the third-party Stylitics stylesheet, causing it to fail to load (`net::ERR_FAILED`). This is a third-party misconfiguration, not first-party code, but breaks whatever styling that widget depends on.
- **Summarizer API warnings, 4 occurrences:** "Unsupported Summarizer API languages" — a script is invoking Chrome's experimental on-device Summarizer API without checking supported-language capability first, causing repeated aborted calls. Low severity, but indicates unguarded feature detection.

## Recommendations
1. Fix homepage `button-name`/`link-name` violations by adding accessible text (`aria-label` or visually-hidden text) to icon-only buttons/links.
2. Correct the ARIA landmark structure sitewide (single top-level `<main>`, uniquely labeled landmarks, valid `role` values) — the same pattern repeats across Homepage and Search.
3. Add `<title>` and `<html lang="en">` to the cart page template specifically; it appears to diverge from the other templates' markup.
4. Give "Log In" and "Men category" distinct, crawlable URLs instead of same-URL client-side overlays, if SEO/deep-linking of those states matters.
5. Investigate why the Kasada fingerprinting endpoint is returning 429 mid-session, and why `/cart/` itself returned 429 — confirm this isn't rate-limiting real mobile users.
6. Report the CORS misconfiguration to Stylitics (or add `crossorigin` handling/self-host) so the stylesheet loads.
7. Re-run with LCP/CLS collection enabled — this dataset cannot support a performance verdict without it.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

