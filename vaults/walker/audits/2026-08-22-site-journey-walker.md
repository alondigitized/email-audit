---
slug: 2026-08-22-site-journey-walker
type: site
date: 2026-08-22
persona: walker
score: "1/10"
previous_score: "1/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-1, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 1/10 (prev 1/10) · **Type:** Site journey · **2026-08-22**
## Full review
## 1. Executive Summary

I made it all the way from the homepage to the shoe I wanted, a nice pair of Slip-ins with the cushioned sole — but then the cart page came up **completely blank**. Just white. No shoe, no total, no checkout button, nothing. That's a dead end for me. On top of that, tapping "Log In" did absolutely nothing — no login screen ever appeared. Two of the most basic things a shopping site needs to do (let me sign in, let me see my cart) simply didn't work. The parts that did work — browsing Men's shoes and searching "comfort shoes" — were actually pretty good: clean, readable, relevant results.

## 2. Business Impact Score (1-10)

**1/10** — unchanged from yesterday. A blank cart page is a full stop for any real purchase. I don't care how good the product page looks if I can't see what's in my cart before I pay for it.

## 3. What's Working

- **Product detail page** is clean and easy to read on my phone — big price, star rating with review count (1,741 reviews, that tells me people trust this shoe), and a "Members Get 20% Off" callout that caught my eye.
- **Size selection** is a nice big grid of tappable boxes — no tiny dropdown menu to squint at. Good for my thumbs.
- **Search results** for "comfort shoes" were genuinely relevant — Go Walk Arch Fit, Max Cushioning Endeavour — exactly the kind of thing I'm after, with prices and the member discount shown right on the tile.
- **Men > Shoes menu** was straightforward — "Shoes," "Shop by Activity," "Comfort Technologies" — I could find my way without hunting around.
- The 20% off banner stays pinned at the top the whole way through, so I never forgot about that code.

## 4. What's Weak

- **Log In did nothing.** I tapped it expecting a sign-in screen and got the same homepage back. If I can't log in, I can't see my order history, saved sizes, or any of that loyalty stuff that's supposed to make me feel like a regular customer.
- **Cart page is blank.** This is the big one. After adding a shoe, tapping the cart icon should show me my shoe, the price, shipping options. Instead: a blank white screen. I'd assume the site was broken and probably close the tab.
- **Add to Cart initially failed with "Please select a size"** — fair enough, that's my fault for not picking one first, but then even after that, cart count in the header stayed at "0" the whole time. I never got confirmation anything was actually in my bag.
- Nothing on the site tried to compare me against Hoka, Brooks, or New Balance, or make any price-vs-quality argument for why Skechers is worth it over those. I do that math myself before I buy, and the site didn't help.

## 5. Recommendations

1. **Fix the cart page rendering bug immediately** — this is a checkout-blocking issue, top priority above anything cosmetic.
2. **Fix or hook up the Log In button** — right now it's a dead tap, which looks broken and erodes trust fast.
3. Add a visible **cart confirmation** (toast, badge update, mini-cart) the moment "Add to Cart" succeeds, so I know it worked.
4. On the product page, surface **arch support / cushioning callouts** more clearly (I see "CONTOUR" and "Hands Free Slip-ins" badges, but a plain-English "all-day comfort, arch support" line would help me decide faster without reading between the lines.
5. Consider a simple **comfort/price comparison module** near checkout — even just "compared to leading comfort brands" — since that's exactly the math I'm doing in my head anyway.

## 6. Bottom Line

Browsing and searching feel like a real, grown-up shopping site now — I'll give credit for that. But a blank cart page and a login button that does nothing are the kind of bugs that make me put the phone down and just drive to DSW instead. Until checkout actually works, none of the nice product pages matter.

## 7. Evidence

**Step 1 — Homepage:** Clean layout, big Skechers logo, clear "20% OFF" banner pinned at top with a visible code. Lifestyle photos of a man and woman walking are appealing and not cluttered. Text is large enough to read without zooming. Felt like a normal retail homepage, no personalization visible yet since I wasn't logged in.

**Step 2 — Dismiss Popups:** No popup ever appeared to dismiss — screen identical to Step 1. Either there was no popup, or it never rendered. Not a problem in itself, but slightly odd that this step is a no-op.

**Step 3 — Log In:** Tapped the login icon and got... the exact same homepage. No sign-in form, no modal, nothing changed. This is broken — a 62-year-old like me would assume I did something wrong or the site glitched, and I'd give up trying to log in. No personalization possible if I can't even reach the login screen.

**Step 4 — Men category:** A slide-out menu appeared with "MEN" at top and clear sections: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories. Arrows on the right made it obvious these were tappable. Text was large and well-spaced — easy to tap without fat-fingering the wrong line. This part felt intuitive.

**Step 5 — Men > Shoes:** Landed on "Men's Shoes" with three big photo categories up top — Hands Free Slip-ins, Walking Shoes, Athletic Sneakers — exactly the categories I care about. A "Free pickup" toggle and Filter/Sort bar sit below, "746 results" clearly labeled. Everything was legible without zooming. This is one of the better screens in the journey.

**Step 6 — Product detail:** Landed on the Skechers Slip-ins: Contour Foam - Cozy Fit, $88.00, 1,741 reviews with a 4.5-star-ish rating visible, "Members Get 20% Off" callout, and a big clean product photo with left/right arrows to swipe through images. Easy to read, no pinch-zoom needed. Felt trustworthy thanks to the review count.

**Step 7 — Add to Cart:** Size grid shown clearly (6.5 through 14.0), good big tap targets. I hadn't picked a size, so a red "Please select a size" warning appeared when I hit Add to Cart — reasonable behavior, not a bug by itself. But the cart badge in the header stayed at "0" and I got no confirmation banner, so it's unclear whether anything ever actually got added.

**Step 8 — View Cart:** Completely blank white screen. No header, no product, no total, nothing rendered at all. This is a hard stop — if this happened to me shopping for real, I'd assume the site crashed and I'd leave.

**Step 9 — Search "comfort shoes":** Search worked well — "1,512 results" for the query, with the top two results (Go Walk Arch Fit - Cassy, Max Cushioning Endeavour - Ardena) being spot-on for what I typed. Prices, strike-through original price with the member discount price, and color swatches were all shown clearly on the results tile. This was the smoothest, most trustworthy part of the whole visit.

---

## Technical Audit

## Technical Summary

The mobile journey traverses SFCC-hosted pages (`demandware.static` asset path visible on the Men category HTML) wrapped in a heavy third-party tag stack (GTM, dual `gtag/destination` endpoints, Monetate, TikTok, Pinterest, Quantum Metric, Impact, Bing, Yahoo, PulseInsights, Tune/go2sdk, WebFontLoader). The most severe finding is a Kasada bot-mitigation fingerprint endpoint (`/…/fp?x-kpsdk-v=…`) returning `429` four separate times, plus the `/cart/` route itself returning `429` — indicating the anti-bot layer is throttling/blocking legitimate traffic on the cart step. A second infrastructure fault is a CORS-blocked Stylitics stylesheet, leaving that widget's styling entirely unloaded.

## Accessibility

18 axe violations across 3 pages (Homepage, View Cart, Search):

- **Critical**: `button-name` (undiscernible buttons) and `aria-required-parent` (ARIA role misuse) — Homepage.
- **Serious**: `link-name` (Homepage) — links with no accessible text; `document-title` and `html-has-lang` — **View Cart** ships with no `<title>` and no `lang` attribute, unlike every other step (all others render `<html lang="en" …>`).
- **Moderate**: Duplicate/non-top-level landmarks (`landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `landmark-complementary-is-top-level` — recurring on both Homepage and Search), `region` (unlandmarked content — Homepage, Search), `heading-order` (Homepage), `landmark-one-main`/`page-has-heading-one` (View Cart missing a main landmark and an H1 entirely).
- **Minor**: `aria-allowed-role` (Homepage, Search).

The View Cart page is the weakest: it fails baseline document-structure checks (title, lang, main, H1) that the rest of the funnel passes, suggesting cart renders through a different template/component than the rest of the site.

## SEO

- View Cart's missing `<title>` and missing `lang` attribute are direct on-page SEO defects (crawlers/screen readers can't determine page identity or language for that template).
- Duplicate/non-unique landmark structure and broken heading order (Homepage, Search) degrade semantic HTML that search engines use for content understanding.
- No canonical, meta-description, or structured-data markup is visible in the truncated `<head>` samples provided — indeterminate from available evidence, flag for follow-up with full `<head>` capture.

## Performance

- TTFB is healthy on server-rendered steps (Homepage 388ms, Log In 384ms, Men category 384ms) but drops to 70ms/29ms/29ms/25ms for Men>Shoes, PDP, Add to Cart, and Search — consistent with client-side/SPA-style transitions or cached responses rather than fresh server renders; confirm which of these are real navigations vs. XHR-driven partial updates before treating the low TTFBs as a genuine improvement.
- **LCP and CLS were not captured for any of the 8 steps** — this is a measurement gap, not a "no issues found" result. Given the scripting weight below, these should be re-run before drawing performance conclusions.
- Homepage/Log In HTML alone loads 15+ third-party `<script>` tags synchronously-async on first paint (TikTok, Pinterest, Quantum Metric, Impact, CreativeCDN, Bourne/brsrvr, two separate `googletagmanager.com/gtag/destination` calls for AW- and DC- IDs, `bat.bing.com`, Yahoo ytc.js ×2, Monetate custom.js + entry.js, PulseInsights, WebFontLoader, GTM container, Tune/go2sdk). This is a significant, mobile-relevant payload/contention risk, and duplicate GTM destination requests (AW-1066305778, DC-9630990) alongside `gtag/js` and `gtm.js` indicate redundant tag-manager loading that could be consolidated server-side via GTM's own tag templates.
- The Kasada fingerprint endpoint was hit and 429'd four times within the flow, meaning the client retried a failing bot-check call repeatedly — wasted requests and potential added latency on cart-adjacent steps.

## Mobile Optimization

- All captured pages set `<html lang="en">` except View Cart (already flagged above) — a mobile screen-reader/voice-assistant issue specifically on that page.
- Inline `style="--vh: …px"` on `<html>` indicates a JS-computed viewport-height custom property, a standard mitigation for mobile browser chrome resizing — implemented correctly.
- No `<meta name="viewport">` tag is visible in the truncated `<head>` samples; cannot confirm compliance from the evidence provided — recommend verifying directly.
- The third-party script volume noted above disproportionately affects mobile due to bandwidth/CPU constraints, compounding any LCP impact once that metric is actually measured.

## Console & Network Errors

- **429 (rate limited) ×5**: 4 hits on the Kasada bot-detection fingerprint endpoint, 1 on `/cart/` itself — the cart page load was rate-limited, a functional/availability risk, not just cosmetic.
- **CORS failure**: `web-assets.stylitics.com/style.css` blocked by CORS policy from `www.skechers.com` origin — this stylesheet fails to load on every affected page load, likely the outfit-recommendation widget rendering unstyled or broken.
- **net::ERR_FAILED ×1**: consistent with the CORS-blocked stylesheet request above.
- **"Unsupported Summarizer API languages" ×4**: a third-party script is invoking Chrome's on-device Summarizer API (`window.ai`/Prompt API family) with an unsupported language parameter, causing repeated aborted calls — dead code path executing on every page, wasted CPU cycles for no functional benefit.

## Recommendations

1. Fix the `/cart/` 429 and Kasada fingerprint 429s — investigate whether bot-mitigation thresholds are misconfigured and throttling real mobile sessions, especially around cart.
2. Rebuild the View Cart template to include `<title>`, `lang`, a `<main>` landmark, and an H1 — it's the only step failing these baseline checks.
3. Fix the CORS configuration on `web-assets.stylitics.com` (add `Access-Control-Allow-Origin` for `www.skechers.com`) or self-host the asset.
4. Remove/gate the Summarizer API call with a language-support check before invoking it, to stop the repeated console errors.
5. Consolidate duplicate Google tag destinations (single GTM container driving both AW- and DC- conversions server-side) to cut redundant script requests.
6. Re-run the audit with LCP/CLS instrumentation enabled — current performance data is incomplete and no conclusion should be drawn on Core Web Vitals until captured.
7. Audit the low-TTFB steps (Men>Shoes, PDP, Add to Cart, Search) to confirm whether they are true page navigations or client-side transitions, since this changes how their performance should be interpreted.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

