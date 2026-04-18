---
slug: 2026-04-13-your-cart-expires-soon
type: email
date: 2026-04-13
persona: walker
score: "5/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-5, sender/skechers]
---
# Your cart expires soon!
**Score:** 5/10 · **Type:** Email audit · **2026-04-13**
## Executive summary

- The email does the minimum viable job on cart recovery but leaves meaningful revenue on the table through noise, weak personalization framing, and a discount offer that undercuts urgency without a clear exclusivity signal.

## What's working

- **Hero product is unambiguous.** One shoe, one name, one CTA ("COMPLETE YOUR ORDER") — no confusion about what the email is about.
- **"YOU LIKED THESE AND YOU WEREN'T WRONG"** is a confident, slightly cheeky headline. It validates the shopper's taste rather than guilting them, which is a better emotional approach for cart recovery.
- **CTA button placement** directly below the product image is correct — the action is close to the object.
- **Best sellers row** below the hero is a reasonable "if not that, maybe this" recovery mechanism.

## What's weak

- **The urgency framing is absent in the body.** The subject line says "Your cart expires soon!" but the email body has no visible countdown, deadline, or scarcity signal. The urgency created in the inbox is immediately abandoned once the email opens.
- **The 20% off banner undercuts urgency.** A discount appears mid-email with no framing — no "for you," no time limit visible, no connection to the cart item. It reads as a site-wide promo blast, not a cart-recovery incentive. If a shopper was on the fence, seeing a blanket 20% off without personalization signals they can probably get it anywhere, anytime.
- **Module overload.** After the product section: category nav, SMS opt-in, app download, curbside pickup, BNPL logos, store finder, social follow. This is a promotional newsletter structure bolted onto a cart recovery email. The cognitive load works against conversion.
- **Product recommendation row feels generic.** Four shoes in small thumbnails with no personalization signal — no "because you liked X" or "others who bought this also viewed." They feel like filler.
- **No price visible on the hero product.** A significant friction reducer in cart recovery is showing the exact price the customer was considering. It's not visible in the render.

## Recommendations

- 1. **Add a visible expiration to the body.** If the cart genuinely expires, show it: a bolded line like "Your cart expires in 24 hours" or a simple countdown graphic directly under the product image. Match the subject line's promise.
- 2. **Make the 20% off cart-specific or cut it.** Either tie it explicitly to completing this order ("Save 20% when you finish your order — today only") or remove it. A blanket discount in a cart recovery email teaches customers to abandon carts.
- 3. **Show the price.** Display the item price next to or below the product. It anchors the purchase and reduces the need to re-visit the site just to remember what was in the cart.
- 4. **Trim the utility modules.** Move the SMS, app, BNPL, curbside, and store locator modules to the post-purchase or standard newsletter flow. In a cart recovery email, they're conversion distractors. One footer utility module (BNPL/Klarna makes sense here) is plenty.
- 5. **Add social proof to the hero.** One line — star rating + number of reviews — directly under the product name would reinforce the "you weren't wrong" claim with evidence.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP click-tracking redirects | Update Attentive campaign settings to use HTTPS redirect URLs |
- | High | `text-decoration:none` on all links | Scope this reset to non-CTA elements; restore underline or sufficient color contrast on body links |
- | Medium | Empty `<title>` | Set to a descriptive value, e.g. `Your cart expires soon — Skechers` |
- | Medium | Layout tables missing `role="presentation"` | Add `role="presentation"` to all structural `<table>` elements |
- | Medium | UTM parameters | Resolve a tracked link in staging to confirm UTM tags reach the GA4/analytics layer |
- | Low | Footer compliance blocks | Pull full source to confirm physical address and one-click unsubscribe are present and functional |
- | Low | Image alt text | Pull full source to audit `alt` attributes on all `<img>` tags |

## Full review
## 2. Business Impact Score: 5 / 10

The email does the minimum viable job on cart recovery but leaves meaningful revenue on the table through noise, weak personalization framing, and a discount offer that undercuts urgency without a clear exclusivity signal.

---

## 3. What's Working

- **Hero product is unambiguous.** One shoe, one name, one CTA ("COMPLETE YOUR ORDER") — no confusion about what the email is about.
- **"YOU LIKED THESE AND YOU WEREN'T WRONG"** is a confident, slightly cheeky headline. It validates the shopper's taste rather than guilting them, which is a better emotional approach for cart recovery.
- **CTA button placement** directly below the product image is correct — the action is close to the object.
- **Best sellers row** below the hero is a reasonable "if not that, maybe this" recovery mechanism.

---

## 4. What's Weak

- **The urgency framing is absent in the body.** The subject line says "Your cart expires soon!" but the email body has no visible countdown, deadline, or scarcity signal. The urgency created in the inbox is immediately abandoned once the email opens.
- **The 20% off banner undercuts urgency.** A discount appears mid-email with no framing — no "for you," no time limit visible, no connection to the cart item. It reads as a site-wide promo blast, not a cart-recovery incentive. If a shopper was on the fence, seeing a blanket 20% off without personalization signals they can probably get it anywhere, anytime.
- **Module overload.** After the product section: category nav, SMS opt-in, app download, curbside pickup, BNPL logos, store finder, social follow. This is a promotional newsletter structure bolted onto a cart recovery email. The cognitive load works against conversion.
- **Product recommendation row feels generic.** Four shoes in small thumbnails with no personalization signal — no "because you liked X" or "others who bought this also viewed." They feel like filler.
- **No price visible on the hero product.** A significant friction reducer in cart recovery is showing the exact price the customer was considering. It's not visible in the render.

---

## 5. Recommendations

1. **Add a visible expiration to the body.** If the cart genuinely expires, show it: a bolded line like "Your cart expires in 24 hours" or a simple countdown graphic directly under the product image. Match the subject line's promise.
2. **Make the 20% off cart-specific or cut it.** Either tie it explicitly to completing this order ("Save 20% when you finish your order — today only") or remove it. A blanket discount in a cart recovery email teaches customers to abandon carts.
3. **Show the price.** Display the item price next to or below the product. It anchors the purchase and reduces the need to re-visit the site just to remember what was in the cart.
4. **Trim the utility modules.** Move the SMS, app, BNPL, curbside, and store locator modules to the post-purchase or standard newsletter flow. In a cart recovery email, they're conversion distractors. One footer utility module (BNPL/Klarna makes sense here) is plenty.
5. **Add social proof to the hero.** One line — star rating + number of reviews — directly under the product name would reinforce the "you weren't wrong" claim with evidence.

---

## 6. Bottom Line

Competent but unfocused. SKECHERS knows to show the cart item and add a CTA, but then floods the email with every module in their template library. The urgency created by the subject line is never backed up inside the email. Tighten the focus to three sections — cart item + price + CTA, discount with a deadline, and one secondary recommendation row — and this email's conversion rate would likely improve meaningfully.

---

## 7. Subject Line Analysis

- **Subject:** `Your cart expires soon!`
- **Length:** 23 characters
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `3`, Urgency `7`, Specificity `4`
- **Strengths:**
  - Short, direct, and immediately communicates stakes
  - "Expires" is a harder word than "waiting" — implies real consequence
- **Weaknesses:**
  - Zero personalization — no product name, no name, nothing unique to this shopper
  - Curiosity is near-zero; it's a familiar cart abandonment trope that many shoppers tune out
- **Alt A:** `Your [Product Name] sells out fast — grab it before it's gone`
- **Alt B:** `We saved your cart (but not for long)`

---

## 8. Evidence

- **Overall purpose:** Abandoned cart recovery — return the shopper to a specific product they left behind
- **Hero / primary value prop:** Single product hero (white/grey Skechers Slip-ins sneaker, "Max Cushioning Arch Fit 2.0 - Smooth") with a "COMPLETE YOUR ORDER" CTA — correct structure, but no price and no urgency timer
- **Membership / benefits section:** Not present
- **Product discoverability / recommendation modules:** One horizontal row of 4 smaller shoe thumbnails labeled as best sellers; "SHOP ALL BEST SELLERS" CTA; category nav tiles (Women's, Men, Kids, Clothing, New Arrivals, Sale)
- **Utility / secondary modules:** 20% OFF banner with "SHOP NOW" CTA, "LET'S GET TEXTING" SMS opt-in, Download Our App (App Store + Google Play), Curbside Pickup, Shop Now Pay Later (Afterpay/Klarna logos), Find a Store, Follow Us (social icons)
- **Bugs / friction / clarity issues:** No visible price on the hero product; the 20% discount has no visible expiry or cart-specific context; the "LET'S GET TEXTING" module text is too small to read at email width, likely rendering poorly on mobile

---

## Technical Audit

## Technical Audit — SKECHERS "Your cart expires soon!"

---

### 1. Technical Summary

Table-based HTML email built on the Attentive platform (`msgs.skechers.com` sending domain, click tracking via `skechers.attentivemail.com`). Standard responsive layout with a single media query breakpoint at 620 px. Audit is limited by HTML truncation; findings from footer/unsubscribe block and full link inventory are marked as unverifiable.

---

### 2. Link & Tracking Issues

**HTTP redirect URLs — confirmed issue**
All tracked links use `http://` (plaintext) at the redirect layer:
```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vo...
```
This applies to both the web-version link (row-1) and the logo link (row-2). Even if the final destination resolves to HTTPS, the initial hop is unencrypted and will generate mixed-content warnings in strict clients. Attentive supports HTTPS redirect URLs; this appears to be a campaign-level configuration issue.

**Redirect chain depth — unverifiable from source**
Cannot confirm whether the Attentive click redirect resolves in ≤2 hops. Deep chains (>2) increase latency and occasionally trigger spam filters.

**UTM parameters — unverifiable from source**
Destination URLs are opaque inside the `upn=` encoded parameter. Cannot confirm UTM tags (`utm_source`, `utm_medium`, `utm_campaign`) are present on final landing pages without resolving the redirect.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag — confirmed**
```html
<head><title></title>...
```
An empty title is read aloud by some screen readers as "untitled" and suppresses the subject-line fallback some clients render in preview panes.

**Global link text-decoration removal — confirmed**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This strips underlines from all links in the message body. Combined with `color:inherit`, links become visually indistinguishable from surrounding text for users relying on color-independent cues, violating WCAG 2.1 SC 1.4.1.

**Layout tables lack `role="presentation"` — confirmed**
None of the `<table>` elements in the visible source carry `role="presentation"`. Screen readers may attempt to describe these as data tables (row/column counts). Best practice for layout-only tables is explicit `role="presentation"` or `role="none"`.

**Image alt text — unverifiable from truncated source**
The `<img>` tags inside `.image_block` are cut off. Cannot confirm `alt` attributes are present and non-empty.

**Preheader spacer characters — acceptable**
The preheader uses `U+034F` (combining grapheme joiner) and `U+00AD` (soft hyphen) as filler. This is standard Attentive behavior to prevent preview text bleed-through; not a defect.

---

### 4. Personalization & Merge Tokens

**No first-name token in preheader or visible body copy — confirmed**
The preheader reads:
```
You left something in your cart, get it before it's gone!
```
No recipient name token is present in the visible content. For a triggered cart-abandonment flow, missing first-name personalization is a platform configuration gap, not a rendering defect per se, but worth flagging.

**Cart item rendering — unverifiable**
Product name, image, price, and "complete your purchase" link for the abandoned SKU(s) are not present in the truncated source. Cannot confirm dynamic cart item blocks are correctly interpolated.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Physical mailing address and unsubscribe link — unverifiable**
Both are typically in the email footer, which is beyond the truncated source. Cannot confirm CAN-SPAM §5(a)(5) physical address and §5(a)(3) opt-out mechanism are present.

**Sending domain alignment**
- Envelope `From`: `hello@msgs.skechers.com`
- The subdomain `msgs.skechers.com` is a delegated Attentive sending domain. DKIM and SPF alignment should be set on this subdomain. Cannot verify from HTML source alone; requires header inspection.

---

### 6. Email-to-Site Continuity

**UTM tagging — unverifiable**
As noted in §2, destination URLs are encoded inside Attentive's `upn=` parameter. Standard expectation for a cart-abandonment email:
- `utm_source=email`
- `utm_medium=transactional` or `triggered`
- `utm_campaign=cart_abandonment`

Without resolving the redirect, cannot confirm these are set or that they survive the Attentive → Skechers.com hop.

**Cart deep-link vs. homepage fallback — unverifiable**
Cannot confirm whether CTA links route to the user's active cart session or fall back to a generic product page or homepage if the session has expired.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP click-tracking redirects | Update Attentive campaign settings to use HTTPS redirect URLs |
| High | `text-decoration:none` on all links | Scope this reset to non-CTA elements; restore underline or sufficient color contrast on body links |
| Medium | Empty `<title>` | Set to a descriptive value, e.g. `Your cart expires soon — Skechers` |
| Medium | Layout tables missing `role="presentation"` | Add `role="presentation"` to all structural `<table>` elements |
| Medium | UTM parameters | Resolve a tracked link in staging to confirm UTM tags reach the GA4/analytics layer |
| Low | Footer compliance blocks | Pull full source to confirm physical address and one-click unsubscribe are present and functional |
| Low | Image alt text | Pull full source to audit `alt` attributes on all `<img>` tags |
## Recent history

- [[2026-04-13-your-items-are-waiting]] — 5/10 (2026-04-13)
- [[2026-04-12-go-bold-in-adistar]] — 5/10 (2026-04-12)
- [[2026-04-12-spring-favorites-just-a-click-away-bogo-50-off]] — 5/10 (2026-04-12)

