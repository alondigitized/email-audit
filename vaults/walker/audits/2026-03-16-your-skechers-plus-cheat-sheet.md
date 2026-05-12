---
slug: 2026-03-16-your-skechers-plus-cheat-sheet
type: email
date: 2026-03-14
persona: walker
score: "5.5/10"
sender: SKECHERS PLUS
subject: Your Skechers Plus Cheat Sheet
tags: [email, score-6, sender/skechers-plus]
---
# Your Skechers Plus Cheat Sheet
**Score:** 5.5/10 · **Type:** Email audit · **2026-03-14**
## Executive summary

- **Campaign:** TRG_US_EN_PLUSWELCOME_2_10312025 | **Inbox:** walker@agentmail.to | **Date:** 2026-03-15
- This is the second email in the Skechers Plus welcome series, designed to orient new members on program mechanics. The "cheat sheet" concept is sound — onboarding emails that teach rather than sell are the right instinct for loyalty programs. But execution has notable gaps: a failed personalization merge leaves an empty name slot, all image assets are served over HTTP instead of HTTPS (meaning they will silently block in many enterprise and security-aware email clients), and there is no plain-text fallback at all. The core program value proposition — earn points, reach Gold, redeem for rewards — is clearly structured and easy to follow. The urgency module around reward expiry is a smart activation mechanic. The lower half of the email is diluted by utility modules that add length without adding loyalty-specific value.

## What's working

- **Cheat Sheet framing** is the right approach for a loyalty onboarding email. It sets expectations and explains the program without overselling.
- **Program mechanics are clearly sequenced:** earn points → reach Gold → earn 20pts per $1 → redeem at 1,000 pts for $5. The math is transparent, which builds trust.
- **60-day reward expiry module** creates legitimate urgency and drives a login/account action — a high-value behavioral goal for early in the welcome series.
- **Dual REDEEM CTAs** (repeated) reinforce the primary action without being cluttered; they appear to be the main conversion point.
- **SMS opt-in module** is well-placed for a loyalty email — cross-channel engagement at the moment of highest member attention is smart.
- **App download links** (App Store + Google Play) are appropriate here; new members discovering the app early improves long-term retention.

## What's weak

- **Personalization failure is the most damaging issue.** The greeting renders as "Hi ," with an empty name slot. For a loyalty program email addressed to a named member, this reads as careless and undermines the relationship the email is trying to establish.
- **All image assets served over HTTP.** Every branded image — logo, icons, utility module images, social badges — uses `http://image.emails.skechers.com`. These will be blocked or flagged as insecure in Gmail, Outlook (strict mode), Apple Mail (with privacy protections), and many enterprise environments. If images fail to load, the email loses most of its visual hierarchy.
- **No plain-text fallback.** Zero characters. This is a deliverability risk and a compliance gap for accessibility-focused clients.
- **Module bloat in the lower half.** After the core program mechanics, the email stacks Curbside Pickup, AfterPay, and Find A Store icons. These are low-relevance for a loyalty onboarding email and dilute focus from the "log in and redeem" goal.
- **Gold tier framing is incomplete.** The email mentions Gold tier (20 pts per $1) without explaining what the base tier earns or how far a new member is from Gold. Without a progress anchor, the tier benefit is abstract.

## Recommendations

- 1. **Fix the personalization merge immediately.** Audit the `{{first_name}}` (or equivalent) variable in the ESP template. Add a fallback value ("member" or "Skechers Plus member") so the slot never renders empty.
- 2. **Migrate all image assets to HTTPS.** The `http://image.emails.skechers.com` CDN path should be a forced redirect to `https://`. Audit the template library for any hardcoded HTTP references — this appears systemic across the whole template, not one-off.
- 3. **Add a plain-text alternative.** At minimum, a stripped version of the program mechanics, the REDEEM URL, and footer links. This is both a deliverability best practice and an accessibility requirement.
- 4. **Cut or move the utility module block.** Curbside Pickup, AfterPay, and Find A Store belong in a general brand email, not a loyalty onboarding email. Remove them here or collapse them to a single footer line to tighten focus on the loyalty goal.
- 5. **Add a base tier context line.** Something like "You're currently earning X points per $1. Reach Gold at [threshold] for 20x." This makes the tier upgrade feel achievable and gives the member a progress anchor.
- 6. **Review the 60-day expiry module placement.** Currently it appears mid-email. If this is urgent and member-specific (i.e., they actually have expiring rewards), it should sit higher — ideally directly after the hero. If it is generic, consider whether it creates unnecessary anxiety for members with no points yet.

## Full review
## Walker Audit — Skechers Plus Cheat Sheet
**Campaign:** TRG_US_EN_PLUSWELCOME_2_10312025 | **Inbox:** walker@agentmail.to | **Date:** 2026-03-15

---

### 1. Executive Summary

This is the second email in the Skechers Plus welcome series, designed to orient new members on program mechanics. The "cheat sheet" concept is sound — onboarding emails that teach rather than sell are the right instinct for loyalty programs. But execution has notable gaps: a failed personalization merge leaves an empty name slot, all image assets are served over HTTP instead of HTTPS (meaning they will silently block in many enterprise and security-aware email clients), and there is no plain-text fallback at all. The core program value proposition — earn points, reach Gold, redeem for rewards — is clearly structured and easy to follow. The urgency module around reward expiry is a smart activation mechanic. The lower half of the email is diluted by utility modules that add length without adding loyalty-specific value.

---

### 2. Business Impact Score

**5.5 / 10**

The strategy and structure are appropriate for a welcome series. The score is held back by a personalization failure that damages trust on first impression, infrastructure issues (HTTP images) that could cause wholesale rendering failures for a meaningful subscriber segment, and a module stack that buries the core CTA under low-priority content.

---

### 3. What's Working

- **Cheat Sheet framing** is the right approach for a loyalty onboarding email. It sets expectations and explains the program without overselling.
- **Program mechanics are clearly sequenced:** earn points → reach Gold → earn 20pts per $1 → redeem at 1,000 pts for $5. The math is transparent, which builds trust.
- **60-day reward expiry module** creates legitimate urgency and drives a login/account action — a high-value behavioral goal for early in the welcome series.
- **Dual REDEEM CTAs** (repeated) reinforce the primary action without being cluttered; they appear to be the main conversion point.
- **SMS opt-in module** is well-placed for a loyalty email — cross-channel engagement at the moment of highest member attention is smart.
- **App download links** (App Store + Google Play) are appropriate here; new members discovering the app early improves long-term retention.

---

### 4. What's Weak

- **Personalization failure is the most damaging issue.** The greeting renders as "Hi ," with an empty name slot. For a loyalty program email addressed to a named member, this reads as careless and undermines the relationship the email is trying to establish.
- **All image assets served over HTTP.** Every branded image — logo, icons, utility module images, social badges — uses `http://image.emails.skechers.com`. These will be blocked or flagged as insecure in Gmail, Outlook (strict mode), Apple Mail (with privacy protections), and many enterprise environments. If images fail to load, the email loses most of its visual hierarchy.
- **No plain-text fallback.** Zero characters. This is a deliverability risk and a compliance gap for accessibility-focused clients.
- **Module bloat in the lower half.** After the core program mechanics, the email stacks Curbside Pickup, AfterPay, and Find A Store icons. These are low-relevance for a loyalty onboarding email and dilute focus from the "log in and redeem" goal.
- **Gold tier framing is incomplete.** The email mentions Gold tier (20 pts per $1) without explaining what the base tier earns or how far a new member is from Gold. Without a progress anchor, the tier benefit is abstract.

---

### 5. Recommendations

1. **Fix the personalization merge immediately.** Audit the `{{first_name}}` (or equivalent) variable in the ESP template. Add a fallback value ("member" or "Skechers Plus member") so the slot never renders empty.
2. **Migrate all image assets to HTTPS.** The `http://image.emails.skechers.com` CDN path should be a forced redirect to `https://`. Audit the template library for any hardcoded HTTP references — this appears systemic across the whole template, not one-off.
3. **Add a plain-text alternative.** At minimum, a stripped version of the program mechanics, the REDEEM URL, and footer links. This is both a deliverability best practice and an accessibility requirement.
4. **Cut or move the utility module block.** Curbside Pickup, AfterPay, and Find A Store belong in a general brand email, not a loyalty onboarding email. Remove them here or collapse them to a single footer line to tighten focus on the loyalty goal.
5. **Add a base tier context line.** Something like "You're currently earning X points per $1. Reach Gold at [threshold] for 20x." This makes the tier upgrade feel achievable and gives the member a progress anchor.
6. **Review the 60-day expiry module placement.** Currently it appears mid-email. If this is urgent and member-specific (i.e., they actually have expiring rewards), it should sit higher — ideally directly after the hero. If it is generic, consider whether it creates unnecessary anxiety for members with no points yet.

---

### 6. Bottom Line

A structurally solid loyalty onboarding email that would perform well if the critical failures were resolved. The personalization miss and HTTP image infrastructure are not cosmetic — they actively degrade trust and rendering. Fix those, cut the utility clutter, and this email does its job cleanly. As shipped, it signals operational sloppiness at exactly the moment a new loyalty member is forming their impression of the program.

---

### 7. Evidence

**Overall purpose of the email**
Welcome series, email 2 of N. Purpose is to educate a new Skechers Plus member on how to earn points, reach Gold status, and redeem rewards. Campaign ID `TRG_US_EN_PLUSWELCOME_2_10312025` confirms this is a triggered onboarding flow, not a broadcast. The intent is correct and the timing is appropriate.

**Hero / primary value proposition**
"Your Skechers Plus Cheat Sheet — It Pays to Be a Skechers Plus Member." Clear subject-line-to-hero continuity. The hero delivers on the subject line promise by immediately transitioning into program mechanics. Value prop is functional ("learn the program") rather than emotional ("you're special"). Acceptable for an onboarding email; a short aspirational line could elevate it.

**Membership / benefits section**
Two-step benefits ladder: (1) earn points on purchases, with Gold tier highlighted at 20 pts/$1; (2) redeem at 1,000 pts for a $5 reward. The structure is logical. The expiry urgency ("Rewards expire in 60 days — Log In") functions as both a benefit reminder and a behavioral nudge. Missing: base tier earn rate, current member point balance, and distance to Gold — data that would make this feel personalized rather than generic.

**Product discoverability / recommendation modules**
None present. This email does not include product recommendations or category callouts. Appropriate for a program-mechanics email — adding product modules here would dilute the onboarding focus.

**Utility / secondary modules**
App Store and Google Play download links — relevant and well-placed for onboarding. SMS opt-in ("LET'S GET TEXTING" / Text SKECHERS to 83828) — high-value cross-channel capture at peak engagement moment. Curbside Pickup, AfterPay, Find A Store — these three are off-strategy for this email type and should be removed.

**Email-to-site continuity**
All CTAs route through `click.emails.skechers.com` tracked links. QA probes received 429 rate-limiting responses (expected behavior for tracked link servers probed directly), not broken links. Destination pages are assumed to be the Skechers Plus account/rewards hub. No direct observation of landing page, but the CTA text ("REDEEM," "LOG IN") implies account-authenticated destinations — appropriate.

**Bugs / friction / clarity issues**
- **[FAIL] Empty personalization slot** — Greeting renders "Hi ," with no name. Likely an unresolved merge tag or missing subscriber data at send time.
- **[FAIL] No plain-text fallback** — 0 characters in plain-text part. Deliverability and accessibility risk.
- **[WARN] HTTP images (systemic)** — 10+ image assets served over `http://image.emails.skechers.com`. Will be blocked in secure/privacy-aware email environments. Affects logo, all utility icons, social icons, and at least one unnamed content image.
- **[WARN] Missing alt text** on two images including the primary content image (`49468f73...`) — if images block, these offer no fallback context.
- **[WARN] One tracking pixel** using `http://www.ink1000.com` — third-party HTTP pixel; potential privacy/rendering flag.
- **QA pass rate: 14%** — low signal-to-noise on warnings, but the two FAIL-level issues (personalization, plain text) and the HTTP infrastructure problem are genuine production concerns.
