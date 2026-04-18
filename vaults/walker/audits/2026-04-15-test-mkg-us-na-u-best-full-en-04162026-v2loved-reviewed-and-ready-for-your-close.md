---
slug: 2026-04-15-test-mkg-us-na-u-best-full-en-04162026-v2loved-reviewed-and-ready-for-your-close
type: email
date: 2026-04-15
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_BEST_FULL_EN_04162026_V2Loved, Reviewed, and Ready for Your Closet"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_U_BEST_FULL_EN_04162026_V2Loved, Reviewed, and Ready for Your Closet
**Score:** 5/10 · **Type:** Email audit · **2026-04-15**
## Executive summary

- Good skeleton, broken execution. The production send needs fixes before this format can be evaluated fairly.

## What's working

- **Social proof anchoring works.** Leading with "Most Talked About" and pairing each product with a real star rating + customer quote is a credible format. The quotes are short and specific ("Relief right out of the box," "Very light comfortable and so easy to just slip your feet on").
- **BOGO banner is prominent.** The top-of-email offer bar is high contrast and legible — BOGO 50% off is an easy value proposition to parse in a glance.
- **Product progression is logical.** Cozy Fit → Arch Fit → Glide-Step gives the email a clear narrative spine, each with its own section break and CTA.
- **Secondary nav adds utility.** The "Shop Additional Styles" row (Women, Men, Kids, Clothing, New Arrivals, Sale) and the footer utility block (app download, curbside, store finder, Afterpay/Klarna) give the email functional depth without cluttering the main story.

## What's weak

- **Subject line is a raw internal tag.** `[Test]: MKG_US_NA_U_BEST_FULL_EN_04162026_V2Loved, Reviewed, and Ready for Your Closet` — the internal batch code was never stripped. This would be a severe deliverability and brand trust failure if it reached a live audience.
- **Preview text is raw JSON-LD.** The inbox preview shows `[{ "@context": "http://schema.org/"...` — a schema.org Organization block leaked into the preheader. Recipients see code instead of a compelling teaser.
- **Hero image is cluttered.** The top section combines a BOGO banner, a "Most Talked About" headline, a small subhead, and a white sneaker all in a compressed vertical space. There's no visual breathing room and the product itself gets crowded.
- **"Cozy Fit" section has a watermark/overlay.** The Cozy Fit shoe image has a visible "COZY FIT" logo stamp on it that creates visual noise and partially occludes the shoe silhouette.
- **Star ratings are small.** The yellow star clusters render very small relative to the surrounding layout — on mobile (likely 60%+ of opens) they may be nearly invisible.
- **Section CTAs are repetitive.** "Shop Cozy Fit" / "Shop Arch Fit" / "Shop Glide-Step" / "Shop All Best-Selling Styles" — four CTAs in rapid sequence with similar styling reduces the salience of each.

## Recommendations

- 1. **Strip the `[Test]:` prefix and batch code from the subject line before any live send.** This is a P0 fix — no amount of good creative recovers from a visible QA token in the subject.
- 2. **Fix the preheader.** Replace the leaked JSON-LD with a human-readable teaser that extends the subject line — e.g., "The styles your fellow Skechers fans can't stop raving about."
- 3. **Increase star rating size by ~30%.** Ratings are the core trust mechanism here; they need to be legible at a glance on mobile.
- 4. **Differentiate the three product CTAs visually or consolidate.** Consider making the primary CTA for each product more prominent (filled button) and removing or de-emphasizing the global "Shop All Best-Selling Styles" CTA until after the product modules.
- 5. **Give the hero more space.** Let the "Most Talked About" headline and hero shoe breathe — tighten the BOGO bar or move it to a sticky ribbon so it doesn't compress the hero.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Campaign ID concatenated into subject line | Fix template delimiter between campaign code token and subject copy before production send |
- | **P0** | `[Test]:` subject prefix | Remove for production deployment |
- | **P1** | 10 content images on HTTP | Change all `http://image.emails.skechers.com/` srcs to `https://` |
- | **P1** | Return Path pixel missing scheme | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif?...` |
- | **P1** | SPF/DKIM unconfirmed | Capture `Authentication-Results` from a direct inbox delivery and verify both pass |
- | **P2** | ink1000 tracking pixel on HTTP | Change to `https://www.ink1000.com/...` |
- | **P2** | Missing alt text on `49468f73-....png` | Add descriptive `alt` attribute |
- | **P2** | 26 click links not probed | Run a follow-redirect probe on a sample of destination URLs to confirm UTM params and no broken links |
- | **P3** | Redundant 375px media query block | Remove duplicate — covered by 640px breakpoint |
- | **P3** | Footer compliance elements | Confirm physical address and unsubscribe link are present in full source |

## Full review
## 2. Business Impact Score: 5/10

Good skeleton, broken execution. The production send needs fixes before this format can be evaluated fairly.

---

## 3. What's Working

- **Social proof anchoring works.** Leading with "Most Talked About" and pairing each product with a real star rating + customer quote is a credible format. The quotes are short and specific ("Relief right out of the box," "Very light comfortable and so easy to just slip your feet on").
- **BOGO banner is prominent.** The top-of-email offer bar is high contrast and legible — BOGO 50% off is an easy value proposition to parse in a glance.
- **Product progression is logical.** Cozy Fit → Arch Fit → Glide-Step gives the email a clear narrative spine, each with its own section break and CTA.
- **Secondary nav adds utility.** The "Shop Additional Styles" row (Women, Men, Kids, Clothing, New Arrivals, Sale) and the footer utility block (app download, curbside, store finder, Afterpay/Klarna) give the email functional depth without cluttering the main story.

---

## 4. What's Weak

- **Subject line is a raw internal tag.** `[Test]: MKG_US_NA_U_BEST_FULL_EN_04162026_V2Loved, Reviewed, and Ready for Your Closet` — the internal batch code was never stripped. This would be a severe deliverability and brand trust failure if it reached a live audience.
- **Preview text is raw JSON-LD.** The inbox preview shows `[{ "@context": "http://schema.org/"...` — a schema.org Organization block leaked into the preheader. Recipients see code instead of a compelling teaser.
- **Hero image is cluttered.** The top section combines a BOGO banner, a "Most Talked About" headline, a small subhead, and a white sneaker all in a compressed vertical space. There's no visual breathing room and the product itself gets crowded.
- **"Cozy Fit" section has a watermark/overlay.** The Cozy Fit shoe image has a visible "COZY FIT" logo stamp on it that creates visual noise and partially occludes the shoe silhouette.
- **Star ratings are small.** The yellow star clusters render very small relative to the surrounding layout — on mobile (likely 60%+ of opens) they may be nearly invisible.
- **Section CTAs are repetitive.** "Shop Cozy Fit" / "Shop Arch Fit" / "Shop Glide-Step" / "Shop All Best-Selling Styles" — four CTAs in rapid sequence with similar styling reduces the salience of each.

---

## 5. Recommendations

1. **Strip the `[Test]:` prefix and batch code from the subject line before any live send.** This is a P0 fix — no amount of good creative recovers from a visible QA token in the subject.
2. **Fix the preheader.** Replace the leaked JSON-LD with a human-readable teaser that extends the subject line — e.g., "The styles your fellow Skechers fans can't stop raving about."
3. **Increase star rating size by ~30%.** Ratings are the core trust mechanism here; they need to be legible at a glance on mobile.
4. **Differentiate the three product CTAs visually or consolidate.** Consider making the primary CTA for each product more prominent (filled button) and removing or de-emphasizing the global "Shop All Best-Selling Styles" CTA until after the product modules.
5. **Give the hero more space.** Let the "Most Talked About" headline and hero shoe breathe — tighten the BOGO bar or move it to a sticky ribbon so it doesn't compress the hero.

---

## 6. Bottom Line

The social-proof-meets-best-seller format is a smart play and the bones here are good. But this email cannot send as-is — the subject line contains a raw internal QA code and the preview text leaks JSON schema. Fix those two critical failures, scale up the star ratings, and this template becomes a reliable workhorse for the mid-funnel review-driven buyer.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: MKG_US_NA_U_BEST_FULL_EN_04162026_V2Loved, Reviewed, and Ready for Your Closet`
- **Length:** 80 characters (including batch prefix)
- **Scores (1-10):** Clarity `3`, Curiosity `4`, Personalization `2`, Urgency `3`, Specificity `4`
- **Strengths:**
  - "Loved, Reviewed, and Ready for Your Closet" (the actual consumer-facing portion) is a clean three-part rhythm that signals social proof
  - "Ready for Your Closet" creates light ownership framing
- **Weaknesses:**
  - Internal batch code `[Test]: MKG_US_NA_U_BEST_FULL_EN_04162026_V2` renders verbatim — completely destroys trust and open rate
  - No urgency, no offer mention, no product specificity in the readable portion
- **Alt A:** `Your fellow Skechers fans voted — these are the best`
- **Alt B:** `BOGO 50% off the styles everyone's talking about`

---

## 8. Evidence

**Overall purpose:** Drive conversion on Skechers best-selling styles using customer reviews and a BOGO offer as dual motivators.

**Hero / primary value proposition:** BOGO 50% off (or 20% off a single pair) banner at the very top, followed by a "Most Talked About" editorial frame. The dual offer in the banner (BOGO vs. single-pair discount) is slightly confusing — two options with different mechanics share one line of small copy.

**Membership / benefits section:** None visible. No loyalty program mention, no member-exclusive pricing.

**Product discoverability / recommendation modules:** Three discrete product families — Cozy Fit, Arch Fit, Glide-Step — each with a lifestyle/product image, a customer star rating (4-5 stars), a short verbatim customer quote, and a "Shop [Product]" CTA. This is the core of the email and it works conceptually.

**Utility / secondary modules:** "Shop Additional Styles" category nav row (Women, Men, Kids, Clothing, New Arrivals, Sale); footer with app download badges, curbside pickup CTA, store finder, and BNPL logos (Afterpay, Klarna). Social follow row (presumably Instagram/Facebook/etc.) at the footer.

**Bugs / friction / clarity issues (visible in render):**
- Subject line: raw QA batch token visible in subject
- Preview text: JSON-LD schema markup leaking into inbox preheader
- "Cozy Fit" product image has a semi-transparent logo watermark overlaid on the shoe
- Star rating widgets render at very small size relative to surrounding layout

---

## Technical Audit

## Technical Audit — Skechers MKG_US_NA_U_BEST_FULL_EN_04162026_V2

---

### 1. Technical Summary

The email has a systemic HTTP-vs-HTTPS downgrade issue affecting 11+ image assets, a broken tracking pixel with no URL scheme, and a subject line that concatenates the internal campaign ID directly into the consumer-visible string. Authentication headers were not recoverable from the relay, leaving SPF/DKIM status unconfirmed.

---

### 2. Link & Tracking Issues

**Subject line campaign ID bleed (high severity)**
The subject field reads `[Test]: MKG_US_NA_U_BEST_FULL_EN_04162026_V2Loved, Reviewed, and Ready for Your Closet`. The campaign code `MKG_US_NA_U_BEST_FULL_EN_04162026_V2` is not delimited from the intended subject copy — no space or separator between the token and "Loved". If the `[Test]:` prefix is stripped for production send, the subject becomes `MKG_US_NA_U_BEST_FULL_EN_04162026_V2Loved, Reviewed...`. This is a merge/template assembly error.

**Return Path pixel — missing URL scheme**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" width="1" height="1" />
```
No `https://` prefix. Mail clients will treat this as a relative path, not an absolute URL — the pixel will never fire. Should be `https://pixel.app.returnpath.net/pixel.gif?...`.

**26 tracking links not probed**
All click-redirect links route through `click.emails.skechers.com`. Destination URL integrity and UTM parameter presence cannot be confirmed without probing. See section 6.

---

### 3. Rendering & Accessibility

**11 images served over HTTP (medium severity)**
Modern mail clients (Gmail, Outlook.com, Apple Mail) proxy or block mixed-content HTTP image sources. Affected assets:

| Asset | HTTP src |
|---|---|
| o.gif (ink1000 tracking pixel) | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` |
| Skechers logo | `http://image.emails.skechers.com/.../dde00662-....png` |
| Unnamed image | `http://image.emails.skechers.com/.../49468f73-....png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f-....png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0-....png` |
| Curbside Pickup | `http://image.emails.skechers.com/.../00100b23-....png` |
| AfterPay | `http://image.emails.skechers.com/.../07cb60b5-....png` |
| Find A Store | `http://image.emails.skechers.com/.../fc08601a-....png` |
| Instagram | `http://image.emails.skechers.com/.../b782e0aa-....png` |
| Facebook | `http://image.emails.skechers.com/.../a5c4cae0-....png` |
| YouTube | `http://image.emails.skechers.com/.../8c5738fc-....png` |

All `image.emails.skechers.com` assets should be served over HTTPS — the subdomain almost certainly supports it; this is a template-level error.

**Missing alt text — 2 images**
- `o.gif` (ink1000 pixel) — tracking pixels conventionally use `alt=""`, which is acceptable, but the attribute is absent entirely
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no `alt` attribute; screen readers will announce the filename

**Duplicate responsive breakpoints**
`@media only screen and (max-width: 375px)` and `@media only screen and (max-width: 640px)` declare identical rule sets. The 375px block is fully redundant — the 640px block already covers it. Minor CSS bloat with no functional impact.

---

### 4. Personalization & Merge Tokens

Subscriber-level IDs resolved correctly in the tracking pixels:
- ink1000: `mi_u=8004129222`
- Krux subid beacon: `partner_uid=32884357`

No unresolved `{{merge_tag}}` or `%%variable%%` tokens visible in the truncated source. The campaign ID bleed into the subject line (section 2) is a template assembly issue, not an unresolved token.

---

### 5. Compliance

**SPF/DKIM status unknown**
`Authentication-Results` header was not present in the relay capture. SPF and DKIM pass/fail cannot be confirmed. This must be verified against a direct inbox delivery or DNS record inspection before production send.

**CAN-SPAM / unsubscribe**
The truncated HTML does not include the footer — physical mailing address and one-click unsubscribe link presence cannot be confirmed from available source. These are required. QA pipeline should flag their absence as a hard blocker.

**[Test] prefix in subject**
`[Test]:` must be removed before production deployment. Its presence in the current build is expected for a test send but is a deploy-blocker.

---

### 6. Email-to-Site Continuity

The campaign identifier `MKG_US_NA_U_BEST_FULL_EN_04162026` is consistent across the ink1000 pixel (`mi_ecmp=`) and Krux ad impression pixel (`campaignid=`), indicating UTM/campaign attribution parameters were set at build time. However, because all 26 click links were skipped during probing (redirect domains), it is not confirmed that:

- UTM params are appended to destination URLs
- Landing pages resolve (no 404s or redirect loops)
- The destination domain matches `skechers.com` (no link hijacking introduced by click-wrapper misconfiguration)

These must be spot-checked manually or via a probing pass that follows click.emails.skechers.com redirects.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Campaign ID concatenated into subject line | Fix template delimiter between campaign code token and subject copy before production send |
| **P0** | `[Test]:` subject prefix | Remove for production deployment |
| **P1** | 10 content images on HTTP | Change all `http://image.emails.skechers.com/` srcs to `https://` |
| **P1** | Return Path pixel missing scheme | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif?...` |
| **P1** | SPF/DKIM unconfirmed | Capture `Authentication-Results` from a direct inbox delivery and verify both pass |
| **P2** | ink1000 tracking pixel on HTTP | Change to `https://www.ink1000.com/...` |
| **P2** | Missing alt text on `49468f73-....png` | Add descriptive `alt` attribute |
| **P2** | 26 click links not probed | Run a follow-redirect probe on a sample of destination URLs to confirm UTM params and no broken links |
| **P3** | Redundant 375px media query block | Remove duplicate — covered by 640px breakpoint |
| **P3** | Footer compliance elements | Confirm physical address and unsubscribe link are present in full source |
## Recent history

- [[2026-04-15-test-mkg-us-na-u-best-full-en-04162026loved-reviewed-and-ready-for-your-closet]] — 4/10 (2026-04-15)
- [[2026-04-15-test-mkg-us-na-u-multi-full-en-04162026loved-reviewed-and-ready-for-your-closet]] — 5/10 (2026-04-15)
- [[2026-04-15-test-mkg-us-na-u-multi-gender-en-04162026loved-reviewed-and-ready-for-your-close]] — 5/10 (2026-04-15)

