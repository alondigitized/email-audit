---
slug: 2026-04-11-test-pro-us-retpurl24-u-sitebundle-retail-en-04052026two-ways-to-save-during-the
type: email
date: 2026-04-03
persona: walker
score: "4/10"
sender: SKECHERS
subject: "[Test]: PRO_US_RETPURL24_U_SITEBUNDLE_RETAIL_EN_04052026Two Ways to Save During the Spring Fling Sale"
tags: [email, score-4, sender/skechers]
---
# [Test]: PRO_US_RETPURL24_U_SITEBUNDLE_RETAIL_EN_04052026Two Ways to Save During the Spring Fling Sale
**Score:** 4/10 · **Type:** Email audit · **2026-04-03**
## Executive summary

- A competent Spring sale catalog email undermined by a critical deployment error and weak preview/subject execution. The BOGO 50% off mechanic is visually clear in the hero, but the email promises "two ways to save" and doesn't make both offers legibly distinct in the body. The four gender-segmented product sections are clean and logically ordered but produce a repetitive, low-urgency scroll. The subject line carries a `[Test]:` tag and a raw campaign code, and the preview text renders as raw tracking URLs — both are inbox-level credibility problems visible before the email is even opened.
- The deployment errors alone cap the ceiling. Even setting those aside, the email lacks urgency cues and doesn't convert the "two ways to save" headline into a clear dual-offer structure.

## What's working

- **Hero offer is legible.** "BUY ONE GET ONE 50% OFF" is large, high-contrast, and immediately readable.
- **Spring-appropriate product photography.** Sandals, espadrilles, and slides are seasonally on-point and visually appealing.
- **Gender segmentation is logical and scannable.** Women's → Men's → Girls' → Boys' flows naturally for a family footwear brand.
- **Category nav bar is a good addition.** The secondary "Shop Additional Styles" row (Women / Men / Kids / Clothing / New Arrivals / Sale) gives power shoppers a direct path without scrolling.
- **Utility module stack is solid.** Text signup, curbside pickup, app download, and store finder cover omnichannel touchpoints efficiently.

## What's weak

- **`[Test]:` in the subject line.** This is a live deployment with a test flag exposed to recipients. Immediate credibility hit.
- **Raw tracking URL in preview text.** The preview renders as a Skechers domain URL string — not copy. Recipients see technical noise instead of a value hook before opening.
- **"Two Ways to Save" isn't delivered.** The subject promises dual savings mechanics, but the body only makes one offer (BOGO 50%) visually prominent. If there's a second offer, it's invisible in the render.
- **No urgency signals anywhere in the scroll.** No countdown timer, no end-date callout, no "limited time" label. This is a sale email with no sale deadline.
- **Four nearly identical section layouts create visual monotony.** Each gender section is the same: script header, product photo, single CTA. There's no variation in layout or offer emphasis to re-engage attention during the scroll.
- **Script fonts on section headers are thin and low-contrast.** "Women's," "Men's," "Girls'," "Boys'" in the cursive typeface read fine at large size but feel decorative rather than navigational.

## Recommendations

- 1. **Remove `[Test]:` and the campaign code from the subject before any resend.** Subject should read: *Two Ways to Save During the Spring Fling Sale* — nothing else.
- 2. **Replace the preview text with actual copy.** Use the second savings mechanic or a reinforcing hook: *"BOGO 50% off + free shipping — Spring Fling ends soon."*
- 3. **Add a sale end date or countdown to the hero.** Even a static "*Offer ends Sunday*" line dramatically increases urgency.
- 4. **Make both savings offers visible in the hero or a dedicated second module.** If there are two offers, show two distinct callouts. If there's only one offer, fix the subject line.
- 5. **Break the repetition in the product sections.** Vary layout (e.g., feature a top product per section, add a "Staff Pick" label) to sustain engagement across the scroll.
- 6. **Increase contrast on section headers.** Either bold the script or switch to a sans-serif label so the gender navigational anchors are easier to skim at speed.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | `[Test]:` subject prefix in send | Strip test prefix; fix template concatenation that merged campaign ID into subject |
- | **P0** | Return Path pixel missing `https://` scheme | Change `src="pixel.app.returnpath.net/..."` → `src="https://pixel.app.returnpath.net/..."` |
- | **P1** | 14 HTTP image URLs | Migrate all `image.emails.skechers.com` assets to `https://` |
- | **P1** | Authentication-Results unavailable | Verify SPF/DKIM/DMARC records for `emails.skechers.com` are passing; obtain header data from ESP |
- | **P1** | UTM parameters unverifiable | Audit 26 redirect destinations for `utm_source`, `utm_medium`, `utm_campaign` values |
- | **P2** | 5 images missing `alt` text | Add descriptive `alt` values to all content images; use `alt=""` for decorative-only images |
- | **P2** | Malformed `<meta>` tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to respective meta tags |
- | **P2** | Krux DMP pixel data sharing | Confirm privacy policy discloses cross-site ID sharing via `beacon.krxd.net` |
- | **P3** | Footer CAN-SPAM elements | Provide full HTML to confirm unsubscribe link and physical mailing address are present |

## Full review
### 1. Executive Summary

A competent Spring sale catalog email undermined by a critical deployment error and weak preview/subject execution. The BOGO 50% off mechanic is visually clear in the hero, but the email promises "two ways to save" and doesn't make both offers legibly distinct in the body. The four gender-segmented product sections are clean and logically ordered but produce a repetitive, low-urgency scroll. The subject line carries a `[Test]:` tag and a raw campaign code, and the preview text renders as raw tracking URLs — both are inbox-level credibility problems visible before the email is even opened.

---

### 2. Business Impact Score: **4 / 10**

The deployment errors alone cap the ceiling. Even setting those aside, the email lacks urgency cues and doesn't convert the "two ways to save" headline into a clear dual-offer structure.

---

### 3. What's Working

- **Hero offer is legible.** "BUY ONE GET ONE 50% OFF" is large, high-contrast, and immediately readable.
- **Spring-appropriate product photography.** Sandals, espadrilles, and slides are seasonally on-point and visually appealing.
- **Gender segmentation is logical and scannable.** Women's → Men's → Girls' → Boys' flows naturally for a family footwear brand.
- **Category nav bar is a good addition.** The secondary "Shop Additional Styles" row (Women / Men / Kids / Clothing / New Arrivals / Sale) gives power shoppers a direct path without scrolling.
- **Utility module stack is solid.** Text signup, curbside pickup, app download, and store finder cover omnichannel touchpoints efficiently.

---

### 4. What's Weak

- **`[Test]:` in the subject line.** This is a live deployment with a test flag exposed to recipients. Immediate credibility hit.
- **Raw tracking URL in preview text.** The preview renders as a Skechers domain URL string — not copy. Recipients see technical noise instead of a value hook before opening.
- **"Two Ways to Save" isn't delivered.** The subject promises dual savings mechanics, but the body only makes one offer (BOGO 50%) visually prominent. If there's a second offer, it's invisible in the render.
- **No urgency signals anywhere in the scroll.** No countdown timer, no end-date callout, no "limited time" label. This is a sale email with no sale deadline.
- **Four nearly identical section layouts create visual monotony.** Each gender section is the same: script header, product photo, single CTA. There's no variation in layout or offer emphasis to re-engage attention during the scroll.
- **Script fonts on section headers are thin and low-contrast.** "Women's," "Men's," "Girls'," "Boys'" in the cursive typeface read fine at large size but feel decorative rather than navigational.

---

### 5. Recommendations

1. **Remove `[Test]:` and the campaign code from the subject before any resend.** Subject should read: *Two Ways to Save During the Spring Fling Sale* — nothing else.
2. **Replace the preview text with actual copy.** Use the second savings mechanic or a reinforcing hook: *"BOGO 50% off + free shipping — Spring Fling ends soon."*
3. **Add a sale end date or countdown to the hero.** Even a static "*Offer ends Sunday*" line dramatically increases urgency.
4. **Make both savings offers visible in the hero or a dedicated second module.** If there are two offers, show two distinct callouts. If there's only one offer, fix the subject line.
5. **Break the repetition in the product sections.** Vary layout (e.g., feature a top product per section, add a "Staff Pick" label) to sustain engagement across the scroll.
6. **Increase contrast on section headers.** Either bold the script or switch to a sans-serif label so the gender navigational anchors are easier to skim at speed.

---

### 6. Bottom Line

This email would be a 6–7 with clean deployment. The product photography is good, the BOGO offer is clear, and the multi-gender structure is appropriate for the catalog. But the `[Test]:` subject leak and URL-as-preview-text are not cosmetic — they erode trust before the email is opened. Pair that with an undelivered "two ways to save" headline and zero urgency signaling, and the conversion potential is significantly below what the offer itself could drive.

---

### 7. Evidence

**Overall purpose:** Spring seasonal sale promotion centered on a BOGO 50% off offer, structured as a multi-gender product catalog with utility modules for omnichannel engagement.

**Hero / primary value proposition:** Yellow/warm-toned hero banner with spring sandals and a large "BUY ONE GET ONE 50% OFF" lockup. CTA reads "SHOP NOW." Offer is clear but there is no supporting urgency (no deadline, no exclusion note visible).

**Membership / benefits section:** Not present in this email. No loyalty points callout, no Elite member exclusive offer.

**Product discoverability / recommendation modules:** Four gender sections — Women's, Men's, Girls', Boys' — each with a single product hero image and a CTA button (SHOP WOMEN'S, SHOP MEN'S, SHOP GIRLS', SHOP BOYS'). Supplemented by a text-link category bar (Women / Men / Kids / Clothing / New Arrivals / Sale). No personalized recommendations, bestsellers, or curated picks visible.

**Utility / secondary modules:** Bottom stack includes: "Let's Get Texting" SMS opt-in, Curbside Pickup callout, Skechers Go Walk app download, Find a Store link, social follow icons (appears to be Facebook, Instagram, Twitter/X, YouTube, Pinterest). Footer includes legal fine print.

**Bugs / friction / clarity issues (visible in render):**
- `[Test]:` prefix in the subject line — live deployment error.
- Preview text renders as a raw tracking URL (`https://view.emails.skechers.com/?vawpToken=...`) instead of marketing copy — visible in the provided metadata.
- "Two Ways to Save" in the subject is not substantiated by any visible second offer in the email body.

---

## Technical Audit

## Technical Audit — SKECHERS Spring Fling Sale Email

---

### 1. Technical Summary

This is a test send with a production-blocking subject line prefix (`[Test]:`) still present. The email has 14 HTTP image assets that will be blocked by modern email clients, 5 images missing alt text, and an unverifiable authentication chain at the relay layer.

---

### 2. Link & Tracking Issues

**Tracking pixel — missing protocol**
```
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
The Return Path/Validity inbox monitoring pixel is missing the `https://` scheme. This will render as a broken relative URL in most email clients and fail to fire, breaking inbox placement monitoring.

**Third-party DMP pixel — subscriber ID exposure**
```
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=7187828
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=af077ed316c5f351...
```
Two Krux/Salesforce DMP user-match pixels are present. One passes a raw subscriber ID (`7187828`), the other a SHA-256 hashed identifier. This is cross-site data sharing; confirm it is disclosed in the privacy policy and permissible under applicable regulations.

**26 click-redirect links unverified**
All CTA links use `click.emails.skechers.com` with encrypted `?qs=eyJ...` payloads. Destination URLs and UTM parameters cannot be audited without following the redirect chain. Automated probe was skipped for all 26.

---

### 3. Rendering & Accessibility

**14 images served over HTTP — will be blocked**

All content images from `image.emails.skechers.com` use HTTP, not HTTPS. Gmail, Outlook.com, and Apple Mail proxy or block mixed-content images. Affected assets include:

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/d76a5487-...png  (Twitter)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...png  (Facebook)
... (7 additional assets)
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif  (tracking pixel)
```

**5 images missing `alt` text**

| Asset | Source |
|---|---|
| `o.gif` | `http://www.ink1000.com/...` |
| `49468f73-...png` | `http://image.emails.skechers.com/...` |
| `00100b23-...png` | `http://image.emails.skechers.com/...` |
| `fc08601a-...png` | `http://image.emails.skechers.com/...` |

Missing alt text fails WCAG 2.1 SC 1.1.1 and degrades the experience when images are blocked (the default for many recipients).

**Malformed `<meta>` tags**
```html
<meta content="text/html; charset=utf-8" />          <!-- missing http-equiv -->
<meta content="IE=Edge" />                            <!-- missing http-equiv -->
```
Both tags omit the required `http-equiv` attribute. The charset declaration in particular may cause rendering issues in older clients if the HTTP header is absent.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%FIRST_NAME%%`, `{{name}}`) detected in the visible HTML source. No issues found.

---

### 5. Compliance

**Subject line contains `[Test]:` prefix — production blocker**
```
Subject: [Test]: PRO_US_RETPURL24_U_SITEBUNDLE_RETAIL_EN_04052026Two Ways to Save...
```
The test-send prefix was not stripped before this send. Additionally, the campaign ID (`PRO_US_RETPURL24_U_SITEBUNDLE_RETAIL_EN_04052026`) is concatenated directly into the subject with no separator, suggesting a template configuration error.

**Authentication-Results not verifiable**
SPF/DKIM/DMARC pass/fail status cannot be confirmed — the `Authentication-Results` header was not present in the data passed through the AgentMail relay. Deliverability impact is unknown without this data.

**Unsubscribe and physical address** — HTML source was truncated; footer content was not available for inspection. Cannot confirm CAN-SPAM compliance (unsubscribe mechanism, sender physical address) from the provided source. This must be verified against the full HTML.

---

### 6. Email-to-Site Continuity

All 26 CTAs use opaque encrypted redirect URLs (`?qs=eyJ...`). UTM parameters — if present — are encoded inside the ciphertext and cannot be verified without live link traversal. There is no evidence of raw UTM params (`utm_source`, `utm_medium`, `utm_campaign`) appended to destination URLs in the available source.

**Risk:** If UTM parameters are missing or misconfigured inside the redirect, all session attribution from this send will be lost in analytics.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | `[Test]:` subject prefix in send | Strip test prefix; fix template concatenation that merged campaign ID into subject |
| **P0** | Return Path pixel missing `https://` scheme | Change `src="pixel.app.returnpath.net/..."` → `src="https://pixel.app.returnpath.net/..."` |
| **P1** | 14 HTTP image URLs | Migrate all `image.emails.skechers.com` assets to `https://` |
| **P1** | Authentication-Results unavailable | Verify SPF/DKIM/DMARC records for `emails.skechers.com` are passing; obtain header data from ESP |
| **P1** | UTM parameters unverifiable | Audit 26 redirect destinations for `utm_source`, `utm_medium`, `utm_campaign` values |
| **P2** | 5 images missing `alt` text | Add descriptive `alt` values to all content images; use `alt=""` for decorative-only images |
| **P2** | Malformed `<meta>` tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to respective meta tags |
| **P2** | Krux DMP pixel data sharing | Confirm privacy policy discloses cross-site ID sharing via `beacon.krxd.net` |
| **P3** | Footer CAN-SPAM elements | Provide full HTML to confirm unsubscribe link and physical mailing address are present |
## Recent history

- [[2026-04-03-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04052026spring-fling-sale-double-the-]] — 5/10 (2026-04-03)
- [[2026-04-03-test-pro-us-nonpur180-u-sitebundle-nonpurch-en-04052026take-your-pick-during-the]] — 5/10 (2026-04-03)
- [[2026-04-03-discover-the-support-you-ve-been-looking-for]] — 5/10 (2026-04-03)

