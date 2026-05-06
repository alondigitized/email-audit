---
slug: 2026-05-06-our-bestselling-outdoor-collections-just-went-on-sale
type: email
date: 2026-05-06
persona: linnea-crate-cb-fap6e
score: "5/10"
sender: Crate & Barrel SALE
subject: Our bestselling outdoor collections JUST went on sale →
tags: [email, score-5, sender/crate-barrel-sale]
---
# Our bestselling outdoor collections JUST went on sale →
**Score:** 5/10 · **Type:** Email audit · **2026-05-06**
## Executive summary

- Crate & Barrel is pushing an outdoor furniture sale — their "bestselling outdoor collections" are marked down. The email is clean, editorial, and brand-consistent, with multiple product shots and sectioned collections. However, it suffers from small, low-contrast image renders at mobile scale, no stated discount percentage upfront, and CTAs that are visually undersized. It reads like a brand catalog announcement rather than a conversion-focused sale email.

## What's working

- **Seasonal timing is perfect.** Outdoor furniture in early May is exactly when purchase intent peaks — the email is riding the right moment.
- **Brand identity is intact.** Clean white backgrounds, editorial photography, and the Crate & Barrel typographic style are consistent. No visual noise.
- **Multiple collection modules** serve different aesthetics (wicker/natural, modern, colorful/bohemian), broadening appeal across buyer types.
- **No render bugs.** Every image loads, text is legible, and the layout stacks coherently at the narrow mobile render width.

## What's weak

- **No discount figure in the hero.** The subject says "JUST went on sale" but the email hero doesn't display a specific percentage off (e.g., "Up to 30% off"). That's the single most motivating piece of information withheld from above-the-fold.
- **CTA buttons are tiny and low-contrast** at this render size — "Shop Now" labels are barely distinguishable. On mobile, tap targets feel undersized.
- **Too many collections, too little hierarchy.** Four-plus collection blocks stack without a clear visual anchor. The eye has nowhere to land with confidence.
- **No urgency mechanism.** No countdown, no end-date, no "limited inventory" signal. "JUST went on sale" in the subject doesn't carry into the body copy in any credible way.
- **Social proof is absent.** No star ratings, no "bestseller" badges, no customer counts — even though the subject line literally uses the word "bestselling."
- **Product names/prices are not readable** at this render scale — the individual item copy is too small to extract value from.

## Recommendations

- 1. **Add a % discount to the hero immediately.** Even "Up to 30% off" or "Save up to $400" above the first CTA doubles the reason to click. Don't make the reader hunt for what "sale" means.
- 2. **Introduce a deadline.** "Sale ends May 11" or a visible countdown widget converts browsers to buyers. Right now there's zero urgency after the open.
- 3. **Pick one hero product.** Surface the single best-performing SKU (or the highest-margin one) at the top with a full-width image, price, and sale price. Then let the collection grid follow below.
- 4. **Make CTAs physically larger.** Button height and label font size need to be visually prominent even at 375px width. Consider a full-width button for the primary CTA.
- 5. **Surface the "bestselling" claim in the body.** If the subject says bestselling, the email should show proof — a "Most Loved" badge, customer count, or rating. The subject set an expectation the body doesn't fulfill.
- 6. **Add a member pricing callout** if C&B has a loyalty program — that's a high-conversion signal that's entirely absent.
- | Priority | Issue | Action |
- |---|---|---|
- | High | `maximum-scale=1` blocks zoom | Remove from viewport meta |
- | High | Conflicting desktop `img` max-width rules | Move `@media (min-width: 768px)` rule after `(min-width: 640px)` or merge to single rule at 600px |
- | Medium | Universal `line-height: 100%` on `*` | Scope to specific selectors; remove from `*` |
- | Medium | Developer placeholder comment in `<head>` | Remove `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` and `<!--V2-->` before send |
- | Low | Duplicate `format-detection` meta tags | Consolidate to single tag with all values |
- | Verify | Unsubscribe link, physical address, UTM params | Requires full HTML source |

## Full review
---

## 1. Executive Summary

Crate & Barrel is pushing an outdoor furniture sale — their "bestselling outdoor collections" are marked down. The email is clean, editorial, and brand-consistent, with multiple product shots and sectioned collections. However, it suffers from small, low-contrast image renders at mobile scale, no stated discount percentage upfront, and CTAs that are visually undersized. It reads like a brand catalog announcement rather than a conversion-focused sale email.

---

## 2. Business Impact Score

**5/10**

Signals TRUE:
- Sender is a recognized, subscribed brand (Crate & Barrel)
- A concrete offer is present (sale on outdoor collections, even if % is not stated in hero)
- Primary CTA is visible (multiple "Shop Now" buttons)
- No render bugs — layout holds, images load, no lorem ipsum
- Email reflects current season (outdoor furniture = spring/summer, timely)

Signals NOT met: No explicit %/$ discount in the hero; demographic signals are neutral/lifestyle, not persona-matched; no loyalty/member pricing visible; the visual hierarchy is diluted by stacking four-plus collections before the eye finds the value prop.

---

## 3. What's Working

- **Seasonal timing is perfect.** Outdoor furniture in early May is exactly when purchase intent peaks — the email is riding the right moment.
- **Brand identity is intact.** Clean white backgrounds, editorial photography, and the Crate & Barrel typographic style are consistent. No visual noise.
- **Multiple collection modules** serve different aesthetics (wicker/natural, modern, colorful/bohemian), broadening appeal across buyer types.
- **No render bugs.** Every image loads, text is legible, and the layout stacks coherently at the narrow mobile render width.

---

## 4. What's Weak

- **No discount figure in the hero.** The subject says "JUST went on sale" but the email hero doesn't display a specific percentage off (e.g., "Up to 30% off"). That's the single most motivating piece of information withheld from above-the-fold.
- **CTA buttons are tiny and low-contrast** at this render size — "Shop Now" labels are barely distinguishable. On mobile, tap targets feel undersized.
- **Too many collections, too little hierarchy.** Four-plus collection blocks stack without a clear visual anchor. The eye has nowhere to land with confidence.
- **No urgency mechanism.** No countdown, no end-date, no "limited inventory" signal. "JUST went on sale" in the subject doesn't carry into the body copy in any credible way.
- **Social proof is absent.** No star ratings, no "bestseller" badges, no customer counts — even though the subject line literally uses the word "bestselling."
- **Product names/prices are not readable** at this render scale — the individual item copy is too small to extract value from.

---

## 5. Recommendations

1. **Add a % discount to the hero immediately.** Even "Up to 30% off" or "Save up to $400" above the first CTA doubles the reason to click. Don't make the reader hunt for what "sale" means.
2. **Introduce a deadline.** "Sale ends May 11" or a visible countdown widget converts browsers to buyers. Right now there's zero urgency after the open.
3. **Pick one hero product.** Surface the single best-performing SKU (or the highest-margin one) at the top with a full-width image, price, and sale price. Then let the collection grid follow below.
4. **Make CTAs physically larger.** Button height and label font size need to be visually prominent even at 375px width. Consider a full-width button for the primary CTA.
5. **Surface the "bestselling" claim in the body.** If the subject says bestselling, the email should show proof — a "Most Loved" badge, customer count, or rating. The subject set an expectation the body doesn't fulfill.
6. **Add a member pricing callout** if C&B has a loyalty program — that's a high-conversion signal that's entirely absent.

---

## 6. Bottom Line

A competent, visually clean sale announcement that squanders its seasonal timing by withholding the most important detail — the actual discount — from above the fold. It will drive some browsing traffic from existing C&B customers but is unlikely to push a fence-sitter to convert. A single hero with a stated discount and a deadline would materially improve click-through.

---

## 7. Subject Line Analysis

- **Subject:** `Our bestselling outdoor collections JUST went on sale →`
- **Length:** 52 chars
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `2`, Urgency `5`, Specificity `4`
- **Strengths:**
  - "bestselling" + "JUST went on sale" creates a moment-in-time hook that implies freshness
  - The arrow `→` is a mild but effective visual pull toward action
- **Weaknesses:**
  - No discount figure — "on sale" is vague and doesn't differentiate from any other promotional email
  - "Bestselling" is asserted but not proved; feels like a marketing claim rather than earned social proof
- **Alt A:** `Up to 30% off our most-loved outdoor furniture — just started`
- **Alt B:** `Your patio upgrade just got cheaper: outdoor sale is live`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — at this render scale the preview text is not visible in the body; no intentional preheader copy is apparent above the fold
- **Length:** N/A
- **Scores (1-10):** Complements subject `2`, Specificity `2`, Clarity `2`, Inbox-fit `2`
- **Strengths:**
  - N/A — no functional preheader is visible to evaluate
- **Weaknesses:**
  - A missing or junk preheader is a wasted second impression in the inbox; the subject does all the heavy lifting alone
  - No preview copy means the inbox line reads as just the subject, with no additional information to nudge the open
- **Alt A:** `Shop teak, wicker & modern outdoor sets — up to 30% off this week only`
- **Alt B:** `The furniture that sold out last summer — now on sale. Grab it first.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** 5/10
- **Signals counted:** sender recognizable, subject is concrete (sale is named), no spam signals, current season relevance, subject under ~55 chars (borderline)
- **Rationale:** The sender and subject are enough to earn a curious open from an existing C&B customer. However, no personalization, no stated discount, and no credible urgency mean a large portion of recipients won't feel the pull. It's an "I'll get to it later" email.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** 4/10
- **Signals counted:** hero offer visible without scrolling, no friction/broken images, brand voice consistent, CTA present
- **Rationale:** The email looks good but doesn't close the deal. No discount figure, no deadline, no specific product hero, and no social proof mean the body fails to add urgency that the subject implied. Clicks will come from already-motivated shoppers; it won't convert the undecided.

---

## 11. Evidence

- **Overall purpose:** Announce the start of a seasonal outdoor furniture sale across multiple Crate & Barrel collections.
- **Hero / primary value proposition:** Outdoor collections are "on sale" — communicated via headline text over a lifestyle image of a shaded patio setting. Discount amount is not stated.
- **Membership / benefits section:** None visible. No loyalty program, member pricing, or early-access framing.
- **Product discoverability / recommendation modules:** Four or more collection blocks visible (natural/wicker aesthetic, modern white/neutral, colorful/patterned, and a smaller mixed grid at the bottom). Each block has a "Shop Now" CTA. Products are photographed in lifestyle settings, not on white backgrounds.
- **Utility / secondary modules:** A small product-grid row appears near the bottom with individual item thumbnails — likely individual SKUs. Footer with standard unsubscribe/preference links appears at the base.
- **Bugs / friction / clarity issues:** None visible at render scale. All images load. Text is legible. No overlapping elements or broken layout. Individual product price/name copy is too small to read at mobile render width — not a bug but a usability limitation.

---

## Technical Audit

## Technical Audit — Crate & Barrel Outdoor Sale Email

### 1. Technical Summary
Standard XHTML 1.0 Transitional table-based email with VML Outlook support and responsive breakpoints at 460px/640px/768px. Several infrastructure artifacts were left in the production send, and conflicting CSS rules create rendering edge cases.

---

### 2. Link & Tracking Issues
**Cannot fully assess** — the HTML source is truncated before link elements appear. A full-source audit is required to verify:
- UTM parameter consistency across all hrefs
- Click-tracking wrapper integrity (broken redirects return 404/500 at open time)
- Unsubscribe link presence and placement

---

### 3. Rendering & Accessibility

**`maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Blocks user-initiated zoom. Violates WCAG 1.4.4 (Resize Text, AA). Remove `maximum-scale=1`.

**Overly broad `*` selector**
```css
* { -webkit-text-size-adjust:none; -ms-text-size-adjust:none; max-height:1000000px; mso-line-height-rule:exactly; line-height: 100% }
```
Applying `-webkit-text-size-adjust:none` globally suppresses iOS auto-scaling for all elements, not just the intended ones. The `line-height: 100%` universal rule overrides component-level line-height values and can collapse multi-line text blocks in some clients.

**Conflicting `img` max-width at desktop breakpoints**
```css
@media only screen and (min-width: 768px) { img { max-width: 600px } }
@media only screen and (min-width: 640px) { img { max-width: 640px } }
```
At viewports ≥ 768px, both rules match. The 640px rule appears second in the stylesheet and wins via cascade, setting `max-width: 640px` — wider than the expected 600px container. Images will overflow the email wrapper on wide-viewport desktop clients that respect media queries (Apple Mail, Gmail web). Reorder or consolidate: the 768px rule should come after the 640px rule.

**Duplicate `format-detection` meta tags**
Three separate `format-detection` declarations appear in `<head>`, with `telephone=no` and `address=no` each specified twice (once combined, once individually). This is harmless but indicates a templating hygiene issue.

---

### 4. Personalization & Merge Tokens
**Cannot assess** — no merge token syntax is visible in the truncated source. Full source needed to verify unrendered tokens (e.g., `{{first_name}}`, `%%first_name%%`, `[FIRSTNAME]`).

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Unsubscribe** — not visible in truncated source; cannot confirm presence or placement above the fold.

**Authentication headers** — not assessable from HTML source alone. Sending domain is `mail.crateandbarrel.com`; SPF/DKIM/DMARC alignment should be verified via mail headers of a received copy.

**Physical address** — required by CAN-SPAM § 7704(a)(5); not visible in truncated source.

---

### 6. Email-to-Site Continuity
**Cannot assess** — no `href` values are present in the truncated source. Full audit should confirm:
- All CTAs include `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`
- Landing pages are live and match promoted SKUs/sale pricing
- Redirects resolve in ≤ 2 hops

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | `maximum-scale=1` blocks zoom | Remove from viewport meta |
| High | Conflicting desktop `img` max-width rules | Move `@media (min-width: 768px)` rule after `(min-width: 640px)` or merge to single rule at 600px |
| Medium | Universal `line-height: 100%` on `*` | Scope to specific selectors; remove from `*` |
| Medium | Developer placeholder comment in `<head>` | Remove `<!--[IMPUT HERE CLIENT FONT IMPORT SCRIPT if needed]-->` and `<!--V2-->` before send |
| Low | Duplicate `format-detection` meta tags | Consolidate to single tag with all values |
| Verify | Unsubscribe link, physical address, UTM params | Requires full HTML source |
## Recent history

- [[2026-05-05-nothing-beats-the-original-shop-jenny-lind]] — 7/10 (2026-05-05)
- [[2026-05-05-instant-inspo-stripe-drenching]] — 7/10 (2026-05-05)
- [[2026-05-05-we-turned-our-bestselling-wine-glass-into-a-whole-collection]] — 5/10 (2026-05-05)

