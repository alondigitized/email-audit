---
slug: 2026-04-19-your-items-are-waiting
type: email
date: 2026-04-19
persona: walker
score: "7/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-7, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 7/10 · **Type:** Email audit · **2026-04-19**
## Executive summary

- Cart abandonment email reminding me that a GO WALK Glide-Step 2.0 slip-on is sitting in my cart. The headline "We Noticed You Noticing Us" got a chuckle out of me — cute, I'll give them that. The hero shoe is exactly my style: orange, slip-in, comfort-focused. The 20% off offer is a solid nudge. But the product recommendation grid below is so small I had to squint, and the email drags on way too long with utility modules I didn't need. I'm 62 — I want the shoe, the deal, and a big button. This gets close but then buries itself.
- Strong recovery email for the hero item. The offer and the shoe are right. Execution and length drag it down.

## What's working

- **The hero shoe is a match.** The GO WALK Glide-Step slip-on in that orange colorway jumped off the screen. It's exactly what I'd put in a cart and walk away from. Seeing it again with my name on it (so to speak) is effective.
- **"We Noticed You Noticing Us" headline.** Playful without being pushy. For my generation that kind of folksy wit lands — doesn't feel like a robot yelling at me.
- **20% Off offer is prominent.** Big banner, clear button. That's what closes the deal for a price-conscious guy like me. I notice it immediately.
- **"Complete Your Order" CTA is clear.** Big blue button right under the hero. No confusion about what to do.

## What's weak

- **Recommendation grid is too small.** Five or six little product thumbnails crammed in a row — on my phone I can barely make out what color the shoes are, let alone read the names. This section does more harm than good.
- **The email goes on way too long.** After the 20% off banner I've got: navigation links, texting opt-in, app download, curbside pickup, buy-now-pay-later logos, find a store, social follow. I'm not sitting down to read a Skechers newsletter. I opened this to decide whether to buy one pair of shoes. All that utility content makes me forget why I opened it.
- **Men's content is buried.** There's a long category list — Women, Men, Kids, Clothing — but I'm seeing Women listed first. I'm a loyal men's buyer. That order stings a little even if I know I can scroll.
- **"Shop Additional Styles" navigation is generic.** Doesn't feel like it knows me at all. The top of the email is personalized; by the middle it's a generic catalog.
- **Footer legal text is microscopic.** I genuinely cannot read it on a phone without zooming in. I know it's just legalese but it makes the whole bottom of the email feel cluttered and untrustworthy.

## Recommendations

- 1. **Cut the email in half.** Hero shoe → offer → one CTA. That's the email. Move app download and curbside pickup to a secondary section or drop them entirely for abandonment flows.
- 2. **Make the recommendation thumbnails bigger.** Two rows of two, not six tiny tiles. Let me actually see the shoe.
- 3. **Lead the category nav with MEN** or — better yet — skip the generic nav entirely in a cart abandonment context. I'm not here to browse. I'm here to finish a purchase.
- 4. **Tie the 20% off explicitly to the cart item.** Right now it says "20% Off A Single Pair" — I'm wondering if that applies to the Santiago I've got waiting. Make it crystal clear: "20% off your GO WALK Glide-Step today."
- 5. **Bump all body text up 2 points** — especially the product names under the thumbnails. I shouldn't have to zoom.
- | Priority | Issue | Action |
- |---|---|---|
- | High | All links use HTTP | Configure Attentive click-tracking domain to enforce HTTPS redirects; verify image CDN also serves over HTTPS |
- | High | List-Unsubscribe header | Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are injected by Attentive at send time (Gmail bulk-sender policy requirement since 2024) |
- | High | UTM parameter continuity | Confirm UTMs survive the Attentive redirect via test click; add if missing |
- | Medium | CAN-SPAM footer | Confirm physical address and functional unsubscribe are present in full HTML (not in truncated source) |
- | Medium | `role="presentation"` on tables | Add to all layout tables to pass basic screen-reader audit |
- | Low | Empty `<title>` | Populate with campaign name or brand string |
- | Low | Dynamic cart content | Send a test with a real abandoned cart payload to confirm no empty/broken token fallback |

## Full review
---

## 1. Executive Summary

Cart abandonment email reminding me that a GO WALK Glide-Step 2.0 slip-on is sitting in my cart. The headline "We Noticed You Noticing Us" got a chuckle out of me — cute, I'll give them that. The hero shoe is exactly my style: orange, slip-in, comfort-focused. The 20% off offer is a solid nudge. But the product recommendation grid below is so small I had to squint, and the email drags on way too long with utility modules I didn't need. I'm 62 — I want the shoe, the deal, and a big button. This gets close but then buries itself.

---

## 2. Business Impact Score: **7 / 10**

Strong recovery email for the hero item. The offer and the shoe are right. Execution and length drag it down.

---

## 3. What's Working

- **The hero shoe is a match.** The GO WALK Glide-Step slip-on in that orange colorway jumped off the screen. It's exactly what I'd put in a cart and walk away from. Seeing it again with my name on it (so to speak) is effective.
- **"We Noticed You Noticing Us" headline.** Playful without being pushy. For my generation that kind of folksy wit lands — doesn't feel like a robot yelling at me.
- **20% Off offer is prominent.** Big banner, clear button. That's what closes the deal for a price-conscious guy like me. I notice it immediately.
- **"Complete Your Order" CTA is clear.** Big blue button right under the hero. No confusion about what to do.

---

## 4. What's Weak

- **Recommendation grid is too small.** Five or six little product thumbnails crammed in a row — on my phone I can barely make out what color the shoes are, let alone read the names. This section does more harm than good.
- **The email goes on way too long.** After the 20% off banner I've got: navigation links, texting opt-in, app download, curbside pickup, buy-now-pay-later logos, find a store, social follow. I'm not sitting down to read a Skechers newsletter. I opened this to decide whether to buy one pair of shoes. All that utility content makes me forget why I opened it.
- **Men's content is buried.** There's a long category list — Women, Men, Kids, Clothing — but I'm seeing Women listed first. I'm a loyal men's buyer. That order stings a little even if I know I can scroll.
- **"Shop Additional Styles" navigation is generic.** Doesn't feel like it knows me at all. The top of the email is personalized; by the middle it's a generic catalog.
- **Footer legal text is microscopic.** I genuinely cannot read it on a phone without zooming in. I know it's just legalese but it makes the whole bottom of the email feel cluttered and untrustworthy.

---

## 5. Recommendations

1. **Cut the email in half.** Hero shoe → offer → one CTA. That's the email. Move app download and curbside pickup to a secondary section or drop them entirely for abandonment flows.
2. **Make the recommendation thumbnails bigger.** Two rows of two, not six tiny tiles. Let me actually see the shoe.
3. **Lead the category nav with MEN** or — better yet — skip the generic nav entirely in a cart abandonment context. I'm not here to browse. I'm here to finish a purchase.
4. **Tie the 20% off explicitly to the cart item.** Right now it says "20% Off A Single Pair" — I'm wondering if that applies to the Santiago I've got waiting. Make it crystal clear: "20% off your GO WALK Glide-Step today."
5. **Bump all body text up 2 points** — especially the product names under the thumbnails. I shouldn't have to zoom.

---

## 6. Bottom Line

I'd probably click "Complete Your Order" — the shoe is right and the discount is real. But I'd scroll past half this email without reading it. Skechers knows what I want (slip-ins, comfort, a fair deal) and they almost nailed it here. Trim the fat and this becomes an 8 or 9.

---

## 7. Subject Line Analysis

- **Subject:** `Your Items Are Waiting!`
- **Length:** 21 characters
- **Scores (1-10):** Clarity `8`, Curiosity `5`, Personalization `4`, Urgency `6`, Specificity `4`
- **Strengths:**
  - Short and instantly readable on a small phone screen — no clipping
  - Clear cart-abandonment signal, I know exactly what this is about
- **Weaknesses:**
  - "Items" is vague — I had one item, the Santiago; "Your GO WALK Is Waiting" would have been sharper
  - Feels like a generic template any retailer sends — nothing says Skechers, nothing says comfort, nothing says *me*
- **Alt A:** `Walker, your slip-on is still in your cart`
- **Alt B:** `20% off before your GO WALK is gone`

---

## 8. Evidence

- **Overall purpose:** Cart abandonment recovery — one specific shoe (GO WALK Glide-Step 2.0 - Santiago) left in cart, with a 20% off incentive to close the purchase.
- **Hero / primary value prop:** Large image of the orange Santiago slip-on, "We Noticed You Noticing Us / Your Cart Is Still Waiting" headline, "Complete Your Order" CTA. Solid. The shoe and the action are both visible above the fold.
- **Membership / benefits section:** Not present. No Skechers Plus points reminder, no member-exclusive framing on the discount. Missed opportunity for a loyalty-conscious customer.
- **Product discoverability / recommendation modules:** One grid row (~5-6 products) labeled "Here's Some More Great Options We Think You'll Love." Products are too small to evaluate on mobile. "Shop All Best Sellers" CTA follows. The intent is good; the execution is too compressed.
- **Utility / secondary modules:** Shop-by-category nav (Women, Men, Kids, Clothing, New Arrivals, Sale), SMS opt-in, App Store/Google Play download, Curbside Pickup, AfterPay/Klarna, Find A Store, social follow icons. That is seven utility modules stacked below the main offer — overkill for a cart recovery email.
- **Bugs / friction / clarity issues:** No broken images observed. Footer legal copy is rendered at an extremely small size — visually present but practically unreadable on a phone without zoom. Category nav lists Women before Men, which feels misaligned for a verified men's shopper.

---

## Technical Audit

## Technical Audit — SKECHERS "Your Items Are Waiting!" (Cart Abandonment)

---

### 1. Technical Summary

Email is built on a standard table layout delivered via Attentive's ESP platform (`attentivemail.com`). All links and images use plain HTTP rather than HTTPS, which is the most significant technical defect confirmed in the source.

---

### 2. Link & Tracking Issues

**HTTP click-tracking domain (confirmed):**
All CTA links route through `http://skechers.attentivemail.com/ls/click?upn=...` — plain HTTP, not HTTPS. Modern email clients (Gmail, Outlook 2019+) and security gateways flag or strip non-HTTPS redirect URLs.

Evidence:
```
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor..."
```

**Image CDN also HTTP (confirmed):**
The logo `<img>` src begins with `http://image.emails.s...` (source truncated). Mixed-content HTTP images are blocked in many webmail clients that enforce HTTPS.

**UTM parameters not visible in outer wrapper URLs.** Whether they survive the Attentive redirect to the destination cannot be confirmed from truncated source — should be verified via link inspection in a test send.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag:**
```html
<title></title>
```
Some clients (Outlook desktop, Apple Mail) surface the `<title>` value in thread previews or accessibility trees. Should contain a meaningful string.

**Layout tables lack `role="presentation"`:**
All structural `<table>` elements omit `role="presentation"`, causing screen readers to announce them as data tables. Standard fix for email table layouts.

**Preheader padding technique:**
The preheader uses a mix of Unicode variation selectors (U+034F, U+00AD soft hyphens) to pad length and suppress body preview bleed. This is a recognized technique but the mixed character sets (both `&#847;` combining grapheme joiners and soft hyphens) may render strangely on certain NVDA/VoiceOver combinations.

**No issues confirmed** with responsive breakpoints (`@media (max-width:620px)` is present and structurally sound) or `viewport` meta tag.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `{{first_name}}`, `*|FNAME|*`) are visible in the provided source. Cart item blocks are not included in the truncated HTML — those must be spot-checked in a test send with an actual abandoned cart payload to confirm dynamic content renders and does not fall back to empty cells or broken tokens.

Subject line `"Your Items Are Waiting!"` contains no personalization; this is a content decision outside scope, but noted in case the ESP is misconfigured to suppress a first-name token.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot confirm from truncated source:**
- Physical mailing address (CAN-SPAM § 7(1)(C)) — footer not included in provided HTML
- Unsubscribe link presence and one-click functionality
- List-Unsubscribe and List-Unsubscribe-Post headers (RFC 8058 / Gmail bulk-sender requirement)

**Authentication headers not provided.** DKIM, SPF, and DMARC alignment for `msgs.skechers.com` should be verified via MX Toolbox or a raw header dump from a live send. The subdomain `msgs.skechers.com` must be covered by a DKIM signature and SPF record, and DMARC policy on `skechers.com` must be enforced.

---

### 6. Email-to-Site Continuity

All destination URLs are wrapped inside Attentive's click-tracking layer; the final destination domain and UTM parameters are not inspectable from the truncated source. **Confirmed gap:** no UTM parameters are appended to the outer tracking URLs, meaning if Attentive's redirect does not inject them automatically, sessions will land attributed as direct traffic in GA4/Adobe Analytics.

Must verify via test click:
- Destination domain resolves over HTTPS
- `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` are present on landing page URL
- Cart state is preserved for the recipient (session/cookie continuity)

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | All links use HTTP | Configure Attentive click-tracking domain to enforce HTTPS redirects; verify image CDN also serves over HTTPS |
| High | List-Unsubscribe header | Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are injected by Attentive at send time (Gmail bulk-sender policy requirement since 2024) |
| High | UTM parameter continuity | Confirm UTMs survive the Attentive redirect via test click; add if missing |
| Medium | CAN-SPAM footer | Confirm physical address and functional unsubscribe are present in full HTML (not in truncated source) |
| Medium | `role="presentation"` on tables | Add to all layout tables to pass basic screen-reader audit |
| Low | Empty `<title>` | Populate with campaign name or brand string |
| Low | Dynamic cart content | Send a test with a real abandoned cart payload to confirm no empty/broken token fallback |
## Recent history

- [[2026-04-19-sneak-peek-the-all-new-nike-invigor]] — 3/10 (2026-04-19)
- [[2026-04-19-your-cart-expires-soon]] — 6/10 (2026-04-19)
- [[2026-04-19-where-the-road-ends-adventure-begins]] — 5/10 (2026-04-19)

