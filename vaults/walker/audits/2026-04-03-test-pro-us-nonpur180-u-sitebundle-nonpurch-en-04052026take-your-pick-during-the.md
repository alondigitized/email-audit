---
slug: 2026-04-03-test-pro-us-nonpur180-u-sitebundle-nonpurch-en-04052026take-your-pick-during-the
type: email
date: 2026-04-03
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04052026Take Your Pick During the Spring Fling Sale"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04052026Take Your Pick During the Spring Fling Sale
**Score:** 5/10 · **Type:** Email audit · **2026-04-03**
## Executive summary

- A clean, gender-segmented browse email built around a BOGO 50% Off spring sale offer. The structure is straightforward — hero, four category swimlanes (Women's, Men's, Girls', Boys'), a secondary nav block, and utility footer. It does its job functionally, but the hero fails to land the sale offer with real conviction, and the category module repetition becomes mechanical before you reach the fold.
- Competent but forgettable. The BOGO offer is the only real hook and it gets buried quickly. The email doesn't build desire or urgency — it just organizes catalog inventory.

## What's working

- **BOGO 50% Off is visible immediately** in the hero — the offer is the first thing the eye hits
- **Gender segmentation is clear** — Women's, Men's, Girls', Boys' sections create easy scan paths for the right shopper
- **Product photography is clean** and consistent across all four swimlanes
- **Short CTA labels** (SHOP WOMEN'S, SHOP MEN'S, etc.) are direct and unambiguous
- **"Shop Additional Styles" nav block** (Women, Men, Kids, Clothing, New Arrivals, Sale) gives secondary browsing options without overwhelming the main flow

## What's weak

- **Hero headline execution is weak.** "Buy One, Get One 50% Off" reads as overlaid text on a flat product image — there's no seasonal energy, no spring visual identity, no urgency trigger. "Spring Fling Sale" from the subject line doesn't appear prominently in the render at all.
- **One product per category module** — each swimlane shows a single shoe. This is a sale email; showing one item doesn't suggest abundance or variety. It looks like a feature email, not a sale.
- **No price anchoring.** No original prices, sale prices, or "starting at $X" messaging anywhere visible. For a BOGO offer, the absence of price signals means the financial benefit is abstract.
- **No urgency mechanism.** No end date, countdown language, or "limited time" callout visible anywhere in the email.
- **The [Test] subject line prefix** is present in the subject — this should not be reaching any real recipients. If this is a test render, that's expected; if it's live, it's a professionalism issue.
- **"LET'S GET TEXTING" promo block** mid-email (SMS sign-up) breaks the purchase flow at a critical point — right after the category modules and before checkout intent solidifies.

## Recommendations

- 1. **Add a sale end date or urgency line** to the hero — even "Ends Sunday" below the BOGO headline changes the behavioral response
- 2. **Show 2–3 products per category swimlane**, not one. A sale email should project abundance; single-item rows read as editorial, not promotional
- 3. **Add price anchoring** — "Starting at $XX" or a crossed-out price makes the BOGO feel tangible rather than conditional
- 4. **Move the SMS opt-in block to the footer** or post-purchase flow — it interrupts momentum mid-scroll during a sales email
- 5. **Bring "Spring Fling" visual identity into the hero** — a seasonal color palette or thematic design element would differentiate this from generic sale emails
- | Priority | Issue | Action |
- |----------|-------|--------|
- | **P0** | Campaign ID concatenated into subject line | Fix template merge logic; strip/separate campaign ID from subject token before send |
- | **P0** | `[Test]:` prefix in subject | Remove before production deploy |
- | **P1** | 14+ images on HTTP | Update all `http://image.emails.skechers.com/` and `http://pixel.app.returnpath.net/` srcs to HTTPS |
- | **P1** | SPF/DKIM unverified | Run a seed send and confirm `Authentication-Results` shows `dkim=pass` and `spf=pass` |
- | **P2** | 3 images missing `alt` text | Add descriptive alt text to the three non-pixel images flagged above |
- | **P2** | Raw subscriber UID in Krux pixel | Review data-sharing agreement; consider restricting to hashed ID only |
- | **P2** | `maximum-scale=1` in viewport | Remove to restore pinch-zoom accessibility |
- | **P3** | `-webkit-text-size-adjust: none` | Change to `100%` |
- | **P3** | UTM params on click destinations | Verify ESP appends UTM params through redirect chain |

## Full review
## Skechers Spring Fling Sale — Email Review

---

### 1. Executive Summary

A clean, gender-segmented browse email built around a BOGO 50% Off spring sale offer. The structure is straightforward — hero, four category swimlanes (Women's, Men's, Girls', Boys'), a secondary nav block, and utility footer. It does its job functionally, but the hero fails to land the sale offer with real conviction, and the category module repetition becomes mechanical before you reach the fold.

---

### 2. Business Impact Score: **5 / 10**

Competent but forgettable. The BOGO offer is the only real hook and it gets buried quickly. The email doesn't build desire or urgency — it just organizes catalog inventory.

---

### 3. What's Working

- **BOGO 50% Off is visible immediately** in the hero — the offer is the first thing the eye hits
- **Gender segmentation is clear** — Women's, Men's, Girls', Boys' sections create easy scan paths for the right shopper
- **Product photography is clean** and consistent across all four swimlanes
- **Short CTA labels** (SHOP WOMEN'S, SHOP MEN'S, etc.) are direct and unambiguous
- **"Shop Additional Styles" nav block** (Women, Men, Kids, Clothing, New Arrivals, Sale) gives secondary browsing options without overwhelming the main flow

---

### 4. What's Weak

- **Hero headline execution is weak.** "Buy One, Get One 50% Off" reads as overlaid text on a flat product image — there's no seasonal energy, no spring visual identity, no urgency trigger. "Spring Fling Sale" from the subject line doesn't appear prominently in the render at all.
- **One product per category module** — each swimlane shows a single shoe. This is a sale email; showing one item doesn't suggest abundance or variety. It looks like a feature email, not a sale.
- **No price anchoring.** No original prices, sale prices, or "starting at $X" messaging anywhere visible. For a BOGO offer, the absence of price signals means the financial benefit is abstract.
- **No urgency mechanism.** No end date, countdown language, or "limited time" callout visible anywhere in the email.
- **The [Test] subject line prefix** is present in the subject — this should not be reaching any real recipients. If this is a test render, that's expected; if it's live, it's a professionalism issue.
- **"LET'S GET TEXTING" promo block** mid-email (SMS sign-up) breaks the purchase flow at a critical point — right after the category modules and before checkout intent solidifies.

---

### 5. Recommendations

1. **Add a sale end date or urgency line** to the hero — even "Ends Sunday" below the BOGO headline changes the behavioral response
2. **Show 2–3 products per category swimlane**, not one. A sale email should project abundance; single-item rows read as editorial, not promotional
3. **Add price anchoring** — "Starting at $XX" or a crossed-out price makes the BOGO feel tangible rather than conditional
4. **Move the SMS opt-in block to the footer** or post-purchase flow — it interrupts momentum mid-scroll during a sales email
5. **Bring "Spring Fling" visual identity into the hero** — a seasonal color palette or thematic design element would differentiate this from generic sale emails

---

### 6. Bottom Line

This email will generate baseline clicks from engaged Skechers shoppers who already know the brand. It won't punch above its weight. The BOGO offer has real value but the email doesn't amplify it — no urgency, no price context, no product variety. Structural upgrade (more SKUs per row, price anchoring, end date) would meaningfully lift conversion without a redesign.

---

### 7. Evidence

**Overall purpose:** Drive BOGO 50% Off Spring Fling Sale traffic to Skechers.com across all gender categories (non-purchaser re-engagement segment based on segment code)

**Hero / primary value proposition:** BOGO 50% Off headline over a women's sandal/slide product image; "SHOP NOW" CTA. Offer is visible but visually flat — no sale energy or deadline.

**Membership / benefits section:** None visible.

**Product discoverability / recommendation modules:** Four single-product swimlanes — Women's (espadrille flat), Men's (sneaker), Girls' (sandal), Boys' (sneaker). Each has a labeled CTA. Single-item presentation undersells the range.

**Utility / secondary modules:** "Shop Additional Styles" text nav (Women, Men, Kids, Clothing, New Arrivals, Sale); "LET'S GET TEXTING" SMS opt-in; Download App / Curbside Pickup / Find a Store strip; social follow icons (Facebook, Instagram, Pinterest, YouTube, Twitter); legal footer.

**Bugs / friction / clarity issues:** "LET'S GET TEXTING" opt-in block placed in the middle of the commercial flow is a UX interruption. No visible rendering errors, broken images, or overlapping text detected.

---

## Technical Audit

## Technical Audit — Skechers Spring Fling Sale
**From:** SKECHERS `<no-reply@emails.skechers.com>`
**Campaign ID:** PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04052026

---

### 1. Technical Summary

This email has a critical subject-line merge failure that would expose a raw campaign ID to all recipients if deployed. It also serves the majority of its image assets over HTTP, which modern clients will block or flag as insecure.

---

### 2. Link & Tracking Issues

**Critical — Subject line concatenation failure**
The `Subject:` header reads:
```
[Test]: PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04052026Take Your Pick During the Spring Fling Sale
```
The campaign ID token (`PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04052026`) was not stripped before being concatenated directly into the subject string with no delimiter. This indicates a broken template variable or an unstripped debug/campaign-name prefix. Must be resolved before production send.

**Test prefix present**
`[Test]:` remains in the subject line. Email is not production-ready.

**Third-party beacon pixels embedded**
Two Krux (Salesforce DMP) user-match pixels fire on open, one passing a **raw subscriber ID** in plaintext:
```
https://beacon.krxd.net/...&partner_uid=7187828
https://beacon.krxd.net/...&partner_uid=af077ed316c5f351...  (SHA-256 hash)
```
The raw numeric UID (`7187828`) is exposed in a third-party pixel URL. Confirm this is intentional and compliant with your data-sharing agreements and privacy policy.

**Return Path seed monitoring pixel**
```
http://pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
Served over HTTP. Should be `https://`.

**26 click-tracking links** all route through `click.emails.skechers.com` — standard ESP redirect, no issues beyond the expected opacity.

---

### 3. Rendering & Accessibility

**High severity — Pervasive HTTP image sources**
14+ images are served over plain HTTP, including the Skechers logo, app store badges, all social icons, and the AfterPay badge. Gmail (2019+), Apple Mail, and Outlook 2016+ block or warn on non-HTTPS image loads. Affected hosts:
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png` (logo)
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/*.png` (all footer assets)
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` (tracking pixel)

The entire `image.emails.skechers.com` CDN should be verified as HTTPS-capable; these URLs just need the scheme updated.

**Missing alt text — 4 images**
| File | Context |
|------|---------|
| `49468f73-4651-4af3-bea2-61d1ae5db486.png` | Unknown (likely product/promo) |
| `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` | Unknown |
| `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` | Unknown |
| `o.gif` (ink1000) | Tracking pixel — empty `alt=""` is acceptable here |

The three non-pixel images require descriptive `alt` text for screen readers and image-blocked rendering.

**`-webkit-text-size-adjust: none` in `<style>`**
This CSS rule prevents iOS from scaling text to readable sizes when the user has accessibility font-size overrides enabled. Replace with `-webkit-text-size-adjust: 100%`.

**`maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Prevents pinch-to-zoom on mobile — an accessibility violation (WCAG 1.4.4). Remove `maximum-scale=1`.

---

### 4. Personalization & Merge Tokens

**Broken merge/substitution — campaign ID in subject line** (see §2 above — the most urgent issue in this category).

Preheader text (`"Take 50% off your 2nd Pair or 20% off 1 Item"`) appears hardcoded; no unfired merge tokens visible in the truncated HTML. No `%%`-style or `{{`-style unresolved tokens observed in the visible source.

---

### 5. Compliance

**Deliverability — SPF/DKIM unverifiable**
QA relay did not capture `Authentication-Results` headers. SPF and DKIM pass/fail status for `emails.skechers.com` is unconfirmed in this review. Validate authentication via a seed-list send or MXToolbox before deployment.

**CAN-SPAM / unsubscribe**
HTML source is truncated; footer with physical address and unsubscribe link not visible in the provided excerpt. These are mandatory — confirm they are present in the full template. The ESP (Salesforce Marketing Cloud, inferred from `click.emails.skechers.com` and pixel patterns) typically injects these automatically, but template overrides can suppress them.

---

### 6. Email-to-Site Continuity

All 26 click links route through `click.emails.skechers.com` click-redirect URLs with encrypted query strings. UTM parameter presence on destination URLs cannot be verified without resolving the redirects. Confirm the ESP is appending `utm_source`, `utm_medium`, and `utm_campaign` (ideally matching the campaign ID) before the production send.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| **P0** | Campaign ID concatenated into subject line | Fix template merge logic; strip/separate campaign ID from subject token before send |
| **P0** | `[Test]:` prefix in subject | Remove before production deploy |
| **P1** | 14+ images on HTTP | Update all `http://image.emails.skechers.com/` and `http://pixel.app.returnpath.net/` srcs to HTTPS |
| **P1** | SPF/DKIM unverified | Run a seed send and confirm `Authentication-Results` shows `dkim=pass` and `spf=pass` |
| **P2** | 3 images missing `alt` text | Add descriptive alt text to the three non-pixel images flagged above |
| **P2** | Raw subscriber UID in Krux pixel | Review data-sharing agreement; consider restricting to hashed ID only |
| **P2** | `maximum-scale=1` in viewport | Remove to restore pinch-zoom accessibility |
| **P3** | `-webkit-text-size-adjust: none` | Change to `100%` |
| **P3** | UTM params on click destinations | Verify ESP appends UTM params through redirect chain |
## Recent history

- [[2026-04-03-discover-the-support-you-ve-been-looking-for]] — 5/10 (2026-04-03)
- [[2026-04-03-did-you-forget-something]] — 5/10 (2026-04-03)
- [[2026-04-11-test-pro-us-na-u-bundle-full-en-04042026this-is-a-get-two-kind-of-sale]] — 5/10 (2026-04-02)

