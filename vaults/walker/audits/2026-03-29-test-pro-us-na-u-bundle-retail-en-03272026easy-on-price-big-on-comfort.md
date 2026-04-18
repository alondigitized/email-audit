---
slug: 2026-03-29-test-pro-us-na-u-bundle-retail-en-03272026easy-on-price-big-on-comfort
type: email
date: 2026-03-26
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NA_U_BUNDLE_RETAIL_EN_03272026Easy On Price, Big On Comfort"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_NA_U_BUNDLE_RETAIL_EN_03272026Easy On Price, Big On Comfort
**Score:** 5/10 · **Type:** Email audit · **2026-03-26**
## Executive summary

- A structurally sound promotional email anchored by a strong BOGO 50% Spring Sale offer. The layout is clean and functional — hero, three gender-segmented product rows, navigation, and utility modules all present. However, the execution is hamstrung by stripped-out product details (no names or prices visible under any shoe), a test subject line that was never cleaned up, and a preheader that renders as raw URLs. The bones are good; the finish is rough.
- Strong offer undermined by missing product context, a broken preheader, and a live-test subject line. Conversion lift from the BOGO is likely muted because shoppers can't evaluate specific products without clicking through.

## What's working

- **Hero clarity.** "BUY ONE, GET ONE 50% OFF" is large, high-contrast, and immediately legible. No ambiguity about the offer.
- **Dual CTA in hero.** "SHOP NOW" + "FIND A STORE" serves both e-commerce and foot-traffic intent — smart for a mass retail brand.
- **Gender segmentation.** Women's / Men's / Kids' rows are clearly labeled and give the email scope without feeling chaotic.
- **Utility module is complete.** SMS signup, buy-now-pay-later, curbside pickup, and store finder are all present — covers key conversion support needs.
- **Clean visual hierarchy.** White space is used well; sections don't fight each other.

## What's weak

- **No product names or prices anywhere.** Each shoe grid shows 4 product images per section but zero text labels beneath them. Shoppers can't evaluate options without leaving the email. This is a significant missed conversion opportunity.
- **Test subject line never stripped.** The subject reads "[Test]: PRO_US_NA_U_BUNDLE_RETAIL_EN_03272026Easy On Price, Big On Comfort" — the internal template ID and test flag are fully visible. This would be damaging if sent to real recipients.
- **Preheader is raw URLs.** The preview text renders as "Skechers® https://view.emails.skechers.com/..." — one of the worst possible preheader experiences. Wastes prime real-estate that could reinforce the BOGO offer.
- **Tiny product images.** Each shoe grid packs 4 images into a narrow row at small size. Color and style detail is hard to distinguish, reducing browsing engagement.
- **No urgency signal.** The Spring Sale has no end date or countdown visible. Without deadline pressure, the BOGO loses its call-to-action edge.
- **Clothing appears in nav but not in body.** The "SHOP ADDITIONAL STYLES" nav includes CLOTHING, but there's no corresponding section in the email — creates a disconnect.

## Recommendations

- 1. **Fix the subject line before any live send** — remove "[Test]:" prefix and the template ID string. Subject should read only the consumer-facing line.
- 2. **Write a real preheader** — something like "Buy one, get one 50% off — Spring Sale is on now" would directly support the hero offer.
- 3. **Add product names and prices under each shoe** — even just name + "$XX.00" would dramatically increase browsing depth and reduce bounce from click-through.
- 4. **Add a sale deadline** — "Offer ends April 6" or similar. Creates urgency and reduces deferral.
- 5. **Increase image size or reduce to 3 products per row** — clarity over quantity. Shoppers need to see the shoe, not a thumbnail.
- | Priority | Issue | Fix |
- |---|---|---|
- | **Critical** | Subject line contains `[Test]:` prefix and concatenated campaign ID | Strip test flag; add space/line break in template between campaign ID variable and subject copy |
- | **High** | 12 content images served over HTTP from `image.emails.skechers.com` | Migrate CDN to HTTPS; update all `src=` attributes |
- | **High** | ink1000 open-tracking pixel is HTTP | Switch to HTTPS endpoint or replace with SFMC native open tracking |
- | **High** | SPF/DKIM authentication not confirmed | Validate auth headers via direct MTA delivery, not relay capture |
- | **Medium** | 3 content images missing `alt` text | Add descriptive alt text to `49468f73`, `00100b23`, `fc08601a` |
- | **Medium** | Plain-text version is >70% URLs | Build a readable plain-text alternative with actual copy |
- | **Medium** | Krux DMP pixel sends hashed PII to third party | Confirm privacy policy disclosure and consent coverage |
- | **Low** | `-webkit-text-size-adjust: none` on all elements | Change to `100%` to preserve iOS readability |
- | **Low** | Missing `lang="en"` on `<html>` element | Add for screen reader and accessibility compliance |
- | **Low** | UTM parameters not auditable through encrypted click redirects | Spot-check 2–3 CTAs by resolving redirect chains to confirm UTM integrity |

## Full review
## Email Review: Skechers Spring Sale BOGO 50% Off

---

### 1. Executive Summary

A structurally sound promotional email anchored by a strong BOGO 50% Spring Sale offer. The layout is clean and functional — hero, three gender-segmented product rows, navigation, and utility modules all present. However, the execution is hamstrung by stripped-out product details (no names or prices visible under any shoe), a test subject line that was never cleaned up, and a preheader that renders as raw URLs. The bones are good; the finish is rough.

---

### 2. Business Impact Score: 5/10

Strong offer undermined by missing product context, a broken preheader, and a live-test subject line. Conversion lift from the BOGO is likely muted because shoppers can't evaluate specific products without clicking through.

---

### 3. What's Working

- **Hero clarity.** "BUY ONE, GET ONE 50% OFF" is large, high-contrast, and immediately legible. No ambiguity about the offer.
- **Dual CTA in hero.** "SHOP NOW" + "FIND A STORE" serves both e-commerce and foot-traffic intent — smart for a mass retail brand.
- **Gender segmentation.** Women's / Men's / Kids' rows are clearly labeled and give the email scope without feeling chaotic.
- **Utility module is complete.** SMS signup, buy-now-pay-later, curbside pickup, and store finder are all present — covers key conversion support needs.
- **Clean visual hierarchy.** White space is used well; sections don't fight each other.

---

### 4. What's Weak

- **No product names or prices anywhere.** Each shoe grid shows 4 product images per section but zero text labels beneath them. Shoppers can't evaluate options without leaving the email. This is a significant missed conversion opportunity.
- **Test subject line never stripped.** The subject reads "[Test]: PRO_US_NA_U_BUNDLE_RETAIL_EN_03272026Easy On Price, Big On Comfort" — the internal template ID and test flag are fully visible. This would be damaging if sent to real recipients.
- **Preheader is raw URLs.** The preview text renders as "Skechers® https://view.emails.skechers.com/..." — one of the worst possible preheader experiences. Wastes prime real-estate that could reinforce the BOGO offer.
- **Tiny product images.** Each shoe grid packs 4 images into a narrow row at small size. Color and style detail is hard to distinguish, reducing browsing engagement.
- **No urgency signal.** The Spring Sale has no end date or countdown visible. Without deadline pressure, the BOGO loses its call-to-action edge.
- **Clothing appears in nav but not in body.** The "SHOP ADDITIONAL STYLES" nav includes CLOTHING, but there's no corresponding section in the email — creates a disconnect.

---

### 5. Recommendations

1. **Fix the subject line before any live send** — remove "[Test]:" prefix and the template ID string. Subject should read only the consumer-facing line.
2. **Write a real preheader** — something like "Buy one, get one 50% off — Spring Sale is on now" would directly support the hero offer.
3. **Add product names and prices under each shoe** — even just name + "$XX.00" would dramatically increase browsing depth and reduce bounce from click-through.
4. **Add a sale deadline** — "Offer ends April 6" or similar. Creates urgency and reduces deferral.
5. **Increase image size or reduce to 3 products per row** — clarity over quantity. Shoppers need to see the shoe, not a thumbnail.

---

### 6. Bottom Line

The BOGO 50% offer is strong and the structure is sound, but this email has two outright errors (test subject, broken preheader) and a persistent pattern issue (no product context) that significantly undercut its effectiveness. Fix the errors before live deployment; the product labeling problem should be addressed in the template itself.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Spring Sale promotional email driving BOGO 50% off purchase, both online and in-store |
| **Hero / primary value prop** | "SPRING SALE / BUY ONE, GET ONE / 50% OFF" banner with SHOP NOW + FIND A STORE CTAs. Fine print visible below. Strong offer, clear presentation. |
| **Membership / benefits** | None visible. No loyalty program, rewards, or member-exclusive framing present. |
| **Product discoverability** | Three horizontal shoe grids (Women's, Men's, Kids') with 4 images each, each followed by a "SHOP NOW" button. No product names, prices, or style labels visible under any image. |
| **Utility / secondary modules** | Text-nav block (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE) + utility row (SMS opt-in, BNPL, curbside, store finder) + social icons + legal footer. All functional. |
| **Bugs / friction / clarity issues** | (1) "[Test]:" prefix and template ID string in subject line visible in header. (2) Preheader renders as raw URL string, not marketing copy. (3) No product labels or prices beneath shoe images in any section. |

---

## Technical Audit

## Technical Audit — Skechers BOGO Bundle Email
**Campaign:** `PRO_US_NA_U_BUNDLE_RETAIL_EN_03272026`
**From:** `no-reply@emails.skechers.com` (SFMC)
**Reviewed:** 2026-03-29

---

### 1. Technical Summary

Sent via Salesforce Marketing Cloud with broadly standard HTML structure, but the email has a pervasive HTTP (non-HTTPS) image loading problem affecting 16+ assets, an unresolved test prefix in the subject line, and SPF/DKIM authentication status that cannot be confirmed through the relay.

---

### 2. Link & Tracking Issues

**Subject line exposes internal campaign ID and missing space:**
> `[Test]: PRO_US_NA_U_BUNDLE_RETAIL_EN_03272026Easy On Price, Big On Comfort`

The `[Test]:` prefix and the campaign ID (`PRO_US_NA_U_BUNDLE_RETAIL_EN_03272026`) were not stripped before send/review capture. The campaign ID is also directly concatenated to the display subject with no separator — indicates a templating error where a newline or space was dropped between the dynamic field and the subject copy.

**Tracking pixel over HTTP:**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8103142203&mi_ecmp=PRO_US_NA_U_BUNDLE_RETAIL_EN_03272026
```
This open/read-tracking pixel is served over plain HTTP. Modern clients (Gmail, Apple Mail) will block or proxy this, breaking open-rate attribution for that vendor.

**Third-party data sync beacons present (Krux/Salesforce DMP):**
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=275a6ec67...
https://beacon.krxd.net/1x1_ad_impression.gif?confid=so3yexmpm&advertiserid=100007688&campaignid=PRO_US_NA_U_BUNDLE_RETAIL_EN_03272026
```
The SHA-256 hashed subscriber ID (`partner_uid=275a6ec6...`) is transmitted to Krux for audience matching. Verify this is disclosed in the applicable privacy policy and consent model, particularly for recipients in CA/EU jurisdictions.

**26 click-redirect links** all route through `click.emails.skechers.com` — tracking domain itself appears correctly configured (HTTPS), but destination UTM params could not be verified (see §6).

**Plain-text body is >70% URLs** (4137/5780 chars). Aggressive spam filters may flag this ratio; the plain-text version likely lacks meaningful content beyond raw link dumps.

---

### 3. Rendering & Accessibility

**16 images served over HTTP — mixed content risk:**

All production content images are loaded from `http://image.emails.skechers.com` (not HTTPS):

| Asset | Alt Text | Issue |
|---|---|---|
| `dde00662...png` ("Skechers" logo) | present | HTTP |
| `49468f73...png` | **missing** | HTTP |
| `0ec56c9f...png` ("Available on the App Store") | present | HTTP |
| `9bb508d0...png` ("Android App on Google Play") | present | HTTP |
| `00100b23...png` | **missing** | HTTP |
| `07cb60b5...png` ("AfterPay") | present | HTTP |
| `fc08601a...png` | **missing** | HTTP |
| `b782e0aa...png` ("Instagram") | present | HTTP |
| `d76a5487...png` ("Twitter") | present | HTTP |
| `a5c4cae0...png` ("Facebook") | present | HTTP |
| `573ab181...png` ("Pinterest") | present | HTTP |
| `8c5738fc...png` ("YouTube") | present | HTTP |

Apple Mail (iOS 15+) and Gmail proxy all remote images — HTTP images may render, but the plain HTTP origin will fail cert validation in strict clients and will appear as broken images in some corporate/security gateway environments.

**4 images with no alt text:** `o.gif` (ink1000 pixel), `49468f73`, `00100b23`, `fc08601a`. The pixel gif can have `alt=""` (acceptable), but the three content images need descriptive alt text for screen readers and image-off rendering.

**`-webkit-text-size-adjust: none`** is applied globally via `* { -webkit-text-size-adjust: none; }`. This suppresses iOS auto-sizing for all elements, including body copy, which can harm readability at small viewports. Standard practice is `100%`, not `none`.

**No `lang` attribute on `<html>`** — screen readers cannot infer language; relevant for accessibility compliance.

---

### 4. Personalization & Merge Tokens

**Subject line test artifact not resolved:**
- `[Test]:` prefix indicates this was sent or captured as a proof/test deployment
- `PRO_US_NA_U_BUNDLE_RETAIL_EN_03272026` prepended to subject copy with no space — template variable substitution failure

No other unresolved `%%merge_token%%` or `{{handlebars}}` tokens are visible in the HTML excerpt. Preheader text (`Step Into Spring with BOGO 50% off your second pair`) is correctly set and hidden via `display:none`.

---

### 5. Compliance

**Authentication status unknown:**
> `[WARN] Authentication-Results header not found`

SPF and DKIM pass/fail cannot be confirmed through the AgentMail relay capture. Before production send, verify:
- SPF: `emails.skechers.com` is authorized in the domain's SPF record
- DKIM: `d=emails.skechers.com` selector is signing outbound SFMC mail
- DMARC policy alignment for `skechers.com`

**CAN-SPAM checklist** (from visible HTML):
- Physical mailing address: not visible in the truncated source — must be present
- Unsubscribe mechanism: not visible in truncated source — must be present and functional
- From domain (`emails.skechers.com`) correctly identifies the sender organization

**Krux DMP pixel** transmits hashed PII (`sha25` variant of subscriber email) to a third party. Confirm this is covered under the current privacy notice and that consent is captured per applicable regulations (CCPA, CAN-SPAM, CASL).

---

### 6. Email-to-Site Continuity

All 26 CTAs route through `click.emails.skechers.com` click-redirects using encrypted query strings (`?qs=eyJ...`). Final destination URLs and UTM parameters cannot be decoded without following the redirects.

**Risk:** If UTM parameters are embedded in the encrypted payload, there is no way to audit them without live link resolution. Recommend spot-checking 2–3 primary CTAs by decoding or following the redirect chain to confirm:
- `utm_source`, `utm_medium`, `utm_campaign` are present on all landing page URLs
- Campaign ID in UTM (`PRO_US_NA_U_BUNDLE_RETAIL_EN_03272026`) matches the active BOGO promotion in the landing page's GA4/analytics layer
- No redirect chain bounces subscribers through an HTTP intermediate (mixed-content redirect)

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **Critical** | Subject line contains `[Test]:` prefix and concatenated campaign ID | Strip test flag; add space/line break in template between campaign ID variable and subject copy |
| **High** | 12 content images served over HTTP from `image.emails.skechers.com` | Migrate CDN to HTTPS; update all `src=` attributes |
| **High** | ink1000 open-tracking pixel is HTTP | Switch to HTTPS endpoint or replace with SFMC native open tracking |
| **High** | SPF/DKIM authentication not confirmed | Validate auth headers via direct MTA delivery, not relay capture |
| **Medium** | 3 content images missing `alt` text | Add descriptive alt text to `49468f73`, `00100b23`, `fc08601a` |
| **Medium** | Plain-text version is >70% URLs | Build a readable plain-text alternative with actual copy |
| **Medium** | Krux DMP pixel sends hashed PII to third party | Confirm privacy policy disclosure and consent coverage |
| **Low** | `-webkit-text-size-adjust: none` on all elements | Change to `100%` to preserve iOS readability |
| **Low** | Missing `lang="en"` on `<html>` element | Add for screen reader and accessibility compliance |
| **Low** | UTM parameters not auditable through encrypted click redirects | Spot-check 2–3 CTAs by resolving redirect chains to confirm UTM integrity |
## Recent history

- [[2026-03-29-test-pro-us-na-u-bundle-full-en-03272026-v3your-go-to-comfort-times-two]] — 5/10 (2026-03-26)
- [[2026-03-29-this-is-perfect-for-you]] — 6/10 (2026-03-26)
- [[2026-03-29-fwd-welcome-to-skechers]] — 1/10 (2026-03-26)

