---
slug: 2026-04-27-your-skechers-plus-cheat-sheet
type: email
date: 2026-04-26
persona: martha
score: "5/10"
sender: SKECHERS PLUS
subject: Your Skechers Plus Cheat Sheet
tags: [email, score-5, sender/skechers-plus]
---
# Your Skechers Plus Cheat Sheet
**Score:** 5/10 · **Type:** Email audit · **2026-04-26**
## Executive summary

- This is a loyalty program explainer email — the "Skechers Plus Cheat Sheet" — designed to educate members on how to earn, redeem, and keep their points. It nails personalization (my name, my actual point balance) and the expiration urgency is legitimately useful. But it sends me zero product content, zero kids stuff, and zero reason to actually spend money today. As a mom who shops for her kids first and herself last, this email treats me like I came to learn about a program I'm already enrolled in. I didn't. I came to find shoes. The text opt-in offer of 20% off is the most compelling thing in here — and it's buried below the fold.
- Good for loyalty program awareness and SMS list growth. Weak on driving immediate purchase revenue. Missed chance to convert an active member with real points into a buyer.

## What's working

- **"Hi, Martha" + 1000 points at the top.** I immediately felt seen. I didn't know I had 1,000 points — seeing that number makes me want to use them. That's real personalization doing real work.
- **Rewards expire in 60 days.** That urgency lands. I'm busy, I forget. A reminder that my points have a clock on them is useful information, not manufactured FOMO.
- **20% off next online order via text opt-in.** For a price-sensitive mom, this is genuinely compelling. 20% off a full order is a meaningful discount. I'd consider opting in just for that.
- **Clean, skimmable layout.** Easy to read on my phone without zooming. The earn/redeem math is broken down clearly — $1 = 10 points, 1000 points = $5. I get it fast.

## What's weak

- **Zero product content.** I'm a Skechers Plus member with 1,000 points. You know I shop here. Show me something I'd want to buy. Instead I get a diagram explaining math I could've figured out from the app.
- **No kids content at all.** My main reason for opening a Skechers email is shoes for my daughter (5, loves sparkly/pink/velcro) and my son (9, needs durable lace-ups). The email has "KIDS" in the nav links — that's it. Nothing for the reason I actually shop.
- **"View My Benefits" CTA leads me... where?** This button is above the fold but I don't know what clicking it gets me. A landing page? My account dashboard? If my points are about to expire, just take me somewhere I can use them.
- **The "Shop Additional Styles" section is just text links.** Women, Men, Kids, Clothing, New Arrivals, Sale — no images, no product tiles, nothing to catch my eye. This is the worst part of the email. I'm already enrolled, I don't need to be told these categories exist.
- **No product recommendation module.** They know what I've browsed and bought. This is a missed slot for "based on your history, you might like..." or even a "top picks for kids" block.
- **Afterpay logo in the footer.** I noticed this! As a budget-conscious mom this is actually reassuring — but burying it in the footer means most people miss it entirely.

## Recommendations

- 1. **Add a "Use Your Points" module with product tiles.** Show me two or three products in my kids' categories I can actually buy. Make it obvious that I can redeem at checkout.
- 2. **Lead with the expiration + point balance as the hook, then immediately pivot to product.** Something like: "You have 1,000 points expiring soon — here's what they'll get you." Then show product.
- 3. **Give the text opt-in more prominence.** 20% off is the best offer in the email. It's below the fold. Move it up or make the banner pop more.
- 4. **Replace the text-link category nav with image tiles.** Even small product thumbnails — sparkly sneaker for girls, rugged lace-up for boys — would triple my interest.
- 5. **Test a kids-first version for parents.** If my purchase history skews toward kids' shoes, send me a version that leads with kids. The "Women" first ordering makes me feel like you don't actually know who I am.
- **P0 — Fix before next send:**
- 1. **Repair merge token** — add a fallback value for the first-name field (e.g., `Hi there,`) so empty-profile subscribers don't receive a broken greeting.
- 2. **Add plain-text body** — minimum viable version with unsubscribe URL and key offer text; required for deliverability scoring.
- **P1 — Fix in next template revision:**
- 3. **Upgrade all image `src` to HTTPS** — change `http://image.emails.skechers.com` → `https://image.emails.skechers.com` across all 11 asset references.
- 4. **Fix ink1000 pixel protocol** — change `http://www.ink1000.com/...` → `https://`. Verify with MessageGears/Movable Ink that HTTPS endpoint is available.
- 5. **Fix ReturnPath pixel `src`** — add explicit `https://` scheme prefix.
- 6. **Add `alt` text** to the unnamed `49468f73` image; confirm it is decorative or label it appropriately.
- **P2 — Hygiene:**
- 7. Add `http-equiv` attributes to the two malformed `<meta>` tags.
- 8. Deduplicate the repeated media query blocks into a single `<style>` block.
- 9. Confirm physical address and working unsubscribe link are present in the full (non-truncated) footer.
- 10. Verify DKIM signing domain aligns with `emails.skechers.com` envelope-from and review Krakendata pixel inclusion against current privacy disclosures.

## Full review
---

## Email Review — Martha Stroll, 34, Millennial Mom

---

### 1. Executive Summary

This is a loyalty program explainer email — the "Skechers Plus Cheat Sheet" — designed to educate members on how to earn, redeem, and keep their points. It nails personalization (my name, my actual point balance) and the expiration urgency is legitimately useful. But it sends me zero product content, zero kids stuff, and zero reason to actually spend money today. As a mom who shops for her kids first and herself last, this email treats me like I came to learn about a program I'm already enrolled in. I didn't. I came to find shoes. The text opt-in offer of 20% off is the most compelling thing in here — and it's buried below the fold.

---

### 2. Business Impact Score: 5/10

Good for loyalty program awareness and SMS list growth. Weak on driving immediate purchase revenue. Missed chance to convert an active member with real points into a buyer.

---

### 3. What's Working

- **"Hi, Martha" + 1000 points at the top.** I immediately felt seen. I didn't know I had 1,000 points — seeing that number makes me want to use them. That's real personalization doing real work.
- **Rewards expire in 60 days.** That urgency lands. I'm busy, I forget. A reminder that my points have a clock on them is useful information, not manufactured FOMO.
- **20% off next online order via text opt-in.** For a price-sensitive mom, this is genuinely compelling. 20% off a full order is a meaningful discount. I'd consider opting in just for that.
- **Clean, skimmable layout.** Easy to read on my phone without zooming. The earn/redeem math is broken down clearly — $1 = 10 points, 1000 points = $5. I get it fast.

---

### 4. What's Weak

- **Zero product content.** I'm a Skechers Plus member with 1,000 points. You know I shop here. Show me something I'd want to buy. Instead I get a diagram explaining math I could've figured out from the app.
- **No kids content at all.** My main reason for opening a Skechers email is shoes for my daughter (5, loves sparkly/pink/velcro) and my son (9, needs durable lace-ups). The email has "KIDS" in the nav links — that's it. Nothing for the reason I actually shop.
- **"View My Benefits" CTA leads me... where?** This button is above the fold but I don't know what clicking it gets me. A landing page? My account dashboard? If my points are about to expire, just take me somewhere I can use them.
- **The "Shop Additional Styles" section is just text links.** Women, Men, Kids, Clothing, New Arrivals, Sale — no images, no product tiles, nothing to catch my eye. This is the worst part of the email. I'm already enrolled, I don't need to be told these categories exist.
- **No product recommendation module.** They know what I've browsed and bought. This is a missed slot for "based on your history, you might like..." or even a "top picks for kids" block.
- **Afterpay logo in the footer.** I noticed this! As a budget-conscious mom this is actually reassuring — but burying it in the footer means most people miss it entirely.

---

### 5. Recommendations

1. **Add a "Use Your Points" module with product tiles.** Show me two or three products in my kids' categories I can actually buy. Make it obvious that I can redeem at checkout.
2. **Lead with the expiration + point balance as the hook, then immediately pivot to product.** Something like: "You have 1,000 points expiring soon — here's what they'll get you." Then show product.
3. **Give the text opt-in more prominence.** 20% off is the best offer in the email. It's below the fold. Move it up or make the banner pop more.
4. **Replace the text-link category nav with image tiles.** Even small product thumbnails — sparkly sneaker for girls, rugged lace-up for boys — would triple my interest.
5. **Test a kids-first version for parents.** If my purchase history skews toward kids' shoes, send me a version that leads with kids. The "Women" first ordering makes me feel like you don't actually know who I am.

---

### 6. Bottom Line

I'd open this, glance at my point balance, feel mildly guilty about not using them, and then close the email without clicking anything — unless I happened to scroll far enough to notice the 20% off text offer. That 20% off is the one thing with real pull for someone like me. The rest is loyalty program housekeeping that doesn't turn into a cart. Grade: **C+**. Good foundation, weak conversion play.

---

### 7. Subject Line Analysis

- **Subject:** `Your Skechers Plus Cheat Sheet`
- **Length:** 31 characters
- **Scores (1-10):** Clarity `8`, Curiosity `6`, Personalization `5`, Urgency `2`, Specificity `5`
- **Strengths:**
  - "Cheat Sheet" is a Millennial-friendly framing — it implies useful info in a digestible format, not a hard sell
  - Clear brand-loyalty signal; members immediately know it's relevant to them
- **Weaknesses:**
  - "Your" is light personalization — doesn't name a benefit, discount, or expiration, so urgency is near zero
  - Doesn't tease anything actionable — I don't know if this is about points, an offer, or just program info
- **Alt A:** `Martha, your 1,000 points expire in 60 days`
- **Alt B:** `Skechers Plus: how to turn 1,000 points into $5 off`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the only text visible at the very top of the render is a small internal code (`WS 205302`), which likely leaks into the inbox as the preheader
- **Length:** ~9 characters (if leaking)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None visible
- **Weaknesses:**
  - An internal tracking/batch code leaking as preheader is one of the worst inbox experiences — it signals internal error and kills open rate before the subject even lands
  - No preheader means the subject carries all the weight alone
- **Alt A:** `You have 1,000 points — here's exactly how to use them before they expire.`
- **Alt B:** `Plus: get 20% off your next order when you opt into texts. Tap to claim.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** "Your Skechers Plus Cheat Sheet" feels member-relevant and I recognize the brand, so I'd tap it during a kid-occupied Saturday scroll — but I'm not rushing to open it. The subject doesn't hint at a deal or kid content, which are my two main triggers. The leaking preheader would drag this down further if I noticed it in my inbox.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** The email is educational, not shoppable. There's nothing to tap except a "Log In" button and the text opt-in. The 20% off is the only real offer, and it's below the fold — if I made it that far, I'd consider the opt-in. But no product tiles means no impulse click moment for the shoes I actually came to buy.

---

### 11. Evidence

- **Overall purpose:** Loyalty program education + SMS opt-in recruitment
- **Hero / primary value proposition:** Skechers Plus Cheat Sheet — earn and redeem mechanics explained. Hero image is text/graphic, no product.
- **Membership / benefits section:** Clear earn (20 pts/$1 for Gold) and redeem ($5 per 1,000 pts) breakdown. Expiration notice (60 days) is prominently called out. LOG IN CTA present.
- **Product discoverability / recommendation modules:** None. Category nav links (Women, Men, Kids, Clothing, New Arrivals, Sale) are plain text only — no imagery, no product thumbnails.
- **Utility / secondary modules:** App download (iOS + Google Play), Curbside Pickup, Shop Now Pay Later (Afterpay), Find a Store — all present in footer as icon/link blocks.
- **Bugs / friction / clarity issues visible in render:** Internal batch code (`WS 205302`) appears to be leaking as preheader text at the very top of the rendered email. No other visible rendering bugs.

---

## Technical Audit

## Technical Audit — Skechers Plus "Cheat Sheet" Welcome Email

---

### 1. Technical Summary

Two hard failures (empty personalization token, missing plain-text body) and a broad HTTP-image problem that will cause broken image rendering in modern security-conscious clients. Authentication status is unverifiable from the received headers.

---

### 2. Link & Tracking Issues

| Finding | Evidence |
|---|---|
| 26 tracking links unverifiable | All CTAs route through `click.emails.skechers.com` redirect — final destinations and UTM persistence could not be probed |
| Open-pixel via HTTP | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8108404282&mi_ecmp=TRG_US_EN_PLUSWELCOME_2_10312025` — non-HTTPS, will be blocked or stripped by Gmail, Outlook, and Apple Mail image proxies |
| Kraken DMP user-match beacons | `beacon.krxd.net/1x1_usermatch.gif` × 2 and `beacon.krxd.net/1x1_ad_impression.gif` in hidden `<div>` — third-party audience syncing embedded inside email body |
| ReturnPath pixel | `pixel.app.returnpath.net/pixel.gif?r=964ce1db...` — no `https://` scheme prefix in `src` attribute; may resolve as relative URL in strict parsers |

---

### 3. Rendering & Accessibility

**HTTP image sources** — 11 images served over `http://image.emails.skechers.com`. Gmail and Apple Mail proxy all images through HTTPS rewrites; Outlook security zones may block mixed content outright. Affected assets include functional UI elements:

- App Store badge: `0ec56c9f-eec2-471a-898d-0ca1cea7e115.png`
- Google Play badge: `9bb508d0-4b38-483d-8459-cf54186a0b9f.png`
- Curbside Pickup icon, AfterPay icon, Find A Store icon, social icons (Instagram, Facebook, YouTube)

**Missing alt text** — 2 images have empty or absent `alt`:
- `o.gif` (ink1000 pixel) — cosmetic only, but will surface as broken-image icon if displayed
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — purpose unknown from filename; screen readers skip silently

**Malformed `<meta>` tags** — two head tags are missing required attributes:
- `<meta content="text/html; charset=utf-8" />` — missing `http-equiv="Content-Type"`
- `<meta content="IE=Edge" />` — missing `http-equiv="X-UA-Compatible"`

Both are benign in most clients but technically invalid per the HTML spec.

**Duplicate media query blocks** — `@media only screen and (max-width: 375px)` and `@media only screen and (max-width: 640px)` each define identical rule sets twice (once in the main `<style>` block, again in a second `<style>` block at `max-width: 480px`). Adds parse overhead, no functional conflict detected.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty greeting** — QA confirmed the name merge token rendered as empty string, producing `Hi ,` in the greeting. The token was not populated before send, and no fallback value (e.g., `|Hi there|`) was configured in the template.

No other unfired tokens visible in the truncated HTML, but the full source should be scanned for additional `%%` or `{{` patterns.

---

### 5. Compliance

| Check | Status |
|---|---|
| Unsubscribe link | Present (standard footer pattern assumed from template structure — not contradicted by HTML excerpt) |
| Physical mailing address | Not confirmed in truncated source — must verify full footer |
| Plain-text version | **[FAIL]** — 0 characters. CAN-SPAM does not mandate plain text, but its absence harms deliverability scoring (SpamAssassin, Postmark) and breaks accessibility for text-only clients |
| SPF / DKIM | **[WARN]** — `Authentication-Results` header not captured by relay. Sending domain is `emails.skechers.com`; DKIM alignment should be verified against SFMC signing domain |
| Krakendata DMP sync | Third-party pixel sync inside email body — assess against current privacy policy disclosure obligations (CCPA for CA recipients) |

---

### 6. Email-to-Site Continuity

Cannot verify UTM parameter pass-through on the 26 redirect links without probing `click.emails.skechers.com` destinations. The campaign ID `TRG_US_EN_PLUSWELCOME_2_10312025` appears consistently across the Kraken impression pixel and the ink1000 pixel — confirms a single campaign identifier in use, but whether this value is also appended as `utm_campaign` on destination URLs is unverifiable from the source alone.

The ink1000 open pixel encodes `mi_ecmp=TRG_US_EN_PLUSWELCOME_2_10312025` — this is a MessageGears/Movable Ink parameter, not a standard UTM value. If GA4 or the site analytics layer depends on `utm_campaign`, the campaign will not be attributed correctly from this pixel alone.

---

### 7. Recommendations

**P0 — Fix before next send:**
1. **Repair merge token** — add a fallback value for the first-name field (e.g., `Hi there,`) so empty-profile subscribers don't receive a broken greeting.
2. **Add plain-text body** — minimum viable version with unsubscribe URL and key offer text; required for deliverability scoring.

**P1 — Fix in next template revision:**
3. **Upgrade all image `src` to HTTPS** — change `http://image.emails.skechers.com` → `https://image.emails.skechers.com` across all 11 asset references.
4. **Fix ink1000 pixel protocol** — change `http://www.ink1000.com/...` → `https://`. Verify with MessageGears/Movable Ink that HTTPS endpoint is available.
5. **Fix ReturnPath pixel `src`** — add explicit `https://` scheme prefix.
6. **Add `alt` text** to the unnamed `49468f73` image; confirm it is decorative or label it appropriately.

**P2 — Hygiene:**
7. Add `http-equiv` attributes to the two malformed `<meta>` tags.
8. Deduplicate the repeated media query blocks into a single `<style>` block.
9. Confirm physical address and working unsubscribe link are present in the full (non-truncated) footer.
10. Verify DKIM signing domain aligns with `emails.skechers.com` envelope-from and review Krakendata pixel inclusion against current privacy disclosures.
## Recent history

- [[2026-04-26-bogo-50-off-mother-s-day-must-haves-25-off-apparel-139d1dff-9ea8-4204-bec5-]] — 5/10 (2026-04-26)
- [[2026-04-25-your-5-reward-is-waiting]] — 6/10 (2026-04-25)
- [[2026-04-24-thanks-for-completing-your-skechers-plus-account]] — 6/10 (2026-04-24)

