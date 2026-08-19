---
slug: 2026-08-19-site-journey-walker
type: site
date: 2026-08-19
persona: walker
score: "1/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-1, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 1/10 (prev 2/10) · **Type:** Site journey · **2026-08-19**
## Full review
## 1. Executive Summary

I walked through skechers.com on my phone the way I would if I were actually looking for new walking shoes. The homepage itself is fine to look at and even leads with the comfort tech I care about (Slip-ins, Workout Walker, Arch Fit) right up top. But the moment I tried to do anything that matters — log in, put a shoe in my cart, or check my cart — things fell apart. My "Add to Cart" tap threw a "Please select a size" error instead of adding the shoe, and when I opened my cart afterward, I got a completely blank white page. Nothing. No header, no "your cart is empty," nothing to tap. That's not a shopping site glitch, that's a dead end.

## 2. Business Impact Score (1-10)

**1/10** — This is a regression from yesterday's 2/10, not an improvement. Yesterday's score already reflected a broken experience; today I hit a hard stop at checkout with a totally blank cart page, on top of a login flow that silently failed. A shopper who can't add an item to cart or view a cart can't buy anything. That's the whole business, gone.

## 3. What's Working

- The homepage does surface comfort-first messaging early: "Slip-ins," "Workout Walker," and "Arch Fit" are right there as tappable chips before I scroll.
- Men > Shoes landing page is smartly organized for someone like me — "Hands Free Slip-Ins" and "Walking Shoes" are the first two category tiles, ahead of generic "Athletic Sneakers."
- The product page for the Contour Foam Cozy Fit slip-in is clean and legible: big price ($88.00), star rating with review count (1,741 reviews), and a clear "Hands Free Slip-Ins" badge so I know what I'm getting.
- Size selection buttons on the PDP are large, well-spaced squares — easy to tap with a thumb, no pinching required.
- Touch targets for nav (search, account, cart, menu) are consistently sized across every screenshot.

## 4. What's Weak

- **Add to Cart doesn't work as tapped** — it threw a "Please select a size" validation error instead of completing the action. A real shopper hitting this needs to notice the error, scroll back up, pick a size, and try again — a moment where a lot of people just give up.
- **Cart page is completely blank** — no header, no product, no "empty cart" message, nothing. This is worse than an empty cart; it looks broken.
- **Login never actually happened** — tapping the account icon opened the "MEN" navigation flyout instead of any login form. I never saw a login screen, and nothing ever looked personalized (cart stayed at "0" the entire journey, no greeting, no saved info).
- **Search results aren't relevant to context** — searching "comfort shoes" while I'd been browsing men's shoes returned women's shoes first ($75 and $85 items), not men's.
- **Homepage load itself timed out** during capture (30-second timeout waiting on fonts) — a real-world sign the page can be sluggish, which matters more on an older phone or spotty connection.
- Nothing on the homepage or PDP does the "price-vs-quality" math for me (cost per wear, comparison vs. other comfort brands) — I'm left to do that thinking myself.

## 5. Recommendations

1. **Fix the cart page rendering bug immediately** — a blank white screen at checkout is a five-alarm issue, not a polish item.
2. **Fix Add to Cart validation UX** — either scroll/highlight the size selector automatically when a size is missing, or disable the Add to Cart button until a size is picked, so the error is impossible to miss (or better, impossible to hit).
3. **Fix login** — the account icon should open a login/account panel, not the Men navigation menu. Right now there is no way to sign in at all from what I saw.
4. **Make search gender-aware** — if I'm browsing men's shoes, "comfort shoes" should default to men's results, or at least let me filter without leaving the search page.
5. **Investigate homepage load time** — a 30-second screenshot timeout on font loading suggests real users may see a slow or janky first paint.

## 6. Bottom Line

Skechers put the right comfort messaging in front of me on the homepage and category pages — Slip-ins, Walking Shoes, Arch Fit are exactly what get my attention. But none of that matters if I can't check out. Between the broken Add to Cart, the blank cart page, and login going nowhere, I couldn't complete a single real task today. This isn't a rough edge — it's a broken store.

## 7. Evidence

**Step 1 — Homepage:** Screenshot shows the standard hero with a promo bar ("Up to 40% OFF Summer Styles"), a "Back to School Guide" banner, and category chips for Slip-ins/Workout Walker/Arch Fit above two large lifestyle photos of young models walking. Text is legible without zooming, layout is single-column and thumb-friendly. Friction: the capture itself hit a 30-second timeout waiting for fonts to load — a real performance flag even though the page did eventually render. Not personalized: no sign I'm logged in or that content reflects anything about me.

**Step 2 — Dismiss Popups:** No popup or modal appeared in this screenshot — it's the same homepage, just with the promo bar text swapped to "25% off Apparel & Bags." Easy in the sense that there was nothing blocking me, but it also means this step didn't do what its label suggests (there was nothing to dismiss, or something failed silently).

**Step 3 — Log In:** Instead of a login screen, I see the "MEN" flyout navigation menu (Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories). No login form ever appeared. This is confusing — tapping the account icon should get me to sign-in, not a category menu. Not personalized at all since I was never actually logged in.

**Step 4 — Men category:** Same MEN flyout menu as step 3, confirming the login tap never opened an account panel — it just landed on category navigation. The menu itself is readable and the links are large enough to tap, but this step effectively duplicates step 3's outcome.

**Step 5 — Men > Shoes:** Clean listing page: "Men's Shoes" header, three category tiles (Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers) with product photography, a "Free pickup" toggle, Filter/Sort controls, and "733 results." This was easy to scan and the comfort-relevant categories are front and center — genuinely good for someone shopping like me.

**Step 6 — Product detail:** Skechers Slip-ins: Contour Foam - Cozy Fit, Men's, $88.00, 1,741 reviews (4.5ish stars), with a "Hands Free Slip-Ins" badge and large product photo. Text is big and readable, no zooming needed. This page felt on-target for what I'd search for.

**Step 7 — Add to Cart:** Size grid (6.5–14.0) is large and tappable, but a red "Please select a size" warning shows instead of a successful add — the Add to Cart tap failed validation rather than completing. Cart badge presumably still at 0. This is friction, not delight: I did what looked like the right action and got an error instead of confirmation.

**Step 8 — View Cart:** Completely blank white page — no header, no nav, no cart contents, no empty-state message. This is the worst screen in the entire journey and effectively ends the shopping trip here.

**Step 9 — Search "comfort shoes":** Returns "1,514 results" but the two visible results are women's shoes ($75.00 and $85.00) despite my having been browsing men's shoes moments earlier. Not personalized to my browsing context, and not filtered to what I'd actually be looking for.

---

## Technical Audit

## Technical Summary

The journey through Log In → Men category → Men > Shoes → PDP → Add to Cart → View Cart → Search was captured across 7 steps. Server response times (TTFB) are healthy throughout (30–492ms), but LCP and CLS were not captured for any step, leaving Core Web Vitals unverified. The View Cart page returns a DOM that fails basic document structure checks (no `<title>`, no `lang`, no landmarks, no H1), and the flow is repeatedly throttled (HTTP 429) by the site's bot-detection layer, including on `/cart/` itself. The `<head>` on every page loads 20+ third-party tags (ad pixels, tag managers, analytics), several of them duplicated.

## Accessibility

- **[serious] `document-title`** — View Cart page has no non-empty `<title>` element.
- **[serious] `html-has-lang`** — View Cart page's `<html>` lacks a `lang` attribute (present on other steps' `<html class="g-local-en_US" lang="en">`, so this is a regression specific to the cart render path — likely a partial/AJAX-rendered cart view rather than a full page load).
- **[moderate] `landmark-one-main`** — View Cart page has no `<main>` landmark.
- **[moderate] `page-has-heading-one`** — View Cart page has no H1.
- **[minor] `aria-allowed-role`** — Search results page uses a disallowed ARIA role on an element.
- **[moderate] `landmark-complementary-is-top-level`** — Search results page nests an `<aside>`/complementary landmark inside another landmark.
- **[moderate] `landmark-unique`** — Search results page has duplicate landmarks without distinguishing `aria-label`s.
- **[moderate] `region`** — Search results page has content outside any landmark region.

The clustering of 4 violations on View Cart (missing title/lang/main/h1) suggests that page is served as a stripped-down fragment or client-rendered shell distinct from the rest of the site's document structure, rather than isolated component-level bugs.

## SEO

- Missing `<title>` and missing `lang` on the View Cart document (see Accessibility) are also indexing/relevance signals; low risk if `/cart/` is `noindex`ed, but should be confirmed.
- Missing H1 and main landmark on View Cart reduces the page's semantic clarity for crawlers, same caveat as above.
- Duplicate/redundant tag-manager destinations firing on every page (`gtag/destination?id=AW-1066305778`, `gtag/destination?id=DC-9630990`, plus a separate `gtag/js?id=G-XZTV9LQ9DQ`) don't affect SEO directly but indicate tag-management sprawl worth auditing for crawl-budget-irrelevant script weight.
- Meta description/canonical tags were not visible in the truncated `<head>` samples — not assessable from the data provided.

## Performance

- TTFB is good across all steps (30–492ms), with the two highest (492ms) on Log In and Men category — likely first-visit personalization/segmentation overhead, not a server issue on its own.
- **LCP and CLS were not captured for any of the 7 steps.** This is an instrumentation gap, not a "no issues found" — Web Vitals should be re-run with a working collector before performance can be certified.
- The `<head>` on every page synchronously/async-loads 20+ third-party scripts (Snapchat, Taboola, Nextdoor, Meta Pixel, Reddit, TikTok ×2, Quantum Metric, Impact, CreativeCDN, Bloomreach, Bing, Yahoo ×2, Monetate ×2, PulseInsights, Tune/GoAffPro, WebFontLoader, Pinterest, 3 separate GTM/gtag endpoints). Even as `async`, this volume of third-party JS competes for main-thread time and network concurrency during initial load, which plausibly degrades LCP/INP.
- Duplicate script loads observed within a single page: `https://tags.creativecdn.com/dhGobFICKSkk6J9nvQPw.js` and `https://s.yimg.com/wi/ytc.js` each appear twice in the same document — redundant requests with no caching/dedup guard.
- Repeated 429s against the Kasada bot-mitigation fingerprint endpoint (`/fp?x-kpsdk-v=...`) during normal browsing indicate the anti-bot layer is rate-limiting/retrying against legitimate traffic, adding latency and wasted round trips mid-session.

## Mobile Optimization

- The page sets `--vh` as an inline custom property (`style="--vh: 6.64px"`) via JS, a common workaround for mobile Safari's `100vh` viewport bug — correctly implemented pattern, no issue evident.
- Mobile viewport `<meta name="viewport">` was not visible in the truncated HTML samples provided and cannot be confirmed either way.
- With CLS unmeasured (see Performance), layout-shift risk on mobile viewports — a common byproduct of this many async-injected third-party widgets/pixels — is unverified rather than confirmed absent.

## Console & Network Errors

- **429 (Too Many Requests) ×6** against `https://www.skechers.com/149e9513.../fp?x-kpsdk-v=j-1.2.697` — this is Kasada's bot-detection fingerprinting endpoint, being throttled repeatedly within one session.
- **429** on `https://www.skechers.com/cart/` — the cart page load itself was rate-limited by the same bot-mitigation layer, a direct functional risk to checkout, not just a background script.
- **CORS policy block** on `https://web-assets.stylitics.com/style.css?base=grid&theme=skechers&...` — missing `Access-Control-Allow-Origin` header prevents the stylesheet from loading cross-origin from `www.skechers.com`, likely breaking the Stylitics "shop the look" widget's styling.
- **`net::ERR_FAILED`** — a failed resource load, consistent with the CORS-blocked stylesheet above.
- **400 (Bad Request)** on `https://ct.pinterest.com/v3/` — Pinterest conversion-tracking call rejected, likely a malformed/stale payload from the tag.

## Recommendations

1. Investigate why `/cart/` and the Kasada `/fp` fingerprint endpoint return 429s during normal navigation — legitimate mobile sessions are being throttled by bot mitigation; tune rate limits or allowlist the expected request pattern for the checkout path.
2. Fix the View Cart document to include a `<title>`, `lang` attribute, `<main>` landmark, and H1 — audit whether cart renders as a distinct fragment/template missing the standard page shell.
3. Resolve `landmark-unique`, `region`, and nested-complementary-landmark issues on the Search results page; likely a duplicated widget (e.g., filter sidebar) rendering without unique `aria-label`s.
4. Add CORS headers on `web-assets.stylitics.com` (or proxy/self-host the stylesheet) to stop the blocked cross-origin stylesheet load.
5. Re-run Web Vitals collection — LCP/CLS were not captured for any step; performance cannot be certified without this data.
6. Deduplicate third-party script loads (`tags.creativecdn.com`, `s.yimg.com/wi/ytc.js` each fire twice) and audit the ~20-tag `<head>` payload for consolidation via a single tag manager to reduce main-thread contention.
7. Fix the malformed Pinterest conversion request returning 400 at `ct.pinterest.com/v3/`.
## Recent history

- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)
- [[2026-08-16-site-journey-walker]] — 2/10 (2026-08-16)

