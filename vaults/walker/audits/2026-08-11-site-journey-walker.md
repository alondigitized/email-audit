---
slug: 2026-08-11-site-journey-walker
type: site
date: 2026-08-11
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-08-11**
## Full review
## 1. Executive Summary

I did what any of us do on a Tuesday night from the recliner — pulled up Skechers on my phone to see if this "Arch Fit Skech-Air" shoe everybody's been talking about is worth $120. The homepage and the men's browsing got me there just fine. But the minute I tried to actually buy something, it fell apart: adding to cart threw an error, and tapping "View Cart" gave me a blank white screen — nothing. Logging in did nothing visible either. I left this session with an empty cart, no login, and search results showing me women's shoes after I'd been shopping men's the whole time. Browsing works. Buying doesn't.

## 2. Business Impact Score (1-10)

**2/10** — unchanged from yesterday's 2/10, and arguably worse where it counts most: the cart page is now a blank crash, not just a rough edge. Anything upstream of checkout (nav, PDP, search results existing) can look fine, but a hard failure at "view your cart" caps this at a rock-bottom score every time. This is a purchase-blocking bug, not a UX nitpick.

## 3. What's Working

- The MEN flyout menu (step 4) is genuinely good — big, clearly labeled rows, obvious back/close, and "Hands Free Slip-ins" and "Comfort Technologies" called out as their own shortcuts. That's exactly the kind of shortcut I want.
- The "Hands Free Slip-ins" category page is well-targeted — Wide Fit / Extra Wide Fit filter pills right up top, which matters a lot at my age when regular widths pinch.
- No pop-up ever got in my way. Whatever step 2 was supposed to dismiss, I never saw an interstitial fighting me for space on a small screen — I'll take it.
- Size selection buttons on the PDP are big, square, easy to tap with a thumb — no fumbling.
- Text throughout is legible without pinch-zooming.

## 4. What's Weak

- **The cart page is broken.** Step 8 rendered a completely blank white screen. No header, no items, no error message — just nothing. If I hit that on my phone I'd assume the app crashed and I'd close out, maybe try again later, maybe not at all.
- **Add to Cart failed on the first try** because no size was pre-selected — I got a red "Please select a size" warning. Fine as a guardrail, but the button should probably just be grayed out until a size is picked, rather than let me tap it and get scolded.
- **Login went nowhere.** I tapped "Log In" and the screen didn't change at all — no form, no modal, nothing I can see. If I'm trying to check my rewards points or a saved cart, that's a dead stop.
- **Search isn't personalized.** After browsing Men's shoes the whole session, searching "comfort shoes" handed me back Women's results first (Contour Foam, Glide-Step). Doesn't feel like it's paying any attention to who I am or what I was just looking at.
- $120 for a shoe with **zero reviews** is a tough sell for someone doing price-vs-quality math against Hoka and New Balance. No social proof, no comparison content on the page.

## 5. Recommendations

1. **Fix the cart page render — this is priority zero.** A blank page at the exact moment someone's ready to buy is the single worst thing that can happen in this funnel. Everything else is secondary until this is fixed.
2. Gray out "Add to Cart" until a size is selected, instead of allowing the tap and then showing a warning.
3. Make login give *some* visible feedback immediately — a sheet, a redirect, a loading state — anything other than an unchanged screen.
4. Filter search results by the gender/category context the shopper's already in (I was in Men's — don't show me Women's shoes first).
5. Surface reviews or a comparison callout ("vs. Hoka Bondi," etc.) on high-price PDPs like the $120 Recomplete to help justify the spend.

## 6. Bottom Line

I can find a shoe I like on this site. I cannot buy it. That's the whole story — a blank cart page and a login button that does nothing are the kind of thing that sends me straight to the DSW aisle where at least the cart works. Score holds at 2/10 until checkout is actually checkout.

## 7. Evidence

**Step 1 — Homepage:** Blue promo banner ("25% OFF Kids Styles"), a second banner for "Up to 40% off Select Styles," and quick-tap pills for Slip-ins / Workout Walker / Arch Fit right under the nav. Hero image is a lifestyle shot for "Back to School" — not really speaking to me, but the comfort-tech shortcuts are. Easy to read, nothing to zoom into. No personalization visible — I'm not logged in yet so that's expected.

**Step 2 — Dismiss Popups:** Identical to the homepage — no popup ever appeared to dismiss. Read this as a small win: nothing blocked my view on the small screen.

**Step 3 — Log In:** Screen is pixel-for-pixel identical to the homepage. Tapping the login icon produced no visible change — no form, no sheet, nothing. As someone who'd want to check a rewards balance before buying, this is a flat dead end. Not personalized because I never actually got logged in.

**Step 4 — Men category:** A slide-out panel with MEN at top and a clean list — Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories — plus shortcuts for Hands Free Slip-ins, Wide Fit, Extra Wide Fit. Rows are tall, text is bold and legible, back arrow and X are both present. This is the best-designed screen in the whole journey — genuinely easy for a 62-year-old to navigate one-handed.

**Step 5 — Men > Shoes (Hands Free Slip-ins):** Breadcrumb (Men > Shoes) plus header "Hands Free Slip-ins," fit filter pills (Wide/Extra Wide/Medium), a "Free pickup at [Set Location]" toggle, Filter/Sort controls, "328 results," and a two-column product grid with color swatches. Directly relevant to what I care about — hands-free, wide-fit comfort. Easy to scan on mobile.

**Step 6 — Product detail:** "Skechers Slip-ins: Arch Fit Skech-Air - Recomplete," $120.00, "No Reviews," wishlist heart, a "HANDS FREE Slip-ins" badge over a product photo with swipe arrows. Comfort tech is front and center, which I like, but zero reviews and no price-context (vs. other brands) makes the $120 harder to justify on gut feel alone.

**Step 7 — Add to Cart:** Scrolled down to the size grid (7.5 through 14.0), a QTY dropdown, shipping/pickup icons, and the Add to Cart button — highlighted, with a red "⚠ Please select a size" warning above it. The tap happened before a size was chosen, so it errored instead of adding. Size buttons themselves are a good big touch-target size.

**Step 8 — View Cart:** Completely blank white screen. No header, no nav, no items, no error text — nothing rendered at all. This is the low point of the whole journey and the thing that would make me give up on buying anything today.

**Step 9 — Search "comfort shoes":** Returned "1,506 results" with a clean two-column grid. First two results shown: "Contour Foam - Cozy Fit Pure Comfort" ($75, Women's) and "Skechers Slip-ins: Glide-Step Comfort - Soft Power" ($85, Women's). After spending this whole session in Men's, getting Women's shoes as the top search results doesn't feel personalized to me at all.

---

## Technical Audit

## Technical Summary
The mobile journey was captured across 8 steps (Homepage → Search). Findings center on three areas: a bot-detection service rate-limiting its own fingerprinting calls, a broken third-party API integration exposed via `pid=test`, and DOM/landmark structure problems that cascade from the homepage template into deeper pages. No LCP/CLS values were captured in this run — see Performance.

## Accessibility
17 axe violations, concentrated on 3 pages:

**Homepage (9 violations)** — structural landmark failures dominate: duplicate `<main>` landmarks (`landmark-no-duplicate-main`), non-top-level `main`/`complementary` landmarks, non-unique landmarks, content outside any landmark region (`region`), and incorrect heading order. One `[critical]` `button-name` violation (icon-only buttons with no accessible name) and one `[critical]` `aria-required-parent` violation indicate ARIA roles applied without their required parent context — likely a component (menu/tab widget) missing its container role.

**View Cart (4 violations, all serious/moderate)** — `document-title` and `html-has-lang` are both missing, alongside `landmark-one-main` and `page-has-heading-one`. This suggests the cart view renders as a distinct template/route that didn't inherit the base `<head>` metadata or heading structure from the parent page shell.

**Search results (4 violations)** — same landmark/region pattern as homepage (`landmark-complementary-is-top-level`, `landmark-unique`, `region`, `aria-allowed-role`), confirming this is a recurring header/footer/sidebar template issue rather than a one-off page bug.

**Root cause pattern:** the homepage and search-page violations are identical in kind, pointing to a shared layout component (likely nav/aside wrapper) with landmark roles misapplied. The cart page's missing title/lang/h1 is a separate, page-specific regression.

## SEO
- `document-title` violation on View Cart means the cart page ships with an empty or missing `<title>` — directly harms any indexable/shareable cart state and is flagged by both accessibility and SEO tooling.
- `html-has-lang` missing on View Cart — the `<html>` tag lacks a `lang` attribute on this route specifically (other captured pages correctly set `lang="en"`), which affects search engine language detection and screen readers for that page only.
- `page-has-heading-one` missing on View Cart — no `<h1>`, weakening the page's semantic content hierarchy.
- No other pages showed missing metadata in the provided samples.

## Performance
TTFB by step:
| Step | TTFB |
|---|---|
| Homepage | 471ms |
| Log In | 374ms |
| Men category | 374ms |
| Men > Shoes | 25ms |
| Product detail | 27ms |
| Add to Cart | 27ms |
| View Cart | 282ms |
| Search | 32ms |

Homepage TTFB (471ms) is the slowest server response in the journey, likely due to full SSR/personalization logic (Monetate, Quantum Metric) executing server-side before the page can start streaming. The sub-30ms TTFBs on Men > Shoes, Product detail, and Add to Cart indicate those are served from cache/CDN edge or client-side transitions rather than fresh SSR — consistent with a hybrid SPA navigation model once the shell has loaded.

**LCP and CLS were not captured for any step** — this run only recorded TTFB. Given the heavy third-party script payload observed in the HTML (20+ async tags — TikTok, Snapchat, Reddit, Bing, GTM, Quantum Metric, Monetate, PulseInsights, Taboola, etc. — all loading in `<head>` before body content), LCP and CLS should be measured directly; this many render-blocking-adjacent third-party tags is a strong risk factor for both delayed LCP and layout shift from late-injecting widgets (e.g., Stylitics, PulseInsights survey overlays).

## Mobile Optimization
- The homepage sets `style="--vh: 6.64px"` on `<html>`, indicating a JS-based viewport-height custom-property workaround for mobile browser chrome (address bar resize). This is a known pattern but is a runtime dependency — if the script that sets `--vh` fails or races with paint, any CSS relying on `calc(var(--vh) * N)` will misrender before/without JS.
- No responsive meta tag or breakpoint-specific issues were visible in the truncated HTML samples provided; a full `<head>` capture would be needed to confirm `viewport` meta configuration.
- The duplicate-`main`-landmark and non-top-level-landmark violations (Homepage, Search) often stem from mobile-specific drawer/off-canvas nav components that clone or wrap the primary content region — worth checking whether the mobile nav drawer duplicates the `<main>` element rather than toggling visibility.

## Console & Network Errors
**429 Too Many Requests — Kasada bot-detection fingerprinting endpoint** (`/{uuid}/{uuid}/fp?x-kpsdk-v=...`), fired 4 times, plus a **429 on `/cart/`** itself. The `x-kpsdk-v` parameter identifies this as Kasada's client-side JS challenge/fingerprint call. Repeated 429s against the site's own anti-bot infrastructure — including on the cart route — indicate either overly aggressive rate limiting misfiring on legitimate mobile traffic, or a retry loop in the Kasada client script hammering its endpoint. This is a functional risk: if Kasada's challenge fails to complete, it can block real users from checkout.

**403 Forbidden — Bazaarvoice product reviews API** called with a literal `pid=test`:
`GetProduct?pid=test` — this looks like a hardcoded/placeholder product ID left in a production code path rather than the actual SKU being viewed, causing the reviews widget to fail to load on product-adjacent pages.

**403 CORS block — Stylitics stylesheet** (`web-assets.stylitics.com/style.css`): blocked by CORS policy due to a missing `Access-Control-Allow-Origin` header from `www.skechers.com`'s perspective. The outfit/styling widget's CSS cannot load cross-origin, so that widget likely renders unstyled or fails silently.

**Summarizer API warnings** ("Unsupported Summarizer API languages"): repeated 4×, these come from a client-side feature-detection call to Chrome's built-in `Summarizer` API (window.ai) specifying an unsupported language config. Non-blocking console noise, but indicates dead/experimental code shipping to production.

## Recommendations
1. **Fix cart page metadata regression**: add `<title>` and restore `lang="en"` on the View Cart route's `<html>`/`<head>` — likely a template that bypassed the shared head component.
2. **Audit landmark structure in the shared nav/aside layout**: resolve duplicate `<main>` and non-top-level landmark roles; this single fix likely clears 6+ of the 17 axe violations across Homepage and Search.
3. **Add accessible names to icon-only buttons** flagged by `button-name` (critical) on the homepage.
4. **Investigate Kasada 429s**, especially on `/cart/` — confirm whether the fingerprint script is retry-looping and whether real mobile users are being rate-limited during checkout.
5. **Remove or correct the hardcoded `pid=test` Bazaarvoice call** — trace where this literal string is injected instead of the live product ID.
6. **Add `Access-Control-Allow-Origin` for the Stylitics stylesheet** or self-host/proxy the asset to avoid the CORS block.
7. **Capture LCP/CLS in the next audit pass** — TTFB alone doesn't surface the render-blocking risk implied by the ~20 third-party async scripts loaded in `<head>`.
8. **Remove the dead Summarizer API call** or gate it behind a proper capability check to eliminate console noise.
## Recent history

- [[2026-08-10-site-journey-walker]] — 2/10 (2026-08-10)
- [[2026-08-09-site-journey-walker]] — 3/10 (2026-08-09)
- [[2026-08-08-site-journey-walker]] — 2/10 (2026-08-08)

