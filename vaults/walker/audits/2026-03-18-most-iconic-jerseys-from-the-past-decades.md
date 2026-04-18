---
slug: 2026-03-18-most-iconic-jerseys-from-the-past-decades
type: email
date: 2026-03-18
persona: walker
score: "6/10"
sender: adidas
subject: Most iconic jerseys from the past decades
tags: [email, score-6, sender/adidas]
---
# Most iconic jerseys from the past decades
**Score:** 6/10 · **Type:** Email audit · **2026-03-18**
## Executive summary

- **Note: This is a competitor email from Adidas, not Skechers.** It landed in Walker's monitoring inbox, likely from a subscribed test account. The audit below is provided as competitive intelligence in Walker's standard format.
- Adidas is running a FIFA World Cup™ jersey heritage campaign — clean, minimal, brand-forward. The structure is tight: logo header, real-time content banner, hero editorial, dual-CTA split (online / in-store), standard footer. The cultural hook is strong and the channel strategy is deliberate. However, the execution has meaningful technical failures: no plain-text fallback, HTTP image sources that will be blocked in modern clients, and missing alt text on the hero. The DaVinci personalization infrastructure is deployed but the send reads as effectively static. Solid brand work held back by avoidable QA debt.

## What's working

- **FIFA World Cup™ licensing** is a genuine demand driver. Tying a jersey collection to World Cup nostalgia is high-relevance positioning with a built-in audience.
- **Dual-channel CTA structure** (SHOP NOW / FIND STORE NOW) is the right call for a physical product in a campaign window — it captures both digital buyers and in-store traffic without hierarchy confusion.
- **Layout economy**: the email resists the urge to over-merchandise. One hero image, one message, two paths to purchase. That's discipline.
- **Retargeting infrastructure** is in place (AppsFlyer parameters, 30-day re-engagement window). The send is doing attribution work even on a newsletter template.
- **Responsive CSS** is comprehensive — multiple breakpoints, mobile-specific class overrides, proper viewport meta tags. The rendering foundation is solid.

## What's weak

- **No plain-text fallback.** QA shows 0 characters in the text version. This is a hard deliverability failure — some clients and spam filters require a multipart MIME message. It also kills accessibility for screen readers entirely.
- **HTTP image sources for CTA arrow icons.** Three or four arrow images are loading from `http://image.link.adidas.com` — non-HTTPS sources are blocked by Gmail, Outlook, and Apple Mail by default. The arrows are UI chrome that signals clickability; if they're gone, the CTA loses visual affordance on a meaningful share of opens.
- **Missing alt text on the hero image.** The main jersey flat-lay and one tracking pixel have no alt attributes. If images are blocked (common on first open), the hero section renders as blank space with no fallback message.
- **Asterisk with no visible footnote.** "AVAILABLE ONLINE AND AT SELECT STORES.*" carries an asterisk that appears to have no corresponding fine print in the email body. That's a compliance friction point and creates unresolved consumer expectation.
- **Duplicate CTAs pointing to identical URLs.** Both "SHOP NOW" buttons and both "FIND STORE NOW" buttons resolve to the same destination URLs respectively. Likely a slide/carousel pattern that collapsed in static view, but it reads as repetition rather than reinforcement.
- **Personalization is nominal.** The DaVinci real-time content banner exists ("Display images to show real-time content") but the send appears to be a static newsletter with no visible subscriber-level personalization in copy, product recommendations, or offers. The infrastructure overhead isn't returning signal in this execution.

## Recommendations

- 1. **Add plain-text fallback — immediately.** This is a non-negotiable for deliverability and compliance. Even a stripped version of the hero copy and both CTAs with raw destination URLs is sufficient.
- 2. **Migrate all image assets to HTTPS.** The arrow icons specifically need to move off HTTP. This is a one-time asset update that eliminates a recurring rendering failure.
- 3. **Write alt text for every content image.** The hero flat-lay should carry a meaningful description. If the image is blocked, "FIFA World Cup™ iconic jerseys" still communicates the proposition.
- 4. **Resolve the asterisk.** Either add the footnote text in the email footer or remove the asterisk. "Select stores" qualifications without definition create friction at the point of purchase intent.
- 5. **Differentiate the CTA pair visually.** If SHOP NOW and FIND STORE NOW are targeting different purchase paths, give them different visual weight — not just different label text. Online should likely be primary; store finder secondary.
- 6. **Activate the personalization layer.** If DaVinci is in the stack, use it. Even jersey category affinity or regional store proximity data would sharpen relevance on a collection this broad.

## Full review
**WALKER AUDIT — adidas | "Most iconic jerseys from the past decades"**
*Received: walker@agentmail.to | Sender: adidas@us-news.comms.adidas.com | Date: 2026-03-18*

---

## 1. Executive Summary

**Note: This is a competitor email from Adidas, not Skechers.** It landed in Walker's monitoring inbox, likely from a subscribed test account. The audit below is provided as competitive intelligence in Walker's standard format.

Adidas is running a FIFA World Cup™ jersey heritage campaign — clean, minimal, brand-forward. The structure is tight: logo header, real-time content banner, hero editorial, dual-CTA split (online / in-store), standard footer. The cultural hook is strong and the channel strategy is deliberate. However, the execution has meaningful technical failures: no plain-text fallback, HTTP image sources that will be blocked in modern clients, and missing alt text on the hero. The DaVinci personalization infrastructure is deployed but the send reads as effectively static. Solid brand work held back by avoidable QA debt.

---

## 2. Business Impact Score

**6 / 10**

Strong premise and cultural credibility undercut by a missing plain-text version (deliverability risk) and HTTP image assets that will silently break for a segment of recipients. Not a broken email, but not a clean one either.

---

## 3. What's Working

- **FIFA World Cup™ licensing** is a genuine demand driver. Tying a jersey collection to World Cup nostalgia is high-relevance positioning with a built-in audience.
- **Dual-channel CTA structure** (SHOP NOW / FIND STORE NOW) is the right call for a physical product in a campaign window — it captures both digital buyers and in-store traffic without hierarchy confusion.
- **Layout economy**: the email resists the urge to over-merchandise. One hero image, one message, two paths to purchase. That's discipline.
- **Retargeting infrastructure** is in place (AppsFlyer parameters, 30-day re-engagement window). The send is doing attribution work even on a newsletter template.
- **Responsive CSS** is comprehensive — multiple breakpoints, mobile-specific class overrides, proper viewport meta tags. The rendering foundation is solid.

---

## 4. What's Weak

- **No plain-text fallback.** QA shows 0 characters in the text version. This is a hard deliverability failure — some clients and spam filters require a multipart MIME message. It also kills accessibility for screen readers entirely.
- **HTTP image sources for CTA arrow icons.** Three or four arrow images are loading from `http://image.link.adidas.com` — non-HTTPS sources are blocked by Gmail, Outlook, and Apple Mail by default. The arrows are UI chrome that signals clickability; if they're gone, the CTA loses visual affordance on a meaningful share of opens.
- **Missing alt text on the hero image.** The main jersey flat-lay and one tracking pixel have no alt attributes. If images are blocked (common on first open), the hero section renders as blank space with no fallback message.
- **Asterisk with no visible footnote.** "AVAILABLE ONLINE AND AT SELECT STORES.*" carries an asterisk that appears to have no corresponding fine print in the email body. That's a compliance friction point and creates unresolved consumer expectation.
- **Duplicate CTAs pointing to identical URLs.** Both "SHOP NOW" buttons and both "FIND STORE NOW" buttons resolve to the same destination URLs respectively. Likely a slide/carousel pattern that collapsed in static view, but it reads as repetition rather than reinforcement.
- **Personalization is nominal.** The DaVinci real-time content banner exists ("Display images to show real-time content") but the send appears to be a static newsletter with no visible subscriber-level personalization in copy, product recommendations, or offers. The infrastructure overhead isn't returning signal in this execution.

---

## 5. Recommendations

1. **Add plain-text fallback — immediately.** This is a non-negotiable for deliverability and compliance. Even a stripped version of the hero copy and both CTAs with raw destination URLs is sufficient.
2. **Migrate all image assets to HTTPS.** The arrow icons specifically need to move off HTTP. This is a one-time asset update that eliminates a recurring rendering failure.
3. **Write alt text for every content image.** The hero flat-lay should carry a meaningful description. If the image is blocked, "FIFA World Cup™ iconic jerseys" still communicates the proposition.
4. **Resolve the asterisk.** Either add the footnote text in the email footer or remove the asterisk. "Select stores" qualifications without definition create friction at the point of purchase intent.
5. **Differentiate the CTA pair visually.** If SHOP NOW and FIND STORE NOW are targeting different purchase paths, give them different visual weight — not just different label text. Online should likely be primary; store finder secondary.
6. **Activate the personalization layer.** If DaVinci is in the stack, use it. Even jersey category affinity or regional store proximity data would sharpen relevance on a collection this broad.

---

## 6. Bottom Line

A well-conceived brand moment — the FIFA World Cup™ jersey retrospective is exactly the kind of cultural anchor that drives opens and engagement in a sports lifestyle category. The structure is clean and the dual-channel CTA is strategically correct. But this email has real technical debt: no plain-text version, HTTP images, and missing alt text are all failures that could have been caught before send. The DaVinci personalization investment isn't paying off in this execution. Skechers should benchmark the minimal layout approach and dual-channel CTA structure, while using adidas's QA gaps as a reminder that infrastructure sophistication doesn't substitute for pre-send checklist discipline.

---

## 7. Evidence

**Overall purpose of the email**
Promotional send for a FIFA World Cup™ heritage jersey collection. The campaign ID (`20260318_18032026_DaVinciPersonalization_21701_US_March`) confirms a March 2026 send window, likely timed to pre-season soccer interest or a licensed collection drop. Single-message, single-product-category focus.

**Hero / primary value proposition**
The hero is a jersey flat-lay editorial image with the headline "The iconic styles of the FIFA World Cup™ return." No price, no discount, no urgency mechanism — this is a brand/lifestyle play. The FIFA World Cup™ trademark is the hook; nostalgia and cultural cachet are the conversion drivers. Clean and confident, but passive.

**Membership / benefits section**
Absent. No loyalty program mention, no adiClub reference, no member-exclusive framing. The footer links to "My Account" but that's utility infrastructure, not a retention mechanic. This is a pure acquisition/awareness send with no loyalty layer.

**Product discoverability / recommendation modules**
No product grid, no individual SKU tiles, no price points. The email drives to a collection landing page rather than individual products. This concentrates click intent but limits browsing behavior — users who want to compare styles or prices must do that work on-site.

**Utility / secondary modules**
- Store finder module: "AVAILABLE ONLINE AND AT SELECT STORES.*" with "FIND STORE NOW" CTA — well-placed for a physical product.
- Footer: App logo (links to app), My Account, Privacy Statement, Support, adidas.com/us. Standard footer utility, nothing unusual.
- Real-time content banner slot (DaVinci-powered) is present but appears to be rendering a static asset rather than personalized content in this send.

**Email-to-site continuity**
Cannot fully verify due to 403 responses on all tracked links (expected behavior for click-tracking infrastructure when probed directly — not an actual broken link issue in production). The campaign parameters are comprehensive: AppsFlyer attribution, cm_mmc tracking, re-engagement windows. Attribution architecture appears mature.

**Bugs / friction / clarity issues**
- **[FAIL] Plain-text fallback: 0 characters.** Worst technical issue in the send. Creates deliverability risk and accessibility failure.
- **[FAIL] Link error on one tracking redirect.** The `dv.adidas.com` redirect URL contains `unknown url type` — this may indicate a broken personalization token that was not resolved before send.
- **[WARN] HTTP image sources (4 instances)** on arrow CTA icons. Will be silently blocked by Gmail, Outlook, and Apple Mail, degrading CTA affordance.
- **[WARN] Missing alt text** on the main hero jersey image and a tracking pixel. Zero fallback messaging if images are blocked on first open.
- **[WARN] Unresolved asterisk** on "AVAILABLE ONLINE AND AT SELECT STORES.*" — no corresponding footnote visible in the email body.
- **[WARN] Duplicate CTA links** — SHOP NOW and FIND STORE NOW each appear 5–6 times pointing to identical destinations; likely a carousel collapsed into static rendering.
- **[WARN] SPF/DKIM authentication status unknown** via AgentMail relay — cannot confirm sender authentication, though sender domain and infrastructure appear legitimate.
## Recent history

- [[2026-03-17-unlock-more-rewards-with-the-adidas-app]] — 4/10 (2026-03-17)
- [[2026-03-17-anthony-edwards-2-red-black-available-now]] — 6/10 (2026-03-17)
- [[2026-03-16-tell-us-more-about-you]] — 6/10 (2026-03-16)

