---
slug: 2026-04-11-test-pro-us-retpurl24-u-bundle-retail-en-04042026your-chance-to-stock-up-is-comi
type: email
date: 2026-04-02
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_RETPURL24_U_BUNDLE_RETAIL_EN_04042026Your Chance to Stock Up is Coming to an End!"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_RETPURL24_U_BUNDLE_RETAIL_EN_04042026Your Chance to Stock Up is Coming to an End!
**Score:** 5/10 · **Type:** Email audit · **2026-04-02**
## Executive summary

- A sale urgency email that leads with a solid hero offer but quickly devolves into a generic gender-segmented browse grid with no real personalization signal. The "Your Chance to Stock Up is Coming to an End!" deadline framing is entirely absent from the visual body — the email doesn't follow through on the urgency it promises in the subject line.

## What's working

- **Hero offer is clear.** "Spring Sale — Buy One, Get One 50% Off" is readable, prominently placed, and has two CTAs (Shop Now / Find a Store) that give both online and in-store paths.
- **Category grid is clean.** Women / Men / Girls / Boys panels are visually distinct and each has a dedicated Shop Now button — easy to scan.
- **Footer utility is complete.** App download, curbside pickup, Shop Now Pay Later, and Find a Store links are all present and structured.

## What's weak

- **Urgency promise is broken.** The subject line says "Your Chance to Stock Up is Coming to an End!" — but no expiration date, countdown, or deadline copy appears anywhere in the rendered email. Recipients who open expecting a deadline will find none.
- **Hero image reads small.** The BOGO 50% banner is narrow with a soft green background that competes with the Skechers logo. The offer doesn't dominate the screen the way a sale of this size should.
- **Category tiles are wallpaper.** Four browse tiles (Women, Men, Girls, Boys) with no product imagery or pricing create zero urgency and add no incremental value over just linking to the homepage.
- **"Shop Additional Styles" text nav is redundant.** The same four categories (Women, Men, Girls) plus Clothing, New Arrivals, and Sale appear again as plain text links directly below the tiles — duplicating navigation without adding value.
- **No product-level social proof or bestseller callouts.** There is no featured product, no "top picks," no price anchor — nothing to pull a hesitant browser toward a specific click.
- **Subject line leaked test metadata.** The subject renders as `[Test]: PRO_US_RETPURL24_U_BUNDLE_RETAIL_EN_04042026Your Chance...` — this is a production-critical bug if this email went to real recipients.

## Recommendations

- 1. **Add a visible expiration.** If this is a deadline-driven email, put the end date/time in the hero — "Sale ends Sunday" or a simple countdown badge. Right now the subject line is a lie the body doesn't back up.
- 2. **Make the hero larger and bolder.** The BOGO offer deserves a full-width, high-contrast treatment — bold type, a stronger color, and ideally a product shot behind it.
- 3. **Replace category browse tiles with featured products.** Show 3–4 specific shoes with names, prices, and the discounted price under BOGO. Give the recipient a reason to click *now* rather than browse later.
- 4. **Eliminate the duplicate text nav.** The "Shop Additional Styles" text links are already covered by the category tiles above. Collapse this or replace it with sale-specific links (e.g., "New Arrivals on Sale").
- 5. **Remove or qualify the test prefix** before any live send — `[Test]:` and the internal campaign code visible in the subject line should never reach subscribers.
- | Priority | Issue | Fix |
- |---|---|---|
- | **P0** | Subject line concatenation bug | Isolate campaign ID into its own template variable; do not append to subject copy |
- | **P0** | Return Path pixel missing protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
- | **P1** | All image assets on HTTP | Migrate `image.emails.skechers.com` CDN references to `https://`; update ESP template asset URLs |
- | **P1** | Ink1000 open pixel on HTTP | Update to `https://www.ink1000.com/...` |
- | **P1** | Authentication headers unverifiable | Confirm SPF/DKIM pass and DMARC alignment on `emails.skechers.com` before live send |
- | **P2** | Malformed `<meta>` tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to respective tags |
- | **P2** | Missing alt text on 4 content images | Add descriptive `alt` values to all non-decorative images |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` for WCAG compliance |
- | **P3** | Krux pixel subscriber ID exposure | Confirm `subid=7187828` (raw ID) in DMP beacon is permissible under consent framework |

## Full review
## 1. Executive Summary

A sale urgency email that leads with a solid hero offer but quickly devolves into a generic gender-segmented browse grid with no real personalization signal. The "Your Chance to Stock Up is Coming to an End!" deadline framing is entirely absent from the visual body — the email doesn't follow through on the urgency it promises in the subject line.

---

## 2. Business Impact Score: 5 / 10

---

## 3. What's Working

- **Hero offer is clear.** "Spring Sale — Buy One, Get One 50% Off" is readable, prominently placed, and has two CTAs (Shop Now / Find a Store) that give both online and in-store paths.
- **Category grid is clean.** Women / Men / Girls / Boys panels are visually distinct and each has a dedicated Shop Now button — easy to scan.
- **Footer utility is complete.** App download, curbside pickup, Shop Now Pay Later, and Find a Store links are all present and structured.

---

## 4. What's Weak

- **Urgency promise is broken.** The subject line says "Your Chance to Stock Up is Coming to an End!" — but no expiration date, countdown, or deadline copy appears anywhere in the rendered email. Recipients who open expecting a deadline will find none.
- **Hero image reads small.** The BOGO 50% banner is narrow with a soft green background that competes with the Skechers logo. The offer doesn't dominate the screen the way a sale of this size should.
- **Category tiles are wallpaper.** Four browse tiles (Women, Men, Girls, Boys) with no product imagery or pricing create zero urgency and add no incremental value over just linking to the homepage.
- **"Shop Additional Styles" text nav is redundant.** The same four categories (Women, Men, Girls) plus Clothing, New Arrivals, and Sale appear again as plain text links directly below the tiles — duplicating navigation without adding value.
- **No product-level social proof or bestseller callouts.** There is no featured product, no "top picks," no price anchor — nothing to pull a hesitant browser toward a specific click.
- **Subject line leaked test metadata.** The subject renders as `[Test]: PRO_US_RETPURL24_U_BUNDLE_RETAIL_EN_04042026Your Chance...` — this is a production-critical bug if this email went to real recipients.

---

## 5. Recommendations

1. **Add a visible expiration.** If this is a deadline-driven email, put the end date/time in the hero — "Sale ends Sunday" or a simple countdown badge. Right now the subject line is a lie the body doesn't back up.
2. **Make the hero larger and bolder.** The BOGO offer deserves a full-width, high-contrast treatment — bold type, a stronger color, and ideally a product shot behind it.
3. **Replace category browse tiles with featured products.** Show 3–4 specific shoes with names, prices, and the discounted price under BOGO. Give the recipient a reason to click *now* rather than browse later.
4. **Eliminate the duplicate text nav.** The "Shop Additional Styles" text links are already covered by the category tiles above. Collapse this or replace it with sale-specific links (e.g., "New Arrivals on Sale").
5. **Remove or qualify the test prefix** before any live send — `[Test]:` and the internal campaign code visible in the subject line should never reach subscribers.

---

## 6. Bottom Line

The structural bones are fine — hero, category grid, footer utility — but the email fails to earn its subject line. There's no visible urgency, no product specificity, and no personalization. It functions as a generic browse prompt when it should be a deadline-driven conversion push. The test metadata leak in the subject is the most urgent fix.

---

## 7. Evidence

| Module | What's Visible |
|---|---|
| **Overall purpose** | BOGO 50% off Spring Sale promotion with urgency framing in subject only |
| **Hero / primary value prop** | "Spring Sale — Buy One, Get One 50% Off" banner; soft green bg; Shop Now + Find a Store CTAs; no deadline date visible |
| **Membership / benefits** | None present |
| **Product discoverability** | Four gender-category tiles (Women, Men, Girls, Boys) each with a single lifestyle shoe image and Shop Now button; no individual product cards or pricing |
| **Utility / secondary modules** | Text nav (Women, Men, Girls, Clothing, New Arrivals, Sale); App download; Curbside Pickup; Shop Now Pay Later; Find a Store |
| **Bugs / friction / clarity issues** | (1) Test tag and campaign code visible in subject line as rendered. (2) No expiration date to match urgency subject line. (3) Duplicate category navigation (tiles + text links). Hero text is small relative to available width. |

---

## Technical Audit

## Technical Audit — Skechers PRO_US_RETPURL24_U_BUNDLE_RETAIL_EN_04042026

---

### 1. Technical Summary

This is a pre-production test send (confirmed by `[Test]:` subject prefix) with two infrastructure-level defects requiring fixes before live deployment: a subject line concatenation bug and pervasive HTTP (non-HTTPS) image sources. SPF/DKIM authentication status could not be verified via the relay.

---

### 2. Link & Tracking Issues

**Return Path pixel missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `https://` prefix — this is a relative-path URL that will resolve incorrectly in all clients. Inbox placement monitoring via Return Path will fail entirely.

**Third-party audience-match beacons (Krux/Salesforce DMP)**
Two `beacon.krxd.net/1x1_usermatch.gif` pixels fire with `partner_uid` values containing what appears to be a hashed subscriber identifier, plus a raw numeric subscriber ID (`subid=7187828`). Confirm these are covered by privacy policy and consent framework, especially under CCPA.

**26 click-tracking links skipped**
All CTA links route through `click.emails.skechers.com` — standard and expected. No broken destinations confirmed, but destinations are unverified.

**Ink1000 tracking pixel (HTTP)**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```
Mixed-content HTTP pixel; will be blocked silently by Gmail, Outlook.com, and Apple Mail. Open tracking attribution loss.

---

### 3. Rendering & Accessibility

**Pervasive HTTP image sources — 14 images affected**

All `image.emails.skechers.com` assets use `http://`, not `https://`. Gmail proxies these through its own cache (converting to HTTPS), but Outlook desktop, Apple Mail, and many B2B clients block HTTP images outright or show broken image icons. Affected assets include the Skechers logo, product images, app store badges, and all social icons:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
... (10 additional)
```

**Missing `alt` text — 4 images**
- `o.gif` (ink1000 tracking pixel) — minor, but technically flagged
- `49468f73-...png` — content image, unknown context; broken display if images blocked
- `00100b23-...png` — content image, same
- `fc08601a-...png` — content image, same

Images without alt text render as empty boxes when images are disabled, losing any fallback message.

**Malformed `<meta>` tags — missing `http-equiv` attribute**
```html
<meta content="text/html; charset=utf-8" />          <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                            <!-- missing http-equiv="X-UA-Compatible" -->
```
Both tags are syntactically invalid without `http-equiv`. The charset declaration will be ignored by some parsers, potentially causing encoding fallback issues.

**`-webkit-text-size-adjust: none`**
```css
* { -webkit-text-size-adjust: none; ... }
```
`none` disables user font scaling on iOS entirely — this is an accessibility violation (WCAG 1.4.4 Resize Text). Should be `100%`.

---

### 4. Personalization & Merge Tokens

**Subject line concatenation defect**
```
[Test]: PRO_US_RETPURL24_U_BUNDLE_RETAIL_EN_04042026Your Chance to Stock Up is Coming to an End!
```
The campaign ID `PRO_US_RETPURL24_U_BUNDLE_RETAIL_EN_04042026` is directly concatenated with the subject copy with no separator or newline. This indicates a template variable or subject-line build step is outputting the campaign token inline rather than into a separate field. Must be resolved before live send — the raw campaign ID will appear in the subject line on all client inboxes.

No other unresolved merge tokens visible in the truncated HTML body.

---

### 5. Compliance

**Authentication status unknown**
The QA relay did not capture `Authentication-Results` headers, so SPF/DKIM/DMARC pass/fail cannot be confirmed. Sending domain is `emails.skechers.com` — verify alignment with DMARC policy on `skechers.com` before deployment.

**CAN-SPAM / unsubscribe**
The HTML is truncated; footer unsubscribe link and physical mailing address are not visible in the provided source. Cannot confirm or deny compliance. These must be present and functional before live send.

**Preheader**
Correctly implemented:
```html
<div class="preheader" style="...display:none !important">Buy One, Get One 50% off While You Still Can</div>
```
No issues.

---

### 6. Email-to-Site Continuity

All 26 CTAs route through `click.emails.skechers.com` click-redirect wrapper. UTM parameter propagation cannot be confirmed without resolving the destination URLs — the click-redirect payloads are encrypted (`eyJ...` JWE tokens). Confirm that destination landing pages receive:
- `utm_source`, `utm_medium`, `utm_campaign` matching the campaign ID `PRO_US_RETPURL24_U_BUNDLE_RETAIL_EN_04042026`
- No double-encoding of parameters through the redirect chain

No bare/untracked links observed in the visible HTML.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **P0** | Subject line concatenation bug | Isolate campaign ID into its own template variable; do not append to subject copy |
| **P0** | Return Path pixel missing protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
| **P1** | All image assets on HTTP | Migrate `image.emails.skechers.com` CDN references to `https://`; update ESP template asset URLs |
| **P1** | Ink1000 open pixel on HTTP | Update to `https://www.ink1000.com/...` |
| **P1** | Authentication headers unverifiable | Confirm SPF/DKIM pass and DMARC alignment on `emails.skechers.com` before live send |
| **P2** | Malformed `<meta>` tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to respective tags |
| **P2** | Missing alt text on 4 content images | Add descriptive `alt` values to all non-decorative images |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` for WCAG compliance |
| **P3** | Krux pixel subscriber ID exposure | Confirm `subid=7187828` (raw ID) in DMP beacon is permissible under consent framework |
## Recent history

- [[2026-04-02-test-pro-us-ecmpurl24-u-bundle-ecom-en-04042026this-is-a-get-two-kind-of-sale]] — 6/10 (2026-04-02)
- [[2026-04-02-bold-brave-new]] — 5/10 (2026-04-02)
- [[2026-04-02-your-items-are-waiting]] — 6/10 (2026-04-02)

