---
slug: 2026-03-19-made-for-match-days-and-fans-everywhere-jamaica-home-away-jerseys
type: email
date: 2026-03-19
persona: walker
score: "6/10"
sender: adidas
subject: "Made for match days and fans everywhere: Jamaica Home & Away Jerseys"
tags: [email, score-6, sender/adidas]
---
# Made for match days and fans everywhere: Jamaica Home & Away Jerseys
**Score:** 6/10 · **Type:** Email audit · **2026-03-19**
## Executive summary

- **adidas — Jamaica Home & Away Jerseys**
- **Date:** 2026-03-19 | **Brand:** adidas US | **Type:** Product launch / seasonal campaign
- Focused, culturally grounded product launch email for the Jamaica Federation Home & Away jerseys ahead of FIFA World Cup 2026. The creative hook is solid — "Reggae Boyz & Reggae Girlz" signals fan identity, not just product. The module structure is tight: hero, dual-jersey SHOP NOW, cross-sell to the broader World Cup collection, and a store finder. That's a logical funnel. What undermines it is almost entirely technical: no plain-text fallback (a hard failure), six arrow CTA icons served over HTTP that will break in most modern clients, and missing alt text on key images. The email also passes on adiClub entirely, which is a notable missed opportunity given the high-affinity seasonal audience.

## What's working

- **Single-focus clarity.** The email doesn't try to do too many things. Jamaica jerseys are the hero from top to bottom.
- **Dual Home/Away presentation.** Showing both colorways in one send doubles purchase surface without requiring a second campaign.
- **"Reggae Boyz & Reggae Girlz" framing.** This is emotionally resonant — it connects the product to fan identity, not just sportswear.
- **Progressive cross-sell.** The FIFA World Cup collection module below the hero invites broader exploration without competing with the primary CTA.
- **Store finder module.** Practical add for jersey buyers. Jerseys are high-consideration; many want to see fit and fabric in person.
- **Campaign tracking is thorough.** DaVinci personalization, AppsFlyer re-engagement, full UTM tagging — attribution instrumentation is mature.

## What's weak

- **No plain-text fallback.** QA flags 0 characters. This is a hard failure — spam filters penalize it, and it breaks email in environments that can't render HTML.
- **HTTP arrow icons, six instances.** The CTA arrow images (`b0c011a2...jpg`) are served over plain HTTP. These will be blocked or rendered broken in Gmail, Apple Mail, and most modern clients that enforce HTTPS for embedded resources. Every SHOP NOW and FIND STORE NOW CTA is affected.
- **No adiClub integration.** A limited-edition World Cup jersey launch is exactly the kind of send where loyalty members should see points incentives or early-access framing. Nothing here. Compared to the adidas adiClub email reviewed earlier in this cycle, this send feels disconnected from adidas's own loyalty program.
- **Asterisk without a footnote.** "AVAILABLE ONLINE AND AT SELECT STORES.*" carries an asterisk, but there's no visible disclaimer in the email. Clicking through for a product that isn't available at a nearby store is a conversion killer.
- **"Display images to show real-time content" as visible copy.** This is a tech-layer label bleeding into user-facing content. If the real-time image block fails to render, recipients see that string verbatim — not brand-appropriate.
- **Missing alt text on hero and tracking pixel.** The hero image and one open-tracking image both lack alt text. Images-off rendering leaves the hero section completely empty.

## Recommendations

- 1. **Fix plain-text fallback immediately.** Even a stripped version of subject + primary CTA + unsubscribe is sufficient. Zero characters is indefensible.
- 2. **Migrate arrow icons to HTTPS.** The `http://image.link.adidas.com` source for CTA arrows needs to move to HTTPS. Six broken arrow icons across three CTA blocks is a significant visual degradation.
- 3. **Add alt text to the hero image.** "Jamaica Home & Away Federation Jerseys" is sufficient. Don't leave the images-off experience blank.
- 4. **Surface or remove the asterisk disclaimer.** Either include the footnote text in the email body or drop the asterisk. Phantom legal qualifiers erode trust.
- 5. **Add an adiClub touchpoint.** Even one sentence — "Members earn points on this purchase" — activates loyalty and differentiates for the program's most engaged audience.
- 6. **Replace the real-time content fallback label** with brand copy. If the live content block can't render, the fallback should be static promotional copy, not a system instruction string.

## Full review
# Walker Email Audit
**adidas — Jamaica Home & Away Jerseys**
**Date:** 2026-03-19 | **Brand:** adidas US | **Type:** Product launch / seasonal campaign

---

## 1. Executive Summary

Focused, culturally grounded product launch email for the Jamaica Federation Home & Away jerseys ahead of FIFA World Cup 2026. The creative hook is solid — "Reggae Boyz & Reggae Girlz" signals fan identity, not just product. The module structure is tight: hero, dual-jersey SHOP NOW, cross-sell to the broader World Cup collection, and a store finder. That's a logical funnel. What undermines it is almost entirely technical: no plain-text fallback (a hard failure), six arrow CTA icons served over HTTP that will break in most modern clients, and missing alt text on key images. The email also passes on adiClub entirely, which is a notable missed opportunity given the high-affinity seasonal audience.

---

## 2. Business Impact Score

**6 / 10**

The creative strategy is sound and the timing is right. The technical failures drag it down — plain-text absence is a deliverability and compliance risk, and the HTTP image issue will visually degrade the CTA experience for a meaningful share of recipients.

---

## 3. What's Working

- **Single-focus clarity.** The email doesn't try to do too many things. Jamaica jerseys are the hero from top to bottom.
- **Dual Home/Away presentation.** Showing both colorways in one send doubles purchase surface without requiring a second campaign.
- **"Reggae Boyz & Reggae Girlz" framing.** This is emotionally resonant — it connects the product to fan identity, not just sportswear.
- **Progressive cross-sell.** The FIFA World Cup collection module below the hero invites broader exploration without competing with the primary CTA.
- **Store finder module.** Practical add for jersey buyers. Jerseys are high-consideration; many want to see fit and fabric in person.
- **Campaign tracking is thorough.** DaVinci personalization, AppsFlyer re-engagement, full UTM tagging — attribution instrumentation is mature.

---

## 4. What's Weak

- **No plain-text fallback.** QA flags 0 characters. This is a hard failure — spam filters penalize it, and it breaks email in environments that can't render HTML.
- **HTTP arrow icons, six instances.** The CTA arrow images (`b0c011a2...jpg`) are served over plain HTTP. These will be blocked or rendered broken in Gmail, Apple Mail, and most modern clients that enforce HTTPS for embedded resources. Every SHOP NOW and FIND STORE NOW CTA is affected.
- **No adiClub integration.** A limited-edition World Cup jersey launch is exactly the kind of send where loyalty members should see points incentives or early-access framing. Nothing here. Compared to the adidas adiClub email reviewed earlier in this cycle, this send feels disconnected from adidas's own loyalty program.
- **Asterisk without a footnote.** "AVAILABLE ONLINE AND AT SELECT STORES.*" carries an asterisk, but there's no visible disclaimer in the email. Clicking through for a product that isn't available at a nearby store is a conversion killer.
- **"Display images to show real-time content" as visible copy.** This is a tech-layer label bleeding into user-facing content. If the real-time image block fails to render, recipients see that string verbatim — not brand-appropriate.
- **Missing alt text on hero and tracking pixel.** The hero image and one open-tracking image both lack alt text. Images-off rendering leaves the hero section completely empty.

---

## 5. Recommendations

1. **Fix plain-text fallback immediately.** Even a stripped version of subject + primary CTA + unsubscribe is sufficient. Zero characters is indefensible.
2. **Migrate arrow icons to HTTPS.** The `http://image.link.adidas.com` source for CTA arrows needs to move to HTTPS. Six broken arrow icons across three CTA blocks is a significant visual degradation.
3. **Add alt text to the hero image.** "Jamaica Home & Away Federation Jerseys" is sufficient. Don't leave the images-off experience blank.
4. **Surface or remove the asterisk disclaimer.** Either include the footnote text in the email body or drop the asterisk. Phantom legal qualifiers erode trust.
5. **Add an adiClub touchpoint.** Even one sentence — "Members earn points on this purchase" — activates loyalty and differentiates for the program's most engaged audience.
6. **Replace the real-time content fallback label** with brand copy. If the live content block can't render, the fallback should be static promotional copy, not a system instruction string.

---

## 6. Bottom Line

This is a competent, well-targeted campaign email with a clear creative premise and good structural discipline. The technical execution is what holds it back — the plain-text failure and HTTP image sources are not cosmetic issues, they're deliverability and rendering problems that will affect real conversion. Fix those and this is a strong seasonal send. Leave them and it punches below its creative weight.

---

## 7. Evidence

**Overall purpose of the email**
Product launch announcement for adidas Jamaica Federation Home & Away jerseys, targeted to US subscribers. Timed to FIFA World Cup 2026 build-up. Campaign ID `8nop7g50ow`, sent 2026-03-19.

**Hero / primary value proposition**
Full-width editorial image: Jamaica jerseys on model. Headline: "Match the energy of the Reggae Boyz & Reggae Girlz." Availability callout: "AVAILABLE ONLINE AND AT SELECT STORES.*" Primary CTA: SHOP NOW. The hero image is linked but lacks alt text — images-off renders this section blank.

**Membership / benefits section**
Absent. No adiClub mention, no points callout, no member-exclusive framing. This is a gap given adidas's active loyalty ecosystem and the collectibility of federation jerseys.

**Product discoverability / recommendation modules**
Two structured sections below the hero: (1) Jamaica jersey SHOP NOW module with dual CTAs + arrows; (2) "SHOP ALL FIFA WORLD CUP™" cross-sell module. Both sections appear to have repeated CTA instances — likely mobile/desktop structural duplication, not actual separate content blocks. Destination URLs for the cross-sell module appear identical across all instances, which is consistent with a collection landing page.

**Utility / secondary modules**
Store finder module with "FIND STORE NOW" CTA. Footer: My Account, Privacy Statement, Support, Unsubscribe, adidas.com/us. Standard adidas footer structure.

**Email-to-site continuity**
CTA destination names (Jamaica Federation Jerseys, FIFA World Cup collection, store finder) are contextually appropriate and match the email's message. Full UTM and AppsFlyer attribution parameters are present on all links. The asterisked availability claim creates a potential continuity gap if the site landing page doesn't address store availability clearly.

**Bugs / friction / clarity issues**
- [FAIL] Plain-text version is 0 characters — deliverability and compliance risk
- [FAIL] DaVinci open-tracking URL throws a link error (`unknown url type: '/g/...'`) — open-tracking pixel misconfiguration
- [WARN] Six CTA arrow images served over HTTP — will be blocked in most modern email clients, visually breaking every SHOP NOW and FIND STORE NOW button
- [WARN] Two images missing alt text: hero image and open-tracking pixel
- [WARN] "Display images to show real-time content" is a visible fallback label for the dynamic content block — user-facing text should be replaced with brand copy
- [WARN] Asterisk on availability claim has no corresponding footnote in the email body
- SPF/DKIM authentication status unknown via AgentMail relay — cannot confirm deliverability posture
