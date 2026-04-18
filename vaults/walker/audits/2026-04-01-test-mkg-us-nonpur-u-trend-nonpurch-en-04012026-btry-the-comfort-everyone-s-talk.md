---
slug: 2026-04-01-test-mkg-us-nonpur-u-trend-nonpurch-en-04012026-btry-the-comfort-everyone-s-talk
type: email
date: 2026-03-31
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_BTry the Comfort Everyone's Talking About"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_BTry the Comfort Everyone's Talking About
**Score:** 5/10 · **Type:** Email audit · **2026-03-31**
## Executive summary

- A competent but low-conviction re-engagement email targeting non-purchasers. The "Trend Report" framing is on-brand and gives the message editorial lift, but the execution is shallow — category blocks are too small to create desire, the 50% off offer is buried in the header, and the "Best Sellers" section at the bottom lands as an afterthought rather than a payoff. The email reads like a catalog page, not a persuasion piece aimed at someone who hasn't bought yet.
- Functional, but leaves conversion on the table. The offer exists, the categories are covered, but nothing compels a non-purchaser to act.

## What's working

- **"Trend Report" editorial concept** gives the email a distinct identity and a reason to open/read.
- **Three clear category pillars** — Hands Free / Slip-On, Street Style, Color — create logical browsing paths.
- **50% off offer** is present in the header banner, which at least surfaces it above the fold.
- **Best Sellers label** at the bottom provides social proof as a close.

## What's weak

- **The hero offer is visually weak.** The 50% off banner is thin and text-heavy. It doesn't dominate the layout — the "Trend Report" headline reads as bigger news than a half-price offer.
- **Category imagery is too small.** Each category (Hands Free, Street Style, Color) gets a modest image block that doesn't showcase the product with enough detail to generate desire. Non-purchasers need to be seduced, not cataloged.
- **CTA repetition without differentiation.** Every section uses the same "Shop Now" button. There's no category-specific urgency or copy variation to match the editorial tone.
- **"Best Sellers" section is underpowered.** It's a text-link list at the bottom — nearly invisible. This is prime social-proof real estate wasted on low-visual treatment.
- **Preview text is broken.** The preview text visible in the from/subject block is a raw URL string, not a human-readable teaser. This directly hurts open rates.
- **Subject line test prefix `[Test]:` shipped.** The full internal test label is visible in the subject line, confirming this render is from a test deployment — but worth flagging as a live-send risk.

## Recommendations

- 1. **Make the offer the hero.** 50% off should command the top third of the email, not sit in a thin banner. Give it scale, color contrast, and a clear expiry if one exists.
- 2. **Expand product imagery.** Each category block needs at least 2–3 products shown clearly. Non-purchasers aren't loyal — they need to stumble on something they want.
- 3. **Fix preview text immediately.** Replace the raw URL with a benefit-forward line like *"Comfort up to 50% off — the styles everyone's wearing right now."*
- 4. **Vary the CTAs.** "Shop Slip-Ons," "See Street Style," "Shop by Color" is more specific and editorial than three identical "Shop Now" buttons.
- 5. **Elevate Best Sellers.** Move it earlier or give it image tiles. Text links at the bottom of a non-purchaser email will not convert.
- | Priority | Issue | Action |
- |---|---|---|
- | **Critical** | All `image.emails.skechers.com` assets on HTTP | Upgrade all `src` attributes to `https://image.emails.skechers.com/...` |
- | **Critical** | SPF/DKIM authentication unverified | Confirm relay authentication headers; do not send without verified DKIM pass |
- | **High** | `[Test]:` subject prefix + missing space in subject | Strip `[Test]: ` and insert space: `...04012026_B Try the Comfort...` |
- | **High** | Return Path pixel on HTTP | Update to `https://pixel.app.returnpath.net/...` |
- | **High** | Ink1000 pixel on HTTP | Update to `https://www.ink1000.com/...` |
- | **Medium** | 3 content images missing `alt` text | Add descriptive `alt` values to `49468f73`, `00100b23`, `fc08601a` images |
- | **Medium** | Verify `partner_uid` in Krux pixel is a live merge field | Check SFMC personalization string; should not be hardcoded integer |
- | **Medium** | `maximum-scale=1` + `-webkit-text-size-adjust: none` | Remove `maximum-scale=1`; change `text-size-adjust` to `100%` |
- | **Low** | 26 CTA UTM parameters unverified | Manually resolve 2–3 representative click URLs; confirm UTM params survive redirect |

## Full review
## Skechers — "Trend Report" Non-Purchaser Re-engagement Email

---

### 1. Executive Summary

A competent but low-conviction re-engagement email targeting non-purchasers. The "Trend Report" framing is on-brand and gives the message editorial lift, but the execution is shallow — category blocks are too small to create desire, the 50% off offer is buried in the header, and the "Best Sellers" section at the bottom lands as an afterthought rather than a payoff. The email reads like a catalog page, not a persuasion piece aimed at someone who hasn't bought yet.

---

### 2. Business Impact Score: 5/10

Functional, but leaves conversion on the table. The offer exists, the categories are covered, but nothing compels a non-purchaser to act.

---

### 3. What's Working

- **"Trend Report" editorial concept** gives the email a distinct identity and a reason to open/read.
- **Three clear category pillars** — Hands Free / Slip-On, Street Style, Color — create logical browsing paths.
- **50% off offer** is present in the header banner, which at least surfaces it above the fold.
- **Best Sellers label** at the bottom provides social proof as a close.

---

### 4. What's Weak

- **The hero offer is visually weak.** The 50% off banner is thin and text-heavy. It doesn't dominate the layout — the "Trend Report" headline reads as bigger news than a half-price offer.
- **Category imagery is too small.** Each category (Hands Free, Street Style, Color) gets a modest image block that doesn't showcase the product with enough detail to generate desire. Non-purchasers need to be seduced, not cataloged.
- **CTA repetition without differentiation.** Every section uses the same "Shop Now" button. There's no category-specific urgency or copy variation to match the editorial tone.
- **"Best Sellers" section is underpowered.** It's a text-link list at the bottom — nearly invisible. This is prime social-proof real estate wasted on low-visual treatment.
- **Preview text is broken.** The preview text visible in the from/subject block is a raw URL string, not a human-readable teaser. This directly hurts open rates.
- **Subject line test prefix `[Test]:` shipped.** The full internal test label is visible in the subject line, confirming this render is from a test deployment — but worth flagging as a live-send risk.

---

### 5. Recommendations

1. **Make the offer the hero.** 50% off should command the top third of the email, not sit in a thin banner. Give it scale, color contrast, and a clear expiry if one exists.
2. **Expand product imagery.** Each category block needs at least 2–3 products shown clearly. Non-purchasers aren't loyal — they need to stumble on something they want.
3. **Fix preview text immediately.** Replace the raw URL with a benefit-forward line like *"Comfort up to 50% off — the styles everyone's wearing right now."*
4. **Vary the CTAs.** "Shop Slip-Ons," "See Street Style," "Shop by Color" is more specific and editorial than three identical "Shop Now" buttons.
5. **Elevate Best Sellers.** Move it earlier or give it image tiles. Text links at the bottom of a non-purchaser email will not convert.

---

### 6. Bottom Line

The structural bones are fine, but the persuasion layer is missing. Non-purchasers require more product aspiration and a clearer value hook — this email shows them categories when it should be showing them reasons. Fix the preview text and offer hierarchy before the next send.

---

### 7. Evidence

**Overall purpose:** Re-engage non-purchasers by showcasing trending categories and a 50% off offer.

**Hero / primary value proposition:** 50% off banner at top — present but undersized relative to the editorial "Trend Report" heading below it.

**Membership / benefits section:** None visible. No loyalty program mention, no perks callout.

**Product discoverability / recommendation modules:** Three category tiles (Hands Free / Slip-On, Street Style, Color) with single images and generic Shop Now CTAs. Best Sellers section appears as a text-link list at the bottom.

**Utility / secondary modules:** Standard footer with social links, unsubscribe, and legal copy. No navigation bar visible above the hero.

**Bugs / friction / clarity issues:**
- Preview text renders as a raw URL — visible and broken in the subject/preview metadata shown.
- `[Test]:` prefix in the subject line indicates this is a test deployment; risk of shipping with this label intact.
- Logo area at top appears present but small; brand presence is understated for an acquisition-intent email.

---

## Technical Audit

## Technical Audit — Skechers `MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_B`

---

### 1. Technical Summary

This is variant B of a non-purchaser trend send scheduled for 04/01/2026, deployed via Salesforce Marketing Cloud with Krux DMP audience sync. The primary technical liabilities are pervasive HTTP (non-HTTPS) image sources that will trigger mixed-content blocking in major clients, and an unresolved SPF/DKIM authentication gap at the relay layer.

---

### 2. Link & Tracking Issues

**[WARN] 26 click-redirect links unverifiable**
All CTA links route through `click.emails.skechers.com` — HTTP probing was skipped, so UTM parameter pass-through and landing page destinations cannot be confirmed by this scan. Manual spot-check required before production send.

**[WARN] Return Path seed pixel uses HTTP**
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf..."
```
Missing `https://` scheme. This pixel will be blocked or flagged in clients enforcing HTTPS (Gmail, Apple Mail). Inbox placement monitoring may be impacted.

**[WARN] Ink1000 tracking pixel uses HTTP**
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8091927189&mi_ecmp=..."
```
Non-HTTPS. Will be blocked in clients that enforce secure mixed-content policies. Also missing `alt` attribute (QA confirmed).

**[INFO] Krux DMP sync pixels present**
Two `beacon.krxd.net` usermatch pixels fire in the hidden preheader block. The `partner_uid=102541952` value appears hardcoded (likely a seed/QA record subscriber ID rather than a live merge token — verify this is dynamic in production).

---

### 3. Rendering & Accessibility

**[HIGH] All `image.emails.skechers.com` assets served over HTTP**
Every content and footer image uses `http://image.emails.skechers.com/lib/fe3115707564047a731c78/...`. Affected images include:
- Skechers logo (`dde00662-169f-447d-b0e2-fc65f6c2290c.png`)
- Social icons: Instagram, Twitter, Facebook, Pinterest, YouTube
- Payment icons: AfterPay (`07cb60b5...`)
- App store badges: App Store (`0ec56c9f...`), Google Play (`9bb508d0...`)
- Content images: `49468f73...`, `00100b23...`, `fc08601a...`

Gmail, Apple Mail, and Outlook on modern clients block or warn on non-HTTPS image sources. All `image.emails.skechers.com` URLs must be upgraded to `https://`.

**[WARN] Missing `alt` text on 3 non-decorative images**
```
49468f73-4651-4af3-bea2-61d1ae5db486.png  — no alt
00100b23-0afa-4715-a8cd-23bb46f9d2b2.png  — no alt
fc08601a-fcce-4c96-8b90-39e5a55d6c05.png  — no alt
```
These are non-tracking images (content/product images based on filename patterns). WCAG 2.1 SC 1.1.1 requires alt text; images-off rendering will be silent gaps.

**[WARN] `maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Prevents user-initiated zoom. Fails WCAG 2.1 SC 1.4.4 (Resize Text). Should be removed or set to `maximum-scale=5`.

**[WARN] `-webkit-text-size-adjust: none`**
```css
* { -webkit-text-size-adjust: none; ... }
```
Disables OS-level text size adjustment on iOS. Combine with `maximum-scale=1` and this effectively locks all text scaling for low-vision users.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g., `%%field%%` or `{{field}}`) detected in the visible HTML fragment. The open-pixel URL includes `WM7O7Q6Z6THE5PDYMMFWHRSSMA.100221` which is consistent with an SFMC rendered subscriber token.

**[WARN] Krux `partner_uid=102541952` — verify dynamic**
This integer value in the DMP pixel should be a subscriber-level merge field. If hardcoded, all recipients will sync under a single identity, corrupting the audience graph.

---

### 5. Compliance

**[HIGH] SPF/DKIM authentication status unknown**
```
[WARN] Authentication-Results header not found: Expected via AgentMail relay
```
SPF and DKIM pass/fail cannot be confirmed. Unauthenticated mail from `no-reply@emails.skechers.com` risks DMARC rejection and spam folder placement, particularly post-Google/Yahoo Feb 2024 sender requirements (DKIM mandatory for bulk senders >5k/day).

**[WARN] `[Test]:` prefix in Subject line**
```
Subject: [Test]: MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_BTry the Comfort Everyone's Talking About
```
Test prefix is present and the subject also lacks a space before "Try" (`_B` immediately precedes the subject copy). Both must be corrected before production deployment.

**[INFO] CAN-SPAM physical address and unsubscribe link** — not visible in the truncated HTML fragment provided; assumed present in footer based on SFMC template standards. Verify footer block renders correctly.

---

### 6. Email-to-Site Continuity

**[UNVERIFIABLE] UTM parameters on 26 CTA links**
All links route through `click.emails.skechers.com` redirects. Whether UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) are appended to final landing page URLs cannot be confirmed without resolving the redirects. The campaign ID `MKG_US_NONPUR_U_TREND_NONPURCH_EN_04012026_B` is present in the Krux impression pixel, confirming the naming convention is correct — but UTM presence on click destinations must be manually verified.

**[INFO] Preheader text / offer mismatch risk**
Preheader reads "Stock Up & Show Out with BOGO 50% Off" while subject copy references "Comfort Everyone's Talking About." These are not necessarily misaligned (preheader can complement subject), but confirm the BOGO offer is live and correctly targeted on landing pages before send.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Critical** | All `image.emails.skechers.com` assets on HTTP | Upgrade all `src` attributes to `https://image.emails.skechers.com/...` |
| **Critical** | SPF/DKIM authentication unverified | Confirm relay authentication headers; do not send without verified DKIM pass |
| **High** | `[Test]:` subject prefix + missing space in subject | Strip `[Test]: ` and insert space: `...04012026_B Try the Comfort...` |
| **High** | Return Path pixel on HTTP | Update to `https://pixel.app.returnpath.net/...` |
| **High** | Ink1000 pixel on HTTP | Update to `https://www.ink1000.com/...` |
| **Medium** | 3 content images missing `alt` text | Add descriptive `alt` values to `49468f73`, `00100b23`, `fc08601a` images |
| **Medium** | Verify `partner_uid` in Krux pixel is a live merge field | Check SFMC personalization string; should not be hardcoded integer |
| **Medium** | `maximum-scale=1` + `-webkit-text-size-adjust: none` | Remove `maximum-scale=1`; change `text-size-adjust` to `100%` |
| **Low** | 26 CTA UTM parameters unverified | Manually resolve 2–3 representative click URLs; confirm UTM params survive redirect |
## Recent history

- [[2026-03-31-test-mkg-us-nonpur-u-trend-nonpurch-en-04012026-atry-the-comfort-everyone-s-talk]] — 6/10 (2026-03-31)
- [[2026-03-31-test-mkg-us-na-u-trend-gender-en-04012026-v2you-deserve-comfort-this-spring]] — 6/10 (2026-03-31)
- [[2026-03-31-test-mkg-us-na-u-trend-gender-en-04012026get-ahead-of-this-season-s-trends]] — 5.5/10 (2026-03-31)

