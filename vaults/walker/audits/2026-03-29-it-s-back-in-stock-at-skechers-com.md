---
slug: 2026-03-29-it-s-back-in-stock-at-skechers-com
type: email
date: 2026-03-26
persona: walker
score: "5/10"
sender: SKECHERS
subject: "It's Back in Stock at SKECHERS.com"
tags: [email, score-5, sender/skechers]
---
# It's Back in Stock at SKECHERS.com
**Score:** 5/10 · **Type:** Email audit · **2026-03-26**
## Executive summary

- A purely functional back-in-stock alert that does the bare minimum. The product data is present, the CTA is clear, and the recommendations module adds legitimate cross-sell value — but the email is emotionally flat, visually underdeveloped, and does nothing to create urgency beyond the subject line. It reads like a system notification, not a brand communication.
- Functional but forgettable. It will convert the highly motivated customer who set up the alert, but squanders the high-intent moment for everyone else.

## What's working

- **Product block is accurate and scannable.** SKU, color, and size are all surfaced clearly — the recipient can confirm this is their item without clicking.
- **Single, unambiguous CTA.** "BUY IT NOW" is prominent and leaves no confusion about the next step.
- **"You Might Also Be Interested In" module is well-executed.** Six product tiles with names and clear images. This is the strongest visual section of the email and turns a transactional alert into a light browse experience.
- **Clean layout.** No visual clutter; the hierarchy from headline → product → CTA → recs is logical.

## What's weak

- **No urgency mechanics.** The subject line promises "back in stock" urgency, but the email body never reinforces it. No stock quantity, no "limited units," no countdown — nothing to push the hesitant buyer to act now vs. later.
- **Hero is a white box.** The product description section is text-only inside a plain bordered card. There is no lifestyle or product image in the hero area — a significant miss for a footwear brand where visual appeal drives purchase decisions.
- **Headline is generic.** "BACK IN STOCK ALERT!" is functional but carries zero brand voice. SKECHERS has a casual, energetic tone that is completely absent here.
- **Product image is small and dull.** The only product shot (inside the description block) appears small and un-styled — not the kind of image that makes someone want to buy shoes.
- **Customer support section feels heavy.** A full customer support block with email, phone, and help links before the footer takes up meaningful real estate in what should be a tight, fast email.
- **No personalization signal.** No "You saved this" or "You asked to be notified" framing — the email doesn't acknowledge why the recipient is receiving it, which could cause confusion.

## Recommendations

- 1. **Add a product hero image above the fold.** Replace the text-only description card with a strong, styled product photo. Footwear sells on visual desire.
- 2. **Create stock scarcity copy.** Add a line like "These go fast — grab your pair before they're gone again" or show remaining units to reactivate the urgency the subject line set up.
- 3. **Anchor the personalization.** Open with "Good news — the item you saved is back." This closes the loop and reminds the reader why they're getting this email.
- 4. **Shrink the customer support block.** Move it to the footer, one line. It's not why someone opens a back-in-stock alert.
- 5. **Inject brand voice into the headline.** Something like "Your Skechers are back. Don't sleep on it." would differentiate this from a generic system alert.
- | Priority | Issue | Action |
- |---|---|---|
- | **High** | Plain-text body is 0 chars | Generate and attach a plain-text MIME part — even a minimal one |
- | **High** | 3 images on HTTP | Change `http://image.emails.skechers.com/` to `https://` across all image `src` attributes |
- | **High** | 2 images missing `alt` text | Add descriptive `alt` on `041c30ac…png` and `f9b5ed32…png` |
- | **Medium** | Auth headers unverifiable | Confirm SPF/DKIM/DMARC on `emails.skechers.com` via a live received header or mail-tester run |
- | **Medium** | Raw subscriber ID in Krux pixel | Review `partner_uid=121173391` data-sharing scope with DMP contract |
- | **Low** | Malformed charset meta | Add `http-equiv="Content-Type"` to the meta tag |
- | **Low** | `user-scalable=0` | Change to `user-scalable=no` |

## Full review
## SKECHERS — "Back in Stock" Email Review

---

### 1. Executive Summary

A purely functional back-in-stock alert that does the bare minimum. The product data is present, the CTA is clear, and the recommendations module adds legitimate cross-sell value — but the email is emotionally flat, visually underdeveloped, and does nothing to create urgency beyond the subject line. It reads like a system notification, not a brand communication.

---

### 2. Business Impact Score: **5 / 10**

Functional but forgettable. It will convert the highly motivated customer who set up the alert, but squanders the high-intent moment for everyone else.

---

### 3. What's Working

- **Product block is accurate and scannable.** SKU, color, and size are all surfaced clearly — the recipient can confirm this is their item without clicking.
- **Single, unambiguous CTA.** "BUY IT NOW" is prominent and leaves no confusion about the next step.
- **"You Might Also Be Interested In" module is well-executed.** Six product tiles with names and clear images. This is the strongest visual section of the email and turns a transactional alert into a light browse experience.
- **Clean layout.** No visual clutter; the hierarchy from headline → product → CTA → recs is logical.

---

### 4. What's Weak

- **No urgency mechanics.** The subject line promises "back in stock" urgency, but the email body never reinforces it. No stock quantity, no "limited units," no countdown — nothing to push the hesitant buyer to act now vs. later.
- **Hero is a white box.** The product description section is text-only inside a plain bordered card. There is no lifestyle or product image in the hero area — a significant miss for a footwear brand where visual appeal drives purchase decisions.
- **Headline is generic.** "BACK IN STOCK ALERT!" is functional but carries zero brand voice. SKECHERS has a casual, energetic tone that is completely absent here.
- **Product image is small and dull.** The only product shot (inside the description block) appears small and un-styled — not the kind of image that makes someone want to buy shoes.
- **Customer support section feels heavy.** A full customer support block with email, phone, and help links before the footer takes up meaningful real estate in what should be a tight, fast email.
- **No personalization signal.** No "You saved this" or "You asked to be notified" framing — the email doesn't acknowledge why the recipient is receiving it, which could cause confusion.

---

### 5. Recommendations

1. **Add a product hero image above the fold.** Replace the text-only description card with a strong, styled product photo. Footwear sells on visual desire.
2. **Create stock scarcity copy.** Add a line like "These go fast — grab your pair before they're gone again" or show remaining units to reactivate the urgency the subject line set up.
3. **Anchor the personalization.** Open with "Good news — the item you saved is back." This closes the loop and reminds the reader why they're getting this email.
4. **Shrink the customer support block.** Move it to the footer, one line. It's not why someone opens a back-in-stock alert.
5. **Inject brand voice into the headline.** Something like "Your Skechers are back. Don't sleep on it." would differentiate this from a generic system alert.

---

### 6. Bottom Line

This email will work for the buyer who was already committed. It won't do much for anyone on the fence. The back-in-stock moment is one of the highest-intent touchpoints in retention email — a customer literally asked to be notified. The creative investment here doesn't match that intent. Quick wins: add a hero image, add urgency copy, shrink support noise.

---

### 7. Evidence

**Overall purpose:** Back-in-stock restock alert for a specific saved/wishlist item (Skechers Slip-ins, Contour Foam – Cozy Fit).

**Hero / primary value prop:** Absent as a visual element. The "BACK IN STOCK ALERT!" headline is large and centered, but the product area below it is a plain text card with no emotional pull. No image dominates the top of the email.

**Membership / benefits section:** Not present in this email.

**Product discoverability / recommendation modules:** "You Might Also Be Interested In" grid of 6 products — well-structured, visually the strongest section, good tile sizing with names visible.

**Utility / secondary modules:** Customer support block (email link, phone number, help/shipping/returns/store locator links) appears mid-email before the footer. Footer has standard legal, social icons (Facebook, Twitter/X, Instagram, Pinterest, YouTube), and unsubscribe links.

**Bugs / friction / clarity issues:** No visible broken images or rendering errors. The product description section's sparse visual presentation is a design choice rather than a bug, but it reads as visually broken compared to the rest of the email.

---

## Technical Audit

## Technical Audit — Skechers "It's Back in Stock" Email

**From:** no-reply@emails.skechers.com | **ESP:** Salesforce Marketing Cloud | **Date:** 2026-03-29

---

### 1. Technical Summary

Functional ESP infrastructure (SFMC) with two hard deliverability gaps: a missing plain-text body and unverifiable SPF/DKIM authentication. Three product images are served over HTTP, creating mixed-content blocking risk in modern clients.

---

### 2. Link & Tracking Issues

**Open pixel — HTTPS, appears correct:**
```
https://click.emails.skechers.com/open.aspx?NBJUC24YDGGENDIIFTWBSORU5A.100217&d=100217&bmt=0
```

**Krux/Salesforce DMP pixels — three zero-pixel beacons fired at send time:**
```
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=9153f33fe5c…
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=121173391
beacon.krxd.net/1x1_ad_impression.gif?confid=so3yexmpm&campaignid=TRG_US_EN_BROWSEINSTOCK_1_03202025
```
- `partner_uid=121173391` is a raw subscriber ID exposed in-pixel. Confirm this is acceptable under your data-sharing agreement with Krux/Salesforce CDP.
- SHA-256 hashed `partner_uid` on the first beacon looks correctly hashed — no plaintext PII.

**26 click-redirect links** all route through `click.emails.skechers.com` — consistent, no broken redirect domains detected. Final destination UTM resolution could not be confirmed (redirect chain not followed by QA probe).

---

### 3. Rendering & Accessibility

**[WARN] 3 images served over HTTP — mixed-content risk:**
| Image | Issue |
|---|---|
| `dde00662…png` | HTTP + present alt text (`"Skechers"`) |
| `041c30ac…png` | HTTP + **missing alt text** |
| `f9b5ed32…png` | HTTP + **missing alt text** |

All sourced from `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/…` — HTTPS variant of this domain should be used. Gmail and Apple Mail proxy images over HTTPS; other clients (Outlook desktop, some Android) may block or show broken images.

**Malformed charset meta tag:**
```html
<meta content="text/html; charset=UTF-8" />
```
Missing `http-equiv="Content-Type"` attribute. Correct form:
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```
Some older Outlook and Lotus Notes clients fall back to system encoding without this.

**Viewport `user-scalable=0`** should be `user-scalable=no` per spec — `0` is non-standard and ignored by some parsers.

**DOCTYPE:** HTML 4.01 Transitional — expected for email, no issue.

**Responsive breakpoints:** Two media query blocks (`max-width:480px`, `max-width:640px`) with overlapping `.mobile-pi` and `.mobile-hidden` overrides — functional but redundant. Not a bug, low priority.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%variable%%`, `{{field}}`) visible in the provided source. The Krux `partner_uid` values appear correctly populated (subscriber ID and SHA-256 hash).

The preheader text is hardcoded: `"The Skechers you loved are back and selling fast! Get yours now."` — no dynamic personalization tokens in the preheader. This is consistent with a browse-retargeting send where product-level dynamic content would appear in the body.

---

### 5. Compliance

**[FAIL] Plain-text fallback: 0 characters**
QA confirmed the `text/plain` MIME part is empty. CAN-SPAM does not explicitly require plain text, but a zero-length plain-text part degrades deliverability scoring with Postmaster tools and triggers spam filters (SpamAssassin `MIME_HTML_ONLY` rule). Add a minimal plain-text version.

**[WARN] Authentication-Results header not present**
SPF and DKIM pass/fail status could not be verified via the AgentMail relay. The sending domain `emails.skechers.com` should have:
- SPF record covering SFMC IP ranges
- DKIM signature from `emails.skechers.com` or delegated selector
- DMARC policy on `skechers.com`

This is likely configured correctly in production but should be confirmed against a live received header.

**Unsubscribe link:** HTML is truncated; confirmation not possible from this source. CAN-SPAM requires a functional opt-out mechanism — verify footer contains a working unsubscribe URL, not just a preference center redirect that silently fails.

**Physical address:** Also in truncated footer — verify presence per CAN-SPAM §5(a)(5).

---

### 6. Email-to-Site Continuity

**UTM parameters** cannot be confirmed — all 26 links are click-redirect wrappers through `click.emails.skechers.com`. The Krux ad impression beacon includes `campaignid=TRG_US_EN_BROWSEINSTOCK_1_03202025`, which confirms this is a browse-retargeting trigger. Verify that SFMC click-redirect appends consistent UTM params (e.g., `utm_campaign=browseinstock`, `utm_medium=email`) before handing off to `skechers.com`.

If UTMs are applied server-side by the redirect, confirm the parameter set aligns with the Krux campaign ID so site analytics and ad attribution are joined correctly.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | Plain-text body is 0 chars | Generate and attach a plain-text MIME part — even a minimal one |
| **High** | 3 images on HTTP | Change `http://image.emails.skechers.com/` to `https://` across all image `src` attributes |
| **High** | 2 images missing `alt` text | Add descriptive `alt` on `041c30ac…png` and `f9b5ed32…png` |
| **Medium** | Auth headers unverifiable | Confirm SPF/DKIM/DMARC on `emails.skechers.com` via a live received header or mail-tester run |
| **Medium** | Raw subscriber ID in Krux pixel | Review `partner_uid=121173391` data-sharing scope with DMP contract |
| **Low** | Malformed charset meta | Add `http-equiv="Content-Type"` to the meta tag |
| **Low** | `user-scalable=0` | Change to `user-scalable=no` |
## Recent history

- [[2026-03-29-the-countdown-to-fifa-world-cup-26-is-on]] — 3/10 (2026-03-25)
- [[2026-03-29-check-out-this-month-s-adiclub-benefits-here-is-your-march-newsletter]] — 4/10 (2026-03-24)
- [[2026-03-29-last-day-to-redeem-your-voucher]] — 5/10 (2026-03-23)

