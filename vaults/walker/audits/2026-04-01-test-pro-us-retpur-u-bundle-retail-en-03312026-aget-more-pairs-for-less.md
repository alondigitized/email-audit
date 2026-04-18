---
slug: 2026-04-01-test-pro-us-retpur-u-bundle-retail-en-03312026-aget-more-pairs-for-less
type: email
date: 2026-03-30
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_AGet More Pairs for Less"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_AGet More Pairs for Less
**Score:** 5/10 · **Type:** Email audit · **2026-03-30**
## Executive summary

- A functional but under-powered BOGO promotional email. The offer is clear up top, but the execution loses momentum fast — category modules feel like filler rather than inspiration, and the email leans heavily on navigation links instead of doing the merchandising work itself. For a BOGO sale, there are zero actual product prices shown, no urgency signals, and no curated bundle pairings that would actually encourage the multi-pair purchase behavior this promotion requires.
- Communicates the offer. Doesn't sell it.

## What's working

- **Hero clarity.** "Spring Sale — Buy One, Get One 50% Off" reads immediately. The offer is the headline and gets top-of-fold placement.
- **In-store CTA included.** "Find a Store" alongside online shopping acknowledges the retail-driven nature of this promotion.
- **Category coverage.** Women's, Men's, Kids' are all represented, which is appropriate for a broad BOGO.
- **Afterpay** is surfaced in the footer utility bar, which adds purchase confidence for a multi-pair buy.

## What's weak

- **The offer mechanics are absent.** There is no explanation of how BOGO works — minimum spend, eligible styles, exclusions, expiration. Shoppers seeing "50% off" with no context will hesitate or leave.
- **Product images don't sell pairs.** Each category module shows one shoe lifestyle image. BOGO logic demands you show *two* shoes side-by-side or frame the second-pair benefit explicitly.
- **No urgency.** No end date, no "limited time," no countdown. This undercuts conversion on a promotional email entirely.
- **"This Just In" module is a distraction.** Dropping a new arrivals feature mid-BOGO email splits attention and dilutes the core call-to-action.
- **The "Shop Additional Styles" text-link block** (Women / Men / Kids / Clothing / New Arrivals / Sale) reads like a nav bar, not a promotional module. It fills space without driving action.
- **Preview text is broken.** The subject preview visible in the header reads as a raw URL/token string — this is a significant deliverability and first-impression issue before the email is even opened.

## Recommendations

- 1. **Add offer terms inline** — at minimum: "Valid through [date] on select styles" beneath the hero.
- 2. **Merchandise the pair.** Show two complementary shoes together in at least the Women's and Men's modules with a "Your second pair is 50% off" callout.
- 3. **Kill or relocate "This Just In."** New arrivals don't belong inside a BOGO sale email. Move it to its own send.
- 4. **Add a deadline.** Even "This Weekend Only" doubles urgency without needing an exact date.
- 5. **Fix the preview text.** A URL token as preview text is a production error that hurts open rates and looks broken in every inbox.
- 6. **Replace text nav links with visual tiles.** The "Shop Additional Styles" block should use thumbnail images with CTAs, not plain text links.
- | Priority | Action |
- |---|---|
- | **P0** | Fix subject line template — isolate variant suffix (`_A`) from subject copy with proper delimiter |
- | **P0** | Add `https://` protocol to the Return Path pixel URL |
- | **P0** | Confirm SPF/DKIM authentication passes on production domain |
- | **P1** | Migrate all `image.emails.skechers.com` image URLs from HTTP to HTTPS |
- | **P1** | Upgrade Ink1000 open pixel to HTTPS |
- | **P2** | Add `alt=""` to tracking pixels; add descriptive alt text to the 4 flagged content images |
- | **P2** | Scope `-webkit-text-size-adjust: none` to layout containers, not `*` |
- | **P3** | Verify Krux `partner_uid` values are dynamically rendered per recipient, not test-hardcoded |
- | **P3** | Spot-decode 3+ click URLs to confirm UTM parameter alignment |

## Full review
## Skechers "Spring Sale — Buy One, Get One 50% Off" Email Review

---

### 1. Executive Summary

A functional but under-powered BOGO promotional email. The offer is clear up top, but the execution loses momentum fast — category modules feel like filler rather than inspiration, and the email leans heavily on navigation links instead of doing the merchandising work itself. For a BOGO sale, there are zero actual product prices shown, no urgency signals, and no curated bundle pairings that would actually encourage the multi-pair purchase behavior this promotion requires.

---

### 2. Business Impact Score: **5/10**

Communicates the offer. Doesn't sell it.

---

### 3. What's Working

- **Hero clarity.** "Spring Sale — Buy One, Get One 50% Off" reads immediately. The offer is the headline and gets top-of-fold placement.
- **In-store CTA included.** "Find a Store" alongside online shopping acknowledges the retail-driven nature of this promotion.
- **Category coverage.** Women's, Men's, Kids' are all represented, which is appropriate for a broad BOGO.
- **Afterpay** is surfaced in the footer utility bar, which adds purchase confidence for a multi-pair buy.

---

### 4. What's Weak

- **The offer mechanics are absent.** There is no explanation of how BOGO works — minimum spend, eligible styles, exclusions, expiration. Shoppers seeing "50% off" with no context will hesitate or leave.
- **Product images don't sell pairs.** Each category module shows one shoe lifestyle image. BOGO logic demands you show *two* shoes side-by-side or frame the second-pair benefit explicitly.
- **No urgency.** No end date, no "limited time," no countdown. This undercuts conversion on a promotional email entirely.
- **"This Just In" module is a distraction.** Dropping a new arrivals feature mid-BOGO email splits attention and dilutes the core call-to-action.
- **The "Shop Additional Styles" text-link block** (Women / Men / Kids / Clothing / New Arrivals / Sale) reads like a nav bar, not a promotional module. It fills space without driving action.
- **Preview text is broken.** The subject preview visible in the header reads as a raw URL/token string — this is a significant deliverability and first-impression issue before the email is even opened.

---

### 5. Recommendations

1. **Add offer terms inline** — at minimum: "Valid through [date] on select styles" beneath the hero.
2. **Merchandise the pair.** Show two complementary shoes together in at least the Women's and Men's modules with a "Your second pair is 50% off" callout.
3. **Kill or relocate "This Just In."** New arrivals don't belong inside a BOGO sale email. Move it to its own send.
4. **Add a deadline.** Even "This Weekend Only" doubles urgency without needing an exact date.
5. **Fix the preview text.** A URL token as preview text is a production error that hurts open rates and looks broken in every inbox.
6. **Replace text nav links with visual tiles.** The "Shop Additional Styles" block should use thumbnail images with CTAs, not plain text links.

---

### 6. Bottom Line

The offer is legible but the email doesn't work for it. BOGO is a behavior-change promotion — it requires showing the second pair, explaining the mechanic, and creating urgency. This email delivers a headline and then mostly hands the shopper a nav menu. One structural change (merchandising actual pairs together) and one fix (the preview text) would meaningfully improve this send.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | BOGO 50% off Spring Sale promotional email targeting returning purchasers |
| **Hero / primary value prop** | "Spring Sale — Buy One, Get One 50% Off" with SHOP NOW + Find a Store CTAs — clear but unsupported by offer details |
| **Membership / benefits** | Not present |
| **Product discoverability** | Three category modules (Women's, Men's, Kids') each with a single lifestyle image and one CTA — minimal merchandising depth |
| **Utility / secondary modules** | "This Just In" new arrivals section, text-based category nav block, Afterpay + Find a Store footer bar |
| **Bugs / friction / clarity issues** | Preview text renders as a raw URL/token string — visible production error; no offer expiration or terms visible anywhere in the email |

---

## Technical Audit

## Technical Audit — Skechers BOGO Retail Email
**Campaign:** `PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_A` | **Date:** 2026-03-31

---

### 1. Technical Summary

Test-flagged send via Salesforce Marketing Cloud with a malformed subject line (variant suffix concatenated directly into subject text). Primary technical defects are pervasive HTTP image hosting across all content and footer images, a broken Return Path monitoring pixel missing its URL protocol, and four images with no alt text.

---

### 2. Link & Tracking Issues

**Subject line construction bug (HIGH)**
The subject reads: `[Test]: PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_AGet More Pairs for Less`
The variant character `A` is concatenated directly with the subject copy — no delimiter. Expected: `...03312026_A | Get More Pairs for Less` or equivalent. This is a template variable assembly failure.

**Return Path pixel — missing protocol (HIGH)**
```
pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
No `http://` or `https://` prefix. This renders as a broken relative URL in all email clients; the Validity/Return Path seed-list monitoring pixel will not fire.

**Third-party data-sync pixels (INFO)**
Three Krux/Salesforce Audience Studio pixels fire on open — one user-match against a hashed email, one against a plain subscriber ID (`partner_uid=115584018`), one impression beacon. Confirm these are dynamically populated per recipient and not hardcoded test values leaking into production.

**26 click-redirect links** — all route through `click.emails.skechers.com`; not probed per QA config. UTM continuity cannot be verified without decoding (see Section 6).

---

### 3. Rendering & Accessibility

**HTTP image sources — pervasive (HIGH)**
13 images confirmed served over `http://` from `image.emails.skechers.com` and `http://www.ink1000.com`. Gmail, Outlook.com, and Apple Mail proxy or block mixed-content HTTP sources. Affected assets include the Skechers logo, app store badges, all social icons, the AfterPay badge, and the Movable Ink open-tracking pixel. Example:
```
src="http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png"
```

**Missing alt text — 4 images confirmed**
- `o.gif` (Ink1000 tracking pixel) — `src: http://www.ink1000.com/...`
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

Tracking/spacer pixels can carry `alt=""` (acceptable), but named content images require descriptive alt text.

**Global `text-size-adjust` override**
```css
* { -webkit-text-size-adjust: none; }
```
Applied to all elements. This blocks user-initiated font scaling and harms accessibility for low-vision users. Scope this to specific layout containers where zoom causes layout breakage rather than applying globally.

---

### 4. Personalization & Merge Tokens

No unresolved merge token syntax (e.g., `%%`, `{{`, `[[`) visible in the provided HTML. Campaign ID `PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_A` is correctly and consistently referenced across all tracking pixels. No issues confirmed from available source.

---

### 5. Compliance

**SPF/DKIM — unverified (HIGH)**
`Authentication-Results` header absent from AgentMail relay capture. SPF/DKIM pass/fail status is unknown. Must be confirmed before production deployment — failure risks inbox placement and sender reputation.

**[Test]: subject prefix**
Confirm this prefix is stripped by the deployment workflow before production send. It has no impact on compliance itself but is a production-readiness blocker.

**CAN-SPAM — cannot fully verify**
HTML is truncated; physical mailing address and functional unsubscribe link cannot be confirmed present from available source. These are mandatory. Verify in full HTML before send.

---

### 6. Email-to-Site Continuity

All destination URLs are encrypted through `click.emails.skechers.com` click-tracking and cannot be decoded without key access. Spot-check at least 3 decoded destination URLs to confirm UTM parameters align with the campaign:

- `utm_campaign` → `PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_A` (or abbreviated equivalent)
- `utm_source` → `email`
- `utm_medium` → `email` or `cpc`

Verify the BOGO offer terms on the landing page match the email's stated promotion before production send.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Fix subject line template — isolate variant suffix (`_A`) from subject copy with proper delimiter |
| **P0** | Add `https://` protocol to the Return Path pixel URL |
| **P0** | Confirm SPF/DKIM authentication passes on production domain |
| **P1** | Migrate all `image.emails.skechers.com` image URLs from HTTP to HTTPS |
| **P1** | Upgrade Ink1000 open pixel to HTTPS |
| **P2** | Add `alt=""` to tracking pixels; add descriptive alt text to the 4 flagged content images |
| **P2** | Scope `-webkit-text-size-adjust: none` to layout containers, not `*` |
| **P3** | Verify Krux `partner_uid` values are dynamically rendered per recipient, not test-hardcoded |
| **P3** | Spot-decode 3+ click URLs to confirm UTM parameter alignment |
## Recent history

- [[2026-03-30-test-pro-us-nonpur-u-bundle-nonpurch-en-03312026why-start-with-one-pair-when-you]] — 6/10 (2026-03-30)
- [[2026-03-30-test-pro-us-ecmpur-u-bundle-ecom-en-03312026-b-v2it-s-time-to-double-up-on-comfo]] — 6/10 (2026-03-30)
- [[2026-03-30-test-pro-us-ecmpur-u-bundle-ecom-en-03312026-ait-s-time-to-double-up-on-comfort]] — 5/10 (2026-03-30)

