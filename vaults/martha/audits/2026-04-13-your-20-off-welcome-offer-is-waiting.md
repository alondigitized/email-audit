---
slug: 2026-04-13-your-20-off-welcome-offer-is-waiting
type: email
date: 2026-04-13
persona: martha
score: "5/10"
sender: SKECHERS
subject: Your 20% Off Welcome Offer is waiting!
tags: [email, score-5, sender/skechers]
---
# Your 20% Off Welcome Offer is waiting!
**Score:** 5/10 · **Type:** Email audit · **2026-04-13**
## Executive summary

- A competent but crowded welcome email. The 20% off discount is clearly communicated at the top, which is the right move for a welcome offer. However, the email immediately dilutes its single conversion goal by stacking eight category navigation modules, a loyalty program pitch, an app download push, a curbside pickup feature, and store locator — all in one scroll. The hero does its job; everything below it fights for attention and earns none.
- The offer is real and visible. The execution buries the conversion moment under generic catalog-browsing infrastructure.

## What's working

- **Discount is front and center.** "20% OFF YOUR FIRST ORDER" and the promo code are prominently displayed in the hero banner — new subscribers can't miss it.
- **"Shop Now" CTA is present** and immediately below the code, minimizing friction for ready buyers.
- **Skechers Plus loyalty module** is a reasonable secondary pitch — introduces the program without overwhelming the hero.
- **Category navigation (Women's, Men's, Kids, New Arrivals, Sale)** gives hesitant shoppers a way to browse if they're not ready to commit immediately.

## What's weak

- **No product photography in the body.** Below the hero, the email is almost entirely text links and small icon rows. There is no aspirational lifestyle or product imagery to reinforce why someone should shop now.
- **The hero image is generic.** "Something for Everyone" with a collage of shoes is low specificity — it doesn't show the subscriber what's new, what's popular, or what fits their profile.
- **Too many modules, no hierarchy.** Shop Women's Sales → Shop Men's Sales → Shop Kid's Sales → Shop Women's → Shop Men's → Shop Kid's → New Arrivals → Clothing → Sale → Skechers Plus → Download App → Curbside Pickup → Find a Store → Return Policy → Follow Us. That is 14+ functional destinations. Everything competes, nothing wins.
- **Promo code is hard to save.** The code `WELZJR2LBSL10OFW` (or similar) is rendered as static text — no one-click copy or button. Long alphanumeric codes introduce transcription errors at checkout.
- **Preview text is broken.** The visible preview reads: `Skechers® https://view.emails.skechers.com/?vawpToken=...` — a raw URL is leaking into the preheader. This is the first thing subscribers see in their inbox before opening.

## Recommendations

- 1. **Fix the preheader immediately.** A raw URL in the preview text is damaging open rates on every send until corrected. It should reinforce the offer: "Use code at checkout — expires soon."
- 2. **Shorten the email by 40%.** Keep hero, one product spotlight (bestseller or seasonal), Skechers Plus CTA, and footer. Cut the duplicated category grids.
- 3. **Add product imagery.** Show 2–3 specific shoes with prices. Give the subscriber a reason to click *now*, not just a menu to navigate later.
- 4. **Make the promo code a tappable button** or at minimum visually distinguish it (large, monospace, boxed) so it's easy to screenshot and remember.
- 5. **Add urgency.** The offer has no expiration visible in the email. "Valid for 14 days" or "Expires April 27" would meaningfully increase conversion rate.
- 6. **Personalize the hero if data exists.** A new subscriber who browsed women's running shoes before signing up shouldn't see "Something for Everyone" — they should see running shoes.
- | Priority | Action |
- |---|---|
- | **P0** | Fix the doubled-domain merge token. Audit the template variable responsible and add a QA assertion that no resolved URL contains a repeated domain pattern. |
- | **P1** | Upgrade all `http://image.emails.skechers.com/` src attributes to `https://`. The subdomain already supports TLS — this is a bulk find-and-replace in the template. |
- | **P1** | Add `alt=""` to all decorative/tracking pixel images; add descriptive `alt` text to all content images. |
- | **P2** | Fix both `<meta>` tags to include `http-equiv` attributes as shown in §3. |
- | **P2** | Verify and publish SPF/DKIM/DMARC records for `emails.skechers.com`; confirm Authentication-Results pass through the AgentMail relay. |
- | **P2** | Reduce plain-text URL ratio (currently 72%) — this is a soft deliverability signal for spam filters. Trim boilerplate tracking URLs from the text part or rebuild it from content rather than stripping the HTML. |
- | **P3** | Resolve click-redirect links in a pre-send QA step to confirm UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are present on all destination URLs. |
- | **P3** | Confirm CAN-SPAM footer (physical address + unsubscribe) is present in the full template — not visible in the truncated source provided. |

## Full review
## Skechers Welcome Email Review

---

### 1. Executive Summary

A competent but crowded welcome email. The 20% off discount is clearly communicated at the top, which is the right move for a welcome offer. However, the email immediately dilutes its single conversion goal by stacking eight category navigation modules, a loyalty program pitch, an app download push, a curbside pickup feature, and store locator — all in one scroll. The hero does its job; everything below it fights for attention and earns none.

---

### 2. Business Impact Score: **5/10**

The offer is real and visible. The execution buries the conversion moment under generic catalog-browsing infrastructure.

---

### 3. What's Working

- **Discount is front and center.** "20% OFF YOUR FIRST ORDER" and the promo code are prominently displayed in the hero banner — new subscribers can't miss it.
- **"Shop Now" CTA is present** and immediately below the code, minimizing friction for ready buyers.
- **Skechers Plus loyalty module** is a reasonable secondary pitch — introduces the program without overwhelming the hero.
- **Category navigation (Women's, Men's, Kids, New Arrivals, Sale)** gives hesitant shoppers a way to browse if they're not ready to commit immediately.

---

### 4. What's Weak

- **No product photography in the body.** Below the hero, the email is almost entirely text links and small icon rows. There is no aspirational lifestyle or product imagery to reinforce why someone should shop now.
- **The hero image is generic.** "Something for Everyone" with a collage of shoes is low specificity — it doesn't show the subscriber what's new, what's popular, or what fits their profile.
- **Too many modules, no hierarchy.** Shop Women's Sales → Shop Men's Sales → Shop Kid's Sales → Shop Women's → Shop Men's → Shop Kid's → New Arrivals → Clothing → Sale → Skechers Plus → Download App → Curbside Pickup → Find a Store → Return Policy → Follow Us. That is 14+ functional destinations. Everything competes, nothing wins.
- **Promo code is hard to save.** The code `WELZJR2LBSL10OFW` (or similar) is rendered as static text — no one-click copy or button. Long alphanumeric codes introduce transcription errors at checkout.
- **Preview text is broken.** The visible preview reads: `Skechers® https://view.emails.skechers.com/?vawpToken=...` — a raw URL is leaking into the preheader. This is the first thing subscribers see in their inbox before opening.

---

### 5. Recommendations

1. **Fix the preheader immediately.** A raw URL in the preview text is damaging open rates on every send until corrected. It should reinforce the offer: "Use code at checkout — expires soon."
2. **Shorten the email by 40%.** Keep hero, one product spotlight (bestseller or seasonal), Skechers Plus CTA, and footer. Cut the duplicated category grids.
3. **Add product imagery.** Show 2–3 specific shoes with prices. Give the subscriber a reason to click *now*, not just a menu to navigate later.
4. **Make the promo code a tappable button** or at minimum visually distinguish it (large, monospace, boxed) so it's easy to screenshot and remember.
5. **Add urgency.** The offer has no expiration visible in the email. "Valid for 14 days" or "Expires April 27" would meaningfully increase conversion rate.
6. **Personalize the hero if data exists.** A new subscriber who browsed women's running shoes before signing up shouldn't see "Something for Everyone" — they should see running shoes.

---

### 6. Bottom Line

Skechers is leaving money on the table with a technically correct but strategically unfocused welcome email. The 20% offer is the asset; the email's job is to make redeeming it feel effortless and exciting. Right now it feels like a homepage dump. Fix the preheader bug, halve the module count, add product imagery, and add an expiration date to the offer.

---

### 7. Subject Line Analysis

- **Subject:** `Your 20% Off Welcome Offer is waiting!`
- **Length:** 39 characters
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `4`, Urgency `5`, Specificity `7`
- **Strengths:**
  - Discount amount is explicit — readers know exactly what they're getting
  - Clean, readable, no emoji clutter
- **Weaknesses:**
  - "Is waiting!" is a cliché that adds no urgency; virtually every retailer uses this phrasing
  - Zero personalization — could be sent by any brand to any person
- **Alt A:** `Alon, your first order just got 20% cheaper`
- **Alt B:** `Welcome — here's your 20% off (don't leave it behind)`

---

### 8. Evidence

- **Overall purpose:** Welcome/acquisition email for new email subscribers, centered on a first-order discount.
- **Hero / primary value prop:** Full-width banner with "20% OFF YOUR FIRST ORDER," a promo code, and a "Shop Now" CTA. Clear and direct.
- **Membership / benefits section:** Skechers Plus module with icons for points, free shipping, and birthday perks. Appropriately placed below the hero, not competing with the main offer.
- **Product discoverability / recommendation modules:** Multiple text-link grids for Shop Women's Sales, Shop Men's Sales, Shop Kid's Sales, and then a second round for Women, Men, Kids, New Arrivals, Clothing, Sale. No imagery accompanies any of these — they read as a site map, not a shopping experience.
- **Utility / secondary modules:** App download (with App Store / Google Play links), Curbside Pickup callout, Find a Store link, and a returns/exchanges notice in the footer.
- **Bugs / friction / clarity issues:**
  - **Preheader/preview text is a raw URL** — visible and broken before the email is even opened.
  - The email is image-light below the hero fold; the overall visual weight drops sharply after the first banner, making the lower half feel like an afterthought.

---

## Technical Audit

## Technical Audit — SKECHERS Welcome Email
**From:** no-reply@emails.skechers.com | **Subject:** Your 20% Off Welcome Offer is waiting!

---

### 1. Technical Summary

The email has one broken-experience bug caused by a failed merge token producing a doubled domain URL, and a systemic HTTP/HTTPS mismatch affecting 13 image assets. Authentication status is unverified, and two `<meta>` tags are malformed due to missing `http-equiv` attributes.

---

### 2. Link & Tracking Issues

**[FAIL] Doubled-domain merge error — broken destination URL**
The QA scanner detected: `http://www.skechers.com/www.Skechers.com`
A merge token (likely resolving to a relative path such as `/www.Skechers.com`) was concatenated onto a hardcoded base domain instead of replacing it. Any click to this link results in a 404. This is the sole `[FAIL]` in the QA run.

**Tracking infrastructure present (no failures, for transparency):**
- Open pixel: `click.emails.skechers.com/open.aspx?KSRG4IWFBFNE5C...`
- Krux/Salesforce DMP usermatching (×2) + ad-impression pixel: `beacon.krxd.net`
- Return Path/Validity seed pixel: `pixel.app.returnpath.net/pixel.gif`
- Third-party pixel over HTTP (see §3): `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif`
- 22 click-redirect links through `click.emails.skechers.com` using encrypted `qs=` parameters — destinations are unverifiable without decryption; UTM presence cannot be confirmed from source (see §6).

---

### 3. Rendering & Accessibility

**HTTP image sources (13 affected) — images will be blocked**
Modern email clients (Outlook, Apple Mail, Gmail in some configurations) silently block mixed-content or plain-HTTP images. Affected assets include the Skechers logo, app store badges, social icons, and footer graphics:

| Asset | HTTP src |
|---|---|
| o.gif (ink1000 pixel) | `http://www.ink1000.com/...` |
| Skechers logo (dde00662…png) | `http://image.emails.skechers.com/...` |
| 49468f73…png | `http://image.emails.skechers.com/...` |
| App Store badge (0ec56c9f…png) | `http://image.emails.skechers.com/...` |
| Google Play badge (9bb508d0…png) | `http://image.emails.skechers.com/...` |
| 00100b23…png | `http://image.emails.skechers.com/...` |
| AfterPay (07cb60b5…png) | `http://image.emails.skechers.com/...` |
| fc08601a…png | `http://image.emails.skechers.com/...` |
| Instagram (b782e0aa…png) | `http://image.emails.skechers.com/...` |
| Facebook (a5c4cae0…png) | `http://image.emails.skechers.com/...` |
| YouTube (8c5738fc…png) | `http://image.emails.skechers.com/...` |

The `image.emails.skechers.com` domain clearly supports HTTPS (other assets in the same send already use it). All `http://` references should be updated to `https://`.

**Missing `alt` text (4 confirmed images)**
- `o.gif` — ink1000 tracking pixel (decorative, should be `alt=""`)
- `bcc16007-f391-423b-868f-cb0ad4f03490.jpg`
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`

Images-off rendering (common in corporate Outlook) will show broken or unlabeled image placeholders for these.

**Malformed `<meta>` tags — charset and IE compat directives non-functional**

```html
<meta content="text/html; charset=utf-8" />         <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                           <!-- missing http-equiv="X-UA-Compatible" -->
```

Both tags omit the required `http-equiv` attribute. The charset declaration will not be parsed as intended by conformant processors; the IE compatibility directive has no effect. Correct forms:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```

---

### 4. Personalization & Merge Tokens

**[FAIL] One confirmed unresolved/mis-resolved token** — the doubled-domain URL documented in §2. The case mismatch (`www.skechers.com` vs `www.Skechers.com`) suggests the token value came from an inconsistently cased data field rather than a static fallback.

**Subscriber IDs exposed in pixel query strings** — not a merge failure, but worth noting:
- `mi_u=8108404282` (ink1000 pixel)
- `partner_uid=122277199` (Krux beacon)

These are expected behavior for DMP user-matching pixels, but confirm subscriber-level tracking parameters are rendering correctly.

**Campaign ID** `TRG_US_EN_NONMEMWELCOME_3_04082026` appears consistently across the Krux impression pixel and ink1000 pixel — correctly resolved.

No unrendered `%%token%%` or `{{handlebars}}` syntax detected in the visible source.

---

### 5. Compliance

**Authentication status — unverifiable**
The QA check reports: `Authentication-Results header not found — SPF/DKIM status unknown (expected via AgentMail relay)`. SPF/DKIM pass/fail cannot be confirmed. Sending domain is `emails.skechers.com`; DMARC alignment requires verification against DNS records for that subdomain.

**CAN-SPAM / unsubscribe** — the HTML source provided is truncated and does not include the footer. Physical mailing address and unsubscribe mechanism presence cannot be confirmed from the available source. These must be verified against the full document.

---

### 6. Email-to-Site Continuity

**Broken destination** — the doubled-domain URL (`http://www.skechers.com/www.Skechers.com`) will return a 404, breaking the conversion path for whatever CTA it backs.

**UTM parameters — unverifiable from source**
All 22 destination links are wrapped in `click.emails.skechers.com/?qs=<encrypted-blob>` redirects. UTM parameter presence on final landing pages cannot be confirmed without resolving the redirects. The campaign metadata embedded in pixels (`TRG_US_EN_NONMEMWELCOME_3_04082026`) does not guarantee UTM params are appended to destination URLs.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Fix the doubled-domain merge token. Audit the template variable responsible and add a QA assertion that no resolved URL contains a repeated domain pattern. |
| **P1** | Upgrade all `http://image.emails.skechers.com/` src attributes to `https://`. The subdomain already supports TLS — this is a bulk find-and-replace in the template. |
| **P1** | Add `alt=""` to all decorative/tracking pixel images; add descriptive `alt` text to all content images. |
| **P2** | Fix both `<meta>` tags to include `http-equiv` attributes as shown in §3. |
| **P2** | Verify and publish SPF/DKIM/DMARC records for `emails.skechers.com`; confirm Authentication-Results pass through the AgentMail relay. |
| **P2** | Reduce plain-text URL ratio (currently 72%) — this is a soft deliverability signal for spam filters. Trim boilerplate tracking URLs from the text part or rebuild it from content rather than stripping the HTML. |
| **P3** | Resolve click-redirect links in a pre-send QA step to confirm UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are present on all destination URLs. |
| **P3** | Confirm CAN-SPAM footer (physical address + unsubscribe) is present in the full template — not visible in the truncated source provided. |
## Recent history

- [[2026-04-12-you-ve-still-got-20-off]] — 5/10 (2026-04-12)
- [[2026-04-11-welcome-to-skechers]] — 6/10 (2026-04-11)

