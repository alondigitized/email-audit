---
slug: 2026-03-12-welcome-to-skechers-fresh
type: email
date: 2026-03-11
persona: walker
score: "5/10"
sender: SKECHERS
subject: Welcome to Skechers!
tags: [email, score-5, sender/skechers]
---
# Welcome to Skechers!
**Score:** 5/10 · **Type:** Email audit · **2026-03-11**
## Executive summary

- **Date:** 2026-03-13 | **From:** no-reply@emails.skechers.com | **Campaign:** TRG_US_EN_NONMEMWELCOME_1_12022025
- This is Skechers' entry-point welcome email for newly subscribed non-members — likely the most read email in the entire program. It delivers the expected welcome discount (20% off via a unique promo code) and covers the functional utility layer well: category nav, app download, SMS opt-in, BNPL, curbside, and Skechers Plus upsell are all present. However, the email is structurally hollow. There is no product hero, no brand storytelling, no personalization, and the welcome journey CTA fires three times to the same URL with no differentiated context. A critical legal copy bug embeds a broken URL that reads as a domain-within-a-domain. For the highest-impression touchpoint in the welcome series, this email punches well below its weight.

## What's working

- **Unique promo code with hard expiry.** `WEL20-C39C3FPRRN` is personalized per recipient and expires April 10, 2026 — good practice for attribution and offer hygiene.
- **Offer deadline is explicit.** Expiry date appears in the fine print, reducing ambiguity and potential CS friction.
- **Full category navigation.** Women / Men / Kids / Clothing / New Arrivals / Sale links are all present with `?src=template` tracking — solid email-to-site continuity at the nav level.
- **Multi-channel expansion.** SMS opt-in (`Text SKECHERS to 83828`), iOS and Android app links, and social follow (Instagram, Facebook, YouTube) are all present and linked correctly.
- **BNPL and fulfillment utilities.** Afterpay, Klarna, Curbside Pickup, and Store Locator are surfaced — covers purchase barrier objections.
- **Skechers Plus upsell.** "Free shipping + returns on all orders" is called out with a `JOIN NOW` CTA linking to the registration page — appropriate placement for a non-member audience.
- **Unsubscribe and preference center.** Both are present with correct deep links. Compliance footprint is mostly clean.

## What's weak

- **No hero product, no visual narrative.** The email contains no product imagery, no lifestyle shot, no curated recommendation. A new subscriber gets a discount code and a link grid — no reason to feel excited about the brand.
- **Triple-repeated welcome journey CTA with no differentiation.** The `/us-email-welcome-journey/` URL appears three times with identical destination and no variation in framing. This suggests a template design where three button positions exist but only one destination was wired up.
- **Category links use raw search query URLs.** Links like `/search/?q=street&sz=24` and `/search/?q=casual&sz=36` route to search results pages rather than curated category landing pages. Search results are lower-confidence conversion surfaces and expose the subscriber to empty-result risk.
- **No personalization.** No first name, no reference to what the subscriber signed up for, no segmentation signal. This reads as a mass broadcast to a new subscriber, not a welcome.
- **Skechers Plus upsell is buried.** The membership pitch lives in the utility footer block, not in a dedicated mid-email module. For a non-member welcome flow, the Plus upsell deserves more prominence.
- **SMS opt-in ask in email #1 is premature.** Asking a brand-new subscriber to also join the SMS list before they've made a first purchase creates channel-expansion friction at the wrong moment.
- **UTM coverage is inconsistent.** Most links carry only `?src=template`. Only the unsubscribe link carries full UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`). Analytics on click-throughs from this email will be incomplete.
- **No reply-to or meaningful sender identity.** `no-reply@emails.skechers.com` with a suggested address-book add — functional but cold for a welcome message.

## Recommendations

- 1. **Add a product hero.** Feature 2–3 bestsellers or category anchors (e.g., BOBS, D'Lites, Arch Fit) with product images and direct PDPs. This is table stakes for a welcome email.
- 2. **Collapse the triple CTA to one clear anchor.** Replace the three identical welcome journey links with a single well-labeled hero button: "Shop with 20% Off →".
- 3. **Replace search query URLs with curated category pages.** Map Street / Casual / Athletic / Work to actual merchandised landing pages, not raw search queries.
- 4. **Promote Skechers Plus higher.** Move the Plus upsell to a dedicated mid-email module above the utility footer — frame it as a benefit unlock ("Get free shipping forever, not just today").
- 5. **Apply full UTM parameters to all links.** Standardize on `utm_source=email&utm_medium=email&utm_campaign=TRG_US_EN_NONMEMWELCOME_1` across every CTA. The current `src=template` parameter is not reportable in standard analytics.
- 6. **Fix the broken legal URL immediately** (see Evidence below) — this is a priority-one bug on the highest-volume email in the program.
- 7. **Defer SMS opt-in to email #2 or #3.** Let the subscriber complete a first browse or purchase before layering on channel expansion.

## Full review
## Walker Audit — Skechers "Welcome to Skechers!" (Non-Member Welcome #1)
**Date:** 2026-03-13 | **From:** no-reply@emails.skechers.com | **Campaign:** TRG_US_EN_NONMEMWELCOME_1_12022025

---

### 1. Executive Summary

This is Skechers' entry-point welcome email for newly subscribed non-members — likely the most read email in the entire program. It delivers the expected welcome discount (20% off via a unique promo code) and covers the functional utility layer well: category nav, app download, SMS opt-in, BNPL, curbside, and Skechers Plus upsell are all present. However, the email is structurally hollow. There is no product hero, no brand storytelling, no personalization, and the welcome journey CTA fires three times to the same URL with no differentiated context. A critical legal copy bug embeds a broken URL that reads as a domain-within-a-domain. For the highest-impression touchpoint in the welcome series, this email punches well below its weight.

---

### 2. Business Impact Score

**5 / 10**

The mechanics work — there's a code, a deadline, and a clear redemption path — but the experience lacks the warmth, product conviction, and personalization that define a high-converting welcome message. The broken legal URL is a compliance risk on the most-sent email in the series.

---

### 3. What's Working

- **Unique promo code with hard expiry.** `WEL20-C39C3FPRRN` is personalized per recipient and expires April 10, 2026 — good practice for attribution and offer hygiene.
- **Offer deadline is explicit.** Expiry date appears in the fine print, reducing ambiguity and potential CS friction.
- **Full category navigation.** Women / Men / Kids / Clothing / New Arrivals / Sale links are all present with `?src=template` tracking — solid email-to-site continuity at the nav level.
- **Multi-channel expansion.** SMS opt-in (`Text SKECHERS to 83828`), iOS and Android app links, and social follow (Instagram, Facebook, YouTube) are all present and linked correctly.
- **BNPL and fulfillment utilities.** Afterpay, Klarna, Curbside Pickup, and Store Locator are surfaced — covers purchase barrier objections.
- **Skechers Plus upsell.** "Free shipping + returns on all orders" is called out with a `JOIN NOW` CTA linking to the registration page — appropriate placement for a non-member audience.
- **Unsubscribe and preference center.** Both are present with correct deep links. Compliance footprint is mostly clean.

---

### 4. What's Weak

- **No hero product, no visual narrative.** The email contains no product imagery, no lifestyle shot, no curated recommendation. A new subscriber gets a discount code and a link grid — no reason to feel excited about the brand.
- **Triple-repeated welcome journey CTA with no differentiation.** The `/us-email-welcome-journey/` URL appears three times with identical destination and no variation in framing. This suggests a template design where three button positions exist but only one destination was wired up.
- **Category links use raw search query URLs.** Links like `/search/?q=street&sz=24` and `/search/?q=casual&sz=36` route to search results pages rather than curated category landing pages. Search results are lower-confidence conversion surfaces and expose the subscriber to empty-result risk.
- **No personalization.** No first name, no reference to what the subscriber signed up for, no segmentation signal. This reads as a mass broadcast to a new subscriber, not a welcome.
- **Skechers Plus upsell is buried.** The membership pitch lives in the utility footer block, not in a dedicated mid-email module. For a non-member welcome flow, the Plus upsell deserves more prominence.
- **SMS opt-in ask in email #1 is premature.** Asking a brand-new subscriber to also join the SMS list before they've made a first purchase creates channel-expansion friction at the wrong moment.
- **UTM coverage is inconsistent.** Most links carry only `?src=template`. Only the unsubscribe link carries full UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`). Analytics on click-throughs from this email will be incomplete.
- **No reply-to or meaningful sender identity.** `no-reply@emails.skechers.com` with a suggested address-book add — functional but cold for a welcome message.

---

### 5. Recommendations

1. **Add a product hero.** Feature 2–3 bestsellers or category anchors (e.g., BOBS, D'Lites, Arch Fit) with product images and direct PDPs. This is table stakes for a welcome email.
2. **Collapse the triple CTA to one clear anchor.** Replace the three identical welcome journey links with a single well-labeled hero button: "Shop with 20% Off →".
3. **Replace search query URLs with curated category pages.** Map Street / Casual / Athletic / Work to actual merchandised landing pages, not raw search queries.
4. **Promote Skechers Plus higher.** Move the Plus upsell to a dedicated mid-email module above the utility footer — frame it as a benefit unlock ("Get free shipping forever, not just today").
5. **Apply full UTM parameters to all links.** Standardize on `utm_source=email&utm_medium=email&utm_campaign=TRG_US_EN_NONMEMWELCOME_1` across every CTA. The current `src=template` parameter is not reportable in standard analytics.
6. **Fix the broken legal URL immediately** (see Evidence below) — this is a priority-one bug on the highest-volume email in the program.
7. **Defer SMS opt-in to email #2 or #3.** Let the subscriber complete a first browse or purchase before layering on channel expansion.

---

### 6. Bottom Line

This welcome email is a functional minimum — it sends a code and points to the site — but it's a missed brand moment. The highest open-rate email in the Skechers program deserves a product story, a warm voice, and clean attribution. The broken legal URL is a compliance issue that needs immediate remediation. Prioritize a redesign of this email before optimizing anything else in the welcome series.

---

### 7. Evidence

| Dimension | Finding |
|---|---|
| **Purpose** | Non-member welcome, 20% off first purchase. Purpose is clear. |
| **Hero / Value Prop** | No product hero. Value prop is the discount code only — no brand aspiration or product story. |
| **Membership (Skechers Plus)** | Present but below the fold in the utility block. Not framed as a journey benefit alongside the welcome offer. |
| **Product Discoverability** | Category nav is present but routes to raw search queries (`?q=street`, `?q=casual`) rather than merchandised landing pages. No featured products. |
| **Utility Modules** | Curbside pickup, Afterpay, Klarna, Store Locator, App download, SMS opt-in — all present and linked. This layer is well covered. |
| **Email-to-Site Continuity** | Welcome journey URL fires three times to the same destination. Category links are inconsistently mapped. `src=template` tracking present but UTM incomplete. |
| **Bugs / Friction** | **CRITICAL:** Legal fine print contains `http://www.skechers.com/www.Skechers.com` — a malformed URL that concatenates the domain with itself. This will 404 or redirect unexpectedly and is a compliance risk given it appears in the offer terms. No other broken links detected. |
