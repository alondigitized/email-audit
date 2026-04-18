---
slug: 2026-04-09-test-mkg-us-na-u-best-wide-en-04102026say-bye-to-tight-hello-to-just-right
type: email
date: 2026-04-09
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_BEST_WIDE_EN_04102026Say Bye to Tight & Hello to Just Right!"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NA_U_BEST_WIDE_EN_04102026Say Bye to Tight & Hello to Just Right!
**Score:** 6/10 · **Type:** Email audit · **2026-04-09**
## Executive summary

- A clean, focused email built around one clear proposition: Skechers' Wide Fit collection is on sale at 50% off. The dual-gender structure (Women / Men) is smart and keeps the layout scannable. However, the hero offer is visually undersold — the discount banner is small and easy to miss — and the lifestyle photography, while relevant, is modest in scale. Utility modules at the bottom are dense and crowd the close. Overall a functional but unremarkable execution of a strong deal.
- Clear offer, right audience, weak visual hierarchy on the discount. Leaves conversion points on the table.

## What's working

- **Single-theme clarity.** Wide Fit is the only story here — no message dilution.
- **Gender segmentation works.** Women → Men flow with distinct photography and CTAs makes navigation intuitive.
- **Offer is present upfront.** "Buy One Get One 50% Off" appears in the top banner, giving deal-seekers an immediate signal.
- **"New to the Lineup" module** is a useful addition — introduces new product without hijacking the sale story.
- **Navigation bar** (Women / Men / Kids / Clothing / New Arrivals / Sale) provides secondary wayfinding without demanding attention.

## What's weak

- **The discount banner is tiny.** The BOGO 50% offer is rendered in small type at the very top — easy to miss on mobile. It should be the hero, not a footnote.
- **Hero headline competes with itself.** "Wide Fit. Best Fit. Best Sellers." is three separate claims stacked together. One strong line would hit harder.
- **Photography is small and flat.** The Women and Men lifestyle images are not large enough to create aspiration or product desire — they read more like catalog thumbnails.
- **"New to the Lineup" underperforms.** The product shown is barely visible — small, low-contrast, and unconvincing as a reason to explore.
- **Footer module density.** The bottom of the email — SMS opt-in, loyalty CTA, app download, social icons, legal — is crammed together without breathing room, creating visual noise that weakens the close.

## Recommendations

- 1. **Make the BOGO offer the visual hero.** Blow up the discount treatment — large type, high contrast, above the fold. If the deal is the reason to send the email, it needs to look like it.
- 2. **Cut the headline to one claim.** Pick either "Best Fit" or "Best Sellers" — not both.
- 3. **Increase lifestyle image scale.** The Women and Men sections need larger, more immersive photography to drive click-through.
- 4. **Give "New to the Lineup" one strong product image.** Small, washed-out product shots don't convert. Feature one shoe, large, with a clear CTA.
- 5. **Reduce footer clutter.** Prioritize one utility action (SMS or app — not both) and stack legal below the fold line.
- | Priority | Action |
- |---|---|
- | **Critical** | Pull or suppress this send; the `[Test]:` prefix and missing space in the subject line (`...04102026Say Bye...`) indicates a deployment error |
- | **High** | Migrate all `image.emails.skechers.com` image URLs to HTTPS — 14 assets affected |
- | **High** | Fix Return Path pixel: add `https://` protocol to `pixel.app.returnpath.net/pixel.gif?r=...` |
- | **High** | Migrate `ink1000.com` open pixel to HTTPS |
- | **Medium** | Add descriptive `alt` text to the 4 images flagged above |
- | **Medium** | Confirm DMARC/DKIM alignment is passing at the envelope level via ESP send logs |
- | **Low** | Fix `<meta>` tags to include `http-equiv` attributes |
- | **Low** | Change `-webkit-text-size-adjust: none` to `100%` on the `*` selector |

## Full review
## Skechers Wide Fit — Email Review

---

### 1. Executive Summary

A clean, focused email built around one clear proposition: Skechers' Wide Fit collection is on sale at 50% off. The dual-gender structure (Women / Men) is smart and keeps the layout scannable. However, the hero offer is visually undersold — the discount banner is small and easy to miss — and the lifestyle photography, while relevant, is modest in scale. Utility modules at the bottom are dense and crowd the close. Overall a functional but unremarkable execution of a strong deal.

---

### 2. Business Impact Score: **6 / 10**

Clear offer, right audience, weak visual hierarchy on the discount. Leaves conversion points on the table.

---

### 3. What's Working

- **Single-theme clarity.** Wide Fit is the only story here — no message dilution.
- **Gender segmentation works.** Women → Men flow with distinct photography and CTAs makes navigation intuitive.
- **Offer is present upfront.** "Buy One Get One 50% Off" appears in the top banner, giving deal-seekers an immediate signal.
- **"New to the Lineup" module** is a useful addition — introduces new product without hijacking the sale story.
- **Navigation bar** (Women / Men / Kids / Clothing / New Arrivals / Sale) provides secondary wayfinding without demanding attention.

---

### 4. What's Weak

- **The discount banner is tiny.** The BOGO 50% offer is rendered in small type at the very top — easy to miss on mobile. It should be the hero, not a footnote.
- **Hero headline competes with itself.** "Wide Fit. Best Fit. Best Sellers." is three separate claims stacked together. One strong line would hit harder.
- **Photography is small and flat.** The Women and Men lifestyle images are not large enough to create aspiration or product desire — they read more like catalog thumbnails.
- **"New to the Lineup" underperforms.** The product shown is barely visible — small, low-contrast, and unconvincing as a reason to explore.
- **Footer module density.** The bottom of the email — SMS opt-in, loyalty CTA, app download, social icons, legal — is crammed together without breathing room, creating visual noise that weakens the close.

---

### 5. Recommendations

1. **Make the BOGO offer the visual hero.** Blow up the discount treatment — large type, high contrast, above the fold. If the deal is the reason to send the email, it needs to look like it.
2. **Cut the headline to one claim.** Pick either "Best Fit" or "Best Sellers" — not both.
3. **Increase lifestyle image scale.** The Women and Men sections need larger, more immersive photography to drive click-through.
4. **Give "New to the Lineup" one strong product image.** Small, washed-out product shots don't convert. Feature one shoe, large, with a clear CTA.
5. **Reduce footer clutter.** Prioritize one utility action (SMS or app — not both) and stack legal below the fold line.

---

### 6. Bottom Line

The strategy is sound — unified theme, clear deal, gender-split journey. The execution is conservative to the point of leaving the offer under-leveraged. The BOGO 50% message deserves to dominate the layout; right now it whispers. Fix the visual hierarchy and this email significantly outperforms its current version.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Promote Wide Fit collection with BOGO 50% off offer |
| **Hero / primary value prop** | "Wide Fit. Best Fit. Best Sellers." headline with small BOGO banner above; offer is visually de-prioritized |
| **Membership / benefits** | No loyalty/membership section visible in the main body |
| **Product discoverability** | Women CTA ("Shop Women's Wide Fit") and Men CTA ("Shop Men's Wide Fit") are present; "New to the Lineup" adds one new-arrival product module |
| **Utility / secondary modules** | Navigation bar, SMS sign-up ("Let's Get Textual"), loyalty ("Cashback Dealer"), app download, social follow icons |
| **Bugs / friction** | No broken images visible; footer feels congested but renders correctly; preview text contains raw URL strings visible in subject line area — appears as clutter before open |

---

## Technical Audit

## Technical Audit — Skechers Wide Width Email
**Campaign:** `MKG_US_NA_U_BEST_WIDE_EN_04102026` | **Reviewed:** 2026-04-09

---

### 1. Technical Summary

The email has a critical subject-line defect (test prefix + missing delimiter), a protocol-broken tracking pixel, and a pervasive HTTP image-serving issue across 14+ assets that will trigger mixed-content warnings or image-blocking in modern clients. Authentication status is unverifiable through the relay used.

---

### 2. Link & Tracking Issues

**[CRITICAL] Subject line sent with `[Test]:` prefix and missing space delimiter**
Subject reads: `[Test]: MKG_US_NA_U_BEST_WIDE_EN_04102026Say Bye to Tight & Hello to Just Right!`
— The campaign ID token is immediately concatenated to the subject copy with no space, indicating a broken template variable or copy-paste error in the send configuration.

**[HIGH] Return Path inbox monitoring pixel has no protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
Missing `https://` prefix. This is not a relative path — the pixel will resolve to a broken URL and fail to fire in all clients.

**[MEDIUM] ink1000.com open pixel served over HTTP**
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8021648903&mi_ecmp=MKG_US_NA_U_BEST_WIDE_EN_04102026"
```
Plain HTTP in a third-party open-tracking pixel; Gmail and Outlook proxy/block non-HTTPS resources.

**[INFO] 26 click-tracking links present**, all routing through `click.emails.skechers.com`. Not a defect, but destination URLs and UTM parameters cannot be verified without resolving the encrypted `?qs=` payloads.

**[INFO] Two Krux DMP user-match pixels** firing on open:
```
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=c30973d6f4e31a55c5dcae7d3c3df0d73fcb04747ff44220a92abd05cee475c2
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=75909571
```
`partner_uid` on the first pixel is a SHA-256 hashed value — confirm this is intentional and compliant with applicable consent requirements.

---

### 3. Rendering & Accessibility

**[HIGH] 14 images served over HTTP from `image.emails.skechers.com`**
All footer/social/payment-method images use `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/...`. Gmail proxies HTTP images via a secure proxy, but Outlook and Apple Mail may block them entirely, rendering the footer section blank. Affected images include the Skechers logo, App Store badge, Google Play badge, AfterPay logo, and all social icons (Instagram, Twitter, Facebook, Pinterest, YouTube).

**[MEDIUM] 4 images missing `alt` text**
| Image file | URL |
|---|---|
| `o.gif` (ink1000 open pixel) | `http://www.ink1000.com/...` |
| `49468f73-...png` | `http://image.emails.skechers.com/.../m/11/49468f73...` |
| `00100b23-...png` | `http://image.emails.skechers.com/.../m/11/00100b23...` |
| `fc08601a-...png` | `http://image.emails.skechers.com/.../m/11/fc08601a...` |
Tracking pixels should have `alt=""` (already present on the open.aspx pixel — apply consistently). Content images need descriptive alt text for screen readers.

**[LOW] `<meta>` tags missing `http-equiv` attribute**
```html
<meta content="text/html; charset=utf-8" />       <!-- should be http-equiv="Content-Type" -->
<meta content="IE=Edge" />                          <!-- should be http-equiv="X-UA-Compatible" -->
```
Most clients tolerate this, but it is technically invalid XHTML and may break strict parsers.

**[LOW] `-webkit-text-size-adjust: none` applied to `*` selector**
This prevents users with accessibility needs from increasing text size on iOS/Safari. Should be `100%` rather than `none`.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%FIRST_NAME%%`, `{{field}}`) are visible in the truncated source. The `mi_u=8021648903` subscriber ID and `partner_uid` values in the tracking pixels appear resolved.

No issues found — but the subject line defect in section 2 may be a related template-variable failure worth tracing at the ESP template level.

---

### 5. Compliance

**[HIGH] SPF/DKIM authentication status unverifiable**
QA finding: `Authentication-Results header not found` via the AgentMail relay. Cannot confirm DMARC alignment. This is a relay inspection gap, not necessarily a deliverability failure — but it means authentication cannot be asserted from this audit.

**[MEDIUM] `[Test]:` prefix in live send subject**
If this email was deployed to production subscribers with the test prefix in the subject line, it represents a QA process failure. The subject as sent: `[Test]: MKG_US_NA_U_BEST_WIDE_EN_04102026Say Bye to Tight & Hello to Just Right!`

**[INFO] Unsubscribe and physical address** — not visible in the truncated HTML source; assumed present in the footer (standard Skechers template). Verify `List-Unsubscribe` header is present at the envelope level.

---

### 6. Email-to-Site Continuity

**Cannot verify UTM parameters** — all 26 CTAs are wrapped in encrypted `click.emails.skechers.com/?qs=` redirect URLs. The campaign ID `MKG_US_NA_U_BEST_WIDE_EN_04102026` is present in both tracking pixels, confirming attribution identity is consistent. UTM decoration on final destination URLs requires decrypting or spot-checking the click-tracking redirects outside this audit scope.

No issues found beyond the verification gap above.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **Critical** | Pull or suppress this send; the `[Test]:` prefix and missing space in the subject line (`...04102026Say Bye...`) indicates a deployment error |
| **High** | Migrate all `image.emails.skechers.com` image URLs to HTTPS — 14 assets affected |
| **High** | Fix Return Path pixel: add `https://` protocol to `pixel.app.returnpath.net/pixel.gif?r=...` |
| **High** | Migrate `ink1000.com` open pixel to HTTPS |
| **Medium** | Add descriptive `alt` text to the 4 images flagged above |
| **Medium** | Confirm DMARC/DKIM alignment is passing at the envelope level via ESP send logs |
| **Low** | Fix `<meta>` tags to include `http-equiv` attributes |
| **Low** | Change `-webkit-text-size-adjust: none` to `100%` on the `*` selector |
## Recent history

- [[2026-04-09-the-right-pair-to-start-with-perfect-for-right-now]] — 5/10 (2026-04-09)
- [[2026-04-09-did-you-forget-something]] — 5/10 (2026-04-09)
- [[2026-04-09-purechill-is-your-go-to-for-before-and-after-sport]] — 4/10 (2026-04-09)

