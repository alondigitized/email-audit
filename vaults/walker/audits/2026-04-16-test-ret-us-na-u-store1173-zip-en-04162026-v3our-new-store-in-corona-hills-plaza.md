---
slug: 2026-04-16-test-ret-us-na-u-store1173-zip-en-04162026-v3our-new-store-in-corona-hills-plaza
type: email
date: 2026-04-16
persona: walker
score: "5/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026_V3Our New Store In Corona Hills Plaza Is Opening Tomorrow!"
tags: [email, score-5, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026_V3Our New Store In Corona Hills Plaza Is Opening Tomorrow!
**Score:** 5/10 · **Type:** Email audit · **2026-04-16**
## Executive summary

- Strong concept and decent execution, dragged down hard by inbox-level defects that undermine first impressions before the email is even opened.

## What's working

- **Hero clarity.** "OPENING TOMORROW" is large, immediate, and scannable. Address and phone number are surfaced directly in the hero — no hunting required.
- **Offer stacking.** The Buy 2 / Get 3rd Free + Free Tote Bag ($25 value, no purchase necessary) combination is genuinely compelling and structured in a logical top-down hierarchy.
- **Category grid.** Women / Men / Girls / Boys modules with real product imagery and direct "SHOP NOW" CTAs create a fast path to the site for online browsers who can't attend in person.
- **Utility footer.** App download, curbside pickup, Afterpay/Klarna, and Find a Store cover the practical needs of a store-opening audience well.

## What's weak

- **Subject line is broken.** The visible subject line reads: `[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026_V3Our New Store In Corona Hills Plaza Is Opening Tomorrow!` — an internal test prefix and a full campaign template code are prepended to the actual subject. This is the first thing every recipient sees.
- **Preview text renders raw JSON.** The inbox snippet shows `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — structured markup that was never supposed to be visible. It reads as spam or a technical error.
- **"GET DIRECTIONS" CTA on the offer tile is mismatched.** The Buy 2 / Get 3rd Free module is a shopping incentive; the CTA should drive to the offer or to the store's product page, not to directions. This creates a logic gap.
- **No urgency language beyond "Tomorrow."** Given this is a grand-opening event, there's no reinforcement of why tomorrow specifically matters (exclusive offers, first-day perks, ribbon cutting, etc.).

## Recommendations

- 1. **Do not send this to production.** The subject line and preview text defects need to be resolved before any real deployment. Audit the template pipeline for how `[Test]:` tags and raw JSON end up surfacing to the inbox layer.
- 2. **Fix the preview text.** The Schema.org block should either be placed in a hidden `<div>` within the body (not the preheader slot) or removed. Replace with a compelling one-liner like: *"Your new Skechers store opens tomorrow — plus a free tote, no purchase needed."*
- 3. **Replace the offer CTA.** Change "GET DIRECTIONS" in the Buy 2 / Get 3rd Free section to "SHOP THE OFFER" or "SHOP NOW" so the intent matches the incentive.
- 4. **Add a first-day hook.** Even one line — "Join us for exclusive grand-opening deals all day" — would give the event more texture and drive foot traffic beyond the coupon-motivated buyer.
- 5. **Tighten the subject line.** The actual signal buried in the mess ("Our New Store In Corona Hills Plaza Is Opening Tomorrow!") is decent but too long. See alternatives below.
- | Priority | Issue | Action |
- |---|---|---|
- | **Critical** | HTTP image hosting (13 assets) | Migrate `image.emails.skechers.com` to HTTPS; update all `src` attributes |
- | **Critical** | ReturnPath pixel missing scheme | Change `src="pixel.app.returnpath.net/..."` → `src="https://pixel.app.returnpath.net/..."` |
- | **High** | `[Test]:` prefix in subject line | Confirm this is stripped before production deployment; fix subject concatenation (missing space/delimiter before "Our New Store") |
- | **High** | SPF/DKIM auth headers missing | Validate DKIM signing on `emails.skechers.com`; confirm headers are passed through relay |
- | **Medium** | Missing alt text on `49468f73...png` | Add descriptive `alt` attribute to the content image |
- | **Medium** | UTM passthrough | Spot-check 2–3 primary CTAs through the full redirect chain to confirm UTM parameters reach the destination page |
- | **Low** | Redundant open-tracking pixels (4 total) | Evaluate whether ink1000 + Krux impression pixel are both needed alongside SFMC open tracking |
- | **Low** | Duplicate 375px/640px media query blocks | Collapse into a single `max-width: 640px` block to reduce CSS payload |
- | **Low** | `-webkit-text-size-adjust: none` on `*` | Scope to `body` only |

## Full review
## 2. Business Impact Score: **5 / 10**

Strong concept and decent execution, dragged down hard by inbox-level defects that undermine first impressions before the email is even opened.

---

## 3. What's Working

- **Hero clarity.** "OPENING TOMORROW" is large, immediate, and scannable. Address and phone number are surfaced directly in the hero — no hunting required.
- **Offer stacking.** The Buy 2 / Get 3rd Free + Free Tote Bag ($25 value, no purchase necessary) combination is genuinely compelling and structured in a logical top-down hierarchy.
- **Category grid.** Women / Men / Girls / Boys modules with real product imagery and direct "SHOP NOW" CTAs create a fast path to the site for online browsers who can't attend in person.
- **Utility footer.** App download, curbside pickup, Afterpay/Klarna, and Find a Store cover the practical needs of a store-opening audience well.

---

## 4. What's Weak

- **Subject line is broken.** The visible subject line reads: `[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026_V3Our New Store In Corona Hills Plaza Is Opening Tomorrow!` — an internal test prefix and a full campaign template code are prepended to the actual subject. This is the first thing every recipient sees.
- **Preview text renders raw JSON.** The inbox snippet shows `[{ "@context": "http://schema.org/", "@type": "Organization", "logo": "https://...` — structured markup that was never supposed to be visible. It reads as spam or a technical error.
- **"GET DIRECTIONS" CTA on the offer tile is mismatched.** The Buy 2 / Get 3rd Free module is a shopping incentive; the CTA should drive to the offer or to the store's product page, not to directions. This creates a logic gap.
- **No urgency language beyond "Tomorrow."** Given this is a grand-opening event, there's no reinforcement of why tomorrow specifically matters (exclusive offers, first-day perks, ribbon cutting, etc.).

---

## 5. Recommendations

1. **Do not send this to production.** The subject line and preview text defects need to be resolved before any real deployment. Audit the template pipeline for how `[Test]:` tags and raw JSON end up surfacing to the inbox layer.
2. **Fix the preview text.** The Schema.org block should either be placed in a hidden `<div>` within the body (not the preheader slot) or removed. Replace with a compelling one-liner like: *"Your new Skechers store opens tomorrow — plus a free tote, no purchase needed."*
3. **Replace the offer CTA.** Change "GET DIRECTIONS" in the Buy 2 / Get 3rd Free section to "SHOP THE OFFER" or "SHOP NOW" so the intent matches the incentive.
4. **Add a first-day hook.** Even one line — "Join us for exclusive grand-opening deals all day" — would give the event more texture and drive foot traffic beyond the coupon-motivated buyer.
5. **Tighten the subject line.** The actual signal buried in the mess ("Our New Store In Corona Hills Plaza Is Opening Tomorrow!") is decent but too long. See alternatives below.

---

## 6. Bottom Line

The bones of this email are solid: right message, right structure, real incentive. But it shipped with two inbox-level defects that would make it look broken or spammy to every single recipient before they even open it. The content work is wasted if the delivery layer is broken.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026_V3Our New Store In Corona Hills Plaza Is Opening Tomorrow!`
- **Length:** 109 characters (actual intended line: ~54 characters)
- **Scores (1-10):** Clarity `3`, Curiosity `3`, Personalization `4`, Urgency `5`, Specificity `6`
- **Strengths:**
  - The underlying message (specific location + "Opening Tomorrow") is locally relevant and time-bound
  - Includes a concrete location name rather than a generic "new store" teaser
- **Weaknesses:**
  - `[Test]:` prefix and the raw campaign code `RET_US_NA_U_STORE1173_ZIP_EN_04162026_V3` are visible in the subject — production defect
  - No hook or value prop; just an announcement with no reason to care (free tote, offer, etc.)
- **Alt A:** `Your Skechers opens tomorrow in Corona Hills — free tote, no purchase needed`
- **Alt B:** `Corona Hills Plaza: Grand Opening tomorrow + Buy 2, Get 1 Free`

---

## 8. Evidence

- **Overall purpose:** Local store grand-opening announcement targeting recipients in the Corona, CA area, driving foot traffic and online browsing.
- **Hero / primary value proposition:** "OPENING TOMORROW" + store address/phone + "GET DIRECTIONS" CTA. Clear and functional. Address and number are a nice touch for an in-store event.
- **Membership / benefits section:** Not present. No loyalty, rewards, or Skechers Elite mention.
- **Product discoverability / recommendation modules:** Four category tiles (Women, Men, Girls, Boys) each with a lifestyle shoe image and "SHOP NOW" button. A secondary text-link row adds Clothing, New Arrivals, and Sale. Adequate coverage, though no featured products or curated picks to drive specific interest.
- **Utility / secondary modules:** "Let's Get Texting" (App Store + Google Play), Curbside Pickup, Afterpay/Klarna payment icons, Find a Store, and Follow Us social block. Well-organized and unobtrusive.
- **Bugs / friction / clarity issues (visible in render):**
  - Subject line contains `[Test]:` prefix and full campaign template code string — visible to all recipients
  - Preview/preheader text displays raw `@context` / `@type` JSON — renders as technical gibberish in inbox
  - "GET DIRECTIONS" CTA in the Buy 2 / Get 3rd Free offer tile is misaligned with the promotional intent

---

## Technical Audit

## Technical Audit — Skechers Store Opening Email
**Campaign:** `RET_US_NA_U_STORE1173_ZIP_EN_04162026_V3` | **Date reviewed:** 2026-04-15

---

### 1. Technical Summary

The email has a widespread HTTP (non-HTTPS) image-hosting problem affecting 13 assets, creating mixed-content blocking risk in most modern email clients. SPF/DKIM authentication status is unverifiable via the relay, and one tracking pixel has a malformed URL that will silently fail to fire.

---

### 2. Link & Tracking Issues

**Test subject line prefix not stripped**
- Subject: `[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026_V3Our New Store...`
- The `[Test]:` prefix is present in production send if this is not a staging artifact. Also note the campaign ID is directly concatenated into the subject with no delimiter before "Our New Store."

**ReturnPath pixel — missing URL scheme**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
- Missing `https://` scheme. Browsers/clients will treat this as a relative path and the pixel will not fire. Inbox intelligence data will be lost for this campaign.

**26 click-tracking links not probed**
- All CTAs route through `click.emails.skechers.com` redirect. HTTP probe was skipped, so broken destination URLs cannot be ruled out. Recommend spot-checking at least the primary CTA destination.

**Multiple third-party beacon pixels loaded**
- Salesforce MC open pixel: `click.emails.skechers.com/open.aspx?DFI3OA2DNN2E3AIXC6GBS5OXPI.100218`
- Krux/Salesforce DMP user-match: `beacon.krxd.net` (×2 — SHA-256 hash and subid variants)
- Krux impression pixel: `beacon.krxd.net/1x1_ad_impression.gif?confid=so3yexmpm`
- ink1000.com open tracking: `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif`

Four separate open-tracking mechanisms for one send is unusual and increases payload size. The ink1000 pixel duplicates Salesforce MC open tracking.

---

### 3. Rendering & Accessibility

**HTTP image sources — 13 affected assets**

All `image.emails.skechers.com` assets are served over HTTP. Gmail, Outlook.com, and Apple Mail proxy/block non-HTTPS image sources. Affected images include the Skechers logo, app store badges, social icons, and two content images:

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/00100b23-...png  (Curbside Pickup)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/fc08601a-...png  (Find A Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...png  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-...png  (YouTube)
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif                                (tracking pixel)
```

**Missing alt text — 2 images**
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image, alt attribute absent entirely
- `o.gif` (ink1000 tracking pixel) — alt="" would be acceptable here but is missing

**`-webkit-text-size-adjust: none` on `*` selector**
```css
* { -webkit-text-size-adjust: none; }
```
Applied globally, this disables iOS automatic font-size adjustments across all elements, including any that rely on it for legibility at small sizes. Should be scoped to `body` or specific containers.

**Duplicate media query blocks**
- Identical rule sets declared twice: once for `max-width: 375px` and again for `max-width: 640px`. The 375px block is fully subsumed and never exclusively active. This is dead CSS but does not cause rendering failures.

**Desktop/mobile content switching**
- Uses both CSS class toggling (`.mobile-content`/`.desktop-content`) and `@media` queries — these are consistent and functional, though redundant in places.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%variable%%`, `{{variable}}`) are visible in the truncated source. The subscriber ID in the ink1000 pixel (`mi_u=8004129222`) and Krux subid (`partner_uid=32884357`) appear to be resolved values, suggesting the email was rendered for a specific recipient.

Campaign identifier `RET_US_NA_U_STORE1173_ZIP_EN_04162026` is consistent across all four tracking pixels — no token/value mismatch detected.

---

### 5. Compliance

**SPF/DKIM status unverifiable**
- QA finding: `Authentication-Results header not found` — the AgentMail relay did not capture or pass through authentication headers. SPF/DKIM pass/fail cannot be confirmed from available data. Deliverability to major providers (Gmail, Outlook) may be affected if DKIM signing is absent or misconfigured on `emails.skechers.com`.

**CAN-SPAM / unsubscribe**
- The truncated HTML does not include the footer. Cannot confirm presence of physical postal address or unsubscribe mechanism from available source. These must be verified in the full render. If the footer is hidden behind `display:none` responsive classes at any breakpoint, that would be a compliance issue.

**Preheader**
- Preheader text (`Buy 2 Pairs, Get the 3rd Free + a Free Tote`) is correctly implemented with `display:none !important` and a dedicated CSS override block — no issues.

---

### 6. Email-to-Site Continuity

**UTM passthrough unverifiable**
- All 26 CTAs are wrapped in `click.emails.skechers.com` click-tracking redirects, which were not probed. Whether UTM parameters are appended to final destination URLs is unknown. If the redirect chain does not preserve or inject UTMs, session attribution in analytics will be broken for this campaign.

**Campaign ID consistency**
- `RET_US_NA_U_STORE1173_ZIP_EN_04162026` is used consistently in the ink1000 and Krux impression pixels. Confirm this value is also passed as `utm_campaign` on destination links for end-to-end attribution continuity.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Critical** | HTTP image hosting (13 assets) | Migrate `image.emails.skechers.com` to HTTPS; update all `src` attributes |
| **Critical** | ReturnPath pixel missing scheme | Change `src="pixel.app.returnpath.net/..."` → `src="https://pixel.app.returnpath.net/..."` |
| **High** | `[Test]:` prefix in subject line | Confirm this is stripped before production deployment; fix subject concatenation (missing space/delimiter before "Our New Store") |
| **High** | SPF/DKIM auth headers missing | Validate DKIM signing on `emails.skechers.com`; confirm headers are passed through relay |
| **Medium** | Missing alt text on `49468f73...png` | Add descriptive `alt` attribute to the content image |
| **Medium** | UTM passthrough | Spot-check 2–3 primary CTAs through the full redirect chain to confirm UTM parameters reach the destination page |
| **Low** | Redundant open-tracking pixels (4 total) | Evaluate whether ink1000 + Krux impression pixel are both needed alongside SFMC open tracking |
| **Low** | Duplicate 375px/640px media query blocks | Collapse into a single `max-width: 640px` block to reduce CSS payload |
| **Low** | `-webkit-text-size-adjust: none` on `*` | Scope to `body` only |
## Recent history

- [[2026-04-16-test-ret-us-na-u-store1669-zip-en-04162026-v3our-new-store-in-johnstown-is-openi]] — 4/10 (2026-04-16)
- [[2026-04-16-test-ret-us-na-u-store1678-zip-en-04162026-v3our-new-store-at-cottman-ave-is-ope]] — 4/10 (2026-04-16)
- [[2026-04-15-test-ret-us-na-u-store1678-zip-en-04162026-v3our-new-store-in-sunset-plaza-is-op]] — 2/10 (2026-04-15)

