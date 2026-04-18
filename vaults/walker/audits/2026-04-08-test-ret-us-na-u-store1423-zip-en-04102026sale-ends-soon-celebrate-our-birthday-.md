---
slug: 2026-04-08-test-ret-us-na-u-store1423-zip-en-04102026sale-ends-soon-celebrate-our-birthday-
type: email
date: 2026-04-08
persona: walker
score: "5/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1423_ZIP_EN_04102026SALE Ends Soon! Celebrate our Birthday in Ridgewood"
tags: [email, score-5, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1423_ZIP_EN_04102026SALE Ends Soon! Celebrate our Birthday in Ridgewood
**Score:** 5/10 · **Type:** Email audit · **2026-04-08**
## Executive summary

- A tight, locally-targeted birthday sale email for the Ridgewood, NY Skechers store. The core offer — Buy 2 Pairs, Get the 3rd Free — is clear and prominently placed. The email is functional but lean, with limited visual richness and virtually no product merchandising. For a sale-urgency email, it does the job; for a birthday celebration, it feels flat.
- The offer is compelling but the email fails to generate excitement or drive product discovery. Heavy reliance on text over visuals, minimal CTA hierarchy, and a shopping category grid that goes nowhere undercut what should be a high-converting event.

## What's working

- **Offer clarity**: "Buy 2 Pairs, Get the 3rd Free" reads immediately — no ambiguity.
- **Urgency framing**: "Limited Time Only 4/3 – 4/12" with the sale end date is well-placed directly beneath the offer.
- **Local personalization**: Store name (Skechers Ridgewood), address, and phone number are all visible. "Get Directions" CTA is appropriate for a retail-traffic email.
- **Hero visual**: The lifestyle image with colorful shoes is energetic and consistent with the birthday theme.
- **Compliance footer**: Unsubscribe and privacy links are present and legible.

## What's weak

- **No product imagery below the hero**: The "Shop Additional Styles" section is text-only category links (Women, Men, Kids, Wide). For a footwear brand with a broad catalog, this is a missed opportunity — there's nothing to aspire to or click through.
- **Birthday theme is underdeveloped**: The confetti banner and "Celebrate our birthday!" copy set an expectation the rest of the email doesn't meet. No exclusive birthday narrative, no special story, no warmth.
- **Single primary CTA**: "Get Directions" is the only real action button in the top half. There's no "Shop Now" CTA tied to the offer itself — a user who wants to buy online first has no obvious path.
- **Preview text is broken**: The preview line visible in the subject reads as a raw URL string and internal token (`vawpToken=EMGDS7B4MWOUFATY2BDEV2HLCI...`), not a teaser. This damages open-rate and looks unprofessional in any inbox.
- **App / utility module is low-signal**: The Download the App + Curbside Pickup + Shop Now Pay Later + Find a Store block is visually buried and poorly ordered — utility features competing with each other at the bottom with no hierarchy.
- **Klarna/Afterpay logos are tiny**: Pay-later options are present but too small to register as a value-add.

## Recommendations

- 1. **Add a "Shop Sale" CTA** immediately below the offer block — capture online buyers, not just foot traffic.
- 2. **Fix the preview text** before any future send; it must be human-readable copy, not a URL or token string.
- 3. **Inject 3–4 product tiles** in the "Shop Additional Styles" section — images with prices remove friction and drive clicks.
- 4. **Strengthen the birthday narrative**: One line of brand voice copy ("25 years of comfort — and we're passing the savings to you") would make the celebration feel intentional.
- 5. **Consolidate the utility block**: Pick one secondary action (app download or store finder, not both competing) and give it visual breathing room.
- | Priority | Issue | Fix |
- |---|---|---|
- | P0 | `[Test]:` prefix in subject | Remove before production send; strip internal campaign ID from subject |
- | P0 | SPF/DKIM unverifiable | Confirm DKIM signing is active for `emails.skechers.com` sending domain; check DMARC policy |
- | P1 | 13 HTTP image URLs on `image.emails.skechers.com` | Update CDN base URL to `https://` — likely a template-level variable |
- | P1 | Return Path pixel missing protocol | Change to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
- | P1 | ink1000 pixel is HTTP | Confirm `ink1000.com` supports HTTPS; update src accordingly |
- | P2 | Krux pixels fire without consent gate | Add suppression logic tied to subscriber consent flag before firing DMP pixels |
- | P2 | Missing alt text on 2 content images | Add descriptive `alt` attributes to `dde00662-...png` and `49468f73-...png` |
- | P3 | Duplicate media query blocks | Consolidate `@media (max-width: 375px)` and `@media (max-width: 640px)` rules |
- | P3 | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user accessibility scaling preferences |

## Full review
## 1. Executive Summary

A tight, locally-targeted birthday sale email for the Ridgewood, NY Skechers store. The core offer — Buy 2 Pairs, Get the 3rd Free — is clear and prominently placed. The email is functional but lean, with limited visual richness and virtually no product merchandising. For a sale-urgency email, it does the job; for a birthday celebration, it feels flat.

---

## 2. Business Impact Score: 5/10

The offer is compelling but the email fails to generate excitement or drive product discovery. Heavy reliance on text over visuals, minimal CTA hierarchy, and a shopping category grid that goes nowhere undercut what should be a high-converting event.

---

## 3. What's Working

- **Offer clarity**: "Buy 2 Pairs, Get the 3rd Free" reads immediately — no ambiguity.
- **Urgency framing**: "Limited Time Only 4/3 – 4/12" with the sale end date is well-placed directly beneath the offer.
- **Local personalization**: Store name (Skechers Ridgewood), address, and phone number are all visible. "Get Directions" CTA is appropriate for a retail-traffic email.
- **Hero visual**: The lifestyle image with colorful shoes is energetic and consistent with the birthday theme.
- **Compliance footer**: Unsubscribe and privacy links are present and legible.

---

## 4. What's Weak

- **No product imagery below the hero**: The "Shop Additional Styles" section is text-only category links (Women, Men, Kids, Wide). For a footwear brand with a broad catalog, this is a missed opportunity — there's nothing to aspire to or click through.
- **Birthday theme is underdeveloped**: The confetti banner and "Celebrate our birthday!" copy set an expectation the rest of the email doesn't meet. No exclusive birthday narrative, no special story, no warmth.
- **Single primary CTA**: "Get Directions" is the only real action button in the top half. There's no "Shop Now" CTA tied to the offer itself — a user who wants to buy online first has no obvious path.
- **Preview text is broken**: The preview line visible in the subject reads as a raw URL string and internal token (`vawpToken=EMGDS7B4MWOUFATY2BDEV2HLCI...`), not a teaser. This damages open-rate and looks unprofessional in any inbox.
- **App / utility module is low-signal**: The Download the App + Curbside Pickup + Shop Now Pay Later + Find a Store block is visually buried and poorly ordered — utility features competing with each other at the bottom with no hierarchy.
- **Klarna/Afterpay logos are tiny**: Pay-later options are present but too small to register as a value-add.

---

## 5. Recommendations

1. **Add a "Shop Sale" CTA** immediately below the offer block — capture online buyers, not just foot traffic.
2. **Fix the preview text** before any future send; it must be human-readable copy, not a URL or token string.
3. **Inject 3–4 product tiles** in the "Shop Additional Styles" section — images with prices remove friction and drive clicks.
4. **Strengthen the birthday narrative**: One line of brand voice copy ("25 years of comfort — and we're passing the savings to you") would make the celebration feel intentional.
5. **Consolidate the utility block**: Pick one secondary action (app download or store finder, not both competing) and give it visual breathing room.

---

## 6. Bottom Line

This email converts the minimum viable audience — local customers who already know the brand and just need the offer + location. It won't win new customers, drive online revenue, or generate excitement. Fixing the preview text is a P0 before the next send. Adding product imagery and an online CTA are the highest-leverage improvements for revenue impact.

---

## 7. Evidence

**Overall purpose**: Drive in-store traffic to the Ridgewood, NJ Skechers location during a birthday sale (4/3–4/12) with a BOGO-style offer.

**Hero / primary value proposition**: Large blue hero block with lifestyle image, "Celebrate our birthday! Skechers Ridgewood," offer copy (Buy 2, Get 3rd Free), and date range. Visually dominant and readable. Gets the job done.

**Membership / benefits section**: None present. No Skechers+ or loyalty program mention visible.

**Product discoverability / recommendation modules**: Minimal. "Shop Additional Styles" lists Women / Men / Kids / Wide as plain text links only. No product images, no featured styles, no prices.

**Utility / secondary modules**: Get Directions (button), Download the App (App Store + Google Play), Curbside Pickup, Shop Now Pay Later (Afterpay/Klarna logos), Find a Store. Functional but visually cluttered and low priority.

**Bugs / friction / clarity issues**:
- Preview text in the subject line renders as a raw URL/token string — visible and broken.
- No online shopping CTA tied to the primary offer.
- Category link section has no visual anchors — text-only in a visual medium.

---

## Technical Audit

## Technical Audit — Skechers Store Birthday Sale Email
**Campaign:** `RET_US_NA_U_STORE1423_ZIP_EN_04102026` | **Date:** 2026-04-10

---

### 1. Technical Summary

A store-targeted retail email with pervasive HTTP (non-HTTPS) image sourcing across the `image.emails.skechers.com` CDN and a third-party pixel, creating mixed-content risk. A "[Test]:" subject prefix and unverifiable SPF/DKIM status are the two highest-severity production blockers.

---

### 2. Link & Tracking Issues

**[BLOCKER] "[Test]:" prefix in subject line**
The subject reads `[Test]: RET_US_NA_U_STORE1423_ZIP_EN_04102026SALE Ends Soon!...` — the test label and internal campaign ID are exposed to recipients if deployed as-is.

**[WARN] Return Path seed pixel missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1...">
```
No `https://` prefix. Browsers and email clients will treat this as a relative path, silently breaking inbox placement monitoring.

**[WARN] Third-party Krux/DMP pixels fire unconditionally**
Three `beacon.krxd.net` pixels (user-match × 2 + ad impression) load on open with no consent gate. If any recipients are in GDPR/CCPA jurisdictions, this is a compliance exposure — Krux pixels set cookies and transmit hashed PII (`partner_uid` contains a SHA-256 hash).

**[INFO] 28 click-redirect links** routed through `click.emails.skechers.com` — standard ESP redirect, not auditable without live probe.

---

### 3. Rendering & Accessibility

**[HIGH] Systemic HTTP image sourcing — 13 affected assets**
All `image.emails.skechers.com` hosted images use `http://` not `https://`. Modern clients (Gmail, Outlook 365, Apple Mail) proxy or block non-HTTPS images. Affected examples:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...png  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-...png  (YouTube)
```

**[WARN] ink1000 third-party pixel also HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8021648903&mi_ecmp=...
```
Mixed-content, no alt text, no `display:none` or `width:0/height:0` to suppress screen reader exposure.

**[WARN] Missing alt text on 3 images**
- `o.gif` (ink1000 pixel) — tracking pixel with empty `alt=""` would be acceptable, but currently absent
- `dde00662-169f-447d-b0e2-fc65f6c2290c.png` — content image, no alt
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image, no alt

**[INFO] `-webkit-text-size-adjust: none`** set globally suppresses user font scaling on iOS — an accessibility concern for low-vision users.

**[INFO]** Duplicate `@media (max-width: 480px)` and `@media (max-width: 640px)` blocks with identical rules. No rendering bug, but unnecessary payload weight.

---

### 4. Personalization & Merge Tokens

No unresolved merge token literals detected in the visible HTML (e.g., no `%%FIRSTNAME%%` or `{{variable}}` fallbacks exposed). Store-specific data (`STORE1423`, `Ridgewood`, `ZIP`) appears statically baked into this send rather than dynamically injected, which is expected for a ZIP-targeted deployment. No issues found.

---

### 5. Compliance

**[BLOCKER] SPF/DKIM authentication status unverifiable**
QA reports: `Authentication-Results header not found`. Cannot confirm the email authenticates as `emails.skechers.com`. If DKIM is absent or misaligned, inbox placement and DMARC enforcement are at risk.

**[WARN] Krux third-party pixel PII transmission without consent signal**
`partner_uid=c30973d6f4e31a55c5dcae7d3c3df0d73fcb04747ff44220a92abd05cee475c2` in the pixel URL appears to be a SHA-256 hash of subscriber PII. Unconditional firing on open lacks a visible consent/suppression mechanism for regulated jurisdictions.

**[INFO]** CAN-SPAM physical address and unsubscribe link presence could not be verified from the truncated HTML — these must be confirmed in the full template footer.

---

### 6. Email-to-Site Continuity

Click links pass through `click.emails.skechers.com` redirect, which should append UTM parameters before forwarding — this is the standard Salesforce Marketing Cloud pattern. However, UTM parameter presence on destination URLs cannot be confirmed without resolving the redirects (skipped by QA). Campaign ID `RET_US_NA_U_STORE1423_ZIP_EN_04102026` is consistently embedded across all tracking pixels, indicating proper campaign tagging at the pixel layer.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| P0 | `[Test]:` prefix in subject | Remove before production send; strip internal campaign ID from subject |
| P0 | SPF/DKIM unverifiable | Confirm DKIM signing is active for `emails.skechers.com` sending domain; check DMARC policy |
| P1 | 13 HTTP image URLs on `image.emails.skechers.com` | Update CDN base URL to `https://` — likely a template-level variable |
| P1 | Return Path pixel missing protocol | Change to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
| P1 | ink1000 pixel is HTTP | Confirm `ink1000.com` supports HTTPS; update src accordingly |
| P2 | Krux pixels fire without consent gate | Add suppression logic tied to subscriber consent flag before firing DMP pixels |
| P2 | Missing alt text on 2 content images | Add descriptive `alt` attributes to `dde00662-...png` and `49468f73-...png` |
| P3 | Duplicate media query blocks | Consolidate `@media (max-width: 375px)` and `@media (max-width: 640px)` rules |
| P3 | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user accessibility scaling preferences |
## Recent history

- [[2026-04-11-test-pro-us-na-u-sitebundle-full-en-04092026step-into-the-right-shoes-for-right-]] — 5/10 (2026-04-08)
- [[2026-04-08-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04092026step-into-the-right-shoes-for]] — 5/10 (2026-04-08)
- [[2026-04-08-test-pro-us-nonpur180-u-sitebundle-nonpurch-en-04092026the-right-pair-to-start-w]] — 4/10 (2026-04-08)

