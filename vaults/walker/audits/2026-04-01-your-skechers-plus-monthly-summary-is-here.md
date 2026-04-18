---
slug: 2026-04-01-your-skechers-plus-monthly-summary-is-here
type: email
date: 2026-04-01
persona: walker
score: "5/10"
sender: SKECHERS PLUS
subject: Your Skechers Plus Monthly Summary is Here
tags: [email, score-5, sender/skechers-plus]
---
# Your Skechers Plus Monthly Summary is Here
**Score:** 5/10 · **Type:** Email audit · **2026-04-01**
## Executive summary

- A functional loyalty summary email that delivers the core message — 1,000 points balance and a $5 reward earned — but wastes the opportunity by burying the reward CTA, rendering the preview text as raw JSON schema, and leaning on a generic product grid that does nothing to personalize the experience. The email does what it needs to do, barely.

## What's working

- **Points balance is prominent.** The "1,000 Current Points Balance" hero stat is large, bold, and instantly readable — the primary job of a monthly summary.
- **$5 reward announcement** is clearly communicated mid-email with a distinct visual treatment.
- **Structural completeness.** The email covers all expected utility modules: app download, store pickup, afterpay/klarna, loyalty program info, and social links.
- **Product grid is visually clean.** "We picked these just for you" features lifestyle-appropriate footwear images in a tidy layout.

## What's weak

- **Preview text is broken JSON schema.** The inbox preview reads: `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — this is raw structured data exposed as visible preview copy. It's the first thing recipients see before opening and signals a broken, untrustworthy send.
- **The $5 reward has no standalone CTA.** There's a "VIEW MY ACCOUNT" button nearby, but it's undersized and doesn't call out the reward redemption directly. A $5 incentive should have its own action.
- **"Shop Deals" CTA is disconnected.** A blue banner with a "D" logo and "SHOP DEALS >" appears mid-email without adequate context — it reads as a broken module or orphaned banner.
- **Product recommendations are generic.** Five shoes, no personalization signals visible — no "based on your last purchase" or "your size" language. The headline "We picked these just for you" promises personalization that the content doesn't deliver.
- **"Shop Additional Styles" section is a text-only link list** (Women, Men, Kids, Clothing, New Arrivals, Sale) — essentially a nav bar in the middle of an email. This is utility padding, not merchandising.
- **Points earned detail ("Points Earned: 1000 / Points Spent: 0") is too small.** Secondary data is fine-print level when it should reinforce the engagement story.

## Recommendations

- 1. **Fix the preview text immediately.** The JSON schema should never be exposed as inbox preview copy — this is a deployment error that degrades open rates and sender trust.
- 2. **Add a dedicated "Redeem Your $5 Reward" CTA button.** Make it the primary action in the reward section; don't make users hunt for the redemption path.
- 3. **Remove or redesign the "Shop Deals" banner.** It looks like a broken asset. Either give it a real headline and product context, or cut it.
- 4. **Replace the text nav list with 2–3 curated category tiles.** Images convert; link lists do not.
- 5. **Add one personalization signal to the product grid** — even a line like "Based on styles you've browsed" would validate the "picked for you" headline and improve click-through.
- | Priority | Issue | Action |
- |---|---|---|
- | **High** | 14 HTTP image sources | Migrate all `image.emails.skechers.com` asset URLs to HTTPS |
- | **High** | Staging CDN domain in production | Replace `image.devemails.skechers.com` with production CDN domain before send |
- | **High** | ink1000.com pixel over HTTP | Update to HTTPS or confirm vendor supports it |
- | **Medium** | Return Path pixel missing protocol | Add `https://` prefix to `pixel.app.returnpath.net` src |
- | **Medium** | SPF/DKIM status unverified | Pull raw headers from a seed send and confirm both pass |
- | **Medium** | Missing alt text on tier graphic | Add descriptive alt (e.g., `alt="Blue tier member"`) to `summary-tier-blue-angle.png` |
- | **Medium** | `maximum-scale=1` in viewport | Remove or change to `maximum-scale=5` to restore user zoom |
- | **Low** | Campaign date stamp in pixel IDs | Confirm `02272026` in `campaignid` values is correct or update for current send |
- | **Low** | Missing alt on 3 additional images | Add empty `alt=""` on pure-decorative images; descriptive alt on content images |

## Full review
## 1. Executive Summary

A functional loyalty summary email that delivers the core message — 1,000 points balance and a $5 reward earned — but wastes the opportunity by burying the reward CTA, rendering the preview text as raw JSON schema, and leaning on a generic product grid that does nothing to personalize the experience. The email does what it needs to do, barely.

---

## 2. Business Impact Score: 5/10

---

## 3. What's Working

- **Points balance is prominent.** The "1,000 Current Points Balance" hero stat is large, bold, and instantly readable — the primary job of a monthly summary.
- **$5 reward announcement** is clearly communicated mid-email with a distinct visual treatment.
- **Structural completeness.** The email covers all expected utility modules: app download, store pickup, afterpay/klarna, loyalty program info, and social links.
- **Product grid is visually clean.** "We picked these just for you" features lifestyle-appropriate footwear images in a tidy layout.

---

## 4. What's Weak

- **Preview text is broken JSON schema.** The inbox preview reads: `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — this is raw structured data exposed as visible preview copy. It's the first thing recipients see before opening and signals a broken, untrustworthy send.
- **The $5 reward has no standalone CTA.** There's a "VIEW MY ACCOUNT" button nearby, but it's undersized and doesn't call out the reward redemption directly. A $5 incentive should have its own action.
- **"Shop Deals" CTA is disconnected.** A blue banner with a "D" logo and "SHOP DEALS >" appears mid-email without adequate context — it reads as a broken module or orphaned banner.
- **Product recommendations are generic.** Five shoes, no personalization signals visible — no "based on your last purchase" or "your size" language. The headline "We picked these just for you" promises personalization that the content doesn't deliver.
- **"Shop Additional Styles" section is a text-only link list** (Women, Men, Kids, Clothing, New Arrivals, Sale) — essentially a nav bar in the middle of an email. This is utility padding, not merchandising.
- **Points earned detail ("Points Earned: 1000 / Points Spent: 0") is too small.** Secondary data is fine-print level when it should reinforce the engagement story.

---

## 5. Recommendations

1. **Fix the preview text immediately.** The JSON schema should never be exposed as inbox preview copy — this is a deployment error that degrades open rates and sender trust.
2. **Add a dedicated "Redeem Your $5 Reward" CTA button.** Make it the primary action in the reward section; don't make users hunt for the redemption path.
3. **Remove or redesign the "Shop Deals" banner.** It looks like a broken asset. Either give it a real headline and product context, or cut it.
4. **Replace the text nav list with 2–3 curated category tiles.** Images convert; link lists do not.
5. **Add one personalization signal to the product grid** — even a line like "Based on styles you've browsed" would validate the "picked for you" headline and improve click-through.

---

## 6. Bottom Line

The broken preview text is the most damaging issue — it hurts open rates before anyone sees the email. Inside, the reward notification is underserved by its CTA, and the product module promises personalization it doesn't deliver. Fix the preview text and add a reward redemption button; this email's core value prop is solid but its execution leaves points on the table.

---

## 7. Evidence

- **Overall purpose:** Monthly loyalty summary — balance reporting + reward notification + product discovery
- **Hero / primary value prop:** 1,000-point balance display; $5 reward earned announcement
- **Membership / benefits section:** Points balance shown (Earned: 1000, Spent: 0); reward tier acknowledgment; Skechers Plus branding visible
- **Product discoverability / recommendation modules:** 5-product grid ("We picked these just for you"); additional styles text-nav (Women, Men, Kids, Clothing, New Arrivals, Sale)
- **Utility / secondary modules:** App download (Google Play / App Store), curbside pickup, Afterpay + Klarna financing, Find a Store, Discover Plus upgrade prompt, social follow icons (Facebook, Instagram, YouTube, TikTok)
- **Bugs / friction / clarity issues:**
  - Preview text renders raw JSON-LD schema — visible broken copy in inbox
  - "Shop Deals" blue banner appears as a partially-rendered or orphaned module with no supporting headline or product imagery
  - No dedicated reward redemption button despite $5 reward being announced

---

## Technical Audit

## Technical Audit — Skechers Plus Monthly Summary

**From:** SKECHERS PLUS `<no-reply@emails.skechers.com>`
**Campaign ID:** `TRG_US_EN_MONTHLYSUMMARY_1_02272026_B`

---

### 1. Technical Summary

The email has a significant mixed-content problem — 14 image assets are served over HTTP and will be blocked or trigger security warnings in most modern email clients. A staging subdomain asset (`image.devemails.skechers.com`) was also detected in the production send, indicating a pre-flight environment leak.

---

### 2. Link & Tracking Issues

**Tracking pixels (4 third-party beacons detected):**

| Vendor | Domain | Protocol |
|---|---|---|
| SFMC open pixel | `click.emails.skechers.com` | HTTPS |
| Krux/Salesforce DMP (2x) | `beacon.krxd.net` | HTTPS |
| Validity/Everest | `ink1000.com` | **HTTP** |
| Return Path/Validity | `pixel.app.returnpath.net` | **No protocol prefix** |

- `ink1000.com` pixel uses plain HTTP — will be blocked by Gmail, Apple Mail, and Outlook clients that enforce HTTPS:
  ```
  src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8107766165&mi_ecmp=..."
  ```
- `pixel.app.returnpath.net/pixel.gif?r=964ce1db...` is missing the protocol scheme entirely — behavior is client-dependent; many will treat as relative URL and fail silently.
- 24 click-through links on `click.emails.skechers.com` could not be probed (redirect domain); no broken destination URLs confirmed, but continuity is unverified.

---

### 3. Rendering & Accessibility

**Mixed content (HTTP image sources) — 14 confirmed violations:**

All footer utility icons and app store badges are served over HTTP from `image.emails.skechers.com`:
- App Store badge: `http://image.emails.skechers.com/.../0ec56c9f-eec2-471a-898d-0ca1cea7e115.png`
- Google Play badge: `http://image.emails.skechers.com/.../9bb508d0-4b38-483d-8459-cf54186a0b9f.png`
- Curbside Pickup, AfterPay, Find A Store, Instagram, Facebook, Pinterest, YouTube icons: all `http://`
- Skechers logo: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png`

Clients that block mixed content (Gmail web, Outlook 2019+) will show broken image placeholders for all of these.

**Staging subdomain asset in production send:**
```
src="https://image.devemails.skechers.com/lib/fe33157075640674761d74/m/1/summary-tier-blue-angle.png"
```
`image.devemails.skechers.com` is not the production CDN domain. If this environment is access-restricted or rotated, the tier status graphic will fail to render for all recipients.

**Missing alt text (4 images):**
- `o.gif` (ink1000.com tracking pixel) — low severity
- `summary-tier-blue-angle.png` — tier status graphic; no alt means screen readers skip member tier context entirely
- `128ede3f-d941-4bd7-8984-58076a839e59.gif` — unknown content, no fallback
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — also HTTP; double failure

**Zoom / accessibility:**
- Viewport meta includes `maximum-scale=1`, which prevents user-initiated zoom on iOS — accessibility violation under WCAG 1.4.4.
- `* { -webkit-text-size-adjust: none; }` applied globally suppresses automatic font scaling on mobile WebKit, compounding the zoom restriction.

---

### 4. Personalization & Merge Tokens

The HTML references `.tierStatus` and `.tier-wrapper` CSS classes and the subject line implies per-member point totals, confirming dynamic tier/points personalization is expected. The truncated source prevents full token audit, but:

- The staging asset path (`devemails.skechers.com`) for `summary-tier-blue-angle.png` suggests this tier graphic may be environment-conditional — confirm the production URL resolves correctly.
- Campaign ID embedded in Krux pixel: `campaignid=TRG_US_EN_MONTHLYSUMMARY_1_02272026_B` — this is the **B variant**; confirm A/B split is intentional and the B-variant pixel isn't firing on A-variant sends.

---

### 5. Compliance

**Authentication:**
- `Authentication-Results` header not found via AgentMail relay — SPF and DKIM pass/fail status unverified. This is a relay visibility gap, not confirmed authentication failure, but should be validated directly against mail headers before deployment at scale.

**CAN-SPAM / unsubscribe:**
- Physical mailing address and unsubscribe mechanism not visible in the truncated source but are expected in the footer. Cannot confirm presence from available HTML — verify in full source.

**No other compliance issues confirmed from available data.**

---

### 6. Email-to-Site Continuity

- 24 click links route through `click.emails.skechers.com` tracking redirects — final destinations unverified due to redirect skip in QA probe. UTM parameter presence on destination URLs is unconfirmed.
- Campaign ID in tracking pixels (`02272026` date component) suggests this template originated in late February 2026 — confirm campaign IDs and any date-stamped parameters were updated for the current send date (2026-04-01).

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | 14 HTTP image sources | Migrate all `image.emails.skechers.com` asset URLs to HTTPS |
| **High** | Staging CDN domain in production | Replace `image.devemails.skechers.com` with production CDN domain before send |
| **High** | ink1000.com pixel over HTTP | Update to HTTPS or confirm vendor supports it |
| **Medium** | Return Path pixel missing protocol | Add `https://` prefix to `pixel.app.returnpath.net` src |
| **Medium** | SPF/DKIM status unverified | Pull raw headers from a seed send and confirm both pass |
| **Medium** | Missing alt text on tier graphic | Add descriptive alt (e.g., `alt="Blue tier member"`) to `summary-tier-blue-angle.png` |
| **Medium** | `maximum-scale=1` in viewport | Remove or change to `maximum-scale=5` to restore user zoom |
| **Low** | Campaign date stamp in pixel IDs | Confirm `02272026` in `campaignid` values is correct or update for current send |
| **Low** | Missing alt on 3 additional images | Add empty `alt=""` on pure-decorative images; descriptive alt on content images |
## Recent history

- [[2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-bmake-walking-a-breeze-with-go-walk]] — 5/10 (2026-04-01)
- [[2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-a-v3make-walking-a-breeze-with-go-walk]] — 6/10 (2026-04-01)
- [[2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-a-v2-make-walking-a-breeze-with-go-wal]] — 6/10 (2026-04-01)

