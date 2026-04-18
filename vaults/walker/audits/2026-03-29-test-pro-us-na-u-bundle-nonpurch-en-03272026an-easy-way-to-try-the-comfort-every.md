---
slug: 2026-03-29-test-pro-us-na-u-bundle-nonpurch-en-03272026an-easy-way-to-try-the-comfort-every
type: email
date: 2026-03-26
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NA_U_BUNDLE_NONPURCH_EN_03272026An Easy Way to Try the Comfort Everyone Talks About"
tags: [email, score-6, sender/skechers]
---
# [Test]: PRO_US_NA_U_BUNDLE_NONPURCH_EN_03272026An Easy Way to Try the Comfort Everyone Talks About
**Score:** 6/10 · **Type:** Email audit · **2026-03-26**
## Executive summary

- A clean, structurally sound promotional email built around a BOGO 50% off Spring Sale offer. The hero communicates the deal instantly and the three-segment product layout (Women's, Men's, Kids') is logical for a broad non-purchaser audience. The email doesn't do much wrong visually, but it plays it very safe — the product photography is small and generic, the "bundle" framing promised in the subject line doesn't materialize in the body, and there's little personalization or urgency to push a first-time buyer over the line.
- Competent but forgettable. The offer is strong; the execution undersells it.

## What's working

- **Hero clarity**: "SPRING SALE — BUY ONE, GET ONE 50% OFF" is immediate and legible. The dual CTA (Shop Now / Find a Store) covers both digital and retail purchase intent, which is smart for a non-purchaser segment.
- **Segment structure**: Splitting into Women's, Men's, and Kids' with dedicated rows and individual Shop Now buttons is efficient and reduces decision paralysis.
- **Supporting utility modules**: SMS opt-in, BNPL (Klarna/Afterpay), and Curbside Pickup are well-placed at the bottom as trust-builders and conversion aids. These are especially relevant for first-time buyers with hesitation.
- **Navigation links**: The "Shop Additional Styles" text nav (Women, Men, Kids, Clothing, New Arrivals, Sale) functions as a secondary discovery layer without cluttering the main flow.

## What's weak

- **Product images are too small**: Each row shows 4–5 shoes at thumbnail scale. For a non-purchaser who has never experienced Skechers comfort, this format fails to create desire. No product names, prices, or callouts are visible.
- **No anchor product**: There's no hero product or featured style driving the "comfort everyone talks about" narrative. The subject line makes a comfort promise; the email delivers a grid of tiny shoes.
- **Subject/body disconnect**: The subject references a "bundle" concept; the email delivers a standard BOGO. These are meaningfully different offers. This creates a trust gap at the open.
- **No urgency signal**: No end date, countdown, or "limited time" language is visible anywhere. BOGO is a strong offer — the lack of urgency is a missed conversion lever for a cold audience.
- **Preview text is broken**: The preview renders raw URLs rather than readable copy, which is a significant first-impression failure before the email is even opened.
- **Kids' section feels tacked on**: Visually identical to Women's and Men's but proportionally small — if Kids isn't a primary driver, it may dilute focus.

## Recommendations

- 1. **Feature one or two hero products by name** with a comfort callout beneath the BOGO banner. Give non-purchasers a specific thing to want.
- 2. **Add a sale end date** to the hero — even a vague "This Weekend Only" creates urgency this audience needs.
- 3. **Fix the preview text** — it should echo the offer ("Buy One, Get One 50% Off — Spring Sale Is On") not display raw URLs.
- 4. **Align subject line to body** — either rename the subject to match the BOGO offer or restructure the email to deliver a bundle framing that justifies "An Easy Way to Try the Comfort."
- 5. **Increase product image size** or reduce the number of products shown per row, particularly for Women's and Men's where purchase intent is highest.
- | Priority | Issue | Action |
- |---|---|---|
- | **Critical** | All `image.emails.skechers.com` assets use HTTP | Migrate CDN or update templates to use `https://` — single find-and-replace in template |
- | **Critical** | ink1000 tracking pixel uses HTTP and transmits `mi_u` subscriber ID in clear | Switch to HTTPS endpoint or remove pixel |
- | **High** | Authentication headers not verifiable | Pull raw headers from a delivered test and confirm DKIM pass + DMARC alignment |
- | **High** | `[Test]:` subject prefix in production-bound template | Remove before deployment |
- | **High** | Plain-text part is 72% URLs | Rewrite plain-text alternative with human-readable content |
- | **Medium** | 4 images missing alt text | Add descriptive alt for content images; `alt=""` for decorative |
- | **Medium** | `maximum-scale=1` disables pinch-to-zoom | Remove from viewport meta |
- | **Medium** | `-webkit-text-size-adjust: none` | Change to `100%` |
- | **Low** | 26 CTA destination URLs not probed | Run pre-send click-trace validation against all encoded links |
- | **Low** | UTM passthrough unverifiable via encrypted `qs=` | Spot-check decoded destinations in staging |

## Full review
## Email Review: Skechers BOGO Spring Sale — Non-Purchaser Bundle

---

### 1. Executive Summary

A clean, structurally sound promotional email built around a BOGO 50% off Spring Sale offer. The hero communicates the deal instantly and the three-segment product layout (Women's, Men's, Kids') is logical for a broad non-purchaser audience. The email doesn't do much wrong visually, but it plays it very safe — the product photography is small and generic, the "bundle" framing promised in the subject line doesn't materialize in the body, and there's little personalization or urgency to push a first-time buyer over the line.

---

### 2. Business Impact Score: **6/10**

Competent but forgettable. The offer is strong; the execution undersells it.

---

### 3. What's Working

- **Hero clarity**: "SPRING SALE — BUY ONE, GET ONE 50% OFF" is immediate and legible. The dual CTA (Shop Now / Find a Store) covers both digital and retail purchase intent, which is smart for a non-purchaser segment.
- **Segment structure**: Splitting into Women's, Men's, and Kids' with dedicated rows and individual Shop Now buttons is efficient and reduces decision paralysis.
- **Supporting utility modules**: SMS opt-in, BNPL (Klarna/Afterpay), and Curbside Pickup are well-placed at the bottom as trust-builders and conversion aids. These are especially relevant for first-time buyers with hesitation.
- **Navigation links**: The "Shop Additional Styles" text nav (Women, Men, Kids, Clothing, New Arrivals, Sale) functions as a secondary discovery layer without cluttering the main flow.

---

### 4. What's Weak

- **Product images are too small**: Each row shows 4–5 shoes at thumbnail scale. For a non-purchaser who has never experienced Skechers comfort, this format fails to create desire. No product names, prices, or callouts are visible.
- **No anchor product**: There's no hero product or featured style driving the "comfort everyone talks about" narrative. The subject line makes a comfort promise; the email delivers a grid of tiny shoes.
- **Subject/body disconnect**: The subject references a "bundle" concept; the email delivers a standard BOGO. These are meaningfully different offers. This creates a trust gap at the open.
- **No urgency signal**: No end date, countdown, or "limited time" language is visible anywhere. BOGO is a strong offer — the lack of urgency is a missed conversion lever for a cold audience.
- **Preview text is broken**: The preview renders raw URLs rather than readable copy, which is a significant first-impression failure before the email is even opened.
- **Kids' section feels tacked on**: Visually identical to Women's and Men's but proportionally small — if Kids isn't a primary driver, it may dilute focus.

---

### 5. Recommendations

1. **Feature one or two hero products by name** with a comfort callout beneath the BOGO banner. Give non-purchasers a specific thing to want.
2. **Add a sale end date** to the hero — even a vague "This Weekend Only" creates urgency this audience needs.
3. **Fix the preview text** — it should echo the offer ("Buy One, Get One 50% Off — Spring Sale Is On") not display raw URLs.
4. **Align subject line to body** — either rename the subject to match the BOGO offer or restructure the email to deliver a bundle framing that justifies "An Easy Way to Try the Comfort."
5. **Increase product image size** or reduce the number of products shown per row, particularly for Women's and Men's where purchase intent is highest.

---

### 6. Bottom Line

The email is functional and brand-consistent, but it's not built to convert a skeptical non-purchaser. The offer is the strongest asset here — BOGO 50% off is genuinely compelling — and the email buries it under an anonymous product grid with no comfort storytelling, no urgency, and a broken preview. Fixing the subject/body misalignment and adding one featured product with a comfort narrative would materially improve conversion for this segment.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Drive first purchase via BOGO Spring Sale — targeted to non-purchasers |
| **Hero / primary value prop** | "Spring Sale — Buy One, Get One 50% Off" with Shop Now + Find a Store CTAs. Clear and prominent. Fine print visible but unreadable at render size. |
| **Membership / benefits** | Not present — appropriate for non-purchaser audience |
| **Product discovery modules** | Three rows (Women's, Men's, Kids') each with 4–5 small shoe thumbnails and a Shop Now button. No product names or prices visible. |
| **Utility / secondary modules** | SMS opt-in with QR code, BNPL logos, Curbside Pickup callout, Find a Store link, social follow icons, and a text navigation bar for site categories |
| **Bugs / friction / clarity issues** | Preview text renders as raw URLs (visible in the subject metadata). No visual bugs inside the rendered email body itself. |

---

## Technical Audit

## Technical Audit — Skechers PRO_US_NA_U_BUNDLE_NONPURCH_EN_03272026

---

### 1. Technical Summary

The email renders with standard table-based layout and responsive media queries, but has pervasive HTTP (non-HTTPS) image sources across its asset library and a third-party tracking pixel with no alt text or HTTPS. Authentication headers were not captured via the relay, leaving SPF/DKIM status unverified.

---

### 2. Link & Tracking Issues

**Plain-text body URL density — HIGH**
- 4,141 of 5,784 plain-text characters (71.6%) are URLs. This ratio triggers spam filters that penalize URL-heavy plain-text parts. The plain-text version needs substantive human-readable content, not a near-full dump of encoded click URLs.

**26 click-redirect links not probed**
- All CTAs route through `click.emails.skechers.com` with base64/JWT-encoded `qs=` parameters. Destination URL health (404s, redirect chains) could not be verified. Recommend a pre-send click-trace check on all 26 links.

**Third-party tracking pixel — unencrypted**
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8103142203&mi_ecmp=PRO_US_NA_U_BUNDLE_NONPURCH_EN_03272026` — HTTP only. PII (`mi_u` subscriber ID) is transmitted in the clear. No alt text on the element.

**Kruxd/Salesforce DMP pixels**
- Three `beacon.krxd.net` pixels fire on open including a SHA-256 hashed subscriber ID passed as `partner_uid`. These are hidden `0×0` images with no alt attributes and no disclosure in the email footer beyond standard tracking language (if present). Confirm these are covered in the privacy policy and consent framework.

---

### 3. Rendering & Accessibility

**HTTP image sources — 15 assets affected**
All images served from `image.emails.skechers.com` use `http://`. Modern email clients (Gmail, Outlook 2016+, Apple Mail) will either block or silently proxy these. Blocked images degrade the email to a text-only experience. Affected assets include the Skechers logo, app store badges, social icons, AfterPay logo, and multiple content images:

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-*.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-*.png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-*.png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-*.png  (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-*.png  (AfterPay)
... + 10 additional assets
```

**Missing alt text — 4 images**
- `o.gif` (ink1000 tracking pixel) — no alt
- `49468f73-*.png` — no alt
- `00100b23-*.png` — no alt
- `fc08601a-*.png` — no alt

These will silently disappear for screen reader users and in image-blocked environments. All non-decorative images require `alt` text; decorative images need `alt=""` explicitly set.

**`-webkit-text-size-adjust: none`**
Set globally via `* { -webkit-text-size-adjust: none; }`. This prevents iOS from adjusting text size for readability. Use `100%` instead of `none`.

**`maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Disables pinch-to-zoom on mobile, which is an accessibility violation (WCAG 1.4.4). Should be removed or set to `maximum-scale=5`.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%firstName%%`, `{{{name}}}`) are visible in the truncated source. The preheader text "Step Into Spring with BOGO 50% off your second pair" is hardcoded. The `mi_u` value in the ink1000 pixel (`8103142203`) and `partner_uid` in the Kruxd pixel (`113007062`) appear to be resolved subscriber identifiers, not unfired tokens — consistent with a test send.

**Subject line contains `[Test]:` prefix** — confirm this is stripped before production deployment.

---

### 5. Compliance

**Authentication headers — unverified**
- SPF/DKIM/DMARC results were not captured through the AgentMail relay. The sending domain `emails.skechers.com` should have a DKIM signature aligned to the `From:` domain and a DMARC policy of at least `p=quarantine`. Cannot confirm without full raw headers.

**CAN-SPAM / unsubscribe**
- Unsubscribe link presence cannot be confirmed from the truncated HTML. The footer must contain: (1) a functioning one-click unsubscribe or clearly visible opt-out link, (2) the sender's physical mailing address. Verify these are present in the full source below the truncation point.

**Return Path pixel**
```
pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
This is served over HTTP (no scheme prefix shown — likely HTTP). Return Path/Validity inbox monitoring pixels should be HTTPS.

---

### 6. Email-to-Site Continuity

All CTAs use `click.emails.skechers.com` click-wrapping with encrypted `qs=` payloads. UTM parameter passthrough cannot be confirmed without decoding the destination URLs — the encryption prevents static inspection. Validate that each click URL decodes to a destination carrying:
- `utm_source=email`
- `utm_medium=...`
- `utm_campaign=PRO_US_NA_U_BUNDLE_NONPURCH_EN_03272026`

The campaign ID `PRO_US_NA_U_BUNDLE_NONPURCH_EN_03272026` is correctly set in the Kruxd ad-impression pixel (`campaignid=` param), which is a positive signal for attribution consistency.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Critical** | All `image.emails.skechers.com` assets use HTTP | Migrate CDN or update templates to use `https://` — single find-and-replace in template |
| **Critical** | ink1000 tracking pixel uses HTTP and transmits `mi_u` subscriber ID in clear | Switch to HTTPS endpoint or remove pixel |
| **High** | Authentication headers not verifiable | Pull raw headers from a delivered test and confirm DKIM pass + DMARC alignment |
| **High** | `[Test]:` subject prefix in production-bound template | Remove before deployment |
| **High** | Plain-text part is 72% URLs | Rewrite plain-text alternative with human-readable content |
| **Medium** | 4 images missing alt text | Add descriptive alt for content images; `alt=""` for decorative |
| **Medium** | `maximum-scale=1` disables pinch-to-zoom | Remove from viewport meta |
| **Medium** | `-webkit-text-size-adjust: none` | Change to `100%` |
| **Low** | 26 CTA destination URLs not probed | Run pre-send click-trace validation against all encoded links |
| **Low** | UTM passthrough unverifiable via encrypted `qs=` | Spot-check decoded destinations in staging |
## Recent history

- [[2026-03-29-test-pro-us-na-u-bundle-retail-en-03272026easy-on-price-big-on-comfort]] — 5/10 (2026-03-26)
- [[2026-03-29-test-pro-us-na-u-bundle-full-en-03272026-v3your-go-to-comfort-times-two]] — 5/10 (2026-03-26)
- [[2026-03-29-this-is-perfect-for-you]] — 6/10 (2026-03-26)

