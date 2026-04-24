---
slug: 2026-04-24-fresh-friday-deals
type: email
date: 2026-04-24
persona: walker
score: "3/10"
sender: Shoe Carnival
subject: FRESH FRIDAY DEALS
tags: [email, score-3, sender/shoe-carnival]
---
# FRESH FRIDAY DEALS
**Score:** 3/10 · **Type:** Email audit · **2026-04-24**
## Executive summary

- Shoe Carnival, not Skechers. That's the first thing I noticed — wrong brand entirely. I'm a Skechers Plus member, I buy Skechers, and this email is coming from Shoe Carnival — a store I don't have any loyalty card with and barely think about. The headline shouts "FRESH FRIDAY DEALS" at me and then throws everything at the wall: women's and kids' sandals, Brooks running shoes, Jordan sneakers, pink sticker clearance. I'm a 62-year-old guy who wants comfortable slip-ons. About 15 seconds in, I realized almost nothing here was for me. There's exactly one Skechers section buried in the middle, and it's sandals — not the Slip-ins I actually buy. The coupon at the bottom is the only thing that made me pause.
- This email would not move me. One buried Skechers module with 2X points doesn't make up for an email that opens on women's and kids' sandals. If Shoe Carnival is trying to build loyalty with older male customers, this isn't the way.

## What's working

- **Skechers Sandal Sale with 2X PTS** — the little "2X PTS" badge caught my eye. I like points. That's the kind of hook that actually matters to me.
- **$10 off coupon at the bottom** — clean, simple, big enough to read. $10 off $74.98 is a real number, not some fine-print trick. I'd clip that.
- **Visual hierarchy is mostly readable** — the deal blocks are big enough that I'm not squinting too hard on my phone.

## What's weak

- **BOGO Free Women's & Kids Sandals is the hero.** I'm a 62-year-old man. This is not for me. Opening on a women's and kids' offer is a fast way to lose me before I even scroll.
- **Brooks Ghost 17 and Adrenaline GTS 24** — these are serious running shoes. I walk. I do not train for a 10K.
- **Jordan 2-3X points** — I haven't worn Jordans since... well, I never wore Jordans.
- **Pink Sticker Clearance (In-Store Only)** — I shop on my phone. In-store-only deals when you're sending me an email feel like a waste of my time.
- **The preview text was a raw tracking URL.** I almost deleted this without opening it because it looked like spam.
- **No "Men's Comfort" angle anywhere.** The whole email could have been sent to anyone. I don't feel like a known customer.

## Recommendations

- 1. **Lead with the Skechers section for known Skechers buyers** — or at minimum, lead with Men's content for men.
- 2. **Drop the women's/kids hero for male segments** — a simple segmentation fix would make this feel like it was meant for me.
- 3. **Fix the preview text** — a tracking URL as the preheader is an embarrassment that hurts open rates and looks like phishing.
- 4. **Lean into the points angle** — I'm price-conscious and loyalty-motivated. "Earn 2X Skechers Points this Friday" would have grabbed me faster than "Fresh Friday Deals."
- 5. **Cut or deprioritize in-store-only deals** — if you know I'm on mobile, show me stuff I can actually buy from my couch.
- | Priority | Action |
- |----------|--------|
- | **P0** | Strip non-ASCII / zero-width characters from all campaign token strings at template-injection time. Add a pre-send validator that ASCII-encodes the `t=` parameter before URL encoding. |
- | **P0** | Confirm `[UNIQUE]` token substitution is firing correctly in the ESP merge pipeline; add a preflight check that rejects sends containing literal `[UNIQUE]` in rendered output. |
- | **P1** | Verify `?rl&` endpoint function — if it handles unsubscribe processing, the U+200B breakage requires a hotfix or resend for CAN-SPAM compliance. |
- | **P1** | Obtain and log `Authentication-Results` headers from a delivered copy to confirm SPF/DKIM/DMARC pass state for `email.shoecarnival.com`. |
- | **P2** | Add `alt=""` (explicit empty string) to all tracking pixel `<img>` tags. Add descriptive alt text to content images (`09617974...jpg`). |
- | **P3** | Probe the 26 skipped redirect destinations for 2xx/3xx health as a post-send QA step to catch broken landing pages. |

## Full review
---

## 1. Executive Summary

Shoe Carnival, not Skechers. That's the first thing I noticed — wrong brand entirely. I'm a Skechers Plus member, I buy Skechers, and this email is coming from Shoe Carnival — a store I don't have any loyalty card with and barely think about. The headline shouts "FRESH FRIDAY DEALS" at me and then throws everything at the wall: women's and kids' sandals, Brooks running shoes, Jordan sneakers, pink sticker clearance. I'm a 62-year-old guy who wants comfortable slip-ons. About 15 seconds in, I realized almost nothing here was for me. There's exactly one Skechers section buried in the middle, and it's sandals — not the Slip-ins I actually buy. The coupon at the bottom is the only thing that made me pause.

---

## 2. Business Impact Score: 3/10

This email would not move me. One buried Skechers module with 2X points doesn't make up for an email that opens on women's and kids' sandals. If Shoe Carnival is trying to build loyalty with older male customers, this isn't the way.

---

## 3. What's Working

- **Skechers Sandal Sale with 2X PTS** — the little "2X PTS" badge caught my eye. I like points. That's the kind of hook that actually matters to me.
- **$10 off coupon at the bottom** — clean, simple, big enough to read. $10 off $74.98 is a real number, not some fine-print trick. I'd clip that.
- **Visual hierarchy is mostly readable** — the deal blocks are big enough that I'm not squinting too hard on my phone.

---

## 4. What's Weak

- **BOGO Free Women's & Kids Sandals is the hero.** I'm a 62-year-old man. This is not for me. Opening on a women's and kids' offer is a fast way to lose me before I even scroll.
- **Brooks Ghost 17 and Adrenaline GTS 24** — these are serious running shoes. I walk. I do not train for a 10K.
- **Jordan 2-3X points** — I haven't worn Jordans since... well, I never wore Jordans.
- **Pink Sticker Clearance (In-Store Only)** — I shop on my phone. In-store-only deals when you're sending me an email feel like a waste of my time.
- **The preview text was a raw tracking URL.** I almost deleted this without opening it because it looked like spam.
- **No "Men's Comfort" angle anywhere.** The whole email could have been sent to anyone. I don't feel like a known customer.

---

## 5. Recommendations

1. **Lead with the Skechers section for known Skechers buyers** — or at minimum, lead with Men's content for men.
2. **Drop the women's/kids hero for male segments** — a simple segmentation fix would make this feel like it was meant for me.
3. **Fix the preview text** — a tracking URL as the preheader is an embarrassment that hurts open rates and looks like phishing.
4. **Lean into the points angle** — I'm price-conscious and loyalty-motivated. "Earn 2X Skechers Points this Friday" would have grabbed me faster than "Fresh Friday Deals."
5. **Cut or deprioritize in-store-only deals** — if you know I'm on mobile, show me stuff I can actually buy from my couch.

---

## 6. Bottom Line

I would not click through beyond the $10 coupon, and I might have deleted this before opening if not for the Skechers name buried in the middle of the subject-line scan. This email wasn't built for me — it was built for everybody, which means it's really built for nobody. Shoe Carnival has my email but doesn't seem to know anything about me.

---

## 7. Subject Line Analysis

- **Subject:** `FRESH FRIDAY DEALS`
- **Length:** 19 characters
- **Scores (1-10):** Clarity `6`, Curiosity `3`, Personalization `1`, Urgency `4`, Specificity `2`
- **Strengths:**
  - Short and legible — no truncation risk on mobile
  - "Friday" adds a thin time peg
- **Weaknesses:**
  - Completely generic — could be any retailer, any week
  - Zero signal about what's actually on sale or who it's for
- **Alt A:** `Walker, Your Skechers 2X Points Day Is Here`
- **Alt B:** `Men's Comfort Styles Starting at $39 — Today Only`

---

## 8. Preview Text Analysis

- **Preview:** `Shoe Carnival https://click.email.shoecarnival.com/?qs=ABB7InYiOjEsImQiOjQ4NTZ9AAwAAAAAADuODQKUFFqARc8jSZYQN4K4FuUbsQNoLiXHbPMMaJNx7ymnasXDotuuYSHPgaAJgjnle7zh_I6_PimQX7JdmObFpxXxluV6Q`
- **Length:** 200+ characters (raw URL dominates)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None. The brand name appears, which is the only saving grace.
- **Weaknesses:**
  - A raw tracking URL is leaking into the preheader — this looks like spam or a broken system
  - Zero message content reaches the reader before the URL swamps everything
- **Alt A:** `Skechers sandals $39.98 + 2X points — this Friday only`
- **Alt B:** `Your $10 off coupon is inside — men's styles starting at $39`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** "FRESH FRIDAY DEALS" from Shoe Carnival tells me nothing — I'm a Skechers guy, and this doesn't feel like my brand. The preview text showing a raw URL made me think it might be junk mail. I would've opened it only because I vaguely recognized "Shoe Carnival" as a shoe store and thought there might be a coupon inside.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `2/10`
- **Rationale:** Once inside, the first thing I see is women's and kids' sandals — I kept scrolling only out of stubbornness. The Skechers sandal block with 2X points was a flicker of interest, but I don't need sandals right now, and nothing on the screen said "Slip-ins" or "comfort tech" or anything else that matches what I actually buy. The $10 coupon might get a grudging tap, but even that requires me to be specifically in shopping mode.

---

## 11. Evidence

- **Overall purpose:** Broad promotional blast for Shoe Carnival's Friday sales event — multiple brands, multiple deal types, no evident segmentation
- **Hero / primary value proposition:** BOGO Free Women's & Kids Sandals — wrong for this persona entirely
- **Membership / benefits section:** Shoe Perks free $10 reward for in-store pickup, 2-3X points for Jordan; 2X PTS badge on Skechers section — loyalty hooks exist but are scattered and not front-loaded
- **Product discoverability / recommendation modules:** Nike (30% off), Brooks (Price Break $20 off Ghost 17 / Adrenaline GTS 24), New Balance (Athletic Sale from $59.98), Skechers (Sandal Sale from $39.98) — four brand blocks, only one of which is relevant to me
- **Utility / secondary modules:** $10 off $74.98+ coupon (online code EXTRA10), 50% off Pink Sticker Clearance (in-store only) — the coupon is the strongest utility element in the email
- **Bugs / friction / clarity issues:** Preview text is a raw tracking URL — clearly visible in the inbox render as the preheader content. This is the most significant visible defect in the email.

---

## Technical Audit

## Technical Audit — Shoe Carnival "FRESH FRIDAY DEALS" (2026-04-24)

---

### 1. Technical Summary

Three core tracking endpoints fail due to a zero-width space (U+200B) injected into the campaign token, breaking open-pixel, click-redirect, and relay tracking. Authentication headers are absent from the AgentMail relay capture, leaving SPF/DKIM posture unverifiable.

---

### 2. Link & Tracking Issues

**CRITICAL — Zero-width space in tracking URLs (3 links)**

The QA scanner caught ASCII encoding failures at character position 74–75 in these URLs:

```
https://ieezzy5m.emltrk.com/v2/ieezzy5m?p&i=72180589&t=utm_campaign=SCA_20260424_friday_deals_AM​
https://ieezzy5m.emltrk.com/v2/ieezzy5m?rd&i=72180589&t=utm_campaign=SCA_20260424_friday_deals_AM​
https://ieezzy5m.emltrk.com/v2/ieezzy5m?rl&i=72180589&t=utm_campaign=SCA_20260424_friday_deals_AM​
```

The `​` suffix on `SCA_20260424_friday_deals_AM` is U+200B (zero-width space) — invisible in editors but breaks ASCII-only URL parsers. These three endpoints map to:

| Param | Function | Impact |
|-------|----------|--------|
| `?p&` | Open/pixel tracking | Opens not recorded |
| `?rd&` | Click redirect | Clicks not tracked |
| `?rl&` | Relay/list tracking | List engagement broken |

Root cause: likely introduced by copy-pasting the campaign name from a rich-text source (Notion, Word, Google Docs). Fix: strip non-ASCII from campaign token strings at template injection time.

**26 tracking links skipped** — click-redirect domains excluded from HTTP probing. Cannot confirm destination health, but this is expected behavior for tracking infrastructure.

---

### 3. Rendering & Accessibility

**Missing alt text on 3 images:**

1. `image.email.shoecarnival.com/lib/fe3311737164047d701077/m/1/09617974-358d-42df-9ab2-0e156cf11d2e.jpg` — likely a hero/content image; blank alt on a content image degrades screen-reader experience and images-off rendering.
2. Open pixel at `ieezzy5m.emltrk.com` — tracking pixels conventionally use `alt=""` (explicit empty), not absent `alt`. Missing attribute triggers accessibility warnings in some validators.
3. Deduplication pixel at `0di86k1v.emltrk.com?d=[UNIQUE]` — same issue; use `alt=""`.

**Dark mode:** `<meta name="color-scheme" content="light">` and `<meta name="supported-color-schemes" content="light">` explicitly opt out of dark mode. No `prefers-color-scheme: dark` media query present. This is a deliberate choice but means no dark-mode adaptation in Apple Mail / Outlook.

**Doctype:** `HTML 4.01 Transitional` — standard for email, no issue.

**Responsive breakpoints** at 320 / 450 / 660px are consistent and cover major device classes.

---

### 4. Personalization & Merge Tokens

**Unresolved token — `[UNIQUE]`**

```
https://0di86k1v.emltrk.com/v2/0di86k1v?d=[UNIQUE]
```

`[UNIQUE]` appears to be a per-recipient deduplication/suppression token that was not substituted before send. If this pixel fires with the literal string `[UNIQUE]`, all open events will collide under one key on the tracking backend rather than being attributed per recipient.

No other unresolved merge tokens visible in the truncated source.

---

### 5. Compliance

**Authentication headers absent**

```
[WARN] Authentication-Results header not found: Expected via AgentMail relay — SPF/DKIM status unknown
```

Sending domain is `email.shoecarnival.com` (subdomain). Without `Authentication-Results`, cannot confirm:
- SPF pass on `email.shoecarnival.com`
- DKIM signature alignment with `shoecarnival.com`
- DMARC policy enforcement

This is a relay-capture gap, not necessarily a live delivery failure, but SPF/DKIM/DMARC alignment for the subdomain sender should be independently verified against DNS records.

**CAN-SPAM / unsubscribe:** The `?rl&` link (relay/list, likely unsubscribe-adjacent) is affected by the U+200B bug noted in §2. If this endpoint handles list-unsubscribe mechanics, broken resolution is a CAN-SPAM compliance risk. Verify whether `?rl&` serves unsubscribe processing or is purely engagement telemetry.

Physical address and unsubscribe link presence cannot be confirmed from the truncated HTML — standard checklist item to verify in full source.

---

### 6. Email-to-Site Continuity

UTM campaign token `SCA_20260424_friday_deals_AM` is correctly date-stamped and follows the established naming convention. However, the U+200B corruption means **this token will not appear in analytics** — Google Analytics / Adobe Analytics will receive a malformed or null `utm_campaign` value for all clicks through the broken redirect links.

26 tracked links were not probed for destination health; landing page alignment (promoted URLs matching email offers) is unverified.

---

### 7. Recommendations

| Priority | Action |
|----------|--------|
| **P0** | Strip non-ASCII / zero-width characters from all campaign token strings at template-injection time. Add a pre-send validator that ASCII-encodes the `t=` parameter before URL encoding. |
| **P0** | Confirm `[UNIQUE]` token substitution is firing correctly in the ESP merge pipeline; add a preflight check that rejects sends containing literal `[UNIQUE]` in rendered output. |
| **P1** | Verify `?rl&` endpoint function — if it handles unsubscribe processing, the U+200B breakage requires a hotfix or resend for CAN-SPAM compliance. |
| **P1** | Obtain and log `Authentication-Results` headers from a delivered copy to confirm SPF/DKIM/DMARC pass state for `email.shoecarnival.com`. |
| **P2** | Add `alt=""` (explicit empty string) to all tracking pixel `<img>` tags. Add descriptive alt text to content images (`09617974...jpg`). |
| **P3** | Probe the 26 skipped redirect destinations for 2xx/3xx health as a post-send QA step to catch broken landing pages. |
## Recent history

- [[2026-04-24-our-best-selling-style-now-for-all-ages]] — 4/10 (2026-04-24)
- [[2026-04-24-10-off]] — 3/10 (2026-04-24)
- [[2026-04-24-choose-your-mach]] — 3/10 (2026-04-24)

