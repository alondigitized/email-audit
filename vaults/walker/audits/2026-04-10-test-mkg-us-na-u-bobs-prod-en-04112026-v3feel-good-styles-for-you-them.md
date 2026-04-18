---
slug: 2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026-v3feel-good-styles-for-you-them
type: email
date: 2026-04-10
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026_V3Feel-Good Styles for You & Them 🐾"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026_V3Feel-Good Styles for You & Them 🐾
**Score:** 5/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- This is a National Pet Day promotional email for Skechers' BOBS sub-brand, anchored by a BOGO 50% Off offer. The charitable mission angle (BOBS' animal shelter donations) is a natural fit for National Pet Day and gives the email genuine emotional texture. However, two hard failures undercut the execution before a recipient even opens it: the subject line carries a live `[Test]:` prefix, and the preview text renders raw JSON-LD schema markup instead of copy. Inside the email, the structure is serviceable but the women's and men's product modules feel generic — the animal welfare hook that makes BOBS distinctive gets one brief text block buried mid-scroll.
- The offer is strong and the occasion is relevant, but the pre-open failures are disqualifying for any live deployment. Assuming this is caught in QA (as it should be), the underlying email scores a 6 — held back by a diluted brand narrative and weak product-to-mission connection.

## What's working

- **BOGO 50% Off is clear and prominent.** The hero communicates the offer instantly — no ambiguity about the deal.
- **National Pet Day hook is timely and brand-coherent.** BOBS' animal welfare mission makes this occasion ownable in a way competitors can't match. The lifestyle image with the dog reinforces the emotional angle.
- **Logical top-down flow.** Offer → Women → Men → New Arrivals → Category nav follows a predictable, low-friction scroll.
- **Category utility strip works.** The text-link grid (Women, Men, Kids, Clothing, New Arrivals, Sale) gives fast-tap access to the full catalog without cluttering the main body.

## What's weak

- **`[Test]:` in the subject line is a production defect.** If this deployed live, it's an immediate credibility hit. Needs to be caught before send.
- **Preview text is broken — raw JSON-LD is exposed.** The recipient sees schema.org markup instead of a human-readable teaser. This destroys the pre-open experience and can suppress open rates.
- **BOBS mission copy is buried and thin.** One small text block between the Men module and New Arrivals is the only mention of why BOBS is distinctive (charitable giving per pair). It reads like an afterthought, not a brand pillar.
- **Women's and Men's product modules are generic.** The product tiles don't call out BOBS-specific styles — they look like any Skechers grid. The pet-day theme disappears the moment you're past the hero.
- **No social proof or urgency signal.** National Pet Day is April 11 — there's no visible deadline reinforcement below the hero to sustain conversion pressure through the scroll.

## Recommendations

- 1. **Remove `[Test]:` from the subject before any live send.** This is table stakes QA.
- 2. **Fix the preview text.** Replace the schema markup with a short copy line — something like "Celebrate National Pet Day: BOGO 50% off + every BOBS pair helps shelter animals."
- 3. **Lead the Women's and Men's modules with BOBS-specific products.** Curate to styles where the mission label is visible. If product tiles can carry a "BOBS" label or badge, use it.
- 4. **Promote the mission block to a dedicated hero-adjacent module.** Move the charitable-giving message directly below the hero — make it a visual break with iconography (paw print, shelter imagery), not a paragraph of text in the middle of a scroll.
- 5. **Add a countdown or "Today Only" signal** tied to National Pet Day. Even a single line in the hero CTA area creates urgency that the current layout lacks.
- | Priority | Action |
- |---|---|
- | **P0** | Fix empty name merge token — add a fallback default value to prevent "Hi ," rendering |
- | **P0** | Remove `[Test]:` subject line prefix before production send |
- | **P1** | Migrate all `image.emails.skechers.com` assets to HTTPS to prevent image blocking |
- | **P1** | Fix `ink1000.com` tracking pixel URL to HTTPS |
- | **P1** | Add `https://` protocol to the Return Path pixel `src` attribute |
- | **P2** | Add `alt=""` to all decorative tracking pixels; add descriptive alt text to content images missing it |
- | **P2** | Verify SPF/DKIM/DMARC alignment via full header trace on a production-equivalent send |
- | **P2** | Manually spot-check 3–5 CTA click-redirect URLs to confirm UTM parameters are intact and landing pages resolve correctly |
- | **P3** | Consider replacing `* { -webkit-text-size-adjust: none }` with `-webkit-text-size-adjust: 100%` to preserve system accessibility scaling |

## Full review
## Email Review: Skechers BOBS — Feel-Good Styles for You & Them

---

### 1. Executive Summary

This is a National Pet Day promotional email for Skechers' BOBS sub-brand, anchored by a BOGO 50% Off offer. The charitable mission angle (BOBS' animal shelter donations) is a natural fit for National Pet Day and gives the email genuine emotional texture. However, two hard failures undercut the execution before a recipient even opens it: the subject line carries a live `[Test]:` prefix, and the preview text renders raw JSON-LD schema markup instead of copy. Inside the email, the structure is serviceable but the women's and men's product modules feel generic — the animal welfare hook that makes BOBS distinctive gets one brief text block buried mid-scroll.

---

### 2. Business Impact Score: 5/10

The offer is strong and the occasion is relevant, but the pre-open failures are disqualifying for any live deployment. Assuming this is caught in QA (as it should be), the underlying email scores a 6 — held back by a diluted brand narrative and weak product-to-mission connection.

---

### 3. What's Working

- **BOGO 50% Off is clear and prominent.** The hero communicates the offer instantly — no ambiguity about the deal.
- **National Pet Day hook is timely and brand-coherent.** BOBS' animal welfare mission makes this occasion ownable in a way competitors can't match. The lifestyle image with the dog reinforces the emotional angle.
- **Logical top-down flow.** Offer → Women → Men → New Arrivals → Category nav follows a predictable, low-friction scroll.
- **Category utility strip works.** The text-link grid (Women, Men, Kids, Clothing, New Arrivals, Sale) gives fast-tap access to the full catalog without cluttering the main body.

---

### 4. What's Weak

- **`[Test]:` in the subject line is a production defect.** If this deployed live, it's an immediate credibility hit. Needs to be caught before send.
- **Preview text is broken — raw JSON-LD is exposed.** The recipient sees schema.org markup instead of a human-readable teaser. This destroys the pre-open experience and can suppress open rates.
- **BOBS mission copy is buried and thin.** One small text block between the Men module and New Arrivals is the only mention of why BOBS is distinctive (charitable giving per pair). It reads like an afterthought, not a brand pillar.
- **Women's and Men's product modules are generic.** The product tiles don't call out BOBS-specific styles — they look like any Skechers grid. The pet-day theme disappears the moment you're past the hero.
- **No social proof or urgency signal.** National Pet Day is April 11 — there's no visible deadline reinforcement below the hero to sustain conversion pressure through the scroll.

---

### 5. Recommendations

1. **Remove `[Test]:` from the subject before any live send.** This is table stakes QA.
2. **Fix the preview text.** Replace the schema markup with a short copy line — something like "Celebrate National Pet Day: BOGO 50% off + every BOBS pair helps shelter animals."
3. **Lead the Women's and Men's modules with BOBS-specific products.** Curate to styles where the mission label is visible. If product tiles can carry a "BOBS" label or badge, use it.
4. **Promote the mission block to a dedicated hero-adjacent module.** Move the charitable-giving message directly below the hero — make it a visual break with iconography (paw print, shelter imagery), not a paragraph of text in the middle of a scroll.
5. **Add a countdown or "Today Only" signal** tied to National Pet Day. Even a single line in the hero CTA area creates urgency that the current layout lacks.

---

### 6. Bottom Line

The strategic setup is strong — BOBS, National Pet Day, and BOGO 50% Off is a coherent value proposition. But the email fails on execution at the most critical touchpoints: the pre-open (broken preview text, test label) and the mid-funnel brand story (BOBS' mission is invisible in the product modules). Fix the defects, then invest in making the BOBS brand narrative visible throughout the scroll — that's what separates this from a generic Skechers sale email.

---

### 7. Evidence

**Overall purpose:** Drive BOGO 50% Off conversions on the occasion of National Pet Day, with the BOBS sub-brand's animal welfare mission as the emotional hook.

**Hero / primary value proposition:** Full-width banner — "BUY ONE, GET ONE 50% OFF on select in-stock styles" with a lifestyle image of a woman with a dog outdoors. "Celebrate National Pet Day with BOBS™" sub-header below. SHOP NOW CTA present. Clear and legible.

**Membership / benefits section:** Not visible — no loyalty program, rewards, or membership module in the render.

**Product discoverability / recommendation modules:** Two gender-segmented grids — Women (appears to be sandals and casual flats, ~4 tiles) and Men (athletic/training sneakers, ~4 tiles). A New Arrivals spotlight below with a single bold product image. None of the tiles surface BOBS-specific branding or the charitable angle.

**Utility / secondary modules:** Text-link category nav (Women, Men, Kids, Clothing, New Arrivals, Sale). App download prompt and social connect section in the footer. Appears to be a $15 Off print coupon or similar offer in the footer utility area.

**Bugs / friction / clarity issues (visible in render):**
- `[Test]:` prefix is live in the subject line — visible pre-open defect.
- Preview text renders raw JSON-LD schema markup (visible in email client preview) — critical pre-open failure.
- No other visible rendering defects: images load, text is legible, layout appears intact at this viewport.

---

## Technical Audit

## Technical Audit — SKECHERS BOBS Email
**Campaign:** `MKG_US_NA_U_BOBS_PROD_EN_04112026_V3`
**From:** `no-reply@emails.skechers.com`

---

### 1. Technical Summary
The email has a broken name personalization token producing a malformed greeting, and the entire image asset CDN (`image.emails.skechers.com`) serves over HTTP rather than HTTPS, risking image blocking in security-conscious clients. Automated QA scored 67% pass rate with one critical broken-experience failure.

---

### 2. Link & Tracking Issues

**[WARN] Return Path pixel missing protocol:**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `https://` prefix — this is a relative URL that will resolve against the document base or fail silently. Should be `https://pixel.app.returnpath.net/...`.

**[WARN] Third-party match pixel over HTTP:**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8021648903&mi_ecmp=MKG_US_NA_U_BOBS_PROD_EN_04112026
```
Non-HTTPS third-party tracking pixel. Will be blocked by Gmail's image proxy and any client enforcing mixed-content rules.

**[INFO] 27 click-redirect links not probed:**
All CTA links route through `click.emails.skechers.com`. Destination URLs and UTM parameter integrity could not be verified. Manual spot-check of final landing URLs is required before send.

---

### 3. Rendering & Accessibility

**[FAIL] 13+ images served over HTTP:**
All assets on `image.emails.skechers.com` use `http://` scheme:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png
... (and 10+ more)
```
Gmail, Yahoo, and Outlook proxies will block or replace these with broken image icons. CDN should serve over HTTPS.

**[WARN] 4 images missing `alt` text:**
| Asset | URL fragment |
|---|---|
| `o.gif` (ink1000 pixel) | `ink1000.com/...o.gif` |
| `49468f73-...png` | `m/11/49468f73-...` |
| `00100b23-...png` | `m/11/00100b23-...` |
| `fc08601a-...png` | `m/11/fc08601a-...` |

Decorative pixels should have `alt=""`. Content images need descriptive alt text for screen readers and image-off rendering.

**[INFO] `-webkit-text-size-adjust: none` applied globally:**
```css
* { -webkit-text-size-adjust: none; }
```
Disables iOS automatic text scaling. This can harm readability at small viewport sizes for users who rely on system font scaling.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty name field — broken greeting:**
QA detected an unresolved merge token producing output such as:
```
Hi ,
```
The subscriber first-name variable was not populated. This is the highest-severity issue in this send. Either the merge field name is mismatched against the data extension column, or the fallback/default value is absent. Fix: add a fallback, e.g. `%%=v(@firstName, "there")=%%` (AMPscript) or equivalent, so the worst case renders as "Hi there,".

**[INFO] Subject line retains `[Test]:` prefix:**
```
Subject: [Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026_V3Feel-Good Styles for You & Them 🐾
```
Test prefix must be stripped before production deployment. Also note: there is no space between the campaign ID token and the subject copy (`_V3Feel-Good`) — likely a template assembly bug.

---

### 5. Compliance

**[WARN] SPF/DKIM authentication status unverifiable:**
`Authentication-Results` header was not present in the captured headers via the AgentMail relay. Cannot confirm SPF pass, DKIM signature validity, or DMARC alignment for `emails.skechers.com`. Must be verified in a full received-header trace before production send.

**[INFO] CAN-SPAM/unsubscribe:** Physical mailing address and unsubscribe mechanism were not visible in the truncated HTML provided. These are required by CAN-SPAM §5(a)(5) and §5(a)(3). Confirm both are present in the full footer.

---

### 6. Email-to-Site Continuity

**[BLOCKED] UTM parameter verification not possible:**
All 27 CTAs route through `click.emails.skechers.com` redirect — final destination URLs and UTM parameter presence (`utm_source`, `utm_medium`, `utm_campaign`) could not be resolved. The campaign ID `MKG_US_NA_U_BOBS_PROD_EN_04112026` is present in pixel payloads, confirming the campaign tag exists at the tracking layer, but link-level UTM hygiene requires manual verification.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Fix empty name merge token — add a fallback default value to prevent "Hi ," rendering |
| **P0** | Remove `[Test]:` subject line prefix before production send |
| **P1** | Migrate all `image.emails.skechers.com` assets to HTTPS to prevent image blocking |
| **P1** | Fix `ink1000.com` tracking pixel URL to HTTPS |
| **P1** | Add `https://` protocol to the Return Path pixel `src` attribute |
| **P2** | Add `alt=""` to all decorative tracking pixels; add descriptive alt text to content images missing it |
| **P2** | Verify SPF/DKIM/DMARC alignment via full header trace on a production-equivalent send |
| **P2** | Manually spot-check 3–5 CTA click-redirect URLs to confirm UTM parameters are intact and landing pages resolve correctly |
| **P3** | Consider replacing `* { -webkit-text-size-adjust: none }` with `-webkit-text-size-adjust: 100%` to preserve system accessibility scaling |
## Recent history

- [[2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026-v2feel-good-styles-for-you-them]] — 6.5/10 (2026-04-10)
- [[2026-04-10-test-pro-us-na-u-sitebundle-full-en-04122026-v2styles-made-for-spring-weekends]] — 4/10 (2026-04-10)
- [[2026-04-10-test-pro-us-na-u-sitebundle-full-en-04122026styles-made-for-spring-weekends]] — 5/10 (2026-04-10)

