---
slug: 2026-04-30-your-items-are-waiting
type: email
date: 2026-04-30
persona: walker
score: "6/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-6, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 6/10 · **Type:** Email audit · **2026-04-30**
## Executive summary

- **From:** SKECHERS `<hello@msgs.skechers.com>`
- **Subject:** Your Items Are Waiting!
- Alright, so Skechers noticed I didn't finish checking out and sent me a nudge. That's fine — I don't mind a reminder. The shoe they're showing me, the Slip-ins Arch Fit Glide-Step Pro in that light gray, is right up my alley. That alone got my attention. But then the email kind of falls apart on me. They throw in a handful of "recommendations" that look mostly like women's shoes, which has nothing to do with me. There's a 20% off offer buried in the middle, but the fine print is tiny and I can't quite make out the restrictions without squinting. Overall it's a decent attempt at a cart-recovery email that loses steam after the hero.
- The hero is spot-on. The offer is real. But the targeting breaks down in the recommendations section, and there's no urgency signal tied to my actual cart. Could convert me, could also just get ignored after the first scroll.

## What's working

- **The hero product is exactly right for me.** Slip-ins, Arch Fit, men's colorway. That's what I left in my cart and that's what they're showing me. Good memory, Skechers.
- **"COMPLETE YOUR ORDER" CTA is big and obvious.** Blue button, centered, can't miss it. I don't have to hunt for what to do.
- **The 20% off banner catches the eye.** A discount on top of finishing my order? That's an extra nudge I didn't expect.
- **Afterpay and Klarna listed.** I'm not a buy-now-pay-later guy personally, but I appreciate they're giving me options.

## What's weak

- **Those "recommended" products look like women's shoes.** I can clearly read "Women's" labels on at least a couple of those four items in the secondary grid. I'm a 62-year-old man. Why am I looking at women's sneakers? That's lazy targeting and it makes me feel like they're just filling space.
- **The 20% off fine print is microscopic.** I can see there's text under the offer but I cannot read it on my phone without pinching and zooming. Is it just for one pair? Is there an exclusion? That uncertainty makes me hesitant.
- **"Mother's Day Sale" appears in the footer legal block.** I'm buying shoes for myself, not shopping for a gift. That reminder just tells me this email was assembled with a generic template on top of a seasonal push.
- **No urgency tied to my cart.** It says my cart is "still waiting" but there's no "expires in 48 hours" or "only X left in stock" signal. Without that, I can keep putting it off.
- **The navigation menu (Women, Men, Kids, Clothing) takes up real estate.** On a phone, all those tap targets pushing me toward general browsing dilutes the one message they should be sending: finish buying that shoe.

## Recommendations

- 1. **Filter the recommendation grid to Men's only.** I shouldn't have to see women's shoes in my personalized cart recovery email. This is a data targeting fix that would immediately make this feel more relevant.
- 2. **Add a stock or time nudge to the hero.** Something like "Only a few left in your size" or "Offer expires in 24 hours" would stop me from saying "I'll come back later."
- 3. **Enlarge the 20% off terms or call them out plainly.** If it's one pair only, say that big and proudly — "Save 20% when you finish your order." Don't bury it.
- 4. **Drop the Mother's Day block from a cart-recovery email.** Keep the message focused. Seasonal noise breaks the cart-abandonment mission.
- 5. **Consider surfacing my Skechers Plus membership status.** If I'm a loyalty member, remind me — that's a relationship, not a mass blast.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP links (click-tracking + images) | Confirm Attentive is configured to use `https://` for the redirect domain; re-check image CDN URLs |
- | High | CAN-SPAM footer not in scope | Audit full HTML for unsubscribe link and physical address |
- | High | UTM attribution unverifiable | Click through test send; verify GA4/analytics receives `utm_source`, `utm_medium`, `utm_campaign` |
- | Medium | `alt` attributes on images | Confirm all `<img>` tags carry descriptive `alt` text |
- | Medium | Authentication headers | Pull raw headers from a test send; verify DKIM, SPF, DMARC alignment |
- | Low | Global `text-decoration:none` on links | Scope the rule to specific selectors rather than `#MessageViewBody a` |
- | Low | Mixed invisible preheader characters | Standardize on one invisible-character technique |
- | Low | Empty `<title>` | Set a meaningful title (e.g., `"Your cart – Skechers"`) |

## Full review
---

## Email Review — Walker Miles, Age 62

**From:** SKECHERS `<hello@msgs.skechers.com>`
**Subject:** Your Items Are Waiting!

---

### 1. Executive Summary

Alright, so Skechers noticed I didn't finish checking out and sent me a nudge. That's fine — I don't mind a reminder. The shoe they're showing me, the Slip-ins Arch Fit Glide-Step Pro in that light gray, is right up my alley. That alone got my attention. But then the email kind of falls apart on me. They throw in a handful of "recommendations" that look mostly like women's shoes, which has nothing to do with me. There's a 20% off offer buried in the middle, but the fine print is tiny and I can't quite make out the restrictions without squinting. Overall it's a decent attempt at a cart-recovery email that loses steam after the hero.

---

### 2. Business Impact Score: **6 / 10**

The hero is spot-on. The offer is real. But the targeting breaks down in the recommendations section, and there's no urgency signal tied to my actual cart. Could convert me, could also just get ignored after the first scroll.

---

### 3. What's Working

- **The hero product is exactly right for me.** Slip-ins, Arch Fit, men's colorway. That's what I left in my cart and that's what they're showing me. Good memory, Skechers.
- **"COMPLETE YOUR ORDER" CTA is big and obvious.** Blue button, centered, can't miss it. I don't have to hunt for what to do.
- **The 20% off banner catches the eye.** A discount on top of finishing my order? That's an extra nudge I didn't expect.
- **Afterpay and Klarna listed.** I'm not a buy-now-pay-later guy personally, but I appreciate they're giving me options.

---

### 4. What's Weak

- **Those "recommended" products look like women's shoes.** I can clearly read "Women's" labels on at least a couple of those four items in the secondary grid. I'm a 62-year-old man. Why am I looking at women's sneakers? That's lazy targeting and it makes me feel like they're just filling space.
- **The 20% off fine print is microscopic.** I can see there's text under the offer but I cannot read it on my phone without pinching and zooming. Is it just for one pair? Is there an exclusion? That uncertainty makes me hesitant.
- **"Mother's Day Sale" appears in the footer legal block.** I'm buying shoes for myself, not shopping for a gift. That reminder just tells me this email was assembled with a generic template on top of a seasonal push.
- **No urgency tied to my cart.** It says my cart is "still waiting" but there's no "expires in 48 hours" or "only X left in stock" signal. Without that, I can keep putting it off.
- **The navigation menu (Women, Men, Kids, Clothing) takes up real estate.** On a phone, all those tap targets pushing me toward general browsing dilutes the one message they should be sending: finish buying that shoe.

---

### 5. Recommendations

1. **Filter the recommendation grid to Men's only.** I shouldn't have to see women's shoes in my personalized cart recovery email. This is a data targeting fix that would immediately make this feel more relevant.
2. **Add a stock or time nudge to the hero.** Something like "Only a few left in your size" or "Offer expires in 24 hours" would stop me from saying "I'll come back later."
3. **Enlarge the 20% off terms or call them out plainly.** If it's one pair only, say that big and proudly — "Save 20% when you finish your order." Don't bury it.
4. **Drop the Mother's Day block from a cart-recovery email.** Keep the message focused. Seasonal noise breaks the cart-abandonment mission.
5. **Consider surfacing my Skechers Plus membership status.** If I'm a loyalty member, remind me — that's a relationship, not a mass blast.

---

### 6. Bottom Line

I'd probably tap "COMPLETE YOUR ORDER" if I was already in a buying mood, because that shoe is exactly what I was looking at. But the email itself doesn't close the deal — it reminds me of my cart and then throws a bunch of stuff at me that isn't mine. The 20% off helps, but I can't read the terms. A tighter execution on the targeting and a clearer offer statement would push this from a "maybe" to a "yes, let me finish that."

---

### 7. Subject Line Analysis

- **Subject:** `Your Items Are Waiting!`
- **Length:** 23 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `5`, Urgency `5`, Specificity `3`
- **Strengths:**
  - Clean and readable — no jargon, a Boomer can parse it instantly
  - The exclamation point adds mild warmth without screaming
- **Weaknesses:**
  - "Items" is vague — could be anything from any store; doesn't anchor me to Skechers or shoes
  - No urgency hook — nothing tells me why today is different from tomorrow
- **Alt A:** `Your Slip-ins Are Still in the Cart, Walker`
- **Alt B:** `Don't lose your Arch Fit — 20% off if you finish today`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the screenshot doesn't show an intentional preheader; whatever inbox text renders after the subject appears to be default/system fallback
- **Length:** N/A
- **Scores (1-10):** Complements subject `2`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None apparent — there's no crafted preheader working alongside the subject
- **Weaknesses:**
  - A wasted inch of real estate in the inbox preview pane; the subject line has to do all the heavy lifting alone
  - Missing the easiest reinforcement opportunity: name the product, name the deal
- **Alt A:** `The Arch Fit Glide-Step Pro you looked at — 20% off if you finish today`
- **Alt B:** `Your Slip-ins are one tap away. Grab 20% off before they sell out.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** "Your Items Are Waiting!" tells me it's about my cart, so I know it's about something I already looked at — that gets me curious enough to open. But it doesn't name Skechers in the subject, so if I'm flipping through my inbox fast, I might just archive it assuming it's junk.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** The hero product and the "COMPLETE YOUR ORDER" button are well-placed, and if I've opened the email I'm probably already 60% sold — but the women's shoe recommendations and the unreadable fine print on the 20% off make me second-guess and close out rather than commit.

---

### 11. Evidence

- **Overall purpose:** Abandoned cart recovery — one specific product, one clear CTA to return and purchase
- **Hero / primary value proposition:** Skechers Slip-ins: Arch Fit Glide-Step Pro - Lareo (men's, gray colorway); "COMPLETE YOUR ORDER" is the primary CTA; visually dominant and properly sized for mobile
- **Membership / benefits section:** None visible — no Skechers Plus loyalty callout, no member-exclusive framing; a missed opportunity for a known customer
- **Product discoverability / recommendation modules:** Four-product grid labeled "Here's Some More Great Options We Think You'll Love" — at least two items visibly labeled "Women's," which is off-target for this persona; "SHOP ALL BEST SELLERS" CTA follows
- **Utility / secondary modules:** 20% off single-pair offer (bold, but fine print too small); category navigation bar (Women, Men, Kids, Clothing, New Arrivals, Sale); Let's Get Texting SMS signup; Download the App; Curbside Pickup; Afterpay/Klarna payment options; Find a Store; social follow links
- **Bugs / friction / clarity issues:** Women's-labeled products in a male cart-recovery email is the most visible targeting failure; 20% off terms text is rendered too small to read without zooming on a phone; Mother's Day Sale reference appears in the footer legal copy, misaligning with the cart-recovery intent

---

## Technical Audit

## Technical Audit — Skechers "Your Items Are Waiting!" (Abandoned Cart)

---

### 1. Technical Summary

Abandoned-cart email sent via Attentive ESP (`msgs.skechers.com` / `skechers.attentivemail.com`). All click-tracking links and image URLs use plain HTTP rather than HTTPS, and the truncated source leaves several CAN-SPAM compliance elements unverifiable.

---

### 2. Link & Tracking Issues

**HTTP click-tracking domain**
Every `<a href>` in the provided source uses `http://skechers.attentivemail.com/ls/click?upn=…`, not `https://`. If the destination page is HTTPS (standard for skechers.com), the redirect chain starts insecure.
- Evidence: `href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor…"`

**HTTP image URL**
The logo/product image `src` begins `http://image.em…` (source truncated). HTTP image loads are blocked or flagged in Gmail, Outlook 365, and Apple Mail when the client enforces HTTPS.

**UTM parameters not verifiable**
Links are fully wrapped in Attentive redirect URLs. Destination UTMs cannot be confirmed from this source. If Attentive is not injecting `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` on the final redirect, attribution will be lost.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**
`<title></title>` — some clients (notably Outlook preview pane) surface the `<title>` as a tooltip or tab label. Empty is not broken, but it's a missed fallback.

**Link underlines suppressed globally**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
Removes all visual link differentiation for sighted users relying on underline cues, and for users with color-vision deficiency. WCAG 1.4.1 (Use of Color) applies even in email.

**Preheader padding uses mixed invisible-character techniques**
The preheader spacer combines U+034F (COMBINING GRAPHEME JOINER, `͏`) and U+00AD (SOFT HYPHEN, `­`). Mixing the two is unnecessary and can trigger spam-content heuristics on some filters. A single technique is sufficient.

**Image `alt` text not verifiable**
The `<img>` tag is truncated at `http://image.em…`; `alt` attribute presence cannot be confirmed. If absent, image-blocking clients (Outlook desktop by default) will render blank boxes with no context.

**Responsive breakpoint**
`@media (max-width:620px)` — correct and standard. Mobile column stacking present. No issues found beyond the above.

---

### 4. Personalization & Merge Tokens

The preheader and subject are consistent with an abandoned-cart trigger ("You left something in your cart"). No unresolved merge tokens (e.g., `{{first_name}}`, `[PRODUCT_NAME]`) are visible in the provided HTML. Cart-item product name, image, and price tokens are expected but the source is truncated before those rows — cannot confirm render success from this excerpt.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Unsubscribe link — not visible in provided source**
CAN-SPAM §5(a)(5) requires a clear unsubscribe mechanism. The source is truncated; the footer is not present. If the unsubscribe link is absent or non-functional, this is a legal violation. Must be verified against the full source.

**Physical mailing address — not visible in provided source**
CAN-SPAM §5(a)(4) requires a valid physical postal address in every commercial email. Not present in the provided excerpt — verify in the full footer.

**Authentication headers (SPF / DKIM / DMARC)**
Cannot be assessed from HTML source alone. To audit: pull raw message headers and confirm:
- `DKIM-Signature` domain aligns with `msgs.skechers.com`
- SPF passes for Attentive's sending IPs on behalf of `msgs.skechers.com`
- DMARC policy on `skechers.com` is at least `p=quarantine`

---

### 6. Email-to-Site Continuity (UTM / Landing Page Alignment)

All links resolve through `skechers.attentivemail.com/ls/click` wrappers, so final destination URLs and UTM params are not visible in source. The following must be verified by clicking through in a test environment:

- `utm_source=attentive` (or equivalent ESP identifier)
- `utm_medium=email`
- `utm_campaign` and `utm_content` matching this campaign's send ID
- Landing page should deep-link to the abandoned cart or each specific product — a redirect to the homepage would break the user flow and depress conversion attribution.

The preheader promotes "Skechers Plus free shipping" — confirm the CTA landing page surfaces that offer, or the copy/destination mismatch will suppress conversion.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP links (click-tracking + images) | Confirm Attentive is configured to use `https://` for the redirect domain; re-check image CDN URLs |
| High | CAN-SPAM footer not in scope | Audit full HTML for unsubscribe link and physical address |
| High | UTM attribution unverifiable | Click through test send; verify GA4/analytics receives `utm_source`, `utm_medium`, `utm_campaign` |
| Medium | `alt` attributes on images | Confirm all `<img>` tags carry descriptive `alt` text |
| Medium | Authentication headers | Pull raw headers from a test send; verify DKIM, SPF, DMARC alignment |
| Low | Global `text-decoration:none` on links | Scope the rule to specific selectors rather than `#MessageViewBody a` |
| Low | Mixed invisible preheader characters | Standardize on one invisible-character technique |
| Low | Empty `<title>` | Set a meaningful title (e.g., `"Your cart – Skechers"`) |
## Recent history

- [[2026-04-30-in-case-you-missed-it-april-s-best-styles-are-bogo-50-off]] — 5/10 (2026-04-30)
- [[2026-04-30-bogo-50-off-shoes-starts-now]] — 4/10 (2026-04-30)
- [[2026-04-30-icymi-big-styles-this-month]] — 3/10 (2026-04-30)

