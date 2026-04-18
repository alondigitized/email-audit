---
slug: 2026-04-11-your-items-are-waiting-q0komijtt6mars70xax5eq-g
type: email
date: 2026-04-11
persona: walker
score: "5/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-5, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 5/10 · **Type:** Email audit · **2026-04-11**
## Executive summary

- This is a textbook abandoned cart email with a clear job to do: recover a browsed shoe. The hero section executes that task reasonably well — product visible, CTA present. But the email keeps going, tacking on a recommendations grid, a 20% OFF promo banner, category navigation, app download, curbside pickup, and a shop-now-pay-later module. The result is a cluttered, unfocused message that undermines the urgency implied by the subject line. "Your cart is still waiting" sets an expectation of a tight, direct push — this email delivers a catalog page instead.
- Functional but self-defeating. The discount undercuts the urgency play, and the noise around the hero reduces conversion pressure on the actual abandoned item.

## What's working

- **Headline has personality.** "We noticed you noticing us..." is warm and non-aggressive — a good tone for cart abandonment that avoids feeling accusatory.
- **Abandoned product is shown clearly.** The shoe is visible above the fold alongside product name and a prominent "COMPLETE YOUR ORDER" button in a contrasting dark color. The primary action is findable.
- **Discount is meaningful.** 20% off is a real incentive. Placed where it is, it gives hesitant shoppers a reason to convert.
- **Clean logo and top-of-email treatment.** Simple, brand-appropriate header with no clutter.

## What's weak

- **The 20% OFF banner contradicts the cart recovery framing.** If the goal is recovering a cart item, leading with urgency ("it's still waiting") and then offering 20% off confuses the message. It signals "we'll discount to win you back" instead of "you should want this." It also trains shoppers to abandon carts to wait for a coupon.
- **The recommendation module dilutes focus.** "Here's some more great options we think you'll love" is a browse/discovery pattern — it actively pulls attention away from the cart item the email is supposed to recover. Four to five alternatives are shown, which gives the recipient permission to leave the original item behind entirely.
- **"SHOP ALL BEST SELLERS" is the wrong CTA for this email.** A best-sellers link has zero relationship to cart abandonment. It belongs in a browse or re-engagement email, not here.
- **The category nav block (Women, Men, Kids, Clothing, New Arrivals, Sale) is dead weight.** Listing six category links in a cart recovery email adds nothing actionable. It's a navigation footer pretending to be content.
- **Too much email.** By the time the reader passes the discount, they've also absorbed: an app download pitch, curbside pickup, Afterpay, a store finder, and a social follow module. The message has no spine.

## Recommendations

- 1. **Cut the email by half.** Keep: hero (product + name + CTA), a single urgency line ("Low inventory / others are looking"), the 20% off incentive if used, and footer. Remove everything else.
- 2. **Move the discount up or drop it.** Either make the discount the reason to buy now (put it directly under the CTA with an expiry) or remove it. Don't bury it below a recommendations grid.
- 3. **Remove or reframe the product recommendations.** If you include alternatives at all, limit to one and frame it as "can't find your size? Try this" — not a full product grid that invites the user to re-browse.
- 4. **Cut "Shop All Best Sellers."** Wrong CTA for this email type.
- 5. **Add urgency mechanics.** Low stock signal, view count, or a soft expiry on the discount ("Offer ends in 24 hrs") — none are present. The subject line implies urgency but the body delivers none.
- 6. **App and Afterpay modules belong in post-purchase or welcome flows.** They're noise here.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP click-tracking and image URLs | Enforce HTTPS at Attentive send settings; confirm image CDN supports HTTPS |
- | High | Missing `http-equiv` on charset meta | Add `http-equiv="Content-Type"` to the meta tag |
- | Medium | Logo `<img>` missing `alt` | Add `alt="Skechers"` |
- | Medium | Layout tables lack `role="presentation"` | Add to all structural tables |
- | Medium | UTM parameters unverified | Resolve sample CTAs and confirm UTM chain |
- | Medium | Cart deep-link behavior | QA test unauth and auth flows end-to-end |
- | Low | Empty `<title>` | Set to subject line or brand name |
- | Low | Preheader Unicode padding volume | Reduce invisible char count; monitor spam score delta |
- | Verify | CAN-SPAM footer (address + unsub) | Confirm present in full HTML render |
- | Verify | SPF/DKIM/DMARC alignment | Review raw message headers from a live send |

## Full review
### 1. Executive Summary

This is a textbook abandoned cart email with a clear job to do: recover a browsed shoe. The hero section executes that task reasonably well — product visible, CTA present. But the email keeps going, tacking on a recommendations grid, a 20% OFF promo banner, category navigation, app download, curbside pickup, and a shop-now-pay-later module. The result is a cluttered, unfocused message that undermines the urgency implied by the subject line. "Your cart is still waiting" sets an expectation of a tight, direct push — this email delivers a catalog page instead.

---

### 2. Business Impact Score: **5 / 10**

Functional but self-defeating. The discount undercuts the urgency play, and the noise around the hero reduces conversion pressure on the actual abandoned item.

---

### 3. What's Working

- **Headline has personality.** "We noticed you noticing us..." is warm and non-aggressive — a good tone for cart abandonment that avoids feeling accusatory.
- **Abandoned product is shown clearly.** The shoe is visible above the fold alongside product name and a prominent "COMPLETE YOUR ORDER" button in a contrasting dark color. The primary action is findable.
- **Discount is meaningful.** 20% off is a real incentive. Placed where it is, it gives hesitant shoppers a reason to convert.
- **Clean logo and top-of-email treatment.** Simple, brand-appropriate header with no clutter.

---

### 4. What's Weak

- **The 20% OFF banner contradicts the cart recovery framing.** If the goal is recovering a cart item, leading with urgency ("it's still waiting") and then offering 20% off confuses the message. It signals "we'll discount to win you back" instead of "you should want this." It also trains shoppers to abandon carts to wait for a coupon.
- **The recommendation module dilutes focus.** "Here's some more great options we think you'll love" is a browse/discovery pattern — it actively pulls attention away from the cart item the email is supposed to recover. Four to five alternatives are shown, which gives the recipient permission to leave the original item behind entirely.
- **"SHOP ALL BEST SELLERS" is the wrong CTA for this email.** A best-sellers link has zero relationship to cart abandonment. It belongs in a browse or re-engagement email, not here.
- **The category nav block (Women, Men, Kids, Clothing, New Arrivals, Sale) is dead weight.** Listing six category links in a cart recovery email adds nothing actionable. It's a navigation footer pretending to be content.
- **Too much email.** By the time the reader passes the discount, they've also absorbed: an app download pitch, curbside pickup, Afterpay, a store finder, and a social follow module. The message has no spine.

---

### 5. Recommendations

1. **Cut the email by half.** Keep: hero (product + name + CTA), a single urgency line ("Low inventory / others are looking"), the 20% off incentive if used, and footer. Remove everything else.
2. **Move the discount up or drop it.** Either make the discount the reason to buy now (put it directly under the CTA with an expiry) or remove it. Don't bury it below a recommendations grid.
3. **Remove or reframe the product recommendations.** If you include alternatives at all, limit to one and frame it as "can't find your size? Try this" — not a full product grid that invites the user to re-browse.
4. **Cut "Shop All Best Sellers."** Wrong CTA for this email type.
5. **Add urgency mechanics.** Low stock signal, view count, or a soft expiry on the discount ("Offer ends in 24 hrs") — none are present. The subject line implies urgency but the body delivers none.
6. **App and Afterpay modules belong in post-purchase or welcome flows.** They're noise here.

---

### 6. Bottom Line

SKECHERS sent a cart recovery email that doesn't trust itself. It starts with a confident, punchy hook and then immediately hedges by showing alternatives, offering discounts, and appending six different secondary modules. Pick one job — win back the cart — and do only that. Right now this reads like a batch promotional email wearing a personalization costume.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Abandoned cart recovery. Single product (Skechers Max Cushioning Elite FS 2.0 - Aerosol) is the trigger item. |
| **Hero / primary value prop** | Shoe image, product name, and "COMPLETE YOUR ORDER" dark-button CTA are all present above the fold. Competent execution. |
| **Membership / benefits** | None visible. No loyalty program reference. |
| **Product recommendations** | 4–5 shoes in a grid below the hero. Labeled "Here's some more great options we think you'll love." Visually prominent and competes with the hero. |
| **Promotional module** | 20% OFF banner with "SHOP NOW" — no expiry visible, no minimum stated in the render. |
| **Utility / secondary modules** | App download ("Let's Get Texting"), Curbside Pickup, Afterpay ("Shop Now, Pay Later"), Find a Store — all present and all dilutive in this context. |
| **Category nav** | Women / Men / Kids / Clothing / New Arrivals / Sale listed as text links mid-email. |
| **Bugs / friction** | No broken images or rendering errors visible. Product image renders cleanly. All CTAs appear legible. Footer legal text is very small but standard. |

---

## Technical Audit

## Technical Audit — SKECHERS "Your Items Are Waiting!" Cart Abandonment Email

---

### 1. Technical Summary

Cart abandonment email sent via Attentive (`msgs.skechers.com` / `skechers.attentivemail.com`). All tracked links and at least one image asset use plain HTTP rather than HTTPS, creating a mixed-content and security risk. The HTML source is otherwise well-structured for a table-based email, but several accessibility and protocol issues need remediation.

---

### 2. Link & Tracking Issues

**HTTP-only click-tracking links (HIGH)**
Every `href` in the visible source routes through Attentive's redirect domain over plain HTTP:
```
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor..."
```
HTTPS redirects should be enforced at the Attentive platform level. HTTP links expose subscriber click data in transit and will trigger browser/client security warnings on some platforms.

**Image asset served over HTTP (HIGH)**
The logo `<img>` src is truncated but begins:
```
src="http://image.emai…"
```
Mixed-content image blocking in Gmail (and others) will prevent this image from loading when the email is viewed in a secure context. Confirm full URL and verify HTTPS is available.

**Multiple tracking domains in use**
- Send domain: `msgs.skechers.com`
- Click tracking: `skechers.attentivemail.com`
- Image hosting: `image.emai*` (domain unclear from truncation)

No issue by itself, but all three domains should pass SPF/DKIM checks. Cannot verify from HTML alone — confirm in mail headers.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag**
```html
<title></title>
```
Some email clients (Outlook desktop, Apple Mail) display the `<title>` value in window titles or tab labels. An empty value is benign but non-standard; at minimum set it to the subject line.

**`<meta charset>` missing `http-equiv`**
```html
<meta content="text/html; charset=utf-8" />
```
The correct form for HTML email is:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Without `http-equiv`, Outlook and older clients may fail to honor the charset declaration.

**No `alt` text on logo `<img>`**
The logo image block does not include a visible `alt` attribute in the source. When images are blocked (common on first open), the CTA area will render blank. Add `alt="Skechers"` at minimum.

**Layout tables missing `role="presentation"`**
No `role="presentation"` or `aria-hidden="true"` is visible on the structural `<table>` elements. Screen readers will announce these as data tables. Add `role="presentation"` to all layout-only tables.

**Preheader uses Unicode invisible characters for padding**
```
͏ ͏ ͏  (U+034F)  and  ­ ­ ­  (U+00AD)
```
This is a widely-used technique to prevent the inbox preview from pulling in body copy. No functional issue, but some spam filters flag heavy use of non-printable Unicode. Current count appears high (~300+ characters of padding).

---

### 4. Personalization & Merge Tokens

The HTML source provided is truncated and does not show product/cart item blocks. Based on what is visible:

- No unrendered merge tokens (e.g. `{{first_name}}`, `[FIRST NAME]`) are visible in the header/preheader, which is correct.
- Cannot audit dynamic cart product blocks, pricing tokens, or fallback values from the truncated source. **Verify that all Attentive personalization tokens have non-empty fallback values configured at the platform level**, particularly for cart item name, image, price, and quantity.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot confirm from truncated source:**
- Physical mailing address (required by CAN-SPAM §5(a)(5))
- Unsubscribe link/mechanism (required by CAN-SPAM §5(a)(3))
- "Advertisement" identifier if applicable

The footer is not present in the provided HTML. Confirm both are present in the full render.

**Authentication (requires header inspection, not derivable from HTML):**
- Verify DKIM signature for `msgs.skechers.com`
- Verify SPF alignment: the `From:` domain (`msgs.skechers.com`) must be covered by an SPF record
- Verify DMARC policy on `skechers.com` is `p=quarantine` or `p=reject` and that both DKIM and SPF align

---

### 6. Email-to-Site Continuity

**UTM parameters not verifiable from HTML**
All destination URLs are wrapped in Attentive's `ls/click` redirect. The final destination and any UTM parameters cannot be read from the HTML source directly. To audit:
1. Resolve at least one tracked URL from each CTA category
2. Confirm UTM parameters include at minimum: `utm_source`, `utm_medium`, `utm_campaign`
3. For a cart abandonment flow, `utm_content` should distinguish individual product CTAs

**Expected landing page alignment**
The email subject and preheader ("Your Items Are Waiting", "You left something in your cart") imply deep-linking to an authenticated cart/bag page. Confirm that:
- The CTA links restore cart state (session-linked or token-linked URL), not just the homepage
- Unauthenticated sessions redirect to login, then back to cart — not to a 404 or generic homepage

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP click-tracking and image URLs | Enforce HTTPS at Attentive send settings; confirm image CDN supports HTTPS |
| High | Missing `http-equiv` on charset meta | Add `http-equiv="Content-Type"` to the meta tag |
| Medium | Logo `<img>` missing `alt` | Add `alt="Skechers"` |
| Medium | Layout tables lack `role="presentation"` | Add to all structural tables |
| Medium | UTM parameters unverified | Resolve sample CTAs and confirm UTM chain |
| Medium | Cart deep-link behavior | QA test unauth and auth flows end-to-end |
| Low | Empty `<title>` | Set to subject line or brand name |
| Low | Preheader Unicode padding volume | Reduce invisible char count; monitor spam score delta |
| Verify | CAN-SPAM footer (address + unsub) | Confirm present in full HTML render |
| Verify | SPF/DKIM/DMARC alignment | Review raw message headers from a live send |
## Recent history

- [[2026-04-11-you-absolutely-need-these]] — 6/10 (2026-04-11)
- [[2026-04-11-hey-there-come-back-and-shop-our-best-sellers]] — 4/10 (2026-04-11)
- [[2026-04-11-welcome-to-famous-your-15-offer-is-inside]] — 5/10 (2026-04-11)

