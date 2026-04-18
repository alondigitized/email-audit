---
slug: 2026-03-29-your-items-are-waiting
type: email
date: 2026-03-29
persona: walker
score: "6/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-6, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 6/10 · **Type:** Email audit · **2026-03-29**
## Executive summary

- A competent cart abandonment email with a witty headline and a clear primary CTA, let down by excessive module stacking below the fold that dilutes urgency. The abandoned product gets proper hero treatment, but a BOGO 50% Off promotion buried mid-email creates a missed opportunity — it could be the decisive incentive to close the sale and instead feels like an afterthought.
- Functional but not optimal. The core abandon-cart mechanics work. Revenue is being left on the table by poor promotional hierarchy and email length.

## What's working

- **Headline voice is strong.** "WE NOTICED YOU NOTICING US... YOUR CART IS STILL WAITING..." is playful and on-brand. It avoids the cliché "Don't forget your cart!" framing and creates a light moment of connection.
- **Abandoned product is prominently displayed.** The Skechers Max Cushioning Arch Fit 2.0 shoe is shown clearly with its product name and image above the fold.
- **Single, unambiguous primary CTA.** "COMPLETE YOUR ORDER" is well-positioned directly below the product. No confusion about what to do.
- **Recommendation module is clean.** Four product thumbnails with names below — appropriately sized and well-organized without being cluttered.
- **Utility section is comprehensive.** Download the App, Curbside Pickup, and Find a Store are grouped logically for post-purchase or alternative-path users.

## What's weak

- **The BOGO 50% Off promotion is buried.** This is the most conversion-relevant incentive in the email and it appears roughly halfway down the page, after recommendations. A reader who bounces at the primary CTA never sees it.
- **Email is too long.** After the BOGO banner, the email continues with: a full category navigation block (Women / Men / Kids / Clothing / New Arrivals / Sale), an SMS opt-in module, a utility triptych (app / curbside / store), a BNPL/Klarna row, social follow links, and a dense legal footer. That is six additional modules after the promotional hook. Each one erodes urgency.
- **The "LET'S GET TEXTING" SMS module is misplaced.** In a cart recovery context, asking users to opt into a new channel is a distraction. This belongs in a welcome or post-purchase flow, not here.
- **Category navigation repeats the store's full nav.** In a cart abandonment email, sending someone back to browse is the opposite of the goal. This module actively undermines conversion.

## Recommendations

- 1. **Elevate the BOGO offer into the hero.** Move "Buy One, Get One 50% Off" directly below the abandoned product — or incorporate it into the CTA area. Frame it as the reason to act now: *Complete your order today and grab BOGO 50% Off.*
- 2. **Cut the email by 40%.** Remove or relocate: the full category nav block, the SMS opt-in module, and the Klarna row. These belong in other touchpoints.
- 3. **Add urgency signaling.** Nothing in the email communicates scarcity or time pressure. Even a lightweight "Limited stock" line under the product or a "Offer ends soon" note under the BOGO banner would help.
- 4. **Simplify the recommendation section.** Four products is fine, but add prices or a prompt like "Frequently bought with your item" to give the module purpose beyond filler.
- | Priority | Issue | Action |
- |---|---|---|
- | High | All tracking links use `http://` | Reconfigure Attentive click-tracking domain to enforce HTTPS |
- | High | Image CDN uses `http://` | Confirm image host supports HTTPS and update `src` attributes |
- | Medium | Empty `<title>` | Set to email subject or campaign name |
- | Medium | Soft hyphens in preheader padding | Replace `­` (U+00AD) with `͏` (U+034F) throughout |
- | Verify | Alt text on all `<img>` tags | Audit full HTML source |
- | Verify | Footer: physical address + unsubscribe | Audit full HTML source |
- | Verify | UTM parameters on landing pages | Resolve Attentive redirect chain for 2–3 CTAs |
- | Verify | DKIM/SPF/DMARC for msgs.skechers.com | Review raw message headers |

## Full review
### 1. Executive Summary

A competent cart abandonment email with a witty headline and a clear primary CTA, let down by excessive module stacking below the fold that dilutes urgency. The abandoned product gets proper hero treatment, but a BOGO 50% Off promotion buried mid-email creates a missed opportunity — it could be the decisive incentive to close the sale and instead feels like an afterthought.

---

### 2. Business Impact Score: **6 / 10**

Functional but not optimal. The core abandon-cart mechanics work. Revenue is being left on the table by poor promotional hierarchy and email length.

---

### 3. What's Working

- **Headline voice is strong.** "WE NOTICED YOU NOTICING US... YOUR CART IS STILL WAITING..." is playful and on-brand. It avoids the cliché "Don't forget your cart!" framing and creates a light moment of connection.
- **Abandoned product is prominently displayed.** The Skechers Max Cushioning Arch Fit 2.0 shoe is shown clearly with its product name and image above the fold.
- **Single, unambiguous primary CTA.** "COMPLETE YOUR ORDER" is well-positioned directly below the product. No confusion about what to do.
- **Recommendation module is clean.** Four product thumbnails with names below — appropriately sized and well-organized without being cluttered.
- **Utility section is comprehensive.** Download the App, Curbside Pickup, and Find a Store are grouped logically for post-purchase or alternative-path users.

---

### 4. What's Weak

- **The BOGO 50% Off promotion is buried.** This is the most conversion-relevant incentive in the email and it appears roughly halfway down the page, after recommendations. A reader who bounces at the primary CTA never sees it.
- **Email is too long.** After the BOGO banner, the email continues with: a full category navigation block (Women / Men / Kids / Clothing / New Arrivals / Sale), an SMS opt-in module, a utility triptych (app / curbside / store), a BNPL/Klarna row, social follow links, and a dense legal footer. That is six additional modules after the promotional hook. Each one erodes urgency.
- **The "LET'S GET TEXTING" SMS module is misplaced.** In a cart recovery context, asking users to opt into a new channel is a distraction. This belongs in a welcome or post-purchase flow, not here.
- **Category navigation repeats the store's full nav.** In a cart abandonment email, sending someone back to browse is the opposite of the goal. This module actively undermines conversion.

---

### 5. Recommendations

1. **Elevate the BOGO offer into the hero.** Move "Buy One, Get One 50% Off" directly below the abandoned product — or incorporate it into the CTA area. Frame it as the reason to act now: *Complete your order today and grab BOGO 50% Off.*
2. **Cut the email by 40%.** Remove or relocate: the full category nav block, the SMS opt-in module, and the Klarna row. These belong in other touchpoints.
3. **Add urgency signaling.** Nothing in the email communicates scarcity or time pressure. Even a lightweight "Limited stock" line under the product or a "Offer ends soon" note under the BOGO banner would help.
4. **Simplify the recommendation section.** Four products is fine, but add prices or a prompt like "Frequently bought with your item" to give the module purpose beyond filler.

---

### 6. Bottom Line

This email knows what it's supposed to do but undermines itself by packing in too much content. The BOGO offer is a genuine conversion lever that is squandered by placement. Trimming the lower half and pulling the promotion up would meaningfully improve click-to-purchase rates with no new creative required.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Cart abandonment recovery — single abandoned item, recovery CTA |
| **Hero / primary value prop** | "WE NOTICED YOU NOTICING US... YOUR CART IS STILL WAITING..." — playful, effective hook; product image + "COMPLETE YOUR ORDER" CTA well executed |
| **Membership / benefits** | None visible |
| **Product recommendations** | 4-item grid labeled "HERE'S SOME GREAT OPTIONS WE THINK YOU'LL LOVE" — "SHOP ALL BEST SELLERS" CTA below; functional, no pricing shown |
| **Promotional module** | "Buy One, Get One 50% Off" banner — high-value offer, low-visibility placement |
| **Utility / secondary modules** | SMS opt-in, App download, Curbside Pickup, Find a Store, Shop Now Pay Later (Klarna), Social follow — all present; collectively over-long |
| **Visual bugs / friction** | None visible — no broken images, no overlapping text, no empty fields observed |

---

## Technical Audit

## Technical Audit — Skechers "Your Items Are Waiting!" (Cart Abandonment)
**Sender:** hello@msgs.skechers.com | **ESP:** Attentive (attentivemail.com)

---

### 1. Technical Summary
Standard table-based cart abandonment email deployed via Attentive. All click-tracking and image hosting uses HTTP rather than HTTPS, creating mixed-content and security exposure. HTML is truncated so footer compliance elements (unsubscribe, physical address) cannot be fully verified.

---

### 2. Link & Tracking Issues

**HTTP click-tracking URLs (critical)**
Every tracked link routes through `http://skechers.attentivemail.com/ls/click?upn=...` — unencrypted. Examples:
- Web version link: `http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor...`
- Logo link: `http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor...O48M_...`

All redirect hops should use `https://`. HTTP tracking exposes subscriber click data in transit and can trigger browser/client security warnings.

**HTTP image hosting**
Image `src` begins with `http://image.emails.ske...` (truncated). If hosted on plain HTTP, Gmail and modern clients will block or warn on insecure images.

**UTM parameters not inspectable**
Destination URLs are fully encoded inside Attentive's `upn=` payload. Cannot confirm UTM parameters are present without decoding — see Section 6.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**
```html
<title></title>
```
Blank title surfaces as untitled in browser-based webmail tabs and screen readers. Should contain a descriptive string (e.g., the email subject).

**Preheader padding technique**
Uses mixed Unicode padding characters — zero-width non-joiners (`͏` U+034F) followed by soft hyphens (`­` U+00AD). Soft hyphens are processed as word-break hints by some screen readers and may cause unexpected spoken output. Recommend using only U+034F or a single consistent padding character.

**Responsive CSS coverage**
Media query targets `max-width:620px`. Row-level overrides (`row-20`, `row-21`, `row-23`) are present, indicating intentional per-row mobile tuning — no structural issue, but column padding asymmetry in `.row-21` (`padding:28px 3px 0` vs `28px 6px 3px`) may cause visual misalignment on narrow viewports if product images are full-bleed.

**Alt text on images**
Cannot confirm — HTML is truncated before `img` `alt` attributes are visible. Must be verified in full source.

---

### 4. Personalization & Merge Tokens

No unrendered or broken merge tokens visible in the provided HTML segment. Subject line ("Your Items Are Waiting!") contains no first-name or cart-item token. Whether abandoned cart items are dynamically injected lower in the email cannot be confirmed from truncated source.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot confirm from truncated source:**
- Physical mailing address (required by CAN-SPAM §5(a)(5))
- Unsubscribe mechanism and one-click processing (CAN-SPAM §5(a)(3), LIST-UNSUBSCRIBE header)

The HTML cuts off before the footer. These must be verified in the full source. Attentive typically injects both automatically, but sender-side confirmation is required.

**Authentication headers not provided** — DKIM, SPF, and DMARC alignment for `msgs.skechers.com` cannot be assessed without raw email headers.

---

### 6. Email-to-Site Continuity

All destination URLs are encoded inside Attentive's `upn=` parameter and cannot be decoded from the HTML alone. The following cannot be confirmed without resolving the redirects:
- Presence of UTM campaign/source/medium parameters on landing pages
- Whether landing page matches cart abandonment context (correct product, cart state preserved)
- Whether `https://` is enforced end-to-end after the Attentive redirect

Recommend running a redirect-chain trace on at least two CTA links to confirm UTM coverage and final destination URL scheme.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | All tracking links use `http://` | Reconfigure Attentive click-tracking domain to enforce HTTPS |
| High | Image CDN uses `http://` | Confirm image host supports HTTPS and update `src` attributes |
| Medium | Empty `<title>` | Set to email subject or campaign name |
| Medium | Soft hyphens in preheader padding | Replace `­` (U+00AD) with `͏` (U+034F) throughout |
| Verify | Alt text on all `<img>` tags | Audit full HTML source |
| Verify | Footer: physical address + unsubscribe | Audit full HTML source |
| Verify | UTM parameters on landing pages | Resolve Attentive redirect chain for 2–3 CTAs |
| Verify | DKIM/SPF/DMARC for msgs.skechers.com | Review raw message headers |
## Recent history

- [[2026-03-29-everybody-wants-these-styles]] — 6/10 (2026-03-29)
- [[2026-03-29-did-you-forget-something]] — 6/10 (2026-03-28)
- [[2026-03-29-back-to-the-70s-with-handball-spezial]] — 4/10 (2026-03-28)

