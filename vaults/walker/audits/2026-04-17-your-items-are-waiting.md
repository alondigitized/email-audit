---
slug: 2026-04-17-your-items-are-waiting
type: email
date: 2026-04-17
persona: walker
score: "5/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-5, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 5/10 · **Type:** Email audit · **2026-04-17**
## Executive summary

- This is a standard abandoned-cart recovery email from Skechers. The hero is clean and the abandoned item is clearly surfaced, but the email quickly devolves into a generic best-sellers blast that dilutes the cart-recovery message. The single CTA above the fold is good; everything below it competes with it. The 20% off banner is the most compelling element and is buried mid-scroll.
- Functional but underperforming for a cart-recovery send. The discount is there but poorly positioned. The email does the minimum — shows the item, adds a CTA — without doing the persuasion work that moves a fence-sitter.

## What's working

- **Single abandoned item is front and center** with product name, image, and a clear "Complete Your Order" CTA button — no ambiguity about what the email is for.
- **20% off banner** is a real incentive. For a cart-recovery email, a discount offer can close the loop.
- **App + SMS opt-in + curbside pickup** modules add utility without being noisy.
- **Layout is clean and mobile-legible** — white space, readable type, no visual clutter in the hero zone.

## What's weak

- **The discount is buried.** The 20% off offer appears well below the fold, after a full "Shop All Best Sellers" module. It should be in or just below the hero — it's the main reason to complete the purchase now.
- **The headline is self-referential and weak.** "We Noticed You Noticing Us" is cute-clever brand-speak that delays the actual message. "Your cart is still waiting" in the subhead does more work but is visually subordinate.
- **Recommended products dilute cart recovery.** The "Great Options We Think You'll Love" row introduces four alternative shoes. This splits attention: instead of driving the cart conversion, it gives the user an escape hatch to browse instead.
- **No urgency or scarcity signal.** Nothing tells the reader why they should act now — no low stock warning, no expiry on the discount.
- **Product thumbnails in the recommendation row are very small** and the product names below them are nearly unreadable at email width.
- **Navigation-style links (Women / Men / Kids / Clothing / New Arrivals / Sale) read as a site nav**, not as a curated email experience. Adds length without adding value.

## Recommendations

- 1. **Move the 20% off offer into the hero**, directly beneath the product image. Pair it with an expiry ("Offer ends Sunday") to create urgency.
- 2. **Cut or defer the "Shop Additional Styles" nav block** — it belongs on the website, not in a cart-recovery email.
- 3. **Rewrite the headline** to something conversion-focused: "You left something behind" or "Still thinking it over? Here's 20% off."
- 4. **Replace the generic best-sellers row with a tighter social proof signal** — star rating of the abandoned item, or a single line like "4.7 stars · 12,000+ reviews."
- 5. **Add a scarcity or deadline hook** — even a soft one ("Selling fast in your size") near the CTA would improve urgency without being manipulative.
- | Priority | Issue | Action |
- |---|---|---|
- | High | All tracked links use `http://` | Update Attentive account settings to enforce HTTPS on click-tracking domain |
- | High | Image CDN uses `http://` | Re-point `image.emails.skechers.com` assets to HTTPS |
- | Medium | UTM presence unconfirmed | Resolve 3–5 sample redirect chains in QA; confirm UTMs survive the redirect |
- | Medium | Footer compliance unverified | Audit full HTML for physical address and unsubscribe link |
- | Medium | Layout tables missing `role="presentation"` | Add `role="presentation"` to all non-data tables |
- | Low | Empty `<title>` | Add a meaningful title (e.g., `Skechers — Complete Your Purchase`) |
- | Low | Logo `alt` text | Confirm `alt="Skechers"` (or equivalent) is present on the header logo `<img>` |
- | Low | Preheader Unicode padding | Reduce spacer character count; consider CSS-based preheader masking instead |

## Full review
## 1. Executive Summary

This is a standard abandoned-cart recovery email from Skechers. The hero is clean and the abandoned item is clearly surfaced, but the email quickly devolves into a generic best-sellers blast that dilutes the cart-recovery message. The single CTA above the fold is good; everything below it competes with it. The 20% off banner is the most compelling element and is buried mid-scroll.

---

## 2. Business Impact Score: 5/10

Functional but underperforming for a cart-recovery send. The discount is there but poorly positioned. The email does the minimum — shows the item, adds a CTA — without doing the persuasion work that moves a fence-sitter.

---

## 3. What's Working

- **Single abandoned item is front and center** with product name, image, and a clear "Complete Your Order" CTA button — no ambiguity about what the email is for.
- **20% off banner** is a real incentive. For a cart-recovery email, a discount offer can close the loop.
- **App + SMS opt-in + curbside pickup** modules add utility without being noisy.
- **Layout is clean and mobile-legible** — white space, readable type, no visual clutter in the hero zone.

---

## 4. What's Weak

- **The discount is buried.** The 20% off offer appears well below the fold, after a full "Shop All Best Sellers" module. It should be in or just below the hero — it's the main reason to complete the purchase now.
- **The headline is self-referential and weak.** "We Noticed You Noticing Us" is cute-clever brand-speak that delays the actual message. "Your cart is still waiting" in the subhead does more work but is visually subordinate.
- **Recommended products dilute cart recovery.** The "Great Options We Think You'll Love" row introduces four alternative shoes. This splits attention: instead of driving the cart conversion, it gives the user an escape hatch to browse instead.
- **No urgency or scarcity signal.** Nothing tells the reader why they should act now — no low stock warning, no expiry on the discount.
- **Product thumbnails in the recommendation row are very small** and the product names below them are nearly unreadable at email width.
- **Navigation-style links (Women / Men / Kids / Clothing / New Arrivals / Sale) read as a site nav**, not as a curated email experience. Adds length without adding value.

---

## 5. Recommendations

1. **Move the 20% off offer into the hero**, directly beneath the product image. Pair it with an expiry ("Offer ends Sunday") to create urgency.
2. **Cut or defer the "Shop Additional Styles" nav block** — it belongs on the website, not in a cart-recovery email.
3. **Rewrite the headline** to something conversion-focused: "You left something behind" or "Still thinking it over? Here's 20% off."
4. **Replace the generic best-sellers row with a tighter social proof signal** — star rating of the abandoned item, or a single line like "4.7 stars · 12,000+ reviews."
5. **Add a scarcity or deadline hook** — even a soft one ("Selling fast in your size") near the CTA would improve urgency without being manipulative.

---

## 6. Bottom Line

Skechers did the basics right — item is shown, CTA is clear — but this reads like a cart-recovery template that was padded with brand content. The discount is the email's best weapon and it's hidden. Fix the offer placement and remove the browse-distraction modules and this email would convert meaningfully better.

---

## 7. Subject Line Analysis

- **Subject:** `Your Items Are Waiting!`
- **Length:** 22 characters
- **Scores (1-10):** Clarity `7`, Curiosity `4`, Personalization `4`, Urgency `5`, Specificity `4`
- **Strengths:**
  - Short and scannable — renders fully in most mobile preview panes
  - Direct cart-recovery framing; recipient knows exactly what it is
- **Weaknesses:**
  - Generic — identical to thousands of other cart-recovery subject lines; no brand voice
  - No hook, no incentive teased, no personalization (no item name, no discount mention)
- **Alt A:** `Still thinking? Take 20% off your GO WALK Glide-Step`
- **Alt B:** `Alon, your cart has been waiting — here's 20% off to decide`

---

## 8. Evidence

- **Overall purpose:** Abandoned cart recovery for one specific product (Skechers Slip-ins: GO WALK Glide-Step 2.0 – Santiago).
- **Hero / primary value proposition:** Product image + name + single "Complete Your Order" CTA button. Clean execution, but no emotional pull or incentive at this level.
- **Membership / benefits section:** None visible. No loyalty program call-out.
- **Product discoverability / recommendation modules:** One 4-item "You'll Love" row (small thumbnails, hard to read names) + "Shop All Best Sellers" CTA bar. Both undercut the cart-recovery focus.
- **Utility / secondary modules:** 20% off banner (mid-scroll), SMS opt-in (text SKECHERS to 83638), app download (App Store + Google Play), curbside pickup, Shop Now Pay Later (Afterpay + Klarna), Find a Store, social follow links.
- **Bugs / friction / clarity issues:** No broken images observed. The recommendation row product labels are very small and low-contrast — readable on desktop, likely problematic on small mobile screens. The legal/fine-print footer block is long and dense but not unusual for retail.

---

## Technical Audit

## Technical Audit — SKECHERS "Your Items Are Waiting!" Abandoned Cart Email

---

### 1. Technical Summary

Email is built on a standard table-based layout via Attentive ESP with functional responsive breakpoints, but all tracking links and image assets are served over HTTP rather than HTTPS, and the truncated source prevents full compliance verification of the footer.

---

### 2. Link & Tracking Issues

**HTTP scheme on all tracked links** — every CTA and the "web version" link uses `http://skechers.attentivemail.com/ls/click?upn=...`. Modern email clients (Gmail, Outlook.com) flag or strip non-HTTPS redirects and some security gateways will block or rewrite them.

```
http://skechers.attentivemail.com/ls/click?upn=u001.LNc6Vor...
```

**Image CDN also HTTP** — `src="http://image.emails.skechers.com/..."`. Mixed-content warnings apply when viewed in a browser via the web version link.

**UTM parameters unverifiable** — destination URLs are fully wrapped inside Attentive's encoded redirect payload. Cannot confirm UTMs are appended to landing pages without resolving the redirects. This is an observability gap; redirect chain resolution is recommended in QA.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag** — `<title></title>` renders as an empty string in tab/window previews when the web version is opened in a browser.

**No `alt` text confirmed on logo image** — the `<img>` tag in `row-2 .column-1 .block-1` is truncated before the `alt` attribute is visible. Must verify in full source; screen readers will announce nothing or the raw URL if `alt=""` is absent.

**Layout tables lack `role="presentation"`** — all `<table>` elements used purely for layout should carry `role="presentation"` to suppress screen-reader table semantics. None observed in the visible portion.

**Preheader spacer technique uses excessive hidden Unicode** — the preheader div contains ~350+ invisible characters (U+034F COMBINING GRAPHEME JOINER `͏` and U+00AD SOFT HYPHEN `­`) for inbox preview padding. Aggressive spam filters (SpamAssassin, Proofpoint) can penalize high Unicode character density in hidden content.

---

### 4. Personalization & Merge Tokens

No first-name token visible in subject line or body header ("Your Items Are Waiting!" is generic). For an abandoned cart trigger — where the recipient identity and cart contents are known — absence of first-name and dynamic product block tokens is a data-binding gap worth confirming against the template's full source. No unresolved/broken merge token syntax (`{{`, `%%`, `*|`) is visible in the truncated source.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot verify from truncated source:**
- Physical mailing address (CAN-SPAM §5(a)(5))
- One-click or clearly labeled unsubscribe link
- Sender identification in footer

These must be confirmed in the full HTML footer. The sending domain `msgs.skechers.com` is consistent with the `From` header — no display-name spoofing observed.

**Authentication headers not assessable from HTML source.** SPF/DKIM/DMARC alignment for `msgs.skechers.com` should be validated via email headers (e.g., `Authentication-Results` header in a received copy).

---

### 6. Email-to-Site Continuity

**UTM chain unverifiable** — as noted in §2, all destination URLs are encoded inside Attentive redirect payloads. QA must resolve at least a sample of links and confirm:
- `utm_source`, `utm_medium`, `utm_campaign` are present on landing pages
- Abandoned cart product URLs resolve to the correct in-stock PDP, not a 404 or homepage

**HTTP → HTTPS redirect at landing page** — even if Skechers.com forces HTTPS, the initial link leaves the email over HTTP, creating an unnecessary redirect hop and potential tracking loss if the redirect strips query parameters.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | All tracked links use `http://` | Update Attentive account settings to enforce HTTPS on click-tracking domain |
| High | Image CDN uses `http://` | Re-point `image.emails.skechers.com` assets to HTTPS |
| Medium | UTM presence unconfirmed | Resolve 3–5 sample redirect chains in QA; confirm UTMs survive the redirect |
| Medium | Footer compliance unverified | Audit full HTML for physical address and unsubscribe link |
| Medium | Layout tables missing `role="presentation"` | Add `role="presentation"` to all non-data tables |
| Low | Empty `<title>` | Add a meaningful title (e.g., `Skechers — Complete Your Purchase`) |
| Low | Logo `alt` text | Confirm `alt="Skechers"` (or equivalent) is present on the header logo `<img>` |
| Low | Preheader Unicode padding | Reduce spacer character count; consider CSS-based preheader masking instead |
## Recent history

- [[2026-04-17-your-cart-expires-soon]] — 6/10 (2026-04-17)
- [[2026-04-16-loved-reviewed-and-ready-for-your-closet]] — 5/10 (2026-04-16)
- [[2026-04-16-your-15-off-is-waiting]] — 5/10 (2026-04-16)

