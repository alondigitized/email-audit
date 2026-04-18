---
slug: 2026-04-10-test-mkg-us-nonpurclick-u-slipin-nonpurch-en-04132026-v2from-sneakers-to-sandals-83471cbb-44ae-48e7-827d-
type: email
date: 2026-04-10
persona: walker
score: "5.5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NONPURCLICK_U_SLIPIN_NONPURCH_EN_04132026_V2From Sneakers to Sandals it's Slip-In Season 🤩"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NONPURCLICK_U_SLIPIN_NONPURCH_EN_04132026_V2From Sneakers to Sandals it's Slip-In Season 🤩
**Score:** 5.5/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A Slip-In Season promotional email built around three product categories — Cozy Fit, Max Cushioning, and Sandals — anchored by a 20% off single pair offer. The structure is clean and logical, but the hero misses an opportunity to own the seasonal moment. The email does its job adequately without doing it particularly well: the discount is visible, the categories are clear, but the emotional pull is thin and the visual execution is inconsistent across modules.
- Functional but forgettable. The offer exists, the categories land, but there's no urgency, no hero narrative, and the lifestyle imagery undersells the "season change" pitch.

## What's working

- **Discount banner is prominent** — the 20% off single pair offer sits at the very top, immediately visible before any scroll.
- **Three-category structure is logical** — Cozy Fit → Max Cushioning → Sandals maps to a reasonable product journey and gives the email clear navigable sections.
- **Sandals module lands best** — the blue sandal on a sandy/outdoor background is the strongest lifestyle shot in the email; it feels seasonally relevant and has good visual contrast.
- **Footer utility is complete** — nav links, app download, currency selector, social icons, and unsubscribe are all present and appear legible.

## What's weak

- **"New Style Drop" hero is off-message** — the subject line promises "Slip-In Season," but the hero headline leads with "New Style Drop." These two framings fight each other. A recipient opening for slip-ins gets a generic newness message first.
- **Hero lifestyle image is underwhelming** — two people in casual wear, outdoors, shot from a distance. There's no clear product focus or energy that says "slip-ins" or "sandals season."
- **Cozy Fit module is cold and catalog-like** — the grid of three shoes on a plain light background reads as an inventory dump, not a curated moment. No lifestyle context.
- **Max Cushioning module headline is competing with itself** — the product name "Max Cushioning" is descriptive but bland as a section header. It tells you nothing about who this is for or why now.
- **Preview text is broken** — the preview reads `[{ "@context": "http://schema.org/"...` — raw JSON-LD schema markup is leaking into the inbox preview snippet. This is the most visible failure in the email and likely tanks open rates for any recipient who sees this before opening.

## Recommendations

- 1. **Fix the preview text immediately** — JSON leaking into the preview is a deliverability and credibility issue. This needs to be resolved before send.
- 2. **Align hero headline to the subject line** — lead with "Slip-In Season" or a close variant in the hero copy to create message match from subject line to open.
- 3. **Add urgency or a deadline to the 20% offer** — "Shop before [date]" or "This week only" would convert the discount from background noise to a reason to act now.
- 4. **Elevate Cozy Fit with lifestyle context** — swap the flat product grid for a single strong lifestyle image. One good shot beats three catalog shots.
- 5. **Give each category a one-line benefit hook** — e.g., under "Max Cushioning": *All-day comfort, no laces.* This converts category labels into reasons to click.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Empty first name merge token | Add `IIF(EMPTY(...))` fallback before send |
- | **P0** | `[Test]:` prefix + subject concatenation error (`...04132026_V2From...`) | Strip test prefix; fix whitespace between campaign ID and subject copy |
- | **P1** | All `image.emails.skechers.com` assets on HTTP | Migrate CDN to HTTPS; update all `src` attributes |
- | **P1** | ink1000 pixel on HTTP | Migrate to HTTPS or confirm vendor supports it |
- | **P1** | ReturnPath pixel missing protocol | Add `https://` scheme to `src` |
- | **P2** | SPF/DKIM not verifiable | Pull full raw headers from a test seed and confirm authentication passes |
- | **P2** | `<meta content="IE=Edge" />` malformed | Add `http-equiv="X-UA-Compatible"` |
- | **P3** | Missing alt on `49468f73...png` | Add descriptive alt text |
- | **P3** | Duplicate 375px/640px media query blocks | Remove redundant 375px block |
- | **P3** | UTM passthrough unverified | Spot-check 2–3 click redirect chains to landing pages |

## Full review
## 1. Executive Summary

A Slip-In Season promotional email built around three product categories — Cozy Fit, Max Cushioning, and Sandals — anchored by a 20% off single pair offer. The structure is clean and logical, but the hero misses an opportunity to own the seasonal moment. The email does its job adequately without doing it particularly well: the discount is visible, the categories are clear, but the emotional pull is thin and the visual execution is inconsistent across modules.

---

## 2. Business Impact Score: **5.5 / 10**

Functional but forgettable. The offer exists, the categories land, but there's no urgency, no hero narrative, and the lifestyle imagery undersells the "season change" pitch.

---

## 3. What's Working

- **Discount banner is prominent** — the 20% off single pair offer sits at the very top, immediately visible before any scroll.
- **Three-category structure is logical** — Cozy Fit → Max Cushioning → Sandals maps to a reasonable product journey and gives the email clear navigable sections.
- **Sandals module lands best** — the blue sandal on a sandy/outdoor background is the strongest lifestyle shot in the email; it feels seasonally relevant and has good visual contrast.
- **Footer utility is complete** — nav links, app download, currency selector, social icons, and unsubscribe are all present and appear legible.

---

## 4. What's Weak

- **"New Style Drop" hero is off-message** — the subject line promises "Slip-In Season," but the hero headline leads with "New Style Drop." These two framings fight each other. A recipient opening for slip-ins gets a generic newness message first.
- **Hero lifestyle image is underwhelming** — two people in casual wear, outdoors, shot from a distance. There's no clear product focus or energy that says "slip-ins" or "sandals season."
- **Cozy Fit module is cold and catalog-like** — the grid of three shoes on a plain light background reads as an inventory dump, not a curated moment. No lifestyle context.
- **Max Cushioning module headline is competing with itself** — the product name "Max Cushioning" is descriptive but bland as a section header. It tells you nothing about who this is for or why now.
- **Preview text is broken** — the preview reads `[{ "@context": "http://schema.org/"...` — raw JSON-LD schema markup is leaking into the inbox preview snippet. This is the most visible failure in the email and likely tanks open rates for any recipient who sees this before opening.

---

## 5. Recommendations

1. **Fix the preview text immediately** — JSON leaking into the preview is a deliverability and credibility issue. This needs to be resolved before send.
2. **Align hero headline to the subject line** — lead with "Slip-In Season" or a close variant in the hero copy to create message match from subject line to open.
3. **Add urgency or a deadline to the 20% offer** — "Shop before [date]" or "This week only" would convert the discount from background noise to a reason to act now.
4. **Elevate Cozy Fit with lifestyle context** — swap the flat product grid for a single strong lifestyle image. One good shot beats three catalog shots.
5. **Give each category a one-line benefit hook** — e.g., under "Max Cushioning": *All-day comfort, no laces.* This converts category labels into reasons to click.

---

## 6. Bottom Line

The structural bones are solid — offer up top, three clear categories, clean footer. But this email isn't earning the seasonal moment it's trying to own. The broken preview text is the most urgent fix. After that, tightening message match between subject line and hero copy, and adding urgency to the discount, would meaningfully improve conversion without rebuilding the template.

---

## 7. Evidence

**Overall purpose:** Drive first-purchase from non-buyers with a 20% single-pair discount tied to a spring/slip-in seasonal hook across three footwear categories.

**Hero / primary value proposition:** "New Style Drop" headline over a lifestyle image of two people outdoors. 20% off banner immediately above. The seasonal framing is underdeveloped — "New Style Drop" is evergreen copy that doesn't reinforce the slip-in angle.

**Membership / benefits section:** None visible. No loyalty or rewards module present.

**Product discoverability / recommendation modules:** Three category modules — Cozy Fit (3-shoe grid), Max Cushioning (single hero product on warm background), Sandals (single lifestyle hero). Each has a "Shop [Category]" CTA. Cozy Fit also shows individual product names below each shoe.

**Utility / secondary modules:** Footer includes navigation (Women, Men, Kids, Clothing, New Arrivals, Sale), app download prompt, currency selector, and social links. All appear functional.

**Bugs / friction / clarity issues:**
- **Preview text:** Visibly broken — raw JSON-LD schema markup is rendering as the inbox preview string. Subscribers see technical code before opening.
- No other visual rendering bugs observed (images load, text is legible, CTAs are present and appear tappable).

---

## Technical Audit

## Technical Audit — MKG_US_NONPURCLICK_U_SLIPIN_NONPURCH_EN_04132026_V2

---

### 1. Technical Summary

SFMC-deployed XHTML 1.0 Transitional email with one critical broken experience (empty personalization token in greeting) and pervasive HTTP image serving that risks asset blocking across all major clients. The `[Test]:` subject prefix confirms this is a pre-production build not ready for live deployment.

---

### 2. Link & Tracking Issues

| Asset | Protocol | Status |
|---|---|---|
| Open pixel — `click.emails.skechers.com/open.aspx?2KI3CME5IUKEVKYP32JOVXKULE.100221` | HTTPS | OK |
| Krux usermatch beacons (×2) + impression pixel — `beacon.krxd.net` | HTTPS | OK |
| ink1000 pixel — `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` | **HTTP** | **Fail** |
| ReturnPath seed pixel — `pixel.app.returnpath.net/pixel.gif` | No protocol in `src` | **Malformed** |
| 27 click links — `click.emails.skechers.com` redirect | HTTPS | Probe skipped (redirect chains) |

The ReturnPath pixel `<img src="pixel.app.returnpath.net/pixel.gif">` lacks a scheme entirely — most clients will fail to load it, breaking inbox placement monitoring.

---

### 3. Rendering & Accessibility

**HTTP image sources — 10+ assets at risk of blocking:**

All `image.emails.skechers.com` assets are served over HTTP, including the logo (`dde00662-169f-447d-b0e2-fc65f6c2290c.png`), app store badges, footer utility icons, and all social icons. Gmail proxies HTTP images; Outlook 2016+ and Apple Mail on iOS 15+ may block or display broken images. Affected `src` pattern: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/...`

**Missing alt text (2 images):**
- `o.gif` — `http://www.ink1000.com/...` (tracking pixel, minor)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — `http://image.emails.skechers.com/.../m/11/49468f73...` (content image, should have descriptive alt)

**Malformed meta tag:**
```html
<meta content="IE=Edge" />
```
Missing `http-equiv` attribute. Should be:
```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
```

**Duplicate media query blocks:** `@media only screen and (max-width: 375px)` and `@media only screen and (max-width: 640px)` contain identical rule sets. The 375px block is entirely redundant since the 640px query encompasses it. Dead CSS that increases parse overhead.

---

### 4. Personalization & Merge Tokens

**Critical — empty first name field confirmed by QA:**

Greeting renders as `Hi ,` — the first name token (likely `%%FirstName%%`) resolved to an empty string with no fallback configured. No default value guard is present in the source.

Fix: Wrap with a conditional default, e.g.:
```
%%=IIF(EMPTY(FirstName),"there",FirstName)=%%
```

No other unresolved merge tokens observed in the truncated source.

---

### 5. Compliance

**SPF/DKIM:** `Authentication-Results` header not found in test relay passthrough — SPF/DKIM/DMARC alignment unverifiable from this sample. Must be confirmed via full raw headers before production send.

**Subject line:** Retains `[Test]:` prefix — `[Test]: MKG_US_NONPURCLICK_U_SLIPIN_NONPURCH_EN_04132026_V2From Sneakers to Sandals...`. This must be stripped; the subject also appears to be missing a space/newline separator between the campaign ID and the human-readable subject copy (`...04132026_V2From Sneakers...`), suggesting a template concatenation error.

**CAN-SPAM (physical address + unsubscribe):** HTML is truncated — cannot confirm from provided source. Presence of a valid postal address and one-click unsubscribe must be verified in the full render.

---

### 6. Email-to-Site Continuity

Campaign ID `MKG_US_NONPURCLICK_U_SLIPIN_NONPURCH_EN_04132026` is consistently present in both the Krux impression pixel and ink1000 pixel — campaign tagging is coherent at the pixel level.

Click links are routed through `click.emails.skechers.com` SFMC redirect. UTM parameter passthrough to landing pages cannot be verified from HTML alone — requires redirect chain inspection of the final destination URLs to confirm `utm_source`, `utm_medium`, `utm_campaign` are appended correctly and match the campaign ID above.

Preheader text reads "Take 20% off a Single Pair or BOGO 50% Off" — landing page offer parity cannot be confirmed from truncated source.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Empty first name merge token | Add `IIF(EMPTY(...))` fallback before send |
| **P0** | `[Test]:` prefix + subject concatenation error (`...04132026_V2From...`) | Strip test prefix; fix whitespace between campaign ID and subject copy |
| **P1** | All `image.emails.skechers.com` assets on HTTP | Migrate CDN to HTTPS; update all `src` attributes |
| **P1** | ink1000 pixel on HTTP | Migrate to HTTPS or confirm vendor supports it |
| **P1** | ReturnPath pixel missing protocol | Add `https://` scheme to `src` |
| **P2** | SPF/DKIM not verifiable | Pull full raw headers from a test seed and confirm authentication passes |
| **P2** | `<meta content="IE=Edge" />` malformed | Add `http-equiv="X-UA-Compatible"` |
| **P3** | Missing alt on `49468f73...png` | Add descriptive alt text |
| **P3** | Duplicate 375px/640px media query blocks | Remove redundant 375px block |
| **P3** | UTM passthrough unverified | Spot-check 2–3 click redirect chains to landing pages |
## Recent history

- [[2026-04-10-test-mkg-us-nonpur180-u-slipin-nonpurch-en-04132026from-sneakers-to-sandals-it-s]] — 5/10 (2026-04-10)
- [[2026-04-10-test-pro-us-retpuropen-u-sitebundle-retail-en-04122026spring-favorites-just-a-cl]] — 4/10 (2026-04-10)
- [[2026-04-11-test-pro-us-nonpur180-u-sitebundle-nonpurch-en-04122026spring-favorites-just-a-c]] — 3/10 (2026-04-10)

