---
slug: 2026-04-15-test-mkg-us-na-u-multi-full-en-04162026loved-reviewed-and-ready-for-your-closet
type: email
date: 2026-04-15
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_MULTI_FULL_EN_04162026Loved, Reviewed, and Ready for Your Closet"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_U_MULTI_FULL_EN_04162026Loved, Reviewed, and Ready for Your Closet
**Score:** 5/10 · **Type:** Email audit · **2026-04-15**
## Executive summary

- A clean, product-forward social proof email anchored by three featured styles with customer star ratings and quotes. The concept is solid — letting reviews do the selling is a legitimate and effective email strategy. Execution is mostly competent but the email is let down hard by two critical pre-send failures: a raw internal campaign ID left in the subject line, and JSON-LD structured data leaking into the preview text. Neither issue is visible in the body render, but both are visible at inbox-open — exactly where first impressions are made. The email should not have deployed in this state.
- Strong body concept, but the subject/preview fiasco likely tanks open rates and signals internal process failure.

## What's working

- **"Most Talked About" framing** is confident and differentiated. It invites the reader to follow social proof rather than a hard sell.
- **Three-product structure** (Cozy Fit#, Arch Fit#, Glide-Step) is clean and appropriately paced — one product per section with a review quote, star rating, and dedicated CTA.
- **Star ratings + verbatim quotes** are the most persuasive elements in the email. Short, specific testimonials ("Relief right out of the box.") work well.
- **BOGO 50% OFF banner** at the top is prominent and clearly legible — good placement for a discount-driven audience.
- **Footer utility** is well-organized: app download, curbside pickup, Afterpay/Klarna, find-a-store, and SMS opt-in are all present and spaced cleanly.

## What's weak

- **Subject line is broken** — see section 7. Internal campaign ID was not stripped before send. This is a critical defect.
- **Preview text is raw JSON-LD schema markup** — `[{ "@context": "http://schema.org/"...` — visible at the inbox list view. This is a significant pre-send quality failure.
- **Review star ratings are all 4 stars** — every product shown has the same 4-star score. Whether accurate or not, it reads as templated and slightly artificial. Mixing in a 4.5 or 4.8 would feel more credible.
- **CTAs are repetitive** — "SHOP COZY FIT#", "SHOP ARCH FIT#", "SHOP GLIDE-STEP" are fine, but the `#` character appearing after product names looks like an unresolved token or formatting artifact.
- **"SHOP ADDITIONAL STYLES"** section (Women / Men / Kids / Clothing / New Arrivals / Sale) is a navigation dump that dilutes focus. At this point in the scroll the user should be converting, not browsing categories.
- **Testimonial copy is generic** — "Very light comfortable and so easy to just slip your feet on" is run-on and informal in a way that undercuts credibility.
- **No pricing visible** — the BOGO offer at the top is the only financial hook. Given there's a discount on the table, showing a price crossed out on at least one product would reinforce urgency.

## Recommendations

- 1. **Fix the pre-send checklist immediately** — subject line ID stripping and preview text QA need to be gated checks before any campaign deploys.
- 2. **Vary star ratings** — use the actual rating values per product. Uniform 4-star rows look like a template default.
- 3. **Remove or append the `#` from product names** in CTAs unless "Arch Fit#" is a registered trademark display — if it is, make that visually clear.
- 4. **Cut the category nav block** ("SHOP ADDITIONAL STYLES") or move it to the very bottom below the footer. It interrupts the conversion path mid-scroll.
- 5. **Add price anchoring** — one product with a strikethrough MSRP and the BOGO-applied price would make the discount feel tangible.
- 6. **Tighten the third testimonial** — edit for grammar and punch ("Featherlight and easy to slip on" is cleaner and more convincing).
- | Priority | Issue | Action |
- |---|---|---|
- | **Blocker** | `[Test]:` subject prefix present | Remove before production send |
- | **Blocker** | Campaign ID concatenated into subject | Fix template variable — add space/delimiter or remove from subject field |
- | **Blocker** | SPF/DKIM authentication unconfirmed | Verify `Authentication-Results` via a seed send through production relay |
- | **High** | 11 images served over HTTP | Change all `image.emails.skechers.com` and `ink1000.com` src URLs to `https://` |
- | **High** | Return Path pixel — missing protocol | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif?r=...` |
- | **High** | `mi_u` and Krux `partner_uid` appear hardcoded | Replace with per-recipient merge tokens if these are subscriber-level IDs |
- | **Medium** | Missing `alt` on `49468f73-...png` | Add descriptive `alt` text |
- | **Medium** | UTM params on click links unverified | Spot-check 3–5 primary CTA links for `utm_campaign`, `utm_medium`, `utm_source` |
- | **Medium** | CAN-SPAM footer unverifiable from truncated source | Confirm physical address and working unsubscribe link in full HTML |
- | **Low** | `* { -webkit-text-size-adjust: none }` | Scope to specific elements rather than `*`; prevents accessible zoom |

## Full review
### 1. Executive Summary

A clean, product-forward social proof email anchored by three featured styles with customer star ratings and quotes. The concept is solid — letting reviews do the selling is a legitimate and effective email strategy. Execution is mostly competent but the email is let down hard by two critical pre-send failures: a raw internal campaign ID left in the subject line, and JSON-LD structured data leaking into the preview text. Neither issue is visible in the body render, but both are visible at inbox-open — exactly where first impressions are made. The email should not have deployed in this state.

---

### 2. Business Impact Score: **5 / 10**

Strong body concept, but the subject/preview fiasco likely tanks open rates and signals internal process failure.

---

### 3. What's Working

- **"Most Talked About" framing** is confident and differentiated. It invites the reader to follow social proof rather than a hard sell.
- **Three-product structure** (Cozy Fit#, Arch Fit#, Glide-Step) is clean and appropriately paced — one product per section with a review quote, star rating, and dedicated CTA.
- **Star ratings + verbatim quotes** are the most persuasive elements in the email. Short, specific testimonials ("Relief right out of the box.") work well.
- **BOGO 50% OFF banner** at the top is prominent and clearly legible — good placement for a discount-driven audience.
- **Footer utility** is well-organized: app download, curbside pickup, Afterpay/Klarna, find-a-store, and SMS opt-in are all present and spaced cleanly.

---

### 4. What's Weak

- **Subject line is broken** — see section 7. Internal campaign ID was not stripped before send. This is a critical defect.
- **Preview text is raw JSON-LD schema markup** — `[{ "@context": "http://schema.org/"...` — visible at the inbox list view. This is a significant pre-send quality failure.
- **Review star ratings are all 4 stars** — every product shown has the same 4-star score. Whether accurate or not, it reads as templated and slightly artificial. Mixing in a 4.5 or 4.8 would feel more credible.
- **CTAs are repetitive** — "SHOP COZY FIT#", "SHOP ARCH FIT#", "SHOP GLIDE-STEP" are fine, but the `#` character appearing after product names looks like an unresolved token or formatting artifact.
- **"SHOP ADDITIONAL STYLES"** section (Women / Men / Kids / Clothing / New Arrivals / Sale) is a navigation dump that dilutes focus. At this point in the scroll the user should be converting, not browsing categories.
- **Testimonial copy is generic** — "Very light comfortable and so easy to just slip your feet on" is run-on and informal in a way that undercuts credibility.
- **No pricing visible** — the BOGO offer at the top is the only financial hook. Given there's a discount on the table, showing a price crossed out on at least one product would reinforce urgency.

---

### 5. Recommendations

1. **Fix the pre-send checklist immediately** — subject line ID stripping and preview text QA need to be gated checks before any campaign deploys.
2. **Vary star ratings** — use the actual rating values per product. Uniform 4-star rows look like a template default.
3. **Remove or append the `#` from product names** in CTAs unless "Arch Fit#" is a registered trademark display — if it is, make that visually clear.
4. **Cut the category nav block** ("SHOP ADDITIONAL STYLES") or move it to the very bottom below the footer. It interrupts the conversion path mid-scroll.
5. **Add price anchoring** — one product with a strikethrough MSRP and the BOGO-applied price would make the discount feel tangible.
6. **Tighten the third testimonial** — edit for grammar and punch ("Featherlight and easy to slip on" is cleaner and more convincing).

---

### 6. Bottom Line

The bones of this email are good. Social proof as the organizing principle, clean modular layout, and a live discount offer is a workable formula. But it shipped with a broken subject line and corrupted preview text — two defects that are visible before a single pixel of the email body renders. Fix the QA process first, then tune the body.

---

### 7. Subject Line Analysis

- **Subject:** `[Test]: MKG_US_NA_U_MULTI_FULL_EN_04162026Loved, Reviewed, and Ready for Your Closet`
- **Length:** 80 characters (including the broken prefix)
- **Scores (1-10):** Clarity `2`, Curiosity `3`, Personalization `2`, Urgency `2`, Specificity `3`
- **Strengths:**
  - The intended line ("Loved, Reviewed, and Ready for Your Closet") has a decent rhythm and ties to the social proof theme
  - "Ready for Your Closet" creates mild ownership language
- **Weaknesses:**
  - Campaign ID (`MKG_US_NA_U_MULTI_FULL_EN_04162026`) was not stripped — this is a hard send failure
  - `[Test]:` prefix confirms this deployed in test mode or without final QA; this destroys consumer trust on sight
- **Alt A:** `The shoes your fellow shoppers can't stop raving about`
- **Alt B:** `Top-rated. Customer-approved. Shop the Most Talked-About styles.`

---

### 8. Evidence

- **Overall purpose:** Drive traffic to top-reviewed footwear styles, supported by a BOGO 50% off promotional offer
- **Hero / primary value prop:** "Most Talked About" — social proof positioning. Solid concept but undermined by subject line failure
- **Membership / benefits:** None visible — no loyalty program mention or member-exclusive offer
- **Product modules:** Three: Cozy Fit#, Arch Fit# (with AON badge), Glide-Step — each with hero image, star rating, customer quote, and product CTA. Clean and readable
- **Utility / secondary modules:** SMS sign-up ("Text SKECHERS to 33633"), App Store/Google Play download, curbside pickup badge, Afterpay + Klarna logos, Find a Store — all visible in footer
- **Bugs / friction:**
  - `#` character appears after "Cozy Fit" and "Arch Fit" in CTA buttons — looks like an unresolved formatting token
  - Preview text in inbox contains raw JSON-LD schema markup — visible at inbox list view before open (not visible in body render but captured via the preview field)
  - Subject line contains unstripped internal campaign ID

---

## Technical Audit

## Technical Audit — SKECHERS MKG_US_NA_U_MULTI_FULL_EN_04162026

---

### 1. Technical Summary

The email has a systemic HTTP/mixed-content problem across its image CDN and a missing protocol on the Return Path pixel that will cause it to silently fail. The `[Test]:` subject prefix and a campaign-ID-to-subject concatenation defect confirm this has not been cleared for production send.

---

### 2. Link & Tracking Issues

**Return Path pixel — missing protocol (broken)**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1...">
```
No `https://` prefix. Browsers and email clients interpret this as a relative path; the pixel will never fire. Inbox monitoring data for this send will be missing.

**ink1000 tracking pixel — hardcoded subscriber ID**
```
http://www.ink1000.com/...o.gif?mi_u=8004129222&mi_ecmp=MKG_US_NA_U_MULTI_FULL_EN_04162026
```
`mi_u=8004129222` appears to be a static value rather than a per-recipient merge token. If this is a subscriber-level ID it should be dynamic; a hardcoded value produces meaningless engagement data.

**Krux/Salesforce DMP beacons — hardcoded `partner_uid`**
```
partner_uid=32884357   (subid beacon)
partner_uid=e5a36492...  (SHA256 beacon)
```
The `subid` value is static. The SHA256 value should be a hashed recipient email — if it is also static, identity matching will be attributed to one subscriber for the entire send.

**26 click-redirect links — unverified**
All destination URLs route through `click.emails.skechers.com` and were not probed. UTM parameter completeness and link health are unconfirmed (see §6).

---

### 3. Rendering & Accessibility

**Mixed-content / HTTP image sources — 11 affected images**

All `image.emails.skechers.com` assets and the ink1000 pixel use `http://`. Gmail, Outlook.com, and iOS Mail proxy or block non-HTTPS images. Affected assets include the Skechers logo, app store badges (App Store, Google Play), service icons (Curbside Pickup, AfterPay, Find A Store), and all social icons (Instagram, Facebook, YouTube):

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png   (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png   (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png   (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/00100b23-...png   (Curbside)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png   (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/fc08601a-...png   (Find A Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png   (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...png   (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-...png   (YouTube)
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif                                 (tracker)
```

**Missing `alt` text — 2 images**
- `o.gif` (ink1000 pixel) — `alt=""` is acceptable for a tracking pixel, but QA flagged it
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no `alt` attribute; screen readers and image-blocked renders will show nothing

**`-webkit-text-size-adjust: none`** applied globally via `* {}` selector. This prevents user zoom on iOS, which is an accessibility regression and may conflict with WCAG 1.4.4.

---

### 4. Personalization & Merge Tokens

**Subject line concatenation defect**

The received subject is:
```
[Test]: MKG_US_NA_U_MULTI_FULL_EN_04162026Loved, Reviewed, and Ready for Your Closet
```

The campaign ID `MKG_US_NA_U_MULTI_FULL_EN_04162026` is run directly into the subject copy with no separator. This indicates a template variable (likely `%%campaignname%%` or similar) was concatenated without a trailing space or delimiter in the subject line field. Production send will expose this to subscribers if not corrected.

**`[Test]:` prefix** confirms this is a seed/test send. Must be removed before deployment.

**`mi_u` and Krux `partner_uid`** flagged in §2 — if these are not dynamic merge tokens they represent personalization failures.

No unresolved `%%` or `{{}}` merge tokens visible in the truncated HTML.

---

### 5. Compliance

**SPF/DKIM — unconfirmed**
QA could not locate `Authentication-Results` headers via the AgentMail relay. SPF/DKIM pass status is unknown for this send. Delivery to major ISPs (Gmail, Yahoo) requires DMARC alignment; this must be verified before production.

**CAN-SPAM / unsubscribe** — HTML was truncated; footer content confirming a physical mailing address and functional unsubscribe link could not be verified from the provided source. These must be confirmed in the full render.

**Third-party pixel disclosure** — `beacon.krxd.net` fires user-match pixels against a DMP. If Skechers's privacy policy does not disclose third-party identity resolution via email engagement pixels, this may conflict with CCPA/applicable state privacy laws.

---

### 6. Email-to-Site Continuity

Campaign ID `MKG_US_NA_U_MULTI_FULL_EN_04162026` is consistently present in both the Krux impression beacon and the ink1000 pixel — internal tracking is internally consistent.

All 26 click links use the `click.emails.skechers.com` redirect domain. Because these were not probed, it is unknown whether:
- UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) are appended to final destination URLs
- Landing pages match the offer promoted in the email (BOGO 50% off per preheader)

UTM coverage and landing-page alignment must be manually spot-checked against at least the primary CTA links before send.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Blocker** | `[Test]:` subject prefix present | Remove before production send |
| **Blocker** | Campaign ID concatenated into subject | Fix template variable — add space/delimiter or remove from subject field |
| **Blocker** | SPF/DKIM authentication unconfirmed | Verify `Authentication-Results` via a seed send through production relay |
| **High** | 11 images served over HTTP | Change all `image.emails.skechers.com` and `ink1000.com` src URLs to `https://` |
| **High** | Return Path pixel — missing protocol | Prepend `https://` to `pixel.app.returnpath.net/pixel.gif?r=...` |
| **High** | `mi_u` and Krux `partner_uid` appear hardcoded | Replace with per-recipient merge tokens if these are subscriber-level IDs |
| **Medium** | Missing `alt` on `49468f73-...png` | Add descriptive `alt` text |
| **Medium** | UTM params on click links unverified | Spot-check 3–5 primary CTA links for `utm_campaign`, `utm_medium`, `utm_source` |
| **Medium** | CAN-SPAM footer unverifiable from truncated source | Confirm physical address and working unsubscribe link in full HTML |
| **Low** | `* { -webkit-text-size-adjust: none }` | Scope to specific elements rather than `*`; prevents accessible zoom |
## Recent history

- [[2026-04-15-test-mkg-us-na-u-multi-gender-en-04162026loved-reviewed-and-ready-for-your-close]] — 5/10 (2026-04-15)
- [[2026-04-15-spring-styles-20-off-the-perfect-pair]] — 5/10 (2026-04-15)
- [[2026-04-15-membership-has-its-perks]] — 6/10 (2026-04-15)

