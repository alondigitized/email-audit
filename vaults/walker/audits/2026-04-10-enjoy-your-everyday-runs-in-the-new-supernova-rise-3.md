---
slug: 2026-04-10-enjoy-your-everyday-runs-in-the-new-supernova-rise-3
type: email
date: 2026-04-10
persona: walker
score: "6/10"
sender: adidas
subject: Enjoy your everyday runs in the new Supernova Rise 3
tags: [email, score-6, sender/adidas]
---
# Enjoy your everyday runs in the new Supernova Rise 3
**Score:** 6/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- This is a product launch email for the adidas Supernova Rise 3, anchored by a strong hero visual and paired with a Spotify Premium sweepstakes incentive. The visual craft is above average, but the email suffers from a structural problem: it tries to serve two distinct objectives (launch the shoe, promote a Spotify partnership giveaway) without prioritizing either. The result is a diluted message. The CTA architecture is also thin — there is only one visible action in the top half, and the sweepstakes module does not have a prominent button visible at the render size. Runners who scroll casually will miss the offer entirely.
- Competent execution with a real opportunity cost. The shoe earns a better showcase than this structure allows.

## What's working

- **Hero image is excellent.** High-energy, action-forward photography of a runner mid-stride with the shoe clearly featured. Dynamic and on-brand for the performance running segment.
- **"SUPERCOMFORT SUPERNOVA" headline** is clean and benefit-led — comfort is the right differentiator to lead with for an everyday trainer.
- **Spotify Premium co-brand** adds external value to the offer and gives the email a second hook for subscribers who are already runners and music listeners.
- **Footer navigation** (Stories, Styles, Sportswear, etc.) provides a clean utility bar for secondary discovery.

## What's weak

- **Dual-purpose dilution.** A shoe launch and a sweepstakes giveaway are two different emails. The Spotify module undercuts the product narrative rather than reinforcing it — the shoe becomes the path to a prize rather than the hero.
- **No visible price, colorways, or product details.** For a product launch email, the shoe is shown but not sold. No colorway options, no price anchor, no "Shop Now" or "Explore the Shoe" CTA tied directly to the shoe.
- **Sweepstakes module lacks a visible CTA button.** At normal scroll depth the "Enter to win" section reads as descriptive copy, not an action prompt. No button is visible.
- **The pre-header/banner offer ("Explore the latest adidas best sellers — Shop Now")** is generic and wastes the pre-header slot. A product-specific hook would dramatically improve open-to-click conversion.
- **Body copy is small and low-contrast.** The comfort claim ("intentionally made the shoe 20% softer than the previous version") is a strong stat that deserves callout treatment — it's buried in paragraph-sized text at a size that blurs at render scale.

## Recommendations

- 1. **Split the emails.** Launch the Supernova Rise 3 on its own. Move the Spotify sweepstakes to a separate send or a secondary module in a newsletter. Don't cannibalize a product launch.
- 2. **Add a direct shoe CTA.** Place a "Shop Supernova Rise 3" button immediately below the SUPERCOMFORT headline. This is the highest-intent moment in the email.
- 3. **Make the 20% softer stat a visual callout.** Pull it out of body copy and treat it as a badge or a bold inline stat. It's a proof point that earns trust and justifies purchase.
- 4. **Fix the pre-header.** Change "Explore the latest adidas best sellers" to something like "Meet the Supernova Rise 3 — 20% softer, built for every run." Specific beats generic every time.
- 5. **Give the sweepstakes a visible button.** If it stays in this email, the entry CTA needs a button with clear contrast and label ("Enter to Win").
- | Priority | Issue | Action |
- |---|---|---|
- | P0 | Broken CTA redirect resolves to relative URL `/g/245e9d5c-...` | Regenerate the redirect payload with a fully-qualified `https://` destination URL; re-QA before any resend |
- | P1 | Plain-text MIME part is 0 chars | Generate a plain-text equivalent (product name, CTA URLs, unsubscribe link) and attach as `text/plain` part |
- | P1 | 7 images served over HTTP | Update `image.link.adidas.com` and `click.comms.adidas.com` asset/pixel URLs to HTTPS |
- | P2 | SPF/DKIM alignment unverified | Confirm `us-news.comms.adidas.com` subdomain is covered by adidas's DKIM selector and SPF `include:` chain; capture `Authentication-Results` in next QA pass |
- | P2 | Arrow image referenced 6× via same HTTP URL | Deduplicate to a single HTTPS `<img>` reference or use a CSS/SVG arrow to eliminate redundant HTTP fetches |
- | P3 | Missing `alt` on content image | Add descriptive `alt` text; set `alt=""` on the tracking pixel |
- | P3 | Malformed charset `<meta>` | Change to `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />` |
- | P3 | Duplicate `@font-face` blocks | Consolidate into a single `<style>` block with a unified `src` stack |

## Full review
### 1. Executive Summary

This is a product launch email for the adidas Supernova Rise 3, anchored by a strong hero visual and paired with a Spotify Premium sweepstakes incentive. The visual craft is above average, but the email suffers from a structural problem: it tries to serve two distinct objectives (launch the shoe, promote a Spotify partnership giveaway) without prioritizing either. The result is a diluted message. The CTA architecture is also thin — there is only one visible action in the top half, and the sweepstakes module does not have a prominent button visible at the render size. Runners who scroll casually will miss the offer entirely.

---

### 2. Business Impact Score: **6 / 10**

Competent execution with a real opportunity cost. The shoe earns a better showcase than this structure allows.

---

### 3. What's Working

- **Hero image is excellent.** High-energy, action-forward photography of a runner mid-stride with the shoe clearly featured. Dynamic and on-brand for the performance running segment.
- **"SUPERCOMFORT SUPERNOVA" headline** is clean and benefit-led — comfort is the right differentiator to lead with for an everyday trainer.
- **Spotify Premium co-brand** adds external value to the offer and gives the email a second hook for subscribers who are already runners and music listeners.
- **Footer navigation** (Stories, Styles, Sportswear, etc.) provides a clean utility bar for secondary discovery.

---

### 4. What's Weak

- **Dual-purpose dilution.** A shoe launch and a sweepstakes giveaway are two different emails. The Spotify module undercuts the product narrative rather than reinforcing it — the shoe becomes the path to a prize rather than the hero.
- **No visible price, colorways, or product details.** For a product launch email, the shoe is shown but not sold. No colorway options, no price anchor, no "Shop Now" or "Explore the Shoe" CTA tied directly to the shoe.
- **Sweepstakes module lacks a visible CTA button.** At normal scroll depth the "Enter to win" section reads as descriptive copy, not an action prompt. No button is visible.
- **The pre-header/banner offer ("Explore the latest adidas best sellers — Shop Now")** is generic and wastes the pre-header slot. A product-specific hook would dramatically improve open-to-click conversion.
- **Body copy is small and low-contrast.** The comfort claim ("intentionally made the shoe 20% softer than the previous version") is a strong stat that deserves callout treatment — it's buried in paragraph-sized text at a size that blurs at render scale.

---

### 5. Recommendations

1. **Split the emails.** Launch the Supernova Rise 3 on its own. Move the Spotify sweepstakes to a separate send or a secondary module in a newsletter. Don't cannibalize a product launch.
2. **Add a direct shoe CTA.** Place a "Shop Supernova Rise 3" button immediately below the SUPERCOMFORT headline. This is the highest-intent moment in the email.
3. **Make the 20% softer stat a visual callout.** Pull it out of body copy and treat it as a badge or a bold inline stat. It's a proof point that earns trust and justifies purchase.
4. **Fix the pre-header.** Change "Explore the latest adidas best sellers" to something like "Meet the Supernova Rise 3 — 20% softer, built for every run." Specific beats generic every time.
5. **Give the sweepstakes a visible button.** If it stays in this email, the entry CTA needs a button with clear contrast and label ("Enter to Win").

---

### 6. Bottom Line

The email looks like adidas, performs the basics, and won't embarrass the brand. But for a product launch, it lacks focus and selling intent. The shoe deserves a dedicated email that moves from awareness to purchase consideration — this one stalls at awareness. The Spotify tie-in is a wasted co-brand opportunity when buried this deep without a clear CTA.

---

### 7. Evidence

| Module | What's Visible |
|---|---|
| **Overall purpose** | Supernova Rise 3 product launch with a Spotify Premium sweepstakes co-promotion |
| **Hero / primary value proposition** | Full-bleed action photo of runner wearing the shoe; "SUPERCOMFORT SUPERNOVA" headline; brief comfort-focused copy referencing 20% softer than previous version |
| **Membership / benefits section** | Not present |
| **Product discoverability / recommendation modules** | None — no colorways, no secondary product tiles, no cross-sell |
| **Partnership / incentive module** | Spotify Premium co-brand visual; sweepstakes offer to win running shoes, apparel, and 1-year Spotify Premium via adidas app; entry copy visible but no button visible |
| **Utility / secondary modules** | Standard adidas footer nav (Stories, Styles, Sportswear) and legal footer with address and unsubscribe links |
| **Bugs / friction / clarity issues** | No visible image breaks or rendering errors; body copy and sweepstakes copy are very small at render scale and difficult to read; no CTA button visible in the sweepstakes section |

---

## Technical Audit

## Technical Audit — adidas Supernova Rise 3 Email

**From:** adidas <adidas@us-news.comms.adidas.com>
**Subject:** Enjoy your everyday runs in the new Supernova Rise 3
**Audit Date:** 2026-04-09

---

### 1. Technical Summary

One broken link caused by a malformed relative URL in a redirect chain will silently fail for affected recipients. Seven images are served over HTTP (not HTTPS), risking mixed-content blocks in secure mail clients, and the plain-text MIME part is absent, degrading deliverability and inbox placement.

---

### 2. Link & Tracking Issues

**[FAIL] Broken redirect — malformed relative URL**
The click-tracking wrapper for one CTA resolves to an invalid `unknown url type: '/g/...'` path. The final destination path is a bare relative slug (`/g/245e9d5c-bc74-41cd-9382-b9cc2d51053d`) embedded inside the redirect payload instead of a fully-qualified URL.

- Redirect wrapper: `https://dv.adidas.com/o/245e9d5c-bc74-41cd-9382-b9cc2d51053d?cp_tp=v3.eJzj...`
- Decoded destination slug: `/g/245e9d5c-bc74-41cd-9382-b9cc2d51053d`
- Effect: any recipient who clicks this CTA reaches a broken destination.

**[INFO] 30 click-tracking links** routed through `click.comms.adidas.com` — standard click-redirect pattern, not individually probed.

---

### 3. Rendering & Accessibility

**[WARN] 7 images served over HTTP**
All instances are the same arrow icon (`b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg`) loaded 6 times, plus one pixel/beacon image:

- `http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` (×6)
- `http://click.comms.adidas.com/CI0/0102019d74ecd50d-05392a55-.../L1Ti9SiPm-...` (×1)

Apple Mail, Gmail (secure fetch), and Outlook 2016+ may block or proxy these, breaking the arrow UI element and open-pixel tracking.

**[WARN] 2 images missing `alt` text**
- `dv.adidas.com/o/245e9d5c-bc74-41cd-9382-b9cc2d51053d?...` — content image, no `alt`
- `click.comms.adidas.com/CI0/.../L1Ti9SiPm-...` — tracking pixel, should have `alt=""`

**[WARN] Malformed `<meta>` charset tag**
```html
<meta content="text/html; charset=UTF-8" />
```
Missing required `http-equiv="Content-Type"` attribute. Some older clients may not honor the charset declaration, causing encoding issues with non-ASCII characters.

**[WARN] Duplicate `@font-face` declarations**
`AdihausDIN` and `AdineuePRO` are declared twice across two separate `<style>` blocks with slightly different `src` stacks (second block omits `Calibri`/`Sans Serif`). Neither block loads an actual web font URL — both map to local system font fallbacks only. The `font-display: swap` property is unsupported in email clients and has no effect.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens or exposed placeholder syntax visible in the truncated source. Cannot fully verify without complete HTML; no issues confirmed.

---

### 5. Compliance

**[FAIL] Plain-text MIME part is absent**
QA reports 0 characters in the text version. While CAN-SPAM does not explicitly mandate a plain-text part, its absence degrades spam filter scoring (SpamAssassin `MIME_HTML_ONLY` rule), reduces accessibility for screen-reader-only clients, and is flagged by major ISP filters (Gmail, Yahoo) as a bulk-mail signal.

**[WARN] SPF/DKIM authentication status unverified**
`Authentication-Results` header was not captured via the AgentMail relay. The sending domain `us-news.comms.adidas.com` (a subdomain of `comms.adidas.com`) requires its own SPF/DKIM alignment; cannot confirm pass/fail from available data.

`<meta name="ROBOTS" content="NOINDEX, NOFOLLOW" />` and `<meta name="referrer" content="no-referrer" />` are present — correct for suppressing indexing and referrer leakage in webview renders.

Unsubscribe link presence cannot be confirmed from the truncated source, but is presumed present given adidas's standard footer pattern.

---

### 6. Email-to-Site Continuity

30 CTAs pass through `click.comms.adidas.com` redirect wrappers — cannot inspect final UTM parameters without resolving the redirects. The one confirmed broken link (§2) means at least one CTA has no valid destination at all, bypassing UTM attribution entirely for that click path.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| P0 | Broken CTA redirect resolves to relative URL `/g/245e9d5c-...` | Regenerate the redirect payload with a fully-qualified `https://` destination URL; re-QA before any resend |
| P1 | Plain-text MIME part is 0 chars | Generate a plain-text equivalent (product name, CTA URLs, unsubscribe link) and attach as `text/plain` part |
| P1 | 7 images served over HTTP | Update `image.link.adidas.com` and `click.comms.adidas.com` asset/pixel URLs to HTTPS |
| P2 | SPF/DKIM alignment unverified | Confirm `us-news.comms.adidas.com` subdomain is covered by adidas's DKIM selector and SPF `include:` chain; capture `Authentication-Results` in next QA pass |
| P2 | Arrow image referenced 6× via same HTTP URL | Deduplicate to a single HTTPS `<img>` reference or use a CSS/SVG arrow to eliminate redundant HTTP fetches |
| P3 | Missing `alt` on content image | Add descriptive `alt` text; set `alt=""` on the tracking pixel |
| P3 | Malformed charset `<meta>` | Change to `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />` |
| P3 | Duplicate `@font-face` blocks | Consolidate into a single `<style>` block with a unified `src` stack |
## Recent history

- [[2026-04-09-test-mkg-us-na-w-arch-gender-en-04102026-bthe-arcades-you-love-now-in-online-exc]] — 6/10 (2026-04-09)
- [[2026-04-09-test-mkg-us-nonpur180-w-arch-nonpurch-en-04102026your-perfect-first-pair-is-here]] — 5/10 (2026-04-09)
- [[2026-04-09-test-mkg-us-na-w-arch-gender-en-04102026-a-v2the-arcades-you-know-love-in-colors]] — 5/10 (2026-04-09)

