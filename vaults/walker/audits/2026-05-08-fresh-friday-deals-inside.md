---
slug: 2026-05-08-fresh-friday-deals-inside
type: email
date: 2026-05-08
persona: walker
score: "7/10"
sender: Shoe Carnival
subject: Fresh Friday Deals Inside💌
tags: [email, score-7, sender/shoe-carnival]
---
# Fresh Friday Deals Inside💌
**Score:** 7/10 · **Type:** Email audit · **2026-05-08**
## Executive summary

- Shoe Carnival is a store I know — I've been in there a few times over the years. But this email? It's basically a Mother's Day flyer with my name accidentally on the mailing list. The hero is BOGO Free on Women's & Kids sandals, and I'm a 62-year-old man shopping for comfortable men's shoes. The Skechers sandal sale is buried in the fourth slot after Nike and Adidas, the promo code says "WELCOMOM20," and the preview text in my inbox was just a garbled tracking URL. I opened it expecting a Friday deal I'd want. I left feeling like I crashed someone else's shopping trip. The $20-off coupon is real value if I'm in-store, and I did spot the Skechers section — that kept me from closing immediately — but this email wasn't made for me.

## What's working

- The **Friday Deal Roundup framing** is simple and I get it immediately — it's a roundup of discounts, here's what's on sale. I like that. The **Skechers Sandal Sale** at $39.98 is there — not front and center, but it's there, and when I scroll past Nike and Adidas I do stop on Skechers. That starting price is reasonable.
- The **$20 off $59.99+** barcode at the bottom is actually useful for me if I'm heading to the store this weekend. I like a printable coupon. Old habit. The **Afterpay option** being called out is a nice touch — even I notice when brands offer that, though I probably wouldn't use it.
- The email renders clean on my phone. Text is readable, the prices are bold and easy to spot, no images are broken. At my age, I appreciate when I don't have to squint.

## What's weak

- **The hero is for women and kids.** Full stop. "BOGO FREE — WOMEN'S & KIDS SANDALS" is the first major thing my eyes land on. I'm a man. I kept scrolling, but a lot of guys my age would just close it right there.
- **"WELCOMOM20"** — the promo code is literally called "Welcome Mom." I'm not a mom. It's a fine promotion for Mother's Day shoppers, but sending it to men in the database without any segmentation feels lazy. Made me feel like a targeting afterthought.
- **Too many brands, too many CTAs.** Nike, Adidas, Skechers, Crocs — each with their own "Shop Now." On a phone, that's a lot of tapping decisions. I'm not shopping Nike or Adidas. I came for shoes that don't hurt my feet. The multi-brand structure makes the email feel more like a circular than a personal offer.
- **The Skechers section is the fourth brand listed.** If Skechers is on here, lead with Skechers for your Skechers customers. I shouldn't have to scroll past two Nike sections to find it.
- **No men's product imagery.** Every shoe I can see is either a sandal, a woman's shoe, or unisex. No men's casual shoe, no Slip-in featured, no comfort technology callout.

## Recommendations

- 1. **Segment the list.** Men who are known Skechers buyers should get a different version of this email — lead with men's Skechers deals, not BOGO Women's & Kids. At a minimum, swap the hero module by gender.
- 2. **Move Skechers up.** If I'm on your Skechers buyer list, Skechers should be slot one, not slot four. The brand hierarchy here seems to be by deal size, not by customer affinity.
- 3. **Fix the promo code.** "WELCOMOM20" is fine for the Mother's Day segment. For men, use a gender-neutral code like "FRIDAY20" or at minimum suppress the Mother's Day version from male-identified accounts.
- 4. **Add one specific men's product.** Even a single "Featured: Men's Skechers Slip-ins Starting at $XX" module would give me a reason to click through to the men's section.
- 5. **Fix the preheader.** The preview text showing a raw tracking URL is broken. That needs to be real copy — even just "Use code FRIDAY20 in-store or online, this weekend only" would be ten times better.
- | Priority | Action |
- |---|---|
- | P0 | Strip `\u200b` (U+200B) from all tracking URLs before next send — scrub the template source in the ESP, not just the preview |
- | P0 | Verify `[UNIQUE]` token fires correctly for the `0di86k1v` open-tracking pixel; confirm with ESP that per-send variable substitution is enabled |
- | P1 | Confirm `?rl` unsubscribe link resolves correctly end-to-end after the ZWS fix; test in a seed list before next deploy |
- | P1 | Add `alt` text to the content image (`d06be110...jpg`); set `alt=""` on both tracking pixels |
- | P2 | Fix `<meta content="IE=edge">` → add `http-equiv="X-UA-Compatible"` |
- | P3 | Manually probe a sample of the 26 skipped redirect links to confirm destination URLs and UTM parameter pass-through |

## Full review
---

## Walker Miles Reviews: Shoe Carnival — "Fresh Friday Deals Inside💌"

---

### 1. Executive Summary

Shoe Carnival is a store I know — I've been in there a few times over the years. But this email? It's basically a Mother's Day flyer with my name accidentally on the mailing list. The hero is BOGO Free on Women's & Kids sandals, and I'm a 62-year-old man shopping for comfortable men's shoes. The Skechers sandal sale is buried in the fourth slot after Nike and Adidas, the promo code says "WELCOMOM20," and the preview text in my inbox was just a garbled tracking URL. I opened it expecting a Friday deal I'd want. I left feeling like I crashed someone else's shopping trip. The $20-off coupon is real value if I'm in-store, and I did spot the Skechers section — that kept me from closing immediately — but this email wasn't made for me.

---

### 2. Business Impact Score

**7/10**

- Sender (Shoe Carnival) is a recognizable shoe retailer — I know the brand
- Concrete offer clearly visible: $20 off $59.99+, BOGO Free, and percentage discounts across brands
- CTAs are present and visible throughout (Shop Nike, Shop Skechers, Shop Crocs — clear verb + brand)
- Visual hierarchy is solid — "FRIDAY DEAL ROUNDUP" / BOGO lands as the hero immediately
- No visible render bugs — email looks clean, images load, text doesn't overlap
- Email reflects current season (Mother's Day campaign is timely for early May)
- Offer feels honest on its face — the $20 code is visible, Afterpay option is clear

*Missed signals:* Hero and promo code are explicitly women's/kids-focused. No demographic match for a 62-year-old man. Skechers Slip-ins and men's comfort tech are nowhere in this send. I'm a Skechers Plus member — Shoe Perks is a different loyalty program, so that section doesn't land for me.

---

### 3. What's Working

The **Friday Deal Roundup framing** is simple and I get it immediately — it's a roundup of discounts, here's what's on sale. I like that. The **Skechers Sandal Sale** at $39.98 is there — not front and center, but it's there, and when I scroll past Nike and Adidas I do stop on Skechers. That starting price is reasonable.

The **$20 off $59.99+** barcode at the bottom is actually useful for me if I'm heading to the store this weekend. I like a printable coupon. Old habit. The **Afterpay option** being called out is a nice touch — even I notice when brands offer that, though I probably wouldn't use it.

The email renders clean on my phone. Text is readable, the prices are bold and easy to spot, no images are broken. At my age, I appreciate when I don't have to squint.

---

### 4. What's Weak

**The hero is for women and kids.** Full stop. "BOGO FREE — WOMEN'S & KIDS SANDALS" is the first major thing my eyes land on. I'm a man. I kept scrolling, but a lot of guys my age would just close it right there.

**"WELCOMOM20"** — the promo code is literally called "Welcome Mom." I'm not a mom. It's a fine promotion for Mother's Day shoppers, but sending it to men in the database without any segmentation feels lazy. Made me feel like a targeting afterthought.

**Too many brands, too many CTAs.** Nike, Adidas, Skechers, Crocs — each with their own "Shop Now." On a phone, that's a lot of tapping decisions. I'm not shopping Nike or Adidas. I came for shoes that don't hurt my feet. The multi-brand structure makes the email feel more like a circular than a personal offer.

**The Skechers section is the fourth brand listed.** If Skechers is on here, lead with Skechers for your Skechers customers. I shouldn't have to scroll past two Nike sections to find it.

**No men's product imagery.** Every shoe I can see is either a sandal, a woman's shoe, or unisex. No men's casual shoe, no Slip-in featured, no comfort technology callout.

---

### 5. Recommendations

1. **Segment the list.** Men who are known Skechers buyers should get a different version of this email — lead with men's Skechers deals, not BOGO Women's & Kids. At a minimum, swap the hero module by gender.

2. **Move Skechers up.** If I'm on your Skechers buyer list, Skechers should be slot one, not slot four. The brand hierarchy here seems to be by deal size, not by customer affinity.

3. **Fix the promo code.** "WELCOMOM20" is fine for the Mother's Day segment. For men, use a gender-neutral code like "FRIDAY20" or at minimum suppress the Mother's Day version from male-identified accounts.

4. **Add one specific men's product.** Even a single "Featured: Men's Skechers Slip-ins Starting at $XX" module would give me a reason to click through to the men's section.

5. **Fix the preheader.** The preview text showing a raw tracking URL is broken. That needs to be real copy — even just "Use code FRIDAY20 in-store or online, this weekend only" would be ten times better.

---

### 6. Bottom Line

I wouldn't delete it, but only because I saw the Skechers section and the $20-off code. If I'm going to a Shoe Carnival this weekend, I'd take the coupon. But I didn't feel like Shoe Carnival knew who I was or what I buy. This was a mass blast with a Mother's Day theme dropped in my inbox. Three out of five times I probably swipe it away in ten seconds without opening. The one time I do open it, I'll scroll to Skechers, mutter about all the women's stuff up top, and maybe walk in with the barcode. That's the best-case scenario — and it's more about the in-store coupon than anything in the email itself.

---

### 7. Subject Line Analysis

- **Subject:** `Fresh Friday Deals Inside💌`
- **Length:** 26 characters (including emoji)
- **Scores (1-10):** Clarity `5`, Curiosity `4`, Personalization `1`, Urgency `4`, Specificity `2`
- **Strengths:**
  - Short and mobile-friendly; loads fast in the preview pane
  - "Friday" creates a mild sense of timeliness
- **Weaknesses:**
  - "Fresh" and "Deals Inside" are among the most generic phrases in email marketing — tells me nothing about what's actually on sale
  - Heart envelope emoji skews feminine; irrelevant to a male subscriber list and reinforces the mismatch
- **Alt A:** `$20 Off This Weekend — Skechers, Nike & More`
- **Alt B:** `Friday Only: Skechers Sandal Sale Starts at $39`

---

### 8. Preview Text Analysis

- **Preview:** `Shoe Carnival https://click.email.shoecarnival.com/?qs=ABB7InYiOjEsImQiOjQ4NzB9AAwAAAAAAISF86no81V2D2LLLsVxlG-K3N3QbbgfkPGeO24PWB_f1Ky7WOnzRYPNZ57SfV5r_kxCg5_NxG9gXq3ItBTsYH9QgbRImualc`
- **Length:** ~160+ characters of garbage after the brand name
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - The brand name "Shoe Carnival" at least appears before the URL mess
  - (That's genuinely the only positive thing here)
- **Weaknesses:**
  - A raw tracking URL is the entire preheader — this is a technical failure, not a copywriting choice
  - Zero value communicated; makes the sender look sloppy in the inbox and erodes the open impulse
- **Alt A:** `Use code WELCOMOM20 for $20 off $59.99+ — in store & online this weekend`
- **Alt B:** `Skechers, Nike, Adidas, Crocs — deals valid Friday only, shop now`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** sender recognizable (Shoe Carnival), subject under 50 chars, no aggressive spam signals (no ALL CAPS or triple exclamation), mild Friday urgency
- **Rationale:** The sender name got me to pause, and "Friday Deals" gives me a reason to look. But the emoji skews wrong for me, the preview text is a broken URL (actively hurts the open impulse), and nothing in the subject signals men's shoes or comfort tech. Borderline open for me — I'd open it maybe half the time, mostly out of curiosity about the $20 off.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** hero visible without scrolling, CTAs specific (Shop Skechers / Shop Nike — verb + brand), offer reduces price ($20 off + BOGO + %), brand voice consistent with a known retailer, email renders without friction or broken images
- **Rationale:** I'd get to the Skechers section and the $20-off barcode, and those are real reasons to engage. But the hero doesn't speak to me at all, no product detail about comfort or fit is visible, and there's no single focused CTA — it's five brands competing for my tap. I might click "Shop Skechers" for a look, but just as likely I'd save the barcode screenshot and close.

---

### 11. Evidence

- **Overall purpose:** Multi-brand promotional roundup anchored to Mother's Day, running alongside a general "Friday Deal" theme. In-store and online.
- **Hero / primary value proposition:** BOGO Free on Women's & Kids Sandals; $20 off $59.99+ with code WELCOMOM20 in the top banner.
- **Membership / benefits section:** Shoe Perks "$10 Free Reward" module near the bottom. Not my program (I'm Skechers Plus), but it's visible and clearly laid out with an app download prompt and a gift-grab sweepstakes tie-in.
- **Product discoverability / recommendation modules:** Four brand tiles in sequence — Nike (starting at $69.98), Nike again (up to 30% off), Adidas (up to 25% off sneakers & accessories), Skechers Sandal Sale (starting at $39.98), Crocs (up to 25% off). Each has a shop button. No specific products shown, just brand + price point.
- **Utility / secondary modules:** Afterpay "Pay it in 4" callout (store + online), a scannable barcode for the $20 off in-store, and a Mother's Day Gift Grab promotion. Legal/unsubscribe block at the bottom.
- **Bugs / friction / clarity issues:** No visible render bugs — images load, text is readable, layout is intact. The only significant issue is the leaked tracking URL as preheader text, which is visible in the inbox *before* opening. Inside the email itself, the render is clean.

---

## Technical Audit

## Technical Audit — Shoe Carnival "Fresh Friday Deals" (2026-05-08)

---

### 1. Technical Summary

HTML4 Transitional table-based layout with three media-query breakpoints targeting 320px, 450px, and 660px. Three tracking links are outright broken due to a zero-width space character injected into URLs, which will cause click failures for an unknown share of subscribers.

---

### 2. Link & Tracking Issues

**CRITICAL — Zero-width space (U+200B) in tracking URLs**

All three QA FAIL-level errors share the same root cause: a Unicode zero-width space (`\u200b`, HTML `​`) is appended to the `t=` query parameter value, after `SCA_20260508_friday_deals_SC`. This makes the URL non-ASCII-encodable and will cause link-resolution failures.

Affected URLs (U+200B shown as `[ZWS]`):
```
https://ieezzy5m.emltrk.com/v2/ieezzy5m?rd&i=72180589&t=utm_campaign=SCA_20260508_friday_deals_SC[ZWS]
https://ieezzy5m.emltrk.com/v2/ieezzy5m?rl&i=72180589&t=utm_campaign=SCA_20260508_friday_deals_SC[ZWS]
https://ieezzy5m.emltrk.com/v2/ieezzy5m?p&i=72180589&t=utm_campaign=SCA_20260508_friday_deals_SC[ZWS]
```

The `?rd` and `?rl` variants are likely the read-confirmation/redirect and unsubscribe-list links respectively — making this a potential CAN-SPAM compliance risk in addition to a UX failure.

**INFO — 26 tracking links unverified**

All 26 remaining `emltrk.com` click-redirect links were skipped by the HTTP probe. Destination reachability and UTM pass-through cannot be confirmed from this audit.

---

### 3. Rendering & Accessibility

**Missing alt text — 3 images**

| Asset | src |
|---|---|
| Hero/content image | `.../d06be110-6c0c-4df3-aeee-e04bf8e18969.jpg` |
| Open-tracking pixel | `ieezzy5m.emltrk.com/v2/ieezzy5m?i=72180589&t=utm_campaign=...` |
| Second tracking pixel | `0di86k1v.emltrk.com/v2/0di86k1v?d=[UNIQUE]` |

The content image is the meaningful one — screen readers will skip it entirely with no fallback. Tracking pixels should use `alt=""` explicitly.

**Dark mode not supported**

```html
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
```

Locks rendering to light mode in Apple Mail. Not a breakage, but worth noting.

**Malformed meta tag**

```html
<meta content="IE=edge" />
```

Missing `http-equiv` attribute. Should be:
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```

Inert in modern clients but technically malformed.

---

### 4. Personalization & Merge Tokens

**Unfired token — `[UNIQUE]` in tracking pixel**

```
https://0di86k1v.emltrk.com/v2/0di86k1v?d=[UNIQUE]
```

`[UNIQUE]` appears to be a per-recipient substitution token that was not replaced before send (or it is literal in the source prior to ESP injection). If it reached subscribers as-is, open-tracking for this pixel is broken — all opens would collide on a single non-personalized identifier.

No other unresolved merge tokens detected in the truncated source.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Unsubscribe link status — inconclusive**

The `?rl` parameter on `ieezzy5m.emltrk.com` is consistent with an unsubscribe redirect, but the link is broken (U+200B issue above). If this is the list-unsubscribe click path, it must be fixed — a non-functional unsubscribe link is a CAN-SPAM violation.

The HTML source is truncated and does not include the footer; physical mailing address and unsubscribe text presence cannot be confirmed from this review.

**Authentication headers** — not available in the provided data (no raw message headers supplied). DKIM/SPF/DMARC alignment for `shoecarnival.com` cannot be assessed.

---

### 6. Email-to-Site Continuity

`utm_campaign=SCA_20260508_friday_deals_SC` is present in the `t=` parameter of all three broken links, but those links will fail to resolve — so UTM attribution for those clicks is lost entirely.

The 26 skipped click-redirect links cannot be inspected for UTM pass-through; assume the ESP injects UTM at redirect resolution, but this should be spot-checked manually for at least one destination URL.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | Strip `\u200b` (U+200B) from all tracking URLs before next send — scrub the template source in the ESP, not just the preview |
| P0 | Verify `[UNIQUE]` token fires correctly for the `0di86k1v` open-tracking pixel; confirm with ESP that per-send variable substitution is enabled |
| P1 | Confirm `?rl` unsubscribe link resolves correctly end-to-end after the ZWS fix; test in a seed list before next deploy |
| P1 | Add `alt` text to the content image (`d06be110...jpg`); set `alt=""` on both tracking pixels |
| P2 | Fix `<meta content="IE=edge">` → add `http-equiv="X-UA-Compatible"` |
| P3 | Manually probe a sample of the 26 skipped redirect links to confirm destination URLs and UTM parameter pass-through |
## Recent history

- [[2026-05-08-did-you-forget-something]] — 8/10 (2026-05-08)
- [[2026-05-08-the-styles-taking-over-your-feed-1134578b-f07b-4590-8544-]] — 8/10 (2026-05-08)
- [[2026-05-08-almost-over-10-off]] — 8/10 (2026-05-08)

