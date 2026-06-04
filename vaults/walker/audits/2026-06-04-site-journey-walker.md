---
slug: 2026-06-04-site-journey-walker
type: site
date: 2026-06-04
persona: walker
score: "4/10"
previous_score: "4/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-4, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 4/10 (prev 4/10) · **Type:** Site journey · **2026-06-04**
## Full review
---

## 1. Executive Summary

Skechers mobile shows real bones — the deal banner is impossible to miss, the Men's menu is clean and big-fingered friendly, and the Slip-ins product page tells me exactly what I need. But this run has a hard blocker that stops me cold: **the cart page loaded blank white**. Nothing. No items, no total, no checkout button. I would have closed the app and driven to DSW. The login step also never surfaced a form, and the comfort-shoes search served me women's results first. Same score as yesterday. The ceiling is there; the floor keeps giving out.

---

## 2. Business Impact Score: **4 / 10**

*(No change from yesterday's 4/10. Blank cart is a critical regression that cancels out any navigation wins.)*

---

## 3. What's Working

- **BOGO deal is front and center.** "Buy One, Get One 50% OFF" in big white type on that blue hero — I saw it the second the page loaded. No hunting. The sub-line "Discount is automatically applied at cart" removes the coupon-code anxiety I always have.
- **Men's menu navigation is genuinely good.** Full-screen panel, large bold text, generous tap targets. "Hands Free Slip-ins," "Wide Fit," "Extra Wide Fit" right there as quick links at the bottom — whoever put those in understood that I'm not browsing for fun, I'm looking for specific things.
- **Product detail page communicates value fast.** Name, price ($130), BOGO reminder, 4-star rating, 14 reviews, and that Slip-ins badge — all above the fold. I don't have to scroll to know what I'm looking at.
- **Size grid is large and tappable.** Each size box is roomy enough that I can hit 10.0 without accidentally landing on 10.5. That matters when you've got older fingers.
- **293 results in the Hands Free Slip-ins category.** Reassuring volume — I'm not being funneled into one shoe.

---

## 4. What's Weak

- **Cart page is completely blank.** Step 8 is a white rectangle. No item, no price, no checkout. This is a total conversion killer. If this happened to me on my phone, I'm done — I don't troubleshoot, I leave.
- **Login never happened.** Steps 1, 2, and 3 all look identical — the homepage. No login drawer, no form, no confirmation. The "Member Month! Earn 2X Points" banner keeps taunting me with a Login link but I never actually got in. The logged-in experience is invisible.
- **Size not selected before Add to Cart.** The screenshot shows the red "Please select a size" warning and a cart still at 0. Technically correct behavior, but it means the add-to-cart step was never completed — the journey stalls here.
- **Search for "comfort shoes" returns women's shoes first.** Both visible results are tagged Women's. I'm a 62-year-old man searching for comfort shoes. That's a straight-up gender mismatch on the first screen. I'd assume the search is broken and leave.
- **Still not logged in on the product page.** The Member Month banner still says "Login | details" on Step 6. Even if login was attempted in Step 3, it didn't stick — so there's zero personalization anywhere downstream.
- **Horizontal category nav cuts off.** "Slip-ins, Sandals, Arch Fit, BOBs, C..." — that last "C" could be Casual, Clearance, anything. I can't tell without swiping, and I might not know to swipe.

---

## 5. Recommendations

1. **Fix the cart page immediately.** This is P0. An empty white cart on mobile kills revenue on every platform. Instrument it with real-user monitoring so you know when it happens and to which users.
2. **Fix the login flow.** The login step should surface a form or drawer and confirm success with a name/greeting. "Hi Walker" in the header is worth more than any banner copy.
3. **Gender-filter search results by account or browser session.** If you know I'm a man (or even just that I navigated through Men > Shoes), surfacing women's shoes first in a comfort-shoes search is a fast path to a bounce.
4. **Don't let the size-selection step be the last captured moment before cart.** The journey should confirm the item was actually added. A sticky "1 item added — View Cart" toast would bridge that gap.
5. **Scroll-hint the horizontal nav.** A faint gradient fade-out on the right edge signals "there's more here, swipe" — without it, I might never see "Clearance" or whatever's hiding behind that cut-off C.

---

## 6. Bottom Line

The bones are solid. Skechers knows their Boomer shopper well enough to put Hands Free Slip-ins, Wide Fit, and arch support all one tap from the Men's menu — that's not an accident. But a blank cart page is a sale that never happened, and a search that sends a man to women's shoes first is a trust break. Until those two things are fixed, I'm putting this shoe back on the shelf and checking what New Balance has going on. **4/10 — no change.**

---

## 7. Evidence

**Step 1 — Homepage**
Blue hero banner: "SPRING INTO SUMMER / Buy One, Get One 50% OFF." Deal was the first thing I read. Two big buttons — SHOP WOMEN, SHOP MEN — made the entry point obvious. Member Month 2X Points banner is visible but the Login link is tiny relative to the hero. Text is readable without zooming. No personalization — looks the same whether you're logged in or not.

**Step 2 — Dismiss Popups**
No overlay or modal appeared. The marquee banner simply rotated from "Member Month! Earn 2X Points" to "Spring into Summer Sale! 25% OFF Apparel." Technically that's a banner swap, not a popup dismissal. No friction either — but no popup actually interrupted me.

**Step 3 — Log In**
Screenshot is identical to the homepage. No login form loaded. No drawer appeared. The BOGO banner and hero are unchanged, cart still shows 0. Login was not captured or did not complete. The site still treats me as a guest for every subsequent step.

**Step 4 — Men Category Menu**
Full-screen overlay with clean stacked rows: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories — each with a right-arrow chevron. Below that: Hands Free Slip-ins, Wide Fit, Extra Wide Fit as direct jump links. Large type, generous row height, Back and X targets at top corners. This is the best screen of the entire journey — intuitive, scannable, and thumb-friendly.

**Step 5 — Men > Shoes (Hands Free Slip-ins)**
Breadcrumb "Men > Shoes" confirms I'm in the right place. "Hands Free Slip-ins" as the page title — exactly what I wanted. Filter pills for Wide Fit, Extra Wide Fit, Medium Fit are useful but the third pill is cut off — I'd have to swipe to see my options. 293 results is a good sign. Product grid starts loading at the bottom. Still showing "Login | details" — not logged in.

**Step 6 — Product Detail**
"Skechers Slip-ins: Max Cushioning Arch Fit 2.0 - Avner" — the name tells me everything: slip-in, max cushioning, arch fit. $130.00 is clearly priced. "Buy 1, Get 1 50% OFF! Applied at Cart" reminder is present and in red/pink — catches the eye. 4-star / 14 reviews — credible but thin. The Hands-Free Slip-Ins badge logo reinforces the product feature. Navy blue shoe image looks clean. Left/right arrows for image gallery suggest I can see more angles but I'd have to know to tap them. Still not logged in.

**Step 7 — Add to Cart (Size Selection)**
Size grid 7.0–14.0 with generously sized boxes — easy to tap. "Please select a size" warning in red is clear. QTY dropdown defaults to 1. "Ship it" and "Check in-store availability" options present. The big blue ADD TO CART button is sticky at the bottom — well placed. But the cart badge still shows 0 because no size was selected before the screenshot. The journey stalled at this step; no add was completed.

**Step 8 — Cart**
Complete blank white screen. No header, no items, no total, no checkout button, no error message. This is a broken page load. This is the single most damaging thing in this entire journey. A customer who lands here has no path forward except to abandon.

**Step 9 — Search "comfort shoes"**
1,467 results — massive. But the first two visible cards are both labeled Women's: "Arch Fit Arcade - See Ya There" and "Contour Foam - Cozy Fit." Both $85–$88, both with BOGO deal noted. Visually fine, but entirely the wrong gender for me. There is no active filter showing that I requested men's. The search engine is not using any session or account context to prioritize men's results. I would have assumed my search broke and left.

---

## Technical Audit

## Technical Summary

Skechers.com runs on Salesforce Commerce Cloud (Demandware) with GTM-orchestrated third-party tag loading. The mobile journey reveals three compounding issues: rate-limiting on a bot-detection fingerprinting endpoint that corrupts cart load, a broken View Cart page missing foundational HTML (`<title>`, `lang`), and an unconfigured CORS header on a third-party styling CDN. TTFB is excellent site-wide (28–31ms) except at View Cart (132ms), which coincides with the 429 storm on `/cart/`.

---

## Accessibility

13 axe violations across 3 pages.

**Homepage (6 violations, all moderate)**
- `heading-order`: Heading hierarchy is non-sequential — likely h3/h4 used before h2 in a component.
- `landmark-complementary-is-top-level`: `<aside>` is nested inside another landmark; must be a direct child of `<body>` or a top-level sectioning element.
- `landmark-main-is-top-level` + `landmark-no-duplicate-main`: Multiple `<main>` elements exist, at least one nested. Only one `<main>` allowed per document and it must be top-level.
- `landmark-unique`: Repeated landmark roles without distinguishing `aria-label` or `aria-labelledby`.
- `region`: Content exists outside any landmark region — likely injected third-party widgets (TrustArc, Monetate, etc.).

**View Cart (4 violations, 2 serious)**
- `document-title` [serious]: `<title>` is empty or absent. This page is likely a JS-rendered shell where the title is never hydrated — possibly a consequence of the 429 blocking the cart API.
- `html-has-lang` [serious]: `lang` attribute missing on `<html>`. The Homepage has `lang="en"` correctly; this page's HTML is almost certainly served from a different template or fallback path triggered by the rate-limit.
- `landmark-one-main`: No `<main>` landmark present — same root cause as above (degraded/empty shell page).
- `page-has-heading-one`: No `<h1>` — confirms the cart page is rendering in a broken state.

**Search (3 violations, all moderate)**
- Same `landmark-complementary-is-top-level`, `landmark-unique`, and `region` issues as Homepage — structural, not content-dependent.

---

## SEO

- **View Cart missing `<title>`**: Googlebot will see a titleless page if it ever crawls the cart URL. While cart pages are typically `noindex`, a misconfigured or crawlable variant would be a direct ranking signal loss.
- **Missing `lang` on View Cart**: Affects hreflang resolution if international variants exist.
- **Duplicate `<main>` on Homepage**: Can confuse crawlers trying to identify the primary content region.
- No canonical or structured data issues are visible in the truncated HTML, but the Monetate/GTM injection pattern means content may differ between server-rendered and client-rendered states.

---

## Performance

| Step | TTFB | Assessment |
|---|---|---|
| Homepage | 28ms | Excellent — CDN cache hit |
| Log In | 28ms | Excellent |
| Men category | 28ms | Excellent |
| Men > Shoes | 31ms | Excellent |
| Product detail | 31ms | Excellent |
| Add to Cart | 31ms | Excellent |
| **View Cart** | **132ms** | Degraded — 4.5× spike |
| Search | 28ms | Excellent |

LCP and CLS are not reported, which is the most critical gap: TTFB being fast is not a proxy for LCP. Given the volume of render-blocking third-party scripts in `<head>` (15+ async scripts across TikTok, Pinterest, Reddit, Bing, Yahoo × 2, Monetate × 3, QuantumMetric, Impact, Bloomreach, Snapchat, Taboola, Stape, Facebook), LCP is at significant risk on mobile.

**Script load concerns:**
- `wf-mulish-*` WebFont classes on `<html>` indicate WebFontLoader is used — this is a known LCP blocker if fonts aren't preloaded separately.
- `monetate.net` appears 3 times (dns-prefetch, two distinct script endpoints). Monetate's personalization scripts are synchronous-adjacent and frequently delay First Contentful Paint.
- `quantum-skechers.js` (QuantumMetric) is a large session replay bundle with no size constraint.
- `cdnjs.cloudflare.com/libs/webfont/1.6.28/webfontloader.js` — WebFontLoader 1.6.28 is from 2017; this version does not support `font-display`.

---

## Mobile Optimization

- **`--vh` CSS custom property**: `style="--vh: 6.640000000000001px"` is set inline on `<html>` — this is a JavaScript-calculated viewport height shim for iOS Safari's dynamic toolbar behavior. Floating point precision (`6.640000000000001`) suggests the calculation is done via `window.innerHeight / 100` without rounding. Not a bug but indicates reliance on a JS polyfill rather than the native `dvh` unit (supported in iOS 16+).
- No `<meta name="viewport">` tag is visible in the truncated source, but its absence in the snippet is likely truncation, not omission.
- The TrustArc consent styles are injected via `<style>` blocks at the top of `<head>` before any resource hints — this is render-blocking on first paint.

---

## Console & Network Errors

**Rate limiting (429) — High severity**

Six of seven network errors are 429s to the same endpoint:
```
/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp?x-kpsdk-v=j-1.2.443
```
This is **Kasada** bot-protection fingerprinting (`kpsdk` = Kasada SDK). The endpoint is being rate-limited against the automated browser — expected behavior when Playwright/headless Chrome is used for the audit. However, one `429 https://www.skechers.com/cart/` is the cart page itself being blocked, which directly explains the View Cart TTFB spike (132ms) and the broken HTML shell (missing title/lang/main) — the server is returning a bot-challenge interstitial rather than the real cart page.

**CORS failure — Medium severity**
```
Access to CSS stylesheet at 'https://web-assets.stylitics.com/style.css?base=hotspots&theme=skechers&version=d3dca01827'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header
```
Stylitics is a shoppable styling widget. Their CDN is not returning `Access-Control-Allow-Origin: https://www.skechers.com` for this CSS fetch. This means the Stylitics hotspot/outfit feature silently fails to render on affected sessions. The version hash (`d3dca01827`) suggests a pinned/stale asset version — likely a Stylitics-side config regression rather than a Skechers server issue, but Skechers owns the vendor relationship.

**400 on DoubleClick — Low severity**
```
400 https://ad.doubleclick.net/ccm/s/collect?auid=...
```
Malformed or expired conversion measurement request. GTM tag misconfiguration — likely a Floodlight tag firing with a stale `auid` parameter. Ad measurement loss but no user-facing impact.

---

## Recommendations

1. **Cart page bot-challenge fallback**: The Kasada 429 on `/cart/` is returning a degraded HTML shell instead of a graceful error page. The fallback template is missing `<title>`, `lang`, `<main>`, and `<h1>`. Fix the error template, not the rate limit — real users hitting transient bot-challenge failures should get a valid HTML document with a retry message.

2. **Stylitics CORS**: File a ticket with Stylitics to add `Access-Control-Allow-Origin: https://www.skechers.com` to their CSS CDN responses, or self-host the stylesheet through Skechers' own CDN to eliminate the cross-origin dependency entirely.

3. **Duplicate `<main>` / nested landmarks**: Audit the homepage component tree for any component that wraps content in a second `<main>`. Likely a modal or drawer component rendering inside the page `<main>` rather than as a sibling. Fix at the component level, not with ARIA overrides.

4. **WebFontLoader → `font-display: swap`**: Replace `webfontloader.js` with native `@font-face` declarations using `font-display: swap` and `<link rel="preload">` for the Mulish weights actually used above the fold. This eliminates a render-blocking dependency and a 2017-era library.

5. **Third-party script audit**: 15+ async scripts in `<head>` are competing for network and main-thread bandwidth. Yahoo pixel fires twice (`vice-managed-src` appears twice for `s.yimg.com/wi/ytc.js`). Consolidate via GTM and defer all non-critical analytics until after LCP.

6. **Measure LCP and CLS**: The provided metrics are TTFB-only. Run Lighthouse or CrUX field data to get actual LCP/CLS values — these are the metrics that correlate with conversion and Google ranking, and the script load pattern suggests LCP is likely 4s+ on mobile 4G.
## Recent history

- [[2026-06-03-site-journey-walker]] — 4/10 (2026-06-03)
- [[2026-06-02-site-journey-walker]] — 4/10 (2026-06-02)
- [[2026-06-01-site-journey-walker]] — 4/10 (2026-06-01)

