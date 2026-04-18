---
slug: 2026-04-10-test-ret-us-na-u-store1423-zip-en-04102026-v2sale-ends-soon-celebrate-our-birthd
type: email
date: 2026-04-10
persona: walker
score: "6/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1423_ZIP_EN_04102026_V2SALE Ends Soon! Celebrate our Birthday in Ridgewood"
tags: [email, score-6, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1423_ZIP_EN_04102026_V2SALE Ends Soon! Celebrate our Birthday in Ridgewood
**Score:** 6/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- This is a localized retail store event email promoting Skechers Ridgewood's birthday sale with a Buy 2, Get 1 Free offer ending April 12. The personalization to a specific store location is the strategic core here, and it mostly works — the store address and CTA are prominent. The email is clean and functional but light on product specificity. The hero image carries the visual weight, but the browse modules below the fold are generic and dilute the urgency built in the hero. For a time-sensitive event email, this could push harder.

## What's working

- **Offer clarity is strong.** "BUY 2 PAIRS GET THE 3RD FREE — LIMITED TIME ONLY THRU 4/12" is unambiguous and visible above the fold.
- **Store-level personalization.** "Skechers Ridgewood" headline and the embedded address (57-11 Myrtle Avenue, Ridgewood, NY) with phone number make this feel genuinely local, not a generic blast.
- **GET DIRECTIONS CTA** is well-placed and appropriately prominent — driving foot traffic is the point.
- **Birthday franding** ("Celebrate our birthday!") creates a legitimate urgency hook distinct from generic sale messaging.
- **Confetti visual treatment** in the hero reinforces the celebratory theme without being garish.

## What's weak

- **No actual product shown in a shoppable way.** The hero model image shows shoes indistinctly — you can't tell what's on sale or what categories are featured. For a B2G1 offer, showing three specific hero products would dramatically increase intent.
- **The browse modules (Women / Men / Kids / Wide) are text-only links** — no imagery, no product teasers. They feel like an afterthought rather than a genuine discovery tool.
- **Offer urgency fades after the hero.** Below the fold, the sale disappears entirely. The SMS opt-in, app download, curbside pickup, and BNPL modules all feel like boilerplate that weakens the event-specific focus.
- **Curbside pickup and FIND A STORE modules are redundant** with the store-specific framing — recipients already know the store.
- **Subject line contains test prefix** ("[Test]:") — visible in the from/subject, suggesting this is a test send that may have deployed with pre-production artifacts.

## Recommendations

- 1. **Show product in the hero.** Feature 2–3 specific styles available at the Ridgewood location. B2G1 works best when recipients can picture exactly what they're buying.
- 2. **Carry the sale message through the browse modules.** Label the Women/Men/Kids rows with "Styles in this sale" rather than generic category names.
- 3. **Cut or compress the boilerplate modules.** SMS opt-in, app download, and BNPL are fine for lifecycle emails but dilute a time-sensitive event email. Condense to one utility row max.
- 4. **Add a secondary urgency signal near the bottom.** A small "Offer ends 4/12" reminder before the footer would recapture scrollers who reach the bottom without converting.
- 5. **Confirm test prefix is stripped** before live deployment — the subject line "[Test]:" will undermine open rates and appear unprofessional to live recipients.
- | Priority | Issue | Action |
- |---|---|---|
- | High | `[Test]:` prefix in subject | Strip before any further deployments; confirm whether production list was hit |
- | High | All `image.emails.skechers.com` assets on HTTP | Migrate CDN to HTTPS or update all `src` attributes to `https://` |
- | High | `ink1000.com` pixel on HTTP | Update to `https://` or remove if vendor supports HTTPS endpoint |
- | High | Return Path pixel missing protocol | Fix to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
- | Medium | SPF/DKIM unconfirmed | Pull full raw headers from a production send and verify `Authentication-Results` |
- | Medium | Missing alt text on `dde00662` and `49468f73` images | Add descriptive `alt` attributes |
- | Low | Malformed `<meta>` tags | Add `http-equiv` attributes to both charset and IE-compat meta tags |
- | Low | Duplicate CSS breakpoints | Consolidate `375px` and `640px` blocks into a single `640px` query |

## Full review
### 1. Executive Summary

This is a localized retail store event email promoting Skechers Ridgewood's birthday sale with a Buy 2, Get 1 Free offer ending April 12. The personalization to a specific store location is the strategic core here, and it mostly works — the store address and CTA are prominent. The email is clean and functional but light on product specificity. The hero image carries the visual weight, but the browse modules below the fold are generic and dilute the urgency built in the hero. For a time-sensitive event email, this could push harder.

---

### 2. Business Impact Score: **6/10**

---

### 3. What's Working

- **Offer clarity is strong.** "BUY 2 PAIRS GET THE 3RD FREE — LIMITED TIME ONLY THRU 4/12" is unambiguous and visible above the fold.
- **Store-level personalization.** "Skechers Ridgewood" headline and the embedded address (57-11 Myrtle Avenue, Ridgewood, NY) with phone number make this feel genuinely local, not a generic blast.
- **GET DIRECTIONS CTA** is well-placed and appropriately prominent — driving foot traffic is the point.
- **Birthday franding** ("Celebrate our birthday!") creates a legitimate urgency hook distinct from generic sale messaging.
- **Confetti visual treatment** in the hero reinforces the celebratory theme without being garish.

---

### 4. What's Weak

- **No actual product shown in a shoppable way.** The hero model image shows shoes indistinctly — you can't tell what's on sale or what categories are featured. For a B2G1 offer, showing three specific hero products would dramatically increase intent.
- **The browse modules (Women / Men / Kids / Wide) are text-only links** — no imagery, no product teasers. They feel like an afterthought rather than a genuine discovery tool.
- **Offer urgency fades after the hero.** Below the fold, the sale disappears entirely. The SMS opt-in, app download, curbside pickup, and BNPL modules all feel like boilerplate that weakens the event-specific focus.
- **Curbside pickup and FIND A STORE modules are redundant** with the store-specific framing — recipients already know the store.
- **Subject line contains test prefix** ("[Test]:") — visible in the from/subject, suggesting this is a test send that may have deployed with pre-production artifacts.

---

### 5. Recommendations

1. **Show product in the hero.** Feature 2–3 specific styles available at the Ridgewood location. B2G1 works best when recipients can picture exactly what they're buying.
2. **Carry the sale message through the browse modules.** Label the Women/Men/Kids rows with "Styles in this sale" rather than generic category names.
3. **Cut or compress the boilerplate modules.** SMS opt-in, app download, and BNPL are fine for lifecycle emails but dilute a time-sensitive event email. Condense to one utility row max.
4. **Add a secondary urgency signal near the bottom.** A small "Offer ends 4/12" reminder before the footer would recapture scrollers who reach the bottom without converting.
5. **Confirm test prefix is stripped** before live deployment — the subject line "[Test]:" will undermine open rates and appear unprofessional to live recipients.

---

### 6. Bottom Line

Solid foundational structure for a local store event. The offer is clear, the location is specific, and the CTA is well-placed. What's missing is product — this email asks recipients to "celebrate" without showing them anything to celebrate with. One hero product lineup swap and tighter module curation below the fold would meaningfully improve conversion.

---

### 7. Evidence

**Overall purpose:** Drive in-store foot traffic to Skechers Ridgewood for a birthday sale event with a Buy 2 Get 1 Free incentive, ending April 12.

**Hero / primary value proposition:** Full-width image of a model surrounded by shoes with "Celebrate our birthday! Skechers Ridgewood" headline. Offer callout (B2G1, ends 4/12) is bold and readable. Store address, phone, and GET DIRECTIONS button follow directly. Strong above-the-fold execution.

**Membership / benefits section:** None visible. No loyalty or rewards mention.

**Product discoverability / recommendation modules:** "SHOP ADDITIONAL STYLES" section with four text-link rows (Women, Men, Kids, Wide). No imagery, no product names — purely navigational. Low conversion potential.

**Utility / secondary modules:** SMS opt-in (text SKECHERS to a short code), App Store + Google Play download badges, Curbside Pickup, Shop Now Pay Later (Afterpay + Klarna logos), Find a Store. All present and rendering correctly.

**Bugs / friction / clarity issues:** The "[Test]:" prefix in the subject line is the one visible flag — it suggests this screenshot was captured from a test deployment. No broken images, overlapping text, or rendering errors are visible in the email body itself.

---

## Technical Audit

## Technical Audit — Skechers Store 1423 Birthday Sale Email
**Campaign:** `RET_US_NA_U_STORE1423_ZIP_EN_04102026_V2`
**Date:** 2026-04-10

---

### 1. Technical Summary

A store-specific, zip-targeted promotional email with an 83% automated QA pass rate. Primary technical issues are pervasive HTTP (non-HTTPS) image hosting across all Skechers-owned assets, a malformed third-party pixel URL, and a `[Test]:` subject line prefix indicating this may have deployed to a production audience without stripping the test flag.

---

### 2. Link & Tracking Issues

**`[Test]:` prefix in deployed subject line**
Subject reads `[Test]: RET_US_NA_U_STORE1423_ZIP_EN_04102026_V2SALE Ends Soon!...`. The `[Test]:` string is present in what appears to be a live send. If this reached a production list, the raw campaign code is also exposed to subscribers as part of the subject.

**Malformed Return Path / Validity pixel URL**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" width="1" height="1" />
```
Missing protocol (`https://`). Browsers/email clients will treat this as a relative path, silently breaking inbox monitoring. All other pixels in the same block have full URLs.

**HTTP tracking pixel — ink1000.com**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8021648903&mi_ecmp=RET_US_NA_U_STORE1423_ZIP_EN_04102026
```
Plain HTTP. Gmail, Apple Mail, and Outlook proxy images over HTTPS — this pixel will fail in all three environments, dropping any analytics captured by this vendor.

**28 click-redirect links unprobed**
All CTAs route through `click.emails.skechers.com`. QA skipped HTTP probing on these, so broken destination URLs cannot be confirmed or ruled out from this audit alone.

---

### 3. Rendering & Accessibility

**HTTP image sources — all Skechers-hosted assets**
Every image served from `image.emails.skechers.com` uses `http://`. Affected assets include content images, app store badges, social icons, and service icons (Curbside, AfterPay, Find A Store). Full list from QA:

- `dde00662-169f-447d-b0e2-fc65f6c2290c.png` (missing alt + HTTP)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` (missing alt + HTTP)
- `0ec56c9f-eec2-471a-898d-0ca1cea7e115.png` — "Available on the App Store"
- `9bb508d0-4b38-483d-8459-cf54186a0b9f.png` — "Android App on Google Play"
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — "Curbside Pickup"
- `07cb60b5-512b-494d-892d-67dc067289b7.png` — "AfterPay"
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — "Find A Store"
- `b782e0aa-782c-4fb6-967b-d1dfa5ecbfdc.png` — "Instagram"
- `a5c4cae0-7aed-467a-a3ae-b290eea2a4a2.png` — "Facebook"
- `8c5738fc-7644-4cbf-8fab-b04355a320a7.png` — "YouTube"

All will be blocked or proxied in modern clients; Gmail rewrites HTTP image URLs through its own proxy, which may break CDN-signed URLs.

**Missing alt text on content images**
`o.gif` (ink1000 pixel) and the two unidentified `.png` assets (`dde00662`, `49468f73`) have no `alt` attribute. Images-off rendering will produce blank gaps with no context for screen readers or low-image environments.

**Malformed `<meta>` tags**
```html
<meta content="text/html; charset=utf-8" />
<meta content="IE=Edge" />
```
Both are missing `http-equiv` attribute. Correct form:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```
Without `http-equiv`, these directives are no-ops in all parsers.

**Duplicate responsive CSS blocks**
The `375px` and `640px` breakpoints contain identical rule sets. No rendering breakage, but unnecessary payload weight.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%field%%`, `{{field}}`) are visible in the truncated source. "Ridgewood" and Store 1423 identifiers appear to be hardcoded, consistent with a single-store deployment rather than dynamic token injection — acceptable for a store-specific send.

Preheader text ("Buy 2 Pairs, Get the 3rd Free") is hardcoded; no issues.

---

### 5. Compliance

**SPF/DKIM authentication status unknown**
QA reports no `Authentication-Results` header captured via the AgentMail relay. Cannot confirm whether SPF and DKIM passed for `emails.skechers.com`. This is a relay capture gap, not a confirmed failure, but should be verified against the full raw headers.

**CAN-SPAM / unsubscribe**
HTML is truncated; footer unsubscribe link and physical mailing address could not be verified in this audit. These are present in prior Skechers audits and are assumed present, but should be spot-checked against the full render.

**Third-party DMP pixel (Salesforce/Krux)**
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=<hashed_email>
```
A SHA-256 hashed email is passed to Krux/Salesforce DMP for audience matching. This is a known pattern in their stack and uses HTTPS. No issue, but relevant for any CCPA/privacy documentation.

---

### 6. Email-to-Site Continuity

All 28 CTAs route through `click.emails.skechers.com` redirect links — UTM parameters, if present, would be on the destination URLs after redirect. Because QA skipped probing these URLs, UTM pass-through to `skechers.com` landing pages cannot be confirmed. The campaign ID `RET_US_NA_U_STORE1423_ZIP_EN_04102026` is correctly instrumented in the ink1000 and Krux pixels, but the ink1000 pixel is HTTP-broken (see above), which severs that attribution path.

No destination URLs were available for inspection to verify store-locator or landing page alignment with the Ridgewood/Store 1423 context in the subject line.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | `[Test]:` prefix in subject | Strip before any further deployments; confirm whether production list was hit |
| High | All `image.emails.skechers.com` assets on HTTP | Migrate CDN to HTTPS or update all `src` attributes to `https://` |
| High | `ink1000.com` pixel on HTTP | Update to `https://` or remove if vendor supports HTTPS endpoint |
| High | Return Path pixel missing protocol | Fix to `https://pixel.app.returnpath.net/pixel.gif?r=...` |
| Medium | SPF/DKIM unconfirmed | Pull full raw headers from a production send and verify `Authentication-Results` |
| Medium | Missing alt text on `dde00662` and `49468f73` images | Add descriptive `alt` attributes |
| Low | Malformed `<meta>` tags | Add `http-equiv` attributes to both charset and IE-compat meta tags |
| Low | Duplicate CSS breakpoints | Consolidate `375px` and `640px` blocks into a single `640px` query |
## Recent history

- [[2026-04-10-your-perfect-first-pair-is-here]] — 5/10 (2026-04-10)
- [[2026-04-10-your-cart-expires-soon]] — 5/10 (2026-04-10)
- [[2026-04-10-your-items-are-waiting]] — 6/10 (2026-04-10)

