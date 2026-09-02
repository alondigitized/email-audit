---
slug: 2026-09-02-site-journey-walker
type: site
date: 2026-09-02
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-09-02**
## Full review
## 1. Executive Summary

I made it from the homepage to a product page just fine, but the wheels came off at the cart. I picked a shoe, tried to add it, and the site wouldn't let me — no size got selected, so nothing went in the bag. Then when the automated step tried to view the cart anyway, the whole page came back **blank white**. Nothing there. That's the kind of thing that would make me put my phone down and call it quits. Also worth flagging: clicking "Log In" did nothing — no form, no modal, nothing changed on screen.

## 2. Business Impact Score (1-10)

**2/10** — unchanged from yesterday. Browsing and search work reasonably well, but the two things that actually make money — logging in and checking out — are both broken in this run. A shopper can't buy a shoe if the cart page is a blank screen.

## 3. What's Working

- **Homepage is clean and legible.** Big readable text, clear promo banner (20% off), simple photo, no clutter. I didn't have to zoom.
- **Slip-ins / Arch Fit / Max Cushioning right up top** as quick-nav pills — that's exactly the stuff I care about, front and center.
- **Hamburger menu is simple.** "MEN > Shoes > Shop by Activity > Comfort Technologies" is a plain vertical list, easy to tap, no fancy hover tricks I'd fumble with a thumb.
- **Men's Shoes category page** has big photo tiles ("Hands Free Slip-Ins," "Walking Shoes," "Athletic Sneakers") that speak my language, plus a working filter/sort bar and a results count (738).
- **Product page** is straightforward: name, star rating, price, member discount note, big product photo I could zoom on. The GO 3D Arch Fit clog is a decent hands-free, cushioned pick for me.
- **Search for "comfort shoes"** actually returned comfort-relevant results — slip-ins and max-cushioning shoes, with sale pricing shown (strikethrough $85 → $63.99). That's useful for my price-vs-quality math.

## 4. What's Weak

- **Cart is broken.** After "adding to cart," the cart page rendered completely blank. That's a dead end — I'd have no way to know if my shoe was even in my bag.
- **Add to Cart didn't actually work.** The size step shows a red "Please select a size" warning still up when Add to Cart was pressed — no size got picked, so the button click didn't add anything. The cart badge stayed at "0" through the entire journey, every single screenshot.
- **Login is a no-op.** Tapping "Log In" produced zero visible change — no modal, no form, nothing. If I can't log in, nothing on this site is going to feel personalized to me, and it doesn't.
- **Only 1 review on a $90 shoe.** For a comfort-shoe purchase where I'm weighing it against Hoka or New Balance, one review gives me nothing to go on.
- **No cross-brand comparison anywhere** — obviously Skechers won't put Hoka or Brooks on their own site, but there's nothing here (like a fit/comparison chart) helping me judge value the way I naturally shop.

## 5. Recommendations

1. **Fix the cart page rendering** — a blank screen after add-to-cart is a hard stop for any shopper, let alone one who's already skeptical of tapping the wrong thing on a phone.
2. **Make size selection unmissable** before Add to Cart is even tappable, or auto-scroll to the error so it's obvious why nothing happened.
3. **Fix or investigate the Log In flow** — right now it's indistinguishable from doing nothing at all.
4. **Add more reviews / trust signals** on product pages, or surface aggregate ratings from elsewhere, so a $90 purchase feels less like a gamble.
5. **Confirm the cart badge updates immediately** after a successful add — right now there's no feedback loop telling me anything happened.

## 6. Bottom Line

Browsing this site on my phone is pleasant enough — big pictures, simple menu, the comfort language I'm looking for. But I couldn't actually buy anything, and I couldn't log in either. A comfort shopper like me needs to trust that when I tap "Add to Cart," something happens, and when I go look at my cart, I see my shoe. Neither happened here. Score stays flat at 2/10 — no real improvement from yesterday, and the blank cart page is arguably a new low.

## 7. Evidence

**Step 1 — Homepage:** Clean layout, bold Labor Day promo banner up top, big lifestyle photo, quick-nav pills (Slip-ins, Arch Fit, Max Cushioning) visible without scrolling. Text was readable without zooming. Easy on a phone. No login state visible — cart badge shows "0."

**Step 2 — Dismiss Popups:** No popup actually appeared to dismiss; screen is identical to Step 1 aside from the promo banner text changing to "25% off Apparel & Bags." Nothing to interact with, so nothing went wrong here, but also nothing indicates a popup was ever shown or closed.

**Step 3 — Log In:** Screen is pixel-identical to the homepage. No login form, modal, or account panel appeared. This is a dead tap as far as I can tell — I'd assume the button was broken and give up trying to log in.

**Step 4 — Men category:** Hamburger slide-out menu opened cleanly with a simple vertical list (Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories) plus two product thumbnails at the bottom. Big tap targets, easy to read, no confusion. This part felt built for someone like me.

**Step 5 — Men > Shoes:** Landed on "Men's Shoes" with three big labeled photo tiles up top (Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers) — exactly the categories I'd want. Free-pickup toggle, Filter and Sort by controls, and a "738 results" count all visible without scrolling much. Easy to use.

**Step 6 — Product detail:** GO 3D Arch Fit - 3D AirNex Clog, $90, "Members Get 20% Off" note, 5-star rating but only "1 Review" underneath it, large zoomable product photo with arrow carousel. Friction: only one review makes me hesitant to trust the quality claim.

**Step 7 — Add to Cart:** Size grid (M4/W5.5 through M14/W15.5) shown with big, well-spaced boxes — good touch targets. But a red "Please select a size" error is showing right above the QTY selector and the highlighted "Add to Cart" button, meaning the add attempt happened without a size chosen. This is the point where the transaction broke.

**Step 8 — View Cart:** Completely blank white screen. No header, no items, no error message, nothing. This is a serious failure — whether it's because nothing was actually in the cart (size never selected) or the cart page itself failed to render, either way a shopper is stuck staring at nothing.

**Step 9 — Search "comfort shoes":** Returned "1,503 results" with two relevant products shown — a women's Slip-Ins Go Walk Joy ($85) and a men's Max Cushioning Endeavour with a sale price ($85 → $63.99, member discount noted). Filter/sort controls present. This part worked well and felt relevant to what I typed.

---

## Technical Audit

## Technical Summary

Audited an 8-step mobile journey on skechers.com (Salesforce Commerce Cloud / Demandware storefront). Findings span accessibility (17 axe violations across 3 of 8 pages), a broken third-party stylesheet (CORS failure), repeated 429 rate-limiting on the bot-detection/fingerprinting endpoint (including on `/cart/`), and a console error from an unguarded browser AI API call. LCP/CLS were not captured for any step, leaving a gap in the performance picture. TTFB is within Google's "Good" threshold (<800ms) on every step.

## Accessibility

17 violations total, concentrated on **Homepage** (9), **View Cart** (4), and **Search** (4).

- **Critical:** `aria-required-parent` — Homepage (an ARIA role is used outside its required parent role container)
- **Serious:** `link-name` (Homepage, links with no discernible text); `document-title` and `html-has-lang` (View Cart — page lacks a `<title>` and the `<html>` element has no `lang` attribute)
- **Moderate:** `heading-order`, `landmark-complementary-is-top-level`, `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `region` (Homepage); `landmark-one-main`, `page-has-heading-one` (View Cart); `landmark-complementary-is-top-level`, `landmark-unique`, `region` (Search)
- **Minor:** `aria-allowed-role` (Homepage, Search)

View Cart failing `document-title`, `html-has-lang`, and `landmark-one-main`/`page-has-heading-one` simultaneously is notable — this points to the cart view rendering without a standard document shell (e.g., an incomplete SPA state or fragment swap rather than a fully-hydrated page), not just missing individual attributes.

## SEO

- View Cart missing `<title>` and `lang` — beyond the accessibility impact, this removes a signal search engines/social scrapers use for the page (low priority if cart is `noindex`, but should be confirmed).
- The captured URL for Homepage, Log In, and Men category is identical (`https://www.skechers.com/`), suggesting login and category browsing are handled as client-side overlay/state changes rather than distinct crawlable URLs at the point of capture. Worth confirming server-rendered category URLs exist independently (they likely do under normal navigation — this may be an artifact of how the audit captured state rather than an actual routing defect).
- `<head>` carries 30+ synchronous/async third-party tags (TikTok, Snapchat, Reddit, Facebook, Pinterest, Bing, Taboola, Nextdoor, Stape, CreativeCDN, Quantum Metric, Monetate, PulseInsights, GTM ×2, Google Ads, DC Floodlight, Impact, Bombora) — this bloats parse time and indirectly harms Core Web Vitals, which are a ranking factor.

## Performance

| Step | TTFB | LCP | CLS |
|---|---|---|---|
| Homepage | 403ms | not captured | not captured |
| Log In | 491ms | not captured | not captured |
| Men category | 491ms | not captured | not captured |
| Men > Shoes | 34ms | not captured | not captured |
| Product detail | 28ms | not captured | not captured |
| Add to Cart | 28ms | not captured | not captured |
| View Cart | 125ms | not captured | not captured |
| Search | 27ms | not captured | not captured |

All TTFB values are within Google's "Good" range (<800ms). The sharp drop after the first two steps (491ms → 28-34ms) is consistent with client-side routing/prefetching rather than full server round-trips for later steps. **LCP and CLS were not captured for any step** — this is a material gap; visual load speed and layout stability cannot be assessed from this data set.

## Mobile Optimization

- `--vh: 6.64px` inline custom property indicates a JS-based viewport-height polyfill (common workaround for mobile browser chrome), which risks a layout shift if applied after initial paint — cannot confirm impact without CLS data.
- Web fonts loaded via `webfontloader.js` (Mulish, 6 weights) — a render-blocking-risk pattern (FOUT/FOIT) that disproportionately affects mobile network conditions.
- The 30+ third-party scripts loading in `<head>` represent meaningful CPU/battery/network overhead on mobile devices specifically.
- Repeated 429s against the bot-detection fingerprint endpoint during a normal mobile session suggest the anti-bot layer (Kasada, based on the `x-kpsdk-v` param) may be over-throttling legitimate mobile traffic.

## Console & Network Errors

- **429 (×4)** on `https://www.skechers.com/.../fp?x-kpsdk-v=...` — Kasada bot-detection fingerprinting endpoint rate-limited during the session.
- **429 (×1)** on `https://www.skechers.com/cart/` — the cart page itself was rate-limited, which is a direct risk to conversion if it recurs for real users.
- **CORS failure**: `https://web-assets.stylitics.com/style.css?...` blocked — no `Access-Control-Allow-Origin` header, so the Stylitics stylesheet (likely powering an outfit/styling widget) fails to load, followed by a correlated `net::ERR_FAILED`.
- **Unsupported Summarizer API languages** (×4, repeated): a script is invoking the experimental browser Summarizer/built-in AI API without checking supported languages first — a code-level bug in a third-party tag, not user-facing but indicates unguarded feature usage.

## Recommendations

1. Fix the critical/serious accessibility issues first: `aria-required-parent` and `link-name` on Homepage; missing `<title>`, `lang`, `<h1>`, and `<main>` landmark on View Cart.
2. Investigate why View Cart lacks a standard document shell (title/lang/main/h1 all absent) — confirm it isn't rendering as a partial/degraded state.
3. Fix CORS on `web-assets.stylitics.com` (add proper `Access-Control-Allow-Origin`) or proxy/self-host the stylesheet so the styling widget renders.
4. Review Kasada bot-protection thresholds — legitimate sessions are hitting 429s on both the fingerprint endpoint and `/cart/`, which risks blocking real checkout traffic.
5. Feature-detect before calling the browser Summarizer API to eliminate the repeated console errors.
6. Audit and reduce the third-party script footprint in `<head>` (30+ tags) — consolidate through GTM and defer non-critical tags, especially given mobile CPU/network constraints.
7. Re-run the audit capturing LCP and CLS — current data can't assess paint timing or layout stability, which are essential for a mobile performance verdict.
8. Resolve duplicate/non-top-level ARIA landmark roles (`main`, `complementary`) flagged on Homepage and Search.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

