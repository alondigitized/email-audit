---
slug: 2026-04-10-test-mkg-us-nonpurclick-u-slipin-nonpurch-en-04132026-v2from-sneakers-to-sandals
type: email
date: 2026-04-10
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPURCLICK_U_SLIPIN_NONPURCH_EN_04132026_V2From Sneakers to Sandals it's Slip-In Season 🤩"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NONPURCLICK_U_SLIPIN_NONPURCH_EN_04132026_V2From Sneakers to Sandals it's Slip-In Season 🤩
**Score:** 5/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A seasonally relevant campaign built around three product pillars — Cozy Fit, Max Cushioning, and Sandals — with a 20% off single pair offer as the hook. The email is clean, legible, and well-structured, but it suffers from a critical preview text failure that destroys the first impression before the email is even opened, and a hero headline that doesn't match the email's declared theme. The offer gets buried and the CTA strategy is weak.
- Competent execution undermined by a show-stopping pre-open defect and messaging misalignment that erodes the seasonal narrative.

## What's working

- **Three-pillar structure** (Cozy Fit / Max Cushioning / Sandals) gives the email a clear, scannable spine. Each section has its own visual and label, making it easy to self-select.
- **20% off banner** at the top is immediately visible — the offer is above the fold.
- **Sandals module** is the strongest visual; the imagery reads as seasonal and aspirational.
- **Category nav links** (Women, Men, Kids, Clothing, New Arrivals, Sale) at the bottom are a useful utility layer without cluttering the main body.
- **App download and social links** are cleanly tucked into the footer — functional without demanding attention.

## What's weak

- **Preview text is raw JSON-LD schema markup.** The inbox preview reads: `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — this is the single most damaging issue in the email. It kills open rate before the subject line even gets a chance to work.
- **Hero headline says "NEW STYLE DROP," not "Slip-In Season."** The subject line promises a Slip-In Season narrative; the hero pivots to a generic new-arrival frame. These don't reinforce each other.
- **Single shared CTA ("SHOP FEATURED STYLES")** appears once, below all three product sections. No section-specific CTAs. Every pillar funnels to the same destination, eliminating the browse intent signal each section could have captured individually.
- **20% off offer has no urgency or framing.** There's no expiration, no code shown, no "limited time" signal. The discount appears visually but doesn't motivate action.
- **Cozy Fit imagery is the weakest** — the shoe sits in a low-contrast environment and doesn't communicate warmth, comfort, or season.

## Recommendations

- 1. **Fix the preview text immediately.** This is a pre-send QA failure that should be caught before deployment. Replace it with a 90-character hook that mirrors the subject line ("Slip into your new warm-weather rotation — 20% off one pair.").
- 2. **Align the hero to the Slip-In theme.** "New Style Drop" is interchangeable with any email. Rewrite to make the seasonal transition the lead: e.g., "Slip-In Season is here."
- 3. **Give each product pillar its own CTA.** "Shop Cozy Fit," "Shop Max Cushioning," "Shop Sandals" — one button per section increases click depth and lets you measure category intent separately.
- 4. **Add urgency to the 20% offer.** Even a vague "this week only" framing increases conversion on discount-led emails. Right now it reads as a permanent standing offer.
- 5. **Punch up the Cozy Fit visual.** Swap for lifestyle imagery — feet up, indoor cozy context — that earns its own section.
- | Priority | Action |
- |---|---|
- | **P0** | Suppress/retract send if `[Test]:` subject was deployed to a live segment |
- | **P0** | Fix empty first-name fallback in ESP template before next send |
- | **P1** | Switch all `image.emails.skechers.com` asset URLs from `http://` to `https://` at the CDN/template level |
- | **P1** | Add `https://` protocol to Return Path pixel `src` |
- | **P1** | Confirm DKIM signing on `emails.skechers.com` and add `Authentication-Results` / `List-Unsubscribe-Post` headers |
- | **P2** | Add `alt` attribute to `49468f73-….png` |
- | **P2** | Change `webkit-text-size-adjust: none` → `100%` |
- | **P3** | Consolidate duplicate `<style>` blocks and add missing `http-equiv` attributes to `<meta>` tags |
- | **P3** | Review Krux/third-party DMP data-sharing disclosure against current privacy policy |

## Full review
## Email Review: Skechers — "From Sneakers to Sandals, It's Slip-In Season"

---

### 1. Executive Summary

A seasonally relevant campaign built around three product pillars — Cozy Fit, Max Cushioning, and Sandals — with a 20% off single pair offer as the hook. The email is clean, legible, and well-structured, but it suffers from a critical preview text failure that destroys the first impression before the email is even opened, and a hero headline that doesn't match the email's declared theme. The offer gets buried and the CTA strategy is weak.

---

### 2. Business Impact Score: 5/10

Competent execution undermined by a show-stopping pre-open defect and messaging misalignment that erodes the seasonal narrative.

---

### 3. What's Working

- **Three-pillar structure** (Cozy Fit / Max Cushioning / Sandals) gives the email a clear, scannable spine. Each section has its own visual and label, making it easy to self-select.
- **20% off banner** at the top is immediately visible — the offer is above the fold.
- **Sandals module** is the strongest visual; the imagery reads as seasonal and aspirational.
- **Category nav links** (Women, Men, Kids, Clothing, New Arrivals, Sale) at the bottom are a useful utility layer without cluttering the main body.
- **App download and social links** are cleanly tucked into the footer — functional without demanding attention.

---

### 4. What's Weak

- **Preview text is raw JSON-LD schema markup.** The inbox preview reads: `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — this is the single most damaging issue in the email. It kills open rate before the subject line even gets a chance to work.
- **Hero headline says "NEW STYLE DROP," not "Slip-In Season."** The subject line promises a Slip-In Season narrative; the hero pivots to a generic new-arrival frame. These don't reinforce each other.
- **Single shared CTA ("SHOP FEATURED STYLES")** appears once, below all three product sections. No section-specific CTAs. Every pillar funnels to the same destination, eliminating the browse intent signal each section could have captured individually.
- **20% off offer has no urgency or framing.** There's no expiration, no code shown, no "limited time" signal. The discount appears visually but doesn't motivate action.
- **Cozy Fit imagery is the weakest** — the shoe sits in a low-contrast environment and doesn't communicate warmth, comfort, or season.

---

### 5. Recommendations

1. **Fix the preview text immediately.** This is a pre-send QA failure that should be caught before deployment. Replace it with a 90-character hook that mirrors the subject line ("Slip into your new warm-weather rotation — 20% off one pair.").
2. **Align the hero to the Slip-In theme.** "New Style Drop" is interchangeable with any email. Rewrite to make the seasonal transition the lead: e.g., "Slip-In Season is here."
3. **Give each product pillar its own CTA.** "Shop Cozy Fit," "Shop Max Cushioning," "Shop Sandals" — one button per section increases click depth and lets you measure category intent separately.
4. **Add urgency to the 20% offer.** Even a vague "this week only" framing increases conversion on discount-led emails. Right now it reads as a permanent standing offer.
5. **Punch up the Cozy Fit visual.** Swap for lifestyle imagery — feet up, indoor cozy context — that earns its own section.

---

### 6. Bottom Line

The bones are solid: three product stories, a discount, clean layout. But the preview text bug is a critical send error that needs to be caught in QA before this goes to live audience. The messaging misalignment between subject and hero is a missed opportunity. Add per-pillar CTAs and urgency framing and this becomes a meaningfully stronger campaign.

---

### 7. Evidence

**Overall purpose:** Drive purchases across three Skechers product categories (Cozy Fit, Max Cushioning, Sandals) using a seasonal Slip-In framing and a 20% single-pair discount.

**Hero / primary value proposition:** "NEW STYLE DROP" headline over lifestyle photography of people in an outdoor setting. Disconnect from the Slip-In Season subject line. The 20% off banner sits above the hero and is visible but not tied to any urgency or CTA.

**Membership / benefits section:** None visible. No loyalty, rewards, or Skechers+ content in this send.

**Product discoverability / recommendation modules:** Three clearly labeled sections — Cozy Fit, Max Cushioning, Sandals — each with a product image and section header. Structure is logical and easy to parse. No individual CTAs per section; they all funnel to a single shared "SHOP FEATURED STYLES" button below.

**Utility / secondary modules:** Category navigation bar (Women, Men, Kids, Clothing, New Arrivals, Sale), app download with store badges, social media icons. All functional and appropriately low-profile.

**Bugs / friction / clarity issues:** Preview text renders raw JSON-LD schema markup in the inbox — a critical visible defect that breaks the pre-open experience entirely. Subject line carries a `[Test]:` prefix confirming this is a pre-send review; that prefix must be stripped before deployment.

---

## Technical Audit

## Technical Audit — Skechers Slip-In Season (`MKG_US_NONPURCLICK_U_SLIPIN_NONPURCH_EN_04132026_V2`)

---

### 1. Technical Summary

The email has one confirmed broken-experience bug (empty personalization slot) and a systemic HTTP image-serving issue affecting 11+ assets. A missing protocol on the Return Path pixel renders it non-functional, and the `[Test]:` subject line prefix indicates this may be a test variant not intended for production deployment.

---

### 2. Link & Tracking Issues

**[CRITICAL] Subject line contains `[Test]:` prefix**
Subject: `[Test]: MKG_US_NONPURCLICK_U_SLIPIN_NONPURCH_EN_04132026_V2...`
If sent to a live list, this is a production send with a QA-only subject prefix. Verify deployment targeting before any further sends.

**[FAIL] Return Path pixel has no protocol — broken URL**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
Missing `https://` makes this a relative URL. Email clients will not resolve relative paths; this inbox placement monitoring pixel fires zero data.

**[INFO] Three third-party DMP match pixels present**
```
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=<hashed_email>
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=64650986
beacon.krxd.net/1x1_ad_impression.gif?confid=so3yexmpm&...
```
SHA-256 hashed email (`partner_uid=9037280d...`) passed to Krux/Salesforce DMP. Confirm this is disclosed in privacy policy as data sharing with third-party advertising platforms.

**[INFO] 27 tracked click links** — all routed through `click.emails.skechers.com`; no direct-link anomalies flagged, but redirect chain depth was not validated.

---

### 3. Rendering & Accessibility

**[WARN] 11 images served over HTTP, not HTTPS**
Gmail, Apple Mail, and Outlook proxy/block non-HTTPS image sources. Affected assets:

| Asset | URL |
|---|---|
| `o.gif` (Epsilon tracking pixel) | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` |
| Skechers logo (`dde00662-…`) | `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/...` |
| Unnamed image (`49468f73-…`) | `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/...` |
| App Store badge | `http://image.emails.skechers.com/…/0ec56c9f-….png` |
| Google Play badge | `http://image.emails.skechers.com/…/9bb508d0-….png` |
| Curbside Pickup icon | `http://image.emails.skechers.com/…/00100b23-….png` |
| AfterPay logo | `http://image.emails.skechers.com/…/07cb60b5-….png` |
| Find A Store icon | `http://image.emails.skechers.com/…/fc08601a-….png` |
| Instagram icon | `http://image.emails.skechers.com/…/b782e0aa-….png` |
| Facebook icon | `http://image.emails.skechers.com/…/a5c4cae0-….png` |
| YouTube icon | `http://image.emails.skechers.com/…/8c5738fc-….png` |

All `image.emails.skechers.com` asset URLs should be `https://`. This is a server-level config issue — the CDN/ESP almost certainly supports TLS.

**[WARN] Two images missing `alt` text**
- `o.gif` (ink1000 pixel): tracking pixels should have `alt=""`  — already has it; confirmed `alt=""`
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`: no `alt` attribute at all. If this is a content image (product, CTA), it's invisible to screen readers and will show a broken icon in images-off clients.

**[WARN] `-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; }
```
`none` rather than `100%` fully disables iOS auto-sizing. This can make text unreadably small on narrow viewports. Use `100%` to preserve legibility while suppressing unwanted scaling.

**[INFO] Duplicate/overlapping media queries across two `<style>` blocks**
`.mobile-hidden`, `.show`, and breakpoint overrides are declared in both a primary `<style>` block (covering `max-width: 375px`, `640px`, `680px`) and a second `<style>` block (`max-width: 480px`). Redundant declarations increase parse weight and create cascade ordering risk.

**[INFO] Two `<meta>` tags missing `http-equiv` attribute**
```html
<meta content="text/html; charset=utf-8" />       <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                          <!-- missing http-equiv="X-UA-Compatible" -->
```
These are inert as written; charset and IE compatibility hints are not applied.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty first-name merge field — broken greeting**
QA confirmed: greeting renders as `"Hi ,"` — the name token resolved to an empty string. This typically indicates either (a) the fallback default was not configured in the ESP template, or (b) subscriber records in this segment have a null `FIRST_NAME` field.

Fix: add a conditional fallback in the ESP template logic, e.g.:
```
%%[ IF EMPTY(FirstName) THEN SET @fname = "there" ELSE SET @fname = FirstName ENDIF ]%%
Hi %%=v(@fname)=%%,
```
(AMPscript syntax for Salesforce Marketing Cloud, adjust for your ESP.)

---

### 5. Compliance

**[WARN] Authentication-Results header absent — SPF/DKIM status unverifiable**
Expected via AgentMail relay; header was not present in the sample. Cannot confirm DKIM signing or SPF alignment. If the sending domain `emails.skechers.com` is not DKIM-signed at send time, inbox placement at Gmail/Yahoo will degrade and DMARC enforcement (if `p=reject` or `p=quarantine`) could cause drops.

**[INFO] Unsubscribe and physical address** — not visible in the truncated HTML source provided; assumed present in footer. Confirm `List-Unsubscribe` header (including `List-Unsubscribe-Post: List-Unsubscribe=One-Click` per RFC 8058) is set by the ESP at send time.

---

### 6. Email-to-Site Continuity

**[INFO] Campaign ID present in Epsilon pixel and Krux impression beacon**
`campaignid=MKG_US_NONPURCLICK_U_SLIPIN_NONPURCH_EN_04132026` is consistently applied in tracking pixels. UTM parameter coverage on click-tracked destination URLs was not directly verifiable (27 links behind click.emails.skechers.com redirect), but the ESP should be configured to append consistent UTMs (`utm_campaign`, `utm_medium=email`, `utm_source=skechers`) to all destination URLs. Validate post-redirect that campaign attribution is not dropped.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Suppress/retract send if `[Test]:` subject was deployed to a live segment |
| **P0** | Fix empty first-name fallback in ESP template before next send |
| **P1** | Switch all `image.emails.skechers.com` asset URLs from `http://` to `https://` at the CDN/template level |
| **P1** | Add `https://` protocol to Return Path pixel `src` |
| **P1** | Confirm DKIM signing on `emails.skechers.com` and add `Authentication-Results` / `List-Unsubscribe-Post` headers |
| **P2** | Add `alt` attribute to `49468f73-….png` |
| **P2** | Change `webkit-text-size-adjust: none` → `100%` |
| **P3** | Consolidate duplicate `<style>` blocks and add missing `http-equiv` attributes to `<meta>` tags |
| **P3** | Review Krux/third-party DMP data-sharing disclosure against current privacy policy |
## Recent history

- [[2026-04-10-test-mkg-us-nonpur180-u-slipin-nonpurch-en-04132026from-sneakers-to-sandals-it-s]] — 5/10 (2026-04-10)
- [[2026-04-10-test-pro-us-retpuropen-u-sitebundle-retail-en-04122026spring-favorites-just-a-cl]] — 4/10 (2026-04-10)
- [[2026-04-11-test-pro-us-nonpur180-u-sitebundle-nonpurch-en-04122026spring-favorites-just-a-c]] — 3/10 (2026-04-10)

