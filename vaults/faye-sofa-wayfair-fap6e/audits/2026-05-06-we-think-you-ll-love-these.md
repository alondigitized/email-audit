---
slug: 2026-05-06-we-think-you-ll-love-these
type: email
date: 2026-05-06
persona: faye-sofa-wayfair-fap6e
score: "7/10"
sender: Wayfair
subject: We think you’ll love these →
tags: [email, score-7, sender/wayfair]
---
# We think you’ll love these →
**Score:** 7/10 · **Type:** Email audit · **2026-05-06**
## Executive summary

- This is a browse-retargeting send from Wayfair pairing three "you viewed / you'll love" product recommendations with a secondary discovery grid. The personalization mechanic is the email's strongest asset — it anchors the experience in real browsing data. However, the email is undermined by a critical operational failure: the promo code in the hero visibly shows **Expires 04/19/26**, and today is 05/06/26 — the offer expired 17 days ago. Sending a dead code on a retargeting email is the fastest way to destroy purchase intent at the moment of highest consideration. Set that aside and this is a competent-but-noisy product-discovery email; it has no single hero CTA, competes with itself across too many modules, and leans on the app QR code as an afterthought.

## What's working

- **Browse retargeting pairing is the right mechanic.** Three rows of "you viewed / you'll love" with matched product images is one of the highest-signal personalization formats in home retail. It acknowledges the shopper's intent and extends it.
- **Clean visual layout.** Product images are large, well-lit, and consistent. The alternating left/right column structure is scannable. No broken images or layout collapse.
- **Promo code placement.** Putting the code in the hero, above the fold, is correct. The expiry date shows urgency framing was intended.
- **Brand module at the bottom.** Surfacing Andover Mills, Brayden Studio, Mercury Row, Wrought Studio adds brand discovery without cluttering the main panels.

## What's weak

- **Expired promo code is a critical failure.** The hero clearly shows "Expires 04/19/26." This email should not have been deployed or, if batched, should have had the code refreshed. A shopper who copies this code at checkout gets a rejection — immediate trust damage to both the brand and the retargeting program.
- **No single dominant CTA.** The email is entirely product-tile-based. Every tile presumably links, but there is no one "Shop Now" or "Claim Your Code" button that aggregates intent. The promo code and the "more for your space" grid are competing calls to action.
- **Too many modules.** After three personalized recommendation rows, you get a 4×2 discovery grid, five brand logos, four utility modules (Rewards, Financing, Professional, Corporate Brands), and an app download QR. That's five distinct value propositions in one scroll. Volume dilutes each.
- **Subject line is vague.** "We think you'll love these →" gives no product category, no offer hook, nothing perishable. It signals personalization but doesn't deliver a reason to open beyond curiosity.
- **App QR code at the bottom.** Asking a desktop inbox reader to download an app via QR at the bottom of a retargeting email is low-yield friction. Either omit or surface earlier with a clearer value prop.

## Recommendations

- 1. **Fix the dead code immediately.** Refresh the promo code for any resend or re-queue; build an automated suppression or code-expiry check into the send pipeline.
- 2. **Add a single CTA button in the hero.** Something like "Shop Your Picks" or "Claim Code + Browse" — one action, one destination, above the first fold.
- 3. **Cut the module count in half.** Keep the three retargeting pairs + one utility row (Rewards or Financing, not both). The "more for your space" grid works on a secondary scroll but shouldn't share billing with the personalized rows.
- 4. **Upgrade the subject line.** Tie it to the active offer: *"Your dressers are waiting — code inside"* or name the category if it can be inferred from browse data.
- 5. **Audit send timing vs. code expiry.** Retargeting flows with embedded promo codes must have hard expiry guards in the template or the send scheduler.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | High | Fixed heights on `.ProductRec-price`, `.ProductRec-salesCopy`, `.ProductRec-stars` | Replace with `min-height` or remove height constraint; test with longest real price/label strings |
- | Medium | `word-break: break-all` on `.ProductRec-name` | Replace with `overflow-wrap: break-word; word-break: normal` |
- | Low | All heading variants collapse to identical sizes on mobile | Introduce distinct mobile sizes per variant if hierarchy matters in the design |
- | Audit | Full HTML required | Re-run audit on complete source to cover: link tracking, UTM coverage, merge token fallbacks, unsubscribe footer, and authentication headers |

## Full review
---

## 1. Executive Summary

This is a browse-retargeting send from Wayfair pairing three "you viewed / you'll love" product recommendations with a secondary discovery grid. The personalization mechanic is the email's strongest asset — it anchors the experience in real browsing data. However, the email is undermined by a critical operational failure: the promo code in the hero visibly shows **Expires 04/19/26**, and today is 05/06/26 — the offer expired 17 days ago. Sending a dead code on a retargeting email is the fastest way to destroy purchase intent at the moment of highest consideration. Set that aside and this is a competent-but-noisy product-discovery email; it has no single hero CTA, competes with itself across too many modules, and leans on the app QR code as an afterthought.

---

## 2. Business Impact Score

**7/10**

Rubric criteria counted as TRUE:
- Hero copy explicitly references persona's focus area — "curated for you" + viewed items from browsing history
- Sender is recognizable (Wayfair)
- One concrete offer is visible — promo code with explicit code string shown in hero
- Visual hierarchy is clear — "you viewed / you'll love" pattern gives the eye a repeatable track
- No render bugs — images load, layout is intact, no overlapping text
- Loyalty/member benefits visible — Wayfair Rewards module at bottom
- Offer feels honest *(partially denied)* — the code is visually present but the stated expiry (04/19/26) has already passed; the "offer" is inert

Criteria NOT met: primary CTA is not a single unambiguous button; no seasonal relevance; no demographic model signals (furniture, gender-neutral, models absent).

---

## 3. What's Working

**Browse retargeting pairing is the right mechanic.** Three rows of "you viewed / you'll love" with matched product images is one of the highest-signal personalization formats in home retail. It acknowledges the shopper's intent and extends it.

**Clean visual layout.** Product images are large, well-lit, and consistent. The alternating left/right column structure is scannable. No broken images or layout collapse.

**Promo code placement.** Putting the code in the hero, above the fold, is correct. The expiry date shows urgency framing was intended.

**Brand module at the bottom.** Surfacing Andover Mills, Brayden Studio, Mercury Row, Wrought Studio adds brand discovery without cluttering the main panels.

---

## 4. What's Weak

**Expired promo code is a critical failure.** The hero clearly shows "Expires 04/19/26." This email should not have been deployed or, if batched, should have had the code refreshed. A shopper who copies this code at checkout gets a rejection — immediate trust damage to both the brand and the retargeting program.

**No single dominant CTA.** The email is entirely product-tile-based. Every tile presumably links, but there is no one "Shop Now" or "Claim Your Code" button that aggregates intent. The promo code and the "more for your space" grid are competing calls to action.

**Too many modules.** After three personalized recommendation rows, you get a 4×2 discovery grid, five brand logos, four utility modules (Rewards, Financing, Professional, Corporate Brands), and an app download QR. That's five distinct value propositions in one scroll. Volume dilutes each.

**Subject line is vague.** "We think you'll love these →" gives no product category, no offer hook, nothing perishable. It signals personalization but doesn't deliver a reason to open beyond curiosity.

**App QR code at the bottom.** Asking a desktop inbox reader to download an app via QR at the bottom of a retargeting email is low-yield friction. Either omit or surface earlier with a clearer value prop.

---

## 5. Recommendations

1. **Fix the dead code immediately.** Refresh the promo code for any resend or re-queue; build an automated suppression or code-expiry check into the send pipeline.
2. **Add a single CTA button in the hero.** Something like "Shop Your Picks" or "Claim Code + Browse" — one action, one destination, above the first fold.
3. **Cut the module count in half.** Keep the three retargeting pairs + one utility row (Rewards or Financing, not both). The "more for your space" grid works on a secondary scroll but shouldn't share billing with the personalized rows.
4. **Upgrade the subject line.** Tie it to the active offer: *"Your dressers are waiting — code inside"* or name the category if it can be inferred from browse data.
5. **Audit send timing vs. code expiry.** Retargeting flows with embedded promo codes must have hard expiry guards in the template or the send scheduler.

---

## 6. Bottom Line

A structurally sound browse-retargeting email sabotaged by an expired coupon code and too many competing modules. The personalization mechanic is right; the execution has a mission-critical ops hole. Fix the code, consolidate the CTAs, and sharpen the subject — this program has the right bones.

---

## 7. Subject Line Analysis

- **Subject:** `We think you'll love these →`
- **Length:** 30 characters
- **Scores (1-10):** Clarity `6`, Curiosity `5`, Personalization `4`, Urgency `2`, Specificity `2`
- **Strengths:**
  - Short and mobile-friendly; arrow glyph adds a light visual hook
  - Implied personalization ("these") suggests the content is tailored
- **Weaknesses:**
  - No offer, no category, no product type — could be sent by any retailer for any vertical
  - Zero urgency; "We think you'll love" is tepid brand-speak
- **Alt A:** `Your dressers are waiting — code inside`
- **Alt B:** `Picked for you: code expires soon`

---

## 8. Preview Text Analysis

- **Preview:** `Bring picks home with the code:`
- **Length:** 32 characters
- **Scores (1-10):** Complements subject `7`, Specificity `5`, Clarity `6`, Inbox-fit `6`
- **Strengths:**
  - Does add new information the subject omits — pivots from "love" to "buy with a code"
  - "Bring picks home" reinforces the browse-retargeting frame cleanly
- **Weaknesses:**
  - Cuts off before showing the actual code value; recipient doesn't know the discount magnitude
  - "With the code:" trailing without the code string is an incomplete tease in the preview pane
- **Alt A:** `Your code for 10% off expires soon — use it before it's gone`
- **Alt B:** `The pieces you viewed are ready — plus a code to save`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `7/10`
- **Signals counted:** sender display name recognizable (Wayfair), subject relevant to persona focus area (implied browse retargeting), preview text complements subject (adds offer angle), preview text is real copy (not junk), subject under 50 chars, no spam signals (no ALL CAPS or exclamation stacking), personalization hint ("these" implies tracked behavior)
- **Rationale:** Wayfair is a known sender and the preview's offer hook nudges curiosity, but the subject itself is too soft to compel opens from a cold scroll — anyone not actively shopping for furniture has little reason to prioritize it.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** hero offer visible above fold (promo code in hero section), primary CTA in my category (browse-matched furniture), offer reduces price (promo code present), time-bounded urgency with deadline (expiry date visible), brand voice consistent (Wayfair retargeting is familiar), no friction from layout/render issues
- **Rationale:** The "you viewed / you'll love" pairing is genuinely compelling and would pull a click — but the moment I try to use the promo code at checkout and it fails, that click turns into a churn signal. The expired code is the click-killer hiding inside an otherwise solid mechanic.

---

## 11. Evidence

- **Overall purpose:** Browse-retargeting / cart-recovery email with an embedded promo code incentive to close the loop on recently viewed furniture.
- **Hero / primary value proposition:** "Curated for you" framing with a named promo code and visible expiry date. Positioned above the fold. Code is the incentive; browse history is the hook.
- **"You viewed / You'll love" modules:** Three rows. Row 1: dark wood dresser → similar chest. Row 2: ladder/leaning shelf → comparable storage unit. Row 3: black tufted sofa → complementary seating. Product pairing logic appears coherent.
- **"More for your space" section:** 4×2 grid of additional bedroom/storage furniture. Adds discovery surface but dilutes focus after three already personalized rows.
- **Brand logo strip:** Andover Mills, Brayden Studio, Mercury Row, Wrought Studio, Joss & Main — Wayfair's private label / owned brands. Useful for brand-aware shoppers, invisible to most.
- **Utility modules:** Wayfair Rewards, Flexible Financing, Wayfair Professional, Wayfair Corporate Brands — four distinct programs sharing one row. Highly compressed; Rewards is the only one likely to move a consumer.
- **App download module:** "Get Exclusive Deals on the App" with QR code. Positioned last before footer. Low engagement likelihood in this placement.
- **Bugs / friction / clarity issues:**
  - **Critical:** Promo code expiry reads 04/19/26; email arrives 05/06/26 — code is 17 days expired as rendered.
  - No visible star ratings or review counts on any product tile.
  - No price information visible on any product — no anchoring for the promo code's perceived value.

---

## Technical Audit

## Technical Audit — Wayfair "We think you'll love these →"

---

### 1. Technical Summary

XHTML 1.0 Transitional, table-based layout with responsive media queries targeting 480px and 320px breakpoints. Source is truncated, so link-level and compliance sections are partially assessable only.

---

### 2. Link & Tracking Issues

**Partially assessable** — no anchor `href` values are visible in the provided excerpt.

- External resource confirmed: web font loaded from `https://secure.img.wfrcdn.com/st4/stores/common/fonts/sofia/sofia_reg.woff`. This is a first-party CDN domain (Wayfair's `wfrcdn.com`), no third-party flag.
- Cannot confirm UTM parameters, click-tracking redirects, or open-pixel `src` without the full HTML.

---

### 3. Rendering & Accessibility

**Confirmed issues:**

- **`word-break: break-all` on `.ProductRec-name`** — applied unconditionally at ≤480px. `break-all` splits at any character, including mid-syllable, which degrades readability for product names. `overflow-wrap: break-word` with `word-break: normal` is the correct pairing.
- **Rigid fixed heights on mobile product card elements:**
  ```css
  .ProductRec-stars, .ProductRec-shippingCopy { height: 16px }
  .ProductRec-price { height: 40px; vertical-align: top }
  .ProductRec-salesCopy { height: 28px; vertical-align: top }
  ```
  These hard pixel heights will clip content if dynamic copy (prices, shipping labels) exceeds the declared height — particularly risky with variable-length personalized data.
- **Web font (`Sofia`) will not render in Gmail or Outlook** — `mso-font-alt: "Arial"` fallback is correctly declared, so this is handled, but confirm the Arial fallback metrics don't collapse layouts designed around Sofia's metrics.
- **All title/header classes collapse to the same size at 480px** — `.u-Title`, `.u-Title--primary` through `.u-Title--white` all resolve to `32px !important`; `.u-Header*` all resolve to `22px !important`. Any size hierarchy in the desktop design is lost on mobile.

**No issues found:**
- Outlook New app hack (`body[data-outlook-cycle]`) is present and correctly scoped.
- Gmail display fix (`u ~ div { min-width: 100vw }` and `u + .Gmail`) is standard and correctly applied.
- iOS Safari detection (`@supports (-webkit-touch-callout: none)`) is correctly used to fix inline image stacking.
- Dual breakpoints (480px, 320px) for footer links are appropriate.

---

### 4. Personalization & Merge Tokens

**Cannot assess** — no merge token syntax (e.g., `{{first_name}}`, `%FNAME%`, Liquid tags) is visible in the truncated source. Full source required to confirm token rendering and fallback defaults.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot assess** — footer, physical address, and unsubscribe link are below the truncation point. Authentication headers (SPF, DKIM, DMARC) are not assessable from HTML source alone; require raw SMTP headers.

From: address is `noreply@service.wayfair.com` (subdomain sender), which is standard for ESPs but means replies go to a no-reply — confirm this is intentional and documented in list hygiene policy.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

**Cannot assess** — no `<a href>` elements visible in the truncated source. Full HTML needed to audit UTM parameter coverage and consistency across product links, header nav, and footer links.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| High | Fixed heights on `.ProductRec-price`, `.ProductRec-salesCopy`, `.ProductRec-stars` | Replace with `min-height` or remove height constraint; test with longest real price/label strings |
| Medium | `word-break: break-all` on `.ProductRec-name` | Replace with `overflow-wrap: break-word; word-break: normal` |
| Low | All heading variants collapse to identical sizes on mobile | Introduce distinct mobile sizes per variant if hierarchy matters in the design |
| Audit | Full HTML required | Re-run audit on complete source to cover: link tracking, UTM coverage, merge token fallbacks, unsubscribe footer, and authentication headers |
## Recent history

- [[2026-05-06-are-these-the-faux-florals-you-wanted]] — 7/10 (2026-05-06)
- [[2026-05-05-savings-right-this-way]] — 6/10 (2026-05-05)
- [[2026-05-05-8x10-coastal-indoor-outdoor-rugs-under-150]] — 5/10 (2026-05-05)

