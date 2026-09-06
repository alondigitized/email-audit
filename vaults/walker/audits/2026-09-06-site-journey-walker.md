---
slug: 2026-09-06-site-journey-walker
type: site
date: 2026-09-06
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-09-06**
## Full review
## 1. Executive Summary

I walked through Skechers.com on my phone today looking for a comfortable pair of shoes, same as always. I got as far as picking out the Aero Burst slip-ins, but the trip fell apart at exactly the two moments that matter most: signing in and looking at my cart. Neither worked. I never got a personalized experience, and when I tried to check what was in my cart, the page came back completely blank. Search worked fine and actually understood what "comfort shoes" means, which is more than I can say for the rest of the visit.

## 2. Business Impact Score (1-10)

**2/10** — unchanged from yesterday. The core purchase path is still broken in a way that would send me to Amazon or back to the DSW aisle. A blank cart page isn't a minor bug, it's a sale killed dead.

## 3. What's Working

- **Search** returned genuinely relevant results for "comfort shoes" — slip-ins, cushioned soles, women's and men's mixed in reasonably, prices visible up front.
- **Category navigation** (Men > Shoes) is laid out sensibly: Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers right up top as subcategories, which is exactly the kind of comfort-first sorting I want.
- **Product page** has a big, legible price, a visible star rating with review count, and decent-sized product photos I could actually see without squinting.
- The hamburger menu is readable and the tap targets (Shoes, Shop by Activity, Comfort Technologies, Collections) are big enough for my thumb.

## 4. What's Weak

- **Log In did nothing.** The screenshot after tapping Log In is identical to the homepage — no sign-in form, no account panel, nothing. I never got logged in, which means nothing after that point could possibly be personalized to me.
- **View Cart is a blank white page.** After going through the size-selection screen, tapping into the cart shows literally nothing — no items, no error message, no "your cart is empty," just white. I'd assume the site was broken or my order vanished.
- **Cart badge stuck at 0** the entire way through, even on the "Add to Cart" step. I couldn't tell if my shoes were ever actually added.
- **Competing promo banners everywhere** — 20% off sitewide, 40% off select styles, 25% off apparel, all stacked at the top of every single page. That's three different discounts before I've even picked a shoe, and I couldn't tell which one applied to what.
- **"Excluded from promotions"** on the $165 Aero Burst is in small orange text easy to miss — I'd have assumed my Skechers Plus 20% applied, then been annoyed at checkout when it didn't.
- No sign anywhere of a comfort/cushioning comparison against Hoka, Brooks, or New Balance, and no price-vs-quality guidance — I'm left to do that math myself.

## 5. Recommendations

1. **Fix Log In first.** If the login flow is broken end to end, every personalization feature downstream is dead on arrival — this should block a release.
2. **Fix or fail gracefully on View Cart.** A blank page after adding an item is the single most damaging thing on this list — at minimum show a loading state or error, ideally just fix the cart render.
3. **Consolidate the promo banners** into one clear, consistent offer instead of three overlapping percentages.
4. **Move "Excluded from promotions" text up near the price**, in a size and color I won't miss.
5. **Add a simple comfort-brand comparison or "why Skechers over X" module** on product pages — I cross-shop, and nothing here gives me a reason to stop.

## 6. Bottom Line

I still can't buy a pair of shoes on this site the way it stands. Login is broken, the cart is broken, and I'd have walked away confused about which discount actually applies to my $165 shoes. Search is the one bright spot. Until sign-in and cart actually work, nothing else on this page matters — score holds at 2/10, no improvement from yesterday.

## 7. Evidence

**Step 1 — Homepage:** Labor Day Sale banner, "20% OFF" hero, Slip-ins/Arch Fit/Max Cushioning quick links up top. Clean, readable, big bold percentage-off numbers. No friction here, but also nothing that greets me by name or shows anything tailored.

**Step 2 — Dismiss Popups:** Screen is identical to Step 1 — no popup appeared to dismiss, or one flashed and vanished before this shot. Not itself a problem, but it means there was no cookie/consent/email-capture friction to note either way.

**Step 3 — Log In:** Screen is identical to the homepage again. Tapping "Log In" produced no visible change — no modal, no form, nothing. This is a dead end. On a phone, if a tap does nothing, I assume the site is frozen and I start tapping around randomly, which is exactly the kind of thing that makes me give up.

**Step 4 — Men category:** A slide-out menu with MEN header, Shoes / Shop by Activity / Comfort Technologies / Collections / Collaborations / Clothing & Accessories, each with a chevron and decent padding. Easy to read, easy to tap, no zooming needed. This part felt built for a phone.

**Step 5 — Men > Shoes:** Subcategory tiles for Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers — exactly my kind of shopping. 736 results, filter and sort visible, "Free pickup at [set location]" toggle. Good comfort-first framing, though 736 results with no default sort toward "most cushioned" or "best for standing all day" means I'd still have to dig.

**Step 6 — Product detail (Aero Burst):** Big clean product name, 4.5-star rating with 163 reviews, $165.00 price, "Hands Free Slip-ins" badge, nice full-width shoe photo. The "Excluded from promotions" note is there but small and easy to skip past — given the banners screaming 20-40% off everywhere else, this is a trust gap waiting to happen at checkout.

**Step 7 — Add to Cart:** Size grid (7.0–13.0), a "Please select a size" warning, quantity dropdown, shipping/pickup info, and the Add to Cart button. Sizes are large and tappable, which is good — but the warning suggests the add-to-cart tap either happened before a size was chosen or didn't register at all.

**Step 8 — View Cart:** Completely blank white screen. No header, no items, no error text, nothing. This is the worst moment of the whole trip — I'd have no idea if my shoes were in a cart, if the site crashed, or if I should start over.

**Step 9 — Search "comfort shoes":** Clean results page, 1,518 results, relevant products (Slip-ins Go Walk Joy $85, Max Cushioning Elite 3 $78.99–$105), color swatches visible, "Members Get 20% Off" tag on the first item. This is the one step that felt like it understood what I was actually looking for.

---

## Technical Audit

## Technical Summary

Mobile journey through skechers.com (Homepage → Log In → Men category → Men > Shoes → PDP → Add to Cart → View Cart → Search) was captured across 8 steps. The site runs on Salesforce Commerce Cloud (`demandware.static` assets) with a heavy third-party script layer (analytics, ads, personalization) injected via GTM. Two systemic issues stand out at the code level: (1) duplicate/non-top-level landmark structure on the homepage indicating a duplicated DOM shell, and (2) missing `<title>`/`lang` attributes on the View Cart page, suggesting it is rendered through a different template path than the rest of the site. Network logs show repeated 429 responses from a bot-mitigation fingerprint endpoint (Kasada `x-kpsdk-v`) and from `/cart/` itself.

## Accessibility

18 axe violations across 3 of the 8 tested steps (Homepage, View Cart, Search).

- **Critical — Homepage:** `button-name` (icon/interactive buttons with no accessible label); `aria-required-parent` (ARIA role used outside its required parent role, e.g. a `role` applied to an element not contained in the correct container structure).
- **Serious — Homepage:** `link-name` (links with no discernible text, likely icon-only anchors missing `aria-label`).
- **Serious — View Cart:** `document-title` (empty `<title>`), `html-has-lang` (missing `lang` attribute on `<html>`) — both indicate the cart view is served from a template that skips the standard `<head>` boilerplate present elsewhere on the site.
- **Moderate — Homepage/View Cart/Search:** `landmark-no-duplicate-main`, `landmark-unique`, `landmark-main-is-top-level`, `landmark-complementary-is-top-level`, `landmark-one-main`, `region`, `page-has-heading-one` — collectively point to more than one `<main>`/landmark region in the DOM and content not wrapped in landmarks, consistent with a duplicated page shell (likely from a personalization/A-B testing script like Monetate injecting a parallel DOM tree).
- **Minor:** `aria-allowed-role` on Homepage and Search (role attribute on an element that doesn't support it).

No violations reported for Log In, Men category, Men > Shoes, PDP, or Add to Cart in the provided data.

## SEO

- View Cart missing `<title>` and `lang` — both are direct on-page SEO signals; if this template pattern extends to any crawlable/indexable URL, it will suppress title display in search results and language targeting.
- Duplicate `<main>` / duplicate landmark elements on Homepage and Search can confuse content-extraction by crawlers relying on structured landmark parsing (e.g., for featured snippets).
- Missing single `h1` (`page-has-heading-one`) on Homepage and View Cart weakens topical signal for those URLs.

## Performance

TTFB by step:
- Homepage: 404ms, Log In: 431ms, Men category: 431ms — all elevated for a document response; SSR/personalization middleware (Monetate, Quantum Metric) executing server-side is a likely contributor.
- Men > Shoes: 28ms, PDP: 23ms, Add to Cart: 23ms, Search: 26ms — TTFB in this range is atypical for full navigations and suggests these were measured as client-side/XHR transitions rather than fresh document loads (SPA-style route change), not full server round-trips.
- View Cart: 112ms — intermediate value, consistent with a partial server render or cached fragment.

LCP and CLS were not captured for any step (`?`) — no performance verdict possible on paint timing or layout stability from this dataset; this should be treated as a data-collection gap, not a "no issues found" result.

## Mobile Optimization

- Homepage HTML sets an inline `--vh` custom property via JS, a standard workaround for mobile viewport-height inconsistency (browser chrome resizing) — functioning as expected, not a defect.
- Each page load pulls a large number of independent third-party `async` scripts (TikTok Pixel x2, Pinterest, Reddit Ads, Snapchat, Taboola, Impact, CreativeCDN, Nextdoor, Facebook Events, StapeCDN, Bing, Yahoo x2, Quantum Metric, Brightcove, PulseInsights, WebFont Loader, GTM main + 2 destination tags, Monetate x2). On constrained mobile CPU/network this volume of parallel third-party JS is a meaningful tax on parse/execute time and battery/data usage, independent of any single script's own weight.
- The Stylitics "get the look" widget stylesheet fails to load cross-origin (see Console errors below), meaning any UI dependent on it degrades on every step where it's present, including mobile.

## Console & Network Errors

- **429 (Too Many Requests) — Kasada bot-mitigation fingerprint endpoint** (`/…/fp?x-kpsdk-v=j-1.2.728`), hit 5 times, plus one **429 on `/cart/` itself**. Repeated fingerprint-endpoint throttling combined with the cart page being rate-limited is notable: if this reproduces for real users (not just automated test traffic), it can block or degrade the add-to-cart/checkout path. Should be verified against real user sessions vs. bot-detection false-positives triggered by automated/headless test tooling.
- **CORS failure**: `web-assets.stylitics.com/style.css` blocked by CORS policy from `www.skechers.com` origin — the stylesheet request is missing appropriate `Access-Control-Allow-Origin` handling from the third-party host, breaking that resource (`net::ERR_FAILED`) on affected pages.
- **Summarizer API errors** ("Unsupported Summarizer API languages…"), recurring 4 times — indicates a script on the page (or browser extension context) is invoking Chrome's built-in `Summarizer`/on-device AI API without checking supported-language capability first, causing repeated aborted calls. Worth identifying the source script since it fires on multiple steps.

## Recommendations

1. Fix `document-title` and `html-has-lang` on the View Cart template — likely a quick template-level fix.
2. Deduplicate the DOM shell producing multiple `<main>`/duplicate landmark regions on Homepage and Search (audit personalization/testing scripts for DOM injection that clones page structure).
3. Add accessible names to icon-only buttons/links flagged by `button-name` and `link-name` on Homepage.
4. Investigate the 429s on the Kasada fingerprint endpoint and on `/cart/` with real (non-automated) traffic to rule out bot-mitigation misfiring on legitimate mobile sessions.
5. Fix or remove the CORS-blocked Stylitics stylesheet request (add `crossorigin` handling server-side on their end, or self-host the asset).
6. Instrument LCP/CLS collection — current dataset has no paint/layout-stability data for any step, which blocks any real Core Web Vitals assessment.
7. Audit and trim the third-party script list loaded on every page for mobile network/CPU impact; consider consolidating tag-manager-fired vendors.
8. Trace and fix the source of the repeated Summarizer API language errors.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

