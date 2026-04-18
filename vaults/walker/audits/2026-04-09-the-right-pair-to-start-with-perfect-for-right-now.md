---
slug: 2026-04-09-the-right-pair-to-start-with-perfect-for-right-now
type: email
date: 2026-04-09
persona: walker
score: "5/10"
sender: SKECHERS
subject: The right pair to start with, perfect for right now!
tags: [email, score-5, sender/skechers]
---
# The right pair to start with, perfect for right now!
**Score:** 5/10 · **Type:** Email audit · **2026-04-09**
## Executive summary

- A structurally complete promotional email anchored to a BOGO 50% off offer, but it underdelivers on both creative ambition and conversion clarity. The hero communicates the deal, but the product photography below it is small, inconsistently styled, and fails to make the shoes feel desirable. The email reads more like a site navigation menu than a curated shopping experience.
- Functional but uninspiring. The deal is real, the CTA is present, but the email does little to generate genuine purchase intent or differentiate the brand.

## What's working

- **Offer legibility.** "BUY ONE GET ONE 50% OFF or 20% off 1 Item" reads cleanly in the hero — dual-offer structure is clearly communicated.
- **Gender/age segmentation links.** SHOP WOMEN'S, MEN'S, GIRLS', BOYS' blocks give recipients a fast path to relevant inventory.
- **Footer completeness.** App download, curbside pickup, store finder, social icons, and pay-later callout are all present and structurally organized.
- **Navigation taxonomy.** The "Shop Notional Styles" text links (WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE) cover the full catalog breadth.

## What's weak

- **Hero product shot is generic.** The lead shoes — what appears to be a casual slip-on — are photographed against a plain background with no lifestyle context. For a "start with" positioning, there's nothing aspirational here.
- **"Start With Our New Arrivals" section is visually weak.** The product row shows tiny thumbnail images of multiple shoes with no names, no prices, and no callouts. They're indistinguishable at this size.
- **No price anchoring anywhere.** With a BOGO offer, showing original vs. discounted price on even one product would dramatically increase urgency. None is visible.
- **Offer terms are absent above the fold.** There's no visible expiration date or conditions on the hero offer — urgency is zero.
- **Over-modular structure dilutes focus.** The email has: hero → new arrivals product strip → gender nav grid → text nav links → utility footer. That's five layers before the fold, each pulling attention in a different direction.
- **"NEW ARRIVALS" CTA button is undersized.** The "SHOP NEW ARRIVALS" button is small and visually subordinate — easy to miss.

## Recommendations

- 1. **Add a deadline to the hero.** "Ends Sunday" or "This Weekend Only" turns a passive discount into an action trigger.
- 2. **Show at least one price in the new arrivals strip.** Even one "$89 → $44.50 with BOGO" example makes the offer feel concrete.
- 3. **Cut the text nav link block.** "SHOP NOTIONAL STYLES" with six text links adds zero conversion value — it's a site map, not a sell. Replace with a second featured product or a bestseller callout.
- 4. **Increase the new arrivals image size.** The thumbnail row is too small to generate interest in specific products. Either feature 2–3 shoes at full width or remove the module entirely.
- 5. **Lead with a lifestyle image in the hero.** The current product-on-white-background approach is functional but forgettable. A seasonal spring context (outdoors, park, color palette) would align with the "right now" subject line.
- | Priority | Issue | Fix |
- |---|---|---|
- | **High** | 15 images served over HTTP | Migrate `image.emails.skechers.com` to HTTPS or update all `src` attributes to `https://` |
- | **High** | ink1000.com open pixel over HTTP | Switch to HTTPS endpoint or remove if redundant with SFMC open tracking |
- | **Medium** | Plain-text part is 72.6% URLs | Regenerate plain-text alternative with real readable copy; strip or shorten raw URLs |
- | **Medium** | 3 content images missing `alt` text | Add descriptive `alt` to `49468f73`, `00100b23`, `fc08601a` images; add `alt=""` to decorative pixels |
- | **Medium** | Authentication-Results not captured | Verify SPF/DKIM pass via a seed address with header capture before next send |
- | **Low** | Viewport gap 376–767px | Add `@media (max-width: 767px)` ruleset or extend 375px rules to cover mid-range devices |
- | **Low** | `-webkit-text-size-adjust: none` globally | Change to `100%` to preserve OS-level font scaling accessibility |
- | **Low** | Krux user-match pixels / PII disclosure | Confirm CCPA/GDPR consent scope covers third-party DMP syndication for this list segment |

## Full review
## Skechers — "The right pair to start with, perfect for right now!"

---

### 1. Executive Summary

A structurally complete promotional email anchored to a BOGO 50% off offer, but it underdelivers on both creative ambition and conversion clarity. The hero communicates the deal, but the product photography below it is small, inconsistently styled, and fails to make the shoes feel desirable. The email reads more like a site navigation menu than a curated shopping experience.

---

### 2. Business Impact Score: 5/10

Functional but uninspiring. The deal is real, the CTA is present, but the email does little to generate genuine purchase intent or differentiate the brand.

---

### 3. What's Working

- **Offer legibility.** "BUY ONE GET ONE 50% OFF or 20% off 1 Item" reads cleanly in the hero — dual-offer structure is clearly communicated.
- **Gender/age segmentation links.** SHOP WOMEN'S, MEN'S, GIRLS', BOYS' blocks give recipients a fast path to relevant inventory.
- **Footer completeness.** App download, curbside pickup, store finder, social icons, and pay-later callout are all present and structurally organized.
- **Navigation taxonomy.** The "Shop Notional Styles" text links (WOMEN, MEN, KIDS, CLOTHING, NEW ARRIVALS, SALE) cover the full catalog breadth.

---

### 4. What's Weak

- **Hero product shot is generic.** The lead shoes — what appears to be a casual slip-on — are photographed against a plain background with no lifestyle context. For a "start with" positioning, there's nothing aspirational here.
- **"Start With Our New Arrivals" section is visually weak.** The product row shows tiny thumbnail images of multiple shoes with no names, no prices, and no callouts. They're indistinguishable at this size.
- **No price anchoring anywhere.** With a BOGO offer, showing original vs. discounted price on even one product would dramatically increase urgency. None is visible.
- **Offer terms are absent above the fold.** There's no visible expiration date or conditions on the hero offer — urgency is zero.
- **Over-modular structure dilutes focus.** The email has: hero → new arrivals product strip → gender nav grid → text nav links → utility footer. That's five layers before the fold, each pulling attention in a different direction.
- **"NEW ARRIVALS" CTA button is undersized.** The "SHOP NEW ARRIVALS" button is small and visually subordinate — easy to miss.

---

### 5. Recommendations

1. **Add a deadline to the hero.** "Ends Sunday" or "This Weekend Only" turns a passive discount into an action trigger.
2. **Show at least one price in the new arrivals strip.** Even one "$89 → $44.50 with BOGO" example makes the offer feel concrete.
3. **Cut the text nav link block.** "SHOP NOTIONAL STYLES" with six text links adds zero conversion value — it's a site map, not a sell. Replace with a second featured product or a bestseller callout.
4. **Increase the new arrivals image size.** The thumbnail row is too small to generate interest in specific products. Either feature 2–3 shoes at full width or remove the module entirely.
5. **Lead with a lifestyle image in the hero.** The current product-on-white-background approach is functional but forgettable. A seasonal spring context (outdoors, park, color palette) would align with the "right now" subject line.

---

### 6. Bottom Line

The email checks the operational boxes — deal is visible, CTAs exist, segmentation paths are present — but it doesn't earn attention. The creative does nothing to justify the "perfect for right now" subject line promise, and the product presentation is too small and price-free to drive clicks. Mid-tier execution on what should be a high-converting BOGO promotion.

---

### 7. Evidence

**Overall purpose:** Drive BOGO 50% off conversions across the full Skechers catalog, with secondary push on new arrivals.

**Hero / primary value proposition:** BOGO 50% off or 20% off 1 item. Offer is clear but undated, unpriced, and unanchored to any specific product benefit. "SHOP NOW" CTA is present.

**Membership / benefits section:** None visible. No loyalty, rewards, or member-exclusive framing.

**Product discoverability / recommendation modules:** New arrivals strip (5–6 tiny thumbnails, no labels or prices) + gender/age grid (WOMEN'S, MEN'S, GIRLS', BOYS' with lifestyle photos). The grid is the strongest product module in the email.

**Utility / secondary modules:** App download + curbside pickup prompt, "Shop Now, Pay Later" callout, "Find a Store" link — all present in the footer. Solid but buried.

**Bugs / friction / clarity issues:** No visible broken images or rendering errors. The "SHOP NOTIONAL STYLES" label above the text navigation links appears oddly named — it reads like a template placeholder or internal taxonomy label rather than consumer-facing copy.

---

## Technical Audit

## Technical Audit — Skechers "The right pair to start with, perfect for right now!" (04/09/2026)

---

### 1. Technical Summary

The email has functional tracking and click infrastructure via Salesforce Marketing Cloud, but carries a systemic HTTP image-serving problem affecting 15+ assets and an unverified authentication chain. Spam filter risk is elevated due to a high URL-to-text ratio in the plain-text alternative.

---

### 2. Link & Tracking Issues

**Open tracking:** Primary pixel served via `click.emails.skechers.com/open.aspx` (HTTPS, SFMC standard). Secondary pixel served via **HTTP** from a third-party domain:
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8107766165&mi_ecmp=PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04092026
```
This pixel will be blocked in Gmail, Apple Mail, and most modern clients that enforce HTTPS. Ink1000 also has no alt text, meaning blocked-image fallback is silent — no data loss signal to the user but open attribution is silently dropped.

**Krux/Salesforce DMP beacons:** Three `beacon.krxd.net` pixels fire on open — two user-match calls and one ad impression call. These are third-party data syndication beacons, not email metrics. Clients that block third-party trackers (Safari ITP, Firefox) will suppress these. No technical breakage, but worth flagging for data team awareness.

**Click links:** All 26 CTAs route through `click.emails.skechers.com` with AES-encrypted `qs=` parameters. Cannot verify destination URLs or UTM payload from source alone — see Section 6.

**Plain-text URL ratio:** 3,525 of 4,857 characters (72.6%) in the plain-text part are URLs. This exceeds the 70% threshold that aggressive spam filters (SpamAssassin `RAZOR2_CF_RANGE_E8_51_100`, Barracuda) use as a spam signal.

---

### 3. Rendering & Accessibility

**HTTP image sources (15 assets):** All images hosted on `image.emails.skechers.com` use `http://` not `https://`. Affected assets include the Skechers logo, app store badges, social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), AfterPay badge, and multiple product/content images. Gmail has enforced image proxying via HTTPS since 2013 — these are auto-proxied there. Outlook.com, Apple Mail, and stricter enterprise clients may block or warn on non-HTTPS sources directly.

Affected pattern: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/*.png`

**Missing alt text (4 images):** Images with no `alt` attribute confirmed by QA:
- `o.gif` (ink1000 tracking pixel) — decorative, acceptable to omit but should be `alt=""`
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unknown content, no fallback text
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — unknown content, no fallback text
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — unknown content, no fallback text

For the three non-tracking images, missing `alt` means screen reader users get filename garbage or silence, and image-blocked users lose context entirely.

**Responsive structure:** CSS uses `@media (max-width: 375px)` for mobile and `@media (min-width: 768px)` for desktop. The 376–767px gap (most Android phones in landscape, small tablets) has no targeted styles — layout relies on the `max-width: 375px` rules not applying, which may produce a mid-width desktop layout on mid-size viewports.

**`-webkit-text-size-adjust: none`:** Set globally via `* { -webkit-text-size-adjust: none }`. This prevents iOS from scaling small text up for readability. Accessibility concern for users who rely on browser/OS font scaling.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens detected in the visible HTML. Campaign ID `PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04092026` is hardcoded consistently across all four tracking pixels — no token mismatch. Subscriber ID `121173391` is hardcoded in the Krux `subid` beacon, which is expected (rendered server-side at send time).

No issues found with merge token rendering.

---

### 5. Compliance

**CAN-SPAM / physical address:** Not visible in the truncated source — assumed present in the footer (standard for Skechers sends). Cannot confirm from available HTML.

**Unsubscribe mechanism:** Not visible in truncated source — assumed present. Cannot confirm one-click List-Unsubscribe header status.

**Authentication:** `Authentication-Results` header was not captured through the AgentMail relay — SPF and DKIM pass/fail status is unknown for this send. Given `no-reply@emails.skechers.com` routes through SFMC (`emails.skechers.com` subdomain), SPF alignment is likely via SFMC's published records, but this cannot be confirmed without the raw header.

**Third-party data beacons:** The Krux pixels perform cross-site user matching (`partner_uid` is hashed PII). Depending on jurisdiction, this may require disclosure under CCPA/GDPR if the list includes EU or California subscribers. This is a legal/compliance team question, not a purely technical one — flagging for awareness.

---

### 6. Email-to-Site Continuity

All click URLs are encrypted via `click.emails.skechers.com/?qs=<AES-ciphertext>` — destination URLs and UTM parameters cannot be decoded from source. Campaign ID `PRO_US_NONPUR180_U_SITEBUNDLE_NONPURCH_EN_04092026` is present in all tracking pixels, suggesting UTM tagging is configured, but cannot be verified without decoding or a live click test.

**Recommended verification:** Perform a live click test on at least one CTA and inspect the final landing URL for `utm_source`, `utm_medium`, `utm_campaign`, and `utm_content` parameters. Confirm `utm_campaign` matches the campaign ID in the pixels.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **High** | 15 images served over HTTP | Migrate `image.emails.skechers.com` to HTTPS or update all `src` attributes to `https://` |
| **High** | ink1000.com open pixel over HTTP | Switch to HTTPS endpoint or remove if redundant with SFMC open tracking |
| **Medium** | Plain-text part is 72.6% URLs | Regenerate plain-text alternative with real readable copy; strip or shorten raw URLs |
| **Medium** | 3 content images missing `alt` text | Add descriptive `alt` to `49468f73`, `00100b23`, `fc08601a` images; add `alt=""` to decorative pixels |
| **Medium** | Authentication-Results not captured | Verify SPF/DKIM pass via a seed address with header capture before next send |
| **Low** | Viewport gap 376–767px | Add `@media (max-width: 767px)` ruleset or extend 375px rules to cover mid-range devices |
| **Low** | `-webkit-text-size-adjust: none` globally | Change to `100%` to preserve OS-level font scaling accessibility |
| **Low** | Krux user-match pixels / PII disclosure | Confirm CCPA/GDPR consent scope covers third-party DMP syndication for this list segment |
## Recent history

- [[2026-04-09-did-you-forget-something]] — 5/10 (2026-04-09)
- [[2026-04-09-purechill-is-your-go-to-for-before-and-after-sport]] — 4/10 (2026-04-09)
- [[2026-04-08-test-ret-us-na-u-store1423-zip-en-04102026sale-ends-soon-celebrate-our-birthday--fdbb6dc3-9794-4c04-b04c-]] — 6/10 (2026-04-08)

