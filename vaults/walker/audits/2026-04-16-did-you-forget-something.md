---
slug: 2026-04-16-did-you-forget-something
type: email
date: 2026-04-16
persona: walker
score: "6/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-6, sender/skechers]
---
# Did you forget something?
**Score:** 6/10 · **Type:** Email audit · **2026-04-16**
## Executive summary

- This is a standard abandoned cart recovery email with a clear mission: get the recipient back to complete their Skechers Slip-ins purchase. The hero communicates the intent well, and a 20% off incentive is present — but it's buried below a best sellers distraction module rather than leading the pitch. The email is structurally competent but conversion-leaking: the discount, which is the most compelling reason to return, is not the first thing you see after the product.
- Solid abandoned cart scaffolding undermined by poor incentive placement and excessive category navigation that dilutes focus on a single-conversion goal.

## What's working

- **Hero is unambiguous.** "READY TO CHECK OUT?" + "COMPLETE YOUR ORDER" in the banner immediately tells the user why they're receiving this email.
- **Abandoned item is correctly surfaced.** The specific product (GO WALK Glide-Step 2.0 – Santiago) is shown with a dedicated CTA — good personalization signal.
- **Discount offer exists.** 20% off a single pair is a meaningful recovery incentive.
- **Utility completeness.** App download, Klarna/Afterpay, curbside pickup, and store finder are all present — covers different purchase path preferences.
- **Brand consistency.** Skechers orange is used correctly for CTAs throughout.

## What's weak

- **The 20% discount is buried.** It sits below the best sellers grid — the single most important conversion lever is not in the hero or adjacent to the cart item. Many users will bail before reaching it.
- **Best sellers module is noise.** Six additional product tiles between the cart item and the discount add visual weight without serving the email's one job: complete *this* order. This is a cross-sell distraction at the worst moment.
- **Navigation block is exhaustive.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE as a stacked list makes the email feel like a catalog browse, not a recovery nudge.
- **Character encoding issue.** The texting CTA reads "for exclusiveÂ offers!" — a visible rendering artifact in the email body.
- **No urgency signal.** Nothing tells the recipient that the cart item is at risk (low stock, price expiry, offer deadline). The email is passive.

## Recommendations

- 1. **Move the 20% off incentive into the hero.** Pair it directly with the "COMPLETE YOUR ORDER" CTA: "Your cart's waiting — plus 20% off your pair." That's a reason to click, not just a reminder.
- 2. **Cut or compress the best sellers module.** If cross-sell must be present, reduce to 2–3 tiles and place them after the discount, not before.
- 3. **Add urgency copy.** Even a soft line — "Your cart is saved, but stock moves fast" — improves recovery rate. A countdown timer for the discount would be stronger.
- 4. **Fix the encoding artifact** in the SMS signup line ("exclusiveÂ offers!") — it reads as a technical error and erodes trust.
- 5. **Collapse the navigation block.** A single "Shop All" link is enough here. The stacked category list pulls attention away from checkout.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP click-tracking links | Change `http://` to `https://` in Attentive template link-wrapping config |
- | High | Malformed charset meta | Add `http-equiv="Content-Type"` or switch to `<meta charset="utf-8">` |
- | Medium | Global `text-decoration:none` on `#MessageViewBody a` | Add explicit `color` and `text-decoration` inline styles to every `<a>` in the footer/unsubscribe block |
- | Medium | Confirm unsubscribe + physical address in footer | Manual review of full HTML; required for CAN-SPAM |
- | Medium | Verify DKIM/DMARC on `msgs.skechers.com` | Pull raw headers from a delivered test message |
- | Low | Empty `<title>` | Populate with email subject or brand name |
- | Low | Layout tables missing `role="presentation"` | Add to all structural `<table>` elements |
- | Low | Confirm product image `alt` attributes | Review full HTML below the truncation point |
- | Low | UTM parameter verification | Manual QA click-through on test send |

## Full review
## Email Review: SKECHERS — "Did you forget something?"

---

### 1. Executive Summary

This is a standard abandoned cart recovery email with a clear mission: get the recipient back to complete their Skechers Slip-ins purchase. The hero communicates the intent well, and a 20% off incentive is present — but it's buried below a best sellers distraction module rather than leading the pitch. The email is structurally competent but conversion-leaking: the discount, which is the most compelling reason to return, is not the first thing you see after the product.

---

### 2. Business Impact Score: **6 / 10**

Solid abandoned cart scaffolding undermined by poor incentive placement and excessive category navigation that dilutes focus on a single-conversion goal.

---

### 3. What's Working

- **Hero is unambiguous.** "READY TO CHECK OUT?" + "COMPLETE YOUR ORDER" in the banner immediately tells the user why they're receiving this email.
- **Abandoned item is correctly surfaced.** The specific product (GO WALK Glide-Step 2.0 – Santiago) is shown with a dedicated CTA — good personalization signal.
- **Discount offer exists.** 20% off a single pair is a meaningful recovery incentive.
- **Utility completeness.** App download, Klarna/Afterpay, curbside pickup, and store finder are all present — covers different purchase path preferences.
- **Brand consistency.** Skechers orange is used correctly for CTAs throughout.

---

### 4. What's Weak

- **The 20% discount is buried.** It sits below the best sellers grid — the single most important conversion lever is not in the hero or adjacent to the cart item. Many users will bail before reaching it.
- **Best sellers module is noise.** Six additional product tiles between the cart item and the discount add visual weight without serving the email's one job: complete *this* order. This is a cross-sell distraction at the worst moment.
- **Navigation block is exhaustive.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE as a stacked list makes the email feel like a catalog browse, not a recovery nudge.
- **Character encoding issue.** The texting CTA reads "for exclusiveÂ offers!" — a visible rendering artifact in the email body.
- **No urgency signal.** Nothing tells the recipient that the cart item is at risk (low stock, price expiry, offer deadline). The email is passive.

---

### 5. Recommendations

1. **Move the 20% off incentive into the hero.** Pair it directly with the "COMPLETE YOUR ORDER" CTA: "Your cart's waiting — plus 20% off your pair." That's a reason to click, not just a reminder.
2. **Cut or compress the best sellers module.** If cross-sell must be present, reduce to 2–3 tiles and place them after the discount, not before.
3. **Add urgency copy.** Even a soft line — "Your cart is saved, but stock moves fast" — improves recovery rate. A countdown timer for the discount would be stronger.
4. **Fix the encoding artifact** in the SMS signup line ("exclusiveÂ offers!") — it reads as a technical error and erodes trust.
5. **Collapse the navigation block.** A single "Shop All" link is enough here. The stacked category list pulls attention away from checkout.

---

### 6. Bottom Line

SKECHERS has all the right ingredients for a high-converting cart recovery email but has assembled them in the wrong order. The discount is the hero; the product is the context. Flip the structure — lead with the incentive tied to the abandoned item — and this email gets meaningfully better without any additional content work.

---

### 7. Subject Line Analysis

- **Subject:** `Did you forget something?`
- **Length:** 24 characters
- **Scores (1-10):** Clarity `4`, Curiosity `5`, Personalization `2`, Urgency `3`, Specificity `2`
- **Strengths:**
  - Short, clean, reads naturally in mobile preview
  - Mild intrigue; non-accusatory tone
- **Weaknesses:**
  - Completely generic — could be from any retailer, any category
  - No product name, no discount signal, no brand differentiation
- **Alt A:** `Your GO WALK Glide-Step is still in your cart`
- **Alt B:** `20% off is waiting — your cart's not gone yet`

---

### 8. Evidence

- **Overall purpose:** Abandoned cart recovery targeting a single saved item.
- **Hero / primary value prop:** "Ready to Check Out?" banner with "Complete Your Order" CTA — clear and correctly branded, but does not mention the discount incentive available below.
- **Abandoned item module:** GO WALK Glide-Step 2.0 – Santiago shown with product name and a second "Complete Your Order" CTA. Correct execution.
- **Best sellers grid:** Six women's shoe thumbnails with a "Shop All Best Sellers" button. Premature cross-sell placed between the cart item and the discount — creates exit paths before the primary conversion.
- **Discount module:** "20% OFF A SINGLE PAIR" banner with "Shop Now" CTA. Strong incentive, but positioned roughly 60% down the email.
- **Category navigation block:** Text list of Women / Men / Kids / Clothing / New Arrivals / Sale. Appropriate for a catalog email; misplaced in a recovery email.
- **Utility / secondary modules:** SMS opt-in, app download (App Store + Google Play), Afterpay/Klarna, curbside pickup, Find a Store. Complete and functional.
- **Bugs / friction:** Visible character encoding artifact in SMS module — "for exclusiveÂ offers!" — a rendering error visible to the recipient.

---

## Technical Audit

## Technical Audit — SKECHERS "Did you forget something?" (Cart Abandonment)
**ESP:** Attentive (`msgs.skechers.com` / `skechers.attentivemail.com`)

---

### 1. Technical Summary
Standard Attentive-platform cart abandonment email with no critical rendering failures. Three confirmed issues warrant remediation: HTTP-only click-tracking links, a malformed charset meta tag, and a global anchor style that strips link decoration in webmail.

---

### 2. Link & Tracking Issues

**HTTP scheme on all tracked links — medium severity**
Every CTA routes through an unencrypted redirect:
```
href="http://skechers.attentivemail.com/ls/click?upn=..."
```
The tracking domain itself should enforce HTTPS. An HTTP entry point exposes the click token in transit and triggers browser/mail-client "mixed content" warnings in some environments. Attentive supports `https://` on click URLs — this appears to be a template-level misconfiguration.

**Final destination UTMs not verifiable from source**
The redirect chain resolves at runtime, so UTM parameters on the landing page cannot be confirmed from HTML alone. See Section 6.

---

### 3. Rendering & Accessibility

**Malformed charset meta tag**
```html
<meta content="text/html; charset=utf-8" />
```
Missing `http-equiv="Content-Type"`. Correct forms are either:
```html
<meta charset="utf-8">                                         <!-- HTML5 -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  <!-- legacy -->
```
Outlook 2007–2019 and some older webmail parsers rely on the `http-equiv` form; omitting it can cause character-encoding fallback to ISO-8859-1.

**Global anchor style strips underlines**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
In Gmail (which wraps content in `#MessageViewBody`), this removes underlines and inherits surrounding text color for all links — including any plain-text fallback links in the footer. Links become invisible unless they are styled inline with explicit `color` and `text-decoration` overrides on each `<a>` tag. Inline styles on CTAs appear present, but any unstyled anchors (e.g., unsubscribe, web version) are at risk.

**`<title>` is empty**
```html
<title></title>
```
Screen readers and some preview panes surface the `<title>` as the document label. An empty title degrades accessibility and provides no context if the email opens in a browser tab.

**Layout tables lack `role="presentation"`**
No `role="presentation"` or `aria-hidden` attributes are present on structural `<table>` elements. Screen readers will announce each table as data, producing noisy traversal for assistive technology users.

**Image `alt` text not confirmable**
The HTML is truncated before product image `<img>` tags; cannot confirm `alt` attributes are populated. Given this is a cart abandonment email with personalized product images, missing `alt` text would be a WCAG 2.1 Level A failure.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g., `{{first_name}}`, `%%FIRST_NAME%%`) are visible in the truncated source — expected behavior if Attentive renders server-side before delivery.

However: the preheader text is static:
```
You left something in your cart, get it before it's gone!
```
No recipient name, product name, or cart item count is injected. If Attentive's personalization variables are available, the preheader is an underutilized slot — but this is an observation, not a defect.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Unsubscribe link and physical address:** Not present in the truncated source. CAN-SPAM requires both a functioning opt-out mechanism and a valid physical postal address in every commercial email. These are presumably in the footer (outside the provided truncation window) — **confirm they are present before treating this as clear**.

**Authentication headers:** Not available from HTML source alone; would require raw message headers (DKIM, SPF, DMARC). The sending domain `msgs.skechers.com` is a subdomain — verify that DKIM is signed under `skechers.com` or `msgs.skechers.com` and that DMARC policy covers the subdomain.

---

### 6. Email-to-Site Continuity

All links redirect through `skechers.attentivemail.com/ls/click`. The final destination URL and any UTM parameters are encoded in the `upn=` payload and not readable from the HTML source. To verify UTM continuity:

1. Click a tracked link in a test send and inspect the final URL.
2. Confirm `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` are present.
3. Confirm the cart abandonment landing page loads the correct session/cart state (requires QA in a live test environment).

No issues confirmed from source alone; verification required.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP click-tracking links | Change `http://` to `https://` in Attentive template link-wrapping config |
| High | Malformed charset meta | Add `http-equiv="Content-Type"` or switch to `<meta charset="utf-8">` |
| Medium | Global `text-decoration:none` on `#MessageViewBody a` | Add explicit `color` and `text-decoration` inline styles to every `<a>` in the footer/unsubscribe block |
| Medium | Confirm unsubscribe + physical address in footer | Manual review of full HTML; required for CAN-SPAM |
| Medium | Verify DKIM/DMARC on `msgs.skechers.com` | Pull raw headers from a delivered test message |
| Low | Empty `<title>` | Populate with email subject or brand name |
| Low | Layout tables missing `role="presentation"` | Add to all structural `<table>` elements |
| Low | Confirm product image `alt` attributes | Review full HTML below the truncation point |
| Low | UTM parameter verification | Manual QA click-through on test send |
## Recent history

- [[2026-04-16-your-items-are-waiting]] — 5/10 (2026-04-16)
- [[2026-04-16-your-cart-expires-soon]] — 5/10 (2026-04-16)
- [[2026-04-16-test-ret-us-na-u-store1408-zip-en-04172026sale-ends-soon-celebrate-our-birthday-]] — 5/10 (2026-04-16)

