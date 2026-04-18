---
slug: 2026-03-16-you-ve-still-got-20-off
type: email
date: 2026-03-12
persona: walker
score: "5/10"
sender: SKECHERS
subject: "You've still got 20% off!"
tags: [email, score-5, sender/skechers]
---
# You've still got 20% off!
**Score:** 5/10 · **Type:** Email audit · **2026-03-12**
## Executive summary

- This is the second send in Skechers' non-member welcome flow — a reminder that a 20% welcome discount (WEL20-C39C3FPRRN, valid through April 10, 2026) is still on the table. The core mechanic is sound: re-nudge a prospect who didn't convert on the first touch. The problem is execution. A doubled-domain merge error lands in the legal copy, thirteen-plus images are served over HTTP and will silently break in most modern email clients, and critical images are missing alt text — meaning a significant portion of recipients likely sees a broken shell with invisible modules. The offer and structure are directionally correct; the technical quality is not.

## What's working

- **Subject line creates urgency without being hyperbolic.** "You've still got 20% off" is honest, benefit-forward, and earns the open on a second touch.
- **Promo code is prominently surfaced.** Code + CTA appear high in the email body — no hunting required.
- **Comfort technology callouts are present.** Slip-Ins, Cozy Fit, Max Cushioning, Arch Fit — these are Skechers' product differentiation pillars and they're linked correctly over HTTPS.
- **Utility footer is comprehensive.** BNPL (Afterpay, Klarna), Curbside Pickup, Find a Store, App download, SMS opt-in — the right friction-reducers are all present.
- **Skechers Plus upsell is placed appropriately.** Free shipping + returns is a meaningful conversion driver for a first-time buyer sitting on an unused promo code.

## What's weak

- **HTTP image sources are endemic.** 13+ images — including the logo, app store badges, social icons, and utility module assets — are served via `http://image.emails.skechers.com`. Gmail, Outlook, and Apple Mail all block or proxy non-HTTPS images. Many recipients see blank modules where images should render.
- **Alt text is missing on key images.** The hero image, comfort tech banner, and utility icons have no alt text fallback. When images don't load (see above), there's nothing left — not even descriptive text.
- **Doubled-domain merge error in legal copy.** The T&C reads `http://www.skechers.com/www.Skechers.com` — a classic template variable that resolved incorrectly. It's in the fine print, but it signals sloppy QA and raises deliverability flags with spam filters that parse URLs.
- **"SHOP OUR TOP COLLECTIONS" CTA is broken.** The link resolves to an unknown URL type — this is a dead click on what should be a primary engagement point.
- **No meaningful urgency framing in body copy.** The subject line does the lifting, but if the hero is broken for image-blocked recipients, there's no reinforcing text in the visible body to drive action.
- **iGoDigital product recs appear without context.** The recommendation module fires but without a headline or framing copy visible in the text layer — if images fail, the product carousel is invisible and the logic block is orphaned.

## Recommendations

- 1. **Migrate all image sources to HTTPS immediately.** `http://image.emails.skechers.com` across 13+ assets is a systemic issue — this should be a platform-level fix, not email-by-email patching.
- 2. **Add descriptive alt text to every image.** Hero, product recs, comfort tech tiles, utility icons — all of them. Alt text is the last line of defense when images block.
- 3. **Fix the "SHOP OUR TOP COLLECTIONS" link** before next send. Audit the template variable binding for this CTA.
- 4. **Fix the doubled-domain T&C URL.** The `www.Skechers.com/www.Skechers.com` merge error needs a template correction at the source. Low effort, real downside if left.
- 5. **Add a visible text fallback for the hero module.** Even a simple headline like "Your 20% welcome discount expires April 10" as a text element ensures image-blocked recipients get the message.
- 6. **Add a framing label above the recommendation module.** Something like "Picked for you" or "Top styles to try" gives context if the product images render and makes the module feel intentional rather than dropped in.

## Full review
## 1. Executive Summary

This is the second send in Skechers' non-member welcome flow — a reminder that a 20% welcome discount (WEL20-C39C3FPRRN, valid through April 10, 2026) is still on the table. The core mechanic is sound: re-nudge a prospect who didn't convert on the first touch. The problem is execution. A doubled-domain merge error lands in the legal copy, thirteen-plus images are served over HTTP and will silently break in most modern email clients, and critical images are missing alt text — meaning a significant portion of recipients likely sees a broken shell with invisible modules. The offer and structure are directionally correct; the technical quality is not.

---

## 2. Business Impact Score

**5 / 10**

The offer is competitive and the send logic is valid. But widespread image delivery failures and a visible URL bug in legal copy damage deliverability perception and brand credibility. Conversion is being lost to avoidable infrastructure errors, not strategy.

---

## 3. What's Working

- **Subject line creates urgency without being hyperbolic.** "You've still got 20% off" is honest, benefit-forward, and earns the open on a second touch.
- **Promo code is prominently surfaced.** Code + CTA appear high in the email body — no hunting required.
- **Comfort technology callouts are present.** Slip-Ins, Cozy Fit, Max Cushioning, Arch Fit — these are Skechers' product differentiation pillars and they're linked correctly over HTTPS.
- **Utility footer is comprehensive.** BNPL (Afterpay, Klarna), Curbside Pickup, Find a Store, App download, SMS opt-in — the right friction-reducers are all present.
- **Skechers Plus upsell is placed appropriately.** Free shipping + returns is a meaningful conversion driver for a first-time buyer sitting on an unused promo code.

---

## 4. What's Weak

- **HTTP image sources are endemic.** 13+ images — including the logo, app store badges, social icons, and utility module assets — are served via `http://image.emails.skechers.com`. Gmail, Outlook, and Apple Mail all block or proxy non-HTTPS images. Many recipients see blank modules where images should render.
- **Alt text is missing on key images.** The hero image, comfort tech banner, and utility icons have no alt text fallback. When images don't load (see above), there's nothing left — not even descriptive text.
- **Doubled-domain merge error in legal copy.** The T&C reads `http://www.skechers.com/www.Skechers.com` — a classic template variable that resolved incorrectly. It's in the fine print, but it signals sloppy QA and raises deliverability flags with spam filters that parse URLs.
- **"SHOP OUR TOP COLLECTIONS" CTA is broken.** The link resolves to an unknown URL type — this is a dead click on what should be a primary engagement point.
- **No meaningful urgency framing in body copy.** The subject line does the lifting, but if the hero is broken for image-blocked recipients, there's no reinforcing text in the visible body to drive action.
- **iGoDigital product recs appear without context.** The recommendation module fires but without a headline or framing copy visible in the text layer — if images fail, the product carousel is invisible and the logic block is orphaned.

---

## 5. Recommendations

1. **Migrate all image sources to HTTPS immediately.** `http://image.emails.skechers.com` across 13+ assets is a systemic issue — this should be a platform-level fix, not email-by-email patching.
2. **Add descriptive alt text to every image.** Hero, product recs, comfort tech tiles, utility icons — all of them. Alt text is the last line of defense when images block.
3. **Fix the "SHOP OUR TOP COLLECTIONS" link** before next send. Audit the template variable binding for this CTA.
4. **Fix the doubled-domain T&C URL.** The `www.Skechers.com/www.Skechers.com` merge error needs a template correction at the source. Low effort, real downside if left.
5. **Add a visible text fallback for the hero module.** Even a simple headline like "Your 20% welcome discount expires April 10" as a text element ensures image-blocked recipients get the message.
6. **Add a framing label above the recommendation module.** Something like "Picked for you" or "Top styles to try" gives context if the product images render and makes the module feel intentional rather than dropped in.

---

## 6. Bottom Line

This email has a legitimate reason to exist and a competitive offer to deliver. The welcome flow strategy is correct. But it's being undermined by a pervasive HTTP image problem that likely breaks the visual experience for a large share of recipients, compounded by a merge error that shouldn't make it out of QA. Fix the infrastructure first; the strategy will carry itself.

---

## 7. Evidence

**Overall purpose of the email**
Second touch in the non-member welcome series (campaign ID: `NONMEMWELCOME_2`). Goal is to recover unconverted first-touch recipients with the same 20% discount before it expires. Legitimate re-engagement mechanic.

**Hero / primary value proposition**
Code `WEL20-C39C3FPRRN` with a direct link to skechers.com. Offer clarity is high. The hero image (`bcc16007`) has no alt text and the CTA text around it isn't recoverable if the image breaks.

**Membership / benefits section**
Skechers Plus appears in the utility section with free shipping + returns framing and a "JOIN NOW" CTA linking correctly to the registration page. Well-positioned for a non-member audience, though it's below the fold and competes with a lot of other modules.

**Product discoverability / recommendation modules**
iGoDigital recs are present (rr/v2 pixel fires). No visible header text or fallback in the plain-text layer. If images don't render, this module contributes nothing. Comfort technology links (Slip-Ins, Cozy Fit, Max Cushioning, Arch Fit) all point to HTTPS destinations and are structurally intact.

**Utility / secondary modules**
Nav bar (Women, Men, Kids, Clothing, New Arrivals, Sale), SMS opt-in ("Text SKECHERS to 83828"), iOS/Android app download, Curbside Pickup, Afterpay, Klarna, Find a Store. Coverage is thorough. The App Store and Google Play badge images are HTTP-served and will break. Social icons (Instagram, Facebook, YouTube) same problem.

**Email-to-site continuity**
Primary CTA and nav links use `?src=template` UTM parameters. Comfort tech links land on correct technology sub-pages. BNPL links point to correct Afterpay and Klarna landing pages. Continuity is structurally sound where links are intact.

**Bugs / friction / clarity issues**
- `http://www.skechers.com/www.Skechers.com` — doubled-domain merge error in legal T&C copy (FAIL)
- 13 images served over HTTP — expect rendering failures in Gmail, Outlook, Apple Mail
- Hero image and 3 additional images have no alt text
- "SHOP OUR TOP COLLECTIONS" CTA link resolves to invalid URL type — dead click
- Tracking pixel (`o.gif`) served over HTTP with no alt text — minor but adds to the HTTP signal
- SPF/DKIM authentication status unverified via AgentMail relay — deliverability unknown
## Recent history

- [[2026-03-12-thanks-for-completing-your-skechers-plus-account-fresh]] — 7/10 (2026-03-12)
- [[2026-03-12-these-were-a-match-made-in-heaven-for-you-rerun]] — 6/10 (2026-03-12)
- [[2026-03-12-welcome-to-skechers-fresh]] — 5/10 (2026-03-11)

