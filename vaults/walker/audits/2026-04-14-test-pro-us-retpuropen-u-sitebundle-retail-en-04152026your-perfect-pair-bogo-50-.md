---
slug: 2026-04-14-test-pro-us-retpuropen-u-sitebundle-retail-en-04152026your-perfect-pair-bogo-50-
type: email
date: 2026-04-14
persona: walker
score: "4/10"
sender: SKECHERS
subject: "[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04152026Your Perfect Pair + BOGO 50% Off = Perfect Spring"
tags: [email, score-4, sender/skechers]
---
# [Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04152026Your Perfect Pair + BOGO 50% Off = Perfect Spring
**Score:** 4/10 · **Type:** Email audit · **2026-04-14**
## Executive summary

- Strong structural bones and a solid seasonal offer are completely undercut by critical data/production hygiene failures. If deployed to live subscribers in this state, it actively damages brand credibility.

## What's working

- **Clear BOGO offer** — "Buy One Get One 50% Off" is visible and prominent in the hero banner. The promotional hook is simple and easy to understand.
- **Three-segment structure** — Women's, Men's, and Kids sections are logically organized with dedicated CTAs ("Shop Women's," "Shop Men's," "Shop Kids"), giving each segment a clear path to purchase.
- **Product visual blocks** — Each segment includes multiple product image tiles, giving the email visual variety and a catalog feel.
- **Additional styles / category navigation** — The bottom section includes supplementary category links (Women, Men, Kids, G Fit, New Arrivals, Sale), which extends discoverability beyond the hero.
- **App download / social footer** — App store badges and social links are present and positioned in the footer appropriately.

## What's weak

- **Subject line is broken** — Starts with `[Test]:` followed by the full internal campaign identifier string. This is a test flag that should never be visible to end recipients. It buries the actual offer copy and reads as a system error to any real subscriber.
- **Preview text is raw JSON-LD** — The inbox preview (visible before opening) renders as `[{ "@context": "http://schema.org/", "@type": "Organization", ...` — raw structured data markup. This is the single most jarring defect: every recipient sees technical gibberish instead of teaser copy.
- **Hero image is small** — At this render size, the hero image showing the sandal is visually underwhelming. The product itself (what appears to be a strappy sandal) is the seasonal hook but doesn't command enough real estate to create desire.
- **Pricing visibility** — Product tile prices appear to be present but are very small and difficult to read, reducing the price-as-motivation effect.
- **No personalization signals visible** — Despite being positioned as targeting returning/purchase-open customers (per the campaign code), there's no visible personalized content, first-name greeting, or past-purchase reference.

## Recommendations

- 1. **Fix the subject line immediately** — Strip the `[Test]:` prefix and the campaign ID. The actual offer copy ("Your Perfect Pair + BOGO 50% Off = Perfect Spring") is usable but needs editing (see Subject Line Analysis).
- 2. **Fix the preview text** — Replace the JSON-LD with dedicated preview copy. Something like: "Spring's best deal: buy one pair, get the second 50% off. Shop Women's, Men's & Kids →"
- 3. **Promote the hero product more boldly** — The sandal image should be larger, ideally with the product name, a brief descriptor, and a direct link. Right now the hero is generic BOGO messaging, not product-first.
- 4. **Make pricing more legible** — Increase font size on product tile price labels, or at minimum surface the "starting at $X" framing near the BOGO copy.
- 5. **Add a deadline** — The BOGO offer has no visible end date. Adding urgency ("This weekend only," "Ends Sunday") would sharpen conversion intent.
- 6. **Verify this is not live** — Given the `[Test]:` flag and broken preview, confirm this email has not been deployed to production subscribers.
- | Priority | Action |
- |---|---|
- | **P0** | Fix subject-line template — remove `[Test]:` prefix and insert space/delimiter between campaign ID variable and display subject before any production send |
- | **P0** | Update all `http://image.emails.skechers.com` `src` values to `https://` in the SFMC content block; the CDN supports HTTPS |
- | **P1** | Fix Return Path pixel `src` — prepend `https://` to `pixel.app.returnpath.net/pixel.gif?...` |
- | **P1** | Add `alt=""` explicitly to the ink1000.com tracking pixel `<img>` and the unnamed `49468f73-...png` image |
- | **P1** | Confirm SPF/DKIM/DMARC alignment via full mail headers on a seed-list send through production relay |
- | **P1** | Verify `mi_u` and `partner_uid` are per-subscriber merge tags, not static values |
- | **P2** | Change `-webkit-text-size-adjust: none` from `* {}` to `body {}` to restore OS-level text scaling for accessibility |
- | **P2** | Remove duplicate `@media` blocks to reduce CSS parse overhead |
- | **P2** | Spot-check 2–3 CTA redirect URLs for UTM parameter presence on the skechers.com landing page |
- | **P3** | Confirm full-render footer contains unsubscribe link and physical address (CAN-SPAM §5(a)) |

## Full review
## 2. Business Impact Score: **4 / 10**

Strong structural bones and a solid seasonal offer are completely undercut by critical data/production hygiene failures. If deployed to live subscribers in this state, it actively damages brand credibility.

---

## 3. What's Working

- **Clear BOGO offer** — "Buy One Get One 50% Off" is visible and prominent in the hero banner. The promotional hook is simple and easy to understand.
- **Three-segment structure** — Women's, Men's, and Kids sections are logically organized with dedicated CTAs ("Shop Women's," "Shop Men's," "Shop Kids"), giving each segment a clear path to purchase.
- **Product visual blocks** — Each segment includes multiple product image tiles, giving the email visual variety and a catalog feel.
- **Additional styles / category navigation** — The bottom section includes supplementary category links (Women, Men, Kids, G Fit, New Arrivals, Sale), which extends discoverability beyond the hero.
- **App download / social footer** — App store badges and social links are present and positioned in the footer appropriately.

---

## 4. What's Weak

- **Subject line is broken** — Starts with `[Test]:` followed by the full internal campaign identifier string. This is a test flag that should never be visible to end recipients. It buries the actual offer copy and reads as a system error to any real subscriber.
- **Preview text is raw JSON-LD** — The inbox preview (visible before opening) renders as `[{ "@context": "http://schema.org/", "@type": "Organization", ...` — raw structured data markup. This is the single most jarring defect: every recipient sees technical gibberish instead of teaser copy.
- **Hero image is small** — At this render size, the hero image showing the sandal is visually underwhelming. The product itself (what appears to be a strappy sandal) is the seasonal hook but doesn't command enough real estate to create desire.
- **Pricing visibility** — Product tile prices appear to be present but are very small and difficult to read, reducing the price-as-motivation effect.
- **No personalization signals visible** — Despite being positioned as targeting returning/purchase-open customers (per the campaign code), there's no visible personalized content, first-name greeting, or past-purchase reference.

---

## 5. Recommendations

1. **Fix the subject line immediately** — Strip the `[Test]:` prefix and the campaign ID. The actual offer copy ("Your Perfect Pair + BOGO 50% Off = Perfect Spring") is usable but needs editing (see Subject Line Analysis).
2. **Fix the preview text** — Replace the JSON-LD with dedicated preview copy. Something like: "Spring's best deal: buy one pair, get the second 50% off. Shop Women's, Men's & Kids →"
3. **Promote the hero product more boldly** — The sandal image should be larger, ideally with the product name, a brief descriptor, and a direct link. Right now the hero is generic BOGO messaging, not product-first.
4. **Make pricing more legible** — Increase font size on product tile price labels, or at minimum surface the "starting at $X" framing near the BOGO copy.
5. **Add a deadline** — The BOGO offer has no visible end date. Adding urgency ("This weekend only," "Ends Sunday") would sharpen conversion intent.
6. **Verify this is not live** — Given the `[Test]:` flag and broken preview, confirm this email has not been deployed to production subscribers.

---

## 6. Bottom Line

The email framework is competent and the offer is seasonally appropriate, but it cannot go live in its current state. The preview text and subject line issues are not minor cosmetic flaws — they signal to recipients (and spam filters) that the email is malformed. Fix those two items as hard blockers, then invest in a stronger hero and urgency framing.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04152026Your Perfect Pair + BOGO 50% Off = Perfect Spring`
- **Length:** 99 characters (as rendered; internal code makes this 2–3× longer than it should be)
- **Scores (1-10):** Clarity `2`, Curiosity `3`, Personalization `2`, Urgency `3`, Specificity `4`
- **Strengths:**
  - The back half of the line ("Your Perfect Pair + BOGO 50% Off = Perfect Spring") is punchy and benefit-forward
  - BOGO 50% Off is concrete and scannable
- **Weaknesses:**
  - `[Test]:` prefix and 52-character campaign ID prepended before the actual offer — disqualifying in production
  - No urgency signal; "Perfect Spring" is vague seasonal filler with no deadline or exclusivity
- **Alt A:** `Your Perfect Pair Is Waiting — BOGO 50% Off This Weekend Only`
- **Alt B:** `Buy One, Get One 50% Off: Spring Styles for Women, Men & Kids`

---

## 8. Evidence

- **Overall purpose:** Seasonal spring promotional email driving site traffic via a BOGO 50% off offer across footwear categories.
- **Hero / primary value proposition:** BOGO 50% off banner with a spring sandal image. Offer is clear but the creative is modest in scale and lacks urgency or deadline copy.
- **Membership / benefits section:** No visible loyalty/rewards module in this render.
- **Product discoverability / recommendation modules:** Three category blocks (Women's, Men's, Kids) each with 2–3 product tiles and a dedicated shop CTA. A lower "Shop Additional Styles" row adds category navigation depth.
- **Utility / secondary modules:** App download badges (App Store / Google Play), social icons, and a standard legal/unsubscribe footer.
- **Bugs / friction / clarity issues (visible in render):**
  - Subject line contains `[Test]:` prefix and full internal campaign code — visible in inbox view
  - Preview text renders as raw JSON-LD schema markup — visible in inbox before open
  - Product tile text/prices are very small and difficult to read at render size

---

## Technical Audit

## Technical Audit — SKECHERS PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04152026

---

### 1. Technical Summary

Email is built on Salesforce Marketing Cloud (SFMC) with click.emails.skechers.com for redirect tracking and image.emails.skechers.com for asset hosting. Multiple HTTP-only image sources, a subject-line rendering defect, and two missing alt attributes were confirmed by HTML source inspection and automated QA.

---

### 2. Link & Tracking Issues

**Subject line concatenation defect**
The `From` header shows the subject rendered as:
```
[Test]: PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04152026Your Perfect Pair + BOGO 50% Off...
```
The campaign-ID token and the display subject are concatenated without a space or delimiter. This is a template variable rendering error — either a missing separator in the SFMC content block or an unfired `%%subject%%` token that was supposed to replace the ID.

**32 tracked click links — unverified destinations**
All outbound links route through `click.emails.skechers.com`. The QA probe skipped them (redirect domains). UTM parameters on destination pages cannot be confirmed (see §6).

**Return Path inbox-monitoring pixel — missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
The `src` has no `https://` scheme. Browsers and most email clients will either refuse to load this or silently fail. The pixel fires no deliverability signal.

**ink1000.com tracking pixel — hardcoded subscriber ID**
```
http://www.ink1000.com/p/up/.../o.gif?mi_u=8004129222&mi_ecmp=PRO_US_RETPUROPEN...
```
`mi_u=8004129222` appears to be a static integer rather than a subscriber-level merge tag. If this is intended to be per-recipient, it is broken. Also served over HTTP (see §3).

---

### 3. Rendering & Accessibility

**HTTP images — will be blocked by major clients**
14 images are served over `http://`, not `https://`. Gmail, Outlook 365, and Apple Mail proxy or block non-HTTPS assets. Affected sources:

| Image | URL |
|---|---|
| o.gif (tracking pixel) | `http://www.ink1000.com/...` |
| Skechers logo | `http://image.emails.skechers.com/.../dde00662-...png` |
| Unnamed image | `http://image.emails.skechers.com/.../49468f73-...png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f-...png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0-...png` |
| Curbside Pickup | `http://image.emails.skechers.com/.../00100b23-...png` |
| AfterPay | `http://image.emails.skechers.com/.../07cb60b5-...png` |
| Find A Store | `http://image.emails.skechers.com/.../fc08601a-...png` |
| Instagram | `http://image.emails.skechers.com/.../b782e0aa-...png` |
| Facebook | `http://image.emails.skechers.com/.../a5c4cae0-...png` |
| YouTube | `http://image.emails.skechers.com/.../8c5738fc-...png` |

The `image.emails.skechers.com` CDN supports HTTPS — this is a template configuration issue, not a CDN limitation.

**Missing alt text — two images**
```
o.gif (ink1000 tracking pixel) — no alt attribute
49468f73-4651-4af3-bea2-61d1ae5db486.png — no alt attribute
```
Screen readers will read the raw filename or skip the image entirely. The tracking pixel should have `alt=""` explicitly set.

**`-webkit-text-size-adjust: none` on universal selector**
```css
* { -webkit-text-size-adjust: none; ... }
```
Applied to `*` rather than `body`, this disables OS-level text scaling for every element including body copy, which breaks accessibility for users with vision settings that increase font size.

**Duplicate responsive breakpoints**
The `@media only screen and (max-width: 640px)` ruleset and the `@media only screen and (max-width: 375px)` ruleset each appear twice in `<style>` blocks (once inline in `<head>`, once in a second `<style>` tag). This is non-fatal but increases parse weight and risks specificity conflicts on edge cases.

---

### 4. Personalization & Merge Tokens

**`[Test]:` prefix not stripped**
The subject line retains a `[Test]:` prefix, confirming this is a test-deployment send. If this subject renders in a production inbox, it constitutes a live defect.

**Campaign ID leaked into subject**
`PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04152026` is exposed verbatim in the subject. This is consistent with an unfired or misconfigured SFMC subject-line dynamic content block where the fallback value defaulted to the internal campaign ID rather than the display copy.

**Krxd beacon — subscriber ID exposed in URL**
```
https://beacon.krxd.net/...?partner_uid=32884357
```
`partner_uid=32884357` is a static value in the test send. In production this should be a per-subscriber hashed identifier merge tag; if it is hardcoded it will attribute all opens/matches to a single subscriber record in the Krxd/Salesforce Audience Studio pipeline.

---

### 5. Compliance

**Authentication-Results header absent**
The AgentMail relay did not surface SPF or DKIM pass/fail status. SPF/DKIM validity cannot be confirmed from the available data. No evidence of a DMARC-aligned pass.

**Unsubscribe / CAN-SPAM**
HTML is truncated; footer content is not visible in the provided source. Unsubscribe link presence and physical mailing address cannot be confirmed from available data. These must be verified against the full render.

**`[Test]:` subject in production pipeline**
A test-mode email reaching a real recipient inbox may constitute a CAN-SPAM violation depending on whether it contains a commercial offer (it does — BOGO 50% Off). Test sends should be gated to internal seed lists only.

---

### 6. Email-to-Site Continuity

All 32 click links are wrapped by `click.emails.skechers.com` redirects. Because the QA probe skipped these, UTM parameter carrythrough to `skechers.com` landing pages is unverified. The campaign ID `PRO_US_RETPUROPEN_U_SITEBUNDLE_RETAIL_EN_04152026` is present in both the ink1000 pixel and the Krxd ad-impression pixel, indicating the campaign tag is wired at the pixel level, but UTM consistency at the destination URL level requires a manual spot-check of at least 2–3 CTA links post-redirect.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Fix subject-line template — remove `[Test]:` prefix and insert space/delimiter between campaign ID variable and display subject before any production send |
| **P0** | Update all `http://image.emails.skechers.com` `src` values to `https://` in the SFMC content block; the CDN supports HTTPS |
| **P1** | Fix Return Path pixel `src` — prepend `https://` to `pixel.app.returnpath.net/pixel.gif?...` |
| **P1** | Add `alt=""` explicitly to the ink1000.com tracking pixel `<img>` and the unnamed `49468f73-...png` image |
| **P1** | Confirm SPF/DKIM/DMARC alignment via full mail headers on a seed-list send through production relay |
| **P1** | Verify `mi_u` and `partner_uid` are per-subscriber merge tags, not static values |
| **P2** | Change `-webkit-text-size-adjust: none` from `* {}` to `body {}` to restore OS-level text scaling for accessibility |
| **P2** | Remove duplicate `@media` blocks to reduce CSS parse overhead |
| **P2** | Spot-check 2–3 CTA redirect URLs for UTM parameter presence on the skechers.com landing page |
| **P3** | Confirm full-render footer contains unsubscribe link and physical address (CAN-SPAM §5(a)) |
## Recent history

- [[2026-04-14-test-pro-us-na-u-sitebundle-full-en-04152026spring-styles-bogo-50-off-the-perfec-cf2310ce-75b7-4c73-985b-]] — 4/10 (2026-04-14)
- [[2026-04-14-test-pro-us-na-u-sitebundle-full-en-04152026spring-styles-bogo-50-off-the-perfec]] — 4/10 (2026-04-14)
- [[2026-04-14-famous-for-the-styles-your-family-loves]] — 5/10 (2026-04-14)

