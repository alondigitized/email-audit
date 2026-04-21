---
slug: 2026-04-21-your-cart-expires-soon
type: email
date: 2026-04-21
persona: walker
score: "7/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-7, sender/skechers]
---
# Your cart expires soon!
**Score:** 7/10 · **Type:** Email audit · **2026-04-21**
## Executive summary

- **From:** SKECHERS `<hello@msgs.skechers.com>`
- **Subject:** Your cart expires soon!
- Alright, this one actually got my attention — Skechers is reminding me I left something in my cart, and it turns out it's the Slip-ins: Max Cushioning Glide-Step. That's a shoe I was genuinely eyeing. The email is clean, the headline is a little cheeky ("You liked these — and you weren't wrong"), and the "Complete Your Order" button is big enough that I can tap it without my reading glasses. The 20% off banner below the fold is a nice nudge for a guy like me who's always watching what he spends. Where it loses me: a row of product thumbnails that appear to include women's shoes, which is a targeting miss, and the text on those small product cards is way too tiny on a phone screen. Overall though, this is one of the better emails they've sent me. It knows what I was looking at and asks me to finish the job.
- Solid cart recovery email. Relevant hero product, real urgency, meaningful discount. Pulled down by a mixed-gender product row and small text on secondary cards.

## What's working

- **The hero product is exactly right.** That Slip-ins: Max Cushioning Glide-Step is front and center, large, well-lit, easy to see. I can actually tell what shoe it is without squinting. That matters to me — I don't want to decode a thumbnail.
- **"Complete Your Order" is a clear, fat button.** Tap-friendly. Doesn't make me think. I know exactly what it does.
- **"20% Off a Single Pair"** is visible and motivating. I'm a Plus member but I still like feeling like I'm getting a deal. This lands.
- **The category navigation list** (Women, Men, Kids, Clothing…) is in plain text, stacked vertically — easy to tap on a phone. No tiny side-by-side grid that makes me fat-finger the wrong link.
- **"Let's Get Texting"** is a lightweight way to stay connected. Fine with me. I like text reminders more than another email.

## What's weak

- **That product row below the hero is a mess.** There appear to be women's shoes mixed into the recommendations. I'm a 62-year-old guy — what am I going to do with a women's shoe? It undermines the "we know you" tone the headline tried to set.
- **Product card text is unreadably small.** Those little names and labels under the thumbnails? I'm squinting and still can't make them out on a phone. I need at least a half-decent font size to feel confident clicking something.
- **No personalization beyond the implied cart context.** No "Hi Walker," no reference to my Plus membership. If you know I abandoned a cart, you know my name. Use it.
- **The app download and pay-later modules feel like clutter.** I'm not downloading the app right now and Klarna/Afterpay is not how a 62-year-old thinks about buying a pair of $100 shoes. Takes up real estate that could reinforce the core offer.
- **"Spring Fling Sale" fine print at the bottom** — I nearly missed the fact there's an active sale happening. If there's a sale, lead with it. Don't bury it in gray fine print.

## Recommendations

- 1. **Filter the recommendation row to Men's only.** I'm a known male customer with a cart full of a men's shoe. The algo should not be recommending women's styles to me.
- 2. **Bump the secondary product card text size** — at minimum 14px equivalent. If I can't read the product name, I won't tap it.
- 3. **Add my name to the greeting.** Even just "Walker, your cart expires soon" in the subject or pre-header would make this feel personal instead of boilerplate.
- 4. **Surface the Plus member benefit sooner.** If 20% off stacks with my Plus points or if this is a member-exclusive price, say so. That's the loyalty hook that keeps me from shopping elsewhere.
- 5. **Cut the app download and BNPL modules** — or push them well below the fold. They dilute the one job this email needs to do: get me back to checkout.
- 6. **Mention the "Spring Fling Sale" in the hero area** if it's real and active. "Part of our Spring Fling Sale" as a sub-header under the hero would give the discount more legitimacy and urgency.
- | Priority | Action |
- |----------|--------|
- | High | Change all Attentive click-tracking URLs from `http://` to `https://` — contact Attentive account team to enforce HTTPS on the tracking domain |
- | High | Verify raw sending headers: DKIM pass, SPF alignment, DMARC policy ≥ `quarantine` for `msgs.skechers.com` |
- | High | Confirm full source contains physical address and functional unsubscribe link |
- | Medium | Populate `<title>` with a meaningful value (e.g., `"Your Skechers Cart"`) for screen reader and browser tab accessibility |
- | Medium | Resolve all tracked links and confirm UTM parameters on final destination URLs |
- | Medium | Verify cart item block contains live merge tokens and that fallback content renders correctly when cart data is unavailable |
- | Low | Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are present in the envelope for one-click unsubscribe compliance |

## Full review
---

## Walker Miles — Email Review
**From:** SKECHERS `<hello@msgs.skechers.com>`
**Subject:** Your cart expires soon!

---

### 1. Executive Summary

Alright, this one actually got my attention — Skechers is reminding me I left something in my cart, and it turns out it's the Slip-ins: Max Cushioning Glide-Step. That's a shoe I was genuinely eyeing. The email is clean, the headline is a little cheeky ("You liked these — and you weren't wrong"), and the "Complete Your Order" button is big enough that I can tap it without my reading glasses. The 20% off banner below the fold is a nice nudge for a guy like me who's always watching what he spends. Where it loses me: a row of product thumbnails that appear to include women's shoes, which is a targeting miss, and the text on those small product cards is way too tiny on a phone screen. Overall though, this is one of the better emails they've sent me. It knows what I was looking at and asks me to finish the job.

---

### 2. Business Impact Score: 7/10

Solid cart recovery email. Relevant hero product, real urgency, meaningful discount. Pulled down by a mixed-gender product row and small text on secondary cards.

---

### 3. What's Working

- **The hero product is exactly right.** That Slip-ins: Max Cushioning Glide-Step is front and center, large, well-lit, easy to see. I can actually tell what shoe it is without squinting. That matters to me — I don't want to decode a thumbnail.
- **"Complete Your Order" is a clear, fat button.** Tap-friendly. Doesn't make me think. I know exactly what it does.
- **"20% Off a Single Pair"** is visible and motivating. I'm a Plus member but I still like feeling like I'm getting a deal. This lands.
- **The category navigation list** (Women, Men, Kids, Clothing…) is in plain text, stacked vertically — easy to tap on a phone. No tiny side-by-side grid that makes me fat-finger the wrong link.
- **"Let's Get Texting"** is a lightweight way to stay connected. Fine with me. I like text reminders more than another email.

---

### 4. What's Weak

- **That product row below the hero is a mess.** There appear to be women's shoes mixed into the recommendations. I'm a 62-year-old guy — what am I going to do with a women's shoe? It undermines the "we know you" tone the headline tried to set.
- **Product card text is unreadably small.** Those little names and labels under the thumbnails? I'm squinting and still can't make them out on a phone. I need at least a half-decent font size to feel confident clicking something.
- **No personalization beyond the implied cart context.** No "Hi Walker," no reference to my Plus membership. If you know I abandoned a cart, you know my name. Use it.
- **The app download and pay-later modules feel like clutter.** I'm not downloading the app right now and Klarna/Afterpay is not how a 62-year-old thinks about buying a pair of $100 shoes. Takes up real estate that could reinforce the core offer.
- **"Spring Fling Sale" fine print at the bottom** — I nearly missed the fact there's an active sale happening. If there's a sale, lead with it. Don't bury it in gray fine print.

---

### 5. Recommendations

1. **Filter the recommendation row to Men's only.** I'm a known male customer with a cart full of a men's shoe. The algo should not be recommending women's styles to me.
2. **Bump the secondary product card text size** — at minimum 14px equivalent. If I can't read the product name, I won't tap it.
3. **Add my name to the greeting.** Even just "Walker, your cart expires soon" in the subject or pre-header would make this feel personal instead of boilerplate.
4. **Surface the Plus member benefit sooner.** If 20% off stacks with my Plus points or if this is a member-exclusive price, say so. That's the loyalty hook that keeps me from shopping elsewhere.
5. **Cut the app download and BNPL modules** — or push them well below the fold. They dilute the one job this email needs to do: get me back to checkout.
6. **Mention the "Spring Fling Sale" in the hero area** if it's real and active. "Part of our Spring Fling Sale" as a sub-header under the hero would give the discount more legitimacy and urgency.

---

### 6. Bottom Line

I'd likely tap "Complete Your Order." The shoe is the right shoe, the discount helps, and the email is easy enough to read on my phone. But Skechers almost talked me out of it with women's product recommendations and the junior-league text sizes on the secondary cards. If they cleaned up the targeting and let me feel like a known, valued customer instead of just a recovered cart number, this would be a near-perfect email for me.

---

### 7. Subject Line Analysis

- **Subject:** `Your cart expires soon!`
- **Length:** 22 characters
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `2`, Urgency `7`, Specificity `3`
- **Strengths:**
  - Short, direct, zero ambiguity — even a casual phone glancer understands instantly
  - "Expires" creates mild time pressure without feeling threatening
- **Weaknesses:**
  - Zero personalization — no name, no product name, nothing that proves Skechers knows what I left behind
  - Could apply to any retailer's cart email; nothing distinctly Skechers about it
- **Alt A:** `Walker, your Slip-ins are waiting (and 20% off)`
- **Alt B:** `Don't lose your Glide-Step — cart expires today`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the webview render doesn't expose inbox chrome, but the first readable text in the email body is "YOU LIKED THESE AND YOU WEREN'T WRONG." which most clients would pull as the fallback preheader if no explicit one is set
- **Length:** ~38 characters estimated
- **Scores (1-10):** Complements subject `6`, Specificity `3`, Clarity `7`, Inbox-fit `5`
- **Strengths:**
  - "And you weren't wrong" is a bit of personality — better than a blank or system leak
  - Tonally friendly and slightly humorous, which fits Skechers' casual voice
- **Weaknesses:**
  - No product name, no offer, no hook — just attitude; missed chance to reinforce the discount or product
  - Relies on the body headline leaking through, which is not intentional preheader strategy
- **Alt A:** `Your Slip-ins are still waiting — grab 20% off before they're gone`
- **Alt B:** `20% off, one pair, one click — finish what you started`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** I recognize the Skechers sender name and "cart expires" is enough to make me curious about what I left behind — but the subject gives me no product name to anchor on, so my first instinct is mild curiosity rather than urgency. I'd open it because I do vaguely remember looking at something, not because the subject line demanded it.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `7/10`
- **Rationale:** Once I'm inside and I see that Slip-ins hero and the "Complete Your Order" button, I'm pretty close to tapping — the product is right for me and the 20% off is meaningful. The women's product row gives me a moment of "wait, is this even for me?" but the core CTA is strong enough that I'd push through it.

---

### 11. Evidence

- **Overall purpose:** Cart abandonment recovery — nudges me back to a shoe I viewed and did not purchase
- **Hero / primary value proposition:** Skechers Slip-ins: Max Cushioning Glide-Step, large product image, prominent "Complete Your Order" CTA button — well-executed
- **Membership / benefits section:** No visible Plus member callout; the 20% off banner is present but not tied to my loyalty status in any visible way
- **Product discoverability / recommendation modules:** One row of four small product thumbnails below the hero — appears to include mixed-gender results; card text is too small to read comfortably on mobile
- **Utility / secondary modules:** Category nav list (Women, Men, Kids, Clothing, New Arrivals, Sale); SMS sign-up ("Text SKECHERS to 83688"); app download (App Store, Google Play); Shop Now Pay Later (AfterPay, Klarna); Find a Store; Follow Us (social icons)
- **Bugs / friction / clarity issues:** Product name/price text on recommendation thumbnail cards is visually too small to read at normal phone viewing distance; women's products appear in what should be a men's-targeted cart recovery email; "Spring Fling Sale" terms are only visible in the fine-print footer, not promoted in the body copy where it could reinforce purchase urgency

---

## Technical Audit

## Technical Audit — Skechers Cart Abandonment Email

---

### 1. Technical Summary

Table-based HTML email sent via Attentive ESP (`skechers.attentivemail.com`), implementing standard responsive breakpoints at 620px. Several infrastructure-level issues confirmed in the truncated source; full-source verification required for CAN-SPAM completeness.

---

### 2. Link & Tracking Issues

**Issue: Click-tracking URLs use HTTP, not HTTPS**
All tracked links open with `http://skechers.attentivemail.com/ls/click?upn=...` — plaintext HTTP. Even if the redirect chain terminates at HTTPS, the initial hop is unencrypted and will trigger browser/client security warnings in some environments.

Evidence:
```
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6..."
```

**Issue: Final destination URLs not inspectable**
All hrefs are fully opaque Attentive redirect URLs. Cannot confirm whether UTM parameters are appended to final destination pages from the source alone. Requires live link resolution to verify (see §6).

**No issue:** Click tracking domain (`skechers.attentivemail.com`) matches the sending domain's subdomain structure — consistent ESP configuration.

---

### 3. Rendering & Accessibility

**Issue: `<title>` element is empty**
```html
<title></title>
```
Screen readers (NVDA, JAWS) and some email clients surface the `<title>` as the document label. An empty title degrades accessibility for AT users opening the email in a browser or via "view in browser" link.

**Cannot confirm: Alt text on images**
The `<img>` tags themselves are in the truncated portion of the source. The pattern `.image_block img+div{display:none}` suggests fallback div elements exist but are hidden — alt text on `<img>` elements must be verified in full source.

**No issue:** `lang="en"` is set on `<html>`. Preheader hidden correctly via `max-height:0;overflow:hidden;opacity:0`. MSO table spacing zeroed (`mso-table-lspace:0;mso-table-rspace:0`). Responsive breakpoint at 620px with appropriate column stacking.

---

### 4. Personalization & Merge Tokens

**Issue: No visible merge tokens in preheader or body**
The preheader text is fully static:
```
"You left something in your cart, get it before it's gone! Join Skechers Plus today for free shipping!"
```
For a cart abandonment email, recipient first name and/or abandoned product name/image are expected merge fields. No tokens (`{{first_name}}`, `%%FNAME%%`, or Attentive equivalents) are visible in the accessible source. If cart items are injected server-side before send rather than at render time, this is not an issue — but must be confirmed against the send template config.

**Cannot confirm:** Whether cart item block (product image, name, price) contains live personalization — those rows are in the truncated portion.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot confirm from truncated source:**
- Unsubscribe link presence and one-click compliance (RFC 8058 `List-Unsubscribe-Post`)
- Physical mailing address (required by CAN-SPAM §5(a)(5))
- `List-Unsubscribe` header in envelope (not visible in HTML source — requires raw headers)

**Authentication headers not provided** — DKIM signature, SPF alignment, and DMARC policy for `msgs.skechers.com` cannot be assessed without raw message headers. These should be verified via a tool like mail-tester.com or Google Postmaster Tools for the sending domain.

**Sending domain:** `hello@msgs.skechers.com` — subdomain isolation from root domain is correct practice for bulk mail.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

**Cannot confirm UTM coverage** — all links route through Attentive's opaque redirect (`/ls/click?upn=...`). To verify:
1. Resolve each unique link type (logo, CTA, web version) via `curl -L` or a redirect tracer
2. Confirm final URLs carry `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` parameters
3. Confirm cart restoration parameter (e.g., `cart_token` or session hash) is present on the primary CTA for cart recovery to function

**Risk:** If the "web version" link (`row-1 column-2 block-1`) resolves to a rendered HTML page without UTM params, that traffic will appear as direct in analytics rather than attributed to this campaign.

---

### 7. Recommendations

| Priority | Action |
|----------|--------|
| High | Change all Attentive click-tracking URLs from `http://` to `https://` — contact Attentive account team to enforce HTTPS on the tracking domain |
| High | Verify raw sending headers: DKIM pass, SPF alignment, DMARC policy ≥ `quarantine` for `msgs.skechers.com` |
| High | Confirm full source contains physical address and functional unsubscribe link |
| Medium | Populate `<title>` with a meaningful value (e.g., `"Your Skechers Cart"`) for screen reader and browser tab accessibility |
| Medium | Resolve all tracked links and confirm UTM parameters on final destination URLs |
| Medium | Verify cart item block contains live merge tokens and that fallback content renders correctly when cart data is unavailable |
| Low | Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are present in the envelope for one-click unsubscribe compliance |
## Recent history

- [[2026-04-20-now-in-wide]] — 3/10 (2026-04-20)
- [[2026-04-20-fresh-deals-on-all-things-spring]] — 2/10 (2026-04-20)
- [[2026-04-20-did-you-forget-something]] — 6/10 (2026-04-20)

