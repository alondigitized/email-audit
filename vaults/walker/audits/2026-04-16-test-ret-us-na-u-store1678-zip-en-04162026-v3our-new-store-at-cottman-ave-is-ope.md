---
slug: 2026-04-16-test-ret-us-na-u-store1678-zip-en-04162026-v3our-new-store-at-cottman-ave-is-ope
type: email
date: 2026-04-16
persona: walker
score: "4/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V3Our New Store At Cottman Ave Is Opening Tomorrow!"
tags: [email, score-4, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V3Our New Store At Cottman Ave Is Opening Tomorrow!
**Score:** 4/10 · **Type:** Email audit · **2026-04-16**
## Executive summary

- This is a store grand opening announcement for the new Skechers location at Cottman Ave, Philadelphia — and the email itself is functional and well-structured. However, it should not have reached any real recipient in its current state: the subject line leads with a raw internal test code (`[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V3`), and the preview text renders exposed JSON-LD schema markup verbatim. These are critical production defects that would instantly undermine trust and signal an operational failure to anyone who receives it.
- The content itself would score a 7. The production errors drag it to a 4. A grand opening is high-stakes — this is the one email where you want everything sharp.

## What's working

- **Hero is clear and confident.** "OPENING TOMORROW / SKECHERS COTTMAN AVE" with the street photo, full address, phone number, and GET DIRECTIONS CTA is exactly right for a local store opening. No ambiguity about what the email is.
- **Two-tier offer stack is smart.** Buy 2 Get 3rd Free is a compelling product purchase incentive. The Free Tote Bag (no purchase necessary, $25 value) is a strong foot-traffic driver. Layering both in one email creates two reasons to show up.
- **Category modules (Women / Men / Girls / Boys)** give recipients a direct browse path after reading the offer, which is good for non-local shoppers or those who won't visit in person.
- **Utility footer is complete.** App download links, Afterpay/Klarna, Find a Store, and Curbside Pickup are all present — appropriate for a brand email at this scale.

## What's weak

- **Subject line is broken.** The `[Test]:` prefix and the internal campaign code are live in the subject. This is the first thing every recipient sees. It reads like an accidental send.
- **Preview text is raw schema.** The entire preheader is JSON-LD markup (`{ "@context": "http://schema.org/"...`). This is the second thing recipients see in their inbox. It completely voids the subject line and signals a technical failure.
- **"GET DIRECTIONS" under the buy-2-get-3rd-free offer is the wrong CTA.** Someone excited about a 3-for-2 deal wants to shop, not navigate. A "SHOP NOW" or "REDEEM OFFER" button belongs there.
- **The tote bag section lacks urgency and constraints.** "No purchase necessary" is good, but the section gives no timeframe, no quantity limit, and no clear pickup instruction — leaving the offer feeling vague.
- **Email length is high.** By the time you get through hero, two offers, four gender category blocks, a text nav bar, and a full utility footer, the message has lost focus. The category modules especially feel like catalog filler tacked onto a local event email.

## Recommendations

- 1. **Kill the test prefix and internal code from the subject line before any live send.** This is non-negotiable.
- 2. **Replace the preview text with a real hook** — something like "Free tote bag + 3rd pair free. Come see us tomorrow."
- 3. **Swap the GET DIRECTIONS CTA under the buy-2-get-3 offer** to SHOP NOW or SEE STYLES.
- 4. **Add urgency cues to the tote bag offer** — "First 200 visitors" or "Opening day only" would sharpen conversion intent.
- 5. **Trim the category section** to 2 modules (e.g., Women + Men), or drop it entirely for this email. A grand opening announcement doesn't need to double as a full catalog.
- 6. **Audit the send process** — two separate production errors (subject line + preview text) appearing together suggest a QA gate failure. Review the pre-send checklist.
- | Priority | Action |
- |---|---|
- | P0 | Remove `[Test]:` prefix and raw campaign ID from subject line before send |
- | P0 | Fix Return Path pixel — add `https://` to `pixel.app.returnpath.net/pixel.gif` src |
- | P0 | Correct campaign ID in Krux beacon and ink1000 pixel from `STORE1676` → `STORE1678` |
- | P1 | Migrate all `image.emails.skechers.com` and `ink1000.com` assets to HTTPS |
- | P1 | Confirm SPF/DKIM pass via seed inbox test before deployment |
- | P2 | Add `alt=""` to the unnamed content image (`49468f73...png`) |
- | P2 | Spot-check 3–5 CTA link redirects to verify `utm_campaign` references `STORE1678` |
- | P3 | Remove duplicate media query blocks; add `http-equiv` to malformed `<meta>` tags |

## Full review
## Email Review: Skechers Cottman Ave Grand Opening

---

### 1. Executive Summary

This is a store grand opening announcement for the new Skechers location at Cottman Ave, Philadelphia — and the email itself is functional and well-structured. However, it should not have reached any real recipient in its current state: the subject line leads with a raw internal test code (`[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V3`), and the preview text renders exposed JSON-LD schema markup verbatim. These are critical production defects that would instantly undermine trust and signal an operational failure to anyone who receives it.

---

### 2. Business Impact Score: **4/10**

The content itself would score a 7. The production errors drag it to a 4. A grand opening is high-stakes — this is the one email where you want everything sharp.

---

### 3. What's Working

- **Hero is clear and confident.** "OPENING TOMORROW / SKECHERS COTTMAN AVE" with the street photo, full address, phone number, and GET DIRECTIONS CTA is exactly right for a local store opening. No ambiguity about what the email is.
- **Two-tier offer stack is smart.** Buy 2 Get 3rd Free is a compelling product purchase incentive. The Free Tote Bag (no purchase necessary, $25 value) is a strong foot-traffic driver. Layering both in one email creates two reasons to show up.
- **Category modules (Women / Men / Girls / Boys)** give recipients a direct browse path after reading the offer, which is good for non-local shoppers or those who won't visit in person.
- **Utility footer is complete.** App download links, Afterpay/Klarna, Find a Store, and Curbside Pickup are all present — appropriate for a brand email at this scale.

---

### 4. What's Weak

- **Subject line is broken.** The `[Test]:` prefix and the internal campaign code are live in the subject. This is the first thing every recipient sees. It reads like an accidental send.
- **Preview text is raw schema.** The entire preheader is JSON-LD markup (`{ "@context": "http://schema.org/"...`). This is the second thing recipients see in their inbox. It completely voids the subject line and signals a technical failure.
- **"GET DIRECTIONS" under the buy-2-get-3rd-free offer is the wrong CTA.** Someone excited about a 3-for-2 deal wants to shop, not navigate. A "SHOP NOW" or "REDEEM OFFER" button belongs there.
- **The tote bag section lacks urgency and constraints.** "No purchase necessary" is good, but the section gives no timeframe, no quantity limit, and no clear pickup instruction — leaving the offer feeling vague.
- **Email length is high.** By the time you get through hero, two offers, four gender category blocks, a text nav bar, and a full utility footer, the message has lost focus. The category modules especially feel like catalog filler tacked onto a local event email.

---

### 5. Recommendations

1. **Kill the test prefix and internal code from the subject line before any live send.** This is non-negotiable.
2. **Replace the preview text with a real hook** — something like "Free tote bag + 3rd pair free. Come see us tomorrow."
3. **Swap the GET DIRECTIONS CTA under the buy-2-get-3 offer** to SHOP NOW or SEE STYLES.
4. **Add urgency cues to the tote bag offer** — "First 200 visitors" or "Opening day only" would sharpen conversion intent.
5. **Trim the category section** to 2 modules (e.g., Women + Men), or drop it entirely for this email. A grand opening announcement doesn't need to double as a full catalog.
6. **Audit the send process** — two separate production errors (subject line + preview text) appearing together suggest a QA gate failure. Review the pre-send checklist.

---

### 6. Bottom Line

The email has the right bones for a grand opening: clear event, compelling offers, strong location details. But it shipped with visible test artifacts that make it look like a mistake rather than a campaign. Even if the content is right, the subject line and preview text are what recipients evaluate first — and both are broken here. Fix those two, sharpen the tote bag urgency, and this email works. As-is, it risks embarrassing the brand and confusing the audience it's trying to bring through the door.

---

### 7. Subject Line Analysis

- **Subject:** `[Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026_V3Our New Store At Cottman Ave Is Opening Tomorrow!`
- **Length:** 87 characters (including test prefix; actual intended subject is ~51 chars)
- **Scores (1-10):** Clarity `2`, Curiosity `2`, Personalization `3`, Urgency `5`, Specificity `6`
- **Strengths:**
  - The intended message ("new store opening tomorrow") is specific and time-bound
  - "Cottman Ave" is geographically targeted for local recipients
- **Weaknesses:**
  - `[Test]:` prefix and internal campaign code appear verbatim — disqualifying in a live send
  - Preview text is broken JSON-LD schema, compounding the subject line failure
- **Alt A:** `Your New Skechers Is Opening Tomorrow — Cottman Ave, Philadelphia`
- **Alt B:** `Tomorrow: Free Tote Bag + 3rd Pair Free at Our New Philly Store`

---

### 8. Evidence

- **Overall purpose:** Announce the grand opening of Skechers' Cottman Ave location in Philadelphia, drive foot traffic on opening day, and layer in product browsing for online shoppers.
- **Hero / primary value proposition:** Large "OPENING TOMORROW" headline with store name, address (2201 Cottman Ave, Suite 120), phone number (215-625-1337), street-level photo, and GET DIRECTIONS CTA. Effective and unambiguous.
- **Membership / benefits section:** None present. No loyalty or Skechers Elite program mention.
- **Product discoverability / recommendation modules:** Four gender-segmented category blocks (Women, Men, Girls, Boys) each with a product photo and SHOP NOW CTA. A secondary text nav (Women / Men / Kids / Clothing / New Arrivals / Sale) reinforces browse paths.
- **Utility / secondary modules:** App download (Apple + Google Play), Curbside Pickup icon, Afterpay and Klarna payment icons, Find a Store. All visible and identifiable.
- **Bugs / friction / clarity issues (visible in render):**
  - Subject line displays raw test code and `[Test]:` prefix
  - Preview text renders exposed JSON-LD schema markup instead of a human-readable hook
  - CTA under the Buy 2 Get 3rd Free offer reads "GET DIRECTIONS" — contextually wrong placement

---

## Technical Audit

## Technical Audit — Skechers Store Opening Email (STORE1678, 04/16/2026)

---

### 1. Technical Summary

The email has a confirmed campaign ID mismatch between the send name and firing tracking pixels, a broken Return Path seed pixel due to a missing URL protocol, and 12 images served over HTTP that will be blocked or broken in security-enforced clients. SPF/DKIM authentication status cannot be confirmed from available headers.

---

### 2. Link & Tracking Issues

**Critical — Campaign ID mismatch (STORE1678 vs. STORE1676)**
The email job name and subject reference `STORE1678`, but two tracking pixels fire `STORE1676`:
- `beacon.krxd.net` → `campaignid=RET_US_NA_U_STORE1676_ZIP_EN_04162026`
- `ink1000.com` → `mi_ecmp=RET_US_NA_U_STORE1676_ZIP_EN_04162026`

Any DMP audience data and third-party attribution for this send will be credited to store 1676, not 1678.

**Critical — Return Path seed pixel will never fire**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
The `src` is missing `https://` entirely. Email clients interpret this as a relative path, not an absolute URL. The pixel resolves to nothing and inbox placement data for this send will be absent.

**Info — 26 click links unverifiable**
All click links route through `click.emails.skechers.com` (SFMC redirect). The QA probe correctly skipped HTTP verification on these; no issue beyond confirming redirect chain is active pre-send.

---

### 3. Rendering & Accessibility

**High — 12 images served over HTTP**
All `image.emails.skechers.com` assets and the `ink1000.com` tracking pixel use `http://`. Gmail, Outlook 365, and Apple Mail proxy or block non-HTTPS image sources. Affected assets include the Skechers logo, social icons (Instagram, Facebook, YouTube), feature icons (Curbside Pickup, AfterPay, Find A Store), and app store badges.

**Medium — Missing `alt` text on 2 images**
- `o.gif` (ink1000 tracking pixel) — minor; blank `alt=""` is acceptable for tracking pixels but not present
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no alt text; fails WCAG 1.1.1 and degrades experience when images are blocked

**Low — Malformed `<meta>` tags**
Two meta tags are missing required `http-equiv` attributes:
```html
<meta content="text/html; charset=utf-8" />           <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                             <!-- missing http-equiv="X-UA-Compatible" -->
```
These tags are silently ignored by most clients but add no value as written.

**Low — Duplicate media query blocks**
Breakpoints at `375px` and `640px` are fully duplicated across two separate `<style>` blocks. No rendering conflict, but adds ~1.5KB of dead CSS.

**Low — `-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; }
```
This disables user-initiated text scaling on iOS Safari, failing WCAG 1.4.4 (Resize Text).

---

### 4. Personalization & Merge Tokens

**High — `[Test]:` prefix present in subject line**
```
Subject: [Test]: RET_US_NA_U_STORE1678_ZIP_EN_04162026V3Our New Store At Cottman Ave Is Opening Tomorrow!
```
The `[Test]:` prefix and the raw campaign ID must be stripped before the production send. The campaign ID appears to be a merge token that did not resolve to a blank/empty value as intended, or was never removed from the subject template.

No unrendered `{{merge_tag}}` or `%%variable%%` patterns are visible in the truncated HTML source.

---

### 5. Compliance

**Medium — SPF/DKIM authentication status unknown**
The QA relay did not capture `Authentication-Results` headers. SPF and DKIM pass/fail for `emails.skechers.com` cannot be confirmed from the available data. This should be verified against a live seed inbox result before send.

**No issues found** — CAN-SPAM physical address and unsubscribe mechanism are expected to be present in the footer (not captured in the truncated source); confirm these are present in the full render.

---

### 6. Email-to-Site Continuity

The campaign ID mismatch noted in §2 will propagate to any UTM parameters baked into click URLs if those parameters reference the `STORE1676` campaign string. If `utm_campaign` in footer or CTA links reads `STORE1676`, site-side attribution for this Cottman Ave store will be wrong.

The 26 tracked click links were not probed, so UTM parameter presence and accuracy cannot be confirmed from current data — recommend spot-checking 3–5 CTA links post-redirect.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | Remove `[Test]:` prefix and raw campaign ID from subject line before send |
| P0 | Fix Return Path pixel — add `https://` to `pixel.app.returnpath.net/pixel.gif` src |
| P0 | Correct campaign ID in Krux beacon and ink1000 pixel from `STORE1676` → `STORE1678` |
| P1 | Migrate all `image.emails.skechers.com` and `ink1000.com` assets to HTTPS |
| P1 | Confirm SPF/DKIM pass via seed inbox test before deployment |
| P2 | Add `alt=""` to the unnamed content image (`49468f73...png`) |
| P2 | Spot-check 3–5 CTA link redirects to verify `utm_campaign` references `STORE1678` |
| P3 | Remove duplicate media query blocks; add `http-equiv` to malformed `<meta>` tags |
## Recent history

- [[2026-04-15-test-ret-us-na-u-store1678-zip-en-04162026-v3our-new-store-in-sunset-plaza-is-op]] — 2/10 (2026-04-15)
- [[2026-04-15-test-ret-us-na-u-store1678-zip-en-04162026-v2our-new-store-in-plaza-at-sunset-hi]] — 5/10 (2026-04-15)
- [[2026-04-15-test-ret-us-na-u-store1678-zip-en-04162026our-new-store-in-plaza-at-sunset-hills]] — 5/10 (2026-04-15)

