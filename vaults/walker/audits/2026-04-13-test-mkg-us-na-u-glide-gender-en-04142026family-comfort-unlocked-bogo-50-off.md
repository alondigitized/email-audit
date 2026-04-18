---
slug: 2026-04-13-test-mkg-us-na-u-glide-gender-en-04142026family-comfort-unlocked-bogo-50-off
type: email
date: 2026-04-13
persona: walker
score: "4/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_GLIDE_GENDER_EN_04142026Family Comfort = Unlocked & BOGO 50% off"
tags: [email, score-4, sender/skechers]
---
# [Test]: MKG_US_NA_U_GLIDE_GENDER_EN_04142026Family Comfort = Unlocked & BOGO 50% off
**Score:** 4/10 · **Type:** Email audit · **2026-04-13**
## What's working

- **Clear BOGO offer up top.** "BUY ONE, GET ONE 50% OFF" is the first thing visible; no hunting for the deal.
- **Segmented product rows.** Women / Men / Kids sections are clearly labeled and visually distinct — a family comfort theme is actually executed structurally.
- **Spring Favorites module** adds a seasonal hook and breaks up the scroll.
- **Footer utility block** (store finder, app CTA, social icons) is present and complete.
- **Product imagery is clean and renders without breakage.**

## What's weak

- **Subject line is a production disaster.** It opens with `[Test]:` and then a raw internal filename (`MKG_US_NA_U_GLIDE_GENDER_EN_04142026...`) before the actual promotional copy. This should never reach a live list.
- **Preview text is raw JSON-LD schema markup.** The preheader renders as `[{ "@context": "http://schema.org/"...` — the worst possible first impression in the inbox before opening.
- **Headline is minimal.** "Fresh Shop Glide-Step" is a label, not a hook. No emotional or benefit-driven copy to complement the BOGO offer.
- **CTA buttons are generic and repetitive.** "SHOP NOW" repeated across Women, Men, Kids with no differentiation.
- **Spring Favorites module feels disconnected.** It sits without an obvious link back to the Glide-Step family story — reads as a filler block.
- **No personalization signal.** The email is gender-segmented at the audience level but the render shows no name, no loyalty status, nothing that makes it feel 1:1.

## Recommendations

- 1. **Kill this send immediately if it has not deployed.** The `[Test]:` subject prefix and JSON preheader confirm this is a QA build, not production-ready.
- 2. **Fix preheader injection.** The JSON-LD schema block is leaking into the preview text; it needs to be suppressed or placed after a proper preheader string.
- 3. **Replace subject line with the actual marketing copy.** Strip the test label and filename entirely.
- 4. **Upgrade the hero headline.** Replace "Fresh Shop Glide-Step" with something that connects comfort to family: e.g., *"The whole family walks in comfort — BOGO 50% off, today only."*
- 5. **Differentiate CTAs by segment.** "SHOP WOMEN'S," "SHOP MEN'S," "SHOP KIDS'" — tiny change, measurable lift.
- 6. **Tie Spring Favorites back to the offer.** Add a single line confirming the BOGO applies to Spring Favorites too, or remove the block.
- | Priority | Issue | Action |
- |---|---|---|
- | **Blocker** | `[Test]:` in subject | Strip prefix; verify production subject template before deploy |
- | **Blocker** | Empty greeting merge token | Configure `FirstName` fallback default (`"there"` or equivalent) |
- | **High** | 11 HTTP image sources | Update all `image.emails.skechers.com` and `ink1000.com` `src` values to `https://` |
- | **High** | Return Path pixel — no protocol | Fix to `src="https://pixel.app.returnpath.net/pixel.gif?r=..."` |
- | **High** | Authentication-Results missing | Confirm SPF/DKIM records are valid for `emails.skechers.com`; verify DMARC policy |
- | **High** | List-Unsubscribe header | Verify `List-Unsubscribe` and `List-Unsubscribe-Post` envelope headers are present |
- | **Medium** | Malformed `<meta>` tags | Add `http-equiv` attributes to charset and IE compatibility meta tags |
- | **Medium** | Missing alt text | Add `alt=""` to tracking pixels; add descriptive `alt` to `49468f73-...png` |
- | **Medium** | Subject line spacing | Fix gap between campaign token and consumer copy (`EN_04142026` + space + `Family Comfort`) |
- | **Low** | Duplicate CSS breakpoints | Consolidate 375px/480px/640px blocks to reduce template size and specificity conflicts |
- | **Low** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user text-scaling ability |
- | **Low** | 27 unprobed click links | Manually spot-check primary CTAs for UTM params and destination URL validity |

## Full review
## 2. Business Impact Score

**4 / 10**

The leaked test label and JSON preview text alone are damaging enough to suppress opens and erode brand trust. The underlying creative and offer would score ~6.5 on their own.

---

## 3. What's Working

- **Clear BOGO offer up top.** "BUY ONE, GET ONE 50% OFF" is the first thing visible; no hunting for the deal.
- **Segmented product rows.** Women / Men / Kids sections are clearly labeled and visually distinct — a family comfort theme is actually executed structurally.
- **Spring Favorites module** adds a seasonal hook and breaks up the scroll.
- **Footer utility block** (store finder, app CTA, social icons) is present and complete.
- **Product imagery is clean and renders without breakage.**

---

## 4. What's Weak

- **Subject line is a production disaster.** It opens with `[Test]:` and then a raw internal filename (`MKG_US_NA_U_GLIDE_GENDER_EN_04142026...`) before the actual promotional copy. This should never reach a live list.
- **Preview text is raw JSON-LD schema markup.** The preheader renders as `[{ "@context": "http://schema.org/"...` — the worst possible first impression in the inbox before opening.
- **Headline is minimal.** "Fresh Shop Glide-Step" is a label, not a hook. No emotional or benefit-driven copy to complement the BOGO offer.
- **CTA buttons are generic and repetitive.** "SHOP NOW" repeated across Women, Men, Kids with no differentiation.
- **Spring Favorites module feels disconnected.** It sits without an obvious link back to the Glide-Step family story — reads as a filler block.
- **No personalization signal.** The email is gender-segmented at the audience level but the render shows no name, no loyalty status, nothing that makes it feel 1:1.

---

## 5. Recommendations

1. **Kill this send immediately if it has not deployed.** The `[Test]:` subject prefix and JSON preheader confirm this is a QA build, not production-ready.
2. **Fix preheader injection.** The JSON-LD schema block is leaking into the preview text; it needs to be suppressed or placed after a proper preheader string.
3. **Replace subject line with the actual marketing copy.** Strip the test label and filename entirely.
4. **Upgrade the hero headline.** Replace "Fresh Shop Glide-Step" with something that connects comfort to family: e.g., *"The whole family walks in comfort — BOGO 50% off, today only."*
5. **Differentiate CTAs by segment.** "SHOP WOMEN'S," "SHOP MEN'S," "SHOP KIDS'" — tiny change, measurable lift.
6. **Tie Spring Favorites back to the offer.** Add a single line confirming the BOGO applies to Spring Favorites too, or remove the block.

---

## 6. Bottom Line

Do not deploy this email as-is. The subject line and preview text contain production errors that would publicly expose internal workflow naming conventions and render as broken metadata to every recipient. The underlying creative — BOGO offer, family segmentation, clean product images — is serviceable and worth resending once the defects are corrected.

---

## 7. Subject Line Analysis

- **Subject:** `[Test]: MKG_US_NA_U_GLIDE_GENDER_EN_04142026Family Comfort = Unlocked & BOGO 50% off`
- **Length:** 86 characters
- **Scores (1-10):** Clarity `2`, Curiosity `3`, Personalization `2`, Urgency `4`, Specificity `3`
- **Strengths:**
  - "Family Comfort = Unlocked" is a mildly clever formulation
  - BOGO 50% off is a concrete offer that appears in the line
- **Weaknesses:**
  - `[Test]:` and the internal campaign filename (`MKG_US_NA_U_GLIDE_GENDER_EN_04142026`) are production errors that destroy credibility and consume inbox preview space
  - At 86 chars the line is already truncated in most clients — even without the test garbage, the offer copy barely makes it through
- **Alt A:** `Family Comfort, Unlocked — Buy One, Get One 50% Off Glide-Step`
- **Alt B:** `BOGO 50% off for the whole family — Glide-Step is here`

---

## 8. Evidence

**Overall purpose:** Drive BOGO 50% off purchases across the Skechers Glide-Step franchise, targeting families with gender-segmented product rows.

**Hero / primary value proposition:** A banner at the very top states "BUY ONE, GET ONE 50% OFF" clearly. Below it, "FRESH SHOP GLIDE-STEP" positions the franchise. The offer is visible before any scroll.

**Membership / benefits section:** None visible. No loyalty tier callout, points balance, or member-exclusive framing.

**Product discoverability / recommendation modules:** Three gender-segmented rows (Women, Men, Kids) each contain a grid of Glide-Step styles with a "SHOP NOW" CTA. Images are well-lit and render cleanly. A "Spring Favorites" banner module with a pastel palette follows the Kids row.

**Utility / secondary modules:** Footer contains store-finder CTA, app download prompt (with app store badges), social follow icons, and a "FIND A STORE" link. Standard and complete.

**Bugs / friction / clarity issues (visible in render):**
- `[Test]:` prefix and internal filename are live in the subject line as viewed
- Preview text renders as raw `{ "@context": "http://schema.org/"... }` JSON — visible in inbox metadata before open

---

## Technical Audit

## Technical Audit — SKECHERS BOGO 50% / Glide Gender (04142026)

---

### 1. Technical Summary

Two blocking issues prevent this from being production-ready: an empty first-name merge token produces a broken greeting, and the `[Test]:` subject-line prefix was not stripped before send. Eleven image assets are served over HTTP rather than HTTPS, creating widespread render risk across modern mail clients.

---

### 2. Link & Tracking Issues

**Return Path pixel — malformed URL (no protocol)**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" />
```
Missing `https://` prefix. Browsers and email clients will interpret this as a relative path; the pixel will never fire.

**Ink1000 open pixel — HTTP**
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8086195144&mi_ecmp=MKG_US_NA_U_GLIDE_GENDER_EN_04142026"
```
HTTP-only source. Gmail, Apple Mail (iOS 15+), and Outlook.com will proxy or block this.

**Krux DMP pixels — SHA256-hashed subscriber PII in query string**
```
partner_uid=04592317ec42a02664a302a8ad0f20d4bae6b418656a8ab837e39fab1bb50d29
```
A SHA256-hashed email is transmitted to `beacon.krxd.net`. Confirm this is covered by your CCPA/CPRA and GDPR consent flows; hashed email is still considered personal data under most frameworks.

**27 click-redirect links not probed** — destination URLs and UTM integrity unverified by QA. Manual spot-check of primary CTAs recommended before production send.

---

### 3. Rendering & Accessibility

**11 image assets served over HTTP** — all `image.emails.skechers.com` assets use `http://`, including the Skechers logo, app store badges, social icons, and footer service icons. Gmail image proxy enforces HTTPS; images will fail to load for a significant portion of the list.

Affected assets (representative):
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
... (7 additional)
```

**Missing alt text on 2 images**
- `o.gif` (Ink1000 tracking pixel) — decorative pixels should carry `alt=""`
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no alt text; screen readers will announce the raw filename

**Malformed meta tags — missing `http-equiv` attributes**
```html
<meta content="text/html; charset=utf-8" />           <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                             <!-- missing http-equiv="X-UA-Compatible" -->
```
Both tags are no-ops as written. The charset declaration in particular should be `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />`.

**Duplicate CSS breakpoints** — identical rule sets are declared twice, once for `max-width: 375px` and once for `max-width: 640px`, and again in a second `<style>` block for `max-width: 480px`. The 480px block only resets `.show` and `.mobile-hidden`, partially overlapping the 640px block. This creates unnecessary specificity conflicts and inflates template size.

**`-webkit-text-size-adjust: none` on `*`** — applied to all elements. `none` (vs. `100%`) disables user-ability to scale text in WebKit browsers, which is an accessibility concern and can break WCAG 1.4.4.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty first-name merge token — broken greeting**

QA confirmed the greeting resolves to `"Hi ,"` — the name variable is either unmapped, blank in the subscriber record, or the fallback default was not configured. This will render verbatim for any subscriber with a missing `First Name` field.

Fix: add a conditional default, e.g.:
```
Hi %%[IF EMPTY(FirstName)]%%there%%[ELSE]%%@@FirstName@@%%[ENDIF]%%,
```
(or equivalent AMPscript / Liquid syntax for your ESP).

**Subject line contains internal campaign ID concatenated into subscriber-visible copy**

```
[Test]: MKG_US_NA_U_GLIDE_GENDER_EN_04142026Family Comfort = Unlocked & BOGO 50% off
```
There is no space between the campaign token `EN_04142026` and the consumer-facing copy `Family Comfort`. If the campaign ID is injected via a merge field, the delimiter/space was dropped. The `[Test]:` prefix also remains (see Compliance).

---

### 5. Compliance

**`[Test]:` subject prefix not stripped**
```
Subject: [Test]: MKG_US_NA_U_GLIDE_GENDER_EN_04142026Family Comfort = Unlocked & BOGO 50% off
```
This is a hard blocker — a test-mode flag in the subscriber-visible subject line indicates this send was not promoted to production configuration. Do not deploy with this subject.

**Authentication-Results header not found**
Per QA: `Authentication-Results header not found — SPF/DKIM status unknown (expected via AgentMail relay)`. Cannot confirm SPF pass, DKIM signature, or DMARC alignment. A failed or missing DKIM signature will suppress delivery to Gmail and Yahoo (per their 2024 bulk-sender requirements).

**Unsubscribe** — HTML is truncated; footer unsubscribe link presence could not be confirmed from the provided source. Verify a one-click List-Unsubscribe header (`List-Unsubscribe-Post: List-Unsubscribe=One-Click`) is present in the envelope, as required by Gmail/Yahoo for bulk senders.

**Physical mailing address** — not visible in truncated source. CAN-SPAM §5(a)(5) requires a valid postal address. Confirm it is present in the footer.

---

### 6. Email-to-Site Continuity

The campaign ID `MKG_US_NA_U_GLIDE_GENDER_EN_04142026` appears consistently in the Ink1000 and Krux ad-impression pixels, which is correct. However, the 27 click-redirect links were not probed by QA, so UTM parameter presence and accuracy on destination URLs is unverified. Specifically:

- Confirm `utm_campaign` matches the campaign ID (or an agreed alias) on all CTA links
- Confirm `utm_medium=email` and `utm_source=skechers` (or equivalent) are not stripped by the click-redirect wrapper at `click.emails.skechers.com`

No landing-page 404s or redirect failures can be confirmed without probing the click links directly.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Blocker** | `[Test]:` in subject | Strip prefix; verify production subject template before deploy |
| **Blocker** | Empty greeting merge token | Configure `FirstName` fallback default (`"there"` or equivalent) |
| **High** | 11 HTTP image sources | Update all `image.emails.skechers.com` and `ink1000.com` `src` values to `https://` |
| **High** | Return Path pixel — no protocol | Fix to `src="https://pixel.app.returnpath.net/pixel.gif?r=..."` |
| **High** | Authentication-Results missing | Confirm SPF/DKIM records are valid for `emails.skechers.com`; verify DMARC policy |
| **High** | List-Unsubscribe header | Verify `List-Unsubscribe` and `List-Unsubscribe-Post` envelope headers are present |
| **Medium** | Malformed `<meta>` tags | Add `http-equiv` attributes to charset and IE compatibility meta tags |
| **Medium** | Missing alt text | Add `alt=""` to tracking pixels; add descriptive `alt` to `49468f73-...png` |
| **Medium** | Subject line spacing | Fix gap between campaign token and consumer copy (`EN_04142026` + space + `Family Comfort`) |
| **Low** | Duplicate CSS breakpoints | Consolidate 375px/480px/640px blocks to reduce template size and specificity conflicts |
| **Low** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve user text-scaling ability |
| **Low** | 27 unprobed click links | Manually spot-check primary CTAs for UTM params and destination URL validity |
## Recent history

- [[2026-04-13-from-sneakers-to-sandals-it-s-slip-in-season]] — 5/10 (2026-04-13)
- [[2026-04-13-put-that-10-off-to-good-use]] — 5/10 (2026-04-13)
- [[2026-04-13-save-on-nike-styles-for-the-whole-crew]] — 5/10 (2026-04-13)

