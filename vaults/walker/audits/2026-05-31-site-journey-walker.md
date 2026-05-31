---
slug: 2026-05-31-site-journey-walker
type: site
date: 2026-05-31
persona: walker
score: "4/10"
previous_score: "3/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-4, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 4/10 (prev 3/10) · **Type:** Site journey · **2026-05-31**
## Full review
## 1. Executive Summary

I'm Walker Miles, 62, and I just spent time on skechers.com on my phone looking for slip-ins with arch support. The good news: I found my way to the right shoe without getting totally lost. The bad news: when I went to check my cart, the page was completely white — nothing there. That's a deal-breaker. Search sent me women's shoes even though I'm logged in as a man. And the whole time, the site was pushing me to win a soccer fan prize package. I don't watch soccer. I just want my feet to stop hurting.

---

## 2. Business Impact Score: 4/10

**Up from 3/10 yesterday.** Navigation improved meaningfully. Product page is solid. But the cart page is blank — that's a lost sale every single time — and search still has zero gender personalization. One critical bug plus one personalization failure keeps this well below average.

---

## 3. What's Working

- **BOGO 50% OFF is impossible to miss.** Blue sticky banner, top of every page, every step. I understood the deal immediately without reading fine print. That's good merchandising.
- **Men's navigation drawer (Step 4) is clean and large.** "Hands Free Slip-ins" appears as a direct shortcut right in the menu — I didn't have to drill through three sub-menus to find what I wanted. Touch targets are big, text is readable without squinting.
- **Product detail page (Step 6) does its job.** Title is large, price is clear at $110, the deal line ("Buy 1, Get 1 50% OFF!") is in red so it pops. The Hands-Free Slip-Ins badge confirms I'm in the right place. One scroll and I have what I need.
- **Add to Cart button (Step 7) is outstanding.** Full-width, deep blue, high contrast. I could tap that with my thumb in the dark. Size grid tiles are generous. The "Please select a size" warning in red is useful — I didn't accidentally add nothing to my cart.
- **Hands Free Slip-ins landing page (Step 5) loads the right product type.** 292 results, width filter chips (Wide Fit, Extra Wide Fit) are right at the top — exactly what I scan for.

---

## 4. What's Weak

- **Cart page (Step 8) is completely blank. White screen. Nothing.** This is the most serious problem on the site. I did the work — found the shoe, liked the price, went to buy it — and the cart page rendered as an empty white rectangle. If I were a real customer, I'd assume something broke and leave. This is a revenue hole.
- **Search returns women's shoes for a logged-in male customer (Step 9).** I typed "comfort shoes." I got 1,449 results — both visible products are labeled "Women's." I'm signed in. They know I'm a man. There is no excuse for this. I'd go straight to DSW's site instead.
- **Log in experience shows nothing changed (Step 3).** Before and after logging in, the homepage looks identical. No "Welcome back, Walker." No points balance. No "based on your last purchase." The account icon is just an icon. I have no idea if I'm actually logged in or if my loyalty status means anything.
- **Homepage hero sells to the wrong person (Steps 1–2).** Young man, young woman, urban street scene, soccer fan prize package. I'm 62 and I want a shoe that doesn't make my knees ache. Nothing on the above-fold homepage speaks to me. Not one word about comfort, arch support, or walking.
- **Only 6 reviews on the product (Step 6).** Six. I trust reviews. New Balance has hundreds on comparable shoes. Six reviews on a $110 shoe makes me nervous.
- **"Dismiss Popups" step showed no actual popup to dismiss.** The banner just changed from "Spring into Summer Sale" to "Get Dad a Gift He'll Love." If a popup was supposed to appear and didn't, that's a rendering failure. If it did appear and closed too fast to capture, I still didn't get a chance to act on whatever offer it had.

---

## 5. Recommendations

1. **Fix the cart page immediately.** This is priority one. A blank cart is a dead checkout. Whatever is breaking the render on `/cart/` needs a hotfix today, not next sprint.

2. **Filter search by logged-in gender.** I'm authenticated. Default search results to men's. Let me opt into women's if I want. This is a one-line filter rule that would meaningfully improve my trust.

3. **Acknowledge me when I log in.** "Welcome back, Walker — you have 240 points" takes 5 words. It signals that my account is working and that loyalty is real. Right now logging in feels like it did nothing.

4. **Put one comfort-first message above the fold.** "Arch support. Hands-free entry. Made for all-day walking." Done. I don't need the soccer sweepstakes — I need to know this brand understands my feet.

5. **Seed more reviews or surface ratings more prominently.** If a product only has 6 reviews, show me an aggregate from the broader Slip-ins line, or link to verified buyer feedback. Six is not enough for me to trust $110.

---

## 6. Bottom Line

This site is closer than yesterday — the navigation is genuinely good, the deal messaging is strong, and the product page has everything I need to make a decision. But a blank cart page means I literally cannot buy the shoe I found. That single failure wipes out all the other progress. Fix the cart, fix the search gender filter, and greet me by name when I log in — those three things would move this from a 4 to a 7 without touching the design at all.

---

## 7. Evidence

**Step 1 — Homepage**
The top banner ("BOGO 50% OFF Applied at Cart") is clear and readable. The secondary strip ("Spring into Summer Sale! 25% OFF Apparel") gives me a second reason to stay. The horizontal shortcut bar shows "Slip-ins | Sandals | Arch Fit | BOBs" — good categories for me, though it cuts off. The full-bleed hero image features two young adults and a soccer prize promotion. Not my world. Nothing above the fold says "comfortable walking shoes for people who've been on their feet for 60 years." Phone use: fine. Readable without zooming. Personalization: none.

**Step 2 — Dismiss Popups**
The banner swapped to "Get Dad a Gift He'll Love! Shop Now" — Father's Day messaging is appropriate timing, though generic. The soccer prize package promo below it is unchanged and still irrelevant. No popup overlay appeared in the screenshot — if one was supposed to show and didn't, that's a rendering miss. Phone use: fine.

**Step 3 — Log In**
The page looks identical to the homepage. No login form is visible, no confirmation state, no personalization signal. The cart still shows 0. The account icon hasn't changed. I cannot tell from this screen whether I am logged in or not. For me, that's unsettling — I need to know my info is saved before I shop. Phone use: fine. Personalization: absent.

**Step 4 — Men Category**
This is the best screen in the journey. Full-screen drawer, high contrast, large text. The menu hierarchy is logical: Shoes → Shop by Activity → Comfort Technologies → Collections. Below those are direct shortcuts: "Hands Free Slip-ins," "Wide Fit," "Extra Wide Fit." I can get to what I need in one tap. The back arrow and X are large and easy to hit. Phone use: excellent. Personalization: structural (men's menu), not personal.

**Step 5 — Men > Shoes (Hands Free Slip-ins)**
Landed on the right page. Breadcrumb confirms "Men > Shoes." Page title is "Hands Free Slip-ins" in large text. Width chips (Wide Fit, Extra Wide Fit, Medium Fit) are visible at top — this is the right signal for a buyer like me. 292 results is a lot but manageable with filters. Product cards are loading, though names are partially cut off at the bottom. BOGO banner still present. Phone use: good. Personalization: none beyond the category.

**Step 6 — Product Detail (Arch Fit Glide-Step Pro - Larzo)**
Product name is bold and large. Price ($110) is clear. Deal copy ("Buy 1, Get 1 50% OFF! Applied at Cart") in red is prominent. The Hands-Free Slip-Ins badge confirms the technology. Only 6 reviews — that's low and erodes my confidence. Product photo is clean. No description of arch support or cushioning is visible in this viewport, which means I'd need to scroll to find the thing I care most about. Phone use: good. Personalization: none.

**Step 7 — Add to Cart**
Size grid is large and tappable — good. The "Please select a size" validation in red with a warning icon is clear and not aggressive. QTY dropdown is present. "Ship it" and "Check in-store availability" options give me flexibility. The ADD TO CART button is the best UI element on the entire site — full width, high contrast blue, unmissable. Cart counter in header still shows 0, which is consistent with no size having been selected yet. Phone use: excellent.

**Step 8 — View Cart**
Completely blank. White screen. No content, no error message, no spinner, nothing. This is a complete page failure. I cannot see my item, I cannot see a total, I cannot proceed to checkout. If this happened to me as a real shopper, I would close the browser and go to New Balance's website. This is the most damaging finding in today's review. No change from what appears to have been a similar failure yesterday — this is a persistent critical bug.

**Step 9 — Search "comfort shoes"**
1,449 results — the volume is appropriate and reassuring. But the first two visible products are both labeled "Women's." I am a logged-in male customer. The site knows my gender. Showing women's results first for a comfort query is a personalization failure that signals the search engine is not using my account data. The BOGO deal is still shown on product cards, which is good. Filter and Sort are accessible. Phone use: fine. Personalization: failing at the most basic level.

---

## Technical Audit

## Technical Summary

Skechers.com runs on Salesforce Commerce Cloud (SFCC/Demandware), served via Akamai CDN. The mobile journey has three notable infrastructure problems: a bot-detection system (Kasada) generating repeated 429s, a broken image CDN returning 502s, and a third-party styling widget (Stylitics) misconfigured with CORS. The cart page has serious HTML document hygiene failures. Overall TTFB is excellent (23–35ms) except at cart (126ms), pointing to a server-side rendering bottleneck specific to that route.

---

## Accessibility

**15 violations across 3 pages.**

**Homepage (8 violations):**
- `aria-required-parent` [critical] — ARIA role children exist outside their required parent container. Likely a carousel or list widget where `role="listitem"` or `role="option"` elements are not wrapped in the corresponding parent role.
- `aria-allowed-role` [minor] — An element has a `role` that is not permitted on that element type (e.g., `role="button"` on a `<div>` where the element type restricts it).
- `heading-order` [moderate] — Heading hierarchy skips levels (e.g., `<h1>` → `<h3>`), breaking screen reader document outline.
- `landmark-complementary-is-top-level`, `landmark-main-is-top-level` [moderate] — `<aside>` and `<main>` are nested inside other landmark elements, violating ARIA landmark rules.
- `landmark-no-duplicate-main`, `landmark-unique` [moderate] — Multiple `<main>` landmarks detected; landmark roles must be unique or labeled with `aria-label`.
- `region` [moderate] — Content exists outside any landmark region, making it unreachable to screen reader landmark navigation.

**View Cart (4 violations — most severe page):**
- `document-title` [serious] — `<title>` element is empty or missing. This is a cart page; the absence of a title breaks browser history, tab labeling, and screen reader page announcements.
- `html-has-lang` [serious] — `<html>` tag lacks a `lang` attribute on the cart page. All other pages have `lang="en"`. This is likely a separate template or SPA-rendered shell that was not audited for baseline HTML structure.
- `landmark-one-main` [moderate] — No `<main>` landmark present.
- `page-has-heading-one` [moderate] — No `<h1>` on the page.

**Search page (3 violations):**
- Same `landmark-complementary-is-top-level`, `landmark-unique`, `region` issues as homepage — consistent structural problem in the shared layout template.

---

## SEO

- **View Cart `<title>` missing:** Cart pages are typically `noindex`, but a missing `<title>` signals a template rendering failure that could affect other pages if the same shell is reused.
- **`<html lang>` missing on cart:** Not an SEO signal directly, but indicates the cart is rendered by a different code path than the rest of the site — a risk surface for indexing anomalies if the cart shell is ever accidentally crawled.
- **Heading order violations on homepage:** Disrupted heading hierarchy can reduce topical clarity for Googlebot's content model.
- No missing canonical, robots meta, or structured data issues are evident from the provided data.

---

## Performance

| Step | TTFB | Notes |
|---|---|---|
| Homepage | 26ms | Good |
| Log In | 35ms | Good |
| Men category | 35ms | Good |
| Men > Shoes | 27ms | Good |
| Product detail | 23ms | Good |
| Add to Cart | 23ms | Good |
| **View Cart** | **126ms** | ~5× slower — outlier |
| Search | 27ms | Good |

**LCP and CLS are unrecorded** — these are the two most consumer-impactful Core Web Vitals. The audit is incomplete without them; they should be captured.

**Cart TTFB spike (126ms):** The cart route is either hitting a different origin (uncached, session-specific), performing a synchronous server-side API call to commerce backend before rendering, or triggering additional Kasada bot-check middleware on authenticated/session-bearing requests. The 429 on `https://www.skechers.com/cart/` confirms Kasada is intercepting cart requests.

**Third-party script load:** The homepage `<head>` loads 20+ async third-party scripts across 15+ domains (GTM, TikTok Pixel ×3, Bing, Reddit, Quantum Metric, Pinterest, Yahoo, Snapchat, Impact, Taboola, Nextdoor, Monetate ×3, Bloomreach, Pulse Insights, CreativeCDN, Go2SDK, WebFontLoader). This is a significant main-thread contention risk. Many fire on first paint. No evidence of `dns-prefetch` for most of these domains despite heavy use of `dns-prefetch` only for Monetate.

**WebFontLoader (cdnjs.cloudflare.com):** Loading `webfontloader.js` async for Mulish — the font weights `n3`–`n8` are all marked active, meaning 6 font weight variants are loaded. This should be audited for render-blocking behavior and subset reduction.

**Image CDN 502:** `images.skechers.com` returned a 502 for a product hero image (`118112_NVY_HERO_LG`). A 502 from a CDN origin indicates the image server or transformation pipeline was unavailable at time of request — this would result in a broken product image on PDP, directly harming conversion.

---

## Mobile Optimization

- **`--vh` CSS custom property set inline:** `style="--vh: 6.640000000000001px"` on `<html>` — this is a JavaScript-computed viewport height workaround for mobile browsers where `100vh` doesn't account for browser chrome. The precision of `6.640000000000001px` suggests a floating-point artifact from `window.innerHeight / 100` without rounding. Should be `parseFloat((window.innerHeight / 100).toFixed(3))`.
- No `viewport` meta tag is visible in the truncated HTML samples, though it's likely present below the truncation point — should be verified.
- No responsive image (`srcset`/`sizes`) attributes are visible in the provided source samples.
- The image transform URL pattern `width=867,format=auto` on the 502'd image confirms CDN-side image resizing is in use — good practice, but the pipeline has availability issues.

---

## Console & Network Errors

**Kasada bot-detection 429s (6 requests):**
- All hitting `https://www.skechers.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp?x-kpsdk-v=j-1.2.430`
- This is Kasada's browser fingerprinting endpoint (`/fp`). The `x-kpsdk-v=j-1.2.430` parameter identifies SDK version `j-1.2.430`.
- Repeated 429s on the fingerprinting endpoint means Kasada has flagged the session as bot-like and is rate-limiting the challenge responses. In a real user session, this can cause downstream API calls to fail silently (add-to-cart, checkout, inventory checks) because those calls require a valid Kasada token.
- The `/cart/` 429 is a direct consequence — Kasada blocked the cart page load itself.
- **Root cause candidates:** Kasada's JS fingerprinting was triggered too many times in rapid succession (automated test behavior), or the SDK version `j-1.2.430` has a known issue with certain mobile user agents.

**Stylitics CORS error:**
- `https://web-assets.stylitics.com/style.css` blocked by CORS — Stylitics CDN is not returning `Access-Control-Allow-Origin: https://www.skechers.com`.
- This is a Stylitics configuration issue (their CDN needs to allowlist the Skechers origin). The stylesheet will fail to load, breaking the "Complete the Look" or outfit widget styling.

**Image CDN 502:**
- `images.skechers.com` returned 502 for one product image. This is a transient or systematic origin failure on their image transformation service.

---

## Recommendations

1. **Kasada integration:** Investigate why the fingerprinting endpoint is returning 429 for legitimate sessions. Work with Kasada support to review SDK version `j-1.2.430` behavior and whether the rate-limit thresholds are misconfigured. Ensure the Kasada token lifecycle is handled correctly so a single failed challenge doesn't cascade to block cart/checkout routes.

2. **View Cart HTML template:** The cart page is missing `<title>`, `<html lang>`, `<main>`, and `<h1>`. This points to the cart being rendered by a separate template or client-side shell that bypasses the standard SFCC page template. Audit the cart template independently and add these elements unconditionally.

3. **Fix `aria-required-parent` on homepage [critical]:** Locate the widget (likely a carousel/slider) where ARIA child roles are orphaned from their parent and restructure the DOM or correct the role assignments.

4. **Stylitics CORS:** Contact Stylitics to add `https://www.skechers.com` to the `Access-Control-Allow-Origin` policy on their CDN, or load the stylesheet via a same-origin proxy if Stylitics cannot resolve it.

5. **Image CDN reliability:** Investigate the 502 on `images.skechers.com`. If this is a Cloudflare Images or Akamai Image Manager pipeline, check origin health and add a fallback URL or error handler so broken images don't render as empty slots on PDP.

6. **Capture LCP and CLS:** These are the Core Web Vitals that directly affect Google Search ranking. Re-run the audit with LCP/CLS measurement enabled (Playwright's `page.evaluate` + PerformanceObserver, or Lighthouse in mobile mode).

7. **Third-party script governance:** 20+ async scripts fire on homepage load. Audit with a script impact tool (e.g., Request Map or WebPageTest filmstrip) to identify which fire during LCP and defer or facade them. Priority targets: Quantum Metric, Pulse Insights, Taboola, and the duplicate Yahoo pixel (`ytc.js` loads twice).

8. **`--vh` float precision:** Change the viewport height calculation to `Math.round(window.innerHeight / 100 * 1000) / 1000` to avoid the floating-point artifact in the CSS custom property value.
## Recent history

- [[2026-05-30-site-journey-walker]] — 3/10 (2026-05-30)
- [[2026-05-29-homepage-www.skechers.com-walker]] — 5/10 (2026-05-29)
- [[2026-05-29-site-journey-walker]] — 3/10 (2026-05-29)

