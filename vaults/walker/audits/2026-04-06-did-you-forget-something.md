---
slug: 2026-04-06-did-you-forget-something
type: email
date: 2026-04-06
persona: walker
score: "5/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-5, sender/skechers]
---
# Did you forget something?
**Score:** 5/10 · **Type:** Email audit · **2026-04-06**
## Executive summary

- A functional but unfocused abandoned cart email that buries its core recovery mission under too many competing modules. The hero clearly identifies the abandoned item and pushes a completion CTA, but the BOGO offer, best sellers row, category nav links, and a dense utility footer all fight for attention below the fold — diluting urgency and muddying the email's one job: get the shopper back to complete the purchase.
- Gets the fundamentals right (product callout, CTA) but squanders the moment with module bloat that turns a high-intent recovery email into a generic promotional mailer.

## What's working

- **Clear hero intent.** "Ready to Check Out? Complete Your Order" is direct and unambiguous. No clever wordplay getting in the way of the message.
- **Product is front and center.** The specific abandoned item (Diamond Step-Ins / Arch Fit 2.0 - Smooth) is shown with its name and a dedicated "Complete Your Order" CTA button — the email knows what it's supposed to do.
- **BOGO 50% off offer.** A meaningful promotional incentive placed mid-email. This is a genuine purchase driver, especially useful if price was the hesitation.
- **Best sellers row.** Provides credible alternatives if the customer isn't sold on the specific item, keeping Skechers products in play.

## What's weak

- **Module overload.** Below the BOGO banner, the email continues with: a text-link category nav (Women, Men, Kids, Clothing, New Arrivals, Sale), an SMS sign-up prompt, app download badges, Skechers Pickup, Shop Now Pay Later, and a store finder. That is six secondary modules after the primary CTA has already been served. This is a browse or promotional email structure crammed onto a cart recovery message.
- **BOGO offer is disconnected from the recovery narrative.** There's no explicit framing like "Here's an extra reason to check out today" — it just appears mid-scroll as a standalone banner, so it reads more like a coincidence than a designed incentive.
- **Hero decorative frame is visually fussy.** The yellow/gold banner border around the hero copy has a scrapbook quality that undercuts the clean athletic brand aesthetic seen in the product photography.
- **Best sellers row is small and hard to read.** Thumbnail images are very compressed at this email width — product differentiation is nearly impossible to discern at a glance.
- **Text-link category nav is plain and low-energy.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE in gray text looks like a leftover footer block dropped into the body. No visual hierarchy, no imagery.

## Recommendations

- 1. **Cut the footer utility modules from the body.** SMS sign-up, app download, Skechers Pickup, and store finder belong in the footer of a newsletter — not competing for real estate in an abandoned cart email. Remove or relocate.
- 2. **Connect the BOGO offer to the cart.** Add a bridging line: "Need a little extra nudge? Buy one, get one 50% off — including your saved styles." Make the offer feel like it's responding to the shopper's hesitation, not just a broadcast promotion.
- 3. **Increase the best sellers thumbnail size** or reduce the row to 3 items. At current size, they're noise rather than alternatives.
- 4. **Replace the text-link category nav** with nothing. The email already has product exposure via hero + best sellers. A navigation block sends the wrong signal — it suggests browsing, not completing.
- 5. **Simplify the hero frame.** A clean product image with a strong color block or banner strip would hold more visual authority than the decorative gold frame treatment.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP click-tracking URLs | Confirm Attentive is configured to use HTTPS tracking endpoints; if not, update ESP settings |
- | High | Compliance footer (truncated) | Verify unsubscribe link and physical address are present and functional in full template |
- | Medium | Empty `<title>` tag | Set a descriptive title value |
- | Medium | Missing `role="presentation"` on layout tables | Add to all non-data tables for screen reader compatibility |
- | Medium | Alt text on product images | Audit all `<img>` tags; add descriptive alt for product images, `alt=""` for decorative |
- | Medium | Merge token fallbacks | Confirm cart item tokens have non-empty fallback values to prevent broken renders |
- | Low | UTM parameter verification | Follow redirect chain in staging to confirm UTM params reach skechers.com |
- | Low | SPF/DKIM/DMARC for `msgs.skechers.com` | Run DNS lookup and check received headers on a test send |

## Full review
## Skechers — "Did you forget something?" | Abandoned Cart Email Review

---

### 1. Executive Summary

A functional but unfocused abandoned cart email that buries its core recovery mission under too many competing modules. The hero clearly identifies the abandoned item and pushes a completion CTA, but the BOGO offer, best sellers row, category nav links, and a dense utility footer all fight for attention below the fold — diluting urgency and muddying the email's one job: get the shopper back to complete the purchase.

---

### 2. Business Impact Score: **5/10**

Gets the fundamentals right (product callout, CTA) but squanders the moment with module bloat that turns a high-intent recovery email into a generic promotional mailer.

---

### 3. What's Working

- **Clear hero intent.** "Ready to Check Out? Complete Your Order" is direct and unambiguous. No clever wordplay getting in the way of the message.
- **Product is front and center.** The specific abandoned item (Diamond Step-Ins / Arch Fit 2.0 - Smooth) is shown with its name and a dedicated "Complete Your Order" CTA button — the email knows what it's supposed to do.
- **BOGO 50% off offer.** A meaningful promotional incentive placed mid-email. This is a genuine purchase driver, especially useful if price was the hesitation.
- **Best sellers row.** Provides credible alternatives if the customer isn't sold on the specific item, keeping Skechers products in play.

---

### 4. What's Weak

- **Module overload.** Below the BOGO banner, the email continues with: a text-link category nav (Women, Men, Kids, Clothing, New Arrivals, Sale), an SMS sign-up prompt, app download badges, Skechers Pickup, Shop Now Pay Later, and a store finder. That is six secondary modules after the primary CTA has already been served. This is a browse or promotional email structure crammed onto a cart recovery message.
- **BOGO offer is disconnected from the recovery narrative.** There's no explicit framing like "Here's an extra reason to check out today" — it just appears mid-scroll as a standalone banner, so it reads more like a coincidence than a designed incentive.
- **Hero decorative frame is visually fussy.** The yellow/gold banner border around the hero copy has a scrapbook quality that undercuts the clean athletic brand aesthetic seen in the product photography.
- **Best sellers row is small and hard to read.** Thumbnail images are very compressed at this email width — product differentiation is nearly impossible to discern at a glance.
- **Text-link category nav is plain and low-energy.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE in gray text looks like a leftover footer block dropped into the body. No visual hierarchy, no imagery.

---

### 5. Recommendations

1. **Cut the footer utility modules from the body.** SMS sign-up, app download, Skechers Pickup, and store finder belong in the footer of a newsletter — not competing for real estate in an abandoned cart email. Remove or relocate.
2. **Connect the BOGO offer to the cart.** Add a bridging line: "Need a little extra nudge? Buy one, get one 50% off — including your saved styles." Make the offer feel like it's responding to the shopper's hesitation, not just a broadcast promotion.
3. **Increase the best sellers thumbnail size** or reduce the row to 3 items. At current size, they're noise rather than alternatives.
4. **Replace the text-link category nav** with nothing. The email already has product exposure via hero + best sellers. A navigation block sends the wrong signal — it suggests browsing, not completing.
5. **Simplify the hero frame.** A clean product image with a strong color block or banner strip would hold more visual authority than the decorative gold frame treatment.

---

### 6. Bottom Line

Skechers identifies the abandoned product correctly and delivers a reasonable first CTA — but then keeps going for another four scrolls of generic email real estate. Abandoned cart emails need one job and one energy: urgency + ease of return. This email says "come back and buy this" and then immediately adds "or browse, or download our app, or find a store." Trim the non-essential modules by at least 60% and the conversion rate should improve meaningfully.

---

### 7. Evidence

**Overall purpose:** Abandoned cart recovery — prompting the shopper to return and complete a purchase they left behind.

**Hero / primary value proposition:** "Ready to Check Out? Complete Your Order" headline over a decorative yellow frame. The specific abandoned product (Diamond Step-Ins Arch Fit 2.0 - Smooth, white/gray colorway) is shown below with a dedicated "Complete Your Order" CTA button. Clear and appropriately product-specific.

**Membership / benefits section:** None visible. No loyalty, Skechers Elite, or reward points mention.

**Product discoverability / recommendation modules:** One best sellers horizontal row (4–5 thumbnails, small) beneath the hero product. Thumbnails are too compressed to clearly differentiate styles. A BOGO 50% off promotional banner with a "Shop Now" CTA sits below the best sellers row.

**Utility / secondary modules:** Text-link category nav (Women, Men, Kids, Clothing, New Arrivals, Sale) — no imagery. SMS opt-in prompt ("Let's Get Texting"). App download section with store badges. Skechers Pickup callout. Shop Now Pay Later callout. Find a Store link. Social follow icons (Facebook, Instagram visible). Footer with legal/unsubscribe text.

**Bugs / friction / clarity issues:** No broken images detected. No overlapping text visible. Best sellers row thumbnails are small enough that product identity is unclear — not a rendering bug, but a layout choice that creates visual friction.

---

## Technical Audit

## Technical Audit — Skechers "Did you forget something?" (Abandoned Cart)
**From:** hello@msgs.skechers.com | **ESP/Platform:** Attentive (skechers.attentivemail.com)

---

### 1. Technical Summary
Table-based abandoned cart email built on the Attentive platform with standard responsive breakpoints. Primary technical concern is that all click-tracking URLs use plaintext HTTP rather than HTTPS, creating a security downgrade on the initial request.

---

### 2. Link & Tracking Issues

**HTTP click-tracking endpoint (confirmed)**
All links route through `http://skechers.attentivemail.com/ls/click?upn=...` — plaintext HTTP. While the final redirect destination is presumably HTTPS, the initial tracking hop is unencrypted. Modern email clients and security gateways (Proofpoint, Mimecast) may flag or rewrite these.

Evidence:
```
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorXO..."
```

**UTM parameters not directly inspectable**
UTM attribution is encoded inside the Attentive `upn` payload — not visible as raw query parameters on the tracking URL. This is standard Attentive behavior, but it means UTM delivery to the final landing page depends entirely on Attentive's redirect chain. Cannot confirm UTM param presence without following the redirect.

**Web version link uses same HTTP tracking redirect**
The "web version" anchor in row-1 routes through the same HTTP tracking URL rather than a direct HTTPS permalink.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**
```html
<head><title></title>...
```
Some email clients (notably older Outlook webmail) surface the `<title>` in tab labels or reading panes. Should contain a descriptive value, e.g., `"Skechers — You left something in your cart"`.

**Tables lack `role="presentation"`**
No `role="presentation"` attributes on layout tables. This is a WCAG/screen-reader best practice for email; without it, VoiceOver and NVDA may announce table structure noise to assistive technology users.

**Alt text on images** — HTML is truncated before image `alt` attributes are visible. This must be verified: abandoned cart emails typically include product images that require descriptive alt text for accessible fallback rendering when images are blocked.

**Responsive breakpoint:** `max-width:620px` media query is present; content width is 600px. Standard and functional.

**`#MessageViewBody a` override** removes default link styling globally — intentional but should be confirmed it doesn't suppress visible focus states for keyboard users.

---

### 4. Personalization & Merge Tokens

HTML is truncated before cart content rows are visible. **Cannot confirm** from available source whether:
- Abandoned product name/image/price are populated via merge tokens
- A fallback value exists if cart data is unavailable
- The recipient first name (if used in body copy) has a default fallback

These must be verified against the full template source and Attentive merge field configuration.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**HTML truncated before footer** — unsubscribe link and physical mailing address cannot be confirmed from the provided source. Both are required under CAN-SPAM §5. Verify the footer contains:
- One-click (or clearly labeled) unsubscribe mechanism
- Skechers' physical postal address

**Sender domain:** `msgs.skechers.com` — this is a dedicated ESP subdomain, appropriate for deliverability isolation. SPF/DKIM/DMARC alignment for this subdomain should be verified via DNS (`dig TXT msgs.skechers.com` and header inspection on a received copy).

**No authentication headers available** in the provided data — cannot assess DKIM signature or DMARC pass/fail from HTML source alone.

---

### 6. Email-to-Site Continuity

**UTM delivery unverifiable without redirect follow-through.** Attentive encodes attribution in the `upn` parameter; the final destination URL must be checked by following the redirect chain to confirm UTM params (`utm_source`, `utm_medium`, `utm_campaign`) arrive on the Skechers domain.

**Landing page alignment:** Subject line is "Did you forget something?" — the CTA links should land on the recipient's specific cart or a cart recovery page, not the Skechers homepage. This cannot be confirmed from the HTML alone but is critical for conversion continuity in abandoned cart flows.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP click-tracking URLs | Confirm Attentive is configured to use HTTPS tracking endpoints; if not, update ESP settings |
| High | Compliance footer (truncated) | Verify unsubscribe link and physical address are present and functional in full template |
| Medium | Empty `<title>` tag | Set a descriptive title value |
| Medium | Missing `role="presentation"` on layout tables | Add to all non-data tables for screen reader compatibility |
| Medium | Alt text on product images | Audit all `<img>` tags; add descriptive alt for product images, `alt=""` for decorative |
| Medium | Merge token fallbacks | Confirm cart item tokens have non-empty fallback values to prevent broken renders |
| Low | UTM parameter verification | Follow redirect chain in staging to confirm UTM params reach skechers.com |
| Low | SPF/DKIM/DMARC for `msgs.skechers.com` | Run DNS lookup and check received headers on a test send |
## Recent history

- [[2026-04-06-anthony-edwards-2-pink-available-now]] — 6/10 (2026-04-06)
- [[2026-04-05-take-your-pick-during-the-spring-fling-sale]] — 5/10 (2026-04-05)
- [[2026-04-05-your-items-are-waiting]] — 5/10 (2026-04-05)

