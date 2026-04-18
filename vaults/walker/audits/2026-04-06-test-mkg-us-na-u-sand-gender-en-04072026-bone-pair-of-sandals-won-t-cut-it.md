---
slug: 2026-04-06-test-mkg-us-na-u-sand-gender-en-04072026-bone-pair-of-sandals-won-t-cut-it
type: email
date: 2026-04-06
persona: walker
score: "6.5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_SAND_GENDER_EN_04072026_BOne Pair of Sandals Won’t Cut It"
tags: [email, score-7, sender/skechers]
---
# [Test]: MKG_US_NA_U_SAND_GENDER_EN_04072026_BOne Pair of Sandals Won’t Cut It
**Score:** 6.5/10 · **Type:** Email audit · **2026-04-06**
## Executive summary

- A focused, seasonal sandal push built around a 50% off sale. The email lands the core message fast — sandal season, big discount — and segments cleanly by gender. The structure is logical and efficient, but it doesn't give any individual product or story enough room to breathe. The "Only at Skechers" exclusivity angle is introduced too late and too small to punch through. Solid execution on a tight format; leaves some revenue on the table by not featuring even one product with real visual real estate.

## What's working

- **Offer clarity at the top.** "BUY ONE GET ONE 50% OFF" is the first thing you read. No ambiguity, no hunting for the deal.
- **"SANDAL SEASON" hero image.** The lifestyle shot (woman in sandals, outdoor setting) is warm, seasonally appropriate, and immediately signals the theme.
- **Gender segmentation is clean.** Women / Men / Kids rows with direct CTAs let any household member self-select without friction. This is efficient navigation for a broad audience.
- **"Only at Skechers" module** signals exclusivity, even if it's undersized.
- **App + social footer** is present and visually organized.

## What's weak

- **No hero product.** The email is a category call-to-action, not a product statement. There's no featured sandal with a name, price point, or reason to care. "Shop Now" repeated across four rows creates fatigue, not urgency.
- **"Walking in Style" module is vague.** The two-shoe graphic has a headline that doesn't promise anything. It's a filler module.
- **"Keep it Casual" module** is similarly underdeveloped — a label, not a value proposition.
- **"Only at Skechers" arrives too late.** This is potentially the strongest differentiator in the email, but it's buried below the fold with minimal visual treatment.
- **Subject line / preview text mismatch.** The subject line says "One Pair of Sandals Won't Cut It" — a playful quantity angle — but the email doesn't reinforce or pay off that premise. The BOGO offer is the closest connection, but the email never explicitly names it as "get more pairs."
- **Preview text is broken.** It displays the web version URL as raw text, which is sloppy and burns a prime piece of inbox real estate.

## Recommendations

- 1. **Feature one hero product per gender row.** Add a product name, a brief descriptor ("cushioned footbed, washable upper"), and a price to at least the Women's row. Give shoppers a reason to click beyond "they're sandals."
- 2. **Connect the subject line to the body.** "One pair won't cut it" is a BOGO setup. Add a line in the hero — "Stock up: Buy One, Get One 50% Off" — to close the loop.
- 3. **Fix the preview text.** The raw URL exposure should be caught before send. Replace with a benefit-driven line like "Up to 50% off — sandal season starts now."
- 4. **Promote "Only at Skechers" earlier.** Move the exclusivity module above the gender nav rows or integrate it into the hero. Exclusivity is a conversion driver; it shouldn't appear as an afterthought.
- 5. **Consolidate or cut the mid-email filler.** "Walking in Style" and "Keep it Casual" together add two modules with zero product or offer specificity. Replace with a curated best-seller row or drop one entirely.
- | Priority | Action |
- |---|---|
- | **P0** | Remove `[Test]:` prefix and fix subject line concatenation bug before production send |
- | **P0** | Migrate all `image.emails.skechers.com` image URLs from `http://` to `https://` |
- | **P0** | Fix Return Path pixel: add `https://` protocol to `pixel.app.returnpath.net/pixel.gif` |
- | **P1** | Verify SPF/DKIM pass via raw Gmail headers on a test send |
- | **P1** | Add `alt=""` to tracking pixels; add descriptive `alt` text to content images missing it |
- | **P1** | Migrate Movable Ink pixel URL to `https://` |
- | **P2** | Confirm `partner_uid` in Krxd pixel is a dynamic token, not a static value |
- | **P2** | Spot-check 2–3 resolved click URLs to confirm UTM parameter presence and correct landing page |

## Full review
## 1. Executive Summary

A focused, seasonal sandal push built around a 50% off sale. The email lands the core message fast — sandal season, big discount — and segments cleanly by gender. The structure is logical and efficient, but it doesn't give any individual product or story enough room to breathe. The "Only at Skechers" exclusivity angle is introduced too late and too small to punch through. Solid execution on a tight format; leaves some revenue on the table by not featuring even one product with real visual real estate.

---

## 2. Business Impact Score: **6.5 / 10**

---

## 3. What's Working

- **Offer clarity at the top.** "BUY ONE GET ONE 50% OFF" is the first thing you read. No ambiguity, no hunting for the deal.
- **"SANDAL SEASON" hero image.** The lifestyle shot (woman in sandals, outdoor setting) is warm, seasonally appropriate, and immediately signals the theme.
- **Gender segmentation is clean.** Women / Men / Kids rows with direct CTAs let any household member self-select without friction. This is efficient navigation for a broad audience.
- **"Only at Skechers" module** signals exclusivity, even if it's undersized.
- **App + social footer** is present and visually organized.

---

## 4. What's Weak

- **No hero product.** The email is a category call-to-action, not a product statement. There's no featured sandal with a name, price point, or reason to care. "Shop Now" repeated across four rows creates fatigue, not urgency.
- **"Walking in Style" module is vague.** The two-shoe graphic has a headline that doesn't promise anything. It's a filler module.
- **"Keep it Casual" module** is similarly underdeveloped — a label, not a value proposition.
- **"Only at Skechers" arrives too late.** This is potentially the strongest differentiator in the email, but it's buried below the fold with minimal visual treatment.
- **Subject line / preview text mismatch.** The subject line says "One Pair of Sandals Won't Cut It" — a playful quantity angle — but the email doesn't reinforce or pay off that premise. The BOGO offer is the closest connection, but the email never explicitly names it as "get more pairs."
- **Preview text is broken.** It displays the web version URL as raw text, which is sloppy and burns a prime piece of inbox real estate.

---

## 5. Recommendations

1. **Feature one hero product per gender row.** Add a product name, a brief descriptor ("cushioned footbed, washable upper"), and a price to at least the Women's row. Give shoppers a reason to click beyond "they're sandals."
2. **Connect the subject line to the body.** "One pair won't cut it" is a BOGO setup. Add a line in the hero — "Stock up: Buy One, Get One 50% Off" — to close the loop.
3. **Fix the preview text.** The raw URL exposure should be caught before send. Replace with a benefit-driven line like "Up to 50% off — sandal season starts now."
4. **Promote "Only at Skechers" earlier.** Move the exclusivity module above the gender nav rows or integrate it into the hero. Exclusivity is a conversion driver; it shouldn't appear as an afterthought.
5. **Consolidate or cut the mid-email filler.** "Walking in Style" and "Keep it Casual" together add two modules with zero product or offer specificity. Replace with a curated best-seller row or drop one entirely.

---

## 6. Bottom Line

The email does the basics right — offer first, easy navigation, seasonal imagery — but it's operating as a traffic driver, not a sales engine. It gets subscribers to the site but gives them little reason to feel excited before they click. The broken preview text and the mismatch between the subject line and email body are the most immediate fixes. Beyond that, one hero product with context would materially improve this format.

---

## 7. Evidence

**Overall purpose:** Drive sandal category purchases during a BOGO 50% off promotion, segmented by Women / Men / Kids.

**Hero / primary value proposition:** "SANDAL SEASON" headline over a lifestyle image with a BOGO 50% banner at top. Clear and immediate.

**Membership / benefits section:** Not present in this email.

**Product discoverability / recommendation modules:** Gender-segmented rows (Women, Men, Kids) each with a sandal flat-lay image and a "Shop [Gender's] Sandals" CTA. "Walking in Style" and "Keep it Casual" modules show shoes without product context. "Only at Skechers" near the bottom gestures at exclusivity without specifics.

**Utility / secondary modules:** App download prompt, social media icons, and a standard legal/unsubscribe footer. All present and readable.

**Bugs / friction / clarity issues:** Preview text renders as a raw URL string — visible and unprofessional in the inbox preview. No other visible rendering bugs in the email body itself.

---

## Technical Audit

## Technical Audit — Skechers Sandals Campaign (`MKG_US_NA_U_SAND_GENDER_EN_04072026_B`)

---

### 1. Technical Summary

Test-flagged email with a widespread HTTP (non-HTTPS) image loading problem affecting 16+ assets hosted on `image.emails.skechers.com`, plus a protocol-missing Return Path pixel that will silently fail. Authentication status is unverifiable via AgentMail relay.

---

### 2. Link & Tracking Issues

**[HIGH] Return Path pixel missing URL protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `https://` prefix — this resolves as a relative path, meaning the inbox reputation monitoring pixel **never fires**. Fix: prepend `https://`.

**[INFO] 26 click-redirect links not probed**
All links route through `click.emails.skechers.com` — expected for SFMC. Destination URL health was not verified; validate landing pages separately.

**[INFO] Third-party beacon inventory**
- `beacon.krxd.net` — Salesforce DMP user-match pixels (HTTPS ✓)
- `http://www.ink1000.com` — Movable Ink open pixel (HTTP — see §3)
- `click.emails.skechers.com/open.aspx` — SFMC open pixel (HTTPS ✓)

---

### 3. Rendering & Accessibility

**[HIGH] 16 images served over HTTP**
All `image.emails.skechers.com` assets and the Movable Ink pixel use `http://`. Gmail, Outlook.com, and Apple Mail proxy/block mixed-content images — these will render as broken images for a significant portion of recipients.

Affected hosts:
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...` (Skechers logo)
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/*` (all footer/social/payment icons — 14 assets)
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` (Movable Ink pixel)

Fix: all image CDN paths must be `https://`.

**[MEDIUM] 4 images missing `alt` text**

| Filename | Purpose (inferred) |
|---|---|
| `o.gif` (ink1000.com) | Tracking pixel |
| `49468f73-4651-...png` | Unknown (footer area) |
| `00100b23-0afa-...png` | Unknown (footer area) |
| `fc08601a-fcce-...png` | Unknown (footer area) |

Tracking pixels should have `alt=""`. Content images without alt text fail WCAG 2.1 AA and render blank in image-off environments.

**[INFO] `-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; }
```
This suppresses iOS auto-resizing for all elements. Acceptable as a deliberate override but means text below ~12px will be unreadable on small screens without explicit media query overrides.

---

### 4. Personalization & Merge Tokens

**[MEDIUM] Test subject prefix not stripped**
```
Subject: [Test]: MKG_US_NA_U_SAND_GENDER_EN_04072026_BOne Pair of Sandals Won't Cut It
```
Two issues: `[Test]:` prefix present (production deployment blocker), and the campaign ID `MKG_US_NA_U_SAND_GENDER_EN_04072026_B` appears to be concatenated directly into the subject line with no space before "One Pair" — suggesting a merge/template assembly error.

**[INFO] Hardcoded subscriber ID in Krxd pixel**
```html
partner_uid=7187828
```
If this is a static value rather than a personalization token, the user-match pixel is non-functional for audience targeting. Verify this is `%%subscriberKey%%` or equivalent at send time.

No broken/unfired merge tokens (`%%`, `{{`, `[[`) visible in the truncated source.

---

### 5. Compliance

**[HIGH] SPF/DKIM authentication unverifiable**
`Authentication-Results` header not present via AgentMail relay — SPF and DKIM pass/fail status unknown. This must be confirmed against a direct inbox delivery (Gmail headers) before production send.

**[MEDIUM] `[Test]:` subject line prefix**
Must be removed before any production deployment. Leaving it in triggers spam filters and exposes internal campaign naming to recipients.

**[INFO] Unsubscribe and physical address**
Not visible in the truncated source but expected in the footer. Confirm CAN-SPAM §5 compliance: postal address, working one-click unsubscribe, and `List-Unsubscribe` header are all required.

---

### 6. Email-to-Site Continuity

**[WARN] UTM parameters unverifiable on 26 links**
All click URLs are encrypted SFMC redirects (`eyJ...` base64 payload) — destination URLs and UTM parameters cannot be inspected without resolving the redirects. Verify that all product links carry at minimum:
```
utm_source=email&utm_medium=email&utm_campaign=MKG_US_NA_U_SAND_GENDER_EN_04072026_B
```

**[INFO] Campaign ID consistent across pixels**
`MKG_US_NA_U_SAND_GENDER_EN_04072026_B` appears in both the Krxd impression pixel and Movable Ink pixel — campaign attribution is internally consistent.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Remove `[Test]:` prefix and fix subject line concatenation bug before production send |
| **P0** | Migrate all `image.emails.skechers.com` image URLs from `http://` to `https://` |
| **P0** | Fix Return Path pixel: add `https://` protocol to `pixel.app.returnpath.net/pixel.gif` |
| **P1** | Verify SPF/DKIM pass via raw Gmail headers on a test send |
| **P1** | Add `alt=""` to tracking pixels; add descriptive `alt` text to content images missing it |
| **P1** | Migrate Movable Ink pixel URL to `https://` |
| **P2** | Confirm `partner_uid` in Krxd pixel is a dynamic token, not a static value |
| **P2** | Spot-check 2–3 resolved click URLs to confirm UTM parameter presence and correct landing page |
## Recent history

- [[2026-04-06-out-with-the-old-into-spring]] — 6/10 (2026-04-06)
- [[2026-04-06-your-cart-expires-soon]] — 5.5/10 (2026-04-06)
- [[2026-04-06-did-you-forget-something]] — 5/10 (2026-04-06)

