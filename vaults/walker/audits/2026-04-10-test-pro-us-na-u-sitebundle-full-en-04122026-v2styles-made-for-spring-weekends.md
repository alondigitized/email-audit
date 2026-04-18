---
slug: 2026-04-10-test-pro-us-na-u-sitebundle-full-en-04122026-v2styles-made-for-spring-weekends
type: email
date: 2026-04-10
persona: walker
score: "4/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026_V2Styles Made for Spring Weekends"
tags: [email, score-4, sender/skechers]
---
# [Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026_V2Styles Made for Spring Weekends
**Score:** 4/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- The offer and layout are competent, but the broken subject and preview text are inbox-level failures that will crater open rates and erode brand trust. No amount of good in-email execution recovers from that.

## What's working

- **Offer clarity**: "BUY ONE, GET ONE 50% OFF or 20% off 1 item" is prominent in the hero — the value proposition reads immediately.
- **Category grid**: Women / Men / Girls / Boys each get a dedicated product visual and direct CTA. The structure is efficient and scannable.
- **Product photography**: The shoe images are clean and well-lit — the blue low-top in Women's and the olive sneaker in Boys both read clearly at small scale.
- **Utility footer**: LET'S GET TEXTING, CURBSIDE PICKUP, DOWNLOAD THE APP, FIND A STORE, SHOP NOW PAY LATER — the secondary module set is comprehensive and covers known conversion assists.

## What's weak

- **Subject line is broken**: Visible in the inbox as `[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026_V2Styles Made for Spring Weekends` — an internal test prefix and raw campaign code are fully exposed to recipients.
- **Preview text is raw JSON**: The preheader renders as `[{ "@context": "http://schema.org/", "@type": "Organization", "logo":...` — structured data markup leaked directly into the preview text slot. Recipients see code, not copy.
- **Hero is small and compressed**: At the rendered scale, the sale headline and sandal visual are difficult to read. The "Spring Fling Sale" text and shoe are fighting for attention in a tight space.
- **Category grid lacks energy**: Each section (Women's, Men's, Girls, Boys) features a single shoe on a plain background with a small CTA. There's no lifestyle context, no price anchoring, and no urgency signal tied to the sale.
- **Footer is overloaded**: The utility strip crams in 5+ modules — some appear to repeat (Pay Later / Find a Store appears duplicated) — which dilutes attention from the genuine CTAs.

## Recommendations

- 1. **Block deployment until subject and preview are fixed.** The `[Test]:` prefix and campaign code must be stripped. The preview text slot needs actual marketing copy — something like "Buy one, get one 50% off — Spring styles for the whole family."
- 2. **Inject sale urgency into the category tiles.** Add "Save 50% when you buy 2" or an end-date callout within each product section. The BOGO offer shouldn't live only in the hero.
- 3. **Add a lifestyle layer to the hero.** A sandal on a white background doesn't say "Spring Weekend." A contextual scene (beach, outdoor path, brunch table) would sell the seasonal story and justify the "Spring Fling" framing.
- 4. **Audit the footer for deduplication.** If Pay Later and Find a Store appear twice, remove the duplicate. Each utility module should appear once with a single clear CTA.
- | Priority | Item |
- |---|---|
- | **Critical** | Fix empty first-name merge token — add a fallback default before send |
- | **Critical** | Remove `[Test]:` prefix and strip raw campaign code from subject line |
- | **High** | Upgrade all `image.emails.skechers.com` asset URLs to `https://` |
- | **High** | Add `https://` protocol to Return Path pixel src |
- | **Medium** | Resolve V2 campaign ID mismatch between subject/DMP beacon — align to single canonical ID |
- | **Medium** | Add `alt` attributes to 4 images currently missing them |
- | **Low** | Verify SPF/DKIM pass on production send via Authentication-Results header |
- | **Low** | Probe click-redirect destinations to confirm UTM params are present and reference V2 |

## Full review
## 2. Business Impact Score: 4 / 10

The offer and layout are competent, but the broken subject and preview text are inbox-level failures that will crater open rates and erode brand trust. No amount of good in-email execution recovers from that.

---

## 3. What's Working

- **Offer clarity**: "BUY ONE, GET ONE 50% OFF or 20% off 1 item" is prominent in the hero — the value proposition reads immediately.
- **Category grid**: Women / Men / Girls / Boys each get a dedicated product visual and direct CTA. The structure is efficient and scannable.
- **Product photography**: The shoe images are clean and well-lit — the blue low-top in Women's and the olive sneaker in Boys both read clearly at small scale.
- **Utility footer**: LET'S GET TEXTING, CURBSIDE PICKUP, DOWNLOAD THE APP, FIND A STORE, SHOP NOW PAY LATER — the secondary module set is comprehensive and covers known conversion assists.

---

## 4. What's Weak

- **Subject line is broken**: Visible in the inbox as `[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026_V2Styles Made for Spring Weekends` — an internal test prefix and raw campaign code are fully exposed to recipients.
- **Preview text is raw JSON**: The preheader renders as `[{ "@context": "http://schema.org/", "@type": "Organization", "logo":...` — structured data markup leaked directly into the preview text slot. Recipients see code, not copy.
- **Hero is small and compressed**: At the rendered scale, the sale headline and sandal visual are difficult to read. The "Spring Fling Sale" text and shoe are fighting for attention in a tight space.
- **Category grid lacks energy**: Each section (Women's, Men's, Girls, Boys) features a single shoe on a plain background with a small CTA. There's no lifestyle context, no price anchoring, and no urgency signal tied to the sale.
- **Footer is overloaded**: The utility strip crams in 5+ modules — some appear to repeat (Pay Later / Find a Store appears duplicated) — which dilutes attention from the genuine CTAs.

---

## 5. Recommendations

1. **Block deployment until subject and preview are fixed.** The `[Test]:` prefix and campaign code must be stripped. The preview text slot needs actual marketing copy — something like "Buy one, get one 50% off — Spring styles for the whole family."
2. **Inject sale urgency into the category tiles.** Add "Save 50% when you buy 2" or an end-date callout within each product section. The BOGO offer shouldn't live only in the hero.
3. **Add a lifestyle layer to the hero.** A sandal on a white background doesn't say "Spring Weekend." A contextual scene (beach, outdoor path, brunch table) would sell the seasonal story and justify the "Spring Fling" framing.
4. **Audit the footer for deduplication.** If Pay Later and Find a Store appear twice, remove the duplicate. Each utility module should appear once with a single clear CTA.

---

## 6. Bottom Line

Solid bones, broken launch. The offer is real and the structure is conventional-but-functional. But this email should not have reached recipients with a test tag in the subject line and JSON in the preview text. Fix the production pipeline, tighten the preheader copy, and add urgency signals to the category grid. As shipped, it reads like a quality assurance failure.

---

## 7. Evidence

**Overall purpose:** Spring seasonal sale email driving traffic to all four shopper segments (Women, Men, Girls, Boys) via a BOGO offer.

**Hero / primary value proposition:** "Spring Fling Sale — Buy One, Get One 50% OFF or 20% off 1 item" with a sandal visual. Offer is clear but the visual lacks seasonal lifestyle energy.

**Membership / benefits section:** None visible. No loyalty, rewards, or member-exclusive framing in the render.

**Product discoverability / recommendation modules:** Four category tiles with individual product images and SHOP [CATEGORY] CTAs. Functional but static — no price points, no bestseller callouts, no cross-category inspiration.

**Utility / secondary modules:** LET'S GET TEXTING (SMS opt-in), DOWNLOAD THE APP, CURBSIDE PICKUP, SHOP NOW PAY LATER, FIND A STORE, social media row. Comprehensive but compressed and potentially duplicated.

**Bugs / friction / clarity issues (visible in render):**
- Subject line contains `[Test]:` prefix and full internal campaign code — visible in inbox before open.
- Preview text is raw JSON-LD schema markup — renders as code in the inbox preview slot.
- Possible duplication of utility modules (Pay Later / Find a Store) in the footer strip.

---

## Technical Audit

## Technical Audit — Skechers `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026_V2`

---

### 1. Technical Summary

This email has one broken-experience failure (empty personalization token) and a pervasive HTTP/mixed-content problem affecting all hosted image assets. The `[Test]:` subject prefix and a protocol-less tracking pixel indicate the send was not production-ready at time of capture.

---

### 2. Link & Tracking Issues

**[WARN] Return Path pixel missing URL protocol**
The seed-list/deliverability monitoring pixel has no scheme — it will silently fail to load in all clients:
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"
```
Should be `https://pixel.app.returnpath.net/...`.

**[WARN] Campaign ID version mismatch between subject and DMP beacon**
Subject line references `_V2` variant (`PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026_V2`), but the Krux/Salesforce DMP impression pixel carries:
```
campaignid=PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026
```
No `_V2` suffix. If V2 is a distinct creative, impression attribution will be misrouted to V1.

**[INFO] 30 click-redirect links unverified**
All CTAs route through `click.emails.skechers.com` (SFMC redirect). Probe was skipped for redirect domains — destination URLs and UTM params unconfirmed.

---

### 3. Rendering & Accessibility

**[WARN] 27 images served over HTTP — mixed content**
All assets hosted on `image.emails.skechers.com` use `http://`, as does the third-party tracking pixel from `ink1000.com`. Secure clients (Gmail on HTTPS, Outlook with image blocking enabled) will either block or proxy-upgrade these, risking broken layouts or blank product images. Examples:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-…c.png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-….png  (repeated ×2)
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif                                (open pixel)
```
All `image.emails.skechers.com` assets should be served from `https://`.

**[WARN] 4 decorative/content images missing `alt` text**
The following lack `alt` attributes entirely (distinct from empty `alt=""`), meaning screen readers will announce the filename:
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` (appears twice)
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

**[INFO] `[Test]:` subject prefix present**
`Subject: [Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026_V2Styles Made for Spring Weekends` — the test prefix and the raw campaign ID are both visible to recipients. The internal code running directly into the human subject copy (`_V2Styles`) also suggests a missing space/separator in the template.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty first-name token — broken greeting**
QA confirmed the name field resolved to an empty string, producing output like `"Hi ,"`. The merge token was not suppressed by a fallback condition. This affects all subscribers whose profile lacks a stored first name, and is a user-facing rendering defect.

Fix: add a conditional default, e.g.:
```
Hi %%[ IF EMPTY(FirstName) ]%% there%%[ ELSE ]%%%%=FirstName=%%%%[ ENDIF ]%%,
```

---

### 5. Compliance

**[WARN] SPF/DKIM authentication status unverified**
`Authentication-Results` header was not captured via the AgentMail relay — SPF pass/fail and DKIM signature validity are unknown for this send. Cannot confirm CAN-SPAM §5(a)(4) authentication alignment.

**[INFO] Unsubscribe / physical address**
HTML source is truncated; footer content was not inspectable. Unsubscribe link presence and physical mailing address (CAN-SPAM §5(a)(5-6)) could not be confirmed from the available source. Assumed present based on ESP (SFMC) compliance defaults — verify manually.

---

### 6. Email-to-Site Continuity

**[WARN] UTM parameters on destination URLs unverified**
All 30 CTAs pass through `click.emails.skechers.com` redirects. UTM attribution (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) on final landing page URLs was not probed. Given the `_V2` variant discrepancy noted in §2, confirm that landing pages and UTM values reference `V2` and not the base campaign code.

**[INFO] Campaign ID consistent in open/impression pixels**
The SFMC open pixel and Krux DMP impression pixel both carry `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026`, consistent with each other (modulo the V2 issue noted above).

---

### 7. Recommendations

| Priority | Item |
|---|---|
| **Critical** | Fix empty first-name merge token — add a fallback default before send |
| **Critical** | Remove `[Test]:` prefix and strip raw campaign code from subject line |
| **High** | Upgrade all `image.emails.skechers.com` asset URLs to `https://` |
| **High** | Add `https://` protocol to Return Path pixel src |
| **Medium** | Resolve V2 campaign ID mismatch between subject/DMP beacon — align to single canonical ID |
| **Medium** | Add `alt` attributes to 4 images currently missing them |
| **Low** | Verify SPF/DKIM pass on production send via Authentication-Results header |
| **Low** | Probe click-redirect destinations to confirm UTM params are present and reference V2 |
## Recent history

- [[2026-04-10-test-pro-us-na-u-sitebundle-full-en-04122026styles-made-for-spring-weekends]] — 5/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-na-w-seasonal-gender-en-04112026-v3the-perfect-pair-or-2-for-her]] — 6/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-na-u-seasonal-gender-en-04112026-v2the-perfect-pair-or-2-for-her]] — 5/10 (2026-04-10)

