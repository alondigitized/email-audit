---
slug: 2026-03-31-test-mkg-us-retpur-u-trend-retail-en-04012026new-season-new-styles
type: email
date: 2026-03-31
persona: walker
score: "6/10"
sender: SKECHERS
subject: "[Test]: MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026New Season, New Styles"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026New Season, New Styles
**Score:** 6/10 · **Type:** Email audit · **2026-03-31**
## Executive summary

- A clean, trend-driven email targeting retail purchasers with a seasonal "Trend Report" hook and four category modules. The visual hierarchy is solid and the product photography is appealing, but the hero message is thin, CTA repetition is mechanical, and the mid-email modules feel interchangeable without enough editorial differentiation. Works as a functional send but misses the opportunity to feel curated or urgent.

## What's working

- **Hero photography is strong.** The lifestyle collage of multiple shoe styles creates a "trend moment" feel that matches the subject line promise.
- **Promo visibility.** The "50% OFF" badge in the top-left corner reads immediately and adds click incentive before the hero copy lands.
- **Module structure is logical.** Hands-Free Slip-Ins → Street Style → Color → Best Sellers is a reasonable category flow — it segues from functional to aesthetic to broad.
- **Best Sellers module** adds a list-format navigation block at the bottom (Men, Women, Kids, Clothing, etc.) that supports users who want to browse by category rather than product.
- **Color palette** feels seasonally appropriate — pinks, nudes, and light blues in the product shots reinforce the "new season" messaging.

## What's weak

- **Hero copy is generic.** "Trend Report" with no specific hook ("what's trending," "which styles," "why now") offers no reason to read further. The 50% off badge does more work than the headline.
- **Every CTA says "SHOP NOW."** Four consecutive "SHOP NOW" buttons create no differentiation. A user scanning vertically gets zero help understanding what each module offers differently.
- **Street Style module is visually thin.** Three sandal/casual styles on a bare background feel low-effort compared to the lifestyle hero. The category name "Street Style" isn't specific enough to earn its own module.
- **Color module headline is just "COLOR."** This is a descriptor, not a value proposition. It doesn't tell the recipient why they should care about color right now.
- **No personalization signal visible.** This is a retail purchaser segment — there's no acknowledgment of past purchases, loyalty status, or "based on what you've bought" framing that would justify the targeting.
- **Preview text is broken.** The visible preview in the email metadata shows raw URL strings and token fragments — recipients will see this junk text in their inbox preview pane, which undermines first impressions before the email opens.

## Recommendations

- 1. **Differentiate CTAs per module.** Replace generic "SHOP NOW" with module-specific labels: "Shop Slip-Ins," "See Street Styles," "Explore Colors," "Shop Best Sellers." One-click context = higher conversion.
- 2. **Give the Color module a benefit hook.** "New Spring Colors" or "The Colors Selling Out First" turns a descriptor into a reason to click.
- 3. **Anchor the hero to the discount.** Reframe the headline to connect the trend story to the 50% off offer — e.g., "Trending Now — Up to 50% Off." The offer is the strongest asset; let it lead.
- 4. **Fix the preview text.** The preview should be a clean marketing line, not a URL dump. This is an inbox-level conversion issue — many recipients will judge the email before opening it.
- 5. **Add a retail purchaser signal.** Even a subtle "back in stores and online" or "your store favorites, now online" nod would make the segment targeting feel intentional rather than accidental.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | High | All `image.emails.skechers.com` assets served over HTTP | Update SFMC content block image URLs to `https://` |
- | High | Ink1000 pixel on HTTP | Update to `https://www.ink1000.com/...` |
- | High | Return Path pixel — no protocol scheme | Add `https://` prefix to `pixel.app.returnpath.net/pixel.gif` URL |
- | High | Subject line has raw campaign code concatenated before display text | Insert a space/delimiter between campaign ID and subject copy in template |
- | Medium | SPF/DKIM not confirmed via relay | Verify authentication-results headers on a seeded test send before production |
- | Medium | 3 footer images missing alt text | Add descriptive alt attributes to the three unnamed `/m/11/` PNG assets |
- | Medium | `[Test]:` prefix — confirm audience scope | Validate send was to seed list only; do not promote to production list with this subject |
- | Low | `-webkit-text-size-adjust: none` globally | Change to `100%` to preserve legibility on iOS |
- | Low | UTM passthrough on CTAs | Manually probe 2–3 representative click links to confirm `utm_source`, `utm_medium`, `utm_campaign` land correctly on skechers.com |

## Full review
## 1. Executive Summary

A clean, trend-driven email targeting retail purchasers with a seasonal "Trend Report" hook and four category modules. The visual hierarchy is solid and the product photography is appealing, but the hero message is thin, CTA repetition is mechanical, and the mid-email modules feel interchangeable without enough editorial differentiation. Works as a functional send but misses the opportunity to feel curated or urgent.

---

## 2. Business Impact Score: 6/10

---

## 3. What's Working

- **Hero photography is strong.** The lifestyle collage of multiple shoe styles creates a "trend moment" feel that matches the subject line promise.
- **Promo visibility.** The "50% OFF" badge in the top-left corner reads immediately and adds click incentive before the hero copy lands.
- **Module structure is logical.** Hands-Free Slip-Ins → Street Style → Color → Best Sellers is a reasonable category flow — it segues from functional to aesthetic to broad.
- **Best Sellers module** adds a list-format navigation block at the bottom (Men, Women, Kids, Clothing, etc.) that supports users who want to browse by category rather than product.
- **Color palette** feels seasonally appropriate — pinks, nudes, and light blues in the product shots reinforce the "new season" messaging.

---

## 4. What's Weak

- **Hero copy is generic.** "Trend Report" with no specific hook ("what's trending," "which styles," "why now") offers no reason to read further. The 50% off badge does more work than the headline.
- **Every CTA says "SHOP NOW."** Four consecutive "SHOP NOW" buttons create no differentiation. A user scanning vertically gets zero help understanding what each module offers differently.
- **Street Style module is visually thin.** Three sandal/casual styles on a bare background feel low-effort compared to the lifestyle hero. The category name "Street Style" isn't specific enough to earn its own module.
- **Color module headline is just "COLOR."** This is a descriptor, not a value proposition. It doesn't tell the recipient why they should care about color right now.
- **No personalization signal visible.** This is a retail purchaser segment — there's no acknowledgment of past purchases, loyalty status, or "based on what you've bought" framing that would justify the targeting.
- **Preview text is broken.** The visible preview in the email metadata shows raw URL strings and token fragments — recipients will see this junk text in their inbox preview pane, which undermines first impressions before the email opens.

---

## 5. Recommendations

1. **Differentiate CTAs per module.** Replace generic "SHOP NOW" with module-specific labels: "Shop Slip-Ins," "See Street Styles," "Explore Colors," "Shop Best Sellers." One-click context = higher conversion.
2. **Give the Color module a benefit hook.** "New Spring Colors" or "The Colors Selling Out First" turns a descriptor into a reason to click.
3. **Anchor the hero to the discount.** Reframe the headline to connect the trend story to the 50% off offer — e.g., "Trending Now — Up to 50% Off." The offer is the strongest asset; let it lead.
4. **Fix the preview text.** The preview should be a clean marketing line, not a URL dump. This is an inbox-level conversion issue — many recipients will judge the email before opening it.
5. **Add a retail purchaser signal.** Even a subtle "back in stores and online" or "your store favorites, now online" nod would make the segment targeting feel intentional rather than accidental.

---

## 6. Bottom Line

Serviceable but not sharp. The email gets the basics right — offer, product variety, clean layout — but reads as assembled rather than crafted. The preview text issue is the most urgent fix because it damages open rates upstream of all other optimizations. After that, CTA differentiation and hero copy specificity would move the needle most.

---

## 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Seasonal trend email targeting retail purchasers; promotes multiple footwear categories with a 50% off incentive |
| **Hero / primary value prop** | "Trend Report" headline over lifestyle product collage; 50% OFF badge top-left; "SHOP NOW" CTA; discount is the real hook |
| **Membership / benefits** | None visible — no loyalty tier, adiClub equivalent, or reward callout present |
| **Product discoverability** | Four category modules: Hands-Free Slip-Ins (lifestyle photo), Street Style (3 product tiles), Color (3 product tiles), Best Sellers (list + lifestyle photo) |
| **Utility / secondary modules** | Bottom navigation bar with Men / Women / Kids / Clothing / Sale text links provides category fallback |
| **Bugs / friction** | Preview text in email metadata contains raw URL strings and token fragments — visible before open; all four CTAs are identically labeled "SHOP NOW" with no module context |

---

## Technical Audit

## Technical Audit — Skechers MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026

---

### 1. Technical Summary

A retail-purchaser trend email built on Salesforce Marketing Cloud with standard Krux/DMP audience sync pixels. The dominant technical risk is pervasive use of HTTP (non-HTTPS) image sources across the email's own CDN (`image.emails.skechers.com`), which will trigger mixed-content blocking in hardened clients; a secondary concern is an unresolvable Return Path pixel URL and unverified sending authentication.

---

### 2. Link & Tracking Issues

**Return Path pixel — missing protocol scheme**
```
pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0...
```
No `http://` or `https://` prefix. This is a relative-looking URL with a bare hostname — many email clients will either drop it or fail to load it silently, breaking inbox placement monitoring.

**Ink1000 open pixel — HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8091927189&mi_ecmp=MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026
```
Served over HTTP. Email clients with HTTPS enforcement (e.g., Apple Mail on iOS 14+, Gmail) may block this pixel, causing open tracking undercounting.

**26 click-tracking links — unprobed**
All CTA links route through `click.emails.skechers.com` with encrypted `?qs=` payloads. UTM parameter passthrough to landing pages cannot be confirmed from source; see section 6.

**Krux/Salesforce DMP beacons — expected**
Three `beacon.krxd.net` pixels present (user match × 2, impression × 1). Audience sync is consistent with a retail-purchaser segment. No anomalies.

---

### 3. Rendering & Accessibility

**HTTP images — 14 assets on non-HTTPS CDN (high impact)**

All `image.emails.skechers.com` assets are served over HTTP:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png   (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/07cb60b5-...png  (AfterPay)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/b782e0aa-...png  (Instagram)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/d76a5487-...png  (Twitter)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/a5c4cae0-...png  (Facebook)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/573ab181-...png  (Pinterest)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/8c5738fc-...png  (YouTube)
... + 4 additional assets
```
Apple Mail Privacy Protection, iOS Mail, and Outlook 2019+ in strict mode all block or proxy HTTP image requests. The Skechers logo and all social/payment icons are at risk of rendering broken.

**Missing alt text — 3 non-trivial images**
```
49468f73-4651-4af3-bea2-61d1ae5db486.png
00100b23-0afa-4715-a8cd-23bb46f9d2b2.png
fc08601a-fcce-4c96-8b90-39e5a55d6c05.png
```
These are footer-area images (based on URL path `/m/11/`). No alt fallback text means images-off clients see blank content with no context.

**`-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; }
```
Blanket `none` (vs. `100%`) suppresses iOS's automatic small-text legibility scaling across all elements, including legal copy. Prefer `100%`.

**Responsive show/hide CSS — no issues flagged**
Mobile/desktop switching via `.mobile-content`/`.desktop-content` with `@media screen and (min-width: 768px)` is correctly structured.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens or placeholder strings (e.g., `%%`, `{{`, `[[`) visible in the truncated source. Campaign ID is consistently populated across all three tracking pixels:
```
MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026
```

**`[Test]:` prefix in subject line**
```
Subject: [Test]: MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026New Season, New Styles
```
Test flag is present. Additionally, the campaign code is concatenated directly into the subject with no space before "New Season" — if this reaches production with the test flag stripped, the subject would be malformed (`MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026New Season...`). The subject line template itself may have a missing delimiter.

---

### 5. Compliance

**SPF/DKIM authentication — unverified**
```
[WARN] Authentication-Results header not found: Expected via AgentMail relay — SPF/DKIM status unknown
```
Cannot confirm DMARC alignment. Sending domain is `emails.skechers.com`; authentication chain must be verified at relay level before production send.

**CAN-SPAM / unsubscribe**
HTML source is truncated; footer content not visible for direct inspection. Standard Skechers SFMC deployments include a footer with physical address and list-unsubscribe. This should be confirmed against the full render — no issue confirmed, but also not confirmable from available source.

**`[Test]:` in subject on live relay**
If this message was relayed through the production sending infrastructure with the test prefix in-subject, it may have been delivered to real subscribers. Confirm send audience was a seed/test list only.

---

### 6. Email-to-Site Continuity

**UTM passthrough — unverifiable from source**
All 26 CTAs use `click.emails.skechers.com/?qs=<encrypted_blob>` — destination URLs and UTM parameters are not inspectable without following redirects. The 26 links were skipped by the HTTP probe.

**Campaign ID consistency — confirmed**
`MKG_US_RETPUR_U_TREND_RETAIL_EN_04012026` appears in:
- Krux impression pixel (`campaignid=` param)
- Ink1000 open pixel (`mi_ecmp=` param)

This indicates analytics stitching is in place at the pixel level. Downstream UTM alignment on click destinations requires redirect-following verification.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| High | All `image.emails.skechers.com` assets served over HTTP | Update SFMC content block image URLs to `https://` |
| High | Ink1000 pixel on HTTP | Update to `https://www.ink1000.com/...` |
| High | Return Path pixel — no protocol scheme | Add `https://` prefix to `pixel.app.returnpath.net/pixel.gif` URL |
| High | Subject line has raw campaign code concatenated before display text | Insert a space/delimiter between campaign ID and subject copy in template |
| Medium | SPF/DKIM not confirmed via relay | Verify authentication-results headers on a seeded test send before production |
| Medium | 3 footer images missing alt text | Add descriptive alt attributes to the three unnamed `/m/11/` PNG assets |
| Medium | `[Test]:` prefix — confirm audience scope | Validate send was to seed list only; do not promote to production list with this subject |
| Low | `-webkit-text-size-adjust: none` globally | Change to `100%` to preserve legibility on iOS |
| Low | UTM passthrough on CTAs | Manually probe 2–3 representative click links to confirm `utm_source`, `utm_medium`, `utm_campaign` land correctly on skechers.com |
## Recent history

- [[2026-03-31-test-mkg-us-ecmpur-u-trend-ecom-en-04012026get-ahead-of-this-season-s-trends]] — 6/10 (2026-03-31)
- [[2026-03-31-test-mkg-us-nonpur-u-trend-nonpurch-en-04012026-v2try-the-comfort-everyone-s-tal]] — 6/10 (2026-03-31)
- [[2026-03-31-test-mkg-us-nonpur-u-trend-nonpurch-en-04012026try-the-comfort-everyone-s-talkin]] — 5.5/10 (2026-03-31)

