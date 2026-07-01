---
slug: 2026-07-01-site-journey-walker
type: site
date: 2026-07-01
persona: walker
score: "4/10"
previous_score: "4/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-4, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 4/10 (prev 4/10) · **Type:** Site journey · **2026-07-01**
## Full review
Now I have everything I need. Here's my full review.

---

## 1. Executive Summary

Sixty-two years old, sore feet, phone in hand — I went looking for a comfortable slip-on from Skechers and the site gave me a mixed bag. The navigation menu is clean, the product page speaks my language, and the deal banners are impossible to miss. But three things broke my trust today: the site defaulted to Women's even after I logged in, the cart page loaded completely blank, and when I searched "comfort shoes" every result that came back was Women's. A brand that should know me by now doesn't seem to know me at all.

**vs. Yesterday (4/10):** No meaningful improvement. The blank cart is either a new regression or a persistent bug. Defaulting to Women's and gender-blind search are holdovers from before. Score holds flat.

---

## 2. Business Impact Score: 4/10

Same as yesterday. The add-to-cart flow broke before the sale could close, and the cart page failed to render. That's a direct revenue hole. Personalization gaps undermine the loyalty story entirely.

---

## 3. What's Working

**Deal visibility is excellent.** The BOGO 50% OFF banner is pinned to the top of every screen throughout the journey. I never had to wonder if there was a promotion — it followed me everywhere. For a points-holder like me who watches value, that's reassuring.

**Men's navigation menu is genuinely good.** The drawer that opens for Men is well-organized: Shoes, Shop by Activity, Comfort Technologies, Collections — all large text, well-spaced rows, easy to tap with a big thumb. "Hands Free Slip-ins," "Wide Fit," and "Extra Wide Fit" appear as quick-access links at the bottom without having to drill into subcategories. That's exactly what I want — no guessing.

**The product detail page hits my keywords.** "Max Cushioning Arch Fit 2.0," "Hands-Free Slip-ins" badge, 51 reviews, $135 price shown upfront, and the BOGO member benefit called out right below the price. That's everything I need to make a decision without scrolling into oblivion.

**Size grid on add-to-cart is readable.** Large tap targets on each size box (7.0 through 14.0). I can see my size without squinting. The full-width blue "ADD TO CART" button at the bottom is exactly right — big, obvious, no hunting.

**314 results in Hands Free Slip-ins.** Reassuring depth. The fit filters (Wide Fit, Extra Wide Fit, Medium Fit) appear as prominent buttons right at the top of the results — I can narrow to my fit without digging into a filter panel first.

---

## 4. What's Weak

**Cart page is completely blank.** Step 8 is a white screen. Nothing loaded. No product, no price, no checkout button. This is a conversion-ending bug. I had no idea if my shoe was in the cart or not. Cart badge still showed 0 in Step 7, which suggested the add may have failed before I even got there — probably because the width validation error was blocking the add.

**Width validation creates a confusing loop.** On the add-to-cart screen (Step 7), size 10.5 visually appeared selected (it had a border around it), but the red warning "Please select a size" was still showing. And a separate "Please select a width" warning appeared because I hadn't tapped MEDIUM or EXTRA WIDE yet. Two separate mandatory fields with two separate error states, but the visual design doesn't make the sequence obvious. At 62, if I think I picked my size and I still get a red error, I assume something is broken — not that I missed a second step.

**Homepage defaults to Women's even after login.** All three early screenshots — Homepage, Dismiss Popups, and Log In — show the "Womens" tab selected at the bottom. I'm logged in. Skechers knows my gender. This should default to Mens. It's a small thing that signals the system isn't paying attention.

**Search for "comfort shoes" returns Women's results.** Step 9: 1,405 results, but the two shown are both labeled "Women's." A logged-in male user searching "comfort shoes" should surface Men's results first, or at minimum have a visible gender filter pre-set to Men. Getting Women's clogs when I'm looking for my next walking shoe is a disorienting miss.

**Popup dismissal was invisible.** Step 2 shows what appears to be the same page as Step 1, just with a slightly different promo bar ("25% OFF Apparel" vs "Extra 15% OFF Sale Styles"). No actual popup was visible to dismiss. Either no popup appeared, or it was dismissed so fast it wasn't captured. Either way, the "Dismiss Popups" step produced no visible change — meaning any popup logic is a ghost step in the journey.

**No personalization signal in logged-in state.** Nowhere on the homepage, category page, or search results did I see "Welcome back, Walker" or "Your size" or "Based on your history." For a Skechers Plus member, the experience feels identical to an anonymous visitor.

---

## 5. Recommendations

1. **Fix the cart — today.** A blank cart page is an emergency. Whether it's a render failure or an add-to-cart API error, this needs to be triaged before anything else. Check if width validation blocking the add is the root cause.

2. **Make the width selection required BEFORE the size grid renders**, or clearly indicate the order of operations. "Step 1: Choose Width → Step 2: Choose Size" language would prevent the double-error confusion.

3. **Default to Men's tab based on account gender.** This is a one-line personalization fix with real impact. A returning male member should never land on Women's.

4. **Filter search results by account gender by default.** When a logged-in male searches "comfort shoes," surface Men's results first. Allow override, but don't require him to figure out why he's looking at women's clogs.

5. **Show a logged-in greeting or recent activity signal.** Even a "Hi Walker, back for more?" in the header would increase trust that the system knows me. The full experience currently feels anonymous.

---

## 6. Bottom Line

The shoes I was looking for exist on this site, the deal is clearly communicated, and the navigation to get there is solid. But I couldn't complete the purchase because the cart broke, and when I searched on my own the results ignored that I'm a man. Skechers Plus members deserve a site that remembers them. Right now it doesn't. Until the cart works and the gender defaulting is fixed, this is a broken pipeline, not a loyalty-building experience.

**Score: 4/10 — no change from yesterday.**

---

## 7. Evidence

**Step 1 — Homepage**
Landed on a clean page with a prominent BOGO 50% OFF sticky banner. Quick-nav tabs for Slip-ins, Sandals, Arch Fit, BOBs were right below the logo — exactly the comfort categories I care about. The hero banner occupied most of the screen ("Buy One, Get One 50% Off or 20% Off 1 Pair — Automatically Applied at Cart"). Readable, no zooming needed. Friction: the bottom tabs defaulted to "Womens." As a logged-in male, that default immediately puts me in the wrong aisle. No personalization visible.

**Step 2 — Dismiss Popups**
Looked nearly identical to Step 1 — same layout, same hero banner. The promo bar at top cycled to "25% OFF Apparel." No popup was visible to dismiss. Either no popup fired or it was pre-dismissed. No friction from a popup, but no evidence the dismiss step accomplished anything.

**Step 3 — Log In**
Page showed the same homepage view — BOGO banner, comfort categories, Women's tab still active. No visual confirmation of login success (no name, no greeting). If I hadn't known I was supposed to be logged in, I'd have no idea I was. Still on Women's tab. Not personalized.

**Step 4 — Men Category Menu**
The hamburger/MENU drawer opened a clean, well-structured list: MEN heading, then Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories — each with a right chevron for drilling deeper. Below those, without needing to expand: "Hands Free Slip-ins," "Wide Fit," "Extra Wide Fit" as direct links. Large font, generous row height, easy to tap. This is the best screen in the journey. Intuitive, fast, comfort-forward.

**Step 5 — Men > Shoes (Hands Free Slip-ins)**
Breadcrumb confirmed: Men > Shoes. Page title: "Hands Free Slip-ins." Prominent fit-filter buttons: Wide Fit, Extra Wide Fit, Medium Fit — large, easy to tap. "314 results" gives confidence in selection depth. Two product thumbnails visible with "Exclusive" tags. Filter and Sort controls present. The Free Pickup toggle was off. Felt relevant and organized. Slight friction: product names and prices weren't visible in the screenshot — had to scroll to see details.

**Step 6 — Product Detail**
Product name in large text: "Skechers Slip-ins: Max Cushioning Arch Fit 2.0 - Azusah." Four stars, 51 reviews. $135.00 price prominently displayed. "Members Get Buy 1, Get 1 50% OFF in Cart" right below the price — loyalty benefit surfaced at the right moment. Hands-Free Slip-ins badge visible. Image arrows for gallery browsing. This is a well-constructed PDP for my priorities. No zooming needed, comfort tech well-branded.

**Step 7 — Add to Cart**
Width selection showed MEDIUM and EXTRA WIDE as large buttons — good. But a red warning appeared: "Please select a width." Below that, a full size grid (7.0–14.0) with size 10.5 visually appearing selected (bordered box), yet a second red warning read "Please select a size." Two separate validation states, sequential dependency not communicated. I had to figure out I needed to select width first. Confusing for anyone, worse for a 62-year-old who thinks he already made a selection. The ADD TO CART button at the bottom is excellent — full width, large, blue. But the path to pressing it is muddier than it should be.

**Step 8 — Cart**
Completely blank white page. No products, no prices, no checkout button, no confirmation. The cart badge on the icon showed 0 in the prior step, which already suggested the add failed. The blank render confirms something broke — either the validation prevented the add and the cart page has nothing to show, or the cart page itself failed to load. This is a critical failure. I would have abandoned and gone to DSW.

**Step 9 — Search "comfort shoes"**
1,405 results returned — strong signal that the search engine understands the query broadly. But both visible results are labeled "Women's": "Relaxed Fit: Glide-Step Comfort" ($65) and "Skechers Slip-ins: Contour Foam - Cozy Fit Luxe Comfort" ($64.99–$88.00). I'm a logged-in male user. The first page of results should default to Men's or at minimum prompt me to filter by gender. Seeing Women's clogs when I'm looking for my next walking shoe is a trust-eroding miss. Search volume is there; relevance personalization is not.

---

## Technical Audit

## Technical Summary

Site runs on Salesforce Commerce Cloud (Demandware), confirmed by `/on/demandware.static/Sites-USSkechers-Site/` asset paths. Bot protection is via Kasada SDK (`x-kpsdk-v=j-1.2.522`). Third-party script payload is extremely heavy — 15+ distinct vendor origins loaded on most pages. The View Cart page exhibits document-level structural failures (missing `<title>`, no `lang` attribute) consistent with an improperly hydrated SPA shell or cart rendered as a detached document fragment. Kasada rate-limited both the fingerprinting endpoint and `/cart/` itself during the audit run, meaning the cart page could not fully load.

---

## Accessibility

**16 violations across 3 pages.**

| Severity | Violation | Page |
|---|---|---|
| Critical | `aria-required-parent` — ARIA role used outside required parent container | Homepage |
| Serious | `color-contrast` — foreground/background fails WCAG 2 AA minimum ratio | Homepage |
| Serious | `document-title` — `<title>` element is absent | View Cart |
| Serious | `html-has-lang` — `<html>` element missing `lang` attribute | View Cart |
| Moderate | `landmark-no-duplicate-main` — multiple `<main>` landmarks | Homepage |
| Moderate | `landmark-main-is-top-level` / `landmark-complementary-is-top-level` | Homepage, Search |
| Moderate | `landmark-unique` — duplicate landmark roles without distinguishing labels | Homepage, Search |
| Moderate | `landmark-one-main` — no `<main>` landmark present | View Cart |
| Moderate | `page-has-heading-one` — no `<h1>` element | View Cart |
| Moderate | `region` — content outside any landmark region | Homepage, Search |
| Minor | `aria-allowed-role` — `role` attribute invalid for element type | Homepage, Search |

**Priority items:** The View Cart violations (`document-title`, `html-has-lang`, `landmark-one-main`, `page-has-heading-one`) together indicate the cart is rendered without a proper top-level HTML document context — likely a SPA route that replaces body content without updating document-level metadata. This blocks screen reader orientation entirely on the cart step. The `aria-required-parent` critical on Homepage is a markup error that breaks ARIA tree structure for assistive technologies.

---

## SEO

- View Cart is missing `<title>` and `html[lang]`. While cart pages are typically `noindex`, this signals a systemic SPA hydration gap that could affect other routes.
- Heavy reliance on client-side JS for rendering (Demandware + Monetate personalization layer) risks crawl budget waste if Googlebot defers JS execution.
- `dns-prefetch` hints present for Monetate but no `<link rel="preconnect">` for any critical first-party or third-party origins visible in the sampled `<head>`.
- Duplicate `<script async src="https://tags.creativecdn.com/dhGobFICKSkk6J9nvQPw.js">` tag present on Men category page — tag manager misconfiguration injecting the same script twice.

---

## Performance

| Step | TTFB | Note |
|---|---|---|
| Homepage | 31ms | Good — edge-cached |
| Log In | 381ms | 12× spike — likely session/auth check bypassing cache |
| Men category | 381ms | Same 381ms pattern — personalization or A/B layer adding latency |
| Men > Shoes | 29ms | Edge-cached |
| Product detail | 32ms | Edge-cached |
| Add to Cart | 32ms | Edge-cached |
| View Cart | 142ms | Elevated — dynamic, not cacheable |
| Search | 32ms | Edge-cached |

LCP and CLS were not captured — these are the most user-impactful Web Vitals and should be instrumented in the test harness.

**Third-party script inventory (partial):** TikTok Pixel (2 files), Pinterest, Google Tag Manager, gtag (3 destination IDs), Bloomreach, Quantum Metric, Monetate (2 scripts), Impact, TaBoola, Nextdoor, Reddit, Facebook, Snapchat, Yahoo, Bing, Tune, PulseInsights, Stylitics, TrustArc, WebFontLoader. This volume of synchronous and async third-party requests creates significant main-thread contention on mobile networks regardless of TTFB.

**WebFont loading:** Uses `webfontloader.js` (async) to load Mulish in 6 weight variants (`n3`–`n8`). This causes FOUT on initial render until all variants resolve. The `wf-*-active` classes on `<html>` confirm this pattern.

---

## Mobile Optimization

- Custom `--vh` CSS variable (`style="--vh: 6.64px"`) is set inline on `<html>` — correct workaround for the iOS Safari 100vh bug. Value of `6.64px` suggests the JS calculates `window.innerHeight / 100`, which is standard.
- No `<link rel="preconnect">` for any third-party origins visible in sampled markup. On mobile, each new origin TCP+TLS handshake is expensive — 15+ origins means significant connection overhead.
- WebFontLoader loads 6 Mulish weights; on slow mobile connections, font swap events can cause layout shifts (contributing to CLS, which was not measured).
- No evidence of `<img loading="lazy">` or responsive `srcset` attributes in the sampled HTML — cannot confirm without fuller source, but should be verified on product listing and detail pages.

---

## Console & Network Errors

**429 Rate Limiting — Kasada fingerprinting (5 hits):**
`/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp?x-kpsdk-v=j-1.2.522`

Kasada's client-side SDK is detecting the headless browser environment and returning 429 to its own fingerprinting calls. This is expected bot-protection behavior during automated testing but means Kasada's challenge-pass token was never obtained, which cascades downstream.

**429 on `/cart/` (1 hit):**
The cart page itself returned HTTP 429. Kasada denied the session before the cart could render — the audit result for the View Cart step reflects a degraded/blocked page load, not the authentic user experience. This also means the View Cart accessibility violations may be artifacts of a failed page render rather than production markup.

**CORS block — Stylitics stylesheet:**
```
Access to CSS stylesheet at 'https://web-assets.stylitics.com/style.css?base=grid&theme=skechers&version=c797bcf720'
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header
```
Stylitics CDN is not returning CORS headers for stylesheet requests originating from `skechers.com`. The outfit/look widget will render unstyled or broken. This is a third-party configuration issue but directly degrades a product feature.

---

## Recommendations

1. **Fix View Cart document structure.** Add `<title>`, `html[lang]`, `<main>`, and `<h1>` to the cart route. If the cart is a SPA shell, ensure the document-level metadata is updated on route transition — not just body content.

2. **Fix `aria-required-parent` on Homepage.** Locate the element with an ARIA role that requires a parent role (e.g., `role="option"` without `role="listbox"` parent) and correct the markup.

3. **Fix `color-contrast` violation.** Identify the failing text/background pair — common culprit is light-grey placeholder or caption text on white. Adjust to meet WCAG 2 AA (4.5:1 for normal text, 3:1 for large text).

4. **Escalate Stylitics CORS failure.** Raise with Stylitics account team to add `Access-Control-Allow-Origin: https://www.skechers.com` on their CDN for the stylesheet endpoint.

5. **Remove duplicate script tag.** The `creativecdn.com` script is injected twice on Men category — audit the GTM container for duplicate tag triggers.

6. **Add `preconnect` hints** for the highest-priority third-party origins (GTM, Bloomreach, Monetate, TikTok) to reduce mobile connection overhead.

7. **Instrument LCP and CLS** in the test harness. TTFB alone is insufficient — missing vitals are the most actionable performance signals for a retail site.

8. **Exclude Kasada-protected routes from headless audits** or configure the test environment with a known-good session token to avoid cascading 429 failures that corrupt downstream page results (particularly cart).
## Recent history

- [[2026-06-27-site-journey-walker]] — 4/10 (2026-06-27)
- [[2026-06-26-homepage-www.skechers.com-walker]] — 7/10 (2026-06-26)
- [[2026-06-26-site-journey-walker]] — 4/10 (2026-06-26)

