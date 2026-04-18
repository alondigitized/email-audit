---
slug: 2026-04-08-test-pro-us-retpuropen-u-sitebundle-retail-en-04092026the-right-pair-right-now-w
type: email
date: 2026-04-08
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026The right pair, right now, whenever you want to shop!"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026The right pair, right now, whenever you want to shop!
**Score:** 5/10 · **Type:** Email audit · **2026-04-08**
## Executive summary

- This is a standard promotional email anchored by a BOGO 50% off offer, followed by a new arrivals showcase and gender-based category navigation. The structure is logical but the execution is visually compact and low-impact. The hero offer is legible, but the email relies on browsing behavior rather than editorial storytelling to drive conversion — making it a functional catalog mailer that won't stand out in a crowded inbox.
- Competent but forgettable. The promotion is clear, but there's no urgency, no product specificity, and no editorial voice to create desire. This email will convert only shoppers who were already planning to buy.

## What's working

- **Hero offer is immediately readable** — "Buy One, Get One 50% off or 20% off 1 item" is stated plainly at the top with good contrast on white. No confusion about the deal.
- **New Arrivals section has visual variety** — multiple product shots across different silhouettes give the section some life.
- **Gender-based navigation tiles** (Women, Men, Girls, Boys) create clear browsing paths and lower friction for shoppers who know their category.
- **Footer utility is complete** — app download, curbside pickup, store locator, and "in-store only" badge are all visible and organized.

## What's weak

- **Hero image is underwhelming** — the lifestyle shot is small and soft, showing a pair of casual shoes from above on a neutral background. No energy, no context, no aspiration. Doesn't sell the product.
- **"Start With Our New Arrivals" is a weak headline** — it reads like a navigation prompt, not a value statement. There's no reason given to care about these arrivals.
- **Product grid is thumbnail-sized** — the new arrivals products are very small, reducing their ability to drive desire. Individual products are hard to evaluate at a glance.
- **No urgency on the BOGO offer** — no end date, no "limited time," no threshold minimum. Nothing compels action now vs. later.
- **Category tiles (Women, Men, Girls, Boys) feel disconnected** — they appear after the product grid as a flat nav structure, adding no editorial context. They read as footer links elevated to a module.
- **No personalization signal visible** — for a re-engagement / open purchaser audience (RETPUROPEN), this email shows no indication of relevance to past purchases or browsing behavior.
- **Subject line carries test copy** — "[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026" is visible in the sender metadata and would be a significant deliverability/brand issue in a real send.

## Recommendations

- 1. **Replace the hero image** with a high-energy lifestyle or on-feet shot that creates context and aspiration around the BOGO deal — a product on a body, in motion, in a setting.
- 2. **Add a deadline to the BOGO offer** — even "This Weekend Only" increases urgency meaningfully.
- 3. **Reframe the New Arrivals headline** — e.g., "Fresh Styles Worth a Second Look" or tie it to the season. Give shoppers a reason, not just a command.
- 4. **Increase product tile size** in the arrivals grid — fewer products shown larger would drive more click-throughs than many products shown small.
- 5. **For this audience (re-engagement)**, inject a personalized hook — "Based on what you've loved" or a category-specific pull tied to prior purchase signals.
- 6. **Confirm subject line and preview text are cleaned up** before any real deployment — test strings should never be customer-facing.
- | Priority | Issue | Fix |
- |----------|-------|-----|
- | **P0** | `[Test]:` in subject | Strip test prefix before production deployment |
- | **P0** | Campaign ID concatenated into subject | Add space/delimiter in subject-line template; confirm variable substitution |
- | **P1** | Returnpath pixel has no URL protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
- | **P1** | 15 images served over HTTP | Update all `image.emails.skechers.com` and `ink1000.com` srcs to `https://` |
- | **P1** | SPF/DKIM status unknown | Pull full message headers from a seed inbox and confirm `Authentication-Results: pass` |
- | **P2** | 4 images missing alt text | Add descriptive `alt` to content images; `alt=""` to decorative/pixel images |
- | **P2** | Malformed charset/IE meta tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` attributes |
- | **P2** | Plain-text URL ratio at 74% | Reduce URL density in plain-text part or add more prose content |
- | **P3** | Krxd `partner_uid` hardcoded | Confirm these are dynamic merge fields, not seed-account values |
- | **P3** | UTM params unverifiable | Run a click trace or use SFMC link preview to confirm UTM completeness |

## Full review
## 1. Executive Summary

This is a standard promotional email anchored by a BOGO 50% off offer, followed by a new arrivals showcase and gender-based category navigation. The structure is logical but the execution is visually compact and low-impact. The hero offer is legible, but the email relies on browsing behavior rather than editorial storytelling to drive conversion — making it a functional catalog mailer that won't stand out in a crowded inbox.

---

## 2. Business Impact Score: 5/10

Competent but forgettable. The promotion is clear, but there's no urgency, no product specificity, and no editorial voice to create desire. This email will convert only shoppers who were already planning to buy.

---

## 3. What's Working

- **Hero offer is immediately readable** — "Buy One, Get One 50% off or 20% off 1 item" is stated plainly at the top with good contrast on white. No confusion about the deal.
- **New Arrivals section has visual variety** — multiple product shots across different silhouettes give the section some life.
- **Gender-based navigation tiles** (Women, Men, Girls, Boys) create clear browsing paths and lower friction for shoppers who know their category.
- **Footer utility is complete** — app download, curbside pickup, store locator, and "in-store only" badge are all visible and organized.

---

## 4. What's Weak

- **Hero image is underwhelming** — the lifestyle shot is small and soft, showing a pair of casual shoes from above on a neutral background. No energy, no context, no aspiration. Doesn't sell the product.
- **"Start With Our New Arrivals" is a weak headline** — it reads like a navigation prompt, not a value statement. There's no reason given to care about these arrivals.
- **Product grid is thumbnail-sized** — the new arrivals products are very small, reducing their ability to drive desire. Individual products are hard to evaluate at a glance.
- **No urgency on the BOGO offer** — no end date, no "limited time," no threshold minimum. Nothing compels action now vs. later.
- **Category tiles (Women, Men, Girls, Boys) feel disconnected** — they appear after the product grid as a flat nav structure, adding no editorial context. They read as footer links elevated to a module.
- **No personalization signal visible** — for a re-engagement / open purchaser audience (RETPUROPEN), this email shows no indication of relevance to past purchases or browsing behavior.
- **Subject line carries test copy** — "[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026" is visible in the sender metadata and would be a significant deliverability/brand issue in a real send.

---

## 5. Recommendations

1. **Replace the hero image** with a high-energy lifestyle or on-feet shot that creates context and aspiration around the BOGO deal — a product on a body, in motion, in a setting.
2. **Add a deadline to the BOGO offer** — even "This Weekend Only" increases urgency meaningfully.
3. **Reframe the New Arrivals headline** — e.g., "Fresh Styles Worth a Second Look" or tie it to the season. Give shoppers a reason, not just a command.
4. **Increase product tile size** in the arrivals grid — fewer products shown larger would drive more click-throughs than many products shown small.
5. **For this audience (re-engagement)**, inject a personalized hook — "Based on what you've loved" or a category-specific pull tied to prior purchase signals.
6. **Confirm subject line and preview text are cleaned up** before any real deployment — test strings should never be customer-facing.

---

## 6. Bottom Line

This email does the basics correctly: clear offer, logical structure, functional navigation. But it's playing not to lose rather than playing to win. The hero is flat, the new arrivals section is undersized, and there's no urgency or personalization for a reactivation audience. A few targeted fixes — deadline on the offer, stronger hero visual, larger product presentation — would materially improve conversion rate.

---

## 7. Evidence

**Overall purpose:** Drive conversion via BOGO 50% promotion with a secondary goal of reintroducing new arrivals to lapsed/open purchasers.

**Hero / primary value proposition:** BOGO 50% or 20% off 1 item, stated cleanly at top. "Shop Now" CTA present. Hero lifestyle image is soft and undersized — not compelling.

**Membership / benefits section:** Not present in this email.

**Product discoverability / recommendation modules:** New Arrivals product grid with ~6–8 thumbnails visible. Separate "Shop Women's / Shop Men's / Shop Girls / Shop Boys" tiles serve as category entry points. No personalized product recommendations visible.

**Utility / secondary modules:** Footer includes Download the App, Curbside Pickup, Store Locator, and an in-store-only badge. Social icons present. Standard legal/unsubscribe footer visible.

**Bugs / friction / clarity issues:** No broken images observed. Subject line contains visible test/internal naming strings. Preview text shows raw URLs — if replicated in the inbox, this is a UX and professionalism issue.

---

## Technical Audit

## Technical Audit — Skechers Retention/Site Bundle Email
**Campaign:** `PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026`
**Date:** 2026-04-08

---

### 1. Technical Summary

Two production-blocking issues are present: the subject line contains an unstripped `[Test]:` prefix and a raw campaign ID token with no delimiter before the human-readable copy. Additionally, 15+ images are served over HTTP rather than HTTPS, and one inbox rendering/delivery pixel is malformed with no URL protocol.

---

### 2. Link & Tracking Issues

**Returnpath pixel missing URL protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `https://` (or `http://`) prefix. This resolves as a relative path and will silently fail to load — inbox placement monitoring via Validity/Returnpath is broken for this send.

**ink1000.com pixel over HTTP**
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=9019601267&mi_ecmp=PRO_US_..."
```
Insecure protocol; blocked by Gmail, Apple Mail, and others that enforce HTTPS content. Also missing `alt=""`.

**25 click-redirect links unverifiable**
All CTAs route through `click.emails.skechers.com` with encrypted `?qs=` payloads. QA tooling correctly skipped HTTP probing — destination URLs and UTM presence cannot be confirmed without decryption or a live click trace.

**Plain-text body is 74% URLs**
3,911 of 5,253 characters in the plain-text part are URLs. Exceeds the 70% threshold flagged by QA — elevated spam-filter risk with aggressive URL-ratio scoring (SpamAssassin `URI_NO_ANCHOR`, similar rules).

---

### 3. Rendering & Accessibility

**HTTP image sources — 15 images**
Every asset on `image.emails.skechers.com` is served over HTTP:
```
src="http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png"
src="http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-..."
```
(plus 13 more). Gmail and Apple Mail proxy/block mixed-content images; affected clients will render broken image placeholders for the logo, app-store badges, social icons, and AfterPay badge.

**Missing alt text — 4 images**
- `o.gif` (ink1000 pixel)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

These have no `alt` attribute at all (not even `alt=""`), which fails WCAG 1.1.1 and degrades screen-reader experience.

**Malformed `<meta>` tags**
```html
<meta content="text/html; charset=utf-8" />   <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                      <!-- missing http-equiv="X-UA-Compatible" -->
```
Both tags are missing their `http-equiv` attribute. The charset declaration is non-functional as written; character encoding will fall back to client detection, which can cause mojibake in Outlook.

---

### 4. Personalization & Merge Tokens

No unresolved merge token syntax (e.g., `%%field%%`, `{{field}}`) is visible in the accessible HTML.

One concern: the Krxd audience-sync beacon contains what appears to be a hardcoded subscriber ID:
```
partner_uid=23615305   (subid beacon)
partner_uid=dcfb8f9ff9fcb768203fc5217a3640ea3757ef19bea63f6e39a448397f4ff387   (sha256 beacon)
```
If this is a seed/QA send, these values being static is expected. Verify these are dynamic merge fields in the production template and not hardcoded to a seed account.

---

### 5. Compliance

**`[Test]:` prefix in subject line — production blocker**
```
Subject: [Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026The right pair, right now...
```
Test flag was not stripped before send. If deployed to live subscribers, this constitutes a misleading subject line under CAN-SPAM § 5(a)(2).

**Campaign ID bleeding into subject copy**
The token `PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026` is concatenated directly against the human-readable subject with no space or delimiter: `...EN_04092026The right pair...`. This indicates a template variable substitution failure or a missing space in the subject-line template.

**SPF/DKIM authentication unverifiable**
QA found no `Authentication-Results` header via the AgentMail relay. Cannot confirm SPF pass or DKIM signature validity. If authentication is failing, Gmail/Yahoo deliverability will be materially impacted under their 2024 sender requirements.

**Unsubscribe:** Not present in the truncated source — assumed to be in the footer (standard for SFMC templates). Must verify a functional List-Unsubscribe header and one-click `List-Unsubscribe-Post` are present in the full message headers.

---

### 6. Email-to-Site Continuity

Cannot confirm UTM parameters on destination URLs — all 25 CTAs use encrypted `click.emails.skechers.com/?qs=` redirects that obscure the final destination. A live click trace or SFMC link preview is required to verify:
- `utm_source`, `utm_medium`, `utm_campaign` are appended
- Campaign ID in UTMs matches `PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026`
- Landing pages resolve (no 404s or redirect loops)

The Krxd impression beacon does carry the correct campaign ID:
```
campaignid=PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04092026
```
This is consistent, but Krxd firing depends on the HTTP image loading — which is currently blocked (see §3).

---

### 7. Recommendations

| Priority | Issue | Fix |
|----------|-------|-----|
| **P0** | `[Test]:` in subject | Strip test prefix before production deployment |
| **P0** | Campaign ID concatenated into subject | Add space/delimiter in subject-line template; confirm variable substitution |
| **P1** | Returnpath pixel has no URL protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
| **P1** | 15 images served over HTTP | Update all `image.emails.skechers.com` and `ink1000.com` srcs to `https://` |
| **P1** | SPF/DKIM status unknown | Pull full message headers from a seed inbox and confirm `Authentication-Results: pass` |
| **P2** | 4 images missing alt text | Add descriptive `alt` to content images; `alt=""` to decorative/pixel images |
| **P2** | Malformed charset/IE meta tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` attributes |
| **P2** | Plain-text URL ratio at 74% | Reduce URL density in plain-text part or add more prose content |
| **P3** | Krxd `partner_uid` hardcoded | Confirm these are dynamic merge fields, not seed-account values |
| **P3** | UTM params unverifiable | Run a click trace or use SFMC link preview to confirm UTM completeness |
## Recent history

- [[2026-04-08-spring-into-comfort-like-you-ve-never-felt-before]] — 5.5/10 (2026-04-08)
- [[2026-04-11-your-cart-expires-soon-rzgoegk0t-k-ndansihenw-g]] — 5/10 (2026-04-08)
- [[2026-04-08-your-items-are-waiting]] — 6/10 (2026-04-08)

