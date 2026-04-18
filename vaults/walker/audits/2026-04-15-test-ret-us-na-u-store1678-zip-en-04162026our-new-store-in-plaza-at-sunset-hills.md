---
slug: 2026-04-15-test-ret-us-na-u-store1678-zip-en-04162026our-new-store-in-plaza-at-sunset-hills
type: email
date: 2026-04-15
persona: walker
score: "5/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026Our New Store In Plaza at Sunset Hills Is Opening Tomorrow!"
tags: [email, score-5, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026Our New Store In Plaza at Sunset Hills Is Opening Tomorrow!
**Score:** 5/10 · **Type:** Email audit · **2026-04-15**
## Executive summary

- Strong creative execution dragged down significantly by critical metadata failures. The email body itself would score a 7; the deployment errors knock it to a 5.

## What's working

- **Hero clarity.** "OPENING TOMORROW" in large bold type over the store address is unambiguous. Urgency is built in.
- **Promotional stack is compelling.** Buy 2 Get 3rd Free (04/11–04/26) paired with a free $35 tote bag (no purchase required) gives recipients two distinct reasons to visit.
- **Category grid is functional.** Women / Men / Girls / Boys with product photography and "SHOP NOW" CTAs covers the household buying unit efficiently.
- **Utility footer is complete.** App download, Afterpay, Klarna, curbside pickup, and store finder are all present and cleanly laid out.
- **Visual hierarchy is coherent.** Teal/green CTAs stand out against the white background; text sizing is appropriately differentiated.

## What's weak

- **Subject line is an internal test string.** The recipient sees `[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026Our New Store...` — a campaign code with no word spacing before the actual message. This is the first thing recipients see and it looks like spam or a broken system.
- **Preview text renders as raw JSON-LD.** The inbox preview reads `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — structured data markup leaked into the preheader slot. A wasted opportunity that actively signals broken email tooling.
- **Free Tote Bag placement is awkward.** It lives in a right-side column next to the B2G3F banner rather than getting its own row. At small render sizes it will compress badly and the "$35 value" callout may be missed.
- **Dual "GET DIRECTIONS" CTAs feel redundant.** Hero and promo banner each carry an identical GET DIRECTIONS button; consolidating into one and replacing the second with "SHOP WOMEN / MEN" would better serve the full conversion funnel.
- **Fine print is very small.** Offer asterisks reference fine print that appears at the bottom in very small gray text — likely unreadable on mobile.

## Recommendations

- 1. **Block this send until the subject line and preheader are corrected.** Strip the `[Test]:` prefix and the campaign code; fix the preheader to a human-readable teaser (e.g., "Plus: Buy 2 Get the 3rd FREE this week only").
- 2. **Fix the JSON-LD preheader leak.** Schema.org structured data belongs in the HTML `<head>`, not the visible preheader slot.
- 3. **Give the Free Tote Bag its own full-width module** between the B2G3F promo and the category grid — it's a strong hook and deserves visual prominence.
- 4. **Replace the second GET DIRECTIONS button** with a "SHOP NOW" or gender-specific CTA to extend engagement beyond in-store.
- 5. **Increase fine print size** to at least 11px; legally and perceptually it needs to be readable on mobile.
- | Priority | Action |
- |---|---|
- | **P0 — Block send** | Remove `[Test]:` prefix from subject line |
- | **P0 — Block send** | Fix subject-line merge token: separate or remove the raw campaign ID concatenation |
- | **P0 — Block send** | Add `https://` protocol to the Return Path seed pixel |
- | **P1** | Migrate all `http://image.emails.skechers.com` image URLs to HTTPS |
- | **P1** | Migrate `http://www.ink1000.com` tracker to HTTPS or remove if redundant with the SFMC open pixel |
- | **P1** | Confirm SPF/DKIM pass on `emails.skechers.com`; obtain Authentication-Results from a real inbox send |
- | **P1** | Add `http-equiv` attribute to both `<meta>` tags |
- | **P2** | Add `alt` text to `o.gif` and `49468f73…png` |
- | **P2** | Review Krux pixel subscriber ID exposure against DMP data-sharing agreements |
- | **P3** | Remove duplicate `@media (max-width: 375px)` CSS block |
- | **P3** | Change `-webkit-text-size-adjust: none` to `100%` to preserve user font scaling |
- | **Manual** | Verify CAN-SPAM physical address and unsubscribe link in below-fold content |
- | **Manual** | Probe all 26 click-redirect links for UTM params and landing page validity |

## Full review
## 2. Business Impact Score: **5 / 10**

Strong creative execution dragged down significantly by critical metadata failures. The email body itself would score a 7; the deployment errors knock it to a 5.

---

## 3. What's Working

- **Hero clarity.** "OPENING TOMORROW" in large bold type over the store address is unambiguous. Urgency is built in.
- **Promotional stack is compelling.** Buy 2 Get 3rd Free (04/11–04/26) paired with a free $35 tote bag (no purchase required) gives recipients two distinct reasons to visit.
- **Category grid is functional.** Women / Men / Girls / Boys with product photography and "SHOP NOW" CTAs covers the household buying unit efficiently.
- **Utility footer is complete.** App download, Afterpay, Klarna, curbside pickup, and store finder are all present and cleanly laid out.
- **Visual hierarchy is coherent.** Teal/green CTAs stand out against the white background; text sizing is appropriately differentiated.

---

## 4. What's Weak

- **Subject line is an internal test string.** The recipient sees `[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026Our New Store...` — a campaign code with no word spacing before the actual message. This is the first thing recipients see and it looks like spam or a broken system.
- **Preview text renders as raw JSON-LD.** The inbox preview reads `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — structured data markup leaked into the preheader slot. A wasted opportunity that actively signals broken email tooling.
- **Free Tote Bag placement is awkward.** It lives in a right-side column next to the B2G3F banner rather than getting its own row. At small render sizes it will compress badly and the "$35 value" callout may be missed.
- **Dual "GET DIRECTIONS" CTAs feel redundant.** Hero and promo banner each carry an identical GET DIRECTIONS button; consolidating into one and replacing the second with "SHOP WOMEN / MEN" would better serve the full conversion funnel.
- **Fine print is very small.** Offer asterisks reference fine print that appears at the bottom in very small gray text — likely unreadable on mobile.

---

## 5. Recommendations

1. **Block this send until the subject line and preheader are corrected.** Strip the `[Test]:` prefix and the campaign code; fix the preheader to a human-readable teaser (e.g., "Plus: Buy 2 Get the 3rd FREE this week only").
2. **Fix the JSON-LD preheader leak.** Schema.org structured data belongs in the HTML `<head>`, not the visible preheader slot.
3. **Give the Free Tote Bag its own full-width module** between the B2G3F promo and the category grid — it's a strong hook and deserves visual prominence.
4. **Replace the second GET DIRECTIONS button** with a "SHOP NOW" or gender-specific CTA to extend engagement beyond in-store.
5. **Increase fine print size** to at least 11px; legally and perceptually it needs to be readable on mobile.

---

## 6. Bottom Line

Good bones, bad launch. The creative communicates the opening event, the promos are solid, and the category grid covers the household. But the subject line and preheader are critically broken and should have been caught in QA. Send this only after correcting the metadata — the body is essentially ready.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026Our New Store In Plaza at Sunset Hills Is Opening Tomorrow!`
- **Length:** 104 characters
- **Scores (1-10):** Clarity `3`, Curiosity `2`, Personalization `3`, Urgency `5`, Specificity `6`
- **Strengths:**
  - The underlying message ("Opening Tomorrow!") conveys genuine urgency
  - Store name and location are specific — good for locally targeted sends
- **Weaknesses:**
  - The `[Test]:` prefix and raw campaign code (`RET_US_NA_U_STORE1678_ZIP_EN_04162026`) are visible to recipients — looks like a QA error, not marketing
  - 104 characters is too long; most clients will truncate after ~60
- **Alt A:** `Your new Skechers store opens TOMORROW — St. Louis, MO`
- **Alt B:** `Doors open tomorrow in Sunset Hills + Buy 2, Get 3rd FREE`

---

## 8. Evidence

- **Overall purpose:** Grand opening announcement for Skechers Plaza at Sunset Hills (St. Louis, MO 63127), scheduled for the day after send.
- **Hero / primary value proposition:** Full-width banner with "OPENING TOMORROW," full store address, and a teal GET DIRECTIONS CTA over a lifestyle/shoe background image.
- **Membership / benefits section:** Not present. No loyalty or Skechers+ mention.
- **Product discoverability / recommendation modules:** Four category tiles (Women, Men, Girls, Boys) each with a product image and SHOP NOW button. A text link row below covers Women, Men, Kids, Clothing, New Arrivals, Sale.
- **Utility / secondary modules:** Buy 2 Get 3rd Free promo banner with date range; Free Tote Bag offer (no purchase needed, $35 value); app download (App Store + Google Play); payment options (Afterpay, Klarna); Curbside Pickup; Find a Store; social follow icons (Facebook, Instagram, YouTube, Pinterest, TikTok).
- **Bugs / friction / clarity issues (visible in render):**
  - Subject line contains `[Test]:` prefix and raw alphanumeric campaign code with no space before the human-readable portion
  - Preview/preheader text is raw JSON-LD schema markup, fully visible in the inbox snippet

---

## Technical Audit

## Technical Audit — Skechers Store Opening Email
**Campaign:** `RET_US_NA_U_STORE1678_ZIP_EN_04162026` | **Audited:** 2026-04-15

---

### 1. Technical Summary

The email has two pre-send blocking defects: a `[Test]:` prefix still in the subject line and the campaign ID concatenated directly into the subject string. Additionally, all `image.emails.skechers.com` assets and one third-party tracker are served over HTTP, creating widespread mixed-content failures in modern clients.

---

### 2. Link & Tracking Issues

**Blocking**

- **Return Path seed pixel missing protocol.** The src value is `pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499` — no `http://` or `https://` prefix. Every email client will resolve this as a relative path and the pixel will 404. Inbox seed reporting will be blind for this send.

**High**

- **26 click-redirect links unverified.** All route through `click.emails.skechers.com` and were skipped by the HTTP probe. UTM parameter presence and landing-page alignment cannot be confirmed (see §6).

**Medium**

- **Subscriber PII in third-party pixel URLs.** Two Krux/Salesforce DMP beacons pass subscriber identifiers as query parameters:
  - `beacon.krxd.net/…?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=e5a36492fb9b5fc2c87ffabb8e56d19ed0aa520638b1043bb37c2d19c42312dd` — SHA-256 hashed email
  - `beacon.krxd.net/…?partner=LprH63a7_sfmc_100007688_subid&partner_uid=32884357` — raw subscriber ID
  These appear in server access logs, Referer headers, and any intermediary proxies. Confirm this aligns with the DMP data-sharing agreement and privacy policy disclosure.

---

### 3. Rendering & Accessibility

**Blocking**

- **Pervasive HTTP image sources.** 11 of the audited images are served over `http://image.emails.skechers.com`. Gmail, Outlook.com, and Apple Mail all proxy or block non-HTTPS image URLs. Affected assets include the Skechers logo (`dde00662…`), app store badges, Curbside Pickup icon, AfterPay badge, Find A Store icon, and all social icons. All should be flipped to `https://`.

- **Third-party tracker also HTTP.** `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` is served over HTTP and is missing an `alt` attribute. This pixel will be blocked by Gmail's image proxy and will fail silently in most clients.

**High**

- **Two `<meta>` tags missing `http-equiv` attribute:**
  - `<meta content="text/html; charset=utf-8" />` should be `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />`
  - `<meta content="IE=Edge" />` should be `<meta http-equiv="X-UA-Compatible" content="IE=Edge" />`
  Without `http-equiv`, both tags are inert and the charset/IE-compatibility declarations are ignored.

- **Two images missing `alt` text:**
  - `o.gif` (ink1000.com tracker)
  - `49468f73-4651-4af3-bea2-61d1ae5db486.png` (`image.emails.skechers.com`)

**Low**

- **Duplicate responsive CSS blocks.** The rule sets inside `@media only screen and (max-width: 375px)` and `@media only screen and (max-width: 640px)` are byte-for-byte identical. The 375px block is redundant — the 640px breakpoint already covers it. Remove to reduce HTML payload.

- **`-webkit-text-size-adjust: none` applied via universal selector (`*`).** This suppresses user-initiated font scaling across all elements, which can harm readability for low-vision recipients and conflicts with WCAG 1.4.4 (Resize Text).

---

### 4. Personalization & Merge Tokens

**Blocking**

- **Campaign ID concatenated into subject line without separator.** The rendered subject is:
  ```
  [Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026Our New Store In Plaza at Sunset Hills Is Opening Tomorrow!
  ```
  The string `RET_US_NA_U_STORE1678_ZIP_EN_04162026` is fused directly to `Our New Store…` with no space or delimiter. This is either an unresolved/misformatted dynamic field or a copy-paste artifact from the campaign code field. Either way, if deployed as-is this surfaces raw internal identifiers to subscribers.

- **`[Test]:` prefix not stripped.** The subject line still carries `[Test]:`. This is a production-blocking defect — must be removed before live send.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**High**

- **SPF/DKIM authentication status unknown.** The QA relay did not capture an `Authentication-Results` header. Cannot confirm the sending domain `emails.skechers.com` is passing SPF and DKIM. A failed or missing DKIM signature increases spam folder placement risk, particularly at Gmail and Yahoo (which now enforce DMARC alignment for bulk senders).

**Unverifiable from truncated source**

- Physical mailing address (CAN-SPAM §5(a)(6)) and unsubscribe mechanism (§5(a)(3)) are in the below-fold content that was cut from the provided source. These must be confirmed present and functional before send. Flag for manual review.

---

### 6. Email-to-Site Continuity

**Unverifiable** — all 26 click-redirect links pass through `click.emails.skechers.com` and were not probed. The following must be verified manually before the send date (2026-04-16):

- UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) present on all outbound URLs
- `utm_campaign` value consistent with `RET_US_NA_U_STORE1678_ZIP_EN_04162026`
- Store locator / Plaza at Sunset Hills landing page resolves and is not 404ing
- Any geo-targeted landing page serving the correct store details for the ZIP-targeted segment

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0 — Block send** | Remove `[Test]:` prefix from subject line |
| **P0 — Block send** | Fix subject-line merge token: separate or remove the raw campaign ID concatenation |
| **P0 — Block send** | Add `https://` protocol to the Return Path seed pixel |
| **P1** | Migrate all `http://image.emails.skechers.com` image URLs to HTTPS |
| **P1** | Migrate `http://www.ink1000.com` tracker to HTTPS or remove if redundant with the SFMC open pixel |
| **P1** | Confirm SPF/DKIM pass on `emails.skechers.com`; obtain Authentication-Results from a real inbox send |
| **P1** | Add `http-equiv` attribute to both `<meta>` tags |
| **P2** | Add `alt` text to `o.gif` and `49468f73…png` |
| **P2** | Review Krux pixel subscriber ID exposure against DMP data-sharing agreements |
| **P3** | Remove duplicate `@media (max-width: 375px)` CSS block |
| **P3** | Change `-webkit-text-size-adjust: none` to `100%` to preserve user font scaling |
| **Manual** | Verify CAN-SPAM physical address and unsubscribe link in below-fold content |
| **Manual** | Probe all 26 click-redirect links for UTM params and landing page validity |
## Recent history

- [[2026-04-15-test-ret-us-na-u-store1669-zip-en-04162026our-new-store-in-johnstown-is-opening-]] — 3/10 (2026-04-15)
- [[2026-04-15-test-mkg-us-na-u-best-full-en-04162026-v2loved-reviewed-and-ready-for-your-close]] — 5/10 (2026-04-15)
- [[2026-04-15-test-mkg-us-na-u-best-full-en-04162026loved-reviewed-and-ready-for-your-closet]] — 4/10 (2026-04-15)

