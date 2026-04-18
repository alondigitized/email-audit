---
slug: 2026-04-16-test-ret-us-na-u-store1408-zip-en-04172026sale-ends-soon-celebrate-our-birthday-
type: email
date: 2026-04-16
persona: walker
score: "5/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1408_ZIP_EN_04172026SALE Ends Soon! Celebrate our Birthday in Buffalo"
tags: [email, score-5, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1408_ZIP_EN_04172026SALE Ends Soon! Celebrate our Birthday in Buffalo
**Score:** 5/10 · **Type:** Email audit · **2026-04-16**
## Executive summary

- The email itself is structurally sound and the offer is strong. The score is dragged down by the subject line failure and the preview text bug — both of which damage sender credibility and suppress open rates before a single pixel of email is rendered.

## What's working

- **Offer clarity.** "BUY 2 PAIRS GET THE 3RD FREE / LIMITED TIME ONLY THRU 4/19" is prominent, visually bold, and easy to parse at a glance.
- **Store-specific personalization.** The address, phone number, and "Tops Elmwood Plaza" headline correctly localize the email to a single store.
- **Hero image.** Clean, product-forward photography with multiple colorful shoes creates visual energy appropriate for a birthday theme.
- **CTA.** The "GET DIRECTIONS" button is appropriately sized, well-placed, and singular — no competing buttons at the primary action level.
- **Utility rail.** App download, curbside pickup, and store finder are useful secondary modules that support omnichannel behavior without cluttering the main funnel.

## What's weak

- **Subject line is broken.** The `[Test]:` prefix and full internal campaign code (`RET_US_NA_U_STORE1408_ZIP_EN_04172026`) are exposed verbatim. This reads as a QA escape to any recipient and erodes trust.
- **Preview text is raw JSON.** The inbox snippet displays `[{ "@context": "http://schema.org/", "@type": "Organization", "logo":...` — completely unreadable and burns the second most valuable inbox real estate.
- **"Tops Elmwood Plaza" is ambiguous.** As a headline it reads awkwardly — it's unclear whether it means "the top store at Elmwood Plaza" or is a half-rendered dynamic token. Needs a more natural phrasing.
- **Birthday theme is thin.** The "Celebrate our birthday!" headline and confetti border are present, but the email doesn't lean into the occasion as a reason the deal exists. There's no emotional hook — no brand story, no milestone, no "years of doing X" moment.
- **Navigation links are text-only.** The WOMEN / MEN / KIDS category rail at the bottom is useful but visually flat. No imagery, no product preview, no urgency signal.

## Recommendations

- 1. **Immediately fix the subject line.** Strip `[Test]:` and the campaign code before any further sends. The human-readable portion ("SALE Ends Soon! Celebrate our Birthday in Buffalo") is serviceable and should stand alone.
- 2. **Add a proper preview text string.** Set a plain-text preheader that reinforces the offer, e.g., *"Buy 2 pairs, get the 3rd free — in-store only through 4/19."*
- 3. **Rewrite the store-location headline.** Replace "Tops Elmwood Plaza" with something explicit: *"Now at Elmwood Plaza, Buffalo"* or *"Your Local Buffalo Store."*
- 4. **Strengthen the birthday rationale.** Add one sentence tying the deal to the brand anniversary — it turns a generic sale into a meaningful event and increases emotional resonance.
- 5. **Add urgency to the navigation rail.** Badge "NEW ARRIVALS" or "SALE" with a small visual indicator to increase click-through on secondary categories.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | `[Test]:` subject prefix | Remove before any live send |
- | **P1** | 13 HTTP image URLs | Switch `image.emails.skechers.com` CDN to HTTPS; update `ink1000.com` pixel endpoint |
- | **P1** | HTTP monitoring pixels (ink1000, Return Path) | Update to HTTPS endpoints |
- | **P1** | SPF/DKIM unverified | Pull authentication headers from a seeded inbox send and confirm alignment |
- | **P2** | Raw subscriber ID in third-party Krux pixel | Confirm privacy policy disclosure; consider removing `subid` variant if not legally required |
- | **P2** | Missing `alt` on content image `49468f73-...png` | Add descriptive `alt` text |
- | **P2** | Unwrap and verify 28 click-redirect URLs | Confirm UTM params + landing page alignment on primary CTAs |
- | **P3** | `* { -webkit-text-size-adjust: none }` | Change to `100%` |
- | **P3** | Duplicate CSS media query blocks | Deduplicate for maintainability |

## Full review
## 2. Business Impact Score: 5/10

The email itself is structurally sound and the offer is strong. The score is dragged down by the subject line failure and the preview text bug — both of which damage sender credibility and suppress open rates before a single pixel of email is rendered.

---

## 3. What's Working

- **Offer clarity.** "BUY 2 PAIRS GET THE 3RD FREE / LIMITED TIME ONLY THRU 4/19" is prominent, visually bold, and easy to parse at a glance.
- **Store-specific personalization.** The address, phone number, and "Tops Elmwood Plaza" headline correctly localize the email to a single store.
- **Hero image.** Clean, product-forward photography with multiple colorful shoes creates visual energy appropriate for a birthday theme.
- **CTA.** The "GET DIRECTIONS" button is appropriately sized, well-placed, and singular — no competing buttons at the primary action level.
- **Utility rail.** App download, curbside pickup, and store finder are useful secondary modules that support omnichannel behavior without cluttering the main funnel.

---

## 4. What's Weak

- **Subject line is broken.** The `[Test]:` prefix and full internal campaign code (`RET_US_NA_U_STORE1408_ZIP_EN_04172026`) are exposed verbatim. This reads as a QA escape to any recipient and erodes trust.
- **Preview text is raw JSON.** The inbox snippet displays `[{ "@context": "http://schema.org/", "@type": "Organization", "logo":...` — completely unreadable and burns the second most valuable inbox real estate.
- **"Tops Elmwood Plaza" is ambiguous.** As a headline it reads awkwardly — it's unclear whether it means "the top store at Elmwood Plaza" or is a half-rendered dynamic token. Needs a more natural phrasing.
- **Birthday theme is thin.** The "Celebrate our birthday!" headline and confetti border are present, but the email doesn't lean into the occasion as a reason the deal exists. There's no emotional hook — no brand story, no milestone, no "years of doing X" moment.
- **Navigation links are text-only.** The WOMEN / MEN / KIDS category rail at the bottom is useful but visually flat. No imagery, no product preview, no urgency signal.

---

## 5. Recommendations

1. **Immediately fix the subject line.** Strip `[Test]:` and the campaign code before any further sends. The human-readable portion ("SALE Ends Soon! Celebrate our Birthday in Buffalo") is serviceable and should stand alone.
2. **Add a proper preview text string.** Set a plain-text preheader that reinforces the offer, e.g., *"Buy 2 pairs, get the 3rd free — in-store only through 4/19."*
3. **Rewrite the store-location headline.** Replace "Tops Elmwood Plaza" with something explicit: *"Now at Elmwood Plaza, Buffalo"* or *"Your Local Buffalo Store."*
4. **Strengthen the birthday rationale.** Add one sentence tying the deal to the brand anniversary — it turns a generic sale into a meaningful event and increases emotional resonance.
5. **Add urgency to the navigation rail.** Badge "NEW ARRIVALS" or "SALE" with a small visual indicator to increase click-through on secondary categories.

---

## 6. Bottom Line

A solid local-store sale email undermined by two QA failures that should have been caught before deployment. Fix the subject line and preview text, and this is a perfectly functional store-traffic driver. The offer is real, the CTA is clear, and the structure is clean.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: RET_US_NA_U_STORE1408_ZIP_EN_04172026SALE Ends Soon! Celebrate our Birthday in Buffalo`
- **Length:** 95 characters
- **Scores (1-10):** Clarity `2`, Curiosity `3`, Personalization `5`, Urgency `5`, Specificity `6`
- **Strengths:**
  - Geographic specificity ("Buffalo") aids local relevance
  - "SALE Ends Soon" carries genuine urgency if isolated
- **Weaknesses:**
  - `[Test]:` prefix and raw campaign code destroy credibility and are immediately disqualifying in a production send
  - At 95 characters the line is too long; most clients will truncate before reaching the human-readable content
- **Alt A:** `Skechers Birthday Sale: Buy 2, Get the 3rd Free — Buffalo Store Only, Thru 4/19`
- **Alt B:** `We're celebrating — and you get the gift: B2G1 Free in Buffalo this weekend`

---

## 8. Evidence

- **Overall purpose:** Drive in-store traffic to the Buffalo/Elmwood Plaza location for a time-limited birthday sale event.
- **Hero / primary value proposition:** Full-width lifestyle image of a model holding multiple colorful shoes, branded "BOBS/FIT" label visible. Below it, the offer ("BUY 2 PAIRS GET THE 3RD FREE / THRU 4/19") is the dominant text block.
- **Membership / benefits section:** None present.
- **Product discoverability / recommendation modules:** Text-only category nav (WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE) near the bottom. No product tiles or imagery. Functional but low-engagement.
- **Utility / secondary modules:** App download (App Store + Google Play), Curbside Pickup icon, Find a Store icon, Afterpay and Klarna badges, social follow links (Facebook, Instagram). Well-organized row at the bottom.
- **Bugs / friction / clarity issues (visible in render):**
  - `[Test]:` and internal code string are fully visible in the subject line (confirmed from the provided subject, consistent with a QA escape)
  - Preview text renders as raw JSON-LD schema markup — visible in the provided preview field
  - "Tops Elmwood Plaza" reads as potentially unresolved dynamic copy or awkward phrasing

---

## Technical Audit

## Technical Audit — Skechers Birthday/Sale Email
**Campaign:** `RET_US_NA_U_STORE1408_ZIP_EN_04172026` | **Captured:** 2026-04-15

---

### 1. Technical Summary

The email is structurally sound (XHTML 1.0 Transitional, table-based layout, dual media-query breakpoints) but has a production-blocking subject line flag, a pervasive HTTP image problem affecting 13 assets, and an unverified authentication chain. No unreplaced merge tokens were detected.

---

### 2. Link & Tracking Issues

**`[Test]:` subject prefix — PRODUCTION BLOCKER**
The subject line was captured as `[Test]: RET_US_NA_U_STORE1408_ZIP_EN_04172026SALE Ends Soon!…`. The `[Test]:` marker must be stripped before any live send.

**28 click-redirect links not probed**
QA skipped all `click.emails.skechers.com` wrapped links. Destination URLs and UTM continuity cannot be confirmed from this build. See §6.

**Third-party audience-match pixels (Krux/Salesforce DMP)**
Two `beacon.krxd.net` pixels fire on open:
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25
  &partner_uid=e5a36492fb9b5fc2c87ffabb8e56d19ed0aa520638b1043bb37c2d19c42312dd
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid
  &partner_uid=32884357
```
The first passes a SHA-256 hashed identifier; the second passes a raw numeric subscriber ID (`32884357`) to a third-party domain. Confirm with legal/privacy that cross-site ID sharing is disclosed in Skechers' privacy policy and consistent with applicable state privacy laws (CCPA).

**HTTP open-tracking pixel (ink1000.com)**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8004129222&mi_ecmp=…
```
Mixed-content HTTP pixel will be silently blocked or proxied by Gmail and Outlook.com, breaking open-rate attribution for a meaningful share of recipients. Requires HTTPS endpoint.

---

### 3. Rendering & Accessibility

**13 images served over HTTP — will be blocked in major clients**
Both the `image.emails.skechers.com` CDN and `ink1000.com` serve images over plain HTTP:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
… (8 additional CDN images, social icons, store/service badges)
```
Gmail proxies all HTTP image URLs through its own cache; Outlook.com blocks them outright unless images are enabled. Switch `image.emails.skechers.com` CDN references to `https://`.

**Missing `alt` text on 2 images**
- `o.gif` — `http://www.ink1000.com/…` (tracking pixel, `alt=""` is acceptable here but currently absent)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no `alt` attribute

**Duplicate CSS media query blocks**
Identical rule sets are declared twice — once for `max-width: 375px` and again verbatim for `max-width: 640px`. The `.show` class appears in three separate `@media` blocks. This is harmless in most clients but adds ~1 KB of dead CSS and creates maintenance risk.

**`-webkit-text-size-adjust: none`**
Applied globally via `* { -webkit-text-size-adjust: none; }`. This prevents iOS Mail from scaling text on zoom — accessibility concern for low-vision users. Prefer `100%` over `none`.

---

### 4. Personalization & Merge Tokens

No unreplaced tokens detected. The campaign ID `RET_US_NA_U_STORE1408_ZIP_EN_04172026` is consistently bound across all tracking pixel `&mi_ecmp=` and Krux `campaignid=` parameters. Subscriber ID `mi_u=8004129222` in the ink1000 pixel appears correctly substituted.

---

### 5. Compliance

**SPF/DKIM authentication — unverified**
QA reports: `Authentication-Results header not found: Expected via AgentMail relay — SPF/DKIM status unknown`. Sending domain is `emails.skechers.com`. Cannot confirm alignment without a live received header. Verify DKIM signing and SPF `include` record for the ESP before send.

**Return Path / Validity monitoring pixel served over HTTP**
```
http://pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
Should be `https://`. Gmail proxying will distort inbox placement signals.

**CAN-SPAM / unsubscribe** — HTML is truncated; footer not visible in the supplied source. Confirm physical mailing address and one-click unsubscribe mechanism are present in the full render. The preheader block and hidden tracking table are correctly suppressed with `display:none !important`.

---

### 6. Email-to-Site Continuity

All 28 destination URLs are wrapped in `click.emails.skechers.com` redirects and were not probed by QA. The campaign ID string (`RET_US_NA_U_STORE1408_ZIP_EN_04172026`) is present in pixel parameters, which suggests UTM values are being passed at the redirect layer — but this cannot be confirmed without unwrapping the links. Before production send, spot-check at least the primary CTA link to confirm `utm_campaign`, `utm_source`, and `utm_medium` resolve correctly on the Skechers landing page.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | `[Test]:` subject prefix | Remove before any live send |
| **P1** | 13 HTTP image URLs | Switch `image.emails.skechers.com` CDN to HTTPS; update `ink1000.com` pixel endpoint |
| **P1** | HTTP monitoring pixels (ink1000, Return Path) | Update to HTTPS endpoints |
| **P1** | SPF/DKIM unverified | Pull authentication headers from a seeded inbox send and confirm alignment |
| **P2** | Raw subscriber ID in third-party Krux pixel | Confirm privacy policy disclosure; consider removing `subid` variant if not legally required |
| **P2** | Missing `alt` on content image `49468f73-...png` | Add descriptive `alt` text |
| **P2** | Unwrap and verify 28 click-redirect URLs | Confirm UTM params + landing page alignment on primary CTAs |
| **P3** | `* { -webkit-text-size-adjust: none }` | Change to `100%` |
| **P3** | Duplicate CSS media query blocks | Deduplicate for maintainability |
## Recent history

- [[2026-04-16-test-ret-us-na-u-store1173-zip-en-04162026-v3our-new-store-in-corona-hills-plaza]] — 5/10 (2026-04-16)
- [[2026-04-16-test-ret-us-na-u-store1669-zip-en-04162026-v3our-new-store-in-johnstown-is-openi]] — 4/10 (2026-04-16)
- [[2026-04-16-test-ret-us-na-u-store1678-zip-en-04162026-v3our-new-store-at-cottman-ave-is-ope]] — 4/10 (2026-04-16)

