---
slug: 2026-04-26-your-items-are-waiting
type: email
date: 2026-04-26
persona: walker
score: "5/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-5, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 5/10 · **Type:** Email audit · **2026-04-26**
## Executive summary

- Well, they noticed me. Cart abandonment email, tries to reel me back in with my Slip-ins still sitting there. The hero is clean enough — I can see the shoe, I recognize the product name. But after that first block, the email just scatters. I'm getting a grid of women's shoes shoved at me, a 20% off banner that feels like an afterthought, and then what feels like a website directory dumped into my inbox. This one had a shot at getting me back to checkout and it fumbled it.
- Half-credit. The cart callback is there, the product is visible, there's a discount. But the women's "You'll Love" picks undercut the whole thing, and the email doesn't lean into what keeps me loyal — comfort tech, Slip-ins, my Plus membership perks. Missed opportunity.

## What's working

- **The hero shoe is front and center.** I can see the Slip-ins: Glide-Step Altus clearly labeled. That's the shoe I left in my cart. Good.
- **"COMPLETE YOUR ORDER" CTA is readable.** Big enough button, right below the product. I know what to tap.
- **20% off a single pair** — that's a real reason to come back. If I saw that tied directly to *my* shoe, not buried below a women's grid, I'd probably be clicking already.
- **"Let's Get Texting"** — that's a nice touch for someone who browses on the phone. Text alerts I can handle.

## What's weak

- **The "You'll Love" grid is mostly women's shoes.** I count at least three women's sneakers right below my cart item. Not one of those is for me. That's jarring. I left a men's shoe in my cart and you're showing me red women's sneakers?
- **The 20% off banner is disconnected from my cart item.** It floats down there on its own like a flyer someone dropped in the email. If it's meant to get me back to checkout, tie it to *my* shoe. Say "20% off the Glide-Step Altus right now." The way it reads, I'm not sure if it applies to my item.
- **The navigation block at the bottom is a website, not an email.** Women, Men, Kids, Clothing, New Arrivals, Sale — that's a nav bar. On my phone, that whole section is visual noise. I don't need a directory, I need to finish buying the shoe I already picked.
- **"Mother's Day Sale" fine print at the very bottom.** A holiday promotion buried in the legal text. If that's a live sale, it should be featured, not hidden.
- **Text on the 20% banner is small.** The conditions line under "20% OFF A SINGLE PAIR" — I can't read that without zooming. That's frustrating.

## Recommendations

- 1. **Push the 20% off into the hero block.** Directly beneath the Glide-Step Altus and above or alongside the "Complete Your Order" button. Make it obvious the discount applies to what's already in my cart.
- 2. **Replace the "You'll Love" women's grid with men's comfort/slip-in alternatives.** If the algo can't filter by gender, pull the module entirely. It's doing damage right now.
- 3. **Strip the bottom nav directory.** Link to "Shop Men's Bestsellers" once, then stop. I don't need eight category tiles.
- 4. **Surface my Plus membership.** I'm a loyal customer. A line like "As a Skechers Plus member, your 20% applies automatically" would reinforce why I stick around and push me over the edge.
- 5. **Increase the fine print font on the offer.** I'm on a phone. If I can't read the conditions, I'm going to assume there's a catch and bail.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP click-tracking URLs | Switch Attentive send config to HTTPS tracking domain |
- | High | HTTP image assets | Re-host all images on HTTPS CDN or update Attentive image host config |
- | Medium | `#MessageViewBody a` suppresses all link decoration | Scope this selector away from footer/unsubscribe links, or apply explicit `color` and `text-decoration` to the unsubscribe anchor directly |
- | Medium | Empty `<title>` | Set to subject line or brand + campaign descriptor |
- | Low | Dual invisible-character preheader padding | Standardize on one technique (U+034F only is most broadly supported) |
- | — | UTM attribution | Decode a test send link and validate parameters end-to-end in analytics |
- | — | Compliance footer | Provide full HTML to confirm CAN-SPAM physical address and unsubscribe link are present |

## Full review
---

## 1. Executive Summary

Well, they noticed me. Cart abandonment email, tries to reel me back in with my Slip-ins still sitting there. The hero is clean enough — I can see the shoe, I recognize the product name. But after that first block, the email just scatters. I'm getting a grid of women's shoes shoved at me, a 20% off banner that feels like an afterthought, and then what feels like a website directory dumped into my inbox. This one had a shot at getting me back to checkout and it fumbled it.

---

## 2. Business Impact Score: 5/10

Half-credit. The cart callback is there, the product is visible, there's a discount. But the women's "You'll Love" picks undercut the whole thing, and the email doesn't lean into what keeps me loyal — comfort tech, Slip-ins, my Plus membership perks. Missed opportunity.

---

## 3. What's Working

- **The hero shoe is front and center.** I can see the Slip-ins: Glide-Step Altus clearly labeled. That's the shoe I left in my cart. Good.
- **"COMPLETE YOUR ORDER" CTA is readable.** Big enough button, right below the product. I know what to tap.
- **20% off a single pair** — that's a real reason to come back. If I saw that tied directly to *my* shoe, not buried below a women's grid, I'd probably be clicking already.
- **"Let's Get Texting"** — that's a nice touch for someone who browses on the phone. Text alerts I can handle.

---

## 4. What's Weak

- **The "You'll Love" grid is mostly women's shoes.** I count at least three women's sneakers right below my cart item. Not one of those is for me. That's jarring. I left a men's shoe in my cart and you're showing me red women's sneakers?
- **The 20% off banner is disconnected from my cart item.** It floats down there on its own like a flyer someone dropped in the email. If it's meant to get me back to checkout, tie it to *my* shoe. Say "20% off the Glide-Step Altus right now." The way it reads, I'm not sure if it applies to my item.
- **The navigation block at the bottom is a website, not an email.** Women, Men, Kids, Clothing, New Arrivals, Sale — that's a nav bar. On my phone, that whole section is visual noise. I don't need a directory, I need to finish buying the shoe I already picked.
- **"Mother's Day Sale" fine print at the very bottom.** A holiday promotion buried in the legal text. If that's a live sale, it should be featured, not hidden.
- **Text on the 20% banner is small.** The conditions line under "20% OFF A SINGLE PAIR" — I can't read that without zooming. That's frustrating.

---

## 5. Recommendations

1. **Push the 20% off into the hero block.** Directly beneath the Glide-Step Altus and above or alongside the "Complete Your Order" button. Make it obvious the discount applies to what's already in my cart.
2. **Replace the "You'll Love" women's grid with men's comfort/slip-in alternatives.** If the algo can't filter by gender, pull the module entirely. It's doing damage right now.
3. **Strip the bottom nav directory.** Link to "Shop Men's Bestsellers" once, then stop. I don't need eight category tiles.
4. **Surface my Plus membership.** I'm a loyal customer. A line like "As a Skechers Plus member, your 20% applies automatically" would reinforce why I stick around and push me over the edge.
5. **Increase the fine print font on the offer.** I'm on a phone. If I can't read the conditions, I'm going to assume there's a catch and bail.

---

## 6. Bottom Line

The bones are right — cart recovery, correct product, a real discount. But the wrong-gender recommendations and the scattered layout made me feel like a stranger, not a known customer. Fix the personalization on the "You'll Love" grid and tie the 20% directly to my cart item, and this email goes from a maybe to a yes.

---

## 7. Subject Line Analysis

- **Subject:** `Your Items Are Waiting!`
- **Length:** 22 characters
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `5`, Urgency `5`, Specificity `3`
- **Strengths:**
  - Short and readable, won't truncate on my phone
  - "Waiting" implies something I already chose — low friction hook
- **Weaknesses:**
  - Generic — every retailer uses this line; nothing Skechers-specific
  - No comfort/slip-in hook, no discount signal, no reason to open beyond curiosity
- **Alt A:** `Your Slip-ins Are Still in Your Cart — 20% Off Today`
- **Alt B:** `Walker, the Glide-Step Altus is still yours to grab`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)`
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (none to identify)
- **Weaknesses:**
  - No preheader is showing — the inbox is getting nothing to work with alongside the subject line
  - A wasted opportunity to surface the 20% offer or the product name before the open
- **Alt A:** `20% off the pair you left behind — offer ends soon`
- **Alt B:** `Your Glide-Step Altus is still waiting. Grab 20% off today.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** I shop Skechers regularly and "Items Are Waiting" tells me it's about something I already picked — that's enough to make me tap. But there's no preview text reinforcing it, no product name, no discount teaser, so I might mistake it for a generic blast and skip it on a busy morning.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `4/10`
- **Rationale:** I can see my shoe and the "Complete Your Order" button, which is good — but the women's recommendation grid right below it throws me off and makes me question whether this email is even meant for me. If the 20% off were clearly tied to my cart item I'd be at a 7; as is, the confusion costs them the click.

---

## 11. Evidence

- **Overall purpose:** Cart abandonment recovery — single item (Skechers Slip-ins: Glide-Step Altus) left in cart
- **Hero / primary value prop:** Product image of the Glide-Step Altus with "COMPLETE YOUR ORDER" CTA below it; product name visible
- **Membership / benefits section:** Not present. No Skechers Plus acknowledgment anywhere in the visible email
- **Product discoverability / recommendation modules:** "Here's Some More Great Options We Think You'll Love" grid — approximately 4-5 shoes, majority appear to be women's styles based on colorways and silhouettes shown
- **Utility / secondary modules:** 20% off a single pair banner; "Let's Get Texting" SMS opt-in; App download (App Store / Google Play); Curbside Pickup; Shop Now Pay Later (Afterpay, Klarna); Find a Store; Follow Us (social icons)
- **Bugs / friction / clarity issues:**
  - Women's shoes in a men's cart-recovery email — visible and clearly mismatched
  - Fine print text on 20% off banner is very small and unreadable without zooming
  - "Mother's Day Sale" mentioned only in fine print at bottom — not featured as a module
  - Navigation category tiles at the bottom (Women, Men, Kids, Clothing, New Arrivals, Sale) add clutter with no clear hierarchy

---

## Technical Audit

## Technical Audit — Skechers "Your Items Are Waiting" (Cart Abandonment)

---

### 1. Technical Summary

Standard Attentive-platform cart abandonment email rendered as a table-based layout with click-tracking through `skechers.attentivemail.com`. Two protocol-level issues and one CSS-scope issue warrant immediate attention; compliance section cannot be fully verified due to truncated HTML.

---

### 2. Link & Tracking Issues

**HTTP click-tracking URLs (High)**
All links use `http://` on the Attentive redirect domain:
```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor...
```
Modern mail clients (Outlook 2019+, Apple Mail with Mail Privacy Protection) flag or block HTTP redirects. Attentive supports HTTPS — this should be `https://`.

**HTTP image assets (High)**
The logo/product image source begins with:
```
http://image.emails.skechers.co…
```
Gmail and Yahoo silently proxy HTTP images; Outlook on Windows may block them entirely or display broken images. All `<img src>` values must be HTTPS.

**UTM parameters — unverifiable**
Destination URLs are opaque Attentive-encoded blobs. Cannot confirm UTM attribution parameters (`utm_source`, `utm_medium`, `utm_campaign`) are present in the decoded destinations. Recommend decoding one representative link in a test send and validating in GA4/analytics.

---

### 3. Rendering & Accessibility

**Empty `<title>` element**
```html
<title></title>
```
Apple Mail and Outlook on macOS use `<title>` for tab/window labeling. Should be set to match the subject line or a descriptive string (e.g., `"Your Cart | Skechers"`).

**Global link decoration suppression in Gmail**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This selector zeroes out all link styling inside Gmail's webmail wrapper. If the unsubscribe link relies on default blue underline for visibility, it will be invisible to Gmail users — an accessibility and compliance risk.

**Preheader invisible-character mixing**
The preheader uses two different invisible-character techniques simultaneously:
- U+034F Combining Grapheme Joiner (`͏`) — 150 instances
- U+00AD Soft Hyphen (`­`) — 150 instances

Using both in the same preheader is redundant; some spam filters score excessive non-printing characters negatively. Standard practice is one technique only.

**`lang="en"` present** — no issue.
**Responsive breakpoint at `max-width:620px`** — no issue.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `{{first_name}}`, `[EMAIL]`) visible in the provided source.

The preheader reads: *"You left something in your cart, get it before it's gone!"* — no customer name or specific abandoned product name is injected. This may be intentional fallback copy, but if the platform supports dynamic cart content (Attentive does), a missing merge tag for product names should be ruled out against the template configuration.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot fully verify — HTML is truncated.** The footer (physical mailing address, unsubscribe link) is not present in the provided source.

Items to confirm against the full source:
- Physical postal address of advertiser (CAN-SPAM §5(a)(5))
- Functioning unsubscribe mechanism with ≤10-day processing
- "Advertisement" disclosure if required by list segment

**Sending domain:** `hello@msgs.skechers.com` — subdomain is expected for ESP sends.
**Authentication headers (DKIM/SPF/DMARC):** Not evaluable from HTML alone. Verify via `Authentication-Results` header in a live test send.

---

### 6. Email-to-Site Continuity

**UTM validation blocked by Attentive encoding** (see §2). Decode at least one CTA link in a test environment and confirm:
- `utm_source=email`
- `utm_medium=cart_abandonment` (or equivalent)
- `utm_campaign` matches campaign ID in analytics

**Landing page alignment:** Cannot verify — destination URLs are not readable in source. If abandoned-cart items are dynamically linked per-SKU, confirm the decoded URLs resolve to the correct PDP and that the cart state is preserved on arrival (session/cookie handoff).

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP click-tracking URLs | Switch Attentive send config to HTTPS tracking domain |
| High | HTTP image assets | Re-host all images on HTTPS CDN or update Attentive image host config |
| Medium | `#MessageViewBody a` suppresses all link decoration | Scope this selector away from footer/unsubscribe links, or apply explicit `color` and `text-decoration` to the unsubscribe anchor directly |
| Medium | Empty `<title>` | Set to subject line or brand + campaign descriptor |
| Low | Dual invisible-character preheader padding | Standardize on one technique (U+034F only is most broadly supported) |
| — | UTM attribution | Decode a test send link and validate parameters end-to-end in analytics |
| — | Compliance footer | Provide full HTML to confirm CAN-SPAM physical address and unsubscribe link are present |
## Recent history

- [[2026-04-26-last-day-10-off]] — 4/10 (2026-04-26)
- [[2026-04-26-in-high-demand]] — 3/10 (2026-04-26)
- [[2026-04-25-life-s-a-breeze-in-classic-boat-shoes-227d22ed-1880-46cd-b548-]] — 4/10 (2026-04-25)

