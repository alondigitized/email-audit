---
slug: 2026-04-18-bogo-50-off-your-go-to-spring-picks
type: email
date: 2026-04-18
persona: walker
score: "5/10"
sender: SKECHERS
subject: BOGO 50% Off Your Go-To Spring Picks
tags: [email, score-5, sender/skechers]
---
# BOGO 50% Off Your Go-To Spring Picks
**Score:** 5/10 · **Type:** Email audit · **2026-04-18**
## Executive summary

- Competent but generic. The offer drives transactional clicks; nothing here builds brand affinity or inspires discovery.

## What's working

- **Offer legibility.** "BUY ONE, GET ONE 50% OFF or 20% off 1 Item" is large, high-contrast, and immediately readable. No ambiguity.
- **Segment-based navigation.** Women's / Men's / Kids' size grids with direct CTAs give different buyer segments a fast path to their category.
- **Photo anchoring.** The hero shoe image (casual boat-style shoe) establishes a clear spring aesthetic and product taste.
- **Utility footer is complete.** Texting opt-in, curbside pickup, Afterpay/Klarna callouts, store finder, and app download are all present — covers the full omnichannel basket.

## What's weak

- **No product recommendation.** After the hero, the email shows zero specific products beyond the hero image. It's entirely category navigation — you're clicking into the website to discover anything. Low inspiration value.
- **Size grid modules look like a form, not a shopping experience.** The Women's / Men's / Kids' size selectors are functional but clinical. They strip out any sense of spring excitement or editorial voice.
- **The lifestyle photo strip is tiny and generic.** The four product photos (sandals, sneakers) in the mid-section are small, poorly differentiated, and easy to scroll past without registering.
- **"SHOP ADDITIONAL STYLES" is a dead zone.** A plain list of text links (Women, Men, Kids, Clothing, New Arrivals, Sale) adds no visual weight and doesn't prompt action.
- **Preview text is completely broken.** The recipient sees raw JSON-LD schema markup in the preview pane instead of a teaser line. That's a significant pre-open experience failure.
- **No spring storytelling.** The word "spring" appears in the subject but nothing in the email explains *why* these are spring picks or creates seasonal desire.

## Recommendations

- 1. **Fix the preview text immediately.** JSON in the inbox preview destroys credibility and likely suppresses open rates. A simple teaser ("Your favorite styles, now BOGO 50% off — shop before it ends") belongs there.
- 2. **Add 3–5 featured product tiles** between the hero and the size-grid modules. Show specific shoes with prices, names, and the discounted price. Give people something to want before asking them to self-navigate.
- 3. **Replace the size-grid module with a style-selector or occasion strip** ("Weekend Walks," "Work Comfort," "Kids' Playground") — still functional but emotionally resonant.
- 4. **Enlarge and caption the mid-section lifestyle photos.** Each image should have a product name and a "Shop Now" link; right now they're decorative and unclaimed.
- 5. **Give the "Shop Additional Styles" section visual treatment** — even simple category tiles would convert better than a text list.
- | Priority | Issue | Action |
- |---|---|---|
- | **High** | 13 images on HTTP | Bulk-replace `http://image.emails.skechers.com` → `https://` in template; also fix Return Path pixel and ink1000 pixel |
- | **High** | Auth headers not captured | Pull raw headers from a seed address delivery; confirm SPF/DKIM/DMARC all pass for `emails.skechers.com` |
- | **Medium** | Missing `alt` on promo image `49468f73…png` | Add descriptive `alt` text |
- | **Medium** | Plaintext subscriber ID in Krux pixel | Confirm this is covered by data-sharing agreement and applicable opt-out flows |
- | **Medium** | `maximum-scale=1` in viewport | Remove or change to `maximum-scale=5` |
- | **Low** | Duplicate media query blocks | Merge the 375px and 640px rule sets; remove redundant declarations |
- | **Low** | UTM params on click destinations | Verify post-redirect landing URLs carry full UTM tagging |

## Full review
## 2. Business Impact Score: **5/10**

Competent but generic. The offer drives transactional clicks; nothing here builds brand affinity or inspires discovery.

---

## 3. What's Working

- **Offer legibility.** "BUY ONE, GET ONE 50% OFF or 20% off 1 Item" is large, high-contrast, and immediately readable. No ambiguity.
- **Segment-based navigation.** Women's / Men's / Kids' size grids with direct CTAs give different buyer segments a fast path to their category.
- **Photo anchoring.** The hero shoe image (casual boat-style shoe) establishes a clear spring aesthetic and product taste.
- **Utility footer is complete.** Texting opt-in, curbside pickup, Afterpay/Klarna callouts, store finder, and app download are all present — covers the full omnichannel basket.

---

## 4. What's Weak

- **No product recommendation.** After the hero, the email shows zero specific products beyond the hero image. It's entirely category navigation — you're clicking into the website to discover anything. Low inspiration value.
- **Size grid modules look like a form, not a shopping experience.** The Women's / Men's / Kids' size selectors are functional but clinical. They strip out any sense of spring excitement or editorial voice.
- **The lifestyle photo strip is tiny and generic.** The four product photos (sandals, sneakers) in the mid-section are small, poorly differentiated, and easy to scroll past without registering.
- **"SHOP ADDITIONAL STYLES" is a dead zone.** A plain list of text links (Women, Men, Kids, Clothing, New Arrivals, Sale) adds no visual weight and doesn't prompt action.
- **Preview text is completely broken.** The recipient sees raw JSON-LD schema markup in the preview pane instead of a teaser line. That's a significant pre-open experience failure.
- **No spring storytelling.** The word "spring" appears in the subject but nothing in the email explains *why* these are spring picks or creates seasonal desire.

---

## 5. Recommendations

1. **Fix the preview text immediately.** JSON in the inbox preview destroys credibility and likely suppresses open rates. A simple teaser ("Your favorite styles, now BOGO 50% off — shop before it ends") belongs there.
2. **Add 3–5 featured product tiles** between the hero and the size-grid modules. Show specific shoes with prices, names, and the discounted price. Give people something to want before asking them to self-navigate.
3. **Replace the size-grid module with a style-selector or occasion strip** ("Weekend Walks," "Work Comfort," "Kids' Playground") — still functional but emotionally resonant.
4. **Enlarge and caption the mid-section lifestyle photos.** Each image should have a product name and a "Shop Now" link; right now they're decorative and unclaimed.
5. **Give the "Shop Additional Styles" section visual treatment** — even simple category tiles would convert better than a text list.

---

## 6. Bottom Line

This email will move units because the offer is strong and clear. But it's operating entirely on discount gravity — there's no editorial lift, no featured product desire, and a broken preview text that's actively damaging pre-open impressions. Easy wins exist at both ends: fix the preview text today, add product tiles in the next send.

---

## 7. Subject Line Analysis

- **Subject:** `BOGO 50% Off Your Go-To Spring Picks`
- **Length:** 38 characters
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `4`, Urgency `3`, Specificity `5`
- **Strengths:**
  - Offer mechanic (BOGO 50%) is front-loaded and instantly understood
  - "Go-To" adds a slight aspirational/familiar tone
- **Weaknesses:**
  - Zero urgency — no deadline, no scarcity, no "ends Sunday"
  - "Spring Picks" is vague category language; doesn't hint at what shoes or styles
- **Alt A:** `BOGO 50% Off Ends Sunday — Shop Your Spring Styles`
- **Alt B:** `Your Go-To Sneakers Are BOGO 50% Off Right Now`

---

## 8. Evidence

- **Overall purpose:** Promote a BOGO 50% off sitewide event with a spring positioning, driving traffic to category pages by segment.
- **Hero / primary value proposition:** Large bold "BUY ONE, GET ONE 50% OFF or 20% off 1 Item" headline with a hero shoe image (casual slip-on) and a single "SHOP NOW" CTA. Discount details noted in small disclaimer text below.
- **Membership / benefits section:** Not present. No loyalty program callout, no rewards points mention.
- **Product discoverability / recommendation modules:** Absent as individual products. The email uses Women's/Men's/Kids' size-grid navigation modules instead — functional but not inspirational. A mid-section 2x2 lifestyle photo strip shows sandals and sneakers without product names or prices.
- **Utility / secondary modules:** Strong — includes Download the App (App Store + Google Play), Shop Now Pay Later (Afterpay + Klarna), Curbside Pickup, Find a Store, and Follow Us (Instagram, Facebook, Twitter/X).
- **Bugs / friction / clarity issues:**
  - **Preview text is rendering raw JSON-LD schema markup** — visible in the inbox preview pane, a significant pre-open friction point and likely the most impactful bug in the send.
  - No other visible rendering bugs (no broken images, no overlapping text observed in the screenshot).

---

## Technical Audit

## Technical Audit — Skechers BOGO 50% Off (2026-04-18)

---

### 1. Technical Summary

The email is structurally sound but has a pervasive HTTP-over-HTTPS image loading problem across all hosted assets, plus two unresolved third-party pixel trackers and unconfirmed SPF/DKIM authentication status.

---

### 2. Link & Tracking Issues

**32 click-redirect links** all route through `click.emails.skechers.com` — standard Salesforce Marketing Cloud click-tracking. Domain appears correct; individual destinations not probed.

**Two Krux/Salesforce DMP user-match pixels** fire in a hidden `<div>` inside a display-none `<td>`:
- `beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=9153f33f…` — SHA-256 hashed email passed to Krux
- `beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=121173391` — raw subscriber ID passed to Krux

The subscriber ID (`121173391`) is transmitted in plaintext in the pixel URL. Confirm this is intentional and permissible under the applicable data-sharing agreement.

**Return Path/Validity seed pixel** present:
- `pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499` — loaded over **HTTP**, not HTTPS.

**ink1000.com open/impression pixel** also HTTP:
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — no alt text, non-HTTPS.

---

### 3. Rendering & Accessibility

**HTTP image sources — 13 affected assets** — all hosted on `image.emails.skechers.com` load over `http://`. Gmail, Outlook.com, and Apple Mail proxy or block non-HTTPS images; these will render as broken in any client that enforces HTTPS-only image loading:

| Asset | Issue |
|---|---|
| Skechers logo (`dde00662…png`) | HTTP + renders broken |
| Hero/promo image (`49468f73…png`) | HTTP + missing `alt` |
| App Store badge | HTTP |
| Google Play badge | HTTP |
| Curbside Pickup icon | HTTP |
| AfterPay badge | HTTP |
| Find A Store icon | HTTP |
| Instagram icon | HTTP |
| Facebook icon | HTTP |
| YouTube icon | HTTP |

**Fix:** `image.emails.skechers.com` supports HTTPS — replace all `http://image.emails.skechers.com` with `https://image.emails.skechers.com` in the template.

**Missing `alt` text — 2 confirmed:**
- `o.gif` (ink1000 impression pixel) — `alt=""` present but no descriptive text; acceptable for a tracking pixel, but should have `role="presentation"` or be wrapped in a `<span aria-hidden="true">`.
- `49468f73…png` — content image with no `alt` attribute at all. If this is a product/promo image, a descriptive `alt` is required for screen reader accessibility.

**`maximum-scale=1` in viewport meta** disables user pinch-zoom on mobile — an accessibility regression for low-vision users. Remove or raise to `maximum-scale=5`.

**Duplicate responsive breakpoint CSS:** `@media (max-width: 375px)` and `@media (max-width: 640px)` blocks contain identical rule sets. This is dead weight (bloats HTML size) and risks specificity conflicts. Consolidate.

---

### 4. Personalization & Merge Tokens

No unresolved merge token syntax (e.g. `%%variable%%`, `{{token}}`) found in the truncated source. No issues confirmed.

---

### 5. Compliance

**CAN-SPAM / unsubscribe:** Physical mailing address and unsubscribe link not visible in the truncated source — confirm they are present in the footer (standard for Skechers SFMC templates; not flagged as confirmed missing, just unverifiable from truncation).

**Authentication — status unknown:**
- QA system did not capture `Authentication-Results` headers through the AgentMail relay.
- SPF, DKIM, and DMARC pass/fail cannot be confirmed from available data.
- `From:` domain is `emails.skechers.com`; sending IP alignment with that domain's SPF record should be verified directly in a full header capture.

**Krux DMP pixel (see §2):** Passing a hashed email + plaintext subscriber ID to a third-party ad platform in an email pixel may require disclosure under CCPA/CPRA (California) and similar state privacy laws if recipients have opted out of data selling/sharing. Verify consent flow covers this use.

---

### 6. Email-to-Site Continuity

Campaign ID `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04182026` appears in both the Krux impression pixel and the ink1000 pixel — consistent internal tagging.

All 32 click links pass through `click.emails.skechers.com` redirect; UTM parameter presence on the destination URLs cannot be verified without following the redirects. Confirm `utm_source`, `utm_medium`, and `utm_campaign` are appended to all landing page URLs post-redirect, particularly for the BOGO offer page.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | 13 images on HTTP | Bulk-replace `http://image.emails.skechers.com` → `https://` in template; also fix Return Path pixel and ink1000 pixel |
| **High** | Auth headers not captured | Pull raw headers from a seed address delivery; confirm SPF/DKIM/DMARC all pass for `emails.skechers.com` |
| **Medium** | Missing `alt` on promo image `49468f73…png` | Add descriptive `alt` text |
| **Medium** | Plaintext subscriber ID in Krux pixel | Confirm this is covered by data-sharing agreement and applicable opt-out flows |
| **Medium** | `maximum-scale=1` in viewport | Remove or change to `maximum-scale=5` |
| **Low** | Duplicate media query blocks | Merge the 375px and 640px rule sets; remove redundant declarations |
| **Low** | UTM params on click destinations | Verify post-redirect landing URLs carry full UTM tagging |
## Recent history

- [[2026-04-18-see-how-we-make-shopping-famously-easy-for-you]] — 5/10 (2026-04-18)
- [[2026-04-18-29-98-sandals-for-a-full-spring-ahead]] — 5/10 (2026-04-18)
- [[2026-04-18-did-you-forget-something]] — 5/10 (2026-04-18)

