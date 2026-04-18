---
slug: 2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-a-v3make-walking-a-breeze-with-go-walk
type: email
date: 2026-04-01
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_MULTI_GENDER_EN_04022026_A_V3Make Walking a Breeze with GO Walk"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NA_U_MULTI_GENDER_EN_04022026_A_V3Make Walking a Breeze with GO Walk
**Score:** 6/10 · **Type:** Email audit · **2026-04-01**
## Executive summary

- A solid spring-walking email with clear promotional anchoring (50% off) and a tidy gender-split layout. The hero does its job — the imagery is lifestyle-forward and on-theme. Where the email stumbles is structural dilution: two secondary product modules below the hero fragment focus without meaningfully adding value. The "PREFER TO BUY?" module header is particularly odd — the phrasing suggests hesitation, not conversion momentum. Overall, functional but not sharp.
- Good bones, but the layout loses energy below the fold. The hero and sale banner carry the email; the rest coasts.

## What's working

- **50% OFF banner** is immediately visible at the very top — high visibility, strong intent signal for deal-seekers
- **"GET YOUR STEPS IN" hero** is clean and lifestyle-resonant; the imagery feels seasonally appropriate for a spring walking push
- **Gender split (Women's / Men's)** is clearly delineated — makes it easy for either segment to self-select quickly
- **Visual cadence** is consistent — product images are well-lit, uniform in style
- **Shop category CTAs** are visible and logically placed after each section

## What's weak

- **"PREFER TO BUY? SHOP MORE ATHLETIC STYLES"** is a confusing module header. "Prefer to buy?" reads as though Skechers is unsure if the reader wants to shop — it undercuts purchase intent rather than building it
- **Two secondary modules below the fold** ("Shop More Athletic Styles" and "Keep It Casual") dilute the GO Walk focus without clear differentiation from each other
- **No specific GO Walk product callout or naming** is visible in the hero or section headers — the subject line says GO Walk but the email body doesn't reinforce the product name visually
- **The 50% off offer lacks urgency anchors** — no end date or "limited time" language visible anywhere in the render
- **Preview text is broken raw URLs** — the inbox preview is a jumble of tracking parameters and links, which looks spammy and reduces open quality

## Recommendations

- 1. **Replace "PREFER TO BUY?" with assertive copy** — e.g., "MORE STYLES TO LOVE" or "EXPLORE THE FULL COLLECTION" — anything that drives forward momentum
- 2. **Name the product explicitly in the hero** — add "GO Walk" as a visual text element so the subject-to-email connection is immediate
- 3. **Add sale urgency** — a visible "Ends Sunday" or countdown-style copy line near the 50% off banner
- 4. **Consolidate the two secondary modules** into one tighter "More to Explore" row — or cut one entirely to preserve scroll depth
- 5. **Fix preview text** — preview should be a human-readable hook, not a URL dump; this is a high-visibility issue visible before the email is even opened
- | Priority | Issue | Fix |
- |---|---|---|
- | **P0** | `[Test]:` + campaign ID in production subject line | Strip both before send |
- | **P0** | Return Path pixel missing `https://` protocol | Prepend `https://` to `pixel.app.returnpath.net/...` |
- | **P1** | 14 images served over HTTP | Update CDN base to `https://image.emails.skechers.com` |
- | **P1** | SPF/DKIM unverifiable | Pull `Authentication-Results` from a real inbox receive; fix if failing |
- | **P2** | 3 content images missing alt text | Add descriptive `alt` strings |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` |
- | **P2** | Probe all 26 redirect links | Confirm UTM params and live landing pages |
- | **P3** | Missing `http-equiv` on charset meta | Add `http-equiv="Content-Type"` |
- | **P3** | Confirm footer CAN-SPAM elements | Verify physical address + unsubscribe present in full source |

## Full review
### 1. Executive Summary

A solid spring-walking email with clear promotional anchoring (50% off) and a tidy gender-split layout. The hero does its job — the imagery is lifestyle-forward and on-theme. Where the email stumbles is structural dilution: two secondary product modules below the hero fragment focus without meaningfully adding value. The "PREFER TO BUY?" module header is particularly odd — the phrasing suggests hesitation, not conversion momentum. Overall, functional but not sharp.

---

### 2. Business Impact Score: **6 / 10**

Good bones, but the layout loses energy below the fold. The hero and sale banner carry the email; the rest coasts.

---

### 3. What's Working

- **50% OFF banner** is immediately visible at the very top — high visibility, strong intent signal for deal-seekers
- **"GET YOUR STEPS IN" hero** is clean and lifestyle-resonant; the imagery feels seasonally appropriate for a spring walking push
- **Gender split (Women's / Men's)** is clearly delineated — makes it easy for either segment to self-select quickly
- **Visual cadence** is consistent — product images are well-lit, uniform in style
- **Shop category CTAs** are visible and logically placed after each section

---

### 4. What's Weak

- **"PREFER TO BUY? SHOP MORE ATHLETIC STYLES"** is a confusing module header. "Prefer to buy?" reads as though Skechers is unsure if the reader wants to shop — it undercuts purchase intent rather than building it
- **Two secondary modules below the fold** ("Shop More Athletic Styles" and "Keep It Casual") dilute the GO Walk focus without clear differentiation from each other
- **No specific GO Walk product callout or naming** is visible in the hero or section headers — the subject line says GO Walk but the email body doesn't reinforce the product name visually
- **The 50% off offer lacks urgency anchors** — no end date or "limited time" language visible anywhere in the render
- **Preview text is broken raw URLs** — the inbox preview is a jumble of tracking parameters and links, which looks spammy and reduces open quality

---

### 5. Recommendations

1. **Replace "PREFER TO BUY?" with assertive copy** — e.g., "MORE STYLES TO LOVE" or "EXPLORE THE FULL COLLECTION" — anything that drives forward momentum
2. **Name the product explicitly in the hero** — add "GO Walk" as a visual text element so the subject-to-email connection is immediate
3. **Add sale urgency** — a visible "Ends Sunday" or countdown-style copy line near the 50% off banner
4. **Consolidate the two secondary modules** into one tighter "More to Explore" row — or cut one entirely to preserve scroll depth
5. **Fix preview text** — preview should be a human-readable hook, not a URL dump; this is a high-visibility issue visible before the email is even opened

---

### 6. Bottom Line

The email will convert casual deal-seekers drawn in by the 50% off banner, but it misses an opportunity to build brand affinity around GO Walk specifically. The structural dilution below the fold and the weak secondary module headers are the primary conversion drag. A tighter edit — sharper secondary headlines, named product, urgency on the sale — would meaningfully lift performance.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Spring walking promotion, multi-gender, anchored to a 50% off sale |
| **Hero / primary value prop** | "GET YOUR STEPS IN" — lifestyle walking imagery, spring-appropriate, but no explicit GO Walk branding visible |
| **Membership / benefits** | Not present — no loyalty, Skechers+ club, or rewards callout visible |
| **Product discoverability** | Women's and Men's sections visible with shoe imagery; two additional modules ("Athletic Styles", "Keep It Casual") add volume but not clarity |
| **Utility / secondary modules** | Shop-by-category nav row visible near footer; standard utility |
| **Bugs / friction** | Preview text in inbox renders as raw tracking URLs — visible issue before open. No visible broken images or overlapping text within the email body itself. Subject line retains test prefix "[Test]" suggesting this render is from a pre-send test, not a live send. |

---

## Technical Audit

## Technical Audit — Skechers GO Walk (MKG_US_NA_U_MULTI_GENDER_EN_04022026_A_V3)

---

### 1. Technical Summary

The email has a systemic HTTP mixed-content problem across nearly all image assets hosted on `image.emails.skechers.com`, plus a broken Return Path seed pixel caused by a missing URL protocol. SPF/DKIM status is unverifiable through the relay, and the subject line retains a `[Test]:` prefix that must be stripped before any production send.

---

### 2. Link & Tracking Issues

**Broken Return Path pixel — missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `https://` prefix. Email clients will resolve this as a relative URL, silently breaking the inbox placement seed. Fix: prepend `https://`.

**26 click-redirect links unverifiable**
All CTA links wrap through `click.emails.skechers.com/?qs=...` (base64 payload). QA skipped HTTP probes on these. Destination URLs and UTM parameter integrity cannot be confirmed from the source alone — requires redirect-chain inspection.

**Third-party match pixels**
Two Kraxd user-match beacons and one ad-impression pixel fire unconditionally on open, including for unsubscribed or opted-down contacts depending on list hygiene. Both are HTTPS and structurally fine, but their presence should be validated against the current data-sharing posture.

---

### 3. Rendering & Accessibility

**HTTP image sources — 14+ assets at risk of blocking**

All content images and footer icons are served over plain HTTP:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662...png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f...png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0...png  (Google Play badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/d76a5487...png  (Twitter)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0...png  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/573ab181...png  (Pinterest)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc...png  (YouTube)
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif                                 (tracking pixel)
```
Apple Mail on iOS 15+ and Outlook.com enforce HTTPS. Gmail proxies all images to HTTPS but this adds latency and risks a rendering gap during proxy resolution. Fix: update the CDN base URL to `https://`.

**Missing alt text on content images**
Four non-decorative images have empty or absent `alt` attributes:
- `49468f73-4651-4af3-bae2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`
- `o.gif` (tracking pixel — `alt=""` is acceptable here)

With images off (common in corporate Outlook), recipients see blank space rather than descriptive fallback text.

**`-webkit-text-size-adjust: none` in global CSS**
```css
* { -webkit-text-size-adjust: none; }
```
Setting to `none` blocks user-initiated text scaling on iOS, which fails WCAG 1.4.4 (Resize Text). Should be `100%`.

**Missing `http-equiv` on charset meta**
```html
<meta content="text/html; charset=utf-8" />
```
The `http-equiv="Content-Type"` attribute is absent. Some legacy Outlook versions may misparse encoding. Fix: `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />`.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g. `%%FIRST_NAME%%`, `|*FNAME*|`) are visible in the truncated source. The Kraxd impression pixel encodes the campaign ID statically (`campaignid=MKG_US_NA_U_MULTI_GENDER_EN_04022026_A`) rather than dynamically — confirm this matches the intended A/B variant identifier (`_A_V3` per subject line).

---

### 5. Compliance

**SPF/DKIM unverifiable**
QA found no `Authentication-Results` header via the AgentMail relay. Cannot confirm SPF pass or DKIM signature validity. This must be verified directly from a received header in a test inbox — a failed or missing DKIM signature will harm deliverability on Gmail and Yahoo.

**Subject line test prefix**
```
Subject: [Test]: MKG_US_NA_U_MULTI_GENDER_EN_04022026_A_V3Make Walking a Breeze...
```
The `[Test]:` prefix and the raw campaign ID (`MKG_US_NA_U_MULTI_GENDER_EN_04022026_A_V3`) are both present in the subject. Neither should appear in a production send. The campaign ID appears to have been concatenated directly against the subject copy with no space separator.

**CAN-SPAM / unsubscribe** — Cannot confirm from truncated HTML whether a physical mailing address and one-click unsubscribe are present in the footer. These are required. Verify the full footer contains both.

---

### 6. Email-to-Site Continuity

All 26 CTAs are wrapped in `click.emails.skechers.com` redirects with encrypted `qs=` payloads, making UTM parameter inspection impossible from source alone. A redirect-chain probe is required to confirm:
- UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`) are present and correctly set to the `_A_V3` variant
- Landing pages are not returning 404 or redirect loops

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **P0** | `[Test]:` + campaign ID in production subject line | Strip both before send |
| **P0** | Return Path pixel missing `https://` protocol | Prepend `https://` to `pixel.app.returnpath.net/...` |
| **P1** | 14 images served over HTTP | Update CDN base to `https://image.emails.skechers.com` |
| **P1** | SPF/DKIM unverifiable | Pull `Authentication-Results` from a real inbox receive; fix if failing |
| **P2** | 3 content images missing alt text | Add descriptive `alt` strings |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` |
| **P2** | Probe all 26 redirect links | Confirm UTM params and live landing pages |
| **P3** | Missing `http-equiv` on charset meta | Add `http-equiv="Content-Type"` |
| **P3** | Confirm footer CAN-SPAM elements | Verify physical address + unsubscribe present in full source |
## Recent history

- [[2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-a-v2-make-walking-a-breeze-with-go-wal]] — 6/10 (2026-04-01)
- [[2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-a-v2make-walking-a-breeze-this-nationa]] — 5/10 (2026-04-01)
- [[2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-amake-walking-a-breeze-this-national-w]] — 5/10 (2026-04-01)

