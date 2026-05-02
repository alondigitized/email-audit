---
slug: 2026-05-02-your-cart-expires-soon
type: email
date: 2026-05-02
persona: walker
score: "5/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-5, sender/skechers]
---
# Your cart expires soon!
**Score:** 5/10 · **Type:** Email audit · **2026-05-02**
## Executive summary

- Alright, so Skechers sent me a cart abandonment email — "Your cart expires soon!" — and when I open it, I see the Glide-Step Altus Slip-ins front and center with a "Complete Your Order" button. That part? Good. That's exactly what I needed to see. But then the email just keeps going — Women's section, Kids, Clothing, New Arrivals, Sale — and I'm thinking, wait, who is this email for? I came back because *I* left something in my cart, not because I need a shopping catalog. The headline "YOU LIKED THESE AND YOU WEREN'T WRONG" is a nice little ego stroke, I'll give them that. But the clutter underneath dilutes the urgency fast.
- The cart recovery hook works at the top. The overloaded navigation sections below kill the momentum and bury the conversion. A man my age doesn't scroll through a catalog — I click the button I came for or I leave.

## What's working

- **The hero shoe.** Skechers Slip-ins: Glide-Step Altus is front and center, and it's a good-looking shoe — light, athletic, Slip-ins. Right up my alley.
- **"Complete Your Order" CTA.** Big, blue, hard to miss. Exactly the one button I need.
- **The headline.** "You liked these and you weren't wrong" is friendly and confident without being pushy. I don't mind a little validation.
- **20% off a single pair.** That caught my eye in the lower half — good deal, and it could nudge me to go back if I was on the fence about price.

## What's weak

- **The catalog dump.** After the hero, there's a wall of product thumbnails — several rows of shoes, most of which look like they're Men's but are small and hard to read on a phone screen. I can barely read the names.
- **The navigation section.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE — this is a website menu, not a cart recovery email. It's noise. I already know I want what I put in my cart; don't make me browse all over again.
- **The 20% off offer is buried.** If there's a discount that could help me complete my order, lead with it — don't hide it four scrolls down. That's backwards.
- **Product thumbnails are tiny.** I'm on my phone. The row of smaller shoe images in the middle section — I can't make out what they are without zooming. That's frustrating.
- **Mother's Day Sale callout.** The fine print at the bottom mentions a Mother's Day Sale. I'm a 62-year-old guy in a cart abandonment flow. This feels bolted on and totally irrelevant to why I opened this email.

## Recommendations

- **Lead with the discount.** If 20% off applies to what's in my cart, say so above the fold — "Still thinking? Take 20% off your Glide-Steps today." That's a conversion email.
- **Cut the catalog.** Remove WOMEN / KIDS / CLOTHING / NEW ARRIVALS navigation entirely from this flow. Keep it to: my cart item, the CTA, the discount, and one supporting line about why Slip-ins are worth it (comfort, no-tie, easy on/off).
- **Bigger product image, bigger text.** The hero shoe looks great but on a phone the thumbnails below it are squint-worthy.
- **Move the urgency up.** The subject says "Your cart expires soon!" but the email body doesn't echo that urgency at all above the fold. Put a timer or a "expires in 24 hours" line near the CTA.
- **Drop the Mother's Day fine print.** It has nothing to do with me or my cart. If it's a sitewide sale, acknowledge it cleanly — don't make me feel like I'm caught in someone else's email.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | High | HTTP tracking links | Configure Attentive click-tracking domain to enforce HTTPS; verify SSL cert on `skechers.attentivemail.com` |
- | High | Malformed charset meta | Change to `<meta charset="utf-8">` or add `http-equiv="Content-Type"` |
- | Medium | UTM parameters | Decode a sample tracked URL and confirm UTM params survive the Attentive redirect |
- | Medium | Image alt text | Audit full source — all `<img>` tags must have descriptive `alt=""` at minimum for accessibility and image-off rendering |
- | Low | Empty `<title>` | Populate with email subject or brand name |
- | Low | Preheader soft hyphens | Test on Android Mail 6.x; consider using only `U+034F` if soft hyphens render visibly |
- | Verify | Footer / CAN-SPAM | Confirm physical address and unsubscribe link exist in full source |
- | Verify | SPF/DKIM/DMARC | Check DNS records for `msgs.skechers.com` alignment |

## Full review
## 1. Executive Summary

Alright, so Skechers sent me a cart abandonment email — "Your cart expires soon!" — and when I open it, I see the Glide-Step Altus Slip-ins front and center with a "Complete Your Order" button. That part? Good. That's exactly what I needed to see. But then the email just keeps going — Women's section, Kids, Clothing, New Arrivals, Sale — and I'm thinking, wait, who is this email for? I came back because *I* left something in my cart, not because I need a shopping catalog. The headline "YOU LIKED THESE AND YOU WEREN'T WRONG" is a nice little ego stroke, I'll give them that. But the clutter underneath dilutes the urgency fast.

---

## 2. Business Impact Score: 5/10

The cart recovery hook works at the top. The overloaded navigation sections below kill the momentum and bury the conversion. A man my age doesn't scroll through a catalog — I click the button I came for or I leave.

---

## 3. What's Working

- **The hero shoe.** Skechers Slip-ins: Glide-Step Altus is front and center, and it's a good-looking shoe — light, athletic, Slip-ins. Right up my alley.
- **"Complete Your Order" CTA.** Big, blue, hard to miss. Exactly the one button I need.
- **The headline.** "You liked these and you weren't wrong" is friendly and confident without being pushy. I don't mind a little validation.
- **20% off a single pair.** That caught my eye in the lower half — good deal, and it could nudge me to go back if I was on the fence about price.

---

## 4. What's Weak

- **The catalog dump.** After the hero, there's a wall of product thumbnails — several rows of shoes, most of which look like they're Men's but are small and hard to read on a phone screen. I can barely read the names.
- **The navigation section.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE — this is a website menu, not a cart recovery email. It's noise. I already know I want what I put in my cart; don't make me browse all over again.
- **The 20% off offer is buried.** If there's a discount that could help me complete my order, lead with it — don't hide it four scrolls down. That's backwards.
- **Product thumbnails are tiny.** I'm on my phone. The row of smaller shoe images in the middle section — I can't make out what they are without zooming. That's frustrating.
- **Mother's Day Sale callout.** The fine print at the bottom mentions a Mother's Day Sale. I'm a 62-year-old guy in a cart abandonment flow. This feels bolted on and totally irrelevant to why I opened this email.

---

## 5. Recommendations

- **Lead with the discount.** If 20% off applies to what's in my cart, say so above the fold — "Still thinking? Take 20% off your Glide-Steps today." That's a conversion email.
- **Cut the catalog.** Remove WOMEN / KIDS / CLOTHING / NEW ARRIVALS navigation entirely from this flow. Keep it to: my cart item, the CTA, the discount, and one supporting line about why Slip-ins are worth it (comfort, no-tie, easy on/off).
- **Bigger product image, bigger text.** The hero shoe looks great but on a phone the thumbnails below it are squint-worthy.
- **Move the urgency up.** The subject says "Your cart expires soon!" but the email body doesn't echo that urgency at all above the fold. Put a timer or a "expires in 24 hours" line near the CTA.
- **Drop the Mother's Day fine print.** It has nothing to do with me or my cart. If it's a sitewide sale, acknowledge it cleanly — don't make me feel like I'm caught in someone else's email.

---

## 6. Bottom Line

I'd click "Complete Your Order" because I clearly already liked that shoe. But this email does everything it can to distract me after that button. The cart recovery intent is solid; the execution is a bloated catalog. Trim it down, move the discount up front, and this thing easily becomes a 7 or 8 out of 10. Right now it's a 5 — saved by the hero image and the CTA, sunk by the clutter.

---

## 7. Subject Line Analysis

- **Subject:** `Your cart expires soon!`
- **Length:** 23 characters
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `3`, Urgency `7`, Specificity `3`
- **Strengths:**
  - Short and readable — loads clean on a phone preview, no truncation
  - Urgency word ("expires") does real work
- **Weaknesses:**
  - No product name, no brand personality — could be any retailer's cart abandon template
  - Zero personalization — doesn't say what's expiring or why I should care
- **Alt A:** `Walker, your Glide-Steps are almost gone`
- **Alt B:** `Your Skechers Slip-ins are still waiting — 20% off today only`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the email does not appear to have a meaningful preheader; based on what I can see in the render, no preview text was set intentionally
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (None visible — no usable preheader present)
- **Weaknesses:**
  - Missed the best one-two punch in email — subject sets urgency, preheader should close the deal
  - Without a preheader, inbox clients pull in whatever first text appears, which is almost always junk
- **Alt A:** `Your Glide-Step Altus Slip-ins are still in your cart — grab 20% off before it's gone`
- **Alt B:** `Still thinking? Your Slip-ins are waiting. Complete your order today.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** "Your cart expires soon!" is clear enough that I know exactly what this is, and I do remember looking at those Slip-ins. But the subject doesn't mention what's expiring or why I'd care today specifically — so it's more obligatory curiosity than genuine pull. Skechers is a brand I trust, so sender familiarity bumps it up a notch.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** The "Complete Your Order" button is right there and impossible to miss, and the Glide-Step Altus looks like exactly what I want in a shoe — Slip-ins, comfort, athletic styling. I'd click. But the clutter below the hero and the buried 20% off creates a nagging feeling that I might scroll down "just to check" and then lose the thread entirely. Clean it up and this is a 8. As-is, it's a 6.

---

## 11. Evidence

- **Overall purpose:** Cart abandonment recovery — remind me I left the Glide-Step Altus Slip-ins behind and push me to complete the purchase.
- **Hero / primary value proposition:** Skechers Slip-ins: Glide-Step Altus with a prominent "Complete Your Order" CTA in blue. Clean image, clear shoe, right product.
- **Membership / benefits section:** Not visible — no Skechers Plus loyalty mention, no member pricing callout. That's a miss for a loyalty member like me.
- **Product discoverability / recommendation modules:** A row of smaller product thumbnails below the hero (mix of Men's styles, hard to read at phone size), followed by the "Shop All Best Sellers" link, then a navigation-style grid of category links (Women, Men, Kids, Clothing, New Arrivals, Sale).
- **Utility / secondary modules:** 20% off a single pair (app promotion), "Let's Get Texting" SMS opt-in, Download the App (App Store / Google Play), Curbside Pickup, Shop Now Pay Later (Afterpay + Klarna), Find a Store, Follow Us social icons.
- **Bugs / friction / clarity issues:** Product thumbnail text in the mid-section rows is too small to read on phone without zooming. The Mother's Day Sale reference in the fine print at the bottom feels mismatched with the cart recovery message — not a visual bug, but a clarity / relevance friction point.

---

## Technical Audit

## Technical Audit — Skechers "Your cart expires soon!" (hello@msgs.skechers.com)

---

### 1. Technical Summary

Email is built on Attentive's ESP infrastructure (`skechers.attentivemail.com`) with a standard table-based layout. Two confirmed technical defects: all click-tracking links use plain HTTP, and the charset meta tag is malformed.

---

### 2. Link & Tracking Issues

**HTTP tracking domain (confirmed):** Every tracked link in the source uses `http://`, not `https://`:

```
href="http://skechers.attentivemail.com/ls/click?upn=..."
```

This affects both the "web version" link (row-1) and the logo link (row-2). Modern browsers and some ESPs warn or block HTTP redirects. The final destination likely resolves to HTTPS, but the initial hop is unencrypted and will trigger browser/client security warnings on some platforms.

**UTM visibility:** The `upn=` encoded redirect URLs are opaque — destination UTM parameters cannot be verified from this source alone. If the Attentive redirect does not append UTM params to the final URL, click attribution will land on skechers.com with no campaign tagging.

---

### 3. Rendering & Accessibility

**Malformed charset meta tag:** The head contains:
```html
<meta content="text/html; charset=utf-8" />
```
This is missing the required `http-equiv="Content-Type"` attribute. Without it, most parsers ignore the directive. The correct form is:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
```
or the shorter `<meta charset="utf-8">`. Risk: character encoding fallback behavior in older Outlook or Lotus Notes clients.

**Empty `<title>` tag:** `<title></title>` is present but blank. Some clients (notably Gmail web, Samsung Mail) display the title as a tooltip or tab label. A blank title is a minor rendering gap, not a blocker.

**Preheader padding technique:** The preheader uses two different zero-width characters for inbox-preview padding — `U+034F` (COMBINING GRAPHEME JOINER, `͏`) and `U+00AD` (SOFT HYPHEN, `­`). This is a known dual-technique to defeat Apple Mail's aggressive preheader truncation, but soft hyphens are occasionally rendered as visible hyphens in edge-case clients (older Android Mail). Not a critical defect, but worth noting.

**Image alt text:** The truncated source shows `image_block` table structures for at least two images (logo in row-2, hero in row-3) but the `<img>` tags themselves are cut off — alt text cannot be confirmed or denied from this excerpt. Must verify in full source.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g., `{{first_name}}`, `%%EMAIL%%`) are visible in the provided excerpt. Cart abandonment content is generic ("You left something in your cart") with no customer name or specific cart item details in the visible preheader. Whether product-level personalization appears lower in the email cannot be assessed from this truncation.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot assess from truncated source:** The footer — which must contain a physical mailing address and one-click unsubscribe link under CAN-SPAM — is not present in the provided HTML. These must be verified in the full source.

**Sender domain:** `hello@msgs.skechers.com` — `msgs.skechers.com` is a subdomain used for ESP delivery. SPF, DKIM, and DMARC alignment must be confirmed at the DNS level; cannot be verified from HTML source alone.

---

### 6. Email-to-Site Continuity

All links redirect through `skechers.attentivemail.com`. The final destination UTM structure is not inspectable from the encoded `upn=` token. To verify continuity: decode one click URL in the Attentive dashboard and confirm `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` are present on the resolved skechers.com URL. Without this, cart-abandonment click revenue will appear as direct or organic traffic in analytics.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| High | HTTP tracking links | Configure Attentive click-tracking domain to enforce HTTPS; verify SSL cert on `skechers.attentivemail.com` |
| High | Malformed charset meta | Change to `<meta charset="utf-8">` or add `http-equiv="Content-Type"` |
| Medium | UTM parameters | Decode a sample tracked URL and confirm UTM params survive the Attentive redirect |
| Medium | Image alt text | Audit full source — all `<img>` tags must have descriptive `alt=""` at minimum for accessibility and image-off rendering |
| Low | Empty `<title>` | Populate with email subject or brand name |
| Low | Preheader soft hyphens | Test on Android Mail 6.x; consider using only `U+034F` if soft hyphens render visibly |
| Verify | Footer / CAN-SPAM | Confirm physical address and unsubscribe link exist in full source |
| Verify | SPF/DKIM/DMARC | Check DNS records for `msgs.skechers.com` alignment |
## Recent history

- [[2026-05-02-summer-essentials-just-in]] — 5/10 (2026-05-02)
- [[2026-05-02-did-you-miss-it-20-off-select-styles]] — 4/10 (2026-05-02)
- [[2026-05-02-buy-one-get-one-half-off]] — 4/10 (2026-05-02)

