---
slug: 2026-04-10-test-pro-us-na-u-sitebundle-full-en-04122026-v3styles-made-for-spring-weekends
type: email
date: 2026-04-10
persona: walker
score: "4/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026_V3Styles Made for Spring Weekends"
tags: [email, score-4, sender/skechers]
---
# [Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026_V3Styles Made for Spring Weekends
**Score:** 4/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A structurally clean seasonal sale email built around a BOGO 50% off promotion, with four gender/age segmented product sections. The email renders correctly at a visual level, but ships with serious pre-send quality failures: raw JSON-LD schema markup leaking into preview text, an internal campaign code prefix in the subject line, a ghost navigation item ("KALE"), and a QA artifact ("GET TESTING") left in the utility row. The merchandising logic is sound; the execution is not ready for consumer audiences.
- Docked heavily for the two production-blocking bugs (subject line / preview text) and the two content errors that would visibly surface to recipients. The underlying email strategy scores fine — the offer is clear, the structure is readable — but none of that matters if the email goes out in this state.

## What's working

- **Offer clarity.** "BUY ONE, GET ONE 50% OFF or 20% OFF 1 item" is legible and specific in the hero. The trade-off terms are clearly stated.
- **Four-quadrant segmentation.** Women / Men / Girls / Boys each get a dedicated product image and their own CTA. This is correct structure for a site-bundle send.
- **Visual rhythm.** Alternating product photography and CTAs create an easy scroll cadence. No section overstays its welcome.
- **Spring Fling Sale branding.** The rotating side-banner text gives the email seasonal energy without overwhelming the product imagery.
- **Utility completeness.** Curbside Pickup, App download, Shop Now Pay Later, and Find a Store all appear in the lower utility block — appropriate for a full-funnel site bundle.

## What's weak

- **Subject line is broken.** `[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026_V3Styles Made for Spring Weekends` exposes the internal campaign identifier and a `[Test]:` QA flag. Recipients see this verbatim.
- **Preview text is raw JSON-LD.** The inbox preview renders the schema.org structured data markup as plain text instead of teaser copy. This is the first thing recipients read after the subject — it's completely wrong.
- **"KALE" in the nav module.** The Shop Additional Styles section lists: Women, Men, Kids, Clothing, New Arrivals — and then "KALE." This is almost certainly a data entry or copy error. It reads as nonsense to consumers.
- **"GET TESTING" in the utility row.** A QA or link-testing artifact is visible as a tappable link in the secondary utility section. Should not be present in any send.
- **No personalization or urgency signals.** No sale end date, no "limited time," no member-exclusive framing. The offer is real but feels static.

## Recommendations

- 1. **Block this send.** Fix the subject line, preview text, "KALE" nav item, and "GET TESTING" link before this goes to any consumer audience.
- 2. **Replace the preview text** with a short-form teaser: e.g., "Your spring wardrobe upgrade starts with BOGO 50% off."
- 3. **Strip the `[Test]:` prefix and campaign code** from the subject. Consumer subject: "Styles Made for Spring Weekends."
- 4. **Audit the nav module data source** for the "KALE" entry — likely a spreadsheet row that was inadvertently mapped.
- 5. **Add a sale deadline.** Even "This weekend only" meaningfully lifts urgency and conversion.
- | Priority | Issue | Action |
- |---|---|---|
- | **Blocking** | `[Test]:` prefix in subject line | Remove before production send |
- | **Blocking** | Empty first name merge token (`Hi ,`) | Add fallback default to greeting token |
- | **Blocking** | Campaign ID concatenated into subject copy | Scope campaign-code injection to non-production sends only |
- | **High** | 10 images served over HTTP | Migrate all `image.emails.skechers.com` src URLs to `https://` |
- | **High** | ink1000 open pixel served over HTTP | Change to `https://www.ink1000.com/...` |
- | **High** | Return Path pixel missing protocol | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif` |
- | **Medium** | Authentication-Results header absent | Verify SPF/DKIM pass through production relay before deploy |
- | **Medium** | `alt` text missing on `49468f73-...png` | Add descriptive `alt` attribute |
- | **Low** | `* { -webkit-text-size-adjust: none }` | Scope to `body` only, use value `100%` |
- | **Low** | Duplicate `@media` blocks | Merge `375px` and `640px` breakpoint rule sets |
- | **Low** | Krux `partner_uid` SHA-256 passthrough | Confirm CCPA data-share disclosure covers hashed email to `beacon.krxd.net` |

## Full review
## Email Review: Skechers "Styles Made for Spring Weekends"

---

### 1. Executive Summary

A structurally clean seasonal sale email built around a BOGO 50% off promotion, with four gender/age segmented product sections. The email renders correctly at a visual level, but ships with serious pre-send quality failures: raw JSON-LD schema markup leaking into preview text, an internal campaign code prefix in the subject line, a ghost navigation item ("KALE"), and a QA artifact ("GET TESTING") left in the utility row. The merchandising logic is sound; the execution is not ready for consumer audiences.

---

### 2. Business Impact Score: **4 / 10**

Docked heavily for the two production-blocking bugs (subject line / preview text) and the two content errors that would visibly surface to recipients. The underlying email strategy scores fine — the offer is clear, the structure is readable — but none of that matters if the email goes out in this state.

---

### 3. What's Working

- **Offer clarity.** "BUY ONE, GET ONE 50% OFF or 20% OFF 1 item" is legible and specific in the hero. The trade-off terms are clearly stated.
- **Four-quadrant segmentation.** Women / Men / Girls / Boys each get a dedicated product image and their own CTA. This is correct structure for a site-bundle send.
- **Visual rhythm.** Alternating product photography and CTAs create an easy scroll cadence. No section overstays its welcome.
- **Spring Fling Sale branding.** The rotating side-banner text gives the email seasonal energy without overwhelming the product imagery.
- **Utility completeness.** Curbside Pickup, App download, Shop Now Pay Later, and Find a Store all appear in the lower utility block — appropriate for a full-funnel site bundle.

---

### 4. What's Weak

- **Subject line is broken.** `[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026_V3Styles Made for Spring Weekends` exposes the internal campaign identifier and a `[Test]:` QA flag. Recipients see this verbatim.
- **Preview text is raw JSON-LD.** The inbox preview renders the schema.org structured data markup as plain text instead of teaser copy. This is the first thing recipients read after the subject — it's completely wrong.
- **"KALE" in the nav module.** The Shop Additional Styles section lists: Women, Men, Kids, Clothing, New Arrivals — and then "KALE." This is almost certainly a data entry or copy error. It reads as nonsense to consumers.
- **"GET TESTING" in the utility row.** A QA or link-testing artifact is visible as a tappable link in the secondary utility section. Should not be present in any send.
- **No personalization or urgency signals.** No sale end date, no "limited time," no member-exclusive framing. The offer is real but feels static.

---

### 5. Recommendations

1. **Block this send.** Fix the subject line, preview text, "KALE" nav item, and "GET TESTING" link before this goes to any consumer audience.
2. **Replace the preview text** with a short-form teaser: e.g., "Your spring wardrobe upgrade starts with BOGO 50% off."
3. **Strip the `[Test]:` prefix and campaign code** from the subject. Consumer subject: "Styles Made for Spring Weekends."
4. **Audit the nav module data source** for the "KALE" entry — likely a spreadsheet row that was inadvertently mapped.
5. **Add a sale deadline.** Even "This weekend only" meaningfully lifts urgency and conversion.

---

### 6. Bottom Line

The merchandising bones are solid — clear offer, sensible segmentation, complete utility suite. But this email has at least four visible production errors that would damage brand credibility if sent. This is a QA failure, not a strategy failure. Hold it.

---

### 7. Evidence

**Overall purpose:** Seasonal promotional mailer driving site traffic across all gender/age segments via a BOGO 50% off Spring Fling Sale event.

**Hero / primary value proposition:** BUY ONE, GET ONE 50% OFF or 20% OFF 1 item, with a "SHOP NOW" CTA. Offer is clear and visually prominent. Spring Fling Sale rotated-text side banners reinforce the seasonal theme.

**Membership / benefits section:** None present. No loyalty, no Skechers Elite tier, no member-exclusive framing.

**Product discoverability / recommendation modules:** Four modules — Women's, Men's, Girls', Boys' — each with a lifestyle/product shot and a shop CTA. Coverage is complete. No individual product callouts or trending items.

**Utility / secondary modules:** Shop Additional Styles text-link block (with the "KALE" error); a utility row with "GET TESTING" artifact and Curbside Pickup; App Store / Google Play download links; Shop Now Pay Later; Find a Store; social follow icons; legal footer.

**Bugs / friction / clarity issues (visible in render):**
- Subject line exposes `[Test]:` QA flag and raw internal campaign code
- Preview text renders as raw JSON-LD schema markup
- "KALE" appears as a navigation/category item in the Shop Additional Styles module
- "GET TESTING" appears as a live link in the utility row

---

## Technical Audit

## Technical Audit — Skechers `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026`

---

### 1. Technical Summary

This is a test send (subject prefixed `[Test]:`) with two blocking issues — a broken personalization greeting and a malformed subject line — plus widespread HTTP image sourcing that will cause content to be blocked or flagged in security-enforcing email clients.

---

### 2. Link & Tracking Issues

**Return Path pixel missing protocol:**
```
pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
No `https://` — this will silently fail or trigger a mixed-content warning.

**ink1000.com open pixel served over HTTP:**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```
Confirmed by QA: non-HTTPS source, may be blocked.

**27 click-tracking links unverified:** All routed through `click.emails.skechers.com` redirect — UTM parameters and final landing page destinations cannot be confirmed without probing. No QA was performed against destination URLs.

**Krux DMP pixel passes hashed subscriber identifier to a third party:**
```
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=c30973d6f4e31a55c5dcae7d3c3df0d73fcb04747ff44220a92abd05cee475c2
```
The `partner_uid` value is a SHA-256 hash (64-char hex). Verify this data share is covered under current CCPA/privacy disclosures.

---

### 3. Rendering & Accessibility

**HTTP image sources (10 images):** All `image.emails.skechers.com` assets are served over HTTP. Gmail, iOS Mail, and Outlook 365 will block or proxy these, breaking rendering:

| Image | URL |
|---|---|
| Skechers logo | `http://image.emails.skechers.com/.../dde00662-...png` |
| Unnamed content image | `http://image.emails.skechers.com/.../49468f73-...png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f-...png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0-...png` |
| Curbside Pickup | `http://image.emails.skechers.com/.../00100b23-...png` |
| AfterPay | `http://image.emails.skechers.com/.../07cb60b5-...png` |
| Find A Store | `http://image.emails.skechers.com/.../fc08601a-...png` |
| Instagram | `http://image.emails.skechers.com/.../b782e0aa-...png` |
| Facebook | `http://image.emails.skechers.com/.../a5c4cae0-...png` |
| YouTube | `http://image.emails.skechers.com/.../8c5738fc-...png` |

**Missing `alt` text (2 images):**
- `o.gif` — `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif`
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unnamed content image

**`-webkit-text-size-adjust: none` applied globally:**
```css
* { -webkit-text-size-adjust: none; }
```
Prevents user-initiated font scaling system-wide. Violates WCAG 1.4.4 (Resize Text, AA). Replace with `100%` on `body` only.

**Duplicate responsive CSS blocks:** `@media (max-width: 375px)` and `@media (max-width: 640px)` contain identical rule sets. Not breaking, but adds ~1KB dead weight.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty first name field — greeting renders as "Hi ,"**

The subscriber first name merge token is unpopulated in this test send. No fallback value (e.g., `Hi there,`) is present. This will render broken for any subscriber with a missing first name field in production.

Action required before send: add a fallback default to the greeting token or confirm the test subscriber record has a populated first name.

---

### 5. Compliance

**Subject line retains `[Test]:` prefix — production blocking:**
```
[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026_V3Styles Made for Spring Weekends
```

**Subject line has malformed campaign code concatenation:** The internal campaign ID runs directly into the consumer subject copy with no delimiter:
```
...04122026_V3Styles Made for Spring Weekends
                 ^^^ no space here
```
The intended subject is likely `Styles Made for Spring Weekends` — confirm the template variable that injects the campaign code is scoped to internal/test sends only.

**Authentication-Results header absent:** SPF/DKIM verification status is unknown through the AgentMail relay. Cannot confirm the sending domain (`emails.skechers.com`) passes authentication checks. This should be verified against a production relay before send.

**Unsubscribe and physical address:** Not flagged by QA — assumed present in full HTML footer per standard Skechers template.

---

### 6. Email-to-Site Continuity

**UTM parameters unverifiable:** All 27 click links are wrapped in `click.emails.skechers.com` redirects. UTM attribution on destination URLs cannot be confirmed without probing through the redirect chain.

**Campaign ID consistency across tracking pixels — consistent:**
- ink1000 pixel: `mi_ecmp=PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026` ✓
- Krux impression pixel: `campaignid=PRO_US_NA_U_SITEBUNDLE_FULL_EN_04122026` ✓
- Skechers open pixel: campaign code present in query string ✓

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Blocking** | `[Test]:` prefix in subject line | Remove before production send |
| **Blocking** | Empty first name merge token (`Hi ,`) | Add fallback default to greeting token |
| **Blocking** | Campaign ID concatenated into subject copy | Scope campaign-code injection to non-production sends only |
| **High** | 10 images served over HTTP | Migrate all `image.emails.skechers.com` src URLs to `https://` |
| **High** | ink1000 open pixel served over HTTP | Change to `https://www.ink1000.com/...` |
| **High** | Return Path pixel missing protocol | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif` |
| **Medium** | Authentication-Results header absent | Verify SPF/DKIM pass through production relay before deploy |
| **Medium** | `alt` text missing on `49468f73-...png` | Add descriptive `alt` attribute |
| **Low** | `* { -webkit-text-size-adjust: none }` | Scope to `body` only, use value `100%` |
| **Low** | Duplicate `@media` blocks | Merge `375px` and `640px` breakpoint rule sets |
| **Low** | Krux `partner_uid` SHA-256 passthrough | Confirm CCPA data-share disclosure covers hashed email to `beacon.krxd.net` |
## Recent history

- [[2026-04-10-test-mkg-us-na-w-seasonal-gender-en-04112026-v5the-perfect-pair-or-2-for-her]] — 5/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026-v4feel-good-styles-for-you-them]] — 5/10 (2026-04-10)
- [[2026-04-11-test-mkg-us-na-w-seasonal-gender-en-04112026-v4the-perfect-pair-or-2-for-her]] — 5/10 (2026-04-10)

