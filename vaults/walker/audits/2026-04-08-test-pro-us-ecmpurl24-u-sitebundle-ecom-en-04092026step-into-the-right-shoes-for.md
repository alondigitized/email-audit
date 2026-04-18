---
slug: 2026-04-08-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04092026step-into-the-right-shoes-for
type: email
date: 2026-04-08
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04092026Step into the right shoes for right now!"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04092026Step into the right shoes for right now!
**Score:** 5/10 · **Type:** Email audit · **2026-04-08**
## Executive summary

- This is a standard Skechers site bundle promotional email centered on a BOGO 50% off offer. It functions adequately as a traffic-driving vehicle but leans heavily on category navigation rather than genuine product storytelling. The hero is the strongest element; everything below it diminishes in urgency and focus. Sent as a test with an exposed internal campaign code in the subject line — not ready for production.
- Competent but generic. The offer is strong; the execution around it doesn't amplify it.

## What's working

- **Hero offer is clear and prominent.** "BUY ONE GET ONE 50% OFF or 20% off 1 item" reads instantly. High contrast, large type, unambiguous.
- **SHOP NOW CTA** in the hero is well-placed.
- **Category 4-tile grid** (Women's / Men's / Girls' / Boys') is functional and scannable — covers the full family without complexity.
- **Utility footer** (App download, Curbside Pickup, Pay Later, Find a Store) is present and organized.

## What's weak

- **Subject line is broken.** `[Test]: PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04092026Step into...` — the internal campaign ID is fused with the marketing copy. This is a production-blocking issue.
- **Preview text shows raw URLs**, not a teaser. Wasted prime inbox real estate.
- **"Start With Our New Arrivals" section underdelivers.** The product strip is tiny — three shoes rendered at thumbnail scale. No product names, no prices, no differentiation. It's decorative rather than persuasive.
- **"Shop Additional Styles" is just a text link list** (Women, Men, Kids, Clothing, New Arrivals, Sale). At this point in the email the reader has already seen all of these categories. No added value.
- **The hero shoe** (a casual navy slip-on) is a soft, generic choice for a BOGO email. Nothing aspirational or season-specific about it to drive "right now" urgency.
- **No price anchoring anywhere.** BOGO 50% is strong but landing without a starting price point makes the value feel abstract.

## Recommendations

- 1. **Block this from sending until the subject line is fixed.** The test ID in the subject is disqualifying.
- 2. **Fix preview text.** Replace raw URLs with a readable hook — something like "BOGO 50% off starts now — shop women's, men's & kids'"
- 3. **Expand the New Arrivals module.** Show 4–6 products with names and prices. This is the one place to drive discovery; right now it's a non-event.
- 4. **Cut "Shop Additional Styles."** It's redundant after the 4-tile grid. Replace with a single high-urgency secondary CTA (e.g., "SALE" with an end-date callout).
- 5. **Tie the hero image to the offer more explicitly.** The shoe shown should feel like the BOGO poster child — something popular, visually strong, season-relevant.
- | Priority | Issue | Fix |
- |---|---|---|
- | **P0** | Strip `[Test]:` prefix and campaign ID from subject | Production subject: `Step into the right shoes for right now!` |
- | **P0** | Fix Return Path pixel — missing protocol | Change to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
- | **P1** | Upgrade all `image.emails.skechers.com` assets to HTTPS | Update CDN or image host config; 14 images affected |
- | **P1** | Upgrade `ink1000.com` pixel to HTTPS | `https://www.ink1000.com/p/up/...` |
- | **P1** | Verify DKIM/SPF authentication before production deploy | Confirm `Authentication-Results` passes via mail header inspection |
- | **P2** | Add `alt` text to 3 content images | Descriptive text for screen readers and images-off clients |
- | **P2** | Fix malformed `<meta>` tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
- | **P2** | Reduce plain-text URL density | Condense or summarize plain-text version to <50% URL chars |
- | **P3** | Change `-webkit-text-size-adjust` from `none` to `100%` | Improves iOS readability and WCAG 1.4.4 compliance |

## Full review
## Email Review: Skechers Spring Fling Site Bundle

---

### 1. Executive Summary

This is a standard Skechers site bundle promotional email centered on a BOGO 50% off offer. It functions adequately as a traffic-driving vehicle but leans heavily on category navigation rather than genuine product storytelling. The hero is the strongest element; everything below it diminishes in urgency and focus. Sent as a test with an exposed internal campaign code in the subject line — not ready for production.

---

### 2. Business Impact Score: 5/10

Competent but generic. The offer is strong; the execution around it doesn't amplify it.

---

### 3. What's Working

- **Hero offer is clear and prominent.** "BUY ONE GET ONE 50% OFF or 20% off 1 item" reads instantly. High contrast, large type, unambiguous.
- **SHOP NOW CTA** in the hero is well-placed.
- **Category 4-tile grid** (Women's / Men's / Girls' / Boys') is functional and scannable — covers the full family without complexity.
- **Utility footer** (App download, Curbside Pickup, Pay Later, Find a Store) is present and organized.

---

### 4. What's Weak

- **Subject line is broken.** `[Test]: PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04092026Step into...` — the internal campaign ID is fused with the marketing copy. This is a production-blocking issue.
- **Preview text shows raw URLs**, not a teaser. Wasted prime inbox real estate.
- **"Start With Our New Arrivals" section underdelivers.** The product strip is tiny — three shoes rendered at thumbnail scale. No product names, no prices, no differentiation. It's decorative rather than persuasive.
- **"Shop Additional Styles" is just a text link list** (Women, Men, Kids, Clothing, New Arrivals, Sale). At this point in the email the reader has already seen all of these categories. No added value.
- **The hero shoe** (a casual navy slip-on) is a soft, generic choice for a BOGO email. Nothing aspirational or season-specific about it to drive "right now" urgency.
- **No price anchoring anywhere.** BOGO 50% is strong but landing without a starting price point makes the value feel abstract.

---

### 5. Recommendations

1. **Block this from sending until the subject line is fixed.** The test ID in the subject is disqualifying.
2. **Fix preview text.** Replace raw URLs with a readable hook — something like "BOGO 50% off starts now — shop women's, men's & kids'"
3. **Expand the New Arrivals module.** Show 4–6 products with names and prices. This is the one place to drive discovery; right now it's a non-event.
4. **Cut "Shop Additional Styles."** It's redundant after the 4-tile grid. Replace with a single high-urgency secondary CTA (e.g., "SALE" with an end-date callout).
5. **Tie the hero image to the offer more explicitly.** The shoe shown should feel like the BOGO poster child — something popular, visually strong, season-relevant.

---

### 6. Bottom Line

The bones are here — strong offer, clean layout, solid utility section — but this email is coasting on the BOGO headline doing all the work. Below the fold it loses momentum fast. Fix the subject line before anything else; the rest is optimization.

---

### 7. Evidence

**Overall purpose:** Drive sitewide traffic via a BOGO 50% off promotion, positioned as a spring bundle email targeting the full Skechers family (men, women, kids).

**Hero / primary value proposition:** BOGO 50% off or 20% off 1 item, featuring a casual navy slip-on shoe. CTA: "SHOP NOW." Clear and high-contrast. Offer reads well.

**Membership / benefits section:** None visible.

**Product discoverability / recommendation modules:** "Start With Our New Arrivals" strip — 3 shoes shown at very small scale with no names or prices. Minimal discoverability value. 4-tile gender grid (Women's, Men's, Girls', Boys') with product imagery is functional.

**Utility / secondary modules:** Download the App, Curbside Pickup, Shop Now Pay Later, Find a Store — all present in the lower third. Social icons in footer.

**Bugs / friction / clarity issues (visible in render):**
- Subject line contains raw internal campaign ID concatenated with marketing copy (`PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04092026Step into...`) — production-blocking.
- Preview text renders as raw URLs rather than readable copy.

---

## Technical Audit

## Technical Audit — Skechers SITEBUNDLE ECOM 04/09/2026

### 1. Technical Summary

This is a pre-production test send (subject contains `[Test]:` prefix) with widespread HTTP image sourcing across all hosted assets and two malformed `<meta>` tags. Authentication status is unverifiable due to missing relay headers.

---

### 2. Link & Tracking Issues

**Plain-text URL density — deliverability risk**
Plain-text version is 72.5% URLs (3,503 / 4,835 chars). Spam filters (SpamAssassin `URI_ONLY` rule family) penalize plain-text bodies dominated by URLs. This ratio exceeds the safe threshold of ~50%.

**Return Path pixel — missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef7...">
```
No `http://` or `https://` prefix. Email clients will treat this as a relative path, rendering the pixel non-functional. Inbox placement monitoring via Return Path/Validity is silently broken.

**26 click-wrapped links unprobed**
All CTAs route through `click.emails.skechers.com` (Salesforce MC redirect). Destination URLs and UTM parameters could not be verified without resolving the redirect chain.

**Third-party DMP pixels present**
Three `beacon.krxd.net` pixels (Krux/Salesforce DMP) for user-matching and impression tracking. These fire against a hashed subscriber UID — confirm privacy policy disclosure covers third-party data sharing.

---

### 3. Rendering & Accessibility

**All `image.emails.skechers.com` assets served over HTTP** (14 images)
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
... (10 more)
```
Gmail, Outlook.com, and Apple Mail will block or proxy-rewrite these. The logo (`dde00662`) and all footer/social icons are at risk of failing to render.

**Ink1000 tracking pixel also HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8021648903&mi_ecmp=...
```

**Missing alt text — 4 images**
- `o.gif` (ink1000 pixel) — no `alt`
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no `alt`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — no `alt`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — no `alt`

Tracking pixels are exempt (empty `alt=""` is correct), but the three content/product images should have descriptive alt text for screen readers and images-off rendering.

**Malformed `<meta>` tags**
```html
<meta content="text/html; charset=utf-8" />         <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                           <!-- missing http-equiv="X-UA-Compatible" -->
```
Both tags are missing their `http-equiv` attribute. The charset declaration is ineffective; UTF-8 encoding is not formally declared to the mail client.

**`-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; ... }
```
Using `none` (vs. `100%`) prevents iOS Mail from scaling small text up for readability. WCAG 1.4.4 (Resize Text) recommends `100%`.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the HTML source. Subscriber ID is present and appears resolved (`mi_u=8021648903`, `partner_uid=75909571`). No issues found in the truncated source.

---

### 5. Compliance

**Authentication-Results header absent**
SPF and DKIM pass/fail status is unverifiable — the email was relayed through AgentMail without exposing authentication headers. Confirm DKIM is signed under `emails.skechers.com` and SPF record covers the sending IP before production deploy.

**[Test] prefix in subject line**
```
Subject: [Test]: PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04092026Step into the right shoes for right now!
```
The test prefix and the campaign ID are exposed in the subject. This must be stripped before production send.

**CAN-SPAM / unsubscribe** — Cannot confirm from truncated HTML. Footer with physical address and one-click unsubscribe must be verified in full source.

---

### 6. Email-to-Site Continuity

All 26 CTA links pass through `click.emails.skechers.com` redirects (Salesforce MC). UTM parameter presence on landing pages cannot be confirmed without resolving the redirect chain. Verify that the click-redirect appends `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` to destination URLs — the campaign ID `PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04092026` should be reflected in `utm_campaign`.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **P0** | Strip `[Test]:` prefix and campaign ID from subject | Production subject: `Step into the right shoes for right now!` |
| **P0** | Fix Return Path pixel — missing protocol | Change to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
| **P1** | Upgrade all `image.emails.skechers.com` assets to HTTPS | Update CDN or image host config; 14 images affected |
| **P1** | Upgrade `ink1000.com` pixel to HTTPS | `https://www.ink1000.com/p/up/...` |
| **P1** | Verify DKIM/SPF authentication before production deploy | Confirm `Authentication-Results` passes via mail header inspection |
| **P2** | Add `alt` text to 3 content images | Descriptive text for screen readers and images-off clients |
| **P2** | Fix malformed `<meta>` tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
| **P2** | Reduce plain-text URL density | Condense or summarize plain-text version to <50% URL chars |
| **P3** | Change `-webkit-text-size-adjust` from `none` to `100%` | Improves iOS readability and WCAG 1.4.4 compliance |
## Recent history

- [[2026-04-08-test-pro-us-nonpur180-u-sitebundle-nonpurch-en-04092026the-right-pair-to-start-w]] — 4/10 (2026-04-08)
- [[2026-04-08-test-pro-us-retpuropen-u-sitebundle-retail-en-04092026-v3the-right-pair-right-no]] — 5/10 (2026-04-08)
- [[2026-04-08-test-pro-us-retpuropen-u-sitebundle-retail-en-04092026-v2the-right-pair-right-no]] — 4/10 (2026-04-08)

