---
slug: 2026-03-16-tell-us-more-about-you
type: email
date: 2026-03-16
persona: walker
score: "6/10"
sender: SKECHERS PLUS
subject: Tell us more about you!
tags: [email, score-6, sender/skechers-plus]
---
# Tell us more about you!
**Score:** 6/10 · **Type:** Email audit · **2026-03-16**
## Executive summary

- This is a profile-completion email with a loyalty points hook. The core mechanic is well-executed: three clear profile actions, each with a specific point reward attached. The problem is everything that comes after the primary CTA. An app-download pitch, product recommendations, category navigation, and a cluttered utility bar all pile onto a message that should have one job. The email earns attention with a focused top half, then fritters it away with a bottom half that reads like a newsletter digest.

## What's working

- **Gamified profile completion** is the standout strength. Each step (+25 / +50 / +25) is shown with its own icon and point value. The math is visible, the reward is concrete, and the progression feels earned rather than arbitrary.
- **Hero headline** — "HELP US GET TO KNOW YOU! (AND EARN POINTS TOO)" — is conversational and benefit-led. It positions the ask as mutual, not extractive.
- **"COMPLETE PROFILE" CTA** is dark, high-contrast, and unmissable. Button placement directly below the incentive list is correct.
- **"EARN. REDEEM. SHOP."** app section is visually punchy and breaks up the layout with a lifestyle image.

## What's weak

- **750 bonus points for app download undercuts the profile ask.** If profile completion earns 100 total points, and app download earns 750, the secondary module inadvertently signals that the primary ask isn't worth the effort. The hierarchy is inverted.
- **Product recommendations are incongruent.** "Styles we think you'll love..." appears before the user has completed their profile — the very data that would make personalization possible. The module undermines the email's own argument.
- **Category navigation bar (Women / Men / Kids / Clothing / New Arrivals / Sale)** is boilerplate padding. It adds scroll length without purpose in a profile-completion email.
- **Bottom utility bar is overloaded.** Download the App, Curbside Pickup, Shop Now Pay Later, and Find a Store appear simultaneously. These belong in a transactional or newsletter context, not here.
- **Product tile images are small and indistinct.** Three shoe thumbnails in a narrow row at low resolution don't do the product justice and add no real discovery value.

## Recommendations

- 1. **Reorder or remove the 750-point app module.** Either place it after the profile CTA with a transitional message ("Done? Here's another way to earn.") or cut it from this email entirely and send it separately.
- 2. **Cut the product recommendation module.** It's logically inconsistent here — restore it once the user has actually completed their profile. Use that as a follow-up email hook.
- 3. **Remove the category navigation bar.** It dilutes focus with zero payoff in this context.
- 4. **Trim the utility bar to one or two items max.** "Download the App" is already covered above the fold. Keep "Find a Store" if needed; cut the rest.
- 5. **Add a progress indicator or counter.** "You've earned X of 100 possible profile points" above the CTA would personalize the email for members who have partially completed their profile, making the ask more targeted.
- | Priority | Issue | Action |
- |---|---|---|
- | **High** | HTTP image assets (10 images) | Update `image.emails.skechers.com` asset URLs to HTTPS across all footer/body images |
- | **High** | Empty `first_name` greeting | Add ESP fallback: `{{first_name | default: "there"}}` or equivalent |
- | **High** | Missing plain-text part | Generate `text/plain` MIME part from content; minimum 200 chars |
- | **High** | iGoDigital rec links failing | Verify `item=` URL parameter is fully encoded ASCII; remove or percent-encode any ellipsis characters |
- | **Medium** | Missing `http-equiv` on meta tags | Fix: `<meta http-equiv="Content-Type" content="text/html; charset=utf-8">` and `<meta http-equiv="X-UA-Compatible" content="IE=Edge">` |
- | **Medium** | 400 on 3 tracking links | Regenerate signed `?qs=` tokens for production send; do not reuse tokens from seed/test sends |
- | **Medium** | HTTP tracking pixel (`o.gif`) | Migrate `ink1000.com` open-tracking pixel to HTTPS endpoint; add `alt=""` |
- | **Low** | Missing `alt=""` on rec images | Add `alt=""` to all 3 iGoDigital product images to ensure clean broken-image states |
- | **Low** | UTM parameters unverifiable | Manually verify UTM tags on at least one decoded CTA link before deployment |
- | **Low** | SPF/DKIM unverified | Confirm `Authentication-Results` headers on a seed inbox (Gmail/Yahoo) show `pass` |

## Full review
### 1. Executive Summary

This is a profile-completion email with a loyalty points hook. The core mechanic is well-executed: three clear profile actions, each with a specific point reward attached. The problem is everything that comes after the primary CTA. An app-download pitch, product recommendations, category navigation, and a cluttered utility bar all pile onto a message that should have one job. The email earns attention with a focused top half, then fritters it away with a bottom half that reads like a newsletter digest.

---

### 2. Business Impact Score

**6 / 10**

The points-for-profile mechanic is genuinely motivating and clearly communicated — that earns real credit. But the dilution of focus below the fold will suppress click-through on the primary CTA. Users who scroll past "Complete Profile" face a competing app-download ask with an even larger incentive (750 bonus points vs. 100 total for profile), which creates a value-hierarchy problem.

---

### 3. What's Working

- **Gamified profile completion** is the standout strength. Each step (+25 / +50 / +25) is shown with its own icon and point value. The math is visible, the reward is concrete, and the progression feels earned rather than arbitrary.
- **Hero headline** — "HELP US GET TO KNOW YOU! (AND EARN POINTS TOO)" — is conversational and benefit-led. It positions the ask as mutual, not extractive.
- **"COMPLETE PROFILE" CTA** is dark, high-contrast, and unmissable. Button placement directly below the incentive list is correct.
- **"EARN. REDEEM. SHOP."** app section is visually punchy and breaks up the layout with a lifestyle image.

---

### 4. What's Weak

- **750 bonus points for app download undercuts the profile ask.** If profile completion earns 100 total points, and app download earns 750, the secondary module inadvertently signals that the primary ask isn't worth the effort. The hierarchy is inverted.
- **Product recommendations are incongruent.** "Styles we think you'll love..." appears before the user has completed their profile — the very data that would make personalization possible. The module undermines the email's own argument.
- **Category navigation bar (Women / Men / Kids / Clothing / New Arrivals / Sale)** is boilerplate padding. It adds scroll length without purpose in a profile-completion email.
- **Bottom utility bar is overloaded.** Download the App, Curbside Pickup, Shop Now Pay Later, and Find a Store appear simultaneously. These belong in a transactional or newsletter context, not here.
- **Product tile images are small and indistinct.** Three shoe thumbnails in a narrow row at low resolution don't do the product justice and add no real discovery value.

---

### 5. Recommendations

1. **Reorder or remove the 750-point app module.** Either place it after the profile CTA with a transitional message ("Done? Here's another way to earn.") or cut it from this email entirely and send it separately.
2. **Cut the product recommendation module.** It's logically inconsistent here — restore it once the user has actually completed their profile. Use that as a follow-up email hook.
3. **Remove the category navigation bar.** It dilutes focus with zero payoff in this context.
4. **Trim the utility bar to one or two items max.** "Download the App" is already covered above the fold. Keep "Find a Store" if needed; cut the rest.
5. **Add a progress indicator or counter.** "You've earned X of 100 possible profile points" above the CTA would personalize the email for members who have partially completed their profile, making the ask more targeted.

---

### 6. Bottom Line

Strong top half, unfocused bottom half. The profile-completion mechanic is well-designed and the points values are motivating — but this email tries to be a newsletter by the time it ends. Strip it down to one job: get the profile complete. Every module below the primary CTA should either support that goal or be removed.

---

### 7. Evidence

**Overall purpose:** Drive Skechers Plus members to complete their loyalty profile in exchange for points rewards.

**Hero / primary value proposition:** "Help us get to know you (and earn points too)" — positions profile data as a mutual exchange. Three clearly itemized incentives (+25 birthday, +50 footwear preferences, +25 full name) make the reward structure transparent.

**Membership / benefits section:** The points-per-action breakdown effectively functions as a mini benefits module. The explanatory note ("Visit the my account page to update your profile and earn points for every question you answer") is helpful but slightly redundant given the visual list above it.

**Product discoverability / recommendation modules:** Three shoe thumbnails labeled "Styles we think you'll love..." appear mid-email. Images are small and the module is logically premature given the email's stated goal of collecting preference data. Adds scroll length without adding value.

**Utility / secondary modules:** App download block (750 bonus points) is visually strong but strategically misplaced. Category nav, utility bar (Afterpay, Klarna, Curbside Pickup, Find a Store), and social links crowd the footer. Each element is individually fine; collectively they make the email feel unfocused.

**Bugs / friction / clarity issues:** No visible broken images, overlapping text, or empty fields. All CTA buttons and app store badges render cleanly. Rendering appears intact.

---

## Technical Audit

## Technical Audit: "Tell us more about you!" — SKECHERS PLUS

**From:** SKECHERS PLUS <no-reply@emails.skechers.com>
**Date:** 2026-03-16

---

### 1. Technical Summary

This profile-completion triggered email has two confirmed failures (broken recommendation engine links and a missing plain-text part) and a widespread HTTP image asset problem affecting 10+ images. The empty greeting merge token is a notable personalization defect.

---

### 2. Link & Tracking Issues

**[FAIL] iGoDigital recommendation links — ASCII encoding error (3 links)**
All three product recommendation links from `100007688.recs.igodigital.com` fail with an ASCII codec error caused by a truncated/non-ASCII character (`\u2026` — ellipsis) in the URL:
```
https://100007688.recs.igodigital.com/rr/v2/5bfd72be23e5401729d17e23/i/1/8107766165?item=pr…
https://100007688.recs.igodigital.com/rr/v2/5bfd72be23e5401729d17e23/i/2/8107766165?item=pr…
https://100007688.recs.igodigital.com/rr/v2/5bfd72be23e5401729d17e23/i/3/8107766165?item=pr…
```
The `item=pr…` parameter is truncated in the audit source. If the live HTML contains an actual ellipsis character in the URL, this will cause failures in clients and link checkers. The full `item=` parameter must be URL-encoded ASCII.

**[WARN] click.emails.skechers.com links returning 400 (3 links)**
Three tracked links returned HTTP 400 on probe:
- Image link: `49468f73-4651-4af3-bea2-61d1ae5db486.png`
- "LET'S GET TEXTING"
- "Text SKECHERS to 83828 for exclusive offers!"

400s on tracking links typically indicate expired or malformed signed query strings (`?qs=...`). If these are from a test/seed send rather than live deployment, confirm tokens are regenerated for the production send.

**[WARN] Main CTA links rate-limited (429)** — 6 primary links (REDEEM ×2, profile completion CTAs, "HELP US GET TO KNOW YOU") returned 429. This is a probe-side rate-limit from Skechers' click domain and does not indicate broken links, but prevents confirmation of final destination URLs.

---

### 3. Rendering & Accessibility

**[FAIL] Plain-text alternative missing** — The MIME multipart `text/plain` part is 0 characters. This causes deliverability penalties with spam filters that expect a text fallback, and breaks accessibility for text-only email clients.

**[WARN] Pervasive HTTP image sources (10 images)** — The following asset domain serves images over HTTP instead of HTTPS:
```
http://image.emails.skechers.com/lib/fe3115707564047a731c78/m/11/...
```
Affected images include the Skechers logo, app store badges (App Store, Google Play), footer icons (Instagram, Facebook, YouTube), and feature icons (Curbside Pickup, AfterPay, Find A Store). Modern email clients (Outlook, Apple Mail with "load remote content" enforced over HTTPS) may block these entirely, rendering the email imageless.

**[WARN] Open pixel over HTTP** — The tracking beacon at `http://www.ink1000.com/...o.gif` is served over HTTP. In addition to potential blocking, this pixel has no `alt` attribute.

**[WARN] Missing `alt` text on 4 images:**
- `o.gif` (tracking pixel — intentional, but should use `alt=""`)
- All 3 iGoDigital recommendation product images (`8107766165` items 1–3)

The recommendation images lack any `alt=""` attribute, meaning broken image states will render unstyled placeholder icons rather than blank space.

**[INFO] `<meta http-equiv>` attributes missing `http-equiv` value** — Two meta tags in `<head>` omit the `http-equiv` attribute name:
```html
<meta content="text/html; charset=utf-8" />  <!-- missing http-equiv="Content-Type" -->
<meta content="IE=Edge" />                   <!-- missing http-equiv="X-UA-Compatible" -->
```
These tags are non-functional as written and should be corrected to `<meta http-equiv="Content-Type" ...>` and `<meta http-equiv="X-UA-Compatible" ...>`.

---

### 4. Personalization & Merge Tokens

**[FAIL] Empty greeting slot** — The greeting renders as `"Hi ,"` with a blank name field. The subscriber first-name token is either unresolved or the fallback value is empty. A safe fallback (e.g., `Hi there,` or `Hi Skechers Plus member,`) must be defined in the ESP template for records where `first_name` is null or empty.

**[INFO]** The `mi_u=8107766165` parameter in the tracking pixel and recommendation URLs is a subscriber identifier — verify this value is being dynamically substituted per recipient and is not hardcoded from a test record.

---

### 5. Compliance

**[WARN] Authentication-Results header not available** — SPF/DKIM pass/fail status could not be verified via the AgentMail relay. This should be confirmed against the actual delivered message headers (`Authentication-Results: mx.google.com` or equivalent) before deployment sign-off.

**[INFO]** CAN-SPAM structural elements (physical address, unsubscribe link) were not flagged as missing by automated checks — assumed present in the footer, consistent with other Skechers Plus sends.

---

### 6. Email-to-Site Continuity

The primary CTA links (REDEEM, COMPLETE PROFILE) are all routed through `click.emails.skechers.com` tracking redirects and were rate-limited, so final landing page URLs and UTM parameter presence cannot be confirmed. Based on the link text and email purpose (profile completion), expected destinations are the Skechers Plus account/profile page. UTM parameters should minimally include:
```
utm_source=email&utm_medium=email&utm_campaign=pluswelcome_3&utm_content=completeprofile
```
The `mi_ecmp=TRG_US_EN_PLUSWELCOME_3_09082025` parameter on the tracking pixel confirms this is the PLUSWELCOME_3 flow — verify CTAs carry consistent campaign tagging.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| **High** | HTTP image assets (10 images) | Update `image.emails.skechers.com` asset URLs to HTTPS across all footer/body images |
| **High** | Empty `first_name` greeting | Add ESP fallback: `{{first_name | default: "there"}}` or equivalent |
| **High** | Missing plain-text part | Generate `text/plain` MIME part from content; minimum 200 chars |
| **High** | iGoDigital rec links failing | Verify `item=` URL parameter is fully encoded ASCII; remove or percent-encode any ellipsis characters |
| **Medium** | Missing `http-equiv` on meta tags | Fix: `<meta http-equiv="Content-Type" content="text/html; charset=utf-8">` and `<meta http-equiv="X-UA-Compatible" content="IE=Edge">` |
| **Medium** | 400 on 3 tracking links | Regenerate signed `?qs=` tokens for production send; do not reuse tokens from seed/test sends |
| **Medium** | HTTP tracking pixel (`o.gif`) | Migrate `ink1000.com` open-tracking pixel to HTTPS endpoint; add `alt=""` |
| **Low** | Missing `alt=""` on rec images | Add `alt=""` to all 3 iGoDigital product images to ensure clean broken-image states |
| **Low** | UTM parameters unverifiable | Manually verify UTM tags on at least one decoded CTA link before deployment |
| **Low** | SPF/DKIM unverified | Confirm `Authentication-Results` headers on a seed inbox (Gmail/Yahoo) show `pass` |
## Recent history

- [[2026-03-16-earn-adiclub-points-to-unlock-more-rewards]] — 5/10 (2026-03-14)
- [[2026-03-16-your-skechers-plus-cheat-sheet]] — 5.5/10 (2026-03-14)
- [[2026-03-16-your-20-off-welcome-offer-is-waiting]] — 5/10 (2026-03-13)

