---
slug: 2026-03-29-test-mkg-us-ecmpur-u-seasonal-ecom-en-03302026-bnew-colors-you-ll-keep-coming-ba
type: email
date: 2026-03-27
persona: walker
score: "6.5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_ECMPUR_U_SEASONAL_ECOM_EN_03302026_BNew Colors You'll Keep Coming Back To"
tags: [email, score-7, sender/skechers]
---
# [Test]: MKG_US_ECMPUR_U_SEASONAL_ECOM_EN_03302026_BNew Colors You'll Keep Coming Back To
**Score:** 6.5/10 · **Type:** Email audit · **2026-03-27**
## Executive summary

- A clean, color-forward product email anchored around three new colorways of a single shoe. The vertical color-blocking structure is visually distinctive and reinforces the "new colors" message effectively. However, the email is narrow and dense at small render size, the hero copy is thin, and the product recommendation module at the bottom competes with the focal story rather than extending it. This is a solid mid-funnel email that could convert better with sharper hierarchy and one stronger CTA moment.

## What's working

- **Color storytelling works.** Slate → Taupe → Olive as sequential color chapters is smart visual merchandising. The named color labels read clearly and help the customer self-select.
- **Lifestyle + product photography pairing.** Each color section pairs a context shot with a clean product shot, giving both aspiration and clarity.
- **Consistent module cadence.** The repeat structure (lifestyle image → color name → product shot → CTA) is easy to scan and removes cognitive load.
- **"More Spring Essentials" teaser.** The seasonal bridge module at the bottom-middle provides a natural next step for customers not sold on this shoe.

## What's weak

- **Hero is underpowered.** "Cool + Colorful" is generic. There's no product name, no price signal, no urgency — nothing to anchor the scroll before you get to the color chapters.
- **CTAs are small and repetitive.** Each color section has a small button, but at this render size they're easy to miss and visually identical. No single CTA dominates.
- **"Shop Our Newest Arrivals" module dilutes focus.** Four small product thumbnails at the bottom scatter attention. The products are too small to evaluate at this size and work against the single-shoe narrative.
- **Footer is dense.** The text-heavy footer (preferences, legal, address) feels abrupt after the visual product content and is visually heavy relative to the rest of the email.
- **No price or promotion signal.** For a purchase-segment audience (ECMPUR), there's no price, discount, or value hook visible anywhere — a missed conversion lever.

## Recommendations

- 1. **Strengthen the hero.** Add the shoe name and a one-line differentiator (e.g., comfort claim or "now in 3 new colors") directly under "Cool + Colorful" before the first color chapter begins.
- 2. **Add one dominant CTA.** After all three colors are shown, place a single high-contrast "Shop All Colors" button to consolidate intent before the footer.
- 3. **Cut or shrink the "Newest Arrivals" module.** It's competing with the email's purpose. If kept, make it a cleaner 2-up grid with visible product names.
- 4. **Surface a price or offer.** Even "Starting at $X" or free shipping would give the purchase-segment recipient a conversion reason the current email lacks.
- 5. **Increase CTA button size.** Each per-color CTA should be wider and higher-contrast to be actionable on mobile.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | **P0** | `[Test]:` subject prefix | Remove before production send |
- | **P0** | Campaign ID concatenated into subject | Fix template: add space/separator or remove campaign ID from subject field |
- | **P1** | 15 HTTP image sources | Migrate all `image.emails.skechers.com` and `ink1000.com` assets to HTTPS; coordinate with ESP asset hosting |
- | **P1** | SPF/DKIM unverified | Confirm authentication headers resolve correctly through AgentMail relay before send |
- | **P2** | 3 images missing `alt` attributes | Add descriptive `alt` text to `49468f73`, `00100b23`, `fc08601a` PNGs |
- | **P2** | Raw sub-ID in Krux pixel | Evaluate whether `partner_uid=2396422` (plain-text subscriber ID) is intentional; consider removing or hashing |
- | **P3** | Malformed charset meta | Change to `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />` |
- | **P3** | Spot-check 26 click URLs | Manually verify UTM params and landing page alignment on a representative sample of CTAs |

## Full review
## 1. Executive Summary

A clean, color-forward product email anchored around three new colorways of a single shoe. The vertical color-blocking structure is visually distinctive and reinforces the "new colors" message effectively. However, the email is narrow and dense at small render size, the hero copy is thin, and the product recommendation module at the bottom competes with the focal story rather than extending it. This is a solid mid-funnel email that could convert better with sharper hierarchy and one stronger CTA moment.

---

## 2. Business Impact Score: **6.5 / 10**

---

## 3. What's Working

- **Color storytelling works.** Slate → Taupe → Olive as sequential color chapters is smart visual merchandising. The named color labels read clearly and help the customer self-select.
- **Lifestyle + product photography pairing.** Each color section pairs a context shot with a clean product shot, giving both aspiration and clarity.
- **Consistent module cadence.** The repeat structure (lifestyle image → color name → product shot → CTA) is easy to scan and removes cognitive load.
- **"More Spring Essentials" teaser.** The seasonal bridge module at the bottom-middle provides a natural next step for customers not sold on this shoe.

---

## 4. What's Weak

- **Hero is underpowered.** "Cool + Colorful" is generic. There's no product name, no price signal, no urgency — nothing to anchor the scroll before you get to the color chapters.
- **CTAs are small and repetitive.** Each color section has a small button, but at this render size they're easy to miss and visually identical. No single CTA dominates.
- **"Shop Our Newest Arrivals" module dilutes focus.** Four small product thumbnails at the bottom scatter attention. The products are too small to evaluate at this size and work against the single-shoe narrative.
- **Footer is dense.** The text-heavy footer (preferences, legal, address) feels abrupt after the visual product content and is visually heavy relative to the rest of the email.
- **No price or promotion signal.** For a purchase-segment audience (ECMPUR), there's no price, discount, or value hook visible anywhere — a missed conversion lever.

---

## 5. Recommendations

1. **Strengthen the hero.** Add the shoe name and a one-line differentiator (e.g., comfort claim or "now in 3 new colors") directly under "Cool + Colorful" before the first color chapter begins.
2. **Add one dominant CTA.** After all three colors are shown, place a single high-contrast "Shop All Colors" button to consolidate intent before the footer.
3. **Cut or shrink the "Newest Arrivals" module.** It's competing with the email's purpose. If kept, make it a cleaner 2-up grid with visible product names.
4. **Surface a price or offer.** Even "Starting at $X" or free shipping would give the purchase-segment recipient a conversion reason the current email lacks.
5. **Increase CTA button size.** Each per-color CTA should be wider and higher-contrast to be actionable on mobile.

---

## 6. Bottom Line

The color-chapter structure is genuinely good and the right creative idea for this send. Execution falls short in hero depth, CTA hierarchy, and the absence of any price or offer signal for a purchase-intent segment. Fix the hero and add one consolidating CTA and this email earns a point or two back.

---

## 7. Evidence

**Overall purpose:** Showcase three new colorways of a single Skechers shoe to a past-purchaser segment and drive product page clicks.

**Hero / primary value proposition:** "Cool + Colorful" headline over a lifestyle image. Value prop is style/aesthetic only — no product name, price, or performance claim visible.

**Membership / benefits section:** None visible.

**Product discoverability / recommendation modules:** Three sequential color modules (Slate, Taupe, Olive), each with lifestyle + product imagery and a small CTA button. A "Shop Our Newest Arrivals" 4-product grid appears below the color story.

**Utility / secondary modules:** "More Spring Essentials" banner bridging the color chapters to the broader seasonal catalog. Standard text footer with preference and legal links.

**Bugs / friction / clarity issues:** No visible broken images or rendering errors. Product thumbnails in the "Newest Arrivals" grid are very small at this render size — borderline unidentifiable on mobile. No other visual bugs observed.

---

## Technical Audit

## Technical Audit — Skechers BOGO Colors Email
**Campaign:** `MKG_US_ECMPUR_U_SEASONAL_ECOM_EN_03302026_B`
**Date audited:** 2026-03-29

---

### 1. Technical Summary

The email carries a `[Test]:` subject prefix and a subject-line concatenation defect that would expose an internal campaign ID to subscribers. Additionally, all footer/asset images are served over HTTP, which will cause image blocking in major clients that enforce HTTPS.

---

### 2. Link & Tracking Issues

**[WARN] 26 click links unverifiable** — All CTAs route through `click.emails.skechers.com` (SFMC click-redirect). Destination URLs and UTM integrity could not be probed by the automated checker. Manual spot-check of final destinations is required before send.

**[INFO] Third-party audience-sync pixels present:**
- `beacon.krxd.net` — two fire events: SHA-256 hashed email match (`partner_uid=28374a...`) and a raw subscriber sub-ID (`partner_uid=2396422`). The plain-text sub-ID variant leaks an internal subscriber identifier to a third-party domain.
- `pixel.app.returnpath.net/pixel.gif` — Return Path inbox monitoring pixel, served over **HTTP** (no HTTPS).
- `http://www.ink1000.com/…/o.gif` — Third-party open-tracker, served over **HTTP**.

---

### 3. Rendering & Accessibility

**[FAIL] HTTP image sources — 15 assets** — All hosted on `image.emails.skechers.com` and `ink1000.com` are served via `http://`. Gmail, Yahoo Mail, and Apple Mail strip or block mixed-content images. Affected assets include the Skechers logo, app store badges, social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), and the ink1000 tracking pixel.

Example evidence:
```
src="http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png"  (Skechers logo)
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=9015215849&..."
```

**[WARN] Missing `alt` text on 4 images:**
- `o.gif` (ink1000 open tracker) — `alt=""` present but no descriptive value; acceptable for a tracking pixel.
- `49468f73-...png` — no `alt` attribute at all.
- `00100b23-...png` — no `alt` attribute.
- `fc08601a-...png` — no `alt` attribute.

Images without `alt` attributes render as broken image icons in image-blocked environments and fail WCAG 2.1 SC 1.1.1.

**[WARN] Malformed charset meta tag:**
```html
<meta content="text/html; charset=utf-8" />
```
Missing `http-equiv="Content-Type"`. Some older clients may fail to declare UTF-8, risking character-encoding issues in the subject/preheader.

---

### 4. Personalization & Merge Tokens

No unresolved `%%token%%` or `{{handlebars}}` placeholders detected in the truncated source. No issues found.

---

### 5. Compliance

**[FAIL] Subject line contains `[Test]:` prefix** — Subject reads:
```
[Test]: MKG_US_ECMPUR_U_SEASONAL_ECOM_EN_03302026_BNew Colors You'll Keep Coming Back To
```
This is a production-blocking issue if the email deploys to live subscribers. CAN-SPAM §5(a)(6) prohibits deceptive subject lines; a `[Test]:` tag on a commercial send is also poor practice and may trigger spam filters.

**[FAIL] Subject-line concatenation defect** — The campaign ID `MKG_US_ECMPUR_U_SEASONAL_ECOM_EN_03302026_B` is directly concatenated with the display subject `New Colors You'll Keep Coming Back To` with no separator. This exposes a raw internal campaign identifier to subscribers and suggests a broken template variable substitution.

**[WARN] SPF/DKIM authentication status unknown** — The AgentMail relay did not return `Authentication-Results` headers. SPF/DKIM/DMARC pass status could not be confirmed. Sending domain `emails.skechers.com` must be verified against Skechers' published DMARC policy before deployment.

Physical address and unsubscribe link presence could not be verified from the truncated source — confirm both are present in the footer per CAN-SPAM §5(a)(5) and §5(a)(3).

---

### 6. Email-to-Site Continuity

All 26 CTAs route through the SFMC click-redirect wrapper. UTM parameter presence on final destination URLs could not be confirmed without resolving the redirects. The campaignid value `MKG_US_ECMPUR_U_SEASONAL_ECOM_EN_03302026_B` appears in the Krux ad-impression pixel, confirming campaign attribution is wired. No issues found beyond the unverifiable click links noted above.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| **P0** | `[Test]:` subject prefix | Remove before production send |
| **P0** | Campaign ID concatenated into subject | Fix template: add space/separator or remove campaign ID from subject field |
| **P1** | 15 HTTP image sources | Migrate all `image.emails.skechers.com` and `ink1000.com` assets to HTTPS; coordinate with ESP asset hosting |
| **P1** | SPF/DKIM unverified | Confirm authentication headers resolve correctly through AgentMail relay before send |
| **P2** | 3 images missing `alt` attributes | Add descriptive `alt` text to `49468f73`, `00100b23`, `fc08601a` PNGs |
| **P2** | Raw sub-ID in Krux pixel | Evaluate whether `partner_uid=2396422` (plain-text subscriber ID) is intentional; consider removing or hashing |
| **P3** | Malformed charset meta | Change to `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />` |
| **P3** | Spot-check 26 click URLs | Manually verify UTM params and landing page alignment on a representative sample of CTAs |
## Recent history

- [[2026-03-29-test-mkg-us-ecmpur-u-best-ecom-en-03292026-b-v2the-styles-everyone-s-searching-f]] — 6/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-ecmpur-u-best-ecom-en-03292026-bthe-styles-everyone-s-searching-for]] — 6/10 (2026-03-27)
- [[2026-03-29-this-style-has-limited-availability]] — 5/10 (2026-03-27)

