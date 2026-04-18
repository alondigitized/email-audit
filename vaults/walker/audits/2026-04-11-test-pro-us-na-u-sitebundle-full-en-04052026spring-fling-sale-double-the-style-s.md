---
slug: 2026-04-11-test-pro-us-na-u-sitebundle-full-en-04052026spring-fling-sale-double-the-style-s
type: email
date: 2026-04-03
persona: walker
score: "3/10"
sender: SKECHERS
subject: "[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04052026Spring Fling Sale = Double the Style & Savings"
tags: [email, score-3, sender/skechers]
---
# [Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04052026Spring Fling Sale = Double the Style & Savings
**Score:** 3/10 · **Type:** Email audit · **2026-04-03**
## Executive summary

- A competent but uninspired site-bundle blast. The BOGO 50% off hero is the right lead, and the gender/age segmentation gives the email a clear skeleton. However, this email has a critical deployment error that would undermine every metric: **the subject line shipped with a `[Test]:` prefix and a raw internal campaign code**, and the **preview text is a broken URL string** — both visible to the recipient before they even open. Inside, the email is overly long, each category gets only one product, and the Spring Fling theme evaporates after the hero. On its own creative merits it's a 5/10; with the subject/preview defects it's unsendable as-is.
- *(Score reflects the render as a recipient would actually experience it, including the subject line and preview text defects)*

## What's working

- **Hero offer is clear.** "BUY 1 GET ONE 50% OFF" reads immediately above the product image. The value prop is front-loaded.
- **Gender/age segmentation is logical.** Women → Men → Girls → Boys flows naturally and gives each segment a visual anchor point.
- **Utility footer is complete.** App download, curbside pickup, store finder, and social links are all present — a solid closing suite.
- **Category nav strip** (Women, Men, Kids, Clothing, New Arrivals, Sale) provides a useful escape hatch for browsers who don't identify with the editorial segments.
- **Clean layout.** No overlapping elements, broken images, or rendering glitches visible in the render.

## What's weak

- **Subject line is broken.** "`[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04052026Spring Fling Sale…`" — a test flag and internal campaign slug are fully visible. This destroys open rates and brand trust.
- **Preview text is a raw URL.** The recipient sees `Skechers(R) https://view.emails.skechers.com/?vawpToken=EYP4NGT6…` — a critical missed opportunity and a credibility signal that something went wrong.
- **One product per segment is too thin.** A shoes brand with this catalog depth showing a single SKU per gender category wastes the channel. There is no discovery.
- **No urgency or expiry date visible anywhere.** "Spring Fling Sale" implies time-sensitivity, but nothing in the render communicates when the offer ends.
- **"Spring Fling" theming doesn't carry through.** The hero has seasonal imagery (sandals, warm tones), but the Men's, Girls', and Boys' sections feel generic — no seasonal copy, no thematic consistency.
- **No price anchoring.** BOGO 50% off is stated but there's no "starting at $X" or crossed-out price to make the value concrete.
- **Email is long relative to payload.** Four single-product rows plus a nav strip is a lot of scroll for limited product discovery.

## Recommendations

- 1. **Do not send (or resend corrected) immediately.** The `[Test]:` subject prefix and the broken preview text are disqualifying. Resend with a clean subject and preview copy before any other optimization matters.
- 2. **Write preview text.** Replace the URL with something like: *"Buy one, get one 50% off — shop Women's, Men's, and Kids' styles now."*
- 3. **Add 2–3 products per segment** minimum, or introduce a "bestsellers" horizontal scroll row. One SKU per gender is not merchandising — it's a placeholder.
- 4. **Add offer deadline.** Even "Ends Sunday" is enough to drive conversion. Visible urgency is the cheapest lift available.
- 5. **Carry the Spring Fling theme downstream.** Give Men's and Kids' sections seasonal copy ("spring-ready sneakers," "sandal season starts here") so the editorial voice doesn't evaporate after row one.
- 6. **Anchor the price.** Add "from $XX" or a price-off example so the BOGO offer becomes tangible, not abstract.
- | Priority | Action |
- |---|---|
- | **P0** | Remove `[Test]:` prefix and fix subject-line concatenation before any production send |
- | **P0** | Upgrade all `http://image.emails.skechers.com` `src` attributes to `https://` — affects 13 assets including the logo |
- | **P1** | Upgrade `http://www.ink1000.com` pixel to HTTPS or replace with an HTTPS-equivalent endpoint |
- | **P1** | Confirm `Authentication-Results` (SPF pass, DKIM pass) are present in production relay headers |
- | **P2** | Add descriptive `alt` text to the 3 content images missing it (`49468f73`, `00100b23`, `fc08601a`) |
- | **P2** | Manually resolve 2–3 sample click-redirect URLs to verify UTM parameters survive the redirect chain |
- | **P3** | Change `* { -webkit-text-size-adjust: none }` to `* { -webkit-text-size-adjust: 100% }` to preserve iOS legibility |
- | **P3** | Verify CAN-SPAM unsubscribe link and physical address are present in the full HTML |

## Full review
### 1. Executive Summary

A competent but uninspired site-bundle blast. The BOGO 50% off hero is the right lead, and the gender/age segmentation gives the email a clear skeleton. However, this email has a critical deployment error that would undermine every metric: **the subject line shipped with a `[Test]:` prefix and a raw internal campaign code**, and the **preview text is a broken URL string** — both visible to the recipient before they even open. Inside, the email is overly long, each category gets only one product, and the Spring Fling theme evaporates after the hero. On its own creative merits it's a 5/10; with the subject/preview defects it's unsendable as-is.

---

### 2. Business Impact Score: **3 / 10**

*(Score reflects the render as a recipient would actually experience it, including the subject line and preview text defects)*

---

### 3. What's Working

- **Hero offer is clear.** "BUY 1 GET ONE 50% OFF" reads immediately above the product image. The value prop is front-loaded.
- **Gender/age segmentation is logical.** Women → Men → Girls → Boys flows naturally and gives each segment a visual anchor point.
- **Utility footer is complete.** App download, curbside pickup, store finder, and social links are all present — a solid closing suite.
- **Category nav strip** (Women, Men, Kids, Clothing, New Arrivals, Sale) provides a useful escape hatch for browsers who don't identify with the editorial segments.
- **Clean layout.** No overlapping elements, broken images, or rendering glitches visible in the render.

---

### 4. What's Weak

- **Subject line is broken.** "`[Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04052026Spring Fling Sale…`" — a test flag and internal campaign slug are fully visible. This destroys open rates and brand trust.
- **Preview text is a raw URL.** The recipient sees `Skechers(R) https://view.emails.skechers.com/?vawpToken=EYP4NGT6…` — a critical missed opportunity and a credibility signal that something went wrong.
- **One product per segment is too thin.** A shoes brand with this catalog depth showing a single SKU per gender category wastes the channel. There is no discovery.
- **No urgency or expiry date visible anywhere.** "Spring Fling Sale" implies time-sensitivity, but nothing in the render communicates when the offer ends.
- **"Spring Fling" theming doesn't carry through.** The hero has seasonal imagery (sandals, warm tones), but the Men's, Girls', and Boys' sections feel generic — no seasonal copy, no thematic consistency.
- **No price anchoring.** BOGO 50% off is stated but there's no "starting at $X" or crossed-out price to make the value concrete.
- **Email is long relative to payload.** Four single-product rows plus a nav strip is a lot of scroll for limited product discovery.

---

### 5. Recommendations

1. **Do not send (or resend corrected) immediately.** The `[Test]:` subject prefix and the broken preview text are disqualifying. Resend with a clean subject and preview copy before any other optimization matters.
2. **Write preview text.** Replace the URL with something like: *"Buy one, get one 50% off — shop Women's, Men's, and Kids' styles now."*
3. **Add 2–3 products per segment** minimum, or introduce a "bestsellers" horizontal scroll row. One SKU per gender is not merchandising — it's a placeholder.
4. **Add offer deadline.** Even "Ends Sunday" is enough to drive conversion. Visible urgency is the cheapest lift available.
5. **Carry the Spring Fling theme downstream.** Give Men's and Kids' sections seasonal copy ("spring-ready sneakers," "sandal season starts here") so the editorial voice doesn't evaporate after row one.
6. **Anchor the price.** Add "from $XX" or a price-off example so the BOGO offer becomes tangible, not abstract.

---

### 6. Bottom Line

The bones are fine — the BOGO offer is prominent, the layout is clean, and the utility footer is solid. But this email cannot go to customers in its current state: the subject line and preview text defects alone would crater performance and signal a QA failure to anyone who sees it. Fix those first, then invest in deeper product merchandising and seasonal copy consistency to make this a genuinely high-performing spring send.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Spring seasonal sale email promoting BOGO 50% off sitewide, segmented by gender/age |
| **Hero / primary value prop** | "BUY 1 GET ONE 50% OFF" over a sandal/slide lifestyle image; SHOP NOW CTA present; offer is clear but lacks price anchor or deadline |
| **Membership / benefits** | None visible — no loyalty program callout, no member-exclusive framing |
| **Product discovery / recommendations** | Four single-product editorial blocks (Women, Men, Girls, Boys); one SKU each; no carousels, no "you may also like," minimal discovery surface |
| **Utility / secondary modules** | Category nav strip (Women/Men/Kids/Clothing/New Arrivals/Sale); Download the App; Curbside Pickup; Shop Skechers Now; Find a Store; Follow Us — all present and functional |
| **Bugs / friction / clarity issues** | Subject line shows `[Test]:` prefix + raw internal campaign code; preview text is a broken URL string — both visible before open |

---

## Technical Audit

## Technical Audit — SKECHERS Spring Fling Sale (PRO_US_NA_U_SITEBUNDLE_FULL_EN_04052026)

---

### 1. Technical Summary

The email has a pervasive mixed-content problem: all `image.emails.skechers.com` assets and one third-party pixel are served over HTTP, risking suppression in modern clients. SPF/DKIM authentication status could not be verified via the relay headers, which is a deliverability risk.

---

### 2. Link & Tracking Issues

**[WARN] 26 click-tracking links not probed**
All CTAs route through `click.emails.skechers.com/?qs=<encrypted-payload>`. The encrypted `qs` parameter makes destination URL inspection impossible without live resolution. QA tooling correctly skipped HTTP probing; manual spot-check of a sample link is recommended to confirm live destinations.

**[WARN] Third-party tracking pixel over HTTP**
```
src: http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
     ?mi_u=9012945763&mi_ecmp=PRO_US_NA_U_SITEBUNDLE_FULL_EN_04052026
```
Served over HTTP. Gmail and Outlook proxy/block non-HTTPS resources; this open/impression signal may fail silently.

**[INFO] Return Path seed pixel scheme unconfirmed**
```
src: pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499
```
No scheme prefix in the source snippet — confirm this is `https://` and not protocol-relative or HTTP.

**[INFO] Krxd user-match beacons present**
Two `beacon.krxd.net` pixels perform subscriber identity resolution against a `sha256`-hashed UID. Confirm this is covered by your privacy policy and consent framework.

---

### 3. Rendering & Accessibility

**[FAIL] All `image.emails.skechers.com` assets served over HTTP — 13 images affected**

Examples:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-4651-4af3-bea2-61d1ae5db486.png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-eec2-471a-898d-0ca1cea7e115.png  (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-4b38-483d-8459-cf54186a0b9f.png  (Google Play)
... and 9 others (social icons, footer images)
```
Gmail proxies HTTP images through its own cache but strips query strings; Outlook 2016+ blocks mixed content entirely. The Skechers CDN almost certainly supports HTTPS — this appears to be a template configuration error.

**[WARN] Missing `alt` text on 4 images**

| Image | `src` |
|---|---|
| `o.gif` (ink1000 pixel) | `http://www.ink1000.com/p/up/...` |
| `49468f73-...png` | `http://image.emails.skechers.com/.../m/11/49468f73...` |
| `00100b23-...png` | `http://image.emails.skechers.com/.../m/11/00100b23...` |
| `fc08601a-...png` | `http://image.emails.skechers.com/.../m/11/fc08601a...` |

Tracking/spacer GIFs should have `alt=""` (already empty is fine). Content images without `alt` text fail WCAG 1.1.1 and render blank in image-blocking clients.

**[INFO] `-webkit-text-size-adjust: none` applied globally**
```css
* { -webkit-text-size-adjust: none; }
```
This prevents iOS from auto-sizing small text, which can hurt legibility. The less-aggressive `100%` value is preferred.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens detected in the visible HTML (no `%%TOKEN%%`, `{{token}}`, or `[FNAME]`-style placeholders found unrendered). The preheader text "Take 50% off your 2nd Pair or 20% off 1 Item" is hardcoded — no dynamic personalization attempted for this send, which is expected for a broadcast promotional.

---

### 5. Compliance

**[FAIL] Subject line contains `[Test]:` prefix**
```
Subject: [Test]: PRO_US_NA_U_SITEBUNDLE_FULL_EN_04052026Spring Fling Sale = Double the Style & Savings
```
A test-mode prefix is live in the subject line. This must be stripped before production deployment. The campaign ID (`PRO_US_NA_U_SITEBUNDLE_FULL_EN_04052026`) is also concatenated directly into the subject with no space before "Spring" — a templating artifact that should be removed.

**[WARN] SPF/DKIM authentication status unverified**
The QA relay did not surface `Authentication-Results` headers. Confirm that `emails.skechers.com` is covered by a valid SPF record and DKIM signature. Without this, inbox placement at Gmail and Yahoo will be impaired given their 2024 bulk sender requirements.

**[INFO] Unsubscribe and physical address not visible in truncated source**
CAN-SPAM mandates a functional unsubscribe mechanism and a valid physical postal address. These are standard in SKECHERS templates but could not be confirmed from the provided HTML excerpt — verify they are present in the full render.

---

### 6. Email-to-Site Continuity

All links are opaque encrypted redirects through `click.emails.skechers.com` — UTM parameters on destination landing pages cannot be confirmed from the source alone. The campaign string `PRO_US_NA_U_SITEBUNDLE_FULL_EN_04052026` is correctly embedded in the Krxd impression pixel and the ink1000 pixel's `mi_ecmp` parameter, indicating campaign-level attribution is wired. Recommend resolving one or two sample click-tracking URLs manually to verify:

1. UTM params (`utm_source`, `utm_medium`, `utm_campaign`) are appended to the Skechers landing page URL after redirect.
2. The destination page is the intended Spring Fling sale landing page, not the homepage or a 404.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Remove `[Test]:` prefix and fix subject-line concatenation before any production send |
| **P0** | Upgrade all `http://image.emails.skechers.com` `src` attributes to `https://` — affects 13 assets including the logo |
| **P1** | Upgrade `http://www.ink1000.com` pixel to HTTPS or replace with an HTTPS-equivalent endpoint |
| **P1** | Confirm `Authentication-Results` (SPF pass, DKIM pass) are present in production relay headers |
| **P2** | Add descriptive `alt` text to the 3 content images missing it (`49468f73`, `00100b23`, `fc08601a`) |
| **P2** | Manually resolve 2–3 sample click-redirect URLs to verify UTM parameters survive the redirect chain |
| **P3** | Change `* { -webkit-text-size-adjust: none }` to `* { -webkit-text-size-adjust: 100% }` to preserve iOS legibility |
| **P3** | Verify CAN-SPAM unsubscribe link and physical address are present in the full HTML |
## Recent history

- [[2026-04-03-test-pro-us-ecmpurl24-u-sitebundle-ecom-en-04052026spring-fling-sale-double-the-]] — 5/10 (2026-04-03)
- [[2026-04-03-test-pro-us-nonpur180-u-sitebundle-nonpurch-en-04052026take-your-pick-during-the]] — 5/10 (2026-04-03)
- [[2026-04-03-discover-the-support-you-ve-been-looking-for]] — 5/10 (2026-04-03)

