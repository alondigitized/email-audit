---
slug: 2026-04-18-bogo-50-off-your-go-to-spring-picks-e06a33d8-2c35-4cb3-87c8-
type: email
date: 2026-04-18
persona: martha
score: "5/10"
sender: SKECHERS
subject: BOGO 50% Off Your Go-To Spring Picks
tags: [email, score-5, sender/skechers]
---
# BOGO 50% Off Your Go-To Spring Picks
**Score:** 5/10 · **Type:** Email audit · **2026-04-18**
## Executive summary

- Solid offer, weak execution. The email will convert casual deal-seekers but leaves significant revenue on the table by not featuring actual product.

## What's working

- **Hero offer is instant and legible.** "BUY ONE, GET ONE 50% OFF or 20% off 1 Item" is large, high-contrast, and immediately scannable. No ambiguity.
- **Single clear CTA above the fold.** "SHOP NOW" button appears directly under the hero before any scrolling.
- **Shoe imagery in the hero** grounds the offer in a real product category (casual/boat shoes), giving the email a lifestyle feel at a glance.
- **Utility modules at the bottom** (texting, Afterpay/Klarna, Curbside Pickup, Store Finder) add real-world value for in-market shoppers.

## What's weak

- **Size grids instead of products.** The Women's, Men's, and Kids' sections show only size selector grids (e.g., "5–5.5 / 6–6.5 / 7–7.5…"). There are zero product images, zero prices, zero specific styles featured. This is a functional nightmare — it asks the recipient to shop without ever showing them what to shop *for*.
- **No product photography post-hero.** The mid-email photography module (sandals/outdoor shoes) finally appears near the bottom but by then the reader has already scrolled through a wall of size links.
- **Gender/category navigation is redundant.** Women's, Men's, Kids' appear as both text size-grid sections AND as image-linked tiles AND again in the "Shop Additional Styles" text list. Three passes at the same taxonomy is noise.
- **"Shop Additional Styles" is a plain text list.** Women / Men / Kids / Clothing / New Arrivals / Sale — no imagery, no price anchors, no urgency. This section contributes nothing to conversion.
- **Offer deadline is invisible.** The fine print below the hero CTA is too small to read in the render. If there's an expiration date, it's effectively hidden.
- **Preview text is broken.** The preview renders raw JSON-LD schema markup (`[{ "@context": "http://schema.org/"...`). This is the first thing recipients see in their inbox — it actively undermines credibility and open rates.

## Recommendations

- 1. **Fix the preview text immediately.** Raw schema code in the inbox preview is a deliverability and brand-trust issue. Replace with a human-readable hook like "Your spring styles just got cheaper — BOGO 50% off, today only."
- 2. **Replace size grids with curated product tiles.** Show 3–4 hero products per gender with names, prices, and a "Shop Now" link. Size selection belongs on the PDP, not in the email.
- 3. **Add a deadline to the hero.** "Ends Sunday" or a countdown would add urgency without clutter.
- 4. **Collapse the triple-navigation.** Pick one format (image tiles) and cut the plain-text "Shop Additional Styles" list entirely.
- 5. **Lead the mid-email photography module earlier.** The sandal/outdoor product photos are the most visually engaging content below the hero — move them up before the size grids.
- | Priority | Action |
- |---|---|
- | **P0** | Move all `image.emails.skechers.com` assets to HTTPS — Outlook desktop will not proxy HTTP sources |
- | **P0** | Replace `http://www.ink1000.com/...` pixel with HTTPS endpoint, or remove if Salesforce open tracking is the primary signal |
- | **P0** | Fix `pixel.app.returnpath.net` URL — missing `https://` breaks Validity deliverability monitoring |
- | **P1** | Verify SPF/DKIM/DMARC alignment on a received header before treating the send as authenticated |
- | **P1** | Probe at least a sample of the 32 click-redirect chains to confirm UTM params are present on landing pages |
- | **P1** | Remove raw `partner_uid=122277199` from Krux beacon — use the SHA-256 hash variant consistently |
- | **P2** | Add descriptive `alt` text to the hero content image (`49468f73-....png`) |
- | **P2** | Change `* { -webkit-text-size-adjust: none }` to `100%` to restore iOS accessibility zoom |

## Full review
## 2. Business Impact Score: **5 / 10**

Solid offer, weak execution. The email will convert casual deal-seekers but leaves significant revenue on the table by not featuring actual product.

---

## 3. What's Working

- **Hero offer is instant and legible.** "BUY ONE, GET ONE 50% OFF or 20% off 1 Item" is large, high-contrast, and immediately scannable. No ambiguity.
- **Single clear CTA above the fold.** "SHOP NOW" button appears directly under the hero before any scrolling.
- **Shoe imagery in the hero** grounds the offer in a real product category (casual/boat shoes), giving the email a lifestyle feel at a glance.
- **Utility modules at the bottom** (texting, Afterpay/Klarna, Curbside Pickup, Store Finder) add real-world value for in-market shoppers.

---

## 4. What's Weak

- **Size grids instead of products.** The Women's, Men's, and Kids' sections show only size selector grids (e.g., "5–5.5 / 6–6.5 / 7–7.5…"). There are zero product images, zero prices, zero specific styles featured. This is a functional nightmare — it asks the recipient to shop without ever showing them what to shop *for*.
- **No product photography post-hero.** The mid-email photography module (sandals/outdoor shoes) finally appears near the bottom but by then the reader has already scrolled through a wall of size links.
- **Gender/category navigation is redundant.** Women's, Men's, Kids' appear as both text size-grid sections AND as image-linked tiles AND again in the "Shop Additional Styles" text list. Three passes at the same taxonomy is noise.
- **"Shop Additional Styles" is a plain text list.** Women / Men / Kids / Clothing / New Arrivals / Sale — no imagery, no price anchors, no urgency. This section contributes nothing to conversion.
- **Offer deadline is invisible.** The fine print below the hero CTA is too small to read in the render. If there's an expiration date, it's effectively hidden.
- **Preview text is broken.** The preview renders raw JSON-LD schema markup (`[{ "@context": "http://schema.org/"...`). This is the first thing recipients see in their inbox — it actively undermines credibility and open rates.

---

## 5. Recommendations

1. **Fix the preview text immediately.** Raw schema code in the inbox preview is a deliverability and brand-trust issue. Replace with a human-readable hook like "Your spring styles just got cheaper — BOGO 50% off, today only."
2. **Replace size grids with curated product tiles.** Show 3–4 hero products per gender with names, prices, and a "Shop Now" link. Size selection belongs on the PDP, not in the email.
3. **Add a deadline to the hero.** "Ends Sunday" or a countdown would add urgency without clutter.
4. **Collapse the triple-navigation.** Pick one format (image tiles) and cut the plain-text "Shop Additional Styles" list entirely.
5. **Lead the mid-email photography module earlier.** The sandal/outdoor product photos are the most visually engaging content below the hero — move them up before the size grids.

---

## 6. Bottom Line

The offer is good enough to drive clicks from already-loyal Skechers shoppers, but the email wastes its entire middle section on size navigation that belongs on the website. The broken preview text is the most urgent fix — it's sabotaging open rates before the email is even opened.

---

## 7. Subject Line Analysis

- **Subject:** `BOGO 50% Off Your Go-To Spring Picks`
- **Length:** 38 characters
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `4`, Urgency `3`, Specificity `5`
- **Strengths:**
  - Offer type (BOGO 50%) is front-loaded and crystal clear
  - "Spring Picks" connects to seasonality without being forced
- **Weaknesses:**
  - No urgency signal — no deadline, no scarcity, no "today only"
  - "Your Go-To" personalization is generic filler; it's the same for every recipient
- **Alt A:** `BOGO 50% Off Ends Sunday — Shop Spring Styles`
- **Alt B:** `Buy One, Get One 50% Off: Spring's Best Sellers`

---

## 8. Evidence

- **Overall purpose:** Promotional send driving BOGO or 20%-off purchases across Skechers' spring footwear catalog.
- **Hero / primary value proposition:** Full-width banner with shoe photography, bold BOGO 50% off / 20% off 1 item headline, and a single "SHOP NOW" CTA. Clean and effective.
- **Membership / benefits section:** None visible. No loyalty points, no member-exclusive framing.
- **Product discoverability / recommendation modules:** Effectively absent. The Women's / Men's / Kids' sections display only size range grids (clickable links by size bucket), not actual product cards. A secondary photography tile module near the bottom shows outdoor/sandal styles with "SHOP WOMEN'S," "SHOP MEN'S," "SHOP GIRLS'," "SHOP BOYS'" CTAs — this is the only product-adjacent imagery in the body.
- **Utility / secondary modules:** Afterpay and Klarna ("Shop Now, Pay Later"), Curbside Pickup, Find a Store, SMS opt-in ("Get Texting"), and social follow icons. All legible, well-organized in the footer zone.
- **Bugs / friction / clarity issues:**
  - **Preview text is raw JSON-LD schema code** — visible in the subject metadata. Critical bug.
  - Fine print text under the hero CTA is rendered at unreadably small size; offer terms (if any deadline exists) are invisible.
  - "Shop Additional Styles" section is plain text with no visual hierarchy — easily skipped/ignored.

---

## Technical Audit

## Technical Audit — Skechers BOGO 50% Off (2026-04-18)

---

### 1. Technical Summary

The email is structurally sound but has a systemic HTTP image-serving problem affecting 11+ assets, two third-party beacon pixels firing on open, and an unverifiable authentication chain. No broken links or missing merge tokens detected.

---

### 2. Link & Tracking Issues

**HTTP pixel — third-party tracker (ink1000.com):**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8108404282&mi_ecmp=PRO_US_NA_U_SITEBUNDLE_FULL_EN_04182026
```
- Served over plain HTTP. Gmail/Outlook proxy all images; an HTTP-only pixel will be blocked or proxied to HTTPS, breaking the tracking signal.
- `mi_u=8108404282` exposes a raw subscriber ID in a plaintext URL with no encryption in transit.

**Krux/Salesforce DMP beacons (2 pixels):**
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=adf27fee...
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=122277199
```
- `partner_uid` on the second beacon is a raw numeric subscriber ID transmitted unencrypted. The first uses a SHA-256 hash, which is acceptable — the plain-ID variant is the issue.

**32 click-tracking links skipped by QA probe** — all route through `click.emails.skechers.com`. Not inherently a bug, but none could be validated for redirect chain integrity.

---

### 3. Rendering & Accessibility

**HTTP image sources (11 affected assets):**
All production images are served from `http://image.emails.skechers.com/...`. Full list:

| Asset | src |
|---|---|
| Skechers logo | `http://image.emails.skechers.com/.../dde00662-....png` |
| Hero/promo image | `http://image.emails.skechers.com/.../49468f73-....png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f-....png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0-....png` |
| Curbside Pickup icon | `http://image.emails.skechers.com/.../00100b23-....png` |
| AfterPay icon | `http://image.emails.skechers.com/.../07cb60b5-....png` |
| Find A Store icon | `http://image.emails.skechers.com/.../fc08601a-....png` |
| Instagram icon | `http://image.emails.skechers.com/.../b782e0aa-....png` |
| Facebook icon | `http://image.emails.skechers.com/.../a5c4cae0-....png` |
| YouTube icon | `http://image.emails.skechers.com/.../8c5738fc-....png` |

Gmail and Apple Mail proxy HTTP images to HTTPS; images may render correctly for those clients but will fail in Outlook desktop (which does not proxy) and any client with mixed-content blocking. This is a send-time infrastructure issue — the CDN path needs HTTPS.

**Missing alt text (2 images):**
- `o.gif` (ink1000 pixel) — no `alt=""` set; minor.
- `49468f73-....png` — a content image with no alt text. If images are blocked, this section renders blank with no text fallback. Needs descriptive alt text.

**`-webkit-text-size-adjust: none`** applied globally via `* {}` selector. This prevents iOS Mail from scaling text when a user zooms, which is an accessibility regression. Should be `100%`, not `none`.

**Duplicate responsive breakpoints:** `max-width: 375px`, `max-width: 480px`, `max-width: 640px`, and `max-width: 680px` all re-declare similar rules (`.show`, `.hideme`, `.mobile-hidden`). No functional bug, but specificity conflicts could produce inconsistent rendering in intermediate viewport sizes.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (`{{`, `%%`, `[%`) visible in the truncated source. Preheader text ("Only Need 1? Take 20% Off a Single Pair") is hardcoded — no dynamic personalization tokens present.

No issues found.

---

### 5. Compliance

**CAN-SPAM / unsubscribe:** Not visible in the truncated source — cannot confirm presence of physical mailing address or unsubscribe link. QA summary did not flag these as missing, suggesting they appear further in the HTML body.

**Authentication headers:**
```
[WARN] Authentication-Results header not found: Expected via AgentMail relay — SPF/DKIM status unknown
```
The sending domain is `emails.skechers.com`. SPF/DKIM/DMARC alignment cannot be confirmed from the relay path. This is a QA-pipeline observability gap (header not captured), not necessarily a send failure — but it must be verified directly against a received copy or MX Toolbox check before treating as clean.

**`Return-Path` pixel:**
```
pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
Served over HTTP (no `https://`). Validity Everest (formerly Return Path) monitoring pixel is broken for the same reason as the ink1000 pixel.

---

### 6. Email-to-Site Continuity

**Campaign ID present in pixels:** `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04182026` appears in both the impression beacon and the ink1000 pixel. This confirms a campaign parameter exists at the tracking layer.

**Click links not inspectable** — the 32 redirects through `click.emails.skechers.com` could not be probed, so UTM parameter presence on destination URLs (`skechers.com`) cannot be confirmed. This is the highest-risk continuity gap: if UTM params are missing or mismatched on the destination page, attributed sessions will not be captured in site analytics.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Move all `image.emails.skechers.com` assets to HTTPS — Outlook desktop will not proxy HTTP sources |
| **P0** | Replace `http://www.ink1000.com/...` pixel with HTTPS endpoint, or remove if Salesforce open tracking is the primary signal |
| **P0** | Fix `pixel.app.returnpath.net` URL — missing `https://` breaks Validity deliverability monitoring |
| **P1** | Verify SPF/DKIM/DMARC alignment on a received header before treating the send as authenticated |
| **P1** | Probe at least a sample of the 32 click-redirect chains to confirm UTM params are present on landing pages |
| **P1** | Remove raw `partner_uid=122277199` from Krux beacon — use the SHA-256 hash variant consistently |
| **P2** | Add descriptive `alt` text to the hero content image (`49468f73-....png`) |
| **P2** | Change `* { -webkit-text-size-adjust: none }` to `100%` to restore iOS accessibility zoom |
## Recent history

- [[2026-04-16-loved-reviewed-and-ready-for-your-closet-abc03e52-37dd-4270-8885-]] — 6/10 (2026-04-16)
- [[2026-04-15-spring-styles-bogo-50-off-the-perfect-pair]] — 5/10 (2026-04-15)
- [[2026-04-13-your-20-off-welcome-offer-is-waiting]] — 5/10 (2026-04-13)

