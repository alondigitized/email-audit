---
slug: 2026-09-16-site-journey-walker
type: site
date: 2026-09-16
persona: walker
score: "2/10"
previous_score: "2/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-2, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 2/10 (prev 2/10) · **Type:** Site journey · **2026-09-16**
## Full review
## 1. Executive Summary

I walked skechers.com on my phone from open to (attempted) cart. The good news: the homepage is clean, the Men's Shoes category and product page are legible with big text, and I found a genuinely relevant hands-free slip-in shoe at a fair price. The bad news: I never actually got logged in, the "Add to Cart" step choked because no size was picked, and when I tapped into my cart it was a **blank white page** — nothing there, no error, no way forward. Then my "comfort shoes" search served me women's shoes first, even though I'd just spent the whole session in Men's. This is not a shopping experience I could complete on my phone today.

## 2. Business Impact Score (1-10)

**2/10** — unchanged from yesterday.

The cart page rendering completely blank is a hard stop for revenue: I could browse, I could pick a shoe, but I could not check out. A logged-in flow that shows no visible change, and a search that ignores my gender/category signal, compound the problem. No regression from yesterday that I can tell, but no improvement either — the core purchase path is still broken.

## 3. What's Working

- **Homepage layout** is clean, uncluttered, with a clear promo banner (20% off, code PREVIEW) and category shortcuts (Slip-ins, Wide Fit, Arch Fit).
- **Hamburger menu → Men → Shoes** flyout is well organized with big, tappable rows and clear labels (Shoes, Shop by Activity, Comfort Technologies, Collections).
- **Men's Shoes category page** surfaces exactly the buckets I care about right up top: "Hands Free Slip-Ins," "Walking Shoes," "Boots" — that's on-target for a comfort-first Boomer shopper.
- **Product detail page** for the Slip-ins: Contour Foam - Cozy Fit Ohtro was genuinely good — clear price ($88), a visible member discount, a "Hands Free Slip-ins" badge, 62 reviews with a star rating, and a big product photo. This is exactly the kind of shoe I'd tap into.
- Text throughout is large enough to read without zooming, and most buttons are big enough to tap comfortably with a thumb.

## 4. What's Weak

- **Login did nothing visible.** After tapping the login icon, the screen looked byte-for-byte identical to the homepage. No modal, no form, no "welcome back" — I have no idea if I'm logged in or not.
- **Add to Cart failed silently on my behalf.** The screen shows a red "Please select a size" warning and several sizes crossed out as unavailable (6.5, 7.0, 10.0, 10.5, 11.0, 11.5, 14.0 — that's a lot of out-of-stock sizes for a size chart). Nothing was actually added; the cart badge still read "0."
- **The cart page is completely blank.** White screen, nothing on it. This is the single worst thing in the whole journey — I found a shoe I liked, and the checkout door is just... not there.
- **Search results aren't personalized.** After browsing exclusively in Men's, searching "comfort shoes" led with two **women's** shoes. That's a disconnect a real shopper would notice immediately.
- Sold-out sizes with a bell icon are a nice idea, but there's no confirmation of what "notify me" actually does, and having roughly half the size run struck through makes the size grid look broken at a glance.

## 5. Recommendations

1. **Fix the cart page rendering** — this is the top priority. A blank cart is a full checkout blocker, not a UX nit.
2. **Make login state visible** — show a name, account menu, or "Hi, Walker" somewhere after login so a returning shopper trusts they're recognized.
3. **Gate search by recent browsing/gender signal** — if I just browsed Men's Shoes, don't lead "comfort shoes" results with women's flats.
4. **Surface size availability before the tap-to-buy moment** — show grayed-out/sold-out sizes on the product card or PDP hero area, not just discovered after tapping "Add to Cart."
5. **Add a persistent, comparison-friendly content block** on PDPs (Skechers vs. Hoka/Brooks/New Balance cushioning, price-vs-quality) — right now there's nothing helping me justify $88 over a $65 pair from another brand.

## 6. Bottom Line

I can browse, I can find a shoe that fits my comfort priorities, but I cannot buy it — the cart is dead and login is invisible. Until checkout actually works, nothing else here matters much. Score holds flat at 2/10 versus yesterday; this needs an engineering fire drill, not a copy tweak.

## 7. Evidence

**Step 1 — Homepage:** Clean hero banner with a couple modeling casual outerwear and slip-on boots, "20% OFF Sitewide" bar up top, "Fall Preview Sale" strip, and quick-tap category chips (Slip-ins, Wide Fit, Arch Fit, Max Cushioning). Easy to read, no zoom needed. Cart badge shows 0. Felt generic, not personalized — no sign this recognizes me as a repeat visitor.

**Step 2 — Dismiss Popups:** Screen identical to Step 1 — no popup ever appeared to dismiss. Not a complaint (I hate popups), but it means this step accomplished nothing observable.

**Step 3 — Log In:** Screen is pixel-identical to the homepage again. Tapping the login icon produced no visible modal, form, or state change. I have no confidence I'm logged in, and the site gives zero personalization cues (no name, no "welcome back," no saved size).

**Step 4 — Men category:** A full-screen flyout menu opened cleanly with "MEN" header and large rows: Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, Clothing & Accessories. Easy to tap, easy to read, good contrast. This part felt genuinely mobile-friendly.

**Step 5 — Men > Shoes:** Landed on "Men's Shoes" with 753 results and three lead subcategory tiles: Hands Free Slip-Ins, Walking Shoes, Boots — directly on-brief for what I care about (hands-free, walking comfort). Filter and Sort controls sit right below, easy to reach with a thumb.

**Step 6 — Product detail:** Skechers Slip-ins: Contour Foam - Cozy Fit Ohtro, $88, 62 reviews at roughly 4.5 stars, "20% OFF for Members" callout, big "Hands Free Slip-ins" badge, and a large clean product photo with swipe arrows. This page did its job — I'd have kept going.

**Step 7 — Add to Cart:** Size grid shown with most odd/half sizes and several whole sizes struck through as sold out (6.5, 7.0, 10.0, 10.5, 11.0, 11.5, 14.0). A red "Please select a size" warning is displayed and the Add to Cart button is glowing, meaning my attempt to add to cart was rejected because no size was chosen first. Confusing sequencing — the CTA should probably be disabled until a size is picked, not clickable-then-scolding.

**Step 8 — View Cart:** Totally blank white screen. Nothing rendered — no header, no items, no error message, no way to recover. This is a dead end.

**Step 9 — Search "comfort shoes":** 1,541 results returned, but the first two results are women's shoes (GO WALK Joy - Cozy Fit Cozy Easy, $85; Bedford, $65) despite my entire session being in Men's Shoes. Not relevant to me, and it undercuts any sense that the site was paying attention to what I'd been browsing.

---

## Technical Audit

## Technical Summary

The mobile journey completed all 8 steps, but two backend endpoints returned repeated `429 Too Many Requests` across multiple pages (bot-detection fingerprinting and the SkechersPlus login modal), one third-party stylesheet failed to load due to a CORS misconfiguration, and TTFB spiked 15x on two of the eight steps. 18 axe-core violations were recorded, including 5 critical/serious issues, concentrated on the Homepage and View Cart page. LCP/CLS were not captured for any step, leaving a gap in Core Web Vitals coverage.

## Accessibility

- **Critical — button-name (Homepage):** One or more buttons have no accessible name (no text, `aria-label`, or `aria-labelledby`). Screen reader users cannot determine their function.
- **Critical — aria-required-parent (Homepage):** An element with an ARIA role requiring a specific parent role (e.g., `role="listitem"` outside `role="list"`) is misplaced, breaking the accessibility tree structure.
- **Serious — link-name (Homepage):** One or more links have no discernible text (likely icon-only links missing `aria-label`).
- **Serious — document-title / html-has-lang (View Cart):** The cart page is missing a `<title>` and/or the `<html>` element lacks a `lang` attribute — both are baseline WCAG 2.0 A requirements. Given the `429` on `/cart/` in the network log, this may indicate the cart view rendered from a fallback/error response rather than the normal SFCC template.
- **Moderate — landmark-main-is-top-level / landmark-no-duplicate-main / landmark-unique (Homepage):** Multiple/nested `<main>` or duplicate landmark roles are present, likely from a third-party widget (personalization/testing script) injecting its own landmark markup.
- **Moderate — landmark-complementary-is-top-level (Homepage, Search):** `<aside>`/`role="complementary"` nested inside another landmark rather than top-level — recurs on Search results, suggesting a shared component (e.g., filter sidebar or recommendation rail).
- **Moderate — landmark-one-main / page-has-heading-one (View Cart):** No `<main>` landmark and no `<h1>` on the cart page.
- **Moderate — heading-order (Homepage):** Heading levels skip or are out of sequence.
- **Moderate — region (Homepage, Search):** Content exists outside any landmark region.
- **Minor — aria-allowed-role (Homepage, Search):** A `role` attribute is used on an element type that doesn't permit it.

Pattern: the Homepage and Search share the landmark/region defects, suggesting a common injected component (nav, filter panel, or third-party script) is the root cause rather than page-specific markup.

## SEO

Not directly measured (no per-page meta/robots/structured-data audit was run), but the View Cart page's missing `<title>` (flagged under Accessibility) is also an SEO defect — an untitled/indexable page. No canonical, meta-description, or structured-data checks were available in this pass.

## Performance

| Step | TTFB | LCP | CLS |
|---|---|---|---|
| Homepage | 26ms | not captured | not captured |
| Log In | **440ms** | not captured | not captured |
| Men category | **440ms** | not captured | not captured |
| Men > Shoes | 30ms | not captured | not captured |
| Product detail | 28ms | not captured | not captured |
| Add to Cart | 28ms | not captured | not captured |
| View Cart | 130ms | not captured | not captured |
| Search | 27ms | not captured | not captured |

- **TTFB anomaly:** Log In and Men category both show TTFB ≈15x higher than the other steps (440ms vs. 26–30ms). This correlates with the `429` responses on `Login-SkechersPlusModals` and the Kasada `/fp` bot-detection endpoint hit around the same steps — server-side rate-limiting/challenge logic is the likely cause of the added latency rather than page rendering cost.
- **View Cart TTFB (130ms)** is also elevated relative to baseline and coincides with a `429` on `/cart/` itself.
- **LCP/CLS data gap:** No Largest Contentful Paint or Cumulative Layout Shift values were captured for any step. Core Web Vitals pass/fail cannot be assessed from this run — instrument the audit tooling to capture these (e.g., via `web-vitals` library or Lighthouse) before drawing performance conclusions.

## Mobile Optimization

No mobile-specific rendering defects (viewport, tap-target sizing, responsive breakpoints) were captured in the provided data. This category could not be fully assessed without layout/viewport data; flagging as a gap rather than "no issues found."

## Console & Network Errors

- **8x `429 Too Many Requests` on the Kasada bot-detection fingerprint endpoint** (`/149e9513-.../fp?x-kpsdk-v=j-1.2.796`) — fired repeatedly across Log In, Search, and Product view steps. Recurring 429s from a bot-mitigation endpoint typically indicate the client is being rate-limited/throttled by the anti-bot layer (Kasada), which is expected behavior toward automated/scripted traffic rather than a site defect for real users — but it's worth confirming this audit tooling isn't tripping thresholds that also affect legitimate high-frequency mobile sessions.
- **429 on `Login-SkechersPlusModals`** (3 occurrences, triggered from different origin actions: page load, Search-Show, Product-Show) — the same modal endpoint is being called redundantly across unrelated navigation actions and getting throttled.
- **429 on `/cart/`** — the View Cart page load itself was rate-limited, which explains the missing `<title>`/`lang`/`<main>` findings above (page likely rendered a degraded/error state).
- **CORS block:** `https://web-assets.stylitics.com/style.css` failed to load — "no Access-Control-Allow-Origin" from the Stylitics origin. This is a third-party (outfit-builder widget) misconfiguration blocking stylesheet delivery to `www.skechers.com`, resulting in unstyled or missing widget content.
- **`net::ERR_FAILED`** — one additional resource failed outright, consistent with the blocked Stylitics CSS request above.

## Recommendations

1. **Investigate rate-limiting on session/cart-critical endpoints.** `429`s on `/cart/` and `Login-SkechersPlusModals` affect core commerce flows (not just bot-detection telemetry) — confirm request volume/thresholds aren't being hit by normal mobile user sessions, since a rate-limited cart page directly degrades checkout.
2. **Fix the Stylitics CORS configuration** (or add `crossorigin` handling / self-host the stylesheet) so the outfit-builder widget's CSS loads reliably.
3. **Add a `<title>`, `lang` attribute, and `<h1>`/`<main>` landmark to the View Cart page** — likely requires ensuring the cart template renders fully even under degraded/throttled conditions rather than falling back to a bare response.
4. **Fix critical/serious a11y issues first:** give all icon-only buttons and links accessible names (`aria-label`), and resolve the `aria-required-parent` structural violation on the Homepage.
5. **De-duplicate landmark roles** (`main`, `complementary`) on Homepage/Search — audit third-party/injected components for landmark markup conflicts with the page's own layout.
6. **Instrument LCP/CLS capture** in the audit pipeline (Lighthouse or `web-vitals`) — current data can't validate Core Web Vitals thresholds despite TTFB being tracked.
7. **Explain the 440ms TTFB steps:** profile server-side timing on Log In and Men category specifically; if this is the bot-challenge layer adding latency inline, consider whether it can run asynchronously rather than blocking TTFB.
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

