---
slug: 2026-03-19-we-re-taking-00s-running-style-to-the-streets
type: email
date: 2026-03-18
persona: walker
score: "6/10"
sender: adidas
subject: "We're taking '00s running style to the streets"
tags: [email, score-6, sender/adidas]
---
# We're taking '00s running style to the streets
**Score:** 6/10 · **Type:** Email audit · **2026-03-18**
## Executive summary

- **WALKER EMAIL AUDIT**
- *Competitive Intelligence — Adidas*
- This is not a Skechers email. It is a marketing email from adidas promoting the Adistar Control 5, a running-heritage-meets-streetwear sneaker. Reviewed here as competitive intelligence.
- The email is structurally lean and thematically focused — a single-product, lifestyle-forward push riding Y2K/00s nostalgia. Execution is competent but thin: no price, no urgency, no offer, and a Kids CTA that visibly undercuts the street-style narrative. Several technical defects including a broken store locator URL and missing plain-text version add unnecessary risk for a clean send.

## What's working

- **Single-product focus.** The Adistar Control 5 owns the email. No dilution from unrelated categories or competing campaigns.
- **Narrative coherence.** "Taking '00s running style to the streets" is tight and resonant with current trend appetite. Subject line, hero copy, and product brief all align.
- **Gender-split shop modules.** Men / Women / Kids tiles give the email breadth without cluttering the hero. Each has a discrete CTA.
- **DaVinci real-time content layer.** Personalized banner block is present — adidas is at least investing in dynamic rendering at send time.
- **Compact length.** Doesn't overstay its welcome. Fast scan path to CTA.

## What's weak

- **No conversion levers.** No price, no discount, no scarcity signal, no social proof. This is a brand impression email wearing a product email's clothes. Without any pull mechanic, click-through will be driven purely by creative interest.
- **Kids module conflicts with the creative brief.** "Street style for kids" isn't the message being set up. The SHOP KIDS tile reads as a boilerplate inclusion, not a deliberate extension of the 00s running narrative. It dilutes the positioning.
- **No membership or loyalty touchpoint.** adiClub is absent. For a newsletter audience that is presumably opted in, a loyalty hook (points, member access, early drop) would raise the floor on engagement.
- **Store locator CTA is broken.** The URL for "Shop online or at your local adidas store" has a doubled-domain bug — the destination URL is double-encoded into the click-through redirect, producing a malformed link. This is a hard fail on a functional CTA.
- **Plain-text fallback is missing entirely.** Zero characters. This is a deliverability and accessibility failure — some clients and spam filters penalize HTML-only sends.
- **Arrow navigation images served over HTTP.** Six instances of the same arrow image (`b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg`) use non-HTTPS URLs. Security-strict clients will block these, leaving broken UI elements on the gender-split modules.
- **"Display images to show real-time content" exposed as link text.** One DaVinci personalization link has its internal fallback label visible as anchor text. This is a template artifact that should never reach send.

## Recommendations

- 1. **Fix the store locator URL.** The doubled-domain encoding is a simple pre-send QA catch. Audit all redirect-wrapped URLs before deployment.
- 2. **Upgrade arrow images to HTTPS.** Six HTTP image sources is a pattern, not a one-off. Migrate the image library or update references at the template level.
- 3. **Add a plain-text version.** Non-negotiable for deliverability hygiene. Even a minimal text mirror resolves the compliance gap.
- 4. **Drop the Kids module or reframe it.** If the campaign is 00s street running, Kids is a stretch. Either remove it or rebuild the creative context to support a family angle (which this email doesn't have).
- 5. **Introduce one conversion driver.** A member-exclusive early access note, a "New Arrival" badge, or even a visible price range would give engaged readers a reason to click beyond curiosity.
- 6. **Audit DaVinci personalization fallbacks.** The exposed "Display images to show real-time content" label suggests fallback text is not being suppressed when dynamic content loads. Test rendering with images off.

## Full review
**WALKER EMAIL AUDIT**
*Competitive Intelligence — Adidas*
*Received: walker@agentmail.to | March 18, 2026*

---

## 1. Executive Summary

This is not a Skechers email. It is a marketing email from adidas promoting the Adistar Control 5, a running-heritage-meets-streetwear sneaker. Reviewed here as competitive intelligence.

The email is structurally lean and thematically focused — a single-product, lifestyle-forward push riding Y2K/00s nostalgia. Execution is competent but thin: no price, no urgency, no offer, and a Kids CTA that visibly undercuts the street-style narrative. Several technical defects including a broken store locator URL and missing plain-text version add unnecessary risk for a clean send.

---

## 2. Business Impact Score

**6 / 10**

Clear concept, clean layout. Docked for weak conversion scaffolding, a Kids audience mismatch with the creative, and preventable technical bugs.

---

## 3. What's Working

- **Single-product focus.** The Adistar Control 5 owns the email. No dilution from unrelated categories or competing campaigns.
- **Narrative coherence.** "Taking '00s running style to the streets" is tight and resonant with current trend appetite. Subject line, hero copy, and product brief all align.
- **Gender-split shop modules.** Men / Women / Kids tiles give the email breadth without cluttering the hero. Each has a discrete CTA.
- **DaVinci real-time content layer.** Personalized banner block is present — adidas is at least investing in dynamic rendering at send time.
- **Compact length.** Doesn't overstay its welcome. Fast scan path to CTA.

---

## 4. What's Weak

- **No conversion levers.** No price, no discount, no scarcity signal, no social proof. This is a brand impression email wearing a product email's clothes. Without any pull mechanic, click-through will be driven purely by creative interest.
- **Kids module conflicts with the creative brief.** "Street style for kids" isn't the message being set up. The SHOP KIDS tile reads as a boilerplate inclusion, not a deliberate extension of the 00s running narrative. It dilutes the positioning.
- **No membership or loyalty touchpoint.** adiClub is absent. For a newsletter audience that is presumably opted in, a loyalty hook (points, member access, early drop) would raise the floor on engagement.
- **Store locator CTA is broken.** The URL for "Shop online or at your local adidas store" has a doubled-domain bug — the destination URL is double-encoded into the click-through redirect, producing a malformed link. This is a hard fail on a functional CTA.
- **Plain-text fallback is missing entirely.** Zero characters. This is a deliverability and accessibility failure — some clients and spam filters penalize HTML-only sends.
- **Arrow navigation images served over HTTP.** Six instances of the same arrow image (`b0c011a2-d468-414b-a8a2-8595b3ec7b34.jpg`) use non-HTTPS URLs. Security-strict clients will block these, leaving broken UI elements on the gender-split modules.
- **"Display images to show real-time content" exposed as link text.** One DaVinci personalization link has its internal fallback label visible as anchor text. This is a template artifact that should never reach send.

---

## 5. Recommendations

1. **Fix the store locator URL.** The doubled-domain encoding is a simple pre-send QA catch. Audit all redirect-wrapped URLs before deployment.
2. **Upgrade arrow images to HTTPS.** Six HTTP image sources is a pattern, not a one-off. Migrate the image library or update references at the template level.
3. **Add a plain-text version.** Non-negotiable for deliverability hygiene. Even a minimal text mirror resolves the compliance gap.
4. **Drop the Kids module or reframe it.** If the campaign is 00s street running, Kids is a stretch. Either remove it or rebuild the creative context to support a family angle (which this email doesn't have).
5. **Introduce one conversion driver.** A member-exclusive early access note, a "New Arrival" badge, or even a visible price range would give engaged readers a reason to click beyond curiosity.
6. **Audit DaVinci personalization fallbacks.** The exposed "Display images to show real-time content" label suggests fallback text is not being suppressed when dynamic content loads. Test rendering with images off.

---

## 6. Bottom Line

Adidas sends a focused, on-trend product email that looks the part but doesn't work hard enough to convert. The 00s running narrative is credible and the layout is clean, but there's no offer, no urgency, and no loyalty integration to move a warm subscriber to a purchase decision. The Kids CTA is a structural mismatch. The technical defects — broken store URL, missing plain-text, HTTP images — are QA failures that a brand at this scale should not be shipping. Competitive takeaway for Skechers: adidas leans on brand equity where it should be leaning on conversion mechanics.

---

## 7. Evidence

**Overall purpose of the email**
Newsletter-style product launch awareness for the Adistar Control 5. Framing: running heritage brought into contemporary streetwear via 00s nostalgia. US market, English-language, sent via DaVinci-powered personalization stack on adidas' Salesforce Marketing Cloud infrastructure.

**Hero / primary value proposition**
Hero image of the Adistar Control 5 supported by headline copy: *"We're taking '00s running style to the streets"* and subtext: *"Adistar Control 5 blends running heritage with the modern era of streetwear."* No price. No CTA on the hero itself — the product name links to a PDP.

**Membership / benefits section**
Not present. adiClub is not referenced. No loyalty hook, member-exclusive framing, or points messaging anywhere in the email.

**Product discoverability / recommendation modules**
Three gender-split modules (SHOP MEN / SHOP WOMEN / SHOP KIDS), each with a lifestyle image, text CTA, and arrow icon. All three appear to link to the same Adistar Control 5 category filtered by gender segment. No additional product recommendations or related styles surfaced.

**Utility / secondary modules**
One store locator CTA: *"Shop online or at your local adidas store."* This link is broken (doubled-domain URL bug confirmed by QA). Footer contains: app logo, My Account, Privacy Statement, Support, Unsubscribe, and adidas.com/us.

**Email-to-site continuity**
Reasonable. Subject line → hero → gender CTA → PDP is a logical path. Store locator CTA is dead on arrival due to the URL bug. No landing page mismatch detected on the primary product links (tracking links unprobed, but destination structure appears correct from URL decoding).

**Bugs / friction / clarity issues**
- **[FAIL]** Doubled-domain URL on store locator CTA — link will 404 or error
- **[FAIL]** Plain-text version entirely absent (0 chars)
- **[FAIL]** DaVinci open-tracking pixel has a malformed internal URL (`unknown url type`)
- **[WARN]** 6x arrow images over HTTP — will be blocked in secure clients, breaking the shop module navigation UI
- **[WARN]** 2 images missing alt text (personalization banner + open-pixel tracking image)
- **[WARN]** "Display images to show real-time content" visible as link anchor text — DaVinci fallback label not suppressed
- **[WARN]** Authentication-Results header absent — SPF/DKIM status unverified via relay
## Recent history

- [[2026-03-18-most-iconic-jerseys-from-the-past-decades]] — 6/10 (2026-03-18)
- [[2026-03-17-unlock-more-rewards-with-the-adidas-app]] — 4/10 (2026-03-17)
- [[2026-03-17-anthony-edwards-2-red-black-available-now]] — 6/10 (2026-03-17)

