---
slug: 2026-04-27-your-cart-expires-soon
type: email
date: 2026-04-27
persona: walker
score: "6/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-6, sender/skechers]
---
# Your cart expires soon!
**Score:** 6/10 · **Type:** Email audit · **2026-04-27**
## Executive summary

- Well, this one got my attention right away because it's about *my* cart — something I apparently left sitting there. The big shoe up top is a Slip-ins Arch Fit Glide-Step Pro, and yeah, I probably did put that in my cart. That hero shot is solid. But then I scroll down and start seeing Women's Slip-ins thumbnails stacked below it, and I'm thinking — wait, did Skechers mix up my account with someone else's? There's also a 20% off banner tucked in the middle that I nearly missed, and the fine print at the bottom mentions a Mother's Day Sale. I'm a 62-year-old guy — Mother's Day sales don't exactly light me up. The bones of this email work (cart reminder + a real discount), but the execution leaves me feeling like I'm browsing a general catalog rather than looking at what *I* left behind.
- The cart abandonment hook is there and the Slip-ins hero is right for me, but Women's product clutter and a buried discount undercut what should be a clean conversion play.

## What's working

- **The hero product is my kind of shoe.** Arch Fit Glide-Step Pro, Slip-ins — that's exactly what I browse. Seeing it front and center with a clear "COMPLETE YOUR ORDER" button is about as simple as it gets, and simple is what I need on a phone screen.
- **"YOU LIKED THESE / AND YOU WEREN'T WRONG."** That headline is a little cheeky but I kind of like it. It doesn't talk down to me.
- **The CTA button is large and blue and obvious.** I don't have to squint or hunt for it. One tap and I'm presumably right at checkout.
- **20% off is a real incentive.** If I see that before I bail, that's probably what closes the deal for a price-conscious guy like me.
- **Simple text navigation list** (Women, Men, Kids, etc.) is easy to read and tap. No tiny icons I can't see.

## What's weak

- **Women's product thumbnails right below my cart item.** I count at least three "Women's Slip-ins" items in that product row. If this is supposed to be my personalized cart reminder, why am I looking at women's shoes? That breaks the "we know you" feeling immediately.
- **The 20% off is easy to scroll past.** It's in the middle of the email in a dark banner, but I've already seen my product and the CTA — there's a real chance I either click immediately (missing the discount) or lose the thread by the time I get there. That discount should be higher up, tied to my specific cart item.
- **Mother's Day Sale fine print.** That's down in the footer in tiny text. As a male customer, that framing isn't relevant to me and adds confusion — is this a gendered sale? Does the 20% apply to men's shoes? I shouldn't have to wonder.
- **"SHOP ALL BEST SELLERS" and category navigation dilute the focus.** This is a cart recovery email. I don't need a catalog. Get me to checkout, not browsing.
- **"LET'S GET TEXTING" module.** Fine, but mid-abandonment-email is an odd place for a text signup pitch. Feels like they crammed in every module they had.

## Recommendations

- 1. Move the 20% off offer *above* the CTA or embed it directly in the CTA button copy ("COMPLETE YOUR ORDER — SAVE 20%"). Don't make me scroll past my purchase to find the discount.
- 2. Strip out the Women's product thumbnails or replace them with men's/neutral Slip-ins styles. I'm a known male customer — show me men's shoes.
- 3. Drop the Mother's Day framing for male recipients. Either suppress that footer copy or use a gender-neutral urgency message ("Limited-time: 20% off your next pair").
- 4. Cut the catalog navigation modules. This is a one-job email: get me back to my cart. The "Shop Additional Styles" section, text signup, and app download can live in a separate marketing send.
- 5. Consider adding the product name and price explicitly under the hero shoe. At 62, I want confirmation I'm looking at the right item before I tap.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP tracking domain | Enable HTTPS for `skechers.attentivemail.com` custom domain in Attentive; update template to `https://` |
- | High | UTM attribution gap | Verify Attentive UTM passthrough is configured for this journey; validate via test click + GA4/analytics |
- | High | Cart session token validity | Confirm CTA deep-link includes a restorable cart token and its TTL matches the stated expiry |
- | Medium | Empty `<title>` tag | Set to descriptive value matching subject line |
- | Medium | Image `alt` attributes | Audit full source; ensure all `<img>` tags have meaningful `alt` text |
- | Low | Preheader padding characters | Replace U+034F/U+00AD padding with a `<div>` spacer to reduce spam-filter exposure |
- | Verify | CAN-SPAM footer | Confirm physical address and unsubscribe link present in full source |
- | Verify | SPF/DKIM/DMARC | Run DNS checks on `msgs.skechers.com`; review raw headers from delivered copy |

## Full review
---

## 1. Executive Summary

Well, this one got my attention right away because it's about *my* cart — something I apparently left sitting there. The big shoe up top is a Slip-ins Arch Fit Glide-Step Pro, and yeah, I probably did put that in my cart. That hero shot is solid. But then I scroll down and start seeing Women's Slip-ins thumbnails stacked below it, and I'm thinking — wait, did Skechers mix up my account with someone else's? There's also a 20% off banner tucked in the middle that I nearly missed, and the fine print at the bottom mentions a Mother's Day Sale. I'm a 62-year-old guy — Mother's Day sales don't exactly light me up. The bones of this email work (cart reminder + a real discount), but the execution leaves me feeling like I'm browsing a general catalog rather than looking at what *I* left behind.

---

## 2. Business Impact Score: 6/10

The cart abandonment hook is there and the Slip-ins hero is right for me, but Women's product clutter and a buried discount undercut what should be a clean conversion play.

---

## 3. What's Working

- **The hero product is my kind of shoe.** Arch Fit Glide-Step Pro, Slip-ins — that's exactly what I browse. Seeing it front and center with a clear "COMPLETE YOUR ORDER" button is about as simple as it gets, and simple is what I need on a phone screen.
- **"YOU LIKED THESE / AND YOU WEREN'T WRONG."** That headline is a little cheeky but I kind of like it. It doesn't talk down to me.
- **The CTA button is large and blue and obvious.** I don't have to squint or hunt for it. One tap and I'm presumably right at checkout.
- **20% off is a real incentive.** If I see that before I bail, that's probably what closes the deal for a price-conscious guy like me.
- **Simple text navigation list** (Women, Men, Kids, etc.) is easy to read and tap. No tiny icons I can't see.

---

## 4. What's Weak

- **Women's product thumbnails right below my cart item.** I count at least three "Women's Slip-ins" items in that product row. If this is supposed to be my personalized cart reminder, why am I looking at women's shoes? That breaks the "we know you" feeling immediately.
- **The 20% off is easy to scroll past.** It's in the middle of the email in a dark banner, but I've already seen my product and the CTA — there's a real chance I either click immediately (missing the discount) or lose the thread by the time I get there. That discount should be higher up, tied to my specific cart item.
- **Mother's Day Sale fine print.** That's down in the footer in tiny text. As a male customer, that framing isn't relevant to me and adds confusion — is this a gendered sale? Does the 20% apply to men's shoes? I shouldn't have to wonder.
- **"SHOP ALL BEST SELLERS" and category navigation dilute the focus.** This is a cart recovery email. I don't need a catalog. Get me to checkout, not browsing.
- **"LET'S GET TEXTING" module.** Fine, but mid-abandonment-email is an odd place for a text signup pitch. Feels like they crammed in every module they had.

---

## 5. Recommendations

1. Move the 20% off offer *above* the CTA or embed it directly in the CTA button copy ("COMPLETE YOUR ORDER — SAVE 20%"). Don't make me scroll past my purchase to find the discount.
2. Strip out the Women's product thumbnails or replace them with men's/neutral Slip-ins styles. I'm a known male customer — show me men's shoes.
3. Drop the Mother's Day framing for male recipients. Either suppress that footer copy or use a gender-neutral urgency message ("Limited-time: 20% off your next pair").
4. Cut the catalog navigation modules. This is a one-job email: get me back to my cart. The "Shop Additional Styles" section, text signup, and app download can live in a separate marketing send.
5. Consider adding the product name and price explicitly under the hero shoe. At 62, I want confirmation I'm looking at the right item before I tap.

---

## 6. Bottom Line

I'd probably click "COMPLETE YOUR ORDER" if I remembered putting the Glide-Step Pro in my cart — the hero and CTA are clear enough. But the Women's product clutter and the buried 20% off mean Skechers is leaving money on the table. Tighten this up to one message — "you left this, here's a deal, tap here" — and it's a much stronger cart recovery.

---

## 7. Subject Line Analysis

- **Subject:** `Your cart expires soon!`
- **Length:** 23 characters
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `5`, Urgency `7`, Specificity `4`
- **Strengths:**
  - Short, reads cleanly on a phone lock screen
  - The urgency framing ("expires") is a real nudge without being aggressive
- **Weaknesses:**
  - No product name or hint of what's in the cart — I can't remember what I left in there from the subject alone
  - Feels templated and impersonal — could be from any retailer
- **Alt A:** `Your Slip-ins are waiting — expires soon`
- **Alt B:** `Walker, your Arch Fit cart expires today`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)`
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (None visible — nothing to credit)
- **Weaknesses:**
  - A blank or technical preheader wastes the second line of inbox real estate entirely
  - Combined with a generic subject, there's nothing pulling me in before the open
- **Alt A:** `Your Arch Fit Glide-Step Pro is still waiting — grab 20% off today`
- **Alt B:** `Don't lose your Slip-ins — 20% off if you complete your order now`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** I recognize the Skechers sender name and "cart expires" is plain enough that I'd probably open it out of mild curiosity about what I left behind — but without a product name in the subject or a useful preheader, there's nothing pulling me in hard. I open it more out of inbox habit than excitement.

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** The hero shoe is the right product for me and the CTA button is large and obvious, so if I open this on my phone I'll probably tap through — but the Women's product clutter mid-scroll creates a moment of "wait, is this right?" that could cause me to bail instead of completing the order. The buried 20% off also means I'm probably not aware of the deal when I hit that button.

---

## 11. Evidence

- **Overall purpose:** Cart abandonment recovery — reminding me I left a product behind and pushing me to complete purchase, with a 20% discount as an incentive.
- **Hero / primary value proposition:** Skechers Slip-ins: Arch Fit Glide-Step Pro, shown in a large product image with a bold "YOU LIKED THESE / AND YOU WEREN'T WRONG." headline and a blue "COMPLETE YOUR ORDER" CTA button directly below.
- **Membership / benefits section:** None visible. No mention of Skechers Plus membership, points, or member-exclusive pricing — a miss for a loyalty member like me.
- **Product discoverability / recommendation modules:** A multi-item product thumbnail row appears below the hero, labeled with Women's Slip-ins styles. There is also a "SHOP ALL BEST SELLERS" text banner and a full category navigation list (Women, Men, Kids, Clothing, New Arrivals, Sale).
- **Utility / secondary modules:** 20% off banner (mid-email), "LET'S GET TEXTING" SMS signup, app download badges, Curbside Pickup callout, Shop Now Pay Later (AfterPay, Klarna), Find a Store link, and social follow icons.
- **Bugs / friction / clarity issues:** No visible broken images or overlapping text. The Mother's Day Sale fine print in the footer is small and requires close reading — borderline unreadable on a phone without zooming. The 20% off banner does not specify whether it applies to the cart item or requires a separate purchase, which creates friction.

---

## Technical Audit

## Technical Audit — Skechers "Cart Expires Soon" (hello@msgs.skechers.com)

---

### 1. Technical Summary

Cart-abandonment email deployed via Attentive ESP (`msgs.skechers.com` sending domain, `skechers.attentivemail.com` click-tracking domain). HTML source is truncated, so footer compliance elements (physical address, unsubscribe link) and product personalization tokens cannot be fully verified — findings are limited to what is visible.

---

### 2. Link & Tracking Issues

**HTTP redirect domain — medium severity**

All click-tracking URLs use `http://` (not `https://`) as the scheme for the Attentive redirect hop:

```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorXOZu5...
```

This means the initial redirect leg is unencrypted. Modern email clients and security gateways flag mixed-content links; browsers will show a security indicator before the final HTTPS destination is reached. Attentive supports HTTPS for custom tracking domains — confirm the CNAME for `skechers.attentivemail.com` has SSL provisioned and force `https://` in the template base URL setting.

**No UTM parameters visible in tracking URLs**

The `upn=` encoded payload in the Attentive redirect links does not show decoded UTM parameters in the visible source. If Attentive is not appending `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` to destination URLs on click, site analytics will attribute this session to direct traffic, breaking cart-recovery attribution. Verify in Attentive's link manager that UTM passthrough is configured for this journey.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**

```html
<title></title>
```

Several email clients (notably Outlook Web Access and some Android clients) surface the `<title>` value as a tab/window label or in notification previews. An empty title is a rendering gap — should be set to the email subject or a descriptive fallback (e.g., `"Your Skechers cart is expiring"`).

**Image `alt` text — unverifiable from truncated source**

The `<div class="image_block">` elements are present but the truncation cuts before `<img>` tags with `alt` attributes are visible. If product images and the logo render without `alt` text, screen readers and image-blocked clients (Gmail image caching, Outlook with images off) will produce blank or broken experiences. Requires full-source verification.

**Preheader padding technique**

The preheader uses a mix of Hangul Filler (`͏`, U+034F) and soft-hyphen (`­`, U+00AD) characters to pad to inbox preview length. This is a known technique and is not a bug, but some aggressive spam filters score against dense invisible-character blocks. Consider replacing with a single `<div>` spacer of fixed width as a more neutral alternative.

**CSS `@media` breakpoint at 620px**

The responsive breakpoint targets `max-width: 620px`. The fixed inner table width is `600px`. This is correct and standard; no issue.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g., `{{first_name}}`, `%%EMAIL%%`, or Attentive `@{...}` syntax) are visible in the truncated source, which is expected for a rendered preview/QA copy. Cannot confirm from this source whether:

- Recipient first name is injected into the subject line or body
- Abandoned cart item names, images, prices, and URLs are dynamically populated per session

These must be verified against a live send or a test render with a seeded cart session. If product blocks are static/hardcoded rather than dynamically pulled from the cart payload, abandoned-product continuity to the cart page will break.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot verify from truncated source:**
- Physical mailing address (required by CAN-SPAM §5(a)(5))
- Unsubscribe link and one-click honor mechanism (CAN-SPAM §5(a)(3); GDPR/CCPA for applicable recipients)
- List-Unsubscribe header presence

These elements are almost certainly in the footer, which is cut off. Full-source verification required before sign-off.

**Sending domain**

`hello@msgs.skechers.com` — `msgs.skechers.com` is a standard ESP subdomain configuration. SPF, DKIM, and DMARC alignment for this subdomain should be confirmed via:

```
dig TXT msgs.skechers.com          # SPF
dig TXT _dmarc.skechers.com        # DMARC policy
```

No authentication headers were provided with this audit request — confirm with a raw `.eml` header dump from a delivered message.

---

### 6. Email-to-Site Continuity

**Attentive redirect chain — HTTP first hop (see §2)**

If the tracking redirect lands on an HTTPS Skechers cart URL, the referrer header will be stripped at the HTTP→HTTPS boundary. This further degrades analytics attribution beyond the UTM gap noted above.

**Cart session continuity**

Cart-abandonment emails must deep-link to the specific cart (typically via a session token or cart ID in the URL). This cannot be verified from the HTML alone — confirm that the `upn=` decoded destination URL for the primary CTA includes a cart restoration parameter (e.g., `?cartToken=`, `?checkoutId=`) and that the token is still valid at time of click (expiry window must match the "your cart expires soon" claim in subject/body).

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP tracking domain | Enable HTTPS for `skechers.attentivemail.com` custom domain in Attentive; update template to `https://` |
| High | UTM attribution gap | Verify Attentive UTM passthrough is configured for this journey; validate via test click + GA4/analytics |
| High | Cart session token validity | Confirm CTA deep-link includes a restorable cart token and its TTL matches the stated expiry |
| Medium | Empty `<title>` tag | Set to descriptive value matching subject line |
| Medium | Image `alt` attributes | Audit full source; ensure all `<img>` tags have meaningful `alt` text |
| Low | Preheader padding characters | Replace U+034F/U+00AD padding with a `<div>` spacer to reduce spam-filter exposure |
| Verify | CAN-SPAM footer | Confirm physical address and unsubscribe link present in full source |
| Verify | SPF/DKIM/DMARC | Run DNS checks on `msgs.skechers.com`; review raw headers from delivered copy |
## Recent history

- [[2026-04-27-did-you-forget-something]] — 5/10 (2026-04-27)
- [[2026-04-27-whoa-this-deal-starts-now]] — 3/10 (2026-04-27)
- [[2026-04-27-top-mother-s-day-gifts]] — 3/10 (2026-04-27)

