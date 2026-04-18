---
slug: 2026-04-13-test-mkg-us-nonpurclick-u-glide-nonpurch-en-04142026-v2more-comfort-less-effort-
type: email
date: 2026-04-13
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPURCLICK_U_GLIDE_NONPURCH_EN_04142026_V2More Comfort, Less Effort with 20% off Your 1st Pair"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NONPURCLICK_U_GLIDE_NONPURCH_EN_04142026_V2More Comfort, Less Effort with 20% off Your 1st Pair
**Score:** 5/10 · **Type:** Email audit · **2026-04-13**
## Executive summary

- The discount offer and clean visual layout would convert adequately, but the preview text leak and test-prefix subject line disqualify this from being a clean send. If this landed in production as-is, it would damage brand trust for the small percentage of subscribers who notice.

## What's working

- **Offer clarity.** "20% Off a Single Pair" is front and center in both the header bar and the hero — no ambiguity.
- **Gender-segmented navigation.** Women / Men / Kids tabs with dedicated imagery and CTAs let the recipient self-sort quickly.
- **Product photography.** The shoes are shown in multiple colorways and angles throughout, which aids discovery and makes the email feel premium.
- **Spring Favorites module.** The seasonal hook adds context and gives the email a reason beyond the discount.
- **Secondary nav bar.** The bottom utility row (Women, Men, Kids, Clothing, New Arrivals, Sale) covers the store map efficiently.

## What's weak

- **Subject line is production-broken.** The `[Test]:` prefix and internal campaign code (`MKG_US_NONPURCLICK_U_GLIDE_NONPURCH_EN_04142026_V2`) are fully exposed. This is a fatal QA failure for a real send.
- **Preview text is raw JSON-LD.** The `[{ "@context": "http://schema.org/"...` structured data is rendering as the inbox preview snippet — the most-read real estate after the subject line is wasted on machine code. This is a serious mistake in any live deployment.
- **Hero headline undersells.** "Fresh Shop: Glide-Step" is product-naming, not benefit communication. The subject line promises "More Comfort, Less Effort" — that emotional hook never appears in the email body.
- **No social proof.** For a non-purchaser acquisition email, there are no reviews, star ratings, or testimonials anywhere visible to reduce first-purchase risk.
- **CTA copy is generic.** "Shop Now" repeated across every module — no variation to match the context (e.g., "Shop Women's Glide-Step" or "Find My Size").

## Recommendations

- 1. **Fix the preview text immediately.** The JSON-LD schema block must not be the first text node in the `<body>`. Move it into the `<head>` or behind a hidden span with zero height/opacity. This is urgent.
- 2. **Strip the test prefix before deployment.** The subject line must go through a QA checklist that verifies no internal codes or `[Test]` markers remain.
- 3. **Bring the comfort story into the hero.** Replace "Fresh Shop: Glide-Step" with something like "Walk Farther. Feel Less." and let the product name be secondary. Mirror the subject line's value proposition.
- 4. **Add a proof module.** Insert a 3–4 quote carousel or aggregate star rating (e.g., "4.7 stars across 12,000+ reviews") between the gender tabs and the Spring Favorites block.
- 5. **Differentiate CTAs.** Each gender block should have a contextually specific CTA rather than identical "Shop Now" buttons.
- | Priority | Issue | Fix |
- |---|---|---|
- | **P0** | Empty first-name merge token | Add fallback value to the name token (e.g., "there") before any send |
- | **P0** | `[Test]:` prefix + campaign ID in subject line | Strip prefix; fix template variable adjacency so campaign ID does not concatenate into subject copy |
- | **P1** | All `image.emails.skechers.com` assets over HTTP | Update CDN or asset base URL to `https://`; affects 13 assets including logo and social icons |
- | **P1** | Protocol-less Return Path pixel | Prepend `https://` to `pixel.app.returnpath.net/...` |
- | **P1** | ink1000.com open pixel over HTTP | Switch to `https://` or confirm if vendor supports it |
- | **P2** | Authentication-Results not verifiable | Confirm DKIM signing on `emails.skechers.com`; validate DMARC alignment before production send |
- | **P2** | Missing alt on `49468f73...png` | Add descriptive `alt` attribute |
- | **P3** | `<meta content="text/html; charset=utf-8">` malformed | Add `http-equiv="Content-Type"` |
- | **P3** | `-webkit-text-size-adjust: none` | Change to `100%` for WCAG compliance |
- | **P3** | UTM params on 27 outbound links | Run a full link probe pass against unwrapped destination URLs |

## Full review
## 2. Business Impact Score: 5/10

The discount offer and clean visual layout would convert adequately, but the preview text leak and test-prefix subject line disqualify this from being a clean send. If this landed in production as-is, it would damage brand trust for the small percentage of subscribers who notice.

---

## 3. What's Working

- **Offer clarity.** "20% Off a Single Pair" is front and center in both the header bar and the hero — no ambiguity.
- **Gender-segmented navigation.** Women / Men / Kids tabs with dedicated imagery and CTAs let the recipient self-sort quickly.
- **Product photography.** The shoes are shown in multiple colorways and angles throughout, which aids discovery and makes the email feel premium.
- **Spring Favorites module.** The seasonal hook adds context and gives the email a reason beyond the discount.
- **Secondary nav bar.** The bottom utility row (Women, Men, Kids, Clothing, New Arrivals, Sale) covers the store map efficiently.

---

## 4. What's Weak

- **Subject line is production-broken.** The `[Test]:` prefix and internal campaign code (`MKG_US_NONPURCLICK_U_GLIDE_NONPURCH_EN_04142026_V2`) are fully exposed. This is a fatal QA failure for a real send.
- **Preview text is raw JSON-LD.** The `[{ "@context": "http://schema.org/"...` structured data is rendering as the inbox preview snippet — the most-read real estate after the subject line is wasted on machine code. This is a serious mistake in any live deployment.
- **Hero headline undersells.** "Fresh Shop: Glide-Step" is product-naming, not benefit communication. The subject line promises "More Comfort, Less Effort" — that emotional hook never appears in the email body.
- **No social proof.** For a non-purchaser acquisition email, there are no reviews, star ratings, or testimonials anywhere visible to reduce first-purchase risk.
- **CTA copy is generic.** "Shop Now" repeated across every module — no variation to match the context (e.g., "Shop Women's Glide-Step" or "Find My Size").

---

## 5. Recommendations

1. **Fix the preview text immediately.** The JSON-LD schema block must not be the first text node in the `<body>`. Move it into the `<head>` or behind a hidden span with zero height/opacity. This is urgent.
2. **Strip the test prefix before deployment.** The subject line must go through a QA checklist that verifies no internal codes or `[Test]` markers remain.
3. **Bring the comfort story into the hero.** Replace "Fresh Shop: Glide-Step" with something like "Walk Farther. Feel Less." and let the product name be secondary. Mirror the subject line's value proposition.
4. **Add a proof module.** Insert a 3–4 quote carousel or aggregate star rating (e.g., "4.7 stars across 12,000+ reviews") between the gender tabs and the Spring Favorites block.
5. **Differentiate CTAs.** Each gender block should have a contextually specific CTA rather than identical "Shop Now" buttons.

---

## 6. Bottom Line

The bones of this email are solid — offer, segmentation, and product imagery are all adequate. But the preview text leak and test-prefix subject line are production-blocking bugs, not polish issues. If sent as-is, this email signals internal sloppiness to recipients and wastes the discount offer. Fix those two things first; the comfort messaging and CTA copywork are secondary improvements.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: MKG_US_NONPURCLICK_U_GLIDE_NONPURCH_EN_04142026_V2More Comfort, Less Effort with 20% off Your 1st Pair`
- **Length:** 109 characters (actual intended line: ~46 chars — "More Comfort, Less Effort with 20% off Your 1st Pair")
- **Scores (1-10):** Clarity `6`, Curiosity `4`, Personalization `4`, Urgency `5`, Specificity `6`
- **Strengths:**
  - The intended portion ("More Comfort, Less Effort with 20% off Your 1st Pair") pairs a benefit with a concrete offer
  - "Your 1st Pair" is a mild personalization signal for non-buyers
- **Weaknesses:**
  - Internal test prefix and campaign code are fully visible — disqualifying in production
  - No urgency trigger (no deadline, no inventory scarcity)
- **Alt A:** `Walk All Day for Less — 20% Off Your First Skechers Pair`
- **Alt B:** `Your First Pair, 20% Off: The Shoe Built for All-Day Comfort`

---

## 8. Evidence

- **Overall purpose:** First-purchase acquisition targeting non-buyers on the Glide-Step line, incentivized with a 20% single-pair discount.
- **Hero / primary value prop:** Teal header bar with offer, large "Glide-Step" headline, and a lifestyle image of the silhouette. Benefit language from the subject does not appear here.
- **Membership / benefits section:** None visible — no loyalty program mention, no free shipping callout.
- **Product discoverability / recommendation modules:** Three gender-segmented blocks (Women, Men, Kids), each with product imagery and a "Shop Now" CTA. A "Spring Favorites" block adds a seasonal editorial layer.
- **Utility / secondary modules:** Footer nav row covers Women, Men, Kids, Clothing, New Arrivals, Sale. App download links and payment method icons visible. Social icons present.
- **Bugs / friction / clarity issues:**
  - Preview text is rendering raw JSON-LD structured data — visible in the inbox snippet shown at the top of the screenshot.
  - Subject line contains the full internal `[Test]` prefix and campaign ID string fused with the intended copy.
  - No visible expiry date for the 20% offer, which reduces urgency.

---

## Technical Audit

## Technical Audit — Skechers MKG_US_NONPURCLICK_U_GLIDE_NONPURCH_EN_04142026_V2

---

### 1. Technical Summary

This email has one broken personalization token that would render a visible defect for all recipients, and a systemic HTTP-vs-HTTPS mismatch affecting 13+ image assets. Authentication headers are unverifiable in the current relay configuration, and a protocol-less tracking pixel URL will silently fail in most email clients.

---

### 2. Link & Tracking Issues

**Protocol-less Return Path pixel — will silently fail**
The Inbox Monitor pixel is missing its URL scheme entirely:
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"
```
Without `https://`, this is a relative URL reference, not a valid absolute URL. Most email clients will not resolve it, breaking inbox placement monitoring for this send.

**ink1000.com open pixel served over HTTP**
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8008532836&mi_ecmp=MKG_US_NONPURCLICK_U_GLIDE_NONPURCH_EN_04142026"
```
Mixed-content; will be blocked or load insecurely in clients that enforce HTTPS (Gmail, Apple Mail on iOS).

**27 tracked click links — destination URLs unverifiable**
All outbound links pass through `click.emails.skechers.com`. QA tooling skipped HTTP probing on these, so broken destination URLs, UTM integrity, and redirect chain depth cannot be confirmed from this run.

---

### 3. Rendering & Accessibility

**Systemic HTTP image delivery — 13 affected assets**
All assets hosted on `image.emails.skechers.com` use `http://`, not `https://`:
- Logo (`dde00662-169f-447d-b0e2-fc65f6c2290c.png`)
- App Store badge (`0ec56c9f-eec2-471a-898d-0ca1cea7e115.png`)
- Google Play badge (`9bb508d0-4b38-483d-8459-cf54186a0b9f.png`)
- Curbside Pickup icon (`00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`)
- AfterPay badge (`07cb60b5-512b-494d-892d-67dc067289b7.png`)
- Find A Store icon (`fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`)
- Social icons: Instagram, Facebook, YouTube

Gmail and Apple Mail actively block mixed-content images. These assets will fail to load in those clients, which account for the majority of consumer email opens.

**Missing alt text — 2 images**
- `o.gif` (ink1000 open-tracking pixel) — `alt=""` is acceptable for tracking pixels, but the QA flag confirms it.
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no alt attribute at all on a content image. Screen readers will skip or announce the filename.

**Malformed charset meta tag**
```html
<meta content="text/html; charset=utf-8" />
```
Missing `http-equiv="Content-Type"`. The correct form is:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Without `http-equiv`, some legacy clients will not apply the charset declaration.

**`-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; }
```
This disables user-controlled text scaling on iOS, violating WCAG 1.4.4 (Resize Text). Use `100%` instead of `none`.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty greeting — renders as "Hi ,"**
The automated QA confirms the first-name merge token resolved to an empty string. This is a live defect: every recipient without a stored first name will see the broken greeting in the rendered email. The token must have a non-empty fallback value (e.g., `%%=v(@FIRSTNAME, 'there')=%%` or equivalent in the sending platform's AMPscript/HBS syntax).

---

### 5. Compliance

**[WARN] Authentication-Results header absent**
SPF and DKIM pass/fail status is unknown for this send. The QA agent reports: `Authentication-Results header not found — Expected via AgentMail relay`. Before any live deployment, confirm DKIM signing is active on `emails.skechers.com` and that DMARC alignment passes. Without this, inbox placement and sender reputation cannot be validated.

**`[Test]:` prefix in Subject line — not stripped before send**
```
Subject: [Test]: MKG_US_NONPURCLICK_U_GLIDE_NONPURCH_EN_04142026_V2More Comfort, Less Effort...
```
Two issues here: (1) the `[Test]:` prefix must be removed before production deployment; (2) the internal campaign name (`_V2`) is concatenated directly into the subject with no separator before the consumer-facing copy (`More Comfort`). This looks like a subject-line template assembly bug where the campaign ID variable and subject copy variable are adjacent without a delimiter.

**Unsubscribe / CAN-SPAM footer** — HTML is truncated; cannot confirm from source. Assumed present based on standard Skechers templates, but must be verified against the full HTML before sign-off.

---

### 6. Email-to-Site Continuity

The campaign ID `MKG_US_NONPURCLICK_U_GLIDE_NONPURCH_EN_04142026` appears consistently across the four tracking pixels, which confirms the campaign identifier is correctly threaded through the analytics layer.

However, UTM parameter integrity on the 27 click-tracked outbound links cannot be confirmed — all are wrapped in `click.emails.skechers.com` redirects that were not probed. A follow-up QA pass should verify that destination URLs include at minimum `utm_source`, `utm_medium`, and `utm_campaign` parameters matching the campaign name.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **P0** | Empty first-name merge token | Add fallback value to the name token (e.g., "there") before any send |
| **P0** | `[Test]:` prefix + campaign ID in subject line | Strip prefix; fix template variable adjacency so campaign ID does not concatenate into subject copy |
| **P1** | All `image.emails.skechers.com` assets over HTTP | Update CDN or asset base URL to `https://`; affects 13 assets including logo and social icons |
| **P1** | Protocol-less Return Path pixel | Prepend `https://` to `pixel.app.returnpath.net/...` |
| **P1** | ink1000.com open pixel over HTTP | Switch to `https://` or confirm if vendor supports it |
| **P2** | Authentication-Results not verifiable | Confirm DKIM signing on `emails.skechers.com`; validate DMARC alignment before production send |
| **P2** | Missing alt on `49468f73...png` | Add descriptive `alt` attribute |
| **P3** | `<meta content="text/html; charset=utf-8">` malformed | Add `http-equiv="Content-Type"` |
| **P3** | `-webkit-text-size-adjust: none` | Change to `100%` for WCAG compliance |
| **P3** | UTM params on 27 outbound links | Run a full link probe pass against unwrapped destination URLs |
## Recent history

- [[2026-04-13-test-mkg-us-nonpurclick-u-glide-nonpurch-en-04142026more-comfort-and-a-little-ex]] — 4/10 (2026-04-13)
- [[2026-04-13-test-mkg-us-na-u-glide-gender-en-04142026family-comfort-unlocked-bogo-50-off]] — 4/10 (2026-04-13)
- [[2026-04-13-from-sneakers-to-sandals-it-s-slip-in-season]] — 5/10 (2026-04-13)

