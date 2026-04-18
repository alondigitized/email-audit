---
slug: 2026-04-18-did-you-forget-something
type: email
date: 2026-04-18
persona: walker
score: "5/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-5, sender/skechers]
---
# Did you forget something?
**Score:** 5/10 · **Type:** Email audit · **2026-04-18**
## Executive summary

- Recovers the minimum — product name, image, and a CTA — but undersells recovery with weak personalization and offer ambiguity.

## What's working

- **Abandoned product is clearly visible** — the Santiago shoe image and product name ("Skechers Slip-ins: GO WALK Glide-Step 2.0 – Santiago") appear above the fold with a direct "Complete Your Order" CTA in brand orange. Mission-critical content is present.
- **20% off incentive** — the discount banner is a real hook for fence-sitters, placed early enough to catch a scrolling reader.
- **App download + curbside pickup modules** — useful utility, well-contained at the bottom.

## What's weak

- **Bestseller grid immediately after the cart item** — six product thumbnails interrupt the conversion path before the shopper has clicked. This is noise at exactly the wrong moment.
- **20% off is ambiguous** — "20% off a single pair" doesn't clarify whether it stacks with the cart item or applies to a new purchase. A shopper will hesitate.
- **Category nav block (Women / Men / Kids / Clothing / New Arrivals / Sale)** — this is website navigation dropped into an email. It reads like the sender ran out of ideas and pasted a sitemap.
- **No social proof** — no star rating, no "X people bought this recently," nothing to reduce hesitation on the specific cart item.
- **Follow us icons at the bottom** — Facebook and Instagram icons present but add zero value in an abandoned cart email.
- **Fine print block is dense and visually heavy** — the legal copy at the footer is long and hard to read at this render size.
- **Subject line mismatch** — "Did you forget something?" implies a personal, casual nudge; the email body immediately pivots to a promotional grid, killing the intimacy of the subject line's premise.

## Recommendations

- 1. **Cut the bestseller grid entirely** — or move it below the 20% off CTA. The first scroll should be: product → discount → single CTA → done.
- 2. **Clarify the 20% off** — "20% off your cart item" or "20% off any new pair" — pick one and say it plainly. Ambiguity kills conversion.
- 3. **Add one social proof signal** — star rating or review count directly under the Santiago product image.
- 4. **Remove the category nav block** — this belongs on the website, not in a cart recovery email.
- 5. **Tighten the footer** — legal copy is legitimate but could be collapsed or reduced in font weight to reclaim vertical space.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP tracking links | Change `http://skechers.attentivemail.com` → `https://` in ESP template config |
- | High | UTM verification | Decode and follow all `upn=` redirect chains; confirm UTM params reach destination |
- | Medium | Empty `<title>` | Set to e.g. `"Skechers — Complete Your Purchase"` |
- | Medium | Truncated HTML | Obtain full source to audit footer compliance (address, unsubscribe) |
- | Low | Charset meta `http-equiv` | Add `http-equiv="Content-Type"` attribute |
- | Low | Image alt text | Confirm all `<img>` tags have descriptive `alt` attributes once full source is available |

## Full review
## 2. Business Impact Score: 5 / 10

Recovers the minimum — product name, image, and a CTA — but undersells recovery with weak personalization and offer ambiguity.

---

## 3. What's Working

- **Abandoned product is clearly visible** — the Santiago shoe image and product name ("Skechers Slip-ins: GO WALK Glide-Step 2.0 – Santiago") appear above the fold with a direct "Complete Your Order" CTA in brand orange. Mission-critical content is present.
- **20% off incentive** — the discount banner is a real hook for fence-sitters, placed early enough to catch a scrolling reader.
- **App download + curbside pickup modules** — useful utility, well-contained at the bottom.

---

## 4. What's Weak

- **Bestseller grid immediately after the cart item** — six product thumbnails interrupt the conversion path before the shopper has clicked. This is noise at exactly the wrong moment.
- **20% off is ambiguous** — "20% off a single pair" doesn't clarify whether it stacks with the cart item or applies to a new purchase. A shopper will hesitate.
- **Category nav block (Women / Men / Kids / Clothing / New Arrivals / Sale)** — this is website navigation dropped into an email. It reads like the sender ran out of ideas and pasted a sitemap.
- **No social proof** — no star rating, no "X people bought this recently," nothing to reduce hesitation on the specific cart item.
- **Follow us icons at the bottom** — Facebook and Instagram icons present but add zero value in an abandoned cart email.
- **Fine print block is dense and visually heavy** — the legal copy at the footer is long and hard to read at this render size.
- **Subject line mismatch** — "Did you forget something?" implies a personal, casual nudge; the email body immediately pivots to a promotional grid, killing the intimacy of the subject line's premise.

---

## 5. Recommendations

1. **Cut the bestseller grid entirely** — or move it below the 20% off CTA. The first scroll should be: product → discount → single CTA → done.
2. **Clarify the 20% off** — "20% off your cart item" or "20% off any new pair" — pick one and say it plainly. Ambiguity kills conversion.
3. **Add one social proof signal** — star rating or review count directly under the Santiago product image.
4. **Remove the category nav block** — this belongs on the website, not in a cart recovery email.
5. **Tighten the footer** — legal copy is legitimate but could be collapsed or reduced in font weight to reclaim vertical space.

---

## 6. Bottom Line

Skechers gets partial credit for showing the right product, but the email is doing three jobs at once — cart recovery, product discovery, and brand newsletter — and does none of them excellently. Strip it back to cart + discount + CTA and it becomes a notably stronger recovery asset.

---

## 7. Subject Line Analysis

- **Subject:** `Did you forget something?`
- **Length:** 26 characters
- **Scores (1-10):** Clarity `6`, Curiosity `6`, Personalization `4`, Urgency `4`, Specificity `2`
- **Strengths:**
  - Conversational and low-pressure; avoids the aggressive urgency tropes
  - Short and scannable in a crowded inbox
- **Weaknesses:**
  - Completely generic — nearly every retailer uses this exact line; no brand signal, no product signal
  - No urgency mechanism — nothing implies stock limits, offer expiry, or time pressure
- **Alt A:** `Your Skechers Slip-ins are still waiting (+ 20% off today)`
- **Alt B:** `The Santiago is going fast — here's 20% off to seal the deal`

---

## 8. Evidence

- **Overall purpose:** Abandoned cart recovery with a secondary promotional offer.
- **Hero / primary value proposition:** "Ready to Check Out?" banner with gold coin aesthetic. Clear but generic visually — the coin/treasure motif doesn't reinforce any specific brand value.
- **Abandoned product module:** Single product (Skechers Slip-ins GO WALK Glide-Step 2.0 – Santiago, orange colorway) with name and orange "Complete Your Order" CTA button. Adequate but no price shown.
- **Bestseller grid:** Six small product thumbnails labeled Men's Slip-on, Arch Fit, Women's Foamies, etc. Copy is very small and likely unreadable on mobile. This module dilutes focus.
- **20% off banner:** Black background, bold "20% off a single pair" with "Shop Now" CTA. Placement is reasonable but offer terms are unclear.
- **Category nav block:** Plain-text links for Women / Men / Kids / Clothing / New Arrivals / Sale. Functionally a sitemap; adds no value in this context.
- **Utility modules:** "Let's Get Texting" SMS opt-in, App Store/Google Play download buttons, Curbside Pickup, Afterpay/Klarna payment options, Find a Store. These are well-contained and appropriately small.
- **Follow us:** Facebook and Instagram icons present.
- **Bugs / friction / clarity issues:** No visible broken images. Product name text is readable. The bestseller grid captions appear very small and may be unreadable at actual mobile render size, but no hard visual breaks are visible in this render.

---

## Technical Audit

## Technical Audit — SKECHERS "Did you forget something?" (Cart Abandonment)

---

### 1. Technical Summary

Table-based email built on Attentive's ESP infrastructure. HTML is truncated, limiting full compliance and footer inspection, but several infrastructure-level issues are confirmed in the visible source.

---

### 2. Link & Tracking Issues

**Issue: All click-tracking links use HTTP, not HTTPS**

Both visible links (`web version` and logo) use:
```
http://skechers.attentivemail.com/ls/click?upn=...
```

HTTP redirect links expose the tracking URL to interception and trigger browser/client security warnings in some environments. The tracking domain should resolve over HTTPS.

**Issue: Tracking URL destination is opaque**

Final destination URLs are fully encoded inside the `upn=` parameter. UTM parameter passthrough cannot be verified without following the redirect chain (see §6).

---

### 3. Rendering & Accessibility

**Issue: Empty `<title>` tag**
```html
<title></title>
```
Some email clients (notably Apple Mail in accessibility mode) expose the `<title>` value to screen readers. An empty title provides no context.

**Issue: Missing `http-equiv` attribute on charset declaration**
```html
<meta content="text/html; charset=utf-8" />
```
Correct form is:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Without `http-equiv`, older Outlook/Windows Mail versions may not apply the charset declaration.

**Cannot confirm: Image alt text** — The `<img>` element for the logo is in a truncated block. Alt attribute presence cannot be verified from provided source.

**No issues found:** `lang="en"` present on `<html>`; viewport meta present; preheader padding technique (zero-width spaces + soft hyphens) is correct.

---

### 4. Personalization & Merge Tokens

**No issues found in visible source.** The preheader text is static ("You left something in your cart...") with no exposed unresolved merge tokens (e.g., `{{first_name}}`). However, the HTML is truncated — dynamic product blocks in the cart section cannot be inspected for broken token syntax.

**Note:** No first-name personalization is present in the preheader or subject line. This is a content decision outside this audit's scope, but technically the merge token slots are absent rather than broken.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot fully verify — HTML is truncated before the footer.** The following cannot be confirmed from the provided source:
- Physical mailing address
- Unsubscribe link and one-click unsubscribe mechanism (`List-Unsubscribe` header)
- DKIM/SPF/DMARC headers (not available in HTML source; requires raw email headers)

**Sending domain:** `msgs.skechers.com` (From: `hello@msgs.skechers.com`). Authentication posture would need to be verified against DNS records for this subdomain. No HTML-level evidence of compliance gaps, but footer inspection is required to complete this check.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

**Cannot confirm UTM passthrough.** All destination URLs are encoded inside Attentive's `upn=` tracking parameter. To verify UTM coverage:

1. Follow redirect chain for each `attentivemail.com/ls/click` URL
2. Confirm final destination URLs include campaign parameters (e.g., `utm_source=email&utm_medium=cart_abandon&utm_campaign=...`)

If Attentive's click redirect is not configured to append UTMs to the final URL, cart abandonment sessions will be attributed to direct traffic in analytics — a data integrity issue.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP tracking links | Change `http://skechers.attentivemail.com` → `https://` in ESP template config |
| High | UTM verification | Decode and follow all `upn=` redirect chains; confirm UTM params reach destination |
| Medium | Empty `<title>` | Set to e.g. `"Skechers — Complete Your Purchase"` |
| Medium | Truncated HTML | Obtain full source to audit footer compliance (address, unsubscribe) |
| Low | Charset meta `http-equiv` | Add `http-equiv="Content-Type"` attribute |
| Low | Image alt text | Confirm all `<img>` tags have descriptive `alt` attributes once full source is available |
## Recent history

- [[2026-04-18-20-off-ends-tomorrow]] — 6/10 (2026-04-18)
- [[2026-04-18-verify-pipeline-test-2026-04-18-06-40]] — 1/10 (2026-04-18)
- [[2026-04-18-tennis-sporting-codes-meet-parisian-style]] — 4/10 (2026-04-18)

