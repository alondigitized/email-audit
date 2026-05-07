---
slug: 2026-05-07-your-cart-expires-soon
type: email
date: 2026-05-07
persona: walker
score: "8/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-8, sender/skechers]
---
# Your cart expires soon!
**Score:** 8/10 · **Type:** Email audit · **2026-05-07**
## Executive summary

- The subject line pulled me in — "Your cart expires soon" is exactly the kind of nudge I respond to. I left something in that cart, and now I'm being reminded. Good. When I opened it, the hero product was right there: Skechers Slip-ins Arch Fit Glide-Step Pro in what looks like a men's gray-and-teal colorway, with a big green "COMPLETE YOUR ORDER" button. That part worked on me. Then the email fell apart. The four or five product tiles below the hero were all labeled "Women's" — Women's Slip-ins, Women's Cushioning Foam, women's this, women's that. I'm a 62-year-old guy. I don't need Women's shoes recommended to me right after being told "you liked these and you weren't wrong." And the 20% off banner buried further down? That's a deal I would have acted on immediately if it had been up top, next to my product. This email had the right bones and wasted them.
- **8/10**
- Subject/hero references my focus area (Slip-ins: Arch Fit Glide-Step Pro is visible and relevant) — TRUE
- Sender (Skechers) is a brand I recognize and am subscribed to — TRUE
- Concrete offer visible (20% OFF A SINGLE PAIR, prominently blocked) — TRUE
- Primary CTA unambiguous ("COMPLETE YOUR ORDER," green button, can't miss it) — TRUE
- Visual hierarchy clear (cart recovery hero → offer → nav; flows logically) — TRUE
- No render bugs (images load, text readable, no broken elements) — TRUE
- Demographic signals match — FALSE (supporting product tiles are all Women's styles)
- Current campaign/season — TRUE (Mother's Day Sale is referenced in the footer fine print)
- Loyalty/member benefits visible — FALSE (no Skechers Plus acknowledgment)
- Offer feels honest — TRUE (20% off is clean, no asterisk storm burying the deal)

## What's working

- The cart-recovery hook is solid. "You liked these and you weren't wrong" is folksy and confident — I actually smiled at that. The Slip-ins Arch Fit Glide-Step Pro is right there, center stage, with a clear image and a button that tells me exactly what to do. No mystery.
- The 20% off block is impossible to miss. Big black band, big white text. If I'm on the fence about completing my order, that's the shove I needed.
- The "COMPLETE YOUR ORDER" button is green, full-width, and high enough on the screen that I'm not scrolling to find it. On my phone, that's the difference between clicking and forgetting.

## What's weak

- The women's product grid is the big problem. There are at least five or six product tiles below my hero shoe, and every single one says "Women's" right in the name. I'm not browsing for my wife. This is supposed to be MY cart recovery email. Either the recommendation engine didn't filter by gender, or somebody copy-pasted the wrong module. Either way, it makes me feel like a data point, not a customer.
- The 20% off comes *after* the women's product section. The discount should be closer to the top — right beneath my cart product — not after I've already scrolled past shoes that have nothing to do with me.
- "Your cart expires soon" doesn't say *when*. Tonight? Tomorrow? In an hour? "Soon" is vague. I'm a guy who needs a reason to act *right now*, not a vague nudge.
- No mention anywhere that I'm a Skechers Plus member. I've been loyal to this brand. A little recognition would've gone a long way.

## Recommendations

- 1. **Filter recommendations by gender.** If I'm a male Skechers customer, every product tile in a cart-recovery email should be men's. This is a basic segmentation fix.
- 2. **Move the 20% off offer above the product grid.** It belongs right beneath the hero product and the "COMPLETE YOUR ORDER" button — not buried below the women's shoes.
- 3. **Make the urgency concrete.** "Your cart expires in 24 hours" beats "expires soon" every single time. Give me a deadline I can act on.
- 4. **Acknowledge my loyalty.** Even a single line — "As a Skechers Plus member, your 20% applies instantly" — tells me I'm known, not anonymous.
- 5. **Trim the email.** The texting signup, the app download, curbside pickup, and pay-later logos are clutter. Save those for a browse-nurture email. This is a cart-recovery send — one job, one CTA.
- | Priority | Action |
- |---|---|
- | HIGH | Enable HTTPS click tracking in Attentive account settings; all `upn=` links must use `https://` |
- | HIGH | Verify CAN-SPAM footer (postal address + unsubscribe) exists and is functional in the full source |
- | MEDIUM | Populate `<title>` with a descriptive value (e.g., "Your Skechers Cart") |
- | MEDIUM | Decode 2–3 sample CTA URLs and verify UTM parameters and cart deep-link destination |
- | MEDIUM | Audit personalization token fallbacks for cart items and first-name fields |
- | MEDIUM | Remove or scope `#MessageViewBody a { text-decoration: none }` to avoid stripping underlines from inline text links |
- | LOW | Standardize preheader padding to single character type (`&zwnj;` only) |
- | INFO | Run `dig` checks on SPF/DMARC for `msgs.skechers.com` to confirm authentication posture |

## Full review
---

## 1. Executive Summary

The subject line pulled me in — "Your cart expires soon" is exactly the kind of nudge I respond to. I left something in that cart, and now I'm being reminded. Good. When I opened it, the hero product was right there: Skechers Slip-ins Arch Fit Glide-Step Pro in what looks like a men's gray-and-teal colorway, with a big green "COMPLETE YOUR ORDER" button. That part worked on me. Then the email fell apart. The four or five product tiles below the hero were all labeled "Women's" — Women's Slip-ins, Women's Cushioning Foam, women's this, women's that. I'm a 62-year-old guy. I don't need Women's shoes recommended to me right after being told "you liked these and you weren't wrong." And the 20% off banner buried further down? That's a deal I would have acted on immediately if it had been up top, next to my product. This email had the right bones and wasted them.

---

## 2. Business Impact Score (1-10)

**8/10**

- Subject/hero references my focus area (Slip-ins: Arch Fit Glide-Step Pro is visible and relevant) — TRUE
- Sender (Skechers) is a brand I recognize and am subscribed to — TRUE
- Concrete offer visible (20% OFF A SINGLE PAIR, prominently blocked) — TRUE
- Primary CTA unambiguous ("COMPLETE YOUR ORDER," green button, can't miss it) — TRUE
- Visual hierarchy clear (cart recovery hero → offer → nav; flows logically) — TRUE
- No render bugs (images load, text readable, no broken elements) — TRUE
- Demographic signals match — FALSE (supporting product tiles are all Women's styles)
- Current campaign/season — TRUE (Mother's Day Sale is referenced in the footer fine print)
- Loyalty/member benefits visible — FALSE (no Skechers Plus acknowledgment)
- Offer feels honest — TRUE (20% off is clean, no asterisk storm burying the deal)

---

## 3. What's Working

The cart-recovery hook is solid. "You liked these and you weren't wrong" is folksy and confident — I actually smiled at that. The Slip-ins Arch Fit Glide-Step Pro is right there, center stage, with a clear image and a button that tells me exactly what to do. No mystery.

The 20% off block is impossible to miss. Big black band, big white text. If I'm on the fence about completing my order, that's the shove I needed.

The "COMPLETE YOUR ORDER" button is green, full-width, and high enough on the screen that I'm not scrolling to find it. On my phone, that's the difference between clicking and forgetting.

---

## 4. What's Weak

The women's product grid is the big problem. There are at least five or six product tiles below my hero shoe, and every single one says "Women's" right in the name. I'm not browsing for my wife. This is supposed to be MY cart recovery email. Either the recommendation engine didn't filter by gender, or somebody copy-pasted the wrong module. Either way, it makes me feel like a data point, not a customer.

The 20% off comes *after* the women's product section. The discount should be closer to the top — right beneath my cart product — not after I've already scrolled past shoes that have nothing to do with me.

"Your cart expires soon" doesn't say *when*. Tonight? Tomorrow? In an hour? "Soon" is vague. I'm a guy who needs a reason to act *right now*, not a vague nudge.

No mention anywhere that I'm a Skechers Plus member. I've been loyal to this brand. A little recognition would've gone a long way.

---

## 5. Recommendations

1. **Filter recommendations by gender.** If I'm a male Skechers customer, every product tile in a cart-recovery email should be men's. This is a basic segmentation fix.
2. **Move the 20% off offer above the product grid.** It belongs right beneath the hero product and the "COMPLETE YOUR ORDER" button — not buried below the women's shoes.
3. **Make the urgency concrete.** "Your cart expires in 24 hours" beats "expires soon" every single time. Give me a deadline I can act on.
4. **Acknowledge my loyalty.** Even a single line — "As a Skechers Plus member, your 20% applies instantly" — tells me I'm known, not anonymous.
5. **Trim the email.** The texting signup, the app download, curbside pickup, and pay-later logos are clutter. Save those for a browse-nurture email. This is a cart-recovery send — one job, one CTA.

---

## 6. Bottom Line

I probably complete my order, but despite the email, not because of it. The Slip-ins shoe is right for me and the 20% off is real. But the women's product dump in the middle undercut the whole "we know what you want" premise. This email could've been a 9 — it had the right product, the right offer, the right hook. The targeting dropped the ball.

---

## 7. Subject Line Analysis

- **Subject:** `Your cart expires soon!`
- **Length:** 23 characters
- **Scores (1-10):** Clarity `8`, Curiosity `5`, Personalization `6`, Urgency `7`, Specificity `4`
- **Strengths:**
  - Short and clean — renders fully on any mobile screen without truncation
  - Implies prior behavior (my cart), which signals the email is relevant to something I already did
- **Weaknesses:**
  - "Soon" is undefined — no deadline = no real urgency, just anxiety
  - Doesn't mention the product or the discount; a guy who gets a lot of email might scroll past it
- **Alt A:** `Walker, your Slip-ins are waiting — 20% off today`
- **Alt B:** `Your cart clears at midnight — grab 20% off first`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — not visible in the render; email opens directly into the hero layout with no preheader copy visible
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - N/A — nothing to evaluate
- **Weaknesses:**
  - Missing preview text is a wasted slot; inbox client likely defaulted to boilerplate or whitespace
  - No reinforcement of the urgency or offer from the subject line
- **Alt A:** `The Arch Fit Glide-Step Pro is still in your bag — plus 20% off today only`
- **Alt B:** `Don't lose your Slip-ins. Your 20% discount is waiting.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `8/10`
- **Signals counted:** Sender display name recognizable (SKECHERS), subject is concrete (cart expiry), subject relevant to my category (my cart = my shoes), subject under 50 chars (23 chars), no spam signals (clean, no !!!), personalization hint ("your cart" implies my data), time-bounded urgency ("expires soon")
- **Rationale:** I recognize Skechers immediately, and "your cart expires" tells me this isn't a generic blast — it's about something I was already doing. Short subject on mobile is a plus. The missing "when" and no product name in the subject cost it a couple points.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `7/10`
- **Signals counted:** Hero offer visible without scrolling (cart + product shown high on page), primary CTA in my category (men's Slip-ins), CTA copy is specific ("COMPLETE YOUR ORDER" = verb + noun), offer reduces price (20% off), offer is time-bounded (cart expiry framing), one specific product/hero linked (Glide-Step Pro featured), brand voice consistent and trusted, no friction on CTA
- **Rationale:** The "COMPLETE YOUR ORDER" button right under my shoe is a clean, action-oriented path and I'd probably tap it. What holds me back is the women's product flood right below — it breaks the trust that this email knows who I am, and makes me wonder if the 20% applies the way I think it does.

---

## 11. Evidence

- **Overall purpose:** Cart abandonment recovery — prompt me to complete a purchase I started, with a 20% off incentive as added motivation
- **Hero / primary value proposition:** Skechers Slip-ins Arch Fit Glide-Step Pro – Lexo (men's athletic shoe, gray/teal colorway); "YOU LIKED THESE AND YOU WEREN'T WRONG"; "COMPLETE YOUR ORDER" green button
- **Membership / benefits section:** None visible. No Skechers Plus callout or member-exclusive framing
- **Product discoverability / recommendation modules:** One horizontal grid of ~5-6 product tiles, all labeled Women's Slip-ins or Women's Cushioning styles — clearly mismatched for a male recipient
- **Utility / secondary modules:** 20% OFF A SINGLE PAIR block with "SHOP NOW"; category nav (Women, Men, Kids, Clothing, New Arrivals, Sale); "LET'S GET TEXTING" SMS signup; App Store / Google Play download; Curbside Pickup; Afterpay and Klarna buy-now-pay-later logos; Find a Store; social follow icons; Mother's Day Sale fine print in footer
- **Bugs / friction / clarity issues:** No visible image breaks or text overlap. The women's product tiles are the only functional issue visible — they render correctly, they're just the wrong gender. The product names on the recommendation tiles are small enough that on a real phone I'd need to zoom to read them.

---

## Technical Audit

## Technical Audit — Skechers "Your cart expires soon!" (hello@msgs.skechers.com)

---

### 1. Technical Summary

Table-based cart abandonment email built and tracked through Attentive ESP (`skechers.attentivemail.com`). Critical issue: all click-tracking URLs are served over HTTP, not HTTPS, exposing the redirect chain to interception before the final destination.

---

### 2. Link & Tracking Issues

**[HIGH] HTTP tracking redirects**
All `<a href>` values use `http://skechers.attentivemail.com/ls/click?upn=...` — unencrypted. Example:
```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorXOZu5avyAvDTfG...
```
Even if the final destination is HTTPS, the first-hop redirect is cleartext. Modern spam filters and browsers flag mixed-content HTTP links; some corporate proxies will block or strip them. Attentive supports HTTPS click tracking — this should be enabled at the account/campaign level.

**[MEDIUM] UTM attribution — unverifiable in truncated source**
The raw tracking URLs do not show appended UTM parameters before the Attentive encoding. If Attentive is not configured to append `utm_source=email&utm_medium=cart_abandon&utm_campaign=...` to the final destination URL, GA4/analytics will attribute returning visitors as direct traffic. Verify in Attentive's link-tracking settings or decode a sample `upn=` parameter to inspect the destination URL.

---

### 3. Rendering & Accessibility

**[MEDIUM] Empty `<title>` tag**
```html
<title></title>
```
Several email clients (Outlook, Gmail web) surface the `<title>` value in the browser tab or message preview. An empty title means no fallback label if the subject line is unavailable.

**[MEDIUM] Global link text-decoration removal in Gmail**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This rule strips underlines from every anchor in Gmail's message body. Links that rely solely on color for identification fail WCAG 1.4.1 (Use of Color). CTA buttons are exempt if they have sufficient visual contrast, but any inline text links become indistinguishable from body copy.

**[LOW] Mixed preheader padding characters**
The preheader spacer block uses two different zero-width character types interleaved:
- U+034F COMBINING GRAPHEME JOINER (`͏`) — 150 instances
- U+00AD SOFT HYPHEN (`­`) — ~200 instances

This is functional, but inconsistent rendering across older Outlook versions and Samsung Mail has been reported with mixed-type padding. Single-type padding (all `&zwnj;`) is more predictable.

**[INFO] `lang="en"` present** — no issue.
**[INFO] Viewport meta tag present** — no issue.
**[INFO] `a[x-apple-data-detectors]` override correctly implemented** — no issue.

---

### 4. Personalization & Merge Tokens

Source is truncated before cart item rows and any first-name personalization tokens. **Cannot fully audit.** Key risks to verify in the full source:

- Cart item product name/image/price tokens — confirm fallback values exist if cart data is missing (e.g., `{{product.name | default: 'your item'}}`)
- First-name token in subject or body — confirm non-empty fallback to prevent "Hi ," renders
- Cart expiry timestamp — confirm it's dynamically rendered server-side, not a static string that goes stale if the email is opened days later

No unresolved tokens visible in the truncated portion.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**[CRITICAL — unverifiable] Physical postal address and unsubscribe**
The HTML is truncated before the footer. CAN-SPAM §3(b)(3) requires a valid physical postal address and a functional unsubscribe mechanism in every commercial email. These are almost certainly present in the footer (standard for Attentive), but **must be confirmed in the full source**. Unsubscribe link must resolve within 10 business days per CAN-SPAM.

**[INFO] Sending domain authentication**
Cannot assess DKIM/DMARC/SPF from HTML alone. For `msgs.skechers.com`, verify:
```
dig TXT msgs.skechers.com          # SPF record
dig TXT _dmarc.skechers.com        # DMARC policy
```
Attentive typically handles DKIM signing on dedicated subdomains, but a `p=none` DMARC policy would still leave the domain exposed to spoofing.

---

### 6. Email-to-Site Continuity

**[MEDIUM] UTM pass-through unconfirmed**
Destination URLs are Base64/encoded inside the `upn=` parameter and are not human-readable in the raw source. Without decoding a sample redirect, it's impossible to confirm:
- UTM parameters reach the Skechers site
- The cart abandonment flow deep-links to the correct cart/product page (not the homepage)
- Session continuity is preserved for logged-in users (cookie/token handoff)

Decode at least one CTA link and test the full redirect chain in an incognito session to verify landing page alignment.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| HIGH | Enable HTTPS click tracking in Attentive account settings; all `upn=` links must use `https://` |
| HIGH | Verify CAN-SPAM footer (postal address + unsubscribe) exists and is functional in the full source |
| MEDIUM | Populate `<title>` with a descriptive value (e.g., "Your Skechers Cart") |
| MEDIUM | Decode 2–3 sample CTA URLs and verify UTM parameters and cart deep-link destination |
| MEDIUM | Audit personalization token fallbacks for cart items and first-name fields |
| MEDIUM | Remove or scope `#MessageViewBody a { text-decoration: none }` to avoid stripping underlines from inline text links |
| LOW | Standardize preheader padding to single character type (`&zwnj;` only) |
| INFO | Run `dig` checks on SPF/DMARC for `msgs.skechers.com` to confirm authentication posture |
## Recent history

- [[2026-05-07-a-little-something-for-mom-and-you-with-bogo-50-off-861df8d6-2ce7-4cfc-847e-]] — 7/10 (2026-05-07)
- [[2026-05-07-current-kids-bestsellers]] — 2/10 (2026-05-07)
- [[2026-05-06-inside-your-mid-week-boost]] — 7/10 (2026-05-06)

