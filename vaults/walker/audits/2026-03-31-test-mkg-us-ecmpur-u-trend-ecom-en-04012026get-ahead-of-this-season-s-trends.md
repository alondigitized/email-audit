---
slug: 2026-03-31-test-mkg-us-ecmpur-u-trend-ecom-en-04012026get-ahead-of-this-season-s-trends
type: email
date: 2026-03-31
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_ECMPUR_U_TREND_ECOM_EN_04012026Get Ahead of this Season's Trends"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_ECMPUR_U_TREND_ECOM_EN_04012026Get Ahead of this Season's Trends
**Score:** 6/10 · **Type:** Email audit · **2026-03-31**
## Executive summary

- This is a trend-editorial email that tries to do double duty: deliver a seasonal "Trend Report" narrative while also pushing a promotional discount. The result is a competent but slightly unfocused send. The modular structure is clean and the category breakdown is logical, but the hero undercuts its own trend story by leading with a discount badge, and the email's small-scale rendering makes several sections feel rushed rather than curated.
- Solid execution on structure, weak on focus. The email will convert bargain hunters but doesn't fully capitalize on the editorial angle it set up.

## What's working

- **"Trend Report" framing** is a strong editorial hook — positions Skechers as tastemaker, not just retailer.
- **Four distinct trend modules** (Hands Free Slip-In, Street Style, Color, Best Sellers) give the email real scroll depth and multiple entry points for different shopper types.
- **Consistent "SHOP NOW" CTAs** on every module — no dead ends, clean conversion path throughout.
- **Color module** is visually strong; the vibrant, varied footwear shots give that section genuine energy.
- **Best Sellers anchor at the bottom** is smart — catches undecided readers with social proof before the footer.

## What's weak

- **Hero contradicts itself.** "Trend Report" sets an editorial tone, but the prominent "50% OFF" badge in the top-left immediately shifts the email into discount territory. These are two different brand voices competing in the same module. The trend story loses.
- **Hero image is undersized.** The shoe in the hero is cropped and small relative to the banner space — it doesn't make a strong visual case for the season's trends.
- **Module images are uniformly small.** Every category (Slip-In, Street Style, Color) uses thumbnail-scale product shots. For a trend-forward email, the images need to be larger and more aspirational to carry editorial weight.
- **"Hands Free Slip-In" module feels like a product push, not a trend story.** The section title is a product line name, not a trend concept. It breaks the editorial frame.
- **Best Sellers module styling is noticeably plain** compared to the sections above it — text-heavy, low visual impact. It reads as an afterthought rather than a strategic closer.
- **Footer nav is truncated.** Category labels (MEN, WOMEN, KIDS, CLOTHING, BUNDLES, SALE) are readable but the footer renders very small, reducing usability on mobile.

## Recommendations

- 1. **Commit to one voice in the hero.** Either lead with the discount (swap to a promo email structure) or lead with the trend story and move the offer to a secondary callout below the hero. Don't split the difference.
- 2. **Rename product-line modules to trend concepts.** "Hands Free Slip-In" → something like "No-Lace, No Limits" keeps the editorial frame intact while still surfacing the product.
- 3. **Scale up hero and module imagery.** Full-width lifestyle imagery for at least the hero and one featured trend would dramatically increase perceived quality.
- 4. **Give Best Sellers a visual upgrade.** Add a product image or lifestyle shot — even a single strong image — to match the visual treatment of modules above it.
- 5. **Fix preview text before any live send.** The preview shown in the subject metadata is rendering raw URLs — a significant deliverability and first-impression issue that needs to be resolved at the template level.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | **High** | All `image.emails.skechers.com` assets use HTTP | Migrate CDN to HTTPS or update template base URL — images will be blocked or proxied in major clients |
- | **High** | `[Test]` in subject line | Strip before production deployment |
- | **Medium** | ink1000 open-tracking pixel uses HTTP | Update to HTTPS endpoint or replace with SFMC native open tracking |
- | **Medium** | Krux `partner_uid=102541952` appears static | Confirm this is a dynamic merge token (`%%subscriberID%%`) in production; static IDs in DMP sync can cause audience data contamination |
- | **Medium** | 3 content images missing alt text | Add descriptive `alt` attributes for screen reader and image-blocked rendering |
- | **Low** | SPF/DKIM not confirmed via relay | Verify authentication headers on a live send before production deployment |
- | **Low** | UTM params not inspectable through redirect | Spot-check 2–3 destination URLs post-redirect to confirm campaign tagging is intact |

## Full review
## Email Review: Skechers "Trend Report" — Get Ahead of this Season's Trends

---

### 1. Executive Summary

This is a trend-editorial email that tries to do double duty: deliver a seasonal "Trend Report" narrative while also pushing a promotional discount. The result is a competent but slightly unfocused send. The modular structure is clean and the category breakdown is logical, but the hero undercuts its own trend story by leading with a discount badge, and the email's small-scale rendering makes several sections feel rushed rather than curated.

---

### 2. Business Impact Score: **6 / 10**

Solid execution on structure, weak on focus. The email will convert bargain hunters but doesn't fully capitalize on the editorial angle it set up.

---

### 3. What's Working

- **"Trend Report" framing** is a strong editorial hook — positions Skechers as tastemaker, not just retailer.
- **Four distinct trend modules** (Hands Free Slip-In, Street Style, Color, Best Sellers) give the email real scroll depth and multiple entry points for different shopper types.
- **Consistent "SHOP NOW" CTAs** on every module — no dead ends, clean conversion path throughout.
- **Color module** is visually strong; the vibrant, varied footwear shots give that section genuine energy.
- **Best Sellers anchor at the bottom** is smart — catches undecided readers with social proof before the footer.

---

### 4. What's Weak

- **Hero contradicts itself.** "Trend Report" sets an editorial tone, but the prominent "50% OFF" badge in the top-left immediately shifts the email into discount territory. These are two different brand voices competing in the same module. The trend story loses.
- **Hero image is undersized.** The shoe in the hero is cropped and small relative to the banner space — it doesn't make a strong visual case for the season's trends.
- **Module images are uniformly small.** Every category (Slip-In, Street Style, Color) uses thumbnail-scale product shots. For a trend-forward email, the images need to be larger and more aspirational to carry editorial weight.
- **"Hands Free Slip-In" module feels like a product push, not a trend story.** The section title is a product line name, not a trend concept. It breaks the editorial frame.
- **Best Sellers module styling is noticeably plain** compared to the sections above it — text-heavy, low visual impact. It reads as an afterthought rather than a strategic closer.
- **Footer nav is truncated.** Category labels (MEN, WOMEN, KIDS, CLOTHING, BUNDLES, SALE) are readable but the footer renders very small, reducing usability on mobile.

---

### 5. Recommendations

1. **Commit to one voice in the hero.** Either lead with the discount (swap to a promo email structure) or lead with the trend story and move the offer to a secondary callout below the hero. Don't split the difference.
2. **Rename product-line modules to trend concepts.** "Hands Free Slip-In" → something like "No-Lace, No Limits" keeps the editorial frame intact while still surfacing the product.
3. **Scale up hero and module imagery.** Full-width lifestyle imagery for at least the hero and one featured trend would dramatically increase perceived quality.
4. **Give Best Sellers a visual upgrade.** Add a product image or lifestyle shot — even a single strong image — to match the visual treatment of modules above it.
5. **Fix preview text before any live send.** The preview shown in the subject metadata is rendering raw URLs — a significant deliverability and first-impression issue that needs to be resolved at the template level.

---

### 6. Bottom Line

This email has the right ingredients for a strong trend send but doesn't execute the concept fully. The discount/editorial split in the hero is the single biggest fix. Resolve that, scale up the imagery, and this becomes a noticeably stronger piece. As-is, it's functional but forgettable.

---

### 7. Evidence

**Overall purpose:** Seasonal trend editorial email targeting ecom purchasers, with embedded promotional offer and four product category modules.

**Hero / primary value proposition:** "Trend Report" headline with a "50% OFF" promo badge and "SHOP NOW" CTA. The dual messaging (editorial + promotional) creates conflicting intent signals in the most valuable real estate.

**Membership / benefits section:** None visible. No loyalty, rewards, or adiclub-equivalent callout present in this email.

**Product discoverability / recommendation modules:** Four named modules — Hands Free Slip-In, Street Style, Color, Best Sellers — each with a "SHOP NOW" CTA. Good breadth, but the small image sizing limits visual impact across all four.

**Utility / secondary modules:** Footer contains gender/category navigation (MEN, WOMEN, KIDS, CLOTHING, BUNDLES, SALE) and social icons. Functional but rendered at low visibility.

**Bugs / friction / clarity issues:** No broken images or overlapping text detected. Preview text in the send metadata renders raw URLs — not visible in the email body itself, but a real-world inbox issue for recipients who read preview text before opening.

---

## Technical Audit

## Technical Audit — Skechers TREND_ECOM_EN_04012026

**From:** no-reply@emails.skechers.com
**Subject:** [Test]: MKG_US_ECMPUR_U_TREND_ECOM_EN_04012026 — Get Ahead of this Season's Trends

---

### 1. Technical Summary

Email is structurally sound and renders with standard ESP (SFMC) patterns, but has two systemic issues affecting deliverability risk and rendering reliability: all `image.emails.skechers.com` assets are served over HTTP, and SPF/DKIM authentication status could not be confirmed through the relay. The `[Test]` subject prefix indicates this was not sent from a production deployment.

---

### 2. Link & Tracking Issues

**Subject line contains `[Test]` prefix** — confirms this is a test send. Production deployment must strip this before launch.

**26 click-tracking links** wrapped via `click.emails.skechers.com` — all skipped during HTTP probe (expected for redirect-chain links). No broken destination URLs could be confirmed, but none were validated.

**Third-party tracking pixels present:**
- `beacon.krxd.net` (2× user-match pixels, 1× ad impression pixel) — Krux/Salesforce DMP sync
- `pixel.app.returnpath.net` — Validity/Return Path inbox monitoring
- `http://www.ink1000.com/p/up/...` — Non-HTTPS open-tracking pixel (see §3)

No issues with link structure or redirect logic were detectable from source alone.

---

### 3. Rendering & Accessibility

**Critical — HTTP image sources (16 images):** All hosted assets on `image.emails.skechers.com` use `http://`, not `https://`. Modern email clients (Gmail, Outlook 2016+, Apple Mail) proxy or block mixed-content HTTP images. Affected assets include the Skechers logo, footer icons (social, app store, AfterPay), and decorative images:

```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
... + 11 additional footer/social assets
```

Also affected: the ink1000.com open-tracking pixel uses HTTP:
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```

**Missing alt text (4 images):**
- `o.gif` (ink1000 tracking pixel) — acceptable for tracking pixels, but worth suppressing with `alt=""`
- `49468f73-...png` — unknown content image, no alt
- `00100b23-...png` — unknown content image, no alt
- `fc08601a-...png` — unknown content image, no alt

Alt text on functional images (logo, social icons, app badges) is present. The three unnamed content images lacking alt text are an accessibility gap.

**CSS mobile/desktop toggle** uses `display:none !important` on `.desktop-content` by default, revealed at `min-width: 768px`. This is a standard email pattern but may conflict with Gmail's CSS stripping — verify desktop render in Gmail web client.

**`-webkit-text-size-adjust: none`** applied globally — suppresses iOS auto-scaling, which can hurt legibility on small screens if font sizes are not explicitly set per breakpoint.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens (e.g., `%%field%%`, `{{field}}`) visible in the truncated source. Subscriber ID `102541952` is hardcoded in the Krux pixel `partner_uid` parameter — this appears to be a static test subscriber ID rather than a dynamic token, which would be a data isolation issue in production.

```
partner_uid=102541952  ← verify this is %%subscriberID%% in production template
```

---

### 5. Compliance

**CAN-SPAM:** Physical mailing address and unsubscribe mechanism not visible in the truncated source — these must be present in the footer. Unable to confirm from provided HTML excerpt.

**Authentication — SPF/DKIM unverified:**
```
[WARN] Authentication-Results header not found: Expected via AgentMail relay — SPF/DKIM status unknown
```
This is a relay artifact from the audit pipeline, not necessarily a live sending issue. However, SPF (`emails.skechers.com`) and DKIM signing should be verified against the live received headers before production send.

**GDPR/consent scope:** Not auditable from HTML source alone.

---

### 6. Email-to-Site Continuity

Campaign ID `MKG_US_ECMPUR_U_TREND_ECOM_EN_04012026` is present in both the Krux impression pixel and the ink1000 pixel — consistent campaign tagging.

All destination links are wrapped in `click.emails.skechers.com` redirects with encrypted `qs=` parameters (JWT-style), preventing direct UTM inspection from source. UTM parameter passthrough to landing pages cannot be confirmed without following the redirect chain. Recommend verifying that `utm_source=email`, `utm_medium=email`, and `utm_campaign=MKG_US_ECMPUR_U_TREND_ECOM_EN_04012026` (or equivalent) are appended to all destination URLs post-redirect.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| **High** | All `image.emails.skechers.com` assets use HTTP | Migrate CDN to HTTPS or update template base URL — images will be blocked or proxied in major clients |
| **High** | `[Test]` in subject line | Strip before production deployment |
| **Medium** | ink1000 open-tracking pixel uses HTTP | Update to HTTPS endpoint or replace with SFMC native open tracking |
| **Medium** | Krux `partner_uid=102541952` appears static | Confirm this is a dynamic merge token (`%%subscriberID%%`) in production; static IDs in DMP sync can cause audience data contamination |
| **Medium** | 3 content images missing alt text | Add descriptive `alt` attributes for screen reader and image-blocked rendering |
| **Low** | SPF/DKIM not confirmed via relay | Verify authentication headers on a live send before production deployment |
| **Low** | UTM params not inspectable through redirect | Spot-check 2–3 destination URLs post-redirect to confirm campaign tagging is intact |
## Recent history

- [[2026-03-31-test-mkg-us-nonpur-u-trend-nonpurch-en-04012026-v2try-the-comfort-everyone-s-tal]] — 6/10 (2026-03-31)
- [[2026-03-31-test-mkg-us-nonpur-u-trend-nonpurch-en-04012026try-the-comfort-everyone-s-talkin]] — 5.5/10 (2026-03-31)
- [[2026-03-31-why-start-with-one-pair-when-you-can-save-with-two]] — 6/10 (2026-03-31)

