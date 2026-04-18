---
slug: 2026-04-11-test-mkg-us-na-w-seasonal-gender-en-04112026-v4the-perfect-pair-or-2-for-her
type: email
date: 2026-04-10
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_W_SEASONAL_GENDER_EN_04112026_V4The Perfect Pair (or 2) for Her"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_W_SEASONAL_GENDER_EN_04112026_V4The Perfect Pair (or 2) for Her
**Score:** 5/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- This is a competent seasonal email built around a Mother's Day gift guide theme with a clear promotional hook (BOGO 50% off). The floral aesthetic, category variety (Mommy & Me, Sandals, colorful styles, Best Sellers), and logical content hierarchy all work. However, two show-stopping pre-send errors make this un-sendable in current form: the subject line carries a raw internal campaign code and a `[Test]` prefix, and the preview text slot is populated with raw JSON-LD schema markup. Neither belongs in a recipient's inbox. Fix those first — the body of the email is mostly sound.
- Strong creative chassis, but the inbox-level bugs (subject, preview text) destroy first impression before the email is even opened. Score is capped until those are resolved.

## What's working

- **BOGO offer is front and center.** The "Buy One, Get One 50% Off" banner sits at the very top of the email, above the fold. Clear CTA, no ambiguity about the offer.
- **Mother's Day framing is cohesive.** The pink floral aesthetic, "Gift Guide" headline, and "Mommy & Me" module all reinforce a single seasonal idea without feeling disjointed.
- **Logical category cascade.** The email flows from gifting (Mommy & Me) → seasonal footwear (Sandals) → trend (colorful styles) → evergreen (Best Sellers). That's a sensible editorial arc.
- **Utility modules are present.** App download, curbside pickup, and a secondary navigation row round out the email without crowding the hero experience.
- **Footer is clean.** Social links, legal copy, and unsubscribe are all present and legible.

## What's weak

- **Subject line is broken.** `[Test]: MKG_US_NA_W_SEASONAL_GENDER_EN_04112026_V4The Perfect Pair (or 2) for Her` — the campaign code is fused directly into the subject, and the `[Test]` flag is live. This would tank open rates and erode sender credibility instantly.
- **Preview text is a critical failure.** The inbox preview renders raw JSON-LD schema: `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — recipients see machine code instead of a human teaser. This is the second line of text a subscriber sees before deciding to open.
- **Best Sellers module is text-heavy and thin.** The "Best Sellers" section appears to be mostly a text block with a CTA button but no product imagery visible, which makes it the weakest content block in an otherwise image-driven email.
- **Module label legibility at mobile width.** Category headers like the colorful-styles section are small and low-contrast against busy backgrounds at this render size — scanability suffers.

## Recommendations

- 1. **Strip `[Test]` and the campaign code from the subject line before any live send.** The final subject should be something like "The Perfect Pair (or 2) for Her."
- 2. **Fix the preview text slot immediately.** Replace the schema leak with a human-readable teaser tied to the offer — e.g., "Buy one, get one 50% off — the gift guide she'll love."
- 3. **Add product imagery to the Best Sellers block.** Even 2–3 product tiles would match the visual language of the rest of the email and reduce the dead zone.
- 4. **Increase category header contrast.** Ensure section labels meet WCAG AA contrast ratios against their backgrounds, especially on mobile widths where the render is already compressed.
- 5. **QA the module label text** — at least one section header appears to use a stylized/decorative font that's difficult to read at small sizes. Confirm legibility across devices.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Empty name merge token | Add a non-blank fallback value (e.g. `"there"`) to the first-name personalization field in the ESP template |
- | **P0** | `[Test]:` prefix in subject | Remove before production deployment |
- | **P0** | Subject line version string concatenation | Insert delimiter or fix template subject field; confirm rendered subject is `The Perfect Pair (or 2) for Her` |
- | **P1** | Return Path pixel — missing protocol | Add `https://` prefix to `src` attribute |
- | **P1** | All images on HTTP | Migrate `image.emails.skechers.com` assets to HTTPS or verify CDN supports HTTPS and update all `src` attributes |
- | **P1** | Authentication-Results absent | Confirm DKIM is configured and signing on the sending domain; re-test via a seeded inbox |
- | **P2** | ink1000 pixel on HTTP | Move to HTTPS; add `alt=""` |
- | **P2** | Missing alt on `49468f73...png` | Add descriptive `alt` or `alt=""` if decorative |
- | **P2** | `<meta charset>` malformed | Add `http-equiv="Content-Type"` attribute |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` |
- | **P3** | UTM passthrough on CTAs | Trace one redirect chain to confirm UTM params reach final landing page |

## Full review
### 1. Executive Summary

This is a competent seasonal email built around a Mother's Day gift guide theme with a clear promotional hook (BOGO 50% off). The floral aesthetic, category variety (Mommy & Me, Sandals, colorful styles, Best Sellers), and logical content hierarchy all work. However, two show-stopping pre-send errors make this un-sendable in current form: the subject line carries a raw internal campaign code and a `[Test]` prefix, and the preview text slot is populated with raw JSON-LD schema markup. Neither belongs in a recipient's inbox. Fix those first — the body of the email is mostly sound.

---

### 2. Business Impact Score: **5 / 10**

Strong creative chassis, but the inbox-level bugs (subject, preview text) destroy first impression before the email is even opened. Score is capped until those are resolved.

---

### 3. What's Working

- **BOGO offer is front and center.** The "Buy One, Get One 50% Off" banner sits at the very top of the email, above the fold. Clear CTA, no ambiguity about the offer.
- **Mother's Day framing is cohesive.** The pink floral aesthetic, "Gift Guide" headline, and "Mommy & Me" module all reinforce a single seasonal idea without feeling disjointed.
- **Logical category cascade.** The email flows from gifting (Mommy & Me) → seasonal footwear (Sandals) → trend (colorful styles) → evergreen (Best Sellers). That's a sensible editorial arc.
- **Utility modules are present.** App download, curbside pickup, and a secondary navigation row round out the email without crowding the hero experience.
- **Footer is clean.** Social links, legal copy, and unsubscribe are all present and legible.

---

### 4. What's Weak

- **Subject line is broken.** `[Test]: MKG_US_NA_W_SEASONAL_GENDER_EN_04112026_V4The Perfect Pair (or 2) for Her` — the campaign code is fused directly into the subject, and the `[Test]` flag is live. This would tank open rates and erode sender credibility instantly.
- **Preview text is a critical failure.** The inbox preview renders raw JSON-LD schema: `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — recipients see machine code instead of a human teaser. This is the second line of text a subscriber sees before deciding to open.
- **Best Sellers module is text-heavy and thin.** The "Best Sellers" section appears to be mostly a text block with a CTA button but no product imagery visible, which makes it the weakest content block in an otherwise image-driven email.
- **Module label legibility at mobile width.** Category headers like the colorful-styles section are small and low-contrast against busy backgrounds at this render size — scanability suffers.

---

### 5. Recommendations

1. **Strip `[Test]` and the campaign code from the subject line before any live send.** The final subject should be something like "The Perfect Pair (or 2) for Her."
2. **Fix the preview text slot immediately.** Replace the schema leak with a human-readable teaser tied to the offer — e.g., "Buy one, get one 50% off — the gift guide she'll love."
3. **Add product imagery to the Best Sellers block.** Even 2–3 product tiles would match the visual language of the rest of the email and reduce the dead zone.
4. **Increase category header contrast.** Ensure section labels meet WCAG AA contrast ratios against their backgrounds, especially on mobile widths where the render is already compressed.
5. **QA the module label text** — at least one section header appears to use a stylized/decorative font that's difficult to read at small sizes. Confirm legibility across devices.

---

### 6. Bottom Line

Don't send this in its current state. Two inbox-visible bugs (subject + preview text) would put this email in the "looks broken" bucket before a single subscriber opens it. Once those are fixed, the email body is a solid seasonal execution that should perform reasonably well — the BOGO hook is strong, the Mother's Day framing is on-point, and the category variety gives subscribers multiple entry points to browse.

---

### 7. Evidence

**Overall purpose:** Seasonal gift guide email driving Mother's Day purchases with a BOGO 50% off promotional hook. Women's audience, US market.

**Hero / primary value proposition:** "Buy One, Get One 50% Off" promotional banner dominates the top fold. Below it, a "Mother's Day Gift Guide" headline with a lifestyle-adjacent hero image establishes the seasonal context. The offer and occasion are clearly connected.

**Membership / benefits section:** None visible. No loyalty, Elite status, or points content present.

**Product discoverability / recommendation modules:**
- *Mommy & Me* — side-by-side product display (adult + child shoes), "Shop Now" CTA. Clear concept, seasonally relevant.
- *Sandals* — lifestyle image with product display and CTA. Logical seasonal category for spring/Mother's Day.
- *Colorful styles module* — features bright/novelty colorways with CTA. Adds trend interest.
- *Best Sellers* — appears text-based with a CTA button; notably lighter on imagery than the modules above it.

**Utility / secondary modules:** App download (App Store + Google Play), curbside pickup callout, secondary navigation row (Women, Men, Kids, Clothing, New Arrivals, Sale), and social media follow block. Standard Skechers footer structure.

**Bugs / friction / clarity issues (visible in render):**
- Subject line contains `[Test]` prefix and full internal campaign code — visible in inbox.
- Preview text field is populated with raw JSON-LD schema markup — visible in inbox before open.
- Best Sellers module lacks product imagery consistent with surrounding modules.
- One category section header uses a decorative font style that reduces readability at mobile render width.

---

## Technical Audit

## Technical Audit — MKG_US_NA_W_SEASONAL_GENDER_EN_04112026_V4

---

### 1. Technical Summary

One broken merge token will produce a visible personalization failure in production. The Return Path inbox-monitoring pixel has a missing protocol and will not fire. All image assets are served over HTTP, which risks silent blocking in modern mail clients.

---

### 2. Link & Tracking Issues

**Return Path pixel — missing protocol (broken)**
```html
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"
```
No `http://` or `https://` prefix. Mail clients treat this as a relative URL. The pixel will never load; inbox-monitoring data for this send will be absent.

**HTTP-only tracking pixel — ink1000**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```
Served over plain HTTP. Gmail, Outlook.com, and Apple Mail proxy/block non-HTTPS resources. Additionally, this pixel has no `alt` attribute.

**27 click-redirect links not probed**
All outbound CTAs pass through `click.emails.skechers.com`. Destination URLs and UTM parameter completeness were not verified due to redirect chain. Manual spot-check of final destinations is recommended before deploy.

---

### 3. Rendering & Accessibility

**HTTP image sources — 11 assets**
All production image assets are loaded from `http://image.emails.skechers.com/lib/...`. Affected images include the logo, app store badges, social icons, and footer service icons. Non-HTTPS sources are silently blocked by several major clients (Gmail via proxy, iOS Mail, Outlook 2019+).

Affected srcs (sample):
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png  (missing alt)
```

**Missing alt text — 2 images**
- `o.gif` (ink1000 pixel) — no `alt` attribute
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no `alt` attribute; identity unknown from truncated source

**`<meta charset>` malformed**
```html
<meta content="text/html; charset=utf-8" />
```
Missing `http-equiv="Content-Type"`. Correct form for XHTML transitional:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Some older Outlook versions may mis-detect encoding without this.

**`-webkit-text-size-adjust: none`**
Applied globally via `* { -webkit-text-size-adjust: none; }`. This disables user-agent font scaling on iOS, impacting readability for users with accessibility needs. The value should be `100%` rather than `none`.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty first-name greeting**
QA detected a greeting rendering as `Hi ,` — the first-name merge token resolves to an empty string. The fallback/default value for the name field is either missing or blank in the ESP template configuration. This will be visible to all recipients whose profile lacks a stored first name.

**Subject line — test prefix and version string not stripped**
```
[Test]: MKG_US_NA_W_SEASONAL_GENDER_EN_04112026_V4The Perfect Pair (or 2) for Her
```
Two issues: `[Test]:` prefix must be removed before production send. The campaign ID `...V4` is directly concatenated to the subject copy with no delimiter — `V4The Perfect Pair` — suggesting a template subject field was not properly terminated or the separator character was dropped.

---

### 5. Compliance

**Authentication-Results header absent**
SPF and DKIM pass/fail status could not be confirmed — the `Authentication-Results` header was not present in the relay headers captured via AgentMail. Deliverability impact is unknown. Verify DKIM signing is active on `emails.skechers.com` before the production send.

**Unsubscribe / CAN-SPAM**
The HTML source is truncated; a footer with unsubscribe link and physical mailing address was not confirmed in the provided excerpt. These are required under CAN-SPAM. Verify presence in the full template.

**Krux/DMP user-match beacons**
Two `beacon.krxd.net` pixels fire on open, one passing a hashed email (`sha25` partner UID), one passing a raw subscriber ID (`subid=75909571`). Confirm these are covered by the applicable privacy policy and consent framework for US recipients.

---

### 6. Email-to-Site Continuity

All 27 outbound CTAs route through `click.emails.skechers.com` redirects. UTM parameter passthrough to `skechers.com` landing pages could not be verified from the available source. The Krux ad impression pixel encodes the campaign ID correctly:
```
campaignid=MKG_US_NA_W_SEASONAL_GENDER_EN_04112026
```
This is consistent with the email campaign ID and suggests analytics tagging is intentionally structured — but final landing page UTM values require a redirect trace to confirm.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Empty name merge token | Add a non-blank fallback value (e.g. `"there"`) to the first-name personalization field in the ESP template |
| **P0** | `[Test]:` prefix in subject | Remove before production deployment |
| **P0** | Subject line version string concatenation | Insert delimiter or fix template subject field; confirm rendered subject is `The Perfect Pair (or 2) for Her` |
| **P1** | Return Path pixel — missing protocol | Add `https://` prefix to `src` attribute |
| **P1** | All images on HTTP | Migrate `image.emails.skechers.com` assets to HTTPS or verify CDN supports HTTPS and update all `src` attributes |
| **P1** | Authentication-Results absent | Confirm DKIM is configured and signing on the sending domain; re-test via a seeded inbox |
| **P2** | ink1000 pixel on HTTP | Move to HTTPS; add `alt=""` |
| **P2** | Missing alt on `49468f73...png` | Add descriptive `alt` or `alt=""` if decorative |
| **P2** | `<meta charset>` malformed | Add `http-equiv="Content-Type"` attribute |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` |
| **P3** | UTM passthrough on CTAs | Trace one redirect chain to confirm UTM params reach final landing page |
## Recent history

- [[2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026-v3feel-good-styles-for-you-them]] — 5/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026-v2feel-good-styles-for-you-them]] — 6.5/10 (2026-04-10)
- [[2026-04-10-test-pro-us-na-u-sitebundle-full-en-04122026-v2styles-made-for-spring-weekends]] — 4/10 (2026-04-10)

