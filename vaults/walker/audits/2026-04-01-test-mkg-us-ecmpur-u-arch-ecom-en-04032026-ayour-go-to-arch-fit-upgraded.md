---
slug: 2026-04-01-test-mkg-us-ecmpur-u-arch-ecom-en-04032026-ayour-go-to-arch-fit-upgraded
type: email
date: 2026-04-01
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_ECMPUR_U_ARCH_ECOM_EN_04032026_AYour Go-To Arch Fit, Upgraded"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_ECMPUR_U_ARCH_ECOM_EN_04032026_AYour Go-To Arch Fit, Upgraded
**Score:** 5/10 · **Type:** Email audit · **2026-04-01**
## Executive summary

- A straightforward product-browse email organized around Arch Fit technology, segmented into three footwear categories. The hero lands the core message clearly, but execution is thin throughout — no prices, no differentiated value proposition beyond category labels, and no urgency mechanism to convert browsers into buyers. It functions more as a catalog page than a campaign.
- Functional but under-leveraged. The category structure aids navigation, but lack of pricing, weak CTAs, and a generic subject line leave significant conversion on the table.

## What's working

- **Clear category architecture.** Three distinct modules — Athletic Sneakers, Sandals, Casual Sneakers — create an easy scan path. A reader knows immediately what's available without reading body copy.
- **Hero is direct.** "Arch Fit Style Update" communicates a product refresh crisply. The 50% OFF banner in the header immediately anchors value.
- **Visual variety.** Each category uses a distinct hero product shot, keeping visual fatigue low for a multi-category email.

## What's weak

- **No prices anywhere.** The 50% OFF callout in the header creates a value expectation that is never resolved — no product has a price, sale price, or "was/now" shown. This disconnect undercuts the promotional framing entirely.
- **CTA copy is generic.** Every module appears to use a variation of "Shop Now" or equivalent. There's no category-specific urgency or differentiation.
- **Hero body copy is unreadable.** The text below the hero headline is too small to read at render size — this appears as a block of illegible fine print rather than a supporting value statement.
- **Membership/benefits section is minimal.** The footer loyalty block (visible near the bottom) is dense and low-contrast — easy to miss, unlikely to drive engagement.
- **Subject line is polluted by a test prefix.** `[Test]:` and the internal campaign code `MKG_US_ECMPUR_U_ARCH_ECOM_EN_04032026_A` are visible in the subject, indicating this email should not have reached any external audience. The preview text also exposes raw URL strings — a significant deliverability and brand credibility issue if sent live.

## Recommendations

- 1. **Strip the test prefix and expose human-readable preview text** before any live send. The current preview text is raw URLs, which will hurt open rates and look broken in every inbox client.
- 2. **Anchor the 50% OFF claim to specific products.** Show was/now pricing on at least the lead product in each category module.
- 3. **Differentiate CTAs by category** — "Shop Sandals," "Shop Athletic" — to improve click attribution and reduce generic friction.
- 4. **Increase hero subhead font size** so the supporting copy is actually readable.
- 5. **Compress the footer loyalty block** or elevate the most compelling benefit (e.g., reward points, free shipping) as a standalone visual element, not a footnote.
- | Priority | Action |
- |----------|--------|
- | **BLOCK** | Remove `[Test]:` prefix from subject line before any production send |
- | **BLOCK** | Fix variant token delimiter — `_A` must not concatenate directly into subject copy |
- | **HIGH** | Migrate all `image.emails.skechers.com` assets to HTTPS |
- | **HIGH** | Fix Return Path pixel — add `https://` scheme to `pixel.app.returnpath.net/pixel.gif` |
- | **HIGH** | Confirm SPF/DKIM records are valid for `emails.skechers.com` sending domain |
- | **MEDIUM** | Add descriptive `alt` text to the 3 non-tracking images missing it |
- | **MEDIUM** | Change `maximum-scale=1` → remove or set to `5` in viewport meta |
- | **MEDIUM** | Change `-webkit-text-size-adjust: none` → `100%` |
- | **MEDIUM** | Verify Krux `partner_uid` and ink1000 `mi_u` are dynamic merge fields, not static test values |
- | **LOW** | Run redirect-chain resolution on all 26 click links to validate UTM params and landing pages |

## Full review
## Skechers Arch Fit Style Update — Email Review

---

### 1. Executive Summary

A straightforward product-browse email organized around Arch Fit technology, segmented into three footwear categories. The hero lands the core message clearly, but execution is thin throughout — no prices, no differentiated value proposition beyond category labels, and no urgency mechanism to convert browsers into buyers. It functions more as a catalog page than a campaign.

---

### 2. Business Impact Score: 5/10

Functional but under-leveraged. The category structure aids navigation, but lack of pricing, weak CTAs, and a generic subject line leave significant conversion on the table.

---

### 3. What's Working

- **Clear category architecture.** Three distinct modules — Athletic Sneakers, Sandals, Casual Sneakers — create an easy scan path. A reader knows immediately what's available without reading body copy.
- **Hero is direct.** "Arch Fit Style Update" communicates a product refresh crisply. The 50% OFF banner in the header immediately anchors value.
- **Visual variety.** Each category uses a distinct hero product shot, keeping visual fatigue low for a multi-category email.

---

### 4. What's Weak

- **No prices anywhere.** The 50% OFF callout in the header creates a value expectation that is never resolved — no product has a price, sale price, or "was/now" shown. This disconnect undercuts the promotional framing entirely.
- **CTA copy is generic.** Every module appears to use a variation of "Shop Now" or equivalent. There's no category-specific urgency or differentiation.
- **Hero body copy is unreadable.** The text below the hero headline is too small to read at render size — this appears as a block of illegible fine print rather than a supporting value statement.
- **Membership/benefits section is minimal.** The footer loyalty block (visible near the bottom) is dense and low-contrast — easy to miss, unlikely to drive engagement.
- **Subject line is polluted by a test prefix.** `[Test]:` and the internal campaign code `MKG_US_ECMPUR_U_ARCH_ECOM_EN_04032026_A` are visible in the subject, indicating this email should not have reached any external audience. The preview text also exposes raw URL strings — a significant deliverability and brand credibility issue if sent live.

---

### 5. Recommendations

1. **Strip the test prefix and expose human-readable preview text** before any live send. The current preview text is raw URLs, which will hurt open rates and look broken in every inbox client.
2. **Anchor the 50% OFF claim to specific products.** Show was/now pricing on at least the lead product in each category module.
3. **Differentiate CTAs by category** — "Shop Sandals," "Shop Athletic" — to improve click attribution and reduce generic friction.
4. **Increase hero subhead font size** so the supporting copy is actually readable.
5. **Compress the footer loyalty block** or elevate the most compelling benefit (e.g., reward points, free shipping) as a standalone visual element, not a footnote.

---

### 6. Bottom Line

The structural bones are sound — a clear hero, logical category flow, recognizable brand. But this email coasts on category navigation rather than selling. With no visible pricing and diluted CTAs, it's a passive browse experience. A few targeted fixes (pricing, preview text, CTA specificity) would meaningfully lift conversion without requiring a redesign.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Product refresh announcement for Arch Fit line across three categories |
| **Hero / primary value prop** | "Arch Fit Style Update" with 50% OFF header banner — value message present but not tied to products |
| **Membership / benefits** | Footer loyalty block visible but low-contrast and easy to overlook |
| **Product discoverability** | Three category modules (Athletic Sneakers, Sandals, Casual Sneakers) with single hero image each — no product grid, no pricing |
| **Utility / secondary modules** | Footer contains app download and social follow prompts, standard footer navigation |
| **Bugs / friction** | Subject line contains `[Test]:` tag and internal campaign code; preview text renders raw URLs instead of human copy — critical issue if deployed live |

---

## Technical Audit

## Technical Audit — Skechers `MKG_US_ECMPUR_U_ARCH_ECOM_EN_04032026_A`

---

### 1. Technical Summary

This email contains a subject-line defect indicating it is either a test send or has a campaign-ID concatenation bug, and carries 15+ images served over HTTP that will be blocked in security-conscious clients. SPF/DKIM authentication status is unverifiable from the available relay headers.

---

### 2. Link & Tracking Issues

**[CRITICAL] Subject line exposes test flag and broken variant token**
The `From`/`Subject` as received:
```
Subject: [Test]: MKG_US_ECMPUR_U_ARCH_ECOM_EN_04032026_AYour Go-To Arch Fit, Upgraded
```
- `[Test]:` prefix is present — email should not reach production subscribers in this state.
- The variant suffix `_A` from the campaign ID runs directly into the subject copy (`_AYour Go-To Arch Fit`). A delimiter or whitespace is missing between the dynamic campaign token and the static subject string.

**[HIGH] Return Path pixel missing URL scheme**
```html
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"
```
No `https://` (or `http://`) prefix. Browsers/clients will interpret this as a relative path and the pixel will 404. Inbox monitoring data will be lost for this send.

**[WARN] 26 click-tracking links unverifiable**
All CTA links route through `click.emails.skechers.com` with AES-encrypted query strings. Destination URLs and UTM parameters cannot be confirmed without live redirect resolution. QA probing was skipped for all 26.

**[WARN] Third-party HTTP tracking pixel (ink1000.com)**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8091927189&mi_ecmp=...
```
Non-HTTPS, will be blocked by Gmail, Outlook 365, and Apple Mail in default configurations.

---

### 3. Rendering & Accessibility

**[HIGH] Pervasive HTTP image sources — 15 images**
All production images are served from `http://image.emails.skechers.com/lib/...`. Mixed-content policies in Gmail (since 2019), Outlook.com, and iOS Mail will either block or proxy these, degrading load performance and potentially breaking image display entirely. Affected assets include the logo, footer icons, social icons, and app store badges.

Examples:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-782c-4fb6-967b-d1dfa5ecbfdc.png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/d76a5487-158e-4781-82a4-b65b04c051e4.png  (Twitter/X)
```
(+ 11 more — full list in QA findings above)

**[WARN] 4 images missing `alt` text**
- `o.gif` (ink1000 pixel) — tracking pixel, `alt=""` is acceptable but currently absent
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unknown content image, no alt
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — unknown content image, no alt
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — unknown content image, no alt

Non-decorative images without `alt` text fail WCAG 1.1.1 and render blank in image-blocked clients.

**[WARN] Viewport blocks user zoom**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
`maximum-scale=1` prevents pinch-to-zoom on mobile. This fails WCAG 1.4.4 (Resize Text).

**[WARN] iOS font scaling disabled**
```css
* { -webkit-text-size-adjust: none; }
```
`none` (vs. `100%`) suppresses automatic font-size adjustment on iOS. Use `100%` to preserve scaling while preventing unwanted reflow.

---

### 4. Personalization & Merge Tokens

**[WARN] Krux DMP beacon contains what appear to be hardcoded subscriber identifiers**
```
partner_uid=d115e72ce7a11a583b397db8a352f6d1eace6c3d2077fa305fff4bbe0dee8b2d  (SHA256)
partner_uid=102541952  (raw subscriber ID)
```
If these are static test values rather than per-recipient merge tokens, the DMP will receive no actionable audience data from this send. Verify these are rendered dynamically from the ESP (SFMC) subscriber data extension.

**[WARN] ink1000 pixel `mi_u` parameter**
```
mi_u=8091927189
```
Same concern — confirm this resolves to a dynamic subscriber identifier at send time, not a static seed value.

No unrendered `%%token%%` or `{{token}}` syntax visible in the provided HTML excerpt.

---

### 5. Compliance

**[HIGH] SPF/DKIM authentication status unknown**
Per QA: `Authentication-Results header not found`. The email was relayed via AgentMail and no `Authentication-Results` header was captured. Cannot confirm SPF pass/DKIM signature for `emails.skechers.com`. A failed or missing DKIM signature increases spam folder placement probability.

**[INFO] CAN-SPAM / unsubscribe** — HTML was truncated; physical mailing address and unsubscribe link presence cannot be confirmed from the available source. Verify footer contains both before deployment.

---

### 6. Email-to-Site Continuity

All 26 CTAs are wrapped in `click.emails.skechers.com` redirects with encrypted payloads — destination URLs are opaque without redirect resolution. The following cannot be confirmed from static analysis:
- UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) are present on landing URLs
- Landing pages match the promoted product (Arch Fit)
- No link resolves to a 404 or non-matching category page

**Recommendation:** Run a redirect-following link check (e.g., Litmus Link Check or custom curl chain) on all 26 links before deployment to validate UTM tagging and destination alignment.

---

### 7. Recommendations

| Priority | Action |
|----------|--------|
| **BLOCK** | Remove `[Test]:` prefix from subject line before any production send |
| **BLOCK** | Fix variant token delimiter — `_A` must not concatenate directly into subject copy |
| **HIGH** | Migrate all `image.emails.skechers.com` assets to HTTPS |
| **HIGH** | Fix Return Path pixel — add `https://` scheme to `pixel.app.returnpath.net/pixel.gif` |
| **HIGH** | Confirm SPF/DKIM records are valid for `emails.skechers.com` sending domain |
| **MEDIUM** | Add descriptive `alt` text to the 3 non-tracking images missing it |
| **MEDIUM** | Change `maximum-scale=1` → remove or set to `5` in viewport meta |
| **MEDIUM** | Change `-webkit-text-size-adjust: none` → `100%` |
| **MEDIUM** | Verify Krux `partner_uid` and ink1000 `mi_u` are dynamic merge fields, not static test values |
| **LOW** | Run redirect-chain resolution on all 26 click links to validate UTM params and landing pages |
## Recent history

- [[2026-04-01-test-ret-us-na-u-store1569-zip-en-04022026sale-ending-soon-celebrate-our-birthda]] — 6.5/10 (2026-04-01)
- [[2026-04-01-your-skechers-plus-monthly-summary-is-here]] — 5/10 (2026-04-01)
- [[2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-bmake-walking-a-breeze-with-go-walk]] — 5/10 (2026-04-01)

