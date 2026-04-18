---
slug: 2026-03-31-test-mkg-us-na-u-trend-gender-en-04012026get-ahead-of-this-season-s-trends
type: email
date: 2026-03-31
persona: walker
score: "5.5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_TREND_GENDER_EN_04012026Get Ahead of this Season's Trends"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NA_U_TREND_GENDER_EN_04012026Get Ahead of this Season's Trends
**Score:** 5.5/10 · **Type:** Email audit · **2026-03-31**
## Executive summary

- A trend-forward seasonal email from Skechers using a "Trend Report" editorial framing to drive category browsing. The email covers four shopper modes — Hands-Free Slip-Ins, Street Style, Color, and Best Sellers — giving it reasonable breadth. The hero is sharp, but downstream sections are visually thin and the overall email feels more like a navigation menu than a persuasive commercial piece. For a trend-focused send, the styling and product presentation are underwhelming.

## What's working

- **"Trend Report" hero framing** is a credible editorial hook that justifies the email's existence and sets a seasonal tone.
- **Promo bar is prominent** — "BOGO 50% Off" is clearly visible at the top and anchors a purchase incentive immediately.
- **Four distinct category pods** (Slip-Ins, Street Style, Color, Best Sellers) give multiple entry points to different shopper intents.
- **Best Sellers section** has a slightly elevated visual treatment with a teal background, which creates useful hierarchy at the bottom of the email.

## What's weak

- **Product imagery is very small.** Every category pod shows shoes at thumbnail scale. There's no single aspirational lifestyle shot below the hero, making the email feel like a site nav widget rather than a curated brand experience.
- **"Street Style" section is particularly underdeveloped** — the shoes shown are laid flat on a neutral background with no styling context, which directly contradicts the "trend" editorial premise.
- **Color section is confusing.** The pod is labeled "Color" but it shows only shoes with pastel/neutral tones. A section called "Color" should be visually punchy; this one reads as the opposite.
- **CTA buttons are generic.** "Shop Now" appears on every pod with no product- or trend-specific language (e.g., "Shop Slip-Ins," "Explore Street Style"). All calls-to-action are interchangeable.
- **Weak visual rhythm.** The hero is notably stronger than everything below it; each subsequent section steps down in visual energy rather than sustaining it.
- **Subject line leaks into preview text.** The preview text visible in the sender metadata shows raw URL strings — this is a deliverability and first-impression issue that reduces open rate appeal.

## Recommendations

- 1. **Enlarge product images** in the Street Style and Color pods, or add at least one on-figure lifestyle image per section to deliver on the "trend" editorial promise.
- 2. **Rename and rethink the Color section** — either lead with a bolder color story (e.g., "Spring's Boldest Hues") or replace it with a higher-intent category.
- 3. **Differentiate CTA copy** per section. Specific labels improve click-through and downstream attribution. "Slip into Spring," "Find Your Street Style" etc.
- 4. **Fix preview text** — the raw URL in the preheader is damaging the open rate. It should be replaced with a relevant copy line that extends the subject line's hook.
- 5. **Add at least one social proof or urgency signal** (e.g., "trending now," star ratings, "limited colors") to any of the four pods to create momentum.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | `[Test]:` prefix in subject | Strip before production send |
- | **P0** | Missing space in subject between campaign ID and copy | Fix template assembly |
- | **P1** | 14 images served over HTTP | Migrate all `image.emails.skechers.com` assets to HTTPS |
- | **P1** | `ink1000.com` tracking pixel over HTTP | Upgrade to HTTPS endpoint or remove |
- | **P1** | SPF/DKIM authentication status unconfirmed | Pull `Authentication-Results` from ESP logs; confirm DKIM alignment |
- | **P2** | 4 content images missing `alt` text | Add descriptive `alt` for content images; `alt=""` for decorative |
- | **P2** | Unsubscribe/physical address not confirmed | Verify footer is present in full HTML |
- | **P3** | `*{ -webkit-text-size-adjust: none }` | Scope to specific elements, not global |
- | **P3** | Spot-decode CTA click URLs | Verify UTM params and landing page alignment |
- | **P3** | Krxd user-match pixels | Confirm consent/data-share authorization for both `sha25` and `subid` pixels |

## Full review
## 1. Executive Summary

A trend-forward seasonal email from Skechers using a "Trend Report" editorial framing to drive category browsing. The email covers four shopper modes — Hands-Free Slip-Ins, Street Style, Color, and Best Sellers — giving it reasonable breadth. The hero is sharp, but downstream sections are visually thin and the overall email feels more like a navigation menu than a persuasive commercial piece. For a trend-focused send, the styling and product presentation are underwhelming.

---

## 2. Business Impact Score: 5.5 / 10

---

## 3. What's Working

- **"Trend Report" hero framing** is a credible editorial hook that justifies the email's existence and sets a seasonal tone.
- **Promo bar is prominent** — "BOGO 50% Off" is clearly visible at the top and anchors a purchase incentive immediately.
- **Four distinct category pods** (Slip-Ins, Street Style, Color, Best Sellers) give multiple entry points to different shopper intents.
- **Best Sellers section** has a slightly elevated visual treatment with a teal background, which creates useful hierarchy at the bottom of the email.

---

## 4. What's Weak

- **Product imagery is very small.** Every category pod shows shoes at thumbnail scale. There's no single aspirational lifestyle shot below the hero, making the email feel like a site nav widget rather than a curated brand experience.
- **"Street Style" section is particularly underdeveloped** — the shoes shown are laid flat on a neutral background with no styling context, which directly contradicts the "trend" editorial premise.
- **Color section is confusing.** The pod is labeled "Color" but it shows only shoes with pastel/neutral tones. A section called "Color" should be visually punchy; this one reads as the opposite.
- **CTA buttons are generic.** "Shop Now" appears on every pod with no product- or trend-specific language (e.g., "Shop Slip-Ins," "Explore Street Style"). All calls-to-action are interchangeable.
- **Weak visual rhythm.** The hero is notably stronger than everything below it; each subsequent section steps down in visual energy rather than sustaining it.
- **Subject line leaks into preview text.** The preview text visible in the sender metadata shows raw URL strings — this is a deliverability and first-impression issue that reduces open rate appeal.

---

## 5. Recommendations

1. **Enlarge product images** in the Street Style and Color pods, or add at least one on-figure lifestyle image per section to deliver on the "trend" editorial promise.
2. **Rename and rethink the Color section** — either lead with a bolder color story (e.g., "Spring's Boldest Hues") or replace it with a higher-intent category.
3. **Differentiate CTA copy** per section. Specific labels improve click-through and downstream attribution. "Slip into Spring," "Find Your Street Style" etc.
4. **Fix preview text** — the raw URL in the preheader is damaging the open rate. It should be replaced with a relevant copy line that extends the subject line's hook.
5. **Add at least one social proof or urgency signal** (e.g., "trending now," star ratings, "limited colors") to any of the four pods to create momentum.

---

## 6. Bottom Line

This email has solid structural bones — a clear hook, a visible offer, and multi-category coverage — but the execution is too thin to land as a trend story. The images are too small, the CTAs are generic, and the preview text is broken. A simple increase in image scale and CTA specificity would meaningfully lift engagement.

---

## 7. Evidence

**Overall purpose:** Drive seasonal category browsing and BOGO 50% off conversion across multiple footwear trends for a gender-neutral audience.

**Hero / primary value proposition:** "Trend Report" headline with BOGO 50% off banner. Clear and well-branded. Effective entry point.

**Membership / benefits section:** None visible. No loyalty, adiClub-equivalent, or personalization signals present.

**Product discoverability / recommendation modules:** Four pods — Hands-Free Slip-Ins, Street Style, Color, Best Sellers — each with a small horizontal product strip and a "Shop Now" CTA. Functional but low-impact.

**Utility / secondary modules:** Footer is present with standard navigation links (Women, Men, Kids, Clothing, Running, Sale). Social icons visible. Standard legal/unsubscribe footer present.

**Bugs / friction / clarity issues:** Preview text renders as a raw URL string rather than readable copy — visible in the email header metadata provided. No broken images or rendering failures visible within the email body itself.

---

## Technical Audit

## Technical Audit: MKG_US_NA_U_TREND_GENDER_EN_04012026 — "Get Ahead of this Season's Trends"

---

### 1. Technical Summary

The email has a pervasive HTTP-over-HTTPS issue affecting the majority of hosted images, which risks asset blocking in security-conscious clients. SPF/DKIM authentication status could not be confirmed via relay headers, requiring direct ESP verification before production send.

---

### 2. Link & Tracking Issues

**Subject line anomaly — missing space:**
The subject line reads `...EN_04012026Get Ahead...` — campaign ID and subject copy are concatenated with no separator. This is a template/merge assembly defect, not a cosmetic issue; it may affect subject-line parsing in some ESPs and will surface in deliverability logs and analytics as a malformed campaign ID.

**Third-party tracking pixels:**
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — HTTP, missing alt text, external vendor pixel. No HTTPS equivalent confirmed.
- Two `beacon.krxd.net` user-match pixels embedded with `partner_uid` and `sha25`-hashed values — confirm these are approved data-share partners under current consent scope.
- `pixel.app.returnpath.net` pixel present for inbox monitoring — expected, low risk.

**26 click-redirect links** all route through `click.emails.skechers.com` — could not be probed programmatically. Manual spot-check of decoded destinations is recommended (see §6).

---

### 3. Rendering & Accessibility

**HTTP image sources (14 affected assets):**

All `image.emails.skechers.com` assets are served over HTTP. Modern email clients (Gmail, Outlook.com, Apple Mail) proxy or block non-HTTPS images. Affected images include:

| Asset | Role |
|---|---|
| `dde00662...png` | Skechers logo |
| `49468f73...png` | No alt text |
| `0ec56c9f...png` | App Store badge |
| `9bb508d0...png` | Google Play badge |
| `00100b23...png` | No alt text |
| `07cb60b5...png` | AfterPay logo |
| `fc08601a...png` | No alt text |
| `b782e0aa...png` | Instagram icon |
| `d76a5487...png` | Twitter icon |
| `a5c4cae0...png` | Facebook icon |
| `573ab181...png` | Pinterest icon |
| `8c5738fc...png` | YouTube icon |

**Missing alt text (4 images):**
- `o.gif` (ink1000 pixel) — acceptable for tracking pixel, but should use `alt=""`
- `49468f73...png`, `00100b23...png`, `fc08601a...png` — content images with no alt text; fail WCAG 2.1 AA and will render blank in image-off environments

**CSS display toggling:**
Default styles set `.mobile-content { display: block }` and `.desktop-content { display: none }`, overridden by `@media (min-width: 768px)`. Gmail strips `<style>` blocks and ignores media queries — desktop Gmail users will see the mobile layout. Confirm this is intentional or that content parity exists between both versions.

**`-webkit-text-size-adjust: none`** is applied globally via `* {}`. This suppresses user font-size accessibility preferences on iOS and should be scoped only to elements that require it (e.g., small legal text), not the entire document.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%FIRST_NAME%%`, `${var}`) visible in the truncated HTML source. No issues confirmed. Full source should be verified for any conditional blocks that might render raw tokens on fallback.

**Campaign ID in Krxd pixel:** `campaignid=MKG_US_NA_U_TREND_GENDER_EN_04012026` — matches send metadata. Correct.

---

### 5. Compliance

**Authentication — unconfirmed:**
The QA relay did not capture an `Authentication-Results` header. SPF and DKIM pass/fail status for `emails.skechers.com` is unknown for this send. Verify DKIM signature alignment and SPF `~all`/`-all` policy directly in ESP logs before production deployment.

**CAN-SPAM:**
- Physical mailing address and unsubscribe link presence could not be confirmed from the truncated HTML. These must be present in the footer. Full source review required.
- Preheader text `"Stock Up & Show Out with BOGO 50% Off"` is hidden via `display:none` — standard practice, no issue.

**"[Test]:" prefix in subject line:** Subject is `[Test]: MKG_US_NA_U_TREND_GENDER_EN_04012026...`. Confirm this is stripped for production sends — sending with `[Test]:` prefix to live subscribers is a deliverability and brand integrity defect.

---

### 6. Email-to-Site Continuity

All 26 CTAs route through `click.emails.skechers.com` click-redirect. UTM parameter presence on destination URLs cannot be confirmed without decoding the base64 `qs=` parameter on each link. Spot-decode at least the primary CTA to verify:
- `utm_source`, `utm_medium`, `utm_campaign` are present
- `utm_campaign` value matches `MKG_US_NA_U_TREND_GENDER_EN_04012026`
- Landing pages are live and segment-appropriate (gender-unisex send should not land on a gender-filtered PLP)

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | `[Test]:` prefix in subject | Strip before production send |
| **P0** | Missing space in subject between campaign ID and copy | Fix template assembly |
| **P1** | 14 images served over HTTP | Migrate all `image.emails.skechers.com` assets to HTTPS |
| **P1** | `ink1000.com` tracking pixel over HTTP | Upgrade to HTTPS endpoint or remove |
| **P1** | SPF/DKIM authentication status unconfirmed | Pull `Authentication-Results` from ESP logs; confirm DKIM alignment |
| **P2** | 4 content images missing `alt` text | Add descriptive `alt` for content images; `alt=""` for decorative |
| **P2** | Unsubscribe/physical address not confirmed | Verify footer is present in full HTML |
| **P3** | `*{ -webkit-text-size-adjust: none }` | Scope to specific elements, not global |
| **P3** | Spot-decode CTA click URLs | Verify UTM params and landing page alignment |
| **P3** | Krxd user-match pixels | Confirm consent/data-share authorization for both `sha25` and `subid` pixels |
## Recent history

- [[2026-03-31-test-mkg-us-retpur-u-trend-retail-en-04012026new-season-new-styles]] — 6/10 (2026-03-31)
- [[2026-03-31-test-mkg-us-ecmpur-u-trend-ecom-en-04012026get-ahead-of-this-season-s-trends]] — 6/10 (2026-03-31)
- [[2026-03-31-test-mkg-us-nonpur-u-trend-nonpurch-en-04012026-v2try-the-comfort-everyone-s-tal]] — 6/10 (2026-03-31)

