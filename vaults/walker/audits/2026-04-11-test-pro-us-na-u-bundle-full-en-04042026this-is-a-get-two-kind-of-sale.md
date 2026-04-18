---
slug: 2026-04-11-test-pro-us-na-u-bundle-full-en-04042026this-is-a-get-two-kind-of-sale
type: email
date: 2026-04-02
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NA_U_BUNDLE_FULL_EN_04042026This is a Get Two Kind of Sale"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_NA_U_BUNDLE_FULL_EN_04042026This is a Get Two Kind of Sale
**Score:** 5/10 · **Type:** Email audit · **2026-04-02**
## Executive summary

- Clear enough to drive clicks, but the offer does most of the heavy lifting. The email itself adds little beyond routing. No urgency, no featured product, no personalization.

## What's working

- **Hero is legible and direct.** "Buy One, Get One 50% Off" reads instantly. The mint green background differentiates it from a white-heavy inbox.
- **Dual hero CTAs are smart.** "Shop Now" and "Find a Store" serve both online and foot-traffic intent — a good pairing for a brand with heavy retail presence.
- **Category grid covers the full household.** Women / Men / Girls / Boys tiles make it easy to self-select without hunting.
- **Text nav strip ("Shop Additional Styles")** catches anyone not drawn by the imagery — useful fallback for image-off rendering.
- **Utility row is complete.** App download, curbside pickup, buy now/pay later, and store finder are all present and logically grouped.

## What's weak

- **Subject line carries a "[Test]:" prefix.** This is a live defect — the email would land in real inboxes looking like an internal test deployment.
- **Hero small print is nearly illegible.** "Discount applied at cart" (or equivalent) is present but too small and low-contrast to read at inbox zoom levels. Offer conditions need to be scannable.
- **Category tiles are flat.** Each tile is a shoe photo + category name + "Shop Now." There's no product name, price, or "starting at" anchor. Nothing to create desire before the click.
- **No urgency signal.** There's no sale end date, countdown framing, or scarcity cue anywhere in the visible email. For a promotional send, this is a missed conversion lever.
- **"Spring Sale" framing does no work.** The headline is the offer. "Spring Sale" as the brand theme is generic — nothing seasonal, colorful, or editorial in the imagery reinforces it.
- **No featured product or bestseller call-out.** The email treats all categories equally when a hero product recommendation would create a stronger entry point.

## Recommendations

- 1. **Strip the "[Test]:" prefix before any live send.** Non-negotiable quality gate.
- 2. **Add a sale end date to the hero.** Even "This Weekend Only" or "Ends Sunday" meaningfully improves urgency.
- 3. **Increase offer condition font size.** The cart-applied discount qualifier needs to be readable — unclear terms erode trust and spike customer service contacts.
- 4. **Anchor at least one category tile to a price point.** "Women's Styles from $45" or "Kids' from $35" gives shoppers a reason to click before they reach the site.
- 5. **Consider a featured product hero.** A top-selling SKU with a name and price above the category grid would personalize the email and create aspiration. The grid then becomes a secondary browse layer.
- 6. **Add a sale-end urgency line** in the text nav or above the footer — one line of copy, high ROI.
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | ReturnPath pixel missing protocol | Add `https://` to `src` attribute |
- | P0 | Subject line campaign code concatenation | Fix template variable/separator in SFMC subject line field |
- | P1 | All `image.emails.skechers.com` URLs using HTTP | Change all `src` values to `https://` — same CDN, just protocol upgrade |
- | P1 | ink1000.com pixel using HTTP | Change to HTTPS; confirm ink1000 supports it or replace pixel |
- | P1 | Missing alt text on 4 images | Add descriptive alt to content images; `alt=""` on tracking pixels |
- | P2 | `[Test]:` prefix in subject | Confirm this did not deploy to live list; audit send job configuration |
- | P2 | `maximum-scale=1` in viewport | Remove or raise to `maximum-scale=5` for accessibility compliance |
- | P2 | `-webkit-text-size-adjust: none` | Change to `100%` |
- | P2 | `<meta charset>` missing `http-equiv` | Add `http-equiv="Content-Type"` attribute |
- | P3 | SPF/DKIM authentication status | Confirm authentication headers via SFMC send logs or inbox placement tool |
- | P3 | Krxd subscriber ID third-party pass | Verify privacy policy disclosure covers DMP data sharing |

## Full review
## 2. Business Impact Score: **5 / 10**

Clear enough to drive clicks, but the offer does most of the heavy lifting. The email itself adds little beyond routing. No urgency, no featured product, no personalization.

---

## 3. What's Working

- **Hero is legible and direct.** "Buy One, Get One 50% Off" reads instantly. The mint green background differentiates it from a white-heavy inbox.
- **Dual hero CTAs are smart.** "Shop Now" and "Find a Store" serve both online and foot-traffic intent — a good pairing for a brand with heavy retail presence.
- **Category grid covers the full household.** Women / Men / Girls / Boys tiles make it easy to self-select without hunting.
- **Text nav strip ("Shop Additional Styles")** catches anyone not drawn by the imagery — useful fallback for image-off rendering.
- **Utility row is complete.** App download, curbside pickup, buy now/pay later, and store finder are all present and logically grouped.

---

## 4. What's Weak

- **Subject line carries a "[Test]:" prefix.** This is a live defect — the email would land in real inboxes looking like an internal test deployment.
- **Hero small print is nearly illegible.** "Discount applied at cart" (or equivalent) is present but too small and low-contrast to read at inbox zoom levels. Offer conditions need to be scannable.
- **Category tiles are flat.** Each tile is a shoe photo + category name + "Shop Now." There's no product name, price, or "starting at" anchor. Nothing to create desire before the click.
- **No urgency signal.** There's no sale end date, countdown framing, or scarcity cue anywhere in the visible email. For a promotional send, this is a missed conversion lever.
- **"Spring Sale" framing does no work.** The headline is the offer. "Spring Sale" as the brand theme is generic — nothing seasonal, colorful, or editorial in the imagery reinforces it.
- **No featured product or bestseller call-out.** The email treats all categories equally when a hero product recommendation would create a stronger entry point.

---

## 5. Recommendations

1. **Strip the "[Test]:" prefix before any live send.** Non-negotiable quality gate.
2. **Add a sale end date to the hero.** Even "This Weekend Only" or "Ends Sunday" meaningfully improves urgency.
3. **Increase offer condition font size.** The cart-applied discount qualifier needs to be readable — unclear terms erode trust and spike customer service contacts.
4. **Anchor at least one category tile to a price point.** "Women's Styles from $45" or "Kids' from $35" gives shoppers a reason to click before they reach the site.
5. **Consider a featured product hero.** A top-selling SKU with a name and price above the category grid would personalize the email and create aspiration. The grid then becomes a secondary browse layer.
6. **Add a sale-end urgency line** in the text nav or above the footer — one line of copy, high ROI.

---

## 6. Bottom Line

This email will convert because the BOGO offer is strong and the structure is uncluttered. But it's executing at the minimum viable level — a price-driven mailer with no storytelling, no urgency, and no personalization. It needs a sale deadline and larger offer terms before any live deployment. The "[Test]:" subject line is a hard stop.

---

## 7. Evidence

**Overall purpose:** Drive Spring Sale BOGO 50% Off transactions across all major category segments (Women, Men, Girls, Boys).

**Hero / primary value proposition:** Mint green banner, "SPRING SALE / BUY ONE, GET ONE / 50% OFF," with "Shop Now" and "Find a Store" CTAs. Clean and prominent. Fine print at the bottom of the hero is too small to read at this render size.

**Membership / benefits section:** Not present. No loyalty, Elite/Pro member benefit callout, or rewards nudge visible.

**Product discoverability / recommendation modules:** Four equal-weight category tiles (Women, Men, Girls, Boys) each with a single shoe image, category label, and "Shop Now" CTA. Below that, a text-only link strip adds Clothing, New Arrivals, and Sale as additional entry points.

**Utility / secondary modules:** Three utility items grouped clearly — (1) App download + Curbside Pickup icons, (2) Shop Now / Pay Later, (3) Find a Store. Follow Us social icons appear immediately above the legal footer.

**Bugs / friction / clarity issues:**
- "[Test]:" is visible in the subject line — confirms this is a pre-production send not ready for live deployment.
- Hero fine print is rendered at a size that is effectively illegible — offer terms cannot be read without zooming in significantly.
- No other broken images, overlapping text, or empty fields are visible in the render.

---

## Technical Audit

## Technical Audit — SKECHERS PRO_US_NA_U_BUNDLE_FULL_EN_04042026

---

### 1. Technical Summary

The email has a pervasive HTTP (non-HTTPS) image serving problem affecting the majority of content images, plus a broken ReturnPath engagement pixel caused by a missing URL protocol. The subject line also contains a raw campaign code concatenated without a separator, suggesting a template/build error.

---

### 2. Link & Tracking Issues

**ReturnPath pixel — broken URL (missing protocol)**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `http://` or `https://` prefix. Email clients will resolve this as a relative path, causing the pixel to silently fail. Engagement data sent to ReturnPath/Validity will be lost for this send.

**ink1000.com open pixel — HTTP**
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=9012945763&mi_ecmp=PRO_US_NA_U_BUNDLE_FULL_EN_04042026"
```
Plain HTTP. Will be blocked in Gmail, Apple Mail, and any client enforcing HTTPS-only image loading. Also exposes subscriber ID (`mi_u=9012945763`) over an unencrypted connection.

**26 click-tracked links — unverifiable**
All destination URLs are JWT-encoded behind `click.emails.skechers.com`. UTM parameters and landing page targets cannot be confirmed without resolving redirects (see Section 6).

---

### 3. Rendering & Accessibility

**HTTP image sources — widespread (15 affected assets)**
All content images served from `http://image.emails.skechers.com`. Clients that enforce HTTPS (Gmail, Outlook.com, Apple Mail) will either block or proxy these. Affected assets include the Skechers logo, all product images, social icons, app store badges, and the AfterPay badge. Example:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png  (no alt)
```
`image.emails.skechers.com` almost certainly supports HTTPS — this is likely a template configuration issue.

**Missing alt text — 4 images**
- `o.gif` (ink1000 tracking pixel)
- `49468f73...png`
- `00100b23...png`
- `fc08601a...png`

No alt text means these images render as broken icons in image-blocked clients with no fallback text. The tracking pixel should have `alt=""` explicitly; content images need descriptive alt.

**`<meta charset>` missing `http-equiv` attribute**
```html
<meta content="text/html; charset=utf-8" />
```
Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Without `http-equiv`, some legacy clients (Outlook 2007–2016) may not correctly apply the charset declaration.

**`maximum-scale=1` in viewport meta**
Prevents pinch-to-zoom on mobile. This is an accessibility failure (WCAG 1.4.4). Remove the `maximum-scale` constraint.

**`-webkit-text-size-adjust: none`**
Disables user font-size adjustment on iOS/Android. Prefer `-webkit-text-size-adjust: 100%` to preserve layout while allowing user accessibility overrides.

---

### 4. Personalization & Merge Tokens

No unfired merge tokens (`%%...%%` or `{{...}}`) are visible in the HTML source provided.

**Subject line build error**
```
[Test]: PRO_US_NA_U_BUNDLE_FULL_EN_04042026This is a Get Two Kind of Sale
```
The campaign ID is directly concatenated onto the subject copy with no separator — this is a template assembly error, not a personalization token. Additionally, the `[Test]:` prefix indicates this was sent as a proof/test send. If this reached a live list, both the prefix and the raw campaign code were exposed to recipients.

---

### 5. Compliance

**SPF/DKIM authentication — unverified**
QA finding: `Authentication-Results header not found`. Sent via `no-reply@emails.skechers.com` through what appears to be SFMC infrastructure, but relay authentication cannot be confirmed from available data. DMARC alignment is unverifiable.

**Unsubscribe / CAN-SPAM**
HTML is truncated; a full assessment requires the footer. Based on the truncated source, no List-Unsubscribe header evidence is available at review time. Must confirm:
- Physical mailing address present in footer
- One-click unsubscribe link functional
- `List-Unsubscribe` and `List-Unsubscribe-Post` headers present at the SMTP level

**Krxd/Salesforce DMP pixel — subscriber ID exposure**
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=7187828
```
`partner_uid=7187828` appears to be a raw subscriber ID passed to a third-party data co-op (Lotame/Salesforce DMP). Depending on jurisdiction, this may require disclosure in the privacy policy as a data-sharing practice.

---

### 6. Email-to-Site Continuity

All 26 CTA links are wrapped in `click.emails.skechers.com` with JWT-encoded destinations — UTM parameters cannot be read directly from the source. No plaintext destination URLs are available to verify:
- UTM `source`, `medium`, `campaign` values match the campaign ID
- Landing pages are live and returning 200s
- No broken or test-environment destination URLs

**Recommendation:** Probe a sample of decoded destinations from the SFMC send logs to confirm UTM parameter propagation before reporting on this section.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | ReturnPath pixel missing protocol | Add `https://` to `src` attribute |
| P0 | Subject line campaign code concatenation | Fix template variable/separator in SFMC subject line field |
| P1 | All `image.emails.skechers.com` URLs using HTTP | Change all `src` values to `https://` — same CDN, just protocol upgrade |
| P1 | ink1000.com pixel using HTTP | Change to HTTPS; confirm ink1000 supports it or replace pixel |
| P1 | Missing alt text on 4 images | Add descriptive alt to content images; `alt=""` on tracking pixels |
| P2 | `[Test]:` prefix in subject | Confirm this did not deploy to live list; audit send job configuration |
| P2 | `maximum-scale=1` in viewport | Remove or raise to `maximum-scale=5` for accessibility compliance |
| P2 | `-webkit-text-size-adjust: none` | Change to `100%` |
| P2 | `<meta charset>` missing `http-equiv` | Add `http-equiv="Content-Type"` attribute |
| P3 | SPF/DKIM authentication status | Confirm authentication headers via SFMC send logs or inbox placement tool |
| P3 | Krxd subscriber ID third-party pass | Verify privacy policy disclosure covers DMP data sharing |
## Recent history

- [[2026-04-11-test-pro-us-retpurl24-u-bundle-retail-en-04042026your-chance-to-stock-up-is-comi]] — 5/10 (2026-04-02)
- [[2026-04-02-test-pro-us-ecmpurl24-u-bundle-ecom-en-04042026this-is-a-get-two-kind-of-sale]] — 6/10 (2026-04-02)
- [[2026-04-02-bold-brave-new]] — 5/10 (2026-04-02)

