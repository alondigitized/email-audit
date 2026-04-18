---
slug: 2026-03-29-last-day-to-redeem-your-voucher
type: email
date: 2026-03-23
persona: walker
score: "5/10"
sender: adidas
subject: ⏳ Last day to redeem your voucher
tags: [email, score-5, sender/adidas]
---
# ⏳ Last day to redeem your voucher
**Score:** 5/10 · **Type:** Email audit · **2026-03-23**
## Executive summary

- A transactional urgency email from adidas adiClub that does the right things structurally — clear voucher callout, product recommendations, a secondary engagement module — but is undermined by a glaring character encoding bug in the single most important line of the email. The broken apostrophe in "HEREÂ€™S 15% OFF" appears directly in the hero voucher section and immediately erodes trust. Everything else is competent but unremarkable.
- The broken encoding bug is a conversion killer. The email's entire job is to get the recipient to redeem a voucher — and the one line that should inspire confidence ("Here's your 15% off") is visually garbled. That single issue drops this from a 7 to a 5.

## What's working

- **Urgency framing is tight.** Subject line (⏳ Last day), preheader, and body copy all reinforce the 24-hour expiry without being aggressive or misleading.
- **Product module is appropriate.** Four personalized shoe picks appear above the voucher, giving the recipient something to spend the discount on immediately. The sequencing (products → voucher → redeem) is sensible.
- **Voucher block is visually distinct.** The voucher code and CTA ("Redeem Online") are clearly separated from surrounding content. The layout makes it easy to find.
- **App download module is low-friction.** Placed near the bottom, it doesn't compete with the primary CTA.
- **Clean footer.** Social links, legal copy, and unsubscribe are all present and readable.

## What's weak

- **Critical encoding bug in the voucher headline.** "HEREÂ€™S 15% OFF" is visibly broken. This is the first thing the eye lands on in the voucher section — exactly the wrong place to have a rendering failure.
- **Product tiles are small and low-information.** Four shoes are shown, but product names and prices are not clearly legible at this render size. The "selected with you in mind" copy is generic.
- **Profile completion module feels tacked on.** Offering 50 points to complete a profile inside a "last day to redeem your voucher" email dilutes the urgency. It's a separate campaign objective competing with the primary one.
- **No price anchoring on the voucher.** There's no "save $X on a $Y purchase" framing — just "15% off." Showing a sample product price + discount amount would make the offer feel more concrete.
- **The voucher code itself is not prominently displayed.** The code appears to be shown but is not formatted in a way that's immediately copy-able or visually dominant.

## Recommendations

- 1. **Fix the encoding bug immediately.** "HEREÂ€™S" should render as "HERE'S." This is blocking and needs a re-send or suppression depending on volume already delivered.
- 2. **Remove or defer the profile module.** This is a transactional urgency email — a secondary acquisition ask dilutes the exit path. Move it to a post-redemption or standalone campaign.
- 3. **Make the voucher code scannable.** Format it in a large, monospaced, high-contrast block — visually it should feel like a ticket or coupon, not a paragraph element.
- 4. **Add price context to the product tiles.** Even just "From $XX" helps the recipient calculate their savings and increases click intent.
- 5. **Tighten the hero copy.** "We wanted to send a quick reminder" is passive. Replace with something like "Your 15% off expires today — here's what we picked for you."
- | Priority | Issue | Action |
- |---|---|---|
- | **P0** | Staging CDN URLs in production send | Replace all `image.staging.link.adidas.com` with `image.link.adidas.com` before any resend |
- | **P0** | Malformed preferences/unsubscribe URL | Fix SFMC token URL-encoding on `tkn=` parameter — space in token breaks the link |
- | **P1** | Font S3 bucket returns 403 | Restore public-read ACL on `s3-eu-west-1.amazonaws.com/adidas-adl/` font assets or re-host fonts |
- | **P1** | 2 HTTP image URLs | Upgrade `http://image.link.adidas.com/...` sources to HTTPS |
- | **P1** | SPF/DKIM not confirmed | Verify authentication headers through send pipeline; confirm `us-news.adidas.com` is in SPF record |
- | **P2** | 14 images missing alt text | Add descriptive `alt=""` (or explicit `alt=""` for decorative) to all `<img>` tags |
- | **P2** | Plain-text body is 85% URLs | Regenerate plain-text from content copy, not raw HTML serialization |

## Full review
### 1. Executive Summary

A transactional urgency email from adidas adiClub that does the right things structurally — clear voucher callout, product recommendations, a secondary engagement module — but is undermined by a glaring character encoding bug in the single most important line of the email. The broken apostrophe in "HEREÂ€™S 15% OFF" appears directly in the hero voucher section and immediately erodes trust. Everything else is competent but unremarkable.

---

### 2. Business Impact Score: **5 / 10**

The broken encoding bug is a conversion killer. The email's entire job is to get the recipient to redeem a voucher — and the one line that should inspire confidence ("Here's your 15% off") is visually garbled. That single issue drops this from a 7 to a 5.

---

### 3. What's Working

- **Urgency framing is tight.** Subject line (⏳ Last day), preheader, and body copy all reinforce the 24-hour expiry without being aggressive or misleading.
- **Product module is appropriate.** Four personalized shoe picks appear above the voucher, giving the recipient something to spend the discount on immediately. The sequencing (products → voucher → redeem) is sensible.
- **Voucher block is visually distinct.** The voucher code and CTA ("Redeem Online") are clearly separated from surrounding content. The layout makes it easy to find.
- **App download module is low-friction.** Placed near the bottom, it doesn't compete with the primary CTA.
- **Clean footer.** Social links, legal copy, and unsubscribe are all present and readable.

---

### 4. What's Weak

- **Critical encoding bug in the voucher headline.** "HEREÂ€™S 15% OFF" is visibly broken. This is the first thing the eye lands on in the voucher section — exactly the wrong place to have a rendering failure.
- **Product tiles are small and low-information.** Four shoes are shown, but product names and prices are not clearly legible at this render size. The "selected with you in mind" copy is generic.
- **Profile completion module feels tacked on.** Offering 50 points to complete a profile inside a "last day to redeem your voucher" email dilutes the urgency. It's a separate campaign objective competing with the primary one.
- **No price anchoring on the voucher.** There's no "save $X on a $Y purchase" framing — just "15% off." Showing a sample product price + discount amount would make the offer feel more concrete.
- **The voucher code itself is not prominently displayed.** The code appears to be shown but is not formatted in a way that's immediately copy-able or visually dominant.

---

### 5. Recommendations

1. **Fix the encoding bug immediately.** "HEREÂ€™S" should render as "HERE'S." This is blocking and needs a re-send or suppression depending on volume already delivered.
2. **Remove or defer the profile module.** This is a transactional urgency email — a secondary acquisition ask dilutes the exit path. Move it to a post-redemption or standalone campaign.
3. **Make the voucher code scannable.** Format it in a large, monospaced, high-contrast block — visually it should feel like a ticket or coupon, not a paragraph element.
4. **Add price context to the product tiles.** Even just "From $XX" helps the recipient calculate their savings and increases click intent.
5. **Tighten the hero copy.** "We wanted to send a quick reminder" is passive. Replace with something like "Your 15% off expires today — here's what we picked for you."

---

### 6. Bottom Line

Solid structural bones, one execution-breaking bug. The email would perform well if it arrived without the encoding error. As-is, the broken voucher headline creates a credibility problem at the moment of highest intent. Fix that, trim the profile module, and this becomes an effective urgency-redemption email.

---

### 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Urgency reminder to redeem a 15% adiClub voucher expiring in 24 hours |
| **Hero / primary value prop** | Voucher section with "HEREÂ€™S 15% OFF" headline — broken encoding visible; promo code and "Redeem Online" CTA present |
| **Membership / benefits** | adiClub branding throughout; "Complete Your Profile for 50 Points" module mid-email |
| **Product discoverability** | Four product tiles under "Top Picks For You" with personalization framing; no visible pricing |
| **Utility / secondary modules** | "The Ultimate App for Members" with App Store + Google Play CTAs near footer |
| **Bugs / friction** | **Encoding bug**: "HEREÂ€™S 15% OFF" — apostrophe rendering as garbage characters, visible directly in the voucher hero section |

---

## Technical Audit

## Technical Audit — adidas "Last Day to Redeem Your Voucher"

---

### 1. Technical Summary

Multiple broken font assets (403) and staging image URLs indicate this email was either sent from a pre-production environment or against expired/misconfigured S3 bucket permissions. A malformed tracking link with unencoded control characters is a hard failure that will break click-through for affected recipients.

---

### 2. Link & Tracking Issues

**FAIL — Malformed tracking URL (control characters in query string)**
The unsubscribe/preferences link contains a literal space in the token parameter, making it an invalid URL per RFC 3986. Most HTTP clients will reject or truncate it.

```
https://go.adidas.com/ihha/lyxsr85w?pid=sfmc&tkn=X3GGIjX0...NsD2L0d0vfg88EyoFZ03SHIY+qRCOV5rsEoujCFXYbsrkvmbsECLh8iQ1JzaQqjj+H7ytKS0RwEYPp5amKkwng==333433623538326233346239616665312d656539372d3462
```

The QA checker flagged: `URL can't contain control characters. '/us/welcome?pid=sfmc&tkn=wywsMJxPH%2Ff27N1I1awRPs0A9SrXTw2cQ2J9POo8tBup3Sw62gOkKEyTSIkpmo8%2Fb%20UkrsPo9CaLH2p3` — the `%20` (space) embedded in the token is not a valid token value; this indicates a SFMC merge token was not URL-encoded before injection.

**WARN — 22 tracking/redirect links not probed**
All click-tracking links route through `go.adidas.com`. These were not HTTP-probed; destination URL integrity is unverified.

---

### 3. Rendering & Accessibility

**FAIL — 8 custom font files return HTTP 403**

All `@font-face` declarations will silently fail. Fallback `mso-font-alt:Arial` will apply in Outlook, but non-Outlook clients that attempt to load the font will encounter access errors. Affected files:

- `AdihausDIN-Regular.woff2` / `.ttf`
- `AdihausDIN-Bold.woff2` / `.ttf`
- `adineuePRO-Regular.woff2` / `.woff`
- `adineuePRO-Bold.woff2` / `.woff`

All hosted at `s3-eu-west-1.amazonaws.com/adidas-adl/...` — bucket policy is blocking public reads.

**FAIL — 2 images served over HTTP (not HTTPS)**

Mixed-content will cause these to be blocked in Gmail (which proxies images) and most modern clients:

- `http://image.link.adidas.com/.../966ef092-a6d7-47fd-8703-d364ac06d9e7.png`
- `http://image.link.adidas.com/.../37231f63-3f72-48f3-8047-2650e11742e8.gif`

**WARN — Staging image CDN used in production**

14 of 17 image `src` attributes reference `image.staging.link.adidas.com` rather than `image.link.adidas.com`. This strongly suggests the email was built or exported from a staging environment without a production URL swap:

```
https://image.staging.link.adidas.com/lib/fe6515707c62007e7715/m/21/2373748f-4913-4dfd-88b6-ca5c712d055b.gif
```

If the staging CDN restricts external access, all affected images will be broken for recipients.

**WARN — 14 images missing `alt` text**

Repeated offenders: `2373748f...gif` (appears 7 times), `966ef092...png`, `b9aa5d2a...jpg`, `5bf3fd66...jpg`, `6c9cdf12...png` (×2), `37231f63...gif`. Missing alt text fails WCAG 2.1 §1.1.1 and degrades image-blocked rendering.

**NOTE — HTML 4.01 Transitional DOCTYPE**

`<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">` is used. This is a common email pattern for Outlook compatibility but limits use of modern HTML5 email features.

---

### 4. Personalization & Merge Tokens

**WARN — Token encoding failure in preferences link**

As noted in §2, a SFMC merge token (`tkn=`) appears to contain an unencoded space (`%20`) injected directly into a URL parameter. This is a token rendering defect — the personalization platform did not properly URL-encode the output value before link construction.

No other visible unfired merge tokens (e.g., `%%FIRSTNAME%%` literals) were detected in the truncated source.

---

### 5. Compliance

**WARN — SPF/DKIM authentication status unverifiable**

`Authentication-Results` header was not present in the captured data. Sender domain is `us-news.adidas.com` (subdomain). SPF/DKIM pass/fail status cannot be confirmed from available data. If authentication is failing, this contributes to spam folder placement.

**NOTE — Plain-text alternative is URL-heavy**

84.7% of plain-text body characters are URLs (16,013 of 18,912). This is a strong spam signal for content filters. Plain-text should contain human-readable content, not URL dumps. This warrants review of the plain-text part generation.

CAN-SPAM unsubscribe link is present (the preferences/unsubscribe URL confirmed in QA). Physical mailing address was not confirmed present in the truncated source — should be verified in the full render.

---

### 6. Email-to-Site Continuity

UTM/attribution parameters are present on the preferences link:

```
cm_mmc=AdiEmail_CLC-_-None-_-MemOnb_Comms5-_-Marketing-_-preferences
cm_mmca3=ILDCWJD70W1BE32X
cm_mmca4=4134869
af_adset=MemOnb_Comms5
af_channel=Welcome
```

Attribution chain for click-through links was not probed (22 tracking links skipped). Cannot confirm UTM params are preserved through `go.adidas.com` redirect for CTA buttons. This should be verified against the primary voucher redemption CTA.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **P0** | Staging CDN URLs in production send | Replace all `image.staging.link.adidas.com` with `image.link.adidas.com` before any resend |
| **P0** | Malformed preferences/unsubscribe URL | Fix SFMC token URL-encoding on `tkn=` parameter — space in token breaks the link |
| **P1** | Font S3 bucket returns 403 | Restore public-read ACL on `s3-eu-west-1.amazonaws.com/adidas-adl/` font assets or re-host fonts |
| **P1** | 2 HTTP image URLs | Upgrade `http://image.link.adidas.com/...` sources to HTTPS |
| **P1** | SPF/DKIM not confirmed | Verify authentication headers through send pipeline; confirm `us-news.adidas.com` is in SPF record |
| **P2** | 14 images missing alt text | Add descriptive `alt=""` (or explicit `alt=""` for decorative) to all `<img>` tags |
| **P2** | Plain-text body is 85% URLs | Regenerate plain-text from content copy, not raw HTML serialization |
## Recent history

- [[2026-03-23-your-first-pair-just-became-2-bogo-50-off]] — 5/10 (2026-03-23)
- [[2026-03-29-disney-s-goofy-soccermania]] — 3/10 (2026-03-23)
- [[2026-03-22-take-your-first-step-into-comfort]] — 5/10 (2026-03-22)

