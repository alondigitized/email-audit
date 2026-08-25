---
slug: 2026-08-25-site-journey-walker
type: site
date: 2026-08-25
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-08-25**
## Full review
## 1. Executive Summary

I picked up my phone, went to skechers.com, and tried to do the normal thing: log in, browse men's shoes, find something with good cushioning, throw it in the cart, and check what I've got. The browsing part is genuinely pleasant — the site knows I want "Hands Free Slip-Ins" and "Walking Shoes" and puts them right in front of me. But two things broke the trip: my login attempt did nothing at all (no form, no confirmation, nothing — I'm still an anonymous visitor the whole way through), and when I tried to look at my cart after adding a shoe, I got a **blank white screen**. No shoe, no total, no "your item was added." That's the kind of thing that makes a fella my age close the app and just drive to the DSW.

## 2. Business Impact Score (1-10)

**2/10** — unchanged from yesterday.

The comfort-focused category navigation is a real improvement in spirit, but it doesn't matter if the purchase path is broken. A cart that renders blank and a login that silently no-ops are both trip-ending bugs, not nitpicks. I can't buy shoes if I can't see what's in my basket.

## 3. What's Working

- The mobile hamburger menu for "Men" is clean, with big, well-labeled tappable rows (Shoes, Shop by Activity, Comfort Technologies, Collections). Easy to read without squinting.
- The Men's Shoes category page leads with exactly what I care about: "Hands Free Slip-Ins," "Walking Shoes," "Athletic Sneakers" — that's speaking my language, not some marketing buzzword.
- The product page for the Slip-ins Aero Burst shows star rating (141 reviews), a clear price, and a "Hands Free Slip-ins" badge — good trust signals.
- Search for "comfort shoes" returned genuinely relevant results (GO WALK Arch Fit 2.0, Relaxed Fit New Cool) with member discount callouts visible right on the results tile.
- Text size and button size throughout are large enough for my thumbs and my eyes — no complaints on basic readability.

## 4. What's Weak

- **Login did nothing.** I tapped Log In and the screen just... stayed the homepage. No modal, no form, no account menu, no sign I was recognized. If this site can't get me logged in on a phone, it's not going to get my email or my loyalty points synced.
- **Cart page is blank.** After hitting "Add to Cart," navigating to /cart/ shows a completely empty white page — no product, no price, no checkout button, nothing. The cart icon badge also stayed at "0" the entire journey, meaning the add-to-cart may never have registered in the first place (the size-selection warning was still showing right before the click).
- $165 for the Aero Burst with "Excluded from promotions" is a rough combo for someone comparison-shopping against Hoka/Brooks/New Balance sale racks — no visible "why this price" or comfort-tech explainer to justify it.
- No comparison-across-brands or price-vs-quality content anywhere in the journey — I'm left to do that math myself.
- Nothing in the flow ever felt personalized — not the homepage, not the login attempt, not the cart. It's the same anonymous experience start to finish.

## 5. Recommendations

1. **Fix the cart page rendering** — this is the single highest-priority bug. A shopper who can't confirm their cart contents will not complete a purchase.
2. **Fix or gate the Log In control** — either show a real login form/modal or don't present it as tappable. A dead button erodes trust fast.
3. **Enforce size selection before allowing Add to Cart to proceed silently** — surface a clear success state (toast, cart count update, mini-cart) so the shopper knows the action worked.
4. Add a short "why this costs more" comfort-tech callout on premium product pages (cushioning/arch support specifics) to help with the price-vs-quality math Boomer shoppers do instinctively.
5. Once login works, show basic personalization (recently viewed, size remembered) so returning shoppers feel recognized.

## 6. Bottom Line

The site knows how to talk to me when I'm just looking — the category structure and search are honestly good. But the two moments that matter most for actually buying something, logging in and checking my cart, both failed outright. Until those are fixed, none of the good navigation work translates into a sale. Score holds at 2/10.

## 7. Evidence

**Step 1 — Homepage:** Clean top nav with search, account, and cart icons; a promo ribbon (20% off / 25% off apparel) and a big "Aero Burst" hero banner. Easy to read on the phone, no zooming needed. Cart badge shows "0." Not personalized — generic promotional homepage.

**Step 2 — Dismiss Popups:** No popup modal actually appeared to dismiss; the page is identical to Step 1 except the promo ribbon text rotated to "The Back to School Guide: Shop Now." No friction here since there was nothing blocking the view, but it suggests the "dismiss popup" action found nothing to act on.

**Step 3 — Log In:** Screen is pixel-identical to the homepage — no login form, no modal, no account indicator, cart still "0." This is the biggest red flag of the whole run: tapping Log In produced zero visible response. As someone who trusts a brand more when things match what he expects, this silent failure would make me question whether the tap even registered.

**Step 4 — Men category:** A slide-in menu opened cleanly from the hamburger icon, showing "MEN" with Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, and Clothing & Accessories as large, easily tappable rows with chevrons. Genuinely easy to navigate one-handed.

**Step 5 — Men > Shoes:** Landed on "Men's Shoes" with three big photo tiles up top: Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers — exactly the categories I'd look for. A "Free pickup" toggle, Filter/Sort controls, and "750 results" below. Well organized, comfort-forward framing right where I'd expect it.

**Step 6 — Product detail:** Skechers Slip-ins Aero Burst, $165.00, 4-something stars from 141 reviews, "Hands Free Slip-ins" badge, clean product photo. A small "Excluded from promotions" warning sits right under the price — mildly deflating right after seeing 20-25% off banners everywhere else on the site.

**Step 7 — Add to Cart:** Size grid (7.0–14.0) is large and thumb-friendly, with a "Please select a size" warning still showing, a QTY dropdown, shipping/pickup info, and a big blue "Add to Cart" button. Well laid out, but the persistent size warning suggests the add-to-cart click may have fired before a size was actually chosen.

**Step 8 — View Cart:** Completely blank white page. No product, no price, no summary, no error message — just empty space. This is a hard stop for a purchase; there's no way to confirm the order or proceed to checkout from here.

**Step 9 — Search "comfort shoes":** Returned 1,524 results with relevant, well-photographed products up top — Relaxed Fit New Cool ($65) and GO WALK Arch Fit 2.0 ($85, with a "Members Get 20% Off" callout and wide-width option flagged). Cart badge still reads "0," confirming the earlier add-to-cart never actually landed. Search itself works well and feels relevant to what I typed.

---

## Technical Audit

## Technical Summary
Mobile audit of skechers.com covering 8 steps in the shopping journey (Homepage → Login → Men category → Men>Shoes → PDP → Add to Cart → View Cart → Search). The page relies on a Salesforce Commerce Cloud (Demandware) frontend with 30+ synchronously/asynchronously injected third-party scripts (GTM ×2, Monetate, Quantum Metric, TikTok, Snapchat, Pinterest, Reddit, Facebook, Bing, Impact, CreativeCDN, PulseInsights, Bloomreach, WebFont Loader, Kasada bot-protection). Two systemic issues stand out: repeated 429 throttling on the Kasada bot-detection endpoint, and a broken document `<head>` on the View Cart step (missing `<title>`/`lang`). Accessibility landmark structure is degraded across multiple pages, likely from third-party widget injection.

## Accessibility
18 axe violations detected, several critical/serious:
- **[critical] button-name** (Homepage) — one or more buttons have no accessible name; screen reader users cannot determine their function.
- **[critical] aria-required-parent** (Homepage) — an ARIA role is used outside its required parent context, likely from a third-party widget (survey/chat overlay) injecting markup without correct roles.
- **[serious] link-name** (Homepage) — links with no discernible text (likely icon-only links, e.g. social/cart icons, missing `aria-label`).
- **[serious] document-title / html-has-lang** (View Cart) — the cart page (or an injected overlay/iframe) is missing a `<title>` and `lang` attribute entirely; this is unusual for a full document load and suggests the cart is rendered into a document that skipped standard `<head>` boilerplate.
- **[moderate] landmark-* (duplicate-main, landmark-unique, landmark-main-is-top-level, landmark-complementary-is-top-level, region)** — repeated across Homepage and Search: multiple `<main>` / nested landmark elements, consistent with third-party scripts (PulseInsights, Monetate personalization) injecting their own landmark-roled containers into the DOM rather than plain `<div>`s.
- **[moderate] heading-order** (Homepage) — heading levels skip/are out of sequence.
- **[moderate] page-has-heading-one / landmark-one-main** (View Cart) — cart page has no `<h1>` and no `<main>` landmark, consistent with the missing-title/lang finding — the cart step may be rendering a degraded/partial document.
- **[minor] aria-allowed-role** (Homepage, Search) — role attribute used on an element type that doesn't permit it.

## SEO
- View Cart step returned a document with no `<title>` and no `lang` attribute — both are baseline requirements for indexable pages and for correct language-targeting in search results. If this is representative of the live `/cart` route (not just a bot-detection fallback page), it should be fixed.
- No `<h1>` on View Cart — pages without a top-level heading lose on-page relevance signals, though cart pages are typically noindexed regardless; confirm robots directives are intentional here.
- Homepage/Login/Men-category HTML samples show `lang="en"` set correctly and heavy async script loading with `dns-prefetch` hints in place — no other SEO defects observed in the head markup captured.

## Performance
- TTFB is inconsistent across the journey: Homepage (441ms), Login (409ms), and Men category (409ms) are markedly slower than Men>Shoes (35ms), PDP (24ms), Add to Cart (24ms), and Search (28ms). The fast steps are consistent with client-side/SPA-style navigation after initial load (no fresh server round-trip), while the first three steps hit full SSR/document requests — expected for a Demandware storefront, not itself a defect.
- View Cart TTFB (128ms) is higher than the other client-navigated steps, possibly due to server-side cart-state validation.
- **LCP and CLS were not captured for any step** (all reported as `?`) — this is a measurement gap, not a confirmed absence of issues. Given the number of async third-party scripts and web-font loading (`wf-mulish-*` classes toggled post-load via WebFont Loader), layout shift from late-swapped fonts is a plausible risk that should be re-measured.
- Homepage alone loads 30+ third-party script tags (ads/analytics/personalization), several `async`/`vice-managed-src` — this expands the critical script-execution surface even though it doesn't block TTFB.

## Mobile Optimization
- `<html>` carries a `--vh: 6.64px` inline custom property, indicating a JS-based viewport-height fix (common workaround for mobile browser chrome resizing) — functioning as expected, no defect evident from the sample.
- Cannot assess responsive layout/tap-target sizing or CLS from the data provided (LCP/CLS not captured — see Performance).
- No mobile-specific meta/viewport issues observed in the truncated head samples, but full `<head>` was not captured for verification of `<meta name="viewport">`.

## Console & Network Errors
- **429 (Too Many Requests)** — repeated (5+ occurrences) on `www.skechers.com/.../fp?x-kpsdk-v=...`, a Kasada bot-detection fingerprinting endpoint, and once on `/cart/`. This indicates the session was rate-limited/throttled by bot-protection during the automated walkthrough. This may be an artifact of automated testing rather than a real-user-facing bug, but if genuine users on shared IPs/proxies see the same throttling, it would block cart functionality.
- **403 (Forbidden)** — 3 occurrences on `survey.pulseinsights.com/serve` (Men category, Search step) — the PulseInsights survey widget is being blocked/rejected by its own backend for this session, wasting a network request without functional impact (non-critical third-party feature).
- **"Unsupported Summarizer API languages"** — repeated warning from a script invoking the experimental browser Summarizer/built-in-AI API with an unsupported language parameter, causing the call to abort. Not user-impacting, but indicates a script (likely an AI-powered on-page feature or third-party tag) has an unhandled language-config bug.
- Total: 17 console errors / 9 distinct network failures logged across the journey, concentrated on Men category, Search, and Cart steps.

## Recommendations
1. **Fix View Cart document head** — add `<title>` and `lang="en"` and confirm a top-level `<h1>` and `<main>` landmark render on `/cart`; verify this isn't a bot-protection fallback/challenge page being served instead of the real cart.
2. **Add accessible names** to icon-only buttons/links flagged by `button-name` and `link-name` on the homepage (e.g. `aria-label` on cart/search/nav icons).
3. **Audit third-party widget markup** (PulseInsights, Monetate) for landmark/ARIA role misuse — either request vendor fixes or wrap injected containers to prevent duplicate `<main>`/landmark conflicts.
4. **Re-run with LCP/CLS instrumentation enabled** — current data has no Web Vitals beyond TTFB; this is a blind spot for a mobile audit and should be closed before drawing performance conclusions.
5. **Investigate Kasada 429 throttling** — confirm whether legitimate mobile users (not just automated tooling) can trigger this, especially on `/cart/`, since a false-positive block there would suppress checkout.
6. **Ignore/suppress the Summarizer API warning** at its source if it originates from first-party code; if third-party, report to the vendor — it's non-blocking but noisy in console logs.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

