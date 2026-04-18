---
slug: 2026-03-31-test-mkg-us-nonpur-u-trend-nonpurch-en-04012026try-the-comfort-everyone-s-talkin
type: email
date: 2026-03-31
persona: walker
score: "5.5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026Try the Comfort Everyone's Talking About"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026Try the Comfort Everyone's Talking About
**Score:** 5.5/10 · **Type:** Email audit · **2026-03-31**
## Executive summary

- A tightly structured non-purchaser acquisition email built around trend framing ("Trend Report"). The layout is logical and flows well from hero to category to color to best sellers. However, the hero is visually cluttered, the product imagery is small-scale, and the CTA strategy is repetitive rather than differentiated. The email does its job but doesn't earn attention — it reads like a catalog page, not a compelling pitch to someone who hasn't bought yet.
- Functional but under-optimized for a non-purchaser segment. Missed opportunity to convert fence-sitters with stronger social proof or a more distinct value hook.

## What's working

- **Logical content hierarchy**: Hero → Hands Free Slip-in → Street Style → Color → Best Sellers flows naturally and gives the recipient multiple entry points.
- **"Best Sellers" anchor at the bottom**: Smart placement for non-purchasers — best-seller social proof is a meaningful trust signal for first-time buyers.
- **Color module**: The pastel/colorway callout is visually the strongest mid-section — it breaks the gray monotony and catches the eye.
- **Category breadth**: Covers multiple paths (casual, slip-in, street, color) which serves a broad non-purchaser segment.

## What's weak

- **Hero is cluttered**: The headline "Trend Report" competes with the promotional "50% Off" badge and the two-line subtext. The value hierarchy isn't clear at a glance — is this a trend editorial or a sale email?
- **Product images are small**: Throughout the category sections, shoe thumbnails are undersized. Non-purchasers need to fall in love with a product visually; small images reduce that chance.
- **Repetitive "Shop Now" CTAs**: Every section uses the same generic CTA. No differentiation, no urgency, no category-specific pull (e.g., "Shop Slip-ins" or "See What's Trending").
- **"Hands Free Slip-in" and "Street Style" sections are sparse**: Each shows 2–3 products in a band format — not enough visual density to suggest a rich assortment.
- **Email subject line mismatch**: The subject line ("Try the Comfort Everyone's Talking About") implies comfort/lifestyle framing, but the hero leads with "Trend Report" and 50% off — the tone shift isn't cohesive.

## Recommendations

- 1. **Pick one hero message**: Either this is a sale email or a trend editorial. Remove one signal from the hero to let the other breathe.
- 2. **Make CTAs specific**: Swap generic "Shop Now" for category-anchored labels. This increases click relevance and tells the recipient exactly where they're going.
- 3. **Increase product image size**: Especially in the Hands Free and Street Style sections — give each shoe room to sell itself.
- 4. **Add a comfort/social proof proof point near the top**: The subject line promises "comfort everyone's talking about" but nothing in the email delivers that — no rating, no quote, no badge. Add a one-liner that delivers on that promise.
- 5. **Strengthen the Best Sellers module**: Consider adding star ratings or a "most popular" badge to 1–2 shoes to drive conversion signal for non-purchasers.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | HTTP image assets (14 images) | Migrate all `image.emails.skechers.com` assets to `https://` |
- | **P0** | `[Test]:` subject prefix | Remove before production deployment |
- | **P1** | Return Path pixel missing protocol | Add `https://` to `pixel.app.returnpath.net/pixel.gif?...` src |
- | **P1** | ink1000 pixel over HTTP | Upgrade to `https://` or replace with SFMC native open-tracking pixel |
- | **P1** | Hardcoded subscriber IDs | Confirm `mi_u=8091927189` and `partner_uid=102541952` are dynamic merge tokens |
- | **P2** | Missing alt text (5 images) | Add descriptive or empty `alt=""` on decorative images; descriptive text on content images |
- | **P2** | SPF/DKIM unverified | Confirm authentication alignment on production infrastructure before send |
- | **P3** | `maximum-scale=1` + `-webkit-text-size-adjust: none` | Remove both or scope narrowly; breaks WCAG 1.4.4 |
- | **P3** | Spot-check CTA destinations | Decrypt 3–5 links and verify UTM params and landing page alignment |

## Full review
## 1. Executive Summary

A tightly structured non-purchaser acquisition email built around trend framing ("Trend Report"). The layout is logical and flows well from hero to category to color to best sellers. However, the hero is visually cluttered, the product imagery is small-scale, and the CTA strategy is repetitive rather than differentiated. The email does its job but doesn't earn attention — it reads like a catalog page, not a compelling pitch to someone who hasn't bought yet.

---

## 2. Business Impact Score: 5.5/10

Functional but under-optimized for a non-purchaser segment. Missed opportunity to convert fence-sitters with stronger social proof or a more distinct value hook.

---

## 3. What's Working

- **Logical content hierarchy**: Hero → Hands Free Slip-in → Street Style → Color → Best Sellers flows naturally and gives the recipient multiple entry points.
- **"Best Sellers" anchor at the bottom**: Smart placement for non-purchasers — best-seller social proof is a meaningful trust signal for first-time buyers.
- **Color module**: The pastel/colorway callout is visually the strongest mid-section — it breaks the gray monotony and catches the eye.
- **Category breadth**: Covers multiple paths (casual, slip-in, street, color) which serves a broad non-purchaser segment.

---

## 4. What's Weak

- **Hero is cluttered**: The headline "Trend Report" competes with the promotional "50% Off" badge and the two-line subtext. The value hierarchy isn't clear at a glance — is this a trend editorial or a sale email?
- **Product images are small**: Throughout the category sections, shoe thumbnails are undersized. Non-purchasers need to fall in love with a product visually; small images reduce that chance.
- **Repetitive "Shop Now" CTAs**: Every section uses the same generic CTA. No differentiation, no urgency, no category-specific pull (e.g., "Shop Slip-ins" or "See What's Trending").
- **"Hands Free Slip-in" and "Street Style" sections are sparse**: Each shows 2–3 products in a band format — not enough visual density to suggest a rich assortment.
- **Email subject line mismatch**: The subject line ("Try the Comfort Everyone's Talking About") implies comfort/lifestyle framing, but the hero leads with "Trend Report" and 50% off — the tone shift isn't cohesive.

---

## 5. Recommendations

1. **Pick one hero message**: Either this is a sale email or a trend editorial. Remove one signal from the hero to let the other breathe.
2. **Make CTAs specific**: Swap generic "Shop Now" for category-anchored labels. This increases click relevance and tells the recipient exactly where they're going.
3. **Increase product image size**: Especially in the Hands Free and Street Style sections — give each shoe room to sell itself.
4. **Add a comfort/social proof proof point near the top**: The subject line promises "comfort everyone's talking about" but nothing in the email delivers that — no rating, no quote, no badge. Add a one-liner that delivers on that promise.
5. **Strengthen the Best Sellers module**: Consider adding star ratings or a "most popular" badge to 1–2 shoes to drive conversion signal for non-purchasers.

---

## 6. Bottom Line

Structurally sound but lacks the emotional hook and visual persuasion this segment needs. Non-purchasers require more than a catalog layout — they need a reason to trust, a product to fall in love with, and a clear next step. This email gives them options but not conviction.

---

## 7. Evidence

**Overall purpose**: Re-engagement / conversion email targeting non-purchasers with a trend-framed multi-category showcase, anchored by a 50% off offer.

**Hero / primary value proposition**: "Trend Report" headline with "50% Off" badge and lifestyle shoe imagery. Mixed signals between editorial and promotional framing weaken the opening impact.

**Membership / benefits section**: None visible. No loyalty, rewards, or member-exclusive framing present.

**Product discoverability / recommendation modules**: Four category bands — Hands Free Slip-in, Street Style, Color, Best Sellers. Each has a section header and CTA. Product count per section is low (2–4 items), limiting browse depth.

**Utility / secondary modules**: Footer includes standard navigation links (Women, Men, Kids, Clothing, Work, Apparel, Sale) and social icons. Functional, not prominent.

**Bugs / friction / clarity issues**: No broken images or overlapping text visible. The "50% Off" badge in the hero is partially obscured by the headline layout, making it slightly hard to read at small scale. No other visual defects observed.

---

## Technical Audit

## Technical Audit — Skechers `MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026`

---

### 1. Technical Summary

This email has two systemic blockers for production deployment: all hosted image assets are served over HTTP (not HTTPS), which will cause images to be blocked or proxied by every major email client, and the subject line retains its `[Test]:` QA prefix. Deliverability authentication could not be confirmed via the relay.

---

### 2. Link & Tracking Issues

**Return Path pixel — missing protocol**
The inbox placement pixel in the preheader table has no scheme:
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
Without `https://`, this is a relative URL that resolves to nothing. The pixel will not fire.

**26 click links unprobed**
All CTA links route through `click.emails.skechers.com` (encrypted SFMC redirect). HTTP probing was skipped, so broken destinations cannot be ruled out. Recommend spot-checking 3–5 destination URLs post-decrypt before send.

**Third-party Krxd impression beacon**
```
https://beacon.krxd.net/1x1_ad_impression.gif?confid=so3yexmpm&campaignid=MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026
```
Present and HTTPS — no issue, but confirm privacy policy disclosure covers Krxd data sharing.

---

### 3. Rendering & Accessibility

**HTTP image assets — systemic (14 images)**
Every asset served from `image.emails.skechers.com` uses `http://`:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
... (10 more)
```
Gmail proxies HTTP images but adds a warning; Outlook.com and Apple Mail block them outright. This will cause full image-off rendering for a significant portion of the list.

**HTTP tracking pixel (third-party)**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8091927189&mi_ecmp=...
```
HTTP only — will be blocked. No alt text set.

**Missing alt text — 5 images**
- `o.gif` (ink1000 pixel)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`
- Unnamed image linked in preheader table

Functional/navigation images (App Store, Google Play, social icons) have alt text — those are fine.

**Viewport and font-scaling restrictions**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
* { -webkit-text-size-adjust: none; }
```
`maximum-scale=1` prevents pinch-to-zoom on mobile. `-webkit-text-size-adjust: none` globally suppresses iOS font scaling. Both are WCAG 2.1 SC 1.4.4 (Resize Text) concerns.

---

### 4. Personalization & Merge Tokens

**Potentially hardcoded subscriber IDs**
Two third-party pixels carry what appear to be static values rather than merge fields:
```
http://www.ink1000.com/p/up/...o.gif?mi_u=8091927189&...
https://beacon.krxd.net/...?partner_uid=102541952
```
If `mi_u` and `partner_uid` are not dynamic merge tokens resolving to each recipient's ID, these will attribute all opens/impressions to a single test subscriber. Verify these are templated fields in the ESP source before production.

No unresolved merge token syntax (e.g., `%%field%%` or `{{field}}`) visible in the truncated source.

---

### 5. Compliance

**Subject line contains test prefix**
```
Subject: [Test]: MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026Try the Comfort Everyone's Talking About
```
The `[Test]:` prefix must be stripped before any production send. CAN-SPAM §7704(a)(2) prohibits deceptive subject lines; a mismatched test tag on a live send also risks spam filter penalties.

**Authentication unverifiable**
SPF/DKIM/DMARC pass/fail status could not be confirmed via the AgentMail relay. Sender domain is `emails.skechers.com` — confirm alignment with DMARC policy on `skechers.com` before send.

**Unsubscribe and physical address** — HTML was truncated; confirm footer contains a one-click unsubscribe link and a valid postal address per CAN-SPAM §7704(a)(5).

---

### 6. Email-to-Site Continuity

Campaign ID `MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026` is consistently applied across the open pixel, ink1000 pixel, and Krxd impression beacon — naming is coherent.

All 26 CTAs are wrapped in the SFMC encrypted click handler, so UTM parameters are not inspectable in the raw source. Spot-check at least one CTA destination post-decrypt to confirm `utm_campaign`, `utm_medium`, and `utm_source` are appending correctly to the landing page URL.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | HTTP image assets (14 images) | Migrate all `image.emails.skechers.com` assets to `https://` |
| **P0** | `[Test]:` subject prefix | Remove before production deployment |
| **P1** | Return Path pixel missing protocol | Add `https://` to `pixel.app.returnpath.net/pixel.gif?...` src |
| **P1** | ink1000 pixel over HTTP | Upgrade to `https://` or replace with SFMC native open-tracking pixel |
| **P1** | Hardcoded subscriber IDs | Confirm `mi_u=8091927189` and `partner_uid=102541952` are dynamic merge tokens |
| **P2** | Missing alt text (5 images) | Add descriptive or empty `alt=""` on decorative images; descriptive text on content images |
| **P2** | SPF/DKIM unverified | Confirm authentication alignment on production infrastructure before send |
| **P3** | `maximum-scale=1` + `-webkit-text-size-adjust: none` | Remove both or scope narrowly; breaks WCAG 1.4.4 |
| **P3** | Spot-check CTA destinations | Decrypt 3–5 links and verify UTM params and landing page alignment |
## Recent history

- [[2026-03-31-why-start-with-one-pair-when-you-can-save-with-two]] — 6/10 (2026-03-31)
- [[2026-03-31-your-items-are-waiting]] — 6/10 (2026-03-31)
- [[2026-03-31-trail-tested-track-ready-meet-the-new-agravic]] — 6/10 (2026-03-31)

