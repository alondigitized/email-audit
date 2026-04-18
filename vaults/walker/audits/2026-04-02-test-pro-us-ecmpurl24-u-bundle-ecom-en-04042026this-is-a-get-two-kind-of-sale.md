---
slug: 2026-04-02-test-pro-us-ecmpurl24-u-bundle-ecom-en-04042026this-is-a-get-two-kind-of-sale
type: email
date: 2026-04-02
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: PRO_US_ECMPURL24_U_BUNDLE_ECOM_EN_04042026This is a Get Two Kind of Sale"
tags: [email, score-6, sender/skechers]
---
# [Test]: PRO_US_ECMPURL24_U_BUNDLE_ECOM_EN_04042026This is a Get Two Kind of Sale
**Score:** 6/10 · **Type:** Email audit · **2026-04-02**
## Executive summary

- A clean, straightforward promotional email built around a "Buy One, Get One 50% Off" Spring Sale. The offer is clear and the gender/category navigation is well-organized. However, the hero section feels compressed and visually low-energy for a seasonal sale push, and the email relies entirely on category browsing rather than showcasing specific products — a missed opportunity to drive urgency and conversion.
- Solid functional execution, but below the ceiling of what a BOGO sale email should deliver.

## What's working

- **Offer clarity.** "Buy One, Get One 50% Off" reads immediately. No ambiguity. The discount-applied-at-cart note sets expectations.
- **Category coverage.** Women / Men / Girls / Boys are each given their own visual tile with a shop CTA — efficient way to self-segment traffic.
- **Dual entry CTAs.** "Shop Now" and "Find a Store" in the hero address both online and retail intents.
- **Secondary utility.** App download, curbside pickup, find a store, and "Shop Now, Pay Later" are cleanly surfaced in the footer module — useful without being noisy.
- **Email structure.** Logical flow: hero → category tiles → nav strip → utility → footer. No structural confusion.

## What's weak

- **Hero energy is low.** The green/yellow color palette reads muted for a Spring Sale. The shoe product shown in the hero is small and loses visual impact. A sale of this magnitude deserves a more confident hero image.
- **No featured products.** Every section routes to a category page. There are no curated product showcases, bestseller callouts, or lifestyle moments — nothing to create desire before the click.
- **Generic product imagery per tile.** Each gender tile shows one shoe on a plain white background. These feel like catalog shots, not campaign creative.
- **Subject line / preview text leakage.** The preview text visible in the inbox is raw URL string content (`https://view.emails.skechers.com/?vawpToken=...`), not a readable teaser. This is a significant deliverability and open-rate issue.
- **No urgency mechanism.** No end date, no countdown language, no "limited time" framing — the BOGO offer floats without any pressure to act now.
- **"[Test]:" prefix in subject line.** The email went out (or was reviewed) with a test tag in the subject. This should never reach any real inbox.

## Recommendations

- 1. **Strip the `[Test]:` prefix and fix the preview text** — the raw URL in preview is dead weight killing open rates before the email is even opened.
- 2. **Add urgency copy** — a sale end date ("Ends Sunday") or even generic scarcity language ("While supplies last") gives recipients a reason to act now rather than later.
- 3. **Feature 2–3 hero products** — Pull in bestselling or trending styles from the sale. Named products drive clicks better than "Shop Women."
- 4. **Elevate the hero creative** — Consider a lifestyle shot or a larger, more confident product image. The current hero undersells a genuinely strong BOGO offer.
- 5. **Add a social proof signal** — A short line like "Top-rated styles included" or a star-rating callout next to a featured product would lower hesitation.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Return Path pixel broken URL scheme | Add `https://` to `src` attribute: `src="https://pixel.app.returnpath.net/..."` |
- | **P0** | 15 images served over HTTP | Update CDN references from `http://image.emails.skechers.com` to `https://image.emails.skechers.com` globally in template |
- | **P0** | Test subject prefix in production path | Confirm ESP subject field is set to `This is a Get Two Kind of Sale` with no injected prefixes |
- | **P1** | SPF/DKIM unverified | Pull authentication headers from a live seed send; confirm DKIM passes and SPF aligns for `emails.skechers.com` |
- | **P1** | 4 images missing alt text | Add descriptive `alt=""` (or empty for decorative) to `49468f73`, `00100b23`, `fc08601a` PNGs and `o.gif` |
- | **P2** | `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` attributes |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve accessibility zoom |
- | **P2** | UTM parameters unverifiable | Manually resolve 3–5 sample click URLs to confirm UTM params and landing page offer alignment |

## Full review
## 1. Executive Summary

A clean, straightforward promotional email built around a "Buy One, Get One 50% Off" Spring Sale. The offer is clear and the gender/category navigation is well-organized. However, the hero section feels compressed and visually low-energy for a seasonal sale push, and the email relies entirely on category browsing rather than showcasing specific products — a missed opportunity to drive urgency and conversion.

---

## 2. Business Impact Score: 6/10

Solid functional execution, but below the ceiling of what a BOGO sale email should deliver.

---

## 3. What's Working

- **Offer clarity.** "Buy One, Get One 50% Off" reads immediately. No ambiguity. The discount-applied-at-cart note sets expectations.
- **Category coverage.** Women / Men / Girls / Boys are each given their own visual tile with a shop CTA — efficient way to self-segment traffic.
- **Dual entry CTAs.** "Shop Now" and "Find a Store" in the hero address both online and retail intents.
- **Secondary utility.** App download, curbside pickup, find a store, and "Shop Now, Pay Later" are cleanly surfaced in the footer module — useful without being noisy.
- **Email structure.** Logical flow: hero → category tiles → nav strip → utility → footer. No structural confusion.

---

## 4. What's Weak

- **Hero energy is low.** The green/yellow color palette reads muted for a Spring Sale. The shoe product shown in the hero is small and loses visual impact. A sale of this magnitude deserves a more confident hero image.
- **No featured products.** Every section routes to a category page. There are no curated product showcases, bestseller callouts, or lifestyle moments — nothing to create desire before the click.
- **Generic product imagery per tile.** Each gender tile shows one shoe on a plain white background. These feel like catalog shots, not campaign creative.
- **Subject line / preview text leakage.** The preview text visible in the inbox is raw URL string content (`https://view.emails.skechers.com/?vawpToken=...`), not a readable teaser. This is a significant deliverability and open-rate issue.
- **No urgency mechanism.** No end date, no countdown language, no "limited time" framing — the BOGO offer floats without any pressure to act now.
- **"[Test]:" prefix in subject line.** The email went out (or was reviewed) with a test tag in the subject. This should never reach any real inbox.

---

## 5. Recommendations

1. **Strip the `[Test]:` prefix and fix the preview text** — the raw URL in preview is dead weight killing open rates before the email is even opened.
2. **Add urgency copy** — a sale end date ("Ends Sunday") or even generic scarcity language ("While supplies last") gives recipients a reason to act now rather than later.
3. **Feature 2–3 hero products** — Pull in bestselling or trending styles from the sale. Named products drive clicks better than "Shop Women."
4. **Elevate the hero creative** — Consider a lifestyle shot or a larger, more confident product image. The current hero undersells a genuinely strong BOGO offer.
5. **Add a social proof signal** — A short line like "Top-rated styles included" or a star-rating callout next to a featured product would lower hesitation.

---

## 6. Bottom Line

The email communicates the offer competently and delivers a clean navigation experience. But it does the minimum. A BOGO 50% off event is a high-value promotional moment that warrants more persuasive creative — featured products, urgency, and a hero that actually earns attention. As-is, this email informs but doesn't excite.

---

## 7. Evidence

**Overall purpose:** Drive Spring Sale traffic (BOGO 50% off) to Skechers.com and retail stores, segmented by gender category.

**Hero / primary value proposition:** Spring Sale headline with BOGO 50% off call-out. Shop Now and Find a Store CTAs. Discount-at-cart disclaimer present. Hero image shows one shoe; green/yellow palette. Low visual intensity.

**Membership / benefits section:** Not present.

**Product discoverability / recommendation modules:** Four category tiles — Women, Men, Girls, Boys — each with one product image and a "Shop Now" CTA. No individual product recommendations, no price points, no bestseller labels.

**Utility / secondary modules:** Text nav strip (Women, Men, Kids, Clothing, New Arrivals, Sale). Footer utility row with app download, curbside pickup, find-a-store link, and pay-later option. Social icons present.

**Bugs / friction / clarity issues:**
- Preview text in the inbox displays a raw URL string rather than readable copy — clearly visible in the email header metadata.
- `[Test]:` prefix present in the subject line — indicates this email should not have been sent to a real audience in this state.

---

## Technical Audit

## Technical Audit — Skechers BOGO Email
**`PRO_US_ECMPURL24_U_BUNDLE_ECOM_EN_04042026` | 2026-04-04**

---

### 1. Technical Summary

This is an unsent test email (subject prefix `[Test]:` confirmed) with 15+ image assets served over plain HTTP and a Return Path seed pixel with a missing URL scheme. Authentication headers were not captured via relay, leaving SPF/DKIM status unverified.

---

### 2. Link & Tracking Issues

**Return Path pixel — missing protocol prefix (bug)**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
`src` has no scheme (`https://`), so this resolves as a relative URL and will silently fail to fire in all email clients. Inbox monitoring data for this send will be lost.

**26 click-redirect links** — all routed through `click.emails.skechers.com`; destination URLs and UTM parameters could not be probed. Flagged in QA; see Section 6.

**Third-party tracking pixels present**
- `beacon.krxd.net` (Salesforce Krux DMP) — 3 pixels including ad impression pixel with hardcoded `campaignid`
- `http://www.ink1000.com` — 1 pixel (HTTP, discussed in Section 3)
- `click.emails.skechers.com/open.aspx` — standard ESP open beacon

**Hardcoded subscriber identifiers in test send**
- `mi_u=9012945763` (ink1000.com pixel)
- `partner_uid=af077ed316c5f351a19c6339a11ba29c13eca11083c2a7fd78f2d46c353dbb4f` (Krux SHA-256 hash)
- `partner_uid=7187828` (Krux subid)

These appear to be real subscriber values from the seed/test recipient. Confirm these are expected for QA and will be merge-token-resolved in production.

---

### 3. Rendering & Accessibility

**HTTP image sources — 15 assets (high severity)**

All `image.emails.skechers.com` assets are served over HTTP, not HTTPS. Modern email clients (Gmail, Outlook.com, Apple Mail) proxy or block mixed-content images. Affected assets include:

| Asset | Issue |
|---|---|
| `dde00662...png` (Skechers logo) | HTTP + missing alt fallback risk |
| `49468f73...png` | HTTP + **no alt text** |
| `0ec56c9f...png` ("Available on the App Store") | HTTP |
| `9bb508d0...png` ("Android App on Google Play") | HTTP |
| `00100b23...png` | HTTP + **no alt text** |
| `07cb60b5...png` ("AfterPay") | HTTP |
| `fc08601a...png` | HTTP + **no alt text** |
| `b782e0aa...png` ("Instagram") | HTTP |
| `d76a5487...png` ("Twitter") | HTTP |
| `a5c4cae0...png` ("Facebook") | HTTP |
| `573ab181...png` ("Pinterest") | HTTP |
| `8c5738fc...png` ("YouTube") | HTTP |
| `o.gif` (ink1000.com pixel) | HTTP + **no alt text** |

Root cause: `image.emails.skechers.com` CDN is being referenced via `http://` throughout the template. This is a template-level issue, not per-image.

**Missing alt text — 4 images**
`49468f73`, `00100b23`, `fc08601a`, and `o.gif` have no `alt` attribute. When images are blocked, these render as broken icons with no fallback text.

**Meta tag attribute errors**
```html
<meta content="text/html; charset=utf-8" />         <!-- missing http-equiv -->
<meta content="IE=Edge" />                           <!-- missing http-equiv -->
```
Both tags are missing the `http-equiv` attribute. Without it, browsers/email clients ignore the directives. Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```

**`-webkit-text-size-adjust: none`**
```css
* { -webkit-text-size-adjust: none; }
```
Value `none` disables iOS/Safari text scaling entirely for users with accessibility zoom needs. Standard practice is `100%` to prevent auto-scaling while preserving user-initiated zoom.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%FIRSTNAME%%`, `{{variable}}`) were detected in the truncated HTML. Preheader and subject line content appear to be static strings, consistent with a test send. No issues found beyond the hardcoded subscriber IDs noted in Section 2.

---

### 5. Compliance

**SPF/DKIM — unverified**
Authentication-Results header was not captured via AgentMail relay. Cannot confirm DKIM signing or SPF alignment for `emails.skechers.com`. Must be verified against production headers before send.

**Subject line test prefix**
```
Subject: [Test]: PRO_US_ECMPURL24_U_BUNDLE_ECOM_EN_04042026This is a Get Two Kind of Sale
```
The `[Test]:` prefix and campaign ID string appear to be concatenated directly into the subject — the intended subject (`This is a Get Two Kind of Sale`) is appended without a separator. Confirm this is stripped and the production subject is set correctly in the ESP.

**CAN-SPAM / unsubscribe** — Physical mailing address and unsubscribe mechanism were not visible in the truncated HTML source. QA did not flag these as absent, suggesting they are present below the fold. No issues flagged, but confirm footer is present in full source.

---

### 6. Email-to-Site Continuity

All 26 destination links are wrapped in `click.emails.skechers.com` redirects with encrypted query strings, making UTM parameter inspection impossible without following redirects. QA skipped probing these. The following must be manually verified before production send:

- UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) are appended to all landing page URLs after redirect resolution
- Campaign ID `PRO_US_ECMPURL24_U_BUNDLE_ECOM_EN_04042026` is reflected in `utm_campaign` values
- BOGO offer terms on landing pages match email offer terms (pricing, eligibility, exclusions)

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Return Path pixel broken URL scheme | Add `https://` to `src` attribute: `src="https://pixel.app.returnpath.net/..."` |
| **P0** | 15 images served over HTTP | Update CDN references from `http://image.emails.skechers.com` to `https://image.emails.skechers.com` globally in template |
| **P0** | Test subject prefix in production path | Confirm ESP subject field is set to `This is a Get Two Kind of Sale` with no injected prefixes |
| **P1** | SPF/DKIM unverified | Pull authentication headers from a live seed send; confirm DKIM passes and SPF aligns for `emails.skechers.com` |
| **P1** | 4 images missing alt text | Add descriptive `alt=""` (or empty for decorative) to `49468f73`, `00100b23`, `fc08601a` PNGs and `o.gif` |
| **P2** | `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` attributes |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve accessibility zoom |
| **P2** | UTM parameters unverifiable | Manually resolve 3–5 sample click URLs to confirm UTM params and landing page offer alignment |
## Recent history

- [[2026-04-02-bold-brave-new]] — 5/10 (2026-04-02)
- [[2026-04-02-your-items-are-waiting]] — 6/10 (2026-04-02)
- [[2026-04-01-test-ret-us-na-u-store1423-zip-en-04022026celebrate-our-birthday-in-ridgewood]] — 6/10 (2026-04-01)

