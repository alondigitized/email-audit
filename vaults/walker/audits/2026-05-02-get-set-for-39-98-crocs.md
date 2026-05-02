---
slug: 2026-05-02-get-set-for-39-98-crocs
type: email
date: 2026-05-02
persona: walker
score: "2/10"
sender: Shoe Carnival
subject: "Get Set for 🌞: $39.98 Crocs"
tags: [email, score-2, sender/shoe-carnival]
---
# Get Set for 🌞: $39.98 Crocs
**Score:** 2/10 · **Type:** Email audit · **2026-05-02**
## Executive summary

- Wrong store, wrong shoes, wrong customer. This is a Shoe Carnival email — not Skechers — and it leads hard on Crocs sandals at $39.98. Everything I can see on screen is aimed at women and kids: women's strappy sandals, kids' jibbitz, a Mother's Day coupon. I'm a 62-year-old guy who shops for slip-ins and comfort tech at Skechers. This email missed me by a mile. I wouldn't click, I wouldn't forward it, and I'd probably unsubscribe if these kept coming.

## What's working

- **Price is front and center.** "$39.98" in big type at the top — I see it instantly, no hunting around.
- **Crocs brand is recognizable.** Even if I don't wear them myself, I know the name. If I were buying a gift for my wife or granddaughter, that brand trust would matter.
- **Barcode at the bottom** is a smart touch for in-store redemption — no printing required if I've got the phone with me.

## What's weak

- **Zero men's content.** Every product image I can see is a women's style. I scrolled through the whole thing and there's not a single shoe that looks like it's meant for me.
- **Mother's Day angle.** The "$20 off $99.98+" coupon is tied to "Celebrate Mom." Could be useful if I'm buying a gift, but it's buried below the fold after a BOGO I also can't use.
- **BOGO is Women's & Kids' only.** Spelled out right there — "BOGO Free Women's & Kids' Sandals." That's not me.
- **Preview text is a disaster.** A raw tracking URL in the inbox preview. That looked like spam before I even opened it.
- **Layout is long and cramped on a phone.** Small product images stacked in a grid, tiny labels under each one. I'd need to zoom in to read what half those shoes are called.
- **Not personalized at all.** No use of my name, no nod to my purchase history, treated me like a total stranger.

## Recommendations

- 1. **Don't send women's-only emails to men.** Segment by gender or at minimum include one men's section. Even one Crocs men's sandal block would've changed my read entirely.
- 2. **Kill the raw URL preheader.** Fix whatever's broken in the preview text setup — a tracking URL as the first thing I see in my inbox is a red flag.
- 3. **Lead the Mother's Day angle separately if that's the pitch.** If this is a "buy for Mom" email, say so in the subject and frame the whole thing as a gifting email. Don't bury it under product grids.
- 4. **Bigger product labels.** On a phone, I shouldn't have to pinch-zoom to read a shoe name.
- | Priority | Action |
- |---|---|
- | **P0** | Strip the U+200B character from the `SCA_20260502_bogof_crocs_AM` tracking URL before send. Locate the template source where this CTA is rendered and sanitize. |
- | **P1** | Verify `[UNIQUE]` token in the open-pixel URL resolves at ESP send time; if QA runs post-substitution, adjust QA pipeline to test against a rendered preview, not raw template. |
- | **P1** | Add descriptive `alt` text to all 5 product images; set `alt=""` on both tracking pixels. |
- | **P2** | Confirm CAN-SPAM physical address and functioning unsubscribe link are present in the full HTML. |
- | **P2** | Confirm `utm_source` and `utm_medium` are appended to all redirect destinations. |

## Full review
---

## 1. Executive Summary

Wrong store, wrong shoes, wrong customer. This is a Shoe Carnival email — not Skechers — and it leads hard on Crocs sandals at $39.98. Everything I can see on screen is aimed at women and kids: women's strappy sandals, kids' jibbitz, a Mother's Day coupon. I'm a 62-year-old guy who shops for slip-ins and comfort tech at Skechers. This email missed me by a mile. I wouldn't click, I wouldn't forward it, and I'd probably unsubscribe if these kept coming.

---

## 2. Business Impact Score

**2 / 10**

Nearly zero relevance to my profile. The offer is real and the price point is clear, but it's not for me.

---

## 3. What's Working

- **Price is front and center.** "$39.98" in big type at the top — I see it instantly, no hunting around.
- **Crocs brand is recognizable.** Even if I don't wear them myself, I know the name. If I were buying a gift for my wife or granddaughter, that brand trust would matter.
- **Barcode at the bottom** is a smart touch for in-store redemption — no printing required if I've got the phone with me.

---

## 4. What's Weak

- **Zero men's content.** Every product image I can see is a women's style. I scrolled through the whole thing and there's not a single shoe that looks like it's meant for me.
- **Mother's Day angle.** The "$20 off $99.98+" coupon is tied to "Celebrate Mom." Could be useful if I'm buying a gift, but it's buried below the fold after a BOGO I also can't use.
- **BOGO is Women's & Kids' only.** Spelled out right there — "BOGO Free Women's & Kids' Sandals." That's not me.
- **Preview text is a disaster.** A raw tracking URL in the inbox preview. That looked like spam before I even opened it.
- **Layout is long and cramped on a phone.** Small product images stacked in a grid, tiny labels under each one. I'd need to zoom in to read what half those shoes are called.
- **Not personalized at all.** No use of my name, no nod to my purchase history, treated me like a total stranger.

---

## 5. Recommendations

1. **Don't send women's-only emails to men.** Segment by gender or at minimum include one men's section. Even one Crocs men's sandal block would've changed my read entirely.
2. **Kill the raw URL preheader.** Fix whatever's broken in the preview text setup — a tracking URL as the first thing I see in my inbox is a red flag.
3. **Lead the Mother's Day angle separately if that's the pitch.** If this is a "buy for Mom" email, say so in the subject and frame the whole thing as a gifting email. Don't bury it under product grids.
4. **Bigger product labels.** On a phone, I shouldn't have to pinch-zoom to read a shoe name.

---

## 6. Bottom Line

This email wasn't made for me. It's a Shoe Carnival promotion for women's Crocs and a Mother's Day deal — both valid offers, just not aimed at a 62-year-old man browsing comfort footwear. If I open this in my inbox I'm closing it in about four seconds. The only reason I'd keep it is to show my wife the BOGO deal.

---

## 7. Subject Line Analysis

- **Subject:** `Get Set for 🌞: $39.98 Crocs`
- **Length:** 28 characters (excluding emoji rendering)
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `1`, Urgency `3`, Specificity `7`
- **Strengths:**
  - Price is baked right into the subject — I know exactly what the deal is
  - Short and readable, doesn't get cut off on mobile
- **Weaknesses:**
  - The sun emoji tells me nothing — summer vibes, sure, but so what?
  - No gender signal, no "for her," no "gift for Mom" — I opened expecting something for me
- **Alt A:** `$39.98 Crocs for Her — Perfect Mother's Day Gift`
- **Alt B:** `BOGO Crocs Sandals — Women's & Kids' Styles from $39.98`

---

## 8. Preview Text Analysis

- **Preview:** `Shoe Carnival https://click.email.shoecarnival.com/?qs=ABB7InYiOjEsImQiOjQ4NjR9AAwAAAAAAGaVwGe8SiektXqktyKDngb8VTHMbUS1TFtVZ-4iyfWR3FC_b_v-7AHVvp-5h77BCitgvBFQHbJy95D2Ai8RjJNxaU4IjN`
- **Length:** Way too long — a raw tracking URL is dominating the preview
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None. There are no strengths here.
- **Weaknesses:**
  - A raw tracking URL leaked as the preheader — looks like a phishing email before I even open it
  - Zero merchandising value; completely wastes the preview pane
- **Alt A:** `BOGO Free women's & kids' sandals — plus save $20 for Mom this weekend`
- **Alt B:** `Crocs starting at $39.98 + BOGO Free this week only at Shoe Carnival`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `2/10`
- **Rationale:** The subject mentions Crocs and a price — fine, I know the brand — but that preview text looks like a scam link and I almost didn't open it. I don't shop Shoe Carnival regularly and nothing in the subject told me this was relevant to a guy my age.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `1/10`
- **Rationale:** Everything inside the email is women's and kids' product. The BOGO is explicitly labeled Women's & Kids'. I have no path to click anything that's meant for me. If I wanted to buy something for my wife I might tap the BOGO banner, but even then I'd just go to the store — I'm not buying women's sandals online blind.

---

## 11. Evidence

- **Overall purpose:** Promote Crocs sandals at $39.98 and drive traffic with a BOGO on women's and kids' styles, plus a Mother's Day coupon.
- **Hero / primary value proposition:** "Crocs Sandals Sale — Starting at $39.98" in bold type at top. Clear price, clear brand.
- **Membership / benefits section:** None visible. No loyalty points, no member pricing, nothing that makes me feel like a known customer.
- **Product discoverability / recommendation modules:** A 2-column grid of women's Crocs styles — Getaway Strappy, Getaway Platform Flip, Brooklyn Woven, etc. All women's. One lifestyle block ("Set for Sun") with a woman at the beach. A kids' Jibbitz block below that.
- **Utility / secondary modules:** BOGO Free banner (Women's & Kids' only), $20 off $99.98+ Mother's Day coupon with online code WELOVEMOM, in-store barcode, social icons, footer unsubscribe links.
- **Bugs / friction / clarity issues:** The only visible problem is the preheader — a raw tracking URL appears in the inbox preview pane, which looks broken and suspicious before even opening the email.

---

## Technical Audit

## Technical Audit — Shoe Carnival: "Get Set for 🌞: $39.98 Crocs"

---

### 1. Technical Summary

One confirmed broken link due to a zero-width space character embedded in a tracking URL will silently fail for all recipients who click it. Six product images and one content image are missing `alt` attributes, impacting screen reader users and image-blocked rendering.

---

### 2. Link & Tracking Issues

**CRITICAL — Zero-width space in tracking URL**

The QA pipeline reports a link error:
```
'ascii' codec can't encode character '\u200b' in position 74
URL: https://ieezzy5m.emltrk.com/v2/ieezzy5m?rd&i=72180589&t=utm_campaign=SCA_20260502_bogof_crocs_AM​
```
A U+200B ZERO WIDTH SPACE is appended at position 74 (after `...bogof_crocs_AM`). This character is invisible in editors but will corrupt the URL at the HTTP level — the redirect will fail or land on an error page for any recipient who clicks the affected CTA. Identify which CTA in the template renders this tracking wrapper and strip the character from the source template.

**INFO — 29 tracking links not probed**

All click-redirect domains (`ieezzy5m.emltrk.com`, etc.) were skipped by the HTTP probe. This is expected behavior. No action required, but destination URLs should be spot-checked manually before send for high-traffic campaigns.

---

### 3. Rendering & Accessibility

**Images missing `alt` text — 7 instances**

| Image | src (truncated) |
|---|---|
| Product (158256) | `amplience.net/s/scvl/158256_345625_SET/1` |
| Product (179082) | `amplience.net/s/scvl/179082_394456_SET/1` |
| Product (177927) | `amplience.net/s/scvl/177927_391861_SET/1` |
| Product (161317) | `amplience.net/s/scvl/161317_353675_SET/1` |
| Content image | `image.email.shoecarnival.com/…/d06be110…jpg` |
| Tracking pixel | `ieezzy5m.emltrk.com/…?i=72180589&t=…` |
| Tracking pixel | `0di86k1v.emltrk.com/…?d=[UNIQUE]` |

Product and content images must have descriptive `alt` text (e.g., `alt="Crocs Classic Clog — $39.98"`). Tracking pixels should use `alt=""` (empty string) to suppress screen reader output — omitting the attribute entirely is technically non-conformant.

**Dark mode — forced light only**

```html
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
```
The email explicitly opts out of dark mode. This is a deliberate choice, not a bug, but white backgrounds will invert aggressively in clients that override `light`-only declarations (e.g., Apple Mail dark mode). Note for rendering QA if dark mode complaints surface.

**DOCTYPE — HTML 4.01 Transitional**

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" ...>
```
Appropriate for broad email client compatibility. No action required.

---

### 4. Personalization & Merge Tokens

**Unresolved `[UNIQUE]` token in open-tracking pixel**

```
https://0di86k1v.emltrk.com/v2/0di86k1v?d=[UNIQUE]
```

`[UNIQUE]` appears to be an unsubstituted merge token — the ESP should replace this with a per-recipient unique identifier at send time. If this was present in the raw HTML at QA time, confirm whether the ESP substitution runs before or after QA probing. If it fires post-QA, no issue. If `[UNIQUE]` reaches recipients literally, open tracking will be broken or colliding across subscribers.

No other unresolved merge tokens detected in the truncated source.

---

### 5. Compliance

**Cannot fully verify from truncated HTML.** The following must be confirmed against the full source:

- **CAN-SPAM**: Physical mailing address block required in footer — not visible in truncated source, verify present.
- **Unsubscribe link**: One-click unsubscribe anchor required; verify it resolves correctly and is not routed through the broken tracking domain.
- **Authentication headers**: SPF/DKIM/DMARC alignment for `email.shoecarnival.com` sending domain should be verified via header inspection of a received copy — not assessable from HTML source alone.

Sender domain `shoecarnival@email.shoecarnival.com` uses a dedicated ESP subdomain, which is standard practice. No issues inferred from the source.

---

### 6. Email-to-Site Continuity

UTM parameters are present in the tracking URL:
```
utm_campaign=SCA_20260502_bogof_crocs_AM
```

The naming convention (`SCA_20260502_bogof_crocs_AM`) is parseable and date-stamped. No `utm_source` or `utm_medium` visible in the truncated tracking string — confirm the full redirect target appends `utm_source=email&utm_medium=email` or equivalent. If the zero-width-space bug (§2) corrupts this URL, UTM attribution will also be lost for that click path.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Strip the U+200B character from the `SCA_20260502_bogof_crocs_AM` tracking URL before send. Locate the template source where this CTA is rendered and sanitize. |
| **P1** | Verify `[UNIQUE]` token in the open-pixel URL resolves at ESP send time; if QA runs post-substitution, adjust QA pipeline to test against a rendered preview, not raw template. |
| **P1** | Add descriptive `alt` text to all 5 product images; set `alt=""` on both tracking pixels. |
| **P2** | Confirm CAN-SPAM physical address and functioning unsubscribe link are present in the full HTML. |
| **P2** | Confirm `utm_source` and `utm_medium` are appended to all redirect destinations. |
## Recent history

- [[2026-05-02-your-items-are-waiting]] — 6/10 (2026-05-02)
- [[2026-05-02-your-cart-expires-soon]] — 5/10 (2026-05-02)
- [[2026-05-02-summer-essentials-just-in]] — 5/10 (2026-05-02)

