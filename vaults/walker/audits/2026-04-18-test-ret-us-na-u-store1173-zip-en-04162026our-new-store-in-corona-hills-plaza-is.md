---
slug: 2026-04-18-test-ret-us-na-u-store1173-zip-en-04162026our-new-store-in-corona-hills-plaza-is
type: email
date: 2026-04-14
persona: walker
score: "5/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026Our New Store In Corona Hills Plaza Is Opening Soon!"
tags: [email, score-5, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026Our New Store In Corona Hills Plaza Is Opening Soon!
**Score:** 5/10 · **Type:** Email audit · **2026-04-14**
## Executive summary

- The local intent is right, the execution is average. The subject line will tank open rates before anyone sees the hero.

## What's working

- **Hero module is clear and functional.** Store name, full address, and a "Get Directions" CTA are all visible above the fold. This is the one thing that matters for a store-launch email.
- **Buy 2, Get 3rd Free promo** is visually prominent with a clean date range (04/17–04/26), giving urgency.
- **Free Tote Bag** offer is well-placed as a secondary incentive.
- **Category grid (Women / Men / Girls / Boys)** with shop imagery provides quick product entry points.

## What's weak

- **Subject line is completely broken** — the raw campaign token `[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026` leads the subject. This is the single most damaging element in the entire send.
- **Preview text is raw URL garbage** — the preheader shows `Skechers® https://view.emails.skechers.com/?vawpToken=...` instead of any human-readable hook. A second chance at the inbox, wasted.
- **Generic bottom half undermines the local story.** The text link navigation (Women / Men / Kids / Clothing / New Arrivals / Sale), SMS sign-up block, Afterpay, and curbside pickup modules all feel lifted from a weekly blast. There is nothing that ties these back to the store opening.
- **"Coming Soon" vs. urgency conflict.** The hero says "Coming Soon" but the B2G3 promo is dated 04/17–04/26, implying the store is already open or opening imminently. The messaging is slightly off-key.
- **Tote bag offer lacks a stated limit or threshold** — "No Purchase Necessary" appears visible but the $99 value claim in tiny type is easily missed.

## Recommendations

- 1. **Do not send with this subject line.** Fix the QA/token-substitution pipeline before any real deployment.
- 2. **Replace preheader** with something like "Your new Skechers is opening in Corona — directions + grand opening deals inside."
- 3. **Tighten the "Coming Soon" vs. promo date conflict** — either push the promo dates to match the grand opening date or reframe the hero to say "Now Open."
- 4. **Add a grand-opening-specific module** — a store photo, ribbon-cutting imagery, or a local event date would anchor this as a local moment rather than a national blast with a swapped address.
- 5. **Trim the bottom half.** Cut or collapse the generic category links; they dilute the store-opening story and push the CTA further down.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Campaign ID bleeding into subject line | Fix template: add separator or remove prepend logic before production |
- | **P0** | `[Test]:` prefix in subject | Confirm sending platform strips this automatically, or remove manually |
- | **P1** | Return Path pixel missing protocol | Add `https://` to `src` attribute |
- | **P1** | All `image.emails.skechers.com` assets on HTTP | Update CDN references to HTTPS |
- | **P1** | `ink1000.com` open pixel on HTTP | Upgrade to HTTPS or replace with ESP-native open tracking |
- | **P1** | SPF/DKIM not confirmed | Verify authentication headers on actual delivered copy |
- | **P2** | 5 images missing alt text | Add descriptive `alt=""` (empty string acceptable for decorative images, descriptive for content images) |
- | **P2** | `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
- | **P2** | UTM params on CTA links | Decode and verify at least the primary CTA |
- | **P3** | `-webkit-text-size-adjust: none` | Change to `100%` |
- | **P3** | Krxd audience beacons | Confirm subscriber consent covers third-party DMP syndication |

## Full review
## 2. Business Impact Score: 5/10

The local intent is right, the execution is average. The subject line will tank open rates before anyone sees the hero.

---

## 3. What's Working

- **Hero module is clear and functional.** Store name, full address, and a "Get Directions" CTA are all visible above the fold. This is the one thing that matters for a store-launch email.
- **Buy 2, Get 3rd Free promo** is visually prominent with a clean date range (04/17–04/26), giving urgency.
- **Free Tote Bag** offer is well-placed as a secondary incentive.
- **Category grid (Women / Men / Girls / Boys)** with shop imagery provides quick product entry points.

---

## 4. What's Weak

- **Subject line is completely broken** — the raw campaign token `[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026` leads the subject. This is the single most damaging element in the entire send.
- **Preview text is raw URL garbage** — the preheader shows `Skechers® https://view.emails.skechers.com/?vawpToken=...` instead of any human-readable hook. A second chance at the inbox, wasted.
- **Generic bottom half undermines the local story.** The text link navigation (Women / Men / Kids / Clothing / New Arrivals / Sale), SMS sign-up block, Afterpay, and curbside pickup modules all feel lifted from a weekly blast. There is nothing that ties these back to the store opening.
- **"Coming Soon" vs. urgency conflict.** The hero says "Coming Soon" but the B2G3 promo is dated 04/17–04/26, implying the store is already open or opening imminently. The messaging is slightly off-key.
- **Tote bag offer lacks a stated limit or threshold** — "No Purchase Necessary" appears visible but the $99 value claim in tiny type is easily missed.

---

## 5. Recommendations

1. **Do not send with this subject line.** Fix the QA/token-substitution pipeline before any real deployment.
2. **Replace preheader** with something like "Your new Skechers is opening in Corona — directions + grand opening deals inside."
3. **Tighten the "Coming Soon" vs. promo date conflict** — either push the promo dates to match the grand opening date or reframe the hero to say "Now Open."
4. **Add a grand-opening-specific module** — a store photo, ribbon-cutting imagery, or a local event date would anchor this as a local moment rather than a national blast with a swapped address.
5. **Trim the bottom half.** Cut or collapse the generic category links; they dilute the store-opening story and push the CTA further down.

---

## 6. Bottom Line

The bones are fine — address, directions, a solid opening offer. But the broken subject line makes this unsendable in its current state, and the lower half of the email doesn't earn its place in a local launch moment. Fix the token bug, write a real subject and preheader, and give the store a moment of its own rather than stapling it onto a weekly blast template.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026Our New Store In Corona Hills Plaza Is Opening Soon!`
- **Length:** 88 characters
- **Scores (1-10):** Clarity `2`, Curiosity `2`, Personalization `3`, Urgency `3`, Specificity `4`
- **Strengths:**
  - The human-readable tail ("Our New Store In Corona Hills Plaza Is Opening Soon!") is specific and local
  - Includes the actual plaza name, which is meaningful to local recipients
- **Weaknesses:**
  - Raw campaign token `[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026` renders verbatim — instantly destroys trust and open rate
  - No offer teaser; the B2G3 deal is invisible from the inbox
- **Alt A:** `Your new Skechers in Corona Hills Plaza is open — Buy 2, Get 3rd Free this week`
- **Alt B:** `Now Open: Skechers Corona Hills Plaza — Free tote bag + grand opening deals`

---

## 8. Evidence

- **Overall purpose:** Announce the opening of a new Skechers store at 390 North McKinley Street, Corona, CA 92879.
- **Hero / primary value proposition:** "Coming Soon — Corona Hills Plaza" with full address and a "Get Directions" button. Visually clean with lifestyle shoe imagery.
- **Membership / benefits section:** Not present. No loyalty program mention visible.
- **Product discoverability / recommendation modules:** Four image-based category tiles (Women, Men, Girls, Boys) each with "Shop Now" CTAs, plus a text-link secondary nav (Women / Men / Kids / Clothing / New Arrivals / Sale).
- **Utility / secondary modules:** Download App, Afterpay (Buy Now Pay Later), Curbside Pickup, Find a Store, social follow icons, and a legal/unsubscribe footer.
- **Bugs / friction / clarity issues:**
  - Subject line contains an unparsed test/campaign token — visible in inbox and at top of render
  - Preheader/preview text is a raw URL string rather than readable copy
  - "Coming Soon" headline creates minor timing ambiguity against the 04/17 promo start date

---

## Technical Audit

## Technical Audit — Skechers Store Opening Email

---

### 1. Technical Summary

The email has a systemic HTTP/HTTPS mismatch affecting the majority of hosted images, plus a subject-line concatenation defect visible in the test send. No critical blocking issues, but the mixed-content and missing alt-text violations are widespread enough to affect rendering in security-strict clients.

---

### 2. Link & Tracking Issues

**Subject-line token bleed (confirmed)**
Subject as received: `[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026Our New Store In Corona Hills Plaza Is Opening Soon!`
The campaign ID `RET_US_NA_U_STORE1173_ZIP_EN_04162026` is concatenated directly to the subject with no space or delimiter. This indicates a template variable (`%%campaignID%%` or equivalent) is being prepended to the subject field without a separator. Must be resolved before production send.

**[Test]: prefix present**
The `[Test]:` subject prefix confirms this is a test deployment. Verify this prefix is stripped by the sending platform before production. If it's a manual subject-line prefix rather than a platform flag, it will go out to subscribers as-is.

**26 click-tracking links unverifiable**
All CTAs route through `click.emails.skechers.com`. QA could not probe final destinations. Confirm each resolves to the correct landing page and carries expected UTM parameters (see §6).

**Return Path pixel — missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1...">
```
The `src` has no protocol prefix (`https://`). Browsers/email clients will treat this as a relative URL and it will 404. This breaks inbox placement monitoring.

**Third-party audience-match beacons (Krxd)**
Two `beacon.krxd.net` pixels transmit subscriber data to a third-party DMP:
- SHA-256 hashed email: `partner_uid=e5a36492fb9b5fc2c87...`
- Subscriber ID in plaintext: `partner_uid=32884357`

Confirm these are covered by the current privacy policy and subscriber consent scope.

---

### 3. Rendering & Accessibility

**Systemic HTTP image sources (14 affected)**
All `image.emails.skechers.com` assets use `http://`, not `https://`. Gmail, Apple Mail, and Outlook 365 will either block or proxy these images, potentially breaking layout:
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png` (Skechers logo)
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73...png` (hero image, no alt)
- App Store, Google Play, social icons, AfterPay badge — all HTTP

The `ink1000.com` pixel is also HTTP-only:
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```

**Missing alt text (5 images)**
Images with no `alt` attribute confirmed by QA:
- `o.gif` (ink1000 open pixel)
- `49468f73-...png` (likely hero/product image)
- `00100b23-...png`
- `fc08601a-...png`
- `49468f73-...png` (duplicate filename flag)

In image-blocked environments, these render as broken icons with no fallback text.

**Malformed `<meta>` tags**
Both meta tags are missing `http-equiv`:
```html
<meta content="text/html; charset=utf-8" />           <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                             <!-- missing http-equiv="X-UA-Compatible" -->
```
These are silently ignored by most clients but are technically invalid and can cause charset detection issues in legacy Outlook.

**`-webkit-text-size-adjust: none`**
CSS uses `none` instead of the safer `100%`. On iOS, `none` prevents the user from adjusting text size entirely and can cause accessibility violations.

---

### 4. Personalization & Merge Tokens

The campaign ID in the subject line (`RET_US_NA_U_STORE1173_ZIP_EN_04162026`) matches the value in the ad-impression beacon:
```
campaignid=RET_US_NA_U_STORE1173_ZIP_EN_04162026
```
This confirms the ID is a live template variable that has bled into the subject. No other unrendered `%%token%%` patterns visible in the truncated HTML, but the subject defect alone is production-blocking.

---

### 5. Compliance

**SPF/DKIM status unknown**
QA found no `Authentication-Results` header. Sending domain is `emails.skechers.com` via AgentMail relay — SPF/DKIM alignment cannot be confirmed from this sample. Before production, verify:
- SPF: `emails.skechers.com` is authorized in the parent domain's SPF record
- DKIM: signature present and aligns with `From:` domain
- DMARC: policy covers the subdomain

**Unsubscribe / CAN-SPAM**
Not evaluable from the truncated HTML — the footer was cut off. Confirm:
- Physical mailing address is present
- One-click unsubscribe link is functional (RFC 8058 `List-Unsubscribe-Post` header preferred)
- Unsubscribe processes within 10 business days

**Preheader vs. subject mismatch (informational)**
Preheader: `"Buy 2 Pairs, Get the 3rd Free + a Free Tote"`
Subject: `"Our New Store In Corona Hills Plaza Is Opening Soon!"`
These are topically disconnected — the preheader promotes a promotion while the subject is a store-opening announcement. Not a compliance issue, but noted for content review.

---

### 6. Email-to-Site Continuity

All destination URLs are behind `click.emails.skechers.com` redirects and were not probed. Cannot confirm:
- UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are appended
- Landing pages match the store-opening context (not a generic homepage or unrelated promotion)
- Mobile deep-link URLs for App Store / Google Play badges resolve correctly

Recommended: decode one CTA redirect manually and verify the final URL carries `utm_campaign=RET_US_NA_U_STORE1173_ZIP_EN_04162026` or equivalent.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Campaign ID bleeding into subject line | Fix template: add separator or remove prepend logic before production |
| **P0** | `[Test]:` prefix in subject | Confirm sending platform strips this automatically, or remove manually |
| **P1** | Return Path pixel missing protocol | Add `https://` to `src` attribute |
| **P1** | All `image.emails.skechers.com` assets on HTTP | Update CDN references to HTTPS |
| **P1** | `ink1000.com` open pixel on HTTP | Upgrade to HTTPS or replace with ESP-native open tracking |
| **P1** | SPF/DKIM not confirmed | Verify authentication headers on actual delivered copy |
| **P2** | 5 images missing alt text | Add descriptive `alt=""` (empty string acceptable for decorative images, descriptive for content images) |
| **P2** | `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
| **P2** | UTM params on CTA links | Decode and verify at least the primary CTA |
| **P3** | `-webkit-text-size-adjust: none` | Change to `100%` |
| **P3** | Krxd audience beacons | Confirm subscriber consent covers third-party DMP syndication |
