---
slug: 2026-04-18-test-ret-us-na-u-store1676-zip-en-04162026-v4our-new-store-at-cottman-ave-is-ope
type: email
date: 2026-04-16
persona: walker
score: "5/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026_V4Our New Store At Cottman Ave Is Opening Tomorrow!"
tags: [email, score-5, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026_V4Our New Store At Cottman Ave Is Opening Tomorrow!
**Score:** 5/10 · **Type:** Email audit · **2026-04-16**
## Executive summary

- Strong offer, sabotaged by production quality failures. If this sent to real customers, the test subject line alone would destroy credibility and suppress open rates.

## What's working

- **Hero module is clear and local.** "Opening Tomorrow / Skechers Cottman Ave" with the full address and phone number does the job immediately. No ambiguity about where or when.
- **The B2G3 offer is genuinely compelling.** "Buy 2, Get the 3rd Pair Free" is easy to parse and high-value — this is a real reason to visit.
- **Free tote bag add-on** with a stated $25 value adds a secondary hook without cluttering the primary offer.
- **Category navigation (Women / Men / Girls / Boys)** with product imagery gives shoppers a browsable path.
- **Footer utility is complete** — App download, Klarna/Afterpay, Curbside Pickup, Find a Store all visible.

## What's weak

- **Subject line is a production disaster.** The visible subject (`[Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026_V4Our New Store At Cottman Ave Is Opening Tomorrow!`) is raw QA metadata concatenated directly into a customer-facing line. This alone is disqualifying if deployed.
- **Preview text is broken JSON.** The schema.org structured data is leaking into the preview snippet visible in inbox clients — customers see raw code, not a teaser.
- **No urgency signal inside the email body.** "Opening Tomorrow" is only in the hero headline. There is no countdown, no "One Day Only" badge, no expiry on the B2G3 offer.
- **Offer terms are buried.** Fine print under the B2G3 block is present but visually negligible — offer validity dates are not prominent.
- **Category modules are generic.** The Women/Men/Girls/Boys shop tiles use stock product photography with no store-specific or grand opening context.
- **No personalization visible.** No recipient name, no reference to nearby location based on zip — missed for a hyper-local send.

## Recommendations

- 1. **Fix the subject line before any send.** Strip the `[Test]:` tag and the internal QA token. The clean line should be something like: *"Our New Skechers on Cottman Ave Opens Tomorrow — Free Pair + Tote Bag"*
- 2. **Fix preview text.** The schema JSON must be hidden from email clients. Replace with a human-readable teaser like *"Buy 2, get the 3rd pair free + a FREE tote bag at our new Philadelphia store."*
- 3. **Add an offer expiration.** "Grand Opening Week Only" or a specific date makes the B2G3 feel time-bound and drives action.
- 4. **Inject the address into the Get Directions CTA label** — "Get Directions to Cottman Ave" is more local than the current generic button.
- 5. **Consider a single dominant CTA above the fold.** Right now the hero has "Get Directions" and the offer has "Get Directions" again — consolidate or differentiate (e.g., "See All Styles" for the secondary).
- | Priority | Action |
- |---|---|
- | **P0** | Strip `[Test]:` prefix and remove raw campaign ID from subject before any production send |
- | **P0** | Upgrade all `http://image.emails.skechers.com` asset URLs to `https://` — 13 images at risk of blocking |
- | **P1** | Fix Return Path pixel: add explicit `https://` protocol to `pixel.app.returnpath.net` src |
- | **P1** | Upgrade `http://www.ink1000.com` tracking pixel to HTTPS or replace with SFMC-native open tracking |
- | **P1** | Confirm SPF/DKIM authentication pass via full-header seed send; confirm DMARC subdomain policy |
- | **P1** | Verify unsubscribe link and physical address are present in the truncated footer (CAN-SPAM §5) |
- | **P2** | Add descriptive `alt` text to `49468f73` content image |
- | **P2** | Replace `partner_uid=32884357` (plain subscriber ID) with hashed value in Krux pixel, consistent with the adjacent SHA-256 pixel |
- | **P2** | Confirm UTM parameters on all 26 click-redirect destinations before production launch |
- | **P3** | Remove or scope `* { -webkit-text-size-adjust: none }` to avoid WCAG 1.4.4 violation |

## Full review
## 2. Business Impact Score: **5/10**

Strong offer, sabotaged by production quality failures. If this sent to real customers, the test subject line alone would destroy credibility and suppress open rates.

---

## 3. What's Working

- **Hero module is clear and local.** "Opening Tomorrow / Skechers Cottman Ave" with the full address and phone number does the job immediately. No ambiguity about where or when.
- **The B2G3 offer is genuinely compelling.** "Buy 2, Get the 3rd Pair Free" is easy to parse and high-value — this is a real reason to visit.
- **Free tote bag add-on** with a stated $25 value adds a secondary hook without cluttering the primary offer.
- **Category navigation (Women / Men / Girls / Boys)** with product imagery gives shoppers a browsable path.
- **Footer utility is complete** — App download, Klarna/Afterpay, Curbside Pickup, Find a Store all visible.

---

## 4. What's Weak

- **Subject line is a production disaster.** The visible subject (`[Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026_V4Our New Store At Cottman Ave Is Opening Tomorrow!`) is raw QA metadata concatenated directly into a customer-facing line. This alone is disqualifying if deployed.
- **Preview text is broken JSON.** The schema.org structured data is leaking into the preview snippet visible in inbox clients — customers see raw code, not a teaser.
- **No urgency signal inside the email body.** "Opening Tomorrow" is only in the hero headline. There is no countdown, no "One Day Only" badge, no expiry on the B2G3 offer.
- **Offer terms are buried.** Fine print under the B2G3 block is present but visually negligible — offer validity dates are not prominent.
- **Category modules are generic.** The Women/Men/Girls/Boys shop tiles use stock product photography with no store-specific or grand opening context.
- **No personalization visible.** No recipient name, no reference to nearby location based on zip — missed for a hyper-local send.

---

## 5. Recommendations

1. **Fix the subject line before any send.** Strip the `[Test]:` tag and the internal QA token. The clean line should be something like: *"Our New Skechers on Cottman Ave Opens Tomorrow — Free Pair + Tote Bag"*
2. **Fix preview text.** The schema JSON must be hidden from email clients. Replace with a human-readable teaser like *"Buy 2, get the 3rd pair free + a FREE tote bag at our new Philadelphia store."*
3. **Add an offer expiration.** "Grand Opening Week Only" or a specific date makes the B2G3 feel time-bound and drives action.
4. **Inject the address into the Get Directions CTA label** — "Get Directions to Cottman Ave" is more local than the current generic button.
5. **Consider a single dominant CTA above the fold.** Right now the hero has "Get Directions" and the offer has "Get Directions" again — consolidate or differentiate (e.g., "See All Styles" for the secondary).

---

## 6. Bottom Line

The email has the right bones — a real opening event, a strong offer, and working category navigation. But it should not have shipped in this state. The subject line and preview text failures are production-quality bugs, not design issues. Fix those first; then tighten the urgency layer and the offer expiry. The content underneath is serviceable.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026_V4Our New Store At Cottman Ave Is Opening Tomorrow!`
- **Length:** 107 characters
- **Scores (1-10):** Clarity `2`, Curiosity `1`, Personalization `2`, Urgency `4`, Specificity `6`
- **Strengths:**
  - Contains the actual store location (Cottman Ave) and the event trigger (opening tomorrow)
  - Specificity of the street name differentiates from generic brand emails
- **Weaknesses:**
  - Leading QA token (`[Test]: RET_US_NA...`) consumes ~50 characters and signals internal mistake to any recipient
  - 107 characters is far too long; most clients truncate at 40–60, meaning the meaningful part is often cut
- **Alt A:** `Your New Skechers Is Opening Tomorrow — Free Pair on Us`
- **Alt B:** `Cottman Ave Grand Opening Tomorrow: Buy 2, Get 1 Free + Free Tote`

---

## 8. Evidence

- **Overall purpose:** Grand opening announcement for a single physical store (Cottman Ave, Philadelphia) with a traffic-driving promotional offer.
- **Hero / primary value proposition:** "Opening Tomorrow / Skechers Cottman Ave" with address, phone, and a Get Directions CTA. Clean and functional.
- **Membership / benefits section:** None visible. No loyalty program mention or member-exclusive angle.
- **Product discoverability / recommendation modules:** Four category tiles — Women, Men, Girls, Boys — each with a product image and "Shop Now" CTA. Below those, a text-only nav row: Women, Men, Kids, Clothing, New Arrivals, Sale.
- **Utility / secondary modules:** App download (App Store + Google Play), Klarna and Afterpay badges, Curbside Pickup icon, Find a Store link, social icons (Instagram, Facebook, YouTube, Pinterest).
- **Bugs / friction / clarity issues:**
  - Subject line contains unstripped internal QA/test string — visible in inbox subject field
  - Preview text shows raw schema.org JSON instead of a human-readable teaser — visible in inbox preview
  - No offer end date visible anywhere in the body

---

## Technical Audit

## Technical Audit — Skechers Store Opening Email
**Campaign:** `RET_US_NA_U_STORE1676_ZIP_EN_04162026` | **ESP:** Salesforce Marketing Cloud

---

### 1. Technical Summary

A Skechers geo-targeted store-opening send using SFMC click-tracking and Krux/Salesforce DMP beacons. The email has two blocking production defects (subject line corruption, mixed-content images) and an unverifiable authentication chain.

---

### 2. Link & Tracking Issues

**[HIGH] Subject line contains raw campaign ID — production defect**
The subject renders as:
```
[Test]: RET_US_NA_U_STORE1676_ZIP_EN_04162026_V4Our New Store At Cottman Ave Is Opening Tomorrow!
```
The merge token or dynamic content block for the campaign ID was concatenated directly into the subject field with no delimiter and no space before `Our New Store...`. This must be stripped before any non-test send.

**[HIGH] `[Test]:` prefix present in subject**
Confirms this is a test send configuration. The prefix must be removed before production deployment; if it reaches live subscribers it signals an operational error.

**[INFO] 26 SFMC click-redirect links** via `click.emails.skechers.com` — expected for SFMC, not probeable. No anomaly, but UTM pass-through must be verified (see §6).

**[INFO] Third-party DMP/match pixels present**
- `beacon.krxd.net` (Krux/Salesforce DMP): SHA-256 hashed UID and subscriber ID passed as query params — expected for audience matching.
- `beacon.krxd.net/1x1_ad_impression.gif?confid=so3yexmpm&campaignid=RET_US_NA_U_STORE1676_ZIP_EN_04162026` — impression tracking.
- `pixel.app.returnpath.net/pixel.gif?r=964ce1dbf...` — Return Path/Validity seed monitoring pixel. **Missing protocol prefix** (`http://` or `https://`) — will resolve as a relative URL and silently fail in most clients.

---

### 3. Rendering & Accessibility

**[HIGH] 13 images served over HTTP — mixed-content blocked**
All `image.emails.skechers.com` image assets use `http://`. Modern clients (Gmail, Apple Mail, Outlook.com) enforce HTTPS for remote content and will either block or proxy these, breaking rendering. Affected examples:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png  (no alt text)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-eec2-471a-898d-0ca1cea7e115.png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-4b38-483d-8459-cf54186a0b9f.png  (Google Play badge)
... (9 additional assets)
```
The `ink1000.com` tracking pixel also uses `http://`:
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8004129222&mi_ecmp=RET_US_NA_U_STORE1676_ZIP_EN_04162026
```

**[MED] Two images missing `alt` text**
- `o.gif` (ink1000 pixel) — acceptable for a tracking pixel but technically non-compliant
- `49468f73-4651-4af3-bae2-61d1ae5db486.png` — content image with no `alt`; screen readers will announce the filename

**[LOW] `-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; ... }
```
This disables user-initiated text scaling on iOS/WebKit, which is an accessibility violation (WCAG 1.4.4).

**[INFO] Mobile/desktop content toggling via `display:none`**
Both `.mobile-content` and `.desktop-content` blocks are present with CSS toggling. This is standard pattern, but Gmail ignores `<style>` blocks — verify desktop fallback renders acceptably without CSS support.

---

### 4. Personalization & Merge Tokens

**[HIGH] Broken token concatenation in subject** (documented in §2)

**[INFO] Subscriber ID exposure**
Raw subscriber ID `32884357` is passed as a query param to the Krux pixel:
```
?partner_uid=32884357
```
This is a plain integer, not hashed. The SHA-256 UID in the adjacent pixel is appropriately hashed; this plain-text ID should be evaluated for PII policy compliance.

**[INFO] Preheader is hardcoded**
```html
<div class="preheader">Buy 2 Pairs, Get the 3rd Free + a Free Tote</div>
```
No personalization tokens. Acceptable for a static promotional preheader — noting for completeness.

---

### 5. Compliance

**[WARN] SPF/DKIM authentication unverifiable**
The QA relay did not capture `Authentication-Results` headers. SPF/DKIM pass status for `emails.skechers.com` cannot be confirmed from this capture. Must verify via a seed send with full header inspection before production deployment.

**[INFO] Unsubscribe / CAN-SPAM footer**
HTML source is truncated; unsubscribe link and physical mailing address could not be verified from the provided excerpt. Must be confirmed present before any production send.

**[INFO] DMARC alignment**
`From:` domain is `emails.skechers.com` (subdomain). DMARC alignment depends on whether the organizational domain `skechers.com` policy covers subdomains — confirm `p=` and `sp=` values in the DNS record.

---

### 6. Email-to-Site Continuity

**[WARN] UTM pass-through unverifiable**
All 26 destination links are wrapped in `click.emails.skechers.com` redirects; final landing URLs and UTM parameters cannot be inspected from this source. Campaign ID `RET_US_NA_U_STORE1676_ZIP_EN_04162026` appears consistently in pixel params — confirm that SFMC is appending matching UTM values (`utm_campaign`, `utm_source=email`, `utm_medium=email`) to all click-through destinations.

**[INFO] Store-locator and app-store links**
App Store / Google Play badge links are present and tracked; confirm deep-link or store redirect behavior is correct for the geo-targeted audience.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Strip `[Test]:` prefix and remove raw campaign ID from subject before any production send |
| **P0** | Upgrade all `http://image.emails.skechers.com` asset URLs to `https://` — 13 images at risk of blocking |
| **P1** | Fix Return Path pixel: add explicit `https://` protocol to `pixel.app.returnpath.net` src |
| **P1** | Upgrade `http://www.ink1000.com` tracking pixel to HTTPS or replace with SFMC-native open tracking |
| **P1** | Confirm SPF/DKIM authentication pass via full-header seed send; confirm DMARC subdomain policy |
| **P1** | Verify unsubscribe link and physical address are present in the truncated footer (CAN-SPAM §5) |
| **P2** | Add descriptive `alt` text to `49468f73` content image |
| **P2** | Replace `partner_uid=32884357` (plain subscriber ID) with hashed value in Krux pixel, consistent with the adjacent SHA-256 pixel |
| **P2** | Confirm UTM parameters on all 26 click-redirect destinations before production launch |
| **P3** | Remove or scope `* { -webkit-text-size-adjust: none }` to avoid WCAG 1.4.4 violation |
