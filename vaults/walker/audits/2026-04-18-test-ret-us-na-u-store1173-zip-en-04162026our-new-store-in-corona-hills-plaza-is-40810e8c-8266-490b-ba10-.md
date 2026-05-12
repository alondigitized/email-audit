---
slug: 2026-04-18-test-ret-us-na-u-store1173-zip-en-04162026our-new-store-in-corona-hills-plaza-is-40810e8c-8266-490b-ba10-
type: email
date: 2026-04-15
persona: walker
score: "5/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026Our New Store In Corona Hills Plaza Is Opening Tomorrow!"
tags: [email, score-5, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026Our New Store In Corona Hills Plaza Is Opening Tomorrow!
**Score:** 5/10 · **Type:** Email audit · **2026-04-15**
## Executive summary

- Functional but not memorable. The offer is compelling; the execution and subject line are both problematic.

## What's working

- **Clear headline hierarchy.** "Opening Tomorrow / Corona Hills Plaza / 390 North McKinley Street, Corona, CA 92879" — address is right in the email, no hunting required.
- **Strong anchor offer.** "Buy 2, Get the 3rd Pair Free" with a date range (04/17–04/28) is specific and urgent. Free tote bag as a second sweetener adds value without diluting the main CTA.
- **CTA clarity.** "Get Directions" appears twice above the fold — exactly right for a store-opening email where foot traffic is the KPI.
- **Category grid coverage.** Women / Girls / Boys segments are visually distinct and browsable, giving recipients multiple entry points if they're not ready to drive in tomorrow.

## What's weak

- **Subject line is in broken test/QA state** — visible in the preview text ("[@context]": "http://schema.org/ ...") which is raw JSON schema markup leaking into the inbox preview. This is a severe deliverability and trust signal.
- **No personalization above the fold.** The email opens cold — no name, no reference to a nearby zip code or prior purchase. For a local store opening, "Your new Skechers store is 2 miles away" would be far more compelling.
- **Tote bag CTA is oddly small.** The "& Get a Free Tote Bag — No Purchase Necessary, A $25 Value" module is visually undersized compared to the BOGO banner. A free bag with no purchase required is a massive hook — it deserves bigger treatment.
- **Category modules are generic.** The Women/Girls/Boys product tiles are indistinguishable from any Skechers broadcast email. There's no "shop what's available in-store at Corona Hills" angle to reinforce the local relevance.
- **Shop Additional Styles text links** (Women, Men, Kids, Clothing, New Arrivals, Sale) are low-visibility plain text at the bottom — easy to miss.

## Recommendations

- 1. **Hold this email until the subject line is fixed.** The "[Test]:" prefix and raw JSON in preview text must be stripped before any real send.
- 2. **Lead with the free tote.** "Free Tote Bag, No Purchase Required" is a zero-friction hook. Put it above or alongside the BOGO, not below it.
- 3. **Add location proximity copy.** Even a single line — "Opening tomorrow near you in Corona" — dramatically increases open-rate relevance for recipients who were zip-targeted.
- 4. **Give the BOGO a local angle.** "Shop the Grand Opening, Get Your 3rd Pair Free" ties the offer to the event rather than making it feel like a generic promotion that happens to have a store address appended.
- 5. **Promote the App/Klarna/Afterpay higher.** These are buried in the footer. For a high-AOV BOGO event, installment payment options directly increase basket size.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | P0 | Subject line concatenation bug | Fix template separator between campaign ID and subject copy before production send |
- | P0 | All `image.emails.skechers.com` on HTTP | Change all `src="http://image.emails.skechers.com/..."` to `https://` |
- | P0 | `ink1000.com` pixel on HTTP | Change to `https://` or remove if redundant with SFMC open pixel |
- | P1 | Authentication-Results unverified | Confirm SPF/DKIM pass on production received headers before send |
- | P1 | CAN-SPAM footer unconfirmed | Verify postal address and unsubscribe link present in full HTML |
- | P1 | Missing `alt` attributes | Add `alt=""` to decorative tracking pixels; add descriptive alt to content images |
- | P2 | `-webkit-text-size-adjust: none` | Change to `100%` for WCAG 1.4.4 compliance |
- | P2 | Duplicate media query blocks | Consolidate the `375px` and `640px` blocks to reduce payload |
- | P3 | UTM params on destination URLs | Inspect 26 click links to confirm UTM coverage |

## Full review
## 2. Business Impact Score: **5 / 10**

Functional but not memorable. The offer is compelling; the execution and subject line are both problematic.

---

## 3. What's Working

- **Clear headline hierarchy.** "Opening Tomorrow / Corona Hills Plaza / 390 North McKinley Street, Corona, CA 92879" — address is right in the email, no hunting required.
- **Strong anchor offer.** "Buy 2, Get the 3rd Pair Free" with a date range (04/17–04/28) is specific and urgent. Free tote bag as a second sweetener adds value without diluting the main CTA.
- **CTA clarity.** "Get Directions" appears twice above the fold — exactly right for a store-opening email where foot traffic is the KPI.
- **Category grid coverage.** Women / Girls / Boys segments are visually distinct and browsable, giving recipients multiple entry points if they're not ready to drive in tomorrow.

---

## 4. What's Weak

- **Subject line is in broken test/QA state** — visible in the preview text ("[@context]": "http://schema.org/ ...") which is raw JSON schema markup leaking into the inbox preview. This is a severe deliverability and trust signal.
- **No personalization above the fold.** The email opens cold — no name, no reference to a nearby zip code or prior purchase. For a local store opening, "Your new Skechers store is 2 miles away" would be far more compelling.
- **Tote bag CTA is oddly small.** The "& Get a Free Tote Bag — No Purchase Necessary, A $25 Value" module is visually undersized compared to the BOGO banner. A free bag with no purchase required is a massive hook — it deserves bigger treatment.
- **Category modules are generic.** The Women/Girls/Boys product tiles are indistinguishable from any Skechers broadcast email. There's no "shop what's available in-store at Corona Hills" angle to reinforce the local relevance.
- **Shop Additional Styles text links** (Women, Men, Kids, Clothing, New Arrivals, Sale) are low-visibility plain text at the bottom — easy to miss.

---

## 5. Recommendations

1. **Hold this email until the subject line is fixed.** The "[Test]:" prefix and raw JSON in preview text must be stripped before any real send.
2. **Lead with the free tote.** "Free Tote Bag, No Purchase Required" is a zero-friction hook. Put it above or alongside the BOGO, not below it.
3. **Add location proximity copy.** Even a single line — "Opening tomorrow near you in Corona" — dramatically increases open-rate relevance for recipients who were zip-targeted.
4. **Give the BOGO a local angle.** "Shop the Grand Opening, Get Your 3rd Pair Free" ties the offer to the event rather than making it feel like a generic promotion that happens to have a store address appended.
5. **Promote the App/Klarna/Afterpay higher.** These are buried in the footer. For a high-AOV BOGO event, installment payment options directly increase basket size.

---

## 6. Bottom Line

Solid bones, sloppy execution. The BOGO + free tote combination is genuinely strong for a store opening. But the subject line QA failure is disqualifying — if this went live as-is, it would be a brand incident. Fix the subject line, promote the free tote, and add one line of local personalization. The email would go from a 5 to a 7.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026Our New Store In Corona Hills Plaza Is Opening Tomorrow!`
- **Length:** 100 characters
- **Scores (1-10):** Clarity `2`, Curiosity `4`, Personalization `3`, Urgency `6`, Specificity `6`
- **Strengths:**
  - The trailing portion ("Our New Store In Corona Hills Plaza Is Opening Tomorrow!") is genuinely urgent and specific
  - Location name is mentioned, which aids recognition for local recipients
- **Weaknesses:**
  - `[Test]:` prefix and internal campaign code (`RET_US_NA_U_STORE1173_ZIP_EN_04162026`) are fully exposed — this is a QA artifact that should never reach recipients
  - Subject line exceeds typical display length; the meaningful part is cut off in most clients
- **Alt A:** `Your new Skechers opens tomorrow — Corona Hills Plaza`
- **Alt B:** `Grand Opening tomorrow: Buy 2, Get 1 Free + free tote bag`

---

## 8. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Grand opening announcement for a single physical store; foot-traffic and directions are the primary KPI |
| **Hero / primary value prop** | "Opening Tomorrow" + full store address + "Get Directions" CTA — clear and scannable |
| **Offer module** | Buy 2 Get 3rd Pair Free (04/17–04/28), offer-valid-at-this-store disclaimer visible below |
| **Secondary offer** | Free tote bag, no purchase required, $25 value — undersized module, strong hook underutilized |
| **Category modules** | Women, Girls, Boys — each with product imagery and "Shop Now" CTA; Men handled via text links only |
| **Utility / footer** | App download (App Store + Google Play), Curbside Pickup, Find a Store, Afterpay, Klarna, social icons, full legal fine print |
| **Bugs / friction** | Preview text shows raw JSON-LD schema markup — visible in inbox before open; subject line contains internal QA tokens |

---

## Technical Audit

## Technical Audit — Skechers Corona Hills Store Opening Email

### 1. Technical Summary

The email has a pervasive HTTP/HTTPS mixed-content problem affecting 13+ images, a likely subject-line template concatenation bug, and unverified sender authentication. No hard failures, but the HTTP image issue will cause broken images in modern clients.

---

### 2. Link & Tracking Issues

**26 click-redirect links** route through `click.emails.skechers.com` — standard SFMC behavior, not inspectable without live relay. No broken destination URLs could be confirmed from the truncated source.

**Five tracking pixels present:**
- `click.emails.skechers.com/open.aspx` — standard open pixel (HTTPS, OK)
- `beacon.krxd.net/1x1_usermatch.gif` (×2) — Salesforce Audience Studio DMP sync (HTTPS, OK)
- `beacon.krxd.net/1x1_ad_impression.gif` — impression beacon (HTTPS, OK)
- `pixel.app.returnpath.net/pixel.gif` — Validity inbox monitoring (HTTPS, OK)
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — **HTTP only; will be blocked by Gmail, Outlook 365, and Apple Mail** (see §3)

No issues with pixel quantity, but the `ink1000.com` pixel is a mixed-content violation and a deliverability risk if it triggers security filters.

---

### 3. Rendering & Accessibility

**Mixed-content (HTTP image sources) — affects 13 assets:**

All `image.emails.skechers.com` assets and the `ink1000.com` pixel use `http://`. Gmail proxies images through its own cache and will upgrade some, but Outlook desktop and Apple Mail on iOS 15+ will block HTTP images by default.

Affected assets (representative):
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png  (no alt)
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif  (tracking pixel, no alt)
```
All `image.emails.skechers.com` links should be `https://` — the CDN almost certainly supports TLS already.

**Missing `alt` text:**
- `o.gif` (`ink1000.com`) — no `alt` attribute
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no `alt` attribute

Decorative images should carry `alt=""` explicitly so screen readers skip them. Content images need descriptive alt text.

**CSS `-webkit-text-size-adjust: none`** is set globally. This suppresses font scaling on iOS, which is an accessibility concern (WCAG 1.4.4). Use `100%` instead of `none`.

**Duplicate responsive breakpoints:** The same ruleset is declared twice — once for `max-width: 375px` and once for `max-width: 640px`. This is redundant and adds ~1 KB to a file already under parsing pressure in Outlook. Not a hard bug, but worth cleaning.

---

### 4. Personalization & Merge Tokens

**Subject line concatenation bug — high confidence:**

```
[Test]: RET_US_NA_U_STORE1173_ZIP_EN_04162026Our New Store In Corona Hills Plaza Is Opening Tomorrow!
```

The campaign ID `RET_US_NA_U_STORE1173_ZIP_EN_04162026` runs directly into the subject copy with no space or delimiter. This is consistent with a template like `%%campaignid%%%%subject%%` missing a separator, or a subject-line build script that concatenated fields without a space. The subject line as sent to recipients would render identically broken if this is not a test-only override.

**`[Test]:` prefix in subject** — either intentional for the test send (acceptable) or a template variable `%%testprefix%%` that resolved to a literal string. Confirm this is stripped in production.

**Preheader** (`Buy 2 Pairs, Get the 3rd Free + a Free Tote`) — correctly hidden via `display:none !important`, no issues.

No unresolved `%%merge_token%%` literals visible in the truncated source.

---

### 5. Compliance

**Authentication — unverified:**
QA reports `Authentication-Results` header not found via the AgentMail relay. SPF and DKIM status are unknown. Sending domain is `emails.skechers.com`; a DMARC policy should be in place and verifiable. This must be confirmed against actual received headers before deployment.

**CAN-SPAM / unsubscribe:** The HTML source is truncated and the footer is not visible. Cannot confirm presence of physical mailing address or one-click unsubscribe. These are mandatory. Recommend QA tool explicitly checks for `list-unsubscribe` header and footer postal address on every send.

---

### 6. Email-to-Site Continuity

26 click-redirect links were skipped by the automated probe (correct behavior for redirect chains). UTM parameter presence on destination URLs **cannot be confirmed** from this source. Given the campaign ID is `RET_US_NA_U_STORE1173_ZIP_EN_04162026`, verify that destination URLs carry at minimum:
- `utm_source=email`
- `utm_medium=email`
- `utm_campaign=RET_US_NA_U_STORE1173_ZIP_EN_04162026` (or equivalent)

Without live link inspection, this is unverified.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| P0 | Subject line concatenation bug | Fix template separator between campaign ID and subject copy before production send |
| P0 | All `image.emails.skechers.com` on HTTP | Change all `src="http://image.emails.skechers.com/..."` to `https://` |
| P0 | `ink1000.com` pixel on HTTP | Change to `https://` or remove if redundant with SFMC open pixel |
| P1 | Authentication-Results unverified | Confirm SPF/DKIM pass on production received headers before send |
| P1 | CAN-SPAM footer unconfirmed | Verify postal address and unsubscribe link present in full HTML |
| P1 | Missing `alt` attributes | Add `alt=""` to decorative tracking pixels; add descriptive alt to content images |
| P2 | `-webkit-text-size-adjust: none` | Change to `100%` for WCAG 1.4.4 compliance |
| P2 | Duplicate media query blocks | Consolidate the `375px` and `640px` blocks to reduce payload |
| P3 | UTM params on destination URLs | Inspect 26 click links to confirm UTM coverage |
