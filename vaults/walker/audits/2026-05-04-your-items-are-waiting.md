---
slug: 2026-05-04-your-items-are-waiting
type: email
date: 2026-05-04
persona: walker
score: "8/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-8, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 8/10 · **Type:** Email audit · **2026-05-04**
## Executive summary

- This one hit right where it counts — I had my eye on those Slip-ins, and Skechers actually remembered. The abandoned cart trigger works on me; seeing the GO WALK Glide-Step 2.0 sitting there waiting is a solid nudge. The "COMPLETE YOUR ORDER" button is right there, big and easy to tap on my phone. But then they muddied it up in the middle — that "you'll love" section pushed women's shoes at me, and I'm left wondering if they even know who they're talking to. The 20% off is a nice surprise, though I had to scroll to find it. Overall: this email almost had me, but it got confused halfway through.

## What's working

- **The abandoned cart hook is solid.** "WE NOTICED YOU NOTICING US..." is a little sassy, but I kind of like it. It's direct, and they're right — I was eyeing those shoes.
- **The right product is the hero.** The GO WALK Glide-Step 2.0 Slip-in is exactly what I was considering. Seeing it front and center with "COMPLETE YOUR ORDER" right below it is simple enough that I won't fumble around on my phone trying to find what I need.
- **The 20% off is a real incentive.** Not "up to X% off select styles." One pair, 20% off. That plain math works for me. I respond to that.
- **Clean mobile layout.** Text is readable without zooming, buttons look big enough to tap, no broken images or weird overlapping. An email I don't have to squint at gets my attention a lot longer.

## What's weak

- **Women's shoe recommendations killed the momentum.** Right after they acknowledged my cart, the "we think you'll love" section pushed Women's Slip-ins at me. I don't know what data they used to pick those, but it wasn't mine. That's a personalization whiff that knocked me out of the zone.
- **The 20% off is buried.** The cart nudge is front and center — that's correct. But the best reason to actually click it sits further down the email, on a separate black banner. If that offer was right next to "COMPLETE YOUR ORDER," I'd have tapped it immediately.
- **No Skechers Plus acknowledgment.** I'm a loyal member. Not a word about my points, my standing, or any member-only benefit. That's a missed opportunity with someone like me who already chose the brand.
- **Navigation leads with Women.** The browse section goes WOMEN, MEN, KIDS... I know women's is a bigger category, but as a male shopper I notice that I'm second in line every time.
- **The middle is cluttered.** Afterpay, Klarna, text a keyword, download the app, find a store, follow us on social — that's five separate modules stacked up after the main offer. By then I've either already clicked or I've moved on.

## Recommendations

- 1. **Move the 20% off above the fold** — place it directly beneath the product image or alongside the CTA button. Don't make me scroll past the hero to find the incentive.
- 2. **Fix the recommendation engine for male shoppers** — show me Men's Slip-ins or comfort walkers, not Women's styles. This is basic segmentation.
- 3. **Add a loyalty callout near the CTA** — something like "Plus Members earn X points on this purchase" turns a transaction into a loyalty moment.
- 4. **Reorder the browse navigation** — even flipping it to MEN | WOMEN | KIDS signals you know who you're talking to.
- 5. **Trim the utility modules** — keep Curbside Pickup and Find a Store (both genuinely useful to me), and drop or collapse the app/texting/social stack. It dilutes the ask.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | High | HTTP click-tracking and image CDN | Confirm with Attentive that HTTPS is enforced on `msgs.skechers.com` and `image.emails.skechers.com` redirect chains |
- | High | Cart deep-link integrity | Click-test all CTAs from an Attentive test send; confirm cart state is restored |
- | High | CAN-SPAM footer | Confirm physical address + unsubscribe are in the full HTML |
- | Medium | Empty `<title>` | Set `<title>Skechers — Your Cart is Waiting</title>` |
- | Medium | UTM parameters | Decode Attentive links in a test send to confirm tags are present on every CTA |
- | Medium | Image alt text | Verify `alt="Skechers"` on logo; alt text on product images should match product name from cart payload |
- | Low | Preheader filler | Replace Unicode spacer characters with a hidden spacer cell to avoid filter triggers |
- | Low | Link underline suppression | Acceptable for visual design but document as known accessibility trade-off |

## Full review
---

## 1. Executive Summary

This one hit right where it counts — I had my eye on those Slip-ins, and Skechers actually remembered. The abandoned cart trigger works on me; seeing the GO WALK Glide-Step 2.0 sitting there waiting is a solid nudge. The "COMPLETE YOUR ORDER" button is right there, big and easy to tap on my phone. But then they muddied it up in the middle — that "you'll love" section pushed women's shoes at me, and I'm left wondering if they even know who they're talking to. The 20% off is a nice surprise, though I had to scroll to find it. Overall: this email almost had me, but it got confused halfway through.

---

## 2. Business Impact Score

**8/10**

Criteria that were TRUE:
- Hero copy explicitly references Slip-ins — exactly my focus area
- Skechers is a recognizable, trusted brand I'm subscribed to
- Concrete offer visible: 20% OFF A SINGLE PAIR
- Primary CTA is unambiguous: "COMPLETE YOUR ORDER" — clear green button
- Visual hierarchy is clear — the abandoned cart product leads the eye
- No render bugs visible — clean, readable layout throughout
- Email reflects current season — Mother's Day sale fine print places it in May
- Offer feels honest — 20% off stated plainly, fine print present but not buried

Criteria that were NOT TRUE:
- Demographic signals mismatch — the "you'll love" recommendation section shows Women's Slip-ins
- No loyalty/member benefits — zero Skechers Plus acknowledgment or member-exclusive pricing visible

---

## 3. What's Working

**The abandoned cart hook is solid.** "WE NOTICED YOU NOTICING US..." is a little sassy, but I kind of like it. It's direct, and they're right — I was eyeing those shoes.

**The right product is the hero.** The GO WALK Glide-Step 2.0 Slip-in is exactly what I was considering. Seeing it front and center with "COMPLETE YOUR ORDER" right below it is simple enough that I won't fumble around on my phone trying to find what I need.

**The 20% off is a real incentive.** Not "up to X% off select styles." One pair, 20% off. That plain math works for me. I respond to that.

**Clean mobile layout.** Text is readable without zooming, buttons look big enough to tap, no broken images or weird overlapping. An email I don't have to squint at gets my attention a lot longer.

---

## 4. What's Weak

**Women's shoe recommendations killed the momentum.** Right after they acknowledged my cart, the "we think you'll love" section pushed Women's Slip-ins at me. I don't know what data they used to pick those, but it wasn't mine. That's a personalization whiff that knocked me out of the zone.

**The 20% off is buried.** The cart nudge is front and center — that's correct. But the best reason to actually click it sits further down the email, on a separate black banner. If that offer was right next to "COMPLETE YOUR ORDER," I'd have tapped it immediately.

**No Skechers Plus acknowledgment.** I'm a loyal member. Not a word about my points, my standing, or any member-only benefit. That's a missed opportunity with someone like me who already chose the brand.

**Navigation leads with Women.** The browse section goes WOMEN, MEN, KIDS... I know women's is a bigger category, but as a male shopper I notice that I'm second in line every time.

**The middle is cluttered.** Afterpay, Klarna, text a keyword, download the app, find a store, follow us on social — that's five separate modules stacked up after the main offer. By then I've either already clicked or I've moved on.

---

## 5. Recommendations

1. **Move the 20% off above the fold** — place it directly beneath the product image or alongside the CTA button. Don't make me scroll past the hero to find the incentive.
2. **Fix the recommendation engine for male shoppers** — show me Men's Slip-ins or comfort walkers, not Women's styles. This is basic segmentation.
3. **Add a loyalty callout near the CTA** — something like "Plus Members earn X points on this purchase" turns a transaction into a loyalty moment.
4. **Reorder the browse navigation** — even flipping it to MEN | WOMEN | KIDS signals you know who you're talking to.
5. **Trim the utility modules** — keep Curbside Pickup and Find a Store (both genuinely useful to me), and drop or collapse the app/texting/social stack. It dilutes the ask.

---

## 6. Bottom Line

Yes, I'd probably click "COMPLETE YOUR ORDER." The abandoned cart reminder with my actual product is effective enough to get me there. The women's shoe section is annoying but not a dealbreaker when I'm already motivated by seeing my shoe. If that 20% off had been sitting right next to the buy button, this would've been a one-tap decision. Skechers got the important things right here — they just let the recommendation engine embarrass them in the middle.

---

## 7. Subject Line Analysis

- **Subject:** `Your Items Are Waiting!`
- **Length:** 23 characters
- **Scores (1-10):** Clarity `7`, Curiosity `7`, Personalization `6`, Urgency `7`, Specificity `4`
- **Strengths:**
  - "Your Items" creates a personal connection without feeling intrusive
  - Short and clean — reads perfectly in a mobile inbox preview
- **Weaknesses:**
  - "Items" is vague — no product name, no hint at the 20% discount
  - Misses a chance to lead with an incentive that adds pull beyond curiosity
- **Alt A:** `Your GO WALK Slip-ins are still waiting — 20% off inside`
- **Alt B:** `Still thinking it over? 20% off your cart, just for you`

---

## 8. Preview Text Analysis

- **Preview:** `WE NOTICED YOU NOTICING US... YOUR CART IS STILL WAITING...`
- **Length:** ~58 characters
- **Scores (1-10):** Complements subject `7`, Specificity `4`, Clarity `7`, Inbox-fit `6`
- **Strengths:**
  - Playful, warm tone — "we noticed you noticing us" is charming, not pushy
  - Adds context beyond the subject, confirming this is a cart email and not a generic blast
- **Weaknesses:**
  - Still no product name or offer — no specific shoe or % off to add pull before I even open
  - The double ellipsis reads a bit drawn out in a small inbox preview window
- **Alt A:** `Your GO WALK Slip-ins are still in your cart — 20% off today`
- **Alt B:** `We saved your cart. Plus, 20% off a single pair — just for you`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `8/10`
- **Signals counted:** sender recognizable (Skechers), subject concrete (implied cart abandonment), preview complements subject (adds warm tone and new angle), preview is real copy, subject under 50 chars, no spam signals, personalization hint ("Your Items"), time-bounded urgency (items "waiting" implies availability pressure)
- **Rationale:** Skechers is a brand I trust and I recognize the sender instantly. "Your Items Are Waiting!" with a preview hinting at my cart is enough to make me tap — I want to see which shoe it is and whether there's a deal attached.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `7/10`
- **Signals counted:** hero offer visible without scrolling (product + CTA in the hero), CTA is in my category (Slip-ins GO WALK), CTA copy is specific ("COMPLETE YOUR ORDER"), offer reduces price (20% off a single pair), specific product shown with name (GO WALK Glide-Step 2.0 - Santiago), trusted brand voice, no friction or broken layout
- **Rationale:** My exact shoe front and center with a clear button is compelling. The women's recommendation section creates a beat of confusion that costs momentum, and the discount being separated from the primary CTA means I'm not clicking with the full urgency they intended.

---

## 11. Evidence

- **Overall purpose:** Abandoned cart recovery email triggered by Walker's prior browse session on the GO WALK Glide-Step 2.0 Slip-in.
- **Hero / primary value proposition:** Product image of Skechers Slip-ins: GO WALK Glide-Step 2.0 - Santiago with a "COMPLETE YOUR ORDER" green CTA button directly beneath.
- **Membership / benefits section:** None visible. No Skechers Plus member acknowledgment, no points reminder, no member-exclusive pricing anywhere in the email.
- **Product discoverability / recommendation modules:** "HERE'S SOME MORE GREAT OPTIONS WE THINK YOU'LL LOVE:" section below the hero — visibly includes Women's Slip-ins alongside other styles; mixed-gender recommendations in a male shopper's cart email. "SHOP ALL BEST SELLERS" CTA follows.
- **Utility / secondary modules:** 20% OFF A SINGLE PAIR banner (with SHOP NOW CTA) | LET'S GET TEXTING — text SKECHERS to 83838 | Download the App (App Store / Google Play) | Curbside Pickup | Shop Now Pay Later (Afterpay / Klarna) | Find a Store | Follow Us (Instagram, Facebook, Pinterest) | Mother's Day Sale fine print at footer.
- **Bugs / friction / clarity issues:** No broken images or layout errors visible. The women's shoe recommendations in a male-targeted abandoned cart email is a visible personalization mismatch. Navigation order (WOMEN listed before MEN) is a minor friction point for a male shopper, not a render bug.

---

## Technical Audit

## Technical Audit — Skechers "Your Items Are Waiting" (Attentive ESP)

---

### 1. Technical Summary
Email is rendered via Attentive's redirect/CDN infrastructure. All external links and image sources use plain HTTP, creating mixed-content exposure and potential deliverability signals. The truncated source is otherwise structurally sound table-based HTML.

---

### 2. Link & Tracking Issues

**HTTP-only click-tracking domain**
Every link routes through `http://skechers.attentivemail.com/ls/click?upn=...` using HTTP, not HTTPS. Modern MTA security scanners and Outlook/Gmail flag unencrypted redirect hops.
- Evidence: `href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6…"` (web version link, logo link)

**HTTP image CDN**
At least one image src begins `http://image.emails.skechers.…` (truncated). If the full src is also HTTP, rendering environments that enforce HTTPS (iOS 15+, Chrome webview) will silently block the image.

**UTM parameter verification required**
The destination URLs are base64/URL-encoded inside the Attentive redirect and cannot be decoded from the truncated source. Confirm that decoded destinations include `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` tags before send. Attentive's dashboard → "Link Parameters" tab is the authoritative check.

---

### 3. Rendering & Accessibility

**Empty `<title>` element**
`<title></title>` is present but empty. Some email clients (Samsung Mail, older Yahoo) surface the document title in the thread pane or tab bar; a blank value appears as "Untitled" or nothing.

**Link color/decoration suppression**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This Gmail-specific override removes underlines from all links. Users who rely on underline cues for link identification (low-vision, cognitive accessibility) receive no visual differentiation. The rule is intentional for visual control, but it should be noted as a WCAG 1.4.1/1.4.3 concern.

**Image alt text unconfirmed**
The logo `<img>` tag is truncated in the supplied source. Verify that `alt="Skechers"` (or equivalent) is present. Missing alt on the logo breaks screen-reader context and fails WCAG 1.1.1.

**Preheader filler technique**
The preheader div uses a mix of Unicode soft hyphens (`­` U+00AD) and zero-width non-joiners to push text past the 150-character preview window. This is functional but some ESPs / spam filters penalize high Unicode-character-density in hidden content. Consider using a white-on-white spacer `<td>` instead.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `{{first_name}}`, `%%EMAIL%%`) are visible in the truncated source — a positive signal. However, because this is a cart-abandonment email, confirm in the Attentive preview that:
- Abandoned product name, image, price, and deep-link URL are all populated from the cart payload.
- Fallback values (e.g., "your items" vs a product name) are defined for any token that could resolve to null.

---

### 5. Compliance (CAN-SPAM / GDPR)

**Physical postal address — unconfirmed**
CAN-SPAM §5(a)(6) requires a valid physical mailing address in every commercial email. The source is truncated; the footer is not visible. Verify the full render includes Skechers' address block.

**Unsubscribe mechanism — unconfirmed**
Similarly, a one-click or clearly labeled opt-out link must appear. Not visible in the supplied truncated source. Confirm it is present and functional in the full HTML.

**Authentication headers (not in HTML — verify at MTA level)**
- SPF: `msgs.skechers.com` should have an SPF record covering Attentive's sending IPs.
- DKIM: Expect a `d=skechers.com` or `d=msgs.skechers.com` signature. Verify via `dig TXT` or a header dump.
- DMARC: `skechers.com` should publish a DMARC policy of at minimum `p=none` with `rua=` reporting. Misalignment between the `From:` domain (`msgs.skechers.com`) and the DKIM/SPF alignment domain can cause DMARC failures with strict policies.

---

### 6. Email-to-Site Continuity

**Cannot verify UTM pass-through from encoded source**
All destination URLs are obfuscated inside Attentive's redirect payload. The following must be confirmed by decoding or clicking a test send:
- `utm_source=email`
- `utm_medium=email` or `attentive`
- `utm_campaign=cart_abandonment` (or equivalent)
- `utm_content` differentiating the CTA buttons (logo vs. primary CTA vs. product image)

**Cart session continuity**
Verify that the deep-link to the cart item preserves the user's session (via Attentive's unique link + cookie) rather than dropping the user to the homepage. A broken cart deep-link on the landing page is the single highest-impact failure mode for this email type.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| High | HTTP click-tracking and image CDN | Confirm with Attentive that HTTPS is enforced on `msgs.skechers.com` and `image.emails.skechers.com` redirect chains |
| High | Cart deep-link integrity | Click-test all CTAs from an Attentive test send; confirm cart state is restored |
| High | CAN-SPAM footer | Confirm physical address + unsubscribe are in the full HTML |
| Medium | Empty `<title>` | Set `<title>Skechers — Your Cart is Waiting</title>` |
| Medium | UTM parameters | Decode Attentive links in a test send to confirm tags are present on every CTA |
| Medium | Image alt text | Verify `alt="Skechers"` on logo; alt text on product images should match product name from cart payload |
| Low | Preheader filler | Replace Unicode spacer characters with a hidden spacer cell to avoid filter triggers |
| Low | Link underline suppression | Acceptable for visual design but document as known accessibility trade-off |
## Recent history

- [[2026-05-04-up-to-25-off-adidas-reebok-more]] — 8/10 (2026-05-04)
- [[2026-05-04-there-s-still-time-to-get-20-off-select-styles]] — 7/10 (2026-05-04)
- [[2026-05-04-extra-20-off-ends-tonight]] — 6/10 (2026-05-04)

