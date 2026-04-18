---
slug: 2026-04-09-test-mkg-us-nonpur180-w-arch-nonpurch-en-04102026your-perfect-first-pair-is-here
type: email
date: 2026-04-09
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPUR180_W_ARCH_NONPURCH_EN_04102026Your Perfect First Pair is Here"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NONPUR180_W_ARCH_NONPURCH_EN_04102026Your Perfect First Pair is Here
**Score:** 5/10 · **Type:** Email audit · **2026-04-09**
## Executive summary

- A non-purchaser acquisition email targeting women with arch support products — but it undersells that angle almost entirely. The "Your Perfect First Pair" subject line promises a curated, personal intro, yet the email delivers a generic multi-category catalog drop. The Arcade Color Drop hero is visually strong, but the arch support value proposition — the actual reason this list segment exists — is buried or invisible. The experience reads like a repurposed promotional blast, not a first-pair welcome guide.
- Competent execution, weak strategic alignment. The creative is clean but the email fails its own brief: converting a non-purchaser by making the first step feel obvious and low-risk.

## What's working

- **Hero visual is compelling.** The Arcade Color Drop section uses bright, varied colorways across multiple shoe silhouettes — genuinely eye-catching and product-forward.
- **Clear sectioning.** Three distinct modules (Arcade Color Drop, Arcade Sandals, Arcade Hands Free Slip-Ins) create a readable scroll without visual chaos.
- **BOGO banner at the top.** The "Buy One, Get One 50% Off" offer is immediately visible — strong incentive for a first purchase.
- **Product variety without clutter.** Each module shows multiple colorways without feeling overwhelming.

## What's weak

- **The arch support angle is absent from the visual.** For a segment called `ARCH_NONPURCH`, the email shows zero visible messaging about arch support, comfort technology, or fit reassurance — the exact barriers a non-purchaser needs addressed.
- **"Your Perfect First Pair" promise isn't kept.** There's no editorial curation, no "start here" signpost, no guidance on which product is right for whom. It's three product modules, not a recommendation.
- **CTAs are generic.** "Shop Now" buttons repeat across every section with no differentiation. A non-purchaser needs more friction-reducing copy ("Try risk-free," "Find your fit," etc.).
- **No social proof.** No ratings, no "best seller" callouts, no testimonials — the exact trust signals that overcome first-purchase hesitation.
- **Preview text is broken.** The preview visible in the send metadata is a raw URL string — a significant deliverability and first-impression problem before the email even opens.
- **Subject line has test prefix exposed.** `[Test]:` is in the subject line — this should not go to live recipients.

## Recommendations

- 1. **Lead with the arch support story.** Swap the hero to feature Arch Fit or a comfort-forward product. One clear headline — "Built for all-day comfort" — does more for a non-purchaser than a color drop.
- 2. **Add a "why Skechers" trust bar.** Ratings count, return policy, or a comfort guarantee — something that lowers the perceived risk of a first purchase.
- 3. **Differentiate CTAs by section.** "Shop Sandals," "Find My Fit," "See All Colors" — anything more specific than repeated "Shop Now."
- 4. **Fix preview text before live send.** The raw URL in preview is a spam signal and looks broken in inbox clients.
- 5. **Remove [Test] prefix** from subject line before any live deployment.
- 6. **Add a single "best seller" or "most comfortable" badge** on at least one product to give non-purchasers a default choice.
- | Priority | Issue | Action |
- |---|---|---|
- | **Critical** | Subject line contains `[Test]:` prefix + campaign ID concatenation | Strip test prefix and validate variable substitution before production send |
- | **Critical** | 12+ images served over `http://image.emails.skechers.com` | Update CDN to serve all assets over HTTPS; update `src` attributes |
- | **High** | Return Path pixel has no URL scheme | Add `https://` to `src="pixel.app.returnpath.net/..."` |
- | **High** | Preheader does not match subject | Update preheader to align with "first pair" messaging or confirm intentional mismatch |
- | **High** | SPF/DKIM status unconfirmed | Verify authentication headers are captured in QA relay; confirm DKIM signing on `emails.skechers.com` |
- | **Medium** | 5 images missing `alt` text | Add descriptive `alt` attributes; use `alt=""` for purely decorative/tracking images |
- | **Medium** | `<meta>` tags missing `http-equiv` | Add `http-equiv` attribute to charset and IE compatibility meta tags |
- | **Medium** | Krux `partner_uid` — PII exposure risk | Confirm SHA-256 hashed, not raw subscriber ID |
- | **Low** | 26 tracking links unresolvable in QA | Enable redirect resolution for `click.emails.skechers.com` in QA pipeline to audit UTM params |

## Full review
## 1. Executive Summary

A non-purchaser acquisition email targeting women with arch support products — but it undersells that angle almost entirely. The "Your Perfect First Pair" subject line promises a curated, personal intro, yet the email delivers a generic multi-category catalog drop. The Arcade Color Drop hero is visually strong, but the arch support value proposition — the actual reason this list segment exists — is buried or invisible. The experience reads like a repurposed promotional blast, not a first-pair welcome guide.

---

## 2. Business Impact Score: 5/10

Competent execution, weak strategic alignment. The creative is clean but the email fails its own brief: converting a non-purchaser by making the first step feel obvious and low-risk.

---

## 3. What's Working

- **Hero visual is compelling.** The Arcade Color Drop section uses bright, varied colorways across multiple shoe silhouettes — genuinely eye-catching and product-forward.
- **Clear sectioning.** Three distinct modules (Arcade Color Drop, Arcade Sandals, Arcade Hands Free Slip-Ins) create a readable scroll without visual chaos.
- **BOGO banner at the top.** The "Buy One, Get One 50% Off" offer is immediately visible — strong incentive for a first purchase.
- **Product variety without clutter.** Each module shows multiple colorways without feeling overwhelming.

---

## 4. What's Weak

- **The arch support angle is absent from the visual.** For a segment called `ARCH_NONPURCH`, the email shows zero visible messaging about arch support, comfort technology, or fit reassurance — the exact barriers a non-purchaser needs addressed.
- **"Your Perfect First Pair" promise isn't kept.** There's no editorial curation, no "start here" signpost, no guidance on which product is right for whom. It's three product modules, not a recommendation.
- **CTAs are generic.** "Shop Now" buttons repeat across every section with no differentiation. A non-purchaser needs more friction-reducing copy ("Try risk-free," "Find your fit," etc.).
- **No social proof.** No ratings, no "best seller" callouts, no testimonials — the exact trust signals that overcome first-purchase hesitation.
- **Preview text is broken.** The preview visible in the send metadata is a raw URL string — a significant deliverability and first-impression problem before the email even opens.
- **Subject line has test prefix exposed.** `[Test]:` is in the subject line — this should not go to live recipients.

---

## 5. Recommendations

1. **Lead with the arch support story.** Swap the hero to feature Arch Fit or a comfort-forward product. One clear headline — "Built for all-day comfort" — does more for a non-purchaser than a color drop.
2. **Add a "why Skechers" trust bar.** Ratings count, return policy, or a comfort guarantee — something that lowers the perceived risk of a first purchase.
3. **Differentiate CTAs by section.** "Shop Sandals," "Find My Fit," "See All Colors" — anything more specific than repeated "Shop Now."
4. **Fix preview text before live send.** The raw URL in preview is a spam signal and looks broken in inbox clients.
5. **Remove [Test] prefix** from subject line before any live deployment.
6. **Add a single "best seller" or "most comfortable" badge** on at least one product to give non-purchasers a default choice.

---

## 6. Bottom Line

The email is visually polished but strategically misfired. A non-purchaser needs reassurance and a clear starting point — this delivers a color catalog. The BOGO offer is the strongest asset; it should be the organizing principle of the whole email ("Your perfect first pair, at half the price"), not just a banner they scroll past. Fix the preview text and test prefix before any live deployment.

---

## 7. Evidence

**Overall purpose:** Drive first purchase from a non-purchaser segment, with implied arch support focus based on audience targeting.

**Hero / primary value proposition:** Arcade Color Drop — a visually vibrant spread of colorful sneakers. Strong aesthetics, but no comfort or arch support messaging. BOGO 50% off is visible at top as a banner.

**Membership / benefits section:** None visible. No loyalty program callout, no "join rewards" module.

**Product discoverability / recommendation modules:** Three modules — Arcade Color Drop, Arcade Sandals, Arcade Hands Free Slip-Ins. All are Arcade family, which gives the email coherence, but there's no guidance on which is best for a first-time buyer. No ratings or bestseller indicators visible.

**Utility / secondary modules:** Footer appears to contain standard links (navigation, social icons). No visible utility content such as store finder, size guide, or fit quiz — all of which would serve a non-purchaser.

**Bugs / friction / clarity issues:** Preview text rendered as a raw URL string (visible in the send metadata). Subject line includes `[Test]:` prefix — confirms this is a test send that should not reach live recipients without correction. No visual bugs in the rendered email body itself — images load cleanly, layout is intact.

---

## Technical Audit

## Technical Audit — Skechers `MKG_US_NONPUR180_W_ARCH_NONPURCH_EN_04102026`

---

### 1. Technical Summary

This non-purchaser win-back email contains 14 images served over insecure HTTP (blocking risk in Gmail, Outlook, Apple Mail) and 5 images missing alt text. The subject line also has a malformed test prefix that would ship broken to production as-is.

---

### 2. Link & Tracking Issues

**Subject line concatenation error**
The subject renders as:
```
[Test]: MKG_US_NONPUR180_W_ARCH_NONPURCH_EN_04102026Your Perfect First Pair is Here
```
The campaign ID and human-readable subject are concatenated with no separator — the test prefix and/or campaign ID variable was not stripped before preview/send. This must be resolved before production deployment.

**26 tracking links unverifiable**
All CTAs route through `click.emails.skechers.com` with encrypted `qs=` payloads. Destination URLs and UTM parameters cannot be inspected without resolving the redirects. Underlying links are unauditable from source alone.

**Third-party DMP pixel**
Three `beacon.krxd.net` pixels fire on open — two for user-matching, one for impression tracking:
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=c30973d6f4e31a55c5dcae7d3c3df0d73fcb04747ff44220a92abd05cee475c2
https://beacon.krxd.net/1x1_ad_impression.gif?confid=so3yexmpm&advertiserid=100007688&campaignid=MKG_US_NONPUR180_W_ARCH_NONPURCH_EN_04102026
```
The `partner_uid` in the first pixel appears to be a hashed subscriber identifier — confirm this is SHA-256 pseudonymized, not plaintext PII.

**Return Path pixel — missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
The `src` is a bare hostname with no `http://` or `https://` scheme. This is an invalid URL and the pixel will fail to load in all clients.

---

### 3. Rendering & Accessibility

**14 images served over HTTP — will be blocked**

All product/UI images are loaded from `http://image.emails.skechers.com/` (non-HTTPS). Gmail, Apple Mail, and Outlook on modern settings block mixed-content images. Affected assets include the Skechers logo, app store badges, social icons, payment icons (AfterPay), and product images:

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/00100b23-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/fc08601a-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/d76a5487-...png  (Twitter)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...png  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/573ab181-...png  (Pinterest)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-...png  (YouTube)
```

The ink1000.com tracking pixel also uses HTTP:
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```

**5 images missing `alt` text**
```
o.gif               (ink1000 tracking pixel — alt="" acceptable; currently absent entirely)
49468f73-...png     (no alt)
00100b23-...png     (no alt)
fc08601a-...png     (no alt)
```
Missing alt degrades screen reader experience and breaks image-off rendering for these assets.

**Malformed `<meta>` tags**
Both meta tags in `<head>` are missing the `http-equiv` attribute:
```html
<!-- As written (invalid) -->
<meta content="text/html; charset=utf-8" />
<meta content="IE=Edge" />

<!-- Correct -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```
Without `http-equiv`, these directives are ignored by parsers.

**Preheader/subject mismatch**
Preheader text: *"So cute you'll buy 2! - BOGO 50% off today"*
Subject (intended): *"Your Perfect First Pair is Here"*
These are semantically inconsistent — the preheader references a BOGO promotion not referenced in the subject. This may indicate template reuse without updating the preheader, which affects inbox preview text across all clients.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%first_name%%`, `{{var}}`) are visible in the truncated HTML. Cannot confirm full template resolution without the complete source. The campaign ID in the subject line (`MKG_US_NONPUR180_W_ARCH_NONPURCH_EN_04102026`) suggests an unstripped SFMC variable substitution rather than a deliberate subject token — this is a production risk.

---

### 5. Compliance

**SPF/DKIM status unknown**
Authentication-Results header was not present in the relay metadata captured by the QA system. SPF and DKIM pass/fail status cannot be confirmed. Given the email originates from `no-reply@emails.skechers.com` via SFMC, authentication should be verifiable at the relay — confirm header capture is working in the QA pipeline.

**Unsubscribe / CAN-SPAM**
Unsubscribe link and physical mailing address are expected in the footer but are not present in the truncated HTML provided. Cannot confirm compliance from this source fragment — must be verified in the full render.

---

### 6. Email-to-Site Continuity

All destination URLs are behind the `click.emails.skechers.com` redirect with encrypted `qs=` payloads — UTM parameter presence and landing page alignment cannot be verified from the HTML source. QA tooling skipped all 26 tracking links. To audit UTM coverage, redirect resolution would need to be enabled in the QA runner for this domain.

The Krux impression pixel does carry `campaignid=MKG_US_NONPUR180_W_ARCH_NONPURCH_EN_04102026`, confirming campaign attribution is wired at the pixel level.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Critical** | Subject line contains `[Test]:` prefix + campaign ID concatenation | Strip test prefix and validate variable substitution before production send |
| **Critical** | 12+ images served over `http://image.emails.skechers.com` | Update CDN to serve all assets over HTTPS; update `src` attributes |
| **High** | Return Path pixel has no URL scheme | Add `https://` to `src="pixel.app.returnpath.net/..."` |
| **High** | Preheader does not match subject | Update preheader to align with "first pair" messaging or confirm intentional mismatch |
| **High** | SPF/DKIM status unconfirmed | Verify authentication headers are captured in QA relay; confirm DKIM signing on `emails.skechers.com` |
| **Medium** | 5 images missing `alt` text | Add descriptive `alt` attributes; use `alt=""` for purely decorative/tracking images |
| **Medium** | `<meta>` tags missing `http-equiv` | Add `http-equiv` attribute to charset and IE compatibility meta tags |
| **Medium** | Krux `partner_uid` — PII exposure risk | Confirm SHA-256 hashed, not raw subscriber ID |
| **Low** | 26 tracking links unresolvable in QA | Enable redirect resolution for `click.emails.skechers.com` in QA pipeline to audit UTM params |
## Recent history

- [[2026-04-09-test-mkg-us-na-w-arch-gender-en-04102026-a-v2the-arcades-you-know-love-in-colors]] — 5/10 (2026-04-09)
- [[2026-04-09-test-mkg-us-na-w-arch-gender-en-04102026-athe-arcades-you-know-love-in-colors-yo]] — 5/10 (2026-04-09)
- [[2026-04-09-test-mkg-us-na-u-best-wide-en-04102026-v2say-bye-to-tight-hello-to-just-right]] — 5/10 (2026-04-09)

