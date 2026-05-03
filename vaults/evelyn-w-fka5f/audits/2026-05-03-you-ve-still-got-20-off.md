---
slug: 2026-05-03-you-ve-still-got-20-off
type: email
date: 2026-05-03
persona: evelyn-w-fka5f
score: "5/10"
sender: SKECHERS
subject: "You've still got 20% off!"
tags: [email, score-5, sender/skechers]
---
# You've still got 20% off!
**Score:** 5/10 · **Type:** Email audit · **2026-05-03**
## Executive summary

- A technically clean welcome/re-engagement drip email centered on a 20% first-purchase discount. The hero is unmistakable and the personalized promo code is well-placed. The core problem: the subject line and headline both imply urgency ("still got time," "there's still time!") but no expiration date appears anywhere in the email — the urgency claim lands hollow. Below the hero, the email piles on 10+ additional modules that compete with the one conversion that matters. This is a competent discount email that dilutes its own punch.
- Strong offer, clear code — but the missing deadline and bloated body significantly reduce the likelihood that the reader will act *now* rather than defer (and forget).

## What's working

- **Hero offer is unambiguous.** "20% OFF YOUR FIRST PURCHASE" is large, high-contrast, and the personalized code is clearly visible. No confusion about what you're being offered.
- **Product carousel provides immediate context.** Showing real product images and names directly under the hero answers "what do I shop?" before the reader has to think.
- **Collection tiles (Hands Free Slip-ins, Cozy Fit, Max Cushioning, Arch Fit)** create a structured browse hierarchy — good for shoppers who don't have a specific product in mind.
- **Skechers Plus block** is a smart secondary conversion placed after the primary offer, not before it.

## What's weak

- **No expiration date on the hero.** "There's still time!" implies a deadline that is never stated. Without a date, the urgency is theater — a reader can always come back "later" with no consequence.
- **Email is dramatically overlong.** After the hero: product carousel → 4 collection tiles → Skechers Plus membership sign-up → text opt-in → app download badges → curbside pickup → shop now/pay later → find a store → *second* Skechers Plus banner. That's 11 distinct modules, most of them unrelated to the 20% conversion.
- **Duplicate Skechers Plus CTA.** The Skechers Plus join pitch appears once mid-email and again in the footer. Redundant.
- **Flat text navigation strip ("WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE")** adds nothing the collection tiles above don't already provide. Visually inert.
- **Product carousel images are small.** At email rendering width, the individual product photos are thumbnail-sized — hard to be inspired by them.

## Recommendations

- 1. **Add an expiration date to the hero** — even something like "Offer expires May 7" turns "still got time" from a vague phrase into actual urgency.
- 2. **Cut the email by half.** Remove: the duplicate Skechers Plus footer block, the text opt-in module, the text navigation strip, and one of {app download, curbside, pay later, find a store}. The email should end after the utility bar, not loop back to a second membership pitch.
- 3. **Enlarge product images or reduce to 3 hero products.** A tighter carousel with bigger images is more likely to generate a click than 5-6 tiny thumbnails.
- 4. **A/B test a stripped-down variant**: hero + 3 product recommendations + one collection CTA only. Measure conversion against this full-scroll version.
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | Doubled-domain broken URL | Fix merge template: `www.Skechers.com` should be a relative path or properly scoped variable |
- | P1 | 13 HTTP image sources | Migrate all `image.emails.skechers.com` and `ink1000.com` assets to HTTPS |
- | P1 | Missing `List-Unsubscribe-Post` | Confirm RFC 8058 header injection at SFMC level; required for Gmail bulk sender compliance |
- | P2 | Missing `alt` text on 5 images | Add descriptive `alt` to product/content images; `alt=""` on decorative/tracking pixels |
- | P2 | Unsubscribe header relay gap | Verify `List-Unsubscribe` is present in raw SMTP delivery headers, not just relay capture |
- | P3 | Global `a { color: inherit }` | Add visible focus/hover states for accessibility; ensure CTA buttons have explicit color |
- | P3 | UTM attribution on CTAs | Confirm destination URLs carry `utm_source`, `utm_medium`, `utm_campaign` after redirect resolution |

## Full review
---

## Skechers Email Review — "You've still got 20% off!"

---

### 1. Executive Summary

A technically clean welcome/re-engagement drip email centered on a 20% first-purchase discount. The hero is unmistakable and the personalized promo code is well-placed. The core problem: the subject line and headline both imply urgency ("still got time," "there's still time!") but no expiration date appears anywhere in the email — the urgency claim lands hollow. Below the hero, the email piles on 10+ additional modules that compete with the one conversion that matters. This is a competent discount email that dilutes its own punch.

---

### 2. Business Impact Score: **5/10**

Strong offer, clear code — but the missing deadline and bloated body significantly reduce the likelihood that the reader will act *now* rather than defer (and forget).

---

### 3. What's Working

- **Hero offer is unambiguous.** "20% OFF YOUR FIRST PURCHASE" is large, high-contrast, and the personalized code is clearly visible. No confusion about what you're being offered.
- **Product carousel provides immediate context.** Showing real product images and names directly under the hero answers "what do I shop?" before the reader has to think.
- **Collection tiles (Hands Free Slip-ins, Cozy Fit, Max Cushioning, Arch Fit)** create a structured browse hierarchy — good for shoppers who don't have a specific product in mind.
- **Skechers Plus block** is a smart secondary conversion placed after the primary offer, not before it.

---

### 4. What's Weak

- **No expiration date on the hero.** "There's still time!" implies a deadline that is never stated. Without a date, the urgency is theater — a reader can always come back "later" with no consequence.
- **Email is dramatically overlong.** After the hero: product carousel → 4 collection tiles → Skechers Plus membership sign-up → text opt-in → app download badges → curbside pickup → shop now/pay later → find a store → *second* Skechers Plus banner. That's 11 distinct modules, most of them unrelated to the 20% conversion.
- **Duplicate Skechers Plus CTA.** The Skechers Plus join pitch appears once mid-email and again in the footer. Redundant.
- **Flat text navigation strip ("WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE")** adds nothing the collection tiles above don't already provide. Visually inert.
- **Product carousel images are small.** At email rendering width, the individual product photos are thumbnail-sized — hard to be inspired by them.

---

### 5. Recommendations

1. **Add an expiration date to the hero** — even something like "Offer expires May 7" turns "still got time" from a vague phrase into actual urgency.
2. **Cut the email by half.** Remove: the duplicate Skechers Plus footer block, the text opt-in module, the text navigation strip, and one of {app download, curbside, pay later, find a store}. The email should end after the utility bar, not loop back to a second membership pitch.
3. **Enlarge product images or reduce to 3 hero products.** A tighter carousel with bigger images is more likely to generate a click than 5-6 tiny thumbnails.
4. **A/B test a stripped-down variant**: hero + 3 product recommendations + one collection CTA only. Measure conversion against this full-scroll version.

---

### 6. Bottom Line

Good bones, overbuilt body. The 20% offer is the whole point of this email — everything else is noise at best, friction at worst. Fix the missing expiration date and cut five modules, and this becomes a genuinely effective retention trigger.

---

### 7. Subject Line Analysis

- **Subject:** `You've still got 20% off!`
- **Length:** 26 chars
- **Scores (1-10):** Clarity `8`, Curiosity `3`, Personalization `3`, Urgency `5`, Specificity `7`
- **Strengths:**
  - Specific percentage makes the value concrete at a glance
  - "Still" signals this is a reminder, which can feel like a helpful nudge for warm subscribers
- **Weaknesses:**
  - Urgency claim has no teeth — no deadline, no "expires tonight," no countdown anchor
  - Reads as a standard drip trigger; no element of surprise or brand voice
- **Alt A:** `Your 20% off code expires Sunday — don't leave it behind`
- **Alt B:** `First order, 20% off. Code inside — good through [date].`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the visible email begins with an order-reference line in the top-right corner; no visible dedicated preheader. The preview text likely defaults to the first rendered body copy or the reference number.
- **Length:** N/A (no intentional preheader visible)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - N/A — no intentional preheader to credit
- **Weaknesses:**
  - No preheader means the inbox preview likely shows an order/tracking number or "View this email in your browser" text — a wasted opportunity that leaves the subject line to carry all the inbox weight alone
  - The subject line's lack of a deadline is compounded by having no preheader to supply that missing detail
- **Alt A:** `Your code: WEL20-TDQV4HXK52 — valid through [date]. Don't miss it.`
- **Alt B:** `20% off your first pair — code's waiting, but not forever.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** Walker knows Skechers and recognizes the brand sender. "You've still got 20% off" reads as a familiar drip-series reminder — enough brand equity to open, but no single surprising element that elevates it above the average promotional email. The subject is competent, not compelling.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `4/10`
- **Rationale:** The personalized code and clear "SHOP NOW" CTA are genuinely actionable — but the absence of an expiration date removes the pressure to click *now*, and the email's length means Walker may scan through a dozen modules and lose the thread before reaching a decision point. Likely to tab-defer and forget.

---

### 11. Evidence

- **Overall purpose:** Welcome/re-engagement drip — reminding a new subscriber who hasn't converted to use their first-purchase discount code.
- **Hero / primary value prop:** "There's still time! 20% OFF YOUR FIRST PURCHASE* / USE CODE: WEL20-TDQV4HXK52 / SHOP NOW" — strong, high-contrast, code personalized.
- **Product carousel:** One row of 5–6 product images with names and prices (Slip-ins, GO Run, Contour, etc.). Images are small; provides browse context but limited visual impact.
- **Collection tiles:** 4 image tiles — Hands Free Slip-ins, Cozy Fit, Max Cushioning, Arch Fit — clear taxonomy of Skechers' range, useful for undecided shoppers.
- **Skechers Plus (mid-email):** Blue banner offering member-only pricing, free shipping + 60-day returns, birthday surprises. "JOIN NOW" CTA. Reasonable secondary ask.
- **Utility / secondary modules:** Text opt-in, app download (App Store + Google Play), curbside pickup, Shop Now Pay Later, Find a Store. All functional but collectively overwhelming.
- **Second Skechers Plus banner (footer):** "FREE SHIPPING + RETURNS ON ALL ORDERS, PLUS EXTRA PERKS! / JOIN NOW" — redundant with the mid-email block.
- **Social follow section:** Instagram, Facebook, Pinterest, YouTube icons — standard footer placement.
- **Bugs / friction / clarity issues:** No visible expiration date anywhere in the email (material friction). The duplicate Skechers Plus modules are visible and redundant. Product images in the carousel are notably small for a visual commerce email.

---

## Technical Audit

## Technical Audit — Skechers "You've still got 20% off!" (2026-05-02)

---

### 1. Technical Summary

The email has one confirmed broken link caused by a doubled-domain merge error and a systemic HTTP/HTTPS mixed-content problem affecting roughly a dozen images. Compliance headers (List-Unsubscribe, authentication results) were not captured by the relay, which warrants verification at the sending platform level.

---

### 2. Link & Tracking Issues

**[FAIL] Doubled-domain merge error — broken destination URL**
`http://www.skechers.com/www.Skechers.com`
A template variable was left unresolved or concatenated incorrectly, producing a self-referencing path. The capitalization mismatch (`skechers.com` vs `Skechers.com`) suggests a merge token was rendered as the raw fallback value rather than a relative path. Any CTA wired to this URL will 404.

**[INFO] 26 tracking/click-redirect links skipped**
All outbound CTAs route through `click.emails.skechers.com`. Destination resolution was not confirmed — live probe at send time is recommended to catch additional broken destinations.

---

### 3. Rendering & Accessibility

**Mixed content — HTTP image sources (13 images)**
Images served from `http://image.emails.skechers.com/...` will be blocked or flagged in modern email clients that enforce HTTPS. Affected assets include:
- Skechers logo: `dde00662-169f-447d-b0e2-fc65f6c2290c.png`
- App Store badge: `0ec56c9f-eec2-471a-898d-0ca1cea7e115.png`
- Google Play badge: `9bb508d0-4b38-483d-8459-cf54186a0b9f.png`
- AfterPay logo: `07cb60b5-512b-494d-892d-67dc067289b7.png`
- Social icons: Instagram, Facebook, YouTube
- Additional footer assets: `49468f73`, `00100b23`, `fc08601a`, `00100b23`

The MovableInk pixel is also HTTP: `http://www.ink1000.com/p/up/...`

**Missing `alt` text (5 images)**
The following images have no `alt` attribute, breaking text-fallback rendering when images are blocked:
- `o.gif` (MovableInk pixel — acceptable as tracking, but should be `alt=""`)
- `bcc16007-f391-423b-868f-cb0ad4f03490.jpg` (appears to be a hero/product image)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

`a { color: inherit; text-decoration: none; }` removes all link affordance globally — no underlines, no color change. Combined with image-blocking, CTAs become invisible to screen readers and image-off clients unless fallback text is present.

---

### 4. Personalization & Merge Tokens

The doubled-domain URL (`http://www.skechers.com/www.Skechers.com`) is the only confirmed unresolved token. No other exposed `%%`, `{{`, or `[%` merge syntax was visible in the truncated source. Full template rendering verification is recommended before the next send given this miss.

---

### 5. Compliance

**[WARN] `List-Unsubscribe` header not detected**
Not found in relay-captured headers. If this header is injected by Salesforce Marketing Cloud at SMTP time and stripped by the AgentMail relay, it may still be present in delivery — but this needs to be confirmed against raw SMTP headers. Absence of this header means Gmail and Apple Mail will not surface the one-click unsubscribe UI, increasing spam complaints.

**[WARN] `List-Unsubscribe-Post` header not detected (RFC 8058)**
Required for Gmail's one-click unsubscribe compliance. Gmail began enforcing this for bulk senders (>5k/day) in 2024. Should be verified at the ESP level.

**[WARN] `Authentication-Results` not captured**
SPF/DKIM pass/fail status unknown from this relay capture. Sending domain `emails.skechers.com` should have a published DKIM key and SPF record; verification should be done against live delivery headers.

**CAN-SPAM physical address and unsubscribe mechanism** were not verifiable from the truncated HTML, but are assumed present in the footer — should be confirmed in full source review.

---

### 6. Email-to-Site Continuity

**No UTM parameters confirmed on CTA links.** All outbound links route through `click.emails.skechers.com` click-tracking redirects, and destination URLs with UTM parameters were not resolvable due to the redirect layer. The broken `http://www.skechers.com/www.Skechers.com` URL will produce a 404 and lose attribution entirely for the CTA(s) it powers.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | Doubled-domain broken URL | Fix merge template: `www.Skechers.com` should be a relative path or properly scoped variable |
| P1 | 13 HTTP image sources | Migrate all `image.emails.skechers.com` and `ink1000.com` assets to HTTPS |
| P1 | Missing `List-Unsubscribe-Post` | Confirm RFC 8058 header injection at SFMC level; required for Gmail bulk sender compliance |
| P2 | Missing `alt` text on 5 images | Add descriptive `alt` to product/content images; `alt=""` on decorative/tracking pixels |
| P2 | Unsubscribe header relay gap | Verify `List-Unsubscribe` is present in raw SMTP delivery headers, not just relay capture |
| P3 | Global `a { color: inherit }` | Add visible focus/hover states for accessibility; ensure CTA buttons have explicit color |
| P3 | UTM attribution on CTAs | Confirm destination URLs carry `utm_source`, `utm_medium`, `utm_campaign` after redirect resolution |
## Recent history

- [[2026-05-02-welcome-to-skechers]] — 6/10 (2026-05-02)

