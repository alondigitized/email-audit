---
slug: 2026-04-27-did-you-forget-something
type: email
date: 2026-04-27
persona: walker
score: "5/10"
sender: SKECHERS
subject: Did you forget something?
tags: [email, score-5, sender/skechers]
---
# Did you forget something?
**Score:** 5/10 · **Type:** Email audit · **2026-04-27**
## Executive summary

- **Skechers | "Did you forget something?" | 2026-04-27**
- This is an abandoned cart email, and I can tell because the first thing I see is "READY TO CHECK OUT?" with a big orange "COMPLETE YOUR ORDER" button. I guess I left something in my cart. The featured shoe — a Skechers Slip-ins GO RUN Glide-Step Arch Fit — looks like it could be mine, and that's good. But below that hero, the email hands me a grid of products that are clearly women's shoes. A spray bottle shows up in the mix too. Then a 20% off banner appears — which is actually the most interesting part — but it's buried way down the page. By the time I'd get there on my phone, I'd have already lost interest. The email feels like it half-knows who I am, then forgets.
- Gets credit for the abandoned cart hook and a relevant hero product. Loses badly on the product recommendations (wrong gender) and burying the discount below the fold.

## What's working

- **The hero is correct.** The GO RUN Glide-Step Arch Fit is a men's Slip-in with an athletic build — that fits me. If I abandoned this cart, seeing my shoe front and center is the right call.
- **"READY TO CHECK OUT?" is plain-English and direct.** I don't need to guess what this email is asking me to do.
- **The 20% off offer is real money.** That's a reason to act. I'm a Plus member and I watch for deals like this.
- **"COMPLETE YOUR ORDER" button is big and orange.** Easy to tap on my phone. I appreciate that.

## What's weak

- **The product grid below the hero is women's shoes.** I can read the labels: "Women's Slip-ins: Contour Foam — Cozy Fit." Multiple colorways. Entirely not for me. This is the biggest miss in the whole email — someone didn't filter the recommendations by gender.
- **There's a black spray bottle in the product grid.** A replenishment spray, maybe? I don't know what that's doing next to my running shoes. It looks like a product feed error.
- **The 20% off banner is below all the product clutter.** I have to scroll past the women's shoes, the spray bottle, and "SHOP ALL BEST SELLERS" just to see the discount. That offer should be in the hero or right after it.
- **The navigation tiles (Women, Men, Kids, Clothing…) feel like a website footer, not an email.** I don't need a full sitemap dropped into my inbox.
- **The footer mentions Mother's Day Sale.** I'm a 62-year-old guy checking on my sneakers. This feels like it was stitched in from a different campaign.
- **"Let's Get Texting" and app download banners** — fine, but they're adding scroll length to an email that should be short and punchy.

## Recommendations

- 1. **Lock the product recommendation grid to men's styles** — or better yet, show me the exact shoe I left in the cart plus two or three similar men's Slip-ins. Don't show me women's colorways.
- 2. **Move the 20% off offer up.** Put it directly under the hero CTA or even in the hero itself. That's what closes the sale.
- 3. **Drop the spray bottle** from the carousel unless it was specifically in my cart. Random accessories feel like a data error.
- 4. **Cut the email in half.** Hero → my product → discount offer → single CTA. That's all an abandoned cart email needs to be.
- 5. **Remove the Mother's Day footer copy** for male customers. It's a small thing but it signals the email was built for someone else.
- | Priority | Issue | Action |
- |---|---|---|
- | High | HTTP tracking URLs | Switch to `https://` scheme on all Attentive click-tracking links |
- | High | Compliance elements unverifiable | Confirm physical address and unsubscribe link exist in footer; inspect `List-Unsubscribe` header in raw message source |
- | High | DKIM/DMARC alignment | Validate SPF/DKIM for `msgs.skechers.com`; confirm DMARC policy is enforced |
- | Medium | UTM parameters | Decode a live link and verify full UTM chain reaches the landing page |
- | Medium | `alt` text on product images | Add descriptive `alt` to all product `<img>` tags |
- | Medium | Link de-styling | Audit all CTAs for explicit inline `color` and `text-decoration` to counteract the `#MessageViewBody` rule |
- | Low | Empty `<title>` | Populate with a meaningful value |
- | Low | Responsive gap (601–620px) | Adjust breakpoint to `max-width:600px` or widen row-content max-width |
- | Low | Branded tracking CNAME | Provision a dedicated click-tracking subdomain to isolate sender reputation |

## Full review
---

## Walker Miles — Email Review
**Skechers | "Did you forget something?" | 2026-04-27**

---

### 1. Executive Summary

This is an abandoned cart email, and I can tell because the first thing I see is "READY TO CHECK OUT?" with a big orange "COMPLETE YOUR ORDER" button. I guess I left something in my cart. The featured shoe — a Skechers Slip-ins GO RUN Glide-Step Arch Fit — looks like it could be mine, and that's good. But below that hero, the email hands me a grid of products that are clearly women's shoes. A spray bottle shows up in the mix too. Then a 20% off banner appears — which is actually the most interesting part — but it's buried way down the page. By the time I'd get there on my phone, I'd have already lost interest. The email feels like it half-knows who I am, then forgets.

---

### 2. Business Impact Score: **5/10**

Gets credit for the abandoned cart hook and a relevant hero product. Loses badly on the product recommendations (wrong gender) and burying the discount below the fold.

---

### 3. What's Working

- **The hero is correct.** The GO RUN Glide-Step Arch Fit is a men's Slip-in with an athletic build — that fits me. If I abandoned this cart, seeing my shoe front and center is the right call.
- **"READY TO CHECK OUT?" is plain-English and direct.** I don't need to guess what this email is asking me to do.
- **The 20% off offer is real money.** That's a reason to act. I'm a Plus member and I watch for deals like this.
- **"COMPLETE YOUR ORDER" button is big and orange.** Easy to tap on my phone. I appreciate that.

---

### 4. What's Weak

- **The product grid below the hero is women's shoes.** I can read the labels: "Women's Slip-ins: Contour Foam — Cozy Fit." Multiple colorways. Entirely not for me. This is the biggest miss in the whole email — someone didn't filter the recommendations by gender.
- **There's a black spray bottle in the product grid.** A replenishment spray, maybe? I don't know what that's doing next to my running shoes. It looks like a product feed error.
- **The 20% off banner is below all the product clutter.** I have to scroll past the women's shoes, the spray bottle, and "SHOP ALL BEST SELLERS" just to see the discount. That offer should be in the hero or right after it.
- **The navigation tiles (Women, Men, Kids, Clothing…) feel like a website footer, not an email.** I don't need a full sitemap dropped into my inbox.
- **The footer mentions Mother's Day Sale.** I'm a 62-year-old guy checking on my sneakers. This feels like it was stitched in from a different campaign.
- **"Let's Get Texting" and app download banners** — fine, but they're adding scroll length to an email that should be short and punchy.

---

### 5. Recommendations

1. **Lock the product recommendation grid to men's styles** — or better yet, show me the exact shoe I left in the cart plus two or three similar men's Slip-ins. Don't show me women's colorways.
2. **Move the 20% off offer up.** Put it directly under the hero CTA or even in the hero itself. That's what closes the sale.
3. **Drop the spray bottle** from the carousel unless it was specifically in my cart. Random accessories feel like a data error.
4. **Cut the email in half.** Hero → my product → discount offer → single CTA. That's all an abandoned cart email needs to be.
5. **Remove the Mother's Day footer copy** for male customers. It's a small thing but it signals the email was built for someone else.

---

### 6. Bottom Line

I'd probably tap "COMPLETE YOUR ORDER" right from the top if the 20% off were visible near the hero. The shoe is right, the ask is clear, and the button is easy to hit. But the email made me feel like a stranger halfway through — women's shoes, a spray bottle, Mother's Day — and that erodes the trust the subject line built. Fix the product recommendations and move the discount up, and this is a solid cart recovery email for someone like me.

---

### 7. Subject Line Analysis

- **Subject:** `Did you forget something?`
- **Length:** 24 characters
- **Scores (1-10):** Clarity `7`, Curiosity `6`, Personalization `4`, Urgency `4`, Specificity `3`
- **Strengths:**
  - Conversational and casual — reads like a text from a buddy, not corporate spam
  - Short enough to fully render even on a small phone screen
- **Weaknesses:**
  - Zero specificity — doesn't mention the shoe, the brand, or a deal; I could assume it's a spam message from anyone
  - No urgency signal — no expiration, no "still available," nothing that makes me open it *now*
- **Alt A:** `Your Slip-ins are still waiting — 20% off today`
- **Alt B:** `Walker, your GO RUN Glide-Step is in your cart`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — no intentional preheader visible; inbox likely pulled the first text element or showed nothing useful
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (None to credit)
- **Weaknesses:**
  - Missing entirely — the subject line is doing all the work alone with no support
  - A wasted slot that could have surfaced the discount or the specific product name
- **Alt A:** `Your GO RUN Slip-ins are still in your cart — 20% off if you finish today`
- **Alt B:** `20% off a single pair. Don't leave your Skechers Slip-ins behind.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** "Did you forget something?" from Skechers lands as a clear abandoned cart nudge — I know this brand, I'm a Plus member, and if I actually left a shoe in my cart, I'd probably open it. The subject is friendly but vague enough that I might scroll past it on a busy morning if I don't immediately remember leaving something.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `4/10`
- **Rationale:** The hero and the top CTA are aimed right at me, so I'd likely tap "COMPLETE YOUR ORDER" early — but if I scroll even a little and hit the women's product grid, I'm confused enough to close the email and move on. The 20% off offer might pull me back if I get that far, but it's asking too much scrolling of a guy on his phone.

---

### 11. Evidence

- **Overall purpose:** Abandoned cart recovery — nudging me to complete a purchase I started
- **Hero / primary value proposition:** Skechers Slip-ins GO RUN Glide-Step Arch Fit with a "COMPLETE YOUR ORDER" CTA; appropriate product for this persona
- **Membership / benefits section:** Not present; no Plus member callout or point balance mention — missed opportunity for a loyal customer
- **Product discoverability / recommendation modules:** A product grid below the hero showing multiple colorways — labeled as Women's Slip-ins Contour Foam, plus what appears to be a replenishment spray; entirely wrong gender targeting for this customer
- **Utility / secondary modules:** "SHOP ALL BEST SELLERS" button; 20% off banner with "SHOP NOW"; category navigation tiles (Women, Men, Kids, Clothing, New Arrivals, Sale); "Let's Get Texting" SMS opt-in; App download (Apple/Google Play); Curbside Pickup; Shop Now Pay Later (Afterpay, Klarna); Find a Store; Follow Us social icons
- **Bugs / friction / clarity issues:** The spray bottle appearing alongside shoes in the product carousel looks out of place and may be a product feed misconfiguration; "Mother's Day Sale" language in the footer is visible and contextually irrelevant to this recipient

---

## Technical Audit

## Technical Audit — Skechers "Did you forget something?" Cart Abandonment

---

### 1. Technical Summary

Email is deployed via Attentive ESP with server-side click-wrapping. HTML source is truncated, so compliance and personalization sections are flagged as "unverifiable" where the relevant markup falls outside the visible range.

---

### 2. Link & Tracking Issues

**HTTP tracking URLs (not HTTPS)**
All click-tracked hrefs use the `http://` scheme:
```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6...
```
While Attentive's redirect server likely issues a 301 to HTTPS, the initial request is unencrypted. If the redirect chain is intercepted, referrer and UPN token are exposed. Preferred: `https://skechers.attentivemail.com/ls/click?...`

**Shared tracking domain, no branded CNAME**
Tracking domain is `skechers.attentivemail.com` (Attentive's shared infrastructure) rather than a dedicated CNAME such as `click.skechers.com`. Shared domains accumulate reputation from all Attentive customers. Branded CNAMEs are available on Attentive enterprise plans and improve deliverability scoring.

---

### 3. Rendering & Accessibility

**Empty `<title>` element**
```html
<head><title></title>...
```
Outlook desktop and some webmail clients surface `<title>` as the tab or preview label. Should contain a descriptive value (e.g., `"Skechers — Complete Your Purchase"`).

**Global link de-styling via `#MessageViewBody`**
```css
#MessageViewBody a { color: inherit; text-decoration: none; }
```
This rule targets Gmail's message body wrapper and strips color and underline from all anchor elements. Links inside that container will be visually indistinguishable from surrounding body text unless each `<a>` tag carries its own inline `style="color:#...; text-decoration:underline"`. Verify all CTAs have explicit inline link styles.

**Missing `alt` attributes on image blocks**
No `alt` text is visible on `<img>` tags in the inspectable portion. Cart abandonment emails often display product images; if images are blocked, recipients see blank cells with no fallback description. Each product image should carry a descriptive `alt` (e.g., `alt="Skechers D'Lites — Women's White/Black, Size 8"`).

**Responsive breakpoint mismatch**
`.row-content` is fixed at `width:600px` but the media query fires at `max-width:620px`. The 20px gap means the layout is not responsive between 601–620px viewport widths. Minor, but affects narrow desktop/tablet viewports.

---

### 4. Personalization & Merge Tokens

Source is truncated; the product grid and recipient name blocks are not visible. **Unable to confirm:**
- Cart item name, price, and image tokens are populated (no unresolved `{{token}}` or `%%token%%` literals visible, but cannot rule out their presence downstream)
- Recipient first-name token in the body copy
- Whether the cart items in the email match the actual abandoned cart session

Recommend running a seed-list send with a known abandoned-cart state and inspecting the rendered output for token bleed-through or empty product blocks.

---

### 5. Compliance

**Physical mailing address — unverifiable**
CAN-SPAM §5 requires a valid physical postal address. It was not present in the inspectable portion of the HTML. It typically appears in the footer, which is beyond the truncation point. Confirm it exists and is not hidden via `display:none` or zero-height CSS.

**Unsubscribe mechanism — unverifiable**
No unsubscribe link or `List-Unsubscribe` header is present in the visible HTML. These are mandatory under CAN-SPAM and GDPR. Confirm the footer (outside the truncated range) contains a one-click unsubscribe link and that Attentive is injecting a `List-Unsubscribe` / `List-Unsubscribe-Post` header at send time.

**Sending domain authentication**
From address: `hello@msgs.skechers.com`
ESP domain: `skechers.attentivemail.com`

Cannot verify SPF/DKIM/DMARC alignment from HTML alone. Recommend checking:
```
dig TXT msgs.skechers.com          # SPF record
dig TXT attentive._domainkey.msgs.skechers.com   # DKIM selector
```
DMARC policy on `skechers.com` should be at least `p=quarantine` with `rua` reporting enabled. Misalignment between the `From:` domain (`msgs.skechers.com`) and the DKIM signing domain would cause DMARC failures.

---

### 6. Email-to-Site Continuity

**UTM parameters — unverifiable from encoded URLs**
All destination URLs are wrapped in Attentive's UPN-encoded redirect. The encoded payload is opaque; it is not possible to confirm whether final destination URLs carry `utm_source`, `utm_medium`, `utm_campaign`, or `utm_content` parameters without decoding or test-clicking the links.

For a cart abandonment flow, minimum expected UTM schema:
```
utm_source=attentive
utm_medium=email
utm_campaign=cart_abandonment
utm_content=<product_sku_or_cta_position>
```

Decode one live link and verify the final URL. Missing UTM parameters will cause GA4/analytics to attribute the session to direct traffic, breaking funnel attribution.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | HTTP tracking URLs | Switch to `https://` scheme on all Attentive click-tracking links |
| High | Compliance elements unverifiable | Confirm physical address and unsubscribe link exist in footer; inspect `List-Unsubscribe` header in raw message source |
| High | DKIM/DMARC alignment | Validate SPF/DKIM for `msgs.skechers.com`; confirm DMARC policy is enforced |
| Medium | UTM parameters | Decode a live link and verify full UTM chain reaches the landing page |
| Medium | `alt` text on product images | Add descriptive `alt` to all product `<img>` tags |
| Medium | Link de-styling | Audit all CTAs for explicit inline `color` and `text-decoration` to counteract the `#MessageViewBody` rule |
| Low | Empty `<title>` | Populate with a meaningful value |
| Low | Responsive gap (601–620px) | Adjust breakpoint to `max-width:600px` or widen row-content max-width |
| Low | Branded tracking CNAME | Provision a dedicated click-tracking subdomain to isolate sender reputation |
## Recent history

- [[2026-04-27-whoa-this-deal-starts-now]] — 3/10 (2026-04-27)
- [[2026-04-27-top-mother-s-day-gifts]] — 3/10 (2026-04-27)
- [[2026-04-27-all-good-things-can-t-last-forever]] — 3/10 (2026-04-27)

