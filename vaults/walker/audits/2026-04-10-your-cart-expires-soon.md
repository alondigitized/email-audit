---
slug: 2026-04-10-your-cart-expires-soon
type: email
date: 2026-04-10
persona: walker
score: "5/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-5, sender/skechers]
---
# Your cart expires soon!
**Score:** 5/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A competent abandoned-cart recovery email that leads with the right intent — urgency, product recall, and a discount incentive — but dilutes itself with a cluttered lower half that piles on category nav, SMS sign-up, payment options, and store finder. The core cart-recovery job is present but not dominant enough to drive maximum conversion.
- Functional but not optimized. The discount is buried, the urgency is soft, and the email asks too many things of a shopper who just needs one clear reason to click "complete your order."

## What's working

- **Hero headline** — "YOU LIKED THESE AND YOU WEREN'T WRONG" is confident, on-brand, and avoids the tired "you forgot something" framing. Good tone.
- **Product image + name are present** — The abandoned item (Skechers Slip-ins: Max Cushioning Arch Fit 2.0) is shown with its name, giving the recipient immediate product recall.
- **"COMPLETE YOUR ORDER" CTA** — Visually distinct button, clear action language.
- **20% off banner** — Discount incentive exists, which is the right lever for cart recovery.
- **"SHOP ALL BEST SELLERS" button** — Good fallback if the cart item no longer appeals.
- **Payment flexibility visible** — Afterpay and Klarna logos communicate affordability without pressure.

## What's weak

- **The discount is buried too deep.** The 20% off offer appears well below the hero, after the best sellers carousel. In a cart recovery email, a discount should be at or near the hero — it's the conversion accelerator.
- **No urgency mechanics visible.** The subject line promises "expires soon" but the email body shows no countdown timer, no expiration date, and no explicit scarcity signal. The urgency claim is unsubstantiated.
- **Category navigation is the wrong module here.** "WOMEN'S / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE" is homepage-style padding. It sends a shopper who was already close to buying back to browse mode.
- **SMS sign-up is a distraction.** "LET'S GET TEXTING" is a list-growth module — not appropriate for a conversion-focused cart recovery email.
- **Best sellers product thumbnails are small and undifferentiated.** Four tiny shoe thumbnails with minimal visual separation don't compel action.
- **Curbside pickup and Find a Store** add dead weight. Relevant for brand emails; friction in cart recovery.

## Recommendations

- 1. **Move the discount to the hero block.** Place "20% OFF" directly beneath the product image or integrate it into the headline. Make the CTA reflect it: "CLAIM 20% OFF — COMPLETE YOUR ORDER."
- 2. **Add a visible expiration signal.** Show a date, a countdown, or at minimum a sentence: "This offer expires April 12." Back up the subject line promise.
- 3. **Cut the category nav entirely.** Replace with a second CTA or a short trust signal (free shipping threshold, return policy).
- 4. **Remove the SMS sign-up module.** Save that for post-purchase or browse-abandonment flows.
- 5. **Tighten to 3 sections max:** Hero (product + discount + CTA) → Best Sellers fallback → Payment/utility footer. Every module above that is dilution.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP tracking URLs | Confirm Attentive enforces HTTPS redirect on all `ls/click` hops; flag if not |
- | High | UTM parameters unverifiable | Decode 2–3 `upn` URLs and verify UTM presence on destination |
- | Medium | Image alt text | Audit full source for `alt=""` on all `<img>` tags; add descriptive text |
- | Medium | Unsubscribe + physical address | Confirm footer contains both; required for CAN-SPAM |
- | Low | Empty `<title>` | Set to match subject line or brand name |
- | Low | Mixed preheader padding | Standardize on CGJ (U+034F); remove SHY characters |

## Full review
### 1. Executive Summary

A competent abandoned-cart recovery email that leads with the right intent — urgency, product recall, and a discount incentive — but dilutes itself with a cluttered lower half that piles on category nav, SMS sign-up, payment options, and store finder. The core cart-recovery job is present but not dominant enough to drive maximum conversion.

---

### 2. Business Impact Score: **5 / 10**

Functional but not optimized. The discount is buried, the urgency is soft, and the email asks too many things of a shopper who just needs one clear reason to click "complete your order."

---

### 3. What's Working

- **Hero headline** — "YOU LIKED THESE AND YOU WEREN'T WRONG" is confident, on-brand, and avoids the tired "you forgot something" framing. Good tone.
- **Product image + name are present** — The abandoned item (Skechers Slip-ins: Max Cushioning Arch Fit 2.0) is shown with its name, giving the recipient immediate product recall.
- **"COMPLETE YOUR ORDER" CTA** — Visually distinct button, clear action language.
- **20% off banner** — Discount incentive exists, which is the right lever for cart recovery.
- **"SHOP ALL BEST SELLERS" button** — Good fallback if the cart item no longer appeals.
- **Payment flexibility visible** — Afterpay and Klarna logos communicate affordability without pressure.

---

### 4. What's Weak

- **The discount is buried too deep.** The 20% off offer appears well below the hero, after the best sellers carousel. In a cart recovery email, a discount should be at or near the hero — it's the conversion accelerator.
- **No urgency mechanics visible.** The subject line promises "expires soon" but the email body shows no countdown timer, no expiration date, and no explicit scarcity signal. The urgency claim is unsubstantiated.
- **Category navigation is the wrong module here.** "WOMEN'S / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE" is homepage-style padding. It sends a shopper who was already close to buying back to browse mode.
- **SMS sign-up is a distraction.** "LET'S GET TEXTING" is a list-growth module — not appropriate for a conversion-focused cart recovery email.
- **Best sellers product thumbnails are small and undifferentiated.** Four tiny shoe thumbnails with minimal visual separation don't compel action.
- **Curbside pickup and Find a Store** add dead weight. Relevant for brand emails; friction in cart recovery.

---

### 5. Recommendations

1. **Move the discount to the hero block.** Place "20% OFF" directly beneath the product image or integrate it into the headline. Make the CTA reflect it: "CLAIM 20% OFF — COMPLETE YOUR ORDER."
2. **Add a visible expiration signal.** Show a date, a countdown, or at minimum a sentence: "This offer expires April 12." Back up the subject line promise.
3. **Cut the category nav entirely.** Replace with a second CTA or a short trust signal (free shipping threshold, return policy).
4. **Remove the SMS sign-up module.** Save that for post-purchase or browse-abandonment flows.
5. **Tighten to 3 sections max:** Hero (product + discount + CTA) → Best Sellers fallback → Payment/utility footer. Every module above that is dilution.

---

### 6. Bottom Line

The skeleton of a solid cart recovery email is here. The headline voice is strong, the product is shown, the discount is present, and the CTA label is right. But the email is trying to do too much — recover the cart *and* grow the SMS list *and* browse new categories *and* find a store. Strip it down. Let the discount and urgency do the work.

---

### 7. Evidence

| Module | What's Visible |
|---|---|
| **Overall purpose** | Abandoned cart recovery with discount incentive |
| **Hero / primary value prop** | "YOU LIKED THESE" headline, single product image (Slip-ins Arch Fit 2.0), "COMPLETE YOUR ORDER" CTA |
| **Discount/incentive** | 20% off banner with "SHOP NOW" — appears mid-email, below best sellers |
| **Product discoverability** | 4-item best sellers thumbnail row + "SHOP ALL BEST SELLERS" black button |
| **Category navigation** | Text-link nav: Women's, Men, Kids, Clothing, New Arrivals, Sale — homepage-style module |
| **Utility modules** | Curbside Pickup, Shop Now Pay Later (Afterpay + Klarna), Find a Store, Follow Us (Facebook, Instagram) |
| **SMS acquisition** | "LET'S GET TEXTING" with App Store / Google Play badges |
| **Bugs / visual issues** | None visible — no broken images, no overlapping text, no empty fields detected |

---

## Technical Audit

## Technical Audit — Skechers "Your cart expires soon!"
**From:** hello@msgs.skechers.com | **ESP:** Attentive (`skechers.attentivemail.com`)

---

### 1. Technical Summary
Cart abandonment email built on a BEE editor template, delivered via Attentive. All links route through Attentive's click-tracking redirector over HTTP. The HTML source is structurally sound but has several trackable issues around link security, accessibility gaps, and preheader encoding.

---

### 2. Link & Tracking Issues

**HTTP tracking URLs (confirmed)**
Every link in the visible source uses `http://` rather than `https://`:
```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6...
```
The initial redirect hop is unencrypted. If Attentive's redirect does not force HTTPS before forwarding, clicks pass credentials (the `upn` token) over plaintext. Verify that Attentive's redirect chain enforces TLS.

**Tracking domain is correct** — `skechers.attentivemail.com` is the expected Attentive subdomain for this sender. No suspicious redirect domains detected in the visible portion.

**UTM parameters** — Not visible in the tracking URLs as presented. The `upn` token encodes the destination, so UTM params may exist in the decoded target URL, but they cannot be confirmed from this source. (See §6.)

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**
```html
<title></title>
```
Some email clients (notably Outlook on the web) surface the `<title>` as a tab label or preview. This should be populated (e.g., `"Your cart expires soon — Skechers"`).

**Image alt text** — The truncated source cuts off before the `<img>` tag inside `.image_block`. Alt text presence cannot be confirmed. Given this is a product/logo image block, missing `alt` would fail WCAG 2.1 §1.1.1 and degrade VoiceOver/screen reader UX.

**Responsive breakpoint at `max-width:620px`** vs. 600px content width — The 20px gap between breakpoint and content width is intentional and standard. No issue.

**Preheader padding uses mixed invisible-character encodings:**
- `͏` — U+034F Combining Grapheme Joiner
- `­` — U+00AD Soft Hyphen

Both are legitimate preheader-padding techniques, but mixing them is redundant and adds ~300+ unnecessary bytes. Standardize on one (CGJ is preferred; SHY can render a visible dash in some legacy clients).

**`#MessageViewBody a { color: inherit; text-decoration: none }`** — This suppresses Gmail's link styling globally. Intentional for design control, but it also suppresses default underline on links that have no explicit visual treatment, which is an accessibility concern for low-vision users.

---

### 4. Personalization & Merge Tokens

The truncated source does not expose the cart product rows or dynamic content blocks. Cannot confirm whether:
- Abandoned cart item names/images are personalized
- Price or quantity fields use properly guarded merge tokens (i.e., fallback values present)
- The recipient's first name is used anywhere

**Flag for full-source review:** any unguarded merge token (e.g., `{{first_name}}` without a fallback) in the cart block would render literally if Attentive's data pipeline has a gap.

---

### 5. Compliance

**CAN-SPAM / physical address** — Not visible in truncated source; typically in the footer. Must be confirmed in the full HTML. Required: sender's legal name and physical postal address.

**Unsubscribe link** — Not visible in truncated source. Attentive-managed emails typically inject this automatically, but the full source must confirm a one-click or clearly labeled unsubscribe mechanism is present.

**Sending domain:** `msgs.skechers.com`
This is a dedicated sending subdomain, which is correct practice. Authentication (SPF, DKIM, DMARC) cannot be verified from HTML alone — requires header inspection from a received copy. Should be confirmed via `Authentication-Results` header on a delivered message.

---

### 6. Email-to-Site Continuity

All destination URLs are encoded inside Attentive's `upn` parameter and are not inspectable from the HTML source alone. To audit UTM continuity:

1. Decode or click-test the `upn` links in a staging environment
2. Confirm all CTAs carry consistent UTM params (e.g., `utm_source=attentive&utm_medium=email&utm_campaign=cart_abandonment`)
3. Verify the landing page is the cart/checkout page, not the homepage — a mismatch here directly hurts conversion and is a common cart-abandonment failure mode

**Web version link** — Present and routed through Attentive's tracker. Confirm the web version renders correctly with cart data intact (some ESPs serve a static snapshot without personalization).

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP tracking URLs | Confirm Attentive enforces HTTPS redirect on all `ls/click` hops; flag if not |
| High | UTM parameters unverifiable | Decode 2–3 `upn` URLs and verify UTM presence on destination |
| Medium | Image alt text | Audit full source for `alt=""` on all `<img>` tags; add descriptive text |
| Medium | Unsubscribe + physical address | Confirm footer contains both; required for CAN-SPAM |
| Low | Empty `<title>` | Set to match subject line or brand name |
| Low | Mixed preheader padding | Standardize on CGJ (U+034F); remove SHY characters |
## Recent history

- [[2026-04-10-your-items-are-waiting]] — 6/10 (2026-04-10)
- [[2026-04-10-did-you-forget-something]] — 5/10 (2026-04-10)
- [[2026-04-10-enjoy-your-everyday-runs-in-the-new-supernova-rise-3]] — 6/10 (2026-04-10)

