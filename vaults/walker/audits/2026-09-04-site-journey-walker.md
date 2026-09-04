---
slug: 2026-09-04-site-journey-walker
type: site
date: 2026-09-04
persona: walker
score: "3/10"
previous_score: "3/10"
sender: www.skechers.com
subject: "Daily Journey: Walker Miles on www.skechers.com"
tags: [site-journey, score-3, sender/www-skechers-com]
---
# Daily Journey: Walker Miles on www.skechers.com
**Score:** 3/10 (prev 3/10) · **Type:** Site journey · **2026-09-04**
## Full review
## 1. Executive Summary

Walker got as far as a real product page and a decent search result, but the two things that matter most for closing a sale — **logging in** and **viewing the cart after adding an item** — both failed to render anything usable. The "Log In" tap left him staring at the exact same homepage, and "View Cart" loaded a **completely blank white screen**. On top of that, Add to Cart never actually completed because a size wasn't picked first, so the cart badge sat at "0" through the entire journey. The comfort-shoe merchandising itself (Slip-ins, Arch Fit, Max Cushioning) is genuinely well-surfaced and the search results were spot-on — but a shopper who can't see his cart won't check out.

## 2. Business Impact Score (1-10)

**3/10** — flat versus yesterday's 3/10. No improvement, and the blank cart page is a serious, checkout-blocking issue that should be the top engineering priority before anything else on this list.

## 3. What's Working

- **Hands-free/slip-on messaging is front and center**: "Slip-ins" is the first nav pill on the homepage, "Hands Free Slip-Ins" is the lead tile under Men > Shoes, and the exact product Walker picked (Skechers Slip-ins: Contour Foam - Cozy Fit) is a hands-free comfort shoe.
- **Comfort technology categories are one tap away**: Arch Fit, Max Cushioning both sit right on the homepage nav strip — exactly the language a comfort-first shopper is scanning for.
- **Search relevance is strong**: "comfort shoes" returned Slip-ins and Max Cushioning styles first, with 1,518 results and clear pricing.
- **Product detail page is clean and legible**: price, review count/stars, member discount callout, and a large product photo all above the fold without clutter.
- **Men > Shoes category slide-out menu** is well organized with generous tap targets (Shoes, Shop by Activity, Comfort Technologies, Collections).

## 4. What's Weak

- **Cart page renders blank.** Step 8 is a fully white screen — no header, no "your cart is empty" message, nothing. This is a hard stop for any shopper trying to review or check out.
- **Login is a dead tap.** Step 3 (Log In) is pixel-identical to the homepage — no modal, no redirect, no visible acknowledgment that anything happened.
- **Add to Cart silently failed.** Walker never selected a size, and the page correctly flagged "Please select a size" — but the cart icon stayed at 0 with no other feedback, and the flow moved on to a blank cart page regardless.
- **Zero personalization.** Cart badge stuck at 0 throughout, no "Welcome back" or account state anywhere, nothing tailored to a logged-in (or attempted-login) user.
- **No cross-brand or price-vs-quality content**, but that's expected on a single-brand retail site — not a real deduction, just a persona box left unchecked.

## 5. Recommendations

1. **Fix the cart page render** — this is the single highest-priority bug. A blank page after adding to cart (or even attempting to) will lose the sale outright.
2. **Make Log In actually respond** on mobile — a modal, slide-up sheet, or redirect, anything with visible feedback.
3. **Block or clearly explain failed Add to Cart** — if no size is selected, don't let the tap silently drop through to an empty/blank cart; keep the user on the PDP with the size selector highlighted.
4. **Surface logged-in state and cart count reliably** so a returning shopper like Walker feels recognized, not anonymous.

## 6. Bottom Line

The product discovery and search experience actually understand this shopper — comfort tech and slip-ins are right where he'd look. But the cart is the front door to revenue, and right now that door doesn't open: it's a blank screen. Until login and cart rendering are fixed, none of the good merchandising work converts.

## 7. Evidence

**Step 1 — Homepage**: Clean header with search/account/cart icons, a Labor Day 20%-off banner, and comfort-tech nav pills (Slip-ins, Arch Fit, Max Cushioning) immediately visible. Text is a bit small for comfortable reading without a slight zoom, but nothing blocking. No personalization shown (cart badge "0", no account greeting).

**Step 2 — Dismiss Popups**: Screen is identical to Step 1 — no popup was visible to dismiss, or one appeared and closed instantly off-screen. Either way, nothing to interact with, which is fine if there genuinely was no popup.

**Step 3 — Log In**: Screen is again identical to Step 1. Tapping the account icon produced no visible change — no login modal, no navigation. This is confusing on a phone: Walker would tap again, assume the button is broken, or give up. Not personalized — no way to reach a personalized state at all here.

**Step 4 — Men category**: A slide-out panel opened cleanly with Shoes, Shop by Activity, Comfort Technologies, Collections, Collaborations, and Clothing & Accessories, each with generous tap height and a chevron affordance. This is the best-executed screen in the journey — easy to read, easy to tap, no ambiguity.

**Step 5 — Men > Shoes**: Product grid loaded with category tiles (Hands Free Slip-Ins, Walking Shoes, Athletic Sneakers), a "Free pickup at [location]" toggle, Filter/Sort controls, and "739 results." Good information density without feeling cramped; comfort categories are front and center again.

**Step 6 — Product detail**: Skechers Slip-ins: Contour Foam - Cozy Fit, $88.00, 1,824 reviews at high star rating, "Members Get 20% OFF" note, and a large clean product photo with left/right arrows. Everything a comfort shopper needs is visible without scrolling — strong page.

**Step 7 — Add to Cart**: Size grid (6.5–14.0) with a clear "Please select a size" warning in red, quantity selector, shipping/pickup info, and a large blue "Add to Cart" button. Touch targets are good size. However, no size was selected before tapping Add to Cart, so the add silently failed — the cart badge should have visibly reflected this but the flow moved forward regardless.

**Step 8 — View Cart**: **Completely blank white screen.** No header, no items, no empty-cart messaging, nothing rendered at all. This is a critical failure — whether the underlying cause is the failed add-to-cart or a genuine page bug, a shopper hitting this would assume the site is broken and leave.

**Step 9 — Search "comfort shoes"**: Header/banner intact, 1,518 results, two lead products shown (Skechers Slip-ins: GO WALK Joy - Cozy Fit Cozy Easy, $85.00; Max Cushioning Elite 3, $78.99–$105.00) with color swatches and member-discount callouts. Genuinely relevant to the query and easy to scan — one of the stronger moments in the journey.

---

## Technical Audit

## Technical Summary

Mobile journey across 8 steps (Homepage → Log In → Men category → Men > Shoes → Product detail → Add to Cart → View Cart → Search). Server response times are generally fast (TTFB 29–508ms), but LCP and CLS were not captured for any step, and the session hit repeated 429 (rate-limited) responses from a bot-detection endpoint, including once on the cart page itself. Accessibility scanning found 18 violations (1 critical, 5 serious) concentrated on Homepage, View Cart, and Search. Page markup shows heavy third-party script loading (30+ tags on Homepage alone) which is the likely driver of both the console noise and any CLS/LCP degradation.

## Accessibility

- **Critical:** `aria-required-parent` on Homepage — ARIA elements missing required parent roles will not be exposed correctly to assistive tech.
- **Serious:** `aria-hidden-focus` (Homepage) — focusable elements nested inside `aria-hidden` containers are unreachable by keyboard/AT but still tab-focusable, creating a dead-focus trap.
- **Serious:** `link-name` (Homepage) — links with no discernible text; screen reader users can't determine link purpose.
- **Serious:** `document-title` and `html-has-lang` (View Cart) — the cart page renders without a `<title>` and without `lang` on `<html>`, unusual since Homepage/Login correctly set `lang="en"`, suggesting the cart view is served through a different render path (SFRA cart fragment) that skips head tag injection.
- **Moderate:** `heading-order`, multiple `landmark-*` violations (duplicate/non-top-level `main` and `complementary` landmarks, non-unique landmarks, uncontained regions) on Homepage and Search; `landmark-one-main` and `page-has-heading-one` missing on View Cart (no `<main>`, no `<h1>`).
- **Minor:** `aria-allowed-role` on Homepage and Search — role attributes used on elements that don't support them.

The View Cart page cluster (missing title/lang/main/h1) is the most actionable — these are core document-structure issues, not edge cases, and point to that template lacking the same base scaffolding as other pages.

## SEO

- View Cart missing `<title>` is also an SEO defect on any indexable variant of that URL (cart pages are typically noindexed, but confirm robots directives rather than relying on missing title as the block).
- `lang` attribute absent on View Cart — affects language-targeting signals for that document.
- No canonical/meta data was included in the provided HTML samples to audit further; recommend pulling `<head>` for Product Detail and Search result pages specifically, since those are the indexable, revenue-relevant templates.

## Performance

- TTFB is healthy across the journey: 508ms (Homepage, cold) down to 29–40ms on Men>Shoes, Product Detail, Add to Cart, and Search — consistent with edge/CDN caching kicking in after the first request.
- LCP and CLS were not captured for any step — this is a data gap, not a clean bill of health. Given the volume of async third-party scripts on Homepage (30+ distinct origins: TikTok, Snapchat, Pinterest, Reddit, Taboola, Quantum Metric, Monetate, Bloomreach, Impact, CreativeCDN, etc.), CLS risk from late-injected content (banners, personalization overlays) is likely — this should be re-measured with Lighthouse/CrUX before being marked clear.
- The CORS-blocked Stylitics stylesheet (`web-assets.stylitics.com/style.css`) will cause that widget's styles to fail to load, which can trigger unstyled-content flashes or layout shift wherever that outfit/styling module renders (likely PDP).
- Repeated 429s against the same fingerprinting endpoint (`/fp?x-kpsdk-v=...`) indicate the bot-detection client (Kasada) is retrying and getting throttled — each retry is wasted network/CPU work on the client during an already resource-heavy session.

## Mobile Optimization

- Homepage HTML sets `style="--vh: 6.64px"` inline — a JS-computed viewport-height custom property, a common workaround for mobile browser chrome resizing the visual viewport. This is reasonable but means any layout relying on `--vh` before that script executes will render incorrectly for a frame, contributing to CLS.
- No mobile-specific meta viewport, tap-target, or touch-icon issues were surfaced in the provided data; recommend explicitly checking `<meta name="viewport">` and tap target sizing via Lighthouse mobile audit since it wasn't included in the HTML excerpt.

## Console & Network Errors

- **429 rate-limiting (5 occurrences):** 4× against the Kasada bot-detection fingerprint endpoint (`/fp?x-kpsdk-v=...`), and 1× against `/cart/` directly. A 429 on the cart route itself is the most severe finding in this category — it means the bot-mitigation layer can rate-limit a core commerce page under normal automated/scripted navigation, which risks false-positive blocking of real mobile users on flaky networks or during rapid re-navigation.
- **CORS failure:** `web-assets.stylitics.com/style.css` blocked by missing `Access-Control-Allow-Origin` header — third-party stylesheet fails closed, breaking whatever widget depends on it (`net::ERR_FAILED` in Network Errors corresponds to this).
- **Summarizer API warnings (4×):** "Unsupported Summarizer API languages" — a script (likely a personalization/AI tag) is invoking Chrome's built-in `Summarizer` API without checking language support first. Functionally harmless (aborted gracefully) but indicates unguarded feature-detection in a loaded third-party script.

## Recommendations

1. Investigate the `/cart/` 429 — confirm whether Kasada/bot-mitigation thresholds are too aggressive for normal mobile session behavior; a false-positive rate-limit on checkout-adjacent pages directly risks cart abandonment.
2. Fix CORS headers on `web-assets.stylitics.com` (or proxy the stylesheet through skechers.com) so the styling widget renders correctly.
3. Add `<title>`, `lang`, a `<main>` landmark, and an `<h1>` to the View Cart template — bring it in line with the document structure already present on Homepage/Login.
4. Resolve the critical `aria-required-parent` and serious `aria-hidden-focus`/`link-name` violations on Homepage — these block keyboard/AT users from core navigation.
5. Consolidate/audit the third-party tag list (30+ origins on Homepage) via GTM — each added script is additional CLS/LCP risk that current metrics can't quantify because LCP/CLS weren't captured; re-run with Lighthouse mobile or CrUX field data to get real numbers.
6. Have the vendor providing the Summarizer API call guard for supported languages before invoking it, to eliminate console noise (low priority, cosmetic).
## Recent history

- [[2026-08-19-site-journey-walker]] — 1/10 (2026-08-19)
- [[2026-08-18-site-journey-walker]] — 2/10 (2026-08-18)
- [[2026-08-17-site-journey-walker]] — 3/10 (2026-08-17)

