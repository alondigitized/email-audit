---
slug: 2026-04-03-test-mkg-us-na-u-replen-prod-en-04062026-bout-with-the-old-into-spring
type: email
date: 2026-04-03
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_REPLEN_PROD_EN_04062026_BOut with the Old & Into Spring 🌸"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NA_U_REPLEN_PROD_EN_04062026_BOut with the Old & Into Spring 🌸
**Score:** 6/10 · **Type:** Email audit · **2026-04-03**
## Executive summary

- A seasonal spring refresh email targeting replenishment — encouraging subscribers to update their footwear wardrobe across Women's, Men's, and Kids'. The creative is clean and on-brand with a strong headline, but the email suffers from a structural imbalance: the gender segmentation modules feel underpowered (small product thumbnails, low-impact CTAs), and the lower half collapses into a dense navigation dump that dilutes the seasonal momentum built at the top. The promo banner is upfront and legible. This is a serviceable email that misses a real revenue opportunity by not giving individual products or categories more breathing room.

## What's working

- **Promo banner lands immediately** — "BUY ONE GET ONE 50% OFF" reads clearly at the top, giving subscribers an instant reason to engage before scrolling.
- **"Spring Cleaning" hero** is visually appealing — bold typography, warm seasonal imagery with a lifestyle model, and a prominent "SHOP NOW" CTA directly under the headline.
- **Three-gender structure (Women / Men / Kids)** is logical and covers the full customer base systematically.
- **Clean, uncluttered top half** — the hero image takes up appropriate visual weight without competing elements.

## What's weak

- **Gender modules are too compressed.** Each section (Women, Men, Kids) shows a single lifestyle/product image with small product thumbnails beneath and a generic "SHOP NOW" button. No product names, prices, or reasons to choose are visible — just category labels.
- **Product thumbnails are too small** to drive desire or differentiation. At this size they function as navigation icons, not product discovery.
- **CTA repetition without differentiation.** Every section uses identical "SHOP NOW" yellow buttons. There's no hierarchy of urgency or specificity — nothing that says "New Arrivals" or "Shop the Sale."
- **Bottom navigation block is overdone.** A long row of text links (Women, Men, Kids, Clothing, New Arrivals, Sale, Shop Now, Find a Store) appears in a dense cluster that reads like a footer nav, not a marketing module. It competes with no product context.
- **Kids section appears visually lighter** — the lifestyle imagery feels less premium compared to the Women's and Men's sections.
- **No visible price points or savings specifics** tied to individual products, which weakens the BOGO offer's connection to actual items.

## Recommendations

- 1. **Expand the product grid per section.** Show 2–3 named products with prices beneath each gender header — let the product do the selling.
- 2. **Differentiate CTAs by intent.** Replace all-identical "SHOP NOW" with specific actions: "Shop Women's Sale," "See New Arrivals," "Shop Kids' Styles." Specificity converts.
- 3. **Surface the BOGO offer within each gender section.** Remind customers the deal applies as they scroll — one banner at the top is not enough.
- 4. **Remove or collapse the bottom nav block.** It adds length without value. A single "View All" or "Shop the Full Collection" CTA is sufficient.
- 5. **Add a price anchor or "starting at $X" under at least one section** to make the discount feel tangible.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Subject line: campaign ID concatenated without space before copy | Fix template merge logic — ensure delimiter/space between dynamic and static subject segments |
- | **P0** | Return Path pixel missing URL protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
- | **P1** | All `image.emails.skechers.com` assets served over HTTP | Re-upload or configure CDN to serve over HTTPS; update all `src` attributes |
- | **P1** | `ink1000.com` tracker over HTTP | Change to `https://` |
- | **P1** | SPF/DKIM unverified | Inspect full received headers from a test send before production deployment |
- | **P1** | Strip `[Test]:` subject prefix for production | Remove or gate behind environment flag |
- | **P2** | `mi_u` and `partner_uid` appear static/hardcoded | Confirm these are dynamic merge fields; replace with correct AMPscript/merge syntax if static |
- | **P2** | `maximum-scale=1` in viewport | Remove or change to `maximum-scale=5` to restore user zoom |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` |
- | **P3** | Missing `alt=""` on decorative images | Add `alt=""` to `o.gif` and unnamed functional images; add descriptive alt to app/payment badge images |

## Full review
## 1. Executive Summary

A seasonal spring refresh email targeting replenishment — encouraging subscribers to update their footwear wardrobe across Women's, Men's, and Kids'. The creative is clean and on-brand with a strong headline, but the email suffers from a structural imbalance: the gender segmentation modules feel underpowered (small product thumbnails, low-impact CTAs), and the lower half collapses into a dense navigation dump that dilutes the seasonal momentum built at the top. The promo banner is upfront and legible. This is a serviceable email that misses a real revenue opportunity by not giving individual products or categories more breathing room.

---

## 2. Business Impact Score: **6 / 10**

---

## 3. What's Working

- **Promo banner lands immediately** — "BUY ONE GET ONE 50% OFF" reads clearly at the top, giving subscribers an instant reason to engage before scrolling.
- **"Spring Cleaning" hero** is visually appealing — bold typography, warm seasonal imagery with a lifestyle model, and a prominent "SHOP NOW" CTA directly under the headline.
- **Three-gender structure (Women / Men / Kids)** is logical and covers the full customer base systematically.
- **Clean, uncluttered top half** — the hero image takes up appropriate visual weight without competing elements.

---

## 4. What's Weak

- **Gender modules are too compressed.** Each section (Women, Men, Kids) shows a single lifestyle/product image with small product thumbnails beneath and a generic "SHOP NOW" button. No product names, prices, or reasons to choose are visible — just category labels.
- **Product thumbnails are too small** to drive desire or differentiation. At this size they function as navigation icons, not product discovery.
- **CTA repetition without differentiation.** Every section uses identical "SHOP NOW" yellow buttons. There's no hierarchy of urgency or specificity — nothing that says "New Arrivals" or "Shop the Sale."
- **Bottom navigation block is overdone.** A long row of text links (Women, Men, Kids, Clothing, New Arrivals, Sale, Shop Now, Find a Store) appears in a dense cluster that reads like a footer nav, not a marketing module. It competes with no product context.
- **Kids section appears visually lighter** — the lifestyle imagery feels less premium compared to the Women's and Men's sections.
- **No visible price points or savings specifics** tied to individual products, which weakens the BOGO offer's connection to actual items.

---

## 5. Recommendations

1. **Expand the product grid per section.** Show 2–3 named products with prices beneath each gender header — let the product do the selling.
2. **Differentiate CTAs by intent.** Replace all-identical "SHOP NOW" with specific actions: "Shop Women's Sale," "See New Arrivals," "Shop Kids' Styles." Specificity converts.
3. **Surface the BOGO offer within each gender section.** Remind customers the deal applies as they scroll — one banner at the top is not enough.
4. **Remove or collapse the bottom nav block.** It adds length without value. A single "View All" or "Shop the Full Collection" CTA is sufficient.
5. **Add a price anchor or "starting at $X" under at least one section** to make the discount feel tangible.

---

## 6. Bottom Line

The email has a solid seasonal hook and a clear promotional message, but it wastes its mid-scroll real estate on low-resolution product thumbnails and generic CTAs. The BOGO offer is never contextually reinforced after the opening banner, so the deal feels disconnected from the products shown. Small structural changes — named products, differentiated CTAs, offer reinforcement — would meaningfully increase click-through on what is otherwise a well-executed visual framework.

---

## 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Seasonal replenishment push tied to a spring theme and a BOGO 50% off promotion |
| **Hero / primary value prop** | "Spring Cleaning" with lifestyle model; BOGO banner above; clear "SHOP NOW" CTA. Strong entry point. |
| **Membership / benefits** | None visible — no loyalty program, points, or member-exclusive framing present |
| **Product discoverability** | Three gender sections each with one lifestyle image + small thumbnail row. No product names or prices visible. Low discoverability. |
| **Utility / secondary modules** | Dense text link navigation block at bottom covering Women, Men, Kids, Clothing, New Arrivals, Sale, Find a Store |
| **Bugs / friction / clarity issues** | No visible broken images or rendering errors. Bottom nav block is visually cluttered but not broken. Preview text in the subject line appears to contain a raw URL fragment — visible in the email metadata but not in the render itself. |

---

## Technical Audit

## Technical Audit — Skechers `MKG_US_NA_U_REPLEN_PROD_EN_04062026_B`

---

### 1. Technical Summary

The email has a malformed subject line caused by a merge token spacing error and carries a `[Test]:` prefix that should be stripped before production deployment. Image delivery is broadly compromised by HTTP-only asset URLs across all hosted images.

---

### 2. Link & Tracking Issues

**Subject line concatenation error**
The subject renders as: `[Test]: MKG_US_NA_U_REPLEN_PROD_EN_04062026_BOut with the Old & Into Spring 🌸`
The campaign ID token (`_B`) is directly concatenated against the subject copy with no delimiter or space. This is a template/dynamic-content assembly defect.

**`[Test]:` prefix**
The subject prefix indicates a test-mode flag that was not stripped. If this is a production send, it should be removed. If it is a test send, no further action needed — but note that the campaign ID in tracker params (`mi_ecmp=MKG_US_NA_U_REPLEN_PROD_EN_04062026_B`, `campaignid=MKG_US_NA_U_REPLEN_PROD_EN_04062026_B`) shows no `_TEST` differentiation.

**26 encrypted click redirects**
All destination URLs are wrapped in SFMC's AES-encrypted redirect format (`click.emails.skechers.com/?qs=eyJ...`). Destination URLs and UTM parameters cannot be validated without decryption. This is expected for SFMC but prevents static QA of link destinations.

**Return Path pixel: missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `https://` (or `http://`) prefix. This is a protocol-relative URL missing its `//`, which will be treated as a relative path and will 404. The Validity inbox-monitoring signal will be lost entirely.

**`ink1000.com` pixel: static subscriber ID**
```
http://www.ink1000.com/p/up/.../o.gif?mi_u=9012945763&mi_ecmp=MKG_US_NA_U_REPLEN_PROD_EN_04062026_B
```
`mi_u=9012945763` appears to be a hardcoded value rather than a dynamic merge field. If this is a subscriber-level identifier it should be `%%=v(@mi_u)=%%` or equivalent. Confirm this is not a static test value that leaked into the template.

**Krux/Salesforce DMP beacons: static `partner_uid`**
```
beacon.krxd.net/1x1_usermatch.gif?...&partner_uid=7187828
```
This appears to be a static subscriber ID. User-match beacons should carry a dynamic hashed identifier per recipient; a static value provides no per-user signal.

---

### 3. Rendering & Accessibility

**HTTP image assets — 14 images affected**
All images hosted on `image.emails.skechers.com` are served over plain HTTP. Modern email clients (Gmail, Outlook.com, Apple Mail) proxy or block HTTP image requests. Affected assets include the logo, App Store/Google Play badges, AfterPay badge, and all social icons:
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png` (Skechers logo)
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png`
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png` (App Store)
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png` (Google Play)
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png` (AfterPay)
- Social icons: Instagram, Twitter, Facebook, Pinterest, YouTube — all HTTP

**Missing alt text — 5 images**
`o.gif` (ink1000 tracker), `49468f73-...png`, `00100b23-...png`, `fc08601a-...png`, and the ink1000 open tracker have no `alt` attribute. For decorative images `alt=""` is correct; for functional images (e.g. AfterPay badge, app badges) it is missing.

**`maximum-scale=1` in viewport**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
This prevents user-initiated zoom in mobile browsers. Fails WCAG 1.4.4 (Resize Text) and will be flagged by accessibility auditors.

**`-webkit-text-size-adjust: none`**
```css
* { -webkit-text-size-adjust: none; }
```
Applied globally via the `*` selector. This disables OS-level font scaling for visually impaired users on iOS/Android. Should be `100%` to preserve scaling while preventing unwanted auto-adjustment.

---

### 4. Personalization & Merge Tokens

**Campaign ID bleeds into subject copy**
As noted above, `MKG_US_NA_U_REPLEN_PROD_EN_04062026_B` is directly concatenated against the subject line text. This is the only visible merge-token defect in the HTML source; body personalization tokens are not visible in the truncated source.

No unrendered `%%variable%%` or `{{token}}` strings are visible in the provided HTML — no broken merge fields in the body.

---

### 5. Compliance

**SPF/DKIM status unknown**
Authentication-Results headers were not captured via the AgentMail relay. SPF/DKIM/DMARC pass/fail status cannot be confirmed for this send. This must be verified against actual received headers before production deployment.

**CAN-SPAM / unsubscribe**
Unsubscribe and physical address links are not present in the truncated HTML provided. These are standard in Skechers SFMC templates and likely present in the non-truncated body, but cannot be confirmed from available source. Verify footer is intact.

**Third-party tracking beacons**
Two Krux/Salesforce DMP user-match beacons and one ad-impression pixel are present. If the email is sent to recipients who have opted out of cross-site tracking under CCPA/GDPR, these beacons would need to be suppressed for those segments.

---

### 6. Email-to-Site Continuity

All 26 links are encrypted SFMC redirects — UTM parameter presence and values cannot be verified statically. The campaign ID `MKG_US_NA_U_REPLEN_PROD_EN_04062026_B` is consistently embedded in the `mi_ecmp` (ink1000) and `campaignid` (krxd) tracker parameters, indicating consistent campaign tagging at the pixel level. Confirm UTM params (`utm_source`, `utm_medium`, `utm_campaign`) are present in decoded destination URLs.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Subject line: campaign ID concatenated without space before copy | Fix template merge logic — ensure delimiter/space between dynamic and static subject segments |
| **P0** | Return Path pixel missing URL protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
| **P1** | All `image.emails.skechers.com` assets served over HTTP | Re-upload or configure CDN to serve over HTTPS; update all `src` attributes |
| **P1** | `ink1000.com` tracker over HTTP | Change to `https://` |
| **P1** | SPF/DKIM unverified | Inspect full received headers from a test send before production deployment |
| **P1** | Strip `[Test]:` subject prefix for production | Remove or gate behind environment flag |
| **P2** | `mi_u` and `partner_uid` appear static/hardcoded | Confirm these are dynamic merge fields; replace with correct AMPscript/merge syntax if static |
| **P2** | `maximum-scale=1` in viewport | Remove or change to `maximum-scale=5` to restore user zoom |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` |
| **P3** | Missing `alt=""` on decorative images | Add `alt=""` to `o.gif` and unnamed functional images; add descriptive alt to app/payment badge images |
## Recent history

- [[2026-04-03-test-mkg-us-na-u-replen-prod-en-04062026-a-v2give-your-work-shoes-a-glow-up]] — 5/10 (2026-04-03)
- [[2026-04-03-test-mkg-us-na-u-replen-prod-en-04062026-agive-your-work-shoes-a-glow-up]] — 5/10 (2026-04-03)
- [[2026-04-11-test-pro-us-na-u-sitebundle-full-en-04052026spring-fling-sale-double-the-style-s]] — 3/10 (2026-04-03)

