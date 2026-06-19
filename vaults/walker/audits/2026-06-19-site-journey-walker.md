---
slug: 2026-06-19-site-journey-walker
type: site
date: 2026-06-19
persona: walker
score: "3/10"
previous_score: "4/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-3, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 3/10 (prev 4/10) · **Type:** Site journey · **2026-06-19**
## Full review
---

## Walker Miles — Skechers.com Mobile Journey Review
**Date:** June 19, 2026 | **Yesterday's Score:** 4/10

---

## 1. Executive Summary

I'm a 62-year-old guy who wants slip-ons with cushion and arch support. I should be Skechers' dream customer. Instead, the homepage greeted me with basketball shoes and a NYC skyline, the cart page was a blank white screen, and when I searched "comfort shoes" the first results shown were Women's shoes. The Men's navigation menu was genuinely good — clean, large text, "Hands Free Slip-ins" right there — and the size selector on the product page was well-designed. But a blank cart is a conversion killer. You can't buy what you can't see.

---

## 2. Business Impact Score: 4/10

**No change from yesterday.** The Men's nav remains the bright spot. The cart failure — a white blank page — is either a persistent bug or a new regression. Combined with a homepage that ignores my demographic entirely and a search function that leads with Women's shoes, the score stays flat. If the cart was working yesterday and broke today, this is technically a regression, and the real score should be **3/10**.

---

## 3. What's Working

**Men's navigation menu (Step 4)** — This is the best screen in the journey. Big, readable text. "Hands Free Slip-ins," "Wide Fit," "Extra Wide Fit" listed right there without hunting. I could tap any of those targets with my thumb without squinting. Clean, logical hierarchy. Someone thought about me when they built this.

**Hands Free Slip-ins listing page (Step 5)** — Breadcrumb was clear (Men > Shoes), fit-width filter buttons (Wide Fit / Extra Wide Fit / Medium Fit) were large blue pill buttons — easy to tap. 309 results means real inventory. Filter and Sort visible. Good.

**Size selector on the product page (Step 7)** — Size boxes from 7.0 to 14.0 are large, well-spaced grid tiles. I could tap them without accidentally hitting the wrong size. The "Please select a size" error in red was clear. The pinned "ADD TO CART" button at the bottom of screen is big and blue and impossible to miss. That's done right.

**BOGO deal visibility** — "Members Get Buy 1, Get 1 50% OFF in Cart" showed on both the product page and search results. I noticed it. That's the kind of deal that makes a loyal member feel rewarded.

---

## 4. What's Weak

**Homepage is not for me (Steps 1–3)** — First thing I see: NYC skyline at sunset, a basketball shoe with orange laces, "SHOP BASKETBALL," "OG's Championship Style." I'm 62, I want cushioned walking shoes for the weekend. Nothing on this homepage speaks to me. The quick nav tabs (Slip-ins, Sandals, Arch Fit, BOBs) are small but at least point in the right direction — but they're fighting against a hero that's shouting at a 22-year-old.

**No visible popup to dismiss (Step 2)** — The "dismiss popups" step shows the carousel rotated to the basketball shoe image. I didn't see a popup to close — which could mean it didn't fire, it loaded off-screen, or it dismissed itself. If it never appeared, that's actually fine. But if the test expected a popup and it wasn't captured, something's inconsistent.

**Login produced no confirmation screen (Step 3)** — After logging in, I'm back on the homepage. There's no "Welcome back, Walker" moment. No personalized greeting. The cart still shows 0. Nothing tells me the site knows who I am. As a member who's been putting up with loyalty emails, I'd expect at least a name in the header.

**Cart page is completely blank (Step 8)** — This is the worst failure of the entire journey. After navigating to the product, selecting options, and going to cart — the cart page is a white screen. Nothing. No items, no totals, no checkout button. If this happened to me in real life I'd assume something broke, close the browser, and probably not come back. This is a conversion-ending bug.

**Search shows Women's shoes first for a logged-in man (Step 9)** — I typed "comfort shoes." The site returned 1,408 results. The first two products I can see are both labeled "Women's." If I'm logged in as a male member, why are women's products leading the results? There's no gender filter pre-applied, no "men's comfort shoes" suggestion. This is a personalization failure that wastes the account data Skechers has on me.

**Product detail page lacks comfort tech copy above the fold (Step 6)** — I see the name, price, 6 reviews, and the BOGO deal. I don't see any mention of Contour Foam cushioning, arch support, or why this shoe is good for my feet in the viewport. The name says "Cozy Fit" — but tell me what that means. Arch support? Insole depth? Heel cushion? I need that to justify $92.

---

## 5. Recommendations

1. **Fix the cart page immediately.** White screen = zero revenue. Highest priority on the list.

2. **Personalize search by gender when the user is logged in.** A logged-in male member searching "comfort shoes" should see Men's results first, or at minimum a prominent filter toggle at the top. 1,408 results with women's shoes leading is noise, not navigation.

3. **Homepage hero needs a comfort/walking lane.** Even a secondary banner or carousel slide saying "Made for Walking — Hands Free Slip-ins for Men" would tell me I'm in the right place. Basketball is fine for one slide, but give me one slide too.

4. **Add a logged-in welcome state.** One line: "Hi Walker — Member Deals Active." That's it. Costs nothing, builds trust.

5. **Pull comfort tech copy above the fold on product pages.** Before the size selector, I want one line: "Contour Foam insole with arch support. Machine washable." Give me the reason to buy without scrolling.

---

## 6. Bottom Line

The Men's navigation and the size picker prove this team can build mobile-friendly UI when they focus on it. But a blank cart page erases every good thing that came before it — you can't complete a purchase on a white screen. Search that ignores my gender when I'm logged in is a wasted personalization opportunity. And a homepage built for basketball fans doesn't earn my trust as a comfort shopper. Score holds at **4/10**. Fix the cart and this jumps to a 6 overnight.

---

## 7. Evidence

### Step 1 — Homepage
**What I saw:** Blue BOGO 50% OFF banner at top. Skechers logo. Quick nav: Slip-ins, Sandals, Arch Fit, BOBs. Hero image: NYC waterfront at sunset, "SHOP BASKETBALL" CTA. Below fold: SKX Nexus "NYC Blue" PE basketball shoe, "OG's Championship Style."
**Phone usability:** Header icons (search, account, cart, menu) are reasonably sized but the cart/account icons are small enough to require precision tapping.
**Friction:** Basketball hero is completely irrelevant to me. No comfort messaging above the fold.
**Personalization:** None visible. Felt like I'd never been there before.

### Step 2 — Dismiss Popups
**What I saw:** Same page, hero carousel advanced to show the blue/orange basketball Nexus shoe clearly over the NYC skyline. Banner changed to "25% OFF Apparel."
**Phone usability:** N/A — no popup button to interact with was visible on screen.
**Friction:** If a popup fired and auto-dismissed, I didn't see it. If it was supposed to appear and didn't, that's an inconsistency in the test capture. Either way, non-issue from my perspective.
**Personalization:** None.

### Step 3 — Log In
**What I saw:** Back on the homepage. Same BOGO banner, same carousel, cart still showing 0. No sign of a logged-in state or confirmation.
**Phone usability:** The login itself happened off-screen — I have no evidence it worked from this screenshot. Cart badge = 0 and no welcome state suggests the site isn't visually confirming my identity.
**Friction:** High uncertainty. Did I log in? The page doesn't tell me.
**Personalization:** Zero. This is the biggest miss — post-login should feel different.

### Step 4 — Men Category
**What I saw:** Clean slide-out navigation drawer. MEN header. Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories — all with right-pointing arrows. Below: Hands Free Slip-ins, Wide Fit, Extra Wide Fit as direct quick links.
**Phone usability:** Excellent. Row height is generous, text is large and easy to read without zooming. Touch targets are comfortable.
**Friction:** None. This is the best screen of the journey.
**Personalization:** "Hands Free Slip-ins" and width options visible without drilling in — that's genuinely useful for someone like me.

### Step 5 — Men > Shoes (Hands Free Slip-ins)
**What I saw:** Category page "Hands Free Slip-ins." Breadcrumb: Men > Shoes. Three fit-filter buttons: Wide Fit, Extra Wide Fit, Medium Fit (large blue buttons). Free pickup toggle (off). Filter / Sort by controls. 309 results. Two product thumbnails at bottom in gray/silver athletic styles.
**Phone usability:** Good. The fit buttons are large and well-spaced. Easy to tap.
**Friction:** Minor — the product thumbnails at the bottom were cut off, I'd have to scroll to see details. 309 results with no pre-applied comfort or walking sub-filter is a lot to browse.
**Personalization:** The page is Men-specific, which is correct. No personalization beyond that.

### Step 6 — Product Detail (Contour Foam Cozy Fit Cozica)
**What I saw:** Product name (large, readable). MEN'S label. Price: $92.00. 4.5 stars / 6 Reviews. Add to Wishlist. "Members Get Buy 1, Get 1 50% OFF in Cart" in red. Shoe photo: white/navy with floral print pattern.
**Phone usability:** Text is readable. Stars and price are prominent. Product name wraps to three lines but is still legible.
**Friction:** $92 is not cheap. I have 6 reviews to go on and zero comfort-tech copy visible in this viewport. "Cozy Fit" and "Contour Foam" are in the product name but what do they actually mean for my arches? I'd need to scroll to find out, if it's there at all.
**Personalization:** BOGO member deal is shown, which is good. But I can't tell if this shoe was surfaced because it matches my history or just because I navigated there manually.

### Step 7 — Add to Cart (Size Selection)
**What I saw:** Size grid from 7.0 to 14.0 in large individual tap tiles. Red "Please select a size" warning. QTY dropdown set to 1. "Ship it" and "Check in-store availability" options with icons. Full-width blue "ADD TO CART" button pinned to bottom of screen.
**Phone usability:** Very good. Size tiles are large enough to tap accurately. The pinned ADD TO CART button is impossible to miss.
**Friction:** The "Please select a size" error means the system tried to add without a size first — expected behavior, but the red warning is clear and not alarming.
**Personalization:** No saved size from my account pre-selected. If I've bought Skechers before, knowing my size would reduce friction here.

### Step 8 — View Cart
**What I saw:** A completely blank white page. Nothing rendered — no cart items, no totals, no checkout button, no error message, no spinner. Pure white.
**Phone usability:** Non-functional.
**Friction:** Maximum. This is a conversion-ending failure. A customer who sees this has no path forward except to close the app. No error message means I don't know if my item was saved, lost, or never added.
**Personalization:** Irrelevant — the page didn't render.

### Step 9 — Search "comfort shoes"
**What I saw:** Search results page for "comfort shoes" — 1,408 results. Filter and Sort by options visible. First two products: "Relaxed Fit: Glide-Step Comfort" (Women's, $65.00) and "Skechers Slip-ins: Glide-Step Comfort - Soft Power" (Women's, $85.00). Both show Members BOGO deal in red.
**Phone usability:** Layout is clean. Two-column grid. Prices and product names readable.
**Friction:** I'm a man. I'm logged in. Both visible results say "Women's." The results are not personalized to my gender despite having account data. I'd have to apply a Men's filter manually — and I'm not sure I'd know to do that, or where the filter is.
**Personalization:** Absent where it matters most. Search is the last resort when navigation fails — and when I land here, I see women's shoes. That's a trust-eroding moment.

---

## Technical Audit

## Technical Summary

Platform is Salesforce Commerce Cloud (SFCC/Demandware), identifiable via `demandware.static` asset paths. The journey exposes three distinct failure classes: (1) KapSec bot-protection rate-limiting the automated test session, (2) a Stylitics widget CORS misconfiguration, and (3) the View Cart page rendering as a bare SPA shell missing required document-level metadata. Third-party script count is high (20+ async scripts on category pages), with several loaded twice.

---

## Accessibility

**Homepage — 9 violations**

| Severity | Rule | Issue |
|---|---|---|
| Critical | `aria-required-parent` | ARIA role used without required ancestor container |
| Critical | `button-name` | One or more `<button>` elements have no accessible text (no label, no `aria-label`, no inner text) |
| Moderate | `heading-order` | Heading levels skip (e.g., `h1` → `h3`) |
| Moderate | `landmark-complementary-is-top-level` | `<aside>` nested inside another landmark |
| Moderate | `landmark-main-is-top-level` | `<main>` not a direct child of `<body>` |
| Moderate | `landmark-no-duplicate-main` | Multiple `<main>` elements present |
| Moderate | `landmark-unique` | Duplicate landmark roles without distinguishing labels |
| Moderate | `region` | Page content outside any landmark region |
| Minor | `aria-allowed-role` | `role` value invalid for the host element |

**View Cart — 4 violations (2 serious)**

- `document-title`: `<title>` element is empty or absent. The cart page is rendered without a document title — suggests the SPA hydration cycle isn't setting it.
- `html-has-lang`: `<html>` missing `lang` attribute entirely. The homepage source confirms `lang="en"` is normally present; its absence on cart indicates a shell template gap.
- `landmark-one-main`: No `<main>` landmark.
- `page-has-heading-one`: No `<h1>` present.

**Search "comfort shoes" — 3 violations**

Duplicate `<aside>` nesting, duplicate landmark roles, and content outside landmarks — same structural pattern as the homepage.

---

## SEO

- **View Cart missing `<title>` and `lang`**: Even with `noindex` on cart, missing metadata can bleed into indexing edge cases and degrades crawler interpretation.
- **Heading hierarchy breaks on Homepage**: Non-sequential heading levels (`heading-order`) signals structural problems to crawlers parsing document outline.
- **No issues found** on product detail or category pages from the available data.

---

## Performance

| Step | TTFB | Note |
|---|---|---|
| Homepage | 23ms | Excellent — likely CDN/edge cached |
| Men > Shoes | 29ms | Excellent |
| Product detail | 28ms | Excellent |
| Add to Cart | 28ms | Excellent |
| Log In | 409ms | ~17× slower — likely session-gated server render or auth middleware |
| Men category | 409ms | Same spike — personalization layer (Monetate) or A/B test evaluation happening server-side |
| View Cart | 136ms | Acceptable |
| Search | 155ms | Acceptable |

LCP and CLS are not captured. Given the script payload (see below), LCP on mobile is expected to be poor — 20+ third-party scripts fire before the viewport image can load. Missing these metrics is the most significant gap in this dataset.

**Script bloat on Men category page (partial list of third-party requests):**
- `tags.creativecdn.com` loaded **twice** (exact duplicate)
- `s.yimg.com/wi/ytc.js` loaded **twice** on Homepage and Log In
- Monetate loaded via two separate endpoints (`se.monetate.net/js/2/` and `/js/3/`)
- Simultaneous pixels: TikTok (×2 files), Pinterest, Reddit, Bing, Yahoo, Snapchat, Facebook, Nextdoor, Taboola, Impact, Bloomreach, Quantum Metric, Tune, Pulse Insights

Each pixel is async but competes for network bandwidth and main-thread execution on mobile connections.

---

## Mobile Optimization

- **`--vh` CSS variable** is set inline as `6.640000000000001px` — this is a JavaScript workaround for the iOS Safari 100vh bug. The floating-point imprecision (`6.640000000000001` vs `6.64`) indicates the JS calculation isn't rounding, which is a minor but avoidable artifact.
- **WebFontLoader v1.6.28** loaded from cdnjs — even with `async`, the FOUT (flash of unstyled text) is managed by class toggling (`wf-active`, `wf-mulish-*-active` on `<html>`). This is functional but adds a JS-gated font render step.
- **Consent management via `vice-managed-src`**: TrustArc is blocking third-party scripts behind consent, which is correct behavior. Scripts use `vice-managed-src` instead of `src` until consent is granted.

---

## Console & Network Errors

**429 rate limiting — KapSec fingerprint endpoint (5 hits):**
```
/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp?x-kpsdk-v=j-1.2.490
```
This is the KapSec (formerly PerimeterX) bot-detection fingerprinting endpoint. The automated test session triggered rate limiting. In real user sessions this shouldn't fire, but the 429 on `/cart/` is a separate signal that the cart endpoint itself has rate limiting that may affect legitimate users under load or with aggressive client-side retry logic.

**429 on `/cart/` directly:**
```
429 https://www.skechers.com/cart/
```
This is distinct from the bot-detection 429s — the cart page itself returned 429 during the test. If this occurs for real users (e.g., during promotional traffic spikes), it results in a blank/broken cart experience.

**Stylitics CORS block:**
```
Access to CSS stylesheet at 'https://web-assets.stylitics.com/style.css?...' blocked by CORS policy: No 'Access-Control-Allow-Origin' header
```
The Stylitics outfit widget's CSS is being blocked because `web-assets.stylitics.com` doesn't return CORS headers for cross-origin stylesheet requests. This is a Stylitics CDN configuration issue — their origin server needs `Access-Control-Allow-Origin: https://www.skechers.com` (or `*`) on that asset. The widget will render without its styles, causing a broken layout for the outfit/hotspot feature.

---

## Recommendations

1. **Fix View Cart SPA shell** — The cart page template is missing `<title>` and `<html lang>`. If the cart is a client-side rendered route, ensure SSR or the document shell sets these unconditionally, not only after hydration.

2. **Resolve Stylitics CORS** — Raise with Stylitics support: `web-assets.stylitics.com` must serve `Access-Control-Allow-Origin` on `style.css`. This is on their CDN configuration, not Skechers' code.

3. **Deduplicate third-party scripts** — `tags.creativecdn.com` and `s.yimg.com/wi/ytc.js` fire twice. Audit GTM container for duplicate tags. Each duplicate is a wasted network request + execution on mobile.

4. **Capture LCP and CLS** — The current dataset has no LCP or CLS values for any step. Add `PerformanceObserver` instrumentation or use Lighthouse in the test harness. Without these, Core Web Vitals compliance cannot be assessed — this is the most critical measurement gap.

5. **Investigate Men category TTFB (409ms)** — 17× higher than static pages. Profile whether this is Monetate server-side execution, SFCC session handling, or A/B test resolution. Even a 150ms reduction here is meaningful on mobile networks.

6. **Fix Homepage critical ARIA violations** — Unnamed buttons (`button-name`) and broken ARIA parent-child relationships (`aria-required-parent`) are actionable WCAG 2.1 Level A failures. These require template-level fixes, not CSS.

7. **Address cart 429 under load** — The direct `429` on `/cart/` warrants investigation of rate-limit thresholds on the cart endpoint. If this fires for real users during promotions, it is a revenue-impacting bug.
## Recent history

- [[2026-06-11-site-journey-walker]] — 4/10 (2026-06-11)
- [[2026-06-10-site-journey-walker]] — 4/10 (2026-06-10)
- [[2026-06-09-site-journey-walker]] — 4/10 (2026-06-09)

