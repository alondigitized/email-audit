---
slug: 2026-04-05-your-items-are-waiting
type: email
date: 2026-04-05
persona: walker
score: "5/10"
sender: SKECHERS
subject: Your Items Are Waiting!
tags: [email, score-5, sender/skechers]
---
# Your Items Are Waiting!
**Score:** 5/10 · **Type:** Email audit · **2026-04-05**
## Executive summary

- A functional but underwhelming cart abandonment email. The headline is cheeky ("We Noticed You Noticing Us...") which is a decent tone choice, but the execution falters quickly — the hero product is barely visible at thumbnail scale, the CTA appears once before a wall of navigation links dilutes focus, and a 20% off banner buried mid-email is the strongest conversion lever but lands too late. The email does the job, but leaves real revenue on the table.
- Adequate recovery attempt. The discount is there, the CTA exists, but the hierarchy is broken and the product itself is undersold.

## What's working

- **Tone is differentiated.** "We noticed you noticing us" is conversational and avoids the stale "You left something behind!" cliché.
- **20% off offer exists.** A discount code is present and clearly labeled with a "Shop Now" button — this is the single strongest conversion moment.
- **"Here's some more options we think you'll love"** cross-sell row is a smart addition that gives hesitant buyers alternatives.
- **Multi-channel footer** (app download, curbside pickup, find a store, ShopPay) covers offline recovery paths.

## What's weak

- **The abandoned product is too small.** The cart item renders at thumbnail scale with minimal text below it — it doesn't feel like the email is actually about this shoe. There's no larger hero image of the specific product the user left behind.
- **Single CTA before the fold, then noise.** "Complete Your Order" appears once, then the email immediately launches into a full site-nav-style category grid (Women, Men, Kids, Clothing, New Arrivals, Sale). This turns a conversion email into a browse email.
- **The 20% off discount is buried.** It sits below the cross-sell row, not above it. If a shopper almost bought at full price, the discount should be the first reason to come back — not an afterthought.
- **Cross-sell product images are small and low-contrast** against the white background. The shoes blend in and are hard to distinguish at a glance.
- **"Shop All Best Sellers" CTA** interrupts before the discount banner — competing CTAs fragment attention.

## Recommendations

- 1. **Move the 20% off banner to immediately below the hero product.** Lead with the product, then give them the reason to buy now.
- 2. **Make the abandoned product larger.** Dedicate a real hero image block to the exact item — show it at lifestyle scale, not thumbnail.
- 3. **Cut the category nav grid or move it to the footer.** Women / Men / Kids / Clothing links belong in a browse email, not a cart recovery email. They bleed urgency away.
- 4. **Add product details under the cart item** — price, colorway, size if available. Remind them exactly what they almost bought.
- 5. **Consolidate CTAs.** One primary action ("Complete Your Order" + discount) should dominate. Secondary CTAs (Best Sellers, cross-sells) should be visually subordinate.
- | Priority | Issue | Action |
- |---|---|---|
- | High | All tracking/image URLs use HTTP | Confirm Attentive account is configured to use HTTPS for click-tracking and image hosting; verify with ESP support |
- | High | Cart personalization tokens unverified | Pull a test-render with a seeded cart event; confirm no raw token syntax appears in fallback states |
- | Medium | Empty `<title>` | Add a descriptive title: `<title>Your Cart Items Are Waiting – Skechers</title>` |
- | Medium | Footer compliance not verified | Confirm full-source includes physical address and functioning one-click unsubscribe |
- | Medium | UTM parameters on final URLs | Decode one redirect URL from a test send and confirm UTM chain is intact |
- | Low | `#MessageViewBody a` suppresses all link decoration | Scope this rule more narrowly or ensure all linked text has explicit inline color |
- | Low | Ordinal row/column selectors in responsive CSS | Switch to semantic class names in the template to prevent silent breakage on re-order |

## Full review
## SKECHERS — "Your Items Are Waiting!" | Cart Abandonment Review

---

### 1. Executive Summary

A functional but underwhelming cart abandonment email. The headline is cheeky ("We Noticed You Noticing Us...") which is a decent tone choice, but the execution falters quickly — the hero product is barely visible at thumbnail scale, the CTA appears once before a wall of navigation links dilutes focus, and a 20% off banner buried mid-email is the strongest conversion lever but lands too late. The email does the job, but leaves real revenue on the table.

---

### 2. Business Impact Score: **5/10**

Adequate recovery attempt. The discount is there, the CTA exists, but the hierarchy is broken and the product itself is undersold.

---

### 3. What's Working

- **Tone is differentiated.** "We noticed you noticing us" is conversational and avoids the stale "You left something behind!" cliché.
- **20% off offer exists.** A discount code is present and clearly labeled with a "Shop Now" button — this is the single strongest conversion moment.
- **"Here's some more options we think you'll love"** cross-sell row is a smart addition that gives hesitant buyers alternatives.
- **Multi-channel footer** (app download, curbside pickup, find a store, ShopPay) covers offline recovery paths.

---

### 4. What's Weak

- **The abandoned product is too small.** The cart item renders at thumbnail scale with minimal text below it — it doesn't feel like the email is actually about this shoe. There's no larger hero image of the specific product the user left behind.
- **Single CTA before the fold, then noise.** "Complete Your Order" appears once, then the email immediately launches into a full site-nav-style category grid (Women, Men, Kids, Clothing, New Arrivals, Sale). This turns a conversion email into a browse email.
- **The 20% off discount is buried.** It sits below the cross-sell row, not above it. If a shopper almost bought at full price, the discount should be the first reason to come back — not an afterthought.
- **Cross-sell product images are small and low-contrast** against the white background. The shoes blend in and are hard to distinguish at a glance.
- **"Shop All Best Sellers" CTA** interrupts before the discount banner — competing CTAs fragment attention.

---

### 5. Recommendations

1. **Move the 20% off banner to immediately below the hero product.** Lead with the product, then give them the reason to buy now.
2. **Make the abandoned product larger.** Dedicate a real hero image block to the exact item — show it at lifestyle scale, not thumbnail.
3. **Cut the category nav grid or move it to the footer.** Women / Men / Kids / Clothing links belong in a browse email, not a cart recovery email. They bleed urgency away.
4. **Add product details under the cart item** — price, colorway, size if available. Remind them exactly what they almost bought.
5. **Consolidate CTAs.** One primary action ("Complete Your Order" + discount) should dominate. Secondary CTAs (Best Sellers, cross-sells) should be visually subordinate.

---

### 6. Bottom Line

The email has the right ingredients — discount, cross-sell, product reminder — but they're assembled in the wrong order. Fix the hierarchy: product → discount → one CTA → alternatives. Right now it reads like a marketing newsletter that happens to mention an abandoned cart. A proper cart recovery email should feel personal and urgent, not like a homepage replica.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Cart abandonment recovery with a discount incentive |
| **Hero / primary value prop** | "We Noticed You Noticing Us... Your cart is still waiting" — good copy, but the hero image is the product at small scale, not a commanding visual |
| **Membership / benefits** | None visible — no loyalty points, no member-exclusive framing |
| **Product discoverability / recommendation modules** | One cross-sell row with 3–4 shoes labeled "Here's Some More Great Options We Think You'll Love" — present but visually small |
| **Utility / secondary modules** | App download (Apple/Google), ShopPay, curbside pickup, Find a Store — full utility strip in footer |
| **Bugs / friction / clarity issues** | No broken images visible. The discount code text appears legible. No visible rendering errors — issues are structural/hierarchy, not technical |

---

## Technical Audit

## Technical Audit — Skechers "Your Items Are Waiting!" Abandoned Cart Email

---

### 1. Technical Summary
Standard Attentive-platform abandoned cart email using table-based layout with responsive CSS. Primary technical concerns are HTTP (non-HTTPS) tracking links and an empty `<title>` element; the truncated source prevents full footer/compliance verification.

---

### 2. Link & Tracking Issues

**HTTP tracking URLs — all click links use `http://`, not `https://`**
Evidence: every `<a href>` routes through `http://skechers.attentivemail.com/ls/click?upn=...`
- Web version link: `http://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorXOZu...`
- Logo/homepage link: `http://skechers.attentivemail.com/ls/click?upn=u001.LNc6VorXOZu...`

Modern clients (Gmail, Outlook 365, Apple Mail) flag or strip HTTP redirects in 2025+. The final destination is presumably HTTPS but the intermediate hop is not, creating a mixed-security chain and potential HSTS warnings.

**Image CDN also HTTP:**
`<img src="http://image.emails.skecher…"` — truncated but protocol is clearly `http://`. HTTP image loads trigger "mixed content" warnings in secure webmail contexts and may be blocked entirely.

---

### 3. Rendering & Accessibility

**Empty `<title>` tag:**
`<title></title>` — blank. Some clients (Outlook desktop, Samsung Mail) display the title in the tab or notification bar. An empty title degrades accessibility for screen readers that use the document title as a context anchor.

**`#MessageViewBody a` global link override:**
```css
#MessageViewBody a { color: inherit; text-decoration: none }
```
This suppresses all link underlines and inherits whatever text color surrounds them. Any linked text that doesn't have an explicit inline color is invisible as a link — particularly a risk for plain-text fallback renderings and low-vision users relying on underline cues.

**Preheader padding technique:**
The preheader uses both U+034F (combining grapheme joiner: `͏`) and U+00AD (soft hyphen: `­`) characters interleaved to pad whitespace and prevent inbox preview bleed. This is functional but the mixing of two different invisible-character strategies is unusual and can cause unexpected rendering in certain screen readers (NVDA, VoiceOver) that may announce soft hyphens.

**Mobile breakpoint targets row/column by ordinal class name:**
```css
.row-21 .column-1 .block-1.paragraph_block td.pad>div { font-size:19px!important }
```
Highly brittle selectors — any template re-ordering breaks the responsive font-size overrides silently. Not a current bug, but a maintenance risk.

---

### 4. Personalization & Merge Tokens

The source is truncated before the cart item block renders, so abandoned cart product tokens (product name, image, price, cart URL) cannot be verified. **Cannot confirm or clear.** The sending system is Attentive; if dynamic blocks are not populated at render time, fallback content or exposed token syntax (`{{product.name}}`, etc.) may display to recipients. This requires verification against a live send preview or Attentive template test.

Subject line "Your Items Are Waiting!" and preheader "You left something in your cart" are generic — no first-name personalization token visible in the preheader string.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot fully verify from truncated source.** The footer — which must contain physical mailing address and unsubscribe mechanism per CAN-SPAM §5 — is not present in the provided HTML excerpt. These must be confirmed in the full source.

**Sending domain:** `hello@msgs.skechers.com` (Attentive subdomain)
- SPF/DKIM/DMARC alignment should be verified for `msgs.skechers.com`. Attentive manages this subdomain; confirm DMARC policy is `p=quarantine` or `p=reject` with proper alignment. Not verifiable from HTML alone.

**`<html lang="en">` is present** — correct.

---

### 6. Email-to-Site Continuity (UTM Params, Landing Page Alignment)

All links route through Attentive's `attentivemail.com` redirect before resolving to final destinations. Final destination URLs are not visible in the provided source (they are encoded in the `upn=` parameter). Therefore:

- **UTM parameter presence on final URLs cannot be confirmed** without decoding the redirect chain or inspecting a clicked URL.
- Attentive's platform can append UTMs at redirect resolution time; verify in the Attentive campaign settings that `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` are configured for this send.
- This is an abandoned cart trigger — the cart recovery link should deep-link to the recipient's specific cart session, not a generic cart or homepage. This must be tested with a real triggered send; not verifiable from static HTML.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | All tracking/image URLs use HTTP | Confirm Attentive account is configured to use HTTPS for click-tracking and image hosting; verify with ESP support |
| High | Cart personalization tokens unverified | Pull a test-render with a seeded cart event; confirm no raw token syntax appears in fallback states |
| Medium | Empty `<title>` | Add a descriptive title: `<title>Your Cart Items Are Waiting – Skechers</title>` |
| Medium | Footer compliance not verified | Confirm full-source includes physical address and functioning one-click unsubscribe |
| Medium | UTM parameters on final URLs | Decode one redirect URL from a test send and confirm UTM chain is intact |
| Low | `#MessageViewBody a` suppresses all link decoration | Scope this rule more narrowly or ensure all linked text has explicit inline color |
| Low | Ordinal row/column selectors in responsive CSS | Switch to semantic class names in the template to prevent silent breakage on re-order |
## Recent history

- [[2026-04-05-adistar-xlg-2-0-dynamic-form-and-heritage-style]] — 5/10 (2026-04-05)
- [[2026-04-04-your-cart-expires-soon]] — 5/10 (2026-04-04)
- [[2026-04-04-start-with-one-get-the-second-for-less]] — 6/10 (2026-04-04)

