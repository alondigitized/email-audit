---
slug: 2026-04-14-test-pro-us-nonpurclick-u-sitebundle-nonpurch-en-04152026spring-styles-20-off-th
type: email
date: 2026-04-14
persona: walker
score: "4/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NONPURCLICK_U_SITEBUNDLE_NONPURCH_EN_04152026Spring Styles + 20% Off = The Perfect Pair"
tags: [email, score-4, sender/skechers]
---
# [Test]: PRO_US_NONPURCLICK_U_SITEBUNDLE_NONPURCH_EN_04152026Spring Styles + 20% Off = The Perfect Pair
**Score:** 4/10 · **Type:** Email audit · **2026-04-14**
## Executive summary

- The offer is real and positioned early, but two of the most influential inbox touchpoints — subject line and preview text — are broken. Anyone who clicks through despite those failures lands on a structurally sound but visually underwhelming experience.

## What's working

- **Offer clarity:** "BUY ONE GET ONE 50% OFF" is visible in the hero banner and the 20% off framing is consistent. Recipients understand the deal immediately.
- **Gender segmentation:** Women's / Men's / Kids sections are clearly labeled with shop CTAs, making navigation intuitive for a family shopper.
- **Spring seasonal alignment:** The hero uses warm, sandy lifestyle imagery that matches the "Spring Styles" messaging.
- **App download and loyalty nudge** at the bottom acknowledges retention — good presence of secondary utility modules.

## What's weak

- **Subject line is broken** — the entire internal campaign code `PRO_US_NONPURCLICK_U_SITEBUNDLE_NONPURCH_EN_04152026` is prepended with `[Test]:` and exposed verbatim to recipients. This is a QA failure, not a stylistic issue.
- **Preview text is raw JSON-LD schema** — the preheader visible in the inbox renders `[{ "@context": "http://schema.org/", "@type": "Organization"...` which is technical metadata, not copy. This is likely the single biggest conversion killer in the send.
- **Product tiles are tiny** — the carousel thumbnails for Women's, Men's, and Kids are rendered at very small sizes. Individual shoes are difficult to evaluate visually, which defeats the merchandising purpose of showing product.
- **Price labels are nearly illegible** — at the rendered size, the price figures under each product tile are too small to read without zooming.
- **CTA buttons are understated** — "SHOP WOMEN'S," "SHOP MEN'S," "SHOP KIDS" are present but visually compete with the small product grid rather than standing out.
- **Kids section has no lifestyle imagery** — it goes straight to product tiles with no visual hook, making it feel like an afterthought compared to Women's and Men's.

## Recommendations

- 1. **Immediately suppress or re-send** — the `[Test]:` prefix and internal campaign code in the subject line confirm this was sent before QA sign-off. If this went to a real list, damage to sender reputation and brand trust is already done.
- 2. **Fix the preheader** — the preview text must be human-readable copy that reinforces the offer (e.g., "Your spring refresh starts here — 20% off everything now."). The JSON-LD schema block needs to be excluded from the visible text node.
- 3. **Increase product tile size** — at minimum, double the rendered image dimensions for the product carousels. If the template is constrained, reduce the number of products shown per row (3 → 2) to give each shoe room to breathe.
- 4. **Add price contrast** — use a bolder weight or accent color for price so it reads at a glance.
- 5. **Give Kids a hero or lifestyle image** — even a single banner photo of a child in Skechers would elevate the section and make the segmentation feel intentional.
- 6. **Audit the schema injection point** — whatever content block is generating the JSON-LD `@context` data needs to be rendered in a hidden/non-text element, not in the email body visible to inbox preview.
- | Priority | Issue | Action |
- |---|---|---|
- | **Blocker** | `[Test]:` prefix in subject line | Strip before production send |
- | **Blocker** | Campaign ID concatenated into subject copy | Insert space/delimiter or remove from subject |
- | **Blocker** | Return Path pixel has no protocol | Change to `https://pixel.app.returnpath.net/...` |
- | **Blocker** | Hardcoded subscriber IDs in ink1000 + Krux sub-ID pixels | Replace `mi_u=8004129222` and `partner_uid=32884357` with SFMC merge tokens |
- | **High** | 13 images served over HTTP | Change all `http://image.emails.skechers.com/` srcs to `https://` |
- | **High** | ink1000 pixel over HTTP | Change to `https://` or remove if redundant with SFMC open pixel |
- | **High** | SPF/DKIM unverified | Confirm both pass via an authenticated relay before send |
- | **Medium** | Malformed `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
- | **Medium** | Two images missing alt text | Add descriptive (or empty `alt=""`) attributes |
- | **Medium** | UTM parameters unverified | Spot-check 3–5 destination URLs by following click-redirect chain |
- | **Low** | `maximum-scale=1` in viewport | Remove or raise to `5` for accessibility compliance |
- | **Low** | Duplicate media query blocks | Consolidate `375px`/`480px`/`640px` into a single coherent breakpoint set |
- | **Low** | `-webkit-text-size-adjust: none` | Change to `100%` to allow OS-level text scaling |

## Full review
## 2. Business Impact Score: 4/10

The offer is real and positioned early, but two of the most influential inbox touchpoints — subject line and preview text — are broken. Anyone who clicks through despite those failures lands on a structurally sound but visually underwhelming experience.

---

## 3. What's Working

- **Offer clarity:** "BUY ONE GET ONE 50% OFF" is visible in the hero banner and the 20% off framing is consistent. Recipients understand the deal immediately.
- **Gender segmentation:** Women's / Men's / Kids sections are clearly labeled with shop CTAs, making navigation intuitive for a family shopper.
- **Spring seasonal alignment:** The hero uses warm, sandy lifestyle imagery that matches the "Spring Styles" messaging.
- **App download and loyalty nudge** at the bottom acknowledges retention — good presence of secondary utility modules.

---

## 4. What's Weak

- **Subject line is broken** — the entire internal campaign code `PRO_US_NONPURCLICK_U_SITEBUNDLE_NONPURCH_EN_04152026` is prepended with `[Test]:` and exposed verbatim to recipients. This is a QA failure, not a stylistic issue.
- **Preview text is raw JSON-LD schema** — the preheader visible in the inbox renders `[{ "@context": "http://schema.org/", "@type": "Organization"...` which is technical metadata, not copy. This is likely the single biggest conversion killer in the send.
- **Product tiles are tiny** — the carousel thumbnails for Women's, Men's, and Kids are rendered at very small sizes. Individual shoes are difficult to evaluate visually, which defeats the merchandising purpose of showing product.
- **Price labels are nearly illegible** — at the rendered size, the price figures under each product tile are too small to read without zooming.
- **CTA buttons are understated** — "SHOP WOMEN'S," "SHOP MEN'S," "SHOP KIDS" are present but visually compete with the small product grid rather than standing out.
- **Kids section has no lifestyle imagery** — it goes straight to product tiles with no visual hook, making it feel like an afterthought compared to Women's and Men's.

---

## 5. Recommendations

1. **Immediately suppress or re-send** — the `[Test]:` prefix and internal campaign code in the subject line confirm this was sent before QA sign-off. If this went to a real list, damage to sender reputation and brand trust is already done.
2. **Fix the preheader** — the preview text must be human-readable copy that reinforces the offer (e.g., "Your spring refresh starts here — 20% off everything now."). The JSON-LD schema block needs to be excluded from the visible text node.
3. **Increase product tile size** — at minimum, double the rendered image dimensions for the product carousels. If the template is constrained, reduce the number of products shown per row (3 → 2) to give each shoe room to breathe.
4. **Add price contrast** — use a bolder weight or accent color for price so it reads at a glance.
5. **Give Kids a hero or lifestyle image** — even a single banner photo of a child in Skechers would elevate the section and make the segmentation feel intentional.
6. **Audit the schema injection point** — whatever content block is generating the JSON-LD `@context` data needs to be rendered in a hidden/non-text element, not in the email body visible to inbox preview.

---

## 6. Bottom Line

The offer is solid and the structure is workable, but this email should not have gone out in this state. The broken subject line and JSON-LD preheader are disqualifying failures that undermine trust before the recipient even opens the email. Fix the QA pipeline before the next send.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: PRO_US_NONPURCLICK_U_SITEBUNDLE_NONPURCH_EN_04152026Spring Styles + 20% Off = The Perfect Pair`
- **Length:** 100 characters
- **Scores (1-10):** Clarity `2`, Curiosity `3`, Personalization `1`, Urgency `4`, Specificity `5`
- **Strengths:**
  - The human-readable suffix ("Spring Styles + 20% Off = The Perfect Pair") is actually decent — seasonal, benefit-first, playful equation format
  - Specificity of the discount (20% Off) anchors expectations
- **Weaknesses:**
  - `[Test]:` prefix and 60-character internal campaign code completely override any positive signal — this reads as a test email to most recipients
  - Zero personalization; no sense of recipient identity or history
- **Alt A:** `Your Spring Upgrade: 20% Off Everything at Skechers`
- **Alt B:** `Spring styles are here — and they're 20% off. Shop now.`

---

## 8. Evidence

- **Overall purpose:** Seasonal spring promotion with a dual offer — BOGO 50% off (hero) and 20% off sitewide — targeting broad Skechers customers segmented by gender.
- **Hero / primary value proposition:** Lifestyle beach/sandal image with "BUY ONE GET ONE 50% OFF" overlay. Clear and seasonally relevant. CTA button ("SHOP NOW") is present but small relative to the banner.
- **Membership / benefits section:** App download prompt and a loyalty/rewards nudge appear at the bottom. Minimal prominence — buried below all product content.
- **Product discoverability / recommendation modules:** Three gender-segmented carousels (Women's, Men's, Kids) each showing 3 product tiles with prices. Tiles are too small for effective visual merchandising.
- **Utility / secondary modules:** Footer includes store locator, app download badges (Apple/Google), social icons, and legal unsubscribe block. Standard and complete.
- **Bugs / friction / clarity issues (visible in render):**
  - `[Test]:` + internal campaign code visible in subject line — critical
  - Raw JSON-LD schema rendering as preview text — critical
  - Product tile images too small to evaluate shoes meaningfully
  - Price text at tile level is illegible at normal view size

---

## Technical Audit

## Technical Audit — Skechers Spring 20% Off (PRO_US_NONPURCLICK_U_SITEBUNDLE_NONPURCH_EN_04152026)

---

### 1. Technical Summary

The email is a standard Salesforce Marketing Cloud (SFMC) deployment with functional responsive layout and click-tracking infrastructure. Two blocking issues require resolution before production send: a broken pixel URL and a `[Test]:` subject-line prefix left in place.

---

### 2. Link & Tracking Issues

**Broken pixel URL — missing protocol**
The Validity/Return Path inbox monitoring pixel has no protocol prefix:
```html
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0..."
```
Without `https://`, this resolves as a relative path and the pixel fires against whatever host rendered the email. Inbox placement reporting will be silently dropped.

**HTTP-only pixel (ink1000.com)**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8004129222&mi_ecmp=...
```
Plain HTTP. Modern mail clients (Gmail, Apple Mail) block mixed-content loads by default; this pixel will not fire in most environments. Also flagged by QA.

**32 click-wrapped links not verified**
All outbound links route through `click.emails.skechers.com`. QA skipped HTTP probes on all 32. UTM parameter presence and destination URL correctness are unverified (see §6).

**Hardcoded subscriber IDs in tracking pixels**
`mi_u=8004129222` (ink1000) and `partner_uid=32884357` (Krux sub-ID beacon) appear to be literal test values, not merge tokens. If sent to production as-is, all subscribers' events will be attributed to one test subscriber.
```html
src="https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=32884357"
src="http://www.ink1000.com/...?mi_u=8004129222&..."
```

---

### 3. Rendering & Accessibility

**All `image.emails.skechers.com` assets served over HTTP**
Thirteen production images load from `http://image.emails.skechers.com/lib/...`. HTTPS is available on this domain (standard SFMC image hosting). Gmail and Outlook.com will proxy or block HTTP image requests, causing broken images for a significant subscriber share. Affected assets include the logo, app-store badges, social icons, and footer icons.

**Missing alt text on two images**
- `o.gif` (ink1000 tracking pixel) — alt="" is absent, not just empty
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — decorative or unknown; no alt attribute

**Malformed `<meta>` tags**
Both meta tags in `<head>` omit the required `http-equiv` attribute:
```html
<meta content="text/html; charset=utf-8" />      <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                         <!-- missing http-equiv="X-UA-Compatible" -->
```
Without `http-equiv`, these tags are inert.

**Duplicate and overlapping media queries**
The `375px` and `640px` breakpoints contain identical rule sets. A third `480px` breakpoint in a separate `<style>` block partially overlaps both. No functional difference between them is apparent — only dead CSS weight and maintenance risk.

**`maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Prevents user zoom on mobile. This violates WCAG 1.4.4 (Resize Text) and is blocked by default in iOS Safari 10+.

**`-webkit-text-size-adjust: none`**
Applied globally via `* {}`. This disables automatic text scaling on iOS, which can render small-print legal text unreadable on older devices.

---

### 4. Personalization & Merge Tokens

**Subject line not production-ready**
The subject line as delivered:
```
[Test]: PRO_US_NONPURCLICK_U_SITEBUNDLE_NONPURCH_EN_04152026Spring Styles + 20% Off = The Perfect Pair
```
Two issues: the `[Test]:` test-send prefix was not stripped, and the campaign ID is concatenated directly to the consumer-facing subject copy with no delimiter or space. Both will render verbatim in subscriber inboxes if sent without correction.

**Krux SHA-256 beacon** — The first Krux pixel passes `partner_uid=e5a36492fb...` (a 64-character hex string consistent with a SHA-256 email hash). This appears to be a dynamic merge value from SFMC; verify it resolves correctly in production rather than sending the test subscriber's hash universally.

No unfired or unresolved AMPscript/HML merge tokens were visible in the truncated source.

---

### 5. Compliance

**SPF/DKIM authentication status unknown**
QA could not retrieve `Authentication-Results` headers via the AgentMail relay. SPF and DKIM pass/fail status is unverified. Confirm both pass for `emails.skechers.com` before production send to avoid inbox filtering.

**CAN-SPAM / unsubscribe** — Source is truncated; unsubscribe link and physical mailing address presence cannot be confirmed from the available HTML. Verify these exist in the footer of the full template.

No List-Unsubscribe header was surfaced in the QA data. SFMC typically injects this at send time; confirm it is enabled in the sending configuration.

---

### 6. Email-to-Site Continuity

Because all 32 outbound links are wrapped by `click.emails.skechers.com` and QA skipped probing them, UTM parameters on destination URLs are **unverified**. The campaign slug `PRO_US_NONPURCLICK_U_SITEBUNDLE_NONPURCH_EN_04152026` is consistent across all three pixel trackers, which is a positive signal for attribution coherence — but the actual `utm_campaign`, `utm_source`, and `utm_medium` values on landing pages need manual spot-check before send.

No issues found with the preheader/subject alignment ("Or Stock Up with BOGO 50% Off" preheader is coherent with the offer, from a structural standpoint).

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Blocker** | `[Test]:` prefix in subject line | Strip before production send |
| **Blocker** | Campaign ID concatenated into subject copy | Insert space/delimiter or remove from subject |
| **Blocker** | Return Path pixel has no protocol | Change to `https://pixel.app.returnpath.net/...` |
| **Blocker** | Hardcoded subscriber IDs in ink1000 + Krux sub-ID pixels | Replace `mi_u=8004129222` and `partner_uid=32884357` with SFMC merge tokens |
| **High** | 13 images served over HTTP | Change all `http://image.emails.skechers.com/` srcs to `https://` |
| **High** | ink1000 pixel over HTTP | Change to `https://` or remove if redundant with SFMC open pixel |
| **High** | SPF/DKIM unverified | Confirm both pass via an authenticated relay before send |
| **Medium** | Malformed `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
| **Medium** | Two images missing alt text | Add descriptive (or empty `alt=""`) attributes |
| **Medium** | UTM parameters unverified | Spot-check 3–5 destination URLs by following click-redirect chain |
| **Low** | `maximum-scale=1` in viewport | Remove or raise to `5` for accessibility compliance |
| **Low** | Duplicate media query blocks | Consolidate `375px`/`480px`/`640px` into a single coherent breakpoint set |
| **Low** | `-webkit-text-size-adjust: none` | Change to `100%` to allow OS-level text scaling |
## Recent history

- [[2026-04-14-test-pro-us-retpuropen-u-sitebundle-retail-en-04152026your-perfect-pair-bogo-50-]] — 4/10 (2026-04-14)
- [[2026-04-14-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04152026spring-styles-bogo-50-off-the]] — 3/10 (2026-04-14)
- [[2026-04-14-test-pro-us-na-u-sitebundle-full-en-04152026spring-styles-bogo-50-off-the-perfec-cf2310ce-75b7-4c73-985b-]] — 4/10 (2026-04-14)

