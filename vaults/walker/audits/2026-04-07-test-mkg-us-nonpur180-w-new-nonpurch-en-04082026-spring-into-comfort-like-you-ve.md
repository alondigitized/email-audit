---
slug: 2026-04-07-test-mkg-us-nonpur180-w-new-nonpurch-en-04082026-spring-into-comfort-like-you-ve
type: email
date: 2026-04-07
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPUR180_W_NEW_NONPURCH_EN_04082026🌱 Spring into comfort like you've never felt before!"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NONPUR180_W_NEW_NONPURCH_EN_04082026🌱 Spring into comfort like you've never felt before!
**Score:** 5/10 · **Type:** Email audit · **2026-04-07**
## Executive summary

- A non-purchaser reactivation email targeting women, built around a spring comfort narrative. The email leans on discoverability — cycling through product categories — but the hero is underpowered and the value proposition gets buried quickly. The 20% off offer is present but doesn't anchor the experience the way it should for a lapsed-buyer audience that needs a reason to act now.
- Functional but forgettable. For a non-purchaser segment this needs sharper urgency and a stronger opening conviction — the email coasts on category browsing and never makes a compelling case for why *now*.

## What's working

- **Category sweep is solid.** Casual Sneakers → Slip-Ins → Sandals → Wide Fit is a logical spring progression and covers key intent segments in one email.
- **Visual variety.** Each category has a distinct product shot; the scroll stays visually fresh.
- **Skechers Comfort Club / 50% off closing offer** gives a late-email incentive for loyalty sign-up — reasonable placement for an upsell to non-purchasers.
- **Wide Fit callout.** Smart inclusion for a brand with strong fit-inclusivity positioning; differentiates from generic shoe brands.

## What's weak

- **Hero is undersized and vague.** "New for Her" with 20% off exists but reads small — the discount and the "new" hook compete without either winning. The hero image is modest and the CTA is generic ("Shop Now").
- **"Spring into comfort" is invisible in the body.** The subject line promises this as the central theme, but the email body doesn't reinforce it. There's no seasonal moment, no warmth, no sensory language — just a product grid.
- **Five-star rating module is orphaned.** Stars appear under the hero with no product name, no review text, no context. It reads as decorative rather than persuasive.
- **20% off is front-loaded but not repeated.** For a non-purchaser audience that needs multiple nudges, the offer disappears after the hero and never reappears until the Comfort Club block — a long cold stretch.
- **Preview text is broken.** The recipient sees raw URL strings in the preview, not copy. This is a significant open-rate hit and a credibility problem.

## Recommendations

- 1. **Fix the preview text immediately.** Raw URLs in the preview kill opens before the email is even seen. This is the highest-priority fix.
- 2. **Anchor the 20% off offer in the hero with a deadline.** Non-purchasers need urgency. "20% off — this week only" or similar forces a decision.
- 3. **Give the star rating a product and a quote.** One attributed review under a specific shoe ("★★★★★ — 'I walked 10 miles and forgot I had shoes on'") converts better than floating stars.
- 4. **Carry the spring theme visually.** One lifestyle shot — outdoor setting, light colors, seasonal context — would make the "Spring into comfort" subject line land. Right now the email looks like any other month.
- 5. **Repeat the offer mid-email.** Drop a slim banner ("Your 20% off is waiting — Shop Now") between Sandals and Wide Fit to re-engage scrollers who missed the top.
- | Priority | Action |
- |---|---|
- | **Critical** | Remove `[Test]:` prefix from subject line before any live deployment |
- | **High** | Migrate all `http://image.emails.skechers.com/...` image sources to `https://` |
- | **High** | Fix Return Path pixel URL: prepend `https://` to `pixel.app.returnpath.net/pixel.gif?...` |
- | **High** | Confirm SPF/DKIM signing is active for the AgentMail relay path |
- | **Medium** | Add `alt=""` to the 3 unnamed content images; add `alt=""` explicitly to tracking pixels |
- | **Medium** | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to the respective `<meta>` tags |
- | **Medium** | Replace `plain-text` auto-generation with a curated plain-text version to reduce URL density below 40% |
- | **Low** | Change `-webkit-text-size-adjust: none` to `-webkit-text-size-adjust: 100%` globally |
- | **Low** | Spot-check 3 CTA redirect chains to verify UTM parameters survive the `click.emails.skechers.com` redirect |

## Full review
## Executive Summary

A non-purchaser reactivation email targeting women, built around a spring comfort narrative. The email leans on discoverability — cycling through product categories — but the hero is underpowered and the value proposition gets buried quickly. The 20% off offer is present but doesn't anchor the experience the way it should for a lapsed-buyer audience that needs a reason to act now.

---

## Business Impact Score: 5/10

Functional but forgettable. For a non-purchaser segment this needs sharper urgency and a stronger opening conviction — the email coasts on category browsing and never makes a compelling case for why *now*.

---

## What's Working

- **Category sweep is solid.** Casual Sneakers → Slip-Ins → Sandals → Wide Fit is a logical spring progression and covers key intent segments in one email.
- **Visual variety.** Each category has a distinct product shot; the scroll stays visually fresh.
- **Skechers Comfort Club / 50% off closing offer** gives a late-email incentive for loyalty sign-up — reasonable placement for an upsell to non-purchasers.
- **Wide Fit callout.** Smart inclusion for a brand with strong fit-inclusivity positioning; differentiates from generic shoe brands.

---

## What's Weak

- **Hero is undersized and vague.** "New for Her" with 20% off exists but reads small — the discount and the "new" hook compete without either winning. The hero image is modest and the CTA is generic ("Shop Now").
- **"Spring into comfort" is invisible in the body.** The subject line promises this as the central theme, but the email body doesn't reinforce it. There's no seasonal moment, no warmth, no sensory language — just a product grid.
- **Five-star rating module is orphaned.** Stars appear under the hero with no product name, no review text, no context. It reads as decorative rather than persuasive.
- **20% off is front-loaded but not repeated.** For a non-purchaser audience that needs multiple nudges, the offer disappears after the hero and never reappears until the Comfort Club block — a long cold stretch.
- **Preview text is broken.** The recipient sees raw URL strings in the preview, not copy. This is a significant open-rate hit and a credibility problem.

---

## Recommendations

1. **Fix the preview text immediately.** Raw URLs in the preview kill opens before the email is even seen. This is the highest-priority fix.
2. **Anchor the 20% off offer in the hero with a deadline.** Non-purchasers need urgency. "20% off — this week only" or similar forces a decision.
3. **Give the star rating a product and a quote.** One attributed review under a specific shoe ("★★★★★ — 'I walked 10 miles and forgot I had shoes on'") converts better than floating stars.
4. **Carry the spring theme visually.** One lifestyle shot — outdoor setting, light colors, seasonal context — would make the "Spring into comfort" subject line land. Right now the email looks like any other month.
5. **Repeat the offer mid-email.** Drop a slim banner ("Your 20% off is waiting — Shop Now") between Sandals and Wide Fit to re-engage scrollers who missed the top.

---

## Bottom Line

Structurally complete, but strategically soft. The 20% off hook needed to run through the whole email; instead it fires once and disappears. For a non-purchaser who's never converted, the email doesn't answer "why now" — it just shows products. Fix the preview text (critical), sharpen the hero urgency, and add one lifestyle visual to justify the spring framing.

---

## Evidence

**Overall purpose:** Spring non-purchaser reactivation targeting women. Goal is first conversion via a 20% off offer and category exposure.

**Hero / primary value proposition:** "New for Her" headline, product shot of white sneakers, 20% off callout, Shop Now CTA. Functional but low-impact. The discount is present but not dramatized; the "new" and "comfort" angles blur together.

**Membership / benefits section:** Skechers Comfort Club block near the bottom offers 50% off as a loyalty enrollment hook. Well-placed as a secondary close for fence-sitters.

**Product discoverability / recommendation modules:** Four category modules — Casual Sneakers, Slip-Ins, Sandals, Wide Fit — each with a product image and "Shop [Category]" CTA. Clean and scannable. No personalization signals visible, but the breadth covers likely intent clusters for the segment.

**Utility / secondary modules:** Standard footer with legal text, unsubscribe, and brand links. No apparent navigation bar.

**Bugs / friction / clarity issues:** Preview text shows raw URL strings — visible and damaging. Star rating module has no associated product name or review copy, making it effectively meaningless. Hero CTA ("Shop Now") is generic and doesn't reinforce the offer or category.

---

## Technical Audit

## Technical Audit — Skechers `MKG_US_NONPUR180_W_NEW_NONPURCH_EN_04082026`

---

### 1. Technical Summary

This email has a critical production-readiness defect (`[Test]:` subject prefix) and a pervasive HTTP mixed-content problem affecting 15+ images across `image.emails.skechers.com`. SPF/DKIM authentication status is unverifiable through the relay used.

---

### 2. Link & Tracking Issues

**`[CRITICAL]` Test prefix in subject line**
Subject is `[Test]: MKG_US_NONPUR180_W_NEW_NONPURCH_EN_04082026...` — if deployed to live list, recipients will see the `[Test]:` label. Must be stripped before production send.

**`[WARN]` 29 click-tracking links unprobed**
All CTAs route through `click.emails.skechers.com` redirect. Automated QA skipped HTTP probes on these — broken destination URLs cannot be ruled out without manual spot-check.

**`[WARN]` Return Path pixel missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `https://` prefix — this is a bare hostname, not a valid URL. The pixel will fail to load in all clients. Should be `https://pixel.app.returnpath.net/pixel.gif?...`

**`[INFO]` Third-party DMP pixels present**
Three Krux (`beacon.krxd.net`) pixels and one `ink1000.com` pixel fire on open. These are expected for Salesforce Marketing Cloud + Krux DMP integrations, but the `ink1000.com` pixel uses HTTP (see Section 3).

---

### 3. Rendering & Accessibility

**`[HIGH]` 15 images served over HTTP**
All footer/nav images are loaded from `http://image.emails.skechers.com/...`. Gmail, Apple Mail, and most modern clients block HTTP image loads, breaking social icons, app store badges, payment logos, and the Skechers logo:

| Image | URL prefix |
|---|---|
| Skechers logo | `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...` |
| App Store badge | `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...` |
| Google Play badge | `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...` |
| Instagram, Twitter, Facebook, Pinterest, YouTube icons | `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/...` |
| AfterPay logo | `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...` |
| `ink1000.com` open pixel | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` |

All should use `https://`.

**`[WARN]` 4 images missing alt text**

| Filename | Context |
|---|---|
| `o.gif` (ink1000.com) | Open-tracking pixel — `alt=""` acceptable, but currently absent |
| `49468f73-4651-4af3-bea2-61d1ae5db486.png` | Unknown — no alt |
| `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` | Unknown — no alt |
| `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` | Unknown — no alt |

Tracking pixels should have `alt=""` explicitly set. Content images need descriptive alt text for screen readers and image-off rendering.

**`[WARN]` Malformed `<meta>` tags**
Two `<meta>` tags are missing required `http-equiv` attributes:
```html
<!-- Missing http-equiv="Content-Type" -->
<meta content="text/html; charset=utf-8" />
<!-- Missing http-equiv="X-UA-Compatible" -->
<meta content="IE=Edge" />
```
These are inert as written. The charset declaration in particular may cause encoding issues in edge-case clients.

**`[WARN]` Global `-webkit-text-size-adjust: none`**
```css
* { -webkit-text-size-adjust: none; }
```
Applying `none` (vs `100%`) globally disables user/OS text scaling across all elements, which is an accessibility regression for low-vision users on iOS.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g., `%%field%%`, `{{field}}`) detected in the visible HTML. The subscriber ID in the Krux pixel (`partner_uid=7187828`) appears to be a static test value — confirm it will resolve to a real subscriber hash in production.

Campaign date encoded in pixel URLs (`04082026`) corresponds to **April 8, 2026**, one day after today's send date. Verify campaign ID and date alignment.

---

### 5. Compliance

**`[WARN]` SPF/DKIM authentication unverifiable**
QA reports: `Authentication-Results header not found — Expected via AgentMail relay`. Cannot confirm SPF pass/DKIM signature for `emails.skechers.com`. If this relay bypasses signing, inbox placement and DMARC alignment will be at risk.

**`[INFO]` Preheader present**
```html
<div class="preheader">One Pair or Two? 20% off your first pair or BOGO 50% off</div>
```
Correctly hidden via `display:none !important`. Preheader/subject alignment should be confirmed — subject says "Spring into comfort" while preheader leads with the offer.

CAN-SPAM physical address and unsubscribe link cannot be verified from truncated HTML, but are standard Skechers footer inclusions — confirm present in full source.

---

### 6. Email-to-Site Continuity

**`[WARN]` Plain-text version is 70% URLs**
QA: `3161/4512 chars are URLs`. A machine-generated plain-text version with this ratio offers near-zero readability and may trigger spam filters that penalize URL-dense plain-text bodies.

UTM parameter verification is blocked because all 29 CTAs route through `click.emails.skechers.com` redirect wrappers — destination URL parameters cannot be inspected from source. Spot-check 2–3 primary CTAs by following redirects to confirm `utm_source`, `utm_medium`, `utm_campaign` are appended correctly on landing pages.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **Critical** | Remove `[Test]:` prefix from subject line before any live deployment |
| **High** | Migrate all `http://image.emails.skechers.com/...` image sources to `https://` |
| **High** | Fix Return Path pixel URL: prepend `https://` to `pixel.app.returnpath.net/pixel.gif?...` |
| **High** | Confirm SPF/DKIM signing is active for the AgentMail relay path |
| **Medium** | Add `alt=""` to the 3 unnamed content images; add `alt=""` explicitly to tracking pixels |
| **Medium** | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to the respective `<meta>` tags |
| **Medium** | Replace `plain-text` auto-generation with a curated plain-text version to reduce URL density below 40% |
| **Low** | Change `-webkit-text-size-adjust: none` to `-webkit-text-size-adjust: 100%` globally |
| **Low** | Spot-check 3 CTA redirect chains to verify UTM parameters survive the `click.emails.skechers.com` redirect |
## Recent history

- [[2026-04-07-test-mkg-us-na-u-golf-perf-en-04082026-v2find-the-right-shoe-for-your-game]] — 6/10 (2026-04-07)
- [[2026-04-07-test-mkg-us-na-u-golf-perf-en-04082026find-the-right-shoe-for-your-game]] — 6/10 (2026-04-07)
- [[2026-04-07-test-ret-us-na-u-store1408-zip-en-04092026celebrate-our-birthday-in-buffalo]] — 5/10 (2026-04-07)

