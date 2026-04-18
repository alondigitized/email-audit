---
slug: 2026-04-03-test-mkg-us-nonpuropen-u-new-nonpurch-en-04062026out-with-the-old-into-spring
type: email
date: 2026-04-03
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPUROPEN_U_NEW_NONPURCH_EN_04062026Out with the Old & Into Spring 🌸"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NONPUROPEN_U_NEW_NONPURCH_EN_04062026Out with the Old & Into Spring 🌸
**Score:** 5/10 · **Type:** Email audit · **2026-04-03**
## Executive summary

- A clean, seasonally appropriate spring sale email with solid visual structure and clear gender segmentation. The core message — 20% off, spring refresh — is legible and the layout follows a logical hierarchy. However, the email has a critical send-quality failure: the subject line shipped with `[Test]:` prepended, and the preview text is a raw URL dump. For a non-purchaser acquisition send, those two issues alone are deal-breakers that undermine brand credibility before the email is even opened.
- Strong creative execution dragged down by a live QA failure and a missed opportunity to hook a first-time buyer with a more compelling conversion argument.

## What's working

- **Visual hierarchy is clean.** The SPRING CLEANING hero → Women → Men → Kids flow is intuitive and easy to scan.
- **Offer is surfaced immediately.** The 20% OFF banner sits at the very top, so the value proposition is visible without scrolling.
- **Gender segmentation modules work.** Three distinct shop-by-gender sections keep the path to purchase short. Product photography looks polished.
- **Secondary offer reinforcement.** The 50% OFF callout below the gender modules adds urgency and a tiered deal narrative.
- **Category nav at footer.** Women / Men / Kids / Clothing / New Arrivals / Sale links give fall-through options for browsers who didn't convert on the hero CTAs.

## What's weak

- **Subject line has `[Test]:` in it.** This went live to recipients. It immediately signals an operational error and erodes trust.
- **Preview text is broken.** The preheader shows raw URLs (`Skechers® https://view.emails.skechers.com/?vawpToken=...`). This is the second line of copy recipients read in their inbox — it's doing active damage to open rates and brand perception.
- **Hero is generic for a non-purchaser segment.** "Spring Cleaning" is a fine seasonal hook, but this list has never bought. There's no first-purchase incentive, no social proof, no "here's why Skechers" hook. The offer alone isn't differentiated.
- **20% off vs. 50% off creates confusion.** The banner says 20% off; a module lower says 50% off. No visible explanation of what applies where. This likely increases hesitation rather than urgency.
- **CTA copy is flat.** Every button says "SHOP NOW." No variation, no specificity. For a prospect email, "Shop Women's" or "Find Your Fit" on gender modules would perform better.

## Recommendations

- 1. **Fix the send process immediately.** Implement a pre-send checklist or automated subject-line scan to catch `[Test]:` prefixes and broken preheaders before deployment.
- 2. **Write a real preheader.** Something like "20% off your first order — shop women's, men's & kids' styles" would recover the inbox experience.
- 3. **Add a first-purchase hook to the hero.** A line like "New to Skechers? Here's 20% off to get started" directly addresses the segment and reduces friction.
- 4. **Resolve the 20%/50% offer conflict.** If 50% applies to clearance and 20% to full price, say so. One clear hierarchy (e.g., "Up to 50% off + extra 20% on select styles") is better than two unexplained numbers.
- 5. **Differentiate CTA copy by section.** Swap generic "SHOP NOW" for contextual labels on each gender module to reduce cognitive load and drive click quality.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | **High** | 15 images served over HTTP | Migrate all `http://image.emails.skechers.com` assets to `https://`. This is a systemic template-level fix, not per-send. |
- | **High** | `[Test]:` prefix + campaign ID in subject | Remove test prefix and fix the missing space before deploying to production. |
- | **High** | Krux impression pixel fires in test sends | Add a conditional block to suppress the Krux ad-impression pixel during test/seed sends to avoid polluting campaign attribution. |
- | **Medium** | Missing alt text on 3 content images | Add descriptive `alt` attributes to `49468f73`, `00100b23`, and `fc08601a` PNGs. |
- | **Medium** | `ink1000.com` open pixel is HTTP | Switch to HTTPS endpoint or replace with the SFMC native open-tracking pixel to ensure open-rate accuracy. |
- | **Medium** | Verify `Authentication-Results` at production send | Confirm SPF/DKIM pass and DMARC alignment on a seeded test send before deployment. |
- | **Low** | `maximum-scale=1` blocks user zoom | Remove this constraint or replace with `user-scalable=yes` for WCAG 2.1 SC 1.4.4 compliance. |
- | **Low** | Raw subscriber ID in Krux pixel | Confirm `partner_uid=7187828` is a non-PII internal segment ID, not a subscriber-level identifier. |

## Full review
### 1. Executive Summary

A clean, seasonally appropriate spring sale email with solid visual structure and clear gender segmentation. The core message — 20% off, spring refresh — is legible and the layout follows a logical hierarchy. However, the email has a critical send-quality failure: the subject line shipped with `[Test]:` prepended, and the preview text is a raw URL dump. For a non-purchaser acquisition send, those two issues alone are deal-breakers that undermine brand credibility before the email is even opened.

---

### 2. Business Impact Score: **5/10**

Strong creative execution dragged down by a live QA failure and a missed opportunity to hook a first-time buyer with a more compelling conversion argument.

---

### 3. What's Working

- **Visual hierarchy is clean.** The SPRING CLEANING hero → Women → Men → Kids flow is intuitive and easy to scan.
- **Offer is surfaced immediately.** The 20% OFF banner sits at the very top, so the value proposition is visible without scrolling.
- **Gender segmentation modules work.** Three distinct shop-by-gender sections keep the path to purchase short. Product photography looks polished.
- **Secondary offer reinforcement.** The 50% OFF callout below the gender modules adds urgency and a tiered deal narrative.
- **Category nav at footer.** Women / Men / Kids / Clothing / New Arrivals / Sale links give fall-through options for browsers who didn't convert on the hero CTAs.

---

### 4. What's Weak

- **Subject line has `[Test]:` in it.** This went live to recipients. It immediately signals an operational error and erodes trust.
- **Preview text is broken.** The preheader shows raw URLs (`Skechers® https://view.emails.skechers.com/?vawpToken=...`). This is the second line of copy recipients read in their inbox — it's doing active damage to open rates and brand perception.
- **Hero is generic for a non-purchaser segment.** "Spring Cleaning" is a fine seasonal hook, but this list has never bought. There's no first-purchase incentive, no social proof, no "here's why Skechers" hook. The offer alone isn't differentiated.
- **20% off vs. 50% off creates confusion.** The banner says 20% off; a module lower says 50% off. No visible explanation of what applies where. This likely increases hesitation rather than urgency.
- **CTA copy is flat.** Every button says "SHOP NOW." No variation, no specificity. For a prospect email, "Shop Women's" or "Find Your Fit" on gender modules would perform better.

---

### 5. Recommendations

1. **Fix the send process immediately.** Implement a pre-send checklist or automated subject-line scan to catch `[Test]:` prefixes and broken preheaders before deployment.
2. **Write a real preheader.** Something like "20% off your first order — shop women's, men's & kids' styles" would recover the inbox experience.
3. **Add a first-purchase hook to the hero.** A line like "New to Skechers? Here's 20% off to get started" directly addresses the segment and reduces friction.
4. **Resolve the 20%/50% offer conflict.** If 50% applies to clearance and 20% to full price, say so. One clear hierarchy (e.g., "Up to 50% off + extra 20% on select styles") is better than two unexplained numbers.
5. **Differentiate CTA copy by section.** Swap generic "SHOP NOW" for contextual labels on each gender module to reduce cognitive load and drive click quality.

---

### 6. Bottom Line

The creative is competent and would perform reasonably well if the QA issues weren't there. But they are there — and for a prospect segment that has no prior relationship with the brand, a broken preview text and a `[Test]:` subject line are trust-killers at the most critical moment. Fix the operational failures first; then address the conversion strategy for non-purchasers.

---

### 7. Evidence

**Overall purpose:** Spring seasonal sale email targeting non-purchasing prospects, promoting sitewide discounts to drive a first conversion.

**Hero / primary value proposition:** "SPRING CLEANING" with a lifestyle image and "SHOP NOW" CTA. 20% OFF banner anchors the top. Value prop is present but generic — not calibrated for first-time buyer psychology.

**Membership / benefits section:** Not present. No loyalty or rewards mention visible.

**Product discoverability / recommendation modules:** Three gender-segmented modules (Women, Men, Kids), each with product photography and a "SHOP NOW" button. Clean and functional, though product shots are small at thumbnail size.

**Utility / secondary modules:** 50% OFF sale callout module below the gender grid. Footer category nav (Women, Men, Kids, Clothing, New Arrivals, Sale). Standard footer legal text.

**Bugs / friction / clarity issues (visible in render):**
- `[Test]:` prefix visible in subject line — confirmed live send error
- Preview text renders as a raw URL string — visible in inbox metadata and confirmed broken in context of the send
- Dual discount callouts (20% and 50%) with no visible explanation of scope or stacking rules

---

## Technical Audit

## Technical Audit — Skechers "Out with the Old & Into Spring" (MKG_US_NONPUROPEN_U_NEW_NONPURCH_EN_04062026)

---

### 1. Technical Summary

The email renders with standard SFMC/Salesforce Marketing Cloud infrastructure and passes basic structural checks, but has a systemic HTTP-vs-HTTPS image hosting issue affecting ~15 assets, several missing alt attributes, and an unverifiable authentication chain through the AgentMail relay.

---

### 2. Link & Tracking Issues

**26 click-redirect links skipped** — all routed through `click.emails.skechers.com`, which is the expected SFMC click-tracking domain. No probing was performed; destination URLs and UTM parameter integrity could not be validated at this stage.

**Third-party pixel beacons present:**
- `beacon.krxd.net` (Salesforce DMP/Krux) — fires two pixels: a user-match pixel with a SHA-256 hashed subscriber ID and a campaign impression pixel. The `partner_uid` value `7187828` in the second pixel appears to be a raw subscriber identifier, not hashed — confirm this is an internal ID, not a PII field.
- `ink1000.com` — secondary open-tracking pixel over plain HTTP (see Section 3).
- `pixel.app.returnpath.net` — Validity/Return Path inbox monitoring pixel. No issues.

---

### 3. Rendering & Accessibility

**Critical: Systemic HTTP image sources** — 15 of the email's images are served over `http://image.emails.skechers.com`. Modern email clients (Gmail, Outlook.com, Apple Mail with image proxying) will either block or silently proxy these. Affected assets include the Skechers logo, App Store badge, Google Play badge, all social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), the AfterPay badge, and several unnamed content images:

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/d76a5487-...png  (Twitter)
... (8 additional)
```

The secondary open-tracking pixel is also HTTP: `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — open-tracking data will be unreliable if this pixel is blocked.

**Missing alt text** on 4 images — including the open pixel (`o.gif`) and three content images (`49468f73`, `00100b23`, `fc08601a`). The App Store and Google Play badges have alt text set correctly; social icons appear to have alt text. The three unnamed content images without alt text are the primary gap for screen reader users.

**Subject line contains test prefix** — `[Test]:` is present in the subject: `[Test]: MKG_US_NONPUROPEN_U_NEW_NONPURCH_EN_04062026Out with the Old & Into Spring 🌸`. The campaign ID is also concatenated directly against the subject line without a space separator, suggesting the subject line field was not finalized before this send.

**`maximum-scale=1` in viewport meta** — `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />` disables user zoom, which is an accessibility concern on mobile.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%firstName%%`, `{%- if -%}` blocks) are visible in the truncated HTML. The Krux pixel includes `partner_uid=7187828` — if this maps to a subscriber-level ID rather than a segment ID, confirm it is not exposing PII in a URL parameter.

---

### 5. Compliance

**Authentication unverifiable** — SPF/DKIM/DMARC status could not be confirmed; the `Authentication-Results` header was not passed through the AgentMail relay. The sending domain `emails.skechers.com` is a subdomain, so the DMARC alignment policy of the parent domain (`skechers.com`) applies — this needs verification at send time.

**CAN-SPAM/unsubscribe** — Physical address and unsubscribe link presence cannot be confirmed from the truncated HTML, but these are standard SFMC footer blocks. Verify the full render includes both.

**Test send to production infrastructure** — The `[Test]:` subject prefix and the live Krux impression pixel (`campaignid=MKG_US_NONPUROPEN_U_NEW_NONPURCH_EN_04062026`) firing together suggest this test send is already attributing impressions against the live campaign ID. If the Krux pixel is intended to be suppressed in test sends, it is not.

---

### 6. Email-to-Site Continuity

All 26 destination links are behind `click.emails.skechers.com` redirects; UTM parameter pass-through and landing page alignment cannot be verified without resolving those redirects. The campaign ID embedded in the Krux pixel (`MKG_US_NONPUROPEN_U_NEW_NONPURCH_EN_04062026`) matches the subject line identifier, indicating campaign tagging is consistent at the pixel level.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| **High** | 15 images served over HTTP | Migrate all `http://image.emails.skechers.com` assets to `https://`. This is a systemic template-level fix, not per-send. |
| **High** | `[Test]:` prefix + campaign ID in subject | Remove test prefix and fix the missing space before deploying to production. |
| **High** | Krux impression pixel fires in test sends | Add a conditional block to suppress the Krux ad-impression pixel during test/seed sends to avoid polluting campaign attribution. |
| **Medium** | Missing alt text on 3 content images | Add descriptive `alt` attributes to `49468f73`, `00100b23`, and `fc08601a` PNGs. |
| **Medium** | `ink1000.com` open pixel is HTTP | Switch to HTTPS endpoint or replace with the SFMC native open-tracking pixel to ensure open-rate accuracy. |
| **Medium** | Verify `Authentication-Results` at production send | Confirm SPF/DKIM pass and DMARC alignment on a seeded test send before deployment. |
| **Low** | `maximum-scale=1` blocks user zoom | Remove this constraint or replace with `user-scalable=yes` for WCAG 2.1 SC 1.4.4 compliance. |
| **Low** | Raw subscriber ID in Krux pixel | Confirm `partner_uid=7187828` is a non-PII internal segment ID, not a subscriber-level identifier. |
## Recent history

- [[2026-04-03-test-mkg-us-nonpuropen-u-multi-nonpurch-en-04062026out-with-the-old-into-spring]] — 5/10 (2026-04-03)
- [[2026-04-03-test-mkg-us-na-u-replen-prod-en-04062026-bout-with-the-old-into-spring]] — 6/10 (2026-04-03)
- [[2026-04-03-test-mkg-us-na-u-replen-prod-en-04062026-a-v2give-your-work-shoes-a-glow-up]] — 5/10 (2026-04-03)

