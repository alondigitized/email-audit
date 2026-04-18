---
slug: 2026-03-29-test-pro-us-na-u-bundle-full-en-03272026-v3your-go-to-comfort-times-two
type: email
date: 2026-03-26
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NA_U_BUNDLE_FULL_EN_03272026_V3Your Go-To Comfort, Times Two"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_NA_U_BUNDLE_FULL_EN_03272026_V3Your Go-To Comfort, Times Two
**Score:** 5/10 · **Type:** Email audit · **2026-03-26**
## Executive summary

- A structurally sound promotional email built around a clear BOGO 50% off Spring Sale offer. The hierarchy is logical — hero, gendered product grids, wayfinding, utility modules — and renders cleanly without obvious visual breaks. However, the email carries a critical production defect: the subject line exposes the internal template name (`[Test]: PRO_US_NA_U_BUNDLE_FULL_EN_03272026_V3`) before the consumer-facing headline. If this went live, it would severely undermine credibility. The product grids also show shoes without names or prices, reducing their utility as a discovery vehicle.
- Strong offer, reasonable structure. Held back by the test tag defect, anonymous product grids, and a missed opportunity to create urgency or personalization in the Spring Sale framing.

## What's working

- **Hero clarity**: "SPRING SALE — BUY ONE, GET ONE 50% OFF" is immediate and unambiguous. The two CTAs (SHOP NOW / FIND A STORE) serve both online and in-store shoppers well.
- **Gender segmentation**: Splitting the grid into Women's, Men's, and Kids' sections helps recipients self-sort quickly.
- **Navigation bar**: The "Shop Additional Styles" text module (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE) provides useful secondary wayfinding without cluttering the main flow.
- **Utility modules**: SMS opt-in, BNPL, Curbside Pickup, and Store Finder are all present and logically grouped at the bottom — expected Skechers infrastructure, cleanly executed.
- **Visual render**: No broken images, no overlapping elements, no obvious layout collapse. The email renders intact.

## What's weak

- **Subject line defect**: `[Test]: PRO_US_NA_U_BUNDLE_FULL_EN_03272026_V3` is fully visible in the subject. This is a deployment-blocking issue if not already caught.
- **Anonymous product grids**: Each gender section shows 4–5 shoe images with zero product names, zero prices, and zero labels. Customers see shoes they can't identify, which reduces click intent.
- **No urgency signal**: Nothing in the email communicates when the sale ends. "Spring Sale" is vague — no countdown, no end date, no "limited time" framing anywhere visible.
- **Undifferentiated CTAs**: Every section uses the same "SHOP NOW" button with no specificity (e.g., "Shop Women's," "Shop Kids'"). This makes attribution and relevance weaker.
- **Hero fine print is unreadable**: The disclaimer text beneath the BOGO headline is present but appears at a very small size — likely invisible on mobile.

## Recommendations

- 1. **Block send until subject line is corrected.** Strip the `[Test]:` prefix and template ID before any live deployment.
- 2. **Add product names below each shoe image** — even just the model name. Shoppers who can't identify what they're looking at don't click.
- 3. **Introduce a sale deadline** in the hero or immediately below it: "Ends Sunday" or a specific date creates urgency without redesigning the email.
- 4. **Differentiate CTA copy** per section: "Shop Women's," "Shop Men's," "Shop Kids'" costs nothing and improves scannability and click relevance.
- 5. **Increase fine print size** or move key exclusions to a slightly more visible location — unreadable legal copy at the point of decision is a consumer trust issue.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Subject contains `[Test]:` prefix + raw campaign code | Strip `[Test]:` and fix template variable before production send |
- | **P0** | SPF/DKIM unverified | Confirm authentication headers through sending relay before deploy |
- | **P1** | 14+ images over HTTP | Change all `http://image.emails.skechers.com` to `https://` |
- | **P1** | `ink1000.com` tracking pixel over HTTP | Upgrade to HTTPS or replace with HTTPS-capable endpoint |
- | **P1** | Return Path pixel missing URL scheme | Add `https://` to `pixel.app.returnpath.net/pixel.gif` src |
- | **P2** | 3 content images missing alt text | Add descriptive `alt` attributes to non-decorative images |
- | **P2** | Plain-text body is 71% URLs | Rewrite plain-text version with readable content |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve accessibility scaling |
- | **P3** | `<meta charset>` missing `http-equiv` | Add `http-equiv="Content-Type"` attribute |
- | **P3** | krxd.net subscriber ID sync | Verify CCPA opt-out exclusion logic is applied before pixel fires |

## Full review
## Email Review: Skechers Spring Sale BOGO 50% Off

---

### 1. Executive Summary

A structurally sound promotional email built around a clear BOGO 50% off Spring Sale offer. The hierarchy is logical — hero, gendered product grids, wayfinding, utility modules — and renders cleanly without obvious visual breaks. However, the email carries a critical production defect: the subject line exposes the internal template name (`[Test]: PRO_US_NA_U_BUNDLE_FULL_EN_03272026_V3`) before the consumer-facing headline. If this went live, it would severely undermine credibility. The product grids also show shoes without names or prices, reducing their utility as a discovery vehicle.

---

### 2. Business Impact Score: 5/10

Strong offer, reasonable structure. Held back by the test tag defect, anonymous product grids, and a missed opportunity to create urgency or personalization in the Spring Sale framing.

---

### 3. What's Working

- **Hero clarity**: "SPRING SALE — BUY ONE, GET ONE 50% OFF" is immediate and unambiguous. The two CTAs (SHOP NOW / FIND A STORE) serve both online and in-store shoppers well.
- **Gender segmentation**: Splitting the grid into Women's, Men's, and Kids' sections helps recipients self-sort quickly.
- **Navigation bar**: The "Shop Additional Styles" text module (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE) provides useful secondary wayfinding without cluttering the main flow.
- **Utility modules**: SMS opt-in, BNPL, Curbside Pickup, and Store Finder are all present and logically grouped at the bottom — expected Skechers infrastructure, cleanly executed.
- **Visual render**: No broken images, no overlapping elements, no obvious layout collapse. The email renders intact.

---

### 4. What's Weak

- **Subject line defect**: `[Test]: PRO_US_NA_U_BUNDLE_FULL_EN_03272026_V3` is fully visible in the subject. This is a deployment-blocking issue if not already caught.
- **Anonymous product grids**: Each gender section shows 4–5 shoe images with zero product names, zero prices, and zero labels. Customers see shoes they can't identify, which reduces click intent.
- **No urgency signal**: Nothing in the email communicates when the sale ends. "Spring Sale" is vague — no countdown, no end date, no "limited time" framing anywhere visible.
- **Undifferentiated CTAs**: Every section uses the same "SHOP NOW" button with no specificity (e.g., "Shop Women's," "Shop Kids'"). This makes attribution and relevance weaker.
- **Hero fine print is unreadable**: The disclaimer text beneath the BOGO headline is present but appears at a very small size — likely invisible on mobile.

---

### 5. Recommendations

1. **Block send until subject line is corrected.** Strip the `[Test]:` prefix and template ID before any live deployment.
2. **Add product names below each shoe image** — even just the model name. Shoppers who can't identify what they're looking at don't click.
3. **Introduce a sale deadline** in the hero or immediately below it: "Ends Sunday" or a specific date creates urgency without redesigning the email.
4. **Differentiate CTA copy** per section: "Shop Women's," "Shop Men's," "Shop Kids'" costs nothing and improves scannability and click relevance.
5. **Increase fine print size** or move key exclusions to a slightly more visible location — unreadable legal copy at the point of decision is a consumer trust issue.

---

### 6. Bottom Line

The offer is strong and the layout works. Fix the test tag before anything else — that's a hard stop. After that, the biggest lift is adding product names to the grids; right now the email functions as a banner ad, not a discovery engine. Small copy changes to CTAs and adding a deadline would meaningfully increase conversion with no structural redesign required.

---

### 7. Evidence

**Overall purpose:** Drive Spring Sale BOGO 50% off purchases across Women's, Men's, and Kids' shoe categories, with secondary support for in-store traffic via the "Find a Store" CTA.

**Hero / primary value proposition:** "SPRING SALE — BUY ONE, GET ONE 50% OFF" occupies the top of the email with two clear CTAs. The offer is prominent and immediately legible. Fine-print terms are present but visually inaccessible.

**Membership / benefits section:** None visible. No loyalty program callout, no Skechers Elite/rewards reference.

**Product discoverability / recommendation modules:** Three gendered grids (Women's, Men's, Kids'), each showing ~4–5 shoe photos. No product names, prices, or labels are visible on any product tile. Grids function more as visual texture than actionable product discovery.

**Utility / secondary modules:** SMS opt-in ("Let's Get Texting"), Shop Now Pay Later, Curbside Pickup, Find a Store, and social follow icons — all present and visually intact in the lower portion of the email.

**Bugs / friction / clarity issues (visible in render):**
- Subject line contains `[Test]: PRO_US_NA_U_BUNDLE_FULL_EN_03272026_V3` — visible and deployment-blocking.
- Hero disclaimer text is present but extremely small and likely unreadable on any screen size.
- No product identification on any grid tile across all three gender sections.

---

## Technical Audit

## Technical Audit — Skechers BOGO Bundle Email
**`PRO_US_NA_U_BUNDLE_FULL_EN_03272026_V3` / March 29, 2026**

---

### 1. Technical Summary

The email has a probable subject-line merge token failure that exposes an internal campaign code, 14+ images served over HTTP that will be blocked or proxied by modern clients, and unverified SPF/DKIM authentication through the AgentMail relay. No CAN-SPAM blockers found, but deliverability risk is elevated.

---

### 2. Link & Tracking Issues

**Third-party audience sync pixels (krxd.net)**
Three beacon.krxd.net pixels fire silently in the hidden `<div>`:
```
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=275a6ec6...
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=113007062
beacon.krxd.net/1x1_ad_impression.gif?confid=so3yexmpm&advertiserid=100007688&campaignid=PRO_US_NA_U_BUNDLE_FULL_EN_03272026
```
These are Salesforce Marketing Cloud / Salesforce DMP audience match pixels. The `sha25` variant passes a hashed subscriber ID; the `subid` variant passes a raw numeric subscriber ID (`113007062`). Confirm these disclosures are covered in your privacy policy and CCPA/CPRA opt-out flow, as they sync subscriber identity to a third-party ad network.

**HTTP tracking pixel — ink1000.com**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8103142203&mi_ecmp=PRO_US_NA_U_BUNDLE_FULL_EN_03272026
```
Served over plain HTTP. Gmail and most modern clients proxy all images — this will arrive rewritten to an HTTPS Google proxy URL — but the origin request is non-encrypted. Upgrade to HTTPS or confirm whether this vendor supports it.

**Return Path pixel — missing URL scheme**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
No `http://` or `https://` scheme is present. This renders as a relative path in most clients and the pixel will fail to load. Add `https://` prefix.

**26 click-redirect links** — all routed through `click.emails.skechers.com`; HTTP probe skipped by QA. UTM parameter pass-through cannot be confirmed (see §6).

---

### 3. Rendering & Accessibility

**HTTP image sources (14 confirmed)**
All content images are served from `http://image.emails.skechers.com`. While Gmail rewrites to its own HTTPS proxy, Apple Mail, Outlook iOS, and clients without proxy caching will either block or show broken images. Affected assets include the Skechers logo, app store badges, social icons, and at least two product images:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
... (10 more)
```
The `image.emails.skechers.com` domain should support HTTPS — this is likely a template-level oversight.

**Missing alt text (4 images)**
```
o.gif (ink1000 tracking pixel)
49468f73-4651-4af3-bea2-61d1ae5db486.png
00100b23-0afa-4715-a8cd-23bb46f9d2b2.png
fc08601a-fcce-4c96-8b90-39e5a55d6c05.png
```
Tracking pixels may intentionally omit alt text, but the latter three appear to be content images. Missing `alt=""` on decorative images is acceptable; missing descriptive alt on content images fails WCAG 2.1 AA 1.1.1.

**`<meta>` charset tag malformed**
```html
<meta content="text/html; charset=utf-8" />
```
Missing `http-equiv="Content-Type"`. Correct form:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Without this, some legacy clients may not enforce UTF-8 encoding.

**Global `-webkit-text-size-adjust: none`**
```css
* { -webkit-text-size-adjust: none; ... }
```
Applied to all elements via the universal selector. This disables browser/client text scaling for accessibility users on iOS. Use `100%` instead of `none`, or scope it to the body only.

---

### 4. Personalization & Merge Tokens

**Subject line — campaign code not stripped**
```
Subject: [Test]: PRO_US_NA_U_BUNDLE_FULL_EN_03272026_V3Your Go-To Comfort, Times Two
```
The campaign identifier `PRO_US_NA_U_BUNDLE_FULL_EN_03272026_V3` is concatenated directly against the subject copy with no separator. This is consistent with an unresolved template variable or a test-send subject prefix that was not removed before deployment. The `[Test]:` prefix also confirms this may be a pre-production send — **do not deploy this version to the full list without resolving both issues.**

No other unresolved merge tokens (`%%`, `{{`, `${`) observed in the truncated source.

---

### 5. Compliance

**SPF/DKIM authentication — unverified**
```
[WARN] Authentication-Results header not found: Expected via AgentMail relay — SPF/DKIM status unknown
```
Sending domain is `emails.skechers.com` via `no-reply@emails.skechers.com`. Authentication headers were not available through the AgentMail relay at audit time. Gmail and Yahoo (as of 2024 bulk sender requirements) will reject or junk unauthenticated bulk mail. Confirm DKIM signature on `emails.skechers.com` and SPF alignment before send.

**Plain-text version — URL-heavy**
```
[WARN] Plain-text is >70% URLs: 4133/5776 chars are URLs
```
The plain-text alternative is 71% raw URLs, which is a spam signal for filters that evaluate multipart/alternative balance. The plain-text part should contain readable content, not just link dumps.

**CAN-SPAM / unsubscribe** — HTML is truncated at footer; unsubscribe link and physical mailing address are expected to be present based on standard Skechers SFMC templates. Not confirmed absent — verify in full source.

---

### 6. Email-to-Site Continuity

All 26 links route through `click.emails.skechers.com` redirects. The QA tool skipped HTTP probing on these, so UTM parameter preservation on the final landing page URLs cannot be confirmed from this audit. Manual spot-check of at least the primary CTA redirect chain is recommended to verify:
- `utm_source`, `utm_medium`, `utm_campaign` are present on destination URLs
- Campaign ID in UTMs matches `PRO_US_NA_U_BUNDLE_FULL_EN_03272026` (not the `_V3` test variant)
- BOGO offer is live and prominently featured on the landing page at time of send

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Subject contains `[Test]:` prefix + raw campaign code | Strip `[Test]:` and fix template variable before production send |
| **P0** | SPF/DKIM unverified | Confirm authentication headers through sending relay before deploy |
| **P1** | 14+ images over HTTP | Change all `http://image.emails.skechers.com` to `https://` |
| **P1** | `ink1000.com` tracking pixel over HTTP | Upgrade to HTTPS or replace with HTTPS-capable endpoint |
| **P1** | Return Path pixel missing URL scheme | Add `https://` to `pixel.app.returnpath.net/pixel.gif` src |
| **P2** | 3 content images missing alt text | Add descriptive `alt` attributes to non-decorative images |
| **P2** | Plain-text body is 71% URLs | Rewrite plain-text version with readable content |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve accessibility scaling |
| **P3** | `<meta charset>` missing `http-equiv` | Add `http-equiv="Content-Type"` attribute |
| **P3** | krxd.net subscriber ID sync | Verify CCPA opt-out exclusion logic is applied before pixel fires |
## Recent history

- [[2026-03-29-this-is-perfect-for-you]] — 6/10 (2026-03-26)
- [[2026-03-29-fwd-welcome-to-skechers]] — 1/10 (2026-03-26)
- [[2026-03-29-your-first-pair-starts-here-try-our-best-sellers-at-bogo-50-off]] — 6/10 (2026-03-26)

