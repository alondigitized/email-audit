---
slug: 2026-03-31-test-mkg-us-na-u-trend-gender-en-04012026-v2you-deserve-comfort-this-spring
type: email
date: 2026-03-31
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_TREND_GENDER_EN_04012026_V2You Deserve Comfort This Spring"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NA_U_TREND_GENDER_EN_04012026_V2You Deserve Comfort This Spring
**Score:** 6/10 · **Type:** Email audit · **2026-03-31**
## Executive summary

- A Spring trend-report email structured around four content modules: slip-ins, street style, color, and best sellers. The hierarchy is clear, the product imagery is clean, and the seasonal angle is appropriate. However, the hero is text-light with a small-font offer, several modules feel interchangeable in format, and there's a visible subject-line test artifact that would undermine sender credibility in a real deployment.
- Solid foundation, but the lack of urgency, weak offer visibility in the hero, and generic module labels leave conversion opportunity on the table.

## What's working

- **Hero banner** delivers an immediate seasonal frame ("Trend Report") with an offer (50% off) and a clear CTA button. Gets to the point fast.
- **Four distinct modules** give the email legitimate browse depth — slip-ins, street style, color, and best sellers each have a product image and a CTA.
- **Product photography** is clean and consistent throughout; spring colorways (pinks, nudes, pastels) are cohesive and visually appealing.
- **Best Sellers section** at the bottom appropriately anchors the email for lower-intent readers who scroll past trend content.
- **Footer** includes the expected nav categories (Women, Men, Kids, Clothing, Sale), social icons, and unsubscribe, which is functionally complete.

## What's weak

- **Subject line / pre-header garbage is visible in the sender metadata**: the subject reads `[Test]: MKG_US_NA_U_TREND_GENDER_EN_04012026_V2You Deserve Comfort This Spring` — this internal test tag is fully exposed. Fatal in a live send.
- **50% off offer is undersized in the hero.** The discount is the single strongest commercial hook in the email, but it renders in small text above the headline. It should be the headline.
- **Module labels are generic**: "Street Style," "Color," and "Hands Free Slip-Ins" don't communicate a benefit. They name a category, not a reason to click.
- **No product names or prices** are visible in any module. Readers can't evaluate product appeal without clicking, which adds friction.
- **Best Sellers module** is text-only category links (Women, Men, Kids, Clothing, Sale) — no product thumbnails. As an anchor module, it relies entirely on the CTA button and a small hero image; it under-delivers relative to the modules above it.
- **Color module** is the weakest conceptually — "Color" as a header doesn't tell a trend story. What color trend? Why now?

## Recommendations

- 1. **Strip the test prefix from the subject line** before any live deployment. This is a deployment-process issue, but it's visible and damaging.
- 2. **Lead with the offer** — make "UP TO 50% OFF" the primary headline in the hero, not a secondary callout.
- 3. **Rewrite module headers as benefit statements**: e.g., "No Laces? No Problem." for Slip-Ins; "Spring's Must-Have Palette" for Color.
- 4. **Add 2–3 product thumbnails with names/prices** under at least the hero and best sellers modules to reduce click friction.
- 5. **Give Best Sellers real product imagery** — a grid of 4 thumbnails would anchor the scroll far more effectively than category text links.
- 6. **Tighten the Color module** — tie it to a specific trend claim or editorial POV, otherwise it reads as filler.
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | `[Test]:` in subject + malformed subject concatenation | Strip test prefix; fix space between campaign ID and subject copy before production send |
- | **P0** | 14 images on HTTP | Update all `http://image.emails.skechers.com` srcs to `https://` |
- | **P0** | `pixel.app.returnpath.net` missing protocol | Fix to `https://pixel.app.returnpath.net/...` |
- | **P1** | `ink1000.com` open pixel on HTTP | Upgrade to HTTPS or replace with SFMC native open tracking |
- | **P1** | `partner_uid=102541952` hardcoded | Replace with dynamic merge token if this is intended to be subscriber-specific |
- | **P1** | Missing `List-Unsubscribe` header confirmation | Verify one-click unsubscribe header is present; required for Gmail/Yahoo bulk sender compliance |
- | **P1** | SPF/DKIM unverified | Confirm authentication passes end-to-end through AgentMail relay |
- | **P2** | 3 images missing alt text | Add descriptive alt text to `49468f73`, `00100b23`, `fc08601a` |
- | **P2** | `* { -webkit-text-size-adjust: none }` | Scope to specific elements or use `100%` instead of `none` to preserve accessibility scaling |

## Full review
## Skechers — "You Deserve Comfort This Spring" (04/01/2026 V2)

---

### 1. Executive Summary

A Spring trend-report email structured around four content modules: slip-ins, street style, color, and best sellers. The hierarchy is clear, the product imagery is clean, and the seasonal angle is appropriate. However, the hero is text-light with a small-font offer, several modules feel interchangeable in format, and there's a visible subject-line test artifact that would undermine sender credibility in a real deployment.

---

### 2. Business Impact Score: 6 / 10

Solid foundation, but the lack of urgency, weak offer visibility in the hero, and generic module labels leave conversion opportunity on the table.

---

### 3. What's Working

- **Hero banner** delivers an immediate seasonal frame ("Trend Report") with an offer (50% off) and a clear CTA button. Gets to the point fast.
- **Four distinct modules** give the email legitimate browse depth — slip-ins, street style, color, and best sellers each have a product image and a CTA.
- **Product photography** is clean and consistent throughout; spring colorways (pinks, nudes, pastels) are cohesive and visually appealing.
- **Best Sellers section** at the bottom appropriately anchors the email for lower-intent readers who scroll past trend content.
- **Footer** includes the expected nav categories (Women, Men, Kids, Clothing, Sale), social icons, and unsubscribe, which is functionally complete.

---

### 4. What's Weak

- **Subject line / pre-header garbage is visible in the sender metadata**: the subject reads `[Test]: MKG_US_NA_U_TREND_GENDER_EN_04012026_V2You Deserve Comfort This Spring` — this internal test tag is fully exposed. Fatal in a live send.
- **50% off offer is undersized in the hero.** The discount is the single strongest commercial hook in the email, but it renders in small text above the headline. It should be the headline.
- **Module labels are generic**: "Street Style," "Color," and "Hands Free Slip-Ins" don't communicate a benefit. They name a category, not a reason to click.
- **No product names or prices** are visible in any module. Readers can't evaluate product appeal without clicking, which adds friction.
- **Best Sellers module** is text-only category links (Women, Men, Kids, Clothing, Sale) — no product thumbnails. As an anchor module, it relies entirely on the CTA button and a small hero image; it under-delivers relative to the modules above it.
- **Color module** is the weakest conceptually — "Color" as a header doesn't tell a trend story. What color trend? Why now?

---

### 5. Recommendations

1. **Strip the test prefix from the subject line** before any live deployment. This is a deployment-process issue, but it's visible and damaging.
2. **Lead with the offer** — make "UP TO 50% OFF" the primary headline in the hero, not a secondary callout.
3. **Rewrite module headers as benefit statements**: e.g., "No Laces? No Problem." for Slip-Ins; "Spring's Must-Have Palette" for Color.
4. **Add 2–3 product thumbnails with names/prices** under at least the hero and best sellers modules to reduce click friction.
5. **Give Best Sellers real product imagery** — a grid of 4 thumbnails would anchor the scroll far more effectively than category text links.
6. **Tighten the Color module** — tie it to a specific trend claim or editorial POV, otherwise it reads as filler.

---

### 6. Bottom Line

The email is structurally competent — the right modules in roughly the right order — but it plays it too safe. The offer is buried, module copy is category-speak rather than sell-copy, and the best sellers section lacks the product proof it needs to drive clicks. V2 needs a bolder offer hierarchy and sharper module framing to convert beyond the already-engaged audience.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Spring trend report with a promotional offer (up to 50% off) driving browse across key footwear categories |
| **Hero / primary value prop** | "Trend Report" headline with 50% off callout and SHOP NOW CTA; offer text is small relative to the headline, weakening urgency |
| **Membership / benefits** | None visible — no loyalty, rewards, or member-exclusive framing present |
| **Product discoverability** | Four content modules (Slip-Ins, Street Style, Color, Best Sellers) each with one product image and one CTA; no names/prices visible |
| **Utility / secondary modules** | Footer nav (Women, Men, Kids, Clothing, Sale) + social links + unsubscribe; functionally adequate |
| **Bugs / friction / clarity** | Test tag `[Test]: MKG_US_NA_...` is fully visible in subject; pre-header renders as raw URL strings rather than preview text — both are critical issues for any live deployment |

---

## Technical Audit

## Technical Audit — MKG_US_NA_U_TREND_GENDER_EN_04012026 (V2)

**From:** SKECHERS <no-reply@emails.skechers.com>
**Subject:** [Test]: MKG_US_NA_U_TREND_GENDER_EN_04012026_V2You Deserve Comfort This Spring

---

### 1. Technical Summary

The email contains a critical production-readiness blocker (live "[Test]:" subject prefix) and a pervasive HTTP mixed-content issue affecting 14+ images hosted on `image.emails.skechers.com`. SPF/DKIM authentication status is unverified through the AgentMail relay.

---

### 2. Link & Tracking Issues

**Subject line contains test prefix — not stripped before send:**
```
Subject: [Test]: MKG_US_NA_U_TREND_GENDER_EN_04012026_V2You Deserve Comfort This Spring
```
The `[Test]:` tag is present in the delivered subject. Also note the campaign ID is concatenated directly into the subject with no space separator before "You Deserve Comfort..." — likely a template rendering error.

**26 click-tracking links** route through `click.emails.skechers.com` with encrypted `?qs=` payloads. All were skipped during HTTP probing; destination URL integrity cannot be confirmed from this audit.

**Third-party pixel beacons present:**
- `beacon.krxd.net` — 3 pixels (user-match + ad impression), using `partner_uid=102541952` (hardcoded subscriber ID, not a merge token — see Section 4)
- `ink1000.com` open pixel served over **HTTP**: `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — will be blocked by iOS Mail Privacy Protection and modern clients enforcing HTTPS

---

### 3. Rendering & Accessibility

**Mixed content — HTTP image sources (14 confirmed):**
All content images are served from `http://image.emails.skechers.com/lib/fe3115707564047a731c78/...`. Clients enforcing HTTPS (Gmail, Outlook 2019+, iOS 14+) will block or proxy these, causing broken images. Affected assets include:

| Asset | Alt Text |
|---|---|
| `dde00662...png` (Skechers logo) | "Skechers" — present |
| `49468f73...png` | **missing** |
| `0ec56c9f...png` | "Available on the App Store" |
| `9bb508d0...png` | "Android App on Google Play" |
| `00100b23...png` | **missing** |
| `07cb60b5...png` | "AfterPay" |
| `fc08601a...png` | **missing** |
| Social icons (Instagram, Twitter, Facebook, Pinterest, YouTube) | present |

**Missing alt text on 3 images** (`49468f73`, `00100b23`, `fc08601a`). These will render as blank boxes with images disabled, providing no fallback context.

**`pixel.app.returnpath.net` pixel uses no protocol scheme:**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0...">
```
Missing `https://` prefix — this will not resolve as a valid URL in any email client.

**`-webkit-text-size-adjust: none`** is applied globally via `* { -webkit-text-size-adjust: none }`. This suppresses iOS font scaling for all users, including those with accessibility font size preferences set.

---

### 4. Personalization & Merge Tokens

**Hardcoded subscriber ID in Krux beacon:**
```html
partner_uid=102541952
```
This appears to be a static value rather than a dynamic merge token (e.g., `%%subscriberID%%` or `{{subscriber_id}}`). If accurate, all recipients share the same beacon ID — defeating the purpose of the user-match pixel.

No other unresolved or malformed merge tokens detected in the visible HTML.

---

### 5. Compliance

**CAN-SPAM:** Physical mailing address and unsubscribe link not visible in the truncated source. QA summary does not flag their absence, suggesting they are present in the non-truncated footer — treat as unconfirmed pending full source review.

**Authentication:**
```
[WARN] Authentication-Results header not found
```
SPF/DKIM/DMARC pass status could not be verified through the AgentMail relay. Sending domain `emails.skechers.com` should have a valid DKIM signature and SPF alignment. Cannot confirm from available data.

**Unsubscribe:** Not confirmed in truncated source — verify `List-Unsubscribe` header is present and one-click unsubscribe (`List-Unsubscribe-Post`) is configured per RFC 8058 / Gmail/Yahoo 2024 sender requirements.

---

### 6. Email-to-Site Continuity

All 26 CTAs route through `click.emails.skechers.com` click-redirect URLs. UTM parameter contents are encrypted in the `?qs=` payload and cannot be validated without resolving the redirects. The `campaignid=MKG_US_NA_U_TREND_GENDER_EN_04012026` value appears in the Krux impression pixel, confirming campaign attribution is wired — but UTM tag presence on final landing pages is unverifiable from this audit.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | `[Test]:` in subject + malformed subject concatenation | Strip test prefix; fix space between campaign ID and subject copy before production send |
| **P0** | 14 images on HTTP | Update all `http://image.emails.skechers.com` srcs to `https://` |
| **P0** | `pixel.app.returnpath.net` missing protocol | Fix to `https://pixel.app.returnpath.net/...` |
| **P1** | `ink1000.com` open pixel on HTTP | Upgrade to HTTPS or replace with SFMC native open tracking |
| **P1** | `partner_uid=102541952` hardcoded | Replace with dynamic merge token if this is intended to be subscriber-specific |
| **P1** | Missing `List-Unsubscribe` header confirmation | Verify one-click unsubscribe header is present; required for Gmail/Yahoo bulk sender compliance |
| **P1** | SPF/DKIM unverified | Confirm authentication passes end-to-end through AgentMail relay |
| **P2** | 3 images missing alt text | Add descriptive alt text to `49468f73`, `00100b23`, `fc08601a` |
| **P2** | `* { -webkit-text-size-adjust: none }` | Scope to specific elements or use `100%` instead of `none` to preserve accessibility scaling |
## Recent history

- [[2026-03-31-test-mkg-us-na-u-trend-gender-en-04012026get-ahead-of-this-season-s-trends]] — 5.5/10 (2026-03-31)
- [[2026-03-31-test-mkg-us-retpur-u-trend-retail-en-04012026new-season-new-styles]] — 6/10 (2026-03-31)
- [[2026-03-31-test-mkg-us-ecmpur-u-trend-ecom-en-04012026get-ahead-of-this-season-s-trends]] — 6/10 (2026-03-31)

