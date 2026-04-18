---
slug: 2026-03-30-test-pro-us-ecmpur-u-bundle-ecom-en-03312026-bit-s-time-to-double-up-on-comfort
type: email
date: 2026-03-30
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_BIt's Time to Double Up on Comfort"
tags: [email, score-6, sender/skechers]
---
# [Test]: PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_BIt's Time to Double Up on Comfort
**Score:** 6/10 · **Type:** Email audit · **2026-03-30**
## Executive summary

- A structurally sound promotional email built around a Spring Sale BOGO 50% Off offer. The hero communicates the deal clearly, the product grid shows new arrivals, and the utility section covers the expected bases. However, the preview text is completely broken — rendering raw URL/token strings — which is a hard failure before the email is even opened. The subject line's "Double Up on Comfort" hook is clever in concept (BOGO = doubling up) but the body never reinforces the "comfort" angle, leaving the positioning half-finished.
- Solid offer, competent layout — but the broken preview text and disconnected subject-to-body narrative meaningfully undercut conversion potential.

## What's working

- **Hero clarity.** "SPRING SALE / BUY ONE, GET ONE / 50% OFF" is immediately scannable. The coral CTA buttons stand out cleanly against the light background.
- **Dual CTAs in the hero.** "SHOP NOW" + "FIND A STORE" serves both online and in-store intent without competition — good for a brand with strong retail presence.
- **New Arrivals grid.** Four to five product shots provide enough variety to invite browsing without overwhelming.
- **"This Just In" module.** Lifestyle imagery adds editorial texture and breaks the product-grid monotony.
- **Utility section.** SMS opt-in with a $10 incentive, app download, Afterpay, and Find a Store are all present — good coverage of secondary conversion paths.

## What's weak

- **Broken preview text.** The preview renders as a raw URL/token string (`https://view.emails.skechers.com/?vawpToken=EM56...`). This is the second thing a recipient reads after the subject line — having it show a raw tracking URL is a meaningful open-rate drag and looks broken/untrustworthy.
- **Subject-to-body disconnect.** The subject line promises "comfort" positioning; the email delivers a discount-forward BOGO message. The word "comfort" doesn't appear anywhere visible in the body. The "doubling up" wordplay is lost.
- **Product images are small.** The new arrivals grid shows shoes at thumbnail scale. Individual styles are hard to differentiate — especially the neutral-toned flats in the top row.
- **"This Just In" is underbuilt.** The lifestyle panel is visually interesting but vague. There's no callout for what the "just in" product actually is — it functions as a mood board, not a sales driver.
- **No urgency signal on the BOGO offer.** No end date or countdown is visible. "Spring Sale" implies limited time but doesn't confirm it — missed opportunity to drive action.

## Recommendations

- 1. **Fix the preview text immediately.** Replace the raw URL with a compelling 85–100 character teaser that reinforces the BOGO offer (e.g., "Buy one pair, get one 50% off — Spring has never felt this good.").
- 2. **Close the subject-body gap.** Either rename the hero to lean into "comfort" language, or rework the subject line to be BOGO-forward. Don't promise one thing and deliver another.
- 3. **Add an offer deadline.** Even "This week only" or "Through Sunday" would add urgency without a redesign.
- 4. **Scale up product images.** The new arrivals deserve more real estate — larger tiles with product names visible would improve discoverability.
- 5. **Give "This Just In" a product identity.** Label the featured style, add a brief descriptor, and make the CTA more specific than "SHOP NOW."
- | Priority | Action |
- |---|---|
- | **P0** | Fix Return Path pixel — prepend `https://` to `pixel.app.returnpath.net/pixel.gif` |
- | **P0** | Remove `[Test]:` subject line prefix before production deploy |
- | **P1** | Migrate all `image.emails.skechers.com` and `ink1000.com` image `src` values from `http://` to `https://` |
- | **P1** | Add `alt=""` to the 4 images missing alt attributes |
- | **P1** | Verify SPF/DKIM/DMARC authentication headers in production send |
- | **P2** | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to their respective `<meta>` tags |
- | **P2** | Remove `maximum-scale=1` from viewport meta |
- | **P2** | Spot-check 26 click-redirect links for UTM parameter completeness and correct landing page destination |
- | **P3** | Review Krux DMP data-sharing disclosure against current privacy policy |

## Full review
## Email Review: Skechers — "It's Time to Double Up on Comfort" (BOGO 50% Off)

---

### 1. Executive Summary

A structurally sound promotional email built around a Spring Sale BOGO 50% Off offer. The hero communicates the deal clearly, the product grid shows new arrivals, and the utility section covers the expected bases. However, the preview text is completely broken — rendering raw URL/token strings — which is a hard failure before the email is even opened. The subject line's "Double Up on Comfort" hook is clever in concept (BOGO = doubling up) but the body never reinforces the "comfort" angle, leaving the positioning half-finished.

---

### 2. Business Impact Score: **6/10**

Solid offer, competent layout — but the broken preview text and disconnected subject-to-body narrative meaningfully undercut conversion potential.

---

### 3. What's Working

- **Hero clarity.** "SPRING SALE / BUY ONE, GET ONE / 50% OFF" is immediately scannable. The coral CTA buttons stand out cleanly against the light background.
- **Dual CTAs in the hero.** "SHOP NOW" + "FIND A STORE" serves both online and in-store intent without competition — good for a brand with strong retail presence.
- **New Arrivals grid.** Four to five product shots provide enough variety to invite browsing without overwhelming.
- **"This Just In" module.** Lifestyle imagery adds editorial texture and breaks the product-grid monotony.
- **Utility section.** SMS opt-in with a $10 incentive, app download, Afterpay, and Find a Store are all present — good coverage of secondary conversion paths.

---

### 4. What's Weak

- **Broken preview text.** The preview renders as a raw URL/token string (`https://view.emails.skechers.com/?vawpToken=EM56...`). This is the second thing a recipient reads after the subject line — having it show a raw tracking URL is a meaningful open-rate drag and looks broken/untrustworthy.
- **Subject-to-body disconnect.** The subject line promises "comfort" positioning; the email delivers a discount-forward BOGO message. The word "comfort" doesn't appear anywhere visible in the body. The "doubling up" wordplay is lost.
- **Product images are small.** The new arrivals grid shows shoes at thumbnail scale. Individual styles are hard to differentiate — especially the neutral-toned flats in the top row.
- **"This Just In" is underbuilt.** The lifestyle panel is visually interesting but vague. There's no callout for what the "just in" product actually is — it functions as a mood board, not a sales driver.
- **No urgency signal on the BOGO offer.** No end date or countdown is visible. "Spring Sale" implies limited time but doesn't confirm it — missed opportunity to drive action.

---

### 5. Recommendations

1. **Fix the preview text immediately.** Replace the raw URL with a compelling 85–100 character teaser that reinforces the BOGO offer (e.g., "Buy one pair, get one 50% off — Spring has never felt this good.").
2. **Close the subject-body gap.** Either rename the hero to lean into "comfort" language, or rework the subject line to be BOGO-forward. Don't promise one thing and deliver another.
3. **Add an offer deadline.** Even "This week only" or "Through Sunday" would add urgency without a redesign.
4. **Scale up product images.** The new arrivals deserve more real estate — larger tiles with product names visible would improve discoverability.
5. **Give "This Just In" a product identity.** Label the featured style, add a brief descriptor, and make the CTA more specific than "SHOP NOW."

---

### 6. Bottom Line

This email works as a discount vehicle but undersells its own concept. Fix the preview text before any live send — it's broken and visible to every recipient. Then do the 10-minute job of aligning subject line to body. The offer itself is strong enough to carry results if the entry experience isn't actively hurting opens.

---

### 7. Evidence

**Overall purpose:** Spring promotional email driving BOGO 50% Off conversions, with secondary goals of new arrivals discovery and utility engagement (app, SMS, Afterpay).

**Hero / primary value proposition:** "SPRING SALE — BUY ONE, GET ONE 50% OFF" with two CTAs. Visually strong, immediately readable. Coral button color is distinctive.

**Membership / benefits section:** SMS opt-in with "$10 in rewards for exclusive offers" — positioned mid-funnel in the utility block. Reasonable placement but could be higher to capture more sign-ups.

**Product discoverability / recommendation modules:** New Arrivals grid (4–5 SKUs, thumbnail scale) and a "This Just In" lifestyle module. Both are present but neither goes deep on product identity or specifics.

**Utility / secondary modules:** App download (App Store + Google Play), Curbside Pickup, Shop Now Pay Later (Afterpay), Find a Store, and social follow links. Complete and well-organized.

**Bugs / friction / clarity issues:** Preview text renders as a raw tracking URL — fully visible in what a recipient sees in their inbox preview pane before opening. No other visible rendering defects detected in the body.

---

## Technical Audit

## Technical Audit — Skechers `PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_B`

---

### 1. Technical Summary

Test-flagged BOGO bundle email sent via Salesforce Marketing Cloud with Krux DMP integration. The primary technical issues are pervasive HTTP (non-HTTPS) image sources across 15+ assets and a malformed Return Path seed pixel URL that will silently fail to load.

---

### 2. Link & Tracking Issues

**[WARN] 26 click-redirect links unverified** — All CTAs route through `click.emails.skechers.com`; QA skipped HTTP probing. UTM parameter presence and destination URL alignment cannot be confirmed from this audit pass.

**[BUG] Return Path seed pixel has no protocol** — The pixel is rendered as a bare hostname with no scheme:
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"
```
Email clients will interpret this as a relative path, not an absolute URL. The pixel will fail to fire, breaking inbox placement monitoring. Should be `https://pixel.app.returnpath.net/...`.

**[INFO] Krux DMP user-match beacons present** — Three `beacon.krxd.net` pixels fire on open, passing subscriber SHA-256 hash and sub ID (`partner_uid=113414922`). Confirm this data sharing is covered by the current privacy policy and consent model.

---

### 3. Rendering & Accessibility

**[BUG] 4 images missing `alt` text:**
| Image | src |
|---|---|
| `o.gif` (ink1000 tracking pixel) | `http://www.ink1000.com/...` |
| `49468f73...png` | `http://image.emails.skechers.com/.../m/11/49468f73...` |
| `00100b23...png` | `http://image.emails.skechers.com/.../m/11/00100b23...` |
| `fc08601a...png` | `http://image.emails.skechers.com/.../m/11/fc08601a...` |

Tracking/spacer pixels should use `alt=""` explicitly. Decorative images should also carry empty alt or descriptive text for screen readers.

**[BUG] 15 images served over HTTP — will be blocked in security-strict clients:**

All `image.emails.skechers.com` assets use `http://` (e.g., `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662...png`). Affected images include the Skechers logo, app store badges, social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), and AfterPay badge. Gmail, Outlook.com, and Apple Mail all upgrade or block mixed-content HTTP images.

**[BUG] ink1000 tracking pixel served over HTTP:**
```
src="http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8103404233&mi_ecmp=..."
```

**[WARN] Malformed `<meta>` tags:**
- `<meta content="text/html; charset=utf-8" />` — missing `http-equiv="Content-Type"` attribute; charset may not be honored by older parsers.
- `<meta content="IE=Edge" />` — missing `http-equiv="X-UA-Compatible"`; IE compatibility mode hint will be ignored.

**[WARN] `maximum-scale=1` in viewport meta** — Prevents pinch-to-zoom on mobile, which is an accessibility violation (WCAG 1.4.4). Remove this constraint.

---

### 4. Personalization & Merge Tokens

**[INFO] `[Test]:` prefix in subject line** — Subject is `[Test]: PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_B...`. Must be removed before production deployment.

**[INFO] Subscriber IDs appear resolved** — `mi_u=8103404233` (ink1000) and `partner_uid=113414922` (Krux subid) appear as numeric literals. Verify these are correctly populated merge tokens and not hardcoded test values from the seed send.

No unresolved `%%` or `{{` merge token syntax detected in the truncated source.

---

### 5. Compliance

**[WARN] SPF/DKIM authentication status unknown** — `Authentication-Results` header not present via the AgentMail relay. Confirm DKIM signing on `emails.skechers.com` and that SPF includes the SFMC sending IP range. DMARC alignment should be verified before production send.

**[INFO] Unsubscribe and physical address** — HTML is truncated; footer content not available for inspection. CAN-SPAM requires a valid postal address and functional one-click unsubscribe. Confirm these are present in the full render.

---

### 6. Email-to-Site Continuity

**[UNVERIFIED]** All 26 CTAs wrap through `click.emails.skechers.com` redirects. QA was unable to probe landing page URLs. Before production:
- Confirm UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`) are appended to all destination URLs.
- Confirm campaign code in UTM matches `PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_B`.
- Verify the BOGO 50% offer is active and surfaced on destination landing pages at send time.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Fix Return Path pixel — prepend `https://` to `pixel.app.returnpath.net/pixel.gif` |
| **P0** | Remove `[Test]:` subject line prefix before production deploy |
| **P1** | Migrate all `image.emails.skechers.com` and `ink1000.com` image `src` values from `http://` to `https://` |
| **P1** | Add `alt=""` to the 4 images missing alt attributes |
| **P1** | Verify SPF/DKIM/DMARC authentication headers in production send |
| **P2** | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` to their respective `<meta>` tags |
| **P2** | Remove `maximum-scale=1` from viewport meta |
| **P2** | Spot-check 26 click-redirect links for UTM parameter completeness and correct landing page destination |
| **P3** | Review Krux DMP data-sharing disclosure against current privacy policy |
## Recent history

- [[2026-03-30-add-a-pop-of-color-to-your-closet]] — 6/10 (2026-03-30)
- [[2026-03-30-did-you-forget-something]] — 6/10 (2026-03-30)
- [[2026-04-01-when-art-meets-soccer-the-argentina-fifa-world-cup-26-away-jersey]] — 6/10 (2026-03-29)

