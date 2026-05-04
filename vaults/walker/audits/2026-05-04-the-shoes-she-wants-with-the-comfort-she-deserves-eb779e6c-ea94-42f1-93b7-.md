---
slug: 2026-05-04-the-shoes-she-wants-with-the-comfort-she-deserves-eb779e6c-ea94-42f1-93b7-
type: email
date: 2026-05-04
persona: walker
score: "7/10"
sender: SKECHERS
subject: The Shoes She Wants, with the Comfort She Deserves
tags: [email, score-7, sender/skechers]
---
# The Shoes She Wants, with the Comfort She Deserves
**Score:** 7/10 · **Type:** Email audit · **2026-05-04**
## Executive summary

- Wrong address, basically. I'm a 62-year-old guy who buys Skechers for *himself* — Slip-ins, comfort tech, Men's casual — and this email opened with "The Shoes She Wants." I knew before I even tapped it that I wasn't the target. The BOGO 50% offer is genuinely good and the email renders clean, but every image, every headline, and every featured category is pointed at someone buying a Mother's Day gift or shopping Women's for herself. I'm not that person. There's a "MEN" text link buried about two-thirds of the way down, but that's all I get. If Skechers knows I'm a Plus member who shops Men's, this shouldn't have landed in my inbox at all — or it should have led with the men's angle.

## What's working

- The offer itself is strong — BOGO 50% off is the kind of deal that makes me stop scrolling even if the email isn't for me. The visual is clean and uncluttered. I can read the headline without squinting. The "SHOP NOW" button is big enough for my fingers on my phone screen. The "Best Sellers" grid near the bottom at least puts some actual shoe images in front of me. And the secondary navigation row — WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE — is a nice tidy escape hatch if I wanted to self-navigate.

## What's weak

- Pretty much everything is aimed at someone else. The hero is a pink women's sneaker surrounded by flowers. The "Kids'" section follows right after. The apparel section features a woman in workout clothes. There is zero Men's content in the visible portion of this email. No Slip-ins. No "Go Walk" or "Max Cushioning" language — nothing that hooks into what actually gets me excited about Skechers. The subject line literally says "She" — twice. If I didn't recognize the sender, I'd have assumed this was sent to the wrong person. And the preview text in my inbox was garbage: it leaked what looked like raw website code — `{ "@context": "http://schema.org/"` — which is not a great first impression.

## Recommendations

- 1. **Segment me out of Mother's Day sends, or gift-frame it.** If Skechers knows I'm a male shopper (and they should, I've bought from them before), either exclude me from this send or reframe the hero as "Get her the comfort she's been asking for — BOGO 50% off." That way I'm shopping as a gift-giver, not a confused recipient.
- 2. **Fix that preview text.** Whatever JSON is leaking into the preheader needs to be cleaned up — it erodes trust before the email even opens.
- 3. **Add a Men's hero block.** Even one row — "Shop Men's Deals" with a couple of Slip-in images — would make this email work for me instead of requiring me to hunt for a tiny text link.
- 4. **Loyalty callout.** I'm a Plus member. Remind me. Even a small banner saying "Plus Members: your BOGO stacks" would make me feel like a known customer.
- **P0 — Fix before next send:**
- 1. **Migrate all `image.emails.skechers.com` assets to HTTPS.** This is a CDN/DNS configuration change, not a per-email fix. Every send from this template will have broken images in modern clients until resolved.
- 2. **Fix the bare-protocol Returnpath pixel** — add `https://` prefix to `pixel.app.returnpath.net/pixel.gif?r=...`.
- **P1 — Fix in next template revision:**
- 3. **Probe the click redirect chain** on all 26 CTAs to confirm UTM parameters are appended and landing pages are live.
- 4. **Add `alt=""` to the ink1000 `o.gif` pixel** (currently attribute is missing entirely, not just empty).
- 5. **Add alt text to `49468f73-...png`** or confirm it is decorative and set `alt=""` explicitly.
- **P2 — Low priority:**
- 6. **Deduplicate CSS media query blocks** (`375px` and `640px` breakpoints are defined twice with identical rules) — reduces payload ~500 bytes.
- 7. **Confirm Krux DMP pixels are suppressed for EU/GDPR segments** — the ad impression pixel fires unconditionally in current markup.

## Full review
---

## 1. Executive Summary

Wrong address, basically. I'm a 62-year-old guy who buys Skechers for *himself* — Slip-ins, comfort tech, Men's casual — and this email opened with "The Shoes She Wants." I knew before I even tapped it that I wasn't the target. The BOGO 50% offer is genuinely good and the email renders clean, but every image, every headline, and every featured category is pointed at someone buying a Mother's Day gift or shopping Women's for herself. I'm not that person. There's a "MEN" text link buried about two-thirds of the way down, but that's all I get. If Skechers knows I'm a Plus member who shops Men's, this shouldn't have landed in my inbox at all — or it should have led with the men's angle.

---

## 2. Business Impact Score

**7/10**

- Sender recognizable (Skechers, a brand I trust and am subscribed to)
- Concrete offer visible (BOGO 50% OFF or 20% off a single pair — bold, front-and-center)
- Primary CTA unambiguous (clear "SHOP NOW" buttons throughout)
- Visual hierarchy clear (hero offer reads instantly, eye goes straight to the deal)
- No render bugs (images load, layout is intact, nothing broken I can see)
- Email reflects current campaign/season (Mother's Day in early May is timely)
- Offer feels honest (terms shown with asterisk, no obvious bait-and-switch)

Missing signals: subject/hero doesn't reference my focus area (Men's/Slip-ins/comfort tech), demographic signals don't match me (all women's models), and no loyalty/Plus member benefits are visible.

---

## 3. What's Working

The offer itself is strong — BOGO 50% off is the kind of deal that makes me stop scrolling even if the email isn't for me. The visual is clean and uncluttered. I can read the headline without squinting. The "SHOP NOW" button is big enough for my fingers on my phone screen. The "Best Sellers" grid near the bottom at least puts some actual shoe images in front of me. And the secondary navigation row — WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE — is a nice tidy escape hatch if I wanted to self-navigate.

---

## 4. What's Weak

Pretty much everything is aimed at someone else. The hero is a pink women's sneaker surrounded by flowers. The "Kids'" section follows right after. The apparel section features a woman in workout clothes. There is zero Men's content in the visible portion of this email. No Slip-ins. No "Go Walk" or "Max Cushioning" language — nothing that hooks into what actually gets me excited about Skechers. The subject line literally says "She" — twice. If I didn't recognize the sender, I'd have assumed this was sent to the wrong person. And the preview text in my inbox was garbage: it leaked what looked like raw website code — `{ "@context": "http://schema.org/"` — which is not a great first impression.

---

## 5. Recommendations

1. **Segment me out of Mother's Day sends, or gift-frame it.** If Skechers knows I'm a male shopper (and they should, I've bought from them before), either exclude me from this send or reframe the hero as "Get her the comfort she's been asking for — BOGO 50% off." That way I'm shopping as a gift-giver, not a confused recipient.
2. **Fix that preview text.** Whatever JSON is leaking into the preheader needs to be cleaned up — it erodes trust before the email even opens.
3. **Add a Men's hero block.** Even one row — "Shop Men's Deals" with a couple of Slip-in images — would make this email work for me instead of requiring me to hunt for a tiny text link.
4. **Loyalty callout.** I'm a Plus member. Remind me. Even a small banner saying "Plus Members: your BOGO stacks" would make me feel like a known customer.

---

## 6. Bottom Line

I wouldn't click. I might glance at it and think "oh, Mother's Day, good idea" for about half a second, then move on. The deal is legitimate — BOGO 50% is real money — but nothing in this email tells me it applies to anything I'd actually buy. If my wife was standing next to me I might hand her the phone. That's not what Skechers wants from my inbox slot.

---

## 7. Subject Line Analysis

- **Subject:** `The Shoes She Wants, with the Comfort She Deserves`
- **Length:** 51 chars
- **Scores (1-10):** Clarity `6`, Curiosity `3`, Personalization `1`, Urgency `2`, Specificity `3`
- **Strengths:**
  - Readable and grammatically clean, no spam signals
  - "Comfort She Deserves" is warm and gift-adjacent — works for the gifting angle
- **Weaknesses:**
  - Uses "She" twice — immediately signals wrong audience to a male subscriber
  - No offer, no urgency, no product detail — purely brand-voice poetry
- **Alt A:** `Mother's Day BOGO: Buy One, Get One 50% Off`
- **Alt B:** `Get her the comfort she deserves — BOGO 50% off this week`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — rendered as raw schema.org JSON: `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://image.emails.skechers.com/...`
- **Length:** ~150+ chars of code noise before truncation
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (None — this is broken)
- **Weaknesses:**
  - Schema markup leaked directly into the preheader slot — looks like malformed code in the inbox preview
  - Completely wastes the one sentence of real estate that could reinforce the subject or add urgency
- **Alt A:** `BOGO 50% off sitewide — today through Mother's Day. Shop now.`
- **Alt B:** `She wants the Slip-ins. Now's the time — buy one, get one half off.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `4/10`
- **Signals counted:** sender display name recognizable (Skechers), no spam signals (no ALL CAPS or !!!), cadence feels plausible (not obviously 4th promo this week)
- **Rationale:** The sender name is the only real pull — I recognize Skechers and I'm subscribed. But "The Shoes She Wants" in the subject tells me this isn't for me before I even open it, and the preview text is broken code rather than any kind of hook.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** hero offer visible without scrolling (BOGO/20% off is immediately above the fold), offer reduces price (BOGO 50% is a real discount), brand voice trusted (Skechers, familiar), no friction once inside (buttons are large and clear)
- **Rationale:** The offer is strong enough that if I landed in the email, I *might* navigate myself over to Men's to see if the deal applies. But nothing in the email explicitly says it does, and I'd have to work for it — that's enough friction to make me close out.

---

## 11. Evidence

- **Overall purpose:** Mother's Day promotional send featuring a BOGO 50% off (or 20% off single pair) sitewide sale tied to the holiday
- **Hero / primary value proposition:** Large floral-decorated banner — "Mother's Day Sale / BUY ONE, GET ONE 50% OFF OR 20% OFF A SINGLE PAIR*" — clean, readable, prominent. This is the strongest element.
- **Membership / benefits section:** Not present. No Plus member callout, no member-exclusive pricing, no loyalty acknowledgment anywhere visible.
- **Product discoverability / recommendation modules:** "Women's" featured shoe (pink runner/slip style), "Kids'" featured shoe, "25% OFF APPAREL" with woman in athletic wear, "Start with our best sellers" grid showing ~6 shoe thumbnails. Men's is absent from all featured modules.
- **Utility / secondary modules:** "SHOP ADDITIONAL STYLES" text nav row (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE), "LET'S GET TEXTING" SMS opt-in, "DOWNLOAD THE APP," "CURBSIDE PICKUP," "SHOP NOW PAY LATER" (Afterpay logo), "FIND A STORE," social follow icons. Footer has standard legal fine print.
- **Bugs / friction / clarity issues:** Preview text leaked raw schema.org JSON markup — visible in inbox before open. No render bugs inside the email body itself — all images load, layout is intact, text is readable at mobile size.

---

## Technical Audit

## Technical Audit — "The Shoes She Wants, with the Comfort She Deserves"

**From:** SKECHERS `<no-reply@emails.skechers.com>`
**Campaign ID:** `PRO_US_NA_U_SITEBUNDLE_FULL_EN_05042026_B`

---

### 1. Technical Summary

The email is structurally sound with functional tracking and preheader configuration, but carries a systemic HTTP (non-HTTPS) image-serving problem across all hosted assets on `image.emails.skechers.com`, plus two third-party pixel issues. No merge token or compliance failures detected.

---

### 2. Link & Tracking Issues

| Issue | Evidence |
|---|---|
| 26 click links unprobed | All CTAs route through `click.emails.skechers.com` — redirect chain health unverified |
| Third-party pixel over HTTP | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — plain HTTP, missing `alt` |
| Returnpath pixel missing protocol | `pixel.app.returnpath.net/pixel.gif?r=964ce1...` — no `http://` or `https://` prefix; will fail in strict clients |
| Krux/Salesforce DMP pixels present | `beacon.krxd.net` usermatch + ad impression pixels embedded in hidden `<div>` — expected for SFMC but worth confirming consent scope for EU sends |

---

### 3. Rendering & Accessibility

**HTTP images (will be blocked by Gmail, Outlook 365, Apple Mail on iOS 15+):**

All assets on `image.emails.skechers.com` are served over HTTP, not HTTPS:

- Logo: `http://image.emails.skechers.com/.../dde00662-...png`
- App Store badge: `http://image.emails.skechers.com/.../0ec56c9f-...png`
- Google Play badge: `http://image.emails.skechers.com/.../9bb508d0-...png`
- Curbside Pickup, AfterPay, Find A Store, Instagram, Facebook, YouTube icons — all HTTP

This is a **systemic CDN configuration issue**, not isolated. Any client that enforces HTTPS-only image loading will render broken images across the entire email.

**Missing alt text:**
- `o.gif` (ink1000 pixel) — `alt=""` is acceptable for tracking pixels, but it is absent entirely
- `49468f73-...png` — decorative or content image with no alt text; unknown purpose without full HTML

**CSS `display:none` on `<body>` preheader via style block:**
```html
<style>div.preheader { display: none !important; }</style>
```
Preheader suppression is implemented correctly as a separate injected `<style>` block.

**Duplicate media query blocks:** `@media only screen and (max-width: 375px)` and `@media only screen and (max-width: 640px)` define identical rule sets — dead code, minor payload bloat.

---

### 4. Personalization & Merge Tokens

No issues found. No unresolved merge tokens (`%%`, `{{`, `*|`) visible in the truncated source. Subscriber ID is encoded in tracking URLs (`partner_uid=121173391`), indicating SFMC personalization resolved correctly at send time.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

No issues found in the visible source. Physical mailing address and unsubscribe link are standard requirements — not visible in the truncated HTML but expected in the footer; QA pass rate of 100% with 0 compliance flags suggests they are present. SFMC sends for Skechers typically include DKIM on `emails.skechers.com` — not verifiable from HTML alone, but no indicators of misconfiguration.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

Cannot fully verify — all 26 CTAs route through `click.emails.skechers.com` redirect and were skipped by the HTTP probe. The campaign ID `PRO_US_NA_U_SITEBUNDLE_FULL_EN_05042026_B` is embedded in the Krux impression pixel, confirming campaign tagging exists at the ESP level. Whether UTM parameters survive the click redirect to `skechers.com` is unverified without probing the redirect chain.

---

### 7. Recommendations

**P0 — Fix before next send:**
1. **Migrate all `image.emails.skechers.com` assets to HTTPS.** This is a CDN/DNS configuration change, not a per-email fix. Every send from this template will have broken images in modern clients until resolved.
2. **Fix the bare-protocol Returnpath pixel** — add `https://` prefix to `pixel.app.returnpath.net/pixel.gif?r=...`.

**P1 — Fix in next template revision:**
3. **Probe the click redirect chain** on all 26 CTAs to confirm UTM parameters are appended and landing pages are live.
4. **Add `alt=""` to the ink1000 `o.gif` pixel** (currently attribute is missing entirely, not just empty).
5. **Add alt text to `49468f73-...png`** or confirm it is decorative and set `alt=""` explicitly.

**P2 — Low priority:**
6. **Deduplicate CSS media query blocks** (`375px` and `640px` breakpoints are defined twice with identical rules) — reduces payload ~500 bytes.
7. **Confirm Krux DMP pixels are suppressed for EU/GDPR segments** — the ad impression pixel fires unconditionally in current markup.
## Recent history

- [[2026-05-04-return-of-star-wars-styles]] — 6/10 (2026-05-04)
- [[2026-05-04-did-you-forget-something]] — 8/10 (2026-05-04)
- [[2026-05-04-your-items-are-waiting]] — 8/10 (2026-05-04)

