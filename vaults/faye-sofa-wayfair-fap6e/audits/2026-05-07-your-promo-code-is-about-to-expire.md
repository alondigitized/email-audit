---
slug: 2026-05-07-your-promo-code-is-about-to-expire
type: email
date: 2026-05-07
persona: faye-sofa-wayfair-fap6e
score: "6/10"
sender: Wayfair
subject: Your PROMO CODE is about to expire >>>
tags: [email, score-6, sender/wayfair]
---
# Your PROMO CODE is about to expire >>>
**Score:** 6/10 · **Type:** Email audit · **2026-05-07**
## Executive summary

- Standard urgency-play from Wayfair — a promo code expiration notice dressed up with a lifestyle product grid. The hero lands the urgency message cleanly, but the critical piece of information (what the code actually saves you) is never shown. You're asked to act on urgency without knowing the reward. The product grid is broad and untargeted, the primary CTA is buried at the bottom and points to the app rather than the offer. A competent send, but the conversion setup is weak.

## What's working

- **Urgency framing is direct.** "Don't wait to save. Use your promo code before it expires." is clear and action-oriented at the top.
- **Wayfair brand equity carries weight.** The sender is trusted; recipients know the product category instantly.
- **Product grid is visually appealing.** Clean lifestyle photography across furniture, outdoor, and bedroom categories creates browse motivation.
- **Benefits strip at the bottom** (Rewards, Shipping, Exclusive Brands) reinforces value without cluttering the hero.

## What's weak

- **No discount value anywhere.** The promo code is displayed but the offer (10% off? $20 off? Free shipping?) is invisible. This is the single biggest conversion leak — urgency without a stated reward fails to compel action.
- **No CTA button in or near the hero.** The promo code floats without a "Shop Now" or "Use Code" button. The only button ("Get Exclusive Deals on the App") is at the bottom and routes to the app, not the offer.
- **No expiration date shown.** "Before it expires" is vague — a specific date ("Expires tonight at midnight") would sharpen the urgency materially.
- **Product grid is untargeted.** Curtains, office chairs, bar stools, outdoor pergolas, a recliner — this is Wayfair's full breadth, not a curated selection based on any browsing or purchase history.
- **No single hero product.** Nothing anchors the eye to "this is what you should buy with this code."
- **">>>" in the subject line** is a deliverability and credibility risk — reads like a bargain-bin spam signal.

## Recommendations

- 1. **Show the discount value in the hero.** Replace "Use your promo code before it expires" with "Save 15% sitewide — code expires [date]." The code itself is secondary; the saving is primary.
- 2. **Add a CTA button directly under the promo code.** "Shop Now — Code Auto-Applied" or "Browse Deals" with the code pre-populated would close the action gap.
- 3. **Add the expiration date explicitly.** "Expires May 9 at 11:59 PM" is far more effective than "before it expires."
- 4. **Narrow the product grid.** If behavioral data exists, show the categories the recipient browsed. If not, pick a single theme (e.g., outdoor living for May) instead of the full catalog.
- 5. **Drop the ">>>" from the subject.** It doesn't help click-through and damages perceived sender quality.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | High | Source truncated — audit incomplete | Provide full HTML for link, compliance, and UTM review |
- | High | Gmail 102 KB clip risk from verbose CSS | Group media query rules; minify CSS before send |
- | High | Unsubscribe block unverified | Confirm CAN-SPAM-compliant footer exists and opt-out link is live |
- | Medium | `@font-face` lacks cross-client fallback stack | Add `font-family: Sofia, Arial, sans-serif` to all font declarations |
- | Medium | Subject line spam triggers | Test `PROMO CODE` (all-caps) and `>>>` against SpamAssassin; consider `Your promo code expires soon` |
- | Low | No tablet breakpoint | Add `@media (max-width: 600px)` ruleset for mid-size viewports |
- | Low | Authentication headers | Confirm DKIM/SPF/DMARC alignment on `service.wayfair.com` subdomain |

## Full review
---

## 1. Executive Summary

Standard urgency-play from Wayfair — a promo code expiration notice dressed up with a lifestyle product grid. The hero lands the urgency message cleanly, but the critical piece of information (what the code actually saves you) is never shown. You're asked to act on urgency without knowing the reward. The product grid is broad and untargeted, the primary CTA is buried at the bottom and points to the app rather than the offer. A competent send, but the conversion setup is weak.

---

## 2. Business Impact Score

**6/10**

- Subject and hero explicitly reference saving / home products (persona focus area): TRUE
- Sender (Wayfair) is recognizable: TRUE
- Concrete offer visible (specific %/$ off, BOGO, free shipping): **FALSE** — promo code is shown but no discount value is stated anywhere
- Primary CTA is unambiguous with clear button: FALSE — no CTA button attached to the promo code in the hero
- Visual hierarchy is clear — eye lands on offer/hero first: TRUE
- No render bugs: TRUE
- Demographic signals match persona: FALSE — generic home grid, no targeting signals
- Email reflects current season/campaign: FALSE — no seasonal hook visible
- Loyalty/member benefits visible: TRUE — Wayfair Rewards icon in the benefits strip
- Offer feels honest: FALSE — promo code with hidden value reads as bait-and-switch

---

## 3. What's Working

- **Urgency framing is direct.** "Don't wait to save. Use your promo code before it expires." is clear and action-oriented at the top.
- **Wayfair brand equity carries weight.** The sender is trusted; recipients know the product category instantly.
- **Product grid is visually appealing.** Clean lifestyle photography across furniture, outdoor, and bedroom categories creates browse motivation.
- **Benefits strip at the bottom** (Rewards, Shipping, Exclusive Brands) reinforces value without cluttering the hero.

---

## 4. What's Weak

- **No discount value anywhere.** The promo code is displayed but the offer (10% off? $20 off? Free shipping?) is invisible. This is the single biggest conversion leak — urgency without a stated reward fails to compel action.
- **No CTA button in or near the hero.** The promo code floats without a "Shop Now" or "Use Code" button. The only button ("Get Exclusive Deals on the App") is at the bottom and routes to the app, not the offer.
- **No expiration date shown.** "Before it expires" is vague — a specific date ("Expires tonight at midnight") would sharpen the urgency materially.
- **Product grid is untargeted.** Curtains, office chairs, bar stools, outdoor pergolas, a recliner — this is Wayfair's full breadth, not a curated selection based on any browsing or purchase history.
- **No single hero product.** Nothing anchors the eye to "this is what you should buy with this code."
- **">>>" in the subject line** is a deliverability and credibility risk — reads like a bargain-bin spam signal.

---

## 5. Recommendations

1. **Show the discount value in the hero.** Replace "Use your promo code before it expires" with "Save 15% sitewide — code expires [date]." The code itself is secondary; the saving is primary.
2. **Add a CTA button directly under the promo code.** "Shop Now — Code Auto-Applied" or "Browse Deals" with the code pre-populated would close the action gap.
3. **Add the expiration date explicitly.** "Expires May 9 at 11:59 PM" is far more effective than "before it expires."
4. **Narrow the product grid.** If behavioral data exists, show the categories the recipient browsed. If not, pick a single theme (e.g., outdoor living for May) instead of the full catalog.
5. **Drop the ">>>" from the subject.** It doesn't help click-through and damages perceived sender quality.

---

## 6. Bottom Line

The urgency mechanic is sound but half-built. You've created a reason to act without telling people what they're acting for. Fix the hero to include the discount value and a CTA button, and this email's click rate should improve meaningfully. As-is, it's a browse-driver at best, not a conversion driver.

---

## 7. Subject Line Analysis

- **Subject:** `Your PROMO CODE is about to expire >>>`
- **Length:** 39 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `2`, Urgency `7`, Specificity `3`
- **Strengths:**
  - Clear topic signal — recipient immediately knows what this is about
  - Under 50 characters, renders well on mobile
- **Weaknesses:**
  - "PROMO CODE" in all-caps and ">>>" read as spam/low-quality sender
  - Zero specificity — no discount amount, no product category, no expiration date
- **Alt A:** `Your 15% off code expires tonight — Wayfair`
- **Alt B:** `Alon, your Wayfair code expires May 9`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — no distinct preheader is legible in the render; the preview likely defaults to nav link text or "View in browser" copy
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (none identifiable)
- **Weaknesses:**
  - If the preheader is defaulting to navigation or boilerplate text, it wastes prime inbox real estate immediately after the subject
  - Misses the chance to reinforce urgency with the specific expiration date or discount value
- **Alt A:** `Your code saves 15% — it disappears at midnight tonight.`
- **Alt B:** `Last chance: promo code expires May 9. Shop furniture, outdoor & more.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** sender recognizable (Wayfair), subject references concrete concept (promo code expiry), subject relevant to home shopper persona, subject under 50 chars, time-bounded urgency present
- **Rationale:** Wayfair's brand recognition and the expiry urgency are enough to get the open from a subscriber — but the spam-adjacent ">>>" and lack of a stated discount value mean borderline subscribers may pass.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** hero offer visible at top without scrolling, products are in the home category (persona match), Wayfair brand is trusted, no visible render friction or broken images
- **Rationale:** Once inside, the pretty product grid creates browse intent, but the missing discount value and absent hero CTA button mean there's no clear "pull the trigger now" moment — this email generates site visits, not purchases.

---

## 11. Evidence

- **Overall purpose:** Urgency re-engagement — push a lapsing or unexpired promo code toward redemption before it expires.
- **Hero / primary value proposition:** "Don't wait to save. Use your promo code before it expires." with the promo code displayed in small text. No discount amount stated.
- **Membership / benefits section:** A three-icon strip near the bottom — Wayfair Rewards, what appears to be a shipping/fulfillment benefit, and Wayfair Exclusive Brands. Functional but not prominent.
- **Product discoverability / recommendation modules:** A 3×4-ish product image grid covering diverse home categories (office seating, curtains, bar stools, outdoor structures, mattresses, wood furniture, recliners). No product names, prices, or ratings visible — pure imagery.
- **Utility / secondary modules:** "Get Exclusive Deals on the App" button with app store badge. Social media icons. Standard footer with unsubscribe and legal.
- **Bugs / friction / clarity issues:** No visible render bugs. The promo code text in the hero is rendered small and may be difficult to read on mobile. The absence of a CTA button in the hero is a design/UX gap, not a technical bug, but it is clearly visible.

---

## Technical Audit

## Technical Audit — Wayfair "Promo Code Expiry" Email

---

### 1. Technical Summary

The email uses a standard XHTML 1.0 Transitional table-based layout with mobile media queries. The HTML source is truncated, so link integrity, UTM coverage, and the unsubscribe block cannot be fully verified — those gaps are flagged explicitly below.

---

### 2. Link & Tracking Issues

**Cannot fully verify — source is truncated.** Based on what is visible:

- No `<a>` tags or redirect URLs are present in the supplied excerpt; link audit requires full source.
- Cannot confirm whether all CTAs pass through a click-tracking redirect (e.g., `clicks.service.wayfair.com` or similar).
- **Action required:** Provide full HTML to audit link targets, tracking wrappers, and open-pixel `<img>` tag.

---

### 3. Rendering & Accessibility

**Web font not email-safe (confirmed):**
```css
@font-face {
  font-family: "Sofia";
  src: url(https://secure.img.wfrcdn.com/st4/stores/common/fonts/sofia/sofia_reg.woff) format("woff");
  mso-font-alt: "Arial"
}
```
`@font-face` is blocked in Outlook (2007–2021, Word rendering engine), Gmail web, and Samsung Mail. The `mso-font-alt: "Arial"` fallback covers Outlook only — no generic `font-family` stack is declared in the visible excerpt, meaning non-Outlook clients that reject the request will inherit the browser/client default instead of a controlled fallback.

**Media query duplication — file size risk:**
Each responsive rule is wrapped in its own `@media` block rather than grouped:
```css
@media only screen and (max-width: 480px) { .u-Button { ... } }
@media only screen and (max-width: 480px) { .u-Button a { ... } }
/* ... repeated ~30+ times */
```
This pattern inflates raw HTML size. Gmail clips emails exceeding ~102 KB, hiding the unsubscribe footer and breaking rendering. Size must be verified against full source.

**Single mobile breakpoint (480px):**
No tablet breakpoint (~600–768px) is declared. Layouts between 480px and desktop width render at full desktop sizing — a known gap for large-tablet and split-screen views.

**`u ~ div { min-width: 100vw }` Gmail hack present:**
Correct and expected for Gmail dark-mode/app rendering. No issue.

**`@supports (-webkit-touch-callout: none)` iOS fix present:**
Targets iOS Mail for `.u-HalfWidthBlock img`. Correct pattern, no issue.

---

### 4. Personalization & Merge Tokens

Cannot verify — no body content is present in the truncated source. Confirm:
- Promo code value is dynamically injected (not hardcoded).
- Expiry date is dynamically rendered and matches the live promotion window.
- No unresolved merge tokens (e.g., `{{promo_code}}`, `[EXPIRY_DATE]`) appear in rendered output.

---

### 5. Compliance

**From address:**
`noreply@service.wayfair.com` — noreply addresses are CAN-SPAM compliant but suppress reply-based unsubscribes and can increase spam complaints. Not a violation, but increases unsubscribe friction if the footer link is broken.

**Unsubscribe block:**
Not visible in truncated source. CAN-SPAM requires a functional opt-out mechanism. Cannot confirm presence or functionality — **full source required.**

**Physical mailing address:**
CAN-SPAM §5(a)(5) requires a valid postal address in the email body. Not visible in truncated source — **verify footer.**

**Authentication headers (DMARC/DKIM/SPF):**
Not assessable from HTML alone. Verify via raw message headers:
- SPF: `service.wayfair.com` must be authorized in Wayfair's SPF record.
- DKIM: Signature should align with `d=wayfair.com` or `d=service.wayfair.com`.
- DMARC: Policy on `wayfair.com` should be at least `p=quarantine`.

**Subject line:**
`Your PROMO CODE is about to expire >>>` — All-caps `PROMO CODE` and `>>>` are known spam-filter triggers (SpamAssassin rules `SUBJ_ALL_CAPS`, character sequence heuristics). Not a compliance violation, but increases spam placement risk.

---

### 6. Email-to-Site Continuity

Cannot verify — no links present in truncated source. Required checks once full HTML is available:

- All CTAs should carry UTM parameters: `utm_source=email&utm_medium=email&utm_campaign=<campaign_id>&utm_content=<block_name>`.
- Promo code displayed in email must auto-apply or persist on the landing page (session or URL param).
- Expiry messaging in email must match the landing page — mismatched dates are a conversion and trust issue.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| High | Source truncated — audit incomplete | Provide full HTML for link, compliance, and UTM review |
| High | Gmail 102 KB clip risk from verbose CSS | Group media query rules; minify CSS before send |
| High | Unsubscribe block unverified | Confirm CAN-SPAM-compliant footer exists and opt-out link is live |
| Medium | `@font-face` lacks cross-client fallback stack | Add `font-family: Sofia, Arial, sans-serif` to all font declarations |
| Medium | Subject line spam triggers | Test `PROMO CODE` (all-caps) and `>>>` against SpamAssassin; consider `Your promo code expires soon` |
| Low | No tablet breakpoint | Add `@media (max-width: 600px)` ruleset for mid-size viewports |
| Low | Authentication headers | Confirm DKIM/SPF/DMARC alignment on `service.wayfair.com` subdomain |
## Recent history

- [[2026-05-07-just-in-patio-tables]] — 5/10 (2026-05-07)
- [[2026-05-06-bar-stools-up-to-60-off-starts-now]] — 5/10 (2026-05-06)
- [[2026-05-06-we-think-you-ll-love-these]] — 7/10 (2026-05-06)

