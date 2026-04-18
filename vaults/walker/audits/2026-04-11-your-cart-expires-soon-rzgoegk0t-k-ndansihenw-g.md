---
slug: 2026-04-11-your-cart-expires-soon-rzgoegk0t-k-ndansihenw-g
type: email
date: 2026-04-08
persona: walker
score: "5/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-5, sender/skechers]
---
# Your cart expires soon!
**Score:** 5/10 · **Type:** Email audit · **2026-04-08**
## Executive summary

- Functional but squandered. The intent is right; the execution doesn't back it up.

## What's working

- **Product recall is clean.** The Skechers Slip-ins Max Cushioning Arch Fit 2.0 is shown prominently with a product shot that accurately represents the item in cart. Name and a CTA button ("Complete Your Order") are immediately visible.
- **20% off banner exists.** A discount signal is present — this is the strongest motivator in the email and will drive the most revenue lift when seen.
- **Best sellers carousel.** Four product thumbnails below the hero give browsers an alternative path if they've lost interest in the cart item.
- **Omnichannel utility block.** The Find a Store / Curbside Pickup / Download the App / Shop Now Pay Later / Klarna row acknowledges that not everyone converts on web — useful real estate.
- **Brand coherence.** Clean white background, Skechers blue logo, consistent type scale — nothing looks broken or off-brand.

## What's weak

- **The urgency claim is hollow.** Subject line says "expires soon" but nowhere in the visible email is a deadline, timestamp, or countdown shown. The subject and the body are misaligned — this reads as a retention email, not a true cart expiration alert.
- **CTA appears before the offer.** "Complete Your Order" is shown above the 20% off promotion. Any subscriber who clicks the CTA without scrolling will never see the discount — and may feel deceived when they reach checkout at full price.
- **Navigation overload below the fold.** Women / Men / Kids / Clothing / New Arrivals / Sale is a six-row category list that looks like a nav bar, not email content. It invites wandering rather than conversion.
- **Weak product context.** There's no price, no size, no personalization detail. If someone put this in their cart days ago they may not remember which variant they selected.
- **Fine print is heavy.** The bottom disclaimer block is dense and small — standard legally, but the sheer visual weight makes the email feel transactional rather than brand-positive at close.

## Recommendations

- 1. **Surface the deadline.** Add a specific expiry time ("Your cart expires in 24 hours") near the hero — either as a subheadline or an inline countdown graphic. Urgency without a date is not urgency.
- 2. **Move the discount above the CTA.** Sequence: product → discount → CTA. Subscribers should know about the 20% off *before* they're asked to click Buy.
- 3. **Show price + selected attributes.** Display the cart price, size, and color beneath the product name so the reader can immediately verify what they're buying.
- 4. **Collapse the category nav.** Cut Women / Men / Kids / Clothing / New Arrivals / Sale to a single "Shop All" link, or remove it entirely. This is a cart recovery email, not a browse email.
- 5. **Add social proof near the product.** A star rating or short snippet ("4.7 stars · 3,200 reviews") adjacent to the hero product would reduce pre-purchase hesitation without adding significant visual weight.
- | Priority | Item | Action |
- |---|---|---|
- | High | HTTP tracking URLs | Confirm `skechers.attentivemail.com` enforces HTTPS redirect server-side; switch to `https://` in template if not |
- | High | Footer compliance | Verify full HTML contains unsubscribe link and physical address |
- | Medium | Empty `<title>` | Set a descriptive value, e.g., `<title>Skechers — Complete Your Purchase</title>` |
- | Medium | Gmail link override | Audit all CTA `<a>` tags for explicit inline `color` values to counteract the `#MessageViewBody a` reset |
- | Medium | UTM validation | Run live click-trace on all CTAs and confirm attribution parameters reach analytics |
- | Low | Image `alt` text | Confirm in full source; all product and logo images should have descriptive `alt` attributes |
- | Low | Authentication headers | Pull raw headers from a delivered message and verify DKIM pass + DMARC alignment on `msgs.skechers.com` |

## Full review
## 2. Business Impact Score: **5 / 10**

Functional but squandered. The intent is right; the execution doesn't back it up.

---

## 3. What's Working

- **Product recall is clean.** The Skechers Slip-ins Max Cushioning Arch Fit 2.0 is shown prominently with a product shot that accurately represents the item in cart. Name and a CTA button ("Complete Your Order") are immediately visible.
- **20% off banner exists.** A discount signal is present — this is the strongest motivator in the email and will drive the most revenue lift when seen.
- **Best sellers carousel.** Four product thumbnails below the hero give browsers an alternative path if they've lost interest in the cart item.
- **Omnichannel utility block.** The Find a Store / Curbside Pickup / Download the App / Shop Now Pay Later / Klarna row acknowledges that not everyone converts on web — useful real estate.
- **Brand coherence.** Clean white background, Skechers blue logo, consistent type scale — nothing looks broken or off-brand.

---

## 4. What's Weak

- **The urgency claim is hollow.** Subject line says "expires soon" but nowhere in the visible email is a deadline, timestamp, or countdown shown. The subject and the body are misaligned — this reads as a retention email, not a true cart expiration alert.
- **CTA appears before the offer.** "Complete Your Order" is shown above the 20% off promotion. Any subscriber who clicks the CTA without scrolling will never see the discount — and may feel deceived when they reach checkout at full price.
- **Navigation overload below the fold.** Women / Men / Kids / Clothing / New Arrivals / Sale is a six-row category list that looks like a nav bar, not email content. It invites wandering rather than conversion.
- **Weak product context.** There's no price, no size, no personalization detail. If someone put this in their cart days ago they may not remember which variant they selected.
- **Fine print is heavy.** The bottom disclaimer block is dense and small — standard legally, but the sheer visual weight makes the email feel transactional rather than brand-positive at close.

---

## 5. Recommendations

1. **Surface the deadline.** Add a specific expiry time ("Your cart expires in 24 hours") near the hero — either as a subheadline or an inline countdown graphic. Urgency without a date is not urgency.
2. **Move the discount above the CTA.** Sequence: product → discount → CTA. Subscribers should know about the 20% off *before* they're asked to click Buy.
3. **Show price + selected attributes.** Display the cart price, size, and color beneath the product name so the reader can immediately verify what they're buying.
4. **Collapse the category nav.** Cut Women / Men / Kids / Clothing / New Arrivals / Sale to a single "Shop All" link, or remove it entirely. This is a cart recovery email, not a browse email.
5. **Add social proof near the product.** A star rating or short snippet ("4.7 stars · 3,200 reviews") adjacent to the hero product would reduce pre-purchase hesitation without adding significant visual weight.

---

## 6. Bottom Line

This email will recover some carts on the strength of the discount alone, but it's leaving money on the table. The structural sequencing (CTA before offer) and the absent deadline mean the highest-leverage moments arrive in the wrong order or not at all. Fix those two issues first; the rest is refinement.

---

## 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Abandoned cart recovery — one product in cart, one primary CTA |
| **Hero / primary value prop** | Skechers Slip-ins Max Cushioning Arch Fit 2.0 with product image and "Complete Your Order" button; no price or size shown |
| **Membership / benefits** | None visible; no loyalty tier, points balance, or member-exclusive framing |
| **Product discoverability** | "Shop All Best Sellers" row with four product thumbnails; secondary category nav list (Women, Men, Kids, Clothing, New Arrivals, Sale) |
| **Promotions module** | 20% off banner with "Shop Now" CTA — appears *below* the cart product hero |
| **Utility / secondary modules** | Download the App (App Store + Google Play), Curbside Pickup, Find a Store, Shop Now Pay Later (Afterpay + Klarna), Follow us (social icons) |
| **Visual bugs / friction** | None — no broken images, no overlapping text, no empty fields visible. Sole friction is structural (sequencing) and copy-level (no expiry date), not rendering |

---

## Technical Audit

## Technical Audit — SKECHERS Cart Abandonment Email

---

### 1. Technical Summary

Table-based HTML email sent via Attentive (`msgs.skechers.com` / `skechers.attentivemail.com`). All links are wrapped in Attentive click-tracking redirects. The truncated source is sufficient to flag several infrastructure and accessibility issues; compliance elements (unsubscribe, physical address) are not present in the provided excerpt and cannot be confirmed.

---

### 2. Link & Tracking Issues

**HTTP redirect domain (medium severity)**
All click-tracking URLs use `http://` (not `https://`):
```
href="http://skechers.attentivemail.com/ls/click?upn=..."
```
If the redirect server doesn't immediately 301 to HTTPS, the initial request is cleartext. Modern email clients and browsers will flag or warn on mixed-content. Confirm whether `skechers.attentivemail.com` enforces HTTPS at the server level; if not, the tracking URLs should be updated to `https://`.

**Final destination URLs opaque**
All CTAs resolve through `upn=` tokens. UTM parameters on the final landing pages cannot be verified from the HTML alone — this is a known limitation of Attentive's tracking architecture, but it means QA of UTM attribution requires a live click-trace (see §6).

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**
```html
<title></title>
```
Screen readers and some email clients (notably Outlook web) surface the `<title>` value. An empty title degrades accessibility for assistive technology users.

**Link color/decoration override**
```css
#MessageViewBody a { color: inherit; text-decoration: none; }
```
This rule strips all visual link affordance inside Gmail's `#MessageViewBody` wrapper. Any inline `color` or `text-decoration` on individual `<a>` tags must explicitly override this, or links will be visually indistinguishable from body text in Gmail. From the visible source, the "web version" link uses `style="color:#434343"` — verify all CTAs have explicit inline color values.

**Alt text on images — unverified**
The logo `<img>` block is within a truncated section. The pattern `<div style="max-width:220px"><a href="...">` suggests the `<img>` tag and its `alt` attribute are in the omitted portion. Confirm all `<img>` tags carry descriptive `alt` text; images-off rendering (common in Outlook) depends on it.

**Preheader padding technique**
The preheader uses a mix of Unicode `͏` (U+034F combining grapheme joiner) and soft-hyphens `­` (U+00AD) for whitespace padding — this is functional but the soft-hyphens can render as visible hyphens in certain legacy clients. No immediate action required unless client-specific rendering is observed.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g., `{{first_name}}`, `%%first_name%%`) are visible in the provided HTML excerpt. Cart item personalization blocks are in the truncated portion and cannot be assessed. Verify in full source that:
- All dynamic product blocks (name, image, price) have non-empty fallback values
- No raw token syntax is present in the rendered output

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Unsubscribe link — not confirmed in provided source**
The HTML excerpt ends before the footer. CAN-SPAM §5 requires a clear, functional opt-out mechanism. Cannot confirm presence from truncated source — verify the full HTML contains a working unsubscribe link.

**Physical mailing address — not confirmed in provided source**
CAN-SPAM §5(a)(5) requires a valid physical postal address. Verify it appears in the footer of the full source.

**Authentication headers — cannot assess from HTML**
SPF, DKIM, and DMARC cannot be verified from HTML source. Sending domain is `msgs.skechers.com`. These must be validated via raw email headers (check `Authentication-Results` header in a received message). The sending subdomain should align with a published DMARC policy on `skechers.com`.

---

### 6. Email-to-Site Continuity (UTM / Landing Page)

**UTM parameters unverifiable**
Because all links are wrapped in opaque Attentive `upn=` redirect tokens, UTM parameter presence on destination URLs cannot be confirmed from the HTML source. A live click-trace is required:
1. Click each CTA in a browser
2. Inspect the final URL for `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`
3. Confirm GA4 / analytics platform receives the session correctly

**Expected UTM pattern for a cart abandonment send:**
```
utm_source=attentive&utm_medium=email&utm_campaign=cart_abandon&utm_content=<cta_label>
```
If Attentive is configured to append UTMs before the redirect, confirm this in the Attentive campaign settings — it is not derivable from the HTML.

---

### 7. Recommendations

| Priority | Item | Action |
|---|---|---|
| High | HTTP tracking URLs | Confirm `skechers.attentivemail.com` enforces HTTPS redirect server-side; switch to `https://` in template if not |
| High | Footer compliance | Verify full HTML contains unsubscribe link and physical address |
| Medium | Empty `<title>` | Set a descriptive value, e.g., `<title>Skechers — Complete Your Purchase</title>` |
| Medium | Gmail link override | Audit all CTA `<a>` tags for explicit inline `color` values to counteract the `#MessageViewBody a` reset |
| Medium | UTM validation | Run live click-trace on all CTAs and confirm attribution parameters reach analytics |
| Low | Image `alt` text | Confirm in full source; all product and logo images should have descriptive `alt` attributes |
| Low | Authentication headers | Pull raw headers from a delivered message and verify DKIM pass + DMARC alignment on `msgs.skechers.com` |
## Recent history

- [[2026-04-08-your-items-are-waiting]] — 6/10 (2026-04-08)
- [[2026-04-07-test-mkg-us-na-w-new-gender-en-04082026-spring-into-a-new-level-of-comfort]] — 5/10 (2026-04-07)
- [[2026-04-07-test-mkg-us-retpurl24-w-new-gender-en-04082026-v2-spring-into-the-comfort-you-kn]] — 5.5/10 (2026-04-07)

