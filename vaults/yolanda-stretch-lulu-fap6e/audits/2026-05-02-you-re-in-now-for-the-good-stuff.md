---
slug: 2026-05-02-you-re-in-now-for-the-good-stuff
type: email
date: 2026-05-02
persona: yolanda-stretch-lulu-fap6e
score: "7/10"
sender: lululemon
subject: "You're in. Now for the good stuff."
tags: [email, score-7, sender/lululemon]
---
# You're in. Now for the good stuff.
**Score:** 7/10 · **Type:** Email audit · **2026-05-02**
## Executive summary

- A well-produced welcome email that does the job it's designed for: confirm enrollment, surface the membership benefit stack, and drive the first app download or browse session. The dark hero is confident and on-brand; the red membership band is a strong visual pivot. The email is long but structured, and the progression from welcome → benefits → app → store feels logical. The main weaknesses are small-text body copy in the hero that's almost unreadable at normal size, a benefits grid that's busy without clear hierarchy, and CTAs that could be tighter. Overall, a solid onboarding send.

## What's working

- **Hero confidence.** Dark background, large "Welcome to lululemon." headline, athletic model — immediately communicates premium, aspirational positioning. The tone matches the brand.
- **Membership band.** The bright red "Membership you can feel." section is the most visually arresting element in the email. It forces a stop on scroll and elevates the membership framing.
- **Logical flow.** Welcome → benefits grid → mobile app → footer utility. The email guides the reader through onboarding beats without feeling chaotic.
- **App section close.** "Only the best. In your pocket." is a clean close. Pushing the app as a membership utility at the bottom is smart sequencing.

## What's weak

- **Hero body copy is unreadable.** The text block beneath the headline in the hero section is very small and low-contrast. At typical inbox render sizes, it's illegible. If this copy is selling the brand promise, it's not landing.
- **Benefits grid lacks hierarchy.** The "Your benefits await." section shows 4+ benefit tiles (Early Access to Product Drops, Free Hemming, and others) but the layout feels uniform — no visual weight distinguishes the best benefit from the lesser ones. First-time members won't know where to look.
- **Two CTAs in hero = mild friction.** "Shop What's New" and a second CTA button compete with each other. For a welcome email, a single primary CTA (probably Shop) would be stronger.
- **Footer is dense.** The Download the App / Shop What's New / Find a Store link block plus social icons plus legal text creates a cluttered terminus. It doesn't ruin the email, but it dissipates momentum.

## Recommendations

- 1. **Increase hero body text size or cut it.** If it's not legible at mobile render, it's dead weight. Make the key benefit statement one clear, large sentence or remove it.
- 2. **Feature one hero benefit.** Pick the single most compelling membership perk (likely Early Access) and give it a dedicated callout above the grid rather than burying it in equal-weight tiles.
- 3. **Consolidate hero CTAs to one.** "Shop What's New" as the primary; move the second action to a text link below.
- 4. **Add a personalization hook.** The subject line says "you're in" but the email body doesn't reference the recipient's name anywhere visible. A simple "Hey [First Name]" in the hero would sharpen the welcome feel substantially.
- | Priority | Action |
- |---|---|
- | **P0** | Fix font CDN 403s — check `globalstaticassets.lululemon.com` CORS policy and signed URL expiry before send. All five Saans and KHGiga variants are affected. |
- | **P1** | Add `alt="lululemon"` to the masthead yogotype image and `alt=""` to the three footer arrow images. |
- | **P1** | Verify `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` headers in SFMC send preview / raw header dump — do not rely solely on relay capture. |
- | **P2** | Spot-check at least 3–5 SFMC-tracked CTA destinations to confirm UTM params and landing page alignment prior to send. |

## Full review
---

## lululemon — "You're in. Now for the good stuff."

---

### 1. Executive Summary

A well-produced welcome email that does the job it's designed for: confirm enrollment, surface the membership benefit stack, and drive the first app download or browse session. The dark hero is confident and on-brand; the red membership band is a strong visual pivot. The email is long but structured, and the progression from welcome → benefits → app → store feels logical. The main weaknesses are small-text body copy in the hero that's almost unreadable at normal size, a benefits grid that's busy without clear hierarchy, and CTAs that could be tighter. Overall, a solid onboarding send.

---

### 2. Business Impact Score: **7/10**

---

### 3. What's Working

- **Hero confidence.** Dark background, large "Welcome to lululemon." headline, athletic model — immediately communicates premium, aspirational positioning. The tone matches the brand.
- **Membership band.** The bright red "Membership you can feel." section is the most visually arresting element in the email. It forces a stop on scroll and elevates the membership framing.
- **Logical flow.** Welcome → benefits grid → mobile app → footer utility. The email guides the reader through onboarding beats without feeling chaotic.
- **App section close.** "Only the best. In your pocket." is a clean close. Pushing the app as a membership utility at the bottom is smart sequencing.

---

### 4. What's Weak

- **Hero body copy is unreadable.** The text block beneath the headline in the hero section is very small and low-contrast. At typical inbox render sizes, it's illegible. If this copy is selling the brand promise, it's not landing.
- **Benefits grid lacks hierarchy.** The "Your benefits await." section shows 4+ benefit tiles (Early Access to Product Drops, Free Hemming, and others) but the layout feels uniform — no visual weight distinguishes the best benefit from the lesser ones. First-time members won't know where to look.
- **Two CTAs in hero = mild friction.** "Shop What's New" and a second CTA button compete with each other. For a welcome email, a single primary CTA (probably Shop) would be stronger.
- **Footer is dense.** The Download the App / Shop What's New / Find a Store link block plus social icons plus legal text creates a cluttered terminus. It doesn't ruin the email, but it dissipates momentum.

---

### 5. Recommendations

1. **Increase hero body text size or cut it.** If it's not legible at mobile render, it's dead weight. Make the key benefit statement one clear, large sentence or remove it.
2. **Feature one hero benefit.** Pick the single most compelling membership perk (likely Early Access) and give it a dedicated callout above the grid rather than burying it in equal-weight tiles.
3. **Consolidate hero CTAs to one.** "Shop What's New" as the primary; move the second action to a text link below.
4. **Add a personalization hook.** The subject line says "you're in" but the email body doesn't reference the recipient's name anywhere visible. A simple "Hey [First Name]" in the hero would sharpen the welcome feel substantially.

---

### 6. Bottom Line

This is a competent, on-brand welcome email from a brand that clearly knows design. It's not exceptional — the benefits section undersells what lululemon membership actually means, and the hero text is functionally invisible — but it won't embarrass the brand and will drive a meaningful share of first sessions. Raising the benefits hierarchy and pruning the dual CTA would push this from a 7 to a 9.

---

### 7. Subject Line Analysis

- **Subject:** `You're in. Now for the good stuff.`
- **Length:** 34 characters
- **Scores (1-10):** Clarity `8`, Curiosity `7`, Personalization `4`, Urgency `3`, Specificity `3`
- **Strengths:**
  - "You're in." is punchy and delivers the confirmation payoff immediately
  - "Now for the good stuff" earns the open by implying there's a reveal waiting
- **Weaknesses:**
  - Zero specificity — "good stuff" is vague filler that doesn't tease a concrete benefit
  - No personalization; "You're in" is warm but generic at scale
- **Alt A:** `You're in. Here's what your lululemon membership actually gets you.`
- **Alt B:** `Welcome to lululemon. Your first member perk starts now.`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the visible render suggests no intentional preheader is set; the preview likely bleeds footer or browser-view text
- **Length:** N/A
- **Scores (1-10):** Complements subject `2`, Specificity `1`, Clarity `1`, Inbox-fit `2`
- **Strengths:**
  - None evident
- **Weaknesses:**
  - A welcome email with no preheader wastes a high-attention open moment
  - The subject does most of the heavy lifting alone; the preview slot is dead air
- **Alt A:** `Early product drops, free hemming, and more — your benefits are live.`
- **Alt B:** `Your membership perks are waiting. Here's what to explore first.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `7/10`
- **Rationale:** "You're in. Now for the good stuff." is genuinely satisfying post-signup — it delivers the confirmation with personality rather than a sterile "Account Created" subject. The lululemon sender name carries enough brand equity that I'm not filtering it. The missing preheader costs a point because there's no extra pull beyond the subject.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** The membership benefits grid is interesting enough to scan, but the benefits tiles are too small and visually flat to drive urgency — I'd read and move on. The app CTA at the bottom is clean but competes with "Shop What's New" for my attention. If the first benefit (Early Access) had been surfaced with real specificity ("Next drop: May 8"), the CTR would climb noticeably.

---

### 11. Evidence

- **Overall purpose:** Welcome / onboarding email following lululemon membership signup. Primary goal is to surface membership value and drive first engagement (browse or app download).
- **Hero / primary value proposition:** Dark full-width hero with "Welcome to lululemon." headline and male athlete with medicine ball. Small body copy block (illegible at this size) and two CTA buttons: "Shop What's New" and a secondary action.
- **Membership / benefits section:** Red band reading "Membership you can feel." followed by "Your benefits await." grid with 4 benefit tiles — visible labels include "Early Access to Product Drops" and "Free Hemming." Imagery is lifestyle/product. Tiles are uniform in visual weight.
- **Product discoverability / recommendation modules:** No product recommendation tiles visible. The email is deliberately benefits-first rather than product-first, which is appropriate for onboarding.
- **Utility / secondary modules:** App download module ("Only the best. In your pocket."), footer links (Download the App, Shop What's New, Find a Store), social icons.
- **Bugs / friction / clarity issues:** Hero body text is functionally unreadable at normal render scale — too small, low contrast against the dark image. No other visible rendering bugs.

---

## Technical Audit

## Technical Audit — lululemon "You're in. Now for the good stuff."

**From:** hello@e.lululemon.com | **ESP:** Salesforce Marketing Cloud (SFMC)

---

### 1. Technical Summary

Five custom web fonts return HTTP 403, causing system-font fallback across all clients. Authentication headers (SPF/DKIM, List-Unsubscribe) were not captured by the relay, leaving compliance and deliverability status unverified.

---

### 2. Link & Tracking Issues

**FAIL — 5 broken font URLs (HTTP 403):**
```
https://globalstaticassets.lululemon.com/fonts/Saans-Light.woff
https://globalstaticassets.lululemon.com/fonts/Saans-Regular.woff
https://globalstaticassets.lululemon.com/fonts/Saans-Medium.woff
https://globalstaticassets.lululemon.com/fonts/Saans-SemiBold.woff
https://globalstaticassets.lululemon.com/fonts/KHGiga-Light.woff
```
All five `@font-face` sources are returning 403. The CDN (`globalstaticassets.lululemon.com`) is blocking the requests — likely a missing CORS/referer policy or expired signed URL. All clients that support web fonts (Apple Mail, Samsung Mail) will fall back to `Helvetica Neue` / `Arial` / `Times New Roman`. The visual difference is significant given KHGiga-Light is a display serif used for `guest-voice-*` headings.

**INFO — 29 tracking links not probed:**
Click-redirect domains (SFMC tracked links) were skipped by the HTTP prober. Destination URLs could not be validated. Manual spot-check of CTA destinations is recommended before send.

---

### 3. Rendering & Accessibility

**WARN — 4 images missing `alt` text:**

| Image | src |
|---|---|
| SFMC_Email_Masthead_Yogotype_OffBlack_140F0F | `images.lululemon.com/is/image/lululemon/SFMC_Email_Masthead_Yogotype_OffBlack_140F0F` |
| SFMC_Email_Footer_Arrow-Right (×3) | `...SFMC_Email_Footer_Arrow-Right?$pngstandard$` |

The masthead yogotype (logo) is a meaningful image — it must carry `alt="lululemon"`. The footer arrows are decorative but should use `alt=""` explicitly to suppress screen reader announcement. Missing `alt` on the logo also breaks image-off rendering (Outlook, corporate firewalls).

The HTML doctype is `HTML 4.01 Transitional`, which is correct for broad email client compatibility. `lang="en"` and `dir="ltr"` are present. Dark mode support is implemented via `color-scheme` meta + targeted CSS overrides for Gmail and Outlook.com — no issues here.

---

### 4. Personalization & Merge Tokens

No merge tokens or AMPscript/HML variable syntax is visible in the truncated HTML source. The subject line ("You're in.") suggests this is a welcome/confirmation send with no personalization required. No issues found.

---

### 5. Compliance

**WARN — List-Unsubscribe header not captured:**
The `List-Unsubscribe` header was not found by the relay. SFMC typically injects this header server-side; absence at the relay level may be a capture artifact rather than a true omission, but it must be verified. Gmail and Yahoo both require `List-Unsubscribe` for bulk senders (>5k/day) as of 2024 enforcement.

**WARN — List-Unsubscribe-Post not captured (RFC 8058):**
One-click unsubscribe (`List-Unsubscribe-Post: List-Unsubscribe=One-Click`) was not found. Yahoo and Gmail require this for bulk senders. Again may be a relay capture gap — confirm against raw headers in SFMC send logs.

**WARN — Authentication-Results header not captured:**
SPF, DKIM, and DMARC pass/fail status unknown. `e.lululemon.com` is a known SFMC sending domain; authentication is expected to be properly configured, but cannot be confirmed from available data.

The email body contains a visible physical address and unsubscribe link in the footer (standard SFMC footer injection) — CAN-SPAM requirements on body content are likely met, though this cannot be fully confirmed from the truncated source.

---

### 6. Email-to-Site Continuity

29 tracked links were skipped by the prober, so UTM parameter coverage cannot be automatically verified. The SFMC click-wrap will append tracking parameters at redirect time, but destination landing pages were not confirmed. No issues found in the HTML source itself — no raw untracked `lululemon.com` hrefs were visible.

---

### 7. Recommendations

| Priority | Action |
|---|---|
| **P0** | Fix font CDN 403s — check `globalstaticassets.lululemon.com` CORS policy and signed URL expiry before send. All five Saans and KHGiga variants are affected. |
| **P1** | Add `alt="lululemon"` to the masthead yogotype image and `alt=""` to the three footer arrow images. |
| **P1** | Verify `List-Unsubscribe`, `List-Unsubscribe-Post`, and `Authentication-Results` headers in SFMC send preview / raw header dump — do not rely solely on relay capture. |
| **P2** | Spot-check at least 3–5 SFMC-tracked CTA destinations to confirm UTM params and landing page alignment prior to send. |
## Recent history

- [[2026-05-01-15-off-our-way-of-saying-welcome]] — 5/10 (2026-05-01)

