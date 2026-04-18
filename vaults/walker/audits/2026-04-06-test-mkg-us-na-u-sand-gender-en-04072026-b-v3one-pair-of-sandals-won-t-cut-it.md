---
slug: 2026-04-06-test-mkg-us-na-u-sand-gender-en-04072026-b-v3one-pair-of-sandals-won-t-cut-it
type: email
date: 2026-04-06
persona: walker
score: "6.5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_SAND_GENDER_EN_04072026_B_V3One Pair of Sandals Won’t Cut It"
tags: [email, score-7, sender/skechers]
---
# [Test]: MKG_US_NA_U_SAND_GENDER_EN_04072026_B_V3One Pair of Sandals Won’t Cut It
**Score:** 6.5/10 · **Type:** Email audit · **2026-04-06**
## Executive summary

- A solid seasonal sandal push with clear gender segmentation and a strong top-of-fold offer. The email does its job — it communicates breadth of range and delivers a meaningful discount — but it leans heavily on simple product tiles and misses an opportunity to create any real desire or urgency below the fold. The "Walking in Style" module adds texture but competes with rather than supports the primary segmented browse structure.

## What's working

- **Offer is visible and immediate.** "Buy One Get One 50% Off on 50+ Styles" lands in the first scroll with a clear CTA. Shoppers know the deal before they read a single line of copy.
- **Gender segmentation is clean.** Women / Men / Kids each get a dedicated tile with a distinct product image and a direct CTA ("Shop Women's Sandals," etc.). Reduces decision fatigue and routes users cleanly.
- **Structural simplicity works at mobile scale.** The stacked layout is readable at this size — nothing is crowded or hard to parse.
- **"Only at Skechers" callout** adds a mild exclusivity signal, which helps justify engagement over a generic sandal search.

## What's weak

- **Hero image is generic.** A lifestyle beach/family shot communicates season but shows no specific product with enough clarity to generate desire. The link between "these shoes" and "this lifestyle" is not made.
- **"Walking in Style" module is disconnected.** It appears as a secondary lifestyle block after the three category tiles, but it doesn't name a specific product, collection, or story. It floats.
- **No price anchoring below the promo banner.** After the BOGO offer, no prices appear — users have no sense of what they're buying into beyond the discount.
- **Product tiles are sparse.** Each category (Women, Men, Kids) is represented by a single image. There's no sense of how many styles exist or what the most popular ones are.
- **Preview text is broken.** The email preview reads: *"Skechers® https://view.emails.skechers.com/?vawpToken=... web version https://..."* — a raw URL is exposed in the preheader. This is the first thing a recipient sees before opening; it undermines credibility immediately.
- **Subject line carries test naming convention.** `[Test]: MKG_US_NA_U_SAND_GENDER_EN_04072026_B_V3` should never reach a real inbox. Confirm this is review-only before any send.

## Recommendations

- 1. **Fix the preheader immediately.** Replace the raw URL dump with a real preheader: something like *"Your warm-weather lineup starts here — BOGO 50% off sandals."*
- 2. **Strip the test subject line prefix** before any live deployment.
- 3. **Add 2–3 product callouts per category.** A quick horizontal scroll or mini-grid under each gender tile shows range and creates pull toward clicking.
- 4. **Anchor the "Walking in Style" block to something specific** — a collection name, a top style, a price point. As-is it adds imagery without meaning.
- 5. **Introduce urgency.** The BOGO offer has no end date in view. Even a "This Week Only" line lifts conversion on time-limited promotions.
- 6. **Consider a best-seller badge** on one product per category. Social proof ("Our #1 Women's Sandal") drives clicks better than "Shop Women's Sandals."
- | Priority | Issue | Action |
- |---|---|---|
- | **Critical** | Subject line contains `[Test]:` prefix and raw campaign code | Strip to: `One Pair of Sandals Won't Cut It` |
- | **Critical** | 15 image assets served over HTTP | Migrate all `http://image.emails.skechers.com/` srcs to `https://` |
- | **High** | Return Path pixel has no protocol prefix | Add `https://` to `pixel.app.returnpath.net/pixel.gif` src |
- | **High** | ink1000 open pixel uses HTTP | Change `http://www.ink1000.com/...` to `https://` |
- | **High** | SPF/DKIM unconfirmed | Perform seed send and verify `Authentication-Results` header shows pass |
- | **Medium** | 4 images missing alt text | Add descriptive `alt` attributes to content images; `alt=""` on tracking pixels |
- | **Medium** | Krux `partner_uid=7187828` may be hardcoded | Confirm dynamic merge field resolves correctly per subscriber |
- | **Medium** | `ink1000` `mi_u` value may be hardcoded test ID | Confirm dynamic substitution in production |
- | **Low** | `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
- | **Low** | `-webkit-text-size-adjust: none` global rule | Change to `100%` to preserve user text scaling (WCAG 1.4.4) |

## Full review
## 1. Executive Summary

A solid seasonal sandal push with clear gender segmentation and a strong top-of-fold offer. The email does its job — it communicates breadth of range and delivers a meaningful discount — but it leans heavily on simple product tiles and misses an opportunity to create any real desire or urgency below the fold. The "Walking in Style" module adds texture but competes with rather than supports the primary segmented browse structure.

---

## 2. Business Impact Score: **6.5 / 10**

---

## 3. What's Working

- **Offer is visible and immediate.** "Buy One Get One 50% Off on 50+ Styles" lands in the first scroll with a clear CTA. Shoppers know the deal before they read a single line of copy.
- **Gender segmentation is clean.** Women / Men / Kids each get a dedicated tile with a distinct product image and a direct CTA ("Shop Women's Sandals," etc.). Reduces decision fatigue and routes users cleanly.
- **Structural simplicity works at mobile scale.** The stacked layout is readable at this size — nothing is crowded or hard to parse.
- **"Only at Skechers" callout** adds a mild exclusivity signal, which helps justify engagement over a generic sandal search.

---

## 4. What's Weak

- **Hero image is generic.** A lifestyle beach/family shot communicates season but shows no specific product with enough clarity to generate desire. The link between "these shoes" and "this lifestyle" is not made.
- **"Walking in Style" module is disconnected.** It appears as a secondary lifestyle block after the three category tiles, but it doesn't name a specific product, collection, or story. It floats.
- **No price anchoring below the promo banner.** After the BOGO offer, no prices appear — users have no sense of what they're buying into beyond the discount.
- **Product tiles are sparse.** Each category (Women, Men, Kids) is represented by a single image. There's no sense of how many styles exist or what the most popular ones are.
- **Preview text is broken.** The email preview reads: *"Skechers® https://view.emails.skechers.com/?vawpToken=... web version https://..."* — a raw URL is exposed in the preheader. This is the first thing a recipient sees before opening; it undermines credibility immediately.
- **Subject line carries test naming convention.** `[Test]: MKG_US_NA_U_SAND_GENDER_EN_04072026_B_V3` should never reach a real inbox. Confirm this is review-only before any send.

---

## 5. Recommendations

1. **Fix the preheader immediately.** Replace the raw URL dump with a real preheader: something like *"Your warm-weather lineup starts here — BOGO 50% off sandals."*
2. **Strip the test subject line prefix** before any live deployment.
3. **Add 2–3 product callouts per category.** A quick horizontal scroll or mini-grid under each gender tile shows range and creates pull toward clicking.
4. **Anchor the "Walking in Style" block to something specific** — a collection name, a top style, a price point. As-is it adds imagery without meaning.
5. **Introduce urgency.** The BOGO offer has no end date in view. Even a "This Week Only" line lifts conversion on time-limited promotions.
6. **Consider a best-seller badge** on one product per category. Social proof ("Our #1 Women's Sandal") drives clicks better than "Shop Women's Sandals."

---

## 6. Bottom Line

The email is functional and structurally sound. It will drive some sandal browsing. But it's playing not to lose rather than playing to win — the offer is good, the execution is adequate, and nothing about the creative is memorable. The preheader bug is the most urgent fix; it actively damages brand trust before the email is even opened.

---

## 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Seasonal sandal push, BOGO 50% off promotion, gender-segmented browse |
| **Hero / primary value prop** | Lifestyle shot of family at beach, BOGO offer overlay, "Sandal Season" headline with "Shop Now" CTA |
| **Membership / benefits** | Not present in this email |
| **Product discoverability** | Three gender tiles (Women, Men, Kids) each with single product image and labeled CTA; "Only at Skechers" module with product image and CTA |
| **Utility / secondary modules** | Footer navigation (Women, Men, Kids, Clothing, New Arrivals, Sale); app download links; currency picker; social icons; legal/unsubscribe block |
| **Bugs / friction** | Preview text contains raw URL string (visible in subject metadata); subject line contains internal test naming convention — both are pre-open credibility issues |

---

## Technical Audit

## Technical Audit — Skechers Sandals Email
**Campaign:** `MKG_US_NA_U_SAND_GENDER_EN_04072026_B_V3`
**From:** `no-reply@emails.skechers.com`

---

### 1. Technical Summary

The email has a pervasive HTTP (non-HTTPS) image asset problem across all footer and social images hosted on `image.emails.skechers.com`, creating mixed-content blocking risk in major clients. Additionally, the subject line contains a `[Test]:` prefix and a raw campaign code token that must be stripped before production deployment.

---

### 2. Link & Tracking Issues

**Issues found:**

- **Return Path pixel missing protocol.** The src is `pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499` — no `http://` or `https://` prefix. This is a malformed URL and the pixel will silently fail to fire in most clients.
- **ink1000.com open pixel uses HTTP.** `src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=9012945763&mi_ecmp=MKG_US_NA_U_SAND_GENDER_EN_04072026_B"` — non-HTTPS; blocked by Gmail and modern clients over secure connections. Open tracking data for this pixel will be lost.
- **26 click links unverifiable.** All CTAs route through `click.emails.skechers.com` with encrypted `qs` payloads. Destination URLs and UTM parameters cannot be confirmed without decoding. This is expected for SFMC but QA tooling flagged all 26 as skipped.
- **Krux DMP user-match beacons present.** Two `beacon.krxd.net` pixels fire with `partner_uid` values. `partner_uid=7187828` appears to be a hardcoded test subscriber ID — confirm this resolves to a dynamic merge token in production sends.

---

### 3. Rendering & Accessibility

**Issues found:**

- **15 images served over HTTP** from `image.emails.skechers.com`. Gmail (since 2013), Apple Mail, and Outlook with secure settings will block or proxy-strip these. Affected assets include the Skechers logo, App Store/Google Play badges, all social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), AfterPay logo, and two unlabeled content images. All should use `https://`.
- **4 images missing `alt` text:**
  - `o.gif` (ink1000 tracking pixel) — acceptable for tracking pixels but should use `alt=""`
  - `49468f73-4651-4af3-bea2-61d1ae5db486.png` — content image with no alt
  - `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — content image with no alt
  - `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — content image with no alt
- **Malformed `<meta>` tags.** Both `<meta content="text/html; charset=utf-8" />` and `<meta content="IE=Edge" />` are missing `http-equiv` attributes (`http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` respectively). Technically invalid; may cause charset or IE rendering fallback issues.
- **`-webkit-text-size-adjust: none`** applied globally via `* {}` rule. This prevents users from scaling text on iOS, failing WCAG 1.4.4 (Resize Text, Level AA).

---

### 4. Personalization & Merge Tokens

**Issues found:**

- **Subject line contains raw campaign code and test prefix:** `[Test]: MKG_US_NA_U_SAND_GENDER_EN_04072026_B_V3One Pair of Sandals Won't Cut It`. The `[Test]:` flag and the campaign ID `MKG_US_NA_U_SAND_GENDER_EN_04072026_B_V3` are concatenated directly into the subject with no space before "One Pair." This must be cleaned to just `One Pair of Sandals Won't Cut It` before live deployment.
- **`mi_u=9012945763` in ink1000 pixel** — confirm this is a dynamic subscriber ID merge field and not a hardcoded test value.
- No unresolved `%%merge%%` or `{{handlebars}}` tokens visible in the truncated HTML source.

---

### 5. Compliance

**Issues found:**

- **SPF/DKIM authentication status unknown.** The QA relay (AgentMail) did not capture `Authentication-Results` headers, so SPF/DKIM pass/fail cannot be confirmed. This must be verified via a seed send or header inspection before deployment — failed auth increases spam folder placement risk.
- **`[Test]:` subject prefix** must be removed; deploying with this prefix violates sender hygiene best practices and would confuse recipients.
- CAN-SPAM physical address and unsubscribe link are not visible in the truncated HTML but are expected in the footer — confirm both are present in the full source.

---

### 6. Email-to-Site Continuity

**No confirmed issues, but unverifiable.**

All 26 CTAs use SFMC encrypted click-redirect URLs (`click.emails.skechers.com/?qs=...`). UTM parameters are embedded inside the encrypted payload and cannot be inspected without decoding. Recommend manually decoding one representative CTA URL to confirm `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` values are populated and match the campaign ID `MKG_US_NA_U_SAND_GENDER_EN_04072026_B_V3`.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Critical** | Subject line contains `[Test]:` prefix and raw campaign code | Strip to: `One Pair of Sandals Won't Cut It` |
| **Critical** | 15 image assets served over HTTP | Migrate all `http://image.emails.skechers.com/` srcs to `https://` |
| **High** | Return Path pixel has no protocol prefix | Add `https://` to `pixel.app.returnpath.net/pixel.gif` src |
| **High** | ink1000 open pixel uses HTTP | Change `http://www.ink1000.com/...` to `https://` |
| **High** | SPF/DKIM unconfirmed | Perform seed send and verify `Authentication-Results` header shows pass |
| **Medium** | 4 images missing alt text | Add descriptive `alt` attributes to content images; `alt=""` on tracking pixels |
| **Medium** | Krux `partner_uid=7187828` may be hardcoded | Confirm dynamic merge field resolves correctly per subscriber |
| **Medium** | `ink1000` `mi_u` value may be hardcoded test ID | Confirm dynamic substitution in production |
| **Low** | `<meta>` tags missing `http-equiv` | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` |
| **Low** | `-webkit-text-size-adjust: none` global rule | Change to `100%` to preserve user text scaling (WCAG 1.4.4) |
## Recent history

- [[2026-04-06-test-mkg-us-na-u-sand-gender-en-04072026-b-v2one-pair-of-sandals-won-t-cut-it]] — 6.5/10 (2026-04-06)
- [[2026-04-06-test-mkg-us-na-u-sand-gender-en-04072026-bone-pair-of-sandals-won-t-cut-it]] — 6.5/10 (2026-04-06)
- [[2026-04-06-out-with-the-old-into-spring]] — 6/10 (2026-04-06)

