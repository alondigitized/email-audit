---
slug: 2026-04-17-your-cart-expires-soon
type: email
date: 2026-04-17
persona: walker
score: "6/10"
sender: SKECHERS
subject: Your cart expires soon!
tags: [email, score-6, sender/skechers]
---
# Your cart expires soon!
**Score:** 6/10 · **Type:** Email audit · **2026-04-17**
## Executive summary

- High-intent trigger (abandoned cart), weak follow-through. Conversion lift is being left on the table.

## What's working

- **Hero is clear.** The carted shoe (Skechers Slip-ins: Max Cushioning Arch Fit 2.0 – Azinah) is shown prominently with its name and a bold "COMPLETE YOUR ORDER" CTA. No ambiguity about what the email is for.
- **Confidence copy lands.** "YOU LIKED THESE / AND YOU WEREN'T WRONG." is punchy and brand-appropriate — light, confident, not pushy.
- **20% off incentive.** The discount module just below the hero is a meaningful nudge for a hesitant buyer.
- **Utility row.** Afterpay, Klarna, App Store, Curbside Pickup, and Find a Store give practical reassurance to fence-sitters.

## What's weak

- **Urgency is a bait-and-switch.** The subject line says the cart "expires soon" but nothing in the email reinforces this — no countdown, no expiry timestamp, no repeated urgency copy. The email body doesn't earn the subject line.
- **Module overload dilutes the primary CTA.** After "Complete Your Order," the email stacks: an All Best Sellers button, a 20% off banner, a full category nav (Women / Men / Kids / Clothing / New Arrivals / Sale), a texting opt-in, app download, BNPL logos, store locator, and follow us. That's ~8 secondary modules competing with a single recovery goal.
- **Product thumbnails in the hero are tiny.** Below the main carted item there's a row of small secondary shoe thumbnails with barely legible names — visual noise rather than useful cross-sell at this size.
- **20% off terms are unreadable.** The fine print under the discount banner is rendered too small to read, which undercuts trust rather than building it.
- **Navigation section looks like a website, not an email.** The plain-text-style "WOMEN / MEN / KIDS" nav adds no value in a cart-recovery context and makes the email feel templated and impersonal.

## Recommendations

- 1. **Add visible urgency to the body.** If the cart truly expires, show it: "Your cart expires in 24 hours" directly under the hero or on the CTA button.
- 2. **Cut or collapse the nav section.** Remove the Women/Men/Kids/Clothing browse nav entirely. It's a browse-mode experience inside a conversion-mode email.
- 3. **Reduce secondary modules to one.** Keep the 20% off incentive and drop or footnote everything else (texting opt-in, app download, BNPL) into a slim utility footer.
- 4. **Enlarge or cut the secondary product row.** Either make the cross-sell thumbnails large enough to be engaging, or remove them and keep focus on the one carted item.
- 5. **Make the discount terms legible.** Bump the font size or simplify the conditions so the 20% off feels trustworthy.
- | Priority | Action |
- |----------|--------|
- | High | Verify cart product/SKU merge tokens render correctly in full HTML; confirm cart items appear |
- | High | Resolve one Attentive redirect and confirm UTM parameters are appended (`utm_source`, `utm_medium`, `utm_campaign` at minimum) |
- | High | Pull raw SMTP headers and verify DKIM signature, SPF pass, and DMARC alignment on `msgs.skechers.com` |
- | High | Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are present (required by Gmail/Yahoo bulk sender rules) |
- | Medium | Add descriptive `alt` text to all `<img>` tags — verify in full source |
- | Medium | Set a descriptive `<title>` value (e.g., `"Skechers — Complete Your Purchase"`) |
- | Low | Standardize preheader padding to a single whitespace technique; remove soft hyphens |
- | Low | Switch click-tracking base URL to `https://` at the Attentive campaign level |

## Full review
## 2. Business Impact Score: 6 / 10

High-intent trigger (abandoned cart), weak follow-through. Conversion lift is being left on the table.

---

## 3. What's Working

- **Hero is clear.** The carted shoe (Skechers Slip-ins: Max Cushioning Arch Fit 2.0 – Azinah) is shown prominently with its name and a bold "COMPLETE YOUR ORDER" CTA. No ambiguity about what the email is for.
- **Confidence copy lands.** "YOU LIKED THESE / AND YOU WEREN'T WRONG." is punchy and brand-appropriate — light, confident, not pushy.
- **20% off incentive.** The discount module just below the hero is a meaningful nudge for a hesitant buyer.
- **Utility row.** Afterpay, Klarna, App Store, Curbside Pickup, and Find a Store give practical reassurance to fence-sitters.

---

## 4. What's Weak

- **Urgency is a bait-and-switch.** The subject line says the cart "expires soon" but nothing in the email reinforces this — no countdown, no expiry timestamp, no repeated urgency copy. The email body doesn't earn the subject line.
- **Module overload dilutes the primary CTA.** After "Complete Your Order," the email stacks: an All Best Sellers button, a 20% off banner, a full category nav (Women / Men / Kids / Clothing / New Arrivals / Sale), a texting opt-in, app download, BNPL logos, store locator, and follow us. That's ~8 secondary modules competing with a single recovery goal.
- **Product thumbnails in the hero are tiny.** Below the main carted item there's a row of small secondary shoe thumbnails with barely legible names — visual noise rather than useful cross-sell at this size.
- **20% off terms are unreadable.** The fine print under the discount banner is rendered too small to read, which undercuts trust rather than building it.
- **Navigation section looks like a website, not an email.** The plain-text-style "WOMEN / MEN / KIDS" nav adds no value in a cart-recovery context and makes the email feel templated and impersonal.

---

## 5. Recommendations

1. **Add visible urgency to the body.** If the cart truly expires, show it: "Your cart expires in 24 hours" directly under the hero or on the CTA button.
2. **Cut or collapse the nav section.** Remove the Women/Men/Kids/Clothing browse nav entirely. It's a browse-mode experience inside a conversion-mode email.
3. **Reduce secondary modules to one.** Keep the 20% off incentive and drop or footnote everything else (texting opt-in, app download, BNPL) into a slim utility footer.
4. **Enlarge or cut the secondary product row.** Either make the cross-sell thumbnails large enough to be engaging, or remove them and keep focus on the one carted item.
5. **Make the discount terms legible.** Bump the font size or simplify the conditions so the 20% off feels trustworthy.

---

## 6. Bottom Line

Skechers is using a high-intent cart-abandon trigger but treating it like a broadcast newsletter. Halving the module count and adding a real urgency mechanic would materially lift conversion.

---

## 7. Subject Line Analysis

- **Subject:** `Your cart expires soon!`
- **Length:** 23 characters
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `3`, Urgency `7`, Specificity `4`
- **Strengths:**
  - Short, direct, and instantly scannable
  - Urgency framing creates a loss-aversion hook
- **Weaknesses:**
  - "Expires soon" is vague — no time anchor (hours, day) reduces credibility
  - Zero personalization; could be anyone's cart for any brand
- **Alt A:** `Your Skechers Slip-ins are waiting — cart expires tonight`
- **Alt B:** `Don't lose your Arch Fit 2.0 — 20% off expires in 24 hrs`

---

## 8. Evidence

- **Overall purpose:** Abandoned cart recovery for one specific shoe (Max Cushioning Arch Fit 2.0 – Azinah).
- **Hero / primary value prop:** Large product image, shoe name, and "COMPLETE YOUR ORDER" CTA. Clean and on-task.
- **Membership / benefits:** None present.
- **Product discoverability / recommendation modules:** A row of small secondary shoe thumbnails appears below the hero. They are too small to read meaningfully and function more as filler than cross-sell. An "SHOP ALL BEST SELLERS" button follows.
- **Utility / secondary modules:** 20% off single pair banner → browse nav (Women/Men/Kids/Clothing/New Arrivals/Sale) → SMS opt-in → App Store download → Curbside Pickup → Shop Now Pay Later (Afterpay, Klarna) → Find a Store → Follow Us social row.
- **Bugs / friction / clarity issues:** No visible broken images. Fine print under the 20% off module is rendered at an unreadably small size. The secondary product row labels are too small to read at render resolution.

---

## Technical Audit

## Technical Audit — Skechers Cart Abandonment Email

---

### 1. Technical Summary
Cart abandonment email sent via Attentive (ESP: `msgs.skechers.com`). All click links are proxied through `skechers.attentivemail.com` for tracking. HTML is truncated so footer-dependent compliance checks are partial.

---

### 2. Link & Tracking Issues

**Issue — HTTP click-tracking URLs (High)**
All links use `http://` not `https://`:
```
http://skechers.attentivemail.com/ls/click?upn=u001...
```
Attentive typically redirects to HTTPS destinations, but the initial hop is unencrypted. This exposes the tracking URL to MITM interception and will trigger security warnings in some corporate mail gateways. Confirmed on both the web version link and the logo/CTA links.

**Issue — UTM parameters unverifiable (Medium)**
Destination URLs are fully opaque inside Attentive's redirect payload. Cannot confirm UTM attribution without resolving the redirect chain. If Attentive is not configured to append UTMs, clicks will appear as direct traffic in analytics.

---

### 3. Rendering & Accessibility

**Issue — Empty `<title>` tag (Low)**
```html
<title></title>
```
Some email clients (Outlook on Windows, Samsung Mail) render the `<title>` value as the tab/window label. An empty title is a missed opportunity and can cause confusion.

**Issue — Image `alt` text unverifiable (Medium)**
The truncated source shows image blocks without visible `alt` attributes in the rendered snippet:
```html
<div style="max-width:220px"><a href="http://skechers.attentivemail.com/...">
```
No `<img alt="...">` is visible before truncation. If images are blocked (common in Outlook), the email may render with blank image containers and no fallback text. Needs full source verification.

**Issue — Preheader uses two separate whitespace-padding techniques (Low)**
The preheader pads with both zero-width joiners (`͏` — U+034F) and soft hyphens (`­` — U+00AD):
```
͏ ͏ ͏ ... ­ ­ ­ ...
```
Mixing techniques is redundant. Some spam filters score on unusual Unicode density. Standard practice is one method (typically `&zwnj;` repeated).

**No issues found** — Mobile breakpoint CSS (`@media (max-width:620px)`) is present and covers key rows. MSO conditional table structure appears standard.

---

### 4. Personalization & Merge Tokens

**Issue — No recipient name personalization visible (Medium)**
No merge tokens (`{{first_name}}`, `%%FIRSTNAME%%`, or Attentive-style `{{subscriber.firstName}}`) appear in the visible HTML. For a cart abandonment trigger, first-name personalization in the subject or body is standard and measurably improves conversion. Needs full source verification to confirm absence.

**Issue — No cart item data visible (High)**
No product name, image, price, or SKU merge tokens appear in the truncated source. A cart abandonment email without rendering the actual abandoned items is a significant personalization gap — both technically and functionally. Cannot confirm from truncated HTML alone.

---

### 5. Compliance (CAN-SPAM / Unsubscribe / Authentication)

**Unverifiable from truncated source:**
- Physical mailing address (required by CAN-SPAM §5)
- Unsubscribe mechanism and its placement
- One-click unsubscribe (`List-Unsubscribe-Post` header per RFC 8058 / Gmail/Yahoo 2024 requirements)

**Issue — Sending domain authentication unverifiable without headers (High)**
Sending domain is `msgs.skechers.com`. Without raw SMTP headers, SPF/DKIM/DMARC alignment cannot be confirmed. Attentive manages authentication for clients, but `msgs.skechers.com` must have:
- SPF record covering Attentive's sending IPs
- DKIM signed with `d=msgs.skechers.com` or aligned domain
- DMARC policy on `skechers.com`

These should be verified against the full received headers.

---

### 6. Email-to-Site Continuity

**Issue — UTM attribution unconfirmable (Medium)**
Because all links resolve through `skechers.attentivemail.com/ls/click?...`, final destination UTMs are not inspectable from HTML alone. Attentive supports UTM auto-append via campaign settings. If not configured:
- GA4 / analytics will attribute clicks as `(direct)` or `(none)`
- Cart recovery attribution will be inaccurate

Should be verified by resolving one redirect and inspecting the final URL query string.

**Issue — Web version link routes through tracking redirect (Low)**
```
href="http://skechers.attentivemail.com/ls/click?upn=..."
```
The web version link is tracked, which is unusual — web version views are typically separate from click events. This can inflate click metrics.

---

### 7. Recommendations

| Priority | Action |
|----------|--------|
| High | Verify cart product/SKU merge tokens render correctly in full HTML; confirm cart items appear |
| High | Resolve one Attentive redirect and confirm UTM parameters are appended (`utm_source`, `utm_medium`, `utm_campaign` at minimum) |
| High | Pull raw SMTP headers and verify DKIM signature, SPF pass, and DMARC alignment on `msgs.skechers.com` |
| High | Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are present (required by Gmail/Yahoo bulk sender rules) |
| Medium | Add descriptive `alt` text to all `<img>` tags — verify in full source |
| Medium | Set a descriptive `<title>` value (e.g., `"Skechers — Complete Your Purchase"`) |
| Low | Standardize preheader padding to a single whitespace technique; remove soft hyphens |
| Low | Switch click-tracking base URL to `https://` at the Attentive campaign level |
## Recent history

- [[2026-04-16-loved-reviewed-and-ready-for-your-closet]] — 5/10 (2026-04-16)
- [[2026-04-16-your-15-off-is-waiting]] — 5/10 (2026-04-16)
- [[2026-04-16-59-98-skechers-yes-please]] — 6/10 (2026-04-16)

