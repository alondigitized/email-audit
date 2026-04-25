---
slug: 2026-04-25-your-cart-expires-soon
type: email
date: 2026-04-25
persona: walker
score: "5/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-5, sender/skechers]
---
# Your cart expires soon!
**Score:** 5/10 · **Type:** Email audit · **2026-04-25**
## Executive summary

- Alright, I'll be straight with you — this one caught my eye because it's about stuff I actually left in my cart. The big "YOU LIKED THESE" headline is friendly enough, and yeah, the GO WALK Glide-Step Slip-ins up top are exactly the kind of shoe I'd be looking at. But then I scroll down and it's a row of women's shoes? What am I doing with those? I'm a 62-year-old guy, not shopping for my wife here. The 20% off deal pops, which is nice — but I couldn't tell right away if it applied to what's actually in my cart. Overall: good premise, sloppy execution.
- The cart abandonment hook is right, but they lose me with the gender mismatch in the product row and a discount offer that raises more questions than it answers.

## What's working

- **Hero is spot-on.** The GO WALK Glide-Step Slip-ins in the hero — that orange colorway, nice big photo, clear name — that's the shoe I was already looking at. Showing me exactly what I left behind is smart.
- **"COMPLETE YOUR ORDER" button** is clear and blue. Easy to find, easy to tap, no confusion about what it does.
- **20% off.** I see a discount, that gets my attention. I'm a Plus member and I like a deal.
- **Layout is clean top-to-bottom.** No clutter fighting for my eyes, text on the hero is big enough I don't have to squint.

## What's weak

- **That product row below the hero is all Women's shoes.** Women's Slip-ins, Women's Marino, Women's this, Women's that — I'm Walker Miles, I browse Men's. This feels like they grabbed a generic best-sellers block and didn't bother checking who they were sending it to. Mildly insulting.
- **The 20% off offer is vague.** Does it apply to the thing in my cart? Is it a new purchase? There's fine print in tiny text at the bottom I can barely read on a phone screen. I don't want to squint through legalese to figure out if I'm getting a deal.
- **"Let's Get Texting" and Buy Now Pay Later sections** — I don't want to text a shortcode for offers, and Afterpay and Klarna mean nothing to me. I pay for my shoes. These feel like they were designed for a 28-year-old.
- **Small rendering artifact** at the very top left — looks like a code or SKU label that leaked through. Looks sloppy and breaks the professional feel right out of the gate.
- **No mention of my Skechers Plus membership.** I've been a loyal member. Tell me this deal stacks with my points or confirm my status. Make me feel known.

## Recommendations

- 1. **Strip the women's product row for male recipients.** Show me Men's best sellers or Men's Slip-ins alternatives. If the system can target me with my cart items, it can target my gender.
- 2. **Spell out the 20% offer clearly**, right next to the CTA — "20% off your cart item, today only" — no fine print hunting on a phone screen.
- 3. **Add a Skechers Plus callout.** Even one line: "As a Plus member, your points apply at checkout." That's the thing that tips me from browsing to buying.
- 4. **Fix whatever leaked into the top-left corner.** A visible SKU or code tag is an amateur move and I notice it.
- 5. **Ditch the Afterpay/Klarna block** or push it way down. It reads as filler for my demographic.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP click-tracking URLs | Change all `href="http://skechers.attentivemail.com/..."` to `https://` in the Attentive template |
- | High | Empty `<title>` | Set to a descriptive string, e.g., `Your Skechers cart is expiring` |
- | High | DMARC alignment verification | Pull a raw email header and confirm DKIM `d=` aligns with `skechers.com` |
- | Medium | Soft hyphen preheader padding | Replace U+00AD with U+034F or U+200C |
- | Medium | Link underline suppression | Restore `text-decoration` for in-body links or use a distinct non-color indicator |
- | Medium | UTM parameter audit | Decode all `upn=` destinations; confirm UTM params are present and correct |
- | Medium | Cart fallback state | Verify ESP template behavior when cart payload is empty or expired |
- | Low | `role="presentation"` on tables | Add to all layout tables in the template |
- | Low | Confirm footer compliance elements | Manually verify unsubscribe link and postal address are present |
- | Low | Image `alt` coverage | Audit all `<img>` in full source for `alt` attributes |

## Full review
---

## 1. Executive Summary

Alright, I'll be straight with you — this one caught my eye because it's about stuff I actually left in my cart. The big "YOU LIKED THESE" headline is friendly enough, and yeah, the GO WALK Glide-Step Slip-ins up top are exactly the kind of shoe I'd be looking at. But then I scroll down and it's a row of women's shoes? What am I doing with those? I'm a 62-year-old guy, not shopping for my wife here. The 20% off deal pops, which is nice — but I couldn't tell right away if it applied to what's actually in my cart. Overall: good premise, sloppy execution.

---

## 2. Business Impact Score: 5/10

The cart abandonment hook is right, but they lose me with the gender mismatch in the product row and a discount offer that raises more questions than it answers.

---

## 3. What's Working

- **Hero is spot-on.** The GO WALK Glide-Step Slip-ins in the hero — that orange colorway, nice big photo, clear name — that's the shoe I was already looking at. Showing me exactly what I left behind is smart.
- **"COMPLETE YOUR ORDER" button** is clear and blue. Easy to find, easy to tap, no confusion about what it does.
- **20% off.** I see a discount, that gets my attention. I'm a Plus member and I like a deal.
- **Layout is clean top-to-bottom.** No clutter fighting for my eyes, text on the hero is big enough I don't have to squint.

---

## 4. What's Weak

- **That product row below the hero is all Women's shoes.** Women's Slip-ins, Women's Marino, Women's this, Women's that — I'm Walker Miles, I browse Men's. This feels like they grabbed a generic best-sellers block and didn't bother checking who they were sending it to. Mildly insulting.
- **The 20% off offer is vague.** Does it apply to the thing in my cart? Is it a new purchase? There's fine print in tiny text at the bottom I can barely read on a phone screen. I don't want to squint through legalese to figure out if I'm getting a deal.
- **"Let's Get Texting" and Buy Now Pay Later sections** — I don't want to text a shortcode for offers, and Afterpay and Klarna mean nothing to me. I pay for my shoes. These feel like they were designed for a 28-year-old.
- **Small rendering artifact** at the very top left — looks like a code or SKU label that leaked through. Looks sloppy and breaks the professional feel right out of the gate.
- **No mention of my Skechers Plus membership.** I've been a loyal member. Tell me this deal stacks with my points or confirm my status. Make me feel known.

---

## 5. Recommendations

1. **Strip the women's product row for male recipients.** Show me Men's best sellers or Men's Slip-ins alternatives. If the system can target me with my cart items, it can target my gender.
2. **Spell out the 20% offer clearly**, right next to the CTA — "20% off your cart item, today only" — no fine print hunting on a phone screen.
3. **Add a Skechers Plus callout.** Even one line: "As a Plus member, your points apply at checkout." That's the thing that tips me from browsing to buying.
4. **Fix whatever leaked into the top-left corner.** A visible SKU or code tag is an amateur move and I notice it.
5. **Ditch the Afterpay/Klarna block** or push it way down. It reads as filler for my demographic.

---

## 6. Bottom Line

I'd probably click "Complete Your Order" — the shoe in the hero is mine and the 20% off nudges me — but this email could've been a slam dunk and it settled for a single. The women's shoe carousel tells me Skechers is blasting this template at everyone without thinking about who I am. I'm loyal, I'm a Plus member, I was already halfway to buying. Treat me like you know that.

---

## 7. Subject Line Analysis

- **Subject:** `Your cart expires soon!`
- **Length:** 22 characters
- **Scores (1-10):** Clarity `8`, Curiosity `5`, Personalization `2`, Urgency `6`, Specificity `3`
- **Strengths:**
  - Short and readable — renders perfectly on a phone without truncation
  - Creates mild pressure without feeling aggressive
- **Weaknesses:**
  - Zero personalization — doesn't name the product, my name, or anything specific
  - "Expires soon" is vague; no timeframe means I might shrug and come back later (or not at all)
- **Alt A:** `Walker, your GO WALK Glide-Steps are waiting`
- **Alt B:** `Your Slip-ins are almost gone — 20% off today only`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — what I can see at the very top of the render suggests a code or SKU label is the first visible text element, which is likely what populated the preheader in my inbox
- **Length:** N/A (unintended content)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (none — there's nothing intentional here to credit)
- **Weaknesses:**
  - If that leaked code is what my inbox client grabbed as preview text, it's the first thing I see before even opening — kills credibility immediately
  - Missed opportunity to reinforce the cart item or discount right in the inbox
- **Alt A:** `Your GO WALK Glide-Steps are still in your cart — 20% off if you grab them today`
- **Alt B:** `Don't leave your Slip-ins behind. Complete your order and save 20%.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** "Your cart expires soon" is direct enough that I'd open it — I do remember looking at those shoes and I don't like leaving things unfinished. But the subject gives me no product name, no dollar hook, nothing personal, so it reads like a generic blast. I open it more out of mild concern I'm losing something than genuine excitement.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** The hero shoe is exactly right and the blue "COMPLETE YOUR ORDER" button is easy to find and tap — I'm hovering over clicking. But the women's shoe carousel below the hero gives me pause, like maybe this email wasn't really meant for me, and I'm not sure the 20% is clearly connected to my cart. I might click, but I might also close it and check the site directly instead.

---

## 11. Evidence

- **Overall purpose:** Cart abandonment recovery — remind me what I left behind and push me to complete the purchase.
- **Hero / primary value proposition:** Skechers Slip-ins GO WALK Glide-Step 2.0 - Santiago (orange colorway) with a prominent "COMPLETE YOUR ORDER" CTA. Big image, readable product name. Appropriate for my interests.
- **Membership / benefits section:** Absent entirely. No Skechers Plus acknowledgment, no points balance, no member-exclusive framing. This is a missed loyalty lever.
- **Product discoverability / recommendation modules:** A five-to-six item product carousel appears below the hero — but visibly labeled as Women's styles. This is a targeting error for a male recipient. A "SHOP ALL BEST SELLERS" button follows.
- **Utility / secondary modules:** 20% off banner (dark background, "SHOP NOW" CTA); navigation bar with WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE; "Let's Get Texting" shortcode promo; App Store download; Curbside Pickup; Afterpay and Klarna BNPL; Find a Store; Social follow icons.
- **Bugs / friction / clarity issues:** A small code or label string is visible in the upper-left corner of the email render — appears to be a tracking tag or SKU value that was not suppressed. It's the first thing rendered in the email body and likely bleeds into the preheader slot in the inbox client.

---

## Technical Audit

## Technical Audit — Skechers Cart Abandonment Email

---

### 1. Technical Summary

Cart abandonment email delivered via Attentive (sending subdomain `msgs.skechers.com`, click-tracking through `skechers.attentivemail.com`). Table-based layout with inline + embedded CSS for Outlook compatibility. Several technical issues identified below; most are fixable in the ESP template.

---

### 2. Link & Tracking Issues

**HTTP click-tracking URLs (not HTTPS)**
All tracked links use `http://` for the Attentive redirect domain:
```
href="http://skechers.attentivemail.com/ls/click?upn=..."
```
The initial request is sent over an unencrypted channel before Attentive redirects to HTTPS. While Attentive almost certainly issues a 301/302 to HTTPS, the first hop exposes the user's click token in plaintext. Some corporate email security proxies will flag or strip HTTP links. This should be `https://`.

**Final destination URLs unverifiable**
All links are fully opaque through Attentive's encoded `upn=` parameter. Without decoding, it is not possible to verify that destination pages are reachable, returning 200, or carrying correct UTM parameters. A link-validation pass against decoded destinations is required.

---

### 3. Rendering & Accessibility

**Empty `<title>` element**
```html
<title></title>
```
Required by WCAG 2.4.2 (Level A). Screen readers and some email clients (Samsung Mail, Outlook.com preview pane) surface the document title. Should be set to something meaningful, e.g., `Your Skechers cart is expiring`.

**Link underlines globally suppressed**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This removes the visual underline from all links for Gmail's `#MessageViewBody` wrapper. Fails WCAG 1.4.1 (use of color alone to convey information) if link color is the only distinguisher. Links within body copy need a non-color indicator (underline or bold).

**Preheader padding character mix**
The preheader spacer uses two distinct Unicode padding strategies:
- `͏` — U+034F COMBINING GRAPHEME JOINER (zero-width, invisible)
- `­` — U+00AD SOFT HYPHEN

Soft hyphens (U+00AD) are not zero-width in all environments — they can render as visible `-` characters in plain-text fallbacks and some screen readers. Replace U+00AD with additional U+034F or U+200C (ZERO WIDTH NON-JOINER) characters, which are universally invisible.

**Layout tables missing `role="presentation"`**
The visible table structure (`.nl-container`, `.row-content`, `.stack`) does not include `role="presentation"` on layout tables. Without this, VoiceOver and NVDA announce each table as a data structure, creating noisy navigation for screen reader users.

**`alt` attribute coverage**
Image `alt` values are not visible in the truncated source. All `<img>` tags — including the logo in row-2 and product images — must carry explicit `alt` attributes. Decorative images should use `alt=""`.

---

### 4. Personalization & Merge Tokens

No unresolved literal merge tokens (e.g., `{{first_name}}`, `[CART_ITEM]`) are visible in the truncated HTML, which is correct. However, this is a cart abandonment email and the truncated source does not confirm that dynamic cart content (product name, image, price, quantity) is actually injected. If the template renders with static placeholder content when the cart payload is missing or expired, customers would receive a blank or broken cart section. Verify the ESP template has a fallback/guard for empty cart state.

---

### 5. Compliance

**Unsubscribe link and physical address — not confirmed**
The truncated source ends before the footer. CAN-SPAM requires both a functional opt-out mechanism and a valid physical postal address in every commercial email. These must be present in the footer. Cannot confirm from current source — flag for manual footer check.

**Sending subdomain authentication**
Sending from `hello@msgs.skechers.com`. For DMARC `p=reject` or `p=quarantine` to pass, `msgs.skechers.com` must be covered by SPF and DKIM records that align with the `skechers.com` organizational domain. Attentive typically handles DKIM signing on behalf of the brand — confirm the DKIM `d=` value in the email headers is `skechers.com` or `msgs.skechers.com` (not `attentivemail.com`) for proper alignment.

---

### 6. Email-to-Site Continuity

**UTM parameters unverifiable**
Because all links are encoded through `attentivemail.com/ls/click?upn=`, the UTM parameters on destination URLs cannot be confirmed from the source. Decode a representative sample of links (logo, primary CTA, product image, "web version") and verify each carries at minimum:
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content` (differentiating CTA placement)

**"Web version" link**
A plain-text "web version" link is present in the header:
```html
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorXOZu5..."
```
This also uses `http://` and routes through Attentive tracking. Confirm the hosted web version page renders correctly as a standalone page (not just a raw HTML dump) and that its canonical URL is not indexed by search engines.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP click-tracking URLs | Change all `href="http://skechers.attentivemail.com/..."` to `https://` in the Attentive template |
| High | Empty `<title>` | Set to a descriptive string, e.g., `Your Skechers cart is expiring` |
| High | DMARC alignment verification | Pull a raw email header and confirm DKIM `d=` aligns with `skechers.com` |
| Medium | Soft hyphen preheader padding | Replace U+00AD with U+034F or U+200C |
| Medium | Link underline suppression | Restore `text-decoration` for in-body links or use a distinct non-color indicator |
| Medium | UTM parameter audit | Decode all `upn=` destinations; confirm UTM params are present and correct |
| Medium | Cart fallback state | Verify ESP template behavior when cart payload is empty or expired |
| Low | `role="presentation"` on tables | Add to all layout tables in the template |
| Low | Confirm footer compliance elements | Manually verify unsubscribe link and postal address are present |
| Low | Image `alt` coverage | Audit all `<img>` in full source for `alt` attributes |
## Recent history

- [[2026-04-25-did-you-forget-something]] — 6/10 (2026-04-25)
- [[2026-04-25-10-off-to-celebrate-spring]] — 3/10 (2026-04-25)
- [[2026-04-24-save-30-during-the-mix-match-event]] — 3/10 (2026-04-24)

