---
slug: 2026-04-10-test-mkg-us-na-u-seasonal-gender-en-04112026-v2the-perfect-pair-or-2-for-her
type: email
date: 2026-04-10
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_SEASONAL_GENDER_EN_04112026_V2The Perfect Pair (or 2) for Her"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_U_SEASONAL_GENDER_EN_04112026_V2The Perfect Pair (or 2) for Her
**Score:** 5/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A well-timed Mother's Day seasonal push with a strong BOGO 50% off offer anchoring the top. The email covers a lot of ground — Mommy & Me, Sandals, Spring Colors, Best Sellers — but the execution suffers from severe image compression and tiny text that makes the content nearly illegible at normal viewing size. The offer lands, the intent is clear, but the production quality undercuts what should be a high-value seasonal moment.
- Strong offer and timely occasion, significantly hampered by visual execution that makes the email feel low-fidelity for a campaign this important.

## What's working

- **BOGO 50% off is prominent and immediate** — anchored in the header bar with a "Shop Now" CTA before the hero even loads. No hunting for the deal.
- **Mother's Day Gift Guide framing** is smart and seasonally appropriate. The occasion context does real work justifying the send.
- **Multiple category modules** (Mommy & Me, Sandals, Spring Colors, Best Sellers) give the email reach across different buyer intents — gift buyers, self-purchasers, trend seekers.
- **Footer utility is comprehensive** — app download, curbside pickup, buy now/pay later, store finder all visible. Good conversion safety net.

## What's weak

- **Everything is too small.** The email appears to be rendered at a width that compresses all text and imagery to near-unreadable scale. Product names, prices, and CTAs are visually indistinguishable without zooming in.
- **Hero image is weak.** The "Mommy & Me" product shot is soft and small — for Mother's Day, this should be the emotional centerpiece commanding full-width real estate. It's competing with the promotional bar and reads as just another content block.
- **No price visibility.** There are no readable price points anywhere in the scroll. For a BOGO offer, showing the before/after value is standard and missing.
- **CTA buttons are buried.** Each module has what appears to be a "Shop Now" button, but they're so small they don't register as interactive prompts.
- **Spring Colors module is vague.** The section header and product imagery don't communicate a specific proposition — it's a color story with no anchor.
- **Best Sellers label does no work.** Calling out "Best Sellers" without visible product names, ratings, or prices is a missed social proof moment.

## Recommendations

- 1. **Expand the hero significantly.** Mother's Day deserves a full-width emotional image — mother/daughter, lifestyle, not just product-on-white.
- 2. **Make the BOGO more persistent.** The offer bar disappears after the header; restating it in the body near product modules would drive more conversion.
- 3. **Show prices on at least the hero product.** Even one anchor price reinforces the value of the BOGO offer concretely.
- 4. **Increase CTA button size and contrast.** Buttons need to be visually distinct and tappable — currently they read as footnotes.
- 5. **Add a tighter editorial voice to Spring Colors.** "Shop the Season's Freshest Hues" or equivalent gives buyers a reason to click beyond just visual browsing.
- 6. **Consider trimming to 3 modules.** Mommy & Me + Sandals + Best Sellers would be a tighter, more focused email. Spring Colors dilutes the Mother's Day angle.
- | Priority | Issue | Fix |
- |---|---|---|
- | **High** | Campaign ID mismatch in Kruxd + ink1000 pixels | Update both pixels to `MKG_US_NA_U_SEASONAL_GENDER_EN_04112026_V2` to match the send variant |
- | **High** | Return Path pixel missing `https://` protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
- | **High** | 16 HTTP image sources | Update all `image.emails.skechers.com` and `ink1000.com` `src` values to `https://` |
- | **Medium** | 4 images missing `alt` text | Add descriptive `alt` attributes; use `alt=""` for purely decorative assets |
- | **Medium** | `maximum-scale=1` + `-webkit-text-size-adjust: none` | Remove `maximum-scale=1` from viewport; change `text-size-adjust` to `100%` rather than `none` |
- | **Low** | `[Test]:` prefix + raw campaign ID in subject | Confirm production subject line is loaded before live deployment |
- | **Low** | SPF/DKIM not confirmed | Capture a seed inbox copy and verify `Authentication-Results` headers pass before deployment |

## Full review
## 1. Executive Summary

A well-timed Mother's Day seasonal push with a strong BOGO 50% off offer anchoring the top. The email covers a lot of ground — Mommy & Me, Sandals, Spring Colors, Best Sellers — but the execution suffers from severe image compression and tiny text that makes the content nearly illegible at normal viewing size. The offer lands, the intent is clear, but the production quality undercuts what should be a high-value seasonal moment.

---

## 2. Business Impact Score: **5/10**

Strong offer and timely occasion, significantly hampered by visual execution that makes the email feel low-fidelity for a campaign this important.

---

## 3. What's Working

- **BOGO 50% off is prominent and immediate** — anchored in the header bar with a "Shop Now" CTA before the hero even loads. No hunting for the deal.
- **Mother's Day Gift Guide framing** is smart and seasonally appropriate. The occasion context does real work justifying the send.
- **Multiple category modules** (Mommy & Me, Sandals, Spring Colors, Best Sellers) give the email reach across different buyer intents — gift buyers, self-purchasers, trend seekers.
- **Footer utility is comprehensive** — app download, curbside pickup, buy now/pay later, store finder all visible. Good conversion safety net.

---

## 4. What's Weak

- **Everything is too small.** The email appears to be rendered at a width that compresses all text and imagery to near-unreadable scale. Product names, prices, and CTAs are visually indistinguishable without zooming in.
- **Hero image is weak.** The "Mommy & Me" product shot is soft and small — for Mother's Day, this should be the emotional centerpiece commanding full-width real estate. It's competing with the promotional bar and reads as just another content block.
- **No price visibility.** There are no readable price points anywhere in the scroll. For a BOGO offer, showing the before/after value is standard and missing.
- **CTA buttons are buried.** Each module has what appears to be a "Shop Now" button, but they're so small they don't register as interactive prompts.
- **Spring Colors module is vague.** The section header and product imagery don't communicate a specific proposition — it's a color story with no anchor.
- **Best Sellers label does no work.** Calling out "Best Sellers" without visible product names, ratings, or prices is a missed social proof moment.

---

## 5. Recommendations

1. **Expand the hero significantly.** Mother's Day deserves a full-width emotional image — mother/daughter, lifestyle, not just product-on-white.
2. **Make the BOGO more persistent.** The offer bar disappears after the header; restating it in the body near product modules would drive more conversion.
3. **Show prices on at least the hero product.** Even one anchor price reinforces the value of the BOGO offer concretely.
4. **Increase CTA button size and contrast.** Buttons need to be visually distinct and tappable — currently they read as footnotes.
5. **Add a tighter editorial voice to Spring Colors.** "Shop the Season's Freshest Hues" or equivalent gives buyers a reason to click beyond just visual browsing.
6. **Consider trimming to 3 modules.** Mommy & Me + Sandals + Best Sellers would be a tighter, more focused email. Spring Colors dilutes the Mother's Day angle.

---

## 6. Bottom Line

The bones are right — right offer, right occasion, right category breadth. But the execution doesn't match the moment. Mother's Day is one of the highest-intent gifting periods in the calendar and this email reads more like a routine newsletter than a seasonal campaign centerpiece. Fix the visual weight, sharpen the hero, and make the offer do more work in the body.

---

## 7. Evidence

**Overall purpose:** Mother's Day promotional email with BOGO 50% off across women's footwear, targeting both gift buyers and self-purchasers.

**Hero / primary value proposition:** BOGO 50% off header bar + "Mother's Day Gift Guide" headline with a Mommy & Me product pairing. The offer is clear but the hero image lacks emotional scale.

**Membership / benefits section:** Not visible. No loyalty, Skechers Elite, or points references in the body.

**Product discoverability / recommendation modules:** Four modules visible — Mommy & Me, Sandals, Spring Colors, Best Sellers (Women/Men/Kids/Clothing tabs visible). Coverage is broad; individual products are not legible at this render size.

**Utility / secondary modules:** Footer includes app download (Apple/Google), curbside pickup, buy now/pay later, find-a-store. Well-structured and complete.

**Bugs / friction / clarity issues:** All text throughout the email is rendered at extremely small scale — likely a viewport/render width issue in the capture — making product names, CTAs, and copy unreadable without zoom. No broken images detected; all image slots appear filled.

---

## Technical Audit

## Technical Audit — Skechers MKG_US_NA_U_SEASONAL_GENDER_EN_04112026_V2

---

### 1. Technical Summary

Test send of a Mother's Day promotional email via Salesforce Marketing Cloud. Multiple mixed-content (HTTP) image sources, several missing alt attributes, a campaign ID mismatch across tracking pixels, and a broken Return Path pixel were found. Authentication status could not be confirmed.

---

### 2. Link & Tracking Issues

**Campaign ID mismatch across pixels**
The filename/subject identifies this as `MKG_US_NA_**U**_SEASONAL_GENDER_EN_04112026_**V2**`, but both the Kruxd and ink1000 pixels fire with `MKG_US_NA_**W**_SEASONAL_GENDER_EN_04112026` — dropping the `_V2` suffix and substituting `W` for `U` in the segment code:

```
# Kruxd impression beacon
campaignid=MKG_US_NA_W_SEASONAL_GENDER_EN_04112026

# ink1000 pixel
mi_ecmp=MKG_US_NA_W_SEASONAL_GENDER_EN_04112026
```

This will cause attribution to land under the wrong campaign/variant in any downstream reporting that keys on these pixel values.

**Broken Return Path seed pixel — missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
No `https://` prefix. This renders as a relative URL path, meaning the pixel never fires and inbox placement monitoring data for this send will be absent.

**26 click-tracking links** routed through `click.emails.skechers.com` — standard SFMC redirect, not a defect, but confirmed untestable by the QA probe as expected.

---

### 3. Rendering & Accessibility

**Pervasive HTTP image sources (16 assets)**
All `image.emails.skechers.com` hosted images and the ink1000 tracking pixel use `http://`:

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
...and 11 more (social icons, footer assets)
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif                                 (tracking pixel)
```

Gmail (via Google Image Proxy) will rewrite these to HTTPS, but other clients (Outlook, Apple Mail with strict settings, some corporate proxies) may block non-HTTPS sources outright, causing broken images across the email.

**Missing alt text — 4 images**

| Asset | URL |
|---|---|
| `o.gif` (ink1000 pixel) | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` |
| `49468f73-...png` | `http://image.emails.skechers.com/.../m/11/49468f73-...` |
| `00100b23-...png` | `http://image.emails.skechers.com/.../m/11/00100b23-...` |
| `fc08601a-...png` | `http://image.emails.skechers.com/.../m/11/fc08601a-...` |

Missing `alt` on content images breaks screen reader traversal and renders blank in image-off environments.

**`maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Blocks user-initiated zoom — WCAG 1.4.4 violation (Resize Text, Level AA).

**`-webkit-text-size-adjust: none` on `*` selector**
Applied globally, this disables iOS automatic text scaling. Combined with `maximum-scale=1`, users cannot increase text size, compounding the accessibility problem.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens detected in the visible HTML. The Kruxd beacon correctly carries a SHA-256 hashed subscriber UID and a numeric sub-ID, consistent with expected test-send resolution. The ink1000 pixel carries `mi_u=8021648903`, which appears to be a resolved test subscriber ID.

No issues found with token rendering, but the campaign ID values in these pixels are wrong (see §2).

---

### 5. Compliance

**SPF/DKIM authentication unverifiable**
QA relay did not capture `Authentication-Results` headers, so SPF/DKIM/DMARC pass/fail status cannot be confirmed from this test send. Should be verified via a seed inbox capture before live deployment.

**[Test]: subject prefix**
Subject reads `[Test]: MKG_US_NA_U_SEASONAL_GENDER_EN_04112026_V2The Perfect Pair (or 2) for Her`. The `[Test]:` prefix and raw campaign ID must be stripped and replaced with the production subject line before live send — this is a test-send configuration issue, not an HTML defect.

**Unsubscribe and physical address**: Not visible in the truncated HTML — assumed present in the footer based on standard Skechers template. Should be confirmed in full source review.

---

### 6. Email-to-Site Continuity

Click URLs are encrypted via `click.emails.skechers.com` SFMC redirects, so UTM parameters on destination URLs cannot be inspected directly. No bare destination URLs are exposed in the truncated source.

The campaign ID mismatch (`U` vs `W`, missing `_V2`) identified in §2 will cause pixel-based attribution (Kruxd/DMP segment data, ink1000 analytics) to misattribute traffic from this variant — this is the primary continuity risk.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **High** | Campaign ID mismatch in Kruxd + ink1000 pixels | Update both pixels to `MKG_US_NA_U_SEASONAL_GENDER_EN_04112026_V2` to match the send variant |
| **High** | Return Path pixel missing `https://` protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
| **High** | 16 HTTP image sources | Update all `image.emails.skechers.com` and `ink1000.com` `src` values to `https://` |
| **Medium** | 4 images missing `alt` text | Add descriptive `alt` attributes; use `alt=""` for purely decorative assets |
| **Medium** | `maximum-scale=1` + `-webkit-text-size-adjust: none` | Remove `maximum-scale=1` from viewport; change `text-size-adjust` to `100%` rather than `none` |
| **Low** | `[Test]:` prefix + raw campaign ID in subject | Confirm production subject line is loaded before live deployment |
| **Low** | SPF/DKIM not confirmed | Capture a seed inbox copy and verify `Authentication-Results` headers pass before deployment |
## Recent history

- [[2026-04-10-test-mkg-us-na-u-seasonal-gender-en-04112026the-perfect-pair-or-2-for-her]] — 6.5/10 (2026-04-10)
- [[2026-04-10-adiclub-days-are-coming]] — 6/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026feel-good-styles-for-you-them]] — 5/10 (2026-04-10)

