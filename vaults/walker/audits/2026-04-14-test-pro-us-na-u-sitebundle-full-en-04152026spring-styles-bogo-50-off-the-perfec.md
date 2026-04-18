---
slug: 2026-04-14-test-pro-us-na-u-sitebundle-full-en-04152026spring-styles-bogo-50-off-the-perfec
type: email
date: 2026-04-14
persona: walker
score: "4/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04152026Spring Styles + BOGO 50% Off = The Perfect Pair"
tags: [email, score-4, sender/skechers]
---
# [Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04152026Spring Styles + BOGO 50% Off = The Perfect Pair
**Score:** 4/10 · **Type:** Email audit · **2026-04-14**
## Executive summary

- The production errors alone crater this score. The BOGO offer has real commercial appeal, but the subject line and preview text signal a broken, unprofessional send to the entire list.

## What's working

- **Hero offer is immediately legible.** "BUY ONE GET ONE 50% OFF" is large, high-contrast, and paired with a spring-appropriate sandal image. The offer reads in under two seconds.
- **Category navigation at the bottom is useful.** The WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE text block gives the email a useful fallback for browsers who don't engage with the hero.
- **Utility footer is comprehensive.** Texting opt-in, curbside pickup, BNPL (Afterpay/Klarna), Find a Store, and app download are all present and logically grouped.
- **Clean, uncluttered layout.** The single-column format is appropriate for mobile and doesn't compete with the hero.

## What's weak

- **Subject line is broken.** The `[Test]:` prefix and the internal campaign code `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04152026` are exposed to all recipients. This is the single most damaging issue.
- **Preview text is raw JSON-LD.** The `{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://..."` string renders verbatim in every inbox preview pane. Recipients see machine code instead of a marketing message — this destroys first-impression credibility.
- **Product modules are too small.** The Women's, Men's, and Kids' sections each show three thumbnail images that are difficult to evaluate at a glance. There's no product name, price, or any copy — just images and a section CTA. These modules do almost no selling.
- **No personalization signals.** Nothing in this email suggests it knows anything about the recipient — no name, no browsing history reference, no location-aware content.
- **"The Perfect Pair" headline underdelivers.** The tagline is a low-effort pun. It doesn't communicate anything about what makes this offer compelling or timely.

## Recommendations

- 1. **Implement a pre-send QA gate** that blocks emails with `[Test]:` in the subject or JSON content in the preview text field. This is a process failure, not a one-off mistake.
- 2. **Fix preview text immediately.** The preview field should carry a concise hook — e.g., *"BOGO 50% off spring sandals — shop the new collection now."*
- 3. **Expand product module cards.** Add product name, price (or "starting at $X"), and a clear hover/tap state. Three unnamed thumbnails don't drive clicks.
- 4. **Add a secondary urgency signal.** The hero doesn't include an expiration date or "limited time" qualifier. Adding "Offer ends Sunday" or similar would sharpen conversion.
- 5. **Test a segmented version.** Send women's-first layout to women's purchasers, men's-first to men's purchasers. The current one-size-fits-all order is a missed personalization opportunity.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Monetate links returning 400 | Re-validate experience IDs 2108354/2108355 and action IDs in the Monetate dashboard before any resend. Confirm `customer_id=8008532836` maps to a live campaign configuration. |
- | **P0** | `[Test]:` prefix in subject | Strip test prefix. Fix concatenation — campaign ID and subject copy need a separator or the code should be excluded from the rendered subject entirely. |
- | **P0** | Empty name merge token | Add a fallback value to the first-name merge tag (e.g., `%%=v(@FirstName, 'there')=%%` in AMPscript, or equivalent). |
- | **P1** | HTTP image sources | Move all `image.emails.skechers.com` assets to HTTPS. Update the ink1000.com tracking pixel URL to HTTPS. Gmail will block HTTP image loads. |
- | **P1** | DKIM/SPF authentication | Confirm authentication headers are present on the sending domain. Verify DMARC alignment for `emails.skechers.com`. |
- | **P1** | UTM validation | Resolve click.emails.skechers.com redirect chains in QA tooling and inspect final destination URLs for UTM completeness. |
- | **P2** | Missing alt text | Add descriptive alt text to `49468f73…png`. |
- | **P2** | Krxd PII pixel | Confirm SHA-256 email hash audience-matching to Krxd is covered by current privacy policy and applicable consent signals. |
- | **P3** | Duplicate media queries | Consolidate 375px/640px/480px blocks into a single `<style>` tag to reduce maintenance surface. |

## Full review
## 2. Business Impact Score: **4 / 10**

The production errors alone crater this score. The BOGO offer has real commercial appeal, but the subject line and preview text signal a broken, unprofessional send to the entire list.

---

## 3. What's Working

- **Hero offer is immediately legible.** "BUY ONE GET ONE 50% OFF" is large, high-contrast, and paired with a spring-appropriate sandal image. The offer reads in under two seconds.
- **Category navigation at the bottom is useful.** The WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE text block gives the email a useful fallback for browsers who don't engage with the hero.
- **Utility footer is comprehensive.** Texting opt-in, curbside pickup, BNPL (Afterpay/Klarna), Find a Store, and app download are all present and logically grouped.
- **Clean, uncluttered layout.** The single-column format is appropriate for mobile and doesn't compete with the hero.

---

## 4. What's Weak

- **Subject line is broken.** The `[Test]:` prefix and the internal campaign code `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04152026` are exposed to all recipients. This is the single most damaging issue.
- **Preview text is raw JSON-LD.** The `{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://..."` string renders verbatim in every inbox preview pane. Recipients see machine code instead of a marketing message — this destroys first-impression credibility.
- **Product modules are too small.** The Women's, Men's, and Kids' sections each show three thumbnail images that are difficult to evaluate at a glance. There's no product name, price, or any copy — just images and a section CTA. These modules do almost no selling.
- **No personalization signals.** Nothing in this email suggests it knows anything about the recipient — no name, no browsing history reference, no location-aware content.
- **"The Perfect Pair" headline underdelivers.** The tagline is a low-effort pun. It doesn't communicate anything about what makes this offer compelling or timely.

---

## 5. Recommendations

1. **Implement a pre-send QA gate** that blocks emails with `[Test]:` in the subject or JSON content in the preview text field. This is a process failure, not a one-off mistake.
2. **Fix preview text immediately.** The preview field should carry a concise hook — e.g., *"BOGO 50% off spring sandals — shop the new collection now."*
3. **Expand product module cards.** Add product name, price (or "starting at $X"), and a clear hover/tap state. Three unnamed thumbnails don't drive clicks.
4. **Add a secondary urgency signal.** The hero doesn't include an expiration date or "limited time" qualifier. Adding "Offer ends Sunday" or similar would sharpen conversion.
5. **Test a segmented version.** Send women's-first layout to women's purchasers, men's-first to men's purchasers. The current one-size-fits-all order is a missed personalization opportunity.

---

## 6. Bottom Line

A salvageable promotional email ruined by two production errors that every recipient sees before opening. The BOGO offer is the right campaign mechanic for spring, and the layout is structurally sound — but this send should be treated as a defect. The subject line and preview text failures need a root-cause fix in the deployment pipeline, not just a one-time patch.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04152026Spring Styles + BOGO 50% Off = The Perfect Pair`
- **Length:** 89 characters
- **Scores (1-10):** Clarity `2`, Curiosity `3`, Personalization `1`, Urgency `3`, Specificity `4`
- **Strengths:**
  - The BOGO 50% off value proposition is present and specific
  - "Spring Styles" correctly signals seasonal relevance
- **Weaknesses:**
  - `[Test]:` prefix and internal campaign code `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04152026` are fully exposed — this is a production failure, not a subject line flaw
  - "The Perfect Pair" is a weak, generic pun that adds no persuasive value and pushes total length well past the 60-char inbox cutoff
- **Alt A:** `BOGO 50% Off Spring Sandals — Buy One, Save on the Second`
- **Alt B:** `Your spring upgrade: Buy One Get One 50% Off, today only`

---

## 8. Evidence

**Overall purpose:** Spring seasonal promotion driving BOGO 50% off footwear purchases across Women's, Men's, and Kids' categories.

**Hero / primary value proposition:** Full-width banner with sandal imagery, "BUY ONE GET ONE 50% OFF or 25% off" headline, and a prominent "SHOP NOW" CTA. Visually strong, offer is legible at a glance.

**Membership / benefits section:** Not present. No loyalty program callout or member-exclusive framing.

**Product discoverability / recommendation modules:** Three category sections (Women's, Men's, Kids') each contain three thumbnail product images with no names or prices, followed by a section-level CTA button. Products are identifiable as sandals/casual footwear but provide no shopping signal.

**Utility / secondary modules:** A text-based category nav (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE) bridges the product sections and footer. Footer includes: text opt-in, curbside pickup, BNPL logos (Afterpay/Klarna), Find a Store, and social follow links.

**Bugs / friction / clarity issues (visible in render):**
- `[Test]:` prefix visible in subject line
- Raw JSON-LD schema string renders as preview text in inbox
- Product thumbnails have no accompanying text — names, prices, and ratings are absent

---

## Technical Audit

## Technical Audit — SKECHERS PRO_US_NA_U_SITEBUNDLE_FULL_EN_04152026

---

### 1. Technical Summary

Six Monetate personalization links return HTTP 400, rendering associated product recommendation slots broken for all recipients. The email also has a live `[Test]:` subject prefix and an unresolved name merge token, both indicating a production send with incomplete QA sign-off.

---

### 2. Link & Tracking Issues

**[FAIL] Monetate recommendation links — HTTP 400 (6 links)**

All slots across two experiences are returning 400:

```
experience_id=2108354, action_id=5875240, slot_index=0/1/2
experience_id=2108355, action_id=5875241, slot_index=0/1/2
Base URL: https://d.monetate.net/trk/1/im/a-687136e6/p/skechers.com/
```

These are likely personalized product recommendation slots. A 400 response means the Monetate experience/action IDs are invalid or the request context (customer_id=8008532836) doesn't match a live campaign. All six slots fail — recipients receive broken content blocks or fallback images with no click destination.

**[WARN] 25 click-redirect links skipped**

All CTAs pass through `click.emails.skechers.com`. Redirect chains could not be probed, so UTM/destination validation is unconfirmed (see Section 6).

**[WARN] HTTP tracking pixel — mixed content**

```
src: http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
     ?mi_u=8008532836&mi_ecmp=PRO_US_NA_U_SITEBUNDLE_FULL_EN_04152026
```

Non-HTTPS. Gmail and other clients that enforce HTTPS will silently block this pixel, voiding open tracking for this third-party system.

**[INFO] Third-party audience-match pixels present**

Two Krxd usermatch beacons and one ad impression beacon are firing on open:

```
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=<sha256_hash>
beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=43642010
beacon.krxd.net/1x1_ad_impression.gif?confid=so3yexmpm&campaignid=PRO_US_NA_U_SITEBUNDLE_FULL_EN_04152026
```

These are passing hashed PII (SHA-256 email) to a third-party DMP on open. Confirm this is covered by Skechers' privacy policy and consent model.

---

### 3. Rendering & Accessibility

**[FAIL] All `image.emails.skechers.com` assets served over HTTP**

Fourteen images are HTTP-only, including functional UI elements:

| Image | Alt text |
|---|---|
| Skechers logo (`dde00662…png`) | "Skechers" |
| Unnamed (`49468f73…png`) | missing |
| App Store badge (`0ec56c9f…png`) | "Available on the App Store" |
| Google Play badge (`9bb508d0…png`) | "Android App on Google Play" |
| Curbside Pickup (`00100b23…png`) | "Curbside Pickup" |
| AfterPay (`07cb60b5…png`) | "AfterPay" |
| Find A Store (`fc08601a…png`) | "Find A Store" |
| Instagram (`b782e0aa…png`) | "Instagram" |
| Facebook (`a5c4cae0…png`) | "Facebook" |
| YouTube (`8c5738fc…png`) | "YouTube" |

Gmail strips HTTP image sources by default. Recipients on Gmail (likely a large segment for a brand this size) will see broken images for all of these.

**[WARN] Missing alt text on two images**

- `o.gif` (ink1000.com tracking pixel) — alt="" is present but blank; acceptable for a 1x1 pixel
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no alt attribute at all. If this is a content image, screen readers and image-blocked clients get nothing.

**[WARN] Universal `*` selector applying `-webkit-text-size-adjust: none`**

```css
* { -webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; }
```

Applying `text-size-adjust: none` universally (not scoped to `body`) can suppress iOS Mail's responsive font scaling across all elements, including any dynamic content injected by Monetate or SFMC.

**[WARN] Duplicate media query blocks**

The `@media only screen and (max-width: 375px)` and `@media only screen and (max-width: 640px)` blocks contain identical rules. A third block at `480px` appears in a separate `<style>` tag. No functional breakage, but unnecessary CSS weight and maintenance risk if rules diverge.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty name field in greeting**

QA detected:

```
Greeting has empty name field (e.g. "Hi ,")
```

The first-name merge token is rendering as blank. Either the subscriber record has no first name and no fallback value is set, or the merge tag syntax is malformed. Every recipient without a stored first name receives `Hi ,` — a visible rendering error.

**[FAIL] `[Test]:` prefix present in production subject line**

```
Subject: [Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04152026Spring Styles + BOGO 50% Off = The Perfect Pair
```

The `[Test]:` tag was not stripped before send. Additionally, the internal campaign code `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04152026` is concatenated directly to the subject text with no space or separator — this is also rendering in the subject line as received.

---

### 5. Compliance

**[WARN] Authentication-Results header not present**

SPF and DKIM status for `no-reply@emails.skechers.com` could not be verified via the AgentMail relay headers. Without confirmed DKIM pass, the email is at elevated spam-filter risk and DMARC alignment cannot be verified.

**[INFO] Unsubscribe link — not verifiable from truncated source**

The HTML was truncated before the footer. Confirm that a one-click unsubscribe link and physical mailing address are present, as required by CAN-SPAM. If `List-Unsubscribe` and `List-Unsubscribe-Post` headers are set at the MTA level (required by Gmail/Yahoo bulk sender policy as of 2024), this would also need header-level verification.

---

### 6. Email-to-Site Continuity

**[UNVERIFIABLE] UTM parameters on CTA links**

All 25 click-tracked links pass through `click.emails.skechers.com` redirects and could not be probed for final destination URLs or UTM parameters. Cannot confirm whether `utm_source`, `utm_medium`, `utm_campaign`, or `utm_content` are appended to landing page URLs. This is a gap in QA coverage — redirect chains need to be resolved and destination URLs inspected.

**[FAIL] Monetate-linked slots have no valid destination**

The six broken Monetate URLs (HTTP 400) have no fallback href. Clicks on those content blocks go nowhere.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Monetate links returning 400 | Re-validate experience IDs 2108354/2108355 and action IDs in the Monetate dashboard before any resend. Confirm `customer_id=8008532836` maps to a live campaign configuration. |
| **P0** | `[Test]:` prefix in subject | Strip test prefix. Fix concatenation — campaign ID and subject copy need a separator or the code should be excluded from the rendered subject entirely. |
| **P0** | Empty name merge token | Add a fallback value to the first-name merge tag (e.g., `%%=v(@FirstName, 'there')=%%` in AMPscript, or equivalent). |
| **P1** | HTTP image sources | Move all `image.emails.skechers.com` assets to HTTPS. Update the ink1000.com tracking pixel URL to HTTPS. Gmail will block HTTP image loads. |
| **P1** | DKIM/SPF authentication | Confirm authentication headers are present on the sending domain. Verify DMARC alignment for `emails.skechers.com`. |
| **P1** | UTM validation | Resolve click.emails.skechers.com redirect chains in QA tooling and inspect final destination URLs for UTM completeness. |
| **P2** | Missing alt text | Add descriptive alt text to `49468f73…png`. |
| **P2** | Krxd PII pixel | Confirm SHA-256 email hash audience-matching to Krxd is covered by current privacy policy and applicable consent signals. |
| **P3** | Duplicate media queries | Consolidate 375px/640px/480px blocks into a single `<style>` tag to reduce maintenance surface. |
## Recent history

- [[2026-04-14-famous-for-the-styles-your-family-loves]] — 5/10 (2026-04-14)
- [[2026-04-14-more-comfort-less-effort-with-20-off-your-1st-pair]] — 5/10 (2026-04-14)
- [[2026-04-14-put-your-feet-first-with-29-98-comfort-sandals]] — 6/10 (2026-04-14)

