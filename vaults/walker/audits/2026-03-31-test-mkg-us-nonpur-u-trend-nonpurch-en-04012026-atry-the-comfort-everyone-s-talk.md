---
slug: 2026-03-31-test-mkg-us-nonpur-u-trend-nonpurch-en-04012026-atry-the-comfort-everyone-s-talk
type: email
date: 2026-03-31
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_ATry the Comfort Everyone's Talking About"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_ATry the Comfort Everyone's Talking About
**Score:** 6/10 · **Type:** Email audit · **2026-03-31**
## Executive summary

- A clean, category-driven acquisition email targeting non-purchasers with a "Trend Report" framing. The layout is tight and the product photography is strong, but the hero offer (50% OFF) feels buried beneath the editorial headline, and the category navigation modules mid-email dilute the conversion path. For a non-purchaser audience that needs a compelling first reason to buy, this email undersells the discount and over-indexes on browsing.

## What's working

- **Hero product photography** is vibrant and well-styled — the layered shoe collage communicates variety and energy at a glance.
- **"Trend Report" framing** gives the email an editorial, aspirational angle that suits a non-purchaser audience who may be in discovery mode.
- **Category pods** (Hands Free Slip-In, Street Style, Color) are clearly labeled and visually distinct, creating a scannable structure for different shopper interests.
- **Best Sellers module** at the bottom is a smart closer — social proof for hesitant first-time buyers.
- **Footer utility** (shop links, category nav, unsubscribe) is compact and well-organized.

## What's weak

- **50% OFF is visually subordinate to "Trend Report."** The offer text sits above the hero headline in smaller type. For a non-purchaser who hasn't committed to the brand, the discount is the hook — it should lead, not trail.
- **"SHOP NOW" CTAs are generic and repeated identically** across every module (Hands Free, Street Style, Color, Best Sellers). No module has a differentiated CTA that reinforces what the shopper is clicking into.
- **Street Style module is visually underpowered.** The product row appears smaller and less curated than the Hands Free Slip-In and Color modules. The section heading alone doesn't carry enough weight.
- **No price anchoring or urgency signal** anywhere below the hero. The 50% offer is only visible at the top — nothing reinforces it in the Best Sellers or category modules where the shopper is closest to clicking.
- **The "Color" section header** is a weak editorial label. It describes a product attribute, not a lifestyle or trend — lower intent signal for someone just discovering the brand.

## Recommendations

- 1. **Flip the hero hierarchy.** Lead with "50% OFF" in large type, then "Trend Report" as the supporting label. Non-purchasers need a financial reason to take a first step.
- 2. **Differentiate CTAs per module.** Replace generic "SHOP NOW" with "Shop Slip-Ins," "Shop Street Style," "Shop Best Sellers" — each click feels more intentional and improves click tracking attribution.
- 3. **Add a price or savings callout to the Best Sellers module.** A "Starting at $X" or "Up to 50% off select styles" line directly above the CTA would reinforce the offer at the decision point.
- 4. **Strengthen the Color section label.** Rename to something like "Bold Spring Color" or "Statement Styles" to frame it as a trend, not just a product filter.
- 5. **Consider consolidating to 3 modules max.** Hands Free + Best Sellers + one trend category would tighten the funnel rather than fragmenting intent across four parallel tracks.
- | Priority | Action |
- |---|---|
- | **P0** | Fix Return Path pixel — add `https://` protocol to `src="pixel.app.returnpath.net/..."` |
- | **P0** | Migrate `image.emails.skechers.com` CDN to HTTPS. All 14+ content images are HTTP. This will cause image suppression in Gmail, Outlook 365, and iOS Mail. |
- | **P0** | Remove `[Test]:` subject prefix before production send |
- | **P1** | Replace ink1000 pixel with HTTPS endpoint or confirm domain supports HTTPS |
- | **P1** | Verify `partner_uid=102541952` and `mi_u=8091927189` — confirm static or substitute with dynamic subscriber merge tags |
- | **P1** | Confirm SPF/DKIM pass on `emails.skechers.com` before deployment; obtain Authentication-Results from a live seed send |
- | **P2** | Add descriptive `alt` text to the 4 images flagged missing it (excluding intentional tracking pixels) |
- | **P2** | Verify full HTML contains unsubscribe link and physical address per CAN-SPAM §5(a)(5) |

## Full review
## 1. Executive Summary

A clean, category-driven acquisition email targeting non-purchasers with a "Trend Report" framing. The layout is tight and the product photography is strong, but the hero offer (50% OFF) feels buried beneath the editorial headline, and the category navigation modules mid-email dilute the conversion path. For a non-purchaser audience that needs a compelling first reason to buy, this email undersells the discount and over-indexes on browsing.

---

## 2. Business Impact Score: 6/10

---

## 3. What's Working

- **Hero product photography** is vibrant and well-styled — the layered shoe collage communicates variety and energy at a glance.
- **"Trend Report" framing** gives the email an editorial, aspirational angle that suits a non-purchaser audience who may be in discovery mode.
- **Category pods** (Hands Free Slip-In, Street Style, Color) are clearly labeled and visually distinct, creating a scannable structure for different shopper interests.
- **Best Sellers module** at the bottom is a smart closer — social proof for hesitant first-time buyers.
- **Footer utility** (shop links, category nav, unsubscribe) is compact and well-organized.

---

## 4. What's Weak

- **50% OFF is visually subordinate to "Trend Report."** The offer text sits above the hero headline in smaller type. For a non-purchaser who hasn't committed to the brand, the discount is the hook — it should lead, not trail.
- **"SHOP NOW" CTAs are generic and repeated identically** across every module (Hands Free, Street Style, Color, Best Sellers). No module has a differentiated CTA that reinforces what the shopper is clicking into.
- **Street Style module is visually underpowered.** The product row appears smaller and less curated than the Hands Free Slip-In and Color modules. The section heading alone doesn't carry enough weight.
- **No price anchoring or urgency signal** anywhere below the hero. The 50% offer is only visible at the top — nothing reinforces it in the Best Sellers or category modules where the shopper is closest to clicking.
- **The "Color" section header** is a weak editorial label. It describes a product attribute, not a lifestyle or trend — lower intent signal for someone just discovering the brand.

---

## 5. Recommendations

1. **Flip the hero hierarchy.** Lead with "50% OFF" in large type, then "Trend Report" as the supporting label. Non-purchasers need a financial reason to take a first step.
2. **Differentiate CTAs per module.** Replace generic "SHOP NOW" with "Shop Slip-Ins," "Shop Street Style," "Shop Best Sellers" — each click feels more intentional and improves click tracking attribution.
3. **Add a price or savings callout to the Best Sellers module.** A "Starting at $X" or "Up to 50% off select styles" line directly above the CTA would reinforce the offer at the decision point.
4. **Strengthen the Color section label.** Rename to something like "Bold Spring Color" or "Statement Styles" to frame it as a trend, not just a product filter.
5. **Consider consolidating to 3 modules max.** Hands Free + Best Sellers + one trend category would tighten the funnel rather than fragmenting intent across four parallel tracks.

---

## 6. Bottom Line

Solid foundation with good photography and logical category structure, but the email is structured for browsers, not converters. The 50% OFF offer — likely the single strongest lever for a non-purchaser — is visually deprioritized. Fixing the hero hierarchy and adding urgency reinforcement lower in the scroll would meaningfully improve conversion likelihood for this segment.

---

## 7. Evidence

**Overall purpose:** Trend-driven acquisition email to non-purchasers promoting current styles with a 50% off offer.

**Hero / primary value proposition:** "Trend Report" editorial headline with "50% OFF" and "OVER 1000 STYLES" in smaller supporting text above it. Strong product collage image. "SHOP NOW" CTA. The discount is present but not dominant.

**Membership / benefits section:** Not present. No loyalty, rewards, or membership mention visible.

**Product discoverability / recommendation modules:**
- *Hands Free Slip-In* — full-width product image with category label and "SHOP NOW." Well-executed.
- *Street Style* — smaller product row, slightly less visual impact.
- *Color* — product row with good lifestyle photography and color variety.
- *Best Sellers* — green banner module with "SHOP NOW," positioned as a social-proof closer.

**Utility / secondary modules:** Footer contains category links (Women, Men, Kids, Clearance, Sale) and standard email utility links. Clean and minimal.

**Bugs / friction / clarity issues:** No broken images, overlapping text, or visible rendering errors observed. Email renders cleanly end to end.

---

## Technical Audit

## Technical Audit — MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_A

---

### 1. Technical Summary

Systemic HTTP (non-HTTPS) image delivery across the entire `image.emails.skechers.com` CDN will cause images to be blocked in security-enforcing clients. A malformed Return Path tracking pixel (missing URL protocol) will silently fail to fire.

---

### 2. Link & Tracking Issues

**[CRITICAL] Return Path pixel missing protocol:**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499">
```
`src` has no `https://` prefix — browser/client treats this as a relative path. Pixel will not fire. Inbox deliverability monitoring via Return Path/Validity will be blind for this send.

**[WARN] Third-party pixel served over HTTP:**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8091927189&mi_ecmp=MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_A
```
Non-HTTPS pixel. Will be blocked in Gmail and other clients enforcing mixed-content rules.

**[WARN] Static-looking subscriber IDs in tracking pixels — verify substitution:**
- `partner_uid=102541952` in `beacon.krxd.net` subid pixel
- `mi_u=8091927189` in ink1000 pixel

Both appear to be numeric literals rather than merge tags. Confirm these are intentionally static or should be `%%subscriberID%%` / equivalent.

**[INFO] 26 click-redirect links** through `https://click.emails.skechers.com` — HTTPS, no issues.

**[INFO] Subject line retains `[Test]:` prefix** — must be stripped before production deployment.

---

### 3. Rendering & Accessibility

**[HIGH] Entire image CDN served over HTTP:**
All content images are sourced from `http://image.emails.skechers.com/lib/fe3115707564047a731c78/...`. Confirmed affected images (14 flagged by QA):
- Skechers logo (`dde00662-169f-447d-b0e2-fc65f6c2290c.png`)
- App Store badge (`0ec56c9f-eec2-471a-898d-0ca1cea7e115.png`)
- Google Play badge (`9bb508d0-4b38-483d-8483-cf54186a0b9f.png`)
- Social icons: Instagram, Twitter, Facebook, Pinterest, YouTube
- AfterPay logo, and 4 additional unnamed images

Gmail blocks HTTP images by default; Outlook 365 and Apple Mail on iOS 14+ enforce HTTPS. This is a systemic CDN configuration issue, not per-image.

**[WARN] Missing alt text on 4 images:**
- `o.gif` (ink1000 tracking pixel — alt="" acceptable for tracking pixels but currently absent)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

Images-off rendering will show broken UI for these elements with no fallback text.

**[INFO] Mobile/desktop CSS toggle** uses `display:none`/`display:block` with `@media` — standard pattern, no issues. Moz-specific overrides for Thunderbird present and correct.

---

### 4. Personalization & Merge Tokens

No unresolved merge token literals (e.g., `%%FIRST_NAME%%`, `[NAME]`) detected in the visible HTML. Preheader text ("Stock Up & Show Out with BOGO 50% Off") is hardcoded static copy — consistent with non-personalized audience segment (`NONPURCH`).

Krux campaign ID pixel correctly carries the campaign name:
```
campaignid=MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_A
```

No issues found beyond the subscriber ID substitution question noted in §2.

---

### 5. Compliance

**[WARN] SPF/DKIM authentication status unknown:**
Authentication-Results header not present in QA relay data. Cannot confirm `emails.skechers.com` sender subdomain is properly authenticated. DMARC alignment requires SPF or DKIM to pass on the `From:` domain.

**[INFO]** Unsubscribe link and physical mailing address could not be verified from the truncated HTML provided. These are CAN-SPAM requirements — must be confirmed in full source review.

**[INFO]** From address `no-reply@emails.skechers.com` uses a no-reply sender. CAN-SPAM requires a functioning reply-to or monitored inbox — verify backend handling.

---

### 6. Email-to-Site Continuity

Click links route through `https://click.emails.skechers.com` redirect — UTM parameter passthrough depends on redirect configuration and cannot be verified from HTML alone. The campaign code (`MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_A`) is present in impression/pixel beacons, confirming campaign attribution tagging is in place at the pixel layer.

No issues found in the HTML structure itself; UTM audit requires redirect chain inspection.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Fix Return Path pixel — add `https://` protocol to `src="pixel.app.returnpath.net/..."` |
| **P0** | Migrate `image.emails.skechers.com` CDN to HTTPS. All 14+ content images are HTTP. This will cause image suppression in Gmail, Outlook 365, and iOS Mail. |
| **P0** | Remove `[Test]:` subject prefix before production send |
| **P1** | Replace ink1000 pixel with HTTPS endpoint or confirm domain supports HTTPS |
| **P1** | Verify `partner_uid=102541952` and `mi_u=8091927189` — confirm static or substitute with dynamic subscriber merge tags |
| **P1** | Confirm SPF/DKIM pass on `emails.skechers.com` before deployment; obtain Authentication-Results from a live seed send |
| **P2** | Add descriptive `alt` text to the 4 images flagged missing it (excluding intentional tracking pixels) |
| **P2** | Verify full HTML contains unsubscribe link and physical address per CAN-SPAM §5(a)(5) |
## Recent history

- [[2026-03-31-test-mkg-us-na-u-trend-gender-en-04012026-v2you-deserve-comfort-this-spring]] — 6/10 (2026-03-31)
- [[2026-03-31-test-mkg-us-na-u-trend-gender-en-04012026get-ahead-of-this-season-s-trends]] — 5.5/10 (2026-03-31)
- [[2026-03-31-test-mkg-us-retpur-u-trend-retail-en-04012026new-season-new-styles]] — 6/10 (2026-03-31)

