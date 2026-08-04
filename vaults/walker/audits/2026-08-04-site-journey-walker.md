---
slug: 2026-08-04-site-journey-walker
type: site
date: 2026-08-04
persona: walker
score: "3/10"
previous_score: "4/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-3, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 3/10 (prev 4/10) · **Type:** Site journey · **2026-08-04**
## Full review
## 1. Executive Summary

I made it from the front door all the way to a search results page, and along the way I found one good idea (that hamburger menu practically has a sign that says "Walker, click here") and one dealbreaker (my cart page came up flat-out blank). When the thing that's supposed to close the sale doesn't even load, the rest of the polish doesn't matter much. I didn't come away trusting this checkout.

## 2. Business Impact Score (1-10)

**3/10** — down from yesterday's 4/10. The blank cart page and a login button that did nothing visible are the kind of things that make a fella like me close the browser and go to Amazon.

## 3. What's Working

- The hamburger menu's Men flyout is genuinely good — "Hands Free Slip-ins," "Wide Fit," "Comfort Technologies" are all right there, big and tappable, no hunting required.
- The Slip-ins category page has honest, chunky filter buttons (Wide Fit / Extra Wide Fit / Medium Fit) sized for a thumb, not a mouse pointer.
- Size selection on the product page is a clean grid, easy to hit, and the "Please select a size" warning is clear when I forgot to pick one.
- The product photo and price on the Skech-Air Summits page are big and legible without pinching to zoom.

## 4. What's Weak

- **Login is a dead end.** Tapping the account icon did nothing I could see — no sign-in form, no account page, and the site never showed me as logged in afterward.
- **Cart page rendered completely blank.** Not an "empty cart" message — just a white screen. That's not a hiccup, that's broken.
- **Search for "comfort shoes" put women's shoes first.** I'm shopping men's the whole way through this trip and the results didn't know that.
- No arch-support or cushioning comparison content anywhere — nothing that helps me weigh this against my Hoka or New Balance options, which is exactly the kind of thing that would close the deal for me.
- The homepage hero is a moody lifestyle photo of two twenty-somethings in an alley. Fine photography, but it's not telling me anything about comfort or fit.

## 5. Recommendations

1. Fix the cart page rendering — a blank screen after "Add to Cart" is a checkout-killing bug, not a cosmetic one.
2. Make login actually open something (modal or page) and reflect a logged-in state afterward — right now it's invisible and I can't tell if it worked.
3. Weight search results toward the gender/category I've been browsing, not just keyword match.
4. Add a simple comfort/arch-support callout or comparison blurb on product pages — the stuff that gets a guy like me past "just looking."

## 6. Bottom Line

The menu and product browsing prove the team knows how to design for someone like me — big buttons, plain filters, no clutter. But comfort in the aisle doesn't matter if the register's broken. Until that cart page actually shows me my shoe, I'm not buying here on my phone.

## 7. Evidence

**Step 1 — Homepage:** Clean top bar, logo big and legible, search/account/cart/menu icons all reasonably sized for a thumb. Hero image is a stylish lifestyle shot of two young models on stairs — striking, but says nothing about comfort, cushioning, or hands-free anything. Cart badge shows 0. Easy to use, not personalized to me at all.

**Step 2 — Dismiss Popups:** No popup actually appeared to dismiss — the only visible change was the promo banner text swapping from "Skechers x Care Bears" to "Skechers x Britto." No friction here, but also nothing confirming a popup was ever in the way.

**Step 3 — Log In:** This is where I got confused. The screenshot looks identical to the homepage again (banner even reverted back to Care Bears) — no login form, no account page, nothing indicating I signed in. If I'd tapped that person icon expecting to reach my account, I'd be stuck wondering if anything happened at all. Not personalized, because it doesn't appear the login worked.

**Step 4 — Men category:** This actually opened the hamburger MENU flyout rather than a simple "Men" nav tap, landing on a MEN panel with Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories, and shortcuts for Hands Free Slip-ins / Wide Fit / Extra Wide Fit. Big rows, easy targets, good use of white space. This is the best screen in the whole trip for someone my age — it practically reads my mind about hands-free and wide fit.

**Step 5 — Men > Shoes (Hands Free Slip-ins):** 324 results, big Wide Fit/Extra Wide Fit/Medium Fit filter pills up top, a free-pickup toggle, and a two-column product grid with the Arch Fit D'Lites 330 leading the pack. Legible text, generous tap targets, no zooming needed. Felt relevant to what I came here for.

**Step 6 — Product detail:** Skechers Slip-ins: Skech-Air Summits, $90.00, 13 reviews at 5 stars, clear "Hands Free Slip-ins" badge on the image. Price and title are big and easy to read. No arch-support or cushioning bullet copy visible without scrolling further — a missed chance to sell me on the comfort tech right up top.

**Step 7 — Add to Cart:** Size grid (7.0–13.0) is well spaced and easy to tap. I skipped picking a size and got a clear red "Please select a size" warning — good validation, no confusion. Ship-it and in-store-pickup options are plainly labeled. The Add to Cart button itself is big, blue, and impossible to miss.

**Step 8 — View Cart:** Blank white screen. No header, no nav, no "your cart is empty" message, nothing. This is either a broken cart render or the page failed to load — either way, it's the kind of dead end that would make me think the site crashed and give up right there.

**Step 9 — Search "comfort shoes":** Search technically worked — 1,473 results, filter and sort controls present, big product cards with clear pricing ($75.00, $48.99–$65.00). But the first two results shown are Women's shoes, despite my whole visit being focused on Men's. Doesn't feel like it's paying attention to what I've actually been browsing.

---

## Technical Audit

## Technical Summary
Mobile journey audited across 8 steps on a Salesforce Commerce Cloud (Demandware) storefront. Two infrastructure-level issues stand out: repeated `429` responses from the Kasada bot-mitigation fingerprinting endpoint (including on `/cart/`), and a CORS-blocked third-party stylesheet (Stylitics). Accessibility scan surfaced 12 violations, including a critical ARIA structural error and two serious issues (missing `<title>`/`lang`) isolated to the View Cart step. LCP/CLS were not captured in this run — only TTFB is available.

## Accessibility
- **Critical:** `aria-required-parent` on Homepage — an ARIA role is used without its required parent role, which can break the accessibility tree for screen readers.
- **Serious (View Cart only):** `document-title` and `html-has-lang` both fail — the cart step is missing a document `<title>` and `lang` attribute that are present on every other step's HTML sample. This suggests the cart renders through a different template/fragment path (e.g., an overlay or partial re-render) that doesn't inherit the document-level `<head>` state.
- **Moderate:** Duplicate/non-top-level landmarks (`landmark-main-is-top-level`, `landmark-complementary-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique` ×2, `landmark-one-main`) on Homepage, View Cart, and Search — indicates multiple `<main>`/landmark regions injected by third-party widgets or duplicated layout templates.
- **Moderate:** `page-has-heading-one` fails on Homepage and Search — no `<h1>` present.
- **Minor:** `aria-allowed-role` on Homepage — a non-standard role value on an element.

## SEO
- Missing `<title>` and `lang` attribute on View Cart is also an indexability/crawl signal issue, not just accessibility — if this fragment is ever served directly or crawled, it lacks basic on-page metadata.
- No `<h1>` on Homepage or Search results page — a code-level heading-hierarchy gap.
- The Kasada `429` rate-limiting observed on normal navigation (including `/cart/`) is a risk if the same fingerprinting/challenge logic triggers against crawler traffic, though this data set doesn't confirm bot-vs-crawler differentiation.

## Performance
TTFB by step (LCP/CLS not instrumented in this run):
| Step | TTFB |
|---|---|
| Homepage | 27ms |
| Log In | 392ms |
| Men category | 392ms |
| Men > Shoes | 30ms |
| Product detail | 32ms |
| Add to Cart | 32ms |
| View Cart | 123ms |
| Search | 31ms |

- Log In and Men category show ~13x higher TTFB (392ms) than the other steps (27-32ms), pointing to server-side work (personalization, session/auth checks, or category-facet computation) not present on product/search pages.
- View Cart (123ms) is mid-range, consistent with cart-state computation.
- LCP and CLS were not captured for any step — this is an instrumentation gap in the audit tooling, not a confirmed site defect, but it means no visibility into actual rendering/layout-shift performance.
- Homepage HTML shows 20+ synchronously-registered `async` third-party scripts (GTM, TikTok, Snapchat, Reddit, Facebook, Taboola, Monetate, Quantum Metric, Bazaarvoice, Pinterest, etc.) plus a `webfontloader` fetch — high third-party script count increases main-thread contention and network request volume even though each is individually async.

## Mobile Optimization
- HTML shows an inline `--vh` custom property (`style="--vh: 6.64px"`) being set on `<html>`, indicating JS-based viewport-height correction (a common fix for mobile browser chrome/viewport bugs) — functioning as expected, no issue found.
- The Stylitics CORS failure (see below) affects an outfit/styling widget stylesheet; on mobile this risks unstyled/broken widget rendering since there's no fallback stylesheet path evident.
- No mobile-specific viewport meta, touch-target, or responsive-layout data was captured in this data set — cannot assess further without additional signals.

## Console & Network Errors
- **6× `429`** on `https://www.skechers.com/149e9513.../fp?x-kpsdk-v=...` — this is a Kasada bot-detection fingerprinting endpoint being rate-limited repeatedly during a single normal navigation session, and it also fires on the `/cart/` request itself. This indicates the bot-mitigation layer is either mis-tuned (rate-limiting legitimate traffic) or the client is retrying the fingerprint call excessively.
- **403** on `BazaarvoiceProductData-GetProduct?pid=test` — the literal query param `pid=test` strongly suggests a hardcoded/placeholder product ID reaching production code (test data not swapped for the real SKU), causing the reviews API to reject the request.
- **CORS block** on `web-assets.stylitics.com/style.css` — missing `Access-Control-Allow-Origin` header on the Stylitics CSS response blocks it from loading cross-origin; the associated `ERR_FAILED` is the resulting failed resource load.
- No 4xx/5xx errors were observed on core product/cart HTML documents themselves — errors are confined to third-party/API integrations.

## Recommendations
1. Investigate why the Kasada `/fp` fingerprinting endpoint is returning `429` on a single mobile session, including on the cart page load — this is either overly aggressive rate-limiting or a retry-storm bug in the client-side fingerprinting script.
2. Remove or fix the hardcoded `pid=test` parameter in the Bazaarvoice `GetProduct` call causing the `403`.
3. Fix CORS headers on `web-assets.stylitics.com` (or self-host/proxy the stylesheet) so the outfit-widget CSS loads.
4. Add a `<title>` and `lang` attribute to whatever template/fragment renders the View Cart step.
5. Consolidate duplicate `<main>`/landmark regions and ensure a single `<h1>` exists on Homepage and Search.
6. Fix the ARIA parent-role violation (`aria-required-parent`) on Homepage.
7. Profile server-side response time on Log In and Men category (392ms TTFB) to identify the cause of the ~13x gap versus other steps.
8. Re-run the audit with LCP/CLS capture enabled — this data set has no rendering-performance visibility.
## Recent history

- [[2026-07-24-homepage-www.skechers.com-walker]] — 6/10 (2026-07-24)
- [[2026-07-24-site-journey-walker]] — 4/10 (2026-07-24)
- [[2026-07-23-site-journey-walker]] — 4/10 (2026-07-23)

