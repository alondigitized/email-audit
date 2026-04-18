---
slug: 2026-04-13-site-journey-walker
type: site
date: 2026-04-13
persona: walker
score: "3/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-3, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 3/10 · **Type:** Site journey · **2026-04-13**
## Full review
---

## 1. Executive Summary

Tough walk today. The Men's navigation and product detail pages continue to hold up, but the cart completely failed to load — I got a blank white screen after adding a shoe. That's a checkout-killing bug. On top of that, the homepage still greets me with a Mother's Day campaign despite being a logged-in male Plus member, and search returned Women's shoes at the top of 1,012 "slip in" results. The site knows who I am but isn't acting like it.

**Today's Score: 3/10 — Regression from yesterday's 4/10**

---

## 2. Business Impact Score: 3/10

The cart is broken. That's a direct revenue block. A shopper who got to size selection and hit Add to Cart landed on nothing. Combined with zero personalization for a logged-in male member and search surfacing Women's products first, Skechers is leaving real money on the table with their core comfort demographic.

---

## 3. What's Working

- **BOGO 50% OFF banner** is persistent and visible from the very first screen — I noticed it immediately and it's a good hook.
- **Men's navigation menu** (Step 4) is clean, well-spaced, and readable. "Hands Free Slip-ins" appears as a direct link below the fold without needing to drill into Shoes first. That's genuinely helpful for someone like me who knows what I want.
- **Product detail page** (Step 6) is solid — large product image, star rating, review count, price, and the BOGO callout all visible without scrolling. Text is readable.
- **Size grid** (Step 7) has reasonably sized tap targets — the boxes are big enough. The "Please select a size" error prompt in red is clear and prevents a frustrating null add.
- **Hands Free Slip-ins category page** (Step 5) leads with the right headline and a good description of the technology. 263 results with width filters (Wide Fit, Extra Wide Fit) up front shows they understand their customer.

---

## 4. What's Weak

**Critical:**
- **Cart is a blank white page.** Step 8 shows a completely empty screen — no cart items, no UI, nothing. This is a checkout-ending failure. I added a shoe, I was ready to buy, and I got a white wall. This is worse than yesterday.

**Significant:**
- **Homepage is Mother's Day all the way.** As a 62-year-old man who's logged in, the entire hero is "The Mother's Day Shop" with a woman and child in pink shoes. No men's content visible at all above the fold. I feel like I landed on the wrong site.
- **Login had no visible effect.** Step 3 screenshot looks identical to Steps 1 and 2 — same hero, same "Get Mom a Gift She'll Love!" banner. No welcome message, no "Hi Walker," no loyalty points displayed. My Plus membership is invisible.
- **Search is not personalized.** Searching "slip in" returned 1,012 results but the first two visible products are both labeled Women's. I'm a logged-in male member — Men's slip-ins should surface first.
- **Popup/banner strip** cycles between "Get Mom a Gift She'll Love!" and "Free Shipping with Skechers Plus Join Now for free" — that second one is odd since I'm already a Plus member. It's prompting me to join a program I'm in.

---

## 5. Recommendations

1. **Fix the cart immediately.** A blank cart page is a P0 bug. No logged-in or guest shopper should ever see a white screen after Add to Cart.
2. **Personalize the homepage for logged-in male members.** Show Men's hero content, Slip-ins, or a "Welcome back, Walker" module. The Mother's Day campaign can still exist — just not as the only thing above the fold for a male user.
3. **Show Plus membership status after login.** A simple persistent header element — points balance, member tier, free shipping confirmation — would make me feel recognized and reinforce loyalty.
4. **Filter search results by gender for logged-in members.** My account has purchase history. "Slip in" results should default to Men's, or at minimum put Men's products first with a gender toggle at top.
5. **The "Join Skechers Plus for free" banner shouldn't show to existing members.** Replace it with a points or rewards nudge instead.

---

## 6. Bottom Line

The bones are here — Men's navigation is clean, the Slip-ins category is right, the product page is readable. But the cart is broken and nothing about this experience felt like it knew me. A 62-year-old guy who's already a loyal Plus member and knows what he wants shouldn't be greeted with a pink Mother's Day campaign, shown Women's shoes in search, and then hit a blank wall when he tries to buy. **Score drops to 3/10 — a regression from yesterday's 4/10 driven entirely by the cart failure.**

---

## 7. Evidence

**Step 1 — Homepage**
Landed on a full-screen Mother's Day hero — woman and child, pink flowers, pink shoes. "The Mother's Day Shop / Get Mom a Gift She'll Love!" Persistent BOGO 50% OFF banner at very top (that part is good). No men's content visible. Not intuitive for me. Felt like the wrong door.

**Step 2 — Dismiss Popups**
Popup cleared fine — no modal friction. Sub-banner swapped to "Free Shipping with Skechers Plus Join Now for free." Easy enough to dismiss, but that Plus join message is confusing when I'm already a member.

**Step 3 — Log In**
Screenshot looks identical to the homepage — same Mother's Day hero, same banner. No visual confirmation of login, no welcome message, no loyalty status shown. Can't tell if I'm actually logged in from this screen. Zero personalization.

**Step 4 — Men's Category**
This is the best screen of the journey. Clean vertical menu, well-separated items, large enough text, no clutter. "Hands Free Slip-ins" is a direct tap right there in the list — I didn't have to hunt. Good muscle memory for repeat shoppers.

**Step 5 — Men's Shoes / Hands Free Slip-ins**
Category page is clear. Large "Hands Free Slip-ins" headline, decent description. Width filter buttons (Wide Fit, Extra Wide Fit, Medium Fit) are right at top — important for my demographic. 263 results is a healthy number. Filter and Sort by visible. Products start loading below. Good experience here.

**Step 6 — Product Detail**
Skechers Slip-ins: Max Cushioning Glide-Step at $115. Stars (4.5), 10 reviews, BOGO callout, and the Hands Free Slip-ins badge all visible. Product photo is large and clear. Text is readable without zooming. Add to Wishlist is there too. Solid page.

**Step 7 — Add to Cart**
Size grid is full (7.0–14.0), reasonably tappable boxes. Red "Please select a size" warning is clear — good guard rail. QTY dropdown present. Shipping options visible. Large blue ADD TO CART button is prominent at the bottom. This screen works well.

**Step 8 — Cart**
Completely blank white screen. Nothing loaded. No cart items, no subtotal, no checkout button, no error message. This is a critical failure — the transaction died here. Regression vs. yesterday.

**Step 9 — Search ("slip in")**
1,012 results returned — strong catalog. But first two visible products are both labeled "Women's." As a logged-in male member, Men's results should lead. Also "Also in Wide" callouts are visible and appropriate for my demographic — that's a small positive. But the Women's-first sort is a mismatch.

---

## Technical Audit

## Technical Summary

Audit covers 8 steps of a mobile purchase journey. TTFB is acceptable site-wide (34–129ms). LCP and CLS were not captured for any step, leaving the most impactful Web Vitals unmeasured. The page carries an exceptionally heavy third-party script payload (20+ vendors), has 30 axe violations including 4 criticals concentrated on the product page, and is experiencing active 429 rate-limiting on both the bot-detection fingerprint endpoint and the cart endpoint. A Stylitics widget integration is broken due to a CORS misconfiguration.

---

## Accessibility

**30 violations total. 4 critical, 5 serious, 17 moderate, 4 minor.**

**Critical (product page — View Product):**
- `aria-required-children`: ARIA role missing required child roles. Likely a custom widget (carousel, listbox) where the container role exists but child roles (`option`, `tab`, etc.) are absent.
- `aria-valid-attr-value`: One or more ARIA attributes have invalid values (e.g., `aria-controls` pointing to a non-existent ID).
- `button-name`: Buttons with no discernible text — icon-only buttons lacking `aria-label`.
- `image-alt`: `<img>` elements missing `alt` attributes on the product page. Unacceptable for product images.

**Serious:**
- `aria-dialog-name` (View Product): Modal/dialog rendered without `aria-label` or `aria-labelledby`. Screen readers cannot identify dialog purpose.
- `aria-input-field-name` (View Product): ARIA input fields (size/color selectors likely) have no accessible name.
- `color-contrast` (View Product): Text fails WCAG 2 AA 4.5:1 ratio.
- `link-name` (Homepage): Anchor tags with no text content and no `aria-label`.
- `link-in-text-block` (Men's Shoes): Inline links distinguished only by color — no underline or other non-color indicator.

**Structural/Landmark (Homepage, Men's Shoes, View Product):**
- Duplicate `<main>` landmark on Homepage (`landmark-no-duplicate-main`).
- `<main>` and `<header>` not at document top level — nested inside another element, likely a wrapper `<div>`.
- Multiple non-unique `<aside>` / complementary landmarks with identical accessible names.
- Page content outside any landmark region.

**Heading order** (Homepage): H-level skipped (e.g., H1 → H3), disrupting document outline for assistive tech.

---

## SEO

- `lang="en"` set on `<html>`. Correct.
- `--vh` CSS variable is set inline on `<html>` via JS, suggesting viewport height is computed dynamically. This does not affect indexability but means initial render depends on script execution.
- Third-party script count (20+) and use of `vice-managed-src` (TrustArc consent wrapper) means a subset of scripts are deferred behind consent. Consent-gated content will not be crawled by Googlebot if it requires user interaction to render.
- No structured data visible in the truncated HTML samples. Product schema (`Product`, `BreadcrumbList`, `ItemList`) is not confirmed present.
- The Bloomreach tracker (`br-trk-7927.js`) and Monetate (`entry.js`, `custom.js`) inject DOM content — if product/category content is rendered via these scripts, it may not be indexable.

---

## Performance

**TTFB (server response):**

| Step | TTFB |
|---|---|
| Homepage | 63ms |
| Log In | 34ms |
| Men's Category | 34ms |
| Men's Shoes | 44ms |
| View Product | 49ms |
| Add to Cart | 49ms |
| View Cart | 129ms ⚠️ |
| Search | 38ms |

View Cart at 129ms is the outlier; likely a server-side session/cart lookup. All others are fast.

**LCP and CLS: not collected.** These are the primary Core Web Vitals affecting Google ranking. Instrumentation must be fixed before this audit can be considered complete.

**Third-party script bloat (Homepage):**
The `<head>` loads 20+ third-party scripts before `</head>`, including:

- Google Tag Manager + 3 gtag destinations
- TikTok Pixel (3 scripts)
- Bing Ads, Reddit Ads, Pinterest, Yahoo YTC (×2), Snapchat, NextDoor, Taboola, Facebook
- Monetate (loaded via **two separate paths**: `se.monetate.net/js/3/...` and `se.monetate.net/js/2/...`)
- Bloomreach, Quantum Metric, Impact/Tune, CreativeCDN, Stape CDN
- WebFontLoader from `cdnjs.cloudflare.com`

**Duplicate scripts identified:**
- `s.yimg.com/wi/ytc.js` loaded **twice** on Homepage and Log In (both with `vice-managed-src`).
- `tags.creativecdn.com/dhGobFICKSkk6J9nvQPw.js` loaded **twice** on Men's Category.
- Monetate loaded via two different bundle paths simultaneously.

Even with `async`, this volume of third-party DNS lookups, TCP handshakes, and script parse time will materially impact TBT and TTI on mobile.

---

## Mobile Optimization

- `--vh: 6.640000000000001px` set as an inline CSS custom property on `<html>`. This is a standard workaround for the `100vh` mobile browser chrome issue (address bar height offset). The computed value (`6.64px = 1% of viewport height`) is being set by JS on load. This is acceptable but creates a FOUC risk if the script that sets it executes late.
- WebFont loading via WebFontLoader with FOUT management (`wf-loading` → `wf-active` class swap on `<html>`). The initial HTML snapshot shows `wf-loading` on Homepage but `wf-active` on subsequent pages, confirming fonts are cached after first load. However, WebFontLoader itself is loaded from a CDN (`cdnjs.cloudflare.com`) — an additional external dependency for font rendering.
- No `<meta name="viewport">` tag visible in the truncated HTML samples. This must be confirmed present; its absence would break all mobile rendering.

---

## Console & Network Errors

**429 Rate Limiting — Kasada Bot Protection:**
```
429 https://www.skechers.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp?x-kpsdk-v=j-1.2.308
```
This endpoint is the Kasada bot-detection fingerprinting beacon (`x-kpsdk-v` = Kasada SDK version `j-1.2.308`). It is firing 5 times and receiving 429 on every request. This means the automated test session is being flagged and rate-limited by Kasada. In a real user session, repeated 429s here can block cart/checkout flows if Kasada's challenge token is not successfully issued.

**429 on Cart:**
```
429 https://www.skechers.com/cart/
```
The cart page itself returned 429 during the audit. If this occurs for real users, it is a direct revenue-impact incident. Likely triggered by Kasada flagging the session after the fingerprint failures above.

**CORS Failure — Stylitics Widget:**
```
Access to CSS stylesheet at 'https://web-assets.stylitics.com/style.css?...' from origin 'https://www.skechers.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header
```
Two CORS failures (one CSS fetch, one XHR) on the Stylitics outfit widget. The Stylitics CDN (`web-assets.stylitics.com`) is not returning `Access-Control-Allow-Origin: https://www.skechers.com`. This is a configuration issue on the Stylitics side or missing CORS headers in the Skechers/Stylitics account setup. The widget will fail to render its stylesheet and data.

---

## Recommendations

**P0 — Active breakage:**
1. **Investigate Kasada 429s causing cart blocking.** Determine if bot-protection thresholds are triggering on legitimate high-traffic sessions. Coordinate with Kasada to review the rate-limit policy for the `/fp` endpoint.
2. **Fix Stylitics CORS.** Contact Stylitics support to add `https://www.skechers.com` to the allowed origins on `web-assets.stylitics.com`. Until resolved, the widget is non-functional.

**P1 — Critical accessibility (legal/compliance exposure):**
3. **Add `alt` text to all product images** on the product detail page.
4. **Add `aria-label` to all icon-only buttons** (e.g., add-to-cart, close, quantity controls).
5. **Label the size/color dialog** with `aria-labelledby` or `aria-label`.
6. **Fix ARIA role/children mismatches** — audit all custom components using `aria-required-children` roles.

**P2 — Measurement gap:**
7. **Instrument LCP and CLS collection.** Without these, Core Web Vitals ranking impact cannot be assessed. Use `PerformanceObserver` with `largest-contentful-paint` and `layout-shift` entry types, or confirm RUM tooling (Quantum Metric is loaded — verify it is capturing these).

**P3 — Script hygiene:**
8. **Remove duplicate scripts**: Yahoo YTC (×2 on every page), CreativeCDN (×2 on category), and deduplicate the two Monetate bundle paths.
9. **Audit third-party script necessity.** 20+ analytics/ad vendors on every page is abnormal. Consolidate via GTM tag firing rules and remove vendors not in active use.

**P4 — Landmark structure:**
10. **Fix `<main>` and `<header>` nesting.** These must be direct children of `<body>`, not wrapped in a container `<div>`. This is a single template-level fix that resolves multiple axe violations across all pages.
## Recent history

- [[2026-04-12-site-journey-walker]] — 4/10 (2026-04-12)
- [[2026-04-11-site-journey-walker]] — 4/10 (2026-04-11)
- [[2026-04-10-site-journey-walker]] — 4/10 (2026-04-10)

