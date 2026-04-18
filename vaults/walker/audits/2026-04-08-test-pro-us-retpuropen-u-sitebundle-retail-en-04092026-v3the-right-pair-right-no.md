---
slug: 2026-04-08-test-pro-us-retpuropen-u-sitebundle-retail-en-04092026-v3the-right-pair-right-no
type: email
date: 2026-04-08
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V3The right pair, right now, however you want to shop!"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V3The right pair, right now, however you want to shop!
**Score:** 5/10 · **Type:** Email audit · **2026-04-08**
## Executive summary

- **Subject:** [Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V3The right pair, right now, however you want to shop!
- **From:** SKECHERS | no-reply@emails.skechers.com
- This is a BOGO promotional email anchored on a Buy One Get One 50% off (or 20% off one item) offer, paired with a new arrivals showcase and category navigation. The core offer is strong and clearly presented in the hero — but the email squanders its momentum. The hero product is underwhelming for a discount-driven email, the new arrivals module is too small to drive aspiration, and the overall layout descends into a generic catalog without enough conviction to push conversion. The subject line is clearly a test artifact and would be a live send failure if deployed as-is.
- A compelling BOGO offer poorly amplified. The structure is functional but the email never builds urgency or desire beyond the hero headline.

## What's working

- **Offer clarity.** "BUY ONE GET ONE 50% OFF or 20% off 1 Item" is legible, prominent, and unambiguous in the hero. The dual-option framing gives customers a choice, which reduces decision friction.
- **Category quad.** The four-tile grid (Women / Men / Girls / Boys) is clean, image-led, and gives every household member a path. This is the most visually effective module outside the hero.
- **Additional Styles text links.** The supplemental text-link block (Women, Men, Kids, Clothing, New Arrivals, Sale) is a lightweight but useful utility layer for intent-driven shoppers.
- **Utility footer.** App download, Curbside Pickup, and Find a Store are all present and appropriately compact.

## What's weak

- **Hero product selection.** The featured shoe (a casual boat/slip-on style) is generic and doesn't project energy appropriate for a BOGO event. It doesn't create desire — it just occupies space.
- **New arrivals thumbnails are too small.** The row of new arrival product chips is thumbnail-sized. At render width, shoes are indistinguishable. This module cannot convert; it can only confuse.
- **No urgency signal anywhere.** There's no deadline, no "limited time," no quantity framing. A BOGO offer with no expiration feels like it will always be there — which kills click urgency.
- **Flat visual hierarchy below the hero.** After the hero, the email loses energy fast. Everything from new arrivals onward has roughly equal visual weight, which means nothing commands attention.
- **Subject line is a test artifact.** The raw campaign ID (`PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V3`) is prepended to the subject. If sent live, this is an immediate credibility failure.

## Recommendations

- 1. **Swap the hero product.** Feature a higher-desire, visually striking shoe — something that earns the BOGO offer. The product should make the shopper want to buy two.
- 2. **Add urgency copy.** Add "Ends Sunday" or "This Weekend Only" in the hero subhead. The offer needs a reason to act now.
- 3. **Increase new arrivals tile size.** Either reduce items to 3–4 tiles with larger imagery, or drop this module entirely and reallocate space to the category quad.
- 4. **Reinforce the offer in the category quad.** Add "Eligible for BOGO" or a small badge to each shop tile to remind the shopper the discount applies across categories.
- 5. **Fix the subject line before any live send.** Strip the internal campaign ID; the consumer subject should be only the value prop.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | `[Test]:` prefix in subject line | Remove before live send |
- | **P0** | Campaign code concatenated into subject with no space | Fix template variable whitespace in SFMC subject field |
- | **P1** | Return Path pixel missing URL protocol | Add `https://` to `src` attribute |
- | **P1** | 16 images served over HTTP | Update all `image.emails.skechers.com` and `ink1000.com` src URLs to HTTPS |
- | **P1** | SPF/DKIM unconfirmed | Verify authentication-results against `emails.skechers.com` DMARC record before deploy |
- | **P2** | Plain-text version 72% URLs | Reduce URL density; summarize link text rather than embedding full redirect URLs |
- | **P2** | 4 images missing `alt` text | Add descriptive `alt` attributes for accessibility and image-blocking fallback |
- | **P2** | Krux `partner_uid` possibly hardcoded test value | Confirm this is a dynamic merge field resolving per subscriber |
- | **P3** | `<meta charset>` missing `http-equiv` | Add `http-equiv="Content-Type"` to charset meta tag |
- | **P3** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user text-resize accessibility |

## Full review
## Skechers Email Review
**Subject:** [Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V3The right pair, right now, however you want to shop!
**From:** SKECHERS | no-reply@emails.skechers.com

---

### 1. Executive Summary

This is a BOGO promotional email anchored on a Buy One Get One 50% off (or 20% off one item) offer, paired with a new arrivals showcase and category navigation. The core offer is strong and clearly presented in the hero — but the email squanders its momentum. The hero product is underwhelming for a discount-driven email, the new arrivals module is too small to drive aspiration, and the overall layout descends into a generic catalog without enough conviction to push conversion. The subject line is clearly a test artifact and would be a live send failure if deployed as-is.

---

### 2. Business Impact Score: 5 / 10

A compelling BOGO offer poorly amplified. The structure is functional but the email never builds urgency or desire beyond the hero headline.

---

### 3. What's Working

- **Offer clarity.** "BUY ONE GET ONE 50% OFF or 20% off 1 Item" is legible, prominent, and unambiguous in the hero. The dual-option framing gives customers a choice, which reduces decision friction.
- **Category quad.** The four-tile grid (Women / Men / Girls / Boys) is clean, image-led, and gives every household member a path. This is the most visually effective module outside the hero.
- **Additional Styles text links.** The supplemental text-link block (Women, Men, Kids, Clothing, New Arrivals, Sale) is a lightweight but useful utility layer for intent-driven shoppers.
- **Utility footer.** App download, Curbside Pickup, and Find a Store are all present and appropriately compact.

---

### 4. What's Weak

- **Hero product selection.** The featured shoe (a casual boat/slip-on style) is generic and doesn't project energy appropriate for a BOGO event. It doesn't create desire — it just occupies space.
- **New arrivals thumbnails are too small.** The row of new arrival product chips is thumbnail-sized. At render width, shoes are indistinguishable. This module cannot convert; it can only confuse.
- **No urgency signal anywhere.** There's no deadline, no "limited time," no quantity framing. A BOGO offer with no expiration feels like it will always be there — which kills click urgency.
- **Flat visual hierarchy below the hero.** After the hero, the email loses energy fast. Everything from new arrivals onward has roughly equal visual weight, which means nothing commands attention.
- **Subject line is a test artifact.** The raw campaign ID (`PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V3`) is prepended to the subject. If sent live, this is an immediate credibility failure.

---

### 5. Recommendations

1. **Swap the hero product.** Feature a higher-desire, visually striking shoe — something that earns the BOGO offer. The product should make the shopper want to buy two.
2. **Add urgency copy.** Add "Ends Sunday" or "This Weekend Only" in the hero subhead. The offer needs a reason to act now.
3. **Increase new arrivals tile size.** Either reduce items to 3–4 tiles with larger imagery, or drop this module entirely and reallocate space to the category quad.
4. **Reinforce the offer in the category quad.** Add "Eligible for BOGO" or a small badge to each shop tile to remind the shopper the discount applies across categories.
5. **Fix the subject line before any live send.** Strip the internal campaign ID; the consumer subject should be only the value prop.

---

### 6. Bottom Line

The offer is real and the bones are functional, but this email doesn't sell the deal — it just announces it. A stronger hero product, urgency language, and a properly sized arrivals module would meaningfully lift performance. As a test artifact, it reads like a structural proof-of-concept, not a conversion-ready send.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | BOGO promotional email (50% off second item or 20% off one) with a secondary new arrivals push and full category navigation |
| **Hero / primary value prop** | BOGO headline is clear; "SHOP NOW" CTA is present; product imagery is generic — a casual slip-on that doesn't carry deal energy |
| **Membership / benefits** | Not present in this email |
| **Product discoverability** | New arrivals row present but thumbnail-sized and non-actionable; category quad (Women/Men/Girls/Boys) is the strongest discovery module |
| **Utility / secondary modules** | Text-link category block, app download, curbside pickup, find a store — all present and appropriately minimal |
| **Bugs / friction / clarity issues** | Subject line contains raw internal campaign ID (`PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V3`) — would be a live send defect; no other visible rendering bugs in the screenshot |

---

## Technical Audit

## Technical Audit — Skechers PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V3

---

### 1. Technical Summary

This is a live-candidate email still carrying a `[Test]:` subject prefix, built on Salesforce Marketing Cloud with Krux DMP sync beacons. Multiple images are served over plain HTTP, one tracking pixel has a malformed (protocol-relative) URL, and the plain-text version is URL-saturated to spam-filter risk level.

---

### 2. Link & Tracking Issues

**Return Path seed pixel — missing URL protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
No `http://` or `https://` prefix. Email clients interpret this as a relative path; the pixel will silently fail to load, breaking inbox placement monitoring.

**Ink1000 tracking pixel — plain HTTP**
```
src="http://www.ink1000.com/p/up/.../o.gif?mi_u=8021648903&mi_ecmp=..."
```
Served over HTTP. Gmail, Outlook.com, and Apple Mail proxy or block mixed-content images; this open-track pixel will be unreliable in those clients.

**26 click-redirect links — destination URLs unverifiable**
All CTA hrefs route through `click.emails.skechers.com/?qs=<encrypted blob>`. Destination URLs and UTM parameters cannot be audited without redirect resolution. The QA tool correctly skipped HTTP probing these.

**Plain-text version — URL density**
3,509 of 4,841 characters (72%) are URLs. This crosses thresholds used by Proofpoint, SpamAssassin, and Google Postmaster's text classifier as a spam signal.

---

### 3. Rendering & Accessibility

**HTTP image sources (16 affected images)**
All images under `image.emails.skechers.com` are served over HTTP:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
... (14 more)
```
Gmail strips HTTP `src` attributes in some rendering paths; Outlook 2016+ flags mixed content. All asset URLs should use HTTPS.

**Missing `alt` text on 4 images**
- `o.gif` (Ink1000 pixel) — `alt=""` acceptable for tracking pixels but flag for completeness
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no `alt`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — no `alt`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — no `alt`

Screen readers and image-blocking clients will render these as blank content with no fallback label.

**Malformed `<meta>` charset tag**
```html
<meta content="text/html; charset=utf-8" />
```
Missing `http-equiv="Content-Type"`. The correct form is:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Without `http-equiv`, older Outlook and Lotus Notes parsers may not apply the charset declaration.

**`-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; ... }
```
Using `none` (rather than `100%`) prevents users from overriding font size for readability. WCAG 1.4.4 recommends text be resizable up to 200% without loss of content.

---

### 4. Personalization & Merge Tokens

**`[Test]:` prefix not stripped from subject line**
```
Subject: [Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V3The right pair...
```
The test prefix is present, and the campaign code `PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026_V3` is concatenated directly against the subject copy with no separator space. This looks like a template variable that was replaced inline but the surrounding whitespace was not preserved.

**Krux beacon subscriber ID appears hardcoded**
```
partner_uid=75909571
```
This looks like a test subscriber ID baked into the send — not a resolved merge field. If this value does not vary per recipient, Krux audience matching will be attributed entirely to one record.

**Preheader text is hardcoded**
```html
<div class="preheader" ...>BOGO 50% or 20% off 1 pair online only</div>
```
No personalization tokens. Not a bug, but confirm this matches the intended offer for all segments in this send.

---

### 5. Compliance

**SPF/DKIM status unverifiable**
The AgentMail relay did not surface an `Authentication-Results` header. SPF/DKIM pass/fail cannot be confirmed from available data. Given the send domain is `emails.skechers.com`, alignment should be verified against DMARC policy before live deploy.

**CAN-SPAM physical address** — cannot confirm from truncated HTML; footer was not included in the source excerpt. Must verify a valid postal address is present.

**Unsubscribe link** — likewise not visible in the truncated source. Confirm `List-Unsubscribe` header and an in-body opt-out link are present.

---

### 6. Email-to-Site Continuity

All 26 destination URLs are encrypted behind the SFMC click-redirect proxy (`click.emails.skechers.com/?qs=<blob>`), making UTM parameter verification impossible without link decryption or live redirect tracing. Prior to send, confirm:
- `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` are appended to all landing page destinations
- Campaign parameter matches send ID (`PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026`) for analytics attribution

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | `[Test]:` prefix in subject line | Remove before live send |
| **P0** | Campaign code concatenated into subject with no space | Fix template variable whitespace in SFMC subject field |
| **P1** | Return Path pixel missing URL protocol | Add `https://` to `src` attribute |
| **P1** | 16 images served over HTTP | Update all `image.emails.skechers.com` and `ink1000.com` src URLs to HTTPS |
| **P1** | SPF/DKIM unconfirmed | Verify authentication-results against `emails.skechers.com` DMARC record before deploy |
| **P2** | Plain-text version 72% URLs | Reduce URL density; summarize link text rather than embedding full redirect URLs |
| **P2** | 4 images missing `alt` text | Add descriptive `alt` attributes for accessibility and image-blocking fallback |
| **P2** | Krux `partner_uid` possibly hardcoded test value | Confirm this is a dynamic merge field resolving per subscriber |
| **P3** | `<meta charset>` missing `http-equiv` | Add `http-equiv="Content-Type"` to charset meta tag |
| **P3** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user text-resize accessibility |
## Recent history

- [[2026-04-08-test-pro-us-retpuropen-u-sitebundle-retail-en-04092026-v2the-right-pair-right-no]] — 4/10 (2026-04-08)
- [[2026-04-08-test-pro-us-retpuropen-u-sitebundle-retail-en-04092026the-right-pair-right-now-w]] — 5/10 (2026-04-08)
- [[2026-04-08-spring-into-comfort-like-you-ve-never-felt-before]] — 5.5/10 (2026-04-08)

