---
slug: 2026-04-27-you-can-never-have-too-many
type: email
date: 2026-04-27
persona: walker
score: "2/10"
sender: Shoe Carnival
subject: You Can Never Have Too Many👡
tags: [email, score-2, sender/shoe-carnival]
---
# You Can Never Have Too Many👡
**Score:** 2/10 · **Type:** Email audit · **2026-04-27**
## Executive summary

- Wrong address. That's the first thing that crossed my mind. I'm Walker Miles — a 62-year-old guy who shops for men's slip-ins and comfort shoes — and this email is wall-to-wall women's sandals. Women's Soda Jelly-Pop, Women's Soda Brice Platform, Women's Rocket Dog Flip Flops... every single product shown is for women. There's a Crocs section that at least hints at something casual, but no men's product is visible anywhere. The BOGO Free offer on Women's & Kids' Sandals is the hero, and it's clearly not meant for me. The $10 off code at the bottom is the one thing that could have applied to anyone — but by the time I scroll there, I've already mentally checked out. Shoe Carnival sent me someone else's email.
- Essentially zero purchase intent generated. Mismatched targeting is the single biggest conversion killer for me. I don't buy women's sandals. Not for me, not as gifts. The only salvageable element is the $10-off code, but I'd have to scroll past a page of women's footwear to find it, and I'm not doing that on my phone.

## What's working

- **The BOGO offer is loud and clear.** Big yellow block, easy to read, no squinting required. I'll give them that — whatever the audience, the deal is communicated well.
- **The $10 off online code is a universal offer.** EXTRA10 on $74.98+ could work for any customer if they bothered to show me men's product alongside it.
- **Text size is readable.** I didn't need to zoom on my phone. The font is big enough.

## What's weak

- **Every product shown is women's.** Not one men's shoe in sight. I'm a Skechers Slip-ins guy browsing men's comfort — this email doesn't know I exist.
- **The subject line "You Can Never Have Too Many 👡"** — that's a high-heel emoji. I knew before I opened this that it probably wasn't for me.
- **The preview text leaked a raw tracking URL.** That's sloppy and it looks like spam. It eroded my trust before I even opened the thing.
- **No membership acknowledgment.** I'm a loyal customer. Nothing in this email treats me like a known person — no points balance, no member pricing, no "hey Walker."
- **Crocs section is vague.** "Go Light & Easy" with a woman in a sundress. Still not speaking to me.
- **Fine print overload at the bottom.** Tiny gray text on gray. I'm not reading that on my phone.

## Recommendations

- 1. **Fix the segmentation.** I should never receive a Women's & Kids' email. If they have my gender on file, use it. Show me men's sandals, casual shoes, or at minimum a mixed-gender email with a men's section.
- 2. **Retire the high-heel emoji for male segments.** The 👡 in the subject line is a giveaway — and not in a good way.
- 3. **Lead with the universal offer for cross-gender sends.** If you must send a broad email, lead with the "$10 off" and put product options below by gender.
- 4. **Fix the preheader.** A raw URL in preview is inexcusable — it looks like a phishing attempt.
- 5. **Acknowledge loyalty.** Even one line — "As a Shoe Perks member, you've earned this" — would make me feel less like a stranger.
- | Priority | Action |
- |---|---|
- | **HIGH** | Investigate why `[UNIQUE]` token was not substituted in the `0di86k1v` pixel; re-examine ESP merge pipeline for this send or re-send to affected segment |
- | **HIGH** | Pull full `Authentication-Results` headers from a delivered sample; confirm SPF+DKIM both pass for `email.shoecarnival.com` under the DMARC policy of `shoecarnival.com` |
- | **MED** | Add descriptive `alt` text to all 6 product images; set `alt=""` on both tracking pixels |
- | **MED** | Probe all 29 click-redirect URLs post-send using click-sample data; verify destination pages load and UTMs are consistent |
- | **LOW** | Rewrite plain-text part to be human-readable prose with select URLs rather than a raw HTML-to-text dump; reduces spam-signal URL density from 71% |
- | **LOW** | If dark-mode support is desired in a future send, add `prefers-color-scheme: dark` media query block with background/text overrides |

## Full review
---

## 1. Executive Summary

Wrong address. That's the first thing that crossed my mind. I'm Walker Miles — a 62-year-old guy who shops for men's slip-ins and comfort shoes — and this email is wall-to-wall women's sandals. Women's Soda Jelly-Pop, Women's Soda Brice Platform, Women's Rocket Dog Flip Flops... every single product shown is for women. There's a Crocs section that at least hints at something casual, but no men's product is visible anywhere. The BOGO Free offer on Women's & Kids' Sandals is the hero, and it's clearly not meant for me. The $10 off code at the bottom is the one thing that could have applied to anyone — but by the time I scroll there, I've already mentally checked out. Shoe Carnival sent me someone else's email.

---

## 2. Business Impact Score: 2/10

Essentially zero purchase intent generated. Mismatched targeting is the single biggest conversion killer for me. I don't buy women's sandals. Not for me, not as gifts. The only salvageable element is the $10-off code, but I'd have to scroll past a page of women's footwear to find it, and I'm not doing that on my phone.

---

## 3. What's Working

- **The BOGO offer is loud and clear.** Big yellow block, easy to read, no squinting required. I'll give them that — whatever the audience, the deal is communicated well.
- **The $10 off online code is a universal offer.** EXTRA10 on $74.98+ could work for any customer if they bothered to show me men's product alongside it.
- **Text size is readable.** I didn't need to zoom on my phone. The font is big enough.

---

## 4. What's Weak

- **Every product shown is women's.** Not one men's shoe in sight. I'm a Skechers Slip-ins guy browsing men's comfort — this email doesn't know I exist.
- **The subject line "You Can Never Have Too Many 👡"** — that's a high-heel emoji. I knew before I opened this that it probably wasn't for me.
- **The preview text leaked a raw tracking URL.** That's sloppy and it looks like spam. It eroded my trust before I even opened the thing.
- **No membership acknowledgment.** I'm a loyal customer. Nothing in this email treats me like a known person — no points balance, no member pricing, no "hey Walker."
- **Crocs section is vague.** "Go Light & Easy" with a woman in a sundress. Still not speaking to me.
- **Fine print overload at the bottom.** Tiny gray text on gray. I'm not reading that on my phone.

---

## 5. Recommendations

1. **Fix the segmentation.** I should never receive a Women's & Kids' email. If they have my gender on file, use it. Show me men's sandals, casual shoes, or at minimum a mixed-gender email with a men's section.
2. **Retire the high-heel emoji for male segments.** The 👡 in the subject line is a giveaway — and not in a good way.
3. **Lead with the universal offer for cross-gender sends.** If you must send a broad email, lead with the "$10 off" and put product options below by gender.
4. **Fix the preheader.** A raw URL in preview is inexcusable — it looks like a phishing attempt.
5. **Acknowledge loyalty.** Even one line — "As a Shoe Perks member, you've earned this" — would make me feel less like a stranger.

---

## 6. Bottom Line

I closed this email in about four seconds. Wrong shoes, wrong vibe, broken preview text. The BOGO deal and $10 code are genuinely solid offers — just aimed at the wrong person. If Shoe Carnival wants my click, show me men's comfort shoes and use my name. Until then, this goes straight to the trash.

---

## 7. Subject Line Analysis

- **Subject:** `You Can Never Have Too Many👡`
- **Length:** 30 characters
- **Scores (1-10):** Clarity `5`, Curiosity `4`, Personalization `1`, Urgency `2`, Specificity `2`
- **Strengths:**
  - Short and punchy — reads clean on a phone lock screen
  - Playful tone might resonate with the intended (female) audience
- **Weaknesses:**
  - High-heel emoji signals women's content immediately — alienates male recipients before they open
  - Zero specificity: no mention of the deal, the brand, or why I should care today
- **Alt A:** `BOGO Free Sandals — This Weekend Only`
- **Alt B:** `Walker, Your $10 Off Code Is Inside`

---

## 8. Preview Text Analysis

- **Preview:** `Shoe Carnival https://click.email.shoecarnival.com/?qs=ABB7InYiOjEsImQiOjQ4NTl9AAwAAAAAAEj69GaiKzCCZy2bpiONZ-QkSWd4gtQh5tI_xDUvOO7KE_m39ob25nJHTfEbPL1RXgCDKOK9wzORXbqiYC2IaOd6XK8-o2`
- **Length:** ~180+ characters (raw URL dominates)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None. The brand name "Shoe Carnival" at least identifies the sender
- **Weaknesses:**
  - Raw tracking URL leaked as preview text — looks exactly like a phishing link
  - Wastes the entire preheader real estate; zero message is communicated
- **Alt A:** `BOGO Free on Women's & Kids' Sandals — Plus $10 off your next order.`
- **Alt B:** `Spring sandals are here. Shop the BOGO deal + save $10 with code EXTRA10.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `2/10`
- **Rationale:** The 👡 emoji in the subject combined with a raw URL preview text told me this wasn't for me before I even tapped. I opened it only because I had to for this review — in real life, this goes unread or deleted on the spot.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `1/10`
- **Rationale:** Every product I can see is women's footwear. The $10-off code near the bottom is the only thing I'd theoretically use, but I'd have to scroll through an entire women's sandal catalog to find it — and I'm not doing that on my phone.

---

## 11. Evidence

- **Overall purpose:** Drive BOGO Free purchases on Women's & Kids' sandals with a secondary $10-off incentive (code EXTRA10, $74.98+ threshold)
- **Hero / primary value proposition:** Large "BOGO FREE — Women's & Kids' Sandals" banner in yellow/blue; clear and bold, but entirely women's-targeted
- **Membership / benefits section:** Banner at top mentions "Shoe Perks" points and a sign-up prompt, but it's small and not personalized — treated as a stranger
- **Product discoverability / recommendation modules:** Six women's sandal tiles (Soda Pedi-B, Rocket Dog Sunset, JellyPop, Soda Brice Platform, Soda Topic Platform, Soda Marley Wedge) — all women's, zero men's
- **Utility / secondary modules:** Crocs "Go Light & Easy" section with a female model; $10 off online code block at bottom
- **Bugs / friction / clarity issues:** Preview text is a fully exposed tracking URL — visible in the inbox before opening, creating a spam/phishing appearance. No men's product anywhere in the render.

---

## Technical Audit

## Technical Audit — Shoe Carnival "You Can Never Have Too Many" (2026-04-27)

---

### 1. Technical Summary

Standard table-based HTML email using HTML 4.01 Transitional doctype with three responsive breakpoint blocks (`≤320px`, `≤450px`, `≤660px`). One unresolved merge token confirmed in a live tracking pixel URL; SPF/DKIM relay authentication is unverifiable from the captured headers.

---

### 2. Link & Tracking Issues

**[HIGH] Unresolved `[UNIQUE]` merge token in tracking pixel**
The open-tracking pixel URL contains a literal unfired substitution token:
```
https://0di86k1v.emltrk.com/v2/0di86k1v?d=[UNIQUE]
```
`[UNIQUE]` was not replaced at send time. This will cause open-tracking to fail for any recipient receiving this unfired variant — opens will either not register or will collide under a single null key depending on the ESP's fallback behavior.

**[WARN] 29 click-tracking links not probe-verified**
All click URLs pass through a redirect domain and were skipped by the HTTP prober. Destination URLs and final redirect chains are unconfirmed. If any destination URL is broken or returns a non-200, it will not surface until recipient click data shows drop-off.

**[WARN] Plain-text body is 71% URLs (5,923 / 8,320 chars)**
This exceeds typical spam-filter thresholds (>60% URL density in plain-text is a known Spamhaus/SA signal). The plain-text part appears to be auto-generated from the HTML rather than hand-crafted, leaving raw tracking URLs inline.

---

### 3. Rendering & Accessibility

**[WARN] 9 product/hero images missing `alt` text**

Affected sources include all six amplience.net product images, the hero image on `image.email.shoecarnival.com`, and both emltrk tracking pixels:
```
https://i8.amplience.net/s/scvl/186534_415639_SET/1?fmt=auto&$webPdpProduct$
https://i8.amplience.net/s/scvl/140119_297836_SET/1?fmt=auto&$webPdpProduct$
https://i8.amplience.net/s/scvl/186572_415727_SET/1?fmt=auto&$webPdpProduct$
https://i8.amplience.net/s/scvl/106172_212322_SET/1?fmt=auto&$webPdpProduct$
https://i8.amplience.net/s/scvl/102384_226223_SET/1?fmt=auto&$webPdpProduct$
https://i8.amplience.net/s/scvl/178133_392348_SET/1?fmt=auto&$webPdpProduct$
https://image.email.shoecarnival.com/lib/fe3311737164047d701077/m/1/09617974-...jpg
```
Product images should carry descriptive `alt` text (e.g., `alt="[Brand] [Style] Women's Sandal"`). Tracking pixels should carry `alt=""` (empty, not absent) to suppress screen-reader announcements.

**[INFO] `color-scheme` locked to light only**
```html
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
```
Dark-mode clients (Apple Mail, Outlook 2021+) will not invert or adapt the email. This is intentional per the meta declarations, but means dark-mode recipients see unmodified white backgrounds — confirm this is deliberate.

**[INFO] HTML 4.01 Transitional doctype**
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" ...>
```
Legacy but expected for broad ESP compatibility. No rendering defect, noted for baseline tracking.

---

### 4. Personalization & Merge Tokens

**[HIGH] `[UNIQUE]` token not resolved** — see §2 above; it appears in a tracking context, not a content context, but confirms a merge/substitution pipeline gap.

No other unresolved `{{tokens}}`, `[FNAME]`, or similar personalization placeholders detected in the visible HTML fragment.

---

### 5. Compliance

**[WARN] SPF/DKIM authentication status unverifiable**
The QA pipeline did not capture `Authentication-Results` headers from the AgentMail relay. SPF and DKIM pass/fail status for `shoecarnival@email.shoecarnival.com` is unknown. Sending domain alignment (`email.shoecarnival.com` vs. `shoecarnival.com`) should be verified in DMARC policy.

CAN-SPAM: Unsubscribe link presence and physical mailing address were not directly auditable from the truncated HTML provided — these must be confirmed in the full source. The sending domain (`email.shoecarnival.com`) is a subdomain of the brand root, which is typical and compliant.

---

### 6. Email-to-Site Continuity

UTM parameters are present in at least one confirmed URL:
```
utm_campaign=SCA_20260427_bogof_crocs_AM
```
Campaign slug is date-stamped and descriptive — no continuity issue. However, because all 29 click links were unprobed, UTM consistency across all CTAs cannot be confirmed. If any link bypasses the click-redirect (e.g., a plain `mailto:` or untracked anchor), it would drop UTM attribution silently.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **HIGH** | Investigate why `[UNIQUE]` token was not substituted in the `0di86k1v` pixel; re-examine ESP merge pipeline for this send or re-send to affected segment |
| **HIGH** | Pull full `Authentication-Results` headers from a delivered sample; confirm SPF+DKIM both pass for `email.shoecarnival.com` under the DMARC policy of `shoecarnival.com` |
| **MED** | Add descriptive `alt` text to all 6 product images; set `alt=""` on both tracking pixels |
| **MED** | Probe all 29 click-redirect URLs post-send using click-sample data; verify destination pages load and UTMs are consistent |
| **LOW** | Rewrite plain-text part to be human-readable prose with select URLs rather than a raw HTML-to-text dump; reduces spam-signal URL density from 71% |
| **LOW** | If dark-mode support is desired in a future send, add `prefers-color-scheme: dark` media query block with background/text overrides |
## Recent history

- [[2026-04-27-birkenstock-essentials-for-sunny-days]] — 4/10 (2026-04-27)
- [[2026-04-27-your-cart-expires-soon]] — 6/10 (2026-04-27)
- [[2026-04-27-did-you-forget-something]] — 5/10 (2026-04-27)

