---
slug: 2026-04-07-test-mkg-us-ecmpurl24-w-new-gender-en-04082026-spring-into-a-new-level-of-comfor-349dcf97-9d57-4d45-a450-
type: email
date: 2026-04-07
persona: walker
score: "5.5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_ECMPURL24_W_NEW_GENDER_EN_04082026🌱 Spring into a new level of comfort"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_ECMPURL24_W_NEW_GENDER_EN_04082026🌱 Spring into a new level of comfort
**Score:** 5.5/10 · **Type:** Email audit · **2026-04-07**
## Executive summary

- A women's spring footwear email from Skechers built around a "New for Her" hero and a 50% off promotion. The structure is clean and methodical — category by category — but the email operates more like a browsable catalog than a compelling seasonal campaign. The spring theme is barely present, the promo urgency is soft, and the product imagery is small and repetitive in tone. Functional, but forgettable.
- Solid promotional framing, weak emotional pull. Leaves conversion on the table.

## What's working

- **Promo banner is front and center** — "Buy One Get One 50% Off" with "Buy 2 & Save More" is visible at the top and sets intent immediately.
- **Category navigation is logical** — Casual Sneakers → Slip-Ins → Sandals → Wide Fit follows a natural consumer decision tree.
- **Wide Fit section is a differentiator** — Explicitly calling it out shows customer awareness and helps an underserved segment self-select.
- **Footer utility is complete** — Store locator, Find a Style, social icons, and opt-out links are all present and legible.

## What's weak

- **Hero feels generic** — "New for HER / Spring into a new level of comfort" doesn't say anything distinctive. "Comfort" is Skechers' evergreen claim, not a spring moment.
- **Product images are small and visually flat** — Each category row shows one or two shoes at thumbnail scale. Nothing is styled or aspirational — just product on white.
- **No price anchoring** — With a BOGO 50% offer live, there's no price shown anywhere in the body. The deal sits in a banner and then disappears.
- **CTAs are repetitive and low-energy** — "SHOP CASUALS," "SHOP SLIP-INS," "SHOP SANDALS," "SHOP WIDE FIT" are functional but identical in weight and framing. No secondary CTA variation or urgency layer.
- **Spring theme is name-only** — The subject line and hero mention spring, but nothing in the visual treatment reinforces it — no color palette shift, no seasonal context, no lifestyle imagery.
- **Slim secondary navigation strip** — The Men / Kids / Clothing / New Arrivals / Sale links at the bottom are extremely small. They'll be missed on mobile.

## Recommendations

- 1. **Anchor the promo in the product rows** — Add a "starting from $X — BOGO 50% today" callout near at least one product module to remind shoppers the deal applies as they browse.
- 2. **Add one lifestyle/hero image with seasonal context** — A single outdoor spring scene would justify the subject line and create emotional contrast against the catalog-style product rows.
- 3. **Vary CTA copy by category** — "Spring's Top Slip-Ins" or "Perfect for Warmer Days" CTAs do more work than repeating "SHOP [CATEGORY]."
- 4. **Increase product image scale** — Even one featured shoe per category at 2x scale would add visual hierarchy and reduce the monotony.
- 5. **Move the secondary nav higher or enlarge it** — New Arrivals and Sale are high-intent destinations that shouldn't be buried below the fold.
- 6. **Fix the preview text** — The visible preview contains a raw URL (`https://view.emails.skechers.com/?vawpToken=...`), which is a deliverability and professionalism issue that should be corrected before send.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | `[Test]:` subject prefix | Remove before production send |
- | **P0** | 13 `image.emails.skechers.com` images served over HTTP | Change all `http://image.emails.skechers.com` to `https://` in template |
- | **P0** | ink1000 + Return Path pixels over HTTP | Update pixel URLs to HTTPS equivalents |
- | **P1** | SPF/DKIM unverifiable | Confirm authentication headers on production relay; ensure DMARC alignment |
- | **P1** | 4 images missing `alt` text | Add descriptive `alt` attributes (or `alt=""` for purely decorative images) |
- | **P2** | `maximum-scale=1` in viewport | Remove or set to `5` to allow pinch-zoom (WCAG 1.4.4) |
- | **P2** | `-webkit-text-size-adjust: none` globally | Scope to specific containers or use `100%` instead of `none` |
- | **P2** | 29 click links unprobed | Spot-check 3–5 CTAs through redirect to verify UTM passthrough |
- | **P3** | Confirm CAN-SPAM footer | Verify physical address and unsubscribe link present in full source |

## Full review
## 1. Executive Summary

A women's spring footwear email from Skechers built around a "New for Her" hero and a 50% off promotion. The structure is clean and methodical — category by category — but the email operates more like a browsable catalog than a compelling seasonal campaign. The spring theme is barely present, the promo urgency is soft, and the product imagery is small and repetitive in tone. Functional, but forgettable.

---

## 2. Business Impact Score: **5.5 / 10**

Solid promotional framing, weak emotional pull. Leaves conversion on the table.

---

## 3. What's Working

- **Promo banner is front and center** — "Buy One Get One 50% Off" with "Buy 2 & Save More" is visible at the top and sets intent immediately.
- **Category navigation is logical** — Casual Sneakers → Slip-Ins → Sandals → Wide Fit follows a natural consumer decision tree.
- **Wide Fit section is a differentiator** — Explicitly calling it out shows customer awareness and helps an underserved segment self-select.
- **Footer utility is complete** — Store locator, Find a Style, social icons, and opt-out links are all present and legible.

---

## 4. What's Weak

- **Hero feels generic** — "New for HER / Spring into a new level of comfort" doesn't say anything distinctive. "Comfort" is Skechers' evergreen claim, not a spring moment.
- **Product images are small and visually flat** — Each category row shows one or two shoes at thumbnail scale. Nothing is styled or aspirational — just product on white.
- **No price anchoring** — With a BOGO 50% offer live, there's no price shown anywhere in the body. The deal sits in a banner and then disappears.
- **CTAs are repetitive and low-energy** — "SHOP CASUALS," "SHOP SLIP-INS," "SHOP SANDALS," "SHOP WIDE FIT" are functional but identical in weight and framing. No secondary CTA variation or urgency layer.
- **Spring theme is name-only** — The subject line and hero mention spring, but nothing in the visual treatment reinforces it — no color palette shift, no seasonal context, no lifestyle imagery.
- **Slim secondary navigation strip** — The Men / Kids / Clothing / New Arrivals / Sale links at the bottom are extremely small. They'll be missed on mobile.

---

## 5. Recommendations

1. **Anchor the promo in the product rows** — Add a "starting from $X — BOGO 50% today" callout near at least one product module to remind shoppers the deal applies as they browse.
2. **Add one lifestyle/hero image with seasonal context** — A single outdoor spring scene would justify the subject line and create emotional contrast against the catalog-style product rows.
3. **Vary CTA copy by category** — "Spring's Top Slip-Ins" or "Perfect for Warmer Days" CTAs do more work than repeating "SHOP [CATEGORY]."
4. **Increase product image scale** — Even one featured shoe per category at 2x scale would add visual hierarchy and reduce the monotony.
5. **Move the secondary nav higher or enlarge it** — New Arrivals and Sale are high-intent destinations that shouldn't be buried below the fold.
6. **Fix the preview text** — The visible preview contains a raw URL (`https://view.emails.skechers.com/?vawpToken=...`), which is a deliverability and professionalism issue that should be corrected before send.

---

## 6. Bottom Line

This email will perform acceptably because the BOGO offer is real and the category navigation is clean. But it's punching well below its potential for a spring campaign — no emotional lift, no visual seasonality, no urgency reinforcement in-body. A few targeted changes to the hero and product rows would meaningfully move conversion.

---

## 7. Evidence

**Overall purpose:** Drive women's footwear purchases during a spring BOGO 50% promotion, with secondary goal of surfacing category breadth.

**Hero / primary value proposition:** White-background hero with product image, "NEW for HER" headline, and "Spring into a new level of comfort" subhead. BOGO banner is visually separated above it. The hero and promo don't visually connect — they feel like two separate decisions.

**Membership / benefits section:** Not present in this email.

**Product discoverability / recommendation modules:** Four category blocks — Casual Sneakers, Slip-Ins, Sandals, Wide Fit — each with a product thumbnail row and a single CTA button. Functional but not curated; no bestseller callouts, ratings, or editorial framing.

**Utility / secondary modules:** Footer includes a compact secondary nav (Men, Kids, Clothing, New Arrivals, Sale), social follow icons, and standard legal/unsubscribe block. Store locator and "Find a Style" CTAs are present.

**Bugs / friction / clarity issues:** The email preview text (visible in the subject metadata) contains a raw URL string instead of a teaser line — this is visible to the recipient in their inbox before opening and undermines the first impression.

---

## Technical Audit

## Technical Audit — Skechers Spring Email (MKG_US_ECMPURL24_W_NEW_GENDER_EN_04082026)

---

### 1. Technical Summary

This is a pre-production test send (subject prefix `[Test]:`) with 18 HTTP image URLs that will trigger mixed-content blocking in modern clients, and SPF/DKIM authentication status is unverifiable through the current relay. No broken links detected among probed URLs.

---

### 2. Link & Tracking Issues

**No broken destination links found.** However:

- **29 click-redirect links** through `click.emails.skechers.com` were skipped by the HTTP probe — destination URL integrity and UTM parameters could not be verified programmatically.
- **Four third-party tracking pixels** are embedded in the hidden preheader table:
  - Salesforce MC open pixel: `click.emails.skechers.com/open.aspx?DAOGJ4TBDDWULNGT7YJ7JXBX4M...`
  - Two Krux/Salesforce DMP user-match beacons: `beacon.krxd.net/1x1_usermatch.gif` and `beacon.krxd.net/1x1_ad_impression.gif`
  - Validity/Return Path seed pixel: `pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0...` — served over **HTTP**, not flagged by QA but subject to same blocking risk
  - ink1000 pixel: `http://www.ink1000.com/...` — HTTP (see §3)

---

### 3. Rendering & Accessibility

**HTTP mixed-content — 18 images** served over `http://` will be silently blocked by Gmail, Outlook.com, Apple Mail, and most modern clients that enforce HTTPS:

| Image | HTTP URL |
|---|---|
| ink1000 tracking pixel | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` |
| Skechers logo | `http://image.emails.skechers.com/.../dde00662-...png` |
| Unnamed image | `http://image.emails.skechers.com/.../49468f73-...png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f-...png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0-...png` |
| Unnamed image | `http://image.emails.skechers.com/.../00100b23-...png` |
| AfterPay logo | `http://image.emails.skechers.com/.../07cb60b5-...png` |
| Unnamed image | `http://image.emails.skechers.com/.../fc08601a-...png` |
| Instagram icon | `http://image.emails.skechers.com/.../b782e0aa-...png` |
| Twitter icon | `http://image.emails.skechers.com/.../d76a5487-...png` |
| Facebook icon | `http://image.emails.skechers.com/.../a5c4cae0-...png` |
| Pinterest icon | `http://image.emails.skechers.com/.../573ab181-...png` |
| YouTube icon | `http://image.emails.skechers.com/.../8c5738fc-...png` |

All `image.emails.skechers.com` URLs should resolve over HTTPS — this is likely a template configuration issue, not a CDN limitation.

**Missing `alt` text on 4 images:**
- `o.gif` (ink1000 pixel) — acceptable for tracking pixels, but `alt=""` should be explicit
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unknown content, no alt
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — unknown content, no alt
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — unknown content, no alt

**Viewport accessibility:** `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">` — `maximum-scale=1` prevents user-initiated pinch-zoom, which violates WCAG 1.4.4 (Resize Text).

**Text scaling suppressed globally:** `* { -webkit-text-size-adjust: none; }` disables iOS automatic font size adjustment across all elements. This can cause unreadable text on older iOS devices.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the truncated HTML. Subscriber-level values are present and appear populated:
- `mi_u=9012945763` in the ink1000 pixel — subscriber ID resolved
- `partner_uid=7187828` in the Krux subid beacon — resolved

No `%%` or `{{` token syntax visible. Cannot confirm full template without complete source, but no obvious misfires in the visible portion.

---

### 5. Compliance

**Authentication:** SPF/DKIM status is **unknown** — `Authentication-Results` header not found via the AgentMail relay. Production send must confirm SPF pass for `emails.skechers.com` and DKIM signature validity. DMARC alignment cannot be assessed.

**Subject line `[Test]:` prefix** — this email is in pre-production state. Sending with this subject to a live list would be a production defect.

**CAN-SPAM:** Physical mailing address and unsubscribe mechanism cannot be confirmed from the truncated source — these are typically in the footer. Full source review required to confirm presence.

**From address:** `no-reply@emails.skechers.com` — a reply-blocking address. CAN-SPAM requires a functioning reply-to or postal address for opt-out; this alone does not constitute a violation if an unsubscribe link is present, but reply blocking should be noted.

---

### 6. Email-to-Site Continuity

All 29 links route through `click.emails.skechers.com` click-tracking redirect — UTM parameters and destination URLs could not be probed. The campaign ID `MKG_US_ECMPURL24_W_NEW_GENDER_EN_04082026` is consistently present across tracking pixels (Krux, ink1000), which confirms campaign-level tagging is applied.

Landing page UTM alignment cannot be confirmed without probing the redirects. Recommend spot-checking 2–3 CTA links post-redirect to verify `utm_campaign`, `utm_source`, and `utm_medium` are passed through correctly.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | `[Test]:` subject prefix | Remove before production send |
| **P0** | 13 `image.emails.skechers.com` images served over HTTP | Change all `http://image.emails.skechers.com` to `https://` in template |
| **P0** | ink1000 + Return Path pixels over HTTP | Update pixel URLs to HTTPS equivalents |
| **P1** | SPF/DKIM unverifiable | Confirm authentication headers on production relay; ensure DMARC alignment |
| **P1** | 4 images missing `alt` text | Add descriptive `alt` attributes (or `alt=""` for purely decorative images) |
| **P2** | `maximum-scale=1` in viewport | Remove or set to `5` to allow pinch-zoom (WCAG 1.4.4) |
| **P2** | `-webkit-text-size-adjust: none` globally | Scope to specific containers or use `100%` instead of `none` |
| **P2** | 29 click links unprobed | Spot-check 3–5 CTAs through redirect to verify UTM passthrough |
| **P3** | Confirm CAN-SPAM footer | Verify physical address and unsubscribe link present in full source |
## Recent history

- [[2026-04-07-test-mkg-us-ecmpurl24-w-new-gender-en-04082026-spring-into-a-new-level-of-comfor]] — 5/10 (2026-04-07)
- [[2026-04-07-test-mkg-us-nonpur180-w-new-nonpurch-en-04082026-v2-spring-into-comfort-like-you]] — 5/10 (2026-04-07)
- [[2026-04-07-test-mkg-us-nonpur180-w-new-nonpurch-en-04082026-spring-into-comfort-like-you-ve]] — 5/10 (2026-04-07)

