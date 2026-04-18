---
slug: 2026-04-01-test-ret-us-na-u-store1569-zip-en-04022026sale-ending-soon-celebrate-our-birthda
type: email
date: 2026-04-01
persona: walker
score: "6.5/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1569_ZIP_EN_04022026SALE Ending Soon! Celebrate our Birthday in Wauwatosa"
tags: [email, score-7, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1569_ZIP_EN_04022026SALE Ending Soon! Celebrate our Birthday in Wauwatosa
**Score:** 6.5/10 · **Type:** Email audit · **2026-04-01**
## Executive summary

- A tightly focused local store birthday sale email for Skechers Wauwatosa (Mayfair Collection location). The core offer — Buy 2 Pairs, Get the 3rd Free through 4/5 — is clear and prominent. The email does its primary job: drive foot traffic to a specific store with a compelling, time-limited incentive. However, it's visually compressed and category navigation is bare-bones, leaving money on the table for shoppers who need a bit more inspiration to act.
- Strong offer clarity and urgency, but weak product merchandising and a sparse visual hierarchy limit conversion potential.

## What's working

- **Offer legibility**: "Buy 2 Pairs, Get the 3rd Free / Limited Time Only Thru 4/5" is large, bold, and impossible to miss. The urgency mechanic and deadline are both visible without scrolling.
- **Store-specific CTA**: Full address (11500 W Burleigh St, Wauwatosa, WI) and phone number (414.360.6595) are present, with a clear "Get Directions" button — the right action for a local retail email.
- **Hero image**: The lifestyle shot with the model holding shoes is on-brand and communicates the celebratory tone. The confetti styling and "Celebrate our birthday!" headline reinforce the occasion.
- **App / utility bar**: The App Store/Google Play download links, Curbside Pickup notice, Shop Now/Pay Later, Klarna, and Find a Store row cover the full utility layer efficiently.
- **Social footer**: Instagram and Facebook icons are present.

## What's weak

- **Zero product merchandising**: There are no individual product images, no featured styles, no prices. A Buy 2 Get 1 offer lives or dies on desire — showing actual shoes would significantly lift click-through.
- **Category navigation is text-only and generic**: Women / Men / Kids / Wide appear as plain text links under "Shop Additional Styles." No imagery, no category-specific hooks. This section reads like a fallback rather than an invitation.
- **Hero image is small and cluttered**: The lifestyle photo is competing with overlaid Skechers branding/logo inside the image itself, making it feel busy. The model is partially cut off.
- **"Mayfair Collection" naming is unexplained**: The header says "Mayfair Collection" but it's unclear if this refers to a product line or the Mayfair Mall location. Ambiguity weakens the message.
- **Subject line carries test prefixes**: The subject line visible in the email metadata begins with `[Test]:` and a long campaign code. If deployed as-is, this immediately signals an internal test to consumers and destroys credibility.
- **Preview text is broken**: The preview renders as a raw URL (`Skechers® https://view.emails.skechers.com/...`), not a human-readable message. This is a missed opportunity and looks like a rendering error to recipients.

## Recommendations

- 1. **Add 3–6 product tiles below the hero** — show bestsellers or birthday-sale-eligible styles with prices to create desire and give shoppers something to click before visiting the store.
- 2. **Fix the preview text** — it should read something like "Birthday Sale ends 4/5 — Buy 2 pairs, get your 3rd FREE at Wauwatosa." This is low-effort, high-impact.
- 3. **Remove the `[Test]:` prefix and campaign code from the subject line** before any live send.
- 4. **Clarify "Mayfair Collection"** — either drop it or add one line of copy explaining what it refers to.
- 5. **Make category links visual** — swap the plain text Women/Men/Kids/Wide row for small banner tiles or image buttons. Even a modest visual treatment improves engagement.
- 6. **Consider a secondary CTA for online shoppers** — the email is store-focused, but adding "Shop Online" with the same offer (if eligible) captures recipients who won't drive in.
- | Priority | Action |
- |---|---|
- | P0 | Remove `[Test]:` prefix and fix subject line concatenation before any production send |
- | P0 | Fix ReturnPath pixel — add `https://` protocol to `pixel.app.returnpath.net/pixel.gif` |
- | P1 | Migrate all `image.emails.skechers.com` asset URLs from `http://` to `https://` — systemic CDN config change, not per-email |
- | P1 | Migrate `ink1000.com` open pixel to HTTPS |
- | P1 | Obtain and publish Authentication-Results for this send; confirm DKIM pass on `emails.skechers.com` |
- | P2 | Change `* { -webkit-text-size-adjust: none }` to `100%` in base stylesheet |
- | P2 | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to affected meta tags |
- | P3 | Add `alt=""` to the 3 flagged images |
- | P3 | Resolve 28 tracked CTAs and audit UTM parameter completeness against `RET_US_NA_U_STORE1569_ZIP_EN_04022026` |

## Full review
## 1. Executive Summary

A tightly focused local store birthday sale email for Skechers Wauwatosa (Mayfair Collection location). The core offer — Buy 2 Pairs, Get the 3rd Free through 4/5 — is clear and prominent. The email does its primary job: drive foot traffic to a specific store with a compelling, time-limited incentive. However, it's visually compressed and category navigation is bare-bones, leaving money on the table for shoppers who need a bit more inspiration to act.

---

## 2. Business Impact Score: **6.5 / 10**

Strong offer clarity and urgency, but weak product merchandising and a sparse visual hierarchy limit conversion potential.

---

## 3. What's Working

- **Offer legibility**: "Buy 2 Pairs, Get the 3rd Free / Limited Time Only Thru 4/5" is large, bold, and impossible to miss. The urgency mechanic and deadline are both visible without scrolling.
- **Store-specific CTA**: Full address (11500 W Burleigh St, Wauwatosa, WI) and phone number (414.360.6595) are present, with a clear "Get Directions" button — the right action for a local retail email.
- **Hero image**: The lifestyle shot with the model holding shoes is on-brand and communicates the celebratory tone. The confetti styling and "Celebrate our birthday!" headline reinforce the occasion.
- **App / utility bar**: The App Store/Google Play download links, Curbside Pickup notice, Shop Now/Pay Later, Klarna, and Find a Store row cover the full utility layer efficiently.
- **Social footer**: Instagram and Facebook icons are present.

---

## 4. What's Weak

- **Zero product merchandising**: There are no individual product images, no featured styles, no prices. A Buy 2 Get 1 offer lives or dies on desire — showing actual shoes would significantly lift click-through.
- **Category navigation is text-only and generic**: Women / Men / Kids / Wide appear as plain text links under "Shop Additional Styles." No imagery, no category-specific hooks. This section reads like a fallback rather than an invitation.
- **Hero image is small and cluttered**: The lifestyle photo is competing with overlaid Skechers branding/logo inside the image itself, making it feel busy. The model is partially cut off.
- **"Mayfair Collection" naming is unexplained**: The header says "Mayfair Collection" but it's unclear if this refers to a product line or the Mayfair Mall location. Ambiguity weakens the message.
- **Subject line carries test prefixes**: The subject line visible in the email metadata begins with `[Test]:` and a long campaign code. If deployed as-is, this immediately signals an internal test to consumers and destroys credibility.
- **Preview text is broken**: The preview renders as a raw URL (`Skechers® https://view.emails.skechers.com/...`), not a human-readable message. This is a missed opportunity and looks like a rendering error to recipients.

---

## 5. Recommendations

1. **Add 3–6 product tiles below the hero** — show bestsellers or birthday-sale-eligible styles with prices to create desire and give shoppers something to click before visiting the store.
2. **Fix the preview text** — it should read something like "Birthday Sale ends 4/5 — Buy 2 pairs, get your 3rd FREE at Wauwatosa." This is low-effort, high-impact.
3. **Remove the `[Test]:` prefix and campaign code from the subject line** before any live send.
4. **Clarify "Mayfair Collection"** — either drop it or add one line of copy explaining what it refers to.
5. **Make category links visual** — swap the plain text Women/Men/Kids/Wide row for small banner tiles or image buttons. Even a modest visual treatment improves engagement.
6. **Consider a secondary CTA for online shoppers** — the email is store-focused, but adding "Shop Online" with the same offer (if eligible) captures recipients who won't drive in.

---

## 6. Bottom Line

This email is functionally correct for a local store event — the offer, deadline, and store details are all visible and clean. But it's doing the minimum. Without product imagery or any visual merchandising, it relies entirely on the offer strength to drive action. The broken preview text and test subject line are must-fix issues before deployment. Addressing product display and preview text alone would meaningfully improve performance.

---

## 7. Evidence

| Section | Observation |
|---|---|
| **Overall purpose** | Drive in-store traffic for Wauwatosa Mayfair store birthday sale (Buy 2, Get 3rd Free, ends 4/5) |
| **Hero / primary value prop** | "Celebrate our birthday! / Mayfair Collection" with lifestyle image + bold offer copy. Offer is clear; image is small and internally cluttered |
| **Membership / benefits** | Not present — no loyalty, no adiClub-equivalent visible |
| **Product discoverability** | None — no product images, no style names, no pricing anywhere in the email |
| **Utility / secondary modules** | Strong: App download, Curbside Pickup, Shop Now/Pay Later, Klarna, Find a Store all visible |
| **Bugs / friction / clarity issues** | (1) Preview text renders as a raw URL; (2) Subject line has `[Test]:` prefix and full campaign code visible; (3) "Mayfair Collection" label is ambiguous |

---

## Technical Audit

## Technical Audit — Skechers Store 1569 Birthday Sale (RET_US_NA_U_STORE1569_ZIP_EN_04022026)

---

### 1. Technical Summary

A store-targeted promotional email with no structural failures but several compounding infrastructure issues: pervasive HTTP image loading across a hardened CDN domain, a protocol-stripped tracking pixel that will silently fail, and unverifiable authentication headers. The `[Test]:` subject prefix confirms this is a pre-production send.

---

### 2. Link & Tracking Issues

**`[CRITICAL]` ReturnPath pixel missing protocol — will silently fail**
The Inbox Monitor pixel is rendered as a protocol-relative path without `//`, making it a relative URL:
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
Email clients will attempt to resolve this as a relative path, not an external host. The pixel will 404 silently. Correct form: `https://pixel.app.returnpath.net/pixel.gif?...`

**`[WARN]` 28 tracking links not probed**
All CTAs route through `click.emails.skechers.com` redirect domain. Destination URL integrity and UTM parameter presence on landing pages are unverifiable from this audit alone — see Section 6.

**`[INFO]` 4 third-party tracking/data-match pixels present**
- `beacon.krxd.net` (×3) — Salesforce DMP user-match and ad impression, includes SHA-256 hashed subscriber email (`d115e72c...`) and plaintext subscriber ID (`102541952`)
- `click.emails.skechers.com/open.aspx` — ESP open pixel
- `ink1000.com` — Secondary open/engagement pixel (HTTP — see Section 3)

---

### 3. Rendering & Accessibility

**`[HIGH]` Systemic HTTP image loading — 13 affected assets**
All `image.emails.skechers.com` hosted images use `http://`, not `https://`. Gmail, Outlook.com, and Apple Mail proxy or block mixed-content images. Affected includes content images, app store badges, social icons, and UI elements:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f...png
... (10 additional)
```
This is a CDN configuration issue — `image.emails.skechers.com` supports HTTPS; all `src` values need the protocol updated.

**`[HIGH]` Secondary open pixel served over HTTP**
```html
<img src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8091927189&..." />
```
Mixed content; will be blocked by secure clients. Also missing `alt=""`.

**`[MEDIUM]` `* { -webkit-text-size-adjust: none }` applied globally**
Set on the wildcard selector rather than `100%`. This prevents user-initiated text scaling on iOS, which is a WCAG 1.4.4 (Resize Text) failure. Should be `100%`.

**`[MEDIUM]` Missing `http-equiv` attributes on two meta tags**
```html
<meta content="text/html; charset=utf-8" />         <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                            <!-- missing http-equiv="X-UA-Compatible" -->
```
Without `http-equiv`, both tags are no-ops. Outlook/IE rendering mode hint will not apply.

**`[LOW]` 3 images missing alt text**
`o.gif` (ink1000), `dde00662...png`, `49468f73...png` — all flagged with empty or absent `alt`. Screen readers will announce raw filenames or skip silently depending on client.

---

### 4. Personalization & Merge Tokens

**`[CRITICAL]` `[Test]:` prefix present in subject line**
Subject: `[Test]: RET_US_NA_U_STORE1569_ZIP_EN_04022026SALE Ending Soon! Celebrate our Birthday in Wauwatosa`

The raw campaign ID has been concatenated directly into the display subject (`...04022026SALE`) with no space separator, suggesting the test-send template has a merge token or prefix that was not stripped. Must be resolved before production deployment.

**`[INFO]` Store-level targeting appears properly bound**
Campaign ID `RET_US_NA_U_STORE1569_ZIP_EN_04022026` and Krxd `campaignid` param are consistent. No unresolved `%%FIELD%%` or `{{token}}` placeholders visible in the truncated source.

---

### 5. Compliance

**`[WARN]` SPF/DKIM authentication unverifiable**
Authentication-Results header was not captured via the AgentMail relay. Sender domain `emails.skechers.com` should have DKIM signing and SPF alignment configured. Cannot confirm pass/fail from available data.

**`[INFO]` Preheader present and non-empty**
`"Buy 2 Pairs, Get the 3rd Free"` — correctly hidden via `display:none`.

**`[INFO]` CAN-SPAM surface elements**
Physical address and unsubscribe mechanism were not visible in the truncated HTML but are expected in the footer. Full source review needed to confirm presence and formatting.

---

### 6. Email-to-Site Continuity

**`[UNVERIFIABLE]` UTM parameter coverage on CTAs**
All 28 links route through `click.emails.skechers.com` redirects. UTM parameter presence on the final landing page URLs cannot be confirmed without resolving the redirects. The campaign ID in the Krxd pixel (`RET_US_NA_U_STORE1569_ZIP_EN_04022026`) provides a reference value that UTMs should mirror.

**`[INFO]` Store 1569 / Wauwatosa geo-targeting**
The ZIP-targeted campaign ID implies store-specific landing pages. If CTAs point to a generic `/sale` page rather than a store-locator or store-specific URL, geo-continuity breaks for non-local recipients receiving this via ZIP targeting.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | Remove `[Test]:` prefix and fix subject line concatenation before any production send |
| P0 | Fix ReturnPath pixel — add `https://` protocol to `pixel.app.returnpath.net/pixel.gif` |
| P1 | Migrate all `image.emails.skechers.com` asset URLs from `http://` to `https://` — systemic CDN config change, not per-email |
| P1 | Migrate `ink1000.com` open pixel to HTTPS |
| P1 | Obtain and publish Authentication-Results for this send; confirm DKIM pass on `emails.skechers.com` |
| P2 | Change `* { -webkit-text-size-adjust: none }` to `100%` in base stylesheet |
| P2 | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to affected meta tags |
| P3 | Add `alt=""` to the 3 flagged images |
| P3 | Resolve 28 tracked CTAs and audit UTM parameter completeness against `RET_US_NA_U_STORE1569_ZIP_EN_04022026` |
## Recent history

- [[2026-04-01-your-skechers-plus-monthly-summary-is-here]] — 5/10 (2026-04-01)
- [[2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-bmake-walking-a-breeze-with-go-walk]] — 5/10 (2026-04-01)
- [[2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-a-v3make-walking-a-breeze-with-go-walk]] — 6/10 (2026-04-01)

