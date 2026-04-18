---
slug: 2026-03-19-last-call-to-use-your-20-off-welcome-offer
type: email
date: 2026-03-18
persona: walker
score: "4/10"
sender: SKECHERS
subject: Last Call to use your 20% Off Welcome Offer!
tags: [email, score-4, sender/skechers]
---
# Last Call to use your 20% Off Welcome Offer!
**Score:** 4/10 · **Type:** Email audit · **2026-03-18**
## Executive summary

- **SKECHERS** | `TRG_US_EN_NONMEMWELCOME_4` | 2026-03-18 | **Score: 4/10**
- This is NONMEMWELCOME_4 — the "Last Call" close in Skechers' non-member welcome series, targeting subscribers who haven't converted on a 20% first-purchase discount before April 10. The urgency register is correct for a fourth and final touch. Compared to prior sends, there is one meaningful structural improvement: a personalized product recommendation module (iGoDigital) with six product tiles gives the email something to actually shop beyond category links — a real step up from the navigation-only approach in NONMEMWELCOME_3.
- Everything else is familiar. The same HTTP image crisis persists across the logo, utility icons, app store badges, social icons, and tracking pixel. The same doubled-domain merge error reappears in legal copy. No first-name personalization. The product recommendation tiles render their anchor text as literal "PRODUCT" in the plain-text layer — an integration gap. At send four, these are no longer isolated bugs. They are an unaddressed pattern the QA process is not catching.

## What's working

- "Last Call" subject line is appropriately urgent without being hyperbolic — correct tone for a fourth and final touch
- Promo code WEL20-C39C3FPRRN is present, consistent, and recipient-specific — redemption doesn't require a click
- iGoDigital personalized product recommendation module is now present with six product tiles — a genuine structural improvement over NONMEMWELCOME_3, which had no product content at all
- SHOP BEST SELLERS and SHOP NEW ARRIVALS CTAs give undecided browsers clear discovery paths beyond the homepage
- JOIN NOW Skechers Plus CTA creates a fallback conversion path — a non-buyer can still become a loyalty member
- Full utility footer (SMS, App, AfterPay, Klarna, Curbside, Store Locator) is complete and consistent
- Category nav (Women / Men / Kids / Clothing / New Arrivals / Sale) is present and UTM-tagged with ?src=template

## What's weak

- **HTTP image crisis — unchanged across four sends.** The logo, hero, SMS module icon, app store badges, utility icons, AfterPay logo, and social icons are all served over HTTP. Many recipients see a broken shell.
- **No first-name personalization** — four emails into a "welcome" series, the subscriber is still addressed generically.
- **"PRODUCT" as anchor text on all six product rec tiles** — the iGoDigital text-layer integration is not receiving product names. Six identical meaningless links. If images also fail (which HTTP sourcing makes likely), the product module contributes nothing.
- **Doubled-domain merge error in legal copy** — `http://www.skechers.com/www.Skechers.com` is present again, identical to every prior send. It hasn't been touched.
- **Missing alt text on hero image and four additional images** — images-off experience is silent on the primary offer element
- **No explicit expiry callout in the body** — "Last Call" lands in the subject line, but a recipient who sees broken images has no visible text reinforcing the April 10 deadline
- **Plain-text body is almost entirely raw URLs** — no readable narrative; fails plain-text clients and accessibility requirements

## Recommendations

- 1. **Fix HTTP → HTTPS at the master template level.** This has shipped four times. One fix in the SFMC template propagates across all future sends. Escalate to whoever owns the image CDN configuration.
- 2. **Fix the doubled-domain URL in legal copy.** The `http://www.skechers.com/www.Skechers.com` string is a static content block error. Find it in SFMC, correct it once.
- 3. **Fix "PRODUCT" anchor text in the iGoDigital integration.** Product names or model numbers need to populate the plain-text link label. Coordinate with the ESP or iGoDigital on the text-layer binding.
- 4. **Add first-name personalization to subject or hero headline.** "Last call, [First Name] — your 20% offer expires April 10" costs one merge field and meaningfully changes the register.
- 5. **Add a visible text expiry callout in the body.** "Offer expires April 10, 2026" as a text element, not only in fine print. Image-blocked recipients need to see the deadline.
- 6. **Add descriptive alt text to the hero and all product tiles.** The offer should land in text even when images don't render.
- 7. **Institute a pre-send QA gate that blocks on HTTP image sources.** Four sends, same failure. The gate doesn't exist or doesn't block — it should.

## Full review
## Last Call to use your 20% Off Welcome Offer!
**SKECHERS** | `TRG_US_EN_NONMEMWELCOME_4` | 2026-03-18 | **Score: 4/10**

---

### 1. Executive Summary

This is NONMEMWELCOME_4 — the "Last Call" close in Skechers' non-member welcome series, targeting subscribers who haven't converted on a 20% first-purchase discount before April 10. The urgency register is correct for a fourth and final touch. Compared to prior sends, there is one meaningful structural improvement: a personalized product recommendation module (iGoDigital) with six product tiles gives the email something to actually shop beyond category links — a real step up from the navigation-only approach in NONMEMWELCOME_3.

Everything else is familiar. The same HTTP image crisis persists across the logo, utility icons, app store badges, social icons, and tracking pixel. The same doubled-domain merge error reappears in legal copy. No first-name personalization. The product recommendation tiles render their anchor text as literal "PRODUCT" in the plain-text layer — an integration gap. At send four, these are no longer isolated bugs. They are an unaddressed pattern the QA process is not catching.

---

### 2. Business Impact Score

**4/10** — The urgency mechanic and product recs are the right ideas, but when the same infrastructure failures ship unremediated across every email in the series, the score reflects the pattern, not just this send. The 18% QA pass rate is essentially unchanged from prior sends (21% on NONMEMWELCOME_3).

---

### 3. What's Working

- "Last Call" subject line is appropriately urgent without being hyperbolic — correct tone for a fourth and final touch
- Promo code WEL20-C39C3FPRRN is present, consistent, and recipient-specific — redemption doesn't require a click
- iGoDigital personalized product recommendation module is now present with six product tiles — a genuine structural improvement over NONMEMWELCOME_3, which had no product content at all
- SHOP BEST SELLERS and SHOP NEW ARRIVALS CTAs give undecided browsers clear discovery paths beyond the homepage
- JOIN NOW Skechers Plus CTA creates a fallback conversion path — a non-buyer can still become a loyalty member
- Full utility footer (SMS, App, AfterPay, Klarna, Curbside, Store Locator) is complete and consistent
- Category nav (Women / Men / Kids / Clothing / New Arrivals / Sale) is present and UTM-tagged with ?src=template

---

### 4. What's Weak

- **HTTP image crisis — unchanged across four sends.** The logo, hero, SMS module icon, app store badges, utility icons, AfterPay logo, and social icons are all served over HTTP. Many recipients see a broken shell.
- **No first-name personalization** — four emails into a "welcome" series, the subscriber is still addressed generically.
- **"PRODUCT" as anchor text on all six product rec tiles** — the iGoDigital text-layer integration is not receiving product names. Six identical meaningless links. If images also fail (which HTTP sourcing makes likely), the product module contributes nothing.
- **Doubled-domain merge error in legal copy** — `http://www.skechers.com/www.Skechers.com` is present again, identical to every prior send. It hasn't been touched.
- **Missing alt text on hero image and four additional images** — images-off experience is silent on the primary offer element
- **No explicit expiry callout in the body** — "Last Call" lands in the subject line, but a recipient who sees broken images has no visible text reinforcing the April 10 deadline
- **Plain-text body is almost entirely raw URLs** — no readable narrative; fails plain-text clients and accessibility requirements

---

### 5. Recommendations

1. **Fix HTTP → HTTPS at the master template level.** This has shipped four times. One fix in the SFMC template propagates across all future sends. Escalate to whoever owns the image CDN configuration.
2. **Fix the doubled-domain URL in legal copy.** The `http://www.skechers.com/www.Skechers.com` string is a static content block error. Find it in SFMC, correct it once.
3. **Fix "PRODUCT" anchor text in the iGoDigital integration.** Product names or model numbers need to populate the plain-text link label. Coordinate with the ESP or iGoDigital on the text-layer binding.
4. **Add first-name personalization to subject or hero headline.** "Last call, [First Name] — your 20% offer expires April 10" costs one merge field and meaningfully changes the register.
5. **Add a visible text expiry callout in the body.** "Offer expires April 10, 2026" as a text element, not only in fine print. Image-blocked recipients need to see the deadline.
6. **Add descriptive alt text to the hero and all product tiles.** The offer should land in text even when images don't render.
7. **Institute a pre-send QA gate that blocks on HTTP image sources.** Four sends, same failure. The gate doesn't exist or doesn't block — it should.

---

### 6. Bottom Line

The "Last Call" frame is the right call for a final welcome touch. The iGoDigital product recs are a genuine step forward. But delivering urgency inside a broken visual environment — missing images, generic "PRODUCT" link text, and a recurring merge error in legal copy — diminishes the push. The issues are inherited, not new. Fix the template master before the next series launches; the strategy will carry itself.

---

### 7. Evidence

**Overall purpose of the email**
Final send in the non-member welcome series (TRG_US_EN_NONMEMWELCOME_4_12022025). Goal is to close unconverted subscribers on a 20% first-purchase discount before April 10 expiry. Four-touch escalation logic is appropriate; "Last Call" is the correct urgency register.

**Hero / primary value proposition**
"LAST CALL! 20% OFF YOUR FIRST PURCHASE*" with code WEL20-C39C3FPRRN and SHOP NOW CTA. Offer clarity is high. Hero image (bcc16007) has no alt text; if HTTP-blocked, the hero renders silently. The plain-text promo code is present and functional regardless of image state.

**Membership / benefits section**
Skechers Plus appears in the lower utility block — "Free Shipping + Returns on All Orders. Plus Extra Perks!" with a JOIN NOW CTA. Appropriate placement for a non-member audience, but buried below five competing utility modules. One concrete benefit differentiating Plus from the promo code (e.g., free shipping on *every* order, not just this one) would strengthen the pitch.

**Product discoverability / recommendation modules**
iGoDigital recs are present: six product tiles from the rr/v2 endpoint. Structural improvement over prior sends. The critical gap: all six tiles use "PRODUCT" as their plain-text anchor text — the text-layer integration is not receiving product names. SHOP BEST SELLERS and SHOP NEW ARRIVALS CTAs provide static fallback paths. If product images break (likely, given HTTP sourcing), the recommendation module contributes nothing visible.

**Utility / secondary modules**
Five modules: SMS opt-in (Text SKECHERS to 83828), App Download (iOS + Android), Curbside Pickup, BNPL (AfterPay + Klarna), Find a Store. Coverage is complete. All utility module image assets — app store badges, AfterPay logo, module icons, social icons — are served over HTTP and will break in most modern clients.

**Email-to-site continuity**
Primary CTA lands on the skechers.com homepage — broad for a last-chance close. Best Sellers and New Arrivals CTAs link to appropriately filtered sections. Category nav includes ?src=template tracking. A landing page scoped to bestsellers or top-rated styles would tighten conversion continuity for a subscriber who has deferred four times.

**Bugs / friction / clarity issues**
- **Critical:** HTTP image sources on 12+ assets — logo, hero, utility icons, app badges, AfterPay logo, social icons, ink1000 tracking pixel. Fourth send with same failure. QA flagged 11 HTTP image warnings.
- **Critical:** Doubled-domain merge error in T&C legal copy — `http://www.skechers.com/www.Skechers.com` — static content block error, unaddressed across the full series.
- **Moderate:** "PRODUCT" anchor text on all six product rec tiles — iGoDigital text-layer integration not passing product names. Not useful to any recipient in any render environment.
- **Moderate:** Missing alt text on hero image and four other images — primary offer vehicle is silent when images don't load.
- **Moderate:** Plain-text body is almost entirely raw URLs — no readable narrative copy.
- **Low:** SPF/DKIM authentication unverified via AgentMail relay — deliverability posture for the series is unconfirmed.

---

Ready to write this to the audits directory and update the index when you approve the file write.
## Recent history

- [[2026-03-19-we-re-taking-00s-running-style-to-the-streets]] — 6/10 (2026-03-18)
- [[2026-03-18-most-iconic-jerseys-from-the-past-decades]] — 6/10 (2026-03-18)
- [[2026-03-17-unlock-more-rewards-with-the-adidas-app]] — 4/10 (2026-03-17)

