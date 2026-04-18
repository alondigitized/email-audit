---
slug: 2026-04-11-test-mkg-us-retpuropen-u-slipin-retail-en-04132026the-season-to-slip-in-to-sanda-fd7dd727-62db-407b-a13d-
type: email
date: 2026-04-10
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_RETPUROPEN_U_SLIPIN_RETAIL_EN_04132026The Season to Slip-In to Sandals & Sneakers 🤩"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_RETPUROPEN_U_SLIPIN_RETAIL_EN_04132026The Season to Slip-In to Sandals & Sneakers 🤩
**Score:** 5/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A clean but underpowered seasonal campaign. The BOGO 50% off offer is the only real commercial hook; the three product-story modules below it are visually decent but commercially thin. The email is coherent and on-brand, but it reads as a category browse rather than a compelling sell. Nothing is broken — nothing is memorable either.
- Functional. Does not embarrass the brand. Will not drive exceptional conversion. The offer exists but the creative doesn't close it.

## What's working

- **BOGO banner is prominent and leads.** "BUY ONE, GET ONE 50% OFF" sits immediately below the logo — hard to miss, clear value.
- **Hero has energy.** "NEW STYLE DROP" with lifestyle photography is the strongest creative moment in the email. On-trend, seasonal feel.
- **Clear visual hierarchy.** Offer → product categories → utility nav → footer. The reader knows where they are.
- **Utility section is complete.** Category nav (Women, Men, Kids, Clothing, New Arrivals, Sale), app download, Skechers Plus membership, and social icons are all present.

## What's weak

- **Product modules are too thin.** Cozy Fit, Max Cushioning, and Sandals each get a single product image and a generic CTA — no product names, no prices, no ratings. There's nothing specific to click *toward*.
- **CTA fatigue.** Three consecutive "SHOP THIS STYLE" buttons with identical visual treatment create a monotonous scroll. Differentiation collapses.
- **Hero is vague.** "New Style Drop" does not tell me what dropped or why I should care. The lifestyle image is nice but underutilized as a selling surface.
- **No urgency anywhere.** The BOGO offer has no end date, no countdown, no "while supplies last." The offer has no teeth.
- **Top navigation is very small** and unlikely to get intentional taps on mobile, making it decorative rather than functional.
- **Sandals module feels underdeveloped** — the image is the smallest of the three and the layout looks compressed compared to the two sneaker sections above it, given sandals are the headline item in the subject.

## Recommendations

- 1. **Add product name + price to each module.** Even one line — "Ultra Flex 3.0 — $65" — converts category browsing into product intent.
- 2. **Differentiate the CTAs.** "Shop Cozy Fit," "Shop Max Cushioning," "Shop Sandals" tells Google Analytics (and the reader) where they're going.
- 3. **Give the BOGO an expiry.** "Ends Sunday" or a simple date stamp creates urgency without redesign.
- 4. **Make the hero work harder.** The lifestyle image should link directly to a curated landing page, with a visible CTA overlaid or immediately below it — right now it's passive.
- 5. **Elevate Sandals.** It's in the subject line and the seasonal hook; it should be the largest or most prominent product block, not the smallest.
- 6. **Trim the top nav or increase its tap target size.** On mobile it's non-functional decoration; either make it bigger or remove it.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Empty first-name merge token | Add fallback value to greeting token before any resend |
- | **P0** | `[Test]:` prefix + campaign ID in subject | Strip test flag; enforce subject-line template separation from campaign metadata |
- | **P1** | Return Path pixel missing URL scheme | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif?...` |
- | **P1** | 13 images served over HTTP | Update all `image.emails.skechers.com` and `ink1000.com` src attributes to `https://` |
- | **P1** | SPF/DKIM unverified | Confirm authentication records for `emails.skechers.com` and validate via a live seed send with headers captured |
- | **P2** | Missing `alt` on content image `49468f73...png` | Add descriptive alt text |
- | **P2** | `<meta>` tags missing `http-equiv` attributes | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to respective meta tags |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` |
- | **P3** | Kruxd DMP pixel fires on open with subscriber IDs | Confirm CCPA disclosure and consent basis covers DMP audience sync from email opens |
- | **P3** | UTM passthrough unverified | Probe a sample click-redirect URL to confirm `utm_campaign`, `utm_source`, `utm_medium` reach destination |

## Full review
## Email Review: Skechers "Season to Slip-In" — Sandals & Sneakers

---

### 1. Executive Summary

A clean but underpowered seasonal campaign. The BOGO 50% off offer is the only real commercial hook; the three product-story modules below it are visually decent but commercially thin. The email is coherent and on-brand, but it reads as a category browse rather than a compelling sell. Nothing is broken — nothing is memorable either.

---

### 2. Business Impact Score: **5 / 10**

Functional. Does not embarrass the brand. Will not drive exceptional conversion. The offer exists but the creative doesn't close it.

---

### 3. What's Working

- **BOGO banner is prominent and leads.** "BUY ONE, GET ONE 50% OFF" sits immediately below the logo — hard to miss, clear value.
- **Hero has energy.** "NEW STYLE DROP" with lifestyle photography is the strongest creative moment in the email. On-trend, seasonal feel.
- **Clear visual hierarchy.** Offer → product categories → utility nav → footer. The reader knows where they are.
- **Utility section is complete.** Category nav (Women, Men, Kids, Clothing, New Arrivals, Sale), app download, Skechers Plus membership, and social icons are all present.

---

### 4. What's Weak

- **Product modules are too thin.** Cozy Fit, Max Cushioning, and Sandals each get a single product image and a generic CTA — no product names, no prices, no ratings. There's nothing specific to click *toward*.
- **CTA fatigue.** Three consecutive "SHOP THIS STYLE" buttons with identical visual treatment create a monotonous scroll. Differentiation collapses.
- **Hero is vague.** "New Style Drop" does not tell me what dropped or why I should care. The lifestyle image is nice but underutilized as a selling surface.
- **No urgency anywhere.** The BOGO offer has no end date, no countdown, no "while supplies last." The offer has no teeth.
- **Top navigation is very small** and unlikely to get intentional taps on mobile, making it decorative rather than functional.
- **Sandals module feels underdeveloped** — the image is the smallest of the three and the layout looks compressed compared to the two sneaker sections above it, given sandals are the headline item in the subject.

---

### 5. Recommendations

1. **Add product name + price to each module.** Even one line — "Ultra Flex 3.0 — $65" — converts category browsing into product intent.
2. **Differentiate the CTAs.** "Shop Cozy Fit," "Shop Max Cushioning," "Shop Sandals" tells Google Analytics (and the reader) where they're going.
3. **Give the BOGO an expiry.** "Ends Sunday" or a simple date stamp creates urgency without redesign.
4. **Make the hero work harder.** The lifestyle image should link directly to a curated landing page, with a visible CTA overlaid or immediately below it — right now it's passive.
5. **Elevate Sandals.** It's in the subject line and the seasonal hook; it should be the largest or most prominent product block, not the smallest.
6. **Trim the top nav or increase its tap target size.** On mobile it's non-functional decoration; either make it bigger or remove it.

---

### 6. Bottom Line

The BOGO does the heavy lifting, and the rest of the email coasts. Cozy Fit, Max Cushioning, and Sandals are strong product stories being told badly — one image and a generic button isn't a story. Add specificity (names, prices), urgency (expiry), and differentiated CTAs and this email goes from a 5 to a 7+ without touching the design.

---

### 7. Evidence

**Overall purpose:** Seasonal reactivation / slip-in footwear push, anchored by a BOGO 50% promotional offer. Targets existing customers with a spring refresh narrative.

**Hero / primary value proposition:** "NEW STYLE DROP" headline with aspirational lifestyle photography. BOGO offer banner sits above it in a dark bar. The combination communicates "now is the time to buy" but lacks a product-level hook to direct that intent.

**Membership / benefits section:** Skechers Plus is referenced in the footer utility block alongside the app download prompt. Passive placement — no benefit callout or exclusive offer tied to membership. It exists but doesn't convert.

**Product discoverability / recommendation modules:**
- *Cozy Fit* — slip-on sneaker imagery, single CTA
- *Max Cushioning* — athletic shoe with cushioning focus, single CTA
- *Sandals* — sandal imagery, single CTA (visually smallest block despite being headline item)
All three follow identical structure with no pricing, naming, or differentiation in CTA copy.

**Utility / secondary modules:** Full category nav text links (Women, Men, Kids, Clothing, New Arrivals, Sale), app download prompt, social icons, legal footer. All present and functional.

**Bugs / friction / clarity issues (visible in render):**
- **Subject line contains "[Test]:" prefix** — this is visible to recipients in their inbox and marks the email as an internal test send that escaped to production. Critical error.
- **Preview text shows raw JSON-LD schema markup** — `{ "@context": "http://schema.org/"...` is exposed as the preview snippet in the inbox view. Recipients see code before they open the email. Severely damaging to open rates and brand trust.
- Sandals module appears compressed/smaller than the two sneaker sections — inconsistent visual weight for the headline product category.

---

## Technical Audit

## Technical Audit — SKECHERS Slip-In Sandals & Sneakers (MKG_US_RETPUROPEN_U_SLIPIN_RETAIL_EN_04132026)

---

### 1. Technical Summary

This email has one broken-experience bug (empty personalization token), a pervasive HTTP-vs-HTTPS image loading problem across 13+ assets, a missing protocol on a tracking pixel, and an unresolved `[Test]:` prefix with a concatenated campaign ID in the subject line. SPF/DKIM status could not be verified via the relay.

---

### 2. Link & Tracking Issues

**Return Path pixel — missing URL scheme (broken)**
```
pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
The `src` attribute has no `http://` or `https://` prefix. Email clients will not resolve this as a URL; the inbox seed/deliverability signal is silently lost.

**27 click-redirect links not probed**
All body CTAs route through `click.emails.skechers.com`. HTTP destination and UTM passthrough could not be verified (see §6).

**ink1000.com open pixel — HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8026161582&mi_ecmp=MKG_US_RETPUROPEN_U_SLIPIN_RETAIL_EN_04132026
```
Plain HTTP; will be blocked or replaced with a broken-image indicator in Gmail, Apple Mail, and most corporate clients that enforce HTTPS mixed-content rules.

---

### 3. Rendering & Accessibility

**HTTP image sources — 13 assets**

All `image.emails.skechers.com` assets are served over plain HTTP:

| Asset | src (truncated) |
|---|---|
| Skechers logo | `http://image.emails.skechers.com/.../dde00662...png` |
| (no alt) content image | `http://image.emails.skechers.com/.../49468f73...png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f...png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0...png` |
| Curbside Pickup | `http://image.emails.skechers.com/.../00100b23...png` |
| AfterPay | `http://image.emails.skechers.com/.../07cb60b5...png` |
| Find A Store | `http://image.emails.skechers.com/.../fc08601a...png` |
| Instagram | `http://image.emails.skechers.com/.../b782e0aa...png` |
| Facebook | `http://image.emails.skechers.com/.../a5c4cae0...png` |
| YouTube | `http://image.emails.skechers.com/.../8c5738fc...png` |

All should be `https://`. Mixed-content blocking will render these broken for a significant portion of recipients.

**Missing alt text — content image**
`49468f73-4651-4af3-bea2-61d1ae5db486.png` has no `alt` attribute. Because this is a non-decorative content image (not a 1×1 pixel), it violates WCAG 2.1 §1.1.1 and degrades screen-reader experience.

**`<meta>` tags — missing required attributes**

- `<meta content="text/html; charset=utf-8" />` is missing `http-equiv="Content-Type"` — the charset declaration may be ignored.
- `<meta content="IE=Edge" />` is missing `http-equiv="X-UA-Compatible"` — the IE compatibility directive is inert without it.

**`-webkit-text-size-adjust: none`**
Set globally via `* { -webkit-text-size-adjust: none; }`. The value `none` suppresses OS-level font scaling entirely, which breaks accessibility for users who rely on system font-size settings. Should be `100%`.

---

### 4. Personalization & Merge Tokens

**FAIL — Empty greeting name field**
QA confirmed: the greeting renders as `"Hi ,"` — the first-name merge token is present in the template but resolved to an empty string. This indicates either a missing default/fallback value in the ESP template logic or a data feed that did not populate the field before send.

The token should include a fallback, e.g.:
```
Hi %%=IIF(EMPTY(FirstName), "there", FirstName)=%%,
```
(or equivalent syntax for the platform in use — SFMC AMPscript shown above as reference.)

**`[Test]:` prefix + concatenated campaign ID in subject**
```
Subject: [Test]: MKG_US_RETPUROPEN_U_SLIPIN_RETAIL_EN_04132026The Season to Slip-In...
```
Two issues: the `[Test]:` flag was not stripped before send, and there is no space or delimiter between the internal campaign ID and the consumer-facing subject line. If this reached production subscribers, both are bugs — the test flag should be removed and the campaign ID should be in a separate internal field, not the subject.

---

### 5. Compliance

**SPF/DKIM — unverified**
`Authentication-Results` header was not found via the AgentMail relay. SPF and DKIM pass/fail status is unknown. Delivery to Gmail and Outlook is at risk if authentication is not configured on `emails.skechers.com`.

**Kruxd DMP beacons — third-party audience sync**
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=9037280d7b0681e7e8339bb532f53a4d5a3b6b3b853e90707f087f7952fcc88c
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=64650986
https://beacon.krxd.net/1x1_ad_impression.gif?confid=so3yexmpm&advertiserid=100007688&campaignid=MKG_US_RETPUROPEN_U_SLIPIN_RETAIL_EN_04132026
```
These fire a hashed subscriber ID and a plaintext subscriber ID (`partner_uid=64650986`) to a Salesforce/Krux third-party domain on open. Verify that email-open pixel data sync to a DMP is disclosed in the privacy policy and that the subscriber consent basis covers it — this is relevant under CCPA opt-out-of-sale rules and any applicable state privacy laws.

**CAN-SPAM / unsubscribe** — HTML was truncated; footer could not be verified. Confirm physical mailing address and one-click unsubscribe are present in the full source.

---

### 6. Email-to-Site Continuity

All 27 body links pass through `click.emails.skechers.com` redirects. UTM parameter passthrough to `skechers.com` destination URLs could not be confirmed because the redirects were not probed. The campaign ID `MKG_US_RETPUROPEN_U_SLIPIN_RETAIL_EN_04132026` appears in the ink1000 pixel, which suggests it is available as a value — verify it is also passed as `utm_campaign` on all destination URLs.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Empty first-name merge token | Add fallback value to greeting token before any resend |
| **P0** | `[Test]:` prefix + campaign ID in subject | Strip test flag; enforce subject-line template separation from campaign metadata |
| **P1** | Return Path pixel missing URL scheme | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif?...` |
| **P1** | 13 images served over HTTP | Update all `image.emails.skechers.com` and `ink1000.com` src attributes to `https://` |
| **P1** | SPF/DKIM unverified | Confirm authentication records for `emails.skechers.com` and validate via a live seed send with headers captured |
| **P2** | Missing `alt` on content image `49468f73...png` | Add descriptive alt text |
| **P2** | `<meta>` tags missing `http-equiv` attributes | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to respective meta tags |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` |
| **P3** | Kruxd DMP pixel fires on open with subscriber IDs | Confirm CCPA disclosure and consent basis covers DMP audience sync from email opens |
| **P3** | UTM passthrough unverified | Probe a sample click-redirect URL to confirm `utm_campaign`, `utm_source`, `utm_medium` reach destination |
## Recent history

- [[2026-04-10-test-mkg-us-ecmpurl24-u-slipin-ecom-en-04132026from-sneakers-to-sandals-it-s-sli]] — 4/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-nonpurclick-u-slipin-nonpurch-en-04132026-v2from-sneakers-to-sandals]] — 5/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-nonpurclick-u-slipin-nonpurch-en-04132026-v2from-sneakers-to-sandals-83471cbb-44ae-48e7-827d-]] — 5.5/10 (2026-04-10)

