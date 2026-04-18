---
slug: 2026-04-03-test-mkg-us-na-u-replen-prod-en-04062026-a-v2give-your-work-shoes-a-glow-up
type: email
date: 2026-04-03
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_REPLEN_PROD_EN_04062026_A_V2Give Your Work Shoes a Glow-Up"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_U_REPLEN_PROD_EN_04062026_A_V2Give Your Work Shoes a Glow-Up
**Score:** 5/10 · **Type:** Email audit · **2026-04-03**
## Executive summary

- A lean, functional work footwear replenishment email targeting people due for a shoe refresh. The concept is sound — "Work Refresh" as a replenishment hook — but execution is thin. Product photography is competent, category navigation is present, and the offer (Buy One Get One 50% Off) is visible at the top. The email does its job at a basic level but leaves significant conversion value on the table through low-energy creative, absent social proof, and a category structure that prioritizes breadth over depth.
- Serviceable but forgettable. The offer is real, the product is shown, and there are clear CTAs. But nothing here earns a click that a generic promotional email wouldn't already get from an engaged subscriber.

## What's working

- **Offer visibility**: BOGO 50% off is positioned at the very top in the banner — hard to miss.
- **Clear category segmentation**: Slip-Resistant, Safety Toe, and Wide Fit are called out as distinct sections with dedicated "Shop" CTAs. This mirrors how work shoe buyers actually think.
- **Hero image variety**: The lifestyle montage (multiple workers in different contexts) does a decent job of broadening relevance — kitchen, warehouse, outdoor settings.
- **Footer utility**: App download, Curbside Pickup, Find a Store, and Shop Now Pay Later are all present. Practical and expected for this audience.

## What's weak

- **"Work Refresh" headline underperforms**: The headline is decorative and small. Given that this is a replenishment push, there's a missed opportunity to make the value proposition emotionally resonant — something like urgency around worn-out shoes or safety risk.
- **Product shots are all dark/black shoes**: Every product module shows nearly identical dark colorways against white backgrounds. This creates visual monotony and makes it hard to differentiate the three categories.
- **No pricing visible**: None of the product tiles show price, original vs. sale price, or how the BOGO applies. The offer is announced but never resolved at the product level.
- **Category navigation bar is weak**: Women / Men / Kids / Clothing / New Arrivals / Sale appears as a plain text list mid-email. It reads as secondary nav filler, not a compelling click target.
- **No social proof**: No ratings, no review counts, no "bestseller" or "most popular in your industry" callouts. Work shoe buyers are practical — social proof would convert here.
- **Subject line is exposed as a test**: "[Test]:" prefix is visible in the subject line, indicating this is a QA/test send and not a live deployment.

## Recommendations

- 1. **Surface the BOGO math at the product level** — show an original price crossed out next to the discounted pair price so the offer clicks at the moment of consideration.
- 2. **Differentiate product images by category** — show a brown or grey slip-resistant style, a steel-toe boot in a non-black color, a wide-fit sneaker in a distinct colorway. Visual differentiation makes the three modules feel like actual choices.
- 3. **Add one proof point per category** — even a simple "★ 4.7 (2,300+ reviews)" under a hero product would meaningfully lift clicks.
- 4. **Rewrite the hero copy** — replace "Work Refresh" with something that creates urgency specific to replenishment: "Still wearing last year's pair?" or "Your feet logged 300+ hours. Time to replace."
- 5. **Confirm this is not deployed with the test subject line** — "[Test]:" in the subject line would be a significant quality failure if sent to a live list.
- | Priority | Issue | Fix |
- |---|---|---|
- | **Critical** | Return Path pixel broken (no protocol) | Change `src="pixel.app.returnpath.net/..."` → `src="https://pixel.app.returnpath.net/..."` |
- | **High** | All `image.emails.skechers.com` assets over HTTP | Migrate entire image library to `https://image.emails.skechers.com` |
- | **High** | Subject line: `[Test]` prefix + missing space before copy | Strip `[Test]:` prefix; insert space between campaign code suffix and subject copy |
- | **High** | SPF/DKIM unverified | Confirm `Authentication-Results` is present and DMARC-aligned in relay headers before production |
- | **Medium** | `maximum-scale=1` blocks zoom | Remove `maximum-scale=1` from viewport meta |
- | **Medium** | `-webkit-text-size-adjust: none` | Replace `none` with `100%` |
- | **Medium** | 3 functional images missing alt text | Add descriptive `alt` attributes to `49468f73`, `00100b23`, `fc08601a` PNGs |
- | **Low** | Ink1000 tracking pixel over HTTP | Update to HTTPS or evaluate whether this vendor is still needed |

## Full review
## 1. Executive Summary

A lean, functional work footwear replenishment email targeting people due for a shoe refresh. The concept is sound — "Work Refresh" as a replenishment hook — but execution is thin. Product photography is competent, category navigation is present, and the offer (Buy One Get One 50% Off) is visible at the top. The email does its job at a basic level but leaves significant conversion value on the table through low-energy creative, absent social proof, and a category structure that prioritizes breadth over depth.

---

## 2. Business Impact Score: 5/10

Serviceable but forgettable. The offer is real, the product is shown, and there are clear CTAs. But nothing here earns a click that a generic promotional email wouldn't already get from an engaged subscriber.

---

## 3. What's Working

- **Offer visibility**: BOGO 50% off is positioned at the very top in the banner — hard to miss.
- **Clear category segmentation**: Slip-Resistant, Safety Toe, and Wide Fit are called out as distinct sections with dedicated "Shop" CTAs. This mirrors how work shoe buyers actually think.
- **Hero image variety**: The lifestyle montage (multiple workers in different contexts) does a decent job of broadening relevance — kitchen, warehouse, outdoor settings.
- **Footer utility**: App download, Curbside Pickup, Find a Store, and Shop Now Pay Later are all present. Practical and expected for this audience.

---

## 4. What's Weak

- **"Work Refresh" headline underperforms**: The headline is decorative and small. Given that this is a replenishment push, there's a missed opportunity to make the value proposition emotionally resonant — something like urgency around worn-out shoes or safety risk.
- **Product shots are all dark/black shoes**: Every product module shows nearly identical dark colorways against white backgrounds. This creates visual monotony and makes it hard to differentiate the three categories.
- **No pricing visible**: None of the product tiles show price, original vs. sale price, or how the BOGO applies. The offer is announced but never resolved at the product level.
- **Category navigation bar is weak**: Women / Men / Kids / Clothing / New Arrivals / Sale appears as a plain text list mid-email. It reads as secondary nav filler, not a compelling click target.
- **No social proof**: No ratings, no review counts, no "bestseller" or "most popular in your industry" callouts. Work shoe buyers are practical — social proof would convert here.
- **Subject line is exposed as a test**: "[Test]:" prefix is visible in the subject line, indicating this is a QA/test send and not a live deployment.

---

## 5. Recommendations

1. **Surface the BOGO math at the product level** — show an original price crossed out next to the discounted pair price so the offer clicks at the moment of consideration.
2. **Differentiate product images by category** — show a brown or grey slip-resistant style, a steel-toe boot in a non-black color, a wide-fit sneaker in a distinct colorway. Visual differentiation makes the three modules feel like actual choices.
3. **Add one proof point per category** — even a simple "★ 4.7 (2,300+ reviews)" under a hero product would meaningfully lift clicks.
4. **Rewrite the hero copy** — replace "Work Refresh" with something that creates urgency specific to replenishment: "Still wearing last year's pair?" or "Your feet logged 300+ hours. Time to replace."
5. **Confirm this is not deployed with the test subject line** — "[Test]:" in the subject line would be a significant quality failure if sent to a live list.

---

## 6. Bottom Line

Technically complete, strategically average. The segmented category approach (Slip-Resistant / Safety Toe / Wide Fit) is the strongest structural choice in the email. Everything else — creative, copy, pricing transparency, social proof — is at minimum viable, not maximum impact. For a replenishment audience that's already brand-aware, this email doesn't give them a compelling reason to act today.

---

## 7. Evidence

**Overall purpose**: Work footwear replenishment push, anchored to a BOGO 50% off promotional offer. Targeted at buyers likely due for a shoe replacement.

**Hero / primary value proposition**: BOGO 50% off banner at top. Below that, a lifestyle montage of workers in various industries followed by the "Work Refresh" headline. The offer and concept are set up but not emotionally reinforced in the body.

**Membership / benefits section**: None visible. No loyalty, adiClub-equivalent, or member-exclusive messaging present.

**Product discoverability / recommendation modules**: Three clearly delineated modules — Slip-Resistant, Safety Toe, Wide Fit — each with a single product image and a dedicated "Shop [Category]" CTA button. Product variety is low; all shown styles are black/dark.

**Utility / secondary modules**: Category nav bar (Women, Men, Kids, Clothing, New Arrivals, Sale). Footer with App download, Curbside Pickup, Find a Store, Shop Now Pay Later. Standard but functional.

**Bugs / friction / clarity issues**: The subject line includes a "[Test]:" prefix, which is visible and would be a live send error if deployed. No other visible rendering bugs — images load, text is legible, CTAs are present and distinguishable.

---

## Technical Audit

## Technical Audit — Skechers Work Shoes Replenishment Email
**Campaign:** `MKG_US_NA_U_REPLEN_PROD_EN_04062026_A` | **Platform:** Salesforce Marketing Cloud

---

### 1. Technical Summary

SFMC-hosted replenishment email with 26 tracked click links and multiple beacon pixels. Primary risks are a broken inbox-monitoring pixel (missing protocol), pervasive HTTP image sourcing across all hosted assets, and two accessibility violations in the viewport/CSS declarations.

---

### 2. Link & Tracking Issues

**Broken — Return Path pixel missing protocol:**
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"
```
No `https://` prefix. Browsers/mail clients treat this as a relative URL — pixel fires against the wrong origin and silently drops all inbox monitoring data.

**HTTP tracking pixel — Ink1000:**
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=9012945763&mi_ecmp=MKG_US_NA_U_REPLEN_PROD_EN_04062026_A"
```
Served over HTTP. Mixed content; blocked in most modern clients.

**26 click-redirect links** via `click.emails.skechers.com` — standard SFMC pattern, not probed. Destination UTM params not inspectable from encrypted query strings.

**Passing:** SFMC open pixel (`click.emails.skechers.com/open.aspx`) and Krux beacons both use HTTPS correctly.

---

### 3. Rendering & Accessibility

**HTTP image sources (15+ assets):** Every image hosted on `image.emails.skechers.com` is served over HTTP:
```
src="http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png"  ← Skechers logo
src="http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/..."  ← all footer/social/payment icons
```
Mixed content triggers blocking warnings or silent image suppression in Gmail, Outlook.com, and Apple Mail. All should be `https://`.

**Missing alt text on functional images:**
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

**Viewport blocks zoom (WCAG 1.4.4 violation):**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
`maximum-scale=1` prevents users from zooming — fails SC 1.4.4 (Resize Text).

**Text resize disabled on iOS:**
```css
* { -webkit-text-size-adjust: none; }
```
`none` disables all automatic text scaling. Should be `100%` — `none` also breaks font scaling in some iOS mail clients.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens detected in the provided source. Preheader is hardcoded:
```
"Upgrade Your Workday Comfort - BOGO 50% Off or 20% off 1 pair"
```
No dynamic personalization in preheader or visible body copy. Krux pixel carries raw subscriber ID (`partner_uid=7187828`) consistent with a test send.

---

### 5. Compliance

**Subject line is malformed — test prefix not stripped, and campaign code concatenated directly into subject copy:**
```
[Test]: MKG_US_NA_U_REPLEN_PROD_EN_04062026_A_V2Give Your Work Shoes a Glow-Up
```
Missing space between `_V2` and `Give`. This is a pre-production send; both issues must be resolved before deployment.

**SPF/DKIM status unknown:** `Authentication-Results` header not present in QA capture. Cannot confirm DMARC alignment. Must be verified at relay level before production send.

**CAN-SPAM:** Physical address and unsubscribe link not visible in truncated source — cannot confirm from available HTML. Assumed present in production template footer; verify before send.

---

### 6. Email-to-Site Continuity

Campaign ID `MKG_US_NA_U_REPLEN_PROD_EN_04062026_A` is consistently applied across the Krux impression pixel (`campaignid=`), Ink1000 pixel (`mi_ecmp=`), and subject line — good cross-channel consistency.

UTM parameters on destination URLs are not inspectable from the encrypted SFMC click-redirect query strings. UTM alignment should be verified via a test click-through before production.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **Critical** | Return Path pixel broken (no protocol) | Change `src="pixel.app.returnpath.net/..."` → `src="https://pixel.app.returnpath.net/..."` |
| **High** | All `image.emails.skechers.com` assets over HTTP | Migrate entire image library to `https://image.emails.skechers.com` |
| **High** | Subject line: `[Test]` prefix + missing space before copy | Strip `[Test]:` prefix; insert space between campaign code suffix and subject copy |
| **High** | SPF/DKIM unverified | Confirm `Authentication-Results` is present and DMARC-aligned in relay headers before production |
| **Medium** | `maximum-scale=1` blocks zoom | Remove `maximum-scale=1` from viewport meta |
| **Medium** | `-webkit-text-size-adjust: none` | Replace `none` with `100%` |
| **Medium** | 3 functional images missing alt text | Add descriptive `alt` attributes to `49468f73`, `00100b23`, `fc08601a` PNGs |
| **Low** | Ink1000 tracking pixel over HTTP | Update to HTTPS or evaluate whether this vendor is still needed |
## Recent history

- [[2026-04-03-test-mkg-us-na-u-replen-prod-en-04062026-agive-your-work-shoes-a-glow-up]] — 5/10 (2026-04-03)
- [[2026-04-11-test-pro-us-na-u-sitebundle-full-en-04052026spring-fling-sale-double-the-style-s]] — 3/10 (2026-04-03)
- [[2026-04-11-test-pro-us-retpurl24-u-sitebundle-retail-en-04052026two-ways-to-save-during-the]] — 4/10 (2026-04-03)

