---
slug: 2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-amake-walking-a-breeze-this-national-w
type: email
date: 2026-04-01
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_MULTI_GENDER_EN_04022026_AMake Walking a Breeze this National Walking Day"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_U_MULTI_GENDER_EN_04022026_AMake Walking a Breeze this National Walking Day
**Score:** 5/10 · **Type:** Email audit · **2026-04-01**
## Executive summary

- A competent but underwhelming occasion-based email. Skechers correctly anchors to National Walking Day, but the execution fails to lean into the moment — the hero is generic, the discount mechanic is buried or unclear, and the product flow dilutes the walk-specific narrative by pivoting immediately to running and casual styles. The email does its job as a promotional blast, but misses the opportunity to make the occasion feel intentional.
- Functional. Navigable. Not memorable. The offer and products are present but the email won't drive urgency or emotional engagement beyond what a generic sale email would.

## What's working

- **Clear discount callout at top.** "50% OFF" banner is prominent and immediately visible above the fold — no hunting required.
- **Gender segmentation is logical.** Women's → Men's flow is clean and predictable for a multi-gender send.
- **Consistent CTA labeling.** "SHOP NOW" appears uniformly across all modules — low cognitive load.
- **Breadth of product coverage.** Walking, athletic/running, and casual are all represented, giving different intent signals multiple entry points.

## What's weak

- **Hero creative is soft.** "GET YOUR STEPS IN" is a placeholder-level headline. It doesn't say National Walking Day, doesn't communicate the offer, and doesn't create urgency. The hero image shows a person in motion but nothing distinctive ties it to the occasion or the brand's Walking comfort story.
- **The occasion is invisible.** National Walking Day is in the subject line but does not appear to surface visibly in the email body. A recipient who opens without reading the subject gets no hook.
- **Discount terms are unclear.** The 50% off banner is shown at top but no clarifying context (which styles? sitewide? specific category?) is visible in the render. This creates click uncertainty.
- **"Prefer to Run?" module breaks the narrative.** Pivoting to running mid-email while the occasion is Walking Day undercuts the message. It reads like a generic product grid was appended.
- **"Keep It Casual" section dilutes further.** By the time the reader reaches the third product category, the email has lost its through-line entirely. Three different product stories in one email with no connective tissue.
- **No social proof or urgency trigger.** No "bestseller," "limited time," or customer ratings visible anywhere to drive conversion.

## Recommendations

- 1. **Surface National Walking Day in the hero.** Add the occasion name as a visible design element — even a simple banner or headline overlay. The subject line does the work; the email should reinforce it.
- 2. **Anchor the 50% offer to walking-specific styles.** Make it explicit: "50% off walking shoes" or "Walking Day Picks — 50% Off." Vague discounts create hesitation.
- 3. **Cut or reorder the running/casual modules.** If they must stay, reframe them under the occasion ("Walk more, move more") rather than breaking into a separate intent category mid-email.
- 4. **Add urgency.** "Today only" or "Walk Day Weekend" framing would significantly lift click intent on an occasion-specific email.
- 5. **Headline copy needs a rewrite.** Replace "Get Your Steps In" with something that carries the brand's comfort POV — Skechers' core differentiator is comfort, and this email doesn't say that once.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | `[Test]:` subject prefix | Strip before production deployment |
- | **P1** | 13 HTTP image URLs on `image.emails.skechers.com` | Update CDN config to serve over HTTPS; confirm no hardcoded `http://` in templates |
- | **P1** | HTTP ink1000 tracking pixel | Update to `https://www.ink1000.com/...` or confirm vendor supports HTTPS |
- | **P2** | 4 images missing `alt` text | Add `alt=""` for decorative images; add descriptive alt for content images (`49468f73`, `00100b23`, `fc08601a`) |
- | **P2** | SPF/DKIM unconfirmed | Verify `emails.skechers.com` DNS records; pull authentication headers from a non-relayed test send |
- | **P3** | Plaintext subscriber ID in Krxd impression pixel (`partner_uid=102541952`) | Confirm with DMP vendor whether this should be hashed or replaced with the SHA-256 UID used in the user-match pixel |
- | **P3** | 26 click links unverified | Validate all destination URLs and UTM payloads in ESP link checker before send |

## Full review
## Email Review: Skechers — National Walking Day (04/02/2026)

---

### 1. Executive Summary

A competent but underwhelming occasion-based email. Skechers correctly anchors to National Walking Day, but the execution fails to lean into the moment — the hero is generic, the discount mechanic is buried or unclear, and the product flow dilutes the walk-specific narrative by pivoting immediately to running and casual styles. The email does its job as a promotional blast, but misses the opportunity to make the occasion feel intentional.

---

### 2. Business Impact Score: 5/10

Functional. Navigable. Not memorable. The offer and products are present but the email won't drive urgency or emotional engagement beyond what a generic sale email would.

---

### 3. What's Working

- **Clear discount callout at top.** "50% OFF" banner is prominent and immediately visible above the fold — no hunting required.
- **Gender segmentation is logical.** Women's → Men's flow is clean and predictable for a multi-gender send.
- **Consistent CTA labeling.** "SHOP NOW" appears uniformly across all modules — low cognitive load.
- **Breadth of product coverage.** Walking, athletic/running, and casual are all represented, giving different intent signals multiple entry points.

---

### 4. What's Weak

- **Hero creative is soft.** "GET YOUR STEPS IN" is a placeholder-level headline. It doesn't say National Walking Day, doesn't communicate the offer, and doesn't create urgency. The hero image shows a person in motion but nothing distinctive ties it to the occasion or the brand's Walking comfort story.
- **The occasion is invisible.** National Walking Day is in the subject line but does not appear to surface visibly in the email body. A recipient who opens without reading the subject gets no hook.
- **Discount terms are unclear.** The 50% off banner is shown at top but no clarifying context (which styles? sitewide? specific category?) is visible in the render. This creates click uncertainty.
- **"Prefer to Run?" module breaks the narrative.** Pivoting to running mid-email while the occasion is Walking Day undercuts the message. It reads like a generic product grid was appended.
- **"Keep It Casual" section dilutes further.** By the time the reader reaches the third product category, the email has lost its through-line entirely. Three different product stories in one email with no connective tissue.
- **No social proof or urgency trigger.** No "bestseller," "limited time," or customer ratings visible anywhere to drive conversion.

---

### 5. Recommendations

1. **Surface National Walking Day in the hero.** Add the occasion name as a visible design element — even a simple banner or headline overlay. The subject line does the work; the email should reinforce it.
2. **Anchor the 50% offer to walking-specific styles.** Make it explicit: "50% off walking shoes" or "Walking Day Picks — 50% Off." Vague discounts create hesitation.
3. **Cut or reorder the running/casual modules.** If they must stay, reframe them under the occasion ("Walk more, move more") rather than breaking into a separate intent category mid-email.
4. **Add urgency.** "Today only" or "Walk Day Weekend" framing would significantly lift click intent on an occasion-specific email.
5. **Headline copy needs a rewrite.** Replace "Get Your Steps In" with something that carries the brand's comfort POV — Skechers' core differentiator is comfort, and this email doesn't say that once.

---

### 6. Bottom Line

This email checks the boxes but doesn't own the moment. National Walking Day is a perfect fit for Skechers and the brand does nothing with it beyond putting it in the subject line. The offer is present, the products are solid, but the email reads like a repurposed weekly blast rather than a purposeful occasion send. A focused hero rewrite and cleaner product narrative would meaningfully improve performance.

---

### 7. Evidence

**Overall purpose:** Multi-gender promotional email timed to National Walking Day (April 2, 2026), leading with a 50% off offer and showcasing walking, athletic, and casual shoe categories.

**Hero / primary value proposition:** "GET YOUR STEPS IN" headline over a lifestyle walking image. Offer (50% OFF) is shown in the top banner, not in the hero itself. The hero does not name the occasion or the brand's comfort story.

**Membership / benefits section:** None visible in the render.

**Product discoverability / recommendation modules:** Three distinct modules — Women's walking shoes, Men's walking shoes, "Prefer to Run? Shop More Athletic Styles," and "Keep It Casual." Each module has product imagery and a SHOP NOW CTA. No product names, prices, or ratings are visible at this zoom level.

**Utility / secondary modules:** Bottom navigation bar with category links (WOMEN'S, MEN'S, CLOTHING, NEW ARRIVALS, SALE). Standard footer with legal/unsubscribe text.

**Bugs / friction / clarity issues:** No visible broken images or overlapping text. The email renders cleanly. The primary friction is informational, not visual — discount terms and occasion context are absent from the body.

---

## Technical Audit

## Technical Audit — Skechers National Walking Day Email
**Campaign:** `MKG_US_NA_U_MULTI_GENDER_EN_04022026_A`
**Audited:** 2026-04-01

---

### 1. Technical Summary

The email has a systemic HTTP (non-HTTPS) image hosting issue affecting 14 assets across the Skechers image CDN and a third-party tracking domain. Authentication header data was unavailable via the AgentMail relay, so SPF/DKIM pass/fail cannot be confirmed. The `[Test]:` subject prefix must be stripped before production deployment.

---

### 2. Link & Tracking Issues

**[WARN] 26 click-redirect links unverified**
All CTAs route through `click.emails.skechers.com/?qs=<encrypted_payload>`. The QA probe skipped HTTP resolution on these, so destination URL integrity and UTM parameter presence cannot be confirmed from this review.

**[WARN] Third-party audience sync beacons present**
Three `beacon.krxd.net` pixels fire on open:
- User-match pixel with SHA-256 hashed UID
- User-match pixel with `partner_uid=102541952` (plaintext subscriber ID)
- Ad impression pixel tied to campaign ID

These are expected for DMP audience sync but the plaintext `partner_uid` in the Krxd impression pixel is an observable subscriber identifier exposed to a third-party domain.

**[INFO] ReturnPath inbox monitoring pixel present**
`pixel.app.returnpath.net/pixel.gif?r=964ce1...` — standard inbox monitoring, no issue.

---

### 3. Rendering & Accessibility

**[FAIL] 14 images served over HTTP — not HTTPS**

All assets hosted on `image.emails.skechers.com` and one on `ink1000.com` use `http://` URLs. Modern email clients (Gmail, Outlook.com, Apple Mail with iOS 15+) proxy or block mixed-content images, which will cause broken image rendering for a significant portion of recipients.

Affected assets:

| Asset | URL |
|---|---|
| Skechers logo | `http://image.emails.skechers.com/.../dde00662-...png` |
| Unnamed image | `http://image.emails.skechers.com/.../49468f73-...png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f-...png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0-...png` |
| Unnamed image | `http://image.emails.skechers.com/.../00100b23-...png` |
| AfterPay logo | `http://image.emails.skechers.com/.../07cb60b5-...png` |
| Unnamed image | `http://image.emails.skechers.com/.../fc08601a-...png` |
| Instagram icon | `http://image.emails.skechers.com/.../b782e0aa-...png` |
| Twitter icon | `http://image.emails.skechers.com/.../d76a5487-...png` |
| Facebook icon | `http://image.emails.skechers.com/.../a5c4cae0-...png` |
| Pinterest icon | `http://image.emails.skechers.com/.../573ab181-...png` |
| YouTube icon | `http://image.emails.skechers.com/.../8c5738fc-...png` |
| Tracking pixel (o.gif) | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` |

**[WARN] 4 images missing `alt` text**

Applies to `o.gif` (ink1000 pixel), `49468f73-...png`, `00100b23-...png`, and `fc08601a-...png`. Images without `alt=""` or descriptive alt text degrade screen reader accessibility and produce visible broken-image placeholders in image-blocked environments.

**[INFO] Mobile/desktop display switching implemented via CSS media query** — `display:none !important` on `.mobile-content` / `.desktop-content` classes. This is a known pattern but Gmail ignores media queries in some contexts; test in Gmail Android specifically.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the provided HTML source (e.g., no `%%FIRST_NAME%%` or `{{` patterns exposed in rendered output). The campaign ID `MKG_US_NA_U_MULTI_GENDER_EN_04022026_A` is correctly reflected across the open pixel, Krxd beacon, and ink1000 tracking pixel — consistent tagging.

---

### 5. Compliance

**[FAIL] Subject line contains `[Test]:` prefix**
`Subject: [Test]: MKG_US_NA_U_MULTI_GENDER_EN_04022026_A...`
This must be removed before the production send. Deploying with this prefix violates internal QA protocol and degrades deliverability reputation if flagged by spam filters.

**[WARN] SPF/DKIM authentication status unconfirmed**
The `Authentication-Results` header was not captured via the AgentMail relay. Sending domain is `emails.skechers.com`; DKIM signing and SPF alignment should be verified against DNS records for this subdomain before deployment.

**[INFO] CAN-SPAM physical address and unsubscribe link** — not visible in the truncated HTML but expected to be present in the footer. Verify the rendered footer includes: (1) a valid postal address, (2) a one-click unsubscribe mechanism, and (3) that the unsubscribe link is functional in the production environment.

**[INFO] Preheader text is present** — `"Buy One, Get One 50% Off Your Most Loved Walking Styles"` in a `display:none` div. Properly hidden from render.

---

### 6. Email-to-Site Continuity

All CTAs use the encrypted `click.emails.skechers.com/?qs=<base64-payload>` redirect format, which means UTM parameters and destination URLs are not inspectable from the HTML source alone. Confirm via the ESP's link review panel that:

- Each CTA resolves to the intended landing page (walking shoes category or promotional PDP)
- UTM parameters carry `utm_campaign=MKG_US_NA_U_MULTI_GENDER_EN_04022026_A` (or the shortened equivalent) for attribution
- No links point to staging or pre-production URLs

The ink1000 pixel includes `mi_ecmp=MKG_US_NA_U_MULTI_GENDER_EN_04022026_A` — campaign tagging is consistent with the deployment ID.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | `[Test]:` subject prefix | Strip before production deployment |
| **P1** | 13 HTTP image URLs on `image.emails.skechers.com` | Update CDN config to serve over HTTPS; confirm no hardcoded `http://` in templates |
| **P1** | HTTP ink1000 tracking pixel | Update to `https://www.ink1000.com/...` or confirm vendor supports HTTPS |
| **P2** | 4 images missing `alt` text | Add `alt=""` for decorative images; add descriptive alt for content images (`49468f73`, `00100b23`, `fc08601a`) |
| **P2** | SPF/DKIM unconfirmed | Verify `emails.skechers.com` DNS records; pull authentication headers from a non-relayed test send |
| **P3** | Plaintext subscriber ID in Krxd impression pixel (`partner_uid=102541952`) | Confirm with DMP vendor whether this should be hashed or replaced with the SHA-256 UID used in the user-match pixel |
| **P3** | 26 click links unverified | Validate all destination URLs and UTM payloads in ESP link checker before send |
## Recent history

- [[2026-04-01-just-restocked-real-madrid-bring-back-jerseys-0102019d49964fe3-7b88df2]] — 5/10 (2026-04-01)
- [[2026-04-01-try-the-comfort-everyone-s-talking-about]] — 5/10 (2026-04-01)
- [[2026-04-01-did-you-forget-something]] — 5/10 (2026-04-01)

