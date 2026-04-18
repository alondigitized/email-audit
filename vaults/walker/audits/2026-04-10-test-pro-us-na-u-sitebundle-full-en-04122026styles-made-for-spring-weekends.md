---
slug: 2026-04-10-test-pro-us-na-u-sitebundle-full-en-04122026styles-made-for-spring-weekends
type: email
date: 2026-04-10
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026Styles Made for Spring Weekends"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026Styles Made for Spring Weekends
**Score:** 5/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A clean, functional promotional email anchored by a BOGO 50% off offer. The structure is logical — hero deal, then category navigation — but it executes at a baseline level. There's no emotional pull, no product storytelling, and no reason to engage beyond the discount. The email does its job mechanically but leaves performance on the table.
- The offer is strong; the execution is mediocre. Conversion will come from deal-seekers who already know the brand, not from anyone being persuaded by this creative.

## What's working

- **BOGO offer is impossible to miss.** The "BUY ONE, GET ONE 50% OFF" hero module is high-contrast, bold, and leads correctly.
- **Category segmentation is clear.** Women's, Men's, Girls', and Boys' each get a dedicated image + CTA, which helps different household buyers self-select quickly.
- **Utility footer is well-stocked.** LET'S GET TEXTING, CURBSIDE PICKUP, SHOP NOW PAY LATER, and FIND A STORE are all present and useful secondary conversion paths.
- **Short text links row** (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE) gives a quick-scan navigation alternative.

## What's weak

- **"[Test]:" is visible in the subject line.** This is a live deliverability/QA issue — if sent externally, it signals an accidental deployment.
- **Hero image is absent.** The top of the email goes straight from the Skechers logo into the BOGO banner with no lifestyle image. There's zero aspiration, warmth, or spring context. "Spring Weekends" as a theme is named in the subject but invisible in the creative.
- **Category images are product-on-white shots, not lifestyle.** Each shoe floats against a neutral background. For a spring weekend theme, these feel like catalog pages, not seasonal inspiration.
- **The Spring Fling Sale side-banner text is rotated and small.** Legibility is compromised — it's decorative at best, illegible at worst.
- **No personalization signals.** No name, no recommended products, no "based on your history" hook. This reads as a broadcast blast.
- **CTAs are generic.** "SHOP WOMEN'S," "SHOP MEN'S" — fine, but offer-specific CTAs ("Shop the BOGO Sale") would drive higher intent clicks.

## Recommendations

- 1. **Fix the subject line before any future send.** Strip `[Test]:` from the production template. If this was intentionally sent as a test, confirm it didn't hit the full list.
- 2. **Add a spring lifestyle header image.** One warm, aspirational shot (people outdoors, casual weekend activity) directly beneath the logo would activate the "Spring Weekends" theme the subject promises.
- 3. **Make the BOGO CTA more specific.** Change "SHOP NOW" to "Shop the BOGO Sale" — the current button doesn't reinforce the offer it's attached to.
- 4. **Replace or supplement the rotating side-banner.** The vertical "SPRING FLING SALE" banner is not legible at email rendering size. Move the sale branding into a clean horizontal badge or header ribbon instead.
- 5. **Test lifestyle vs. product-on-white for category modules.** Even one lifestyle image per gender category would lift engagement.
- | Priority | Issue | Action |
- |---|---|---|
- | **Critical** | Subject line merge token not resolved | Fix template variable injection so campaign ID does not bleed into subject copy; add space/separator or remove field entirely |
- | **Critical** | `[Test]:` prefix in subject | Strip before production deployment |
- | **High** | HTTP image CDN (`image.emails.skechers.com`) | Change all `http://` image src values to `https://` across the template |
- | **High** | Ink1000 open pixel over HTTP | Upgrade to `https://` or remove if redundant with SFMC open tracking |
- | **High** | Return Path pixel malformed URL | Add `https://` prefix: `https://pixel.app.returnpath.net/pixel.gif?r=...` |
- | **High** | SPF/DKIM/DMARC unverifiable | Pull full relay headers from a seed inbox and confirm authentication pass before production send |
- | **Medium** | Krux DMP pixels — consent gap | Verify CCPA/GDPR coverage for third-party data share on open; suppress for opted-out segments |
- | **Medium** | Missing alt text on 4 images | Add `alt=""` to tracking pixels; add descriptive alt to functional images |
- | **Low** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve accessibility scaling on iOS |

## Full review
## Email Review: Skechers "Styles Made for Spring Weekends" — Spring Fling Sale

---

### 1. Executive Summary

A clean, functional promotional email anchored by a BOGO 50% off offer. The structure is logical — hero deal, then category navigation — but it executes at a baseline level. There's no emotional pull, no product storytelling, and no reason to engage beyond the discount. The email does its job mechanically but leaves performance on the table.

---

### 2. Business Impact Score: **5/10**

The offer is strong; the execution is mediocre. Conversion will come from deal-seekers who already know the brand, not from anyone being persuaded by this creative.

---

### 3. What's Working

- **BOGO offer is impossible to miss.** The "BUY ONE, GET ONE 50% OFF" hero module is high-contrast, bold, and leads correctly.
- **Category segmentation is clear.** Women's, Men's, Girls', and Boys' each get a dedicated image + CTA, which helps different household buyers self-select quickly.
- **Utility footer is well-stocked.** LET'S GET TEXTING, CURBSIDE PICKUP, SHOP NOW PAY LATER, and FIND A STORE are all present and useful secondary conversion paths.
- **Short text links row** (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE) gives a quick-scan navigation alternative.

---

### 4. What's Weak

- **"[Test]:" is visible in the subject line.** This is a live deliverability/QA issue — if sent externally, it signals an accidental deployment.
- **Hero image is absent.** The top of the email goes straight from the Skechers logo into the BOGO banner with no lifestyle image. There's zero aspiration, warmth, or spring context. "Spring Weekends" as a theme is named in the subject but invisible in the creative.
- **Category images are product-on-white shots, not lifestyle.** Each shoe floats against a neutral background. For a spring weekend theme, these feel like catalog pages, not seasonal inspiration.
- **The Spring Fling Sale side-banner text is rotated and small.** Legibility is compromised — it's decorative at best, illegible at worst.
- **No personalization signals.** No name, no recommended products, no "based on your history" hook. This reads as a broadcast blast.
- **CTAs are generic.** "SHOP WOMEN'S," "SHOP MEN'S" — fine, but offer-specific CTAs ("Shop the BOGO Sale") would drive higher intent clicks.

---

### 5. Recommendations

1. **Fix the subject line before any future send.** Strip `[Test]:` from the production template. If this was intentionally sent as a test, confirm it didn't hit the full list.
2. **Add a spring lifestyle header image.** One warm, aspirational shot (people outdoors, casual weekend activity) directly beneath the logo would activate the "Spring Weekends" theme the subject promises.
3. **Make the BOGO CTA more specific.** Change "SHOP NOW" to "Shop the BOGO Sale" — the current button doesn't reinforce the offer it's attached to.
4. **Replace or supplement the rotating side-banner.** The vertical "SPRING FLING SALE" banner is not legible at email rendering size. Move the sale branding into a clean horizontal badge or header ribbon instead.
5. **Test lifestyle vs. product-on-white for category modules.** Even one lifestyle image per gender category would lift engagement.

---

### 6. Bottom Line

This email will convert discount-motivated buyers but won't inspire anyone. The structure is sound but the creative execution doesn't deliver on the "Spring Weekends" premise. A lifestyle hero image and a sharper CTA are the two highest-ROI fixes.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Drive Spring Fling Sale clicks via BOGO 50% off, segmented by gender/age category |
| **Hero / primary value prop** | BOGO 50% off banner — prominent, high contrast, correctly placed. "SHOP NOW" CTA is present but generic. No lifestyle image. |
| **Membership / benefits** | Not present — no loyalty, rewards, or membership messaging visible |
| **Product discoverability** | Women's / Men's / Girls' / Boys' modules each feature one shoe image + a CTA. Short-link text row (WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE) adds a secondary navigation layer |
| **Utility / secondary modules** | LET'S GET TEXTING, CURBSIDE PICKUP, SHOP NOW PAY LATER, FIND A STORE — all visible and appropriately de-emphasized in the footer |
| **Bugs / friction / clarity issues** | `[Test]:` prefix visible in subject line. Rotated "SPRING FLING SALE" side banner is nearly illegible at render size. No broken images visible. |

---

## Technical Audit

## Technical Audit — Skechers `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026`

---

### 1. Technical Summary

This is a test send with multiple HTTP mixed-content violations across image assets and third-party pixels, a subject line merge error that will surface verbatim in inboxes if not corrected, and unverifiable SPF/DKIM status due to missing authentication headers in the relay sample.

---

### 2. Link & Tracking Issues

**Third-party DMP pixel exposure**
Two Krux user-match beacons transmit subscriber identifiers to a Salesforce/Krux endpoint:
```
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25
  &partner_uid=c30973d6f4e31a55c5dcae7d3c3df0d73fcb04747ff44220a92abd05cee475c2
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid
  &partner_uid=75909571
```
The first sends a SHA-256-hashed subscriber identifier; the second sends a raw SFMC subscriber ID. Both fire unconditionally on open with no consent gate visible in the source.

**Secondary open pixel over HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8021648903&mi_ecmp=PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026
```
Plain HTTP. Will be blocked by iOS Mail, Gmail, and Outlook 365 without a protocol upgrade.

**Return Path inbox pixel**
```
pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
No `https://` prefix in the source — rendered as a relative or protocol-relative URL, which will resolve incorrectly in most clients. This breaks Validity/Return Path inbox monitoring for this send.

**Click-tracking links (26)**
All route through `click.emails.skechers.com` with AES-encrypted payloads (`?qs=eyJ...`). Automated HTTP probing was skipped per QA findings. No broken destinations confirmed, but destination URLs are opaque until decrypted by the ESP.

---

### 3. Rendering & Accessibility

**HTTP image sources — systemic**
The image CDN `image.emails.skechers.com` is serving all footer and app-store assets over plain HTTP:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/00100b23-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/fc08601a-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/d76a5487-...png  (Twitter)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...png  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/573ab181-...png  (Pinterest)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-...png  (YouTube)
```
The CDN likely supports HTTPS — this is a template configuration issue, not an infrastructure one.

**Missing alt text (4 images)**
- `o.gif` (ink1000 tracking pixel) — decorative but triggers accessibility scanners
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unknown functional role
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — unknown functional role
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — unknown functional role

Tracking pixels should use `alt=""`. Non-decorative images without alt text fail WCAG 1.1.1.

**`-webkit-text-size-adjust: none`**
Set globally via `* { -webkit-text-size-adjust: none; }`. This disables font scaling for users with accessibility settings that increase text size on iOS. Should be `100%` rather than `none`.

---

### 4. Personalization & Merge Tokens

**Subject line merge error — HIGH PRIORITY**
```
[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026Styles Made for Spring Weekends
```
The campaign ID token `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026` is concatenated directly against the subject line copy with no separator or space. This is a template variable that was not resolved or stripped before injection. If the test prefix is removed and this goes to production as-is, the inbox subject will read:
```
PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026Styles Made for Spring Weekends
```

**`[Test]:` prefix**
Must be stripped from the subject line before production deployment.

**No other unresolved merge tokens detected** in the visible HTML fragment. Preheader text (`Save Your Way with BOGO 50% off or 20% off 1 pair`) appears hardcoded, not dynamically rendered.

---

### 5. Compliance

**SPF/DKIM — unverifiable**
QA finding: `Authentication-Results header not found: Expected via AgentMail relay — SPF/DKIM status unknown`. Cannot confirm domain alignment or DMARC pass. This must be verified against the full relay headers before send; a DMARC failure from `emails.skechers.com` would cause deliverability failures at Gmail and Yahoo (2024 bulk sender requirements).

**CAN-SPAM / unsubscribe**
The truncated HTML does not include the footer in the sample provided. Cannot confirm presence of: physical mailing address, functioning one-click unsubscribe, or unsubscribe disclosure. These must be spot-checked against the full render.

**Third-party data sharing (CCPA/GDPR exposure)**
The Krux DMP pixels (see §2) fire on open without a visible consent mechanism. For California residents, this constitutes sharing behavioral data with a third party. Confirm this is covered by Skechers' privacy notice and opt-out flow.

---

### 6. Email-to-Site Continuity

**UTM parameters — not verifiable from source**
All 26 click links use AES-encrypted payloads routed through `click.emails.skechers.com`. The underlying destination URLs and UTM parameter decoration cannot be confirmed without ESP decryption or live link testing. The Krux impression pixel does carry the campaign ID consistently:
```
campaignid=PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026
```
That matches the subject prefix, indicating campaign attribution is wired at the pixel level.

**Send date vs. campaign ID**
Campaign ID encodes `04122026` (April 12, 2026). Today is April 10, 2026 — the send date alignment is plausible for a 2-day-out test deployment.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Critical** | Subject line merge token not resolved | Fix template variable injection so campaign ID does not bleed into subject copy; add space/separator or remove field entirely |
| **Critical** | `[Test]:` prefix in subject | Strip before production deployment |
| **High** | HTTP image CDN (`image.emails.skechers.com`) | Change all `http://` image src values to `https://` across the template |
| **High** | Ink1000 open pixel over HTTP | Upgrade to `https://` or remove if redundant with SFMC open tracking |
| **High** | Return Path pixel malformed URL | Add `https://` prefix: `https://pixel.app.returnpath.net/pixel.gif?r=...` |
| **High** | SPF/DKIM/DMARC unverifiable | Pull full relay headers from a seed inbox and confirm authentication pass before production send |
| **Medium** | Krux DMP pixels — consent gap | Verify CCPA/GDPR coverage for third-party data share on open; suppress for opted-out segments |
| **Medium** | Missing alt text on 4 images | Add `alt=""` to tracking pixels; add descriptive alt to functional images |
| **Low** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve accessibility scaling on iOS |
## Recent history

- [[2026-04-10-test-mkg-us-na-w-seasonal-gender-en-04112026-v3the-perfect-pair-or-2-for-her]] — 6/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-na-u-seasonal-gender-en-04112026-v2the-perfect-pair-or-2-for-her]] — 5/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-na-u-seasonal-gender-en-04112026the-perfect-pair-or-2-for-her]] — 6.5/10 (2026-04-10)

