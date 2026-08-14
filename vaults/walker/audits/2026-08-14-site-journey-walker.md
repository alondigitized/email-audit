---
slug: 2026-08-14-site-journey-walker
type: site
date: 2026-08-14
persona: walker
score: "3/10"
previous_score: "3/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-3, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 3/10 (prev 3/10) · **Type:** Site journey · **2026-08-14**
## Full review
## 1. Executive Summary

I went in looking for a slip-on, arch-support clog I could just kick on for yard work and errands. I found one, added it to my cart... and then the cart itself never showed up — just a blank white screen. That's the whole story right there. The men's shoe browsing works fine, the comfort messaging is on the homepage where I can see it, but the moment it mattered — checking what's actually in my cart before I pay for it — the site went dark on me. I also never got logged in, so nothing here felt personalized; I was a stranger to this site the entire trip.

## 2. Business Impact Score (1-10)

**3/10** — unchanged from yesterday. Browsing and product discovery are serviceable, but a blank cart page is a hard stop for a real purchase. I don't feel like anything major got fixed since yesterday.

## 3. What's Working

- Homepage has "Slip-ins," "Workout Walker," and "Arch Fit" as top-level shortcuts right under the banner — that's exactly the language I'm shopping for.
- The Men > Shoes category page tags products as "Hands Free Slip-Ins," "Athletic Sneakers," "Slip-On" — again, speaking my language without me having to dig.
- Text size throughout is large enough to read without pinching to zoom.
- The mega-menu (Men category) has clean, tappable rows with chevrons — easy to work with my thumb.
- Product detail page is simple: price, name, size grid, one big "Add to Cart" button. No clutter.

## 4. What's Weak

- **Cart page is completely blank.** After adding an item, tapping into the cart shows nothing — no items, no error, no "empty cart" message, just white space. That's a dead end for anyone trying to check out.
- **Login never actually happened.** The "Log In" step shows the exact same homepage as before I tapped anything — no login form, no modal, nothing. I have no idea if I'm signed in or not.
- **No confirmation the shoe was even added.** The cart icon shows "0" the whole way through, including on the "add to cart" screen itself, and I hadn't picked a size yet (the page was flagging "Please select a size" in red). If I hadn't been paying close attention, I'd have thought I bought a pair of clogs with no size on them.
- **Search results don't know I'm a guy.** I searched "comfort shoes" and got two women's shoes as the top results. I'd just spent three screens looking at men's shoes — the site forgot that instantly.
- Popups/promo banner dismiss step didn't visibly change anything — same banner, same screen as the homepage. Not sure if there was ever anything to dismiss, or if the dismiss just didn't register.

## 5. Recommendations

1. **Fix the cart page rendering** — this is the single biggest issue. A blank cart after adding an item will lose sales outright; I'd assume the site was broken and leave.
2. **Show a real login flow** and, once logged in, actually reflect it (name in the header, order history, etc.) — right now there's zero evidence the login step does anything.
3. **Confirm additions to cart visibly** — a toast, a slide-out mini-cart, anything that shows "added" and updates that cart badge from 0.
4. **Bias search results toward the gender/category I've been browsing** — if I just came from Men's Shoes, don't lead "comfort shoes" results with women's items.
5. Keep leaning into the comfort/arch-support callouts on the homepage and category pages — that part is genuinely working for a shopper like me.

## 6. Bottom Line

The front door is fine — I can find a comfortable slip-on shoe without much fuss. But the site falls apart exactly where it counts: I couldn't confirm my item was added, I couldn't see my cart, and I was never recognized as a logged-in shopper. Until checkout actually works end-to-end, none of the comfort-messaging polish upstream matters — I can't buy the shoe I picked out.

## 7. Evidence

**Step 1 — Homepage:** Blue promo banner ("Up to 40% Off Summer Styles"), search/account/cart/menu icons up top, then a "25% off Apparel & Bags" bar, then three quick links (Slip-ins, Workout Walker, Arch Fit), then a lifestyle collage image. Easy to read, large tap icons. Comfort terms (Slip-ins, Arch Fit) are front and center, which is exactly what I'd want — no personalization visible since I'm not logged in yet.

**Step 2 — Dismiss Popups:** Screenshot is identical to the homepage — no popup appeared to dismiss, or the dismiss didn't do anything visible. No friction, but nothing to report either.

**Step 3 — Log In:** Screenshot is again identical to the homepage. No login form or modal ever appeared. This is a real gap — I can't tell if login is broken, slow, or just wasn't triggered. Either way, the site never shows me anything personalized in this walkthrough.

**Step 4 — Men category:** A clean slide-out menu: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories, each with a chevron and thumbnail images below. Rows are tall and easy to tap with a thumb. This is genuinely one of the better screens — simple, uncluttered, and "Comfort Technologies" as its own menu item tells me this brand knows what guys my age care about.

**Step 5 — Men's Shoes:** "Men's Shoes" heading, three category chips (Hands Free Slip-Ins, Athletic Sneakers, Slip-On), a "Free pickup at [Set Location]" toggle, then Filter/Sort bar and "736 results." Good use of the comfort-tech language right at the top. Slightly overwhelming to know where to start with 736 results, but the chips help narrow it down fast.

**Step 6 — Product detail:** "GO 3D Arch Fit - 3D NanoHex Clog," $90, "No Reviews," Add to Wishlist heart icon, large product photo of a white mesh clog. Clean layout, price is clear. No reviews is a small trust gap for me — I like seeing what other guys say before I spend $90 on a shoe I haven't tried on.

**Step 7 — Add to Cart:** Size grid (M4/W5.5 through M14/W15.5) with a red "Please select a size" warning still showing, QTY dropdown, and a highlighted blue "Add to Cart" button. Cart badge in the header still reads "0." Size boxes are a good tappable size. But this screen makes it look like the add-to-cart attempt didn't go through — no size was selected, so nothing was actually added, and there's no feedback confirming or denying that.

**Step 8 — View Cart:** Completely blank white screen. Nothing rendered — no items, no "your cart is empty" message, no header, nothing. This is the most serious problem in the whole walkthrough — a broken cart page kills the ability to check out.

**Step 9 — Search "comfort shoes":** "1,525 results" with Filter/Sort controls, and the first two products shown are "Contour Foam - Cozy Fit Pure Comfort" ($75, Women's) and "Skechers Slip-ins: Glide-Step Comfort - Soft Power" ($85, Women's). Both are labeled Women's despite my whole session being on the men's side of the site. Not personalized to what I was just browsing, which is a missed opportunity and a little confusing.

---

## Technical Audit

## Technical Summary
The mobile journey through skechers.com (Salesforce Commerce Cloud / SFCC "Demandware" storefront) loads successfully across all 8 steps, but the page is heavily instrumented with third-party tags (30+ async scripts on Homepage alone: GTM, Monetate, TikTok, Snapchat, Taboola, Quantum Metric, Bazaarvoice, Pulse Insights, etc.). Bot-detection middleware (Kasada, `x-kpsdk-*` fingerprinting) is actively rate-limiting the client during the session, and accessibility landmark/ARIA structure is broken on 3 of 8 pages. Core Web Vitals (LCP, CLS) were not captured in this run — only TTFB is available.

## Accessibility
16 axe violations across 3 pages, 2 rated critical:
- **Homepage** (7 violations): `button-name` (critical — icon/interactive buttons lack discernible text, blocks screen-reader users from identifying controls) and `aria-required-parent` (critical — ARIA roles used without required parent role context). Also 4 landmark issues: duplicate `main` landmarks, non-top-level `main`/`complementary` regions, non-unique landmarks, and content not contained in any landmark (`region`) — indicative of nested/duplicated component trees (likely from A/B testing or personalization scripts like Monetate injecting duplicate DOM structures).
- **View Cart** (4 violations, 2 serious): missing `<title>` and missing `html[lang]` — both serious since they break page identification for AT and translation tools. Also missing `h1` and missing a `main` landmark entirely.
- **Search results** (4 violations): same landmark/region pattern as Homepage (duplicate/non-top-level complementary landmark, ungrounded content).
- **No issues found** on Log In, Men category, Men > Shoes, Product Detail, or Add to Cart steps.

The recurring landmark pattern (duplicate `main`, non-top-level `complementary`) across Homepage and Search suggests a shared layout/header-footer component or third-party overlay injecting a second document structure rather than isolated per-page bugs.

## SEO
Cannot fully assess from truncated `<head>` samples, but the View Cart page's missing `<title>` element (flagged under accessibility) is also an SEO defect — an empty/missing title tag removes the page's primary on-SERP signal and breaks browser tab identification. `lang="en"` is present on Homepage/Log In/Men category via `<html lang="en">`, but axe reports it missing on View Cart, meaning the cart page likely renders through a different template or a JS-driven state that drops the attribute. No other SEO-blocking issues (noindex, canonical, robots) observed in the truncated samples.

## Performance
TTFB is healthy on server-rendered steps (Homepage 360ms, Log In 372ms, Men category 372ms) and drops to near-zero (24–28ms) on Men > Shoes, Product Detail, Add to Cart, and Search — consistent with those being cached/CDN-served or client-side-rendered transitions rather than fresh SSR responses. View Cart TTFB (115ms) sits between the two groups.

LCP and CLS were not recorded for any of the 8 steps — this run cannot validate Core Web Vitals thresholds. Given the volume of async third-party scripts loading on every page (identified in the HTML samples: GTM, TikTok, Snapchat, Taboola, Reddit Ads, Quantum Metric, Bazaarvoice, Monetate, Pulse Insights, WebFontLoader), CLS risk is elevated — web font swaps (`wf-mulish-*` classes toggling on `<html>`) and late-injected personalization content are common CLS contributors and should be measured directly.

## Mobile Optimization
No mobile-specific viewport, touch-target, or responsive-layout defects were captured in the provided data. The `--vh` custom property set inline on `<html>` (`style="--vh: 6.64px"`) indicates the site uses a JS-computed viewport-height workaround (common for mobile browser chrome/URL-bar resizing) — this is a reasonable pattern but depends on a resize/orientation listener firing correctly; not independently verified here.

## Console & Network Errors
- **429 rate limiting (4 occurrences)** on `www.skechers.com/.../fp?x-kpsdk-v=...` — this is the Kasada bot-detection fingerprinting endpoint. Repeated 429s mid-session mean the bot-detection layer is throttling the client's own fingerprint submissions, which can degrade or block legitimate traffic (including this automated audit) and is worth flagging to the team running Kasada/PerimeterX-style protection.
- **429 on `/cart/`** — the cart page itself was rate-limited by the same protection layer, a more direct user-facing risk (failed cart loads under bot-mitigation false positives).
- **403 on Bazaarvoice `GetProduct?pid=test`** — this used a literal `pid=test` query param, which strongly suggests this is an artifact of the audit tooling (a placeholder/test call) rather than a genuine site defect; treat as noise unless a real product ID also 403s.
- **Permissions policy violations: "unload is not allowed"** (repeated) — a script on the page (likely one of the many third-party tags) is still using the deprecated `unload` event, which Chrome now blocks via Permissions Policy. This won't break functionality but indicates outdated third-party tag code and will grow noisier as browsers tighten `unload` restrictions further.
- **"Unsupported Summarizer API languages"** (repeated) — this is the Chrome built-in `Summarizer` AI API being invoked with an unsupported language and aborting. This is almost certainly triggered by a Chrome-side feature (extension or built-in AI trial flag) rather than skechers.com code, but if any site or ad-tech script is calling `window.ai`/`Summarizer` directly, it should be located and gated by feature-detection.

## Recommendations
1. Fix `button-name` and `aria-required-parent` on Homepage — audit icon-only buttons (cart, search, menu toggles) for missing `aria-label`/`aria-labelledby`.
2. Resolve duplicate/non-top-level `main` and `complementary` landmarks on Homepage and Search — likely caused by a shared component or A/B testing injection rendering a second layout wrapper; consolidate to one `<main>` per page.
3. Add a non-empty `<title>` and `html[lang]` attribute to the View Cart page template — both are serious/quick fixes and affect SEO and AT equally.
4. Add an `h1` and a `main` landmark to View Cart.
5. Instrument real LCP/CLS collection (e.g., via `web-vitals` library or CrUX) — TTFB alone isn't sufficient to validate mobile performance; the font-swap classes and heavy third-party script load are plausible CLS/LCP risks that need direct measurement.
6. Investigate the Kasada `/fp` 429s and the `/cart/` 429 — confirm whether this is throttling real users during normal mobile sessions, since a cart-page rate limit directly blocks checkout.
7. Audit third-party tags for use of the deprecated `unload` event and replace with `pagehide`/`visibilitychange` to eliminate the recurring Permissions Policy console warnings.
## Recent history

- [[2026-08-13-site-journey-walker]] — 3/10 (2026-08-13)
- [[2026-08-12-site-journey-walker]] — 2/10 (2026-08-12)
- [[2026-08-11-site-journey-walker]] — 2/10 (2026-08-11)

