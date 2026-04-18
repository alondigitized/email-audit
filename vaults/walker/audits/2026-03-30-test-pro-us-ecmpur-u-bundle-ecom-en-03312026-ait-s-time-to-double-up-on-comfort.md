---
slug: 2026-03-30-test-pro-us-ecmpur-u-bundle-ecom-en-03312026-ait-s-time-to-double-up-on-comfort
type: email
date: 2026-03-30
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_AIt's Time to Double Up on Comfort"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_AIt's Time to Double Up on Comfort
**Score:** 5/10 · **Type:** Email audit · **2026-03-30**
## Executive summary

- A straightforward BOGO 50% off spring sale email with a clean hero and adequate category navigation. The offer is prominent and legible, but the email is thin on product depth and persuasion — it leans heavily on navigation links rather than curated product stories. The "This Just In" lifestyle section adds visual interest mid-scroll but feels disconnected from the bundle offer. Overall, functional but forgettable.
- The offer is clear and the CTA is immediate, but the email does little to earn the click beyond stating the promotion. Missed opportunity to drive deeper engagement with the bundle mechanic.

## What's working

- **Hero offer is unambiguous.** "Spring Sale — Buy One, Get One 50% Off" reads instantly. Large type, strong contrast, dual CTAs (online + in-store) correctly address both channels.
- **Category segmentation is present.** Women's, Men's, and Kids' sections give the email a scaffolded structure that matches how shoppers think.
- **"This Just In" module** breaks the grid monotony with a lifestyle image, providing a visual reset before the secondary nav.
- **Footer utility is complete.** AfterPay, Curbside Pickup, Find a Store, and app download are all visible — solid functional coverage.

## What's weak

- **No product imagery in category sections.** Women's, Men's, and Kids' sections each show a single product image but there's no multi-product grid. Browsers have nothing specific to react to — the email asks them to click before showing them anything compelling.
- **Bundle mechanic is underexplained.** BOGO 50% is stated but there's no visual pairing — no "here's what a bundle looks like" moment. The offer is abstract.
- **"This Just In" module is orphaned.** It appears mid-email without a clear connection to the BOGO offer. It feels like a second, competing campaign dropped in.
- **Secondary nav (Shop Additional Styles)** is a plain text list — Women, Men, Kids, Clothing, New Arrivals, Sale. This adds no visual pull and reads like an afterthought sitemap.
- **Weak subject line leaks into preview.** The preview text renders as a raw URL string, which is a bad first impression in the inbox before the email is even opened.

## Recommendations

- 1. **Add a product pairing visual in the hero section.** Show two shoes side-by-side with a clear "pair these" concept to make the BOGO mechanic tangible and aspirational.
- 2. **Replace text-only secondary nav with small product tiles.** Even 2–3 product thumbnails per category would dramatically increase click surface and relevance.
- 3. **Anchor "This Just In" to the promotion.** Either tie new arrivals explicitly to the BOGO offer ("New this season — now BOGO 50% off") or remove it to keep the narrative focused.
- 4. **Fix the preview text.** The URL-as-preview is a deliverability and UX issue that hurts open rate. Set a meaningful preview string.
- 5. **Add a savings proof point.** "Buy one at $X, get the second at $Y" — even a simple example makes the value feel real and removes mental math friction.
- | Priority | Issue | Action |
- |---|---|---|
- | **Critical** | `[Test]:` subject prefix | Remove before production send |
- | **High** | 17 HTTP image sources | Update all `image.emails.skechers.com` and `ink1000.com` URLs to `https://` |
- | **High** | Return Path pixel broken URL scheme | Prepend `https://` to `pixel.app.returnpath.net/...` |
- | **High** | SPF/DKIM unverifiable | Confirm authentication headers are passing through relay; re-test with authentication logging enabled |
- | **Medium** | 4 images missing alt text | Add descriptive alt text to content images; `alt=""` on pure tracking pixels is acceptable |
- | **Medium** | UTM params unverified | Decrypt or spot-check 2–3 CTA links to confirm UTM tags reach landing pages |
- | **Low** | CAN-SPAM elements unconfirmed | Verify full HTML contains unsubscribe link and physical address |

## Full review
## Executive Summary

A straightforward BOGO 50% off spring sale email with a clean hero and adequate category navigation. The offer is prominent and legible, but the email is thin on product depth and persuasion — it leans heavily on navigation links rather than curated product stories. The "This Just In" lifestyle section adds visual interest mid-scroll but feels disconnected from the bundle offer. Overall, functional but forgettable.

---

## Business Impact Score: 5/10

The offer is clear and the CTA is immediate, but the email does little to earn the click beyond stating the promotion. Missed opportunity to drive deeper engagement with the bundle mechanic.

---

## What's Working

- **Hero offer is unambiguous.** "Spring Sale — Buy One, Get One 50% Off" reads instantly. Large type, strong contrast, dual CTAs (online + in-store) correctly address both channels.
- **Category segmentation is present.** Women's, Men's, and Kids' sections give the email a scaffolded structure that matches how shoppers think.
- **"This Just In" module** breaks the grid monotony with a lifestyle image, providing a visual reset before the secondary nav.
- **Footer utility is complete.** AfterPay, Curbside Pickup, Find a Store, and app download are all visible — solid functional coverage.

---

## What's Weak

- **No product imagery in category sections.** Women's, Men's, and Kids' sections each show a single product image but there's no multi-product grid. Browsers have nothing specific to react to — the email asks them to click before showing them anything compelling.
- **Bundle mechanic is underexplained.** BOGO 50% is stated but there's no visual pairing — no "here's what a bundle looks like" moment. The offer is abstract.
- **"This Just In" module is orphaned.** It appears mid-email without a clear connection to the BOGO offer. It feels like a second, competing campaign dropped in.
- **Secondary nav (Shop Additional Styles)** is a plain text list — Women, Men, Kids, Clothing, New Arrivals, Sale. This adds no visual pull and reads like an afterthought sitemap.
- **Weak subject line leaks into preview.** The preview text renders as a raw URL string, which is a bad first impression in the inbox before the email is even opened.

---

## Recommendations

1. **Add a product pairing visual in the hero section.** Show two shoes side-by-side with a clear "pair these" concept to make the BOGO mechanic tangible and aspirational.
2. **Replace text-only secondary nav with small product tiles.** Even 2–3 product thumbnails per category would dramatically increase click surface and relevance.
3. **Anchor "This Just In" to the promotion.** Either tie new arrivals explicitly to the BOGO offer ("New this season — now BOGO 50% off") or remove it to keep the narrative focused.
4. **Fix the preview text.** The URL-as-preview is a deliverability and UX issue that hurts open rate. Set a meaningful preview string.
5. **Add a savings proof point.** "Buy one at $X, get the second at $Y" — even a simple example makes the value feel real and removes mental math friction.

---

## Bottom Line

The email delivers the offer clearly but stops there. It doesn't show product, doesn't tell a style story, and doesn't make the bundle mechanic concrete. For an ecommerce purchaser segment that already knows the brand, this needs more product surface to drive conversion. As-is, it's a promotional reminder, not a persuasive shopping experience.

---

## Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Spring BOGO 50% off sale, targeting existing ecom purchasers |
| **Hero / primary value prop** | Clean headline, offer clearly stated, dual CTA (Shop Now + Find a Store). No product shown in hero. |
| **Membership / benefits** | None present |
| **Product discoverability** | One image per gender category; no grids, no product names or prices visible |
| **"This Just In" module** | Lifestyle image with "Shop Now" CTA — visually engaging but narratively disconnected |
| **Utility / secondary modules** | AfterPay, Curbside Pickup, Find a Store, App Download — all present and legible |
| **Bugs / friction** | Preview text renders as a raw URL in the from/subject metadata; no visible broken images or rendering errors in the email body itself |

---

## Technical Audit

## Technical Audit — PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_A

---

### 1. Technical Summary

This is a test send (subject prefix `[Test]:` still present) with an 83% QA pass rate. The primary technical risk is pervasive use of HTTP image sources across the email's CDN domain, which modern email clients will block, combined with an unresolvable Return Path inbox monitoring pixel.

---

### 2. Link & Tracking Issues

**Protocol-relative / broken Return Path pixel**
The inbox monitoring pixel is missing a URL scheme entirely:
```
src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499"
```
Without `https://`, this resolves as a relative path and will never fire. Inbox placement data for this send will be incomplete.

**26 click-redirect links skipped by QA**
All CTAs route through `click.emails.skechers.com`. QA could not probe destinations — manual spot-check of final landing URLs is required before production send.

**Krux/DMP beacons present**
Three beacon pixels fire on open (`beacon.krxd.net`), passing `partner_uid` and `campaignid`. These are expected for SFMC audience sync but should be confirmed as intentional for this segment.

---

### 3. Rendering & Accessibility

**HTTP image sources — systemic (17 affected images)**
Every image hosted on `image.emails.skechers.com` uses `http://`. Gmail, Outlook.com, and Apple Mail proxy or block non-HTTPS image loads. Affected assets include the Skechers logo, app store badges, all social icons, and at least two content images:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play badge)
... (13 additional)
```
Also affects the third-party tracking pixel:
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```

**Missing alt text (4 images)**
- `o.gif` (ink1000 tracking pixel) — alt="" acceptable for tracking pixels, but explicit empty string is absent
- `49468f73-...png` — no alt attribute
- `00100b23-...png` — no alt attribute
- `fc08601a-...png` — no alt attribute

Images without alt text are invisible to screen readers and show broken-image icons when images are disabled.

**`[Test]:` subject line prefix not stripped**
`Subject: [Test]: PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_A It's Time to Double Up on Comfort` — this is a test send. The prefix must be removed before production deployment.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens or AMPscript variable references visible in the provided HTML excerpt. Subscriber ID `115584018` and hashed UID are hardcoded into beacon URLs, consistent with a rendered test send rather than a template-level issue.

---

### 5. Compliance

**SPF/DKIM authentication unverifiable**
QA reports: `Authentication-Results header not found — SPF/DKIM status unknown`. Cannot confirm the send passed authentication checks through the AgentMail relay. Risk of spam folder placement if authentication is not properly configured on `emails.skechers.com`.

**CAN-SPAM / unsubscribe**
HTML source is truncated; unsubscribe link and physical mailing address presence could not be confirmed from the provided excerpt. These must be verified in the full source prior to production send.

---

### 6. Email-to-Site Continuity

All destination links route through `click.emails.skechers.com` with encrypted query strings (base64/AES `qs=` parameter). UTM parameter injection cannot be inspected from the encrypted payload. Confirm that final resolved URLs include campaign UTM tags (e.g., `utm_campaign=PRO_US_ECMPUR_U_BUNDLE_ECOM_EN_03312026_A`) and that landing pages are live and match the BOGO offer referenced in the preheader.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Critical** | `[Test]:` subject prefix | Remove before production send |
| **High** | 17 HTTP image sources | Update all `image.emails.skechers.com` and `ink1000.com` URLs to `https://` |
| **High** | Return Path pixel broken URL scheme | Prepend `https://` to `pixel.app.returnpath.net/...` |
| **High** | SPF/DKIM unverifiable | Confirm authentication headers are passing through relay; re-test with authentication logging enabled |
| **Medium** | 4 images missing alt text | Add descriptive alt text to content images; `alt=""` on pure tracking pixels is acceptable |
| **Medium** | UTM params unverified | Decrypt or spot-check 2–3 CTA links to confirm UTM tags reach landing pages |
| **Low** | CAN-SPAM elements unconfirmed | Verify full HTML contains unsubscribe link and physical address |
## Recent history

- [[2026-03-30-test-pro-us-ecmpur-u-bundle-ecom-en-03312026-bit-s-time-to-double-up-on-comfort]] — 6/10 (2026-03-30)
- [[2026-03-30-add-a-pop-of-color-to-your-closet]] — 6/10 (2026-03-30)
- [[2026-03-30-did-you-forget-something]] — 6/10 (2026-03-30)

