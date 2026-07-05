---
slug: 2026-07-05-site-journey-walker
type: site
date: 2026-07-05
persona: walker
score: "4/10"
previous_score: "4/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-4, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 4/10 (prev 4/10) · **Type:** Site journey · **2026-07-05**
## Full review
---

# Walker Miles — Skechers.com Mobile Journey Review
**Date:** July 5, 2026 | **vs. Yesterday:** 4/10

---

## 1. Executive Summary

Walked the full Skechers mobile journey today and honestly, it's a mixed bag that ends on a sour note. The promotional messaging is loud and clear, the Men's navigation drawer is one of the better things on the whole site, and landing me directly on a Hands Free Slip-ins page with 319 options felt right. But three things drag this down hard: the homepage still opens on a Womens tab even though I'm a logged-in male customer, the cart page loaded as a completely blank white screen — meaning I couldn't actually buy anything — and when I searched "comfort shoes," the first results served up were women's shoes. Three strikes on the things that matter most: personalization, checkout, and search. This site is still not working *for* me.

---

## 2. Business Impact Score: 4/10

**Same as yesterday. No improvement.** The cart failure alone is a conversion-killing bug. A customer who gets to Add to Cart and then hits a blank white page doesn't call support — they close the tab and go to zappos.com.

---

## 3. What's Working

**BOGO deal is impossible to miss.** The patriotic red-white-blue BOGO 50% OFF banner dominates the homepage fold. I may not love all the flash, but I understand the deal immediately without reading fine print. It auto-applies at cart — that's smart, because I'd forget a code.

**Men's navigation drawer is clean.** Big, legible menu items with good tap spacing: Shoes, Shop by Activity, Comfort Technologies. Hands Free Slip-ins, Wide Fit, Extra Wide Fit are surfaced as quick links *without* requiring a sub-tap. That's exactly what I want — get me to wide/slip-in shoes fast.

**Hands Free Slip-ins category page is well-structured.** Fit filters (Wide Fit, Extra Wide Fit, Medium Fit) are prominent blue buttons right at the top — no hunting. "319 results" tells me there's real inventory. The breadcrumb "Men > Shoes" is readable.

**Product name and price are large and clear.** The Contour Foam - Cozy Fit America page leads with bold product title and $95.00 in plain sight. The Members BOGO reminder on the PDP is a nice reinforcement of the deal.

**Size grid is easy to tap.** The individual size boxes (8.0–12.0) are a comfortable size, well-spaced. I could hit my size without squinting.

**Error message worked correctly.** When the system tried to add without a size selected, the red "Please select a size" message appeared clearly. That's the right behavior.

---

## 4. What's Weak

**Cart page is completely blank.** This is a severity-1 bug. After going through the whole journey — browsing, finding a shoe, hitting Add to Cart — the cart page loaded as pure white. Nothing. No product, no price, no checkout button. The purchase is dead. This is the single biggest issue on the site today and it's the same class of failure that should have been caught yesterday.

**Homepage defaults to Womens tab, logged-in male customer.** I'm a man. I'm logged in. The site knows this. But the homepage hero still tabs to "Womens" first, and the "Mens" tab is sitting right next to it unused. This isn't a small thing — it signals the site doesn't know who I am the moment I land.

**Login step showed zero personalization.** After logging in, I was back at the homepage with no greeting, no "Hi Walker," no personalized recommendations, and the cart still showed 0. If I'm a Skechers Plus member, where's my member experience?

**Search "comfort shoes" returned women's items first.** I typed "comfort shoes" — as a man on a men's shopping mission — and the first two results were labeled "Women's." 1,432 results with no gender filtering applied. That's not a search result, that's a haystack.

**Only 3 reviews on the product page.** The Contour Foam - Cozy Fit America has 5 stars but only 3 reviews. That's not enough social proof to justify a $95 purchase. I want to see what other men my age think about the cushioning and fit before I commit.

**Popup dismissal was invisible.** Step 2 was supposed to dismiss a popup, but what I saw was just a banner rotation — the promotional text changed from "Extra 15% OFF Sale Styles" to "25% OFF Apparel." If there was a modal, it wasn't captured. If there wasn't, the step is misleading about what friction exists.

**No arch support or cushioning callouts above the fold on PDP.** The product page for a $95 slip-in shows the shoe photo and the price but doesn't surface "Contour Foam" cushioning details or arch support specs without scrolling. Those are my buying triggers — they should be visible without a scroll.

---

## 5. Recommendations

**Fix the cart — this week, not next sprint.** A blank cart page is a full stop on revenue. This needs an emergency fix regardless of what else is in the queue.

**Apply gender filter to search for logged-in users.** When I search "comfort shoes" as a logged-in male, the results should default to Men's. This is a simple personalization layer that would immediately improve relevance.

**Default to Men's tab for male accounts on homepage.** If the account has a gender signal, use it. This one change makes the first impression feel like the site knows me.

**Surface cushioning/arch support callouts on PDP above the fold.** Add one line — "Air-Cooled Memory Foam" or "Arch Fit insole" — directly below the product title. Don't make me scroll to find the reason I'm buying.

**Add a post-login confirmation state.** Even a small "Welcome back, Walker" or the account icon updating to show my initials would confirm I'm actually logged in and build trust that my cart and points are attached.

**Seed more reviews on hero products.** 3 reviews on a $95 featured shoe is a red flag. If the catalog is thin on reviews, prioritize UGC collection on slip-ins specifically — that's the category where comfort trust matters most.

---

## 6. Bottom Line

The site knows what I want — slip-ins, wide fit, comfort tech — and the navigation infrastructure to get me there is decent. But the experience breaks down at the exact moments that matter: landing (wrong gender tab), trust-building (3 reviews), and transaction (blank cart). Yesterday's score was 4/10 and today matches it. The cart bug is not new if it existed yesterday — that's a persistent conversion kill that should alarm anyone looking at the checkout funnel numbers. Fix the cart, fix search gender defaulting, and this score moves up quickly. Right now it's a site that *almost* works.

---

## 7. Evidence

### Step 1 — Homepage
I landed on the Skechers homepage. The BOGO 50% OFF top banner was the first thing I noticed — good, that's the deal of the day and it's unmissable. Below that, a "Skechers Plus Exclusive! Extra 15% OFF" secondary banner. Then four quick-tap categories: Slip-ins, Sandals, Arch Fit, BOBs — all reasonable choices for me. The big patriotic BOGO hero image took up most of the screen. **Problem:** The bottom tab row shows "Womens / Mens / Recently Viewed" with Womens active. I'm a male customer. The site opened on the wrong gender. Phone use was fine — text was large, banners were clear — but the gender default stings immediately.

### Step 2 — Dismiss Popups
The screen looked nearly identical to Step 1. The top sub-banner had rotated from the SALE15 code message to "Limited Time Only! 25% OFF Apparel." No visible modal popup appeared in this screenshot — nothing to X out or dismiss. If a popup was shown and already gone, it didn't leave friction. If this step was supposed to show a modal and it didn't appear, that's a missed capture. Either way, no friction experienced here, but also no personalization moment.

### Step 3 — Log In
Post-login, I was returned to the same homepage view. The SALE15 banner is back. Cart still shows 0. No name, no greeting, no "Hi Walker." The account icon in the header didn't visually change to confirm I'm logged in. As a 62-year-old, I'd genuinely wonder: *did that actually work?* The site gave me no confirmation signal. This is a trust gap.

### Step 4 — Men Category
The slide-out nav drawer opened cleanly for MEN. Large bold labels: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories — each with a right-chevron for drill-down. Below, three no-chevron quick links: Hands Free Slip-ins, Wide Fit, Extra Wide Fit. This is genuinely good mobile nav. Touch targets are big, the hierarchy is logical, and my comfort-first categories (slip-ins, wide fit) are surfaced without sub-navigation. Easy to use on a phone. This is the best screen in the journey.

### Step 5 — Men > Shoes (Hands Free Slip-ins)
Landed on the Hands Free Slip-ins listing with the heading prominent and three blue fit-filter buttons immediately below: Wide Fit, Extra Wide Fit, Medium Fit. "319 results" was visible. A "Free pickup at Set Location" toggle was present (I'd ignore this — I'm not driving to a store for that feature). Filter and Sort options accessible. Two product tiles started loading with "Exclusive" badges. The page felt useful and relevant — this is exactly where I want to be. Easy navigation, relevant filters, no confusion. Good.

### Step 6 — Product Detail (Contour Foam - Cozy Fit America)
The product page opened with "MEN'S" label, the full product name in large bold text, and $95.00 clearly priced. The 5-star rating was displayed but with only 3 reviews — that number stopped me. For $95, I want 50+ reviews, not 3. The "Members Get Buy 1, Get 1 50% OFF in Cart" line was a good reinforcement of the deal. The patriotic red/white/blue shoe photo was high quality and holiday-appropriate given it's July 4th weekend. What I didn't see above the fold: any mention of cushioning specs, arch support, or what "Contour Foam" actually means for my feet. Those are my buying triggers and they're below the scroll.

### Step 7 — Add to Cart
Scrolled down to the size/cart section. Size grid 8.0 through 12.0, clearly laid out in rows — tap-friendly boxes. Quantity dropdown defaulted to 1. When an add-to-cart was attempted without a size, a red "Please select a size" warning appeared — clear, readable, correct behavior. The large blue "ADD TO CART" button was easy to find and tap. The Skechers Plus pitch (Free Shipping, Free Returns) just above the button was a helpful reminder of membership value. This section worked well.

### Step 8 — View Cart
**Complete failure.** The cart page was a blank white screen. No header, no product, no price, no checkout button, no error message — just white space. After successfully building toward a purchase, I hit a wall. A real customer — me — would have no idea if the item was added, if there's a cart, or what to do next. I'd assume the site broke, close the tab, and not come back today. This is the most critical bug in the entire journey. No score improvement is possible while this remains broken.

### Step 9 — Search "comfort shoes"
The search returned 1,432 results for "comfort shoes" — that's a big number and feels credible. But the first two results displayed were both labeled "Women's": *Contour Foam - Cozy Fit Pure Comfort* ($75, Women's) and *Relaxed Fit: Glide-Step Comfort* ($65, Women's). I'm a logged-in male customer who just spent 10 minutes browsing men's slip-ins. The search engine either isn't using my account gender or it's sorting women's items higher for this query. Either way, I'm immediately looking at shoes that aren't for me. Relevant query, irrelevant results. Friction score: high.

---

**Overall: 4/10 — No change from yesterday. Cart remains broken. Search gender relevance remains broken. Both are fixable this week.**

---

## Technical Audit

## Technical Summary

Skechers.com runs on **Salesforce Commerce Cloud (SFCC/Demandware)**, confirmed by `demandware.static` script paths. The mobile journey shows a functioning e-commerce platform with several notable infrastructure issues: a bot-protection rate-limiting loop that blocks the cart, a CORS misconfiguration for a third-party styling widget, a broken View Cart page (missing foundational HTML attributes), a duplicate analytics tag, and extremely heavy third-party script payloads across all pages.

---

## Accessibility

16 axe violations across 3 pages. Grouped by severity:

**Critical (1)**
- `aria-required-parent` (Homepage): ARIA role elements are orphaned from their required parent containers. Common cause: a slider or carousel component with `role="option"` or `role="listitem"` rendered outside the correct `role="listbox"` / `role="list"` wrapper.

**Serious (2) — both on View Cart**
- `document-title`: Cart page renders without a `<title>` element. Indicates a client-side render (CSP shell or SPA hydration) where the page title is never injected into `<head>`.
- `html-has-lang`: `<html>` tag on cart page has no `lang` attribute. All other pages have `lang="en"` — this page is likely a different template or rendered path that doesn't inherit the standard shell.

**Moderate (10)**
- `heading-order` (Homepage): Heading hierarchy skips levels (e.g. `h1` → `h3`). Common with promotional banner components that use semantic heading tags for visual styling rather than document structure.
- `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique` (Homepage): Multiple `<main>` elements detected. Likely caused by a modal or overlay rendered as a sibling `<main>` rather than inside a dialog.
- `landmark-complementary-is-top-level` (Homepage, Search): `<aside>` elements nested inside `<main>` or other non-root containers.
- `landmark-one-main`, `page-has-heading-one` (View Cart): Cart page has no `<main>` and no `<h1>` — consistent with the `<title>`/`lang` failures; this is a structurally incomplete page render.
- `region` (Homepage, Search): Non-landmark content exists outside any landmark region.

**Minor (3)**
- `aria-allowed-role` (Homepage, Search): Elements have `role` values invalid for their tag (e.g. `role="presentation"` on a non-presentational element).

---

## SEO

- **View Cart missing `<title>`**: Googlebot indexing a cart URL (if crawlable) would get a titleless page. Cart should be `noindex` via `<meta name="robots">` or `X-Robots-Tag` header; absence of either compounds the issue.
- **View Cart missing `lang`**: Language signal absent; affects i18n-aware crawlers and multilingual search ranking signals.
- **No structural issues observed on indexed pages** (Homepage, category, product): `lang="en"` present, titles presumably populated (not captured in truncated HTML but no axe violation fired for those pages).

---

## Performance

**TTFB by step:**

| Step | TTFB | Assessment |
|---|---|---|
| Homepage | 28ms | CDN cache hit |
| Men > Shoes | 30ms | CDN cache hit |
| Search | 32ms | CDN cache hit |
| View Cart | 132ms | CDN or edge cache |
| Product detail / Add to Cart | 164ms | Acceptable origin |
| Log In | 478ms | Cache miss / auth bypass |
| Men category | 478ms | Cache miss / session-scoped |

The 478ms TTFB on Log In and Men Category is a 17x regression from the homepage. These pages likely bypass CDN cache due to session cookie presence or authenticated context, hitting SFCC origin directly. The SFCC origin is slow without cache warming. This is a known SFCC architectural constraint but represents a real conversion funnel degradation.

**Third-party script payload** (observed across all pages): 20+ async third-party scripts load on every page — TikTok Pixel (2 scripts), Google Tag Manager (multiple destinations), Pinterest, Quantum Metric, Impact CDN, Creative CDN, Bloomreach, Bing, Yahoo, Monetate (2 instances + custom), PulseInsights, Tune/Go2SDK, Snapchat (category pages), Reddit, Stape CDN, Facebook Events, Nextdoor, Taboola, WebFont Loader. This is a substantial render-blocking and main-thread contention risk on mobile, especially on mid-range devices with limited CPU.

**Yahoo ytc.js loaded twice**: Exact duplicate `<script async="" vice-managed-src="https://s.yimg.com/wi/ytc.js">` appears twice in the HTML source on multiple pages. Wasted network request and double-firing of Yahoo analytics events. This is a tag management misconfiguration (likely in the CMP/TrustArc vice-managed layer).

**LCP/CLS not captured** in this run — incomplete picture. Given the script load volume and SFCC's typical image delivery patterns (non-optimized for Core Web Vitals without significant configuration), LCP is expected to be above the 2.5s threshold on mobile without CDN image optimization in place.

---

## Mobile Optimization

- **`--vh` CSS custom property**: Set to `6.640000000000001px` (= 664px / 100 units). This is a JavaScript-injected viewport height fix for mobile browsers where `100vh` includes the browser chrome. Correct pattern but the floating-point precision (`6.640000000000001` vs `6.64`) indicates a raw `window.innerHeight / 100` calculation without rounding — cosmetically harmless but sloppy.
- **Font loading**: Mulish in 6 weights (n3–n8) via WebFont Loader. All 6 weights load on every page regardless of which weights are used on that specific page. No `font-display: swap` was observable in the truncated source — if absent, invisible text during font load (FOIT) on slow connections.
- **No `<meta viewport>` issues detected** from the HTML samples provided.
- **Script payload on mobile**: The same ~20 third-party scripts that load on desktop load on mobile with no differentiation. No evidence of mobile-specific script gating.

---

## Console & Network Errors

**Kasada bot-protection 429s (5 occurrences on fp endpoint):**
```
429 /149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp?x-kpsdk-v=j-1.2.543
```
The UUID path with `x-kpsdk-v` is the **Kasada** bot protection SDK fingerprinting endpoint. It is being rate-limited within the same session. This indicates either: (a) the test session (automated browser) is triggering Kasada's bot heuristics, causing it to throttle the telemetry calls, or (b) a misconfigured rate limit on the Kasada endpoint itself that fires for real users. The 429s generate console noise on every page navigation.

**Cart 429 — critical conversion blocker:**
```
429 https://www.skechers.com/cart/
```
The cart page itself returned HTTP 429 during the test session. If this is Kasada-triggered (bot-flagged session blocked from cart access), it means a user who triggers Kasada heuristics (e.g., fast browsing, low-entropy device fingerprint) gets silently blocked from purchasing. The response should redirect to a CAPTCHA or human verification page, not a bare 429 that leaves the user stuck with no recovery path.

**Stylitics CORS failure:**
```
CORS policy blocked: https://web-assets.stylitics.com/style.css
```
Stylitics is an outfit/style recommendation widget. Their CDN's CORS headers do not include `Access-Control-Allow-Origin: https://www.skechers.com`, or Skechers is loading the stylesheet cross-origin without a matching server-side CORS configuration on Stylitics' end. The widget renders without its stylesheet — broken UI for any page using it. This requires Stylitics to add the origin to their CORS allowlist, or Skechers to proxy the stylesheet through their own CDN.

**ERR_FAILED (1):** One resource failed with a network-level error (not HTTP status). Likely a blocked request from a consent-gated script (`vice-managed-src` attribute) that fired before consent was established, or a request aborted by Kasada.

---

## Recommendations

1. **Cart 429 / Kasada bot loop** — Highest priority. Audit Kasada configuration for rate limit thresholds on the `/fp` endpoint and cart access. Add a human verification redirect (challenge page) instead of returning raw 429 on `/cart/`. Verify whether real mobile users in low-signal environments (shared IPs, VPNs, headless detection) are hitting this in production — Quantum Metric sessions would show abandoned carts following 429s.

2. **Fix View Cart page template** — The cart page is missing `<html lang>`, `<title>`, `<main>`, and `<h1>`. This is a complete structural failure. Audit whether this page is rendered via a different SFCC template path or a client-side-only SPA transition that doesn't set head metadata. Add `noindex` as an immediate mitigation while fixing the template.

3. **Remove duplicate Yahoo ytc.js tag** — Remove one of the two identical `vice-managed-src="https://s.yimg.com/wi/ytc.js"` entries from the TrustArc/CMP tag configuration. This is a tag manager fix, not a code deploy.

4. **Stylitics CORS** — File a ticket with Stylitics to add `https://www.skechers.com` to their CDN's CORS allowlist for `web-assets.stylitics.com`. As a fallback, self-host or proxy the stylesheet through `www.skechers.com/static/`.

5. **TTFB on authenticated pages** — The 478ms TTFB on Log In and Men Category suggests CDN cache bypass for session-authenticated users. Evaluate SFCC's "page designer" caching configuration for category pages — authenticated product listings can often still be CDN-cached with cookie-keyed cache variants (Vary: Cookie scoped to session token only). This is an SFCC infrastructure configuration change.

6. **Homepage ARIA landmark violations** — Fix the duplicate `<main>` element. Modals and overlays should render inside `<dialog>` or a scoped container, not as sibling `<main>` elements. Fix `<aside>` nesting to be a direct child of `<body>`. These are template-level changes in the SFCC storefront cartridge.

7. **Font weight audit** — Profile which Mulish weights are actually used per page and load only those. WebFont Loader supports subset loading per page via the `google.families` config. Alternatively, migrate to `@font-face` with `font-display: swap` and preload only the 1–2 weights needed above the fold.
## Recent history

- [[2026-07-04-site-journey-walker]] — 4/10 (2026-07-04)
- [[2026-07-03-homepage-www.skechers.com-walker]] — 8/10 (2026-07-03)
- [[2026-07-03-site-journey-walker]] — 4/10 (2026-07-03)

