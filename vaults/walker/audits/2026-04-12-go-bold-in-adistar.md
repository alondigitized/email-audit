---
slug: 2026-04-12-go-bold-in-adistar
type: email
date: 2026-04-12
persona: walker
score: "5/10"
sender: adidas
subject: Go bold in Adistar
tags: [email, score-5, sender/adidas]
---
# Go bold in Adistar
**Score:** 5/10 · **Type:** Email audit · **2026-04-12**
## Executive summary

- A clean, product-focused email promoting the Adistar XLC 2.0 shoe. The layout is minimal and competent but the creative ambition doesn't match the subject line's promise of boldness. The hero section is oddly quiet — a pale, low-contrast colorway on a white background — and the "Style That Stands Out" headline gets contradicted before it earns belief. The product grid does the heavy lifting but lacks differentiation between items. Functional but forgettable.
- Competent e-commerce structure. The email will convert existing intent but won't create new desire. Missed opportunity to make the campaign feel like a moment.

## What's working

- **Clear product focus.** One shoe, one story. No topic scatter.
- **Top navigation banner** ("Explore the latest adidas best sellers") with a CTA captures upper-funnel interest immediately.
- **Product grid (2x2)** gives four colorway options with prices and "SHOP NOW" links — good for browsers who don't want the hero colorway.
- **Price + rating visible** on each product card — useful buying signals without leaving the email.
- **Footer utility links** (Account, Privacy, Unsubscribe, adidas.com) are clean and properly placed.

## What's weak

- **Hero colorway undercuts the bold promise.** The lead shoe is a muted sand/grey on a white background — it reads as understated, not bold. The email's own headline ("Style That Stands Out") is harder to believe when the first image whispers.
- **Subject line and email body are misaligned.** "Go bold in Adistar" sets a tone that is never delivered visually. The most vivid colorways (lime green, coral/orange) are buried in the grid.
- **Tiny hero rating and price.** The rating icon and $170 price under the hero image are easy to miss — they feel like an afterthought rather than a buying trigger.
- **No lifestyle context.** Every image is a product shot on a white field. There's no person, no movement, no scene. For a shoe pitched on style, that's a credibility gap.
- **"STYLE THAT STANDS OUT" headline adds no information.** It's generic brand copy that could appear on any shoe email. It doesn't tie to a specific use case, occasion, or differentiating feature of the Adistar XLC 2.0.
- **No hero CTA button.** The hero section lacks a primary "Shop Now" or "Get the Look" CTA — users have to scroll to the grid to find action.
- **Product names in grid are identical in format and nearly the same text.** "ADISTAR XLC 2.0 SHOES" repeated four times gives no reason to choose one over another beyond color.

## Recommendations

- 1. **Lead with the boldest colorway.** Swap the sand/grey hero for the lime green or coral colorway. The first image should deliver on "Go bold."
- 2. **Add a CTA to the hero section.** A single prominent button ("Shop Adistar XLC 2.0") below the hero image is the expected pattern and it's missing.
- 3. **Differentiate the grid cards.** Label colorways by name (e.g., "Core Black," "Solar Green") so each card is distinct and scannable.
- 4. **Write a real hero headline.** Replace "Style That Stands Out" with something specific to the Adistar's design story — the retro proportions and chunky silhouette referenced in the subhead copy ("amplified proportions and retro vibes") are more interesting than a generic tagline.
- 5. **Add one lifestyle or editorial image.** Even a single on-foot shot would dramatically increase the shoe's desirability and justify the "bold style" framing.
- 6. **Lead the subject line with a hook, not a command.** See Subject Line Analysis below.
- | Priority | Action |
- |---|---|
- | **Critical** | Fix the broken click-redirect: the `/g/b49dd090...` destination URL registered in the ESP is missing its hostname. Re-register as an absolute URL before any resend or live deployment. |
- | **High** | Upgrade all three HTTP image sources to HTTPS equivalents, especially the open-tracking pixel at `click.comms.adidas.com` — HTTP pixels are blocked silently, suppressing open-rate data. |
- | **High** | Add a plain-text MIME alternative. Even a minimal stripped-text version improves deliverability scoring and client compatibility. |
- | **Medium** | Add `alt` attributes to the two images identified above. |
- | **Medium** | Manually probe a sample of the 21 remaining tracking links to confirm the broken-redirect pattern is isolated to one link and not systemic. |
- | **Low** | Add standard UTM parameters (`utm_source=email&utm_medium=email&utm_campaign=adistar-bold`) to destination URLs so web analytics can attribute email traffic correctly. |
- | **Low** | Add `http-equiv="Content-Type"` to the charset `<meta>` tag. |
- | **Low** | Deduplicate the `@font-face` declarations across the two `<style>` blocks. |

## Full review
### 1. Executive Summary

A clean, product-focused email promoting the Adistar XLC 2.0 shoe. The layout is minimal and competent but the creative ambition doesn't match the subject line's promise of boldness. The hero section is oddly quiet — a pale, low-contrast colorway on a white background — and the "Style That Stands Out" headline gets contradicted before it earns belief. The product grid does the heavy lifting but lacks differentiation between items. Functional but forgettable.

---

### 2. Business Impact Score: **5 / 10**

Competent e-commerce structure. The email will convert existing intent but won't create new desire. Missed opportunity to make the campaign feel like a moment.

---

### 3. What's Working

- **Clear product focus.** One shoe, one story. No topic scatter.
- **Top navigation banner** ("Explore the latest adidas best sellers") with a CTA captures upper-funnel interest immediately.
- **Product grid (2x2)** gives four colorway options with prices and "SHOP NOW" links — good for browsers who don't want the hero colorway.
- **Price + rating visible** on each product card — useful buying signals without leaving the email.
- **Footer utility links** (Account, Privacy, Unsubscribe, adidas.com) are clean and properly placed.

---

### 4. What's Weak

- **Hero colorway undercuts the bold promise.** The lead shoe is a muted sand/grey on a white background — it reads as understated, not bold. The email's own headline ("Style That Stands Out") is harder to believe when the first image whispers.
- **Subject line and email body are misaligned.** "Go bold in Adistar" sets a tone that is never delivered visually. The most vivid colorways (lime green, coral/orange) are buried in the grid.
- **Tiny hero rating and price.** The rating icon and $170 price under the hero image are easy to miss — they feel like an afterthought rather than a buying trigger.
- **No lifestyle context.** Every image is a product shot on a white field. There's no person, no movement, no scene. For a shoe pitched on style, that's a credibility gap.
- **"STYLE THAT STANDS OUT" headline adds no information.** It's generic brand copy that could appear on any shoe email. It doesn't tie to a specific use case, occasion, or differentiating feature of the Adistar XLC 2.0.
- **No hero CTA button.** The hero section lacks a primary "Shop Now" or "Get the Look" CTA — users have to scroll to the grid to find action.
- **Product names in grid are identical in format and nearly the same text.** "ADISTAR XLC 2.0 SHOES" repeated four times gives no reason to choose one over another beyond color.

---

### 5. Recommendations

1. **Lead with the boldest colorway.** Swap the sand/grey hero for the lime green or coral colorway. The first image should deliver on "Go bold."
2. **Add a CTA to the hero section.** A single prominent button ("Shop Adistar XLC 2.0") below the hero image is the expected pattern and it's missing.
3. **Differentiate the grid cards.** Label colorways by name (e.g., "Core Black," "Solar Green") so each card is distinct and scannable.
4. **Write a real hero headline.** Replace "Style That Stands Out" with something specific to the Adistar's design story — the retro proportions and chunky silhouette referenced in the subhead copy ("amplified proportions and retro vibes") are more interesting than a generic tagline.
5. **Add one lifestyle or editorial image.** Even a single on-foot shot would dramatically increase the shoe's desirability and justify the "bold style" framing.
6. **Lead the subject line with a hook, not a command.** See Subject Line Analysis below.

---

### 6. Bottom Line

Adidas sent a "Go bold" email that plays it safe at every turn. The product is real and the email functions, but the creative execution doesn't match the positioning. Fixing the hero image choice and adding a CTA alone would improve conversion rate. The deeper issue is brand voice — generic taglines and clinical product shots will lose in any inbox against competitors who tell a visual story.

---

### 7. Subject Line Analysis

- **Subject:** `Go bold in Adistar`
- **Length:** 19 characters
- **Scores (1-10):** Clarity `6`, Curiosity `4`, Personalization `2`, Urgency `3`, Specificity `5`
- **Strengths:**
  - Short and punchy — very scannable in mobile inbox
  - "Adistar" names the product directly, avoiding vague teaser syndrome
- **Weaknesses:**
  - "Go bold" is a generic brand command with no concrete hook or benefit — dozens of brands use this pattern
  - No urgency, no offer, no reason to open *today* vs. tomorrow
- **Alt A:** `The Adistar XLC 2.0 just dropped — 4 bold new colorways`
- **Alt B:** `Chunky. Retro. Very Adistar. Shop the XLC 2.0`

---

### 8. Evidence

- **Overall purpose:** Drive traffic to the Adistar XLC 2.0 product page across multiple colorways.
- **Hero / primary value proposition:** Single large product shot of the Adistar XLC 2.0 in a muted colorway, with $170 price and a rating indicator. No CTA button in this zone.
- **Membership / benefits section:** Not present.
- **Product discoverability / recommendation modules:** 2x2 grid below the hero showing four colorway variants (white/black, black, lime green, coral/orange) — each with price ($170), rating, and "SHOP NOW" link.
- **Utility / secondary modules:** Top banner promoting "adidas best sellers" with a "SHOP NOW" CTA. Footer with account management, privacy, and unsubscribe links.
- **Bugs / friction / clarity issues:** No visible broken images or overlapping text. The hero section's lack of a CTA button is a structural omission, not a render bug, but it creates friction.

---

## Technical Audit

## Technical Audit — adidas "Go bold in Adistar"
**From:** adidas@us-news.comms.adidas.com

---

### 1. Technical Summary

Two confirmed failures: a broken click-redirect producing a relative-URL destination, and a missing plain-text MIME part. Three HTTP (non-HTTPS) image sources risk silent blocking in modern clients.

---

### 2. Link & Tracking Issues

**[FAIL] Broken redirect — relative URL destination**
The click-tracking handler at `https://dv.adidas.com/o/b49dd090-2bdc-4d2e-aa43-c8b8c4487351` resolves to a relative path `/g/b49dd090-2bdc-4d2e-aa43-c8b8c4487351?txn=5df9b600-3691-11f1-bfd8-8668c83b363d` rather than an absolute URL. The QA checker cannot follow this (`unknown url type: '/g/...'`), and recipients clicking this link will land on a broken or unresolvable destination.
- Affected tracking URL param: `txn=5df9b600-3691-11f1-bfd8-8668c83b363d`
- Root cause is almost certainly a malformed destination URL registered in the ESP click-tracking system — the `/g/` path prefix is missing the hostname.

**[WARN] 21 tracking links unverified**
All remaining CTA links route through click-redirect domains and were not probed. The broken-redirect pattern above means at least one additional link failure is possible — manual spot-check recommended before considering this resolved.

---

### 3. Rendering & Accessibility

**[WARN] Two images missing `alt` text**
- `https://dv.adidas.com/o/b49dd090-2bdc-4d2e-aa43-c8b8c4487351?cp_tp=v3.eJzj...` — no `alt` attribute
- `http://click.comms.adidas.com/CI0/0102019d82a49f11-58092534-99d0-44b8-a5ea-3ed3d6b66678-000000/XbS5rujE9...` — no `alt` attribute

Images-off rendering and screen readers will produce blank content for both.

**[WARN] Three HTTP image sources (non-HTTPS)**
- `http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` (appears twice — same asset, duplicate `<img>` tag or duplicate warning)
- `http://click.comms.adidas.com/CI0/0102019d82a49f11-.../XbS5rujE9...` (likely the open/read tracking pixel)

Gmail, Outlook.com, and Apple Mail proxy or block mixed-content HTTP image loads. The tracking pixel at `click.comms.adidas.com` being HTTP means open-rate measurement for affected clients will be suppressed.

**Duplicate `@font-face` declarations**
`AdihausDIN` and `AdineuePRO` are declared twice across two separate `<style>` blocks with identical `local()` fallback sources. No web font URLs are loaded — both families resolve to system fonts (Arial/Helvetica). No rendering breakage, but the duplication adds ~1 KB of dead CSS.

**`<meta>` charset declaration missing `http-equiv`**
```html
<meta content="text/html; charset=UTF-8" />
```
Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```
Without `http-equiv`, the charset hint is non-standard; some older parsers may not apply it.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens or `{{placeholder}}` syntax visible in the truncated source. No issues found from available HTML.

---

### 5. Compliance

**[FAIL] Plain-text MIME part absent**
The text/plain alternative is 0 characters. While CAN-SPAM does not strictly mandate a plain-text part, its absence:
- Elevates spam-filter scoring (SpamAssassin `MIME_HTML_ONLY` rule)
- Breaks display in plain-text–only mail clients and some corporate gateways

**[WARN] Authentication-Results header not present**
SPF and DKIM pass/fail status could not be confirmed via the AgentMail relay headers. The sending domain `us-news.comms.adidas.com` is an ESP subdomain — alignment should be verified against DMARC policy for `adidas.com`.

**Unsubscribe / physical address** — footer markup classes (`mobile-footer-padding-block`, `net-footer-logo-v2`) suggest standard footer structure is present, but the HTML was truncated before the footer content. Unable to confirm unsubscribe link and postal address from available source; assume present based on structure.

---

### 6. Email-to-Site Continuity

The click-tracking URLs use proprietary ESP parameters (`cp_tp`, `cp_cid`, `mi_cid`, `mi_mid`) rather than standard UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`). This means:
- Web analytics (GA4 or equivalent) will attribute landing-page sessions as direct or organic rather than email
- No UTM-based campaign segmentation available downstream

The broken redirect on the `txn=5df9b600...` link means that click's destination receives no traffic at all, proprietary params or otherwise.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **Critical** | Fix the broken click-redirect: the `/g/b49dd090...` destination URL registered in the ESP is missing its hostname. Re-register as an absolute URL before any resend or live deployment. |
| **High** | Upgrade all three HTTP image sources to HTTPS equivalents, especially the open-tracking pixel at `click.comms.adidas.com` — HTTP pixels are blocked silently, suppressing open-rate data. |
| **High** | Add a plain-text MIME alternative. Even a minimal stripped-text version improves deliverability scoring and client compatibility. |
| **Medium** | Add `alt` attributes to the two images identified above. |
| **Medium** | Manually probe a sample of the 21 remaining tracking links to confirm the broken-redirect pattern is isolated to one link and not systemic. |
| **Low** | Add standard UTM parameters (`utm_source=email&utm_medium=email&utm_campaign=adistar-bold`) to destination URLs so web analytics can attribute email traffic correctly. |
| **Low** | Add `http-equiv="Content-Type"` to the charset `<meta>` tag. |
| **Low** | Deduplicate the `@font-face` declarations across the two `<style>` blocks. |
## Recent history

- [[2026-04-12-spring-favorites-just-a-click-away-bogo-50-off]] — 5/10 (2026-04-12)
- [[2026-04-12-did-you-forget-something]] — 5/10 (2026-04-12)
- [[2026-04-12-f-tbol-y-familia]] — 5/10 (2026-04-12)

