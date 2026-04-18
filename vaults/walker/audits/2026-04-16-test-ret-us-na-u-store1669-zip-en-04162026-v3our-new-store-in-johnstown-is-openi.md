---
slug: 2026-04-16-test-ret-us-na-u-store1669-zip-en-04162026-v3our-new-store-in-johnstown-is-openi
type: email
date: 2026-04-16
persona: walker
score: "4/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026_V3Our New Store In Johnstown Is Opening Tomorrow!"
tags: [email, score-4, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026_V3Our New Store In Johnstown Is Opening Tomorrow!
**Score:** 4/10 · **Type:** Email audit · **2026-04-16**
## Executive summary

- A local store-opening email with a solid promotional hook (buy 2 / get 3rd pair free + free tote bag) that is undermined by two critical production defects: a broken test subject line that leaked into production and raw JSON-LD schema markup appearing in the preview text. These alone disqualify this send from being evaluated as a finished campaign. Setting aside those defects, the email structure is competent but generic — the category shop modules anchor to the general website rather than the new store, diluting the local-event message.
- The defects are disqualifying. A recipient seeing the subject line `[Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026_V3Our New Store...` and a preview of raw JSON-LD code will either dismiss the email as spam/a mistake or lose trust in the brand. The underlying offers are solid — if this had been sent cleanly, the score would be a 6.

## What's working

- **Clear grand-opening headline.** "OPENING TOMORROW" is large, bold, and scannable. Store name, address, and phone number are immediately visible.
- **Strong primary offer.** Buy 2 / Get 3rd Pair Free is a proven promotional mechanic, and the $175+ qualifier is displayed clearly.
- **Free tote bag sweetener.** Surfacing the "$25 VALUE" tote bag as a bonus adds a second reason to visit and photographs well in the email.
- **Category coverage.** Women / Men / Girls / Boys modules give every household member a reason to visit.
- **Utility footer is complete.** App download, Afterpay/Klarna, curbside pickup, and Find a Store are all present.

## What's weak

- **[Test] subject line in production.** The internal content ID (`RET_US_NA_U_STORE1669_ZIP_EN_04162026_V3`) is visible in the subject to every recipient. This is a production defect, not a design choice.
- **Preview text is raw schema markup.** The inbox preview reads as a JSON-LD blob (`{ "@context": "http://schema.org/"...`), destroying the first impression before the email is even opened.
- **Mismatched CTA under the promo.** The buy-2-get-3rd-free block closes with a "GET DIRECTIONS" button — the wrong action for a purchase offer. Should be "SHOP THE OFFER" or "VISIT THE STORE."
- **"NO PURCHASE NECESSARY" on the tote bag** sits directly beneath the buy-2-get-3rd headline, creating momentary confusion about whether the primary offer requires a purchase or not. The two offers need clearer visual separation.
- **Category modules link to the general website.** For a store-opening email, these should prioritize the physical store experience or at minimum a "Shop & Pick Up In Store" frame, not generic e-commerce.
- **Offer fine print is tiny.** The asterisk disclaimer under the buy/get offer is barely legible in the render.

## Recommendations

- 1. **Emergency re-send.** The [Test] subject prefix and JSON-LD preview text must be corrected before any future sends. Establish a QA checklist that validates subject line and preview text in staging before deployment.
- 2. **Swap the second CTA.** Change "GET DIRECTIONS" under the buy/get offer to "SHOP THE OFFER" or "EXPLORE STYLES."
- 3. **Separate the tote bag offer visually.** Add a divider or distinct background color between the buy/get block and the tote bag block to prevent offer confusion.
- 4. **Localize the category CTAs.** For a grand-opening send, route WOMEN / MEN / GIRLS / BOYS to a store-filtered PDP or an "in-store exclusive" landing page rather than generic site categories.
- 5. **Increase fine print legibility.** Offer qualifiers should be at least 10px and meet WCAG contrast minimums — currently they read as decorative rather than informational.
- | Priority | Action |
- |---|---|
- | **P0** | Strip `[Test]:` prefix from subject line before any production resend |
- | **P0** | Fix subject line template — insert space/separator between `_V3` and subject copy string |
- | **P1** | Update all `image.emails.skechers.com` `src` attributes from `http://` to `https://` — this is a template-level find-and-replace |
- | **P1** | Update `ink1000.com` open pixel URL from `http://` to `https://` |
- | **P1** | Add `alt=""` to `o.gif`; add descriptive alt text to `49468f73...png` |
- | **P2** | Confirm SPF/DKIM pass via raw header inspection before confirming deliverability |
- | **P2** | Remove duplicate 375px media query block; consolidate `.show` into a single breakpoint |
- | **P2** | Change `-webkit-text-size-adjust: none` to `-webkit-text-size-adjust: 100%` |
- | **P3** | Resolve 26 click-redirect URLs and audit UTM parameter coverage on landing pages |
- | **P3** | Verify Kruxd pixel firing is covered by current subscriber consent/privacy disclosures |

## Full review
## Email Review: Skechers Johnstown Store Opening

---

### 1. Executive Summary

A local store-opening email with a solid promotional hook (buy 2 / get 3rd pair free + free tote bag) that is undermined by two critical production defects: a broken test subject line that leaked into production and raw JSON-LD schema markup appearing in the preview text. These alone disqualify this send from being evaluated as a finished campaign. Setting aside those defects, the email structure is competent but generic — the category shop modules anchor to the general website rather than the new store, diluting the local-event message.

---

### 2. Business Impact Score: **4 / 10**

The defects are disqualifying. A recipient seeing the subject line `[Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026_V3Our New Store...` and a preview of raw JSON-LD code will either dismiss the email as spam/a mistake or lose trust in the brand. The underlying offers are solid — if this had been sent cleanly, the score would be a 6.

---

### 3. What's Working

- **Clear grand-opening headline.** "OPENING TOMORROW" is large, bold, and scannable. Store name, address, and phone number are immediately visible.
- **Strong primary offer.** Buy 2 / Get 3rd Pair Free is a proven promotional mechanic, and the $175+ qualifier is displayed clearly.
- **Free tote bag sweetener.** Surfacing the "$25 VALUE" tote bag as a bonus adds a second reason to visit and photographs well in the email.
- **Category coverage.** Women / Men / Girls / Boys modules give every household member a reason to visit.
- **Utility footer is complete.** App download, Afterpay/Klarna, curbside pickup, and Find a Store are all present.

---

### 4. What's Weak

- **[Test] subject line in production.** The internal content ID (`RET_US_NA_U_STORE1669_ZIP_EN_04162026_V3`) is visible in the subject to every recipient. This is a production defect, not a design choice.
- **Preview text is raw schema markup.** The inbox preview reads as a JSON-LD blob (`{ "@context": "http://schema.org/"...`), destroying the first impression before the email is even opened.
- **Mismatched CTA under the promo.** The buy-2-get-3rd-free block closes with a "GET DIRECTIONS" button — the wrong action for a purchase offer. Should be "SHOP THE OFFER" or "VISIT THE STORE."
- **"NO PURCHASE NECESSARY" on the tote bag** sits directly beneath the buy-2-get-3rd headline, creating momentary confusion about whether the primary offer requires a purchase or not. The two offers need clearer visual separation.
- **Category modules link to the general website.** For a store-opening email, these should prioritize the physical store experience or at minimum a "Shop & Pick Up In Store" frame, not generic e-commerce.
- **Offer fine print is tiny.** The asterisk disclaimer under the buy/get offer is barely legible in the render.

---

### 5. Recommendations

1. **Emergency re-send.** The [Test] subject prefix and JSON-LD preview text must be corrected before any future sends. Establish a QA checklist that validates subject line and preview text in staging before deployment.
2. **Swap the second CTA.** Change "GET DIRECTIONS" under the buy/get offer to "SHOP THE OFFER" or "EXPLORE STYLES."
3. **Separate the tote bag offer visually.** Add a divider or distinct background color between the buy/get block and the tote bag block to prevent offer confusion.
4. **Localize the category CTAs.** For a grand-opening send, route WOMEN / MEN / GIRLS / BOYS to a store-filtered PDP or an "in-store exclusive" landing page rather than generic site categories.
5. **Increase fine print legibility.** Offer qualifiers should be at least 10px and meet WCAG contrast minimums — currently they read as decorative rather than informational.

---

### 6. Bottom Line

The bones of a competent grand-opening email are here, but two critical pre-send defects — the test subject line and the JSON-LD preview bleed — make this a failed deployment. The campaign should not be considered live until those are corrected. Fix the defects, tighten the CTAs, and this becomes a serviceable 6/10 local retail email.

---

### 7. Subject Line Analysis

- **Subject:** `[Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026_V3Our New Store In Johnstown Is Opening Tomorrow!`
- **Length:** 99 characters
- **Scores (1-10):** Clarity `2`, Curiosity `2`, Personalization `3`, Urgency `5`, Specificity `4`
- **Strengths:**
  - The trailing human-readable portion ("Our New Store In Johnstown Is Opening Tomorrow!") is time-specific and local
  - Urgency signal ("Tomorrow") is intact within the readable segment
- **Weaknesses:**
  - `[Test]:` prefix and internal content ID leaked to recipients — disqualifying
  - The human-readable subject is buried 68 characters into the string, past most mobile preview truncation points
- **Alt A:** `Your New Skechers Store Opens Tomorrow in Johnstown — Buy 2, Get 1 Free`
- **Alt B:** `Johnstown, your Skechers is here. Buy 2, Get the 3rd Pair Free — Grand Opening Tomorrow`

---

### 8. Evidence

- **Overall purpose:** Drive foot traffic to a new store opening the following day in Johnstown, CO, via a time-limited buy/get promotional offer.
- **Hero / primary value proposition:** BUY 2, GET THE 3RD PAIR FREE at $175+; store address and "GET DIRECTIONS" CTA above the fold.
- **Membership / benefits section:** None visible. No loyalty program reference.
- **Product discoverability / recommendation modules:** Four gender-based category tiles (Women, Men, Girls, Boys) with shoe imagery and SHOP NOW links; a secondary text-link row adds Kids, Clothing, New Arrivals, and Sale.
- **Utility / secondary modules:** Text-to-subscribe offer, App Store/Google Play download badges, curbside pickup callout, Afterpay/Klarna BNPL logos, Find a Store link, social follow icons.
- **Bugs / friction / clarity issues visible in the render:**
  - `[Test]:` prefix and internal content ID present in subject line
  - Preview text displays raw JSON-LD schema markup instead of editorial copy
  - "GET DIRECTIONS" CTA misplaced under the buy/get promotional block
  - "NO PURCHASE NECESSARY" copy on tote bag offer creates ambiguity when adjacent to the primary purchase-required offer

---

## Technical Audit

## Technical Audit — Skechers Store Opening Email (RET_US_NA_U_STORE1669_ZIP_EN_04162026_V3)

---

### 1. Technical Summary

The email has two production-blocking issues: a `[Test]:` subject line prefix that was not stripped before send, and a malformed subject line where the version token (`_V3`) is concatenated directly to the subject copy. Additionally, all image assets on `image.emails.skechers.com` are served over HTTP rather than HTTPS, risking widespread image suppression in security-enforcing clients.

---

### 2. Link & Tracking Issues

**Severity: Medium**

- **26 tracking links** route through `click.emails.skechers.com` (Salesforce MC click-redirect). Destination URLs and UTM coverage cannot be confirmed without resolving redirects — QA probe was skipped for all 26.
- **ink1000.com open pixel** is served over `http://` (non-secure):
  `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8004129222&mi_ecmp=RET_US_NA_U_STORE1669_ZIP_EN_04162026`
  Open tracking will silently fail in any client that enforces HTTPS-only image loading (Apple Mail with MPP, Outlook.com, Gmail).
- **ReturnPath inbox monitoring pixel** (`pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499`) lacks an explicit protocol in the source — defaults to HTTP in most parsing contexts.
- **Three Kruxd third-party sync pixels** (`beacon.krxd.net`) are present. These fire `1x1_usermatch.gif` and `1x1_ad_impression.gif` on open, syncing `partner_uid` values. Verify these are covered by current consent/data-processing disclosures.

---

### 3. Rendering & Accessibility

**Severity: Medium–High**

**HTTP images — all will be blocked by security-enforcing clients:**

| Asset | URL |
|---|---|
| Skechers logo | `http://image.emails.skechers.com/.../dde00662-169f-447d-b0e2-fc65f6c2290c.png` |
| (unnamed content image) | `http://image.emails.skechers.com/.../49468f73-4651-4af3-bea2-61d1ae5db486.png` |
| App Store badge | `http://image.emails.skechers.com/.../0ec56c9f-eec2-471a-898d-0ca1cea7e115.png` |
| Google Play badge | `http://image.emails.skechers.com/.../9bb508d0-4b38-483d-8459-cf54186a0b9f.png` |
| Curbside Pickup | `http://image.emails.skechers.com/.../00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` |
| AfterPay | `http://image.emails.skechers.com/.../07cb60b5-512b-494d-892d-67dc067289b7.png` |
| Find A Store | `http://image.emails.skechers.com/.../fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` |
| Instagram / Facebook / YouTube | `http://image.emails.skechers.com/...` (3 files) |

The CDN hostname `image.emails.skechers.com` supports HTTPS — this is a template configuration error, not a server limitation.

**Missing alt text:**
- `o.gif` (ink1000.com tracking pixel) — no `alt` attribute at all (should be `alt=""`)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no alt text; will be invisible in image-off rendering

**CSS issues:**
- `@media only screen and (max-width: 375px)` and `@media only screen and (max-width: 640px)` contain **identical rule sets** — the 375px block is entirely redundant and should be removed.
- `.show` is defined in **two separate `<style>` blocks** with conflicting breakpoints (680px in block 1, 480px in block 2) — the 480px rule will win due to cascade order, making the 680px breakpoint dead code.
- `* { -webkit-text-size-adjust: none; }` disables user-initiated text resizing globally — use `100%` instead of `none` to maintain accessibility and avoid App Store guideline violations for iOS.

---

### 4. Personalization & Merge Tokens

**Severity: High (production-blocking)**

- **Subject line has `[Test]:` prefix** — this test qualifier was not stripped before the send: `[Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026_V3Our New Store In Johnstown Is Opening Tomorrow!`
- **Version token concatenated directly to subject copy** — `_V3` is immediately followed by `Our` with no delimiter: `...04162026_V3Our New Store...`. This indicates the campaign ID variable and the subject line string were joined without a separator in the template. The raw campaign ID is leaking into the subscriber-facing subject.
- No unfired `%%variable%%` or `{{handlebars}}` merge tokens observed in the truncated source.

---

### 5. Compliance

**Severity: Medium**

- **SPF/DKIM status unknown** — the QA relay (AgentMail) did not capture `Authentication-Results` headers. SPF/DKIM/DMARC pass status must be confirmed from a full raw header capture (e.g., via Gmail "Show original"). Sending from `no-reply@emails.skechers.com` through what appears to be Salesforce MC — verify the `emails.skechers.com` subdomain has an aligned DKIM signature published.
- CAN-SPAM physical address and unsubscribe mechanism could not be confirmed from the truncated HTML. Both are required — must verify footer is present in full source.

---

### 6. Email-to-Site Continuity

**Severity: Low (unconfirmed)**

All 26 click links route through `click.emails.skechers.com` (SFMC redirect), which should append UTM parameters before hitting the destination. Because the QA probe skipped all redirect-wrapped URLs, UTM coverage on the landing pages is unverified. The campaign ID `RET_US_NA_U_STORE1669_ZIP_EN_04162026` is present in the ink1000 and Kruxd pixels, confirming at least impression-side attribution is wired.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Strip `[Test]:` prefix from subject line before any production resend |
| **P0** | Fix subject line template — insert space/separator between `_V3` and subject copy string |
| **P1** | Update all `image.emails.skechers.com` `src` attributes from `http://` to `https://` — this is a template-level find-and-replace |
| **P1** | Update `ink1000.com` open pixel URL from `http://` to `https://` |
| **P1** | Add `alt=""` to `o.gif`; add descriptive alt text to `49468f73...png` |
| **P2** | Confirm SPF/DKIM pass via raw header inspection before confirming deliverability |
| **P2** | Remove duplicate 375px media query block; consolidate `.show` into a single breakpoint |
| **P2** | Change `-webkit-text-size-adjust: none` to `-webkit-text-size-adjust: 100%` |
| **P3** | Resolve 26 click-redirect URLs and audit UTM parameter coverage on landing pages |
| **P3** | Verify Kruxd pixel firing is covered by current subscriber consent/privacy disclosures |
## Recent history

- [[2026-04-16-test-ret-us-na-u-store1678-zip-en-04162026-v3our-new-store-at-cottman-ave-is-ope]] — 4/10 (2026-04-16)
- [[2026-04-15-test-ret-us-na-u-store1678-zip-en-04162026-v3our-new-store-in-sunset-plaza-is-op]] — 2/10 (2026-04-15)
- [[2026-04-15-test-ret-us-na-u-store1678-zip-en-04162026-v2our-new-store-in-plaza-at-sunset-hi]] — 5/10 (2026-04-15)

