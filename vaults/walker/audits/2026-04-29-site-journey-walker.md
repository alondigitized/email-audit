---
slug: 2026-04-29-site-journey-walker
type: site
date: 2026-04-29
persona: walker
score: "4/10"
previous_score: "4/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-4, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 4/10 (prev 4/10) · **Type:** Site journey · **2026-04-29**
## Full review
---

# Walker Miles — Skechers.com Mobile Journey Review
**Date:** April 29, 2026 | **Yesterday's Score:** 4/10

---

## 1. Executive Summary

The navigation improvements are real — the Men's menu is clean, Hands Free Slip-ins has prominent placement, and the product detail page is genuinely readable on a phone. But this trip ends in a wall. The cart page is completely blank. A white screen where my order summary should be. That's not a minor hiccup — that's the one page that turns a browser into a buyer, and it just doesn't exist. Search comes back showing me women's shoes. And I never saw a login screen at all. Score holds at **4/10**. The bones are better but the checkout is broken.

---

## 2. Business Impact Score: 4/10

| Area | Score |
|---|---|
| Homepage & First Impression | 7/10 |
| Navigation (Men's) | 8/10 |
| Product Discovery | 7/10 |
| Product Detail Page | 7/10 |
| Add to Cart Flow | 6/10 |
| Cart Page | 0/10 — blank |
| Search | 4/10 |
| Personalization (logged-in) | 3/10 |

**No change from yesterday.** Strong middle, catastrophic end.

---

## 3. What's Working

**Slip-ins are front and center.** The homepage hero section leads with the "HANDS FREE Slip-ins" wordmark in big, bold type. I didn't have to hunt for it. That's good. A guy like me lands there and immediately feels like this site is for him.

**The Men's menu is the best screen in the journey.** Clean list layout, full-width tap targets, large readable text. "Comfort Technologies" and "Hands Free Slip-ins" are both right there as shortcuts. Whoever designed this menu understands that I don't want to drill through five sub-menus.

**BOGO 50% OFF is visible on every screen.** That sticky banner at the top never lets me forget there's a deal. As a price-conscious Plus member, I noticed it on every single page. That repetition works.

**The size selection grid is functional.** Large enough boxes, clear "Please select a size" warning in red, and a big blue ADD TO CART button pinned to the bottom of the screen. That's the right call — I shouldn't have to scroll to find the buy button.

**Product detail text is readable without zooming.** The Larzo product name is rendered big, the price ($110.00) is clear, and the BOGO callout under it is prominent. I didn't have to squint once.

---

## 4. What's Broken / Weak

**The cart is a blank white page.** Step 8 — complete failure. No items, no total, no checkout button, no error message. Just white. This is a show-stopper. If this is what a real customer saw, they'd close the app and go to Amazon. This alone keeps the score at 4.

**I never saw a login screen.** Step 3 shows the exact same homepage with the Spring Apparel Sale banner. Either the login screen wasn't captured or something failed silently. The cart icon still shows "0" throughout — there's no visual confirmation I'm logged in as a Plus member anywhere on screen. No "Hi Walker," no Plus points balance, nothing. That loyalty recognition is table stakes for keeping a 62-year-old returning customer feeling valued.

**Search ignores that I'm a man.** I searched "slip in" — 1,023 results, first two shown are both labeled Women's. If I'm logged in as a male customer, why am I seeing women's shoes first? A simple gender filter applied to search defaults would fix this instantly. 1,023 results with no personalization is overwhelming.

**One star, one review on a featured product.** The Larzo shows a 1-star rating from 1 reviewer. If that's the product Skechers is pushing at the top of the Hands Free Slip-ins category for men, that single visible rating could quietly kill conversions. I'd hesitate.

**The popup "dismiss" step was a non-event.** Step 2 just swapped the promo banner from "25% OFF Apparel" to "Get Mom a Gift She'll Love." There was no real popup to dismiss — just a banner rotation. Not a friction point, but it means the journey script may have been testing something that wasn't actually there.

---

## 5. Recommendations

**Fix the cart page immediately.** This is P0. A blank cart means zero conversion from any browser session that made it that far. Test on real mobile browsers — this looks like a JavaScript render failure, not a content problem.

**Show me I'm logged in.** After login, put my first name or "Plus Member" in the header. Even a tiny "Hi Walker" in the account icon tooltip would make the experience feel personal. Right now there is zero signal that the site knows who I am.

**Filter search by account gender.** A logged-in male customer searching "slip in" should default to men's results. This is a one-line configuration change that would materially improve relevance for every logged-in user.

**Suppress or address the 1-star review.** Either don't lead the category with a product that has a single 1-star review, or solicit more reviews before featuring it prominently.

**Keep the Men's menu as-is.** This is genuinely good. Don't touch it.

---

## 6. Bottom Line

The site has leveled up its navigation and product pages — a 62-year-old can actually find Slip-ins without frustration, which is real progress. But right now the shopping funnel has a hole at the bottom: the cart doesn't render. Until that's fixed, every other improvement is theater. Fix the cart, show me I'm logged in, and stop showing women's shoes when I search. Three fixes, meaningful score jump.

**Score: 4/10** — Same as yesterday. Improvements in discovery offset by a broken cart.

---

## 7. Evidence — Step by Step

### Step 1 — Homepage
Landed on a clean page. BOGO 50% OFF banner locked at the top — hard to miss. Promo strip below it pushing 25% off apparel. The hero image shows two celebrities (looks like Brooke Burke and a man, labeled with names I couldn't quite read) sitting casually in Skechers. Below the fold, a big blue "HANDS FREE Slip-ins" section takes up the full width. Text sizes are comfortable, no zooming needed. The Slip-ins placement here is the best thing on the site — it's exactly what I came for and it's right in my face. Touch targets on the nav icons (search, account, cart, menu) look appropriately spaced. **Good start.**

### Step 2 — Dismiss Popups
The screenshot looks nearly identical to Step 1 except the promo banner switched from the Apparel Sale to "Get Mom a Gift She'll Love." No modal overlay, no interstitial, no cookie banner visible. If there was a popup, it was already gone by the time this captured. Not a friction point — if anything, Mother's Day messaging showing up during my Slip-ins shopping trip is mildly irrelevant to me but harmless. **Non-event.**

### Step 3 — Log In
This screenshot looks the same as the homepage — Spring Apparel banner, same hero image. The login experience itself was not captured. The cart badge shows "0" which is consistent with either not being logged in or being logged in with an empty cart. No "Welcome back, Walker" confirmation visible anywhere. I have no idea if I'm actually logged in as a Plus member. **Missing/unclear — concerning.**

### Step 4 — Men Category
This is the best screen in the journey. A clean, full-screen menu drawer:
- MEN header at top
- Shoes → (with right arrow)
- Shop by Activity →
- Comfort Technologies →
- Collections →
- Collaborations →
- Clothing & Accessories →
- Then as quick-tap shortcuts: **Hands Free Slip-ins**, Wide Fit, Extra Wide Fit

Every item takes up a full-height row. Text is large and black on white. The chevron arrows are clear. Back button top-left, X top-right. "Comfort Technologies" is exactly the kind of category a guy my age cares about — good that it's at the top-level menu, not buried. And "Hands Free Slip-ins" as a standalone shortcut below the main categories is thoughtful. I can get there in one tap. **Best screen of the journey.**

### Step 5 — Men > Shoes (Hands Free Slip-ins)
Landed on a well-structured category page. Page title "Hands Free Slip-ins" is large and bold. Brief description explains the Heel Pillow technology — written in plain English, not jargon. Width filter pills (Wide Fit, Extra Wide Fit, Medium Fit) are prominent and tappable. "273 Results" count gives me a sense of what's here without being overwhelming. Filter and Sort buttons are at a comfortable size. The "Free pickup at Set Location" toggle is a nice touch for in-store pickup, though I'd need to tap it to use it. Product grid is just starting to appear at the bottom of the screenshot. **Solid page.**

### Step 6 — Product Detail (Arch Fit Glide-Step Pro - Larzo)
Product name is large, readable, properly labeled as MEN'S. Price of $110.00 is prominent. The "Buy 1, Get 1 50% OFF! Applied at Cart" note is right under the price — clear incentive. Large product photo takes up most of the screen, with swipe arrows on the sides for more angles. The Hands Free Slip-ins badge is visible on the shoe image. One issue: the rating shows 1 star from 1 review. That single data point is going to make a cautious shopper like me hesitate. I want to see more social proof before dropping $110. **Good layout, weak social proof.**

### Step 7 — Add to Cart (Size Selection)
Scrolled down to the add-to-cart section. Size grid displays well — 5 sizes per row, boxes are large enough to tap without fat-fingering. Half sizes are included (7.5, 8.5, 9.5, etc.). The "Please select a size" warning is clearly visible in orange-red — I like that it tells me what to do rather than just silently failing. Shipping and in-store pickup options are explained with clean iconography. The big blue "ADD TO CART" button is sticky at the bottom of the screen — I don't have to scroll to find it. One small issue: I notice the cart badge in the header shows "0" at this point, suggesting I'm either not logged in or the session reset. **Functional, clear.**

### Step 8 — View Cart
**Complete failure.** The screenshot is a solid white rectangle. Nothing renders — no cart items, no subtotal, no checkout button, no error message, no "your cart is empty" state, nothing. Just blank. This is the most critical page in the entire purchase flow and it doesn't exist. If I experienced this as a real customer after selecting a shoe I liked, I would assume the site was broken and leave. No conversion is possible from this state. **Catastrophic — P0 bug.**

### Step 9 — Search "slip in"
The search results page header shows "SLIP IN" in large text with 1,023 results below it. Filter and Sort options are present. But the first two products visible are both labeled **Women's** — "Skechers Slip-ins: BOBS Skip Cute - Keep It Sweet" (white casual shoe) and "Skechers Slip-ins: Glide-Step Sole" (green athletic, labeled Women's). If I'm logged in as a male customer, this is the wrong answer. 1,023 results with no default gender filter applied means I have to do extra work to find men's shoes. The search query "slip in" is a strong intent signal — Skechers knows I've been browsing men's Slip-ins all session. This result set ignores that context entirely. **Relevant results exist, but personalization is absent.**

---

## Technical Audit

## Technical Summary

8-step mobile journey (Homepage → Login → Men category → Men > Shoes → PDP → Add to Cart → View Cart → Search). TTFB is fast on most pages but spikes at Men > Shoes (101ms) and View Cart (145ms). LCP and CLS data was not collected, leaving Core Web Vitals incomplete. The most severe issues are: a Kasada bot-detection loop generating six 429s including one on `/cart/`, the View Cart page rendering without document-level HTML metadata (missing `<title>`, `lang`, `<main>`), a CORS failure on a third-party styling widget, and extreme third-party script bloat across every page.

---

## Accessibility

**16 axe violations across 3 pages.**

**Homepage — 9 violations**
- `aria-required-parent` **(critical)**: An element with a role that requires a parent container (e.g., `role="listitem"` without `role="list"`) is rendered outside its required ancestor. Likely a JS-injected widget or carousel item rendered outside expected DOM context.
- `link-name` **(serious)**: One or more `<a>` elements lack discernible text. Candidates: icon-only nav links, social media links, or image links with no `alt` or `aria-label`.
- `landmark-no-duplicate-main` + `landmark-main-is-top-level` **(moderate)**: Multiple `<main>` elements present, at least one nested. Suggests Monetate or another injection tool is wrapping page content with an extra structural container.
- `landmark-complementary-is-top-level` + `landmark-unique` + `region` **(moderate)**: `<aside>` is nested inside another landmark; duplicate landmark roles; content outside any landmark. Consistent with injected ad/personalization widgets not respecting ARIA document structure.
- `heading-order` **(moderate)**: Heading levels are non-sequential (e.g., `h1` → `h3`). Breaks screen reader outline navigation.
- `aria-allowed-role` **(minor)**: An element has a `role` attribute that is not permitted on that element type.

**View Cart — 4 violations (critical document-level failures)**
- `document-title` **(serious)**: `<title>` is empty or absent. The cart likely renders as a client-side overlay/drawer without updating `document.title`. This is also a direct SEO signal failure.
- `html-has-lang` **(serious)**: The `<html>` element is missing the `lang` attribute on the cart page. Contradicts all other pages where `lang="en"` is present — confirms the cart is a separate document or iframe that is not receiving the same base template.
- `landmark-one-main` + `page-has-heading-one` **(moderate)**: No `<main>` and no `<h1>`. Structurally empty page from an AT perspective.

**Search "slip in" — 3 violations**
- Same landmark/region pattern as Homepage: nested `<aside>`, duplicate landmarks, content outside landmarks. Likely the same injected widget source.

---

## SEO

- **View Cart missing `<title>` and `lang`**: If Googlebot crawls the cart URL directly, it receives a document with no title and no language declaration. Even if noindexed, the missing metadata is a symptom of a broken server-side render path.
- **Heading hierarchy broken on Homepage**: Broken `h1`→`h3` skips affect how crawlers interpret page structure and content hierarchy.
- **Duplicate GTM ID `G-1234567890`**: A placeholder/test Google Analytics property ID is firing in production alongside the real `G-XZTV9LQ9DQ`. This pollutes Analytics data and suggests the tag container has a stale tag that was never removed.
- **Protocol-relative Monetate URL** (`//se.monetate.net/js/2/...`): Legacy pattern; works but is a code quality signal. Not a direct SEO issue.

---

## Performance

**TTFB (collected):**

| Step | TTFB |
|---|---|
| Homepage | 26ms |
| Login | 32ms |
| Men category | 32ms |
| Men > Shoes | **101ms** |
| PDP | 29ms |
| Add to Cart | 29ms |
| View Cart | **145ms** |
| Search | 27ms |

- Men > Shoes at 101ms and View Cart at 145ms are the outliers. The View Cart spike correlates with the 429 on `/cart/` — Kasada is rate-limiting the cart endpoint, adding latency before the server responds.
- **LCP and CLS were not captured** for any step. This is a significant gap: without LCP you cannot assess the primary user-perceived load metric, and without CLS you cannot confirm layout stability on a font-heavy, widget-injected page.

**Third-party script load:**
Every page loads 20+ third-party scripts in `<head>`: TikTok (×3), Pinterest, Google Tag Manager (×3 destinations + main), Bing Ads, Reddit Ads, Snapchat, Facebook Pixel, Nextdoor, Taboola, Impact Radius, Quantum Metric, Bloomreach, Monetate (×2 instances), Pulse Insights, TrustArc, CreativeCDN, Stape. While all are `async`, each opens a new TCP/TLS connection, saturates the connection pool, and competes for main thread time during parse. This is a primary LCP and TTI risk on mobile.

**WebFont Loader (JS-based fonts):**
`cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28/webfontloader.js` loads Mulish via JavaScript. This causes FOUT (flash of unstyled text) and means font rendering depends on JS execution completing — slower than `<link rel="preload">` + CSS `@font-face`.

**Duplicate Monetate instances:**
Both `se.monetate.net/js/3/...custom.js` and `//se.monetate.net/js/2/...entry.js` are loaded on every page. Two separate Monetate script versions executing concurrently risks double-firing experiment assignments and adds redundant script weight.

---

## Mobile Optimization

- **`--vh` CSS variable** (`style="--vh: 6.64px"` on `<html>`): This is the standard JS-computed viewport height fix for iOS Safari's dynamic toolbar. Correct pattern.
- **WebFont Loader FOUT**: On slow mobile connections, the Mulish font (5 weights: n3–n7) loading via JS will cause visible text reflow. Should be replaced with `<link rel="preload" as="font">` and CSS `@font-face` with `font-display: swap`.
- **No evidence of `viewport` meta tag** in the provided HTML excerpts (truncated). Cannot confirm `width=device-width, initial-scale=1` is present, but absence would be a critical mobile rendering failure.
- **TrustArc consent banner**: Inline `<style>` blocks injected by TrustArc appear before any other `<head>` content, blocking the render-critical path slightly.

---

## Console & Network Errors

**429 Rate Limiting — Kasada bot mitigation (5 hits):**
```
https://www.skechers.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp?x-kpsdk-v=j-1.2.386
```
This is Kasada's client-side fingerprinting endpoint (`/fp`). The GUID path segment is the Kasada integration ID. Five 429s on this endpoint in a single session means either: (a) the Kasada JS SDK is retrying aggressively on failure, (b) the fingerprint token is expiring and re-requesting faster than the rate limit allows, or (c) the automated test environment itself is being flagged as a bot, causing Kasada to throttle. In a real user session, repeated 429s here can block bot-protected downstream requests.

**429 on `/cart/`:**
```
429 https://www.skechers.com/cart/
```
The cart endpoint itself is returning 429. This is either Kasada blocking the cart page render for a session it has flagged, or a separate rate limit on the cart API. This directly explains the elevated TTFB (145ms) and the broken View Cart HTML metadata — if Kasada intercepts before the SFCC storefront renders, the response may be a Kasada challenge page rather than the real cart, which would explain missing `<title>` and `lang`.

**CORS block — Stylitics:**
```
Access to CSS stylesheet at 'https://web-assets.stylitics.com/style.css?...' blocked by CORS policy: No 'Access-Control-Allow-Origin' header
```
Stylitics CDN is not returning the correct CORS headers for `https://www.skechers.com`. The outfit/styling widget will render without its stylesheet. This is a Stylitics-side CDN misconfiguration that needs to be reported to the vendor and potentially worked around by self-hosting the stylesheet or proxying through Skechers' own CDN.

**ERR_FAILED:**
One resource failed with a network-level error (not an HTTP status), likely a blocked or cancelled request from the CORS failure chain above.

---

## Recommendations

**P0 — Fix immediately**

1. **Investigate Kasada 429 loop**: Work with Kasada support to determine why `/fp` is rate-limiting within a single session. If the SDK version `j-1.2.386` has a known retry bug, upgrade. Ensure the cart endpoint (`/cart/`) is not behind a Kasada rule that blocks first-party sessions — a 429 on the cart is a direct conversion blocker.

2. **Fix View Cart document structure**: Whether cart renders as a separate page or a client-side overlay, `document.title`, `<html lang>`, `<main>`, and `<h1>` must be set on navigation. If using a SPA drawer pattern, use the History API and update `document.title` on open; if it's a separate URL, fix the SFCC template.

3. **Fix `aria-required-parent` (critical)**: Locate the component emitting orphaned ARIA role elements (likely a carousel, tab list, or menu) and wrap it in the required parent role container.

4. **Fix `link-name` (serious)**: Audit icon links and image links for missing `aria-label` or `alt` text. Prioritize nav, social, and CTA links.

**P1 — Fix this sprint**

5. **Remove duplicate GTM tag `G-1234567890`**: Audit the GTM container and remove any test/placeholder property IDs firing in production.

6. **Escalate Stylitics CORS failure**: Contact Stylitics to add `Access-Control-Allow-Origin: https://www.skechers.com` to their CDN response headers. As a workaround, proxy the stylesheet through `www.skechers.com/on/demandware.static/...`.

7. **Collect LCP and CLS**: The audit has no LCP or CLS data. Instrument with `web-vitals` JS library or run Lighthouse CI on the full funnel — especially PDP (image-heavy) and Homepage (carousel). These are Google ranking signals.

8. **Replace WebFont Loader with native font loading**: Switch Mulish to `<link rel="preload" as="font" crossorigin>` + CSS `@font-face { font-display: swap }`. Eliminates FOUT and removes the webfontloader.js dependency.

**P2 — Plan for next cycle**

9. **Deduplicate Monetate scripts**: Consolidate to a single Monetate entry point. Two script versions (`/js/2/` and `/js/3/`) loading concurrently is redundant and risks experiment double-counting.

10. **Third-party script audit**: Conduct a tag audit via GTM. 20+ third-party scripts on every page is abnormal even for enterprise retail. Consolidate pixels under GTM where possible, defer non-critical scripts (loyalty, social pixels) until after `load` event, and set a third-party script budget per page.

11. **Fix heading hierarchy on Homepage and Search**: Ensure `h1` → `h2` → `h3` order is maintained. Likely requires coordinating with the CMS/SFCC template and any injected Monetate content experiments that insert headings mid-page.
## Recent history

- [[2026-04-28-site-journey-walker]] — 4/10 (2026-04-28)
- [[2026-04-27-site-journey-walker]] — 4/10 (2026-04-27)
- [[2026-04-26-site-journey-walker]] — 4/10 (2026-04-26)

