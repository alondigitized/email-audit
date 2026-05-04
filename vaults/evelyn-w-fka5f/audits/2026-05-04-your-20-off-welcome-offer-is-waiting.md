---
slug: 2026-05-04-your-20-off-welcome-offer-is-waiting
type: email
date: 2026-05-04
persona: evelyn-w-fka5f
score: "8/10"
sender: SKECHERS
subject: Your 20% Off Welcome Offer is waiting!
tags: [email, score-8, sender/skechers]
---
# Your 20% Off Welcome Offer is waiting!
**Score:** 8/10 · **Type:** Email audit · **2026-05-04**
## Executive summary

- This is a triggered welcome email from SKECHERS delivering a personalized discount code (20% off first order) to a new subscriber. The hero is clean and the offer is unmissable above the fold, but the email quickly loses focus: a dense sizing-grid module, a SKECHERS Plus upsell, six navigation category links, a text-marketing recruitment block, three utility links, and two BNPL logos all compete below the fold. For a welcome email — which should convert one action — there are too many asks. The 20% code is the star and the email buries it under layers of secondary content.

## What's working

- **Offer clarity**: The 20% off code appears in the first scroll viewport, in bold, with the code string spelled out. There is zero ambiguity about the value proposition.
- **SHOP NOW CTA**: Visually distinct dark button in the hero — easy to tap on mobile.
- **Skechers Plus upsell**: The membership module is well-structured with icons and three benefit bullets (member offers, free shipping + 90-day returns, birthday surprises). Good secondary conversion path.
- **BNPL reassurance**: Showing afterpay and Klarna logos reduces purchase anxiety for higher-priced items — smart for a first-time buyer.
- **Size grid**: Including Women's, Men's, and Kid's size ranges is unusual but could reduce friction for new customers who worry about fit.

## What's weak

- **Module sprawl**: After the hero, the email has at least 8 distinct functional sections — sizing grid, Plus upsell, 6 nav links, SMS opt-in, 3 utility links, BNPL, Plus reminder, social follow. For a welcome email, this is excessive and dilutes the one goal: get the first purchase.
- **"SHOP NOW" CTA is generic**: The button doesn't specify what to shop or why. "Shop Women's Shoes," "Shop New Arrivals," or "Use My 20% Off" would all convert better.
- **No urgency or deadline**: The subject says "is waiting!" but no expiry date appears anywhere in the email body. The urgency implied by the subject isn't reinforced.
- **Size grid module is confusing**: Presenting size ranges (e.g., "5–5.5, 6–6.5, 7–7.5") as clickable links before the recipient has seen any products feels out of place and premature. It adds scroll length without a direct payoff.
- **SMS opt-in mid-email**: Recruiting for a separate channel inside a welcome email splits attention. This should be its own triggered send later in the onboarding sequence.
- **Hero image is generic**: "Something FOR EVERYONE" is a brand awareness message, not a conversion message. A first-order email should show a specific product category or bestseller the recipient might actually buy.

## Recommendations

- 1. **Cut the email by 40%**: Remove the sizing grid module and the SMS recruitment block entirely. Those belong in later onboarding touches.
- 2. **Add a code expiry**: Even "Offer expires in 7 days" printed beneath the code would meaningfully lift urgency and conversions.
- 3. **Make the CTA specific**: Change "SHOP NOW" to "Shop with My 20% Off" or pick a hero category ("Shop Women's Sneakers") and link directly to a category page rather than the homepage.
- 4. **Lead the hero with product, not tagline**: Replace "Something for Everyone" with a single hero product or category shot — show a bestselling shoe and let the 20% off code tie directly to it.
- 5. **Move Plus upsell to a dedicated touch**: SKECHERS Plus recruitment is a real CTA that competes with the purchase CTA. Move it to email #3 in the welcome series after the first purchase is converted.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | P0 | Broken merge-token URL | Identify the SFMC data extension field that produced `www.Skechers.com` as a raw value; fix data or template logic and re-send to any recipient who clicked that link |
- | P1 | HTTP image URLs | Update all `image.emails.skechers.com` asset references to `https://`; contact MovableInk to update pixel endpoint |
- | P1 | Missing `List-Unsubscribe-Post` | Add RFC 8058 one-click header to SFMC send configuration to maintain Gmail/Yahoo deliverability compliance |
- | P2 | Missing alt text on 5 images | Add descriptive `alt` attributes; use `alt=""` for purely decorative images |
- | P2 | Plain-text URL ratio | Manually author a plain-text alternative rather than auto-generating from HTML |
- | P3 | `maximum-scale=1` | Remove this attribute or replace with `user-scalable=yes` |
- | P3 | Verify `Authentication-Results` | Pull raw headers from a direct inbox delivery (not relay) to confirm SPF/DKIM/DMARC alignment |

## Full review
---

## 1. Executive Summary

This is a triggered welcome email from SKECHERS delivering a personalized discount code (20% off first order) to a new subscriber. The hero is clean and the offer is unmissable above the fold, but the email quickly loses focus: a dense sizing-grid module, a SKECHERS Plus upsell, six navigation category links, a text-marketing recruitment block, three utility links, and two BNPL logos all compete below the fold. For a welcome email — which should convert one action — there are too many asks. The 20% code is the star and the email buries it under layers of secondary content.

---

## 2. Business Impact Score

**8/10**

Rubric criteria TRUE:
- Hero copy explicitly surfaces the 20% off welcome offer
- SKECHERS is a recognizable brand the recipient subscribed to
- Concrete offer visible: 20% off with a specific promo code (WEL20-TDQV4KHXS2)
- Primary CTA is unambiguous: "SHOP NOW" button in the hero banner
- Visual hierarchy is clear at the top — offer banner leads, hero image reinforces
- No visible render bugs — text, images, and layout all appear clean
- Loyalty/member benefits are visible (SKECHERS Plus section with perks listed)
- Offer feels honest — code is shown upfront, terms footnoted

Criteria NOT met: No seasonal or time-specific campaign framing; demographic/model targeting is generic "Something for Everyone," not persona-matched.

---

## 3. What's Working

- **Offer clarity**: The 20% off code appears in the first scroll viewport, in bold, with the code string spelled out. There is zero ambiguity about the value proposition.
- **SHOP NOW CTA**: Visually distinct dark button in the hero — easy to tap on mobile.
- **Skechers Plus upsell**: The membership module is well-structured with icons and three benefit bullets (member offers, free shipping + 90-day returns, birthday surprises). Good secondary conversion path.
- **BNPL reassurance**: Showing afterpay and Klarna logos reduces purchase anxiety for higher-priced items — smart for a first-time buyer.
- **Size grid**: Including Women's, Men's, and Kid's size ranges is unusual but could reduce friction for new customers who worry about fit.

---

## 4. What's Weak

- **Module sprawl**: After the hero, the email has at least 8 distinct functional sections — sizing grid, Plus upsell, 6 nav links, SMS opt-in, 3 utility links, BNPL, Plus reminder, social follow. For a welcome email, this is excessive and dilutes the one goal: get the first purchase.
- **"SHOP NOW" CTA is generic**: The button doesn't specify what to shop or why. "Shop Women's Shoes," "Shop New Arrivals," or "Use My 20% Off" would all convert better.
- **No urgency or deadline**: The subject says "is waiting!" but no expiry date appears anywhere in the email body. The urgency implied by the subject isn't reinforced.
- **Size grid module is confusing**: Presenting size ranges (e.g., "5–5.5, 6–6.5, 7–7.5") as clickable links before the recipient has seen any products feels out of place and premature. It adds scroll length without a direct payoff.
- **SMS opt-in mid-email**: Recruiting for a separate channel inside a welcome email splits attention. This should be its own triggered send later in the onboarding sequence.
- **Hero image is generic**: "Something FOR EVERYONE" is a brand awareness message, not a conversion message. A first-order email should show a specific product category or bestseller the recipient might actually buy.

---

## 5. Recommendations

1. **Cut the email by 40%**: Remove the sizing grid module and the SMS recruitment block entirely. Those belong in later onboarding touches.
2. **Add a code expiry**: Even "Offer expires in 7 days" printed beneath the code would meaningfully lift urgency and conversions.
3. **Make the CTA specific**: Change "SHOP NOW" to "Shop with My 20% Off" or pick a hero category ("Shop Women's Sneakers") and link directly to a category page rather than the homepage.
4. **Lead the hero with product, not tagline**: Replace "Something for Everyone" with a single hero product or category shot — show a bestselling shoe and let the 20% off code tie directly to it.
5. **Move Plus upsell to a dedicated touch**: SKECHERS Plus recruitment is a real CTA that competes with the purchase CTA. Move it to email #3 in the welcome series after the first purchase is converted.

---

## 6. Bottom Line

A competent welcome email with the right core mechanics — recognizable brand, clear offer, specific code — undermined by a cluttered body that turns one clear conversion goal into eight competing ones. Clean up the module architecture and add a deadline and this goes from a 6 to an 8.

---

## 7. Subject Line Analysis

- **Subject:** `Your 20% Off Welcome Offer is waiting!`
- **Length:** 39 characters
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `4`, Urgency `5`, Specificity `7`
- **Strengths:**
  - Specific discount amount (20%) stated upfront — no click required to understand the value
  - Under 50 characters — renders cleanly on mobile without truncation
- **Weaknesses:**
  - "is waiting!" implies urgency but no deadline exists in the email body — false promise
  - "Your" is the only personalization; no name, no category, no purchase-history signal
- **Alt A:** `Welcome — here's your 20% off code (expires Sunday)`
- **Alt B:** `First order = 20% off. Your code is inside.`

---

## 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — The first visible text in the email body is the hero banner copy: "REMINDER: USE YOUR CODE FOR 20% OFF YOUR FIRST ORDER," which in most clients will bleed into the preheader slot and directly repeat the subject line's offer messaging.
- **Length:** ~47 characters if the banner text renders as preheader
- **Scores (1-10):** Complements subject `2`, Specificity `5`, Clarity `6`, Inbox-fit `2`
- **Strengths:**
  - The text is real copy (not an unsubscribe link)
  - The discount detail is accurate
- **Weaknesses:**
  - Echoes the subject ("20% Off" appears in both) — wastes the preheader slot
  - No new information is added: recipient sees "20% Off Welcome Offer is waiting! / REMINDER: USE YOUR CODE FOR 20% OFF" — redundant
- **Alt A:** `Use code WEL20-TDQV4KHXS2 at checkout — plus free shipping with SKECHERS Plus`
- **Alt B:** `New here? Grab 20% off anything — no minimum, no catch.`

---

## 9. Open Likelihood (persona-grounded)

- **Score:** `7/10`
- **Signals counted:** sender recognizable (SKECHERS), subject concrete (specific % off), subject relevant (welcome offer = I just subscribed), preview text is real copy, subject under 50 chars, no spam signals, cadence feels right (triggered welcome, not batch promo)
- **Rationale:** Seven clean inbox signals make this an easy open. The subject is short and specific, and SKECHERS is a trusted sender. What holds it back: the preview text repeats the subject rather than adding new information, and there is no credible urgency signal beyond "is waiting."

---

## 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Signals counted:** hero offer visible without scrolling, offer reduces price (20% off), loyalty member benefits visible (SKECHERS Plus section), brand voice consistent and trusted, no friction / no broken images
- **Rationale:** The price reduction and above-the-fold code are genuine click motivators, but the generic "SHOP NOW" CTA and the absence of a featured product or category to land on reduce confidence. There's no reason to click *now* — no deadline and no specific product to desire.

---

## 11. Evidence

- **Overall purpose:** Triggered welcome email for a new SKECHERS subscriber, delivering a first-order discount code.
- **Hero / primary value proposition:** 20% off first order using code WEL20-TDQV4KHXS2 — shown in a dark banner immediately beneath the logo, with a "SHOP NOW" CTA button. Hero image below shows models and reinforces "Something FOR EVERYONE."
- **Membership / benefits section:** SKECHERS Plus module (blue/dark box) mid-email — promotes member-only offers, free shipping + 90-day returns, and birthday surprises. Includes a "JOIN NOW" CTA. Clean icon-driven layout.
- **Product discoverability / recommendation modules:** Size grid (Women's, Men's, Kid's) showing clickable size ranges — unusual approach that substitutes for a product recommendation grid. Six category nav links (WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE) serve as a minimal browse scaffold.
- **Utility / secondary modules:** App download (App Store + Google Play), Curbside Pickup icon, Find a Store. Afterpay and Klarna logos. SKECHERS Plus free-shipping reminder. Instagram / TikTok / Facebook follow icons.
- **Bugs / friction / clarity issues:** No broken images visible. No missing fields. The sizing grid renders cleanly but its purpose is unclear without product context — it looks like an orphaned navigation element. Overall the email is pixel-clean but architecturally cluttered.

---

## Technical Audit

## Technical Audit — Skechers Welcome Offer Email

---

### 1. Technical Summary

One confirmed broken destination URL from a failed template merge, plus a broad HTTP-image problem affecting ~14 assets. Compliance signal is degraded by missing `List-Unsubscribe` headers and an unverifiable authentication chain through the relay.

---

### 2. Link & Tracking Issues

**[FAIL] Doubled-domain merge error — broken destination**
URL: `http://www.skechers.com/www.Skechers.com`
A template variable (e.g. `%%SITE_URL%%` or similar) was not resolved before send; the literal fallback text `www.Skechers.com` was concatenated onto the base domain instead of being substituted. Any click on the linked element 404s.

**[INFO] 22 click-tracking links skipped**
All outbound links route through `click.emails.skechers.com` redirects, which is expected. Cannot verify final destination UTM parameters without following redirects.

**[INFO] ReturnPath open-pixel served over HTTP**
`pixel.app.returnpath.net/pixel.gif` — non-HTTPS. Modern clients (Gmail, Apple Mail) will block this silently, degrading open-rate accuracy.

---

### 3. Rendering & Accessibility

**[WARN] 14 images served over HTTP — blocking risk**
All images hosted at `image.emails.skechers.com/lib/fe3115...` use `http://` rather than `https://`. Gmail, Yahoo, and Apple Mail proxy or block mixed-content images. Affected assets include the Skechers logo, app store badges, social icons, AfterPay logo, and decorative images. The MovableInk tracking pixel (`http://www.ink1000.com/...`) is also HTTP-only.

Samples:
- `http://image.emails.skechers.com/lib/fe3115.../dde00662...png` (Skechers logo)
- `http://image.emails.skechers.com/lib/fe3115.../49468f73...png` (missing alt)
- `http://image.emails.skechers.com/lib/fe3115.../07cb60b5...png` (AfterPay)

**[WARN] 5 images missing `alt` text**
Filenames: `o.gif`, `bcc16007-..jpg`, `49468f73-..png`, `00100b23-..png`, `fc08601a-..png`. Images-off rendering (common in corporate clients) will leave blank gaps with no fallback text.

**[WARN] `maximum-scale=1` in viewport meta**
`<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />` — disables pinch-to-zoom on mobile. Fails WCAG 1.4.4 (Resize Text).

**[WARN] Dark mode explicitly suppressed**
The `@media (prefers-color-scheme: dark)` block forces `background-color: #ffffff !important` and `body { background-color: white !important; }`. This actively overrides the OS dark mode preference rather than adapting to it — technically intentional but worth flagging as a deliberate accessibility trade-off.

**[WARN] `text-size-adjust: none` on `*` selector**
Globally disabling text size adjustment can break accessibility scaling in some mobile browsers.

---

### 4. Personalization & Merge Tokens

**[FAIL] At least one unresolved merge token**
The doubled-domain URL (`http://www.skechers.com/www.Skechers.com`) is the visible consequence of a merge token that evaluated to its raw variable text rather than a resolved value. The ESP (Salesforce Marketing Cloud, based on `click.emails.skechers.com` and `beacon.krxd.net` patterns) likely had a data extension field missing or misconfigured for this send.

No other unresolved `%%token%%` or `{{token}}` patterns are visible in the truncated HTML, but the full source should be scanned before clearance.

---

### 5. Compliance

**[WARN] `List-Unsubscribe` header not captured**
QA did not observe a `List-Unsubscribe` header. This may be a relay-capture gap (AgentMail), but if absent from the actual delivered message, Google and Yahoo's 2024 sender requirements mandate it for bulk senders. Should be confirmed against raw headers in a direct inbox receipt.

**[WARN] `List-Unsubscribe-Post` (RFC 8058) not present**
One-click unsubscribe is required by Gmail and Yahoo for high-volume senders as of February 2024. Absence will trigger inbox provider warnings and can suppress deliverability.

**[WARN] Plain-text body is >70% URLs**
3,855 of 5,459 characters in the plain-text part are URLs. This ratio is a spam-filter signal and suggests the plain-text alternative was auto-generated from HTML without cleanup.

**[WARN] `Authentication-Results` header not found**
SPF/DKIM/DMARC pass/fail status is unverifiable through the current relay. Needs direct header inspection to confirm alignment.

**[INFO] Preheader and physical address**
Preheader text present and hidden correctly. CAN-SPAM physical address presence cannot be confirmed from the truncated HTML — full source review needed.

---

### 6. Email-to-Site Continuity

**[FAIL] Broken destination URL** (see §2)
The merge-error URL is a dead link with no recoverable redirect.

**[UNKNOWN] UTM parameter coverage**
All 22 outbound links pass through `click.emails.skechers.com` redirects; final destination UTMs cannot be verified without live redirect traces. The campaign identifier `TRG_US_EN_NONMEMWELCOME_3_04082026` appears consistently in Krux beacon and MovableInk pixel parameters, suggesting campaign tagging is active, but final-URL UTM presence is unconfirmed.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| P0 | Broken merge-token URL | Identify the SFMC data extension field that produced `www.Skechers.com` as a raw value; fix data or template logic and re-send to any recipient who clicked that link |
| P1 | HTTP image URLs | Update all `image.emails.skechers.com` asset references to `https://`; contact MovableInk to update pixel endpoint |
| P1 | Missing `List-Unsubscribe-Post` | Add RFC 8058 one-click header to SFMC send configuration to maintain Gmail/Yahoo deliverability compliance |
| P2 | Missing alt text on 5 images | Add descriptive `alt` attributes; use `alt=""` for purely decorative images |
| P2 | Plain-text URL ratio | Manually author a plain-text alternative rather than auto-generating from HTML |
| P3 | `maximum-scale=1` | Remove this attribute or replace with `user-scalable=yes` |
| P3 | Verify `Authentication-Results` | Pull raw headers from a direct inbox delivery (not relay) to confirm SPF/DKIM/DMARC alignment |
## Recent history

- [[2026-05-03-you-ve-still-got-20-off]] — 5/10 (2026-05-03)
- [[2026-05-03-you-ve-still-got-20-off-7910e746-29fe-425b-84bb-]] — 5/10 (2026-05-03)
- [[2026-05-02-welcome-to-skechers]] — 6/10 (2026-05-02)

