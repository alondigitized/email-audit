---
slug: 2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026-v4feel-good-styles-for-you-them
type: email
date: 2026-04-10
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026_V4Feel-Good Styles for You & Them 🐾"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026_V4Feel-Good Styles for You & Them 🐾
**Score:** 5/10 · **Type:** Email audit · **2026-04-10**
## Executive summary

- **From:** SKECHERS | **Subject:** [Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026_V4Feel-Good Styles for You & Them 🐾
- A National Pet Day–anchored BOGO 50% off promotion for BOBS, with a warm lifestyle hero, gender-split product grids, and a New Arrivals callout. The thematic hook is smart — BOBS has a genuine animal charity tie-in, making Pet Day a natural fit. But the email squanders that goodwill with a test subject line prefix left in, a preview text that renders raw JSON schema markup instead of human copy, and product tiles too small to drive confidence. The bones are solid; the execution has avoidable errors that would embarrass the brand at send.
- Strong concept, meaningful offer, recognized brand. Held back by critical deployment errors and weak product presentation.

## What's working

- **Hero-offer alignment.** The BOGO 50% off is front-and-center in the hero, paired with a lifestyle image of a person and dog that reinforces the Pet Day occasion. The BOBS logo appears prominently — the brand's charitable animal mission gives this day genuine relevance, not just opportunism.
- **Clear gender split.** Separate WOMEN and MEN product grids with distinct "SHOP NOW" CTAs reduce friction — shoppers self-select immediately rather than wading through a mixed feed.
- **New Arrivals module.** The bold typographic treatment creates a visual break and secondary reason to engage beyond the promo.
- **Footer utility.** App download prompt, customer support section, and social row are present and clean at the bottom without cluttering the main flow.

## What's weak

- **Subject line carries a "[Test]:" prefix.** This is an unambiguous deployment error visible at the inbox level. It signals internal process failure to every recipient.
- **Preview text renders raw JSON.** The preview slot shows `[{ "@context": "http://schema.org/", "@type": "Organization"...` — structured data markup instead of a human-readable teaser. This is the second line of text recipients see before opening. It destroys first impression.
- **Product tiles are too small.** The women's and men's grids show thumbnail-sized product images with no visible pricing or product names at this render size. For footwear — a visual, detail-driven category — this undersells the merchandise.
- **"Best Individual Styles" text block is weak.** The category link list (WOMEN, MEN, KIDS, CLOTHING, SALE, NEW ARRIVALS) is plain text with no visual treatment. It reads like a sitemap, not a curated editorial module.
- **Email runs long.** The combined weight of hero + two product grids + New Arrivals + text links + dual utility footer makes this a heavy scroll. No secondary hook justifies the length.

## Recommendations

- 1. **Pull [Test] from subject before any production send** — this is a QA gate failure, not a design issue.
- 2. **Fix preview text immediately.** Replace the JSON fallback with a short, punchy line: "It's National Pet Day — celebrate with BOGO 50% off BOBS."
- 3. **Increase product tile size or reduce grid count.** Show 2–3 hero products per gender at a size where material, color, and silhouette are legible. Sacrifice breadth for conversion confidence.
- 4. **Give "Best Individual Styles" visual weight** — use icon tiles or a simple category card layout. Plain text links at this stage of the scroll won't get clicks.
- 5. **Consider trimming to hero + one gender grid + New Arrivals CTA.** The full-length version warrants a clear editorial reason to exist — a seasonal lookbook, a cause story — that this email doesn't deliver.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Empty greeting `Hi ,` | Add AMPscript/HBS fallback for missing FirstName before send |
- | **P0** | `[Test]:` subject prefix | Remove test prefix from production deployment |
- | **P1** | 13 images on HTTP | Migrate all `image.emails.skechers.com` srcs to `https://` |
- | **P1** | ink1000 pixel on HTTP | Update to `https://` or remove if third-party contract allows |
- | **P1** | Return Path pixel missing protocol | Prepend `https://` to `pixel.app.returnpath.net` src |
- | **P1** | Authentication headers unverified | Validate SPF/DKIM/DMARC alignment via header inspection on a seeded test send |
- | **P2** | `maximum-scale=1` blocks zoom | Change to `maximum-scale=5` |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` |
- | **P2** | Missing `http-equiv` on charset | Add `http-equiv="Content-Type"` attribute |
- | **P3** | Missing alt on content image `49468f73` | Add descriptive alt text |
- | **P3** | Unsubscribe footer not confirmed | Verify CAN-SPAM footer present in full source |
- | **P3** | 27 CTA links unprobed | Manual spot-check UTM params on 3–5 representative CTAs |

## Full review
## SKECHERS BOBS — National Pet Day BOGO Email Review
**From:** SKECHERS | **Subject:** [Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026_V4Feel-Good Styles for You & Them 🐾

---

### 1. Executive Summary

A National Pet Day–anchored BOGO 50% off promotion for BOBS, with a warm lifestyle hero, gender-split product grids, and a New Arrivals callout. The thematic hook is smart — BOBS has a genuine animal charity tie-in, making Pet Day a natural fit. But the email squanders that goodwill with a test subject line prefix left in, a preview text that renders raw JSON schema markup instead of human copy, and product tiles too small to drive confidence. The bones are solid; the execution has avoidable errors that would embarrass the brand at send.

---

### 2. Business Impact Score: **5 / 10**

Strong concept, meaningful offer, recognized brand. Held back by critical deployment errors and weak product presentation.

---

### 3. What's Working

- **Hero-offer alignment.** The BOGO 50% off is front-and-center in the hero, paired with a lifestyle image of a person and dog that reinforces the Pet Day occasion. The BOBS logo appears prominently — the brand's charitable animal mission gives this day genuine relevance, not just opportunism.
- **Clear gender split.** Separate WOMEN and MEN product grids with distinct "SHOP NOW" CTAs reduce friction — shoppers self-select immediately rather than wading through a mixed feed.
- **New Arrivals module.** The bold typographic treatment creates a visual break and secondary reason to engage beyond the promo.
- **Footer utility.** App download prompt, customer support section, and social row are present and clean at the bottom without cluttering the main flow.

---

### 4. What's Weak

- **Subject line carries a "[Test]:" prefix.** This is an unambiguous deployment error visible at the inbox level. It signals internal process failure to every recipient.
- **Preview text renders raw JSON.** The preview slot shows `[{ "@context": "http://schema.org/", "@type": "Organization"...` — structured data markup instead of a human-readable teaser. This is the second line of text recipients see before opening. It destroys first impression.
- **Product tiles are too small.** The women's and men's grids show thumbnail-sized product images with no visible pricing or product names at this render size. For footwear — a visual, detail-driven category — this undersells the merchandise.
- **"Best Individual Styles" text block is weak.** The category link list (WOMEN, MEN, KIDS, CLOTHING, SALE, NEW ARRIVALS) is plain text with no visual treatment. It reads like a sitemap, not a curated editorial module.
- **Email runs long.** The combined weight of hero + two product grids + New Arrivals + text links + dual utility footer makes this a heavy scroll. No secondary hook justifies the length.

---

### 5. Recommendations

1. **Pull [Test] from subject before any production send** — this is a QA gate failure, not a design issue.
2. **Fix preview text immediately.** Replace the JSON fallback with a short, punchy line: "It's National Pet Day — celebrate with BOGO 50% off BOBS."
3. **Increase product tile size or reduce grid count.** Show 2–3 hero products per gender at a size where material, color, and silhouette are legible. Sacrifice breadth for conversion confidence.
4. **Give "Best Individual Styles" visual weight** — use icon tiles or a simple category card layout. Plain text links at this stage of the scroll won't get clicks.
5. **Consider trimming to hero + one gender grid + New Arrivals CTA.** The full-length version warrants a clear editorial reason to exist — a seasonal lookbook, a cause story — that this email doesn't deliver.

---

### 6. Bottom Line

The National Pet Day × BOBS angle is genuinely earned and the BOGO offer is compelling. But two deployment-level errors — the test prefix and the broken preview text — mean this email would underperform regardless of creative quality. Fix those first. Then invest in product tile legibility, which is the conversion bottleneck.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | BOGO 50% off BOBS styles, anchored to National Pet Day |
| **Hero / primary value prop** | Lifestyle image (person + dog outdoors), BOGO offer, BOBS logo, "Celebrate National Pet Day" copy — thematically cohesive, strong emotional framing |
| **Membership / benefits** | Not present in this email |
| **Product discoverability** | Women's sandal/slide grid and Men's athletic/casual grid — both have "SHOP NOW" CTAs; product images are small with no visible pricing or names |
| **Utility / secondary modules** | New Arrivals banner (bold typographic treatment); category text-link block; app download prompt; customer support section; social media row |
| **Bugs / friction (visible)** | [Test]: prefix in subject line visible; preview text displays raw JSON schema markup instead of copy; product tiles too small to assess product detail |

---

## Technical Audit

## Technical Audit — SKECHERS BOBS `MKG_US_NA_U_BOBS_PROD_EN_04112026`

---

### 1. Technical Summary

One broken personalization token will render visibly corrupted for all recipients; 14 image assets are served over HTTP and will be blocked or display as broken in clients that enforce HTTPS. Authentication header data was not captured, leaving deliverability posture unverified.

---

### 2. Link & Tracking Issues

**[WARN] 27 click-tracking links not probed** — All CTAs route through `click.emails.skechers.com` (SFMC redirect). Destination URLs and UTM integrity could not be verified programmatically; manual spot-check of final landing URLs is required before send.

**[WARN] ink1000.com pixel served over HTTP**
```
src: http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
     ?mi_u=8021648903&mi_ecmp=MKG_US_NA_U_BOBS_PROD_EN_04112026
```
Mixed-content HTTP pixel will be blocked silently in Gmail, Apple Mail, and Outlook 365. This defeats the third-party engagement signal entirely.

**[WARN] Return Path seed pixel missing protocol**
```
src: pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79...
```
No `http://` or `https://` prefix — protocol-relative URLs are not supported in all email clients. Should be `https://pixel.app.returnpath.net/...`.

---

### 3. Rendering & Accessibility

**[WARN] 13 production images served over HTTP** — All `image.emails.skechers.com` assets use `http://`:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/00100b23-...png  (Curbside Pickup)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/fc08601a-...png  (Find A Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...png  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-...png  (YouTube)
```
The CDN at `image.emails.skechers.com` almost certainly supports HTTPS — this appears to be a template-level misconfiguration, not a CDN limitation.

**[WARN] Missing alt text** on two images:
- `o.gif` (ink1000 tracking pixel) — low severity for a tracking pixel, but triggers spam filters
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unknown content image with no fallback text

**[WARN] Accessibility — zoom disabled**
```css
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
* { -webkit-text-size-adjust: none; }
```
`maximum-scale=1` blocks pinch-to-zoom on mobile (WCAG 1.4.4 violation). `-webkit-text-size-adjust: none` applied globally prevents iOS from scaling text for low-vision users. These should be `maximum-scale=5` and `-webkit-text-size-adjust: 100%` respectively.

**[WARN] Missing `http-equiv` on charset meta**
```html
<meta content="text/html; charset=utf-8" />
```
Should be `<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />`. Some legacy clients (Outlook 2007–2013) will not parse charset without the `http-equiv` attribute.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty greeting name token** — QA confirmed the greeting renders as `Hi ,` with a blank name field. The merge token (likely `%%FirstName%%` or equivalent SFMC AMPscript) resolved to an empty string. This will be visible to all recipients whose profile is missing a first name value. A fallback is required:

```
// SFMC AMPscript pattern
%%[IF EMPTY(FirstName) THEN]%%
  Hi there,
%%[ELSE]%%
  Hi %%FirstName%%,
%%[ENDIF]%%
```

**[INFO] Subject line contains `[Test]:` prefix**
```
Subject: [Test]: MKG_US_NA_U_BOBS_PROD_EN_04112026_V4Feel-Good Styles for You & Them 🐾
```
This is a test-mode send. Confirm the production deployment strips this prefix before live send.

---

### 5. Compliance

**[WARN] Authentication-Results header not captured** — SPF and DKIM pass/fail status is unknown for this relay path. With DMARC enforcement increasingly common, an unverified authentication chain is a deliverability risk. Confirm SPF alignment for `emails.skechers.com` and that DKIM is signing on behalf of the sending domain.

**[INFO] Unsubscribe / CAN-SPAM** — HTML is truncated; footer unsubscribe link and physical mailing address could not be confirmed in the provided source. These must be present and functional per CAN-SPAM §5(a)(3) and §5(a)(5). Verify in full source.

**[INFO] Krux/Salesforce DMP beacons present** — Three `beacon.krxd.net` pixels fire on open, including a `partner_uid` cross-device match. Confirm this data collection is disclosed in Skechers' privacy policy and compliant with any applicable state privacy laws (CCPA) for the US recipient list.

---

### 6. Email-to-Site Continuity

**[UNVERIFIABLE]** — All 27 CTAs route through `click.emails.skechers.com` click-redirect and could not be probed. UTM parameter presence (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) on final destination URLs must be manually verified. The campaign ID `MKG_US_NA_U_BOBS_PROD_EN_04112026` is consistently present in tracking pixel parameters, which is a positive signal for backend attribution consistency.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Empty greeting `Hi ,` | Add AMPscript/HBS fallback for missing FirstName before send |
| **P0** | `[Test]:` subject prefix | Remove test prefix from production deployment |
| **P1** | 13 images on HTTP | Migrate all `image.emails.skechers.com` srcs to `https://` |
| **P1** | ink1000 pixel on HTTP | Update to `https://` or remove if third-party contract allows |
| **P1** | Return Path pixel missing protocol | Prepend `https://` to `pixel.app.returnpath.net` src |
| **P1** | Authentication headers unverified | Validate SPF/DKIM/DMARC alignment via header inspection on a seeded test send |
| **P2** | `maximum-scale=1` blocks zoom | Change to `maximum-scale=5` |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` |
| **P2** | Missing `http-equiv` on charset | Add `http-equiv="Content-Type"` attribute |
| **P3** | Missing alt on content image `49468f73` | Add descriptive alt text |
| **P3** | Unsubscribe footer not confirmed | Verify CAN-SPAM footer present in full source |
| **P3** | 27 CTA links unprobed | Manual spot-check UTM params on 3–5 representative CTAs |
## Recent history

- [[2026-04-11-test-mkg-us-na-w-seasonal-gender-en-04112026-v4the-perfect-pair-or-2-for-her]] — 5/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026-v3feel-good-styles-for-you-them]] — 5/10 (2026-04-10)
- [[2026-04-10-test-mkg-us-na-u-bobs-prod-en-04112026-v2feel-good-styles-for-you-them]] — 6.5/10 (2026-04-10)

