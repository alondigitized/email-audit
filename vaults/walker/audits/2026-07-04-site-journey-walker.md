---
slug: 2026-07-04-site-journey-walker
type: site
date: 2026-07-04
persona: walker
score: "4/10"
previous_score: "4/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-4, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 4/10 (prev 4/10) · **Type:** Site journey · **2026-07-04**
## Full review
---

# Walker Miles — Skechers.com Mobile Journey Review
**Date:** July 4, 2026 | **Yesterday's Score:** 4/10

---

## 1. Executive Summary

Same song, different verse. Skechers is still tripping over the basics that matter most to a guy like me. The BOGO deal is loud and clear, the Men's navigation has good bones, and the slip-in category page is the best screen in the whole journey. But the cart is a ghost town — blank white screen, nothing there — which is about as bad as it gets for an e-commerce site. Login shows no evidence it actually worked. Search for "comfort shoes" leads with Women's results. And the product I drilled into is excluded from every promotion they plastered across the top of every page. No improvement from yesterday. If anything the broken cart is a step backward.

---

## 2. Business Impact Score: 4/10

No change from yesterday. The category navigation improved slightly in my eyes today, but a broken cart page is a conversion-killer that caps the score at the floor. You can't sell shoes if the cart doesn't render.

---

## 3. What's Working

**The BOGO banner is impossible to miss.** Top sticky bar plus the full-bleed hero — I know exactly what deal I'm walking into before I tap a single thing. That's good retail communication.

**Men's navigation menu is clean.** The slide-over menu uses large, bold text with generous row height. "Shoes," "Comfort Technologies," "Hands Free Slip-ins" — all readable without squinting, all tappable without a surgeon's precision. The "Hands Free Slip-ins" shortcut sitting right in that menu without even needing to drill into Shoes first is genuinely convenient. I found my way to 319 slip-in options in two taps.

**The Hands Free Slip-ins PLP is solid.** Wide Fit / Extra Wide Fit / Medium Fit buttons are prominent and clearly labeled right at the top — that's exactly what I need to see. 319 results is a big number but the filter bar is right there. The "Exclusive" badges on products communicate value clearly.

**Size grid on the PDP is excellent.** Big, well-spaced number boxes. No fumbling. The "Don't See Your Size?" link is there if I need it. ADD TO CART button is full-width and high-contrast blue — unmistakable.

**The $90 price is upfront.** No pricing games or hidden-until-checkout nonsense.

---

## 4. What's Weak

**Cart page is completely blank.** Step 8 is a white void. No items, no empty-state message, no error, nothing. This is a critical failure. A shopper who taps that cart icon and sees nothing assumes the site is broken and goes to New Balance. I cannot overstate how bad this is.

**Login left no evidence it worked.** Steps 1, 2, and 3 are nearly identical screenshots. The page header looks the same — same generic account icon, same cart count of 0. If I logged in successfully, the site didn't acknowledge it. No name, no "Welcome back, Walker," no loyalty points balance — nothing that makes me feel like a known customer. I might as well be a stranger off the street.

**Homepage defaults to Women's tab.** I'm a logged-in male shopper (allegedly) and the homepage still lands on the Women's tab with a Womens-forward layout. That's zero personalization. Every time I open this site I have to reach for "Mens." Annoying.

**The product I tapped is excluded from every promotion.** The Britto Landscape shows "Excluded from promotions" in orange warning text right on the PDP. Meanwhile every banner from top to bottom shouts BOGO 50% OFF or SALE15 or 25% OFF Apparel. That disconnect is a trust problem. I clicked this shoe expecting the deal to apply and it doesn't. That kind of bait-and-switch feeling — even if it's technically disclosed — makes me suspicious.

**Add to Cart requires size but doesn't pre-select.** The step-7 screenshot shows a red "Please select a size" warning. No size was pre-selected. That's expected — but the friction is real for someone with thicker fingers on a phone screen who just wants to tap and go.

**Search for "comfort shoes" serves Women's results first.** 1,426 results sounds great until both visible results — Contour Foam and Glide-Step Comfort — are labeled "Women's." A logged-in male shopper should see Men's comfort shoes at the top. This is a personalization failure.

**Two-banner clutter at the top.** Steps 1 and 3 show a sticky top banner (BOGO) AND a second banner below the logo (Extra 15% OFF with code SALE15) AND the main hero is also a BOGO promotion. Three overlapping deal messages in the first viewport is noise, not signal. I lose track of what applies to what.

---

## 5. Recommendations

1. **Fix the cart immediately.** This is a P0 bug. A blank cart page stops the purchase dead. Whether it's a loading failure, auth issue, or render error — it needs to be diagnosed and fixed before anything else.

2. **Show login confirmation.** After login, display the user's name or "Hi, Walker" somewhere in the header. Surface the loyalty tier or points balance. Make logged-in feel different from logged-out.

3. **Default homepage to the shopper's gender.** A logged-in male user should land on the Mens tab. This is table-stakes personalization.

4. **Surface "Excluded from promotions" on the category tile, not just the PDP.** If a shoe is exempt from the sitewide deal, show a small badge or note on the grid card. Don't let shoppers click in on the promise of 50% off only to find out it doesn't apply.

5. **Filter search results by shopper's gender.** "Comfort shoes" typed by a logged-in male should rank Men's results above Women's. The relevance algorithm needs to read the session context.

6. **Consolidate the deal banners.** Pick one above-the-fold deal message and commit to it. Three deal mentions in the first viewport creates confusion, not urgency.

---

## 6. Bottom Line

The navigation skeleton is fine. I can find Men's Hands Free Slip-ins in two taps and the size picker works. But the broken cart, the invisible login state, and the women-first search results are the same wall I've been running into. Skechers knows comfort — their products know it — but this mobile site doesn't feel like it knows me. Until the cart actually works and the site treats me like a returning customer, I'm still one Google search away from going to Brooks.

**Score: 4/10 — No change from yesterday. Cart regression is a serious concern.**

---

## 7. Evidence

### Step 1 — Homepage
The first viewport shows a BOGO 50% OFF sticky banner, the Skechers wordmark, and a second banner for "Extra 15% OFF Sale Styles with Code: SALE15." The main hero is a patriotic red/white/blue Skechers Plus BOGO card. Below the fold: Womens / Mens / Recently Viewed tabs — defaulted to Womens. Phone-friendly text sizes throughout. The quick-category pills (Slip-ins, Sandals, Arch Fit, BOBs) are compact but tappable. No personalization — this looks like a first-time visitor's screen despite being logged in.

### Step 2 — Dismiss Popups
Looks almost identical to Step 1 — the second banner rotated to "25% OFF Apparel." No popup was visible to dismiss; nothing appears to have changed. If a popup appeared and was dismissed, it left no visible trace. The homepage underneath is unchanged.

### Step 3 — Log In
Identical in appearance to Step 1 — same banner, same BOGO hero, same Womens tab active. No visual confirmation of login success. No name in the header, no account state change visible. The login either didn't persist to this view or the site simply doesn't surface it in the header. Either way, I have no idea if I'm logged in.

### Step 4 — Men Category
The hamburger menu slide-over is clean and well-structured. "MEN" header in bold at top. Row items: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories — all with right-facing chevrons indicating drill-down. Below: Hands Free Slip-ins, Wide Fit, Extra Wide Fit as direct shortcut links. Large text, easy to read. Generous tap targets. Back button and X close button are both clearly placed. This is the best UX screen in the journey.

### Step 5 — Men > Shoes (Hands Free Slip-ins PLP)
Breadcrumb shows Men > Shoes. Page title "Hands Free Slip-ins" is large and clear. Three fit-filter pill buttons (Wide Fit, Extra Wide Fit, Medium Fit) sit just below the title — exactly the right placement. Free pickup toggle is available. Filter and Sort by are both visible. "319 results" — a solid selection. Two shoe thumbnails visible with "Exclusive" labels. The grid is cut off but appears to be a standard two-column layout. Overall a strong, functional page.

### Step 6 — Product Detail
"MEN'S" in small caps, then the full product name: "Skechers Slip-ins Britto: UNO - Britto Landscape." Five-star rating with 2 reviews (very sparse social proof). $90.00 price prominent. The orange "Excluded from promotions." warning below the price is critical — this shoe doesn't qualify for any of the deals being advertised sitewide. The product photo is the full-screen hero: a very colorful, artistic collaboration design — vibrant greens, pinks, yellows. Eye-catching but not obviously the "comfort walking shoe" I came for. I don't see cushioning specs, arch support callouts, or any comfort technology language in this viewport.

### Step 7 — Add to Cart
After scrolling on the PDP, the size selection grid is visible: 9.0 through 14.0 in a clean grid. Red warning text reads "Please select a size" — no size was pre-selected. QTY defaulted to 1 (fine). Ship it and Check in-store availability options are listed with icons. A Skechers Plus upsell blurb appears ("Join for Free Shipping, Free Returns, & Earn a...") — relevant since I'm supposed to be logged in but it's prompting me to join, suggesting the Plus status isn't recognized. The ADD TO CART button is full-width, bold blue — excellent design. The friction is only in the required size selection step.

### Step 8 — Cart
Complete blank white screen. No content, no empty-state message, no loading spinner, no error. The cart page simply did not render. This is a critical failure. A shopper reaching this screen would assume the site is down and likely abandon. There is no path forward from this screen without navigating back manually.

### Step 9 — Search "comfort shoes"
Search query "comfort shoes" in quotes at the top, 1,426 results — a large, confident number. Filter and Sort by controls are present. The two visible results are both Women's: "Contour Foam - Cozy Fit Pure Comfort" (Women's, $75) and "Relaxed Fit: Glide-Step Comfort" (Women's, $65). Both show the BOGO 50% OFF members deal. The results are relevant to the keyword — comfort-forward products — but the Women's-first ordering is wrong for a male session. No Men's results visible above the fold. Logged-in personalization is not influencing search ranking.

---

## Technical Audit

## Technical Summary

Skechers.com runs on Salesforce Commerce Cloud (SFCC/Demandware), identifiable via `/on/demandware.static/` paths. The mobile journey reveals three systemic issues: bot-detection rate limiting (Kasada/KPSDKv) causing cascading 429s, a View Cart page that appears to render in a broken iframe or separate document context (missing `<title>`, `<html lang>`, and `<main>`), and an extremely heavy third-party script payload loaded unconditionally on every page.

---

## Accessibility

**17 violations across 3 pages.** Key findings by severity:

**Critical**
- `aria-required-parent` (Homepage): ARIA role used on an element outside its required parent context — orphaned ARIA children break screen reader tree structure.

**Serious**
- `link-name` (Homepage): One or more `<a>` elements have no accessible text (no inner text, no `aria-label`, no `title`). Likely icon-only links.
- `document-title` (View Cart): The cart page has no `<title>`. This is a hard WCAG 2.4.2 Level A failure — not a warning.
- `html-has-lang` (View Cart): The cart document has no `lang` attribute. Indicates cart is rendered as a separate document (popup, iframe, or SPA shell) that strips the outer HTML.

**Moderate (structural, all pages)**
- Duplicate `<main>` landmarks on Homepage — two `role="main"` elements coexist.
- `<aside>` / complementary landmark nested inside `<main>` instead of top-level.
- Heading order skipped (e.g., `<h3>` after `<h1>`, no `<h2>`).
- Significant page content outside any landmark region.
- View Cart has no `<main>` landmark and no `<h1>`.

**Root cause pattern**: The View Cart violations (missing `<title>`, `<lang>`, `<main>`, `<h1>`) all point to a cart modal/overlay rendered as a bare document fragment rather than a proper HTML document. This is a structural bug, not a markup oversight.

---

## SEO

- View Cart missing `<title>` — crawlable cart URLs will surface as untitled in SERPs.
- Duplicate `<main>` on Homepage is a semantic signal problem for crawlers.
- The `--vh` CSS custom property is set inline on `<html>` via JS (`style="--vh: 6.640000000000001px"`), which means layout-critical viewport calculation is JS-dependent — crawlers see wrong initial layout.
- No observed canonical or hreflang issues in the truncated HTML, but the Monetate personalization engine (`se.monetate.net`) injects content client-side, meaning server-rendered HTML seen by crawlers may differ significantly from what users see (cloaking risk if product content is injected).

---

## Performance

**TTFB analysis:**

| Step | TTFB | Assessment |
|---|---|---|
| Homepage | 31ms | Excellent — likely CDN-cached |
| Log In | 372ms | Poor — 12× slower, suggests server-rendered auth page bypasses CDN |
| Men category | 372ms | Same as Login; category pages not edge-cached |
| Men > Shoes | 27ms | Excellent — CDN hit |
| Product detail | 30ms | Excellent |
| Add to Cart | 30ms | Excellent |
| View Cart | 128ms | Moderate — cart XHR or server-side partial |
| Search | 29ms | Excellent — CDN hit |

**Critical performance issue — third-party script count:**

Every page unconditionally loads all of the following before page paint:
- GTM + 3 GA4/Ads destinations
- TikTok Pixel (3 separate scripts)
- Bing Ads
- Pinterest
- Yahoo YTC (loaded **twice** — duplicate tag)
- Snapchat (category pages only)
- Reddit Pixel
- Facebook Pixel
- Nextdoor Ads
- Taboola
- Quantum Metric
- Bloomreach tracking (`brsrvr.com`)
- Impact (affiliate)
- Creative Ads CDN
- Monetate (2 scripts)
- Tune/Go2 SDK
- Stylitics (outfit recommendations)
- WebFontLoader (Mulish, 6 weights)
- PulseInsights survey

That's 20+ third-party origins firing on page load, most `async` but still competing for bandwidth and CPU on mobile. WebFontLoader is particularly problematic — it loads 6 font weight variants and sets `wf-*-active` classes on `<html>` via JS, causing a render-blocking font swap cycle.

The Yahoo YTC script (`s.yimg.com/wi/ytc.js`) is loaded **twice** — exact duplicate tag, wasted request.

LCP and CLS data were not captured, so full Core Web Vitals assessment is incomplete.

---

## Mobile Optimization

- `--vh` CSS variable is computed via JS and set inline on `<html>`. This is a workaround for the iOS Safari 100vh bug — correct approach, but means any JS failure breaks full-height layout.
- WebFont loading (6 Mulish weights) is async via WebFontLoader, but the `wf-active` class gates styled text rendering, introducing FOUT on slow connections.
- No `<meta viewport>` confirmed in truncated HTML samples, but its presence can be assumed given `--vh` is being computed.
- `vice-managed-src` attribute pattern (Facebook, Yahoo, Pinterest, etc.) suggests a consent management system (TrustArc, based on `.truste_*` CSS classes) lazy-swaps `src` attributes. On mobile networks this means deferred script loads after consent fire mid-scroll, causing layout thrash.

---

## Console & Network Errors

**429 Rate Limiting — Kasada bot protection:**

The URL pattern `149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp?x-kpsdk-v=j-1.2.543` is the Kasada fingerprinting endpoint. 5 of 6 network errors and 5 of 8 console errors are this endpoint returning 429. This means:
- The bot detection system is rate-limiting the session during normal browsing.
- Either the KPSDK token is not being refreshed correctly on mobile, or the challenge flow is broken for this user agent/session.
- The cart page also returns 429 (`https://www.skechers.com/cart/`) — this is likely **why cart accessibility violations are so severe**: the cart page failed to load its full document, returning a degraded response.

**CORS Error — Stylitics:**
```
Access to CSS stylesheet at 'https://web-assets.stylitics.com/style.css?...' blocked by CORS policy
```
The Stylitics widget CSS is being fetched cross-origin without the required CORS headers on `web-assets.stylitics.com`. This means outfit recommendation widgets render without styles. This is a Stylitics CDN configuration issue that Skechers needs to report upstream, or serve the stylesheet from their own domain.

**Net::ERR_FAILED:**
One resource fails with a network-level error (not an HTTP error code), likely a blocked or cancelled request from a failed Kasada challenge redirecting the browser.

---

## Recommendations

**P0 — Cart 429 breaks page integrity**
The cart route returning 429 from Kasada explains the missing `<title>`, `lang`, and `<main>` — the cart document was not served. Fix: ensure Kasada token refresh completes before cart navigation, or configure Kasada to pass through cart page requests from authenticated sessions.

**P1 — Fix Kasada KPSDK token refresh on mobile**
5+ consecutive 429s on the fingerprinting endpoint during a normal browsing session indicates the mobile SDK handshake is failing. Likely a User-Agent or timing issue on mobile WebKit. Needs investigation with Kasada support using mobile replay logs.

**P1 — Fix View Cart document structure**
Whether cart is a modal, iframe, or SPA route — it must emit a complete HTML document with `<title>`, `<html lang>`, and `<main>`. This is a WCAG 2.4.2 Level A hard failure.

**P1 — Fix Stylitics CORS**
Add `Access-Control-Allow-Origin: https://www.skechers.com` (or `*`) to `web-assets.stylitics.com` responses, or proxy the stylesheet through skechers.com's own CDN.

**P2 — Remove duplicate Yahoo YTC script tag**
Exact duplicate load of `s.yimg.com/wi/ytc.js` — one fires wasted network request.

**P2 — Fix orphaned ARIA roles (Homepage)**
Identify the element with `aria-required-parent` violation and either wrap it in the correct parent element or remove the ARIA role.

**P2 — Fix Homepage link-name violation**
Audit icon-only links and add `aria-label` or visually-hidden text.

**P3 — Cache Login and category pages at CDN edge**
Login TTFB of 372ms vs Homepage's 31ms indicates these are server-rendered without CDN caching. Move to stale-while-revalidate or edge caching for the shell; personalize client-side.

**P3 — Defer non-critical third-party scripts**
Move all ad pixels (Reddit, Nextdoor, Taboola, Snapchat, Yahoo, Bing) to fire post-LCP via `requestIdleCallback` or GTM trigger delay. Quantum Metric and Monetate can load after first user interaction.
## Recent history

- [[2026-07-03-homepage-www.skechers.com-walker]] — 8/10 (2026-07-03)
- [[2026-07-03-site-journey-walker]] — 4/10 (2026-07-03)
- [[2026-07-02-site-journey-walker]] — 4/10 (2026-07-02)

