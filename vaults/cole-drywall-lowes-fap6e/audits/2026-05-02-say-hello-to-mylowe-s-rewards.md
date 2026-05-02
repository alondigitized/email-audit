---
slug: 2026-05-02-say-hello-to-mylowe-s-rewards
type: email
date: 2026-05-02
persona: cole-drywall-lowes-fap6e
score: "5/10"
sender: "MyLowe's Rewards"
subject: "Say hello to MyLowe's Rewards!👋"
tags: [email, score-5, sender/mylowe-s-rewards]
---
# Say hello to MyLowe's Rewards!👋
**Score:** 5/10 · **Type:** Email audit · **2026-05-02**
## Executive summary

- This is a loyalty program welcome email triggered by sign-up. Its job is to orient a new member, surface the join incentive ($5 off), and explain the program's ongoing value. The layout is structured and on-brand, but it tries to do too much: five distinct benefit modules compete for attention, diluting the welcome moment. The $5 sign-up offer — the highest-urgency message — is buried behind a weak CTA label. The email reads more like a program brochure than a conversion trigger.

## What's working

- **Brand clarity.** Lowe's blue and the rewards logo land immediately. No ambiguity about who this is from or what it's about.
- **Benefit hierarchy.** EARN → FREE → SAVE 5% → App is a logical progression from soft to hard value.
- **"SAVE 5% EVERY DAY"** is the strongest sub-module — concrete, ongoing, and differentiated from a one-time coupon.
- **Free member gifts + free shipping** are visually clean with icon treatment that makes them scannable.

## What's weak

- **Hero CTA is misaligned.** The offer is "$5 OFF on eligible purchase of $50 or more" but the CTA reads **"View e-wallet."** This is a friction point — new members don't yet know what an e-wallet is, and the phrasing implies the work is on them. It should say "Claim Your $5" or "Shop Now."
- **No personalization is visible.** No name, no store, no product category signal. For a welcome email that presumably has account data, this is a missed warm-start opportunity.
- **Too many CTAs.** The email has at least five distinct action prompts: View e-wallet, Learn more (credit card), Download now (app), Find a Store, Get Our App. This is a CTA debt spiral — each additional one reduces the probability of any single click.
- **The app download module feels misplaced.** Putting "Download the Lowe's app" as a full-width module inside a rewards welcome email is off-topic and interrupts the loyalty narrative.
- **The social icon strip is dead weight.** At this stage of the funnel (fresh sign-up), the goal is to drive a first purchase, not gain a follower. Social icons here are filler.
- **Dense legal wall at the bottom.** The fine print appears substantial — while required, it creates an aesthetic cliff that undercuts the upbeat tone above.

## Recommendations

- 1. **Rename the hero CTA.** Change "View e-wallet" to "Shop and Use Your $5" or "Start Earning Now." Make the reward feel immediately actionable.
- 2. **Cut to three CTAs max.** Hero (claim offer) + secondary (credit card) + tertiary (app). Remove "Find a Store" and "Get Our App" from the footer body.
- 3. **Add a first name.** Even "Welcome, [First Name]" in the hero block converts better and costs nothing if the data is there.
- 4. **Add an expiration to the $5 offer.** Even a soft deadline like "Use it on your next visit" creates urgency that "just for joining" does not.
- 5. **Move app download to a follow-up email.** Keep this email single-threaded around the loyalty onboarding moment.
- | Priority | Issue | Action |
- |---|---|---|
- | High | `List-Unsubscribe-Post` missing | Add `List-Unsubscribe-Post: List-Unsubscribe=One-Click` header at ESP level; required for Gmail bulk sender compliance |
- | High | `List-Unsubscribe` unverified | Confirm header is present via raw header inspection in a live inbox (Gmail / Outlook) |
- | High | Authentication-Results not captured | Inspect raw received headers in a seed inbox to confirm SPF pass + DKIM signature aligns with `lowes.com` DMARC policy |
- | Medium | Missing alt text on `a22207c1...jpg` | Add descriptive `alt` attribute; minimum `alt=""` for decorative images |
- | Medium | 21 tracking links unprobed | Manually unwrap and spot-check 3–5 destination URLs for valid resolution and UTM params (`utm_source`, `utm_medium`, `utm_campaign`) |
- | Low | DIN Next scaffold version drift | Pin Bold and Black to `1.4.4` or confirm `1.2.0` assets are identical and will not be pruned |
- | Low | woff-only web fonts | Add `woff2` variants to all six `@font-face` blocks for performance |

## Full review
---

## Email Review — MyLowe's Rewards Welcome

---

### 1. Executive Summary

This is a loyalty program welcome email triggered by sign-up. Its job is to orient a new member, surface the join incentive ($5 off), and explain the program's ongoing value. The layout is structured and on-brand, but it tries to do too much: five distinct benefit modules compete for attention, diluting the welcome moment. The $5 sign-up offer — the highest-urgency message — is buried behind a weak CTA label. The email reads more like a program brochure than a conversion trigger.

---

### 2. Business Impact Score

**5 / 10**

Competent execution of a generic template. Misses the opportunity to create urgency or deepen engagement at the highest-leverage moment in the loyalty lifecycle (the first touchpoint post-enrollment).

---

### 3. What's Working

- **Brand clarity.** Lowe's blue and the rewards logo land immediately. No ambiguity about who this is from or what it's about.
- **Benefit hierarchy.** EARN → FREE → SAVE 5% → App is a logical progression from soft to hard value.
- **"SAVE 5% EVERY DAY"** is the strongest sub-module — concrete, ongoing, and differentiated from a one-time coupon.
- **Free member gifts + free shipping** are visually clean with icon treatment that makes them scannable.

---

### 4. What's Weak

- **Hero CTA is misaligned.** The offer is "$5 OFF on eligible purchase of $50 or more" but the CTA reads **"View e-wallet."** This is a friction point — new members don't yet know what an e-wallet is, and the phrasing implies the work is on them. It should say "Claim Your $5" or "Shop Now."
- **No personalization is visible.** No name, no store, no product category signal. For a welcome email that presumably has account data, this is a missed warm-start opportunity.
- **Too many CTAs.** The email has at least five distinct action prompts: View e-wallet, Learn more (credit card), Download now (app), Find a Store, Get Our App. This is a CTA debt spiral — each additional one reduces the probability of any single click.
- **The app download module feels misplaced.** Putting "Download the Lowe's app" as a full-width module inside a rewards welcome email is off-topic and interrupts the loyalty narrative.
- **The social icon strip is dead weight.** At this stage of the funnel (fresh sign-up), the goal is to drive a first purchase, not gain a follower. Social icons here are filler.
- **Dense legal wall at the bottom.** The fine print appears substantial — while required, it creates an aesthetic cliff that undercuts the upbeat tone above.

---

### 5. Recommendations

1. **Rename the hero CTA.** Change "View e-wallet" to "Shop and Use Your $5" or "Start Earning Now." Make the reward feel immediately actionable.
2. **Cut to three CTAs max.** Hero (claim offer) + secondary (credit card) + tertiary (app). Remove "Find a Store" and "Get Our App" from the footer body.
3. **Add a first name.** Even "Welcome, [First Name]" in the hero block converts better and costs nothing if the data is there.
4. **Add an expiration to the $5 offer.** Even a soft deadline like "Use it on your next visit" creates urgency that "just for joining" does not.
5. **Move app download to a follow-up email.** Keep this email single-threaded around the loyalty onboarding moment.

---

### 6. Bottom Line

A serviceable welcome email that won't embarrass the brand but won't move the needle either. The structural bones are fine; the problem is execution — too many asks, a weak CTA on the primary offer, and no personalization to make a new member feel seen. A 20-minute copy pass on the hero CTA + removing two modules would measurably improve conversion.

---

### 7. Subject Line Analysis

- **Subject:** `Say hello to MyLowe's Rewards!👋`
- **Length:** 32 characters (including emoji)
- **Scores (1-10):** Clarity `7`, Curiosity `3`, Personalization `2`, Urgency `2`, Specificity `3`
- **Strengths:**
  - Short and clean; the waving hand emoji adds warmth appropriate for a welcome moment
  - Clearly identifies the program name, so recipients know exactly what this is
- **Weaknesses:**
  - Zero urgency or hook — "say hello" is the brand speaking at the reader, not offering them anything
  - No mention of the $5 offer, which is the single most click-worthy fact in the entire email
- **Alt A:** `Your $5 reward is ready — welcome to MyLowe's Rewards 👋`
- **Alt B:** `You're in. Here's what MyLowe's Rewards gets you.`

---

### 8. Preview Text Analysis

- **Preview:** `(none / leaking junk)` — the top bar appears to contain a view-in-browser or system link rather than intentional preheader copy; no distinct preheader is visible
- **Length:** N/A
- **Scores (1-10):** Complements subject `1`, Specificity `1`, Clarity `1`, Inbox-fit `1`
- **Strengths:**
  - (none — no effective preheader is present)
- **Weaknesses:**
  - Entirely wasted inbox real estate; the subject line's already-low curiosity gets no lift
  - Likely showing a view-in-browser string or empty space in most clients, which signals low effort
- **Alt A:** `Your $5 join bonus is loaded and ready to use on any $50+ purchase.`
- **Alt B:** `Earn points, get free shipping, and save 5% every day — here's how.`

---

### 9. Open Likelihood (persona-grounded)

- **Score:** `5/10`
- **Rationale:** As someone who just signed up for a Lowe's loyalty program, I recognize the sender and vaguely expect this email — but "Say hello" tells me nothing is urgent or time-sensitive, so it competes with everything else in the inbox on a lazy sort. The emoji is mild novelty; it doesn't manufacture urgency.

---

### 10. Click-Through Likelihood (persona-grounded)

- **Score:** `3/10`
- **Rationale:** The $5 offer is genuinely useful but "View e-wallet" is a confusing action that stalls momentum. The five competing CTAs create decision paralysis, and nothing in the visual hierarchy makes any one path feel obviously right. I'd probably read it, feel vaguely informed, and close it without clicking.

---

### 11. Evidence

- **Overall purpose:** Loyalty program onboarding — orient new members and surface the sign-up incentive
- **Hero / primary value prop:** $5 OFF on eligible $50+ purchase for new members; CTA labeled "View e-wallet" on a blue-on-blue button
- **Membership / benefits section:** Three stacked modules — EARN points toward MyLowe's Money (with a card visual); FREE member gifts + standard shipping (icon pair layout); SAVE 5% EVERY DAY with credit card upsell and "Learn more" CTA
- **Product discoverability / recommendation modules:** None — no product tiles, category links, or personalized recommendations
- **Utility / secondary modules:** App download full-width module ("Download the Lowe's app today"), Find a Store text link, Get Our App text link, social media icon strip (Facebook, X, YouTube, Instagram, Pinterest)
- **Bugs / friction / clarity issues:** No visible broken images or overlapping text; footer legal copy is very dense and small but renders intact; the "View e-wallet" CTA label is a clarity issue (visible), not a rendering bug

---

## Technical Audit

## Technical Audit — MyLowe's Rewards Welcome Email

---

### 1. Technical Summary

Table-based XHTML 1.0 Transitional layout with responsive media queries; no structural HTML errors detected in the visible source. Three QA warnings require attention: two missing compliance headers and one unverified authentication chain.

---

### 2. Link & Tracking Issues

**Unprobed tracking links — 21 links skipped**
All 21 click-redirect links were bypassed by the HTTP probe because they route through a tracking domain. No confirmation that destination URLs are valid or that UTM parameters are present. This is a coverage gap, not a confirmed bug — but it means link integrity is unverified for the entire email.

**Action required:** Run a secondary check against the unwrapped destination URLs to confirm they resolve and carry expected UTM params.

---

### 3. Rendering & Accessibility

**Missing alt text — 1 image confirmed**
```
src: https://image.e.lowes.com/lib/fe9515707364027471/m/1/a22207c1-63c7-47c0-9e00-61227828e1fe.jpg
```
The `alt` attribute is absent. Screen readers will skip this element silently, and image-blocked clients (Outlook default, corporate proxies) will render a blank space with no fallback label.

**CDN scaffold version mismatch — DIN Next fonts**
```
DIN Next Regular:  /scaffold/1.4.4/fonts/din/din-next.woff
DIN Next Bold:     /scaffold/1.2.0/fonts/din/din-next-bold.woff
DIN Next Black:    /scaffold/1.2.0/fonts/din/din-next-black.woff
```
Regular loads from scaffold `1.4.4`; Bold and Black load from `1.2.0`. If the two scaffold versions shipped different font files, weight rendering may be inconsistent. If both paths are live and identical in content, this is low risk — but the version drift is a latent breakage point if CDN assets are pruned.

**woff only, no woff2**
All six `@font-face` declarations declare a single `woff` source with no `woff2` fallback. woff2 is supported by all modern email clients that support web fonts and compresses ~30% smaller. Not a rendering blocker, but a performance and future-proofing gap.

**No issues found:** Media queries, MSO conditional comment structure (`<!--[if !mso]><!-->`), and legacy Hotmail/ExternalClass hacks are syntactically correct.

---

### 4. Personalization & Merge Tokens

Source was truncated before the email body. No broken or un-replaced merge tokens (`{{`, `%`, `[%`) are visible in the provided portion. **Full-source scan required** to clear this category.

---

### 5. Compliance

**`List-Unsubscribe` header — not detected**
```
[WARN] List-Unsubscribe header not found: Header may not be captured by AgentMail relay
```
Could be a relay capture issue rather than a missing header, but the result is that automated inbox providers (Gmail, Yahoo) cannot surface the unsubscribe button from header data. Needs verification at the MTA layer.

**`List-Unsubscribe-Post` header — not detected (RFC 8058)**
```
[WARN] List-Unsubscribe-Post header not found
```
Gmail and Apple Mail require `List-Unsubscribe-Post: List-Unsubscribe=One-Click` for bulk senders to qualify for one-click unsubscribe. Without it, Gmail may force the user through a multi-step flow and this counts against sender reputation under Google's February 2024 bulk sender requirements.

**Authentication headers — unverified**
```
[WARN] Authentication-Results header not found: SPF/DKIM status unknown
```
Sending domain is `e.lowes.com` (ESP subdomain). SPF and DKIM are presumably configured at the ESP, but the AgentMail relay did not forward `Authentication-Results`. This leaves DMARC alignment status unconfirmable from this audit. Verify directly against a received header from an inbox probe.

---

### 6. Email-to-Site Continuity

All 21 tracked links were skipped, so UTM parameter presence and landing page alignment **cannot be confirmed** from this audit. The tracking domain pattern (`e.lowes.com` redirects) suggests Salesforce Marketing Cloud or similar — UTM injection is typically handled at send time, but a spot-check of 2–3 unwrapped URLs should be performed before sign-off.

---

### 7. Recommendations

| Priority | Issue | Action |
|---|---|---|
| High | `List-Unsubscribe-Post` missing | Add `List-Unsubscribe-Post: List-Unsubscribe=One-Click` header at ESP level; required for Gmail bulk sender compliance |
| High | `List-Unsubscribe` unverified | Confirm header is present via raw header inspection in a live inbox (Gmail / Outlook) |
| High | Authentication-Results not captured | Inspect raw received headers in a seed inbox to confirm SPF pass + DKIM signature aligns with `lowes.com` DMARC policy |
| Medium | Missing alt text on `a22207c1...jpg` | Add descriptive `alt` attribute; minimum `alt=""` for decorative images |
| Medium | 21 tracking links unprobed | Manually unwrap and spot-check 3–5 destination URLs for valid resolution and UTM params (`utm_source`, `utm_medium`, `utm_campaign`) |
| Low | DIN Next scaffold version drift | Pin Bold and Black to `1.4.4` or confirm `1.2.0` assets are identical and will not be pruned |
| Low | woff-only web fonts | Add `woff2` variants to all six `@font-face` blocks for performance |
## Recent history

- [[2026-05-01-verify-your-account-you-re-almost-done-gq9tnsoetx-1snwnprk0nq-g]] — 6/10 (2026-05-01)
- [[2026-05-01-verify-your-account-you-re-almost-done]] — 6/10 (2026-05-01)

