---
slug: 2026-03-29-test-mkg-us-na-w-multi-gender-en-03282026-a-v2fresh-spring-styles-to-step-up-you
type: email
date: 2026-03-27
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_W_MULTI_GENDER_EN_03282026_A_V2Fresh Spring Styles to Step Up Your Look"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_W_MULTI_GENDER_EN_03282026_A_V2Fresh Spring Styles to Step Up Your Look
**Score:** 5/10 · **Type:** Email audit · **2026-03-27**
## Executive summary

- A seasonal spring campaign with a solid structural foundation — hero banner, product grid, and best-sellers module all present. But the execution is soft: the discount offer competes with the seasonal messaging, product imagery is small and lacks differentiation at thumbnail scale, and the gender-segmented nav links feel like an afterthought. The email gets the job done without earning attention.
- Functional but forgettable. Moderate CTR likely but low emotional engagement. The core spring story is diluted by a 50% off banner that undercuts the "fresh styles" brand narrative.

## What's working

- **Hero image is on-brand and seasonal** — the "Spring Staples" palm-shadow lifestyle shot communicates the season clearly and has genuine visual warmth.
- **Tight layout** — the email is compact and well-organized; nothing feels chaotic.
- **"Best Selling Styles Going Fast" module** adds urgency without being gimmicky and has a clear CTA.
- **Utility row (app, Klarna, curbside, store finder)** is well-placed at the bottom — expected and useful.
- **Social follow block** is clean and appropriately understated.

## What's weak

- **50% off banner at the top** clashes with the "Spring Staples" aspiration. It reads promotional before it reads seasonal — the brand story never recovers.
- **Product thumbnails are tiny.** The 4-image grid and the BOBs row are too small at email width to drive desire. Shoes need to be seen, and these can't be.
- **"Shop All BOBs" CTA appears mid-email** with no visible explanation of what BOBs is for a cold or lapsed reader.
- **Gender nav links (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE)** are plain text with no visual weight — they look like footer navigation dropped into the body.
- **No personalization signal is visible** — for a multi-gender send, there's no featured persona or curated angle; it's a catalog dump.
- **Preview text is broken/exposed** — the preview shows a raw URL and token string rather than a teaser line, which damages open rates before the email is even opened.

## Recommendations

- 1. **Fix the preview text immediately.** A raw URL in the inbox preview is a deliverability and brand signal failure. Replace with a human-readable teaser.
- 2. **Choose one lead message.** Either it's a spring discovery email OR a 50% off email — not both in the first two modules. Lead with the seasonal story; move the offer lower if it must stay.
- 3. **Enlarge product imagery.** Use 2-up product cards instead of a 4-up thumbnail grid so individual shoes are actually visible and desirable.
- 4. **Label or contextualize "BOBs."** Either add a brief descriptor ("Bobs by Skechers") or remove the category-specific CTA for general sends.
- 5. **Elevate the category nav.** If WOMEN / MEN / KIDS are the desired CTAs, give them button treatment — not a plain-text list.
- 6. **Add one narrative hook to the hero.** The hero CTA currently just says "SHOP NOW" — a spring-specific reason to click ("New arrivals just landed" or "Styles built for warm days") would lift engagement.
- | Priority | Action |
- |----------|--------|
- | **BLOCKER** | Strip `[Test]:` prefix and fix subject line concatenation before any production send |
- | **High** | Migrate all `image.emails.skechers.com` asset URLs from `http://` to `https://` |
- | **High** | Migrate `ink1000.com` tracking pixel to HTTPS |
- | **Medium** | Add descriptive `alt` text to the 3–4 non-pixel content images missing it |
- | **Medium** | Verify SPF/DKIM/DMARC alignment for `emails.skechers.com` against DMARC record |
- | **Medium** | Audit full (non-truncated) HTML for CAN-SPAM footer completeness |
- | **Low** | Change `webkit-text-size-adjust` from `none` to `100%` |
- | **Low** | Remove `maximum-scale=1` viewport restriction |
- | **Low** | Spot-check 2–3 click-redirect destinations for UTM parameter accuracy |

## Full review
## Email Review: Skechers — "Fresh Spring Styles to Step Up Your Look"

---

### 1. Executive Summary

A seasonal spring campaign with a solid structural foundation — hero banner, product grid, and best-sellers module all present. But the execution is soft: the discount offer competes with the seasonal messaging, product imagery is small and lacks differentiation at thumbnail scale, and the gender-segmented nav links feel like an afterthought. The email gets the job done without earning attention.

---

### 2. Business Impact Score: 5 / 10

Functional but forgettable. Moderate CTR likely but low emotional engagement. The core spring story is diluted by a 50% off banner that undercuts the "fresh styles" brand narrative.

---

### 3. What's Working

- **Hero image is on-brand and seasonal** — the "Spring Staples" palm-shadow lifestyle shot communicates the season clearly and has genuine visual warmth.
- **Tight layout** — the email is compact and well-organized; nothing feels chaotic.
- **"Best Selling Styles Going Fast" module** adds urgency without being gimmicky and has a clear CTA.
- **Utility row (app, Klarna, curbside, store finder)** is well-placed at the bottom — expected and useful.
- **Social follow block** is clean and appropriately understated.

---

### 4. What's Weak

- **50% off banner at the top** clashes with the "Spring Staples" aspiration. It reads promotional before it reads seasonal — the brand story never recovers.
- **Product thumbnails are tiny.** The 4-image grid and the BOBs row are too small at email width to drive desire. Shoes need to be seen, and these can't be.
- **"Shop All BOBs" CTA appears mid-email** with no visible explanation of what BOBs is for a cold or lapsed reader.
- **Gender nav links (WOMEN / MEN / KIDS / CLOTHING / NEW ARRIVALS / SALE)** are plain text with no visual weight — they look like footer navigation dropped into the body.
- **No personalization signal is visible** — for a multi-gender send, there's no featured persona or curated angle; it's a catalog dump.
- **Preview text is broken/exposed** — the preview shows a raw URL and token string rather than a teaser line, which damages open rates before the email is even opened.

---

### 5. Recommendations

1. **Fix the preview text immediately.** A raw URL in the inbox preview is a deliverability and brand signal failure. Replace with a human-readable teaser.
2. **Choose one lead message.** Either it's a spring discovery email OR a 50% off email — not both in the first two modules. Lead with the seasonal story; move the offer lower if it must stay.
3. **Enlarge product imagery.** Use 2-up product cards instead of a 4-up thumbnail grid so individual shoes are actually visible and desirable.
4. **Label or contextualize "BOBs."** Either add a brief descriptor ("Bobs by Skechers") or remove the category-specific CTA for general sends.
5. **Elevate the category nav.** If WOMEN / MEN / KIDS are the desired CTAs, give them button treatment — not a plain-text list.
6. **Add one narrative hook to the hero.** The hero CTA currently just says "SHOP NOW" — a spring-specific reason to click ("New arrivals just landed" or "Styles built for warm days") would lift engagement.

---

### 6. Bottom Line

The email has good bones but executes the spring brief halfheartedly. The broken preview text is the most urgent fix. Beyond that, the biggest missed opportunity is visual: the product thumbnails are too small to move inventory. Prioritize fixing preview text and upsizing product presentation before the next send.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Spring seasonal campaign driving site traffic across multiple categories; secondary promotional hook (50% off) present |
| **Hero / primary value prop** | "Spring Staples" lifestyle image with palm-shadow styling; warm and seasonal; "SHOP NOW" CTA only |
| **Offer banner** | 50% off strip at top of email — high prominence, competes with brand story |
| **Product grid** | 4-up thumbnail row with individual "SHOP NOW" buttons; thumbnails too small to differentiate styles |
| **BOBs row** | Secondary product row (slide/flatform styles) with "SHOP ALL BOBs" CTA — no label or explanation visible |
| **Best Sellers module** | "Best Selling Styles Going Fast" — strong urgency framing, single "SHOP NOW" CTA |
| **Category nav links** | Plain text list: WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE — no visual button treatment |
| **Utility module** | App download, Klarna pay-later, curbside pickup, store finder — all represented with icons; functional |
| **Social block** | Icons visible (Facebook, Instagram, YouTube, TikTok, Pinterest); understated |
| **Visible bugs / friction** | Preview text exposes a raw URL/token string in inbox view — visible and damaging |

---

## Technical Audit

## Technical Audit — Skechers "Fresh Spring Styles" (MKG_US_NA_W_MULTI_GENDER_EN_03282026_A_V2)

---

### 1. Technical Summary

This email has a **live-send blocker**: the `[Test]:` prefix remains in the subject line, indicating a test send was distributed rather than the production version. Additionally, 15+ image assets are served over HTTP, which will cause broken images in modern clients that enforce HTTPS-only mixed-content blocking.

---

### 2. Link & Tracking Issues

**[CRITICAL] Test subject prefix not stripped**
Subject line reads: `[Test]: MKG_US_NA_W_MULTI_GENDER_EN_03282026_A_V2Fresh Spring Styles to Step Up Your Look` — the `[Test]:` flag and the campaign ID (`MKG_US_NA_W_MULTI_GENDER_EN_03282026_A_V2`) are both prepended with no space separator before the consumer-facing copy.

**[WARN] 26 click-tracking links not probe-verified**
All CTA links route through `click.emails.skechers.com/?qs=<encrypted-payload>`. The encrypted query strings prevent static destination verification. Destination URLs and UTM parameter integrity could not be confirmed.

**[WARN] Third-party pixel over HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
  ?mi_u=9015215849&mi_ecmp=MKG_US_NA_W_MULTI_GENDER_EN_03282026_A
```
This pixel fires over plain HTTP and carries a subscriber ID (`mi_u=9015215849`). It will be blocked by email clients enforcing mixed-content policy and leaks a PII-adjacent identifier over an unencrypted channel.

**[INFO] Krxd audience-sync beacons present**
Three `beacon.krxd.net` pixels fire with `partner_uid` values including a SHA-256 hashed identifier and a raw subscriber ID (`2396422`). Standard for DMP audience matching but worth confirming against consent/privacy policy.

---

### 3. Rendering & Accessibility

**[HIGH] 15 images served over HTTP**
All assets on `image.emails.skechers.com` use `http://` protocol:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-*.png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-*.png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-*.png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-*.png  (Google Play badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-*.png  (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-*.png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/d76a5487-*.png  (Twitter)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-*.png  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/573ab181-*.png  (Pinterest)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-*.png  (YouTube)
... + 5 additional unnamed assets
```
iOS Mail (iOS 15+) and Gmail enforce HTTPS for remotely loaded images. These will render as broken images for a significant portion of the audience.

**[WARN] 5 images missing `alt` text**
Images without alt attributes identified by QA:
- `o.gif` (ink1000 tracking pixel) — low severity
- `49468f73-*.png` — unknown decorative or content image
- `00100b23-*.png` — unknown
- `fc08601a-*.png` — unknown
- `49468f73-*.png` — unknown

Content images (non-pixel) without alt text degrade screen reader accessibility and appear blank when images are disabled (common in Outlook desktop).

**[INFO] `-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; -webkit-font-smoothing: antialiased; }
```
`none` prevents user font-size adjustments on iOS, which can be an accessibility barrier. `100%` is the recommended value.

**[INFO] `maximum-scale=1` in viewport meta**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
Prevents pinch-to-zoom on mobile — a WCAG 1.4.4 concern.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (`%%`, `{{`, `${`) detected in the available HTML. The campaign ID embedded in the subject line (`A_V2Fresh...`) suggests a concatenation issue at template render time, not a missing variable. Full verification requires the non-truncated source.

---

### 5. Compliance

**[WARN] SPF/DKIM authentication status unverified**
Authentication-Results header not captured via AgentMail relay — SPF and DKIM pass/fail cannot be confirmed. Sending domain is `emails.skechers.com`; DMARC alignment should be verified against the `skechers.com` organizational domain.

**[INFO] Unsubscribe footer not verifiable**
HTML source is truncated; CAN-SPAM–required physical address, unsubscribe mechanism, and sender identification in the footer could not be audited. Recommend re-running against full source.

**[INFO] Open pixel present and functional**
```
https://click.emails.skechers.com/open.aspx?MFSL52BEO5PUPNVRBF4BE7K2XM.100221
```
Standard SFMC open-tracking beacon — HTTPS, expected.

---

### 6. Email-to-Site Continuity

All CTAs pass through `click.emails.skechers.com` encrypted redirects. UTM parameters on destination URLs cannot be verified statically. Recommend spot-checking 2–3 decoded redirect destinations to confirm `utm_source`, `utm_medium`, `utm_campaign` are populated with campaign-specific values (not generic defaults) matching `MKG_US_NA_W_MULTI_GENDER_EN_03282026`.

---

### 7. Recommendations

| Priority | Action |
|----------|--------|
| **BLOCKER** | Strip `[Test]:` prefix and fix subject line concatenation before any production send |
| **High** | Migrate all `image.emails.skechers.com` asset URLs from `http://` to `https://` |
| **High** | Migrate `ink1000.com` tracking pixel to HTTPS |
| **Medium** | Add descriptive `alt` text to the 3–4 non-pixel content images missing it |
| **Medium** | Verify SPF/DKIM/DMARC alignment for `emails.skechers.com` against DMARC record |
| **Medium** | Audit full (non-truncated) HTML for CAN-SPAM footer completeness |
| **Low** | Change `webkit-text-size-adjust` from `none` to `100%` |
| **Low** | Remove `maximum-scale=1` viewport restriction |
| **Low** | Spot-check 2–3 click-redirect destinations for UTM parameter accuracy |
## Recent history

- [[2026-03-29-an-easy-way-to-try-the-comfort-everyone-talks-about]] — 6/10 (2026-03-27)
- [[2026-03-29-meet-the-supernova-rise-3-adaptive]] — 5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-na-m-cozy-gender-en-03282026get-excited-to-step-into-pillow-like-com]] — 5/10 (2026-03-26)

