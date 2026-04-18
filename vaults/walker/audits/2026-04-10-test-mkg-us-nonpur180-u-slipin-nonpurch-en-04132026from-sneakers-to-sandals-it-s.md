---
slug: 2026-04-10-test-mkg-us-nonpur180-u-slipin-nonpurch-en-04132026from-sneakers-to-sandals-it-s
type: email
date: 2026-04-10
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPUR180_U_SLIPIN_NONPURCH_EN_04132026From Sneakers to Sandals it's Slip-In Season 🤩"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NONPUR180_U_SLIPIN_NONPURCH_EN_04132026From Sneakers to Sandals it's Slip-In Season 🤩
**Score:** 5/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A seasonal "Slip-In Season" email built around three vertically stacked product categories — Cozy Fit, Max Cushioning, and Sandals — anchored by a BOGO 50% off offer. The layout is clean and functional, but the email has a critical pre-send flaw that disqualifies it from deployment: raw JSON-LD schema code is leaking into the preview text, and the "[Test]:" subject line prefix was never stripped. Assuming those are fixed, the email itself is serviceable but lacks energy — the creative execution doesn't match the seasonal urgency implied by "Slip-In Season."
- Competent structure, but the preview text bug alone tanks deliverability credibility, and the content is too generic to convert non-purchasers who need more persuasion.

## What's working

- **BOGO 50% off is front and center.** The promotional banner sits at the very top and is the first thing the eye hits — correct placement for a conversion-first email.
- **Three-section category flow (Cozy Fit → Max Cushioning → Sandals) is logical.** It covers the slip-in spectrum from casual to active to outdoor, which is appropriate for a seasonal push.
- **Product photography is clean.** Each section shows a single, well-lit product shot against a lifestyle or solid background — no visual clutter.
- **CTAs are clearly labeled** ("SHOP COZY FIT STYLES," "SHOP MAX CUSHIONING STYLES," "SHOP SANDALS") and appear consistently placed under each module.
- **Footer nav** (Women / Men / Kids / Sale / Clothing / New Arrivals) provides a secondary discovery layer.

## What's weak

- **Preview text is broken.** What renders in the inbox preview is raw JSON-LD schema markup (`[{ "@context": "http://schema.org/"...`). This is the #1 most visible defect — every recipient sees it before opening. It signals technical incompetence and may suppress open rates.
- **"[Test]:" prefix is still in the subject line.** This should never reach a live send. It also means any performance data from this send would be tainted.
- **"NEW STYLE DROP" hero headline undersells the season.** For a slip-in season email targeting non-purchasers, "New Style Drop" is generic. The seasonal hook ("Slip-In Season") from the subject line doesn't appear in the hero body copy — a missed alignment opportunity.
- **No urgency mechanism.** The BOGO offer has no expiration date visible. Non-purchasers need a reason to act now.
- **Category sections feel visually flat.** All three modules use nearly identical layouts — headline, product image, button. No hierarchy differentiation between a lifestyle trend (Cozy Fit) and a functional promise (Max Cushioning). They blur together on scroll.
- **App download module adds friction at the bottom.** For a non-purchaser audience focused on a seasonal offer, the app download CTA is a conversion distraction, not a complement.

## Recommendations

- 1. **Fix the preview text immediately** — strip the JSON-LD from the preview slot and replace with a line that reinforces the offer: *"BOGO 50% off — shop the slip-in styles everyone's wearing this season."*
- 2. **Remove the [Test]: prefix** before any live deployment.
- 3. **Add an offer deadline** to the BOGO banner. Even "Offer ends Sunday" materially improves urgency for cold/non-purchaser segments.
- 4. **Align the hero headline with the subject line.** Use "Slip-In Season is Here" or similar in the body — don't waste the subject line concept on a hero that ignores it.
- 5. **Differentiate the category modules visually.** Consider alternating image-left/image-right layouts, or using a distinct background color for one section to create scroll rhythm and prevent banner blindness.
- 6. **Move or remove the app download module.** Non-purchasers should be converting to their first purchase, not downloading the app. Relocate this to post-purchase flows.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Empty greeting merge token | Add fallback default (e.g., `"there"`) to the AMPscript/personalization block before send |
- | **P0** | `[Test]:` subject line prefix | Strip test prefix before production deployment |
- | **P1** | 14 images served over HTTP | Update all `image.emails.skechers.com` asset URLs to `https://` |
- | **P1** | Return Path pixel missing protocol | Change to `https://pixel.app.returnpath.net/...` |
- | **P1** | ink1000.com pixel on HTTP | Upgrade to HTTPS or confirm this vendor supports it; otherwise engagement data is lost |
- | **P2** | DKIM/SPF not verifiable | Confirm authentication headers are present in production send via inbox test (Litmus/Email on Acid) |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` for WCAG 1.4.4 compliance |
- | **P3** | Missing alt text on content image | Add descriptive alt text to `49468f73...png` |
- | **P3** | Malformed `<meta>` tags | Add `http-equiv` attributes to charset and IE compatibility meta tags |

## Full review
## Executive Summary

A seasonal "Slip-In Season" email built around three vertically stacked product categories — Cozy Fit, Max Cushioning, and Sandals — anchored by a BOGO 50% off offer. The layout is clean and functional, but the email has a critical pre-send flaw that disqualifies it from deployment: raw JSON-LD schema code is leaking into the preview text, and the "[Test]:" subject line prefix was never stripped. Assuming those are fixed, the email itself is serviceable but lacks energy — the creative execution doesn't match the seasonal urgency implied by "Slip-In Season."

---

## Business Impact Score: 5/10

Competent structure, but the preview text bug alone tanks deliverability credibility, and the content is too generic to convert non-purchasers who need more persuasion.

---

## What's Working

- **BOGO 50% off is front and center.** The promotional banner sits at the very top and is the first thing the eye hits — correct placement for a conversion-first email.
- **Three-section category flow (Cozy Fit → Max Cushioning → Sandals) is logical.** It covers the slip-in spectrum from casual to active to outdoor, which is appropriate for a seasonal push.
- **Product photography is clean.** Each section shows a single, well-lit product shot against a lifestyle or solid background — no visual clutter.
- **CTAs are clearly labeled** ("SHOP COZY FIT STYLES," "SHOP MAX CUSHIONING STYLES," "SHOP SANDALS") and appear consistently placed under each module.
- **Footer nav** (Women / Men / Kids / Sale / Clothing / New Arrivals) provides a secondary discovery layer.

---

## What's Weak

- **Preview text is broken.** What renders in the inbox preview is raw JSON-LD schema markup (`[{ "@context": "http://schema.org/"...`). This is the #1 most visible defect — every recipient sees it before opening. It signals technical incompetence and may suppress open rates.
- **"[Test]:" prefix is still in the subject line.** This should never reach a live send. It also means any performance data from this send would be tainted.
- **"NEW STYLE DROP" hero headline undersells the season.** For a slip-in season email targeting non-purchasers, "New Style Drop" is generic. The seasonal hook ("Slip-In Season") from the subject line doesn't appear in the hero body copy — a missed alignment opportunity.
- **No urgency mechanism.** The BOGO offer has no expiration date visible. Non-purchasers need a reason to act now.
- **Category sections feel visually flat.** All three modules use nearly identical layouts — headline, product image, button. No hierarchy differentiation between a lifestyle trend (Cozy Fit) and a functional promise (Max Cushioning). They blur together on scroll.
- **App download module adds friction at the bottom.** For a non-purchaser audience focused on a seasonal offer, the app download CTA is a conversion distraction, not a complement.

---

## Recommendations

1. **Fix the preview text immediately** — strip the JSON-LD from the preview slot and replace with a line that reinforces the offer: *"BOGO 50% off — shop the slip-in styles everyone's wearing this season."*
2. **Remove the [Test]: prefix** before any live deployment.
3. **Add an offer deadline** to the BOGO banner. Even "Offer ends Sunday" materially improves urgency for cold/non-purchaser segments.
4. **Align the hero headline with the subject line.** Use "Slip-In Season is Here" or similar in the body — don't waste the subject line concept on a hero that ignores it.
5. **Differentiate the category modules visually.** Consider alternating image-left/image-right layouts, or using a distinct background color for one section to create scroll rhythm and prevent banner blindness.
6. **Move or remove the app download module.** Non-purchasers should be converting to their first purchase, not downloading the app. Relocate this to post-purchase flows.

---

## Bottom Line

Don't send this. The preview text bug and test prefix are hard blockers. Once fixed, the structural bones are solid enough — but the copy and creative need a seasonal identity upgrade to justify targeting non-purchasers, who require more persuasion than loyalists.

---

## Evidence

**Overall purpose:** Seasonal re-engagement of non-purchasers around the Slip-In product line, supported by a BOGO 50% off promotion.

**Hero / primary value proposition:** BOGO 50% off banner + "New Style Drop" headline with a lifestyle image. Offer is visible but lacks deadline; headline is generic.

**Membership / benefits section:** None present. No loyalty/rewards module visible in this render.

**Product discoverability / recommendation modules:** Three sequential category modules — Cozy Fit, Max Cushioning, Sandals — each with a product image and dedicated CTA. Covers the category range adequately; visually repetitive.

**Utility / secondary modules:** Footer nav grid (Women/Men/Kids/Sale/Clothing/New Arrivals) and an app download block. Social icons in footer.

**Bugs / friction / clarity issues (visible in render):**
- Preview text displays raw JSON-LD schema code — clearly visible in the inbox metadata.
- Subject line includes "[Test]:" prefix — a production-blocking issue.
- No other broken images, overlapping text, or empty placeholder fields detected in the render.

---

## Technical Audit

## Technical Audit — Skechers Slip-In Season Email
**Campaign:** `MKG_US_NONPUR180_U_SLIPIN_NONPURCH_EN_04132026`
**From:** `no-reply@emails.skechers.com`

---

### 1. Technical Summary

The email has one production-blocking issue (unresolved greeting merge token) and a systemic HTTP-over-HTTPS problem affecting 14+ image assets. Authentication header data was unavailable for verification.

---

### 2. Link & Tracking Issues

**[WARN] 27 click-redirect links unverified**
All CTAs route through `click.emails.skechers.com`. QA probing was skipped for redirect domains — link destinations and UTM passthrough cannot be confirmed from static analysis alone.

**[WARN] Third-party tracking pixel on HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```
Non-HTTPS pixel will be blocked by Gmail, Outlook, and most modern email clients over HTTPS connections. Engagement signal from this pixel will be silently lost.

**[WARN] Return Path / Validity inbox monitor pixel missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `https://` prefix — this will be parsed as a relative URL path, breaking the deliverability monitor entirely. Should be `https://pixel.app.returnpath.net/...`.

---

### 3. Rendering & Accessibility

**[WARN] Systemic HTTP image sources — 14 assets**
All production images served from `image.emails.skechers.com` use `http://`, including the logo, footer icons (App Store, Google Play, social, store, Afterpay), and a hero image. In security-conscious clients (Outlook.com, Gmail), mixed-content blocking will replace these with broken image placeholders.

Affected pattern:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/...
```

**[WARN] Missing alt text on 2 images**
- `o.gif` (ink1000 tracking pixel) — low impact given it's a 1×1 pixel
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unknown content image; blind/low-vision users get no fallback

**[WARN] `-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; }
```
This suppresses user-initiated text zoom on iOS/Safari, a WCAG 1.4.4 (Resize Text) violation. Should be `100%`, not `none`.

**[INFO] Meta tag missing `http-equiv` attributes**
Two `<meta>` tags omit required attributes:
```html
<meta content="text/html; charset=utf-8" />          <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                            <!-- missing http-equiv="X-UA-Compatible" -->
```
Benign in most modern clients but technically malformed per spec.

---

### 4. Personalization & Merge Tokens

**[FAIL] Greeting name token not resolving — production blocker**
QA confirmed an empty name field in the greeting slot, rendering as: `Hi ,`

The merge token (likely `%%First Name%%` or equivalent SFMC AMPscript) either has no fallback default or the subscriber record is missing the field. This affects all recipients where first name is null/empty. A default value (e.g., `"there"`) must be set in the personalization logic.

No other unresolved tokens were detected in the truncated source.

---

### 5. Compliance

**[WARN] SPF/DKIM authentication status unknown**
`Authentication-Results` header was not present in the reviewed sample (expected via AgentMail relay). SPF/DKIM pass status cannot be confirmed. A failed or missing DKIM signature increases spam folder placement risk and breaks BIMI eligibility.

**[WARN] Subject line contains `[Test]:` prefix**
```
Subject: [Test]: MKG_US_NONPUR180_U_SLIPIN_NONPURCH_EN_04132026...
```
If this email proceeds to a live send without removing the test prefix, it will appear in subscriber inboxes verbatim. This is a production-deployment gate check.

**[INFO]** CAN-SPAM physical address and unsubscribe link presence cannot be confirmed from the truncated HTML — footer content was cut off. These should be verified in the full source.

---

### 6. Email-to-Site Continuity

**[UNVERIFIABLE]** All 27 CTAs pass through `click.emails.skechers.com` redirects. UTM parameter integrity (`utm_source`, `utm_medium`, `utm_campaign`) cannot be confirmed without probing live redirect destinations. The campaign ID `MKG_US_NONPUR180_U_SLIPIN_NONPURCH_EN_04132026` is present in the Krux impression pixel, which is consistent with expected tagging patterns.

The Krux/Salesforce DMP ad impression pixel includes the campaign ID correctly:
```
campaignid=MKG_US_NONPUR180_U_SLIPIN_NONPURCH_EN_04132026
```

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Empty greeting merge token | Add fallback default (e.g., `"there"`) to the AMPscript/personalization block before send |
| **P0** | `[Test]:` subject line prefix | Strip test prefix before production deployment |
| **P1** | 14 images served over HTTP | Update all `image.emails.skechers.com` asset URLs to `https://` |
| **P1** | Return Path pixel missing protocol | Change to `https://pixel.app.returnpath.net/...` |
| **P1** | ink1000.com pixel on HTTP | Upgrade to HTTPS or confirm this vendor supports it; otherwise engagement data is lost |
| **P2** | DKIM/SPF not verifiable | Confirm authentication headers are present in production send via inbox test (Litmus/Email on Acid) |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` for WCAG 1.4.4 compliance |
| **P3** | Missing alt text on content image | Add descriptive alt text to `49468f73...png` |
| **P3** | Malformed `<meta>` tags | Add `http-equiv` attributes to charset and IE compatibility meta tags |
## Recent history

- [[2026-04-10-test-pro-us-retpuropen-u-sitebundle-retail-en-04122026spring-favorites-just-a-cl]] — 4/10 (2026-04-10)
- [[2026-04-11-test-pro-us-nonpur180-u-sitebundle-nonpurch-en-04122026spring-favorites-just-a-c]] — 3/10 (2026-04-10)
- [[2026-04-10-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04122026styles-made-for-spring-weeken]] — 4/10 (2026-04-10)

