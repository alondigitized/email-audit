---
slug: 2026-05-04-did-you-forget-something
type: email
date: 2026-05-04
persona: walker
score: "8/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-8, sender/skechers]
---
# Did you forget something?
**Score:** 8/10 · **Type:** Email audit · **2026-05-04**
## Executive summary

- Well, they caught me. I did leave a pair of Slip-ins in my cart, and seeing that blue Glide-Step sitting right there in the hero reminded me exactly what I'd been thinking about. "Did you forget something?" is a smart subject line — it doesn't feel pushy, it just nudges. Once I'm inside though, the email loses the thread. The secondary product row shows women's shoes, which has nothing to do with me. There's no mention that I'm a Skechers Plus member — they know who I am, why not say so? The 20% off deal is a good get, but it's sitting below the fold on mobile competing with the cart-recovery message. Not a bad send, but they had a golden setup and didn't fully cash it in.

## What's working

- The abandoned cart hook is doing its job. Showing me the exact shoe I looked at — name, colorway, image — is the right move. I almost forgot about that Glide-Step, and this brought it back. The orange "COMPLETE YOUR ORDER" button is big and obvious, which I appreciate on a phone. The 20% off panel gives me a reason to act even if I'm second-guessing the specific shoe. Loading fast with no broken images matters to me — I don't have patience for emails that look like a ransom note.

## What's weak

- The secondary product thumbnails below my cart item are all women's shoes. That's a head-scratcher. I'm a 62-year-old guy — why am I looking at Women's Slip-ins and Women's Go Run options? It makes the email feel automated and careless, like nobody checked what was getting filled in. I also notice there's zero acknowledgment that I'm a Plus member. Skechers knows my purchase history. A line like "As a Plus member, complete your order and earn X points" would have sealed the deal for me. The Mother's Day sale angle at the bottom doesn't apply to me either — I'm not shopping for Mother's Day, I'm shopping for my own feet. That message dilutes what should be a focused cart-recovery email.

## Recommendations

- 1. **Fix the "also consider" product recs.** If I'm a man browsing Men's, show me men's shoes below my cart item — not women's. This is a segmentation problem that's easy to fix and reads as sloppy when it's wrong.
- 2. **Call out my Plus membership.** I'm a loyal member. Add one line in the hero or near the CTA: "Earn rewards points when you complete this order." That's free persuasion and it makes me feel seen.
- 3. **Tie the 20% off to the abandoned item directly.** Instead of a separate "20% OFF A SINGLE PAIR" block that could be any shoe, say "Save 20% on your Glide-Step today." Make the offer feel targeted, not generic.
- 4. **Add a soft deadline to the cart.** Tell me the shoes are low stock or the cart expires. I don't need pressure tactics, but I do respond to "still available" language — especially on a colorway that might run out.
- 5. **Drop the Mother's Day framing for male segments.** It's noise for me. Either suppress it or replace it with something relevant (Father's Day is coming — lean into that instead).
- | Priority | Issue | Action |
- |---|---|---|
- | High | `http://` tracking domain | Switch Attentive tracking domain to HTTPS in ESP domain settings |
- | High | Footer compliance elements unverified | Audit full HTML for physical address + unsubscribe link |
- | Medium | Missing UTM parameters | Confirm Attentive UTM injection is active for this campaign; add if not |
- | Medium | Empty `<title>` | Set to match subject line or a short descriptor |
- | Low | Alt text on product images | Confirm all `<img>` tags in cart-item blocks carry descriptive `alt` values |
- | Low | Auth header verification | Pull raw message headers and confirm SPF pass, DKIM signature, and DMARC alignment for `msgs.skechers.com` |

## Full review
---

## 1. Executive Summary

Well, they caught me. I did leave a pair of Slip-ins in my cart, and seeing that blue Glide-Step sitting right there in the hero reminded me exactly what I'd been thinking about. "Did you forget something?" is a smart subject line — it doesn't feel pushy, it just nudges. Once I'm inside though, the email loses the thread. The secondary product row shows women's shoes, which has nothing to do with me. There's no mention that I'm a Skechers Plus member — they know who I am, why not say so? The 20% off deal is a good get, but it's sitting below the fold on mobile competing with the cart-recovery message. Not a bad send, but they had a golden setup and didn't fully cash it in.

---

## 2. Business Impact Score

**8/10**

True signals counted:
- Hero copy explicitly references my focus area — abandoned Slip-ins (Max Cushioning Glide-Step Sapphire) is right up front
- Sender recognized — Skechers, a brand I actively shop and subscribe to
- Concrete offer visible — "20% OFF A SINGLE PAIR" with a SHOP NOW button
- Primary CTA unambiguous — orange "COMPLETE YOUR ORDER" button is hard to miss
- Visual hierarchy clear — eye lands on the product and the recovery CTA first
- No render bugs — images loaded, text is readable, layout holds
- Offer feels honest — 20% off is stated plainly, fine print is boilerplate not a gotcha

NOT counted:
- Demographic signals off — the supporting product recs below my cart item are women's shoes, not men's
- Loyalty/member benefits absent — no Skechers Plus acknowledgment anywhere
- Current campaign (Mother's Day sale) buried in footer fine print and irrelevant to me as a 62-year-old man

---

## 3. What's Working

The abandoned cart hook is doing its job. Showing me the exact shoe I looked at — name, colorway, image — is the right move. I almost forgot about that Glide-Step, and this brought it back. The orange "COMPLETE YOUR ORDER" button is big and obvious, which I appreciate on a phone. The 20% off panel gives me a reason to act even if I'm second-guessing the specific shoe. Loading fast with no broken images matters to me — I don't have patience for emails that look like a ransom note.

---

## 4. What's Weak

The secondary product thumbnails below my cart item are all women's shoes. That's a head-scratcher. I'm a 62-year-old guy — why am I looking at Women's Slip-ins and Women's Go Run options? It makes the email feel automated and careless, like nobody checked what was getting filled in. I also notice there's zero acknowledgment that I'm a Plus member. Skechers knows my purchase history. A line like "As a Plus member, complete your order and earn X points" would have sealed the deal for me. The Mother's Day sale angle at the bottom doesn't apply to me either — I'm not shopping for Mother's Day, I'm shopping for my own feet. That message dilutes what should be a focused cart-recovery email.

---

## 5. Recommendations

1. **Fix the "also consider" product recs.** If I'm a man browsing Men's, show me men's shoes below my cart item — not women's. This is a segmentation problem that's easy to fix and reads as sloppy when it's wrong.
2. **Call out my Plus membership.** I'm a loyal member. Add one line in the hero or near the CTA: "Earn rewards points when you complete this order." That's free persuasion and it makes me feel seen.
3. **Tie the 20% off to the abandoned item directly.** Instead of a separate "20% OFF A SINGLE PAIR" block that could be any shoe, say "Save 20% on your Glide-Step today." Make the offer feel targeted, not generic.
4. **Add a soft deadline to the cart.** Tell me the shoes are low stock or the cart expires. I don't need pressure tactics, but I do respond to "still available" language — especially on a colorway that might run out.
5. **Drop the Mother's Day framing for male segments.** It's noise for me. Either suppress it or replace it with something relevant (Father's Day is coming — lean into that instead).

---

## 6. Bottom Line

I'd click "Complete Your Order" on this one, mostly because the shoe is right and the 20% off is waiting. But Skechers undersold themselves. They had my attention from the subject line and a legitimate cart-recovery setup — and then showed me women's shoes and forgot I was a Plus member. Solid trigger, average execution.

---

## 7. Subject Line Analysis

- **Subject:** `Did you forget something?`
- **Length:** 26 characters
- **Scores (1-10):** Clarity `6`, Curiosity `8`, Personalization `4`, Urgency `5`, Specificity `3`
- **Strengths:**
  - Short, clean, mobile-friendly — reads instantly on a phone screen
  - Creates genuine curiosity without feeling spammy or pushy
- **Weaknesses:**
  - Zero specificity — doesn't mention shoes, Slip-ins, or any product category
  - No personalization signal; could be sent by any retailer for any abandoned cart
- **Alt A:** `Your Slip-ins are still in your cart, Walker`
- **Alt B:** `Glide-Step Sapphire — still waiting for you (20% off inside)`

---

## 8. Preview Text Analysis

- **Preview:** `READY TO CHECK OUT?`
- **Length:** 20 characters
- **Scores (1-10):** Complements subject `6`, Specificity `2`, Clarity `7`, Inbox-fit `5`
- **Strengths:**
  - Does not repeat the subject word-for-word; pivots from a question to a call to action
  - Short and clean — won't truncate on mobile
- **Weaknesses:**
  - Generic — could apply to any e-commerce cart recovery email from any brand
  - Misses the opportunity to mention the specific product or the 20% off offer, both of which are visible in the body
- **Alt A:** `Your Max Cushioning Glide-Step is still in your cart — 20% off now`
- **Alt B:** `Slip-ins, Sapphire, and 20% off — all waiting for you`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `8/10`
- **Signals counted:** sender display name recognizable (SKECHERS), subject relevant to my focus area (abandoned cart = Slip-ins I was looking at), preview text is real copy not junk, subject under 50 characters, no spam signals (no ALL CAPS, no exclamation stacking), segmentation hint implied by cart-recovery trigger, cadence feels right (abandoned cart is a one-off, not a blast)
- **Rationale:** "Did you forget something?" is just the right tone for a 62-year-old — not pushy, not gimmicky. I know Skechers, I trust the sender name, and the subject lands. Seven clean signals.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `8/10`
- **Signals counted:** hero offer visible without scrolling (product + CTA above fold on mobile), primary CTA in my category (my actual abandoned Slip-ins), CTA copy is specific ("COMPLETE YOUR ORDER" = verb + noun), offer reduces price (20% off), one specific product linked as hero (Glide-Step Sapphire, not just a homepage), brand voice consistent and trusted, no friction (email renders clean, no broken image gaps)
- **Rationale:** The shoe I was already thinking about is right there with a clear button and a discount. That's the trifecta for me. The women's recs below are a distraction but they don't block the primary path to my cart.

---

## 11. Evidence

- **Overall purpose:** Abandoned cart recovery — reminding me I left the Skechers Slip-ins Max Cushioning Glide-Step (Sapphire) in my cart without checking out
- **Hero / primary value proposition:** Product image + name + "READY TO CHECK OUT?" headline + orange "COMPLETE YOUR ORDER" CTA button; clear and correctly placed
- **Membership / benefits section:** None visible — no Skechers Plus acknowledgment, no points earned message, no member-exclusive pricing called out
- **Product discoverability / recommendation modules:** Secondary row of smaller product thumbnails below the hero — labeled with names that appear to be Women's Slip-ins, Women's Go Run, and Women's Max Cushioning styles; these are the wrong gender segment for me
- **Utility / secondary modules:** "SHOP ALL BEST SELLERS" gray button; "20% OFF A SINGLE PAIR / SHOP NOW" dark banner; category nav tiles (WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE); text-to-subscribe prompt (SKECHERS to 83688); app download (App Store / Google Play); Curbside Pickup; Afterpay and Klarna payment options; Find a Store; social follow icons
- **Bugs / friction / clarity issues:** No broken images or overlapping text visible. The secondary product recommendations are clearly women's items shown to a male shopper — not a render bug but a segmentation error that's visible and jarring. The Mother's Day Sale terms appear in the footer fine print as the active promotion but conflict with the cart-recovery message's framing.

---

## Technical Audit

## Technical Audit — Skechers "Did you forget something?" (Cart Abandonment)

---

### 1. Technical Summary
Standard table-based cart abandonment email delivered via Attentive (attentivemail.com). All click destinations are wrapped in Attentive's tracking redirector; the HTML source is truncated before the footer, so compliance elements (unsubscribe, physical address) cannot be fully verified from the provided payload.

---

### 2. Link & Tracking Issues

**HTTP redirect domain — not HTTPS**
Every link in the visible HTML uses `http://` over the Attentive tracking domain:
```
http://skechers.attentivemail.com/ls/click?upn=u001…
```
Modern spam filters and security gateways penalize unencrypted redirect chains. The final destination is almost certainly HTTPS, but the click-tracking hop itself is plain HTTP, which can trigger mixed-content warnings in some preview panes and erodes trust signals. Attentive supports HTTPS tracking domains — this should be corrected at the ESP/domain config level.

**No UTM parameters visible in raw `href` values**
Both the web-version link and the logo link route through the Attentive `upn` parameter with no `utm_source`, `utm_medium`, `utm_campaign`, or `utm_content` appended. If Attentive is injecting UTMs post-redirect that cannot be confirmed from this source; if it is not, analytics attribution for this campaign will be missing or lumped under direct traffic.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**
```html
<title></title>
```
Screen readers announce the document title when entering an email in some clients. An empty title degrades accessibility; it should at minimum match the subject line or a brief description.

**Image `alt` attributes — unverifiable**
The HTML is truncated before the product image blocks. Alt text on cart item images cannot be confirmed from the provided source. If absent, screen reader users will receive no product information for the primary CTA content.

**Preheader character padding**
The preheader uses a mix of `U+034F` (Combining Grapheme Joiner) and `U+00AD` (Soft Hyphen) zero-width characters for whitespace padding — this is a common technique but can cause preheader text to leak as garbage characters in some older Android clients and certain spam scanners.

**Responsive CSS present**
`@media (max-width:620px)` breakpoint with column stacking is correctly implemented. No issues found in the visible CSS.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `{{first_name}}`, `[PRODUCT_NAME]`, `%%email%%`) are visible in the truncated source. The preheader text is static ("You left something in your cart…") with no first-name personalization — this is a missed signal opportunity but not a technical defect. Cart item personalization blocks are in the truncated portion and cannot be assessed.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Unverifiable from truncated source**
The HTML cuts off before the footer. The following required CAN-SPAM elements cannot be confirmed as present:
- Physical mailing address
- Unsubscribe link / opt-out mechanism
- Identification of the message as an advertisement (if applicable)

These must be verified against the full HTML before send.

**Sending domain**
`From: hello@msgs.skechers.com` — a dedicated bulk subdomain, which is correct practice. Authentication headers (SPF, DKIM, DMARC) are not inspectable from HTML source alone; they must be verified from raw message headers. Attentive typically handles DKIM signing for `msgs.skechers.com`, but this should be confirmed via a header dump.

---

### 6. Email-to-Site Continuity

**UTM attribution gap**
As noted in §2, no UTM parameters are present in the raw `href` values. If Attentive is not appending `utm_source=attentive&utm_medium=email&utm_campaign=cart_abandon` (or equivalent) after the tracking redirect resolves, GA4/analytics will misattribute these sessions. Verify by following a tracking link and inspecting the final URL.

**Web-version link**
Routes through Attentive's `ls/click` redirect (same HTTP concern as above). The destination page is a hosted web version — acceptable, but it means web-version viewers also contribute click events to Attentive metrics rather than a clean baseline.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | `http://` tracking domain | Switch Attentive tracking domain to HTTPS in ESP domain settings |
| High | Footer compliance elements unverified | Audit full HTML for physical address + unsubscribe link |
| Medium | Missing UTM parameters | Confirm Attentive UTM injection is active for this campaign; add if not |
| Medium | Empty `<title>` | Set to match subject line or a short descriptor |
| Low | Alt text on product images | Confirm all `<img>` tags in cart-item blocks carry descriptive `alt` values |
| Low | Auth header verification | Pull raw message headers and confirm SPF pass, DKIM signature, and DMARC alignment for `msgs.skechers.com` |
## Recent history

- [[2026-05-04-your-items-are-waiting]] — 8/10 (2026-05-04)
- [[2026-05-04-up-to-25-off-adidas-reebok-more]] — 8/10 (2026-05-04)
- [[2026-05-04-there-s-still-time-to-get-20-off-select-styles]] — 7/10 (2026-05-04)

