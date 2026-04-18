---
slug: 2026-04-10-test-pro-us-retpuropen-u-sitebundle-retail-en-04122026spring-favorites-just-a-cl
type: email
date: 2026-04-10
persona: walker
score: "4/10"
sender: SKECHERS
subject: "[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04122026Spring Favorites - Just a Click Away"
tags: [email, score-4, sender/skechers]
---
# [Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04122026Spring Favorites - Just a Click Away
**Score:** 4/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- This is a straightforward promotional email anchored on a BOGO 50% off (or 20% off 1 item) Spring Fling Sale offer, organized by gender/age category. The layout is clean and functional. However, this email has critical pre-send issues that would be embarrassing in a live deployment: a raw internal campaign code in the subject line, raw JSON-LD markup leaking into the preview text, and what appears to be a QA artifact ("LET'S GET TESTING") visible in the body. None of these are ready for consumer audiences.
- The underlying campaign concept and structure are solid. The score tanks entirely on execution — the subject line is unusable as-is, the preview text is actively broken, and a test module appears in the email body.

## What's working

- **Offer clarity.** BOGO 50% off is legible and prominent in the hero. The alternative "or 20% off 1 item" is also visible without cluttering the headline.
- **Category structure.** Women → Men → Girls → Boys flows logically. Each section has a single product shot and a clear CTA button. No guesswork for the recipient about where to click.
- **Spring Fling branding.** The yellow "SPRING FLING SALE" banner creates consistent visual framing at the top and repeats below the hero, reinforcing the campaign without being overbearing.
- **Secondary navigation.** The "Shop Additional Styles" text block (Women / Men / Kids / Clothing / New Arrivals / Sale) gives quick access to categories outside the gender-specific modules.
- **Footer utility.** App download, Find a Store, and Counter Pickup are all present and visible.

## What's weak

- **Subject line is broken.** "[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04122026Spring Favorites..." — the internal campaign code is fully exposed with no separator, and "[Test]:" prefix is consumer-facing. This would tank open rates and flag as spam.
- **Preview text is raw JSON-LD.** The inbox preview reads as `[{ "@context": "http://schema.org/"...` — structured data markup that was never suppressed. First impression for every recipient is gibberish.
- **"LET'S GET TESTING" module.** A visible QA or testing element appears in the body above the footer. This should not exist in any consumer-facing send.
- **Product shots are small and generic.** Each category gets one shoe on a white background. Given this is a "Spring Favorites" angle, there's no lifestyle context, color story, or editorial energy — it reads more like a clearance grid than a spring campaign.
- **No price anchoring.** No product names, price points, or "starting at $X" callouts appear anywhere. The offer is clear, but there's nothing to anchor the value of what's being discounted.

## Recommendations

- 1. **Do not send.** Strip the [Test] prefix, clean the subject line to something like "Spring Fling Sale: Buy One, Get One 50% Off," and remove the campaign code entirely.
- 2. **Fix the preview text immediately.** Suppress or replace the JSON-LD so the inbox preview reads as human copy.
- 3. **Remove the QA testing module** from the email body before any live deployment.
- 4. **Add a "Starting at $X" or price point** to at least one module — it contextualizes the BOGO offer and reduces friction before the click.
- 5. **Upgrade the hero photography.** A spring campaign should feel seasonal. Flat product-on-white works for PDP; a hero deserves lifestyle context (outdoor, color, movement).
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Empty greeting (`Hi ,`) | Add first-name fallback to merge tag before send |
- | **P0** | `[Test]:` subject prefix | Remove; also remove exposed campaign ID from subject |
- | **P1** | 13 HTTP image URLs | Migrate all `image.emails.skechers.com` assets to HTTPS; update Movable Ink pixel to HTTPS |
- | **P1** | Movable Ink pixel blocked | Dynamic content will not render in major clients until HTTPS is resolved |
- | **P1** | Return Path pixel missing protocol | Fix `src` to `https://pixel.app.returnpath.net/...` |
- | **P2** | SPF/DKIM unverified | Confirm authentication headers on a production-path send before deployment |
- | **P2** | Missing `alt` on content image | Add descriptive `alt` to `49468f73...png` |
- | **P3** | Redundant 375px media query | Remove duplicate block; 640px block is sufficient |
- | **P3** | UTM validation | Manual spot-check 2–3 CTAs to confirm UTM params survive redirect chain |

## Full review
## Email Review: Skechers Spring Fling Sale — BOGO 50% Off

---

### 1. Executive Summary

This is a straightforward promotional email anchored on a BOGO 50% off (or 20% off 1 item) Spring Fling Sale offer, organized by gender/age category. The layout is clean and functional. However, this email has critical pre-send issues that would be embarrassing in a live deployment: a raw internal campaign code in the subject line, raw JSON-LD markup leaking into the preview text, and what appears to be a QA artifact ("LET'S GET TESTING") visible in the body. None of these are ready for consumer audiences.

---

### 2. Business Impact Score: **4/10**

The underlying campaign concept and structure are solid. The score tanks entirely on execution — the subject line is unusable as-is, the preview text is actively broken, and a test module appears in the email body.

---

### 3. What's Working

- **Offer clarity.** BOGO 50% off is legible and prominent in the hero. The alternative "or 20% off 1 item" is also visible without cluttering the headline.
- **Category structure.** Women → Men → Girls → Boys flows logically. Each section has a single product shot and a clear CTA button. No guesswork for the recipient about where to click.
- **Spring Fling branding.** The yellow "SPRING FLING SALE" banner creates consistent visual framing at the top and repeats below the hero, reinforcing the campaign without being overbearing.
- **Secondary navigation.** The "Shop Additional Styles" text block (Women / Men / Kids / Clothing / New Arrivals / Sale) gives quick access to categories outside the gender-specific modules.
- **Footer utility.** App download, Find a Store, and Counter Pickup are all present and visible.

---

### 4. What's Weak

- **Subject line is broken.** "[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04122026Spring Favorites..." — the internal campaign code is fully exposed with no separator, and "[Test]:" prefix is consumer-facing. This would tank open rates and flag as spam.
- **Preview text is raw JSON-LD.** The inbox preview reads as `[{ "@context": "http://schema.org/"...` — structured data markup that was never suppressed. First impression for every recipient is gibberish.
- **"LET'S GET TESTING" module.** A visible QA or testing element appears in the body above the footer. This should not exist in any consumer-facing send.
- **Product shots are small and generic.** Each category gets one shoe on a white background. Given this is a "Spring Favorites" angle, there's no lifestyle context, color story, or editorial energy — it reads more like a clearance grid than a spring campaign.
- **No price anchoring.** No product names, price points, or "starting at $X" callouts appear anywhere. The offer is clear, but there's nothing to anchor the value of what's being discounted.

---

### 5. Recommendations

1. **Do not send.** Strip the [Test] prefix, clean the subject line to something like "Spring Fling Sale: Buy One, Get One 50% Off," and remove the campaign code entirely.
2. **Fix the preview text immediately.** Suppress or replace the JSON-LD so the inbox preview reads as human copy.
3. **Remove the QA testing module** from the email body before any live deployment.
4. **Add a "Starting at $X" or price point** to at least one module — it contextualizes the BOGO offer and reduces friction before the click.
5. **Upgrade the hero photography.** A spring campaign should feel seasonal. Flat product-on-white works for PDP; a hero deserves lifestyle context (outdoor, color, movement).

---

### 6. Bottom Line

Structurally sound, strategically broken. The gender-category layout and BOGO offer are the right choices for this type of send. But the subject line, preview text, and QA artifact make this email undeliverable as-is. Fix those three issues first — everything else is optimization.

---

### 7. Evidence

**Overall purpose:** Drive spring promotional sales via a BOGO 50% off event, segmented by gender/age category (Women, Men, Girls, Boys).

**Hero / primary value proposition:** "BUY ONE, GET ONE 50% OFF or 20% off 1 Item" with a SHOP NOW button. Offer is visible and unambiguous.

**Membership / benefits section:** None visible. No loyalty, rewards, or Skechers+ messaging present.

**Product discoverability / recommendation modules:** Four category blocks (Women, Men, Girls, Boys), each with one product image and a shop CTA. Functional but shallow — no product names, pricing, or editorial framing.

**Utility / secondary modules:** "Shop Additional Styles" text links (Women, Men, Kids, Clothing, New Arrivals, Sale). Counter Pickup callout. App download (Apple/Google). Find a Store link. Social follow icons (Facebook, Instagram visible).

**Bugs / friction / clarity issues (visible in render):**
- Subject line: Internal campaign code and "[Test]:" prefix fully exposed
- Preview text: Raw JSON-LD schema markup visible in inbox preview
- Body: "LET'S GET TESTING" QA module visible above the footer — should not exist in a consumer email

---

## Technical Audit

## Technical Audit — SKECHERS Spring Favorites (PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04122026)

---

### 1. Technical Summary

This is an undeployed test send with a broken personalization token and pervasive mixed-content (HTTP) image loading that will trigger blocking in most modern email clients. SPF/DKIM authentication status is unverified due to missing relay headers.

---

### 2. Link & Tracking Issues

**No issues found** with click-redirect link structure itself — all 27 links route through `click.emails.skechers.com`, which is the expected SFMC click-tracking domain.

**Warning — protocol-relative Validity/Return Path pixel:**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
This `src` has no protocol (`http://` or `https://`), making it a relative URL that will resolve to a broken path inside the email renderer. The pixel will silently fail to fire.

**Warning — Movable Ink pixel is HTTP:**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8015385887&mi_ecmp=PRO_US_RETPUROPEN_...
```
Will be blocked by Gmail, Outlook.com, and Apple Mail. Dynamic content driven by this pixel will not render.

---

### 3. Rendering & Accessibility

**FAIL — 13 images served over HTTP:**

All `image.emails.skechers.com` assets use `http://`, not `https://`. Affected images include:
- Skechers logo: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png`
- Footer icons: App Store, Google Play, Curbside Pickup, AfterPay, Find A Store, Instagram, Facebook, YouTube — all `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/...`
- One unlabeled image: `49468f73-4651-4af3-bea2-61d1ae5db486.png`

Gmail and Outlook.com proxy/block non-HTTPS images. Apple Mail on iOS 15+ enforces mixed-content blocking. Entire image-heavy sections will render as broken placeholders for a significant subscriber share.

**WARN — 2 images missing `alt` text:**
- `o.gif` (Movable Ink tracking pixel) — not critical for AT, but technically non-compliant
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no fallback text; breaks image-off experience

**Note — duplicate media query blocks:** `@media only screen and (max-width: 375px)` and `@media only screen and (max-width: 640px)` contain identical rule sets. The 375px block is entirely redundant; the 640px block subsumes it. No rendering defect, but unnecessary CSS weight.

---

### 4. Personalization & Merge Tokens

**FAIL — Empty greeting name field:**

QA confirms: greeting renders as `"Hi ,"` — the subscriber first-name token is resolving to an empty string. This indicates either a missing fallback value in the merge tag or a data population failure on the test send.

Recommended fix: add a default fallback, e.g.:
```
%%[IF EMPTY(@first_name)]%%Hi there%%[ELSE]%%Hi %%=v(@first_name)=%%%%[ENDIF]%%,
```
(or equivalent for the platform's AMPscript/Liquid syntax in use.)

---

### 5. Compliance

**WARN — Subject line contains `[Test]:` prefix:**
```
Subject: [Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04122026Spring Favorites - Just a Click Away
```
This is expected for a test send but must be stripped before production deployment. The internal campaign ID is also exposed directly in the subject line — confirm this is intentional or remove before live send.

**WARN — SPF/DKIM authentication status unverified:**
`Authentication-Results` header was not captured via the AgentMail relay. Cannot confirm DKIM signing by `emails.skechers.com` or SPF pass. This should be verified against a production-path send before deployment.

**No issues found** with CAN-SPAM physical address or unsubscribe mechanism (presence inferred from standard SFMC template structure; confirm visible in full HTML).

---

### 6. Email-to-Site Continuity

UTM parameter validation was blocked because all 27 destination URLs route through `click.emails.skechers.com` redirects, which were not probed. Campaign ID `PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04122026` is consistent across the Movable Ink pixel and Krux impression beacon:
```
campaignid=PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04122026
```
UTM continuity to landing pages cannot be confirmed without following the redirects — recommend a manual spot-check of 2–3 CTAs to verify `utm_campaign`, `utm_source`, and `utm_medium` are appended correctly.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Empty greeting (`Hi ,`) | Add first-name fallback to merge tag before send |
| **P0** | `[Test]:` subject prefix | Remove; also remove exposed campaign ID from subject |
| **P1** | 13 HTTP image URLs | Migrate all `image.emails.skechers.com` assets to HTTPS; update Movable Ink pixel to HTTPS |
| **P1** | Movable Ink pixel blocked | Dynamic content will not render in major clients until HTTPS is resolved |
| **P1** | Return Path pixel missing protocol | Fix `src` to `https://pixel.app.returnpath.net/...` |
| **P2** | SPF/DKIM unverified | Confirm authentication headers on a production-path send before deployment |
| **P2** | Missing `alt` on content image | Add descriptive `alt` to `49468f73...png` |
| **P3** | Redundant 375px media query | Remove duplicate block; 640px block is sufficient |
| **P3** | UTM validation | Manual spot-check 2–3 CTAs to confirm UTM params survive redirect chain |
## Recent history

- [[2026-04-11-test-pro-us-nonpur180-u-sitebundle-nonpurch-en-04122026spring-favorites-just-a-c]] — 3/10 (2026-04-10)
- [[2026-04-10-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04122026styles-made-for-spring-weeken]] — 4/10 (2026-04-10)
- [[2026-04-10-test-pro-us-na-u-sitebundle-full-en-04122026-v3styles-made-for-spring-weekends]] — 4/10 (2026-04-10)

