---
slug: 2026-04-05-adistar-xlg-2-0-dynamic-form-and-heritage-style
type: email
date: 2026-04-05
persona: walker
score: "5/10"
sender: adidas
subject: "Adistar XLG 2.0: dynamic form and heritage style"
tags: [email, score-5, sender/adidas]
---
# Adistar XLG 2.0: dynamic form and heritage style
**Score:** 5/10 · **Type:** Email audit · **2026-04-05**
## Executive summary

- A dual-purpose email pairing a new shoe launch (Adistar XLG 2.0) with an adiClub x Spotify Premium benefit offer. The hero is visually strong and the shoe gets prominent placement, but the structural logic falls apart in the second half. The Spotify module is roughly equal in visual weight to the product hero, creating a split-focus email that serves neither message especially well. The product section lacks a proper CTA button, relying on a bare text link — the single most damaging conversion issue in the render.
- Strong creative assets undermined by a weak CTA and a diluted message hierarchy.

## What's working

- **Hero image is confident.** The orange Adistar XLG sneaker pops against a muted background — shoe photography is doing its job.
- **Clean layout.** The email doesn't feel cluttered; there's breathing room between sections.
- **Spotify benefit thematically adjacent.** "Run without limits" connecting a running shoe to a streaming partnership is a coherent enough brand logic for existing loyalists.
- **adiClub branding is consistent.** The membership section uses the recognizable badge and visual identity correctly.

## What's weak

- **No CTA button on the hero product.** The product section's call to action appears as a plain text link ("Shop online or at your local adidas store"), not a button. This is a serious friction point — it's visually passive and easily missed on mobile.
- **Two competing narratives, neither dominant.** The shoe launch and the Spotify offer each occupy roughly half the email's real estate. Subscribers can't tell which one is the point of the email.
- **Body copy is too small to scan.** Both the product description and the Spotify section use small type that doesn't hold up as a readable skim layer.
- **No price, no urgency.** New launch emails typically need at least one anchor: price point, limited availability, or a deadline. None is visible here.
- **Spotify module lacks a clear button CTA** in the visible render — same problem as the product section.

## Recommendations

- 1. **Add a button CTA beneath the shoe.** Replace or supplement the text link with a solid button ("Shop Adistar XLG 2.0"). This is the single highest-ROI fix.
- 2. **Pick a primary message.** Either lead with the shoe and relegate Spotify to a supporting module with less visual weight, or make this a Spotify benefit email with the shoe as social proof. Don't split 50/50.
- 3. **Add urgency or a value hook.** "New arrival," a price, or a launch date would give subscribers a reason to act now rather than later.
- 4. **Increase body copy size.** Both sections' descriptive text appears below comfortable reading size in the render.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | P0 | Doubled-domain store locator URL | Re-encode destination URL correctly in the click-tracker template; verify the rendered href before send |
- | P0 | `dv.adidas.com` unknown URL type | Confirm asset `d08c2834-...` resolves to a valid absolute URL; check the dynamic content resolver config |
- | P1 | Plain-text fallback is empty | Generate and attach a substantive `text/plain` part (minimum: subject, key CTAs, unsubscribe URL) |
- | P1 | HTTP image sources (×9) | Update `image.link.adidas.com` and `click.comms.adidas.com` pixel references to HTTPS |
- | P2 | Missing alt text on content image | Add descriptive `alt` to the `dv.adidas.com` asset |
- | P2 | Authentication headers unverifiable | Confirm DKIM signing and SPF alignment for `us-news.comms.adidas.com` at send time |
- | P3 | Duplicate `@font-face` blocks | Consolidate into a single `<style>` block to reduce CSS payload |

## Full review
## Email Review: Adistar XLG 2.0 — adidas

---

### 1. Executive Summary

A dual-purpose email pairing a new shoe launch (Adistar XLG 2.0) with an adiClub x Spotify Premium benefit offer. The hero is visually strong and the shoe gets prominent placement, but the structural logic falls apart in the second half. The Spotify module is roughly equal in visual weight to the product hero, creating a split-focus email that serves neither message especially well. The product section lacks a proper CTA button, relying on a bare text link — the single most damaging conversion issue in the render.

---

### 2. Business Impact Score: 5/10

Strong creative assets undermined by a weak CTA and a diluted message hierarchy.

---

### 3. What's Working

- **Hero image is confident.** The orange Adistar XLG sneaker pops against a muted background — shoe photography is doing its job.
- **Clean layout.** The email doesn't feel cluttered; there's breathing room between sections.
- **Spotify benefit thematically adjacent.** "Run without limits" connecting a running shoe to a streaming partnership is a coherent enough brand logic for existing loyalists.
- **adiClub branding is consistent.** The membership section uses the recognizable badge and visual identity correctly.

---

### 4. What's Weak

- **No CTA button on the hero product.** The product section's call to action appears as a plain text link ("Shop online or at your local adidas store"), not a button. This is a serious friction point — it's visually passive and easily missed on mobile.
- **Two competing narratives, neither dominant.** The shoe launch and the Spotify offer each occupy roughly half the email's real estate. Subscribers can't tell which one is the point of the email.
- **Body copy is too small to scan.** Both the product description and the Spotify section use small type that doesn't hold up as a readable skim layer.
- **No price, no urgency.** New launch emails typically need at least one anchor: price point, limited availability, or a deadline. None is visible here.
- **Spotify module lacks a clear button CTA** in the visible render — same problem as the product section.

---

### 5. Recommendations

1. **Add a button CTA beneath the shoe.** Replace or supplement the text link with a solid button ("Shop Adistar XLG 2.0"). This is the single highest-ROI fix.
2. **Pick a primary message.** Either lead with the shoe and relegate Spotify to a supporting module with less visual weight, or make this a Spotify benefit email with the shoe as social proof. Don't split 50/50.
3. **Add urgency or a value hook.** "New arrival," a price, or a launch date would give subscribers a reason to act now rather than later.
4. **Increase body copy size.** Both sections' descriptive text appears below comfortable reading size in the render.

---

### 6. Bottom Line

This email has the visual ingredients to convert — great shoe, clean design, a real membership benefit — but it's structurally indecisive. The absence of a button CTA on the product is the most urgent fix. Addressing the 50/50 split between the shoe and Spotify would lift this from a middling engagement email to a focused launch driver.

---

### 7. Evidence

**Overall purpose:** New product introduction (Adistar XLG 2.0) combined with an adiClub membership benefit (Spotify Premium partnership).

**Hero / primary value proposition:** Full-bleed image of the Adistar XLG sneaker in a warm orange colorway with "ADISTAR XLG" text overlaid. Followed immediately below by a headline "ADISTAR XLG 2.0" and short descriptor copy. The shoe is the visual anchor but loses momentum with no button CTA.

**Membership / benefits section:** adiClub x Spotify Premium module with headline "RUN WITHOUT LIMITS — GET SPOTIFY PREMIUM." Includes supporting copy about earning points and redeeming for Spotify access. Badge logo present. No visible button CTA in the render.

**Product discoverability / recommendation modules:** None. No cross-sell, no related products, no "complete the look" rail. This is a single-product email with no discovery pathway.

**Utility / secondary modules:** Standard adidas footer with My Account, Privacy Statement, Support, Unsubscribe, and adidas stores links. Legal/disclaimer text below the fold. Functional and expected.

**Bugs / friction / clarity issues:** No broken images or rendering artifacts visible. The only structural issue visible in the render is the text-link CTA replacing what should be a button in both the product section and the Spotify section.

---

## Technical Audit

## Technical Audit — Adistar XLG 2.0: dynamic form and heritage style
**From:** adidas@us-news.comms.adidas.com | **Date:** 2026-04-04

---

### 1. Technical Summary
The email has two broken destination URLs (one a doubled-domain encoding bug, one an unresolvable URL type), a missing plain-text fallback (0 chars), and multiple non-HTTPS image sources that will be blocked by major mail clients with image security policies. Authentication header data is absent from the relay.

---

### 2. Link & Tracking Issues

**[FAIL] Doubled-domain encoding bug — store locator link**
The "Shop online or at your local adidas store.*" CTA encodes a full `https://www.adidas.com` URL as a literal path segment inside the click-tracker, resulting in a malformed destination:
```
https://click.comms.adidas.com/CL0/https:%2F%2Fwww.adidas.com%2Fus%2Fstores/1/
  0102019d5c0b6723-e8e49d30-2950-4c60-bd8d-cde35bcc502c-000000/
  Z5o0H75g2TGyvdzLqy7D2cmUC55RbRqD2xfT5DRCzNc=451
```
Expected pattern: `https://click.comms.adidas.com/CL0/<token>/...` with the destination URL passed as a parameter, not embedded in the path. This link will not resolve correctly.

**[FAIL] Unknown URL type — dynamic video/content asset**
The QA checker flagged an unresolvable URL type for a `dv.adidas.com` asset linked with the identifier `d08c2834-b447-4d34-a609-1443f1e084bb`. The link checker returned `unknown url type: '/g/...'`, suggesting the asset resolver is returning a relative path or malformed redirect rather than a full URL. This asset may fail to load or route incorrectly.

**[WARN] 37 tracking links not probed**
All click-redirect URLs through `click.comms.adidas.com` were skipped during HTTP validation. No broken destination URLs can be confirmed or excluded for those links without a full crawl.

---

### 3. Rendering & Accessibility

**[WARN] Non-HTTPS image sources — will be blocked**
The arrow icon (`b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg`) is referenced **8 times** via HTTP:
```
http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```
The open/tracking pixel is also served over HTTP:
```
http://click.comms.adidas.com/CI0/0102019d5c0b6723-e8e49d30-2950-4c60-bd8d-cde35bcc502c-000000/...
```
Gmail (2023+), Apple Mail, and Outlook block mixed-content images. The arrow will render as a broken image in most clients; the HTTP pixel will silently fail to fire.

**[WARN] Missing alt text on 2 images**
- `dv.adidas.com` asset `d08c2834-b447-4d34-a609-1443f1e084bb` — no `alt` attribute
- Tracking pixel `1tezU6s2LqgZr6qvFwbhBZOqkkjym0RZ3BV4l6w3Qvs=451` — no `alt` attribute

The tracking pixel omission is standard practice, but the content image (`dv.adidas.com`) should carry descriptive alt text for screen readers and image-blocked rendering.

**[WARN] Duplicate `@font-face` declarations**
`AdihausDIN` (400, 700) and `AdineuePRO` (400, 600) are each declared twice across two separate `<style>` blocks in `<head>`. The second block is a subset of the first (fewer fallbacks). While not functionally breaking, it adds unnecessary CSS weight and risks parser inconsistency in older Outlook rendering engines.

---

### 4. Personalization & Merge Tokens

No issues found. No unresolved merge tokens (e.g., `{{first_name}}`, `*|FNAME|*`) detected in the available HTML source.

---

### 5. Compliance

**[FAIL] Plain-text fallback is 0 characters**
The `text/plain` MIME part is empty. CAN-SPAM does not explicitly mandate a text part, but its absence degrades deliverability scores (SpamAssassin, Barracuda) and breaks rendering in text-only clients and accessibility tools. Best practice and most ESP guidelines require a substantive plain-text alternative.

**[WARN] Authentication-Results header not present**
SPF and DKIM pass/fail status could not be verified via the AgentMail relay. This is an observability gap in the audit pipeline rather than a confirmed auth failure, but it should be confirmed that DKIM is signed for `us-news.comms.adidas.com` and SPF is aligned with the sending IP.

CAN-SPAM physical address and unsubscribe mechanism were present in the footer (confirmed by HTML structure); no issues there.

---

### 6. Email-to-Site Continuity

**[FAIL] Store locator link will not resolve**
As noted in §2, the doubled-domain encoding bug means clicks on the store CTA will not reach `adidas.com/us/stores`. Users will hit a broken URL or a click-tracker error page.

No UTM parameter stripping issues identified in the available link samples — the `click.comms.adidas.com` redirects appear to pass through to destination URLs with parameters intact (where destination URLs are correctly encoded).

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| P0 | Doubled-domain store locator URL | Re-encode destination URL correctly in the click-tracker template; verify the rendered href before send |
| P0 | `dv.adidas.com` unknown URL type | Confirm asset `d08c2834-...` resolves to a valid absolute URL; check the dynamic content resolver config |
| P1 | Plain-text fallback is empty | Generate and attach a substantive `text/plain` part (minimum: subject, key CTAs, unsubscribe URL) |
| P1 | HTTP image sources (×9) | Update `image.link.adidas.com` and `click.comms.adidas.com` pixel references to HTTPS |
| P2 | Missing alt text on content image | Add descriptive `alt` to the `dv.adidas.com` asset |
| P2 | Authentication headers unverifiable | Confirm DKIM signing and SPF alignment for `us-news.comms.adidas.com` at send time |
| P3 | Duplicate `@font-face` blocks | Consolidate into a single `<style>` block to reduce CSS payload |
## Recent history

- [[2026-04-04-your-cart-expires-soon]] — 5/10 (2026-04-04)
- [[2026-04-04-start-with-one-get-the-second-for-less]] — 6/10 (2026-04-04)
- [[2026-04-11-your-items-are-waiting]] — 5/10 (2026-04-04)

