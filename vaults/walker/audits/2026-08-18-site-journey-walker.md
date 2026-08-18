---
slug: 2026-08-18-site-journey-walker
type: site
date: 2026-08-18
persona: walker
score: "2/10"
previous_score: "3/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 3/10) · **Type:** Site journey · **2026-08-18**
## Full review
## 1. Executive Summary

Walker made it from the homepage to a product page cleanly, but the moment it mattered — actually buying something — the site broke. Add to Cart triggered a "select a size" error instead of adding the shoe, and the Cart page itself loaded as a **completely blank white screen**. On top of that, tapping "Log In" produced no visible login form at all, and searching "comfort shoes" served up women's shoes first despite Walker's whole session being men's-focused. The homepage and category browsing are genuinely well done for an older shopper — big photos, plain-language tabs, hands-free slip-in messaging front and center — but none of that matters if he can't check out.

## 2. Business Impact Score (1-10)

**2/10** — down from a bad baseline. Yesterday's 3/10 already flagged trouble; today the cart is outright non-functional (blank page) and the add-to-cart flow failed silently into a validation error. A 62-year-old comfort shopper who can't add a shoe to his cart, can't see his cart, and can't log in doesn't come back — he goes to DSW or Hoka's site instead.

## 3. What's Working

- **Homepage hero** clearly foregrounds "Slip-ins," "Workout Walker," and "Arch Fit" — exactly Walker's comfort-tech vocabulary, in large tappable tabs.
- **Men's Shoes category page** leads with "Hands Free Slip-Ins" and "Athletic Sneakers" as the first two visual categories — this is precisely what a hands-free, arch-support shopper wants to see first.
- **Product detail page** (Slip-ins: Aero Burst) has a big, legible price, star rating, and a clean product photo with a visible "Hands Free Slip-Ins" badge.
- **Font sizes throughout** are large and high-contrast — no squinting required, which matters a lot for this persona.
- **Search returned a huge, relevant-sounding result count** (1,514 for "comfort shoes"), so the query itself isn't broken.

## 4. What's Weak

- **Cart is completely broken.** Step 8's screenshot is entirely blank/white — no header, no items, nothing. For a shopper who just tried to buy shoes, this looks like the site crashed.
- **Add to Cart failed.** The screenshot shows a red "Please select a size" warning already active and the Add to Cart button glowing/highlighted — the tap didn't add anything, it just surfaced a validation error. Cart badge stayed at "0" the entire journey.
- **Log In did nothing visible.** The screenshot after tapping "Log In" is pixel-for-pixel the same as the page before it — no modal, no form, no navigation. On mobile this reads as a dead button.
- **The featured shoe is excluded from the site-wide promo.** The homepage shouts "40% off" and "25% off," but the Aero Burst slip-in Walker was funneled to is flagged "Excluded from promotions" at $165 — a bait-and-switch feeling for a price-conscious shopper.
- **Search results aren't gender- or context-aware.** After an entire session browsing Men's shoes, searching "comfort shoes" surfaced two Women's shoes first. No sense that the site remembers what Walker's been looking at.
- **No visible personalization anywhere** — no "Welcome back," no size/fit memory, no recently-viewed men's items resurfacing in search or cart recovery.

## 5. Recommendations

1. **Fix the cart page rendering** — a blank white screen on "View Cart" is a P0 conversion killer; this should block any release.
2. **Fix Add to Cart validation UX** — either disable the button until a size is chosen, or scroll/highlight the size selector instead of letting the tap silently fail with no size actually added.
3. **Make Log In functional on mobile** — verify the tap target actually opens a sign-in sheet; right now it's a no-op.
4. **Bias search toward the shopper's demonstrated context** — if the last 5 pages viewed were Men's, don't lead "comfort shoes" results with Women's product.
5. **Don't feature promo-excluded products in promo-heavy placements**, or at least surface the exclusion earlier (category card, not just PDP) so it doesn't feel like a switch after the click.

## 6. Bottom Line

The look-and-feel work for a Boomer comfort shopper is legitimately good — big text, hands-free slip-in messaging up top, clean product photography. But this journey never got Walker a shoe in his cart, never showed him a working cart, and never logged him in. Score stays in the 2-3 range until checkout fundamentals are fixed; polish on the top of funnel is wasted if the bottom of funnel doesn't render.

## 7. Evidence

**Step 1 — Homepage:** Hero banner reads "Up to 40% OFF Summer Styles," with three tabs — Slip-ins, Workout Walker, Arch Fit — over large lifestyle photos of men and women walking in Skechers. Text is big and easy to read without zooming. No sign-in state, no personalization. Easy to scan on a phone; no friction here.

**Step 2 — Dismiss Popups:** No overlay/modal was actually dismissed — instead a new promo strip appeared ("Limited Time Only! 25% off Apparel & Bags – Applied at Cart"). Functionally harmless, but the step label doesn't match what happened on screen; there was no popup to dismiss in the first place, which is fine, just worth noting as a mismatch.

**Step 3 — Log In:** Screenshot is identical to Step 2 — same promo banner, same homepage, cart badge still "0." No login form, modal, or navigation appeared. This reads as a broken or non-functional tap target on mobile — a real trust problem, since Walker specifically cross-shops loyalty programs and expects a working account experience.

**Step 4 — Men category:** A full-screen slide-in menu opened with "MEN" heading and large rows — Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories — each with a chevron and generous tap height. Very thumb-friendly, good contrast, no clutter. This is one of the better screens in the journey.

**Step 5 — Men > Shoes:** "Men's Shoes," 732 results, with three lead category cards: Hands Free Slip-Ins, Athletic Sneakers, Slip-On[s]. This is exactly the vocabulary Walker cares about (hands-free, comfort) placed first. Filter/Sort bar and a "Free pickup at Set Location" toggle are both visible and reasonably sized. Good relevance, good layout.

**Step 6 — Product detail (Aero Burst):** Clean PDP — "Skechers Slip-ins: Aero Burst," 4.5 stars/141 reviews, $165.00, large product photo with a "Hands Free Slip-Ins" badge. But directly under the price: "Excluded from promotions" in orange — undercuts the site-wide 40%/25% off banners still showing at the top of the same screen. Confusing and a letdown after being drawn in by discount messaging.

**Step 7 — Add to Cart:** Size grid (7.0–14.0) is large and tappable. But a red "Please select a size" warning is already showing, and the Add to Cart button is highlighted/glowing as the last-tapped element — indicating the add attempt failed because no size was selected first. Net effect: nothing was added to the cart.

**Step 8 — View Cart:** Completely blank white page. No header, no product, no totals, nothing rendered. This is a hard failure — consistent with nothing having been successfully added in Step 7, but even an empty-cart state should show *something* (header, "your cart is empty" message). This is the single worst moment in the journey.

**Step 9 — Search "comfort shoes":** Query returned "1,514 results," but the first two products shown are both Women's — "Contour Foam - Cozy Fit Pure Comfort" ($75) and "Skechers Slip-ins: Glide-Step Comfort - Soft Power" ($85) — despite the entire session being Men's-focused. No gender inference, no personalization, no memory of the Men's Aero Burst just viewed.

---

## Technical Audit

## Technical Summary

Automated audit of 8 steps in the mobile skechers.com journey (Homepage → Log In → Men category → Men > Shoes → PDP → Add to Cart → View Cart → Search). Two steps ("Log In", "Men category") returned HTML identical to the Homepage snapshot (`https://www.skechers.com/`) and share its TTFB (410ms) — the crawler likely captured a client-side overlay/modal state rather than a distinct document, or navigation to those steps failed silently. This should be re-verified before trusting per-step metrics for those two rows. LCP and CLS were not captured for any step (all `?ms`/`?`) — Performance findings below are TTFB- and network-log-only; no conclusion on visual load timing or layout shift can be drawn from this data.

The dominant technical issues are: (1) a large, largely unmanaged third-party script surface loaded on every page, and (2) live 429/502 failures from bot-detection and analytics endpoints during the session.

## Accessibility

18 axe violations across 3 of 8 sampled steps (Homepage, View Cart, Search), 0 reported on Men category, Men > Shoes, PDP, Add to Cart (either clean or not captured for those steps — cannot distinguish from the data given).

- **Critical (2, Homepage):** `button-name` — buttons without discernible text (breaks screen-reader interaction); `aria-required-parent` — ARIA-roled elements missing required parent role (broken ARIA tree).
- **Serious (3):** `link-name` (Homepage) — links with no accessible text; `document-title` and `html-has-lang` (View Cart) — cart page is missing a non-empty `<title>` and an `lang` attribute entirely, unlike Homepage/Log In/Men category which all set `lang="en"`. This indicates the cart view is served from a different template/render path that skipped standard `<head>` boilerplate.
- **Moderate (10):** landmark structure problems recur across all three flagged steps — duplicate/non-top-level `main` and `complementary` landmarks (Homepage), missing `main` landmark entirely and no `h1` (View Cart), duplicate landmark roles (Search) — plus `heading-order` and `region` (content not contained in a landmark).
- **Minor (2):** `aria-allowed-role` on Homepage and Search — invalid role value on an element.

Pattern: View Cart is missing baseline document semantics (`<title>`, `lang`, `main`, `h1`) that are otherwise present on Homepage/Log In/Men category, suggesting the cart is rendered by a separate/lighter component that isn't SSR'd through the standard page shell.

## SEO

- View Cart's missing `<title>` and missing `lang` attribute (flagged above via axe) are also direct on-page SEO defects — both are standard ranking/indexing signals.
- Homepage/Log In/Men category correctly set `<html lang="en" class="g-local-en_US">`.
- Cannot assess `<title>`/meta description content, canonical tags, or structured data for other steps — truncated HTML samples cut off before reaching those `<head>` elements.
- Heavy synchronous accumulation of third-party tags (see Performance) is async-loaded so it shouldn't block crawler rendering, but the volume increases total page weight crawlers must fetch.

## Performance

- TTFB is healthy on 5/8 steps (Homepage 26ms, Men > Shoes 32ms, PDP 22ms, Add to Cart 22ms, Search 26ms) — consistent with edge/CDN-cached responses.
- TTFB is elevated on Log In and Men category (410ms each) and View Cart (118ms) — notably, Log In and Men category share both TTFB and HTML with the Homepage snapshot, so this 410ms figure may reflect a mis-captured/cached duplicate rather than those pages' real backend latency. Treat as unverified.
- LCP and CLS were not measured for any step — no data to evaluate largest-contentful-paint timing or layout stability.
- Every sampled page loads 20+ third-party `<script async>` tags in `<head>` (TikTok Pixel x2, GTM x3 destinations, Quantum Metric, Monetate (x3 endpoints), Impact, Criteo/creativecdn, Bazaarvoice (brsrvr), Bing, PulseInsights, Go2/Tune, WebFontLoader, plus on Men category: Snapchat, Reddit, stape, Facebook, Taboola, Nextdoor). This is a significant JS payload/parse-and-execute cost on every page load, independent of first-party app code, and is a likely contributor to any LCP/TBT regressions even though it isn't directly measured here.

## Mobile Optimization

- Homepage HTML sets `style="--vh: 6.640000000000001px;"` on `<html>` — a JS-computed viewport-height custom property, a standard workaround for mobile browser `100vh` inconsistencies. Indicates mobile viewport handling is deliberately engineered rather than default.
- Viewport `<meta>` tag was not present in the truncated HTML samples provided, so it can't be confirmed as configured correctly (or at all) from this data.
- No mobile-specific rendering, tap-target, or responsive-breakpoint data was captured in this audit.

## Console & Network Errors

19 console errors / 17 network errors logged during the session, all falling into two categories:

- **429 (rate limited), 3 occurrences:** `https://www.skechers.com/149e9513.../2d206a39.../fp?x-kpsdk-v=j-1.2.661` — this is a Kasada bot-detection fingerprinting endpoint. Repeated 429s mean the client is being rate-limited/throttled by the bot-mitigation layer during normal navigation, which risks false-positive friction (CAPTCHAs, blocked actions) for real mobile users, not just bots.
- **502 (bad gateway), majority of errors:** `https://analytics.tiktok.com/api/v2/monitor` — third-party TikTok analytics monitoring endpoint failing server-side. First-party functionality is unaffected, but this is a sustained, silent third-party outage riding along on every page load in this session.

No first-party (skechers.com application) 4xx/5xx errors were observed outside the Kasada fingerprint endpoint.

## Recommendations

1. Re-verify the "Log In" and "Men category" audit steps — identical HTML/TTFB to Homepage strongly suggests a capture/navigation defect in the audit run itself, not real page data.
2. Fix View Cart's missing `<title>`, `lang`, `<main>` landmark, and `<h1>` — likely a template gap where the cart is rendered outside the standard page shell used elsewhere.
3. Add accessible names to unlabeled buttons/links on Homepage (`button-name`, `link-name` — critical/serious) and correct ARIA role nesting (`aria-required-parent`).
4. Normalize landmark structure sitewide (single `main`, top-level `complementary`, no duplicate landmarks, all content in a region) — the same landmark defects recur across Homepage, View Cart, and Search, suggesting a shared layout component issue.
5. Audit and consolidate the third-party script list; several appear duplicated within a page load (two `s.yimg.com/wi/ytc.js`, two `tags.creativecdn.com` includes) — remove redundant tags to cut parse/execution overhead.
6. Escalate the sustained `analytics.tiktok.com` 502s and the Kasada `fp` endpoint 429s to the respective vendor/security team — the 429s in particular risk degrading real mobile user sessions if the fingerprinting service is throttling legitimate traffic.
7. Re-run with LCP/CLS collection enabled — this audit cannot speak to load performance or layout stability without that data.
## Recent history

- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)
- [[2026-08-16-site-journey-walker]] — 2/10 (2026-08-16)
- [[2026-08-15-site-journey-walker]] — 3/10 (2026-08-15)

