---
slug: 2026-04-11-test-pro-us-na-u-sitebundle-full-en-04092026step-into-the-right-shoes-for-right-
type: email
date: 2026-04-08
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04092026Step into the right shoes for right now!"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04092026Step into the right shoes for right now!
**Score:** 5/10 · **Type:** Email audit · **2026-04-08**
## Executive summary

- The email would score 7 in clean form. The test-deployment artifacts in the subject and preview drag it to 5 — they're the first two things a recipient reads.

## What's working

- **Offer clarity.** "BUY ONE GET ONE 50% OFF or 20% off 1 item" reads immediately from the hero. No ambiguity.
- **Visual hierarchy.** Hero → New Arrivals strip → Category grid → Text nav → Utility footer. The flow is logical.
- **Category coverage.** The 2x2 grid covering Women's, Men's, Girls', Boys' is efficient and shoppable at a glance.
- **Utility completeness.** App download, shop now/pay later, and Find a Store are all present — covers the functional bases.
- **Social footer.** Clean row of icons, appropriately minimal.

## What's weak

- **Subject line is broken for live send.** `[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04092026Step into the right shoes for right now!` — the test tag and internal campaign code are exposed. This is recipient-visible damage.
- **Preview text is technical garbage.** The preview shows raw URLs and token strings instead of a marketing message. The preview slot is wasted and looks broken.
- **New Arrivals strip is undersized.** The product thumbnails in that horizontal row are too small to evaluate or desire — they read as filler rather than merchandise.
- **Hero product feels low-energy for a spring push.** A single pair of muted lifestyle shoes doesn't communicate the breadth of the BOGO offer. The creative underserves the promotion.
- **No urgency signal.** No expiration date, no "limited time," nothing to create action pressure on the BOGO offer.
- **Text navigation block is visually dead.** The "SHOP ADDITIONAL STYLES / WOMEN / MEN / KIDS..." section is plain black text. It blends into the background and likely gets ignored.

## Recommendations

- 1. **Pull this from live deployment immediately** until the `[Test]:` prefix and internal code are stripped from the subject line. No amount of creative quality recovers from sending this to a real list.
- 2. **Write a real preview text line.** Something like "BOGO 50% off — shop new arrivals before they sell out" turns that slot into a second CTA instead of a liability.
- 3. **Increase the New Arrivals thumbnail size.** Either fewer products shown larger, or a 2-row grid with labels. Product names or a short descriptor would help.
- 4. **Add offer expiry.** Even "Offer ends Sunday" creates measurable lift in conversion for promotional emails.
- 5. **Give the text nav block a visual treatment.** Thin dividers, small icons, or a subtle background strip would make it feel like a navigation element rather than a wall of text.
- | Priority | Action |
- |---|---|
- | Critical | Fix ReturnPath pixel URL — prepend `https://` |
- | Critical | Remove `[Test]:` subject prefix before production send |
- | Critical | Insert space between campaign ID and subject copy |
- | High | Migrate all `image.emails.skechers.com` assets to HTTPS |
- | High | Migrate `ink1000.com/o.gif` pixel to HTTPS |
- | High | Replace hardcoded `mi_u=8021648903` with a dynamic subscriber merge field |
- | High | Fix `<meta>` charset tag to include `http-equiv="Content-Type"` |
- | Medium | Verify `List-Unsubscribe` header and footer opt-out/postal address in full HTML |
- | Medium | Add descriptive `alt` text to the 4 untagged content images |
- | Medium | Change `-webkit-text-size-adjust: none` to `100%` |
- | Medium | Resolve 3–5 sample click URLs to confirm UTM parameter propagation |
- | Low | Reduce plain-text URL density below 70% for spam filter hygiene |

## Full review
## 2. Business Impact Score: **5/10**

The email would score 7 in clean form. The test-deployment artifacts in the subject and preview drag it to 5 — they're the first two things a recipient reads.

---

## 3. What's Working

- **Offer clarity.** "BUY ONE GET ONE 50% OFF or 20% off 1 item" reads immediately from the hero. No ambiguity.
- **Visual hierarchy.** Hero → New Arrivals strip → Category grid → Text nav → Utility footer. The flow is logical.
- **Category coverage.** The 2x2 grid covering Women's, Men's, Girls', Boys' is efficient and shoppable at a glance.
- **Utility completeness.** App download, shop now/pay later, and Find a Store are all present — covers the functional bases.
- **Social footer.** Clean row of icons, appropriately minimal.

---

## 4. What's Weak

- **Subject line is broken for live send.** `[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04092026Step into the right shoes for right now!` — the test tag and internal campaign code are exposed. This is recipient-visible damage.
- **Preview text is technical garbage.** The preview shows raw URLs and token strings instead of a marketing message. The preview slot is wasted and looks broken.
- **New Arrivals strip is undersized.** The product thumbnails in that horizontal row are too small to evaluate or desire — they read as filler rather than merchandise.
- **Hero product feels low-energy for a spring push.** A single pair of muted lifestyle shoes doesn't communicate the breadth of the BOGO offer. The creative underserves the promotion.
- **No urgency signal.** No expiration date, no "limited time," nothing to create action pressure on the BOGO offer.
- **Text navigation block is visually dead.** The "SHOP ADDITIONAL STYLES / WOMEN / MEN / KIDS..." section is plain black text. It blends into the background and likely gets ignored.

---

## 5. Recommendations

1. **Pull this from live deployment immediately** until the `[Test]:` prefix and internal code are stripped from the subject line. No amount of creative quality recovers from sending this to a real list.
2. **Write a real preview text line.** Something like "BOGO 50% off — shop new arrivals before they sell out" turns that slot into a second CTA instead of a liability.
3. **Increase the New Arrivals thumbnail size.** Either fewer products shown larger, or a 2-row grid with labels. Product names or a short descriptor would help.
4. **Add offer expiry.** Even "Offer ends Sunday" creates measurable lift in conversion for promotional emails.
5. **Give the text nav block a visual treatment.** Thin dividers, small icons, or a subtle background strip would make it feel like a navigation element rather than a wall of text.

---

## 6. Bottom Line

The bones are fine — the email does what a Skechers promotional blast is supposed to do. But it should not go out in its current state. The subject line and preview text issues are production defects that will register as broken or spammy to recipients. Fix those before evaluating anything else.

---

## 7. Evidence

**Overall purpose:** Seasonal promotional email driving traffic to Skechers.com on a BOGO 50% off (or 20% off 1 item) offer, with secondary goal of showcasing new arrivals.

**Hero / primary value proposition:** Full-width banner with the BOGO promotion and a single product image (casual/lifestyle shoes, neutral palette). "SHOP NOW" CTA button is present. Offer terms are legible.

**Membership / benefits section:** Not present in this email. No loyalty/rewards module visible.

**Product discoverability / recommendation modules:** One horizontal new arrivals strip (small thumbnails, ~5–6 SKUs) with a "SHOP NEW ARRIVALS" CTA. Below that, a 2x2 gender-category grid (Women's, Men's, Girls', Boys') with lifestyle photography.

**Utility / secondary modules:** Text-only additional styles nav (Women, Men, Kids, Clothing, New Arrivals, Sale). Four utility links: Download the App, Customize In-Store (or similar), Shop Now/Pay Later, Find a Store. Social icons row. Standard legal footer.

**Bugs / friction / clarity issues (visible in render):**
- `[Test]:` prefix + internal campaign code visible in subject line — confirmed in the From/Subject metadata shown above the image.
- Preview text renders as raw URLs and token strings — visible in the provided preview metadata.
- No date/expiry on the promotional offer anywhere in the visible email body.

---

## Technical Audit

## Technical Audit — SKECHERS PRO_US_NA_U_SITEBUNDLE_FULL_EN_04092026

---

### 1. Technical Summary

The email contains multiple HTTP (non-HTTPS) image sources that will be blocked or generate mixed-content warnings in modern clients, a malformed ReturnPath pixel URL, and a live test-mode subject prefix. SPF/DKIM authentication status could not be confirmed via the relay headers.

---

### 2. Link & Tracking Issues

**[CRITICAL] ReturnPath seed pixel has a protocol-relative URL**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" .../>
```
Missing `https://` prefix — the browser/client will treat this as a relative path and the pixel will silently fail to load. This breaks Return Path inbox monitoring for this send.

**[WARN] 26 click-tracking links use encrypted opaque querystrings**
All CTAs wrap through `click.emails.skechers.com/?qs=<base64-encrypted-blob>`. Destination URLs and UTM parameters cannot be verified without resolving the redirects (see §6). QA skipped probing these 26 links.

**[WARN] Plain-text version is 72% URLs by character count**
3,489 of 4,821 characters in the plain-text part are URLs. This ratio exceeds spam-filter thresholds and may suppress deliverability. The plain-text version should be human-readable prose, not a URL dump.

---

### 3. Rendering & Accessibility

**[HIGH] All `image.emails.skechers.com` assets served over HTTP**
14 images use `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/...`. Gmail, Outlook.com, and Apple Mail proxy/block non-HTTPS image sources. Affected includes the Skechers logo, social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), app store badges, and AfterPay mark.

**[HIGH] Third-party tracking pixel served over HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8021648903&mi_ecmp=PRO_US_NA_U_SITEBUNDLE_FULL_EN_04092026
```
HTTP source; will be blocked in most clients with image proxying enabled.

**[WARN] 4 images missing `alt` text**
Affected `src` values:
- `o.gif` (ink1000 pixel)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

Decorative pixels can use `alt=""` but content images require descriptive alt text for screen readers and images-off rendering.

**[WARN] `<meta charset>` tag is malformed**
```html
<meta content="text/html; charset=utf-8" />
```
Missing the `http-equiv="Content-Type"` attribute. As written, this tag has no effect. Correct form:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

**[WARN] `-webkit-text-size-adjust: none` used instead of `100%`**
`none` disables all user-initiated text scaling. The conventional fix for iOS auto-scaling is `100%`, which preserves accessibility zoom.

---

### 4. Personalization & Merge Tokens

**[HIGH] `[Test]:` prefix present in subject line — not stripped before send**
Subject: `[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04092026Step into the right shoes for right now!`
The `[Test]:` flag was not removed before deployment. Additionally, the campaign ID `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04092026` is concatenated directly against the subject copy with no space separator.

**[WARN] Subscriber ID appears hardcoded in ink1000 pixel**
`mi_u=8021648903` — this looks like a static value rather than a dynamic merge field (e.g., `%%subscriberkey%%`). If not personalized per recipient, open attribution for this pixel will be broken or attributed to a single seed address.

No unresolved `%%MERGE_TAG%%` or `{{handlebars}}` tokens detected in the visible HTML.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**[HIGH] Authentication-Results header absent from relay**
QA could not confirm SPF or DKIM pass status. If the AgentMail relay is not forwarding or preserving these headers, inbox providers will treat authentication as inconclusive.

**[WARN] Unsubscribe link and physical mailing address not verifiable**
The HTML source provided is truncated. CAN-SPAM requires a functioning opt-out mechanism and a valid postal address in every commercial email. Confirm these are present in the full footer — they are not visible in the truncated source.

No `List-Unsubscribe` or `List-Unsubscribe-Post` headers were surfaced in the QA findings.

---

### 6. Email-to-Site Continuity

All 26 CTAs are wrapped in opaque encrypted redirects through `click.emails.skechers.com`. UTM parameter presence on destination landing pages cannot be confirmed without resolving each redirect.

Campaign ID `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04092026` is consistently applied across beacon pixels (Krxd impression pixel, ink1000 pixel), which is correct. Whether this ID also propagates as a UTM `utm_campaign` value on click-through URLs is unverifiable from the source alone.

**Action required:** Resolve a sample of the encrypted click URLs to confirm `utm_source`, `utm_medium`, and `utm_campaign` are appended to destination URLs.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| Critical | Fix ReturnPath pixel URL — prepend `https://` |
| Critical | Remove `[Test]:` subject prefix before production send |
| Critical | Insert space between campaign ID and subject copy |
| High | Migrate all `image.emails.skechers.com` assets to HTTPS |
| High | Migrate `ink1000.com/o.gif` pixel to HTTPS |
| High | Replace hardcoded `mi_u=8021648903` with a dynamic subscriber merge field |
| High | Fix `<meta>` charset tag to include `http-equiv="Content-Type"` |
| Medium | Verify `List-Unsubscribe` header and footer opt-out/postal address in full HTML |
| Medium | Add descriptive `alt` text to the 4 untagged content images |
| Medium | Change `-webkit-text-size-adjust: none` to `100%` |
| Medium | Resolve 3–5 sample click URLs to confirm UTM parameter propagation |
| Low | Reduce plain-text URL density below 70% for spam filter hygiene |
## Recent history

- [[2026-04-08-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04092026step-into-the-right-shoes-for]] — 5/10 (2026-04-08)
- [[2026-04-08-test-pro-us-nonpur180-u-sitebundle-nonpurch-en-04092026the-right-pair-to-start-w]] — 4/10 (2026-04-08)
- [[2026-04-08-test-pro-us-retpuropen-u-sitebundle-retail-en-04092026-v3the-right-pair-right-no]] — 5/10 (2026-04-08)

