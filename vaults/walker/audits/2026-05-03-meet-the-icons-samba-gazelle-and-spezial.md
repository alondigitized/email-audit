---
slug: 2026-05-03-meet-the-icons-samba-gazelle-and-spezial
type: email
date: 2026-05-03
persona: walker
score: "2/10"
sender: adidas
subject: "Meet the icons: Samba, Gazelle, and Spezial"
tags: [email, score-2, sender/adidas]
---
# Meet the icons: Samba, Gazelle, and Spezial
**Score:** 2/10 · **Type:** Email audit · **2026-05-03**
## Executive summary

- **From:** adidas | **Subject:** Meet the icons: Samba, Gazelle, and Spezial
- Wrong brand, wrong shoe, wrong message. I didn't sign up for adidas emails to be told about soccer culture from the 1970s. These are lace-up fashion sneakers for people half my age who follow streetwear trends. I can't tell what any of them cost, there's no deal, and nothing in this email suggests adidas knows a single thing about me. I scrolled to the bottom looking for a reason to care and never found one.

## What's working

- **Simple layout loads clean on a phone.** Three thumbnails stacked on the left, one big product shot on the right — easy enough to take in without squinting.
- **The red Samba hero image is eye-catching.** That's a bold shoe. At least it pops on the screen.
- **"SHOP NOW" button is obvious.** I know where to tap if I wanted to. I don't, but at least it's clear.

## What's weak

- **This is an adidas email. I'm a Skechers guy.** Even if I'm in their database somehow, the content has nothing to do with how I shop or what I buy.
- **No price anywhere.** I'm price-conscious. If you're not going to tell me what something costs, why am I here?
- **No offer, no discount, no "members get X."** Nothing to justify opening my wallet.
- **"Retro soccer culture, from the stands to the streets."** I'm 62. I don't follow soccer culture. This copy was written for someone else entirely.
- **Spezial? Gazelle? Samba?** One of those I vaguely recognize. The other two sound like car models. No context is given on why I should care about the difference.
- **These are lace-up shoes.** I wear Slip-ins. My knees don't love bending down. Not once does this email mention comfort, cushioning, or ease of wear.
- **Nothing below the product photos.** The body copy is one sentence and then the footer. The email just… stops.
- **Treated like a stranger.** No name, no "welcome back," no acknowledgment that I might have bought from them before.

## Recommendations

- 1. **If you're going to email me, give me a reason.** A 15% off code, a members-only access window, something. Don't send a catalog page with no offer.
- 2. **Lead with comfort, not culture.** I don't care that these come from "soccer culture." Tell me if they're comfortable to walk in all day.
- 3. **Show me the price.** Even a "starting at $XX" line would help me decide in 2 seconds if this is worth my time.
- 4. **One shoe at a time.** Three models shoved into one email with no explanation of what makes each one different is just noise.
- 5. **Tell me my name.** "Hi Walker" goes a long way with someone my age. It means you know me.
- | Priority | Action |
- |----------|--------|
- | P0 | Fix or re-register the broken `dv.adidas.com/o/28b6451a...` destination URL in ESP campaign config before send. |
- | P0 | Add a non-empty `text/plain` MIME part (minimum: plain-text product names + unsubscribe URL). |
- | P1 | Upgrade all 6 instances of `http://image.link.adidas.com/...b0c011a2...` to HTTPS. |
- | P1 | Upgrade the open-tracking pixel to HTTPS to preserve open-rate data accuracy. |
- | P2 | Add `alt=""` to the `dv.adidas.com` image and the open-tracking pixel (empty string is correct for decorative/tracking elements). |
- | P3 | Fix `<meta content="text/html; charset=UTF-8" />` → add `http-equiv="Content-Type"`. |
- | P3 | Consolidate duplicate `@font-face` blocks into a single `<style>` declaration. |

## Full review
---

## Email Review — Walker Miles, 62, Boomer Male
**From:** adidas | **Subject:** Meet the icons: Samba, Gazelle, and Spezial

---

### 1. Executive Summary

Wrong brand, wrong shoe, wrong message. I didn't sign up for adidas emails to be told about soccer culture from the 1970s. These are lace-up fashion sneakers for people half my age who follow streetwear trends. I can't tell what any of them cost, there's no deal, and nothing in this email suggests adidas knows a single thing about me. I scrolled to the bottom looking for a reason to care and never found one.

---

### 2. Business Impact Score

**2/10**

Zero offer, zero personalization, zero comfort messaging. This email does little more than exist.

---

### 3. What's Working

- **Simple layout loads clean on a phone.** Three thumbnails stacked on the left, one big product shot on the right — easy enough to take in without squinting.
- **The red Samba hero image is eye-catching.** That's a bold shoe. At least it pops on the screen.
- **"SHOP NOW" button is obvious.** I know where to tap if I wanted to. I don't, but at least it's clear.

---

### 4. What's Weak

- **This is an adidas email. I'm a Skechers guy.** Even if I'm in their database somehow, the content has nothing to do with how I shop or what I buy.
- **No price anywhere.** I'm price-conscious. If you're not going to tell me what something costs, why am I here?
- **No offer, no discount, no "members get X."** Nothing to justify opening my wallet.
- **"Retro soccer culture, from the stands to the streets."** I'm 62. I don't follow soccer culture. This copy was written for someone else entirely.
- **Spezial? Gazelle? Samba?** One of those I vaguely recognize. The other two sound like car models. No context is given on why I should care about the difference.
- **These are lace-up shoes.** I wear Slip-ins. My knees don't love bending down. Not once does this email mention comfort, cushioning, or ease of wear.
- **Nothing below the product photos.** The body copy is one sentence and then the footer. The email just… stops.
- **Treated like a stranger.** No name, no "welcome back," no acknowledgment that I might have bought from them before.

---

### 5. Recommendations

1. **If you're going to email me, give me a reason.** A 15% off code, a members-only access window, something. Don't send a catalog page with no offer.
2. **Lead with comfort, not culture.** I don't care that these come from "soccer culture." Tell me if they're comfortable to walk in all day.
3. **Show me the price.** Even a "starting at $XX" line would help me decide in 2 seconds if this is worth my time.
4. **One shoe at a time.** Three models shoved into one email with no explanation of what makes each one different is just noise.
5. **Tell me my name.** "Hi Walker" goes a long way with someone my age. It means you know me.

---

### 6. Bottom Line

This email landed in my inbox and I have no idea why. I didn't ask for adidas news. Nothing here speaks to how I shop, what I look for in a shoe, or what would make me pull out my card. I'd delete it in under 10 seconds and not think about it again.

---

### 7. Subject Line Analysis

- **Subject:** `Meet the icons: Samba, Gazelle, and Spezial`
- **Length:** 43 characters
- **Scores (1-10):** Clarity `6`, Curiosity `4`, Personalization `1`, Urgency `1`, Specificity `7`
- **Strengths:**
  - Names the products directly — no guessing what the email is about
  - Short enough to fully display on a phone screen
- **Weaknesses:**
  - "Icons" assumes I already care; gives me no reason to open if I don't know these models
  - Zero urgency, zero offer signal — feels like a press release, not a reason to shop
- **Alt A:** `Walker, your next classic is here — Samba, Gazelle, Spezial`
- **Alt B:** `The shoe that's everywhere right now — and why it's worth it`

---

### 8. Preview Text Analysis

- **Preview:** `Retro soccer culture, reimagined for everyday wear.`
- **Length:** 51 characters
- **Scores (1-10):** Complements subject `6`, Specificity `5`, Clarity `7`, Inbox-fit `5`
- **Strengths:**
  - Clean sentence, renders fully on mobile without truncation
  - "Everyday wear" is the right pivot — at least it gestures toward practical use
- **Weaknesses:**
  - "Retro soccer culture" is a complete turn-off for a 62-year-old who doesn't follow soccer — it narrows the audience instead of expanding it
  - Doesn't give me a functional reason to open (no offer, no benefit, no curiosity gap)
- **Alt A:** `Classic style that actually holds up — find your fit today`
- **Alt B:** `Samba, Gazelle, Spezial — comfort-tested, street-ready`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `2/10`
- **Rationale:** adidas isn't my brand — I'm a Skechers Plus member — and "Meet the icons: Samba, Gazelle, and Spezial" tells me nothing that would make me curious. "Soccer culture" in the preview text actively pushes me away. I'd see this in my inbox next to a dozen other promotional emails and swipe past it without a second look.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `1/10`
- **Rationale:** Even if I somehow opened it, there's no price, no deal, and the products are lace-up fashion sneakers — the exact opposite of the easy, slip-on comfort I shop for. The "SHOP NOW" button is visible, but I have no motivation to tap it. Nothing in this email was built for me.

---

### 11. Evidence

- **Overall purpose:** Brand/product awareness for three heritage adidas sneaker silhouettes — Samba, Gazelle, and Spezial.
- **Hero / primary value prop:** "3-STRIPES CLASSICS" with a large red Samba image and a single line of body copy: *"Iconic style starts with the classics. Spezial, Gazelle, and Samba sneakers bring timeless soccer culture from the stands to the streets."* No price, no offer.
- **Membership / benefits section:** None visible.
- **Product discoverability / recommendation modules:** A three-thumbnail left column (one shoe per row) and one dominant hero product image on the right. No labels, no prices, no descriptions attached to the thumbnails.
- **Utility / secondary modules:** Footer with My Account, Privacy Statement, Support, Unsubscribe, adidas.com/us links. Standard legal copy. "Stories, Styles and Sportswear at adidas, Since 1949" tagline above footer links.
- **Bugs / friction / clarity issues:** The three left-column thumbnails have no product names, prices, or labels beneath them — just images. A shopper unfamiliar with these silhouettes has no way to tell which is which or what any of them cost. The large white space between the body copy and the footer feels like something is missing — possibly a CTA block or a second product row that didn't render.

---

## Technical Audit

## Technical Audit — adidas "Meet the icons: Samba, Gazelle, and Spezial"

---

### 1. Technical Summary

Two confirmed hard failures: one broken destination link and a missing plain-text MIME part. Eight HTTP (non-HTTPS) image sources and two images without alt text are the secondary risk surface.

---

### 2. Link & Tracking Issues

**FAIL — Broken click destination**
The QA probe returned `unknown url type: '/g/...'` for the following resolved URL:
```
https://dv.adidas.com/o/28b6451a-f0e8-4792-a1e1-7a73600cb079?cp_tp=v3.eJzj...
```
The click-redirect chain resolves to a `/g/` path on `dv.adidas.com` that the HTTP client cannot interpret. Recipients who click this link land on an error. The wrapping click-tracker URL is:
```
https://dv.adidas.com/o/28b6451a-...&mi_mid=019deb59-6e80-7000-baf7-bfeed22451b5
```
Root cause is likely a malformed or expired destination URL registered in the ESP campaign config.

**INFO — 32 tracking links not probed**
All click-redirect domains (`dv.adidas.com`, `click.comms.adidas.com`) were skipped by the HTTP probe. These cannot be confirmed live from this audit; spot-check recommended pre-send.

---

### 3. Rendering & Accessibility

**WARN — 6× HTTP image source (arrow asset)**
`b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` is served over plain HTTP on every instance it appears:
```
http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```
Clients with mixed-content blocking (Gmail Android, Outlook 2019+, iOS 16+) will suppress this image entirely. The same asset is referenced 6 times — all instances are affected.

**WARN — HTTP open-tracking pixel**
```
http://click.comms.adidas.com/CI0/0102019deb986109-76b70936-7e6f-4e0b-93e2-fc010551e371-000000/gq8tO-...
```
Open-tracking pixel served over HTTP. Mixed-content blocking will suppress it, skewing open-rate metrics.

**WARN — 2 images missing `alt` text**
- `dv.adidas.com` image (`28b6451a-f0e8-4792-a1e1-7a73600cb079`) — no `alt` attribute
- `click.comms.adidas.com` open-tracking pixel — no `alt` attribute

Images without `alt` are invisible to screen readers and display blank boxes in image-blocked environments.

**Minor — Duplicate `@font-face` declarations**
`AdihausDIN` (400, 700) and `AdineuePRO` (400, 600) are declared identically across two separate `<style>` blocks. No rendering breakage, but adds ~500 bytes of redundant CSS parsed on every render.

**Minor — Malformed `<meta charset>` tag**
```html
<meta content="text/html; charset=UTF-8" />
```
Missing the required `http-equiv="Content-Type"` attribute. The correct form is:
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```
Without `http-equiv`, some older Outlook and Lotus Notes clients may not apply the charset declaration.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the available HTML. Cannot confirm full-document state from the truncated source — verify in ESP preview before send.

---

### 5. Compliance

**FAIL — Plain-text MIME part absent**
QA reports `Text version is 0 chars`. CAN-SPAM and CASL require a readable text alternative in multipart/alternative messages. A zero-length text part also increases spam filter scoring with SpamAssassin and Postmark's scoring engine.

**PASS — ROBOTS/referrer meta tags present**
```html
<meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />
<meta name="referrer" content="no-referrer" />
```
Both present and correct.

Unsubscribe link and physical mailing address could not be confirmed from the truncated HTML — verify footer is intact in the full document.

---

### 6. Email-to-Site Continuity

The broken `/g/` destination (Section 2) is the only confirmed landing-page failure. UTM parameter coverage across the 32 tracked links cannot be verified from this audit — recommend a pre-send link audit via the ESP's link validator to confirm all destinations carry `utm_source=email&utm_medium=email&utm_campaign=...` as expected.

---

### 7. Recommendations

| Priority | Action |
|----------|--------|
| P0 | Fix or re-register the broken `dv.adidas.com/o/28b6451a...` destination URL in ESP campaign config before send. |
| P0 | Add a non-empty `text/plain` MIME part (minimum: plain-text product names + unsubscribe URL). |
| P1 | Upgrade all 6 instances of `http://image.link.adidas.com/...b0c011a2...` to HTTPS. |
| P1 | Upgrade the open-tracking pixel to HTTPS to preserve open-rate data accuracy. |
| P2 | Add `alt=""` to the `dv.adidas.com` image and the open-tracking pixel (empty string is correct for decorative/tracking elements). |
| P3 | Fix `<meta content="text/html; charset=UTF-8" />` → add `http-equiv="Content-Type"`. |
| P3 | Consolidate duplicate `@font-face` blocks into a single `<style>` declaration. |
## Recent history

- [[2026-05-02-new-for-the-season-color-refresh]] — 2/10 (2026-05-02)
- [[2026-05-02-this-is-your-glow-moment]] — 3/10 (2026-05-02)
- [[2026-05-02-famous-at-your-fingertips]] — 4/10 (2026-05-02)

