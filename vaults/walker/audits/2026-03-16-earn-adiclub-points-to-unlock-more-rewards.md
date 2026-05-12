---
slug: 2026-03-16-earn-adiclub-points-to-unlock-more-rewards
type: email
date: 2026-03-14
persona: walker
score: "5/10"
sender: adidas
subject: Earn adiClub points to unlock more rewards
tags: [email, score-5, sender/adidas]
---
# Earn adiClub points to unlock more rewards
**Score:** 5/10 · **Type:** Email audit · **2026-03-14**
## Executive summary

- **From:** adidas (adidas@us-news.adidas.com)
- **Subject:** Earn adiClub points to unlock more rewards
- **Date:** 2026-03-15
- This is not a Skechers email. It is a competitor send from adidas, and it landed in Walker's monitoring inbox — likely via a list signup used for competitive tracking. It is reviewed here as competitive intelligence.
- The email is an adiClub loyalty onboarding/engagement piece with a clear mission: educate members on how to earn points and drive re-engagement with the program. The structural concept is solid — multiple earn vectors, a clear dual-points explanation, and a "Complete my profile" retention play. But the execution is materially broken. Staging image URLs shipped in a live production send, a font CDN is returning 403s, the personalization greeting is empty ("Hi ,"), and a primary educational destination link is dead. For a loyalty email — where trust and polish directly affect program credibility — these are serious failures.

## What's working

- **Multi-vector earn structure is clear.** Three earn pathways — purchase (10 pts/$1), referral (50 pts), and app activity — are laid out with specific point values. This specificity drives action better than vague "earn rewards" messaging.
- **Dual-points system explanation is well-handled.** Explaining Level points vs. Points-to-spend in the same send avoids confusion downstream and reduces support load. This is a mature loyalty communication tactic worth studying.
- **Referral incentive is specific and high-value.** 50 points for helping others find their fit is a concrete ask with a concrete reward — stronger than most referral copy.
- **App integration as an earn vector is differentiated.** Tying loyalty to the adidas Running app creates cross-product stickiness that extends beyond purchase. Smart for a brand with an active fitness community.
- **"Complete my profile" module.** Presence of a profile completion CTA suggests a thoughtful onboarding journey — this type of progressive engagement mechanic improves segmentation and personalization over time.

## What's weak

- **Staging image domain in a live send.** Multiple images load from `image.staging.link.adidas.com`. This is a production pipeline failure — staging assets can be pulled or rate-limited at any point, breaking the email entirely post-send. This is a high-severity defect.
- **Font CDN returning 403 across the board.** Six AdihausDIN and adineuePRO font files from `s3-eu-west-1.amazonaws.com` are blocked. Brand typography falls back to system fonts — brand consistency is lost.
- **Empty personalization greeting.** "Hi ," — a blank name field made it to deployment. For a loyalty email targeting identified members, this is a CRM data pipeline failure that breaks the relationship tone immediately.
- **Broken "Learn more about points" destination.** The `go.adidas.com` link returns 403 — the primary educational CTA in the points explanation module goes nowhere.
- **HTTP image sources.** Arrow images pull from `http://image.link.adidas.com` — non-HTTPS sources are blocked by default in most modern email clients, leaving broken icon slots.
- **No product imagery or discovery.** The email is 100% loyalty mechanics with zero product exposure. A single product rail or featured item would bridge points motivation with purchase intent and improve conversion value.
- **Plain text version is unusable.** Over 70% of the text body is raw encoded URLs. Any recipient on a text-only client sees gibberish.
- **Missing alt text on most images.** If images are blocked (common in desktop clients), the email loses almost all its visual communication — there's no fallback text layer.

## Recommendations

- 1. **Immediately audit the image pipeline.** Staging domain in production is not a QA catch — it is a deployment process failure. Add an environment validation step that fails a send if staging domains are detected in image src attributes.
- 2. **Fix the go.adidas.com points link before the next send in this series.** A broken educational CTA in a loyalty onboarding flow directly reduces program comprehension and retention.
- 3. **Investigate and fix the CRM merge field failure.** The empty greeting slot suggests the name field is not populated at the point of send for a segment of the list. This needs a conditional fallback (e.g., "Hi there,") at minimum, and root-cause investigation.
- 4. **Migrate all image sources to HTTPS.** The HTTP arrow images should have been caught in QA. Enforce HTTPS-only image sources as a send-time check.
- 5. **Resolve font CDN permissions.** The S3 bucket policy appears to be blocking cross-origin requests. Either open access or migrate font hosting to a CDN configured for email.
- 6. **Add a product discovery module.** Even a single 2-up or 3-up product row tied to the member's category (e.g., "Earn on these — running shoes, training gear") would materially improve this email's revenue contribution.
- 7. **Fix the plain text version.** Strip tracking URLs from the text body; substitute readable link labels and destination context.

## Full review
**WALKER AUDIT — COMPETITIVE INTELLIGENCE**
**From:** adidas (adidas@us-news.adidas.com)
**Subject:** Earn adiClub points to unlock more rewards
**Date:** 2026-03-15

---

## 1. Executive Summary

This is not a Skechers email. It is a competitor send from adidas, and it landed in Walker's monitoring inbox — likely via a list signup used for competitive tracking. It is reviewed here as competitive intelligence.

The email is an adiClub loyalty onboarding/engagement piece with a clear mission: educate members on how to earn points and drive re-engagement with the program. The structural concept is solid — multiple earn vectors, a clear dual-points explanation, and a "Complete my profile" retention play. But the execution is materially broken. Staging image URLs shipped in a live production send, a font CDN is returning 403s, the personalization greeting is empty ("Hi ,"), and a primary educational destination link is dead. For a loyalty email — where trust and polish directly affect program credibility — these are serious failures.

---

## 2. Business Impact Score

**5 / 10**

The loyalty mechanics are genuinely well-structured and worth benchmarking. The production defects drag this well below what adidas's email program is capable of.

---

## 3. What's Working

- **Multi-vector earn structure is clear.** Three earn pathways — purchase (10 pts/$1), referral (50 pts), and app activity — are laid out with specific point values. This specificity drives action better than vague "earn rewards" messaging.
- **Dual-points system explanation is well-handled.** Explaining Level points vs. Points-to-spend in the same send avoids confusion downstream and reduces support load. This is a mature loyalty communication tactic worth studying.
- **Referral incentive is specific and high-value.** 50 points for helping others find their fit is a concrete ask with a concrete reward — stronger than most referral copy.
- **App integration as an earn vector is differentiated.** Tying loyalty to the adidas Running app creates cross-product stickiness that extends beyond purchase. Smart for a brand with an active fitness community.
- **"Complete my profile" module.** Presence of a profile completion CTA suggests a thoughtful onboarding journey — this type of progressive engagement mechanic improves segmentation and personalization over time.

---

## 4. What's Weak

- **Staging image domain in a live send.** Multiple images load from `image.staging.link.adidas.com`. This is a production pipeline failure — staging assets can be pulled or rate-limited at any point, breaking the email entirely post-send. This is a high-severity defect.
- **Font CDN returning 403 across the board.** Six AdihausDIN and adineuePRO font files from `s3-eu-west-1.amazonaws.com` are blocked. Brand typography falls back to system fonts — brand consistency is lost.
- **Empty personalization greeting.** "Hi ," — a blank name field made it to deployment. For a loyalty email targeting identified members, this is a CRM data pipeline failure that breaks the relationship tone immediately.
- **Broken "Learn more about points" destination.** The `go.adidas.com` link returns 403 — the primary educational CTA in the points explanation module goes nowhere.
- **HTTP image sources.** Arrow images pull from `http://image.link.adidas.com` — non-HTTPS sources are blocked by default in most modern email clients, leaving broken icon slots.
- **No product imagery or discovery.** The email is 100% loyalty mechanics with zero product exposure. A single product rail or featured item would bridge points motivation with purchase intent and improve conversion value.
- **Plain text version is unusable.** Over 70% of the text body is raw encoded URLs. Any recipient on a text-only client sees gibberish.
- **Missing alt text on most images.** If images are blocked (common in desktop clients), the email loses almost all its visual communication — there's no fallback text layer.

---

## 5. Recommendations

1. **Immediately audit the image pipeline.** Staging domain in production is not a QA catch — it is a deployment process failure. Add an environment validation step that fails a send if staging domains are detected in image src attributes.
2. **Fix the go.adidas.com points link before the next send in this series.** A broken educational CTA in a loyalty onboarding flow directly reduces program comprehension and retention.
3. **Investigate and fix the CRM merge field failure.** The empty greeting slot suggests the name field is not populated at the point of send for a segment of the list. This needs a conditional fallback (e.g., "Hi there,") at minimum, and root-cause investigation.
4. **Migrate all image sources to HTTPS.** The HTTP arrow images should have been caught in QA. Enforce HTTPS-only image sources as a send-time check.
5. **Resolve font CDN permissions.** The S3 bucket policy appears to be blocking cross-origin requests. Either open access or migrate font hosting to a CDN configured for email.
6. **Add a product discovery module.** Even a single 2-up or 3-up product row tied to the member's category (e.g., "Earn on these — running shoes, training gear") would materially improve this email's revenue contribution.
7. **Fix the plain text version.** Strip tracking URLs from the text body; substitute readable link labels and destination context.

---

## 6. Bottom Line

For Walker's purposes as competitive intelligence: adidas's adiClub loyalty communication framework is sophisticated — the dual-points architecture, multi-earn-vector structure, and app-integrated earn pathway are all worth benchmarking against Skechers' loyalty email program. The conceptual design is ahead of most loyalty emails in the space.

But adidas shipped this with a staging environment leak, broken fonts, a dead link, and a blank greeting — failures that would be embarrassing at any tier, let alone from a global brand with this email volume. Skechers should not take comfort from this; it reinforces that production QA discipline is a real competitive advantage. The Skechers email program has room to outperform adidas on execution quality, which is the part the recipient actually experiences.

---

## 7. Evidence

**Overall purpose of the email**
Loyalty program onboarding/engagement. Educates members on adiClub earn mechanics and drives re-engagement through points accumulation pathways. Secondary goal: profile completion and app adoption.

**Hero / primary value proposition**
"UNLOCK MORE REWARDS" — with "Earn 10 points for every $1 spent in-store or online" as the anchor. Straightforward and specific. No lifestyle imagery visible in the text render; the hero appears to be copy-led rather than image-led, though image assets are present and likely serve as visual anchors if rendering correctly.

**Membership / benefits section**
Well-structured dual-points explanation (Level points vs. Points-to-spend) placed mid-email. This is the most substantive content in the email and earns its real estate. "Learn more about points" CTA links to a broken destination — undermining the section's entire purpose.

**Product discoverability / recommendation modules**
Absent. There are no product modules, featured items, or category links beyond the nav bar (MEN / WOMEN / KIDS / STORE FINDER). This is a missed opportunity in a loyalty email where points and products should be connected explicitly.

**Utility / secondary modules**
- "Complete my profile" CTA — useful retention mechanic, appears twice (suggesting it anchors separate sections of the email)
- "Shop Now" CTA — generic; appears without product context
- Store Finder link in nav
- App earn pathway copy — no app store link visible in the text extract

**Email-to-site continuity**
Cannot be fully evaluated due to 403s on tracking links during QA probing (expected behavior for encrypted click tracking). The broken `go.adidas.com` destination for "Learn more about points" is a confirmed continuity break. Staging image domain raises concerns that other asset pipelines may have environmental mismatches.

**Bugs / friction / clarity issues**
- Staging image domain (`image.staging.link.adidas.com`) across multiple image assets — production pipeline failure
- Six font files returning 403 from S3 — brand typography not rendering
- Empty personalization: "Hi ," — CRM merge field failure
- "Learn more about points" destination (go.adidas.com) returns 403 — dead link
- HTTP-sourced arrow images — blocked in secure email clients
- Missing alt text on all major images — no fallback for image-blocked environments
- Plain text body >70% raw encoded URLs — text version effectively unusable
- Apparent template variable leak: `%%=Replace(@linkCoreMetrics,` visible in plain text — unrendered AMPscript/personalization tag exposed to recipients
