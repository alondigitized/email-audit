---
slug: 2026-04-18-hi-we-re-glad-to-have-you
type: email
date: 2026-04-13
persona: walker
score: "5/10"
sender: Famous Footwear
subject: Hi  we’re glad to have you!
tags: [email, score-5, sender/famous-footwear]
---
# Hi  we’re glad to have you!
**Score:** 5/10 · **Type:** Email audit · **2026-04-13**
## Executive summary

- Competent creative hamstrung by personalization failure and a wasted preview slot. The 15% welcome offer has real conversion potential; the broken subject line and URL preview drain it.

## What's working

- **Hero image** is warm and relatable — a family in casual, colorful shoes in an outdoor setting. Fits the "styles for everyone" positioning.
- **15% off welcome offer** is clearly presented and visually prominent with a bold red/orange treatment. Easy to find and act on.
- **"Famous for Rewards" section** surfaces the loyalty program naturally as a secondary value prop — not buried in the footer.
- **"Famous for Making It Easy"** convenience module (Famously Fast Pickup, free shipping) adds functional reasons to trust the brand beyond just price.
- **Footer** includes app download CTAs and a barcode element — useful for customers who shop in-store.

## What's weak

- **Broken first name token in subject line** — the double space after "Hi" is visible proof the merge field failed. This is the most damaging issue in the email.
- **Preview text is a raw URL** — instead of teaser copy, recipients see a long click-tracking URL. This wastes the second most valuable inbox real estate after the subject line.
- **Three sequential "Famous for…" headline sections** back-to-back create repetition fatigue. The brand cadence works once; three times in a scroll feels like a template on autopilot.
- **No visible expiry on the 15% offer** — if there's urgency baked in, it's not surfaced in the render.
- **The welcome copy is thin** — "Thanks for shopping with us in store and joining us to receive emails" is functional but cold for a brand that sells on style and aspiration.

## Recommendations

- 1. **Fix the merge token immediately** — audit why first name is blank and either fix the data feed or default to "there" ("Hi there, we're glad to have you!").
- 2. **Replace the preview URL with human copy** — e.g., "Your 15% welcome offer is inside — shop styles for the whole family."
- 3. **Consolidate the "Famous for…" sections** — combine Rewards + Making It Easy into one visual block to reduce scroll depth and repetition.
- 4. **Add a deadline to the 15% offer** — even "valid for 7 days" increases urgency and click-through.
- 5. **Warm up the welcome copy** — lead with a brand voice moment before the transactional thank-you language.
- | Priority | Issue | Fix |
- |---|---|---|
- | P0 | Empty first-name merge token in subject | Add fallback value; re-test with blank profile record before send |
- | P1 | Unclosed CSS media query braces (≤414px) | Fix CSS structure; validate with an HTML/CSS linter before next send |
- | P2 | Duplicate viewport meta tag | Remove the first declaration; keep the simpler second tag; remove `maximum-scale` |
- | P3 | Missing `http-equiv` on charset meta | Add `http-equiv="Content-Type"` attribute |
- | P3 | XHTML namespace uses `https://` | Change to `http://www.w3.org/1999/xhtml` |
- | — | Links, compliance, UTM — full source needed | Re-run audit with complete HTML and raw message headers |

## Full review
## 2. Business Impact Score: 5/10

Competent creative hamstrung by personalization failure and a wasted preview slot. The 15% welcome offer has real conversion potential; the broken subject line and URL preview drain it.

---

## 3. What's Working

- **Hero image** is warm and relatable — a family in casual, colorful shoes in an outdoor setting. Fits the "styles for everyone" positioning.
- **15% off welcome offer** is clearly presented and visually prominent with a bold red/orange treatment. Easy to find and act on.
- **"Famous for Rewards" section** surfaces the loyalty program naturally as a secondary value prop — not buried in the footer.
- **"Famous for Making It Easy"** convenience module (Famously Fast Pickup, free shipping) adds functional reasons to trust the brand beyond just price.
- **Footer** includes app download CTAs and a barcode element — useful for customers who shop in-store.

---

## 4. What's Weak

- **Broken first name token in subject line** — the double space after "Hi" is visible proof the merge field failed. This is the most damaging issue in the email.
- **Preview text is a raw URL** — instead of teaser copy, recipients see a long click-tracking URL. This wastes the second most valuable inbox real estate after the subject line.
- **Three sequential "Famous for…" headline sections** back-to-back create repetition fatigue. The brand cadence works once; three times in a scroll feels like a template on autopilot.
- **No visible expiry on the 15% offer** — if there's urgency baked in, it's not surfaced in the render.
- **The welcome copy is thin** — "Thanks for shopping with us in store and joining us to receive emails" is functional but cold for a brand that sells on style and aspiration.

---

## 5. Recommendations

1. **Fix the merge token immediately** — audit why first name is blank and either fix the data feed or default to "there" ("Hi there, we're glad to have you!").
2. **Replace the preview URL with human copy** — e.g., "Your 15% welcome offer is inside — shop styles for the whole family."
3. **Consolidate the "Famous for…" sections** — combine Rewards + Making It Easy into one visual block to reduce scroll depth and repetition.
4. **Add a deadline to the 15% offer** — even "valid for 7 days" increases urgency and click-through.
5. **Warm up the welcome copy** — lead with a brand voice moment before the transactional thank-you language.

---

## 6. Bottom Line

The bones of a good welcome email are here. The offer is right, the imagery earns its space, and the loyalty/convenience sections add real value. But the broken personalization and URL preview make this feel like a system failure rather than a brand moment. Fix those two issues first — they cost nothing and have an outsized impact on open rate and first impression.

---

## 7. Subject Line Analysis

- **Subject:** `Hi  we're glad to have you!`
- **Length:** 27 characters (including the errant double space)
- **Scores (1-10):** Clarity `6`, Curiosity `2`, Personalization `1`, Urgency `1`, Specificity `2`
- **Strengths:**
  - Warm, friendly tone that fits the brand
  - Short enough to display fully on mobile
- **Weaknesses:**
  - Blank first name token creates a visible broken double space — damages credibility instantly
  - No hook, offer mention, or reason to open; generic to any retailer
- **Alt A:** `Hi [First Name], your 15% welcome offer is waiting`
- **Alt B:** `Welcome to Famous Footwear — here's 15% off your next pair`

---

## 8. Evidence

- **Overall purpose:** Welcome / onboarding email triggered by in-store purchase + email sign-up
- **Hero / primary value prop:** "Famous for the Best Styles" — lifestyle photography of a family in colorful shoes outdoors; warm and on-brand
- **Membership / benefits section:** "Famous for Rewards" — dedicated section pitching the loyalty program with benefit callouts; appropriately placed mid-email
- **Product discoverability / recommendation modules:** None visible — no product grid, no "shop now by category" tiles; the email is brand/offer-led, not product-led
- **Utility / secondary modules:** "Famous for Making It Easy" — Famously Fast Pickup, Your Way, free shipping; barcode element in footer; App Store / Google Play download CTAs
- **Bugs / friction / clarity issues:**
  - Double space in subject line (broken first name merge field) — visible in the subject as rendered
  - Preview text displays a raw tracking URL instead of teaser copy — visible in inbox preview

---

## Technical Audit

## Technical Audit — Famous Footwear Welcome Email

---

### 1. Technical Summary

The email contains a confirmed merge token failure in the subject line, a structurally broken CSS block with unclosed media query braces, and a duplicate/conflicting viewport meta declaration. These are deliverable defects, not cosmetic ones.

---

### 2. Link & Tracking Issues

**Cannot fully assess** — HTML source is truncated before body links appear. No CTAs, tracking pixels, or redirect URLs visible in the provided excerpt. A full-source audit is required to verify UTM parameter consistency and click-tracking instrumentation.

---

### 3. Rendering & Accessibility

**[HIGH] Unclosed CSS media query braces**
Starting at `@media screen and (max-width: 414px)`, three consecutive media blocks open without closing braces before the next `@media` declaration:

```css
@media screen and (max-width: 414px) { .padl10m { padding-left: 0px; }
@media screen and (max-width: 412px) { .padl10m { padding-left: 0px; }
@media screen and (max-width: 405px) { ... }
```

This produces invalid CSS. WebKit-based clients (Apple Mail, iOS Mail) will likely discard the entire `<style>` block from that point forward, breaking all responsive breakpoints below 414px.

**[MEDIUM] Duplicate and conflicting `<meta name="viewport">` declarations**
Two viewport tags present:
```html
<meta content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" name="viewport" />
<meta name="viewport" content="width=device-width" />
```
The second tag overrides the first. The `initial-scale=1.0` and `maximum-scale=1.0` from the first declaration are silently dropped. Additionally, `maximum-scale=1.0` blocks user zoom — an accessibility violation (WCAG 1.4.4).

**[LOW] Missing `http-equiv` on charset meta tag**
```html
<meta content="text/html; charset=utf-8" />
```
Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Without `http-equiv`, this tag has no effect. Charset declaration falls back to email client default, which is typically fine but is an implementation gap.

**[LOW] Incorrect XHTML namespace URI**
```html
<html xmlns="https://www.w3.org/1999/xhtml" lang="en">
```
The canonical XHTML namespace is `http://` (not `https://`). Strict XML parsers will reject this as an unknown namespace. Practical impact is low in modern clients.

---

### 4. Personalization & Merge Tokens

**[HIGH] Empty first-name merge token in subject line**

Subject: `Hi  we're glad to have you!`

The double space after "Hi" is a textbook unresolved/blank merge token. The template likely contains `Hi {{first_name}},` or `Hi [FIRST_NAME]` and the variable resolved to an empty string without a fallback. This shipped to at least some recipients.

**Required fix:** Add a fallback value to the merge tag, e.g.:
- ESP syntax example: `Hi {{first_name | default: "there"}},`
- Or restructure subject to not depend on the token.

No other merge tokens are visible in the truncated HTML to assess further.

---

### 5. Compliance (CAN-SPAM, Unsubscribe, Authentication)

**Cannot fully assess** — unsubscribe link, physical mailing address, and authentication headers (SPF, DKIM, DMARC) are not present in the truncated source. These must be verified in:
- Full HTML: confirm `List-Unsubscribe` header and visible unsubscribe link in footer
- Raw message headers: confirm SPF pass, DKIM signature on `email.famousfootwear.com`, DMARC alignment

Sending domain `email.famousfootwear.com` (subdomain) is standard for ESP routing; verify DKIM `d=` tag aligns with this domain or parent domain.

---

### 6. Email-to-Site Continuity

**Cannot assess** — no body links in truncated source. When full source is available, verify:
- All CTA links include `utm_source`, `utm_medium`, `utm_campaign` parameters
- UTM `utm_campaign` value matches internal campaign ID (not a template placeholder)
- Landing page URLs resolve (no 404s on click-tracked redirect chain)

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| P0 | Empty first-name merge token in subject | Add fallback value; re-test with blank profile record before send |
| P1 | Unclosed CSS media query braces (≤414px) | Fix CSS structure; validate with an HTML/CSS linter before next send |
| P2 | Duplicate viewport meta tag | Remove the first declaration; keep the simpler second tag; remove `maximum-scale` |
| P3 | Missing `http-equiv` on charset meta | Add `http-equiv="Content-Type"` attribute |
| P3 | XHTML namespace uses `https://` | Change to `http://www.w3.org/1999/xhtml` |
| — | Links, compliance, UTM — full source needed | Re-run audit with complete HTML and raw message headers |
