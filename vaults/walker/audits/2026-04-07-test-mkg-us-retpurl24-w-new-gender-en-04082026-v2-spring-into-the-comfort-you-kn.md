---
slug: 2026-04-07-test-mkg-us-retpurl24-w-new-gender-en-04082026-v2-spring-into-the-comfort-you-kn
type: email
date: 2026-04-07
persona: walker
score: "5.5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_RETPURL24_W_NEW_GENDER_EN_04082026_V2🌱 Spring into the comfort you know and love"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_RETPURL24_W_NEW_GENDER_EN_04082026_V2🌱 Spring into the comfort you know and love
**Score:** 5.5/10 · **Type:** Email audit · **2026-04-07**
## Executive summary

- A spring women's acquisition/retention email built around a BOGO 50% off offer, anchored by a "NEW for HER" hero and four category navigation blocks. The structure is clean and functional, but the email leans heavily on browse navigation rather than editorial storytelling. The promotional hook is present but undersells the spring occasion, and the category tiles deliver utility without excitement. Serviceable, not memorable.
- Competent execution of a standard category-nav template. Leaves significant persuasion on the table.

## What's working

- **BOGO 50% off** is prominently placed at the very top of the email — the offer is immediately visible before any scroll, which is correct hierarchy.
- **"NEW for HER"** hero headline is bold, clear, and gender-targeted. Appropriate for a spring new-arrivals push.
- **Category architecture** (Casual Sneakers, Slip-Ins, Sandals, Wide Fit) maps cleanly to how women shop Skechers — it's practically useful and covers the core spring footwear consideration set.
- **Wide Fit** inclusion signals inclusive sizing awareness, which differentiates Skechers.
- Layout is linear and uncluttered — no visual collisions or apparent rendering breakage.

## What's weak

- **Hero image is underwhelming.** The lifestyle shot is small and indistinct at email width. There is no visual impact that says "spring" — no color, no season, no energy.
- **The BOGO offer and the "NEW for HER" positioning are competing narratives.** The email doesn't decide if it's a sale email or a newness email. The two messages dilute each other.
- **"DON'T MISS OUR BEST-SELLING COMFORT"** is a weak interstitial. This generic best-sellers callout sits between the hero and the category tiles with no product shown, no urgency, and no reason to click beyond "SHOP BEST SELLERS." It reads like filler.
- **Category product tiles are tiny.** Each category block shows a shoe, but at this render size the shoes are difficult to distinguish. There is minimal visual differentiation between the Casual, Slip-In, and Sandal blocks.
- **No personalization signals are visible.** No loyalty/adiclub-style tier messaging, no "back in stock for you," no individualized product recommendations — it reads like a broadcast blast.
- **CTAs are redundant and formulaic.** SHOP CASUALS / SHOP SLIP-INS / SHOP SANDALS / SHOP WIDE FIT are all the same CTA pattern. No secondary action hierarchy.
- **Spring theming is almost entirely absent** despite the subject line. No seasonal copy, no color palette, no imagery that feels like spring.

## Recommendations

- 1. **Pick one lead message.** Either lead with the BOGO offer (sale email) or lead with spring newness (product email). Combine them only if the offer is framed as a spring event ("Spring's here — new styles, BOGO 50% off").
- 2. **Upgrade the hero.** Use a lifestyle image with spring context — outdoor setting, warm colors, movement. The hero needs to do emotional work, not just label-drop.
- 3. **Kill or rebuild the best-sellers interstitial.** Either show actual best-seller products with prices, or remove it. As-is it adds scroll depth without adding value.
- 4. **Give each category tile a one-line proof point.** "Slip-Ins — no laces, no problem" or "Sandals — cushioned for all-day wear" would differentiate the blocks and create scan-stopping variety.
- 5. **Increase product image size** in category tiles, or use a 2-up product grid to show more options per category.
- 6. **Add urgency to the offer.** Is the BOGO time-limited? If so, show it. "Ends Sunday" changes click behavior.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | All `image.emails.skechers.com` assets served over HTTP | Update CDN/ESP asset base URL to `https://`. This will break rendering in Gmail, Apple Mail, Outlook.com. |
- | **P0** | `ink1000.com` open-tracking pixel over HTTP | Switch to HTTPS endpoint or replace with ESP-native open tracking. |
- | **P1** | Auth headers absent from QA relay | Configure AgentMail relay to forward `Authentication-Results` headers so SPF/DKIM status is auditable. |
- | **P1** | `List-Unsubscribe` header — unconfirmed | Verify header is present in raw message; add one-click `List-Unsubscribe-Post` for Gmail/Yahoo bulk sender compliance. |
- | **P1** | Plain-text body 71% URLs | Manually edit plain-text version to summarize offer in prose; strip or shorten redirect URLs. |
- | **P2** | 4 images missing `alt` text | Add descriptive `alt` attributes to all content images; use `alt=""` for decorative/tracking pixels. |
- | **P2** | `maximum-scale=1` + `text-size-adjust: none` | Remove `maximum-scale=1`; change `text-size-adjust` to `100%` to preserve user zoom/accessibility. |
- | **P2** | 29 click links not probed | Run automated link-probe against decoded redirect destinations before production send. |
- | **P3** | Krux/DMP pixels in test send | Confirm DMP pixels are suppressed or fire with correct subscriber data on production (currently `partner_uid=7187828` which appears to be a seed account). |

## Full review
## Skechers — "Spring into the Comfort You Know and Love" | Email Review

---

### 1. Executive Summary

A spring women's acquisition/retention email built around a BOGO 50% off offer, anchored by a "NEW for HER" hero and four category navigation blocks. The structure is clean and functional, but the email leans heavily on browse navigation rather than editorial storytelling. The promotional hook is present but undersells the spring occasion, and the category tiles deliver utility without excitement. Serviceable, not memorable.

---

### 2. Business Impact Score: **5.5 / 10**

Competent execution of a standard category-nav template. Leaves significant persuasion on the table.

---

### 3. What's Working

- **BOGO 50% off** is prominently placed at the very top of the email — the offer is immediately visible before any scroll, which is correct hierarchy.
- **"NEW for HER"** hero headline is bold, clear, and gender-targeted. Appropriate for a spring new-arrivals push.
- **Category architecture** (Casual Sneakers, Slip-Ins, Sandals, Wide Fit) maps cleanly to how women shop Skechers — it's practically useful and covers the core spring footwear consideration set.
- **Wide Fit** inclusion signals inclusive sizing awareness, which differentiates Skechers.
- Layout is linear and uncluttered — no visual collisions or apparent rendering breakage.

---

### 4. What's Weak

- **Hero image is underwhelming.** The lifestyle shot is small and indistinct at email width. There is no visual impact that says "spring" — no color, no season, no energy.
- **The BOGO offer and the "NEW for HER" positioning are competing narratives.** The email doesn't decide if it's a sale email or a newness email. The two messages dilute each other.
- **"DON'T MISS OUR BEST-SELLING COMFORT"** is a weak interstitial. This generic best-sellers callout sits between the hero and the category tiles with no product shown, no urgency, and no reason to click beyond "SHOP BEST SELLERS." It reads like filler.
- **Category product tiles are tiny.** Each category block shows a shoe, but at this render size the shoes are difficult to distinguish. There is minimal visual differentiation between the Casual, Slip-In, and Sandal blocks.
- **No personalization signals are visible.** No loyalty/adiclub-style tier messaging, no "back in stock for you," no individualized product recommendations — it reads like a broadcast blast.
- **CTAs are redundant and formulaic.** SHOP CASUALS / SHOP SLIP-INS / SHOP SANDALS / SHOP WIDE FIT are all the same CTA pattern. No secondary action hierarchy.
- **Spring theming is almost entirely absent** despite the subject line. No seasonal copy, no color palette, no imagery that feels like spring.

---

### 5. Recommendations

1. **Pick one lead message.** Either lead with the BOGO offer (sale email) or lead with spring newness (product email). Combine them only if the offer is framed as a spring event ("Spring's here — new styles, BOGO 50% off").
2. **Upgrade the hero.** Use a lifestyle image with spring context — outdoor setting, warm colors, movement. The hero needs to do emotional work, not just label-drop.
3. **Kill or rebuild the best-sellers interstitial.** Either show actual best-seller products with prices, or remove it. As-is it adds scroll depth without adding value.
4. **Give each category tile a one-line proof point.** "Slip-Ins — no laces, no problem" or "Sandals — cushioned for all-day wear" would differentiate the blocks and create scan-stopping variety.
5. **Increase product image size** in category tiles, or use a 2-up product grid to show more options per category.
6. **Add urgency to the offer.** Is the BOGO time-limited? If so, show it. "Ends Sunday" changes click behavior.

---

### 6. Bottom Line

This email won't hurt the brand, but it won't punch above its weight either. The BOGO offer is correctly surfaced and the category navigation is logical, but the creative is interchangeable with last week's send. Skechers' comfort story and spring freshness aren't being told — the email tells the subscriber *where to shop* without telling them *why now*. A more decisive editorial voice and a stronger hero would substantially lift engagement.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Spring women's email combining new arrivals ("NEW for HER") with a BOGO 50% promotional offer |
| **Hero / primary value prop** | "NEW for HER" headline over a lifestyle image; BOGO banner appears above it; "SHOP NOW" CTA present; image is small and lacks seasonal visual energy |
| **Membership / benefits** | No visible loyalty, rewards, or member tier messaging |
| **Product discoverability** | Four category tiles: Casual Sneakers, Slip-Ins, Sandals, Wide Fit — each with a product image and single CTA; coverage is relevant but tiles are visually small |
| **Utility / secondary modules** | "DON'T MISS OUR BEST-SELLING COMFORT" interstitial with SHOP BEST SELLERS CTA; footer with app download, social icons, and legal copy |
| **Bugs / friction / clarity issues** | No visible rendering breaks, broken images, or overlapping text; email renders cleanly but the test subject line prefix (`[Test]:`) would be a critical issue if this were a live send |

---

## Technical Audit

## Technical Audit — Skechers Spring/Return-to-Purchase (MKG_US_RETPURL24_W_NEW_GENDER_EN_04082026_V2)

---

### 1. Technical Summary

A largely functional re-engagement email with two systemic infrastructure problems: all image assets are served over HTTP (not HTTPS), and SPF/DKIM authentication status is unverifiable through the AgentMail relay. These are pre-send blockers that affect deliverability and rendering reliability.

---

### 2. Link & Tracking Issues

**Plain-text body is URL-heavy**
- 3,257 of 4,606 plain-text characters (71%) are URLs — above the 70% threshold that triggers spam filter scrutiny on some MTAs (Barracuda, SpamAssassin `URI_RATIO` rules).
- Root cause is likely auto-generated plain-text from the HTML template rather than a hand-edited version.

**29 click-tracking links use opaque redirect URLs**
- All CTAs route through `click.emails.skechers.com` with base64-encoded payloads (e.g. `?qs=eyJkZWtJZCI6...`). HTTP probe was skipped by QA, so destination URL integrity is unverified.
- No broken links confirmed, but final landing page alignment cannot be validated from source alone (see §6).

**Third-party pixel domains**
- `beacon.krxd.net` (Salesforce Krux DMP) — 2 user-match pixels + 1 ad-impression pixel present in hidden `<div>`.
- `ink1000.com` — secondary open-tracking pixel (`o.gif`) served over HTTP (separate finding below).
- `returnpath.net` — deliverability seed pixel present.

---

### 3. Rendering & Accessibility

**HTTP image sources — systemic (14 affected assets)**

All `image.emails.skechers.com` assets and the `ink1000.com` tracking pixel use `http://` rather than `https://`. Affected assets include:

| Asset | src (truncated) |
|---|---|
| Skechers logo | `http://image.emails.skechers.com/…/dde00662.png` |
| App Store badge | `http://image.emails.skechers.com/…/0ec56c9f.png` |
| Google Play badge | `http://image.emails.skechers.com/…/9bb508d0.png` |
| AfterPay logo | `http://image.emails.skechers.com/…/07cb60b5.png` |
| Social icons (Instagram, Twitter, Facebook, Pinterest, YouTube) | `http://image.emails.skechers.com/…/*.png` |
| Open pixel | `http://www.ink1000.com/…/o.gif` |

- Gmail (2013+), Apple Mail, and Outlook.com proxy or block mixed-content images. Logo, payment badge, and social icons will likely render as broken images in these clients.
- The `ink1000.com` open-tracking pixel will fire inaccurately in clients that block HTTP resources — open rates may be undercounted for this send.

**Missing alt text (4 images)**

| UUID | Context |
|---|---|
| `o.gif` (ink1000) | Tracking pixel — acceptable, but should use `alt=""` explicitly |
| `49468f73` | Unknown — no alt attribute |
| `00100b23` | Unknown — no alt attribute |
| `fc08601a` | Unknown — no alt attribute |

Missing `alt=""` causes screen readers to announce the filename. Alt text is also the fallback when images are blocked (the common case on first open in many clients).

**`-webkit-text-size-adjust: none`**
- Applied globally via `* { -webkit-text-size-adjust: none; }`. This prevents iOS Mail from scaling up small text. Combined with `maximum-scale=1` in the viewport meta tag, this can make the email inaccessible to low-vision users who rely on pinch-to-zoom or system text size settings.

**Viewport `maximum-scale=1`**
- `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />` — disables user zoom in iOS/Android WebView. This is a WCAG 1.4.4 (Resize Text) accessibility failure.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens detected in the provided HTML (no `%%var%%`, `{{placeholder}}`, or `[FIRST_NAME]` patterns visible in the truncated source). Subscriber ID `7187828` is hardcoded into the Krux pixel `partner_uid` param — this appears to be a seed/test subscriber ID consistent with the `[Test]` subject prefix.

---

### 5. Compliance

**CAN-SPAM**
- Physical mailing address and unsubscribe mechanism not visible in the truncated source — however these are typically in the footer. If absent, this is a CAN-SPAM violation. Verify footer is present in the full send.

**Authentication — status unknown**
- `Authentication-Results` header not found via AgentMail relay. SPF/DKIM/DMARC pass/fail status for `emails.skechers.com` cannot be confirmed for this specific send.
- `no-reply@emails.skechers.com` sending domain should have: SPF record covering the ESP's sending IPs, DKIM signature from the ESP, DMARC policy on `skechers.com`.
- This is a QA infrastructure gap (relay not forwarding auth headers), not necessarily a live authentication failure — but it should be resolved before production sends so deliverability checks are meaningful.

**Unsubscribe**
- `List-Unsubscribe` header not visible in provided headers. Confirm it is present in full message headers — required by Gmail and Yahoo bulk sender requirements (>5K/day threshold) as of 2024.

---

### 6. Email-to-Site Continuity

All CTAs route through `click.emails.skechers.com` with encrypted `qs=` payloads — UTM parameters are embedded within the redirect and not inspectable from source. **UTM attribution cannot be verified from the HTML alone.** QA skipped HTTP probing of all 29 tracking links.

- Campaign ID `MKG_US_RETPURL24_W_NEW_GENDER_EN_04082026` is present in the Krux ad-impression pixel and the `ink1000.com` pixel — consistent with the subject line campaign code.
- No direct (untracked) destination URLs are visible in the source, so there are no raw landing page mismatches to flag.
- **Action required:** Run a link-probe pass against the decoded redirect targets to confirm UTMs are appended and landing pages resolve to in-stock URLs.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | All `image.emails.skechers.com` assets served over HTTP | Update CDN/ESP asset base URL to `https://`. This will break rendering in Gmail, Apple Mail, Outlook.com. |
| **P0** | `ink1000.com` open-tracking pixel over HTTP | Switch to HTTPS endpoint or replace with ESP-native open tracking. |
| **P1** | Auth headers absent from QA relay | Configure AgentMail relay to forward `Authentication-Results` headers so SPF/DKIM status is auditable. |
| **P1** | `List-Unsubscribe` header — unconfirmed | Verify header is present in raw message; add one-click `List-Unsubscribe-Post` for Gmail/Yahoo bulk sender compliance. |
| **P1** | Plain-text body 71% URLs | Manually edit plain-text version to summarize offer in prose; strip or shorten redirect URLs. |
| **P2** | 4 images missing `alt` text | Add descriptive `alt` attributes to all content images; use `alt=""` for decorative/tracking pixels. |
| **P2** | `maximum-scale=1` + `text-size-adjust: none` | Remove `maximum-scale=1`; change `text-size-adjust` to `100%` to preserve user zoom/accessibility. |
| **P2** | 29 click links not probed | Run automated link-probe against decoded redirect destinations before production send. |
| **P3** | Krux/DMP pixels in test send | Confirm DMP pixels are suppressed or fire with correct subscriber data on production (currently `partner_uid=7187828` which appears to be a seed account). |
## Recent history

- [[2026-04-07-test-mkg-us-retpurl24-w-new-gender-en-04082026-spring-into-the-comfort-you-know-]] — 5/10 (2026-04-07)
- [[2026-04-07-test-mkg-us-ecmpurl24-w-new-gender-en-04082026-spring-into-a-new-level-of-comfor-349dcf97-9d57-4d45-a450-]] — 5.5/10 (2026-04-07)
- [[2026-04-07-test-mkg-us-ecmpurl24-w-new-gender-en-04082026-spring-into-a-new-level-of-comfor]] — 5/10 (2026-04-07)

