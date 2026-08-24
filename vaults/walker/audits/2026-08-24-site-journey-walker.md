---
slug: 2026-08-24-site-journey-walker
type: site
date: 2026-08-24
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-08-24**
## Full review
## 1. Executive Summary

I got as far as picking out a pair of slip-ins, but the checkout path broke on me. I never actually saw a login screen — tapping the account icon just left me looking at the same homepage. Then when I tried to add my shoes to the cart, I got scolded with red error text for not picking a width and size (fair, but jarring), and when I went to check my cart afterward, the page was completely blank. White screen, nothing. That's the kind of thing that makes me close the app and just drive to the DSW near me instead. Search worked fine and pulled up real comfort shoes, so there's a bright spot, but the core "put shoe in cart, look at cart" loop is broken.

## 2. Business Impact Score (1-10)

**2/10** — same as yesterday, no change. A shopper who can't confirm what's in their cart will not trust the site enough to check out. This is a revenue-blocking defect, not a polish issue.

## 3. What's Working

- The 20% off banner and SXKPLUS code are visible right at the top without me hunting for it — I like seeing the deal before I even start browsing.
- The Men > Shoes category page loaded cleanly with real photos, clear labels ("Hands Free Slip-Ins," "Walking Shoes"), and a "Free pickup at [location]" toggle that's genuinely useful for someone like me who'd rather try shoes on.
- The product page for the Slip-Ins Contour Foam was clean and readable: price, star rating with review count, and a big product photo without clutter.
- Search for "comfort shoes" actually returned comfort shoes — 1,525 results, with the top two being GO WALK Arch Fit and a Relaxed Fit slip-on. That's relevant.
- The hamburger menu for Men opened into a simple list (Shoes, Shop by Activity, Comfort Technologies, Collections) with decent-sized tap targets.

## 4. What's Weak

- **Login did nothing I could see.** I tapped the account icon and the screen looked identical to the homepage — no login form, no prompt, nothing. I'd assume the app froze or I missed the button entirely.
- **Add to Cart threw errors at me instead of just working.** I hadn't picked a width or size yet, and the site let me tap the button before telling me that — two red warnings stacked up after the fact instead of guiding me before I tapped.
- **The cart page is blank. Completely white.** This is the biggest problem in the whole walk-through. After all that work picking a shoe, my cart shows me nothing — no items, no "your cart is empty" message, no navigation, nothing. I'd think the app crashed.
- Nothing on the homepage, category page, or PDP mentions arch support or cushioning comparisons against other brands (Hoka, Brooks, New Balance) — the stuff that actually gets me to buy. It's brand-name marketing ("AERO BURST," "Contour Foam") rather than the comfort/fit language I care about.
- Search results lead with women's shoes even though I'd just been browsing Men's — doesn't feel personalized to what I was doing two taps earlier.

## 5. Recommendations

1. **Fix the cart page rendering — this is the top priority.** A blank cart after add-to-cart is a checkout killer. Even an empty-cart state needs a message and a way to keep shopping.
2. **Surface required selections before I tap Add to Cart**, not after — grey out or badge the button, or scroll me to the missing field automatically instead of just printing red text.
3. **Make login visibly respond** — a slide-in panel, a modal, anything — so I know my tap registered.
4. **Carry Men's context into search results** when I've just been browsing Men's shoes, instead of leading with women's products.
5. Add a plain-language comfort/arch-support callout on category and product pages — a line like "Arch Fit® cushioning, all-day support" would speak to me more than a marketing tagline.

## 6. Bottom Line

I liked what I could see, but I couldn't finish the job. A cart that shows a blank white screen is the kind of bug that makes a 62-year-old assume the site is broken and give up — not troubleshoot it. Fix that one thing and the score jumps; until then, this isn't a site I'd trust with my payment info.

## 7. Evidence

**Step 1 — Homepage:** Clean layout, promo banner up top (20% off + code), hero for "Aero Burst" running shoes with a quick nav row (Slip-ins, Arch Fit, Max Cushioning). Text was readable without zooming, and icons (search, account, bag, menu) were all reasonably sized for my thumb. No personalization visible — this looks like the generic homepage anyone would see.

**Step 2 — Dismiss Popups:** Identical to Step 1 — no popup appeared to dismiss, or if one did, it's not reflected here. Not a problem in itself, but worth confirming nothing's silently failing.

**Step 3 — Log In:** Also identical to the homepage. I tapped the account/login icon and nothing changed on screen — no login form, no modal, no redirect. From my seat, it looks like the tap didn't register at all. This is confusing and would make me assume the site is broken before I even get started.

**Step 4 — Men category:** A slide-out menu opened with clear headers (MEN, Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories) and forward arrows showing there's more underneath each. Rows were tall enough to tap without missing. Easy to use on a phone.

**Step 5 — Men > Shoes:** Category page with three photo tiles up top (Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers) — good, because "Hands Free Slip-Ins" is exactly the kind of shortcut I want. "Free pickup at [location]" toggle and Filter/Sort bar are visible. 750 results shown, though I'd want it sorted by comfort features rather than just browsing all 750.

**Step 6 — Product detail:** Skechers Slip-ins: Contour Foam - Cozy Fit Nordain, $88, 4 stars from 15 reviews, "Members Get 20% Off" callout, and a big clean product photo. Readable, no clutter, no zooming needed. Nice experience — this page did its job.

**Step 7 — Add to Cart:** Scrolled to width/size selection. Both "Please select a width" and "Please select a size" show in red — meaning I got bounced back with errors instead of a smooth add. The width and size buttons themselves were a good size to tap. But getting yelled at with two errors after tapping "Add to Cart" instead of before is the kind of friction that makes me hesitate.

**Step 8 — View Cart:** Totally blank white page. No header, no items, no empty-cart message, nothing. This is the moment I'd assume something crashed and either restart the app or walk away from the purchase entirely. This is the single worst moment in the whole journey.

**Step 9 — Search "comfort shoes":** Search worked and returned 1,525 results. Top two items — GO WALK Arch Fit 2.0 (Cassy, $85, also in Wide) and Relaxed Fit: New Cool (Sweet Horizons, $65) — are both genuinely comfort-oriented shoes, which is what I searched for. Both are labeled "Women's" though, which felt like an odd first impression right after I'd been looking at Men's shoes — doesn't feel personalized to where I'd just been.

---

## Technical Audit

## Technical Summary

The mobile journey through skechers.com (built on Salesforce Commerce Cloud / Demandware, `us-skechers-prod.js`) was audited across 8 steps. The site loads a heavy third-party script payload (20+ async tags: TikTok, Snapchat, Pinterest, Reddit, Meta, Bing, Google, Impact, Taboola, CreativeCDN, Quantum Metric, Monetate, PulseInsights, Go2SDK) on every page, alongside Kasada bot-detection (`kpsdk`) fingerprinting calls that returned repeated `429` responses, including one against the cart endpoint itself. A CORS failure blocks a third-party stylesheet from loading. 17 axe-core accessibility violations were found, concentrated on landmark/region structure and two pages missing `<title>` and `lang` entirely.

## Accessibility

- **Critical (2, Homepage):** `button-name` — buttons without discernible text; `aria-required-parent` — ARIA role used without required parent role/context.
- **Serious (2, View Cart):** `document-title` — page has no non-empty `<title>`; `html-has-lang` — document missing `lang` attribute (View Cart's HTML head differs from Homepage/Login/Men, which do declare `lang="en"`).
- **Moderate (10):** Landmark structure is broken across Homepage, View Cart, and Search — duplicate/non-top-level `main` and `complementary` landmarks (`landmark-no-duplicate-main`, `landmark-main-is-top-level`, `landmark-complementary-is-top-level`, `landmark-unique`), content not contained in landmarks (`region`), incorrect heading order (`heading-order`, Homepage), and missing H1 (`page-has-heading-one`, View Cart).
- **Minor (2):** `aria-allowed-role` on Homepage and Search — role attribute value not valid for the element.

Net: View Cart is the weakest page (missing title, missing lang, no landmark, no H1) — treat as the top remediation target since it also affects SEO indexing of that state.

## SEO

- View Cart ships without a `<title>` element and without `html[lang]` — both are basic on-page SEO signals as well as accessibility failures; this page is likely non-indexable/misrepresented in search snippets if crawled directly.
- Homepage/category pages carry `lang="en"` correctly and a populated `<head>`, but heading-order violations on Homepage indicate a non-semantic H1–H6 hierarchy, which can weaken topical relevance signals.
- HTML source captured for Homepage, Log In, and Men category all resolved to the same URL (`https://www.skechers.com/`) rather than distinct paths — this points to either client-side overlay navigation (login/category rendered without a URL change) or a data-capture artifact in this audit run. If the former, it's worth confirming category/login states are reachable via crawlable, distinct URLs for SEO purposes — recommend verifying manually outside this audit.

## Performance

| Step | TTFB | LCP | CLS |
|---|---|---|---|
| Homepage | 426ms | not captured | not captured |
| Log In | 435ms | not captured | not captured |
| Men category | 435ms | not captured | not captured |
| Men > Shoes | 36ms | not captured | not captured |
| Product detail | 26ms | not captured | not captured |
| Add to Cart | 26ms | not captured | not captured |
| View Cart | 129ms | not captured | not captured |
| Search | 27ms | not captured | not captured |

- LCP and CLS were not instrumented in this audit run — no visual-stability or paint-timing conclusions can be drawn; this is a gap in the measurement tooling, not a confirmed site defect.
- Homepage, Log In, and Men category TTFB (426–435ms) are notably higher than the deeper-funnel steps (26–36ms), consistent with server-side personalization (Monetate/Quantum Metric) overhead on first-party-rendered entry pages versus CDN/cache-served subsequent responses.
- View Cart TTFB (129ms) is elevated relative to PDP/search but was also the step where a `429` was recorded against `/cart/` — the reported timing may not reflect a request that was actually throttled/retried by bot mitigation.

## Mobile Optimization

- The document root carries an inline `style="--vh: 6.64px"` — a JS-computed CSS custom property used to patch mobile viewport-height (the classic `100vh` mobile browser chrome bug). This is a maintained workaround rather than using native `100dvh`/`100svh` units, adding a layout-thrashing JS dependency on every viewport resize/orientation change.
- No responsive meta tag or viewport-specific defects were observable in the truncated HTML samples provided; full `<head>` was not captured for verification.

## Console & Network Errors

- **429 (5 occurrences):** Repeated rate-limiting on the Kasada bot-detection fingerprint endpoint (`/…/fp?x-kpsdk-v=...`) and once on `/cart/` directly. Legitimate mobile traffic is being throttled by the bot-mitigation layer during a normal shop-and-cart flow — worth investigating false-positive rate on mobile UA/behavior signatures.
- **CORS failure:** `https://web-assets.stylitics.com/style.css` blocked — missing `Access-Control-Allow-Origin` header on the Stylitics (outfit-recommendation widget) stylesheet response, resulting in an unstyled/failed resource load (`net::ERR_FAILED`).
- **Summarizer API errors (4 occurrences):** Client-side code invokes the experimental Chrome `Summarizer` API with unsupported language parameters, aborting the call each time. This is dead/unguarded feature-detection code executing on every relevant page load and polluting the console.

## Recommendations

1. Add a `<title>` and `html[lang]` attribute to the View Cart page state; audit why this page's document head diverges from the rest of the site.
2. Fix landmark structure sitewide: eliminate duplicate `<main>`/`role="main"` elements, ensure `complementary`/`aside` landmarks are top-level, and wrap orphaned content in a landmark region.
3. Add accessible names to icon-only buttons on Homepage (`button-name`) and correct the ARIA role/parent mismatch (`aria-required-parent`).
4. Fix CORS headers on `web-assets.stylitics.com` or proxy the stylesheet through a first-party origin.
5. Investigate Kasada 429s against mobile sessions, especially on `/cart/` — throttling a core conversion endpoint is a functional risk, not just a console warning.
6. Remove or gate the Summarizer API call behind a proper feature/language support check to stop the repeated console errors.
7. Replace the JS-driven `--vh` custom property with native `100dvh`/`100svh` CSS units where browser support allows, reducing resize-triggered reflow.
8. Re-run this audit with LCP/CLS instrumentation enabled to get real Core Web Vitals coverage — current data only covers TTFB.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

