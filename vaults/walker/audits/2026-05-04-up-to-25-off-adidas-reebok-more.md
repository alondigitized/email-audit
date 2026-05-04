---
slug: 2026-05-04-up-to-25-off-adidas-reebok-more
type: email
date: 2026-05-04
persona: walker
score: "8/10"
sender: DSW
subject: Up to 25% off adidas, Reebok, & more
tags: [email, score-8, sender/dsw]
---
# Up to 25% off adidas, Reebok, & more
**Score:** 8/10 · **Type:** Email audit · **2026-05-04**
## Executive summary

- Wrong store, wrong shoes, wrong customer. I'm a Skechers guy — I live in those Slip-ins. DSW just sent me an entire email about women's heels and strappy sandals. I counted zero slip-ons, zero men's comfort shoes, zero reason to scroll past the banner. The discount is fine — 25% off is always worth a look — but the moment I see "Play Dress Up" with a pink heel in my face, I'm done. This went in the trash.

## What's working

- The subject line is doing its job. "Up to 25% off adidas, Reebok, & more" is short, specific, and those are names I recognize. The banner at the top of the email delivers on the subject — it's the first thing I see and it's clear. The email renders well on my phone, no squinting required at the header. The "YOU'LL LOVE THESE, TOO" module at the bottom is the one place I see what might be sneakers, and that's the only section that even hints at something I'd wear.

## What's weak

- The entire body is women's fashion footwear. "Play Dress Up." Pink strappy heels. Lace-up sandals with a $39.99 tag. A model in a sundress. That's not me. I don't know how I ended up on DSW's list — I'm a Skechers Plus member, that's where I buy my shoes. DSW carries a lot of brands but made zero effort to show me men's anything. The "SHOP BY SIZE" row at the bottom is generic sizing tiles with no context for what I'm shopping for.
- The preview text includes "Dressy styles from $39.99" — that's the one extra detail I got. But "dressy styles" tells me immediately this isn't for me either. The spacer characters that follow in the preview are invisible but they're filling up real estate I can't read.
- There's also a "SHOP WIDE WIDTH / SHOP WIDE CALF" button pair that presumably links to women's wide-width shoes. Not exactly what a 62-year-old guy on his feet all day is hunting for.

## Recommendations

- 1. **Segment men vs. women** — if DSW has my purchase history, they know I'm not buying heels. A men's version of this email with adidas walking shoes or New Balance would at least be relevant.
- 2. **Lead with the brand names that apply to me** — adidas and Reebok do make men's comfort footwear. Show me that, not lace-up sandals.
- 3. **Surface a men's comfort or wide-width callout** — even a small secondary module with "Men's comfort from $X" would give me a reason to scroll.
- 4. **Drop "Play Dress Up"** — the campaign concept is completely alienating if you're sending to men who didn't opt into women's fashion.
- | Priority | Issue | Fix |
- |---|---|---|
- | High | `Src:` → `src:` in all 10 `@font-face` blocks | Lowercase the property name across all declarations |
- | High | `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
- | Medium | `text-size-adjust: none` | Change to `text-size-adjust: 100%` to match prefixed declarations |
- | Medium | `maximum-scale=1` in viewport | Remove or raise to `maximum-scale=5` for accessibility |
- | Low | HelveticaNow serving `.ttf` only | Add `.woff2` sources ahead of `.ttf` in each new `@font-face` |
- | Audit | Full source required | Re-run with complete HTML to cover links, UTM, tokens, and compliance footer |

## Full review
## 1. Executive Summary

Wrong store, wrong shoes, wrong customer. I'm a Skechers guy — I live in those Slip-ins. DSW just sent me an entire email about women's heels and strappy sandals. I counted zero slip-ons, zero men's comfort shoes, zero reason to scroll past the banner. The discount is fine — 25% off is always worth a look — but the moment I see "Play Dress Up" with a pink heel in my face, I'm done. This went in the trash.

---

## 2. Business Impact Score

**8/10**

- Sender is recognizable — DSW is a major shoe retailer, I know the name
- Concrete offer visible — "Up to 25% off" and "$39.99 from" both in the hero
- Primary CTA is unambiguous — shop buttons are clearly present
- Visual hierarchy is clear — the percentage-off banner leads, eye goes right to it
- No render bugs — clean layout, images loaded, no broken sections
- Email reflects current season — spring/dressy content is timely for May
- Offer feels honest — asterisk qualifier is visible, pricing is upfront

**Not counted:**
- Subject/hero doesn't reference men's comfort or slip-ins at all
- Demographic signals are wrong — every model, every shoe, is women's
- No loyalty/member benefits — no DSW VIP callout anywhere

---

## 3. What's Working

The subject line is doing its job. "Up to 25% off adidas, Reebok, & more" is short, specific, and those are names I recognize. The banner at the top of the email delivers on the subject — it's the first thing I see and it's clear. The email renders well on my phone, no squinting required at the header. The "YOU'LL LOVE THESE, TOO" module at the bottom is the one place I see what might be sneakers, and that's the only section that even hints at something I'd wear.

---

## 4. What's Weak

The entire body is women's fashion footwear. "Play Dress Up." Pink strappy heels. Lace-up sandals with a $39.99 tag. A model in a sundress. That's not me. I don't know how I ended up on DSW's list — I'm a Skechers Plus member, that's where I buy my shoes. DSW carries a lot of brands but made zero effort to show me men's anything. The "SHOP BY SIZE" row at the bottom is generic sizing tiles with no context for what I'm shopping for.

The preview text includes "Dressy styles from $39.99" — that's the one extra detail I got. But "dressy styles" tells me immediately this isn't for me either. The spacer characters that follow in the preview are invisible but they're filling up real estate I can't read.

There's also a "SHOP WIDE WIDTH / SHOP WIDE CALF" button pair that presumably links to women's wide-width shoes. Not exactly what a 62-year-old guy on his feet all day is hunting for.

---

## 5. Recommendations

1. **Segment men vs. women** — if DSW has my purchase history, they know I'm not buying heels. A men's version of this email with adidas walking shoes or New Balance would at least be relevant.
2. **Lead with the brand names that apply to me** — adidas and Reebok do make men's comfort footwear. Show me that, not lace-up sandals.
3. **Surface a men's comfort or wide-width callout** — even a small secondary module with "Men's comfort from $X" would give me a reason to scroll.
4. **Drop "Play Dress Up"** — the campaign concept is completely alienating if you're sending to men who didn't opt into women's fashion.

---

## 6. Bottom Line

I didn't click. Wouldn't forward it to anyone either. My buddy Dave might have a wife who'd like it, but I'm not in the business of forwarding shoe ads. DSW sent me a women's fashion email, plain and simple. The offer structure is fine, the email loads cleanly, but it had zero to do with me or my shoes.

---

## 7. Subject Line Analysis

- **Subject:** `Up to 25% off adidas, Reebok, & more`
- **Length:** 37 characters
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `2`, Urgency `3`, Specificity `7`
- **Strengths:**
  - Short and mobile-friendly, reads in one glance
  - Brand names (adidas, Reebok) are concrete anchors that lift credibility
- **Weaknesses:**
  - "& more" is filler — it erodes specificity
  - No urgency signal; could end today or in two weeks, I have no idea
- **Alt A:** `25% off adidas & Reebok — Men's picks inside`
- **Alt B:** `Your brands are 25% off this week`

---

## 8. Preview Text Analysis

- **Preview:** `+ Dressy styles from $39.99` (followed by a long chain of invisible spacer characters)
- **Length:** 27 characters of real copy
- **Scores (1-10):** Complements subject `6`, Specificity `5`, Clarity `6`, Inbox-fit `5`
- **Strengths:**
  - Adds a new data point — entry price of $39.99 that doesn't repeat the subject
  - Spacer technique fills the preview slot cleanly (no leaked "view in browser" text)
- **Weaknesses:**
  - "Dressy styles" signals women's fashion immediately — kills open interest for a male recipient before the email even opens
  - The spacer chain is a blunt instrument; a second real message would do more work
- **Alt A:** `Men's adidas & Reebok — up to 25% off`
- **Alt B:** `Comfort styles from $39.99 — today only`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `7/10`
- **Signals counted:** Sender display name is recognizable (DSW is a known retailer), subject is concrete (specific % and brand names), preview text complements the subject (doesn't repeat — adds $39.99 entry price), preview text is real copy (not view-in-browser junk), subject is under 50 chars (37 chars), no spam signals (no ALL CAPS, no exclamation stacking)
- **Rationale:** The subject and sender are clean enough that I'd probably open it — adidas and Reebok are names I know and 25% off is worth a look. But I'm on the fence because I'm a Skechers guy, not a DSW regular, so this already feels like it came from somewhere I don't fully belong.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** Hero offer is visible without scrolling (banner leads the email), CTA copy has specificity (shop buttons are visible and labeled), offer reduces price (25% off), brand voice is consistent and trusted (DSW looks and feels like DSW), no friction (clean render, images loaded, no broken gaps)
- **Rationale:** I opened it, I saw "Play Dress Up" and pink heels, and I closed it. The discount percentage got me in the door but nothing in the body was for me — I wasn't going to click through to women's sandals. If there had been a men's module I could've landed on, maybe. Not this time.

---

## 11. Evidence

- **Overall purpose:** Promotional email driving traffic to DSW's spring dressy footwear sale, featuring the "up to 25% off" multi-brand event with adidas, Reebok, Keds, and Michael Kors called out in the header.
- **Hero / primary value proposition:** "UP TO 25% OFF BIG-DEAL BRANDS*" banner with brand logo tiles, followed immediately by "PLAY DRESS UP / STYLES FROM $39.99" — clearly a women's fashion-forward campaign.
- **Membership / benefits section:** None visible. No DSW VIP Rewards callout, no loyalty pricing, no member-exclusive offer.
- **Product discoverability / recommendation modules:** "YOU'LL LOVE THESE, TOO" module near the bottom is the only section showing what appear to be sneaker-style products (likely the adidas/Reebok referenced in the subject). Main product real estate is sandals and heels.
- **Utility / secondary modules:** "SHOP BY SIZE" number grid, "SHOP WIDE WIDTH / SHOP WIDE CALF" buttons, "SHOPPING MADE EASY" icon row at the bottom.
- **Bugs / friction / clarity issues:** No visible render bugs — images loaded, layout is intact. The "SHOP WIDE CALF" button is a bit puzzling in context since the main content is heels; it implies this is targeting women's wide-calf boot shoppers, further confirming the audience mismatch.

---

## Technical Audit

## Technical Audit — DSW "Up to 25% off adidas, Reebok, & more"

---

### 1. Technical Summary

Email is built on Braze with table-layout HTML and a custom dark-mode implementation. The HTML source is truncated, so compliance, body links, and personalization token rendering cannot be fully evaluated; the issues below are confirmed from the visible source only.

---

### 2. Link & Tracking Issues

**Cannot fully evaluate** — HTML is truncated before body links appear. No link or click-tracking URLs are visible in the provided source. A full-source audit is needed to confirm UTM coverage and redirect integrity.

No issues confirmed from visible source.

---

### 3. Rendering & Accessibility

**`Src:` (capitalized) in all `@font-face` declarations — confirmed bug.**
All 10 `@font-face` blocks use `Src:` instead of the required lowercase `src:`. Invalid CSS property names are silently ignored; web fonts will fail to load in Gmail, Outlook.com, and any client that enforces strict CSS parsing. Fallback stack will render instead.

```css
/* Broken — capital S */
Src: url("https://braze-images.com/.../original.woff") format('woff');
```

**`<meta content="text/html; charset=utf-8" />` — missing `http-equiv` attribute.**
Without `http-equiv="Content-Type"`, the charset declaration is non-functional. Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

**`<meta content="IE=Edge" />` — missing `http-equiv` attribute.**
Same issue. Requires `http-equiv="X-UA-Compatible"` to trigger IE/Edge compat mode.

**`text-size-adjust: none` contradicts earlier declarations.**
The reset block sets `-ms-text-size-adjust: 100%` and `-webkit-text-size-adjust: 100%`, then immediately sets the unprefixed `text-size-adjust: none`. The `none` value suppresses user-agent scaling entirely rather than preventing auto-resize — this is more restrictive than intended and inconsistent with the prefixed values.

**`maximum-scale=1` in viewport meta.**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Prevents users from pinching to zoom on mobile. WCAG 1.4.4 failure risk; no functional email benefit justifies it.

**HelveticaNow font files use `.ttf` only; no `.woff2`.**
The six new HelveticaNow faces (noted by `?175518xxxx` cache-busting params) load only `.ttf`. Modern clients prefer `.woff2` → `.woff` fallback for performance. The older Futura PT faces correctly serve `.woff`. Inconsistency suggests HelveticaNow was added without format optimization.

---

### 4. Personalization & Merge Tokens

**Cannot evaluate** — body is truncated. No Braze Liquid tokens (`{{ }}`, `{% %}`) are visible in the `<head>` block. Full-source review required to confirm no unresolved tokens reach render.

---

### 5. Compliance

**Cannot evaluate** — unsubscribe footer, physical mailing address, and `List-Unsubscribe` header values are all in the body/footer, which is cut off. Authentication headers (SPF/DKIM/DMARC pass status for `e.dsw.com`) require inbox delivery headers not present in the HTML source snippet.

---

### 6. Email-to-Site Continuity

**Cannot evaluate** — no CTA links or product URLs are visible in the truncated source. UTM parameter coverage and landing page alignment require full-source review.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| High | `Src:` → `src:` in all 10 `@font-face` blocks | Lowercase the property name across all declarations |
| High | `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
| Medium | `text-size-adjust: none` | Change to `text-size-adjust: 100%` to match prefixed declarations |
| Medium | `maximum-scale=1` in viewport | Remove or raise to `maximum-scale=5` for accessibility |
| Low | HelveticaNow serving `.ttf` only | Add `.woff2` sources ahead of `.ttf` in each new `@font-face` |
| Audit | Full source required | Re-run with complete HTML to cover links, UTM, tokens, and compliance footer |
## Recent history

- [[2026-05-04-there-s-still-time-to-get-20-off-select-styles]] — 7/10 (2026-05-04)
- [[2026-05-04-extra-20-off-ends-tonight]] — 6/10 (2026-05-04)
- [[2026-05-03-the-us94-official-licensed-product-collection]] — 6/10 (2026-05-03)

