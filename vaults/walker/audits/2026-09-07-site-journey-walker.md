---
slug: 2026-09-07-site-journey-walker
type: site
date: 2026-09-07
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-09-07**
## Full review
## 1. Executive Summary

I went to skechers.com on my phone the way I always do — see the Labor Day banner, poke around Men's, find something with cushion, try to buy it. The browsing part is fine, even nice — I found a slip-in shoe with good arch support language and a price I could live with. But the moment it mattered — checking out — the site fell apart. I never got logged in, I clicked "Add to Cart" without picking a size (the site let me try), and then "View Cart" showed me a **blank white screen**. My cart icon said "0" the whole way through. If I were doing this for real, I'd have given up and driven to the DSW near my house.

## 2. Business Impact Score (1-10)

**2/10** — same as yesterday, no real change. Browsing and product pages are solid, but the transaction path is broken at two separate points (login and cart), which means this journey did not result in a shoe in my cart, let alone an order.

## 3. What's Working

- Homepage banner is clear and readable — "LABOR DAY SALE, 20% OFF SITEWIDE" in big bold text, no squinting required.
- The hamburger menu for Men > Shoes was easy to tap and the submenu (Shoes, Shop by Activity, Comfort Technologies, Collections) is logically laid out.
- The product detail page for the Slip-ins Contour Foam shoe hit exactly what I'm looking for: "Hands Free Slip-ins" badge front and center, star rating with review count, price ($88.00) and a clear "Members Get 20% OFF" callout.
- Search for "comfort shoes" actually returned relevant, on-target results — slip-ins, a "Max Cushioning Elite 3" model — with prices and swatches visible without extra taps.
- Text size throughout is large enough for me to read without pinch-zooming.

## 4. What's Weak

- **Login never happened.** Step 3 (Log In) shows the exact same homepage screenshot as steps 1 and 2 — no login form, no modal, nothing. Either the tap didn't register or the login entry point isn't where a screen-reader-of-the-page would expect it. I never got a personalized experience.
- **Add to Cart didn't actually add anything.** On the product page, there's a red "Please select a size" warning showing *before* I did anything, and the cart badge stayed at "0" through checkout, view cart, and search. It looks like Add to Cart was tapped without a size chosen, and the site let that happen without forcing me back to fix it clearly.
- **View Cart is a dead blank page.** Step 8 is completely white — no header, no items, no error message, nothing. That's the moment I'd normally confirm my order and every other retailer's cart page is functioning. This is a hard stop for someone like me who doesn't have patience to troubleshoot a broken page.
- No sign anywhere that the site remembers my loyalty status, past purchases, or picks up on "comfort shopper" behavior (recommended arch-support styles, wide-width defaults, etc.).

## 5. Recommendations

1. Fix whatever's failing on the cart page — a blank screen after "add to cart" is the single biggest revenue killer in this whole flow. Test it on real devices before it ships.
2. If a size isn't selected, either disable "Add to Cart" or scroll/flash the size selector — don't let the click silently fail.
3. Make sure the login entry point actually opens a login screen on mobile; audit whatever step is supposed to trigger it.
4. Once login works, personalize the homepage and PDP for logged-in Skechers Plus members — show my size defaults, past orders, arch-support picks.
5. Carry a comfort-brand comparison callout (vs. Hoka/Brooks/New Balance) somewhere near the PDP — I cross-shop, and nothing here tells me why Skechers wins on comfort math versus them.

## 6. Bottom Line

Browsing feels built for someone like me — big text, clear sale messaging, good product content. But I can't buy anything, because two separate parts of the checkout path are broken (login does nothing, cart page is blank). A comfort shopper who can't complete a purchase just leaves for DSW or Amazon. Score holds flat at 2/10 versus yesterday — no regression, but also no fix to the core problem.

## 7. Evidence

**Step 1 — Homepage:** Labor Day sale banner ("20% OFF SITEWIDE") dominates the screen, nav icons (search, account, cart, menu) sit cleanly in the header. Easy to read, no zoom needed. Cart badge shows "0." Not personalized — generic promo for all visitors.

**Step 2 — Dismiss Popups:** Screenshot is identical to Step 1 — no popup appeared to dismiss, or the dismiss action had no visible effect. Not a big deal on its own, but worth noting nothing changed.

**Step 3 — Log In:** Screenshot is again identical to the homepage. No login form, modal, or account page appeared. This is a real failure point — I was never able to sign in, so I can't judge login usability or "did it feel personalized" beyond "no."

**Step 4 — Men category:** Slide-out menu opened cleanly with a back arrow and X to close. Categories (Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories) are large, tappable, and clearly labeled — genuinely easy for my thumbs and eyes.

**Step 5 — Men > Shoes:** Landed on "Men's Shoes" with a 3-up carousel up top labeled "Hands Free Slip-Ins," "Walking Shoes," "Athletic Sneakers" — exactly my shopping categories. Filter/Sort bar is visible and tappable, "736 results" tells me scope. A "Free pickup at [Set Location]" toggle is a nice touch for local availability.

**Step 6 — Product detail:** Skechers Slip-ins: Contour Foam - Cozy Fit Copost, $88.00, 5-star rating (4 reviews), "Members Get 20% OFF" pricing note, and a "HANDS FREE Slip-ins" badge graphic right on the page. This is well-targeted content for a comfort-first shopper — no complaints here.

**Step 7 — Add to Cart:** Size grid (7.0–13.0) is large and easy to tap, but a red "Please select a size" warning is already showing, and the "Add to Cart" button was pressed without a size chosen. Cart badge still reads "0" — the add didn't register anything.

**Step 8 — View Cart:** Completely blank white page. No header, no cart contents, no error text — a dead end. This is the most damaging screen in the whole journey.

**Step 9 — Search "comfort shoes":** Recovered from the blank cart page fine — search returned 1,517 results with two solid, relevant items up top (Slip-ins Go Walk Joy, Max Cushioning Elite 3) complete with images, color swatches, and pricing. Functionally the strongest step in the journey, though it's a women's-first result set on a search with no gender specified, which feels like a minor mismatch for a search coming right after browsing Men's.

---

## Technical Audit

## Technical Summary

The mobile journey through skechers.com was audited across 8 steps (Homepage → Search). The homepage and category pages inject a large number of third-party analytics/marketing scripts (TikTok, Snapchat, Reddit, Meta, Taboola, Impact, Quantum Metric, Monetate, Bing, GTM/GA4, PulseInsights, etc.), all loaded on initial page load. Server response times (TTFB) are generally healthy (57–576ms), with the homepage TTFB (576ms) notably higher than all other steps. LCP and CLS were not captured in this run. The cart step returned repeated HTTP 429 responses, and 18 axe-core accessibility violations were found, concentrated on the Homepage, View Cart, and Search results pages.

## Accessibility

18 axe violations detected, 3 rated critical/serious on the homepage alone:

- **Homepage** (10 violations): `button-name` (critical — buttons with no discernible text), `aria-required-parent` (critical — ARIA roles missing required parent containers), `link-name` (serious — links with no accessible text), `aria-allowed-role` (minor), plus a cluster of landmark issues: `landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `landmark-complementary-is-top-level`, `region`, and `page-has-heading-one` (no `<h1>` present).
- **View Cart** (4 violations, all serious/moderate): `document-title` (empty `<title>`), `html-has-lang` (missing `lang` attribute on `<html>`), `landmark-one-main` (no main landmark), `page-has-heading-one`.
- **Search results** (4 violations): `aria-allowed-role`, `landmark-complementary-is-top-level`, `landmark-unique`, `region`.

The duplicate/non-top-level `main` and landmark violations indicate multiple nested or duplicated ARIA landmark regions in the DOM (likely from third-party widget markup), which breaks screen-reader navigation. The missing `<h1>` on both homepage and cart, combined with unlabeled buttons/links, will fail WCAG 2.1 A/AA (1.3.1, 2.4.6, 4.1.2).

## SEO

- View Cart page fails `document-title` (empty `<title>`) and `html-has-lang` — both directly harm SEO indexing/crawling in addition to accessibility, since an empty title provides no signal for that URL and a missing `lang` attribute affects language targeting.
- Missing `<h1>` on Homepage and View Cart weakens on-page heading structure/semantic hierarchy used for content relevance signals.
- Sampled HTML shows a large synchronous/async third-party script payload injected in `<head>` ahead of primary content, which can delay content becoming available to crawlers that execute JS with limited timeouts.

## Performance

| Step | TTFB | LCP | CLS |
|---|---|---|---|
| Homepage | 576ms | not captured | not captured |
| Log In | 410ms | not captured | not captured |
| Men category | 410ms | not captured | not captured |
| Men > Shoes | 60ms | not captured | not captured |
| Product detail | 65ms | not captured | not captured |
| Add to Cart | 65ms | not captured | not captured |
| View Cart | 131ms | not captured | not captured |
| Search | 57ms | not captured | not captured |

- Homepage TTFB (576ms) is ~1.4–9x higher than every other step, suggesting heavier server-side processing (personalization/Monetate calls) or lack of edge caching on `/`.
- LCP and CLS could not be captured in this run — likely due to the page never reaching a stable paint/load event, consistent with the 429 rate-limiting and CORS-blocked stylesheet observed on the same pages. This should be re-run to get real values before drawing rendering-performance conclusions.
- HTML samples show 25+ third-party scripts (ad pixels, tag managers, chat/testing widgets) loaded on every page view, most as separate `async` requests — this is a meaningful contributor to main-thread contention and JS execution cost on mobile, even though it doesn't block TTFB.

## Mobile Optimization

- No mobile-specific rendering errors observed in the HTML/network data provided.
- The CORS-blocked Stylitics stylesheet (`web-assets.stylitics.com/style.css`) means an outfit/styling widget's CSS fails to load — on mobile this typically produces an unstyled/broken widget rather than a layout shift, since it's a stylesheet, not layout-critical CSS.
- No viewport, touch-target, or responsive-markup issues surfaced in the axe violation set (axe does not test touch-target sizing by default, so this is inconclusive rather than "no issues found").

## Console & Network Errors

**429 (Too Many Requests) — 5 occurrences**, all against:
- `www.skechers.com/149e9513.../2d206a39.../fp?x-kpsdk-v=j-1.2.774` (4x) — this endpoint pattern (`kpsdk`) is the Kasada bot-mitigation fingerprinting endpoint. Repeated 429s here indicate the site's bot-detection layer is rate-limiting/throttling the automated session, which likely also explains the missing LCP/CLS data.
- `www.skechers.com/cart/` (1x) — the cart page itself was rate-limited, a functional/UX-impacting failure, not just a background call.

**CORS violation**: `web-assets.stylitics.com/style.css` blocked from origin `www.skechers.com` — missing `Access-Control-Allow-Origin` header on the Stylitics asset, causing `net::ERR_FAILED` and the stylesheet to not load.

**Browser API warnings (4x)**: "Unsupported Summarizer API languages" — this is a Chrome built-in AI (`window.ai` Summarizer) API call being made with an unsupported language, aborted client-side. This is browser/extension-level, not necessarily a site defect, but recurring identically 4 times suggests a script on the page (or a paired extension) is invoking this API without a language capability check.

## Recommendations

1. Investigate the Kasada (`kpsdk`) 429s on the cart flow — if this reflects real-user throttling under normal mobile traffic (not just automated testing), it would block checkout entirely; if it's testing-tool-specific, document the exclusion but still verify cart isn't rate-limited for legitimate high-frequency interactions (e.g., users double-tapping "Add to Cart").
2. Add `Access-Control-Allow-Origin` to the Stylitics CDN response, or serve the Stylitics stylesheet same-origin/proxied, to fix the CORS failure.
3. Fix View Cart page metadata: add a non-empty `<title>` and `lang="en"` on `<html>` — both are one-line template fixes with outsized SEO/accessibility impact.
4. Add a single `<h1>` to Homepage and View Cart, and resolve duplicate/non-top-level `main`/landmark elements (likely from nested third-party widget markup) to restore a valid landmark structure.
5. Add discernible accessible names (`aria-label` or visible text) to the unlabeled buttons and links flagged by `button-name`/`link-name` on the homepage.
6. Re-run the performance capture outside of the bot-mitigation throttling window to get real LCP/CLS numbers — current data is inconclusive, not "passing."
7. Audit the homepage's third-party script count/loading strategy (many are `async` but still 25+ distinct origins) as a lever to reduce main-thread work on mobile, independent of the LCP/CLS gap above.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

