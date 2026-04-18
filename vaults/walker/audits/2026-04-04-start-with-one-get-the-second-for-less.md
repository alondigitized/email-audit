---
slug: 2026-04-04-start-with-one-get-the-second-for-less
type: email
date: 2026-04-04
persona: walker
score: "6/10"
sender: SKECHERS
subject: Start With One. Get the Second For Less
tags: [email, score-6, sender/skechers]
---
# Start With One. Get the Second For Less
**Score:** 6/10 · **Type:** Email audit · **2026-04-04**
## Executive summary

- A clean, on-brand Spring Sale promotional email with a strong BOGO 50% offer at the top. The hero is clear and the segment-based category grid (Women, Men, Girls, Boys) is well-executed. The email is compact and easy to scan, but the hero CTA copy mismatches the subject line, the product imagery is small, and the lower utility section is visually weak. Overall a serviceable promotional email that delivers its core message but leaves performance on the table.
- Solid offer, weak merchandising. The deal is legible but the email doesn't inspire browsing or discovery beyond clicking one of four gender tiles.

## What's working

- **Offer clarity.** "Buy One, Get the Second 50% Off" is front-and-center with sufficient size and contrast. No confusion about what the deal is.
- **Dual CTA in hero.** "Shop Now" and "Find a Store" appropriately addresses both online and in-store intent — smart for a value-focused promo.
- **Gender segmentation grid.** Women / Men / Girls / Boys tiles make it easy to self-select. Each has a shoe image and a "Shop Now" CTA.
- **Compact email length.** Doesn't overstay its welcome. The scroll depth required to see everything is appropriate.

## What's weak

- **Subject line / hero disconnect.** The subject says "Start With One. Get the Second For Less" — which is vague and slightly misleading. The actual offer is 50% off, which is more compelling. The hero communicates it correctly; the subject undersells it.
- **Tiny product imagery.** The shoe images in the category tiles are small. For a footwear brand, product photography is a primary purchase driver — these images don't do the shoes justice.
- **No price anchoring or product callout.** There's no "starting at $X" or specific hero product highlighted. Skechers has a range from $40–$150+; anchoring price builds confidence.
- **Girls and Boys tiles are below the fold and visually cramped.** They appear smaller in proportion, likely losing clicks from shoppers who might buy for kids.
- **Utility section is text-heavy and visually bland.** The app download, curbside pickup, buy now/pay later, and store finder links are presented as plain text/icon rows with no visual hierarchy. They look like a footer, not a feature.
- **"Discount applied at cart" fine print in hero** is legible but feels like a gotcha qualifier rather than confidence-building copy.

## Recommendations

- 1. **Align subject line to offer.** Change to "Spring Sale: Buy One, Get the Second 50% Off" — say the number, earn the open and the click.
- 2. **Enlarge product images in category tiles.** Make the shoe the hero of each tile, not the label. Consider full-bleed tile images.
- 3. **Add a price anchor** ("Shoes from $45") or spotlight one hero shoe with a before/after price to make the deal tangible.
- 4. **Elevate Kids as a single tile** ("KIDS") rather than splitting Girls/Boys if space is tight — it competes better at smaller render sizes.
- 5. **Convert utility links into visual badges** with icons or a minimal card design. App download especially deserves more visual weight.
- | Priority | Issue | Fix |
- |---|---|---|
- | **High** | All `image.emails.skechers.com` assets served over HTTP | Migrate CDN to HTTPS or update asset URLs to `https://` — the subdomain almost certainly supports TLS |
- | **High** | `returnpath.net` pixel missing protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
- | **High** | `ink1000.com` tracking pixel over HTTP | Move to HTTPS endpoint or remove if redundant with SFMC open tracking |
- | **Medium** | `maximum-scale=1` in viewport | Remove or change to `maximum-scale=5` to allow pinch-zoom |
- | **Medium** | `-webkit-text-size-adjust: none` | Change to `-webkit-text-size-adjust: 100%` |
- | **Medium** | 3–4 footer images missing alt text | Add descriptive `alt` attributes to all non-decorative images |
- | **Low** | Confirm UTM params survive SFMC redirect | Manually resolve one `click.emails.skechers.com` link to verify UTM chain |
- | **Low** | Verify CAN-SPAM footer in full source | Confirm physical address and unsubscribe link present in untruncated HTML |

## Full review
## Skechers — "Start With One. Get the Second For Less"

---

### 1. Executive Summary

A clean, on-brand Spring Sale promotional email with a strong BOGO 50% offer at the top. The hero is clear and the segment-based category grid (Women, Men, Girls, Boys) is well-executed. The email is compact and easy to scan, but the hero CTA copy mismatches the subject line, the product imagery is small, and the lower utility section is visually weak. Overall a serviceable promotional email that delivers its core message but leaves performance on the table.

---

### 2. Business Impact Score: **6 / 10**

Solid offer, weak merchandising. The deal is legible but the email doesn't inspire browsing or discovery beyond clicking one of four gender tiles.

---

### 3. What's Working

- **Offer clarity.** "Buy One, Get the Second 50% Off" is front-and-center with sufficient size and contrast. No confusion about what the deal is.
- **Dual CTA in hero.** "Shop Now" and "Find a Store" appropriately addresses both online and in-store intent — smart for a value-focused promo.
- **Gender segmentation grid.** Women / Men / Girls / Boys tiles make it easy to self-select. Each has a shoe image and a "Shop Now" CTA.
- **Compact email length.** Doesn't overstay its welcome. The scroll depth required to see everything is appropriate.

---

### 4. What's Weak

- **Subject line / hero disconnect.** The subject says "Start With One. Get the Second For Less" — which is vague and slightly misleading. The actual offer is 50% off, which is more compelling. The hero communicates it correctly; the subject undersells it.
- **Tiny product imagery.** The shoe images in the category tiles are small. For a footwear brand, product photography is a primary purchase driver — these images don't do the shoes justice.
- **No price anchoring or product callout.** There's no "starting at $X" or specific hero product highlighted. Skechers has a range from $40–$150+; anchoring price builds confidence.
- **Girls and Boys tiles are below the fold and visually cramped.** They appear smaller in proportion, likely losing clicks from shoppers who might buy for kids.
- **Utility section is text-heavy and visually bland.** The app download, curbside pickup, buy now/pay later, and store finder links are presented as plain text/icon rows with no visual hierarchy. They look like a footer, not a feature.
- **"Discount applied at cart" fine print in hero** is legible but feels like a gotcha qualifier rather than confidence-building copy.

---

### 5. Recommendations

1. **Align subject line to offer.** Change to "Spring Sale: Buy One, Get the Second 50% Off" — say the number, earn the open and the click.
2. **Enlarge product images in category tiles.** Make the shoe the hero of each tile, not the label. Consider full-bleed tile images.
3. **Add a price anchor** ("Shoes from $45") or spotlight one hero shoe with a before/after price to make the deal tangible.
4. **Elevate Kids as a single tile** ("KIDS") rather than splitting Girls/Boys if space is tight — it competes better at smaller render sizes.
5. **Convert utility links into visual badges** with icons or a minimal card design. App download especially deserves more visual weight.

---

### 6. Bottom Line

This email communicates its deal clearly and stays on brand, but it's playing it safe. For a Spring Sale — a high-competition period in footwear — the creative needs stronger product storytelling and a subject line that actually says "50% off." Fix those two things and this email performs materially better.

---

### 7. Evidence

**Overall purpose:** Spring promotional email driving purchases via a Buy One / Get Second 50% Off offer. Dual channel (online + in-store).

**Hero / primary value proposition:** Green gradient banner with "Spring Sale / Buy One, Get the Second 50% Off" in bold. Two CTAs: Shop Now and Find a Store. Discount-at-cart qualifier is visible. Clear and functional.

**Membership / benefits section:** None present. No loyalty or rewards mention.

**Product discoverability / recommendation modules:** Four gender-segmented category tiles (Women, Men, Girls, Boys), each with a shoe image and Shop Now CTA. No product names, prices, or featured styles. Pure category navigation, not product discovery.

**Utility / secondary modules:** Text-row section includes: Shop Additional Styles (Women, Men, Kids, Clothing, New Arrivals, Sale links), Download the App, Curbside Pickup, Shop Now/Pay Later, Find a Store. All functional, none visually prominent.

**Bugs / friction / clarity issues:** No broken images or rendering errors visible. All modules appear to render correctly. The category tile for "GIRLS" appears slightly smaller in visual weight than Women/Men, which may reduce click equity.

---

## Technical Audit

## Technical Audit — Skechers "Start With One. Get the Second For Less"

**From:** no-reply@emails.skechers.com | **Date:** 2026-04-04

---

### 1. Technical Summary

The email is structurally sound with responsive layout handling, but has a pervasive HTTP (non-HTTPS) image hosting problem affecting 15+ assets on `image.emails.skechers.com`, plus a third-party pixel served over HTTP. SPF/DKIM authentication status could not be confirmed through the relay.

---

### 2. Link & Tracking Issues

**26 click-redirect links** all route through `click.emails.skechers.com` — standard SFMC click-tracking. Links could not be probed due to redirect chain, so destination URL health is unverified.

**Three tracking pixels present:**
- `https://click.emails.skechers.com/open.aspx?...` — SFMC open pixel (HTTPS, acceptable)
- `beacon.krxd.net/1x1_usermatch.gif` × 2 — Salesforce Krux DMP user-matching pixels; exposes subscriber ID (`partner_uid=121173391`) and hashed email (`9153f33f...`) to a third-party domain
- `pixel.app.returnpath.net/pixel.gif` — **Missing protocol prefix** (`src="pixel.app.returnpath.net/..."` rather than `https://pixel.app.returnpath.net/...`); will be treated as a relative URL and 404 in all clients

**Third-party ink1000.com pixel** served over **HTTP**:
```
src="http://www.ink1000.com/p/up/.../o.gif?mi_u=8107766165&mi_ecmp=PRO_US_NONPUR180_..."
```
Plain HTTP pixel will be blocked by Gmail, Apple Mail, and most modern clients by default.

---

### 3. Rendering & Accessibility

**HTTP image sources (15 assets):** Every image on `image.emails.skechers.com` uses `http://` rather than `https://`. Affected assets include the Skechers logo, footer payment badges (AfterPay), social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), and app store badges. Security-conscious clients (Gmail on Android, iOS Mail with Mail Privacy Protection, Outlook with "Don't download pictures") will block these or show broken images.

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/*.png           (footer assets ×14)
```

**Missing alt text on 4 images:**
- `o.gif` (ink1000 tracking pixel — acceptable to omit, but flagged)
- `49468f73-...png` — unknown content, no alt
- `00100b23-...png` — unknown content, no alt
- `fc08601a-...png` — unknown content, no alt

These unnamed PNGs in the footer likely carry visual meaning (e.g., payment or trust badges) and will render as blank in image-off environments with no text fallback.

**`-webkit-text-size-adjust: none`** applied globally via `* {}` selector — this disables user font-size preferences and can fail WCAG 1.4.4 (Resize Text). Should be `100%`, not `none`.

**`maximum-scale=1`** in the viewport meta tag prevents pinch-to-zoom on mobile — an accessibility issue (WCAG 1.4.4).

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the truncated source. Campaign ID `PRO_US_NONPUR180_U_BUNDLE_NONPURCH_EN_04042026` is consistently applied across all tracking pixels — segment targeting appears coherent (non-purchaser, 180-day window).

No issues found beyond what can be confirmed from available source.

---

### 5. Compliance

**CAN-SPAM:** Physical mailing address and unsubscribe mechanism were not visible in the truncated HTML but are expected in the footer — cannot confirm from available source.

**Unsubscribe:** Not visible in truncated source; requires manual verification.

**Authentication:** SPF/DKIM status unknown — `Authentication-Results` header was not captured through the AgentMail relay. Given the sending domain is `emails.skechers.com` (subdomain) via SFMC, SPF/DKIM/DMARC alignment should be verified directly against message headers.

**Third-party data exposure:** Krux pixels pass a hashed subscriber PII (`partner_uid=9153f33fe5cdf59baf088bb835d3b39ef90f188bd8540a4faba92899227ced00`) to `beacon.krxd.net`. Confirm this is covered under Skechers' privacy policy and subscriber consent.

---

### 6. Email-to-Site Continuity

Campaign ID `PRO_US_NONPUR180_U_BUNDLE_NONPURCH_EN_04042026` is present in tracking pixels but **UTM parameters on click links could not be verified** because all 26 links are wrapped in SFMC click redirects that were not probed. If UTM params are appended post-redirect (common in SFMC), this may work correctly — but should be spot-checked by resolving one redirect chain manually to confirm `utm_campaign`, `utm_source`, and `utm_medium` arrive on the landing page.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **High** | All `image.emails.skechers.com` assets served over HTTP | Migrate CDN to HTTPS or update asset URLs to `https://` — the subdomain almost certainly supports TLS |
| **High** | `returnpath.net` pixel missing protocol | Change `src="pixel.app.returnpath.net/..."` to `src="https://pixel.app.returnpath.net/..."` |
| **High** | `ink1000.com` tracking pixel over HTTP | Move to HTTPS endpoint or remove if redundant with SFMC open tracking |
| **Medium** | `maximum-scale=1` in viewport | Remove or change to `maximum-scale=5` to allow pinch-zoom |
| **Medium** | `-webkit-text-size-adjust: none` | Change to `-webkit-text-size-adjust: 100%` |
| **Medium** | 3–4 footer images missing alt text | Add descriptive `alt` attributes to all non-decorative images |
| **Low** | Confirm UTM params survive SFMC redirect | Manually resolve one `click.emails.skechers.com` link to verify UTM chain |
| **Low** | Verify CAN-SPAM footer in full source | Confirm physical address and unsubscribe link present in untruncated HTML |
## Recent history

- [[2026-04-11-your-items-are-waiting]] — 5/10 (2026-04-04)
- [[2026-04-04-did-you-forget-something]] — 5.5/10 (2026-04-04)
- [[2026-04-03-test-mkg-us-nonpuropen-u-new-nonpurch-en-04062026out-with-the-old-into-spring]] — 5/10 (2026-04-03)

