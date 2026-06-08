---
slug: 2026-06-08-site-journey-walker
type: site
date: 2026-06-08
persona: walker
score: "4/10"
previous_score: "4/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-4, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 4/10 (prev 4/10) · **Type:** Site journey · **2026-06-08**
## Full review
---

# Walker Miles — Skechers.com Mobile Journey Review
**Date:** June 8, 2026 | **Yesterday's Score:** 4/10

---

## 1. Executive Summary

Skechers gets me to the right product category fast — the Men's menu is clean, "Hands Free Slip-ins" is right there, and the ADD TO CART button is big enough for my thumb. But the journey falls apart at the most critical moments: the cart page renders completely blank, login doesn't appear to stick, and when I searched "comfort shoes" the site showed me Women's shoes. For a guy who already knows what he wants, three separate failures at the finish line will send me to New Balance's site instead.

---

## 2. Business Impact Score: 4/10

No change from yesterday. The product discovery funnel is adequate, but three conversion-killing failures — blank cart, broken personalization, and gender-wrong search results — keep this at a failing grade. No regression, no improvement.

---

## 3. What's Working

- **BOGO 50% OFF banner is hard to miss.** It's at the very top of every screen, blue on white, bold text. I see it. I remember it.
- **Men's category menu is genuinely good.** Clean full-screen list, large tap targets, well-spaced rows. "Hands Free Slip-ins," "Wide Fit," "Extra Wide Fit" — those three links are exactly what I need and they're right there without drilling deeper.
- **"Hands Free Slip-ins" has its own landing page with 298 results.** The heading is big, the fit filter buttons (Wide Fit, Extra Wide Fit, Medium Fit) are prominent and tappable.
- **Size selection grid is excellent.** Big boxes, half-sizes listed clearly, easy to tap. The "Please select a size" validation error is red and obvious — I won't miss it.
- **ADD TO CART button is full-width and pinned to the bottom of the screen.** I can't lose it. That's the right call.
- **Product name and badge are readable.** "Arch Fit D'Lites 330" and the Hands Free Slip-ins badge load right under the price. I know what I'm getting.

---

## 4. What's Weak

**Critical:**
- **Cart page is completely blank (Step 8).** White screen, nothing rendered. Whether it's an empty-cart state that failed to load or a full crash, it doesn't matter — I see nothing. No "your cart is empty," no suggested products, no path forward. This is a purchase-ending bug.
- **Login doesn't appear to work.** Step 3 still shows the "Login | details" link in the Members banner — not a logged-in welcome message, not my name, nothing. If I logged in, the site doesn't know it. No personalization follows anywhere.
- **Search returns Women's shoes for a male shopper.** I typed "comfort shoes" and got Arch Fit Arcade "See Ya There" (Women's) and Contour Foam (Women's) as the first two results. 1,483 results and I'm leading with the wrong gender. That's not a search problem, that's a personalization failure.

**Significant:**
- **The featured product ($125 Flagsway) is excluded from the BOGO promotion** that's plastered on every page. The orange warning icon says "Excluded from promotions." I just walked through four steps to get here, motivated by BOGO 50% OFF, and the shoe doesn't qualify. That's a trust gut-punch.
- **Only 1 review, 3 stars.** For a $125 shoe I'm on the fence about, that's not enough social proof to close me. I want 40 reviews from other guys my age telling me their feet feel great.
- **Homepage hero leads with a woman.** The first large image I see is a female model. The male model is second. Not a dealbreaker, but I don't feel like this page was built for me.
- **Step 2 "dismiss popup" — no popup appeared.** The screen between homepage and login looks identical to the homepage (just the rotating promo banner changed). Either no popup fired, or it was auto-dismissed before I could see it. Minor, but worth tracking.
- **The horizontal category nav at the top is cut off.** "Slip-ins, Sandals, Arch Fit, BOBs, G..." — the last item is cropped. Horizontal scroll is not intuitive on mobile for someone my age.

---

## 5. Recommendations

1. **Fix the cart page immediately.** An empty cart must render something — at minimum "Your cart is empty" with 3–4 comfort shoe recommendations. A blank white page will be read as a site error and cause bounces.
2. **Apply gender filter to search when logged in.** If I'm a male account holder, "comfort shoes" search should default to Men's results, or at least lead with them. This is table-stakes personalization.
3. **Flag BOGO-excluded products before the product page.** Show a small badge or note on the listing grid card — not buried on the PDP — so I don't feel deceived after clicking through.
4. **Confirm login state visually.** Show my name or "Hi, Walker" somewhere persistent after login. The Members banner switching from "Login" to my name is the minimum signal I need to trust the site knows who I am.
5. **Seed more reviews on the Flagsway.** One 3-star review at $125 is a conversion killer for a value-conscious shopper. Surface reviews from other men, or cross-link to similar Arch Fit models with stronger ratings.

---

## 6. Bottom Line

The bones are there — Skechers has my category, my technology (Arch Fit Slip-ins), and my price range. But I can't complete a purchase. The cart is broken, the login doesn't stick, and when I search the way I actually think ("comfort shoes"), the site hands me women's footwear. Yesterday was a 4. Today is a 4. Nothing got better, the cart failure is either the same or got worse. Until those three failures are fixed, a guy like me will land on the product page, hit a wall, and go try his luck at New Balance or DSW.

---

## 7. Evidence

**Step 1 — Homepage**
What I saw: Blue BOGO 50% OFF banner at the very top, Skechers logo, search/account/cart/menu icons. A rotating sub-banner saying "Member Month! Earn 2X Points now thru 6/13 — Login | details." Horizontal pill nav showing Slip-ins, Sandals, Arch Fit, BOBs, and one more item cut off. Large hero image with a woman walking casually and a man in sneakers. "Summer" text appearing at the bottom. Easy to use on phone — icons are adequate size. No personalization (not logged in). The BOGO offer is the first thing I notice, which motivates me to keep shopping.

**Step 2 — Dismiss Popups**
What I saw: Essentially the same page. The rotating banner changed to "Summer Apparel Sale! 25% OFF Apparel." No modal popup appeared and nothing needed to be dismissed. Either the popup didn't fire or it was auto-cleared before the screenshot. No friction here, but also no actual popup event I can evaluate.

**Step 3 — Log In**
What I saw: Same homepage view as Step 1. The Members banner still reads "Login | details," not a logged-in state. No login confirmation, no welcome message, no name shown anywhere. The login either failed silently or didn't persist. This is a problem — if I can't stay logged in, I get no personalization anywhere downstream.

**Step 4 — Men Category**
What I saw: A clean full-screen mobile menu. MEN header in bold, then a well-spaced vertical list: Shoes >, Shop by Activity >, Comfort Technologies >, Collections >, Collaborations >, Clothing & Accessories >, and below a separator: Hands Free Slip-ins, Wide Fit, Extra Wide Fit. Back and X buttons at top. This is the best screen in the journey. Every row is tall enough to tap comfortably, text is large and clear. "Hands Free Slip-ins" is a direct link, no extra drill required. I felt like the site understood what I came for.

**Step 5 — Men > Shoes (Hands Free Slip-ins)**
What I saw: Category page with a clear "Hands Free Slip-ins" H1 heading. Breadcrumb "Men > Shoes" at top. Three blue fit filter buttons: Wide Fit, Extra Wide Fit, Medium Fit (last one slightly clipped). "298 Results" count, a Free pickup toggle, a Set Location link, Filter button, and Sort by dropdown. Two shoe cards visible at the bottom — just the shoes with color swatches. Readable without zooming. 298 results is a lot and the default sort isn't explained, but the relevant content is front and center. Felt reasonably on-target for me.

**Step 6 — Product Detail (Arch Fit D'Lites 330 Flagsway)**
What I saw: "MEN'S" label in small caps at top, full product name "Skechers Slip-ins: Arch Fit D'Lites 330 - Flagsway," 3-star rating with just 1 review, Add to Wishlist link, price $125.00, and an orange warning icon reading "Excluded from promotions." The Hands Free Slip-ins badge is visible. A patriotic-looking white/red/blue shoe image with left/right nav arrows. The "Excluded from promotions" label stings — the BOGO banner has been following me this entire journey and now it doesn't apply. Only one review at 3 stars does not make me feel confident about spending $125. The product name confirms it's exactly what I was looking for (Arch Fit + Slip-ins), so the category navigation did its job.

**Step 7 — Add to Cart**
What I saw: Size selection grid with all available sizes from 7.0 to 13.0 in large, tappable boxes. A red "Please select a size" warning with a triangle icon. QTY dropdown set to 1. "Ship it" and "Check in-store availability" options with clear descriptions. A full-width dark blue ADD TO CART button pinned to the bottom. Cart icon in the header shows 0 items — nothing was actually added because a size wasn't selected. The error message is clear and well-placed. The ADD TO CART button is the largest, most thumb-friendly element on the page. No friction here beyond the size-first requirement.

**Step 8 — Cart**
What I saw: A completely blank white screen. No content, no cart items, no "empty cart" message, no suggested products, nothing. The page failed to render entirely. This is a critical failure — whether the cart navigation happened without an item being added (size was never selected in Step 7) or the cart page itself is broken, the result is the same: a blank page that tells me nothing and gives me nowhere to go. This would send me to a competitor immediately.

**Step 9 — Search "comfort shoes"**
What I saw: Search results page for "comfort shoes" showing 1,483 results. Filter and Sort by controls. The first two products displayed: Skechers Slip-ins: Arch Fit Arcade "See Ya There" (labeled Women's, Also in Wide, $85.00) and Skechers Slip-ins: Contour Foam (labeled Women's, Also in Wide, $88.00). Both show "Buy 1 Get 1 50% OFF! Applied at Cart." I am a male customer who just navigated through the Men's section. Getting Women's shoes as my first two search results is a significant personalization miss. The search result count (1,483) is reassuring but useless if I'm being shown the wrong products. Both shoes also have the BOGO discount that the product I just visited didn't — that contrast will make me second-guess the Flagsway.

---

## Technical Audit

## Technical Summary

Eight-step mobile journey audited. Critical findings: the cart endpoint is returning HTTP 429 (blocks checkout completion), the View Cart page lacks required HTML document attributes (`<title>`, `lang`), a third-party stylesheet is CORS-blocked, and at least one GTM property ID appears to be a placeholder. Third-party script sprawl is extensive — 20+ async scripts loaded on every page.

---

## Accessibility

**15 axe violations across 3 pages.**

**Homepage (8 violations):**
- `aria-required-parent` [critical] — an element with a role requiring a parent container is orphaned in the DOM. Likely a carousel or listbox item rendered outside its intended wrapper.
- `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique` [moderate] — multiple `<main>` elements exist and/or `<main>` is nested inside another landmark. Indicates structural HTML issues, possibly from injected widgets (Monetate, Stylitics).
- `landmark-complementary-is-top-level` [moderate] — `<aside>` is nested inside `<main>` or another sectioning element.
- `heading-order` [moderate] — heading hierarchy is non-sequential (e.g., `<h1>` followed by `<h3>`).
- `region` [moderate] — page content exists outside any landmark region.
- `aria-allowed-role` [minor] — role attribute used on an element where that role is not permitted.

**View Cart (4 violations — most severe):**
- `document-title` [serious] — `<title>` element is missing or empty. The cart page is likely a client-rendered state that does not update `document.title`.
- `html-has-lang` [serious] — `<html>` element has no `lang` attribute on the cart view. Contradicts the homepage HTML which correctly sets `lang="en"`. Suggests the cart renders in a separate document context (iframe or shadow DOM) without inheriting the attribute.
- `landmark-one-main` [moderate] — no `<main>` landmark present.
- `page-has-heading-one` [moderate] — no `<h1>` in the cart document.

**Search results (3 violations):**
- Same `landmark-complementary-is-top-level`, `landmark-unique`, and `region` issues as homepage — likely same underlying component.

---

## SEO

- **View Cart missing `<title>`** — if Googlebot can crawl the cart URL directly, it will be indexed with no title. More likely the cart is session-gated, but the missing title still indicates a document completeness bug.
- **GTM property `G-1234567890`** appears in the `<head>` of every audited page alongside the real `G-XZTV9LQ9DQ`. `G-1234567890` is a placeholder/test ID that should not be in production. It generates an unnecessary GTM call and may cause data inconsistencies in GA4.
- `tags.creativecdn.com/dhGobFICKSkk6J9nvQPw.js` is duplicated in the Men category page `<head>`, causing a redundant script request.
- `s.yimg.com/wi/ytc.js` (Yahoo pixel) is loaded twice on every page.

---

## Performance

**TTFB observations:**

| Step | TTFB | Assessment |
|---|---|---|
| Homepage | 32ms | Good |
| Log In | 404ms | Elevated — session check or auth middleware adding ~370ms |
| Men category | 404ms | Elevated — same as login; personalization middleware (Monetate) likely culprit |
| Men > Shoes | 49ms | Good |
| Product detail | 30ms | Good |
| Add to Cart | 30ms | Good |
| View Cart | 121ms | Acceptable |
| Search | 31ms | Good |

Log In and Men category share the same 404ms TTFB. The HTML snapshots for both show the same document structure as the homepage, suggesting a single-page shell with client-side routing. The TTFB penalty is likely from the Monetate server-side personalization call (`se.monetate.net/js/3/...`) which is loaded synchronously with `charset="utf-8"` (no `async`/`defer` on that specific tag in the source).

**LCP and CLS values are not available** — the audit tool did not capture them. Without these, Core Web Vitals compliance (especially for the Men category and Search pages, which are image-heavy) cannot be assessed.

**Third-party script count on a single page load:** 20+ domains including Google Tag Manager (3 separate destination tags + main gtm.js), TikTok (3 scripts), Pinterest, Facebook, Snapchat, Bing, Reddit, Yahoo (×2), Taboola, NextDoor, Impact, Bloomreach, Monetate (2 endpoints), Quantum Metric, Pulse Insights, Tune/Go2SDK, Stylitics, WebFont Loader. Each is `async` but still contributes main-thread parse and execution time on low-end mobile hardware.

**`--vh` CSS variable** is set to `6.640000000000001px` (floating point artifact from `window.innerHeight / 100`). This is a known iOS Safari 100vh workaround; the precision artifact is benign but reflects a JS-side calculation running on every resize.

---

## Mobile Optimization

- The `--vh` custom property pattern is correct in concept (fixing iOS Safari viewport height) but the floating-point imprecision in the computed value (`6.640000000000001px`) will cause sub-pixel layout inconsistencies on elements using `calc(var(--vh) * 100)`.
- WebFont Loader v1.6.28 loaded from `cdnjs.cloudflare.com` — this library adds a render-blocking font swap cycle and its `wf-*` class additions (visible in `<html class="wf-mulish-n8-active wf-mulish-n7-active..."`) trigger style recalculations. The `wf-active` class being applied at parse time suggests fonts are cached on repeat visits, but first-visit mobile users will experience a FOUT.
- No evidence of responsive image `srcset` or `<picture>` usage in the captured HTML snippets.

---

## Console & Network Errors

**429 Rate Limiting (6 network errors, 6 console errors):**

The primary 429 source is `https://www.skechers.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp?x-kpsdk-v=j-1.2.443` — this is the **Kasada bot protection** fingerprinting endpoint (KPSDK). The path structure (two UUIDs + `/fp`) is Kasada's client-side challenge/response endpoint. It is being rate-limited, which means either:
1. The audit's automated browser triggered Kasada's bot detection and was throttled, or
2. The Kasada configuration is misconfigured with too-low rate limits affecting legitimate mobile traffic.

**Critical: `https://www.skechers.com/cart/` is returning 429.** This is not the Kasada endpoint — this is the cart page itself. If real users hit this, they cannot view or complete their cart. Whether this was triggered by the audit session or affects production traffic requires investigation with backend rate-limit logs.

**CORS block on Stylitics:**
```
Access to CSS stylesheet at 'https://web-assets.stylitics.com/style.css?base=hotspots&theme=skechers&version=777c217f34'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header
```
The Stylitics outfit/hotspot widget CSS is being blocked. The `skechers` theme stylesheet is not being delivered with the correct CORS headers from Stylitics's CDN. This means the Stylitics widget renders unstyled or not at all. Root cause is on the Stylitics CDN config, but Skechers should escalate to their Stylitics account team and verify the `version` hash `777c217f34` is current.

---

## Recommendations

1. **[Critical] Investigate cart 429** — Pull rate-limit logs for `/cart/` to determine if real users are hitting this. If the rate limit is keyed on IP or session and is being triggered during normal browse-to-checkout flows, this is a direct revenue impact.

2. **[Critical] Fix View Cart document structure** — The cart view must set `document.title` and ensure the root `<html>` element has `lang="en"`. If the cart renders in an iframe, the iframe document needs its own `<html lang>`, `<title>`, `<main>`, and `<h1>`. If it's a client-rendered route, wire title updates into the routing lifecycle.

3. **[High] Fix Kasada 429s** — Coordinate with Kasada to ensure the KPSDK fingerprint endpoint rate limits are not triggering on legitimate mobile user sessions. The fingerprinting is required for bot protection to function; throttling it defeats its purpose and generates console noise.

4. **[High] Fix Stylitics CORS** — Open ticket with Stylitics to add `Access-Control-Allow-Origin: https://www.skechers.com` to the `web-assets.stylitics.com` CDN for the skechers-themed stylesheet.

5. **[High] Remove placeholder GTM ID** — Remove `G-1234567890` from all page templates. It is firing on every page load in production.

6. **[Medium] Deduplicate scripts** — Remove the duplicate `tags.creativecdn.com` load in Men category and the duplicate `s.yimg.com/wi/ytc.js` across all pages. Audit the GTM container for duplicate tag triggers.

7. **[Medium] Fix critical ARIA violation on homepage** — The `aria-required-parent` critical violation needs DOM inspection to identify which component has an orphaned ARIA role child. Likely a slider/listbox widget from Monetate or the product carousel.

8. **[Medium] Capture LCP/CLS** — Re-run the audit with Lighthouse or Web Vitals instrumentation to get LCP and CLS values. TTFB alone is insufficient to assess CWV compliance; the Men category and Search pages (image-heavy) are highest risk for poor LCP.

9. **[Low] Monotone script consolidation** — The two Monetate script endpoints (`se.monetate.net/js/3/...` with `charset="utf-8"` and no async, and `//se.monetate.net/js/2/...` with async) should be reviewed — the synchronous load of the `js/3/` custom script is a render-blocking risk on slow connections.
## Recent history

- [[2026-06-07-site-journey-walker]] — 4/10 (2026-06-07)
- [[2026-06-06-site-journey-walker]] — 4/10 (2026-06-06)
- [[2026-06-05-homepage-www.skechers.com-walker]] — 7/10 (2026-06-05)

