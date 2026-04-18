---
slug: 2026-03-29-test-pro-us-nonpur-u-bundle-nonpurch-en-03272026an-easy-way-to-try-the-comfort-e
type: email
date: 2026-03-26
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NONPUR_U_BUNDLE_NONPURCH_EN_03272026An Easy Way to Try the Comfort Everyone Talks About"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_NONPUR_U_BUNDLE_NONPURCH_EN_03272026An Easy Way to Try the Comfort Everyone Talks About
**Score:** 5/10 · **Type:** Email audit · **2026-03-26**
## Executive summary

- A clean, structurally sound promotional email built around a BOGO 50% off Spring Sale offer. The layout is organized and the product sections are easy to scan. However, this email has a critical pre-send defect: the subject line is an exposed internal test string (`[Test]: PRO_US_NONPUR_U_BUNDLE_NONPURCH_EN_03272026...`), and the preview text renders as raw URL/token garbage. If this deployed to real recipients, inbox deliverability and sender trust would take a hit before anyone even opened it.
- The email earns its score on visual execution alone. The subject line and preview text defects are disqualifying for a live send — they alone drop a solid 7 into a 5.

## What's working

- **Hero offer is unmistakable.** BOGO 50% off in bold, large type. No confusion about the value prop.
- **Three-section product grid works well.** Women's → Men's → Kids' flows logically and broadens appeal for household shoppers. Each section has its own SHOP NOW.
- **Utility footer is complete.** SMS opt-in, BNPL (Afterpay), curbside pickup, and Find a Store all present. These serve late-funnel hesitation well.
- **Secondary nav links** (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE) add discovery without cluttering the body.

## What's weak

- **Subject line is an internal test artifact.** `[Test]: PRO_US_NONPUR_U_BUNDLE_NONPURCH_EN_03272026` is visible to any recipient — exposes campaign naming conventions and signals an unsent/unreviewed email.
- **Preview text is broken.** It renders raw URLs and token strings rather than compelling copy. First impression in inbox is severely damaged.
- **"DISCOUNT APPLIES AT CART" is easy to miss.** Set in small gray text below the CTAs — an important friction-reducing detail that should be more prominent.
- **Product shots lack differentiation.** All three sections (Women's, Men's, Kids') show shoes in near-identical flat-lay row format with no callouts, names, or prices. For a non-purchaser audience, there's no hook to any specific style.
- **No social proof or first-purchase nudge.** The target is non-purchasers. The email doesn't lean into "why try Skechers" — no ratings, no testimonial pull-quote, no "most-loved" label. It reads like a retention email, not an acquisition email.

## Recommendations

- 1. **Hold send until subject line and preview text are corrected.** Strip the test prefix and internal code. Write a subject like *"Buy One, Get One 50% Off — Spring Sale Is On"* and a preview like *"Shop women's, men's & kids' styles. Discount applies at cart."*
- 2. **Promote "Discount applies at cart" closer to the hero CTA.** Move it immediately below the offer headline, not buried after the buttons.
- 3. **Add one named style or "bestseller" callout per gender section.** Even one annotated shoe ("Our #1 Walker") gives non-purchasers a decision anchor.
- 4. **Add a first-purchase trust signal in the hero.** A brief line — *"Free shipping on your first order"* or *"30-day easy returns"* — reduces the main barrier for a non-purchaser audience.
- 5. **Test a single focused CTA.** Two CTAs in the hero (SHOP NOW + FIND A STORE) split attention. For an email audience, lead with SHOP NOW and move Find a Store to the footer.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | `[Test]:` prefix + campaign ID in subject | Remove before any production send; fix template merge block |
- | **P0** | All `image.emails.skechers.com` images on HTTP | Update CDN references to `https://` — affects logo, product, social, and payment badge images |
- | **P1** | Return Path pixel missing URL scheme | Add `https://` to `pixel.app.returnpath.net/pixel.gif` src |
- | **P1** | Ink1000 pixel on HTTP | Switch to `https://` or confirm vendor supports HTTPS |
- | **P1** | SPF/DKIM not verified | Run a header-inspection test send before production deployment |
- | **P2** | 4 images missing alt text | Add `alt=""` to decorative images; add descriptive alt to content images |
- | **P2** | `<meta charset>` malformed | Add `http-equiv="Content-Type"` attribute |
- | **P2** | Plain-text URL density at 71% | Rewrite plain-text alternative with human-readable copy |
- | **P3** | 26 redirect links unprobed | Manually spot-check 3–5 CTAs to confirm UTM params and landing page alignment |

## Full review
## Email Review: Skechers BOGO Spring Sale — Non-Purchaser Bundle

---

### 1. Executive Summary

A clean, structurally sound promotional email built around a BOGO 50% off Spring Sale offer. The layout is organized and the product sections are easy to scan. However, this email has a critical pre-send defect: the subject line is an exposed internal test string (`[Test]: PRO_US_NONPUR_U_BUNDLE_NONPURCH_EN_03272026...`), and the preview text renders as raw URL/token garbage. If this deployed to real recipients, inbox deliverability and sender trust would take a hit before anyone even opened it.

---

### 2. Business Impact Score: **5/10**

The email earns its score on visual execution alone. The subject line and preview text defects are disqualifying for a live send — they alone drop a solid 7 into a 5.

---

### 3. What's Working

- **Hero offer is unmistakable.** BOGO 50% off in bold, large type. No confusion about the value prop.
- **Three-section product grid works well.** Women's → Men's → Kids' flows logically and broadens appeal for household shoppers. Each section has its own SHOP NOW.
- **Utility footer is complete.** SMS opt-in, BNPL (Afterpay), curbside pickup, and Find a Store all present. These serve late-funnel hesitation well.
- **Secondary nav links** (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE) add discovery without cluttering the body.

---

### 4. What's Weak

- **Subject line is an internal test artifact.** `[Test]: PRO_US_NONPUR_U_BUNDLE_NONPURCH_EN_03272026` is visible to any recipient — exposes campaign naming conventions and signals an unsent/unreviewed email.
- **Preview text is broken.** It renders raw URLs and token strings rather than compelling copy. First impression in inbox is severely damaged.
- **"DISCOUNT APPLIES AT CART" is easy to miss.** Set in small gray text below the CTAs — an important friction-reducing detail that should be more prominent.
- **Product shots lack differentiation.** All three sections (Women's, Men's, Kids') show shoes in near-identical flat-lay row format with no callouts, names, or prices. For a non-purchaser audience, there's no hook to any specific style.
- **No social proof or first-purchase nudge.** The target is non-purchasers. The email doesn't lean into "why try Skechers" — no ratings, no testimonial pull-quote, no "most-loved" label. It reads like a retention email, not an acquisition email.

---

### 5. Recommendations

1. **Hold send until subject line and preview text are corrected.** Strip the test prefix and internal code. Write a subject like *"Buy One, Get One 50% Off — Spring Sale Is On"* and a preview like *"Shop women's, men's & kids' styles. Discount applies at cart."*
2. **Promote "Discount applies at cart" closer to the hero CTA.** Move it immediately below the offer headline, not buried after the buttons.
3. **Add one named style or "bestseller" callout per gender section.** Even one annotated shoe ("Our #1 Walker") gives non-purchasers a decision anchor.
4. **Add a first-purchase trust signal in the hero.** A brief line — *"Free shipping on your first order"* or *"30-day easy returns"* — reduces the main barrier for a non-purchaser audience.
5. **Test a single focused CTA.** Two CTAs in the hero (SHOP NOW + FIND A STORE) split attention. For an email audience, lead with SHOP NOW and move Find a Store to the footer.

---

### 6. Bottom Line

Solid bones, broken surface. The email's structure and offer are ready to perform — the BOGO message is clear, the product grid is scannable, and the utility module is well-built. But this cannot go live with the current subject line and preview text. Fix those first. Then consider whether a non-purchaser audience needs more persuasion scaffolding (social proof, style callouts) before this earn its full potential.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Spring Sale BOGO 50% off — drive first purchase from non-buyer segment |
| **Hero / primary value prop** | BOGO 50% off prominently displayed; SHOP NOW + FIND A STORE CTAs; "discount at cart" note present but small |
| **Membership / benefits** | None present — not a loyalty-focused send |
| **Product discoverability** | Three rows (Women's, Men's, Kids') with 4 shoes each; uniform layout, no style names or prices visible |
| **Utility / secondary modules** | SMS opt-in, Afterpay, Curbside Pickup, Find a Store, text nav links — all visible and intact |
| **Bugs / friction / clarity issues** | Subject line exposes internal test code and campaign ID; preview text renders as raw URL/token strings — both visible in the send metadata at top of render |

---

## Technical Audit

## Technical Audit — Skechers BUNDLE_NONPURCH Email
**From:** no-reply@emails.skechers.com | **Campaign:** PRO_US_NONPUR_U_BUNDLE_NONPURCH_EN_03272026

---

### 1. Technical Summary
This email has a pervasive HTTP-vs-HTTPS image hosting issue affecting the entire `image.emails.skechers.com` CDN, which will cause image blocking in most modern email clients. A secondary concern is an apparent test-send artifact left in the subject line that concatenates the campaign ID directly into visible subject copy.

---

### 2. Link & Tracking Issues

**Subject line concatenation error**
The subject line reads: `[Test]: PRO_US_NONPUR_U_BUNDLE_NONPURCH_EN_03272026An Easy Way to Try...` — the campaign ID token and subject copy are merged without a separator, indicating a template rendering failure or a test-send configuration that was never cleaned up before delivery.

**`[Test]:` prefix in subject**
The `[Test]:` prefix is present in the delivered subject. If this reached real recipients, it is a broken send; if this is a pre-send review copy, the prefix must be removed before production deployment.

**Return Path pixel — missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
This `src` has no `http://` or `https://` scheme. It will fail to load in all clients as a relative URL resolving to a non-existent path.

**Ink1000 pixel — HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8103142203&mi_ecmp=...
```
Served over plain HTTP. Will be blocked or flagged by secure clients; engagement tracking from this pixel is unreliable.

**26 click-redirect links unverifiable**
All CTA links route through `click.emails.skechers.com` — expected for SFMC click tracking, but destination URLs and UTM parameters could not be probed by automated QA. Manual spot-check of final destinations is required.

---

### 3. Rendering & Accessibility

**HTTP image sources — CDN-wide issue**
Every image hosted on `image.emails.skechers.com` uses `http://`, not `https://`:
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662...png` (Skechers logo)
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73...png`
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f...png` (App Store badge)
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0...png` (Google Play badge)
- `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5...png` (AfterPay)
- Social icons: Instagram, Twitter, Facebook, Pinterest, YouTube — all HTTP

Gmail, Outlook.com, and Apple Mail proxy or block mixed-content HTTP images. This will render the email imageless for a significant portion of recipients.

**Missing alt text — 4 images**
| Image | src |
|---|---|
| `o.gif` (ink1000 pixel) | `http://www.ink1000.com/.../o.gif` |
| `49468f73...png` | `http://image.emails.skechers.com/.../49468f73...png` |
| `00100b23...png` | `http://image.emails.skechers.com/.../00100b23...png` |
| `fc08601a...png` | `http://image.emails.skechers.com/.../fc08601a...png` |

Decorative tracking pixels should have `alt=""` (blank, not omitted); content images require descriptive alt text for screen readers and image-off rendering.

**`<meta http-equiv>` missing `http-equiv` attribute**
```html
<meta content="text/html; charset=utf-8" />
```
The `http-equiv="Content-Type"` attribute is absent. The charset declaration will be ignored by parsers that require it. Should be:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

---

### 4. Personalization & Merge Tokens

No unresolved `%%variable%%` or `{{token}}` placeholders visible in the truncated source. However, the subject line concatenation failure (campaign ID + subject copy run together) suggests a merge field or dynamic content block is misconfigured in the sending platform template. This warrants inspection of the SFMC template before any future send.

---

### 5. Compliance

**SPF/DKIM unverified**
`Authentication-Results` header was not captured by the QA relay. SPF and DKIM pass/fail status for `emails.skechers.com` is unknown from this sample. Confirm alignment via a test send through a header-inspection tool (e.g., mail-tester.com or MXToolbox).

**Plain-text ratio — deliverability risk**
71% of the plain-text alternative (4,149 / 5,792 chars) is URLs. Aggressive spam filters score heavily against plain-text versions that are URL-dense with minimal human-readable content. The plain-text version should summarize offer copy, not just replicate redirect links.

**CAN-SPAM / unsubscribe**
Physical mailing address and unsubscribe mechanism were not visible in the truncated HTML but are required. Confirm both are present in the footer of the full template.

---

### 6. Email-to-Site Continuity

All 26 CTAs pass through `click.emails.skechers.com` redirects; final destination UTM parameters were not resolvable by automated probe. Manual verification required to confirm:
- `utm_source`, `utm_medium`, `utm_campaign` are appended on all landing page URLs
- Campaign ID (`PRO_US_NONPUR_U_BUNDLE_NONPURCH_EN_03272026`) is consistently used as `utm_campaign` value
- Landing pages load correctly and reflect the BOGO 50% offer stated in the preheader

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | `[Test]:` prefix + campaign ID in subject | Remove before any production send; fix template merge block |
| **P0** | All `image.emails.skechers.com` images on HTTP | Update CDN references to `https://` — affects logo, product, social, and payment badge images |
| **P1** | Return Path pixel missing URL scheme | Add `https://` to `pixel.app.returnpath.net/pixel.gif` src |
| **P1** | Ink1000 pixel on HTTP | Switch to `https://` or confirm vendor supports HTTPS |
| **P1** | SPF/DKIM not verified | Run a header-inspection test send before production deployment |
| **P2** | 4 images missing alt text | Add `alt=""` to decorative images; add descriptive alt to content images |
| **P2** | `<meta charset>` malformed | Add `http-equiv="Content-Type"` attribute |
| **P2** | Plain-text URL density at 71% | Rewrite plain-text alternative with human-readable copy |
| **P3** | 26 redirect links unprobed | Manually spot-check 3–5 CTAs to confirm UTM params and landing page alignment |
## Recent history

- [[2026-03-29-test-pro-us-na-u-bundle-nonpurch-en-03272026an-easy-way-to-try-the-comfort-every]] — 6/10 (2026-03-26)
- [[2026-03-29-test-pro-us-na-u-bundle-retail-en-03272026easy-on-price-big-on-comfort]] — 5/10 (2026-03-26)
- [[2026-03-29-test-pro-us-na-u-bundle-full-en-03272026-v3your-go-to-comfort-times-two]] — 5/10 (2026-03-26)

