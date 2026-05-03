---
slug: 2026-05-02-welcome-to-skechers-4fd3dc8f-f565-48d0-a84d-
type: email
date: 2026-05-02
persona: evelyn-w-fka5f
score: "9/10"
sender: SKECHERS
subject: Welcome to Skechers!
tags: [email, score-9, sender/skechers]
---
# Welcome to Skechers!
**Score:** 9/10 · **Type:** Email audit · **2026-05-02**
## Executive summary

- This is a solid welcome email doing exactly what it should: confirm the relationship, deliver an incentive, and introduce the brand's range. The 20% first-purchase offer is clearly stated with a visible code and CTA. Skechers Plus membership is promoted intelligently alongside the offer. The main weaknesses are predictable for a category template: no personalization, no product specificity, a cluttered lower third that dilutes focus, and a subject line that buries the 20% offer — the strongest hook the brand has at this moment.

## What's working

- **The 20% offer is front and center.** Code is specific (`WEL20-TDOV4KXS2`), visually formatted in a distinct block, and the "SHOP NOW" button is immediately beneath. This is the right priority.
- **Style category tiles (STREET / CASUAL / ATHLETIC / WORK)** are a smart onboarding tool — they tell a new subscriber what the brand sells and invite self-segmentation. Real product imagery makes each category tangible.
- **Skechers Plus is well-pitched.** The blue banner is visually distinct, the three benefits (member offers, free shipping/returns, birthday surprises) are laid out with icons, and "JOIN NOW" is a separate CTA that doesn't compete with the primary shop CTA.
- **Pay-later logos (Afterpay, Klarna)** reduce purchase friction for a first-time buyer at the consideration stage — appropriate placement in a welcome email.
- **No render issues.** Images load, text is legible, layout is intact at all visible widths.

## What's weak

- **Subject line doesn't mention the 20% offer.** "Welcome to Skechers!" is a missed opportunity — the best hook this email has is the discount, and it's not in the subject.
- **No personalization anywhere.** No first name, no reference to the category or entry point that drove the signup. This is mass-broadcast in a triggered wrapper.
- **Lower third is cluttered and unfocused.** Below the Plus block, the email fires off: text links, SMS opt-in, app download, curbside pickup, buy-now-pay-later, store locator, another Skechers Plus callout, and social follows — all stacked without visual breathing room. Each module dilutes the next.
- **Hero lifestyle image is generic.** A seated woman in casual/athletic shoes doesn't speak to any specific buyer intent or product category — it's wall-to-wall brand, not targeted aspiration.
- **No specific product featured.** First-purchase welcome emails perform better when anchored to one "hero" product or bestseller list — something to click on, not just a category map.
- **No expiration on the 20% offer.** Visible urgency (even a soft deadline) would lift conversion.

## Recommendations

- 1. **Revise the subject to lead with the offer:** e.g. `Your 20% off welcome gift is inside` — saves the "Welcome to Skechers!" copy for the body.
- 2. **Add an expiry to the promo code.** Even a 30-day window shown in the body increases conversion urgency without being manipulative.
- 3. **Trim the lower third.** Pick two utility modules (app + store locator, or SMS + pay-later) and remove the rest from the welcome email. Save the full suite for a second onboarding send.
- 4. **Surface one bestseller or recommended product.** A single hero product module (top-rated walking shoe, #1 comfort shoe, etc.) bridges the gap between "here's a discount" and "here's what to buy with it."
- 5. **Add a preference-capture link** below the style tiles: "Tell us what you shop for → get better recommendations." This turns the welcome email into a segmentation tool for future sends.
- | Priority | Issue | Fix |
- |---|---|---|
- | **P0** | Doubled-domain merge error | Audit the merge token generating the `/www.Skechers.com` path segment; add ESP-level validation to reject sends with unresolved tokens |
- | **P1** | 13 HTTP image sources | Force HTTPS on `image.emails.skechers.com` CDN (or update all `src` attributes); update MovableInk pixel URL to `https://www.ink1000.com/...` |
- | **P1** | List-Unsubscribe / RFC 8058 headers | Confirm headers are set at the ESP/MTA level and not dropped by the relay; required for Gmail/Yahoo bulk sender compliance |
- | **P2** | Missing alt text on content images | Add descriptive alt text to hero and unnamed PNGs; images-off recipients currently see a blank email body |
- | **P2** | Authentication-Results opacity | Verify SPF/DKIM/DMARC alignment on `emails.skechers.com` subdomain via a direct header capture (bypass relay) |
- | **P3** | Protocol-relative Return Path pixel | Use explicit `https://pixel.app.returnpath.net/...` |

## Full review
---

## Email Review: Skechers Welcome

---

### 1. Executive Summary

This is a solid welcome email doing exactly what it should: confirm the relationship, deliver an incentive, and introduce the brand's range. The 20% first-purchase offer is clearly stated with a visible code and CTA. Skechers Plus membership is promoted intelligently alongside the offer. The main weaknesses are predictable for a category template: no personalization, no product specificity, a cluttered lower third that dilutes focus, and a subject line that buries the 20% offer — the strongest hook the brand has at this moment.

---

### 2. Business Impact Score

**9/10**

Rubric criteria that were TRUE:
- Sender is a recognizable brand (Skechers, national retailer)
- One concrete offer visible: 20% off first purchase with a specific personalized promo code
- Primary CTA is unambiguous: "SHOP NOW" button, visually distinct
- Visual hierarchy is clear: hero + offer block is the first thing the eye lands on
- No render bugs: image loads, text is legible, layout is intact throughout
- Subject/hero copy references persona's focus area (footwear, which is directly Walker's domain)
- Loyalty / member benefits visible: Skechers Plus module shows 3 explicit benefits
- Offer feels honest: asterisk fine print is present and readable at bottom, no bait-and-switch visible
- Welcome email = always timely; triggered upon opt-in, not stale seasonal language

---

### 3. What's Working

- **The 20% offer is front and center.** Code is specific (`WEL20-TDOV4KXS2`), visually formatted in a distinct block, and the "SHOP NOW" button is immediately beneath. This is the right priority.
- **Style category tiles (STREET / CASUAL / ATHLETIC / WORK)** are a smart onboarding tool — they tell a new subscriber what the brand sells and invite self-segmentation. Real product imagery makes each category tangible.
- **Skechers Plus is well-pitched.** The blue banner is visually distinct, the three benefits (member offers, free shipping/returns, birthday surprises) are laid out with icons, and "JOIN NOW" is a separate CTA that doesn't compete with the primary shop CTA.
- **Pay-later logos (Afterpay, Klarna)** reduce purchase friction for a first-time buyer at the consideration stage — appropriate placement in a welcome email.
- **No render issues.** Images load, text is legible, layout is intact at all visible widths.

---

### 4. What's Weak

- **Subject line doesn't mention the 20% offer.** "Welcome to Skechers!" is a missed opportunity — the best hook this email has is the discount, and it's not in the subject.
- **No personalization anywhere.** No first name, no reference to the category or entry point that drove the signup. This is mass-broadcast in a triggered wrapper.
- **Lower third is cluttered and unfocused.** Below the Plus block, the email fires off: text links, SMS opt-in, app download, curbside pickup, buy-now-pay-later, store locator, another Skechers Plus callout, and social follows — all stacked without visual breathing room. Each module dilutes the next.
- **Hero lifestyle image is generic.** A seated woman in casual/athletic shoes doesn't speak to any specific buyer intent or product category — it's wall-to-wall brand, not targeted aspiration.
- **No specific product featured.** First-purchase welcome emails perform better when anchored to one "hero" product or bestseller list — something to click on, not just a category map.
- **No expiration on the 20% offer.** Visible urgency (even a soft deadline) would lift conversion.

---

### 5. Recommendations

1. **Revise the subject to lead with the offer:** e.g. `Your 20% off welcome gift is inside` — saves the "Welcome to Skechers!" copy for the body.
2. **Add an expiry to the promo code.** Even a 30-day window shown in the body increases conversion urgency without being manipulative.
3. **Trim the lower third.** Pick two utility modules (app + store locator, or SMS + pay-later) and remove the rest from the welcome email. Save the full suite for a second onboarding send.
4. **Surface one bestseller or recommended product.** A single hero product module (top-rated walking shoe, #1 comfort shoe, etc.) bridges the gap between "here's a discount" and "here's what to buy with it."
5. **Add a preference-capture link** below the style tiles: "Tell us what you shop for → get better recommendations." This turns the welcome email into a segmentation tool for future sends.

---

### 6. Bottom Line

Above-average welcome email that checks the structural boxes — clear offer, legible layout, brand introduction, and loyalty upsell — but falls short of being truly effective because the best headline (20% off) never makes it to the inbox. A subject line tweak and one specific product recommendation would meaningfully lift both open and conversion rates.

---

### 7. Subject Line Analysis

- **Subject:** `Welcome to Skechers!`
- **Length:** 21 characters
- **Scores (1-10):** Clarity `8`, Curiosity `2`, Personalization `1`, Urgency `1`, Specificity `3`
- **Strengths:**
  - Short and clean; renders fully on any device with no truncation
  - Brand name is prominent and unambiguous — zero confusion about sender
- **Weaknesses:**
  - The 20% off offer — the email's most actionable hook — is completely absent
  - No curiosity gap, no urgency, no reason to open beyond expecting a confirmation
- **Alt A:** `Your 20% off welcome gift — use code inside`
- **Alt B:** `Welcome! Here's 20% off your first Skechers order`

---

### 8. Preview Text Analysis

- **Preview:** `WEL-49385` *(or similar reference number — a system token appears to be leaking at the top of the email)*
- **Length:** ~10 characters
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None
- **Weaknesses:**
  - A reference/confirmation number rendering at the top of the email is leaking into the inbox preview slot — it adds nothing and wastes the most valuable real estate after the subject line
  - A new subscriber sees: `Welcome to Skechers! | WEL-49385` — which reads as noise
- **Alt A:** `Enjoy 20% off your first order — your code is waiting inside`
- **Alt B:** `New to Skechers? Start with 20% off + free shipping with Skechers Plus`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `7/10`
- **Signals counted:** sender display name recognizable (Skechers), subject relevant to persona's focus area (footwear), subject under 50 chars, no spam signals, cadence feels right (first email after opt-in), subject somewhat concrete (welcome implies benefit)
- **Rationale:** A new subscriber will open because it's the expected confirmation email and Skechers is a known brand. But the subject gives no reason to hurry — someone busy could easily defer and forget, missing the 20% offer entirely.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Signals counted:** hero offer visible without scrolling, primary CTA in persona's category (footwear), offer reduces price (20% off), brand voice consistent and trusted, no friction (direct SHOP NOW), CTA copy includes a verb + noun
- **Rationale:** The discount is real and the CTA is clear, which drives a solid baseline click rate. But no specific product to click on and no expiry on the code both suppress urgency — a browser might save the code for later and never use it.

---

### 11. Evidence

- **Overall purpose:** Triggered welcome email for a new Skechers account or newsletter subscriber. Confirms the relationship and drives first purchase.
- **Hero / primary value proposition:** 20% off first purchase with unique promo code, delivered above the fold with a "SHOP NOW" CTA.
- **Membership / benefits section:** Skechers Plus module (blue banner, mid-email) promotes 3 benefits — member-only offers, free shipping/returns, birthday surprises — with a "JOIN NOW" CTA. Well-positioned as a secondary conversion goal.
- **Product discoverability / recommendation modules:** Four style category tiles (STREET, CASUAL, ATHLETIC, WORK) with real product photography. No single hero product, no bestseller list, no personalized recommendations.
- **Utility / secondary modules:** Text links for WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE; SMS opt-in; app download (App Store + Google Play); Curbside Pickup; Afterpay + Klarna; Find a Store; Skechers Plus footer callout; social follow (Facebook, Instagram, YouTube).
- **Bugs / friction / clarity issues:** A reference/order number (`WEL-49385` or similar) appears to be rendering at the very top of the email — this is the most visible issue in the render. It likely leaks into inbox preview text, replacing what should be a curated preheader. No other visible render bugs.

---

## Technical Audit

## Technical Audit — Skechers Welcome Email

**From:** SKECHERS `<no-reply@emails.skechers.com>`
**Subject:** Welcome to Skechers!

---

### 1. Technical Summary

One confirmed broken URL (doubled-domain merge error) will cause a dead link for affected recipients. Pervasive HTTP image sourcing across 13+ assets risks silent blocking in security-conscious clients (Outlook, iOS Mail with content blocking enabled).

---

### 2. Link & Tracking Issues

**[FAIL] Doubled-domain merge error**
- URL: `http://www.skechers.com/www.Skechers.com`
- A merge token that was supposed to inject a path segment instead injected a full domain. This produces a 404 or redirect loop. The case mismatch (`skechers.com` vs `Skechers.com`) confirms the token was unresolved and fell back to a raw default value.

**25 tracking links skipped** — click.emails.skechers.com redirects were not probed. No broken links confirmed among them, but cannot rule out redirect chain issues without full resolution.

---

### 3. Rendering & Accessibility

**HTTP image sources (13 assets)** — the following CDN domain serves assets over HTTP rather than HTTPS: `image.emails.skechers.com`. Affected assets include the logo, hero image, app store badges, social icons, AfterPay logo, and several unnamed PNGs. Modern clients (Gmail, Apple Mail) and corporate proxies may block or warn on mixed-content images, rendering the email visually broken.

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
... (10 more)
```

**MovableInk tracking pixel also uses HTTP:**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```
This pixel will likely be silently dropped in HTTPS-enforcing clients, degrading open-tracking fidelity for the MovableInk personalization layer.

**Missing alt text (5 images):**
- `o.gif` (MovableInk pixel) — `aria-hidden="true"` is present, acceptable for a tracking pixel
- `bcc16007...jpg` (hero image) — no alt; content is invisible to screen readers and images-off recipients
- `49468f73...png` — no alt
- `00100b23...png` — no alt
- `fc08601a...png` — no alt

The favicon link in `<head>` also uses HTTP: `http://image.emails.nl.skechers.com/...`. Low impact in email clients but inconsistent.

**`text-size-adjust: none`** applied globally via `* {}` selector. This suppresses iOS Safari's automatic font scaling for accessibility; acceptable for controlled email layouts but noted as a deliberate accessibility tradeoff.

---

### 4. Personalization & Merge Tokens

**[FAIL] Unresolved merge token** — the doubled-domain URL (`http://www.skechers.com/www.Skechers.com`) is the direct result of a failed merge substitution. The token was expected to produce a relative path; instead the fallback or default value was itself a full URL, concatenated onto the base. This should be caught by ESP send-time validation.

No other unresolved `%%`, `{{`, or `${` tokens visible in the truncated source.

---

### 5. Compliance

**[WARN] List-Unsubscribe header not captured** — the AgentMail relay did not surface this header. If absent at the MTA level (not merely unrelayed), this violates Gmail and Yahoo bulk sender requirements (enforced since Feb 2024 for >5k/day senders). Skechers almost certainly qualifies.

**[WARN] List-Unsubscribe-Post absent** — RFC 8058 one-click unsubscribe is required by Gmail/Yahoo for bulk senders. Without it, Gmail shows a less prominent unsubscribe path and may apply deliverability penalties.

**[WARN] Authentication-Results not captured** — SPF/DKIM/DMARC pass status unknown via relay. The sending domain `emails.skechers.com` uses a dedicated subdomain (positive signal), but alignment cannot be confirmed from available data.

**Pixel: `pixel.app.returnpath.net`** is loaded over HTTP with no protocol in the src (`pixel.app.returnpath.net/pixel.gif?r=...`). This is a protocol-relative URL that will inherit the page/email context — in an HTTPS-capable client it may upgrade correctly, but it is fragile.

Physical mailing address and unsubscribe link presence could not be confirmed from the truncated HTML — standard for Skechers commercial email but should be verified in full source.

---

### 6. Email-to-Site Continuity

UTM parameters cannot be assessed on the 25 skipped tracking links (all routed through `click.emails.skechers.com`). The broken-URL bug (`/www.Skechers.com`) would land on a dead or untracked destination, severing any attribution for that CTA entirely.

No evidence of UTM stripping or redirect loops on confirmed links — insufficient data to assess further.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **P0** | Doubled-domain merge error | Audit the merge token generating the `/www.Skechers.com` path segment; add ESP-level validation to reject sends with unresolved tokens |
| **P1** | 13 HTTP image sources | Force HTTPS on `image.emails.skechers.com` CDN (or update all `src` attributes); update MovableInk pixel URL to `https://www.ink1000.com/...` |
| **P1** | List-Unsubscribe / RFC 8058 headers | Confirm headers are set at the ESP/MTA level and not dropped by the relay; required for Gmail/Yahoo bulk sender compliance |
| **P2** | Missing alt text on content images | Add descriptive alt text to hero and unnamed PNGs; images-off recipients currently see a blank email body |
| **P2** | Authentication-Results opacity | Verify SPF/DKIM/DMARC alignment on `emails.skechers.com` subdomain via a direct header capture (bypass relay) |
| **P3** | Protocol-relative Return Path pixel | Use explicit `https://pixel.app.returnpath.net/...` |
