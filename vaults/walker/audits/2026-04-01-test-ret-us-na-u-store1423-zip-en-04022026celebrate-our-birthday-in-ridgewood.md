---
slug: 2026-04-01-test-ret-us-na-u-store1423-zip-en-04022026celebrate-our-birthday-in-ridgewood
type: email
date: 2026-04-01
persona: walker
score: "6/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1423_ZIP_EN_04022026Celebrate our Birthday in Ridgewood"
tags: [email, score-6, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1423_ZIP_EN_04022026Celebrate our Birthday in Ridgewood
**Score:** 6/10 · **Type:** Email audit · **2026-04-01**
## Executive summary

- A store-specific birthday sale email for Skechers Ridgewood that leads with a strong promotional offer (Buy 2 Get 3 Free) and drives foot traffic with a clear CTA and store details. The concept is solid, but the email is short on visual richness and the promotional banner placement and hero image execution leave value on the table. Works as a functional direct-response piece; doesn't deliver the excitement a "birthday sale" framing promises.

## What's working

- **Offer clarity is excellent.** "BUY 2 PAIRS GET THE 3RD FREE" is large, bold, and impossible to miss. This is the most important message and it's treated accordingly.
- **Store details are present and prominent.** Address, phone number, and a "GET DIRECTIONS" CTA button give local customers everything they need to act immediately.
- **Deadline creates urgency.** "LIMITED TIME ONLY THRU 4/12" is visible and anchored near the offer.
- **Secondary navigation links** (WOMEN / MEN / KIDS / WIDE) give recipients a path to browse online if they don't want to visit in-store.
- **Utility footer is complete.** App download, curbside pickup, pay later options, and find-a-store are all present and organized.

## What's weak

- **The hero image undersells the birthday theme.** The product imagery and model shot are generic — there are no birthday-specific visuals, confetti, or brand energy that makes this feel celebratory. The "BIRTHDAY SALE" banner at the top is a small label, not a visual statement.
- **Store name placement is weak.** "Skechers Ridgewood" appears in plain text above the hero image, easy to skip. For a locally targeted email, this personalization should be more prominent.
- **The hero image is cluttered.** Multiple hands holding shoes around a model creates visual noise. The product being promoted is unclear.
- **No product specifics.** No featured styles, no prices, no "what's on sale" context. The offer is clear but the merchandise inspiration is absent — recipients have no reason to feel excited about specific products.
- **Email subject line contains the full test string** — `[Test]: RET_US_NA_U_STORE1423_ZIP_EN_04022026Celebrate our Birthday in Ridgewood` — which would be visible in any inbox. This is a production send risk.
- **Preview text is raw URL/token string**, not a marketing message. Any recipient viewing the preview in their inbox sees a broken experience.

## Recommendations

- 1. **Fix the subject line before any live send.** Strip the `[Test]:` prefix and the campaign code. Subject should read: *Celebrate Our Birthday! Buy 2, Get 3rd Free — Ridgewood Only.*
- 2. **Replace preview text with a real hook.** Something like: *"Your store is turning another year older — here's your gift: buy 2 pairs, get the 3rd free."*
- 3. **Give the birthday theme visual weight.** Add celebratory design elements to the hero — even simple branded confetti or a birthday badge overlay would close the gap between the promise and the visual.
- 4. **Feature 2–3 specific styles with names/prices.** Converts browse intent into purchase intent and gives the email a reason to be opened more than once.
- 5. **Increase "Skechers Ridgewood" treatment.** Make the store name feel like a headline, not an afterthought — it's the reason this email exists.
- | Priority | Issue | Action |
- |---|---|---|
- | **Blocker** | Subject line contains raw campaign ID | Fix token assembly before any live send; strip `[Test]:` prefix |
- | **Blocker** | All images served over HTTP | Update CDN configuration to serve `image.emails.skechers.com` assets over HTTPS |
- | **High** | Return Path pixel missing URL scheme | Prepend `https://` to `pixel.app.returnpath.net/...` src |
- | **High** | HTTP open-tracking pixel (ink1000.com) | Switch to HTTPS endpoint or confirm vendor provides one |
- | **High** | SPF/DKIM unverified | Confirm authentication headers are intact end-to-end before production deployment |
- | **Medium** | Missing alt text on 2 content images | Add descriptive alt text; at minimum add `alt=""` on decorative images |
- | **Medium** | Krux SHA-256 email hash + subscriber ID passed to third party unconditionally | Confirm legal basis for cross-device ID resolution under applicable privacy law |
- | **Low** | 28 click links unprobed | Manually verify UTM completeness and store-localized landing pages |

## Full review
## 1. Executive Summary

A store-specific birthday sale email for Skechers Ridgewood that leads with a strong promotional offer (Buy 2 Get 3 Free) and drives foot traffic with a clear CTA and store details. The concept is solid, but the email is short on visual richness and the promotional banner placement and hero image execution leave value on the table. Works as a functional direct-response piece; doesn't deliver the excitement a "birthday sale" framing promises.

---

## 2. Business Impact Score

**6 / 10**

---

## 3. What's Working

- **Offer clarity is excellent.** "BUY 2 PAIRS GET THE 3RD FREE" is large, bold, and impossible to miss. This is the most important message and it's treated accordingly.
- **Store details are present and prominent.** Address, phone number, and a "GET DIRECTIONS" CTA button give local customers everything they need to act immediately.
- **Deadline creates urgency.** "LIMITED TIME ONLY THRU 4/12" is visible and anchored near the offer.
- **Secondary navigation links** (WOMEN / MEN / KIDS / WIDE) give recipients a path to browse online if they don't want to visit in-store.
- **Utility footer is complete.** App download, curbside pickup, pay later options, and find-a-store are all present and organized.

---

## 4. What's Weak

- **The hero image undersells the birthday theme.** The product imagery and model shot are generic — there are no birthday-specific visuals, confetti, or brand energy that makes this feel celebratory. The "BIRTHDAY SALE" banner at the top is a small label, not a visual statement.
- **Store name placement is weak.** "Skechers Ridgewood" appears in plain text above the hero image, easy to skip. For a locally targeted email, this personalization should be more prominent.
- **The hero image is cluttered.** Multiple hands holding shoes around a model creates visual noise. The product being promoted is unclear.
- **No product specifics.** No featured styles, no prices, no "what's on sale" context. The offer is clear but the merchandise inspiration is absent — recipients have no reason to feel excited about specific products.
- **Email subject line contains the full test string** — `[Test]: RET_US_NA_U_STORE1423_ZIP_EN_04022026Celebrate our Birthday in Ridgewood` — which would be visible in any inbox. This is a production send risk.
- **Preview text is raw URL/token string**, not a marketing message. Any recipient viewing the preview in their inbox sees a broken experience.

---

## 5. Recommendations

1. **Fix the subject line before any live send.** Strip the `[Test]:` prefix and the campaign code. Subject should read: *Celebrate Our Birthday! Buy 2, Get 3rd Free — Ridgewood Only.*
2. **Replace preview text with a real hook.** Something like: *"Your store is turning another year older — here's your gift: buy 2 pairs, get the 3rd free."*
3. **Give the birthday theme visual weight.** Add celebratory design elements to the hero — even simple branded confetti or a birthday badge overlay would close the gap between the promise and the visual.
4. **Feature 2–3 specific styles with names/prices.** Converts browse intent into purchase intent and gives the email a reason to be opened more than once.
5. **Increase "Skechers Ridgewood" treatment.** Make the store name feel like a headline, not an afterthought — it's the reason this email exists.

---

## 6. Bottom Line

This email will drive some foot traffic — the offer is clear, the store info is there, and the CTA works. But it's a functional coupon, not a brand moment. The birthday framing creates an expectation of energy and celebration that the visuals don't deliver. Fix the subject line and preview text before sending. Inject product and personality before this template scales.

---

## 7. Evidence

**Overall purpose:** Drive in-store foot traffic to Skechers Ridgewood with a time-limited birthday sale offer (Buy 2 Get 3 Free, through 4/12).

**Hero / primary value proposition:** Large bold typography announces the B2G3F offer over a product hero image featuring a model surrounded by shoes. The offer reads clearly but the image is busy and unfocused.

**Membership / benefits section:** Not present. No Skechers Elite / loyalty program reference visible.

**Product discoverability / recommendation modules:** Minimal — only category navigation links (WOMEN, MEN, KIDS, WIDE) are shown. No individual product tiles, style names, or prices.

**Utility / secondary modules:** Download the App, Curbside Pickup, Shop Now Pay Later (Afterpay / Klarna), Find a Store — all visible and functional-looking in the footer area.

**Bugs / friction / clarity issues:**
- Subject line contains a raw `[Test]:` prefix and full campaign code string — clearly visible in the email header shown.
- Preview text renders as a raw URL/token string (`Skechers(R) https://view.emails.skechers.com/?vawpToken=...`) rather than a marketing message — this would appear broken in any inbox preview.
- No broken images or overlapping text visible in the render itself.

---

## Technical Audit

## Technical Audit — Skechers Store Birthday Email
**From:** `no-reply@emails.skechers.com` | **Campaign:** `RET_US_NA_U_STORE1423_ZIP_EN_04022026`

---

### 1. Technical Summary

This email has two blocking issues that should prevent production deployment: the subject line contains an unfired campaign ID token, and all hosted images are served over HTTP. Authentication status could not be verified via the relay chain.

---

### 2. Link & Tracking Issues

**Broken tracking pixel — missing protocol:**
The Return Path inbox monitoring pixel is missing its URL scheme entirely:
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"
```
Without `https://`, this resolves as a relative path and will fail silently in all clients. Inbox placement monitoring is effectively disabled for this send.

**Third-party user-match beacons passing PII derivatives:**
Two Salesforce/Krux beacons fire in the hidden preheader div:
```
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25
  &partner_uid=d115e72ce7a11a583b397db8a352f6d1eace6c3d2077fa305fff4bbe0dee8b2d
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid
  &partner_uid=102541952
```
The `_sha25` variant passes what appears to be a SHA-256 hashed email address as `partner_uid`. The `_subid` variant passes a raw SFMC subscriber ID. Both fire unconditionally on open — confirm consent/data-processing basis is in place for cross-device identity resolution.

**28 click-redirect links unverified:** All route through `click.emails.skechers.com` — destination URLs and UTM parameter completeness could not be confirmed by automated probes.

---

### 3. Rendering & Accessibility

**Critical — all image CDN assets served over HTTP:**
Every image hosted on `image.emails.skechers.com` uses HTTP, not HTTPS. Modern email clients (Gmail, Outlook.com, iOS Mail) proxy or block mixed-content images. Affected assets include all content images and all footer icons:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-eec2-471a-898d-0ca1cea7e115.png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-782c-4fb6-967b-d1dfa5ecbfdc.png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-7aed-467a-a3ae-b290eea2a4a2.png  (Facebook)
... and 8 additional assets
```
Additionally, the ink1000.com open-tracking pixel is HTTP:
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```

**Missing alt text on 3 images:**
- `o.gif` (ink1000 open pixel) — minor, but flagged by QA
- `dde00662-169f-447d-b0e2-fc65f6c2290c.png`
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`

Images with blocked HTTP sources and no alt text render as broken image icons with no fallback text — a significant render failure state.

---

### 4. Personalization & Merge Tokens

**Critical — campaign ID bleeding into subject line:**
The subject line reads:
```
[Test]: RET_US_NA_U_STORE1423_ZIP_EN_04022026Celebrate our Birthday in Ridgewood
```
The campaign identifier `RET_US_NA_U_STORE1423_ZIP_EN_04022026` is concatenated directly before the consumer-facing subject text with no delimiter or space. This is either an unfired/malformed merge token or a platform-side subject line assembly error. Combined with the `[Test]:` prefix, this send appears to be a test deployment that should not have reached live recipients.

No other unresolved merge tokens (`%%`, `{{`, `*|`) were visible in the truncated HTML.

---

### 5. Compliance

**SPF/DKIM status unverified:**
QA reports `Authentication-Results` header not found via the AgentMail relay. SPF and DKIM pass/fail status is unknown. If authentication is failing or missing, this increases spam folder placement risk and undermines DMARC enforcement for the `emails.skechers.com` subdomain.

CAN-SPAM physical address and unsubscribe link presence could not be confirmed from the truncated HTML provided — these should be verified in the full footer.

---

### 6. Email-to-Site Continuity

UTM parameter values on all 28 click-redirect links could not be verified (links resolve through `click.emails.skechers.com` and were skipped by the HTTP probe). Manually confirm:
- `utm_campaign` matches `RET_US_NA_U_STORE1423_ZIP_EN_04022026`
- `utm_medium=email` and `utm_source=skechers` (or equivalent) are present
- Store-specific landing page reflects the Ridgewood birthday offer and `STORE1423` localization if that parameter drives geo-targeting

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Blocker** | Subject line contains raw campaign ID | Fix token assembly before any live send; strip `[Test]:` prefix |
| **Blocker** | All images served over HTTP | Update CDN configuration to serve `image.emails.skechers.com` assets over HTTPS |
| **High** | Return Path pixel missing URL scheme | Prepend `https://` to `pixel.app.returnpath.net/...` src |
| **High** | HTTP open-tracking pixel (ink1000.com) | Switch to HTTPS endpoint or confirm vendor provides one |
| **High** | SPF/DKIM unverified | Confirm authentication headers are intact end-to-end before production deployment |
| **Medium** | Missing alt text on 2 content images | Add descriptive alt text; at minimum add `alt=""` on decorative images |
| **Medium** | Krux SHA-256 email hash + subscriber ID passed to third party unconditionally | Confirm legal basis for cross-device ID resolution under applicable privacy law |
| **Low** | 28 click links unprobed | Manually verify UTM completeness and store-localized landing pages |
## Recent history

- [[2026-04-01-test-mkg-us-ecmpur-u-arch-ecom-en-04032026-ayour-go-to-arch-fit-upgraded]] — 5/10 (2026-04-01)
- [[2026-04-01-test-ret-us-na-u-store1569-zip-en-04022026sale-ending-soon-celebrate-our-birthda]] — 6.5/10 (2026-04-01)
- [[2026-04-01-your-skechers-plus-monthly-summary-is-here]] — 5/10 (2026-04-01)

