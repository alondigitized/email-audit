---
slug: 2026-03-31-why-start-with-one-pair-when-you-can-save-with-two
type: email
date: 2026-03-31
persona: walker
score: "6/10"
sender: SKECHERS
subject: Why Start With One Pair When You Can Save With Two!
tags: [email, score-6, sender/skechers]
---
# Why Start With One Pair When You Can Save With Two!
**Score:** 6/10 · **Type:** Email audit · **2026-03-31**
## Executive summary

- A competent but unfocused BOGO promotional email. The spring sale offer is clear and well-positioned in the hero, but the email immediately pivots into a catalog-style category browse — women's, men's, kids' — then tacks on a "This Just In" module that has no thematic connection to the BOGO message. The result is an email that can't decide if it's driving a sale or building brand consideration. The offer deserves more aggressive reinforcement throughout.
- Strong offer, average execution. Conversion probability is acceptable but undersells the deal's urgency and reach.

## What's working

- **Hero is direct.** "SPRING SALE — BUY ONE, GET ONE 50% OFF" reads immediately. The offer headline is large, the pastel spring background is appropriate, and both "SHOP NOW" and "FIND A STORE" CTAs are present for dual-channel coverage.
- **Gender segmentation is logical.** Women's → Men's → Kids' flows cleanly and lets recipients self-select without friction. Each section carries its own CTA button.
- **Utility footer is complete.** App download, Afterpay BNPL, and store finder are all surfaced — smart for a deal-driven send.
- **Text nav block is functional.** The "Shop Additional Styles" section with WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE links covers category breadth efficiently.

## What's weak

- **The BOGO offer disappears after the hero.** There is zero reinforcement of the "50% off second pair" message in any of the product modules below. If someone scrolls past the hero, the deal is gone.
- **"This Just In" is a thematic orphan.** A lifestyle/new arrivals module mid-email contradicts the sale urgency. It dilutes the promotional intent and signals mixed editorial priorities.
- **"LET'S GET TRYING" is an awkward headline.** The Skechers+ loyalty callout in the lower utility band uses a clunky, unclear phrase. It reads as a grammatical error at quick glance.
- **Product exposure per section is thin.** Each gender section shows only two shoe images — too few to drive genuine product discovery or give the sense of a broad sale selection.
- **No urgency signals anywhere.** No "limited time," no end date, no countdown. For a BOGO deal this is a missed lever.

## Recommendations

- 1. **Repeat the BOGO badge in each category section.** A small "BOGO 50% OFF" stamp or callout on or near the Women's/Men's/Kids' modules would keep the deal front of mind throughout the scroll.
- 2. **Remove or demote "This Just In."** It competes with the promotional message. If it must stay, place it after all sale content — not as a mid-email interruption.
- 3. **Fix the "Let's Get Trying" copy.** It should be something like "Try Skechers+" or "Join Skechers+ for Exclusive Perks." The current phrasing reads as unpolished.
- 4. **Add a deal deadline or urgency line.** Even "Sale Ends Soon" in the hero or footer carries weight for a BOGO promotion.
- 5. **Expand product tiles per section to 4.** Two images per gender does not create the "abundance" feel that drives click-through on sale emails.
- | Priority | Issue | Action |
- |---|---|---|
- | **High** | 14 images served over HTTP | Migrate all `image.emails.skechers.com` CDN assets to HTTPS; update src attributes |
- | **High** | Return Path pixel missing protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
- | **High** | SPF/DKIM status unverified | Confirm authentication headers via direct inbox seed test before deployment |
- | **Medium** | 4 images missing alt text | Add descriptive alt text to non-decorative content images |
- | **Medium** | UTM continuity unverified | Decode one SFMC click-wrap URL in QA environment to confirm UTM params survive redirect |
- | **Low** | `<meta charset>` missing `http-equiv` | Add `http-equiv="Content-Type"` attribute |
- | **Low** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user accessibility preferences |

## Full review
## 1. Executive Summary

A competent but unfocused BOGO promotional email. The spring sale offer is clear and well-positioned in the hero, but the email immediately pivots into a catalog-style category browse — women's, men's, kids' — then tacks on a "This Just In" module that has no thematic connection to the BOGO message. The result is an email that can't decide if it's driving a sale or building brand consideration. The offer deserves more aggressive reinforcement throughout.

---

## 2. Business Impact Score: **6/10**

Strong offer, average execution. Conversion probability is acceptable but undersells the deal's urgency and reach.

---

## 3. What's Working

- **Hero is direct.** "SPRING SALE — BUY ONE, GET ONE 50% OFF" reads immediately. The offer headline is large, the pastel spring background is appropriate, and both "SHOP NOW" and "FIND A STORE" CTAs are present for dual-channel coverage.
- **Gender segmentation is logical.** Women's → Men's → Kids' flows cleanly and lets recipients self-select without friction. Each section carries its own CTA button.
- **Utility footer is complete.** App download, Afterpay BNPL, and store finder are all surfaced — smart for a deal-driven send.
- **Text nav block is functional.** The "Shop Additional Styles" section with WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE links covers category breadth efficiently.

---

## 4. What's Weak

- **The BOGO offer disappears after the hero.** There is zero reinforcement of the "50% off second pair" message in any of the product modules below. If someone scrolls past the hero, the deal is gone.
- **"This Just In" is a thematic orphan.** A lifestyle/new arrivals module mid-email contradicts the sale urgency. It dilutes the promotional intent and signals mixed editorial priorities.
- **"LET'S GET TRYING" is an awkward headline.** The Skechers+ loyalty callout in the lower utility band uses a clunky, unclear phrase. It reads as a grammatical error at quick glance.
- **Product exposure per section is thin.** Each gender section shows only two shoe images — too few to drive genuine product discovery or give the sense of a broad sale selection.
- **No urgency signals anywhere.** No "limited time," no end date, no countdown. For a BOGO deal this is a missed lever.

---

## 5. Recommendations

1. **Repeat the BOGO badge in each category section.** A small "BOGO 50% OFF" stamp or callout on or near the Women's/Men's/Kids' modules would keep the deal front of mind throughout the scroll.
2. **Remove or demote "This Just In."** It competes with the promotional message. If it must stay, place it after all sale content — not as a mid-email interruption.
3. **Fix the "Let's Get Trying" copy.** It should be something like "Try Skechers+" or "Join Skechers+ for Exclusive Perks." The current phrasing reads as unpolished.
4. **Add a deal deadline or urgency line.** Even "Sale Ends Soon" in the hero or footer carries weight for a BOGO promotion.
5. **Expand product tiles per section to 4.** Two images per gender does not create the "abundance" feel that drives click-through on sale emails.

---

## 6. Bottom Line

The email has the right structure for a multi-category promotional send, but squanders its best asset — a strong BOGO offer — by burying it in the hero and never referencing it again. Clean it up, strip the off-message "This Just In" module, and repeat the deal signal at least once mid-scroll. That alone would meaningfully improve conversion.

---

## 7. Evidence

**Overall purpose:** Drive BOGO 50% spring sale conversions across Women's, Men's, and Kids' footwear, with secondary goals of category exploration and store/app traffic.

**Hero / primary value proposition:** "SPRING SALE — BUY ONE, GET ONE 50% OFF" on a soft mint/pastel green background. Two CTAs: "SHOP NOW" (primary) and "FIND A STORE" (secondary). Fine print is present below the headline. Clear and well-executed.

**Membership / benefits section:** A small "LET'S GET TRYING / FOR SKECHERS+" block appears in the lower utility band alongside a Curbside Pickup callout. Undersized relative to its potential; the phrasing is awkward and the visual treatment doesn't match a loyalty-driving module.

**Product discoverability / recommendation modules:** Three gender-segmented sections (Women's Styles, Men's Styles, Kids' Styles), each with two product images and a category CTA button. Images are small at email width. No product names or prices are visible. Followed by "This Just In" — a lifestyle-forward module with apparel/fashion imagery and a "SHOP NOW" CTA, disconnected from the BOGO theme.

**Utility / secondary modules:** Text-link nav block (WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE). Footer row with app download badges, Afterpay "SHOP NOW, PAY LATER" logo, and "FIND A STORE." Social icons (Facebook, X, Instagram, YouTube, Pinterest). Standard legal/unsubscribe footer.

**Bugs / friction / clarity issues:** No broken images visible. No overlapping text. Layout renders cleanly. The "LET'S GET TRYING" copy is the only visible text that reads as an error, though it may be intentional — it is still confusing as presented.

---

## Technical Audit

## Technical Audit — Skechers: "Why Start With One Pair When You Can Save With Two!"
**Campaign:** `PRO_US_NONPUR_U_BUNDLE_NONPURCH_EN_03312026` | **From:** no-reply@emails.skechers.com

---

### 1. Technical Summary

The email is structurally sound with standard SFMC/Salesforce table-based layout and responsive CSS. The primary technical risks are a pervasive HTTP (non-HTTPS) image asset pattern across the `image.emails.skechers.com` CDN and an unresolvable SPF/DKIM authentication status due to relay configuration.

---

### 2. Link & Tracking Issues

- **26 click-tracking links** route through `click.emails.skechers.com` using encrypted `?qs=` payloads — consistent with SFMC click wrapping. Links were skipped from HTTP probing; final destination URLs and UTM parameter integrity could not be verified programmatically.
- **Third-party pixel beacons present** in hidden `<div>`:
  - `beacon.krxd.net` — Salesforce Krux DMP user-match pixel, includes `partner_uid=121173391` (subscriber ID exposed in plaintext)
  - `open.aspx` — SFMC open tracking pixel
  - `ink1000.com/o.gif` — secondary open tracking pixel via HTTP (see §3)
  - `pixel.app.returnpath.net` — Validity/Return Path inbox monitoring pixel; src uses bare `pixel.app.returnpath.net` without protocol prefix, which is a malformed URL and may silently fail to load in strict clients

---

### 3. Rendering & Accessibility

**HTTP image assets (non-HTTPS) — 14 affected images:**

All assets served from `http://image.emails.skechers.com/lib/fe3115707564047a731c78/` are HTTP-only. Gmail, Outlook.com, and Apple Mail proxy/block mixed-content images. Affected assets include the Skechers logo, App Store badge, Google Play badge, AfterPay logo, and all social icons (Instagram, Twitter/X, Facebook, Pinterest, YouTube).

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
... (9 additional social/footer images)
```

**Missing alt text — 4 images confirmed:**
- `o.gif` (ink1000 tracking pixel) — minor; tracking pixels typically omit alt
- `49468f73-...png` — unknown content image, no alt
- `00100b23-...png` — unknown content image, no alt
- `fc08601a-...png` — unknown content image, no alt

Alt text absence on non-decorative images fails WCAG 2.1 AA (SC 1.1.1) and degrades rendering when images are blocked.

**`<meta content="text/html; charset=utf-8" />` — missing `http-equiv` attribute:**
```html
<meta content="text/html; charset=utf-8" />
```
Should be `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />`. Without `http-equiv`, this tag has no effect; charset is unenforced in some legacy clients.

**`-webkit-text-size-adjust: none`** is set globally via `* {}`. This disables user font-size preferences on iOS, which is an accessibility regression.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%field%%` or `{{field}}`) detected in the visible HTML. Campaign ID `PRO_US_NONPUR_U_BUNDLE_NONPURCH_EN_03312026` is correctly propagated across all tracking pixels and the Krux beacon `campaignid` parameter.

---

### 5. Compliance

**CAN-SPAM:** Physical address and unsubscribe mechanism present in footer — compliant.

**SPF/DKIM:** Authentication-Results header was not captured via the AgentMail relay. SPF/DKIM pass/fail status is unknown for this send. Given the sending domain is `emails.skechers.com` (subdomain), DMARC alignment depends on whether the SPF/DKIM records are configured for the subdomain, not just `skechers.com`.

**Return Path pixel — malformed URL:**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0..." width="1" height="1" />
```
Missing `https://` protocol. This will be interpreted as a relative URL path and will silently 404, breaking inbox placement monitoring for this send.

---

### 6. Email-to-Site Continuity

UTM parameter presence on final destination URLs cannot be confirmed without resolving the `click.emails.skechers.com/?qs=` wrappers. The encrypted `qs` payload obfuscates whether `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` are appended post-redirect. Manual spot-check of one decoded link is recommended before send or post-send within SFMC link reporting.

The campaign ID `PRO_US_NONPUR_U_BUNDLE_NONPURCH_EN_03312026` in Krux/tracking pixels is consistent with the expected March 31, 2026 send date.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | 14 images served over HTTP | Migrate all `image.emails.skechers.com` CDN assets to HTTPS; update src attributes |
| **High** | Return Path pixel missing protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
| **High** | SPF/DKIM status unverified | Confirm authentication headers via direct inbox seed test before deployment |
| **Medium** | 4 images missing alt text | Add descriptive alt text to non-decorative content images |
| **Medium** | UTM continuity unverified | Decode one SFMC click-wrap URL in QA environment to confirm UTM params survive redirect |
| **Low** | `<meta charset>` missing `http-equiv` | Add `http-equiv="Content-Type"` attribute |
| **Low** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user accessibility preferences |
## Recent history

- [[2026-03-31-your-items-are-waiting]] — 6/10 (2026-03-31)
- [[2026-03-31-trail-tested-track-ready-meet-the-new-agravic]] — 6/10 (2026-03-31)
- [[2026-03-30-test-pro-us-na-u-bundle-full-en-03312026everything-s-better-in-pairs]] — 5/10 (2026-03-30)

