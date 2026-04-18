---
slug: 2026-04-10-test-mkg-us-na-w-seasonal-gender-en-04112026-v5the-perfect-pair-or-2-for-her
type: email
date: 2026-04-10
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_W_SEASONAL_GENDER_EN_04112026_V5The Perfect Pair (or 2) for Her"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_W_SEASONAL_GENDER_EN_04112026_V5The Perfect Pair (or 2) for Her
**Score:** 5/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- A seasonal Mother's Day email built around a gift guide framing. The offer (BOGO 50% off) is prominent and the content modules flow logically from hero to category to product. However, the email is heavily image-dependent and reads compressed at preview scale, a subject line with a raw test prefix is a critical production error, and the email preview text is a schema.org JSON blob — both are disqualifying issues for any live send.
- Solid structural instincts and a relevant seasonal hook, but the test prefix in the subject line and the broken preview text alone tank deliverability credibility and subscriber trust. Fix those and the score climbs to 7.

## What's working

- **BOGO 50% off banner** is immediately visible above the fold with a clear "SHOP NOW" CTA
- **"Mother's Day Gift Guide"** headline gives the email a gift-occasion identity that justifies the browse behavior being asked of the recipient
- **"Mommy & Me" module** is a smart emotional differentiator — few footwear brands lean into this pairing explicitly
- **Sandals and "Going Colors"** modules provide seasonal relevance and product discovery without feeling like filler
- **"Best Sellers" module** acts as a sensible safety net for undecided shoppers
- **Navigation footer** (Women, Men, Kids, Clothing, New Arrivals, Sale) gives utility without cluttering the main content area

## What's weak

- **Subject line contains a raw test prefix**: `[Test]: MKG_US_NA_W_SEASONAL_GENDER_EN_04112026_V5` — this should never reach a recipient inbox
- **Preview text is a raw JSON-LD schema blob** — the first thing subscribers read after the subject line is machine code, not a human message; a significant trust and click-rate liability
- **Module density is high** — five content modules stacked vertically creates a long scroll with no clear pause point or hierarchy
- **"Going Colors"** feels like a vague positioning label; the product shown is subtle and the category name doesn't tell the shopper what she's browsing toward
- **CTA repetition**: every module ends with "SHOP NOW" — no variation in language creates fatigue and misses an opportunity to set expectations (e.g., "Shop Sandals" vs. "Explore Colors")
- **Mommy & Me imagery** is charming but small at render scale — the emotional hook works harder if given more visual breathing room

## Recommendations

- 1. **Strip the test prefix and fix the preview text immediately** — these are pre-send QA failures, not design issues
- 2. **Write a human preview text**: something like "The perfect sandals, sneakers & styles for mom (and her mini)" — this directly supports conversion
- 3. **Differentiate CTA copy per module**: "Shop Sandals," "Shop Gift Guide," "Explore Colors" — reduces fatigue and improves click attribution
- 4. **Prioritize or prune modules**: five modules is one or two too many; if Mommy & Me and Mother's Day Gift Guide are the core story, let them breathe and cut or consolidate Going Colors or Best Sellers
- 5. **Increase the Mommy & Me image size** — it's the most emotionally resonant section and currently gets less real estate than Best Sellers
- | Priority | Issue | Action |
- |---|---|---|
- | **P0 — Blocker** | Empty first-name merge token renders as `Hi ,` | Fix null-fallback in greeting token (e.g., `%%=v(@firstName)=%%` → add default value) |
- | **P0 — Blocker** | Subject line has campaign ID concatenated without space (`_V5The Perfect...`) | Fix subject template; strip `[Test]:` prefix and version token for live send |
- | **P1 — High** | 11 image assets served over HTTP | Change all `http://image.emails.skechers.com/` src values to `https://` |
- | **P1 — High** | 2 HTTP tracking pixels (ink1000, Return Path) | Confirm HTTPS equivalents exist; update src attributes |
- | **P2 — Medium** | SPF/DKIM status unverified | Confirm authentication passes via a seed-list send before deployment |
- | **P2 — Medium** | `49468f73...png` missing alt text (content image) | Add descriptive `alt=""` or meaningful alt copy |
- | **P3 — Low** | 27 click links unverified for UTM params | Spot-check 3–5 CTAs for correct UTM attribution and offer-aligned landing pages |
- | **P3 — Low** | Duplicate responsive CSS blocks | Consolidate into single media query block; no functional impact but reduces template size |

## Full review
## 1. Executive Summary

A seasonal Mother's Day email built around a gift guide framing. The offer (BOGO 50% off) is prominent and the content modules flow logically from hero to category to product. However, the email is heavily image-dependent and reads compressed at preview scale, a subject line with a raw test prefix is a critical production error, and the email preview text is a schema.org JSON blob — both are disqualifying issues for any live send.

---

## 2. Business Impact Score: 5/10

Solid structural instincts and a relevant seasonal hook, but the test prefix in the subject line and the broken preview text alone tank deliverability credibility and subscriber trust. Fix those and the score climbs to 7.

---

## 3. What's Working

- **BOGO 50% off banner** is immediately visible above the fold with a clear "SHOP NOW" CTA
- **"Mother's Day Gift Guide"** headline gives the email a gift-occasion identity that justifies the browse behavior being asked of the recipient
- **"Mommy & Me" module** is a smart emotional differentiator — few footwear brands lean into this pairing explicitly
- **Sandals and "Going Colors"** modules provide seasonal relevance and product discovery without feeling like filler
- **"Best Sellers" module** acts as a sensible safety net for undecided shoppers
- **Navigation footer** (Women, Men, Kids, Clothing, New Arrivals, Sale) gives utility without cluttering the main content area

---

## 4. What's Weak

- **Subject line contains a raw test prefix**: `[Test]: MKG_US_NA_W_SEASONAL_GENDER_EN_04112026_V5` — this should never reach a recipient inbox
- **Preview text is a raw JSON-LD schema blob** — the first thing subscribers read after the subject line is machine code, not a human message; a significant trust and click-rate liability
- **Module density is high** — five content modules stacked vertically creates a long scroll with no clear pause point or hierarchy
- **"Going Colors"** feels like a vague positioning label; the product shown is subtle and the category name doesn't tell the shopper what she's browsing toward
- **CTA repetition**: every module ends with "SHOP NOW" — no variation in language creates fatigue and misses an opportunity to set expectations (e.g., "Shop Sandals" vs. "Explore Colors")
- **Mommy & Me imagery** is charming but small at render scale — the emotional hook works harder if given more visual breathing room

---

## 5. Recommendations

1. **Strip the test prefix and fix the preview text immediately** — these are pre-send QA failures, not design issues
2. **Write a human preview text**: something like "The perfect sandals, sneakers & styles for mom (and her mini)" — this directly supports conversion
3. **Differentiate CTA copy per module**: "Shop Sandals," "Shop Gift Guide," "Explore Colors" — reduces fatigue and improves click attribution
4. **Prioritize or prune modules**: five modules is one or two too many; if Mommy & Me and Mother's Day Gift Guide are the core story, let them breathe and cut or consolidate Going Colors or Best Sellers
5. **Increase the Mommy & Me image size** — it's the most emotionally resonant section and currently gets less real estate than Best Sellers

---

## 6. Bottom Line

The strategy is correct — seasonal hook, emotional sub-story, product discovery, safety-net best sellers. The execution has the bones of a solid campaign. But it cannot send in current state: the subject line and preview text are both broken in ways that are immediately visible to every recipient. Fix those two issues first, then tighten the CTA language and module hierarchy.

---

## 7. Evidence

**Overall purpose:** Mother's Day gift guide email driving women's footwear purchases via a BOGO 50% off promotional offer.

**Hero / primary value proposition:** BOGO 50% off banner sits at the top with a "SHOP NOW" CTA. Clear, high contrast, immediately scannable. The "Mother's Day Gift Guide" headline below reinforces the seasonal occasion.

**Membership / benefits section:** Not present. No loyalty, rewards, or personalization signals visible.

**Product discoverability / recommendation modules:**
- *Mommy & Me* — two white sneaker-style pairs, parent/child angle, "SHOP NOW" CTA
- *Sandals* — lifestyle shot of sandals on a model, seasonal and relevant
- *Going Colors* — neutral/earth-tone shoes, less defined positioning
- *Best Sellers* — grid of multiple styles, acts as a browse fallback

**Utility / secondary modules:** Navigation footer with six category links. App download (App Store + Google Play) and social follow icons (Facebook, Instagram, Pinterest, YouTube, TikTok) are present at the bottom.

**Bugs / friction / clarity issues:**
- Subject line contains raw QA/test identifier prefix — visible to all recipients
- Preview text renders as raw JSON-LD schema code — visible in any inbox preview pane before open

---

## Technical Audit

## Technical Audit — Skechers Seasonal/Gender Email
**Campaign:** `MKG_US_NA_W_SEASONAL_GENDER_EN_04112026_V5`
**From:** `no-reply@emails.skechers.com`

---

### 1. Technical Summary

This test send has one broken-experience blocker (empty personalization slot) and a systemic mixed-content problem: the majority of image assets are served over HTTP, not HTTPS, making them liable to be blocked or replaced by proxy images in Gmail, Outlook 365, and iOS Mail. Authentication header data was not present in the relay, leaving deliverability status unverified.

---

### 2. Link & Tracking Issues

**27 click-redirect links skipped** — all route through `click.emails.skechers.com` (SFMC click-tracking domain). UTM parameters and destination URLs could not be verified programmatically.

**Tracking pixels present:**
| Pixel | Protocol | Notes |
|---|---|---|
| `click.emails.skechers.com/open.aspx?N366L6...` | HTTPS | Open pixel — OK |
| `beacon.krxd.net/1x1_usermatch.gif` (×2) | HTTPS | Krux DMP user match — OK |
| `beacon.krxd.net/1x1_ad_impression.gif` | HTTPS | Campaign impression pixel — OK |
| `pixel.app.returnpath.net/pixel.gif?r=964ce1...` | **HTTP** | Return Path inbox monitor pixel — mixed content |
| `ink1000.com/p/up/7076d8b15a776085/o.gif` | **HTTP** | Secondary open tracker — mixed content |

Both HTTP pixels will be blocked or proxied by Gmail and Outlook 365, invalidating open data from those sources.

---

### 3. Rendering & Accessibility

**Mixed content — images served over HTTP (11 assets):**

All assets under `http://image.emails.skechers.com/lib/fe3115707564047a731c78/` are HTTP. Affected images:

- Skechers logo (`dde00662-169f-447d-b0e2-fc65f6c2290c.png`)
- Unnamed content image (`49468f73-4651-4af3-bea2-61d1ae5db486.png`)
- "Available on the App Store" (`0ec56c9f-eec2-471a-898d-0ca1cea7e115.png`)
- "Android App on Google Play" (`9bb508d0-4b38-483d-8459-cf54186a0b9f.png`)
- "Curbside Pickup" (`00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`)
- "AfterPay" (`07cb60b5-512b-494d-892d-67dc067289b7.png`)
- "Find A Store" (`fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`)
- Social icons: Instagram, Facebook, YouTube

Gmail rewrites HTTP image URLs through its own proxy; Outlook 365 blocks them outright. The Skechers logo rendering broken in Outlook is a critical visual defect.

**Missing alt text (2 images):**
- `o.gif` (ink1000 tracking pixel) — no alt attribute
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no alt attribute; if this is a content image, it will render as a broken icon in image-off environments

**CSS/rendering notes:**
- Duplicate `@media (max-width: 640px)` and `@media (max-width: 375px)` blocks with identical rules — redundant but not harmful
- `@media (max-width: 480px)` defined in a second `<style>` block — consolidating would reduce parsing overhead in clients that re-parse style blocks

---

### 4. Personalization & Merge Tokens

**BLOCKER — Empty greeting name field:**
QA detected `"Hi ,"` (empty first-name slot). The merge token responsible for the recipient's first name is resolving to null or empty string. This will render verbatim as `Hi ,` in all sends if not fixed before deployment.

**Subject line contains test prefix:**
`[Test]: MKG_US_NA_W_SEASONAL_GENDER_EN_04112026_V5The Perfect Pair (or 2) for Her`
The internal campaign ID is concatenated directly into the subject with no delimiter space before the actual subject copy (`_V5The Perfect Pair...`). Confirm the live subject line template strips the `[Test]:` prefix and the version token before send.

---

### 5. Compliance

**SPF/DKIM:** `Authentication-Results` header was not found via the AgentMail relay. SPF and DKIM pass/fail status cannot be confirmed. Verify that `emails.skechers.com` has a valid DKIM signature and that the sending IP is covered by the domain's SPF record before live deployment.

**CAN-SPAM / unsubscribe:** HTML source was truncated before the footer; unsubscribe link and physical mailing address presence could not be verified. Confirm both are present in the live template.

**KRUX DMP user-match pixels** pass hashed subscriber identifiers (`sha25` variant confirmed in pixel URL). Ensure this aligns with current consent and data-sharing disclosures in the privacy policy.

---

### 6. Email-to-Site Continuity

All 27 destination URLs are behind `click.emails.skechers.com` redirects and were not probed. UTM parameter coverage is unverified. The Krux impression pixel correctly carries `campaignid=MKG_US_NA_W_SEASONAL_GENDER_EN_04112026`, consistent with the campaign ID in the subject.

Action required before live send: spot-check a sample of click links to confirm `utm_source`, `utm_medium`, `utm_campaign` are appended and that landing pages reflect the BOGO 50% / 20% Mother's Day offer stated in the preheader.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0 — Blocker** | Empty first-name merge token renders as `Hi ,` | Fix null-fallback in greeting token (e.g., `%%=v(@firstName)=%%` → add default value) |
| **P0 — Blocker** | Subject line has campaign ID concatenated without space (`_V5The Perfect...`) | Fix subject template; strip `[Test]:` prefix and version token for live send |
| **P1 — High** | 11 image assets served over HTTP | Change all `http://image.emails.skechers.com/` src values to `https://` |
| **P1 — High** | 2 HTTP tracking pixels (ink1000, Return Path) | Confirm HTTPS equivalents exist; update src attributes |
| **P2 — Medium** | SPF/DKIM status unverified | Confirm authentication passes via a seed-list send before deployment |
| **P2 — Medium** | `49468f73...png` missing alt text (content image) | Add descriptive `alt=""` or meaningful alt copy |
| **P3 — Low** | 27 click links unverified for UTM params | Spot-check 3–5 CTAs for correct UTM attribution and offer-aligned landing pages |
| **P3 — Low** | Duplicate responsive CSS blocks | Consolidate into single media query block; no functional impact but reduces template size |
## Recent history

- [[2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026-v4feel-good-styles-for-you-them]] — 5/10 (2026-04-10)
- [[2026-04-11-test-mkg-us-na-w-seasonal-gender-en-04112026-v4the-perfect-pair-or-2-for-her]] — 5/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026-v3feel-good-styles-for-you-them]] — 5/10 (2026-04-10)

