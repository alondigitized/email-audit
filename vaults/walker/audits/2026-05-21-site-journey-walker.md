---
slug: 2026-05-21-site-journey-walker
type: site
date: 2026-05-21
persona: walker
score: "4/10"
previous_score: "4/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-4, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 4/10 (prev 4/10) · **Type:** Site journey · **2026-05-21**
## Full review
---

# Walker Miles — Skechers.com Mobile Journey Review
**Date:** May 21, 2026 | **vs. Yesterday:** 4/10

---

## 1. Executive Summary

Skechers has a decent mobile skeleton and the Men's navigation is genuinely better than average — "Hands Free Slip-ins" is one tap from the menu, which is exactly what I want. But the visit falls apart at the two moments that actually matter: the cart page loaded as a completely blank white screen (a dead-end I'd never recover from on my own), and the search for "comfort shoes" served me women's shoes first without asking who I am. Throw in a login that never visibly completed and a product with zero reviews, and this is a site that shows me potential while refusing to close the deal.

---

## 2. Business Impact Score: 5/10

**Up 1 point from yesterday's 4/10.** The men's navigation and BOGO prominence are genuine improvements over what I remember. But the blank cart is a critical regression that could cancel out all of it — if that's happening to real shoppers, Skechers is handing conversions to Hoka and New Balance.

---

## 3. What's Working

- **BOGO 50% Off is impossible to miss.** Blue sticky banner, top of every screen. At $88 a pair, that deal math sticks in my head.
- **Men's menu is clean and well-structured.** Large text, full-width tap targets, no clutter. "Hands Free Slip-ins," "Wide Fit," and "Extra Wide Fit" are right there as direct links — no hunting required.
- **"Comfort Technologies" is a menu category.** I don't always know the model name I want; navigating by what the shoe does is exactly how my brain works.
- **Hands Free Slip-ins page leads with fit filters.** Wide Fit, Extra Wide Fit, Medium Fit — right at the top, before results. 283 options is a lot but at least I can narrow it fast.
- **ADD TO CART button is pinned to the bottom of the product page.** Big, blue, full-width. I can't miss it even if my glasses are on the nightstand.
- **Memorial Day / BOGO deal is consistently surfaced** across multiple screens — that kind of repetition builds confidence that the deal is real.

---

## 4. What's Weak

- **Cart page is a blank white screen.** Step 8 rendered nothing. Not a loading spinner, not an error message — just white. If I hit that wall after selecting a shoe and a size, I'm gone. I'm not going to troubleshoot a broken website; I'm going to open Amazon.
- **Login never visibly completed.** Step 3 shows the same homepage I started on, still prompting me to log in for the Members reward. No "Welcome back, Walker" confirmation, no name in the header. Either the login failed silently or the screenshot caught a redirect — either way, I feel invisible.
- **Zero reviews on the product.** "No Reviews" in plain text next to five empty stars is the worst possible signal for a 62-year-old who trusts word-of-mouth over advertising. I don't buy shoes that nobody has vetted.
- **Search for "comfort shoes" returned women's products first.** Both visible results on the search page — 1,447 results — show Women's labels. I'm not logged in, so it doesn't know I'm a man, but it should default to relevance, not gender-wrong results. That's immediately disorienting.
- **Hero imagery skews 25 years too young.** The Red, White & Blue campaign features a young man and a young woman in casual fashion poses. Nothing on that homepage screen says "this brand understands a 62-year-old's knees." Hoka and New Balance show older active adults. Skechers doesn't.
- **Product image carousel limited in the initial viewport.** I see one shoe image with left/right arrows but no indication of how many photos exist or a 360 view. I want to see the heel collar and the insole before I spend $88.
- **"Please select a size" warning on Add to Cart** — the warning itself is fine, but the cart badge stayed at 0, meaning the flow never actually completed in this session. No confirmation, no cart count update.

---

## 5. Recommendations

1. **Fix the cart page immediately.** This is a P0 bug. A blank cart kills the entire purchase intent. Run a smoke test on mobile after every deploy.
2. **Apply gender filtering to search.** If the user navigated through Men > Shoes earlier in the session, "comfort shoes" search should default to Men's results. Cookie or session state should carry that signal.
3. **Surface social proof on zero-review products.** If a product has no reviews, show "Be the first to review" plus 3–4 expert or editorial callouts ("Podiatrist recommended," "As seen in Men's Health"). Empty stars are a conversion killer.
4. **Add a post-login confirmation.** A simple "Welcome back" toast or a name in the account icon after login reassures me the system recognized me — and motivates me to expect personalized recommendations.
5. **Show the arch support and cushioning specs above the fold on PDPs.** The BOGO badge is visible but the comfort story (Contour Foam, what that means for my arches) is not visible in the initial product viewport. That's the reason I'm here.
6. **Age the homepage hero.** One banner or carousel slide with an active adult 55–65 would signal relevance instantly. I'm more likely to trust a brand that looks like me.

---

## 6. Bottom Line

Skechers is closer than yesterday — the navigation bones are solid and the BOGO deal is well-executed. But a blank cart page is not a UX inconvenience, it's a lost sale. And when search hands me women's shoes on an unrecognized session, I feel like the site doesn't know me at all — which is exactly the opening Brooks or New Balance needs. Fix the cart, fix search defaults, put some reviews on products, and this site could actually compete for my foot. Right now it's a 5 out of 10 that's one bug fix away from being a real 7.

---

## 7. Evidence

### Step 1 — Homepage
**What I saw:** BOGO 50% Off banner pinned at top. Skechers logo, search, account, cart (showing 0), hamburger menu. Members-Only $5 Reward banner with a Login prompt. Horizontal quick-links: Slip-ins, Sandals, Arch Fit, BOBs (partially cut off). Hero image: patriotic Red/White/Blue campaign with a young man and young woman.

**Phone ease:** Navigation icons are reasonably sized. The horizontal quick-link row is slightly cramped — "Arch Fit" and "Slip-ins" labels are small enough that I might mis-tap.

**Friction:** Nothing says "men's comfort, 60+" to me. The hero models are 30 years younger than I am. I know I want Slip-ins but I'd have to scroll or tap to find them — they're in the nav strip but not the hero.

**Personalized?** Not logged in. Generic experience.

---

### Step 2 — Dismiss Popups
**What I saw:** The Members Reward banner rotated to "Shop Memorial Day Savings! 25% OFF Apparel." No modal popup appeared to dismiss — the overlay either wasn't triggered or was already gone.

**Phone ease:** No action required on my end.

**Friction:** Confusing as a "step" — nothing was visually dismissed. If there was a cookie consent or email capture popup that fired and was auto-dismissed, I never saw it. Slightly suspicious that something happened I didn't get to see.

**Personalized?** No.

---

### Step 3 — Log In
**What I saw:** The exact same homepage as Step 1 — Members-Only banner still showing "Login" as a link, account icon unchanged. No login form, no confirmation, no "Welcome back."

**Phone ease:** N/A — login page was never visibly reached.

**Friction:** High confusion. Did the login work? I have no idea. The cart still shows 0 and the account icon looks the same. I'd probably tap the account icon again to check, which wastes my time and tests my patience.

**Personalized?** No evidence of login success.

---

### Step 4 — Men Category
**What I saw:** Clean slide-out menu drawer. "MEN" header, then full-width rows with right-arrow chevrons: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories. Below those: direct links for Hands Free Slip-ins, Wide Fit, Extra Wide Fit.

**Phone ease:** Excellent. Touch targets are large, text is readable without zooming, no clutter. This is one of the best screens in the journey.

**Friction:** Minimal. "Comfort Technologies" as a navigation category is the right language for me. The direct shortcut to "Hands Free Slip-ins" without having to drill through subcategories is a genuine win.

**Personalized?** Not personalized, but the structure itself caters to my priorities.

---

### Step 5 — Men > Shoes (Hands Free Slip-ins)
**What I saw:** Breadcrumb "Men > Shoes." Page heading "Hands Free Slip-ins." Fit filter buttons immediately below: Wide Fit, Extra Wide Fit, Medium Fit (partially cut off — there are more). Toggle for free pickup (off). 283 results. Filter and Sort controls. Two product images starting to appear.

**Phone ease:** Good. Filter buttons are tappable. 283 results is a lot but the fit filters help narrow it.

**Friction:** No price filter or arch support filter visible without tapping into the full filter panel. I'd want to see "Under $100" and "Arch Support" as quick filter chips without extra taps.

**Personalized?** Not logged in, so no size pre-filtering or previous purchase data applied.

---

### Step 6 — Product Detail (Contour Foam - Cozy Fit Kiroh)
**What I saw:** MEN'S label, product name in bold, empty stars with "No Reviews" text, Add to Wishlist link, $88.00 price, red BOGO tag ("Buy 1, Get 1 50% OFF! Applied at Cart"), one product image of a white/tan slip-on.

**Phone ease:** Product name and price are clear. Image navigation arrows (< >) are small — I might have trouble tapping them accurately.

**Friction:** "No Reviews" is a trust killer for me. I will not spend $88 on a shoe that zero people have validated. The comfort story — what exactly "Contour Foam" does for my arches — is not visible above the fold. I have to scroll to find out if this shoe is actually good for my feet, which I might not bother doing.

**Personalized?** No. No "based on your size," no "other customers with wide feet liked."

---

### Step 7 — Add to Cart (Size Selection)
**What I saw:** Size grid (6.5 through 14.0) with a red "Please select a size" warning triangle. QTY dropdown (1). Shipping option. In-store availability note. Large full-width blue "ADD TO CART" button pinned to the bottom of the screen. Cart icon showing 0 items.

**Phone ease:** Size grid boxes are reasonably large and well-spaced — I can tap a size without worrying about hitting the wrong one. The ADD TO CART button is as large and obvious as it should be.

**Friction:** The warning message confirms a size was not selected before the screenshot — meaning the add-to-cart flow didn't complete. Cart counter stayed at 0. The instruction to select color/width/size for in-store availability is a lot of steps before I even get a local option.

**Personalized?** No saved size from a previous purchase. A logged-in experience should pre-highlight my known size.

---

### Step 8 — View Cart
**What I saw:** A completely blank white screen. Nothing. No products, no subtotal, no checkout button, no error message, no loading indicator.

**Phone ease:** Irrelevant — there is nothing to interact with.

**Friction:** Maximum. This is a catastrophic failure. If I reached this screen after going through the product page and size selection, I would assume the site was broken, close the tab, and not come back. I would not attempt to reload or troubleshoot. This is an abandoned cart that Skechers will never recover via email because the product never reached the cart in the first place.

**Personalized?** N/A.

---

### Step 9 — Search "comfort shoes"
**What I saw:** "COMFORT SHOES" heading (all caps, large), 1,447 results count, Filter and Sort controls, two product cards: (1) "Skechers Slip-ins: Arch Fit Arcade - See Ya There" tagged Women's, Also in Wide; (2) "Skechers Slip-ins: Contour Foam - Cozy Fit" tagged Women's, Also in Wide.

**Phone ease:** Layout is clean, product cards are a reasonable size, color swatches are visible below each card.

**Friction:** Both visible results are Women's. I searched "comfort shoes" as a man on a men's shoe journey and got women's results. The site doesn't remember my navigation session or my (failed) login, so it defaults to whatever the search algorithm surfaces — apparently women's Slip-ins. This would make me think the search is broken or that I'm in the wrong section.

**Personalized?** No. This is the direct cost of the failed login — a personalized session would have surfaced men's results, my size, and probably my preferred fit width.

---

*Yesterday: 4/10 → Today: 5/10. The men's navigation architecture improved meaningfully. The blank cart is a new or persistent critical bug that holds the score down and should be treated as a P0.*

---

## Technical Audit

## Technical Summary

Site runs on Salesforce Commerce Cloud (Demandware), confirmed by `/on/demandware.static/Sites-USSkechers-Site/` asset paths. The cart page is self-rate-limiting (HTTP 429), causing a 10x TTFB spike and structural HTML failures. 20+ third-party scripts load on every page. View Cart has document-level failures that break both accessibility and SEO crawlability.

---

## Accessibility

**Critical**
- `aria-required-parent` (Homepage): ARIA role hierarchy is broken — child roles exist outside their required parent container. Likely a component rendered into the wrong DOM position.

**Serious**
- View Cart is missing both `<title>` and `lang` on `<html>`. Assistive tech cannot identify the page or its language. This is a full document-structure failure, not a component bug — suggests the cart page renders via a different template path that skips standard `<head>` scaffolding.

**Moderate (structural, all pages)**
- Duplicate `<main>` landmark (Homepage) — two elements with `role=main` or `<main>` tags, likely from a modal or drawer injected alongside the page body.
- `<aside>` not at top level (Homepage, Search) — nested inside another landmark, violates landmark containment rules.
- Content outside landmarks (Homepage, Search) — likely ad/tracking iframes or injected widgets sitting outside any sectioning element.
- Heading order skipped (Homepage) — `<h3>` or `<h4>` used before `<h2>`.
- View Cart missing `<h1>` and `<main>` — no semantic structure at all.

**Minor**
- `aria-allowed-role` (Homepage): an element has a `role` that's not permitted for that element type.

---

## SEO

- **View Cart missing `<title>`**: Googlebot will index the cart URL with a machine-generated title. If the cart URL is canonicalized away this is low-risk, but it should be verified that `/cart/` has a `<link rel="canonical">` pointing elsewhere.
- **Duplicate/placeholder GA4 destination**: `G-1234567890` is loaded via GTM alongside the real `G-XZTV9LQ9DQ`. This is a test/stub property ID that should not be in production — it sends real event data to an unknown or abandoned property.
- **LCP/CLS not captured**: No Core Web Vitals data for ranking signals. Given the third-party script load, LCP is likely impacted but unverified.
- **Duplicate Yahoo pixel script**: `https://s.yimg.com/wi/ytc.js` appears twice in `<head>` — double-fires Yahoo events, inflates conversion attribution.

---

## Performance

**TTFB**
- All pages: 27–37ms — excellent, consistent with CDN/edge caching.
- View Cart: 352ms — 10x baseline, coincides with a 429 response on `https://www.skechers.com/cart/`. The cart endpoint is being rate-limited by the site's own bot-detection layer (PerimeterX/HUMAN KP SDK), forcing a retry cycle that adds ~315ms of latency. This is a direct revenue-path bottleneck.

**Third-party script count (per page)**
Counted from HTML source: 20+ distinct async script origins including TikTok Pixel (3 scripts), Pinterest, Google Tag Manager, GA4 (2 destinations), Bing, Reddit, Yahoo (duplicated), Quantum Metric, Impact/CJ, Bloomreach, Monetate (3 scripts), Snapchat, Facebook Events, Nextdoor, Taboola, Stape CDN, Pulse Insights, Go2SDK/Tune, Creative CDN, WebFont Loader. Each is async but they contend for CPU on main thread during parse and compete for bandwidth on mobile connections.

**LCP/CLS**: Not available. Cannot assess Core Web Vitals coverage.

---

## Mobile Optimization

- `--vh: 6.64px` is set inline on `<html>` via JavaScript — this is a known workaround for the iOS/Android mobile browser 100vh inconsistency (address bar height not reflected in `100vh`). The value must be calculated after JS executes; any layout depending on this variable before script runs will be incorrectly sized.
- WebFont Loader (`cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28`) is loaded async and applies `wf-*` classes to `<html>` after load. Mulish is loaded at weights n3–n8 (6 variants). On slow connections this causes FOUT (flash of unstyled text) for all body copy until all 6 variants resolve.
- No evidence of `<link rel="preload">` for critical fonts or hero images in the sampled HTML.

---

## Console & Network Errors

**429 Rate-limit loop — KP SDK fingerprint endpoint (5 occurrences)**
```
https://www.skechers.com/149e9513-01fa-4fb0-aad4-566afd725d1b/
  2d206a39-8ed7-437e-a3be-862e0f06eea3/fp?x-kpsdk-v=j-1.2.416
```
This is PerimeterX/HUMAN's browser fingerprinting challenge endpoint. The bot-detection SDK is being rate-limited by the server's own WAF or rate-limit rules — it's fighting itself. The UUID path prefix is a standard KPSDK pattern. Each retry amplifies the problem. This is a misconfiguration in the WAF/rate-limit allowlist: the KPSDK path should be excluded from rate-limit rules.

**429 on `/cart/` (1 occurrence)**
The cart page itself returned 429 during the audit session. Combined with the KPSDK loop, it suggests the bot-detection layer is over-triggering on automated/headless clients, and possibly on real users during high-traffic periods. This is the direct cause of the 352ms TTFB spike.

**Stylitics CORS block**
```
https://web-assets.stylitics.com/style.css?base=hotspots&theme=skechers&version=32b281b5d9
blocked by CORS policy: No 'Access-Control-Allow-Origin' header
```
Stylitics (outfit/shop-the-look widget vendor) is not returning the correct CORS header for the `skechers.com` origin. The stylesheet fails to load, breaking the widget's styling. Fix is on Stylitics's CDN configuration or requires adding skechers.com to their CORS allowlist — this needs a vendor ticket.

**`net::ERR_FAILED` (1 occurrence)**: Insufficient data to identify the request without full network log.

---

## Recommendations

| Priority | Item |
|---|---|
| P0 | Fix WAF/rate-limit rules to exempt the KPSDK fingerprint path (`/149e9513-.../fp`) — currently bot-defense is self-DoSing the cart flow |
| P0 | Investigate why View Cart renders without `<title>`, `lang`, `<main>`, and `<h1>` — likely a broken template or cart-specific error state leaking to 200 responses |
| P1 | Remove `G-1234567890` stub GA4 destination from GTM — it should never ship to production |
| P1 | De-duplicate Yahoo pixel script (`ytc.js` loaded twice) |
| P1 | File vendor ticket with Stylitics to add `skechers.com` to CORS allowlist for `web-assets.stylitics.com` |
| P2 | Audit third-party script list for dead/redundant vendors; 20+ origins on every page is above industry median for mobile perf budgets |
| P2 | Add `<link rel="preload">` for LCP image and critical font weights (at minimum n4/n5 Mulish) |
| P2 | Fix `aria-required-parent` violation on Homepage — likely a component mounting outside its expected DOM parent |
| P3 | Instrument LCP and CLS capture in the audit pipeline — the current dataset has no Web Vitals beyond TTFB |
## Recent history

- [[2026-05-20-site-journey-walker]] — 4/10 (2026-05-20)
- [[2026-05-19-homepage-www.skechers.com-walker]] — 9/10 (2026-05-19)
- [[2026-05-19-site-journey-walker]] — 4/10 (2026-05-19)

