---
slug: 2026-04-10-test-mkg-us-ecmpurl24-u-slipin-ecom-en-04132026from-sneakers-to-sandals-it-s-sli
type: email
date: 2026-04-10
persona: walker
score: "4/10"
sender: SKECHERS
subject: "[Test]: MKG_US_ECMPURL24_U_SLIPIN_ECOM_EN_04132026From Sneakers to Sandals it's Slip-In Season 🤩"
tags: [email, score-4, sender/skechers]
---
# [Test]: MKG_US_ECMPURL24_U_SLIPIN_ECOM_EN_04132026From Sneakers to Sandals it's Slip-In Season 🤩
**Score:** 4/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A structurally clean seasonal email organized around three slip-in product pillars — Cozy Fit, Max Cushioning, and Sandals — anchored by a BOGO 30% off banner. The visual hierarchy is logical and the category progression works. However, this email has two production-blocking defects visible before a recipient even opens it: a `[Test]:` prefixed subject line with a raw campaign code, and a preview text rendering raw JSON-LD structured data markup. If this went live, those two issues alone would crater open rates and damage brand credibility.
- Content and structure would score a 6–7. The pre-open experience drags it to a 4. A subscriber seeing `[{ "@context": "http://schema.org/"...` as their preview snippet will not open the email.

## What's working

- **Promo banner is prominent and clear.** "BUY ONE, GET ONE 30% OFF" is the first thing the eye hits below the nav, which is right for a discount-led message.
- **Three-section category flow is intuitive.** Cozy Fit → Max Cushioning → Sandals creates a natural product journey that mirrors how someone shops a seasonal refresh.
- **CTAs are consistent and direct.** "SHOP COZY FIT STYLES," "SHOP MAX CUSHIONING," "SHOP SANDALS" are exactly what they need to be — no ambiguity.
- **Lifestyle imagery is appropriately aspirational.** The outdoor/active shots in the hero and category sections match the seasonal premise.
- **Footer navigation and secondary utility links** (Women, Men, Kids, Clothing, New Arrivals, Sale) are cleanly laid out with app download and social follow-up.

## What's weak

- **Preview text is broken with raw JSON-LD.** The inbox preview reads `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — structured data markup is bleeding into the visible preview snippet. This is a serious send-time defect.
- **Subject line carries the test prefix.** `[Test]: MKG_US_ECMPURL24_U_SLIPIN_ECOM_EN_04132026` is fully exposed. If this reached real subscribers, the campaign code does the opposite of brand storytelling.
- **Hero "NEW STYLE DROP" underdelivers.** The headline is generic. For a slip-in season launch, this is a missed opportunity to lead with something product-specific or seasonal. "Slip Into Something New" would have done more work.
- **No pricing or urgency signal on the BOGO offer.** The banner says 30% off on the second item, but there's no expiry, minimum spend, or qualifying product clarity visible — which reduces conversion pressure.
- **Sandals section feels thin.** Compared to Cozy Fit and Max Cushioning (which show multiple shoes), the Sandals section shows a single pair. For a "Sandals" category header, this undersells the breadth.

## Recommendations

- 1. **Fix the preview text immediately** — the JSON-LD structured data must be hidden from inbox rendering. This is a production-blocking bug.
- 2. **Strip the `[Test]:` prefix and campaign code** from the subject before any live deployment.
- 3. **Replace "NEW STYLE DROP" with a seasonal headline** that reinforces the slip-in/seasonal thesis — you've already done the work in the subject line, carry it into the body.
- 4. **Add urgency to the BOGO banner** — even a simple "This Weekend Only" or "Through Sunday" line would increase click intent.
- 5. **Add a second sandal style or a carousel to the Sandals module** — category depth sells the breadth of the assortment.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Empty greeting merge token | Add fallback value; re-QA with a null first-name seed address |
- | **P0** | `[Test]:` subject prefix + malformed subject | Strip prefix; add space before display subject |
- | **P1** | All `image.emails.skechers.com` URLs are HTTP | Switch CDN protocol to HTTPS across all image assets |
- | **P1** | ink1000 open pixel is HTTP | Update to `https://` or replace with an HTTPS-capable tracker |
- | **P1** | DKIM/SPF unverified | Send to a seed inbox and confirm `Authentication-Results: dkim=pass` |
- | **P2** | Missing alt text on content image | Add descriptive alt to `49468f73...png` |
- | **P2** | Malformed `<meta>` tags | Add `http-equiv` attributes |
- | **P3** | Global text-size-adjust: none | Scope to specific elements or remove |
- | **P3** | Duplicate 375px media query block | Remove redundant block; 640px rule covers it |
- | **P3** | Krux pixel data-sharing | Confirm subscriber ID pass-through is disclosed in privacy policy |

## Full review
## Skechers — "From Sneakers to Sandals, it's Slip-In Season"

---

### 1. Executive Summary

A structurally clean seasonal email organized around three slip-in product pillars — Cozy Fit, Max Cushioning, and Sandals — anchored by a BOGO 30% off banner. The visual hierarchy is logical and the category progression works. However, this email has two production-blocking defects visible before a recipient even opens it: a `[Test]:` prefixed subject line with a raw campaign code, and a preview text rendering raw JSON-LD structured data markup. If this went live, those two issues alone would crater open rates and damage brand credibility.

---

### 2. Business Impact Score: **4 / 10**

Content and structure would score a 6–7. The pre-open experience drags it to a 4. A subscriber seeing `[{ "@context": "http://schema.org/"...` as their preview snippet will not open the email.

---

### 3. What's Working

- **Promo banner is prominent and clear.** "BUY ONE, GET ONE 30% OFF" is the first thing the eye hits below the nav, which is right for a discount-led message.
- **Three-section category flow is intuitive.** Cozy Fit → Max Cushioning → Sandals creates a natural product journey that mirrors how someone shops a seasonal refresh.
- **CTAs are consistent and direct.** "SHOP COZY FIT STYLES," "SHOP MAX CUSHIONING," "SHOP SANDALS" are exactly what they need to be — no ambiguity.
- **Lifestyle imagery is appropriately aspirational.** The outdoor/active shots in the hero and category sections match the seasonal premise.
- **Footer navigation and secondary utility links** (Women, Men, Kids, Clothing, New Arrivals, Sale) are cleanly laid out with app download and social follow-up.

---

### 4. What's Weak

- **Preview text is broken with raw JSON-LD.** The inbox preview reads `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — structured data markup is bleeding into the visible preview snippet. This is a serious send-time defect.
- **Subject line carries the test prefix.** `[Test]: MKG_US_ECMPURL24_U_SLIPIN_ECOM_EN_04132026` is fully exposed. If this reached real subscribers, the campaign code does the opposite of brand storytelling.
- **Hero "NEW STYLE DROP" underdelivers.** The headline is generic. For a slip-in season launch, this is a missed opportunity to lead with something product-specific or seasonal. "Slip Into Something New" would have done more work.
- **No pricing or urgency signal on the BOGO offer.** The banner says 30% off on the second item, but there's no expiry, minimum spend, or qualifying product clarity visible — which reduces conversion pressure.
- **Sandals section feels thin.** Compared to Cozy Fit and Max Cushioning (which show multiple shoes), the Sandals section shows a single pair. For a "Sandals" category header, this undersells the breadth.

---

### 5. Recommendations

1. **Fix the preview text immediately** — the JSON-LD structured data must be hidden from inbox rendering. This is a production-blocking bug.
2. **Strip the `[Test]:` prefix and campaign code** from the subject before any live deployment.
3. **Replace "NEW STYLE DROP" with a seasonal headline** that reinforces the slip-in/seasonal thesis — you've already done the work in the subject line, carry it into the body.
4. **Add urgency to the BOGO banner** — even a simple "This Weekend Only" or "Through Sunday" line would increase click intent.
5. **Add a second sandal style or a carousel to the Sandals module** — category depth sells the breadth of the assortment.

---

### 6. Bottom Line

The bones are good. Three-pillar seasonal structure, strong BOGO hook, clean CTAs. But this email is not ready to send. The preview text bug is severe enough to functionally break the open rate, and the exposed test prefix signals a QA failure. Fix both, strengthen the hero, and add urgency to the promo — then this is a solid mid-funnel seasonal push.

---

### 7. Evidence

| Module | What's Visible |
|---|---|
| **Overall purpose** | Seasonal "Slip-In" category launch with a promotional BOGO 30% off overlay across three product families |
| **Hero / primary value prop** | "NEW STYLE DROP" headline over a lifestyle outdoor shot — seasonal but generic; doesn't name the slip-in premise |
| **Membership / benefits** | None visible — no loyalty, no member-exclusive framing on the offer |
| **Product discoverability** | Three modules (Cozy Fit, Max Cushioning, Sandals), each with a single representative image and a direct shop CTA |
| **Utility / secondary modules** | Footer nav links across all categories, app download badges (App Store + Google Play), social follow section |
| **Bugs / friction** | (1) Preview text renders raw JSON-LD schema markup — visible in inbox before open. (2) Subject line contains `[Test]:` prefix and full internal campaign code. Both are visible to recipients. |

---

## Technical Audit

## Technical Audit — Skechers Slip-In Season (MKG_US_ECMPURL24_U_SLIPIN_ECOM_EN_04132026)

---

### 1. Technical Summary

This test send has one confirmed broken experience (empty greeting merge token) and a pervasive HTTP mixed-content problem affecting at least 13 image assets, including the primary open-tracking pixel and the logo. The email is **not production-ready** in its current state.

---

### 2. Link & Tracking Issues

**[INFO] 27 click-tracking links unverified**
All CTA links route through `click.emails.skechers.com` redirect wrappers. QA probes were skipped; destination URLs and UTM parameter integrity could not be confirmed programmatically.

**[WARN] Third-party DMP pixel exposes subscriber identifiers**
Two `beacon.krxd.net` pixels in the hidden preheader table pass:
- A SHA-256 hashed email: `partner_uid=9037280d7b0681e7e8339bb532f53a4d5a3b6b3b853e90707f087f7952fcc88c`
- A plaintext subscriber ID: `partner_uid=64650986`

These fire on open, before any consent interaction. Confirm this matches current data-sharing disclosures.

**[WARN] Return Path seed pixel is HTTP**
`pixel.app.returnpath.net/pixel.gif` has no protocol prefix — browsers and strict email clients will default to HTTP or block it entirely.

---

### 3. Rendering & Accessibility

**[FAIL] 13 image assets served over HTTP**
`image.emails.skechers.com` CDN is using `http://` for all image URLs. Gmail (2017+), iOS Mail, and Outlook 365 block or strip mixed-content images. Affected assets include the logo, app store badges, social icons, and footer service icons. Example:

```
src="http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png"
```

All should be `https://image.emails.skechers.com/...`.

**[FAIL] Open-tracking pixel is HTTP**
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif"
```
This pixel will be blocked in secure contexts, silently undercounting opens.

**[WARN] Two images missing `alt` text**
- `o.gif` (ink1000 open tracker) — alt="" acceptable for tracking pixels, but should be explicit
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unknown content image with no alt; fails WCAG 2.1 § 1.1.1

**[WARN] Malformed `<meta>` tags**
Both head meta tags are missing required `http-equiv` attributes:
```html
<meta content="text/html; charset=utf-8" />          <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                            <!-- missing http-equiv="X-UA-Compatible" -->
```
These are inert as written; charset declaration will not apply in legacy clients.

**[WARN] Duplicate media query rule sets**
Identical property declarations appear in both `@media (max-width: 375px)` and `@media (max-width: 640px)`. The 375px block is fully redundant and adds unnecessary CSS weight.

**[WARN] Global `-webkit-text-size-adjust: none`**
Applied via `* { -webkit-text-size-adjust: none; }` — disables user font scaling on iOS, which fails WCAG 2.1 § 1.4.4 (Resize Text).

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty first-name slot in greeting**
QA detected `"Hi ,"` — the first name merge token is resolving to an empty string. This is a production blocker. The fallback value in the template is either absent or not triggering correctly. Fix: add a default fallback, e.g. `%%=v(@firstName, "there")=%%` (AMPscript) or equivalent for the ESP in use.

**[INFO] Campaign ID is consistent**
`MKG_US_ECMPURL24_U_SLIPIN_ECOM_EN_04132026` appears correctly in both the Krux impression pixel and the ink1000 open tracker — no token mismatch detected.

---

### 5. Compliance

**[FAIL] Subject line contains `[Test]:` prefix**
```
Subject: [Test]: MKG_US_ECMPURL24_U_SLIPIN_ECOM_EN_04132026From Sneakers to Sandals...
```
Also note: no space between the campaign ID and the display subject line (`...04132026From Sneakers...`). Both must be corrected before production send.

**[WARN] SPF/DKIM status unverifiable**
`Authentication-Results` header was absent from the captured headers (expected via AgentMail relay). Cannot confirm DKIM signing by `emails.skechers.com` or SPF alignment. Verify DMARC pass in a direct inbox test before deployment.

**[INFO] Unsubscribe and physical address**
Not visible in the truncated HTML, but standard Skechers footer pattern includes these. Confirm presence before production — CAN-SPAM requires both.

---

### 6. Email-to-Site Continuity

**[UNVERIFIED] UTM parameters on 27 CTAs**
All destination URLs are wrapped in `click.emails.skechers.com` redirects and were not probed. UTM attribution (`utm_source`, `utm_medium`, `utm_campaign`) could not be confirmed. Manual spot-check of 3–5 representative links is required to confirm:
- `utm_campaign` matches `MKG_US_ECMPURL24_U_SLIPIN_ECOM_EN_04132026`
- No double-encoding of parameters through the redirect chain

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Empty greeting merge token | Add fallback value; re-QA with a null first-name seed address |
| **P0** | `[Test]:` subject prefix + malformed subject | Strip prefix; add space before display subject |
| **P1** | All `image.emails.skechers.com` URLs are HTTP | Switch CDN protocol to HTTPS across all image assets |
| **P1** | ink1000 open pixel is HTTP | Update to `https://` or replace with an HTTPS-capable tracker |
| **P1** | DKIM/SPF unverified | Send to a seed inbox and confirm `Authentication-Results: dkim=pass` |
| **P2** | Missing alt text on content image | Add descriptive alt to `49468f73...png` |
| **P2** | Malformed `<meta>` tags | Add `http-equiv` attributes |
| **P3** | Global text-size-adjust: none | Scope to specific elements or remove |
| **P3** | Duplicate 375px media query block | Remove redundant block; 640px rule covers it |
| **P3** | Krux pixel data-sharing | Confirm subscriber ID pass-through is disclosed in privacy policy |
## Recent history

- [[2026-04-10-test-mkg-us-nonpurclick-u-slipin-nonpurch-en-04132026-v2from-sneakers-to-sandals]] — 5/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-nonpurclick-u-slipin-nonpurch-en-04132026-v2from-sneakers-to-sandals-83471cbb-44ae-48e7-827d-]] — 5.5/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-nonpur180-u-slipin-nonpurch-en-04132026from-sneakers-to-sandals-it-s]] — 5/10 (2026-04-10)

