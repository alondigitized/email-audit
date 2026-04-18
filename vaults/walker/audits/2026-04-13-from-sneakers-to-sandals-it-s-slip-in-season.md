---
slug: 2026-04-13-from-sneakers-to-sandals-it-s-slip-in-season
type: email
date: 2026-04-13
persona: walker
score: "5/10"
sender: SKECHERS
subject: "From Sneakers to Sandals it's Slip-In Season 🤩"
tags: [email, score-5, sender/skechers]
---
# From Sneakers to Sandals it's Slip-In Season 🤩
**Score:** 5/10 · **Type:** Email audit · **2026-04-13**
## Executive summary

- Solid offer, coherent seasonal narrative, acceptable creative — dragged down significantly by the preview text bug, generic hero copy, and undersized CTAs.

## What's working

- **Discount banner is front and center.** The 20% off single pair offer is the first thing visible below the logo, giving recipients an immediate reason to engage.
- **Three-module product architecture is coherent.** Cozy Fit → Max Cushioning → Sandals maps neatly onto "Slip-In Season" and gives three distinct entry points for different shopper intents.
- **Visual hierarchy is clear.** Dark lifestyle headers with bold category labels make scanning effortless. Each module has its own "SHOP" CTA.
- **Footer navigation is thorough.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE covers the full catalog without cluttering the body.

## What's weak

- **Preview text is catastrophically broken.** Instead of a readable teaser, recipients see raw JSON-LD schema markup (`[{ "@context": "http://schema.org/"...`). This is visible to every recipient in every inbox client before they open. It reads as spam, erodes trust, and wastes one of the highest-leverage real estate slots in email.
- **Hero headline is generic.** "NEW STYLE DROP" says nothing distinctive. It could apply to any brand, any season. The seasonal hook ("Slip-In Season") is already in the subject line — the hero should reinforce and deepen it, not reset to a generic fallback.
- **CTAs are small and low-contrast.** The "SHOP COZY FIT / MAX CUSHIONING / SANDALS" buttons are narrow and modest. On mobile they'd require precision tapping. A wider, bolder button treatment would improve click-through.
- **Cozy Fit imagery reads slightly cluttered.** The Cozy Fit section shows multiple overlapping shoe angles that feel denser and less premium than the other two modules.
- **No urgency on the offer.** The 20% off banner shows no expiration date or code visibility that's legible at this render size. Time-limited framing significantly improves conversion.

## Recommendations

- 1. **Fix the preview text immediately.** This is a blocking issue. The JSON-LD schema block should never reach the preview slot. Audit the template and deploy a fix before the next send.
- 2. **Rewrite the hero headline** to echo the subject line's seasonal energy. Something like "Your Slip-In Season Starts Here" connects the open to the landing and reduces dissonance.
- 3. **Widen CTAs** to full-module width or close to it. Small centered buttons underperform on mobile.
- 4. **Add an offer deadline** to the 20% banner — even "This week only" increases urgency and clicks without requiring a hard date.
- 5. **Clean up the Cozy Fit image composition.** The other two modules look more editorial; Cozy Fit should match that register.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Empty name merge token | Add AMPscript/Liquid fallback: `IF @FirstName == "" THEN "there"` |
- | **P0** | Returnpath pixel broken (missing protocol) | Prefix with `https://` → `https://pixel.app.returnpath.net/...` |
- | **P1** | All `image.emails.skechers.com` assets over HTTP | Update CDN or template to serve `https://image.emails.skechers.com/...` |
- | **P1** | `ink1000.com` open pixel over HTTP | Switch to HTTPS or remove if redundant with SFMC open pixel |
- | **P1** | Fix `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
- | **P2** | `maximum-scale=1` + `text-size-adjust: none` | Remove `maximum-scale=1`; change `text-size-adjust` to `100%` |
- | **P2** | Missing `alt` on `49468f73-...png` | Add descriptive alt text |
- | **P2** | Authentication-Results not captured | Configure AgentMail relay to preserve original auth headers |
- | **P3** | Duplicate media query blocks | Consolidate `375px` and `640px` blocks; keep one or differentiate breakpoints |
- | **P3** | `plaintext partner_uid` in Krux pixel | Confirm this is an internal ID, not a customer-facing identifier |

## Full review
## 2. Business Impact Score: **5 / 10**

Solid offer, coherent seasonal narrative, acceptable creative — dragged down significantly by the preview text bug, generic hero copy, and undersized CTAs.

---

## 3. What's Working

- **Discount banner is front and center.** The 20% off single pair offer is the first thing visible below the logo, giving recipients an immediate reason to engage.
- **Three-module product architecture is coherent.** Cozy Fit → Max Cushioning → Sandals maps neatly onto "Slip-In Season" and gives three distinct entry points for different shopper intents.
- **Visual hierarchy is clear.** Dark lifestyle headers with bold category labels make scanning effortless. Each module has its own "SHOP" CTA.
- **Footer navigation is thorough.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE covers the full catalog without cluttering the body.

---

## 4. What's Weak

- **Preview text is catastrophically broken.** Instead of a readable teaser, recipients see raw JSON-LD schema markup (`[{ "@context": "http://schema.org/"...`). This is visible to every recipient in every inbox client before they open. It reads as spam, erodes trust, and wastes one of the highest-leverage real estate slots in email.
- **Hero headline is generic.** "NEW STYLE DROP" says nothing distinctive. It could apply to any brand, any season. The seasonal hook ("Slip-In Season") is already in the subject line — the hero should reinforce and deepen it, not reset to a generic fallback.
- **CTAs are small and low-contrast.** The "SHOP COZY FIT / MAX CUSHIONING / SANDALS" buttons are narrow and modest. On mobile they'd require precision tapping. A wider, bolder button treatment would improve click-through.
- **Cozy Fit imagery reads slightly cluttered.** The Cozy Fit section shows multiple overlapping shoe angles that feel denser and less premium than the other two modules.
- **No urgency on the offer.** The 20% off banner shows no expiration date or code visibility that's legible at this render size. Time-limited framing significantly improves conversion.

---

## 5. Recommendations

1. **Fix the preview text immediately.** This is a blocking issue. The JSON-LD schema block should never reach the preview slot. Audit the template and deploy a fix before the next send.
2. **Rewrite the hero headline** to echo the subject line's seasonal energy. Something like "Your Slip-In Season Starts Here" connects the open to the landing and reduces dissonance.
3. **Widen CTAs** to full-module width or close to it. Small centered buttons underperform on mobile.
4. **Add an offer deadline** to the 20% banner — even "This week only" increases urgency and clicks without requiring a hard date.
5. **Clean up the Cozy Fit image composition.** The other two modules look more editorial; Cozy Fit should match that register.

---

## 6. Bottom Line

SKECHERS has a solid seasonal structure and a real offer, but the broken preview text is the story here. Until that's fixed, this email is actively damaging sender reputation and subscriber trust on every open. Everything else is iteration — the preview bug is a rollback-or-hotfix situation.

---

## 7. Subject Line Analysis

- **Subject:** `From Sneakers to Sandals it's Slip-In Season 🤩`
- **Length:** 45 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `2`, Urgency `3`, Specificity `5`
- **Strengths:**
  - Seasonal narrative ("Sneakers to Sandals") creates a clear journey arc that implies relevance and timeliness
  - Readable and punchy at mobile inbox truncation lengths
- **Weaknesses:**
  - No hook tied to the actual offer (20% off) — curiosity gap is thin, open is driven by brand recognition alone
  - Emoji choice (🤩) reads excitable but insubstantial; doesn't amplify the message
- **Alt A:** `Slip into Spring: 20% Off One Pair — Shop the New Drop`
- **Alt B:** `New Sandals, Cozy Fits & Max Cushioning — 20% Off This Week`

---

## 8. Evidence

- **Overall purpose:** Seasonal transition email promoting SKECHERS' spring/slip-on lineup (Cozy Fit, Max Cushioning, Sandals) with a 20% off single pair incentive.
- **Hero / primary value prop:** "NEW STYLE DROP" over a lifestyle shot of two people walking in casual footwear. Functional but generic — the seasonal promise from the subject line is not reinforced.
- **Membership / benefits section:** Not present. No loyalty program callout, no member-exclusive framing on the discount.
- **Product discoverability / recommendation modules:** Three clearly labeled modules — Cozy Fit, Max Cushioning, Sandals — each with category imagery and a dedicated "SHOP" CTA. Good separation of intent. No personalized or "recommended for you" logic visible.
- **Utility / secondary modules:** Footer includes full category nav (WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE) plus app download badges and social icons. Well-organized utility layer that doesn't intrude on the main experience.
- **Bugs / friction / clarity issues:**
  - **Preview text exposes raw JSON-LD schema markup** — visible to all recipients before open. Confirmed visible in the email metadata provided. This is the most serious issue in the email.
  - CTA buttons are small relative to module width — friction for mobile users.
  - Offer terms/expiry not legible at render size in the discount banner.

---

## Technical Audit

## Technical Audit — SKECHERS "Slip-In Season" (2026-04-13)

---

### 1. Technical Summary

The email has one confirmed broken personalization token (empty name field) and a systemic HTTP/HTTPS mixed-content problem across all hosted images. Authentication headers were not captured through the relay, leaving deliverability posture unverifiable.

---

### 2. Link & Tracking Issues

**27 click-redirect links unverifiable**
All CTA links route through `click.emails.skechers.com` (Salesforce Marketing Cloud click-tracking). Destination URLs and UTM parameter integrity could not be confirmed — flagged for manual spot-check.

**Returnpath pixel has no protocol prefix (broken relative URL)**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
Missing `https://` means this resolves as a relative path and will 404. Inbox placement monitoring via Return Path/Validity will silently fail for this send.

**ink1000 open-tracking pixel uses HTTP**
```
src: http://www.ink1000.com/p/up/.../o.gif
```
HTTP pixel will be blocked by Gmail, Outlook.com, and Apple Mail image proxies, corrupting open-rate data for this secondary tracker.

---

### 3. Rendering & Accessibility

**11 images served over HTTP — blocking risk**
All `image.emails.skechers.com` assets use `http://`:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
... (7 additional footer images)
```
Modern clients proxy all images over HTTPS. HTTP sources that don't redirect will break; clients that enforce mixed-content blocking will suppress the images entirely.

**2 images missing `alt` text**
- `o.gif` (`http://www.ink1000.com/...`) — tracking pixel, `alt=""` is acceptable but missing entirely
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — non-tracking image with no alt; content unknown without full source

**`maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Prevents user-initiated zoom on mobile. Fails WCAG 1.4.4 (Resize Text).

**`-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; }
```
Disables iOS automatic text-size adjustment for all elements. Combined with `maximum-scale=1`, users with low vision cannot enlarge text.

**Malformed `<meta>` tags**
Both `<meta content="text/html; charset=utf-8" />` and `<meta content="IE=Edge" />` are missing required `http-equiv` attributes. Correct forms:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```
Without `http-equiv`, these tags are inert.

**Duplicate media query blocks**
`max-width: 375px` and `max-width: 640px` blocks contain identical rule sets. No functional breakage, but increases payload size and maintenance surface.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty name in greeting**
QA confirmed the name merge token resolved to an empty string, producing output like `"Hi ,"`. The token (likely `%%=v(@FirstName)=%%` or equivalent AMPscript) either had no fallback default or the subscriber record has a null `FirstName` field. A fallback (e.g., `"there"`) is absent.

---

### 5. Compliance

**Authentication-Results header not captured**
SPF and DKIM pass/fail status is unknown — the email was received via AgentMail relay without forwarding the original `Authentication-Results` header. Cannot confirm DMARC alignment. This is a data-collection gap, not a confirmed failure, but should be resolved at the relay level.

**beacon.krxd.net pixels present**
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_...&partner_uid=9153f33fe5cdf59baf088bb835d3b39ef90f188bd8540a4faba92899227ced00
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_...&partner_uid=121173391
```
These are third-party identity-resolution pixels (Salesforce DMP / Krux). The `partner_uid` in the second pixel (`121173391`) appears to be a plaintext subscriber ID. The first pixel includes a SHA-256 hashed email. Depending on jurisdiction, cross-device tracking pixels may require explicit consent disclosure — not evaluated here as a legal matter, but flagged for compliance review.

**CAN-SPAM / unsubscribe** — Unsubscribe link and physical address presence cannot be confirmed from the truncated source. No issues detected in the visible portion.

---

### 6. Email-to-Site Continuity

**UTM parameters unverifiable through click redirects**
All 27 links are wrapped in `click.emails.skechers.com` redirects. The campaign token visible in tracking pixels is consistent:
```
MKG_US_NONPURCLICK_U_SLIPIN_NONPURCH_EN_04132026
```
Manual verification is required to confirm UTM parameters are appended post-redirect and match this campaign ID pattern.

**No issues found** with landing page domain alignment based on available data.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Empty name merge token | Add AMPscript/Liquid fallback: `IF @FirstName == "" THEN "there"` |
| **P0** | Returnpath pixel broken (missing protocol) | Prefix with `https://` → `https://pixel.app.returnpath.net/...` |
| **P1** | All `image.emails.skechers.com` assets over HTTP | Update CDN or template to serve `https://image.emails.skechers.com/...` |
| **P1** | `ink1000.com` open pixel over HTTP | Switch to HTTPS or remove if redundant with SFMC open pixel |
| **P1** | Fix `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
| **P2** | `maximum-scale=1` + `text-size-adjust: none` | Remove `maximum-scale=1`; change `text-size-adjust` to `100%` |
| **P2** | Missing `alt` on `49468f73-...png` | Add descriptive alt text |
| **P2** | Authentication-Results not captured | Configure AgentMail relay to preserve original auth headers |
| **P3** | Duplicate media query blocks | Consolidate `375px` and `640px` blocks; keep one or differentiate breakpoints |
| **P3** | `plaintext partner_uid` in Krux pixel | Confirm this is an internal ID, not a customer-facing identifier |
## Recent history

- [[2026-04-13-put-that-10-off-to-good-use]] — 5/10 (2026-04-13)
- [[2026-04-13-save-on-nike-styles-for-the-whole-crew]] — 5/10 (2026-04-13)
- [[2026-04-13-your-cart-expires-soon]] — 5/10 (2026-04-13)

