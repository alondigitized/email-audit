---
slug: 2026-05-06-did-you-forget-something
type: email
date: 2026-05-06
persona: walker
score: "6/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-6, sender/skechers]
---
# Did you forget something?
**Score:** 6/10 · **Type:** Email audit · **2026-05-06**
## Executive summary

- This is a cart-abandonment email from Skechers with a clear mission: bring me back to finish a purchase I left behind. The "Did you forget something?" hook is simple and I get it immediately — I've left stuff in carts before. The 20% off offer is solid and I can see it without scrolling too hard. But here's my problem: the shoe they're dangling in front of me as my "forgotten" item — the "Kynley" — looks like a women's style, and the product grid below it is stacked with Women's shoes. I'm a 62-year-old guy shopping Men's Slip-ins. Why are you showing me women's footwear in my cart recovery email? That's either a data error or sloppy segmentation, and either way it makes me trust the email less. The bones of this campaign are right; the targeting execution let it down.

## What's working

- The abandoned cart framing is effective. "Ready to Check Out?" in the hero banner is direct and I understand the nudge instantly — no mystery about what they want me to do. The "COMPLETE YOUR ORDER" button is orange, prominent, and impossible to miss. I don't have to hunt for it.
- The Max Cushioning Premier 3 in the hero is a Slip-in, which is exactly the technology I look for. Even if the specific colorway seems off, at least it's the right product family for me. The 20% off block below the hero is a genuine incentive — I'm price-conscious, and a discount on a pair I already looked at is the right lever to pull.
- The email also loads cleanly. No broken images, no garbled text, no layout chaos. At my age, a messy email that's hard to read just gets deleted.

## What's weak

- **The hero product appears to be a women's style.** "Kynley" is a women's Skechers style name, and the product grid below the hero is labeled Women's across the board — Women's Slip-ins, Women's D'Lux, Women's Flex. I'm a man. If I actually left something in my cart, why are you showing me women's shoes as if they're mine? That's the kind of thing that makes me wonder if this email even belongs in my inbox.
- **No mention of Skechers Plus.** I'm a loyalty member. A cart recovery email is the perfect moment to remind me I have points or a member price. Instead, the 20% off offer has an asterisk pointing to fine print I have to squint to read. That asterisk makes me nervous about exclusions — will my shoe even qualify?
- **Mother's Day in the fine print.** I scroll to the bottom and there's "MOTHER'S DAY SALE" copy. I'm not shopping for my mother. That framing just reminds me this is a mass blast with my name slapped on it.
- **The product recommendations don't help me.** The grid of shoes below the hero is a sea of women's styles. None of that moves me toward a click for myself.

## Recommendations

- 1. **Fix the cart item.** If my cart had a men's shoe, show that shoe. If the segmentation pulled the wrong gender's product, that's a data bug that needs fixing before this send goes to men's subscribers.
- 2. **Lead with the men's Slip-ins grid.** Replace the women's product carousel with men's Max Cushioning or Go Walk styles. I should see myself in this email.
- 3. **Call out my Skechers Plus status.** "As a Plus member, your 20% applies — no exclusions on Slip-ins" would seal the deal for me. Make me feel known.
- 4. **Kill the asterisk ambiguity.** Either make the 20% clean and simple, or surface the one key exclusion in the body so I don't have to worry about it at checkout.
- 5. **Drop or reframe the Mother's Day fine print for male segments.** Or at least don't make it the last thing I read.
- | Priority | Item |
- |---|---|
- | High | Verify Attentive click-redirect enforces HTTPS on all destination URLs; switch tracking base URL to `https://` if configurable |
- | High | Run a live test click and confirm UTM params (`utm_source=email`, `utm_medium=cart_abandon`, `utm_campaign=…`) reach skechers.com via network inspector |
- | High | Confirm SPF/DKIM/DMARC pass on `msgs.skechers.com` via raw headers |
- | Medium | Confirm CAN-SPAM footer (physical address + unsubscribe) is present and not CSS-hidden in full source |
- | Medium | Populate `<title>` tag |
- | Low | Add `role="presentation"` to layout tables |
- | Low | Review `text-decoration:none` override — ensure links are still visually distinguishable without relying solely on color |

## Full review
---

## 1. Executive Summary

This is a cart-abandonment email from Skechers with a clear mission: bring me back to finish a purchase I left behind. The "Did you forget something?" hook is simple and I get it immediately — I've left stuff in carts before. The 20% off offer is solid and I can see it without scrolling too hard. But here's my problem: the shoe they're dangling in front of me as my "forgotten" item — the "Kynley" — looks like a women's style, and the product grid below it is stacked with Women's shoes. I'm a 62-year-old guy shopping Men's Slip-ins. Why are you showing me women's footwear in my cart recovery email? That's either a data error or sloppy segmentation, and either way it makes me trust the email less. The bones of this campaign are right; the targeting execution let it down.

---

## 2. Business Impact Score

**6/10**

- Subject/hero explicitly references Slip-ins (my comfort tech focus area) → **TRUE**
- Sender is Skechers, a brand I recognize and am subscribed to → **TRUE**
- One concrete offer is visible: 20% OFF A SINGLE PAIR → **TRUE**
- Primary CTA is unambiguous: "COMPLETE YOUR ORDER" orange button → **TRUE**
- Visual hierarchy is clear — the hero loads first, eye goes straight to the offer → **TRUE**
- No visible render bugs — layout looks clean and renders properly → **TRUE**
- Demographic signals match my persona (62M, men's casual): women's products dominate the grid → **FALSE**
- Email reflects current campaign/season: Mother's Day sale in fine print — not my holiday → **FALSE**
- Loyalty/member benefits visible (Skechers Plus): not called out anywhere I can see → **FALSE**
- Offer feels honest: the 20% carries an asterisk with fine-print exclusions → **FALSE**

---

## 3. What's Working

The abandoned cart framing is effective. "Ready to Check Out?" in the hero banner is direct and I understand the nudge instantly — no mystery about what they want me to do. The "COMPLETE YOUR ORDER" button is orange, prominent, and impossible to miss. I don't have to hunt for it.

The Max Cushioning Premier 3 in the hero is a Slip-in, which is exactly the technology I look for. Even if the specific colorway seems off, at least it's the right product family for me. The 20% off block below the hero is a genuine incentive — I'm price-conscious, and a discount on a pair I already looked at is the right lever to pull.

The email also loads cleanly. No broken images, no garbled text, no layout chaos. At my age, a messy email that's hard to read just gets deleted.

---

## 4. What's Weak

**The hero product appears to be a women's style.** "Kynley" is a women's Skechers style name, and the product grid below the hero is labeled Women's across the board — Women's Slip-ins, Women's D'Lux, Women's Flex. I'm a man. If I actually left something in my cart, why are you showing me women's shoes as if they're mine? That's the kind of thing that makes me wonder if this email even belongs in my inbox.

**No mention of Skechers Plus.** I'm a loyalty member. A cart recovery email is the perfect moment to remind me I have points or a member price. Instead, the 20% off offer has an asterisk pointing to fine print I have to squint to read. That asterisk makes me nervous about exclusions — will my shoe even qualify?

**Mother's Day in the fine print.** I scroll to the bottom and there's "MOTHER'S DAY SALE" copy. I'm not shopping for my mother. That framing just reminds me this is a mass blast with my name slapped on it.

**The product recommendations don't help me.** The grid of shoes below the hero is a sea of women's styles. None of that moves me toward a click for myself.

---

## 5. Recommendations

1. **Fix the cart item.** If my cart had a men's shoe, show that shoe. If the segmentation pulled the wrong gender's product, that's a data bug that needs fixing before this send goes to men's subscribers.
2. **Lead with the men's Slip-ins grid.** Replace the women's product carousel with men's Max Cushioning or Go Walk styles. I should see myself in this email.
3. **Call out my Skechers Plus status.** "As a Plus member, your 20% applies — no exclusions on Slip-ins" would seal the deal for me. Make me feel known.
4. **Kill the asterisk ambiguity.** Either make the 20% clean and simple, or surface the one key exclusion in the body so I don't have to worry about it at checkout.
5. **Drop or reframe the Mother's Day fine print for male segments.** Or at least don't make it the last thing I read.

---

## 6. Bottom Line

I'd probably open this because abandoned cart emails feel personal and Skechers is a brand I trust. But once I'm inside and I see women's shoes in "my" cart, I'm confused and a little annoyed. The 20% off is real money and might still get me to click "COMPLETE YOUR ORDER" on the hero, but I'm going in skeptical. A cleaner gender-targeted version of this email — men's Slip-ins, my Plus status called out, asterisk explained — would have me clicking within 10 seconds flat.

---

## 7. Subject Line Analysis

- **Subject:** `Did you forget something?`
- **Length:** 25 chars
- **Scores (1-10):** Clarity `7`, Curiosity `6`, Personalization `4`, Urgency `5`, Specificity `3`
- **Strengths:**
  - Short, mobile-friendly, reads instantly on a small screen — even my older eyes catch it
  - Classic cart-recovery hook that implies a specific action without being pushy
- **Weaknesses:**
  - Zero specificity — no product, no offer, no reason to open beyond mild curiosity
  - No personalization; could be sent to anyone about anything
- **Alt A:** `Your Skechers Slip-ins are waiting — 20% off today`
- **Alt B:** `Walker, your cart is still here (and 20% off)`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the visible open-email hero leads with "READY TO CHECK OUT?" but no distinct preheader copy is discernible as separate from the body in the render
- **Length:** N/A
- **Scores (1-10):** Complements subject `2`, Specificity `2`, Clarity `3`, Inbox-fit `2`
- **Strengths:**
  - The hero banner copy ("READY TO CHECK OUT?") at least echoes the theme if it bleeds into preview
- **Weaknesses:**
  - No dedicated preheader means inbox clients pull whatever text renders first, likely button copy or nav links — wasted real estate before the open even happens
  - Missed chance to surface the 20% offer or the specific shoe in the preview window
- **Alt A:** `Your Max Cushioning Slip-ins are still in your cart — take 20% off today`
- **Alt B:** `20% off the pair you left behind — finish your order before it's gone`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `7/10`
- **Signals counted:** sender display name recognizable (Skechers), subject is a concrete behavioral trigger (abandoned cart), subject relevant to my shopping activity, subject under 50 chars (25), no spam signals (clean language, no ALL CAPS or exclamation stacking), personalized behavioral trigger (cart abandonment = my action), preview likely reinforces the action prompt
- **Rationale:** The subject line is short, clean, and references something I actually did — leave a cart. Skechers is a brand I already buy from, so I'm not ignoring this. The missing preview text and lack of offer in the subject line cost a couple of points.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** hero offer visible without scrolling on mobile, "COMPLETE YOUR ORDER" CTA is specific verb+noun, 20% off is a real price reduction, one specific hero product is linked (the Kynley Slip-in), brand voice is consistent and trusted, email renders without friction
- **Rationale:** The 20% off is real and the CTA is clear, but the hero product reads as a women's shoe and the supporting product grid is entirely women's — that mismatch makes me pause before clicking. I might still hit the button on the hero out of habit, but I'm not confident the offer will apply to what I actually want.

---

## 11. Evidence

- **Overall purpose:** Cart abandonment recovery email. Designed to bring me back to complete a purchase I didn't finish.
- **Hero / primary value proposition:** "READY TO CHECK OUT?" banner with the Skechers Slip-ins: Max Cushioning Premier 3 – Kynley shown as my abandoned cart item. Orange "COMPLETE YOUR ORDER" button directly below.
- **Membership / benefits section:** None visible. No Skechers Plus acknowledgment, no member-exclusive pricing called out.
- **Product discoverability / recommendation modules:** A grid of six shoes sits below the hero. Based on visible labels, these are Women's styles (Women's Slip-ins, Women's D'Lux Walking, Women's Flex, Women's Max Air And Fit Pro-Sole). A "SHOP ALL BEST SELLERS" black button follows the grid.
- **20% OFF module:** Prominent black-background banner reads "20% OFF A SINGLE PAIR" with a "SHOP NOW" button and an asterisk. Fine print exclusions are present but require squinting.
- **Navigation / utility:** Text links for WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE. Text-to-join offer (SKECHERS to 83838). Download the App badges. Curbside Pickup. Shop Now Pay Later (Afterpay, Klarna). Find a Store.
- **Footer:** Social media icons, unsubscribe/privacy links, Mother's Day Sale fine print with Buy One Get One or 20% off language and exclusions.
- **Bugs / friction:** No broken images or overlapping text visible. Primary friction is content mismatch — the abandoned cart item and recommendation grid skew women's for a men's subscriber.

---

## Technical Audit

## Technical Audit — Skechers "Did you forget something?" (Abandoned Cart)

---

### 1. Technical Summary

Table-based HTML email sent via Attentive's platform (`attentivemail.com`), with mobile media queries and a preheader block. Several link security, accessibility, and compliance items need verification against the full (untruncated) source and live headers.

---

### 2. Link & Tracking Issues

**HTTP tracking URLs (confirmed)**
Every link routes through `http://skechers.attentivemail.com/ls/click?upn=...` — the scheme is plain HTTP, not HTTPS. Example:
```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6...
```
Attentive likely upgrades to HTTPS on redirect, but the initial hop is unencrypted. This can raise spam scores and trigger browser/client security warnings.

**UTM parameter passthrough — unverifiable**
Destination URLs are fully opaque behind the Attentive redirect. Cannot confirm `utm_source`, `utm_medium`, `utm_campaign`, or `utm_content` are appended to the final skechers.com URLs. Requires a live click-through test.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**
```html
<title></title>
```
Some email clients (notably Outlook on the web) surface this in tabs or the accessibility tree. Should contain a meaningful string.

**Global link style override suppresses underlines**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This strips visual link affordance for all anchors. Users relying on underlines (color-blind, low-vision) lose the only reliable link indicator.

**No `role="presentation"` on layout tables**
Standard practice for screen-reader compatibility in email; omitted throughout.

**Image alt text — unverifiable from truncated source**
The `<img>` tags in `row-2` and beyond are cut off. Alt attributes must be confirmed in the full source.

---

### 4. Personalization & Merge Tokens

HTML source is truncated before the cart product block. For an abandoned cart email, dynamic tokens (item name, image, price, cart URL) must be present and firing. **Cannot confirm or deny broken tokens from the provided excerpt.** Verify the full rendered source for literal `{{…}}` or `*|…|*` strings.

No broken tokens visible in the portion provided.

---

### 5. Compliance

**CAN-SPAM footer — unverifiable**
Physical mailing address and unsubscribe mechanism are required. Both appear below the fold in the truncated source. Attentive typically injects these — confirm in the full source that neither is missing or hidden (`display:none`, `max-height:0`).

**Authentication headers — cannot be assessed from HTML**
Sender domain is `msgs.skechers.com`. SPF, DKIM, and DMARC alignment must be verified from raw email headers (e.g., via MXToolbox or mail-tester.com). A failed DMARC policy on the `msgs.` subdomain will suppress delivery.

---

### 6. Email-to-Site Continuity

UTM passthrough cannot be confirmed (see §2). If Attentive is not configured to append UTM parameters before the final redirect, abandoned cart conversions will attribute as `(direct)` in analytics rather than `email`.

Web version link is present and structurally correct.

---

### 7. Recommendations

| Priority | Item |
|---|---|
| High | Verify Attentive click-redirect enforces HTTPS on all destination URLs; switch tracking base URL to `https://` if configurable |
| High | Run a live test click and confirm UTM params (`utm_source=email`, `utm_medium=cart_abandon`, `utm_campaign=…`) reach skechers.com via network inspector |
| High | Confirm SPF/DKIM/DMARC pass on `msgs.skechers.com` via raw headers |
| Medium | Confirm CAN-SPAM footer (physical address + unsubscribe) is present and not CSS-hidden in full source |
| Medium | Populate `<title>` tag |
| Low | Add `role="presentation"` to layout tables |
| Low | Review `text-decoration:none` override — ensure links are still visually distinguishable without relying solely on color |
## Recent history

- [[2026-05-06-sneakers-under-50-75-100]] — 8/10 (2026-05-06)
- [[2026-05-06-4-trends-to-try-in-may]] — 7/10 (2026-05-06)
- [[2026-05-06-become-a-new-balance-member]] — 4/10 (2026-05-06)

