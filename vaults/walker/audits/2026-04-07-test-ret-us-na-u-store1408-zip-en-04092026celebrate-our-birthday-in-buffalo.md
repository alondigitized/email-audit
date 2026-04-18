---
slug: 2026-04-07-test-ret-us-na-u-store1408-zip-en-04092026celebrate-our-birthday-in-buffalo
type: email
date: 2026-04-07
persona: walker
score: "5/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1408_ZIP_EN_04092026Celebrate our Birthday in Buffalo"
tags: [email, score-5, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1408_ZIP_EN_04092026Celebrate our Birthday in Buffalo
**Score:** 5/10 · **Type:** Email audit · **2026-04-07**
## Executive summary

- This is a localized store birthday sale email promoting a "Buy 2 Pairs Get the 3rd Free" deal at the Skechers Buffalo location (Tops Elmwood Plaza), valid April 10–19. The core offer is clear and compelling, and the store details are present. However, the email is thin on visual merchandising, and a critical pre-send issue is visible in the metadata: the subject line is still prefixed with `[Test]:`, indicating this should not be in market yet. The email functions adequately as a local event driver but falls short as a commercial email experience.
- Strong offer, weak execution. The BOGO-adjacent deal has real pull, but the render doesn't do enough to make it feel celebratory or showcase the product range that would justify a trip to the store.

## What's working

- **Offer clarity**: "BUY 2 PAIRS GET THE 3RD FREE" is prominent, bold, and easy to parse at a glance.
- **Urgency**: Date range (4/10–4/19) is clearly communicated immediately below the offer.
- **Local relevance**: Store address and phone number are visible — right info, right place.
- **CTA specificity**: "GET DIRECTIONS" is an appropriately functional CTA for a store-drive email.
- **Payment options**: AfterPay and Klarna logos are present, which can lower conversion friction.

## What's weak

- **Test prefix in subject line**: `[Test]:` is still in the subject line — this email is not deployment-ready.
- **Hero image is undersized and generic**: The Skechers Cozy Fit banner is small and doesn't visually convey "birthday celebration" energy. The confetti treatment above and below feels disconnected from the imagery.
- **No product photography below the fold**: The "SHOP ADDITIONAL STYLES" module is just four plain text links (WOMEN, MEN, KIDS, WIDE) with no imagery. This is a significant missed opportunity — a deal this strong deserves visual product proof.
- **Thin birthday theming**: The confetti dots are subtle. Outside of the headline, nothing in the visual treatment says "birthday." No bold color, no festive personality, no product styled to the occasion.
- **App/curbside/utility block feels orphaned**: The lower utility section (app download, curbside pickup, shop now/pay later) is functional but generic and not tied to the birthday offer in any way.

## Recommendations

- 1. **Do not deploy with `[Test]:` in the subject line.** Strip the test prefix before sending.
- 2. **Add at least one product grid** (3–4 images) below the hero to give recipients something to click toward beyond directions.
- 3. **Elevate the birthday creative**: bolder colors, a more celebratory hero image, or on-brand birthday messaging that carries through the full email — not just the headline.
- 4. **Tie the utility section to the offer**: something like "Order online, pick up in-store before the sale ends" would connect curbside pickup to the urgency of the campaign.
- 5. **Revisit the hero image size**: the Cozy Fit graphic is too compressed for the top position. The primary image should be larger and more visually arresting.
- | Priority | Issue | Fix |
- |---|---|---|
- | **High** | 12 images served over HTTP from `image.emails.skechers.com` | Change all `http://image.emails.skechers.com` references to `https://` in the template |
- | **High** | ink1000 open pixel over HTTP | Update pixel URL to HTTPS or replace with SFMC native open tracking |
- | **High** | SPF/DKIM authentication unconfirmed | Pull full received headers from a seed inbox and verify `Authentication-Results` before go-live |
- | **Medium** | `[Test]:` subject line prefix | Strip before production deployment |
- | **Medium** | 2 content images missing alt text | Add descriptive alt text to `dde00662` and `49468f73` images |
- | **Medium** | UTM pass-through unverified | Decode 2–3 click redirect URLs and confirm UTM params reach landing pages |
- | **Low** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user font-size accessibility controls |
- | **Low** | Krxd DMP sync pixels | Confirm disclosure in privacy policy; verify these are gated on consent where applicable |

## Full review
## Email Review: Skechers Birthday Sale — Store 1408 Buffalo (Tops Elmwood Plaza)

---

### 1. Executive Summary

This is a localized store birthday sale email promoting a "Buy 2 Pairs Get the 3rd Free" deal at the Skechers Buffalo location (Tops Elmwood Plaza), valid April 10–19. The core offer is clear and compelling, and the store details are present. However, the email is thin on visual merchandising, and a critical pre-send issue is visible in the metadata: the subject line is still prefixed with `[Test]:`, indicating this should not be in market yet. The email functions adequately as a local event driver but falls short as a commercial email experience.

---

### 2. Business Impact Score: 5/10

Strong offer, weak execution. The BOGO-adjacent deal has real pull, but the render doesn't do enough to make it feel celebratory or showcase the product range that would justify a trip to the store.

---

### 3. What's Working

- **Offer clarity**: "BUY 2 PAIRS GET THE 3RD FREE" is prominent, bold, and easy to parse at a glance.
- **Urgency**: Date range (4/10–4/19) is clearly communicated immediately below the offer.
- **Local relevance**: Store address and phone number are visible — right info, right place.
- **CTA specificity**: "GET DIRECTIONS" is an appropriately functional CTA for a store-drive email.
- **Payment options**: AfterPay and Klarna logos are present, which can lower conversion friction.

---

### 4. What's Weak

- **Test prefix in subject line**: `[Test]:` is still in the subject line — this email is not deployment-ready.
- **Hero image is undersized and generic**: The Skechers Cozy Fit banner is small and doesn't visually convey "birthday celebration" energy. The confetti treatment above and below feels disconnected from the imagery.
- **No product photography below the fold**: The "SHOP ADDITIONAL STYLES" module is just four plain text links (WOMEN, MEN, KIDS, WIDE) with no imagery. This is a significant missed opportunity — a deal this strong deserves visual product proof.
- **Thin birthday theming**: The confetti dots are subtle. Outside of the headline, nothing in the visual treatment says "birthday." No bold color, no festive personality, no product styled to the occasion.
- **App/curbside/utility block feels orphaned**: The lower utility section (app download, curbside pickup, shop now/pay later) is functional but generic and not tied to the birthday offer in any way.

---

### 5. Recommendations

1. **Do not deploy with `[Test]:` in the subject line.** Strip the test prefix before sending.
2. **Add at least one product grid** (3–4 images) below the hero to give recipients something to click toward beyond directions.
3. **Elevate the birthday creative**: bolder colors, a more celebratory hero image, or on-brand birthday messaging that carries through the full email — not just the headline.
4. **Tie the utility section to the offer**: something like "Order online, pick up in-store before the sale ends" would connect curbside pickup to the urgency of the campaign.
5. **Revisit the hero image size**: the Cozy Fit graphic is too compressed for the top position. The primary image should be larger and more visually arresting.

---

### 6. Bottom Line

The promotional mechanics are solid — good offer, right store info, correct CTA. But this reads as a functional transactional notice, not a birthday celebration. The product discovery is nearly nonexistent below the fold, and the test prefix in the subject line means this cannot go out as-is. Fix the subject line, add product imagery, and punch up the creative before deploying.

---

### 7. Evidence

**Overall purpose**: Drive in-store traffic to Skechers Buffalo (Tops Elmwood Plaza) for a birthday sale event, April 10–19.

**Hero / primary value proposition**: "Buy 2 Pairs Get the 3rd Free" — well-positioned and readable. The Skechers Cozy Fit banner is present but compact and doesn't carry the visual weight the offer deserves.

**Membership / benefits section**: None visible. No loyalty or Skechers Rewards mention in this render.

**Product discoverability / recommendation modules**: Extremely limited. "SHOP ADDITIONAL STYLES" contains only four text links (WOMEN, MEN, KIDS, WIDE) — no product images, no featured items, no curated picks tied to the birthday theme.

**Utility / secondary modules**: App download (App Store + Google Play), Curbside Pickup, Shop Now Pay Later (AfterPay + Klarna), Find a Store. All present and functional-looking, though visually dense and disconnected from the primary campaign narrative.

**Bugs / friction / clarity issues**:
- `[Test]:` prefix is visible in the subject line — deployment blocker.
- Preview text in the email metadata renders as a raw URL string, which would appear broken or suspicious to recipients who see preview text in their inbox client.
- No visible broken images or overlapping text in the render itself.

---

## Technical Audit

## Technical Audit — Skechers Birthday Store Email
**Campaign:** `RET_US_NA_U_STORE1408_ZIP_EN_04092026` | **Date:** 2026-04-09

---

### 1. Technical Summary
The email has a widespread HTTP image hosting problem across `image.emails.skechers.com` and a third-party pixel domain, both of which will trigger mixed-content blocking in modern clients. SPF/DKIM authentication status could not be confirmed via the AgentMail relay.

---

### 2. Link & Tracking Issues

**28 tracking links unverified** — All click-through links route through `click.emails.skechers.com` (Salesforce Marketing Cloud redirect). Destination URLs were not probed; no broken links confirmed, but also not cleared.

**Third-party pixel via HTTP** — `ink1000.com` open-tracking pixel is served over plain HTTP:
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=9012945763&mi_ecmp=RET_US_NA_U_STORE1408_ZIP_EN_04092026
```
This will be blocked by Gmail, Apple Mail, and most modern clients under mixed-content rules, breaking open-rate attribution for this third-party system.

**Krxd.net sync pixels** — Two user-match beacons and one ad-impression beacon fire from `beacon.krxd.net` on open. These are data-syndication pixels (Salesforce/Krux DMP). Confirm these are intentional and disclosed in privacy policy.

---

### 3. Rendering & Accessibility

**HTTP image sources — 12 affected assets** across `image.emails.skechers.com`. All footer and utility images are served over HTTP, not HTTPS:

| Asset | URL |
|---|---|
| `dde00662...` (content image) | `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png` |
| `49468f73...` (content image) | `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png` |
| App Store badge | `http://image.emails.skechers.com/lib/.../0ec56c9f-....png` |
| Google Play badge | `http://image.emails.skechers.com/lib/.../9bb508d0-....png` |
| Curbside Pickup, AfterPay, Find A Store, Instagram, Facebook, YouTube icons | `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/...` |

Mixed-content blocking will cause these images to fail silently in secured email clients (Gmail web, Apple Mail 16+, Outlook.com). The CDN at `image.emails.skechers.com` should already support HTTPS — this is a template configuration issue.

**Missing alt text — 3 images:**
- `o.gif` (ink1000 open pixel) — low severity, tracking pixel
- `dde00662-169f-447d-b0e2-fc65f6c2290c.png` — content image, alt text required for accessibility and image-off rendering
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image, same issue

The two content images without alt text will render as broken images with no fallback text when images are disabled (common in Outlook desktop).

**`-webkit-text-size-adjust: none`** set globally in `<style>`. This suppresses user font-size adjustments on iOS, which is an accessibility concern for low-vision users and will fail WCAG 1.4.4 (Resize Text).

---

### 4. Personalization & Merge Tokens

**Subject line contains test prefix:** `[Test]:` — confirms this is a seed/QA send, not production. Verify this prefix is stripped before live deployment.

**Campaign ID in pixel confirms store targeting:** `campaignid=RET_US_NA_U_STORE1408_ZIP_EN_04092026` — store 1408 / ZIP targeting is correctly reflected in all tracking parameters. No unrendered merge token strings (`%%`, `{{`, `${`) detected in the truncated source.

---

### 5. Compliance

**SPF/DKIM unverifiable** — `Authentication-Results` header was not present in the relay capture. Cannot confirm SPF pass or DKIM signature validity. This must be verified against actual received headers before deployment.

**Sender domain alignment:** From address is `no-reply@emails.skechers.com`; click domain is `click.emails.skechers.com`; image domain is `image.emails.skechers.com`. All subdomains of `skechers.com` — DMARC alignment should pass if SPF/DKIM are correctly configured on `emails.skechers.com`.

**Unsubscribe / CAN-SPAM:** Cannot confirm from truncated HTML whether a physical mailing address and unsubscribe link are present in the footer. These are required by CAN-SPAM. The template structure suggests a standard SFMC footer is appended, but this must be verified in the full source.

---

### 6. Email-to-Site Continuity

**UTM parameters not verifiable** — All 28 destination links are wrapped in `click.emails.skechers.com` redirects and were not resolved. Cannot confirm UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are appended to landing page URLs. The SFMC click-tracking wrapper should be passing these through — validate against decoded redirect targets.

**Campaign ID consistency:** The campaign ID `RET_US_NA_U_STORE1408_ZIP_EN_04092026` is consistently applied across the SFMC open pixel, the Krxd ad-impression beacon, and the ink1000 pixel. No mismatches detected.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **High** | 12 images served over HTTP from `image.emails.skechers.com` | Change all `http://image.emails.skechers.com` references to `https://` in the template |
| **High** | ink1000 open pixel over HTTP | Update pixel URL to HTTPS or replace with SFMC native open tracking |
| **High** | SPF/DKIM authentication unconfirmed | Pull full received headers from a seed inbox and verify `Authentication-Results` before go-live |
| **Medium** | `[Test]:` subject line prefix | Strip before production deployment |
| **Medium** | 2 content images missing alt text | Add descriptive alt text to `dde00662` and `49468f73` images |
| **Medium** | UTM pass-through unverified | Decode 2–3 click redirect URLs and confirm UTM params reach landing pages |
| **Low** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user font-size accessibility controls |
| **Low** | Krxd DMP sync pixels | Confirm disclosure in privacy policy; verify these are gated on consent where applicable |
## Recent history

- [[2026-04-07-you-ll-love-starting-spring-in-skechers-sandals]] — 6.5/10 (2026-04-07)
- [[2026-04-07-what-s-that-comin-down-the-track]] — 6/10 (2026-04-07)
- [[2026-04-07-your-items-are-waiting]] — 5.5/10 (2026-04-07)

