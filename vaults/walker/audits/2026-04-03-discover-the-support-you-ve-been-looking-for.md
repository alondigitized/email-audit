---
slug: 2026-04-03-discover-the-support-you-ve-been-looking-for
type: email
date: 2026-04-03
persona: walker
score: "5/10"
sender: SKECHERS
subject: "Discover the Support You've Been Looking For"
tags: [email, score-5, sender/skechers]
---
# Discover the Support You've Been Looking For
**Score:** 5/10 · **Type:** Email audit · **2026-04-03**
## Executive summary

- A standard catalog-style email anchored by a 50% off sale banner and organized into three product category modules (Athletic Sneakers, Sandals, Casual Sneakers). The layout is clean and functional but emotionally flat. The subject line promises a discovery narrative around support and comfort — the email delivers a generic sale grid instead. There's a structural disconnect between the promise and the execution.
- Competent execution of a promotional mailer, but squandered potential. The 50% off offer is strong and visible; everything else is forgettable.

## What's working

- **Sale banner is prominent.** "50% OFF / SHOP NOW" is the first thing the eye lands on — clear hierarchy, hard to miss.
- **Category segmentation works.** Breaking into Athletic Sneakers, Sandals, and Casual Sneakers gives the reader a fast mental model of what's available.
- **Product imagery is clean.** Each module shows a single, well-lit hero product shot. No clutter.
- **Navigation footer is present.** Store locator, account links, and social icons round out the utility section appropriately.

## What's weak

- **Subject line / email mismatch.** "Discover the Support You've Been Looking For" sets up a benefit-driven promise. The email lands as a sale grid with no copy connecting support or comfort back to the featured products.
- **CTAs are generic and low-energy.** Each module carries what appears to be a basic "Shop Now"-style button with no category-specific pull. Nothing differentiates the athletic CTA from the sandals CTA.
- **Hero module is thin.** "Arch Fit Style Update" is introduced as a label but gets no supporting copy — no mention of what the style update actually is, why it matters, or what's new.
- **Three modules, minimal differentiation.** The layout for Athletic, Sandals, and Casual is visually identical — same structure, same visual weight. There's no editorial hierarchy telling the reader where to focus.
- **Preview text is broken.** The visible preview reads as a raw URL string, not a meaningful teaser. This kills open-rate potential before the email is even opened.

## Recommendations

- 1. **Fix the preview text immediately.** A broken URL as preview text is a deliverability and brand trust issue. Replace with a direct benefit statement tied to the subject line (e.g., "Arch Fit technology, now 50% off").
- 2. **Anchor one product as the hero.** Pick the Arch Fit or the lead athletic shoe and give it a full-width hero moment with 1–2 lines of benefit copy. The current banner is a headline without a story.
- 3. **Write category-specific CTAs.** "Shop Athletic" / "Shop Sandals" / "Shop Casual" — small change, measurable click-through lift.
- 4. **Connect the subject line to the content.** If the email is about Arch Fit support, lead with that technology by name and one concrete claim (cushioning, stability, etc.).
- 5. **Differentiate one module visually.** Use a background color, a badge, or a "Best Seller" callout to create a focal point and break the visual monotony.
- | Priority | Issue | Action |
- |---|---|---|
- | **High** | All `image.emails.skechers.com` assets use `http://` | Update CDN or template to serve all assets over `https://` |
- | **High** | Preheader text describes a different offer than the subject | Update preheader to match this campaign before any future send |
- | **High** | Return Path pixel missing protocol | Fix: `<img src="https://pixel.app.returnpath.net/pixel.gif?r=...">` |
- | **Medium** | ink1000.com open pixel uses `http://` | Switch to `https://` or confirm ink1000 supports HTTPS |
- | **Medium** | 3 content images missing `alt` text | Add descriptive alt text for 49468f73, 00100b23, fc08601a assets |
- | **Medium** | SPF/DKIM status unconfirmed | Verify SFMC DKIM record published for `emails.skechers.com`; confirm DMARC policy |
- | **Low** | `-webkit-text-size-adjust: none` on `*` selector | Scope to specific elements or use `100%` instead of `none` |
- | **Low** | UTM pass-through unverified | Manually resolve one SFMC redirect and confirm UTM params on landing URL |
- | **Low** | Krux `_subid` pixel passes raw subscriber ID | Confirm this is acceptable under current privacy policy / consent framework |

## Full review
## Skechers — "Discover the Support You've Been Looking For"

---

### 1. Executive Summary

A standard catalog-style email anchored by a 50% off sale banner and organized into three product category modules (Athletic Sneakers, Sandals, Casual Sneakers). The layout is clean and functional but emotionally flat. The subject line promises a discovery narrative around support and comfort — the email delivers a generic sale grid instead. There's a structural disconnect between the promise and the execution.

---

### 2. Business Impact Score: **5/10**

Competent execution of a promotional mailer, but squandered potential. The 50% off offer is strong and visible; everything else is forgettable.

---

### 3. What's Working

- **Sale banner is prominent.** "50% OFF / SHOP NOW" is the first thing the eye lands on — clear hierarchy, hard to miss.
- **Category segmentation works.** Breaking into Athletic Sneakers, Sandals, and Casual Sneakers gives the reader a fast mental model of what's available.
- **Product imagery is clean.** Each module shows a single, well-lit hero product shot. No clutter.
- **Navigation footer is present.** Store locator, account links, and social icons round out the utility section appropriately.

---

### 4. What's Weak

- **Subject line / email mismatch.** "Discover the Support You've Been Looking For" sets up a benefit-driven promise. The email lands as a sale grid with no copy connecting support or comfort back to the featured products.
- **CTAs are generic and low-energy.** Each module carries what appears to be a basic "Shop Now"-style button with no category-specific pull. Nothing differentiates the athletic CTA from the sandals CTA.
- **Hero module is thin.** "Arch Fit Style Update" is introduced as a label but gets no supporting copy — no mention of what the style update actually is, why it matters, or what's new.
- **Three modules, minimal differentiation.** The layout for Athletic, Sandals, and Casual is visually identical — same structure, same visual weight. There's no editorial hierarchy telling the reader where to focus.
- **Preview text is broken.** The visible preview reads as a raw URL string, not a meaningful teaser. This kills open-rate potential before the email is even opened.

---

### 5. Recommendations

1. **Fix the preview text immediately.** A broken URL as preview text is a deliverability and brand trust issue. Replace with a direct benefit statement tied to the subject line (e.g., "Arch Fit technology, now 50% off").
2. **Anchor one product as the hero.** Pick the Arch Fit or the lead athletic shoe and give it a full-width hero moment with 1–2 lines of benefit copy. The current banner is a headline without a story.
3. **Write category-specific CTAs.** "Shop Athletic" / "Shop Sandals" / "Shop Casual" — small change, measurable click-through lift.
4. **Connect the subject line to the content.** If the email is about Arch Fit support, lead with that technology by name and one concrete claim (cushioning, stability, etc.).
5. **Differentiate one module visually.** Use a background color, a badge, or a "Best Seller" callout to create a focal point and break the visual monotony.

---

### 6. Bottom Line

The offer is strong (50% off). The execution is forgettable. The email reads like an automated catalog blast — no editorial voice, no connection to the stated subject line promise. A few targeted fixes to the preview text, hero module, and CTAs would meaningfully lift performance without a full redesign.

---

### 7. Evidence

**Overall purpose:** Promotional sale email driving traffic to Skechers.com across three footwear categories, anchored by a 50% off banner.

**Hero / primary value proposition:** "Arch Fit Style Update" with a 50% off badge and Shop Now CTA. The offer is legible but the benefit framing is absent — no copy explains what the style update is or why Arch Fit matters.

**Membership / benefits section:** None visible. No loyalty points, no Skechers+ callout, no member-exclusive framing.

**Product discoverability / recommendation modules:** Three category tiles — Athletic Sneakers, Sandals, Casual Sneakers — each with a single product image and a CTA button. No product names, prices, or ratings are visible. Discovery is shallow.

**Utility / secondary modules:** Footer includes navigation links (Store Locator, My Account, etc.), Follow Us with social icons, and standard unsubscribe/legal copy. Functional and appropriately minimal.

**Bugs / friction / clarity issues:** The email preview text (visible in the subject line metadata) renders as a raw URL string — a clear production error that damages first impressions before the email is opened.

---

## Technical Audit

## Technical Audit — Skechers "Discover the Support You've Been Looking For"
**From:** no-reply@emails.skechers.com | **Date:** 2026-04-03

---

### 1. Technical Summary

Email is deployed via Salesforce Marketing Cloud (SFMC) on the `emails.skechers.com` sending domain with `click.emails.skechers.com` for link tracking. The build has a pervasive HTTP mixed-content problem across all image assets, several missing alt attributes, an unresolvable Return Path pixel, and a preheader/subject mismatch that indicates a template content error.

---

### 2. Link & Tracking Issues

**Third-party data pixels (Krux/Salesforce DMP):**
Two user-match beacons fire on open via `beacon.krxd.net`:
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=9153f33f...
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=121173391
```
The `partner_uid` on the `_subid` variant (`121173391`) appears to be a raw subscriber ID passed in plaintext. The `_sha25` variant passes a hashed value — confirm that `sha25` denotes SHA-256 and not a truncated or weaker hash. These pixels are rendered in a `display:none` div, which some privacy-focused clients may still execute.

**Broken Return Path pixel — missing protocol:**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1...">
```
No `http://` or `https://` prefix. This URL will not resolve — it will be treated as a relative path and 404. The inbox placement signal this pixel provides will be lost for every recipient.

**26 click-redirect links skipped by QA probe** — standard for SFMC wrapping; not an error, but UTM pass-through on final destinations cannot be confirmed without resolving the redirects (see §6).

---

### 3. Rendering & Accessibility

**HTTP image sources — pervasive (15 assets):**
Every image hosted on `image.emails.skechers.com` uses `http://`. Gmail proxies HTTP images through a Google cache, which can break signed URLs and alter dimensions. Outlook 2016+ blocks HTTP images by default. Affected assets include the logo, product images, app store badges, payment icons, and all social icons:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
... (10 additional social/footer images)
```
The ink1000.com open-tracking pixel also uses HTTP:
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8107766165&mi_ecmp=MKG_US_NONPUR180_U_ARCH_NONPURCH_EN_04032026
```

**Missing alt text (4 images):**
| Asset | src |
|---|---|
| o.gif (open pixel) | `http://www.ink1000.com/.../o.gif` |
| 49468f73-...png | `http://image.emails.skechers.com/.../m/11/49468f73-...` |
| 00100b23-...png | `http://image.emails.skechers.com/.../m/11/00100b23-...` |
| fc08601a-...png | `http://image.emails.skechers.com/.../m/11/fc08601a-...` |

Tracking pixels conventionally carry `alt=""` — the o.gif omission is minor. The three content images with no alt are a screen-reader gap.

**`-webkit-text-size-adjust: none` (global):**
```css
* { -webkit-text-size-adjust: none; }
```
Applied to the universal selector, this suppresses iOS's automatic text scaling for all elements. Prevents users with accessibility needs from enlarging text via system settings.

**Mobile/desktop toggling via `display:none`:**
The template duplicates content blocks and hides them by viewport using `display:none`. Several email clients (notably Outlook on Windows) ignore `@media` queries, meaning the "desktop" version will render for all Outlook users regardless of screen size — confirm the desktop block is acceptable at narrow widths.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the truncated source. Subscriber-level IDs appear resolved (e.g., `mi_u=8107766165`, `partner_uid=121173391`), indicating dynamic population fired correctly.

**Preheader/subject mismatch — likely template error:**
- Subject: `Discover the Support You've Been Looking For`
- Preheader text (hidden div): `Start Out with Double the Comfort with BOGO 50% off`

These describe different offers. The preheader appears to be copied from a prior send (BOGO 50% off) and not updated for this deployment. Recipients on clients that surface preheader text (Gmail, Apple Mail, iOS) will see a misleading secondary message.

---

### 5. Compliance

**Authentication-Results header unavailable:**
QA relay did not capture SPF/DKIM/DMARC results. The sending domain (`emails.skechers.com`) should have SFMC's DKIM key published — this should be verified against DNS directly. Unconfirmed authentication increases spam folder risk.

**CAN-SPAM / unsubscribe:**
HTML is truncated; footer unsubscribe link and physical mailing address could not be confirmed from the provided source. These must be present. The campaign ID (`MKG_US_NONPUR180_U_ARCH_NONPURCH_EN_04032026`) is embedded in pixel parameters — adequate for internal tracking but does not substitute for footer compliance elements.

---

### 6. Email-to-Site Continuity

All 26 CTAs pass through `click.emails.skechers.com` SFMC redirects. The campaign segment code `MKG_US_NONPUR180_U_ARCH_NONPURCH_EN_04032026` is present in open-tracking pixels, establishing campaign identity at the send level. However, because the QA probe skipped all redirect URLs, it is unconfirmed whether UTM parameters are appended to final landing page URLs on click-through. This should be spot-checked by resolving one or two redirects manually to verify `utm_source`, `utm_medium`, `utm_campaign` are present on the Skechers.com destination.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | All `image.emails.skechers.com` assets use `http://` | Update CDN or template to serve all assets over `https://` |
| **High** | Preheader text describes a different offer than the subject | Update preheader to match this campaign before any future send |
| **High** | Return Path pixel missing protocol | Fix: `<img src="https://pixel.app.returnpath.net/pixel.gif?r=...">` |
| **Medium** | ink1000.com open pixel uses `http://` | Switch to `https://` or confirm ink1000 supports HTTPS |
| **Medium** | 3 content images missing `alt` text | Add descriptive alt text for 49468f73, 00100b23, fc08601a assets |
| **Medium** | SPF/DKIM status unconfirmed | Verify SFMC DKIM record published for `emails.skechers.com`; confirm DMARC policy |
| **Low** | `-webkit-text-size-adjust: none` on `*` selector | Scope to specific elements or use `100%` instead of `none` |
| **Low** | UTM pass-through unverified | Manually resolve one SFMC redirect and confirm UTM params on landing URL |
| **Low** | Krux `_subid` pixel passes raw subscriber ID | Confirm this is acceptable under current privacy policy / consent framework |
## Recent history

- [[2026-04-03-did-you-forget-something]] — 5/10 (2026-04-03)
- [[2026-04-11-test-pro-us-na-u-bundle-full-en-04042026this-is-a-get-two-kind-of-sale]] — 5/10 (2026-04-02)
- [[2026-04-11-test-pro-us-retpurl24-u-bundle-retail-en-04042026your-chance-to-stock-up-is-comi]] — 5/10 (2026-04-02)

