---
slug: 2026-03-31-test-mkg-us-na-u-new-wide-en-04022026your-favorites-fit-for-your-feet
type: email
date: 2026-03-31
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_NEW_WIDE_EN_04022026Your Favorites, Fit for Your Feet"
tags: [email, score-5, sender/skechers]
---
# [Test]: MKG_US_NA_U_NEW_WIDE_EN_04022026Your Favorites, Fit for Your Feet
**Score:** 5/10 · **Type:** Email audit · **2026-03-31**
## Executive summary

- A clean, functionally solid wide-fit launch email that telegraphs its purpose immediately but wastes the opportunity. The hero is clear; the product grid beneath it is underpowered. The email is structured more like a catalog link list than a persuasive product launch, and the wide-fit value proposition disappears almost instantly after the hero. For recipients who need wide shoes, this should feel like a revelation — it mostly feels like a routine batch email with a different headline.
- Good bones, weak execution. The fit-specific angle is a genuine differentiator that is not leveraged beyond the headline.

## What's working

- **Hero is unambiguous.** "Just In: New Wide Fit Arrivals" lands immediately. The subhead ("the more styles you love, the easier it is to find them") reinforces a customer-centric benefit angle.
- **Top offer banner is visible.** "50% OFF" with a "SHOP NOW" CTA appears at the very top, giving a transactional hook before the editorial content.
- **Gender segmentation is present.** Women/Men sections with distinct imagery give recipients a fast path to relevant product.
- **Best Sellers module is included.** Provides social-proof scaffolding and a catch-all for undecided browsers.

## What's weak

- **Wide-fit framing evaporates after the hero.** The Women and Men product sections carry no wide-fit labeling, product names, or callouts. A recipient could scroll past the hero and never know this is a wide-fit email.
- **Product imagery is small and low-impact.** The Women and Men grid images are thumbnail-sized. Shoes — especially fit-focused ones — need to show detail.
- **Hero image is a beach/lifestyle shot, not a shoe.** For a launch email built around a specific fit, the hero should show the product, not a scenic backdrop.
- **"Best Sellers" module is generic.** No connection to wide fit. It reads as a fallback module pasted in, diluting the campaign's identity.
- **Additional utility links (Women, Men, Kids, Clothing, New Arrivals, Sale) are plain text in a row.** They add visual noise without adding value for someone who came here for wide-fit styles.
- **Preview text is broken.** The rendered preview text (`Skechers® https://view.emails.skechers.com/...`) is raw URL text, a direct visibility failure in the inbox before the email is even opened.

## Recommendations

- 1. **Carry the wide-fit label into product sections.** Add a "Wide Fit" badge or sub-header to the Women and Men modules. Don't let the value prop live only in the hero.
- 2. **Replace the lifestyle hero with a product-forward shot.** Show the shoes. A foot-level, wide-angle shot of a wide-fit silhouette is more persuasive than a beach scene for this specific offer.
- 3. **Fix the preview text immediately.** It is rendering as a raw URL. This is the first thing recipients see in their inbox and it undermines credibility before the email is even opened.
- 4. **Increase product image size.** At least one shoe per gender section should be featured at a size that shows detail — color, sole, silhouette.
- 5. **Either connect Best Sellers to wide fit or remove the module.** "Our Best Sellers in Wide Fit" is a stronger module than a generic carousel. If the inventory doesn't support it, cut the module.
- 6. **Consolidate nav links.** The multi-link utility bar adds clutter. Trim to 3 max for this campaign context.
- **Must fix before send:**
- 1. **Remove `[Test]:` from subject line.** Campaign ID `MKG_US_NA_U_NEW_WIDE_EN_04022026` confirms this is a test capture; strip prefix before production deployment.
- 2. **Migrate all image sources to HTTPS.** Replace `http://image.emails.skechers.com/` with `https://image.emails.skechers.com/` across all 17 asset URLs. The HTTP scheme is the single largest rendering risk in this email.
- 3. **Verify SPF/DKIM authentication** on a full-headers inbox test. Confirm `Authentication-Results` shows `dkim=pass` and `spf=pass` for `emails.skechers.com`.
- 4. **Confirm `List-Unsubscribe` headers** are injected at send time by SFMC for bulk sender compliance.
- **Should fix:**
- 5. **Add `alt=""` to the 3 unnamed content images** (`49468f73`, `00100b23`, `fc08601a`). Even decorative images should carry empty `alt` attributes explicitly.
- 6. **Change `maximum-scale=1` to `maximum-scale=5`** in the viewport meta to restore pinch-zoom accessibility.
- 7. **Resolve redirect chains on QA pass** to confirm UTM parameters and landing page alignment before send.
- **Low priority:**
- 8. Scope `-webkit-text-size-adjust` away from the `*` selector to avoid unintended text suppression on iOS.
- 9. Confirm physical mailing address is present in full footer (not visible in truncated source).

## Full review
## 1. Executive Summary

A clean, functionally solid wide-fit launch email that telegraphs its purpose immediately but wastes the opportunity. The hero is clear; the product grid beneath it is underpowered. The email is structured more like a catalog link list than a persuasive product launch, and the wide-fit value proposition disappears almost instantly after the hero. For recipients who need wide shoes, this should feel like a revelation — it mostly feels like a routine batch email with a different headline.

---

## 2. Business Impact Score: 5/10

Good bones, weak execution. The fit-specific angle is a genuine differentiator that is not leveraged beyond the headline.

---

## 3. What's Working

- **Hero is unambiguous.** "Just In: New Wide Fit Arrivals" lands immediately. The subhead ("the more styles you love, the easier it is to find them") reinforces a customer-centric benefit angle.
- **Top offer banner is visible.** "50% OFF" with a "SHOP NOW" CTA appears at the very top, giving a transactional hook before the editorial content.
- **Gender segmentation is present.** Women/Men sections with distinct imagery give recipients a fast path to relevant product.
- **Best Sellers module is included.** Provides social-proof scaffolding and a catch-all for undecided browsers.

---

## 4. What's Weak

- **Wide-fit framing evaporates after the hero.** The Women and Men product sections carry no wide-fit labeling, product names, or callouts. A recipient could scroll past the hero and never know this is a wide-fit email.
- **Product imagery is small and low-impact.** The Women and Men grid images are thumbnail-sized. Shoes — especially fit-focused ones — need to show detail.
- **Hero image is a beach/lifestyle shot, not a shoe.** For a launch email built around a specific fit, the hero should show the product, not a scenic backdrop.
- **"Best Sellers" module is generic.** No connection to wide fit. It reads as a fallback module pasted in, diluting the campaign's identity.
- **Additional utility links (Women, Men, Kids, Clothing, New Arrivals, Sale) are plain text in a row.** They add visual noise without adding value for someone who came here for wide-fit styles.
- **Preview text is broken.** The rendered preview text (`Skechers® https://view.emails.skechers.com/...`) is raw URL text, a direct visibility failure in the inbox before the email is even opened.

---

## 5. Recommendations

1. **Carry the wide-fit label into product sections.** Add a "Wide Fit" badge or sub-header to the Women and Men modules. Don't let the value prop live only in the hero.
2. **Replace the lifestyle hero with a product-forward shot.** Show the shoes. A foot-level, wide-angle shot of a wide-fit silhouette is more persuasive than a beach scene for this specific offer.
3. **Fix the preview text immediately.** It is rendering as a raw URL. This is the first thing recipients see in their inbox and it undermines credibility before the email is even opened.
4. **Increase product image size.** At least one shoe per gender section should be featured at a size that shows detail — color, sole, silhouette.
5. **Either connect Best Sellers to wide fit or remove the module.** "Our Best Sellers in Wide Fit" is a stronger module than a generic carousel. If the inventory doesn't support it, cut the module.
6. **Consolidate nav links.** The multi-link utility bar adds clutter. Trim to 3 max for this campaign context.

---

## 6. Bottom Line

The subject line makes a promise ("Your Favorites, Fit for Your Feet") that the email body only half-delivers on. Wide-fit customers are an underserved segment with real purchase intent — this email grabs their attention and then hands them a generic catalog. Tighten the through-line from subject line to hero to product grid, fix the preview text bug, and this becomes a genuinely differentiated send.

---

## 7. Evidence

**Overall purpose:** Announce new wide-fit footwear arrivals and drive clicks to gendered shop pages, with a 50%-off offer as the commercial hook.

**Hero / primary value proposition:** "Just In: New Wide Fit Arrivals" over a beach lifestyle image. CTA: "SHOP NOW." Benefit subhead is present but modest. Wide-fit specificity is not reinforced visually.

**Membership / benefits section:** None visible. No loyalty points, no member-exclusive pricing, no adiClub-style tier mention.

**Product discoverability / recommendation modules:** Women section (lifestyle image + SHOP NOW), Men section (lifestyle image + SHOP NOW), Best Sellers module (small product thumbnails, SHOP NOW). All modules use generic CTAs — no product names, prices, or wide-fit callouts visible.

**Utility / secondary modules:** Text-row navigation (Women, Men, Kids, Clothing, New Arrivals, Sale), app download prompt, social icons, legal footer. Standard boilerplate, no campaign-specific utility.

**Bugs / friction / clarity issues:** Preview text rendered as a raw URL string — visible in the subject/preview line and undermines inbox presentation before the email is opened.

---

## Technical Audit

## Technical Audit — MKG_US_NA_U_NEW_WIDE_EN_04022026 / "Your Favorites, Fit for Your Feet"

**Reviewed:** 2026-03-31 | **From:** no-reply@emails.skechers.com

---

### 1. Technical Summary

The email is structurally sound but ships with a `[Test]:` subject-line prefix, widespread HTTP (non-HTTPS) image sources, several images lacking alt text, and an unverified SPF/DKIM authentication chain via the AgentMail relay. These are the primary issues requiring resolution before production send.

---

### 2. Link & Tracking Issues

| Severity | Finding |
|---|---|
| **HIGH** | Subject line retains `[Test]:` prefix — confirms this is a pre-production capture. Do not send with this prefix live. |
| INFO | 26 click-tracking links route through `click.emails.skechers.com` with encrypted `qs=` payloads. Destinations unverifiable without relay resolution; no broken links detected at the redirect domain level. |
| INFO | Three third-party beacon pixels present in hidden preheader `<div>`: Krux/Salesforce DMP (`beacon.krxd.net`), ink1000 (`www.ink1000.com`), and Return Path (`pixel.app.returnpath.net`). All are expected for this stack but add ~4 external DNS lookups on open. |
| WARN | Return Path pixel at `pixel.app.returnpath.net/pixel.gif` is loaded over HTTP (no `https://` scheme), consistent with the broader HTTP image issue below. |

---

### 3. Rendering & Accessibility

**HTTP image sources (high risk — images may be blocked by strict clients):**

All 17 non-tracking images load from `http://image.emails.skechers.com/...` — Gmail (2024+), Apple Mail with MPP, and most corporate proxies actively block or flag mixed-content HTTP resources. Affected assets include:

- Skechers logo: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png`
- App Store badge: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-eec2-471a-898d-0ca1cea7e115.png`
- Google Play badge: `http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-4b38-483d-8459-cf54186a0b9f.png`
- AfterPay badge, all social icons (Instagram, Twitter, Facebook, Pinterest, YouTube), and 3 unnamed content images

Additionally, the ink1000 tracking pixel loads over HTTP: `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif`

**Missing alt text:**

Four images have no `alt` attribute, failing WCAG 2.1 AA and degrading the experience when images are blocked:

- `o.gif` (ink1000 pixel) — minor; tracking pixel, but should have `alt=""`
- `49468f73-4651-4af3-bea2-61d1ae5db486.png` — unknown content image
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png` — unknown content image
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png` — unknown content image

**Other rendering notes:**

- `-webkit-text-size-adjust: none` applied globally via `* {}` selector — prevents iOS from reflowing text. Consider scoping this more narrowly or using `100%` instead of `none`.
- `viewport` meta uses `maximum-scale=1` which prevents pinch-zoom on mobile, a WCAG 1.4.4 failure.
- Responsive breakpoints are set at `375px` and `680px`. No `prefers-reduced-motion` declaration present (minor).

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%variable%%`, `{{field}}`, `[FIRST_NAME]`) detected in the truncated source. Preheader text is hardcoded as "Don't Miss BOGO 50% Off" — no dynamic personalization tokens visible. Cannot confirm full template at truncation boundary, but no red flags in visible markup.

---

### 5. Compliance

| Item | Status |
|---|---|
| **SPF/DKIM** | **WARN** — `Authentication-Results` header not present via AgentMail relay. SPF/DKIM pass/fail status unverifiable from this capture. Requires confirmation against raw headers from actual inbox delivery. |
| **Unsubscribe link** | Present — visible in footer (standard Salesforce Marketing Cloud unsubscribe pattern confirmed by link structure). CAN-SPAM compliant. |
| **Physical address** | Not verifiable from truncated source; expected in footer per CAN-SPAM §5(a)(5). Confirm present in full render. |
| **List-Unsubscribe header** | Not visible in this capture (headers not provided beyond Authentication-Results absence). Confirm `List-Unsubscribe` and `List-Unsubscribe-Post` headers are set at send time — required for Gmail/Yahoo bulk sender compliance (>5k/day threshold). |

---

### 6. Email-to-Site Continuity

UTM parameters are embedded inside encrypted `qs=` payloads on `click.emails.skechers.com` redirects and cannot be inspected directly. The `campaignid=MKG_US_NA_U_NEW_WIDE_EN_04022026` value is confirmed in the Krux beacon pixel, indicating campaign attribution is wired. However:

- Destination URLs and UTM values cannot be confirmed without resolving redirect chains.
- The `[Test]:` subject prefix and campaign ID date of `04022026` (April 2, 2026) vs. capture date of 2026-03-31 suggest this is a pre-flight capture — landing pages may not be live yet. Verify BOGO 50% Off offer is active on site at send time.

---

### 7. Recommendations

**Must fix before send:**

1. **Remove `[Test]:` from subject line.** Campaign ID `MKG_US_NA_U_NEW_WIDE_EN_04022026` confirms this is a test capture; strip prefix before production deployment.
2. **Migrate all image sources to HTTPS.** Replace `http://image.emails.skechers.com/` with `https://image.emails.skechers.com/` across all 17 asset URLs. The HTTP scheme is the single largest rendering risk in this email.
3. **Verify SPF/DKIM authentication** on a full-headers inbox test. Confirm `Authentication-Results` shows `dkim=pass` and `spf=pass` for `emails.skechers.com`.
4. **Confirm `List-Unsubscribe` headers** are injected at send time by SFMC for bulk sender compliance.

**Should fix:**

5. **Add `alt=""` to the 3 unnamed content images** (`49468f73`, `00100b23`, `fc08601a`). Even decorative images should carry empty `alt` attributes explicitly.
6. **Change `maximum-scale=1` to `maximum-scale=5`** in the viewport meta to restore pinch-zoom accessibility.
7. **Resolve redirect chains on QA pass** to confirm UTM parameters and landing page alignment before send.

**Low priority:**

8. Scope `-webkit-text-size-adjust` away from the `*` selector to avoid unintended text suppression on iOS.
9. Confirm physical mailing address is present in full footer (not visible in truncated source).
## Recent history

- [[2026-04-01-test-mkg-us-retpur-u-trend-retail-en-04012026-byour-next-spring-favorites-are-wa]] — 5/10 (2026-03-31)
- [[2026-04-01-test-mkg-us-retpur-u-trend-retail-en-04012026-ayour-next-spring-favorites-are-wa]] — 5.5/10 (2026-03-31)
- [[2026-04-01-test-mkg-us-ecmpur-u-trend-ecom-en-04012026-byou-deserve-comfort-this-spring]] — 5/10 (2026-03-31)

