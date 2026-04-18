---
slug: 2026-04-14-available-now-the-real-madrid-bring-back-collection
type: email
date: 2026-04-14
persona: walker
score: "5/10"
sender: adidas
subject: Available now - The Real Madrid Bring Back Collection
tags: [email, score-5, sender/adidas]
---
# Available now - The Real Madrid Bring Back Collection
**Score:** 5/10 · **Type:** Email audit · **2026-04-14**
## Executive summary

- Strong brand equity and storytelling undercut by a missing CTA on the hero and a bifurcated message.

## What's working

- **Hero image is arresting.** The Real Madrid visual with player and crowd energy communicates heritage and scale instantly.
- **Copy earns its length.** The 96/00 Champions League season backstory is specific and emotionally resonant — this isn't generic nostalgia, it names the year and the Final.
- **adiClub/Spotify tie-in is a smart loyalty integration** and a genuine reason to engage beyond purchase intent.
- **Top banner** ("Explore the latest adidas best sellers / SHOP NOW") provides a universal fallback entry point.

## What's weak

- **No CTA on the hero block.** After the headline and body copy for the Real Madrid collection, there is no button. The primary story has nowhere to go. This is the biggest problem in the email.
- **Split narrative hurts both stories.** Asking one email to sell a heritage football kit *and* a Spotify premium redemption is too much. Neither gets the focus it needs.
- **"Stories, Styles and Sportswear" block at the bottom is empty.** A section header appears with no content beneath it — looks like a module that failed to populate, not a deliberate design choice.
- **Copy typo visible in hero.** "the hallowed tuff of the Bernabéu" — "tuff" should be "turf." Minor but visible.

## Recommendations

- 1. **Add a CTA button below the Real Madrid body copy immediately.** "Shop the Collection" or "Get the Kit" — anything. This is table stakes.
- 2. **Separate the Spotify story into its own send or push it to a secondary slot below a full product grid.** As the second primary module, it competes with the hero instead of supporting it.
- 3. **Audit the footer "Stories, Styles and Sportswear" module** — it renders as a header with no content. Either populate it or remove it. As-is it looks broken.
- 4. **Fix the typo** ("tuff" → "turf") before the next send of this template.
- 5. **Add product thumbnails** between the hero copy and the adiClub module — even 3 product cards with prices would give the collection real visual weight and a second conversion surface.
- | Priority | Action |
- |---|---|
- | P0 | Debug the `dv.adidas.com/o/ → /g/` redirect chain — confirm the destination asset exists and the redirect type is supported |
- | P0 | Add a plain-text `multipart/alternative` body (minimum: subject + unsubscribe URL + destination URLs) |
- | P1 | Upgrade all four arrow image `src` values and the tracking pixel from `http://` to `https://` |
- | P1 | Confirm DKIM signing is active for `us-news.comms.adidas.com`; retrieve a live `Authentication-Results` header via a test send |
- | P2 | Add `alt=""` to the tracking pixel and a descriptive `alt` to the hero image |
- | P3 | Remove the duplicate `@font-face` block (keep the two-fallback version; remove the three-fallback version that is overridden) |
- | P3 | Fix the charset meta tag: add `http-equiv="Content-Type"` |

## Full review
## 2. Business Impact Score: 5/10

Strong brand equity and storytelling undercut by a missing CTA on the hero and a bifurcated message.

---

## 3. What's Working

- **Hero image is arresting.** The Real Madrid visual with player and crowd energy communicates heritage and scale instantly.
- **Copy earns its length.** The 96/00 Champions League season backstory is specific and emotionally resonant — this isn't generic nostalgia, it names the year and the Final.
- **adiClub/Spotify tie-in is a smart loyalty integration** and a genuine reason to engage beyond purchase intent.
- **Top banner** ("Explore the latest adidas best sellers / SHOP NOW") provides a universal fallback entry point.

---

## 4. What's Weak

- **No CTA on the hero block.** After the headline and body copy for the Real Madrid collection, there is no button. The primary story has nowhere to go. This is the biggest problem in the email.
- **Split narrative hurts both stories.** Asking one email to sell a heritage football kit *and* a Spotify premium redemption is too much. Neither gets the focus it needs.
- **"Stories, Styles and Sportswear" block at the bottom is empty.** A section header appears with no content beneath it — looks like a module that failed to populate, not a deliberate design choice.
- **Copy typo visible in hero.** "the hallowed tuff of the Bernabéu" — "tuff" should be "turf." Minor but visible.

---

## 5. Recommendations

1. **Add a CTA button below the Real Madrid body copy immediately.** "Shop the Collection" or "Get the Kit" — anything. This is table stakes.
2. **Separate the Spotify story into its own send or push it to a secondary slot below a full product grid.** As the second primary module, it competes with the hero instead of supporting it.
3. **Audit the footer "Stories, Styles and Sportswear" module** — it renders as a header with no content. Either populate it or remove it. As-is it looks broken.
4. **Fix the typo** ("tuff" → "turf") before the next send of this template.
5. **Add product thumbnails** between the hero copy and the adiClub module — even 3 product cards with prices would give the collection real visual weight and a second conversion surface.

---

## 6. Bottom Line

The bones are good: the brand, the story, and the nostalgia hook all work. But a hero block without a CTA is a funnel with no bottom. Fix the CTA and the empty module, consider splitting the Spotify promotion, and this email performs significantly better.

---

## 7. Subject Line Analysis

- **Subject:** `Available now - The Real Madrid Bring Back Collection`
- **Length:** 52 characters
- **Scores (1-10):** Clarity `8`, Curiosity `4`, Personalization `2`, Urgency `4`, Specificity `7`
- **Strengths:**
  - "Available now" telegraphs a drop moment — concise and functional
  - "Bring Back Collection" names the product clearly, no guesswork
- **Weaknesses:**
  - Zero emotional pull — reads like a product alert, not an invitation
  - No tie to the 96/00 Champions League heritage story that makes the email actually compelling
- **Alt A:** `The kit that won the 2000 Champions League is back`
- **Alt B:** `Legendary. Iconic. Available now — Real Madrid Bring Back`

---

## 8. Evidence

- **Overall purpose:** Drive purchase of the Real Madrid Bring Back Collection (heritage kit revival) with a secondary loyalty promotion (adiClub × Spotify Premium redemption).
- **Hero / primary value proposition:** Full-width Real Madrid image with "LEGENDARY STYLE - ICONIC VIBES" headline and body copy anchoring the 96/00 UCL Final. Emotionally well-framed. No CTA button visible.
- **Membership / benefits section:** adiClub × Spotify Premium module — clear points redemption offer with a lifestyle image of a woman running. Headline and copy are readable; CTA not visible in the render but the module is structurally complete.
- **Product discoverability / recommendation modules:** None visible. No product grid, no thumbnail carousel, no pricing — the collection is described but never shown.
- **Utility / secondary modules:** Top banner with "Explore the latest adidas best sellers / SHOP NOW" provides a generic fallback. Footer has account, privacy, support, unsubscribe, and adidas status links — standard and functional.
- **Bugs / friction / clarity issues:**
  - Missing CTA button in the hero section (visible gap after body copy)
  - "Stories, Styles and Sportswear at Adidas. Since 1949" renders as an isolated header with no content below it — module appears unpopulated
  - Visible typo: "tuff of the Bernabéu"

---

## Technical Audit

## Technical Audit — adidas Real Madrid Bring Back Collection

---

### 1. Technical Summary

One CTA link is definitively broken via a bad redirect resolution, and the email has no plain-text fallback (0 chars). Several images are served over HTTP and are missing alt text, and authentication headers were not observed through the relay.

---

### 2. Link & Tracking Issues

**[FAIL] Broken redirect — `/g/` path type unresolved**
QA probe on the click-tracking URL resolves to an unknown internal path type `/g/`:
```
unknown url type: '/g/acbaf227-32b5-49c9-bc11-a0e23815f724'
Tracking URL: https://dv.adidas.com/o/acbaf227-32b5-49c9-bc11-a0e23815f724?cp_tp=v3...
```
The outer redirect (`/o/`) resolves, but the inner destination path (`/g/`) is unrecognized. At least one CTA in this email is non-functional.

**[WARN] 24 tracking links unvalidated**
All click-redirect domains were skipped by the HTTP prober. Full destination-URL validation is incomplete for this send.

**[WARN] `no-referrer` meta tag conflicts with server-side attribution**
`<meta name="referrer" content="no-referrer" />` suppresses the HTTP `Referer` header on all click-throughs. UTM params embedded in redirect URLs will still reach GA, but any server-side referrer-based attribution will receive no data.

---

### 3. Rendering & Accessibility

**[WARN] Hero image missing alt text**
```
src: https://dv.adidas.com/o/acbaf227-32b5-49c9-bc11-a0e23815f724?cp_tp=v3...
alt: (absent)
```
Renders as a blank space in image-blocked clients; fails WCAG 2.1 §1.1.1.

**[WARN] Tracking pixel missing alt text**
```
src: http://click.comms.adidas.com/CI0/0102019d8a2f4d0c-7ec239a0-4d02-4642-bacd-f69332afeaa3-000000/l9SzGQYm-UKezSrEUbKNbR10q...
alt: (absent)
```
Should carry `alt=""` to suppress screen-reader announcement.

**[WARN] Four image instances served over HTTP**
Arrow graphic `b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` is embedded four times via plain HTTP:
```
src: http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg
```
Outlook and Gmail both block mixed-content HTTP images by default. All four instances will render as broken images in clients with strict security policies.

**[WARN] Tracking pixel also served over HTTP**
```
src: http://click.comms.adidas.com/CI0/...
```
Open-tracking will fail silently in clients that block HTTP resources.

**[INFO] Duplicate `@font-face` declarations**
`AdihausDIN` (weights 400, 700) and `AdineuePRO` (weights 400, 600) are each declared twice across two separate `<style>` blocks — once with three fallbacks (`Arial, Helvetica, Calibri, Sans Serif`) and once with two (`Arial, Helvetica`). The second declaration wins in cascade order, making the first block dead weight. No rendering breakage, but it inflates email size unnecessarily.

**[INFO] Malformed charset meta tag**
```html
<meta content="text/html; charset=UTF-8" />
```
Missing the required `http-equiv="Content-Type"` attribute. The correct form is:
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
```
Most clients parse charset from the MIME headers anyway, but this tag as written is non-conformant and ignored.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (`{{`, `%%`, `*|`) visible in the provided HTML. Cannot fully audit the truncated portion.

---

### 5. Compliance

**[FAIL] Plain-text fallback absent**
QA reports `Text version is 0 chars`. A multipart/alternative message with no text/plain body is a CAN-SPAM risk and will be flagged or clipped by certain corporate spam filters that require readable plain-text parts.

**[WARN] Authentication-Results header not observed**
SPF and DKIM pass/fail status for `us-news.comms.adidas.com` is unknown — the AgentMail relay did not surface an `Authentication-Results` header. If DKIM is not signing for this subdomain, DMARC alignment against the `adidas.com` organizational domain will fail, degrading deliverability to stricter receivers (Yahoo, Gmail enforcement).

Unsubscribe link: not auditable from the truncated source; cannot confirm CAN-SPAM §5(a)(3) compliance.

---

### 6. Email-to-Site Continuity

**[FAIL] Broken CTA breaks funnel entirely**
The `/g/` redirect failure (see §2) means the destination landing page is unreachable for that CTA. UTM attribution is moot for unreachable links.

**[WARN] `no-referrer` policy breaks referrer-based attribution**
Landing pages relying on `document.referrer` or server-side `Referer` headers (e.g., for A/B segmentation or channel attribution outside GA) will see null referrer for all clicks from this email.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | Debug the `dv.adidas.com/o/ → /g/` redirect chain — confirm the destination asset exists and the redirect type is supported |
| P0 | Add a plain-text `multipart/alternative` body (minimum: subject + unsubscribe URL + destination URLs) |
| P1 | Upgrade all four arrow image `src` values and the tracking pixel from `http://` to `https://` |
| P1 | Confirm DKIM signing is active for `us-news.comms.adidas.com`; retrieve a live `Authentication-Results` header via a test send |
| P2 | Add `alt=""` to the tracking pixel and a descriptive `alt` to the hero image |
| P3 | Remove the duplicate `@font-face` block (keep the two-fallback version; remove the three-fallback version that is overridden) |
| P3 | Fix the charset meta tag: add `http-equiv="Content-Type"` |
## Recent history

- [[2026-04-14-did-you-forget-something]] — 5/10 (2026-04-14)
- [[2026-04-13-test-mkg-us-nonpurclick-u-glide-nonpurch-en-04142026-v2more-comfort-less-effort-]] — 5/10 (2026-04-13)
- [[2026-04-13-test-mkg-us-nonpurclick-u-glide-nonpurch-en-04142026more-comfort-and-a-little-ex]] — 4/10 (2026-04-13)

