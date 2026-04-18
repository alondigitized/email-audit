---
slug: 2026-03-29-test-mkg-us-retpur-u-best-retail-en-03292026check-out-what-s-trending-online
type: email
date: 2026-03-27
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_RETPUR_U_BEST_RETAIL_EN_03292026Check Out What's Trending Online"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_RETPUR_U_BEST_RETAIL_EN_03292026Check Out What's Trending Online
**Score:** 5/10 · **Type:** Email audit · **2026-03-27**
## Executive summary

- A best-sellers/trending email for retail purchasers that leans heavily on product category browsing rather than urgency or storytelling. The structure is logical — hero offer, then category modules — but the hero is visually undersized and the product modules feel mechanical. Multiple lifestyle images carry the email, but the overall impression is a functional catalog browse, not a compelling "here's what you're missing" moment.
- Solid bones, weak execution. The content mix is correct for re-engagement of retail buyers, but the visual hierarchy and offer clarity don't push conversion.

## What's working

- **Clear promotional hook at the top** — "50% OFF" is prominently badged in the header banner, giving instant incentive.
- **Category architecture is logical** — Sandals → Hands Free Slip-Ins → Arch Fit flows naturally and covers Skechers' three strongest traffic-driving franchise categories.
- **Lifestyle photography is strong** — The sandal and Arch Fit hero images are aspirational and appropriately scaled.
- **"New & For You" section** adds a personalization signal that differentiates this send from a plain catalog.
- **Footer utility is complete** — store locator, social icons, unsubscribe, and app download are all present and visible.

## What's weak

- **Hero is undersized and low-impact.** The top banner is thin; "50% OFF" reads small and the CTA ("SHOP NOW") is minimal. There's no headline copy anchoring *why* the recipient should care right now.
- **Subject line artifact visible in preview.** The email subject carries a test prefix and a garbled preview string (raw URL text), which would destroy open rates and signal untested deployment if this went live.
- **Category module headers are plain text blocks** — "MOST SEARCHED STYLES," "HANDS FREE SLIP-INS," "ARCH FIT" — with no subheads, benefit copy, or product counts. They read like nav labels, not selling moments.
- **"New & For You" module is visually underpowered** — the product tiles in that row are noticeably smaller than the category hero images, making the personalized section feel like an afterthought.
- **CTA buttons are inconsistent** — some modules use "SHOP NOW," others use "SHOP [CATEGORY NAME]." No hierarchy signals which action is primary.
- **No social proof or urgency mechanism** — no "bestseller" badges, ratings callouts, or inventory language. For a "trending" email, there's nothing that actually conveys trendiness.

## Recommendations

- 1. **Fix the subject line and preview before any live deployment** — the test prefix and raw URL in the preview text are disqualifying.
- 2. **Expand the hero banner** to at least 30% of the fold. Add a one-line benefit headline ("Your next favorite style is on sale") alongside the offer badge.
- 3. **Add one proof point per category module** — e.g., "Our #1 sandal" or a star rating — to justify the "most searched" claim visually.
- 4. **Standardize CTA copy** to a single primary pattern ("SHOP [CATEGORY]") and reserve "SHOP NOW" for the hero only.
- 5. **Increase "New & For You" tile size** to match the category modules, or move it higher to leverage personalization as a hook rather than a closer.
- 6. **Add urgency copy** to the offer banner — a sale end date or "while supplies last" line turns 50% off from a claim into a reason to act now.
- 1. **[Critical]** Migrate all `http://image.emails.skechers.com/` sources to `https://` — affects logo, all social/payment/app store footer icons. This is a single CDN hostname change.
- 2. **[Critical]** Fix Return Path pixel: prepend `https://` to `pixel.app.returnpath.net/pixel.gif?r=...` — currently a broken relative URL that never fires.
- 3. **[High]** Fix desktop/mobile CSS toggle: invert defaults so `desktop-content` is visible by default and `mobile-content` is hidden, revealed via max-width media query. Alternatively, use MSO conditional comments to serve desktop layout to Outlook outside the media query system.
- 4. **[High]** Confirm SPF and DKIM pass in production send headers before deployment.
- 5. **[Medium]** Add descriptive alt text to the 3 unnamed content images flagged above.
- 6. **[Low]** Add missing `http-equiv` attributes to both `<meta>` tags in `<head>`.
- 7. **[Low]** Remove `[Test]:` subject line prefix before production deployment.

## Full review
## 1. Executive Summary

A best-sellers/trending email for retail purchasers that leans heavily on product category browsing rather than urgency or storytelling. The structure is logical — hero offer, then category modules — but the hero is visually undersized and the product modules feel mechanical. Multiple lifestyle images carry the email, but the overall impression is a functional catalog browse, not a compelling "here's what you're missing" moment.

---

## 2. Business Impact Score: 5/10

Solid bones, weak execution. The content mix is correct for re-engagement of retail buyers, but the visual hierarchy and offer clarity don't push conversion.

---

## 3. What's Working

- **Clear promotional hook at the top** — "50% OFF" is prominently badged in the header banner, giving instant incentive.
- **Category architecture is logical** — Sandals → Hands Free Slip-Ins → Arch Fit flows naturally and covers Skechers' three strongest traffic-driving franchise categories.
- **Lifestyle photography is strong** — The sandal and Arch Fit hero images are aspirational and appropriately scaled.
- **"New & For You" section** adds a personalization signal that differentiates this send from a plain catalog.
- **Footer utility is complete** — store locator, social icons, unsubscribe, and app download are all present and visible.

---

## 4. What's Weak

- **Hero is undersized and low-impact.** The top banner is thin; "50% OFF" reads small and the CTA ("SHOP NOW") is minimal. There's no headline copy anchoring *why* the recipient should care right now.
- **Subject line artifact visible in preview.** The email subject carries a test prefix and a garbled preview string (raw URL text), which would destroy open rates and signal untested deployment if this went live.
- **Category module headers are plain text blocks** — "MOST SEARCHED STYLES," "HANDS FREE SLIP-INS," "ARCH FIT" — with no subheads, benefit copy, or product counts. They read like nav labels, not selling moments.
- **"New & For You" module is visually underpowered** — the product tiles in that row are noticeably smaller than the category hero images, making the personalized section feel like an afterthought.
- **CTA buttons are inconsistent** — some modules use "SHOP NOW," others use "SHOP [CATEGORY NAME]." No hierarchy signals which action is primary.
- **No social proof or urgency mechanism** — no "bestseller" badges, ratings callouts, or inventory language. For a "trending" email, there's nothing that actually conveys trendiness.

---

## 5. Recommendations

1. **Fix the subject line and preview before any live deployment** — the test prefix and raw URL in the preview text are disqualifying.
2. **Expand the hero banner** to at least 30% of the fold. Add a one-line benefit headline ("Your next favorite style is on sale") alongside the offer badge.
3. **Add one proof point per category module** — e.g., "Our #1 sandal" or a star rating — to justify the "most searched" claim visually.
4. **Standardize CTA copy** to a single primary pattern ("SHOP [CATEGORY]") and reserve "SHOP NOW" for the hero only.
5. **Increase "New & For You" tile size** to match the category modules, or move it higher to leverage personalization as a hook rather than a closer.
6. **Add urgency copy** to the offer banner — a sale end date or "while supplies last" line turns 50% off from a claim into a reason to act now.

---

## 6. Bottom Line

The email does the basics: it presents relevant categories, shows lifestyle imagery, and includes a discount. But it reads like a weekly inventory push, not a curated "this is trending and you should know about it" send. The biggest immediate risk is the test subject line and preview text — if this is close to deployment, that's a live fire issue. Beyond that, the email needs a stronger hero and social proof to earn its "trending" premise.

---

## 7. Evidence

**Overall purpose:** Re-engage retail purchasers with a 50%-off offer and surface Skechers' most-searched categories to drive online conversion.

**Hero / primary value proposition:** Top banner badge reads "50% OFF" with a "SHOP NOW" CTA. Thin and low-energy; the discount is the only hook.

**Membership / benefits section:** Not present in this email — no loyalty or Skechers Elite messaging visible.

**Product discoverability / recommendation modules:** Three named category modules (Sandals, Hands Free Slip-Ins, Arch Fit), each with a lifestyle hero image and a CTA. "New & For You" row with smaller product tiles at the bottom. Coverage is good; depth per module is thin.

**Utility / secondary modules:** Footer includes app download badges, social icons (Instagram, Facebook, YouTube, Pinterest), "Find a Store," free shipping/free returns callout, and standard unsubscribe/preference links.

**Bugs / friction / clarity issues:** Subject line contains a test prefix tag and the email preview renders a raw URL string — both are clearly visible in the metadata and would appear to recipients. No image rendering failures or layout breaks visible in the body itself.

---

## Technical Audit

## Technical Audit — MKG_US_RETPUR_U_BEST_RETAIL_EN_03292026

---

### 1. Technical Summary

Test deployment of a retail-purchaser BOGO campaign. Primary issues are widespread HTTP (non-HTTPS) image sources across all footer assets, a broken tracking pixel (missing protocol scheme), and a CSS desktop/mobile toggle that will suppress desktop layout in Outlook and Gmail.

---

### 2. Link & Tracking Issues

| Severity | Issue | Evidence |
|---|---|---|
| **High** | Return Path inbox pixel missing protocol — broken relative URL, will not load | `src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef..."` (no `https://`) |
| **Medium** | ink1000.com open-tracking pixel served over HTTP | `src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=9015215849&mi_ecmp=..."` |
| **Info** | 26 click URLs wrapped via `click.emails.skechers.com` encrypted redirect — destination URLs and UTM params unverifiable without resolution | QA: 26 tracking links skipped |
| **Info** | Kruxd user-match beacons expose subscriber ID and SHA-256 hash in query string | `partner_uid=2396422` and `partner_uid=28374a795c423f502bec...` in beacon URLs — review against data governance policy |

---

### 3. Rendering & Accessibility

**HTTP mixed content (14 images):**
All `image.emails.skechers.com` assets use `http://` — will be blocked in Outlook 2019+, iOS Mail with "Block All Remote Content," and many corporate proxies. Affected assets include logo, all social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), app store badges (App Store, Google Play), AfterPay badge, and at least 3 unnamed images:

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
... (10 additional assets)
```

**Desktop content suppression in Outlook/Gmail:**
The CSS toggle is inverted — `desktop-content` defaults to `display:none` and is shown only via `@media screen and (min-width: 768px)`. Outlook (all versions via Word renderer) and Gmail desktop ignore `<style>` blocks entirely, so desktop layout will never render for those clients; only mobile layout will display.

```css
/* Problematic pattern */
.desktop-content { display: none; }         /* default: hidden */
@media screen and (min-width: 768px) {
  .desktop-content { display: block !important; }  /* Outlook/Gmail never reaches this */
}
```

**Missing alt text (3 content images):**
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

**Malformed meta tags:**
- `<meta content="text/html; charset=utf-8" />` — missing `http-equiv="Content-Type"` attribute
- `<meta content="IE=Edge" />` — missing `http-equiv="X-UA-Compatible"` attribute

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (`%%...%%` or `{{...}}`) detected in the provided source. Subject line contains `[Test]:` prefix — must be stripped before production deployment.

---

### 5. Compliance

| Item | Status |
|---|---|
| SPF/DKIM authentication | **Unverified** — Authentication-Results header absent via AgentMail relay |
| Unsubscribe mechanism | Not verifiable — footer HTML truncated in source provided; confirm list-unsubscribe header and in-body link are present |
| Physical mailing address | Not verifiable from truncated source — confirm CAN-SPAM §5(a)(5) footer address is present |
| `[Test]:` subject prefix | Must be removed before production send |

---

### 6. Email-to-Site Continuity

- Campaign ID `MKG_US_RETPUR_U_BEST_RETAIL_EN_03292026` is consistent across all three tracking beacons (Kruxd impression pixel, ink1000 open pixel, Kruxd ad impression) — attribution chain is intact at the email layer.
- Landing page UTM alignment cannot be confirmed: all 26 CTAs route through `click.emails.skechers.com` encrypted redirects that cannot be resolved without live HTTP requests.

---

### 7. Recommendations

1. **[Critical]** Migrate all `http://image.emails.skechers.com/` sources to `https://` — affects logo, all social/payment/app store footer icons. This is a single CDN hostname change.
2. **[Critical]** Fix Return Path pixel: prepend `https://` to `pixel.app.returnpath.net/pixel.gif?r=...` — currently a broken relative URL that never fires.
3. **[High]** Fix desktop/mobile CSS toggle: invert defaults so `desktop-content` is visible by default and `mobile-content` is hidden, revealed via max-width media query. Alternatively, use MSO conditional comments to serve desktop layout to Outlook outside the media query system.
4. **[High]** Confirm SPF and DKIM pass in production send headers before deployment.
5. **[Medium]** Add descriptive alt text to the 3 unnamed content images flagged above.
6. **[Low]** Add missing `http-equiv` attributes to both `<meta>` tags in `<head>`.
7. **[Low]** Remove `[Test]:` subject line prefix before production deployment.
## Recent history

- [[2026-03-29-test-mkg-us-na-w-multi-gender-en-03282026-bskechers-exclusives-the-shoes-you-can]] — 5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-na-w-multi-gender-en-03282026-a-v3fresh-spring-styles-to-step-up-you]] — 5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-ecmpur-u-seasonal-ecom-en-03302026-bnew-colors-you-ll-keep-coming-ba]] — 6.5/10 (2026-03-27)

