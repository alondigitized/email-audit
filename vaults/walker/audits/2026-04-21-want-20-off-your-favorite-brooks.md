---
slug: 2026-04-21-want-20-off-your-favorite-brooks
type: email
date: 2026-04-21
persona: walker
score: "3/10"
sender: Shoe Carnival
subject: Want $20 Off Your Favorite Brooks?
tags: [email, score-3, sender/shoe-carnival]
---
# Want $20 Off Your Favorite Brooks?
**Score:** 3/10 · **Type:** Email audit · **2026-04-21**
## Executive summary

- Wrong brand, wrong shoe, wrong opener. I open this thing and the first thing I see is a little girl in kids' New Balance sneakers. I'm a 62-year-old guy looking for comfortable men's shoes — what am I supposed to do with that? The subject promised me $20 off Brooks, which isn't even my brand, and then the email buried that actual offer under kids' shoes and a basketball contest I have no interest in. The coupon at the bottom is the best part of this whole email, and I almost missed it scrolling down that far.
- Weak targeting, irrelevant hero, buried offer. The only thing keeping this above a 2 is the coupon code at the bottom — that's a real deal if I need shoes. But this email didn't earn it.

## What's working

- **The coupon stack is solid.** $10 off $74.98 or $25 off $149.98 with a promo code (SAVEMORE) — that's a real, specific, easy-to-understand offer. I can actually use that. The barcode at the bottom means I could flash it in-store too.
- **50% off clearance** — that's the kind of deal that makes me want to take a look. I'm price-conscious, and "50% off" in big bold letters registers immediately.
- **The Brooks deal is clearly labeled.** The $20 off badge is visually clear, and the shoe image is clean. I may not be a Brooks guy, but at least I understand the offer quickly.

## What's weak

- **The hero is kids' shoes.** "Little Steps Big Comfort" with a little girl in New Balance — I'm not buying shoes for grandkids on a promotional email addressed to me. This wasted the most valuable real estate in the entire email.
- **Subject line targets a brand I don't love.** I'm a Skechers guy. "Your Favorite Brooks" assumes I have a relationship with Brooks I don't have. It didn't feel like they know me at all.
- **Jordan basketball contest.** Play, Shoot, Win — enter to win up to $100 in Shoe. I'm 62. This feels like it was built for a college kid. Completely skippable for me.
- **No Skechers. No slip-ins. No men's comfort.** I scrolled the whole email. Nothing that matches why I shop for shoes. Zero comfort technology, zero slip-in or hands-free content, nothing in my lane.
- **Text is small in the coupon section.** The $10/$25 coupons at the bottom — the fine print is tiny. On my phone I had to squint. That's frustrating when the coupon is the best part.

## Recommendations

- 1. **Lead with the coupon or clearance deal, not kids' shoes.** If you want me to open and click, show me savings immediately. Move the 50% clearance or the SAVEMORE coupon to the top half.
- 2. **Drop the kids' section or move it to the bottom.** I'm not shopping for kids on this kind of email. If they want to target parents and grandparents, segment it — don't make it the hero for a 62-year-old male.
- 3. **Swap the Brooks headline for a comfort/walking angle.** If there's a walking shoe or casual shoe on sale from any brand, that's the right angle for me. "Brooks running" is not it.
- 4. **Kill the Jordan basketball contest for this audience.** That module means nothing to me and takes up real space.
- 5. **Increase the font size in the coupon block.** Make it phone-readable without zooming.
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | U+200B in all tracking URLs | Strip zero-width space from the `utm_campaign` value in the CMS/template before resend. Audit paste source (likely copied from a doc/Slack). |
- | P0 | `[UNIQUE]` token not resolved | Identify which ESP template variable maps to `d=` on the 0di86k1v pixel and ensure substitution runs before delivery. Check send logs for scope of affected recipients. |
- | P1 | `&amp;` in raw URL query string | Change `&amp;` → `&` in the href/src attribute where it appears inside a URL (not surrounding markup). |
- | P1 | Missing alt text on content images | Add descriptive `alt` to the two product images; add `alt=""` to tracking pixels. |
- | P2 | `<meta content="IE=edge">` incomplete | Add `http-equiv="X-UA-Compatible"` attribute. |
- | P2 | Authentication headers | Pull raw headers from ESP delivery log and confirm DKIM passes on `shoecarnival.com` and `email.shoecarnival.com`. |
- | P2 | CAN-SPAM elements | Manually verify physical address and unsubscribe link are present in the untruncated HTML before any resend. |

## Full review
---

## 1. Executive Summary

Wrong brand, wrong shoe, wrong opener. I open this thing and the first thing I see is a little girl in kids' New Balance sneakers. I'm a 62-year-old guy looking for comfortable men's shoes — what am I supposed to do with that? The subject promised me $20 off Brooks, which isn't even my brand, and then the email buried that actual offer under kids' shoes and a basketball contest I have no interest in. The coupon at the bottom is the best part of this whole email, and I almost missed it scrolling down that far.

---

## 2. Business Impact Score: 3/10

Weak targeting, irrelevant hero, buried offer. The only thing keeping this above a 2 is the coupon code at the bottom — that's a real deal if I need shoes. But this email didn't earn it.

---

## 3. What's Working

- **The coupon stack is solid.** $10 off $74.98 or $25 off $149.98 with a promo code (SAVEMORE) — that's a real, specific, easy-to-understand offer. I can actually use that. The barcode at the bottom means I could flash it in-store too.
- **50% off clearance** — that's the kind of deal that makes me want to take a look. I'm price-conscious, and "50% off" in big bold letters registers immediately.
- **The Brooks deal is clearly labeled.** The $20 off badge is visually clear, and the shoe image is clean. I may not be a Brooks guy, but at least I understand the offer quickly.

---

## 4. What's Weak

- **The hero is kids' shoes.** "Little Steps Big Comfort" with a little girl in New Balance — I'm not buying shoes for grandkids on a promotional email addressed to me. This wasted the most valuable real estate in the entire email.
- **Subject line targets a brand I don't love.** I'm a Skechers guy. "Your Favorite Brooks" assumes I have a relationship with Brooks I don't have. It didn't feel like they know me at all.
- **Jordan basketball contest.** Play, Shoot, Win — enter to win up to $100 in Shoe. I'm 62. This feels like it was built for a college kid. Completely skippable for me.
- **No Skechers. No slip-ins. No men's comfort.** I scrolled the whole email. Nothing that matches why I shop for shoes. Zero comfort technology, zero slip-in or hands-free content, nothing in my lane.
- **Text is small in the coupon section.** The $10/$25 coupons at the bottom — the fine print is tiny. On my phone I had to squint. That's frustrating when the coupon is the best part.

---

## 5. Recommendations

1. **Lead with the coupon or clearance deal, not kids' shoes.** If you want me to open and click, show me savings immediately. Move the 50% clearance or the SAVEMORE coupon to the top half.
2. **Drop the kids' section or move it to the bottom.** I'm not shopping for kids on this kind of email. If they want to target parents and grandparents, segment it — don't make it the hero for a 62-year-old male.
3. **Swap the Brooks headline for a comfort/walking angle.** If there's a walking shoe or casual shoe on sale from any brand, that's the right angle for me. "Brooks running" is not it.
4. **Kill the Jordan basketball contest for this audience.** That module means nothing to me and takes up real space.
5. **Increase the font size in the coupon block.** Make it phone-readable without zooming.

---

## 6. Bottom Line

I wouldn't delete this immediately because of the coupon at the bottom — price-consciousness wins. But I'd feel vaguely annoyed that this email clearly wasn't meant for me. Shoe Carnival doesn't know me. I'm a loyal customer somewhere, but not here, not like this. I might use the SAVEMORE code if I happen to walk into a Shoe Carnival, but I'm not clicking anything in this email.

---

## 7. Subject Line Analysis

- **Subject:** `Want $20 Off Your Favorite Brooks?`
- **Length:** 34 characters
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `3`, Urgency `3`, Specificity `6`
- **Strengths:**
  - Specific dollar amount ($20) and brand name (Brooks) — no ambiguity about the offer
  - Question format is conversational and easy to parse on a small screen
- **Weaknesses:**
  - "Your Favorite Brooks" assumes brand affinity that many recipients (including me) don't have
  - No urgency signal — no expiration, no "today only," no deadline
- **Alt A:** `$20 Off + 50% Off Clearance — This Weekend Only`
- **Alt B:** `Your Shoe Carnival Deals Are Waiting, Walker`

---

## 8. Preview Text Analysis

- **Preview:** `Shoe Carnival https://click.email.shoecarnival.com/?qs=ABB7InYiOjEsImQiOjQ4NTN9AAwAAAAAAClKeehRqmlYAAknDoeuHYeCT1WY0DJ5n8tNUzG_CpgBPSucJA85iQdHyKINlv3kuWh5QVfcZMVkmkatdzd56wb6BhsfShRZl` (none / leaking junk)
- **Length:** ~180+ characters (raw URL spillover)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - At least the brand name "Shoe Carnival" appears first before the garbage
- **Weaknesses:**
  - A raw tracking URL is the entire preheader — looks like a phishing attempt or a broken email
  - Wastes every character of preview space; no offer, no hook, no reason to open
- **Alt A:** `$20 off Brooks + 50% off clearance + save up to $25 with code SAVEMORE`
- **Alt B:** `This week: Brooks deals, 50% off clearance, and a $25 coupon inside`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `4/10`
- **Rationale:** The subject is readable and the dollar amount registers, but "your favorite Brooks" doesn't match me — I'm a Skechers guy — so it already feels off-target. The preview text is a raw URL mess that makes the email look broken or shady, and that's enough to make me hesitate before I even open it.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `2/10`
- **Rationale:** Once I'm inside, the kids' shoe hero and the Jordan basketball section send me a clear message that this email wasn't built for me. The coupon at the bottom might make me screenshot it for in-store use, but I'm not clicking any link — there's nothing here that pulls me to a product I want to buy.

---

## 11. Evidence

- **Overall purpose:** Multi-offer promotional email from Shoe Carnival — combines a Brooks running shoe discount, a Jordan sweepstakes, clearance savings, and a sitewide coupon code.
- **Hero / primary value proposition:** "Little Steps Big Comfort" — New Balance kids' shoes. Completely wrong audience match for a 62-year-old male comfort shopper.
- **Membership / benefits section:** None visible. No loyalty program mention, no Shoe Carnival rewards callout, no personalized member greeting.
- **Product discoverability / recommendation modules:**
  - New Balance kids (hero — irrelevant)
  - "Refresh Your Rotation" — Adidas athletic shoes banner
  - Brooks $20 off (Adrenalize) — running shoes
  - Jordan "Play. Shoot. Win." contest module
- **Utility / secondary modules:**
  - 50% off in-store clearance (in-store only badge)
  - $10 off $74.98 / $25 off $149.98 with code SAVEMORE (in store & online)
  - Physical barcode coupons at the bottom for in-store use
- **Bugs / friction / clarity issues:**
  - Preview text is a fully exposed raw tracking URL — looks broken and untrustworthy in the inbox
  - Small text in the coupon section — difficult to read on a phone without pinching to zoom
  - No men's comfort or slip-in product visible anywhere in the email

---

## Technical Audit

## Technical Audit — Shoe Carnival "Want $20 Off Your Favorite Brooks?"
**From:** `shoecarnival@email.shoecarnival.com` | **Date:** 2026-04-21

---

### 1. Technical Summary

Six link checks failed due to a zero-width space character (`U+200B`) contaminating the campaign tracking parameter across all emltrk.com redirect URLs. One tracking pixel also contains an unresolved merge token `[UNIQUE]`, suggesting a render/send pipeline failure for that pixel.

---

### 2. Link & Tracking Issues

**CRITICAL — Zero-width space in UTM parameter (affects all links)**

Every emltrk.com redirect URL contains a `U+200B` (ZERO WIDTH SPACE) appended to the `t=` parameter value:

```
t=utm_campaign=SCA_20260421_new_balance_brook_jordan_AM​
                                                       ^-- U+200B here
```

This character occurs at position 86–88 depending on URL variant (`rd`, `rl`, `p`, `f`, `i`). The QA checker's ASCII codec error is the symptom; the root cause is the invisible character in the source HTML — likely introduced via copy-paste from a rich-text editor or CMS field. At minimum this corrupts tracking data; at worst it breaks redirects in strict URL parsers.

**Affected URL patterns (all 5 link types):**
- `?rd&i=72180589&t=...​`
- `?rl&i=72180589&t=...​`
- `?p&i=72180589&t=...​`
- `?f&i=72180589&t=...​`
- `?i=72180589&amp;t=...​` (also note: `&amp;` instead of `&` in query string — HTML-entity in a URL, not just in markup)

**CRITICAL — Unresolved merge token in tracking pixel**

```
https://0di86k1v.emltrk.com/v2/0di86k1v?d=[UNIQUE]
```

`[UNIQUE]` was not substituted at send time — the pixel fired (or was included) with a literal placeholder. This pixel timed out on probe. The `[UNIQUE]` token is typically a per-recipient deduplication or open-tracking identifier; if it was not populated, open tracking for this send may be partially broken.

---

### 3. Rendering & Accessibility

**Missing alt text on 4 images:**

| Image | src |
|---|---|
| `d29c1532-...f5.png` | `image.email.shoecarnival.com/lib/fe3311.../d29c1532...` |
| `51373ebc-...1a.png` | `image.email.shoecarnival.com/lib/fe3311.../51373ebc...` |
| Open-tracking pixel (ieezzy5m) | emltrk.com tracking pixel |
| Open-tracking pixel (0di86k1v) | emltrk.com tracking pixel |

The two content images are the accessibility concern — screen readers will either skip or announce the raw filename. Tracking pixels should have `alt=""` (empty string) to suppress announcement.

**DOCTYPE mismatch:** The document declares `HTML 4.01 Transitional` but also uses `xmlns="http://www.w3.org/1999/xhtml"` — a hybrid that is not valid under either spec. Functionally benign in modern clients but technically malformed.

**`<meta content="IE=edge">` is missing `http-equiv`:** The tag reads `<meta content="IE=edge" />` without `http-equiv="X-UA-Compatible"`. This means the IE compatibility directive is not applied.

---

### 4. Personalization & Merge Tokens

**`[UNIQUE]` token unresolved** (see §2 above — cross-cutting issue affecting both tracking and personalization pipeline integrity).

No other merge tokens visible in the truncated HTML source. No broken `{{first_name}}` or similar patterns observed.

---

### 5. Compliance

**Authentication headers not verified:**

The QA check reports `Authentication-Results` header not found via AgentMail relay — SPF/DKIM status is unknown. This cannot be confirmed as a failure from the available data (the header may exist in the original SMTP envelope but be absent from the relay copy), but it should be verified against the raw message headers in the sending platform.

No unsubscribe link or CAN-SPAM physical address could be confirmed from the truncated HTML. These must be present; the truncation prevents a definitive pass/fail. **Verify before filing this as clean.**

---

### 6. Email-to-Site Continuity

The `t=` parameter in all tracking URLs is being used to pass the UTM campaign string (`utm_campaign=SCA_20260421_new_balance_brook_jordan_AM`) rather than a standard query parameter appended to the destination URL. Whether UTM values actually land on the destination page depends entirely on how the emltrk.com redirect handler parses and forwards the `t=` value. The zero-width space in the `t=` value (§2) will corrupt any analytics attribution if it reaches Google Analytics or similar.

The `&amp;` encoding inside the raw URL of the `?i=...&amp;t=...` variant is a separate defect — HTML entities in a URL query string will be passed literally unless the redirect handler decodes them, which is not guaranteed.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | U+200B in all tracking URLs | Strip zero-width space from the `utm_campaign` value in the CMS/template before resend. Audit paste source (likely copied from a doc/Slack). |
| P0 | `[UNIQUE]` token not resolved | Identify which ESP template variable maps to `d=` on the 0di86k1v pixel and ensure substitution runs before delivery. Check send logs for scope of affected recipients. |
| P1 | `&amp;` in raw URL query string | Change `&amp;` → `&` in the href/src attribute where it appears inside a URL (not surrounding markup). |
| P1 | Missing alt text on content images | Add descriptive `alt` to the two product images; add `alt=""` to tracking pixels. |
| P2 | `<meta content="IE=edge">` incomplete | Add `http-equiv="X-UA-Compatible"` attribute. |
| P2 | Authentication headers | Pull raw headers from ESP delivery log and confirm DKIM passes on `shoecarnival.com` and `email.shoecarnival.com`. |
| P2 | CAN-SPAM elements | Manually verify physical address and unsubscribe link are present in the untruncated HTML before any resend. |
## Recent history

- [[2026-04-21-your-items-are-waiting]] — 5/10 (2026-04-21)
- [[2026-04-21-25-off-today]] — 4/10 (2026-04-21)
- [[2026-04-21-your-cart-expires-soon]] — 7/10 (2026-04-21)

