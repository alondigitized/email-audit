---
slug: 2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-a-v2make-walking-a-breeze-this-nationa
type: email
date: 2026-04-01
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_MULTI_GENDER_EN_04022026_A_V2Make Walking a Breeze this National Walking Day"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_U_MULTI_GENDER_EN_04022026_A_V2Make Walking a Breeze this National Walking Day
**Score:** 5/10 · **Type:** Email audit · **2026-04-01**
## Executive summary

- A National Walking Day promotional email built around a 50% off sitewide offer. The email is structurally sound — it has a clear hero, gender-split product rows, a lifestyle module, and secondary navigation — but the render is extremely small and compressed, making most product imagery and copy illegible without zooming. The headline and discount are the only elements that read cleanly at inbox size. The email delivers the basics but leaves significant engagement on the table due to density and lack of visual breathing room.
- The offer is strong (50% off) and the hook (National Walking Day) is timely and relevant to the brand. But the compressed layout, illegible product copy, and low visual contrast significantly limit click-through potential.

## What's working

- **Hero is clear**: "GET YOUR STEPS IN" with a lifestyle image and the 50% off badge communicates the offer immediately
- **Gender segmentation**: Women's and Men's rows are labeled and visually distinct — good for scanability
- **Seasonal relevance**: National Walking Day is a credible, on-brand moment for Skechers; the framing is appropriate
- **Category nav footer**: The bottom utility bar includes category links, which helps users self-navigate if the hero doesn't convert

## What's weak

- **Everything is too small**: The entire email appears condensed into a narrow column with very small text and imagery; product names, prices, and CTAs are illegible at a normal reading distance
- **CTA buttons are weak**: The "SHOP NOW" or equivalent CTAs appear as small, low-contrast buttons that don't draw the eye
- **"PREFER TO RUN?" module interrupts walking-day narrative**: Inserting a running/athletic module midway dilutes the focused "walking" message without clear visual separation or justification
- **No price or product name legibility**: The product tiles in Women's and Men's rows show shoes but no readable copy — the user can't identify what they're looking at
- **Hero image is dark and busy**: The hero background photo competes with the overlaid text; contrast is marginal

## Recommendations

- 1. **Increase font size and CTA button size** — especially on product tiles. If this renders in a real inbox at this density, CTR will suffer.
- 2. **Lead with the offer more boldly** — the 50% off badge is present but undersized relative to the opportunity; make it the visual anchor.
- 3. **Tighten the narrative** — cut or relocate the "Prefer to Run?" module. On National Walking Day, every module should serve walking-focused intent. A running module this high in the email undercuts the occasion.
- 4. **Add product names and prices to tiles** — even one-line captions under each shoe would significantly improve engagement and decision-making.
- 5. **Test hero contrast** — the lifestyle photo and headline text need better contrast or a text overlay scrim to pass basic readability.
- | Priority | Issue | Action |
- |---|---|---|
- | High | All `image.emails.skechers.com` assets served over HTTP | Migrate image CDN to HTTPS or update all `src` attributes to `https://` |
- | High | `ink1000.com` tracker served over HTTP | Update to HTTPS endpoint or confirm vendor support |
- | High | `[Test]:` in subject line | Remove before production deployment |
- | Medium | SPF/DKIM not confirmed | Verify SFMC authenticated sending domain; confirm `Authentication-Results` pass in inbox test |
- | Medium | `partner_uid=102541952` hardcoded in krxd pixel | Replace with subscriber-level SFMC merge field |
- | Medium | 4 content images missing `alt` text | Add descriptive `alt` for content/CTA images; `alt=""` for decorative ones |
- | Low | `maximum-scale=1` in viewport | Remove or raise to `maximum-scale=5` for zoom accessibility |
- | Low | Missing `http-equiv` on two `<meta>` tags | Add correct `http-equiv` attributes to charset and IE-compat meta tags |
- | Low | UTM parameters unverified | Run live link decode pass to confirm UTMs on all 26 click URLs |

## Full review
## 1. Executive Summary

A National Walking Day promotional email built around a 50% off sitewide offer. The email is structurally sound — it has a clear hero, gender-split product rows, a lifestyle module, and secondary navigation — but the render is extremely small and compressed, making most product imagery and copy illegible without zooming. The headline and discount are the only elements that read cleanly at inbox size. The email delivers the basics but leaves significant engagement on the table due to density and lack of visual breathing room.

---

## 2. Business Impact Score: **5 / 10**

The offer is strong (50% off) and the hook (National Walking Day) is timely and relevant to the brand. But the compressed layout, illegible product copy, and low visual contrast significantly limit click-through potential.

---

## 3. What's Working

- **Hero is clear**: "GET YOUR STEPS IN" with a lifestyle image and the 50% off badge communicates the offer immediately
- **Gender segmentation**: Women's and Men's rows are labeled and visually distinct — good for scanability
- **Seasonal relevance**: National Walking Day is a credible, on-brand moment for Skechers; the framing is appropriate
- **Category nav footer**: The bottom utility bar includes category links, which helps users self-navigate if the hero doesn't convert

---

## 4. What's Weak

- **Everything is too small**: The entire email appears condensed into a narrow column with very small text and imagery; product names, prices, and CTAs are illegible at a normal reading distance
- **CTA buttons are weak**: The "SHOP NOW" or equivalent CTAs appear as small, low-contrast buttons that don't draw the eye
- **"PREFER TO RUN?" module interrupts walking-day narrative**: Inserting a running/athletic module midway dilutes the focused "walking" message without clear visual separation or justification
- **No price or product name legibility**: The product tiles in Women's and Men's rows show shoes but no readable copy — the user can't identify what they're looking at
- **Hero image is dark and busy**: The hero background photo competes with the overlaid text; contrast is marginal

---

## 5. Recommendations

1. **Increase font size and CTA button size** — especially on product tiles. If this renders in a real inbox at this density, CTR will suffer.
2. **Lead with the offer more boldly** — the 50% off badge is present but undersized relative to the opportunity; make it the visual anchor.
3. **Tighten the narrative** — cut or relocate the "Prefer to Run?" module. On National Walking Day, every module should serve walking-focused intent. A running module this high in the email undercuts the occasion.
4. **Add product names and prices to tiles** — even one-line captions under each shoe would significantly improve engagement and decision-making.
5. **Test hero contrast** — the lifestyle photo and headline text need better contrast or a text overlay scrim to pass basic readability.

---

## 6. Bottom Line

The email has the right ingredients — timely occasion, strong offer, gender-aware structure — but the execution is too compressed and too small to convert well. The core message gets through, but the product detail that drives actual clicks is invisible. Fix the scale and hierarchy before sending.

---

## 7. Evidence

**Overall purpose:** Drive sitewide purchases via a 50% off promotion tied to National Walking Day.

**Hero / primary value proposition:** Lifestyle image of a woman walking with "GET YOUR STEPS IN" headline and a 50% off callout. Offer communicates quickly; layout is readable at hero level only.

**Membership / benefits section:** No visible loyalty or membership module in the render.

**Product discoverability / recommendation modules:** Women's and Men's product rows appear with 2–3 shoe images each. Product names and prices are not legible. No "recommended for you" or personalization signals visible.

**Utility / secondary modules:** "PREFER TO RUN? SHOP MORE ATHLETIC STYLES" module visible below product rows — disrupts walking-day focus. Bottom nav includes category links (Women, Men, Clothing, New Arrivals, Sale). "KEEP IT CASUAL" appears as a third product module with additional shoe thumbnails.

**Bugs / friction / clarity issues:** No broken images or overlapping text visible. The primary issue is scale — the entire email is rendered at a size where most content is functionally illegible. This may be a viewport/zoom artifact, but if representative of actual inbox rendering, it is a significant UX failure.

---

## Technical Audit

## Technical Audit — Skechers National Walking Day Email
**Campaign:** MKG_US_NA_U_MULTI_GENDER_EN_04022026_A_V2
**From:** no-reply@emails.skechers.com | **ESP:** Salesforce Marketing Cloud

---

### 1. Technical Summary
Email is sent via SFMC with click.emails.skechers.com for redirect tracking. The primary technical risks are a pervasive HTTP (non-HTTPS) image hosting pattern affecting 15+ assets and missing alt text on several images; SPF/DKIM authentication could not be verified through the relay.

---

### 2. Link & Tracking Issues

**26 click-redirect links** — all route through `click.emails.skechers.com` using AES-encrypted `?qs=` query strings. HTTP probing was skipped; destination URLs and UTM parameters cannot be confirmed from this audit alone.

**Three tracking pixels present at page load:**
| Pixel | Domain | Protocol | Notes |
|---|---|---|---|
| Open pixel | `click.emails.skechers.com/open.aspx?THWB2Q…` | HTTPS | OK |
| DMP user-match ×2 | `beacon.krxd.net` | HTTPS | OK |
| DMP impression | `beacon.krxd.net` | HTTPS | OK |
| Third-party tracker | `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8091927189&mi_ecmp=MKG_US_NA_U_MULTI_GENDER_EN_04022026_A` | **HTTP** | Blocked by most modern clients |

The `ink1000.com` pixel is served over plain HTTP. Gmail, Outlook.com, and Apple Mail all proxy/block non-HTTPS image requests, so this tracker will produce no data in production.

---

### 3. Rendering & Accessibility

**HTTP image sources — 15 assets affected.** All production imagery is hosted at `http://image.emails.skechers.com/lib/fe3115707564047a731c78/…`. Gmail rewrites HTTP image URLs through its own proxy; Apple Mail and Outlook.com may block them outright, causing broken images. Affected includes the Skechers logo, app store badges, social icons, and content images.

Example evidence:
- Logo: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png`
- Google Play badge: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-4b38-483d-8459-cf54186a0b9f.png`

**Missing alt text — 4 images confirmed:**
- `o.gif` (ink1000 tracker) — low severity for a tracker, but triggers validator warnings
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

Blank alt (`alt=""`) is acceptable for decorative images; descriptive alt is required for content images and CTAs to meet WCAG 2.1 AA.

**Viewport meta blocks zoom:** `maximum-scale=1` prevents user-initiated zoom, which is a WCAG 1.4.4 (Resize Text) failure for accessibility-sensitive sends.

**Malformed meta tags:** Two `<meta>` tags are missing required attributes:
- `<meta content="text/html; charset=utf-8" />` — missing `http-equiv="Content-Type"`
- `<meta content="IE=Edge" />` — missing `http-equiv="X-UA-Compatible"`

These are not rendering-breaking in modern clients but indicate template hygiene issues.

**Mobile/desktop toggle via CSS `display:none`:** Blocks are toggled with `.mobile-content` / `.desktop-content` + `@media` rules. Gmail ignores `<style>` blocks in some contexts, which can cause both versions to render simultaneously on Android Gmail.

---

### 4. Personalization & Merge Tokens

No active merge tokens (SFMC `%%…%%` syntax) are visible in the truncated HTML. The `beacon.krxd.net` pixel contains a hardcoded `partner_uid=102541952` — this appears to be a subscriber-level identifier that should be a merge field for production. If this value is static across all recipients, DMP user-matching will be incorrect.

---

### 5. Compliance

**Subject line contains `[Test]:` prefix** — must be removed before production deployment.

**SPF/DKIM authentication not verifiable.** The QA relay did not return an `Authentication-Results` header. The sending domain `emails.skechers.com` is an SFMC subdomain; SPF/DKIM alignment should be confirmed in the SFMC account's domain authentication settings before send.

**Unsubscribe:** Not visible in the truncated HTML, but expected in the footer. Cannot confirm one-click List-Unsubscribe (`List-Unsubscribe-Post`) header presence from available data.

**Physical address (CAN-SPAM §5):** Not visible in truncated source; assumed present in footer — not flagged as a confirmed issue.

---

### 6. Email-to-Site Continuity

All 26 destination URLs are behind encrypted SFMC redirect wrappers — UTM parameter presence cannot be confirmed without decoding or clicking live links. The campaign ID `MKG_US_NA_U_MULTI_GENDER_EN_04022026_A` is present in the ink1000 pixel and the krxd impression pixel, confirming campaign-level tagging exists at the pixel layer. Whether UTMs are appended to destination URLs requires a live link check.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | All `image.emails.skechers.com` assets served over HTTP | Migrate image CDN to HTTPS or update all `src` attributes to `https://` |
| High | `ink1000.com` tracker served over HTTP | Update to HTTPS endpoint or confirm vendor support |
| High | `[Test]:` in subject line | Remove before production deployment |
| Medium | SPF/DKIM not confirmed | Verify SFMC authenticated sending domain; confirm `Authentication-Results` pass in inbox test |
| Medium | `partner_uid=102541952` hardcoded in krxd pixel | Replace with subscriber-level SFMC merge field |
| Medium | 4 content images missing `alt` text | Add descriptive `alt` for content/CTA images; `alt=""` for decorative ones |
| Low | `maximum-scale=1` in viewport | Remove or raise to `maximum-scale=5` for zoom accessibility |
| Low | Missing `http-equiv` on two `<meta>` tags | Add correct `http-equiv` attributes to charset and IE-compat meta tags |
| Low | UTM parameters unverified | Run live link decode pass to confirm UTMs on all 26 click URLs |
## Recent history

- [[2026-04-01-test-mkg-us-na-u-multi-gender-en-04022026-amake-walking-a-breeze-this-national-w]] — 5/10 (2026-04-01)
- [[2026-04-01-just-restocked-real-madrid-bring-back-jerseys-0102019d49964fe3-7b88df2]] — 5/10 (2026-04-01)
- [[2026-04-01-try-the-comfort-everyone-s-talking-about]] — 5/10 (2026-04-01)

