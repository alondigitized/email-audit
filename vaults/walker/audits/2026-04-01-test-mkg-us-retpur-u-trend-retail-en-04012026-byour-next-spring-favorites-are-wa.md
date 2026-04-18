---
slug: 2026-04-01-test-mkg-us-retpur-u-trend-retail-en-04012026-byour-next-spring-favorites-are-wa
type: email
date: 2026-03-31
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026_BYour Next Spring Favorites Are Waiting"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026_BYour Next Spring Favorites Are Waiting
**Score:** 5/10 · **Type:** Email audit · **2026-03-31**
## Executive summary

- A spring trend email targeting retail purchasers that leans on editorial category navigation (Hands-Free, Street Style, Color) rather than a single persuasive narrative. The structure is functional but thin — it reads more like a filtered browse page than a compelling campaign. The hero delivers a clear offer (50% off), but the body never reinforces or builds on that offer again, letting momentum bleed out quickly.
- Competent but forgettable. The discount is real, the product imagery is clean, and the categories are directionally sensible for spring — but the lack of offer continuity, weak editorial voice, and a "Best Sellers" section that underdelivers leave conversion potential on the table.

## What's working

- **Hero offer is visible and clear.** "50% Off" is the first thing the eye lands on — no ambiguity about the value proposition.
- **Category segmentation is logical.** Hands-Free Slip-Ins → Street Style → Color is a reasonable spring story arc.
- **Product photography is clean and bright.** Lifestyle shots feel on-brand and seasonal without being over-styled.
- **"Best Sellers" anchor at the bottom.** Smart placement to catch browsers who scrolled past the category modules without converting.

## What's weak

- **The 50% off offer disappears after the hero.** Not a single subsequent module reinforces the discount. Recipients who engage with a category CTA lose the deal context entirely.
- **"Trend Report" editorial framing does no work.** The header declares a "Trend Report" but the body never explains what the trends are or why the reader should care. It's a label without content.
- **Category CTAs are generic ("Shop Now").** None of the three category modules — Hands-Free, Street Style, Color — carry specific offer copy or urgency language. All three CTAs are identical.
- **"Best Sellers" module is visually underpowered.** The section appears as a dense text list or subdued layout, making it the least visually engaging part of an email that should be closing the deal.
- **No personalization signal visible.** For a retargeting/repurchase audience (RETPUR), there's no visible acknowledgment that these are returning customers — no loyalty nod, no "back for more" framing.
- **Subject line contamination.** The test prefix `[Test]: MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026_B` was live in the subject line, which damages professionalism if this reached any real recipients.

## Recommendations

- 1. **Carry the 50% offer through every module CTA** — change generic "Shop Now" to "Shop 50% Off Slip-Ins" / "Shop 50% Off Street Style" to maintain incentive continuity through the scroll.
- 2. **Give "Trend Report" actual editorial content** — one sentence per category explaining *why* it's trending this spring (e.g., "Slip-Ins are the season's most searched silhouette") would justify the editorial wrapper.
- 3. **Differentiate the CTAs** — each category module should have a distinct, specific action. Identical "Shop Now" buttons collapse the perceived variety.
- 4. **Redesign the Best Sellers module as a product grid** — show 3–4 product tiles with prices/names rather than a text-heavy or list layout. This is the email's last conversion opportunity.
- 5. **Add a returning-customer signal for the RETPUR segment** — even a single line ("Welcome back — your spring picks are here") reinforces the segmentation rationale.
- 6. **Resolve the subject line before any broader send** — the test tag must be stripped.
- | Priority | Action |
- |---|---|
- | **BLOCKER** | Strip `[Test]:` prefix and fix subject line concatenation — insert space between `_B` and `Your` in template subject field |
- | **BLOCKER** | Add `https://` protocol to Return Path pixel src: change to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
- | **HIGH** | Migrate all `image.emails.skechers.com` assets to HTTPS; audit image CDN configuration to enforce HTTPS-only URLs at template generation time |
- | **HIGH** | Migrate `http://www.ink1000.com/...o.gif` tracker to HTTPS |
- | **MEDIUM** | Add descriptive alt text to the 3 unidentified content images (`49468f73`, `00100b23`, `fc08601a`) |
- | **MEDIUM** | Change `-webkit-text-size-adjust: none` to `100%` for accessibility compliance |
- | **LOW** | Run live click-test on a sample of CTAs to confirm UTM parameters are passed correctly to landing pages |
- | **LOW** | Capture full email headers from a seed inbox delivery to verify SPF/DKIM pass before production send |

## Full review
## 1. Executive Summary

A spring trend email targeting retail purchasers that leans on editorial category navigation (Hands-Free, Street Style, Color) rather than a single persuasive narrative. The structure is functional but thin — it reads more like a filtered browse page than a compelling campaign. The hero delivers a clear offer (50% off), but the body never reinforces or builds on that offer again, letting momentum bleed out quickly.

---

## 2. Business Impact Score: 5 / 10

Competent but forgettable. The discount is real, the product imagery is clean, and the categories are directionally sensible for spring — but the lack of offer continuity, weak editorial voice, and a "Best Sellers" section that underdelivers leave conversion potential on the table.

---

## 3. What's Working

- **Hero offer is visible and clear.** "50% Off" is the first thing the eye lands on — no ambiguity about the value proposition.
- **Category segmentation is logical.** Hands-Free Slip-Ins → Street Style → Color is a reasonable spring story arc.
- **Product photography is clean and bright.** Lifestyle shots feel on-brand and seasonal without being over-styled.
- **"Best Sellers" anchor at the bottom.** Smart placement to catch browsers who scrolled past the category modules without converting.

---

## 4. What's Weak

- **The 50% off offer disappears after the hero.** Not a single subsequent module reinforces the discount. Recipients who engage with a category CTA lose the deal context entirely.
- **"Trend Report" editorial framing does no work.** The header declares a "Trend Report" but the body never explains what the trends are or why the reader should care. It's a label without content.
- **Category CTAs are generic ("Shop Now").** None of the three category modules — Hands-Free, Street Style, Color — carry specific offer copy or urgency language. All three CTAs are identical.
- **"Best Sellers" module is visually underpowered.** The section appears as a dense text list or subdued layout, making it the least visually engaging part of an email that should be closing the deal.
- **No personalization signal visible.** For a retargeting/repurchase audience (RETPUR), there's no visible acknowledgment that these are returning customers — no loyalty nod, no "back for more" framing.
- **Subject line contamination.** The test prefix `[Test]: MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026_B` was live in the subject line, which damages professionalism if this reached any real recipients.

---

## 5. Recommendations

1. **Carry the 50% offer through every module CTA** — change generic "Shop Now" to "Shop 50% Off Slip-Ins" / "Shop 50% Off Street Style" to maintain incentive continuity through the scroll.
2. **Give "Trend Report" actual editorial content** — one sentence per category explaining *why* it's trending this spring (e.g., "Slip-Ins are the season's most searched silhouette") would justify the editorial wrapper.
3. **Differentiate the CTAs** — each category module should have a distinct, specific action. Identical "Shop Now" buttons collapse the perceived variety.
4. **Redesign the Best Sellers module as a product grid** — show 3–4 product tiles with prices/names rather than a text-heavy or list layout. This is the email's last conversion opportunity.
5. **Add a returning-customer signal for the RETPUR segment** — even a single line ("Welcome back — your spring picks are here") reinforces the segmentation rationale.
6. **Resolve the subject line before any broader send** — the test tag must be stripped.

---

## 6. Bottom Line

The email has the right ingredients — a strong offer, seasonal category logic, clean imagery — but fails to use them cohesively. The offer isn't sustained, the editorial hook is hollow, and the bottom half under-performs. With offer continuity in the CTAs and a redesigned Best Sellers module, this becomes a meaningfully more effective retargeting send.

---

## 7. Evidence

**Overall purpose:** Spring trend push to a repurchase/retail audience, anchored by a 50% off promotion.

**Hero / primary value proposition:** "Trend Report" header with a visible 50% Off callout and a "Shop Now" CTA over a lifestyle shoe image. Offer and brand are immediately legible.

**Membership / benefits section:** None visible. No loyalty, rewards, or member-specific framing present.

**Product discoverability / recommendation modules:** Three category modules — Hands-Free Slip-Ins, Street Style, Color — each with a lifestyle image and "Shop Now" CTA. Categories are distinct but CTAs are undifferentiated and offer-agnostic.

**Utility / secondary modules:** "Best Sellers" module at the bottom with a CTA. Appears visually subdued compared to the category modules above it.

**Bugs / friction / clarity issues:** Subject line includes a full internal test tag (`[Test]: MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026_B`) — visible to any recipient who received this. No broken images or layout breaks observed in the render itself.

---

## Technical Audit

## Technical Audit — Skechers `MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026_B`

---

### 1. Technical Summary

This is a test send with two production-blocking defects: the subject line exposes an internal campaign ID and has a missing-space concatenation error, and one inbox-monitoring pixel is missing its URL protocol. Additionally, all content images are served over HTTP rather than HTTPS, creating a systemic mixed-content risk.

---

### 2. Link & Tracking Issues

**BLOCKER — Return Path/Validity seed pixel has no protocol:**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
`src` is missing `https://`, making it a relative path. The pixel will resolve to something like `https://click.emails.skechers.com/pixel.app.returnpath.net/...` and fail to fire. Inbox placement monitoring will be blind for this send if carried to production.

**INFO — 26 click-redirect links** all route through `https://click.emails.skechers.com/` (HTTPS). QA probe skipped per redirect-domain policy — no broken destination links confirmed or ruled out from this data.

**INFO — Third-party DMP beacons present:**
- `beacon.krxd.net` user-match and ad-impression pixels fire on open (HTTPS, no alt text, `display:none` — structurally correct)
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — third-party open tracker, HTTP (see §3)

---

### 3. Rendering & Accessibility

**HIGH — Systemic HTTP image sources (14 affected images):**

All `image.emails.skechers.com` assets are served over HTTP:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play badge)
... and 10 additional footer/social images
```
Apple Mail Privacy Protection and some corporate proxies will block or proxy-rewrite HTTP image requests. The logo, app store badges, and all social icons are at risk of not rendering on affected clients.

Third-party tracker also affected:
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```

**MEDIUM — Missing alt text on 4 images:**

| Asset | Role |
|---|---|
| `o.gif` (ink1000) | Tracking pixel — alt="" is acceptable but flagged |
| `49468f73-...png` | Unknown — no alt |
| `00100b23-...png` | Unknown — no alt |
| `fc08601a-...png` | Unknown — no alt |

Images without alt text are invisible to screen readers and show broken image icons in image-blocked clients.

**INFO — `-webkit-text-size-adjust: none` applied globally:**
```css
* { -webkit-text-size-adjust: none; }
```
This disables font scaling for accessibility preferences on iOS. Value should be `100%`, not `none`.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the inspectable HTML. Preheader `"Stock Up & Show Out with BOGO 50% Off"` is static text, properly suppressed via `display:none !important`. No issues found in visible source.

---

### 5. Compliance

**BLOCKER — Subject line exposes internal campaign ID and has a concatenation bug:**
```
[Test]: MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026_BYour Next Spring Favorites Are Waiting
```
Two issues:
1. `[Test]:` prefix must be stripped before production deployment
2. Campaign variant suffix `_B` is directly concatenated to the subject copy — no space or delimiter between `04012026_B` and `Your`. This is a template assembly error in the subject-line generation logic.

**WARN — SPF/DKIM authentication status unverified:** QA relay (AgentMail) did not capture `Authentication-Results` headers. SPF/DKIM pass status for `emails.skechers.com` cannot be confirmed from this data. Verify via inbox seed test or header inspection from a direct delivery.

**INFO — CAN-SPAM footer not visible** in the truncated HTML. Physical mailing address and functional unsubscribe link are required; cannot confirm or deny from available source. Flag for manual footer review.

---

### 6. Email-to-Site Continuity

All destination URLs are encrypted within the `click.emails.skechers.com` redirect payload (base64/AES encoded `qs=` parameter), e.g.:
```
https://click.emails.skechers.com/?qs=eyJkZWtJZCI6IjI1NjE1YTVlLWZmMjUtNDc1MC1hZTg0LTFiMDZlNzQxZDcwZSIsImRla1...
```
UTM parameter presence on landing pages cannot be verified without decoding or click-testing each link. No issues confirmed, but also none ruled out — a live click-test is required to confirm UTM pass-through.

Campaign ID `MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026_B` is consistent across the Krux ad impression pixel and the ink1000 tracker parameter `mi_ecmp=`, indicating tracking cohesion at pixel level.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **BLOCKER** | Strip `[Test]:` prefix and fix subject line concatenation — insert space between `_B` and `Your` in template subject field |
| **BLOCKER** | Add `https://` protocol to Return Path pixel src: change to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
| **HIGH** | Migrate all `image.emails.skechers.com` assets to HTTPS; audit image CDN configuration to enforce HTTPS-only URLs at template generation time |
| **HIGH** | Migrate `http://www.ink1000.com/...o.gif` tracker to HTTPS |
| **MEDIUM** | Add descriptive alt text to the 3 unidentified content images (`49468f73`, `00100b23`, `fc08601a`) |
| **MEDIUM** | Change `-webkit-text-size-adjust: none` to `100%` for accessibility compliance |
| **LOW** | Run live click-test on a sample of CTAs to confirm UTM parameters are passed correctly to landing pages |
| **LOW** | Capture full email headers from a seed inbox delivery to verify SPF/DKIM pass before production send |
## Recent history

- [[2026-04-01-test-mkg-us-retpur-u-trend-retail-en-04012026-ayour-next-spring-favorites-are-wa]] — 5.5/10 (2026-03-31)
- [[2026-04-01-test-mkg-us-ecmpur-u-trend-ecom-en-04012026-byou-deserve-comfort-this-spring]] — 5/10 (2026-03-31)
- [[2026-04-01-test-mkg-us-ecmpur-u-trend-ecom-en-04012026-ayou-deserve-comfort-this-spring]] — 6/10 (2026-03-31)

