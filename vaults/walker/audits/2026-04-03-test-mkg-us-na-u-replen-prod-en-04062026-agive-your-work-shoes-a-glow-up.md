---
slug: 2026-04-03-test-mkg-us-na-u-replen-prod-en-04062026-agive-your-work-shoes-a-glow-up
type: email
date: 2026-04-03
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_REPLEN_PROD_EN_04062026_AGive Your Work Shoes A Glow-Up"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_U_REPLEN_PROD_EN_04062026_AGive Your Work Shoes A Glow-Up
**Score:** 5/10 · **Type:** Email audit · **2026-04-03**
## Executive summary

- A functional but underperforming work footwear replenishment email. The BOGO 50% off offer is visible at top, but the email quickly becomes a sparse product grid that fails to convert category intent into purchase momentum. The "Work Refresh" theme is there — it just doesn't deliver enough product breadth or persuasive content to justify the send.
- Clear offer, relevant category positioning, but shallow product coverage and weak visual execution limit its upside.

## What's working

- **BOGO 50% off banner** is front and center with a clear "SHOP NOW" CTA — the offer is legible immediately
- **Category architecture** (Slip-Resistant, Safety Toe, Wide Fit) is a smart structural choice that maps to real work footwear purchase criteria
- **Hero lifestyle imagery** features actual workers on a job site, grounding the email in the use case

## What's weak

- **Product depth is thin** — each category section shows only one or two shoes with minimal visual variation; a replenishment email should show range
- **"Work Refresh" headline treatment** is stylized but the font rendering makes it read more like decor than a message — low information density
- **Slip-Resistant, Safety Toe, Wide Fit sections feel identical** in structure and visual weight, creating visual monotony with no hierarchy between them
- **No pricing visible** on any product — odd for a BOGO promotion where price anchoring would reinforce the offer
- **Navigation category bar** (Women, Men, Kids, Clothing, New Arrivals, Sale) is generic boilerplate — adds length without adding relevance to a work-shoe email
- **Footer utility cluster** (app download, curbside pickup, find a store) is proportionally large relative to the product content above it

## Recommendations

- 1. **Show more product per category** — at least 3 styles per section to communicate selection depth and make the BOGO feel like a real opportunity
- 2. **Add price anchoring** — show original and promotional price on featured products so the 50% off lands with context
- 3. **Differentiate section headers visually** — Slip-Resistant vs. Safety Toe vs. Wide Fit serve different buyer intents; use sub-copy or a one-line benefit callout to help recipients self-select faster
- 4. **Cut or collapse the generic nav bar** — it dilutes the focused work-category message; if kept, trim to work-relevant links only
- 5. **Tighten the footer** — app/store/pickup modules can be condensed to one row; they're eating vertical real estate that should belong to product
- | Priority | Issue | Fix |
- |----------|-------|-----|
- | P0 | `[Test]:` prefix in production subject | Remove before send; strip internal campaign ID from subject |
- | P0 | Return Path pixel missing protocol | Change to `https://pixel.app.returnpath.net/pixel.gif?…` |
- | P1 | 14+ images served over HTTP | Migrate `image.emails.skechers.com` to HTTPS or update all `src` attributes |
- | P1 | Ink1000 open pixel over HTTP | Change to `https://www.ink1000.com/…` |
- | P1 | SPF/DKIM unverified | Run seed send through authentication checker before deployment |
- | P2 | `maximum-scale=1` in viewport | Remove; allow user zoom |
- | P2 | `-webkit-text-size-adjust: none` | Change to `100%` |
- | P3 | Missing alt text on 3 content images | Add descriptive `alt` or `alt=""` if purely decorative |
- | P3 | Raw subscriber ID in Krux pixel | Confirm `partner_uid=7187828` exposure is per DMP contract |

## Full review
## 1. Executive Summary

A functional but underperforming work footwear replenishment email. The BOGO 50% off offer is visible at top, but the email quickly becomes a sparse product grid that fails to convert category intent into purchase momentum. The "Work Refresh" theme is there — it just doesn't deliver enough product breadth or persuasive content to justify the send.

---

## 2. Business Impact Score: 5/10

Clear offer, relevant category positioning, but shallow product coverage and weak visual execution limit its upside.

---

## 3. What's Working

- **BOGO 50% off banner** is front and center with a clear "SHOP NOW" CTA — the offer is legible immediately
- **Category architecture** (Slip-Resistant, Safety Toe, Wide Fit) is a smart structural choice that maps to real work footwear purchase criteria
- **Hero lifestyle imagery** features actual workers on a job site, grounding the email in the use case

---

## 4. What's Weak

- **Product depth is thin** — each category section shows only one or two shoes with minimal visual variation; a replenishment email should show range
- **"Work Refresh" headline treatment** is stylized but the font rendering makes it read more like decor than a message — low information density
- **Slip-Resistant, Safety Toe, Wide Fit sections feel identical** in structure and visual weight, creating visual monotony with no hierarchy between them
- **No pricing visible** on any product — odd for a BOGO promotion where price anchoring would reinforce the offer
- **Navigation category bar** (Women, Men, Kids, Clothing, New Arrivals, Sale) is generic boilerplate — adds length without adding relevance to a work-shoe email
- **Footer utility cluster** (app download, curbside pickup, find a store) is proportionally large relative to the product content above it

---

## 5. Recommendations

1. **Show more product per category** — at least 3 styles per section to communicate selection depth and make the BOGO feel like a real opportunity
2. **Add price anchoring** — show original and promotional price on featured products so the 50% off lands with context
3. **Differentiate section headers visually** — Slip-Resistant vs. Safety Toe vs. Wide Fit serve different buyer intents; use sub-copy or a one-line benefit callout to help recipients self-select faster
4. **Cut or collapse the generic nav bar** — it dilutes the focused work-category message; if kept, trim to work-relevant links only
5. **Tighten the footer** — app/store/pickup modules can be condensed to one row; they're eating vertical real estate that should belong to product

---

## 6. Bottom Line

The email does the minimum: it announces an offer and organizes by category. It doesn't do the maximum: it doesn't sell the range, anchor the value, or give a work-boot buyer a compelling reason to click now vs. later. A replenishment email for a motivated audience deserves more product and sharper copy.

---

## 7. Evidence

**Overall purpose:** Drive BOGO 50% off purchases in Skechers work footwear — replenishment send targeting existing customers likely due for replacement shoes.

**Hero / primary value proposition:** Top banner with BOGO 50% off and "SHOP NOW" CTA is the clearest element in the email. The lifestyle photography below reinforces work context but doesn't add offer detail.

**Membership / benefits section:** None visible. No loyalty, points, or member-exclusive framing present.

**Product discoverability / recommendation modules:** Three category modules — Slip-Resistant, Safety Toe, Wide Fit — each with one featured shoe and a category CTA button. Functional but sparse; no cross-sell or "you might also like" logic visible.

**Utility / secondary modules:** Standard navigation bar with Women / Men / Kids / Clothing / New Arrivals / Sale. Footer includes app download badges, curbside pickup, and find-a-store. These modules are disproportionately prominent.

**Bugs / friction / clarity issues:** No visible broken images or rendering errors. The "Work Refresh" stylized text is legible but the decorative font treatment sacrifices clarity for style. No prices shown on product cards — unclear if intentional.

---

## Technical Audit

## Technical Audit — Skechers Work Shoes BOGO (MKG_US_NA_U_REPLEN_PROD_EN_04062026_A)

---

### 1. Technical Summary

This email has a systemic HTTP image-serving problem affecting 14+ assets across `image.emails.skechers.com`, a missing-protocol tracking pixel that will silently break, and a `[Test]:` subject prefix indicating a production send of a test configuration. SPF/DKIM authentication status is unverified at time of review.

---

### 2. Link & Tracking Issues

**Return Path pixel — broken URL (missing protocol)**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1...">
```
No `https://` prefix. Browsers will treat this as a relative path, making the pixel non-functional. Inbox placement data from Validity/Return Path will be lost.

**Ink1000 tracking pixel — HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=9012945763&mi_ecmp=MKG_US_NA_U_REPLEN_PROD_EN_04062026_A
```
Served over HTTP. Blocked by HTTPS-enforcing clients (Gmail, Apple Mail on iOS 15+).

**26 click-redirect links** — all routed through `click.emails.skechers.com`. Standard for SFMC; cannot probe destinations from this source.

**Krux/Salesforce DMP pixels** — two user-match beacons fire in the hidden preheader table. These pass a SHA-256 hashed email (`af077ed3…`) and a raw subscriber ID (`7187828`). Confirm the raw subid exposure is intentional per your DMP contract.

---

### 3. Rendering & Accessibility

**HTTP image sources — 14 confirmed assets blocked in strict clients**

All product/footer/social images served from `http://image.emails.skechers.com/lib/fe3115707564047a731c78/`. Examples:
- Skechers logo: `http://image.emails.skechers.com/lib/…/dde00662-169f-447d-b0e2-fc65f6c2290c.png`
- App store badges, social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), AfterPay logo — all HTTP

Gmail on iOS and Android strips or blocks mixed-content images. These images will show as broken in a significant share of the audience.

**Alt text missing on 4 images**
- `o.gif` (Ink1000 open pixel) — acceptable for tracking pixels but flagged
- `49468f73…png`, `00100b23…png`, `fc08601a…png` — unknown purpose; if decorative, add `alt=""`; if informational, add descriptive alt text

**`maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Prevents pinch-to-zoom on iOS. Fails WCAG 1.4.4 (Resize Text). Remove `maximum-scale=1`.

**`-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; }
```
Overrides OS-level font scaling for visually impaired users. Should be `100%`, not `none`.

**Mobile/desktop toggle via `display:none`** — Outlook ignores CSS display rules. Validate that conditional content renders correctly in Outlook 2016/2019.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the truncated source. Campaign ID `MKG_US_NA_U_REPLEN_PROD_EN_04062026_A` is consistent across all three tracking beacons (Krux impression pixel, Ink1000 pixel, SFMC open pixel). Subscriber IDs in the Ink1000 and Krux pixels appear resolved.

---

### 5. Compliance

**Subject line contains `[Test]:` prefix**
```
Subject: [Test]: MKG_US_NA_U_REPLEN_PROD_EN_04062026_A Give Your Work Shoes A Glow-Up
```
If this is a live send, this is a production defect. The internal campaign key is also exposed in the subject. CAN-SPAM does not prohibit this, but it signals a pre-production configuration was promoted.

**SPF/DKIM — unverified**
Authentication-Results header not found via AgentMail relay. SPF/DKIM status is unknown. If the email was forwarded or relayed for audit, this may be a capture artifact — confirm authentication passes on a direct seed send before deployment.

**CAN-SPAM physical address and unsubscribe** — not visible in the truncated HTML. Assumed present in footer (standard for Skechers). Verify during full-source review.

---

### 6. Email-to-Site Continuity

All CTAs route through `click.emails.skechers.com` redirects with encrypted query strings (SFMC DEK format). UTM parameters on landing pages cannot be confirmed from the source alone — probe a decoded redirect to verify `utm_source`, `utm_medium`, `utm_campaign` values align with `MKG_US_NA_U_REPLEN_PROD_EN_04062026_A`.

---

### 7. Recommendations

| Priority | Issue | Fix |
|----------|-------|-----|
| P0 | `[Test]:` prefix in production subject | Remove before send; strip internal campaign ID from subject |
| P0 | Return Path pixel missing protocol | Change to `https://pixel.app.returnpath.net/pixel.gif?…` |
| P1 | 14+ images served over HTTP | Migrate `image.emails.skechers.com` to HTTPS or update all `src` attributes |
| P1 | Ink1000 open pixel over HTTP | Change to `https://www.ink1000.com/…` |
| P1 | SPF/DKIM unverified | Run seed send through authentication checker before deployment |
| P2 | `maximum-scale=1` in viewport | Remove; allow user zoom |
| P2 | `-webkit-text-size-adjust: none` | Change to `100%` |
| P3 | Missing alt text on 3 content images | Add descriptive `alt` or `alt=""` if purely decorative |
| P3 | Raw subscriber ID in Krux pixel | Confirm `partner_uid=7187828` exposure is per DMP contract |
## Recent history

- [[2026-04-11-test-pro-us-na-u-sitebundle-full-en-04052026spring-fling-sale-double-the-style-s]] — 3/10 (2026-04-03)
- [[2026-04-11-test-pro-us-retpurl24-u-sitebundle-retail-en-04052026two-ways-to-save-during-the]] — 4/10 (2026-04-03)
- [[2026-04-03-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04052026spring-fling-sale-double-the-]] — 5/10 (2026-04-03)

