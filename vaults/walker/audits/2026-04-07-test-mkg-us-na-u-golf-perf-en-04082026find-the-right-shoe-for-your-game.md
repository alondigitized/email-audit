---
slug: 2026-04-07-test-mkg-us-na-u-golf-perf-en-04082026find-the-right-shoe-for-your-game
type: email
date: 2026-04-07
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_GOLF_PERF_EN_04082026Find the right shoe for your game"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NA_U_GOLF_PERF_EN_04082026Find the right shoe for your game
**Score:** 6/10 · **Type:** Email audit · **2026-04-07**
## Executive summary

- A focused golf performance email with a clear audience and a reasonable product hierarchy. The hero does its job, and the BLADE TOUR 4D spotlight is a strong differentiator. But the email loses momentum mid-scroll — the Pickleball Picks section undermines the single-sport focus, the product photography in the lower modules is tiny, and the footer utility cluster feels templated rather than tailored. Overall a solid B-minus execution of a narrowly targeted send.

## What's working

- **Hero clarity.** "Master Your Course Style" with a golfer in an aspirational course setting immediately signals sport and audience. No ambiguity.
- **BLADE TOUR 4D module.** Dedicated real-estate for the flagship golf shoe with product photography, a golf-specific credential badge (the "GOLF" endorsement icon), and a direct "SHOP NOW" CTA. This is the email's strongest conversion moment.
- **Skechers Golf sub-brand lock-up.** The Skechers Golf logo in the header reinforces that this is a specialty product line, not a general-brand email, which builds credibility with golf buyers.
- **Color palette.** White, green, and grass tones maintain tonal consistency with the sport throughout the upper half.

## What's weak

- **Pickleball Picks breaks the contract.** A golf email that pivots to pickleball mid-scroll sends a mixed signal. It dilutes the golf-buyer focus and makes the email feel like a repurposed multi-sport template rather than a curated golf experience.
- **"More Performance Footwear" module is vague.** No product callout, no style names, no differentiation — just a generic header and a "SHOP NOW" button. At this thumbnail scale the products are indistinguishable.
- **"Running Ready" section compounds the drift.** After pickleball, running pushes further from the golf context. The send audience presumably cares about their game, not a full sports catalog.
- **Product image scale is too small** in the lower category cards. Side-by-side thumbnails at this width make it nearly impossible to see detail, texture, or colorway — the factors that drive golf shoe purchase decisions.
- **Hero CTA button contrast is low.** The dark green "SHOP NOW" button sits against a dark background in the hero, making it visually undersized. The CTA doesn't pop enough given its importance.
- **Subject line is test-tagged.** `[Test]:` is visible in the from/subject metadata — not the render itself, but worth flagging as a deliverability and trust issue if this goes to a live list.

## Recommendations

- 1. **Remove Pickleball Picks and Running Ready** from this version. Either create separate sends for those audiences or gate this email to golf-only content. The send list is presumably golf-segmented — respect that.
- 2. **Promote "More Performance Footwear" to a named product spotlight.** Feature 2–3 golf styles with name, key feature, and price point. Remove the generic placeholder module entirely if you can't populate it with specific product content.
- 3. **Increase hero CTA button contrast** — use white text on a stronger green, or invert to a white button with green text, so it reads clearly against the dark hero background.
- 4. **Add golf-specific proof points** to the BLADE TOUR 4D module — waterproofing, spikeless traction, or a tour player callout if available. Performance buyers want justification.
- 5. **Strip the `[Test]:` prefix** before any live deployment.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | `[Test]` prefix + missing space in subject | Remove `[Test]` tag; fix template concatenation so campaign ID does not bleed into consumer subject copy |
- | **P0** | Return Path pixel missing protocol | Add `https://` to `pixel.app.returnpath.net/pixel.gif?r=...` |
- | **P1** | 14 HTTP image sources | Update all `http://image.emails.skechers.com/` and `http://www.ink1000.com/` `src` values to `https://` |
- | **P1** | SPF/DKIM unverified | Pull raw headers from a production inbox or mail tester (e.g. mail-tester.com) before launch |
- | **P2** | 4 images missing alt text | Add `alt=""` (decorative) or descriptive alt text to all content images |
- | **P2** | Plain-text 78% URLs | Reduce URL density in plain-text alternative; add human-readable copy |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` globally |
- | **P3** | UTM parameter verification | Manually verify 3–5 CTAs post-redirect for correct UTM attribution |
- | **P3** | Krux DMP pixels | Confirm data syndication consent scope covers current subscriber list |

## Full review
## 1. Executive Summary

A focused golf performance email with a clear audience and a reasonable product hierarchy. The hero does its job, and the BLADE TOUR 4D spotlight is a strong differentiator. But the email loses momentum mid-scroll — the Pickleball Picks section undermines the single-sport focus, the product photography in the lower modules is tiny, and the footer utility cluster feels templated rather than tailored. Overall a solid B-minus execution of a narrowly targeted send.

---

## 2. Business Impact Score: 6 / 10

---

## 3. What's Working

- **Hero clarity.** "Master Your Course Style" with a golfer in an aspirational course setting immediately signals sport and audience. No ambiguity.
- **BLADE TOUR 4D module.** Dedicated real-estate for the flagship golf shoe with product photography, a golf-specific credential badge (the "GOLF" endorsement icon), and a direct "SHOP NOW" CTA. This is the email's strongest conversion moment.
- **Skechers Golf sub-brand lock-up.** The Skechers Golf logo in the header reinforces that this is a specialty product line, not a general-brand email, which builds credibility with golf buyers.
- **Color palette.** White, green, and grass tones maintain tonal consistency with the sport throughout the upper half.

---

## 4. What's Weak

- **Pickleball Picks breaks the contract.** A golf email that pivots to pickleball mid-scroll sends a mixed signal. It dilutes the golf-buyer focus and makes the email feel like a repurposed multi-sport template rather than a curated golf experience.
- **"More Performance Footwear" module is vague.** No product callout, no style names, no differentiation — just a generic header and a "SHOP NOW" button. At this thumbnail scale the products are indistinguishable.
- **"Running Ready" section compounds the drift.** After pickleball, running pushes further from the golf context. The send audience presumably cares about their game, not a full sports catalog.
- **Product image scale is too small** in the lower category cards. Side-by-side thumbnails at this width make it nearly impossible to see detail, texture, or colorway — the factors that drive golf shoe purchase decisions.
- **Hero CTA button contrast is low.** The dark green "SHOP NOW" button sits against a dark background in the hero, making it visually undersized. The CTA doesn't pop enough given its importance.
- **Subject line is test-tagged.** `[Test]:` is visible in the from/subject metadata — not the render itself, but worth flagging as a deliverability and trust issue if this goes to a live list.

---

## 5. Recommendations

1. **Remove Pickleball Picks and Running Ready** from this version. Either create separate sends for those audiences or gate this email to golf-only content. The send list is presumably golf-segmented — respect that.
2. **Promote "More Performance Footwear" to a named product spotlight.** Feature 2–3 golf styles with name, key feature, and price point. Remove the generic placeholder module entirely if you can't populate it with specific product content.
3. **Increase hero CTA button contrast** — use white text on a stronger green, or invert to a white button with green text, so it reads clearly against the dark hero background.
4. **Add golf-specific proof points** to the BLADE TOUR 4D module — waterproofing, spikeless traction, or a tour player callout if available. Performance buyers want justification.
5. **Strip the `[Test]:` prefix** before any live deployment.

---

## 6. Bottom Line

This email has the right bones for a golf performance send — the hero is on-brand, the BLADE TOUR 4D gets proper spotlight treatment, and the sub-brand identity is clear. But the lower half undercuts the work by pivoting to pickleball and running, and the generic "More Performance Footwear" module adds little value. Tighten the sport focus, give the secondary modules real product content, and this becomes a genuinely strong performance send.

---

## 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Drive golf shoe purchases, specifically the BLADE TOUR 4D, with secondary browse CTAs |
| **Hero / primary value prop** | "Master Your Course Style" — golfer on course, dark green CTA, Skechers Golf lockup. Strong opening |
| **Membership / benefits** | None present |
| **Product discoverability** | BLADE TOUR 4D has the best treatment; remaining modules (More Performance Footwear, Pickleball, Running) are underdeveloped thumbnails |
| **Utility / secondary modules** | Footer includes app download, "Find a Store," and social icons — standard and functional |
| **Bugs / friction / clarity issues** | Hero CTA has low contrast against dark background; lower product card thumbnails are too small to be actionable; Pickleball module is an audience mismatch |

---

## Technical Audit

## Technical Audit — Skechers Golf Performance Email
**Campaign:** `MKG_US_NA_U_GOLF_PERF_EN_04082026` | **From:** no-reply@emails.skechers.com

---

### 1. Technical Summary

This is a test-flagged SFMC send for a golf performance campaign. Critical issues include a broken tracking pixel URL (missing protocol), 14 HTTP image sources that will be blocked by modern email clients, and a malformed subject line with a missing space. SPF/DKIM authentication status is unverifiable via the AgentMail relay.

---

### 2. Link & Tracking Issues

**Broken Return Path pixel — missing protocol:**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
No `http://` or `https://` prefix. Email clients will resolve this as a relative path — the pixel fires zero deliverability signals to Return Path/Validity.

**Plain-text version is 78% URLs:**
QA confirms 2,592 of 3,321 characters are URLs. This ratio can trigger spam filters that inspect the plain-text alternative.

**26 click-tracking links unverifiable:**
All route through `click.emails.skechers.com` — destination URLs and UTM parameters could not be probed by automated QA.

**Third-party DMP sync pixels present:**
Two `beacon.krxd.net` usermatch pixels and one impression pixel are firing. These are data syndication calls to Salesforce DMP (Krux). Confirm these are compliant with current data governance policy and subscriber consent scope.

---

### 3. Rendering & Accessibility

**14 image sources use HTTP, not HTTPS:**
Gmail, Apple Mail, and Outlook on modern clients block or proxy HTTP content. Affected sources:

| Image | HTTP URL |
|---|---|
| o.gif (ink1000 tracking pixel) | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` |
| Skechers logo | `http://image.emails.skechers.com/...dde00662-169f-447d-b0e2-fc65f6c2290c.png` |
| App Store badge | `http://image.emails.skechers.com/...0ec56c9f-eec2-471a-898d-0ca1cea7e115.png` |
| Google Play badge | `http://image.emails.skechers.com/...9bb508d0-4b38-483d-8459-cf54186a0b9f.png` |
| AfterPay logo | `http://image.emails.skechers.com/...07cb60b5-512b-494d-892d-67dc067289b7.png` |
| Instagram icon | `http://image.emails.skechers.com/...b782e0aa-782c-4fb6-967b-d1dfa5ecbfdc.png` |
| Twitter icon | `http://image.emails.skechers.com/...d76a5487-158e-4781-82a4-b65b04c051e4.png` |
| Facebook icon | `http://image.emails.skechers.com/...a5c4cae0-7aed-467a-a3ae-b290eea2a4a2.png` |
| Pinterest icon | `http://image.emails.skechers.com/...573ab181-a4a3-40af-a067-1e301b167d99.png` |
| YouTube icon | `http://image.emails.skechers.com/...8c5738fc-7644-4cbf-8fab-b04355a320a7.png` |
| (3 unnamed images) | `http://image.emails.skechers.com/...` (49468f73, 00100b23, fc08601a) |

The `image.emails.skechers.com` CDN domain supports HTTPS — this appears to be a template configuration error, not a CDN limitation.

**Missing alt text on 4 images:**
- `o.gif` (ink1000 pixel) — no `alt` attribute
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — no `alt` attribute
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — no `alt` attribute
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — no `alt` attribute

Tracking pixels may omit alt text intentionally (`alt=""`), but content images must have descriptive alt text for screen reader accessibility and images-off rendering.

**`-webkit-text-size-adjust: none` applied globally:**
```css
* { -webkit-text-size-adjust: none; }
```
This disables iOS automatic text scaling. Use `100%` instead of `none` to preserve accessibility for users with large-text system settings.

---

### 4. Personalization & Merge Tokens

No unresolved AMPscript or merge tokens (`%%`, `{{`) visible in the truncated HTML. The open-pixel URL contains a resolved subscriber ID (`mi_u=9012945763`), confirming merge fields fired correctly for this test recipient.

---

### 5. Compliance

**SPF/DKIM status unknown:**
QA reports `Authentication-Results` header absent via the AgentMail relay. Cannot confirm SPF pass/DKIM signature validity for `emails.skechers.com`. Must verify via raw message headers in the actual inbox.

**Subject line contains `[Test]` prefix:**
```
[Test]: MKG_US_NA_U_GOLF_PERF_EN_04082026Find the right shoe for your game
```
Two issues: (1) `[Test]` prefix must be removed before production send; (2) campaign ID runs directly into the consumer subject line with no space — `...04082026Find` — indicating a template concatenation error.

**CAN-SPAM / unsubscribe:** Cannot confirm from truncated HTML, but SFMC deployments for Skechers historically include a footer unsubscribe link. Verify physical mailing address and one-click unsubscribe are present in the full render.

---

### 6. Email-to-Site Continuity

All 26 CTA links route through `click.emails.skechers.com` with encrypted `qs=` payloads — destination URLs and UTM parameters are not inspectable from the HTML source. QA was unable to probe these redirects. Manual spot-check of 3–5 CTAs is required to confirm:
- UTM parameters are present (`utm_source`, `utm_medium`, `utm_campaign`)
- `utm_campaign` value matches `MKG_US_NA_U_GOLF_PERF_EN_04082026`
- Landing pages resolve to golf/performance category, not a 404 or homepage fallback

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | `[Test]` prefix + missing space in subject | Remove `[Test]` tag; fix template concatenation so campaign ID does not bleed into consumer subject copy |
| **P0** | Return Path pixel missing protocol | Add `https://` to `pixel.app.returnpath.net/pixel.gif?r=...` |
| **P1** | 14 HTTP image sources | Update all `http://image.emails.skechers.com/` and `http://www.ink1000.com/` `src` values to `https://` |
| **P1** | SPF/DKIM unverified | Pull raw headers from a production inbox or mail tester (e.g. mail-tester.com) before launch |
| **P2** | 4 images missing alt text | Add `alt=""` (decorative) or descriptive alt text to all content images |
| **P2** | Plain-text 78% URLs | Reduce URL density in plain-text alternative; add human-readable copy |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` globally |
| **P3** | UTM parameter verification | Manually verify 3–5 CTAs post-redirect for correct UTM attribution |
| **P3** | Krux DMP pixels | Confirm data syndication consent scope covers current subscriber list |
## Recent history

- [[2026-04-07-test-ret-us-na-u-store1408-zip-en-04092026celebrate-our-birthday-in-buffalo]] — 5/10 (2026-04-07)
- [[2026-04-07-you-ll-love-starting-spring-in-skechers-sandals]] — 6.5/10 (2026-04-07)
- [[2026-04-07-what-s-that-comin-down-the-track]] — 6/10 (2026-04-07)

