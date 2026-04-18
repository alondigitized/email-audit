---
slug: 2026-04-09-test-mkg-us-na-u-best-wide-en-04102026-v2say-bye-to-tight-hello-to-just-right
type: email
date: 2026-04-09
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_BEST_WIDE_EN_04102026_V2Say Bye to Tight & Hello to Just Right!"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_U_BEST_WIDE_EN_04102026_V2Say Bye to Tight & Hello to Just Right!
**Score:** 5/10 · **Type:** Email audit · **2026-04-09**
## Executive summary

- A clean, category-focused email promoting Skechers' Wide Fit line with a BOGO 50% offer at the top. The structure is logical — hero offer, gender splits, new arrivals teaser, then nav links — but the execution is visually timid. The hero is undersized for the ambition of the offer, the product imagery is too small to drive desire, and the email reads more like a catalog index than a persuasive campaign.
- Solid offer, weak delivery. The core mechanics are there but the creative doesn't earn the attention needed to convert.

## What's working

- **Offer clarity**: "Buy One, Get One 50% Off" is front and center immediately. No ambiguity.
- **Gender segmentation**: Women and Men sections are cleanly separated with dedicated CTAs, reducing scroll confusion.
- **"New to the Lineup" module**: Good use of a secondary section to surface newness — adds a reason to browse beyond the discount.
- **Compact footer navigation**: Women / Men / Kids / New Arrivals / Sale links give quick access to key site sections without cluttering the body.

## What's weak

- **Hero creative is undersized**: The "Wide Fit / Best Fit. Best Sellers." headline is small and lacks visual punch. The offer banner above it is equally modest. Neither commands the attention a BOGO offer deserves.
- **Product images are too small**: Both the Women's and Men's shoe imagery is thumbnail-scale. You can't see product detail, texture, or color at this size — which is the whole point of selling footwear.
- **"Wide Fit" positioning is underdeveloped**: The subject line promises a wide-fit-specific message, but the body doesn't follow through with any copy about *why* wide fit matters, comfort benefits, or fit differentiation. It reads as a generic sale email with a genre label.
- **Low contrast, muted palette**: The email is visually quiet — grey backgrounds, small white text, minimal color. Nothing stops the scroll.
- **"New to the Lineup" module is vague**: One small image, no product name, no price, no context. Curiosity without information doesn't convert.

## Recommendations

- 1. **Enlarge the hero**: The BOGO offer should occupy a full-width banner with a bold typographic treatment — the current size undersells a strong promotion.
- 2. **Show bigger product**: Each gender section should feature at least one large, aspirational product shot. Wide-fit footwear needs to look comfortable *and* stylish — prove it.
- 3. **Add one benefit line for Wide Fit**: A single sentence ("Room where you need it. Style where you want it.") would give the wide-fit angle real teeth.
- 4. **Give "New to the Lineup" real content**: Add product name and price, or feature 2–3 products in a grid. A single mystery image is a missed conversion.
- 5. **Test a warmer color treatment**: The current palette is cold and quiet. Even a soft accent color would increase visual energy.
- | Priority | Action |
- |---|---|
- | **High** | Migrate all `image.emails.skechers.com` assets to HTTPS — 14 affected URLs will break in Gmail, Apple Mail, Outlook 365 |
- | **High** | Fix Return Path pixel URL — prepend `https://` to `pixel.app.returnpath.net/pixel.gif?r=...` or this monitoring pixel silently fails |
- | **High** | Audit raw subscriber ID (`partner_uid=75909571`, `mi_u=8021648903`) exposure to Krux and Ink1000 — confirm DPA/CCPA compliance |
- | **Medium** | Add descriptive `alt` text to the 4 flagged images, particularly any product or navigation images |
- | **Medium** | Remove `maximum-scale=1` from viewport meta or replace with `user-scalable=yes` |
- | **Medium** | Confirm `[Test]:` subject prefix is not present in the production deployment template |
- | **Low** | Add `http-equiv` attributes to both malformed `<meta>` tags |
- | **Low** | Reconcile campaign ID inconsistency (`_V2` suffix) between subject/filename and pixel attribution values |
- | **Low** | Verify full footer (physical address + unsubscribe) renders correctly in production — validate against CAN-SPAM checklist |

## Full review
## Skechers Wide Fit Email Review

---

### 1. Executive Summary

A clean, category-focused email promoting Skechers' Wide Fit line with a BOGO 50% offer at the top. The structure is logical — hero offer, gender splits, new arrivals teaser, then nav links — but the execution is visually timid. The hero is undersized for the ambition of the offer, the product imagery is too small to drive desire, and the email reads more like a catalog index than a persuasive campaign.

---

### 2. Business Impact Score: **5/10**

Solid offer, weak delivery. The core mechanics are there but the creative doesn't earn the attention needed to convert.

---

### 3. What's Working

- **Offer clarity**: "Buy One, Get One 50% Off" is front and center immediately. No ambiguity.
- **Gender segmentation**: Women and Men sections are cleanly separated with dedicated CTAs, reducing scroll confusion.
- **"New to the Lineup" module**: Good use of a secondary section to surface newness — adds a reason to browse beyond the discount.
- **Compact footer navigation**: Women / Men / Kids / New Arrivals / Sale links give quick access to key site sections without cluttering the body.

---

### 4. What's Weak

- **Hero creative is undersized**: The "Wide Fit / Best Fit. Best Sellers." headline is small and lacks visual punch. The offer banner above it is equally modest. Neither commands the attention a BOGO offer deserves.
- **Product images are too small**: Both the Women's and Men's shoe imagery is thumbnail-scale. You can't see product detail, texture, or color at this size — which is the whole point of selling footwear.
- **"Wide Fit" positioning is underdeveloped**: The subject line promises a wide-fit-specific message, but the body doesn't follow through with any copy about *why* wide fit matters, comfort benefits, or fit differentiation. It reads as a generic sale email with a genre label.
- **Low contrast, muted palette**: The email is visually quiet — grey backgrounds, small white text, minimal color. Nothing stops the scroll.
- **"New to the Lineup" module is vague**: One small image, no product name, no price, no context. Curiosity without information doesn't convert.

---

### 5. Recommendations

1. **Enlarge the hero**: The BOGO offer should occupy a full-width banner with a bold typographic treatment — the current size undersells a strong promotion.
2. **Show bigger product**: Each gender section should feature at least one large, aspirational product shot. Wide-fit footwear needs to look comfortable *and* stylish — prove it.
3. **Add one benefit line for Wide Fit**: A single sentence ("Room where you need it. Style where you want it.") would give the wide-fit angle real teeth.
4. **Give "New to the Lineup" real content**: Add product name and price, or feature 2–3 products in a grid. A single mystery image is a missed conversion.
5. **Test a warmer color treatment**: The current palette is cold and quiet. Even a soft accent color would increase visual energy.

---

### 6. Bottom Line

The email is functional but forgettable. It conveys the right information in the right order, but nothing about the creative makes a wide-fit customer feel seen or excited. The BOGO offer is strong enough to drive clicks despite the weak creative — but this is leaving conversion on the table. Raise the visual ambition to match the offer strength.

---

### 7. Evidence

**Overall purpose**: Promote Skechers Wide Fit best sellers with a BOGO 50% discount, split by Women and Men, with a secondary module for new arrivals.

**Hero / primary value proposition**: "Buy One, Get One 50% Off" banner at top, followed by "Wide Fit / Best Fit. Best Sellers." headline and a hero image showing a woman in casual dress. CTA: "Shop Wide Fit Best Sellers." Visually undersized for the offer weight.

**Membership / benefits section**: None visible.

**Product discoverability / recommendation modules**: Women's section with small product thumbnails and "Shop Women's Wide Fit" CTA; Men's section with a standing male model and small shoe thumbnails, "Shop Men's Wide Fit" CTA. "New to the Lineup" module with a single small product image and "Shop Now" CTA — no product names or prices shown.

**Utility / secondary modules**: Footer nav with Women / Men / Kids / New Arrivals / Sale links. SMS opt-in ("Get Text Updates"), "Current Deals" link, "Find a Store" link, social icons (Facebook, Instagram, YouTube, TikTok, Pinterest).

**Bugs / friction / clarity issues**: No visible broken images or overlapping text. The preview text in the subject line contains raw URL fragments ("https://view.emails.skechers.com/?vawpToken=..."), which would appear truncated in some inbox clients — a meaningful pre-header opportunity wasted.

---

## Technical Audit

## Technical Audit — Skechers Wide Width Promotion (MKG_US_NA_U_BEST_WIDE_EN_04102026_V2)

---

### 1. Technical Summary

This is a test send (subject prefix `[Test]:`) with significant image delivery risk: 14+ asset URLs use HTTP rather than HTTPS and will be blocked or mixed-content-flagged in modern mail clients. Four tracking pixels expose what appear to be raw subscriber identifiers to third-party domains.

---

### 2. Link & Tracking Issues

**26 click links** all route through `click.emails.skechers.com` encrypted redirects (`?qs=eyJ...`). UTM parameters are opaque inside the base64 payload — cannot be verified from HTML alone.

**Tracking pixels — PII exposure risk:**

| Pixel | Issue |
|---|---|
| `beacon.krxd.net/1x1_usermatch.gif?...&partner_uid=75909571` | Raw subscriber ID sent to Krux/Salesforce DMP in cleartext |
| `http://www.ink1000.com/.../o.gif?mi_u=8021648903&mi_ecmp=MKG_US_NA_U_BEST_WIDE_EN_04102026` | Raw subscriber ID (`mi_u`) sent to third-party domain over HTTP |

The Krux pixel also fires a separate SHA-256-hashed match (`partner_uid=c30973d6f4e31a55c5dcae7d3c3df0d73fcb04747ff44220a92abd05cee475c2`) — that value is appropriately hashed, but the plain `75909571` alongside it negates the protection.

**Broken pixel URL** — Return Path seed pixel is missing the protocol scheme entirely:

```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf..." />
```

No `http://` or `https://` prefix. This will be treated as a relative path and silently fail to load, breaking inbox placement monitoring for this send.

---

### 3. Rendering & Accessibility

**HTTP image sources (14 affected):**

All assets hosted on `image.emails.skechers.com` use `http://`. Gmail (2019+), Apple Mail (2022+), and Outlook 365 enforce HTTPS for remote content. Affected images include the Skechers logo, app store badges, social icons, and at least two product images. Example:

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png  (unlabeled)
```

**Missing alt text (4 images):**

- `o.gif` (Ink1000 tracking pixel — low severity, but flagged)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

Images with functional meaning (product, navigation) require alt text for screen readers and image-blocked rendering.

**Malformed meta tags:**

Both the charset and IE compatibility tags are missing required `http-equiv` attributes:

```html
<!-- Present (broken) -->
<meta content="text/html; charset=utf-8" />
<meta content="IE=Edge" />

<!-- Correct form -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```

**Accessibility — viewport:**

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```

`maximum-scale=1` prevents user zoom on mobile. This fails WCAG 1.4.4 (Resize Text) and is blocked by some accessibility audits.

**`-webkit-text-size-adjust: none`** is applied globally via `* {}`. This suppresses iOS auto-sizing but also disables user-initiated text scaling. Less critical than `maximum-scale=1` but compounds the accessibility concern.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%FIRST_NAME%%`, `{{...}}`) visible in the truncated HTML source.

**Flag for production:** Subject line carries `[Test]:` prefix. Confirm this is stripped by the deployment template before production send — SFMC's test-send prefix is not always auto-removed if the subject is hardcoded rather than pulled from a send-definition attribute.

The campaign ID in tracking pixels (`MKG_US_NA_U_BEST_WIDE_EN_04102026`) omits the `_V2` suffix present in the subject/filename. Verify this is intentional and won't create attribution gaps in analytics for this variant.

---

### 5. Compliance

**Authentication:** SPF/DKIM status unverifiable — `Authentication-Results` header absent from the relayed copy. Confirm DKIM signing is active on `emails.skechers.com` before production deployment. The sending domain (`no-reply@emails.skechers.com`) is correctly aligned with the ESP subdomain.

**CAN-SPAM:** HTML is truncated; footer content (physical mailing address, unsubscribe link) not fully visible in the provided source. Standard SFMC footer templates typically satisfy this, but should be confirmed in the full render — especially given the test-send context where footer suppression is sometimes misconfigured.

**Third-party data sharing:** The Krux DMP sync pixel (`beacon.krxd.net`) transmits a raw subscriber ID to Salesforce/Krux. Depending on the brand's data processing agreements, this may require disclosure under CCPA/CPRA for CA residents. Low urgency but worth confirming with legal/privacy.

---

### 6. Email-to-Site Continuity

All 26 links are opaque SFMC click-redirects. UTM parameter coverage cannot be verified without decoding the `qs=` payloads or checking the SFMC link manager directly. The campaign ID in the Ink1000 and Krux pixels (`MKG_US_NA_U_BEST_WIDE_EN_04102026`) is consistent across both pixels — if UTMs use the same campaign slug, attribution should be coherent.

No naked/untracked `skechers.com` links observed in visible HTML — all navigational links appear to be wrapped in the click-redirect.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **High** | Migrate all `image.emails.skechers.com` assets to HTTPS — 14 affected URLs will break in Gmail, Apple Mail, Outlook 365 |
| **High** | Fix Return Path pixel URL — prepend `https://` to `pixel.app.returnpath.net/pixel.gif?r=...` or this monitoring pixel silently fails |
| **High** | Audit raw subscriber ID (`partner_uid=75909571`, `mi_u=8021648903`) exposure to Krux and Ink1000 — confirm DPA/CCPA compliance |
| **Medium** | Add descriptive `alt` text to the 4 flagged images, particularly any product or navigation images |
| **Medium** | Remove `maximum-scale=1` from viewport meta or replace with `user-scalable=yes` |
| **Medium** | Confirm `[Test]:` subject prefix is not present in the production deployment template |
| **Low** | Add `http-equiv` attributes to both malformed `<meta>` tags |
| **Low** | Reconcile campaign ID inconsistency (`_V2` suffix) between subject/filename and pixel attribution values |
| **Low** | Verify full footer (physical address + unsubscribe) renders correctly in production — validate against CAN-SPAM checklist |
## Recent history

- [[2026-04-09-test-mkg-us-na-u-best-wide-en-04102026say-bye-to-tight-hello-to-just-right]] — 6/10 (2026-04-09)
- [[2026-04-09-the-right-pair-to-start-with-perfect-for-right-now]] — 5/10 (2026-04-09)
- [[2026-04-09-did-you-forget-something]] — 5/10 (2026-04-09)

