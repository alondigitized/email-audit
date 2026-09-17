---
slug: 2026-09-17-site-journey-walker
type: site
date: 2026-09-17
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-09-17**
## Full review
## 1. Executive Summary

I went in to find something comfortable, hands-free if possible, that wouldn't kill my feet at the mall. I got as far as picking a shoe I liked — but the site never let me finish the job. Log In did nothing visible, Add to Cart never got past the size chart, and when I tapped View Cart the screen was flat-out blank. I left without a shoe in my cart, which is where it matters. Some of the front-end browsing was genuinely pleasant (big text, a "Hands Free Slip-Ins" tile right where I'd look for it), but a shopper who can't check his cart doesn't finish buying.

## 2. Business Impact Score (1-10)

**2/10** — no change from yesterday. Browsing is fine; the transaction path is broken in the two places that matter most (cart visibility, add-to-cart completion). A comfort-first 62-year-old who hits a blank cart page assumes something's wrong with his order and calls it quits, or worse, wonders if his card got charged for nothing.

## 3. What's Working

- **Big, legible type and simple menu structure.** The hamburger MENU → MEN → Shoes flow (steps 4-5) had large tappable rows, clear underlines on active links, no squinting required.
- **"Hands Free Slip-Ins" tile front and center on Men's Shoes** — that's exactly my kind of shoe, and it's not buried three clicks deep.
- **Arch Fit branding is visible** on both the homepage nav bar and the product I landed on — good, since arch support is non-negotiable for me.
- **Promo messaging is consistent and readable** — "Fall Preview Sale, 2 Pairs for $100" banner shows up on every page without changing or disappearing.
- **Search actually returned a lot of results** for "comfort shoes" (1,547) with filter/sort visible up top.

## 4. What's Weak

- **Log In did nothing.** Screens 1, 2, and 3 are pixel-identical. No login form appeared, no account state changed, cart still read "0." I have no idea if I'm logged in or not.
- **Add to Cart never finished.** What I got instead was a bare size-selection screen with a red "Please select a size" warning — meaning the size was never picked and the item was never actually added.
- **View Cart is a blank white page.** Nothing. No header, no items, no "your cart is empty" message — just white. That's the moment I'd assume the site is broken and bail.
- **Search results aren't personalized at all.** I just spent three screens browsing Men's shoes, and my "comfort shoes" search leads with two Women's items (GO WALK Joy Cozy Fit, Bedford). Doesn't feel like the site was paying attention to what I was doing.
- **Size grid on the PDP is cluttered** — half the sizes are crossed out with little bell icons for "notify me," which on a phone reads as a wall of strikethrough text before you find a size you can actually pick.

## 5. Recommendations

1. **Fix the cart page rendering** — a blank screen on "View Cart" is a checkout-killing bug, not a polish item. Ship a fix before anything else here.
2. **Make Add to Cart require and confirm a size in one clear step**, then show a visible cart count update (toast, badge change) so the shopper knows it worked.
3. **Make Log In visibly do something** — even a simple "Welcome back" banner or account icon change confirms the tap registered.
4. **Filter search results by prior browsing context** (or at minimum let me pin "Men's" so a search doesn't default back to Women's items).
5. **Clean up the size grid** — group available sizes together, push sold-out/notify sizes to a collapsed "more sizes" section so the first thing I see is what I can actually buy.

## 6. Bottom Line

Skechers still can't get a shoe into my cart. The browsing experience improved in small, real ways — good type size, a slip-ins shortcut I actually want — but none of that matters if View Cart shows me a blank page and Add to Cart quietly fails. Score stays flat at 2/10 because the core purchase path is still broken, same as yesterday.

## 7. Evidence

**Step 1 — Homepage:** Clean hero image, big Skechers logo, "20% OFF Sitewide" banner up top, quick-filter chips (Slip-ins, Wide Fit, Arch Fit, Max Cushion) right under the promo bar. Text is large and readable without zooming. No sign-in prompt, no personalization — feels like a first-time visit even though I'm supposedly further along in the journey.

**Step 2 — Dismiss Popups:** Identical screenshot to Step 1. Either there were no popups to dismiss, or the dismissal didn't visibly change anything. Not a real test of that interaction as far as I can see.

**Step 3 — Log In:** Also identical to Step 1. No login modal, no account page, cart badge still "0," person icon unchanged. From what's on screen, nothing happened — I can't tell if I'm logged in, and nothing about the page suggests it recognizes me.

**Step 4 — Men category:** Slide-out MENU panel with "MEN" header and a clean list: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories. Each row is tall enough to tap comfortably, arrows indicate drill-down. Easy to use one-handed. No personalization cues (no "based on your browsing" section), but functionally solid.

**Step 5 — Men > Shoes:** "Men's Shoes" header, 758 results, three visible category tiles: Hands Free Slip-Ins, Walking Shoes, Boots (partial). This is the most on-target moment of the whole journey for me — hands-free and walking comfort are exactly what I care about, and they're first in line. Filter/Sort controls sit above the grid with a "Free pickup" toggle. Good layout for a phone screen.

**Step 6 — Product detail:** GO 3D Arch Fit Horizon slide, $70, only 2 reviews (4 stars), "Get 2 Pairs for $100" callout in red. Product photo is large and clear, swipe arrows on either side. Arch Fit name reassures me on support, though a slide/sandal wasn't really what I was shopping for when I came from "Walking Shoes." Reads fine, no zoom needed.

**Step 7 — Add to Cart:** Instead of a confirmation, I landed on a bare size grid — M4/W5.5 through M15/W16.5, many struck through with bell icons for restock alerts, and a red "Please select a size" warning at the bottom. Cart badge is still "0" in this screenshot. The add-to-cart action clearly didn't complete; I was dumped into an unfinished size picker with no shoe image, price, or context reminding me what I was buying.

**Step 8 — View Cart:** Totally blank white screen. No header, no nav bar, no items, no empty-cart message — nothing. This is the single worst moment in the journey; if this happened to me for real, I'd assume the site crashed and I'd go find these shoes at DSW instead.

**Step 9 — Search "comfort shoes":** 1,547 results came back, which sounds promising, but the first two products shown are both Women's — GO WALK Joy Cozy Fit ($85, 20% off for members) and Bedford ($65, 2-for-$100 eligible). After three screens of Men's browsing, the site handed me women's shoes first. Doesn't feel personalized to who I am or what I was just looking at.

---

## Technical Audit

## Technical Summary
Mobile journey through 8 steps (Homepage → Login → Men category → Men>Shoes → PDP → Add to Cart → View Cart → Search) surfaced 18 axe violations, 13 console errors, and 11 network failures. The most severe finding is a pattern of repeated **429 (Too Many Requests)** responses hit against Skechers' own bot-detection/fingerprinting endpoint and login/search/cart AJAX endpoints, alongside a CORS block on a third-party stylesheet. Cart and search pages are also missing baseline document-level accessibility structure (title, lang, main landmark, h1).

## Accessibility
- **Critical (2):** `button-name` and `aria-required-parent` on Homepage — buttons without discernible text are unusable for screen reader/switch users; ARIA roles are structured without their required parent role, which will misreport widget semantics to assistive tech.
- **Serious (3):** `link-name` (Homepage) — links with no accessible text; `document-title` and `html-has-lang` (View Cart) — cart page has no `<title>` and no `lang` attribute, breaking screen reader language switching and tab identification.
- **Moderate (10):** Duplicate/non-top-level landmarks (`landmark-main-is-top-level`, `landmark-no-duplicate-main`, `landmark-unique`, `landmark-complementary-is-top-level` — Homepage and Search) indicate nested or repeated `<main>`/`<aside>` regions, likely from injected third-party widgets (Monetate, Stylitics) breaking landmark hierarchy. `region` violations (Homepage, Search) mean some content isn't contained in any landmark. `heading-order` (Homepage) and `page-has-heading-one`/`landmark-one-main` (View Cart) — cart page has no h1 and no main landmark at all.
- **Minor (2):** `aria-allowed-role` on Homepage and Search — invalid role values on elements.
- Net effect: the View Cart page fails the most basic document accessibility requirements (title, lang, main, h1), which is a checkout-adjacent page — highest-risk page to have this gap.

## SEO
- View Cart page lacking a `<title>` element and `lang` attribute is also an SEO defect, not just accessibility — indexation and language-targeting signals are absent on that URL state.
- `<html lang="en">` is present on Homepage/Login/Men category (confirmed from HTML samples) but reportedly missing at the View Cart step per axe, indicating the lang attribute is being stripped or not re-applied on client-side cart re-render (SPA-style DOM swap on `/cart/` rather than full navigation).
- Heavy third-party tag payload in `<head>` (TikTok, Snapchat, Reddit, Taboola, Quantum Metric, Monetate, Bing, GTM x2, Pinterest, Impact, CreativeCDN, BrightEdge, PulseInsights, Tune/Go2, Facebook) delays when crawlable content and canonical/meta tags in `<head>` are parsed — no canonical/meta description tags are visible in the truncated samples provided, though truncation limits certainty here.

## Performance
- TTFB is generally strong (28–49ms) except **Log In (442ms)** and **Men category (442ms)** — a 10-15x spike versus other steps, correlating with the 429 responses on the same steps (Login modal, fingerprinting endpoint). This suggests server-side throttling/challenge logic adding latency, not just rejecting requests.
- LCP/CLS were not captured in this run (`?`) — cannot assess render-blocking or layout-shift impact; re-run with metrics collection enabled before drawing conclusions on visual load performance.
- Render-blocking risk: dozens of synchronous-adjacent `<script>` tags (many without `async`/`defer` misuse aside, most do carry `async`) execute before/around `webfontloader.js`, which itself blocks web font application (`wf-*-active` classes added post-load) — contributes to potential FOUT/CLS not captured here.

## Mobile Optimization
- No mobile-specific viewport, tap-target, or responsive markup issues surfaced in the provided HTML samples (viewport meta not visible in truncated output — cannot confirm without full `<head>`).
- The `--vh: 6.64px` inline style on `<html>` indicates a JS-computed viewport-height polyfill (common iOS Safari 100vh fix) — functioning as expected, no issue.
- Landmark/region violations (Homepage, Search) are more likely to affect mobile screen-reader swipe navigation (VoiceOver/TalkBack) than desktop, since linear landmark traversal is the primary mobile a11y navigation method.

## Console & Network Errors
- **8x HTTP 429** against `/149e9513-.../fp?x-kpsdk-v=...` (a Kasada/PerimeterX-style bot-detection fingerprint endpoint) and against `Login-SkechersPlusModals`, `Search-Show`, `Product-Show` demandware actions, plus one on `/cart/` itself. This is the dominant network issue: the site's own bot-mitigation layer is rate-limiting the session's normal navigation, which will also throttle real users on flaky mobile networks or when automated QA/monitoring tools run this same journey repeatedly from one IP.
- **1x CORS block**: `web-assets.stylitics.com/style.css` rejected due to missing `Access-Control-Allow-Origin` — this is an outfit-recommendation widget stylesheet failing to load, degrading that component's styling silently.
- **1x `net::ERR_FAILED`**, consistent with a request abandoned after the CORS rejection or a 429 exhausting retries.
- No JS runtime exceptions (TypeErrors, undefined references) were reported — all 13 console errors trace back to the two network issues above.

## Recommendations
1. Investigate the fingerprinting/rate-limit config (`x-kpsdk-v` bot-detection service) — 429s on login, search, product, and cart actions during a single normal mobile session strongly suggest rate-limit thresholds are too aggressive for legitimate traffic, or the session's fingerprint is being misclassified.
2. Fix the Stylitics CORS misconfiguration by adding the requesting origin (`www.skechers.com`) to that stylesheet's `Access-Control-Allow-Origin` — likely a config change on the Stylitics account/CDN side.
3. Root-cause the 442ms TTFB spikes on Login and Men category — check if they're a direct consequence of the bot-detection challenge adding server-side processing before serving the response.
4. Add `<title>`, `lang`, and a top-level `<main>` with an `<h1>` to the View Cart page template — it currently fails 4 of the most fundamental HTML/accessibility requirements, on a page in the direct path to checkout.
5. Audit landmark structure on Homepage and Search: consolidate duplicate `<main>`/`<aside>` elements (likely introduced by third-party widget markup) and ensure all content sits inside a landmark region.
6. Fix Homepage `button-name`/`link-name` violations by adding accessible text (visible label, `aria-label`, or `aria-labelledby`) to icon-only buttons/links.
7. Re-run with LCP/CLS capture enabled — current data can't confirm render performance or layout stability; the TTFB anomalies alone don't tell the full story.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

