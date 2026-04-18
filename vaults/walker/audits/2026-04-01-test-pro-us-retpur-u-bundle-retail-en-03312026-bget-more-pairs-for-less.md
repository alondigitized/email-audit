---
slug: 2026-04-01-test-pro-us-retpur-u-bundle-retail-en-03312026-bget-more-pairs-for-less
type: email
date: 2026-03-30
persona: walker
score: "5/10"
sender: SKECHERS
subject: "[Test]: PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_BGet More Pairs for Less"
tags: [email, score-5, sender/skechers]
---
# [Test]: PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_BGet More Pairs for Less
**Score:** 5/10 · **Type:** Email audit · **2026-03-30**
## Executive summary

- A straightforward Spring Sale promotional email anchored by a BOGO 50% off offer. The deal is clear and the product categories are logically organized, but the execution is visually thin — low-energy imagery, weak personalization hooks, and a footer that dominates the bottom third of the email. The offer itself is competitive; the email doesn't do it justice.

## What's working

- **Offer clarity.** "Buy One, Get One 50% Off" is immediately readable in the hero. No ambiguity.
- **Dual CTA in hero.** "Shop Now" and "Find a Store" address both online and in-store shoppers — smart for a sale event.
- **Category segmentation.** Women's, Men's, and Kids' sections are cleanly separated with dedicated CTAs, making navigation easy.
- **"This Just In" module.** Pairing newness with a sale email is a good retention signal — it says the brand is more than just discounts.
- **Utility footer.** App download, curbside pickup, shop now/pay later, and store finder are all present and useful.

## What's weak

- **Hero image is generic.** A spring pastel banner with no people, no lifestyle, no product in action. It reads more like a flyer than an email from a footwear brand.
- **Product thumbnails are tiny.** Each category section shows shoes at a size that makes them almost indistinguishable from each other. There's no hero product moment, no featured style.
- **No discount urgency.** No end date, no "limited time," no countdown signal. A BOGO offer without a deadline trains customers to wait.
- **"This Just In" section is underworked.** The lifestyle image is fine but there's only one product shown — missed opportunity to drive discovery.
- **Navigation link list is redundant.** The vertical text list (Women, Men, Kids, Clothing, New Arrivals, Sale) below "This Just In" duplicates what's already shown above. It adds length without adding value.
- **Subject line leaks test metadata.** "[Test]: PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_B" appears to be a QA/test email sent with internal identifiers exposed in the subject line.
- **Preview text is broken.** The preheader renders as a raw URL string rather than supporting copy — a wasted impression at the inbox level.

## Recommendations

- 1. **Add an expiry to the offer.** Even "This weekend only" increases urgency materially. Without it, the BOGO reads as evergreen.
- 2. **Feature 2–3 hero products in the sale banner.** Show the actual shoes. Lifestyle imagery or large product shots beat an abstract pastel background.
- 3. **Increase product tile size.** Each category section should show fewer, larger products rather than a row of tiny thumbnails.
- 4. **Fix the preheader.** Replace the raw URL with a short line that reinforces the offer: "Your pairs, half price — shop the Spring Sale now."
- 5. **Cut the redundant nav list.** Remove the vertical Women/Men/Kids/etc. text links — users have already seen those CTAs in the category modules above.
- 6. **Strip test metadata from subject line** before any live send — or build a QA gate to catch this.
- | Priority | Issue | Action |
- |----------|-------|--------|
- | **Critical** | `[Test]:` prefix in production subject | Audit send configuration — confirm whether this reached live subscribers or test seed list only |
- | **Critical** | Campaign code fused to subject copy (`_BGet`) | Fix template variable delimiter; re-test subject rendering before any resend |
- | **High** | All `image.emails.skechers.com` images served over HTTP | Migrate CDN to HTTPS or confirm CNAME forces HTTPS; update all `src` attributes |
- | **High** | ink1000 pixel served over HTTP | Update to `https://www.ink1000.com/...` or confirm provider supports HTTPS |
- | **High** | ReturnPath pixel — missing URL scheme | Add `https://` prefix to `src`; pixel is currently a no-op |
- | **Medium** | SPF/DKIM auth status unconfirmed | Pull raw headers from a delivered copy; verify DKIM signature and SPF alignment for `emails.skechers.com` |
- | **Medium** | Plain-text 72% URL ratio | Rewrite plain-text alternative to include substantive copy; reduce raw URL density |
- | **Medium** | 4 images missing `alt` text | Add descriptive `alt` for product images; use `alt=""` for decorative/tracking images |
- | **Low** | `<meta charset>` missing `http-equiv` | Add `http-equiv="Content-Type"` for legacy client compatibility |
- | **Low** | Resolve primary CTA redirect manually | Confirm `utm_campaign` and landing page destination are correct before any resend |

## Full review
## 1. Executive Summary

A straightforward Spring Sale promotional email anchored by a BOGO 50% off offer. The deal is clear and the product categories are logically organized, but the execution is visually thin — low-energy imagery, weak personalization hooks, and a footer that dominates the bottom third of the email. The offer itself is competitive; the email doesn't do it justice.

---

## 2. Business Impact Score

**5 / 10**

The offer has real commercial pull, but the email underdelivers on visual urgency and product inspiration. It will generate some conversion from deal-seekers but leaves significant revenue on the table from shoppers who need more stimulus to click.

---

## 3. What's Working

- **Offer clarity.** "Buy One, Get One 50% Off" is immediately readable in the hero. No ambiguity.
- **Dual CTA in hero.** "Shop Now" and "Find a Store" address both online and in-store shoppers — smart for a sale event.
- **Category segmentation.** Women's, Men's, and Kids' sections are cleanly separated with dedicated CTAs, making navigation easy.
- **"This Just In" module.** Pairing newness with a sale email is a good retention signal — it says the brand is more than just discounts.
- **Utility footer.** App download, curbside pickup, shop now/pay later, and store finder are all present and useful.

---

## 4. What's Weak

- **Hero image is generic.** A spring pastel banner with no people, no lifestyle, no product in action. It reads more like a flyer than an email from a footwear brand.
- **Product thumbnails are tiny.** Each category section shows shoes at a size that makes them almost indistinguishable from each other. There's no hero product moment, no featured style.
- **No discount urgency.** No end date, no "limited time," no countdown signal. A BOGO offer without a deadline trains customers to wait.
- **"This Just In" section is underworked.** The lifestyle image is fine but there's only one product shown — missed opportunity to drive discovery.
- **Navigation link list is redundant.** The vertical text list (Women, Men, Kids, Clothing, New Arrivals, Sale) below "This Just In" duplicates what's already shown above. It adds length without adding value.
- **Subject line leaks test metadata.** "[Test]: PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_B" appears to be a QA/test email sent with internal identifiers exposed in the subject line.
- **Preview text is broken.** The preheader renders as a raw URL string rather than supporting copy — a wasted impression at the inbox level.

---

## 5. Recommendations

1. **Add an expiry to the offer.** Even "This weekend only" increases urgency materially. Without it, the BOGO reads as evergreen.
2. **Feature 2–3 hero products in the sale banner.** Show the actual shoes. Lifestyle imagery or large product shots beat an abstract pastel background.
3. **Increase product tile size.** Each category section should show fewer, larger products rather than a row of tiny thumbnails.
4. **Fix the preheader.** Replace the raw URL with a short line that reinforces the offer: "Your pairs, half price — shop the Spring Sale now."
5. **Cut the redundant nav list.** Remove the vertical Women/Men/Kids/etc. text links — users have already seen those CTAs in the category modules above.
6. **Strip test metadata from subject line** before any live send — or build a QA gate to catch this.

---

## 6. Bottom Line

This email communicates the offer but fails to sell it. The deal is strong enough to drive clicks from the most motivated segment, but the lack of urgency, small product imagery, and broken preheader mean it's converting well below its potential. Fix the expiry, the hero visuals, and the preheader — three changes that together would meaningfully lift click-through.

---

## 7. Evidence

**Overall purpose:** Spring Sale promotional email driving BOGO 50% off across all categories, online and in-store.

**Hero / primary value proposition:** Spring Sale banner with "Buy One, Get One 50% Off" headline, pastel background, two CTAs (Shop Now, Find a Store). Offer is clear but visually flat — no product, no person, no energy.

**Membership / benefits section:** Not present. No loyalty or adiclub-equivalent module visible.

**Product discoverability / recommendation modules:** Three category rows (Women's, Men's, Kids') each showing a horizontal strip of small product thumbnails with a category CTA. One "This Just In" lifestyle module with a single featured image and a Shop Now CTA. Product tiles are too small to be aspirational.

**Utility / secondary modules:** Navigation link list (Women, Men, Kids, Clothing, New Arrivals, Sale) — redundant. Utility bar with app download, curbside pickup, BNPL, and store finder — useful and well-placed above the footer.

**Bugs / friction / clarity issues:**
- Preview text renders as a raw URL (`https://view.emails.skechers.com/...`) — visible to anyone who saw this in an inbox.
- Subject line contains test/QA identifiers that should not be customer-facing.
- "Discount applied at cart" fine print is present but very small — not a visual bug, but a friction point for hesitant buyers.

---

## Technical Audit

## Technical Audit — Skechers `PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_B`

---

### 1. Technical Summary

The email has a pervasive HTTP (non-HTTPS) image hosting problem affecting the primary CDN (`image.emails.skechers.com`) and a third-party pixel (`ink1000.com`), creating mixed-content blocking risk across major clients. A `[Test]:` subject prefix and a malformed campaign-code-to-subject concatenation indicate the send may have deployed before QA was complete.

---

### 2. Link & Tracking Issues

**Subject line concatenation error**
The `Subject:` header reads:
```
[Test]: PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_BGet More Pairs for Less
```
The campaign code is fused directly to the consumer subject with no delimiter — `_BGet` — suggesting a template variable that was not properly terminated before the subject copy. If delivered to live subscribers, recipients saw `PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_BGet More Pairs for Less` as the subject.

**`[Test]:` prefix in production subject**
The `[Test]:` string is present in the final `Subject:` header. This is either an inadvertent test send to a live list, or the prefix was never stripped before deployment.

**ink1000.com open/tracking pixel — HTTP**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif?mi_u=8104607450&mi_ecmp=PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_B
```
Non-HTTPS source. Gmail and Apple Mail proxy or block HTTP image requests, so this third-party engagement signal will be unreliable.

**ReturnPath pixel — missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" ...>
```
`src` has no scheme (`http://` or `https://`). Most clients will treat this as a relative path and the pixel will silently fail to fire, breaking inbox placement monitoring for this send.

**23 click-redirect links — destinations unverifiable**
All CTAs route through `click.emails.skechers.com` with AES-encrypted query strings. QA tooling skipped HTTP probing. Manual spot-check of at least the primary CTA destination is required to confirm UTM params and landing page alignment.

---

### 3. Rendering & Accessibility

**HTTP image sources — CDN-wide (16 images)**
All product and UI images are served from `http://image.emails.skechers.com`. Affected assets include the Skechers logo, app store badges, social icons, and product imagery:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-169f-447d-b0e2-fc65f6c2290c.png  (logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-... (App Store)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-... (Google Play)
... (12 additional)
```
Gmail rewrites HTTP image URLs through its proxy; Apple Mail on iOS 15+ blocks non-HTTPS content entirely. This will break rendering for a large share of the audience.

**Missing `alt` text on 4 images**
- `o.gif` (ink1000 pixel) — low severity for a tracking pixel, but flags in accessibility scanners
- `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- `00100b23-0afa-4715-a8cd-23bb46f9d2b2.png`
- `fc08601a-fcce-4c96-8b90-39e5a55d6c05.png`

Images without `alt=""` (even intentional blank) degrade screen reader experience and trigger spam heuristics in some filters.

**`<meta content="text/html; charset=utf-8" />` — missing `http-equiv`**
The charset meta tag omits `http-equiv="Content-Type"`. Some older Outlook and Lotus Notes clients will not parse the charset declaration:
```html
<!-- current (broken) -->
<meta content="text/html; charset=utf-8" />
<!-- correct -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

**`-webkit-text-size-adjust: none` on `*` selector**
Applied globally, this prevents iOS from adjusting text size on user zoom. Acceptable for email in limited contexts, but the `*` selector scope is overly broad and will suppress zoom behavior for all text, not just headline elements.

---

### 4. Personalization & Merge Tokens

No unresolved merge tokens visible in the truncated source. Populated values confirmed:
- `mi_u=8104607450` (ink1000 subscriber ID)
- `partner_uid=115584018` (Krxd subID)
- SHA-256 hashed email present in Krxd usermatch beacon

No issues found with merge token rendering, though the full source was truncated and footer personalization (name, loyalty tier) could not be verified.

---

### 5. Compliance

**SPF/DKIM authentication status unknown**
QA finding: `Authentication-Results header not found`. The relay (AgentMail) did not surface authentication headers. Sending domain is `emails.skechers.com`; DMARC alignment and DKIM signing for this subdomain cannot be confirmed from available data. This needs verification at the MTA level.

**Plain-text version is URL-heavy**
QA measured 71.7% URL content in the plain-text part (4,175 of 5,822 chars). This ratio is a known spam scoring trigger in SpamAssassin (`URI_RATIO`) and Barracuda. The plain-text version likely consists of little more than click-tracked URLs with minimal readable copy.

**CAN-SPAM / unsubscribe**: HTML source was truncated before the footer. Physical mailing address and unsubscribe mechanism presence could not be confirmed from available source. Standard Skechers footer includes these, but this must be verified against the full render.

---

### 6. Email-to-Site Continuity

All CTAs are wrapped in `click.emails.skechers.com` redirects with encrypted payloads — UTM parameter values are not inspectable without following the redirect chain. The campaign ID `PRO_US_RETPUR_U_BUNDLE_RETAIL_EN_03312026_B` is consistently present across the open pixel, Krxd impression pixel, and ink1000 pixel, indicating campaign attribution tagging is active.

Landing page UTM alignment cannot be confirmed without manually resolving at least the primary CTA redirect. Given the subject line concatenation bug, there is elevated risk that the `utm_campaign` value on the destination URL also contains the malformed string.

---

### 7. Recommendations

| Priority | Issue | Action |
|----------|-------|--------|
| **Critical** | `[Test]:` prefix in production subject | Audit send configuration — confirm whether this reached live subscribers or test seed list only |
| **Critical** | Campaign code fused to subject copy (`_BGet`) | Fix template variable delimiter; re-test subject rendering before any resend |
| **High** | All `image.emails.skechers.com` images served over HTTP | Migrate CDN to HTTPS or confirm CNAME forces HTTPS; update all `src` attributes |
| **High** | ink1000 pixel served over HTTP | Update to `https://www.ink1000.com/...` or confirm provider supports HTTPS |
| **High** | ReturnPath pixel — missing URL scheme | Add `https://` prefix to `src`; pixel is currently a no-op |
| **Medium** | SPF/DKIM auth status unconfirmed | Pull raw headers from a delivered copy; verify DKIM signature and SPF alignment for `emails.skechers.com` |
| **Medium** | Plain-text 72% URL ratio | Rewrite plain-text alternative to include substantive copy; reduce raw URL density |
| **Medium** | 4 images missing `alt` text | Add descriptive `alt` for product images; use `alt=""` for decorative/tracking images |
| **Low** | `<meta charset>` missing `http-equiv` | Add `http-equiv="Content-Type"` for legacy client compatibility |
| **Low** | Resolve primary CTA redirect manually | Confirm `utm_campaign` and landing page destination are correct before any resend |
## Recent history

- [[2026-04-01-test-pro-us-retpur-u-bundle-retail-en-03312026-aget-more-pairs-for-less]] — 5/10 (2026-03-30)
- [[2026-03-30-test-pro-us-nonpur-u-bundle-nonpurch-en-03312026why-start-with-one-pair-when-you]] — 6/10 (2026-03-30)
- [[2026-03-30-test-pro-us-ecmpur-u-bundle-ecom-en-03312026-b-v2it-s-time-to-double-up-on-comfo]] — 6/10 (2026-03-30)

