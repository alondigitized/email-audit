---
slug: 2026-05-03-did-you-forget-something
type: email
date: 2026-05-03
persona: walker
score: "9/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-9, sender/skechers]
---
# Did you forget something?
**Score:** 9/10 · **Type:** Email audit · **2026-05-03**
## Executive summary

- Alright, so Skechers is reminding me I left something in my cart — and honestly, fair enough, I probably did. The product they're showing me is the GO WALK Glide-Step 2.0, which is a Slip-in, so at least they got the right product in front of me. The "READY TO CHECK OUT?" banner is big and clear, the orange CTA button is easy to tap, and there's a 20% off offer sitting right in the middle of the email. So far so good. But then I scroll down and see a bunch of women's shoes in the recommendation row, a Mother's Day Sale fine print buried at the bottom, and zero mention of my Skechers Plus membership benefits. Feels like the right skeleton with the wrong clothes on it.

## What's working

- The abandoned cart mechanic is doing its job. Showing me the exact shoe I left behind — a Slip-in, my preferred style — is genuinely useful. I don't have to hunt for the product or figure out what they're talking about. The two "COMPLETE YOUR ORDER" buttons are big, orange, and obvious, which is what I need on a phone screen. The 20% off banner gives me a reason to act that wasn't there before. And the overall layout is clean — text is large enough to read, no clutter, no wall of copy. The hero banner is visually engaging without being loud or confusing.

## What's weak

- The recommendation row is the most glaring problem for me. After showing me my cart item (a men's Slip-in), the suggested products appear to be women's styles — I can see "Women's Slip-ins: Cozying Foam" and what looks like a "Spring Bloom" patterned shoe. As a 62-year-old guy, that immediately signals "this email wasn't built for me." It breaks the momentum right after a strong hero.
- The 20% off offer is tied to the Mother's Day Sale in the fine print. I almost missed that. I don't know if Mother's Day promo terms apply to me or not — that's the kind of ambiguity that makes me not click.
- No Skechers Plus mention. I'm a Plus member. Skechers knows this. If there are member-only perks or early access pricing, that's the one thing that would make me feel like a valued customer rather than a generic cart-abandoner.
- The "LET'S GET TEXTING" and "DOWNLOAD THE APP" modules feel like clutter after the offer. They dilute the one thing I should be doing: completing my order.

## Recommendations

- 1. **Replace women's recommended products with men's styles** — Men's Slip-ins, men's GO WALK, maybe a second men's colorway of the same shoe. Don't mix genders in the recommendations for a triggered cart email.
- 2. **Call out my Plus status** — Even a line like "Complete your order and earn Plus points" would make me feel like a known customer. Tie the 20% off to my member account explicitly.
- 3. **Clarify the 20% offer applies to me** — Remove or reframe the Mother's Day association in a way that doesn't make me think it's a women's-only promotion.
- 4. **Drop the app and texting modules** — Or move them to the very bottom. They're distractions between me and the checkout CTA.
- 5. **Add a mild deadline** — "Offer ends Sunday" would give me enough push. Right now the urgency is entirely implicit.
- | Priority | Action |
- |---|---|
- | High | Upgrade all `http://skechers.attentivemail.com` tracking links to `https://` |
- | High | Obtain full HTML source and confirm CAN-SPAM footer (address + unsubscribe) is present |
- | Medium | Fix charset meta: add `http-equiv="Content-Type"` |
- | Medium | Run a test send and verify UTM parameters on all destination URLs |
- | Low | Replace U+00AD soft hyphens in preheader padding with U+200B zero-width spaces |
- | Low | Add a non-empty `<title>` value matching the subject line |
- | Low | Confirm product personalization tokens are firing correctly in test send |

## Full review
---

## 1. Executive Summary

Alright, so Skechers is reminding me I left something in my cart — and honestly, fair enough, I probably did. The product they're showing me is the GO WALK Glide-Step 2.0, which is a Slip-in, so at least they got the right product in front of me. The "READY TO CHECK OUT?" banner is big and clear, the orange CTA button is easy to tap, and there's a 20% off offer sitting right in the middle of the email. So far so good. But then I scroll down and see a bunch of women's shoes in the recommendation row, a Mother's Day Sale fine print buried at the bottom, and zero mention of my Skechers Plus membership benefits. Feels like the right skeleton with the wrong clothes on it.

---

## 2. Business Impact Score

**9/10**

- Subject or hero copy explicitly references Slip-ins — the product name reads "Skechers Slip-ins: GO WALK Glide-Step 2.0 - Santiago" ✓
- Sender is Skechers — a brand I actively shop and am subscribed to ✓
- Concrete offer visible — "20% OFF A SINGLE PAIR" is right there in the email ✓
- Primary CTA is unambiguous — two "COMPLETE YOUR ORDER" orange buttons, hard to miss ✓
- Visual hierarchy is clear — banner → product → CTA → offer, eye travels naturally ✓
- No render bugs visible — layout is clean, images load, no broken sections ✓
- Demographic signals mixed — hero shoe looks masculine (gray/blue athletic), but the recommendation row shows women's Slip-ins and Spring Bloom styles ✗
- Email reflects current campaign — Mother's Day Sale timing in fine print confirms active send ✓
- Loyalty/member benefits not visible — no Skechers Plus callout anywhere ✗
- Offer feels honest — "20% off a single pair" is stated clearly, fine print is present but readable ✓

*8 criteria TRUE → 1 + 8 = 9*

---

## 3. What's Working

The abandoned cart mechanic is doing its job. Showing me the exact shoe I left behind — a Slip-in, my preferred style — is genuinely useful. I don't have to hunt for the product or figure out what they're talking about. The two "COMPLETE YOUR ORDER" buttons are big, orange, and obvious, which is what I need on a phone screen. The 20% off banner gives me a reason to act that wasn't there before. And the overall layout is clean — text is large enough to read, no clutter, no wall of copy. The hero banner is visually engaging without being loud or confusing.

---

## 4. What's Weak

The recommendation row is the most glaring problem for me. After showing me my cart item (a men's Slip-in), the suggested products appear to be women's styles — I can see "Women's Slip-ins: Cozying Foam" and what looks like a "Spring Bloom" patterned shoe. As a 62-year-old guy, that immediately signals "this email wasn't built for me." It breaks the momentum right after a strong hero.

The 20% off offer is tied to the Mother's Day Sale in the fine print. I almost missed that. I don't know if Mother's Day promo terms apply to me or not — that's the kind of ambiguity that makes me not click.

No Skechers Plus mention. I'm a Plus member. Skechers knows this. If there are member-only perks or early access pricing, that's the one thing that would make me feel like a valued customer rather than a generic cart-abandoner.

The "LET'S GET TEXTING" and "DOWNLOAD THE APP" modules feel like clutter after the offer. They dilute the one thing I should be doing: completing my order.

---

## 5. Recommendations

1. **Replace women's recommended products with men's styles** — Men's Slip-ins, men's GO WALK, maybe a second men's colorway of the same shoe. Don't mix genders in the recommendations for a triggered cart email.
2. **Call out my Plus status** — Even a line like "Complete your order and earn Plus points" would make me feel like a known customer. Tie the 20% off to my member account explicitly.
3. **Clarify the 20% offer applies to me** — Remove or reframe the Mother's Day association in a way that doesn't make me think it's a women's-only promotion.
4. **Drop the app and texting modules** — Or move them to the very bottom. They're distractions between me and the checkout CTA.
5. **Add a mild deadline** — "Offer ends Sunday" would give me enough push. Right now the urgency is entirely implicit.

---

## 6. Bottom Line

I'd probably click "COMPLETE YOUR ORDER" on this one because the product IS what I wanted. But the women's recommendations and the Mother's Day fine print make me feel like the email wasn't fully thought through for someone like me. It's a 70% solution — the trigger is right, the product is right, the CTA is right, but the personalization falls apart in the supporting content. Wouldn't forward this to a buddy. Might mention the GO WALK Glide-Step if someone asked, not this email.

---

## 7. Subject Line Analysis

- **Subject:** `Did you forget something?`
- **Length:** 25 characters
- **Scores (1-10):** Clarity `7`, Curiosity `6`, Personalization `3`, Urgency `5`, Specificity `2`
- **Strengths:**
  - Short, reads perfectly on mobile
  - Abandoned cart context makes it feel slightly personalized even without explicit personalization
- **Weaknesses:**
  - Zero mention of shoes, Slip-ins, or any product — I'd need to open to find out what "something" means
  - No urgency signal — no deadline, no stock warning, nothing
- **Alt A:** `Your GO WALK Slip-ins are still waiting`
- **Alt B:** `20% off if you come back — your cart's still here`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the rendered email body does not surface a distinct preheader; inbox clients would likely pull "COMPLETE YOUR ORDER" or body boilerplate
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `2`, Inbox-fit `1`
- **Strengths:**
  - None visible — a missed opportunity
- **Weaknesses:**
  - If "COMPLETE YOUR ORDER" is what inbox clients preview, it repeats the CTA rather than adding context
  - No product name, no offer callout, no reason to open beyond the subject
- **Alt A:** `Your Slip-ins are still in your cart — here's 20% off to finish`
- **Alt B:** `GO WALK Glide-Step 2.0 is waiting. 20% off ends soon.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** sender recognizable (Skechers), subject is concrete in abandoned cart context, subject under 50 chars, no spam signals (no ALL CAPS or !!! stacking), segmentation hints (abandoned cart trigger implies they know my specific product)
- **Rationale:** "Did you forget something?" from Skechers is enough to get me to open — I know I had something in my cart. But the subject doesn't mention shoes, Slip-ins, or any offer, so it's relying entirely on the abandoned cart context to do the work. A retired guy like me gets a lot of email; "something" isn't much to go on.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `8/10`
- **Signals counted:** hero offer visible above the fold without scrolling, primary CTA is in my category (men's Slip-in shown), CTA copy is specific ("COMPLETE YOUR ORDER"), offer reduces price (20% off), specific product hero linked (not homepage), brand voice consistent and trusted, email renders without friction
- **Rationale:** The combination of seeing my exact cart item plus a 20% off offer I didn't have when I first browsed is a genuine reason to click through. The main thing pulling me back from a 9 is the women's recommendation row — it plants a small seed of doubt that the discount might be Mother's Day-scoped and not for me.

---

## 11. Evidence

- **Overall purpose:** Abandoned cart recovery email — prompting me to return and complete a purchase I started
- **Hero / primary value proposition:** "READY TO CHECK OUT?" with the specific cart item (Skechers Slip-ins: GO WALK Glide-Step 2.0 - Santiago) and two "COMPLETE YOUR ORDER" CTAs; reinforced by the 20% OFF A SINGLE PAIR offer below
- **Membership / benefits section:** None visible — Skechers Plus is not referenced anywhere in the email body
- **Product discoverability / recommendation modules:** One row of smaller product tiles below the hero; appears to feature women's Slip-ins styles (Cozying Foam, Spring Bloom visible in text labels), which is mismatched for Walker; followed by "SHOP ALL BEST SELLERS" button
- **Utility / secondary modules:** Category navigation bar (WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE), LET'S GET TEXTING (83808), DOWNLOAD THE APP with App Store / Google Play badges, CURBSIDE PICKUP, SHOP NOW PAY LATER (Afterpay, Klarna), FIND A STORE, FOLLOW US social icons
- **Bugs / friction / clarity issues:** No broken images or layout issues visible; fine print at the bottom reads "Mother's Day Sale Buy One, Get One 50% off or 20% off 1 Item…" which creates ambiguity about whether the 20% offer is scoped to a women's-focused promotional event — not a render bug, but a clarity issue visible in the render

---

## Technical Audit

## Technical Email Audit — SKECHERS "Did you forget something?" (Cart Abandonment)

---

### 1. Technical Summary

Cart abandonment trigger sent via Attentive ESP (`msgs.skechers.com` / `attentivemail.com`). HTML source is truncated, which blocks full audit of CAN-SPAM footer elements and image alt text coverage — those gaps are called out explicitly below.

---

### 2. Link & Tracking Issues

**[HIGH] All click-tracking links use HTTP, not HTTPS.**
Every link routes through `http://skechers.attentivemail.com/ls/click?upn=...` (no TLS). This exposes click-tracking requests to potential interception in transit and may trigger security warnings in strict email clients or corporate proxies.

Evidence:
```
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorXOZu5a..."
```

**[INFO] Destination URLs are opaque.** All final destinations are encoded inside the Attentive redirect payload. UTM parameter presence cannot be confirmed from the HTML source alone — requires click-through testing to verify (see §6).

---

### 3. Rendering & Accessibility

**[MEDIUM] `<meta>` charset tag is malformed.**
```html
<meta content="text/html; charset=utf-8" />
```
The `http-equiv="Content-Type"` attribute is missing. Correct form for email:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Without it, some legacy email clients (Lotus Notes, older Outlook) may not correctly infer the charset.

**[LOW] Empty `<title>` tag.**
```html
<title></title>
```
Screen readers may announce the email without a meaningful document title. Convention is to match the subject line or leave it as a space, not empty.

**[LOW] All link underlines suppressed globally.**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
Removes underline decoration from every link. Reduces visual distinguishability for low-vision users who rely on decoration rather than color to identify links.

**[LOW] Preheader padding mixes character types.**
The preheader spacer uses both `&#x034F;` (U+034F COMBINING GRAPHEME JOINER) and `&shy;` / `­` (U+00AD SOFT HYPHEN). Soft hyphens are technically renderable — some plain-text rendering engines will output them as `-` characters. Zero-width non-breaking spaces (U+FEFF) or zero-width spaces (U+200B) are safer for padding.

**[BLOCKED] Image alt text coverage cannot be audited** — source is truncated before the product image rows.

---

### 4. Personalization & Merge Tokens

No unfired/raw merge tokens visible in the available source. A cart abandonment email should be rendering personalized cart items (product name, image, price, quantity); this cannot be verified without the full rendered output or a test send with live data populated.

---

### 5. Compliance

**[HIGH — UNVERIFIABLE] CAN-SPAM footer not present in truncated source.**
Physical mailing address and one-click unsubscribe mechanism are required by CAN-SPAM. Neither appears in the available HTML. This may simply be due to truncation, but must be confirmed against the full source before sending.

**[INFO] Authentication headers not auditable from HTML.** SPF, DKIM, and DMARC alignment for `msgs.skechers.com` require inspection of raw email headers (e.g., `Authentication-Results`, `DKIM-Signature`), not the HTML body.

---

### 6. Email-to-Site Continuity

Cannot confirm UTM parameter values from this source — all destination URLs are encoded in Attentive's redirect payloads. The following must be verified via click-through testing on the final rendered email:

- `utm_source`, `utm_medium`, `utm_campaign` present on all CTA links
- `utm_content` differentiating the hero CTA from secondary product links
- Cart page correctly restores the abandoned session on arrival (deep-link hygiene)

The "web version" link and logo link both route through Attentive click tracking — correct behavior.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| High | Upgrade all `http://skechers.attentivemail.com` tracking links to `https://` |
| High | Obtain full HTML source and confirm CAN-SPAM footer (address + unsubscribe) is present |
| Medium | Fix charset meta: add `http-equiv="Content-Type"` |
| Medium | Run a test send and verify UTM parameters on all destination URLs |
| Low | Replace U+00AD soft hyphens in preheader padding with U+200B zero-width spaces |
| Low | Add a non-empty `<title>` value matching the subject line |
| Low | Confirm product personalization tokens are firing correctly in test send |
## Recent history

- [[2026-05-03-your-cart-expires-soon]] — 8/10 (2026-05-03)
- [[2026-05-03-best-sellers-no-brainers]] — 7/10 (2026-05-03)
- [[2026-05-03-last-day-bogo-50-off-shoes]] — 8/10 (2026-05-03)

