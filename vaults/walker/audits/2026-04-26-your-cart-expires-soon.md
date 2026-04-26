---
slug: 2026-04-26-your-cart-expires-soon
type: email
date: 2026-04-26
persona: walker
score: "6/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-6, sender/skechers]
---
# Your cart expires soon!
**Score:** 6/10 · **Type:** Email audit · **2026-04-26**
## Executive summary

- **Email:** "Your cart expires soon!" | From: SKECHERS | Date: 2026-04-26
- Alright, so this one actually makes sense to me — I can see it's about my cart, there's a shoe I apparently looked at sitting right there at the top, and there's a discount. That's a decent recipe. But Skechers muddied it pretty quick. Right below my shoe — a perfectly good men's Slip-in — they put a row of what looks like women's polka-dot flats and other ladies' styles. That broke the spell. I went from "oh yeah, I was looking at those" to "wait, is this even for me?" The 20% off is the hook that pulls me back, but by then I've already lost a little trust in the email knowing what it's doing.
- The bones are there — cart recovery with a discount on top is a solid play. But the cross-gender product row and the cluttered bottom half drag it down. It should score higher for a man in my position; it doesn't because it didn't quite commit to being about me.

## What's working

- **The hero product is the right shoe.** Skechers Slip-ins Max Cushioning Arch Fit 2.0 — that's a men's walking shoe, that's right in my wheelhouse. Seeing it big at the top with "YOU LIKED THESE / AND YOU WEREN'T WRONG" is a nice confidence boost rather than a guilt trip about abandoning the cart.
- **"COMPLETE YOUR ORDER" CTA is clear.** One button, simple language. I don't have to hunt for it.
- **20% OFF A SINGLE PAIR.** That's the number that makes me reach for my phone. It's prominent, dark background, stands out. A price-conscious guy like me notices that immediately.
- **Cart recovery framing is friendly, not pushy.** "You weren't wrong" is a good line. It doesn't lecture me.

## What's weak

- **That product row below the hero is women's shoes.** I can see polka-dot red flats, some kind of women's athletic style, and what looks like a couple more ladies' options in that thumbnail strip. I'm a 62-year-old guy — why is Skechers showing me women's bestsellers underneath my men's cart item? That's a targeting miss that makes me feel like I fell into the wrong bucket.
- **"SHOP ADDITIONAL STYLES" section is just a list.** WOMEN, MEN, KIDS, CLOTHING — no images, no product highlights. It reads like a sitemap, not a recommendation. I'm not clicking a plain text link when I could just open the app.
- **"LET'S GET TEXTING" module.** Texting a shortcode for deals — I'm not 25. I barely want to download another app. This module does nothing for me.
- **SHOP NOW PAY LATER (Afterpay, Klarna).** I pay with my card. Buy Now Pay Later feels like something for a college kid, not a retired guy buying his fifth pair of Slip-ins.
- **Mother's Day Sale note is buried at the very bottom in tiny print.** That's actually a deal I might care about — buying something for my wife. Lead with it or give it a proper section; don't hide it in the footer.
- **No mention of my Skechers Plus membership.** I'm a loyal Plus member. Not a word about points, rewards, or whether that 20% stacks with anything. That's a missed loyalty moment.

## Recommendations

- 1. **Replace the women's product row with men's equivalents.** Show me other men's Slip-ins or comfort walkers I might also like — not women's flats. If the data exists that I'm a male shopper, use it.
- 2. **Surface the Skechers Plus angle.** Even just "Plus members, this one's for you" makes me feel seen. Right now the email treats me like a stranger who left something in a cart.
- 3. **Give Mother's Day a real module.** If there's a sale on, put it in a visible section with imagery. A footer blurb wastes it.
- 4. **Cut or reframe the pay-later module.** If it has to be there, fine — but don't give it equal billing with more useful things like Find a Store or the actual shoe.
- 5. **Make the 20% off terms visible at a glance.** I can see the "20% OFF A SINGLE PAIR" banner but I'm squinting at the fine print. Tell me if it works on the shoe in my cart without me having to click through first.
- | Priority | Item | Action |
- |----------|------|--------|
- | High | HTTP redirect links | Update Attentive link-tracking configuration to force HTTPS on the `skechers.attentivemail.com` click domain |
- | High | Unsubscribe / physical address | Confirm presence in full HTML footer; flag as send-blocker if absent |
- | Medium | Empty `<title>` | Set to e.g. `"Skechers — Your cart is waiting"` for web version tab |
- | Medium | UTM passthrough | Inspect a live redirect chain and confirm UTMs are appended before next send |
- | Low | Preheader padding | Standardize to single zero-width character method; test on Outlook 2019 and Samsung Mail |
- | Low | Image alt text | Audit full HTML for empty `alt=""` on content images |

## Full review
## Walker Miles — Email Review
**Email:** "Your cart expires soon!" | From: SKECHERS | Date: 2026-04-26

---

### 1. Executive Summary

Alright, so this one actually makes sense to me — I can see it's about my cart, there's a shoe I apparently looked at sitting right there at the top, and there's a discount. That's a decent recipe. But Skechers muddied it pretty quick. Right below my shoe — a perfectly good men's Slip-in — they put a row of what looks like women's polka-dot flats and other ladies' styles. That broke the spell. I went from "oh yeah, I was looking at those" to "wait, is this even for me?" The 20% off is the hook that pulls me back, but by then I've already lost a little trust in the email knowing what it's doing.

---

### 2. Business Impact Score: 6/10

The bones are there — cart recovery with a discount on top is a solid play. But the cross-gender product row and the cluttered bottom half drag it down. It should score higher for a man in my position; it doesn't because it didn't quite commit to being about me.

---

### 3. What's Working

- **The hero product is the right shoe.** Skechers Slip-ins Max Cushioning Arch Fit 2.0 — that's a men's walking shoe, that's right in my wheelhouse. Seeing it big at the top with "YOU LIKED THESE / AND YOU WEREN'T WRONG" is a nice confidence boost rather than a guilt trip about abandoning the cart.
- **"COMPLETE YOUR ORDER" CTA is clear.** One button, simple language. I don't have to hunt for it.
- **20% OFF A SINGLE PAIR.** That's the number that makes me reach for my phone. It's prominent, dark background, stands out. A price-conscious guy like me notices that immediately.
- **Cart recovery framing is friendly, not pushy.** "You weren't wrong" is a good line. It doesn't lecture me.

---

### 4. What's Weak

- **That product row below the hero is women's shoes.** I can see polka-dot red flats, some kind of women's athletic style, and what looks like a couple more ladies' options in that thumbnail strip. I'm a 62-year-old guy — why is Skechers showing me women's bestsellers underneath my men's cart item? That's a targeting miss that makes me feel like I fell into the wrong bucket.
- **"SHOP ADDITIONAL STYLES" section is just a list.** WOMEN, MEN, KIDS, CLOTHING — no images, no product highlights. It reads like a sitemap, not a recommendation. I'm not clicking a plain text link when I could just open the app.
- **"LET'S GET TEXTING" module.** Texting a shortcode for deals — I'm not 25. I barely want to download another app. This module does nothing for me.
- **SHOP NOW PAY LATER (Afterpay, Klarna).** I pay with my card. Buy Now Pay Later feels like something for a college kid, not a retired guy buying his fifth pair of Slip-ins.
- **Mother's Day Sale note is buried at the very bottom in tiny print.** That's actually a deal I might care about — buying something for my wife. Lead with it or give it a proper section; don't hide it in the footer.
- **No mention of my Skechers Plus membership.** I'm a loyal Plus member. Not a word about points, rewards, or whether that 20% stacks with anything. That's a missed loyalty moment.

---

### 5. Recommendations

1. **Replace the women's product row with men's equivalents.** Show me other men's Slip-ins or comfort walkers I might also like — not women's flats. If the data exists that I'm a male shopper, use it.
2. **Surface the Skechers Plus angle.** Even just "Plus members, this one's for you" makes me feel seen. Right now the email treats me like a stranger who left something in a cart.
3. **Give Mother's Day a real module.** If there's a sale on, put it in a visible section with imagery. A footer blurb wastes it.
4. **Cut or reframe the pay-later module.** If it has to be there, fine — but don't give it equal billing with more useful things like Find a Store or the actual shoe.
5. **Make the 20% off terms visible at a glance.** I can see the "20% OFF A SINGLE PAIR" banner but I'm squinting at the fine print. Tell me if it works on the shoe in my cart without me having to click through first.

---

### 6. Bottom Line

I'd probably go back and buy those shoes — the 20% off sealed it. But that's the discount doing the heavy lifting, not the email. Skechers had a clean shot at a targeted cart recovery and blurred it with women's product thumbnails and utility clutter that doesn't apply to me. Fix the product row and call out my Plus status and this email goes from "good enough to convert" to "actually well done."

---

### 7. Subject Line Analysis

- **Subject:** `Your cart expires soon!`
- **Length:** 23 characters
- **Scores (1-10):** Clarity `8`, Curiosity `5`, Personalization `3`, Urgency `7`, Specificity `4`
- **Strengths:**
  - Short and readable — no squinting required on a phone screen
  - Urgency is real; "expires" implies a deadline without being melodramatic
- **Weaknesses:**
  - Zero personalization — could be sent to anyone who ever visited the site
  - Tells me nothing about what's in the cart or whether there's an incentive inside
- **Alt A:** `Walker, your Slip-ins are waiting — plus 20% off`
- **Alt B:** `Your Max Cushioning cart expires today — here's a reason to finish`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the visible preview in the render shows an order number / campaign code at the top left (`SKE-00000`) rather than intentional preheader copy
- **Length:** N/A — no meaningful preheader text visible
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None visible
- **Weaknesses:**
  - Leaking a campaign tracking code instead of meaningful preview copy is a wasted slot — the subject line gets no support at all
  - A reader sees "Your cart expires soon!" and then... nothing helpful — open rate opportunity squandered
- **Alt A:** `20% off a single pair — only while your cart is held`
- **Alt B:** `Your Skechers Slip-ins are still waiting. Grab 20% off before they're gone.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** "Your cart expires soon!" is a subject line I understand immediately — I know I was looking at something — and Skechers is a brand I trust. But with no preview text telling me there's a discount inside, I might not feel urgency beyond mild curiosity. I'd open it, but mostly out of habit with brands I already shop.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** The 20% off banner and the "COMPLETE YOUR ORDER" button right under my shoe are enough to get me to click — that combination works on a price-conscious Skechers member. What holds it back from a 7 or 8 is the women's product row creating a moment of "wait, is this right?" that breaks momentum just before I commit.

---

### 11. Evidence

- **Overall purpose:** Cart abandonment recovery email with a 20% off incentive to complete the purchase
- **Hero / primary value proposition:** Skechers Slip-ins Max Cushioning Arch Fit 2.0 — Azorah (men's shoe, correctly shown) with a "COMPLETE YOUR ORDER" CTA; headline framing is friendly and validating rather than pushy
- **Membership / benefits section:** Not present — no Skechers Plus acknowledgment anywhere in the email
- **Product discoverability / recommendation modules:** A horizontal thumbnail row beneath the hero appears to show predominantly women's styles (polka-dot flats, women's athletic silhouettes); "SHOP ALL BEST SELLERS" button follows but without context on gender relevance; "SHOP ADDITIONAL STYLES" is a plain-text category list (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE) with no imagery
- **Utility / secondary modules:** Download the App, Curbside Pickup, Shop Now Pay Later (Afterpay + Klarna), Find a Store, Follow Us (social icons), Let's Get Texting (text shortcode)
- **Mother's Day Sale:** Mentioned only in very small text at the bottom of the email — effectively invisible as a promotional push
- **Bugs / friction / clarity issues visible in render:** A campaign/tracking code (`SKE-00000` style reference) is visible in the top-left corner of the email above the Skechers logo — looks like a preheader leak or template artifact; no broken images detected; text is readable but the fine print under the 20% banner and at the footer requires close attention on a phone screen

---

## Technical Audit

## Technical Audit: Skechers — "Your cart expires soon!"

**Sender:** hello@msgs.skechers.com | **ESP:** Attentive (attentivemail.com)

---

### 1. Technical Summary

Abandoned cart recovery email sent through Attentive's platform. Two confirmed technical issues: all click-tracking links use HTTP (not HTTPS), and the `<title>` element is empty. Truncated source prevents full compliance and merge-token verification.

---

### 2. Link & Tracking Issues

**HTTP click-tracking redirect — confirmed issue**
Both visible links use `http://` as the protocol on the Attentive redirect domain:
```
http://skechers.attentivemail.com/ls/click?upn=...
```
The initial redirect hop is unencrypted. Even if the final destination is HTTPS, some email security gateways flag HTTP links, and the click data is exposed in transit before the 301/302 redirect occurs. All links should originate from `https://skechers.attentivemail.com/...`.

**UTM parameter passthrough — unverifiable**
The Attentive `upn=` redirect tokens are opaque; destination URLs and their UTM parameters are not inspectable from the source alone. Requires live redirect-chain inspection or Attentive dashboard review to confirm UTM params are being appended at the redirect layer.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**
```html
<title></title>
```
Some webmail clients (Gmail tabs, Outlook web) surface the `<title>` value. Empty string leaves the tab unlabeled when the web version is opened.

**Preheader padding characters**
The preheader uses two distinct Unicode filler strategies: `U+034F` (COMBINING GRAPHEME JOINER: `͏`) and `U+00AD` (SOFT HYPHEN: `­`). This is intentional inbox-preview padding and is a recognized technique, but mixing both character types is unusual and may render visible stray characters in certain older or non-standard email clients. Recommend standardizing to a single method (typically zero-width non-joiners or `U+200C`).

**Image alt text — unverifiable from truncated source**
The `<img>` tags visible in the logo block are cut off before the `alt=` attribute appears. Full source review required to confirm all images have non-empty, descriptive alt text for image-blocking environments.

**`lang="en"` present** — no issue.
**`charset=utf-8` declared** — no issue.
**Viewport meta present** — no issue.

---

### 4. Personalization & Merge Tokens

Cannot fully assess from truncated source. This is an abandoned cart trigger, so dynamic product name, image, price, and cart URL tokens are expected. Full source review is required to confirm:
- No unrendered `{{token}}` or `<%=token%>` placeholders are present in the live send
- Cart product block is conditionally suppressed if cart data is unavailable (prevents empty product rows)

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Unsubscribe link — not visible in truncated source**
CAN-SPAM §7102 requires a functional opt-out mechanism. The truncated source ends before the footer. Full source must confirm an unsubscribe link is present and functional.

**Physical mailing address — not visible in truncated source**
CAN-SPAM requires a valid physical postal address in the email body. Not visible in provided excerpt; requires footer inspection.

**Sending domain authentication — not assessable from HTML source**
SPF/DKIM/DMARC alignment for `msgs.skechers.com` cannot be verified from HTML. Should be confirmed via mail headers (`Authentication-Results:` header on a received copy). Attentive-managed sends typically handle DKIM signing on the client's subdomain, but alignment should be verified.

---

### 6. Email-to-Site Continuity

**UTM attribution chain — unconfirmed** (see §2)
Without inspecting the resolved destination URLs, it is unknown whether clicks arrive at skechers.com with `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` values set. If Attentive is not configured to append UTMs at the redirect layer, cart abandonment sessions will attribute to Direct in analytics rather than Email.

**Cart recovery link target — unverifiable**
The CTA presumably deep-links to the user's specific cart. The `upn=` token is user-specific and will resolve differently per recipient; cannot confirm cart URL correctness from a static HTML review. Should be QA'd via a test send with a known cart state.

---

### 7. Recommendations

| Priority | Item | Action |
|----------|------|--------|
| High | HTTP redirect links | Update Attentive link-tracking configuration to force HTTPS on the `skechers.attentivemail.com` click domain |
| High | Unsubscribe / physical address | Confirm presence in full HTML footer; flag as send-blocker if absent |
| Medium | Empty `<title>` | Set to e.g. `"Skechers — Your cart is waiting"` for web version tab |
| Medium | UTM passthrough | Inspect a live redirect chain and confirm UTMs are appended before next send |
| Low | Preheader padding | Standardize to single zero-width character method; test on Outlook 2019 and Samsung Mail |
| Low | Image alt text | Audit full HTML for empty `alt=""` on content images |
## Recent history

- [[2026-04-26-did-you-forget-something]] — 6/10 (2026-04-26)
- [[2026-04-26-your-items-are-waiting]] — 5/10 (2026-04-26)
- [[2026-04-26-last-day-10-off]] — 4/10 (2026-04-26)

