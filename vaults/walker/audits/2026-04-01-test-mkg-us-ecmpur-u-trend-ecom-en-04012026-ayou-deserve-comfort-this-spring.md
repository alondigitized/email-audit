---
slug: 2026-04-01-test-mkg-us-ecmpur-u-trend-ecom-en-04012026-ayou-deserve-comfort-this-spring
type: email
date: 2026-03-31
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_ECMPUR_U_TREND_ECOM_EN_04012026_AYou Deserve Comfort This Spring"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_ECMPUR_U_TREND_ECOM_EN_04012026_AYou Deserve Comfort This Spring
**Score:** 6/10 · **Type:** Email audit · **2026-03-31**
## Executive summary

- A clean, trend-forward email with a strong "Trend Report" editorial concept. The hero anchors the message well, and the category organization (Hands Free Slip-In, Street Style, Color) creates a logical browse path. However, the email is severely truncated in the render — most modules are cut off, CTAs are cropped or missing, and product details are largely unreadable at this scale. The Best Sellers module at the bottom is nearly illegible. As-delivered, this email is doing less work than it should.
- **Business Impact Score: 6/10**

## What's working

- **"Trend Report" concept** is editorially distinct — stronger than a generic seasonal push, and the italic serif treatment gives it a premium feel
- **50% OFF** headline offer is prominent in the hero and immediately visible
- **Category sequencing** (Slip-In → Street Style → Color → Best Sellers) tells a coherent product story and supports multi-category browsing
- **"SHOP NOW" CTAs** are present and consistently styled across modules
- **Color palette** is warm and spring-appropriate — pastels and neutrals throughout

## What's weak

- **Email is heavily cropped** — the render cuts off mid-module repeatedly; footwear in the Street Style and Color sections is partially or fully clipped
- **Best Sellers module** is barely legible — product names and price information are unreadably small
- **Hero offer copy is vague** — "Up to 50% OFF" with no qualifying detail on which styles or categories are discounted creates credibility friction
- **Subject line conflict** — the subject promises "You Deserve Comfort This Spring" but the email leads with "Trend Report," creating a mismatch between inbox expectation and in-email experience
- **Preview text is broken** — the visible preview text shows raw URL strings instead of readable copy, which would hurt open rates
- **Module labels are thin** — "STREET STYLE" and "COLOR" feel more like section dividers than value propositions; no benefit language
- **No price anchoring visible** anywhere except the hero discount callout

## Recommendations

- 1. **Fix the preview text immediately** — raw URLs in the preview are a deliverability and brand impression issue
- 2. **Align subject line to hero** — either change the subject to reflect the Trend Report editorial angle, or lead the email body with comfort messaging
- 3. **Add price or social proof to product modules** — even "$59.99" or "Bestseller" badges would drive click intent on the grid sections
- 4. **Expand Best Sellers legibility** — increase product card size or reduce the number of items shown per row; current treatment is too small to drive action
- 5. **Qualify the 50% OFF claim** — "Up to 50% OFF Select Styles" with a category or style count would reduce hesitation
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | `[Test]:` in subject line | Remove before production send |
- | **P0** | Return Path pixel — missing protocol | Change `src="pixel.app.returnpath.net/…"` to `src="https://pixel.app.returnpath.net/…"` |
- | **P1** | 12 `image.emails.skechers.com` images over HTTP | Update all `http://image.emails.skechers.com` srcs to `https://` |
- | **P1** | `partner_uid=102541952` hardcoded | Confirm this resolves dynamically; if static, replace with correct AMPscript/SSJS token |
- | **P1** | Malformed `<meta>` charset and IE tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` respectively |
- | **P2** | 4 images missing `alt` text | Add descriptive `alt` to product/content images; `alt=""` is acceptable for purely decorative images |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve iOS accessibility scaling |
- | **P2** | DKIM/SPF verification | Confirm authentication headers pass on a test seed send through the production relay |
- | **P3** | UTM parameter verification | Decode one primary CTA redirect URL and confirm `utm_campaign` alignment |

## Full review
## Executive Summary

A clean, trend-forward email with a strong "Trend Report" editorial concept. The hero anchors the message well, and the category organization (Hands Free Slip-In, Street Style, Color) creates a logical browse path. However, the email is severely truncated in the render — most modules are cut off, CTAs are cropped or missing, and product details are largely unreadable at this scale. The Best Sellers module at the bottom is nearly illegible. As-delivered, this email is doing less work than it should.

**Business Impact Score: 6/10**

---

## What's Working

- **"Trend Report" concept** is editorially distinct — stronger than a generic seasonal push, and the italic serif treatment gives it a premium feel
- **50% OFF** headline offer is prominent in the hero and immediately visible
- **Category sequencing** (Slip-In → Street Style → Color → Best Sellers) tells a coherent product story and supports multi-category browsing
- **"SHOP NOW" CTAs** are present and consistently styled across modules
- **Color palette** is warm and spring-appropriate — pastels and neutrals throughout

---

## What's Weak

- **Email is heavily cropped** — the render cuts off mid-module repeatedly; footwear in the Street Style and Color sections is partially or fully clipped
- **Best Sellers module** is barely legible — product names and price information are unreadably small
- **Hero offer copy is vague** — "Up to 50% OFF" with no qualifying detail on which styles or categories are discounted creates credibility friction
- **Subject line conflict** — the subject promises "You Deserve Comfort This Spring" but the email leads with "Trend Report," creating a mismatch between inbox expectation and in-email experience
- **Preview text is broken** — the visible preview text shows raw URL strings instead of readable copy, which would hurt open rates
- **Module labels are thin** — "STREET STYLE" and "COLOR" feel more like section dividers than value propositions; no benefit language
- **No price anchoring visible** anywhere except the hero discount callout

---

## Recommendations

1. **Fix the preview text immediately** — raw URLs in the preview are a deliverability and brand impression issue
2. **Align subject line to hero** — either change the subject to reflect the Trend Report editorial angle, or lead the email body with comfort messaging
3. **Add price or social proof to product modules** — even "$59.99" or "Bestseller" badges would drive click intent on the grid sections
4. **Expand Best Sellers legibility** — increase product card size or reduce the number of items shown per row; current treatment is too small to drive action
5. **Qualify the 50% OFF claim** — "Up to 50% OFF Select Styles" with a category or style count would reduce hesitation

---

## Bottom Line

The editorial concept is sound and the product curation is logical, but execution has meaningful gaps — a broken preview text, a subject/body mismatch, and illegible product modules. The Trend Report framing has real potential; it just needs the details tightened to convert on it.

---

## Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Spring trend/clearance hybrid — editorial Trend Report framing over a 50% OFF promotional anchor |
| **Hero / primary value prop** | "Trend Report" headline with "Up to 50% OFF" offer badge; SHOP NOW CTA; spring lifestyle imagery. Strong visual entry point. |
| **Membership / benefits** | Not visible in the render |
| **Product modules** | Three category rows: Hands Free Slip-In (sandal/sneaker styles visible), Street Style (sneakers, partially cropped), Color (bright colorway styles, cropped). Best Sellers row at bottom with small product grid. |
| **Utility / secondary modules** | Footer present but text is too small to read in render |
| **Bugs / friction** | Preview text renders as raw URLs; Street Style and Color product rows are clipped; Best Sellers product names/prices are unreadably small |

---

## Technical Audit

## Technical Audit — Skechers `MKG_US_ECMPUR_U_TREND_ECOM_EN_04012026_A`

---

### 1. Technical Summary

This is a test-flagged promotional email built on Salesforce Marketing Cloud with Krux/Salesforce DMP audience pixels and a Return Path seed network pixel. Fourteen HTTP (non-HTTPS) image sources and four images missing `alt` text are the dominant technical issues; a malformed Return Path pixel URL and two hardcoded subscriber IDs in tracking beacons also require attention before production send.

---

### 2. Link & Tracking Issues

**Return Path pixel — broken relative URL**
The pixel has no protocol or hostname:
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" width="1" height="1" />
```
Without `https://` this resolves as a relative path and will 404 in every client. Inbox monitoring via Return Path will be blind for this send.

**Hardcoded subscriber/user IDs in tracking beacons**
Two pixels carry what appear to be static literal values instead of merge tokens:
- `http://www.ink1000.com/…o.gif?mi_u=8091927189&…` — `mi_u` value looks like a single subscriber ID
- `https://beacon.krxd.net/…?partner=LprH63a7_sfmc_100007688_subid&partner_uid=102541952` — `partner_uid` is a bare integer, not a dynamic token

If these are not resolved AMPscript/SSJS variables they will attribute all impressions to a single subscriber. The SHA-256 `partner_uid` in the first Krux beacon (`d115e72c…`) appears to be a properly hashed dynamic value; the second beacon's integer UID does not.

**26 click-tracking links unverifiable**
All destination URLs are wrapped by `click.emails.skechers.com`; the QA probe correctly skipped HTTP resolution. No broken destination links can be confirmed or ruled out from this audit.

---

### 3. Rendering & Accessibility

**14 HTTP image sources (non-HTTPS)**
All images served from `image.emails.skechers.com` use `http://`. Gmail, Apple Mail, and Outlook 2016+ block or proxy mixed-content images. Affected assets include the Skechers logo, App Store/Google Play badges, all social icons, AfterPay logo, and two unidentified product images. Full list from QA findings:

| Asset | URL |
|---|---|
| Skechers logo | `http://image.emails.skechers.com/…/dde00662….png` |
| (unnamed) | `http://image.emails.skechers.com/…/49468f73….png` |
| App Store badge | `http://image.emails.skechers.com/…/0ec56c9f….png` |
| Google Play badge | `http://image.emails.skechers.com/…/9bb508d0….png` |
| (unnamed) | `http://image.emails.skechers.com/…/00100b23….png` |
| AfterPay | `http://image.emails.skechers.com/…/07cb60b5….png` |
| (unnamed) | `http://image.emails.skechers.com/…/fc08601a….png` |
| Instagram | `http://image.emails.skechers.com/…/b782e0aa….png` |
| Twitter | `http://image.emails.skechers.com/…/d76a5487….png` |
| Facebook | `http://image.emails.skechers.com/…/a5c4cae0….png` |
| Pinterest | `http://image.emails.skechers.com/…/573ab181….png` |
| YouTube | `http://image.emails.skechers.com/…/8c5738fc….png` |
| Open tracker | `http://www.ink1000.com/…/o.gif` |

The `image.emails.skechers.com` CDN almost certainly supports HTTPS — these are likely template-level oversights.

**4 images missing `alt` text**
- `o.gif` (ink1000 tracker — alt="" acceptable here, but explicitly missing)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

Images rendered with images-off (common in corporate Outlook environments) will display no fallback text for these assets.

**Malformed `<meta>` tags**
Both meta tags in `<head>` are missing the required `http-equiv` attribute:
```html
<meta content="text/html; charset=utf-8" />           <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                             <!-- missing http-equiv="X-UA-Compatible" -->
```
These are non-functional as written. Charset declaration failure can cause encoding issues in older Outlook/Windows Mail clients.

**`-webkit-text-size-adjust: none`**
```css
* { -webkit-text-size-adjust: none; … }
```
Setting to `none` (rather than `100%`) disables iOS accessibility font scaling for users with Display Accessibility settings. Use `100%` instead.

---

### 4. Personalization & Merge Tokens

No unresolved literal merge token syntax (e.g. `%%variable%%` or `{{variable}}`) was detected in the visible HTML. However, as noted in §2, `mi_u=8091927189` and `partner_uid=102541952` should be verified as dynamic substitutions, not hardcoded values left over from template testing.

---

### 5. Compliance

**Subject line contains test prefix**
```
Subject: [Test]: MKG_US_ECMPUR_U_TREND_ECOM_EN_04012026_A…
```
This must be removed before production deployment. Sending with `[Test]:` in the subject to a live list violates normal deployment QA gates and may affect spam filter scoring.

**Authentication-Results header absent**
The AgentMail relay did not surface SPF or DKIM pass/fail status. DKIM signing from `emails.skechers.com` cannot be confirmed from this audit. Deliverability impact is unknown but should be verified against the authentication record for the sending domain before deployment.

**CAN-SPAM / unsubscribe**
An unsubscribe link and physical mailing address are standard Skechers footer elements and are present in the template structure based on the HTML pattern — however the HTML was truncated before the footer. Confirm both are present and functional in the full source.

---

### 6. Email-to-Site Continuity

All 26 clickable links route through `click.emails.skechers.com` redirect, which prevents direct inspection of UTM parameters or landing page URLs from the source alone. No naked destination URLs are present in the provided HTML to verify UTM consistency (`utm_source`, `utm_medium`, `utm_campaign` alignment with campaign ID `MKG_US_ECMPUR_U_TREND_ECOM_EN_04012026_A`).

Recommendation: decode at least one representative click URL (the primary CTA) prior to deployment and confirm `utm_campaign` matches the campaign code.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | `[Test]:` in subject line | Remove before production send |
| **P0** | Return Path pixel — missing protocol | Change `src="pixel.app.returnpath.net/…"` to `src="https://pixel.app.returnpath.net/…"` |
| **P1** | 12 `image.emails.skechers.com` images over HTTP | Update all `http://image.emails.skechers.com` srcs to `https://` |
| **P1** | `partner_uid=102541952` hardcoded | Confirm this resolves dynamically; if static, replace with correct AMPscript/SSJS token |
| **P1** | Malformed `<meta>` charset and IE tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` respectively |
| **P2** | 4 images missing `alt` text | Add descriptive `alt` to product/content images; `alt=""` is acceptable for purely decorative images |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve iOS accessibility scaling |
| **P2** | DKIM/SPF verification | Confirm authentication headers pass on a test seed send through the production relay |
| **P3** | UTM parameter verification | Decode one primary CTA redirect URL and confirm `utm_campaign` alignment |
## Recent history

- [[2026-04-01-test-mkg-us-nonpur-u-trend-nonpurch-en-04012026-btry-the-comfort-everyone-s-talk]] — 5/10 (2026-03-31)
- [[2026-03-31-test-mkg-us-nonpur-u-trend-nonpurch-en-04012026-atry-the-comfort-everyone-s-talk]] — 6/10 (2026-03-31)
- [[2026-03-31-test-mkg-us-na-u-trend-gender-en-04012026-v2you-deserve-comfort-this-spring]] — 6/10 (2026-03-31)

