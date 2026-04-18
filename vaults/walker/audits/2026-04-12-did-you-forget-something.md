---
slug: 2026-04-12-did-you-forget-something
type: email
date: 2026-04-12
persona: walker
score: "5/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-5, sender/skechers]
---
# Did you forget something?
**Score:** 5/10 · **Type:** Email audit · **2026-04-12**
## Executive summary

- This is a competent but overcrowded abandoned cart email. The core recovery message is established immediately with a clear hero, the abandoned product is visible with its name and a dedicated CTA, and a 20% discount adds meaningful conversion incentive. However, the email fails to stay focused on the one job it was built for: getting the cart completed. Instead it sprawls into product recommendations, SMS opt-ins, app downloads, payment promos, and store finders — diluting urgency and giving the reader too many exits before they ever hit "buy."
- Functional but below potential. The discount offer buried mid-email should be doing heavy lifting in the hero. The structural noise around a simple cart-recovery goal is the main drag on conversion.

## What's working

- **Hero clarity.** "READY TO CHECK OUT?" paired with "COMPLETE YOUR ORDER" is unambiguous. The sunburst background gives it visual energy without obscuring the message.
- **Abandoned item shown by name.** The specific product (Skechers Slip-Ins: Max Cushioning Arch Fit 2.0 - Ascend) is visible with a second "COMPLETE YOUR ORDER" CTA directly beneath it — correct placement.
- **20% off module.** The discount is a real incentive. For a wavering shopper, price reduction is often the deciding factor.
- **CTA button contrast.** The orange/gold button reads clearly against the white product background.

## What's weak

- **Discount is buried.** The 20% off panel sits below the fold, after product recommendations. If this were in the hero alongside the cart nudge, it would meaningfully increase conversions.
- **Product recommendations compete with the primary goal.** A row of additional shoes appears before the discount, giving the reader an off-ramp to browse instead of complete. In a cart recovery email, recs should be minimal or absent.
- **"LET'S GET TEXTING" module is misplaced.** SMS opt-in belongs in a welcome series or dedicated campaign, not mid-cart recovery. It adds cognitive load at the wrong moment.
- **Footer utility overload.** App download, pay later, curbside pickup, find a store, and follow us — each of these is reasonable on its own, but stacked together they turn the bottom third of the email into a navigation menu. None of them recover the cart.
- **No personalization visible.** No name, no "your cart," no price shown. The email reads generic despite being behaviorally triggered.

## Recommendations

- 1. **Move the 20% off offer into the hero.** Make it part of the initial ask: "Ready to check out? Here's 20% off to finish the job." Show the discount code or auto-apply language prominently.
- 2. **Cut the SMS opt-in from this email entirely.** Wrong moment. Recontact them post-purchase for that.
- 3. **Reduce or remove the product recommendation row.** If you keep recs, position them *after* the primary CTA section as a "or explore more" fallback — not as a competing path before the discount.
- 4. **Show the cart price and/or savings amount.** "Your $130 cart is waiting" anchors value better than a product name alone.
- 5. **Trim the footer utility modules to two.** App download and "Find a Store" are the highest-utility options. The rest can go.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP tracking domain | Switch `skechers.attentivemail.com` click-tracking to HTTPS in Attentive settings |
- | High | UTM passthrough unverified | Decode one `upn` token and audit destination URL parameters |
- | Medium | Cart merge tokens unverified | Confirm all product dynamic blocks render correctly in send preview |
- | Medium | Missing `alt` on images | Add descriptive `alt` text to all `<img>` elements in full template |
- | Medium | CAN-SPAM footer presence | Confirm footer with address and unsubscribe is in the non-truncated source |
- | Low | Empty `<title>` | Set to `"SKECHERS — Complete Your Purchase"` or equivalent |
- | Low | `<meta charset>` form | Replace with `<meta charset="utf-8" />` |
- | Low | Global `text-decoration:none` on links | Scope to specific selectors rather than all `#MessageViewBody a` |

## Full review
## SKECHERS Abandoned Cart Email Review

---

### 1. Executive Summary

This is a competent but overcrowded abandoned cart email. The core recovery message is established immediately with a clear hero, the abandoned product is visible with its name and a dedicated CTA, and a 20% discount adds meaningful conversion incentive. However, the email fails to stay focused on the one job it was built for: getting the cart completed. Instead it sprawls into product recommendations, SMS opt-ins, app downloads, payment promos, and store finders — diluting urgency and giving the reader too many exits before they ever hit "buy."

---

### 2. Business Impact Score: **5/10**

Functional but below potential. The discount offer buried mid-email should be doing heavy lifting in the hero. The structural noise around a simple cart-recovery goal is the main drag on conversion.

---

### 3. What's Working

- **Hero clarity.** "READY TO CHECK OUT?" paired with "COMPLETE YOUR ORDER" is unambiguous. The sunburst background gives it visual energy without obscuring the message.
- **Abandoned item shown by name.** The specific product (Skechers Slip-Ins: Max Cushioning Arch Fit 2.0 - Ascend) is visible with a second "COMPLETE YOUR ORDER" CTA directly beneath it — correct placement.
- **20% off module.** The discount is a real incentive. For a wavering shopper, price reduction is often the deciding factor.
- **CTA button contrast.** The orange/gold button reads clearly against the white product background.

---

### 4. What's Weak

- **Discount is buried.** The 20% off panel sits below the fold, after product recommendations. If this were in the hero alongside the cart nudge, it would meaningfully increase conversions.
- **Product recommendations compete with the primary goal.** A row of additional shoes appears before the discount, giving the reader an off-ramp to browse instead of complete. In a cart recovery email, recs should be minimal or absent.
- **"LET'S GET TEXTING" module is misplaced.** SMS opt-in belongs in a welcome series or dedicated campaign, not mid-cart recovery. It adds cognitive load at the wrong moment.
- **Footer utility overload.** App download, pay later, curbside pickup, find a store, and follow us — each of these is reasonable on its own, but stacked together they turn the bottom third of the email into a navigation menu. None of them recover the cart.
- **No personalization visible.** No name, no "your cart," no price shown. The email reads generic despite being behaviorally triggered.

---

### 5. Recommendations

1. **Move the 20% off offer into the hero.** Make it part of the initial ask: "Ready to check out? Here's 20% off to finish the job." Show the discount code or auto-apply language prominently.
2. **Cut the SMS opt-in from this email entirely.** Wrong moment. Recontact them post-purchase for that.
3. **Reduce or remove the product recommendation row.** If you keep recs, position them *after* the primary CTA section as a "or explore more" fallback — not as a competing path before the discount.
4. **Show the cart price and/or savings amount.** "Your $130 cart is waiting" anchors value better than a product name alone.
5. **Trim the footer utility modules to two.** App download and "Find a Store" are the highest-utility options. The rest can go.

---

### 6. Bottom Line

This email has the right ingredients but poor sequencing. The discount — the most powerful conversion lever — is hidden below the fold while secondary modules take up prime real estate. Reordering the hierarchy (hero + discount → product → minimal footer) and cutting two or three lower-priority modules would make this a meaningfully stronger cart recovery email with minimal design effort.

---

### 7. Subject Line Analysis

- **Subject:** `Did you forget something?`
- **Length:** 25 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `2`, Urgency `3`, Specificity `2`
- **Strengths:**
  - Short and readable; fits all clients without truncation
  - Conversational tone matches the nudge-not-lecture posture of cart recovery
- **Weaknesses:**
  - Among the most overused abandoned cart subject lines in email marketing — likely trained recipients to ignore it
  - Zero specificity: no product name, no price, no discount hook — misses an easy upgrade
- **Alt A:** `Your Slip-Ins are still waiting — 20% off today`
- **Alt B:** `We saved your cart (and added a little extra)`

---

### 8. Evidence

- **Overall purpose:** Abandoned cart recovery — triggered after a shopper left the Skechers site with items in their cart.
- **Hero / primary value proposition:** "READY TO CHECK OUT?" with sunburst creative and orange CTA button. Straightforward and appropriately urgent in tone, though not reinforced by the discount at this stage.
- **Membership / benefits section:** None visible.
- **Product discoverability / recommendation modules:** One hero product (named, with CTA), plus a horizontal row of 3–4 additional shoe thumbnails below it labeled "SHOP ALL BEST SELLERS." These dilute focus at the critical conversion moment.
- **Utility / secondary modules:** "SHOP ADDITIONAL STYLES" nav (Women, Men, Kids, Clothing, New Arrivals, Sale), "LET'S GET TEXTING" SMS opt-in, "DOWNLOAD THE APP," "CURBSIDE PICKUP," "SHOP NOW, PAY LATER," "FIND A STORE," and "FOLLOW US" social links. This is a heavy utility stack for a recovery email.
- **Bugs / friction / clarity issues:** No visible rendering bugs. All images load, text is legible, and CTAs are readable. The 20% OFF module text beside "SHOP NOW" is small and harder to read at thumbnail scale, but not broken.

---

## Technical Audit

## Technical Audit — SKECHERS "Did you forget something?" (Abandoned Cart)

---

### 1. Technical Summary

Email is built on Attentive's click-tracking infrastructure using a standard table-based layout with a responsive media query block. Two confirmed code-level issues: all tracked links use plain HTTP and the `<title>` element is empty. Full audit of compliance and personalization blocks is limited by the truncated source.

---

### 2. Link & Tracking Issues

**HTTP click-tracking domain (confirmed)**
Every link in the provided source routes through `http://skechers.attentivemail.com/ls/click?upn=...` — plain HTTP, not HTTPS. Example:

```
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor..."
```

This applies to both the "web version" link (row-1) and the logo/hero link (row-2). Mixed-content warnings, browser security badges, and some corporate mail gateways will flag or strip non-HTTPS redirect URLs. Attentive supports HTTPS on custom tracking domains; this should be enforced.

**UTM parameters on destination URLs**
Because the destination URLs are opaque inside Attentive's base64-encoded `upn` parameter, UTM attribution cannot be confirmed from the HTML source. This is flagged for follow-up verification (see §6).

---

### 3. Rendering & Accessibility

**Empty `<title>` element**
```html
<title></title>
```
Several clients (notably Outlook on desktop and some webmail UIs) surface the `<title>` in tab labels or accessibility trees. A blank title is not a render-blocker but degrades screen-reader experience and browser tab labeling for the web version.

**Global link style stripping**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This rule removes underlines and inherits body text color for all links inside Gmail's `#MessageViewBody` wrapper. Links become visually indistinguishable from body copy for users who rely on underline/color cues (WCAG 1.4.1 Use of Color). This is a known trade-off in email CSS but constitutes an accessibility regression.

**`<meta charset>` attribute form**
```html
<meta content="text/html; charset=utf-8" />
```
The `http-equiv="Content-Type"` attribute is missing. The standalone `charset="utf-8"` shorthand (HTML5) is preferred; the form used here relies on older HTTP-equiv interpretation and may be ignored by strict parsers. Recommend replacing with `<meta charset="utf-8" />`.

**Image alt text** — Cannot confirm from truncated source. The `image_block` structure visible in rows 2–3 does not surface `alt` attributes in the excerpt. Verify that all `<img>` tags carry non-empty `alt` text; cart-item product images in particular must carry descriptive alt values for screen readers and image-blocking clients.

---

### 4. Personalization & Merge Tokens

No merge tokens or dynamic placeholders are visible in the provided HTML excerpt. For an abandoned-cart trigger, the expected dynamic blocks (cart item name, image, price, quantity, SKU, and CTA URL tied to the specific cart session) are not present in the truncated source. **Verify that the full template contains populated or properly escaped cart-item merge fields** — if tokens like `{{product_name}}` or `{{cart_url}}` are present but unfired, recipients would see raw placeholder strings.

---

### 5. Compliance

**Unsubscribe / CAN-SPAM footer** — Not present in the provided truncated source. Cannot confirm compliance. The full template must include:
- A functional one-click or list-unsubscribe mechanism
- Physical mailing address of the sender (CAN-SPAM §5(a)(5))

**Authentication headers** — Not assessable from HTML source alone; these live in the SMTP envelope. Verify that `msgs.skechers.com` is covered by SPF, DKIM (Attentive typically signs with their own selector on a delegated domain), and DMARC policy at `skechers.com`.

**Preheader invisible-character padding** — The preheader block uses U+034F COMBINING GRAPHEME JOINER (`͏`) and U+00AD SOFT HYPHEN (`­`) for whitespace padding — a standard technique, but the density here (150+ characters of padding) can trip aggressive spam heuristics on some filters. No action required unless deliverability metrics regress.

---

### 6. Email-to-Site Continuity

Cannot verify UTM parameter passthrough because destination URLs are encoded inside Attentive's `upn` tracking tokens. **Decode a sample `upn` value and confirm** that the final destination URL carries at minimum:

- `utm_source=email`
- `utm_medium=cart_abandonment` (or equivalent)
- `utm_campaign=<campaign_id>`

Without these, abandoned-cart revenue will be unattributed in Google Analytics / any web analytics tool.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP tracking domain | Switch `skechers.attentivemail.com` click-tracking to HTTPS in Attentive settings |
| High | UTM passthrough unverified | Decode one `upn` token and audit destination URL parameters |
| Medium | Cart merge tokens unverified | Confirm all product dynamic blocks render correctly in send preview |
| Medium | Missing `alt` on images | Add descriptive `alt` text to all `<img>` elements in full template |
| Medium | CAN-SPAM footer presence | Confirm footer with address and unsubscribe is in the non-truncated source |
| Low | Empty `<title>` | Set to `"SKECHERS — Complete Your Purchase"` or equivalent |
| Low | `<meta charset>` form | Replace with `<meta charset="utf-8" />` |
| Low | Global `text-decoration:none` on links | Scope to specific selectors rather than all `#MessageViewBody a` |
## Recent history

- [[2026-04-12-f-tbol-y-familia]] — 5/10 (2026-04-12)
- [[2026-04-11-earn-50-points-for-completing-your-profile]] — 3/10 (2026-04-11)
- [[2026-04-11-more-sun-more-savings]] — 6/10 (2026-04-11)

