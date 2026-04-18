---
slug: 2026-04-03-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04052026spring-fling-sale-double-the-
type: email
date: 2026-04-03
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04052026Spring Fling Sale = Double the Style & Savings"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04052026Spring Fling Sale = Double the Style & Savings
**Score:** 5/10 · **Type:** Email audit · **2026-04-03**
## Executive summary

- A straightforward Spring Fling sale email anchored by a BOGO 50% off hero offer, followed by a gender/category navigation stack. The layout is functional but generic — it reads more like a site navigation menu than a sale event. The hero is visually competent, but the category modules below it contribute little beyond what a homepage already provides. Low creative ambition for what should be a high-energy seasonal sale.
- Communicates the offer clearly, but misses the urgency and curated product storytelling that drive click-through on sale emails. Average execution against a strong promotional premise.

## What's working

- **Hero offer is prominent and readable.** "Buy One Get One 50% Off" is legible at a glance with clear CTA ("Shop Now").
- **Gender segmentation is logical.** Women's → Men's → Girls → Boys flow mirrors standard shopper journeys.
- **Each category has a lifestyle shoe image** that gives the section visual identity.
- **Additional navigation links** (Women, Men, Kids, Clothing, New Arrivals, Sale) give secondary entry points for browsers.
- **Footer utility is complete** — app download, curbside pickup, store finder, social links, and legal copy are all present and visible.

## What's weak

- **The sale energy disappears after the hero.** Once you scroll past the BOGO banner, every section is a generic "Shop Women's / Shop Men's" tile. There's no sale callout, no price, no savings language anchored to any of the category modules.
- **No product specificity.** Each category shows one lifestyle image, but zero actual products on promotion. For a BOGO event, showing 2–3 specific styles would reinforce the offer and drive decisiveness.
- **The handwritten-script category labels** (Women, Men, Girls, Boys) are charming on brand but read small and low-contrast at email rendering size — they feel decorative rather than functional.
- **No urgency mechanism.** No end date, no countdown, no "limited time" language visible anywhere below the hero. The offer floats without a deadline.
- **Subject line bleeds into preview text.** The preheader shown in the email metadata is raw URL text — a clear rendering/configuration issue that would damage inbox open appeal.

## Recommendations

- 1. **Repeat the sale offer in each category module.** Add a small "BOGO 50% Off" badge or subline to each gender section so the promotional context persists through the scroll.
- 2. **Feature 2–3 specific sale styles per category** rather than one lifestyle image — show product, price, and discounted price side by side.
- 3. **Add a visible sale end date** in the hero or immediately below it. "Ends Sunday" outperforms evergreen sale copy.
- 4. **Fix the preheader.** The preview text currently exposes a raw URL. A compelling one-liner ("Your BOGO 50% off moment starts now") would lift open rates.
- 5. **Increase contrast on script labels.** Either bold them, increase point size, or switch to a high-contrast variant so they read cleanly on mobile.
- | Priority | Action |
- |---|---|
- | **BLOCKER** | Remove `[Test]:` prefix and campaign ID from subject before production deployment |
- | **HIGH** | Migrate all `image.emails.skechers.com` asset URLs from `http://` to `https://` |
- | **HIGH** | Fix ReturnPath pixel URL — prepend `https://` to `pixel.app.returnpath.net/pixel.gif` |
- | **HIGH** | Fix `ink1000.com` tracker URL — change to `https://` |
- | **MEDIUM** | Confirm `partner_uid=7187828` in Krux subid beacon is not a stuck merge token |
- | **MEDIUM** | Add explicit `alt=""` to the 4 images missing alt text; add descriptive alt to functional images |
- | **MEDIUM** | Validate SPF/DKIM/DMARC pass on a seed send before broadcast |
- | **LOW** | Replace `* { -webkit-text-size-adjust: none }` with targeted selectors |
- | **LOW** | Add Outlook-safe fallback for the CSS mobile/desktop show-hide pattern |
- | **LOW** | Sample 3–5 click URLs to verify UTM parameters survive the redirect chain |

## Full review
## 1. Executive Summary

A straightforward Spring Fling sale email anchored by a BOGO 50% off hero offer, followed by a gender/category navigation stack. The layout is functional but generic — it reads more like a site navigation menu than a sale event. The hero is visually competent, but the category modules below it contribute little beyond what a homepage already provides. Low creative ambition for what should be a high-energy seasonal sale.

---

## 2. Business Impact Score: 5/10

Communicates the offer clearly, but misses the urgency and curated product storytelling that drive click-through on sale emails. Average execution against a strong promotional premise.

---

## 3. What's Working

- **Hero offer is prominent and readable.** "Buy One Get One 50% Off" is legible at a glance with clear CTA ("Shop Now").
- **Gender segmentation is logical.** Women's → Men's → Girls → Boys flow mirrors standard shopper journeys.
- **Each category has a lifestyle shoe image** that gives the section visual identity.
- **Additional navigation links** (Women, Men, Kids, Clothing, New Arrivals, Sale) give secondary entry points for browsers.
- **Footer utility is complete** — app download, curbside pickup, store finder, social links, and legal copy are all present and visible.

---

## 4. What's Weak

- **The sale energy disappears after the hero.** Once you scroll past the BOGO banner, every section is a generic "Shop Women's / Shop Men's" tile. There's no sale callout, no price, no savings language anchored to any of the category modules.
- **No product specificity.** Each category shows one lifestyle image, but zero actual products on promotion. For a BOGO event, showing 2–3 specific styles would reinforce the offer and drive decisiveness.
- **The handwritten-script category labels** (Women, Men, Girls, Boys) are charming on brand but read small and low-contrast at email rendering size — they feel decorative rather than functional.
- **No urgency mechanism.** No end date, no countdown, no "limited time" language visible anywhere below the hero. The offer floats without a deadline.
- **Subject line bleeds into preview text.** The preheader shown in the email metadata is raw URL text — a clear rendering/configuration issue that would damage inbox open appeal.

---

## 5. Recommendations

1. **Repeat the sale offer in each category module.** Add a small "BOGO 50% Off" badge or subline to each gender section so the promotional context persists through the scroll.
2. **Feature 2–3 specific sale styles per category** rather than one lifestyle image — show product, price, and discounted price side by side.
3. **Add a visible sale end date** in the hero or immediately below it. "Ends Sunday" outperforms evergreen sale copy.
4. **Fix the preheader.** The preview text currently exposes a raw URL. A compelling one-liner ("Your BOGO 50% off moment starts now") would lift open rates.
5. **Increase contrast on script labels.** Either bold them, increase point size, or switch to a high-contrast variant so they read cleanly on mobile.

---

## 6. Bottom Line

This email ships the core offer but coasts on it. The category navigation grid below the hero adds body without adding value — it's a homepage in email form. For a "Spring Fling Sale," the experience should feel festive and product-specific. Right now it feels like a category browse prompt with a BOGO banner bolted on top.

---

## 7. Evidence

**Overall purpose:** Promotional sale email driving clicks for a BOGO 50% off event, presumably tied to an April 5 spring sale window.

**Hero / primary value proposition:** Full-width banner with a braided slide sandal image, "Buy One Get One 50% Off" headline in high-contrast text, and a "Shop Now" CTA button. Clear and legible.

**Membership / benefits section:** Not present. No loyalty, AdiClub-equivalent, or member-exclusive messaging.

**Product discoverability / recommendation modules:** Four gender-category tiles (Women's, Men's, Girls', Boys'), each with a single lifestyle shoe image and a CTA button. No specific product names, prices, or curated selections visible.

**Utility / secondary modules:** "Shop Additional Styles" text links (Women, Men, Kids, Clothing, New Arrivals, Sale). App download, curbside pickup, and store-finder CTAs in the footer.

**Bugs / friction / clarity issues:** The preheader/preview text visible in the email metadata is a raw URL string — this is the most actionable visible defect. The handwritten-script gender labels are low-contrast and may strain readability on smaller screens.

---

## Technical Audit

## Technical Audit — Skechers Spring Fling Sale
**Campaign:** `PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04052026`
**Sender:** no-reply@emails.skechers.com

---

### 1. Technical Summary

The email has a critical pre-send blocker: the `[Test]:` prefix and raw campaign ID are present in the delivered subject line. Additionally, all image assets are served over HTTP rather than HTTPS, creating mixed-content failures in major clients that proxy images (Gmail, Outlook).

---

### 2. Link & Tracking Issues

**[CRITICAL] Test prefix in subject line not stripped**
Subject delivered as: `[Test]: PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04052026Spring Fling Sale = Double the Style & Savings`
The `[Test]:` seed-list qualifier and the bare campaign ID (`PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04052026`) are fused directly into the subject with no space separator before "Spring." Both must be removed before production send.

**[WARN] 26 click-tracking links unverifiable**
All CTAs route through `click.emails.skechers.com` with encrypted `?qs=` payloads. Destination URLs and UTM parameters could not be resolved by the probe. Final-destination validation requires a render-time unpack or manual sampling.

**[WARN] Third-party sync pixels present**
Three Krux/Salesforce DMP beacons fire on open:
- `beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=<SHA256>`
- `beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=7187828`
- `beacon.krxd.net/1x1_ad_impression.gif?confid=so3yexmpm&advertiserid=100007688&campaignid=...`

The `subid` beacon sends what appears to be a static integer (`7187828`) rather than a subscriber-level ID. Confirm this is intentional and not a merge-token failure.

**[WARN] ReturnPath inbox-monitor pixel missing protocol**
`<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499">` — no `https://` prefix. Some parsers will treat this as a relative path, breaking the deliverability seed monitor.

---

### 3. Rendering & Accessibility

**[HIGH] All `image.emails.skechers.com` assets served over HTTP**
14 confirmed image sources use `http://image.emails.skechers.com/lib/fe3115707564047a731c78/...`. Gmail proxies all images through HTTPS; Outlook 2016+ blocks mixed-content images by default. Affected images include the Skechers logo, social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), app store badges, AfterPay badge, and at least two unnamed product/UI images.

**[WARN] HTTP tracking pixel (third-party domain)**
`http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — non-HTTPS source from `ink1000.com`. Will be blocked or proxied-and-broken in most modern clients.

**[WARN] Missing alt text on 4 images**
- `o.gif` (ink1000.com open tracker)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

Decorative images should carry `alt=""` explicitly; functional images require descriptive alt text for screen readers and image-blocked rendering.

**[WARN] Global `-webkit-text-size-adjust: none`**
`* { -webkit-text-size-adjust: none; }` disables iOS auto-sizing across all elements, including text that may be legitimately too small to read at mobile viewport widths. Scope this to specific containers rather than the wildcard selector.

**[INFO] Mobile/desktop toggle via CSS show/hide**
`.mobile-content { display: block; } .desktop-content { display: none; }` with a `min-width: 768px` media query override. This pattern fails silently in clients that strip `<style>` blocks (Outlook 2007–2019), which will show both versions simultaneously.

---

### 4. Personalization & Merge Tokens

**[WARN] Possible static value in Krux subid beacon**
`partner_uid=7187828` in the `_subid` beacon variant is a static integer. If this is meant to carry a subscriber identifier, it was not merged — verify against the ESP template source. The `_sha25` variant correctly carries a 64-char hex value consistent with a SHA-256 email hash.

**[INFO] No unresolved `%%`, `{{`, or `[[` merge tokens** visible in the truncated source. Full-source scan recommended given truncation.

---

### 5. Compliance

**[WARN] SPF/DKIM authentication status unknown**
`Authentication-Results` header not present in QA capture via AgentMail relay. Cannot confirm SPF pass, DKIM signature, or DMARC alignment. Verify authentication chain on a live seed send before deployment.

**[INFO] Unsubscribe and physical address**
HTML source is truncated and footer could not be inspected. CAN-SPAM requires a functioning unsubscribe mechanism and valid postal address in every commercial email — confirm both are present in the full template.

---

### 6. Email-to-Site Continuity

All 26 CTA links route through the `click.emails.skechers.com` click-redirect wrapper with encrypted query strings. UTM parameter presence and landing-page alignment cannot be confirmed without decrypting or sampling redirect targets. Recommend:
- Manually load a sample of 3–5 CTAs (hero, primary product, footer) and confirm `utm_source`, `utm_medium`, `utm_campaign` are appended to final destination URLs.
- Confirm campaign ID in UTMs matches `PRO_US_ECMPURL24_U_SITEBUNDLE_ECOM_EN_04052026` (not the test variant or a stale value).

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **BLOCKER** | Remove `[Test]:` prefix and campaign ID from subject before production deployment |
| **HIGH** | Migrate all `image.emails.skechers.com` asset URLs from `http://` to `https://` |
| **HIGH** | Fix ReturnPath pixel URL — prepend `https://` to `pixel.app.returnpath.net/pixel.gif` |
| **HIGH** | Fix `ink1000.com` tracker URL — change to `https://` |
| **MEDIUM** | Confirm `partner_uid=7187828` in Krux subid beacon is not a stuck merge token |
| **MEDIUM** | Add explicit `alt=""` to the 4 images missing alt text; add descriptive alt to functional images |
| **MEDIUM** | Validate SPF/DKIM/DMARC pass on a seed send before broadcast |
| **LOW** | Replace `* { -webkit-text-size-adjust: none }` with targeted selectors |
| **LOW** | Add Outlook-safe fallback for the CSS mobile/desktop show-hide pattern |
| **LOW** | Sample 3–5 click URLs to verify UTM parameters survive the redirect chain |
## Recent history

- [[2026-04-03-test-pro-us-nonpur180-u-sitebundle-nonpurch-en-04052026take-your-pick-during-the]] — 5/10 (2026-04-03)
- [[2026-04-03-discover-the-support-you-ve-been-looking-for]] — 5/10 (2026-04-03)
- [[2026-04-03-did-you-forget-something]] — 5/10 (2026-04-03)

