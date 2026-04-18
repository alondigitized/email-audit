---
slug: 2026-03-29-test-mkg-us-na-u-best-gender-en-03292026the-styles-everyone-s-searching-for
type: email
date: 2026-03-27
persona: walker
score: "5.5/10"
sender: SKECHERS
subject: "[Test]: MKG_US_NA_U_BEST_GENDER_EN_03292026The Styles Everyone's Searching For"
tags: [email, score-6, sender/skechers]
---
# [Test]: MKG_US_NA_U_BEST_GENDER_EN_03292026The Styles Everyone's Searching For
**Score:** 5.5/10 · **Type:** Email audit · **2026-03-27**
## Executive summary

- A trend-driven "best of" email organized around three search-intent categories — Sandals, Hands Free Slip-Ins, and Arch Fit — each paired with a shop CTA. The structure is clean and logical, but the execution is hampered by small imagery, thin visual hierarchy, and a hero that undersells the offer. It reads like a catalog page rather than a campaign.
- Functional but forgettable. The categories are commercially sound; the creative doesn't amplify them.

## What's working

- **Clear category architecture.** Sandals → Hands Free Slip-Ins → Arch Fit is a sensible, high-intent flow that maps to real search behavior.
- **Consistent CTA pattern.** Each section has a dedicated "Shop [Category]" button — no ambiguity about where to click.
- **"New & For You" module.** A personalized or new-arrivals block near the bottom adds a discovery layer beyond the editorial categories.
- **Compact footer.** Social icons, app download links, and utility nav are all present without dominating.

## What's weak

- **Hero is anemic.** The "50% Off" offer in the banner is the strongest commercial hook in the email, but it's confined to a small top strip. There's no full-width hero image or lifestyle moment — the email launches straight into a text header ("Most Searched Styles") with minimal visual impact.
- **Product imagery is too small.** Each category module shows two to three product tiles at thumbnail scale. At mobile-ish render width, the shoes are barely identifiable. This is a footwear brand — the product needs to breathe.
- **"Most Searched Styles" headline is weak copy.** It's descriptive rather than motivating. It doesn't create urgency or desire.
- **Category headers lack visual differentiation.** Sandals, Hands Free Slip-Ins, and Arch Fit sections look nearly identical in layout and color weight — the eye doesn't naturally pause between them.
- **Preview text is broken.** The visible preview in the metadata shows raw URLs and placeholder-style text rather than a clean teaser line. Recipients see this before opening.

## Recommendations

- 1. **Expand the hero.** Promote the 50% off offer from the top strip into a full-width hero with a lifestyle image and a primary CTA. Don't bury the lead.
- 2. **Increase product image size.** Give each category at least one large hero product image above the tile row — let the shoe dominate.
- 3. **Rewrite the subject and hero headline.** "The Styles Everyone's Searching For" is fine as a hook; turn it into an in-email headline too and drop "Most Searched Styles."
- 4. **Add visual breaks between category sections.** Use a background color or a thin divider to make each section feel distinct and scannable.
- 5. **Fix the preview text.** This is a deployment issue — the preheader should read something like "Shop sandals, slip-ins & more — now 50% off."
- | Priority | Issue | Action |
- |---|---|---|
- | **Blocker** | `[Test]:` subject prefix | Remove before production deploy |
- | **Blocker** | HTTP image hosting (`image.emails.skechers.com`) | Migrate all asset URLs to HTTPS |
- | **High** | Return Path pixel missing protocol | Add `https://` to `pixel.app.returnpath.net/pixel.gif` src |
- | **High** | HTTP ink1000 tracking pixel | Upgrade to `https://` or confirm vendor supports HTTPS |
- | **High** | SPF/DKIM status unconfirmed | Verify authentication headers on production relay before send |
- | **Medium** | Krux `partner_uid` hardcoded values | Confirm these are merge fields, not static test values |
- | **Medium** | 4 images missing `alt=""` | Add descriptive or empty alt text per WCAG 1.1.1 |
- | **Medium** | `maximum-scale=1` on viewport | Remove or set to `5` to restore zoom capability |
- | **Low** | `* { -webkit-text-size-adjust: none }` | Scope to specific layout-critical selectors only |
- | **Low** | Malformed `<meta>` tags | Add `http-equiv` attributes to charset and IE-compat metas |
- | **Low** | UTM pass-through unverified | Manual spot-check of primary CTA post-click URL |

## Full review
## 1. Executive Summary

A trend-driven "best of" email organized around three search-intent categories — Sandals, Hands Free Slip-Ins, and Arch Fit — each paired with a shop CTA. The structure is clean and logical, but the execution is hampered by small imagery, thin visual hierarchy, and a hero that undersells the offer. It reads like a catalog page rather than a campaign.

---

## 2. Business Impact Score: **5.5 / 10**

Functional but forgettable. The categories are commercially sound; the creative doesn't amplify them.

---

## 3. What's Working

- **Clear category architecture.** Sandals → Hands Free Slip-Ins → Arch Fit is a sensible, high-intent flow that maps to real search behavior.
- **Consistent CTA pattern.** Each section has a dedicated "Shop [Category]" button — no ambiguity about where to click.
- **"New & For You" module.** A personalized or new-arrivals block near the bottom adds a discovery layer beyond the editorial categories.
- **Compact footer.** Social icons, app download links, and utility nav are all present without dominating.

---

## 4. What's Weak

- **Hero is anemic.** The "50% Off" offer in the banner is the strongest commercial hook in the email, but it's confined to a small top strip. There's no full-width hero image or lifestyle moment — the email launches straight into a text header ("Most Searched Styles") with minimal visual impact.
- **Product imagery is too small.** Each category module shows two to three product tiles at thumbnail scale. At mobile-ish render width, the shoes are barely identifiable. This is a footwear brand — the product needs to breathe.
- **"Most Searched Styles" headline is weak copy.** It's descriptive rather than motivating. It doesn't create urgency or desire.
- **Category headers lack visual differentiation.** Sandals, Hands Free Slip-Ins, and Arch Fit sections look nearly identical in layout and color weight — the eye doesn't naturally pause between them.
- **Preview text is broken.** The visible preview in the metadata shows raw URLs and placeholder-style text rather than a clean teaser line. Recipients see this before opening.

---

## 5. Recommendations

1. **Expand the hero.** Promote the 50% off offer from the top strip into a full-width hero with a lifestyle image and a primary CTA. Don't bury the lead.
2. **Increase product image size.** Give each category at least one large hero product image above the tile row — let the shoe dominate.
3. **Rewrite the subject and hero headline.** "The Styles Everyone's Searching For" is fine as a hook; turn it into an in-email headline too and drop "Most Searched Styles."
4. **Add visual breaks between category sections.** Use a background color or a thin divider to make each section feel distinct and scannable.
5. **Fix the preview text.** This is a deployment issue — the preheader should read something like "Shop sandals, slip-ins & more — now 50% off."

---

## 6. Bottom Line

The email's category strategy is smart — targeting search intent with curated modules is the right approach for a "best of" send. But the creative execution doesn't match the ambition. Small product images, a buried discount offer, and a weak hero mean the email will drive modest engagement. Fix the hero and the product scale and you have a genuinely strong send.

---

## 7. Evidence

| Module | Observation |
|---|---|
| **Overall purpose** | Highlight Skechers' most-searched categories with direct shop links; secondary push on new arrivals and a standing discount offer |
| **Hero / primary value prop** | Thin top banner with 50% off and "Shop Now" — not developed into a full hero; no lifestyle imagery |
| **Membership / benefits** | Not present as a distinct section |
| **Product discoverability** | Three category modules (Sandals, Hands Free Slip-Ins, Arch Fit) each with 2–3 product tiles; "New & For You" section adds a fourth discovery layer |
| **Utility / secondary modules** | App download prompt, social links, standard footer nav all visible |
| **Bugs / friction** | No visible broken images or overlapping text; preview text in the send metadata is raw/malformed (URLs visible) |

---

## Technical Audit

## Technical Audit — Skechers `MKG_US_NA_U_BEST_GENDER_EN_03292026`

**From:** no-reply@emails.skechers.com | **Date:** 2026-03-29

---

### 1. Technical Summary

This test send contains a subject line prefix that must be stripped before production deployment, and carries a systemic HTTP (non-HTTPS) image hosting problem affecting 15+ assets. Authentication status is unverifiable from the relay headers available.

---

### 2. Link & Tracking Issues

**Subject line injection risk**
The subject is `[Test]: MKG_US_NA_U_BEST_GENDER_EN_03292026The Styles Everyone's Searching For` — the `[Test]:` prefix is live in the header, and the campaign ID and display subject are concatenated without a space/delimiter. This is a production deployment blocker if not templated out.

**26 click-redirect links unverifiable**
All CTAs route through `click.emails.skechers.com/?qs=<encrypted-payload>`. The QA probe correctly skipped these; destination URLs and UTM parameter pass-through cannot be confirmed without click-link decryption or a live test click.

**Third-party DMP user-match pixels**
Two `beacon.krxd.net` user-match pixels fire on open:
```
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_sha25&partner_uid=28374a795c423f502bec51b57d22d407e05bd07626e78a6dea159c79ae67f16a
https://beacon.krxd.net/1x1_usermatch.gif?partner=LprH63a7_sfmc_100007688_subid&partner_uid=2396422
```
The `partner_uid` values appear hardcoded to a single subscriber (test seed). Verify these are dynamically populated merge fields in production templates, not static values baked into the HTML.

**Return Path pixel missing protocol**
```html
<img src="pixel.app.returnpath.net/pixel.gif?r=964ce1dbf0dcef79cbad82c12fe25342701e4499" width="1" height="1" />
```
No `http://` or `https://` prefix. This pixel will fail to load in all clients — the inbox monitoring signal will be lost.

---

### 3. Rendering & Accessibility

**HTTP image sources — 15 assets**
Every image hosted on `image.emails.skechers.com` is served over HTTP, not HTTPS:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/1/dde00662-...png  (Skechers logo)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/49468f73-...png
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/0ec56c9f-...png  (App Store badge)
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/9bb508d0-...png  (Google Play badge)
... and 11 more
```
Gmail, Outlook.com, and Apple Mail proxy or block mixed-content HTTP images. This will cause broken images for a significant share of recipients.

**HTTP tracking pixel**
```
http://www.ink1000.com/p/up/7076d8b15a776085/o.gif
```
Same mixed-content risk. Also missing `alt=""`.

**Missing alt text — 4 images confirmed**
`o.gif`, `49468f73-...png`, `00100b23-...png`, `fc08601a-...png` have no `alt` attribute. Screen readers will announce the raw filename. The App Store / Google Play / social icons have alt text; these unnamed content images do not.

**Zoom disabled**
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```
`maximum-scale=1` prevents pinch-to-zoom on mobile. WCAG 1.4.4 failure for low-vision users.

**Global text-size-adjust suppression**
```css
* { -webkit-text-size-adjust: none; }
```
Applied to all elements. This disables iOS Safari's automatic text size adjustment across the entire email, not just the areas where it causes layout issues. Scope this to specific selectors where overflow is a known problem.

**Malformed meta tags**
Both meta tags are missing their `http-equiv` attribute:
```html
<meta content="text/html; charset=utf-8" />          <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                            <!-- missing http-equiv="X-UA-Compatible" -->
```
These will be silently ignored by parsers; charset fallback and IE rendering mode directives will not apply.

---

### 4. Personalization & Merge Tokens

No broken or unresolved merge tokens visible in the truncated source. However, the Krux DMP `partner_uid` values (noted above) must be confirmed as dynamic substitutions before production send. The preheader text ("Buy One, Get One 50% Off Our Most Loved Styles") is hardcoded — no personalization tokens present in this section.

---

### 5. Compliance

**SPF/DKIM — unverifiable**
QA warning: `Authentication-Results header not found via AgentMail relay`. SPF/DKIM pass status cannot be confirmed. If authentication is failing or soft-failing on the relay used for this test, deliverability to Gmail and Yahoo will be degraded.

**Subject line test prefix**
`[Test]:` must be removed before production. Many ESP abuse filters and recipient-side spam heuristics penalize bracketed prefixes.

**CAN-SPAM / unsubscribe**
HTML is truncated; footer with physical address and unsubscribe link is not visible in the provided source. Assumed present based on brand standard — confirm in full source review.

---

### 6. Email-to-Site Continuity

All destination URLs are encrypted inside the `click.emails.skechers.com/?qs=` redirect payload and cannot be inspected from HTML source alone. UTM parameter presence and correctness (campaign, source, medium) cannot be confirmed. A post-click spot-check against at least the primary CTA is required to verify landing page alignment and UTM pass-through.

The campaign ID `MKG_US_NA_U_BEST_GENDER_EN_03292026` is consistently used across the Krux impression pixel and the ink1000 pixel — internal campaign tracking appears coherent.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **Blocker** | `[Test]:` subject prefix | Remove before production deploy |
| **Blocker** | HTTP image hosting (`image.emails.skechers.com`) | Migrate all asset URLs to HTTPS |
| **High** | Return Path pixel missing protocol | Add `https://` to `pixel.app.returnpath.net/pixel.gif` src |
| **High** | HTTP ink1000 tracking pixel | Upgrade to `https://` or confirm vendor supports HTTPS |
| **High** | SPF/DKIM status unconfirmed | Verify authentication headers on production relay before send |
| **Medium** | Krux `partner_uid` hardcoded values | Confirm these are merge fields, not static test values |
| **Medium** | 4 images missing `alt=""` | Add descriptive or empty alt text per WCAG 1.1.1 |
| **Medium** | `maximum-scale=1` on viewport | Remove or set to `5` to restore zoom capability |
| **Low** | `* { -webkit-text-size-adjust: none }` | Scope to specific layout-critical selectors only |
| **Low** | Malformed `<meta>` tags | Add `http-equiv` attributes to charset and IE-compat metas |
| **Low** | UTM pass-through unverified | Manual spot-check of primary CTA post-click URL |
## Recent history

- [[2026-03-29-test-mkg-us-nonpur-u-best-nonpurch-en-03292026everybody-wants-these-styles]] — 6/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-ecmpur-u-best-ecom-en-03292026-athe-styles-everyone-s-searching-for]] — 6.5/10 (2026-03-27)
- [[2026-03-29-test-mkg-us-retpur-u-best-retail-en-03292026check-out-what-s-trending-online]] — 5/10 (2026-03-27)

