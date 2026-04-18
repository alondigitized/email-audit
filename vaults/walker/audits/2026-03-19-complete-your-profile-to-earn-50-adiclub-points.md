---
slug: 2026-03-19-complete-your-profile-to-earn-50-adiclub-points
type: email
date: 2026-03-19
persona: walker
score: "4/10"
sender: adidas
subject: Complete your profile to earn 50 adiClub points
tags: [email, score-4, sender/adidas]
---
# Complete your profile to earn 50 adiClub points
**Score:** 4/10 · **Type:** Email audit · **2026-03-19**
## Executive summary

- This is an adiClub profile-completion email with a clear single purpose: get members to fill out their profile in exchange for 50 bonus points. The strategic intent is sound — personalization data has real downstream value for adidas, and a points incentive is a reasonable lever. But the execution is riddled with production errors that undercut the message before the subscriber even opens it. A raw tracking URL renders as the preview text. Staging-environment images are baked into a live send. Custom brand fonts are 403ing. At least one primary CTA link is technically broken. The email works as a concept but fails as a deployment.

## What's working

- **Single-minded purpose.** One ask, one CTA. No dilution, no competing offers.
- **Concrete incentive.** "50 bonus points" is quantified, not vague. The subject line and body are aligned.
- **Scannable value prop.** The three-bullet "WHY UPDATE YOUR PROFILE?" block is concise and covers the member benefit angle (points), the personalization angle (relevant offers), and the utility angle (find things faster).
- **CTA copy is direct.** "Complete my profile" is unambiguous.

## What's weak

- **Preview text is a raw encoded URL.** The inbox experience is broken at first glance — subscribers see `https://click.link.adidas.com/?qs=eyJk...` instead of any meaningful hook. This alone suppresses open rates.
- **Staging assets shipped in a live send.** Multiple GIFs are being served from `image.staging.link.adidas.com` — a staging CDN — not production. This is a deployment process failure, not a content one.
- **All custom brand fonts are 403.** The entire AdihausDIN and adineuePRO typeface stack is returning access-denied from AWS S3. The email is rendering in fallback fonts for every recipient.
- **HTTP image sources.** Two arrow images use `http://` instead of `https://`. Modern email clients will block these or show broken images.
- **Broken CTA link.** One "Complete my profile" destination URL contains unencoded control characters and will fail in most clients. A broken primary CTA in a conversion email is a critical defect.
- **Duplicate module rendering.** The value prop block and both CTAs ("Complete my profile" + arrow) appear to repeat at least twice in the raw body — likely a template rendering error.
- **50 points has no stated redemption context.** New or lapsed members may not know what 50 adiClub points is worth. Without anchoring the value (e.g., "worth $X off your next order"), the incentive lands soft.
- **No urgency.** The offer has no expiry, which removes any behavioral pressure to act now vs. later.
- **Plain-text fallback is unusable.** 70%+ of the plain-text version is tracking URLs — inaccessible to screen readers and plain-text mail clients.

## Recommendations

- 1. **Fix the preview text immediately.** Insert intentional preheader copy before any tracking pixels or links. This is table-stakes for deliverability and should be a template-level control, not an afterthought.
- 2. **Resolve the staging/production CDN split before any resend.** Audit the deployment pipeline so staging hostnames cannot survive into production builds. All image URLs should reference the production CDN.
- 3. **Fix or proxy the font CDN.** The S3 font bucket is publicly inaccessible. Either move assets to a CDN that allows public reads or self-host them within the ESP template.
- 4. **Upgrade all image sources to HTTPS.** No HTTP image sources in 2026 — these will block in Gmail, Outlook, and Apple Mail.
- 5. **Fix the broken CTA link.** The malformed `go.adidas.com` destination URL with control characters needs to be re-encoded or rebuilt. Test all CTA links in a staging send before deploying.
- 6. **Eliminate the duplicate module.** The value prop and CTA block appears to render twice. This is a template bug — identify and remove the second render pass.
- 7. **Add value context to the points reward.** One sentence like "50 points = $5 toward your next order" would materially improve conversion.
- 8. **Add an offer expiry.** Even a soft deadline ("Complete your profile by [date] to claim your points") increases urgency without feeling heavy-handed.
- 9. **Rebuild the plain-text fallback.** Strip tracking URLs from plain text and replace with readable copy. This is an accessibility and deliverability baseline.

## Full review
# Walker Audit — adidas: "Complete your profile to earn 50 adiClub points"

---

## 1. Executive Summary

This is an adiClub profile-completion email with a clear single purpose: get members to fill out their profile in exchange for 50 bonus points. The strategic intent is sound — personalization data has real downstream value for adidas, and a points incentive is a reasonable lever. But the execution is riddled with production errors that undercut the message before the subscriber even opens it. A raw tracking URL renders as the preview text. Staging-environment images are baked into a live send. Custom brand fonts are 403ing. At least one primary CTA link is technically broken. The email works as a concept but fails as a deployment.

---

## 2. Business Impact Score

**4 / 10**

The core ask is legitimate and the offer is clear. The score is dragged down by compounding technical failures — staging assets, broken fonts, malformed CTA URLs — that represent genuine deliverability and brand risk, not just polish issues.

---

## 3. What's Working

- **Single-minded purpose.** One ask, one CTA. No dilution, no competing offers.
- **Concrete incentive.** "50 bonus points" is quantified, not vague. The subject line and body are aligned.
- **Scannable value prop.** The three-bullet "WHY UPDATE YOUR PROFILE?" block is concise and covers the member benefit angle (points), the personalization angle (relevant offers), and the utility angle (find things faster).
- **CTA copy is direct.** "Complete my profile" is unambiguous.

---

## 4. What's Weak

- **Preview text is a raw encoded URL.** The inbox experience is broken at first glance — subscribers see `https://click.link.adidas.com/?qs=eyJk...` instead of any meaningful hook. This alone suppresses open rates.
- **Staging assets shipped in a live send.** Multiple GIFs are being served from `image.staging.link.adidas.com` — a staging CDN — not production. This is a deployment process failure, not a content one.
- **All custom brand fonts are 403.** The entire AdihausDIN and adineuePRO typeface stack is returning access-denied from AWS S3. The email is rendering in fallback fonts for every recipient.
- **HTTP image sources.** Two arrow images use `http://` instead of `https://`. Modern email clients will block these or show broken images.
- **Broken CTA link.** One "Complete my profile" destination URL contains unencoded control characters and will fail in most clients. A broken primary CTA in a conversion email is a critical defect.
- **Duplicate module rendering.** The value prop block and both CTAs ("Complete my profile" + arrow) appear to repeat at least twice in the raw body — likely a template rendering error.
- **50 points has no stated redemption context.** New or lapsed members may not know what 50 adiClub points is worth. Without anchoring the value (e.g., "worth $X off your next order"), the incentive lands soft.
- **No urgency.** The offer has no expiry, which removes any behavioral pressure to act now vs. later.
- **Plain-text fallback is unusable.** 70%+ of the plain-text version is tracking URLs — inaccessible to screen readers and plain-text mail clients.

---

## 5. Recommendations

1. **Fix the preview text immediately.** Insert intentional preheader copy before any tracking pixels or links. This is table-stakes for deliverability and should be a template-level control, not an afterthought.
2. **Resolve the staging/production CDN split before any resend.** Audit the deployment pipeline so staging hostnames cannot survive into production builds. All image URLs should reference the production CDN.
3. **Fix or proxy the font CDN.** The S3 font bucket is publicly inaccessible. Either move assets to a CDN that allows public reads or self-host them within the ESP template.
4. **Upgrade all image sources to HTTPS.** No HTTP image sources in 2026 — these will block in Gmail, Outlook, and Apple Mail.
5. **Fix the broken CTA link.** The malformed `go.adidas.com` destination URL with control characters needs to be re-encoded or rebuilt. Test all CTA links in a staging send before deploying.
6. **Eliminate the duplicate module.** The value prop and CTA block appears to render twice. This is a template bug — identify and remove the second render pass.
7. **Add value context to the points reward.** One sentence like "50 points = $5 toward your next order" would materially improve conversion.
8. **Add an offer expiry.** Even a soft deadline ("Complete your profile by [date] to claim your points") increases urgency without feeling heavy-handed.
9. **Rebuild the plain-text fallback.** Strip tracking URLs from plain text and replace with readable copy. This is an accessibility and deliverability baseline.

---

## 6. Bottom Line

Strong concept, broken ship. The strategic use of a points incentive to drive profile completion is correct — adidas has real data-personalization upside here. But this email should not have gone out in this state. Staging assets in production, 403 fonts, a broken CTA link, and a raw URL as preview text are not cosmetic issues; they signal a QA and deployment process that failed at multiple checkpoints. Before this email runs again, it needs a hard technical pass, not just a content review.

---

## 7. Evidence

**Overall purpose:** Onboarding/activation email targeting adiClub members who have not completed their profile. The goal is data capture in exchange for a 50-point reward.

**Hero / primary value proposition:** "Help us personalize your adiClub experience" with a supporting three-bullet list (earn points, relevant offers, faster discovery). The incentive is the hook; the utility benefits are secondary framing. This is appropriately light — the ask is low-friction, so a heavy sell isn't needed.

**Membership / benefits section:** The "WHY UPDATE YOUR PROFILE?" block functions as the benefits module. It's doing the right job but the 50-point value is unanchored — without redemption context, it's an abstract number for anyone who isn't an active points tracker.

**Product discoverability / recommendation modules:** None present. This is intentional given the single-purpose nature of the email, but a thumbnail or visual of what "personalized recommendations" looks like could make the benefit more tangible.

**Utility / secondary modules:** Standard nav (MEN / WOMEN / KIDS / STORE FINDER) at the top and social icons (Instagram, YouTube, X, Pinterest) at the bottom. Both appear to render twice — a template duplication bug. The footer includes Privacy Statement and Support links, which are correct but part of the duplicated render.

**Email-to-site continuity:** Cannot be confirmed for the broken CTA link. The non-broken CTA instances point to a `go.adidas.com` deep-link that should land on the profile completion page — directionally correct if functional.

**Bugs / friction / clarity issues:**
- Preview text: raw base64-encoded tracking URL rendering as inbox snippet (critical UX failure)
- Staging CDN: `image.staging.link.adidas.com` serving GIFs in a production send
- Broken fonts: 8 font files returning 403 from S3 (AdihausDIN-Regular, AdihausDIN-Bold, adineuePRO-Regular, adineuePRO-Bold in both woff2 and woff/ttf formats)
- HTTP images: two arrow images and one GIF using `http://` — liable to block in secure clients
- Broken CTA destination: control characters in URL (`/us/welcome?pid=sfmc&tkn=...%2Fb%20UkrsPo9...`) cause a parse failure
- Duplicate rendering: value prop block, both CTA buttons, and social footer all appear to repeat
- Plain-text: 70%+ URL content, effectively inaccessible as a fallback
- Missing alt text on multiple images including the hero GIF — accessibility gap
## Recent history

- [[2026-03-19-made-for-match-days-and-fans-everywhere-jamaica-home-away-jerseys]] — 6/10 (2026-03-19)
- [[2026-03-19-last-call-to-use-your-20-off-welcome-offer]] — 4/10 (2026-03-18)
- [[2026-03-19-we-re-taking-00s-running-style-to-the-streets]] — 6/10 (2026-03-18)

