---
slug: 2026-04-07-test-mkg-us-retpurl24-w-new-gender-en-04082026-spring-into-the-comfort-you-know-
type: email
date: 2026-04-07
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_RETPURL24_W_NEW_GENDER_EN_04082026🌱 Spring into the comfort you know and love"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_RETPURL24_W_NEW_GENDER_EN_04082026🌱 Spring into the comfort you know and love
**Score:** 5/10 · **Type:** Email audit · **2026-04-07**
## Executive summary

- A category-nav email aimed at women, structured around a "NEW for HER" hero and four product category modules (Casual Sneakers, Slip-Ins, Sandals, Wide Fit). The BOGO 50% off offer is surfaced early and the layout is clean, but the email suffers from two serious pre-send errors — a "[Test]:" subject line prefix and preview text that renders raw URLs — plus a hero section that is so sparse it fails to anchor the spring narrative. The category grid does the heaviest lifting and works reasonably well for discovery, but the overall email feels like a catalog shell rather than a seasonal moment.
- Clean and functional but undermined by critical deployment errors and a weak emotional hook. Loses roughly two points from the test flag and broken preview text alone.

## What's working

- **BOGO offer is prominent.** "Buy One Get One 50% off" sits at the very top, giving price-sensitive shoppers an immediate reason to engage before they've even read the body.
- **Category modules are clearly labeled and scannable.** Casual Sneakers, Slip-Ins, Sandals, Wide Fit each get a dedicated image and a clean, unambiguous CTA. Users who are already category-aware can navigate directly.
- **Wide Fit inclusion is smart.** Surfacing it at the same level as the core categories signals inclusivity and may capture a segment with high loyalty and low competition from competitors.
- **Footer utility links are present.** Size chart, colors, new arrivals, clothing, T&S/coupons are visible as a secondary navigation — useful for undecided shoppers.

## What's weak

- **"[Test]:" subject line prefix.** This should never reach a real send. If this is production, it's an immediate credibility hit and will affect open rates.
- **Preview text is broken — raw URLs visible.** The inbox preview renders: *"Skechers® https://view.emails.skechers.com/?vawpToken=HW2OIP4R... web version https://www.skechers.com..."* This is the single most damaging issue. Preview text is prime real estate and this burns it entirely.
- **Hero is inert.** "NEW for HER" with a single lifestyle shoe image and a "SHOP NOW" button does nothing to sell a spring narrative. The email's subject promises comfort and a seasonal story; the hero delivers a generic women's campaign frame with no copy, no product specifics, no emotional pull.
- **"DON'T MISS OUR BEST-SELLING COMFORT" is vague.** This line follows the hero and adds no information — it's filler that a customer will skip.
- **No personalization signal visible.** For a reengagement email (RETPURL), there's no visible "We picked these for you," "Back for you," or any returning-customer acknowledgment. The email reads like a cold acquisition send.
- **No urgency mechanism.** The BOGO offer has no visible expiration date or end date — the deal floats with no pressure to convert now.

## Recommendations

- 1. **Remove the `[Test]:` prefix before any live deployment.** Audit the send workflow — this should be caught by QA.
- 2. **Fix the preview text immediately.** Replace the raw URL string with a compelling one-liner, e.g., *"New arrivals she'll love — plus BOGO 50% off this spring."*
- 3. **Give the hero a spring story.** Add 1–2 lines of copy connecting newness or comfort to the season. "Fresh styles for spring walks" is more evocative than a blank hero + product shot.
- 4. **Add a deadline to the BOGO offer.** Even "Offer ends April 13" meaningfully lifts urgency without additional design work.
- 5. **Add a reengagement acknowledgment.** A single line like "We've missed you — here's what's new" converts a catalog feel into a relationship moment, which is the actual job of a reengagement send.
- | Priority | Action |
- |---|---|
- | P0 | Strip `[Test]:` from subject before any production deployment |
- | P0 | Fix Return Path pixel — add `https://` protocol prefix |
- | P1 | Migrate all `image.emails.skechers.com` assets to HTTPS |
- | P1 | Verify SPF/DKIM/DMARC alignment on `emails.skechers.com` sender domain; obtain auth headers from a production relay |
- | P2 | Add `alt` text to the 3 unidentified content images (`49468f73`, `00100b23`, `fc08601a`) |
- | P2 | Fix `<meta>` charset tag — add `http-equiv="Content-Type"` |
- | P2 | Replace `-webkit-text-size-adjust: none` with `100%` |
- | P3 | Rewrite plain-text part with editorial copy to reduce URL density below 60% |

## Full review
### 1. Executive Summary

A category-nav email aimed at women, structured around a "NEW for HER" hero and four product category modules (Casual Sneakers, Slip-Ins, Sandals, Wide Fit). The BOGO 50% off offer is surfaced early and the layout is clean, but the email suffers from two serious pre-send errors — a "[Test]:" subject line prefix and preview text that renders raw URLs — plus a hero section that is so sparse it fails to anchor the spring narrative. The category grid does the heaviest lifting and works reasonably well for discovery, but the overall email feels like a catalog shell rather than a seasonal moment.

---

### 2. Business Impact Score: 5 / 10

Clean and functional but undermined by critical deployment errors and a weak emotional hook. Loses roughly two points from the test flag and broken preview text alone.

---

### 3. What's Working

- **BOGO offer is prominent.** "Buy One Get One 50% off" sits at the very top, giving price-sensitive shoppers an immediate reason to engage before they've even read the body.
- **Category modules are clearly labeled and scannable.** Casual Sneakers, Slip-Ins, Sandals, Wide Fit each get a dedicated image and a clean, unambiguous CTA. Users who are already category-aware can navigate directly.
- **Wide Fit inclusion is smart.** Surfacing it at the same level as the core categories signals inclusivity and may capture a segment with high loyalty and low competition from competitors.
- **Footer utility links are present.** Size chart, colors, new arrivals, clothing, T&S/coupons are visible as a secondary navigation — useful for undecided shoppers.

---

### 4. What's Weak

- **"[Test]:" subject line prefix.** This should never reach a real send. If this is production, it's an immediate credibility hit and will affect open rates.
- **Preview text is broken — raw URLs visible.** The inbox preview renders: *"Skechers® https://view.emails.skechers.com/?vawpToken=HW2OIP4R... web version https://www.skechers.com..."* This is the single most damaging issue. Preview text is prime real estate and this burns it entirely.
- **Hero is inert.** "NEW for HER" with a single lifestyle shoe image and a "SHOP NOW" button does nothing to sell a spring narrative. The email's subject promises comfort and a seasonal story; the hero delivers a generic women's campaign frame with no copy, no product specifics, no emotional pull.
- **"DON'T MISS OUR BEST-SELLING COMFORT" is vague.** This line follows the hero and adds no information — it's filler that a customer will skip.
- **No personalization signal visible.** For a reengagement email (RETPURL), there's no visible "We picked these for you," "Back for you," or any returning-customer acknowledgment. The email reads like a cold acquisition send.
- **No urgency mechanism.** The BOGO offer has no visible expiration date or end date — the deal floats with no pressure to convert now.

---

### 5. Recommendations

1. **Remove the `[Test]:` prefix before any live deployment.** Audit the send workflow — this should be caught by QA.
2. **Fix the preview text immediately.** Replace the raw URL string with a compelling one-liner, e.g., *"New arrivals she'll love — plus BOGO 50% off this spring."*
3. **Give the hero a spring story.** Add 1–2 lines of copy connecting newness or comfort to the season. "Fresh styles for spring walks" is more evocative than a blank hero + product shot.
4. **Add a deadline to the BOGO offer.** Even "Offer ends April 13" meaningfully lifts urgency without additional design work.
5. **Add a reengagement acknowledgment.** A single line like "We've missed you — here's what's new" converts a catalog feel into a relationship moment, which is the actual job of a reengagement send.

---

### 6. Bottom Line

The bones are solid — a clean category grid, a high-value offer, and a relevant product selection for the women's audience. But two technical errors (test subject line, broken preview text) and a conceptually hollow hero make this email underperform what it should be. Fix the send errors first. Then give the creative a story worth opening.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Women's reengagement email with BOGO 50% off offer and new arrivals discovery |
| **Hero / primary value prop** | "NEW for HER" with a model image and "SHOP NOW" — minimal copy, no seasonal narrative |
| **Membership / benefits** | "Loyalty Get Rewards" app download section visible in footer — low prominence, easy to miss |
| **Product discoverability** | Four category modules (Casual Sneakers, Slip-Ins, Sandals, Wide Fit) — clear, functional, scannable |
| **Utility / secondary modules** | Size chart, colors, new arrivals, clothing, T&S/coupons listed as text links; social icons present |
| **Bugs / friction / clarity** | (1) Subject line shows `[Test]:` prefix. (2) Preview text renders raw URLs instead of human-readable copy. (3) BOGO banner has no visible expiration date. |

---

## Technical Audit

## Technical Audit — Skechers `MKG_US_RETPURL24_W_NEW_GENDER_EN_04082026`

---

### 1. Technical Summary

This email has a systemic HTTP-vs-HTTPS image hosting problem affecting all `image.emails.skechers.com` assets, and a broken Return Path monitoring pixel caused by a missing URL protocol. A `[Test]:` subject prefix also indicates this may not be production-ready.

---

### 2. Link & Tracking Issues

**[CRITICAL] Return Path pixel missing protocol — pixel will fail to fire**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
No `https://` prefix. Email clients treat this as a relative path, not an absolute URL. The pixel will not load, breaking inbox placement monitoring for this send.

**[WARN] ink1000 tracking pixel served over HTTP**
```
src: http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```
HTTP-only. Clients that enforce HTTPS (Gmail, iOS Mail) will block this pixel silently.

**[INFO] 29 click links wrapped in `click.emails.skechers.com` redirector** — standard SFMC behavior, not a defect. Redirect chain not probeable by automated QA.

---

### 3. Rendering & Accessibility

**[HIGH] All `image.emails.skechers.com` assets served over HTTP**

17 images confirmed by QA, including the logo, app store badges, social icons, and AfterPay badge:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-*.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/*.png           (all footer assets)
```
Gmail and iOS Mail proxy images through HTTPS — these will load but via Google's/Apple's proxy, breaking link tracking for click-through rates on image-wrapped links. Outlook and security-strict clients may block outright.

**[MED] `<meta content="text/html; charset=utf-8" />` missing `http-equiv` attribute**

Without `http-equiv="Content-Type"`, this tag is ignored by parsers. Correct form:
```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```
Risk: character encoding fallback to client default; emoji in subject line (`🌱`) may render as `?` in some clients.

**[MED] 4 images missing `alt` text**
- `o.gif` (ink1000 pixel)
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

Content images without `alt` are invisible to screen readers and to image-blocked clients.

**[INFO] `-webkit-text-size-adjust: none` applied globally**

Prevents user font-size overrides on iOS — an accessibility concern for users with visual impairments. `100%` is the recommended value.

**[INFO] Desktop layout defaults to mobile content in non-media-query environments (Outlook Desktop)**

```css
.mobile-content { display: block; }
.desktop-content { display: none; }
```
Outlook Desktop ignores the `@media screen and (min-width: 768px)` block, so it renders the mobile layout. Intentional or not, confirm this is acceptable for Outlook rendering targets.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens or broken dynamic content blocks visible in the truncated source. Campaign ID `MKG_US_RETPURL24_W_NEW_GENDER_EN_04082026` is consistent across the open pixel, Krux beacons, and ink1000 pixel — no token mismatch.

---

### 5. Compliance

**[HIGH] `[Test]:` prefix present in production subject line**
```
Subject: [Test]: MKG_US_RETPURL24_W_NEW_GENDER_EN_04082026🌱 Spring into the comfort...
```
If deployed to live subscribers with this prefix, it violates internal QA gate standards and is a brand-visible error. Must be stripped before production send.

**[HIGH] SPF/DKIM authentication status unverifiable**

QA finding: `Authentication-Results header not found` — relay via AgentMail did not surface auth headers. Cannot confirm DKIM signing by `emails.skechers.com` or SPF alignment. Deliverability to Gmail/Yahoo (which enforce DMARC) is at risk if auth is misconfigured.

**[MED] Plain-text part is URL-heavy**
```
3,257 of 4,606 chars (70.7%) are URLs
```
Exceeds spam heuristic thresholds for several filters (SpamAssassin `MIME_HTML_MOSTLY`). Indicates the plain-text part is machine-generated from HTML without editorial pruning.

**[INFO] CAN-SPAM footer (physical address, unsubscribe) not verifiable from truncated source** — assumed present per prior Skechers sends; confirm in full source.

---

### 6. Email-to-Site Continuity

All click-through links pass through the `click.emails.skechers.com` redirector with opaque `?qs=eyJ...` JWT-encoded parameters. UTM decoration cannot be decoded from the encoded payload without following the redirect. QA did not flag broken destination URLs, and the campaign ID embedded in the ink1000 pixel (`mi_ecmp=MKG_US_RETPURL24_W_NEW_GENDER_EN_04082026`) matches the SFMC campaign name, confirming campaign-level continuity.

No issues found — pending redirect-chain verification.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| P0 | Strip `[Test]:` from subject before any production deployment |
| P0 | Fix Return Path pixel — add `https://` protocol prefix |
| P1 | Migrate all `image.emails.skechers.com` assets to HTTPS |
| P1 | Verify SPF/DKIM/DMARC alignment on `emails.skechers.com` sender domain; obtain auth headers from a production relay |
| P2 | Add `alt` text to the 3 unidentified content images (`49468f73`, `00100b23`, `fc08601a`) |
| P2 | Fix `<meta>` charset tag — add `http-equiv="Content-Type"` |
| P2 | Replace `-webkit-text-size-adjust: none` with `100%` |
| P3 | Rewrite plain-text part with editorial copy to reduce URL density below 60% |
## Recent history

- [[2026-04-07-test-mkg-us-ecmpurl24-w-new-gender-en-04082026-spring-into-a-new-level-of-comfor-349dcf97-9d57-4d45-a450-]] — 5.5/10 (2026-04-07)
- [[2026-04-07-test-mkg-us-ecmpurl24-w-new-gender-en-04082026-spring-into-a-new-level-of-comfor]] — 5/10 (2026-04-07)
- [[2026-04-07-test-mkg-us-nonpur180-w-new-nonpurch-en-04082026-v2-spring-into-comfort-like-you]] — 5/10 (2026-04-07)

