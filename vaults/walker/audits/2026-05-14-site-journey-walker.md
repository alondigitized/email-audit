---
slug: 2026-05-14-site-journey-walker
type: site
date: 2026-05-14
persona: walker
score: "4/10"
previous_score: "4/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-4, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 4/10 (prev 4/10) · **Type:** Site journey · **2026-05-14**
## Full review
---

## Walker Miles — Skechers.com Mobile Journey Review
**Date: May 14, 2026 | Yesterday's Score: 4/10**

---

## 1. Executive Summary

Skechers is doing the right things in the right places — Hands Free Slip-ins front and center, a clean men's menu, readable text, fat touch targets on the size grid, and a search engine that actually understands "comfort shoes." But the single most important page in the entire shopping journey — the cart — is a blank white screen. Dead. Nothing. I tapped "Add to Cart," got kicked up to a size-selector, and when I went to check my cart, I got an empty page with no product, no total, no checkout button. That's a conversion killer. The rest of the experience is holding steady from yesterday, but the cart regression is serious.

---

## 2. Business Impact Score: **4/10**

Same score as yesterday, and I'm being generous. Navigation improved. Search improved. Cart is broken. A working cart is table stakes — without it, none of the upstream work matters.

---

## 3. What's Working

**Hands Free Slip-ins hero placement.** The very first thing I see is a man in casual clothes wearing slip-ins with "HANDS FREE Slip-ins GLIDE-STEP" in big bold text. That's me. That's exactly what I came for. Good call leading with the product.

**BOGO deal is persistent and prominent.** "BOGO 50% OFF Applied at Cart" stays in that blue banner across every single page. I don't have to hunt for the deal. It's there on the homepage, on the product page, on the search page. That's how you build purchase confidence.

**Men's navigation menu is excellent.** Full-screen slide-out with huge tap targets. "Hands Free Slip-ins," "Wide Fit," "Extra Wide Fit" right there in plain sight below the fold. "Comfort Technologies" as its own category — that's speaking my language. Back and X buttons are easy to hit. No fumbling.

**Size selector is done right.** The grid layout (7.0 through 14.0) with individual boxes is large enough to tap without squinting. No tiny dropdowns. Clean validation with the "Please select a size" warning. This part of the product page actually works well.

**Search for "comfort shoes" is solid.** 1,368 results, leading with Slip-ins Contour Foam - Cozy Fit, "Also in Wide" called out right under the product name. That's exactly the right answer to that search query.

**Product page pricing and deal are clear.** $100.00, "Buy 1 Get 1 50% OFF Applied at Cart" right under the price. I don't have to do math or read fine print.

---

## 4. What's Weak

**Cart is a blank white screen — critical failure.** Step 8 rendered nothing. Completely empty page. No items, no total, no checkout, no error message, no spinner. From my perspective I have no idea if my shoe is in there or not. This is a regression from whatever was happening yesterday and it's the single biggest problem on the site today.

**Login step produced no login experience.** Step 3 shows the exact same homepage I was already on — no login modal, no login page, no "Welcome back, Walker" confirmation. Either the login silently succeeded (unlikely since the cart counter stayed at 0 the whole time), or the login flow didn't trigger at all. Either way, I have no feedback that I'm logged in. The account icon doesn't change, no name appears, nothing feels personalized.

**Zero personalization throughout.** Assuming I was logged in, nothing on the site adjusted for me. Homepage defaulted to the "Women" tab, not "Men." No "Welcome back" message. No "Pick up where you left off" on the product I'd presumably viewed before. My purchase history, size, or width preferences are invisible.

**"No Reviews" on a $100 shoe is a trust gap.** I'm a 62-year-old deciding between Skechers, Hoka, and Brooks. I need to read what other people — ideally other guys my age — say about how this shoe holds up after three months. Zero reviews is a red flag that sends me to Amazon to check reviews there, and then I might just buy it there.

**Cushioning and arch support not mentioned on the product page.** The visible section of the product detail shows name, price, and deal. The two things I actually care about — cushion depth and arch support — are not visible without scrolling. Those should be in the first screen of content, not buried.

**Homepage defaults to Women.** The hero and the category tab strip both default to Women when I land. I'm a man. This is a small annoyance but every extra tap matters on a phone.

---

## 5. Recommendations

1. **Fix the cart page immediately.** This is P0. Blank cart = no revenue. Whatever JavaScript failure, render error, or session issue is causing this needs to be diagnosed and resolved today. Smoke test this on real devices after every deploy.

2. **Confirm login state visually.** Show "Hi Walker" or a filled account icon with a green dot. If the login failed, show me that too. Silent auth states create distrust.

3. **Move cushioning and arch support above the fold on PDPs.** I scroll slowly and carefully. If "Air-Cooled Memory Foam" or "Arch Fit" isn't on screen one, I'm already mentally moving on to Hoka's site.

4. **Add review social proof or import from a third party.** If this is a new SKU with no reviews, use a "similar styles" review aggregation or surface reviews from a prior year's model. Don't show me five empty stars.

5. **Default the homepage tab to Men for logged-in male accounts.** Or personalize the hero carousel. This is low-hanging fruit.

6. **Add a wide-fit badge/filter entry point earlier.** It's in the men's menu and on the category page, but not on the homepage. Put "Shop Wide Fit" in the hero banner or as a quick-link chip — that's a high-signal comfort purchase trigger for my demographic.

---

## 6. Bottom Line

Skechers knows its comfort story and is telling it in the right visual language — the slip-ins feature is front and center, the navigation is clean, the deal is persistent. But right now the site can't close a sale. The cart is broken. If I had actually found a shoe I liked today, I would have hit a blank page and bounced. Fix the cart, confirm the login state, and add social proof to the product page — those three changes alone would move the needle meaningfully. Everything else is polish.

**Today's Score: 4/10** — No regression in navigation or discovery, but the cart failure is a hard ceiling on this score. Fix it and you're in the 6-7 range.

---

## 7. Evidence

### Step 1 — Homepage
Blue BOGO banner at top, then the Skechers header with search/account/cart icons and MENU. Hero image shows a man and woman with "HANDS FREE Slip-ins GLIDE-STEP" front and center — immediately relevant to me. "SHOP NOW" button is wide and easy to tap. Below the hero: Women / Men / Kids' / Recently Viewed tabs, but **Women is the default selection**, not Men. A minor irritation but worth noting. Text is large enough to read without zooming.

### Step 2 — Dismiss Popups
The banner rotated from the apparel sale message to "Free Shipping with Skechers Plus — Join Now for free." No intrusive modal popup appeared — no email capture overlay, no location prompt, nothing blocking the page. That's actually a relief. Clean experience here.

### Step 3 — Log In
Screenshot shows the exact same homepage, unchanged. No login form, no confirmation, no indication I'm authenticated. The cart counter still shows 0. Whatever happened here, I got no feedback from it. If I'd logged in, I'd expect to see my name or some acknowledgment. I got nothing.

### Step 4 — Men Category
Full-screen slide-out menu. Large, widely spaced items: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories. Below those: **Hands Free Slip-ins, Wide Fit, Extra Wide Fit** listed as direct shortcuts. This is excellent — "Comfort Technologies" as a nav item tells me the brand gets it. Touch targets are generous. Very easy to use one-handed.

### Step 5 — Men > Shoes (Hands Free Slip-ins)
Landed right on the Hands Free Slip-ins filtered page within Men > Shoes. Breadcrumb confirms navigation path. Filter pills at top: Wide Fit, Extra Wide Fit, Medium Fit (partially cut off). 278 results. Free pickup toggle and Filter/Sort controls present. The first two shoe thumbnails are loading. Clean and focused — this is the right destination for someone like me.

### Step 6 — Product Detail (Glide-Step Pro Vexel)
"MEN'S" label, clear product name, $100.00 price, BOGO deal repeated. "No Reviews" is prominently displayed which is a trust problem. The Hands Free Slip-ins badge appears on the product image. Photo shows a clean navy shoe. Left/right swipe arrows for more images. What I don't see: cushioning specs, arch support information, weight, or any lifestyle copy. This is above-the-fold real estate being wasted.

### Step 7 — Add to Cart
Size grid is well-designed — 13 size options in a 5-column grid, boxes are large enough for comfortable tapping. Red "Please select a size" warning is clear and well-placed. QTY dropdown shows 1. "Ship it" and "Check in-store availability" options below. "ADD TO CART" button is full-width, high-contrast blue, pinned to the bottom of the screen. However: the cart icon in the header still shows 0, suggesting a size was never selected before the screenshot, meaning the cart was never actually populated.

### Step 8 — View Cart
**Completely blank white page.** Nothing rendered. No products, no totals, no "Your cart is empty" message, no error, no loading spinner. This is a failed page load or a JavaScript crash. From my perspective: I tapped to see my cart and got nothing. I would assume the site broke and either try to reload (risking losing everything) or just give up and check Amazon. This is the most damaging single screen in the entire journey.

### Step 9 — Search "Comfort Shoes"
"COMFORT SHOES" heading, 1,368 results. Leading results are Slip-ins Contour Foam - Cozy Fit, shown in both Women's and Men's variants side by side. "Also in Wide" is surfaced right below the product name — a meaningful signal for comfort shoppers. Multiple color swatch options visible. Filter and Sort controls accessible. This search actually works well and the results are highly relevant to what I'd be looking for.

---

## Technical Audit

## Technical Summary

Eight-step mobile journey audited. Primary concerns: View Cart renders a broken document (missing `<title>` and `lang`), Kasada's bot-detection fingerprinting endpoint is self-rate-limiting on every tested page, and 20+ third-party scripts fire unconditionally on load. TTFB is healthy across most steps; View Cart is an outlier at 140ms. LCP and CLS data were not captured.

---

## Accessibility

**15 violations across 3 pages.**

**Homepage (8 violations):**
- `aria-required-parent` [critical] — an ARIA role is used outside its required parent container. Likely a dynamic widget (carousel or menu) rendering roles without the required wrapper.
- `landmark-main-is-top-level`, `landmark-no-duplicate-main` [moderate] — two `<main>` elements exist. Monetate or GTM injection is likely inserting a second `<main>` into the DOM.
- `heading-order` [moderate] — heading hierarchy skips levels (e.g., h1 → h3).
- `landmark-complementary-is-top-level`, `landmark-unique`, `region`, `aria-allowed-role` [moderate/minor] — structural landmark misuse consistent with nested `<aside>` elements inside `<main>`.

**View Cart [serious — blocking for compliance]:**
- `document-title` [serious] — `<title>` element is empty or absent. Source confirms the cart page is either server-erroring (see 429 below) or rendering an unhydrated shell.
- `html-has-lang` [serious] — `<html>` has no `lang` attribute. Confirms the cart is serving a different document than other pages (no `lang="en"` in the HTML snapshot).
- `landmark-one-main`, `page-has-heading-one` [moderate] — no `<main>` or `<h1>` present, consistent with a bare error/shell response.

**Search page (3 violations):** Duplicate `<aside>` and landmark structure issues, same pattern as Homepage.

---

## SEO

- **View Cart `<title>` is missing** — if Googlebot follows a cart link (e.g., shared cart URL), it indexes an untitled page.
- **Heading order violations on Homepage** — crawlers use heading hierarchy for content structure; gaps weaken topical signal.
- **Duplicate `<main>` on Homepage** — injected by Monetate or GTM; this creates ambiguous content boundaries for crawlers.
- No `robots` meta or canonical issues visible from the provided source samples.

---

## Performance

| Step | TTFB | Notes |
|---|---|---|
| Homepage | 27ms | Good. 20+ async third-party scripts still fire. |
| Log In | 37ms | Acceptable. |
| Men category | 37ms | `creativecdn.com` script loaded **twice** in this page's `<head>`. |
| Men > Shoes | 26ms | Good. |
| Product detail | 26ms | Good. |
| Add to Cart | 26ms | Good. |
| View Cart | **140ms** | 5× slower than surrounding pages. Coincides with a 429 on `/cart/`. |
| Search | 28ms | Good. |

**Third-party script audit (from `<head>` source):**
20+ scripts fire on every page load, including: TikTok pixel (2 files), Google Tag Manager, 4× GTM `gtag/destination` destinations, Bing Ads, Reddit pixel, Quantum Metric, Impact, Bloomreach, Monetate **v2 and v3 simultaneously** (`se.monetate.net/js/2/` and `se.monetate.net/js/3/` both present), Pinterest, Yahoo/Verizon (loaded twice), Snapchat, Taboola, Nextdoor, Stape CDN, WebFont Loader from cdnjs.

**Duplicate and redundant loads identified:**
- `tags.creativecdn.com/dhGobFICKSkk6J9nvQPw.js` — loaded twice on the Men category page.
- `s.yimg.com/wi/ytc.js` — two identical `<script>` tags on Homepage and Log In.
- Monetate v2 + v3 both active simultaneously — version conflict risk.

**Placeholder production credential:**
- `G-1234567890` appears as a live GTM `gtag/destination` ID across all pages. This is a placeholder GA4 property ID sending real user data to a dummy property (or an unowned one).

---

## Mobile Optimization

- **`--vh` CSS custom property** set via inline `style` on `<html>` (e.g., `--vh: 6.640000000000001px`). This is a JavaScript-based mobile viewport height workaround for older iOS Safari. Modern alternative is the `dvh`/`svh`/`lvh` CSS units, now supported in iOS 16+. The precision artifact (`6.640000000000001px`) suggests floating-point accumulation from repeated JS recalculation.
- No `<meta name="viewport">` visible in the truncated source, but its presence is implied by the rendered `--vh` value — needs confirmation in full source.
- No mobile-specific issues identifiable from HTML structure alone without LCP/CLS data.

---

## Console & Network Errors

**429 rate-limiting — Kasada bot protection (5 occurrences):**
```
https://www.skechers.com/149e9513-01fa-4fb0-aad4-566afd725d1b/
  2d206a39-8ed7-437e-a3be-862e0f06eea3/fp?x-kpsdk-v=j-1.2.412
```
This is Kasada's device fingerprinting endpoint (`/fp`). The 429s indicate the Kasada SDK is hitting its own rate limit — likely because the automated test session triggered bot heuristics, causing Kasada to throttle the fingerprint submission loop. In a real user session under high traffic or after a bot flag, this would block the Kasada challenge from completing, potentially blocking cart and checkout flows downstream.

**429 on `/cart/` (1 occurrence):**
The cart page itself returned 429. Combined with the broken document (`<title>` and `lang` missing), the cart is likely serving a Kasada challenge page or CDN error page rather than the actual cart — explaining the degraded accessibility findings for that step.

**CORS error — Stylitics outfit widget:**
```
Access to CSS stylesheet at 'https://web-assets.stylitics.com/style.css?...'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header
```
The Stylitics CDN is not returning a CORS `Access-Control-Allow-Origin` header for cross-origin stylesheet requests from `skechers.com`. This blocks the outfit styling widget from rendering its styles. Stylitics is a third-party vendor — this requires a fix on their CDN configuration, but Skechers should be reporting it to them.

**`ERR_FAILED` (1 occurrence):** Likely the cascading failure from the blocked Stylitics CSS load.

---

## Recommendations

**Priority 1 — View Cart document integrity:**
The cart page is serving an incomplete document under bot-detection pressure. Confirm whether the 429 on `/cart/` is Kasada blocking the request before the SFCC response. If so, Kasada's challenge page must include `<title>`, `lang`, and a `<main>` — challenge pages should not serve bare HTML shells.

**Priority 2 — Kasada fingerprint retry loop:**
The SDK is retrying the `/fp` endpoint and hitting self-imposed rate limits. Review Kasada configuration for retry backoff settings. Excessive retries on the fingerprint endpoint may degrade real user sessions on slow connections.

**Priority 3 — Remove `G-1234567890` GA4 destination:**
A placeholder property ID is active in production GTM across all pages. Audit the GTM container for all `gtag/destination` tags and remove or replace any test/placeholder IDs.

**Priority 4 — Deduplicate third-party scripts:**
- Remove the duplicate `creativecdn.com` load on the Men category page.
- Remove the duplicate `s.yimg.com/wi/ytc.js` tags.
- Resolve the Monetate v2/v3 dual-load — run one version only.

**Priority 5 — Stylitics CORS:**
File a ticket with Stylitics to add `Access-Control-Allow-Origin: https://www.skechers.com` (or `*`) to their CDN responses for `web-assets.stylitics.com`.

**Priority 6 — Homepage landmark structure:**
Audit Monetate and GTM injection points that insert a second `<main>` element. Injected content should use `<section>` or `<div>`, not landmark roles.

**Priority 7 — Replace `--vh` workaround:**
Migrate to `dvh`/`svh` CSS units for viewport height on mobile. Eliminates the JS recalculation loop and the floating-point precision artifact.
## Recent history

- [[2026-05-13-homepage-www.skechers.com-walker]] — 9/10 (2026-05-13)
- [[2026-05-13-site-journey-walker]] — 4/10 (2026-05-13)
- [[2026-05-11-site-journey-walker]] — 4/10 (2026-05-11)

