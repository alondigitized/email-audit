---
slug: 2026-04-08-spring-into-comfort-like-you-ve-never-felt-before
type: email
date: 2026-04-08
persona: walker
score: "5.5/10"
sender: SKECHERS
subject: "🌱 Spring into comfort like you've never felt before!"
tags: [email, score-6, sender/skechers]
---
# 🌱 Spring into comfort like you've never felt before!
**Score:** 5.5/10 · **Type:** Email audit · **2026-04-08**
## Executive summary

- A catalog-style browse email targeting women shoppers with a spring seasonal hook. The structure is logical — banner offer, hero product, then category navigation — but execution is thin. The hero is visually strong, the category grid does its job, and the loyalty module at the footer adds retention value. What's missing is persuasive energy: no prices, no urgency beyond a vague "new," and the category labels are generic enough to feel like a nav bar rather than editorial content. This email prompts browsing, but doesn't compel buying.
- Functional but forgettable. It will generate some clicks from already-engaged customers but will underperform against shoppers who need more motivation to convert.

## What's working

- **Banner offer is prominent.** "20% Off" in a high-contrast banner at the top is the first thing you see — clear and unambiguous.
- **Hero product photo is clean and on-brand.** The white/light blue sneaker against a light background reads as fresh and seasonal. Five-star rating + "Comfy and Stylish" copy supports social proof.
- **Category grid is scannable.** Canvas, Slip-Ins, Sandals, Wide Fit — each with a product image and a CTA button. Low friction for category shoppers.
- **Loyalty footer.** The 50% off loyalty module at the bottom gives members a reason to act, and it's distinct enough to not get lost.

## What's weak

- **No pricing anywhere.** Not on the hero, not in the category tiles. Shoppers can't self-qualify before clicking.
- **Category headers are purely functional.** "Casual Sneakers," "Slip-Ins," "Sandals," "Wide Fit" — these read like a sitemap. No seasonal framing, no benefit language, nothing that makes you feel like spring is a reason to shop now.
- **Weak spring narrative.** The subject line promises a seasonal hook, but the email body doesn't deliver it. There's no lifestyle imagery, no editorial copy, nothing that evokes the season emotionally.
- **CTAs are undifferentiated.** Every section has a generic "Shop [Category]" button. There's no hierarchy — the hero CTA and the category CTAs read at the same visual weight.
- **Hero copy is thin.** "Comfy and Stylish" tells you nothing you couldn't infer from looking at a shoe. The five stars are doing more work than the words.
- **Wide Fit placement at the bottom.** Wide fit is a differentiator and a loyalty driver for that segment — burying it last, after three standard categories, misses an opportunity to signal inclusivity upfront.

## Recommendations

- 1. **Add a price anchor to the hero.** Even "Starting at $XX" or a sale price builds urgency and lets shoppers opt in or out faster.
- 2. **Rewrite category headers with seasonal or benefit language.** "Sandals built for warm days" beats "Sandals" every time.
- 3. **Create CTA hierarchy.** Make the hero CTA visually dominant (larger, filled button) and reduce category buttons to a secondary style.
- 4. **Lead with the offer across more of the email.** The 20% banner disappears after the first scroll. Reinforce it in the hero block.
- 5. **Surface a specific product recommendation.** A single "Most loved this spring" callout with name, price, and rating would convert better than five category tiles with no product detail.
- 6. **Move Wide Fit up or give it a callout.** It's a meaningful differentiator — treat it like one.
- | Priority | Issue | Action |
- |---|---|---|
- | High | All `image.emails.skechers.com` assets served over HTTP | Update SFMC content block image URLs to `https://`. Check if the CDN already supports HTTPS (likely yes — just a template authoring error). |
- | High | ink1000.com tracking pixel over HTTP | Switch to HTTPS endpoint or remove if redundant with SFMC open tracking. |
- | High | ReturnPath pixel missing URL scheme | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif?…`. |
- | Medium | 4 images missing alt text | Add descriptive `alt` for content images; use `alt=""` only for confirmed decorative images. |
- | Medium | `mi_u` / `partner_uid` appear hardcoded | Confirm whether these should be dynamic SFMC personalization tokens. If so, replace with correct AMPscript or SSJS lookups. |
- | Medium | Plain-text part is URL-dominated | Configure SFMC to generate a cleaned plain-text version or author one manually. |
- | Medium | Authentication headers unverified | Pull a raw `.eml` from a delivered sample and inspect `Authentication-Results` for SPF/DKIM/DMARC pass. |
- | Low | `maximum-scale=1` and `text-size-adjust: none` | Remove `maximum-scale=1`; change `-webkit-text-size-adjust` to `100%` or scope to specific elements. |

## Full review
## Skechers — "Spring into Comfort" Email Review

---

### 1. Executive Summary

A catalog-style browse email targeting women shoppers with a spring seasonal hook. The structure is logical — banner offer, hero product, then category navigation — but execution is thin. The hero is visually strong, the category grid does its job, and the loyalty module at the footer adds retention value. What's missing is persuasive energy: no prices, no urgency beyond a vague "new," and the category labels are generic enough to feel like a nav bar rather than editorial content. This email prompts browsing, but doesn't compel buying.

---

### 2. Business Impact Score: **5.5 / 10**

Functional but forgettable. It will generate some clicks from already-engaged customers but will underperform against shoppers who need more motivation to convert.

---

### 3. What's Working

- **Banner offer is prominent.** "20% Off" in a high-contrast banner at the top is the first thing you see — clear and unambiguous.
- **Hero product photo is clean and on-brand.** The white/light blue sneaker against a light background reads as fresh and seasonal. Five-star rating + "Comfy and Stylish" copy supports social proof.
- **Category grid is scannable.** Canvas, Slip-Ins, Sandals, Wide Fit — each with a product image and a CTA button. Low friction for category shoppers.
- **Loyalty footer.** The 50% off loyalty module at the bottom gives members a reason to act, and it's distinct enough to not get lost.

---

### 4. What's Weak

- **No pricing anywhere.** Not on the hero, not in the category tiles. Shoppers can't self-qualify before clicking.
- **Category headers are purely functional.** "Casual Sneakers," "Slip-Ins," "Sandals," "Wide Fit" — these read like a sitemap. No seasonal framing, no benefit language, nothing that makes you feel like spring is a reason to shop now.
- **Weak spring narrative.** The subject line promises a seasonal hook, but the email body doesn't deliver it. There's no lifestyle imagery, no editorial copy, nothing that evokes the season emotionally.
- **CTAs are undifferentiated.** Every section has a generic "Shop [Category]" button. There's no hierarchy — the hero CTA and the category CTAs read at the same visual weight.
- **Hero copy is thin.** "Comfy and Stylish" tells you nothing you couldn't infer from looking at a shoe. The five stars are doing more work than the words.
- **Wide Fit placement at the bottom.** Wide fit is a differentiator and a loyalty driver for that segment — burying it last, after three standard categories, misses an opportunity to signal inclusivity upfront.

---

### 5. Recommendations

1. **Add a price anchor to the hero.** Even "Starting at $XX" or a sale price builds urgency and lets shoppers opt in or out faster.
2. **Rewrite category headers with seasonal or benefit language.** "Sandals built for warm days" beats "Sandals" every time.
3. **Create CTA hierarchy.** Make the hero CTA visually dominant (larger, filled button) and reduce category buttons to a secondary style.
4. **Lead with the offer across more of the email.** The 20% banner disappears after the first scroll. Reinforce it in the hero block.
5. **Surface a specific product recommendation.** A single "Most loved this spring" callout with name, price, and rating would convert better than five category tiles with no product detail.
6. **Move Wide Fit up or give it a callout.** It's a meaningful differentiator — treat it like one.

---

### 6. Bottom Line

This email reads like an automated catalog push with a seasonal label slapped on top. The bones are fine, but there's no editorial point of view, no price context, and no real reason why spring is the moment to buy. It will get clicks from brand loyalists; it won't acquire or reactivate anyone on the fence.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Spring seasonal browse email; drive traffic to women's footwear categories |
| **Hero / primary value prop** | Clean white sneaker photo, 5-star rating, "Comfy and Stylish" headline, "Shop Now" CTA — visually credible but copy is generic |
| **Membership / benefits** | Loyalty 50% off module in footer — present and legible, but low placement limits exposure |
| **Product discoverability** | Five category tiles (Canvas, Slip-Ins, Sandals, Wide Fit, + hero) with images and CTAs — scannable but no pricing or product names visible |
| **Utility / secondary modules** | Standard nav at top, unsubscribe and legal copy at bottom — nothing notable |
| **Bugs / friction / clarity issues** | No visible broken images or overlapping text; email renders cleanly |

---

## Technical Audit

## Technical Audit — Skechers "Spring into comfort" (04/08/2026)

---

### 1. Technical Summary

Email is sent via Salesforce Marketing Cloud (SFMC) with click tracking on `click.emails.skechers.com`. The primary technical issues are pervasive use of HTTP (non-HTTPS) image sources across the entire image library and a missing authentication header confirmation at the relay layer.

---

### 2. Link & Tracking Issues

**Tracking pixel — missing URL scheme (ReturnPath)**
```
pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
No `http://` or `https://` prefix. Protocol-relative URLs are deprecated and unreliable in email clients; some will silently drop the request.

**Third-party tracking pixel over HTTP (ink1000.com)**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8107766165&mi_ecmp=MKG_US_NONPUR180_W_NEW_NONPURCH_EN_04082026
```
Loaded over plain HTTP. Gmail, Outlook.com, and Apple Mail proxy images; HTTP-only pixels can be blocked or cached incorrectly.

**Hardcoded subscriber ID in tracking pixel**
`mi_u=8107766165` and `partner_uid=121173391` in the Krux beacons appear to be static values rather than SFMC personalization tokens. If these are meant to identify the individual recipient or subscriber segment, they should be dynamic merge tokens (e.g., `%%subscriber_id%%`). If static, they're attributing all opens/impressions to the same profile.

**29 click-tracking links** — all redirect through `click.emails.skechers.com`. Not a defect, but none could be probed for destination health by the automated QA check. Destination link rot is unverified.

---

### 3. Rendering & Accessibility

**HTTP image sources — entire image library**

All `image.emails.skechers.com` assets are served over HTTP:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png   (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-....png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-....png   (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-....png   (Google Play badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-....png   (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/d76a5487-....png   (Twitter)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-....png   (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/573ab181-....png   (Pinterest)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-....png   (YouTube)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-....png   (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/fc08601a-....png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/00100b23-....png
```
Gmail, Outlook.com, and iOS Mail proxy all images through HTTPS. HTTP sources may fail to load or display as broken images.

**Missing alt text — 4 images**

| Image | src |
|---|---|
| o.gif | `http://www.ink1000.com/…/o.gif` |
| 49468f73-….png | `http://image.emails.skechers.com/…` |
| 00100b23-….png | `http://image.emails.skechers.com/…` |
| fc08601a-….png | `http://image.emails.skechers.com/…` |

Empty `alt=""` is acceptable only for decorative images. Product images and CTA images without alt text fail WCAG 2.1 AA (SC 1.1.1) and render as blank in image-blocked clients.

**`-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; }
```
Disabling text size adjustment on `*` prevents users with vision impairments from scaling text on mobile. Should be scoped to specific elements or set to `100%`.

**`maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Prevents pinch-zoom on iOS. WCAG 2.1 SC 1.4.4 (Resize Text) failure.

---

### 4. Personalization & Merge Tokens

**Suspicious static values in tracking pixels** (see §2 above — `mi_u` and `partner_uid`).

No unresolved merge tokens (`%%…%%` or `{{…}}`) visible in the truncated source. Preheader text is hardcoded: `"One Pair or Two? 20% off your first pair or BOGO 50% off"` — consistent with non-personalized batch send, which is expected for this campaign segment (`NONPUR180`/`NEW_NONPURCH`).

No issues beyond the static tracking IDs noted above.

---

### 5. Compliance

**Authentication headers — unverified**
QA finding: `Authentication-Results header not found`. SPF/DKIM/DMARC pass/fail status cannot be confirmed via the AgentMail relay. `no-reply@emails.skechers.com` is a common SFMC sending domain; SPF and DKIM records should be in place but must be verified directly against SFMC DNS configuration.

**Plain-text body — URL-heavy**
QA finding: 70%+ of plain-text content is URLs (3,205 / 4,556 chars). This ratio is a known spam-filter signal. If the plain-text part is auto-generated from HTML by stripping tags without cleanup, the output will be raw redirect URLs rather than readable text. This degrades both deliverability and compliance with best practices for multipart MIME.

**CAN-SPAM / unsubscribe** — not visible in truncated HTML. Assumed present in footer (standard for SFMC templates). Cannot confirm without full source.

---

### 6. Email-to-Site Continuity

All 29 destination links are wrapped in SFMC click-tracking redirects with AES-encrypted query strings:
```
https://click.emails.skechers.com/?qs=eyJkZWtJZCI6ImEzN2Y1NDhl…
```
UTM parameter pass-through to `skechers.com` depends entirely on what SFMC injects at redirect time. The encrypted payloads cannot be decoded without the SFMC key, so UTM presence on landing pages is unverifiable from the email source alone. Campaign ID `MKG_US_NONPUR180_W_NEW_NONPURCH_EN_04082026` appears consistently in the open/impression pixels, which is correct.

No issues confirmed; UTM pass-through should be spot-checked via a live click test.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | All `image.emails.skechers.com` assets served over HTTP | Update SFMC content block image URLs to `https://`. Check if the CDN already supports HTTPS (likely yes — just a template authoring error). |
| High | ink1000.com tracking pixel over HTTP | Switch to HTTPS endpoint or remove if redundant with SFMC open tracking. |
| High | ReturnPath pixel missing URL scheme | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif?…`. |
| Medium | 4 images missing alt text | Add descriptive `alt` for content images; use `alt=""` only for confirmed decorative images. |
| Medium | `mi_u` / `partner_uid` appear hardcoded | Confirm whether these should be dynamic SFMC personalization tokens. If so, replace with correct AMPscript or SSJS lookups. |
| Medium | Plain-text part is URL-dominated | Configure SFMC to generate a cleaned plain-text version or author one manually. |
| Medium | Authentication headers unverified | Pull a raw `.eml` from a delivered sample and inspect `Authentication-Results` for SPF/DKIM/DMARC pass. |
| Low | `maximum-scale=1` and `text-size-adjust: none` | Remove `maximum-scale=1`; change `-webkit-text-size-adjust` to `100%` or scope to specific elements. |
## Recent history

- [[2026-04-11-your-cart-expires-soon-rzgoegk0t-k-ndansihenw-g]] — 5/10 (2026-04-08)
- [[2026-04-08-your-items-are-waiting]] — 6/10 (2026-04-08)
- [[2026-04-07-test-mkg-us-na-w-new-gender-en-04082026-spring-into-a-new-level-of-comfort]] — 5/10 (2026-04-07)

