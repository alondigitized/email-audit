---
slug: 2026-04-12-you-ve-still-got-20-off
type: email
date: 2026-04-12
persona: martha
score: "5/10"
sender: SKECHERS
subject: "You've still got 20% off!"
tags: [email, score-5, sender/skechers]
---
# You've still got 20% off!
**Score:** 5/10 · **Type:** Email audit · **2026-04-12**
## Executive summary

- A standard promotional reminder email with a clear discount offer, reasonable product variety, and a loyalty upsell. The hero does its job, but the email suffers from small image rendering, low visual resolution on product thumbnails, and a cluttered mid-section that dilutes the urgency the subject line promises. It functions — it doesn't compel.
- Competent but forgettable. The 20% offer is visible and the CTA is present, but the execution doesn't create the urgency the subject line sets up.

## What's working

- **Hero headline is clear and urgent**: "There's still time! 20% OFF Your First Purchase" is direct, bold, and the promo code is visible.
- **Promo code is prominent**: `WELCOME` (or similar) is shown with enough size to be read.
- **Product breadth is covered**: Slip-ons, Cushioning, Arch Fit, and Hands Free categories each get a tile — smart for a first-time buyer email.
- **Skechers Plus upsell module** is included, adding a secondary conversion path without overwhelming the primary CTA.

## What's weak

- **Hero image is small and low-impact**: The 20% off block feels compact and underwhelming — does not fill the viewport or create visual excitement.
- **Product thumbnails in the top row are tiny**: The six product images just below the hero are small enough that individual products are nearly indistinguishable. They don't inspire a click.
- **"Shop Our Top Collections" tiles are low resolution**: The four category tiles (Hands Free, Cozy Knit, Max Cushioning, Arch Fit) render with text overlaid on images in a way that's hard to read at this scale.
- **No clear secondary CTA**: After the hero's "Shop Now" button, the email devolves into a browse grid with no hierarchy or narrative — nothing pulls the eye toward a second action.
- **Footer is very heavy**: Large blocks of legal text, app download badges, loyalty info, and social icons all compete at the bottom, dragging the email long without adding value.
- **Skechers Plus module buries the value prop**: "Not a member? Sign up to get" is there, but the actual benefits are too small to read in the render.

## Recommendations

- 1. **Make the hero bigger and bolder.** The 20% offer should dominate the top third of the email. The current hero is modest — it should feel like a statement.
- 2. **Curate, don't catalog.** Replace the six-product thumbnail row with 2–3 hero products, larger, with prices shown. Give the recipient something to want, not something to scroll.
- 3. **Tighten the collection tiles.** The four-up grid is fine structurally — increase image contrast and font weight so the category names are legible without zooming.
- 4. **Add a mid-email CTA.** Between the product grid and the Skechers Plus module, insert a second "Shop Now — Use Code XXXX" button to recapture intent.
- 5. **Compress the footer.** App download, social, loyalty, and legal can all coexist — but the current footer is longer than the content. Reduce or collapse it.
- | Priority | Action |
- |---|---|
- | P0 | Fix the doubled-domain URL — identify the template variable or concatenation producing `http://www.skechers.com/www.Skechers.com` and correct before any further sends |
- | P0 | Add `https://` protocol to the Return Path pixel `src` attribute |
- | P1 | Migrate all `http://image.emails.skechers.com` and `http://www.ink1000.com` asset URLs to HTTPS |
- | P1 | Add descriptive `alt` text to all non-decorative images |
- | P1 | Confirm DKIM signing and SPF/DMARC alignment via raw header inspection |
- | P2 | Remove `maximum-scale=1` from the viewport meta or raise it to `5` to restore user zoom |
- | P2 | Spot-check 3–5 CTA redirect chains for UTM parameter passthrough |
- | P3 | Fix the malformed dark mode CSS comment (`/` → `*/`) |
- | P3 | Scope `text-size-adjust: none` to specific selectors rather than `*` |

## Full review
## SKECHERS — "You've still got 20% off!" Email Review

---

### 1. Executive Summary

A standard promotional reminder email with a clear discount offer, reasonable product variety, and a loyalty upsell. The hero does its job, but the email suffers from small image rendering, low visual resolution on product thumbnails, and a cluttered mid-section that dilutes the urgency the subject line promises. It functions — it doesn't compel.

---

### 2. Business Impact Score: **5 / 10**

Competent but forgettable. The 20% offer is visible and the CTA is present, but the execution doesn't create the urgency the subject line sets up.

---

### 3. What's Working

- **Hero headline is clear and urgent**: "There's still time! 20% OFF Your First Purchase" is direct, bold, and the promo code is visible.
- **Promo code is prominent**: `WELCOME` (or similar) is shown with enough size to be read.
- **Product breadth is covered**: Slip-ons, Cushioning, Arch Fit, and Hands Free categories each get a tile — smart for a first-time buyer email.
- **Skechers Plus upsell module** is included, adding a secondary conversion path without overwhelming the primary CTA.

---

### 4. What's Weak

- **Hero image is small and low-impact**: The 20% off block feels compact and underwhelming — does not fill the viewport or create visual excitement.
- **Product thumbnails in the top row are tiny**: The six product images just below the hero are small enough that individual products are nearly indistinguishable. They don't inspire a click.
- **"Shop Our Top Collections" tiles are low resolution**: The four category tiles (Hands Free, Cozy Knit, Max Cushioning, Arch Fit) render with text overlaid on images in a way that's hard to read at this scale.
- **No clear secondary CTA**: After the hero's "Shop Now" button, the email devolves into a browse grid with no hierarchy or narrative — nothing pulls the eye toward a second action.
- **Footer is very heavy**: Large blocks of legal text, app download badges, loyalty info, and social icons all compete at the bottom, dragging the email long without adding value.
- **Skechers Plus module buries the value prop**: "Not a member? Sign up to get" is there, but the actual benefits are too small to read in the render.

---

### 5. Recommendations

1. **Make the hero bigger and bolder.** The 20% offer should dominate the top third of the email. The current hero is modest — it should feel like a statement.
2. **Curate, don't catalog.** Replace the six-product thumbnail row with 2–3 hero products, larger, with prices shown. Give the recipient something to want, not something to scroll.
3. **Tighten the collection tiles.** The four-up grid is fine structurally — increase image contrast and font weight so the category names are legible without zooming.
4. **Add a mid-email CTA.** Between the product grid and the Skechers Plus module, insert a second "Shop Now — Use Code XXXX" button to recapture intent.
5. **Compress the footer.** App download, social, loyalty, and legal can all coexist — but the current footer is longer than the content. Reduce or collapse it.

---

### 6. Bottom Line

This email will convert modestly but won't punch above its weight. The offer is real, the code is visible, and the structure is coherent — but nothing creates desire or urgency beyond the subject line promise. A bigger hero and fewer, better product images would meaningfully improve click-through.

---

### 7. Subject Line Analysis

- **Subject:** `You've still got 20% off!`
- **Length:** 26 characters
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `5`, Urgency `6`, Specificity `7`
- **Strengths:**
  - Short, direct, and restates the offer cleanly — no ambiguity about what's inside
  - "Still got" implies the recipient already earned this, reducing opt-in friction
- **Weaknesses:**
  - No deadline or time-lock — "still" implies urgency but doesn't deliver it (no "expires tonight" or similar)
  - Generic enough to be any retailer; no brand differentiation in the line itself
- **Alt A:** `Your 20% off expires at midnight — shop Skechers now`
- **Alt B:** `Alon, your 20% welcome discount is waiting`

---

### 8. Evidence

- **Overall purpose:** First-purchase welcome/reminder email promoting 20% off with promo code.
- **Hero / primary value proposition:** "There's still time! 20% OFF Your First Purchase" with promo code and "Shop Now" CTA button on a light background. Visible but compact.
- **Membership / benefits section:** Skechers Plus module mid-email ("Not a member? Sign up to get") with a "Join Now" button. Benefits text is too small to read in the render.
- **Product discoverability / recommendation modules:** A row of ~6 small product thumbnails below the hero (individual styles, not labeled clearly at this scale) + a 4-tile "Shop Our Top Collections" grid (Hands Free Slip-Ins, Cozy Knit, Max Cushioning, Arch Fit).
- **Utility / secondary modules:** Footer includes app download (Apple/Google), social follow icons, "Shop Now Pay Later" notice, and loyalty/legal text.
- **Bugs / friction / clarity issues:** No broken images visible. Product thumbnails and collection tile text are too small to be actionable at rendered size — functions as visual noise rather than inspiration. Footer legal block is disproportionately long relative to email body.

---

## Technical Audit

## Technical Audit — SKECHERS "You've still got 20% off!"
**From:** no-reply@emails.skechers.com

---

### 1. Technical Summary

The email has one critical broken link caused by a doubled-domain merge error and a broken Return Path tracking pixel caused by a missing URL protocol. A broad pattern of HTTP (non-HTTPS) image assets across the template creates a mixed-content risk that will cause images to be blocked in secure mail clients.

---

### 2. Link & Tracking Issues

**[CRITICAL] Doubled-domain merge error**
The QA probe found a destination URL with a repeated domain:
```
http://www.skechers.com/www.Skechers.com
```
This is a broken destination — clicking this link 404s or loops. Likely caused by a concatenation bug where a base URL and a relative path both included the domain (case mismatch: `skechers.com` vs `Skechers.com`).

**[HIGH] Return Path pixel has no protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ... />
```
The `src` value is missing `https://`. This resolves as a relative path, meaning the pixel fires against the email client's local origin — it never reaches Return Path. Inbox deliverability monitoring from this pixel is dark.

**[INFO] 27 click-tracked links**
All CTAs route through `click.emails.skechers.com`. UTM passthrough cannot be verified without following the redirects; see §6.

---

### 3. Rendering & Accessibility

**[HIGH] 11 images served over HTTP**
`image.emails.skechers.com` assets and the ink1000.com open-tracking pixel all use `http://`. Gmail, Outlook.com, and Apple Mail proxy/block non-HTTPS image content by default. Affected assets include the Skechers logo, hero image candidates, social icons, app-store badges, and the AfterPay badge:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...  (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...  (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-...  (YouTube)
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif  (open pixel)
```

**[MEDIUM] 5 content images missing alt text**
The following non-decorative images have empty or absent `alt` attributes:
- `bcc16007-f391-423b-868f-cb0ad4f03490.jpg` (likely hero/product)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

Screen readers will skip these entirely. When images are blocked, users see blank spaces with no fallback text.

**[MEDIUM] `maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Prevents pinch-to-zoom on iOS, which is a WCAG 1.4.4 failure (Resize Text, Level AA).

**[LOW] Malformed CSS comment in dark mode block**
```css
/*Insert all your dark mode classes here, as you would insert mobile responsive classes./
/* Remember to use !important to override inline styles */
```
The first comment is closed with `/` instead of `*/`. Browsers and mail clients are lenient here and the block likely still parses, but it is a template defect that should be corrected.

**[LOW] `text-size-adjust: none` applied globally**
```css
* { text-size-adjust: none; -webkit-text-size-adjust: none; ... }
```
Applied to the `*` selector rather than scoped to specific elements. This suppresses font scaling across the entire email, including for users relying on OS-level text size settings.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the provided source. The Krux beacon contains a resolved SHA-256 hashed subscriber ID (`partner_uid=adf27fee...`) and a numeric subscriber ID (`partner_uid=122277199`), consistent with correct token resolution.

The campaign identifier `TRG_US_EN_NONMEMWELCOME_2_12022025` appears in three separate tracking pixels (Krux impression, ink1000 open pixel). This value appears hardcoded rather than dynamically templated — no issue unless the identifier needs to vary by send.

---

### 5. Compliance

**[WARN] Authentication-Results header not present**
SPF and DKIM pass/fail status could not be confirmed via the AgentMail relay. Sending domain is `emails.skechers.com` (subdomain of `skechers.com`), which is the correct ESP-isolation pattern. DMARC alignment and DKIM signing should be verified against the raw message headers.

**[INFO] CAN-SPAM elements**
The HTML source is truncated and the footer is not visible in the provided extract. Presence of physical mailing address and functional unsubscribe mechanism cannot be confirmed from available data. These must be verified in the full source.

---

### 6. Email-to-Site Continuity

**[CRITICAL]** The broken destination URL (`http://www.skechers.com/www.Skechers.com`) delivers users to a non-functional page — no UTM attribution is possible for clicks through that link.

**[UNVERIFIABLE]** The 27 click-tracked links route through `click.emails.skechers.com` redirects. UTM parameter presence on final landing URLs cannot be confirmed without following the redirect chains. This should be spot-checked against a sample of CTA destinations (e.g., hero CTA, "Shop Now," category links) to confirm `utm_source`, `utm_medium`, and `utm_campaign` are appended.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | Fix the doubled-domain URL — identify the template variable or concatenation producing `http://www.skechers.com/www.Skechers.com` and correct before any further sends |
| P0 | Add `https://` protocol to the Return Path pixel `src` attribute |
| P1 | Migrate all `http://image.emails.skechers.com` and `http://www.ink1000.com` asset URLs to HTTPS |
| P1 | Add descriptive `alt` text to all non-decorative images |
| P1 | Confirm DKIM signing and SPF/DMARC alignment via raw header inspection |
| P2 | Remove `maximum-scale=1` from the viewport meta or raise it to `5` to restore user zoom |
| P2 | Spot-check 3–5 CTA redirect chains for UTM parameter passthrough |
| P3 | Fix the malformed dark mode CSS comment (`/` → `*/`) |
| P3 | Scope `text-size-adjust: none` to specific selectors rather than `*` |
## Recent history

- [[2026-04-11-welcome-to-skechers]] — 6/10 (2026-04-11)

