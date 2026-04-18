---
slug: 2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026-v2feel-good-styles-for-you-them
type: email
date: 2026-04-10
persona: walker
score: "6.5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026_V2Feel-Good Styles for You & Them 🐾"
tags: [email, score-7, sender/skechers]
---
# [Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026_V2Feel-Good Styles for You & Them 🐾
**Score:** 6.5/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A National Pet Day-themed BOGO 50% OFF email targeting a broad audience with a pet-friendly lifestyle hook. The promotion is clear and the email has solid structural bones — hero offer, gender-split shop modules, and new arrivals. But the pet theme is skin-deep (a single lifestyle image), the offer callout is visually thin, and the lower half of the email collapses into a dense, low-readability grid that dilutes focus before conversion.

## What's working

- **BOGO 50% OFF** is prominently positioned at the top and immediately legible — the offer clarity is the email's strongest asset
- **National Pet Day tie-in** in the hero adds seasonal relevance and a warm lifestyle shot that differentiates from a standard promo blast
- **Women / Men split** with dedicated shop modules is practical and reduces decision friction
- **New Arrivals section** with visual product tiles provides discoverability beyond the promo
- Clean, consistent brand header and navigation

## What's weak

- **Pet theme is almost entirely dropped** after the hero — the "Feel-Good Styles for You & Them" concept promises a human + pet narrative but the email delivers a generic shoe promo from the second section onward
- **Hero image is small and cramped** — the lifestyle photo doesn't breathe; the BOGO banner, image, and CTA are all compressed into a narrow band
- **Shop Now CTAs are repetitive and undifferentiated** — used three times (hero, Women, Men) with no variation in copy to guide intent
- **New Arrivals grid is visually cluttered** — small product tiles, minimal whitespace, and no supporting copy make it scan like a catalog appendix rather than a curated feature
- **Footer category navigation** is extremely dense — long lists of text links in a small font reduce the email to fine print territory at the bottom
- **Preview text is broken** — rendering raw JSON schema markup instead of a teaser line is a visible failure that hurts open rates and brand perception before the email is even opened

## Recommendations

- 1. **Fix the preview text immediately** — the JSON bleed is a production defect visible to every recipient at the inbox level; this needs a hotfix before any volume send
- 2. **Extend the pet theme** — add a "For Your Pup" or pet-accessory crosslink, or at minimum use pet-referencing copy in the Women/Men section headers to maintain the theme's promise
- 3. **Expand the hero zone** — give the lifestyle image more vertical real estate; the BOGO offer deserves a hero moment, not a banner squeezed above a small photo
- 4. **Differentiate the CTAs** — replace generic "Shop Now" with intent-specific copy: "Shop Women's," "Shop Men's," "See New Arrivals"
- 5. **Curate New Arrivals** — reduce to 3–4 hero products with names and brief callouts rather than a dense tile grid
- 6. **Trim the footer nav** — consolidate category links or move them to a collapsed accordion; the current density undermines the clean top-half layout
- | Priority | Issue | Action |
- |---|---|---|
- | **BLOCKER** | Empty first-name merge token | Set a valid default fallback (e.g., `"there"`) on the first-name personalization field before any send |
- | **BLOCKER** | `[Test]:` subject prefix | Remove from production template; confirm subject copy spacing (`V2Feel-Good` → `V2 Feel-Good` or remove version tag from subject) |
- | **HIGH** | All images served over HTTP | Migrate `image.emails.skechers.com` CDN to HTTPS; update `http://www.ink1000.com/...` pixel to HTTPS endpoint |
- | **HIGH** | Authentication-Results missing | Verify SPF/DKIM alignment on `emails.skechers.com` sending domain; confirm DMARC policy is not in `p=reject` without alignment |
- | **MEDIUM** | 30 click links unprobed | Manually verify at least primary CTAs resolve correctly and carry expected UTM params |
- | **MEDIUM** | Missing alt text (5 images) | Add descriptive `alt` attributes to all content images; `alt=""` is acceptable only for purely decorative images |
- | **MEDIUM** | `maximum-scale=1` + `text-size-adjust: none` | Change to `maximum-scale=5` (or remove constraint); change `text-size-adjust` to `100%` |
- | **LOW** | Duplicate media query blocks | Consolidate into a single `<style>` block to reduce payload and eliminate specificity ambiguity |
- | **LOW** | Return Path pixel protocol | Specify `https://` explicitly on the Return Path pixel src |

## Full review
## 1. Executive Summary

A National Pet Day-themed BOGO 50% OFF email targeting a broad audience with a pet-friendly lifestyle hook. The promotion is clear and the email has solid structural bones — hero offer, gender-split shop modules, and new arrivals. But the pet theme is skin-deep (a single lifestyle image), the offer callout is visually thin, and the lower half of the email collapses into a dense, low-readability grid that dilutes focus before conversion.

---

## 2. Business Impact Score

**6.5 / 10**

The BOGO deal is compelling and the layout is functional, but the email underperforms on emotional resonance for its stated theme and loses momentum fast below the fold.

---

## 3. What's Working

- **BOGO 50% OFF** is prominently positioned at the top and immediately legible — the offer clarity is the email's strongest asset
- **National Pet Day tie-in** in the hero adds seasonal relevance and a warm lifestyle shot that differentiates from a standard promo blast
- **Women / Men split** with dedicated shop modules is practical and reduces decision friction
- **New Arrivals section** with visual product tiles provides discoverability beyond the promo
- Clean, consistent brand header and navigation

---

## 4. What's Weak

- **Pet theme is almost entirely dropped** after the hero — the "Feel-Good Styles for You & Them" concept promises a human + pet narrative but the email delivers a generic shoe promo from the second section onward
- **Hero image is small and cramped** — the lifestyle photo doesn't breathe; the BOGO banner, image, and CTA are all compressed into a narrow band
- **Shop Now CTAs are repetitive and undifferentiated** — used three times (hero, Women, Men) with no variation in copy to guide intent
- **New Arrivals grid is visually cluttered** — small product tiles, minimal whitespace, and no supporting copy make it scan like a catalog appendix rather than a curated feature
- **Footer category navigation** is extremely dense — long lists of text links in a small font reduce the email to fine print territory at the bottom
- **Preview text is broken** — rendering raw JSON schema markup instead of a teaser line is a visible failure that hurts open rates and brand perception before the email is even opened

---

## 5. Recommendations

1. **Fix the preview text immediately** — the JSON bleed is a production defect visible to every recipient at the inbox level; this needs a hotfix before any volume send
2. **Extend the pet theme** — add a "For Your Pup" or pet-accessory crosslink, or at minimum use pet-referencing copy in the Women/Men section headers to maintain the theme's promise
3. **Expand the hero zone** — give the lifestyle image more vertical real estate; the BOGO offer deserves a hero moment, not a banner squeezed above a small photo
4. **Differentiate the CTAs** — replace generic "Shop Now" with intent-specific copy: "Shop Women's," "Shop Men's," "See New Arrivals"
5. **Curate New Arrivals** — reduce to 3–4 hero products with names and brief callouts rather than a dense tile grid
6. **Trim the footer nav** — consolidate category links or move them to a collapsed accordion; the current density undermines the clean top-half layout

---

## 6. Bottom Line

The email will convert on the BOGO offer alone — that's doing the heavy lifting. But it misses the opportunity the National Pet Day concept sets up, and the preview text defect is an unacceptable production error for a branded send. Structurally sound, thematically half-finished, with one critical bug to fix before deployment.

---

## 7. Evidence

**Overall purpose:** Drive BOGO 50% OFF purchases across Skechers BOBS line using National Pet Day as a seasonal hook, with secondary discoverability via New Arrivals.

**Hero / primary value proposition:** "BUY ONE, GET ONE 50% OFF" banner above a lifestyle image of a woman in casual shoes with a dog. Offer is clear; visual execution is compact. Single "SHOP NOW" CTA.

**Membership / benefits section:** Not present in this email.

**Product discoverability / recommendation modules:** Women's and Men's shop modules each show 3 product tiles with a "SHOP NOW" CTA. New Arrivals section follows with a denser product grid — at least 6+ tiles visible, small scale, no product names legible at thumbnail size.

**Utility / secondary modules:** Footer contains dense category-level navigation links (Women, Men, Girls, Boys, New Arrivals, etc.) and what appears to be social icons and unsubscribe/legal copy.

**Bugs / friction / clarity issues:** The preview text visibly renders raw JSON-LD schema markup (`[{ "@context": "http://schema.org/"...`) — this is the most critical visible defect. No broken images or overlapping text detected in the render itself.

---

## Technical Audit

## Technical Audit — Skechers BOBS Email
**Campaign:** `MKG_US_NA_U_BOBS_PROD_EN_04112026_V2`
**From:** `no-reply@emails.skechers.com`

---

### 1. Technical Summary

This email has two critical pre-send blockers: a broken first-name merge token producing an empty greeting, and a `[Test]:` subject prefix indicating a test configuration was sent (or is queued) to live subscribers. A systemic HTTP image hosting problem affects 20+ assets and will trigger mixed-content warnings or broken images in security-conscious clients.

---

### 2. Link & Tracking Issues

**Tracking pixel over HTTP (critical)**
The ink1000 third-party open/engagement pixel loads over plain HTTP:
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8021648903&mi_ecmp=MKG_US_NA_U_BOBS_PROD_EN_04112026"
```
Modern clients (Gmail, Outlook.com, Apple Mail with MPP) will block or proxy this. Open-rate attribution via this pixel is unreliable.

**Return Path pixel — protocol-relative or HTTP**
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf..."
```
No scheme specified. Depending on client rendering, this may resolve as HTTP and be blocked.

**30 click-tracking links not probed**
All clicks route through `click.emails.skechers.com`. The QA runner skipped HTTP probing on all 30, so broken redirect destinations cannot be confirmed or ruled out. Manual spot-check required before send.

**Third-party DMP user-match beacons present**
Three `beacon.krxd.net` pixels fire in the hidden preheader table — including a SHA-256 hashed subscriber ID and a campaign impression beacon. This is expected for SFMC-integrated sends but should be confirmed against current privacy disclosures.

---

### 3. Rendering & Accessibility

**Systemic HTTP image hosting — 20+ assets affected**
All images served from `http://image.emails.skechers.com/lib/fe3115707564047a731c78/...` are HTTP-only. This includes the Skechers logo, app store badges, social icons, AfterPay badge, Curbside Pickup icon, and Find a Store icon. Gmail, Outlook 365, and Apple Mail with image blocking will show broken images or proxy warnings. Representative examples:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png
```

**Missing alt text on 5 images**
`o.gif` (ink1000), `49468f73-...` (×2), `00100b23-...`, `fc08601a-...` have no `alt` attribute. With images disabled, these content areas render as empty space with no fallback label.

**`maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Prevents pinch-to-zoom on mobile — WCAG 1.4.4 violation (Resize Text, Level AA).

**`-webkit-text-size-adjust: none`**
Applied globally via `* { -webkit-text-size-adjust: none; }`. Prevents iOS from reflowing text at user-requested sizes. Should be `100%` not `none`.

**Malformed `<meta>` tag for IE compatibility**
```html
<meta content="IE=Edge" />
```
Missing required `http-equiv` attribute. Correct form: `<meta http-equiv="X-UA-Compatible" content="IE=Edge" />`. Has no functional impact on modern clients but is invalid markup.

**Duplicate media query blocks**
`@media only screen and (max-width: 640px)` rules are fully duplicated across two `<style>` blocks. A third block repeats `.show` and `.mobile-hidden` rules at `max-width: 480px`. Redundant CSS adds weight and risks specificity conflicts.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty first-name greeting slot**
QA confirmed the greeting token resolved to an empty string, producing output such as `"Hi ,"`. This is a send-blocking defect. The fallback value for the first-name field is either unset or evaluating to null. The merge tag and its default fallback must be corrected before any live send.

**Subject line — campaign ID concatenated into copy**
```
[Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026_V2Feel-Good Styles for You & Them 🐾
```
`V2` is directly concatenated with `Feel-Good` — no space. This appears to be a template assembly error where the version suffix was not separated from the subject copy string. Visible to any recipient if `[Test]:` prefix is removed and live send proceeds.

**`[Test]:` subject prefix present**
The subject line still carries the test prefix. If this is the production template, the prefix must be removed. If this genuinely is a test send, it should not be evaluated for live deployment until the prefix is cleared.

---

### 5. Compliance

**[WARN] Authentication-Results header absent**
SPF and DKIM pass/fail status could not be determined — the `Authentication-Results` header was not present via the AgentMail relay. Deliverability impact is unknown but should be verified against Skechers' DMARC policy (`_dmarc.skechers.com`) before send.

**CAN-SPAM physical address**
Cannot confirm from truncated HTML. Presence of a physical mailing address in the footer must be verified in the full source.

**Unsubscribe mechanism**
Cannot confirm from truncated HTML. Presence and functionality of the unsubscribe link must be verified; 30 tracked links were not probed.

---

### 6. Email-to-Site Continuity

**Campaign ID present in third-party pixel but UTM params on CTA links unverified**
The ink1000 pixel carries `mi_ecmp=MKG_US_NA_U_BOBS_PROD_EN_04112026`, confirming campaign tagging exists. However, UTM parameter presence and accuracy on the 30 `click.emails.skechers.com` redirects was not verified (links skipped by QA runner). Spot-check required to confirm `utm_campaign`, `utm_source`, and `utm_medium` are set and consistent with the campaign ID.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **BLOCKER** | Empty first-name merge token | Set a valid default fallback (e.g., `"there"`) on the first-name personalization field before any send |
| **BLOCKER** | `[Test]:` subject prefix | Remove from production template; confirm subject copy spacing (`V2Feel-Good` → `V2 Feel-Good` or remove version tag from subject) |
| **HIGH** | All images served over HTTP | Migrate `image.emails.skechers.com` CDN to HTTPS; update `http://www.ink1000.com/...` pixel to HTTPS endpoint |
| **HIGH** | Authentication-Results missing | Verify SPF/DKIM alignment on `emails.skechers.com` sending domain; confirm DMARC policy is not in `p=reject` without alignment |
| **MEDIUM** | 30 click links unprobed | Manually verify at least primary CTAs resolve correctly and carry expected UTM params |
| **MEDIUM** | Missing alt text (5 images) | Add descriptive `alt` attributes to all content images; `alt=""` is acceptable only for purely decorative images |
| **MEDIUM** | `maximum-scale=1` + `text-size-adjust: none` | Change to `maximum-scale=5` (or remove constraint); change `text-size-adjust` to `100%` |
| **LOW** | Duplicate media query blocks | Consolidate into a single `<style>` block to reduce payload and eliminate specificity ambiguity |
| **LOW** | Return Path pixel protocol | Specify `https://` explicitly on the Return Path pixel src |
## Recent history

- [[2026-04-10-test-pro-us-na-u-sitebundle-full-en-04122026-v2styles-made-for-spring-weekends]] — 4/10 (2026-04-10)
- [[2026-04-10-test-pro-us-na-u-sitebundle-full-en-04122026styles-made-for-spring-weekends]] — 5/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-na-w-seasonal-gender-en-04112026-v3the-perfect-pair-or-2-for-her]] — 6/10 (2026-04-10)

