---
slug: 2026-04-07-did-you-forget-something
type: email
date: 2026-04-07
persona: walker
score: "6/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-6, sender/skechers]
---
# Did you forget something?
**Score:** 6/10 · **Type:** Email audit · **2026-04-07**
## Executive summary

- A competent but over-stuffed abandoned cart email. The core job — remind the shopper what they left behind and get them back to checkout — is done adequately in the top half. The bottom half buries the conversion signal under a BOGO promotion, category nav links, and a utility panel that belongs in a welcome series, not a cart recovery email. The email is asking the recipient to do too many things at once, and that ambiguity is costly at precisely the moment the customer needs a single, clear push.
- Functional, not optimized. The email will recover some cart abandoners, but it leaves significant conversion rate on the table through structural dilution and a missed urgency play.

## What's working

- **Hero clarity.** "READY TO CHECK OUT?" is unambiguous. The abandoned cart framing is immediately obvious and contextually appropriate.
- **Product visibility.** The left-behind item (Diamond Step / Arch Fit 2.0) gets its own hero slot with a clean product shot. The shopper knows exactly what they left.
- **Primary CTA placement.** "COMPLETE YOUR ORDER" sits directly below the product — logical sequencing.
- **Best sellers module.** Four product thumbnails add social proof and give browsers a secondary path without completely derailing the primary message.
- **Pay later callout.** Afterpay is surfaced, which can directly overcome a price hesitation — a legitimate objection handler for a cart recovery.

## What's weak

- **BOGO 50% off promo is buried below the fold.** This is the single biggest structural error. If there's a live promotion, it should be the primary urgency mechanism — but it's sandwiched between a best sellers grid and a wall of utility links. A shopper who bounces after the hero never sees it.
- **No urgency or scarcity signal.** Nothing communicates "your cart expires," "limited stock," or "this item is selling fast." Cart recovery emails live or die on urgency and there's none here.
- **Category nav dump.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE reads like a copy-paste of the site header. It adds no value in a cart recovery context and dilutes focus.
- **Utility module overload.** App download + text opt-in + store pickup + pay later + find a store is five asks in one block. Each is fine individually; together they read as noise.
- **Hero visual is generic.** The gold geometric background with a small icon is decorative but not emotionally driving. There's no urgency, desire, or personal tone in the image.

## Recommendations

- 1. **Move the BOGO promotion to the hero or directly below the CTA.** "And right now — buy one, get one 50% off" is a powerful conversion lever. Use it.
- 2. **Add a scarcity/urgency line under the product name.** Even generic copy like "Selling fast" or a cart expiry notice changes shopper behavior meaningfully.
- 3. **Cut the category nav entirely.** This is a cart email, not a browse email. Every distraction link is a conversion leak.
- 4. **Consolidate the utility module.** Keep Afterpay (objection handler) and Find a Store (omnichannel). Drop or move the app download and text opt-in to a post-purchase flow.
- 5. **Make the subject line's question feel answered faster.** The "Did you forget something?" hook is good — the body should immediately match that conversational tone rather than defaulting to generic banner copy.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP click-redirect domain | Update Attentive campaign config to enforce HTTPS on all tracked links |
- | High | Personalization tokens absent (if confirmed) | Verify cart product block uses dynamic merge fields; static cart abandonment emails have near-zero conversion utility |
- | Medium | Empty `<title>` | Set a meaningful value, e.g. `Skechers — Complete Your Purchase` |
- | Medium | UTM parameter verification | Run click-through QA on all CTAs and confirm UTM values and landing page destination |
- | Medium | Footer compliance elements | Confirm unsubscribe link and physical address are present in full source |
- | Low | Link underline suppression | Ensure CTA buttons have sufficient visual affordance to compensate for stripped `text-decoration` |
- | Low | Image `alt` attributes | Audit all `<img>` elements in full source for descriptive `alt` text |

## Full review
## Email Review: Skechers — "Did you forget something?"

---

### 1. Executive Summary

A competent but over-stuffed abandoned cart email. The core job — remind the shopper what they left behind and get them back to checkout — is done adequately in the top half. The bottom half buries the conversion signal under a BOGO promotion, category nav links, and a utility panel that belongs in a welcome series, not a cart recovery email. The email is asking the recipient to do too many things at once, and that ambiguity is costly at precisely the moment the customer needs a single, clear push.

---

### 2. Business Impact Score: **6 / 10**

Functional, not optimized. The email will recover some cart abandoners, but it leaves significant conversion rate on the table through structural dilution and a missed urgency play.

---

### 3. What's Working

- **Hero clarity.** "READY TO CHECK OUT?" is unambiguous. The abandoned cart framing is immediately obvious and contextually appropriate.
- **Product visibility.** The left-behind item (Diamond Step / Arch Fit 2.0) gets its own hero slot with a clean product shot. The shopper knows exactly what they left.
- **Primary CTA placement.** "COMPLETE YOUR ORDER" sits directly below the product — logical sequencing.
- **Best sellers module.** Four product thumbnails add social proof and give browsers a secondary path without completely derailing the primary message.
- **Pay later callout.** Afterpay is surfaced, which can directly overcome a price hesitation — a legitimate objection handler for a cart recovery.

---

### 4. What's Weak

- **BOGO 50% off promo is buried below the fold.** This is the single biggest structural error. If there's a live promotion, it should be the primary urgency mechanism — but it's sandwiched between a best sellers grid and a wall of utility links. A shopper who bounces after the hero never sees it.
- **No urgency or scarcity signal.** Nothing communicates "your cart expires," "limited stock," or "this item is selling fast." Cart recovery emails live or die on urgency and there's none here.
- **Category nav dump.** WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE reads like a copy-paste of the site header. It adds no value in a cart recovery context and dilutes focus.
- **Utility module overload.** App download + text opt-in + store pickup + pay later + find a store is five asks in one block. Each is fine individually; together they read as noise.
- **Hero visual is generic.** The gold geometric background with a small icon is decorative but not emotionally driving. There's no urgency, desire, or personal tone in the image.

---

### 5. Recommendations

1. **Move the BOGO promotion to the hero or directly below the CTA.** "And right now — buy one, get one 50% off" is a powerful conversion lever. Use it.
2. **Add a scarcity/urgency line under the product name.** Even generic copy like "Selling fast" or a cart expiry notice changes shopper behavior meaningfully.
3. **Cut the category nav entirely.** This is a cart email, not a browse email. Every distraction link is a conversion leak.
4. **Consolidate the utility module.** Keep Afterpay (objection handler) and Find a Store (omnichannel). Drop or move the app download and text opt-in to a post-purchase flow.
5. **Make the subject line's question feel answered faster.** The "Did you forget something?" hook is good — the body should immediately match that conversational tone rather than defaulting to generic banner copy.

---

### 6. Bottom Line

This email does the minimum required of a cart recovery email, but stops short of doing it well. The buried BOGO promotion is the most actionable fix: moving it above the fold or adjacent to the primary CTA could measurably lift conversion without any redesign. Strip the filler nav, add urgency, and this becomes a significantly stronger performer.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Abandoned cart recovery — shopper left an item in cart |
| **Hero / primary value prop** | "READY TO CHECK OUT?" with product image and "COMPLETE YOUR ORDER" CTA. Clear, direct, appropriately scoped |
| **Membership / benefits** | Not present — no loyalty program callout visible |
| **Product discoverability** | Best sellers row (4 thumbnails) below the hero; small images, names truncated at this render size |
| **Promotional module** | BOGO 50% off with "SHOP NOW" CTA — placed mid-email below best sellers, effectively below the fold |
| **Category navigation** | Text link row: WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE — filler |
| **Utility modules** | 5-block panel: text opt-in, app download, store pickup, pay later (Afterpay), find a store |
| **Footer** | Social icons, legal text, unsubscribe — standard |
| **Visual bugs** | None visible — all images render, text is legible, no broken elements observed |

---

## Technical Audit

## Technical Audit — Skechers "Did you forget something?" (Cart Abandonment)
**From:** hello@msgs.skechers.com | **ESP/Platform:** Attentive (`attentivemail.com`)

---

### 1. Technical Summary
Table-based cart abandonment email deployed via Attentive's click-tracking infrastructure. Two confirmed technical issues: all click-tracking redirects use HTTP rather than HTTPS, and the `<title>` element is empty.

---

### 2. Link & Tracking Issues

**HTTP redirect domain (confirmed)**
All tracked links route through `http://skechers.attentivemail.com/ls/click?upn=...` — the scheme is plaintext HTTP, not HTTPS. Example:
```
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor..."
```
This applies to both the "web version" link (row-1) and the logo link (row-2). Any intermediary can observe or modify redirect traffic. Attentive's infrastructure supports HTTPS — this appears to be a configuration issue.

**No UTM parameters visible on final destination URLs**
Because all links are opaque Attentive redirects, it is not possible to confirm UTM parameters are appended at redirect resolution from the source alone. This needs verification in a click-through test (see §6).

---

### 3. Rendering & Accessibility

**Empty `<title>` element**
```html
<head><title></title>...
```
Screen readers and some email clients (e.g., Apple Mail in certain modes) surface the `<title>` as the document label. An empty value degrades accessibility for AT users.

**Link underline/color suppression**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This global rule strips visual link affordances for all anchors in Gmail webmail. Combined with the `a[x-apple-data-detectors]` override, link identification relies entirely on surrounding context and design — no fallback for users who override stylesheets or use high-contrast modes.

**`lang="en"` present** — correct.

**Mobile media query present** — `@media (max-width:620px)` with stack/column overrides confirmed. No issues.

**Image `alt` attributes** — cannot confirm from truncated source. Must verify all `<img>` tags carry descriptive `alt` values, especially product images in a cart abandonment context where the product identity is functionally important.

---

### 4. Personalization & Merge Tokens

No merge tokens are visible in the truncated source (no `{{}}`, `%%`, `[[`, or similar syntax). For a cart abandonment email this is a functional gap — abandoned product name, image, price, and cart URL should be dynamically populated per recipient. If tokens exist in the non-truncated product block section, this finding does not apply; otherwise, the email is sending static content to all recipients rather than actual abandoned cart data.

---

### 5. Compliance

**Preheader present** — "You left something in your cart..." confirmed in source.

**Unsubscribe link** — not visible in truncated source. CAN-SPAM §5(a)(5) requires a functioning opt-out mechanism. Must confirm an unsubscribe link is present in the footer of the full source.

**Physical mailing address** — not visible in truncated source. CAN-SPAM §5(a)(4) requires a valid physical postal address. Must confirm presence in footer.

**Sender domain** — `msgs.skechers.com` is a dedicated sending subdomain, which is standard practice. SPF/DKIM/DMARC alignment cannot be assessed from HTML source alone.

---

### 6. Email-to-Site Continuity

All destination URLs are wrapped in Attentive's `upn=` redirect and not inspectable from the HTML. To confirm continuity:

- Click through each tracked link and inspect the resolved URL for `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` parameters.
- For a cart abandonment email, the CTA link should resolve to the recipient's specific cart or the abandoned product PDP, not the homepage or a generic category page. This cannot be verified from static HTML and requires a live send test with a seeded cart.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP click-redirect domain | Update Attentive campaign config to enforce HTTPS on all tracked links |
| High | Personalization tokens absent (if confirmed) | Verify cart product block uses dynamic merge fields; static cart abandonment emails have near-zero conversion utility |
| Medium | Empty `<title>` | Set a meaningful value, e.g. `Skechers — Complete Your Purchase` |
| Medium | UTM parameter verification | Run click-through QA on all CTAs and confirm UTM values and landing page destination |
| Medium | Footer compliance elements | Confirm unsubscribe link and physical address are present in full source |
| Low | Link underline suppression | Ensure CTA buttons have sufficient visual affordance to compensate for stripped `text-decoration` |
| Low | Image `alt` attributes | Audit all `<img>` elements in full source for descriptive `alt` text |
## Recent history

- [[2026-04-07-shop-adizero-evo-sl-running-shoes]] — 6/10 (2026-04-07)
- [[2026-04-06-test-mkg-us-na-u-sand-gender-en-04072026-b-v3one-pair-of-sandals-won-t-cut-it]] — 6.5/10 (2026-04-06)
- [[2026-04-06-test-mkg-us-na-u-sand-gender-en-04072026-b-v2one-pair-of-sandals-won-t-cut-it]] — 6.5/10 (2026-04-06)

