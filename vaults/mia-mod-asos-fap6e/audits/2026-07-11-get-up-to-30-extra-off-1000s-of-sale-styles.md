---
slug: 2026-07-11-get-up-to-30-extra-off-1000s-of-sale-styles
type: email
date: 2026-07-11
persona: mia-mod-asos-fap6e
score: "9/10"
sender: ASOS
subject: , get up to 30% extra off 1000s of Sale styles
tags: [email, score-9, sender/asos]
---
# , get up to 30% extra off 1000s of Sale styles
**Score:** 9/10 · **Type:** Email audit · **2026-07-11**
## Executive summary

- ASOS is running the same offer it sent on July 4 — "up to 30% extra off Sale" — with nearly identical mechanics, the same discount structure stacked on top of existing sale pricing, and a new promo code (BONUS replacing whatever ran before). The body executes cleanly: a bold, immediately readable hero headline, a visible code, "Ends Monday" urgency, and a clean dual-gender CTA split. The product grid is well-photographed and the "SALE: SELLING FAST" urgency section does real work. This is competent ASOS execution.
- The critical failure is the subject line. It renders as `, get up to 30% extra off 1000s of Sale styles` — a hanging comma-space where a first name was supposed to go. That's a merge tag firing on an empty field, visible to every subscriber who glances at their inbox. It doesn't tank deliverability, but it signals a QA breakdown and erodes the brand trust ASOS spent weeks building with the July 8 Premier-exclusive send.
- Underneath the production bug, the deeper problem is cadence. Subscribers who opened the July 4 version of this same offer have now seen the 30% extra mechanic twice in a week. Combine that with the broken merge tag and the July 6 "further reductions" send that recycled identical sale claims — and this lands as noise, not news.

## What's working

- Hero headline is immediate: "UP TO 30% EXTRA OFF 1000s OF SALE STYLES" reads in under a second with no ambiguity about the offer.
- Code BONUS is prominently placed and easy to copy — no digging required.
- "Ends Monday" in the hero sub-copy is a credible, specific deadline; it creates real urgency rather than the vague "limited time" language ASOS leaned on in the June 29 and July 6 sends.
- Dual-CTA (SHOP WOMEN'S / SHOP MEN'S) respects the audience split without burying either button.
- Product photography is clean and diverse; the editorial grid gives a genuine sense of inventory depth.

## What's weak

- Broken merge tag in subject: `, get up to 30% extra off...` — a comma staring at the subscriber before the offer is ASOS broadcasting a CRM QA failure at scale.
- This is functionally the same offer as July 4 — subscribers who engaged with that send will register this as a repeat, not an escalation.
- "SHOP NOW" in the "SALE: SELLING FAST" urgency section is the weakest CTA in the email — no specificity, gender split gone, just a red button.
- Brand logos section at the bottom dilutes focus; scrollers arriving there have already left purchase intent context behind.
- No Premier or loyalty angle — the July 8 gated member send showed ASOS knows how to tier its audience; this send treats everyone identically, wasting segmentation opportunity.

## Recommendations

- 1. **Fix the merge tag — immediately.** Either suppress the name token gracefully when null (render nothing, not a comma) or audit the template pre-send. This is a QA failure that should never reach production.
- 2. **Move the deadline into the subject.** "Ends Monday" is doing real work in the hero but is invisible in the inbox. A deadline in the subject line would move Open Likelihood meaningfully.
- 3. **Change the creative angle, not just the code.** If the offer must run again, frame it as a close-out ("last chance" / "selling fast") so it reads as a finale, not a repeat. The July 6 send suffered from identical framing — this one repeats the mistake.
- 4. **Replace "SHOP NOW" in the urgency section** with gender-specific CTAs consistent with the hero split.
- 5. **Remove the brand logos section** or push it to a dedicated discovery email — it's a navigation tool, not a conversion driver in a sale send.
- **Subject Alt A:** `Extra 30% off Sale ends Monday — code BONUS`
- **Subject Alt B:** `Last chance: 30% extra off 1000s of sale styles`
- **Preheader Alt A:** `Already up to 70% off — stack BONUS before midnight Monday`
- **Preheader Alt B:** `Double discounts on 1000s of styles. Code BONUS, Monday only.`

## Full review
## 1. Overview

ASOS is running the same offer it sent on July 4 — "up to 30% extra off Sale" — with nearly identical mechanics, the same discount structure stacked on top of existing sale pricing, and a new promo code (BONUS replacing whatever ran before). The body executes cleanly: a bold, immediately readable hero headline, a visible code, "Ends Monday" urgency, and a clean dual-gender CTA split. The product grid is well-photographed and the "SALE: SELLING FAST" urgency section does real work. This is competent ASOS execution.

The critical failure is the subject line. It renders as `, get up to 30% extra off 1000s of Sale styles` — a hanging comma-space where a first name was supposed to go. That's a merge tag firing on an empty field, visible to every subscriber who glances at their inbox. It doesn't tank deliverability, but it signals a QA breakdown and erodes the brand trust ASOS spent weeks building with the July 8 Premier-exclusive send.

Underneath the production bug, the deeper problem is cadence. Subscribers who opened the July 4 version of this same offer have now seen the 30% extra mechanic twice in a week. Combine that with the broken merge tag and the July 6 "further reductions" send that recycled identical sale claims — and this lands as noise, not news.

---

## 2. What worked

- Hero headline is immediate: "UP TO 30% EXTRA OFF 1000s OF SALE STYLES" reads in under a second with no ambiguity about the offer.
- Code BONUS is prominently placed and easy to copy — no digging required.
- "Ends Monday" in the hero sub-copy is a credible, specific deadline; it creates real urgency rather than the vague "limited time" language ASOS leaned on in the June 29 and July 6 sends.
- Dual-CTA (SHOP WOMEN'S / SHOP MEN'S) respects the audience split without burying either button.
- Product photography is clean and diverse; the editorial grid gives a genuine sense of inventory depth.

---

## 3. What didn't

- Broken merge tag in subject: `, get up to 30% extra off...` — a comma staring at the subscriber before the offer is ASOS broadcasting a CRM QA failure at scale.
- This is functionally the same offer as July 4 — subscribers who engaged with that send will register this as a repeat, not an escalation.
- "SHOP NOW" in the "SALE: SELLING FAST" urgency section is the weakest CTA in the email — no specificity, gender split gone, just a red button.
- Brand logos section at the bottom dilutes focus; scrollers arriving there have already left purchase intent context behind.
- No Premier or loyalty angle — the July 8 gated member send showed ASOS knows how to tier its audience; this send treats everyone identically, wasting segmentation opportunity.

---

## 4. What I'd change

1. **Fix the merge tag — immediately.** Either suppress the name token gracefully when null (render nothing, not a comma) or audit the template pre-send. This is a QA failure that should never reach production.
2. **Move the deadline into the subject.** "Ends Monday" is doing real work in the hero but is invisible in the inbox. A deadline in the subject line would move Open Likelihood meaningfully.
3. **Change the creative angle, not just the code.** If the offer must run again, frame it as a close-out ("last chance" / "selling fast") so it reads as a finale, not a repeat. The July 6 send suffered from identical framing — this one repeats the mistake.
4. **Replace "SHOP NOW" in the urgency section** with gender-specific CTAs consistent with the hero split.
5. **Remove the brand logos section** or push it to a dedicated discovery email — it's a navigation tool, not a conversion driver in a sale send.

- **Subject Alt A:** `Extra 30% off Sale ends Monday — code BONUS`
- **Subject Alt B:** `Last chance: 30% extra off 1000s of sale styles`
- **Preheader Alt A:** `Already up to 70% off — stack BONUS before midnight Monday`
- **Preheader Alt B:** `Double discounts on 1000s of styles. Code BONUS, Monday only.`

---

## 5. Business Impact Score (1-10)

**9/10**

TRUE criteria:
- Hero copy explicitly references focus area (sale fashion shopping)
- Sender (ASOS) is recognized and subscribed
- Concrete offer visible: 30% extra, code BONUS
- Primary CTA unambiguous: SHOP WOMEN'S / SHOP MEN'S
- Visual hierarchy clear — hero leads the eye directly to the offer
- No render bugs in the email body (images load, layout is intact)
- Demographic signals match: women's fashion models for a female fashion persona
- Current season campaign: July summer sale is contextually appropriate

FALSE:
- Loyalty/member benefits not visible (no Premier tier shown)
- Honest offer: extensive fine print visible at bottom with "up to" language that typically limits real-world savings

---

## 6. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** Sender display name recognizable (ASOS), subject is concrete (specific % and category), subject is relevant to persona's focus area, subject is under ~50 chars (48 as rendered), no spam signals (no ALL CAPS in subject, no exclamation stacking).
- **Rationale:** The broken merge tag is the dominant drag — seeing `, get up to 30%...` in the inbox is jarring and signals low production quality. Cadence compounds it: a subscriber who opened the July 4 "30% extra off" send will pattern-match this as a repeat and skip.

---

## 7. Click-Through Likelihood (persona-grounded)

- **Score:** `8/10`
- **Signals counted:** Hero offer visible without scrolling on mobile, primary CTA (SHOP WOMEN'S) in the right category, CTA copy is a specific verb + noun, offer reduces price (30% extra on top of 70% off), time-bounded deadline visible ("Ends Monday"), brand voice consistent with trusted ASOS aesthetic, no friction in the body render.
- **Rationale:** If a subscriber gets past the inbox (despite the broken subject) and opens, the body converts well — the double-discount framing is genuinely compelling and the code is right there. The miss is that nothing links to a specific product or surface any detail (sizing, fit, availability) that would create deeper purchase intent.

---

## 8. Subject

- **Subject:** `, get up to 30% extra off 1000s of Sale styles`
- **Length:** 48 chars (as rendered with broken merge prefix)
- **Scores (1-10):** Clarity `5`, Curiosity `3`, Personalization `1`, Urgency `4`, Specificity `7`

---

## 9. Preview

- **Preview:** `(none / leaking junk — not visible from body render; likely defaults to first body text: "And there's already up to 70% off. That means double discounts on your summer wishlist.")`
- **Length:** ~85 chars (estimated from hero sub-copy)
- **Scores (1-10):** Complements subject `6`, Specificity `6`, Clarity `7`, Inbox-fit `5`

The inferred preheader ("And there's already up to 70% off...") actually does real work if set correctly — it extends the offer story rather than repeating the subject headline. But without a verified explicit preheader tag, it's at risk of defaulting to nav copy or the "view in browser" link, which would score 1 on Inbox-fit.

---

## Technical Audit

## Technical Audit — ASOS "Up to 30% Extra Off Sale" Email

---

### 1. Technical Summary

A critical merge token failure produced a malformed subject line sent to all recipients. The HTML also contains structurally invalid meta tag placement that may cause unpredictable behavior in strict parsers.

---

### 2. Link & Tracking Issues

**Cannot assess** — HTML source is truncated before any `<a href>` elements appear. UTM parameters, click-tracking wrappers, and redirect chain cannot be evaluated from the provided excerpt.

---

### 3. Rendering & Accessibility

**Invalid meta tag placement (severity: medium)**
`<meta>` elements (Content-Type, charset, viewport, format-detection, x-apple-disable-message-reformatting) are placed inside a `<p>` tag within `<body>`, not inside `<head>`. Spec-compliant parsers may silently relocate or discard these, potentially breaking viewport scaling on iOS and disabling Apple data detector suppression.

```html
<body>
  <div …preheader…></div>
  <p>
    <meta http-equiv="Content-Type" …>   ← invalid
    <meta charset="utf-8">               ← invalid
    …
```

**Empty preheader (severity: low)**
The preheader `<div>` is present but contains no text content. Inbox clients will pull the first visible body text as preheader copy instead, which is uncontrolled.

**Media query breakpoint at 460px (severity: low)**
`@media screen and (max-width:460px)` is below the de-facto email standard of 600px. Devices with viewports between 461–599px (many Android tablets, some landscape phones) will receive desktop layout with no mobile overrides.

**SVG font format included (severity: info)**
`FuturaPT-Book.svg` and `FuturaPT-Heavy.svg` are declared in `@font-face`. SVG fonts have zero email client support and add unnecessary payload. Remove both `url(…svg) format("svg")` lines.

---

### 4. Personalization & Merge Tokens

**CRITICAL — Unresolved first name token in subject line**

```
Subject: , get up to 30% extra off 1000s of Sale styles
```

The leading comma confirms a first-name token (e.g., `[FIRST_NAME]`, `{{first_name}}`, or `%FIRSTNAME%`) evaluated to an empty string rather than falling back to a default. Every recipient received the broken subject. The `<title>` tag contains the identical broken string:

```html
<title>, get up to 30% extra off 1000s of Sale styles</title>
```

This indicates the title is generated from the same template variable with no null/empty guard.

**Root cause candidates:**
- No fallback value configured in the ESP (e.g., `{{first_name | default: ""}}` used instead of `{{first_name | default: "there"}}`)
- Segment included contacts with NULL or empty `first_name` fields that were not suppressed pre-send

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot assess unsubscribe or physical address** — source is truncated before footer content.

**Authentication headers** — not visible in the provided excerpt; would require raw message headers (DKIM, SPF, DMARC) to evaluate. Sender domain is `official.asos.com` (subdomain), which is a common legitimate ESP pattern but should be confirmed aligned with DMARC policy on `asos.com`.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

**Cannot assess** — no `<a href>` elements visible in the truncated source. A full-source review is needed to confirm UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) are present on all CTA links and that campaign values match the send's intended attribution.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | Add a non-empty fallback to all first-name tokens before re-send or future sends (e.g., `{{first_name \| default: "there"}}`). Audit the segment for null `first_name` values. |
| P1 | Move all `<meta>` tags into `<head>`. This is likely a templating system output error — the head block is probably being injected after `<body>` opens. |
| P2 | Add preheader text between the preheader `<div>` tags to control inbox preview copy. |
| P3 | Widen mobile breakpoint to 600px or add a second breakpoint at 600px to cover tablet-width viewports. |
| Low | Remove SVG font format declarations from both `@font-face` blocks. |
| Blocked | Complete link/UTM and compliance review requires full HTML source including footer and all `<a>` elements. |
## Recent history

- [[2026-07-09-must-have-summer-dresses]] — 7/10 (2026-07-09)
- [[2026-07-08-want-an-extra-20-off-all-sale]] — 10/10 (2026-07-08)
- [[2026-07-08-new-arrivals]] — 8/10 (2026-07-08)

