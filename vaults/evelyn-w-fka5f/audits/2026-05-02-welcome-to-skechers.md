---
slug: 2026-05-02-welcome-to-skechers
type: email
date: 2026-05-02
persona: evelyn-w-fka5f
score: "6/10"
sender: SKECHERS
subject: Welcome to Skechers!
tags: [email, score-6, sender/skechers]
---
# Welcome to Skechers!
**Score:** 6/10 · **Type:** Email audit · **2026-05-02**
## Executive summary

- A competent but formulaic welcome email. The 20% off first-purchase offer is clear, the promo code is visible, and the "Find Your Style" category grid gives a new subscriber an immediate way to orient. The Skechers Plus upsell module is well-placed mid-scroll. However, the email is long and utilitarian — it packs in too many secondary modules (texting opt-in, app download, curbside pickup, BNPL logos, store finder) that dilute the welcome moment. Nothing here feels warm or personalized. It's a coupon delivery mechanism dressed up as a welcome.
- The offer is clear and redeemable, but the email doesn't build brand affinity or do anything to differentiate Skechers from any other footwear brand running a first-purchase welcome series.

## What's working

- **Offer clarity:** "20% OFF YOUR FIRST PURCHASE — USE CODE: WEL20-TDOV4KIKXS2" is prominent and scannable. No hunting required.
- **Category grid:** "STREET / CASUAL / ATHLETIC / WORK" with photo thumbnails immediately answers "what does Skechers sell?" for a new subscriber.
- **Skechers Plus placement:** The loyalty program upsell block appears naturally mid-scroll before the subscriber tunes out, and its benefits (member-only offers, free shipping, birthday surprises) are clearly iconified.
- **Code visibility:** The promo code is displayed in a contrasting box — easy to screenshot or copy.

## What's weak

- **No warmth.** "Welcome to Skechers!" is the entire emotional payload of this email. There's no voice, no brand story, no reason to feel good about signing up.
- **Excessive utility clutter at the bottom:** App download, curbside pickup, shop-now-pay-later (Afterpay + Klarna logos), store finder, and texting opt-in are all crammed into the footer. Each of these is a separate ask. None of them belong in a welcome email.
- **Hero image is weak:** The model sitting against a white wall wearing a lime green top isn't aspirational. It doesn't communicate lifestyle or product quality.
- **No personalization signal:** Not even a first name in the headline. "Welcome to Skechers!" could have been "Welcome, [Name] — here's your 20% off."
- **CTA redundancy:** There's a "SHOP NOW" button under the offer, then "JOIN NOW" for Skechers Plus, then a row of text CTAs (Women, Men, Kids, Clothing, New Arrivals, Sale). Too many competing next steps.
- **Fine print is dense:** The offer disclaimer at the bottom is a wall of small text. Buried disclaimers create friction and distrust for first-time recipients.

## Recommendations

- 1. **Lead with the name** — add first-name personalization to the welcome headline. Immediate signal that the email isn't a blast.
- 2. **Cut the bottom clutter in half** — remove the texting opt-in, BNPL logos, and curbside pickup from this email. Reserve those for post-purchase or browse-abandonment flows.
- 3. **Strengthen the hero** — show a product in motion (walking, running) rather than a seated lifestyle shot. Skechers' brand is comfort + activity.
- 4. **Consolidate CTAs** — one primary CTA (SHOP NOW with code) and one secondary CTA (Join Skechers Plus). Remove the text-link navigation row.
- 5. **Give the Skechers Plus block a clearer headline** — "Not a member?" is a weak hook. Try "Free shipping on every order — join Skechers Plus."
- 6. **Make the promo code copyable-looking** — the current monospace code box is good; ensure mobile tap-to-copy works.
- | Priority | Issue | Fix |
- |---|---|---|
- | P0 | Doubled-domain URL: `http://www.skechers.com/www.Skechers.com` | Audit the template merge logic — the path token should replace the base URL, not append to it. Resend or suppress if active send. |
- | P1 | 14 images served over HTTP | Update all `image.emails.skechers.com` asset URLs to `https://`. This is a find-and-replace in the template; the CDN almost certainly supports HTTPS already. |
- | P1 | HTTP MovableInk pixel (`ink1000.com`) | Request HTTPS pixel URL from MovableInk or update the embed snippet. |
- | P1 | List-Unsubscribe / RFC 8058 headers | Confirm with ESP (Salesforce Marketing Cloud) that these headers are being injected at send time. Required for Gmail/Yahoo bulk sender compliance. |
- | P2 | Missing alt text on 6 functional images | Add descriptive `alt` text on hero/product images; use `alt=""` on decorative-only images and tracking pixels. |
- | P2 | `text-size-adjust: none` on `*` | Scope to `td` or specific elements where iOS font-boosting is a known issue, not the entire document. |
- | P2 | `maximum-scale=1` in viewport | Remove this attribute to restore pinch-to-zoom accessibility. |
- | P3 | Authentication-Results not captured | Verify SPF/DKIM/DMARC alignment for `emails.skechers.com` against the `skechers.com` DMARC policy. |
- | P3 | UTM param verification | Spot-check 2–3 resolved click-tracking URLs to confirm `utm_source`, `utm_medium`, `utm_campaign` are present and match the campaign slug. |

## Full review
---

## Skechers Welcome Email Review

---

### 1. Executive Summary

A competent but formulaic welcome email. The 20% off first-purchase offer is clear, the promo code is visible, and the "Find Your Style" category grid gives a new subscriber an immediate way to orient. The Skechers Plus upsell module is well-placed mid-scroll. However, the email is long and utilitarian — it packs in too many secondary modules (texting opt-in, app download, curbside pickup, BNPL logos, store finder) that dilute the welcome moment. Nothing here feels warm or personalized. It's a coupon delivery mechanism dressed up as a welcome.

---

### 2. Business Impact Score: **6/10**

The offer is clear and redeemable, but the email doesn't build brand affinity or do anything to differentiate Skechers from any other footwear brand running a first-purchase welcome series.

---

### 3. What's Working

- **Offer clarity:** "20% OFF YOUR FIRST PURCHASE — USE CODE: WEL20-TDOV4KIKXS2" is prominent and scannable. No hunting required.
- **Category grid:** "STREET / CASUAL / ATHLETIC / WORK" with photo thumbnails immediately answers "what does Skechers sell?" for a new subscriber.
- **Skechers Plus placement:** The loyalty program upsell block appears naturally mid-scroll before the subscriber tunes out, and its benefits (member-only offers, free shipping, birthday surprises) are clearly iconified.
- **Code visibility:** The promo code is displayed in a contrasting box — easy to screenshot or copy.

---

### 4. What's Weak

- **No warmth.** "Welcome to Skechers!" is the entire emotional payload of this email. There's no voice, no brand story, no reason to feel good about signing up.
- **Excessive utility clutter at the bottom:** App download, curbside pickup, shop-now-pay-later (Afterpay + Klarna logos), store finder, and texting opt-in are all crammed into the footer. Each of these is a separate ask. None of them belong in a welcome email.
- **Hero image is weak:** The model sitting against a white wall wearing a lime green top isn't aspirational. It doesn't communicate lifestyle or product quality.
- **No personalization signal:** Not even a first name in the headline. "Welcome to Skechers!" could have been "Welcome, [Name] — here's your 20% off."
- **CTA redundancy:** There's a "SHOP NOW" button under the offer, then "JOIN NOW" for Skechers Plus, then a row of text CTAs (Women, Men, Kids, Clothing, New Arrivals, Sale). Too many competing next steps.
- **Fine print is dense:** The offer disclaimer at the bottom is a wall of small text. Buried disclaimers create friction and distrust for first-time recipients.

---

### 5. Recommendations

1. **Lead with the name** — add first-name personalization to the welcome headline. Immediate signal that the email isn't a blast.
2. **Cut the bottom clutter in half** — remove the texting opt-in, BNPL logos, and curbside pickup from this email. Reserve those for post-purchase or browse-abandonment flows.
3. **Strengthen the hero** — show a product in motion (walking, running) rather than a seated lifestyle shot. Skechers' brand is comfort + activity.
4. **Consolidate CTAs** — one primary CTA (SHOP NOW with code) and one secondary CTA (Join Skechers Plus). Remove the text-link navigation row.
5. **Give the Skechers Plus block a clearer headline** — "Not a member?" is a weak hook. Try "Free shipping on every order — join Skechers Plus."
6. **Make the promo code copyable-looking** — the current monospace code box is good; ensure mobile tap-to-copy works.

---

### 6. Bottom Line

This email gets the job done as a coupon delivery vehicle. It will drive first-purchase conversions from deal-seekers. It will not build brand affinity or make a new subscriber feel welcomed. For a brand competing on comfort and lifestyle against Nike, Adidas, and New Balance, the welcome moment is an underused asset.

---

### 7. Subject Line Analysis

- **Subject:** `Welcome to Skechers!`
- **Length:** 21 characters
- **Scores (1-10):** Clarity `8`, Curiosity `2`, Personalization `1`, Urgency `1`, Specificity `2`
- **Strengths:**
  - Instantly legible — no ambiguity about the sender or context
  - Short enough to render fully on any device
- **Weaknesses:**
  - Zero curiosity or incentive signal — doesn't mention the 20% off offer, which is the actual value
  - Completely generic; every brand sends a "Welcome to [Brand]!" subject line
- **Alt A:** `Your 20% off welcome gift is inside`
- **Alt B:** `Welcome! Here's 20% off your first pair`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — no visible intentional preheader; the rendered email shows fine print disclaimers bleeding into the preview slot
- **Length:** N/A (uncontrolled)
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None evident
- **Weaknesses:**
  - Losing the preheader slot entirely — this is the second most-read element in an inbox after the subject line
  - Disclaimer text likely rendering as preheader creates a confusing or off-putting first impression
- **Alt A:** `Use code WEL20 for 20% off your first order — no minimum required`
- **Alt B:** `20% off your first purchase + free shipping when you join Skechers Plus`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** As Walker (a deal-aware but brand-agnostic consumer), "Welcome to Skechers!" signals there's probably a first-purchase discount inside — that's enough to open. But the subject line offers no urgency or specificity, so if I'm in a busy inbox day, this gets deferred or ignored. The sender name "SKECHERS" is recognizable, which prevents it from being deleted on sight.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** The 20% off offer with a visible promo code is the right hook — once opened, the path to clicking SHOP NOW is clear and the code is easy to grab. The click is motivated by deal capture, not brand enthusiasm. The cluttered lower half doesn't interfere with the primary action; it just gets ignored.

---

### 11. Evidence

- **Overall purpose:** Welcome + first-purchase coupon delivery
- **Hero / primary value proposition:** 20% off first purchase with promo code WEL20-TDOV4KIKXS2; prominent "SHOP NOW" CTA in a contrasting button
- **Membership / benefits section:** Skechers Plus block with three benefit icons (member-only offers, free shipping & returns, birthday surprises) and a "JOIN NOW" CTA on a blue background
- **Product discoverability / recommendation modules:** 2×2 photo grid covering Street, Casual, Athletic, and Work categories; text-link nav row (Women, Men, Kids, Clothing, New Arrivals, Sale)
- **Utility / secondary modules:** "Get Texting" SMS opt-in; App download (App Store + Google Play); Curbside Pickup; Shop Now Pay Later (Afterpay, Klarna); Find a Store; Follow us (Facebook, Instagram, YouTube icons)
- **Bugs / friction / clarity issues:** No visible broken images or overlapping text; fine print disclaimer block at the bottom is visually dense and small but legible; no apparent render errors in the screenshot

---

## Technical Audit

## Technical Audit — Skechers Welcome Email

**From:** `no-reply@emails.skechers.com` | **Subject:** Welcome to Skechers!

---

### 1. Technical Summary

The email has one critical broken link caused by a doubled-domain merge error, a systemic HTTP (non-HTTPS) image asset problem across the majority of hosted images, and missing compliance headers that may affect deliverability and one-click unsubscribe functionality.

---

### 2. Link & Tracking Issues

**CRITICAL — Doubled-domain URL**
QA confirmed a malformed URL with a duplicated domain:
```
http://www.skechers.com/www.Skechers.com
```
This is a merge/template rendering bug — a `%%URL%%`-style token was likely concatenated onto a hardcoded base domain. The link resolves to a broken path. Any CTA using this href is non-functional.

**Tracking pixels — 25 click-redirect links skipped**
All 25 click-tracking links route through `click.emails.skechers.com` and were not probed. No broken destination URLs were confirmed, but the doubled-domain bug above suggests at least one escaped templating validation.

**Mixed third-party pixel domains**
Three beacon pixels fire at page open via hidden `<img>` tags:
- `beacon.krxd.net` — Salesforce/Krux DMP user-matching pixels (×2) + ad impression pixel
- `pixel.app.returnpath.net` — Validity/Return Path inbox monitor
- `http://www.ink1000.com` — MovableInk dynamic content pixel (HTTP, not HTTPS — see §3)

These are standard ESP/DMP patterns, but the HTTP pixel is a liability.

---

### 3. Rendering & Accessibility

**HTTP image sources — systemic (14 images)**
The majority of hosted assets on `image.emails.skechers.com` use `http://` rather than `https://`. Modern email clients (Gmail, Outlook.com, Apple Mail) proxy or block non-HTTPS images. Affected assets include:

| Asset | Issue |
|---|---|
| Skechers logo (`dde00662...png`) | HTTP + will be blocked/proxied |
| Product/banner image (`49468f73...png`) | HTTP, no alt text |
| App Store badge (`0ec56c9f...png`) | HTTP |
| Google Play badge (`9bb508d0...png`) | HTTP |
| AfterPay logo (`07cb60b5...png`) | HTTP |
| Social icons: Instagram, Facebook, YouTube | HTTP |
| MovableInk pixel (`ink1000.com/o.gif`) | HTTP, no alt text |
| Footer images (`00100b23`, `fc08601a`) | HTTP, no alt text |

The ESP image CDN (`image.emails.skechers.com`) should support HTTPS — this is likely a template authoring issue where asset URLs were inserted without the `s`.

**Missing `alt` text — 6 images**
The following images have no `alt` attribute or empty `alt=""` where descriptive text is needed:
- `bcc16007...jpg` (appears to be a hero/product image — not decorative)
- `49468f73...png`
- `00100b23...png`
- `fc08601a...png`
- `o.gif` (MovableInk pixel — should have `alt=""` explicitly, not absent)

Images that are functional (hero, product) need descriptive alt text for screen readers and image-blocked rendering environments.

**`text-size-adjust: none` applied globally**
```css
* { text-size-adjust: none; -webkit-text-size-adjust: none; ... }
```
Disabling text size adjustment on all elements is an accessibility regression — it prevents users from scaling text in mobile browsers. The intent (prevent iOS auto-sizing) should be scoped to specific table cells, not `*`.

**`maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
`maximum-scale=1` is a known accessibility barrier — it prevents pinch-to-zoom. WCAG 1.4.4 (Resize Text) recommends against this.

---

### 4. Personalization & Merge Tokens

**One confirmed merge failure**
The doubled-domain URL (`http://www.skechers.com/www.Skechers.com`) is consistent with an unresolved or incorrectly composed merge token — a `%%SITEURL%%` or equivalent token that was appended to a hardcoded domain prefix rather than replacing it.

No other unrendered `%%TOKEN%%` or `{{handlebars}}` patterns were visible in the truncated source, but the presence of one escaped merge error warrants a full template audit pass.

---

### 5. Compliance

**List-Unsubscribe header — not captured**
```
[WARN] List-Unsubscribe header not found
[WARN] List-Unsubscribe-Post header not found (RFC 8058)
```
These headers may be present at SMTP level but not captured by the AgentMail relay. If genuinely absent:
- Gmail and Yahoo require `List-Unsubscribe` + `List-Unsubscribe-Post` for bulk senders (>5K/day) as of Feb 2024 enforcement. Missing RFC 8058 one-click support can trigger bulk folder placement.

**SPF/DKIM authentication — unverified**
```
[WARN] Authentication-Results header not found
```
SPF/DKIM pass/fail status is unknown. The sending domain (`emails.skechers.com`) uses a subdomain ESP envelope, which is standard, but DMARC alignment should be verified against `skechers.com` policy.

**CAN-SPAM physical address**
Not verifiable from truncated source, but should be confirmed present in the footer. The unsubscribe link presence was not confirmed either — footer content was cut from the HTML excerpt.

---

### 6. Email-to-Site Continuity

**UTM parameters — not verifiable**
All destination URLs pass through `click.emails.skechers.com` redirects, so UTM parameter presence cannot be confirmed without resolving the click-tracking URLs. The campaign ID `TRG_US_EN_NONMEMWELCOME_1_04162026` is consistent across beacon pixels, suggesting a unified campaign slug exists — it should also appear in UTM `utm_campaign` values on resolved destination URLs.

**Broken landing page — confirmed**
The doubled-domain URL (`http://www.skechers.com/www.Skechers.com`) will deliver a 404 or redirect loop. Any click on the associated CTA results in a broken experience.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| P0 | Doubled-domain URL: `http://www.skechers.com/www.Skechers.com` | Audit the template merge logic — the path token should replace the base URL, not append to it. Resend or suppress if active send. |
| P1 | 14 images served over HTTP | Update all `image.emails.skechers.com` asset URLs to `https://`. This is a find-and-replace in the template; the CDN almost certainly supports HTTPS already. |
| P1 | HTTP MovableInk pixel (`ink1000.com`) | Request HTTPS pixel URL from MovableInk or update the embed snippet. |
| P1 | List-Unsubscribe / RFC 8058 headers | Confirm with ESP (Salesforce Marketing Cloud) that these headers are being injected at send time. Required for Gmail/Yahoo bulk sender compliance. |
| P2 | Missing alt text on 6 functional images | Add descriptive `alt` text on hero/product images; use `alt=""` on decorative-only images and tracking pixels. |
| P2 | `text-size-adjust: none` on `*` | Scope to `td` or specific elements where iOS font-boosting is a known issue, not the entire document. |
| P2 | `maximum-scale=1` in viewport | Remove this attribute to restore pinch-to-zoom accessibility. |
| P3 | Authentication-Results not captured | Verify SPF/DKIM/DMARC alignment for `emails.skechers.com` against the `skechers.com` DMARC policy. |
| P3 | UTM param verification | Spot-check 2–3 resolved click-tracking URLs to confirm `utm_source`, `utm_medium`, `utm_campaign` are present and match the campaign slug. |
