---
slug: 2026-03-20-newest-drop-this-is-only-the-start
type: email
date: 2026-03-20
persona: walker
score: "6/10"
sender: adidas
subject: "Newest drop: this is only the start"
tags: [email, score-6, sender/adidas]
---
# Newest drop: this is only the start
**Score:** 6/10 · **Type:** Email audit · **2026-03-20**
## Executive summary

- **Note:** This email is from **adidas**, not Skechers. It landed in the monitored inbox as part of the session stream. Full review applied to adidas as sender.
- **Date:** March 20, 2026 | **Sender:** adidas | **Type:** US Static Newsletter (DaVinci Personalization)
- A personalized product discovery newsletter built on Movable Ink's DaVinci AI engine. The concept is sound — algorithmically surfaced picks wrapped in a "this week's top drops" frame. But the execution has a meaningful structural flaw: every CTA in the email routes to the same destination, regardless of which product module the user clicked. The live-rendered content blocks are doing the personalization work, but the link architecture doesn't carry that personalization through to the destination. The technical QA compounds this with a missing plain-text version and HTTP-served arrow icons, both of which are clean-fixable issues that shouldn't ship.
- Solid personalization infrastructure. Undermined by CTA routing that discards intent signals and a set of preventable technical defects.

## What's working

- **DaVinci personalization is the right call.** Live-rendered product modules (8 visible blocks) mean each recipient sees content tuned to their behavior. Higher ceiling than static sends.
- **Subject + preheader alignment is clean.** "Newest drop: this is only the start" + "Elevate your sneaker collection with this week's top picks" — creates appropriate intrigue for a discovery send without over-promising.
- **Footer utility is complete.** My Account, Privacy Statement, Support, Unsubscribe, adidas.com/us — all present and tracked. Table-stakes done correctly.
- **Header tracking is properly instrumented.** Logo, CTA, and product links carry distinct `af_ad` parameters for attribution.

## What's weak

- **All "SHOP NOW" CTAs point to the same URL.** The `CTA` ad parameter appears on every button, and the destination is identical across all clicks. Users clicking a specific product tile should land on that product, not a generic shop page. This wastes the personalization investment upstream.
- **Arrow icons served over HTTP.** Two instances of `b0c011a2...jpg` use `http://image.link.adidas.com`. Apple Mail, Gmail, and most modern clients block mixed-content images — these arrows break for a meaningful share of recipients.
- **No plain-text fallback.** QA confirms 0 chars. This is a deliverability and accessibility defect, not a minor omission. Spam filters weight it; screen readers depend on it.
- **Hero image missing alt text.** The top DaVinci block has no alt — dead real estate if live-render fails or images are blocked.
- **Open-tracking pixel has a URL construction error.** The QA FAIL (`unknown url type: '/g/c8a185cf...'`) suggests a malformed beacon. Open rates for this campaign may be unreliable.
- **No adiClub / membership surface.** No points nudge, tier acknowledgment, or loyalty hook visible anywhere. The email treats opted-in subscribers as anonymous shoppers.

## Recommendations

- 1. **Deep-link product CTAs.** Each DaVinci block needs a unique destination URL resolving to that product or category. Personalization is wasted if everyone lands the same place.
- 2. **Upgrade arrow image URLs to HTTPS.** One-line fix. HTTP image sources are a deployment defect that should fail QA.
- 3. **Add a plain-text version.** Even minimal (subject + CTA URL) satisfies deliverability and accessibility requirements. This should be pre-deploy checklist, not post-send audit.
- 4. **Add alt text to the hero DaVinci block.** "This week's picks for you" is sufficient fallback copy.
- 5. **Audit the open-tracking pixel construction.** Confirm whether open events recorded correctly for this send before reporting campaign metrics.
- 6. **Add an adiClub touchpoint.** One line above the product grid connects discovery content to the loyalty program without adding clutter.

## Full review
**Note:** This email is from **adidas**, not Skechers. It landed in the monitored inbox as part of the session stream. Full review applied to adidas as sender.

---

# Email Audit: adidas — "Newest drop: this is only the start"
**Date:** March 20, 2026 | **Sender:** adidas | **Type:** US Static Newsletter (DaVinci Personalization)

---

## 1. Executive Summary

A personalized product discovery newsletter built on Movable Ink's DaVinci AI engine. The concept is sound — algorithmically surfaced picks wrapped in a "this week's top drops" frame. But the execution has a meaningful structural flaw: every CTA in the email routes to the same destination, regardless of which product module the user clicked. The live-rendered content blocks are doing the personalization work, but the link architecture doesn't carry that personalization through to the destination. The technical QA compounds this with a missing plain-text version and HTTP-served arrow icons, both of which are clean-fixable issues that shouldn't ship.

---

## 2. Business Impact Score: 6/10

Solid personalization infrastructure. Undermined by CTA routing that discards intent signals and a set of preventable technical defects.

---

## 3. What's Working

- **DaVinci personalization is the right call.** Live-rendered product modules (8 visible blocks) mean each recipient sees content tuned to their behavior. Higher ceiling than static sends.
- **Subject + preheader alignment is clean.** "Newest drop: this is only the start" + "Elevate your sneaker collection with this week's top picks" — creates appropriate intrigue for a discovery send without over-promising.
- **Footer utility is complete.** My Account, Privacy Statement, Support, Unsubscribe, adidas.com/us — all present and tracked. Table-stakes done correctly.
- **Header tracking is properly instrumented.** Logo, CTA, and product links carry distinct `af_ad` parameters for attribution.

---

## 4. What's Weak

- **All "SHOP NOW" CTAs point to the same URL.** The `CTA` ad parameter appears on every button, and the destination is identical across all clicks. Users clicking a specific product tile should land on that product, not a generic shop page. This wastes the personalization investment upstream.
- **Arrow icons served over HTTP.** Two instances of `b0c011a2...jpg` use `http://image.link.adidas.com`. Apple Mail, Gmail, and most modern clients block mixed-content images — these arrows break for a meaningful share of recipients.
- **No plain-text fallback.** QA confirms 0 chars. This is a deliverability and accessibility defect, not a minor omission. Spam filters weight it; screen readers depend on it.
- **Hero image missing alt text.** The top DaVinci block has no alt — dead real estate if live-render fails or images are blocked.
- **Open-tracking pixel has a URL construction error.** The QA FAIL (`unknown url type: '/g/c8a185cf...'`) suggests a malformed beacon. Open rates for this campaign may be unreliable.
- **No adiClub / membership surface.** No points nudge, tier acknowledgment, or loyalty hook visible anywhere. The email treats opted-in subscribers as anonymous shoppers.

---

## 5. Recommendations

1. **Deep-link product CTAs.** Each DaVinci block needs a unique destination URL resolving to that product or category. Personalization is wasted if everyone lands the same place.
2. **Upgrade arrow image URLs to HTTPS.** One-line fix. HTTP image sources are a deployment defect that should fail QA.
3. **Add a plain-text version.** Even minimal (subject + CTA URL) satisfies deliverability and accessibility requirements. This should be pre-deploy checklist, not post-send audit.
4. **Add alt text to the hero DaVinci block.** "This week's picks for you" is sufficient fallback copy.
5. **Audit the open-tracking pixel construction.** Confirm whether open events recorded correctly for this send before reporting campaign metrics.
6. **Add an adiClub touchpoint.** One line above the product grid connects discovery content to the loyalty program without adding clutter.

---

## 6. Bottom Line

This email does one important thing well — it uses real personalization infrastructure instead of static batch content. But it squanders the intent signals that personalization generates by routing all clicks to the same destination. Fix the CTA linking, fix the HTTP images, add a plain-text version. Those three changes turn a mediocre click-through rate into a measurably better one.

---

## 7. Evidence

**Overall purpose:** Weekly product discovery newsletter for the US market, targeting existing subscribers with algorithmically personalized sneaker recommendations. Campaign: `20260320_DaVinciPersonalization_21707_US_March`.

**Hero / primary value proposition:** DaVinci live-rendered banner (`KeyMessageBanner`), likely tailored to the recipient's browse/purchase history. No static copy fallback. Subject line frames it as a new drop send — new product launches or restocks as the hook.

**Membership / benefits section:** Not present. No adiClub branding, points language, or tier acknowledgment in the body. Given this is a newsletter to opted-in subscribers, the absence of any loyalty reinforcement is a missed opportunity.

**Product discoverability / recommendation modules:** Eight live-rendered product blocks via DaVinci/Movable Ink (`mi.adidas.com/p/rp/...`). This is the structural core of the email — a personalized product grid rendered at open-time, not send-time (real-time inventory/pricing possible). However, all product CTAs — "SHOP NOW" button and arrow icon — resolve to the same `CTA`-tagged destination. No individual deep-linking in evidence.

**Utility / secondary modules:** Standard footer: My Account, Privacy Statement, Support, Unsubscribe, adidas.com/us. All present and tracked. App logo links to adidas homepage. No social icons.

**Email-to-site continuity:** Broken by CTA routing. The email promises personalized picks but every click drops the user at the same page. The personalization premise is established in the email and abandoned at the destination.

**Bugs / friction / clarity issues:**
- **[FAIL]** Open-tracking pixel URL malformed — `unknown url type: '/g/c8a185cf...'`. Open rate data for this send may be corrupted.
- **[FAIL]** Plain-text version is 0 characters. Deliverability and accessibility defect.
- **[WARN]** Two arrow icon images served over HTTP. Will render broken in most current email clients.
- **[WARN]** Hero DaVinci block missing alt text — no fallback if live render fails or images are disabled.
- **[WARN]** Open-tracking beacon also missing alt text and served over HTTP.
- **[WARN]** SPF/DKIM authentication status unverifiable via this relay.
## Recent history

- [[2026-03-20-more-skechers-plus-benefits-are-waiting]] — 5/10 (2026-03-20)
- [[2026-03-19-complete-your-profile-to-earn-50-adiclub-points]] — 4/10 (2026-03-19)
- [[2026-03-19-made-for-match-days-and-fans-everywhere-jamaica-home-away-jerseys]] — 6/10 (2026-03-19)

