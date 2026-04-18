---
slug: 2026-03-29-test-mkg-us-ecmpur-u-best-ecom-en-03292026-athe-styles-everyone-s-searching-for
type: email
date: 2026-03-27
persona: walker
score: "6.5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_AThe Styles Everyone's Searching For"
tags: [email, score-7, sender/skechers]
---
# [Test]: MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_AThe Styles Everyone's Searching For
**Score:** 6.5/10 · **Type:** Email audit · **2026-03-27**
## Executive summary

- A tightly focused "best sellers by search trend" email targeting e-commerce purchasers. The concept — curating products by what shoppers are actually searching — is smart and relevant, but the execution suffers from thumbnail imagery that is too small to sell footwear and a hero offer that competes with the editorial premise. The structure is clear, progression is logical, and utility modules are present. A solid workhorse email that could punch harder with larger product art and a cleaner hierarchy between the promotional header and the content mission.

## What's working

- **Concept alignment**: "Most Searched Styles" is a credible, curiosity-driven editorial hook that gives shoppers a reason to browse, not just buy.
- **Category segmentation**: Sandals → Hands Free Slip-Ins → Arch Fit is a logical, escalating-engagement progression that mirrors how real customers shop.
- **"New & For You" module**: A personalization signal (even if nominal) near the bottom adds relevance and extends dwell time.
- **Utility strip**: Stores, App, Free Shipping, and Free Returns icons at the footer are present and appropriately compact — good trust support without clutter.
- **Promo header**: 50% off + SHOP NOW CTA is immediately visible and action-oriented.

## What's weak

- **Product imagery is undersized**: At rendered width, the shoe thumbnails in each category row are small and low-impact. Footwear needs to be seen — these images don't show enough detail to trigger desire.
- **Hero offer undercuts the editorial**: The "50% Off" banner at the top reframes this as a discount email before the "Most Searched" premise even lands. The two messages fight each other.
- **Category CTAs are generic**: "Shop Sandals," "Shop Hands Free Slip-Ins," "Shop Arch Fit" — fine, but no urgency or reason tied to the search angle. "See What Everyone's Finding" would be stronger.
- **"New & For You" module feels disconnected**: The section introduces new arrivals but lacks a tie-back to the search trend premise, making it feel like a bolted-on appendix.
- **Preview text is broken**: The visible preview text in the subject/preview field contains raw URLs and token strings rather than readable copy — this is the first thing recipients see in the inbox and it's a clear deliverability/presentation miss.

## Recommendations

- 1. **Enlarge product tiles**: Give each category at least one dominant hero product image — ideally lifestyle — with two smaller secondary options beside it.
- 2. **Separate the discount message from the editorial**: Either lead with the trend angle (trust the content) or lead with the promotion — not both above the fold. Consider moving the offer to a secondary banner or footer callout.
- 3. **Fix preview text immediately**: Raw URLs and tokens in the inbox preview destroy credibility before the email is even opened. This is the most urgent fix.
- 4. **Tie CTAs to the search hook**: Make the action language feel like participation in a trend, not a generic shop link.
- 5. **Connect "New & For You" to search data**: A line like "Trending in your size" or "New arrivals matching your searches" would unify the email's premise.
- | Priority | Issue | Fix |
- |---|---|---|
- | **P0** | `[Test]:` prefix in live subject | Strip test prefix before production send; investigate template assembly pipeline |
- | **P0** | Subject line campaign ID concatenation | Add space/separator or remove campaign ID from subject template variable |
- | **P1** | All `image.emails.skechers.com` assets over HTTP | Update CDN configuration or template to serve via `https://` |
- | **P1** | ink1000 tracking pixel over HTTP | Update to `https://www.ink1000.com/...` |
- | **P1** | SPF/DKIM status unconfirmed | Verify authentication headers on raw production delivery headers |
- | **P2** | Malformed `<meta>` charset and IE-compat tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` respectively |
- | **P2** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve iOS accessibility scaling |
- | **P2** | Missing alt text on 3 content images | Add descriptive `alt` values to `49468f73`, `00100b23`, `fc08601a` PNGs |
- | **P3** | Third-party DMP pixels on open | Confirm Krux/ink1000 data sharing is covered in privacy policy disclosure |

## Full review
## Executive Summary

A tightly focused "best sellers by search trend" email targeting e-commerce purchasers. The concept — curating products by what shoppers are actually searching — is smart and relevant, but the execution suffers from thumbnail imagery that is too small to sell footwear and a hero offer that competes with the editorial premise. The structure is clear, progression is logical, and utility modules are present. A solid workhorse email that could punch harder with larger product art and a cleaner hierarchy between the promotional header and the content mission.

---

## Business Impact Score: 6.5 / 10

---

## What's Working

- **Concept alignment**: "Most Searched Styles" is a credible, curiosity-driven editorial hook that gives shoppers a reason to browse, not just buy.
- **Category segmentation**: Sandals → Hands Free Slip-Ins → Arch Fit is a logical, escalating-engagement progression that mirrors how real customers shop.
- **"New & For You" module**: A personalization signal (even if nominal) near the bottom adds relevance and extends dwell time.
- **Utility strip**: Stores, App, Free Shipping, and Free Returns icons at the footer are present and appropriately compact — good trust support without clutter.
- **Promo header**: 50% off + SHOP NOW CTA is immediately visible and action-oriented.

---

## What's Weak

- **Product imagery is undersized**: At rendered width, the shoe thumbnails in each category row are small and low-impact. Footwear needs to be seen — these images don't show enough detail to trigger desire.
- **Hero offer undercuts the editorial**: The "50% Off" banner at the top reframes this as a discount email before the "Most Searched" premise even lands. The two messages fight each other.
- **Category CTAs are generic**: "Shop Sandals," "Shop Hands Free Slip-Ins," "Shop Arch Fit" — fine, but no urgency or reason tied to the search angle. "See What Everyone's Finding" would be stronger.
- **"New & For You" module feels disconnected**: The section introduces new arrivals but lacks a tie-back to the search trend premise, making it feel like a bolted-on appendix.
- **Preview text is broken**: The visible preview text in the subject/preview field contains raw URLs and token strings rather than readable copy — this is the first thing recipients see in the inbox and it's a clear deliverability/presentation miss.

---

## Recommendations

1. **Enlarge product tiles**: Give each category at least one dominant hero product image — ideally lifestyle — with two smaller secondary options beside it.
2. **Separate the discount message from the editorial**: Either lead with the trend angle (trust the content) or lead with the promotion — not both above the fold. Consider moving the offer to a secondary banner or footer callout.
3. **Fix preview text immediately**: Raw URLs and tokens in the inbox preview destroy credibility before the email is even opened. This is the most urgent fix.
4. **Tie CTAs to the search hook**: Make the action language feel like participation in a trend, not a generic shop link.
5. **Connect "New & For You" to search data**: A line like "Trending in your size" or "New arrivals matching your searches" would unify the email's premise.

---

## Bottom Line

Competent architecture, broken preview, undersized imagery. Fix the preview text as a zero-day issue; invest in larger product visuals for the next send. The strategic concept is worth keeping — it just needs execution to match the idea.

---

## Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Showcase top-searched Skechers styles across key categories to drive e-commerce repurchase |
| **Hero / primary value prop** | "50% Off" promotional header with SHOP NOW CTA — prominent but tonally mismatched with the "Most Searched" editorial premise |
| **Membership / benefits** | Not present in this email |
| **Product discoverability** | Three category rows (Sandals, Hands Free Slip-Ins, Arch Fit) each with multiple small thumbnails and a category CTA; a "New & For You" module with additional product tiles |
| **Utility / secondary modules** | Footer icons for Stores, App, Free Shipping, Free Returns; standard legal/unsubscribe footer |
| **Bugs / friction** | Preview text visible in the header metadata shows raw URLs and token strings instead of readable inbox copy — a visible, confirmed issue from the email metadata shown |

---

## Technical Audit

## Technical Audit — Skechers "The Styles Everyone's Searching For" (MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_A)

---

### 1. Technical Summary

The email has a pervasive HTTP-over-HTTPS image loading problem affecting all hosted assets on `image.emails.skechers.com`, combined with two malformed `<meta>` tags and a subject line that contains an unstripped test prefix. Deliverability authentication could not be verified.

---

### 2. Link & Tracking Issues

**Subject line concatenation artifact**
The From/Subject as received: `[Test]: MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_AThe Styles Everyone's Searching For` — the campaign ID `MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_A` is directly concatenated with the subject copy with no separator. This indicates a template assembly bug where the campaign ID variable was not stripped before the subject line value.

**`[Test]:` prefix present**
The subject line retains the test-send prefix `[Test]:`. If this email was delivered to live subscribers, the test prefix was not removed before deployment.

**26 click-tracking links unverifiable**
All CTAs route through `click.emails.skechers.com` redirect. QA probing was skipped for these. No broken links could be confirmed, but redirect chain integrity is unverified.

**Third-party beacon pixels**
Three Krux/Salesforce DMP pixels and one ink1000.com pixel fire on open:
- `beacon.krxd.net/1x1_usermatch.gif` × 2 (user-match, sub-ID)
- `beacon.krxd.net/1x1_ad_impression.gif` (campaign attribution)
- `http://www.ink1000.com/p/up/7076d8b15a776085/o.gif` — HTTP, no alt text

These represent third-party data sharing on email open that should be disclosed in privacy policy.

---

### 3. Rendering & Accessibility

**Critical: All `image.emails.skechers.com` assets served over HTTP**
Every hosted image uses `http://image.emails.skechers.com/...` — 13 confirmed instances including the logo, product images, app store badges, and all social icons. Modern email clients (Gmail, Outlook.com, Apple Mail) either block or proxy HTTP images, causing broken or suppressed rendering:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662...png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f...png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0...png  (Google Play badge)
... (9 additional)
```
All should be `https://`.

**Malformed `<meta>` tags — missing `http-equiv` attribute**
```html
<meta content="text/html; charset=utf-8" />         <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                           <!-- missing http-equiv="X-UA-Compatible" -->
```
Without `http-equiv`, these directives are ignored by parsers. The charset declaration in particular affects text rendering fallback behavior.

**`-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; }
```
Setting this to `none` (rather than `100%`) prevents iOS from scaling text at all, including for users with accessibility text-size preferences. Should be `100%`.

**Missing alt text on 4 images**
- `o.gif` (ink1000 tracking pixel) — minor, but should be `alt=""`
- `49468f73...png`, `00100b23...png`, `fc08601a...png` — content images with no alt text; screen readers will either skip or announce the filename

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (`%%`, `{{`, `[%`) detected in the visible HTML source. Personalization fields appear either populated or absent by design.

---

### 5. Compliance

**SPF/DKIM authentication unverifiable**
QA finding: `Authentication-Results header not found` — SPF/DKIM/DMARC pass status could not be confirmed via the AgentMail relay. Sender domain `emails.skechers.com` must have valid SPF/DKIM alignment for CAN-SPAM and deliverability compliance. This must be verified against raw headers from a production delivery.

**`[Test]:` subject prefix**
If delivered to live subscribers, this constitutes a misleading subject line identifier and may trigger spam classification. CAN-SPAM requires accurate subject lines.

**Unsubscribe / physical address**
Not verifiable from the truncated HTML, but these are required under CAN-SPAM. Assumed present in footer — must be confirmed in full source review.

---

### 6. Email-to-Site Continuity

UTM parameter presence cannot be confirmed without resolving the `click.emails.skechers.com` redirect chains (skipped by QA). The campaign ID `MKG_US_ECMPUR_U_BEST_ECOM_EN_03292026_A` is present in the Krux impression pixel and ink1000 pixel, indicating some attribution is in place at the pixel level regardless of link UTMs.

---

### 7. Recommendations

| Priority | Issue | Fix |
|---|---|---|
| **P0** | `[Test]:` prefix in live subject | Strip test prefix before production send; investigate template assembly pipeline |
| **P0** | Subject line campaign ID concatenation | Add space/separator or remove campaign ID from subject template variable |
| **P1** | All `image.emails.skechers.com` assets over HTTP | Update CDN configuration or template to serve via `https://` |
| **P1** | ink1000 tracking pixel over HTTP | Update to `https://www.ink1000.com/...` |
| **P1** | SPF/DKIM status unconfirmed | Verify authentication headers on raw production delivery headers |
| **P2** | Malformed `<meta>` charset and IE-compat tags | Add `http-equiv="Content-Type"` and `http-equiv="X-UA-Compatible"` respectively |
| **P2** | `-webkit-text-size-adjust: none` | Change to `100%` to preserve iOS accessibility scaling |
| **P2** | Missing alt text on 3 content images | Add descriptive `alt` values to `49468f73`, `00100b23`, `fc08601a` PNGs |
| **P3** | Third-party DMP pixels on open | Confirm Krux/ink1000 data sharing is covered in privacy policy disclosure |
## Recent history

- [[2026-03-29-test-mkg-us-retpur-u-best-retail-en-03292026check-out-what-s-trending-online]] — 5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-na-w-multi-gender-en-03282026-bskechers-exclusives-the-shoes-you-can]] — 5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-na-w-multi-gender-en-03282026-a-v3fresh-spring-styles-to-step-up-you]] — 5/10 (2026-03-27)

