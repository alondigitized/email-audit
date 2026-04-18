---
slug: 2026-04-15-there-s-still-time-but-not-much
type: email
date: 2026-04-15
persona: walker
score: "5/10"
sender: DSW
subject: There’s still time, but not much…
tags: [email, score-5, sender/dsw]
---
# There’s still time, but not much…
**Score:** 5/10 · **Type:** Email audit · **2026-04-15**
## What's working

- **Immediate offer visibility.** "10% Off" is the first thing the eye lands on — no ambiguity about the email's purpose.
- **Product grid is dense and visually clean.** Eight product tiles with images, names, and prices give the recipient real browsing surface area.
- **Rewards module is well-placed.** "This Is the Part Where You Get Rewards" section near the bottom adds a loyalty retention layer without competing with the primary CTA.
- **Pre-header aligns with subject.** "Use your 10% off NOW" correctly reinforces the urgency message set in the subject line.

## What's weak

- **No hard deadline visible in the hero.** The subject line says "not much" time, but the hero section does not show an explicit expiration date or countdown. The urgency is asserted, not demonstrated.
- **CTA button ("SHOP NOW") is generic.** It doesn't carry the offer forward — "Shop & Save 10%" or "Redeem My 10% Off" would reduce click hesitation.
- **Product tiles are small and hard to evaluate.** Eight items crammed into a narrow two-column grid make each shoe difficult to assess. Fewer, larger images would drive more desire.
- **"A Few of Our Fave Things" headline is filler.** It adds no curation signal — recipient has no reason to believe these are selected for them specifically.
- **Lower third is cluttered.** The rewards module, social follow row, app download badges, and footer navigation stack up rapidly, diluting attention after the product section.
- **Discount amount is modest (10%).** DSW is competing against itself here — at a 10% offer, the urgency framing feels disproportionate to the actual value.

## Recommendations

- 1. **Add an explicit expiration date to the hero.** Replace "but not much" with "Expires tonight" or "Ends midnight Sunday" directly under the headline. This is the single highest-leverage fix.
- 2. **Upgrade the CTA copy.** "Redeem 10% Off" is more action-specific than "Shop Now" and reinforces that the discount is already theirs to claim.
- 3. **Cut the grid from 8 to 4 tiles, double the image size.** Fewer products, better merchandised, will outperform a dense grid for click-through.
- 4. **Personalize the curation headline.** Even "Picked for You" or "Based on Your Style" signals relevance without requiring dynamic content.
- 5. **Consolidate the lower third.** Rewards, app, and social should be one collapsed module — not three stacked sections competing for attention.
- | Priority | Issue | Fix |
- |---|---|---|
- | High | `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
- | High | `Src:` capitalization in all 4 `@font-face` blocks | Lowercase to `src:` |
- | High | `maximum-scale=1` blocks zoom | Remove or raise to `maximum-scale=5` |
- | Medium | `text-size-adjust: none` blocks resize | Change to `text-size-adjust: 100%` |
- | Low | Invalid `supported-color-schemes` CSS property | Remove — `color-scheme` is already correct |
- | Low | Non-standard `border` shorthand order | Reorder to `width style color` |
- | Blocked | Link tracking, compliance footer, personalization tokens | Resubmit with full untruncated HTML source |

## Full review
## 2. Business Impact Score

**5 / 10**

Functional but not differentiated. The offer is modest, the urgency is low-specificity, and the product grid is generic rather than personalized.

---

## 3. What's Working

- **Immediate offer visibility.** "10% Off" is the first thing the eye lands on — no ambiguity about the email's purpose.
- **Product grid is dense and visually clean.** Eight product tiles with images, names, and prices give the recipient real browsing surface area.
- **Rewards module is well-placed.** "This Is the Part Where You Get Rewards" section near the bottom adds a loyalty retention layer without competing with the primary CTA.
- **Pre-header aligns with subject.** "Use your 10% off NOW" correctly reinforces the urgency message set in the subject line.

---

## 4. What's Weak

- **No hard deadline visible in the hero.** The subject line says "not much" time, but the hero section does not show an explicit expiration date or countdown. The urgency is asserted, not demonstrated.
- **CTA button ("SHOP NOW") is generic.** It doesn't carry the offer forward — "Shop & Save 10%" or "Redeem My 10% Off" would reduce click hesitation.
- **Product tiles are small and hard to evaluate.** Eight items crammed into a narrow two-column grid make each shoe difficult to assess. Fewer, larger images would drive more desire.
- **"A Few of Our Fave Things" headline is filler.** It adds no curation signal — recipient has no reason to believe these are selected for them specifically.
- **Lower third is cluttered.** The rewards module, social follow row, app download badges, and footer navigation stack up rapidly, diluting attention after the product section.
- **Discount amount is modest (10%).** DSW is competing against itself here — at a 10% offer, the urgency framing feels disproportionate to the actual value.

---

## 5. Recommendations

1. **Add an explicit expiration date to the hero.** Replace "but not much" with "Expires tonight" or "Ends midnight Sunday" directly under the headline. This is the single highest-leverage fix.
2. **Upgrade the CTA copy.** "Redeem 10% Off" is more action-specific than "Shop Now" and reinforces that the discount is already theirs to claim.
3. **Cut the grid from 8 to 4 tiles, double the image size.** Fewer products, better merchandised, will outperform a dense grid for click-through.
4. **Personalize the curation headline.** Even "Picked for You" or "Based on Your Style" signals relevance without requiring dynamic content.
5. **Consolidate the lower third.** Rewards, app, and social should be one collapsed module — not three stacked sections competing for attention.

---

## 6. Bottom Line

This is a solid template execution with a weak offer and a missed urgency opportunity. The bones are right — offer first, products second, loyalty third — but none of the sections punch hard enough. The 10% discount won't excite anyone who isn't already primed to buy, and without a visible deadline, the urgency framing in the subject line feels hollow once the email is opened. Worth sending, but leaves conversion on the table.

---

## 7. Subject Line Analysis

- **Subject:** `There's still time, but not much…`
- **Length:** 34 characters
- **Scores (1-10):** Clarity `5`, Curiosity `6`, Personalization `2`, Urgency `5`, Specificity `3`
- **Strengths:**
  - Ellipsis creates mild open loop — reader wants to know what time is running out
  - Short enough to render fully on mobile without truncation
- **Weaknesses:**
  - Zero specificity — "time for what?" is unanswered until the email opens; many recipients won't make it that far
  - No personalization signal, brand name not present, could come from any retailer
- **Alt A:** `Your 10% off expires tonight — grab it before it's gone`
- **Alt B:** `Last chance: 10% off ends at midnight`

---

## 8. Evidence

**Overall purpose:** Urgency-triggered discount redemption email to drive short-window conversion on an existing 10% offer.

**Hero / primary value proposition:** White background hero with bold "10% Off" headline, a subhead indicating VIP/loyalty qualifier context, and a single "Shop Now" CTA button. No expiration date visible. High contrast, readable, but under-specified on the deal terms.

**Membership / benefits section:** "This Is the Part Where You Get Rewards" module appears below the product grid. Includes a rewards icon/badge and a brief description of the earn-and-redeem mechanic. The section is branded but small — it functions as a reminder rather than a driver of new loyalty enrollment.

**Product discoverability / recommendation modules:** Two-column grid of eight product tiles — sandals, heels, flats, and a handbag visible. Each tile shows a product image, name, and price. Layout is functional but small. No labels indicating sale status, "new arrival," or personalization. The handbag tile feels out-of-place in a shoe-dominant grid.

**Utility / secondary modules:** Social follow row (icons visible), app download prompt, and a "Shopping Made Easy" utility strip below the rewards section. These are standard footer modules and appropriately subordinate.

**Bugs / friction / clarity issues:** No visible broken images or missing fields. Pre-header text contains a long trailing string of whitespace characters (visible as repeating `‌` in the raw metadata) — this is a spacer hack that prevents inbox apps from pulling in footer text, but it renders invisibly and is not visible in the screenshot itself. No visual bugs present in the render.

---

## Technical Audit

## Technical Audit — DSW "There's still time, but not much…"

---

### 1. Technical Summary

Email is built on Braze, uses XHTML 1.0 Transitional / table-based layout with dark mode and mobile breakpoint support. The HTML source is truncated before CTAs, so link-level and compliance footer checks are incomplete and flagged accordingly.

---

### 2. Link & Tracking Issues

**Partially assessable — source truncated before CTA links.**

- Font assets are hosted on `braze-images.com` (a third-party CDN). If this domain goes down or changes, font loading silently fails — system fallbacks will engage with no visible breakage, but this is a dependency worth noting.
- No link markup visible in truncated source. Full audit requires untruncated HTML.

---

### 3. Rendering & Accessibility

**Confirmed issues:**

**a. `<meta>` tags missing `http-equiv` attribute (lines 1–2 of `<head>`):**
```html
<meta content="text/html; charset=utf-8" />
<meta content="IE=Edge" />
```
Both are missing the required `http-equiv` attribute. Correct forms:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```
Without `http-equiv`, these directives are ignored by Outlook and IE-based renderers.

**b. `Src:` (capital S) in all four `@font-face` blocks:**
```css
Src: url("https://braze-images.com/...") format('woff');
```
`src` is case-sensitive in CSS. `Src:` is invalid and will be discarded by standards-compliant parsers. Web font loading will silently fail in non-Outlook clients that do support `@font-face` (Apple Mail, Outlook iOS, Samsung Mail). Should be lowercase `src:`.

**c. `maximum-scale=1` in viewport meta — WCAG 1.4.4 violation:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Prevents user-initiated zoom on mobile. This fails WCAG 2.1 SC 1.4.4 (Resize Text, Level AA). Remove `maximum-scale=1` or set `maximum-scale=5`.

**d. `text-size-adjust: none` applied globally — WCAG 1.4.4 concern:**
```css
* { -ms-text-size-adjust: none; text-size-adjust: none }
```
`none` disables browser text-size scaling for all elements. `100%` achieves the same cross-client normalization goal without blocking user resize. Replace both values with `100%`.

**e. `supported-color-schemes` is not a valid CSS property:**
```css
:root {
  color-scheme: light dark;
  supported-color-schemes: light dark;  /* invalid */
}
```
`supported-color-schemes` does not exist as a CSS property. The correct property is `color-scheme` (already present). The invalid declaration is a no-op but is noise and may indicate a copy/paste error from the `<meta>` tag syntax.

**f. Non-standard `border` shorthand order:**
```css
border-top: 1px #000001 solid !important;
```
Standard order is `width style color`. While most clients accept reordered shorthand, this is non-conformant. Should be: `border-top: 1px solid #000001 !important`.

**Note:** `#000001` / `#00000F` near-black values and `Margin: 0` alongside `margin: 0 !important` are recognizable intentional hacks (dark mode color inversion prevention and Outlook margin override, respectively) — not flagged as bugs.

---

### 4. Personalization & Merge Tokens

**Cannot fully assess — source truncated.**

No unrendered Braze Liquid tags (`{{`, `{%`) are visible in the accessible portion of the source. Full check requires untruncated HTML including dynamic content blocks.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot fully assess — source truncated before footer.**

- Physical mailing address and unsubscribe link presence cannot be confirmed from the provided source. CAN-SPAM requires both in every commercial message.
- Sending domain `e.dsw.com` follows standard ESP subdomain practice; SPF/DKIM/DMARC status requires inspection of email headers (not derivable from HTML source).
- `<title>DSW</title>` — minimally descriptive. Some clients expose `<title>` as the sender label in accessibility contexts; consider a more descriptive value such as the subject line.

---

### 6. Email-to-Site Continuity

**Cannot assess — no CTA links in truncated source.**

Full audit requires untruncated HTML to verify:
- UTM parameters on all outbound links (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`)
- Redirect chain integrity (ESP click-tracking wrap → destination URL)
- Landing page/offer alignment with subject line urgency framing

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| High | `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
| High | `Src:` capitalization in all 4 `@font-face` blocks | Lowercase to `src:` |
| High | `maximum-scale=1` blocks zoom | Remove or raise to `maximum-scale=5` |
| Medium | `text-size-adjust: none` blocks resize | Change to `text-size-adjust: 100%` |
| Low | Invalid `supported-color-schemes` CSS property | Remove — `color-scheme` is already correct |
| Low | Non-standard `border` shorthand order | Reorder to `width style color` |
| Blocked | Link tracking, compliance footer, personalization tokens | Resubmit with full untruncated HTML source |
## Recent history

- [[2026-04-15-double-up-on-sandals-w-bogo-free]] — 6/10 (2026-04-15)
- [[2026-04-15-did-you-forget-something]] — 6/10 (2026-04-15)
- [[2026-04-15-your-items-are-waiting]] — 6/10 (2026-04-15)

