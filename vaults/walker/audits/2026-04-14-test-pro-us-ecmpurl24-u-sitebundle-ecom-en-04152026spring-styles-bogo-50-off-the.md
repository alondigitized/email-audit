---
slug: 2026-04-14-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04152026spring-styles-bogo-50-off-the
type: email
date: 2026-04-14
persona: walker
score: "3/10"
sender: SKECHERS
subject: "[Test]: PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04152026Spring Styles + BOGO 50% Off = The Perfect Pair"
tags: [email, score-3, sender/skechers]
---
# [Test]: PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04152026Spring Styles + BOGO 50% Off = The Perfect Pair
**Score:** 3/10 · **Type:** Email audit · **2026-04-14**
## Executive summary

- This email has two critical pre-open failures that would tank performance before anyone sees the creative. The subject line contains an unstripped internal campaign code, and the preview text renders raw JSON-LD schema markup to every recipient's inbox. The rendered email itself is competent but unremarkable — clean gender segmentation (Women's / Men's / Kids), a clear BOGO hero, and functional product modules — but none of that matters when the envelope is broken.
- The subject and preview text alone justify a low score. A functional email with broken pre-open signals will underperform significantly regardless of content quality.

## What's working

- **Hero clarity.** "Buy One Get One 50% Off" reads instantly on the banner. No ambiguity about the offer.
- **Gender/age segmentation.** Women's, Men's, and Kids sections are visually distinct with their own CTAs, making it easy to self-select.
- **Secondary CTA variety.** The "Shop New Spring Styles" category strip (Women, Men, Kids, Go Golf, New Arrivals, Sale) gives recipients multiple entry points.
- **Utility modules present.** App download, curbside pickup, and payment method callouts (PayPal, Klarna) are all visible and add friction-reducing trust signals.

## What's weak

- **Subject line is broken in production.** The internal campaign code `PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04152026` is fully visible to recipients before the marketing copy.
- **Preview text is raw JSON-LD.** The inbox preview renders `[{ "@context": "http://schema.org/", "@type": "Organization", "logo":...` — schema markup that should never be recipient-visible.
- **Hero image is small and low-impact.** The sandal lifestyle shot is visually thin for a spring campaign. It doesn't generate want.
- **Product modules lack pricing urgency.** The Women's and Men's product rows show prices and star ratings but no "was/now" pricing or BOGO callout at the product level — the deal feels disconnected from the products.
- **Email is long without clear hierarchy.** Five distinct content zones plus footer utilities create scroll fatigue with no visual escalation of urgency.

## Recommendations

- 1. **Stop this send and strip the campaign code from the subject line immediately.** `[Test]:` and the full campaign token are live-visible to recipients.
- 2. **Fix the preview text before any future send.** Replace schema markup with a short, punchy teaser line tied to the BOGO offer.
- 3. **Reinforce the BOGO offer at the product level.** Add "BOGO 50% Off applies" or a badge directly on at least one product row so the offer feels actionable, not just banner-level.
- 4. **Trim the email by one module.** The four-image product grid in the middle and the category strip below it largely duplicate each other — consolidate.
- 5. **Upgrade the hero.** A lifestyle shot of someone wearing spring shoes outdoors would do more than a flat product shot cropped at the ankle.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Campaign ID + `[Test]:` in subject | Strip both before live send |
- | **P0** | All `image.emails.skechers.com` assets on HTTP | Change all `src` to `https://image.emails.skechers.com/...` |
- | **P1** | Return Path pixel missing protocol | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif?...` |
- | **P1** | ink1000 tracking pixel on HTTP | Confirm `ink1000.com` supports HTTPS; update src |
- | **P1** | SPF/DKIM not verified | Capture raw headers from a seeded inbox send; confirm both pass |
- | **P1** | CAN-SPAM footer — not confirmed | Verify full HTML includes unsubscribe link + physical address |
- | **P2** | `49468f73...png` missing alt text | Add descriptive `alt` attribute |
- | **P3** | Duplicate CSS media query blocks | Consolidate into a single block to reduce `<head>` bloat |

## Full review
## Email Review: Skechers Spring BOGO

---

### 1. Executive Summary

This email has two critical pre-open failures that would tank performance before anyone sees the creative. The subject line contains an unstripped internal campaign code, and the preview text renders raw JSON-LD schema markup to every recipient's inbox. The rendered email itself is competent but unremarkable — clean gender segmentation (Women's / Men's / Kids), a clear BOGO hero, and functional product modules — but none of that matters when the envelope is broken.

---

### 2. Business Impact Score: **3/10**

The subject and preview text alone justify a low score. A functional email with broken pre-open signals will underperform significantly regardless of content quality.

---

### 3. What's Working

- **Hero clarity.** "Buy One Get One 50% Off" reads instantly on the banner. No ambiguity about the offer.
- **Gender/age segmentation.** Women's, Men's, and Kids sections are visually distinct with their own CTAs, making it easy to self-select.
- **Secondary CTA variety.** The "Shop New Spring Styles" category strip (Women, Men, Kids, Go Golf, New Arrivals, Sale) gives recipients multiple entry points.
- **Utility modules present.** App download, curbside pickup, and payment method callouts (PayPal, Klarna) are all visible and add friction-reducing trust signals.

---

### 4. What's Weak

- **Subject line is broken in production.** The internal campaign code `PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04152026` is fully visible to recipients before the marketing copy.
- **Preview text is raw JSON-LD.** The inbox preview renders `[{ "@context": "http://schema.org/", "@type": "Organization", "logo":...` — schema markup that should never be recipient-visible.
- **Hero image is small and low-impact.** The sandal lifestyle shot is visually thin for a spring campaign. It doesn't generate want.
- **Product modules lack pricing urgency.** The Women's and Men's product rows show prices and star ratings but no "was/now" pricing or BOGO callout at the product level — the deal feels disconnected from the products.
- **Email is long without clear hierarchy.** Five distinct content zones plus footer utilities create scroll fatigue with no visual escalation of urgency.

---

### 5. Recommendations

1. **Stop this send and strip the campaign code from the subject line immediately.** `[Test]:` and the full campaign token are live-visible to recipients.
2. **Fix the preview text before any future send.** Replace schema markup with a short, punchy teaser line tied to the BOGO offer.
3. **Reinforce the BOGO offer at the product level.** Add "BOGO 50% Off applies" or a badge directly on at least one product row so the offer feels actionable, not just banner-level.
4. **Trim the email by one module.** The four-image product grid in the middle and the category strip below it largely duplicate each other — consolidate.
5. **Upgrade the hero.** A lifestyle shot of someone wearing spring shoes outdoors would do more than a flat product shot cropped at the ankle.

---

### 6. Bottom Line

The email should not have shipped in this state. The two envelope failures (subject code, JSON preview) are pre-open dealbreakers and signal a QA gap in the send workflow. The rendered creative is serviceable but not differentiated — standard gender segmentation with a clean but low-energy BOGO hero. Fix the pipeline first; optimize the creative second.

---

### 7. Subject Line Analysis

- **Subject:** `[Test]: PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04152026Spring Styles + BOGO 50% Off = The Perfect Pair`
- **Length:** 103 characters
- **Scores (1-10):** Clarity `2`, Curiosity `3`, Personalization `1`, Urgency `4`, Specificity `5`
- **Strengths:**
  - The underlying marketing copy ("Spring Styles + BOGO 50% Off = The Perfect Pair") is punchy and legible once isolated
  - "BOGO 50% Off" gives a concrete, scannable offer
- **Weaknesses:**
  - `[Test]:` prefix and 50-character internal campaign code render verbatim in the inbox — this is a critical production defect
  - At 103 characters, the actual marketing copy is buried past mobile truncation (~40–50 chars)
- **Alt A:** `Spring's Best Deal: Buy One, Get One 50% Off`
- **Alt B:** `BOGO 50% Off Is Back — Shop Spring Styles Now`

---

### 8. Evidence

- **Overall purpose:** Promotional spring campaign driving full-site traffic with a BOGO 50% Off offer.
- **Hero / primary value proposition:** "Buy One Get One 50% Off" banner with a sandal lifestyle image and a single "Shop Now" CTA. Clear but visually underwhelming for a seasonal push.
- **Membership / benefits section:** Not present in this render.
- **Product discoverability / recommendation modules:** Three gender-segmented product rows (Women's, Men's, Kids) with thumbnails, prices, and star ratings, each with a dedicated shop CTA. A four-image product grid midway reinforces style variety. Both modules are functional but redundant.
- **Utility / secondary modules:** "Shop New Spring Styles" category strip, app download ("Let's Get Texting"), curbside pickup callout, payment method logos (PayPal, Klarna visible).
- **Bugs / friction / clarity issues:**
  - Subject line contains `[Test]:` prefix and full internal campaign token visible in inbox
  - Preview text displays raw JSON-LD schema markup instead of marketing copy — visible in all major email clients before open

---

## Technical Audit

## Technical Audit — SKECHERS Spring BOGO Email

**Campaign ID:** `PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04152026`
**Reviewed:** 2026-04-14

---

### 1. Technical Summary

The email has a systemic HTTP/mixed-content problem across all image assets and contains a critical subject-line artifact (campaign ID exposed to subscribers) that would block a clean live send. SPF/DKIM authentication status could not be verified through the AgentMail relay.

---

### 2. Link & Tracking Issues

**Return Path pixel has no protocol prefix**
```
pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
Missing `https://` means this is parsed as a relative URL and will silently fail to load. Inbox placement monitoring data from Return Path will be lost for this send.

**32 click-tracking links not probed**
All outbound links redirect through `click.emails.skechers.com`. QA tooling correctly skipped HTTP probing. Destination URLs and UTM continuity cannot be verified without redirect resolution. See Section 6.

**Third-party DMP pixels fire subscriber-linked identifiers**
Three `beacon.krxd.net` pixels fire on open:
- `partner_uid=e5a36492...` (appears to be a SHA-256 hash of the subscriber email — consistent with hashed identity matching)
- `partner_uid=32884357` (raw subscriber ID)

These are consistent with an SFMC → Krux/Salesforce DMP integration. For a test send the hardcoded `32884357` value is expected; confirm this resolves to a dynamic merge token in the live template.

---

### 3. Rendering & Accessibility

**All image assets served over HTTP**

Every content image uses `http://image.emails.skechers.com/...`. Modern email clients (Gmail, Outlook.com, Apple Mail) proxy or block non-HTTPS images. Affected assets confirmed by QA:

| Asset | src |
|---|---|
| Skechers logo | `http://image.emails.skechers.com/.../dde00662...png` |
| Unnamed content image | `http://image.emails.skechers.com/.../49468f73...png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f...png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0...png` |
| Curbside Pickup | `http://image.emails.skechers.com/.../00100b23...png` |
| AfterPay | `http://image.emails.skechers.com/.../07cb60b5...png` |
| Find A Store | `http://image.emails.skechers.com/.../fc08601a...png` |
| Instagram, Facebook, YouTube | `http://image.emails.skechers.com/.../...png` (×3) |
| ink1000 tracking pixel | `http://www.ink1000.com/.../o.gif` |

The `image.emails.skechers.com` CDN almost certainly supports HTTPS — this is a template-level config issue, not a CDN capability issue.

**Two images missing `alt` text**
- `o.gif` (ink1000 tracking pixel) — acceptable for a 1×1 pixel but flagged by QA
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no `alt`; screen readers will skip it silently

**Duplicate media query blocks**
`@media only screen and (max-width: 375px)` and `@media only screen and (max-width: 640px)` each fully duplicate the mobile ruleset defined again in the second `<style>` block at `max-width: 480px`. No functional breakage, but the redundancy inflates `<head>` size and creates a maintenance hazard.

---

### 4. Personalization & Merge Tokens

**Campaign ID leaked into subject line**

```
[Test]: PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04152026Spring Styles + BOGO 50% Off...
```

Two problems:
1. `[Test]:` prefix — standard test-mode marker, must be stripped before live deployment
2. `PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04152026` is prepended directly to the subject copy with no delimiter or space before "Spring" — this would render verbatim for all subscribers if sent as-is

No unresolved `%%`, `{{`, or `[[` merge tokens visible in the truncated source. The preheader `Or Take 20% off 1 Pair - Shop Your Way` appears to be static text (no tokenization issues).

---

### 5. Compliance

**SPF/DKIM unverifiable**

QA reports: `Authentication-Results header not found — Expected via AgentMail relay`. SPF/DKIM pass/fail status is unknown. This must be confirmed against a raw header capture before send.

**CAN-SPAM / unsubscribe** — HTML is truncated; footer not visible in provided source. Cannot confirm presence of:
- One-click unsubscribe link
- Physical mailing address

These are required. Verify against full source.

---

### 6. Email-to-Site Continuity

All 32 outbound links redirect through `click.emails.skechers.com` and were not resolved by QA tooling. Cannot confirm:
- UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are present on destination URLs
- Campaign ID in UTM values matches `PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04152026`
- Landing pages are live and return HTTP 200

The Krux ad impression pixel carries `campaignid=PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04152026`, which confirms the campaign ID is correctly wired into DMP tracking. UTM continuity on click links is a separate verification step.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Campaign ID + `[Test]:` in subject | Strip both before live send |
| **P0** | All `image.emails.skechers.com` assets on HTTP | Change all `src` to `https://image.emails.skechers.com/...` |
| **P1** | Return Path pixel missing protocol | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif?...` |
| **P1** | ink1000 tracking pixel on HTTP | Confirm `ink1000.com` supports HTTPS; update src |
| **P1** | SPF/DKIM not verified | Capture raw headers from a seeded inbox send; confirm both pass |
| **P1** | CAN-SPAM footer — not confirmed | Verify full HTML includes unsubscribe link + physical address |
| **P2** | `49468f73...png` missing alt text | Add descriptive `alt` attribute |
| **P3** | Duplicate CSS media query blocks | Consolidate into a single block to reduce `<head>` bloat |
## Recent history

- [[2026-04-14-test-pro-us-na-u-sitebundle-full-en-04152026spring-styles-bogo-50-off-the-perfec-cf2310ce-75b7-4c73-985b-]] — 4/10 (2026-04-14)
- [[2026-04-14-test-pro-us-na-u-sitebundle-full-en-04152026spring-styles-bogo-50-off-the-perfec]] — 4/10 (2026-04-14)
- [[2026-04-14-famous-for-the-styles-your-family-loves]] — 5/10 (2026-04-14)

