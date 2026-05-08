---
slug: 2026-05-08-did-you-forget-something
type: email
date: 2026-05-08
persona: walker
score: "8/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-8, sender/skechers]
---
# Did you forget something?
**Score:** 8/10 · **Type:** Email audit · **2026-05-08**
## Executive summary

- Well, they got me. I left that GO RUN Glide-Step sitting in my cart and went to watch the game, and now Skechers is nudging me to come back. Fair enough — the email does exactly one thing well: it shows me the shoe I abandoned and tells me to finish buying it. The orange "COMPLETE YOUR ORDER" button is big, clear, and right where I can tap it. There's even a 20% off offer somewhere below if I scroll far enough. Good start.
- But here's what bugs me: I'm a Skechers Plus member, and this email treated me like a stranger who wandered in off the street. No "hey Walker," no member price, no loyalty perk. And then below my shoe, they're showing me women's styles and a kids' section. I'm not buying shoes for Mother's Day for myself — I'm trying to finish buying MY pair. The email is doing two jobs at once and not doing either one particularly well. I'd probably still click, but they left points on the table.

## What's working

- **The hero product is exactly right.** Skechers Slip-ins: GO RUN Glide-Step Arch Fit — that's my kind of shoe. If this is genuinely what I left in my cart, showing it right at the top is smart. I don't have to hunt for it.
- **"COMPLETE YOUR ORDER" is a good button.** It's a specific instruction, not "Discover" or "Learn More." It tells me exactly what to do and I can tap it without squinting.
- **Arch Fit technology is named in the product title.** That's a detail I care about. Comfort tech sells me. If I forgot I was looking at an Arch Fit shoe, this reminded me why I wanted it.
- **The 20% off offer is real.** It's a genuine dollar discount, not a murky "up to X% off select styles" shell game. That matters to me.
- **Clean layout.** No broken images, no overlapping text, no garbled copy. On my phone this would be readable.

## What's weak

- **Zero personalization.** My name isn't anywhere. My Skechers Plus membership isn't acknowledged. This email could have gone to any one of their five million customers. For an abandoned cart email — which should feel like a personal "hey, you forgot something" — that's a miss.
- **Women's products in the product grid.** Below the hero, I can see women's styles mixed into the recommendations. I'm not in the market for Women's H2 Goga-Spring Bouquet shoes. These slots should show me men's Slip-ins or comfort walkers I might also like, not products for someone else entirely.
- **Mother's Day framing is awkward for me.** The Mother's Day sale in the fine print makes this feel like a mass campaign stitched onto an abandoned cart trigger. I'm not buying this shoe as a gift — I'm buying it for my own feet. The framing creates a small disconnect.
- **The 20% off is disconnected from my cart.** It appears as its own separate banner below the product section, not tied to "here's what 20% off on YOUR shoe saves you." The math isn't done for me.
- **"Let's Get Texting" and "Download the App" are noise.** I'm already in the email. I'm already close to clicking. These modules compete for attention with the one thing they want me to do. I don't need to be recruited into a new channel right now.
- **"SMS-MINS5" leaks at the very top.** Before the Skechers logo, there's a small campaign identifier visible in the email. On phone, that's likely what appeared as my preview text in the inbox — before I ever opened it.

## Recommendations

- 1. **Put my name and member status in the subject or hero banner.** "Walker, your Slip-ins are waiting" beats "Did you forget something?" every time for a loyalty member. And if Skechers Plus gets any incremental discount on top of 20%, show it.
- 2. **Tie the 20% off directly to the cart item.** Instead of a generic "20% off a single pair" banner, show me: "Your GO RUN Glide-Step Arch Fit: was $X, now $Y with your 20% off." Do my math for me.
- 3. **Strip the women's and kids' cross-sells from this specific send.** I'm a male customer in the men's category. Show me 2–3 men's Slip-ins I might also like if the one I had in my cart is on backorder — not products for a different shopper.
- 4. **Remove the app download and text-signup modules from abandoned cart emails.** Those belong in a welcome series or a loyalty email, not in a conversion-focused trigger. Every module that isn't "buy this shoe" is a distraction.
- 5. **Add an explicit deadline to the 20% offer.** "Offer ends Sunday" is more motivating than a permanent-looking banner. If it's a Mother's Day deal, use that urgency.
- 6. **Fix the preview text.** "SMS-MINS5" should never be the first thing a customer sees in their inbox.
- | Priority | Issue | Fix |
- |---|---|---|
- | High | HTTP tracking links | Confirm Attentive account is configured to generate `https://` click URLs; the `http://` scheme exposes click data in transit |
- | High | Gmail link invisibility | Add explicit `color` and `text-decoration:underline` inline on all `<a>` tags, or add a Gmail-targeted override rule that restores link color to a non-body value |
- | Medium | Full source needed | Re-run audit on complete HTML to verify unsubscribe block, physical address, and merge token render |
- | Medium | Table `role` attributes | Add `role="presentation"` to all layout tables |
- | Low | Empty `<title>` | Set to brand name or campaign name as fallback |
- | Low | Soft hyphen padding | Standardize preheader padding to a single character type (U+034F is the safer choice) |

## Full review
---

## Walker Miles Reviews: "Did you forget something?" — Skechers Abandoned Cart Email

---

### 1. Executive Summary

Well, they got me. I left that GO RUN Glide-Step sitting in my cart and went to watch the game, and now Skechers is nudging me to come back. Fair enough — the email does exactly one thing well: it shows me the shoe I abandoned and tells me to finish buying it. The orange "COMPLETE YOUR ORDER" button is big, clear, and right where I can tap it. There's even a 20% off offer somewhere below if I scroll far enough. Good start.

But here's what bugs me: I'm a Skechers Plus member, and this email treated me like a stranger who wandered in off the street. No "hey Walker," no member price, no loyalty perk. And then below my shoe, they're showing me women's styles and a kids' section. I'm not buying shoes for Mother's Day for myself — I'm trying to finish buying MY pair. The email is doing two jobs at once and not doing either one particularly well. I'd probably still click, but they left points on the table.

---

### 2. Business Impact Score

**8/10**

- Sender is a brand I recognize and am subscribed to (Skechers)
- One concrete offer is visible (20% OFF A SINGLE PAIR)
- Primary CTA is unambiguous ("COMPLETE YOUR ORDER" — clear orange button)
- Visual hierarchy is clear — eye goes straight to the banner, then the product, then the discount
- No render bugs visible — layout is clean, images load correctly
- Email reflects current campaign/season (Mother's Day Sale referenced in fine print)
- Offer feels honest — 20% off is straightforward, fine print is visible even if tiny

**Not counted:** Subject/hero copy never explicitly mentions Slip-ins or comfort technology by name; no male models or age-appropriate demographic signals; Skechers Plus membership not acknowledged anywhere.

---

### 3. What's Working

- **The hero product is exactly right.** Skechers Slip-ins: GO RUN Glide-Step Arch Fit — that's my kind of shoe. If this is genuinely what I left in my cart, showing it right at the top is smart. I don't have to hunt for it.
- **"COMPLETE YOUR ORDER" is a good button.** It's a specific instruction, not "Discover" or "Learn More." It tells me exactly what to do and I can tap it without squinting.
- **Arch Fit technology is named in the product title.** That's a detail I care about. Comfort tech sells me. If I forgot I was looking at an Arch Fit shoe, this reminded me why I wanted it.
- **The 20% off offer is real.** It's a genuine dollar discount, not a murky "up to X% off select styles" shell game. That matters to me.
- **Clean layout.** No broken images, no overlapping text, no garbled copy. On my phone this would be readable.

---

### 4. What's Weak

- **Zero personalization.** My name isn't anywhere. My Skechers Plus membership isn't acknowledged. This email could have gone to any one of their five million customers. For an abandoned cart email — which should feel like a personal "hey, you forgot something" — that's a miss.
- **Women's products in the product grid.** Below the hero, I can see women's styles mixed into the recommendations. I'm not in the market for Women's H2 Goga-Spring Bouquet shoes. These slots should show me men's Slip-ins or comfort walkers I might also like, not products for someone else entirely.
- **Mother's Day framing is awkward for me.** The Mother's Day sale in the fine print makes this feel like a mass campaign stitched onto an abandoned cart trigger. I'm not buying this shoe as a gift — I'm buying it for my own feet. The framing creates a small disconnect.
- **The 20% off is disconnected from my cart.** It appears as its own separate banner below the product section, not tied to "here's what 20% off on YOUR shoe saves you." The math isn't done for me.
- **"Let's Get Texting" and "Download the App" are noise.** I'm already in the email. I'm already close to clicking. These modules compete for attention with the one thing they want me to do. I don't need to be recruited into a new channel right now.
- **"SMS-MINS5" leaks at the very top.** Before the Skechers logo, there's a small campaign identifier visible in the email. On phone, that's likely what appeared as my preview text in the inbox — before I ever opened it.

---

### 5. Recommendations

1. **Put my name and member status in the subject or hero banner.** "Walker, your Slip-ins are waiting" beats "Did you forget something?" every time for a loyalty member. And if Skechers Plus gets any incremental discount on top of 20%, show it.
2. **Tie the 20% off directly to the cart item.** Instead of a generic "20% off a single pair" banner, show me: "Your GO RUN Glide-Step Arch Fit: was $X, now $Y with your 20% off." Do my math for me.
3. **Strip the women's and kids' cross-sells from this specific send.** I'm a male customer in the men's category. Show me 2–3 men's Slip-ins I might also like if the one I had in my cart is on backorder — not products for a different shopper.
4. **Remove the app download and text-signup modules from abandoned cart emails.** Those belong in a welcome series or a loyalty email, not in a conversion-focused trigger. Every module that isn't "buy this shoe" is a distraction.
5. **Add an explicit deadline to the 20% offer.** "Offer ends Sunday" is more motivating than a permanent-looking banner. If it's a Mother's Day deal, use that urgency.
6. **Fix the preview text.** "SMS-MINS5" should never be the first thing a customer sees in their inbox.

---

### 6. Bottom Line

I'd click, probably. The shoe is right, the button is clear, and 20% off is enough to get me off the fence. But this email punched below its weight. Abandoned cart emails are supposed to feel like the store called you by name. This one felt like a flyer. For a loyalty member like me, the lack of recognition is the most glaring gap — and the easiest fix.

---

### 7. Subject Line Analysis

- **Subject:** `Did you forget something?`
- **Length:** 26 characters
- **Scores (1–10):** Clarity `6`, Curiosity `7`, Personalization `2`, Urgency `3`, Specificity `3`
- **Strengths:**
  - Conversational and non-aggressive — doesn't feel pushy for a cart abandonment
  - Well under 50 characters, renders cleanly on any phone screen
- **Weaknesses:**
  - Zero mention of the product, brand, or offer — interchangeable with any retailer's cart email
  - No urgency signal and no personalization; I have no reason to open faster than tomorrow
- **Alt A:** `Walker, your Slip-ins are still in your cart`
- **Alt B:** `Your GO RUN Arch Fit is waiting — 20% off ends Sunday`

---

### 8. Preview Text Analysis

- **Preview:** `SMS-MINS5` (leaked internal campaign tag — unintended)
- **Length:** 10 characters
- **Scores (1–10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (None — this is a bug, not a feature)
- **Weaknesses:**
  - An internal campaign identifier leaked to the top of the email; in most inbox clients this renders as the preview text, replacing what could be a compelling supporting line
  - Wastes the highest-visibility real estate in the inbox; an opener reads "Did you forget something? SMS-MINS5" which is meaningless
- **Alt A:** `Your Glide-Step Arch Fit is ready — grab 20% off before the weekend`
- **Alt B:** `Pick up where you left off — your size is still available`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** Sender display name recognizable (Skechers), subject is concrete (implies an abandoned item), subject is under 50 characters, no spam signals (no ALL CAPS or exclamations), cadence feels reasonable for a cart trigger
- **Rationale:** The question hook is mildly intriguing and the sender is one I trust. But the leaked "SMS-MINS5" preview text would have confused me in my inbox, and there's no personalization or urgency to make me open *right now* instead of later or never.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `8/10`
- **Signals counted:** Hero offer visible without scrolling, primary CTA is in my category (Slip-ins), CTA copy is specific ("COMPLETE YOUR ORDER" — verb + noun), offer reduces price (20% off), one specific product hero shown (not just homepage), product detail I care about is visible (Arch Fit technology named), no major friction in the visual layout
- **Rationale:** Once I'm inside the email, everything points at the right shoe with a real discount and a clear button. Arch Fit is a comfort technology I recognize and it's right there in the product name. The women's product recommendations and the app-download noise would give me a moment's pause, but not enough to stop me from tapping the orange button.

---

### 11. Evidence

- **Overall purpose:** Abandoned cart recovery email — reminds me to complete a purchase of the Skechers Slip-ins: GO RUN Glide-Step Arch Fit
- **Hero / primary value proposition:** "Ready to Check Out? Complete Your Order" banner above the specific cart product with orange CTA button; clear and direct
- **Membership / benefits section:** None visible — no Skechers Plus acknowledgment, no member-specific pricing or perk shown anywhere in the email
- **Product discoverability / recommendation modules:** Secondary product grid below the hero shows multiple styles including what appear to be women's shoes mixed in; not filtered to men's or Slip-ins specifically; waterproof spray accessory also shown
- **Utility / secondary modules:** "Shop All Best Sellers" link; category navigation (Women, Men, Kids, Clothing, New Arrivals, Sale); "Let's Get Texting" SMS opt-in; App Store / Google Play download; Curbside Pickup; Shop Now Pay Later (Afterpay, Klarna); Find a Store; social follow icons
- **Bugs / friction / clarity issues:** "SMS-MINS5" appears in small text at the very top of the email before the Skechers logo — this is an internal campaign tag that has leaked into the visible render and likely appears as preview text in most inbox clients; Mother's Day Sale fine print appears at the bottom but the connection to the abandoned cart offer is not clearly explained in the body copy

---

## Technical Audit

## Technical Audit — Skechers "Did you forget something?" (Cart Abandonment)

---

### 1. Technical Summary

Email is built on Attentive's infrastructure using a standard table-based layout. The truncated source limits full analysis of the footer, unsubscribe block, and product merge tokens, but several issues are confirmable from the available markup.

---

### 2. Link & Tracking Issues

**HTTP tracking domain (not HTTPS)**
All links in the visible source route through `http://skechers.attentivemail.com/ls/click?upn=...`. The protocol is `http://`, not `https://`. This means the click redirect is unencrypted in transit. Example:
```
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorX..."
```
Affects both the "web version" link and the logo link. Whether the final destination (skechers.com) upgrades to HTTPS cannot be confirmed from the source — depends on redirect chain behavior.

**UTM parameters not visible at the tracking layer**
The Attentive `upn=` token encodes the destination URL opaquely. UTM attribution cannot be verified from this source without resolving the redirect chain. See Section 6.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**
```html
<title></title>
```
Some email clients (notably Outlook on Windows and some webmail tab views) surface the `<title>` as a fallback display string. Leaving it empty is a missed fallback opportunity but not a rendering blocker.

**`#MessageViewBody a` strips link decoration**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This selector targets Gmail's webmail wrapper. It causes links inside Gmail to inherit body text color and removes underlines, making them visually indistinguishable from surrounding text unless the sender provides explicit inline `color` and/or `text-decoration` on each `<a>`. The "web version" link's `<a>` only specifies `color:#434343` — same as body text. No underline override. In Gmail web, this link is effectively invisible.

**Layout tables missing `role="presentation"`**
The outer `nl-container` and all `row-*` tables lack `role="presentation"`. Screen readers will announce these as data tables, degrading the accessibility parse. This is especially relevant given `<table class="row row-1">` nesting depth.

**Preheader uses mixed Unicode padding characters**
```
You left something in your cart... ͏ ͏ ͏ ... ­ ­ ­ ...
```
The preheader mixes U+034F (Combining Grapheme Joiner) with U+00AD (Soft Hyphen) for inbox preview suppression. This is a known technique, but soft hyphens can render as visible hyphens in certain older Android mail clients (Gmail Android < 2022 IIRC), producing garbage characters at the end of the preview string.

**`lang="en"` present** — No issue.
**Viewport meta present** — No issue.
**Mobile media queries present** — No issue.

---

### 4. Personalization & Merge Tokens

Source is truncated before the cart product block, so I cannot confirm whether merge tokens (e.g., abandoned product name, image, price, cart URL) are present and correctly delimited. **Cannot clear this section — requires full source.**

The one confirmable signal: this is positioned as a cart abandonment email ("Did you forget something?", preheader: "You left something in your cart"), so product-level merge fields are expected. Any un-rendered token (e.g., `{{product.name}}` rendering literally) would be a critical defect.

---

### 5. Compliance

**Cannot fully assess — source is truncated.** CAN-SPAM requires:
- Physical mailing address of sender
- Clear unsubscribe mechanism with ≤10-day honor window
- Accurate From/Subject/routing headers

The footer containing the physical address and unsubscribe link is not present in the provided excerpt. These fields must be verified in the full source. Sending domain is `msgs.skechers.com` — DKIM/SPF/DMARC alignment should be confirmed at the MTA level, not derivable from HTML.

---

### 6. Email-to-Site Continuity

UTM parameters on destination URLs cannot be confirmed because all links are wrapped in Attentive's opaque redirect (`/ls/click?upn=...`). The encoded destination must be resolved (or checked in Attentive's campaign config) to verify:
- `utm_source`, `utm_medium`, `utm_campaign` are set
- Cart recovery link lands on the correct cart/product URL (not homepage)
- The cart session is recoverable server-side at the destination (separate from email tracking — depends on Skechers' cart persistence implementation)

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| High | HTTP tracking links | Confirm Attentive account is configured to generate `https://` click URLs; the `http://` scheme exposes click data in transit |
| High | Gmail link invisibility | Add explicit `color` and `text-decoration:underline` inline on all `<a>` tags, or add a Gmail-targeted override rule that restores link color to a non-body value |
| Medium | Full source needed | Re-run audit on complete HTML to verify unsubscribe block, physical address, and merge token render |
| Medium | Table `role` attributes | Add `role="presentation"` to all layout tables |
| Low | Empty `<title>` | Set to brand name or campaign name as fallback |
| Low | Soft hyphen padding | Standardize preheader padding to a single character type (U+034F is the safer choice) |
## Recent history

- [[2026-05-08-the-styles-taking-over-your-feed-1134578b-f07b-4590-8544-]] — 8/10 (2026-05-08)
- [[2026-05-08-almost-over-10-off]] — 8/10 (2026-05-08)
- [[2026-05-08-tell-us-your-birthday-and-we-ll-send-you-something-special]] — 5/10 (2026-05-08)

