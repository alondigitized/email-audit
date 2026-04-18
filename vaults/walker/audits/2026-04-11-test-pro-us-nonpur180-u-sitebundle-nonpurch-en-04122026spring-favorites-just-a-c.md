---
slug: 2026-04-11-test-pro-us-nonpur180-u-sitebundle-nonpurch-en-04122026spring-favorites-just-a-c
type: email
date: 2026-04-10
persona: walker
score: "3/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04122026Spring Favorites - Just a Click Away & BOGO 50% off"
tags: [email, score-3, sender/skechers]
---
# [Test]: PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04122026Spring Favorites - Just a Click Away & BOGO 50% off
**Score:** 3/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- The inbox experience is broken before the recipient even opens it. The body, while functional, doesn't recover enough value to compensate.

## What's working

- **Offer clarity in the hero.** "BUY ONE, GET ONE 50% OFF or 20% off 1 item" is legible, high-contrast, and visually dominant. The sale banner framing ("Spring Fling Sale") is clean.
- **Four-category grid is efficient.** Women's / Men's / Girls' / Boys' modules each carry a product shot and a direct shop CTA. The layout is uncluttered.
- **Product photography is strong.** Shoes are well-lit, on-brand, and seasonally appropriate (sandals, light sneakers).
- **Utility footer is complete.** App download, curbside pickup, BNPL, and store finder are all present and functional-looking.

## What's weak

- **`[Test]:` subject prefix.** If this reached a live segment, it signals an internal QA email deployed in error — catastrophic for brand trust.
- **Preview text is raw JSON schema markup.** The full `@context / @type / Organization / logo` JSON object renders as the inbox snippet. Recipients see code gibberish instead of a selling message.
- **No personalization or urgency.** For a non-purchaser re-engagement send, there is no first name, no "you haven't shopped yet" hook, no deadline on the offer. This is as generic as a broadcast blast.
- **Body copy is near-zero.** Outside the offer callout, there is essentially no copy — no reason to act, no product story, nothing to differentiate this email from a homepage screenshot.
- **"GET TESTING" label in the utility section.** This reads as a placeholder or QA artifact that was not replaced before send.
- **Offer mechanics are ambiguous.** "50% off" or "20% off 1 item" — two different offers with no explanation of how to qualify for either. Recipient must guess.

## Recommendations

- 1. **Block send immediately if live.** The `[Test]:` subject and JSON preview text make this unsendable to consumers. Fix QA deployment gates to prevent test templates from reaching live lists.
- 2. **Replace preview text with a human-readable hook.** Lead with the offer: *"Buy one, get one 50% off — your spring shoes are waiting."*
- 3. **Clarify the offer split.** Add a single line of copy explaining which offer applies when. Ambiguous discounts reduce conversion.
- 4. **Add a deadline.** Even "This weekend only" or "Ends Sunday" meaningfully lifts urgency for a BOGO promotion.
- 5. **Audit the utility section.** Remove or replace the "GET TESTING" placeholder before any resend.
- 6. **Add one sentence of personalized copy** — even segment-level messaging ("You haven't bought from us yet — here's a reason to start") does measurable work on non-purchaser lists.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Empty greeting `"Hi ,"` | Add a SFMC fallback: `%%=IIF(EMPTY(FirstName),"there",FirstName)=%%`. Retest before live send. |
- | **P0** | `[Test]:` + raw campaign ID in subject | Strip test prefix and fix subject line spacing before production deployment. |
- | **P1** | 12 images on `http://image.emails.skechers.com` | Update CDN base URL to HTTPS across the master template. Affects rendering in Gmail and all proxied clients. |
- | **P1** | `ink1000.com` tracking pixel on HTTP | Switch to HTTPS endpoint or remove if redundant with SFMC open tracker. |
- | **P1** | SPF/DKIM unconfirmed | Verify authentication via a direct inbox receive before live send; confirm DMARC `p=` policy covers `emails.skechers.com` subdomain. |
- | **P2** | Missing `alt` on content image `49468f73...` | Add descriptive `alt` text for screen reader and images-off rendering. |
- | **P2** | UTM params unverified | Manually follow 2–3 representative CTAs to confirm UTM chain is intact on landing pages. |
- | **P3** | Duplicate `@media (max-width: 375px)` block | Remove redundant CSS block; identical rules already covered by the 640px breakpoint. |

## Full review
## 2. Business Impact Score: 3/10

The inbox experience is broken before the recipient even opens it. The body, while functional, doesn't recover enough value to compensate.

---

## 3. What's Working

- **Offer clarity in the hero.** "BUY ONE, GET ONE 50% OFF or 20% off 1 item" is legible, high-contrast, and visually dominant. The sale banner framing ("Spring Fling Sale") is clean.
- **Four-category grid is efficient.** Women's / Men's / Girls' / Boys' modules each carry a product shot and a direct shop CTA. The layout is uncluttered.
- **Product photography is strong.** Shoes are well-lit, on-brand, and seasonally appropriate (sandals, light sneakers).
- **Utility footer is complete.** App download, curbside pickup, BNPL, and store finder are all present and functional-looking.

---

## 4. What's Weak

- **`[Test]:` subject prefix.** If this reached a live segment, it signals an internal QA email deployed in error — catastrophic for brand trust.
- **Preview text is raw JSON schema markup.** The full `@context / @type / Organization / logo` JSON object renders as the inbox snippet. Recipients see code gibberish instead of a selling message.
- **No personalization or urgency.** For a non-purchaser re-engagement send, there is no first name, no "you haven't shopped yet" hook, no deadline on the offer. This is as generic as a broadcast blast.
- **Body copy is near-zero.** Outside the offer callout, there is essentially no copy — no reason to act, no product story, nothing to differentiate this email from a homepage screenshot.
- **"GET TESTING" label in the utility section.** This reads as a placeholder or QA artifact that was not replaced before send.
- **Offer mechanics are ambiguous.** "50% off" or "20% off 1 item" — two different offers with no explanation of how to qualify for either. Recipient must guess.

---

## 5. Recommendations

1. **Block send immediately if live.** The `[Test]:` subject and JSON preview text make this unsendable to consumers. Fix QA deployment gates to prevent test templates from reaching live lists.
2. **Replace preview text with a human-readable hook.** Lead with the offer: *"Buy one, get one 50% off — your spring shoes are waiting."*
3. **Clarify the offer split.** Add a single line of copy explaining which offer applies when. Ambiguous discounts reduce conversion.
4. **Add a deadline.** Even "This weekend only" or "Ends Sunday" meaningfully lifts urgency for a BOGO promotion.
5. **Audit the utility section.** Remove or replace the "GET TESTING" placeholder before any resend.
6. **Add one sentence of personalized copy** — even segment-level messaging ("You haven't bought from us yet — here's a reason to start") does measurable work on non-purchaser lists.

---

## 6. Bottom Line

The email body is a competent but unremarkable category grid. The real damage is in the inbox: a test subject line and broken JSON preview text would cause mass deletions or unsubscribes before anyone sees the offer. Do not send this to consumers in its current state. Fix the inbox layer first, then revisit the copy strategy for the non-purchaser segment.

---

## 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Non-purchaser re-engagement built around a Spring BOGO/discount promotion; drives to gender-specific category pages |
| **Hero / primary value prop** | Green "Spring Fling Sale" banner + BOGO 50% off callout with "SHOP NOW" CTA — visible, well-structured, but offer terms are split without explanation |
| **Membership / benefits** | Not present |
| **Product discoverability** | Four modules (Women's, Men's, Girls', Boys') each with a product image and shop CTA; covers the full catalog grid but offers zero curation or recommendation logic |
| **Utility / secondary modules** | App download (iOS + Android), curbside pickup, BNPL (Afterpay/Klarna logos visible), find a store, social follow — standard footer set, all present |
| **Bugs / friction / clarity issues** | (1) Subject line contains `[Test]:` prefix; (2) Preview text renders as raw JSON schema code; (3) "GET TESTING" placeholder visible in utility section |

---

## Technical Audit

## Technical Audit — SKECHERS Spring Favorites / BOGO 50% off
**From:** no-reply@emails.skechers.com | **Campaign:** PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04122026

---

### 1. Technical Summary

This is a test send with a broken personalization token and a systemic HTTP image-hosting issue affecting 13+ assets. Authentication header data was unavailable via the relay, leaving deliverability status unconfirmed.

---

### 2. Link & Tracking Issues

**[WARN] 27 click-wrapped links not probed** — All CTAs route through `click.emails.skechers.com` redirect domain. Destination URLs and UTM parameter completeness could not be verified programmatically.

**[INFO] Multiple third-party tracking pixels present** — four pixels fire on open:
- `click.emails.skechers.com/open.aspx` — SFMC open tracker
- `beacon.krxd.net/1x1_usermatch.gif` (×2) — Salesforce Krux DMP user-match; sends hashed subscriber ID (`partner_uid=84890007`) and SHA-256 email hash to third-party data network
- `beacon.krxd.net/1x1_ad_impression.gif` — Krux ad impression beacon
- `pixel.app.returnpath.net/pixel.gif` — inbox placement monitoring
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — secondary open tracker, **HTTP only** (see §3)

No broken destination links were detected in the HTML structure itself.

---

### 3. Rendering & Accessibility

**[FAIL] 13 images served over HTTP, not HTTPS** — Modern email clients (Gmail, Apple Mail, Outlook 365) block mixed-content images or proxy them, stripping tracking. Affected hosts:

| Host | Assets |
|---|---|
| `http://image.emails.skechers.com/...` | Logo, footer icons (App Store, Google Play, Curbside Pickup, AfterPay, Find A Store, Instagram, Facebook, YouTube) — 12 images |
| `http://www.ink1000.com/...` | `o.gif` tracking pixel |

All `http://image.emails.skechers.com` references should be `https://image.emails.skechers.com` — this appears to be a template-level misconfiguration, not a CDN limitation.

**[WARN] 2 images missing `alt` text:**
- `http://image.emails.skechers.com/.../49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no `alt`; will render as blank when images are off
- `o.gif` (ink1000 tracking pixel) — missing `alt=""`; minor, but should be explicitly empty for screen reader hygiene

**[INFO] `-webkit-text-size-adjust: none`** is set globally. This suppresses iOS auto-font-scaling but can reduce legibility on small viewports if base font sizes are not already mobile-appropriate.

**[INFO] Duplicate media query blocks** — `@media (max-width: 640px)` and `@media (max-width: 375px)` declare identical rule sets; the 375px block is entirely redundant and adds parse weight.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty name field in greeting** — QA detected a rendered output of `"Hi ,"` — the first-name merge token resolved to an empty string. This is the highest-severity issue in this send. Evidence: QA finding `Empty greeting slot: Greeting has empty name field (e.g. "Hi ,")`.

Root cause is likely one of: (a) no fallback value set on the merge field (e.g., SFMC `%%=IIF(EMPTY(FirstName), "there", FirstName)=%%`), or (b) test seed address has no `FirstName` attribute populated.

No other visible unfired merge tokens were detected in the truncated source.

---

### 5. Compliance

**[WARN] SPF/DKIM status unverifiable** — `Authentication-Results` header was absent from the message as received via the AgentMail relay. Cannot confirm SPF pass, DKIM signature validity, or DMARC alignment. Should be confirmed against a direct inbox receipt (Gmail "Show original" → `Authentication-Results`).

**[INFO] `[Test]:` prefix in subject line** — Subject reads `[Test]: PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04122026Spring Favorites...`. The raw internal campaign ID is also exposed in the subject string with no space separator before "Spring Favorites". This is expected for a test send but **must not reach live subscriber lists**.

**[INFO] CAN-SPAM unsubscribe and physical address** — Not verifiable from the truncated HTML. The footer was cut off; requires full-source review to confirm presence of one-click unsubscribe link and postal address.

---

### 6. Email-to-Site Continuity

**[WARN] UTM parameters unverifiable** — All 27 CTAs are wrapped in `click.emails.skechers.com` redirects; final destination URLs and UTM parameter completeness (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) cannot be confirmed without following the redirect chain. The `campaignid` value `PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04122026` appears in Krux beacon params and the subject line, suggesting tracking IDs are consistent — but landing page UTM strings should be spot-checked against the campaign name before live send.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Empty greeting `"Hi ,"` | Add a SFMC fallback: `%%=IIF(EMPTY(FirstName),"there",FirstName)=%%`. Retest before live send. |
| **P0** | `[Test]:` + raw campaign ID in subject | Strip test prefix and fix subject line spacing before production deployment. |
| **P1** | 12 images on `http://image.emails.skechers.com` | Update CDN base URL to HTTPS across the master template. Affects rendering in Gmail and all proxied clients. |
| **P1** | `ink1000.com` tracking pixel on HTTP | Switch to HTTPS endpoint or remove if redundant with SFMC open tracker. |
| **P1** | SPF/DKIM unconfirmed | Verify authentication via a direct inbox receive before live send; confirm DMARC `p=` policy covers `emails.skechers.com` subdomain. |
| **P2** | Missing `alt` on content image `49468f73...` | Add descriptive `alt` text for screen reader and images-off rendering. |
| **P2** | UTM params unverified | Manually follow 2–3 representative CTAs to confirm UTM chain is intact on landing pages. |
| **P3** | Duplicate `@media (max-width: 375px)` block | Remove redundant CSS block; identical rules already covered by the 640px breakpoint. |
## Recent history

- [[2026-04-10-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04122026styles-made-for-spring-weeken]] — 4/10 (2026-04-10)
- [[2026-04-10-test-pro-us-na-u-sitebundle-full-en-04122026-v3styles-made-for-spring-weekends]] — 4/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-na-w-seasonal-gender-en-04112026-v5the-perfect-pair-or-2-for-her]] — 5/10 (2026-04-10)

