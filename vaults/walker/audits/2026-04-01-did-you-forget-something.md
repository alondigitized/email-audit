---
slug: 2026-04-01-did-you-forget-something
type: email
date: 2026-04-01
persona: walker
score: "5/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-5, sender/skechers]
---
# Did you forget something?
**Score:** 5/10 · **Type:** Email audit · **2026-04-01**
## Executive summary

- A functional but underwhelming abandoned cart email. The core message lands — you left something in your cart — and the CTA is clear. But the email does too much: a promo offer undercuts the urgency of the hero, the product recommendation grid is visually tiny, and the bottom half turns into a utility dump that buries the conversion moment.
- Competent mechanics, missed revenue potential. The abandoned cart trigger is one of the highest-ROI emails in ecommerce. This execution doesn't capitalize on it.

## What's working

- **Hero headline is sharp.** "We Noticed You Noticing Us... Your Cart Is Still Waiting." — clever tone, immediately communicates purpose without being pushy.
- **Abandoned product is featured prominently** with image, name (Maximus Warrior), and a direct "Complete Your Order" CTA button. The product is the main event.
- **"Buy One, Get One 50% Off" promo** adds a conversion incentive — good call to include an offer in a cart recovery context.
- **"Shop All Best Sellers" button** provides an escape valve for browsers who aren't sold on their original pick.

## What's weak

- **The promo dilutes urgency.** Putting a broad BOGO offer right below the specific product recovery CTA splits the reader's attention. The implicit message becomes "maybe skip your cart item and just shop the sale instead."
- **Recommended products are too small.** The "Here's Some Great Options We Think You'll Love" grid renders at tiny scale — product images, names, and prices are barely legible. This module fails its job.
- **Bottom half is a cluttered utility stack.** Shop Additional Styles (Women, Men, Kids, Clothing, New Arrivals, Sale), app download, curbside pickup, buy now/pay later, find a store, and social follow icons all pile up below the fold. None of it is personalized or conversion-focused.
- **No price or urgency signal on the hero product.** The abandoned item doesn't show the price or any low-stock/time-limited signal. That's a missed lever.
- **Social follow icons at the bottom** are misplaced for a transactional recovery email — this isn't the moment to ask for a follow.

## Recommendations

- 1. **Remove or reposition the BOGO.** If you keep it, make it specific to the abandoned item ("Add a second pair, get 50% off"). If it's a sitewide promotion, move it below the fold so it doesn't compete with the primary CTA.
- 2. **Show the price on the hero product.** Include the price point next to the product name — price is often why people abandon, and surfacing it validates or resets expectations.
- 3. **Make the recommendation grid actually usable.** Larger images, readable product names, visible prices. Limit to 3 products max.
- 4. **Gut the bottom utility stack.** Cut it to: one secondary CTA (shop bestsellers or browse sale), app download (optional), and store finder. Remove social icons entirely.
- 5. **Add a soft urgency signal.** "Items in your cart can sell out" or a low-stock badge on the hero product would sharpen motivation without being aggressive.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP click-tracking URLs | Confirm Attentive account is configured to use HTTPS redirects; contact Attentive support if `https://` is not being used |
- | High | Unsubscribe/address footer | Verify full source contains CAN-SPAM-compliant footer with functional unsubscribe and physical address |
- | Medium | UTM parameters | Audit Attentive campaign settings to confirm `utm_source=email&utm_medium=attentive&utm_campaign=abandoned_cart` (or equivalent) is appended to all destination URLs |
- | Medium | Soft hyphen in preheader padding | Replace `­` (U+00AD) characters with `͏` (U+034F) for consistent cross-client preheader suppression |
- | Medium | Product image `alt` text | Verify all `<img>` tags in the product section carry descriptive `alt` attributes |
- | Low | Empty `<title>` tag | Set `<title>Skechers — Did you forget something?</title>` for the web version browser tab |
- | Low | Layout table `role` | Add `role="presentation"` to all structural `<table>` elements |

## Full review
## Did You Forget Something? — Skechers Abandoned Cart Email

---

### 1. Executive Summary

A functional but underwhelming abandoned cart email. The core message lands — you left something in your cart — and the CTA is clear. But the email does too much: a promo offer undercuts the urgency of the hero, the product recommendation grid is visually tiny, and the bottom half turns into a utility dump that buries the conversion moment.

---

### 2. Business Impact Score: **5/10**

Competent mechanics, missed revenue potential. The abandoned cart trigger is one of the highest-ROI emails in ecommerce. This execution doesn't capitalize on it.

---

### 3. What's Working

- **Hero headline is sharp.** "We Noticed You Noticing Us... Your Cart Is Still Waiting." — clever tone, immediately communicates purpose without being pushy.
- **Abandoned product is featured prominently** with image, name (Maximus Warrior), and a direct "Complete Your Order" CTA button. The product is the main event.
- **"Buy One, Get One 50% Off" promo** adds a conversion incentive — good call to include an offer in a cart recovery context.
- **"Shop All Best Sellers" button** provides an escape valve for browsers who aren't sold on their original pick.

---

### 4. What's Weak

- **The promo dilutes urgency.** Putting a broad BOGO offer right below the specific product recovery CTA splits the reader's attention. The implicit message becomes "maybe skip your cart item and just shop the sale instead."
- **Recommended products are too small.** The "Here's Some Great Options We Think You'll Love" grid renders at tiny scale — product images, names, and prices are barely legible. This module fails its job.
- **Bottom half is a cluttered utility stack.** Shop Additional Styles (Women, Men, Kids, Clothing, New Arrivals, Sale), app download, curbside pickup, buy now/pay later, find a store, and social follow icons all pile up below the fold. None of it is personalized or conversion-focused.
- **No price or urgency signal on the hero product.** The abandoned item doesn't show the price or any low-stock/time-limited signal. That's a missed lever.
- **Social follow icons at the bottom** are misplaced for a transactional recovery email — this isn't the moment to ask for a follow.

---

### 5. Recommendations

1. **Remove or reposition the BOGO.** If you keep it, make it specific to the abandoned item ("Add a second pair, get 50% off"). If it's a sitewide promotion, move it below the fold so it doesn't compete with the primary CTA.
2. **Show the price on the hero product.** Include the price point next to the product name — price is often why people abandon, and surfacing it validates or resets expectations.
3. **Make the recommendation grid actually usable.** Larger images, readable product names, visible prices. Limit to 3 products max.
4. **Gut the bottom utility stack.** Cut it to: one secondary CTA (shop bestsellers or browse sale), app download (optional), and store finder. Remove social icons entirely.
5. **Add a soft urgency signal.** "Items in your cart can sell out" or a low-stock badge on the hero product would sharpen motivation without being aggressive.

---

### 6. Bottom Line

The email knows what it's supposed to do but doesn't commit to doing it well. The hero recovery moment is real — the rest of the email works against it. Simplify ruthlessly: one product, one price, one offer, one CTA. Everything else is noise.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Abandoned cart recovery — single product left in cart |
| **Hero / primary value prop** | Maximus Warrior shoe with "Complete Your Order" CTA; clear but no price shown |
| **Membership / benefits** | None visible |
| **Product recommendations** | 4-product grid below hero — images too small to read effectively |
| **BOGO promo module** | "Buy One, Get One 50% Off" — standalone banner mid-email |
| **Utility / secondary modules** | Category nav (Women/Men/Kids/Clothing/New Arrivals/Sale), app download (App Store + Google Play), curbside pickup, BNPL (Afterpay/Klarna), find a store |
| **Social** | Facebook, Instagram, Pinterest icons at footer |
| **Visual bugs** | None visible — images render cleanly, text is legible at normal reading scale |

---

## Technical Audit

## Technical Audit — Skechers "Did you forget something?" (Abandoned Cart)
**From:** hello@msgs.skechers.com | **ESP:** Attentive (attentivemail.com)

---

### 1. Technical Summary
Table-based HTML email with responsive CSS media queries, delivered via Attentive's click-tracking infrastructure. The truncated source reveals several infrastructure-level issues, primarily around link protocol and preheader implementation.

---

### 2. Link & Tracking Issues

**HTTP redirect URLs (not HTTPS)**
All Attentive click-tracking links use `http://` instead of `https://`:
```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor...
```
This applies to both the web version link and the logo/CTA links. Unencrypted redirect hops expose click data in transit and can trigger spam filter penalties. The image source URL (`http://image.emails…`) also appears to be HTTP.

**No visible UTM parameters in destination URLs**
The Attentive `upn=` tokens are session/subscriber tracking, not UTM attribution. Whether UTM params are appended post-redirect cannot be confirmed from the encoded URLs, but none are visible in the decoded link structure. If the redirect destinations lack `utm_source`, `utm_medium`, and `utm_campaign`, GA4/analytics attribution will be lost.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**
```html
<title></title>
```
When the email is opened in a browser via the web version link, the tab will be untitled. Minor, but solvable.

**Mixed preheader padding characters**
The preheader spacer block uses two different invisible character types concatenated:
- `͏` — U+034F COMBINING GRAPHEME JOINER (standard technique)
- `­` — U+00AD SOFT HYPHEN (less common, can render as a visible hyphen in some clients/screen readers)

The soft hyphens should be replaced with additional CGJ (U+034F) or zero-width non-breaking space (U+FEFF) characters for consistency.

**Image `alt` text**
The `<img>` tag is truncated in the provided source. Cannot confirm whether `alt` attributes are present. Abandoned cart emails typically contain product images — missing `alt` text would block screen reader users and fail rendering in image-off environments.

**No `role` or `aria` attributes on layout tables**
Tables used for layout lack `role="presentation"` attributes, which can cause screen readers to announce spurious table structure. Not uncommon in ESP-generated HTML but worth flagging.

---

### 4. Personalization & Merge Tokens

No merge tokens are visible in the provided HTML. For an abandoned cart trigger, expected tokens include:
- Customer first name (e.g., `{{first_name}}`)
- Cart product name/image/price (e.g., `{{cart.items[0].name}}`)

The preheader copy is generic: *"You left something in your cart, get it before it's gone!"* — no personalization. If Attentive's token syntax is present deeper in the truncated body, this is not a code issue. If absent, it represents a missed personalization opportunity that is a technical gap in the template configuration.

**No unrendered/broken tokens** visible in the provided source.

---

### 5. Compliance

**Unsubscribe link**
Not visible in the provided HTML (source is truncated). CAN-SPAM and CASL require a functional unsubscribe mechanism in every commercial email. Must confirm it exists in the footer of the full source. Attentive typically injects this automatically, but template-level suppression is possible.

**Physical mailing address**
Not visible in provided source (likely in footer). Required by CAN-SPAM §5(a)(5).

**Sending domain**
`msgs.skechers.com` is a dedicated sending subdomain, which is correct practice for isolating transactional/marketing mail reputation. SPF, DKIM, and DMARC alignment cannot be verified from HTML alone — requires header inspection of a live received message.

**`From` display name**
`SKECHERS <hello@msgs.skechers.com>` — display name matches brand, sending domain is a subdomain of `skechers.com`. No spoofing indicators.

---

### 6. Email-to-Site Continuity

Cannot fully evaluate without the decoded destination URLs from the Attentive redirect chain. Key risks:
- If destination URLs lack UTM parameters, all click traffic will appear as direct in analytics rather than `email / abandoned_cart`
- The web version link resolves through the same Attentive redirect infrastructure — if that link is used, the browsed version should still carry attribution to the cart recovery page

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP click-tracking URLs | Confirm Attentive account is configured to use HTTPS redirects; contact Attentive support if `https://` is not being used |
| High | Unsubscribe/address footer | Verify full source contains CAN-SPAM-compliant footer with functional unsubscribe and physical address |
| Medium | UTM parameters | Audit Attentive campaign settings to confirm `utm_source=email&utm_medium=attentive&utm_campaign=abandoned_cart` (or equivalent) is appended to all destination URLs |
| Medium | Soft hyphen in preheader padding | Replace `­` (U+00AD) characters with `͏` (U+034F) for consistent cross-client preheader suppression |
| Medium | Product image `alt` text | Verify all `<img>` tags in the product section carry descriptive `alt` attributes |
| Low | Empty `<title>` tag | Set `<title>Skechers — Did you forget something?</title>` for the web version browser tab |
| Low | Layout table `role` | Add `role="presentation"` to all structural `<table>` elements |
## Recent history

- [[2026-04-11-spain-fifa-world-cup-26-away-jersey]] — 5/10 (2026-04-01)
- [[2026-03-31-test-mkg-us-na-u-new-wide-en-04022026your-favorites-fit-for-your-feet]] — 5/10 (2026-03-31)
- [[2026-04-01-test-mkg-us-retpur-u-trend-retail-en-04012026-byour-next-spring-favorites-are-wa]] — 5/10 (2026-03-31)

