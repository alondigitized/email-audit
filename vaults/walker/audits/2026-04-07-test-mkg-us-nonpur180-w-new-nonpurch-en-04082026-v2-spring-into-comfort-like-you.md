---
slug: 2026-04-07-test-mkg-us-nonpur180-w-new-nonpurch-en-04082026-v2-spring-into-comfort-like-you
type: email
date: 2026-04-07
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPUR180_W_NEW_NONPURCH_EN_04082026_V2🌱 Spring into comfort like you've never felt before!"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NONPUR180_W_NEW_NONPURCH_EN_04082026_V2🌱 Spring into comfort like you've never felt before!
**Score:** 5/10 · **Type:** Email audit · **2026-04-07**
## Executive summary

- A category-led re-engagement email targeting women who haven't purchased in 180 days, anchored on a "NEW for HER" hero and four spring category modules. The structure is functional but forgettable — no urgency, no personalization signal, and a 50% off offer buried so deep it might as well not exist. The spring creative concept is mostly confined to the subject line; the body doesn't deliver on it. Solid bones, weak execution.
- High-value segment (lapsed women buyers), but the email undersells itself. The discount is the most motivating element and it's placed last. Category modules are repetitive without a clear hierarchy of what matters most for this recipient.

## What's working

- **"NEW for HER" hero** is a clean, direct value proposition for the target audience — new product framing is appropriate for non-purchasers who may have gone cold
- **Star ratings** under the hero product add credibility and social proof without feeling heavy-handed
- **Category modules** (Casual Sneakers, Slip-Ins, Sandals, Wide Fit) cover spring's most relevant footwear shopping occasions in a logical sequence
- **"Wide Fit" module** is a smart inclusivity signal — differentiator for a segment that often can't find options elsewhere
- **Footer navigation** (Women / Men / Kids / Clothing / New Arrivals / Sale) is well-organized and functional
- **50% OFF banner** near the bottom is visually prominent and clear when you reach it

## What's weak

- **The offer is buried**: 50% off is the most conversion-worthy element in this email and it lives at the bottom, after four identical-looking category modules. Non-purchasers need a reason to act early — this email makes them scroll for it
- **Spring concept is surface-level**: The subject line promises spring energy; the email delivers a generic catalog. No spring color palette, no lifestyle imagery, no seasonal framing beyond "NEW for HER"
- **Category modules are repetitive**: Casual Sneakers → Slip-Ins → Sandals → Wide Fit all look identical in layout and visual weight. There's no editorial hierarchy — nothing signals which category is most relevant or most on-trend right now
- **"Comfy and Stylish" section feels disconnected**: The five-star block between the hero and the categories doesn't have a clear role — it reads like a repeat of the hero proposition rather than a distinct segment
- **No personalization hook**: For a 180-day lapsed segment, there's no signal that Skechers knows or cares about this person's history. A generic "new for her" email is hard to distinguish from a broadcast to cold traffic
- **Subject line has "[Test]:" prefix**: If this is being reviewed pre-send, the test prefix must be stripped before deployment

## Recommendations

- 1. **Move the 50% off offer to the hero or directly below it** — non-purchasers need a compelling reason to re-engage upfront, not as a last resort before the footer
- 2. **Add spring visual identity**: Swap neutral product shots for lifestyle imagery with seasonal cues — outdoor settings, spring colors, or thematic copy that makes "spring into comfort" feel earned
- 3. **Differentiate one category module as the editorial pick**: Lead with one category as "the spring pick" with a distinct visual treatment, then support with secondary categories. Every module being equal weight means none stand out
- 4. **Remove or integrate the "Comfy and Stylish" star section**: Either make it a specific product recommendation or fold the social proof into the hero — as a standalone block it adds friction without adding value
- 5. **Strip the [Test]: prefix** from the subject line before any live send
- | Priority | Issue | Action |
- |---|---|---|
- | **BLOCKER** | `[Test]:` in subject line | Remove before any live deployment |
- | **HIGH** | ReturnPath pixel missing protocol scheme | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
- | **HIGH** | 15 HTTP image URLs | Migrate `http://image.emails.skechers.com/` to `https://` — all assets appear to be on the same CDN and should support HTTPS |
- | **HIGH** | SPF/DKIM unconfirmed | Pull raw SMTP headers from a seeded inbox and verify `Authentication-Results` shows `dkim=pass` and `spf=pass` for `emails.skechers.com` |
- | **MEDIUM** | 4 images missing `alt` attribute | Add `alt=""` at minimum to suppress screen-reader noise; add descriptive alt for any content images |
- | **MEDIUM** | Plain-text body is 70% URLs | Ensure plain-text version has human-readable copy, not just URL strings — this ratio triggers Bayesian spam filters |
- | **LOW** | UTM continuity unverified | Probe at least 3 representative CTAs through the click-redirect to confirm `utm_campaign`, `utm_source`, `utm_medium` land on skechers.com correctly |

## Full review
## Email Review: Skechers Spring Non-Purchaser Re-Engagement

---

### 1. Executive Summary

A category-led re-engagement email targeting women who haven't purchased in 180 days, anchored on a "NEW for HER" hero and four spring category modules. The structure is functional but forgettable — no urgency, no personalization signal, and a 50% off offer buried so deep it might as well not exist. The spring creative concept is mostly confined to the subject line; the body doesn't deliver on it. Solid bones, weak execution.

---

### 2. Business Impact Score: **5/10**

High-value segment (lapsed women buyers), but the email undersells itself. The discount is the most motivating element and it's placed last. Category modules are repetitive without a clear hierarchy of what matters most for this recipient.

---

### 3. What's Working

- **"NEW for HER" hero** is a clean, direct value proposition for the target audience — new product framing is appropriate for non-purchasers who may have gone cold
- **Star ratings** under the hero product add credibility and social proof without feeling heavy-handed
- **Category modules** (Casual Sneakers, Slip-Ins, Sandals, Wide Fit) cover spring's most relevant footwear shopping occasions in a logical sequence
- **"Wide Fit" module** is a smart inclusivity signal — differentiator for a segment that often can't find options elsewhere
- **Footer navigation** (Women / Men / Kids / Clothing / New Arrivals / Sale) is well-organized and functional
- **50% OFF banner** near the bottom is visually prominent and clear when you reach it

---

### 4. What's Weak

- **The offer is buried**: 50% off is the most conversion-worthy element in this email and it lives at the bottom, after four identical-looking category modules. Non-purchasers need a reason to act early — this email makes them scroll for it
- **Spring concept is surface-level**: The subject line promises spring energy; the email delivers a generic catalog. No spring color palette, no lifestyle imagery, no seasonal framing beyond "NEW for HER"
- **Category modules are repetitive**: Casual Sneakers → Slip-Ins → Sandals → Wide Fit all look identical in layout and visual weight. There's no editorial hierarchy — nothing signals which category is most relevant or most on-trend right now
- **"Comfy and Stylish" section feels disconnected**: The five-star block between the hero and the categories doesn't have a clear role — it reads like a repeat of the hero proposition rather than a distinct segment
- **No personalization hook**: For a 180-day lapsed segment, there's no signal that Skechers knows or cares about this person's history. A generic "new for her" email is hard to distinguish from a broadcast to cold traffic
- **Subject line has "[Test]:" prefix**: If this is being reviewed pre-send, the test prefix must be stripped before deployment

---

### 5. Recommendations

1. **Move the 50% off offer to the hero or directly below it** — non-purchasers need a compelling reason to re-engage upfront, not as a last resort before the footer
2. **Add spring visual identity**: Swap neutral product shots for lifestyle imagery with seasonal cues — outdoor settings, spring colors, or thematic copy that makes "spring into comfort" feel earned
3. **Differentiate one category module as the editorial pick**: Lead with one category as "the spring pick" with a distinct visual treatment, then support with secondary categories. Every module being equal weight means none stand out
4. **Remove or integrate the "Comfy and Stylish" star section**: Either make it a specific product recommendation or fold the social proof into the hero — as a standalone block it adds friction without adding value
5. **Strip the [Test]: prefix** from the subject line before any live send

---

### 6. Bottom Line

The email will get a click from someone already interested in Skechers. It won't re-activate someone on the fence. For a 180-day lapsed segment, the bar is higher — you need a reason to act, not just a reason to browse. Lead with the deal, wrap it in spring creative, and give the category modules a reason to exist beyond "here are things we sell."

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Re-engage women non-purchasers (180-day lapse) with spring new arrivals and a 50% off offer |
| **Hero / primary value prop** | "NEW for HER" with product image and 5-star rating — appropriate but lacks urgency or seasonal energy |
| **Membership / benefits** | Not present — no loyalty or adiClub equivalent visible |
| **Product discoverability** | Four category modules (Casual Sneakers, Slip-Ins, Sandals, Wide Fit) each with a dedicated CTA — broad coverage, low editorial voice |
| **Utility / secondary modules** | Footer with category nav + "Shop with the App" + "Find a Store" — functional, unobtrusive |
| **Bugs / friction** | Preview text shows raw URLs (visible in the subject metadata) — likely a rendering/configuration issue that damages first impressions in the inbox preview pane; "[Test]:" in subject line must be removed before live send |

---

## Technical Audit

## Technical Audit — Skechers `MKG_US_NONPUR180_W_NEW_NONPURCH_EN_04082026_V2`

---

### 1. Technical Summary

The email has one critical pre-send blocker (test subject prefix) and a systemic HTTP-vs-HTTPS image infrastructure problem affecting 15+ assets. Authentication header visibility is unconfirmed, and a third-party tracking pixel has a malformed URL.

---

### 2. Link & Tracking Issues

**[CRITICAL] Subject line contains `[Test]:` prefix**
The subject is `[Test]: MKG_US_NONPUR180_W_NEW_NONPURCH_EN_04082026_V2🌱 Spring into comfort...`. This must be stripped before any live deployment.

**[WARN] 29 click-tracking links unverifiable**
All CTAs route through `click.emails.skechers.com/?qs=<base64-encrypted-JSON>`. QA skipped HTTP probing on all 29. No broken links confirmed, but no redirect chain or final destination could be validated.

**[WARN] ReturnPath pixel has no protocol scheme**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
Missing `https://` — this resolves as a relative path and will not fire. Inbox placement monitoring via ReturnPath/Validity is silently broken for this send.

**[INFO] Third-party data-match beacons present**
Two Krux/Salesforce DMP user-match pixels (`beacon.krxd.net`) and one ink1000.com pixel are embedded in a hidden `<div>`. These are standard SFMC integrations but contribute to the high URL-to-text ratio flagged in deliverability.

---

### 3. Rendering & Accessibility

**[WARN] 15 image assets served over HTTP, not HTTPS**
All product and footer images are pulled from `http://image.emails.skechers.com/lib/fe3115707564047a731c78/...`. Gmail, Outlook.com, and Apple Mail proxy or block mixed-content HTTP images. Affected assets include the Skechers logo, App Store badge, Google Play badge, all social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), and at least 3 unnamed product images.

Example:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png  (no alt)
```

**[WARN] 4 images missing `alt` text**
- `o.gif` (ink1000 tracking pixel) — minor
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unknown content, no alt
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — unknown content, no alt
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — unknown content, no alt

Blank alt (`alt=""`) is acceptable for decorative images; omitting the attribute entirely is not.

**[INFO] Mobile/desktop CSS toggle is JavaScript-free and media-query-based** — correct pattern, no issues.

**[INFO] `-webkit-text-size-adjust: none` applied globally** — suppresses iOS font scaling. Intentional pattern for Skechers template but worth noting for accessibility.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens or raw AMPscript/Liquid variable syntax detected in the truncated source. Subscriber ID `7187828` and hashed UID `af077ed316c5f351a19c6339a11ba29c13eca11083c2a7fd78f2d46c353dbb4f` are present in the Krux beacon URLs — these appear to be correctly rendered subscriber values, not broken tokens.

Preheader text is hardcoded: `"One Pair or Two? 20% off your first pair or BOGO 50% off"` — no personalization, which is expected for this segment.

---

### 5. Compliance

**[WARN] SPF/DKIM authentication status unconfirmed**
QA reports `Authentication-Results header not found` via the AgentMail relay. Cannot confirm SPF pass/DKIM signature for `emails.skechers.com`. This needs verification against the live SMTP headers from the ESP (SFMC), not the relay preview.

**[INFO] CAN-SPAM physical address and unsubscribe** — not visible in the truncated HTML. Must be confirmed present in the full footer before send. Standard Skechers templates include these; flag if this version was modified.

**[INFO] List-Unsubscribe header** — not inspectable from HTML source alone; must be confirmed in SMTP headers.

---

### 6. Email-to-Site Continuity

All 29 CTAs are wrapped in `click.emails.skechers.com` redirects with encrypted query strings — UTM parameters cannot be inspected directly from source. QA skipped HTTP probing on these links, so final landing page URLs and UTM attribution (`utm_source`, `utm_medium`, `utm_campaign`) are unverified.

The campaign ID `MKG_US_NONPUR180_W_NEW_NONPURCH_EN_04082026` appears consistently in both the Krux impression pixel and the ink1000 tracking pixel, confirming campaign tagging is applied at the pixel level. Click-level UTM continuity to skechers.com remains unconfirmed.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **BLOCKER** | `[Test]:` in subject line | Remove before any live deployment |
| **HIGH** | ReturnPath pixel missing protocol scheme | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
| **HIGH** | 15 HTTP image URLs | Migrate `http://image.emails.skechers.com/` to `https://` — all assets appear to be on the same CDN and should support HTTPS |
| **HIGH** | SPF/DKIM unconfirmed | Pull raw SMTP headers from a seeded inbox and verify `Authentication-Results` shows `dkim=pass` and `spf=pass` for `emails.skechers.com` |
| **MEDIUM** | 4 images missing `alt` attribute | Add `alt=""` at minimum to suppress screen-reader noise; add descriptive alt for any content images |
| **MEDIUM** | Plain-text body is 70% URLs | Ensure plain-text version has human-readable copy, not just URL strings — this ratio triggers Bayesian spam filters |
| **LOW** | UTM continuity unverified | Probe at least 3 representative CTAs through the click-redirect to confirm `utm_campaign`, `utm_source`, `utm_medium` land on skechers.com correctly |
## Recent history

- [[2026-04-07-test-mkg-us-nonpur180-w-new-nonpurch-en-04082026-spring-into-comfort-like-you-ve]] — 5/10 (2026-04-07)
- [[2026-04-07-test-mkg-us-na-u-golf-perf-en-04082026-v2find-the-right-shoe-for-your-game]] — 6/10 (2026-04-07)
- [[2026-04-07-test-mkg-us-na-u-golf-perf-en-04082026find-the-right-shoe-for-your-game]] — 6/10 (2026-04-07)

