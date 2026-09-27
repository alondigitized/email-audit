---
slug: 2026-09-27-site-journey-walker
type: site
date: 2026-09-27
persona: walker
score: "1/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-1, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 1/10 (prev 2/10) · **Type:** Site journey · **2026-09-27**
## Full review
## 1. Executive Summary

I set out to buy a pair of comfortable slides after browsing men's shoes, and the site would not let me. The cart never registered my item (badge stayed at "0" through every single screenshot, including *after* I supposedly added to cart), and when I tapped through to "View Cart" I got a completely blank white page — nothing loaded at all. On top of that, the "Log In" step never showed me a login screen; it showed me the hamburger menu instead. And when I searched "comfort shoes" like I actually would at home on my phone, the top results were women's shoes. For a $70 impulse-adjacent purchase, that's three broken links in the chain before I'd even get to checkout. I'd have given up and ordered from Hoka's app by this point.

## 2. Business Impact Score (1-10)

**1/10.** This isn't a "friction" review, it's a "the cash register is broken" review. A shopper who successfully found a shoe, picked a size, and hit Add to Cart got a dead-end blank page and a cart that still says zero items. That's a hard stop on revenue, not a UX nitpick. This is flat or worse than yesterday's 2/10 — yesterday something apparently still resolved; today the cart page didn't even render.

## 3. What's Working

- The product detail page for the slide is clean: big readable price ($70.00), star rating with review count, clear membership discount callout ("Members Get an Extra 10% OFF!"). That's the kind of big, simple type I can read without my glasses.
- The Men's Shoes category page smartly surfaces "Hands Free Slip-Ins" and "Walking Shoes" as the first two tiles — that's exactly my comfort-first shopping pattern, and it's nice someone thought about that.
- The hamburger menu has a dedicated "Comfort Technologies" row, which is the kind of cross-brand comparison hook (Arch Fit, etc.) that actually matters to me over a logo.
- Size chart buttons on the size-selection screen are big, well-spaced rectangles — good touch targets, no chance of a mis-tap.
- The persistent "Extra 10% OFF Everything" banner and Arch Fit branding at least signal comfort + value, which is squarely my buying trigger.

## 4. What's Weak

- **Add to Cart appears to silently fail.** The cart icon shows "0" on every single screenshot in this journey, including the ones captured after the Add to Cart step. Either the tap didn't register, or a required selection (size) blocked it without a clear on-screen prompt at the moment of tapping.
- **View Cart is a blank white page.** Nothing rendered — no header, no items, no error message. That's the single worst thing on this list. If I hit that in real life, I'd assume the site was down and leave.
- **The "Log In" step never showed a login form.** The screenshot for that step shows the MEN mega-menu instead. I have no idea if I'm logged in or not, and nothing in later screens (account icon stays a plain outline, no "Hi Walker" greeting, no personalized recommendations) suggests I ever got logged in.
- **Search relevance is off for a men's-only journey.** I searched "comfort shoes" right after browsing men's shoes, and the first two results shown are labeled "Women's." If the site knows anything about what I was just looking at, it isn't using it.
- **Homepage hero is a basketball/WNBA video ad.** Loud, autoplaying, nothing to do with a 62-year-old looking for a slip-on walking shoe. It also never showed me an actual popup to dismiss during the "Dismiss Popups" step — just more of the same autoplaying video, so I don't know if a popup even fired or if that step did nothing.
- No visible price-vs-quality comparison content, no cross-brand comparison (Hoka/Brooks/New Balance) anywhere in this journey — I'd have to leave the site to do that math myself.

## 5. Recommendations

1. **Fix Add to Cart end-to-end and QA the cart page immediately.** A blank cart page is a P0 bug, not a nice-to-have polish item — every dollar in this funnel dies there.
2. **Verify the login flow actually reaches a login form** and that a successful login visibly changes the header (name greeting, order history link, personalized picks).
3. **Tie search results to recent browsing/gender context** — a Men > Shoes visit immediately before a "comfort shoes" search should bias results toward men's product, not lead with women's.
4. **Swap the homepage hero for something matching the visiting segment**, or at minimum make sure a popup (loyalty signup, email capture, cookie consent) actually surfaces so the "dismiss" step means something.
5. **Add a simple comfort/arch-support comparison module** on category or search pages — even a filter chip for "Arch Support" or "Slip-On" would speak directly to how I shop.

## 6. Bottom Line

I never got a shoe into a cart I could see. Everything downstream of "I like this slide" broke — the add, the cart page, and the personalization I'd expect from being logged in. Yesterday was already a 2/10; today's blank cart page is arguably a step backward. Until checkout actually works, none of the merchandising niceties (Arch Fit callouts, comfort category tiles) matter — I can't give Skechers my money even when I want to.

## 7. Evidence

**Step 1 — Homepage:** Full-bleed autoplay video of a WNBA player/team celebration under a "SHOP BASKETBALL STYLES" CTA, with a promo strip ("Extra 10% OFF Everything") and category chips (Slip-ins, Wide Fit, Arch Fit, Max Cushioning cut off) above it. Text is large and legible, header icons (search, account, bag, menu) are clean and big enough to tap. But the hero content has nothing to do with me — I don't play basketball, and nothing here signals comfort/arch support up front. Not personalized at all.

**Step 2 — Dismiss Popups:** Screen looks identical to Step 1 except the background video has advanced to a champagne-spray celebration frame. No popup was visible to dismiss in either image — so either no popup fired, or it came and went off-screen before capture. Confusing step; nothing to interact with.

**Step 3 — Log In:** This screenshot shows the hamburger MENU open to "MEN" with category rows (Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories) — not a login screen at all. The rows are big, bold, and easy to tap, which is good, but this step clearly didn't do what it was supposed to. I have no evidence I was ever logged in.

**Step 4 — Men category:** Same MEN menu view carries forward. Easy to read, one-handed friendly, "Shoes" is underlined/highlighted as the active link. Good touch-target sizing throughout.

**Step 5 — Men > Shoes:** "Men's Shoes" heading with three big category tiles: "Hands Free Slip-Ins," "Walking Shoes," "Boots" — genuinely relevant to me. 752 results, a free-pickup toggle, Filter/Sort bar. This page is one of the better ones in the journey: legible, well organized, comfort-forward categories front and center. My only ask would be an "Arch Support" filter chip visible without digging into Filter.

**Step 6 — Product detail:** "GO 3D Arch Fit Horizon - 3D AirNex Slide," listed as Unisex, $70.00, 2 reviews (~4 stars), big "Members Get an Extra 10% OFF" callout, large product photo. Easy to read, price is unmissable. Note it's labeled Unisex rather than clearly in the Men's line, which is a small trust wobble after coming from Men > Shoes.

**Step 7 — Add to Cart:** Size grid (M4/W5.5 through M13/W14.5) with big tappable boxes — good for my thumbs. But a red "Please select a size" warning is showing above the QTY selector and glowing "Add to Cart" button, meaning the add attempt didn't go through cleanly. The bag icon still reads "0."

**Step 8 — View Cart:** Completely blank white page. No header, no product, no error text, nothing. This is the clearest failure in the whole journey — I'd assume the site crashed and bail.

**Step 9 — Search "comfort shoes":** Returns 1,571 results, filter/sort bar present, but the first two products shown are both labeled "Women's" (Skechers Slip-ins Contour Foam-Cozy Fit and Relaxed Fit: Glide-Step Comfort). After spending the whole session in Men's Shoes, seeing women's product first makes the search feel generic and untailored to what I was just doing.

---

## Technical Audit

## Technical Summary
Eight-step mobile journey (Homepage → Log In → Men category → Men > Shoes → PDP → Add to Cart → View Cart → Search) captured server timing, axe-core accessibility results, console/network logs, and HTML source. Server response times are healthy throughout, but the session surfaced 17 accessibility violations concentrated on landmark/ARIA structure, a broken third-party stylesheet (CORS failure), and repeated 429 rate-limiting on a bot-detection/fingerprinting endpoint that also blocked the cart page itself. LCP and CLS were not captured for any step — a measurement gap, not a confirmed pass.

## Accessibility
17 axe-core violations across 3 of the 8 steps:

**Homepage (9 violations)**
- `button-name` [critical] — buttons without discernible text (screen readers announce nothing).
- `aria-required-parent` [critical] — ARIA role used without its required parent role, breaking assistive-tech semantics.
- `link-name` [serious] — links without discernible text.
- `landmark-no-duplicate-main` / `landmark-main-is-top-level` / `landmark-unique` [moderate] — multiple/misplaced `<main>` and duplicate landmark regions.
- `landmark-complementary-is-top-level` [moderate] — `<aside>`/complementary landmark nested incorrectly.
- `region` [moderate] — page content exists outside any landmark.
- `aria-allowed-role` [minor] — invalid `role` value on an element.

**View Cart (4 violations)**
- `document-title` [serious] — page has no `<title>`.
- `html-has-lang` [serious] — `<html>` missing `lang` attribute on this step (present on other steps, e.g. `lang="en"` seen on Homepage/Log In/Men category — indicates inconsistent SSR/templating on cart).
- `landmark-one-main` [moderate] — no `<main>` landmark present.
- `page-has-heading-one` [moderate] — no `<h1>` on the page.

**Search "comfort shoes" (4 violations)**
- `aria-allowed-role` [minor], `landmark-complementary-is-top-level` / `landmark-unique` / `region` [moderate] — same landmark-structure pattern as Homepage.

The recurring landmark/region pattern across three separate templates suggests a shared layout component (likely header/sidebar) with structurally invalid ARIA, rather than isolated page bugs.

## SEO
- **Missing `<title>` on View Cart** — flagged by axe as an accessibility issue but is also a direct SEO defect; any cart/checkout URL that gets indexed or shared will show no title.
- **Missing `<html lang>` on View Cart** — hurts locale/language signaling to search engines in addition to accessibility.
- **No `<h1>` on View Cart** — removes a primary on-page relevance signal for that URL.
- Other steps' HTML head is dominated by ~20+ synchronous/async third-party tag-manager and pixel scripts (GTM, Monetate, TikTok, Snapchat, Taboola, Impact, Quantum Metric, etc.) loaded directly in `<head>`; this doesn't block indexing but is worth flagging as it competes for main-thread time during initial render, which can affect field-data Core Web Vitals used in ranking.

## Performance
TTFB by step (server-side, all well within acceptable range):
| Step | TTFB |
|---|---|
| Homepage | 25ms |
| Log In | 398ms |
| Men category | 398ms |
| Men > Shoes | 26ms |
| Product detail | 29ms |
| Add to Cart | 29ms |
| View Cart | 126ms |
| Search | 26ms |

No issues found in TTFB — all steps respond well under typical 600ms budgets; Log In and Men category are the slowest but still acceptable.

LCP and CLS were not captured for any step (all reported as `?`). This is an instrumentation gap in this run, not a verified pass — these metrics should be re-collected before drawing conclusions about real user-perceived load speed or layout stability, especially given the heavy third-party script load observed in the HTML.

## Mobile Optimization
- `<html>` carries an inline `style="--vh: 6.64px"` custom property, indicating JS-computed viewport-height units (a common workaround for mobile browser chrome resizing). This adds a layout-blocking script dependency for correct mobile rendering — a fragile pattern if that script fails or loads late.
- Web fonts are loaded via `webfontloader` (cdnjs) rather than native `font-display`/preload strategy, which can cause FOUT/FOIT on mobile networks; font-loaded state is tracked via body classes (`wf-mulish-*-active`), confirming a render-blocking font-swap dependency.
- The head executes 20+ third-party async scripts (ad pixels, analytics, tag managers) on every page, including mobile. On constrained mobile connections/CPUs this is the most likely driver of poor real-world LCP, which the pipeline should re-measure once metrics collection is fixed.

## Console & Network Errors
**8 console errors / 6 network errors, dominated by two distinct issues:**

1. **Repeated 429s on a fingerprinting/bot-detection endpoint** (`.../fp?x-kpsdk-v=j-1.2.797`, Kasada-style path pattern) — fired 5 times across the session. One of the 429s hit **`https://www.skechers.com/cart/` itself**, meaning the View Cart step was rate-limited at the page level, not just on a subresource. This is a functional risk, not just noise — automated/rapid navigation (and potentially real users behind shared/proxy IPs) can get throttled loading the cart.
2. **CORS failure on a third-party stylesheet**: `https://web-assets.stylitics.com/style.css?...` blocked by missing `Access-Control-Allow-Origin`, surfacing as `net::ERR_FAILED`. This is a misconfigured cross-origin resource (Stylitics outfit-recommendation widget) — the CSS fails to load, likely degrading that widget's styling silently.

No other console/network errors observed; all other steps' network activity aside from analytics beacons returned successfully.

## Recommendations
1. **Fix View Cart's document `<head>`** — add a `<title>`, `<html lang="en">`, an `<h1>`, and wrap content in a `<main>` landmark. This single template fix resolves 4 of 17 accessibility findings and 2 SEO defects at once.
2. **Audit the shared header/sidebar component** for landmark structure — the duplicate-main/landmark-unique/region violations repeat identically on Homepage and Search, pointing to one reusable component rather than three separate bugs.
3. **Add accessible names** to the flagged buttons and links (`button-name`, `link-name`) on the Homepage — likely icon-only controls (search/cart/hamburger) missing `aria-label`.
4. **Investigate the 429 on `/cart/`** with the bot-detection vendor (Kasada) — confirm rate-limit thresholds aren't being tripped by normal navigation patterns, since this affects a core conversion page.
5. **Fix or remove the Stylitics CORS misconfiguration** — either have Stylitics serve correct CORS headers or self-host/proxy the stylesheet.
6. **Re-run the audit with LCP/CLS instrumentation working** before drawing performance conclusions — TTFB alone doesn't capture the impact of the ~20+ third-party scripts observed in the HTML.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

