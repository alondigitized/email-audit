---
slug: 2026-04-28-welcome-to-skechers
type: email
date: 2026-04-28
persona: rae-l
score: "5/10"
sender: bounce-z2eom22u5jwufnpjqxlhiqe5km.100220@bounce.emails.skechers.com
subject: Welcome to Skechers!
tags: [email, score-5, sender/bounce-z2eom22u5jwufnpjqxlhiqe5km-100220]
---
# Welcome to Skechers!
**Score:** 5/10 · **Type:** Email audit · **2026-04-28**
## Executive summary

- **From:** Skechers (bounce.emails.skechers.com)
- **Subject:** Welcome to Skechers!
- **Date reviewed:** 2026-04-27
- A structurally sound but wholly generic welcome email. The 20% off first-purchase offer is the clear reason to exist, and it's placed well above the fold. Below that, the email tries to do too much at once — style navigation, a membership pitch, a text marketing ask, app download, BNPL, curbside pickup, and a store locator all compete for attention in a single scroll. Nothing is broken, but nothing earns the customer either. A new subscriber leaves this email knowing Skechers has shoes and a discount; they do not leave with a sense of brand or any reason to feel good about joining.
- Competent execution of a low-ambition template. The discount and promo code will drive some first-purchase conversions, but the email leaves significant value on the table through zero personalization, a forgettable hero, and a cluttered lower half.

## What's working

- **The offer is the loudest thing on the page.** "Enjoy 20% OFF YOUR FIRST PURCHASE" with the code and a SHOP NOW button is well-sized, well-contrasted, and impossible to miss.
- **Style navigation (Street / Casual / Athletic / Work) is a smart UX addition.** Four categories with product photography gives a new subscriber a quick mental map of the brand's range without reading anything.
- **Skechers Plus placement is good.** Putting the loyalty/membership upsell directly below the offer and above the fold break is the right order — offer first, retention hook second.
- **Clean, single-column layout** reads well on mobile and doesn't require zooming.

## What's weak

- **Zero personalization anywhere.** No first name in the hero, subject, or greeting. For a triggered welcome email, this is a missed layup.
- **The hero image doesn't sell shoes.** The woman in the hero is wearing athletic wear and seated — Skechers shoes are barely visible. A welcome email should make you want a pair.
- **Promo code is a 16-character alphanumeric string** (WEL20-7NM2MWMLH5). It's visible but not friendly. Customers typing this on mobile will make errors.
- **The lower section is module soup.** Text marketing → App download → Curbside pickup → Buy now pay later → Find a store → Skechers Plus callout → Social follow — all in one scroll with no visual hierarchy separating them. Each individually makes sense; together they create noise.
- **"SHOP ADDITIONAL STYLES"** is a text-only link list (Women / Men / Kids / Clothing / New Arrivals / Sale) after a section of product photos. It reads like a nav bar orphaned inside the email body.
- **The texting CTA ("Text SKECHERS to 83628")** competes directly with the email CTA. In a welcome email, you want one conversion goal, not two.

## Recommendations

- 1. **Personalize the hero.** "Welcome, [First Name]!" is table stakes for a triggered welcome flow. If the name isn't available, use "Welcome to the family" — still warmer than the current generic headline.
- 2. **Simplify the promo code.** WEL20 alone is more than enough prefix. Lose the trailing random string or at minimum make it shorter (e.g., WELCOME20).
- 3. **Cut the lower section by half.** Pick two utility modules max — App download + Find a Store is a natural pair. Move BNPL to the checkout experience, not the welcome email.
- 4. **Remove the text marketing CTA from this email.** Save it for the second or third email in the welcome series when you've earned a bit more trust.
- 5. **Lead with shoes in the hero.** Swap the lifestyle image for a product shot — one great-looking pair that represents the brand — with the model secondary.
- | Priority | Action |
- |---|---|
- | P0 | Fix the doubled-domain merge error — identify which template block generates `http://www.skechers.com/www.Skechers.com`, correct the merge tag to emit a relative path, and re-QA before next send |
- | P0 | Fix the Return Path pixel `src` — prepend `https://` to `pixel.app.returnpath.net/pixel.gif?...` |
- | P1 | Upgrade all `image.emails.skechers.com` and `www.ink1000.com` asset URLs from `http://` to `https://` — 11 affected assets |
- | P1 | Add `List-Unsubscribe` and `List-Unsubscribe-Post: List-Unsubscribe=One-Click` headers to the ESP send config to meet Gmail/Yahoo bulk sender requirements |
- | P2 | Add `alt=""` to the 4 decorative/unknown images; add meaningful alt text to the hero image (`bcc16007`) |
- | P2 | Add `aria-hidden="true"` to the MovableInk `o.gif` tracking pixel and set `alt=""` |
- | P2 | Verify DKIM alignment for `bounce.emails.skechers.com` → `skechers.com` via a direct header capture (not via relay) |
- | P3 | Scope `text-size-adjust: none` away from the `*` wildcard selector; remove `maximum-scale=1` from the viewport meta if accessibility compliance is a concern |

## Full review
---

## Skechers Welcome Email — Review

**From:** Skechers (bounce.emails.skechers.com)
**Subject:** Welcome to Skechers!
**Date reviewed:** 2026-04-27

---

### 1. Executive Summary

A structurally sound but wholly generic welcome email. The 20% off first-purchase offer is the clear reason to exist, and it's placed well above the fold. Below that, the email tries to do too much at once — style navigation, a membership pitch, a text marketing ask, app download, BNPL, curbside pickup, and a store locator all compete for attention in a single scroll. Nothing is broken, but nothing earns the customer either. A new subscriber leaves this email knowing Skechers has shoes and a discount; they do not leave with a sense of brand or any reason to feel good about joining.

---

### 2. Business Impact Score: **5/10**

Competent execution of a low-ambition template. The discount and promo code will drive some first-purchase conversions, but the email leaves significant value on the table through zero personalization, a forgettable hero, and a cluttered lower half.

---

### 3. What's Working

- **The offer is the loudest thing on the page.** "Enjoy 20% OFF YOUR FIRST PURCHASE" with the code and a SHOP NOW button is well-sized, well-contrasted, and impossible to miss.
- **Style navigation (Street / Casual / Athletic / Work) is a smart UX addition.** Four categories with product photography gives a new subscriber a quick mental map of the brand's range without reading anything.
- **Skechers Plus placement is good.** Putting the loyalty/membership upsell directly below the offer and above the fold break is the right order — offer first, retention hook second.
- **Clean, single-column layout** reads well on mobile and doesn't require zooming.

---

### 4. What's Weak

- **Zero personalization anywhere.** No first name in the hero, subject, or greeting. For a triggered welcome email, this is a missed layup.
- **The hero image doesn't sell shoes.** The woman in the hero is wearing athletic wear and seated — Skechers shoes are barely visible. A welcome email should make you want a pair.
- **Promo code is a 16-character alphanumeric string** (WEL20-7NM2MWMLH5). It's visible but not friendly. Customers typing this on mobile will make errors.
- **The lower section is module soup.** Text marketing → App download → Curbside pickup → Buy now pay later → Find a store → Skechers Plus callout → Social follow — all in one scroll with no visual hierarchy separating them. Each individually makes sense; together they create noise.
- **"SHOP ADDITIONAL STYLES"** is a text-only link list (Women / Men / Kids / Clothing / New Arrivals / Sale) after a section of product photos. It reads like a nav bar orphaned inside the email body.
- **The texting CTA ("Text SKECHERS to 83628")** competes directly with the email CTA. In a welcome email, you want one conversion goal, not two.

---

### 5. Recommendations

1. **Personalize the hero.** "Welcome, [First Name]!" is table stakes for a triggered welcome flow. If the name isn't available, use "Welcome to the family" — still warmer than the current generic headline.
2. **Simplify the promo code.** WEL20 alone is more than enough prefix. Lose the trailing random string or at minimum make it shorter (e.g., WELCOME20).
3. **Cut the lower section by half.** Pick two utility modules max — App download + Find a Store is a natural pair. Move BNPL to the checkout experience, not the welcome email.
4. **Remove the text marketing CTA from this email.** Save it for the second or third email in the welcome series when you've earned a bit more trust.
5. **Lead with shoes in the hero.** Swap the lifestyle image for a product shot — one great-looking pair that represents the brand — with the model secondary.

---

### 6. Bottom Line

This is a functional welcome email that will drive some first-purchase conversions off the discount alone. It does not build brand affinity, does not make a new subscriber feel welcomed as a person, and buries the signal in module clutter below the fold. Medium-priority fix: simplify the bottom half and personalize the top. High-priority fix: the promo code UX.

---

### 7. Subject Line Analysis

- **Subject:** `Welcome to Skechers!`
- **Length:** 20 characters
- **Scores (1-10):** Clarity `9`, Curiosity `2`, Personalization `1`, Urgency `3`, Specificity `3`
- **Strengths:**
  - Crystal clear — no ambiguity about what this email is
  - Brand name is front and center for inbox recognition
- **Weaknesses:**
  - Triggers zero curiosity; every subscriber already knows a welcome email is coming
  - No hint of the offer (20% off) that's the actual reason to open
- **Alt A:** `Your 20% off is inside — welcome to Skechers`
- **Alt B:** `We saved you a spot (and 20% off your first order)`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — The visible render shows a small illegible line at the very top of the email body (appears to be a web-view or tracking identifier), which would be what inbox clients surface as the preheader. No intentional preview copy is visible.
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - None — no usable preheader is present
- **Weaknesses:**
  - Inbox clients will pull the first readable text, which appears to be technical/tracking content
  - A massive missed opportunity alongside an already-weak subject line
- **Alt A:** `20% off your first order — use code at checkout`
- **Alt B:** `Your welcome discount + free returns on every order`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `6/10`
- **Rationale:** As someone who just signed up, I know this is a welcome email and I strongly suspect there's a discount code inside — that expectation alone drives the open. The subject line itself gives me no additional reason to rush; I'd open it when I had a moment, not immediately.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** The 20% off is prominent and the SHOP NOW button is right there — I'd click it out of discount intent, not brand excitement. But the long promo code creates friction the moment I get to checkout, and the scattered lower modules would make me feel vaguely overwhelmed rather than guided. Clicks happen in spite of the email structure, not because of it.

---

### 11. Evidence

- **Overall purpose:** Triggered welcome email for new account sign-ups; primary goal is first purchase conversion via a 20% discount.
- **Hero / primary value proposition:** Woman in athleisure seated pose with "WELCOME TO SKECHERS" headline. Shoes not prominently featured. Offer module below hero: 20% off, promo code WEL20-7NM2MWMLH5, SHOP NOW CTA button.
- **Membership / benefits section:** Skechers Plus banner with three benefit icons — member-only offers, free shipping & returns, birthday surprises — plus a JOIN NOW CTA. Well-placed, clear benefits.
- **Product discoverability / recommendation modules:** "FIND YOUR STYLE" 2x2 grid with Street, Casual, Athletic, Work categories, each with product photography. Functional but images are small. Below that: text-only link list (Women / Men / Kids / Clothing / New Arrivals / Sale).
- **Utility / secondary modules:** Text marketing opt-in, App download (App Store + Google Play), Curbside Pickup icon, Shop Now Pay Later (Afterpay + Klarna logos), Find a Store icon, Skechers Plus free shipping callout, Social follow (Facebook + Instagram).
- **Bugs / friction / clarity issues:** No visible broken images or rendering errors. The promo code string is long and visually dense. The top-of-email text (appears to be a tracking/web-view line) is unreadable at normal viewing size and will bleed into inbox preview text.

---

## Technical Audit

## Technical Audit — Skechers Welcome Email

### 1. Technical Summary
One hard-broken URL caused by a doubled-domain merge error will send clicks to a 404. A systemic HTTP (non-HTTPS) image hosting pattern affects 11+ assets and will cause blocking or mixed-content warnings in secure clients. Compliance headers required for modern inbox placement are absent from the captured message.

---

### 2. Link & Tracking Issues

**[FAIL] Doubled-domain merge error — broken click destination**
A URL in the body resolves to `http://www.skechers.com/www.Skechers.com`. This is a merge token failure where a personalization variable (likely `%%SITE_URL%%` or similar) was populated with a fully-qualified domain instead of a path, prepending it onto the already-hardcoded base domain. Any click on this link 404s.

**[WARN] Return Path pixel — missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1...">
```
No `http://` or `https://` prefix. Browsers/email clients will interpret this as a relative URL, making the pixel request go to `[current-domain]/pixel.app.returnpath.net/...` and silently fail. Inbox placement monitoring data from Return Path will be incomplete for this send.

**[INFO] 26 click-tracking links via `click.emails.skechers.com`** — skipped for HTTP probing; destination URLs and UTM payloads could not be verified against the broken-URL finding above.

---

### 3. Rendering & Accessibility

**[WARN] 11 images served over HTTP**
The following asset hosts use `http://` and will be blocked or proxied in security-conscious clients (Apple Mail, corporate Outlook with image blocking):
- `image.emails.skechers.com` — affects Skechers logo, app store badges, social icons, AfterPay badge, and several decorative images
- `www.ink1000.com` (MovableInk tracking pixel)

**[WARN] 5 images missing `alt` text**
Missing on:
- `bcc16007-f391-423b-868f-cb0ad4f03490.jpg` (likely a hero image — no alt means screen readers get nothing)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`
- MovableInk `o.gif` (tracking pixel — should carry `alt=""` and `aria-hidden="true"`; currently has neither)

**[WARN] `text-size-adjust: none` applied globally**
```css
* { text-size-adjust: none; -webkit-text-size-adjust: none; ... }
```
Applied to the `*` selector this suppresses the user's ability to zoom text on mobile for accessibility. Should be scoped to specific layout elements only.

**[INFO] `maximum-scale=1` in viewport meta** — same accessibility concern; disables pinch-zoom on mobile for users who need it.

---

### 4. Personalization & Merge Tokens

**[FAIL] One unfired merge token** producing the broken URL at `http://www.skechers.com/www.Skechers.com`. Root cause: a merge tag that should have emitted a relative path (e.g. `/on/demandware.store/...`) was populated with a bare domain string (`www.Skechers.com`), which was then concatenated onto the hardcoded base.

No other merge token anomalies visible in the truncated source. Preheader text (`Thank you for joining Skechers email program`) appears static with no personalization — expected for a non-member welcome.

---

### 5. Compliance

**[WARN] `List-Unsubscribe` header absent** — not captured by the AgentMail relay. Gmail and Yahoo Mail (per their 2024 sender requirements for bulk mail) use this header for the in-client unsubscribe button. Its absence risks the email being treated as non-compliant by Gmail's bulk sender policy.

**[WARN] `List-Unsubscribe-Post` header absent** — RFC 8058 one-click unsubscribe not present. Required by Gmail/Yahoo for senders above 5k/day threshold. Missing this causes the in-client unsubscribe to do a GET instead of a POST, which is slower and less reliable.

**[WARN] `Authentication-Results` header absent** — SPF and DKIM pass/fail status could not be confirmed through the relay. The sending domain `bounce.emails.skechers.com` should carry DKIM alignment with `skechers.com`; this cannot be verified from captured headers.

**[INFO]** CAN-SPAM physical address and unsubscribe link are expected in footer (HTML truncated — could not confirm presence, but this is a standard Skechers send so likely present).

---

### 6. Email-to-Site Continuity

**[FAIL]** The broken URL (`http://www.skechers.com/www.Skechers.com`) has no UTM parameters and lands nowhere — no continuity possible.

**[WARN]** 26 click links redirect through `click.emails.skechers.com` — final destination URLs were not probed. Cannot confirm UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are appended consistently. Campaign ID `TRG_US_EN_NONMEMWELCOME_1_04162026` appears in pixel payloads but its presence in click-through URLs is unverified.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | Fix the doubled-domain merge error — identify which template block generates `http://www.skechers.com/www.Skechers.com`, correct the merge tag to emit a relative path, and re-QA before next send |
| P0 | Fix the Return Path pixel `src` — prepend `https://` to `pixel.app.returnpath.net/pixel.gif?...` |
| P1 | Upgrade all `image.emails.skechers.com` and `www.ink1000.com` asset URLs from `http://` to `https://` — 11 affected assets |
| P1 | Add `List-Unsubscribe` and `List-Unsubscribe-Post: List-Unsubscribe=One-Click` headers to the ESP send config to meet Gmail/Yahoo bulk sender requirements |
| P2 | Add `alt=""` to the 4 decorative/unknown images; add meaningful alt text to the hero image (`bcc16007`) |
| P2 | Add `aria-hidden="true"` to the MovableInk `o.gif` tracking pixel and set `alt=""` |
| P2 | Verify DKIM alignment for `bounce.emails.skechers.com` → `skechers.com` via a direct header capture (not via relay) |
| P3 | Scope `text-size-adjust: none` away from the `*` wildcard selector; remove `maximum-scale=1` from the viewport meta if accessibility compliance is a concern |
## Recent history

- [[2026-04-26-welcome-to-sally-beauty]] — 5/10 (2026-04-26)
- [[2026-04-26-welcome-to-walgreens-rae]] — 3/10 (2026-04-26)
- [[2026-04-26-action-requested-confirm-your-email-address-now]] — 6/10 (2026-04-26)

