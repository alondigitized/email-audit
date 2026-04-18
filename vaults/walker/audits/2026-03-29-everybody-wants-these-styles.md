---
slug: 2026-03-29-everybody-wants-these-styles
type: email
date: 2026-03-29
persona: walker
score: "6/10"
sender: SKECHERS
subject: Everybody Wants These Styles
tags: [email, score-6, sender/skechers]
---
# Everybody Wants These Styles
**Score:** 6/10 · **Type:** Email audit · **2026-03-29**
## Executive summary

- A mid-funnel, catalog-style email anchored by a 50% off promotion and organized around four product category sections. The structure is clear and methodical, but the hero banner is small and visually underpowered relative to the discount being offered. The email reads more like a browse-and-discover tool than a high-urgency promotional send, which may suppress click-through on what is actually a strong deal.
- Solid product organization and a meaningful offer, but execution buries the lead. The 50% off headline is the most important thing in this email and it's treated like a navbar item.

## What's working

- **Four-category architecture** (Sandals, Hands Free Slip-Ins, Arch Fit, New & For You) gives the email a clear scannable spine — recipients can self-select quickly
- **"Most Searched Styles"** framing is smart social proof positioning without being hyperbolic
- **Product imagery** is clean and consistent across all modules — no broken images visible
- **"New & For You" personalization signal** adds relevance cue at the bottom of the product section
- **Footer utility** is complete — unsubscribe, social icons, brand lockup all present and visible

## What's weak

- **Hero is the weakest visual element**: The 50% off offer appears as a small banner at the very top rather than a commanding, full-width hero. A 50% discount deserves far more visual real estate
- **CTA buttons are generic and repetitive**: "Shop Now," "Shop Sandals," "Shop Women's," etc. appear in identical styling across every module — no visual hierarchy between primary and secondary actions
- **Category headers lack energy**: Text labels ("Sandals," "Hands Free Slip-Ins," "Arch Fit") read like navigation tabs, not aspirational prompts
- **No urgency mechanism visible**: With a 50% off offer, the absence of any deadline, countdown, or limited-quantity language is a conversion leak
- **Bottom product grid is cramped**: The "New & For You" product thumbnails are small and the names difficult to read at render size

## Recommendations

- 1. **Redesign the hero**: Make 50% off full-width, large type, with a single focused CTA. This offer is strong enough to anchor the entire email
- 2. **Add urgency language**: "Ends Sunday" or "While Supplies Last" directly beneath the hero converts browsers to buyers
- 3. **Differentiate CTAs visually**: Use a high-contrast primary button for the hero offer; secondary category buttons can be outlined or smaller
- 4. **Strengthen category headers**: Replace flat labels with active language — "Walk All Day" for Arch Fit, "No-Hands, No-Hassle" for Slip-Ins
- 5. **Increase thumbnail size or reduce items** in the New & For You grid — fewer, larger product cards will outperform a crowded grid
- | Priority | Issue | Fix |
- |---|---|---|
- | **High** | All `image.emails.skechers.com` image URLs use HTTP | Update CDN references to `https://image.emails.skechers.com/...` across the template |
- | **High** | `http://www.ink1000.com` open-tracker pixel uses HTTP | Replace with HTTPS endpoint or remove if redundant with SFMC open tracking |
- | **High** | Returnpath pixel has no protocol in `src` | Use full URL: `https://pixel.app.returnpath.net/pixel.gif?r=...` |
- | **Medium** | SPF/DKIM unverified | Inspect `Authentication-Results` on a live received copy; confirm `emails.skechers.com` is covered by Skechers' DMARC policy |
- | **Medium** | 4 images missing `alt` text | Add descriptive alt text for `49468f73`, `00100b23`, `fc08601a` PNGs; decorative-only images can use `alt=""` |
- | **Low** | Malformed `<meta>` IE compat tag | Add `http-equiv="X-UA-Compatible"` attribute |
- | **Low** | UTM chain unverifiable from source | Sample 2–3 decoded redirect URLs post-send to confirm UTM params reach destination pages |

## Full review
## Executive Summary

A mid-funnel, catalog-style email anchored by a 50% off promotion and organized around four product category sections. The structure is clear and methodical, but the hero banner is small and visually underpowered relative to the discount being offered. The email reads more like a browse-and-discover tool than a high-urgency promotional send, which may suppress click-through on what is actually a strong deal.

---

## Business Impact Score: 6/10

Solid product organization and a meaningful offer, but execution buries the lead. The 50% off headline is the most important thing in this email and it's treated like a navbar item.

---

## What's Working

- **Four-category architecture** (Sandals, Hands Free Slip-Ins, Arch Fit, New & For You) gives the email a clear scannable spine — recipients can self-select quickly
- **"Most Searched Styles"** framing is smart social proof positioning without being hyperbolic
- **Product imagery** is clean and consistent across all modules — no broken images visible
- **"New & For You" personalization signal** adds relevance cue at the bottom of the product section
- **Footer utility** is complete — unsubscribe, social icons, brand lockup all present and visible

---

## What's Weak

- **Hero is the weakest visual element**: The 50% off offer appears as a small banner at the very top rather than a commanding, full-width hero. A 50% discount deserves far more visual real estate
- **CTA buttons are generic and repetitive**: "Shop Now," "Shop Sandals," "Shop Women's," etc. appear in identical styling across every module — no visual hierarchy between primary and secondary actions
- **Category headers lack energy**: Text labels ("Sandals," "Hands Free Slip-Ins," "Arch Fit") read like navigation tabs, not aspirational prompts
- **No urgency mechanism visible**: With a 50% off offer, the absence of any deadline, countdown, or limited-quantity language is a conversion leak
- **Bottom product grid is cramped**: The "New & For You" product thumbnails are small and the names difficult to read at render size

---

## Recommendations

1. **Redesign the hero**: Make 50% off full-width, large type, with a single focused CTA. This offer is strong enough to anchor the entire email
2. **Add urgency language**: "Ends Sunday" or "While Supplies Last" directly beneath the hero converts browsers to buyers
3. **Differentiate CTAs visually**: Use a high-contrast primary button for the hero offer; secondary category buttons can be outlined or smaller
4. **Strengthen category headers**: Replace flat labels with active language — "Walk All Day" for Arch Fit, "No-Hands, No-Hassle" for Slip-Ins
5. **Increase thumbnail size or reduce items** in the New & For You grid — fewer, larger product cards will outperform a crowded grid

---

## Bottom Line

The email functions but underperforms its offer. A 50% discount should be visually dominant and urgency-forward. As built, it's a well-organized catalog send that happens to mention a big sale in small print at the top. Fixing the hero alone would materially improve conversion.

---

## Evidence

**Overall purpose:** Drive traffic to Skechers.com across multiple product categories under a 50% off promotional umbrella targeting past/potential buyers with "most searched" social proof framing.

**Hero / primary value proposition:** A narrow banner at the top states "50% OFF" with a "Shop Now" button. Visually understated — the offer is present but not prominent. No expiration date or urgency copy visible.

**Membership / benefits section:** No loyalty or membership module visible in this render.

**Product discoverability / recommendation modules:** Four distinct category modules — Sandals (two product tiles), Hands Free Slip-Ins (two tiles), Arch Fit (two tiles), and New & For You (personalized product grid). Layout is consistent and functional.

**Utility / secondary modules:** Footer includes social media icons, unsubscribe link, and brand address. Standard and complete. A "Download Our App" prompt appears to be present in the lower section.

**Bugs / friction / clarity issues:** No broken images detected. The New & For You product thumbnails are very small and product names may be difficult to read on mobile. No other visible rendering defects.

---

## Technical Audit

## Technical Audit — "Everybody Wants These Styles" (Skechers)
**From:** no-reply@emails.skechers.com | **Audience:** NONPUR segment | **Campaign:** MKG_US_NONPUR_U_BEST_NONPURCH_EN_03292026

---

### 1. Technical Summary
The email is structurally sound with standard Salesforce Marketing Cloud scaffolding, but has a pervasive HTTP-vs-HTTPS issue affecting all hosted images on `image.emails.skechers.com`, plus a third-party tracking pixel served over plain HTTP. SPF/DKIM status could not be verified via the relay.

---

### 2. Link & Tracking Issues

**Tracking pixels — mixed protocol and missing alt:**
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8107766165&mi_ecmp=MKG_US_NONPUR_U_BEST_NONPURCH_EN_03292026` — served over HTTP; no `alt` attribute. Third-party open-tracker pixel will be blocked by clients enforcing HTTPS-only image loading (Gmail, Apple Mail).
- Two `beacon.krxd.net` pixels and one `click.emails.skechers.com` open pixel are HTTPS — no issue.
- Returnpath pixel `pixel.app.returnpath.net/pixel.gif` — no protocol prefix in `src` (relative URL), which will resolve to a relative path and silently fail in most clients.

**Click links:** 26 tracked redirect links via `click.emails.skechers.com` — HTTPS, standard SFMC wrapped format. No naked destination URLs to validate landing page UTMs directly from source alone (see §6).

---

### 3. Rendering & Accessibility

**HTTP image sources (will be blocked in secure clients):**
All 16+ images hosted at `http://image.emails.skechers.com/lib/fe3115707564047a731c78/...` use HTTP, not HTTPS. Affected images include:
- Skechers logo: `dde00662-169f-447d-b0e2-fc65f6c2290c.png`
- Footer icons: App Store (`0ec56c9f`), Google Play (`9bb508d0`), AfterPay (`07cb60b5`), Instagram (`b782e0aa`), Twitter (`d76a5487`), Facebook (`a5c4cae0`), Pinterest (`573ab181`), YouTube (`8c5738fc`)
- Additional unnamed images: `49468f73`, `00100b23`, `fc08601a`

This is the highest-severity finding. Gmail (since 2013), Outlook.com, and Apple Mail proxy or block HTTP image sources — recipients will see broken images or placeholder boxes.

**Missing alt text on 4 images:**
- `o.gif` (ink1000 tracking pixel) — low impact
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unknown purpose, no fallback text
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — unknown purpose, no fallback text
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — unknown purpose, no fallback text

Named images (logo, social icons, app badges) have descriptive alt text — only the unnamed ones are missing it.

**Responsive/rendering structure:** Mobile/desktop show/hide logic uses CSS `display:none` toggling with `@media` queries — standard approach, no issues. `max-width:375px` breakpoint handles narrow mobile. `-webkit-text-size-adjust: none` is set globally, which prevents iOS from scaling up small text — intentional but worth noting for legibility.

**`<meta content="IE=Edge" />` — malformed:** Missing `http-equiv="X-UA-Compatible"` attribute. Should be `<meta http-equiv="X-UA-Compatible" content="IE=Edge" />`. Non-blocking in modern clients but incorrect.

---

### 4. Personalization & Merge Tokens

No exposed or broken merge tokens found in the truncated source. Campaign ID `MKG_US_NONPUR_U_BEST_NONPURCH_EN_03292026` is correctly embedded in tracking pixel URLs, consistent with the audience segment. No `%%variable%%` or `{{handlebars}}` syntax left unresolved.

---

### 5. Compliance

**CAN-SPAM:** Physical address and unsubscribe link presence cannot be confirmed from the truncated source, but standard SFMC footers typically include these — flag for manual verification on full render.

**Authentication:**
- SPF/DKIM status unknown — the AgentMail relay did not surface `Authentication-Results` headers. Sending domain is `emails.skechers.com` (subdomain); DMARC alignment should be verified directly via DNS or header inspection on a live received copy.
- No issues with the `From` display name or domain spoofing risk from the visible source.

**Unsubscribe:** Not visible in truncated source — must confirm `List-Unsubscribe` header and in-body link are present in the full email.

---

### 6. Email-to-Site Continuity

All CTAs use SFMC click-redirect URLs (`click.emails.skechers.com/?qs=...` — AES-encrypted parameters), so UTM values cannot be inspected from source. To verify:
- Decode a sample redirect and confirm destination URLs carry `utm_source`, `utm_medium`, `utm_campaign` (expected: `MKG_US_NONPUR_U_BEST_NONPURCH_EN_03292026`), and `utm_content` per variant.
- Confirm landing pages match the BOGO 50% off offer stated in the preheader: `"Buy One, Get One 50% Off Our Most Loved Styles"`.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **High** | All `image.emails.skechers.com` image URLs use HTTP | Update CDN references to `https://image.emails.skechers.com/...` across the template |
| **High** | `http://www.ink1000.com` open-tracker pixel uses HTTP | Replace with HTTPS endpoint or remove if redundant with SFMC open tracking |
| **High** | Returnpath pixel has no protocol in `src` | Use full URL: `https://pixel.app.returnpath.net/pixel.gif?r=...` |
| **Medium** | SPF/DKIM unverified | Inspect `Authentication-Results` on a live received copy; confirm `emails.skechers.com` is covered by Skechers' DMARC policy |
| **Medium** | 4 images missing `alt` text | Add descriptive alt text for `49468f73`, `00100b23`, `fc08601a` PNGs; decorative-only images can use `alt=""` |
| **Low** | Malformed `<meta>` IE compat tag | Add `http-equiv="X-UA-Compatible"` attribute |
| **Low** | UTM chain unverifiable from source | Sample 2–3 decoded redirect URLs post-send to confirm UTM params reach destination pages |
## Recent history

- [[2026-03-29-did-you-forget-something]] — 6/10 (2026-03-28)
- [[2026-03-29-back-to-the-70s-with-handball-spezial]] — 4/10 (2026-03-28)
- [[2026-03-29-the-messi-collection]] — 5/10 (2026-03-28)

