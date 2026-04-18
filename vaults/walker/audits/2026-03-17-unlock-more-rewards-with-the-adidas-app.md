---
slug: 2026-03-17-unlock-more-rewards-with-the-adidas-app
type: email
date: 2026-03-17
persona: walker
score: "4/10"
sender: adidas
subject: Unlock more rewards with the adidas app
tags: [email, score-4, sender/adidas]
---
# Unlock more rewards with the adidas app
**Score:** 4/10 · **Type:** Email audit · **2026-03-17**
## Executive summary

- **From:** adidas \<adidas@us-news.adidas.com\>
- **Subject:** Unlock more rewards with the adidas app
- **Date:** 2026-03-17
- An adidas adiClub loyalty email pushing app downloads, with a secondary product recommendation module and an online redemption fallback. The strategic intent is clear — drive app installs by tying them to rewards — but the execution has significant pre-send quality failures: broken custom font CDN, staging image URLs in a production send, multiple HTTP (non-HTTPS) asset sources, blanket missing alt text, and a plain-text version that is functionally empty (70%+ raw tracking URLs). This email reached deliverability but would render degraded or broken for a meaningful share of recipients. For a brand at adidas's scale, this is a QA process failure.
- Clear objective, coherent structure. Score dragged down by production-level technical defects that directly compromise rendering across clients and accessibility tools. The staging URL leak alone is disqualifying for a tier-1 send.

## What's working

- **Single-minded objective.** App download is the clear primary CTA, reinforced in both hero and a secondary lower placement. No ambiguity about what the email wants.
- **Redemption escape valve.** "REDEEM ONLINE" gives non-app users a path forward rather than a dead end.
- **Product discovery module present.** Four recommended products are included, which adds catalog value and gives recipients a reason to browse even if the app pitch doesn't land.
- **Standard nav bar.** MEN / WOMEN / KIDS / STORE FINDER gives recipients site navigation context and fallback entry points.

## What's weak

- **Staging image URLs in production.** Multiple hero GIFs and UI elements are served from `image.staging.link.adidas.com`. These may resolve now but will not be stable and signal a broken deployment process.
- **Broken font CDN (8 hard failures).** All six adidas custom font files (AdihausDIN-Regular/Bold, adineuePRO-Regular/Bold in both WOFF2 and TTF) are returning 403s from `s3-eu-west-1.amazonaws.com`. The email will render in system fallback fonts across all clients that attempt to load custom type.
- **HTTP image sources.** At least five images use `http://` rather than `https://`. These will be blocked or flagged by Gmail, Outlook, and Apple Mail in secure rendering modes.
- **Blanket missing alt text.** Every GIF and the majority of product images have no alt text. In image-off rendering (common in corporate and Outlook environments), the email becomes near-illegible.
- **Plain-text version is broken.** The text version is 70%+ encrypted tracking URL strings. A recipient reading plain-text gets no interpretable content — just token soup. This also tanks spam scores.
- **No personalization visible.** For a loyalty email from a membership program (adiClub), there is no apparent first-name greeting, no tier/points balance, no personalized reward context. Generic at a moment when the email explicitly promises "more rewards."

## Recommendations

- 1. **Immediately audit the deployment pipeline for staging vs. production asset resolution.** No email with `staging.*` image URLs should exit QA. Add an environment-check lint step pre-send.
- 2. **Migrate all font and image assets to a reliable CDN with HTTPS enforcement.** The S3 font bucket is returning 403 — either the bucket policy changed or the URL scheme is wrong. Fix root cause, don't patch.
- 3. **Convert all `http://` image sources to `https://`.** Non-negotiable for deliverability in 2026.
- 4. **Add alt text to every image.** At minimum: logo, hero, product tiles, and CTA buttons. For a loyalty email, the hero and CTA alt text are load-bearing.
- 5. **Rebuild the plain-text version.** It should be a readable digest of the email's key message and CTAs — not a dump of encrypted URLs.
- 6. **Inject adiClub personalization.** Subject line says "more rewards" — the email should show the recipient's current point balance or tier. Without it, the promise feels hollow.
- 7. **Investigate the seed list / inbox leak.** This email reached a non-adidas audit inbox. Adidas should audit their test and seed list management.

## Full review
## WALKER AUDIT REPORT
**From:** adidas \<adidas@us-news.adidas.com\>
**Subject:** Unlock more rewards with the adidas app
**Date:** 2026-03-17

---

## 1. Executive Summary

An adidas adiClub loyalty email pushing app downloads, with a secondary product recommendation module and an online redemption fallback. The strategic intent is clear — drive app installs by tying them to rewards — but the execution has significant pre-send quality failures: broken custom font CDN, staging image URLs in a production send, multiple HTTP (non-HTTPS) asset sources, blanket missing alt text, and a plain-text version that is functionally empty (70%+ raw tracking URLs). This email reached deliverability but would render degraded or broken for a meaningful share of recipients. For a brand at adidas's scale, this is a QA process failure.

---

## 2. Business Impact Score: 4/10

Clear objective, coherent structure. Score dragged down by production-level technical defects that directly compromise rendering across clients and accessibility tools. The staging URL leak alone is disqualifying for a tier-1 send.

---

## 3. What's Working

- **Single-minded objective.** App download is the clear primary CTA, reinforced in both hero and a secondary lower placement. No ambiguity about what the email wants.
- **Redemption escape valve.** "REDEEM ONLINE" gives non-app users a path forward rather than a dead end.
- **Product discovery module present.** Four recommended products are included, which adds catalog value and gives recipients a reason to browse even if the app pitch doesn't land.
- **Standard nav bar.** MEN / WOMEN / KIDS / STORE FINDER gives recipients site navigation context and fallback entry points.

---

## 4. What's Weak

- **Staging image URLs in production.** Multiple hero GIFs and UI elements are served from `image.staging.link.adidas.com`. These may resolve now but will not be stable and signal a broken deployment process.
- **Broken font CDN (8 hard failures).** All six adidas custom font files (AdihausDIN-Regular/Bold, adineuePRO-Regular/Bold in both WOFF2 and TTF) are returning 403s from `s3-eu-west-1.amazonaws.com`. The email will render in system fallback fonts across all clients that attempt to load custom type.
- **HTTP image sources.** At least five images use `http://` rather than `https://`. These will be blocked or flagged by Gmail, Outlook, and Apple Mail in secure rendering modes.
- **Blanket missing alt text.** Every GIF and the majority of product images have no alt text. In image-off rendering (common in corporate and Outlook environments), the email becomes near-illegible.
- **Plain-text version is broken.** The text version is 70%+ encrypted tracking URL strings. A recipient reading plain-text gets no interpretable content — just token soup. This also tanks spam scores.
- **No personalization visible.** For a loyalty email from a membership program (adiClub), there is no apparent first-name greeting, no tier/points balance, no personalized reward context. Generic at a moment when the email explicitly promises "more rewards."

---

## 5. Recommendations

1. **Immediately audit the deployment pipeline for staging vs. production asset resolution.** No email with `staging.*` image URLs should exit QA. Add an environment-check lint step pre-send.
2. **Migrate all font and image assets to a reliable CDN with HTTPS enforcement.** The S3 font bucket is returning 403 — either the bucket policy changed or the URL scheme is wrong. Fix root cause, don't patch.
3. **Convert all `http://` image sources to `https://`.** Non-negotiable for deliverability in 2026.
4. **Add alt text to every image.** At minimum: logo, hero, product tiles, and CTA buttons. For a loyalty email, the hero and CTA alt text are load-bearing.
5. **Rebuild the plain-text version.** It should be a readable digest of the email's key message and CTAs — not a dump of encrypted URLs.
6. **Inject adiClub personalization.** Subject line says "more rewards" — the email should show the recipient's current point balance or tier. Without it, the promise feels hollow.
7. **Investigate the seed list / inbox leak.** This email reached a non-adidas audit inbox. Adidas should audit their test and seed list management.

---

## 6. Bottom Line

Structurally sound loyalty email with a clear app-install objective, undercut by a cascade of technical failures that would have been caught by a pre-send rendering check. Staging URLs, broken font CDN, HTTP assets, and a non-functional plain-text version together represent a QA process gap, not isolated bugs. The personalization gap is a strategic miss on a membership email. Adidas has the brand and the loyalty program to do this right — this send didn't.

---

## 7. Evidence

**Overall purpose:** Drive adidas app downloads among existing adiClub members by tying the app to rewards access.

**Hero / primary value proposition:** "Unlock more rewards with the adidas app" — app download as the hero CTA. Straightforward. Hero includes an animated GIF (staging URL, font-fallback rendering). Two "Get the app" CTAs placed at hero and mid-email.

**Membership / benefits section:** adiClub is the implied framework but the email contains no visible member-specific content — no name, no points balance, no tier acknowledgment. The reward promise is generic. For a loyalty trigger email, this is a missed personalization moment.

**Product discoverability / recommendation modules:** Four recommended products are present (Recommended Product-1 through -4), with a second set of at least two more. No product names visible in plain-text extraction — image-dependent. All product image links are tracking URLs returning expected 403 probes (normal for adidas's encrypted link system). HTTP image sources on product tiles risk block in secure clients.

**Utility / secondary modules:** Standard nav bar (MEN, WOMEN, KIDS, STORE FINDER). "REDEEM ONLINE" secondary CTA provides an app-free redemption path — correct decision. "View this email online" present.

**Email-to-site continuity:** Cannot fully assess without live click resolution, but CTA destinations (app store, online redemption) are logical extensions of the email's offer. No visible UTM parameters in plain-text to confirm campaign tagging.

**Bugs / friction / clarity issues:**
- 8 hard FAIL: All custom font files returning 403 from S3 CDN — visual degradation across all clients
- Staging image URLs (`image.staging.link.adidas.com`) in a production send — deployment pipeline failure
- 5+ images served over `http://` — will be blocked by major clients in secure mode
- All GIFs and most product images missing alt text — broken in image-off environments
- Plain-text body is 70%+ raw encrypted tracking URLs — functionally unreadable, spam-signal risk
- SPF/DKIM authentication status unverified through AgentMail relay
- No personalization in a membership-framed email
## Recent history

- [[2026-03-17-anthony-edwards-2-red-black-available-now]] — 6/10 (2026-03-17)
- [[2026-03-16-tell-us-more-about-you]] — 6/10 (2026-03-16)
- [[2026-03-16-earn-adiclub-points-to-unlock-more-rewards]] — 5/10 (2026-03-14)

