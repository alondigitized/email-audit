---
slug: 2026-04-15-test-ret-us-na-u-store1678-zip-en-04162026-v2our-new-store-in-plaza-at-sunset-hi
type: email
date: 2026-04-15
persona: walker
score: "5/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V2Our New Store In Plaza at Sunset Hills Is Opening Tomorrow!"
tags: [email, score-5, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V2Our New Store In Plaza at Sunset Hills Is Opening Tomorrow!
**Score:** 5/10 · **Type:** Email audit · **2026-04-15**
## Executive summary

- Strong in-store driving intent from the promo stack, but the production QA failures (subject, preview) are significant enough to meaningfully suppress open rates and trust.

## What's working

- **Urgency is clear.** "Opening Tomorrow" at the top creates genuine time-pressure without manufactured scarcity.
- **Local specificity.** Address, phone number, and city in the hero give the email a real-world anchor. This is better than most retail grand-opening emails.
- **Promo is a solid incentive.** Buy 2 Get 3rd Free combined with a Free Tote Bag (no purchase necessary, $30 value callout) is a two-layer offer that gives both buyers and browsers a reason to visit.
- **Category shop modules.** Women / Men / Girls / Boys sections with lifestyle imagery move the email from announcement toward product discovery.
- **Footer utility is complete.** App download, texting opt-in, Curbside Pickup, Find a Store, Afterpay/Klarna financing — all present.

## What's weak

- **Subject line is broken and fully exposed.** `[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V2Our New Store...` — an internal test tag and a CMS token are prepended to the human-readable subject. This is a production send failure.
- **Preview text is raw JSON-LD.** The structured data schema block leaked into the preheader. Recipients see `[{ "@context": "http://schema.org/", "@type": "Organization", "logo":...` in their inbox. This is a serious QA miss.
- **Category modules are low-effort.** Each gender section is a single lifestyle photo with a "Shop Now" button — no products, no prices, no specificity. For a grand opening meant to drive foot traffic, this doesn't showcase why to visit.
- **The tote bag offer is undersold visually.** The tote is shown as a small inset image. Given it's a free-gift-no-purchase incentive, it deserves more prominence.
- **"Get Directions" CTA appears twice** in close succession (hero + promo row), creating slight redundancy without adding value.

## Recommendations

- 1. **Pull this send immediately** if not already deployed — or suppress via list management — and fix the subject line and preview text before any further deployment.
- 2. **Remove `[Test]:` prefix and the internal tracking token** from the subject. The actual intended subject appears to be: *"Our New Store In Plaza at Sunset Hills Is Opening Tomorrow!"*
- 3. **Set a real preheader** — something like *"Buy 2 pairs, get the 3rd free + score a free tote bag. Come visit us tomorrow."*
- 4. **Give the tote bag its own visual row.** A free gift with no purchase threshold is a strong acquisition hook — it warrants a headline treatment, not a thumbnail.
- 5. **Add 2-3 product tiles per gender section.** Even bestseller thumbnails would give the modules a reason to exist beyond category navigation.
- 6. **Consolidate to one "Get Directions" CTA** in the hero; remove the duplicate below.
- | Priority | Issue | Action |
- |---|---|---|
- | **Block** | Subject line: `[Test]:` prefix present | Strip before production send |
- | **Block** | Subject line: campaign code bleeds into copy (`V2Our`) | Add space/delimiter after dynamic token in template |
- | **High** | 13 image `src` attributes use `http://` | Repoint all `image.emails.skechers.com` assets to `https://` |
- | **High** | SPF/DKIM authentication status unconfirmed | Validate headers via full inbox test (Gmail, Outlook) before send |
- | **Medium** | `maximum-scale=1` in viewport | Remove or replace with `maximum-scale=5` |
- | **Medium** | `-webkit-text-size-adjust: none` | Change to `100%` |
- | **Medium** | ink1000 tracking pixel over HTTP | Switch to HTTPS endpoint or remove if redundant |
- | **Medium** | Missing alt text on `49468f73-...png` | Add descriptive alt attribute |
- | **Low** | `mi_u=8004129222` in ink1000 pixel | Confirm dynamic merge tag in production template |
- | **Low** | Malformed `<meta>` charset | Add `http-equiv="Content-Type"` |
- | **Verify** | CAN-SPAM footer (address + unsubscribe) | Confirm presence in full HTML — not visible in truncated source |
- | **Verify** | UTM params on CTA destinations | Manually probe primary CTA and unsubscribe link |

## Full review
## 2. Business Impact Score: **5 / 10**

Strong in-store driving intent from the promo stack, but the production QA failures (subject, preview) are significant enough to meaningfully suppress open rates and trust.

---

## 3. What's Working

- **Urgency is clear.** "Opening Tomorrow" at the top creates genuine time-pressure without manufactured scarcity.
- **Local specificity.** Address, phone number, and city in the hero give the email a real-world anchor. This is better than most retail grand-opening emails.
- **Promo is a solid incentive.** Buy 2 Get 3rd Free combined with a Free Tote Bag (no purchase necessary, $30 value callout) is a two-layer offer that gives both buyers and browsers a reason to visit.
- **Category shop modules.** Women / Men / Girls / Boys sections with lifestyle imagery move the email from announcement toward product discovery.
- **Footer utility is complete.** App download, texting opt-in, Curbside Pickup, Find a Store, Afterpay/Klarna financing — all present.

---

## 4. What's Weak

- **Subject line is broken and fully exposed.** `[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V2Our New Store...` — an internal test tag and a CMS token are prepended to the human-readable subject. This is a production send failure.
- **Preview text is raw JSON-LD.** The structured data schema block leaked into the preheader. Recipients see `[{ "@context": "http://schema.org/", "@type": "Organization", "logo":...` in their inbox. This is a serious QA miss.
- **Category modules are low-effort.** Each gender section is a single lifestyle photo with a "Shop Now" button — no products, no prices, no specificity. For a grand opening meant to drive foot traffic, this doesn't showcase why to visit.
- **The tote bag offer is undersold visually.** The tote is shown as a small inset image. Given it's a free-gift-no-purchase incentive, it deserves more prominence.
- **"Get Directions" CTA appears twice** in close succession (hero + promo row), creating slight redundancy without adding value.

---

## 5. Recommendations

1. **Pull this send immediately** if not already deployed — or suppress via list management — and fix the subject line and preview text before any further deployment.
2. **Remove `[Test]:` prefix and the internal tracking token** from the subject. The actual intended subject appears to be: *"Our New Store In Plaza at Sunset Hills Is Opening Tomorrow!"*
3. **Set a real preheader** — something like *"Buy 2 pairs, get the 3rd free + score a free tote bag. Come visit us tomorrow."*
4. **Give the tote bag its own visual row.** A free gift with no purchase threshold is a strong acquisition hook — it warrants a headline treatment, not a thumbnail.
5. **Add 2-3 product tiles per gender section.** Even bestseller thumbnails would give the modules a reason to exist beyond category navigation.
6. **Consolidate to one "Get Directions" CTA** in the hero; remove the duplicate below.

---

## 6. Bottom Line

The bones of this email are solid — a real event, a real address, a credible double-offer. If the subject line and preview text had been clean, this would be a functional 7/10 grand opening email. Instead it shipped (or nearly shipped) with a test tag, an internal token, and leaked JSON-LD visible to every recipient. Fix the QA process first; then invest in richer product modules for the next market opening.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V2Our New Store In Plaza at Sunset Hills Is Opening Tomorrow!`
- **Length:** 104 characters
- **Scores (1-10):** Clarity `2`, Curiosity `3`, Personalization `4`, Urgency `6`, Specificity `5`
- **Strengths:**
  - The tail end ("Opening Tomorrow!") carries real urgency
  - Store-specific location name adds local relevance
- **Weaknesses:**
  - `[Test]:` tag and internal CMS token dominate what recipients see in the inbox; the human-readable message is buried or cut off entirely
  - At 104 characters, even the clean version exceeds typical mobile subject line display (~45-50 chars)
- **Alt A:** `Our Sunset Hills Store Opens Tomorrow — Come Celebrate`
- **Alt B:** `New Skechers in St. Louis: Grand Opening Tomorrow + Free Tote Bag`

---

## 8. Evidence

- **Overall purpose:** Grand opening announcement for Skechers Store #1678, Plaza at Sunset Hills, St. Louis, MO. Drive in-store foot traffic for the next-day opening.
- **Hero / primary value proposition:** "Opening Tomorrow" headline with store name, full address (10790 Sunset Hills Plaza, St. Louis, MO | 314-237-0794), and a "Get Directions" CTA button. Clear, functional, locally specific.
- **Membership / benefits section:** Not present. No loyalty program reference.
- **Product discoverability / recommendation modules:** Four gender-segmented lifestyle modules (Women, Men, Girls, Boys) each with a single image and "Shop Now" button. No individual product tiles or prices visible.
- **Utility / secondary modules:** "Shop Additional Styles" text links (Women, Men, Kids, Clothing, New Arrivals, Sale) — a thin navigation row. Footer includes app download (App Store + Google Play), SMS opt-in, Curbside Pickup icon, Find a Store, Afterpay and Klarna logos, and social icons (Facebook, Instagram, YouTube).
- **Bugs / friction / clarity issues (visible in render):**
  - Subject line contains `[Test]:` prefix and raw internal tracking token — visible in inbox
  - Preview text renders raw JSON-LD structured data — visible in email client preheader
  - Tote bag offer row has a small disclaimer line below dates (`04/17 - 04/19`) that appears cut off and is barely legible at this resolution

---

## Technical Audit

## Technical Audit — Skechers Store Opening Email
**Campaign:** `RET_US_NA_U_STORE1678_ZIP_EN_04162026_V2`
**Audited:** 2026-04-15

---

### 1. Technical Summary

The email has two blocking pre-send issues: a subject line with a leaked test prefix and a malformed campaign-code/subject concatenation. Thirteen image assets are served over HTTP, creating a widespread image-blocking risk across modern clients.

---

### 2. Link & Tracking Issues

**HTTP tracking pixel — no HTTPS**
`http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8004129222&mi_ecmp=RET_US_NA_U_STORE1678_ZIP_EN_04162026`
Served over plain HTTP. Gmail, Outlook.com, and Apple Mail proxy/block non-HTTPS pixels. No alt text present (also flagged in §3).

**26 click-redirect links unverified**
All CTAs route through `click.emails.skechers.com`. Destinations and UTM parameter presence could not be probed (see §6). This is expected for a click-tracking setup but means landing page continuity is unconfirmed.

**Third-party identity pixels**
Two Krux/Salesforce DMP user-match beacons and one ad-impression pixel fire on open:
- `beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=e5a36492fb9b5fc...`
- `beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=32884357`
- `beacon.krxd.net/1x1_ad_impression.gif?confid=so3yexmpm&campaignid=RET_US_NA_U_STORE1678_ZIP_EN_04162026`

These are HTTPS and structurally valid. The `subid` value `32884357` appears to be a resolved subscriber ID — confirm this is expected test data and not a hardcoded production value.

ReturnPath seed pixel (`pixel.app.returnpath.net/pixel.gif`) is HTTPS and correct.

---

### 3. Rendering & Accessibility

**HTTP image sources — 13 assets affected**
All production image assets under `image.emails.skechers.com` are served via `http://`, not `https://`. Gmail proxies images through its own HTTPS cache; other clients (Outlook desktop, Apple Mail with "Load Remote Content" disabled) may block them entirely, rendering the email imageless.

Affected assets include logo, hero, App Store badge, Google Play badge, Curbside Pickup, AfterPay, Find A Store, and all four social icons.

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png  (missing alt)
...and 11 more
```

**Missing alt text — 2 images**
- `o.gif` (ink1000 tracking pixel) — alt="" acceptable for a 1×1 pixel but the attribute is absent entirely
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no alt attribute

**Viewport / font-size accessibility**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
`maximum-scale=1` prevents pinch-zoom. Violates WCAG 1.4.4 (Resize Text) and will fail accessibility linting.

```css
* { -webkit-text-size-adjust: none; }
```
Disables OS-level font scaling on iOS. Use `100%` instead of `none`.

**Malformed `<meta>` charset tag**
```html
<meta content="text/html; charset=utf-8" />
```
Missing `http-equiv="Content-Type"`. Some legacy parsers will ignore this declaration. Correct form:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

---

### 4. Personalization & Merge Tokens

**Subject line has two defects:**

1. Test prefix not stripped:
   ```
   [Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V2Our New Store...
   ```
   The `[Test]:` flag must be removed before production send.

2. Campaign version token concatenated directly into subject copy — no separator between `V2` and `Our`:
   ```
   ...04162026_V2Our New Store In Plaza...
   ```
   This suggests the subject line template is `%%=v(@campaign_id)=%%Our New Store...` with a missing space or delimiter after the dynamic token. The resolved output exposes the internal campaign ID string in the subscriber's inbox.

**Subscriber ID in ink1000 pixel**
`mi_u=8004129222` — this appears to be a static value in the test send. Verify the production template uses a dynamic merge tag (e.g., `%%subscriberid%%`) rather than a hardcoded value.

---

### 5. Compliance

**SPF/DKIM authentication — status unknown**
QA was unable to locate `Authentication-Results` headers via the AgentMail relay. SPF and DKIM pass/fail status cannot be confirmed. This must be verified against the received message headers in a full inbox test before deployment.

**CAN-SPAM requirements**
The HTML is truncated; the following could not be confirmed from the available source:
- Physical mailing address present in footer
- Functioning unsubscribe mechanism with one-click or clearly labeled link

These are mandatory. Confirm they exist in the full HTML.

**Preheader text**
Preheader is present and suppressed correctly:
```html
<div class="preheader" style="font-size:1px;display:none !important">Buy 2 Pairs, Get the 3rd Free + a Free Tote</div>
```
No issue.

---

### 6. Email-to-Site Continuity

**UTM parameters — unverifiable**
All 26 CTAs pass through `click.emails.skechers.com` redirects. Destination URLs and their UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) could not be resolved. Before send, manually probe at least the primary CTA and the unsubscribe link to confirm:
- `utm_campaign` matches `RET_US_NA_U_STORE1678_ZIP_EN_04162026` (consistent with ad-impression pixel)
- Landing page is the correct store location page, not a generic homepage

**Krux impression pixel campaign ID**
`campaignid=RET_US_NA_U_STORE1678_ZIP_EN_04162026` in the DMP pixel matches the campaign naming convention — consistent.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Block** | Subject line: `[Test]:` prefix present | Strip before production send |
| **Block** | Subject line: campaign code bleeds into copy (`V2Our`) | Add space/delimiter after dynamic token in template |
| **High** | 13 image `src` attributes use `http://` | Repoint all `image.emails.skechers.com` assets to `https://` |
| **High** | SPF/DKIM authentication status unconfirmed | Validate headers via full inbox test (Gmail, Outlook) before send |
| **Medium** | `maximum-scale=1` in viewport | Remove or replace with `maximum-scale=5` |
| **Medium** | `-webkit-text-size-adjust: none` | Change to `100%` |
| **Medium** | ink1000 tracking pixel over HTTP | Switch to HTTPS endpoint or remove if redundant |
| **Medium** | Missing alt text on `49468f73-...png` | Add descriptive alt attribute |
| **Low** | `mi_u=8004129222` in ink1000 pixel | Confirm dynamic merge tag in production template |
| **Low** | Malformed `<meta>` charset | Add `http-equiv="Content-Type"` |
| **Verify** | CAN-SPAM footer (address + unsubscribe) | Confirm presence in full HTML — not visible in truncated source |
| **Verify** | UTM params on CTA destinations | Manually probe primary CTA and unsubscribe link |
## Recent history

- [[2026-04-15-test-ret-us-na-u-store1678-zip-en-04162026our-new-store-in-plaza-at-sunset-hills]] — 5/10 (2026-04-15)
- [[2026-04-15-test-ret-us-na-u-store1669-zip-en-04162026our-new-store-in-johnstown-is-opening-]] — 3/10 (2026-04-15)
- [[2026-04-15-test-mkg-us-na-u-best-full-en-04162026-v2loved-reviewed-and-ready-for-your-close]] — 5/10 (2026-04-15)

