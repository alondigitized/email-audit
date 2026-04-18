---
slug: 2026-03-29-test-mkg-us-ecmpur-u-best-ecom-en-03292026-bthe-styles-everyone-s-searching-for
type: email
date: 2026-03-27
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_BThe Styles Everyone's Searching For"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_BThe Styles Everyone's Searching For
**Score:** 6/10 · **Type:** Email audit · **2026-03-27**
## Executive summary

- Solid promotional mechanics with clear offer visibility, but structural length and repetitive module cadence reduce urgency and likely kill click-through below the fold.

## What's working

- **BOGO 50% OFF is front and center.** The hero communicates the offer immediately — no ambiguity about what the email is about.
- **Category segmentation is logical.** Sandals → Hands-Free → Arch Fit is a coherent product hierarchy for a searched-styles email.
- **"New & For You" personalization module** adds a tailored dimension that breaks the promotional monotony.
- **Consistent CTA treatment.** "SHOP NOW" buttons appear uniformly across modules — easy to scan.
- **Markdown module at the close** serves deal-hunters who scroll, adding a secondary conversion hook.

## What's weak

- **Too many modules, too similar in structure.** Sandals, Slip-Ins, Arch Fit, and New & For You all render as near-identical rows — same layout, same CTA. There's no visual hierarchy to signal which category matters most.
- **The hero image reads small.** At email width, the product imagery in the hero feels underpowered relative to the offer text. The shoe doesn't sell the BOGO — it just exists alongside it.
- **"New & For You" is buried mid-email.** Personalization is the strongest reason to open; placing it fourth in the module stack wastes its potential to drive early engagement.
- **Subject line test prefix is visible in metadata.** The `[Test]:` prefix and the raw preview text string leak into recipient-facing fields — significant professionalism issue if this sends to a live list.
- **Preview text is broken.** The preview text visible in the header shows a raw URL string rather than marketing copy, wasting prime inbox real estate.

## Recommendations

- 1. **Fix preview text immediately.** The preview currently shows a raw URL — replace with copy that reinforces the BOGO offer ("Your most-searched styles are 50% off when you buy two").
- 2. **Strip the `[Test]:` subject line prefix** before any live send.
- 3. **Elevate "New & For You" to module 2**, directly below the hero. Personalization drives higher CTR; don't bury it.
- 4. **Consolidate or cut one product module.** Four category rows + markdowns is one too many. Either merge Arch Fit into the hero narrative or move it to a secondary position below markdowns.
- 5. **Give the hero image more impact.** Use a lifestyle or action shot that visually amplifies the "most searched" framing — the current product-on-white reads generic.
- 6. **Add a countdown or urgency signal** to the BOGO hero. If the offer is time-limited, say so visually at the top.
- | Priority | Action |
- |---|---|
- | Critical | Remove `[Test]:` from subject line before live send |
- | High | Migrate all `image.emails.skechers.com` CDN URLs from `http://` to `https://` — update at the template/asset library level, not per-send |
- | High | Fix ink1000 pixel URL to HTTPS; add `alt=""` |
- | High | Confirm SPF/DKIM pass via authentication headers on a seed send before deployment |
- | Medium | Add `alt=""` to the 3 unnamed footer PNGs (GUIDs); add descriptive alt to all functional images |
- | Medium | Rewrite plain-text version as human-readable copy to reduce URL density below 30% |
- | Medium | Add a CSS rule covering 681px–767px to close the breakpoint gap |
- | Low | Verify footer contains CAN-SPAM postal address and functional SFMC unsubscribe token |
- | Low | Resolve click-wrap redirects in staging to confirm UTM parameters on all 22 CTAs |

## Full review
## 2. Business Impact Score: 6/10

Solid promotional mechanics with clear offer visibility, but structural length and repetitive module cadence reduce urgency and likely kill click-through below the fold.

---

## 3. What's Working

- **BOGO 50% OFF is front and center.** The hero communicates the offer immediately — no ambiguity about what the email is about.
- **Category segmentation is logical.** Sandals → Hands-Free → Arch Fit is a coherent product hierarchy for a searched-styles email.
- **"New & For You" personalization module** adds a tailored dimension that breaks the promotional monotony.
- **Consistent CTA treatment.** "SHOP NOW" buttons appear uniformly across modules — easy to scan.
- **Markdown module at the close** serves deal-hunters who scroll, adding a secondary conversion hook.

---

## 4. What's Weak

- **Too many modules, too similar in structure.** Sandals, Slip-Ins, Arch Fit, and New & For You all render as near-identical rows — same layout, same CTA. There's no visual hierarchy to signal which category matters most.
- **The hero image reads small.** At email width, the product imagery in the hero feels underpowered relative to the offer text. The shoe doesn't sell the BOGO — it just exists alongside it.
- **"New & For You" is buried mid-email.** Personalization is the strongest reason to open; placing it fourth in the module stack wastes its potential to drive early engagement.
- **Subject line test prefix is visible in metadata.** The `[Test]:` prefix and the raw preview text string leak into recipient-facing fields — significant professionalism issue if this sends to a live list.
- **Preview text is broken.** The preview text visible in the header shows a raw URL string rather than marketing copy, wasting prime inbox real estate.

---

## 5. Recommendations

1. **Fix preview text immediately.** The preview currently shows a raw URL — replace with copy that reinforces the BOGO offer ("Your most-searched styles are 50% off when you buy two").
2. **Strip the `[Test]:` subject line prefix** before any live send.
3. **Elevate "New & For You" to module 2**, directly below the hero. Personalization drives higher CTR; don't bury it.
4. **Consolidate or cut one product module.** Four category rows + markdowns is one too many. Either merge Arch Fit into the hero narrative or move it to a secondary position below markdowns.
5. **Give the hero image more impact.** Use a lifestyle or action shot that visually amplifies the "most searched" framing — the current product-on-white reads generic.
6. **Add a countdown or urgency signal** to the BOGO hero. If the offer is time-limited, say so visually at the top.

---

## 6. Bottom Line

The bones are solid — right offer, right structure, right product categories. But the email needs triage before it can be considered send-ready: the preview text and subject line both expose test artifacts. Beyond that, the biggest lever is restructuring module order to put personalization earlier and trimming the category count to keep energy high through the scroll.

---

## 7. Evidence

**Overall purpose:** Drive purchase of Skechers' best-selling styles via a BOGO 50% OFF promotion.

**Hero / primary value proposition:** "MOST SEARCHED STYLES / BOGO 50% OFF" — offer is clear, CTA is present. Hero image is a single shoe on white background. Functional but not compelling.

**Membership / benefits section:** None visible. No loyalty/rewards callout in this email.

**Product discoverability / recommendation modules:**
- Module 1: Sandals — product image + SHOP NOW
- Module 2: Hands-Free Slip-Ins — product image + SHOP NOW
- Module 3: Arch Fit — product image + SHOP NOW
- Module 4: New & For You — personalized product row + SHOP NOW
- Module 5: Shop the Latest Markdowns — thumbnail grid of reduced-price styles

**Utility / secondary modules:** Footer contains standard nav links, social icons, and legal/unsubscribe text. No store locator or app download module visible.

**Bugs / friction / clarity issues (visible in render):**
- Preview text displays a raw URL string — broken and visible in the email header area
- Subject line carries `[Test]:` prefix — indicates this is a test variant that should not deploy to live recipients as-is

---

## Technical Audit

## Technical Audit — Skechers "The Styles Everyone's Searching For"
**Campaign:** `MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_B` | **From:** no-reply@emails.skechers.com

---

### 1. Technical Summary
A Salesforce Marketing Cloud send bearing a `[Test]:` subject prefix, meaning it must not deploy to live subscribers in current state. The primary infrastructure risk is pervasive use of HTTP (non-HTTPS) image sources across the entire asset library, which modern email clients will block or flag.

---

### 2. Link & Tracking Issues

**[CRITICAL] Test prefix in subject line**
Subject contains `[Test]:` — live deployment in this state would expose the internal campaign naming convention to subscribers. Must be removed before production send.

**[WARN] 22 click-wrap links not probed**
All CTAs route through `click.emails.skechers.com` with encrypted `?qs=eyJ...` payloads. Destination URLs and UTM parameters cannot be verified without resolving the redirects. QA tooling explicitly skipped these.

**[WARN] Plain-text body is 71% URLs**
4,047 of 5,704 characters in the plain-text part are URLs. This ratio is a spam filter signal and indicates the plain-text version was not properly authored — it appears auto-generated from raw link blocks rather than readable copy.

**[INFO] Multiple third-party tracking pixels present**
- Krux/Salesforce DMP usermatch beacons (2×): `beacon.krxd.net`
- Inbox intelligence pixel: `pixel.app.returnpath.net/pixel.gif?r=964ce1d...` — no protocol prefix in source (protocol-relative); in email clients this typically resolves to `http://`, not HTTPS
- Ink1000 engagement pixel: `http://www.ink1000.com/...` — confirmed HTTP (see below)

---

### 3. Rendering & Accessibility

**[HIGH] All asset CDN images served over HTTP**
Every image from `image.emails.skechers.com` uses `http://` not `https://`. Apple Mail (iOS/macOS), Gmail, and Outlook 2019+ block or warn on mixed-content images. Affected assets include the Skechers logo, footer icons (Instagram, Twitter, Facebook, Pinterest, YouTube), App Store/Google Play badges, and AfterPay badge — totaling 14+ images.

Example: `src="http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png"`

**[HIGH] Ink1000 tracking pixel is HTTP**
`src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif"` — also missing `alt=""`, so if blocked, screen readers may announce the filename.

**[WARN] 4 images missing alt text**
| Asset | src |
|---|---|
| o.gif (ink1000) | `http://www.ink1000.com/.../o.gif` |
| 49468f73-...png | `http://image.emails.skechers.com/.../m/11/49468f73...` |
| 00100b23-...png | `http://image.emails.skechers.com/.../m/11/00100b23...` |
| fc08601a-...png | `http://image.emails.skechers.com/.../m/11/fc08601a...` |

Missing `alt=""` on decorative images forces screen readers to announce file GUIDs.

**[WARN] CSS breakpoint gap (681px–767px)**
Defined breakpoints: `max-width: 375px`, `max-width: 680px`, `min-width: 768px`. No rules apply between 681px and 767px — tablets in this range (e.g., landscape phone, small tablet) will receive neither mobile nor desktop layout rules, likely collapsing to the default fixed 640px table width and overflowing the viewport.

**[INFO] `-webkit-text-size-adjust: none` applied globally**
`* { -webkit-text-size-adjust: none; }` disables automatic font scaling on all elements in WebKit clients. This can make small text (e.g., the 12px legal copy) unreadable on high-DPI mobile screens when images are blocked.

---

### 4. Personalization & Merge Tokens

No unrendered merge tokens (e.g., `%%firstName%%`, `{{name}}`) are visible in the HTML source. Subscriber-level identifiers are embedded in tracking pixel URLs:
- `partner_uid=2396422` (Krux subid beacon)
- `mi_u=9015215849` (Ink1000 pixel)

These are resolved server-side before send and appear populated correctly. No issues with broken substitution syntax detected in the available source.

---

### 5. Compliance

**[HIGH] SPF/DKIM authentication status unknown**
`Authentication-Results` header was not captured by the AgentMail relay. SPF/DKIM pass/fail cannot be confirmed. Unauthenticated sends from `emails.skechers.com` risk DMARC failure and Gmail/Yahoo bulk sender policy violations (required since Feb 2024 for >5k/day senders).

**[WARN] CAN-SPAM physical address and unsubscribe — not verifiable**
HTML source is truncated before the footer. Physical mailing address and one-click unsubscribe link presence cannot be confirmed. These are required under CAN-SPAM. Auditor should verify footer renders `%%unsub_center_url%%` or equivalent SFMC unsubscribe token and a valid postal address.

---

### 6. Email-to-Site Continuity

All 22 CTAs use opaque encrypted click-wrap URLs (`?qs=eyJ...`). UTM parameters embedded within cannot be extracted from the HTML source alone. The campaign ID `MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_B` is consistently applied across all tracking pixels, which is correct. Landing page UTM alignment must be verified by resolving the click-wrap redirects in a staging environment — this was not performed by the automated QA pass.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| Critical | Remove `[Test]:` from subject line before live send |
| High | Migrate all `image.emails.skechers.com` CDN URLs from `http://` to `https://` — update at the template/asset library level, not per-send |
| High | Fix ink1000 pixel URL to HTTPS; add `alt=""` |
| High | Confirm SPF/DKIM pass via authentication headers on a seed send before deployment |
| Medium | Add `alt=""` to the 3 unnamed footer PNGs (GUIDs); add descriptive alt to all functional images |
| Medium | Rewrite plain-text version as human-readable copy to reduce URL density below 30% |
| Medium | Add a CSS rule covering 681px–767px to close the breakpoint gap |
| Low | Verify footer contains CAN-SPAM postal address and functional SFMC unsubscribe token |
| Low | Resolve click-wrap redirects in staging to confirm UTM parameters on all 22 CTAs |
## Recent history

- [[2026-03-29-this-style-has-limited-availability]] — 5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-na-w-multi-gender-en-03282026-a-v2fresh-spring-styles-to-step-up-you]] — 5/10 (2026-03-27)
- [[2026-03-29-an-easy-way-to-try-the-comfort-everyone-talks-about]] — 6/10 (2026-03-27)

