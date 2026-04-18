---
slug: 2026-03-16-your-20-off-welcome-offer-is-waiting
type: email
date: 2026-03-13
persona: walker
score: "5/10"
sender: SKECHERS
subject: Your 20% Off Welcome Offer is waiting!
tags: [email, score-5, sender/skechers]
---
# Your 20% Off Welcome Offer is waiting!
**Score:** 5/10 · **Type:** Email audit · **2026-03-13**
## Executive summary

- **Subject:** Your 20% Off Welcome Offer is waiting!
- **Campaign:** TRG_US_EN_NONMEMWELCOME_3 | **Date:** 2026-03-15
- This is the non-member welcome trigger — the first impression email for new Skechers subscribers. The core mechanics are in place: a unique personalized promo code, a clear expiration date, and a full utility footer. But the execution underdelivers for a welcome email. There's no first-name personalization, no featured product imagery visible in the structured content, and the email leads with size-filtered browse links before the visitor has any reason to know what they want. The real damage is technical: the majority of image assets are served over HTTP, meaning a significant portion of renders — especially in Apple Mail with Mail Privacy Protection — will display broken images on what should be a high-conversion first touchpoint. A merge error in the legal copy produces a broken link. Together, these issues drag down what should be a reliable acquisition closer.
- The welcome offer itself is sound and the promo code is unique per recipient. But the HTTP image issue alone could silently fail for 30–50% of the audience depending on client mix. Broken images on a welcome email = broken first impression. The missing personalization and structural flatness compound the problem.

## What's working

- **Unique promo code** (WEL20-C39C3FPRRN) is present, specific, and recipient-personalized — exactly right for a welcome trigger
- **Expiration date is explicit** (April 10, 2026) — urgency is set without being vague
- **Size-filtered browse links** for Women, Men, and Kids are a smart UX shortcut that reduces friction once the customer decides to shop
- **Skechers Plus cross-sell** in the footer is correctly placed for a non-member welcome — plants the loyalty seed without hijacking the primary offer
- **BNPL options** (AfterPay + Klarna) and **Curbside Pickup** are both present — covers key purchase-enablement signals
- **Category nav** (Women / Men / Kids / Clothing / New Arrivals / Sale) is comprehensive and links are properly UTM-tagged with `?src=template`

## What's weak

- **No first-name personalization** — a welcome email with zero warm greeting is a missed relationship moment; this reads like a blast, not an acquisition trigger
- **HTTP image sources on the majority of assets** — logo, hero image, app store badges, social icons, utility module icons, and the tracking pixel are all served over HTTP; these will be blocked in any client enforcing HTTPS-only or MPP image proxy (Apple Mail, Outlook 2019+)
- **No featured product content visible** — the email appears to be offer code + nav + utility modules, with no curated product imagery or recommendations; for a welcome send, this is a missed opportunity to anchor the brand
- **Size-filtered links appear before category nav** — the browse-by-size module is architecturally before "Shop Additional Styles," which inverts the natural discovery flow for a first-time visitor
- **Merge error in legal copy** — the T&C redemption URL renders as `http://www.skechers.com/www.Skechers.com` — broken and unprofessional in print and mobile display
- **Plain-text version is 71% raw URLs** — no readable narrative; fails accessibility and plain-text clients entirely
- **Missing alt text on key images** — hero image, several utility icons — images-off experience is silent and unhelpful
- **SMS opt-in module present but low context** — "Let's Get Texting" appears with no framing of what SMS offers vs. email; feels like a checkbox module, not a value exchange

## Recommendations

- 1. **Fix HTTP → HTTPS on all image assets immediately.** This is not cosmetic — it's a deliverability and rendering reliability failure affecting the logo, hero, and all utility module icons. Audit the ESP template and update every `src=` reference.
- 2. **Add first-name merge field** to the opening headline or subhead. Even a simple "Welcome, [First Name]" changes the register of this email.
- 3. **Fix the doubled-domain merge error** in legal copy (`www.skechers.com/www.Skechers.com`). This is likely a Salesforce Marketing Cloud template variable that isn't resolving — check the `%%=RedirectTo(...)=%%` or static text block in the footer.
- 4. **Add alt text to all images** — especially the hero and any image-linked CTAs. Users with images off should still understand the offer.
- 5. **Include at least one featured product module** — a 3-up product grid (bestsellers or top-rated) between the hero and the utility footer would dramatically increase relevance and give a new subscriber a reason to click beyond just redeeming the code.
- 6. **Reorder modules** — hero → product grid → category nav → size shortcuts → utility footer. The size-filtered links should come after product exploration, not before.
- 7. **Rewrite the plain-text version** with actual copy, not just a URL list. At minimum: offer headline, promo code, expiry, and a primary CTA link.

## Full review
## Walker Audit — Skechers Welcome Email
**Subject:** Your 20% Off Welcome Offer is waiting!
**Campaign:** TRG_US_EN_NONMEMWELCOME_3 | **Date:** 2026-03-15

---

### 1. Executive Summary

This is the non-member welcome trigger — the first impression email for new Skechers subscribers. The core mechanics are in place: a unique personalized promo code, a clear expiration date, and a full utility footer. But the execution underdelivers for a welcome email. There's no first-name personalization, no featured product imagery visible in the structured content, and the email leads with size-filtered browse links before the visitor has any reason to know what they want. The real damage is technical: the majority of image assets are served over HTTP, meaning a significant portion of renders — especially in Apple Mail with Mail Privacy Protection — will display broken images on what should be a high-conversion first touchpoint. A merge error in the legal copy produces a broken link. Together, these issues drag down what should be a reliable acquisition closer.

---

### 2. Business Impact Score: **5 / 10**

The welcome offer itself is sound and the promo code is unique per recipient. But the HTTP image issue alone could silently fail for 30–50% of the audience depending on client mix. Broken images on a welcome email = broken first impression. The missing personalization and structural flatness compound the problem.

---

### 3. What's Working

- **Unique promo code** (WEL20-C39C3FPRRN) is present, specific, and recipient-personalized — exactly right for a welcome trigger
- **Expiration date is explicit** (April 10, 2026) — urgency is set without being vague
- **Size-filtered browse links** for Women, Men, and Kids are a smart UX shortcut that reduces friction once the customer decides to shop
- **Skechers Plus cross-sell** in the footer is correctly placed for a non-member welcome — plants the loyalty seed without hijacking the primary offer
- **BNPL options** (AfterPay + Klarna) and **Curbside Pickup** are both present — covers key purchase-enablement signals
- **Category nav** (Women / Men / Kids / Clothing / New Arrivals / Sale) is comprehensive and links are properly UTM-tagged with `?src=template`

---

### 4. What's Weak

- **No first-name personalization** — a welcome email with zero warm greeting is a missed relationship moment; this reads like a blast, not an acquisition trigger
- **HTTP image sources on the majority of assets** — logo, hero image, app store badges, social icons, utility module icons, and the tracking pixel are all served over HTTP; these will be blocked in any client enforcing HTTPS-only or MPP image proxy (Apple Mail, Outlook 2019+)
- **No featured product content visible** — the email appears to be offer code + nav + utility modules, with no curated product imagery or recommendations; for a welcome send, this is a missed opportunity to anchor the brand
- **Size-filtered links appear before category nav** — the browse-by-size module is architecturally before "Shop Additional Styles," which inverts the natural discovery flow for a first-time visitor
- **Merge error in legal copy** — the T&C redemption URL renders as `http://www.skechers.com/www.Skechers.com` — broken and unprofessional in print and mobile display
- **Plain-text version is 71% raw URLs** — no readable narrative; fails accessibility and plain-text clients entirely
- **Missing alt text on key images** — hero image, several utility icons — images-off experience is silent and unhelpful
- **SMS opt-in module present but low context** — "Let's Get Texting" appears with no framing of what SMS offers vs. email; feels like a checkbox module, not a value exchange

---

### 5. Recommendations

1. **Fix HTTP → HTTPS on all image assets immediately.** This is not cosmetic — it's a deliverability and rendering reliability failure affecting the logo, hero, and all utility module icons. Audit the ESP template and update every `src=` reference.
2. **Add first-name merge field** to the opening headline or subhead. Even a simple "Welcome, [First Name]" changes the register of this email.
3. **Fix the doubled-domain merge error** in legal copy (`www.skechers.com/www.Skechers.com`). This is likely a Salesforce Marketing Cloud template variable that isn't resolving — check the `%%=RedirectTo(...)=%%` or static text block in the footer.
4. **Add alt text to all images** — especially the hero and any image-linked CTAs. Users with images off should still understand the offer.
5. **Include at least one featured product module** — a 3-up product grid (bestsellers or top-rated) between the hero and the utility footer would dramatically increase relevance and give a new subscriber a reason to click beyond just redeeming the code.
6. **Reorder modules** — hero → product grid → category nav → size shortcuts → utility footer. The size-filtered links should come after product exploration, not before.
7. **Rewrite the plain-text version** with actual copy, not just a URL list. At minimum: offer headline, promo code, expiry, and a primary CTA link.

---

### 6. Bottom Line

A broken-image, no-personalization welcome email on the first touchpoint with a new customer is a costly miss. The promo code works, the legal is there, and the utility modules are complete — but the HTTP asset crisis and missing merge fields mean a percentage of recipients will see a degraded or broken experience at the exact moment the brand should be making its best impression. Fix the HTTPS issue as a P1. The personalization and product content gaps are the next tier.

---

### 7. Evidence

**Overall purpose of the email**
Non-member welcome trigger (TRG_US_EN_NONMEMWELCOME_3) designed to drive first purchase via a 20% discount code. Correct use case for the trigger type.

**Hero / primary value proposition**
"Your 20% Off Welcome Offer is waiting" with code WEL20-C39C3FPRRN. Offer is clear and correctly personalized per recipient. No visible hero image confirmed as rendering (given HTTP src issues). Expiry is present and specific.

**Membership / benefits section**
Skechers Plus pitch appears in the lower utility block — "Free Shipping + Returns on All Orders. Plus Extra Perks!" with a JOIN NOW CTA. Placement is appropriate for a non-member welcome, but it's buried below four other utility modules. For a customer who hasn't yet purchased, this could be higher in the fold with one concrete benefit called out (e.g., free shipping on every order).

**Product discoverability / recommendation modules**
No curated product imagery or recommendation carousel is visible in the content structure. The email relies entirely on category navigation and size-filtered browse links to drive product discovery — a passive approach. A first-time visitor has no anchoring product context from this email.

**Utility / secondary modules**
Five secondary modules are present: SMS opt-in, App Download (iOS + Android), Curbside Pickup, Shop Now Pay Later (AfterPay + Klarna), and Find a Store. This is a complete utility bar. The SMS module's value proposition is thin ("exclusive offers" only); App and BNPL modules are appropriate but all image assets in these modules are HTTP and likely broken.

**Email-to-site continuity**
Category links and size-filtered links include `?src=template` or size parameters — tracking and landing page continuity is in place for the main navigation. The welcome offer promo code path (`/` homepage) is the primary CTA destination, which is broad; a dedicated landing page filtered by bestsellers or new arrivals would improve conversion continuity.

**Bugs / friction / clarity issues**
- **Critical:** Majority of image `src` attributes use `http://` — logo, hero, app badges, utility icons all affected. Will render broken in Apple Mail (MPP), Outlook 2019+, and any client enforcing HTTPS. QA flagged 10+ instances.
- **Critical:** Merge/template error in legal copy — `http://www.skechers.com/www.Skechers.com` is a broken URL from an unresolved domain concatenation variable. Fails to link correctly on both web and mobile.
- **Moderate:** 4 images confirmed missing alt text — including the hero image and multiple unnamed utility icons. Images-off rendering is silent.
- **Moderate:** Plain text body is 71% raw URLs with no readable narrative — fails accessibility, plain-text clients, and any spam filter that scores on plain-text quality.
- **Low:** SPF/DKIM authentication status unverified via AgentMail relay — worth confirming deliverability posture for the welcome trigger series.
## Recent history

- [[2026-03-16-it-s-back-in-stock-at-skechers-com]] — 5/10 (2026-03-13)
- [[2026-03-16-you-ve-still-got-20-off]] — 5/10 (2026-03-12)
- [[2026-03-12-thanks-for-completing-your-skechers-plus-account-fresh]] — 7/10 (2026-03-12)

