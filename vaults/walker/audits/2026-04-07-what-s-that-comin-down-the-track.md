---
slug: 2026-04-07-what-s-that-comin-down-the-track
type: email
date: 2026-04-07
persona: walker
score: "6/10"
sender: adidas
subject: "What’s that comin' down the track? 🏀"
tags: [email, score-6, sender/adidas]
---
# What’s that comin' down the track? 🏀
**Score:** 6/10 · **Type:** Email audit · **2026-04-07**
## Executive summary

- A lean, two-act product spotlight for the Anthony Edwards 2 in Red & Black. The photography is strong and the focus is clear, but the email buries its only real CTA and leans too hard on brand mystique over commercial conversion. There's no price, no prominent buy button in the body, and the teaser subject line delays product clarity until the open. Works as brand content; underperforms as a sales driver.

## What's working

- **Hero photography is excellent.** The overhead athlete shot with Edwards in the matching red/black eyewear is visually striking and immediately establishes the colorway story.
- **Tight, focused narrative.** Two modules, one product, no clutter. The email doesn't try to do too many things.
- **Shoe product shot is large and clean.** The red/black shoe against a white background communicates the colorway clearly before any copy is read.
- **"INNOVATION MEETS PERFORMANCE" module** does useful work explaining the shoe's functional story (Propulsion Plate, Fangs cushion, Lightfoam).

## What's weak

- **No body CTA button.** The only "Shop Now" CTA is stuck in the header utility bar, which most readers skip. The body copy mentions "Shop online or at your local adidas store" with a small linked "A" icon — that is not a conversion element.
- **Subject line is too coy.** "What's that comin' down the track?" works as intrigue but does zero product qualification. Recipients who aren't Anthony Edwards fans have no hook.
- **No price or availability signal.** Even a "Now Available" badge or MSRP reference would reduce friction and signal urgency.
- **Body copy is very small** at this render size — both blocks read as dense fine print visually, which discourages reading.
- **No membership / adiClub module.** A drop this tied to a signature athlete is a natural loyalty play; the email ignores it entirely.

## Recommendations

- 1. **Add a full-width CTA button** between the two product sections — "Shop AE2 Red & Black" is a concrete, brandable label.
- 2. **Add an availability or urgency signal** — "Available Now" or limited-colorway framing near the headline.
- 3. **Increase body copy size** or reduce copy length so key features read at a glance.
- 4. **Include a price point** or at minimum a "Starting at $X" line — removes a barrier for on-the-fence buyers.
- 5. **Test a subject line with the product name** ("The AE2 drops in Red & Black") against the teaser version for open-to-click comparison.
- | Priority | Issue | Action |
- |---|---|---|
- | **Critical** | Broken redirect on `82ad97a4` asset | Fix destination URL in ESP click-redirect config before send |
- | **Critical** | Plain-text fallback is empty | Generate text version from email body copy |
- | **High** | 7 images on HTTP | Upgrade all `src` attributes to HTTPS on `image.link.adidas.com` and `click.comms.adidas.com` |
- | **High** | DKIM/SPF unverified | Confirm authentication records for `us-news.comms.adidas.com` and validate via header inspection |
- | **Medium** | 2 images missing alt text | Add descriptive alt to the linked hero image; set `alt=""` on the open-pixel tracker |
- | **Low** | Duplicate `@font-face` blocks | Consolidate into a single `<style>` block with consistent fallback stack |

## Full review
## Email Review: adidas — "What's that comin' down the track? 🏀"

---

### 1. Executive Summary

A lean, two-act product spotlight for the Anthony Edwards 2 in Red & Black. The photography is strong and the focus is clear, but the email buries its only real CTA and leans too hard on brand mystique over commercial conversion. There's no price, no prominent buy button in the body, and the teaser subject line delays product clarity until the open. Works as brand content; underperforms as a sales driver.

---

### 2. Business Impact Score

**6 / 10**

---

### 3. What's Working

- **Hero photography is excellent.** The overhead athlete shot with Edwards in the matching red/black eyewear is visually striking and immediately establishes the colorway story.
- **Tight, focused narrative.** Two modules, one product, no clutter. The email doesn't try to do too many things.
- **Shoe product shot is large and clean.** The red/black shoe against a white background communicates the colorway clearly before any copy is read.
- **"INNOVATION MEETS PERFORMANCE" module** does useful work explaining the shoe's functional story (Propulsion Plate, Fangs cushion, Lightfoam).

---

### 4. What's Weak

- **No body CTA button.** The only "Shop Now" CTA is stuck in the header utility bar, which most readers skip. The body copy mentions "Shop online or at your local adidas store" with a small linked "A" icon — that is not a conversion element.
- **Subject line is too coy.** "What's that comin' down the track?" works as intrigue but does zero product qualification. Recipients who aren't Anthony Edwards fans have no hook.
- **No price or availability signal.** Even a "Now Available" badge or MSRP reference would reduce friction and signal urgency.
- **Body copy is very small** at this render size — both blocks read as dense fine print visually, which discourages reading.
- **No membership / adiClub module.** A drop this tied to a signature athlete is a natural loyalty play; the email ignores it entirely.

---

### 5. Recommendations

1. **Add a full-width CTA button** between the two product sections — "Shop AE2 Red & Black" is a concrete, brandable label.
2. **Add an availability or urgency signal** — "Available Now" or limited-colorway framing near the headline.
3. **Increase body copy size** or reduce copy length so key features read at a glance.
4. **Include a price point** or at minimum a "Starting at $X" line — removes a barrier for on-the-fence buyers.
5. **Test a subject line with the product name** ("The AE2 drops in Red & Black") against the teaser version for open-to-click comparison.

---

### 6. Bottom Line

Clean creative execution with a strong visual identity, but it's missing the commercial infrastructure to close. Fans of Anthony Edwards will click through on vibes; everyone else needs a button and a price.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Product launch spotlight for Anthony Edwards 2 basketball shoe, Red & Black colorway |
| **Hero / primary value prop** | Athlete lifestyle image (Edwards in matching red/black eyewear) + "ANTHONY EDWARDS 2: RED & BLACK" headline. Strong visual, low commercial urgency |
| **Membership / benefits** | Not present |
| **Product discoverability / recommendations** | Single product; no cross-sell, no "you might also like," no colorway alternatives shown |
| **Utility / secondary modules** | Standard footer: My Account, Privacy, Support, Unsubscribe, adidas.com/us. Footer tagline: "STORES, STYLES AND SPORTSWEAR AT ADIDAS. SINCE 1949" |
| **Bugs / friction / clarity issues** | No visible broken images or rendering errors. The "A" icon CTA in the body is so small it reads as a footnote rather than a clickable action element — significant clarity issue |

---

## Technical Audit

## Technical Audit — adidas "What's that comin' down the track? 🏀"
**From:** adidas@us-news.comms.adidas.com | **Date:** 2026-04-07

---

### 1. Technical Summary

The email has two confirmed failures: a broken redirect link and a missing plain-text fallback. Several non-HTTPS image sources and missing alt attributes compound deliverability and rendering risk across secure email clients.

---

### 2. Link & Tracking Issues

**[FAIL] Broken click redirect**
The QA prober encountered an unresolvable URL scheme on one tracked link:
- Error: `unknown url type: '/g/82ad97a4-4af9-49cd-b0a4-963694ac8616?txn=f9a2b500-3292-11f1-a0ce-8668c83b363d'`
- Redirect origin: `https://dv.adidas.com/o/82ad97a4-4af9-49cd-b0a4-963694ac8616?cp_tp=v3.eJzj...`

The redirect chain resolves to a relative-style path (`/g/...`) that the click-tracking layer cannot follow. This link is likely dead for recipients. Confirm the destination URL in the ESP redirect configuration for this asset.

**[WARN] 30 tracking links unverified**
All 30 click-redirect URLs routed through the tracking domain were skipped during HTTP probing. No confirmed failures among these, but no confirmation of liveness either. Standard pre-send link-check against production tracking URLs is recommended.

---

### 3. Rendering & Accessibility

**[WARN] 7 images served over HTTP (non-HTTPS)**

The same arrow graphic is loaded via HTTP six times, and the open-pixel tracker once:
- `http://image.link.adidas.com/lib/fe6515707c62007e7715/m/3/b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg` (×6, alt="arrow")
- `http://click.comms.adidas.com/CI0/0102019d6878077b-d4956f6a-429d-4d0f-9e59-7a7822ef66c8-000000/...` (open-pixel tracker)

Outlook, Apple Mail, and Gmail will block mixed-content images. The arrow asset appearing six times suggests a repeated CTA module — all instances share the same non-HTTPS source. Upgrade all `src` attributes to HTTPS.

**[WARN] 2 images missing alt text**
- `82ad97a4-4af9-49cd-b0a4-963694ac8616` (linked image, no alt)
- `uVg6Ix44BI0MndADdDs-W_Cpj...` (open pixel tracker — `alt=""` is acceptable here but is currently absent)

Missing alt on linked images breaks accessibility for screen readers and renders as a broken icon when images are blocked.

**`@font-face` duplicate declarations**
`AdihausDIN` and `AdineuePRO` are each declared twice across two separate `<style>` blocks with slightly different fallback stacks (`Calibri` and `Sans Serif` present in block 1, absent in block 2). The second declaration silently overrides the first in most clients. Consolidate into a single block.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g., `{{first_name}}`, `%%first_name%%`) detected in the truncated source. No issues confirmed.

---

### 5. Compliance

**[FAIL] Plain-text fallback missing**
- Text version length: 0 characters

A zero-length text part violates CAN-SPAM best practices and is a spam signal for filters (SpamAssassin, Gmail). Some ISPs require a non-empty text part for delivery. Generate a text fallback from body copy at minimum.

**[WARN] Authentication-Results header not present**
SPF/DKIM pass status could not be confirmed via the AgentMail relay. The sending domain `us-news.comms.adidas.com` should be validated as aligned with the `From:` domain for DMARC. Verify DKIM signing is active for this subdomain in the ESP configuration.

**Unsubscribe / CAN-SPAM:** Not fully auditable from truncated source, but footer structure (`mobile-footer-padding-block`, `mobile-privacy-transactional`) is consistent with compliant footer layout. Confirm physical address and one-click unsubscribe link are present in the full source.

---

### 6. Email-to-Site Continuity

The broken redirect (`/g/82ad97a4...`) means at least one CTA has no confirmed landing page. The remaining 30 tracked links were not probed. UTM parameter coverage cannot be confirmed without full source, but the `cp_tp`, `cp_cid`, `mi_cid`, and `mi_mid` parameters present in the dv.adidas.com redirect suggest proprietary tracking parameters are in use — verify these map correctly to GA4 or the internal analytics stack.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Critical** | Broken redirect on `82ad97a4` asset | Fix destination URL in ESP click-redirect config before send |
| **Critical** | Plain-text fallback is empty | Generate text version from email body copy |
| **High** | 7 images on HTTP | Upgrade all `src` attributes to HTTPS on `image.link.adidas.com` and `click.comms.adidas.com` |
| **High** | DKIM/SPF unverified | Confirm authentication records for `us-news.comms.adidas.com` and validate via header inspection |
| **Medium** | 2 images missing alt text | Add descriptive alt to the linked hero image; set `alt=""` on the open-pixel tracker |
| **Low** | Duplicate `@font-face` blocks | Consolidate into a single `<style>` block with consistent fallback stack |
## Recent history

- [[2026-04-07-your-items-are-waiting]] — 5.5/10 (2026-04-07)
- [[2026-04-07-did-you-forget-something]] — 6/10 (2026-04-07)
- [[2026-04-07-shop-adizero-evo-sl-running-shoes]] — 6/10 (2026-04-07)

