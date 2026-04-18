---
slug: 2026-03-30-test-pro-us-ecmpur-u-bundle-ecom-en-03312026-b-v2it-s-time-to-double-up-on-comfo
type: email
date: 2026-03-30
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_B_V2It's Time to Double Up on Comfort"
tags: [email, score-6, sender/skechers]
---
# [Test]: PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_B_V2It's Time to Double Up on Comfort
**Score:** 6/10 · **Type:** Email audit · **2026-03-30**
## Executive summary

- A BOGO 50% Off Spring Sale email targeting ecommerce purchasers. The offer is clear and the hero is prominent, but the email reads as a generic catalog blast rather than a personalized bundle/comfort story. The subject line promises "Double Up on Comfort" while the email delivers a standard multi-category grid — a mismatch that undermines the narrative and dilutes the offer.
- Competent execution of a strong offer, but the creative doesn't commit to the bundle angle, and the product modules feel like filler rather than reinforcement.

## What's working

- **Hero offer is immediately legible** — "Spring Sale BOGO 50% Off" reads clearly with dual CTAs (Shop Now + Find a Store)
- **Discount timing is called out** — "Discount applies at cart" sets expectation and reduces checkout friction
- **Category coverage is efficient** — Women's, Men's, Kids', and "This Just In" are cleanly separated with their own CTAs
- **Footer utility is solid** — App download, curbside pickup, shop now/pay later, and find a store are all present and organized

## What's weak

- **Subject line vs. content mismatch** — "Double Up on Comfort" implies a bundle or comfort-focused story; the email is a standard BOGO sale grid. No comfort narrative, no product pairing logic, no "double up" framing anywhere in the body
- **Hero banner is small and text-heavy** — The offer headline competes with decorative Spring Sale typography; the product imagery in the hero is minimal/absent
- **Product grids are sparse** — Each category shows 3-4 small product thumbnails with no names, prices, or ratings. Nothing sells the products beyond the image
- **"This Just In" module is weak** — The lifestyle photo is the strongest creative in the email but the CTA ("Shop Now") is generic and the product story is unclear
- **No personalization signals** — For an ecommerce purchaser segment, there are no hooks to past behavior, no "because you bought X" moments
- **Excessive white space mid-email** — The Women's and Men's sections have large gaps that create a slow scroll without payoff

## Recommendations

- 1. **Align body to subject line** — Show actual paired/bundled products (e.g., sneakers + sandals, two colorways) to make "Double Up" feel intentional, not generic
- 2. **Add product names and prices** to the grid tiles — a BOGO offer needs price anchoring to make the value feel concrete
- 3. **Tighten the hero** — Reduce typography layering; let one bold line ("Buy One, Get One 50% Off") dominate with product imagery underneath
- 4. **Make "This Just In" earn its space** — Surface 3-4 specific new arrivals with names, or cut the module and expand the category grids
- 5. **Add a comfort callout** — One short line of copy in the hero or intro ("Our most comfortable styles — now BOGO 50% off") would close the subject line gap
- | Priority | Issue | Action |
- |----------|-------|--------|
- | **High** | All `image.emails.skechers.com` assets over HTTP | Update all image `src` to `https://` |
- | **High** | `ink1000.com` tracking pixel over HTTP | Migrate to HTTPS endpoint or remove |
- | **High** | `[Test]` subject prefix | Strip before production deploy |
- | **Medium** | SPF/DKIM not verifiable | Confirm signing headers are present via inbox seed test (e.g., Mail-Tester) |
- | **Medium** | 4 content images missing alt text | Add descriptive `alt` attributes |
- | **Medium** | Krux `campaignid` missing `_V2` suffix | Align with full variant identifier if variant-level impression tracking is required |
- | **Low** | Plain-text URL ratio at 71% | Reduce URL density in plain-text part or add more narrative text |
- | **Low** | `maximum-scale=1` blocks zoom | Consider removing or using `user-scalable=yes` for accessibility compliance |

## Full review
## Executive Summary

A BOGO 50% Off Spring Sale email targeting ecommerce purchasers. The offer is clear and the hero is prominent, but the email reads as a generic catalog blast rather than a personalized bundle/comfort story. The subject line promises "Double Up on Comfort" while the email delivers a standard multi-category grid — a mismatch that undermines the narrative and dilutes the offer.

---

## Business Impact Score: 6/10

Competent execution of a strong offer, but the creative doesn't commit to the bundle angle, and the product modules feel like filler rather than reinforcement.

---

## What's Working

- **Hero offer is immediately legible** — "Spring Sale BOGO 50% Off" reads clearly with dual CTAs (Shop Now + Find a Store)
- **Discount timing is called out** — "Discount applies at cart" sets expectation and reduces checkout friction
- **Category coverage is efficient** — Women's, Men's, Kids', and "This Just In" are cleanly separated with their own CTAs
- **Footer utility is solid** — App download, curbside pickup, shop now/pay later, and find a store are all present and organized

---

## What's Weak

- **Subject line vs. content mismatch** — "Double Up on Comfort" implies a bundle or comfort-focused story; the email is a standard BOGO sale grid. No comfort narrative, no product pairing logic, no "double up" framing anywhere in the body
- **Hero banner is small and text-heavy** — The offer headline competes with decorative Spring Sale typography; the product imagery in the hero is minimal/absent
- **Product grids are sparse** — Each category shows 3-4 small product thumbnails with no names, prices, or ratings. Nothing sells the products beyond the image
- **"This Just In" module is weak** — The lifestyle photo is the strongest creative in the email but the CTA ("Shop Now") is generic and the product story is unclear
- **No personalization signals** — For an ecommerce purchaser segment, there are no hooks to past behavior, no "because you bought X" moments
- **Excessive white space mid-email** — The Women's and Men's sections have large gaps that create a slow scroll without payoff

---

## Recommendations

1. **Align body to subject line** — Show actual paired/bundled products (e.g., sneakers + sandals, two colorways) to make "Double Up" feel intentional, not generic
2. **Add product names and prices** to the grid tiles — a BOGO offer needs price anchoring to make the value feel concrete
3. **Tighten the hero** — Reduce typography layering; let one bold line ("Buy One, Get One 50% Off") dominate with product imagery underneath
4. **Make "This Just In" earn its space** — Surface 3-4 specific new arrivals with names, or cut the module and expand the category grids
5. **Add a comfort callout** — One short line of copy in the hero or intro ("Our most comfortable styles — now BOGO 50% off") would close the subject line gap

---

## Bottom Line

The offer is strong and visible, but the email doesn't tell a story — it's a sale banner stapled to a category grid. For an ecommerce purchaser audience that already knows the brand, there's a missed opportunity to reinforce the comfort positioning and create urgency through specificity. Tighten the creative, add product details, and commit to the "double up" concept.

---

## Evidence

| Section | Observation |
|---|---|
| **Overall purpose** | Drive BOGO 50% Off Spring Sale conversions across Women's, Men's, Kids', and New Arrivals |
| **Hero / primary value prop** | BOGO 50% off is prominent; "Discount applies at cart" is present; dual CTAs (Shop Now / Find a Store); light Spring Sale decorative treatment |
| **Membership / benefits** | Not present |
| **Product discoverability** | Four category modules (Women's, Men's, Kids', This Just In) with small image grids and standalone CTAs; no product names or prices visible |
| **Utility / secondary modules** | App download, curbside pickup, buy now/pay later, find a store — all present in footer |
| **Bugs / friction** | None visible; all images render, no broken tiles, no overlapping text |

---

## Technical Audit

## Technical Audit — PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_B_V2

### 1. Technical Summary
This is a test-flagged promotional email with a systemic HTTP image-serving issue affecting 14+ assets, combined with unverifiable SPF/DKIM authentication status. No broken links or missing merge tokens were detected, but the mixed-content and tracking pixel issues warrant fixes before production send.

---

### 2. Link & Tracking Issues

**[WARN] Plain-text version is URL-heavy**
71% of plain-text characters (4,171 / 5,818) are URLs. This is a spam filter risk — Barracuda, SpamAssassin, and similar filters penalize high URL-to-text ratios in the plain-text part.

**[WARN] 23 click-tracking links not probed**
All links route through `click.emails.skechers.com` with encrypted `?qs=` payloads. Final destinations could not be validated. Confirm all BOGO landing pages resolve correctly and are not 404ing before production deploy.

**[WARN] Third-party tracking pixel over HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
  ?mi_u=8104607450&mi_ecmp=PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_B
```
Non-HTTPS pixel will be blocked in Gmail, Apple Mail, and any client with mixed-content enforcement. Zero sends will register against this pixel.

**[INFO] Krux/Salesforce DMP pixels present**
Three `beacon.krxd.net` pixels are present for audience matching and impression tracking — one hardcodes campaign ID `PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_B` (without `_V2`). If variant tracking is needed at the Krux layer, the `campaignid` param may need updating.

**[INFO] Test subject line prefix not stripped**
Subject line begins with `[Test]:` — must be removed before production send.

---

### 3. Rendering & Accessibility

**[WARN] 14 image assets served over HTTP**
All `image.emails.skechers.com` assets use `http://` scheme. Affected images include the Skechers logo, app store badges, social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), AfterPay badge, and multiple unnamed content images. These will be blocked or shown as broken in any client that enforces HTTPS for embedded resources.

Affected src pattern:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/*.png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/*.png
```
Fix: update all `src` attributes to `https://`.

**[WARN] 4 images missing `alt` text**
The following have no `alt` attribute or empty alt:
- `o.gif` (ink1000 tracking pixel — acceptable as empty, but flagged)
- `49468f73-...png` — unknown content image, no alt
- `00100b23-...png` — unknown content image, no alt
- `fc08601a-...png` — unknown content image, no alt

Content images with no alt text render as blank in image-blocking clients (Outlook default settings, corporate environments). Add descriptive alt text or `alt=""` for decorative images.

**[INFO] `maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
This prevents user-initiated zoom, which is an accessibility concern (WCAG 1.4.4) and may be flagged by accessibility audits.

**[INFO] `-webkit-text-size-adjust: none`**
Applied globally via `* { -webkit-text-size-adjust: none; }`. This disables iOS auto-text resizing across all elements, which can make small text unreadable on older iPhones without zoom.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%`, `{{`, `[%`) detected in the truncated source. Subscriber ID `115584018` appears hardcoded in a Krux pixel — confirm this is a seed/test address value, not a production subscriber ID embedded statically.

---

### 5. Compliance

**[WARN] SPF/DKIM authentication status unknown**
The `Authentication-Results` header was not found via the AgentMail relay. SPF and DKIM pass/fail status cannot be confirmed. If this email is relayed through an intermediary before reaching the inbox, ensure the signing domain aligns with `emails.skechers.com` to avoid DMARC failures.

**[INFO] Unsubscribe and physical address**
Not visible in the truncated HTML, but standard Skechers footer is referenced via `stylingblock-content-wrapper` blocks. Verify that the rendered footer includes:
- A working one-click unsubscribe link (CAN-SPAM / RFC 8058)
- Physical mailing address

**[INFO] `[Test]` prefix in subject**
Must be stripped before production — test-prefixed subjects can trigger spam filters and present compliance risk if accidentally deployed to a full list.

---

### 6. Email-to-Site Continuity

All 23 CTAs route through `click.emails.skechers.com/?qs=` (encrypted redirect). UTM parameters, if present, are encoded inside the ciphertext and cannot be verified externally. **Recommended:** decode a sample link post-click to confirm `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` are present and correctly set to `PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_B_V2` (not the non-`_V2` campaign ID seen in the Krux pixel).

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| **High** | All `image.emails.skechers.com` assets over HTTP | Update all image `src` to `https://` |
| **High** | `ink1000.com` tracking pixel over HTTP | Migrate to HTTPS endpoint or remove |
| **High** | `[Test]` subject prefix | Strip before production deploy |
| **Medium** | SPF/DKIM not verifiable | Confirm signing headers are present via inbox seed test (e.g., Mail-Tester) |
| **Medium** | 4 content images missing alt text | Add descriptive `alt` attributes |
| **Medium** | Krux `campaignid` missing `_V2` suffix | Align with full variant identifier if variant-level impression tracking is required |
| **Low** | Plain-text URL ratio at 71% | Reduce URL density in plain-text part or add more narrative text |
| **Low** | `maximum-scale=1` blocks zoom | Consider removing or using `user-scalable=yes` for accessibility compliance |
## Recent history

- [[2026-03-30-test-pro-us-ecmpur-u-bundle-ecom-en-03312026-ait-s-time-to-double-up-on-comfort]] — 5/10 (2026-03-30)
- [[2026-03-30-test-pro-us-ecmpur-u-bundle-ecom-en-03312026-bit-s-time-to-double-up-on-comfort]] — 6/10 (2026-03-30)
- [[2026-03-30-add-a-pop-of-color-to-your-closet]] — 6/10 (2026-03-30)

