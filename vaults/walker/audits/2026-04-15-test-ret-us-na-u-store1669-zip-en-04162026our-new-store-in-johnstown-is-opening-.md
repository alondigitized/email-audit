---
slug: 2026-04-15-test-ret-us-na-u-store1669-zip-en-04162026our-new-store-in-johnstown-is-opening-
type: email
date: 2026-04-15
persona: walker
score: "3/10"
sender: SKECHERS STORES
subject: "[Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026Our New Store In Johnstown Is Opening Tomorrow!"
tags: [email, score-3, sender/skechers-stores]
---
# [Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026Our New Store In Johnstown Is Opening Tomorrow!
**Score:** 3/10 · **Type:** Email audit · **2026-04-15**
## Executive summary

- This is a store-opening announcement for the new Johnstown, CO location, and the body of the email is solid — clear headline, strong opening offer, and a well-structured category grid. But the email should never have reached any inbox in this state. The subject line contains an exposed internal campaign code and a `[Test]` prefix, and the preview text renders as raw JSON-LD schema markup. These are production-level QA failures that undermine brand credibility before the email is even opened.
- The creative itself would score a 7. The QA failures drag it to a 3. A recipient who sees "[Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026..." in their inbox either deletes immediately or loses confidence in the brand. The revenue opportunity of a grand-opening email is entirely wasted.

## What's working

- **Hero is impossible to miss.** "OPENING TOMORROW" in large bold type with the full address is exactly what this moment needs. Clear, urgent, actionable.
- **Double incentive structure is smart.** Buy 2, Get 3rd Free is a strong traffic driver; the free tote bag (no purchase necessary) lowers the barrier to walk in. Layering both in one email maximizes foot traffic potential.
- **Category grid is well-executed.** Women / Men / Girls / Boys each have a lifestyle photo and a Shop Now CTA. The layout is clean and efficient.
- **Utility section is complete.** App download, Curbside Pickup, BNPL logos (Afterpay, Klarna), and Find a Store are all present without overwhelming the layout.

## What's weak

- **Subject line is a QA escape.** `[Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026Our New Store In Johnstown Is Opening Tomorrow!` — internal campaign code and test prefix are fully visible to recipients.
- **Preview text is broken.** The preheader renders as raw JSON-LD structured data (`{ "@context": "http://schema.org/", "@type": "Organization"...`). This is the first text after the subject line in any inbox preview pane — it reads as gibberish and signals a broken send.
- **"GET DIRECTIONS" CTA appears twice.** Once under the opening announcement and once under the Buy 2 Get 3rd Free offer. The second instance is confusing — directions aren't the natural next action after a promo.
- **Offer dates are small.** The promotional date range for the Buy 2 / Get 3rd Free deal is easy to miss. Urgency framing is an asset here that isn't being maximized.
- **Text link section is redundant.** The "Shop Additional Styles" text links (Women, Men, Kids, Clothing, New Arrivals, Sale) duplicate the visual category modules above without adding value.

## Recommendations

- 1. **Halt and re-send.** If this went to a live list, issue a corrected send. The `[Test]` tag and JSON preheader are disqualifying.
- 2. **Fix the preheader.** The preview text should read something like: *"Free tote bag + Buy 2, Get 3rd Free — visit us tomorrow at Johnstown Plaza."* This is premium real estate.
- 3. **Replace the second "GET DIRECTIONS" with a primary offer CTA.** Something like "CLAIM YOUR FREE PAIR" or "SHOP THE OPENING EVENT" is more conversion-oriented under a promo block.
- 4. **Surface the offer dates more prominently.** Increase font size or add a countdown-style visual callout — limited-time framing drives urgency.
- 5. **Remove the redundant text link section** or collapse it into the footer. The visual category modules above do the job.
- **Block on production send:**
- 1. **Fix subject line** — remove `[Test]:` prefix and resolve the campaign ID concatenation into the display subject; these are two separate defects
- 2. **Fix Return Path pixel URL** — add `https://` protocol to `pixel.app.returnpath.net/pixel.gif?r=...`
- 3. **Verify authentication** — confirm SPF and DKIM are passing via the sending relay before deployment; a failed auth header at this volume risks inbox placement
- **Fix before send:**
- 4. **Migrate all image URLs to HTTPS** — `image.emails.skechers.com` and `ink1000.com` open pixel must use HTTPS; 13 assets affected
- 5. **Add `alt` text** to `49468f73...png` (content image) and `o.gif` (can be `alt=""` for decorative/tracking)
- 6. **Fix `<meta>` tags** — add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to their respective meta elements
- **Fix post-send (next version):**
- 7. **Probe click redirects** — validate UTM parameters survive the `click.emails.skechers.com` redirect chain on a representative sample of links
- 8. **Remove `-webkit-text-size-adjust: none`** or scope it narrowly — global suppression blocks user accessibility controls

## Full review
## Skechers Johnstown Store Opening — Email Review

---

### 1. Executive Summary

This is a store-opening announcement for the new Johnstown, CO location, and the body of the email is solid — clear headline, strong opening offer, and a well-structured category grid. But the email should never have reached any inbox in this state. The subject line contains an exposed internal campaign code and a `[Test]` prefix, and the preview text renders as raw JSON-LD schema markup. These are production-level QA failures that undermine brand credibility before the email is even opened.

---

### 2. Business Impact Score: **3 / 10**

The creative itself would score a 7. The QA failures drag it to a 3. A recipient who sees "[Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026..." in their inbox either deletes immediately or loses confidence in the brand. The revenue opportunity of a grand-opening email is entirely wasted.

---

### 3. What's Working

- **Hero is impossible to miss.** "OPENING TOMORROW" in large bold type with the full address is exactly what this moment needs. Clear, urgent, actionable.
- **Double incentive structure is smart.** Buy 2, Get 3rd Free is a strong traffic driver; the free tote bag (no purchase necessary) lowers the barrier to walk in. Layering both in one email maximizes foot traffic potential.
- **Category grid is well-executed.** Women / Men / Girls / Boys each have a lifestyle photo and a Shop Now CTA. The layout is clean and efficient.
- **Utility section is complete.** App download, Curbside Pickup, BNPL logos (Afterpay, Klarna), and Find a Store are all present without overwhelming the layout.

---

### 4. What's Weak

- **Subject line is a QA escape.** `[Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026Our New Store In Johnstown Is Opening Tomorrow!` — internal campaign code and test prefix are fully visible to recipients.
- **Preview text is broken.** The preheader renders as raw JSON-LD structured data (`{ "@context": "http://schema.org/", "@type": "Organization"...`). This is the first text after the subject line in any inbox preview pane — it reads as gibberish and signals a broken send.
- **"GET DIRECTIONS" CTA appears twice.** Once under the opening announcement and once under the Buy 2 Get 3rd Free offer. The second instance is confusing — directions aren't the natural next action after a promo.
- **Offer dates are small.** The promotional date range for the Buy 2 / Get 3rd Free deal is easy to miss. Urgency framing is an asset here that isn't being maximized.
- **Text link section is redundant.** The "Shop Additional Styles" text links (Women, Men, Kids, Clothing, New Arrivals, Sale) duplicate the visual category modules above without adding value.

---

### 5. Recommendations

1. **Halt and re-send.** If this went to a live list, issue a corrected send. The `[Test]` tag and JSON preheader are disqualifying.
2. **Fix the preheader.** The preview text should read something like: *"Free tote bag + Buy 2, Get 3rd Free — visit us tomorrow at Johnstown Plaza."* This is premium real estate.
3. **Replace the second "GET DIRECTIONS" with a primary offer CTA.** Something like "CLAIM YOUR FREE PAIR" or "SHOP THE OPENING EVENT" is more conversion-oriented under a promo block.
4. **Surface the offer dates more prominently.** Increase font size or add a countdown-style visual callout — limited-time framing drives urgency.
5. **Remove the redundant text link section** or collapse it into the footer. The visual category modules above do the job.

---

### 6. Bottom Line

Great creative trapped inside a broken send. The opening event had real momentum — strong offer, clean design, good incentive stack — but it arrived in inboxes with test artifacts in plain view. Fix the QA process so deployment checks strip internal codes and validate preheader content before any send reaches a live list.

---

### 7. Subject Line Analysis

- **Subject:** `[Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026Our New Store In Johnstown Is Opening Tomorrow!`
- **Length:** 87 characters
- **Scores (1-10):** Clarity `2`, Curiosity `1`, Personalization `3`, Urgency `5`, Specificity `4`
- **Strengths:**
  - The tail end ("Our New Store In Johnstown Is Opening Tomorrow!") is genuinely clear and location-specific
  - "Tomorrow" creates inherent urgency
- **Weaknesses:**
  - Internal campaign code and `[Test]` prefix render this unsendable in its current form
  - No offer mention — the Buy 2 Get 3rd Free and free tote bag are stronger hooks than a location announcement alone
- **Alt A:** `Johnstown: We Open Tomorrow — Buy 2, Get 3rd Pair Free`
- **Alt B:** `Your New Skechers Is Opening Tomorrow + Free Tote Bag (No Purchase Needed)`

---

### 8. Evidence

- **Overall purpose:** Grand opening announcement for the Skechers store at Johnstown Plaza, 4910 Thompson Parkway, Johnstown, CO 80534.
- **Hero / primary value proposition:** Full-width "OPENING TOMORROW" banner with address and Get Directions CTA. Strong visual hierarchy.
- **Membership / benefits section:** None present. No loyalty program mention.
- **Product discoverability / recommendation modules:** Four category tiles (Women, Men, Girls, Boys) each with a lifestyle photo and Shop Now CTA. Effective and proportional.
- **Utility / secondary modules:** App download (App Store + Google Play), Curbside Pickup, BNPL (Afterpay, Klarna), Find a Store, social follow icons. All functional.
- **Bugs / friction / clarity issues:**
  - `[Test]` prefix and internal campaign code visible in subject line
  - Preview/preheader text renders as raw JSON schema markup — confirmed visible in the email metadata shown
  - Second "GET DIRECTIONS" CTA beneath the promo module feels misplaced

---

## Technical Audit

## Technical Audit — Skechers Store Opening Email

**From:** `no-reply@emails.skechers.com` | **Campaign:** `RET_US_NA_U_STORE1669_ZIP_EN_04162026`

---

### 1. Technical Summary

Thirteen content images are served over HTTP rather than HTTPS, creating a systemic mixed-content risk that will trigger security warnings or image suppression in most modern email clients. A protocol-less Return Path pixel URL and an unstripped `[Test]:` subject prefix are additional blocking issues for production send.

---

### 2. Link & Tracking Issues

| Severity | Issue | Evidence |
|---|---|---|
| HIGH | Return Path pixel missing protocol entirely — will resolve as relative path and silently fail | `src="pixel.app.returnpath.net/pixel.gif?r=964ce..."` (no `http://` or `https://`) |
| WARN | ink1000 open-tracking pixel served over HTTP | `src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?..."` |
| INFO | 26 click-redirect links via `click.emails.skechers.com` could not be probed | QA finding — destination URLs and UTM parameters unverified |

The Krxd user-match beacons (`beacon.krxd.net`) are served over HTTPS and structurally valid, though their presence should be confirmed against current consent/data-sharing agreements.

---

### 3. Rendering & Accessibility

**HTTP image sources (will be blocked or trigger warnings in Gmail, Apple Mail, Outlook):**

All 12 content images are hosted on `http://image.emails.skechers.com` — no HTTPS. Affected images include navigational and transactional assets:

- Skechers logo: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png`
- App Store badge, Google Play badge, Curbside Pickup, AfterPay, Find A Store, Instagram, Facebook, YouTube icons — all same HTTP host

**Missing `alt` text (2 images):**
- `o.gif` — ink1000 tracking pixel (`src: http://www.ink1000.com/...`)
- `49468f73-4651-4af3-bae2-61d1ae5db486.png` — unlabeled content image

**Meta tag defects:**
- `<meta content="text/html; charset=utf-8" />` — missing required `http-equiv="Content-Type"` attribute; charset declaration may be ignored
- `<meta content="IE=Edge" />` — missing `http-equiv="X-UA-Compatible"`; IE conditional rendering hint will not apply

**Accessibility flag:**
- `-webkit-text-size-adjust: none` applied globally suppresses user font-size scaling on iOS — violates WCAG 1.4.4 (Resize Text)

---

### 4. Personalization & Merge Tokens

| Severity | Issue | Evidence |
|---|---|---|
| HIGH | `[Test]:` prefix present in subject line — must be stripped before production deploy | `Subject: [Test]: RET_US_NA_U_STORE1669_ZIP_EN_04162026Our New Store...` |
| HIGH | Raw campaign ID concatenated directly into subject with no delimiter or space | `RET_US_NA_U_STORE1669_ZIP_EN_04162026Our New Store...` — appears to be a merge failure; campaign ID bled into display subject |
| INFO | Campaign ID correctly propagated to Krxd beacon and ink1000 pixel | `campaignid=RET_US_NA_U_STORE1669_ZIP_EN_04162026` — consistent |

The subject line concatenation strongly suggests the campaign ID was not properly scoped away from the display subject field, not merely a test-mode label.

---

### 5. Compliance

| Area | Finding |
|---|---|
| SPF/DKIM | `Authentication-Results` header not present via AgentMail relay — SPF and DKIM pass/fail status unverifiable from this sample |
| Unsubscribe | HTML source is truncated; presence of a CAN-SPAM-compliant unsubscribe mechanism and physical mailing address cannot be confirmed from the provided excerpt |
| Reply-To | Sender is `no-reply@emails.skechers.com` — CAN-SPAM requires a functioning opt-out mechanism; ensure the unsubscribe path in the body is operational if no reply-to is set |

**Action required:** Obtain full HTML and verify footer contains: (1) one-click unsubscribe or clear opt-out instructions, and (2) valid physical postal address.

---

### 6. Email-to-Site Continuity

Cannot fully audit — all 26 outbound links route through `click.emails.skechers.com` redirect and were not probed. UTM parameter presence on final landing URLs is unconfirmed.

**Risk:** If the click-redirect strips or drops UTM parameters, store-opening campaign traffic will be unattributable in analytics. Recommend probing a sample of redirect chains from the rendered email before send.

---

### 7. Recommendations

**Block on production send:**
1. **Fix subject line** — remove `[Test]:` prefix and resolve the campaign ID concatenation into the display subject; these are two separate defects
2. **Fix Return Path pixel URL** — add `https://` protocol to `pixel.app.returnpath.net/pixel.gif?r=...`
3. **Verify authentication** — confirm SPF and DKIM are passing via the sending relay before deployment; a failed auth header at this volume risks inbox placement

**Fix before send:**
4. **Migrate all image URLs to HTTPS** — `image.emails.skechers.com` and `ink1000.com` open pixel must use HTTPS; 13 assets affected
5. **Add `alt` text** to `49468f73...png` (content image) and `o.gif` (can be `alt=""` for decorative/tracking)
6. **Fix `<meta>` tags** — add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to their respective meta elements

**Fix post-send (next version):**
7. **Probe click redirects** — validate UTM parameters survive the `click.emails.skechers.com` redirect chain on a representative sample of links
8. **Remove `-webkit-text-size-adjust: none`** or scope it narrowly — global suppression blocks user accessibility controls
## Recent history

- [[2026-04-15-test-mkg-us-na-u-best-full-en-04162026-v2loved-reviewed-and-ready-for-your-close]] — 5/10 (2026-04-15)
- [[2026-04-15-test-mkg-us-na-u-best-full-en-04162026loved-reviewed-and-ready-for-your-closet]] — 4/10 (2026-04-15)
- [[2026-04-15-test-mkg-us-na-u-multi-full-en-04162026loved-reviewed-and-ready-for-your-closet]] — 5/10 (2026-04-15)

