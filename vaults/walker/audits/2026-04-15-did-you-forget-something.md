---
slug: 2026-04-15-did-you-forget-something
type: email
date: 2026-04-15
persona: walker
score: "6/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-6, sender/skechers]
---
# Did you forget something?
**Score:** 6/10 · **Type:** Email audit · **2026-04-15**
## Executive summary

- A competent but unremarkable abandoned cart recovery email. The core mechanic works — hero, product reminder, recovery CTA — but the email suffers from a cluttered lower half that dilutes urgency and buries the primary action. The 20% off banner is the most compelling offer in the email and it's positioned *after* the product module, which is backwards. The subject line is generic and relies on a tired trope.
- Gets the job done at a baseline level. Misses easy wins on offer prominence and CTA hierarchy.

## What's working

- **Hero is clear and immediate.** "READY TO CHECK OUT?" with a yellow bordered treatment reads fast. The purpose of the email is unmistakable within 2 seconds.
- **Abandoned product is shown with name.** The specific shoe (Slip-ins: Arch Fit Glide-Step - Lane) is called out with an image and a dedicated "COMPLETE YOUR ORDER" button — good personalization signal.
- **20% off offer exists.** The discount banner is a meaningful recovery lever; the fact that it's here at all is a positive.
- **Supporting modules are organized.** Nav links (Women, Men, Kids, Clothing, New Arrivals, Sale), app download, curbside pickup, and store finder are present and legible.

## What's weak

- **The 20% off offer is buried below Best Sellers.** This is the most powerful conversion tool in the email and it appears third in the hierarchy. It should be in or adjacent to the hero.
- **Two "COMPLETE YOUR ORDER" CTAs with no offer attached.** The first two CTAs don't mention a discount — the reader has to scroll past a Best Sellers module to discover there's actually an incentive. This fragments the recovery pitch.
- **Best Sellers module interrupts the recovery funnel.** Sending someone who abandoned their cart into a browsing experience before they complete their order is a risky distraction. It may increase clicks but will likely reduce cart completion.
- **Subject line "Did you forget something?" is overused.** The vast majority of abandoned cart emails from major retailers use this exact line; it carries almost no differentiation.
- **Utility section is heavy.** App download, pay later, curbside pickup, and find-a-store all appear in the same lower block. Individually each is fine; stacked together they feel like a kitchen sink.

## Recommendations

- 1. **Move the 20% off offer into the hero module** — place it directly beneath the product image or embed it in the hero headline ("Ready to check out? Here's 20% off to seal the deal.").
- 2. **Collapse or remove the Best Sellers module** for this specific email. Save discovery for browse-abandonment flows; cart recovery should funnel to one action.
- 3. **Upgrade the subject line** — tie it to the discount or the specific product to stand out in inbox (see alternatives below).
- 4. **Add scarcity or time signal** — the email has no urgency mechanism. Even "offer ends Sunday" would meaningfully lift CTR.
- 5. **Reduce the utility block** to one or two items. App download and find-a-store are low-priority for someone who already has an item in their cart.
- | Priority | Item | Action |
- |---|---|---|
- | High | HTTP redirect links | Change all `href="http://skechers.attentivemail.com/..."` to `https://` |
- | High | `<meta>` charset | Add `http-equiv="Content-Type"` to charset meta tag |
- | Medium | UTM coverage | Decode redirect URLs and confirm UTM params on all CTAs |
- | Medium | Image `alt` text | Audit every `<img>` in the product block for descriptive `alt` attributes |
- | Medium | CAN-SPAM footer | Confirm unsubscribe link and physical address are present and legible |
- | Low | `<title>` element | Populate with a meaningful value (e.g., `"Skechers — Your Cart"`) |
- | Low | Authentication | Verify DKIM signature domain and DMARC policy alignment via raw headers |

## Full review
## SKECHERS Abandoned Cart Email Review

---

### 1. Executive Summary

A competent but unremarkable abandoned cart recovery email. The core mechanic works — hero, product reminder, recovery CTA — but the email suffers from a cluttered lower half that dilutes urgency and buries the primary action. The 20% off banner is the most compelling offer in the email and it's positioned *after* the product module, which is backwards. The subject line is generic and relies on a tired trope.

---

### 2. Business Impact Score: **6/10**

Gets the job done at a baseline level. Misses easy wins on offer prominence and CTA hierarchy.

---

### 3. What's Working

- **Hero is clear and immediate.** "READY TO CHECK OUT?" with a yellow bordered treatment reads fast. The purpose of the email is unmistakable within 2 seconds.
- **Abandoned product is shown with name.** The specific shoe (Slip-ins: Arch Fit Glide-Step - Lane) is called out with an image and a dedicated "COMPLETE YOUR ORDER" button — good personalization signal.
- **20% off offer exists.** The discount banner is a meaningful recovery lever; the fact that it's here at all is a positive.
- **Supporting modules are organized.** Nav links (Women, Men, Kids, Clothing, New Arrivals, Sale), app download, curbside pickup, and store finder are present and legible.

---

### 4. What's Weak

- **The 20% off offer is buried below Best Sellers.** This is the most powerful conversion tool in the email and it appears third in the hierarchy. It should be in or adjacent to the hero.
- **Two "COMPLETE YOUR ORDER" CTAs with no offer attached.** The first two CTAs don't mention a discount — the reader has to scroll past a Best Sellers module to discover there's actually an incentive. This fragments the recovery pitch.
- **Best Sellers module interrupts the recovery funnel.** Sending someone who abandoned their cart into a browsing experience before they complete their order is a risky distraction. It may increase clicks but will likely reduce cart completion.
- **Subject line "Did you forget something?" is overused.** The vast majority of abandoned cart emails from major retailers use this exact line; it carries almost no differentiation.
- **Utility section is heavy.** App download, pay later, curbside pickup, and find-a-store all appear in the same lower block. Individually each is fine; stacked together they feel like a kitchen sink.

---

### 5. Recommendations

1. **Move the 20% off offer into the hero module** — place it directly beneath the product image or embed it in the hero headline ("Ready to check out? Here's 20% off to seal the deal.").
2. **Collapse or remove the Best Sellers module** for this specific email. Save discovery for browse-abandonment flows; cart recovery should funnel to one action.
3. **Upgrade the subject line** — tie it to the discount or the specific product to stand out in inbox (see alternatives below).
4. **Add scarcity or time signal** — the email has no urgency mechanism. Even "offer ends Sunday" would meaningfully lift CTR.
5. **Reduce the utility block** to one or two items. App download and find-a-store are low-priority for someone who already has an item in their cart.

---

### 6. Bottom Line

The structural bones are right but the offer sequencing undermines the email's purpose. Surfacing the 20% off in the hero and removing the mid-funnel Best Sellers distraction would be a meaningful lift with minimal production effort. As-is, this email recovers some carts on intent alone — it's not converting the fence-sitters it should.

---

### 7. Subject Line Analysis

- **Subject:** `Did you forget something?`
- **Length:** 23 characters
- **Scores (1-10):** Clarity `7`, Curiosity `5`, Personalization `3`, Urgency `3`, Specificity `2`
- **Strengths:**
  - Short and readable at a glance
  - Conversational tone avoids feeling like a hard sell
- **Weaknesses:**
  - One of the most overused abandoned cart subject lines in retail email — near-zero differentiation
  - No mention of the discount, product, or any hook; creates no reason to open beyond guilt
- **Alt A:** `Your Slip-ins are still waiting — plus 20% off today`
- **Alt B:** `We saved your cart. Here's a little extra to finish.`

---

### 8. Evidence

- **Overall purpose:** Abandoned cart recovery targeting a user who left a specific shoe in their cart
- **Hero / primary value prop:** Yellow framed "READY TO CHECK OUT?" with "COMPLETE YOUR ORDER" CTA — clear, immediate, well-branded
- **Abandoned product module:** Single product (Skechers Slip-ins: Arch Fit Glide-Step - Lane) with image, name, and dedicated CTA button; personalization is present and legible
- **Best Sellers module:** Four shoe thumbnails with a "SHOP ALL BEST SELLERS" CTA — visually clean but strategically misplaced for a cart recovery email
- **20% off promotional banner:** Yellow/black treatment with "SHOP NOW" button; reads clearly but is positioned as the third content block rather than the first
- **Navigation / category links:** Women, Men, Kids, Clothing, New Arrivals, Sale — functional secondary nav
- **Utility modules:** LET'S GET TEXTING, DOWNLOAD THE APP, CURBSIDE PICKUP, SHOP NOW PAY LATER, FIND A STORE — all legible, no broken images visible
- **Social links:** Facebook and Instagram icons visible in follow section
- **Bugs / friction / clarity issues:** None visible — no broken images, overlapping text, or empty fields detected in the render

---

## Technical Audit

## Technical Audit — SKECHERS "Did you forget something?" Cart Abandonment Email

---

### 1. Technical Summary

Email is served via Attentive ESP (`msgs.skechers.com` / `skechers.attentivemail.com`). The HTML follows standard table-based layout with responsive media queries. Two concrete technical defects are confirmed from the visible source; several compliance items cannot be verified from the truncated HTML.

---

### 2. Link & Tracking Issues

**[CONFIRMED] All tracked links use `http://` instead of `https://`**

Both observed hrefs begin with `http://skechers.attentivemail.com/ls/click?upn=...`:
```
href="http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor..."
```
The redirect destination is likely HTTPS, but the initial hop is unencrypted. Some corporate mail gateways and security scanners flag `http://` redirect chains and may strip or rewrite them. Should use `https://`.

**[CANNOT CONFIRM] UTM parameters**

UTM params are not visible in the pre-redirect URL. They may be encoded in the `upn=` payload, or injected by the Attentive redirect. Verify decoded destination URLs carry `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` at minimum.

---

### 3. Rendering & Accessibility

**[CONFIRMED] `<meta>` charset tag missing `http-equiv` attribute**

Found:
```html
<meta content="text/html; charset=utf-8" />
```
Required for legacy Outlook (pre-2016) and some webmail clients:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Without `http-equiv`, older rendering engines may not apply the charset declaration.

**[CONFIRMED] `<title>` element is empty**

```html
<title></title>
```
Some email clients (notably Apple Mail) display the `<title>` value as a window/tab label. An empty title is not a breaking defect but is a missed fallback.

**[CONFIRMED] Link decoration suppressed globally via `#MessageViewBody`**

```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This Gmail scoping fix also removes underline from all body links, which reduces accessibility for users relying on visual link cues. Acceptable if CTA buttons are image-based or styled buttons, but verify no plain-text inline links are rendered invisible.

**[CANNOT CONFIRM] Image `alt` attributes**

HTML is truncated before `<img>` tags are reached. All product images in a cart abandonment email must carry descriptive `alt` text; verify this is the case for each `<img>` in the product block.

---

### 4. Personalization & Merge Tokens

**[CANNOT CONFIRM] Cart item tokens**

No dynamic merge tokens (e.g., `{{product_name}}`, `{{product_image}}`, `{{cart_url}}`) are visible in the truncated source. For a cart abandonment trigger, confirm:
- Product name, image, price, and URL tokens are populated at send time
- A fallback rendering path exists if cart data is unavailable (e.g., stale session)
- No raw unfired tokens (literal `{{...}}` strings) appear in rendered output

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**[CANNOT CONFIRM] Unsubscribe link and physical mailing address**

Both are required under CAN-SPAM. They are not present in the visible (header/body) portion of the HTML. They should appear in the footer. Verify:
- One-click unsubscribe link is present and functional
- Physical postal address of Skechers U.S.A., Inc. is in the footer
- Unsubscribe link is not hidden or styled below 10px font

**[CANNOT CONFIRM] Authentication headers**

SPF, DKIM, and DMARC cannot be inspected from HTML source alone. Verify via raw message headers:
- `DKIM-Signature` domain aligns with `msgs.skechers.com`
- `skechers.com` DMARC policy is enforced (not `p=none`)

---

### 6. Email-to-Site Continuity

**[CANNOT CONFIRM] Landing page alignment**

The "web version" link and logo link both route through `skechers.attentivemail.com` redirects. Without decoding the `upn=` payload or tracing the redirect chain, it is not possible to confirm:
- Cart page loads with correct session/product context
- UTM params are present and consistent across all CTAs
- Mobile landing page matches cart state shown in email

---

### 7. Recommendations

| Priority | Item | Action |
|---|---|---|
| High | HTTP redirect links | Change all `href="http://skechers.attentivemail.com/..."` to `https://` |
| High | `<meta>` charset | Add `http-equiv="Content-Type"` to charset meta tag |
| Medium | UTM coverage | Decode redirect URLs and confirm UTM params on all CTAs |
| Medium | Image `alt` text | Audit every `<img>` in the product block for descriptive `alt` attributes |
| Medium | CAN-SPAM footer | Confirm unsubscribe link and physical address are present and legible |
| Low | `<title>` element | Populate with a meaningful value (e.g., `"Skechers — Your Cart"`) |
| Low | Authentication | Verify DKIM signature domain and DMARC policy alignment via raw headers |
## Recent history

- [[2026-04-15-your-items-are-waiting]] — 6/10 (2026-04-15)
- [[2026-04-14-test-pro-us-nonpurclick-u-sitebundle-nonpurch-en-04152026spring-styles-20-off-th]] — 4/10 (2026-04-14)
- [[2026-04-14-test-pro-us-retpuropen-u-sitebundle-retail-en-04152026your-perfect-pair-bogo-50-]] — 4/10 (2026-04-14)

