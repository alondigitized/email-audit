---
slug: 2026-04-06-anthony-edwards-2-pink-available-now
type: email
date: 2026-04-06
persona: walker
score: "6/10"
sender: adidas
subject: "Anthony Edwards 2: Pink available now"
tags: [email, score-6, sender/adidas]
---
# Anthony Edwards 2: Pink available now
**Score:** 6/10 · **Type:** Email audit · **2026-04-06**
## Executive summary

- A clean, product-focused launch email for a new colorway of the Anthony Edwards 2 basketball shoe. The hero does its job — the pink shoe reads immediately and the headline leaves no ambiguity. But the email loses momentum fast: there's no body CTA button, the product feature module is undersized and hard to read, and the top nav competes with rather than supports the launch message. Functional, not exceptional.
- Credible product presentation held back by missing conversion mechanics and a cluttered lower half.

## What's working

- **Hero image is strong.** The pink shoe dominates the frame, color pops, and the "AVAILABLE ONLINE AND AT SELECT STORES*" overlay sets expectations clearly.
- **Headline is unambiguous.** "ANTHONY EDWARDS 2: PINK" — large, bold, no interpretation required.
- **Lead copy has personality.** "Before it gets ugly on the court, keep it pretty in pink" is tight, on-brand, and athlete-relevant.
- **Feature section adds credibility.** "Innovation Meets Performance" with spec callouts (Progression Plate, LightBoost, LightStrike) gives buyers a functional reason to act beyond aesthetics.

## What's weak

- **No CTA button in the email body.** The only "SHOP NOW" visible is in the top nav banner — not anchored to the hero or the feature section. A product launch email with no primary CTA is a conversion miss.
- **Top nav banner dilutes launch focus.** "Explore the latest adidas best sellers" with its own SHOP NOW pulls attention sideways before the reader even hits the hero.
- **Feature module images are small.** The multi-shoe layout in the "Innovation Meets Performance" section is compressed — individual shots are thumbnail-sized and the product details are lost.
- **Feature copy is dense.** The spec list ("Progression Plate for energy, Articulated Tongue for comfort…") runs in a single paragraph block. Hard to scan, easy to skip.
- **Footer navigation is cluttered.** "My Account / Privacy Statement / Support / Unsubscribe / adidas.com" as plain-text links with "STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949" above them adds noise without value.

## Recommendations

- 1. **Add a CTA button below the hero.** "Shop Anthony Edwards 2: Pink" in the adidas brand black or a contrasting color, directly tied to the PDP. Non-negotiable for a launch email.
- 2. **Remove or reposition the top nav banner.** For a launch send, the above-fold real estate should be entirely owned by the hero. Move cross-sell to a secondary module below the fold.
- 3. **Break the feature copy into scannable bullets or a 3-column icon row.** Each tech point (Plate / LightBoost / Tongue) deserves its own visual treatment — this is where the price justification lives.
- 4. **Enlarge the product feature module images.** Show the shoe from multiple angles at a size that lets the design details breathe. The current layout makes the shoe look like an afterthought below the fold.
- 5. **Add a second CTA at the bottom.** Readers who scroll to the spec section are high-intent. Capture them with a repeated "Shop Now" before the footer.
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | Broken redirect on `e2b9e0ce` link | Decode the `cp_tp` payload and verify the destination resolves to a valid absolute `https://` URL before send |
- | P1 | Plain-text fallback is 0 chars | Generate a full plain-text version from the HTML content; required for CAN-SPAM compliance and deliverability scoring |
- | P1 | 6× HTTP image sources for arrow asset | Update `http://image.link.adidas.com/...` to `https://` across all 6 occurrences |
- | P1 | HTTP tracking pixel | Update `http://click.comms.adidas.com/...` to `https://` |
- | P2 | Missing alt text on product hero image | Add descriptive `alt` text (e.g., `alt="Anthony Edwards 2 - Pink"`) |
- | P2 | SPF/DKIM status unverified | Confirm authentication headers via a test send through the production relay |
- | P3 | Duplicate `@font-face` declarations | Remove the duplicate `<style>` block to reduce parse overhead; confirm whether web font URLs are intentionally omitted |

## Full review
### 1. Executive Summary

A clean, product-focused launch email for a new colorway of the Anthony Edwards 2 basketball shoe. The hero does its job — the pink shoe reads immediately and the headline leaves no ambiguity. But the email loses momentum fast: there's no body CTA button, the product feature module is undersized and hard to read, and the top nav competes with rather than supports the launch message. Functional, not exceptional.

---

### 2. Business Impact Score: **6 / 10**

Credible product presentation held back by missing conversion mechanics and a cluttered lower half.

---

### 3. What's Working

- **Hero image is strong.** The pink shoe dominates the frame, color pops, and the "AVAILABLE ONLINE AND AT SELECT STORES*" overlay sets expectations clearly.
- **Headline is unambiguous.** "ANTHONY EDWARDS 2: PINK" — large, bold, no interpretation required.
- **Lead copy has personality.** "Before it gets ugly on the court, keep it pretty in pink" is tight, on-brand, and athlete-relevant.
- **Feature section adds credibility.** "Innovation Meets Performance" with spec callouts (Progression Plate, LightBoost, LightStrike) gives buyers a functional reason to act beyond aesthetics.

---

### 4. What's Weak

- **No CTA button in the email body.** The only "SHOP NOW" visible is in the top nav banner — not anchored to the hero or the feature section. A product launch email with no primary CTA is a conversion miss.
- **Top nav banner dilutes launch focus.** "Explore the latest adidas best sellers" with its own SHOP NOW pulls attention sideways before the reader even hits the hero.
- **Feature module images are small.** The multi-shoe layout in the "Innovation Meets Performance" section is compressed — individual shots are thumbnail-sized and the product details are lost.
- **Feature copy is dense.** The spec list ("Progression Plate for energy, Articulated Tongue for comfort…") runs in a single paragraph block. Hard to scan, easy to skip.
- **Footer navigation is cluttered.** "My Account / Privacy Statement / Support / Unsubscribe / adidas.com" as plain-text links with "STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949" above them adds noise without value.

---

### 5. Recommendations

1. **Add a CTA button below the hero.** "Shop Anthony Edwards 2: Pink" in the adidas brand black or a contrasting color, directly tied to the PDP. Non-negotiable for a launch email.
2. **Remove or reposition the top nav banner.** For a launch send, the above-fold real estate should be entirely owned by the hero. Move cross-sell to a secondary module below the fold.
3. **Break the feature copy into scannable bullets or a 3-column icon row.** Each tech point (Plate / LightBoost / Tongue) deserves its own visual treatment — this is where the price justification lives.
4. **Enlarge the product feature module images.** Show the shoe from multiple angles at a size that lets the design details breathe. The current layout makes the shoe look like an afterthought below the fold.
5. **Add a second CTA at the bottom.** Readers who scroll to the spec section are high-intent. Capture them with a repeated "Shop Now" before the footer.

---

### 6. Bottom Line

The hero and headline are doing real work, but this email leaves conversion on the table. A product launch with no body CTA is a structural problem, not a polish issue. Fix the CTA, break up the feature copy, and kill the competing top nav — this becomes a solid 8.

---

### 7. Evidence

**Overall purpose:** New colorway launch (pink) for the Anthony Edwards 2 basketball shoe, available online and in select stores.

**Hero / primary value proposition:** Full-bleed shoe image in pink with availability callout overlaid. Headline and short body copy follow immediately below. Effective and immediate — the product is the message.

**Membership / benefits section:** Not present.

**Product discoverability / recommendation modules:** "Innovation Meets Performance" section below the fold features multiple shoe angles and a tech spec paragraph. Intent is right, execution is cramped — images are too small to differentiate angles and the copy is a single unparseable block.

**Utility / secondary modules:** Top nav bar ("Explore the latest adidas best sellers" + SHOP NOW), footer nav (My Account, Privacy, Support, Unsubscribe, adidas.com), standard legal disclaimer text.

**Bugs / friction / clarity issues:** No visible broken images or rendering artifacts. The asterisk on "AVAILABLE ONLINE AND AT SELECT STORES*" has no visible footnote resolution in the body — the resolution only appears in the small-print legal footer at the very bottom, which most recipients will not read.

---

## Technical Audit

## Technical Audit — adidas: Anthony Edwards 2: Pink available now

**From:** adidas@us-news.comms.adidas.com
**Date:** 2026-04-05

---

### 1. Technical Summary

One confirmed broken link will drop a clickable element to a dead destination for all recipients. Multiple HTTP image sources and a missing plain-text fallback compound deliverability and rendering risk across security-strict clients.

---

### 2. Link & Tracking Issues

**[FAIL] Broken redirect — malformed destination URL**
The QA checker resolved one click-tracking URL to a relative path rather than an absolute URL:

```
Unknown url type: '/g/e2b9e0ce-64fd-429a-905f-2a6768dfeeeb?txn=7a17c780-3166-11f1-8be6-8668c83b363d'
Tracking wrapper: https://dv.adidas.com/o/e2b9e0ce-64fd-429a-905f-2a6768dfeeeb?cp_tp=v3...
```

The `dv.adidas.com` redirect resolved to `/g/...` (a bare path with no host), which is not a valid absolute URL. Any recipient clicking this link will land on an error page or get a browser failure. Root cause is likely a misconfigured destination in the ESP/redirect layer — the `cp_tp` payload should decode to a full `https://` URL.

**[INFO] 31 tracking links not probed**
All remaining links pass through `click.comms.adidas.com` and were skipped during HTTP probing. Manual spot-check of decoded destinations is recommended before send.

---

### 3. Rendering & Accessibility

**[WARN] HTTP image sources — will be blocked by security-conscious clients**
The arrow UI icon (`b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg`) is referenced 6 times via HTTP:

```
src: http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```

The tracking pixel is also HTTP:

```
src: http://click.comms.adidas.com/CI0/0102019d60c5e8a0-9018eb0a-be39-432f-86de-7edcae50ec70-000000/...
```

Gmail, Outlook.com, and Apple Mail all proxy or block mixed-content (HTTP) images. These assets will fail to render in those environments.

**[WARN] Missing alt text on two images**
- Hero/product image: `e2b9e0ce-64fd-429a-905f-2a6768dfeeeb` — no `alt` attribute
- Tracking pixel: `3kcqXGg2Q1w2aNu3WJ2qyOKIrIYLiXkX95GTkPJLWgU=451` — no `alt` attribute

The tracking pixel missing `alt` is low-risk, but the product image missing alt text breaks screen reader accessibility and degrades the images-off experience.

**[INFO] Duplicate `@font-face` blocks**
`AdihausDIN` and `AdineuePRO` are declared twice across two separate `<style>` blocks with identical `src` values pointing only to local system fonts (Arial, Helvetica, Calibri). Custom web fonts are never loaded from a remote URL — rendering will always fall back to system fonts. This is either intentional (email-safe pattern) or an incomplete template where web font URLs were omitted.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `{{first_name}}`, `[firstname]`) visible in the truncated HTML source. No issues confirmed.

---

### 5. Compliance

**[FAIL] Plain-text fallback is empty**
QA reports the `text/plain` MIME part is 0 characters. CAN-SPAM requires a functional plain-text alternative to be deliverable; many spam filters (SpamAssassin, Proofpoint) score emails with missing or zero-length text parts negatively. Outlook in plain-text mode will render a blank email.

**[WARN] Authentication-Results header not present**
SPF and DKIM pass/fail status could not be confirmed via AgentMail relay headers. Cannot verify that `adidas@us-news.comms.adidas.com` is properly aligned with the sending domain's DMARC policy. Should be confirmed against raw headers from a test send.

Unsubscribe mechanism not fully visible in truncated source, but the sending domain pattern (`us-news.comms.adidas.com`) is consistent with an ESP-managed list — assumed present.

---

### 6. Email-to-Site Continuity

The broken link (finding #2) is the primary continuity risk — one CTA will not reach any landing page. For working links, UTM parameter values cannot be confirmed without decoding all 31 `cp_tp` payloads. No other continuity issues confirmed from available source.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | Broken redirect on `e2b9e0ce` link | Decode the `cp_tp` payload and verify the destination resolves to a valid absolute `https://` URL before send |
| P1 | Plain-text fallback is 0 chars | Generate a full plain-text version from the HTML content; required for CAN-SPAM compliance and deliverability scoring |
| P1 | 6× HTTP image sources for arrow asset | Update `http://image.link.adidas.com/...` to `https://` across all 6 occurrences |
| P1 | HTTP tracking pixel | Update `http://click.comms.adidas.com/...` to `https://` |
| P2 | Missing alt text on product hero image | Add descriptive `alt` text (e.g., `alt="Anthony Edwards 2 - Pink"`) |
| P2 | SPF/DKIM status unverified | Confirm authentication headers via a test send through the production relay |
| P3 | Duplicate `@font-face` declarations | Remove the duplicate `<style>` block to reduce parse overhead; confirm whether web font URLs are intentionally omitted |
## Recent history

- [[2026-04-05-take-your-pick-during-the-spring-fling-sale]] — 5/10 (2026-04-05)
- [[2026-04-05-your-items-are-waiting]] — 5/10 (2026-04-05)
- [[2026-04-05-adistar-xlg-2-0-dynamic-form-and-heritage-style]] — 5/10 (2026-04-05)

